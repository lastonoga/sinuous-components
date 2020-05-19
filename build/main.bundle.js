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
/* harmony import */ var _sbutton_sin_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sbutton.sin?type=script */ "./components/sbutton.sin?type=script");
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sinuous_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sinuous_hydration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sinuous/hydration */ "./packages/hydration/dist/index.js");
/* harmony import */ var _sinuous_hydration__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sinuous_hydration__WEBPACK_IMPORTED_MODULE_2__);

		
	
		



		
		let config = Object.assign({
			methods: {},
		}, _sbutton_sin_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

		let instance = function Sbutton(parent, ctx) {
			
		};

		instance._functional = true;
		instance.prototype._componentName = 'Sbutton';
		instance._slotsData = {"default":{"path":[0,0],"tag":"span","index":0}};

		for(let key in config.methods) {
			instance[key] = config.methods[key]
		}
	

		
			instance.render = function(ctx) {
				return Object(_sinuous_component__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { staticClass: "button", onclick: ctx.click }, [
  Object(_sinuous_component__WEBPACK_IMPORTED_MODULE_1__["slot"])(ctx, _sinuous_component__WEBPACK_IMPORTED_MODULE_1__["h"], "default", "span", {}, [`Default button text`]),
]);
;
			}
		
			instance.hydrate = function(ctx, h) {
				ctx.click = this.click;

				let statement = _sinuous_hydration__WEBPACK_IMPORTED_MODULE_2__["statement"];
				let loop = _sinuous_hydration__WEBPACK_IMPORTED_MODULE_2__["loop"];
				let slot = _sinuous_hydration__WEBPACK_IMPORTED_MODULE_2__["slot"];
				return {
  _t: "h",
  t: "div",
  o: { onclick: ctx.click, _s: true },
  c: [-1],
};
;
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },

  state(o) {
    return {};
  },

  computed(o) {
    return {};
  },

  methods: {
    click: function () {
      alert(1);
    }
  }
});

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

var _empty = __webpack_require__(/*! @sinuous/compiler/src/empty */ "./packages/compiler/src/empty.js");

var _hydrate = __webpack_require__(/*! sinuous/hydrate */ "./node_modules/sinuous/module/hydrate.js");

var _observable = __webpack_require__(/*! ./observable */ "./packages/component/dist/observable.js");

var _hydration = __webpack_require__(/*! @sinuous/hydration */ "./packages/hydration/dist/index.js");

var _index = __webpack_require__(/*! ./index */ "./packages/component/dist/index.js");

