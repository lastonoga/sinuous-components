import { parseOptions, parseOptionKey, parseOptionValue } from './attrs';
import { _ } from './helpers';
import { parseStatement, parseLoop } from './parseFunctions';
import { expression } from './expression';

export var HID = 0;

export const isNonPhrasingTag = [
	'address', 'article', 'aside', 'base', 'blockquote', 'body', 'caption', 'col', 'colgroup',
	'dd', 'details', 'dialog', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer',
	'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'legend',
	'li', 'menuitem', 'meta', 'optgroup', 'option', 'param', 'rp', 'rt', 'source', 'style', 'summary',
	'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track'
];

var IF_STATEMENT_STARTED = false;

function getComponentCode(tag, options, children = [])
{
	if(tag === 'template') {
		return `[${ children.join(',') }]`;
	}
	
	return `h('${ tag }', ${ options }, [${ children.join(',') }])`;
}

function handleTag(node, context, options, children = [])
{
	let Loop = parseLoop(node);

	let code = '';

	if(Loop.is) {
		let condition = expression(context, Loop.condition, false);
		code += `loop(${ condition.value }, (${ Loop.args }) => { return `
	}

	code += getComponentCode(node.tag, options, children);

	if(Loop.is) {
		code += `;})`;
	}

	code += '';

	return code;
}

export default class Node
{
	constructor({ tag = null, attrs = null, children = [] })
	{
		this.hid = ++HID;
		this.tag = tag;
		this.attrs = attrs;
		this.options = parseOptions(attrs);
		this.children = children;
		
		this.prevSibling = null;
		this.nextSibling = null;
		// if
		this.if_statement = false;
	}

	appendChild(node)
	{
		this.children.push(node);
	}

	setSiblings()
	{
		for (var i = 0; i < this.children.length; i++) {
			if(this.children[i + 1]) {
				this.children[i].nextSibling = this.children[i + 1];
				this.children[i + 1].prevSibling = this.children[i];
			}

			if(this.children[i] instanceof Node) {
				this.children[i].setSiblings();
			}
		}
	}

	get isComponent()
	{
		return !isNonPhrasingTag.includes(this.tag);
	}

	toAST(context = null, hydrate = false, isCallExpression = false)
	{
		let code = '';
		let children = [];
		let shouldHydarate = false;
		let shouldOptionsHydrate = false;
		// let isCallExpression = false;

		let Statement = parseStatement(this);

		if(Statement.is) {
			isCallExpression = true;
		}

		/**
		 * Translate children to hyperscript
		 * @param  {[type]} var i             [description]
		 * @return {[type]}     [description]
		 */
		for (var i = 0; i < this.children.length; i++) {
			let child = this.children[i];
			let { value, statefull } = child.toAST(context, hydrate, isCallExpression);
			// console.log('[child]', child, statefull);
			if(statefull) {
				shouldHydarate = true;
			}

			children.push(value);
		}

		let options = '';

		// console.warn('[2]', context.name, shouldHydarate);
		for(let key in this.options) {
			let { value, statefull } = parseOptionValue(context, key, this.options[key]);
			
			if(statefull) {
				shouldHydarate = true;
			}

			if(statefull || !hydrate || key === 'data-hid') {
				options += `${ parseOptionKey(key) }: ${ value },`;
			}

			if(statefull && hydrate) {
				shouldOptionsHydrate = true;
			}
		}


		shouldHydarate = this.isComponent || shouldHydarate;


		if(shouldHydarate) {
			options += `id: ctx.getUID(${ this.hid }),`;
		}

		if(shouldOptionsHydrate) {
			options += `_s: true,`;
		}

		// console.warn(hydrate, context.name, this.tag, shouldHydarate ? options : '');

		options = `{${options}}`;
		

		if(Statement.is) {
			let condition = expression(context, Statement.condition, false);

			if(Statement.start) {
				code += `statement(`;
			}

			code += ` ${ condition.value }, ${ handleTag(this, context, options, children) }`;

			if(Statement.end) {
				code += `)`;
			}
		} else {
			code += handleTag(this, context, options, children);
		}

		// console.log(this.attrs, this.if_statement, statement)

		// if(IF_STATEMENT_STARTED && !this.attrs['v-if']) {
		// 	isCallExpression = true;
		// 	code += `)`;
		// }

		// if(IF_STATEMENT_STARTED) {
		// 	let condition = this.attrs['v-if'] || this.attrs['v-else-if'] || this.attrs['v-else'];
		// 	let res = [];
		// 	if(!this.attrs['v-else']) {
		// 		res.push(condition)
		// 	}

		// 	res.push(getComponentCode(this.tag, options, children));

		// 	if(!this.attrs['v-else']) {
		// 		res.push('')
		// 	}
			
		// 	code += res.join(',');

		// 	console.log(this.attrs, code)
		// } 

		// if(!isCallExpression) {
			
		// }

		// console.warn('[3]', context.name, shouldHydarate);
		// console.log('[main]', this.tag, shouldHydarate);

		if(hydrate && !shouldHydarate && !isCallExpression) {
			return {
				value: _,
				statefull: false,
			};
		}

		return {
			value: code,
			statefull: shouldHydarate,
		};
	}
}