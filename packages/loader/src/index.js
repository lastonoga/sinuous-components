import loaderUtils from 'loader-utils';
import qs from 'querystring';
import { compiler, _ } from '@sinuous/compiler';
import path from 'path';
import { parseName } from './name';


export default function(source) {
    const loaderContext = this;

    const stringifyRequest = r => loaderUtils.stringifyRequest(loaderContext, r)

    const {
        target,
        request,
        minimize,
        sourceMap,
        rootContext,
        resourcePath,
        resourceQuery
    } = loaderContext

    // parse query
    const rawQuery = resourceQuery.slice(1)
    const inheritQuery = `&${rawQuery}`
    const incomingQuery = qs.parse(rawQuery)

    // parse options
    const options = loaderUtils.getOptions(loaderContext) || {};

    let isSSR = true;
    let isRuntime = true;

    if(typeof incomingQuery.runtimeOnly !== 'undefined') {
    	isSSR = false;
    }

    if(typeof incomingQuery.ssrOnly !== 'undefined') {
    	isRuntime = false;
    }

    let name = parseName(resourcePath, options);

    if(incomingQuery.type === 'script') {
    	let block = compiler({
    		context: this,
    		type: incomingQuery.type,
    		source: source,
    	});

  //   	if(name === 'Test') {
			console.log(block.source);
		// }

    	return block.source || 'export default {}';
    }

    // Apply some transformations to the source...

    let block = compiler({
		context: this,
		type: 'template',
		source: source,
	});

	// if(name === 'Test') {
		
		// console.log(name);
		console.log(block.source.hydrate);
		console.log('-----------');
		// console.log(block.source.hydrate);
		// console.log('-----------');
	// }

	let code = `
		import { Basic } from '@sinuous/component';
		import componentConfig from ${ stringifyRequest(resourcePath + '?type=script') };
		
		let config = Object.assign({
			methods: {},
		}, componentConfig);

		let instance = function ${ name }() {
			Basic.call(this);
		};
		
		// inherit Basic
		instance.prototype = Object.create(Basic.prototype);

		// correct the constructor pointer because it points to Basic
		instance.prototype.constructor = instance;
		
		instance.prototype._methods = {};
		
		instance.prototype._componentName = '${ name }';
		instance.prototype._shouldHydarate = ${ block.source.shouldHydarate };
		instance.prototype._slotsPath = ${ JSON.stringify(block.source.slots) };

		for(let key in config) {
			if(typeof config[key] === 'function') {
				instance.prototype[key] = config[key];
			}
		}
		
		for(let key in config.methods) {
			instance.prototype[key] = config.methods[key]
		}
	`	

	if(isSSR) {
		code += `
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return ${ block.source.render };
			}
		`;
	}

	if(isRuntime) {
		code += `
			instance.prototype.__hydrate = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return ${ block.source.hydrate };
			}
		`;
	}

	// console.log(code)

	code += `
		export default instance;
	`;

	return code;
}