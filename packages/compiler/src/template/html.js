import { createParser } from 'htmljs-parser';
import Node from './Node';
import TextNode from './TextNode';

function handleTag(event)
{
	let tag = event.tagName;
	let attributes = {};

	if(event.attributes) {
		for (var i = 0; i < event.attributes.length; i++) {
			let attr = event.attributes[i];
			attributes[attr.name] = attr.value || true;
		}
	}

	return {
		tag,
		attributes
	}
}

function close(event)
{
	let { tag, attributes } = handleTag(event);

	console.log('end', tag)
}

export default function parse(html)
{
	let stack = [];

	html = html.replace(/\t/g, ' ').replace(/\s\s+/g, ' ');

	createParser({
		
		onOpenTag(event)
		{
			let { tag, attributes } = handleTag(event);
			
			console.log('create Node', tag, attributes)
		},

		onText(event)
		{
			let value = event.value.trim();
			
			if(value !== '') {
	        	console.warn(value)
	    	}
	    },

		onString(event)
		{
	        // console.warn(event)
	    },

		onCloseTag: close

	}, {
		reflectiveAttributes: true
	})
	.parse(html);
}
