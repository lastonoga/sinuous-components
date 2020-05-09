import {
	ExportDefaultDeclaration,
	ObjectExpression,
	ObjectProperty,
	ObjectMethod,
	CallExpression,
	FunctionExpression,
	ArrowFunctionExpression,
	BlockStatement,
	ReturnStatement,
	identifier,
	program,
} from "@babel/types";

import {
	// Consts
	Reactity,
	FunctionReturnExpression,
	ObjectReturnExpression,
	AiiExpression,
} from "./helpers";

export default function(data)
{
	let imports = [];

	for(let prop in data.imports) {
		imports.push(data.imports[prop])
	};

	let properties = [];

	Object.keys(data).forEach((prop, key) => {

		let object = null;

		if(FunctionReturnExpression.includes(prop)) {
			object = generateFunctionReturnExpression(data, prop);
		} else if(ObjectReturnExpression.includes(prop)) {
			object = generateObjectReturnExpression(data, prop);
		}

		if(!object) {
			return;
		}
		
		properties.push(object);
	})

	let exportedObject = ObjectExpression(properties);
	let exportedDefault = [
		ExportDefaultDeclaration(exportedObject)
	];

	let body = []
		.concat(imports)
		.concat(exportedDefault)

	return program(
		body, 
		[],
		'module'
	);
}


function generateFunctionReturnExpression(data, returnProp)
{
	let values = data[returnProp];
	let properties = [];

	for(let prop in values) {
		let val = values[prop];

		if(val.type === 'BlockStatement') {
			val = ArrowFunctionExpression([], val);
		}

		if(Reactity[returnProp]) {
			val = CallExpression(identifier(Reactity[returnProp]), [val]);
		}

		properties.push(
			ObjectProperty(identifier(prop), val)
		)
	}

	let FunctionReturn = ReturnStatement(
		ObjectExpression(
			properties
		)
	)

	let body = BlockStatement([FunctionReturn])

	let object = ObjectMethod('method', identifier(returnProp),
		Reactity[returnProp] ? [identifier(Reactity[returnProp])] : []
	, body);

	return object;
}

function generateObjectReturnExpression(data, prop)
{
	let values = data[prop];
	let properties = [];

	for(let prop in values) {
		let val = values[prop];

		if(val.type === 'FunctionDeclaration') {
			val = FunctionExpression(null, val.params, val.body);
		}

		properties.push(
			ObjectProperty(identifier(prop), val)
		)
	}

	let object = ObjectProperty(
		identifier(prop),
		ObjectExpression(properties)
	);

	return object;
}