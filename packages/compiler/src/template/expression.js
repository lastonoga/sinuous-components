import * as parser from "@babel/parser";
import generate from "@babel/generator";
import traverse from "@babel/traverse";
import parseExpression from "../script/parseExpression";

import {
	identifier,
	CallExpression,
	BinaryExpression,
} from "@babel/types";

import {
	handleIdentifier,
} from '../helpers';

import { prepareOptionKey } from './attrs';

export function expression(context, code, keepObservation = true)
{
	if(typeof code === 'object') {
		return {
			statefull: false,
			value: JSON.stringify(code)
		};
	}

	code = String(code);

	let identifierOnly = true;
	let shouldExecute = keepObservation;

	const ast = parser.parse(code);

	traverse(ast, {
		enter(path) {
			if(!['Program', 'ExpressionStatement', 'Identifier', 'BlockStatement', 'LabeledStatement', 'ArrayExpression', 'ObjectExpression', 'ObjectProperty'].includes(path.node.type)) {
				identifierOnly = false;
			}
		}
	});

	let { changed, observable } = parseExpression(context.data, ast, 'ctx', identifierOnly);

	if(changed) {
		code = generate(ast, {
			retainLines: true,
			compact: true,
			minified: true,
			concise: true,
			quotes: "double",
		}, code).code;

		
		// clean append
		code = code.replace(/(;|,)$/g, '');

		if(changed && !identifierOnly) {
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
