


export default function loop(condition, fn)
{
	let d = () => {

		let result = [];

		let loop_condition = typeof condition === 'function' ? condition() : condition;

		for(let key in loop_condition)
		{
			let item = loop_condition[key];
			result.push(fn(item, key));
		}
		
		return result;
	}

	d._observable = true;
	// d._node = true;

	return d;
}