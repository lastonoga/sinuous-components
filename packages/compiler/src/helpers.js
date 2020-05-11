export const ReactiveNamespaces = ['state', 'computed'];

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

export function setIdentifierContext(ctx, data, path, observableCall = true)
{
	if(['FunctionDeclaration', 'VariableDeclarator', 'LabeledStatement'].includes(path.parent.type) || ['property'].includes(path.key)) {
		return false;
	}

	let id = path.node;
	let name = getIdentifierName(id);
	let match = matchIdentifier(data, id);
	
	if(match.namespace === false) {
		return false;
	}

	name = `${ctx}._${match.namespace}.${name}`;
	// console.log(name, observableCall)
	if(match.observable && path.container.type !== 'CallExpression' && observableCall) {
		name += '()';
	}

	id.name = name;

	return match.observable;
}

export function matchIdentifier(context, id)
{
	let name = getIdentifierName(id);
	let namespace = false;

	for(let key in context) {
		if(Object.keys(context[key]).includes(name)) {
			namespace = key;
		}
	}

	return {
		namespace,
		observable: ReactiveNamespaces.includes(namespace)
	};
}