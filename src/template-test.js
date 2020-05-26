import { observable, computed, subscribe } from 'sinuous/observable';
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

	// Skip first hydration
	subscribe(() => {
		let v = prop();

		if(first) {
			first = false;
			return;
		}

		// console.log('do', v);

		fn(v);
	});
}


/**
 * Button
 */
const _button$ = document.createElement("template");
_button$.innerHTML = `<div class="button"><span>Default text</span></div>`;

const buttonView = (context, hydrate = false) => {

	let { props, slots } = parseContext(context);

	let node = getNode(_button$, hydrate);

	let defaultSlot = node.firstChild;

	valueSubscribe(hydrate, slots.default, (v) => {
		defaultSlot.innerHTML = v;
	})

	node.onclick = function() {
		alert(1);
	}

	return node;
};

/**
 * Page
 */

const _page$ = document.createElement("template");
_page$.innerHTML = `<div><span>v-for-loading</span></div>`;

const pageView = (context, hydrate = false) => {
	
	let { props, slots } = parseContext(context);

	let node = getNode(_page$, hydrate);
	let items = observable(Array.from({ length: 10000 }, (_, i) => i));
	let s1 = observable(1);

	// setInterval(() => {
	// 	s1(s1() + 1);
	// }, 500)
	// test simple loop
	let loopBinding = node.firstChild;
	subscribe(() => {
		let buttons = document.createDocumentFragment();
		let arr = items();

		// Loop render function
		if(hydrate === false) {
			for(let key in arr) {
				let _button_tmp = buttonView({
					slots: {
						default: `Button ${ arr[key] }`,
						// default2: () => `Button ${ arr[key] } - ${ s1() }`
					}
				});

				
				buttons.appendChild(_button_tmp);
			}

			loopBinding.replaceWith(buttons);
		} else {
			// Loop hydration function
			let startNode = loopBinding;
			for(let key in arr) {
				if(startNode === null) {
					break;
				}

				let _button_tmp = buttonView({
					slots: {
						default: `Button ${ arr[key] }`,
						// default2: () => `Button ${ arr[key] } - ${ s1() }`
					}
				}, startNode);

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

// LAYOUT.innerHTML = '';

timeBenchmark('render');
LAYOUT.appendChild(pageView());
timeBenchmark('render');

/**
 * Hydrate
 */
setTimeout(() => {
	timeBenchmark('hydrate');
	pageView(null, LAYOUT.firstChild);
	timeBenchmark('hydrate');
}, 2000);