import { subscribe as sinuousSubscribe } from 'sinuous/observable';

export function subscribe(value, fn, skipFirst = true)
{
	if(typeof value !== 'function') {
		return fn(value);
	}

	sinuousSubscribe(() => {
		let v = value();

		// console.log(skipFirst, v, fn)

		if(skipFirst) {
			skipFirst = false;
			return false;
		}



		fn(v);
	});
}
