import value from './value';


function camelToProp(s)
{
	return s
		.replace(/\.?([A-Z]+)/g, (x, y) => `-${y.toLowerCase()}`)
		.replace(/^-/, '');
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

export function handleClassObject(obj)
{
	let classes = [];

	for (let key in obj) {
		if(value(obj[key])) {
			classes.push(key);
		}
	}

	return classes;
}

export function classes(staticClasses = [], dynamic = {})
{
	return () => {
		let classes = [];

		for (var i = 0; i < arguments.length; i++) {
			let arg = arguments[i];
			
			if(Array.isArray(arg)) {
				for (var j = 0; j < arg.length; j++) {
					classes.push(value(arg[j]));
				}
			} else if(typeof arg === 'object') {
				classes = classes.concat(
					handleClassObject(arg)
				);
			} else if(typeof arg === 'function') {
				classes = classes.concat(
					handleClassObject(value(arg))
				);
			} else {
				classes.push(arg);
			}
		}

		classes = classes.filter((v, i, a) => a.indexOf(v) === i);

		return classes.join(' ');
	}
}

export function handleStylesObject(styles, obj)
{
	for (let key in obj) {
		let val = value(obj[key]);
		if(val !== null) {
			styles[camelToProp(key)] = val;
		}
	}

	return styles;
}

export function styles()
{
	return () => {
		let styles = {};
		
		for (var i = 0; i < arguments.length; i++) {
			if(typeof arguments[i] === 'object') {
				handleStylesObject(styles, arguments[i])
			} else {
				handleStylesObject(styles, value(arguments[i]))
			}
		}

		return styles;
	}
}