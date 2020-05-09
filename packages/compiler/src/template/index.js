import { getReactiveVariables } from "../script";
import generate from './generate';

export function compileTemplate(context, html, blocks)
{
	let script = blocks.script || { source: '' };

	context = getReactiveVariables(context, script.source);
	
	return generate(context, html);
}