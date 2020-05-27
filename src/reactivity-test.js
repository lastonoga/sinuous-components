import { observable as oo, computed as cc, subscribe as ss } from 'sinuous/observable';
import timeBenchmark from './time';




function observable(value)
{
	function data(nextValue)
	{
		if (arguments.length === 0) {
			return value;
		}

		value = nextValue;

		data._observers.forEach(observer => { observer._fresh = false; });
		data._observers.forEach(observer => observer());

		return value;
	}

	data._observers = new Set();
	data.$o = true;

	return data;
}


function computed(obs, value)
{
	obs = [].concat(obs);

	for(let ob of obs) {
		ob._observers.add(update);
	}

	function data()
	{
		if(!update._fresh) {
			update();
		}

		return value();
	}

	function update()
	{
		update._fresh = true;

		data._observers.forEach(observer => observer());

		return value;
	}

	data._observers = new Set();
	data.$o = true;

	update();

	return data;
}

function subscribe(obs, value, skip = true)
{
	obs = [].concat(obs);

	for(let ob of obs) {
		if(ob._observers) {
			ob._observers.add(value);
		}

		if(ob._deps) {
			for(let dep of ob._deps) {
				dep.add(value);
			}
		}
	}

	if(!skip) {
		value();
	}
}



// timeBenchmark('manual-react');
// for (var i = 0; i < 10000; i++) {
	// let t = observable(0);
	// let d = observable(1);
	
	// let c = computed([t, d], () => {
	// 	return t() * 10 + d();
	// });

	// let c2 = computed(c, () => {
	// 	return c() * 10;
	// });

	// // subscribe(t, () => {
	// // 	console.log('subscribe T = ', t());
	// // }, false);

	// subscribe(c2, () => {
	// 	console.log('subscribe C2 = ', c2());
	// });

	// t(2);
	// d(2)
// }

// timeBenchmark('manual-react');

// timeBenchmark('auto-react');

// for (var i = 0; i < 10000; i++) {
// 	let t = oo(0);
	
// 	let c = cc(() => {
// 		return t() * 10;
// 	});

// 	// let 
// 	ss(() => {
// 		// console.log('subscribe T = ', t());
// 	})
// }

// timeBenchmark('auto-react');

// t(1);

// subscribe([c, d], () => {
// 	console.log('subscribe C = ', c(), d());
// })

// t(2);

// setTimeout(() => {
// 	t(30);
// }, 500)