export default function value(value)
{
	if(typeof value === 'function') {
		return value();
	}

	return value;
}