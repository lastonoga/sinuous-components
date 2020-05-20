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

		
	
		

		let config = Object.assign({
			methods: {},
		}, _sbutton_sin_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

		let instance = function Sbutton() {
			_sinuous_component__WEBPACK_IMPORTED_MODULE_1__["Basic"].call(this);
		};
		
		// inherit Basic
		instance.prototype = Object.create(_sinuous_component__WEBPACK_IMPORTED_MODULE_1__["Basic"].prototype);

		// correct the constructor pointer because it points to Basic
		instance.prototype.constructor = instance;
		
		instance.prototype._methods = {};
		
		instance.prototype._componentName = 'Sbutton';
		instance.prototype._shouldHydarate = true;
		instance.prototype._slotsData = {"default":{"path":[0,0],"tag":"span","index":0}};
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
				return h(
  "div",
  {
    staticClass: "button",
    staticStyle: {
      "border-radius": "52px",
    },
    class: () => {
      return [ctx._computed.testClass(), "test"];
    },
    style: () => {
      return { fontSize: ctx._state.s1() + "px" };
    },
    attrs: {
      disabled: true,
    },
    on: {
      click: ctx.click,
    },
  },
  [slot(ctx, h, "default", "span", {}, [`Default button text`])]
);
;
			}
		
			instance.prototype.__hydrate = function() {
				let ctx = this;
				return {
  _t: "h",
  t: "div",
  o: {
    staticClass: "button",
    class: () => {
      return [ctx._computed.testClass(), "test"];
    },
    style: () => {
      return { fontSize: ctx._state.s1() + "px" };
    },
    _s: true,
  },
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
    return {
      timer: null
    };
  },

  state(o) {
    return {
      s1: o(12)
    };
  },

  computed(o) {
    return {
      testClass: o(() => {
        return {
          red: this._state.s1() % 2 === 0
        };
      })
    };
  },

  methods: {
    click: function () {
      alert(1);
    },
    mounted: function () {
      // console.log('mounted');
      this._data.timer = setInterval(() => {
        // console.log('changed');
        this._state.s1(this._state.s1() + 1);
      }, 2000);
    },
    unmoutned: function () {
      clearInterval(this._data.timer);
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
  opts = (0, _.options)(opts); // If HTML tag render

  if (!_i.default.hasComponent(el)) {
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

function argToString() {
  var str = '';

  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'object') {
      for (var key in arguments[i]) {
        if (arguments[i][key]) {
          str += " " + key;
        }
      }
    } else {
      str += " " + arguments[i];
    }
  }

  return str;
}

function argToObject() {
  var str = '';

  for (var i = 0; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      var value = arguments[i][key]; // console.warn(value, key);

      if (typeof value === 'function') {
        value = value();
      }

      this[key] = value;
    }
  }

  return str;
}
/**
 * Parse classes
 * @param  {[type]} static  [description]
 * @param  {[type]} dynamic [description]
 * @return {[type]}         [description]
 */


function classes(str, dynamic) {
  if (str === void 0) {
    str = null;
  }

  if (dynamic === void 0) {
    dynamic = null;
  }

  if (str === null && dynamic === null) {
    return '';
  }

  if (str === null) {
    str = '';
  }

  if (typeof dynamic === 'function') {
    dynamic = dynamic();
  }

  str += argToString.apply(this, dynamic);
  return str;
}
/**
 * Styles
 * @param  {Object} obj     [description]
 * @param  {[type]} dynamic [description]
 * @return {[type]}         [description]
 */


function makeStyleProp(name) {
  return name.replace(/\.?([A-Z]+)/g, function (x, y) {
    return "-" + y.toLowerCase();
  }).replace(/^-/, "");
}

function styles(obj, dynamic) {
  if (obj === void 0) {
    obj = {};
  }

  if (dynamic === void 0) {
    dynamic = null;
  }

  if (typeof dynamic === 'function') {
    dynamic = dynamic();
  }

  if (!Array.isArray(dynamic)) {
    dynamic = [dynamic];
  }

  for (var i = 0; i < dynamic.length; i++) {
    for (var key in dynamic[i]) {
      var value = dynamic[i][key]; // console.warn(value, key);

      if (typeof value === 'function') {
        value = value();
      }

      obj[makeStyleProp(key)] = value;
    }
  }

  return obj;
}

var cloneOptions = ['_s', '$slots'];

function options(options, shouldClone) {
  if (shouldClone === void 0) {
    shouldClone = true;
  }

  var readyOptions = {};

  if (options.on) {
    for (var key in options.on) {
      readyOptions["on" + key] = options.on[key];
    }
  }

  if (options.staticClass || options.class) {
    readyOptions.class = classes.bind(this, options.staticClass || null, options.class || null);
  }

  if (options.staticStyle || options.style) {
    readyOptions.style = styles.bind(this, options.staticStyle || {}, options.style || null);
  }

  if (shouldClone) {
    for (var i = 0; i < cloneOptions.length; i++) {
      var name = cloneOptions[i];

      if (options[name]) {
        readyOptions[name] = options[name];
      }
    }
  }

  return readyOptions;
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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // import subscribe from './subscribe';


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
    // console.log(el, 'Prepare options');
    options = (0, _component2.options)(options, false);

    _sinuous.api.subscribe(function () {
      // console.log(el, 'Change options');
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
  var node = el; // console.log(el, tag, path);
  // try {

  for (var i = 1; i < path.length; i++) {
    node = node.childNodes[path[i]];
  } // } catch(err) {
  // 	console.warn(el, node);
  // }
  // console.error(el);


  return el;
}

function hydrateSlots(context, el, opts, slots) {
  if (opts === void 0) {
    opts = {};
  }

  hydrateProps(el, opts); // if(el === null) {
  // 	console.log(context, el, opts, slots)
  // }

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

    if (typeof _node === 'undefined') {
      console.warn(el, opts, slotData, el[0]);
    }

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
  if (args === null || node === null) {
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
    // console.log(instance);


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

      for (var i = 0; i < 1; i++) {
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
// document.addEventListener('DOMContentLoaded', load);
// return;

(function load() {
  LAYOUT = document.getElementById('layout'); // LAYOUT.innerHTML = '';
  // requestIdleCallback(() => {

  TEST_HYDRATE();
  return; // setTimeout(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uLnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NidXR0b24uc2luP2NlNzkiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb29wLmpzIiwid2VicGFjazovLy8uLi9zcmMvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4iLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguc2luPzQzZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci10ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aW1lLmpzIl0sIm5hbWVzIjpbIl8iLCJ5Iiwic2VsZiIsImNsYXNzZXMiLCJvYmoiLCJzdGF0aWNDbGFzc2VzIiwiZHluYW1pYyIsImkiLCJhcmd1bWVudHMiLCJhcmciLCJBcnJheSIsImoiLCJoYW5kbGVDbGFzc09iamVjdCIsImEiLCJ2YWwiLCJzdHlsZXMiLCJjYW1lbFRvUHJvcCIsImhhbmRsZVN0eWxlc09iamVjdCIsIkhJRCIsIkJhc2ljIiwib2JzZXJ2YWJsZSIsImRlZmF1bHQiLCJjb21wdXRlZCIsIm5hbWUiLCJjaGlsZHJlbiIsInBhcmVudCIsInByb3AiLCJ2YWx1ZSIsInR5cGUiLCJwcm9wcyIsInN0YXRlZnVsIiwiT2JqZWN0IiwiY3R4IiwiaCIsInN0YXRlbWVudCIsImxvb3AiLCJzbG90IiwiZCIsImMiLCJjb21waWxlciIsImhTdGF0ZW1lbnQiLCJoU2xvdCIsImhMb29wIiwiU2ludW91cyIsImVsIiwidGFnIiwiY2hpbGQiLCJvcHRzIiwiZHluYW1pY0F0dHJzIiwiY29tcG9uZW50IiwicmVnaXN0ZXJDaGlsZHJlbiIsImdldFVJRCIsIl9zbG90cyIsIiRzbG90cyIsInJlc3VsdCIsImxvb3BfY29uZGl0aW9uIiwiY29uZGl0aW9uIiwiaXRlbSIsImZuIiwiYmluZGluZyIsInYiLCJtYWtlT2JzZWVydmFibGUiLCJzdHIiLCJhcmdUb1N0cmluZyIsIm1ha2VTdHlsZVByb3AiLCJjbG9uZU9wdGlvbnMiLCJzaG91bGRDbG9uZSIsInJlYWR5T3B0aW9ucyIsIm9wdGlvbnMiLCJ3aW5kb3ciLCJjb250ZXh0IiwiY2hpbGRJbmRleCIsInNpemUiLCJub2RlIiwiZG9jdW1lbnQiLCJTVE9SQUdFIiwiU1VCU0NSSUJFUlMiLCJjb25zb2xlIiwiYXBpIiwiaHlkcmF0ZVByb3BzIiwiaHlkcmF0ZSIsImFyZ3MiLCJzdGFydE5vZGUiLCJjdXJyZW50Tm9kZSIsIml0ZW1BcmdzIiwicGF0aCIsImJpbmRlZE5vZGVzIiwic2xvdERhdGEiLCJnZXRTbG90Tm9kZSIsImRhdGEiLCJjaGlsZHJlblNsb3RzIiwic2xvdHMiLCJzdGFydE5vZGVJbmRleCIsImh5ZHJhdGVIIiwibmV3QXJncyIsImh5ZHJhdGVTbG90cyIsImh5ZHJhdGVJZGxlIiwiaHlkcmF0ZVRhZyIsImh5ZHJhdGVUZXh0IiwiaHlkcmF0ZUxvb3AiLCJ0aW1lQmVuY2htYXJrIiwiY2FsbGJhY2siLCJ0cmVlIiwiY29ubmVjdGVkTm9kZSIsImZpbHRlckNoaWxkTm9kZXMiLCJoeWRyYXRpb24iLCJpbnN0YW5jZSIsInN0YXRlbWVudFNpemUiLCJub2RlcyIsIlNpbnVvdXNDb21wb25lbnRzIiwiY3JlYXRlSElEIiwiY2xlYXJISUQiLCJyZWdpc3RlckNvbXBvbmVudCIsImhhc0NvbXBvbmVudCIsImdldEh5ZHJhdGVDb21wb25lbnQiLCJnZXRDb21wb25lbnRJbnN0YW5jZSIsImdldENvbXBvbmVudCIsIm1vZHVsZSIsImxheW91dCIsIkxBWU9VVCIsIlBhZ2VJbmRleCIsIlBhZ2VJbmRleDIiLCJURVNUX1dFQlBBQ0tfQlVJTEQiLCJidXR0b24iLCJURVNUX1JFTkRFUiIsIkluZGV4UGFnZSIsIkNMRUFSX0hPT0tTIiwiaHRtbCIsImlubmVySFRNTCIsImhvb2siLCJURVNUX0hZRFJBVEUiLCJsb2FkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRUaW1lb3V0IiwidGltZXMiLCJ0aW1lIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBD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RUEsMkJBQ0E7QUFDQ0MsU0FBTyxDQUFQQTtBQUNBRCxhQUFXLENBQVhBO0VBR0Q7QUFDQTtBQUNDO0FBQ0E7QUFDQTtBQUVEO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQztBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQU9BLG1DQUNBO0FBQ0MsTUFBR1IsT0FBTyxDQUFWLElBQWU7QUFDZDtBQUVBQSxXQUFPLEdBQUcsa0NBQVZBLEtBQVUsQ0FBVkE7O0FBRUFVLDJCQUFjLFlBQU07QUFDbkI7QUFDQUE7QUFGREE7QUFJQTtBQUNEOztBQUVELGtE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TyxjQUFVLENBQUMsWUFBTTtBQUNmSCxrQkFBWTtBQUNiLEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHQSxHQVBTLEVBT1AsSUFQTyxDQUFWO0FBUUEsQ0F4QkQsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBLElBQUlJLEtBQUssR0FBRyxFQUFaOztBQUVlLFNBQVNDLElBQVQsQ0FBY2hILElBQWQsRUFDZjtBQUNDLE1BQUlpSCxHQUFHLEdBQUksSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsRUFBVjs7QUFFQSxNQUFHLE9BQU9KLEtBQUssQ0FBQy9HLElBQUQsQ0FBWixLQUF1QixXQUExQixFQUF1QztBQUN0QytHLFNBQUssQ0FBQy9HLElBQUQsQ0FBTCxHQUFjaUgsR0FBZDtBQUNBLFdBQU9GLEtBQUssQ0FBQy9HLElBQUQsQ0FBWjtBQUNBOztBQUVEc0QsU0FBTyxDQUFDOEQsR0FBUixXQUFvQnBILElBQXBCLFNBQThCaUgsR0FBRyxHQUFHRixLQUFLLENBQUMvRyxJQUFELENBQXpDLEVBQWlELElBQWpEO0FBRUEsU0FBTytHLEtBQUssQ0FBQy9HLElBQUQsQ0FBWjtBQUNBLEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcblx0XHRpbXBvcnQgY29tcG9uZW50Q29uZmlnIGZyb20gXCIuL3NidXR0b24uc2luP3R5cGU9c2NyaXB0XCI7XG5cdFxuXHRcdGltcG9ydCB7IEJhc2ljIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcblxuXHRcdGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdG1ldGhvZHM6IHt9LFxuXHRcdH0sIGNvbXBvbmVudENvbmZpZyk7XG5cblx0XHRsZXQgaW5zdGFuY2UgPSBmdW5jdGlvbiBTYnV0dG9uKCkge1xuXHRcdFx0QmFzaWMuY2FsbCh0aGlzKTtcblx0XHR9O1xuXHRcdFxuXHRcdC8vIGluaGVyaXQgQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2ljLnByb3RvdHlwZSk7XG5cblx0XHQvLyBjb3JyZWN0IHRoZSBjb25zdHJ1Y3RvciBwb2ludGVyIGJlY2F1c2UgaXQgcG9pbnRzIHRvIEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gaW5zdGFuY2U7XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzID0ge307XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9jb21wb25lbnROYW1lID0gJ1NidXR0b24nO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2xvdHNEYXRhID0ge1wiZGVmYXVsdFwiOntcInBhdGhcIjpbMCwwXSxcInRhZ1wiOlwic3BhblwiLFwiaW5kZXhcIjowfX07XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzID0gT2JqZWN0LmtleXMoY29uZmlnLm1ldGhvZHMpO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fZnVuY3Rpb25hbCA9IGZhbHNlO1xuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZykge1xuXHRcdFx0aWYodHlwZW9mIGNvbmZpZ1trZXldID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5tZXRob2RzKSB7XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZy5tZXRob2RzW2tleV1cblx0XHR9XG5cdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcmVuZGVyID0gZnVuY3Rpb24oaCwgeyBjdHgsIGNvbXBvbmVudHMsIHJlbmRlciwgc3RhdGVtZW50LCBzbG90LCBsb29wLCBkLCBjIH0pIHtcblx0XHRcdFx0cmV0dXJuIGgoXG4gIFwiZGl2XCIsXG4gIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiNTJweFwiLFxuICAgIH0sXG4gICAgY2xhc3M6ICgpID0+IHtcbiAgICAgIHJldHVybiBbY3R4Ll9jb21wdXRlZC50ZXN0Q2xhc3MoKSwgXCJ0ZXN0XCJdO1xuICAgIH0sXG4gICAgc3R5bGU6ICgpID0+IHtcbiAgICAgIHJldHVybiB7IGZvbnRTaXplOiBjdHguX3N0YXRlLnMxKCkgKyBcInB4XCIgfTtcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBjbGljazogY3R4LmNsaWNrLFxuICAgIH0sXG4gIH0sXG4gIFtzbG90KGN0eCwgaCwgXCJkZWZhdWx0XCIsIFwic3BhblwiLCB7fSwgW2BEZWZhdWx0IGJ1dHRvbiB0ZXh0YF0pXVxuKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGV0IGN0eCA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiB7XG4gIF90OiBcImhcIixcbiAgdDogXCJkaXZcIixcbiAgbzoge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzOiAoKSA9PiB7XG4gICAgICByZXR1cm4gW2N0eC5fY29tcHV0ZWQudGVzdENsYXNzKCksIFwidGVzdFwiXTtcbiAgICB9LFxuICAgIHN0eWxlOiAoKSA9PiB7XG4gICAgICByZXR1cm4geyBmb250U2l6ZTogY3R4Ll9zdGF0ZS5zMSgpICsgXCJweFwiIH07XG4gICAgfSxcbiAgICBfczogdHJ1ZSxcbiAgfSxcbiAgYzogWy0xXSxcbn07XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGltZXI6IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIHN0YXRlKG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgczE6IG8oMTIpXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZChvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlc3RDbGFzczogbygoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVkOiB0aGlzLl9zdGF0ZS5zMSgpICUgMiA9PT0gMFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgYWxlcnQoMSk7XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnbW91bnRlZCcpO1xuICAgICAgdGhpcy5fZGF0YS50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZWQnKTtcbiAgICAgICAgdGhpcy5fc3RhdGUuczEodGhpcy5fc3RhdGUuczEoKSArIDEpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSxcbiAgICB1bm1vdXRuZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fZGF0YS50aW1lcik7XG4gICAgfVxuICB9XG59OyIsImV4cG9ydCBjb25zdCBfID0gLTE7XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5cblxuZnVuY3Rpb24gY2FtZWxUb1Byb3Aocylcbntcblx0cmV0dXJuIHNcblx0XHQucmVwbGFjZSgvXFwuPyhbQS1aXSspL2csICh4LCB5KSA9PiBgLSR7eS50b0xvd2VyQ2FzZSgpfWApXG5cdFx0LnJlcGxhY2UoL14tLywgJycpO1xufVxuXG5mdW5jdGlvbiBvbmx5VW5pcXVlKHZhbHVlLCBpbmRleCwgc2VsZikgeyBcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDbGFzc09iamVjdChvYmopXG57XG5cdGxldCBjbGFzc2VzID0gW107XG5cblx0Zm9yIChsZXQga2V5IGluIG9iaikge1xuXHRcdGlmKHZhbHVlKG9ialtrZXldKSkge1xuXHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2VzKHN0YXRpY0NsYXNzZXMgPSBbXSwgZHluYW1pYyA9IHt9KVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdFxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYXJnLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKHZhbHVlKGFyZ1tqXSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KFxuXHRcdFx0XHRcdGhhbmRsZUNsYXNzT2JqZWN0KGFyZylcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdChcblx0XHRcdFx0XHRoYW5kbGVDbGFzc09iamVjdCh2YWx1ZShhcmcpKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKCh2LCBpLCBhKSA9PiBhLmluZGV4T2YodikgPT09IGkpO1xuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCBvYmopXG57XG5cdGZvciAobGV0IGtleSBpbiBvYmopIHtcblx0XHRsZXQgdmFsID0gdmFsdWUob2JqW2tleV0pO1xuXHRcdGlmKHZhbCAhPT0gbnVsbCkge1xuXHRcdFx0c3R5bGVzW2NhbWVsVG9Qcm9wKGtleSldID0gdmFsO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSB7fTtcblx0XHRcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgYXJndW1lbnRzW2ldKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgdmFsdWUoYXJndW1lbnRzW2ldKSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3R5bGVzO1xuXHR9XG59IiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnQHNpbnVvdXMvY29tcGlsZXIvc3JjL2VtcHR5JztcblxuXG5pbXBvcnQgeyBoeWRyYXRlLCBkaHRtbCB9IGZyb20gJ3NpbnVvdXMvaHlkcmF0ZSc7XG5cbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkIH0gZnJvbSAnLi9vYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgbG9vcCBhcyBoTG9vcCwgc2xvdCBhcyBoU2xvdCwgc3RhdGVtZW50IGFzIGhTdGF0ZW1lbnQgfSBmcm9tICdAc2ludW91cy9oeWRyYXRpb24nO1xuaW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCBzdGF0ZW1lbnQsIGR5bmFtaWMsIGxvb3AsIHNsb3QgfSBmcm9tICcuL2luZGV4JztcblxuaW1wb3J0IHsgaCB9IGZyb20gJy4vJztcblxuLy8gaW1wb3J0IHsgcmVuZGVyLCBoeWRyYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5sZXQgSElEID0gMDtcblxuXG52YXIgQmFzaWMgPSBmdW5jdGlvbiAoKSB7XG5cblx0ZnVuY3Rpb24gQmFzaWMoKVxuXHR7XG5cdFx0dGhpcy5faXNDb21wb25lbnQgPSB0cnVlO1xuXHRcdHRoaXMuaGlkID0gKytISUQ7XG5cblx0XHR0aGlzLl9wcm9wcyA9IHRoaXMucHJvcHMoKTtcblx0XHR0aGlzLl9wYXNzZWRQcm9wcyA9IHt9O1xuXG5cdFx0Ly8gTG9jYWwgZGF0YVxuXHRcdHRoaXMuX2RhdGEgPSB0aGlzLmRhdGEoKTtcblx0XHQvLyBTdGF0ZWZ1bCBkYXRhXG5cdFx0dGhpcy5fc3RhdGUgPSB0aGlzLnN0YXRlKG9ic2VydmFibGUpO1xuXG5cdFx0dGhpcy5fc2xvdHMgPSB7XG5cdFx0XHRkZWZhdWx0OiBbXSxcblx0XHR9O1xuXG5cdFx0dGhpcy5fY29tcHV0ZWQgPSB0aGlzLmNvbXB1dGVkKGNvbXB1dGVkKTtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXHRcdHRoaXMuX2VsX2luZGV4ID0gMDtcblxuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cblx0XHQvLyBEZWZhdWx0IHByb3AgdmFsdWVzIFxuXHRcdHRoaXMuaW5pdFByb3BzKCk7XG5cblx0XHQvLyB0aGlzLmluaXRUZW1wbGF0ZSgpO1xuXG5cdFx0dGhpcy5zZXRDaGlsZHJlbigpO1xuXHRcdHRoaXMuc2V0UGFyZW50KCk7XG5cblx0XHR0aGlzLmJpbmRDb250ZXh0KCk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5iaW5kQ29udGV4dCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX2NvbXB1dGVkKSB7XG5cdFx0XHR0aGlzLl9jb21wdXRlZFtrZXldID0gdGhpcy5fY29tcHV0ZWRba2V5XS5iaW5kKHRoaXMpO1xuXHRcdH1cblxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX21ldGhvZHMpIHtcblx0XHRcdGxldCBuYW1lID0gdGhpcy5fbWV0aG9kc1trZXldO1xuXHRcdFx0dGhpc1tuYW1lXSA9IHRoaXNbbmFtZV0uYmluZCh0aGlzKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIENvbmZpZ1xuXHQgKi9cblxuXHQvLyBCYXNpYy5wcm90b3R5cGUuc2V0TWV0aG9kcyA9IGZ1bmN0aW9uKG1ldGhvZHMgPSB7fSlcblx0Ly8ge1xuXHQvLyBcdHRoaXMuX21ldGhvZHMgPSBtZXRob2RzO1xuXHQvLyB9XG5cblx0LyoqXG5cdCAqIEhpZXJhcmNoeVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuc2V0Q2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZHJlbiA9IFtdKVxuXHR7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmFkZENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGQpXG5cdHtcblx0XHR0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnNldFBhcmVudCA9IGZ1bmN0aW9uKHBhcmVudCA9IG51bGwpXG5cdHtcblx0XHR0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblx0LyoqXG5cdCAqIFByb3BzXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5wcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmluaXRQcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX3Byb3BzKVxuXHRcdHtcblx0XHRcdGxldCBwcm9wID0gdGhpcy5fcHJvcHNba2V5XTtcblx0XHRcdGxldCB2YWx1ZSA9IG51bGw7XG5cdFx0XHRsZXQgdHlwZSA9IG51bGw7XG5cblx0XHRcdGlmKHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdC8vIHR5cGVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlID0gcHJvcC5kZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2RhdGFba2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NTbG90cyA9IGZ1bmN0aW9uKG5hbWUsIHNsb3RzKVxuXHR7XG5cdFx0dGhpcy5fc2xvdHNbbmFtZV0gPSBzbG90cztcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NQcm9wcyA9IGZ1bmN0aW9uKHByb3BzKVxuXHR7XG5cdFx0Ly8gaWYodHlwZW9mIHRoaXMuX3Bhc3NlZFByb3BzW2NvbXBvbmVudC5oaWRdID09PSAndW5kZWZpbmVkJykge1xuXHRcdC8vIFx0dGhpcy5fcGFzc2VkUHJvcHNbY29tcG9uZW50LmhpZF0gPSB7fTtcblx0XHQvLyB9XG5cblx0XHRmb3IobGV0IGtleSBpbiBwcm9wcylcblx0XHR7XG5cdFx0XHRpZihwcm9wc1trZXldLl9vYnNlcnZhYmxlKSB7XG5cdFx0XHRcdHRoaXMuX2lzU3RhdGVmdWwgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9kYXRhW2tleV0gPSBwcm9wc1trZXldO1xuXHRcdFx0Ly8gaWYodHlwZW9mIHRoaXMuX2RhdGFba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdC8vIFx0dGhyb3cgbmV3IEVycm9yKGBbU2ludW91c10gQ29tcG9uZW50ICR7IHRoaXMubmFtZSB9IGFscmVhZHkgaGFzICR7IGtleSB9IHByb3BlcnR5YClcblx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHQvLyBcdHRoaXMuX2RhdGFba2V5XSA9IHByb3BzW2tleV07XG5cdFx0XHQvLyB9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsaWVudCBzaWRlIGhhbmRsZXIgYWZ0ZXIgU1NSIChoeWRyYXRpb24pXG5cdCAqL1xuXG5cblx0QmFzaWMucHJvdG90eXBlLmhhc1N0YXRlZnVsbERhdGEgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRsZXQgc3RhdGVmdWwgPSBmYWxzZTtcblxuXHRcdGZvcihsZXQgaGlkIGluIHRoaXMuX3Bhc3NlZFByb3BzKSB7XG5cdFx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9wYXNzZWRQcm9wc1toaWRdKSB7XG5cdFx0XHRcdGlmKHRoaXMuX3Bhc3NlZFByb3BzW2hpZF1ba2V5XSkge1xuXHRcdFx0XHRcdHN0YXRlZnVsID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihzdGF0ZWZ1bCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGVmdWwgJiYgdGhpcy5faXNTdGF0ZWZ1bDtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmhhc1N0YXRlbGVzc0RhdGEgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZGF0YSkubGVuZ3RoID4gMDtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2NhbCBjb21wb25lbnQgZGF0YVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmNvbXB1dGVkID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXRlZnVsIGRhdGFcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnN0YXRlID0gZnVuY3Rpb24obylcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiAxLiBDcmVhdGUgY2hpbGQgY29tcG9uZW50cyAoZGlmZmVyZW50IGNvbnRleHQpXG5cdCAqIDIuIFBhc3MgcHJvcHNcblx0ICogMy4gUmVuZGVyXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUuY2hpbGRDb21wb25lbnRzID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiAgTGlmZSBjeWNsZSBob29rc1xuXHQgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLmhvb2sgPSBmdW5jdGlvbih0eXBlID0gJ21vdW50ZWQnKVxuXHR7XG5cdFx0aWYodGhpc1t0eXBlXSkge1xuXHRcdFx0dGhpc1t0eXBlXS5jYWxsKHRoaXMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMuX2NoaWxkcmVuW2ldID09PSBfKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZighdGhpcy5fY2hpbGRyZW5baV0uX2Z1bmN0aW9uYWwpIHtcblx0XHRcdFx0dGhpcy5fY2hpbGRyZW5baV0uaG9vayh0eXBlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5tb3VudGVkID0gZnVuY3Rpb24oKSB7fVxuXG5cdEJhc2ljLnByb3RvdHlwZS51bm1vdW50ZWQgPSBmdW5jdGlvbigpIHt9XG5cblx0LyoqXG5cdCAqIFByaXZhdGUgQVBJIGZvciByZW5kZXIgYW5kIGh5ZHJhdGVcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGN0eCA9IG51bGwpXG5cdHtcblx0XHRpZihjdHggPT09IG51bGwpIHtcblx0XHRcdGN0eCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aC5iaW5kKGN0eCk7XG5cblx0XHRyZXR1cm4gY3R4Ll9fcmVuZGVyKGguYmluZChjdHgpLCB7XG5cdFx0XHRjdHgsXG5cdFx0XHRzdGF0ZW1lbnQsXG5cdFx0XHRsb29wLFxuXHRcdFx0c2xvdCxcblx0XHRcdGQ6IGR5bmFtaWMsXG5cdFx0XHRjOiBjb21wdXRlZCxcblx0XHR9KTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmh5ZHJhdGUgPSBmdW5jdGlvbihjdHggPSBudWxsLCBjb21waWxlciA9IG51bGwpXG5cdHtcblx0XHRpZihjdHggPT09IG51bGwpIHtcblx0XHRcdGN0eCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN0eC5fX2h5ZHJhdGUoY29tcGlsZXIsIHtcblx0XHRcdGN0eCxcblx0XHRcdHN0YXRlbWVudDogaFN0YXRlbWVudCxcblx0XHRcdHNsb3Q6IGhTbG90LFxuXHRcdFx0bG9vcDogaExvb3AsXG5cdFx0XHRkOiBkeW5hbWljLFxuXHRcdFx0YzogY29tcHV0ZWQsXG5cdFx0fSk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cblx0Ly8gQmFzaWMucHJvdG90eXBlLnRlbXBsYXRlQnVpbGRlciA9IGZ1bmN0aW9uKGgsIG9wdHMpXG5cdC8vIHtcblx0Ly8gXHRyZXR1cm4gdGhpc1tgX18keyBvcHRzLnJlbmRlciB9YF0oaCwgb3B0cyk7XG5cdC8vIH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5jb21wb25lbnQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5nZXRVSUQgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdHJldHVybiBgaHlkci0keyBTaW51b3VzLmNyZWF0ZUhJRChpbmRleCkgfWA7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXyhcIm5hbWVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7IH0pO1xuXG5cdHJldHVybiBCYXNpYztcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzaWM7XG4iLCJpbXBvcnQgeyBoLCBocywgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWMoaCwgdGFnLCBvcHRzLCBjaGlsZHJlbilcbntcblx0cmV0dXJuICgpID0+IHtcblx0XHRsZXQgZWwgPSB0YWcoKTtcblx0XHRyZXR1cm4gaChlbCwgb3B0cywgY2hpbGRyZW4pO1xuXHR9O1xuXG59IiwiaW1wb3J0IHsgaCBhcyBocyB9IGZyb20gJ3NpbnVvdXMnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBvcHRpb25zLCAgfSBmcm9tICcuLyc7XG5pbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcblxuXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGlmKGNoaWxkLnNldFBhcmVudCkge1xuXHRcdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGgoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbntcblx0ZWwgPSBlbC50b0xvd2VyQ2FzZSgpO1xuXHQvLyBlbCA9IGNvbXB1dGVkKCgpID0+ICh0eXBlb2YgZWwgPT09ICdmdW5jdGlvbicgPyBlbCA6IGVsKSk7XG5cblx0Ly8gY29uc29sZS5sb2coJ1sgRkYgXScsIGVsLCB0aGlzKVxuXHRsZXQgZHluYW1pY0F0dHJzID0gZmFsc2U7XG5cblx0b3B0cyA9IG9wdGlvbnMob3B0cyk7XG5cblx0Ly8gSWYgSFRNTCB0YWcgcmVuZGVyXG5cdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcblx0XHRyZXR1cm4gaHMoZWwsIG9wdHMsIGNoaWxkcmVuKTtcblx0fVxuXG5cdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldENvbXBvbmVudChlbCk7XG5cblx0cmVnaXN0ZXJDaGlsZHJlbih0aGlzLCBjb21wb25lbnQpO1xuXG5cdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuXHRcdHJldHVybiBjb21wb25lbnQucmVuZGVyKHtcblx0XHRcdGdldFVJRCgpIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fSxcblx0XHRcdF9zbG90czogb3B0cy4kc2xvdHMsXG5cdFx0fSk7XG5cdH1cblxuXHRpZih0eXBlb2Ygb3B0cy5wcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHR9XG5cblx0Zm9yKGxldCBrZXkgaW4gb3B0cy4kc2xvdHMpIHtcblx0XHRjb21wb25lbnQucGFzc1Nsb3RzKGtleSwgb3B0cy4kc2xvdHNba2V5XSk7XHRcblx0fVxuXG5cdHJldHVybiBjb21wb25lbnQucmVuZGVyKCk7XG59IiwiaW1wb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJ0BzaW51b3VzL2xhenknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbXBvbmVudCwgbGF5b3V0LCB0aW1lQmVuY2htYXJrID0gKCkgPT4ge30sIGNhbGxiYWNrID0gbnVsbCkge1xuXG4gICAgbGF5b3V0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgbG9hZENvbXBvbmVudChjb21wb25lbnQsIChpbnN0YW5jZSkgPT4ge1xuXG4gICAgXHR0aW1lQmVuY2htYXJrKCdSZW5kZXInKTtcblxuXHRcdGxheW91dC5hcHBlbmQoaW5zdGFuY2UucmVuZGVyKCkpO1xuXHRcdGluc3RhbmNlLmhvb2soJ21vdW50ZWQnKTtcblxuXHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjayhpbnN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0dGltZUJlbmNobWFyaygnUmVuZGVyJyk7XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH0pO1xufSIsIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvb3AoY29uZGl0aW9uLCBmbilcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cblx0XHRsZXQgbG9vcF9jb25kaXRpb24gPSB0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nID8gY29uZGl0aW9uKCkgOiBjb25kaXRpb247XG5cblx0XHRmb3IobGV0IGtleSBpbiBsb29wX2NvbmRpdGlvbilcblx0XHR7XG5cdFx0XHRsZXQgaXRlbSA9IGxvb3BfY29uZGl0aW9uW2tleV07XG5cdFx0XHRyZXN1bHQucHVzaChmbihpdGVtLCBrZXkpKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXHQvLyBkLl9ub2RlID0gdHJ1ZTtcblxuXHRyZXR1cm4gZDtcbn0iLCJpbXBvcnQgeyBvYnNlcnZhYmxlIGFzIHNpbnVvdXNPYnNlcnZhYmxlLCBjb21wdXRlZCBhcyBzaW51b3VzQ29tcHV0ZWQgfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU9ic2VlcnZhYmxlKGZuKVxue1xuXHRmbi5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cdHJldHVybiBmbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkKHYsIGJpbmRpbmcgPSBmYWxzZSkge1xuXG5cdGxldCBkO1xuXHRcblx0aWYoYmluZGluZykge1xuXHRcdGQgPSBzaW51b3VzQ29tcHV0ZWQodi5iaW5kKHRoaXMpKTtcblx0fSBlbHNlIHtcblx0XHRkID0gc2ludW91c0NvbXB1dGVkKHYpO1xuXHR9XG5cblx0bWFrZU9ic2VlcnZhYmxlKGQpO1xuXG5cdHJldHVybiBkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2YWJsZSh2LCBiaW5kaW5nID0gZmFsc2UpXG57XG5cdGxldCBkID0gc2ludW91c09ic2VydmFibGUodik7XG5cblx0XG5cdG1ha2VPYnNlZXJ2YWJsZShkKTtcblxuXHRyZXR1cm4gZDtcbn0iLCJmdW5jdGlvbiBhcmdUb1N0cmluZygpXG57XG5cdGxldCBzdHIgPSAnJztcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbaV0gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IobGV0IGtleSBpbiBhcmd1bWVudHNbaV0pIHtcblx0XHRcdFx0aWYoYXJndW1lbnRzW2ldW2tleV0pIHtcblx0XHRcdFx0XHRzdHIgKz0gYCAkeyBrZXkgfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RyICs9IGAgJHthcmd1bWVudHNbaV19YDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFyZ1RvT2JqZWN0KClcbntcblx0bGV0IHN0ciA9ICcnO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaV1ba2V5XTtcblx0XHRcdC8vIGNvbnNvbGUud2Fybih2YWx1ZSwga2V5KTtcblx0XHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXNba2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogUGFyc2UgY2xhc3Nlc1xuICogQHBhcmFtICB7W3R5cGVdfSBzdGF0aWMgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1t0eXBlXX0gZHluYW1pYyBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiBjbGFzc2VzKHN0ciA9IG51bGwsIGR5bmFtaWMgPSBudWxsKVxue1xuXHRpZihzdHIgPT09IG51bGwgJiYgZHluYW1pYyA9PT0gbnVsbCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGlmKHN0ciA9PT0gbnVsbCkge1xuXHRcdHN0ciA9ICcnO1xuXHR9XG5cblx0aWYodHlwZW9mIGR5bmFtaWMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRkeW5hbWljID0gZHluYW1pYygpO1xuXHR9XG5cblx0c3RyICs9IGFyZ1RvU3RyaW5nLmFwcGx5KHRoaXMsIGR5bmFtaWMpO1xuXHRcblx0cmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBTdHlsZXNcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqICAgICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IGR5bmFtaWMgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZnVuY3Rpb24gbWFrZVN0eWxlUHJvcChuYW1lKVxue1xuXHRyZXR1cm4gbmFtZVxuXHRcdC5yZXBsYWNlKC9cXC4/KFtBLVpdKykvZywgZnVuY3Rpb24gKHgseSkge1xuXHRcdFx0cmV0dXJuIFwiLVwiICsgeS50b0xvd2VyQ2FzZSgpXG5cdFx0fSlcblx0XHQucmVwbGFjZSgvXi0vLCBcIlwiKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVzKG9iaiA9IHt9LCBkeW5hbWljID0gbnVsbClcbntcblx0aWYodHlwZW9mIGR5bmFtaWMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRkeW5hbWljID0gZHluYW1pYygpO1xuXHR9XG5cblx0aWYoIUFycmF5LmlzQXJyYXkoZHluYW1pYykpIHtcblx0XHRkeW5hbWljID0gW2R5bmFtaWNdO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkeW5hbWljLmxlbmd0aDsgaSsrKSB7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gZHluYW1pY1tpXSkge1xuXHRcdFx0bGV0IHZhbHVlID0gZHluYW1pY1tpXVtrZXldO1xuXHRcdFx0Ly8gY29uc29sZS53YXJuKHZhbHVlLCBrZXkpO1xuXHRcdFx0aWYodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUoKTtcblx0XHRcdH1cblxuXHRcdFx0b2JqW21ha2VTdHlsZVByb3Aoa2V5KV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb2JqO1xufVxuXG5sZXQgY2xvbmVPcHRpb25zID0gWydfcycsICckc2xvdHMnXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3B0aW9ucyhvcHRpb25zLCBzaG91bGRDbG9uZSA9IHRydWUpXG57XG5cdGxldCByZWFkeU9wdGlvbnMgPSB7fTtcblxuXHRpZihvcHRpb25zLm9uKSB7XG5cdFx0Zm9yKGxldCBrZXkgaW4gb3B0aW9ucy5vbikge1xuXHRcdFx0cmVhZHlPcHRpb25zW2BvbiR7a2V5fWBdID0gb3B0aW9ucy5vbltrZXldO1xuXHRcdH1cblx0fVxuXG5cdGlmKG9wdGlvbnMuc3RhdGljQ2xhc3MgfHwgb3B0aW9ucy5jbGFzcykge1xuXHRcdHJlYWR5T3B0aW9ucy5jbGFzcyA9IGNsYXNzZXMuYmluZCh0aGlzLCBvcHRpb25zLnN0YXRpY0NsYXNzIHx8IG51bGwsIG9wdGlvbnMuY2xhc3MgfHwgbnVsbCk7XG5cdH1cblxuXHRpZihvcHRpb25zLnN0YXRpY1N0eWxlIHx8IG9wdGlvbnMuc3R5bGUpIHtcblx0XHRyZWFkeU9wdGlvbnMuc3R5bGUgPSBzdHlsZXMuYmluZCh0aGlzLCBvcHRpb25zLnN0YXRpY1N0eWxlIHx8IHt9LCBvcHRpb25zLnN0eWxlIHx8IG51bGwpO1xuXHR9XG5cblx0aWYoc2hvdWxkQ2xvbmUpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNsb25lT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IG5hbWUgPSBjbG9uZU9wdGlvbnNbaV07XG5cdFx0XHRpZihvcHRpb25zW25hbWVdKSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9uc1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlYWR5T3B0aW9ucztcbn0iLCJ3aW5kb3cuX1NpbnVvdXNDb21wb25lbnRzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyKG5hbWUsIGNvbXBvbmVudCA9IG51bGwpXG57XG5cdGlmKGNvbXBvbmVudCA9PSBudWxsKSB7XG5cdFx0Y29tcG9uZW50ID0gbmFtZTtcblx0XHRuYW1lID0gbmFtZS5uYW1lO1xuXHR9XG5cblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHR3aW5kb3cuX1NpbnVvdXNDb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsb3QoKVxue1xuXHRcbn0iLCJpbXBvcnQgeyBoIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KClcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICUgMyAhPT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdGF0ZW1lbnQgc2hvdWxkIGJlIG9kZCBudW1iZXInKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cblx0XHQvLyB2YWx1ZVxuXHRcdGxldCBzdGF0ZW1lbnRTaXplID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGxldCBzaXplID0gYXJndW1lbnRzW2kgKyAxXTtcblx0XHRcdGxldCB2YWx1ZSA9IGFyZ3VtZW50c1tpICsgMl07XG5cdFx0XHRsZXQgbm9kZSA9IG51bGw7XG5cblx0XHRcdHN0YXRlbWVudFNpemUgKz0gc2l6ZTtcblxuXHRcdFx0aWYodHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpZihjb25kaXRpb24oKSkge1xuXHRcdFx0XHRcdG5vZGUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoY29uZGl0aW9uKSB7XG5cdFx0XHRcdFx0bm9kZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnNvbGUud2FybihpLCBzaXplLCBub2RlKTtcblx0XHRcdC8vIFBhc3MgZmFpbGVkIHN0ZXRlbWVudCBjb25kaXRpb25cblx0XHRcdC8vIE5vcm1pbGl6ZSBpbmRleCB0aGF0IHdpbGwgYmUgdXNlZCBpbiByZXBsYWNpbmcgcGxhY2Vob2xkZXIgKGJlbG93KVxuXHRcdFx0aWYobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIW5vZGUuX29ic2VydmFibGUpIHtcblx0XHRcdFx0bm9kZSA9IG5vZGUoaCk7XG5cdFx0XHR9XG5cdFx0XHQvLyByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggbm9kZVxuXHRcdFx0Ly8gQW5kIGNvcnJlY3QgaW5kZXhcblx0XHRcdGlmKHNpemUgPiAxKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdFx0Ly8gaWYoQXJyYXkuaXNBcnJheShub2RlKSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZVtqXSk7XG5cdFx0XHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdFx0XHQvLyBcdHJlc3VsdC5wdXNoKGogPT0gMCA/IG5vZGUgOiAtMSk7XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Ly8gY29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFxuXHRcdHJldHVybiB7XG5cdFx0XHRub2RlczogcmVzdWx0LFxuXHRcdFx0c2l6ZTogc3RhdGVtZW50U2l6ZSxcblx0XHR9O1xuXHR9XG5cblx0ZC5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cblx0cmV0dXJuIGQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsdWUodmFsdWUpXG57XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiB2YWx1ZSgpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufSIsImltcG9ydCB7IGgsIGhzLCBhcGkgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlci9zcmMvZW1wdHknO1xuaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBvcHRpb25zIGFzIHBhcnNlT3B0aW9ucyB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnQHNpbnVvdXMvbGF6eSc7XG4vLyBpbXBvcnQgc3Vic2NyaWJlIGZyb20gJy4vc3Vic2NyaWJlJztcblxubGV0IE9CU0VSVkVSO1xubGV0IFNUT1JBR0UgPSB7fTtcblxubGV0IFNVQlNDUklCRVJTID0gW107XG5cbmZ1bmN0aW9uIGFkZFN1YnNjcmliZXIoZm4pXG57XG5cdGNvbnNvbGUubG9nKGZuLCBTVUJTQ1JJQkVSUylcblx0U1VCU0NSSUJFUlMucHVzaChmbik7XG59XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVQcm9wcyhlbCwgb3B0cylcbi8vIHtcblx0Ly8gaWYoIW9wdHMuX3MpIHtcblx0Ly8gXHRyZXR1cm47XG5cdC8vIH1cblxuLy8gXHRhcGkucHJvcGVydHkoZWwsIG9wdHMsIG51bGwpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlVGFnKHBhcmVudCwgY2hpbGRyZW4sIGN1cnJlbnRJbmRleCwgdmFsdWUpXG4vLyB7XG4vLyBcdGxldCBlbCA9IGNoaWxkcmVuW2N1cnJlbnRJbmRleF07XG5cdFxuLy8gXHRsZXQgbm9kZXMgPSB2YWx1ZSgpO1xuXG4vLyBcdGlmKEFycmF5LmlzQXJyYXkobm9kZXMpKSB7XG5cbi8vIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4vLyBcdFx0XHRsZXQgY2hpbGQgPSBub2Rlc1tpXTtcbi8vIFx0XHRcdGlmKHR5cGVvZiBjaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuLy8gXHRcdFx0XHRjaGlsZCA9IGNoaWxkKCk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0XHQvLyBjb25zb2xlLmxvZyhwYXJlbnQsICBjaGlsZC5zaXplKVxuLy8gXHRcdFx0Ly8gYXBpLmluc2VydChwYXJlbnQsIGNoaWxkLCBjaGlsZHJlbltjdXJyZW50SW5kZXggKyBpXSk7XG4vLyBcdFx0XHQvLyBwYXJlbnQucmVwbGFjZUNoaWxkKGNoaWxkLCBjaGlsZHJlbltjdXJyZW50SW5kZXggKyBpXSlcbi8vIFx0XHRcdC8vIGNoaWxkcmVuW2N1cnJlbnRJbmRleCArIGldLnJlcGxhY2VXaXRoKGNoaWxkKTtcbi8vIFx0XHR9XG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0YXBpLmluc2VydChlbCwgbm9kZXMsIG51bGwpO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVDaGlsZHJlbihub2RlLCBjaGlsZHJlbilcbi8vIHtcbi8vIFx0bGV0IGJpbmRDaGlsZHJlbiA9IFtdO1xuXG4vLyBcdGlmKG5vZGUgIT09IG51bGwpIHtcbi8vIFx0XHRiaW5kQ2hpbGRyZW4gPSBmaWx0ZXJDaGlsZE5vZGVzKG5vZGUpO1xuLy8gXHR9XG5cbi8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuLy8gXHRcdGlmKGNoaWxkcmVuW2ldID09PSBfKSB7XG4vLyBcdFx0XHRjb250aW51ZTtcbi8vIFx0XHR9XG4vLyBcdFx0Ly8gY29uc29sZS5lcnJvcihiaW5kQ2hpbGRyZW5baV0sIGNoaWxkcmVuW2ldKTtcbi8vIFx0XHRoeWRyYXRlVGFnKG5vZGUsIGJpbmRDaGlsZHJlbiwgaSwgY2hpbGRyZW5baV0pO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldFNsb3ROb2RlKGVsLCBwYXRoKVxuLy8ge1xuLy8gXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbi8vIFx0XHRlbCA9IGVsLmNoaWxkTm9kZXNbcGF0aFtpXV07XG4vLyBcdH1cblxuLy8gXHRyZXR1cm4gZWw7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIGVsLCBvcHRzID0ge30sIHNsb3RzKVxuLy8ge1xuLy8gXHRpZighb3B0c1snaWQnXSkge1xuLy8gXHRcdHJldHVybjtcbi8vIFx0fVxuXG4vLyBcdC8vIGlmKG9wdHNbJ2lkJ10gPT09ICdoeWRyLTEzJykge1xuLy8gXHQvLyBcdG9wdHNbJ2lkJ10gPSAnaHlkci02Jztcbi8vIFx0Ly8gfVxuXG4vLyBcdC8vIGlmKG9wdHNbJ2lkJ10gPT09ICdoeWRyLTMwJykge1xuLy8gXHQvLyBcdG9wdHNbJ2lkJ10gPSAnaHlkci0yMSc7XG4vLyBcdC8vIH1cblxuLy8gXHRsZXQgYmluZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHsgb3B0c1snaWQnXSB9YCk7XG5cbi8vIFx0bGV0IHNsb3ROb2RlcyA9IHt9XG5cbi8vIFx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcbi8vIFx0XHRpZihjb21wb25lbnQuX3Nsb3RzUGF0aFtrZXldKSB7XG4vLyBcdFx0XHRsZXQgbm9kZSA9IGdldFNsb3ROb2RlKGJpbmROb2RlLCBjb21wb25lbnQuX3Nsb3RzUGF0aFtrZXldKVxuLy8gXHRcdFx0c2xvdE5vZGVzW2tleV0gPSBub2RlO1xuLy8gXHRcdH0gZWxzZSB7XG4vLyBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vICR7a2V5fSBzbG90IG5hbWVzcGFjZSBkZWZpbmVkYCk7XG4vLyBcdFx0fVxuLy8gXHR9XG5cbi8vIFx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG4vLyBcdFx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcbi8vIFx0XHRcdGxldCBub2RlID0gc2xvdE5vZGVzW2tleV07XG4vLyBcdFx0XHRsZXQgY2hpbGRyZW5TbG90cyA9IHNsb3RzW2tleV07XG5cdFx0XHRcbi8vIFx0XHRcdGlmKG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbi8vIFx0XHRcdFx0bm9kZSA9IFtub2RlXTtcbi8vIFx0XHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRcdG5vZGUgPSBub2RlLmNoaWxkTm9kZXM7XG4vLyBcdFx0XHR9XG5cbi8vIFx0XHRcdGlmKGNoaWxkcmVuU2xvdHMubGVuZ3RoID4gbm9kZS5sZW5ndGgpIHtcbi8vIFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTbG90IGh5ZHJhdGlvbiBsZW5ndGggbWlzbWF0Y2gnKTtcbi8vIFx0XHRcdH1cblxuLy8gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlblNsb3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFxuLy8gXHRcdFx0XHRhcGkuaW5zZXJ0KG5vZGVbaV0sIGNoaWxkcmVuU2xvdHNbaV0oKSwgbnVsbCk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0fVxuLy8gXHR9KTtcblx0XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGUoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbi8vIHtcbi8vIFx0bGV0IGJpbmROb2RlO1xuLy8gXHRjb25zb2xlLmxvZyh0aGlzLCBlbCwgb3B0cywgY2hpbGRyZW4pXG5cbi8vIFx0Ly8gaWYodGhpcy5ub2RlKSB7XG4vLyBcdC8vIFx0YmluZE5vZGUgPSB0aGlzLm5vZGU7XG4vLyBcdC8vIH1cblxuLy8gXHRpZighb3B0c1snaWQnXSkge1xuLy8gXHRcdHJldHVybjtcbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRiaW5kTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAkeyBvcHRzWydpZCddIH1gKTtcbi8vIFx0fVxuXG4vLyBcdC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuLy8gXHQvLyB0aGlzLmN0eC5fZWxfaW5kZXgrKztcblxuLy8gXHRpZihiaW5kTm9kZSA9PT0gbnVsbCkge1xuLy8gXHRcdHJldHVybjtcbi8vIFx0fVxuXHRcblx0Ly8gYXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdC8vIFx0aHlkcmF0ZVByb3BzKGJpbmROb2RlLCBvcHRzKTtcblx0Ly8gXHRoeWRyYXRlQ2hpbGRyZW4oYmluZE5vZGUsIGNoaWxkcmVuKTtcblx0Ly8gfSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbi8vIHtcbi8vIFx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcbi8vIFx0aWYoY2hpbGQuc2V0UGFyZW50KSB7XG4vLyBcdFx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG4vLyBcdH1cbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVyKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG4vLyB7XG4vLyBcdG9wdGlvbnModGhpcywgb3B0cyk7XG5cdFxuLy8gXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG4vLyBcdFx0aHlkcmF0ZS5jYWxsKHRoaXMsIGVsLCBvcHRzLCBjaGlsZHJlbik7XG4vLyBcdFx0cmV0dXJuIF87XG4vLyBcdH1cblx0XHRcbi8vIFx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0SHlkcmF0ZUNvbXBvbmVudChlbCwgb3B0cyk7XG5cbi8vIFx0Ly8gY29uc29sZS5sb2coY29tcG9uZW50LCBlbCwgb3B0cylcbi8vIFx0aWYoY29tcG9uZW50ID09PSBudWxsKSB7XG4vLyBcdFx0cmV0dXJuIF87XG4vLyBcdH1cblxuLy8gXHRyZWdpc3RlckNoaWxkcmVuKHRoaXMuY3R4LCBjb21wb25lbnQpO1xuXG4vLyBcdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuLy8gXHRcdC8vIGNvbnNvbGUud2Fybignc3RhcnQgaHlkcmF0aW9uJyk7XG4vLyBcdFx0cmV0dXJuIGNvbXBvbmVudC5oeWRyYXRlKHtcbi8vIFx0XHRcdGdldFVJRCgpIHtcbi8vIFx0XHRcdFx0cmV0dXJuIC0xO1xuLy8gXHRcdFx0fSxcbi8vIFx0XHRcdF9zbG90czogb3B0cy4kc2xvdHMsXG4vLyBcdFx0fSwgY29tcGlsZXIpO1xuLy8gXHR9XG5cbi8vIFx0aWYodHlwZW9mIG9wdHMucHJvcHMgIT09ICd1bmRlZmluZWQnKSB7XG4vLyBcdFx0Y29tcG9uZW50LnBhc3NQcm9wcyhvcHRzLnByb3BzKTtcbi8vIFx0fVxuXG4vLyBcdGlmKG9wdHMuJHNsb3RzKSB7XG4vLyBcdFx0aHlkcmF0ZVNsb3RzKGNvbXBvbmVudCwgZWwsIG9wdHMsIG9wdHMuJHNsb3RzKTtcbi8vIFx0fVxuXG4vLyBcdHJldHVybiBpbml0Q29tcG9uZW50KGNvbXBvbmVudCk7XG4vLyB9XG5cblxuXG5cblxuXG5mdW5jdGlvbiBoeWRyYXRlUHJvcHMoZWwsIG9wdGlvbnMpXG57XG5cdGlmKG9wdGlvbnMuX3MpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhlbCwgJ1ByZXBhcmUgb3B0aW9ucycpO1xuXG5cdFx0b3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zLCBmYWxzZSk7XG5cblx0XHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGVsLCAnQ2hhbmdlIG9wdGlvbnMnKTtcblx0XHRcdGFwaS5wcm9wZXJ0eShlbCwgb3B0aW9ucywgbnVsbCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZUgoY29udGV4dCwgZWwsIG9wdGlvbnMsIGNoaWxkcmVuKVxue1xuXHRcblx0aHlkcmF0ZVByb3BzKGVsLCBvcHRpb25zKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0aHlkcmF0ZShjb250ZXh0LCBlbC5jaGlsZE5vZGVzW2ldLCBjaGlsZHJlbltpXSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZUxvb3AoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0bGV0IGNvbmRpdGlvbiA9IGFyZ3MuYztcblx0bGV0IHN0YXJ0Tm9kZSA9IG5vZGU7XG5cblx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0bGV0IGxvb3BfY29uZGl0aW9uID0gdHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmRpdGlvbigpIDogY29uZGl0aW9uO1xuXHRcdGxldCBjdXJyZW50Tm9kZSA9IHN0YXJ0Tm9kZTtcblxuXHRcdGZvcihsZXQga2V5IGluIGxvb3BfY29uZGl0aW9uKVxuXHRcdHtcblx0XHRcdGxldCBpdGVtID0gbG9vcF9jb25kaXRpb25ba2V5XTtcblx0XHRcdGxldCBpdGVtQXJncyA9IGFyZ3MuZm4oaXRlbSwga2V5KTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdbaHlkcmF0ZSBsb29wXScsIGN1cnJlbnROb2RlLCBpdGVtQXJncylcblxuXHRcdFx0aHlkcmF0ZShjb250ZXh0LCBjdXJyZW50Tm9kZSwgaXRlbUFyZ3MpO1xuXG5cdFx0XHRjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRFbGVtZW50U2libGluZztcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlVGV4dChjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHQvLyBjb25zb2xlLndhcm4oJ1tURVhUXScsIG5vZGUsIGFyZ3MudCk7XG5cdGlmKGFyZ3MudCA9PT0gXykge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBpZih0eXBlb2YgYXJncy50ICE9PSAnZnVuY3Rpb24nICkge1xuXHQvLyBcdHJldHVybjtcblx0Ly8gfVxuXHQvLyBjb25zb2xlLndhcm4oJ1tURVhUXScsIG5vZGUsIGFyZ3MudCgpKTtcblx0XG5cdC8vIGlmKCFub2RlLl9oeWRyYXRlZCkge1xuXHQvLyBcdG5vZGUuX2h5ZHJhdGVkID0gdHJ1ZTtcblx0XG5cdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdGFwaS5pbnNlcnQobm9kZSwgYXJncy50KCksIG51bGwpO1xuXHR9KTtcblx0Ly8gfVxuXHQvLyBhcGkuaW5zZXJ0KGVsLCBub2RlcywgbnVsbCk7XG59XG5cblxuZnVuY3Rpb24gZ2V0U2xvdE5vZGUoZWwsIHRhZywgcGF0aClcbntcblx0bGV0IG5vZGUgPSBlbDtcblx0Ly8gY29uc29sZS5sb2coZWwsIHRhZywgcGF0aCk7XG5cdC8vIHRyeSB7XG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRub2RlID0gbm9kZS5jaGlsZE5vZGVzW3BhdGhbaV1dO1xuXHRcdH1cblx0Ly8gfSBjYXRjaChlcnIpIHtcblx0Ly8gXHRjb25zb2xlLndhcm4oZWwsIG5vZGUpO1xuXHQvLyB9XG5cdC8vIGNvbnNvbGUuZXJyb3IoZWwpO1xuXG5cdHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVNsb3RzKGNvbnRleHQsIGVsLCBvcHRzID0ge30sIHNsb3RzKVxue1xuXHRoeWRyYXRlUHJvcHMoZWwsIG9wdHMpO1xuXHQvLyBpZihlbCA9PT0gbnVsbCkge1xuXHQvLyBcdGNvbnNvbGUubG9nKGNvbnRleHQsIGVsLCBvcHRzLCBzbG90cylcblx0Ly8gfVxuXG5cdGxldCBiaW5kZWROb2RlcyA9IHt9XG5cblx0bGV0IHNsb3REYXRhID0gY29udGV4dC5fc2xvdHNEYXRhO1xuXG5cdC8vIEZpbmQgc2xvdCBiaW5kaW5nIG5vZGVzXG5cdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG5cdFx0aWYoc2xvdERhdGFba2V5XSkge1xuXHRcdFx0bGV0IG5vZGUgPSBnZXRTbG90Tm9kZShlbCwgc2xvdERhdGFba2V5XS50YWcsIHNsb3REYXRhW2tleV0ucGF0aCk7XG5cdFx0XHRiaW5kZWROb2Rlc1trZXldID0gbm9kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAke2tleX0gc2xvdCBuYW1lc3BhY2UgZGVmaW5lZGApO1xuXHRcdH1cblx0fVxuXG5cdC8vIEh5ZHJhdGUgc2xvdHMgcGVyIGJpbmRlZCB0YWdcblx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcblx0XHRsZXQgZGF0YSA9IHNsb3REYXRhW2tleV07XG5cdFx0bGV0IG5vZGUgPSBiaW5kZWROb2Rlc1trZXldO1xuXHRcdGxldCBjaGlsZHJlblNsb3RzID0gc2xvdHNba2V5XTtcblx0XHRsZXQgc3RhcnROb2RlSW5kZXggPSBkYXRhLmluZGV4O1xuXG5cdFx0aWYodHlwZW9mIG5vZGUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oZWwsIG9wdHMsIHNsb3REYXRhLCBlbFswXSk7XG5cdFx0fVxuXG5cdFx0aWYoY2hpbGRyZW5TbG90cy5sZW5ndGggPiBub2RlLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTbG90IGh5ZHJhdGlvbiBsZW5ndGggbWlzbWF0Y2gnKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gc3RhcnROb2RlSW5kZXg7IGkgPCBjaGlsZHJlblNsb3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhub2RlLmNoaWxkTm9kZXNbaV0sIGNoaWxkcmVuU2xvdHNbaV0pXG5cdFx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5TbG90c1tpXSk7XG5cdFx0fVxuXHR9XG59XG4vKipcbiAqIENvbnRleHQgc2V0dXBcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJDaGlsZHJlbihwYXJlbnQsIGNoaWxkKVxue1xuXHRpZihjaGlsZC5fZnVuY3Rpb25hbCkge1xuXHRcdHBhcmVudC5hZGRDaGlsZHJlbihfKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwYXJlbnQuYWRkQ2hpbGRyZW4oY2hpbGQpO1xuXHRjaGlsZC5zZXRQYXJlbnQocGFyZW50KTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVRhZyhjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRsZXQgZWwgPSBhcmdzLnQsXG5cdFx0b3B0cyA9IGFyZ3Mubyxcblx0XHRjaGlsZHJlbiA9IGFyZ3MuYztcblxuXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG5cdFx0aHlkcmF0ZUgoY29udGV4dCwgbm9kZSwgb3B0cywgY2hpbGRyZW4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldEh5ZHJhdGVDb21wb25lbnQoZWwsIG9wdHMpO1xuXG5cdGlmKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBfO1xuXHR9XG5cblx0cmVnaXN0ZXJDaGlsZHJlbihjb250ZXh0LCBjb21wb25lbnQpO1xuXG5cdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuXHRcdGxldCBuZXdBcmdzID0gY29tcG9uZW50Lmh5ZHJhdGUoe1xuXHRcdFx0Z2V0VUlEKCkge1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9LFxuXHRcdFx0X3Nsb3RzOiBvcHRzLiRzbG90cyxcblx0XHR9KTtcblxuXHRcdGlmKG9wdHMuJHNsb3RzKSB7XG5cdFx0XHRoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBub2RlLCBvcHRzLCBvcHRzLiRzbG90cyk7XG5cdFx0fVxuXG5cdFx0Ly8gY29uc29sZS5sb2cob3B0cylcblx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUsIG5ld0FyZ3MpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gc2V0dXAgY29tcG9uZW50XG5cdC8vIGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuXHQvLyBcdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG5cdC8vIH1cblxuXHRpZihvcHRzLiRzbG90cykge1xuXHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIG5vZGUsIG9wdHMsIG9wdHMuJHNsb3RzKTtcblx0fVxuXG5cdHJldHVybiBoeWRyYXRlKGNvbXBvbmVudCwgbm9kZSwgY29tcG9uZW50Lmh5ZHJhdGUoY29tcG9uZW50KSk7XG59XG5cbi8qKlxuICogTWFpbiBoeWRyYXRpb24gZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gaHlkcmF0ZShjb250ZXh0LCBub2RlLCBhcmdzID0gbnVsbClcbntcblx0Ly8gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ3N0YXJ0Jylcblx0XHRoeWRyYXRlSWRsZShjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0Ly8gfSwge1xuXHQvLyBcdHRpbWVvdXQ6IDAsXG5cdC8vIFx0cmVhZDogdHJ1ZVxuXHQvLyB9KTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZUlkbGUoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0aWYoYXJncyA9PT0gbnVsbCB8fCBub2RlID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ2gnKSB7XG5cdFx0Ly8gYXJncy5vWydkYXRhLWh5ZHJhdGVkJ10gPSB0cnVlO1xuXHRcdC8vIGFyZ3Mub1snX3MnXSA9IHRydWU7XG5cdFx0aHlkcmF0ZVRhZyhjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXG5cdGlmKGFyZ3MuX3QgPT09ICd0Jykge1xuXHRcdGh5ZHJhdGVUZXh0KGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ2xvb3AnKSB7XG5cdFx0aHlkcmF0ZUxvb3AoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblxuXHRyZXR1cm4gXztcblx0XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEh5ZHJhdGlvbihjb21wb25lbnQsIGh5ZHJhdGlvblJvb3QsIHRpbWVCZW5jaG1hcmsgPSAoKSA9PiB7fSwgY2FsbGJhY2sgPSBudWxsKVxue1xuXHRsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgKGluc3RhbmNlKSA9PiB7XG5cblx0XHR0aW1lQmVuY2htYXJrKCdIeWRyYXRpb24nKTtcblxuXHRcdGxldCB0cmVlID0gW2luc3RhbmNlXTtcblxuXHRcdFNpbnVvdXMuY2xlYXJISUQoKTtcblxuXHRcdGxldCBjb25uZWN0ZWROb2RlID0gZmlsdGVyQ2hpbGROb2RlcyhoeWRyYXRpb25Sb290KTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNvbXBvbmVudCA9IHRyZWVbaV07XG5cdFx0XHRsZXQgbm9kZSA9IGNvbm5lY3RlZE5vZGVbaV07XG5cdFx0XHRsZXQgaHlkcmF0aW9uID0gY29tcG9uZW50Lmh5ZHJhdGUoY29tcG9uZW50KTtcblx0XHRcdFxuXHRcdFx0aHlkcmF0ZShjb21wb25lbnQsIG5vZGUsIGh5ZHJhdGlvbik7XG5cdFx0fVxuXG5cdFx0XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnc3RhcnQnLCBTVUJTQ1JJQkVSUyk7XG5cdFx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCBTVUJTQ1JJQkVSUy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFx0bGV0IGZuID0gU1VCU0NSSUJFUlNbaV07XG5cdFx0Ly8gXHRjb25zb2xlLndhcm4oaSwgU1VCU0NSSUJFUlNbaV0pXG5cdFx0Ly8gXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHQvLyBcdFx0Ly8gY29uc29sZS5sb2coZm4pXG5cdFx0Ly8gXHRcdGZuKClcblx0XHQvLyBcdH0pO1xuXHRcdC8vIFx0Ly8gU1VCU0NSSUJFUlNbaV0oKTtcblx0XHQvLyB9XG5cdFx0Ly8gfSk7XG5cdFx0Ly8gY29uc29sZS5sb2coaW5zdGFuY2UpO1xuXHRcdGluc3RhbmNlLmhvb2soJ21vdW50ZWQnKTtcblxuXHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjayhpbnN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0dGltZUJlbmNobWFyaygnSHlkcmF0aW9uJyk7XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH0pO1xuXG59XG5cbi8qKlxuICogRmlsdGVyIG91dCB3aGl0ZXNwYWNlIHRleHQgbm9kZXMgdW5sZXNzIGl0IGhhcyBhIG5vc2tpcCBpbmRpY2F0b3IuXG4gKlxuICogQHBhcmFtICB7Tm9kZX0gcGFyZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZmlsdGVyQ2hpbGROb2RlcyhwYXJlbnQpIHtcblx0cmV0dXJuIHBhcmVudC5jaGlsZE5vZGVzO1xuXHQvLyBjb25zb2xlLndhcm4ocGFyZW50LCBwYXJlbnQuY2hpbGROb2Rlcyk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LmNoaWxkTm9kZXMpLmZpbHRlcihcbiAgICAgICAgZWwgPT4gZWwubm9kZVR5cGUgIT09IDMgfHwgZWwuZGF0YS50cmltKCkgfHwgZWwuX25vc2tpcFxuICAgICk7XG59XG4iLCJcblx0XHRpbXBvcnQgY29tcG9uZW50Q29uZmlnIGZyb20gXCIuL2luZGV4LnNpbj90eXBlPXNjcmlwdFwiO1xuXHRcblx0XHRpbXBvcnQgeyBCYXNpYyB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5cblx0XHRsZXQgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRtZXRob2RzOiB7fSxcblx0XHR9LCBjb21wb25lbnRDb25maWcpO1xuXG5cdFx0bGV0IGluc3RhbmNlID0gZnVuY3Rpb24gUGFnZXNJbmRleCgpIHtcblx0XHRcdEJhc2ljLmNhbGwodGhpcyk7XG5cdFx0fTtcblx0XHRcblx0XHQvLyBpbmhlcml0IEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNpYy5wcm90b3R5cGUpO1xuXG5cdFx0Ly8gY29ycmVjdCB0aGUgY29uc3RydWN0b3IgcG9pbnRlciBiZWNhdXNlIGl0IHBvaW50cyB0byBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGluc3RhbmNlO1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kcyA9IHt9O1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fY29tcG9uZW50TmFtZSA9ICdQYWdlc0luZGV4Jztcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX3Nob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX3Nsb3RzRGF0YSA9IHt9O1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kcyA9IE9iamVjdC5rZXlzKGNvbmZpZy5tZXRob2RzKTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2Z1bmN0aW9uYWwgPSBmYWxzZTtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcpIHtcblx0XHRcdGlmKHR5cGVvZiBjb25maWdba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcubWV0aG9kcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWcubWV0aG9kc1trZXldXG5cdFx0fVxuXHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3JlbmRlciA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCwgZCwgYyB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFwiZGl2XCIsIHt9LCBbXG4gIGxvb3AoY3R4Ll9zdGF0ZS5pdGVtcywgKGl0ZW0sIGtleSkgPT4ge1xuICAgIHJldHVybiBoKFxuICAgICAgXCJzYnV0dG9uXCIsXG4gICAgICB7XG4gICAgICAgICRzbG90czoge1xuICAgICAgICAgIGRlZmF1bHQ6IFtcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGBCdXR0b24gJHtpdGVtfWA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW11cbiAgICApO1xuICB9KSxcbl0pO1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9faHlkcmF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgY3R4ID0gdGhpcztcblx0XHRcdFx0cmV0dXJuIHtcbiAgX3Q6IFwiaFwiLFxuICB0OiBcImRpdlwiLFxuICBvOiB7fSxcbiAgYzogW1xuICAgIHtcbiAgICAgIF90OiBcImxvb3BcIixcbiAgICAgIGM6IGN0eC5fc3RhdGUuaXRlbXMsXG4gICAgICBmbjogKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIF90OiBcImhcIixcbiAgICAgICAgICB0OiBcInNidXR0b25cIixcbiAgICAgICAgICBvOiB7XG4gICAgICAgICAgICAkc2xvdHM6IHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF90OiBcInRcIixcbiAgICAgICAgICAgICAgICAgIHQ6IC0xLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYzogW10sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdGV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuXHQiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHN0YXRlKG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IG8oW10pLFxuICAgICAgczE6IG8oMSlcbiAgICB9O1xuICB9LFxuXG4gIGNvbXB1dGVkKG8pIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTsgaSsrKSB7XG4gICAgICAgIGQucHVzaChpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RhdGUuaXRlbXMoZCk7IC8vIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgLy8gXHRzMSArPSAxMFxuICAgICAgLy8gfSwgMTAwKVxuICAgIH0sXG4gICAgdW5tb3V0bmVkOiBmdW5jdGlvbiAoKSB7Ly8gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgfVxuICB9XG59OyIsImltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJ0BzaW51b3VzL2h5ZHJhdGlvbic7XG5pbXBvcnQgcmVuZGVyIGZyb20gJ0BzaW51b3VzL3JlbmRlcic7XG4vLyBpbXBvcnQgdGVzdCBmcm9tICcuLi9jb21wb25lbnRzL3Rlc3Quc2luJ1xuLy8gaW1wb3J0IHRlc3QyIGZyb20gJy4uL2NvbXBvbmVudHMvdGVzdDIuc2luJ1xuaW1wb3J0IGJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3NidXR0b24uc2luJ1xuaW1wb3J0IEluZGV4UGFnZSBmcm9tICcuLi9wYWdlcy9pbmRleC5zaW4nXG5pbXBvcnQgdGltZUJlbmNobWFyayBmcm9tICcuL3RpbWUnO1xuXG5cbi8vIGNvbnN0IEluZGV4UGFnZSA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VJbmRleFwiICovICcuLi9wYWdlcy9pbmRleC5zaW4nKVxuXG5cbnZhciBMQVlPVVQ7XG52YXIgUGFnZUluZGV4LCBQYWdlSW5kZXgyO1xuXG5mdW5jdGlvbiBURVNUX1dFQlBBQ0tfQlVJTEQoKVxue1xuXHR0aW1lQmVuY2htYXJrKCdTU1ItQnVpbGQnKTtcblx0Ly8gU2ludW91cy5yZWdpc3RlckNvbXBvbmVudCh0ZXN0KTtcblx0Ly8gU2ludW91cy5yZWdpc3RlckNvbXBvbmVudCh0ZXN0Mik7XG5cdFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQoYnV0dG9uKTtcblx0dGltZUJlbmNobWFyaygnU1NSLUJ1aWxkJyk7XG59XG5cbi8vIGZ1bmN0aW9uIFRFU1RfSU5JVCgpXG4vLyB7XG4vLyBcdHRpbWVCZW5jaG1hcmsoJ1NTUi1Jbml0Jyk7XG4vLyBcdFBhZ2VJbmRleCA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0UGFnZUluZGV4MiA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0dGltZUJlbmNobWFyaygnU1NSLUluaXQnKTtcbi8vIH1cblxuZnVuY3Rpb24gVEVTVF9SRU5ERVIoKVxue1xuXHRyZW5kZXIoSW5kZXhQYWdlLCBMQVlPVVQsIHRpbWVCZW5jaG1hcmssIChjKSA9PiB7XG5cdFx0UGFnZUluZGV4ID0gYztcblx0fSk7XG59XG5cbmZ1bmN0aW9uIENMRUFSX0hPT0tTKClcbntcblx0bGV0IGh0bWwgPSBMQVlPVVQuaW5uZXJIVE1MO1xuXHRMQVlPVVQuaW5uZXJIVE1MID0gaHRtbDtcblx0UGFnZUluZGV4Lmhvb2soJ3VubW91bnRlZCcpO1xufVxuXG5mdW5jdGlvbiBURVNUX0hZRFJBVEUoKVxue1xuXHRoeWRyYXRlKEluZGV4UGFnZSwgTEFZT1VULCB0aW1lQmVuY2htYXJrKTtcbn1cblxuVEVTVF9XRUJQQUNLX0JVSUxEKCk7XG5cbi8vIFRFU1RfSU5JVCgpO1xuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxvYWQpO1xuLy8gcmV0dXJuO1xuKGZ1bmN0aW9uIGxvYWQoKSB7XG5cdExBWU9VVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXlvdXQnKTtcblxuXHQvLyBMQVlPVVQuaW5uZXJIVE1MID0gJyc7XG5cdC8vIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuXHRURVNUX0hZRFJBVEUoKTtcblx0cmV0dXJuO1xuXG5cdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdC8vIFRFU1RfUkVOREVSKCk7XG5cdC8vIH0sIDIwMDApXG5cblx0VEVTVF9SRU5ERVIoKTtcblx0Ly8gY29uc29sZS5sb2coTEFZT1VULmlubmVySFRNTClcblx0Ly8gcmV0dXJuXG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cblx0XHRDTEVBUl9IT09LUygpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHQgVEVTVF9IWURSQVRFKCk7XG5cdFx0fSwgMzAwKTtcblx0fSwgMTAwMCk7XG59KSgpO1xuIiwibGV0IHRpbWVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUobmFtZSlcbntcblx0bGV0IG5vdyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdGlmKHR5cGVvZiB0aW1lc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aW1lc1tuYW1lXSA9IG5vdztcblx0XHRyZXR1cm4gdGltZXNbbmFtZV07XG5cdH1cblxuXHRjb25zb2xlLmxvZyhgWyB0YiAke25hbWV9IF1gLCBub3cgLSB0aW1lc1tuYW1lXSwgJ21zJyk7XG5cblx0ZGVsZXRlIHRpbWVzW25hbWVdO1xufSJdLCJzb3VyY2VSb290IjoiIn0=