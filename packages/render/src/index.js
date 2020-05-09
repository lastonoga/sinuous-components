import { loadComponent } from '@sinuous/lazy';


export default function(component, layout, timeBenchmark = () => {}, callback = null) {

    layout.innerHTML = '';

    loadComponent(component, (instance) => {

    	timeBenchmark('Render');

		layout.append(instance.render());
		instance.hook('mounted');

		if(callback) {
			callback(instance);
		}

		timeBenchmark('Render');

		return instance;
	});
}