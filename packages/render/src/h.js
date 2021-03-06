import { h as hs } from 'sinuous';
import { options } from '@siph/component';
import Sinuous from '@siph/i';

function registerChildren(parent, child)
{
	parent.addChildren(child);
	if(child.setParent) {
		child.setParent(parent);
	}
}

export function h(el, opts = {}, children = [])
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
	if(this) {
		this.addChildren(component);
	}

	if(component._functional) {
		let $slots = Array.isArray(opts) ? opts[1].$slots : opts.$slots;
		return component.render({
			options: opts,
			_slots: $slots,
		});
	}

	// if(typeof opts.props !== 'undefined') {
	component.passProps(opts.props);
	// }

	for(let key in opts.$slots) {
		component.passSlots(key, opts.$slots[key]);	
	}

	component.passOptions(opts);

	let node = component.render();

	node.$s = component;

	return node;
}
