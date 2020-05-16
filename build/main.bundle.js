/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/sbutton.sin":
/*!********************************!*\
  !*** ./components/sbutton.sin ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sinuous_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sbutton_sin_type_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sbutton.sin?type=script */ "./components/sbutton.sin?type=script");

		
		
		
		let config = Object.assign({
			methods: {},
		}, _sbutton_sin_type_script__WEBPACK_IMPORTED_MODULE_1__["default"]);

		let instance = function Sbutton() {
			_sinuous_component__WEBPACK_IMPORTED_MODULE_0__["Basic"].call(this);
		};
		
		// inherit Basic
		instance.prototype = Object.create(_sinuous_component__WEBPACK_IMPORTED_MODULE_0__["Basic"].prototype);

		// correct the constructor pointer because it points to Basic
		instance.prototype.constructor = instance;
		
		instance.prototype._methods = {};
		
		instance.prototype._componentName = 'Sbutton';
		instance.prototype._shouldHydarate = false;
		instance.prototype._slotsPath = {"default":[0,0]};

		for(let key in config) {
			if(typeof config[key] === 'function') {
				instance.prototype[key] = config[key];
			}
		}
		
		for(let key in config.methods) {
			instance.prototype[key] = config.methods[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h("div", { staticClass: "button" }, [
  slot(ctx, h, "default", "span", {}, [`Default button text`]),
]);
;
			}
		
			instance.prototype.__hydrate = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return -1;
			}
		
		/* harmony default export */ __webpack_exports__["default"] = (instance);
	

/***/ }),

/***/ "./components/sbutton.sin?type=script":
/*!********************************************!*\
  !*** ./components/sbutton.sin?type=script ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./packages/compiler/src/empty.js":
/*!****************************************!*\
  !*** ./packages/compiler/src/empty.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ = void 0;

var _ = -1;

exports._ = _;

/***/ }),

/***/ "./packages/component/dist/attrs.js":
/*!******************************************!*\
  !*** ./packages/component/dist/attrs.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleClassObject = handleClassObject;
exports.classes = classes;
exports.handleStylesObject = handleStylesObject;
exports.styles = styles;

var _value = _interopRequireDefault(__webpack_require__(/*! ./value */ "./packages/component/dist/value.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function camelToProp(s) {
  return s.replace(/\.?([A-Z]+)/g, function (x, y) {
    return "-" + y.toLowerCase();
  }).replace(/^-/, '');
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function handleClassObject(obj) {
  var classes = [];

  for (var key in obj) {
    if ((0, _value.default)(obj[key])) {
      classes.push(key);
    }
  }

  return classes;
}

function classes(staticClasses, dynamic) {
  var _arguments = arguments;

  if (staticClasses === void 0) {
    staticClasses = [];
  }

  if (dynamic === void 0) {
    dynamic = {};
  }

  return function () {
    var classes = [];

    for (var i = 0; i < _arguments.length; i++) {
      var arg = _arguments[i];

      if (Array.isArray(arg)) {
        for (var j = 0; j < arg.length; j++) {
          classes.push((0, _value.default)(arg[j]));
        }
      } else if (typeof arg === 'object') {
        classes = classes.concat(handleClassObject(arg));
      } else if (typeof arg === 'function') {
        classes = classes.concat(handleClassObject((0, _value.default)(arg)));
      } else {
        classes.push(arg);
      }
    }

    classes = classes.filter(function (v, i, a) {
      return a.indexOf(v) === i;
    });
    return classes.join(' ');
  };
}

function handleStylesObject(styles, obj) {
  for (var key in obj) {
    var val = (0, _value.default)(obj[key]);

    if (val !== null) {
      styles[camelToProp(key)] = val;
    }
  }

  return styles;
}

function styles() {
  var _arguments2 = arguments;
  return function () {
    var styles = {};

    for (var i = 0; i < _arguments2.length; i++) {
      if (typeof _arguments2[i] === 'object') {
        handleStylesObject(styles, _arguments2[i]);
      } else {
        handleStylesObject(styles, (0, _value.default)(_arguments2[i]));
      }
    }

    return styles;
  };
}

/***/ }),

/***/ "./packages/component/dist/basic.js":
/*!******************************************!*\
  !*** ./packages/component/dist/basic.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _i = _interopRequireDefault(__webpack_require__(/*! @sinuous/i */ "./packages/i/dist/index.js"));

var _hydrate = __webpack_require__(/*! sinuous/hydrate */ "./node_modules/sinuous/module/hydrate.js");

var _observable = __webpack_require__(/*! ./observable */ "./packages/component/dist/observable.js");

var _hydration = __webpack_require__(/*! @sinuous/hydration */ "./packages/hydration/dist/index.js");

var _index = __webpack_require__(/*! ./index */ "./packages/component/dist/index.js");

var _ = __webpack_require__(/*! ./ */ "./packages/component/dist/index.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // import { render, hydrate } from './template';


var HID = 0;

var Basic = function () {
  function Basic() {
    this._isComponent = true;
    this.hid = ++HID;
    this._props = this.props();
    this._passedProps = {}; // Local data

    this._data = this.data(); // Stateful data

    this._state = this.state(_observable.observable);
    this._slots = {
      default: []
    };
    this._computed = this.computed(_observable.computed);
    this._children = []; // this._state = [];
    // this._state = [];
    // this._state = [];
    // this._state = [];
    // Default prop values 

    this.initProps(); // this.initTemplate();

    this.setChildren();
    this.setParent();
    this.bindContext();
  }

  Basic.prototype.bindContext = function () {
    for (var key in this._computed) {
      this._computed[key] = this._computed[key].bind(this);
    }
  };
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


  Basic.prototype.setChildren = function (children) {
    if (children === void 0) {
      children = [];
    }

    this._children = children;
  };

  Basic.prototype.addChildren = function (child) {
    this._children.push(child);
  };

  Basic.prototype.setParent = function (parent) {
    if (parent === void 0) {
      parent = null;
    }

    this._parent = parent;
  };
  /**
   * Props
   */


  Basic.prototype.props = function () {
    return {};
  };

  Basic.prototype.initProps = function () {
    for (var key in this._props) {
      var prop = this._props[key];
      var value = null;
      var type = null;

      if (typeof prop === 'function') {// type
      } else {
        value = prop.default();
      }

      this._data[key] = value;
    }
  };

  Basic.prototype.passSlots = function (name, slots) {
    this._slots[name] = slots;
  };

  Basic.prototype.passProps = function (props) {
    // if(typeof this._passedProps[component.hid] === 'undefined') {
    // 	this._passedProps[component.hid] = {};
    // }
    for (var key in props) {
      if (props[key]._observable) {
        this._isStateful = true;
      }

      this._data[key] = props[key]; // if(typeof this._data[key] !== 'undefined') {
      // 	throw new Error(`[Sinuous] Component ${ this.name } already has ${ key } property`)
      // } else {
      // 	this._data[key] = props[key];
      // }
    }
  };
  /**
   * Client side handler after SSR (hydration)
   */


  Basic.prototype.hasStatefullData = function () {
    var stateful = false;

    for (var hid in this._passedProps) {
      for (var key in this._passedProps[hid]) {
        if (this._passedProps[hid][key]) {
          stateful = true;
          break;
        }
      }

      if (stateful) {
        break;
      }
    }

    return stateful && this._isStateful;
  };

  Basic.prototype.hasStatelessData = function () {
    return Object.keys(this._data).length > 0;
  };
  /**
   * Local component data
   */


  Basic.prototype.data = function () {
    return {};
  };

  Basic.prototype.computed = function () {
    return {};
  };
  /**
   * Stateful data
   */


  Basic.prototype.state = function (o) {
    return {};
  };
  /**
   * 1. Create child components (different context)
   * 2. Pass props
   * 3. Render
   */


  Basic.prototype.template = function () {};

  Basic.prototype.childComponents = function () {};
  /**
   *  Life cycle hooks
   * @return {[type]} [description]
   */


  Basic.prototype.hook = function (type) {
    if (type === void 0) {
      type = 'mounted';
    }

    if (this[type]) {
      this[type].call(this);
    }

    for (var i = 0; i < this._children.length; i++) {
      this._children[i].hook(type);
    }
  };

  Basic.prototype.mounted = function () {};

  Basic.prototype.unmounted = function () {};
  /**
   * Private API for render and hydrate
   * @type {[type]}
   */


  Basic.prototype.render = function (ctx) {
    if (ctx === void 0) {
      ctx = null;
    }

    if (ctx === null) {
      ctx = this;
    }

    _.h.bind(ctx);

    return ctx.__render(_.h.bind(ctx), {
      ctx: ctx,
      statement: _index.statement,
      loop: _index.loop,
      slot: _index.slot,
      d: _index.dynamic,
      c: _observable.computed
    });
  };

  Basic.prototype.hydrate = function (ctx, compiler) {
    if (ctx === void 0) {
      ctx = null;
    }

    if (compiler === void 0) {
      compiler = null;
    }

    if (ctx === null) {
      ctx = this;
    }

    return ctx.__hydrate(compiler, {
      ctx: ctx,
      statement: _hydration.statement,
      slot: _hydration.slot,
      loop: _hydration.loop,
      d: _index.dynamic,
      c: _observable.computed
    });
  };

  Basic.prototype.template = function () {
    return '';
  }; // Basic.prototype.templateBuilder = function(h, opts)
  // {
  // 	return this[`__${ opts.render }`](h, opts);
  // }


  Basic.prototype.component = function () {
    return this;
  };

  Basic.prototype.getUID = function (index) {
    return "hydr-" + _i.default.createHID(index);
  };

  Basic.prototype.__defineGetter__("name", function () {
    return this.constructor.name;
  });

  return Basic;
}();

var _default = Basic;
exports.default = _default;

/***/ }),

/***/ "./packages/component/dist/dynamic.js":
/*!********************************************!*\
  !*** ./packages/component/dist/dynamic.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dynamic;

var _sinuous = __webpack_require__(/*! sinuous */ "./node_modules/sinuous/module/sinuous.js");

function dynamic(h, tag, opts, children) {
  return function () {
    var el = tag();
    return h(el, opts, children);
  };
}

/***/ }),

/***/ "./packages/component/dist/h.js":
/*!**************************************!*\
  !*** ./packages/component/dist/h.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = h;

var _sinuous = __webpack_require__(/*! sinuous */ "./node_modules/sinuous/module/sinuous.js");

var _observable = __webpack_require__(/*! sinuous/observable */ "./node_modules/sinuous/module/observable.js");

var _ = __webpack_require__(/*! ./ */ "./packages/component/dist/index.js");

