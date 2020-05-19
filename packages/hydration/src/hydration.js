import { h, hs, api } from 'sinuous';
import { _ } from '@sinuous/compiler/src/empty';
import Sinuous from '@sinuous/i';
import { options } from '@sinuous/component';
import { loadComponent } from '@sinuous/lazy';
import { computed } from 'sinuous/observable';

let OBSERVER;
let STORAGE = {};

let SUBSCRIBERS = [];

function addSubscriber(fn)
{
	console.log(fn, SUBSCRIBERS)
	SUBSCRIBERS.push(fn);
}

// function hydrateProps(el, opts)
// {
	// if(!opts._s) {
	// 	return;
	// }

// 	api.property(el, opts, null);
// }

// function hydrateTag(parent, children, currentIndex, value)
// {
// 	let el = children[currentIndex];
	
// 	let nodes = value();

// 	if(Array.isArray(nodes)) {

// 		for (var i = 0; i < nodes.length; i++) {
// 			let child = nodes[i];
// 			if(typeof child === 'function') {
// 				child = child();
// 			}
// 			// console.log(parent,  child.size)
// 			// api.insert(parent, child, children[currentIndex + i]);
// 			// parent.replaceChild(child, children[currentIndex + i])
// 			// children[currentIndex + i].replaceWith(child);
// 		}
// 	} else {
// 		api.insert(el, nodes, null);
// 	}
// }

// function hydrateChildren(node, children)
// {
// 	let bindChildren = [];

// 	if(node !== null) {
// 		bindChildren = filterChildNodes(node);
// 	}

// 	for (var i = 0; i < children.length; i++) {
// 		if(children[i] === _) {
// 			continue;
// 		}
// 		// console.error(bindChildren[i], children[i]);
// 		hydrateTag(node, bindChildren, i, children[i]);
// 	}
// }

// function getSlotNode(el, path)
// {
// 	for (var i = 0; i < path.length; i++) {
// 		el = el.childNodes[path[i]];
// 	}

// 	return el;
// }

// function hydrateSlots(component, el, opts = {}, slots)
// {
// 	if(!opts['id']) {
// 		return;
// 	}

// 	// if(opts['id'] === 'hydr-13') {
// 	// 	opts['id'] = 'hydr-6';
// 	// }

// 	// if(opts['id'] === 'hydr-30') {
// 	// 	opts['id'] = 'hydr-21';
// 	// }

// 	let bindNode = document.getElementById(`${ opts['id'] }`);

// 	let slotNodes = {}

// 	for(let key in slots) {
// 		if(component._slotsPath[key]) {
// 			let node = getSlotNode(bindNode, component._slotsPath[key])
// 			slotNodes[key] = node;
// 		} else {
// 			throw new Error(`There is no ${key} slot namespace defined`);
// 		}
// 	}

// 	api.subscribe(() => {
// 		for(let key in slots) {
// 			let node = slotNodes[key];
// 			let childrenSlots = slots[key];
			
// 			if(node.childNodes.length === 0) {
// 				node = [node];
// 			} else {
// 				node = node.childNodes;
// 			}

// 			if(childrenSlots.length > node.length) {
// 				throw new Error('Slot hydration length mismatch');
// 			}

// 			for (var i = 0; i < childrenSlots.length; i++) {
				
// 				api.insert(node[i], childrenSlots[i](), null);
// 			}
// 		}
// 	});
	
// }

// function hydrate(el, opts = {}, children = [])
// {
// 	let bindNode;
// 	console.log(this, el, opts, children)

// 	// if(this.node) {
// 	// 	bindNode = this.node;
// 	// }

// 	if(!opts['id']) {
// 		return;
// 	} else {
// 		bindNode = document.getElementById(`${ opts['id'] }`);
// 	}

// 	// console.log(this);
// 	// this.ctx._el_index++;

// 	if(bindNode === null) {
// 		return;
// 	}
	
	// api.subscribe(() => {
	// 	hydrateProps(bindNode, opts);
	// 	hydrateChildren(bindNode, children);
	// });
// }

// function registerChildren(parent, child)
// {
// 	parent.addChildren(child);
// 	if(child.setParent) {
// 		child.setParent(parent);
// 	}
// }

// export function compiler(el, opts = {}, children = [])
// {
// 	options(this, opts);
	
// 	if(!Sinuous.hasComponent(el)) {
// 		hydrate.call(this, el, opts, children);
// 		return _;
// 	}
		
