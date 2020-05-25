import { Basic } from '@siph/component';

export function getInstance(component)
{
	if(component instanceof Basic) {
		return component;
	} else {
		return new component;
	}
}

export function loadComponent(component, callback)
{
	if(component instanceof Promise) {
		component.then((module) => {
			callback(
				getInstance(module.default)
			);
		});
	} else {
		callback(
			getInstance(new component)
		);
	}
	
}
