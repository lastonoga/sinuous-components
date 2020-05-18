export default function slot(context, h, name, tag, options, defaultChildren)
{
	// context.__slots
	
	let children = defaultChildren;

	if(context._slots[name]) {
		children = context._slots[name];
	}
	
	// console.log(name, tag, options, defaultChildren, children, context._slots)
	if(tag === null) {
		return children;
	}

	return h(tag, options, children);
}