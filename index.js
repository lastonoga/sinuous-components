import Instance from '@siph/i';

import { hydrate as sh } from '@siph/hydration';
import { render as sr } from '@siph/render';
import { loader as sl } from '@siph/loader';


export function hydrate() {
	return sh.apply(this, arguments);
}

export function render() {
	return sr.apply(this, arguments);
}

export function loader() {
	return sl.apply(this, arguments);
}

export function Siph() {
	return new Instance();
}
