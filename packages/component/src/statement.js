import { h } from '@siph/component';

export default function statement()
{
	let d = () => {

		if(arguments.length % 3 !== 0) {
			throw new Error('Statement should be odd number');
		}

		let result = [];
		let foundCondition = false;
		// value
		let childIndex = 0;
		for (var i = 0; i < arguments.length; i += 3) {
			let condition = arguments[i];
			let size = arguments[i + 1];
			let value = arguments[i + 2];
			let node = null;

			condition = typeof condition === 'function' ? condition() : condition;

			if(condition && !foundCondition) {
				foundCondition = true;
				node = value;
			}

			// console.warn(condition, size, value, node);
			// Pass failed stetement condition
			// Normilize index that will be used in replacing placeholder (below)
			if(node === null) {
				for (var j = 0; j < size; j++) {
					result.push(document.createComment(''));
				}
				continue;
			}

			if(!node._observable) {
				node = node(h);
			}
			// replace placeholder with node
			// And correct index
			if(size > 1) {
				for (var j = 0; j < size; j++) {
					result.push(node[j]);
				}
			} else {
				result.push(node);
			}
		}
		
		// console.log(result);

		return result;
	}

	d._observable = true;

	return d;
}
