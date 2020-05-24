import Instance from '@sinuous/i';

import { hydrate as sh } from '@sinuous/hydration';
import { render as sr } from '@sinuous/render';
import { loader as sl } from '@sinuous/loader';


export function hydrate() {
	return sh.apply(this, arguments);
}

export function render() {
	return sr.apply(this, arguments);
}

export function loader() {
	return sl.apply(this, arguments);
}

export function Sinuous() {
	return new Instance();
}
