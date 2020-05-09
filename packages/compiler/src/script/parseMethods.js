import traverse from "@babel/traverse";

import {
	identifier,
	CallExpression,
} from "@babel/types";

import {
	getIdentifierName,
	isIdentifierReactive,
	makeObservableGetter,
	makeContextable,
} from "./helpers";

let functionBlockHandling = false;
let assignmentHandling = false;
let variableDeclarationHandling = false;
let shouldAssignmentHandle = false;
let hasFunctionReactive = false;
let memberHandling = false;

export function collectMethods (data) {
	return {
		// save imports
		ImportDeclaration: {
			enter(path) {
				data.imports[path.node.source.value] = path.node;
			}
		},
		/**
		 * Translate usual variables to reactive
		 * @type {Object}
		 */
		Identifier: {
			enter(path) {
				let id = path.node;
		        if(functionBlockHandling) {
		        	let name = getIdentifierName(id);

		        	if(data.state[name] && !assignmentHandling && !['CallExpression'].includes(path.container.type)) {
		        		hasFunctionReactive = true;
		        	}

		        	if(!['AssignmentExpression', 'CallExpression'].includes(path.container.type) && !variableDeclarationHandling) {
		        		makeObservableGetter(data, id);
			        }

			        if(!variableDeclarationHandling && !memberHandling) {
			        	makeContextable(data, id);
			        }

		        }
		    },
		    exit(path) {
		        // console.log("Identifier exit called", path.node.name);
		    }
		},
		
		CallExpression: {
			enter(path) {
				memberHandling = true;
			},
			exit(path) {
				memberHandling = false;
			}
		},
		MemberExpression: {
			enter(path) {
				memberHandling = true;
			},
			exit(path) {
				memberHandling = false;
			}
		},

		VariableDeclarator: {
			enter(path) {
				variableDeclarationHandling = true;
			},
			exit(path) {
				variableDeclarationHandling = false;
			}
		},
		/**
		 * Make 
		 v = v + 1
		 To
		 v(v() + 1)
		 * @type {Object}
		 */
		ExpressionStatement: {
			exit(path) {
				if(path.node.expression.type === 'AssignmentExpression') {
					let expression = path.node.expression;
					let name = getIdentifierName(expression.left);
					path.replaceWith(
						CallExpression(identifier(name), [expression.right])
					);
				}
			}
		},
		AssignmentExpression: {
			enter(path) {
				assignmentHandling = true;
				if(isIdentifierReactive(data, path.node.left)) {
					shouldAssignmentHandle = true;
				}
			},
			exit(path) {
				assignmentHandling = false;
				shouldAssignmentHandle = false;
			}
		},
		/**
		 * Handle function
		 * Add them to methods and computed props
		 * @type {Object}
		 */
		BlockStatement: {
			enter(path) {
				if(path.parent.type === 'FunctionDeclaration') {
		    		functionBlockHandling = true;
		    	}
		    },
		    exit(path) {
		    	if(!functionBlockHandling || path.parent.type !== 'FunctionDeclaration') {
		    		return;
		    	}

		    	let name = getIdentifierName(path.container.id);
		    	if(hasFunctionReactive) {
		    		data.computed[name] = path.node;
		    	} else {
		    		data.methods[name] = path.container;
		    	}

		    	hasFunctionReactive = false;
		    	functionBlockHandling = false;
		    }
		}
	}
}

export default function(data, ast)
{

	traverse(ast, collectMethods(data));
}