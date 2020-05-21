import { subscribe } from './subscribe';

export function property(el, options)
{
	
	if(options.style) {

	}

	if(options.class) {

	}

	if(options.on) {

	}

	if(options.attrs) {

	}


	return;	

    if (value == null) return;
    if (!name || (name === 'attrs' && (isAttr = true))) {
        for (name in value) {
            property(el, value[name], name, isAttr, isCss);
        }
    } else if (name[0] === 'o' && name[1] === 'n' && !value.$o) {
        // Functions added as event handlers are not executed
        // on render unless they have an observable indicator.
        handleEvent(el, name, value);
    } else if (typeof value === 'function') {
        subscribe(value, (value) => {
        	console.log('set', el, value, name)
            property(el, value, name, isAttr, isCss);
        });
    } else if (isCss) {
        el.style.setProperty(name, value);
    } else if (
        isAttr ||
        name.slice(0, 5) === 'data-' ||
        name.slice(0, 5) === 'aria-'
    ) {
        el.setAttribute(name, value);
    } else if (name === 'style') {
        if (typeof value === 'string') {
            el.style.cssText = value;
        } else {
            property(el, value, null, isAttr, true);
        }
    } else {
        if (name === 'class') name += 'Name';
        el[name] = value;
    }
}

function handleEvent(el, name, value) {
    name = name.slice(2).toLowerCase();

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