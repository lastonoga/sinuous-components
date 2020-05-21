import { expression } from './expression';

const AttrsMap = {
	'style': 'staticStyle',
	'class': 'staticClass',
	':style': 'dynamicStyle',
	':class': 'dynamicClass',
};

const HTMLAttributes = ['id', 'name', 'value', 'placeholder'];

/**
 * There are some type of expressions (javascript code)
 * 1. @click="expr" -> _methods.submitForm();
 * 2. :style="expr" -> ['test', _state.some, _computed.some]  ||  ['test', _data.paddingTop]
 * 3. :class="expr" -> { is-loading: _state.loading }  ||  { is-red: _data.red }
 * 4. v-if="expr" -> _data.type === 'type'  ||  _state.visible === true
 *
 * In render function should be 
 * 1. _methods.submitForm();
 * 2. style(['test', _state.some(), _computed.some() ])  ||  ['test', _data.paddingTop]  SHOULD NOT BE CALLED BECAUSE REACTIVE
 * 3. 
 * 4.  _data.type  ||  () => { return _state.visible() } OR _state.visible
 * 
 * @return {[type]}         [description]
 */
function parseOptionValue(context, key, value)
{
	let statefull = false;
	let keepObservation = false;
	let isExpression = false;

	if(key[0] === '$') {
		return {
			value,
			statefull,
		}
	}

	if(key[0] === '@') {
		isExpression = true;
		statefull = true;
	}

	if(key[0] === ':') {
		isExpression = true;
	}

	if(typeof value === 'object') {
		keepObservation = true;
	}

	if(key[0] === '_') {
		value = '`' + value.replace(/{{((?:(?!(}})).)+)}}/g, '${$1}') + '`';
		keepObservation = false;
		isExpression = true;
	}

	if(!isExpression) {
		return {
			value: `'${value}'`,
			statefull: false,
		}
	}

	let exp = expression(context, value, keepObservation);
	
	value = exp.value;

	if(!statefull && exp.statefull) {
		statefull = true;
	}

	return {
		value,
		statefull,
	};
}

function parseOptionKey(key, value)
{
	if(AttrsMap[key]) {
		return AttrsMap[key];
	} else if(key[0] === '@') {
		return key.replace(/@/g, 'on');
	}

	return key;
}

function parseStyles(string)
{
	let styles = {};
	let pairs = string.replace(/\s/g, '').split(';');
	
	for (var i = 0; i < pairs.length; i++) {
		let tmp = pairs[i].split(':');
		if(tmp.length === 2) {
			styles[tmp[0]] = tmp[1];
		}
	}

	return styles;
}

export function prepareOptionKey(variable)
{
	if(variable.match(/\-/g)) {
		variable = `'${variable}'`;
	}

	return variable;
}


/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * [dynamicArgAttribute description]
 * @type {RegExp}
 */
var dynamicArgAttribute = /^(\@|\:)/g;
var eventArgAttribute = /^\@/g;

var staticArgsMap = {
	class: 'staticClass',
	style: 'staticStyle',
}

var isAttr = makeMap(
	'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
	'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
	'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
	'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
	'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
	'form,formaction,headers,height,hidden,high,href,hreflang,http-equiv,' +
	'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
	'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
	'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
	'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
	'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
	'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
	'target,title,type,usemap,value,width,wrap'
);

var isEventAttr = function (name) {
	return (
		name.match(eventArgAttribute)
	);
}

var isCSSAttr = function (name) {
	return (
		name.match(/^\:?(style|class)$/g)
	);
}

var isRenderableAttr = function (name) {
	return (
	isAttr(name) ||
		name.indexOf('data-') === 0 ||
		name.indexOf('aria-') === 0
	)
};

var isArgNotHydratable = function (type, arg) {
	if(type === null) {
		type = arg;
	}
	// console.log(type, arg)

	return !(
		['staticClass', 'staticClass', 'props', 'on'].includes(type)
	)
};

var normalizeValue = function (value)
{
	if(value === '') {
		value = true;
	}

	if(typeof value !== 'boolean') {
		value = `"${value}"`;
	}

	return value;
}


function handleAttrsValue(context, value)
{
	let statefull = false;

	let exp = expression(context, value, false);
	
	value = exp.value;

	if(!statefull && exp.statefull) {
		statefull = true;
	}

	return {
		value,
		statefull,
	};
}

function genOptions(options)
{
	let result = '';

	for(let key in options) {
		let value = options[key];

		if(typeof options[key] === 'object') {
			value = genOptions(value);
			if(value === null) {
				continue;
			}

			result += `'${key}': { \n ${ value } \n},\n`;
		} else {
			if(value == '') {
				continue;
			}

			result += `'${key}': ${ value },\n`;
		}
	}

	if(result == '') {
		return null;
	}

	return result;
}

function parseAttrs(context, attrs, hydrate = false)
{
	let shouldOptionsHydrate = false;

	let options = {
		staticClass: '',
		staticStyle: {},
		class: [],
		style: [],
		attrs: {},
		on: {},
		domProps: {},
		props: {},
	};

	for(let key in attrs)
	{
		let arg = key.replace(dynamicArgAttribute, '');
		let attrValue = attrs[key];

		if(arg.match(/^v\-/g)) {
			continue;
		}
		
		if(key.match(dynamicArgAttribute)) {
			let { value, statefull } = handleAttrsValue(context, attrValue);

			if(statefull) {
				shouldOptionsHydrate = true;
			}

			let type = false;

			if(isEventAttr(key)) {
				type = 'on';
			} else {
				if(isCSSAttr(key)) {
					type = null;
				} else if(isRenderableAttr(arg)) {
					type = 'attrs';
				} else {
					type = 'props';
				}
			}

			if(type === false) {
				continue;
			}

			if(hydrate && !statefull && isArgNotHydratable(type, arg)) {
				continue;
			}

			if(type === null) {
				options[arg] = value;
			} else {
				options[type][arg] = value;
			}
		} else {
			let value = attrValue;
			let normalizedValue = null;
			let type = false;

			if(arg === 'class') {
				arg = 'staticClass';
				type = null;
				normalizedValue = normalizeValue(value);
			} else if(arg === 'style') {
				arg = 'staticStyle';
				type = null;
				normalizedValue = {}

				value = value.split(';');
				for (var i = 0; i < value.length; i++) {
					let tmp = value[i].split(':').map((item) => item.trim());
					if(tmp.length === 2) {
						normalizedValue[tmp[0]] = normalizeValue(tmp[1]);
					}
				}
			} else if(isRenderableAttr(arg)) {
				type = 'attrs';
				normalizedValue =  normalizeValue(value);
			} else {
				type = 'props';
				normalizedValue =  normalizeValue(value);
			}

			if(type === false) {
				continue;
			}

			if(hydrate && isArgNotHydratable(type, arg)) {
				continue;
			}

			if(type === null) {
				options[arg] = normalizedValue;
			} else {
				options[type][arg] = normalizedValue;
			}
		}
		// Is expression inside
		
	}

	// console.log(options);
	// console.log(genOptions(options));
	// console.log(shouldOptionsHydrate);
	options = genOptions(options);

	return {
		options: options === null ? '' : options,
		shouldOptionsHydrate,
	}
}

export { parseAttrs, parseOptionKey, parseOptionValue };