var _i = _interopRequireDefault(__webpack_require__(/*! @sinuous/i */ "./packages/i/dist/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var HTMLTags = ['i', 'div', 'span', 'hr', 'br', 'strong', 'pre'];

function registerChildren(parent, child) {
  parent.addChildren(child);
  child.setParent(parent);
}

function h(el, opts, children) {
  if (opts === void 0) {
    opts = {};
  }

  if (children === void 0) {
    children = [];
  }

  el = el.toLowerCase(); // el = computed(() => (typeof el === 'function' ? el : el));
  // console.log('[ FF ]', el, this)

  var dynamicAttrs = false;
  (0, _.options)(this, opts); // If HTML tag render

  if (HTMLTags.includes(el)) {
    return (0, _sinuous.h)(el, opts, children);
  }

  var component = _i.default.getComponent(el); // console.log(component)


  if (typeof opts.props !== 'undefined') {
    component.passProps(opts.props);
  }

  for (var key in opts.$slots) {
    component.passSlots(key, opts.$slots[key]);
  }

  registerChildren(this, component);
  return component.render();
}

/***/ }),

/***/ "./packages/component/dist/index.js":
/*!******************************************!*\
  !*** ./packages/component/dist/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "styles", {
  enumerable: true,
  get: function get() {
    return _attrs.styles;
  }
});
Object.defineProperty(exports, "classes", {
  enumerable: true,
  get: function get() {
    return _attrs.classes;
  }
});
Object.defineProperty(exports, "value", {
  enumerable: true,
  get: function get() {
    return _value.default;
  }
});
Object.defineProperty(exports, "options", {
  enumerable: true,
  get: function get() {
    return _options.default;
  }
});
Object.defineProperty(exports, "register", {
  enumerable: true,
  get: function get() {
    return _register.default;
  }
});
Object.defineProperty(exports, "statement", {
  enumerable: true,
  get: function get() {
    return _statement.default;
  }
});
Object.defineProperty(exports, "slot", {
  enumerable: true,
  get: function get() {
    return _slot.default;
  }
});
Object.defineProperty(exports, "loop", {
  enumerable: true,
  get: function get() {
    return _loop.default;
  }
});
Object.defineProperty(exports, "dynamic", {
  enumerable: true,
  get: function get() {
    return _dynamic.default;
  }
});
Object.defineProperty(exports, "h", {
  enumerable: true,
  get: function get() {
    return _h.default;
  }
});
Object.defineProperty(exports, "Basic", {
  enumerable: true,
  get: function get() {
    return _basic.default;
  }
});

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/component/dist/attrs.js");

var _value = _interopRequireDefault(__webpack_require__(/*! ./value */ "./packages/component/dist/value.js"));

var _options = _interopRequireDefault(__webpack_require__(/*! ./options */ "./packages/component/dist/options.js"));

var _register = _interopRequireDefault(__webpack_require__(/*! ./register */ "./packages/component/dist/register.js"));

var _statement = _interopRequireDefault(__webpack_require__(/*! ./statement */ "./packages/component/dist/statement.js"));

var _slot = _interopRequireDefault(__webpack_require__(/*! ./slot */ "./packages/component/dist/slot.js"));

var _loop = _interopRequireDefault(__webpack_require__(/*! ./loop */ "./packages/component/dist/loop.js"));

var _dynamic = _interopRequireDefault(__webpack_require__(/*! ./dynamic */ "./packages/component/dist/dynamic.js"));

var _h = _interopRequireDefault(__webpack_require__(/*! ./h */ "./packages/component/dist/h.js"));

var _basic = _interopRequireDefault(__webpack_require__(/*! ./basic */ "./packages/component/dist/basic.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ "./packages/component/dist/loop.js":
/*!*****************************************!*\
  !*** ./packages/component/dist/loop.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loop;

function loop(condition, fn) {
  var d = function d() {
    var result = [];
    var loop_condition = typeof condition === 'function' ? condition() : condition;

    for (var key in loop_condition) {
      var item = loop_condition[key];
      result.push(fn(item, key));
    }

    return result;
  };

  d._observable = true; // d._node = true;

  return d;
}

/***/ }),

/***/ "./packages/component/dist/observable.js":
/*!***********************************************!*\
  !*** ./packages/component/dist/observable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeObseervable = makeObseervable;
exports.computed = computed;
exports.observable = observable;

var _observable = __webpack_require__(/*! sinuous/observable */ "./node_modules/sinuous/module/observable.js");

function makeObseervable(fn) {
  fn._observable = true;
  return fn;
}

function computed(v, binding) {
  if (binding === void 0) {
    binding = false;
  }

  var d;

  if (binding) {
    d = (0, _observable.computed)(v.bind(this));
  } else {
    d = (0, _observable.computed)(v);
  }

  makeObseervable(d);
  return d;
}

function observable(v, binding) {
  if (binding === void 0) {
    binding = false;
  }

  var d = (0, _observable.observable)(v);
  makeObseervable(d);
  return d;
}

/***/ }),

/***/ "./packages/component/dist/options.js":
/*!********************************************!*\
  !*** ./packages/component/dist/options.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = options;

var _ = __webpack_require__(/*! ./ */ "./packages/component/dist/index.js");

function options(context, opts) {
  var shouldHandle = {
    styles: false
  };

  if (!opts.staticStyle) {
    opts.staticStyle = {};
  } else {
    shouldHandle.styles = true;
  }

  if (!opts.dynamicStyle) {
    opts.dynamicStyle = [];
  } else {
    shouldHandle.styles = true;
  }

  if (shouldHandle.styles) {
    opts.style = _.styles.apply(context, [opts.staticStyle].concat(opts.dynamicStyle));
  } // console.warn(context, opts)

  /**
   * Clear
   */


  if (!shouldHandle.styles) {
    delete opts.staticStyle;
    delete opts.dynamicStyle;
  }

  return opts;
}

/***/ }),

/***/ "./packages/component/dist/register.js":
/*!*********************************************!*\
  !*** ./packages/component/dist/register.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;
window._SinuousComponents = {};

function register(name, component) {
  if (component === void 0) {
    component = null;
  }

  if (component == null) {
    component = name;
    name = name.name;
  }

  name = name.toLowerCase();
  window._SinuousComponents[name] = component;
}

/***/ }),

/***/ "./packages/component/dist/slot.js":
/*!*****************************************!*\
  !*** ./packages/component/dist/slot.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = slot;

function slot(context, h, name, tag, options, defaultChildren) {
  // context.__slots
  var children = defaultChildren;

  if (context._slots[name]) {
    children = context._slots[name];
  }

  if (tag === null) {
    return children;
  }

  return h(tag, options, children);
}

/***/ }),

/***/ "./packages/component/dist/statement.js":
/*!**********************************************!*\
  !*** ./packages/component/dist/statement.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = statement;

var _component = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");

function statement() {
  var _arguments = arguments;

  var d = function d() {
    if (_arguments.length % 3 !== 0) {
      throw new Error('Statement should be odd number');
    }

    var result = []; // value

    var childIndex = 0;

    for (var i = 0; i < _arguments.length; i += 3) {
      var condition = _arguments[i];
      var size = _arguments[i + 1];
      var value = _arguments[i + 2];
      var node = null;

      if (typeof condition === 'function') {
        if (condition()) {
          node = value;
        }
      } else {
        if (condition) {
          node = value;
        }
      } // console.warn(i, size, node);
      // Pass failed stetement condition
      // Normilize index that will be used in replacing placeholder (below)


      if (node === null) {
        for (var j = 0; j < size; j++) {
          result.push(document.createComment(''));
        }

        continue;
      }

      if (!node._observable) {
        node = node(_component.h);
      } // replace placeholder with node
      // And correct index


      if (size > 1) {
        for (var j = 0; j < size; j++) {
          result.push(node[j]);
        }
      } else {
        result.push(node);
      }
    } // console.log(result);


    return result;
  };

  d._observable = true;
  return d;
}

/***/ }),

/***/ "./packages/component/dist/value.js":
/*!******************************************!*\
  !*** ./packages/component/dist/value.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = value;

function value(value) {
  if (typeof value === 'function') {
    return value();
  }

  return value;
}

/***/ }),

/***/ "./packages/hydration/dist/hydration.js":
/*!**********************************************!*\
  !*** ./packages/hydration/dist/hydration.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compiler = compiler;
exports.default = initHydration;

var _sinuous = __webpack_require__(/*! sinuous */ "./node_modules/sinuous/module/sinuous.js");

var _empty = __webpack_require__(/*! @sinuous/compiler/src/empty */ "./packages/compiler/src/empty.js");

var _i = _interopRequireDefault(__webpack_require__(/*! @sinuous/i */ "./packages/i/dist/index.js"));

var _component = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");

var _lazy = __webpack_require__(/*! @sinuous/lazy */ "./packages/lazy/dist/index.js");

