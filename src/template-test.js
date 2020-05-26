import { observable, computed, subscribe, on } from 'sinuous/observable';
import timeBenchmark from './time';

/**
 * Main functions
 */
function parseContext(context)
{
	if(context === undefined || context === null) {
		context = {};
	}

	let props = context.props || {};
	let slots = context.slots || {};

	return {
		props,
		slots,
	}
}

// Get node for hydration and render
function getNode(template, node)
{
	if(node === false) {
		node = template.content.firstChild.cloneNode(true);
	}

	return node;
}

// Is property observable 
function isObservable(prop)
{
	return prop.$o !== undefined || typeof prop === 'function';
}

/**
 * Subscribe action to property
 */
function valueSubscribe(hydrate, prop, fn)
{
	hydrate = hydrate !== false;

	if(!isObservable(prop)) {
		if(!hydrate) {
			fn(prop);
		}
		return;
	}

	let first = hydrate;

	// return;
	// Skip first hydration

	subscribe(() => {
		let v = prop();

		if(first) {
			first = false;
			return;
		}

		fn(v);
	});
}

// attr binding and hydration
function makeAttrs(node, hydrate, arg1, arg2)
{
	if(arg1 !== null) {
		for(let key in arg1) {
			// cleanup same keys
			if(arg2[key] !== undefined) {
				delete arg1[key];
			} else {
				// Set Main Node component attributes
				valueSubscribe(hydrate, arg1[key], (v) => {
					node.setAttribute(key, v);
				});
			}
		}
	}

	// Set passed component attributes
	for(let key in arg2) {
		valueSubscribe(hydrate, arg2[key], (v) => {
			node.setAttribute(key, v);
		})
	}
}

// event binding
function makeEvents(node, ...args)
{
	for (var i = 0; i < args.length; i++) {
		for(let key in args[i]) {
			let value = args[i][key];
			node.addEventListener(key, function(event) {
				return value(event);
			})
		}
	}
}

/**
 * Button
 */
const _button$ = document.createElement("template");
_button$.innerHTML = `<div class="button"><span>Default text</span></div>`;

const buttonView = (context, hydrate = false) => {

	let { props, slots } = parseContext(context);

	let node = getNode(_button$, hydrate);
	// let d = observable(1);
	// setInterval(() => { d(d() + 1); }, 100);
	
	/**
	 * Prop Inheritance
	 */
	makeAttrs(node, hydrate, {
		// 'data-test': () => { return d(); }
	}, context.attrs || {});

	makeEvents(node, {
		// click: () => { console.log('test'); }
	}, context.on || {});

	/**
	 * Main
	 */
	let defaultSlot = node.firstChild;

	// Render and hydration text node
	valueSubscribe(hydrate, slots.default, (v) => {
		defaultSlot.innerHTML = v;
	})

	return node;
};

/**
 * Page
 */
let timer = null;
const _page$ = document.createElement("template");
_page$.innerHTML = `<div><!----></div>`;

const pageView = (context, hydrate = false) => {
	
	let { props, slots } = parseContext(context);

	let node = getNode(_page$, hydrate);
	let items = observable(Array.from({ length: 1000 }, (_, i) => i));
	let s1 = observable(1);

	// clearInterval(timer);
	// timer = setInterval(() => {
	// 	s1(s1() + 1);
	// }, 1000)
	// test simple loop
	let loopBinding = node.firstChild;
	subscribe(() => {
		let buttons = document.createDocumentFragment();
		let arr = items();

		// create components
		let _button_tmp = (item, key, node = false) => {
			return buttonView({
				// on: {
				// 	click: () => { alert(key); }
				// },
				slots: {
					default: `Button ${ item }`,
					// default2: () => `Button ${ arr[key] } - ${ s1() }`
				}
			}, node);
		}

		// Loop render function
		if(hydrate === false) {
			for(let key in arr) {
				buttons.appendChild(_button_tmp(arr[key], key));
			}

			loopBinding.replaceWith(buttons);
		} else {
			// Loop hydration function
			let startNode = loopBinding;
			for(let key in arr) {
				if(startNode === null) {
					break;
				}
				// continue;
				_button_tmp(arr[key], key, startNode);

				startNode = startNode.nextElementSibling;
			}
		}
	});

	return node;
}



let LAYOUT = document.getElementById('layout');

/**
 * Render
 */

LAYOUT.innerHTML = '';

timeBenchmark('render');
LAYOUT.appendChild(pageView());
timeBenchmark('render');

/**
 * Hydrate
 */
 
clearInterval(timer);
let __tmp = LAYOUT.innerHTML;
LAYOUT.innerHTML = __tmp;

setTimeout(() => {
	timeBenchmark('hydrate');
	pageView(null, LAYOUT.firstChild);
	timeBenchmark('hydrate');
}, 2000);