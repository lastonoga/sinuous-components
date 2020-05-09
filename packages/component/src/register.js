window._SinuousComponents = {};

export default function register(name, component = null)
{
	if(component == null) {
		component = name;
		name = name.name;
	}

	name = name.toLowerCase();

	window._SinuousComponents[name] = component;
}