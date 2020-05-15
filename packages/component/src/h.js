import { h as hs } from 'sinuous';
import { observable, computed, subscribe } from 'sinuous/observable';
import { styles, classes, options,  } from './';
import Sinuous from '@sinuous/i';

let HTMLTags = [
	'i', 'div', 'span', 'hr', 'br', 'strong', 'pre'
];


function registerChildren(parent, child)
{
	parent.addChildren(child);
	child.setParent(parent);
}

export default function h(el, opts = {}, children = [])
{
	el = el.toLowerCase();
	// el = computed(() => (typeof el === 'function' ? el : el));

	// console.log('[ FF ]', el, this)
	let dynamicAttrs = false;

	options(this, opts);

	// If HTML tag render
	if(HTMLTags.includes(el)) {
		return hs(el, opts, children);
	}

	let component = Sinuous.getComponent(el);

	// console.log(component)
	
	if(typeof opts.props !== 'undefined') {
		component.passProps(opts.props);
	}

	for(let key in opts.$slots) {
		component.passSlots(key, opts.$slots[key]);	
	}

	registerChildren(this, component);

	return component.render();
}