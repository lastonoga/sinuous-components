import { Parser } from 'htmlparser2';
import Node from './Node';
import TextNode from './TextNode';


function prepareHTML(html)
{
	return html.replace(/\t/g, ' ').replace(/\s\s+/g, ' ').trim();
}

function initStack()
{
	return [
		new Node({
			tag: 'ParserBody',
			children: [],
		})
	];
}

export function parseHTML(html)
{
	function currentStackNode()
	{
		return stack[stack.length - 1];
	}

	html = prepareHTML(html);

	let stack = initStack();

	const parse = new Parser({
		
		onopentag(name, attrs)
		{
			let parent = currentStackNode();

			let node = new Node({
				tag: name,
				attrs: attrs,
				children: [],
			});

			if(parent) {
				parent.appendChild(node);
			}

			stack.push(node);
		},

		ontext(text)
		{
			let parent = currentStackNode();

			text = text.trim();

			if(text !== '' && parent) {
				let node = new TextNode(text);
				if(parent) {
					parent.appendChild(node);
				}
	    	}
	    },

		onclosetag(name)
		{
			stack.pop();
	    }

	}, { decodeEntities: true })
	
	parse.write(html);
	parse.end();

	return stack[0];
}
