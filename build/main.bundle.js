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
		instance.prototype._slotsData = {"default":{"path":[0,1],"tag":"span","index":0}};
		instance.prototype._methods = Object.keys(config.methods);
		instance._functional = false;
		
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
  () => {
    return `${ctx._state.s1()}`;
  },
  slot(ctx, h, "default", "span", {}, [`Default button text`]),
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
      _t: "t",
      t: () => {
        return `${ctx._state.s1()}`;
      },
    },
    -1,
  ],
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
      s1: o(Math.random(1, 100))
    };
  },

  computed(o) {
    return {};
  },

  methods: {
    mounted: function () {
      // console.log('mounted');
      this._data.timer = setInterval(() => {
        // console.log('update')
        this._state.s1(this._state.s1() + 1);
      }, 1000);
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
  addSubscriber(function () {
    _sinuous.api.property(el, opts, null);
  });
}

function hydrateH(context, el, options, children) {
  if (options._s) {
    hydrateProps(el, options);
  }

  for (var i = 0; i < children.length; i++) {
    // console.log(children[i])
    hydrate(context, el.childNodes[i], children[i]);
  } // el._index++;

}

function hydrateLoop(context, node, args) {
  var condition = args.c;
  var startNode = node; // api.subscribe(() => {

  var loop_condition = typeof condition === 'function' ? condition() : condition;
  var currentNode = startNode;

  for (var key in loop_condition) {
    var item = loop_condition[key];
    var itemArgs = args.fn(item, key); // console.log('[hydrate loop]', currentNode, itemArgs)

    hydrate(context, currentNode, itemArgs);
    currentNode = currentNode.nextElementSibling;
  } // });

}

function hydrateText(context, node, args) {
  // console.warn('[TEXT]', node, args.t);
  if (args.t === _empty._) {
    return;
  } // if(typeof args.t !== 'function' ) {
  // 	return;
  // }
  // console.warn('[TEXT]', node, args.t());


  _sinuous.api.subscribe(function () {
    _sinuous.api.insert(node, args.t(), null);
  }); // api.insert(el, nodes, null);

}

function getSlotNode(el, tag, path) {
  // let 
  // console.log(el, tag, path);
  for (var i = 1; i < path.length; i++) {
    if (path[i] !== null) {
      el = el.childNodes[path[i]];
    }
  } // console.error(el);


  return el;
}

function hydrateSlots(context, el, opts, slots) {
  if (opts === void 0) {
    opts = {};
  }

  var bindedNodes = {};
  var slotData = context._slotsData;

  for (var key in slots) {
    if (slotData[key]) {
      var node = getSlotNode(el, slotData[key].tag, slotData[key].path);
      bindedNodes[key] = node;
    } else {
      throw new Error("There is no " + key + " slot namespace defined");
    }
  } // return;
  // api.subscribe(() => {


  for (var _key in slots) {
    var data = slotData[_key];
    var _node = bindedNodes[_key];
    var childrenSlots = slots[_key];
    var startNodeIndex = data.index; // if(data.tag) {
    // 	node = node.childNodes;
    // } else {
    // 	node = [node];
    // }
    // console.log(key, startNodeIndex, node, node.childNodes[startNodeIndex], childrenSlots)
    // break;

    if (childrenSlots.length > _node.length) {
      throw new Error('Slot hydration length mismatch');
    }

    for (var i = startNodeIndex; i < childrenSlots.length; i++) {
      // console.log(node.childNodes[i], childrenSlots[i])
      hydrate(context, _node.childNodes[i], childrenSlots[i]); // api.insert(node[i], childrenSlots[i](), null);
    }
  } // });

}
/**
 * Context setup
 */


function registerChildren(parent, child) {
  parent.addChildren(child);

  if (child.setParent) {
    child.setParent(parent);
  }
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
  } // console.warn(component.hydrate(), node, opts, children)


  return hydrate(component, node, component.hydrate(component));
}
/**
 * Main hydration function
 */