var _observable = __webpack_require__(/*! sinuous/observable */ "./node_modules/sinuous/module/observable.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var OBSERVER;
var STORAGE = {};

function hydrateProps(el, opts) {
  if (!opts._s) {
    return;
  }

  _sinuous.api.property(el, opts, null);
}

function hydrateTag(parent, children, currentIndex, value) {
  var el = children[currentIndex];
  var nodes = value();

  if (Array.isArray(nodes)) {
    for (var i = 0; i < nodes.length; i++) {
      var child = nodes[i];

      if (typeof child === 'function') {
        child = child();
      } // console.log(parent,  child.size)
      // api.insert(parent, child, children[currentIndex + i]);
      // parent.replaceChild(child, children[currentIndex + i])
      // children[currentIndex + i].replaceWith(child);

    }
  } else {
    _sinuous.api.insert(el, nodes, null);
  }
}

function hydrateChildren(node, children) {
  var bindChildren = [];

  if (node !== null) {
    bindChildren = filterChildNodes(node);
  }

  for (var i = 0; i < children.length; i++) {
    if (children[i] === _empty._) {
      continue;
    } // console.error(bindChildren[i], children[i]);


    hydrateTag(node, bindChildren, i, children[i]);
  }
}

function getSlotNode(el, path) {
  for (var i = 0; i < path.length; i++) {
    el = el.childNodes[path[i]];
  }

  return el;
}

function hydrateSlots(component, el, opts, slots) {
  if (opts === void 0) {
    opts = {};
  }

  if (!opts['id']) {
    return;
  }

  if (opts['id'] === 'hydr-13') {
    opts['id'] = 'hydr-6';
  }

  if (opts['id'] === 'hydr-30') {
    opts['id'] = 'hydr-21';
  }

  var bindNode = document.getElementById("" + opts['id']);
  console.log(bindNode, opts);
  var slotNodes = {};

  for (var key in slots) {
    if (component._slotsPath[key]) {
      var node = getSlotNode(bindNode, component._slotsPath[key]);
      slotNodes[key] = node;
    } else {
      throw new Error("There is no " + key + " slot namespace defined");
    }
  }

  _sinuous.api.subscribe(function () {
    for (var _key in slots) {
      var _node = slotNodes[_key];
      var childrenSlots = slots[_key];

      if (_node.childNodes.length === 0) {
        _node = [_node];
      } else {
        _node = _node.childNodes;
      }

      if (childrenSlots.length > _node.length) {
        throw new Error('Slot hydration length mismatch');
      }

      for (var i = 0; i < childrenSlots.length; i++) {
        _sinuous.api.insert(_node[i], childrenSlots[i](), null);
      }
    }
  });
}

function hydrate(el, opts, children) {
  if (opts === void 0) {
    opts = {};
  }

  if (children === void 0) {
    children = [];
  } // console.log(this, el, opts, children)


  if (!opts['id']) {
    return;
  }

  var bindNode = document.getElementById("" + opts['id']);

  _sinuous.api.subscribe(function () {
    hydrateProps(bindNode, opts);
    hydrateChildren(bindNode, children);
  });
}

function registerChildren(parent, child) {
  parent.addChildren(child);
  child.setParent(parent);
}

function compiler(el, opts, children) {
  if (opts === void 0) {
    opts = {};
  }

  if (children === void 0) {
    children = [];
  }

  (0, _component.options)(this, opts);

  if (!_i.default.hasComponent(el)) {
    hydrate.call(this, el, opts, children);
    return _empty._;
  }

  var component = _i.default.getHydrateComponent(el, opts); // console.log(component, el, opts)


  if (component === null) {
    return _empty._;
  }

  if (typeof opts.props !== 'undefined') {
    component.passProps(opts.props);
  }

  if (opts.$slots) {
    hydrateSlots(component, el, opts, opts.$slots);
  } // component.passSlots('default', children);


  registerChildren(this, component);
  return initComponent(component);
}

function initComponent(component) {
  component.hydrate(component, compiler.bind(component));
  return _empty._;
}

function IntersectionObserverCallback(entries, observer) {
  entries.forEach(function (entry) {
    var id = entry.target.id; // console.log(id);

    _sinuous.api.subscribe(function () {
      hydrateProps(entry.target, STORAGE[id].opts);
      hydrateChildren(entry.target, STORAGE[id].children);
    });
  });
}

function initHydration(component, hydrationRoot, timeBenchmark, callback) {
  if (timeBenchmark === void 0) {
    timeBenchmark = function timeBenchmark() {};
  }

  if (callback === void 0) {
    callback = null;
  } // OBSERVER = new IntersectionObserver(IntersectionObserverCallback, {
  // 	root: hydrationRoot,
  // 	rootMargin: '0px',
  // 	threshold: 1.0
  // });
  // requestIdleCallback(() => {
  // 	OBSERVER.observe(bindNode);
  // 	STORAGE[opts['id']] = {
  // 		opts,
  // 		children,
  // 	}
  // });


  (0, _lazy.loadComponent)(component, function (instance) {
    timeBenchmark('Hydration');
    var tree = [instance];

    _i.default.clearHID();

    var connectedNode = filterChildNodes(hydrationRoot);

    for (var i = 0; i < tree.length; i++) {
      initComponent(tree[i], connectedNode[i]);
    } // console.log(instance);


    instance.hook('mounted');

    if (callback) {
      callback(instance);
    }

    timeBenchmark('Hydration');
    return instance;
  });
}
/**
 * Filter out whitespace text nodes unless it has a noskip indicator.
 *
 * @param  {Node} parent
 * @return {Array}
 */


function filterChildNodes(parent) {
  return parent.childNodes; // console.warn(parent, parent.childNodes);

  return Array.from(parent.childNodes).filter(function (el) {
    return el.nodeType !== 3 || el.data.trim() || el._noskip;
  });
}

/***/ }),

/***/ "./packages/hydration/dist/index.js":
/*!******************************************!*\
  !*** ./packages/hydration/dist/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "hydrate", {
  enumerable: true,
  get: function get() {
    return _hydration.default;
  }
});
Object.defineProperty(exports, "statement", {
  enumerable: true,
  get: function get() {
    return _statement.default;
  }
});
Object.defineProperty(exports, "loop", {
  enumerable: true,
  get: function get() {
    return _loop.default;
  }
});
Object.defineProperty(exports, "slot", {
  enumerable: true,
  get: function get() {
    return _slot.default;
  }
});

var _hydration = _interopRequireDefault(__webpack_require__(/*! ./hydration */ "./packages/hydration/dist/hydration.js"));

var _statement = _interopRequireDefault(__webpack_require__(/*! ./statement */ "./packages/hydration/dist/statement.js"));

var _loop = _interopRequireDefault(__webpack_require__(/*! ./loop */ "./packages/hydration/dist/loop.js"));

var _slot = _interopRequireDefault(__webpack_require__(/*! ./slot */ "./packages/hydration/dist/slot.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ "./packages/hydration/dist/loop.js":
/*!*****************************************!*\
  !*** ./packages/hydration/dist/loop.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loop;

function loop(condition, fn) {
  var d = function d() {
    var result = [];
    var loop_condition = typeof condition === 'function' ? condition() : condition;

    for (var key in loop_condition) {
      var item = loop_condition[key];
      result.push(fn(item, key));
    }

    return result;
  };

  d._observable = true; // d._node = true;

  return d;
}

/***/ }),

/***/ "./packages/hydration/dist/slot.js":
/*!*****************************************!*\
  !*** ./packages/hydration/dist/slot.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = slot;

function slot() {}

/***/ }),

/***/ "./packages/hydration/dist/statement.js":
/*!**********************************************!*\
  !*** ./packages/hydration/dist/statement.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = statement;

var _component = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");

function statement() {
  var _arguments = arguments;

  var d = function d() {
    if (_arguments.length % 3 !== 0) {
      throw new Error('Statement should be odd number');
    }

    var result = []; // value

    var statementSize = 0;

    for (var i = 0; i < _arguments.length; i += 3) {
      var condition = _arguments[i];
      var size = _arguments[i + 1];
      var value = _arguments[i + 2];
      var node = null;
      statementSize += size;

      if (typeof condition === 'function') {
        if (condition()) {
          node = value;
        }
      } else {
        if (condition) {
          node = value;
        }
      } // console.warn(i, size, node);
      // Pass failed stetement condition
      // Normilize index that will be used in replacing placeholder (below)


      if (node === null) {
        for (var j = 0; j < size; j++) {
          result.push(document.createComment(''));
        }

        continue;
      }

      if (!node._observable) {
        node = node(_component.h);
      } // replace placeholder with node
      // And correct index


      if (size > 1) {
        for (var j = 0; j < size; j++) {
          // if(Array.isArray(node)) {
          result.push(node[j]); // } else {
          // 	result.push(j == 0 ? node : -1);
          // }
        }
      } else {
        result.push(node);
      }
    } // console.log(result);


    return result;
    return {
      nodes: result,
      size: statementSize
    };
  };

  d._observable = true;
  return d;
}

/***/ }),

/***/ "./packages/i/dist/index.js":
/*!**********************************!*\
  !*** ./packages/i/dist/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0; // import { register } from './components';

var SinuousComponents = {};

var Sinuous = /*#__PURE__*/function () {
  function Sinuous() {
    this.components = [];
    this.last_hid = 0;
  }
  /**
   * HID
   */


  var _proto = Sinuous.prototype;

  _proto.createHID = function createHID(index) {
    this.last_hid = this.last_hid + 1 + index;
    return this.last_hid;
  };

  _proto.clearHID = function clearHID() {
    this.last_hid = 0;
  }
  /**
   * Components
   * @type {[type]}
   */
  ;

  _proto.registerComponent = function registerComponent(name, component) {
    if (component === void 0) {
      component = null;
    }

    if (component == null) {
      component = name;
    }

    name = component.prototype._componentName.toLowerCase();
    this.components[name] = component;
  };

  _proto.hasComponent = function hasComponent(component) {
    return !(typeof this.components[component] === 'undefined');
  };

  _proto.getHydrateComponent = function getHydrateComponent(component, opts) {
    if (!this.hasComponent(component)) {
      throw new Error("There is no " + component + " component registered");
    } // console.log(this.components[component].prototype)


    if (this.components[component].prototype._shouldHydarate || opts.$slots) {
      return new this.components[component]();
    } else {
      return null;
    }
  };

  _proto.getComponent = function getComponent(component) {
    if (!this.hasComponent(component)) {
      throw new Error("There is no " + component + " component registered");
    }

    return new this.components[component]();
  };

  return Sinuous;
}();

var _default = new Sinuous();

exports.default = _default;

/***/ }),

/***/ "./packages/lazy/dist/index.js":
/*!*************************************!*\
  !*** ./packages/lazy/dist/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadComponent = loadComponent;

function loadComponent(component, callback) {
  if (component instanceof Promise) {
    component.then(function (module) {
      callback(new module.default());
    });
  } else {
    callback(new component());
  }
}

/***/ }),

/***/ "./packages/render/dist/index.js":
/*!***************************************!*\
  !*** ./packages/render/dist/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _lazy = __webpack_require__(/*! @sinuous/lazy */ "./packages/lazy/dist/index.js");

function _default(component, layout, timeBenchmark, callback) {
  if (timeBenchmark === void 0) {
    timeBenchmark = function timeBenchmark() {};
  }

  if (callback === void 0) {
    callback = null;
  }

  layout.innerHTML = '';
  (0, _lazy.loadComponent)(component, function (instance) {
    timeBenchmark('Render');
    layout.append(instance.render());
    instance.hook('mounted');

    if (callback) {
      callback(instance);
    }

    timeBenchmark('Render');
    return instance;
  });
}

/***/ }),

