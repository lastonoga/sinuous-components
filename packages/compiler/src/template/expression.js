import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";

import { prepareOptionKey } from './attrs';

import { hasState, getVariable } from './helpers';

export default function expression(context, code, execute = false)
{
	const ast = parser.parse(code);

	var changed = false;
	var statefull = false;

	traverse(ast, {
		enter(path)
		{
			if(path.node.type === 'Identifier')
			{
				if(!['key', 'label'].includes(path.key)) {
					let nameBuilder = [];

					let variable = path.node.name;
					let variableWithContext = getVariable(context.data, variable)

					if(path.container.type === 'CallExpression') {
						variableWithContext = false;
					}

					if(variableWithContext) {
						nameBuilder.push('ctx')
						nameBuilder.push(variableWithContext);
					} else {
						nameBuilder.push(variable);
					}

					if(!variable) {
						throw new Error(`There is no ${ variable } in context ${ context }`);
					}

					if(context.reactive_variables.includes(variable)) {
						statefull = true;
					}

					path.node.name = nameBuilder.join('.') + (execute ? '()' : '');

					changed = true;
				} else {
					path.node.name = prepareOptionKey(path.node.name);
				}
			}
		}
	});

	code = generate(ast, {
		retainLines: true,
		compact: true,
		minified: true,
		concise: true,
		quotes: "double",
	}, code).code;

	// clean append
	code = code.replace(/(;|,)$/g, '');

	if(changed && execute) {
		code = `() => { return ${code}; }`;
	}

	return {
		statefull,
		value: code
	}
}