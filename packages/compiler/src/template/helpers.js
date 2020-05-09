import { _ } from '../empty';

export function hasState(context, variable)
{
	// console.log(context, variable.split('.'));
	if(context === null) {
		return null;
	}

	let value = context;
	let var_parts = variable.split('.');

	for (var i = 0; i < var_parts.length; i++) {
		value = value[var_parts[i]];
		if(typeof value === 'undefined') {
			return false;
		}
	}

	if(value._observable) {
		return true;
	}

	return false;	
}

export function getVariable(context, variable)
{
	if(Object.keys(context.computed).includes(variable)) {
		return `_computed.${variable}`;
	}

	if(Object.keys(context.state).includes(variable)) {
		return `_state.${variable}`;
	}

	if(Object.keys(context.data).includes(variable)) {
		return `_data.${variable}`;
	}

	if(Object.keys(context.methods).includes(variable)) {
		return `${variable}.bind(ctx)`;
	}

	if(Object.keys(context.props).includes(variable)) {
		return `_props.${variable}`;
	}

	return false;
}
