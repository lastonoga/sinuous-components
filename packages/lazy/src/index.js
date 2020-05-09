export function loadComponent(component, callback)
{
	if(component instanceof Promise) {
		component.then((module) => {
			callback(new module.default);
		});
	} else {
		callback(new component);
	}
	
}