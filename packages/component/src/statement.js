export class Condition
{

	constructor(condition)
	{
		this.condition = condition;
		this.result_1 = null;
		this.result_2 = null;
	}

	setFirstResult(a)
	{
		this.result_1 = a;
	}

	setSecondResult(a)
	{
		this.result_2 = a;
	}

	check()
	{
		return this.condition()
	}

	result()
	{
		return this.condition() ? this.result_1 : this.result_2;
	}

}


export default function statement(condition)
{
	let d = () => {

		if(arguments.length % 2 !== 0) {
			throw new Error('Statement should be odd number');
		}

		let result = [];

		for (var i = 0; i < arguments.length; i += 2) {
			let condition = arguments[i];
			let value = arguments[i + 1];
			let node = document.createComment(`statement comment – ${ i }`);

			if(typeof condition === 'function') {
				if(condition()) {
					node = value;
				}
			} else {
				if(condition) {
					node = value;
				}
			}

			result.push(node);
		}

		// console.log(result)
		
		return result;
	}

	d._observable = true;

	return d;
}