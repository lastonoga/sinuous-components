import Node from './Node';
import TextNode from './TextNode';

export const IF_ATTRS = ['v-if', 'v-else-if', 'v-else'];

export function parseSlot(node)
{
	if(!node.isSlot) {
		return {
			is: false,
		}
	}

	return {
		is: true,
		callExpression: !node.isInsideComponent,
	}
}

export function parseLoop(node)
{
	if(!node.attrs['v-for']) {
		return {
			is: false,
		}
	}

	let statement = node.attrs['v-for'].matchAll(/\((?<item>[A-z0-9]+)\s?(\,\s?(?<key>[A-z0-9]+)\s?)?\)\s?in\s(?<condition>.*)/g);

	let condition = null;
	let args = [];

	for(let match of statement) {

		if(match.groups.item) {
			args.push(match.groups.item);
		} else {
			args.push('_item');
		}

		if(match.groups.key) {
			args.push(match.groups.key);
		} else {
			args.push('_index');
		}

		condition = match.groups.condition;
	}

	if(!condition) {
		return {
			is: false,
		}
	}

	return {
		is: true,
		condition: condition,
		rawArgs: args,
		args: args.join(','),
	}
}

function has(obj, name)
{
	return obj.hasOwnProperty(name);
}

function getAttr(obj, name)
{
	if(has(obj, name)) {
		return obj[name];
	}

	return false;
}

export function parseStatement(node)
{
	let start = false;
	let end = true;
	let statement = false;
	let condition = getAttr(node.attrs, 'v-if') || getAttr(node.attrs, 'v-else-if') || 'true';

	if(node.attrs.hasOwnProperty('v-if')) {
		start = true;
	}

	if(has(node.attrs, 'v-if') || has(node.attrs, 'v-else-if') || has(node.attrs, 'v-else')) {
		node.if_statement = true;
		statement = true;
	}

	// console.log(node, node.nextSibling)

	if(node.nextSibling instanceof Node) {
		if(has(node.nextSibling.attrs, 'v-else-if') || has(node.nextSibling.attrs, 'v-else')) {
			end = false;
		}
	}

	// console.log(node, start, end)

	return {
		condition,
		is: statement,
		start,
		end,
	}
}

export default function parseFunctions(code)
{
	code = code
		.replace(/\@if\((.*)\)/g, '<if condition="$1">')
		.replace(/\@elseif\((.*)\)/g, '<else-if condition="$1">')
		.replace(/\@else/g, '<else>')
		.replace(/\@endif/g, '<endif>')


	console.log(code);

	return code;
}