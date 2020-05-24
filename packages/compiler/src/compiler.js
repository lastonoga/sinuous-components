import { parse } from 'node-html-parser';
import block from './block.js';

export function compiler({ context, type, source }) {

	let root = parse(source, {
		lowerCaseTagName: true,
		script: true,
	});

	let nodes = root.childNodes;
	let blocks = {};

	for (var i = 0; i < nodes.length; i++) {
		if(nodes[i].tagName) {
			blocks[nodes[i].tagName] = block(context, {
				type: nodes[i].tagName,
				source: nodes[i].innerHTML,
			});
		}
	}	

	if(blocks[type]) {
		return blocks[type].exec(blocks);
	}

	return block(context, {
		type: type,
		source: null,
	});
}
