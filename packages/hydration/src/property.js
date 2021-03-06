import { makeCss, mergeOptions } from '@siph/component';
import { api } from 'sinuous';

export default function hydrateProps(context, el, options)
{

	options = mergeOptions(options);

	if(!options._s) {
		return;
	}

	let subscribers = [];
	let subscribers_first = [];

	function addSubscriber(value, fn, skip = true)
	{
		subscribers.push({
			value,
			fn,
		});

		subscribers_first.push(skip);
	}

	/**
	 * Make styles and classes
	 */
	if(options.style || options.class) {
		// console.error(el);
		let cssOptions = makeCss({}, options);

		if(cssOptions.style) {
			addSubscriber(cssOptions.style, (obj) => {
				for(let name in obj) {
					el.style.setProperty(name, obj[name]);
				}
			});
		}

		if(cssOptions.class) {
			// console.log(cssOptions.class());
			addSubscriber(cssOptions.class, (value) => {
				// console.log(el, value);
				el.className = value;
			});
		}
	}
	
	/**
	 * Make events
	 */
	if(options.on) {
		for(let name in options.on) {
			handleEvent(el, name, options.on[name]);
		}
	}

	/**
	 * Make attributes
	 */
	if(options.attrs) {
		for(let name in options.attrs) {
			addSubscriber(options.attrs[name], (value) => {
				el.setAttribute(name, value);
			})
		}
	}
	/**
	 * Subscribe
	 */
	if(subscribers.length > 0) {
		api.subscribe(() => {
			for (var i = 0; i < subscribers.length; i++) {
				let value = subscribers[i].value();
				
				if(subscribers_first[i]) {
					subscribers_first[i] = false;
					return;
				}

				subscribers[i].fn(value);
			}
		});
	}

}

function handleEvent(el, name, value) {
    name = name.toLowerCase();

    if (value) {
        el.addEventListener(name, eventProxy);
    } else {
        el.removeEventListener(name, eventProxy);
    }

    (el._listeners || (el._listeners = {}))[name] = value;
}

/**
 * Proxy an event to hooked event handlers.
 * @param {Event} e - The event object from the browser.
 * @return {Function}
 */
function eventProxy(e) {
    // eslint-disable-next-line
    return this._listeners[e.type](e);
}
