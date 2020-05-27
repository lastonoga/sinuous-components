import { observable, computed, subscribe, on } from './obs';
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
		if(template.content.children.length === 1) {
			node = template.content.firstChild.cloneNode(true);
		} else {
			node = template.content.cloneNode(true)
		}
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


	subscribe(prop, () => {
		fn(prop());
	}, hydrate);

	
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
 * Multiple if test
 */
const _iftmp$ = document.createElement("template");
_iftmp$.innerHTML = `<div>Div 1</div><div>Div 2</div>`;

const ifView = (context, hydrate = false) => {
	let { props, slots } = parseContext(context);

	let node = getNode(_iftmp$, hydrate);
	let returnNode = node;

	let _el1$ = hydrate ? node : node.firstChild;
	let _el2$ = _el1$.nextSibling;

	valueSubscribe(hydrate, props.hydrated, (v) => {
		_el2$.innerHTML = v;
	});

	returnNode = _el2$;

	return hydrate ? returnNode : node; 
}
/**
 * Button
 */
const _button$ = document.createElement("template");
_button$.innerHTML = `<div class="button"><span>Default text</span></div><!-- a --><hr/>`;

const buttonView = (context, hydrate = false) => {

	let { props, slots } = parseContext(context);

	let node = getNode(_button$, hydrate);
	let returnNode = node;

	let _el1$ = hydrate ? node : node.firstChild;

	// console.warn(node)
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
	let defaultSlot = _el1$.firstChild;
	// Render and hydration text node
	valueSubscribe(hydrate, slots.default, (v) => {
		defaultSlot.innerHTML = v;
	});

	/**
	 * If
	 */
	let _el2$ = _el1$.nextSibling;

		// ifView({}, _el1$)
	if(true) {
		let tagif = ifView({
			props: {
				hydrated: computed([], () => { return hydrate !== false })
			}
		}, hydrate ? _el2$ : false);

		if(hydrate) {
			_el2$ = tagif;
		} else {
			_el2$.replaceWith(tagif);
		}
	}

	// valueSubscribe(hydrate, true, (v) => {
		
	// });
	
	// clear last child of that component
	returnNode = _el2$.nextSibling;

	return hydrate ? returnNode : node;
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

	let refs = {};

	// clearInterval(timer);
	// timer = setInterval(() => {
	// 	s1(s1() + 1);
	// }, 1000)
	// test simple loop
	let loopBinding = node.firstChild;
	subscribe(items, () => {
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
					// default: computed(s1, () => `Button ${ arr[key] } - ${ s1() }`)
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
				// console.log(startNode);
				startNode = _button_tmp(arr[key], key, startNode);
				// console.log(startNode);

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