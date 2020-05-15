import { parseOptionValue } from './attrs';
import { _ } from '../helpers';

export default class TextNode
{
	constructor(text)
	{
		this.text = text;
	}

	toAST(context = null, hydrate = false, isCallExpression = false)
	{
		let { value, statefull } = parseOptionValue(context, '_t', this.text);
		// console.log(`t(${this.text})`, value, statefull)

		// console.log(value, value.substring(0, 2))
		if(value.substring(0, 2) === '()') {
			value = `c(${value})`;
		}

		if(hydrate && !statefull && !isCallExpression) {
			value = _;
		}

		return {
			value,
			statefull,
		}
	}
}