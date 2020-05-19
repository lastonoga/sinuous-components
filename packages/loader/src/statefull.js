export default function statefull(options, block)
{
	let code = `
		import { Basic } from '@sinuous/component';

		let config = Object.assign({
			methods: {},
		}, componentConfig);

		let instance = function ${ options.name }() {
			Basic.call(this);
		};
		
		// inherit Basic
		instance.prototype = Object.create(Basic.prototype);

		// correct the constructor pointer because it points to Basic
		instance.prototype.constructor = instance;
		
		instance.prototype._methods = {};
		
		instance.prototype._componentName = '${ options.name }';
		instance.prototype._shouldHydarate = ${ block.source.shouldHydarate };
		instance.prototype._slotsData = ${ JSON.stringify(block.source.slots) };
		instance.prototype._methods = Object.keys(config.methods);
		instance.prototype._functional = false;
		
		for(let key in config) {
			if(typeof config[key] === 'function') {
				instance.prototype[key] = config[key];
			}
		}
		
		for(let key in config.methods) {
			instance.prototype[key] = config.methods[key]
		}
	`	
	
	if(options.isSSR) {
		code += `
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return ${ block.source.render };
			}
		`;
	}

	if(options.isRuntime) {
		code += `
			instance.prototype.__hydrate = function() {
				let ctx = this;
				return ${ block.source.hydrate };
			}
		`;
	}

	code += `
		export default instance;
	`;

	return code;
}