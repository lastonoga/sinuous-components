import { api } from 'sinuous';
import { _ } from '@siph/compiler/src/empty';
import Sinuous from '@siph/i';
import { options as parseOptions, h } from '@siph/component';
import { loadComponent } from '@siph/lazy';
import { loop } from '@siph/render';
import hydrateProps from './property';

let OBSERVER;
let STORAGE = {};

function hydrateH(context, el, options, children)
{
	hydrateProps(context, el, options);

	for (var i = 0; i < children.length; i++) {
		hydrate(context, el.childNodes[i], children[i]);
	}
}

function hydrateStatement(context, node, args)
{
	let parent = node.parentNode;
	let startIndex = 0;

	while((node = node.previousSibling) != null)
		startIndex++;
	
	let statementArgs = args.a;

	function hideNodes(children, startIndex, length)
	{
		for (var j = startIndex; j <= length; j++) {
			let node = children[j];
			// console.log('hide', j, node);
			if(node.nodeType !== Node.COMMENT_NODE) {
				node.replaceWith(document.createComment(''));
			}

			node = node.nextElementSibling;
		}
	}

	api.subscribe(() => {
		let currentIndex = startIndex;
		let foundCondition = false;
		
		for (var i = 0; i < statementArgs.length; i+= 3) {
			let condition = statementArgs[i];
			let size = statementArgs[i + 1];
			let component = statementArgs[i + 2];

			let currentNode = parent.childNodes[currentIndex];

			condition = typeof condition === 'function' ? condition() : condition;

			// console.log(currentNode, condition && !foundCondition);
			if(condition && !foundCondition) {
				foundCondition = true;
				// console.log('show', parent.childNodes[currentIndex], size);
				if(currentNode.nodeType === Node.COMMENT_NODE) {
					//  render
					let newNode = component.r(h.bind(context));
					currentNode.replaceWith(newNode);
				} else {
					// hydrate
					markAsReady(currentNode);
					hydrate(context, currentNode, component.h);
				}
			} else {
				// console.log('[hide]', parent.childNodes, currentIndex, size);
				hideNodes(parent.childNodes, currentIndex, size);
			}

			currentIndex += size;
			// console.warn(currentNode, currentNode.nextElementSibling)

			// console.log(currentNode, condition, 'skip');

			
		}
	});
	
}

function hydrateLoop(context, node, args)
{
	let condition = args.c;
	let parentNode = node.parentNode;
	let parentChildren = parentNode.childNodes;

	loop(context, args.c, args.k, (item, key) => {
		
		let node = args.r(h.bind(context), item, key);

		return node;	
	}, (registerHydration) => {
		let items = args.c();

		for (var i = 0; i < items.length; i++) {
			let node = parentChildren[i];
			let item = items[i];
			let itemKey = args.k(item, i);

			if(node) {
				if(node.getAttribute('data-key') == itemKey) {
					markAsReady(node);
					hydrate(context, node, args.h(item, i));
				}
			}

			registerHydration(item, i, node);
			// console.log(reg, item, i, node);
		}
	}, node.parentNode);

}

/**
 * Maybe need same hydration algorithm as with props
 * Skip first time hydration ???
 */
function hydrateText(context, node, args)
{
	if(args.t === _) {
		return;
	}
	
	api.subscribe(() => {
		api.insert(node, args.t(), null);
	});
}


function getSlotNode(el, tag, path)
{
	let node = el;

	for (var i = 1; i < path.length; i++) {
		node = node.childNodes[path[i]];
	}

	return el;
}

function hydrateSlots(context, el, opts = {}, slots)
{
	// return;
	// Hydrate props of main Node
	// hydrateProps(context, el, opts);
	
	let bindedNodes = {}

	let slotData = context._slotsData;

	// Find slot binding nodes
	for(let key in slots) {
		if(slotData[key]) {
			let node = getSlotNode(el, slotData[key].tag, slotData[key].path);
			bindedNodes[key] = node;
		} else {
			throw new Error(`There is no ${key} slot namespace defined`);
		}
	}

	// Hydrate slots per binded tag
	for(let key in slots) {
		let data = slotData[key];
		let node = bindedNodes[key];
		let childrenSlots = slots[key];
		let startNodeIndex = data.index;

		if(typeof node === 'undefined') {
			console.warn(el, opts, slotData, el[0]);
		}

		if(childrenSlots.length > node.length) {
			throw new Error('Slot hydration length mismatch');
		}

		for (var i = startNodeIndex; i < childrenSlots.length; i++) {
			// console.log(node.childNodes[i], childrenSlots[i])
			hydrate(context, node.childNodes[i], childrenSlots[i]);
		}
	}
}

/**
 * Context setup
 */
function registerChildren(parent, child)
{
	if(child._functional) {
		parent.addChildren(_);
		return;
	}

	parent.addChildren(child);
	child.setParent(parent);
}

function hydrateTag(context, node, args)
{
	let el = args.t,
		opts = args.o,
		children = args.c;

	if(!Sinuous.hasComponent(el)) {
		hydrateH(context, node, opts, children);
		return;
	}

	let component = Sinuous.getHydrateComponent(el, opts);

	if(component === null) {
		return _;
	}

	context.addChildren(component);

	if(component._functional) {
		let newArgs = component.hydrate({
			_slots: opts.$slots,
		});

		if(opts.$slots) {
			hydrateSlots(component, node, opts, opts.$slots);
		}

		// console.log(opts)
		hydrate(context, node, newArgs);

		return;
	}

	component.passProps(opts.props);
	component.passOptions(opts);

	if(opts.$slots) {
		hydrateSlots(component, node, opts, opts.$slots);
	}

	node.$s = component;
	// console.log(component, node)

	return hydrate(component, node, component.hydrate(component));
}

/**
 * Main hydration function
 */
function hydrate(context, node, args = null)
{
	// requestIdleCallback(() => {
		hydrateIdle(context, node, args);
	// }, {
	// 	timeout: 0,
	// 	read: true
	// });
}

function markAsReady(node)
{
	node._hydrated = true;
}

function hydrateIdle(context, node, args)
{
	if(args === null || node === null) {
		return;
	}

	if(args._t === 'h') {
		// args.o['data-hydrated'] = true;
		// args.o['_s'] = true;
		hydrateTag(context, node, args);
	}

	if(args._t === 't') {
		hydrateText(context, node, args);
	}

	if(args._t === 'loop') {
		hydrateLoop(context, node, args);
	}

	if(args._t === 'statement') {
		hydrateStatement(context, node, args);
	}
	
	return _;
	
}


export default function initHydration(component, hydrationRoot, timeBenchmark = () => {}, callback = null)
{
	loadComponent(component, (instance) => {

		timeBenchmark('Hydration');

		let tree = [instance];

		Sinuous.clearHID();

		// let connectedNode = filterChildNodes(hydrationRoot);

		for (var i = 0; i < tree.length; i++) {
			let component = tree[i];
			let node = hydrationRoot.childNodes[i];
			let hydration = component.hydrate(component);
			
			hydrate(component, node, hydration);
		}
		
		// console.log(instance);
		instance.hook('mounted');

		if(callback) {
			callback(instance);
		}

		timeBenchmark('Hydration');

		return instance;
	});

}

/**
 * Filter out whitespace text nodes unless it has a noskip indicator.
 *
 * @param  {Node} parent
 * @return {Array}
 */
function filterChildNodes(parent) {
	return parent.childNodes;
	// console.warn(parent, parent.childNodes);
    return Array.from(parent.childNodes).filter(
        el => el.nodeType !== 3 || el.data.trim() || el._noskip
    );
}
