// import { register } from './components';
var SinuousComponents = {};

class Sinuous 
{

	constructor()
	{
		this.components = [];
		this.last_hid = 0;
	}

	/**
	 * HID
	 */
	createHID(index)
	{
		this.last_hid = this.last_hid + 1 + index;
		return this.last_hid;
	}

	clearHID()
	{
		this.last_hid = 0;
	}
	/**
	 * Components
	 * @type {[type]}
	 */
	registerComponent(name, component = null)
	{
		if(component == null) {
			component = name;
		}

		name = component.prototype._componentName.toLowerCase();

		this.components[name] = component;
	}

	hasComponent(component)
	{
		return !(typeof this.components[component] === 'undefined');
	}

	getHydrateComponent(component)
	{
		if(!this.hasComponent(component)) {
			throw new Error(`There is no ${ component } component registered`);
		}

		if(this.components[component].prototype._shouldHydarate) {
			return new this.components[component]; 
		} else {
			return null;
		}
	}

	getComponent(component)
	{
		if(!this.hasComponent(component)) {
			throw new Error(`There is no ${ component } component registered`);
		}

		return new this.components[component];
	}

}

export default new Sinuous();