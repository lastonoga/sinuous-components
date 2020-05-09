import data from "./data";
import traverse from "@babel/traverse";

import {
	getIdentifierName,
	isIdentifierReactive,
	makeObservableGetter,
} from "./helpers";

// Get all data
// Mark data as reactive or stateless
let functionHandling = false;

export function collectVariables (data) {
	return {
		VariableDeclarator: {
			enter(path)
			{
				if(functionHandling) {
					return;
				}

				let id = path.node.id;
				let value = path.node.init;

				let name = getIdentifierName(id);
				if(isIdentifierReactive(data, id)) {
					data.state[name] = value;
				} else {
					data.data[name] = value;
				}
		    },
		},
		FunctionDeclaration: {
			enter(path) {
				functionHandling = true;
		    },
		    exit(path) {
		    	functionHandling = false;
		    }
		}
	};
}

export default function(data, ast)
{
	traverse(ast, collectVariables(data));
}