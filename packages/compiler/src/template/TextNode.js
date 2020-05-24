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
		

		if(hydrate && !statefull && !isCallExpression) {
			value = _;
		}

		if(hydrate) {
			value = `{
				_t: 't',
				t: ${ value }
			}`
		}

		return {
			value,
			statefull,
		}
	}
}