/***/ "./pages/index.sin":
/*!*************************!*\
  !*** ./pages/index.sin ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sinuous_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_sin_type_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.sin?type=script */ "./pages/index.sin?type=script");

		
		
		
		let config = Object.assign({
			methods: {},
		}, _index_sin_type_script__WEBPACK_IMPORTED_MODULE_1__["default"]);

		let instance = function PagesIndex() {
			_sinuous_component__WEBPACK_IMPORTED_MODULE_0__["Basic"].call(this);
		};
		
		// inherit Basic
		instance.prototype = Object.create(_sinuous_component__WEBPACK_IMPORTED_MODULE_0__["Basic"].prototype);

		// correct the constructor pointer because it points to Basic
		instance.prototype.constructor = instance;
		
		instance.prototype._methods = {};
		
		instance.prototype._componentName = 'PagesIndex';
		instance.prototype._shouldHydarate = true;
		instance.prototype._slotsPath = {};

		for(let key in config) {
			if(typeof config[key] === 'function') {
				instance.prototype[key] = config[key];
			}
		}
		
		for(let key in config.methods) {
			instance.prototype[key] = config.methods[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h("div", { id: ctx.getUID(5) }, [
  h(
    "sbutton",
    {
      $slots: {
        default: [
          () => {
            return `Button ${ctx._state.test()}`;
          },
        ],
      },
      id: ctx.getUID(6),
    },
    []
  ),
  h("div", { id: ctx.getUID(7) }, [
    h(
      "sbutton",
      {
        $slots: {
          default: [
            () => {
              return `Button 2 ${ctx._state.test()}`;
            },
          ],
        },
        id: ctx.getUID(8),
      },
      []
    ),
  ]),
]);
;
			}
		
			instance.prototype.__hydrate = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h("div", { id: ctx.getUID(5) }, [
  h(
    "sbutton",
    {
      $slots: {
        default: [
          () => {
            return `Button ${ctx._state.test()}`;
          },
        ],
      },
      id: ctx.getUID(6),
    },
    []
  ),
  h("div", { id: ctx.getUID(7) }, [
    h(
      "sbutton",
      {
        $slots: {
          default: [
            () => {
              return `Button 2 ${ctx._state.test()}`;
            },
          ],
        },
        id: ctx.getUID(8),
      },
      []
    ),
  ]),
]);
;
			}
		
		/* harmony default export */ __webpack_exports__["default"] = (instance);
	

/***/ }),

/***/ "./pages/index.sin?type=script":
/*!*************************************!*\
  !*** ./pages/index.sin?type=script ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },

  state(o) {
    return {
      items: o([]),
      test: o(1)
    };
  },

  computed(o) {
    return {};
  },

  methods: {
    mounted: function () {
      setTimeout(() => {
        this._state.test(100);
      }, 1000);
    }
  }
});

/***/ }),

/***/ "./src/render-test.js":
/*!****************************!*\
  !*** ./src/render-test.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _i = _interopRequireDefault(__webpack_require__(/*! @sinuous/i */ "./packages/i/dist/index.js"));

var _hydration = __webpack_require__(/*! @sinuous/hydration */ "./packages/hydration/dist/index.js");

var _render = _interopRequireDefault(__webpack_require__(/*! @sinuous/render */ "./packages/render/dist/index.js"));

var _sbutton = _interopRequireDefault(__webpack_require__(/*! ../components/sbutton.sin */ "./components/sbutton.sin"));

var _index = _interopRequireDefault(__webpack_require__(/*! ../pages/index.sin */ "./pages/index.sin"));

var _time = _interopRequireDefault(__webpack_require__(/*! ./time */ "./src/time.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import test from '../components/test.sin'
// import test2 from '../components/test2.sin'
// const IndexPage = import(/* webpackChunkName: "pageIndex" */ '../pages/index.sin')
var LAYOUT;
var PageIndex, PageIndex2;

function TEST_WEBPACK_BUILD() {
  (0, _time.default)('SSR-Build'); // Sinuous.registerComponent(test);
  // Sinuous.registerComponent(test2);

  _i.default.registerComponent(_sbutton.default);

  (0, _time.default)('SSR-Build');
} // function TEST_INIT()
// {
// 	timeBenchmark('SSR-Init');
// 	PageIndex = new IndexPage();
// 	PageIndex2 = new IndexPage();
// 	timeBenchmark('SSR-Init');
// }


function TEST_RENDER() {
  (0, _render.default)(_index.default, LAYOUT, _time.default, function (c) {
    PageIndex = c;
  });
}

function CLEAR_HOOKS() {
  var html = LAYOUT.innerHTML;
  LAYOUT.innerHTML = html;
  PageIndex.hook('unmounted');
}

function TEST_HYDRATE() {
  (0, _hydration.hydrate)(_index.default, LAYOUT, _time.default);
}

TEST_WEBPACK_BUILD(); // TEST_INIT();
// return;

(function load() {
  LAYOUT = document.getElementById('layout'); // LAYOUT.innerHTML = '';
  // requestIdleCallback(() => {
  // TEST_HYDRATE();
  // return;
  // setTimeout(() => {
  // 	TEST_RENDER();
  // }, 2000)

  TEST_RENDER(); // console.log(LAYOUT.innerHTML)
  // return

  setTimeout(function () {
    CLEAR_HOOKS();
    setTimeout(function () {
      TEST_HYDRATE();
    }, 300);
  }, 1000);
})();

/***/ }),

