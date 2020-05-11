import { parse } from 'node-html-parser';
import Node, { HID } from './Node';
import TextNode from './TextNode';
import { parseAttrs } from './attrs';
import parseFunctions from './parseFunctions';

function generateTree(node, isRoot = false)
{

	let children = [];

	for (var i = 0; i < node.childNodes.length; i++) {
		let child = generateTree(node.childNodes[i], false);
		children.push(child);
	}

	let attrs = parseAttrs(node.rawAttrs);

	if(children.length === 0 && node.rawText !== '') {
		return new TextNode(node.rawText);
	}

	return new Node({
		tag: node.tagName,
		attrs: attrs,
		children: children,
	});
}

export default function generate(context, code)
{
	// code = parseFunctions(code);
	// console.warn("PARSE", context.name)
	code = code.replace(/\t/g, ' ').replace(/\s\s+/g, ' ');

	const root = parse(code);

	root.removeWhitespace();

	// HID = 0;
	let tree = generateTree(root, true);

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