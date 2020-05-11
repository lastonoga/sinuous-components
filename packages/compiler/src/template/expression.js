import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";

import {
	identifier,
	CallExpression,
	BinaryExpression,
} from "@babel/types";

import {
	getIdentifierName,
	setIdentifierContext,
	isIdentifierReactive,
	checkFunctionArgumentDeclaration
} from '../helpers';


import { prepareOptionKey } from './attrs';

import { hasState, getVariable } from './helpers';

export function parseExpression(context, code, isExpression = false)
{
	code = String(code);

	// console.warn(code);

	const ast = parser.parse(code);

	var observable = false;
	var changed = false;

	let FunctionDeclaration = false;
	traverse(ast, {
		FunctionDeclaration: {
			enter(path) {
				FunctionDeclaration = true;
		    },
		    exit(path) {
		    	FunctionDeclaration = false;
		    }
		},
		// make reactive variable assignment as function
		AssignmentExpression: {
			enter(path) {
				
				if(!isIdentifierReactive(context.data, path.node.left)) {
					return;
				}

				let args = [path.node.right];

				if(path.node.operator.length > 1) {
					args = [
						BinaryExpression(path.node.operator[0], path.node.left, path.node.right)
					]
				}

				let name = getIdentifierName(path.node.left);
				path.replaceWith(
					CallExpression(identifier(name), args)
				);

				observable = true;
				changed = true;
			},
		},
		Identifier: {
			enter(path) {
				checkFunctionArgumentDeclaration(context.data, path);
				if(setIdentifierContext('this', context.data, path)) {
					observable = true;
				}

				changed = true;
			}
		}
	});

	if(changed) {
		code = generate(ast, {
			retainLines: false,
			compact: false,
			minified: false,
			concise: false,
			quotes: "double",
		}, code).code;

		
		// clean append
		code = code.replace(/(;|,)$/g, '');

		if(isExpression) {
			code = `() => { return ${code}; }`;
		}
	}

	// console.log(code);
	// console.log('--------');

	return {
		statefull: observable,
		value: code
	}
}

// export default function expression(context, code, execute = false)
// {
// 	const ast = parser.parse(code);

// 	var changed = false;
// 	var statefull = false;

// 	traverse(ast, {
// 		enter(path)
// 		{
// 			if(path.node.type === 'Identifier')
// 			{
// 				if(!['key', 'label'].includes(path.key)) {
// 					let nameBuilder = [];

// 					let variable = path.node.name;
// 					let variableWithContext = getVariable(context.data, variable)

// 					if(path.container.type === 'CallExpression') {
// 						variableWithContext = false;
// 					}

// 					if(variableWithContext) {
// 						nameBuilder.push('ctx')
// 						nameBuilder.push(variableWithContext);
// 					} else {
// 						nameBuilder.push(variable);
// 					}

// 					if(!variable) {
// 						throw new Error(`There is no ${ variable } in context ${ context }`);
// 					}

// 					if(context.reactive_variables.includes(variable)) {
// 						statefull = true;
// 					}

// 					path.node.name = nameBuilder.join('.') + (execute ? '()' : '');

// 					changed = true;
// 				} else {
// 					path.node.name = prepareOptionKey(path.node.name);
// 				}
// 			}
// 		}
// 	});

// 	code = generate(ast, {
// 		retainLines: true,
// 		compact: true,
// 		minified: true,
// 		concise: true,
// 		quotes: "double",
// 	}, code).code;

// 	// clean append
// 	code = code.replace(/(;|,)$/g, '');

// 	if(changed && execute) {
// 		code = `() => { return ${code}; }`;
// 	}

// 	return {
// 		statefull,
// 		value: code
// 	}
// }