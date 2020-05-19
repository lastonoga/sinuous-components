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
				return Object(_sinuous_component__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { staticClass: "button" }, [
  Object(_sinuous_component__WEBPACK_IMPORTED_MODULE_1__["slot"])(ctx, _sinuous_component__WEBPACK_IMPORTED_MODULE_1__["h"], "default", "span", {}, [`Default button text`]),
]);
;
			}
		
			instance.hydrate = function(ctx, h) {
				ctx.click = this.click;

				let statement = _sinuous_hydration__WEBPACK_IMPORTED_MODULE_2__["statement"];
				let loop = _sinuous_hydration__WEBPACK_IMPORTED_MODULE_2__["loop"];
				let slot = _sinuous_hydration__WEBPACK_IMPORTED_MODULE_2__["slot"];
				return -1;
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


function hydrateProps(el, opts) {
  // console.log(opts)
  _sinuous.api.subscribe(function () {
    _sinuous.api.property(el, opts, null);
  });
}

function hydrateH(context, el, options, children) {
  if (options._s) {
    hydrateProps(el, options);
  }

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
    }

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

      for (var i = 0; i < 1000; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uLnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NidXR0b24uc2luP2NlNzkiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb29wLmpzIiwid2VicGFjazovLy8uLi9zcmMvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4iLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguc2luPzQzZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci10ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aW1lLmpzIl0sIm5hbWVzIjpbIl8iLCJ5Iiwic2VsZiIsImNsYXNzZXMiLCJvYmoiLCJzdGF0aWNDbGFzc2VzIiwiZHluYW1pYyIsImkiLCJhcmd1bWVudHMiLCJhcmciLCJBcnJheSIsImoiLCJoYW5kbGVDbGFzc09iamVjdCIsImEiLCJ2YWwiLCJzdHlsZXMiLCJjYW1lbFRvUHJvcCIsImhhbmRsZVN0eWxlc09iamVjdCIsIkhJRCIsIkJhc2ljIiwib2JzZXJ2YWJsZSIsImRlZmF1bHQiLCJjb21wdXRlZCIsIm5hbWUiLCJjaGlsZHJlbiIsInBhcmVudCIsInByb3AiLCJ2YWx1ZSIsInR5cGUiLCJwcm9wcyIsInN0YXRlZnVsIiwiT2JqZWN0IiwiY3R4IiwiaCIsInN0YXRlbWVudCIsImxvb3AiLCJzbG90IiwiZCIsImMiLCJjb21waWxlciIsImhTdGF0ZW1lbnQiLCJoU2xvdCIsImhMb29wIiwiU2ludW91cyIsImVsIiwidGFnIiwiSFRNTFRhZ3MiLCJjaGlsZCIsIm9wdHMiLCJkeW5hbWljQXR0cnMiLCJjb21wb25lbnQiLCJyZWdpc3RlckNoaWxkcmVuIiwiZ2V0VUlEIiwiX3Nsb3RzIiwiJHNsb3RzIiwicmVzdWx0IiwibG9vcF9jb25kaXRpb24iLCJjb25kaXRpb24iLCJpdGVtIiwiZm4iLCJiaW5kaW5nIiwidiIsIm1ha2VPYnNlZXJ2YWJsZSIsInNob3VsZEhhbmRsZSIsIndpbmRvdyIsImNvbnRleHQiLCJjaGlsZEluZGV4Iiwic2l6ZSIsIm5vZGUiLCJkb2N1bWVudCIsIlNUT1JBR0UiLCJTVUJTQ1JJQkVSUyIsImNvbnNvbGUiLCJhcGkiLCJvcHRpb25zIiwiaHlkcmF0ZVByb3BzIiwiaHlkcmF0ZSIsImFyZ3MiLCJzdGFydE5vZGUiLCJjdXJyZW50Tm9kZSIsIml0ZW1BcmdzIiwicGF0aCIsImJpbmRlZE5vZGVzIiwic2xvdERhdGEiLCJnZXRTbG90Tm9kZSIsImRhdGEiLCJjaGlsZHJlblNsb3RzIiwic2xvdHMiLCJzdGFydE5vZGVJbmRleCIsImh5ZHJhdGVIIiwibmV3QXJncyIsImh5ZHJhdGVTbG90cyIsImh5ZHJhdGVJZGxlIiwiaHlkcmF0ZVRhZyIsImh5ZHJhdGVUZXh0IiwiaHlkcmF0ZUxvb3AiLCJ0aW1lQmVuY2htYXJrIiwiY2FsbGJhY2siLCJ0cmVlIiwiY29ubmVjdGVkTm9kZSIsImZpbHRlckNoaWxkTm9kZXMiLCJoeWRyYXRpb24iLCJpbnN0YW5jZSIsInN0YXRlbWVudFNpemUiLCJub2RlcyIsIlNpbnVvdXNDb21wb25lbnRzIiwiY3JlYXRlSElEIiwiY2xlYXJISUQiLCJyZWdpc3RlckNvbXBvbmVudCIsImhhc0NvbXBvbmVudCIsImdldEh5ZHJhdGVDb21wb25lbnQiLCJnZXRDb21wb25lbnRJbnN0YW5jZSIsImdldENvbXBvbmVudCIsIm1vZHVsZSIsImxheW91dCIsIkxBWU9VVCIsIlBhZ2VJbmRleCIsIlBhZ2VJbmRleDIiLCJURVNUX1dFQlBBQ0tfQlVJTEQiLCJidXR0b24iLCJURVNUX1JFTkRFUiIsIkluZGV4UGFnZSIsIkNMRUFSX0hPT0tTIiwiaHRtbCIsImlubmVySFRNTCIsImhvb2siLCJURVNUX0hZRFJBVEUiLCJsb2FkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRUaW1lb3V0IiwidGltZXMiLCJ0aW1lIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQSxFQUEwRDs7QUFFMUQsRUFBZ0U7QUFDRjtBQUM2Qjs7O0FBRzNGO0FBQ0EsY0FBYztBQUNkLEdBQUcsRUFBRSxnRUFBZTs7QUFFcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixXQUFXOztBQUVwQztBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLFdBQVcsNERBQUMsU0FBUyx3QkFBd0I7QUFDN0MsRUFBRSwrREFBSSxNQUFNLG9EQUFDLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsNERBQVU7QUFDOUIsZUFBZSx1REFBSztBQUNwQixlQUFlLHVEQUFLO0FBQ3BCO0FBQ0E7QUFDQTs7O0FBR0EsRUFBaUIsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQzVDMUI7QUFBZTtBQUNmO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQk0sSUFBTUEsQ0FBQyxHQUFHLENBQUMsQ0FBWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7Ozs7Ozs7O0FBR0Esd0JBQ0E7QUFDQyxTQUFPLENBQUMsQ0FBRCx3QkFDbUI7QUFBQSxpQkFBY0MsQ0FBQyxDQUFmLFdBQWNBLEVBQWQ7QUFEbkIsbUJBQVAsRUFBTyxDQUFQO0FBR0E7O0FBRUQsd0NBQXdDO0FBQ3BDLFNBQU9DLElBQUksQ0FBSkEsbUJBQVA7QUFDSDs7QUFFTSxnQ0FDUDtBQUNDLE1BQUlDLE9BQU8sR0FBWDs7QUFFQSxPQUFLLElBQUwsWUFBcUI7QUFDcEIsUUFBRyxvQkFBTUMsR0FBRyxDQUFaLEdBQVksQ0FBVCxDQUFILEVBQW9CO0FBQ25CRCxhQUFPLENBQVBBO0FBQ0E7QUFDRDs7QUFFRDtBQUNBOztBQUVNLHlDQUNQO0FBQUE7O0FBQUEsTUFEd0JFLGFBQ3hCO0FBRHdCQSxpQkFDeEIsR0FEd0MsRUFBaEJBO0FBQ3hCOztBQUFBLE1BRDRDQyxPQUM1QztBQUQ0Q0EsV0FDNUMsR0FEc0QsRUFBVkE7QUFDNUM7O0FBQ0MsU0FBTyxZQUFNO0FBQ1osUUFBSUgsT0FBTyxHQUFYOztBQUVBLFNBQUssSUFBSUksQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUdDLFVBQVMsQ0FBN0IsUUFBc0NELENBQXRDLElBQTJDO0FBQzFDLFVBQUlFLEdBQUcsR0FBR0QsVUFBUyxDQUFuQixDQUFtQixDQUFuQjs7QUFFQSxVQUFHRSxLQUFLLENBQUxBLFFBQUgsR0FBR0EsQ0FBSCxFQUF1QjtBQUN0QixhQUFLLElBQUlDLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHRixHQUFHLENBQXZCLFFBQWdDRSxDQUFoQyxJQUFxQztBQUNwQ1IsaUJBQU8sQ0FBUEEsS0FBYSxvQkFBTU0sR0FBRyxDQUF0Qk4sQ0FBc0IsQ0FBVCxDQUFiQTtBQUNBO0FBSEYsYUFJTyxJQUFHLGVBQUgsVUFBNEI7QUFDbENBLGVBQU8sR0FBR0EsT0FBTyxDQUFQQSxPQUNUUyxpQkFBaUIsQ0FEbEJULEdBQ2tCLENBRFJBLENBQVZBO0FBRE0sYUFJQSxJQUFHLGVBQUgsWUFBOEI7QUFDcENBLGVBQU8sR0FBR0EsT0FBTyxDQUFQQSxPQUNUUyxpQkFBaUIsQ0FBQyxvQkFEbkJULEdBQ21CLENBQUQsQ0FEUkEsQ0FBVkE7QUFETSxhQUlBO0FBQ05BLGVBQU8sQ0FBUEE7QUFDQTtBQUNEOztBQUVEQSxXQUFPLEdBQUcsT0FBTyxDQUFQLE9BQWU7QUFBQSxhQUFhVSxDQUFDLENBQURBLGVBQWI7QUFBekJWLEtBQVUsQ0FBVkE7QUFFQSxXQUFPQSxPQUFPLENBQVBBLEtBQVAsR0FBT0EsQ0FBUDtBQXpCRDtBQTJCQTs7QUFFTSx5Q0FDUDtBQUNDLE9BQUssSUFBTCxZQUFxQjtBQUNwQixRQUFJVyxHQUFHLEdBQUcsb0JBQU1WLEdBQUcsQ0FBbkIsR0FBbUIsQ0FBVCxDQUFWOztBQUNBLFFBQUdVLEdBQUcsS0FBTixNQUFpQjtBQUNoQkMsWUFBTSxDQUFDQyxXQUFXLENBQWxCRCxHQUFrQixDQUFaLENBQU5BO0FBQ0E7QUFDRDs7QUFFRDtBQUNBOztBQUVNLGtCQUNQO0FBQUE7QUFDQyxTQUFPLFlBQU07QUFDWixRQUFJQSxNQUFNLEdBQVY7O0FBRUEsU0FBSyxJQUFJUixDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR0MsV0FBUyxDQUE3QixRQUFzQ0QsQ0FBdEMsSUFBMkM7QUFDMUMsVUFBRyxPQUFPQyxXQUFTLENBQWhCLENBQWdCLENBQWhCLEtBQUgsVUFBcUM7QUFDcENTLDBCQUFrQixTQUFTVCxXQUFTLENBQXBDUyxDQUFvQyxDQUFsQixDQUFsQkE7QUFERCxhQUVPO0FBQ05BLDBCQUFrQixTQUFTLG9CQUFNVCxXQUFTLENBQTFDUyxDQUEwQyxDQUFmLENBQVQsQ0FBbEJBO0FBQ0E7QUFDRDs7QUFFRDtBQVhEO0FBYUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGRDs7QUFDQTs7QUFHQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7O0VBRUE7OztBQUNBLElBQUlDLEdBQUcsR0FBUDs7QUFHQSxJQUFJQyxLQUFLLEdBQUcsWUFBWTtBQUV2QixtQkFDQTtBQUNDO0FBQ0EsZUFBVyxFQUFYO0FBRUEsa0JBQWMsS0FBZCxLQUFjLEVBQWQ7QUFDQSx3QkFMRCxFQUtDLENBTEQsQ0FPQzs7QUFDQSxpQkFBYSxLQVJkLElBUWMsRUFBYixDQVJELENBU0M7O0FBQ0Esa0JBQWMsV0FBV0MsWUFBekIsVUFBYyxDQUFkO0FBRUEsa0JBQWM7QUFDYkMsYUFBTyxFQUFFO0FBREksS0FBZDtBQUlBLHFCQUFpQixjQUFjQyxZQUEvQixRQUFpQixDQUFqQjtBQUNBO0FBQ0EscUJBbEJELENBa0JDLENBbEJELENBb0JDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsU0ExQkQsU0EwQkMsR0ExQkQsQ0E0QkM7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBR0RILE9BQUssQ0FBTEEsd0JBQThCLFlBQzlCO0FBQ0MsU0FBSSxJQUFKLE9BQWUsS0FBZixXQUErQjtBQUM5Qiw0QkFBc0IseUJBQXRCLElBQXNCLENBQXRCO0FBQ0E7O0FBRUQsU0FBSSxJQUFKLFFBQWUsS0FBZixVQUE4QjtBQUM3QixVQUFJSSxJQUFJLEdBQUcsY0FBWCxJQUFXLENBQVg7QUFDQSxtQkFBYSxnQkFBYixJQUFhLENBQWI7QUFDQTtBQVRGSjtBQVdBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFJQUEsT0FBSyxDQUFMQSx3QkFBOEIsb0JBQzlCO0FBQUEsUUFEdUNLLFFBQ3ZDO0FBRHVDQSxjQUN2QyxHQURrRCxFQUFYQTtBQUN2Qzs7QUFDQztBQUZETDs7QUFNQUEsT0FBSyxDQUFMQSx3QkFBOEIsaUJBQzlCO0FBQ0M7QUFGREE7O0FBTUFBLE9BQUssQ0FBTEEsc0JBQTRCLGtCQUM1QjtBQUFBLFFBRHFDTSxNQUNyQztBQURxQ0EsWUFDckMsR0FEOEMsSUFBVEE7QUFDckM7O0FBQ0M7QUFGRE47QUFJQTs7Ozs7QUFJQUEsT0FBSyxDQUFMQSxrQkFBd0IsWUFDeEI7QUFDQztBQUZEQTs7QUFNQUEsT0FBSyxDQUFMQSxzQkFBNEIsWUFDNUI7QUFDQyxTQUFJLElBQUosT0FBZSxLQUFmLFFBQ0E7QUFDQyxVQUFJTyxJQUFJLEdBQUcsWUFBWCxHQUFXLENBQVg7QUFDQSxVQUFJQyxLQUFLLEdBQVQ7QUFDQSxVQUFJQyxJQUFJLEdBQVI7O0FBRUEsVUFBRyxnQkFBSCxZQUErQixDQUM5QjtBQURELGFBRU87QUFDTkQsYUFBSyxHQUFHRCxJQUFJLENBQVpDLE9BQVFELEVBQVJDO0FBQ0E7O0FBRUQ7QUFDQTtBQWZGUjs7QUFtQkFBLE9BQUssQ0FBTEEsc0JBQTRCLHVCQUM1QjtBQUNDO0FBRkRBOztBQU1BQSxPQUFLLENBQUxBLHNCQUE0QixpQkFDNUI7QUFDQztBQUNBO0FBQ0E7QUFFQSxTQUFJLElBQUosY0FDQTtBQUNDLFVBQUdVLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxDQUFILGFBQTJCO0FBQzFCO0FBQ0E7O0FBRUQsd0JBQWtCQSxLQUFLLENBTHhCLEdBS3dCLENBQXZCLENBTEQsQ0FNQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkZWO0FBcUJBOzs7OztBQUtBQSxPQUFLLENBQUxBLDZCQUFtQyxZQUNuQztBQUNDLFFBQUlXLFFBQVEsR0FBWjs7QUFFQSxTQUFJLElBQUosT0FBZSxLQUFmLGNBQWtDO0FBQ2pDLFdBQUksSUFBSixPQUFlLGtCQUFmLEdBQWUsQ0FBZixFQUF1QztBQUN0QyxZQUFHLHVCQUFILEdBQUcsQ0FBSCxFQUFnQztBQUMvQkEsa0JBQVEsR0FBUkE7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsb0JBQWE7QUFDWjtBQUNBO0FBQ0Q7O0FBRUQsV0FBT0EsUUFBUSxJQUFJLEtBQW5CO0FBakJEWDs7QUFxQkFBLE9BQUssQ0FBTEEsNkJBQW1DLFlBQ25DO0FBQ0MsV0FBT1ksTUFBTSxDQUFOQSxLQUFZLEtBQVpBLGdCQUFQO0FBRkRaO0FBS0E7Ozs7O0FBSUFBLE9BQUssQ0FBTEEsaUJBQXVCLFlBQ3ZCO0FBQ0M7QUFGREE7O0FBTUFBLE9BQUssQ0FBTEEscUJBQTJCLFlBQzNCO0FBQ0M7QUFGREE7QUFLQTs7Ozs7QUFJQUEsT0FBSyxDQUFMQSxrQkFBd0IsYUFDeEI7QUFDQztBQUZEQTtBQUtBOzs7Ozs7O0FBTUFBLE9BQUssQ0FBTEEscUJBQTJCLFlBQVcsQ0FBdENBOztBQUVBQSxPQUFLLENBQUxBLDRCQUFrQyxZQUFXLENBQTdDQTtBQUVBOzs7Ozs7QUFLQUEsT0FBSyxDQUFMQSxpQkFBdUIsZ0JBQ3ZCO0FBQUEsUUFEZ0NTLElBQ2hDO0FBRGdDQSxVQUNoQyxHQUR1QyxTQUFQQTtBQUNoQzs7QUFDQyxRQUFHLEtBQUgsSUFBRyxDQUFILEVBQWU7QUFDZDtBQUNBOztBQUVELFNBQUssSUFBSXJCLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHLGVBQXBCLFFBQTJDQSxDQUEzQyxJQUFnRDtBQUMvQyxVQUFHLHNCQUFzQlAsT0FBekIsR0FBNEI7QUFDM0I7QUFDQTs7QUFFRCxVQUFHLENBQUMsa0JBQUosYUFBbUM7QUFDbEM7QUFDQTtBQUNEO0FBZEZtQjs7QUFrQkFBLE9BQUssQ0FBTEEsb0JBQTBCLFlBQVcsQ0FBckNBOztBQUVBQSxPQUFLLENBQUxBLHNCQUE0QixZQUFXLENBQXZDQTtBQUVBOzs7Ozs7QUFLQUEsT0FBSyxDQUFMQSxtQkFBeUIsZUFDekI7QUFBQSxRQURrQ2EsR0FDbEM7QUFEa0NBLFNBQ2xDLEdBRHdDLElBQU5BO0FBQ2xDOztBQUNDLFFBQUdBLEdBQUcsS0FBTixNQUFpQjtBQUNoQkEsU0FBRyxHQUFIQTtBQUNBOztBQUVEQzs7QUFFQSxXQUFPLEdBQUcsQ0FBSCxTQUFhQSxVQUFiLEdBQWFBLENBQWIsRUFBMEI7QUFDaENELFNBQUcsRUFENkI7QUFFaENFLGVBQVMsRUFBVEEsT0FGZ0M7QUFHaENDLFVBQUksRUFBSkEsT0FIZ0M7QUFJaENDLFVBQUksRUFBSkEsT0FKZ0M7QUFLaENDLE9BQUMsRUFBRS9CLE9BTDZCO0FBTWhDZ0MsT0FBQyxFQUFFaEI7QUFONkIsS0FBMUIsQ0FBUDtBQVJESDs7QUFtQkFBLE9BQUssQ0FBTEEsb0JBQTBCLHlCQUMxQjtBQUFBLFFBRG1DYSxHQUNuQztBQURtQ0EsU0FDbkMsR0FEeUMsSUFBTkE7QUFDbkM7O0FBQUEsUUFEK0NPLFFBQy9DO0FBRCtDQSxjQUMvQyxHQUQwRCxJQUFYQTtBQUMvQzs7QUFDQyxRQUFHUCxHQUFHLEtBQU4sTUFBaUI7QUFDaEJBLFNBQUcsR0FBSEE7QUFDQTs7QUFFRCxXQUFPLEdBQUcsQ0FBSCxvQkFBd0I7QUFDOUJBLFNBQUcsRUFEMkI7QUFFOUJFLGVBQVMsRUFBRU0sV0FGbUI7QUFHOUJKLFVBQUksRUFBRUssV0FId0I7QUFJOUJOLFVBQUksRUFBRU8sV0FKd0I7QUFLOUJMLE9BQUMsRUFBRS9CLE9BTDJCO0FBTTlCZ0MsT0FBQyxFQUFFaEI7QUFOMkIsS0FBeEIsQ0FBUDtBQU5ESDs7QUFpQkFBLE9BQUssQ0FBTEEscUJBQTJCLFlBQzNCO0FBQ0M7QUEvUXNCLEdBNlF2QkEsQ0E3UXVCLENBbVJ2QjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0FBLE9BQUssQ0FBTEEsc0JBQTRCLFlBQzVCO0FBQ0M7QUFGREE7O0FBS0FBLE9BQUssQ0FBTEEsbUJBQXlCLGlCQUFnQjtBQUN4QyxxQkFBZ0J3QixxQkFBaEIsS0FBZ0JBLENBQWhCO0FBRER4Qjs7QUFJQUEsT0FBSyxDQUFMQSxtQ0FBeUMsWUFBVztBQUFFLFdBQU8saUJBQVA7QUFBdERBOztBQUVBO0FBcFNELENBQVksRUFBWjs7ZUF1U2VBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFRmOztBQUVlLHlDQUNmO0FBQ0MsU0FBTyxZQUFNO0FBQ1osUUFBSXlCLEVBQUUsR0FBR0MsR0FBVDtBQUNBLFdBQU9aLENBQUMsV0FBUixRQUFRLENBQVI7QUFGRDtBQUtBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNURDs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJYSxRQUFRLEdBQUcsMkNBQWYsS0FBZSxDQUFmOztBQUtBLHlDQUNBO0FBQ0NyQixRQUFNLENBQU5BOztBQUNBLE1BQUdzQixLQUFLLENBQVIsV0FBb0I7QUFDbkJBLFNBQUssQ0FBTEE7QUFDQTtBQUNEOztBQUVjLCtCQUNmO0FBQUEsTUFEOEJDLElBQzlCO0FBRDhCQSxRQUM5QixHQURxQyxFQUFQQTtBQUM5Qjs7QUFBQSxNQUR5Q3hCLFFBQ3pDO0FBRHlDQSxZQUN6QyxHQURvRCxFQUFYQTtBQUN6Qzs7QUFDQ29CLElBQUUsR0FBR0EsRUFBRSxDQURSLFdBQ01BLEVBQUxBLENBREQsQ0FFQztBQUVBOztBQUNBLE1BQUlLLFlBQVksR0FBaEI7QUFFQSx1QkFQRCxJQU9DLEVBUEQsQ0FTQzs7QUFDQSxNQUFHSCxRQUFRLENBQVJBLFNBQUgsRUFBR0EsQ0FBSCxFQUEwQjtBQUN6QixXQUFPLDBCQUFQLFFBQU8sQ0FBUDtBQUNBOztBQUVELE1BQUlJLFNBQVMsR0FBR1Asd0JBQWhCLEVBQWdCQSxDQUFoQjs7QUFFQVEsa0JBQWdCLE9BQWhCQSxTQUFnQixDQUFoQkE7O0FBRUEsTUFBR0QsU0FBUyxDQUFaLGFBQTBCO0FBQ3pCLFdBQU8sU0FBUyxDQUFULE9BQWlCO0FBQ3ZCRSxZQUR1QixvQkFDZDtBQUNSLGVBQU8sQ0FBUDtBQUZzQjtBQUl2QkMsWUFBTSxFQUFFTCxJQUFJLENBQUNNO0FBSlUsS0FBakIsQ0FBUDtBQU1BOztBQUVELE1BQUcsT0FBT04sSUFBSSxDQUFYLFVBQUgsYUFBc0M7QUFDckNFLGFBQVMsQ0FBVEEsVUFBb0JGLElBQUksQ0FBeEJFO0FBQ0E7O0FBRUQsT0FBSSxJQUFKLE9BQWVGLElBQUksQ0FBbkIsUUFBNEI7QUFDM0JFLGFBQVMsQ0FBVEEsZUFBeUJGLElBQUksQ0FBSkEsT0FBekJFLEdBQXlCRixDQUF6QkU7QUFDQTs7QUFFRCxTQUFPQSxTQUFTLENBQWhCLE1BQU9BLEVBQVA7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZSw2QkFDZjtBQUNDLE1BQUliLENBQUMsR0FBRyxTQUFKQSxDQUFJLEdBQU07QUFFYixRQUFJa0IsTUFBTSxHQUFWO0FBRUEsUUFBSUMsY0FBYyxHQUFHLGtDQUFrQ0MsU0FBbEMsS0FBckI7O0FBRUEsU0FBSSxJQUFKLHVCQUNBO0FBQ0MsVUFBSUMsSUFBSSxHQUFHRixjQUFjLENBQXpCLEdBQXlCLENBQXpCO0FBQ0FELFlBQU0sQ0FBTkEsS0FBWUksRUFBRSxPQUFkSixHQUFjLENBQWRBO0FBQ0E7O0FBRUQ7QUFaRDs7QUFlQWxCLEdBQUMsQ0FBREEsY0FoQkQsSUFnQkNBLENBaEJELENBaUJDOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJEOztBQUVPLDZCQUNQO0FBQ0NzQixJQUFFLENBQUZBO0FBQ0E7QUFDQTs7QUFFTSw4QkFBc0M7QUFBQSxNQUFqQkMsT0FBaUI7QUFBakJBLFdBQWlCLEdBQVAsS0FBVkE7QUFBaUI7O0FBRTVDOztBQUVBLGVBQVk7QUFDWHZCLEtBQUMsR0FBRywwQkFBZ0J3QixDQUFDLENBQURBLEtBQXBCeEIsSUFBb0J3QixDQUFoQixDQUFKeEI7QUFERCxTQUVPO0FBQ05BLEtBQUMsR0FBRywwQkFBSkEsQ0FBSSxDQUFKQTtBQUNBOztBQUVEeUIsaUJBQWUsQ0FBZkEsQ0FBZSxDQUFmQTtBQUVBO0FBQ0E7O0FBRU0sZ0NBQ1A7QUFBQSxNQUQ4QkYsT0FDOUI7QUFEOEJBLFdBQzlCLEdBRHdDLEtBQVZBO0FBQzlCOztBQUNDLE1BQUl2QixDQUFDLEdBQUcsNEJBQVIsQ0FBUSxDQUFSO0FBR0F5QixpQkFBZSxDQUFmQSxDQUFlLENBQWZBO0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JEOztBQUVlLGdDQUNmO0FBQ0MsTUFBSUMsWUFBWSxHQUFHO0FBQ2xCaEQsVUFBTSxFQUFFO0FBRFUsR0FBbkI7O0FBSUEsTUFBRyxDQUFDaUMsSUFBSSxDQUFSLGFBQXNCO0FBQ3JCQSxRQUFJLENBQUpBO0FBREQsU0FFTztBQUNOZSxnQkFBWSxDQUFaQTtBQUNBOztBQUVELE1BQUcsQ0FBQ2YsSUFBSSxDQUFSLGNBQXVCO0FBQ3RCQSxRQUFJLENBQUpBO0FBREQsU0FFTztBQUNOZSxnQkFBWSxDQUFaQTtBQUNBOztBQUVELE1BQUdBLFlBQVksQ0FBZixRQUF3QjtBQUN2QmYsUUFBSSxDQUFKQSxRQUFhakMsd0JBQXNCLENBQUNpQyxJQUFJLENBQUwsb0JBQTBCQSxJQUFJLENBQWpFQSxZQUFtQyxDQUF0QmpDLENBQWJpQztBQWxCRixJQXFCQzs7QUFDQTs7Ozs7QUFHQSxNQUFHLENBQUNlLFlBQVksQ0FBaEIsUUFBeUI7QUFDeEIsV0FBT2YsSUFBSSxDQUFYO0FBQ0EsV0FBT0EsSUFBSSxDQUFYO0FBQ0E7O0FBRUQ7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0RnQixNQUFNLENBQU5BOztBQUVlLG1DQUNmO0FBQUEsTUFEdUNkLFNBQ3ZDO0FBRHVDQSxhQUN2QyxHQURtRCxJQUFaQTtBQUN2Qzs7QUFDQyxNQUFHQSxTQUFTLElBQVosTUFBc0I7QUFDckJBLGFBQVMsR0FBVEE7QUFDQTNCLFFBQUksR0FBR0EsSUFBSSxDQUFYQTtBQUNBOztBQUVEQSxNQUFJLEdBQUdBLElBQUksQ0FBWEEsV0FBT0EsRUFBUEE7QUFFQXlDLFFBQU0sQ0FBTkE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmMsK0RBQ2Y7QUFDQztBQUVBLE1BQUl4QyxRQUFRLEdBQVo7O0FBRUEsTUFBR3lDLE9BQU8sQ0FBUEEsT0FBSCxJQUFHQSxDQUFILEVBQXlCO0FBQ3hCekMsWUFBUSxHQUFHeUMsT0FBTyxDQUFQQSxPQUFYekMsSUFBV3lDLENBQVh6QztBQU5GLElBU0M7OztBQUNBLE1BQUdxQixHQUFHLEtBQU4sTUFBaUI7QUFDaEI7QUFDQTs7QUFFRCxTQUFPWixDQUFDLGVBQVIsUUFBUSxDQUFSO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDs7QUFFZSxxQkFDZjtBQUFBOztBQUNDLE1BQUlJLENBQUMsR0FBRyxTQUFKQSxDQUFJLEdBQU07QUFFYixRQUFHN0IsVUFBUyxDQUFUQSxlQUFILEdBQStCO0FBQzlCLFlBQU0sVUFBTixnQ0FBTSxDQUFOO0FBQ0E7O0FBRUQsUUFBSStDLE1BQU0sR0FORyxFQU1iLENBTmEsQ0FRYjs7QUFDQSxRQUFJVyxVQUFVLEdBQWQ7O0FBQ0EsU0FBSyxJQUFJM0QsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUdDLFVBQVMsQ0FBN0IsUUFBc0NELENBQUMsSUFBdkMsR0FBOEM7QUFDN0MsVUFBSWtELFNBQVMsR0FBR2pELFVBQVMsQ0FBekIsQ0FBeUIsQ0FBekI7QUFDQSxVQUFJMkQsSUFBSSxHQUFHM0QsVUFBUyxDQUFDRCxDQUFDLEdBQXRCLENBQW9CLENBQXBCO0FBQ0EsVUFBSW9CLEtBQUssR0FBR25CLFVBQVMsQ0FBQ0QsQ0FBQyxHQUF2QixDQUFxQixDQUFyQjtBQUNBLFVBQUk2RCxJQUFJLEdBQVI7O0FBRUEsVUFBRyxxQkFBSCxZQUFvQztBQUNuQyxZQUFHWCxTQUFILElBQWdCO0FBQ2ZXLGNBQUksR0FBSkE7QUFDQTtBQUhGLGFBSU87QUFDTix1QkFBYztBQUNiQSxjQUFJLEdBQUpBO0FBQ0E7QUFiMkMsUUFnQjdDO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBR0EsSUFBSSxLQUFQLE1BQWtCO0FBQ2pCLGFBQUssSUFBSXpELENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFqQixNQUEwQkEsQ0FBMUIsSUFBK0I7QUFDOUI0QyxnQkFBTSxDQUFOQSxLQUFZYyxRQUFRLENBQVJBLGNBQVpkLEVBQVljLENBQVpkO0FBQ0E7O0FBQ0Q7QUFDQTs7QUFFRCxVQUFHLENBQUNhLElBQUksQ0FBUixhQUFzQjtBQUNyQkEsWUFBSSxHQUFHQSxJQUFJLENBQUNuQyxXQUFabUMsQ0FBVyxDQUFYQTtBQTNCNEMsUUE2QjdDO0FBQ0E7OztBQUNBLFVBQUdELElBQUksR0FBUCxHQUFhO0FBQ1osYUFBSyxJQUFJeEQsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQWpCLE1BQTBCQSxDQUExQixJQUErQjtBQUM5QjRDLGdCQUFNLENBQU5BLEtBQVlhLElBQUksQ0FBaEJiLENBQWdCLENBQWhCQTtBQUNBO0FBSEYsYUFJTztBQUNOQSxjQUFNLENBQU5BO0FBQ0E7QUEvQ1csTUFrRGI7OztBQUVBO0FBcEREOztBQXVEQWxCLEdBQUMsQ0FBREE7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RGMsc0JBQ2Y7QUFDQyxNQUFHLGlCQUFILFlBQWdDO0FBQy9CLFdBQU9WLEtBQVA7QUFDQTs7QUFFRDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBLElBQUkyQyxPQUFPLEdBQVg7QUFFQSxJQUFJQyxXQUFXLEdBQWY7O0FBRUEsMkJBQ0E7QUFDQ0MsU0FBTyxDQUFQQTtBQUNBRCxhQUFXLENBQVhBO0VBR0Q7QUFDQTtBQUNDO0FBQ0E7QUFDQTtBQUVEO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQztBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQU9BLGdDQUNBO0FBQ0M7QUFDQUUseUJBQWMsWUFBTTtBQUNuQkE7QUFEREE7QUFHQTs7QUFFRCxrREFDQTtBQUNDLE1BQUdDLE9BQU8sQ0FBVixJQUFlO0FBQ2RDLGdCQUFZLEtBQVpBLE9BQVksQ0FBWkE7QUFDQTs7QUFFRCxPQUFLLElBQUlwRSxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR2lCLFFBQVEsQ0FBNUIsUUFBcUNqQixDQUFyQyxJQUEwQztBQUN6Q3FFLFdBQU8sVUFBVWhDLEVBQUUsQ0FBRkEsV0FBVixDQUFVQSxDQUFWLEVBQTRCcEIsUUFBUSxDQUEzQ29ELENBQTJDLENBQXBDLENBQVBBO0FBQ0E7QUFDRDs7QUFFRCwwQ0FDQTtBQUNDLE1BQUluQixTQUFTLEdBQUdvQixJQUFJLENBQXBCO0FBQ0EsTUFBSUMsU0FBUyxHQUFiOztBQUVBTCx5QkFBYyxZQUFNO0FBQ25CLFFBQUlqQixjQUFjLEdBQUcsa0NBQWtDQyxTQUFsQyxLQUFyQjtBQUNBLFFBQUlzQixXQUFXLEdBQWY7O0FBRUEsU0FBSSxJQUFKLHVCQUNBO0FBQ0MsVUFBSXJCLElBQUksR0FBR0YsY0FBYyxDQUF6QixHQUF5QixDQUF6QjtBQUNBLFVBQUl3QixRQUFRLEdBQUdILElBQUksQ0FBSkEsU0FGaEIsR0FFZ0JBLENBQWYsQ0FGRCxDQUdDOztBQUVBRCxhQUFPLHVCQUFQQSxRQUFPLENBQVBBO0FBRUFHLGlCQUFXLEdBQUdBLFdBQVcsQ0FBekJBO0FBQ0E7QUFiRk47QUFlQTs7QUFFRCwwQ0FDQTtBQUNDO0FBQ0EsTUFBR0ksSUFBSSxDQUFKQSxNQUFXN0UsT0FBZCxHQUFpQjtBQUNoQjtBQUhGLElBS0M7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQXlFLHlCQUFjLFlBQU07QUFDbkJBLDhCQUFpQkksSUFBSSxDQUFyQkosQ0FBaUJJLEVBQWpCSjtBQWRGLEdBYUNBLEVBYkQsQ0FnQkM7QUFDQTs7QUFDQTs7QUFHRCxvQ0FDQTtBQUNDO0FBQ0EsT0FBSyxJQUFJbEUsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUcwRSxJQUFJLENBQXhCLFFBQWlDMUUsQ0FBakMsSUFBc0M7QUFDckNxQyxNQUFFLEdBQUdBLEVBQUUsQ0FBRkEsV0FBY3FDLElBQUksQ0FBdkJyQyxDQUF1QixDQUFsQkEsQ0FBTEE7QUFIRixJQUtDOzs7QUFFQTtBQUNBOztBQUVELGdEQUNBO0FBQUEsTUFEbUNJLElBQ25DO0FBRG1DQSxRQUNuQyxHQUQwQyxFQUFQQTtBQUNuQzs7QUFDQyxNQUFJa0MsV0FBVyxHQUFmO0FBRUEsTUFBSUMsUUFBUSxHQUFHbEIsT0FBTyxDQUh2QixVQUdDLENBSEQsQ0FLQzs7QUFDQSxPQUFJLElBQUosY0FBc0I7QUFDckIsUUFBR2tCLFFBQVEsQ0FBWCxHQUFXLENBQVgsRUFBa0I7QUFDakIsVUFBSWYsSUFBSSxHQUFHZ0IsV0FBVyxLQUFLRCxRQUFRLENBQVJBLEdBQVEsQ0FBUkEsQ0FBTCxLQUF3QkEsUUFBUSxDQUFSQSxHQUFRLENBQVJBLENBQTlDLElBQXNCLENBQXRCO0FBQ0FELGlCQUFXLENBQVhBLEdBQVcsQ0FBWEE7QUFGRCxXQUdPO0FBQ04sWUFBTSxpQ0FBTix5QkFBTSxDQUFOO0FBQ0E7QUFaSCxJQWVDOzs7QUFDQSxPQUFJLElBQUosZUFBc0I7QUFDckIsUUFBSUcsSUFBSSxHQUFHRixRQUFRLENBQW5CLElBQW1CLENBQW5CO0FBQ0EsUUFBSWYsS0FBSSxHQUFHYyxXQUFXLENBQXRCLElBQXNCLENBQXRCO0FBQ0EsUUFBSUksYUFBYSxHQUFHQyxLQUFLLENBQXpCLElBQXlCLENBQXpCO0FBQ0EsUUFBSUMsY0FBYyxHQUFHSCxJQUFJLENBQXpCOztBQUVBLFFBQUdDLGFBQWEsQ0FBYkEsU0FBdUJsQixLQUFJLENBQTlCLFFBQXVDO0FBQ3RDLFlBQU0sVUFBTixnQ0FBTSxDQUFOO0FBQ0E7O0FBRUQsU0FBSyxJQUFJN0QsQ0FBQyxHQUFWLGdCQUE2QkEsQ0FBQyxHQUFHK0UsYUFBYSxDQUE5QyxRQUF1RC9FLENBQXZELElBQTREO0FBQzNEO0FBQ0FxRSxhQUFPLFVBQVVSLEtBQUksQ0FBSkEsV0FBVixDQUFVQSxDQUFWLEVBQThCa0IsYUFBYSxDQUFsRFYsQ0FBa0QsQ0FBM0MsQ0FBUEE7QUFDQTtBQUNEO0FBQ0Q7QUFDRDs7Ozs7QUFHQSx5Q0FDQTtBQUNDLE1BQUc3QixLQUFLLENBQVIsYUFBc0I7QUFDckJ0QixVQUFNLENBQU5BLFlBQW1CekIsT0FBbkJ5QjtBQUNBO0FBQ0E7O0FBRURBLFFBQU0sQ0FBTkE7QUFDQXNCLE9BQUssQ0FBTEE7QUFDQTs7QUFFRCx5Q0FDQTtBQUNDLE1BQUlILEVBQUUsR0FBR2lDLElBQUksQ0FBYjtBQUFBLE1BQ0M3QixJQUFJLEdBQUc2QixJQUFJLENBRFo7QUFBQSxNQUVDckQsUUFBUSxHQUFHcUQsSUFBSSxDQUZoQjs7QUFJQSxNQUFHLENBQUNsQyx3QkFBSixFQUFJQSxDQUFKLEVBQThCO0FBQzdCOEMsWUFBUSxzQkFBUkEsUUFBUSxDQUFSQTtBQUNBO0FBQ0E7O0FBRUQsTUFBSXZDLFNBQVMsR0FBR1AsbUNBQWhCLElBQWdCQSxDQUFoQjs7QUFFQSxNQUFHTyxTQUFTLEtBQVosTUFBdUI7QUFDdEIsV0FBT2xELE9BQVA7QUFDQTs7QUFFRG1ELGtCQUFnQixVQUFoQkEsU0FBZ0IsQ0FBaEJBOztBQUVBLE1BQUdELFNBQVMsQ0FBWixhQUEwQjtBQUN6QixRQUFJd0MsT0FBTyxHQUFHLFNBQVMsQ0FBVCxRQUFrQjtBQUMvQnRDLFlBRCtCLG9CQUN0QjtBQUNSLGVBQU8sQ0FBUDtBQUY4QjtBQUkvQkMsWUFBTSxFQUFFTCxJQUFJLENBQUNNO0FBSmtCLEtBQWxCLENBQWQ7O0FBT0EsUUFBR04sSUFBSSxDQUFQLFFBQWdCO0FBQ2YyQyxrQkFBWSx3QkFBd0IzQyxJQUFJLENBQXhDMkMsTUFBWSxDQUFaQTtBQUNBOztBQUVEZixXQUFPLGdCQUFQQSxPQUFPLENBQVBBO0FBRUE7QUFoQ0YsSUFtQ0M7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQUc1QixJQUFJLENBQVAsUUFBZ0I7QUFDZjJDLGdCQUFZLHdCQUF3QjNDLElBQUksQ0FBeEMyQyxNQUFZLENBQVpBO0FBQ0E7O0FBRUQsU0FBT2YsT0FBTyxrQkFBa0IxQixTQUFTLENBQVRBLFFBQWhDLFNBQWdDQSxDQUFsQixDQUFkO0FBQ0E7QUFFRDs7Ozs7QUFHQSxzQ0FDQTtBQUFBLE1BRGdDMkIsSUFDaEM7QUFEZ0NBLFFBQ2hDLEdBRHVDLElBQVBBO0FBQ2hDLElBQ0M7QUFDQzs7O0FBQ0FlLGFBQVcsZ0JBSGIsSUFHYSxDQUFYQSxDQUhGLENBSUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRCwwQ0FDQTtBQUNDLE1BQUdmLElBQUksS0FBUCxNQUFrQjtBQUNqQjtBQUNBOztBQUVELE1BQUdBLElBQUksQ0FBSkEsT0FBSCxLQUFvQjtBQUNuQjtBQUNBO0FBQ0FnQixjQUFVLGdCQUFWQSxJQUFVLENBQVZBO0FBQ0E7O0FBRUQsTUFBR2hCLElBQUksQ0FBSkEsT0FBSCxLQUFvQjtBQUNuQmlCLGVBQVcsZ0JBQVhBLElBQVcsQ0FBWEE7QUFDQTs7QUFFRCxNQUFHakIsSUFBSSxDQUFKQSxPQUFILFFBQXVCO0FBQ3RCa0IsZUFBVyxnQkFBWEEsSUFBVyxDQUFYQTtBQUNBOztBQUVELFNBQU8vRixPQUFQO0FBRUE7O0FBR2MsMEVBQ2Y7QUFBQSxNQURnRWdHLGFBQ2hFO0FBRGdFQSxpQkFDaEUsR0FEZ0YseUJBQU0sQ0FDdEYsQ0FEZ0VBO0FBQ2hFOztBQUFBLE1BRDBGQyxRQUMxRjtBQUQwRkEsWUFDMUYsR0FEcUcsSUFBWEE7QUFDMUY7O0FBQ0Msc0NBQXlCLG9CQUFjO0FBRXRDRCxpQkFBYSxDQUFiQSxXQUFhLENBQWJBO0FBRUEsUUFBSUUsSUFBSSxHQUFHLENBQVgsUUFBVyxDQUFYOztBQUVBdkQ7O0FBRUEsUUFBSXdELGFBQWEsR0FBR0MsZ0JBQWdCLENBQXBDLGFBQW9DLENBQXBDOztBQUVBLFNBQUssSUFBSTdGLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHMkYsSUFBSSxDQUF4QixRQUFpQzNGLENBQWpDLElBQXNDO0FBQ3JDLFVBQUkyQyxVQUFTLEdBQUdnRCxJQUFJLENBQXBCLENBQW9CLENBQXBCO0FBQ0EsVUFBSTlCLElBQUksR0FBRytCLGFBQWEsQ0FBeEIsQ0FBd0IsQ0FBeEI7O0FBQ0EsVUFBSUUsU0FBUyxHQUFHbkQsVUFBUyxDQUFUQSxRQUFoQixVQUFnQkEsQ0FBaEI7O0FBRUEwQixhQUFPLG1CQUFQQSxTQUFPLENBQVBBO0FBZnFDLE1BbUJyQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQUosV0FBTyxDQUFQQTtBQUNBOEIsWUFBUSxDQUFSQTs7QUFFQSxrQkFBYTtBQUNaTCxjQUFRLENBQVJBLFFBQVEsQ0FBUkE7QUFDQTs7QUFFREQsaUJBQWEsQ0FBYkEsV0FBYSxDQUFiQTtBQUVBO0FBdkNEO0FBMENBO0FBRUQ7Ozs7Ozs7O0FBTUEsa0NBQWtDO0FBQ2pDLFNBQU92RSxNQUFNLENBRG9CLFVBQ2pDLENBRGlDLENBRWpDOztBQUNHLFNBQU8sS0FBSyxDQUFMLEtBQVdBLE1BQU0sQ0FBakIsbUJBQ0gsY0FBRTtBQUFBLFdBQUltQixFQUFFLENBQUZBLGtCQUFxQkEsRUFBRSxDQUFGQSxLQUFyQkEsSUFBcUJBLEVBQXJCQSxJQUF1Q0EsRUFBRSxDQUE3QztBQUROLEdBQU8sQ0FBUDtBQUdILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBUnpkRDs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FlLDZCQUNmO0FBQ0MsTUFBSVAsQ0FBQyxHQUFHLFNBQUpBLENBQUksR0FBTTtBQUViLFFBQUlrQixNQUFNLEdBQVY7QUFFQSxRQUFJQyxjQUFjLEdBQUcsa0NBQWtDQyxTQUFsQyxLQUFyQjs7QUFFQSxTQUFJLElBQUosdUJBQ0E7QUFDQyxVQUFJQyxJQUFJLEdBQUdGLGNBQWMsQ0FBekIsR0FBeUIsQ0FBekI7QUFDQUQsWUFBTSxDQUFOQSxLQUFZSSxFQUFFLE9BQWRKLEdBQWMsQ0FBZEE7QUFDQTs7QUFFRDtBQVpEOztBQWVBbEIsR0FBQyxDQUFEQSxjQWhCRCxJQWdCQ0EsQ0FoQkQsQ0FpQkM7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FJeEJjLGdCQUNmLENBRUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hEOztBQUVlLHFCQUNmO0FBQUE7O0FBQ0MsTUFBSUEsQ0FBQyxHQUFHLFNBQUpBLENBQUksR0FBTTtBQUViLFFBQUc3QixVQUFTLENBQVRBLGVBQUgsR0FBK0I7QUFDOUIsWUFBTSxVQUFOLGdDQUFNLENBQU47QUFDQTs7QUFFRCxRQUFJK0MsTUFBTSxHQU5HLEVBTWIsQ0FOYSxDQVFiOztBQUNBLFFBQUlnRCxhQUFhLEdBQWpCOztBQUNBLFNBQUssSUFBSWhHLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHQyxVQUFTLENBQTdCLFFBQXNDRCxDQUFDLElBQXZDLEdBQThDO0FBQzdDLFVBQUlrRCxTQUFTLEdBQUdqRCxVQUFTLENBQXpCLENBQXlCLENBQXpCO0FBQ0EsVUFBSTJELElBQUksR0FBRzNELFVBQVMsQ0FBQ0QsQ0FBQyxHQUF0QixDQUFvQixDQUFwQjtBQUNBLFVBQUlvQixLQUFLLEdBQUduQixVQUFTLENBQUNELENBQUMsR0FBdkIsQ0FBcUIsQ0FBckI7QUFDQSxVQUFJNkQsSUFBSSxHQUFSO0FBRUFtQyxtQkFBYSxJQUFiQTs7QUFFQSxVQUFHLHFCQUFILFlBQW9DO0FBQ25DLFlBQUc5QyxTQUFILElBQWdCO0FBQ2ZXLGNBQUksR0FBSkE7QUFDQTtBQUhGLGFBSU87QUFDTix1QkFBYztBQUNiQSxjQUFJLEdBQUpBO0FBQ0E7QUFmMkMsUUFrQjdDO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBR0EsSUFBSSxLQUFQLE1BQWtCO0FBQ2pCLGFBQUssSUFBSXpELENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFqQixNQUEwQkEsQ0FBMUIsSUFBK0I7QUFDOUI0QyxnQkFBTSxDQUFOQSxLQUFZYyxRQUFRLENBQVJBLGNBQVpkLEVBQVljLENBQVpkO0FBQ0E7O0FBQ0Q7QUFDQTs7QUFFRCxVQUFHLENBQUNhLElBQUksQ0FBUixhQUFzQjtBQUNyQkEsWUFBSSxHQUFHQSxJQUFJLENBQUNuQyxXQUFabUMsQ0FBVyxDQUFYQTtBQTdCNEMsUUErQjdDO0FBQ0E7OztBQUNBLFVBQUdELElBQUksR0FBUCxHQUFhO0FBQ1osYUFBSyxJQUFJeEQsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQWpCLE1BQTBCQSxDQUExQixJQUErQjtBQUM5QjtBQUNDNEMsZ0JBQU0sQ0FBTkEsS0FBWWEsSUFBSSxDQUZhLENBRWIsQ0FBaEJiLEVBRjZCLENBRzlCO0FBQ0E7QUFDQTtBQUNBO0FBUEYsYUFRTztBQUNOQSxjQUFNLENBQU5BO0FBQ0E7QUFyRFcsTUF3RGI7OztBQUNBO0FBRUEsV0FBTztBQUNOaUQsV0FBSyxFQURDO0FBRU5yQyxVQUFJLEVBQUVvQztBQUZBLEtBQVA7QUEzREQ7O0FBaUVBbEUsR0FBQyxDQUFEQTtBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJOeEVEOztBQUNBLElBQUlvRSxpQkFBaUIsR0FBckI7O0FBRUEseUNBQ0E7QUFDQyxNQUFHdkQsU0FBUyxDQUFaLGFBQTBCO0FBQ3pCO0FBQ0E7O0FBRUQsU0FBTyxJQUFQLFNBQU8sRUFBUDtBQUNBOztJQUdLUCxPO0FBR0wscUJBQ0E7QUFDQztBQUNBO0FBQ0E7QUFFRDs7Ozs7OztTQUdBK0QsUyxHQUFBQSwwQkFDQTtBQUNDLG9CQUFnQixvQkFBaEI7QUFDQSxXQUFPLEtBQVA7OztTQUdEQyxRLEdBQUFBLG9CQUNBO0FBQ0M7QUFDQTtBQUNEOzs7Ozs7U0FJQUMsaUIsR0FBQUEsNENBQ0E7QUFBQSxRQUR3QjFELFNBQ3hCO0FBRHdCQSxlQUN4QixHQURvQyxJQUFaQTtBQUN4Qjs7QUFDQyxRQUFHQSxTQUFTLElBQVosTUFBc0I7QUFDckJBLGVBQVMsR0FBVEE7QUFDQTs7QUFFRDNCLFFBQUksR0FBRzJCLFNBQVMsQ0FBVEEseUJBQVAzQixXQUFPMkIsRUFBUDNCO0FBRUE7OztTQUdEc0YsWSxHQUFBQSxpQ0FDQTtBQUNDLFdBQU8sRUFBRSxPQUFPLGdCQUFQLFNBQU8sQ0FBUCxLQUFULFdBQU8sQ0FBUDs7O1NBR0RDLG1CLEdBQUFBLDhDQUNBO0FBQ0MsUUFBRyxDQUFDLGtCQUFKLFNBQUksQ0FBSixFQUFrQztBQUNqQyxZQUFNLHVDQUFOLHVCQUFNLENBQU47QUFGRixNQUtDOzs7QUFDQSxRQUFHLHdEQUF3RDlELElBQUksQ0FBL0QsUUFBd0U7QUFDdkUsYUFBTytELG9CQUFvQixDQUFDLGdCQUE1QixTQUE0QixDQUFELENBQTNCO0FBREQsV0FFTztBQUNOO0FBQ0E7OztTQUdGQyxZLEdBQUFBLGlDQUNBO0FBQ0MsUUFBRyxDQUFDLGtCQUFKLFNBQUksQ0FBSixFQUFrQztBQUNqQyxZQUFNLHVDQUFOLHVCQUFNLENBQU47QUFDQTs7QUFFRCxXQUFPRCxvQkFBb0IsQ0FBQyxnQkFBNUIsU0FBNEIsQ0FBRCxDQUEzQjs7Ozs7O2VBT2EsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbEZSLDRDQUNQO0FBQ0MsTUFBRzdELFNBQVMsWUFBWixTQUFpQztBQUNoQ0EsYUFBUyxDQUFUQSxLQUFlLGtCQUFZO0FBQzFCK0MsY0FBUSxDQUFDLElBQUlnQixNQUFNLENBQW5CaEIsT0FBUyxFQUFELENBQVJBO0FBREQvQztBQURELFNBSU87QUFDTitDLFlBQVEsQ0FBQyxJQUFUQSxTQUFTLEVBQUQsQ0FBUkE7QUFDQTtBQUVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWRDs7QUFHZSw4REFBdUU7QUFBQSxNQUEzQ0QsYUFBMkM7QUFBM0NBLGlCQUEyQyxHQUEzQix5QkFBTSxDQUFxQixDQUEzQ0E7QUFBMkM7O0FBQUEsTUFBakJDLFFBQWlCO0FBQWpCQSxZQUFpQixHQUFOLElBQVhBO0FBQWlCOztBQUVsRmlCLFFBQU0sQ0FBTkE7QUFFQSxzQ0FBeUIsb0JBQWM7QUFFdENsQixpQkFBYSxDQUFiQSxRQUFhLENBQWJBO0FBRUhrQixVQUFNLENBQU5BLE9BQWNaLFFBQVEsQ0FBdEJZLE1BQWNaLEVBQWRZO0FBQ0FaLFlBQVEsQ0FBUkE7O0FBRUEsa0JBQWE7QUFDWkwsY0FBUSxDQUFSQSxRQUFRLENBQVJBO0FBQ0E7O0FBRURELGlCQUFhLENBQWJBLFFBQWEsQ0FBYkE7QUFFQTtBQWJFO0FBZUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QVNyQkQsRUFBd0Q7O0FBRXhELEVBQTZDOztBQUU3QztBQUNBLGNBQWM7QUFDZCxHQUFHLEVBQUUsOERBQWU7O0FBRXBCO0FBQ0EsR0FBRyx3REFBSztBQUNSOztBQUVBO0FBQ0EscUNBQXFDLHdEQUFLOztBQUUxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLHVEQUF1RDtBQUNyRyxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQyxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBaUIsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQzNGMUI7QUFBZTtBQUNmO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsVUFBVTtBQUMvQjtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBLFVBQVU7QUFDVixLQUFLO0FBQ0wsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7O0FDL0JEOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOzs7O0FBSkE7QUFDQTtBQU1BO0FBR0EsSUFBSW1CLE1BQUo7QUFDQSxJQUFJQyxTQUFKLEVBQWVDLFVBQWY7O0FBRUEsU0FBU0Msa0JBQVQsR0FDQTtBQUNDLHFCQUFjLFdBQWQsRUFERCxDQUVDO0FBQ0E7O0FBQ0EzRSxhQUFRaUUsaUJBQVIsQ0FBMEJXLGdCQUExQjs7QUFDQSxxQkFBYyxXQUFkO0FBQ0EsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTQyxXQUFULEdBQ0E7QUFDQyx1QkFBT0MsY0FBUCxFQUFrQk4sTUFBbEIsRUFBMEJuQixhQUExQixFQUF5QyxVQUFDMUQsQ0FBRCxFQUFPO0FBQy9DOEUsYUFBUyxHQUFHOUUsQ0FBWjtBQUNBLEdBRkQ7QUFHQTs7QUFFRCxTQUFTb0YsV0FBVCxHQUNBO0FBRUMsTUFBSUMsSUFBSSxHQUFHUixNQUFNLENBQUNTLFNBQWxCO0FBQ0FULFFBQU0sQ0FBQ1MsU0FBUCxHQUFtQkQsSUFBbkI7QUFDQVAsV0FBUyxDQUFDUyxJQUFWLENBQWUsV0FBZjtBQUNBOztBQUVELFNBQVNDLFlBQVQsR0FDQTtBQUNDLDBCQUFRTCxjQUFSLEVBQW1CTixNQUFuQixFQUEyQm5CLGFBQTNCO0FBQ0E7O0FBRURzQixrQkFBa0IsRyxDQUVsQjtBQUVBOztBQUNBLENBQUMsU0FBU1MsSUFBVCxHQUFnQjtBQUNoQlosUUFBTSxHQUFHOUMsUUFBUSxDQUFDMkQsY0FBVCxDQUF3QixRQUF4QixDQUFULENBRGdCLENBSWhCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQztBQUNEOztBQUVBUixhQUFXLEdBYkssQ0FjaEI7QUFDQTs7QUFFQVMsWUFBVSxDQUFDLFlBQU07QUFFaEJQLGVBQVc7QUFFWE8sY0FBVSxDQUFDLFlBQU07QUFDZkgsa0JBQVk7QUFDYixLQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0EsR0FQUyxFQU9QLElBUE8sQ0FBVjtBQVFBLENBekJELEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQSxJQUFJSSxLQUFLLEdBQUcsRUFBWjs7QUFFZSxTQUFTQyxJQUFULENBQWM1RyxJQUFkLEVBQ2Y7QUFDQyxNQUFJNkcsR0FBRyxHQUFJLElBQUlDLElBQUosRUFBRCxDQUFXQyxPQUFYLEVBQVY7O0FBRUEsTUFBRyxPQUFPSixLQUFLLENBQUMzRyxJQUFELENBQVosS0FBdUIsV0FBMUIsRUFBdUM7QUFDdEMyRyxTQUFLLENBQUMzRyxJQUFELENBQUwsR0FBYzZHLEdBQWQ7QUFDQSxXQUFPRixLQUFLLENBQUMzRyxJQUFELENBQVo7QUFDQTs7QUFFRGlELFNBQU8sQ0FBQytELEdBQVIsV0FBb0JoSCxJQUFwQixTQUE4QjZHLEdBQUcsR0FBR0YsS0FBSyxDQUFDM0csSUFBRCxDQUF6QyxFQUFpRCxJQUFqRDtBQUVBLFNBQU8yRyxLQUFLLENBQUMzRyxJQUFELENBQVo7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXG5cdFx0aW1wb3J0IGNvbXBvbmVudENvbmZpZyBmcm9tIFwiLi9zYnV0dG9uLnNpbj90eXBlPXNjcmlwdFwiO1xuXHRcblx0XHRpbXBvcnQgeyBzdHlsZXMsIGNsYXNzZXMsIGR5bmFtaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuaW1wb3J0IHsgc3RhdGVtZW50LCBsb29wLCBzbG90LCBoIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcbmltcG9ydCB7IHN0YXRlbWVudCBhcyBoU3RhdGVtZW50LCBsb29wIGFzIGhMb29wLCBzbG90IGFzIGhTbG90IH0gZnJvbSAnQHNpbnVvdXMvaHlkcmF0aW9uJztcblxuXHRcdFxuXHRcdGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdG1ldGhvZHM6IHt9LFxuXHRcdH0sIGNvbXBvbmVudENvbmZpZyk7XG5cblx0XHRsZXQgaW5zdGFuY2UgPSBmdW5jdGlvbiBTYnV0dG9uKHBhcmVudCwgY3R4KSB7XG5cdFx0XHRcblx0XHR9O1xuXG5cdFx0aW5zdGFuY2UuX2Z1bmN0aW9uYWwgPSB0cnVlO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fY29tcG9uZW50TmFtZSA9ICdTYnV0dG9uJztcblx0XHRpbnN0YW5jZS5fc2xvdHNEYXRhID0ge1wiZGVmYXVsdFwiOntcInBhdGhcIjpbMCwwXSxcInRhZ1wiOlwic3BhblwiLFwiaW5kZXhcIjowfX07XG5cblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcubWV0aG9kcykge1xuXHRcdFx0aW5zdGFuY2Vba2V5XSA9IGNvbmZpZy5tZXRob2RzW2tleV1cblx0XHR9XG5cdFxuXG5cdFx0XG5cdFx0XHRpbnN0YW5jZS5yZW5kZXIgPSBmdW5jdGlvbihjdHgpIHtcblx0XHRcdFx0cmV0dXJuIGgoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidXR0b25cIiB9LCBbXG4gIHNsb3QoY3R4LCBoLCBcImRlZmF1bHRcIiwgXCJzcGFuXCIsIHt9LCBbYERlZmF1bHQgYnV0dG9uIHRleHRgXSksXG5dKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLmh5ZHJhdGUgPSBmdW5jdGlvbihjdHgsIGgpIHtcblx0XHRcdFx0Y3R4LmNsaWNrID0gdGhpcy5jbGljaztcblxuXHRcdFx0XHRsZXQgc3RhdGVtZW50ID0gaFN0YXRlbWVudDtcblx0XHRcdFx0bGV0IGxvb3AgPSBoTG9vcDtcblx0XHRcdFx0bGV0IHNsb3QgPSBoU2xvdDtcblx0XHRcdFx0cmV0dXJuIC0xO1xuO1xuXHRcdFx0fVxuXHRcdFxuXG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgc3RhdGUobykge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICBjb21wdXRlZChvKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgYWxlcnQoMSk7XG4gICAgfVxuICB9XG59OyIsImV4cG9ydCBjb25zdCBfID0gLTE7XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5cblxuZnVuY3Rpb24gY2FtZWxUb1Byb3Aocylcbntcblx0cmV0dXJuIHNcblx0XHQucmVwbGFjZSgvXFwuPyhbQS1aXSspL2csICh4LCB5KSA9PiBgLSR7eS50b0xvd2VyQ2FzZSgpfWApXG5cdFx0LnJlcGxhY2UoL14tLywgJycpO1xufVxuXG5mdW5jdGlvbiBvbmx5VW5pcXVlKHZhbHVlLCBpbmRleCwgc2VsZikgeyBcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDbGFzc09iamVjdChvYmopXG57XG5cdGxldCBjbGFzc2VzID0gW107XG5cblx0Zm9yIChsZXQga2V5IGluIG9iaikge1xuXHRcdGlmKHZhbHVlKG9ialtrZXldKSkge1xuXHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2VzKHN0YXRpY0NsYXNzZXMgPSBbXSwgZHluYW1pYyA9IHt9KVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdFxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYXJnLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKHZhbHVlKGFyZ1tqXSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KFxuXHRcdFx0XHRcdGhhbmRsZUNsYXNzT2JqZWN0KGFyZylcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdChcblx0XHRcdFx0XHRoYW5kbGVDbGFzc09iamVjdCh2YWx1ZShhcmcpKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKCh2LCBpLCBhKSA9PiBhLmluZGV4T2YodikgPT09IGkpO1xuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCBvYmopXG57XG5cdGZvciAobGV0IGtleSBpbiBvYmopIHtcblx0XHRsZXQgdmFsID0gdmFsdWUob2JqW2tleV0pO1xuXHRcdGlmKHZhbCAhPT0gbnVsbCkge1xuXHRcdFx0c3R5bGVzW2NhbWVsVG9Qcm9wKGtleSldID0gdmFsO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSB7fTtcblx0XHRcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgYXJndW1lbnRzW2ldKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgdmFsdWUoYXJndW1lbnRzW2ldKSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3R5bGVzO1xuXHR9XG59IiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnQHNpbnVvdXMvY29tcGlsZXIvc3JjL2VtcHR5JztcblxuXG5pbXBvcnQgeyBoeWRyYXRlLCBkaHRtbCB9IGZyb20gJ3NpbnVvdXMvaHlkcmF0ZSc7XG5cbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkIH0gZnJvbSAnLi9vYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgbG9vcCBhcyBoTG9vcCwgc2xvdCBhcyBoU2xvdCwgc3RhdGVtZW50IGFzIGhTdGF0ZW1lbnQgfSBmcm9tICdAc2ludW91cy9oeWRyYXRpb24nO1xuaW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCBzdGF0ZW1lbnQsIGR5bmFtaWMsIGxvb3AsIHNsb3QgfSBmcm9tICcuL2luZGV4JztcblxuaW1wb3J0IHsgaCB9IGZyb20gJy4vJztcblxuLy8gaW1wb3J0IHsgcmVuZGVyLCBoeWRyYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5sZXQgSElEID0gMDtcblxuXG52YXIgQmFzaWMgPSBmdW5jdGlvbiAoKSB7XG5cblx0ZnVuY3Rpb24gQmFzaWMoKVxuXHR7XG5cdFx0dGhpcy5faXNDb21wb25lbnQgPSB0cnVlO1xuXHRcdHRoaXMuaGlkID0gKytISUQ7XG5cblx0XHR0aGlzLl9wcm9wcyA9IHRoaXMucHJvcHMoKTtcblx0XHR0aGlzLl9wYXNzZWRQcm9wcyA9IHt9O1xuXG5cdFx0Ly8gTG9jYWwgZGF0YVxuXHRcdHRoaXMuX2RhdGEgPSB0aGlzLmRhdGEoKTtcblx0XHQvLyBTdGF0ZWZ1bCBkYXRhXG5cdFx0dGhpcy5fc3RhdGUgPSB0aGlzLnN0YXRlKG9ic2VydmFibGUpO1xuXG5cdFx0dGhpcy5fc2xvdHMgPSB7XG5cdFx0XHRkZWZhdWx0OiBbXSxcblx0XHR9O1xuXG5cdFx0dGhpcy5fY29tcHV0ZWQgPSB0aGlzLmNvbXB1dGVkKGNvbXB1dGVkKTtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXHRcdHRoaXMuX2VsX2luZGV4ID0gMDtcblxuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cblx0XHQvLyBEZWZhdWx0IHByb3AgdmFsdWVzIFxuXHRcdHRoaXMuaW5pdFByb3BzKCk7XG5cblx0XHQvLyB0aGlzLmluaXRUZW1wbGF0ZSgpO1xuXG5cdFx0dGhpcy5zZXRDaGlsZHJlbigpO1xuXHRcdHRoaXMuc2V0UGFyZW50KCk7XG5cblx0XHR0aGlzLmJpbmRDb250ZXh0KCk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5iaW5kQ29udGV4dCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX2NvbXB1dGVkKSB7XG5cdFx0XHR0aGlzLl9jb21wdXRlZFtrZXldID0gdGhpcy5fY29tcHV0ZWRba2V5XS5iaW5kKHRoaXMpO1xuXHRcdH1cblxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX21ldGhvZHMpIHtcblx0XHRcdGxldCBuYW1lID0gdGhpcy5fbWV0aG9kc1trZXldO1xuXHRcdFx0dGhpc1tuYW1lXSA9IHRoaXNbbmFtZV0uYmluZCh0aGlzKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIENvbmZpZ1xuXHQgKi9cblxuXHQvLyBCYXNpYy5wcm90b3R5cGUuc2V0TWV0aG9kcyA9IGZ1bmN0aW9uKG1ldGhvZHMgPSB7fSlcblx0Ly8ge1xuXHQvLyBcdHRoaXMuX21ldGhvZHMgPSBtZXRob2RzO1xuXHQvLyB9XG5cblx0LyoqXG5cdCAqIEhpZXJhcmNoeVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuc2V0Q2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZHJlbiA9IFtdKVxuXHR7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmFkZENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGQpXG5cdHtcblx0XHR0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnNldFBhcmVudCA9IGZ1bmN0aW9uKHBhcmVudCA9IG51bGwpXG5cdHtcblx0XHR0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblx0LyoqXG5cdCAqIFByb3BzXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5wcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmluaXRQcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX3Byb3BzKVxuXHRcdHtcblx0XHRcdGxldCBwcm9wID0gdGhpcy5fcHJvcHNba2V5XTtcblx0XHRcdGxldCB2YWx1ZSA9IG51bGw7XG5cdFx0XHRsZXQgdHlwZSA9IG51bGw7XG5cblx0XHRcdGlmKHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdC8vIHR5cGVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlID0gcHJvcC5kZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2RhdGFba2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NTbG90cyA9IGZ1bmN0aW9uKG5hbWUsIHNsb3RzKVxuXHR7XG5cdFx0dGhpcy5fc2xvdHNbbmFtZV0gPSBzbG90cztcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NQcm9wcyA9IGZ1bmN0aW9uKHByb3BzKVxuXHR7XG5cdFx0Ly8gaWYodHlwZW9mIHRoaXMuX3Bhc3NlZFByb3BzW2NvbXBvbmVudC5oaWRdID09PSAndW5kZWZpbmVkJykge1xuXHRcdC8vIFx0dGhpcy5fcGFzc2VkUHJvcHNbY29tcG9uZW50LmhpZF0gPSB7fTtcblx0XHQvLyB9XG5cblx0XHRmb3IobGV0IGtleSBpbiBwcm9wcylcblx0XHR7XG5cdFx0XHRpZihwcm9wc1trZXldLl9vYnNlcnZhYmxlKSB7XG5cdFx0XHRcdHRoaXMuX2lzU3RhdGVmdWwgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9kYXRhW2tleV0gPSBwcm9wc1trZXldO1xuXHRcdFx0Ly8gaWYodHlwZW9mIHRoaXMuX2RhdGFba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdC8vIFx0dGhyb3cgbmV3IEVycm9yKGBbU2ludW91c10gQ29tcG9uZW50ICR7IHRoaXMubmFtZSB9IGFscmVhZHkgaGFzICR7IGtleSB9IHByb3BlcnR5YClcblx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHQvLyBcdHRoaXMuX2RhdGFba2V5XSA9IHByb3BzW2tleV07XG5cdFx0XHQvLyB9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsaWVudCBzaWRlIGhhbmRsZXIgYWZ0ZXIgU1NSIChoeWRyYXRpb24pXG5cdCAqL1xuXG5cblx0QmFzaWMucHJvdG90eXBlLmhhc1N0YXRlZnVsbERhdGEgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRsZXQgc3RhdGVmdWwgPSBmYWxzZTtcblxuXHRcdGZvcihsZXQgaGlkIGluIHRoaXMuX3Bhc3NlZFByb3BzKSB7XG5cdFx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9wYXNzZWRQcm9wc1toaWRdKSB7XG5cdFx0XHRcdGlmKHRoaXMuX3Bhc3NlZFByb3BzW2hpZF1ba2V5XSkge1xuXHRcdFx0XHRcdHN0YXRlZnVsID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihzdGF0ZWZ1bCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGVmdWwgJiYgdGhpcy5faXNTdGF0ZWZ1bDtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmhhc1N0YXRlbGVzc0RhdGEgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZGF0YSkubGVuZ3RoID4gMDtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2NhbCBjb21wb25lbnQgZGF0YVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmNvbXB1dGVkID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXRlZnVsIGRhdGFcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnN0YXRlID0gZnVuY3Rpb24obylcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiAxLiBDcmVhdGUgY2hpbGQgY29tcG9uZW50cyAoZGlmZmVyZW50IGNvbnRleHQpXG5cdCAqIDIuIFBhc3MgcHJvcHNcblx0ICogMy4gUmVuZGVyXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUuY2hpbGRDb21wb25lbnRzID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiAgTGlmZSBjeWNsZSBob29rc1xuXHQgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLmhvb2sgPSBmdW5jdGlvbih0eXBlID0gJ21vdW50ZWQnKVxuXHR7XG5cdFx0aWYodGhpc1t0eXBlXSkge1xuXHRcdFx0dGhpc1t0eXBlXS5jYWxsKHRoaXMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMuX2NoaWxkcmVuW2ldID09PSBfKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZighdGhpcy5fY2hpbGRyZW5baV0uX2Z1bmN0aW9uYWwpIHtcblx0XHRcdFx0dGhpcy5fY2hpbGRyZW5baV0uaG9vayh0eXBlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5tb3VudGVkID0gZnVuY3Rpb24oKSB7fVxuXG5cdEJhc2ljLnByb3RvdHlwZS51bm1vdW50ZWQgPSBmdW5jdGlvbigpIHt9XG5cblx0LyoqXG5cdCAqIFByaXZhdGUgQVBJIGZvciByZW5kZXIgYW5kIGh5ZHJhdGVcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGN0eCA9IG51bGwpXG5cdHtcblx0XHRpZihjdHggPT09IG51bGwpIHtcblx0XHRcdGN0eCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aC5iaW5kKGN0eCk7XG5cblx0XHRyZXR1cm4gY3R4Ll9fcmVuZGVyKGguYmluZChjdHgpLCB7XG5cdFx0XHRjdHgsXG5cdFx0XHRzdGF0ZW1lbnQsXG5cdFx0XHRsb29wLFxuXHRcdFx0c2xvdCxcblx0XHRcdGQ6IGR5bmFtaWMsXG5cdFx0XHRjOiBjb21wdXRlZCxcblx0XHR9KTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmh5ZHJhdGUgPSBmdW5jdGlvbihjdHggPSBudWxsLCBjb21waWxlciA9IG51bGwpXG5cdHtcblx0XHRpZihjdHggPT09IG51bGwpIHtcblx0XHRcdGN0eCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN0eC5fX2h5ZHJhdGUoY29tcGlsZXIsIHtcblx0XHRcdGN0eCxcblx0XHRcdHN0YXRlbWVudDogaFN0YXRlbWVudCxcblx0XHRcdHNsb3Q6IGhTbG90LFxuXHRcdFx0bG9vcDogaExvb3AsXG5cdFx0XHRkOiBkeW5hbWljLFxuXHRcdFx0YzogY29tcHV0ZWQsXG5cdFx0fSk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cblx0Ly8gQmFzaWMucHJvdG90eXBlLnRlbXBsYXRlQnVpbGRlciA9IGZ1bmN0aW9uKGgsIG9wdHMpXG5cdC8vIHtcblx0Ly8gXHRyZXR1cm4gdGhpc1tgX18keyBvcHRzLnJlbmRlciB9YF0oaCwgb3B0cyk7XG5cdC8vIH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5jb21wb25lbnQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5nZXRVSUQgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdHJldHVybiBgaHlkci0keyBTaW51b3VzLmNyZWF0ZUhJRChpbmRleCkgfWA7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXyhcIm5hbWVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7IH0pO1xuXG5cdHJldHVybiBCYXNpYztcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzaWM7XG4iLCJpbXBvcnQgeyBoLCBocywgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWMoaCwgdGFnLCBvcHRzLCBjaGlsZHJlbilcbntcblx0cmV0dXJuICgpID0+IHtcblx0XHRsZXQgZWwgPSB0YWcoKTtcblx0XHRyZXR1cm4gaChlbCwgb3B0cywgY2hpbGRyZW4pO1xuXHR9O1xuXG59IiwiaW1wb3J0IHsgaCBhcyBocyB9IGZyb20gJ3NpbnVvdXMnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzdHlsZXMsIGNsYXNzZXMsIG9wdGlvbnMsICB9IGZyb20gJy4vJztcbmltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuXG5sZXQgSFRNTFRhZ3MgPSBbXG5cdCdpJywgJ2RpdicsICdzcGFuJywgJ2hyJywgJ2JyJywgJ3N0cm9uZycsICdwcmUnXG5dO1xuXG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbntcblx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcblx0aWYoY2hpbGQuc2V0UGFyZW50KSB7XG5cdFx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaChlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxue1xuXHRlbCA9IGVsLnRvTG93ZXJDYXNlKCk7XG5cdC8vIGVsID0gY29tcHV0ZWQoKCkgPT4gKHR5cGVvZiBlbCA9PT0gJ2Z1bmN0aW9uJyA/IGVsIDogZWwpKTtcblxuXHQvLyBjb25zb2xlLmxvZygnWyBGRiBdJywgZWwsIHRoaXMpXG5cdGxldCBkeW5hbWljQXR0cnMgPSBmYWxzZTtcblxuXHRvcHRpb25zKHRoaXMsIG9wdHMpO1xuXG5cdC8vIElmIEhUTUwgdGFnIHJlbmRlclxuXHRpZihIVE1MVGFncy5pbmNsdWRlcyhlbCkpIHtcblx0XHRyZXR1cm4gaHMoZWwsIG9wdHMsIGNoaWxkcmVuKTtcblx0fVxuXG5cdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldENvbXBvbmVudChlbCk7XG5cblx0cmVnaXN0ZXJDaGlsZHJlbih0aGlzLCBjb21wb25lbnQpO1xuXG5cdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuXHRcdHJldHVybiBjb21wb25lbnQucmVuZGVyKHtcblx0XHRcdGdldFVJRCgpIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fSxcblx0XHRcdF9zbG90czogb3B0cy4kc2xvdHMsXG5cdFx0fSk7XG5cdH1cblxuXHRpZih0eXBlb2Ygb3B0cy5wcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHR9XG5cblx0Zm9yKGxldCBrZXkgaW4gb3B0cy4kc2xvdHMpIHtcblx0XHRjb21wb25lbnQucGFzc1Nsb3RzKGtleSwgb3B0cy4kc2xvdHNba2V5XSk7XHRcblx0fVxuXG5cdHJldHVybiBjb21wb25lbnQucmVuZGVyKCk7XG59IiwiaW1wb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJ0BzaW51b3VzL2xhenknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbXBvbmVudCwgbGF5b3V0LCB0aW1lQmVuY2htYXJrID0gKCkgPT4ge30sIGNhbGxiYWNrID0gbnVsbCkge1xuXG4gICAgbGF5b3V0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgbG9hZENvbXBvbmVudChjb21wb25lbnQsIChpbnN0YW5jZSkgPT4ge1xuXG4gICAgXHR0aW1lQmVuY2htYXJrKCdSZW5kZXInKTtcblxuXHRcdGxheW91dC5hcHBlbmQoaW5zdGFuY2UucmVuZGVyKCkpO1xuXHRcdGluc3RhbmNlLmhvb2soJ21vdW50ZWQnKTtcblxuXHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjayhpbnN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0dGltZUJlbmNobWFyaygnUmVuZGVyJyk7XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH0pO1xufSIsIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvb3AoY29uZGl0aW9uLCBmbilcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cblx0XHRsZXQgbG9vcF9jb25kaXRpb24gPSB0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nID8gY29uZGl0aW9uKCkgOiBjb25kaXRpb247XG5cblx0XHRmb3IobGV0IGtleSBpbiBsb29wX2NvbmRpdGlvbilcblx0XHR7XG5cdFx0XHRsZXQgaXRlbSA9IGxvb3BfY29uZGl0aW9uW2tleV07XG5cdFx0XHRyZXN1bHQucHVzaChmbihpdGVtLCBrZXkpKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXHQvLyBkLl9ub2RlID0gdHJ1ZTtcblxuXHRyZXR1cm4gZDtcbn0iLCJpbXBvcnQgeyBvYnNlcnZhYmxlIGFzIHNpbnVvdXNPYnNlcnZhYmxlLCBjb21wdXRlZCBhcyBzaW51b3VzQ29tcHV0ZWQgfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU9ic2VlcnZhYmxlKGZuKVxue1xuXHRmbi5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cdHJldHVybiBmbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkKHYsIGJpbmRpbmcgPSBmYWxzZSkge1xuXG5cdGxldCBkO1xuXHRcblx0aWYoYmluZGluZykge1xuXHRcdGQgPSBzaW51b3VzQ29tcHV0ZWQodi5iaW5kKHRoaXMpKTtcblx0fSBlbHNlIHtcblx0XHRkID0gc2ludW91c0NvbXB1dGVkKHYpO1xuXHR9XG5cblx0bWFrZU9ic2VlcnZhYmxlKGQpO1xuXG5cdHJldHVybiBkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2YWJsZSh2LCBiaW5kaW5nID0gZmFsc2UpXG57XG5cdGxldCBkID0gc2ludW91c09ic2VydmFibGUodik7XG5cblx0XG5cdG1ha2VPYnNlZXJ2YWJsZShkKTtcblxuXHRyZXR1cm4gZDtcbn0iLCJpbXBvcnQgeyBzdHlsZXMsIGNsYXNzZXMsICB9IGZyb20gJy4vJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3B0aW9ucyhjb250ZXh0LCBvcHRzKVxue1xuXHRsZXQgc2hvdWxkSGFuZGxlID0ge1xuXHRcdHN0eWxlczogZmFsc2UsXG5cdH07XG5cblx0aWYoIW9wdHMuc3RhdGljU3R5bGUpIHtcblx0XHRvcHRzLnN0YXRpY1N0eWxlID0ge307XG5cdH0gZWxzZSB7XG5cdFx0c2hvdWxkSGFuZGxlLnN0eWxlcyA9IHRydWU7XG5cdH1cblxuXHRpZighb3B0cy5keW5hbWljU3R5bGUpIHtcblx0XHRvcHRzLmR5bmFtaWNTdHlsZSA9IFtdO1xuXHR9IGVsc2Uge1xuXHRcdHNob3VsZEhhbmRsZS5zdHlsZXMgPSB0cnVlO1xuXHR9XG5cblx0aWYoc2hvdWxkSGFuZGxlLnN0eWxlcykge1xuXHRcdG9wdHMuc3R5bGUgPSBzdHlsZXMuYXBwbHkoY29udGV4dCwgW29wdHMuc3RhdGljU3R5bGVdLmNvbmNhdChvcHRzLmR5bmFtaWNTdHlsZSkpXG5cdH1cblxuXHQvLyBjb25zb2xlLndhcm4oY29udGV4dCwgb3B0cylcblx0LyoqXG5cdCAqIENsZWFyXG5cdCAqL1xuXHRpZighc2hvdWxkSGFuZGxlLnN0eWxlcykge1xuXHRcdGRlbGV0ZSBvcHRzLnN0YXRpY1N0eWxlO1xuXHRcdGRlbGV0ZSBvcHRzLmR5bmFtaWNTdHlsZTtcblx0fVxuXG5cdHJldHVybiBvcHRzO1xufSIsIndpbmRvdy5fU2ludW91c0NvbXBvbmVudHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXIobmFtZSwgY29tcG9uZW50ID0gbnVsbClcbntcblx0aWYoY29tcG9uZW50ID09IG51bGwpIHtcblx0XHRjb21wb25lbnQgPSBuYW1lO1xuXHRcdG5hbWUgPSBuYW1lLm5hbWU7XG5cdH1cblxuXHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdHdpbmRvdy5fU2ludW91c0NvbXBvbmVudHNbbmFtZV0gPSBjb21wb25lbnQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xvdCgpXG57XG5cdFxufSIsImltcG9ydCB7IGggfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0ZW1lbnQoKVxue1xuXHRsZXQgZCA9ICgpID0+IHtcblxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggJSAzICE9PSAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1N0YXRlbWVudCBzaG91bGQgYmUgb2RkIG51bWJlcicpO1xuXHRcdH1cblxuXHRcdGxldCByZXN1bHQgPSBbXTtcblxuXHRcdC8vIHZhbHVlXG5cdFx0bGV0IHN0YXRlbWVudFNpemUgPSAwO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0bGV0IHNpemUgPSBhcmd1bWVudHNbaSArIDFdO1xuXHRcdFx0bGV0IHZhbHVlID0gYXJndW1lbnRzW2kgKyAyXTtcblx0XHRcdGxldCBub2RlID0gbnVsbDtcblxuXHRcdFx0c3RhdGVtZW50U2l6ZSArPSBzaXplO1xuXG5cdFx0XHRpZih0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGlmKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRcdFx0bm9kZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZihjb25kaXRpb24pIHtcblx0XHRcdFx0XHRub2RlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gY29uc29sZS53YXJuKGksIHNpemUsIG5vZGUpO1xuXHRcdFx0Ly8gUGFzcyBmYWlsZWQgc3RldGVtZW50IGNvbmRpdGlvblxuXHRcdFx0Ly8gTm9ybWlsaXplIGluZGV4IHRoYXQgd2lsbCBiZSB1c2VkIGluIHJlcGxhY2luZyBwbGFjZWhvbGRlciAoYmVsb3cpXG5cdFx0XHRpZihub2RlID09PSBudWxsKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2goZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighbm9kZS5fb2JzZXJ2YWJsZSkge1xuXHRcdFx0XHRub2RlID0gbm9kZShoKTtcblx0XHRcdH1cblx0XHRcdC8vIHJlcGxhY2UgcGxhY2Vob2xkZXIgd2l0aCBub2RlXG5cdFx0XHQvLyBBbmQgY29ycmVjdCBpbmRleFxuXHRcdFx0aWYoc2l6ZSA+IDEpIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcblx0XHRcdFx0XHQvLyBpZihBcnJheS5pc0FycmF5KG5vZGUpKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQucHVzaChub2RlW2pdKTtcblx0XHRcdFx0XHQvLyB9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFx0cmVzdWx0LnB1c2goaiA9PSAwID8gbm9kZSA6IC0xKTtcblx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5vZGVzOiByZXN1bHQsXG5cdFx0XHRzaXplOiBzdGF0ZW1lbnRTaXplLFxuXHRcdH07XG5cdH1cblxuXHRkLl9vYnNlcnZhYmxlID0gdHJ1ZTtcblxuXHRyZXR1cm4gZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWx1ZSh2YWx1ZSlcbntcblx0aWYodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIHZhbHVlKCk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59IiwiaW1wb3J0IHsgaCwgaHMsIGFwaSB9IGZyb20gJ3NpbnVvdXMnO1xuaW1wb3J0IHsgXyB9IGZyb20gJ0BzaW51b3VzL2NvbXBpbGVyL3NyYy9lbXB0eSc7XG5pbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcbmltcG9ydCB7IG9wdGlvbnMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuaW1wb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJ0BzaW51b3VzL2xhenknO1xuaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuXG5sZXQgT0JTRVJWRVI7XG5sZXQgU1RPUkFHRSA9IHt9O1xuXG5sZXQgU1VCU0NSSUJFUlMgPSBbXTtcblxuZnVuY3Rpb24gYWRkU3Vic2NyaWJlcihmbilcbntcblx0Y29uc29sZS5sb2coZm4sIFNVQlNDUklCRVJTKVxuXHRTVUJTQ1JJQkVSUy5wdXNoKGZuKTtcbn1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZVByb3BzKGVsLCBvcHRzKVxuLy8ge1xuXHQvLyBpZighb3B0cy5fcykge1xuXHQvLyBcdHJldHVybjtcblx0Ly8gfVxuXG4vLyBcdGFwaS5wcm9wZXJ0eShlbCwgb3B0cywgbnVsbCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVUYWcocGFyZW50LCBjaGlsZHJlbiwgY3VycmVudEluZGV4LCB2YWx1ZSlcbi8vIHtcbi8vIFx0bGV0IGVsID0gY2hpbGRyZW5bY3VycmVudEluZGV4XTtcblx0XG4vLyBcdGxldCBub2RlcyA9IHZhbHVlKCk7XG5cbi8vIFx0aWYoQXJyYXkuaXNBcnJheShub2RlcykpIHtcblxuLy8gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbi8vIFx0XHRcdGxldCBjaGlsZCA9IG5vZGVzW2ldO1xuLy8gXHRcdFx0aWYodHlwZW9mIGNoaWxkID09PSAnZnVuY3Rpb24nKSB7XG4vLyBcdFx0XHRcdGNoaWxkID0gY2hpbGQoKTtcbi8vIFx0XHRcdH1cbi8vIFx0XHRcdC8vIGNvbnNvbGUubG9nKHBhcmVudCwgIGNoaWxkLnNpemUpXG4vLyBcdFx0XHQvLyBhcGkuaW5zZXJ0KHBhcmVudCwgY2hpbGQsIGNoaWxkcmVuW2N1cnJlbnRJbmRleCArIGldKTtcbi8vIFx0XHRcdC8vIHBhcmVudC5yZXBsYWNlQ2hpbGQoY2hpbGQsIGNoaWxkcmVuW2N1cnJlbnRJbmRleCArIGldKVxuLy8gXHRcdFx0Ly8gY2hpbGRyZW5bY3VycmVudEluZGV4ICsgaV0ucmVwbGFjZVdpdGgoY2hpbGQpO1xuLy8gXHRcdH1cbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRhcGkuaW5zZXJ0KGVsLCBub2RlcywgbnVsbCk7XG4vLyBcdH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZUNoaWxkcmVuKG5vZGUsIGNoaWxkcmVuKVxuLy8ge1xuLy8gXHRsZXQgYmluZENoaWxkcmVuID0gW107XG5cbi8vIFx0aWYobm9kZSAhPT0gbnVsbCkge1xuLy8gXHRcdGJpbmRDaGlsZHJlbiA9IGZpbHRlckNoaWxkTm9kZXMobm9kZSk7XG4vLyBcdH1cblxuLy8gXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4vLyBcdFx0aWYoY2hpbGRyZW5baV0gPT09IF8pIHtcbi8vIFx0XHRcdGNvbnRpbnVlO1xuLy8gXHRcdH1cbi8vIFx0XHQvLyBjb25zb2xlLmVycm9yKGJpbmRDaGlsZHJlbltpXSwgY2hpbGRyZW5baV0pO1xuLy8gXHRcdGh5ZHJhdGVUYWcobm9kZSwgYmluZENoaWxkcmVuLCBpLCBjaGlsZHJlbltpXSk7XG4vLyBcdH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0U2xvdE5vZGUoZWwsIHBhdGgpXG4vLyB7XG4vLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuLy8gXHRcdGVsID0gZWwuY2hpbGROb2Rlc1twYXRoW2ldXTtcbi8vIFx0fVxuXG4vLyBcdHJldHVybiBlbDtcbi8vIH1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZVNsb3RzKGNvbXBvbmVudCwgZWwsIG9wdHMgPSB7fSwgc2xvdHMpXG4vLyB7XG4vLyBcdGlmKCFvcHRzWydpZCddKSB7XG4vLyBcdFx0cmV0dXJuO1xuLy8gXHR9XG5cbi8vIFx0Ly8gaWYob3B0c1snaWQnXSA9PT0gJ2h5ZHItMTMnKSB7XG4vLyBcdC8vIFx0b3B0c1snaWQnXSA9ICdoeWRyLTYnO1xuLy8gXHQvLyB9XG5cbi8vIFx0Ly8gaWYob3B0c1snaWQnXSA9PT0gJ2h5ZHItMzAnKSB7XG4vLyBcdC8vIFx0b3B0c1snaWQnXSA9ICdoeWRyLTIxJztcbi8vIFx0Ly8gfVxuXG4vLyBcdGxldCBiaW5kTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAkeyBvcHRzWydpZCddIH1gKTtcblxuLy8gXHRsZXQgc2xvdE5vZGVzID0ge31cblxuLy8gXHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuLy8gXHRcdGlmKGNvbXBvbmVudC5fc2xvdHNQYXRoW2tleV0pIHtcbi8vIFx0XHRcdGxldCBub2RlID0gZ2V0U2xvdE5vZGUoYmluZE5vZGUsIGNvbXBvbmVudC5fc2xvdHNQYXRoW2tleV0pXG4vLyBcdFx0XHRzbG90Tm9kZXNba2V5XSA9IG5vZGU7XG4vLyBcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gJHtrZXl9IHNsb3QgbmFtZXNwYWNlIGRlZmluZWRgKTtcbi8vIFx0XHR9XG4vLyBcdH1cblxuLy8gXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcbi8vIFx0XHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuLy8gXHRcdFx0bGV0IG5vZGUgPSBzbG90Tm9kZXNba2V5XTtcbi8vIFx0XHRcdGxldCBjaGlsZHJlblNsb3RzID0gc2xvdHNba2V5XTtcblx0XHRcdFxuLy8gXHRcdFx0aWYobm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuLy8gXHRcdFx0XHRub2RlID0gW25vZGVdO1xuLy8gXHRcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdFx0bm9kZSA9IG5vZGUuY2hpbGROb2Rlcztcbi8vIFx0XHRcdH1cblxuLy8gXHRcdFx0aWYoY2hpbGRyZW5TbG90cy5sZW5ndGggPiBub2RlLmxlbmd0aCkge1xuLy8gXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Nsb3QgaHlkcmF0aW9uIGxlbmd0aCBtaXNtYXRjaCcpO1xuLy8gXHRcdFx0fVxuXG4vLyBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuU2xvdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XG4vLyBcdFx0XHRcdGFwaS5pbnNlcnQobm9kZVtpXSwgY2hpbGRyZW5TbG90c1tpXSgpLCBudWxsKTtcbi8vIFx0XHRcdH1cbi8vIFx0XHR9XG4vLyBcdH0pO1xuXHRcbi8vIH1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZShlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxuLy8ge1xuLy8gXHRsZXQgYmluZE5vZGU7XG4vLyBcdGNvbnNvbGUubG9nKHRoaXMsIGVsLCBvcHRzLCBjaGlsZHJlbilcblxuLy8gXHQvLyBpZih0aGlzLm5vZGUpIHtcbi8vIFx0Ly8gXHRiaW5kTm9kZSA9IHRoaXMubm9kZTtcbi8vIFx0Ly8gfVxuXG4vLyBcdGlmKCFvcHRzWydpZCddKSB7XG4vLyBcdFx0cmV0dXJuO1xuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdGJpbmROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7IG9wdHNbJ2lkJ10gfWApO1xuLy8gXHR9XG5cbi8vIFx0Ly8gY29uc29sZS5sb2codGhpcyk7XG4vLyBcdC8vIHRoaXMuY3R4Ll9lbF9pbmRleCsrO1xuXG4vLyBcdGlmKGJpbmROb2RlID09PSBudWxsKSB7XG4vLyBcdFx0cmV0dXJuO1xuLy8gXHR9XG5cdFxuXHQvLyBhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0Ly8gXHRoeWRyYXRlUHJvcHMoYmluZE5vZGUsIG9wdHMpO1xuXHQvLyBcdGh5ZHJhdGVDaGlsZHJlbihiaW5kTm9kZSwgY2hpbGRyZW4pO1xuXHQvLyB9KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gcmVnaXN0ZXJDaGlsZHJlbihwYXJlbnQsIGNoaWxkKVxuLy8ge1xuLy8gXHRwYXJlbnQuYWRkQ2hpbGRyZW4oY2hpbGQpO1xuLy8gXHRpZihjaGlsZC5zZXRQYXJlbnQpIHtcbi8vIFx0XHRjaGlsZC5zZXRQYXJlbnQocGFyZW50KTtcbi8vIFx0fVxuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gY29tcGlsZXIoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbi8vIHtcbi8vIFx0b3B0aW9ucyh0aGlzLCBvcHRzKTtcblx0XG4vLyBcdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcbi8vIFx0XHRoeWRyYXRlLmNhbGwodGhpcywgZWwsIG9wdHMsIGNoaWxkcmVuKTtcbi8vIFx0XHRyZXR1cm4gXztcbi8vIFx0fVxuXHRcdFxuLy8gXHRsZXQgY29tcG9uZW50ID0gU2ludW91cy5nZXRIeWRyYXRlQ29tcG9uZW50KGVsLCBvcHRzKTtcblxuLy8gXHQvLyBjb25zb2xlLmxvZyhjb21wb25lbnQsIGVsLCBvcHRzKVxuLy8gXHRpZihjb21wb25lbnQgPT09IG51bGwpIHtcbi8vIFx0XHRyZXR1cm4gXztcbi8vIFx0fVxuXG4vLyBcdHJlZ2lzdGVyQ2hpbGRyZW4odGhpcy5jdHgsIGNvbXBvbmVudCk7XG5cbi8vIFx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG4vLyBcdFx0Ly8gY29uc29sZS53YXJuKCdzdGFydCBoeWRyYXRpb24nKTtcbi8vIFx0XHRyZXR1cm4gY29tcG9uZW50Lmh5ZHJhdGUoe1xuLy8gXHRcdFx0Z2V0VUlEKCkge1xuLy8gXHRcdFx0XHRyZXR1cm4gLTE7XG4vLyBcdFx0XHR9LFxuLy8gXHRcdFx0X3Nsb3RzOiBvcHRzLiRzbG90cyxcbi8vIFx0XHR9LCBjb21waWxlcik7XG4vLyBcdH1cblxuLy8gXHRpZih0eXBlb2Ygb3B0cy5wcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbi8vIFx0XHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuLy8gXHR9XG5cbi8vIFx0aWYob3B0cy4kc2xvdHMpIHtcbi8vIFx0XHRoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBlbCwgb3B0cywgb3B0cy4kc2xvdHMpO1xuLy8gXHR9XG5cbi8vIFx0cmV0dXJuIGluaXRDb21wb25lbnQoY29tcG9uZW50KTtcbi8vIH1cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGh5ZHJhdGVQcm9wcyhlbCwgb3B0cylcbntcblx0Ly8gY29uc29sZS5sb2cob3B0cylcblx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0YXBpLnByb3BlcnR5KGVsLCBvcHRzLCBudWxsKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVIKGNvbnRleHQsIGVsLCBvcHRpb25zLCBjaGlsZHJlbilcbntcblx0aWYob3B0aW9ucy5fcykge1xuXHRcdGh5ZHJhdGVQcm9wcyhlbCwgb3B0aW9ucyk7XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0aHlkcmF0ZShjb250ZXh0LCBlbC5jaGlsZE5vZGVzW2ldLCBjaGlsZHJlbltpXSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZUxvb3AoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0bGV0IGNvbmRpdGlvbiA9IGFyZ3MuYztcblx0bGV0IHN0YXJ0Tm9kZSA9IG5vZGU7XG5cblx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0bGV0IGxvb3BfY29uZGl0aW9uID0gdHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmRpdGlvbigpIDogY29uZGl0aW9uO1xuXHRcdGxldCBjdXJyZW50Tm9kZSA9IHN0YXJ0Tm9kZTtcblxuXHRcdGZvcihsZXQga2V5IGluIGxvb3BfY29uZGl0aW9uKVxuXHRcdHtcblx0XHRcdGxldCBpdGVtID0gbG9vcF9jb25kaXRpb25ba2V5XTtcblx0XHRcdGxldCBpdGVtQXJncyA9IGFyZ3MuZm4oaXRlbSwga2V5KTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdbaHlkcmF0ZSBsb29wXScsIGN1cnJlbnROb2RlLCBpdGVtQXJncylcblxuXHRcdFx0aHlkcmF0ZShjb250ZXh0LCBjdXJyZW50Tm9kZSwgaXRlbUFyZ3MpO1xuXG5cdFx0XHRjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRFbGVtZW50U2libGluZztcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlVGV4dChjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHQvLyBjb25zb2xlLndhcm4oJ1tURVhUXScsIG5vZGUsIGFyZ3MudCk7XG5cdGlmKGFyZ3MudCA9PT0gXykge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBpZih0eXBlb2YgYXJncy50ICE9PSAnZnVuY3Rpb24nICkge1xuXHQvLyBcdHJldHVybjtcblx0Ly8gfVxuXHQvLyBjb25zb2xlLndhcm4oJ1tURVhUXScsIG5vZGUsIGFyZ3MudCgpKTtcblx0XG5cdC8vIGlmKCFub2RlLl9oeWRyYXRlZCkge1xuXHQvLyBcdG5vZGUuX2h5ZHJhdGVkID0gdHJ1ZTtcblx0XG5cdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdGFwaS5pbnNlcnQobm9kZSwgYXJncy50KCksIG51bGwpO1xuXHR9KTtcblx0Ly8gfVxuXHQvLyBhcGkuaW5zZXJ0KGVsLCBub2RlcywgbnVsbCk7XG59XG5cblxuZnVuY3Rpb24gZ2V0U2xvdE5vZGUoZWwsIHRhZywgcGF0aClcbntcblx0Ly8gY29uc29sZS5sb2coZWwsIHRhZywgcGF0aCk7XG5cdGZvciAodmFyIGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuXHRcdGVsID0gZWwuY2hpbGROb2Rlc1twYXRoW2ldXTtcblx0fVxuXHQvLyBjb25zb2xlLmVycm9yKGVsKTtcblxuXHRyZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVTbG90cyhjb250ZXh0LCBlbCwgb3B0cyA9IHt9LCBzbG90cylcbntcblx0bGV0IGJpbmRlZE5vZGVzID0ge31cblxuXHRsZXQgc2xvdERhdGEgPSBjb250ZXh0Ll9zbG90c0RhdGE7XG5cblx0Ly8gRmluZCBzbG90IGJpbmRpbmcgbm9kZXNcblx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcblx0XHRpZihzbG90RGF0YVtrZXldKSB7XG5cdFx0XHRsZXQgbm9kZSA9IGdldFNsb3ROb2RlKGVsLCBzbG90RGF0YVtrZXldLnRhZywgc2xvdERhdGFba2V5XS5wYXRoKTtcblx0XHRcdGJpbmRlZE5vZGVzW2tleV0gPSBub2RlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vICR7a2V5fSBzbG90IG5hbWVzcGFjZSBkZWZpbmVkYCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gSHlkcmF0ZSBzbG90cyBwZXIgYmluZGVkIHRhZ1xuXHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuXHRcdGxldCBkYXRhID0gc2xvdERhdGFba2V5XTtcblx0XHRsZXQgbm9kZSA9IGJpbmRlZE5vZGVzW2tleV07XG5cdFx0bGV0IGNoaWxkcmVuU2xvdHMgPSBzbG90c1trZXldO1xuXHRcdGxldCBzdGFydE5vZGVJbmRleCA9IGRhdGEuaW5kZXg7XG5cblx0XHRpZihjaGlsZHJlblNsb3RzLmxlbmd0aCA+IG5vZGUubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Nsb3QgaHlkcmF0aW9uIGxlbmd0aCBtaXNtYXRjaCcpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSBzdGFydE5vZGVJbmRleDsgaSA8IGNoaWxkcmVuU2xvdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKG5vZGUuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5TbG90c1tpXSlcblx0XHRcdGh5ZHJhdGUoY29udGV4dCwgbm9kZS5jaGlsZE5vZGVzW2ldLCBjaGlsZHJlblNsb3RzW2ldKTtcblx0XHR9XG5cdH1cbn1cbi8qKlxuICogQ29udGV4dCBzZXR1cFxuICovXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdGlmKGNoaWxkLl9mdW5jdGlvbmFsKSB7XG5cdFx0cGFyZW50LmFkZENoaWxkcmVuKF8pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlVGFnKGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGxldCBlbCA9IGFyZ3MudCxcblx0XHRvcHRzID0gYXJncy5vLFxuXHRcdGNoaWxkcmVuID0gYXJncy5jO1xuXG5cdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcblx0XHRoeWRyYXRlSChjb250ZXh0LCBub2RlLCBvcHRzLCBjaGlsZHJlbik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0SHlkcmF0ZUNvbXBvbmVudChlbCwgb3B0cyk7XG5cblx0aWYoY29tcG9uZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHRyZWdpc3RlckNoaWxkcmVuKGNvbnRleHQsIGNvbXBvbmVudCk7XG5cblx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG5cdFx0bGV0IG5ld0FyZ3MgPSBjb21wb25lbnQuaHlkcmF0ZSh7XG5cdFx0XHRnZXRVSUQoKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH0sXG5cdFx0XHRfc2xvdHM6IG9wdHMuJHNsb3RzLFxuXHRcdH0pO1xuXG5cdFx0aWYob3B0cy4kc2xvdHMpIHtcblx0XHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIG5vZGUsIG9wdHMsIG9wdHMuJHNsb3RzKTtcblx0XHR9XG5cblx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUsIG5ld0FyZ3MpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gc2V0dXAgY29tcG9uZW50XG5cdC8vIGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuXHQvLyBcdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG5cdC8vIH1cblxuXHRpZihvcHRzLiRzbG90cykge1xuXHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIG5vZGUsIG9wdHMsIG9wdHMuJHNsb3RzKTtcblx0fVxuXG5cdHJldHVybiBoeWRyYXRlKGNvbXBvbmVudCwgbm9kZSwgY29tcG9uZW50Lmh5ZHJhdGUoY29tcG9uZW50KSk7XG59XG5cbi8qKlxuICogTWFpbiBoeWRyYXRpb24gZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gaHlkcmF0ZShjb250ZXh0LCBub2RlLCBhcmdzID0gbnVsbClcbntcblx0Ly8gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ3N0YXJ0Jylcblx0XHRoeWRyYXRlSWRsZShjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0Ly8gfSwge1xuXHQvLyBcdHRpbWVvdXQ6IDAsXG5cdC8vIFx0cmVhZDogdHJ1ZVxuXHQvLyB9KTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZUlkbGUoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0aWYoYXJncyA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmKGFyZ3MuX3QgPT09ICdoJykge1xuXHRcdC8vIGFyZ3Mub1snZGF0YS1oeWRyYXRlZCddID0gdHJ1ZTtcblx0XHQvLyBhcmdzLm9bJ19zJ10gPSB0cnVlO1xuXHRcdGh5ZHJhdGVUYWcoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAndCcpIHtcblx0XHRoeWRyYXRlVGV4dChjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXG5cdGlmKGFyZ3MuX3QgPT09ICdsb29wJykge1xuXHRcdGh5ZHJhdGVMb29wKGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cblx0cmV0dXJuIF87XG5cdFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRIeWRyYXRpb24oY29tcG9uZW50LCBoeWRyYXRpb25Sb290LCB0aW1lQmVuY2htYXJrID0gKCkgPT4ge30sIGNhbGxiYWNrID0gbnVsbClcbntcblx0bG9hZENvbXBvbmVudChjb21wb25lbnQsIChpbnN0YW5jZSkgPT4ge1xuXG5cdFx0dGltZUJlbmNobWFyaygnSHlkcmF0aW9uJyk7XG5cblx0XHRsZXQgdHJlZSA9IFtpbnN0YW5jZV07XG5cblx0XHRTaW51b3VzLmNsZWFySElEKCk7XG5cblx0XHRsZXQgY29ubmVjdGVkTm9kZSA9IGZpbHRlckNoaWxkTm9kZXMoaHlkcmF0aW9uUm9vdCk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjb21wb25lbnQgPSB0cmVlW2ldO1xuXHRcdFx0bGV0IG5vZGUgPSBjb25uZWN0ZWROb2RlW2ldO1xuXHRcdFx0bGV0IGh5ZHJhdGlvbiA9IGNvbXBvbmVudC5oeWRyYXRlKGNvbXBvbmVudCk7XG5cdFx0XHRcblx0XHRcdGh5ZHJhdGUoY29tcG9uZW50LCBub2RlLCBoeWRyYXRpb24pO1xuXHRcdH1cblxuXHRcdFxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ3N0YXJ0JywgU1VCU0NSSUJFUlMpO1xuXHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgU1VCU0NSSUJFUlMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBcdGxldCBmbiA9IFNVQlNDUklCRVJTW2ldO1xuXHRcdC8vIFx0Y29uc29sZS53YXJuKGksIFNVQlNDUklCRVJTW2ldKVxuXHRcdC8vIFx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0Ly8gXHRcdC8vIGNvbnNvbGUubG9nKGZuKVxuXHRcdC8vIFx0XHRmbigpXG5cdFx0Ly8gXHR9KTtcblx0XHQvLyBcdC8vIFNVQlNDUklCRVJTW2ldKCk7XG5cdFx0Ly8gfVxuXHRcdC8vIH0pO1xuXHRcdGNvbnNvbGUubG9nKGluc3RhbmNlKTtcblx0XHRpbnN0YW5jZS5ob29rKCdtb3VudGVkJyk7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHRpbWVCZW5jaG1hcmsoJ0h5ZHJhdGlvbicpO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9KTtcblxufVxuXG4vKipcbiAqIEZpbHRlciBvdXQgd2hpdGVzcGFjZSB0ZXh0IG5vZGVzIHVubGVzcyBpdCBoYXMgYSBub3NraXAgaW5kaWNhdG9yLlxuICpcbiAqIEBwYXJhbSAge05vZGV9IHBhcmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZpbHRlckNoaWxkTm9kZXMocGFyZW50KSB7XG5cdHJldHVybiBwYXJlbnQuY2hpbGROb2Rlcztcblx0Ly8gY29uc29sZS53YXJuKHBhcmVudCwgcGFyZW50LmNoaWxkTm9kZXMpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKS5maWx0ZXIoXG4gICAgICAgIGVsID0+IGVsLm5vZGVUeXBlICE9PSAzIHx8IGVsLmRhdGEudHJpbSgpIHx8IGVsLl9ub3NraXBcbiAgICApO1xufVxuIiwiXG5cdFx0aW1wb3J0IGNvbXBvbmVudENvbmZpZyBmcm9tIFwiLi9pbmRleC5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFBhZ2VzSW5kZXgoKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnUGFnZXNJbmRleCc7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSB7fTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSBPYmplY3Qua2V5cyhjb25maWcubWV0aG9kcyk7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9mdW5jdGlvbmFsID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19yZW5kZXIgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcImRpdlwiLCB7fSwgW1xuICBsb29wKGN0eC5fc3RhdGUuaXRlbXMsIChpdGVtLCBrZXkpID0+IHtcbiAgICByZXR1cm4gaChcbiAgICAgIFwic2J1dHRvblwiLFxuICAgICAge1xuICAgICAgICAkc2xvdHM6IHtcbiAgICAgICAgICBkZWZhdWx0OiBbXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBgQnV0dG9uICR7aXRlbX1gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtdXG4gICAgKTtcbiAgfSksXG5dKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGN0eCA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiB7XG4gIF90OiBcImhcIixcbiAgdDogXCJkaXZcIixcbiAgbzoge30sXG4gIGM6IFtcbiAgICB7XG4gICAgICBfdDogXCJsb29wXCIsXG4gICAgICBjOiBjdHguX3N0YXRlLml0ZW1zLFxuICAgICAgZm46IChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBfdDogXCJoXCIsXG4gICAgICAgICAgdDogXCJzYnV0dG9uXCIsXG4gICAgICAgICAgbzoge1xuICAgICAgICAgICAgJHNsb3RzOiB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBfdDogXCJ0XCIsXG4gICAgICAgICAgICAgICAgICB0OiAtMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGM6IFtdLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRleHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcblx0IiwiZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICBzdGF0ZShvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBvKFtdKSxcbiAgICAgIHMxOiBvKDEpXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZChvKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xuICAgICAgICBkLnB1c2goaSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0YXRlLml0ZW1zKGQpOyAvLyB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIC8vIFx0czEgKz0gMTBcbiAgICAgIC8vIH0sIDEwMClcbiAgICB9LFxuICAgIHVubW91dG5lZDogZnVuY3Rpb24gKCkgey8vIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIH1cbiAgfVxufTsiLCJpbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcbmltcG9ydCB7IGh5ZHJhdGUgfSBmcm9tICdAc2ludW91cy9oeWRyYXRpb24nO1xuaW1wb3J0IHJlbmRlciBmcm9tICdAc2ludW91cy9yZW5kZXInO1xuLy8gaW1wb3J0IHRlc3QgZnJvbSAnLi4vY29tcG9uZW50cy90ZXN0LnNpbidcbi8vIGltcG9ydCB0ZXN0MiBmcm9tICcuLi9jb21wb25lbnRzL3Rlc3QyLnNpbidcbmltcG9ydCBidXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9zYnV0dG9uLnNpbidcbmltcG9ydCBJbmRleFBhZ2UgZnJvbSAnLi4vcGFnZXMvaW5kZXguc2luJ1xuaW1wb3J0IHRpbWVCZW5jaG1hcmsgZnJvbSAnLi90aW1lJztcblxuXG4vLyBjb25zdCBJbmRleFBhZ2UgPSBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYWdlSW5kZXhcIiAqLyAnLi4vcGFnZXMvaW5kZXguc2luJylcblxuXG52YXIgTEFZT1VUO1xudmFyIFBhZ2VJbmRleCwgUGFnZUluZGV4MjtcblxuZnVuY3Rpb24gVEVTVF9XRUJQQUNLX0JVSUxEKClcbntcblx0dGltZUJlbmNobWFyaygnU1NSLUJ1aWxkJyk7XG5cdC8vIFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQodGVzdCk7XG5cdC8vIFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQodGVzdDIpO1xuXHRTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KGJ1dHRvbik7XG5cdHRpbWVCZW5jaG1hcmsoJ1NTUi1CdWlsZCcpO1xufVxuXG4vLyBmdW5jdGlvbiBURVNUX0lOSVQoKVxuLy8ge1xuLy8gXHR0aW1lQmVuY2htYXJrKCdTU1ItSW5pdCcpO1xuLy8gXHRQYWdlSW5kZXggPSBuZXcgSW5kZXhQYWdlKCk7XG4vLyBcdFBhZ2VJbmRleDIgPSBuZXcgSW5kZXhQYWdlKCk7XG4vLyBcdHRpbWVCZW5jaG1hcmsoJ1NTUi1Jbml0Jyk7XG4vLyB9XG5cbmZ1bmN0aW9uIFRFU1RfUkVOREVSKClcbntcblx0cmVuZGVyKEluZGV4UGFnZSwgTEFZT1VULCB0aW1lQmVuY2htYXJrLCAoYykgPT4ge1xuXHRcdFBhZ2VJbmRleCA9IGM7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBDTEVBUl9IT09LUygpXG57XG5cdFxuXHRsZXQgaHRtbCA9IExBWU9VVC5pbm5lckhUTUw7XG5cdExBWU9VVC5pbm5lckhUTUwgPSBodG1sO1xuXHRQYWdlSW5kZXguaG9vaygndW5tb3VudGVkJyk7XG59XG5cbmZ1bmN0aW9uIFRFU1RfSFlEUkFURSgpXG57XG5cdGh5ZHJhdGUoSW5kZXhQYWdlLCBMQVlPVVQsIHRpbWVCZW5jaG1hcmspO1xufVxuXG5URVNUX1dFQlBBQ0tfQlVJTEQoKTtcblxuLy8gVEVTVF9JTklUKCk7XG5cbi8vIHJldHVybjtcbihmdW5jdGlvbiBsb2FkKCkge1xuXHRMQVlPVVQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cblxuXHQvLyBMQVlPVVQuaW5uZXJIVE1MID0gJyc7XG5cdC8vIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuXHQvLyBURVNUX0hZRFJBVEUoKTtcblx0Ly8gcmV0dXJuO1xuXG5cdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdC8vIFRFU1RfUkVOREVSKCk7XG5cdC8vIH0sIDIwMDApXG5cblx0VEVTVF9SRU5ERVIoKTtcblx0Ly8gY29uc29sZS5sb2coTEFZT1VULmlubmVySFRNTClcblx0Ly8gcmV0dXJuXG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cblx0XHRDTEVBUl9IT09LUygpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHQgVEVTVF9IWURSQVRFKCk7XG5cdFx0fSwgMzAwKTtcblx0fSwgMTAwMCk7XG59KSgpO1xuIiwibGV0IHRpbWVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUobmFtZSlcbntcblx0bGV0IG5vdyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdGlmKHR5cGVvZiB0aW1lc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aW1lc1tuYW1lXSA9IG5vdztcblx0XHRyZXR1cm4gdGltZXNbbmFtZV07XG5cdH1cblxuXHRjb25zb2xlLmxvZyhgWyB0YiAke25hbWV9IF1gLCBub3cgLSB0aW1lc1tuYW1lXSwgJ21zJyk7XG5cblx0ZGVsZXRlIHRpbWVzW25hbWVdO1xufSJdLCJzb3VyY2VSb290IjoiIn0=