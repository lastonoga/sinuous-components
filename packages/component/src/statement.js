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

		let instance = new Condition(condition);

		let methods = ['setFirstResult', 'setSecondResult'];

		for (var i = 1; i < arguments.length; i++) {
			if(arguments[i] instanceof Condition) {
				if(arguments[i].check()) {
					// Nested condition – should be done
				}
			} else {
				let fn = methods.shift();
				if(typeof fn !== 'undefined') {
					instance[fn](arguments[i]);
				}
			}
		}

		return instance.result();
	}

	d._observable = true;
	d._node = true;

	return d;
}