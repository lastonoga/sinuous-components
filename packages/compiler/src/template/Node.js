import { parseAttrs } from './attrs';
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
function makeLoop(condition, args, componentTag, returnObject)
{
	if(returnObject) {
		return `{
			_t: 'loop',
			c: ${ condition },
			fn: (${ args }) => { return ${ componentTag }; },
		}`
	}

	return `loop(${ condition }, (${ args }) => { return ${ componentTag }; })`
}

function getComponentCode(tag, options, children = [], returnObject = false)
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

	toAST(context = null, hydrate = false, isCallExpression = false)
	{
		let code = '';
		let children = [];
		let shouldHydarate = false;
		let shouldSlotsHydrate = false;
		let render = !hydrate;
		// let isCallExpression = false;

		let Statement = parseStatement(this);
		let Slot = parseSlot(this);
		let Loop = parseLoop(this);

		if(Statement.is) {
			isCallExpression = true;
		}

		let slots = {};

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

			// Parse slots if component
			if(this.isComponent) {
				let { name } = parseSlotAttrs(child);

				if(!slots[name]) {
					slots[name] = [];
				}

				slots[name].push(value);

				if(value !== _) {
					shouldSlotsHydrate = true;
				}
			} else {
				// If not append child
				children.push(value);
			}
			
		}

		let { options, shouldOptionsHydrate } = parseAttrs(context, this.attrs, hydrate);
		
		if(shouldOptionsHydrate) {
			shouldHydarate = true;
		}

		// Handle slots for Component children
		if(this.isComponent && Object.keys(slots).length > 0) {
			let value = '';

			for(let key in slots) {
				value += `'${key}': [${ slots[key].join(',') }],`
			}

			if((hydrate && shouldSlotsHydrate) || render) {
				options += `$slots: { ${ value } },`;
			}
		}

		shouldHydarate = this.isComponent || shouldHydarate;

		// Is component stateful
		if(hydrate && shouldOptionsHydrate) {
			options += `_s: true,`;
		}

		options = `{${options}}`;

		let componentTag = getComponentCode(this.tag, options, children, hydrate);

		// Make loop from component
		if(Loop.is) {
			let condition = expression(context, Loop.condition, false);
			
			if(condition.statefull) {
				shouldHydarate = true;
			}

			componentTag = makeLoop(condition.value, Loop.args, componentTag, hydrate)
		}
		// Statement render
		if(Statement.is) {
			let condition = expression(context, Statement.condition, false);

			if(Statement.start) {
				code += `statement(`;
			}

			let length = getComponentSize(this.tag, options, children);

			code += ` ${ condition.value }, ${ length }, (h) => { return ${ componentTag } }`;

			if(Statement.end) {
				code += `)`;
			}
		// Slot render
		} else if(Slot.is) {
			let { name, tag } = parseSlotAttrs(this);

			if(Slot.callExpression) {
				let attrs = Object.assign({}, this.attrs);
				
				delete attrs.name;
				delete attrs.tag;

				code += `slot(ctx, h, '${ name }', ${ tag }, ${ JSON.stringify(attrs) }, [${ children.join(',') }])`;
			} else {
				code += `${ children.join(',') }`;
			}
		} else {
			code += componentTag;
		}

	
		// console.log(hydrate, shouldHydarate, isCallExpression, code)
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