import { h } from '@siph/component';

export default function statement()
{
	let d = () => {

		if(arguments.length % 3 !== 0) {
			throw new Error('Statement should be odd number');
		}

		let result = [];

		// value
		let statementSize = 0;
		for (var i = 0; i < arguments.length; i += 3) {
			let condition = arguments[i];
			let size = arguments[i + 1];
			let value = arguments[i + 2];
			let node = null;

			statementSize += size;

			if(typeof condition === 'function') {
				if(condition()) {
					node = value;
				}
			} else {
				if(condition) {
					node = value;
				}
			}

			// console.warn(i, size, node);
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
					// if(Array.isArray(node)) {
						result.push(node[j]);
					// } else {
					// 	result.push(j == 0 ? node : -1);
					// }
				}
			} else {
				result.push(node);
			}
		}
		
		// console.log(result);
		return result;
		
		return {
			nodes: result,
			size: statementSize,
		};
	}

	d._observable = true;

	return d;
}
