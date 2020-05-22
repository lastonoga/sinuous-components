import { h as hs } from 'sinuous';
import { observable, computed, subscribe } from 'sinuous/observable';
import { options,  } from './';
import Sinuous from '@sinuous/i';


function registerChildren(parent, child)
{
	parent.addChildren(child);
	if(child.setParent) {
		child.setParent(parent);
	}
}

export default function h(el, opts = {}, children = [])
{
	el = el.toLowerCase();
	// el = computed(() => (typeof el === 'function' ? el : el));

	// console.log('[ FF ]', el, this)
	let dynamicAttrs = false;

	let readyOptions = options(opts);
	// If HTML tag render
	if(!Sinuous.hasComponent(el)) {
		return hs(el, readyOptions, children);
	}

	let component = Sinuous.getComponent(el);

	// console.log(this)
	registerChildren(this, component);

	if(component._functional) {
		return component.render({
			options: opts,
			_slots: readyOptions.$slots,
		});
	}

	// if(typeof opts.props !== 'undefined') {
	component.passProps(opts.props);
	// }

	for(let key in opts.$slots) {
		component.passSlots(key, opts.$slots[key]);	
	}

	component.passOptions(opts);

	return component.render();
}