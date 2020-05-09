import { styles, classes,  } from './';

export default function options(context, opts)
{
	let shouldHandle = {
		styles: false,
	};

	if(!opts.staticStyle) {
		opts.staticStyle = {};
	} else {
		shouldHandle.styles = true;
	}

	if(!opts.dynamicStyle) {
		opts.dynamicStyle = [];
	} else {
		shouldHandle.styles = true;
	}

	if(shouldHandle.styles) {
		opts.style = styles.apply(context, [opts.staticStyle].concat(opts.dynamicStyle))
	}

	// console.warn(context, opts)
	/**
	 * Clear
	 */
	if(!shouldHandle.styles) {
		delete opts.staticStyle;
		delete opts.dynamicStyle;
	}

	return opts;
}