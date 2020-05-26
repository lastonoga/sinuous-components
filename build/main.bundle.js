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
/* harmony import */ var _siph_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @siph/component */ "./packages/component/dist/index.js");
/* harmony import */ var _siph_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_siph_component__WEBPACK_IMPORTED_MODULE_1__);

		
	
		

		let config = Object.assign({
			methods: {},
		}, _sbutton_sin_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

		let instance = function Sbutton() {
			_siph_component__WEBPACK_IMPORTED_MODULE_1__["Basic"].call(this);
		};
		
		// inherit Basic
		instance.prototype = Object.create(_siph_component__WEBPACK_IMPORTED_MODULE_1__["Basic"].prototype);

		// correct the constructor pointer because it points to Basic
		instance.prototype.constructor = instance;
		
		instance.prototype._methods = {};
		
		instance.prototype._componentName = 'Sbutton';
		instance.prototype._shouldHydarate = true;
		instance.prototype._slotsData = {"default":{"path":[0,1],"tag":"div","index":0}};
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
		
		instance.prototype.__props = {};
		for(let key in config.props) {
			instance.prototype.__props[key] = config.props[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop }) {
				return h(
  "div",
  [
    ctx.options,
    {
      staticClass: "button",
      staticStyle: {
        "border-radius": "15px",
      },
      class: "new-button",
      style: [{ color: ctx._computed.testColor }],
      attrs: {
        disabled: true,
      },
      on: {
        click: ctx.click,
      },
    },
  ],
  [
    () => {
      return `${ctx._state.s1()}`;
    },
    slot(
      ctx,
      h,
      "default",
      "div",
      {
        staticClass: "s",
        props: {
          tag: "div",
        },
      },
      [`Default button text`]
    ),
  ]
);
;
			}
		
			instance.prototype.__hydrate = function(h) {
				let ctx = this;
				return {
  _t: "h",
  t: "div",
  o: [
    ctx.options,
    {
      staticClass: "button",
      class: "new-button",
      style: [{ color: ctx._computed.testColor }],
      on: {
        click: ctx.click,
      },
      _s: true,
    },
  ],
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
  props: {
    prop1: {
      type: "Number",
      default: () => {
        return 9;
      }
    },
    pt: {
      type: "Number",
      default: () => {
        return 9;
      }
    }
  },

  data() {
    return {
      timer: null
    };
  },

  state(o) {
    return {
      s1: o(this.random(1, 100))
    };
  },

  computed(o) {
    return {
      testColor: o(() => {
        return this._state.s1() % 2 === 0 ? 'red' : 'green';
      }),
      testClass: o(() => {
        return {
          red: this._state.s1() % 2 === 0
        };
      })
    };
  },

  methods: {
    random: function (s, e) {
      return Math.floor(Math.random() * e) + s;
    },
    click: function () {
      alert(this._state.s1());
    },
    mounted: function () {
      let direction = 1; // console.log('created', this.hid, 'with s1 =', s1);

      setInterval(() => {
        this._state.s1(this._state.s1() + 1); //Math.random(0, 100)
      }, 2000); // timer = setInterval(() => {
      // 	// console.log('interval', this.hid);
      // 	if(s1 > 40) {
      // 		direction = -5;
      // 	} else if(s1 < 10) {
      // 		direction = 5;
      // 	}
      // 	s1 += direction
      // }, 1000)
    },
    unmounted: function () {
      // console.log('unmounted', this.hid);
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

var _i = _interopRequireDefault(__webpack_require__(/*! @siph/i */ "./packages/i/dist/index.js"));

var _empty = __webpack_require__(/*! @siph/compiler/src/empty */ "./packages/compiler/src/empty.js");

var _observable = __webpack_require__(/*! ./observable */ "./packages/component/dist/observable.js");

var _render = __webpack_require__(/*! @siph/render */ "./packages/render/dist/index.js");

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
    this.$el = null;
    this._props = {}; // Local data

    this._data = this.data(); // Stateful data

    this._state = this.state(_observable.observable); // slots

    this._slots = {
      default: []
    }; // hooks

    this._hooks = [];
    this._computed = this.computed(_observable.computed);
    this._children = [];
    this._el_index = 0;
    this.options = null; // this._state = [];
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
    if (child._functional) {
      child = _empty._;
    }

    this._children.push(child);

    if (child.setParent) {
      child.setParent(this);
    }
  };

  Basic.prototype.removeChild = function (index) {
    this._children[index].hook('unmounted');

    this._children.splice(index, 1);
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
  }; // Basic.prototype.initProps = function()
  // {
  // 	for(let key in this._props)
  // 	{
  // 		let prop = this._props[key];
  // 		let value = null;
  // 		let type = null;
  // 		if(typeof prop === 'function') {
  // 			// type
  // 		} else {
  // 			value = prop.default();
  // 		}
  // 		this._data[key] = value;
  // 	}
  // }


  Basic.prototype.passSlots = function (name, slots) {
    this._slots[name] = slots;
  };

  Basic.prototype.passOptions = function (options) {
    this.options = options;
  };

  Basic.prototype.passProps = function (props) {
    if (!props) {
      props = {};
    }

    for (var key in this.__props) {
      var value = this.__props[key].default();

      if (props[key]) {
        value = props[key];
      }

      this._props[key] = value;
    }
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

    if (!this._hooks.includes(type)) {
      this._hooks.push(type);
    }

    if (this[type]) {
      this[type].call(this);
    }

    for (var i = 0; i < this._children.length; i++) {
      if (this._children[i] === _empty._ || this._children[i]._hooks.includes(type)) {
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

    _render.h.bind(ctx);

    this.$el = ctx.__render(_render.h.bind(ctx), {
      ctx: ctx,
      statement: _render.statement,
      loop: _render.loop,
      slot: _render.slot
    });
    return this.$el;
  };

  Basic.prototype.hydrate = function (ctx) {
    if (ctx === void 0) {
      ctx = null;
    }

    if (ctx === null) {
      ctx = this;
    }

    _render.h.bind(ctx);

    return ctx.__hydrate(_render.h);
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

var _sinuous = __webpack_require__(/*! sinuous */ "./packages/component/node_modules/sinuous/module/sinuous.js");

function dynamic(h, tag, opts, children) {
  return function () {
    var el = tag();
    return h(el, opts, children);
  };
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
Object.defineProperty(exports, "options", {
  enumerable: true,
  get: function get() {
    return _options.default;
  }
});
Object.defineProperty(exports, "makeCss", {
  enumerable: true,
  get: function get() {
    return _options.makeCss;
  }
});
Object.defineProperty(exports, "mergeOptions", {
  enumerable: true,
  get: function get() {
    return _options.mergeOptions;
  }
});
Object.defineProperty(exports, "dynamic", {
  enumerable: true,
  get: function get() {
    return _dynamic.default;
  }
});
Object.defineProperty(exports, "Basic", {
  enumerable: true,
  get: function get() {
    return _basic.default;
  }
});

var _options = _interopRequireWildcard(__webpack_require__(/*! ./options */ "./packages/component/dist/options.js"));

var _dynamic = _interopRequireDefault(__webpack_require__(/*! ./dynamic */ "./packages/component/dist/dynamic.js"));

var _basic = _interopRequireDefault(__webpack_require__(/*! ./basic */ "./packages/component/dist/basic.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
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

var _observable = __webpack_require__(/*! sinuous/observable */ "./packages/component/node_modules/sinuous/module/observable.js");

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
  } // let obs = null;
  // let index = 0;
  // let data = (v) => {
  // 	console.log(seed, v, index)
  // 	if(typeof v === 'undefined') {
  // 		if(index === 0) {
  // 			index++;
  // 			return seed;
  // 		}
  // 		return obs();
  // 	}
  // 	// if(index === 0) {
  // 	// 	index++;
  // 	// 	return v;
  // 	// }
  // 	// if(obs === null) {
  // 	// 	obs = sinuousObservable(v);
  // 	// }
  // }


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
exports.makeCss = makeCss;
exports.makeOption = makeOption;
exports.mergeOptions = mergeOptions;
exports.default = options;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function argToString() {
  var str = '';

  for (var i = 0; i < arguments.length; i++) {
    var value = arguments[i];

    if (typeof value === 'function') {
      value = value();
    }

    if (typeof value === 'object') {
      for (var key in value) {
        if (value[key]) {
          str += " " + key;
        }
      }
    } else {
      str += " " + value;
    }
  }

  return str;
}

function argToObject() {
  var str = '';

  for (var i = 0; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      var value = arguments[i][key];

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

  if (!Array.isArray(dynamic)) {
    dynamic = [dynamic];
  }

  str += argToString.apply(this, dynamic); // console.log(str);

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

  var readyStyles = _extends({}, obj);

  if (typeof dynamic === 'function') {
    dynamic = dynamic();
  }

  if (!Array.isArray(dynamic)) {
    dynamic = [dynamic];
  }

  for (var i = 0; i < dynamic.length; i++) {
    for (var key in dynamic[i]) {
      var value = dynamic[i][key];

      if (typeof value === 'function') {
        value = value();
      }

      readyStyles[makeStyleProp(key)] = value;
    }
  }

  return readyStyles;
}

var cloneOptions = ['_s', '$slots'];

function makeCss(readyOptions, options) {
  if (options.staticClass || options.class) {
    readyOptions.class = classes.bind(this, options.staticClass || null, options.class || null);
  }

  if (options.staticStyle || options.style) {
    readyOptions.style = styles.bind(this, options.staticStyle || {}, options.style || null);
  }

  return readyOptions;
}

function makeOption(option, shouldClone) {
  if (shouldClone === void 0) {
    shouldClone = true;
  }

  var readyOption = {};

  if (option.on !== undefined) {
    for (var key in option.on) {
      readyOption["on" + key] = option.on[key];
    }
  }

  if (option.key !== undefined) {
    readyOption['data-key'] = option.key;
  }

  makeCss(readyOption, option);

  if (shouldClone) {
    for (var i = 0; i < cloneOptions.length; i++) {
      var name = cloneOptions[i];

      if (option[name]) {
        readyOption[name] = options[name];
      }
    }
  }

  return readyOption;
}

var AssignObjectOptions = ['staticStyle', 'attrs', 'on'];
var AssignValueOptions = ['style', 'class'];

function mergeOptions(options) {
  var readyOptions = {};
  var shouldBeMerged = false;

  if (Array.isArray(options)) {
    for (var i = 0; i < options.length; i++) {
      if (options[i] === null) {
        break;
      }

      var keys = Object.keys(options[i]);

      if (keys.length === 1 && keys.includes('$slots')) {
        break;
      }

      if (i > 0) {
        shouldBeMerged = true;
      }
    }

    if (!shouldBeMerged) {
      return options[1];
    }
  } else {
    return options;
  }

  for (var i = 0; i < options.length; i++) {
    var option = options[i];

    for (var j = 0; j < AssignObjectOptions.length; j++) {
      var name = AssignObjectOptions[j];

      if (!option[name]) {
        continue;
      }

      if (!readyOptions[name]) {
        readyOptions[name] = {};
      }

      for (var prop in option[name]) {
        readyOptions[name][prop] = option[name][prop];
      }
    }

    for (var j = 0; j < AssignValueOptions.length; j++) {
      var _name = AssignValueOptions[j];

      if (!option[_name]) {
        continue;
      }

      if (!readyOptions[_name]) {
        readyOptions[_name] = [];
      }

      readyOptions[_name] = readyOptions[_name].concat(option[_name]);
    }

    if (option._s !== undefined) {
      readyOptions._s = option._s;
    }

    if (option.key !== undefined) {
      readyOptions.key = option.key;
    }

    if (option.staticClass !== undefined) {
      if (readyOptions.staticClass === undefined) {
        readyOptions.staticClass = option.staticClass;
      } else {
        readyOptions.staticClass += ' ' + option.staticClass;
      }
    }
  } // console.warn(readyOptions)


  return readyOptions;
}

function options(options, shouldClone) {
  if (shouldClone === void 0) {
    shouldClone = true;
  }

  var readyOptions = mergeOptions(options);
  return makeOption(readyOptions, shouldClone);
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

var _sinuous = __webpack_require__(/*! sinuous */ "./packages/hydration/node_modules/sinuous/module/sinuous.js");

var _empty = __webpack_require__(/*! @siph/compiler/src/empty */ "./packages/compiler/src/empty.js");

var _i = _interopRequireDefault(__webpack_require__(/*! @siph/i */ "./packages/i/dist/index.js"));

var _component2 = __webpack_require__(/*! @siph/component */ "./packages/component/dist/index.js");

var _lazy = __webpack_require__(/*! @siph/lazy */ "./packages/lazy/dist/index.js");

var _render = __webpack_require__(/*! @siph/render */ "./packages/render/dist/index.js");

var _property = _interopRequireDefault(__webpack_require__(/*! ./property */ "./packages/hydration/dist/property.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var OBSERVER;
var STORAGE = {};

function hydrateH(context, el, options, children) {
  (0, _property.default)(context, el, options);

  for (var i = 0; i < children.length; i++) {
    hydrate(context, el.childNodes[i], children[i]);
  }
}

function hydrateStatement(context, node, args) {
  var parent = node.parentNode;
  var startIndex = 0;

  while ((node = node.previousSibling) != null) {
    startIndex++;
  }

  var statementArgs = args.a;

  function hideNodes(children, startIndex, length) {
    for (var j = startIndex; j <= length; j++) {
      var _node = children[j]; // console.log('hide', j, node);

      if (_node.nodeType !== Node.COMMENT_NODE) {
        _node.replaceWith(document.createComment(''));
      }

      _node = _node.nextElementSibling;
    }
  }

  _sinuous.api.subscribe(function () {
    var currentIndex = startIndex;
    var foundCondition = false;

    for (var i = 0; i < statementArgs.length; i += 3) {
      var condition = statementArgs[i];
      var size = statementArgs[i + 1];
      var component = statementArgs[i + 2];
      var currentNode = parent.childNodes[currentIndex];
      condition = typeof condition === 'function' ? condition() : condition; // console.log(currentNode, condition && !foundCondition);

      if (condition && !foundCondition) {
        foundCondition = true; // console.log('show', parent.childNodes[currentIndex], size);

        if (currentNode.nodeType === Node.COMMENT_NODE) {
          //  render
          var newNode = component.r(_component2.h.bind(context));
          currentNode.replaceWith(newNode);
        } else {
          // hydrate
          markAsReady(currentNode);
          hydrate(context, currentNode, component.h);
        }
      } else {
        // console.log('[hide]', parent.childNodes, currentIndex, size);
        hideNodes(parent.childNodes, currentIndex, size);
      }

      currentIndex += size; // console.warn(currentNode, currentNode.nextElementSibling)
      // console.log(currentNode, condition, 'skip');
    }
  });
}

function hydrateLoop(context, node, args) {
  var condition = args.c;
  var parentNode = node.parentNode;
  var parentChildren = parentNode.childNodes;
  (0, _render.loop)(context, args.c, args.k, function (item, key) {
    var node = args.r(_component2.h.bind(context), item, key);
    return node;
  }, function (registerHydration) {
    var items = args.c();

    for (var i = 0; i < items.length; i++) {
      var _node2 = parentChildren[i];
      var item = items[i];
      var itemKey = args.k(item, i);

      if (_node2) {
        if (_node2.getAttribute('data-key') == itemKey) {
          markAsReady(_node2);
          hydrate(context, _node2, args.h(item, i));
        }
      }

      registerHydration(item, i, _node2); // console.log(reg, item, i, node);
    }
  }, node.parentNode);
}
/**
 * Maybe need same hydration algorithm as with props
 * Skip first time hydration ???
 */


function hydrateText(context, node, args) {
  if (args.t === _empty._) {
    return;
  }

  _sinuous.api.subscribe(function () {
    _sinuous.api.insert(node, args.t(), null);
  });
}

function getSlotNode(el, tag, path) {
  var node = el;

  for (var i = 1; i < path.length; i++) {
    node = node.childNodes[path[i]];
  }

  return el;
}

function hydrateSlots(context, el, opts, slots) {
  if (opts === void 0) {
    opts = {};
  } // return;
  // Hydrate props of main Node
  // hydrateProps(context, el, opts);


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
    var _node3 = bindedNodes[_key];
    var childrenSlots = slots[_key];
    var startNodeIndex = data.index;

    if (typeof _node3 === 'undefined') {
      console.warn(el, opts, slotData, el[0]);
    }

    if (childrenSlots.length > _node3.length) {
      throw new Error('Slot hydration length mismatch');
    }

    for (var i = startNodeIndex; i < childrenSlots.length; i++) {
      // console.log(node.childNodes[i], childrenSlots[i])
      hydrate(context, _node3.childNodes[i], childrenSlots[i]);
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

  context.addChildren(component);

  if (component._functional) {
    var newArgs = component.hydrate({
      _slots: opts.$slots
    });

    if (opts.$slots) {
      hydrateSlots(component, node, opts, opts.$slots);
    } // console.log(opts)


    hydrate(context, node, newArgs);
    return;
  }

  component.passProps(opts.props);
  component.passOptions(opts);

  if (opts.$slots) {
    hydrateSlots(component, node, opts, opts.$slots);
  }

  node.$s = component; // console.log(component, node)

  return hydrate(component, node, component.hydrate(component));
}
/**
 * Main hydration function
 */


function hydrate(context, node, args) {
  if (args === void 0) {
    args = null;
  } // requestIdleCallback(() => {


  hydrateIdle(context, node, args); // }, {
  // 	timeout: 0,
  // 	read: true
  // });
}

function markAsReady(node) {
  node._hydrated = true;
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

  if (args._t === 'statement') {
    hydrateStatement(context, node, args);
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

    _i.default.clearHID(); // let connectedNode = filterChildNodes(hydrationRoot);


    for (var i = 0; i < tree.length; i++) {
      var _component = tree[i];
      var node = hydrationRoot.childNodes[i];

      var hydration = _component.hydrate(_component);

      hydrate(_component, node, hydration);
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

var _hydration = _interopRequireDefault(__webpack_require__(/*! ./hydration */ "./packages/hydration/dist/hydration.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ "./packages/hydration/dist/property.js":
/*!*********************************************!*\
  !*** ./packages/hydration/dist/property.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hydrateProps;

var _component = __webpack_require__(/*! @siph/component */ "./packages/component/dist/index.js");

var _sinuous = __webpack_require__(/*! sinuous */ "./packages/hydration/node_modules/sinuous/module/sinuous.js");

function hydrateProps(context, el, options) {
  options = (0, _component.mergeOptions)(options);

  if (!options._s) {
    return;
  }

  var subscribers = [];
  var subscribers_first = [];

  function addSubscriber(value, fn, skip) {
    if (skip === void 0) {
      skip = true;
    }

    subscribers.push({
      value: value,
      fn: fn
    });
    subscribers_first.push(skip);
  }
  /**
   * Make styles and classes
   */


  if (options.style || options.class) {
    // console.error(el);
    var cssOptions = (0, _component.makeCss)({}, options);

    if (cssOptions.style) {
      addSubscriber(cssOptions.style, function (obj) {
        for (var name in obj) {
          el.style.setProperty(name, obj[name]);
        }
      });
    }

    if (cssOptions.class) {
      // console.log(cssOptions.class());
      addSubscriber(cssOptions.class, function (value) {
        // console.log(el, value);
        el.className = value;
      });
    }
  }
  /**
   * Make events
   */


  if (options.on) {
    for (var name in options.on) {
      handleEvent(el, name, options.on[name]);
    }
  }
  /**
   * Make attributes
   */


  if (options.attrs) {
    var _loop = function _loop(_name) {
      addSubscriber(options.attrs[_name], function (value) {
        el.setAttribute(_name, value);
      });
    };

    for (var _name in options.attrs) {
      _loop(_name);
    }
  }
  /**
   * Subscribe
   */


  if (subscribers.length > 0) {
    _sinuous.api.subscribe(function () {
      for (var i = 0; i < subscribers.length; i++) {
        var value = subscribers[i].value();

        if (subscribers_first[i]) {
          subscribers_first[i] = false;
          return;
        }

        subscribers[i].fn(value);
      }
    });
  }
}

function handleEvent(el, name, value) {
  name = name.toLowerCase();

  if (value) {
    el.addEventListener(name, eventProxy);
  } else {
    el.removeEventListener(name, eventProxy);
  }

  (el._listeners || (el._listeners = {}))[name] = value;
}
/**
 * Proxy an event to hooked event handlers.
 * @param {Event} e - The event object from the browser.
 * @return {Function}
 */


function eventProxy(e) {
  // eslint-disable-next-line
  return this._listeners[e.type](e);
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
exports.getInstance = getInstance;
exports.loadComponent = loadComponent;

var _component = __webpack_require__(/*! @siph/component */ "./packages/component/dist/index.js");

function getInstance(component) {
  if (component instanceof _component.Basic) {
    return component;
  } else {
    return new component();
  }
}

function loadComponent(component, callback) {
  if (component instanceof Promise) {
    component.then(function (module) {
      callback(getInstance(module.default));
    });
  } else {
    callback(getInstance(new component()));
  }
}

/***/ }),

/***/ "./packages/render/dist/h.js":
/*!***********************************!*\
  !*** ./packages/render/dist/h.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.h = h;

var _sinuous = __webpack_require__(/*! sinuous */ "./packages/render/node_modules/sinuous/module/sinuous.js");

var _component = __webpack_require__(/*! @siph/component */ "./packages/component/dist/index.js");

var _i = _interopRequireDefault(__webpack_require__(/*! @siph/i */ "./packages/i/dist/index.js"));

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
  var readyOptions = (0, _component.options)(opts); // If HTML tag render

  if (!_i.default.hasComponent(el)) {
    return (0, _sinuous.h)(el, readyOptions, children);
  }

  var component = _i.default.getComponent(el); // console.log(this)


  if (this) {
    this.addChildren(component);
  }

  if (component._functional) {
    return component.render({
      options: opts,
      _slots: readyOptions.$slots
    });
  } // if(typeof opts.props !== 'undefined') {


  component.passProps(opts.props); // }

  for (var key in opts.$slots) {
    component.passSlots(key, opts.$slots[key]);
  }

  component.passOptions(opts);
  var node = component.render();
  node.$s = component;
  return node;
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
exports.render = render;
Object.defineProperty(exports, "loop", {
  enumerable: true,
  get: function get() {
    return _map.map;
  }
});
Object.defineProperty(exports, "slot", {
  enumerable: true,
  get: function get() {
    return _slot.slot;
  }
});
Object.defineProperty(exports, "statement", {
  enumerable: true,
  get: function get() {
    return _statement.statement;
  }
});
Object.defineProperty(exports, "h", {
  enumerable: true,
  get: function get() {
    return _h.h;
  }
});

var _lazy = __webpack_require__(/*! @siph/lazy */ "./packages/lazy/dist/index.js");

var _map = __webpack_require__(/*! ./map */ "./packages/render/dist/map/index.js");

var _slot = __webpack_require__(/*! ./slot */ "./packages/render/dist/slot.js");

var _statement = __webpack_require__(/*! ./statement */ "./packages/render/dist/statement.js");

var _h = __webpack_require__(/*! ./h */ "./packages/render/dist/h.js");

function render(component, layout, timeBenchmark, callback) {
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

/***/ "./packages/render/dist/map/diff.js":
/*!******************************************!*\
  !*** ./packages/render/dist/map/diff.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diff = diff;

function diff(parent, a, b, keyExpr, get, before) {
  var aIdx = new Map();
  var bIdx = new Map();
  var i;
  var j; // Create a mapping from keys to their position in the old list

  for (i = 0; i < a.length; i++) {
    var key = keyExpr(a[i], i);
    aIdx.set(key, i);
  } // Create a mapping from keys to their position in the new list


  for (i = 0; i < b.length; i++) {
    var _key = keyExpr(b[i], i);

    bIdx.set(_key, i);
  } // console.warn(aIdx, bIdx);


  for (i = j = 0; i !== a.length || j !== b.length;) {
    var aElm = a[i],
        bElm = b[j];

    if (aElm === null) {
      // This is a element that has been moved to earlier in the list
      i++;
    } else if (b.length <= j) {
      // No more elements in new, this is a delete
      parent.removeChild(get(a[i], i, -1));
      i++;
    } else if (a.length <= i) {
      // No more elements in old, this is an addition
      parent.insertBefore(get(bElm, j, 1), get(a[i], i, 0) || before);
      j++;
    } else if (aElm === bElm) {
      // No difference, we move on
      i++;
      j++;
    } else {
      // Look for the current element at this location in the new list
      // This gives us the idx of where this element should be
      var curElmInNew = bIdx.get(aElm); // Look for the the wanted elment at this location in the old list
      // This gives us the idx of where the wanted element is now

      var wantedElmInOld = aIdx.get(bElm);

      if (curElmInNew === undefined) {
        // Current element is not in new list, it has been removed
        parent.removeChild(get(a[i], i, -1));
        i++;
      } else if (wantedElmInOld === undefined) {
        // New element is not in old list, it has been added
        parent.insertBefore(get(bElm, j, 1), get(a[i], i, 0) || before);
        j++;
      } else {
        // Element is in both lists, it has been moved
        // console.log('move', a[i], 'from', wantedElmInOld, 'to', i)
        parent.insertBefore(get(a[wantedElmInOld], wantedElmInOld, 1), get(a[i], 0) || before);
        a[wantedElmInOld] = null;
        if (wantedElmInOld > i + 1) i++;
        j++;
      }
    }
  }

  return b;
}

/***/ }),

/***/ "./packages/render/dist/map/index.js":
/*!*******************************************!*\
  !*** ./packages/render/dist/map/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _sinuous = __webpack_require__(/*! sinuous */ "./packages/render/node_modules/sinuous/module/sinuous.js");

var _diff = __webpack_require__(/*! ./diff.js */ "./packages/render/dist/map/diff.js");
/**
 * Map over a list of unique items that create DOM nodes.
 *
 * No duplicates in the list of items is a hard requirement, the diffing
 * algorithm will not work with duplicate values. See `./unique.js`.
 *
 * @param  {Function} items - Function or observable that creates a list.
 * @param  {Function} expr
 * @param {boolean} [cleaning]
 * @return {DocumentFragment}
 */


function map(context, items, keyExpr, expr, beforeInit, parent) {
  if (beforeInit === void 0) {
    beforeInit = null;
  }

  if (parent === void 0) {
    parent = null;
  }

  var root = _sinuous.api.root,
      subscribe = _sinuous.api.subscribe,
      sample = _sinuous.api.sample,
      cleanup = _sinuous.api.cleanup; // Disable cleaning for templates by default.

  var cleaning = true; //!expr.$t;

  if (parent === null) {
    parent = _sinuous.api.h([]);
  }

  var endMark = _sinuous.api.add(parent, '');

  var disposers = new Map();
  var nodes = new Map();
  var toRemove = new Set();
  var defaultA = [];

  if (beforeInit) {
    beforeInit(function (item, key, n) {
      defaultA[key] = item;
      node(item, key, 1, n);
    });
  }

  var unsubscribe = subscribe(function (a) {
    var b = items();
    return sample(function () {
      toRemove.clear(); // Array.from to make a copy of the current list.

      var content = Array.from((0, _diff.diff)(endMark.parentNode, a || defaultA, b, keyExpr, node, endMark)); // for (var i = 0; i < context._children.length; i++) {
      // 	console.log(i, context._children[i].hid, context._children[i]._state.s1(), context._children[i]._props.pt)
      // }

      toRemove.forEach(dispose);
      return content;
    });
  });
  cleanup(unsubscribe);
  cleanup(disposeAll);

  function node(item, key, i, el) {
    if (el === void 0) {
      el = null;
    }

    if (item == null) return;
    var nodeKey = keyExpr(item, key);
    var n = nodes.get(nodeKey);

    if (i === 1) {
      toRemove.delete(item);

      if (!n) {
        n = cleaning ? root(function (dispose) {
          disposers.set(nodeKey, dispose);
          return el ? el : expr(item, key);
        }) : el ? el : expr(item, key);
        if (n.nodeType === 11) n = n.firstChild;
        nodes.set(nodeKey, n); // console.warn(`[create (${nodeKey})]`, n);

        if (n.$s) {
          n.$s.hook('mounted');
        } // context._children[key].hook('mounted');

      }
    } else if (i === -1) {
      // console.warn(`[remove (${nodeKey})]`, n, n.parentNode);
      if (n.$s) {
        n.$s.hook('unmounted');
      }

      toRemove.add(nodeKey); // context.removeChild(key);
    }

    return n;
  }

  function disposeAll() {
    disposers.forEach(function (d) {
      return d();
    });
    disposers.clear();
    nodes.clear();
    toRemove.clear();
  }

  function dispose(item) {
    var disposer = disposers.get(item);

    if (disposer) {
      disposer();
      disposers.delete(item);
    }

    nodes.delete(item);
  }

  return parent;
}

/***/ }),

/***/ "./packages/render/dist/slot.js":
/*!**************************************!*\
  !*** ./packages/render/dist/slot.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slot = slot;

function slot(context, h, name, tag, options, defaultChildren) {
  // context.__slots
  var children = defaultChildren;

  if (context._slots[name]) {
    children = context._slots[name];
  }

  if (tag === null) {
    return children;
  } // h.bind(null)


  var render = h(tag, options, children); // for (var i = 0; i < render.childNodes.length; i++) {
  // 	console.log(render.childNodes[i], render.childNodes[i].$s);
  // }

  return render;
}

/***/ }),

/***/ "./packages/render/dist/statement.js":
/*!*******************************************!*\
  !*** ./packages/render/dist/statement.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statement = statement;

var _component = __webpack_require__(/*! @siph/component */ "./packages/component/dist/index.js");

function statement() {
  var _arguments = arguments;

  var d = function d() {
    if (_arguments.length % 3 !== 0) {
      throw new Error('Statement should be odd number');
    }

    var result = [];
    var foundCondition = false; // value

    var childIndex = 0;

    for (var i = 0; i < _arguments.length; i += 3) {
      var condition = _arguments[i];
      var size = _arguments[i + 1];
      var value = _arguments[i + 2];
      var node = null;
      condition = typeof condition === 'function' ? condition() : condition;

      if (condition && !foundCondition) {
        foundCondition = true;
        node = value;
      } // console.warn(condition, size, value, node);
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

/***/ "./pages/index.sin":
/*!*************************!*\
  !*** ./pages/index.sin ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_sin_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.sin?type=script */ "./pages/index.sin?type=script");
/* harmony import */ var _siph_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @siph/component */ "./packages/component/dist/index.js");
/* harmony import */ var _siph_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_siph_component__WEBPACK_IMPORTED_MODULE_1__);

		
	
		

		let config = Object.assign({
			methods: {},
		}, _index_sin_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

		let instance = function PagesIndex() {
			_siph_component__WEBPACK_IMPORTED_MODULE_1__["Basic"].call(this);
		};
		
		// inherit Basic
		instance.prototype = Object.create(_siph_component__WEBPACK_IMPORTED_MODULE_1__["Basic"].prototype);

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
		
		instance.prototype.__props = {};
		for(let key in config.props) {
			instance.prototype.__props[key] = config.props[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop }) {
				return h(
  "div",
  [ctx.options, {}],
  [
    loop(
      ctx,
      ctx._state.items,
      (item, key) => {
        return item;
      },
      (item, key) => {
        return h(
          "sbutton",
          {
            staticStyle: {
              "font-weight": "bold",
            },
            class: ctx._state.s1,
            style: { fontStyle: "italic" },
            props: {
              pt: item,
              prop1: "test--",
            },
            key: item,
            $slots: {
              default: [
                () => {
                  return `Button ${item}`;
                },
              ],
            },
          },
          [
            () => {
              return `Button ${item}`;
            },
          ]
        );
      }
    ),
  ]
);
;
			}
		
			instance.prototype.__hydrate = function(h) {
				let ctx = this;
				return {
  _t: "h",
  t: "div",
  o: [ctx.options, {}],
  c: [
    {
      _t: "loop",
      c: ctx._state.items,
      k: (item, key) => {
        return item;
      },
      h: (item, key) => {
        return {
          _t: "h",
          t: "sbutton",
          o: {
            class: ctx._state.s1,
            style: { fontStyle: "italic" },
            $slots: {
              default: [
                {
                  _t: "t",
                  t: -1,
                },
              ],
            },
            _s: true,
          },
          c: [],
        };
      },
      r: (h, item, key) => {
        return h(
          "sbutton",
          {
            staticStyle: {
              "font-weight": "bold",
            },
            class: ctx._state.s1,
            style: { fontStyle: "italic" },
            props: {
              pt: item,
              prop1: "test--",
            },
            key: item,
            $slots: {
              default: [
                {
                  _t: "t",
                  t: -1,
                },
              ],
            },
          },
          [
            () => {
              return `Button ${item}`;
            },
          ]
        );
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
  props: {},

  data() {
    return {
      timer: null
    };
  },

  state(o) {
    return {
      items: o(Array.from({
        length: 10
      }, (_, i) => i)),
      items2: o(['a_', 'b_']),
      s1: o(2)
    };
  },

  computed(o) {
    return {};
  },

  methods: {
    mounted: function () {
      // let d = [];
      // for (var i = 0; i < 1000; i++) {
      // 	d.push(i);
      // }
      // items = d;
      this._data.timer = setInterval(() => {
        this._state.s1(this._state.s1() + 1);
      }, 2000); // setTimeout(() => {
      // 	console.log('change')
      // 	items = ['a', 'c', 'd']
      // }, 1000)
      // setTimeout(() => {
      // 	console.log('change')
      // 	items = ['a', 'e', 'd', 'b', 'c']
      // }, 3000)
    },
    unmounted: function () {
      clearInterval(this._data.timer);
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


var _i = _interopRequireDefault(__webpack_require__(/*! @siph/i */ "./packages/i/dist/index.js"));

var _hydration = __webpack_require__(/*! @siph/hydration */ "./packages/hydration/dist/index.js");

var _render = __webpack_require__(/*! @siph/render */ "./packages/render/dist/index.js");

var _sbutton = _interopRequireDefault(__webpack_require__(/*! ../components/sbutton.sin */ "./components/sbutton.sin"));

var _index = _interopRequireDefault(__webpack_require__(/*! ../pages/index.sin */ "./pages/index.sin"));

var _time = _interopRequireDefault(__webpack_require__(/*! ./time */ "./src/time.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { api } from 'sinuous';
// import { observable } from '@siph/component/src/observable';
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
  (0, _render.render)(_index.default, LAYOUT, _time.default, function (c) {
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
  LAYOUT = document.getElementById('layout'); // let d = observable(1);
  // api.subscribe(() => {
  // 	console.log('[sb]', d());
  // })
  // d(2);
  // return;
  // TEST_HYDRATE();
  // return;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uLnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NidXR0b24uc2luP2NlNzkiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYmFzaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9keW5hbWljLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uLi9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvaC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21hcC9kaWZmLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4iLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguc2luPzQzZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci10ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aW1lLmpzIl0sIm5hbWVzIjpbIl8iLCJISUQiLCJCYXNpYyIsIm9ic2VydmFibGUiLCJkZWZhdWx0IiwiY29tcHV0ZWQiLCJuYW1lIiwiY2hpbGRyZW4iLCJjaGlsZCIsInBhcmVudCIsInByb3BzIiwidmFsdWUiLCJ0eXBlIiwiaSIsImN0eCIsImgiLCJzdGF0ZW1lbnQiLCJsb29wIiwic2xvdCIsIlNpbnVvdXMiLCJlbCIsInRhZyIsImZuIiwiYmluZGluZyIsImQiLCJ2IiwibWFrZU9ic2VlcnZhYmxlIiwic3RyIiwiYXJndW1lbnRzIiwiZHluYW1pYyIsIkFycmF5IiwiYXJnVG9TdHJpbmciLCJ5Iiwib2JqIiwicmVhZHlTdHlsZXMiLCJtYWtlU3R5bGVQcm9wIiwiY2xvbmVPcHRpb25zIiwib3B0aW9ucyIsInJlYWR5T3B0aW9ucyIsImNsYXNzZXMiLCJzdHlsZXMiLCJzaG91bGRDbG9uZSIsInJlYWR5T3B0aW9uIiwib3B0aW9uIiwibWFrZUNzcyIsIkFzc2lnbk9iamVjdE9wdGlvbnMiLCJBc3NpZ25WYWx1ZU9wdGlvbnMiLCJzaG91bGRCZU1lcmdlZCIsImtleXMiLCJPYmplY3QiLCJqIiwibWVyZ2VPcHRpb25zIiwibWFrZU9wdGlvbiIsIlNUT1JBR0UiLCJoeWRyYXRlIiwibm9kZSIsInN0YXJ0SW5kZXgiLCJzdGF0ZW1lbnRBcmdzIiwiYXJncyIsIk5vZGUiLCJkb2N1bWVudCIsImFwaSIsImN1cnJlbnRJbmRleCIsImZvdW5kQ29uZGl0aW9uIiwiY29uZGl0aW9uIiwic2l6ZSIsImNvbXBvbmVudCIsImN1cnJlbnROb2RlIiwibmV3Tm9kZSIsIm1hcmtBc1JlYWR5IiwiaGlkZU5vZGVzIiwicGFyZW50Tm9kZSIsInBhcmVudENoaWxkcmVuIiwiaXRlbXMiLCJpdGVtIiwiaXRlbUtleSIsInJlZ2lzdGVySHlkcmF0aW9uIiwicGF0aCIsIm9wdHMiLCJiaW5kZWROb2RlcyIsInNsb3REYXRhIiwiY29udGV4dCIsImdldFNsb3ROb2RlIiwiZGF0YSIsImNoaWxkcmVuU2xvdHMiLCJzbG90cyIsInN0YXJ0Tm9kZUluZGV4IiwiY29uc29sZSIsImh5ZHJhdGVIIiwibmV3QXJncyIsIl9zbG90cyIsIiRzbG90cyIsImh5ZHJhdGVTbG90cyIsImh5ZHJhdGVJZGxlIiwiaHlkcmF0ZVRhZyIsImh5ZHJhdGVUZXh0IiwiaHlkcmF0ZUxvb3AiLCJoeWRyYXRlU3RhdGVtZW50IiwidGltZUJlbmNobWFyayIsImNhbGxiYWNrIiwidHJlZSIsImh5ZHJhdGlvblJvb3QiLCJoeWRyYXRpb24iLCJpbnN0YW5jZSIsInN1YnNjcmliZXJzIiwic3Vic2NyaWJlcnNfZmlyc3QiLCJza2lwIiwiY3NzT3B0aW9ucyIsImFkZFN1YnNjcmliZXIiLCJoYW5kbGVFdmVudCIsImUiLCJTaW51b3VzQ29tcG9uZW50cyIsImNyZWF0ZUhJRCIsImNsZWFySElEIiwicmVnaXN0ZXJDb21wb25lbnQiLCJoYXNDb21wb25lbnQiLCJnZXRIeWRyYXRlQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50SW5zdGFuY2UiLCJnZXRDb21wb25lbnQiLCJnZXRJbnN0YW5jZSIsIm1vZHVsZSIsImR5bmFtaWNBdHRycyIsImxheW91dCIsImFJZHgiLCJiSWR4IiwiYSIsImtleSIsImtleUV4cHIiLCJiIiwiYUVsbSIsImJFbG0iLCJnZXQiLCJjdXJFbG1Jbk5ldyIsIndhbnRlZEVsbUluT2xkIiwiYmVmb3JlSW5pdCIsInJvb3QiLCJzdWJzY3JpYmUiLCJzYW1wbGUiLCJjbGVhbnVwIiwiY2xlYW5pbmciLCJlbmRNYXJrIiwiZGlzcG9zZXJzIiwibm9kZXMiLCJ0b1JlbW92ZSIsImRlZmF1bHRBIiwidW5zdWJzY3JpYmUiLCJjb250ZW50Iiwibm9kZUtleSIsIm4iLCJleHByIiwiZGlzcG9zZXIiLCJyZW5kZXIiLCJyZXN1bHQiLCJjaGlsZEluZGV4IiwiTEFZT1VUIiwiUGFnZUluZGV4IiwiUGFnZUluZGV4MiIsIlRFU1RfV0VCUEFDS19CVUlMRCIsImJ1dHRvbiIsIlRFU1RfUkVOREVSIiwiSW5kZXhQYWdlIiwiYyIsIkNMRUFSX0hPT0tTIiwiaHRtbCIsImlubmVySFRNTCIsImhvb2siLCJURVNUX0hZRFJBVEUiLCJsb2FkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRUaW1lb3V0IiwidGltZXMiLCJ0aW1lIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QXpDLEVBQWlELElBQWpEO0FBRUEsU0FBT29LLEtBQUssQ0FBQ3BLLElBQUQsQ0FBWjtBQUNBLEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcblx0XHRpbXBvcnQgY29tcG9uZW50Q29uZmlnIGZyb20gXCIuL3NidXR0b24uc2luP3R5cGU9c2NyaXB0XCI7XG5cdFxuXHRcdGltcG9ydCB7IEJhc2ljIH0gZnJvbSAnQHNpcGgvY29tcG9uZW50JztcblxuXHRcdGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdG1ldGhvZHM6IHt9LFxuXHRcdH0sIGNvbXBvbmVudENvbmZpZyk7XG5cblx0XHRsZXQgaW5zdGFuY2UgPSBmdW5jdGlvbiBTYnV0dG9uKCkge1xuXHRcdFx0QmFzaWMuY2FsbCh0aGlzKTtcblx0XHR9O1xuXHRcdFxuXHRcdC8vIGluaGVyaXQgQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2ljLnByb3RvdHlwZSk7XG5cblx0XHQvLyBjb3JyZWN0IHRoZSBjb25zdHJ1Y3RvciBwb2ludGVyIGJlY2F1c2UgaXQgcG9pbnRzIHRvIEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gaW5zdGFuY2U7XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzID0ge307XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9jb21wb25lbnROYW1lID0gJ1NidXR0b24nO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2xvdHNEYXRhID0ge1wiZGVmYXVsdFwiOntcInBhdGhcIjpbMCwxXSxcInRhZ1wiOlwiZGl2XCIsXCJpbmRleFwiOjB9fTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSBPYmplY3Qua2V5cyhjb25maWcubWV0aG9kcyk7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9mdW5jdGlvbmFsID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19wcm9wcyA9IHt9O1xuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5wcm9wcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcHJvcHNba2V5XSA9IGNvbmZpZy5wcm9wc1trZXldXG5cdFx0fVxuXHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3JlbmRlciA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFxuICBcImRpdlwiLFxuICBbXG4gICAgY3R4Lm9wdGlvbnMsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIxNXB4XCIsXG4gICAgICB9LFxuICAgICAgY2xhc3M6IFwibmV3LWJ1dHRvblwiLFxuICAgICAgc3R5bGU6IFt7IGNvbG9yOiBjdHguX2NvbXB1dGVkLnRlc3RDb2xvciB9XSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBjdHguY2xpY2ssXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICAoKSA9PiB7XG4gICAgICByZXR1cm4gYCR7Y3R4Ll9zdGF0ZS5zMSgpfWA7XG4gICAgfSxcbiAgICBzbG90KFxuICAgICAgY3R4LFxuICAgICAgaCxcbiAgICAgIFwiZGVmYXVsdFwiLFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwic1wiLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHRhZzogXCJkaXZcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBbYERlZmF1bHQgYnV0dG9uIHRleHRgXVxuICAgICksXG4gIF1cbik7XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19oeWRyYXRlID0gZnVuY3Rpb24oaCkge1xuXHRcdFx0XHRsZXQgY3R4ID0gdGhpcztcblx0XHRcdFx0cmV0dXJuIHtcbiAgX3Q6IFwiaFwiLFxuICB0OiBcImRpdlwiLFxuICBvOiBbXG4gICAgY3R4Lm9wdGlvbnMsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICBjbGFzczogXCJuZXctYnV0dG9uXCIsXG4gICAgICBzdHlsZTogW3sgY29sb3I6IGN0eC5fY29tcHV0ZWQudGVzdENvbG9yIH1dLFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGN0eC5jbGljayxcbiAgICAgIH0sXG4gICAgICBfczogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBjOiBbXG4gICAge1xuICAgICAgX3Q6IFwidFwiLFxuICAgICAgdDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7Y3R4Ll9zdGF0ZS5zMSgpfWA7XG4gICAgICB9LFxuICAgIH0sXG4gICAgLTEsXG4gIF0sXG59O1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdGV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuXHQiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgcHJvcDE6IHtcbiAgICAgIHR5cGU6IFwiTnVtYmVyXCIsXG4gICAgICBkZWZhdWx0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiA5O1xuICAgICAgfVxuICAgIH0sXG4gICAgcHQ6IHtcbiAgICAgIHR5cGU6IFwiTnVtYmVyXCIsXG4gICAgICBkZWZhdWx0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiA5O1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aW1lcjogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgc3RhdGUobykge1xuICAgIHJldHVybiB7XG4gICAgICBzMTogbyh0aGlzLnJhbmRvbSgxLCAxMDApKVxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQobykge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXN0Q29sb3I6IG8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGUuczEoKSAlIDIgPT09IDAgPyAncmVkJyA6ICdncmVlbic7XG4gICAgICB9KSxcbiAgICAgIHRlc3RDbGFzczogbygoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVkOiB0aGlzLl9zdGF0ZS5zMSgpICUgMiA9PT0gMFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICByYW5kb206IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZSkgKyBzO1xuICAgIH0sXG4gICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFsZXJ0KHRoaXMuX3N0YXRlLnMxKCkpO1xuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpcmVjdGlvbiA9IDE7IC8vIGNvbnNvbGUubG9nKCdjcmVhdGVkJywgdGhpcy5oaWQsICd3aXRoIHMxID0nLCBzMSk7XG5cbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5fc3RhdGUuczEodGhpcy5fc3RhdGUuczEoKSArIDEpOyAvL01hdGgucmFuZG9tKDAsIDEwMClcbiAgICAgIH0sIDIwMDApOyAvLyB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIC8vIFx0Ly8gY29uc29sZS5sb2coJ2ludGVydmFsJywgdGhpcy5oaWQpO1xuICAgICAgLy8gXHRpZihzMSA+IDQwKSB7XG4gICAgICAvLyBcdFx0ZGlyZWN0aW9uID0gLTU7XG4gICAgICAvLyBcdH0gZWxzZSBpZihzMSA8IDEwKSB7XG4gICAgICAvLyBcdFx0ZGlyZWN0aW9uID0gNTtcbiAgICAgIC8vIFx0fVxuICAgICAgLy8gXHRzMSArPSBkaXJlY3Rpb25cbiAgICAgIC8vIH0sIDEwMDApXG4gICAgfSxcbiAgICB1bm1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd1bm1vdW50ZWQnLCB0aGlzLmhpZCk7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2RhdGEudGltZXIpO1xuICAgIH1cbiAgfVxufTsiLCJleHBvcnQgY29uc3QgXyA9IC0xO1xuIiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpcGgvaSc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnQHNpcGgvY29tcGlsZXIvc3JjL2VtcHR5JztcblxuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQgfSBmcm9tICcuL29ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBzdGF0ZW1lbnQsIGxvb3AsIHNsb3QsIGggfSBmcm9tICdAc2lwaC9yZW5kZXInO1xuXG4vLyBpbXBvcnQgeyByZW5kZXIsIGh5ZHJhdGUgfSBmcm9tICcuL3RlbXBsYXRlJztcbmxldCBISUQgPSAwO1xuXG5cbnZhciBCYXNpYyA9IGZ1bmN0aW9uICgpIHtcblxuXHRmdW5jdGlvbiBCYXNpYygpXG5cdHtcblx0XHR0aGlzLl9pc0NvbXBvbmVudCA9IHRydWU7XG5cdFx0dGhpcy5oaWQgPSArK0hJRDtcblx0XHR0aGlzLiRlbCA9IG51bGw7XG5cblx0XHR0aGlzLl9wcm9wcyA9IHt9O1xuXG5cdFx0Ly8gTG9jYWwgZGF0YVxuXHRcdHRoaXMuX2RhdGEgPSB0aGlzLmRhdGEoKTtcblx0XHQvLyBTdGF0ZWZ1bCBkYXRhXG5cdFx0dGhpcy5fc3RhdGUgPSB0aGlzLnN0YXRlKG9ic2VydmFibGUpO1xuXHRcdC8vIHNsb3RzXG5cdFx0dGhpcy5fc2xvdHMgPSB7XG5cdFx0XHRkZWZhdWx0OiBbXSxcblx0XHR9O1xuXHRcdC8vIGhvb2tzXG5cdFx0dGhpcy5faG9va3MgPSBbXTtcblxuXHRcdHRoaXMuX2NvbXB1dGVkID0gdGhpcy5jb21wdXRlZChjb21wdXRlZCk7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBbXTtcblx0XHR0aGlzLl9lbF9pbmRleCA9IDA7XG5cdFx0dGhpcy5vcHRpb25zID0gbnVsbDtcblxuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cblx0XHQvLyBEZWZhdWx0IHByb3AgdmFsdWVzIFxuXHRcdC8vIHRoaXMuaW5pdFByb3BzKCk7XG5cblx0XHQvLyB0aGlzLmluaXRUZW1wbGF0ZSgpO1xuXG5cdFx0dGhpcy5zZXRDaGlsZHJlbigpO1xuXHRcdHRoaXMuc2V0UGFyZW50KCk7XG5cblx0XHR0aGlzLmJpbmRDb250ZXh0KCk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5iaW5kQ29udGV4dCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX2NvbXB1dGVkKSB7XG5cdFx0XHR0aGlzLl9jb21wdXRlZFtrZXldID0gdGhpcy5fY29tcHV0ZWRba2V5XS5iaW5kKHRoaXMpO1xuXHRcdH1cblxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX21ldGhvZHMpIHtcblx0XHRcdGxldCBuYW1lID0gdGhpcy5fbWV0aG9kc1trZXldO1xuXHRcdFx0dGhpc1tuYW1lXSA9IHRoaXNbbmFtZV0uYmluZCh0aGlzKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIENvbmZpZ1xuXHQgKi9cblxuXHQvLyBCYXNpYy5wcm90b3R5cGUuc2V0TWV0aG9kcyA9IGZ1bmN0aW9uKG1ldGhvZHMgPSB7fSlcblx0Ly8ge1xuXHQvLyBcdHRoaXMuX21ldGhvZHMgPSBtZXRob2RzO1xuXHQvLyB9XG5cblx0LyoqXG5cdCAqIEhpZXJhcmNoeVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuc2V0Q2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZHJlbiA9IFtdKVxuXHR7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmFkZENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGQpXG5cdHtcblx0XHRpZihjaGlsZC5fZnVuY3Rpb25hbCkge1xuXHRcdFx0Y2hpbGQgPSBfO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGQpO1xuXG5cdFx0aWYoY2hpbGQuc2V0UGFyZW50KSB7XG5cdFx0XHRjaGlsZC5zZXRQYXJlbnQodGhpcyk7XG5cdFx0fVxuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24oaW5kZXgpXG5cdHtcblx0XHR0aGlzLl9jaGlsZHJlbltpbmRleF0uaG9vaygndW5tb3VudGVkJyk7XG5cdFx0dGhpcy5fY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5zZXRQYXJlbnQgPSBmdW5jdGlvbihwYXJlbnQgPSBudWxsKVxuXHR7XG5cdFx0dGhpcy5fcGFyZW50ID0gcGFyZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb3BzXG5cdCAqL1xuXHRCYXNpYy5wcm90b3R5cGUucHJvcHMgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXG5cdC8vIEJhc2ljLnByb3RvdHlwZS5pbml0UHJvcHMgPSBmdW5jdGlvbigpXG5cdC8vIHtcblx0Ly8gXHRmb3IobGV0IGtleSBpbiB0aGlzLl9wcm9wcylcblx0Ly8gXHR7XG5cdC8vIFx0XHRsZXQgcHJvcCA9IHRoaXMuX3Byb3BzW2tleV07XG5cdC8vIFx0XHRsZXQgdmFsdWUgPSBudWxsO1xuXHQvLyBcdFx0bGV0IHR5cGUgPSBudWxsO1xuXG5cdC8vIFx0XHRpZih0eXBlb2YgcHJvcCA9PT0gJ2Z1bmN0aW9uJykge1xuXHQvLyBcdFx0XHQvLyB0eXBlXG5cdC8vIFx0XHR9IGVsc2Uge1xuXHQvLyBcdFx0XHR2YWx1ZSA9IHByb3AuZGVmYXVsdCgpO1xuXHQvLyBcdFx0fVxuXG5cdC8vIFx0XHR0aGlzLl9kYXRhW2tleV0gPSB2YWx1ZTtcblx0Ly8gXHR9XG5cdC8vIH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5wYXNzU2xvdHMgPSBmdW5jdGlvbihuYW1lLCBzbG90cylcblx0e1xuXHRcdHRoaXMuX3Nsb3RzW25hbWVdID0gc2xvdHM7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc09wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKVxuXHR7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5wYXNzUHJvcHMgPSBmdW5jdGlvbihwcm9wcylcblx0e1xuXHRcdGlmKCFwcm9wcykge1xuXHRcdFx0cHJvcHMgPSB7fTtcblx0XHR9XG5cblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9fcHJvcHMpXG5cdFx0e1xuXHRcdFx0bGV0IHZhbHVlID0gdGhpcy5fX3Byb3BzW2tleV0uZGVmYXVsdCgpO1xuXHRcdFx0aWYocHJvcHNba2V5XSkge1xuXHRcdFx0XHR2YWx1ZSA9IHByb3BzW2tleV07XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3Byb3BzW2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBMb2NhbCBjb21wb25lbnQgZGF0YVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmNvbXB1dGVkID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXRlZnVsIGRhdGFcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnN0YXRlID0gZnVuY3Rpb24obylcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiAxLiBDcmVhdGUgY2hpbGQgY29tcG9uZW50cyAoZGlmZmVyZW50IGNvbnRleHQpXG5cdCAqIDIuIFBhc3MgcHJvcHNcblx0ICogMy4gUmVuZGVyXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUuY2hpbGRDb21wb25lbnRzID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiAgTGlmZSBjeWNsZSBob29rc1xuXHQgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLmhvb2sgPSBmdW5jdGlvbih0eXBlID0gJ21vdW50ZWQnKVxuXHR7XG5cdFx0aWYoIXRoaXMuX2hvb2tzLmluY2x1ZGVzKHR5cGUpKSB7XG5cdFx0XHR0aGlzLl9ob29rcy5wdXNoKHR5cGUpO1xuXHRcdH1cblxuXHRcdGlmKHRoaXNbdHlwZV0pIHtcblx0XHRcdHRoaXNbdHlwZV0uY2FsbCh0aGlzKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0aGlzLl9jaGlsZHJlbltpXSA9PT0gXyB8fCB0aGlzLl9jaGlsZHJlbltpXS5faG9va3MuaW5jbHVkZXModHlwZSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKCF0aGlzLl9jaGlsZHJlbltpXS5fZnVuY3Rpb25hbCkge1xuXHRcdFx0XHR0aGlzLl9jaGlsZHJlbltpXS5ob29rKHR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLm1vdW50ZWQgPSBmdW5jdGlvbigpIHt9XG5cblx0QmFzaWMucHJvdG90eXBlLnVubW91bnRlZCA9IGZ1bmN0aW9uKCkge31cblxuXHQvKipcblx0ICogUHJpdmF0ZSBBUEkgZm9yIHJlbmRlciBhbmQgaHlkcmF0ZVxuXHQgKiBAdHlwZSB7W3R5cGVdfVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oY3R4ID0gbnVsbClcblx0e1xuXHRcdGlmKGN0eCA9PT0gbnVsbCkge1xuXHRcdFx0Y3R4ID0gdGhpcztcblx0XHR9XG5cblx0XHRoLmJpbmQoY3R4KTtcblxuXHRcdHRoaXMuJGVsID0gY3R4Ll9fcmVuZGVyKGguYmluZChjdHgpLCB7XG5cdFx0XHRjdHgsXG5cdFx0XHRzdGF0ZW1lbnQsXG5cdFx0XHRsb29wLFxuXHRcdFx0c2xvdCxcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLiRlbDtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmh5ZHJhdGUgPSBmdW5jdGlvbihjdHggPSBudWxsKVxuXHR7XG5cdFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdFx0XHRjdHggPSB0aGlzO1xuXHRcdH1cblxuXHRcdGguYmluZChjdHgpO1xuXG5cdFx0cmV0dXJuIGN0eC5fX2h5ZHJhdGUoaCk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cblx0Ly8gQmFzaWMucHJvdG90eXBlLnRlbXBsYXRlQnVpbGRlciA9IGZ1bmN0aW9uKGgsIG9wdHMpXG5cdC8vIHtcblx0Ly8gXHRyZXR1cm4gdGhpc1tgX18keyBvcHRzLnJlbmRlciB9YF0oaCwgb3B0cyk7XG5cdC8vIH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5jb21wb25lbnQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5nZXRVSUQgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdHJldHVybiBgaHlkci0keyBTaW51b3VzLmNyZWF0ZUhJRChpbmRleCkgfWA7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXyhcIm5hbWVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7IH0pO1xuXG5cdHJldHVybiBCYXNpYztcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzaWM7XG4iLCJpbXBvcnQgeyBoLCBocywgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWMoaCwgdGFnLCBvcHRzLCBjaGlsZHJlbilcbntcblx0cmV0dXJuICgpID0+IHtcblx0XHRsZXQgZWwgPSB0YWcoKTtcblx0XHRyZXR1cm4gaChlbCwgb3B0cywgY2hpbGRyZW4pO1xuXHR9O1xuXG59XG4iLCJpbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnQHNpcGgvbGF6eSc7XG5pbXBvcnQgeyBtYXAgYXMgbG9vcCB9IGZyb20gJy4vbWFwJztcbmltcG9ydCB7IHNsb3QgfSBmcm9tICcuL3Nsb3QnO1xuaW1wb3J0IHsgc3RhdGVtZW50IH0gZnJvbSAnLi9zdGF0ZW1lbnQnO1xuaW1wb3J0IHsgaCB9IGZyb20gJy4vaCc7XG5cbmZ1bmN0aW9uIHJlbmRlcihjb21wb25lbnQsIGxheW91dCwgdGltZUJlbmNobWFyayA9ICgpID0+IHt9LCBjYWxsYmFjayA9IG51bGwpIHtcblxuICAgIGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuICAgIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCAoaW5zdGFuY2UpID0+IHtcblxuICAgIFx0dGltZUJlbmNobWFyaygnUmVuZGVyJyk7XG5cblx0XHRsYXlvdXQuYXBwZW5kKGluc3RhbmNlLnJlbmRlcigpKTtcblx0XHRpbnN0YW5jZS5ob29rKCdtb3VudGVkJyk7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHRpbWVCZW5jaG1hcmsoJ1JlbmRlcicpO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9KTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyLCBsb29wLCBzdGF0ZW1lbnQsIHNsb3QsIGggfTtcbiIsImltcG9ydCB7IG9ic2VydmFibGUgYXMgc2ludW91c09ic2VydmFibGUsIGNvbXB1dGVkIGFzIHNpbnVvdXNDb21wdXRlZCB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlT2JzZWVydmFibGUoZm4pXG57XG5cdGZuLl9vYnNlcnZhYmxlID0gdHJ1ZTtcblx0cmV0dXJuIGZuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQodiwgYmluZGluZyA9IGZhbHNlKSB7XG5cblx0bGV0IGQ7XG5cdFxuXHRpZihiaW5kaW5nKSB7XG5cdFx0ZCA9IHNpbnVvdXNDb21wdXRlZCh2LmJpbmQodGhpcykpO1xuXHR9IGVsc2Uge1xuXHRcdGQgPSBzaW51b3VzQ29tcHV0ZWQodik7XG5cdH1cblxuXHRtYWtlT2JzZWVydmFibGUoZCk7XG5cblx0cmV0dXJuIGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZhYmxlKHYsIGJpbmRpbmcgPSBmYWxzZSlcbntcblx0Ly8gbGV0IG9icyA9IG51bGw7XG5cdC8vIGxldCBpbmRleCA9IDA7XG5cblx0Ly8gbGV0IGRhdGEgPSAodikgPT4ge1xuXHQvLyBcdGNvbnNvbGUubG9nKHNlZWQsIHYsIGluZGV4KVxuXHQvLyBcdGlmKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJykge1xuXHQvLyBcdFx0aWYoaW5kZXggPT09IDApIHtcblx0Ly8gXHRcdFx0aW5kZXgrKztcblx0Ly8gXHRcdFx0cmV0dXJuIHNlZWQ7XG5cdC8vIFx0XHR9XG5cblx0Ly8gXHRcdHJldHVybiBvYnMoKTtcblx0Ly8gXHR9XG5cblx0Ly8gXHQvLyBpZihpbmRleCA9PT0gMCkge1xuXHQvLyBcdC8vIFx0aW5kZXgrKztcblx0Ly8gXHQvLyBcdHJldHVybiB2O1xuXHQvLyBcdC8vIH1cblxuXHQvLyBcdC8vIGlmKG9icyA9PT0gbnVsbCkge1xuXHQvLyBcdC8vIFx0b2JzID0gc2ludW91c09ic2VydmFibGUodik7XG5cdC8vIFx0Ly8gfVxuXHQvLyB9XG5cblx0bGV0IGQgPSBzaW51b3VzT2JzZXJ2YWJsZSh2KTtcblxuXHRcblx0bWFrZU9ic2VlcnZhYmxlKGQpO1xuXG5cdHJldHVybiBkO1xufVxuIiwiZnVuY3Rpb24gYXJnVG9TdHJpbmcoKVxue1xuXHRsZXQgc3RyID0gJyc7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaV07XG5cdFx0XG5cdFx0aWYodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR2YWx1ZSA9IHZhbHVlKCk7XG5cdFx0fVxuXG5cdFx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yKGxldCBrZXkgaW4gdmFsdWUpIHtcblx0XHRcdFx0aWYodmFsdWVba2V5XSkge1xuXHRcdFx0XHRcdHN0ciArPSBgICR7IGtleSB9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHIgKz0gYCAke3ZhbHVlfWA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcmdUb09iamVjdCgpXG57XG5cdGxldCBzdHIgPSAnJztcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuXHRcdFx0bGV0IHZhbHVlID0gYXJndW1lbnRzW2ldW2tleV07XG5cdFx0XHRpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzW2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIFBhcnNlIGNsYXNzZXNcbiAqIEBwYXJhbSAge1t0eXBlXX0gc3RhdGljICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IGR5bmFtaWMgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZnVuY3Rpb24gY2xhc3NlcyhzdHIgPSBudWxsLCBkeW5hbWljID0gbnVsbClcbntcblx0aWYoc3RyID09PSBudWxsICYmIGR5bmFtaWMgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRpZihzdHIgPT09IG51bGwpIHtcblx0XHRzdHIgPSAnJztcblx0fVxuXHRcblx0aWYodHlwZW9mIGR5bmFtaWMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRkeW5hbWljID0gZHluYW1pYygpO1xuXHR9XG5cblx0aWYoIUFycmF5LmlzQXJyYXkoZHluYW1pYykpIHtcblx0XHRkeW5hbWljID0gW2R5bmFtaWNdO1xuXHR9XG5cblx0c3RyICs9IGFyZ1RvU3RyaW5nLmFwcGx5KHRoaXMsIGR5bmFtaWMpO1xuXHRcblx0Ly8gY29uc29sZS5sb2coc3RyKTtcblxuXHRyZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIFN0eWxlc1xuICogQHBhcmFtICB7T2JqZWN0fSBvYmogICAgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1t0eXBlXX0gZHluYW1pYyBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiBtYWtlU3R5bGVQcm9wKG5hbWUpXG57XG5cdHJldHVybiBuYW1lXG5cdFx0LnJlcGxhY2UoL1xcLj8oW0EtWl0rKS9nLCBmdW5jdGlvbiAoeCx5KSB7XG5cdFx0XHRyZXR1cm4gXCItXCIgKyB5LnRvTG93ZXJDYXNlKClcblx0XHR9KVxuXHRcdC5yZXBsYWNlKC9eLS8sIFwiXCIpO1xufVxuXG5mdW5jdGlvbiBzdHlsZXMob2JqID0ge30sIGR5bmFtaWMgPSBudWxsKVxue1xuXHRsZXQgcmVhZHlTdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xuXG5cdGlmKHR5cGVvZiBkeW5hbWljID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0ZHluYW1pYyA9IGR5bmFtaWMoKTtcblx0fVxuXG5cdGlmKCFBcnJheS5pc0FycmF5KGR5bmFtaWMpKSB7XG5cdFx0ZHluYW1pYyA9IFtkeW5hbWljXTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZHluYW1pYy5sZW5ndGg7IGkrKykge1xuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGR5bmFtaWNbaV0pIHtcblx0XHRcdGxldCB2YWx1ZSA9IGR5bmFtaWNbaV1ba2V5XTtcblx0XHRcdFxuXHRcdFx0aWYodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUoKTtcblx0XHRcdH1cblx0XHRcdHJlYWR5U3R5bGVzW21ha2VTdHlsZVByb3Aoa2V5KV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVhZHlTdHlsZXM7XG59XG5cbmxldCBjbG9uZU9wdGlvbnMgPSBbJ19zJywgJyRzbG90cyddO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNzcyhyZWFkeU9wdGlvbnMsIG9wdGlvbnMpXG57XG5cdGlmKG9wdGlvbnMuc3RhdGljQ2xhc3MgfHwgb3B0aW9ucy5jbGFzcykge1xuXHRcdHJlYWR5T3B0aW9ucy5jbGFzcyA9IGNsYXNzZXMuYmluZCh0aGlzLCBvcHRpb25zLnN0YXRpY0NsYXNzIHx8IG51bGwsIG9wdGlvbnMuY2xhc3MgfHwgbnVsbCk7XG5cdH1cblxuXHRpZihvcHRpb25zLnN0YXRpY1N0eWxlIHx8IG9wdGlvbnMuc3R5bGUpIHtcblx0XHRyZWFkeU9wdGlvbnMuc3R5bGUgPSBzdHlsZXMuYmluZCh0aGlzLCBvcHRpb25zLnN0YXRpY1N0eWxlIHx8IHt9LCBvcHRpb25zLnN0eWxlIHx8IG51bGwpO1xuXHR9XG5cblx0cmV0dXJuIHJlYWR5T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VPcHRpb24ob3B0aW9uLCBzaG91bGRDbG9uZSA9IHRydWUpXG57XG5cdGxldCByZWFkeU9wdGlvbiA9IHt9O1xuXG5cdGlmKG9wdGlvbi5vbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Zm9yKGxldCBrZXkgaW4gb3B0aW9uLm9uKSB7XG5cdFx0XHRyZWFkeU9wdGlvbltgb24ke2tleX1gXSA9IG9wdGlvbi5vbltrZXldO1xuXHRcdH1cblx0fVxuXG5cdGlmKG9wdGlvbi5rZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJlYWR5T3B0aW9uWydkYXRhLWtleSddID0gb3B0aW9uLmtleTtcblx0fVxuXG5cdG1ha2VDc3MocmVhZHlPcHRpb24sIG9wdGlvbik7XG5cblx0aWYoc2hvdWxkQ2xvbmUpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNsb25lT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IG5hbWUgPSBjbG9uZU9wdGlvbnNbaV07XG5cdFx0XHRpZihvcHRpb25bbmFtZV0pIHtcblx0XHRcdFx0cmVhZHlPcHRpb25bbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZWFkeU9wdGlvbjtcbn1cblxuY29uc3QgQXNzaWduT2JqZWN0T3B0aW9ucyA9IFsnc3RhdGljU3R5bGUnLCAnYXR0cnMnLCAnb24nXTtcbmNvbnN0IEFzc2lnblZhbHVlT3B0aW9ucyA9IFsnc3R5bGUnLCAnY2xhc3MnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhvcHRpb25zKVxue1xuXHRsZXQgcmVhZHlPcHRpb25zID0ge307XG5cdGxldCBzaG91bGRCZU1lcmdlZCA9IGZhbHNlO1xuXG5cdGlmKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFxuXHRcdFx0aWYob3B0aW9uc1tpXSA9PT0gbnVsbCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0bGV0IGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zW2ldKTtcblxuXHRcdFx0aWYoa2V5cy5sZW5ndGggPT09IDEgJiYga2V5cy5pbmNsdWRlcygnJHNsb3RzJykpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGkgPiAwKSB7XG5cdFx0XHRcdHNob3VsZEJlTWVyZ2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0aWYoIXNob3VsZEJlTWVyZ2VkKSB7XG5cdFx0XHRyZXR1cm4gb3B0aW9uc1sxXTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG9wdGlvbnM7XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgb3B0aW9uID0gb3B0aW9uc1tpXVxuXHRcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IEFzc2lnbk9iamVjdE9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGxldCBuYW1lID0gQXNzaWduT2JqZWN0T3B0aW9uc1tqXTtcblx0XHRcdFxuXHRcdFx0aWYoIW9wdGlvbltuYW1lXSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIXJlYWR5T3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV0gPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGxldCBwcm9wIGluIG9wdGlvbltuYW1lXSkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV1bcHJvcF0gPSBvcHRpb25bbmFtZV1bcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBBc3NpZ25WYWx1ZU9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGxldCBuYW1lID0gQXNzaWduVmFsdWVPcHRpb25zW2pdO1xuXG5cdFx0XHRpZighb3B0aW9uW25hbWVdKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighcmVhZHlPcHRpb25zW25hbWVdKSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9uc1tuYW1lXSA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV0gPSByZWFkeU9wdGlvbnNbbmFtZV0uY29uY2F0KG9wdGlvbltuYW1lXSk7XG5cdFx0fVxuXG5cdFx0aWYob3B0aW9uLl9zICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJlYWR5T3B0aW9ucy5fcyA9IG9wdGlvbi5fcztcblx0XHR9XG5cblx0XHRpZihvcHRpb24ua2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJlYWR5T3B0aW9ucy5rZXkgPSBvcHRpb24ua2V5O1xuXHRcdH1cblxuXHRcdGlmKG9wdGlvbi5zdGF0aWNDbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpZihyZWFkeU9wdGlvbnMuc3RhdGljQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnMuc3RhdGljQ2xhc3MgPSBvcHRpb24uc3RhdGljQ2xhc3M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnMuc3RhdGljQ2xhc3MgKz0gJyAnICsgb3B0aW9uLnN0YXRpY0NsYXNzO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIGNvbnNvbGUud2FybihyZWFkeU9wdGlvbnMpXG5cblx0cmV0dXJuIHJlYWR5T3B0aW9ucztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3B0aW9ucyhvcHRpb25zLCBzaG91bGRDbG9uZSA9IHRydWUpXG57XG5cdGxldCByZWFkeU9wdGlvbnMgPSBtZXJnZU9wdGlvbnMob3B0aW9ucyk7XG5cblx0cmV0dXJuIG1ha2VPcHRpb24ocmVhZHlPcHRpb25zLCBzaG91bGRDbG9uZSk7XG59XG4iLCJpbXBvcnQgeyBhcGkgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IF8gfSBmcm9tICdAc2lwaC9jb21waWxlci9zcmMvZW1wdHknO1xuaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpcGgvaSc7XG5pbXBvcnQgeyBvcHRpb25zIGFzIHBhcnNlT3B0aW9ucywgaCB9IGZyb20gJ0BzaXBoL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnQHNpcGgvbGF6eSc7XG5pbXBvcnQgeyBsb29wIH0gZnJvbSAnQHNpcGgvcmVuZGVyJztcbmltcG9ydCBoeWRyYXRlUHJvcHMgZnJvbSAnLi9wcm9wZXJ0eSc7XG5cbmxldCBPQlNFUlZFUjtcbmxldCBTVE9SQUdFID0ge307XG5cbmZ1bmN0aW9uIGh5ZHJhdGVIKGNvbnRleHQsIGVsLCBvcHRpb25zLCBjaGlsZHJlbilcbntcblx0aHlkcmF0ZVByb3BzKGNvbnRleHQsIGVsLCBvcHRpb25zKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0aHlkcmF0ZShjb250ZXh0LCBlbC5jaGlsZE5vZGVzW2ldLCBjaGlsZHJlbltpXSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVN0YXRlbWVudChjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRsZXQgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXHRsZXQgc3RhcnRJbmRleCA9IDA7XG5cblx0d2hpbGUoKG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZykgIT0gbnVsbClcblx0XHRzdGFydEluZGV4Kys7XG5cdFxuXHRsZXQgc3RhdGVtZW50QXJncyA9IGFyZ3MuYTtcblxuXHRmdW5jdGlvbiBoaWRlTm9kZXMoY2hpbGRyZW4sIHN0YXJ0SW5kZXgsIGxlbmd0aClcblx0e1xuXHRcdGZvciAodmFyIGogPSBzdGFydEluZGV4OyBqIDw9IGxlbmd0aDsgaisrKSB7XG5cdFx0XHRsZXQgbm9kZSA9IGNoaWxkcmVuW2pdO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2hpZGUnLCBqLCBub2RlKTtcblx0XHRcdGlmKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuQ09NTUVOVF9OT0RFKSB7XG5cdFx0XHRcdG5vZGUucmVwbGFjZVdpdGgoZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJykpO1xuXHRcdFx0fVxuXG5cdFx0XHRub2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0fVxuXHR9XG5cblx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0bGV0IGN1cnJlbnRJbmRleCA9IHN0YXJ0SW5kZXg7XG5cdFx0bGV0IGZvdW5kQ29uZGl0aW9uID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdGF0ZW1lbnRBcmdzLmxlbmd0aDsgaSs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBzdGF0ZW1lbnRBcmdzW2ldO1xuXHRcdFx0bGV0IHNpemUgPSBzdGF0ZW1lbnRBcmdzW2kgKyAxXTtcblx0XHRcdGxldCBjb21wb25lbnQgPSBzdGF0ZW1lbnRBcmdzW2kgKyAyXTtcblxuXHRcdFx0bGV0IGN1cnJlbnROb2RlID0gcGFyZW50LmNoaWxkTm9kZXNbY3VycmVudEluZGV4XTtcblxuXHRcdFx0Y29uZGl0aW9uID0gdHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmRpdGlvbigpIDogY29uZGl0aW9uO1xuXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhjdXJyZW50Tm9kZSwgY29uZGl0aW9uICYmICFmb3VuZENvbmRpdGlvbik7XG5cdFx0XHRpZihjb25kaXRpb24gJiYgIWZvdW5kQ29uZGl0aW9uKSB7XG5cdFx0XHRcdGZvdW5kQ29uZGl0aW9uID0gdHJ1ZTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3Nob3cnLCBwYXJlbnQuY2hpbGROb2Rlc1tjdXJyZW50SW5kZXhdLCBzaXplKTtcblx0XHRcdFx0aWYoY3VycmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuQ09NTUVOVF9OT0RFKSB7XG5cdFx0XHRcdFx0Ly8gIHJlbmRlclxuXHRcdFx0XHRcdGxldCBuZXdOb2RlID0gY29tcG9uZW50LnIoaC5iaW5kKGNvbnRleHQpKTtcblx0XHRcdFx0XHRjdXJyZW50Tm9kZS5yZXBsYWNlV2l0aChuZXdOb2RlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBoeWRyYXRlXG5cdFx0XHRcdFx0bWFya0FzUmVhZHkoY3VycmVudE5vZGUpO1xuXHRcdFx0XHRcdGh5ZHJhdGUoY29udGV4dCwgY3VycmVudE5vZGUsIGNvbXBvbmVudC5oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1toaWRlXScsIHBhcmVudC5jaGlsZE5vZGVzLCBjdXJyZW50SW5kZXgsIHNpemUpO1xuXHRcdFx0XHRoaWRlTm9kZXMocGFyZW50LmNoaWxkTm9kZXMsIGN1cnJlbnRJbmRleCwgc2l6ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRJbmRleCArPSBzaXplO1xuXHRcdFx0Ly8gY29uc29sZS53YXJuKGN1cnJlbnROb2RlLCBjdXJyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcpXG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKGN1cnJlbnROb2RlLCBjb25kaXRpb24sICdza2lwJyk7XG5cblx0XHRcdFxuXHRcdH1cblx0fSk7XG5cdFxufVxuXG5mdW5jdGlvbiBoeWRyYXRlTG9vcChjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRsZXQgY29uZGl0aW9uID0gYXJncy5jO1xuXHRsZXQgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0bGV0IHBhcmVudENoaWxkcmVuID0gcGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xuXG5cdGxvb3AoY29udGV4dCwgYXJncy5jLCBhcmdzLmssIChpdGVtLCBrZXkpID0+IHtcblx0XHRcblx0XHRsZXQgbm9kZSA9IGFyZ3MucihoLmJpbmQoY29udGV4dCksIGl0ZW0sIGtleSk7XG5cblx0XHRyZXR1cm4gbm9kZTtcdFxuXHR9LCAocmVnaXN0ZXJIeWRyYXRpb24pID0+IHtcblx0XHRsZXQgaXRlbXMgPSBhcmdzLmMoKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBub2RlID0gcGFyZW50Q2hpbGRyZW5baV07XG5cdFx0XHRsZXQgaXRlbSA9IGl0ZW1zW2ldO1xuXHRcdFx0bGV0IGl0ZW1LZXkgPSBhcmdzLmsoaXRlbSwgaSk7XG5cblx0XHRcdGlmKG5vZGUpIHtcblx0XHRcdFx0aWYobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JykgPT0gaXRlbUtleSkge1xuXHRcdFx0XHRcdG1hcmtBc1JlYWR5KG5vZGUpO1xuXHRcdFx0XHRcdGh5ZHJhdGUoY29udGV4dCwgbm9kZSwgYXJncy5oKGl0ZW0sIGkpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZWdpc3Rlckh5ZHJhdGlvbihpdGVtLCBpLCBub2RlKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHJlZywgaXRlbSwgaSwgbm9kZSk7XG5cdFx0fVxuXHR9LCBub2RlLnBhcmVudE5vZGUpO1xuXG59XG5cbi8qKlxuICogTWF5YmUgbmVlZCBzYW1lIGh5ZHJhdGlvbiBhbGdvcml0aG0gYXMgd2l0aCBwcm9wc1xuICogU2tpcCBmaXJzdCB0aW1lIGh5ZHJhdGlvbiA/Pz9cbiAqL1xuZnVuY3Rpb24gaHlkcmF0ZVRleHQoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0aWYoYXJncy50ID09PSBfKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdFxuXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRhcGkuaW5zZXJ0KG5vZGUsIGFyZ3MudCgpLCBudWxsKTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gZ2V0U2xvdE5vZGUoZWwsIHRhZywgcGF0aClcbntcblx0bGV0IG5vZGUgPSBlbDtcblxuXHRmb3IgKHZhciBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcblx0XHRub2RlID0gbm9kZS5jaGlsZE5vZGVzW3BhdGhbaV1dO1xuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlU2xvdHMoY29udGV4dCwgZWwsIG9wdHMgPSB7fSwgc2xvdHMpXG57XG5cdC8vIHJldHVybjtcblx0Ly8gSHlkcmF0ZSBwcm9wcyBvZiBtYWluIE5vZGVcblx0Ly8gaHlkcmF0ZVByb3BzKGNvbnRleHQsIGVsLCBvcHRzKTtcblx0XG5cdGxldCBiaW5kZWROb2RlcyA9IHt9XG5cblx0bGV0IHNsb3REYXRhID0gY29udGV4dC5fc2xvdHNEYXRhO1xuXG5cdC8vIEZpbmQgc2xvdCBiaW5kaW5nIG5vZGVzXG5cdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG5cdFx0aWYoc2xvdERhdGFba2V5XSkge1xuXHRcdFx0bGV0IG5vZGUgPSBnZXRTbG90Tm9kZShlbCwgc2xvdERhdGFba2V5XS50YWcsIHNsb3REYXRhW2tleV0ucGF0aCk7XG5cdFx0XHRiaW5kZWROb2Rlc1trZXldID0gbm9kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAke2tleX0gc2xvdCBuYW1lc3BhY2UgZGVmaW5lZGApO1xuXHRcdH1cblx0fVxuXG5cdC8vIEh5ZHJhdGUgc2xvdHMgcGVyIGJpbmRlZCB0YWdcblx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcblx0XHRsZXQgZGF0YSA9IHNsb3REYXRhW2tleV07XG5cdFx0bGV0IG5vZGUgPSBiaW5kZWROb2Rlc1trZXldO1xuXHRcdGxldCBjaGlsZHJlblNsb3RzID0gc2xvdHNba2V5XTtcblx0XHRsZXQgc3RhcnROb2RlSW5kZXggPSBkYXRhLmluZGV4O1xuXG5cdFx0aWYodHlwZW9mIG5vZGUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oZWwsIG9wdHMsIHNsb3REYXRhLCBlbFswXSk7XG5cdFx0fVxuXG5cdFx0aWYoY2hpbGRyZW5TbG90cy5sZW5ndGggPiBub2RlLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTbG90IGh5ZHJhdGlvbiBsZW5ndGggbWlzbWF0Y2gnKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gc3RhcnROb2RlSW5kZXg7IGkgPCBjaGlsZHJlblNsb3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhub2RlLmNoaWxkTm9kZXNbaV0sIGNoaWxkcmVuU2xvdHNbaV0pXG5cdFx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5TbG90c1tpXSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQ29udGV4dCBzZXR1cFxuICovXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdGlmKGNoaWxkLl9mdW5jdGlvbmFsKSB7XG5cdFx0cGFyZW50LmFkZENoaWxkcmVuKF8pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlVGFnKGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGxldCBlbCA9IGFyZ3MudCxcblx0XHRvcHRzID0gYXJncy5vLFxuXHRcdGNoaWxkcmVuID0gYXJncy5jO1xuXG5cdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcblx0XHRoeWRyYXRlSChjb250ZXh0LCBub2RlLCBvcHRzLCBjaGlsZHJlbik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0SHlkcmF0ZUNvbXBvbmVudChlbCwgb3B0cyk7XG5cblx0aWYoY29tcG9uZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHRjb250ZXh0LmFkZENoaWxkcmVuKGNvbXBvbmVudCk7XG5cblx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG5cdFx0bGV0IG5ld0FyZ3MgPSBjb21wb25lbnQuaHlkcmF0ZSh7XG5cdFx0XHRfc2xvdHM6IG9wdHMuJHNsb3RzLFxuXHRcdH0pO1xuXG5cdFx0aWYob3B0cy4kc2xvdHMpIHtcblx0XHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIG5vZGUsIG9wdHMsIG9wdHMuJHNsb3RzKTtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLmxvZyhvcHRzKVxuXHRcdGh5ZHJhdGUoY29udGV4dCwgbm9kZSwgbmV3QXJncyk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHRjb21wb25lbnQucGFzc09wdGlvbnMob3B0cyk7XG5cblx0aWYob3B0cy4kc2xvdHMpIHtcblx0XHRoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBub2RlLCBvcHRzLCBvcHRzLiRzbG90cyk7XG5cdH1cblxuXHRub2RlLiRzID0gY29tcG9uZW50O1xuXHQvLyBjb25zb2xlLmxvZyhjb21wb25lbnQsIG5vZGUpXG5cblx0cmV0dXJuIGh5ZHJhdGUoY29tcG9uZW50LCBub2RlLCBjb21wb25lbnQuaHlkcmF0ZShjb21wb25lbnQpKTtcbn1cblxuLyoqXG4gKiBNYWluIGh5ZHJhdGlvbiBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBoeWRyYXRlKGNvbnRleHQsIG5vZGUsIGFyZ3MgPSBudWxsKVxue1xuXHQvLyByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHtcblx0XHRoeWRyYXRlSWRsZShjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0Ly8gfSwge1xuXHQvLyBcdHRpbWVvdXQ6IDAsXG5cdC8vIFx0cmVhZDogdHJ1ZVxuXHQvLyB9KTtcbn1cblxuZnVuY3Rpb24gbWFya0FzUmVhZHkobm9kZSlcbntcblx0bm9kZS5faHlkcmF0ZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlSWRsZShjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRpZihhcmdzID09PSBudWxsIHx8IG5vZGUgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnaCcpIHtcblx0XHQvLyBhcmdzLm9bJ2RhdGEtaHlkcmF0ZWQnXSA9IHRydWU7XG5cdFx0Ly8gYXJncy5vWydfcyddID0gdHJ1ZTtcblx0XHRoeWRyYXRlVGFnKGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ3QnKSB7XG5cdFx0aHlkcmF0ZVRleHQoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnbG9vcCcpIHtcblx0XHRoeWRyYXRlTG9vcChjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXG5cdGlmKGFyZ3MuX3QgPT09ICdzdGF0ZW1lbnQnKSB7XG5cdFx0aHlkcmF0ZVN0YXRlbWVudChjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXHRcblx0cmV0dXJuIF87XG5cdFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRIeWRyYXRpb24oY29tcG9uZW50LCBoeWRyYXRpb25Sb290LCB0aW1lQmVuY2htYXJrID0gKCkgPT4ge30sIGNhbGxiYWNrID0gbnVsbClcbntcblx0bG9hZENvbXBvbmVudChjb21wb25lbnQsIChpbnN0YW5jZSkgPT4ge1xuXG5cdFx0dGltZUJlbmNobWFyaygnSHlkcmF0aW9uJyk7XG5cblx0XHRsZXQgdHJlZSA9IFtpbnN0YW5jZV07XG5cblx0XHRTaW51b3VzLmNsZWFySElEKCk7XG5cblx0XHQvLyBsZXQgY29ubmVjdGVkTm9kZSA9IGZpbHRlckNoaWxkTm9kZXMoaHlkcmF0aW9uUm9vdCk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjb21wb25lbnQgPSB0cmVlW2ldO1xuXHRcdFx0bGV0IG5vZGUgPSBoeWRyYXRpb25Sb290LmNoaWxkTm9kZXNbaV07XG5cdFx0XHRsZXQgaHlkcmF0aW9uID0gY29tcG9uZW50Lmh5ZHJhdGUoY29tcG9uZW50KTtcblx0XHRcdFxuXHRcdFx0aHlkcmF0ZShjb21wb25lbnQsIG5vZGUsIGh5ZHJhdGlvbik7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGNvbnNvbGUubG9nKGluc3RhbmNlKTtcblx0XHRpbnN0YW5jZS5ob29rKCdtb3VudGVkJyk7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHRpbWVCZW5jaG1hcmsoJ0h5ZHJhdGlvbicpO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9KTtcblxufVxuXG4vKipcbiAqIEZpbHRlciBvdXQgd2hpdGVzcGFjZSB0ZXh0IG5vZGVzIHVubGVzcyBpdCBoYXMgYSBub3NraXAgaW5kaWNhdG9yLlxuICpcbiAqIEBwYXJhbSAge05vZGV9IHBhcmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZpbHRlckNoaWxkTm9kZXMocGFyZW50KSB7XG5cdHJldHVybiBwYXJlbnQuY2hpbGROb2Rlcztcblx0Ly8gY29uc29sZS53YXJuKHBhcmVudCwgcGFyZW50LmNoaWxkTm9kZXMpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKS5maWx0ZXIoXG4gICAgICAgIGVsID0+IGVsLm5vZGVUeXBlICE9PSAzIHx8IGVsLmRhdGEudHJpbSgpIHx8IGVsLl9ub3NraXBcbiAgICApO1xufVxuIiwiaW1wb3J0IHsgbWFrZUNzcywgbWVyZ2VPcHRpb25zIH0gZnJvbSAnQHNpcGgvY29tcG9uZW50JztcbmltcG9ydCB7IGFwaSB9IGZyb20gJ3NpbnVvdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoeWRyYXRlUHJvcHMoY29udGV4dCwgZWwsIG9wdGlvbnMpXG57XG5cblx0b3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhvcHRpb25zKTtcblxuXHRpZighb3B0aW9ucy5fcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBzdWJzY3JpYmVycyA9IFtdO1xuXHRsZXQgc3Vic2NyaWJlcnNfZmlyc3QgPSBbXTtcblxuXHRmdW5jdGlvbiBhZGRTdWJzY3JpYmVyKHZhbHVlLCBmbiwgc2tpcCA9IHRydWUpXG5cdHtcblx0XHRzdWJzY3JpYmVycy5wdXNoKHtcblx0XHRcdHZhbHVlLFxuXHRcdFx0Zm4sXG5cdFx0fSk7XG5cblx0XHRzdWJzY3JpYmVyc19maXJzdC5wdXNoKHNraXApO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1ha2Ugc3R5bGVzIGFuZCBjbGFzc2VzXG5cdCAqL1xuXHRpZihvcHRpb25zLnN0eWxlIHx8IG9wdGlvbnMuY2xhc3MpIHtcblx0XHQvLyBjb25zb2xlLmVycm9yKGVsKTtcblx0XHRsZXQgY3NzT3B0aW9ucyA9IG1ha2VDc3Moe30sIG9wdGlvbnMpO1xuXG5cdFx0aWYoY3NzT3B0aW9ucy5zdHlsZSkge1xuXHRcdFx0YWRkU3Vic2NyaWJlcihjc3NPcHRpb25zLnN0eWxlLCAob2JqKSA9PiB7XG5cdFx0XHRcdGZvcihsZXQgbmFtZSBpbiBvYmopIHtcblx0XHRcdFx0XHRlbC5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBvYmpbbmFtZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZihjc3NPcHRpb25zLmNsYXNzKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhjc3NPcHRpb25zLmNsYXNzKCkpO1xuXHRcdFx0YWRkU3Vic2NyaWJlcihjc3NPcHRpb25zLmNsYXNzLCAodmFsdWUpID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coZWwsIHZhbHVlKTtcblx0XHRcdFx0ZWwuY2xhc3NOYW1lID0gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNYWtlIGV2ZW50c1xuXHQgKi9cblx0aWYob3B0aW9ucy5vbikge1xuXHRcdGZvcihsZXQgbmFtZSBpbiBvcHRpb25zLm9uKSB7XG5cdFx0XHRoYW5kbGVFdmVudChlbCwgbmFtZSwgb3B0aW9ucy5vbltuYW1lXSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE1ha2UgYXR0cmlidXRlc1xuXHQgKi9cblx0aWYob3B0aW9ucy5hdHRycykge1xuXHRcdGZvcihsZXQgbmFtZSBpbiBvcHRpb25zLmF0dHJzKSB7XG5cdFx0XHRhZGRTdWJzY3JpYmVyKG9wdGlvbnMuYXR0cnNbbmFtZV0sICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdFx0fSlcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIFN1YnNjcmliZVxuXHQgKi9cblx0aWYoc3Vic2NyaWJlcnMubGVuZ3RoID4gMCkge1xuXHRcdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBzdWJzY3JpYmVyc1tpXS52YWx1ZSgpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoc3Vic2NyaWJlcnNfZmlyc3RbaV0pIHtcblx0XHRcdFx0XHRzdWJzY3JpYmVyc19maXJzdFtpXSA9IGZhbHNlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN1YnNjcmliZXJzW2ldLmZuKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUV2ZW50KGVsLCBuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudFByb3h5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGV2ZW50UHJveHkpO1xuICAgIH1cblxuICAgIChlbC5fbGlzdGVuZXJzIHx8IChlbC5fbGlzdGVuZXJzID0ge30pKVtuYW1lXSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIFByb3h5IGFuIGV2ZW50IHRvIGhvb2tlZCBldmVudCBoYW5kbGVycy5cbiAqIEBwYXJhbSB7RXZlbnR9IGUgLSBUaGUgZXZlbnQgb2JqZWN0IGZyb20gdGhlIGJyb3dzZXIuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gZXZlbnRQcm94eShlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVyc1tlLnR5cGVdKGUpO1xufVxuIiwiaW1wb3J0IHsgaCBhcyBocyB9IGZyb20gJ3NpbnVvdXMnO1xuaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gJ0BzaXBoL2NvbXBvbmVudCc7XG5pbXBvcnQgU2ludW91cyBmcm9tICdAc2lwaC9pJztcblxuZnVuY3Rpb24gcmVnaXN0ZXJDaGlsZHJlbihwYXJlbnQsIGNoaWxkKVxue1xuXHRwYXJlbnQuYWRkQ2hpbGRyZW4oY2hpbGQpO1xuXHRpZihjaGlsZC5zZXRQYXJlbnQpIHtcblx0XHRjaGlsZC5zZXRQYXJlbnQocGFyZW50KTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaChlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxue1xuXHRlbCA9IGVsLnRvTG93ZXJDYXNlKCk7XG5cdC8vIGVsID0gY29tcHV0ZWQoKCkgPT4gKHR5cGVvZiBlbCA9PT0gJ2Z1bmN0aW9uJyA/IGVsIDogZWwpKTtcblxuXHQvLyBjb25zb2xlLmxvZygnWyBGRiBdJywgZWwsIHRoaXMpXG5cdGxldCBkeW5hbWljQXR0cnMgPSBmYWxzZTtcblxuXHRsZXQgcmVhZHlPcHRpb25zID0gb3B0aW9ucyhvcHRzKTtcblx0Ly8gSWYgSFRNTCB0YWcgcmVuZGVyXG5cdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcblx0XHRyZXR1cm4gaHMoZWwsIHJlYWR5T3B0aW9ucywgY2hpbGRyZW4pO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0Q29tcG9uZW50KGVsKTtcblxuXHQvLyBjb25zb2xlLmxvZyh0aGlzKVxuXHRpZih0aGlzKSB7XG5cdFx0dGhpcy5hZGRDaGlsZHJlbihjb21wb25lbnQpO1xuXHR9XG5cblx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudC5yZW5kZXIoe1xuXHRcdFx0b3B0aW9uczogb3B0cyxcblx0XHRcdF9zbG90czogcmVhZHlPcHRpb25zLiRzbG90cyxcblx0XHR9KTtcblx0fVxuXG5cdC8vIGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuXHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHQvLyB9XG5cblx0Zm9yKGxldCBrZXkgaW4gb3B0cy4kc2xvdHMpIHtcblx0XHRjb21wb25lbnQucGFzc1Nsb3RzKGtleSwgb3B0cy4kc2xvdHNba2V5XSk7XHRcblx0fVxuXG5cdGNvbXBvbmVudC5wYXNzT3B0aW9ucyhvcHRzKTtcblxuXHRsZXQgbm9kZSA9IGNvbXBvbmVudC5yZW5kZXIoKTtcblxuXHRub2RlLiRzID0gY29tcG9uZW50O1xuXG5cdHJldHVybiBub2RlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRpZmYocGFyZW50LCBhLCBiLCBrZXlFeHByLCBnZXQsIGJlZm9yZSlcbntcblx0Y29uc3QgYUlkeCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgYklkeCA9IG5ldyBNYXAoKTtcblx0bGV0IGk7XG5cdGxldCBqO1xuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGFbaV0sIGkpO1xuXHRcdGFJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihiW2ldLCBpKTtcblx0XHRiSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gY29uc29sZS53YXJuKGFJZHgsIGJJZHgpO1xuXG5cdGZvciAoaSA9IGogPSAwOyBpICE9PSBhLmxlbmd0aCB8fCBqICE9PSBiLmxlbmd0aDspIHtcblx0XHR2YXIgYUVsbSA9IGFbaV0sXG5cdFx0XHRiRWxtID0gYltqXTtcblx0XHRpZiAoYUVsbSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBtb3ZlZCB0byBlYXJsaWVyIGluIHRoZSBsaXN0XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChiLmxlbmd0aCA8PSBqKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG5ldywgdGhpcyBpcyBhIGRlbGV0ZVxuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGdldChhW2ldLCBpLCAtMSkpO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYS5sZW5ndGggPD0gaSkge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBvbGQsIHRoaXMgaXMgYW4gYWRkaXRpb25cblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZ2V0KGJFbG0sIGosIDEpLCBnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlKTtcblx0XHRcdGorKztcblx0XHR9IGVsc2UgaWYgKGFFbG0gPT09IGJFbG0pIHtcblx0XHRcdC8vIE5vIGRpZmZlcmVuY2UsIHdlIG1vdmUgb25cblx0XHRcdGkrKztcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIGN1cnJlbnQgZWxlbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoaXMgZWxlbWVudCBzaG91bGQgYmVcblx0XHRcdHZhciBjdXJFbG1Jbk5ldyA9IGJJZHguZ2V0KGFFbG0pO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIHRoZSB3YW50ZWQgZWxtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhlIHdhbnRlZCBlbGVtZW50IGlzIG5vd1xuXHRcdFx0dmFyIHdhbnRlZEVsbUluT2xkID0gYUlkeC5nZXQoYkVsbSk7XG5cdFx0XHRpZiAoY3VyRWxtSW5OZXcgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBDdXJyZW50IGVsZW1lbnQgaXMgbm90IGluIG5ldyBsaXN0LCBpdCBoYXMgYmVlbiByZW1vdmVkXG5cdFx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChnZXQoYVtpXSwgaSwgLTEpKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fSBlbHNlIGlmICh3YW50ZWRFbG1Jbk9sZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIE5ldyBlbGVtZW50IGlzIG5vdCBpbiBvbGQgbGlzdCwgaXQgaGFzIGJlZW4gYWRkZWRcblx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShcblx0XHRcdFx0XHRnZXQoYkVsbSwgaiwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGluIGJvdGggbGlzdHMsIGl0IGhhcyBiZWVuIG1vdmVkXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdtb3ZlJywgYVtpXSwgJ2Zyb20nLCB3YW50ZWRFbG1Jbk9sZCwgJ3RvJywgaSlcblx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShcblx0XHRcdFx0XHRnZXQoYVt3YW50ZWRFbG1Jbk9sZF0sIHdhbnRlZEVsbUluT2xkLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGFbd2FudGVkRWxtSW5PbGRdID0gbnVsbDtcblx0XHRcdFx0aWYgKHdhbnRlZEVsbUluT2xkID4gaSArIDEpIGkrKztcblx0XHRcdFx0aisrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBiO1xufVxuIiwiaW1wb3J0IHsgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi9kaWZmLmpzJztcblxuLyoqXG4gKiBNYXAgb3ZlciBhIGxpc3Qgb2YgdW5pcXVlIGl0ZW1zIHRoYXQgY3JlYXRlIERPTSBub2Rlcy5cbiAqXG4gKiBObyBkdXBsaWNhdGVzIGluIHRoZSBsaXN0IG9mIGl0ZW1zIGlzIGEgaGFyZCByZXF1aXJlbWVudCwgdGhlIGRpZmZpbmdcbiAqIGFsZ29yaXRobSB3aWxsIG5vdCB3b3JrIHdpdGggZHVwbGljYXRlIHZhbHVlcy4gU2VlIGAuL3VuaXF1ZS5qc2AuXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGl0ZW1zIC0gRnVuY3Rpb24gb3Igb2JzZXJ2YWJsZSB0aGF0IGNyZWF0ZXMgYSBsaXN0LlxuICogQHBhcmFtICB7RnVuY3Rpb259IGV4cHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NsZWFuaW5nXVxuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcChjb250ZXh0LCBpdGVtcywga2V5RXhwciwgZXhwciwgYmVmb3JlSW5pdCA9IG51bGwsIHBhcmVudCA9IG51bGwpIHtcblx0Y29uc3QgeyByb290LCBzdWJzY3JpYmUsIHNhbXBsZSwgY2xlYW51cCB9ID0gYXBpO1xuXG5cdC8vIERpc2FibGUgY2xlYW5pbmcgZm9yIHRlbXBsYXRlcyBieSBkZWZhdWx0LlxuXHRsZXQgY2xlYW5pbmcgPSB0cnVlOy8vIWV4cHIuJHQ7XG5cblx0aWYocGFyZW50ID09PSBudWxsKSB7XG5cdFx0cGFyZW50ID0gYXBpLmgoW10pO1xuXHR9XG5cdFxuXHRjb25zdCBlbmRNYXJrID0gYXBpLmFkZChwYXJlbnQsICcnKTtcblxuXHRjb25zdCBkaXNwb3NlcnMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IG5vZGVzID0gbmV3IE1hcCgpO1xuXHRjb25zdCB0b1JlbW92ZSA9IG5ldyBTZXQoKTtcblx0Y29uc3QgZGVmYXVsdEEgPSBbXTtcblxuXHRpZihiZWZvcmVJbml0KSB7XG5cdFx0YmVmb3JlSW5pdCgoaXRlbSwga2V5LCBuKSA9PiB7XG5cdFx0XHRkZWZhdWx0QVtrZXldID0gaXRlbTtcblx0XHRcdG5vZGUoaXRlbSwga2V5LCAxLCBuKTtcblx0XHR9KVxuXHR9XG5cblx0Y29uc3QgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoYSA9PiB7XG5cdFx0Y29uc3QgYiA9IGl0ZW1zKCk7XG5cdFx0cmV0dXJuIHNhbXBsZSgoKSA9PiB7XG5cdFx0XHR0b1JlbW92ZS5jbGVhcigpO1xuXG5cdFx0XHQvLyBBcnJheS5mcm9tIHRvIG1ha2UgYSBjb3B5IG9mIHRoZSBjdXJyZW50IGxpc3QuXG5cdFx0XHRjb25zdCBjb250ZW50ID0gQXJyYXkuZnJvbShcblx0XHRcdFx0ZGlmZihlbmRNYXJrLnBhcmVudE5vZGUsIGEgfHwgZGVmYXVsdEEsIGIsIGtleUV4cHIsIG5vZGUsIGVuZE1hcmspXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRleHQuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKGksIGNvbnRleHQuX2NoaWxkcmVuW2ldLmhpZCwgY29udGV4dC5fY2hpbGRyZW5baV0uX3N0YXRlLnMxKCksIGNvbnRleHQuX2NoaWxkcmVuW2ldLl9wcm9wcy5wdClcblx0XHRcdC8vIH1cblx0XHRcdHRvUmVtb3ZlLmZvckVhY2goZGlzcG9zZSk7XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9KTtcblx0fSk7XG5cblx0Y2xlYW51cCh1bnN1YnNjcmliZSk7XG5cdGNsZWFudXAoZGlzcG9zZUFsbCk7XG5cblx0ZnVuY3Rpb24gbm9kZShpdGVtLCBrZXksIGksIGVsID0gbnVsbCkge1xuXHRcdGlmIChpdGVtID09IG51bGwpIHJldHVybjtcblxuXHRcdGxldCBub2RlS2V5ID0ga2V5RXhwcihpdGVtLCBrZXkpO1xuXG5cdFx0bGV0IG4gPSBub2Rlcy5nZXQobm9kZUtleSk7XG5cdFx0aWYgKGkgPT09IDEpIHtcblx0XHRcdHRvUmVtb3ZlLmRlbGV0ZShpdGVtKTtcblxuXHRcdFx0aWYgKCFuKSB7XG5cdFx0XHRcdG4gPSBjbGVhbmluZyA/XG5cdFx0XHRcdFx0cm9vdChkaXNwb3NlID0+IHtcblx0XHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQobm9kZUtleSwgZGlzcG9zZSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWwgPyBlbCA6IGV4cHIoaXRlbSwga2V5KTtcblx0XHRcdFx0XHR9KSA6XG5cdFx0XHRcdFx0KGVsID8gZWwgOiBleHByKGl0ZW0sIGtleSkpO1xuXG5cdFx0XHRcdGlmIChuLm5vZGVUeXBlID09PSAxMSkgbiA9IG4uZmlyc3RDaGlsZDtcblxuXHRcdFx0XHRub2Rlcy5zZXQobm9kZUtleSwgbik7XG5cblx0XHRcdFx0Ly8gY29uc29sZS53YXJuKGBbY3JlYXRlICgke25vZGVLZXl9KV1gLCBuKTtcblx0XHRcdFx0aWYobi4kcykge1xuXHRcdFx0XHRcdG4uJHMuaG9vaygnbW91bnRlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGNvbnRleHQuX2NoaWxkcmVuW2tleV0uaG9vaygnbW91bnRlZCcpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoaSA9PT0gLTEpIHtcblx0XHRcdC8vIGNvbnNvbGUud2FybihgW3JlbW92ZSAoJHtub2RlS2V5fSldYCwgbiwgbi5wYXJlbnROb2RlKTtcblx0XHRcdGlmKG4uJHMpIHtcblx0XHRcdFx0bi4kcy5ob29rKCd1bm1vdW50ZWQnKTtcblx0XHRcdH1cblxuXHRcdFx0dG9SZW1vdmUuYWRkKG5vZGVLZXkpO1xuXHRcdFx0Ly8gY29udGV4dC5yZW1vdmVDaGlsZChrZXkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGlzcG9zZUFsbCgpIHtcblx0XHRkaXNwb3NlcnMuZm9yRWFjaChkID0+IGQoKSk7XG5cdFx0ZGlzcG9zZXJzLmNsZWFyKCk7XG5cdFx0bm9kZXMuY2xlYXIoKTtcblx0XHR0b1JlbW92ZS5jbGVhcigpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGlzcG9zZShpdGVtKSB7XG5cdFx0bGV0IGRpc3Bvc2VyID0gZGlzcG9zZXJzLmdldChpdGVtKTtcblx0XHRpZiAoZGlzcG9zZXIpIHtcblx0XHRcdGRpc3Bvc2VyKCk7XG5cdFx0XHRkaXNwb3NlcnMuZGVsZXRlKGl0ZW0pO1xuXHRcdH1cblx0XHRub2Rlcy5kZWxldGUoaXRlbSk7XG5cdH1cblxuXHRyZXR1cm4gcGFyZW50O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNsb3QoY29udGV4dCwgaCwgbmFtZSwgdGFnLCBvcHRpb25zLCBkZWZhdWx0Q2hpbGRyZW4pXG57XG5cdC8vIGNvbnRleHQuX19zbG90c1xuXHRcblx0bGV0IGNoaWxkcmVuID0gZGVmYXVsdENoaWxkcmVuO1xuXG5cdGlmKGNvbnRleHQuX3Nsb3RzW25hbWVdKSB7XG5cdFx0Y2hpbGRyZW4gPSBjb250ZXh0Ll9zbG90c1tuYW1lXTtcblx0fVxuXHRcblx0aWYodGFnID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuO1xuXHR9XG5cblx0Ly8gaC5iaW5kKG51bGwpXG5cblx0bGV0IHJlbmRlciA9IGgodGFnLCBvcHRpb25zLCBjaGlsZHJlbik7XG5cblx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCByZW5kZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuXHQvLyBcdGNvbnNvbGUubG9nKHJlbmRlci5jaGlsZE5vZGVzW2ldLCByZW5kZXIuY2hpbGROb2Rlc1tpXS4kcyk7XG5cdC8vIH1cblx0XG5cblx0cmV0dXJuIHJlbmRlcjtcbn1cbiIsImltcG9ydCB7IGggfSBmcm9tICdAc2lwaC9jb21wb25lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50KClcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICUgMyAhPT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdGF0ZW1lbnQgc2hvdWxkIGJlIG9kZCBudW1iZXInKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cdFx0bGV0IGZvdW5kQ29uZGl0aW9uID0gZmFsc2U7XG5cdFx0Ly8gdmFsdWVcblx0XHRsZXQgY2hpbGRJbmRleCA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRsZXQgc2l6ZSA9IGFyZ3VtZW50c1tpICsgMV07XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaSArIDJdO1xuXHRcdFx0bGV0IG5vZGUgPSBudWxsO1xuXG5cdFx0XHRjb25kaXRpb24gPSB0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nID8gY29uZGl0aW9uKCkgOiBjb25kaXRpb247XG5cblx0XHRcdGlmKGNvbmRpdGlvbiAmJiAhZm91bmRDb25kaXRpb24pIHtcblx0XHRcdFx0Zm91bmRDb25kaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRub2RlID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnNvbGUud2Fybihjb25kaXRpb24sIHNpemUsIHZhbHVlLCBub2RlKTtcblx0XHRcdC8vIFBhc3MgZmFpbGVkIHN0ZXRlbWVudCBjb25kaXRpb25cblx0XHRcdC8vIE5vcm1pbGl6ZSBpbmRleCB0aGF0IHdpbGwgYmUgdXNlZCBpbiByZXBsYWNpbmcgcGxhY2Vob2xkZXIgKGJlbG93KVxuXHRcdFx0aWYobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIW5vZGUuX29ic2VydmFibGUpIHtcblx0XHRcdFx0bm9kZSA9IG5vZGUoaCk7XG5cdFx0XHR9XG5cdFx0XHQvLyByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggbm9kZVxuXHRcdFx0Ly8gQW5kIGNvcnJlY3QgaW5kZXhcblx0XHRcdGlmKHNpemUgPiAxKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZVtqXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXG5cdHJldHVybiBkO1xufVxuIiwiXG5cdFx0aW1wb3J0IGNvbXBvbmVudENvbmZpZyBmcm9tIFwiLi9pbmRleC5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2lwaC9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFBhZ2VzSW5kZXgoKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnUGFnZXNJbmRleCc7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSB7fTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSBPYmplY3Qua2V5cyhjb25maWcubWV0aG9kcyk7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9mdW5jdGlvbmFsID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19wcm9wcyA9IHt9O1xuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5wcm9wcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcHJvcHNba2V5XSA9IGNvbmZpZy5wcm9wc1trZXldXG5cdFx0fVxuXHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3JlbmRlciA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFxuICBcImRpdlwiLFxuICBbY3R4Lm9wdGlvbnMsIHt9XSxcbiAgW1xuICAgIGxvb3AoXG4gICAgICBjdHgsXG4gICAgICBjdHguX3N0YXRlLml0ZW1zLFxuICAgICAgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0sXG4gICAgICAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBoKFxuICAgICAgICAgIFwic2J1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCJib2xkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3M6IGN0eC5fc3RhdGUuczEsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U3R5bGU6IFwiaXRhbGljXCIgfSxcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHB0OiBpdGVtLFxuICAgICAgICAgICAgICBwcm9wMTogXCJ0ZXN0LS1cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBrZXk6IGl0ZW0sXG4gICAgICAgICAgICAkc2xvdHM6IHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogW1xuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBgQnV0dG9uICR7aXRlbX1gO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYEJ1dHRvbiAke2l0ZW19YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICApO1xuICAgICAgfVxuICAgICksXG4gIF1cbik7XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19oeWRyYXRlID0gZnVuY3Rpb24oaCkge1xuXHRcdFx0XHRsZXQgY3R4ID0gdGhpcztcblx0XHRcdFx0cmV0dXJuIHtcbiAgX3Q6IFwiaFwiLFxuICB0OiBcImRpdlwiLFxuICBvOiBbY3R4Lm9wdGlvbnMsIHt9XSxcbiAgYzogW1xuICAgIHtcbiAgICAgIF90OiBcImxvb3BcIixcbiAgICAgIGM6IGN0eC5fc3RhdGUuaXRlbXMsXG4gICAgICBrOiAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSxcbiAgICAgIGg6IChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBfdDogXCJoXCIsXG4gICAgICAgICAgdDogXCJzYnV0dG9uXCIsXG4gICAgICAgICAgbzoge1xuICAgICAgICAgICAgY2xhc3M6IGN0eC5fc3RhdGUuczEsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U3R5bGU6IFwiaXRhbGljXCIgfSxcbiAgICAgICAgICAgICRzbG90czoge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX3Q6IFwidFwiLFxuICAgICAgICAgICAgICAgICAgdDogLTEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfczogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGM6IFtdLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHI6IChoLCBpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGgoXG4gICAgICAgICAgXCJzYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcImJvbGRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzczogY3R4Ll9zdGF0ZS5zMSxcbiAgICAgICAgICAgIHN0eWxlOiB7IGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9LFxuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgcHQ6IGl0ZW0sXG4gICAgICAgICAgICAgIHByb3AxOiBcInRlc3QtLVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleTogaXRlbSxcbiAgICAgICAgICAgICRzbG90czoge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX3Q6IFwidFwiLFxuICAgICAgICAgICAgICAgICAgdDogLTEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBgQnV0dG9uICR7aXRlbX1gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdGV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuXHQiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7fSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aW1lcjogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgc3RhdGUobykge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogbyhBcnJheS5mcm9tKHtcbiAgICAgICAgbGVuZ3RoOiAxMFxuICAgICAgfSwgKF8sIGkpID0+IGkpKSxcbiAgICAgIGl0ZW1zMjogbyhbJ2FfJywgJ2JfJ10pLFxuICAgICAgczE6IG8oMilcbiAgICB9O1xuICB9LFxuXG4gIGNvbXB1dGVkKG8pIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGxldCBkID0gW107XG4gICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xuICAgICAgLy8gXHRkLnB1c2goaSk7XG4gICAgICAvLyB9XG4gICAgICAvLyBpdGVtcyA9IGQ7XG4gICAgICB0aGlzLl9kYXRhLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMSh0aGlzLl9zdGF0ZS5zMSgpICsgMSk7XG4gICAgICB9LCAyMDAwKTsgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBcdGNvbnNvbGUubG9nKCdjaGFuZ2UnKVxuICAgICAgLy8gXHRpdGVtcyA9IFsnYScsICdjJywgJ2QnXVxuICAgICAgLy8gfSwgMTAwMClcbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gXHRjb25zb2xlLmxvZygnY2hhbmdlJylcbiAgICAgIC8vIFx0aXRlbXMgPSBbJ2EnLCAnZScsICdkJywgJ2InLCAnYyddXG4gICAgICAvLyB9LCAzMDAwKVxuICAgIH0sXG4gICAgdW5tb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2RhdGEudGltZXIpO1xuICAgIH1cbiAgfVxufTsiLCJpbXBvcnQgU2ludW91cyBmcm9tICdAc2lwaC9pJztcbmltcG9ydCB7IGh5ZHJhdGUgfSBmcm9tICdAc2lwaC9oeWRyYXRpb24nO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnQHNpcGgvcmVuZGVyJztcblxuXG4vLyBpbXBvcnQgeyBhcGkgfSBmcm9tICdzaW51b3VzJztcbi8vIGltcG9ydCB7IG9ic2VydmFibGUgfSBmcm9tICdAc2lwaC9jb21wb25lbnQvc3JjL29ic2VydmFibGUnO1xuLy8gaW1wb3J0IHRlc3QgZnJvbSAnLi4vY29tcG9uZW50cy90ZXN0LnNpbidcbi8vIGltcG9ydCB0ZXN0MiBmcm9tICcuLi9jb21wb25lbnRzL3Rlc3QyLnNpbidcbmltcG9ydCBidXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9zYnV0dG9uLnNpbidcbmltcG9ydCBJbmRleFBhZ2UgZnJvbSAnLi4vcGFnZXMvaW5kZXguc2luJ1xuaW1wb3J0IHRpbWVCZW5jaG1hcmsgZnJvbSAnLi90aW1lJztcblxuLy8gY29uc3QgSW5kZXhQYWdlID0gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFnZUluZGV4XCIgKi8gJy4uL3BhZ2VzL2luZGV4LnNpbicpXG5cblxudmFyIExBWU9VVDtcbnZhciBQYWdlSW5kZXgsIFBhZ2VJbmRleDI7XG5cbmZ1bmN0aW9uIFRFU1RfV0VCUEFDS19CVUlMRCgpXG57XG5cdHRpbWVCZW5jaG1hcmsoJ1NTUi1CdWlsZCcpO1xuXHQvLyBTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KHRlc3QpO1xuXHQvLyBTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KHRlc3QyKTtcblx0U2ludW91cy5yZWdpc3RlckNvbXBvbmVudChidXR0b24pO1xuXHR0aW1lQmVuY2htYXJrKCdTU1ItQnVpbGQnKTtcbn1cblxuLy8gZnVuY3Rpb24gVEVTVF9JTklUKClcbi8vIHtcbi8vIFx0dGltZUJlbmNobWFyaygnU1NSLUluaXQnKTtcbi8vIFx0UGFnZUluZGV4ID0gbmV3IEluZGV4UGFnZSgpO1xuLy8gXHRQYWdlSW5kZXgyID0gbmV3IEluZGV4UGFnZSgpO1xuLy8gXHR0aW1lQmVuY2htYXJrKCdTU1ItSW5pdCcpO1xuLy8gfVxuXG5mdW5jdGlvbiBURVNUX1JFTkRFUigpXG57XG5cdHJlbmRlcihJbmRleFBhZ2UsIExBWU9VVCwgdGltZUJlbmNobWFyaywgKGMpID0+IHtcblx0XHRQYWdlSW5kZXggPSBjO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gQ0xFQVJfSE9PS1MoKVxue1xuXHRsZXQgaHRtbCA9IExBWU9VVC5pbm5lckhUTUw7XG5cdExBWU9VVC5pbm5lckhUTUwgPSBodG1sO1xuXHRQYWdlSW5kZXguaG9vaygndW5tb3VudGVkJyk7XG59XG5cbmZ1bmN0aW9uIFRFU1RfSFlEUkFURSgpXG57XG5cdGh5ZHJhdGUoSW5kZXhQYWdlLCBMQVlPVVQsIHRpbWVCZW5jaG1hcmspO1xufVxuXG5URVNUX1dFQlBBQ0tfQlVJTEQoKTtcblxuLy8gVEVTVF9JTklUKCk7XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbG9hZCk7XG4vLyByZXR1cm47XG4oZnVuY3Rpb24gbG9hZCgpIHtcblx0TEFZT1VUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXG5cblx0Ly8gbGV0IGQgPSBvYnNlcnZhYmxlKDEpO1xuXHQvLyBhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0Ly8gXHRjb25zb2xlLmxvZygnW3NiXScsIGQoKSk7XG5cdC8vIH0pXG5cdC8vIGQoMik7XG5cdC8vIHJldHVybjtcblxuXG5cdC8vIFRFU1RfSFlEUkFURSgpO1xuXHQvLyByZXR1cm47XG5cblxuXHRURVNUX1JFTkRFUigpO1xuXHQvLyBjb25zb2xlLmxvZyhMQVlPVVQuaW5uZXJIVE1MKVxuXHQvLyByZXR1cm5cblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblxuXHRcdENMRUFSX0hPT0tTKCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCBURVNUX0hZRFJBVEUoKTtcblx0XHR9LCAzMDApO1xuXHR9LCAxMDAwKTtcbn0pKCk7XG4iLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9