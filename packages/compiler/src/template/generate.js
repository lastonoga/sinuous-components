import { parseHTML } from './html';
import { parseAttrs } from './attrs';
import parseFunctions from './parseFunctions';



export default function generate(context, html)
{
	let tree = parseHTML(html);

	tree.setSiblings();
	
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

	return result;
}