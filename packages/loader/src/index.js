import loaderUtils from 'loader-utils';
import qs from 'querystring';
import { compiler, _ } from '@siph/compiler';
import path from 'path';
import { parseName } from './name';
import statefullComponent from './statefull';
import functionalComponent from './functional';

function loadComponent(resource, options, block)
{
	let code = `
		import componentConfig from ${ resource };
	`;

	if(block.source.isStatefull) {
		code += statefullComponent(options, block);
	} else {
		code += functionalComponent(options, block);
	}

	return code;
}

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
		console.log(block.source.render);
		console.log('-----------');
		console.log(block.source.hydrate);
		console.log('-----------0');
	// }
	// 
	return loadComponent(stringifyRequest(resourcePath + '?type=script'), {
		name,
		isSSR,
		isRuntime,
	}, block);
}
