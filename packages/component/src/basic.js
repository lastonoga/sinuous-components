import Sinuous from '@siph/i';
import { _ } from '@siph/compiler/src/empty';

import { observable, computed } from './observable';

import { statement, loop, slot, h } from '@siph/render';

// import { render, hydrate } from './template';
let HID = 0;


var Basic = function () {

	function Basic()
	{
		this._isComponent = true;
		this.hid = ++HID;
		this.$el = null;

		this._props = {};
		this._passedProps = {};

		// Local data
		this._data = this.data();
		// Stateful data
		this._state = this.state(observable);
		// slots
		this._slots = {
			default: [],
		};
		// hooks
		this._hooks = [];

		this._computed = this.computed(computed);
		this._children = [];
		this._el_index = 0;
		this.options = null;

		// this._state = [];
		// this._state = [];
		// this._state = [];
		// this._state = [];

		// Default prop values 
		// this.initProps();

		// this.initTemplate();

		this.setChildren();
		this.setParent();

		this.bindContext();
	}


	Basic.prototype.bindContext = function()
	{
		for(let key in this._computed) {
			this._computed[key] = this._computed[key].bind(this);
		}

		for(let key in this._methods) {
			let name = this._methods[key];
			this[name] = this[name].bind(this);
		}
	}
	/**
	 * Config
	 */

	// Basic.prototype.setMethods = function(methods = {})
	// {
	// 	this._methods = methods;
	// }

	/**
	 * Hierarchy
	 */

	Basic.prototype.setChildren = function(children = [])
	{
		this._children = children;
	}


	Basic.prototype.addChildren = function(child)
	{
		if(child._functional) {
			child = _;
		}

		this._children.push(child);

		if(child.setParent) {
			child.setParent(this);
		}
	}

	Basic.prototype.removeChild = function(index)
	{
		this._children[index].hook('unmounted');
		this._children.splice(index, 1);
	}

	Basic.prototype.setParent = function(parent = null)
	{
		this._parent = parent;
	}

	/**
	 * Props
	 */
	Basic.prototype.props = function()
	{
		return {};
	}


	Basic.prototype.initProps = function()
	{
		for(let key in this._props)
		{
			let prop = this._props[key];
			let value = null;
			let type = null;

			if(typeof prop === 'function') {
				// type
			} else {
				value = prop.default();
			}

			this._data[key] = value;
		}
	}


	Basic.prototype.passSlots = function(name, slots)
	{
		this._slots[name] = slots;
	}

	Basic.prototype.passOptions = function(options)
	{
		this.options = options;
	}

	Basic.prototype.passProps = function(props)
	{
		if(!props) {
			props = {};
		}

		for(let key in this.__props)
		{
			let value = this.__props[key].default();
			if(props[key]) {
				value = props[key];
			}

			this._props[key] = value;
		}

	}

	/**
	 * Local component data
	 */

	Basic.prototype.data = function()
	{
		return {};
	}


	Basic.prototype.computed = function()
	{
		return {};
	}

	/**
	 * Stateful data
	 */

	Basic.prototype.state = function(o)
	{
		return {};
	}

	/**
	 * 1. Create child components (different context)
	 * 2. Pass props
	 * 3. Render
	 */

	Basic.prototype.template = function() {}

	Basic.prototype.childComponents = function() {}

	/**
	 *  Life cycle hooks
	 * @return {[type]} [description]
	 */

	Basic.prototype.hook = function(type = 'mounted')
	{
		if(!this._hooks.includes(type)) {
			this._hooks.push(type);
		}

		if(this[type]) {
			this[type].call(this);
		}

		for (var i = 0; i < this._children.length; i++) {
			if(this._children[i] === _ || this._children[i]._hooks.includes(type)) {
				continue;
			}
			
			if(!this._children[i]._functional) {
				this._children[i].hook(type);
			}
		}
	}


	Basic.prototype.mounted = function() {}

	Basic.prototype.unmounted = function() {}

	/**
	 * Private API for render and hydrate
	 * @type {[type]}
	 */

	Basic.prototype.render = function(ctx = null)
	{
		if(ctx === null) {
			ctx = this;
		}

		h.bind(ctx);

		this.$el = ctx.__render(h.bind(ctx), {
			ctx,
			statement,
			loop,
			slot,
		});

		return this.$el;
	}


	Basic.prototype.hydrate = function(ctx = null)
	{
		if(ctx === null) {
			ctx = this;
		}

		h.bind(ctx);

		return ctx.__hydrate(h);
	}


	Basic.prototype.template = function()
	{
		return '';
	}


	// Basic.prototype.templateBuilder = function(h, opts)
	// {
	// 	return this[`__${ opts.render }`](h, opts);
	// }


	Basic.prototype.component = function()
	{
		return this;
	}

	Basic.prototype.getUID = function(index) {
		return `hydr-${ Sinuous.createHID(index) }`;
	}

	Basic.prototype.__defineGetter__("name", function() { return this.constructor.name; });

	return Basic;
}();

export default Basic;
