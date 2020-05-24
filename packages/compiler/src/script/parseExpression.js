import traverse from "@babel/traverse";

import {
	identifier,
	CallExpression,
	BinaryExpression,
} from "@babel/types";

import {
	getIdentifierName,
	handleIdentifier,
	isIdentifierReactive,
	checkFunctionArgumentDeclaration
} from '../helpers';

export default function parseExpression(data, ast, ctx = 'this', disableExecution = false)
{
	let observable = false;
	let changed = false;
	
	let FunctionDeclaration = false;
	traverse(ast, {
		ImportDeclaration: {
			enter(path)
			{
				data.imports[path.node.source.value] = path.node;
			}
		},
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
				
				if(!isIdentifierReactive(data, path.node.left)) {
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
				checkFunctionArgumentDeclaration(data, path);

				let identifier = handleIdentifier(ctx, data, path);
				if(!identifier) {
					return;
				}

				observable = identifier.observable ? true : observable;

				identifier.replace(disableExecution);

				changed = true;
			}
		}
	});

	return {
		ast,
		observable,
		changed,
	}
}
