import { observable as sinuousObservable, computed as sinuousComputed } from 'sinuous/observable';

export function makeObseervable(fn)
{
	fn._observable = true;
	return fn;
}

export function computed(v, binding = false) {

	let d;
	
	if(binding) {
		d = sinuousComputed(v.bind(this));
	} else {
		d = sinuousComputed(v);
	}

	makeObseervable(d);

	return d;
}

export function observable(v, binding = false)
{
	let d = sinuousObservable(v);

	
	makeObseervable(d);

	return d;
}