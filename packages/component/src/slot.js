export default function slot(context, h, name, tag, options, defaultChildren)
{
	// context.__slots
	
	let children = defaultChildren;

	if(context._slots[name]) {
		children = context._slots[name];
	}
	
	if(tag === null) {
		return children;
	}

	return h(tag, options, children);
}