function hydrate(context, node, args) {
  if (args === void 0) {
    args = null;
  }

  if (args === null) {
    return;
  } // console.log('[HYDRATE]', context, node)


  if (args._t === 'h') {
    // args.o['data-hydrated'] = true;
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

      _sinuous.api.subscribe(function () {// hydrate(component, node, hydration);
      });
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
		instance._functional = false;
		
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

  TEST_HYDRATE();
  return; // setTimeout(() => {
  // TEST_RENDER();
  // }, 2000)

  TEST_RENDER(); // console.log(LAYOUT.innerHTML)

  return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uLnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NidXR0b24uc2luP2NlNzkiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb29wLmpzIiwid2VicGFjazovLy8uLi9zcmMvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4iLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguc2luPzQzZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci10ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aW1lLmpzIl0sIm5hbWVzIjpbIl8iLCJ5Iiwic2VsZiIsImNsYXNzZXMiLCJvYmoiLCJzdGF0aWNDbGFzc2VzIiwiZHluYW1pYyIsImkiLCJhcmd1bWVudHMiLCJhcmciLCJBcnJheSIsImoiLCJoYW5kbGVDbGFzc09iamVjdCIsImEiLCJ2YWwiLCJzdHlsZXMiLCJjYW1lbFRvUHJvcCIsImhhbmRsZVN0eWxlc09iamVjdCIsIkhJRCIsIkJhc2ljIiwib2JzZXJ2YWJsZSIsImRlZmF1bHQiLCJjb21wdXRlZCIsIm5hbWUiLCJjaGlsZHJlbiIsInBhcmVudCIsInByb3AiLCJ2YWx1ZSIsInR5cGUiLCJwcm9wcyIsInN0YXRlZnVsIiwiT2JqZWN0IiwiY3R4IiwiaCIsInN0YXRlbWVudCIsImxvb3AiLCJzbG90IiwiZCIsImMiLCJjb21waWxlciIsImhTdGF0ZW1lbnQiLCJoU2xvdCIsImhMb29wIiwiU2ludW91cyIsImVsIiwidGFnIiwiSFRNTFRhZ3MiLCJjaGlsZCIsIm9wdHMiLCJkeW5hbWljQXR0cnMiLCJjb21wb25lbnQiLCJyZWdpc3RlckNoaWxkcmVuIiwiZ2V0VUlEIiwiX3Nsb3RzIiwiJHNsb3RzIiwicmVzdWx0IiwibG9vcF9jb25kaXRpb24iLCJjb25kaXRpb24iLCJpdGVtIiwiZm4iLCJiaW5kaW5nIiwidiIsIm1ha2VPYnNlZXJ2YWJsZSIsInNob3VsZEhhbmRsZSIsIndpbmRvdyIsImNvbnRleHQiLCJjaGlsZEluZGV4Iiwic2l6ZSIsIm5vZGUiLCJkb2N1bWVudCIsIlNUT1JBR0UiLCJTVUJTQ1JJQkVSUyIsImNvbnNvbGUiLCJhZGRTdWJzY3JpYmVyIiwiYXBpIiwib3B0aW9ucyIsImh5ZHJhdGVQcm9wcyIsImh5ZHJhdGUiLCJhcmdzIiwic3RhcnROb2RlIiwiY3VycmVudE5vZGUiLCJpdGVtQXJncyIsInBhdGgiLCJiaW5kZWROb2RlcyIsInNsb3REYXRhIiwiZ2V0U2xvdE5vZGUiLCJkYXRhIiwiY2hpbGRyZW5TbG90cyIsInNsb3RzIiwic3RhcnROb2RlSW5kZXgiLCJoeWRyYXRlSCIsIm5ld0FyZ3MiLCJoeWRyYXRlU2xvdHMiLCJoeWRyYXRlVGFnIiwiaHlkcmF0ZVRleHQiLCJoeWRyYXRlTG9vcCIsInRpbWVCZW5jaG1hcmsiLCJjYWxsYmFjayIsInRyZWUiLCJjb25uZWN0ZWROb2RlIiwiZmlsdGVyQ2hpbGROb2RlcyIsImh5ZHJhdGlvbiIsImluc3RhbmNlIiwic3RhdGVtZW50U2l6ZSIsIm5vZGVzIiwiU2ludW91c0NvbXBvbmVudHMiLCJjcmVhdGVISUQiLCJjbGVhckhJRCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiaGFzQ29tcG9uZW50IiwiZ2V0SHlkcmF0ZUNvbXBvbmVudCIsImdldENvbXBvbmVudEluc3RhbmNlIiwiZ2V0Q29tcG9uZW50IiwibW9kdWxlIiwibGF5b3V0IiwiTEFZT1VUIiwiUGFnZUluZGV4IiwiUGFnZUluZGV4MiIsIlRFU1RfV0VCUEFDS19CVUlMRCIsImJ1dHRvbiIsIlRFU1RfUkVOREVSIiwiSW5kZXhQYWdlIiwiQ0xFQVJfSE9PS1MiLCJodG1sIiwiaW5uZXJIVE1MIiwiaG9vayIsIlRFU1RfSFlEUkFURSIsImxvYWQiLCJnZXRFbGVtZW50QnlJZCIsInNldFRpbWVvdXQiLCJ0aW1lcyIsInRpbWUiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFr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Q0FJaEI7QUFDQTs7QUFDQUYsY0FBWTtBQUNaLFNBUGdCLENBU2hCO0FBQ0M7QUFDRDs7QUFFQU4sYUFBVyxHQWJLLENBY2hCOztBQUNBO0FBRUFTLFlBQVUsQ0FBQyxZQUFNO0FBRWhCUCxlQUFXO0FBRVhPLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZILGtCQUFZO0FBQ2IsS0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdBLEdBUFMsRUFPUCxJQVBPLENBQVY7QUFRQSxDQXpCRCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREEsSUFBSUksS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBU0MsSUFBVCxDQUFjNUcsSUFBZCxFQUNmO0FBQ0MsTUFBSTZHLEdBQUcsR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0osS0FBSyxDQUFDM0csSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDMkcsU0FBSyxDQUFDM0csSUFBRCxDQUFMLEdBQWM2RyxHQUFkO0FBQ0EsV0FBT0YsS0FBSyxDQUFDM0csSUFBRCxDQUFaO0FBQ0E7O0FBRURpRCxTQUFPLENBQUMrRCxHQUFSLFdBQW9CaEgsSUFBcEIsU0FBOEI2RyxHQUFHLEdBQUdGLEtBQUssQ0FBQzNHLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPMkcsS0FBSyxDQUFDM0csSUFBRCxDQUFaO0FBQ0EsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXHRcdGltcG9ydCBjb21wb25lbnRDb25maWcgZnJvbSBcIi4vc2J1dHRvbi5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFNidXR0b24oKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnU2J1dHRvbic7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSB7XCJkZWZhdWx0XCI6e1wicGF0aFwiOlswLDFdLFwidGFnXCI6XCJzcGFuXCIsXCJpbmRleFwiOjB9fTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSBPYmplY3Qua2V5cyhjb25maWcubWV0aG9kcyk7XG5cdFx0aW5zdGFuY2UuX2Z1bmN0aW9uYWwgPSBmYWxzZTtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcpIHtcblx0XHRcdGlmKHR5cGVvZiBjb25maWdba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcubWV0aG9kcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWcubWV0aG9kc1trZXldXG5cdFx0fVxuXHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3JlbmRlciA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCwgZCwgYyB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIgfSwgW1xuICAoKSA9PiB7XG4gICAgcmV0dXJuIGAke2N0eC5fc3RhdGUuczEoKX1gO1xuICB9LFxuICBzbG90KGN0eCwgaCwgXCJkZWZhdWx0XCIsIFwic3BhblwiLCB7fSwgW2BEZWZhdWx0IGJ1dHRvbiB0ZXh0YF0pLFxuXSk7XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19oeWRyYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxldCBjdHggPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4ge1xuICBfdDogXCJoXCIsXG4gIHQ6IFwiZGl2XCIsXG4gIG86IHt9LFxuICBjOiBbXG4gICAge1xuICAgICAgX3Q6IFwidFwiLFxuICAgICAgdDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7Y3R4Ll9zdGF0ZS5zMSgpfWA7XG4gICAgICB9LFxuICAgIH0sXG4gICAgLTEsXG4gIF0sXG59O1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdGV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuXHQiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWVyOiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBzdGF0ZShvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHMxOiBvKE1hdGgucmFuZG9tKDEsIDEwMCkpXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZChvKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnbW91bnRlZCcpO1xuICAgICAgdGhpcy5fZGF0YS50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZScpXG4gICAgICAgIHRoaXMuX3N0YXRlLnMxKHRoaXMuX3N0YXRlLnMxKCkgKyAxKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0sXG4gICAgdW5tb3V0bmVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2RhdGEudGltZXIpO1xuICAgIH1cbiAgfVxufTsiLCJleHBvcnQgY29uc3QgXyA9IC0xO1xuIiwiaW1wb3J0IHZhbHVlIGZyb20gJy4vdmFsdWUnO1xuXG5cbmZ1bmN0aW9uIGNhbWVsVG9Qcm9wKHMpXG57XG5cdHJldHVybiBzXG5cdFx0LnJlcGxhY2UoL1xcLj8oW0EtWl0rKS9nLCAoeCwgeSkgPT4gYC0ke3kudG9Mb3dlckNhc2UoKX1gKVxuXHRcdC5yZXBsYWNlKC9eLS8sICcnKTtcbn1cblxuZnVuY3Rpb24gb25seVVuaXF1ZSh2YWx1ZSwgaW5kZXgsIHNlbGYpIHsgXG4gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2xhc3NPYmplY3Qob2JqKVxue1xuXHRsZXQgY2xhc3NlcyA9IFtdO1xuXG5cdGZvciAobGV0IGtleSBpbiBvYmopIHtcblx0XHRpZih2YWx1ZShvYmpba2V5XSkpIHtcblx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NlcyhzdGF0aWNDbGFzc2VzID0gW10sIGR5bmFtaWMgPSB7fSlcbntcblx0cmV0dXJuICgpID0+IHtcblx0XHRsZXQgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRcblx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGFyZy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaCh2YWx1ZShhcmdbal0pKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBhcmcgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdChcblx0XHRcdFx0XHRoYW5kbGVDbGFzc09iamVjdChhcmcpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQoXG5cdFx0XHRcdFx0aGFuZGxlQ2xhc3NPYmplY3QodmFsdWUoYXJnKSlcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzZXMgPSBjbGFzc2VzLmZpbHRlcigodiwgaSwgYSkgPT4gYS5pbmRleE9mKHYpID09PSBpKTtcblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgb2JqKVxue1xuXHRmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG5cdFx0bGV0IHZhbCA9IHZhbHVlKG9ialtrZXldKTtcblx0XHRpZih2YWwgIT09IG51bGwpIHtcblx0XHRcdHN0eWxlc1tjYW1lbFRvUHJvcChrZXkpXSA9IHZhbDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzKClcbntcblx0cmV0dXJuICgpID0+IHtcblx0XHRsZXQgc3R5bGVzID0ge307XG5cdFx0XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbaV0gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGhhbmRsZVN0eWxlc09iamVjdChzdHlsZXMsIGFyZ3VtZW50c1tpXSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhhbmRsZVN0eWxlc09iamVjdChzdHlsZXMsIHZhbHVlKGFyZ3VtZW50c1tpXSkpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0eWxlcztcblx0fVxufSIsImltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuXG5cbmltcG9ydCB7IGh5ZHJhdGUsIGRodG1sIH0gZnJvbSAnc2ludW91cy9oeWRyYXRlJztcblxuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQgfSBmcm9tICcuL29ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBsb29wIGFzIGhMb29wLCBzbG90IGFzIGhTbG90LCBzdGF0ZW1lbnQgYXMgaFN0YXRlbWVudCB9IGZyb20gJ0BzaW51b3VzL2h5ZHJhdGlvbic7XG5pbXBvcnQgeyBzdHlsZXMsIGNsYXNzZXMsIHN0YXRlbWVudCwgZHluYW1pYywgbG9vcCwgc2xvdCB9IGZyb20gJy4vaW5kZXgnO1xuXG5pbXBvcnQgeyBoIH0gZnJvbSAnLi8nO1xuXG4vLyBpbXBvcnQgeyByZW5kZXIsIGh5ZHJhdGUgfSBmcm9tICcuL3RlbXBsYXRlJztcbmxldCBISUQgPSAwO1xuXG5cbnZhciBCYXNpYyA9IGZ1bmN0aW9uICgpIHtcblxuXHRmdW5jdGlvbiBCYXNpYygpXG5cdHtcblx0XHR0aGlzLl9pc0NvbXBvbmVudCA9IHRydWU7XG5cdFx0dGhpcy5oaWQgPSArK0hJRDtcblxuXHRcdHRoaXMuX3Byb3BzID0gdGhpcy5wcm9wcygpO1xuXHRcdHRoaXMuX3Bhc3NlZFByb3BzID0ge307XG5cblx0XHQvLyBMb2NhbCBkYXRhXG5cdFx0dGhpcy5fZGF0YSA9IHRoaXMuZGF0YSgpO1xuXHRcdC8vIFN0YXRlZnVsIGRhdGFcblx0XHR0aGlzLl9zdGF0ZSA9IHRoaXMuc3RhdGUob2JzZXJ2YWJsZSk7XG5cblx0XHR0aGlzLl9zbG90cyA9IHtcblx0XHRcdGRlZmF1bHQ6IFtdLFxuXHRcdH07XG5cblx0XHR0aGlzLl9jb21wdXRlZCA9IHRoaXMuY29tcHV0ZWQoY29tcHV0ZWQpO1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gW107XG5cdFx0dGhpcy5fZWxfaW5kZXggPSAwO1xuXG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblxuXHRcdC8vIERlZmF1bHQgcHJvcCB2YWx1ZXMgXG5cdFx0dGhpcy5pbml0UHJvcHMoKTtcblxuXHRcdC8vIHRoaXMuaW5pdFRlbXBsYXRlKCk7XG5cblx0XHR0aGlzLnNldENoaWxkcmVuKCk7XG5cdFx0dGhpcy5zZXRQYXJlbnQoKTtcblxuXHRcdHRoaXMuYmluZENvbnRleHQoKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmJpbmRDb250ZXh0ID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fY29tcHV0ZWQpIHtcblx0XHRcdHRoaXMuX2NvbXB1dGVkW2tleV0gPSB0aGlzLl9jb21wdXRlZFtrZXldLmJpbmQodGhpcyk7XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fbWV0aG9kcykge1xuXHRcdFx0bGV0IG5hbWUgPSB0aGlzLl9tZXRob2RzW2tleV07XG5cdFx0XHR0aGlzW25hbWVdID0gdGhpc1tuYW1lXS5iaW5kKHRoaXMpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQ29uZmlnXG5cdCAqL1xuXG5cdC8vIEJhc2ljLnByb3RvdHlwZS5zZXRNZXRob2RzID0gZnVuY3Rpb24obWV0aG9kcyA9IHt9KVxuXHQvLyB7XG5cdC8vIFx0dGhpcy5fbWV0aG9kcyA9IG1ldGhvZHM7XG5cdC8vIH1cblxuXHQvKipcblx0ICogSGllcmFyY2h5XG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5zZXRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkcmVuID0gW10pXG5cdHtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuYWRkQ2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZClcblx0e1xuXHRcdHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuc2V0UGFyZW50ID0gZnVuY3Rpb24ocGFyZW50ID0gbnVsbClcblx0e1xuXHRcdHRoaXMuX3BhcmVudCA9IHBhcmVudDtcblx0fVxuXHQvKipcblx0ICogUHJvcHNcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnByb3BzID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaW5pdFByb3BzID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fcHJvcHMpXG5cdFx0e1xuXHRcdFx0bGV0IHByb3AgPSB0aGlzLl9wcm9wc1trZXldO1xuXHRcdFx0bGV0IHZhbHVlID0gbnVsbDtcblx0XHRcdGxldCB0eXBlID0gbnVsbDtcblxuXHRcdFx0aWYodHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Ly8gdHlwZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWUgPSBwcm9wLmRlZmF1bHQoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fZGF0YVtrZXldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc1Nsb3RzID0gZnVuY3Rpb24obmFtZSwgc2xvdHMpXG5cdHtcblx0XHR0aGlzLl9zbG90c1tuYW1lXSA9IHNsb3RzO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc1Byb3BzID0gZnVuY3Rpb24ocHJvcHMpXG5cdHtcblx0XHQvLyBpZih0eXBlb2YgdGhpcy5fcGFzc2VkUHJvcHNbY29tcG9uZW50LmhpZF0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0Ly8gXHR0aGlzLl9wYXNzZWRQcm9wc1tjb21wb25lbnQuaGlkXSA9IHt9O1xuXHRcdC8vIH1cblxuXHRcdGZvcihsZXQga2V5IGluIHByb3BzKVxuXHRcdHtcblx0XHRcdGlmKHByb3BzW2tleV0uX29ic2VydmFibGUpIHtcblx0XHRcdFx0dGhpcy5faXNTdGF0ZWZ1bCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2RhdGFba2V5XSA9IHByb3BzW2tleV07XG5cdFx0XHQvLyBpZih0eXBlb2YgdGhpcy5fZGF0YVtrZXldICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Ly8gXHR0aHJvdyBuZXcgRXJyb3IoYFtTaW51b3VzXSBDb21wb25lbnQgJHsgdGhpcy5uYW1lIH0gYWxyZWFkeSBoYXMgJHsga2V5IH0gcHJvcGVydHlgKVxuXHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdC8vIFx0dGhpcy5fZGF0YVtrZXldID0gcHJvcHNba2V5XTtcblx0XHRcdC8vIH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xpZW50IHNpZGUgaGFuZGxlciBhZnRlciBTU1IgKGh5ZHJhdGlvbilcblx0ICovXG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaGFzU3RhdGVmdWxsRGF0YSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGxldCBzdGF0ZWZ1bCA9IGZhbHNlO1xuXG5cdFx0Zm9yKGxldCBoaWQgaW4gdGhpcy5fcGFzc2VkUHJvcHMpIHtcblx0XHRcdGZvcihsZXQga2V5IGluIHRoaXMuX3Bhc3NlZFByb3BzW2hpZF0pIHtcblx0XHRcdFx0aWYodGhpcy5fcGFzc2VkUHJvcHNbaGlkXVtrZXldKSB7XG5cdFx0XHRcdFx0c3RhdGVmdWwgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKHN0YXRlZnVsKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZWZ1bCAmJiB0aGlzLl9pc1N0YXRlZnVsO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaGFzU3RhdGVsZXNzRGF0YSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9kYXRhKS5sZW5ndGggPiAwO1xuXHR9XG5cblx0LyoqXG5cdCAqIExvY2FsIGNvbXBvbmVudCBkYXRhXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuY29tcHV0ZWQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHQvKipcblx0ICogU3RhdGVmdWwgZGF0YVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuc3RhdGUgPSBmdW5jdGlvbihvKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIDEuIENyZWF0ZSBjaGlsZCBjb21wb25lbnRzIChkaWZmZXJlbnQgY29udGV4dClcblx0ICogMi4gUGFzcyBwcm9wc1xuXHQgKiAzLiBSZW5kZXJcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24oKSB7fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5jaGlsZENvbXBvbmVudHMgPSBmdW5jdGlvbigpIHt9XG5cblx0LyoqXG5cdCAqICBMaWZlIGN5Y2xlIGhvb2tzXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuaG9vayA9IGZ1bmN0aW9uKHR5cGUgPSAnbW91bnRlZCcpXG5cdHtcblx0XHRpZih0aGlzW3R5cGVdKSB7XG5cdFx0XHR0aGlzW3R5cGVdLmNhbGwodGhpcyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYoIXRoaXMuX2NoaWxkcmVuW2ldLl9mdW5jdGlvbmFsKSB7XG5cdFx0XHRcdHRoaXMuX2NoaWxkcmVuW2ldLmhvb2sodHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUubW91bnRlZCA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUudW5tb3VudGVkID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiBQcml2YXRlIEFQSSBmb3IgcmVuZGVyIGFuZCBoeWRyYXRlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHggPSBudWxsKVxuXHR7XG5cdFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdFx0XHRjdHggPSB0aGlzO1xuXHRcdH1cblxuXHRcdGguYmluZChjdHgpO1xuXG5cdFx0cmV0dXJuIGN0eC5fX3JlbmRlcihoLmJpbmQoY3R4KSwge1xuXHRcdFx0Y3R4LFxuXHRcdFx0c3RhdGVtZW50LFxuXHRcdFx0bG9vcCxcblx0XHRcdHNsb3QsXG5cdFx0XHRkOiBkeW5hbWljLFxuXHRcdFx0YzogY29tcHV0ZWQsXG5cdFx0fSk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5oeWRyYXRlID0gZnVuY3Rpb24oY3R4ID0gbnVsbCwgY29tcGlsZXIgPSBudWxsKVxuXHR7XG5cdFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdFx0XHRjdHggPSB0aGlzO1xuXHRcdH1cblxuXHRcdHJldHVybiBjdHguX19oeWRyYXRlKGNvbXBpbGVyLCB7XG5cdFx0XHRjdHgsXG5cdFx0XHRzdGF0ZW1lbnQ6IGhTdGF0ZW1lbnQsXG5cdFx0XHRzbG90OiBoU2xvdCxcblx0XHRcdGxvb3A6IGhMb29wLFxuXHRcdFx0ZDogZHluYW1pYyxcblx0XHRcdGM6IGNvbXB1dGVkLFxuXHRcdH0pO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUudGVtcGxhdGUgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXG5cdC8vIEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZUJ1aWxkZXIgPSBmdW5jdGlvbihoLCBvcHRzKVxuXHQvLyB7XG5cdC8vIFx0cmV0dXJuIHRoaXNbYF9fJHsgb3B0cy5yZW5kZXIgfWBdKGgsIG9wdHMpO1xuXHQvLyB9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuY29tcG9uZW50ID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUuZ2V0VUlEID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRyZXR1cm4gYGh5ZHItJHsgU2ludW91cy5jcmVhdGVISUQoaW5kZXgpIH1gO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oXCJuYW1lXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lOyB9KTtcblxuXHRyZXR1cm4gQmFzaWM7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xuIiwiaW1wb3J0IHsgaCwgaHMsIGFwaSB9IGZyb20gJ3NpbnVvdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljKGgsIHRhZywgb3B0cywgY2hpbGRyZW4pXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IGVsID0gdGFnKCk7XG5cdFx0cmV0dXJuIGgoZWwsIG9wdHMsIGNoaWxkcmVuKTtcblx0fTtcblxufSIsImltcG9ydCB7IGggYXMgaHMgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBzdWJzY3JpYmUgfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuaW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCBvcHRpb25zLCAgfSBmcm9tICcuLyc7XG5pbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcblxubGV0IEhUTUxUYWdzID0gW1xuXHQnaScsICdkaXYnLCAnc3BhbicsICdocicsICdicicsICdzdHJvbmcnLCAncHJlJ1xuXTtcblxuXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGlmKGNoaWxkLnNldFBhcmVudCkge1xuXHRcdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGgoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbntcblx0ZWwgPSBlbC50b0xvd2VyQ2FzZSgpO1xuXHQvLyBlbCA9IGNvbXB1dGVkKCgpID0+ICh0eXBlb2YgZWwgPT09ICdmdW5jdGlvbicgPyBlbCA6IGVsKSk7XG5cblx0Ly8gY29uc29sZS5sb2coJ1sgRkYgXScsIGVsLCB0aGlzKVxuXHRsZXQgZHluYW1pY0F0dHJzID0gZmFsc2U7XG5cblx0b3B0aW9ucyh0aGlzLCBvcHRzKTtcblxuXHQvLyBJZiBIVE1MIHRhZyByZW5kZXJcblx0aWYoSFRNTFRhZ3MuaW5jbHVkZXMoZWwpKSB7XG5cdFx0cmV0dXJuIGhzKGVsLCBvcHRzLCBjaGlsZHJlbik7XG5cdH1cblxuXHRsZXQgY29tcG9uZW50ID0gU2ludW91cy5nZXRDb21wb25lbnQoZWwpO1xuXG5cdHJlZ2lzdGVyQ2hpbGRyZW4odGhpcywgY29tcG9uZW50KTtcblxuXHRpZihjb21wb25lbnQuX2Z1bmN0aW9uYWwpIHtcblx0XHRyZXR1cm4gY29tcG9uZW50LnJlbmRlcih7XG5cdFx0XHRnZXRVSUQoKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH0sXG5cdFx0XHRfc2xvdHM6IG9wdHMuJHNsb3RzLFxuXHRcdH0pO1xuXHR9XG5cblx0aWYodHlwZW9mIG9wdHMucHJvcHMgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0Y29tcG9uZW50LnBhc3NQcm9wcyhvcHRzLnByb3BzKTtcblx0fVxuXG5cdGZvcihsZXQga2V5IGluIG9wdHMuJHNsb3RzKSB7XG5cdFx0Y29tcG9uZW50LnBhc3NTbG90cyhrZXksIG9wdHMuJHNsb3RzW2tleV0pO1x0XG5cdH1cblxuXHRyZXR1cm4gY29tcG9uZW50LnJlbmRlcigpO1xufSIsImltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICdAc2ludW91cy9sYXp5JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb21wb25lbnQsIGxheW91dCwgdGltZUJlbmNobWFyayA9ICgpID0+IHt9LCBjYWxsYmFjayA9IG51bGwpIHtcblxuICAgIGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuICAgIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCAoaW5zdGFuY2UpID0+IHtcblxuICAgIFx0dGltZUJlbmNobWFyaygnUmVuZGVyJyk7XG5cblx0XHRsYXlvdXQuYXBwZW5kKGluc3RhbmNlLnJlbmRlcigpKTtcblx0XHRpbnN0YW5jZS5ob29rKCdtb3VudGVkJyk7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHRpbWVCZW5jaG1hcmsoJ1JlbmRlcicpO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9KTtcbn0iLCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb29wKGNvbmRpdGlvbiwgZm4pXG57XG5cdGxldCBkID0gKCkgPT4ge1xuXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xuXG5cdFx0bGV0IGxvb3BfY29uZGl0aW9uID0gdHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmRpdGlvbigpIDogY29uZGl0aW9uO1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gbG9vcF9jb25kaXRpb24pXG5cdFx0e1xuXHRcdFx0bGV0IGl0ZW0gPSBsb29wX2NvbmRpdGlvbltrZXldO1xuXHRcdFx0cmVzdWx0LnB1c2goZm4oaXRlbSwga2V5KSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRkLl9vYnNlcnZhYmxlID0gdHJ1ZTtcblx0Ly8gZC5fbm9kZSA9IHRydWU7XG5cblx0cmV0dXJuIGQ7XG59IiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBzaW51b3VzT2JzZXJ2YWJsZSwgY29tcHV0ZWQgYXMgc2ludW91c0NvbXB1dGVkIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VPYnNlZXJ2YWJsZShmbilcbntcblx0Zm4uX29ic2VydmFibGUgPSB0cnVlO1xuXHRyZXR1cm4gZm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZCh2LCBiaW5kaW5nID0gZmFsc2UpIHtcblxuXHRsZXQgZDtcblx0XG5cdGlmKGJpbmRpbmcpIHtcblx0XHRkID0gc2ludW91c0NvbXB1dGVkKHYuYmluZCh0aGlzKSk7XG5cdH0gZWxzZSB7XG5cdFx0ZCA9IHNpbnVvdXNDb21wdXRlZCh2KTtcblx0fVxuXG5cdG1ha2VPYnNlZXJ2YWJsZShkKTtcblxuXHRyZXR1cm4gZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmFibGUodiwgYmluZGluZyA9IGZhbHNlKVxue1xuXHRsZXQgZCA9IHNpbnVvdXNPYnNlcnZhYmxlKHYpO1xuXG5cdFxuXHRtYWtlT2JzZWVydmFibGUoZCk7XG5cblx0cmV0dXJuIGQ7XG59IiwiaW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCAgfSBmcm9tICcuLyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wdGlvbnMoY29udGV4dCwgb3B0cylcbntcblx0bGV0IHNob3VsZEhhbmRsZSA9IHtcblx0XHRzdHlsZXM6IGZhbHNlLFxuXHR9O1xuXG5cdGlmKCFvcHRzLnN0YXRpY1N0eWxlKSB7XG5cdFx0b3B0cy5zdGF0aWNTdHlsZSA9IHt9O1xuXHR9IGVsc2Uge1xuXHRcdHNob3VsZEhhbmRsZS5zdHlsZXMgPSB0cnVlO1xuXHR9XG5cblx0aWYoIW9wdHMuZHluYW1pY1N0eWxlKSB7XG5cdFx0b3B0cy5keW5hbWljU3R5bGUgPSBbXTtcblx0fSBlbHNlIHtcblx0XHRzaG91bGRIYW5kbGUuc3R5bGVzID0gdHJ1ZTtcblx0fVxuXG5cdGlmKHNob3VsZEhhbmRsZS5zdHlsZXMpIHtcblx0XHRvcHRzLnN0eWxlID0gc3R5bGVzLmFwcGx5KGNvbnRleHQsIFtvcHRzLnN0YXRpY1N0eWxlXS5jb25jYXQob3B0cy5keW5hbWljU3R5bGUpKVxuXHR9XG5cblx0Ly8gY29uc29sZS53YXJuKGNvbnRleHQsIG9wdHMpXG5cdC8qKlxuXHQgKiBDbGVhclxuXHQgKi9cblx0aWYoIXNob3VsZEhhbmRsZS5zdHlsZXMpIHtcblx0XHRkZWxldGUgb3B0cy5zdGF0aWNTdHlsZTtcblx0XHRkZWxldGUgb3B0cy5keW5hbWljU3R5bGU7XG5cdH1cblxuXHRyZXR1cm4gb3B0cztcbn0iLCJ3aW5kb3cuX1NpbnVvdXNDb21wb25lbnRzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyKG5hbWUsIGNvbXBvbmVudCA9IG51bGwpXG57XG5cdGlmKGNvbXBvbmVudCA9PSBudWxsKSB7XG5cdFx0Y29tcG9uZW50ID0gbmFtZTtcblx0XHRuYW1lID0gbmFtZS5uYW1lO1xuXHR9XG5cblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHR3aW5kb3cuX1NpbnVvdXNDb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsb3QoKVxue1xuXHRcbn0iLCJpbXBvcnQgeyBoIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KClcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICUgMyAhPT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdGF0ZW1lbnQgc2hvdWxkIGJlIG9kZCBudW1iZXInKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cblx0XHQvLyB2YWx1ZVxuXHRcdGxldCBzdGF0ZW1lbnRTaXplID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGxldCBzaXplID0gYXJndW1lbnRzW2kgKyAxXTtcblx0XHRcdGxldCB2YWx1ZSA9IGFyZ3VtZW50c1tpICsgMl07XG5cdFx0XHRsZXQgbm9kZSA9IG51bGw7XG5cblx0XHRcdHN0YXRlbWVudFNpemUgKz0gc2l6ZTtcblxuXHRcdFx0aWYodHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpZihjb25kaXRpb24oKSkge1xuXHRcdFx0XHRcdG5vZGUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoY29uZGl0aW9uKSB7XG5cdFx0XHRcdFx0bm9kZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnNvbGUud2FybihpLCBzaXplLCBub2RlKTtcblx0XHRcdC8vIFBhc3MgZmFpbGVkIHN0ZXRlbWVudCBjb25kaXRpb25cblx0XHRcdC8vIE5vcm1pbGl6ZSBpbmRleCB0aGF0IHdpbGwgYmUgdXNlZCBpbiByZXBsYWNpbmcgcGxhY2Vob2xkZXIgKGJlbG93KVxuXHRcdFx0aWYobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIW5vZGUuX29ic2VydmFibGUpIHtcblx0XHRcdFx0bm9kZSA9IG5vZGUoaCk7XG5cdFx0XHR9XG5cdFx0XHQvLyByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggbm9kZVxuXHRcdFx0Ly8gQW5kIGNvcnJlY3QgaW5kZXhcblx0XHRcdGlmKHNpemUgPiAxKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdFx0Ly8gaWYoQXJyYXkuaXNBcnJheShub2RlKSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZVtqXSk7XG5cdFx0XHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdFx0XHQvLyBcdHJlc3VsdC5wdXNoKGogPT0gMCA/IG5vZGUgOiAtMSk7XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Ly8gY29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFxuXHRcdHJldHVybiB7XG5cdFx0XHRub2RlczogcmVzdWx0LFxuXHRcdFx0c2l6ZTogc3RhdGVtZW50U2l6ZSxcblx0XHR9O1xuXHR9XG5cblx0ZC5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cblx0cmV0dXJuIGQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsdWUodmFsdWUpXG57XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiB2YWx1ZSgpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufSIsImltcG9ydCB7IGgsIGhzLCBhcGkgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlci9zcmMvZW1wdHknO1xuaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcbmltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICdAc2ludW91cy9sYXp5JztcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcblxubGV0IE9CU0VSVkVSO1xubGV0IFNUT1JBR0UgPSB7fTtcblxubGV0IFNVQlNDUklCRVJTID0gW107XG5cbmZ1bmN0aW9uIGFkZFN1YnNjcmliZXIoZm4pXG57XG5cdGNvbnNvbGUubG9nKGZuLCBTVUJTQ1JJQkVSUylcblx0U1VCU0NSSUJFUlMucHVzaChmbik7XG59XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVQcm9wcyhlbCwgb3B0cylcbi8vIHtcblx0Ly8gaWYoIW9wdHMuX3MpIHtcblx0Ly8gXHRyZXR1cm47XG5cdC8vIH1cblxuLy8gXHRhcGkucHJvcGVydHkoZWwsIG9wdHMsIG51bGwpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlVGFnKHBhcmVudCwgY2hpbGRyZW4sIGN1cnJlbnRJbmRleCwgdmFsdWUpXG4vLyB7XG4vLyBcdGxldCBlbCA9IGNoaWxkcmVuW2N1cnJlbnRJbmRleF07XG5cdFxuLy8gXHRsZXQgbm9kZXMgPSB2YWx1ZSgpO1xuXG4vLyBcdGlmKEFycmF5LmlzQXJyYXkobm9kZXMpKSB7XG5cbi8vIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4vLyBcdFx0XHRsZXQgY2hpbGQgPSBub2Rlc1tpXTtcbi8vIFx0XHRcdGlmKHR5cGVvZiBjaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuLy8gXHRcdFx0XHRjaGlsZCA9IGNoaWxkKCk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0XHQvLyBjb25zb2xlLmxvZyhwYXJlbnQsICBjaGlsZC5zaXplKVxuLy8gXHRcdFx0Ly8gYXBpLmluc2VydChwYXJlbnQsIGNoaWxkLCBjaGlsZHJlbltjdXJyZW50SW5kZXggKyBpXSk7XG4vLyBcdFx0XHQvLyBwYXJlbnQucmVwbGFjZUNoaWxkKGNoaWxkLCBjaGlsZHJlbltjdXJyZW50SW5kZXggKyBpXSlcbi8vIFx0XHRcdC8vIGNoaWxkcmVuW2N1cnJlbnRJbmRleCArIGldLnJlcGxhY2VXaXRoKGNoaWxkKTtcbi8vIFx0XHR9XG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0YXBpLmluc2VydChlbCwgbm9kZXMsIG51bGwpO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVDaGlsZHJlbihub2RlLCBjaGlsZHJlbilcbi8vIHtcbi8vIFx0bGV0IGJpbmRDaGlsZHJlbiA9IFtdO1xuXG4vLyBcdGlmKG5vZGUgIT09IG51bGwpIHtcbi8vIFx0XHRiaW5kQ2hpbGRyZW4gPSBmaWx0ZXJDaGlsZE5vZGVzKG5vZGUpO1xuLy8gXHR9XG5cbi8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuLy8gXHRcdGlmKGNoaWxkcmVuW2ldID09PSBfKSB7XG4vLyBcdFx0XHRjb250aW51ZTtcbi8vIFx0XHR9XG4vLyBcdFx0Ly8gY29uc29sZS5lcnJvcihiaW5kQ2hpbGRyZW5baV0sIGNoaWxkcmVuW2ldKTtcbi8vIFx0XHRoeWRyYXRlVGFnKG5vZGUsIGJpbmRDaGlsZHJlbiwgaSwgY2hpbGRyZW5baV0pO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldFNsb3ROb2RlKGVsLCBwYXRoKVxuLy8ge1xuLy8gXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbi8vIFx0XHRlbCA9IGVsLmNoaWxkTm9kZXNbcGF0aFtpXV07XG4vLyBcdH1cblxuLy8gXHRyZXR1cm4gZWw7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIGVsLCBvcHRzID0ge30sIHNsb3RzKVxuLy8ge1xuLy8gXHRpZighb3B0c1snaWQnXSkge1xuLy8gXHRcdHJldHVybjtcbi8vIFx0fVxuXG4vLyBcdC8vIGlmKG9wdHNbJ2lkJ10gPT09ICdoeWRyLTEzJykge1xuLy8gXHQvLyBcdG9wdHNbJ2lkJ10gPSAnaHlkci02Jztcbi8vIFx0Ly8gfVxuXG4vLyBcdC8vIGlmKG9wdHNbJ2lkJ10gPT09ICdoeWRyLTMwJykge1xuLy8gXHQvLyBcdG9wdHNbJ2lkJ10gPSAnaHlkci0yMSc7XG4vLyBcdC8vIH1cblxuLy8gXHRsZXQgYmluZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHsgb3B0c1snaWQnXSB9YCk7XG5cbi8vIFx0bGV0IHNsb3ROb2RlcyA9IHt9XG5cbi8vIFx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcbi8vIFx0XHRpZihjb21wb25lbnQuX3Nsb3RzUGF0aFtrZXldKSB7XG4vLyBcdFx0XHRsZXQgbm9kZSA9IGdldFNsb3ROb2RlKGJpbmROb2RlLCBjb21wb25lbnQuX3Nsb3RzUGF0aFtrZXldKVxuLy8gXHRcdFx0c2xvdE5vZGVzW2tleV0gPSBub2RlO1xuLy8gXHRcdH0gZWxzZSB7XG4vLyBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vICR7a2V5fSBzbG90IG5hbWVzcGFjZSBkZWZpbmVkYCk7XG4vLyBcdFx0fVxuLy8gXHR9XG5cbi8vIFx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG4vLyBcdFx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcbi8vIFx0XHRcdGxldCBub2RlID0gc2xvdE5vZGVzW2tleV07XG4vLyBcdFx0XHRsZXQgY2hpbGRyZW5TbG90cyA9IHNsb3RzW2tleV07XG5cdFx0XHRcbi8vIFx0XHRcdGlmKG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbi8vIFx0XHRcdFx0bm9kZSA9IFtub2RlXTtcbi8vIFx0XHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRcdG5vZGUgPSBub2RlLmNoaWxkTm9kZXM7XG4vLyBcdFx0XHR9XG5cbi8vIFx0XHRcdGlmKGNoaWxkcmVuU2xvdHMubGVuZ3RoID4gbm9kZS5sZW5ndGgpIHtcbi8vIFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTbG90IGh5ZHJhdGlvbiBsZW5ndGggbWlzbWF0Y2gnKTtcbi8vIFx0XHRcdH1cblxuLy8gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlblNsb3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFxuLy8gXHRcdFx0XHRhcGkuaW5zZXJ0KG5vZGVbaV0sIGNoaWxkcmVuU2xvdHNbaV0oKSwgbnVsbCk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0fVxuLy8gXHR9KTtcblx0XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGUoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbi8vIHtcbi8vIFx0bGV0IGJpbmROb2RlO1xuLy8gXHRjb25zb2xlLmxvZyh0aGlzLCBlbCwgb3B0cywgY2hpbGRyZW4pXG5cbi8vIFx0Ly8gaWYodGhpcy5ub2RlKSB7XG4vLyBcdC8vIFx0YmluZE5vZGUgPSB0aGlzLm5vZGU7XG4vLyBcdC8vIH1cblxuLy8gXHRpZighb3B0c1snaWQnXSkge1xuLy8gXHRcdHJldHVybjtcbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRiaW5kTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAkeyBvcHRzWydpZCddIH1gKTtcbi8vIFx0fVxuXG4vLyBcdC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuLy8gXHQvLyB0aGlzLmN0eC5fZWxfaW5kZXgrKztcblxuLy8gXHRpZihiaW5kTm9kZSA9PT0gbnVsbCkge1xuLy8gXHRcdHJldHVybjtcbi8vIFx0fVxuXHRcblx0Ly8gYXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdC8vIFx0aHlkcmF0ZVByb3BzKGJpbmROb2RlLCBvcHRzKTtcblx0Ly8gXHRoeWRyYXRlQ2hpbGRyZW4oYmluZE5vZGUsIGNoaWxkcmVuKTtcblx0Ly8gfSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbi8vIHtcbi8vIFx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcbi8vIFx0aWYoY2hpbGQuc2V0UGFyZW50KSB7XG4vLyBcdFx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG4vLyBcdH1cbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVyKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG4vLyB7XG4vLyBcdG9wdGlvbnModGhpcywgb3B0cyk7XG5cdFxuLy8gXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG4vLyBcdFx0aHlkcmF0ZS5jYWxsKHRoaXMsIGVsLCBvcHRzLCBjaGlsZHJlbik7XG4vLyBcdFx0cmV0dXJuIF87XG4vLyBcdH1cblx0XHRcbi8vIFx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0SHlkcmF0ZUNvbXBvbmVudChlbCwgb3B0cyk7XG5cbi8vIFx0Ly8gY29uc29sZS5sb2coY29tcG9uZW50LCBlbCwgb3B0cylcbi8vIFx0aWYoY29tcG9uZW50ID09PSBudWxsKSB7XG4vLyBcdFx0cmV0dXJuIF87XG4vLyBcdH1cblxuLy8gXHRyZWdpc3RlckNoaWxkcmVuKHRoaXMuY3R4LCBjb21wb25lbnQpO1xuXG4vLyBcdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuLy8gXHRcdC8vIGNvbnNvbGUud2Fybignc3RhcnQgaHlkcmF0aW9uJyk7XG4vLyBcdFx0cmV0dXJuIGNvbXBvbmVudC5oeWRyYXRlKHtcbi8vIFx0XHRcdGdldFVJRCgpIHtcbi8vIFx0XHRcdFx0cmV0dXJuIC0xO1xuLy8gXHRcdFx0fSxcbi8vIFx0XHRcdF9zbG90czogb3B0cy4kc2xvdHMsXG4vLyBcdFx0fSwgY29tcGlsZXIpO1xuLy8gXHR9XG5cbi8vIFx0aWYodHlwZW9mIG9wdHMucHJvcHMgIT09ICd1bmRlZmluZWQnKSB7XG4vLyBcdFx0Y29tcG9uZW50LnBhc3NQcm9wcyhvcHRzLnByb3BzKTtcbi8vIFx0fVxuXG4vLyBcdGlmKG9wdHMuJHNsb3RzKSB7XG4vLyBcdFx0aHlkcmF0ZVNsb3RzKGNvbXBvbmVudCwgZWwsIG9wdHMsIG9wdHMuJHNsb3RzKTtcbi8vIFx0fVxuXG4vLyBcdHJldHVybiBpbml0Q29tcG9uZW50KGNvbXBvbmVudCk7XG4vLyB9XG5cblxuXG5cblxuXG5mdW5jdGlvbiBoeWRyYXRlUHJvcHMoZWwsIG9wdHMpXG57XG5cdC8vIGNvbnNvbGUubG9nKG9wdHMpXG5cdGFkZFN1YnNjcmliZXIoKCkgPT4ge1xuXHRcdGFwaS5wcm9wZXJ0eShlbCwgb3B0cywgbnVsbCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlSChjb250ZXh0LCBlbCwgb3B0aW9ucywgY2hpbGRyZW4pXG57XG5cdGlmKG9wdGlvbnMuX3MpIHtcblx0XHRoeWRyYXRlUHJvcHMoZWwsIG9wdGlvbnMpO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdC8vIGNvbnNvbGUubG9nKGNoaWxkcmVuW2ldKVxuXHRcdGh5ZHJhdGUoY29udGV4dCwgZWwuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5baV0pO1xuXHR9XG5cblx0Ly8gZWwuX2luZGV4Kys7XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVMb29wKGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGxldCBjb25kaXRpb24gPSBhcmdzLmM7XG5cdGxldCBzdGFydE5vZGUgPSBub2RlO1xuXG5cdC8vIGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdGxldCBsb29wX2NvbmRpdGlvbiA9IHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicgPyBjb25kaXRpb24oKSA6IGNvbmRpdGlvbjtcblx0XHRsZXQgY3VycmVudE5vZGUgPSBzdGFydE5vZGU7XG5cblx0XHRmb3IobGV0IGtleSBpbiBsb29wX2NvbmRpdGlvbilcblx0XHR7XG5cdFx0XHRsZXQgaXRlbSA9IGxvb3BfY29uZGl0aW9uW2tleV07XG5cdFx0XHRsZXQgaXRlbUFyZ3MgPSBhcmdzLmZuKGl0ZW0sIGtleSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnW2h5ZHJhdGUgbG9vcF0nLCBjdXJyZW50Tm9kZSwgaXRlbUFyZ3MpXG5cblx0XHRcdGh5ZHJhdGUoY29udGV4dCwgY3VycmVudE5vZGUsIGl0ZW1BcmdzKTtcblxuXHRcdFx0Y3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0fVxuXHQvLyB9KTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVRleHQoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0Ly8gY29uc29sZS53YXJuKCdbVEVYVF0nLCBub2RlLCBhcmdzLnQpO1xuXHRpZihhcmdzLnQgPT09IF8pIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gaWYodHlwZW9mIGFyZ3MudCAhPT0gJ2Z1bmN0aW9uJyApIHtcblx0Ly8gXHRyZXR1cm47XG5cdC8vIH1cblx0Ly8gY29uc29sZS53YXJuKCdbVEVYVF0nLCBub2RlLCBhcmdzLnQoKSk7XG5cdFxuXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRhcGkuaW5zZXJ0KG5vZGUsIGFyZ3MudCgpLCBudWxsKTtcblx0fSk7XG5cdC8vIGFwaS5pbnNlcnQoZWwsIG5vZGVzLCBudWxsKTtcbn1cblxuXG5mdW5jdGlvbiBnZXRTbG90Tm9kZShlbCwgdGFnLCBwYXRoKVxue1xuXHQvLyBsZXQgXG5cdC8vIGNvbnNvbGUubG9nKGVsLCB0YWcsIHBhdGgpO1xuXHRmb3IgKHZhciBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcblx0XHRpZihwYXRoW2ldICE9PSBudWxsKSB7XG5cdFx0XHRlbCA9IGVsLmNoaWxkTm9kZXNbcGF0aFtpXV07XG5cdFx0fVxuXHR9XG5cdC8vIGNvbnNvbGUuZXJyb3IoZWwpO1xuXG5cdHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVNsb3RzKGNvbnRleHQsIGVsLCBvcHRzID0ge30sIHNsb3RzKVxue1xuXHRsZXQgYmluZGVkTm9kZXMgPSB7fVxuXG5cdGxldCBzbG90RGF0YSA9IGNvbnRleHQuX3Nsb3RzRGF0YTtcblxuXHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuXHRcdGlmKHNsb3REYXRhW2tleV0pIHtcblx0XHRcdGxldCBub2RlID0gZ2V0U2xvdE5vZGUoZWwsIHNsb3REYXRhW2tleV0udGFnLCBzbG90RGF0YVtrZXldLnBhdGgpO1xuXHRcdFx0YmluZGVkTm9kZXNba2V5XSA9IG5vZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gJHtrZXl9IHNsb3QgbmFtZXNwYWNlIGRlZmluZWRgKTtcblx0XHR9XG5cdH1cblxuXHQvLyByZXR1cm47XG5cdC8vIGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuXHRcdGxldCBkYXRhID0gc2xvdERhdGFba2V5XTtcblx0XHRsZXQgbm9kZSA9IGJpbmRlZE5vZGVzW2tleV07XG5cdFx0bGV0IGNoaWxkcmVuU2xvdHMgPSBzbG90c1trZXldO1xuXHRcdGxldCBzdGFydE5vZGVJbmRleCA9IGRhdGEuaW5kZXg7XG5cdFx0Ly8gaWYoZGF0YS50YWcpIHtcblx0XHQvLyBcdG5vZGUgPSBub2RlLmNoaWxkTm9kZXM7XG5cdFx0Ly8gfSBlbHNlIHtcblx0XHQvLyBcdG5vZGUgPSBbbm9kZV07XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gY29uc29sZS5sb2coa2V5LCBzdGFydE5vZGVJbmRleCwgbm9kZSwgbm9kZS5jaGlsZE5vZGVzW3N0YXJ0Tm9kZUluZGV4XSwgY2hpbGRyZW5TbG90cylcblx0XHQvLyBicmVhaztcblxuXHRcdGlmKGNoaWxkcmVuU2xvdHMubGVuZ3RoID4gbm9kZS5sZW5ndGgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU2xvdCBoeWRyYXRpb24gbGVuZ3RoIG1pc21hdGNoJyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0Tm9kZUluZGV4OyBpIDwgY2hpbGRyZW5TbG90cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Ly8gY29uc29sZS5sb2cobm9kZS5jaGlsZE5vZGVzW2ldLCBjaGlsZHJlblNsb3RzW2ldKVxuXG5cdFx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5TbG90c1tpXSk7XG5cdFx0XHQvLyBhcGkuaW5zZXJ0KG5vZGVbaV0sIGNoaWxkcmVuU2xvdHNbaV0oKSwgbnVsbCk7XG5cdFx0fVxuXHR9XG5cdC8vIH0pO1xuXHRcbn1cbi8qKlxuICogQ29udGV4dCBzZXR1cFxuICovXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGlmKGNoaWxkLnNldFBhcmVudCkge1xuXHRcdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVUYWcoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0bGV0IGVsID0gYXJncy50LFxuXHRcdG9wdHMgPSBhcmdzLm8sXG5cdFx0Y2hpbGRyZW4gPSBhcmdzLmM7XG5cblx0aWYoIVNpbnVvdXMuaGFzQ29tcG9uZW50KGVsKSkge1xuXHRcdGh5ZHJhdGVIKGNvbnRleHQsIG5vZGUsIG9wdHMsIGNoaWxkcmVuKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgY29tcG9uZW50ID0gU2ludW91cy5nZXRIeWRyYXRlQ29tcG9uZW50KGVsLCBvcHRzKTtcblxuXHRpZihjb21wb25lbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gXztcblx0fVxuXG5cdHJlZ2lzdGVyQ2hpbGRyZW4oY29udGV4dCwgY29tcG9uZW50KTtcblxuXHRpZihjb21wb25lbnQuX2Z1bmN0aW9uYWwpIHtcblx0XHRsZXQgbmV3QXJncyA9IGNvbXBvbmVudC5oeWRyYXRlKHtcblx0XHRcdGdldFVJRCgpIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fSxcblx0XHRcdF9zbG90czogb3B0cy4kc2xvdHMsXG5cdFx0fSk7XG5cblx0XHRpZihvcHRzLiRzbG90cykge1xuXHRcdFx0aHlkcmF0ZVNsb3RzKGNvbXBvbmVudCwgbm9kZSwgb3B0cywgb3B0cy4kc2xvdHMpO1xuXHRcdH1cblxuXHRcdGh5ZHJhdGUoY29udGV4dCwgbm9kZSwgbmV3QXJncyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gc2V0dXAgY29tcG9uZW50XG5cdC8vIGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuXHQvLyBcdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG5cdC8vIH1cblxuXHRpZihvcHRzLiRzbG90cykge1xuXHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIG5vZGUsIG9wdHMsIG9wdHMuJHNsb3RzKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUud2Fybihjb21wb25lbnQuaHlkcmF0ZSgpLCBub2RlLCBvcHRzLCBjaGlsZHJlbilcblx0cmV0dXJuIGh5ZHJhdGUoY29tcG9uZW50LCBub2RlLCBjb21wb25lbnQuaHlkcmF0ZShjb21wb25lbnQpKTtcbn1cblxuLyoqXG4gKiBNYWluIGh5ZHJhdGlvbiBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBoeWRyYXRlKGNvbnRleHQsIG5vZGUsIGFyZ3MgPSBudWxsKVxue1xuXHRpZihhcmdzID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coJ1tIWURSQVRFXScsIGNvbnRleHQsIG5vZGUpXG5cblx0aWYoYXJncy5fdCA9PT0gJ2gnKSB7XG5cdFx0Ly8gYXJncy5vWydkYXRhLWh5ZHJhdGVkJ10gPSB0cnVlO1xuXHRcdGh5ZHJhdGVUYWcoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAndCcpIHtcblx0XHRoeWRyYXRlVGV4dChjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXG5cdGlmKGFyZ3MuX3QgPT09ICdsb29wJykge1xuXHRcdGh5ZHJhdGVMb29wKGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cblx0cmV0dXJuIF87XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEh5ZHJhdGlvbihjb21wb25lbnQsIGh5ZHJhdGlvblJvb3QsIHRpbWVCZW5jaG1hcmsgPSAoKSA9PiB7fSwgY2FsbGJhY2sgPSBudWxsKVxue1xuXHRsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgKGluc3RhbmNlKSA9PiB7XG5cblx0XHR0aW1lQmVuY2htYXJrKCdIeWRyYXRpb24nKTtcblxuXHRcdGxldCB0cmVlID0gW2luc3RhbmNlXTtcblxuXHRcdFNpbnVvdXMuY2xlYXJISUQoKTtcblxuXHRcdGxldCBjb25uZWN0ZWROb2RlID0gZmlsdGVyQ2hpbGROb2RlcyhoeWRyYXRpb25Sb290KTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNvbXBvbmVudCA9IHRyZWVbaV07XG5cdFx0XHRsZXQgbm9kZSA9IGNvbm5lY3RlZE5vZGVbaV07XG5cdFx0XHRsZXQgaHlkcmF0aW9uID0gY29tcG9uZW50Lmh5ZHJhdGUoY29tcG9uZW50KTtcblx0XHRcdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHQvLyBoeWRyYXRlKGNvbXBvbmVudCwgbm9kZSwgaHlkcmF0aW9uKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdFxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ3N0YXJ0JywgU1VCU0NSSUJFUlMpO1xuXHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgU1VCU0NSSUJFUlMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBcdGxldCBmbiA9IFNVQlNDUklCRVJTW2ldO1xuXHRcdC8vIFx0Y29uc29sZS53YXJuKGksIFNVQlNDUklCRVJTW2ldKVxuXHRcdC8vIFx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0Ly8gXHRcdC8vIGNvbnNvbGUubG9nKGZuKVxuXHRcdC8vIFx0XHRmbigpXG5cdFx0Ly8gXHR9KTtcblx0XHQvLyBcdC8vIFNVQlNDUklCRVJTW2ldKCk7XG5cdFx0Ly8gfVxuXHRcdC8vIH0pO1xuXHRcdC8vIGNvbnNvbGUubG9nKGluc3RhbmNlKTtcblx0XHRpbnN0YW5jZS5ob29rKCdtb3VudGVkJyk7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHRpbWVCZW5jaG1hcmsoJ0h5ZHJhdGlvbicpO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9KTtcblxufVxuXG4vKipcbiAqIEZpbHRlciBvdXQgd2hpdGVzcGFjZSB0ZXh0IG5vZGVzIHVubGVzcyBpdCBoYXMgYSBub3NraXAgaW5kaWNhdG9yLlxuICpcbiAqIEBwYXJhbSAge05vZGV9IHBhcmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZpbHRlckNoaWxkTm9kZXMocGFyZW50KSB7XG5cdHJldHVybiBwYXJlbnQuY2hpbGROb2Rlcztcblx0Ly8gY29uc29sZS53YXJuKHBhcmVudCwgcGFyZW50LmNoaWxkTm9kZXMpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKS5maWx0ZXIoXG4gICAgICAgIGVsID0+IGVsLm5vZGVUeXBlICE9PSAzIHx8IGVsLmRhdGEudHJpbSgpIHx8IGVsLl9ub3NraXBcbiAgICApO1xufVxuIiwiXG5cdFx0aW1wb3J0IGNvbXBvbmVudENvbmZpZyBmcm9tIFwiLi9pbmRleC5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFBhZ2VzSW5kZXgoKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnUGFnZXNJbmRleCc7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSB7fTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSBPYmplY3Qua2V5cyhjb25maWcubWV0aG9kcyk7XG5cdFx0aW5zdGFuY2UuX2Z1bmN0aW9uYWwgPSBmYWxzZTtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcpIHtcblx0XHRcdGlmKHR5cGVvZiBjb25maWdba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcubWV0aG9kcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWcubWV0aG9kc1trZXldXG5cdFx0fVxuXHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3JlbmRlciA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCwgZCwgYyB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFwiZGl2XCIsIHt9LCBbXG4gIGxvb3AoY3R4Ll9zdGF0ZS5pdGVtcywgKGl0ZW0sIGtleSkgPT4ge1xuICAgIHJldHVybiBoKFxuICAgICAgXCJzYnV0dG9uXCIsXG4gICAgICB7XG4gICAgICAgICRzbG90czoge1xuICAgICAgICAgIGRlZmF1bHQ6IFtcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGBCdXR0b24gJHtpdGVtfWA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW11cbiAgICApO1xuICB9KSxcbl0pO1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9faHlkcmF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsZXQgY3R4ID0gdGhpcztcblx0XHRcdFx0cmV0dXJuIHtcbiAgX3Q6IFwiaFwiLFxuICB0OiBcImRpdlwiLFxuICBvOiB7fSxcbiAgYzogW1xuICAgIHtcbiAgICAgIF90OiBcImxvb3BcIixcbiAgICAgIGM6IGN0eC5fc3RhdGUuaXRlbXMsXG4gICAgICBmbjogKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIF90OiBcImhcIixcbiAgICAgICAgICB0OiBcInNidXR0b25cIixcbiAgICAgICAgICBvOiB7XG4gICAgICAgICAgICAkc2xvdHM6IHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF90OiBcInRcIixcbiAgICAgICAgICAgICAgICAgIHQ6IC0xLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYzogW10sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdGV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuXHQiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHN0YXRlKG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IG8oW10pLFxuICAgICAgczE6IG8oMSlcbiAgICB9O1xuICB9LFxuXG4gIGNvbXB1dGVkKG8pIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XG4gICAgICAgIGQucHVzaChpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RhdGUuaXRlbXMoZCk7IC8vIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgLy8gXHRzMSArPSAxMFxuICAgICAgLy8gfSwgMTAwKVxuICAgIH0sXG4gICAgdW5tb3V0bmVkOiBmdW5jdGlvbiAoKSB7Ly8gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgfVxuICB9XG59OyIsImltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJ0BzaW51b3VzL2h5ZHJhdGlvbic7XG5pbXBvcnQgcmVuZGVyIGZyb20gJ0BzaW51b3VzL3JlbmRlcic7XG4vLyBpbXBvcnQgdGVzdCBmcm9tICcuLi9jb21wb25lbnRzL3Rlc3Quc2luJ1xuLy8gaW1wb3J0IHRlc3QyIGZyb20gJy4uL2NvbXBvbmVudHMvdGVzdDIuc2luJ1xuaW1wb3J0IGJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3NidXR0b24uc2luJ1xuaW1wb3J0IEluZGV4UGFnZSBmcm9tICcuLi9wYWdlcy9pbmRleC5zaW4nXG5pbXBvcnQgdGltZUJlbmNobWFyayBmcm9tICcuL3RpbWUnO1xuXG5cbi8vIGNvbnN0IEluZGV4UGFnZSA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VJbmRleFwiICovICcuLi9wYWdlcy9pbmRleC5zaW4nKVxuXG5cbnZhciBMQVlPVVQ7XG52YXIgUGFnZUluZGV4LCBQYWdlSW5kZXgyO1xuXG5mdW5jdGlvbiBURVNUX1dFQlBBQ0tfQlVJTEQoKVxue1xuXHR0aW1lQmVuY2htYXJrKCdTU1ItQnVpbGQnKTtcblx0Ly8gU2ludW91cy5yZWdpc3RlckNvbXBvbmVudCh0ZXN0KTtcblx0Ly8gU2ludW91cy5yZWdpc3RlckNvbXBvbmVudCh0ZXN0Mik7XG5cdFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQoYnV0dG9uKTtcblx0dGltZUJlbmNobWFyaygnU1NSLUJ1aWxkJyk7XG59XG5cbi8vIGZ1bmN0aW9uIFRFU1RfSU5JVCgpXG4vLyB7XG4vLyBcdHRpbWVCZW5jaG1hcmsoJ1NTUi1Jbml0Jyk7XG4vLyBcdFBhZ2VJbmRleCA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0UGFnZUluZGV4MiA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0dGltZUJlbmNobWFyaygnU1NSLUluaXQnKTtcbi8vIH1cblxuZnVuY3Rpb24gVEVTVF9SRU5ERVIoKVxue1xuXHRyZW5kZXIoSW5kZXhQYWdlLCBMQVlPVVQsIHRpbWVCZW5jaG1hcmssIChjKSA9PiB7XG5cdFx0UGFnZUluZGV4ID0gYztcblx0fSk7XG59XG5cbmZ1bmN0aW9uIENMRUFSX0hPT0tTKClcbntcblx0XG5cdGxldCBodG1sID0gTEFZT1VULmlubmVySFRNTDtcblx0TEFZT1VULmlubmVySFRNTCA9IGh0bWw7XG5cdFBhZ2VJbmRleC5ob29rKCd1bm1vdW50ZWQnKTtcbn1cblxuZnVuY3Rpb24gVEVTVF9IWURSQVRFKClcbntcblx0aHlkcmF0ZShJbmRleFBhZ2UsIExBWU9VVCwgdGltZUJlbmNobWFyayk7XG59XG5cblRFU1RfV0VCUEFDS19CVUlMRCgpO1xuXG4vLyBURVNUX0lOSVQoKTtcblxuLy8gcmV0dXJuO1xuKGZ1bmN0aW9uIGxvYWQoKSB7XG5cdExBWU9VVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXlvdXQnKTtcblxuXG5cdC8vIExBWU9VVC5pbm5lckhUTUwgPSAnJztcblx0Ly8gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG5cdFRFU1RfSFlEUkFURSgpO1xuXHRyZXR1cm47XG5cblx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0Ly8gVEVTVF9SRU5ERVIoKTtcblx0Ly8gfSwgMjAwMClcblxuXHRURVNUX1JFTkRFUigpO1xuXHQvLyBjb25zb2xlLmxvZyhMQVlPVVQuaW5uZXJIVE1MKVxuXHRyZXR1cm5cblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblxuXHRcdENMRUFSX0hPT0tTKCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCBURVNUX0hZRFJBVEUoKTtcblx0XHR9LCAzMDApO1xuXHR9LCAxMDAwKTtcbn0pKCk7XG4iLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==