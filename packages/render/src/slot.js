export function slot(context, h, name, tag, options, defaultChildren)
{
	// console.log(context, h, name, tag)
	// context.__slots
	
	let children = defaultChildren;

	if(context._slots[name]) {
		children = context._slots[name];
	}
	
	if(tag === null) {
		return children;
	}

	// h.bind(null)

	let render = h(tag, options, children);

	// for (var i = 0; i < render.childNodes.length; i++) {
	// 	console.log(render.childNodes[i], render.childNodes[i].$s);
	// }
	

	return render;
}
