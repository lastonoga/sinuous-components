import { parseOptionValue } from './attrs';
import { _ } from './helpers';

export default class TextNode
{
	constructor(text)
	{
		this.text = text;
	}

	toAST(context = null, hydrate = false)
	{
		let { value, statefull } = parseOptionValue(context, '_t', this.text);
		// console.log(`t(${this.text})`, value, statefull)

		if(hydrate && !statefull) {
			value = _;
		}

		return {
			value,
			statefull,
		}
	}
}