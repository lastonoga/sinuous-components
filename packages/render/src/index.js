import { loadComponent } from '@siph/lazy';
import { map } from './map';

function render(component, layout, timeBenchmark = () => {}, callback = null) {

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

export { render, map };
