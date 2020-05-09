


export default function loop(condition, args = [], component)
{
	let d = () => {

		let result = [];

		let loop_item = args[0] || 'item';
		let loop_key = args[1] || 'index';

		let loop_condition = typeof condition === 'function' ? condition() : condition;

		for(let key in loop_condition)
		{
			let item = loop_condition[key];
			result.push(component({
				[loop_item]: item,
				[loop_key]: key,
			}))
		}
		
		return result;
	}

	d._observable = true;
	d._node = true;

	return d;
}