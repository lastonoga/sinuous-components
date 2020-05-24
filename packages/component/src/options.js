function argToString()
{
	let str = '';

	for (var i = 0; i < arguments.length; i++) {
		let value = arguments[i];
		
		if(typeof value === 'function') {
			value = value();
		}

		if(typeof value === 'object') {
			for(let key in value) {
				if(value[key]) {
					str += ` ${ key }`;
				}
			}
		} else {
			str += ` ${value}`;
		}
	}

	return str;
}


function argToObject()
{
	let str = '';

	for (var i = 0; i < arguments.length; i++) {
		
		for(let key in arguments[i]) {
			let value = arguments[i][key];
			if(typeof value === 'function') {
				value = value();
			}

			this[key] = value;
		}
	}

	return str;
}

/**
 * Parse classes
 * @param  {[type]} static  [description]
 * @param  {[type]} dynamic [description]
 * @return {[type]}         [description]
 */
function classes(str = null, dynamic = null)
{
	if(str === null && dynamic === null) {
		return '';
	}

	if(str === null) {
		str = '';
	}
	
	if(typeof dynamic === 'function') {
		dynamic = dynamic();
	}

	if(!Array.isArray(dynamic)) {
		dynamic = [dynamic];
	}

	str += argToString.apply(this, dynamic);
	
	// console.log(str);

	return str;
}

/**
 * Styles
 * @param  {Object} obj     [description]
 * @param  {[type]} dynamic [description]
 * @return {[type]}         [description]
 */
function makeStyleProp(name)
{
	return name
		.replace(/\.?([A-Z]+)/g, function (x,y) {
			return "-" + y.toLowerCase()
		})
		.replace(/^-/, "");
}

function styles(obj = {}, dynamic = null)
{
	let readyStyles = Object.assign({}, obj);

	if(typeof dynamic === 'function') {
		dynamic = dynamic();
	}

	if(!Array.isArray(dynamic)) {
		dynamic = [dynamic];
	}

	for (var i = 0; i < dynamic.length; i++) {
		
		for(let key in dynamic[i]) {
			let value = dynamic[i][key];
			
			if(typeof value === 'function') {
				value = value();
			}
			readyStyles[makeStyleProp(key)] = value;
		}
	}

	return readyStyles;
}

let cloneOptions = ['_s', '$slots'];

export function makeCss(readyOptions, options)
{
	if(options.staticClass || options.class) {
		readyOptions.class = classes.bind(this, options.staticClass || null, options.class || null);
	}

	if(options.staticStyle || options.style) {
		readyOptions.style = styles.bind(this, options.staticStyle || {}, options.style || null);
	}

	return readyOptions;
}

export function makeOption(option, shouldClone = true)
{
	let readyOption = {};

	if(option.on !== undefined) {
		for(let key in option.on) {
			readyOption[`on${key}`] = option.on[key];
		}
	}

	if(option.key !== undefined) {
		readyOption['data-key'] = option.key;
	}

	makeCss(readyOption, option);

	if(shouldClone) {
		for (var i = 0; i < cloneOptions.length; i++) {
			let name = cloneOptions[i];
			if(option[name]) {
				readyOption[name] = options[name];
			}
		}
	}

	return readyOption;
}

const AssignObjectOptions = ['staticStyle', 'attrs', 'on'];
const AssignValueOptions = ['style', 'class'];

export function mergeOptions(options)
{
	let readyOptions = {};
	let shouldBeMerged = false;

	if(Array.isArray(options)) {
		for (var i = 0; i < options.length; i++) {
			
			if(options[i] === null) {
				break;
			}

			let keys = Object.keys(options[i]);

			if(keys.length === 1 && keys.includes('$slots')) {
				break;
			}
			
			if(i > 0) {
				shouldBeMerged = true;
			}
		}
		
		if(!shouldBeMerged) {
			return options[1];
		}
	} else {
		return options;
	}

	for (var i = 0; i < options.length; i++) {
		let option = options[i]
	
		for (var j = 0; j < AssignObjectOptions.length; j++) {
			let name = AssignObjectOptions[j];
			
			if(!option[name]) {
				continue;
			}

			if(!readyOptions[name]) {
				readyOptions[name] = {};
			}

			for(let prop in option[name]) {
				readyOptions[name][prop] = option[name][prop];
			}
		}

		for (var j = 0; j < AssignValueOptions.length; j++) {
			let name = AssignValueOptions[j];

			if(!option[name]) {
				continue;
			}

			if(!readyOptions[name]) {
				readyOptions[name] = [];
			}

			readyOptions[name] = readyOptions[name].concat(option[name]);
		}

		if(option._s !== undefined) {
			readyOptions._s = option._s;
		}

		if(option.key !== undefined) {
			readyOptions.key = option.key;
		}

		if(option.staticClass !== undefined) {
			if(readyOptions.staticClass === undefined) {
				readyOptions.staticClass = option.staticClass;
			} else {
				readyOptions.staticClass += ' ' + option.staticClass;
			}
		}
	}

	// console.warn(readyOptions)

	return readyOptions;
}

export default function options(options, shouldClone = true)
{
	let readyOptions = mergeOptions(options);

	return makeOption(readyOptions, shouldClone);
}