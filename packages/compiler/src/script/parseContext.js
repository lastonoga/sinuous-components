import data from "./data";
import traverse from "@babel/traverse";

import {
	FunctionExpression,
} from "@babel/types";

import {
	getIdentifierName,
	isIdentifierReactive,
	makeObservableGetter,
} from "./helpers";

// Get all data
// Mark data as reactive or stateless
let isFunctionDeclaration = false;

export function collectVariables (data) {
	return {
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
				if(['ArrowFunctionExpression', 'FunctionExpression'].includes(value.type)) {
					type = 'computed';
				} else if(isIdentifierReactive(data, id)) {
					type = 'state';
				} else {
					type = 'data';
				}

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

				data.methods[name] = FunctionExpression(id, path.node.params, path.node.body);
		    },
		    exit(path)
		    {
		    	isFunctionDeclaration = false;
		    }
		}
	};
}

export default function(data, ast)
{
	traverse(ast, collectVariables(data));
}