import Basic from './basic';
import { templateParser } from '~/core/compiler/parser';


function type(name, prototype) {
    var Constructor = new Function("return function " + name + "() { this.extend(); };")();
    return Constructor;
}

export default function create(config)
{
	if(!config.name) {
		throw new Error('Name is required for component');
	}

	let name = config.name;

	let instance = type(config.name)


	// inherit Basic
	instance.prototype = Object.create(Basic.prototype);

	// correct the constructor pointer because it points to Basic
	instance.prototype.constructor = instance;

	instance.prototype.extend = function() {
		Basic.call(this);
	}
	
	for(let key in config) {
		if(typeof config[key] === 'function') {
			instance.prototype[key] = config[key];
		}
	}

	instance.prototype._template = {
		render: templateParser(new instance, instance.prototype.template())['render'],
		hydrate: templateParser(new instance, instance.prototype.template())['hydrate'],
	}

	// console.log(instance.prototype.name, instance.prototype._template);

	return instance;
}