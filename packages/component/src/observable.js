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
	// let obs = null;
	// let index = 0;

	// let data = (v) => {
	// 	console.log(seed, v, index)
	// 	if(typeof v === 'undefined') {
	// 		if(index === 0) {
	// 			index++;
	// 			return seed;
	// 		}

	// 		return obs();
	// 	}

	// 	// if(index === 0) {
	// 	// 	index++;
	// 	// 	return v;
	// 	// }

	// 	// if(obs === null) {
	// 	// 	obs = sinuousObservable(v);
	// 	// }
	// }

	let d = sinuousObservable(v);

	
	makeObseervable(d);

	return d;
}