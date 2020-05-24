import { h, hs, api } from 'sinuous';

export default function dynamic(h, tag, opts, children)
{
	return () => {
		let el = tag();
		return h(el, opts, children);
	};

}
