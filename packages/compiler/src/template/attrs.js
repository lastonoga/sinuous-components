import expression from './expression';

const AttrsMap = {
	'style': 'staticStyle',
	'class': 'staticClass',
	':style': 'dynamicStyle',
	':class': 'dynamicClass',
};

const HTMLAttributes = ['id', 'name', 'value', 'placeholder'];

function parseOptionValue(context, key, value)
{
	let statefull = false;

	if(key[0] === '_') {
		value = '`' + value.replace(/{{(.*)}}/g, '${$1}') + '`';
		
		let exp = expression(context, value, true);
		
		value = exp.value;

		if(!statefull && exp.statefull) {
			statefull = true;
		}
	} else if(key[0] === ':') {
		let exp = expression(context, value);

		value = exp.value;

		if(!statefull && exp.statefull) {
			statefull = true;
		}
	} else if(key[0] === '@') {
		// console.warn(key, context, value);
		let exp = expression(context, value);

		value = exp.value;

		statefull = true;

	} else if(typeof value === 'object') {
		value = JSON.stringify(value);
	} else {
		value = `"${value}"`;
	}

	// console.log('–', value, statefull);

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

function parseOptions(attrs)
{
	let options = {};

	for(let key in attrs)
	{
		let value = attrs[key];
		let option_key = prepareOptionKey(key);
		// Is html attr
		if(HTMLAttributes.includes(key) || Object.keys(AttrsMap).includes(key) || key.match(/data\-/g) || key.match(/@/g)) {
			if(key === 'style') {
				value = parseStyles(value);
			}

			options[option_key] = value;
		} else {
			if(!options.props) {
				options.props = {};
			}

			options.props[option_key] = value;
		}
	}

	return options;
}

function parseAttrs(string)
{
	if(typeof string !== 'string' || string == '') {
		return {};
	}

	string = string.replace(/\s\s+/g, ' ').trim();

	let pairs = string.match(/([^\s]*)=["'](.*?)["']|([\w\-]+)/g)
	let attrs = {};

	for (var i = 0; i < pairs.length; i++) {
		let tmp = pairs[i].split('=');
		let name = tmp[0];
		let value = tmp[1] ? tmp[1].substring(1, tmp[1].length - 1) : true;
		attrs[name] = value;
	}

	return attrs;
}

export { parseAttrs, parseOptions, parseOptionKey, parseOptionValue };