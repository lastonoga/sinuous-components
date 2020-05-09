// import data from "./data";

/**
 * Consts
 */

export const Reactity = {
	'state': 'o',
	'computed': 'o',
};

export const FunctionReturnExpression = [
	'data', 'state', 'computed',
];

export const ObjectReturnExpression = [
	'methods', 
];

// As it is expressions
export const AiiExpression = [
	'imports',
];

// export const RETURN_FUNCTION_TYPE = 1;
// export const OBJECT_FUNCTION_TYPE = 2;

/**
 * Functions
 */
export function makeContextable(data, id)
{
	let name = id.name;
	let isFunction = name.match(/\(\)$/g);

	name = name.replace(/(\(|\))/g, '');

	if(!name.match(/^this\./gi)) {
		let append = ['this'];
		
		if(Object.keys(data.state).includes(name)) {
			append.push('_state');
		} else if(Object.keys(data.computed).includes(name)) {
			append.push('_computed');
		} else if(Object.keys(data.data).includes(name)) {
			append.push('_data');
		} else if(Object.keys(data.methods).includes(name)) {
			append.push('_methods');
		} else {
			// throw new Error(`There is no variable ${name}`);
			return;
		}

		append.push(name);

		name = append.join('.');
	}

	if(isFunction) {
		name = `${name}()`;
	}

	id.name = name;
}

export function isIdentifierReactive(data, id)
{
	let name = id.name;
	
	if(name.match(/^\$/g))	{
		return true;
	}

	return data.state[name];
}

export function getIdentifierName(id)
{
	if(!id) {
		return null;
	}

	let name = id.name;

	if(name.match(/^\$/g))	{
		return name.substring(1)
	}

	return name;
}

export function makeObservableGetter(data, id)
{
	if(!isIdentifierReactive(data, id)) {
		return id;
	}
	
	let name = getIdentifierName(id);
	id.name = `${ name }()`;

	return id;
}