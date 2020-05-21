import { parseAttrs, handleAttrsValue } from './attrs';
import { _ } from '../helpers';
import { parseStatement, parseLoop, parseSlot } from './parseFunctions';
import { expression } from './expression';

export var HID = 0;

export const isNonPhrasingTag = [
	'address', 'article', 'aside', 'base', 'blockquote', 'body', 'caption', 'col', 'colgroup',
	'dd', 'details', 'dialog', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer',
	'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'legend',
	'li', 'menuitem', 'meta', 'optgroup', 'option', 'param', 'rp', 'rt', 'source', 'style', 'summary',
	'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'template', 'br', 'span', 'p', 'ParserBody', 'slot'
];

var IF_STATEMENT_STARTED = false;

/**
 * @return Interface {
 *   Code
 *   Length
 * }
 */
function makeLoop(node, context, Loop, condition, returnObject, { el, options, children, renderOptions, renderChildren })
{
	let args = Loop.args;

	let componentRenderTag = getComponentCode(el, renderOptions, renderChildren, false);
	let componentHydrateTag = getComponentCode(el, options, children, true);
	
	let key = Loop.rawArgs[1];

	if(!node.attrs[':key']) {
		console.warn('Key attribute is required for loop statement');
	} else {
		key = handleAttrsValue(context, node.attrs[':key']).value;
	}

	if(returnObject) {
		return `{
			_t: 'loop',
			c: ${ condition },
			k: (${ args }) => { return ${ key }; },
			h: (${ args }) => { return ${ componentHydrateTag }; },
			r: (${ args }) => { return ${ componentRenderTag }; },
		}`
	}

	return `loop(${ condition }, (${ args }) => { return ${ componentRenderTag }; })`
}

function makeStatement(context, Statement, condition, returnObject, { el, options, children, renderOptions, renderChildren })
{
	let length = getComponentSize(el, options, children);
	let componentRenderTag = getComponentCode(el, renderOptions, renderChildren, false);
	let componentHydrateTag = getComponentCode(el, options, children, true);

	let code = '';

	if(Statement.start) {
		if(returnObject) {	
			code += `{ _t: 'statement', a: [`;
		} else {
			code += `statement(`;
		}
	}

	if(returnObject) {	
		code += ` ${ condition.value }, ${ length }, ${ componentHydrateTag }, (h) => { return ${ componentRenderTag } }`;
	} else {
		code += ` ${ condition.value }, ${ length }, (h) => { return ${ componentRenderTag } }`;
	}

	if(Statement.end) {
		if(returnObject) {	
			code += `]}`;
		} else {
			code += `)`;
		}
	}

	return code;
}

function getComponentCode(tag, options, children = [], returnObject = false, isComponent = false)
{
	if(tag === 'template') {
		return `[${ children.join(',') }]`;
	}

	if(returnObject) {
		return `{
			_t: 'h',
			t: '${ tag }',
			o: ${ options },
			c: [${ children.join(',') }],
		}`
	}
	
	return `h('${ tag }', ${ options }, [${ children.join(',') }])`;
}

function getComponentSize(tag, options, children = [])
{
	if(tag === 'template') {
		return children.length;
	}

	return 1;
}

/**
 * @return Interface {
 *   value
 *   stateful
 * }
 */
function handleTag(tag, options, children = [], returnObject)
{
	return getComponentCode(tag, options, children, returnObject);
}

function parseSlotAttrs(node)
{
	let name = 'default';
	let tag = null;

	if(node.tag === 'slot') {
		name = node.attrs['name'] || 'default';
		tag = node.attrs['tag'] || 'span';
	}

	if(tag !== null) {
		tag = `'${tag}'`;
	}

	return {
		name,
		tag,
	};
}

export default class Node
{
	constructor({ tag = null, attrs = null, children = [] })
	{
		// let { dynamicOptions, staticOptions } = parseOptions(attrs);

		this.hid = ++HID;
		this.tag = tag;
		this.attrs = attrs;
		this.children = children;
		
		this.prevSibling = null;
		this.nextSibling = null;
		this.parent = null;
		// if
		this.if_statement = false;
		this.index = 0;
	}

	get isComponent()
	{
		return !isNonPhrasingTag.includes(this.tag);
	}

	get isInsideComponent()
	{
		let node = this;
		let i = 0;
		let isInsideComponent = false;

		while(node) {
			i++;

			if(node.isComponent) {
				isInsideComponent = true;
				break;
			}

			node = node.parent;

			if(i > 100) {
				throw new Error('Loop problem');
			}
		}

		return isInsideComponent;
	}

	get isSlot()
	{
		return this.tag === 'slot';
	}

	appendChild(node)
	{
		node.index = this.children.length;
		node.parent = this;
		this.children.push(node);
	}

