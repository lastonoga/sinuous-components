import data from "./data";
import traverse from "@babel/traverse";

import {
	FunctionExpression,
} from "@babel/types";

import {
	getIdentifierName,
	isIdentifierReactive,
	makeObservableGetter,
} from "../helpers";


export default function(data, ast)
{
	let isFunctionDeclaration = false;

	traverse(ast, {
		VariableDeclarator: {
			enter(path)
			{
				let id = path.node.id;
				let value = path.node.init;

				if(isFunctionDeclaration || value === null) {
					return;
				}

				let name = getIdentifierName(id);

				let type = null;
				if(value.type === 'BinaryExpression') {
					type = 'props';
					value = {
						type: value.left.name,
						defaultValue: value.right,
					}
				} else if(['ArrowFunctionExpression', 'FunctionExpression'].includes(value.type)) {
					type = 'computed';
				} else if(isIdentifierReactive(data, id)) {
					type = 'state';
				} else {
					type = 'data';
				}

				// console.log(`SET PROP ${name} to ${type}`, data)
				data[type][name] = value;
		    },
		},
		ArrowFunctionExpression: {
			enter(path)
			{
				isFunctionDeclaration = true;
			},
		    exit(path)
		    {
		    	isFunctionDeclaration = false;
		    }
		},
		FunctionDeclaration: {
			enter(path)
			{
				isFunctionDeclaration = true;

				let id = path.node.id;
				let name = getIdentifierName(id);

				data.methods[name] = FunctionExpression(null, path.node.params, path.node.body);
		    },
		    exit(path)
		    {
		    	isFunctionDeclaration = false;
		    }
		}
	});
}