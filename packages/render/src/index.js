import { loadComponent } from '@siph/lazy';
import { map as loop } from './map';
import { slot } from './slot';
import { statement } from './statement';
import { h } from './h';

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

export { render, loop, statement, slot, h };