var _2 = __webpack_require__(/*! ./ */ "./packages/component/dist/index.js");

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
    this._children = [];
    this._el_index = 0; // this._state = [];
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

    for (var _key in this._methods) {
      var name = this._methods[_key];
      this[name] = this[name].bind(this);
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
      if (this._children[i] === _empty._) {
        continue;
      }

      if (!this._children[i]._functional) {
        this._children[i].hook(type);
      }
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

    _2.h.bind(ctx);

    return ctx.__render(_2.h.bind(ctx), {
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

  if (child.setParent) {
    child.setParent(parent);
  }
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

  var component = _i.default.getComponent(el);

  registerChildren(this, component);

  if (component._functional) {
    return component.render({
      getUID: function getUID() {
        return -1;
      },
      _slots: opts.$slots
    });
  }

  if (typeof opts.props !== 'undefined') {
    component.passProps(opts.props);
  }

  for (var key in opts.$slots) {
    component.passSlots(key, opts.$slots[key]);
  }

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
  } // console.log(name, tag, options, defaultChildren, children, context._slots)


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
exports.default = initHydration;

var _sinuous = __webpack_require__(/*! sinuous */ "./node_modules/sinuous/module/sinuous.js");

var _empty = __webpack_require__(/*! @sinuous/compiler/src/empty */ "./packages/compiler/src/empty.js");

var _i = _interopRequireDefault(__webpack_require__(/*! @sinuous/i */ "./packages/i/dist/index.js"));

var _component2 = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");

var _lazy = __webpack_require__(/*! @sinuous/lazy */ "./packages/lazy/dist/index.js");

var _observable = __webpack_require__(/*! sinuous/observable */ "./node_modules/sinuous/module/observable.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var OBSERVER;
var STORAGE = {};
var SUBSCRIBERS = [];

function addSubscriber(fn) {
  console.log(fn, SUBSCRIBERS);
  SUBSCRIBERS.push(fn);
} // function hydrateProps(el, opts)
// {
// if(!opts._s) {
// 	return;
// }
// 	api.property(el, opts, null);
// }
// function hydrateTag(parent, children, currentIndex, value)
// {
// 	let el = children[currentIndex];
// 	let nodes = value();
// 	if(Array.isArray(nodes)) {
// 		for (var i = 0; i < nodes.length; i++) {
// 			let child = nodes[i];
// 			if(typeof child === 'function') {
// 				child = child();
// 			}
// 			// console.log(parent,  child.size)
// 			// api.insert(parent, child, children[currentIndex + i]);
// 			// parent.replaceChild(child, children[currentIndex + i])
// 			// children[currentIndex + i].replaceWith(child);
// 		}
// 	} else {
// 		api.insert(el, nodes, null);
// 	}
// }
// function hydrateChildren(node, children)
// {
// 	let bindChildren = [];
// 	if(node !== null) {
// 		bindChildren = filterChildNodes(node);
// 	}
// 	for (var i = 0; i < children.length; i++) {
// 		if(children[i] === _) {
// 			continue;
// 		}
// 		// console.error(bindChildren[i], children[i]);
// 		hydrateTag(node, bindChildren, i, children[i]);
// 	}
// }
// function getSlotNode(el, path)
// {
// 	for (var i = 0; i < path.length; i++) {
// 		el = el.childNodes[path[i]];
// 	}
// 	return el;
// }
// function hydrateSlots(component, el, opts = {}, slots)
// {
// 	if(!opts['id']) {
// 		return;
// 	}
// 	// if(opts['id'] === 'hydr-13') {
// 	// 	opts['id'] = 'hydr-6';
// 	// }
// 	// if(opts['id'] === 'hydr-30') {
// 	// 	opts['id'] = 'hydr-21';
// 	// }
// 	let bindNode = document.getElementById(`${ opts['id'] }`);
// 	let slotNodes = {}
// 	for(let key in slots) {
// 		if(component._slotsPath[key]) {
// 			let node = getSlotNode(bindNode, component._slotsPath[key])
// 			slotNodes[key] = node;
// 		} else {
// 			throw new Error(`There is no ${key} slot namespace defined`);
// 		}
// 	}
// 	api.subscribe(() => {
// 		for(let key in slots) {
// 			let node = slotNodes[key];
// 			let childrenSlots = slots[key];
// 			if(node.childNodes.length === 0) {
// 				node = [node];
// 			} else {
// 				node = node.childNodes;
// 			}
// 			if(childrenSlots.length > node.length) {
// 				throw new Error('Slot hydration length mismatch');
// 			}
// 			for (var i = 0; i < childrenSlots.length; i++) {
// 				api.insert(node[i], childrenSlots[i](), null);
// 			}
// 		}
// 	});
// }
// function hydrate(el, opts = {}, children = [])
// {
// 	let bindNode;
// 	console.log(this, el, opts, children)
// 	// if(this.node) {
// 	// 	bindNode = this.node;
// 	// }
// 	if(!opts['id']) {
// 		return;
// 	} else {
// 		bindNode = document.getElementById(`${ opts['id'] }`);
// 	}
// 	// console.log(this);
// 	// this.ctx._el_index++;
// 	if(bindNode === null) {
// 		return;
// 	}
// api.subscribe(() => {
// 	hydrateProps(bindNode, opts);
// 	hydrateChildren(bindNode, children);
// });
// }
// function registerChildren(parent, child)
// {
// 	parent.addChildren(child);
// 	if(child.setParent) {
// 		child.setParent(parent);
// 	}
// }
// export function compiler(el, opts = {}, children = [])
// {
// 	options(this, opts);
// 	if(!Sinuous.hasComponent(el)) {
// 		hydrate.call(this, el, opts, children);
// 		return _;
// 	}
// 	let component = Sinuous.getHydrateComponent(el, opts);
// 	// console.log(component, el, opts)
// 	if(component === null) {
// 		return _;
// 	}
// 	registerChildren(this.ctx, component);
// 	if(component._functional) {
// 		// console.warn('start hydration');
// 		return component.hydrate({
// 			getUID() {
// 				return -1;
// 			},
// 			_slots: opts.$slots,
// 		}, compiler);
// 	}
// 	if(typeof opts.props !== 'undefined') {
// 		component.passProps(opts.props);
// 	}
// 	if(opts.$slots) {
// 		hydrateSlots(component, el, opts, opts.$slots);
// 	}
// 	return initComponent(component);
// }


function hydrateProps(el, options) {
  if (options._s) {
    _sinuous.api.subscribe(function () {
      _sinuous.api.property(el, options, null);
    });
  }
}

function hydrateH(context, el, options, children) {
  hydrateProps(el, options);

  for (var i = 0; i < children.length; i++) {
    hydrate(context, el.childNodes[i], children[i]);
  }
}

function hydrateLoop(context, node, args) {
  var condition = args.c;
  var startNode = node;

  _sinuous.api.subscribe(function () {
    var loop_condition = typeof condition === 'function' ? condition() : condition;
    var currentNode = startNode;

    for (var key in loop_condition) {
      var item = loop_condition[key];
      var itemArgs = args.fn(item, key); // console.log('[hydrate loop]', currentNode, itemArgs)

      hydrate(context, currentNode, itemArgs);
      currentNode = currentNode.nextElementSibling;
    }
  });
}

function hydrateText(context, node, args) {
  // console.warn('[TEXT]', node, args.t);
  if (args.t === _empty._) {
    return;
  } // if(typeof args.t !== 'function' ) {
  // 	return;
  // }
  // console.warn('[TEXT]', node, args.t());
  // if(!node._hydrated) {
  // 	node._hydrated = true;


  _sinuous.api.subscribe(function () {
    _sinuous.api.insert(node, args.t(), null);
  }); // }
  // api.insert(el, nodes, null);

}

function getSlotNode(el, tag, path) {
  // console.log(el, tag, path);
  for (var i = 1; i < path.length; i++) {
    el = el.childNodes[path[i]];
  } // console.error(el);


  return el;
}

function hydrateSlots(context, el, opts, slots) {
  if (opts === void 0) {
    opts = {};
  }

  hydrateProps(el, opts); // console.log(context, el, opts, slots)

  var bindedNodes = {};
  var slotData = context._slotsData; // Find slot binding nodes

  for (var key in slots) {
    if (slotData[key]) {
      var node = getSlotNode(el, slotData[key].tag, slotData[key].path);
      bindedNodes[key] = node;
    } else {
      throw new Error("There is no " + key + " slot namespace defined");
    }
  } // Hydrate slots per binded tag


  for (var _key in slots) {
    var data = slotData[_key];
    var _node = bindedNodes[_key];
    var childrenSlots = slots[_key];
    var startNodeIndex = data.index;

    if (childrenSlots.length > _node.length) {
      throw new Error('Slot hydration length mismatch');
    }

    for (var i = startNodeIndex; i < childrenSlots.length; i++) {
      // console.log(node.childNodes[i], childrenSlots[i])
      hydrate(context, _node.childNodes[i], childrenSlots[i]);
    }
  }
}
/**
 * Context setup
 */


function registerChildren(parent, child) {
  if (child._functional) {
    parent.addChildren(_empty._);
    return;
  }

  parent.addChildren(child);
  child.setParent(parent);
}

function hydrateTag(context, node, args) {
  var el = args.t,
      opts = args.o,
      children = args.c;

  if (!_i.default.hasComponent(el)) {
    hydrateH(context, node, opts, children);
    return;
  }

  var component = _i.default.getHydrateComponent(el, opts);

  if (component === null) {
    return _empty._;
  }

  registerChildren(context, component);

  if (component._functional) {
    var newArgs = component.hydrate({
      getUID: function getUID() {
        return -1;
      },
      _slots: opts.$slots
    });

    if (opts.$slots) {
      hydrateSlots(component, node, opts, opts.$slots);
    } // console.log(opts)


    hydrate(context, node, newArgs);
    return;
  } // setup component
  // if(typeof opts.props !== 'undefined') {
  // 	component.passProps(opts.props);
  // }


  if (opts.$slots) {
    hydrateSlots(component, node, opts, opts.$slots);
  }

  return hydrate(component, node, component.hydrate(component));
}
/**
 * Main hydration function
 */


function hydrate(context, node, args) {
  if (args === void 0) {
    args = null;
  } // requestIdleCallback(() => {
  // console.log('start')


  hydrateIdle(context, node, args); // }, {
  // 	timeout: 0,
  // 	read: true
  // });
}

function hydrateIdle(context, node, args) {
  if (args === null) {
    return;
  }

  if (args._t === 'h') {
    // args.o['data-hydrated'] = true;
    // args.o['_s'] = true;
    hydrateTag(context, node, args);
  }

  if (args._t === 't') {
    hydrateText(context, node, args);
  }

  if (args._t === 'loop') {
    hydrateLoop(context, node, args);
  }

  return _empty._;
}

function initHydration(component, hydrationRoot, timeBenchmark, callback) {
  if (timeBenchmark === void 0) {
    timeBenchmark = function timeBenchmark() {};
  }

  if (callback === void 0) {
    callback = null;
  }

  (0, _lazy.loadComponent)(component, function (instance) {
    timeBenchmark('Hydration');
    var tree = [instance];

    _i.default.clearHID();

    var connectedNode = filterChildNodes(hydrationRoot);

    for (var i = 0; i < tree.length; i++) {
      var _component = tree[i];
      var node = connectedNode[i];

      var hydration = _component.hydrate(_component);

      hydrate(_component, node, hydration);
    } // console.log('start', SUBSCRIBERS);
    // for (var i = 0; i < SUBSCRIBERS.length; i++) {
    // 	let fn = SUBSCRIBERS[i];
    // 	console.warn(i, SUBSCRIBERS[i])
    // 	api.subscribe(() => {
    // 		// console.log(fn)
    // 		fn()
    // 	});
    // 	// SUBSCRIBERS[i]();
    // }
    // });


    console.log(instance);
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

function getComponentInstance(component) {
  if (component._functional) {
    return component;
  }

  return new component();
}

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
      return getComponentInstance(this.components[component]);
    } else {
      return null;
    }
  };

  _proto.getComponent = function getComponent(component) {
    if (!this.hasComponent(component)) {
      throw new Error("There is no " + component + " component registered");
    }

    return getComponentInstance(this.components[component]);
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
/* harmony import */ var _index_sin_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.sin?type=script */ "./pages/index.sin?type=script");
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sinuous_component__WEBPACK_IMPORTED_MODULE_1__);

		
	
		

		let config = Object.assign({
			methods: {},
		}, _index_sin_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

		let instance = function PagesIndex() {
			_sinuous_component__WEBPACK_IMPORTED_MODULE_1__["Basic"].call(this);
		};
		
		// inherit Basic
		instance.prototype = Object.create(_sinuous_component__WEBPACK_IMPORTED_MODULE_1__["Basic"].prototype);

		// correct the constructor pointer because it points to Basic
		instance.prototype.constructor = instance;
		
		instance.prototype._methods = {};
		
		instance.prototype._componentName = 'PagesIndex';
		instance.prototype._shouldHydarate = true;
		instance.prototype._slotsData = {};
		instance.prototype._methods = Object.keys(config.methods);
		instance.prototype._functional = false;
		
		for(let key in config) {
			if(typeof config[key] === 'function') {
				instance.prototype[key] = config[key];
			}
		}
		
		for(let key in config.methods) {
			instance.prototype[key] = config.methods[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h("div", {}, [
  loop(ctx._state.items, (item, key) => {
    return h(
      "sbutton",
      {
        $slots: {
          default: [
            () => {
              return `Button ${item}`;
            },
          ],
        },
      },
      []
    );
  }),
]);
;
			}
		
			instance.prototype.__hydrate = function() {
				let ctx = this;
				return {
  _t: "h",
  t: "div",
  o: {},
  c: [
    {
      _t: "loop",
      c: ctx._state.items,
      fn: (item, key) => {
        return {
          _t: "h",
          t: "sbutton",
          o: {
            $slots: {
              default: [
                {
                  _t: "t",
                  t: -1,
                },
              ],
            },
          },
          c: [],
        };
      },
    },
  ],
};
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
      s1: o(1)
    };
  },

  computed(o) {
    return {};
  },

  methods: {
    mounted: function () {
      let d = [];

      for (var i = 0; i < 10000; i++) {
        d.push(i);
      }

      this._state.items(d); // timer = setInterval(() => {
      // 	s1 += 10
      // }, 100)
    },
    unmoutned: function () {// clearInterval(timer);
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
  // TEST_RENDER();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uLnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NidXR0b24uc2luP2NlNzkiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb29wLmpzIiwid2VicGFjazovLy8uLi9zcmMvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4iLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguc2luPzQzZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci10ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aW1lLmpzIl0sIm5hbWVzIjpbIl8iLCJ5Iiwic2VsZiIsImNsYXNzZXMiLCJvYmoiLCJzdGF0aWNDbGFzc2VzIiwiZHluYW1pYyIsImkiLCJhcmd1bWVudHMiLCJhcmciLCJBcnJheSIsImoiLCJoYW5kbGVDbGFzc09iamVjdCIsImEiLCJ2YWwiLCJzdHlsZXMiLCJjYW1lbFRvUHJvcCIsImhhbmRsZVN0eWxlc09iamVjdCIsIkhJRCIsIkJhc2ljIiwib2JzZXJ2YWJsZSIsImRlZmF1bHQiLCJjb21wdXRlZCIsIm5hbWUiLCJjaGlsZHJlbiIsInBhcmVudCIsInByb3AiLCJ2YWx1ZSIsInR5cGUiLCJwcm9wcyIsInN0YXRlZnVsIiwiT2JqZWN0IiwiY3R4IiwiaCIsInN0YXRlbWVudCIsImxvb3AiLCJzbG90IiwiZCIsImMiLCJjb21waWxlciIsImhTdGF0ZW1lbnQiLCJoU2xvdCIsImhMb29wIiwiU2ludW91cyIsImVsIiwidGFnIiwiSFRNTFRhZ3MiLCJjaGlsZCIsIm9wdHMiLCJkeW5hbWljQXR0cnMiLCJjb21wb25lbnQiLCJyZWdpc3RlckNoaWxkcmVuIiwiZ2V0VUlEIiwiX3Nsb3RzIiwiJHNsb3RzIiwicmVzdWx0IiwibG9vcF9jb25kaXRpb24iLCJjb25kaXRpb24iLCJpdGVtIiwiZm4iLCJiaW5kaW5nIiwidiIsIm1ha2VPYnNlZXJ2YWJsZSIsInNob3VsZEhhbmRsZSIsIndpbmRvdyIsImNvbnRleHQiLCJjaGlsZEluZGV4Iiwic2l6ZSIsIm5vZGUiLCJkb2N1bWVudCIsIlNUT1JBR0UiLCJTVUJTQ1JJQkVSUyIsImNvbnNvbGUiLCJvcHRpb25zIiwiYXBpIiwiaHlkcmF0ZVByb3BzIiwiaHlkcmF0ZSIsImFyZ3MiLCJzdGFydE5vZGUiLCJjdXJyZW50Tm9kZSIsIml0ZW1BcmdzIiwicGF0aCIsImJpbmRlZE5vZGVzIiwic2xvdERhdGEiLCJnZXRTbG90Tm9kZSIsImRhdGEiLCJjaGlsZHJlblNsb3RzIiwic2xvdHMiLCJzdGFydE5vZGVJbmRleCIsImh5ZHJhdGVIIiwibmV3QXJncyIsImh5ZHJhdGVTbG90cyIsImh5ZHJhdGVJZGxlIiwiaHlkcmF0ZVRhZyIsImh5ZHJhdGVUZXh0IiwiaHlkcmF0ZUxvb3AiLCJ0aW1lQmVuY2htYXJrIiwiY2FsbGJhY2siLCJ0cmVlIiwiY29ubmVjdGVkTm9kZSIsImZpbHRlckNoaWxkTm9kZXMiLCJoeWRyYXRpb24iLCJpbnN0YW5jZSIsInN0YXRlbWVudFNpemUiLCJub2RlcyIsIlNpbnVvdXNDb21wb25lbnRzIiwiY3JlYXRlSElEIiwiY2xlYXJISUQiLCJyZWdpc3RlckNvbXBvbmVudCIsImhhc0NvbXBvbmVudCIsImdldEh5ZHJhdGVDb21wb25lbnQiLCJnZXRDb21wb25lbnRJbnN0YW5jZSIsImdldENvbXBvbmVudCIsIm1vZHVsZSIsImxheW91dCIsIkxBWU9VVCIsIlBhZ2VJbmRleCIsIlBhZ2VJbmRleDIiLCJURVNUX1dFQlBBQ0tfQlVJTEQiLCJidXR0b24iLCJURVNUX1JFTkRFUiIsIkluZGV4UGFnZSIsIkNMRUFSX0hPT0tTIiwiaHRtbCIsImlubmVySFRNTCIsImhvb2siLCJURVNUX0hZRFJBVEUiLCJsb2FkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRUaW1lb3V0IiwidGltZXMiLCJ0aW1lIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQSxFQUEwRDs7QUFFMUQsRUFBZ0U7QUFDRjtBQUM2Qjs7O0FBRzNGO0FBQ0EsY0FBYztBQUNkLEdBQUcsRUFBRSxnRUFBZTs7QUFFcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixXQUFXOztBQUVwQztBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLFdBQVcsNERBQUMsU0FBUyw0Q0FBNEM7QUFDakUsRUFBRSwrREFBSSxNQUFNLG9EQUFDLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsNERBQVU7QUFDOUIsZUFBZSx1REFBSztBQUNwQixlQUFlLHVEQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0JBQStCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxFQUFpQix1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDakQxQjtBQUFlO0FBQ2Y7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCTSxJQUFNQSxDQUFDLEdBQUcsQ0FBQyxDQUFYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDs7Ozs7Ozs7QUFHQSx3QkFDQTtBQUNDLFNBQU8sQ0FBQyxDQUFELHdCQUNtQjtBQUFBLGlCQUFjQyxDQUFDLENBQWYsV0FBY0EsRUFBZDtBQURuQixtQkFBUCxFQUFPLENBQVA7QUFHQTs7QUFFRCx3Q0FBd0M7QUFDcEMsU0FBT0MsSUFBSSxDQUFKQSxtQkFBUDtBQUNIOztBQUVNLGdDQUNQO0FBQ0MsTUFBSUMsT0FBTyxHQUFYOztBQUVBLE9BQUssSUFBTCxZQUFxQjtBQUNwQixRQUFHLG9CQUFNQyxHQUFHLENBQVosR0FBWSxDQUFULENBQUgsRUFBb0I7QUFDbkJELGFBQU8sQ0FBUEE7QUFDQTtBQUNEOztBQUVEO0FBQ0E7O0FBRU0seUNBQ1A7QUFBQTs7QUFBQSxNQUR3QkUsYUFDeEI7QUFEd0JBLGlCQUN4QixHQUR3QyxFQUFoQkE7QUFDeEI7O0FBQUEsTUFENENDLE9BQzVDO0FBRDRDQSxXQUM1QyxHQURzRCxFQUFWQTtBQUM1Qzs7QUFDQyxTQUFPLFlBQU07QUFDWixRQUFJSCxPQUFPLEdBQVg7O0FBRUEsU0FBSyxJQUFJSSxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR0MsVUFBUyxDQUE3QixRQUFzQ0QsQ0FBdEMsSUFBMkM7QUFDMUMsVUFBSUUsR0FBRyxHQUFHRCxVQUFTLENBQW5CLENBQW1CLENBQW5COztBQUVBLFVBQUdFLEtBQUssQ0FBTEEsUUFBSCxHQUFHQSxDQUFILEVBQXVCO0FBQ3RCLGFBQUssSUFBSUMsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUdGLEdBQUcsQ0FBdkIsUUFBZ0NFLENBQWhDLElBQXFDO0FBQ3BDUixpQkFBTyxDQUFQQSxLQUFhLG9CQUFNTSxHQUFHLENBQXRCTixDQUFzQixDQUFULENBQWJBO0FBQ0E7QUFIRixhQUlPLElBQUcsZUFBSCxVQUE0QjtBQUNsQ0EsZUFBTyxHQUFHQSxPQUFPLENBQVBBLE9BQ1RTLGlCQUFpQixDQURsQlQsR0FDa0IsQ0FEUkEsQ0FBVkE7QUFETSxhQUlBLElBQUcsZUFBSCxZQUE4QjtBQUNwQ0EsZUFBTyxHQUFHQSxPQUFPLENBQVBBLE9BQ1RTLGlCQUFpQixDQUFDLG9CQURuQlQsR0FDbUIsQ0FBRCxDQURSQSxDQUFWQTtBQURNLGFBSUE7QUFDTkEsZUFBTyxDQUFQQTtBQUNBO0FBQ0Q7O0FBRURBLFdBQU8sR0FBRyxPQUFPLENBQVAsT0FBZTtBQUFBLGFBQWFVLENBQUMsQ0FBREEsZUFBYjtBQUF6QlYsS0FBVSxDQUFWQTtBQUVBLFdBQU9BLE9BQU8sQ0FBUEEsS0FBUCxHQUFPQSxDQUFQO0FBekJEO0FBMkJBOztBQUVNLHlDQUNQO0FBQ0MsT0FBSyxJQUFMLFlBQXFCO0FBQ3BCLFFBQUlXLEdBQUcsR0FBRyxvQkFBTVYsR0FBRyxDQUFuQixHQUFtQixDQUFULENBQVY7O0FBQ0EsUUFBR1UsR0FBRyxLQUFOLE1BQWlCO0FBQ2hCQyxZQUFNLENBQUNDLFdBQVcsQ0FBbEJELEdBQWtCLENBQVosQ0FBTkE7QUFDQTtBQUNEOztBQUVEO0FBQ0E7O0FBRU0sa0JBQ1A7QUFBQTtBQUNDLFNBQU8sWUFBTTtBQUNaLFFBQUlBLE1BQU0sR0FBVjs7QUFFQSxTQUFLLElBQUlSLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHQyxXQUFTLENBQTdCLFFBQXNDRCxDQUF0QyxJQUEyQztBQUMxQyxVQUFHLE9BQU9DLFdBQVMsQ0FBaEIsQ0FBZ0IsQ0FBaEIsS0FBSCxVQUFxQztBQUNwQ1MsMEJBQWtCLFNBQVNULFdBQVMsQ0FBcENTLENBQW9DLENBQWxCLENBQWxCQTtBQURELGFBRU87QUFDTkEsMEJBQWtCLFNBQVMsb0JBQU1ULFdBQVMsQ0FBMUNTLENBQTBDLENBQWYsQ0FBVCxDQUFsQkE7QUFDQTtBQUNEOztBQUVEO0FBWEQ7QUFhQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZEOztBQUNBOztBQUdBOztBQUVBOztBQUVBOztBQUNBOztBQUVBOzs7Ozs7RUFFQTs7O0FBQ0EsSUFBSUMsR0FBRyxHQUFQOztBQUdBLElBQUlDLEtBQUssR0FBRyxZQUFZO0FBRXZCLG1CQUNBO0FBQ0M7QUFDQSxlQUFXLEVBQVg7QUFFQSxrQkFBYyxLQUFkLEtBQWMsRUFBZDtBQUNBLHdCQUxELEVBS0MsQ0FMRCxDQU9DOztBQUNBLGlCQUFhLEtBUmQsSUFRYyxFQUFiLENBUkQsQ0FTQzs7QUFDQSxrQkFBYyxXQUFXQyxZQUF6QixVQUFjLENBQWQ7QUFFQSxrQkFBYztBQUNiQyxhQUFPLEVBQUU7QUFESSxLQUFkO0FBSUEscUJBQWlCLGNBQWNDLFlBQS9CLFFBQWlCLENBQWpCO0FBQ0E7QUFDQSxxQkFsQkQsQ0FrQkMsQ0FsQkQsQ0FvQkM7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxTQTFCRCxTQTBCQyxHQTFCRCxDQTRCQzs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFHREgsT0FBSyxDQUFMQSx3QkFBOEIsWUFDOUI7QUFDQyxTQUFJLElBQUosT0FBZSxLQUFmLFdBQStCO0FBQzlCLDRCQUFzQix5QkFBdEIsSUFBc0IsQ0FBdEI7QUFDQTs7QUFFRCxTQUFJLElBQUosUUFBZSxLQUFmLFVBQThCO0FBQzdCLFVBQUlJLElBQUksR0FBRyxjQUFYLElBQVcsQ0FBWDtBQUNBLG1CQUFhLGdCQUFiLElBQWEsQ0FBYjtBQUNBO0FBVEZKO0FBV0E7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUlBQSxPQUFLLENBQUxBLHdCQUE4QixvQkFDOUI7QUFBQSxRQUR1Q0ssUUFDdkM7QUFEdUNBLGNBQ3ZDLEdBRGtELEVBQVhBO0FBQ3ZDOztBQUNDO0FBRkRMOztBQU1BQSxPQUFLLENBQUxBLHdCQUE4QixpQkFDOUI7QUFDQztBQUZEQTs7QUFNQUEsT0FBSyxDQUFMQSxzQkFBNEIsa0JBQzVCO0FBQUEsUUFEcUNNLE1BQ3JDO0FBRHFDQSxZQUNyQyxHQUQ4QyxJQUFUQTtBQUNyQzs7QUFDQztBQUZETjtBQUlBOzs7OztBQUlBQSxPQUFLLENBQUxBLGtCQUF3QixZQUN4QjtBQUNDO0FBRkRBOztBQU1BQSxPQUFLLENBQUxBLHNCQUE0QixZQUM1QjtBQUNDLFNBQUksSUFBSixPQUFlLEtBQWYsUUFDQTtBQUNDLFVBQUlPLElBQUksR0FBRyxZQUFYLEdBQVcsQ0FBWDtBQUNBLFVBQUlDLEtBQUssR0FBVDtBQUNBLFVBQUlDLElBQUksR0FBUjs7QUFFQSxVQUFHLGdCQUFILFlBQStCLENBQzlCO0FBREQsYUFFTztBQUNORCxhQUFLLEdBQUdELElBQUksQ0FBWkMsT0FBUUQsRUFBUkM7QUFDQTs7QUFFRDtBQUNBO0FBZkZSOztBQW1CQUEsT0FBSyxDQUFMQSxzQkFBNEIsdUJBQzVCO0FBQ0M7QUFGREE7O0FBTUFBLE9BQUssQ0FBTEEsc0JBQTRCLGlCQUM1QjtBQUNDO0FBQ0E7QUFDQTtBQUVBLFNBQUksSUFBSixjQUNBO0FBQ0MsVUFBR1UsS0FBSyxDQUFMQSxHQUFLLENBQUxBLENBQUgsYUFBMkI7QUFDMUI7QUFDQTs7QUFFRCx3QkFBa0JBLEtBQUssQ0FMeEIsR0FLd0IsQ0FBdkIsQ0FMRCxDQU1DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCRlY7QUFxQkE7Ozs7O0FBS0FBLE9BQUssQ0FBTEEsNkJBQW1DLFlBQ25DO0FBQ0MsUUFBSVcsUUFBUSxHQUFaOztBQUVBLFNBQUksSUFBSixPQUFlLEtBQWYsY0FBa0M7QUFDakMsV0FBSSxJQUFKLE9BQWUsa0JBQWYsR0FBZSxDQUFmLEVBQXVDO0FBQ3RDLFlBQUcsdUJBQUgsR0FBRyxDQUFILEVBQWdDO0FBQy9CQSxrQkFBUSxHQUFSQTtBQUNBO0FBQ0E7QUFDRDs7QUFFRCxvQkFBYTtBQUNaO0FBQ0E7QUFDRDs7QUFFRCxXQUFPQSxRQUFRLElBQUksS0FBbkI7QUFqQkRYOztBQXFCQUEsT0FBSyxDQUFMQSw2QkFBbUMsWUFDbkM7QUFDQyxXQUFPWSxNQUFNLENBQU5BLEtBQVksS0FBWkEsZ0JBQVA7QUFGRFo7QUFLQTs7Ozs7QUFJQUEsT0FBSyxDQUFMQSxpQkFBdUIsWUFDdkI7QUFDQztBQUZEQTs7QUFNQUEsT0FBSyxDQUFMQSxxQkFBMkIsWUFDM0I7QUFDQztBQUZEQTtBQUtBOzs7OztBQUlBQSxPQUFLLENBQUxBLGtCQUF3QixhQUN4QjtBQUNDO0FBRkRBO0FBS0E7Ozs7Ozs7QUFNQUEsT0FBSyxDQUFMQSxxQkFBMkIsWUFBVyxDQUF0Q0E7O0FBRUFBLE9BQUssQ0FBTEEsNEJBQWtDLFlBQVcsQ0FBN0NBO0FBRUE7Ozs7OztBQUtBQSxPQUFLLENBQUxBLGlCQUF1QixnQkFDdkI7QUFBQSxRQURnQ1MsSUFDaEM7QUFEZ0NBLFVBQ2hDLEdBRHVDLFNBQVBBO0FBQ2hDOztBQUNDLFFBQUcsS0FBSCxJQUFHLENBQUgsRUFBZTtBQUNkO0FBQ0E7O0FBRUQsU0FBSyxJQUFJckIsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUcsZUFBcEIsUUFBMkNBLENBQTNDLElBQWdEO0FBQy9DLFVBQUcsc0JBQXNCUCxPQUF6QixHQUE0QjtBQUMzQjtBQUNBOztBQUVELFVBQUcsQ0FBQyxrQkFBSixhQUFtQztBQUNsQztBQUNBO0FBQ0Q7QUFkRm1COztBQWtCQUEsT0FBSyxDQUFMQSxvQkFBMEIsWUFBVyxDQUFyQ0E7O0FBRUFBLE9BQUssQ0FBTEEsc0JBQTRCLFlBQVcsQ0FBdkNBO0FBRUE7Ozs7OztBQUtBQSxPQUFLLENBQUxBLG1CQUF5QixlQUN6QjtBQUFBLFFBRGtDYSxHQUNsQztBQURrQ0EsU0FDbEMsR0FEd0MsSUFBTkE7QUFDbEM7O0FBQ0MsUUFBR0EsR0FBRyxLQUFOLE1BQWlCO0FBQ2hCQSxTQUFHLEdBQUhBO0FBQ0E7O0FBRURDOztBQUVBLFdBQU8sR0FBRyxDQUFILFNBQWFBLFVBQWIsR0FBYUEsQ0FBYixFQUEwQjtBQUNoQ0QsU0FBRyxFQUQ2QjtBQUVoQ0UsZUFBUyxFQUFUQSxPQUZnQztBQUdoQ0MsVUFBSSxFQUFKQSxPQUhnQztBQUloQ0MsVUFBSSxFQUFKQSxPQUpnQztBQUtoQ0MsT0FBQyxFQUFFL0IsT0FMNkI7QUFNaENnQyxPQUFDLEVBQUVoQjtBQU42QixLQUExQixDQUFQO0FBUkRIOztBQW1CQUEsT0FBSyxDQUFMQSxvQkFBMEIseUJBQzFCO0FBQUEsUUFEbUNhLEdBQ25DO0FBRG1DQSxTQUNuQyxHQUR5QyxJQUFOQTtBQUNuQzs7QUFBQSxRQUQrQ08sUUFDL0M7QUFEK0NBLGNBQy9DLEdBRDBELElBQVhBO0FBQy9DOztBQUNDLFFBQUdQLEdBQUcsS0FBTixNQUFpQjtBQUNoQkEsU0FBRyxHQUFIQTtBQUNBOztBQUVELFdBQU8sR0FBRyxDQUFILG9CQUF3QjtBQUM5QkEsU0FBRyxFQUQyQjtBQUU5QkUsZUFBUyxFQUFFTSxXQUZtQjtBQUc5QkosVUFBSSxFQUFFSyxXQUh3QjtBQUk5Qk4sVUFBSSxFQUFFTyxXQUp3QjtBQUs5QkwsT0FBQyxFQUFFL0IsT0FMMkI7QUFNOUJnQyxPQUFDLEVBQUVoQjtBQU4yQixLQUF4QixDQUFQO0FBTkRIOztBQWlCQUEsT0FBSyxDQUFMQSxxQkFBMkIsWUFDM0I7QUFDQztBQS9Rc0IsR0E2UXZCQSxDQTdRdUIsQ0FtUnZCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQUEsT0FBSyxDQUFMQSxzQkFBNEIsWUFDNUI7QUFDQztBQUZEQTs7QUFLQUEsT0FBSyxDQUFMQSxtQkFBeUIsaUJBQWdCO0FBQ3hDLHFCQUFnQndCLHFCQUFoQixLQUFnQkEsQ0FBaEI7QUFERHhCOztBQUlBQSxPQUFLLENBQUxBLG1DQUF5QyxZQUFXO0FBQUUsV0FBTyxpQkFBUDtBQUF0REE7O0FBRUE7QUFwU0QsQ0FBWSxFQUFaOztlQXVTZUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4VGY7O0FBRWUseUNBQ2Y7QUFDQyxTQUFPLFlBQU07QUFDWixRQUFJeUIsRUFBRSxHQUFHQyxHQUFUO0FBQ0EsV0FBT1osQ0FBQyxXQUFSLFFBQVEsQ0FBUjtBQUZEO0FBS0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1REOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQUlhLFFBQVEsR0FBRywyQ0FBZixLQUFlLENBQWY7O0FBS0EseUNBQ0E7QUFDQ3JCLFFBQU0sQ0FBTkE7O0FBQ0EsTUFBR3NCLEtBQUssQ0FBUixXQUFvQjtBQUNuQkEsU0FBSyxDQUFMQTtBQUNBO0FBQ0Q7O0FBRWMsK0JBQ2Y7QUFBQSxNQUQ4QkMsSUFDOUI7QUFEOEJBLFFBQzlCLEdBRHFDLEVBQVBBO0FBQzlCOztBQUFBLE1BRHlDeEIsUUFDekM7QUFEeUNBLFlBQ3pDLEdBRG9ELEVBQVhBO0FBQ3pDOztBQUNDb0IsSUFBRSxHQUFHQSxFQUFFLENBRFIsV0FDTUEsRUFBTEEsQ0FERCxDQUVDO0FBRUE7O0FBQ0EsTUFBSUssWUFBWSxHQUFoQjtBQUVBLHVCQVBELElBT0MsRUFQRCxDQVNDOztBQUNBLE1BQUdILFFBQVEsQ0FBUkEsU0FBSCxFQUFHQSxDQUFILEVBQTBCO0FBQ3pCLFdBQU8sMEJBQVAsUUFBTyxDQUFQO0FBQ0E7O0FBRUQsTUFBSUksU0FBUyxHQUFHUCx3QkFBaEIsRUFBZ0JBLENBQWhCOztBQUVBUSxrQkFBZ0IsT0FBaEJBLFNBQWdCLENBQWhCQTs7QUFFQSxNQUFHRCxTQUFTLENBQVosYUFBMEI7QUFDekIsV0FBTyxTQUFTLENBQVQsT0FBaUI7QUFDdkJFLFlBRHVCLG9CQUNkO0FBQ1IsZUFBTyxDQUFQO0FBRnNCO0FBSXZCQyxZQUFNLEVBQUVMLElBQUksQ0FBQ007QUFKVSxLQUFqQixDQUFQO0FBTUE7O0FBRUQsTUFBRyxPQUFPTixJQUFJLENBQVgsVUFBSCxhQUFzQztBQUNyQ0UsYUFBUyxDQUFUQSxVQUFvQkYsSUFBSSxDQUF4QkU7QUFDQTs7QUFFRCxPQUFJLElBQUosT0FBZUYsSUFBSSxDQUFuQixRQUE0QjtBQUMzQkUsYUFBUyxDQUFUQSxlQUF5QkYsSUFBSSxDQUFKQSxPQUF6QkUsR0FBeUJGLENBQXpCRTtBQUNBOztBQUVELFNBQU9BLFNBQVMsQ0FBaEIsTUFBT0EsRUFBUDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZERDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05lLDZCQUNmO0FBQ0MsTUFBSWIsQ0FBQyxHQUFHLFNBQUpBLENBQUksR0FBTTtBQUViLFFBQUlrQixNQUFNLEdBQVY7QUFFQSxRQUFJQyxjQUFjLEdBQUcsa0NBQWtDQyxTQUFsQyxLQUFyQjs7QUFFQSxTQUFJLElBQUosdUJBQ0E7QUFDQyxVQUFJQyxJQUFJLEdBQUdGLGNBQWMsQ0FBekIsR0FBeUIsQ0FBekI7QUFDQUQsWUFBTSxDQUFOQSxLQUFZSSxFQUFFLE9BQWRKLEdBQWMsQ0FBZEE7QUFDQTs7QUFFRDtBQVpEOztBQWVBbEIsR0FBQyxDQUFEQSxjQWhCRCxJQWdCQ0EsQ0FoQkQsQ0FpQkM7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkQ7O0FBRU8sNkJBQ1A7QUFDQ3NCLElBQUUsQ0FBRkE7QUFDQTtBQUNBOztBQUVNLDhCQUFzQztBQUFBLE1BQWpCQyxPQUFpQjtBQUFqQkEsV0FBaUIsR0FBUCxLQUFWQTtBQUFpQjs7QUFFNUM7O0FBRUEsZUFBWTtBQUNYdkIsS0FBQyxHQUFHLDBCQUFnQndCLENBQUMsQ0FBREEsS0FBcEJ4QixJQUFvQndCLENBQWhCLENBQUp4QjtBQURELFNBRU87QUFDTkEsS0FBQyxHQUFHLDBCQUFKQSxDQUFJLENBQUpBO0FBQ0E7O0FBRUR5QixpQkFBZSxDQUFmQSxDQUFlLENBQWZBO0FBRUE7QUFDQTs7QUFFTSxnQ0FDUDtBQUFBLE1BRDhCRixPQUM5QjtBQUQ4QkEsV0FDOUIsR0FEd0MsS0FBVkE7QUFDOUI7O0FBQ0MsTUFBSXZCLENBQUMsR0FBRyw0QkFBUixDQUFRLENBQVI7QUFHQXlCLGlCQUFlLENBQWZBLENBQWUsQ0FBZkE7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkQ7O0FBRWUsZ0NBQ2Y7QUFDQyxNQUFJQyxZQUFZLEdBQUc7QUFDbEJoRCxVQUFNLEVBQUU7QUFEVSxHQUFuQjs7QUFJQSxNQUFHLENBQUNpQyxJQUFJLENBQVIsYUFBc0I7QUFDckJBLFFBQUksQ0FBSkE7QUFERCxTQUVPO0FBQ05lLGdCQUFZLENBQVpBO0FBQ0E7O0FBRUQsTUFBRyxDQUFDZixJQUFJLENBQVIsY0FBdUI7QUFDdEJBLFFBQUksQ0FBSkE7QUFERCxTQUVPO0FBQ05lLGdCQUFZLENBQVpBO0FBQ0E7O0FBRUQsTUFBR0EsWUFBWSxDQUFmLFFBQXdCO0FBQ3ZCZixRQUFJLENBQUpBLFFBQWFqQyx3QkFBc0IsQ0FBQ2lDLElBQUksQ0FBTCxvQkFBMEJBLElBQUksQ0FBakVBLFlBQW1DLENBQXRCakMsQ0FBYmlDO0FBbEJGLElBcUJDOztBQUNBOzs7OztBQUdBLE1BQUcsQ0FBQ2UsWUFBWSxDQUFoQixRQUF5QjtBQUN4QixXQUFPZixJQUFJLENBQVg7QUFDQSxXQUFPQSxJQUFJLENBQVg7QUFDQTs7QUFFRDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDRGdCLE1BQU0sQ0FBTkE7O0FBRWUsbUNBQ2Y7QUFBQSxNQUR1Q2QsU0FDdkM7QUFEdUNBLGFBQ3ZDLEdBRG1ELElBQVpBO0FBQ3ZDOztBQUNDLE1BQUdBLFNBQVMsSUFBWixNQUFzQjtBQUNyQkEsYUFBUyxHQUFUQTtBQUNBM0IsUUFBSSxHQUFHQSxJQUFJLENBQVhBO0FBQ0E7O0FBRURBLE1BQUksR0FBR0EsSUFBSSxDQUFYQSxXQUFPQSxFQUFQQTtBQUVBeUMsUUFBTSxDQUFOQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaYywrREFDZjtBQUNDO0FBRUEsTUFBSXhDLFFBQVEsR0FBWjs7QUFFQSxNQUFHeUMsT0FBTyxDQUFQQSxPQUFILElBQUdBLENBQUgsRUFBeUI7QUFDeEJ6QyxZQUFRLEdBQUd5QyxPQUFPLENBQVBBLE9BQVh6QyxJQUFXeUMsQ0FBWHpDO0FBTkYsSUFTQzs7O0FBQ0EsTUFBR3FCLEdBQUcsS0FBTixNQUFpQjtBQUNoQjtBQUNBOztBQUVELFNBQU9aLENBQUMsZUFBUixRQUFRLENBQVI7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJEOztBQUVlLHFCQUNmO0FBQUE7O0FBQ0MsTUFBSUksQ0FBQyxHQUFHLFNBQUpBLENBQUksR0FBTTtBQUViLFFBQUc3QixVQUFTLENBQVRBLGVBQUgsR0FBK0I7QUFDOUIsWUFBTSxVQUFOLGdDQUFNLENBQU47QUFDQTs7QUFFRCxRQUFJK0MsTUFBTSxHQU5HLEVBTWIsQ0FOYSxDQVFiOztBQUNBLFFBQUlXLFVBQVUsR0FBZDs7QUFDQSxTQUFLLElBQUkzRCxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR0MsVUFBUyxDQUE3QixRQUFzQ0QsQ0FBQyxJQUF2QyxHQUE4QztBQUM3QyxVQUFJa0QsU0FBUyxHQUFHakQsVUFBUyxDQUF6QixDQUF5QixDQUF6QjtBQUNBLFVBQUkyRCxJQUFJLEdBQUczRCxVQUFTLENBQUNELENBQUMsR0FBdEIsQ0FBb0IsQ0FBcEI7QUFDQSxVQUFJb0IsS0FBSyxHQUFHbkIsVUFBUyxDQUFDRCxDQUFDLEdBQXZCLENBQXFCLENBQXJCO0FBQ0EsVUFBSTZELElBQUksR0FBUjs7QUFFQSxVQUFHLHFCQUFILFlBQW9DO0FBQ25DLFlBQUdYLFNBQUgsSUFBZ0I7QUFDZlcsY0FBSSxHQUFKQTtBQUNBO0FBSEYsYUFJTztBQUNOLHVCQUFjO0FBQ2JBLGNBQUksR0FBSkE7QUFDQTtBQWIyQyxRQWdCN0M7QUFDQTtBQUNBOzs7QUFDQSxVQUFHQSxJQUFJLEtBQVAsTUFBa0I7QUFDakIsYUFBSyxJQUFJekQsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQWpCLE1BQTBCQSxDQUExQixJQUErQjtBQUM5QjRDLGdCQUFNLENBQU5BLEtBQVljLFFBQVEsQ0FBUkEsY0FBWmQsRUFBWWMsQ0FBWmQ7QUFDQTs7QUFDRDtBQUNBOztBQUVELFVBQUcsQ0FBQ2EsSUFBSSxDQUFSLGFBQXNCO0FBQ3JCQSxZQUFJLEdBQUdBLElBQUksQ0FBQ25DLFdBQVptQyxDQUFXLENBQVhBO0FBM0I0QyxRQTZCN0M7QUFDQTs7O0FBQ0EsVUFBR0QsSUFBSSxHQUFQLEdBQWE7QUFDWixhQUFLLElBQUl4RCxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBakIsTUFBMEJBLENBQTFCLElBQStCO0FBQzlCNEMsZ0JBQU0sQ0FBTkEsS0FBWWEsSUFBSSxDQUFoQmIsQ0FBZ0IsQ0FBaEJBO0FBQ0E7QUFIRixhQUlPO0FBQ05BLGNBQU0sQ0FBTkE7QUFDQTtBQS9DVyxNQWtEYjs7O0FBRUE7QUFwREQ7O0FBdURBbEIsR0FBQyxDQUFEQTtBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEYyxzQkFDZjtBQUNDLE1BQUcsaUJBQUgsWUFBZ0M7QUFDL0IsV0FBT1YsS0FBUDtBQUNBOztBQUVEO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BEOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBO0FBQ0EsSUFBSTJDLE9BQU8sR0FBWDtBQUVBLElBQUlDLFdBQVcsR0FBZjs7QUFFQSwyQkFDQTtBQUNDQyxTQUFPLENBQVBBO0FBQ0FELGFBQVcsQ0FBWEE7RUFHRDtBQUNBO0FBQ0M7QUFDQTtBQUNBO0FBRUQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBT0EsbUNBQ0E7QUFDQyxNQUFHRSxPQUFPLENBQVYsSUFBZTtBQUNkQywyQkFBYyxZQUFNO0FBQ25CQTtBQUREQTtBQUdBO0FBQ0Q7O0FBRUQsa0RBQ0E7QUFFQ0MsY0FBWSxLQUFaQSxPQUFZLENBQVpBOztBQUVBLE9BQUssSUFBSXBFLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHaUIsUUFBUSxDQUE1QixRQUFxQ2pCLENBQXJDLElBQTBDO0FBQ3pDcUUsV0FBTyxVQUFVaEMsRUFBRSxDQUFGQSxXQUFWLENBQVVBLENBQVYsRUFBNEJwQixRQUFRLENBQTNDb0QsQ0FBMkMsQ0FBcEMsQ0FBUEE7QUFDQTtBQUNEOztBQUVELDBDQUNBO0FBQ0MsTUFBSW5CLFNBQVMsR0FBR29CLElBQUksQ0FBcEI7QUFDQSxNQUFJQyxTQUFTLEdBQWI7O0FBRUFKLHlCQUFjLFlBQU07QUFDbkIsUUFBSWxCLGNBQWMsR0FBRyxrQ0FBa0NDLFNBQWxDLEtBQXJCO0FBQ0EsUUFBSXNCLFdBQVcsR0FBZjs7QUFFQSxTQUFJLElBQUosdUJBQ0E7QUFDQyxVQUFJckIsSUFBSSxHQUFHRixjQUFjLENBQXpCLEdBQXlCLENBQXpCO0FBQ0EsVUFBSXdCLFFBQVEsR0FBR0gsSUFBSSxDQUFKQSxTQUZoQixHQUVnQkEsQ0FBZixDQUZELENBR0M7O0FBRUFELGFBQU8sdUJBQVBBLFFBQU8sQ0FBUEE7QUFFQUcsaUJBQVcsR0FBR0EsV0FBVyxDQUF6QkE7QUFDQTtBQWJGTDtBQWVBOztBQUVELDBDQUNBO0FBQ0M7QUFDQSxNQUFHRyxJQUFJLENBQUpBLE1BQVc3RSxPQUFkLEdBQWlCO0FBQ2hCO0FBSEYsSUFLQztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBMEUseUJBQWMsWUFBTTtBQUNuQkEsOEJBQWlCRyxJQUFJLENBQXJCSCxDQUFpQkcsRUFBakJIO0FBZEYsR0FhQ0EsRUFiRCxDQWdCQztBQUNBOztBQUNBOztBQUdELG9DQUNBO0FBQ0M7QUFDQSxPQUFLLElBQUluRSxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBRzBFLElBQUksQ0FBeEIsUUFBaUMxRSxDQUFqQyxJQUFzQztBQUNyQ3FDLE1BQUUsR0FBR0EsRUFBRSxDQUFGQSxXQUFjcUMsSUFBSSxDQUF2QnJDLENBQXVCLENBQWxCQSxDQUFMQTtBQUhGLElBS0M7OztBQUVBO0FBQ0E7O0FBRUQsZ0RBQ0E7QUFBQSxNQURtQ0ksSUFDbkM7QUFEbUNBLFFBQ25DLEdBRDBDLEVBQVBBO0FBQ25DOztBQUNDMkIsY0FBWSxLQURiLElBQ2EsQ0FBWkEsQ0FERCxDQUVDOztBQUVBLE1BQUlPLFdBQVcsR0FBZjtBQUVBLE1BQUlDLFFBQVEsR0FBR2xCLE9BQU8sQ0FOdkIsVUFNQyxDQU5ELENBUUM7O0FBQ0EsT0FBSSxJQUFKLGNBQXNCO0FBQ3JCLFFBQUdrQixRQUFRLENBQVgsR0FBVyxDQUFYLEVBQWtCO0FBQ2pCLFVBQUlmLElBQUksR0FBR2dCLFdBQVcsS0FBS0QsUUFBUSxDQUFSQSxHQUFRLENBQVJBLENBQUwsS0FBd0JBLFFBQVEsQ0FBUkEsR0FBUSxDQUFSQSxDQUE5QyxJQUFzQixDQUF0QjtBQUNBRCxpQkFBVyxDQUFYQSxHQUFXLENBQVhBO0FBRkQsV0FHTztBQUNOLFlBQU0saUNBQU4seUJBQU0sQ0FBTjtBQUNBO0FBZkgsSUFrQkM7OztBQUNBLE9BQUksSUFBSixlQUFzQjtBQUNyQixRQUFJRyxJQUFJLEdBQUdGLFFBQVEsQ0FBbkIsSUFBbUIsQ0FBbkI7QUFDQSxRQUFJZixLQUFJLEdBQUdjLFdBQVcsQ0FBdEIsSUFBc0IsQ0FBdEI7QUFDQSxRQUFJSSxhQUFhLEdBQUdDLEtBQUssQ0FBekIsSUFBeUIsQ0FBekI7QUFDQSxRQUFJQyxjQUFjLEdBQUdILElBQUksQ0FBekI7O0FBRUEsUUFBR0MsYUFBYSxDQUFiQSxTQUF1QmxCLEtBQUksQ0FBOUIsUUFBdUM7QUFDdEMsWUFBTSxVQUFOLGdDQUFNLENBQU47QUFDQTs7QUFFRCxTQUFLLElBQUk3RCxDQUFDLEdBQVYsZ0JBQTZCQSxDQUFDLEdBQUcrRSxhQUFhLENBQTlDLFFBQXVEL0UsQ0FBdkQsSUFBNEQ7QUFDM0Q7QUFDQXFFLGFBQU8sVUFBVVIsS0FBSSxDQUFKQSxXQUFWLENBQVVBLENBQVYsRUFBOEJrQixhQUFhLENBQWxEVixDQUFrRCxDQUEzQyxDQUFQQTtBQUNBO0FBQ0Q7QUFDRDtBQUNEOzs7OztBQUdBLHlDQUNBO0FBQ0MsTUFBRzdCLEtBQUssQ0FBUixhQUFzQjtBQUNyQnRCLFVBQU0sQ0FBTkEsWUFBbUJ6QixPQUFuQnlCO0FBQ0E7QUFDQTs7QUFFREEsUUFBTSxDQUFOQTtBQUNBc0IsT0FBSyxDQUFMQTtBQUNBOztBQUVELHlDQUNBO0FBQ0MsTUFBSUgsRUFBRSxHQUFHaUMsSUFBSSxDQUFiO0FBQUEsTUFDQzdCLElBQUksR0FBRzZCLElBQUksQ0FEWjtBQUFBLE1BRUNyRCxRQUFRLEdBQUdxRCxJQUFJLENBRmhCOztBQUlBLE1BQUcsQ0FBQ2xDLHdCQUFKLEVBQUlBLENBQUosRUFBOEI7QUFDN0I4QyxZQUFRLHNCQUFSQSxRQUFRLENBQVJBO0FBQ0E7QUFDQTs7QUFFRCxNQUFJdkMsU0FBUyxHQUFHUCxtQ0FBaEIsSUFBZ0JBLENBQWhCOztBQUVBLE1BQUdPLFNBQVMsS0FBWixNQUF1QjtBQUN0QixXQUFPbEQsT0FBUDtBQUNBOztBQUVEbUQsa0JBQWdCLFVBQWhCQSxTQUFnQixDQUFoQkE7O0FBRUEsTUFBR0QsU0FBUyxDQUFaLGFBQTBCO0FBQ3pCLFFBQUl3QyxPQUFPLEdBQUcsU0FBUyxDQUFULFFBQWtCO0FBQy9CdEMsWUFEK0Isb0JBQ3RCO0FBQ1IsZUFBTyxDQUFQO0FBRjhCO0FBSS9CQyxZQUFNLEVBQUVMLElBQUksQ0FBQ007QUFKa0IsS0FBbEIsQ0FBZDs7QUFPQSxRQUFHTixJQUFJLENBQVAsUUFBZ0I7QUFDZjJDLGtCQUFZLHdCQUF3QjNDLElBQUksQ0FBeEMyQyxNQUFZLENBQVpBO0FBVHdCLE1BWXpCOzs7QUFDQWYsV0FBTyxnQkFBUEEsT0FBTyxDQUFQQTtBQUVBO0FBakNGLElBb0NDO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFHNUIsSUFBSSxDQUFQLFFBQWdCO0FBQ2YyQyxnQkFBWSx3QkFBd0IzQyxJQUFJLENBQXhDMkMsTUFBWSxDQUFaQTtBQUNBOztBQUVELFNBQU9mLE9BQU8sa0JBQWtCMUIsU0FBUyxDQUFUQSxRQUFoQyxTQUFnQ0EsQ0FBbEIsQ0FBZDtBQUNBO0FBRUQ7Ozs7O0FBR0Esc0NBQ0E7QUFBQSxNQURnQzJCLElBQ2hDO0FBRGdDQSxRQUNoQyxHQUR1QyxJQUFQQTtBQUNoQyxJQUNDO0FBQ0M7OztBQUNBZSxhQUFXLGdCQUhiLElBR2EsQ0FBWEEsQ0FIRixDQUlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUQsMENBQ0E7QUFDQyxNQUFHZixJQUFJLEtBQVAsTUFBa0I7QUFDakI7QUFDQTs7QUFFRCxNQUFHQSxJQUFJLENBQUpBLE9BQUgsS0FBb0I7QUFDbkI7QUFDQTtBQUNBZ0IsY0FBVSxnQkFBVkEsSUFBVSxDQUFWQTtBQUNBOztBQUVELE1BQUdoQixJQUFJLENBQUpBLE9BQUgsS0FBb0I7QUFDbkJpQixlQUFXLGdCQUFYQSxJQUFXLENBQVhBO0FBQ0E7O0FBRUQsTUFBR2pCLElBQUksQ0FBSkEsT0FBSCxRQUF1QjtBQUN0QmtCLGVBQVcsZ0JBQVhBLElBQVcsQ0FBWEE7QUFDQTs7QUFFRCxTQUFPL0YsT0FBUDtBQUVBOztBQUdjLDBFQUNmO0FBQUEsTUFEZ0VnRyxhQUNoRTtBQURnRUEsaUJBQ2hFLEdBRGdGLHlCQUFNLENBQ3RGLENBRGdFQTtBQUNoRTs7QUFBQSxNQUQwRkMsUUFDMUY7QUFEMEZBLFlBQzFGLEdBRHFHLElBQVhBO0FBQzFGOztBQUNDLHNDQUF5QixvQkFBYztBQUV0Q0QsaUJBQWEsQ0FBYkEsV0FBYSxDQUFiQTtBQUVBLFFBQUlFLElBQUksR0FBRyxDQUFYLFFBQVcsQ0FBWDs7QUFFQXZEOztBQUVBLFFBQUl3RCxhQUFhLEdBQUdDLGdCQUFnQixDQUFwQyxhQUFvQyxDQUFwQzs7QUFFQSxTQUFLLElBQUk3RixDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBRzJGLElBQUksQ0FBeEIsUUFBaUMzRixDQUFqQyxJQUFzQztBQUNyQyxVQUFJMkMsVUFBUyxHQUFHZ0QsSUFBSSxDQUFwQixDQUFvQixDQUFwQjtBQUNBLFVBQUk5QixJQUFJLEdBQUcrQixhQUFhLENBQXhCLENBQXdCLENBQXhCOztBQUNBLFVBQUlFLFNBQVMsR0FBR25ELFVBQVMsQ0FBVEEsUUFBaEIsVUFBZ0JBLENBQWhCOztBQUVBMEIsYUFBTyxtQkFBUEEsU0FBTyxDQUFQQTtBQWZxQyxNQW1CckM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FKLFdBQU8sQ0FBUEE7QUFDQThCLFlBQVEsQ0FBUkE7O0FBRUEsa0JBQWE7QUFDWkwsY0FBUSxDQUFSQSxRQUFRLENBQVJBO0FBQ0E7O0FBRURELGlCQUFhLENBQWJBLFdBQWEsQ0FBYkE7QUFFQTtBQXZDRDtBQTBDQTtBQUVEOzs7Ozs7OztBQU1BLGtDQUFrQztBQUNqQyxTQUFPdkUsTUFBTSxDQURvQixVQUNqQyxDQURpQyxDQUVqQzs7QUFDRyxTQUFPLEtBQUssQ0FBTCxLQUFXQSxNQUFNLENBQWpCLG1CQUNILGNBQUU7QUFBQSxXQUFJbUIsRUFBRSxDQUFGQSxrQkFBcUJBLEVBQUUsQ0FBRkEsS0FBckJBLElBQXFCQSxFQUFyQkEsSUFBdUNBLEVBQUUsQ0FBN0M7QUFETixHQUFPLENBQVA7QUFHSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QVI3ZEQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZSw2QkFDZjtBQUNDLE1BQUlQLENBQUMsR0FBRyxTQUFKQSxDQUFJLEdBQU07QUFFYixRQUFJa0IsTUFBTSxHQUFWO0FBRUEsUUFBSUMsY0FBYyxHQUFHLGtDQUFrQ0MsU0FBbEMsS0FBckI7O0FBRUEsU0FBSSxJQUFKLHVCQUNBO0FBQ0MsVUFBSUMsSUFBSSxHQUFHRixjQUFjLENBQXpCLEdBQXlCLENBQXpCO0FBQ0FELFlBQU0sQ0FBTkEsS0FBWUksRUFBRSxPQUFkSixHQUFjLENBQWRBO0FBQ0E7O0FBRUQ7QUFaRDs7QUFlQWxCLEdBQUMsQ0FBREEsY0FoQkQsSUFnQkNBLENBaEJELENBaUJDOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBSXhCYyxnQkFDZixDQUVDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIRDs7QUFFZSxxQkFDZjtBQUFBOztBQUNDLE1BQUlBLENBQUMsR0FBRyxTQUFKQSxDQUFJLEdBQU07QUFFYixRQUFHN0IsVUFBUyxDQUFUQSxlQUFILEdBQStCO0FBQzlCLFlBQU0sVUFBTixnQ0FBTSxDQUFOO0FBQ0E7O0FBRUQsUUFBSStDLE1BQU0sR0FORyxFQU1iLENBTmEsQ0FRYjs7QUFDQSxRQUFJZ0QsYUFBYSxHQUFqQjs7QUFDQSxTQUFLLElBQUloRyxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR0MsVUFBUyxDQUE3QixRQUFzQ0QsQ0FBQyxJQUF2QyxHQUE4QztBQUM3QyxVQUFJa0QsU0FBUyxHQUFHakQsVUFBUyxDQUF6QixDQUF5QixDQUF6QjtBQUNBLFVBQUkyRCxJQUFJLEdBQUczRCxVQUFTLENBQUNELENBQUMsR0FBdEIsQ0FBb0IsQ0FBcEI7QUFDQSxVQUFJb0IsS0FBSyxHQUFHbkIsVUFBUyxDQUFDRCxDQUFDLEdBQXZCLENBQXFCLENBQXJCO0FBQ0EsVUFBSTZELElBQUksR0FBUjtBQUVBbUMsbUJBQWEsSUFBYkE7O0FBRUEsVUFBRyxxQkFBSCxZQUFvQztBQUNuQyxZQUFHOUMsU0FBSCxJQUFnQjtBQUNmVyxjQUFJLEdBQUpBO0FBQ0E7QUFIRixhQUlPO0FBQ04sdUJBQWM7QUFDYkEsY0FBSSxHQUFKQTtBQUNBO0FBZjJDLFFBa0I3QztBQUNBO0FBQ0E7OztBQUNBLFVBQUdBLElBQUksS0FBUCxNQUFrQjtBQUNqQixhQUFLLElBQUl6RCxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBakIsTUFBMEJBLENBQTFCLElBQStCO0FBQzlCNEMsZ0JBQU0sQ0FBTkEsS0FBWWMsUUFBUSxDQUFSQSxjQUFaZCxFQUFZYyxDQUFaZDtBQUNBOztBQUNEO0FBQ0E7O0FBRUQsVUFBRyxDQUFDYSxJQUFJLENBQVIsYUFBc0I7QUFDckJBLFlBQUksR0FBR0EsSUFBSSxDQUFDbkMsV0FBWm1DLENBQVcsQ0FBWEE7QUE3QjRDLFFBK0I3QztBQUNBOzs7QUFDQSxVQUFHRCxJQUFJLEdBQVAsR0FBYTtBQUNaLGFBQUssSUFBSXhELENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFqQixNQUEwQkEsQ0FBMUIsSUFBK0I7QUFDOUI7QUFDQzRDLGdCQUFNLENBQU5BLEtBQVlhLElBQUksQ0FGYSxDQUViLENBQWhCYixFQUY2QixDQUc5QjtBQUNBO0FBQ0E7QUFDQTtBQVBGLGFBUU87QUFDTkEsY0FBTSxDQUFOQTtBQUNBO0FBckRXLE1Bd0RiOzs7QUFDQTtBQUVBLFdBQU87QUFDTmlELFdBQUssRUFEQztBQUVOckMsVUFBSSxFQUFFb0M7QUFGQSxLQUFQO0FBM0REOztBQWlFQWxFLEdBQUMsQ0FBREE7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCTnhFRDs7QUFDQSxJQUFJb0UsaUJBQWlCLEdBQXJCOztBQUVBLHlDQUNBO0FBQ0MsTUFBR3ZELFNBQVMsQ0FBWixhQUEwQjtBQUN6QjtBQUNBOztBQUVELFNBQU8sSUFBUCxTQUFPLEVBQVA7QUFDQTs7SUFHS1AsTztBQUdMLHFCQUNBO0FBQ0M7QUFDQTtBQUNBO0FBRUQ7Ozs7Ozs7U0FHQStELFMsR0FBQUEsMEJBQ0E7QUFDQyxvQkFBZ0Isb0JBQWhCO0FBQ0EsV0FBTyxLQUFQOzs7U0FHREMsUSxHQUFBQSxvQkFDQTtBQUNDO0FBQ0E7QUFDRDs7Ozs7O1NBSUFDLGlCLEdBQUFBLDRDQUNBO0FBQUEsUUFEd0IxRCxTQUN4QjtBQUR3QkEsZUFDeEIsR0FEb0MsSUFBWkE7QUFDeEI7O0FBQ0MsUUFBR0EsU0FBUyxJQUFaLE1BQXNCO0FBQ3JCQSxlQUFTLEdBQVRBO0FBQ0E7O0FBRUQzQixRQUFJLEdBQUcyQixTQUFTLENBQVRBLHlCQUFQM0IsV0FBTzJCLEVBQVAzQjtBQUVBOzs7U0FHRHNGLFksR0FBQUEsaUNBQ0E7QUFDQyxXQUFPLEVBQUUsT0FBTyxnQkFBUCxTQUFPLENBQVAsS0FBVCxXQUFPLENBQVA7OztTQUdEQyxtQixHQUFBQSw4Q0FDQTtBQUNDLFFBQUcsQ0FBQyxrQkFBSixTQUFJLENBQUosRUFBa0M7QUFDakMsWUFBTSx1Q0FBTix1QkFBTSxDQUFOO0FBRkYsTUFLQzs7O0FBQ0EsUUFBRyx3REFBd0Q5RCxJQUFJLENBQS9ELFFBQXdFO0FBQ3ZFLGFBQU8rRCxvQkFBb0IsQ0FBQyxnQkFBNUIsU0FBNEIsQ0FBRCxDQUEzQjtBQURELFdBRU87QUFDTjtBQUNBOzs7U0FHRkMsWSxHQUFBQSxpQ0FDQTtBQUNDLFFBQUcsQ0FBQyxrQkFBSixTQUFJLENBQUosRUFBa0M7QUFDakMsWUFBTSx1Q0FBTix1QkFBTSxDQUFOO0FBQ0E7O0FBRUQsV0FBT0Qsb0JBQW9CLENBQUMsZ0JBQTVCLFNBQTRCLENBQUQsQ0FBM0I7Ozs7OztlQU9hLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWxGUiw0Q0FDUDtBQUNDLE1BQUc3RCxTQUFTLFlBQVosU0FBaUM7QUFDaENBLGFBQVMsQ0FBVEEsS0FBZSxrQkFBWTtBQUMxQitDLGNBQVEsQ0FBQyxJQUFJZ0IsTUFBTSxDQUFuQmhCLE9BQVMsRUFBRCxDQUFSQTtBQUREL0M7QUFERCxTQUlPO0FBQ04rQyxZQUFRLENBQUMsSUFBVEEsU0FBUyxFQUFELENBQVJBO0FBQ0E7QUFFRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVkQ7O0FBR2UsOERBQXVFO0FBQUEsTUFBM0NELGFBQTJDO0FBQTNDQSxpQkFBMkMsR0FBM0IseUJBQU0sQ0FBcUIsQ0FBM0NBO0FBQTJDOztBQUFBLE1BQWpCQyxRQUFpQjtBQUFqQkEsWUFBaUIsR0FBTixJQUFYQTtBQUFpQjs7QUFFbEZpQixRQUFNLENBQU5BO0FBRUEsc0NBQXlCLG9CQUFjO0FBRXRDbEIsaUJBQWEsQ0FBYkEsUUFBYSxDQUFiQTtBQUVIa0IsVUFBTSxDQUFOQSxPQUFjWixRQUFRLENBQXRCWSxNQUFjWixFQUFkWTtBQUNBWixZQUFRLENBQVJBOztBQUVBLGtCQUFhO0FBQ1pMLGNBQVEsQ0FBUkEsUUFBUSxDQUFSQTtBQUNBOztBQUVERCxpQkFBYSxDQUFiQSxRQUFhLENBQWJBO0FBRUE7QUFiRTtBQWVILEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FTckJELEVBQXdEOztBQUV4RCxFQUE2Qzs7QUFFN0M7QUFDQSxjQUFjO0FBQ2QsR0FBRyxFQUFFLDhEQUFlOztBQUVwQjtBQUNBLEdBQUcsd0RBQUs7QUFDUjs7QUFFQTtBQUNBLHFDQUFxQyx3REFBSzs7QUFFMUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhDQUE4Qyx1REFBdUQ7QUFDckcsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEMsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQWlCLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMzRjFCO0FBQWU7QUFDZjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQSxVQUFVO0FBQ1YsS0FBSztBQUNMLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7OztBQy9CRDs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7OztBQUpBO0FBQ0E7QUFNQTtBQUdBLElBQUltQixNQUFKO0FBQ0EsSUFBSUMsU0FBSixFQUFlQyxVQUFmOztBQUVBLFNBQVNDLGtCQUFULEdBQ0E7QUFDQyxxQkFBYyxXQUFkLEVBREQsQ0FFQztBQUNBOztBQUNBM0UsYUFBUWlFLGlCQUFSLENBQTBCVyxnQkFBMUI7O0FBQ0EscUJBQWMsV0FBZDtBQUNBLEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0MsV0FBVCxHQUNBO0FBQ0MsdUJBQU9DLGNBQVAsRUFBa0JOLE1BQWxCLEVBQTBCbkIsYUFBMUIsRUFBeUMsVUFBQzFELENBQUQsRUFBTztBQUMvQzhFLGFBQVMsR0FBRzlFLENBQVo7QUFDQSxHQUZEO0FBR0E7O0FBRUQsU0FBU29GLFdBQVQsR0FDQTtBQUVDLE1BQUlDLElBQUksR0FBR1IsTUFBTSxDQUFDUyxTQUFsQjtBQUNBVCxRQUFNLENBQUNTLFNBQVAsR0FBbUJELElBQW5CO0FBQ0FQLFdBQVMsQ0FBQ1MsSUFBVixDQUFlLFdBQWY7QUFDQTs7QUFFRCxTQUFTQyxZQUFULEdBQ0E7QUFDQywwQkFBUUwsY0FBUixFQUFtQk4sTUFBbkIsRUFBMkJuQixhQUEzQjtBQUNBOztBQUVEc0Isa0JBQWtCLEcsQ0FFbEI7QUFFQTs7QUFDQSxDQUFDLFNBQVNTLElBQVQsR0FBZ0I7QUFDaEJaLFFBQU0sR0FBRzlDLFFBQVEsQ0FBQzJELGNBQVQsQ0FBd0IsUUFBeEIsQ0FBVCxDQURnQixDQUloQjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0M7QUFDRDs7QUFFQVIsYUFBVyxHQWJLLENBY2hCO0FBQ0E7O0FBRUFTLFlBQVUsQ0FBQyxZQUFNO0FBRWhCUCxlQUFXO0FBRVhPLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZILGtCQUFZO0FBQ2IsS0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdBLEdBUFMsRUFPUCxJQVBPLENBQVY7QUFRQSxDQXpCRCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREEsSUFBSUksS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBU0MsSUFBVCxDQUFjNUcsSUFBZCxFQUNmO0FBQ0MsTUFBSTZHLEdBQUcsR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0osS0FBSyxDQUFDM0csSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDMkcsU0FBSyxDQUFDM0csSUFBRCxDQUFMLEdBQWM2RyxHQUFkO0FBQ0EsV0FBT0YsS0FBSyxDQUFDM0csSUFBRCxDQUFaO0FBQ0E7O0FBRURpRCxTQUFPLENBQUMrRCxHQUFSLFdBQW9CaEgsSUFBcEIsU0FBOEI2RyxHQUFHLEdBQUdGLEtBQUssQ0FBQzNHLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPMkcsS0FBSyxDQUFDM0csSUFBRCxDQUFaO0FBQ0EsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXHRcdGltcG9ydCBjb21wb25lbnRDb25maWcgZnJvbSBcIi4vc2J1dHRvbi5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCBkeW5hbWljIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcbmltcG9ydCB7IHN0YXRlbWVudCwgbG9vcCwgc2xvdCwgaCB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBzdGF0ZW1lbnQgYXMgaFN0YXRlbWVudCwgbG9vcCBhcyBoTG9vcCwgc2xvdCBhcyBoU2xvdCB9IGZyb20gJ0BzaW51b3VzL2h5ZHJhdGlvbic7XG5cblx0XHRcblx0XHRsZXQgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRtZXRob2RzOiB7fSxcblx0XHR9LCBjb21wb25lbnRDb25maWcpO1xuXG5cdFx0bGV0IGluc3RhbmNlID0gZnVuY3Rpb24gU2J1dHRvbihwYXJlbnQsIGN0eCkge1xuXHRcdFx0XG5cdFx0fTtcblxuXHRcdGluc3RhbmNlLl9mdW5jdGlvbmFsID0gdHJ1ZTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnU2J1dHRvbic7XG5cdFx0aW5zdGFuY2UuX3Nsb3RzRGF0YSA9IHtcImRlZmF1bHRcIjp7XCJwYXRoXCI6WzAsMF0sXCJ0YWdcIjpcInNwYW5cIixcImluZGV4XCI6MH19O1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlW2tleV0gPSBjb25maWcubWV0aG9kc1trZXldXG5cdFx0fVxuXHRcblxuXHRcdFxuXHRcdFx0aW5zdGFuY2UucmVuZGVyID0gZnVuY3Rpb24oY3R4KSB7XG5cdFx0XHRcdHJldHVybiBoKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsIG9uY2xpY2s6IGN0eC5jbGljayB9LCBbXG4gIHNsb3QoY3R4LCBoLCBcImRlZmF1bHRcIiwgXCJzcGFuXCIsIHt9LCBbYERlZmF1bHQgYnV0dG9uIHRleHRgXSksXG5dKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLmh5ZHJhdGUgPSBmdW5jdGlvbihjdHgsIGgpIHtcblx0XHRcdFx0Y3R4LmNsaWNrID0gdGhpcy5jbGljaztcblxuXHRcdFx0XHRsZXQgc3RhdGVtZW50ID0gaFN0YXRlbWVudDtcblx0XHRcdFx0bGV0IGxvb3AgPSBoTG9vcDtcblx0XHRcdFx0bGV0IHNsb3QgPSBoU2xvdDtcblx0XHRcdFx0cmV0dXJuIHtcbiAgX3Q6IFwiaFwiLFxuICB0OiBcImRpdlwiLFxuICBvOiB7IG9uY2xpY2s6IGN0eC5jbGljaywgX3M6IHRydWUgfSxcbiAgYzogWy0xXSxcbn07XG47XG5cdFx0XHR9XG5cdFx0XG5cblx0XHRleHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcblx0IiwiZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICBzdGF0ZShvKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIGNvbXB1dGVkKG8pIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhbGVydCgxKTtcbiAgICB9XG4gIH1cbn07IiwiZXhwb3J0IGNvbnN0IF8gPSAtMTtcbiIsImltcG9ydCB2YWx1ZSBmcm9tICcuL3ZhbHVlJztcblxuXG5mdW5jdGlvbiBjYW1lbFRvUHJvcChzKVxue1xuXHRyZXR1cm4gc1xuXHRcdC5yZXBsYWNlKC9cXC4/KFtBLVpdKykvZywgKHgsIHkpID0+IGAtJHt5LnRvTG93ZXJDYXNlKCl9YClcblx0XHQucmVwbGFjZSgvXi0vLCAnJyk7XG59XG5cbmZ1bmN0aW9uIG9ubHlVbmlxdWUodmFsdWUsIGluZGV4LCBzZWxmKSB7IFxuICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNsYXNzT2JqZWN0KG9iailcbntcblx0bGV0IGNsYXNzZXMgPSBbXTtcblxuXHRmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG5cdFx0aWYodmFsdWUob2JqW2tleV0pKSB7XG5cdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzZXMoc3RhdGljQ2xhc3NlcyA9IFtdLCBkeW5hbWljID0ge30pXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0XG5cdFx0XHRpZihBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBhcmcubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2godmFsdWUoYXJnW2pdKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgYXJnID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQoXG5cdFx0XHRcdFx0aGFuZGxlQ2xhc3NPYmplY3QoYXJnKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KFxuXHRcdFx0XHRcdGhhbmRsZUNsYXNzT2JqZWN0KHZhbHVlKGFyZykpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzc2VzID0gY2xhc3Nlcy5maWx0ZXIoKHYsIGksIGEpID0+IGEuaW5kZXhPZih2KSA9PT0gaSk7XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVN0eWxlc09iamVjdChzdHlsZXMsIG9iailcbntcblx0Zm9yIChsZXQga2V5IGluIG9iaikge1xuXHRcdGxldCB2YWwgPSB2YWx1ZShvYmpba2V5XSk7XG5cdFx0aWYodmFsICE9PSBudWxsKSB7XG5cdFx0XHRzdHlsZXNbY2FtZWxUb1Byb3Aoa2V5KV0gPSB2YWw7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlcygpXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IHN0eWxlcyA9IHt9O1xuXHRcdFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCBhcmd1bWVudHNbaV0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCB2YWx1ZShhcmd1bWVudHNbaV0pKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzdHlsZXM7XG5cdH1cbn0iLCJpbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcbmltcG9ydCB7IF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlci9zcmMvZW1wdHknO1xuXG5cbmltcG9ydCB7IGh5ZHJhdGUsIGRodG1sIH0gZnJvbSAnc2ludW91cy9oeWRyYXRlJztcblxuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQgfSBmcm9tICcuL29ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBsb29wIGFzIGhMb29wLCBzbG90IGFzIGhTbG90LCBzdGF0ZW1lbnQgYXMgaFN0YXRlbWVudCB9IGZyb20gJ0BzaW51b3VzL2h5ZHJhdGlvbic7XG5pbXBvcnQgeyBzdHlsZXMsIGNsYXNzZXMsIHN0YXRlbWVudCwgZHluYW1pYywgbG9vcCwgc2xvdCB9IGZyb20gJy4vaW5kZXgnO1xuXG5pbXBvcnQgeyBoIH0gZnJvbSAnLi8nO1xuXG4vLyBpbXBvcnQgeyByZW5kZXIsIGh5ZHJhdGUgfSBmcm9tICcuL3RlbXBsYXRlJztcbmxldCBISUQgPSAwO1xuXG5cbnZhciBCYXNpYyA9IGZ1bmN0aW9uICgpIHtcblxuXHRmdW5jdGlvbiBCYXNpYygpXG5cdHtcblx0XHR0aGlzLl9pc0NvbXBvbmVudCA9IHRydWU7XG5cdFx0dGhpcy5oaWQgPSArK0hJRDtcblxuXHRcdHRoaXMuX3Byb3BzID0gdGhpcy5wcm9wcygpO1xuXHRcdHRoaXMuX3Bhc3NlZFByb3BzID0ge307XG5cblx0XHQvLyBMb2NhbCBkYXRhXG5cdFx0dGhpcy5fZGF0YSA9IHRoaXMuZGF0YSgpO1xuXHRcdC8vIFN0YXRlZnVsIGRhdGFcblx0XHR0aGlzLl9zdGF0ZSA9IHRoaXMuc3RhdGUob2JzZXJ2YWJsZSk7XG5cblx0XHR0aGlzLl9zbG90cyA9IHtcblx0XHRcdGRlZmF1bHQ6IFtdLFxuXHRcdH07XG5cblx0XHR0aGlzLl9jb21wdXRlZCA9IHRoaXMuY29tcHV0ZWQoY29tcHV0ZWQpO1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gW107XG5cdFx0dGhpcy5fZWxfaW5kZXggPSAwO1xuXG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblxuXHRcdC8vIERlZmF1bHQgcHJvcCB2YWx1ZXMgXG5cdFx0dGhpcy5pbml0UHJvcHMoKTtcblxuXHRcdC8vIHRoaXMuaW5pdFRlbXBsYXRlKCk7XG5cblx0XHR0aGlzLnNldENoaWxkcmVuKCk7XG5cdFx0dGhpcy5zZXRQYXJlbnQoKTtcblxuXHRcdHRoaXMuYmluZENvbnRleHQoKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmJpbmRDb250ZXh0ID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fY29tcHV0ZWQpIHtcblx0XHRcdHRoaXMuX2NvbXB1dGVkW2tleV0gPSB0aGlzLl9jb21wdXRlZFtrZXldLmJpbmQodGhpcyk7XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fbWV0aG9kcykge1xuXHRcdFx0bGV0IG5hbWUgPSB0aGlzLl9tZXRob2RzW2tleV07XG5cdFx0XHR0aGlzW25hbWVdID0gdGhpc1tuYW1lXS5iaW5kKHRoaXMpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQ29uZmlnXG5cdCAqL1xuXG5cdC8vIEJhc2ljLnByb3RvdHlwZS5zZXRNZXRob2RzID0gZnVuY3Rpb24obWV0aG9kcyA9IHt9KVxuXHQvLyB7XG5cdC8vIFx0dGhpcy5fbWV0aG9kcyA9IG1ldGhvZHM7XG5cdC8vIH1cblxuXHQvKipcblx0ICogSGllcmFyY2h5XG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5zZXRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkcmVuID0gW10pXG5cdHtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuYWRkQ2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZClcblx0e1xuXHRcdHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuc2V0UGFyZW50ID0gZnVuY3Rpb24ocGFyZW50ID0gbnVsbClcblx0e1xuXHRcdHRoaXMuX3BhcmVudCA9IHBhcmVudDtcblx0fVxuXHQvKipcblx0ICogUHJvcHNcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnByb3BzID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaW5pdFByb3BzID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fcHJvcHMpXG5cdFx0e1xuXHRcdFx0bGV0IHByb3AgPSB0aGlzLl9wcm9wc1trZXldO1xuXHRcdFx0bGV0IHZhbHVlID0gbnVsbDtcblx0XHRcdGxldCB0eXBlID0gbnVsbDtcblxuXHRcdFx0aWYodHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Ly8gdHlwZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWUgPSBwcm9wLmRlZmF1bHQoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fZGF0YVtrZXldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc1Nsb3RzID0gZnVuY3Rpb24obmFtZSwgc2xvdHMpXG5cdHtcblx0XHR0aGlzLl9zbG90c1tuYW1lXSA9IHNsb3RzO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc1Byb3BzID0gZnVuY3Rpb24ocHJvcHMpXG5cdHtcblx0XHQvLyBpZih0eXBlb2YgdGhpcy5fcGFzc2VkUHJvcHNbY29tcG9uZW50LmhpZF0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0Ly8gXHR0aGlzLl9wYXNzZWRQcm9wc1tjb21wb25lbnQuaGlkXSA9IHt9O1xuXHRcdC8vIH1cblxuXHRcdGZvcihsZXQga2V5IGluIHByb3BzKVxuXHRcdHtcblx0XHRcdGlmKHByb3BzW2tleV0uX29ic2VydmFibGUpIHtcblx0XHRcdFx0dGhpcy5faXNTdGF0ZWZ1bCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2RhdGFba2V5XSA9IHByb3BzW2tleV07XG5cdFx0XHQvLyBpZih0eXBlb2YgdGhpcy5fZGF0YVtrZXldICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Ly8gXHR0aHJvdyBuZXcgRXJyb3IoYFtTaW51b3VzXSBDb21wb25lbnQgJHsgdGhpcy5uYW1lIH0gYWxyZWFkeSBoYXMgJHsga2V5IH0gcHJvcGVydHlgKVxuXHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdC8vIFx0dGhpcy5fZGF0YVtrZXldID0gcHJvcHNba2V5XTtcblx0XHRcdC8vIH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xpZW50IHNpZGUgaGFuZGxlciBhZnRlciBTU1IgKGh5ZHJhdGlvbilcblx0ICovXG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaGFzU3RhdGVmdWxsRGF0YSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGxldCBzdGF0ZWZ1bCA9IGZhbHNlO1xuXG5cdFx0Zm9yKGxldCBoaWQgaW4gdGhpcy5fcGFzc2VkUHJvcHMpIHtcblx0XHRcdGZvcihsZXQga2V5IGluIHRoaXMuX3Bhc3NlZFByb3BzW2hpZF0pIHtcblx0XHRcdFx0aWYodGhpcy5fcGFzc2VkUHJvcHNbaGlkXVtrZXldKSB7XG5cdFx0XHRcdFx0c3RhdGVmdWwgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKHN0YXRlZnVsKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZWZ1bCAmJiB0aGlzLl9pc1N0YXRlZnVsO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaGFzU3RhdGVsZXNzRGF0YSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9kYXRhKS5sZW5ndGggPiAwO1xuXHR9XG5cblx0LyoqXG5cdCAqIExvY2FsIGNvbXBvbmVudCBkYXRhXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuY29tcHV0ZWQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHQvKipcblx0ICogU3RhdGVmdWwgZGF0YVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuc3RhdGUgPSBmdW5jdGlvbihvKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIDEuIENyZWF0ZSBjaGlsZCBjb21wb25lbnRzIChkaWZmZXJlbnQgY29udGV4dClcblx0ICogMi4gUGFzcyBwcm9wc1xuXHQgKiAzLiBSZW5kZXJcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24oKSB7fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5jaGlsZENvbXBvbmVudHMgPSBmdW5jdGlvbigpIHt9XG5cblx0LyoqXG5cdCAqICBMaWZlIGN5Y2xlIGhvb2tzXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuaG9vayA9IGZ1bmN0aW9uKHR5cGUgPSAnbW91bnRlZCcpXG5cdHtcblx0XHRpZih0aGlzW3R5cGVdKSB7XG5cdFx0XHR0aGlzW3R5cGVdLmNhbGwodGhpcyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodGhpcy5fY2hpbGRyZW5baV0gPT09IF8pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKCF0aGlzLl9jaGlsZHJlbltpXS5fZnVuY3Rpb25hbCkge1xuXHRcdFx0XHR0aGlzLl9jaGlsZHJlbltpXS5ob29rKHR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLm1vdW50ZWQgPSBmdW5jdGlvbigpIHt9XG5cblx0QmFzaWMucHJvdG90eXBlLnVubW91bnRlZCA9IGZ1bmN0aW9uKCkge31cblxuXHQvKipcblx0ICogUHJpdmF0ZSBBUEkgZm9yIHJlbmRlciBhbmQgaHlkcmF0ZVxuXHQgKiBAdHlwZSB7W3R5cGVdfVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oY3R4ID0gbnVsbClcblx0e1xuXHRcdGlmKGN0eCA9PT0gbnVsbCkge1xuXHRcdFx0Y3R4ID0gdGhpcztcblx0XHR9XG5cblx0XHRoLmJpbmQoY3R4KTtcblxuXHRcdHJldHVybiBjdHguX19yZW5kZXIoaC5iaW5kKGN0eCksIHtcblx0XHRcdGN0eCxcblx0XHRcdHN0YXRlbWVudCxcblx0XHRcdGxvb3AsXG5cdFx0XHRzbG90LFxuXHRcdFx0ZDogZHluYW1pYyxcblx0XHRcdGM6IGNvbXB1dGVkLFxuXHRcdH0pO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaHlkcmF0ZSA9IGZ1bmN0aW9uKGN0eCA9IG51bGwsIGNvbXBpbGVyID0gbnVsbClcblx0e1xuXHRcdGlmKGN0eCA9PT0gbnVsbCkge1xuXHRcdFx0Y3R4ID0gdGhpcztcblx0XHR9XG5cblx0XHRyZXR1cm4gY3R4Ll9faHlkcmF0ZShjb21waWxlciwge1xuXHRcdFx0Y3R4LFxuXHRcdFx0c3RhdGVtZW50OiBoU3RhdGVtZW50LFxuXHRcdFx0c2xvdDogaFNsb3QsXG5cdFx0XHRsb29wOiBoTG9vcCxcblx0XHRcdGQ6IGR5bmFtaWMsXG5cdFx0XHRjOiBjb21wdXRlZCxcblx0XHR9KTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblxuXHQvLyBCYXNpYy5wcm90b3R5cGUudGVtcGxhdGVCdWlsZGVyID0gZnVuY3Rpb24oaCwgb3B0cylcblx0Ly8ge1xuXHQvLyBcdHJldHVybiB0aGlzW2BfXyR7IG9wdHMucmVuZGVyIH1gXShoLCBvcHRzKTtcblx0Ly8gfVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmNvbXBvbmVudCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLmdldFVJRCA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0cmV0dXJuIGBoeWRyLSR7IFNpbnVvdXMuY3JlYXRlSElEKGluZGV4KSB9YDtcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKFwibmFtZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTsgfSk7XG5cblx0cmV0dXJuIEJhc2ljO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNpYztcbiIsImltcG9ydCB7IGgsIGhzLCBhcGkgfSBmcm9tICdzaW51b3VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYyhoLCB0YWcsIG9wdHMsIGNoaWxkcmVuKVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBlbCA9IHRhZygpO1xuXHRcdHJldHVybiBoKGVsLCBvcHRzLCBjaGlsZHJlbik7XG5cdH07XG5cbn0iLCJpbXBvcnQgeyBoIGFzIGhzIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcbmltcG9ydCB7IHN0eWxlcywgY2xhc3Nlcywgb3B0aW9ucywgIH0gZnJvbSAnLi8nO1xuaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5cbmxldCBIVE1MVGFncyA9IFtcblx0J2knLCAnZGl2JywgJ3NwYW4nLCAnaHInLCAnYnInLCAnc3Ryb25nJywgJ3ByZSdcbl07XG5cblxuZnVuY3Rpb24gcmVnaXN0ZXJDaGlsZHJlbihwYXJlbnQsIGNoaWxkKVxue1xuXHRwYXJlbnQuYWRkQ2hpbGRyZW4oY2hpbGQpO1xuXHRpZihjaGlsZC5zZXRQYXJlbnQpIHtcblx0XHRjaGlsZC5zZXRQYXJlbnQocGFyZW50KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG57XG5cdGVsID0gZWwudG9Mb3dlckNhc2UoKTtcblx0Ly8gZWwgPSBjb21wdXRlZCgoKSA9PiAodHlwZW9mIGVsID09PSAnZnVuY3Rpb24nID8gZWwgOiBlbCkpO1xuXG5cdC8vIGNvbnNvbGUubG9nKCdbIEZGIF0nLCBlbCwgdGhpcylcblx0bGV0IGR5bmFtaWNBdHRycyA9IGZhbHNlO1xuXG5cdG9wdGlvbnModGhpcywgb3B0cyk7XG5cblx0Ly8gSWYgSFRNTCB0YWcgcmVuZGVyXG5cdGlmKEhUTUxUYWdzLmluY2x1ZGVzKGVsKSkge1xuXHRcdHJldHVybiBocyhlbCwgb3B0cywgY2hpbGRyZW4pO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0Q29tcG9uZW50KGVsKTtcblxuXHRyZWdpc3RlckNoaWxkcmVuKHRoaXMsIGNvbXBvbmVudCk7XG5cblx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudC5yZW5kZXIoe1xuXHRcdFx0Z2V0VUlEKCkge1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9LFxuXHRcdFx0X3Nsb3RzOiBvcHRzLiRzbG90cyxcblx0XHR9KTtcblx0fVxuXG5cdGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG5cdH1cblxuXHRmb3IobGV0IGtleSBpbiBvcHRzLiRzbG90cykge1xuXHRcdGNvbXBvbmVudC5wYXNzU2xvdHMoa2V5LCBvcHRzLiRzbG90c1trZXldKTtcdFxuXHR9XG5cblx0cmV0dXJuIGNvbXBvbmVudC5yZW5kZXIoKTtcbn0iLCJpbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnQHNpbnVvdXMvbGF6eSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29tcG9uZW50LCBsYXlvdXQsIHRpbWVCZW5jaG1hcmsgPSAoKSA9PiB7fSwgY2FsbGJhY2sgPSBudWxsKSB7XG5cbiAgICBsYXlvdXQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgKGluc3RhbmNlKSA9PiB7XG5cbiAgICBcdHRpbWVCZW5jaG1hcmsoJ1JlbmRlcicpO1xuXG5cdFx0bGF5b3V0LmFwcGVuZChpbnN0YW5jZS5yZW5kZXIoKSk7XG5cdFx0aW5zdGFuY2UuaG9vaygnbW91bnRlZCcpO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHR0aW1lQmVuY2htYXJrKCdSZW5kZXInKTtcblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fSk7XG59IiwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9vcChjb25kaXRpb24sIGZuKVxue1xuXHRsZXQgZCA9ICgpID0+IHtcblxuXHRcdGxldCByZXN1bHQgPSBbXTtcblxuXHRcdGxldCBsb29wX2NvbmRpdGlvbiA9IHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicgPyBjb25kaXRpb24oKSA6IGNvbmRpdGlvbjtcblxuXHRcdGZvcihsZXQga2V5IGluIGxvb3BfY29uZGl0aW9uKVxuXHRcdHtcblx0XHRcdGxldCBpdGVtID0gbG9vcF9jb25kaXRpb25ba2V5XTtcblx0XHRcdHJlc3VsdC5wdXNoKGZuKGl0ZW0sIGtleSkpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZC5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cdC8vIGQuX25vZGUgPSB0cnVlO1xuXG5cdHJldHVybiBkO1xufSIsImltcG9ydCB7IG9ic2VydmFibGUgYXMgc2ludW91c09ic2VydmFibGUsIGNvbXB1dGVkIGFzIHNpbnVvdXNDb21wdXRlZCB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlT2JzZWVydmFibGUoZm4pXG57XG5cdGZuLl9vYnNlcnZhYmxlID0gdHJ1ZTtcblx0cmV0dXJuIGZuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQodiwgYmluZGluZyA9IGZhbHNlKSB7XG5cblx0bGV0IGQ7XG5cdFxuXHRpZihiaW5kaW5nKSB7XG5cdFx0ZCA9IHNpbnVvdXNDb21wdXRlZCh2LmJpbmQodGhpcykpO1xuXHR9IGVsc2Uge1xuXHRcdGQgPSBzaW51b3VzQ29tcHV0ZWQodik7XG5cdH1cblxuXHRtYWtlT2JzZWVydmFibGUoZCk7XG5cblx0cmV0dXJuIGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZhYmxlKHYsIGJpbmRpbmcgPSBmYWxzZSlcbntcblx0bGV0IGQgPSBzaW51b3VzT2JzZXJ2YWJsZSh2KTtcblxuXHRcblx0bWFrZU9ic2VlcnZhYmxlKGQpO1xuXG5cdHJldHVybiBkO1xufSIsImltcG9ydCB7IHN0eWxlcywgY2xhc3NlcywgIH0gZnJvbSAnLi8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcHRpb25zKGNvbnRleHQsIG9wdHMpXG57XG5cdGxldCBzaG91bGRIYW5kbGUgPSB7XG5cdFx0c3R5bGVzOiBmYWxzZSxcblx0fTtcblxuXHRpZighb3B0cy5zdGF0aWNTdHlsZSkge1xuXHRcdG9wdHMuc3RhdGljU3R5bGUgPSB7fTtcblx0fSBlbHNlIHtcblx0XHRzaG91bGRIYW5kbGUuc3R5bGVzID0gdHJ1ZTtcblx0fVxuXG5cdGlmKCFvcHRzLmR5bmFtaWNTdHlsZSkge1xuXHRcdG9wdHMuZHluYW1pY1N0eWxlID0gW107XG5cdH0gZWxzZSB7XG5cdFx0c2hvdWxkSGFuZGxlLnN0eWxlcyA9IHRydWU7XG5cdH1cblxuXHRpZihzaG91bGRIYW5kbGUuc3R5bGVzKSB7XG5cdFx0b3B0cy5zdHlsZSA9IHN0eWxlcy5hcHBseShjb250ZXh0LCBbb3B0cy5zdGF0aWNTdHlsZV0uY29uY2F0KG9wdHMuZHluYW1pY1N0eWxlKSlcblx0fVxuXG5cdC8vIGNvbnNvbGUud2Fybihjb250ZXh0LCBvcHRzKVxuXHQvKipcblx0ICogQ2xlYXJcblx0ICovXG5cdGlmKCFzaG91bGRIYW5kbGUuc3R5bGVzKSB7XG5cdFx0ZGVsZXRlIG9wdHMuc3RhdGljU3R5bGU7XG5cdFx0ZGVsZXRlIG9wdHMuZHluYW1pY1N0eWxlO1xuXHR9XG5cblx0cmV0dXJuIG9wdHM7XG59Iiwid2luZG93Ll9TaW51b3VzQ29tcG9uZW50cyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlcihuYW1lLCBjb21wb25lbnQgPSBudWxsKVxue1xuXHRpZihjb21wb25lbnQgPT0gbnVsbCkge1xuXHRcdGNvbXBvbmVudCA9IG5hbWU7XG5cdFx0bmFtZSA9IG5hbWUubmFtZTtcblx0fVxuXG5cdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0d2luZG93Ll9TaW51b3VzQ29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbG90KClcbntcblx0XG59IiwiaW1wb3J0IHsgaCB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlbWVudCgpXG57XG5cdGxldCBkID0gKCkgPT4ge1xuXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCAlIDMgIT09IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU3RhdGVtZW50IHNob3VsZCBiZSBvZGQgbnVtYmVyJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xuXG5cdFx0Ly8gdmFsdWVcblx0XHRsZXQgc3RhdGVtZW50U2l6ZSA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRsZXQgc2l6ZSA9IGFyZ3VtZW50c1tpICsgMV07XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaSArIDJdO1xuXHRcdFx0bGV0IG5vZGUgPSBudWxsO1xuXG5cdFx0XHRzdGF0ZW1lbnRTaXplICs9IHNpemU7XG5cblx0XHRcdGlmKHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aWYoY29uZGl0aW9uKCkpIHtcblx0XHRcdFx0XHRub2RlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKGNvbmRpdGlvbikge1xuXHRcdFx0XHRcdG5vZGUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb25zb2xlLndhcm4oaSwgc2l6ZSwgbm9kZSk7XG5cdFx0XHQvLyBQYXNzIGZhaWxlZCBzdGV0ZW1lbnQgY29uZGl0aW9uXG5cdFx0XHQvLyBOb3JtaWxpemUgaW5kZXggdGhhdCB3aWxsIGJlIHVzZWQgaW4gcmVwbGFjaW5nIHBsYWNlaG9sZGVyIChiZWxvdylcblx0XHRcdGlmKG5vZGUgPT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFub2RlLl9vYnNlcnZhYmxlKSB7XG5cdFx0XHRcdG5vZGUgPSBub2RlKGgpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gcmVwbGFjZSBwbGFjZWhvbGRlciB3aXRoIG5vZGVcblx0XHRcdC8vIEFuZCBjb3JyZWN0IGluZGV4XG5cdFx0XHRpZihzaXplID4gMSkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdC8vIGlmKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGVbal0pO1xuXHRcdFx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gXHRyZXN1bHQucHVzaChqID09IDAgPyBub2RlIDogLTEpO1xuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcblx0XHRyZXR1cm4ge1xuXHRcdFx0bm9kZXM6IHJlc3VsdCxcblx0XHRcdHNpemU6IHN0YXRlbWVudFNpemUsXG5cdFx0fTtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXG5cdHJldHVybiBkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbHVlKHZhbHVlKVxue1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gdmFsdWUoKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn0iLCJpbXBvcnQgeyBoLCBocywgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnQHNpbnVvdXMvY29tcGlsZXIvc3JjL2VtcHR5JztcbmltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnQHNpbnVvdXMvbGF6eSc7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5cbmxldCBPQlNFUlZFUjtcbmxldCBTVE9SQUdFID0ge307XG5cbmxldCBTVUJTQ1JJQkVSUyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRTdWJzY3JpYmVyKGZuKVxue1xuXHRjb25zb2xlLmxvZyhmbiwgU1VCU0NSSUJFUlMpXG5cdFNVQlNDUklCRVJTLnB1c2goZm4pO1xufVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlUHJvcHMoZWwsIG9wdHMpXG4vLyB7XG5cdC8vIGlmKCFvcHRzLl9zKSB7XG5cdC8vIFx0cmV0dXJuO1xuXHQvLyB9XG5cbi8vIFx0YXBpLnByb3BlcnR5KGVsLCBvcHRzLCBudWxsKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZVRhZyhwYXJlbnQsIGNoaWxkcmVuLCBjdXJyZW50SW5kZXgsIHZhbHVlKVxuLy8ge1xuLy8gXHRsZXQgZWwgPSBjaGlsZHJlbltjdXJyZW50SW5kZXhdO1xuXHRcbi8vIFx0bGV0IG5vZGVzID0gdmFsdWUoKTtcblxuLy8gXHRpZihBcnJheS5pc0FycmF5KG5vZGVzKSkge1xuXG4vLyBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuLy8gXHRcdFx0bGV0IGNoaWxkID0gbm9kZXNbaV07XG4vLyBcdFx0XHRpZih0eXBlb2YgY2hpbGQgPT09ICdmdW5jdGlvbicpIHtcbi8vIFx0XHRcdFx0Y2hpbGQgPSBjaGlsZCgpO1xuLy8gXHRcdFx0fVxuLy8gXHRcdFx0Ly8gY29uc29sZS5sb2cocGFyZW50LCAgY2hpbGQuc2l6ZSlcbi8vIFx0XHRcdC8vIGFwaS5pbnNlcnQocGFyZW50LCBjaGlsZCwgY2hpbGRyZW5bY3VycmVudEluZGV4ICsgaV0pO1xuLy8gXHRcdFx0Ly8gcGFyZW50LnJlcGxhY2VDaGlsZChjaGlsZCwgY2hpbGRyZW5bY3VycmVudEluZGV4ICsgaV0pXG4vLyBcdFx0XHQvLyBjaGlsZHJlbltjdXJyZW50SW5kZXggKyBpXS5yZXBsYWNlV2l0aChjaGlsZCk7XG4vLyBcdFx0fVxuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdGFwaS5pbnNlcnQoZWwsIG5vZGVzLCBudWxsKTtcbi8vIFx0fVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlQ2hpbGRyZW4obm9kZSwgY2hpbGRyZW4pXG4vLyB7XG4vLyBcdGxldCBiaW5kQ2hpbGRyZW4gPSBbXTtcblxuLy8gXHRpZihub2RlICE9PSBudWxsKSB7XG4vLyBcdFx0YmluZENoaWxkcmVuID0gZmlsdGVyQ2hpbGROb2Rlcyhub2RlKTtcbi8vIFx0fVxuXG4vLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbi8vIFx0XHRpZihjaGlsZHJlbltpXSA9PT0gXykge1xuLy8gXHRcdFx0Y29udGludWU7XG4vLyBcdFx0fVxuLy8gXHRcdC8vIGNvbnNvbGUuZXJyb3IoYmluZENoaWxkcmVuW2ldLCBjaGlsZHJlbltpXSk7XG4vLyBcdFx0aHlkcmF0ZVRhZyhub2RlLCBiaW5kQ2hpbGRyZW4sIGksIGNoaWxkcmVuW2ldKTtcbi8vIFx0fVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRTbG90Tm9kZShlbCwgcGF0aClcbi8vIHtcbi8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4vLyBcdFx0ZWwgPSBlbC5jaGlsZE5vZGVzW3BhdGhbaV1dO1xuLy8gXHR9XG5cbi8vIFx0cmV0dXJuIGVsO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBlbCwgb3B0cyA9IHt9LCBzbG90cylcbi8vIHtcbi8vIFx0aWYoIW9wdHNbJ2lkJ10pIHtcbi8vIFx0XHRyZXR1cm47XG4vLyBcdH1cblxuLy8gXHQvLyBpZihvcHRzWydpZCddID09PSAnaHlkci0xMycpIHtcbi8vIFx0Ly8gXHRvcHRzWydpZCddID0gJ2h5ZHItNic7XG4vLyBcdC8vIH1cblxuLy8gXHQvLyBpZihvcHRzWydpZCddID09PSAnaHlkci0zMCcpIHtcbi8vIFx0Ly8gXHRvcHRzWydpZCddID0gJ2h5ZHItMjEnO1xuLy8gXHQvLyB9XG5cbi8vIFx0bGV0IGJpbmROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7IG9wdHNbJ2lkJ10gfWApO1xuXG4vLyBcdGxldCBzbG90Tm9kZXMgPSB7fVxuXG4vLyBcdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG4vLyBcdFx0aWYoY29tcG9uZW50Ll9zbG90c1BhdGhba2V5XSkge1xuLy8gXHRcdFx0bGV0IG5vZGUgPSBnZXRTbG90Tm9kZShiaW5kTm9kZSwgY29tcG9uZW50Ll9zbG90c1BhdGhba2V5XSlcbi8vIFx0XHRcdHNsb3ROb2Rlc1trZXldID0gbm9kZTtcbi8vIFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAke2tleX0gc2xvdCBuYW1lc3BhY2UgZGVmaW5lZGApO1xuLy8gXHRcdH1cbi8vIFx0fVxuXG4vLyBcdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuLy8gXHRcdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG4vLyBcdFx0XHRsZXQgbm9kZSA9IHNsb3ROb2Rlc1trZXldO1xuLy8gXHRcdFx0bGV0IGNoaWxkcmVuU2xvdHMgPSBzbG90c1trZXldO1xuXHRcdFx0XG4vLyBcdFx0XHRpZihub2RlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4vLyBcdFx0XHRcdG5vZGUgPSBbbm9kZV07XG4vLyBcdFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0XHRub2RlID0gbm9kZS5jaGlsZE5vZGVzO1xuLy8gXHRcdFx0fVxuXG4vLyBcdFx0XHRpZihjaGlsZHJlblNsb3RzLmxlbmd0aCA+IG5vZGUubGVuZ3RoKSB7XG4vLyBcdFx0XHRcdHRocm93IG5ldyBFcnJvcignU2xvdCBoeWRyYXRpb24gbGVuZ3RoIG1pc21hdGNoJyk7XG4vLyBcdFx0XHR9XG5cbi8vIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5TbG90cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcbi8vIFx0XHRcdFx0YXBpLmluc2VydChub2RlW2ldLCBjaGlsZHJlblNsb3RzW2ldKCksIG51bGwpO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH1cbi8vIFx0fSk7XG5cdFxuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG4vLyB7XG4vLyBcdGxldCBiaW5kTm9kZTtcbi8vIFx0Y29uc29sZS5sb2codGhpcywgZWwsIG9wdHMsIGNoaWxkcmVuKVxuXG4vLyBcdC8vIGlmKHRoaXMubm9kZSkge1xuLy8gXHQvLyBcdGJpbmROb2RlID0gdGhpcy5ub2RlO1xuLy8gXHQvLyB9XG5cbi8vIFx0aWYoIW9wdHNbJ2lkJ10pIHtcbi8vIFx0XHRyZXR1cm47XG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0YmluZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHsgb3B0c1snaWQnXSB9YCk7XG4vLyBcdH1cblxuLy8gXHQvLyBjb25zb2xlLmxvZyh0aGlzKTtcbi8vIFx0Ly8gdGhpcy5jdHguX2VsX2luZGV4Kys7XG5cbi8vIFx0aWYoYmluZE5vZGUgPT09IG51bGwpIHtcbi8vIFx0XHRyZXR1cm47XG4vLyBcdH1cblx0XG5cdC8vIGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHQvLyBcdGh5ZHJhdGVQcm9wcyhiaW5kTm9kZSwgb3B0cyk7XG5cdC8vIFx0aHlkcmF0ZUNoaWxkcmVuKGJpbmROb2RlLCBjaGlsZHJlbik7XG5cdC8vIH0pO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG4vLyB7XG4vLyBcdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG4vLyBcdGlmKGNoaWxkLnNldFBhcmVudCkge1xuLy8gXHRcdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBjb21waWxlcihlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxuLy8ge1xuLy8gXHRvcHRpb25zKHRoaXMsIG9wdHMpO1xuXHRcbi8vIFx0aWYoIVNpbnVvdXMuaGFzQ29tcG9uZW50KGVsKSkge1xuLy8gXHRcdGh5ZHJhdGUuY2FsbCh0aGlzLCBlbCwgb3B0cywgY2hpbGRyZW4pO1xuLy8gXHRcdHJldHVybiBfO1xuLy8gXHR9XG5cdFx0XG4vLyBcdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldEh5ZHJhdGVDb21wb25lbnQoZWwsIG9wdHMpO1xuXG4vLyBcdC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudCwgZWwsIG9wdHMpXG4vLyBcdGlmKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuLy8gXHRcdHJldHVybiBfO1xuLy8gXHR9XG5cbi8vIFx0cmVnaXN0ZXJDaGlsZHJlbih0aGlzLmN0eCwgY29tcG9uZW50KTtcblxuLy8gXHRpZihjb21wb25lbnQuX2Z1bmN0aW9uYWwpIHtcbi8vIFx0XHQvLyBjb25zb2xlLndhcm4oJ3N0YXJ0IGh5ZHJhdGlvbicpO1xuLy8gXHRcdHJldHVybiBjb21wb25lbnQuaHlkcmF0ZSh7XG4vLyBcdFx0XHRnZXRVSUQoKSB7XG4vLyBcdFx0XHRcdHJldHVybiAtMTtcbi8vIFx0XHRcdH0sXG4vLyBcdFx0XHRfc2xvdHM6IG9wdHMuJHNsb3RzLFxuLy8gXHRcdH0sIGNvbXBpbGVyKTtcbi8vIFx0fVxuXG4vLyBcdGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuLy8gXHRcdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG4vLyBcdH1cblxuLy8gXHRpZihvcHRzLiRzbG90cykge1xuLy8gXHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIGVsLCBvcHRzLCBvcHRzLiRzbG90cyk7XG4vLyBcdH1cblxuLy8gXHRyZXR1cm4gaW5pdENvbXBvbmVudChjb21wb25lbnQpO1xuLy8gfVxuXG5cblxuXG5cblxuZnVuY3Rpb24gaHlkcmF0ZVByb3BzKGVsLCBvcHRpb25zKVxue1xuXHRpZihvcHRpb25zLl9zKSB7XG5cdFx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRhcGkucHJvcGVydHkoZWwsIG9wdGlvbnMsIG51bGwpO1xuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVIKGNvbnRleHQsIGVsLCBvcHRpb25zLCBjaGlsZHJlbilcbntcblx0XG5cdGh5ZHJhdGVQcm9wcyhlbCwgb3B0aW9ucyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGh5ZHJhdGUoY29udGV4dCwgZWwuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5baV0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVMb29wKGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGxldCBjb25kaXRpb24gPSBhcmdzLmM7XG5cdGxldCBzdGFydE5vZGUgPSBub2RlO1xuXG5cdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdGxldCBsb29wX2NvbmRpdGlvbiA9IHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicgPyBjb25kaXRpb24oKSA6IGNvbmRpdGlvbjtcblx0XHRsZXQgY3VycmVudE5vZGUgPSBzdGFydE5vZGU7XG5cblx0XHRmb3IobGV0IGtleSBpbiBsb29wX2NvbmRpdGlvbilcblx0XHR7XG5cdFx0XHRsZXQgaXRlbSA9IGxvb3BfY29uZGl0aW9uW2tleV07XG5cdFx0XHRsZXQgaXRlbUFyZ3MgPSBhcmdzLmZuKGl0ZW0sIGtleSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnW2h5ZHJhdGUgbG9vcF0nLCBjdXJyZW50Tm9kZSwgaXRlbUFyZ3MpXG5cblx0XHRcdGh5ZHJhdGUoY29udGV4dCwgY3VycmVudE5vZGUsIGl0ZW1BcmdzKTtcblxuXHRcdFx0Y3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVRleHQoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0Ly8gY29uc29sZS53YXJuKCdbVEVYVF0nLCBub2RlLCBhcmdzLnQpO1xuXHRpZihhcmdzLnQgPT09IF8pIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gaWYodHlwZW9mIGFyZ3MudCAhPT0gJ2Z1bmN0aW9uJyApIHtcblx0Ly8gXHRyZXR1cm47XG5cdC8vIH1cblx0Ly8gY29uc29sZS53YXJuKCdbVEVYVF0nLCBub2RlLCBhcmdzLnQoKSk7XG5cdFxuXHQvLyBpZighbm9kZS5faHlkcmF0ZWQpIHtcblx0Ly8gXHRub2RlLl9oeWRyYXRlZCA9IHRydWU7XG5cdFxuXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRhcGkuaW5zZXJ0KG5vZGUsIGFyZ3MudCgpLCBudWxsKTtcblx0fSk7XG5cdC8vIH1cblx0Ly8gYXBpLmluc2VydChlbCwgbm9kZXMsIG51bGwpO1xufVxuXG5cbmZ1bmN0aW9uIGdldFNsb3ROb2RlKGVsLCB0YWcsIHBhdGgpXG57XG5cdC8vIGNvbnNvbGUubG9nKGVsLCB0YWcsIHBhdGgpO1xuXHRmb3IgKHZhciBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcblx0XHRlbCA9IGVsLmNoaWxkTm9kZXNbcGF0aFtpXV07XG5cdH1cblx0Ly8gY29uc29sZS5lcnJvcihlbCk7XG5cblx0cmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlU2xvdHMoY29udGV4dCwgZWwsIG9wdHMgPSB7fSwgc2xvdHMpXG57XG5cdGh5ZHJhdGVQcm9wcyhlbCwgb3B0cyk7XG5cdC8vIGNvbnNvbGUubG9nKGNvbnRleHQsIGVsLCBvcHRzLCBzbG90cylcblxuXHRsZXQgYmluZGVkTm9kZXMgPSB7fVxuXG5cdGxldCBzbG90RGF0YSA9IGNvbnRleHQuX3Nsb3RzRGF0YTtcblxuXHQvLyBGaW5kIHNsb3QgYmluZGluZyBub2Rlc1xuXHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuXHRcdGlmKHNsb3REYXRhW2tleV0pIHtcblx0XHRcdGxldCBub2RlID0gZ2V0U2xvdE5vZGUoZWwsIHNsb3REYXRhW2tleV0udGFnLCBzbG90RGF0YVtrZXldLnBhdGgpO1xuXHRcdFx0YmluZGVkTm9kZXNba2V5XSA9IG5vZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gJHtrZXl9IHNsb3QgbmFtZXNwYWNlIGRlZmluZWRgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBIeWRyYXRlIHNsb3RzIHBlciBiaW5kZWQgdGFnXG5cdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG5cdFx0bGV0IGRhdGEgPSBzbG90RGF0YVtrZXldO1xuXHRcdGxldCBub2RlID0gYmluZGVkTm9kZXNba2V5XTtcblx0XHRsZXQgY2hpbGRyZW5TbG90cyA9IHNsb3RzW2tleV07XG5cdFx0bGV0IHN0YXJ0Tm9kZUluZGV4ID0gZGF0YS5pbmRleDtcblxuXHRcdGlmKGNoaWxkcmVuU2xvdHMubGVuZ3RoID4gbm9kZS5sZW5ndGgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU2xvdCBoeWRyYXRpb24gbGVuZ3RoIG1pc21hdGNoJyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0Tm9kZUluZGV4OyBpIDwgY2hpbGRyZW5TbG90cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Ly8gY29uc29sZS5sb2cobm9kZS5jaGlsZE5vZGVzW2ldLCBjaGlsZHJlblNsb3RzW2ldKVxuXHRcdFx0aHlkcmF0ZShjb250ZXh0LCBub2RlLmNoaWxkTm9kZXNbaV0sIGNoaWxkcmVuU2xvdHNbaV0pO1xuXHRcdH1cblx0fVxufVxuLyoqXG4gKiBDb250ZXh0IHNldHVwXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbntcblx0aWYoY2hpbGQuX2Z1bmN0aW9uYWwpIHtcblx0XHRwYXJlbnQuYWRkQ2hpbGRyZW4oXyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcblx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVUYWcoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0bGV0IGVsID0gYXJncy50LFxuXHRcdG9wdHMgPSBhcmdzLm8sXG5cdFx0Y2hpbGRyZW4gPSBhcmdzLmM7XG5cblx0aWYoIVNpbnVvdXMuaGFzQ29tcG9uZW50KGVsKSkge1xuXHRcdGh5ZHJhdGVIKGNvbnRleHQsIG5vZGUsIG9wdHMsIGNoaWxkcmVuKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgY29tcG9uZW50ID0gU2ludW91cy5nZXRIeWRyYXRlQ29tcG9uZW50KGVsLCBvcHRzKTtcblxuXHRpZihjb21wb25lbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gXztcblx0fVxuXG5cdHJlZ2lzdGVyQ2hpbGRyZW4oY29udGV4dCwgY29tcG9uZW50KTtcblxuXHRpZihjb21wb25lbnQuX2Z1bmN0aW9uYWwpIHtcblx0XHRsZXQgbmV3QXJncyA9IGNvbXBvbmVudC5oeWRyYXRlKHtcblx0XHRcdGdldFVJRCgpIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fSxcblx0XHRcdF9zbG90czogb3B0cy4kc2xvdHMsXG5cdFx0fSk7XG5cblx0XHRpZihvcHRzLiRzbG90cykge1xuXHRcdFx0aHlkcmF0ZVNsb3RzKGNvbXBvbmVudCwgbm9kZSwgb3B0cywgb3B0cy4kc2xvdHMpO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUubG9nKG9wdHMpXG5cdFx0aHlkcmF0ZShjb250ZXh0LCBub2RlLCBuZXdBcmdzKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIHNldHVwIGNvbXBvbmVudFxuXHQvLyBpZih0eXBlb2Ygb3B0cy5wcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Ly8gXHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHQvLyB9XG5cblx0aWYob3B0cy4kc2xvdHMpIHtcblx0XHRoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBub2RlLCBvcHRzLCBvcHRzLiRzbG90cyk7XG5cdH1cblxuXHRyZXR1cm4gaHlkcmF0ZShjb21wb25lbnQsIG5vZGUsIGNvbXBvbmVudC5oeWRyYXRlKGNvbXBvbmVudCkpO1xufVxuXG4vKipcbiAqIE1haW4gaHlkcmF0aW9uIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGh5ZHJhdGUoY29udGV4dCwgbm9kZSwgYXJncyA9IG51bGwpXG57XG5cdC8vIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdzdGFydCcpXG5cdFx0aHlkcmF0ZUlkbGUoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdC8vIH0sIHtcblx0Ly8gXHR0aW1lb3V0OiAwLFxuXHQvLyBcdHJlYWQ6IHRydWVcblx0Ly8gfSk7XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVJZGxlKGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGlmKGFyZ3MgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnaCcpIHtcblx0XHQvLyBhcmdzLm9bJ2RhdGEtaHlkcmF0ZWQnXSA9IHRydWU7XG5cdFx0Ly8gYXJncy5vWydfcyddID0gdHJ1ZTtcblx0XHRoeWRyYXRlVGFnKGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ3QnKSB7XG5cdFx0aHlkcmF0ZVRleHQoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnbG9vcCcpIHtcblx0XHRoeWRyYXRlTG9vcChjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXG5cdHJldHVybiBfO1xuXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SHlkcmF0aW9uKGNvbXBvbmVudCwgaHlkcmF0aW9uUm9vdCwgdGltZUJlbmNobWFyayA9ICgpID0+IHt9LCBjYWxsYmFjayA9IG51bGwpXG57XG5cdGxvYWRDb21wb25lbnQoY29tcG9uZW50LCAoaW5zdGFuY2UpID0+IHtcblxuXHRcdHRpbWVCZW5jaG1hcmsoJ0h5ZHJhdGlvbicpO1xuXG5cdFx0bGV0IHRyZWUgPSBbaW5zdGFuY2VdO1xuXG5cdFx0U2ludW91cy5jbGVhckhJRCgpO1xuXG5cdFx0bGV0IGNvbm5lY3RlZE5vZGUgPSBmaWx0ZXJDaGlsZE5vZGVzKGh5ZHJhdGlvblJvb3QpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY29tcG9uZW50ID0gdHJlZVtpXTtcblx0XHRcdGxldCBub2RlID0gY29ubmVjdGVkTm9kZVtpXTtcblx0XHRcdGxldCBoeWRyYXRpb24gPSBjb21wb25lbnQuaHlkcmF0ZShjb21wb25lbnQpO1xuXHRcdFx0XG5cdFx0XHRoeWRyYXRlKGNvbXBvbmVudCwgbm9kZSwgaHlkcmF0aW9uKTtcblx0XHR9XG5cblx0XHRcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdzdGFydCcsIFNVQlNDUklCRVJTKTtcblx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IFNVQlNDUklCRVJTLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gXHRsZXQgZm4gPSBTVUJTQ1JJQkVSU1tpXTtcblx0XHQvLyBcdGNvbnNvbGUud2FybihpLCBTVUJTQ1JJQkVSU1tpXSlcblx0XHQvLyBcdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdC8vIFx0XHQvLyBjb25zb2xlLmxvZyhmbilcblx0XHQvLyBcdFx0Zm4oKVxuXHRcdC8vIFx0fSk7XG5cdFx0Ly8gXHQvLyBTVUJTQ1JJQkVSU1tpXSgpO1xuXHRcdC8vIH1cblx0XHQvLyB9KTtcblx0XHRjb25zb2xlLmxvZyhpbnN0YW5jZSk7XG5cdFx0aW5zdGFuY2UuaG9vaygnbW91bnRlZCcpO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHR0aW1lQmVuY2htYXJrKCdIeWRyYXRpb24nKTtcblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fSk7XG5cbn1cblxuLyoqXG4gKiBGaWx0ZXIgb3V0IHdoaXRlc3BhY2UgdGV4dCBub2RlcyB1bmxlc3MgaXQgaGFzIGEgbm9za2lwIGluZGljYXRvci5cbiAqXG4gKiBAcGFyYW0gIHtOb2RlfSBwYXJlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBmaWx0ZXJDaGlsZE5vZGVzKHBhcmVudCkge1xuXHRyZXR1cm4gcGFyZW50LmNoaWxkTm9kZXM7XG5cdC8vIGNvbnNvbGUud2FybihwYXJlbnQsIHBhcmVudC5jaGlsZE5vZGVzKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGROb2RlcykuZmlsdGVyKFxuICAgICAgICBlbCA9PiBlbC5ub2RlVHlwZSAhPT0gMyB8fCBlbC5kYXRhLnRyaW0oKSB8fCBlbC5fbm9za2lwXG4gICAgKTtcbn1cbiIsIlxuXHRcdGltcG9ydCBjb21wb25lbnRDb25maWcgZnJvbSBcIi4vaW5kZXguc2luP3R5cGU9c2NyaXB0XCI7XG5cdFxuXHRcdGltcG9ydCB7IEJhc2ljIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcblxuXHRcdGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdG1ldGhvZHM6IHt9LFxuXHRcdH0sIGNvbXBvbmVudENvbmZpZyk7XG5cblx0XHRsZXQgaW5zdGFuY2UgPSBmdW5jdGlvbiBQYWdlc0luZGV4KCkge1xuXHRcdFx0QmFzaWMuY2FsbCh0aGlzKTtcblx0XHR9O1xuXHRcdFxuXHRcdC8vIGluaGVyaXQgQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2ljLnByb3RvdHlwZSk7XG5cblx0XHQvLyBjb3JyZWN0IHRoZSBjb25zdHJ1Y3RvciBwb2ludGVyIGJlY2F1c2UgaXQgcG9pbnRzIHRvIEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gaW5zdGFuY2U7XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzID0ge307XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9jb21wb25lbnROYW1lID0gJ1BhZ2VzSW5kZXgnO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2xvdHNEYXRhID0ge307XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzID0gT2JqZWN0LmtleXMoY29uZmlnLm1ldGhvZHMpO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fZnVuY3Rpb25hbCA9IGZhbHNlO1xuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZykge1xuXHRcdFx0aWYodHlwZW9mIGNvbmZpZ1trZXldID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5tZXRob2RzKSB7XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZy5tZXRob2RzW2tleV1cblx0XHR9XG5cdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcmVuZGVyID0gZnVuY3Rpb24oaCwgeyBjdHgsIGNvbXBvbmVudHMsIHJlbmRlciwgc3RhdGVtZW50LCBzbG90LCBsb29wLCBkLCBjIH0pIHtcblx0XHRcdFx0cmV0dXJuIGgoXCJkaXZcIiwge30sIFtcbiAgbG9vcChjdHguX3N0YXRlLml0ZW1zLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgcmV0dXJuIGgoXG4gICAgICBcInNidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgJHNsb3RzOiB7XG4gICAgICAgICAgZGVmYXVsdDogW1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYEJ1dHRvbiAke2l0ZW19YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBbXVxuICAgICk7XG4gIH0pLFxuXSk7XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19oeWRyYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBjdHggPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4ge1xuICBfdDogXCJoXCIsXG4gIHQ6IFwiZGl2XCIsXG4gIG86IHt9LFxuICBjOiBbXG4gICAge1xuICAgICAgX3Q6IFwibG9vcFwiLFxuICAgICAgYzogY3R4Ll9zdGF0ZS5pdGVtcyxcbiAgICAgIGZuOiAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgX3Q6IFwiaFwiLFxuICAgICAgICAgIHQ6IFwic2J1dHRvblwiLFxuICAgICAgICAgIG86IHtcbiAgICAgICAgICAgICRzbG90czoge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX3Q6IFwidFwiLFxuICAgICAgICAgICAgICAgICAgdDogLTEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjOiBbXSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn07XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgc3RhdGUobykge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogbyhbXSksXG4gICAgICBzMTogbygxKVxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQobykge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGQgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwMDsgaSsrKSB7XG4gICAgICAgIGQucHVzaChpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RhdGUuaXRlbXMoZCk7IC8vIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgLy8gXHRzMSArPSAxMFxuICAgICAgLy8gfSwgMTAwKVxuICAgIH0sXG4gICAgdW5tb3V0bmVkOiBmdW5jdGlvbiAoKSB7Ly8gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgfVxuICB9XG59OyIsImltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJ0BzaW51b3VzL2h5ZHJhdGlvbic7XG5pbXBvcnQgcmVuZGVyIGZyb20gJ0BzaW51b3VzL3JlbmRlcic7XG4vLyBpbXBvcnQgdGVzdCBmcm9tICcuLi9jb21wb25lbnRzL3Rlc3Quc2luJ1xuLy8gaW1wb3J0IHRlc3QyIGZyb20gJy4uL2NvbXBvbmVudHMvdGVzdDIuc2luJ1xuaW1wb3J0IGJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3NidXR0b24uc2luJ1xuaW1wb3J0IEluZGV4UGFnZSBmcm9tICcuLi9wYWdlcy9pbmRleC5zaW4nXG5pbXBvcnQgdGltZUJlbmNobWFyayBmcm9tICcuL3RpbWUnO1xuXG5cbi8vIGNvbnN0IEluZGV4UGFnZSA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VJbmRleFwiICovICcuLi9wYWdlcy9pbmRleC5zaW4nKVxuXG5cbnZhciBMQVlPVVQ7XG52YXIgUGFnZUluZGV4LCBQYWdlSW5kZXgyO1xuXG5mdW5jdGlvbiBURVNUX1dFQlBBQ0tfQlVJTEQoKVxue1xuXHR0aW1lQmVuY2htYXJrKCdTU1ItQnVpbGQnKTtcblx0Ly8gU2ludW91cy5yZWdpc3RlckNvbXBvbmVudCh0ZXN0KTtcblx0Ly8gU2ludW91cy5yZWdpc3RlckNvbXBvbmVudCh0ZXN0Mik7XG5cdFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQoYnV0dG9uKTtcblx0dGltZUJlbmNobWFyaygnU1NSLUJ1aWxkJyk7XG59XG5cbi8vIGZ1bmN0aW9uIFRFU1RfSU5JVCgpXG4vLyB7XG4vLyBcdHRpbWVCZW5jaG1hcmsoJ1NTUi1Jbml0Jyk7XG4vLyBcdFBhZ2VJbmRleCA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0UGFnZUluZGV4MiA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0dGltZUJlbmNobWFyaygnU1NSLUluaXQnKTtcbi8vIH1cblxuZnVuY3Rpb24gVEVTVF9SRU5ERVIoKVxue1xuXHRyZW5kZXIoSW5kZXhQYWdlLCBMQVlPVVQsIHRpbWVCZW5jaG1hcmssIChjKSA9PiB7XG5cdFx0UGFnZUluZGV4ID0gYztcblx0fSk7XG59XG5cbmZ1bmN0aW9uIENMRUFSX0hPT0tTKClcbntcblx0XG5cdGxldCBodG1sID0gTEFZT1VULmlubmVySFRNTDtcblx0TEFZT1VULmlubmVySFRNTCA9IGh0bWw7XG5cdFBhZ2VJbmRleC5ob29rKCd1bm1vdW50ZWQnKTtcbn1cblxuZnVuY3Rpb24gVEVTVF9IWURSQVRFKClcbntcblx0aHlkcmF0ZShJbmRleFBhZ2UsIExBWU9VVCwgdGltZUJlbmNobWFyayk7XG59XG5cblRFU1RfV0VCUEFDS19CVUlMRCgpO1xuXG4vLyBURVNUX0lOSVQoKTtcblxuLy8gcmV0dXJuO1xuKGZ1bmN0aW9uIGxvYWQoKSB7XG5cdExBWU9VVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXlvdXQnKTtcblxuXG5cdC8vIExBWU9VVC5pbm5lckhUTUwgPSAnJztcblx0Ly8gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG5cdC8vIFRFU1RfSFlEUkFURSgpO1xuXHQvLyByZXR1cm47XG5cblx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0Ly8gVEVTVF9SRU5ERVIoKTtcblx0Ly8gfSwgMjAwMClcblxuXHRURVNUX1JFTkRFUigpO1xuXHQvLyBjb25zb2xlLmxvZyhMQVlPVVQuaW5uZXJIVE1MKVxuXHQvLyByZXR1cm5cblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblxuXHRcdENMRUFSX0hPT0tTKCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCBURVNUX0hZRFJBVEUoKTtcblx0XHR9LCAzMDApO1xuXHR9LCAxMDAwKTtcbn0pKCk7XG4iLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==