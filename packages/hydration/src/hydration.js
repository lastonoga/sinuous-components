import { api } from 'sinuous';
import { _ } from '@sinuous/compiler/src/empty';
import Sinuous from '@sinuous/i';
import map from 'sinuous/map';
import { options as parseOptions, h } from '@sinuous/component';
import { loadComponent } from '@sinuous/lazy';
// import subscribe from './subscribe';
import hydrateProps from './property';

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





// function hydrateProps(el, options)
// {
// 	if(options._s) {
// 		// console.log(el, 'Prepare options', options);
// 		// options = parseOptions(options, false);
// 		// console.log(el, 'Prepare options 2', options);
// 		property(el, options);

// 		// api.subscribe(() => {
// 		// 	// console.log(el, 'Change options');
// 		// 	api.property(el, options, null);
// 		// });
// 	}
// }

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
	let startNode = node;
	let prevNode = node;
	let parentNode = node.parentNode;

	api.subscribe(() => {
		let loop_condition = typeof condition === 'function' ? condition() : condition;
		let currentNode = startNode;

		for(let key in loop_condition)
		{
			let item = loop_condition[key];
			let itemKey = args.k(item, key);
			let itemArgs;

			let shouldRender = currentNode === null;

			if(currentNode) {
				let nodeKey = currentNode.getAttribute('data-key');
				if(nodeKey === itemKey) {
					shouldRender = false;
				}
			}

			if(shouldRender) {
				// let newNode = args.r(h.bind(context), item, key);
				
				// markAsReady(newNode);
				// modify H with Index to create class + mount/unmount
				if(currentNode) {
					// replace
				} else {
					// prevNode.after(newNode)
				}
				// prevNode = newNode;
				// context.hook('mounted');
			} else { // if(!currentNode._hydrated) 
				itemArgs = args.h(item, key);

				markAsReady(currentNode);

				hydrate(context, currentNode, itemArgs);
			}

			if(!shouldRender) {
				prevNode = currentNode;
				currentNode = currentNode.nextElementSibling;
			}
		}
	});
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

	registerChildren(context, component);

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

	// setup component
	// if(typeof opts.props !== 'undefined') {
	// 	component.passProps(opts.props);
	// }
	// console.log(component, opts.$slots)
	if(opts.$slots) {
		hydrateSlots(component, node, opts, opts.$slots);
	}

	component.passOptions(opts);

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