/***/ "./src/time.js":
/*!*********************!*\
  !*** ./src/time.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = time;
var times = {};

function time(name) {
  var now = new Date().getTime();

  if (typeof times[name] === 'undefined') {
    times[name] = now;
    return times[name];
  }

  console.log("[ tb " + name + " ]", now - times[name], 'ms');
  delete times[name];
}

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/render-test.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/render-test.js */"./src/render-test.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uLnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NidXR0b24uc2luP2NlNzkiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb29wLmpzIiwid2VicGFjazovLy8uLi9zcmMvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4iLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguc2luPzQzZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci10ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aW1lLmpzIl0sIm5hbWVzIjpbIl8iLCJ5Iiwic2VsZiIsImNsYXNzZXMiLCJvYmoiLCJzdGF0aWNDbGFzc2VzIiwiZHluYW1pYyIsImkiLCJhcmd1bWVudHMiLCJhcmciLCJBcnJheSIsImoiLCJoYW5kbGVDbGFzc09iamVjdCIsImEiLCJ2YWwiLCJzdHlsZXMiLCJjYW1lbFRvUHJvcCIsImhhbmRsZVN0eWxlc09iamVjdCIsIkhJRCIsIkJhc2ljIiwib2JzZXJ2YWJsZSIsImRlZmF1bHQiLCJjb21wdXRlZCIsImNoaWxkcmVuIiwicGFyZW50IiwicHJvcCIsInZhbHVlIiwidHlwZSIsInByb3BzIiwic3RhdGVmdWwiLCJPYmplY3QiLCJjdHgiLCJoIiwic3RhdGVtZW50IiwibG9vcCIsInNsb3QiLCJkIiwiYyIsImNvbXBpbGVyIiwiaFN0YXRlbWVudCIsImhTbG90IiwiaExvb3AiLCJTaW51b3VzIiwiZWwiLCJ0YWciLCJIVE1MVGFncyIsImNoaWxkIiwib3B0cyIsImR5bmFtaWNBdHRycyIsImNvbXBvbmVudCIsInJlZ2lzdGVyQ2hpbGRyZW4iLCJyZXN1bHQiLCJsb29wX2NvbmRpdGlvbiIsImNvbmRpdGlvbiIsIml0ZW0iLCJmbiIsImJpbmRpbmciLCJ2IiwibWFrZU9ic2VlcnZhYmxlIiwic2hvdWxkSGFuZGxlIiwid2luZG93IiwibmFtZSIsImNvbnRleHQiLCJjaGlsZEluZGV4Iiwic2l6ZSIsIm5vZGUiLCJkb2N1bWVudCIsIlNUT1JBR0UiLCJhcGkiLCJub2RlcyIsImJpbmRDaGlsZHJlbiIsImZpbHRlckNoaWxkTm9kZXMiLCJoeWRyYXRlVGFnIiwicGF0aCIsImJpbmROb2RlIiwiY29uc29sZSIsInNsb3ROb2RlcyIsImdldFNsb3ROb2RlIiwiY2hpbGRyZW5TbG90cyIsInNsb3RzIiwiaHlkcmF0ZVByb3BzIiwiaHlkcmF0ZUNoaWxkcmVuIiwiaHlkcmF0ZSIsImh5ZHJhdGVTbG90cyIsImluaXRDb21wb25lbnQiLCJlbnRyaWVzIiwiaWQiLCJlbnRyeSIsInRpbWVCZW5jaG1hcmsiLCJjYWxsYmFjayIsInRyZWUiLCJjb25uZWN0ZWROb2RlIiwiaW5zdGFuY2UiLCJzdGF0ZW1lbnRTaXplIiwiU2ludW91c0NvbXBvbmVudHMiLCJjcmVhdGVISUQiLCJjbGVhckhJRCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiaGFzQ29tcG9uZW50IiwiZ2V0SHlkcmF0ZUNvbXBvbmVudCIsImdldENvbXBvbmVudCIsIm1vZHVsZSIsImxheW91dCIsIkxBWU9VVCIsIlBhZ2VJbmRleCIsIlBhZ2VJbmRleDIiLCJURVNUX1dFQlBBQ0tfQlVJTEQiLCJidXR0b24iLCJURVNUX1JFTkRFUiIsIkluZGV4UGFnZSIsIkNMRUFSX0hPT0tTIiwiaHRtbCIsImlubmVySFRNTCIsImhvb2siLCJURVNUX0hZRFJBVEUiLCJsb2FkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRUaW1lb3V0IiwidGltZXMiLCJ0aW1lIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtR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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXHRcdGltcG9ydCB7IEJhc2ljIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50Jztcblx0XHRpbXBvcnQgY29tcG9uZW50Q29uZmlnIGZyb20gXCIuL3NidXR0b24uc2luP3R5cGU9c2NyaXB0XCI7XG5cdFx0XG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFNidXR0b24oKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnU2J1dHRvbic7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IGZhbHNlO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2xvdHNQYXRoID0ge1wiZGVmYXVsdFwiOlswLDBdfTtcblxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZykge1xuXHRcdFx0aWYodHlwZW9mIGNvbmZpZ1trZXldID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5tZXRob2RzKSB7XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZy5tZXRob2RzW2tleV1cblx0XHR9XG5cdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcmVuZGVyID0gZnVuY3Rpb24oaCwgeyBjdHgsIGNvbXBvbmVudHMsIHJlbmRlciwgc3RhdGVtZW50LCBzbG90LCBsb29wLCBkLCBjIH0pIHtcblx0XHRcdFx0cmV0dXJuIGgoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidXR0b25cIiB9LCBbXG4gIHNsb3QoY3R4LCBoLCBcImRlZmF1bHRcIiwgXCJzcGFuXCIsIHt9LCBbYERlZmF1bHQgYnV0dG9uIHRleHRgXSksXG5dKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHt9IiwiZXhwb3J0IGNvbnN0IF8gPSAtMTtcbiIsImltcG9ydCB2YWx1ZSBmcm9tICcuL3ZhbHVlJztcblxuXG5mdW5jdGlvbiBjYW1lbFRvUHJvcChzKVxue1xuXHRyZXR1cm4gc1xuXHRcdC5yZXBsYWNlKC9cXC4/KFtBLVpdKykvZywgKHgsIHkpID0+IGAtJHt5LnRvTG93ZXJDYXNlKCl9YClcblx0XHQucmVwbGFjZSgvXi0vLCAnJyk7XG59XG5cbmZ1bmN0aW9uIG9ubHlVbmlxdWUodmFsdWUsIGluZGV4LCBzZWxmKSB7IFxuICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNsYXNzT2JqZWN0KG9iailcbntcblx0bGV0IGNsYXNzZXMgPSBbXTtcblxuXHRmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG5cdFx0aWYodmFsdWUob2JqW2tleV0pKSB7XG5cdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzZXMoc3RhdGljQ2xhc3NlcyA9IFtdLCBkeW5hbWljID0ge30pXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0XG5cdFx0XHRpZihBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBhcmcubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2godmFsdWUoYXJnW2pdKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgYXJnID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQoXG5cdFx0XHRcdFx0aGFuZGxlQ2xhc3NPYmplY3QoYXJnKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KFxuXHRcdFx0XHRcdGhhbmRsZUNsYXNzT2JqZWN0KHZhbHVlKGFyZykpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzc2VzID0gY2xhc3Nlcy5maWx0ZXIoKHYsIGksIGEpID0+IGEuaW5kZXhPZih2KSA9PT0gaSk7XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVN0eWxlc09iamVjdChzdHlsZXMsIG9iailcbntcblx0Zm9yIChsZXQga2V5IGluIG9iaikge1xuXHRcdGxldCB2YWwgPSB2YWx1ZShvYmpba2V5XSk7XG5cdFx0aWYodmFsICE9PSBudWxsKSB7XG5cdFx0XHRzdHlsZXNbY2FtZWxUb1Byb3Aoa2V5KV0gPSB2YWw7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlcygpXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IHN0eWxlcyA9IHt9O1xuXHRcdFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCBhcmd1bWVudHNbaV0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCB2YWx1ZShhcmd1bWVudHNbaV0pKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzdHlsZXM7XG5cdH1cbn0iLCJpbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcblxuXG5pbXBvcnQgeyBoeWRyYXRlLCBkaHRtbCB9IGZyb20gJ3NpbnVvdXMvaHlkcmF0ZSc7XG5cbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkIH0gZnJvbSAnLi9vYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgbG9vcCBhcyBoTG9vcCwgc2xvdCBhcyBoU2xvdCwgc3RhdGVtZW50IGFzIGhTdGF0ZW1lbnQgfSBmcm9tICdAc2ludW91cy9oeWRyYXRpb24nO1xuaW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCBzdGF0ZW1lbnQsIGR5bmFtaWMsIGxvb3AsIHNsb3QgfSBmcm9tICcuL2luZGV4JztcblxuaW1wb3J0IHsgaCB9IGZyb20gJy4vJztcblxuLy8gaW1wb3J0IHsgcmVuZGVyLCBoeWRyYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5sZXQgSElEID0gMDtcblxuXG52YXIgQmFzaWMgPSBmdW5jdGlvbiAoKSB7XG5cblx0ZnVuY3Rpb24gQmFzaWMoKVxuXHR7XG5cdFx0dGhpcy5faXNDb21wb25lbnQgPSB0cnVlO1xuXHRcdHRoaXMuaGlkID0gKytISUQ7XG5cblx0XHR0aGlzLl9wcm9wcyA9IHRoaXMucHJvcHMoKTtcblx0XHR0aGlzLl9wYXNzZWRQcm9wcyA9IHt9O1xuXG5cdFx0Ly8gTG9jYWwgZGF0YVxuXHRcdHRoaXMuX2RhdGEgPSB0aGlzLmRhdGEoKTtcblx0XHQvLyBTdGF0ZWZ1bCBkYXRhXG5cdFx0dGhpcy5fc3RhdGUgPSB0aGlzLnN0YXRlKG9ic2VydmFibGUpO1xuXG5cdFx0dGhpcy5fc2xvdHMgPSB7XG5cdFx0XHRkZWZhdWx0OiBbXSxcblx0XHR9O1xuXG5cdFx0dGhpcy5fY29tcHV0ZWQgPSB0aGlzLmNvbXB1dGVkKGNvbXB1dGVkKTtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXG5cblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXG5cdFx0Ly8gRGVmYXVsdCBwcm9wIHZhbHVlcyBcblx0XHR0aGlzLmluaXRQcm9wcygpO1xuXG5cdFx0Ly8gdGhpcy5pbml0VGVtcGxhdGUoKTtcblxuXHRcdHRoaXMuc2V0Q2hpbGRyZW4oKTtcblx0XHR0aGlzLnNldFBhcmVudCgpO1xuXG5cdFx0dGhpcy5iaW5kQ29udGV4dCgpO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuYmluZENvbnRleHQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9jb21wdXRlZCkge1xuXHRcdFx0dGhpcy5fY29tcHV0ZWRba2V5XSA9IHRoaXMuX2NvbXB1dGVkW2tleV0uYmluZCh0aGlzKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIENvbmZpZ1xuXHQgKi9cblxuXHQvLyBCYXNpYy5wcm90b3R5cGUuc2V0TWV0aG9kcyA9IGZ1bmN0aW9uKG1ldGhvZHMgPSB7fSlcblx0Ly8ge1xuXHQvLyBcdHRoaXMuX21ldGhvZHMgPSBtZXRob2RzO1xuXHQvLyB9XG5cblx0LyoqXG5cdCAqIEhpZXJhcmNoeVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuc2V0Q2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZHJlbiA9IFtdKVxuXHR7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmFkZENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGQpXG5cdHtcblx0XHR0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnNldFBhcmVudCA9IGZ1bmN0aW9uKHBhcmVudCA9IG51bGwpXG5cdHtcblx0XHR0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblx0LyoqXG5cdCAqIFByb3BzXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5wcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmluaXRQcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX3Byb3BzKVxuXHRcdHtcblx0XHRcdGxldCBwcm9wID0gdGhpcy5fcHJvcHNba2V5XTtcblx0XHRcdGxldCB2YWx1ZSA9IG51bGw7XG5cdFx0XHRsZXQgdHlwZSA9IG51bGw7XG5cblx0XHRcdGlmKHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdC8vIHR5cGVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlID0gcHJvcC5kZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2RhdGFba2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NTbG90cyA9IGZ1bmN0aW9uKG5hbWUsIHNsb3RzKVxuXHR7XG5cdFx0dGhpcy5fc2xvdHNbbmFtZV0gPSBzbG90cztcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NQcm9wcyA9IGZ1bmN0aW9uKHByb3BzKVxuXHR7XG5cdFx0Ly8gaWYodHlwZW9mIHRoaXMuX3Bhc3NlZFByb3BzW2NvbXBvbmVudC5oaWRdID09PSAndW5kZWZpbmVkJykge1xuXHRcdC8vIFx0dGhpcy5fcGFzc2VkUHJvcHNbY29tcG9uZW50LmhpZF0gPSB7fTtcblx0XHQvLyB9XG5cblx0XHRmb3IobGV0IGtleSBpbiBwcm9wcylcblx0XHR7XG5cdFx0XHRpZihwcm9wc1trZXldLl9vYnNlcnZhYmxlKSB7XG5cdFx0XHRcdHRoaXMuX2lzU3RhdGVmdWwgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9kYXRhW2tleV0gPSBwcm9wc1trZXldO1xuXHRcdFx0Ly8gaWYodHlwZW9mIHRoaXMuX2RhdGFba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdC8vIFx0dGhyb3cgbmV3IEVycm9yKGBbU2ludW91c10gQ29tcG9uZW50ICR7IHRoaXMubmFtZSB9IGFscmVhZHkgaGFzICR7IGtleSB9IHByb3BlcnR5YClcblx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHQvLyBcdHRoaXMuX2RhdGFba2V5XSA9IHByb3BzW2tleV07XG5cdFx0XHQvLyB9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsaWVudCBzaWRlIGhhbmRsZXIgYWZ0ZXIgU1NSIChoeWRyYXRpb24pXG5cdCAqL1xuXG5cblx0QmFzaWMucHJvdG90eXBlLmhhc1N0YXRlZnVsbERhdGEgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRsZXQgc3RhdGVmdWwgPSBmYWxzZTtcblxuXHRcdGZvcihsZXQgaGlkIGluIHRoaXMuX3Bhc3NlZFByb3BzKSB7XG5cdFx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9wYXNzZWRQcm9wc1toaWRdKSB7XG5cdFx0XHRcdGlmKHRoaXMuX3Bhc3NlZFByb3BzW2hpZF1ba2V5XSkge1xuXHRcdFx0XHRcdHN0YXRlZnVsID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihzdGF0ZWZ1bCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGVmdWwgJiYgdGhpcy5faXNTdGF0ZWZ1bDtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmhhc1N0YXRlbGVzc0RhdGEgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZGF0YSkubGVuZ3RoID4gMDtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2NhbCBjb21wb25lbnQgZGF0YVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmNvbXB1dGVkID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXRlZnVsIGRhdGFcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnN0YXRlID0gZnVuY3Rpb24obylcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiAxLiBDcmVhdGUgY2hpbGQgY29tcG9uZW50cyAoZGlmZmVyZW50IGNvbnRleHQpXG5cdCAqIDIuIFBhc3MgcHJvcHNcblx0ICogMy4gUmVuZGVyXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUuY2hpbGRDb21wb25lbnRzID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiAgTGlmZSBjeWNsZSBob29rc1xuXHQgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLmhvb2sgPSBmdW5jdGlvbih0eXBlID0gJ21vdW50ZWQnKVxuXHR7XG5cdFx0aWYodGhpc1t0eXBlXSkge1xuXHRcdFx0dGhpc1t0eXBlXS5jYWxsKHRoaXMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMuX2NoaWxkcmVuW2ldLmhvb2sodHlwZSk7XG5cdFx0fVxuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUubW91bnRlZCA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUudW5tb3VudGVkID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiBQcml2YXRlIEFQSSBmb3IgcmVuZGVyIGFuZCBoeWRyYXRlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHggPSBudWxsKVxuXHR7XG5cdFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdFx0XHRjdHggPSB0aGlzO1xuXHRcdH1cblxuXHRcdGguYmluZChjdHgpO1xuXG5cdFx0cmV0dXJuIGN0eC5fX3JlbmRlcihoLmJpbmQoY3R4KSwge1xuXHRcdFx0Y3R4LFxuXHRcdFx0c3RhdGVtZW50LFxuXHRcdFx0bG9vcCxcblx0XHRcdHNsb3QsXG5cdFx0XHRkOiBkeW5hbWljLFxuXHRcdFx0YzogY29tcHV0ZWQsXG5cdFx0fSk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5oeWRyYXRlID0gZnVuY3Rpb24oY3R4ID0gbnVsbCwgY29tcGlsZXIgPSBudWxsKVxuXHR7XG5cdFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdFx0XHRjdHggPSB0aGlzO1xuXHRcdH1cblxuXHRcdHJldHVybiBjdHguX19oeWRyYXRlKGNvbXBpbGVyLCB7XG5cdFx0XHRjdHgsXG5cdFx0XHRzdGF0ZW1lbnQ6IGhTdGF0ZW1lbnQsXG5cdFx0XHRzbG90OiBoU2xvdCxcblx0XHRcdGxvb3A6IGhMb29wLFxuXHRcdFx0ZDogZHluYW1pYyxcblx0XHRcdGM6IGNvbXB1dGVkLFxuXHRcdH0pO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUudGVtcGxhdGUgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXG5cdC8vIEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZUJ1aWxkZXIgPSBmdW5jdGlvbihoLCBvcHRzKVxuXHQvLyB7XG5cdC8vIFx0cmV0dXJuIHRoaXNbYF9fJHsgb3B0cy5yZW5kZXIgfWBdKGgsIG9wdHMpO1xuXHQvLyB9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuY29tcG9uZW50ID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUuZ2V0VUlEID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRyZXR1cm4gYGh5ZHItJHsgU2ludW91cy5jcmVhdGVISUQoaW5kZXgpIH1gO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oXCJuYW1lXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lOyB9KTtcblxuXHRyZXR1cm4gQmFzaWM7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xuIiwiaW1wb3J0IHsgaCwgaHMsIGFwaSB9IGZyb20gJ3NpbnVvdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljKGgsIHRhZywgb3B0cywgY2hpbGRyZW4pXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IGVsID0gdGFnKCk7XG5cdFx0cmV0dXJuIGgoZWwsIG9wdHMsIGNoaWxkcmVuKTtcblx0fTtcblxufSIsImltcG9ydCB7IGggYXMgaHMgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBzdWJzY3JpYmUgfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuaW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCBvcHRpb25zLCAgfSBmcm9tICcuLyc7XG5pbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcblxubGV0IEhUTUxUYWdzID0gW1xuXHQnaScsICdkaXYnLCAnc3BhbicsICdocicsICdicicsICdzdHJvbmcnLCAncHJlJ1xuXTtcblxuXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG57XG5cdGVsID0gZWwudG9Mb3dlckNhc2UoKTtcblx0Ly8gZWwgPSBjb21wdXRlZCgoKSA9PiAodHlwZW9mIGVsID09PSAnZnVuY3Rpb24nID8gZWwgOiBlbCkpO1xuXG5cdC8vIGNvbnNvbGUubG9nKCdbIEZGIF0nLCBlbCwgdGhpcylcblx0bGV0IGR5bmFtaWNBdHRycyA9IGZhbHNlO1xuXG5cdG9wdGlvbnModGhpcywgb3B0cyk7XG5cblx0Ly8gSWYgSFRNTCB0YWcgcmVuZGVyXG5cdGlmKEhUTUxUYWdzLmluY2x1ZGVzKGVsKSkge1xuXHRcdHJldHVybiBocyhlbCwgb3B0cywgY2hpbGRyZW4pO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0Q29tcG9uZW50KGVsKTtcblxuXHQvLyBjb25zb2xlLmxvZyhjb21wb25lbnQpXG5cdFxuXHRpZih0eXBlb2Ygb3B0cy5wcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHR9XG5cblx0Zm9yKGxldCBrZXkgaW4gb3B0cy4kc2xvdHMpIHtcblx0XHRjb21wb25lbnQucGFzc1Nsb3RzKGtleSwgb3B0cy4kc2xvdHNba2V5XSk7XHRcblx0fVxuXG5cdHJlZ2lzdGVyQ2hpbGRyZW4odGhpcywgY29tcG9uZW50KTtcblxuXHRyZXR1cm4gY29tcG9uZW50LnJlbmRlcigpO1xufSIsImltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICdAc2ludW91cy9sYXp5JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb21wb25lbnQsIGxheW91dCwgdGltZUJlbmNobWFyayA9ICgpID0+IHt9LCBjYWxsYmFjayA9IG51bGwpIHtcblxuICAgIGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuICAgIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCAoaW5zdGFuY2UpID0+IHtcblxuICAgIFx0dGltZUJlbmNobWFyaygnUmVuZGVyJyk7XG5cblx0XHRsYXlvdXQuYXBwZW5kKGluc3RhbmNlLnJlbmRlcigpKTtcblx0XHRpbnN0YW5jZS5ob29rKCdtb3VudGVkJyk7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHRpbWVCZW5jaG1hcmsoJ1JlbmRlcicpO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9KTtcbn0iLCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb29wKGNvbmRpdGlvbiwgZm4pXG57XG5cdGxldCBkID0gKCkgPT4ge1xuXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xuXG5cdFx0bGV0IGxvb3BfY29uZGl0aW9uID0gdHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmRpdGlvbigpIDogY29uZGl0aW9uO1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gbG9vcF9jb25kaXRpb24pXG5cdFx0e1xuXHRcdFx0bGV0IGl0ZW0gPSBsb29wX2NvbmRpdGlvbltrZXldO1xuXHRcdFx0cmVzdWx0LnB1c2goZm4oaXRlbSwga2V5KSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRkLl9vYnNlcnZhYmxlID0gdHJ1ZTtcblx0Ly8gZC5fbm9kZSA9IHRydWU7XG5cblx0cmV0dXJuIGQ7XG59IiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBzaW51b3VzT2JzZXJ2YWJsZSwgY29tcHV0ZWQgYXMgc2ludW91c0NvbXB1dGVkIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VPYnNlZXJ2YWJsZShmbilcbntcblx0Zm4uX29ic2VydmFibGUgPSB0cnVlO1xuXHRyZXR1cm4gZm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZCh2LCBiaW5kaW5nID0gZmFsc2UpIHtcblxuXHRsZXQgZDtcblx0XG5cdGlmKGJpbmRpbmcpIHtcblx0XHRkID0gc2ludW91c0NvbXB1dGVkKHYuYmluZCh0aGlzKSk7XG5cdH0gZWxzZSB7XG5cdFx0ZCA9IHNpbnVvdXNDb21wdXRlZCh2KTtcblx0fVxuXG5cdG1ha2VPYnNlZXJ2YWJsZShkKTtcblxuXHRyZXR1cm4gZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmFibGUodiwgYmluZGluZyA9IGZhbHNlKVxue1xuXHRsZXQgZCA9IHNpbnVvdXNPYnNlcnZhYmxlKHYpO1xuXG5cdFxuXHRtYWtlT2JzZWVydmFibGUoZCk7XG5cblx0cmV0dXJuIGQ7XG59IiwiaW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCAgfSBmcm9tICcuLyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wdGlvbnMoY29udGV4dCwgb3B0cylcbntcblx0bGV0IHNob3VsZEhhbmRsZSA9IHtcblx0XHRzdHlsZXM6IGZhbHNlLFxuXHR9O1xuXG5cdGlmKCFvcHRzLnN0YXRpY1N0eWxlKSB7XG5cdFx0b3B0cy5zdGF0aWNTdHlsZSA9IHt9O1xuXHR9IGVsc2Uge1xuXHRcdHNob3VsZEhhbmRsZS5zdHlsZXMgPSB0cnVlO1xuXHR9XG5cblx0aWYoIW9wdHMuZHluYW1pY1N0eWxlKSB7XG5cdFx0b3B0cy5keW5hbWljU3R5bGUgPSBbXTtcblx0fSBlbHNlIHtcblx0XHRzaG91bGRIYW5kbGUuc3R5bGVzID0gdHJ1ZTtcblx0fVxuXG5cdGlmKHNob3VsZEhhbmRsZS5zdHlsZXMpIHtcblx0XHRvcHRzLnN0eWxlID0gc3R5bGVzLmFwcGx5KGNvbnRleHQsIFtvcHRzLnN0YXRpY1N0eWxlXS5jb25jYXQob3B0cy5keW5hbWljU3R5bGUpKVxuXHR9XG5cblx0Ly8gY29uc29sZS53YXJuKGNvbnRleHQsIG9wdHMpXG5cdC8qKlxuXHQgKiBDbGVhclxuXHQgKi9cblx0aWYoIXNob3VsZEhhbmRsZS5zdHlsZXMpIHtcblx0XHRkZWxldGUgb3B0cy5zdGF0aWNTdHlsZTtcblx0XHRkZWxldGUgb3B0cy5keW5hbWljU3R5bGU7XG5cdH1cblxuXHRyZXR1cm4gb3B0cztcbn0iLCJ3aW5kb3cuX1NpbnVvdXNDb21wb25lbnRzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyKG5hbWUsIGNvbXBvbmVudCA9IG51bGwpXG57XG5cdGlmKGNvbXBvbmVudCA9PSBudWxsKSB7XG5cdFx0Y29tcG9uZW50ID0gbmFtZTtcblx0XHRuYW1lID0gbmFtZS5uYW1lO1xuXHR9XG5cblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHR3aW5kb3cuX1NpbnVvdXNDb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsb3QoKVxue1xuXHRcbn0iLCJpbXBvcnQgeyBoIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KClcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICUgMyAhPT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdGF0ZW1lbnQgc2hvdWxkIGJlIG9kZCBudW1iZXInKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cblx0XHQvLyB2YWx1ZVxuXHRcdGxldCBzdGF0ZW1lbnRTaXplID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGxldCBzaXplID0gYXJndW1lbnRzW2kgKyAxXTtcblx0XHRcdGxldCB2YWx1ZSA9IGFyZ3VtZW50c1tpICsgMl07XG5cdFx0XHRsZXQgbm9kZSA9IG51bGw7XG5cblx0XHRcdHN0YXRlbWVudFNpemUgKz0gc2l6ZTtcblxuXHRcdFx0aWYodHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpZihjb25kaXRpb24oKSkge1xuXHRcdFx0XHRcdG5vZGUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoY29uZGl0aW9uKSB7XG5cdFx0XHRcdFx0bm9kZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnNvbGUud2FybihpLCBzaXplLCBub2RlKTtcblx0XHRcdC8vIFBhc3MgZmFpbGVkIHN0ZXRlbWVudCBjb25kaXRpb25cblx0XHRcdC8vIE5vcm1pbGl6ZSBpbmRleCB0aGF0IHdpbGwgYmUgdXNlZCBpbiByZXBsYWNpbmcgcGxhY2Vob2xkZXIgKGJlbG93KVxuXHRcdFx0aWYobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIW5vZGUuX29ic2VydmFibGUpIHtcblx0XHRcdFx0bm9kZSA9IG5vZGUoaCk7XG5cdFx0XHR9XG5cdFx0XHQvLyByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggbm9kZVxuXHRcdFx0Ly8gQW5kIGNvcnJlY3QgaW5kZXhcblx0XHRcdGlmKHNpemUgPiAxKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdFx0Ly8gaWYoQXJyYXkuaXNBcnJheShub2RlKSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZVtqXSk7XG5cdFx0XHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdFx0XHQvLyBcdHJlc3VsdC5wdXNoKGogPT0gMCA/IG5vZGUgOiAtMSk7XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Ly8gY29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFxuXHRcdHJldHVybiB7XG5cdFx0XHRub2RlczogcmVzdWx0LFxuXHRcdFx0c2l6ZTogc3RhdGVtZW50U2l6ZSxcblx0XHR9O1xuXHR9XG5cblx0ZC5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cblx0cmV0dXJuIGQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsdWUodmFsdWUpXG57XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiB2YWx1ZSgpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufSIsImltcG9ydCB7IGgsIGhzLCBhcGkgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlci9zcmMvZW1wdHknO1xuaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcbmltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICdAc2ludW91cy9sYXp5JztcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcblxubGV0IE9CU0VSVkVSO1xubGV0IFNUT1JBR0UgPSB7fTtcblxuZnVuY3Rpb24gaHlkcmF0ZVByb3BzKGVsLCBvcHRzKVxue1xuXHRpZighb3B0cy5fcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFwaS5wcm9wZXJ0eShlbCwgb3B0cywgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVUYWcocGFyZW50LCBjaGlsZHJlbiwgY3VycmVudEluZGV4LCB2YWx1ZSlcbntcblx0bGV0IGVsID0gY2hpbGRyZW5bY3VycmVudEluZGV4XTtcblx0XG5cdGxldCBub2RlcyA9IHZhbHVlKCk7XG5cblx0aWYoQXJyYXkuaXNBcnJheShub2RlcykpIHtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjaGlsZCA9IG5vZGVzW2ldO1xuXHRcdFx0aWYodHlwZW9mIGNoaWxkID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNoaWxkID0gY2hpbGQoKTtcblx0XHRcdH1cblx0XHRcdC8vIGNvbnNvbGUubG9nKHBhcmVudCwgIGNoaWxkLnNpemUpXG5cdFx0XHQvLyBhcGkuaW5zZXJ0KHBhcmVudCwgY2hpbGQsIGNoaWxkcmVuW2N1cnJlbnRJbmRleCArIGldKTtcblx0XHRcdC8vIHBhcmVudC5yZXBsYWNlQ2hpbGQoY2hpbGQsIGNoaWxkcmVuW2N1cnJlbnRJbmRleCArIGldKVxuXHRcdFx0Ly8gY2hpbGRyZW5bY3VycmVudEluZGV4ICsgaV0ucmVwbGFjZVdpdGgoY2hpbGQpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRhcGkuaW5zZXJ0KGVsLCBub2RlcywgbnVsbCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZUNoaWxkcmVuKG5vZGUsIGNoaWxkcmVuKVxue1xuXHRsZXQgYmluZENoaWxkcmVuID0gW107XG5cblx0aWYobm9kZSAhPT0gbnVsbCkge1xuXHRcdGJpbmRDaGlsZHJlbiA9IGZpbHRlckNoaWxkTm9kZXMobm9kZSk7XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoY2hpbGRyZW5baV0gPT09IF8pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmVycm9yKGJpbmRDaGlsZHJlbltpXSwgY2hpbGRyZW5baV0pO1xuXHRcdGh5ZHJhdGVUYWcobm9kZSwgYmluZENoaWxkcmVuLCBpLCBjaGlsZHJlbltpXSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0U2xvdE5vZGUoZWwsIHBhdGgpXG57XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuXHRcdGVsID0gZWwuY2hpbGROb2Rlc1twYXRoW2ldXTtcblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVNsb3RzKGNvbXBvbmVudCwgZWwsIG9wdHMgPSB7fSwgc2xvdHMpXG57XG5cdGlmKCFvcHRzWydpZCddKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYob3B0c1snaWQnXSA9PT0gJ2h5ZHItMTMnKSB7XG5cdFx0b3B0c1snaWQnXSA9ICdoeWRyLTYnO1xuXHR9XG5cblx0aWYob3B0c1snaWQnXSA9PT0gJ2h5ZHItMzAnKSB7XG5cdFx0b3B0c1snaWQnXSA9ICdoeWRyLTIxJztcblx0fVxuXG5cdGxldCBiaW5kTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAkeyBvcHRzWydpZCddIH1gKTtcblxuXHRjb25zb2xlLmxvZyhiaW5kTm9kZSwgb3B0cylcblxuXHRsZXQgc2xvdE5vZGVzID0ge31cblxuXHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuXHRcdGlmKGNvbXBvbmVudC5fc2xvdHNQYXRoW2tleV0pIHtcblx0XHRcdGxldCBub2RlID0gZ2V0U2xvdE5vZGUoYmluZE5vZGUsIGNvbXBvbmVudC5fc2xvdHNQYXRoW2tleV0pXG5cdFx0XHRzbG90Tm9kZXNba2V5XSA9IG5vZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gJHtrZXl9IHNsb3QgbmFtZXNwYWNlIGRlZmluZWRgKTtcblx0XHR9XG5cdH1cblxuXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuXHRcdFx0bGV0IG5vZGUgPSBzbG90Tm9kZXNba2V5XTtcblx0XHRcdGxldCBjaGlsZHJlblNsb3RzID0gc2xvdHNba2V5XTtcblx0XHRcdFxuXHRcdFx0aWYobm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRub2RlID0gW25vZGVdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bm9kZSA9IG5vZGUuY2hpbGROb2Rlcztcblx0XHRcdH1cblxuXHRcdFx0aWYoY2hpbGRyZW5TbG90cy5sZW5ndGggPiBub2RlLmxlbmd0aCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Nsb3QgaHlkcmF0aW9uIGxlbmd0aCBtaXNtYXRjaCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuU2xvdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XG5cdFx0XHRcdGFwaS5pbnNlcnQobm9kZVtpXSwgY2hpbGRyZW5TbG90c1tpXSgpLCBudWxsKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXHRcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZShlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxue1xuXHQvLyBjb25zb2xlLmxvZyh0aGlzLCBlbCwgb3B0cywgY2hpbGRyZW4pXG5cdGlmKCFvcHRzWydpZCddKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGJpbmROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7IG9wdHNbJ2lkJ10gfWApO1xuXG5cdFxuXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRoeWRyYXRlUHJvcHMoYmluZE5vZGUsIG9wdHMpO1xuXHRcdGh5ZHJhdGVDaGlsZHJlbihiaW5kTm9kZSwgY2hpbGRyZW4pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJDaGlsZHJlbihwYXJlbnQsIGNoaWxkKVxue1xuXHRwYXJlbnQuYWRkQ2hpbGRyZW4oY2hpbGQpO1xuXHRjaGlsZC5zZXRQYXJlbnQocGFyZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVyKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG57XG5cdG9wdGlvbnModGhpcywgb3B0cyk7XG5cdFx0XHRcdFxuXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG5cdFx0aHlkcmF0ZS5jYWxsKHRoaXMsIGVsLCBvcHRzLCBjaGlsZHJlbik7XG5cdFx0cmV0dXJuIF87XG5cdH1cblx0XHRcblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0SHlkcmF0ZUNvbXBvbmVudChlbCwgb3B0cyk7XG5cdC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudCwgZWwsIG9wdHMpXG5cdGlmKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBfO1xuXHR9XG5cblx0aWYodHlwZW9mIG9wdHMucHJvcHMgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0Y29tcG9uZW50LnBhc3NQcm9wcyhvcHRzLnByb3BzKTtcblx0fVxuXG5cdGlmKG9wdHMuJHNsb3RzKSB7XG5cdFx0aHlkcmF0ZVNsb3RzKGNvbXBvbmVudCwgZWwsIG9wdHMsIG9wdHMuJHNsb3RzKTtcblx0fVxuXHQvLyBjb21wb25lbnQucGFzc1Nsb3RzKCdkZWZhdWx0JywgY2hpbGRyZW4pO1xuXG5cdHJlZ2lzdGVyQ2hpbGRyZW4odGhpcywgY29tcG9uZW50KTtcblxuXHRyZXR1cm4gaW5pdENvbXBvbmVudChjb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBpbml0Q29tcG9uZW50KGNvbXBvbmVudClcbntcblx0Y29tcG9uZW50Lmh5ZHJhdGUoY29tcG9uZW50LCBjb21waWxlci5iaW5kKGNvbXBvbmVudCkpO1xuXG5cdHJldHVybiBfO1xufVxuXG5mdW5jdGlvbiBJbnRlcnNlY3Rpb25PYnNlcnZlckNhbGxiYWNrIChlbnRyaWVzLCBvYnNlcnZlcilcbntcblx0ZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcblx0XHRsZXQgaWQgPSBlbnRyeS50YXJnZXQuaWRcblx0XHQvLyBjb25zb2xlLmxvZyhpZCk7XG5cdFx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRoeWRyYXRlUHJvcHMoZW50cnkudGFyZ2V0LCBTVE9SQUdFW2lkXS5vcHRzKTtcblx0XHRcdGh5ZHJhdGVDaGlsZHJlbihlbnRyeS50YXJnZXQsIFNUT1JBR0VbaWRdLmNoaWxkcmVuKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRIeWRyYXRpb24oY29tcG9uZW50LCBoeWRyYXRpb25Sb290LCB0aW1lQmVuY2htYXJrID0gKCkgPT4ge30sIGNhbGxiYWNrID0gbnVsbClcbntcblx0Ly8gT0JTRVJWRVIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoSW50ZXJzZWN0aW9uT2JzZXJ2ZXJDYWxsYmFjaywge1xuXHQvLyBcdHJvb3Q6IGh5ZHJhdGlvblJvb3QsXG5cdC8vIFx0cm9vdE1hcmdpbjogJzBweCcsXG5cdC8vIFx0dGhyZXNob2xkOiAxLjBcblx0Ly8gfSk7XG5cblxuXG5cdC8vIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuXHQvLyBcdE9CU0VSVkVSLm9ic2VydmUoYmluZE5vZGUpO1xuXG5cdC8vIFx0U1RPUkFHRVtvcHRzWydpZCddXSA9IHtcblx0Ly8gXHRcdG9wdHMsXG5cdC8vIFx0XHRjaGlsZHJlbixcblx0Ly8gXHR9XG5cdC8vIH0pO1xuXHRsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgKGluc3RhbmNlKSA9PiB7XG5cblx0XHR0aW1lQmVuY2htYXJrKCdIeWRyYXRpb24nKTtcblxuXHRcdGxldCB0cmVlID0gW2luc3RhbmNlXTtcblxuXHRcdFNpbnVvdXMuY2xlYXJISUQoKTtcblxuXHRcdGxldCBjb25uZWN0ZWROb2RlID0gZmlsdGVyQ2hpbGROb2RlcyhoeWRyYXRpb25Sb290KTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aW5pdENvbXBvbmVudCh0cmVlW2ldLCBjb25uZWN0ZWROb2RlW2ldKTtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLmxvZyhpbnN0YW5jZSk7XG5cdFx0aW5zdGFuY2UuaG9vaygnbW91bnRlZCcpO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHR0aW1lQmVuY2htYXJrKCdIeWRyYXRpb24nKTtcblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fSk7XG5cbn1cblxuLyoqXG4gKiBGaWx0ZXIgb3V0IHdoaXRlc3BhY2UgdGV4dCBub2RlcyB1bmxlc3MgaXQgaGFzIGEgbm9za2lwIGluZGljYXRvci5cbiAqXG4gKiBAcGFyYW0gIHtOb2RlfSBwYXJlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBmaWx0ZXJDaGlsZE5vZGVzKHBhcmVudCkge1xuXHRyZXR1cm4gcGFyZW50LmNoaWxkTm9kZXM7XG5cdC8vIGNvbnNvbGUud2FybihwYXJlbnQsIHBhcmVudC5jaGlsZE5vZGVzKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGROb2RlcykuZmlsdGVyKFxuICAgICAgICBlbCA9PiBlbC5ub2RlVHlwZSAhPT0gMyB8fCBlbC5kYXRhLnRyaW0oKSB8fCBlbC5fbm9za2lwXG4gICAgKTtcbn1cbiIsIlxuXHRcdGltcG9ydCB7IEJhc2ljIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50Jztcblx0XHRpbXBvcnQgY29tcG9uZW50Q29uZmlnIGZyb20gXCIuL2luZGV4LnNpbj90eXBlPXNjcmlwdFwiO1xuXHRcdFxuXHRcdGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdG1ldGhvZHM6IHt9LFxuXHRcdH0sIGNvbXBvbmVudENvbmZpZyk7XG5cblx0XHRsZXQgaW5zdGFuY2UgPSBmdW5jdGlvbiBQYWdlc0luZGV4KCkge1xuXHRcdFx0QmFzaWMuY2FsbCh0aGlzKTtcblx0XHR9O1xuXHRcdFxuXHRcdC8vIGluaGVyaXQgQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2ljLnByb3RvdHlwZSk7XG5cblx0XHQvLyBjb3JyZWN0IHRoZSBjb25zdHJ1Y3RvciBwb2ludGVyIGJlY2F1c2UgaXQgcG9pbnRzIHRvIEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gaW5zdGFuY2U7XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzID0ge307XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9jb21wb25lbnROYW1lID0gJ1BhZ2VzSW5kZXgnO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2xvdHNQYXRoID0ge307XG5cblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcpIHtcblx0XHRcdGlmKHR5cGVvZiBjb25maWdba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcubWV0aG9kcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWcubWV0aG9kc1trZXldXG5cdFx0fVxuXHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3JlbmRlciA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCwgZCwgYyB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFwiZGl2XCIsIHsgaWQ6IGN0eC5nZXRVSUQoNSkgfSwgW1xuICBoKFxuICAgIFwic2J1dHRvblwiLFxuICAgIHtcbiAgICAgICRzbG90czoge1xuICAgICAgICBkZWZhdWx0OiBbXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBCdXR0b24gJHtjdHguX3N0YXRlLnRlc3QoKX1gO1xuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgaWQ6IGN0eC5nZXRVSUQoNiksXG4gICAgfSxcbiAgICBbXVxuICApLFxuICBoKFwiZGl2XCIsIHsgaWQ6IGN0eC5nZXRVSUQoNykgfSwgW1xuICAgIGgoXG4gICAgICBcInNidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgJHNsb3RzOiB7XG4gICAgICAgICAgZGVmYXVsdDogW1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYEJ1dHRvbiAyICR7Y3R4Ll9zdGF0ZS50ZXN0KCl9YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgaWQ6IGN0eC5nZXRVSUQoOCksXG4gICAgICB9LFxuICAgICAgW11cbiAgICApLFxuICBdKSxcbl0pO1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9faHlkcmF0ZSA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCwgZCwgYyB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFwiZGl2XCIsIHsgaWQ6IGN0eC5nZXRVSUQoNSkgfSwgW1xuICBoKFxuICAgIFwic2J1dHRvblwiLFxuICAgIHtcbiAgICAgICRzbG90czoge1xuICAgICAgICBkZWZhdWx0OiBbXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBCdXR0b24gJHtjdHguX3N0YXRlLnRlc3QoKX1gO1xuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgaWQ6IGN0eC5nZXRVSUQoNiksXG4gICAgfSxcbiAgICBbXVxuICApLFxuICBoKFwiZGl2XCIsIHsgaWQ6IGN0eC5nZXRVSUQoNykgfSwgW1xuICAgIGgoXG4gICAgICBcInNidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgJHNsb3RzOiB7XG4gICAgICAgICAgZGVmYXVsdDogW1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYEJ1dHRvbiAyICR7Y3R4Ll9zdGF0ZS50ZXN0KCl9YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgaWQ6IGN0eC5nZXRVSUQoOCksXG4gICAgICB9LFxuICAgICAgW11cbiAgICApLFxuICBdKSxcbl0pO1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdGV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuXHQiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHN0YXRlKG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IG8oW10pLFxuICAgICAgdGVzdDogbygxKVxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQobykge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3N0YXRlLnRlc3QoMTAwKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfVxufTsiLCJpbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcbmltcG9ydCB7IGh5ZHJhdGUgfSBmcm9tICdAc2ludW91cy9oeWRyYXRpb24nO1xuaW1wb3J0IHJlbmRlciBmcm9tICdAc2ludW91cy9yZW5kZXInO1xuLy8gaW1wb3J0IHRlc3QgZnJvbSAnLi4vY29tcG9uZW50cy90ZXN0LnNpbidcbi8vIGltcG9ydCB0ZXN0MiBmcm9tICcuLi9jb21wb25lbnRzL3Rlc3QyLnNpbidcbmltcG9ydCBidXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9zYnV0dG9uLnNpbidcbmltcG9ydCBJbmRleFBhZ2UgZnJvbSAnLi4vcGFnZXMvaW5kZXguc2luJ1xuaW1wb3J0IHRpbWVCZW5jaG1hcmsgZnJvbSAnLi90aW1lJztcblxuXG4vLyBjb25zdCBJbmRleFBhZ2UgPSBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYWdlSW5kZXhcIiAqLyAnLi4vcGFnZXMvaW5kZXguc2luJylcblxuXG52YXIgTEFZT1VUO1xudmFyIFBhZ2VJbmRleCwgUGFnZUluZGV4MjtcblxuZnVuY3Rpb24gVEVTVF9XRUJQQUNLX0JVSUxEKClcbntcblx0dGltZUJlbmNobWFyaygnU1NSLUJ1aWxkJyk7XG5cdC8vIFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQodGVzdCk7XG5cdC8vIFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQodGVzdDIpO1xuXHRTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KGJ1dHRvbik7XG5cdHRpbWVCZW5jaG1hcmsoJ1NTUi1CdWlsZCcpO1xufVxuXG4vLyBmdW5jdGlvbiBURVNUX0lOSVQoKVxuLy8ge1xuLy8gXHR0aW1lQmVuY2htYXJrKCdTU1ItSW5pdCcpO1xuLy8gXHRQYWdlSW5kZXggPSBuZXcgSW5kZXhQYWdlKCk7XG4vLyBcdFBhZ2VJbmRleDIgPSBuZXcgSW5kZXhQYWdlKCk7XG4vLyBcdHRpbWVCZW5jaG1hcmsoJ1NTUi1Jbml0Jyk7XG4vLyB9XG5cbmZ1bmN0aW9uIFRFU1RfUkVOREVSKClcbntcblx0cmVuZGVyKEluZGV4UGFnZSwgTEFZT1VULCB0aW1lQmVuY2htYXJrLCAoYykgPT4ge1xuXHRcdFBhZ2VJbmRleCA9IGM7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBDTEVBUl9IT09LUygpXG57XG5cdFxuXHRsZXQgaHRtbCA9IExBWU9VVC5pbm5lckhUTUw7XG5cdExBWU9VVC5pbm5lckhUTUwgPSBodG1sO1xuXHRQYWdlSW5kZXguaG9vaygndW5tb3VudGVkJyk7XG59XG5cbmZ1bmN0aW9uIFRFU1RfSFlEUkFURSgpXG57XG5cdGh5ZHJhdGUoSW5kZXhQYWdlLCBMQVlPVVQsIHRpbWVCZW5jaG1hcmspO1xufVxuXG5URVNUX1dFQlBBQ0tfQlVJTEQoKTtcblxuLy8gVEVTVF9JTklUKCk7XG5cbi8vIHJldHVybjtcbihmdW5jdGlvbiBsb2FkKCkge1xuXHRMQVlPVVQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cblxuXHQvLyBMQVlPVVQuaW5uZXJIVE1MID0gJyc7XG5cdC8vIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuXHQvLyBURVNUX0hZRFJBVEUoKTtcblx0Ly8gcmV0dXJuO1xuXG5cdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXHQvLyBcdFRFU1RfUkVOREVSKCk7XG5cdC8vIH0sIDIwMDApXG5cblx0VEVTVF9SRU5ERVIoKTtcblx0Ly8gY29uc29sZS5sb2coTEFZT1VULmlubmVySFRNTClcblx0Ly8gcmV0dXJuXG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cblx0XHRDTEVBUl9IT09LUygpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHQgVEVTVF9IWURSQVRFKCk7XG5cdFx0fSwgMzAwKTtcblx0fSwgMTAwMCk7XG59KSgpO1xuIiwibGV0IHRpbWVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUobmFtZSlcbntcblx0bGV0IG5vdyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdGlmKHR5cGVvZiB0aW1lc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aW1lc1tuYW1lXSA9IG5vdztcblx0XHRyZXR1cm4gdGltZXNbbmFtZV07XG5cdH1cblxuXHRjb25zb2xlLmxvZyhgWyB0YiAke25hbWV9IF1gLCBub3cgLSB0aW1lc1tuYW1lXSwgJ21zJyk7XG5cblx0ZGVsZXRlIHRpbWVzW25hbWVdO1xufSJdLCJzb3VyY2VSb290IjoiIn0=