	getIndexPath()
	{
		let indexes = [];
		let node = this;
		let i = 0;

		while(node) {
			i++;

			indexes.push(node.index);
			node = node.parent;

			if(i > 10) {
				throw new Error('Loop problem');
			}
		}

		indexes.reverse();

		return indexes;
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

	getSlots(indexes = [], isUnderComponent = false)
	{
		let slots = {};

		if(this.isComponent) {
			isUnderComponent = true;
		}

		for (var i = 0; i < this.children.length; i++) {
			let node = this.children[i];
			let nodeIndexes = indexes.concat([i]);

			if(node instanceof Node) {
				slots = Object.assign(slots, node.getSlots(nodeIndexes, isUnderComponent));

				if(node.isSlot && !isUnderComponent) {
					let name = node.attrs['name'] || 'default';
					let tag = node.attrs['tag'] || 'span';
					let startIndex = 0;

					if(tag === null) {
						startIndex = i;
						nodeIndexes.pop();
					}
					// console.log('TAAAAAG', nodeIndexes, node.attrs['tag'])
					slots[name] = {
						path: nodeIndexes,
						tag,
						index: startIndex,
					};
				}
			}
		}

		return slots;
	}

	getOptions(context = null, slots, shouldSlotsHydrate, hydrate = false, root = false)
	{
		let { options, shouldOptionsHydrate } = parseAttrs(context, this.attrs, hydrate);
		
		// Handle slots for Component children
		if(this.isComponent && Object.keys(slots).length > 0) {
			let value = '';

			for(let key in slots) {
				value += `'${key}': [${ slots[key].join(',') }],`
			}

			if((hydrate && shouldSlotsHydrate) || !hydrate) {
				options += `$slots: { ${ value } },`;
			}
		}

		// Is component stateful
		if(hydrate && shouldOptionsHydrate) {
			options += `_s: true,`;
		}

		options = `{${options}}`;

		if(root) {
			options = `[ctx.options, ${options}]`;
		}

		return {
			options,
			shouldOptionsHydrate,
		}
	}

	toAST(context = null, hydrate = false, root = false)
	{
		let code = '';
		let children = [];
		let renderChildren = [];
		let shouldHydarate = false;
		let shouldSlotsHydrate = false;
		let render = !hydrate;
		// let isCallExpression = false;

		let Statement = parseStatement(this);
		let Slot = parseSlot(this);
		let Loop = parseLoop(this);

		// if(Statement.is) {
		// 	isCallExpression = true;
		// }

		let slots = {};

		/**
		 * Translate children to hyperscript
		 * @param  {[type]} var i             [description]
		 * @return {[type]}     [description]
		 */
		for (var i = 0; i < this.children.length; i++) {
			let child = this.children[i];

			// For loops and statements | Where hydration and render needs
			renderChildren.push(child.toAST(context, false, false).value);

			let { value, statefull } = child.toAST(context, hydrate);
			// console.log('[child]', child, statefull);
			if(statefull) {
				shouldHydarate = true;
			}

			// Parse slots if component
			if(this.isComponent) {
				let { name } = parseSlotAttrs(child);

				if(!slots[name]) {
					slots[name] = [];
				}

				// console.log(name, i,statefull)
				slots[name].push(value);

				if(value !== _) {
					shouldSlotsHydrate = true;
				}
			} else {
				// If not append child
				children.push(value);
			}
			
		}

		let { options, shouldOptionsHydrate } = this.getOptions(context, slots, shouldSlotsHydrate, hydrate, root);

		let renderOptions = this.getOptions(context, slots, shouldSlotsHydrate, false, root).options;
		
		if(shouldOptionsHydrate) {
			shouldHydarate = true;
		}

		shouldHydarate = this.isComponent || shouldHydarate;

		let componentTag = getComponentCode(this.tag, options, children, hydrate, this.isComponent);

		// Make loop from component
		if(Loop.is) {
			let condition = expression(context, Loop.condition, false);
			
			if(condition.statefull) {
				shouldHydarate = true;
			}

			componentTag = makeLoop(this, context, Loop, condition.value, hydrate, {
				el: this.tag,
				options,
				children,
				renderOptions,
				renderChildren,
			})
		}
		// Statement render
		if(Statement.is) {

			// console.log(renderChildren);
			let condition = expression(context, Statement.condition, false);

			code += makeStatement(Statement, condition, hydrate, {
				el: this.tag,
				options,
				children,
				renderOptions,
				renderChildren,
			});
		// Slot render
		} else if(Slot.is) {
			let { name, tag } = parseSlotAttrs(this);

			if(Slot.callExpression) {
				let attrs = Object.assign({}, this.attrs);
				
				delete attrs.name;
				delete attrs.tag;

				code += `slot(ctx, h, '${ name }', ${ tag }, ${ options }, [${ children.join(',') }])`;
			} else {
				code += `${ children.join(',') }`;
			}
		} else {
			code += componentTag;
		}

	
		// console.log(hydrate, shouldHydarate, isCallExpression, code)
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