// 	let component = Sinuous.getHydrateComponent(el, opts);

// 	// console.log(component, el, opts)
// 	if(component === null) {
// 		return _;
// 	}

// 	registerChildren(this.ctx, component);

// 	if(component._functional) {
// 		// console.warn('start hydration');
// 		return component.hydrate({
// 			getUID() {
// 				return -1;
// 			},
// 			_slots: opts.$slots,
// 		}, compiler);
// 	}

// 	if(typeof opts.props !== 'undefined') {
// 		component.passProps(opts.props);
// 	}

// 	if(opts.$slots) {
// 		hydrateSlots(component, el, opts, opts.$slots);
// 	}

// 	return initComponent(component);
// }






function hydrateProps(el, options)
{
	if(options._s) {
		api.subscribe(() => {
			api.property(el, options, null);
		});
	}
}

function hydrateH(context, el, options, children)
{
	
	hydrateProps(el, options);

	for (var i = 0; i < children.length; i++) {
		hydrate(context, el.childNodes[i], children[i]);
	}
}

function hydrateLoop(context, node, args)
{
	let condition = args.c;
	let startNode = node;

	api.subscribe(() => {
		let loop_condition = typeof condition === 'function' ? condition() : condition;
		let currentNode = startNode;

		for(let key in loop_condition)
		{
			let item = loop_condition[key];
			let itemArgs = args.fn(item, key);
			// console.log('[hydrate loop]', currentNode, itemArgs)

			hydrate(context, currentNode, itemArgs);

			currentNode = currentNode.nextElementSibling;
		}
	});
}

function hydrateText(context, node, args)
{
	// console.warn('[TEXT]', node, args.t);
	if(args.t === _) {
		return;
	}
	// if(typeof args.t !== 'function' ) {
	// 	return;
	// }
	// console.warn('[TEXT]', node, args.t());
	
	// if(!node._hydrated) {
	// 	node._hydrated = true;
	
	api.subscribe(() => {
		api.insert(node, args.t(), null);
	});
	// }
	// api.insert(el, nodes, null);
}


function getSlotNode(el, tag, path)
{
	// console.log(el, tag, path);
	for (var i = 1; i < path.length; i++) {
		el = el.childNodes[path[i]];
	}
	// console.error(el);

	return el;
}

function hydrateSlots(context, el, opts = {}, slots)
{
	hydrateProps(el, opts);
	// console.log(context, el, opts, slots)

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

	registerChildren(context, component);

	if(component._functional) {
		let newArgs = component.hydrate({
			getUID() {
				return -1;
			},
			_slots: opts.$slots,
		});

		if(opts.$slots) {
			hydrateSlots(component, node, opts, opts.$slots);
		}

		// console.log(opts)
		hydrate(context, node, newArgs);

		return;
	}

	// setup component
	// if(typeof opts.props !== 'undefined') {
	// 	component.passProps(opts.props);
	// }

	if(opts.$slots) {
		hydrateSlots(component, node, opts, opts.$slots);
	}

	return hydrate(component, node, component.hydrate(component));
}

/**
 * Main hydration function
 */
function hydrate(context, node, args = null)
{
	// requestIdleCallback(() => {
		// console.log('start')
		hydrateIdle(context, node, args);
	// }, {
	// 	timeout: 0,
	// 	read: true
	// });
}

function hydrateIdle(context, node, args)
{
	if(args === null) {
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

	return _;
	
}


export default function initHydration(component, hydrationRoot, timeBenchmark = () => {}, callback = null)
{
	loadComponent(component, (instance) => {

		timeBenchmark('Hydration');

		let tree = [instance];

		Sinuous.clearHID();

		let connectedNode = filterChildNodes(hydrationRoot);

		for (var i = 0; i < tree.length; i++) {
			let component = tree[i];
			let node = connectedNode[i];
			let hydration = component.hydrate(component);
			
			hydrate(component, node, hydration);
		}

		
			// console.log('start', SUBSCRIBERS);
		// for (var i = 0; i < SUBSCRIBERS.length; i++) {
		// 	let fn = SUBSCRIBERS[i];
		// 	console.warn(i, SUBSCRIBERS[i])
		// 	api.subscribe(() => {
		// 		// console.log(fn)
		// 		fn()
		// 	});
		// 	// SUBSCRIBERS[i]();
		// }
		// });
		console.log(instance);
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
