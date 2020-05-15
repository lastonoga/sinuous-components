import { parseHTML } from './html';
import { parseAttrs } from './attrs';
import parseFunctions from './parseFunctions';

import prettier from 'prettier/standalone';
import * as parser from "@babel/parser";

export default function generate(context, html)
{
	let tree = parseHTML(html);

	tree.setSiblings();

	let slots = tree.getSlots();

	tree = tree.children;

	let ast = {
		render: [],
		hydrate: [],
	}

	let result = {
		render: '',
		hydrate: '',
		shouldHydarate: false,
	}

	for (var i = 0; i < tree.length; i++) {
		let renderAST = tree[i].toAST(context, false);
		let hydrationAST = tree[i].toAST(context, true);

		if(hydrationAST.statefull) {
			result.shouldHydarate = true;
		}

		ast.render.push(renderAST.value);
		ast.hydrate.push(hydrationAST.value);
	}

	if(ast.render.length === 1) {
		result.render = ast.render[0];
		result.hydrate = ast.hydrate[0];
	} else {
		result.render = `[${  ast.render.join(',') }]`;
		result.hydrate = `[${  ast.hydrate.join(',') }]`;
	}

	let prettierConfig = {
		parser(text, { babel }) {
			return parser.parse(text);
		}
	};

	try {
		result.render = prettier.format(result.render, prettierConfig);
		result.hydrate = prettier.format(result.hydrate, prettierConfig);
	} catch(err) {
		// console.error(err);
	}
	result.slots = slots;
	
	return result;
}