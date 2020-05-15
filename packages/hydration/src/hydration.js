import { h, hs, api } from 'sinuous';
import { _ } from '@sinuous/compiler/src/empty';
import Sinuous from '@sinuous/i';
import { options } from '@sinuous/component';
import { loadComponent } from '@sinuous/lazy';

let OBSERVER;
let STORAGE = {};

function hydrateProps(el, opts)
{
	if(!opts._s) {
		return;
	}

	api.property(el, opts, null);
}

function hydrateTag(realNodes, currentIndex, value)
{
	let el = realNodes[currentIndex];
	let nodes = value();

	console.warn(realNodes, currentIndex, nodes)

	if(Array.isArray(nodes)) {
		for (var i = 0; i < nodes.length; i++) {
			// console.log(realNodes[currentIndex + i], nodes[i])
			// api.insert(realNodes[currentIndex + i], nodes[i], null);
		}
	} else {
		api.insert(el, nodes, null);
	}
}

function hydrateChildren(node, children)
{
	let bindChildren = [];

	if(node !== null) {
		bindChildren = filterChildNodes(node);
	}

	for (var i = 0; i < children.length; i++) {
		if(children[i] === _) {
			continue;
		}
		// console.error(bindChildren[i], children[i]);
		hydrateTag(bindChildren, i, children[i]);
	}
}

function hydrate(el, opts = {}, children = [])
{
	if(!opts['id']) {
		return;
	}

	let bindNode = document.getElementById(`${ opts['id'] }`);

	// console.log(el, opts, children)
	api.subscribe(() => {
		hydrateProps(bindNode, opts);
		hydrateChildren(bindNode, children);
	});
}

function registerChildren(parent, child)
{
	parent.addChildren(child);
	child.setParent(parent);
}

export function compiler(el, opts = {}, children = [])
{
	options(this, opts);
				
	if(!Sinuous.hasComponent(el)) {
		hydrate.call(this, el, opts, children);
		return _;
	}
		
	let component = Sinuous.getHydrateComponent(el);

	if(component === null) {
		return _;
	}
	// console.log('[ COMPONENT ]', el);
	if(typeof opts.props !== 'undefined') {
		component.passProps(opts.props);
	}

	component.passSlots('default', children);

	registerChildren(this, component);

	return initComponent(component);
}

function initComponent(component)
{
	component.hydrate(component, compiler.bind(component));

	return _;
}

function IntersectionObserverCallback (entries, observer)
{
	entries.forEach(entry => {
		let id = entry.target.id
		// console.log(id);
		api.subscribe(() => {
			hydrateProps(entry.target, STORAGE[id].opts);
			hydrateChildren(entry.target, STORAGE[id].children);
		});
	});
}

export default function initHydration(component, hydrationRoot, timeBenchmark = () => {}, callback = null)
{
	// OBSERVER = new IntersectionObserver(IntersectionObserverCallback, {
	// 	root: hydrationRoot,
	// 	rootMargin: '0px',
	// 	threshold: 1.0
	// });



	// requestIdleCallback(() => {
	// 	OBSERVER.observe(bindNode);

	// 	STORAGE[opts['id']] = {
	// 		opts,
	// 		children,
	// 	}
	// });
	loadComponent(component, (instance) => {

		timeBenchmark('Hydration');

		let tree = [instance];

		Sinuous.clearHID();

		let connectedNode = filterChildNodes(hydrationRoot);

		for (var i = 0; i < tree.length; i++) {
			initComponent(tree[i], connectedNode[i]);
		}

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
