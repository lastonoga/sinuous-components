export default function slot(context, h, options = {}, defaultValue)
{
	let name = options.name || 'default';
	let tag = options.tag || 'div';
	let value = defaultValue;

	if(context._slots[name]) {
		value = context._slots[name];
	}

	return h(tag, {}, value);
}