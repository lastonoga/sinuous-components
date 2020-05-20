function argToString()
{
	let str = '';

	for (var i = 0; i < arguments.length; i++) {
		if(typeof arguments[i] === 'object') {
			for(let key in arguments[i]) {
				if(arguments[i][key]) {
					str += ` ${ key }`;
				}
			}
		} else {
			str += ` ${arguments[i]}`;
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
			// console.warn(value, key);
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

	str += argToString.apply(this, dynamic);
	
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
	if(typeof dynamic === 'function') {
		dynamic = dynamic();
	}

	if(!Array.isArray(dynamic)) {
		dynamic = [dynamic];
	}

	for (var i = 0; i < dynamic.length; i++) {
		
		for(let key in dynamic[i]) {
			let value = dynamic[i][key];
			// console.warn(value, key);
			if(typeof value === 'function') {
				value = value();
			}

			obj[makeStyleProp(key)] = value;
		}
	}

	return obj;
}

let cloneOptions = ['_s', '$slots'];

export default function options(options, shouldClone = true)
{
	let readyOptions = {};

	if(options.on) {
		for(let key in options.on) {
			readyOptions[`on${key}`] = options.on[key];
		}
	}

	if(options.staticClass || options.class) {
		readyOptions.class = classes.bind(this, options.staticClass || null, options.class || null);
	}

	if(options.staticStyle || options.style) {
		readyOptions.style = styles.bind(this, options.staticStyle || {}, options.style || null);
	}

	if(shouldClone) {
		for (var i = 0; i < cloneOptions.length; i++) {
			let name = cloneOptions[i];
			if(options[name]) {
				readyOptions[name] = options[name];
			}
		}
	}

	return readyOptions;
}