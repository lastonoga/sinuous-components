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

		for (var i = 0; i < arguments.length; i += 2) {
			let condition = arguments[i];
			let value = arguments[i + 1];

			if(typeof condition === 'function') {
				if(condition()) {
					return value;
				}
			} else {
				if(condition) {
					return value;
				}
			}
		}
		return [
			document.createComment('statement comment')
		];
	}

	d._observable = true;

	return d;
}