import { observable, html } from 'sinuous';
import { hydrate, dhtml, _ } from 'sinuous/hydrate';
import timeBenchmark from './time';


const counter = observable(0);
let list = [];

for (var i = 0; i < 1000; i++) {
	list.push(i);
}

const view = () => html`
	<div class="sinuous">
		${() =>
		list.map(
			i =>
			html`<div class="button">Button ${i}</div>`
		)}
	</div>
`;

let LAYOUT = document.getElementById('layout');

// LAYOUT.innerHTML = '';
// timeBenchmark('render');
// document.body.append(view());
// timeBenchmark('render');

timeBenchmark('hydration');
hydrate(dhtml`
	<div class="sinuous">
		${() =>
		list.map(
			i =>
			dhtml`<div class="button">${_}</div>`
		)}
	</div>
`);
timeBenchmark('hydration');
