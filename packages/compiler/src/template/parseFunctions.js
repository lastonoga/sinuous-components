export const IF_ATTRS = ['v-if', 'v-else-if', 'v-else'];

export  function parseStatement(node)
{
	let start = false;
	let end = true;
	let statement = false;
	let condition = node.attrs['v-if'] || node.attrs['v-else-if'] || 'true';

	if(node.attrs['v-if']) {
		start = true;
	}

	if(node.attrs['v-if'] || node.attrs['v-else-if'] || node.attrs['v-else']) {
		node.if_statement = true;
		statement = true;
	}


	if(node.nextSibling) {
		if(node.nextSibling.attrs['v-else-if'] || node.nextSibling.attrs['v-else']) {
			end = false;
		}
	}

	// if(node.prevSibling) {
	// 	if(node.prevSibling.if_statement) {
	// 		statement = true;
	// 	}
	// }

	// console.warn(node.attrs, statement, start, end);

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