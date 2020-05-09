import { compileScript } from "./script";
import { compileTemplate } from "./template";

function compiler(context, { blocks, source, type })
{
	let exec = function () {
		return source;
	}

	if(type === 'script') {
		let s = compileScript(context, source);
		source = s.code == '' ? null : s.code;
	}

	if(type === 'template') {
		source = compileTemplate(context, source, blocks);
	}

	return {
		source,
		type,
		exec,
	}
}

export default function(context, { type, source })
{
	return {
		type,
		source,
		exec(blocks = []) {
			return compiler(context, {
				blocks,
				source: this.source,
				type: this.type,
			})
		}
	}
};