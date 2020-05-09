import { parseOptions, parseOptionKey, parseOptionValue } from './attrs';
import { _ } from './helpers';

export var HID = 0;

export const isNonPhrasingTag = [
	'address', 'article', 'aside', 'base', 'blockquote', 'body', 'caption', 'col', 'colgroup',
	'dd', 'details', 'dialog', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer',
	'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'legend',
	'li', 'menuitem', 'meta', 'optgroup', 'option', 'param', 'rp', 'rt', 'source', 'style', 'summary',
	'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track'
];

export default class Node
{
	constructor({ tag = null, attrs = null, children = [] })
	{
		this.hid = ++HID;
		this.tag = tag;
		this.options = parseOptions(attrs);
		this.children = children;
	}

	// getContext(currentContext)
	// {
	// 	let ctx = null;

	// 	try {
	// 		ctx = Sinuous.getComponent(this.tag);
	// 	} catch(err) {}

	// 	if(ctx === null) {
	// 		ctx = currentContext;
	// 	}

	// 	return ctx;
	// }

	get isComponent()
	{
		return !isNonPhrasingTag.includes(this.tag);
	}

	toAST(context = null, hydrate = false)
	{
		let code = '';
		let children = [];
		let shouldHydarate = false;
		let shouldOptionsHydrate = false;
		// context = this.getContext(context);

		// console.warn('[1]', context.name, shouldHydarate);
		/**
		 * Translate children to hyperscript
		 * @param  {[type]} var i             [description]
		 * @return {[type]}     [description]
		 */
		for (var i = 0; i < this.children.length; i++) {
			let child = this.children[i];
			let { value, statefull } = child.toAST(context, hydrate);
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

		if(this.tag === 'slot') {
			code += `slot(this, h, ${ options }, [${ children.join(',') }])`;
		} else {
			code += `h('${ this.tag }', ${ options }, [${ children.join(',') }])`;
		}

		// console.warn('[3]', context.name, shouldHydarate);
		// console.log('[main]', this.tag, shouldHydarate);

		if(hydrate && !shouldHydarate) {
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