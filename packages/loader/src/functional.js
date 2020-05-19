function bindMethodsToContext(methods)
{
	let code = '';
	
	for(let name in methods) {
		code += `ctx.${name} = this.${name};\n`;
	}

	return code;
}


export default function functional(options, block)
{
	let context = block.source.context;

	let imports = [
		`import { styles, classes, dynamic } from '@sinuous/component';`,
	];

	let code = '';
	let main = `
		let config = Object.assign({
			methods: {},
		}, componentConfig);

		let instance = function ${ options.name }(parent, ctx) {
			
		};

		instance._functional = true;
		instance.prototype._componentName = '${ options.name }';
		instance._slotsData = ${ JSON.stringify(block.source.slots) };

		for(let key in config.methods) {
			instance[key] = config.methods[key]
		}
	`	
	
	if(options.isSSR) {
		imports.push(`import { statement, loop, slot, h } from '@sinuous/component';`);

		code += `
			instance.render = function(ctx) {
				return ${ block.source.render };
			}
		`;
	}
	
	if(options.isRuntime) {
		// imports.push(`import { statement as hStatement, loop as hLoop, slot as hSlot } from '@sinuous/hydration';`);

		code += `
			instance.hydrate = function(ctx, h) {
				${ bindMethodsToContext(context.data.methods) }
				return ${ block.source.hydrate };
			}
		`;
	}

	return  `
		${ imports.join('\n') }

		${ main }

		${ code }

		export default instance;
	`;

}