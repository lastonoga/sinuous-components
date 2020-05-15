export const ReactiveNamespaces = ['state', 'computed'];

export const _ = -1;

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

export function checkFunctionArgumentDeclaration(data, path)
{
	if(path.parent.type !== 'FunctionDeclaration') {
		return;
	}

	let id = path.node;
	let name = getIdentifierName(id);
	let match = matchIdentifier(data, id);

	if(match.namespace && path.listKey === 'params') {
		throw new Error(`Variable ${ name } has already defined in ${ match.namespace }`)
	}
}

export class IdentifierExpression
{
	constructor(id = null, { context = null, namespace = null, observable = null, callable = null })
	{
		this.id = id;
		this.namespace = namespace;
		this.observable = observable;
		this.callable = callable;
		this.context = context;
	}

	replace(disableExecution)
	{
		if(this.namespace === false || this.id === null) {
			return;
		}

		let name = getIdentifierName(this.id);

		let _name = `${ this.context }._${ this.namespace }.${name}`;

		if(!disableExecution && this.callable) {
			_name += '()';
		}

		this.id.name = _name;
	}
}

export function handleIdentifier(context, data, path)
{
	if(['FunctionDeclaration', 'VariableDeclarator', 'LabeledStatement'].includes(path.parent.type) || ['property'].includes(path.key)) {
		return false;
	}

	let id = path.node;
	let { namespace, observable } = matchIdentifier(data, id);
	let callable = false;

	// console.log(name, keepObservation)
	if(observable && path.container.type !== 'CallExpression') {
		callable = true;
	}

	return new IdentifierExpression(id, {
		context,
		namespace,
		observable,
		callable,
	});
}

export function matchIdentifier(context, id)
{
	let name = getIdentifierName(id);
	let namespace = false;
	let observable = false;

	for(let key in context) {
		if(Object.keys(context[key]).includes(name)) {
			namespace = key;
		}
	}

	if(namespace !== false) {
		observable = ReactiveNamespaces.includes(namespace);
	}

	return {
		namespace,
		observable,
	};
}