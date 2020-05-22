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
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"pageIndex":"pageIndex"}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
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
    slot(ctx, h, "default", "span", { staticClass: "s" }, [
      `Default button text`,
    ]),
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
      s1: o(9)
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
    click: function () {
      alert(1);
    },
    mounted: function () {
      let direction = 1; // console.log('mounted', this.hid);

      this._data.timer = setInterval(() => {
        // console.log('interval', this.hid);
        if (this._state.s1() > 40) {
          direction = -5;
        } else if (this._state.s1() < 10) {
          direction = 5;
        }

        this._state.s1(this._state.s1() + direction);
      }, 1000);
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

var _observable = __webpack_require__(/*! ./observable */ "./packages/component/dist/observable.js");

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
    this.$el = null;
    this._props = this.props();
    this._passedProps = {}; // Local data

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

  Basic.prototype.passOptions = function (options) {
    this.options = options;
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

    _2.h.bind(ctx);

    this.$el = ctx.__render(_2.h.bind(ctx), {
      ctx: ctx,
      statement: _index.statement,
      loop: _index.loop,
      slot: _index.slot,
      d: _index.dynamic,
      c: _observable.computed
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

    _2.h.bind(ctx);

    return ctx.__hydrate(_2.h);
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
  var readyOptions = (0, _.options)(opts); // If HTML tag render

  if (!_i.default.hasComponent(el)) {
    return (0, _sinuous.h)(el, readyOptions, children);
  }

  var component = _i.default.getComponent(el); // console.log(this)


  registerChildren(this, component);

  if (component._functional) {
    return component.render({
      options: opts,
      _slots: readyOptions.$slots
    });
  }

  if (typeof opts.props !== 'undefined') {
    component.passProps(opts.props);
  }

  for (var key in opts.$slots) {
    component.passSlots(key, opts.$slots[key]);
  }

  component.passOptions(opts);
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

var _options = _interopRequireWildcard(__webpack_require__(/*! ./options */ "./packages/component/dist/options.js"));

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

  if (option.on) {
    for (var key in option.on) {
      readyOption["on" + key] = option.on[key];
    }
  }

  if (option.key) {
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

    if (option._s) {
      readyOptions._s = option._s;
    }

    if (option.key) {
      readyOptions.key = option.key;
    }

    if (option.staticClass) {
      if (!readyOptions.staticClass) {
        readyOptions.staticClass = option.staticClass;
      } else {
        readyOptions.staticClass += ' ' + option.staticClass;
      }
    }
  }

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

var _map = _interopRequireDefault(__webpack_require__(/*! sinuous/map */ "./node_modules/sinuous/module/map.js"));

var _component2 = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");

var _lazy = __webpack_require__(/*! @sinuous/lazy */ "./packages/lazy/dist/index.js");

var _property = _interopRequireDefault(__webpack_require__(/*! ./property */ "./packages/hydration/dist/property.js"));

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
// function hydrateProps(el, options)
// {
// 	if(options._s) {
// 		// console.log(el, 'Prepare options', options);
// 		// options = parseOptions(options, false);
// 		// console.log(el, 'Prepare options 2', options);
// 		property(el, options);
// 		// api.subscribe(() => {
// 		// 	// console.log(el, 'Change options');
// 		// 	api.property(el, options, null);
// 		// });
// 	}
// }


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
  var startNode = node;
  var prevNode = node;
  var parentNode = node.parentNode;

  _sinuous.api.subscribe(function () {
    var loop_condition = typeof condition === 'function' ? condition() : condition;
    var currentNode = startNode;

    for (var key in loop_condition) {
      var item = loop_condition[key];
      var itemKey = args.k(item, key);
      var itemArgs = void 0;
      var shouldRender = currentNode === null;

      if (currentNode) {
        var nodeKey = currentNode.getAttribute('data-key');

        if (nodeKey === itemKey) {
          shouldRender = false;
        }
      }

      if (shouldRender) {
        // let newNode = args.r(h.bind(context), item, key);
        // markAsReady(newNode);
        // modify H with Index to create class + mount/unmount
        if (currentNode) {// replace
        } else {} // prevNode.after(newNode)
        // prevNode = newNode;
        // context.hook('mounted');

      } else {
        // if(!currentNode._hydrated) 
        itemArgs = args.h(item, key);
        markAsReady(currentNode);
        hydrate(context, currentNode, itemArgs);
      }

      if (!shouldRender) {
        prevNode = currentNode;
        currentNode = currentNode.nextElementSibling;
      }
    }
  });
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
    var _node2 = bindedNodes[_key];
    var childrenSlots = slots[_key];
    var startNodeIndex = data.index;

    if (typeof _node2 === 'undefined') {
      console.warn(el, opts, slotData, el[0]);
    }

    if (childrenSlots.length > _node2.length) {
      throw new Error('Slot hydration length mismatch');
    }

    for (var i = startNodeIndex; i < childrenSlots.length; i++) {
      // console.log(node.childNodes[i], childrenSlots[i])
      hydrate(context, _node2.childNodes[i], childrenSlots[i]);
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
  // console.log(component, opts.$slots)


  if (opts.$slots) {
    hydrateSlots(component, node, opts, opts.$slots);
  }

  component.passOptions(opts);
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

var _component = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");

var _sinuous = __webpack_require__(/*! sinuous */ "./node_modules/sinuous/module/sinuous.js");

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
        console.log(el, value);
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

var _time = _interopRequireDefault(__webpack_require__(/*! ./time */ "./src/time.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { api } from 'sinuous';
// import { observable } from '@sinuous/component/src/observable';
// import test from '../components/test.sin'
// import test2 from '../components/test2.sin'
// import IndexPage from '../pages/index.sin'
var IndexPage = __webpack_require__.e(/*! import() | pageIndex */ "pageIndex").then(__webpack_require__.bind(null, /*! ../pages/index.sin */ "./pages/index.sin"));
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
  (0, _render.default)(IndexPage, LAYOUT, _time.default, function (c) {
    PageIndex = c;
  });
}

function CLEAR_HOOKS() {
  var html = LAYOUT.innerHTML;
  LAYOUT.innerHTML = html;
  PageIndex.hook('unmounted');
}

function TEST_HYDRATE() {
  (0, _hydration.hydrate)(IndexPage, LAYOUT, _time.default);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uLnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NidXR0b24uc2luP2NlNzkiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb29wLmpzIiwid2VicGFjazovLy8uLi9zcmMvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zbG90LmpzIiwid2VicGFjazovLy8uLi9zcmMvc3RhdGVtZW50LmpzIiwid2VicGFjazovLy8uLi9zcmMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oeWRyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyLXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWUuanMiXSwibmFtZXMiOlsiXyIsInkiLCJzZWxmIiwiY2xhc3NlcyIsIm9iaiIsInN0YXRpY0NsYXNzZXMiLCJkeW5hbWljIiwiaSIsImFyZ3VtZW50cyIsImFyZyIsIkFycmF5IiwiaiIsImhhbmRsZUNsYXNzT2JqZWN0IiwiYSIsInZhbCIsInN0eWxlcyIsImNhbWVsVG9Qcm9wIiwiaGFuZGxlU3R5bGVzT2JqZWN0IiwiSElEIiwiQmFzaWMiLCJvYnNlcnZhYmxlIiwiZGVmYXVsdCIsImNvbXB1dGVkIiwibmFtZSIsImNoaWxkcmVuIiwicGFyZW50IiwicHJvcCIsInZhbHVlIiwidHlwZSIsInByb3BzIiwiY3R4IiwiaCIsInN0YXRlbWVudCIsImxvb3AiLCJzbG90IiwiZCIsImMiLCJTaW51b3VzIiwiZWwiLCJ0YWciLCJjaGlsZCIsIm9wdHMiLCJkeW5hbWljQXR0cnMiLCJyZWFkeU9wdGlvbnMiLCJjb21wb25lbnQiLCJyZWdpc3RlckNoaWxkcmVuIiwib3B0aW9ucyIsIl9zbG90cyIsIiRzbG90cyIsInJlc3VsdCIsImxvb3BfY29uZGl0aW9uIiwiY29uZGl0aW9uIiwiaXRlbSIsImZuIiwiYmluZGluZyIsInYiLCJtYWtlT2JzZWVydmFibGUiLCJzdHIiLCJhcmdUb1N0cmluZyIsInJlYWR5U3R5bGVzIiwibWFrZVN0eWxlUHJvcCIsImNsb25lT3B0aW9ucyIsInNob3VsZENsb25lIiwicmVhZHlPcHRpb24iLCJvcHRpb24iLCJtYWtlQ3NzIiwiQXNzaWduT2JqZWN0T3B0aW9ucyIsIkFzc2lnblZhbHVlT3B0aW9ucyIsInNob3VsZEJlTWVyZ2VkIiwia2V5cyIsIk9iamVjdCIsIm1lcmdlT3B0aW9ucyIsIm1ha2VPcHRpb24iLCJjb250ZXh0IiwiZm91bmRDb25kaXRpb24iLCJjaGlsZEluZGV4Iiwic2l6ZSIsIm5vZGUiLCJkb2N1bWVudCIsIlNUT1JBR0UiLCJTVUJTQ1JJQkVSUyIsImNvbnNvbGUiLCJoeWRyYXRlIiwic3RhcnRJbmRleCIsInN0YXRlbWVudEFyZ3MiLCJhcmdzIiwiTm9kZSIsImFwaSIsImN1cnJlbnRJbmRleCIsImN1cnJlbnROb2RlIiwibmV3Tm9kZSIsIm1hcmtBc1JlYWR5IiwiaGlkZU5vZGVzIiwic3RhcnROb2RlIiwicHJldk5vZGUiLCJwYXJlbnROb2RlIiwiaXRlbUtleSIsIml0ZW1BcmdzIiwic2hvdWxkUmVuZGVyIiwibm9kZUtleSIsInBhdGgiLCJiaW5kZWROb2RlcyIsInNsb3REYXRhIiwiZ2V0U2xvdE5vZGUiLCJkYXRhIiwiY2hpbGRyZW5TbG90cyIsInNsb3RzIiwic3RhcnROb2RlSW5kZXgiLCJoeWRyYXRlSCIsIm5ld0FyZ3MiLCJoeWRyYXRlU2xvdHMiLCJoeWRyYXRlSWRsZSIsImh5ZHJhdGVUYWciLCJoeWRyYXRlVGV4dCIsImh5ZHJhdGVMb29wIiwiaHlkcmF0ZVN0YXRlbWVudCIsInRpbWVCZW5jaG1hcmsiLCJjYWxsYmFjayIsInRyZWUiLCJoeWRyYXRpb25Sb290IiwiaHlkcmF0aW9uIiwiaW5zdGFuY2UiLCJzdWJzY3JpYmVycyIsInN1YnNjcmliZXJzX2ZpcnN0Iiwic2tpcCIsImNzc09wdGlvbnMiLCJhZGRTdWJzY3JpYmVyIiwiaGFuZGxlRXZlbnQiLCJlIiwiU2ludW91c0NvbXBvbmVudHMiLCJjcmVhdGVISUQiLCJjbGVhckhJRCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiaGFzQ29tcG9uZW50IiwiZ2V0SHlkcmF0ZUNvbXBvbmVudCIsImdldENvbXBvbmVudEluc3RhbmNlIiwiZ2V0Q29tcG9uZW50IiwibW9kdWxlIiwibGF5b3V0IiwiSW5kZXhQYWdlIiwiTEFZT1VUIiwiUGFnZUluZGV4IiwiUGFnZUluZGV4MiIsIlRFU1RfV0VCUEFDS19CVUlMRCIsImJ1dHRvbiIsIlRFU1RfUkVOREVSIiwiQ0xFQVJfSE9PS1MiLCJodG1sIiwiaW5uZXJIVE1MIiwiaG9vayIsIlRFU1RfSFlEUkFURSIsImxvYWQiLCJnZXRFbGVtZW50QnlJZCIsInNldFRpbWVvdXQiLCJ0aW1lcyIsInRpbWUiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUcsR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0osS0FBSyxDQUFDbkksSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDbUksU0FBSyxDQUFDbkksSUFBRCxDQUFMLEdBQWNxSSxHQUFkO0FBQ0EsV0FBT0YsS0FBSyxDQUFDbkksSUFBRCxDQUFaO0FBQ0E7O0FBRUQwRCxTQUFPLENBQUM4RSxHQUFSLFdBQW9CeEksSUFBcEIsU0FBOEJxSSxHQUFHLEdBQUdGLEtBQUssQ0FBQ25JLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPbUksS0FBSyxDQUFDbkksSUFBRCxDQUFaO0FBQ0EsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wicGFnZUluZGV4XCI6XCJwYWdlSW5kZXhcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuYnVuZGxlLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXHRcdGltcG9ydCBjb21wb25lbnRDb25maWcgZnJvbSBcIi4vc2J1dHRvbi5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFNidXR0b24oKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnU2J1dHRvbic7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSB7XCJkZWZhdWx0XCI6e1wicGF0aFwiOlswLDBdLFwidGFnXCI6XCJzcGFuXCIsXCJpbmRleFwiOjB9fTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSBPYmplY3Qua2V5cyhjb25maWcubWV0aG9kcyk7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9mdW5jdGlvbmFsID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19yZW5kZXIgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcbiAgXCJkaXZcIixcbiAgW1xuICAgIGN0eC5vcHRpb25zLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMTVweFwiLFxuICAgICAgfSxcbiAgICAgIGNsYXNzOiBcIm5ldy1idXR0b25cIixcbiAgICAgIHN0eWxlOiBbeyBjb2xvcjogY3R4Ll9jb21wdXRlZC50ZXN0Q29sb3IgfV0sXG4gICAgICBhdHRyczoge1xuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogY3R4LmNsaWNrLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBbXG4gICAgc2xvdChjdHgsIGgsIFwiZGVmYXVsdFwiLCBcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzXCIgfSwgW1xuICAgICAgYERlZmF1bHQgYnV0dG9uIHRleHRgLFxuICAgIF0pLFxuICBdXG4pO1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9faHlkcmF0ZSA9IGZ1bmN0aW9uKGgpIHtcblx0XHRcdFx0bGV0IGN0eCA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiB7XG4gIF90OiBcImhcIixcbiAgdDogXCJkaXZcIixcbiAgbzogW1xuICAgIGN0eC5vcHRpb25zLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgY2xhc3M6IFwibmV3LWJ1dHRvblwiLFxuICAgICAgc3R5bGU6IFt7IGNvbG9yOiBjdHguX2NvbXB1dGVkLnRlc3RDb2xvciB9XSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBjdHguY2xpY2ssXG4gICAgICB9LFxuICAgICAgX3M6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgYzogWy0xXSxcbn07XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGltZXI6IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIHN0YXRlKG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgczE6IG8oOSlcbiAgICB9O1xuICB9LFxuXG4gIGNvbXB1dGVkKG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGVzdENvbG9yOiBvKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlLnMxKCkgJSAyID09PSAwID8gJ3JlZCcgOiAnZ3JlZW4nO1xuICAgICAgfSksXG4gICAgICB0ZXN0Q2xhc3M6IG8oKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlZDogdGhpcy5fc3RhdGUuczEoKSAlIDIgPT09IDBcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFsZXJ0KDEpO1xuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpcmVjdGlvbiA9IDE7IC8vIGNvbnNvbGUubG9nKCdtb3VudGVkJywgdGhpcy5oaWQpO1xuXG4gICAgICB0aGlzLl9kYXRhLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW50ZXJ2YWwnLCB0aGlzLmhpZCk7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZS5zMSgpID4gNDApIHtcbiAgICAgICAgICBkaXJlY3Rpb24gPSAtNTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZS5zMSgpIDwgMTApIHtcbiAgICAgICAgICBkaXJlY3Rpb24gPSA1O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3RhdGUuczEodGhpcy5fc3RhdGUuczEoKSArIGRpcmVjdGlvbik7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9LFxuICAgIHVubW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3VubW91bnRlZCcsIHRoaXMuaGlkKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fZGF0YS50aW1lcik7XG4gICAgfVxuICB9XG59OyIsImV4cG9ydCBjb25zdCBfID0gLTE7XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5cblxuZnVuY3Rpb24gY2FtZWxUb1Byb3Aocylcbntcblx0cmV0dXJuIHNcblx0XHQucmVwbGFjZSgvXFwuPyhbQS1aXSspL2csICh4LCB5KSA9PiBgLSR7eS50b0xvd2VyQ2FzZSgpfWApXG5cdFx0LnJlcGxhY2UoL14tLywgJycpO1xufVxuXG5mdW5jdGlvbiBvbmx5VW5pcXVlKHZhbHVlLCBpbmRleCwgc2VsZikgeyBcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDbGFzc09iamVjdChvYmopXG57XG5cdGxldCBjbGFzc2VzID0gW107XG5cblx0Zm9yIChsZXQga2V5IGluIG9iaikge1xuXHRcdGlmKHZhbHVlKG9ialtrZXldKSkge1xuXHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2VzKHN0YXRpY0NsYXNzZXMgPSBbXSwgZHluYW1pYyA9IHt9KVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdFxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYXJnLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKHZhbHVlKGFyZ1tqXSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KFxuXHRcdFx0XHRcdGhhbmRsZUNsYXNzT2JqZWN0KGFyZylcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdChcblx0XHRcdFx0XHRoYW5kbGVDbGFzc09iamVjdCh2YWx1ZShhcmcpKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKCh2LCBpLCBhKSA9PiBhLmluZGV4T2YodikgPT09IGkpO1xuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCBvYmopXG57XG5cdGZvciAobGV0IGtleSBpbiBvYmopIHtcblx0XHRsZXQgdmFsID0gdmFsdWUob2JqW2tleV0pO1xuXHRcdGlmKHZhbCAhPT0gbnVsbCkge1xuXHRcdFx0c3R5bGVzW2NhbWVsVG9Qcm9wKGtleSldID0gdmFsO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSB7fTtcblx0XHRcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgYXJndW1lbnRzW2ldKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgdmFsdWUoYXJndW1lbnRzW2ldKSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3R5bGVzO1xuXHR9XG59IiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnQHNpbnVvdXMvY29tcGlsZXIvc3JjL2VtcHR5JztcblxuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQgfSBmcm9tICcuL29ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBzdHlsZXMsIGNsYXNzZXMsIHN0YXRlbWVudCwgZHluYW1pYywgbG9vcCwgc2xvdCB9IGZyb20gJy4vaW5kZXgnO1xuXG5pbXBvcnQgeyBoIH0gZnJvbSAnLi8nO1xuXG4vLyBpbXBvcnQgeyByZW5kZXIsIGh5ZHJhdGUgfSBmcm9tICcuL3RlbXBsYXRlJztcbmxldCBISUQgPSAwO1xuXG5cbnZhciBCYXNpYyA9IGZ1bmN0aW9uICgpIHtcblxuXHRmdW5jdGlvbiBCYXNpYygpXG5cdHtcblx0XHR0aGlzLl9pc0NvbXBvbmVudCA9IHRydWU7XG5cdFx0dGhpcy5oaWQgPSArK0hJRDtcblx0XHR0aGlzLiRlbCA9IG51bGw7XG5cblx0XHR0aGlzLl9wcm9wcyA9IHRoaXMucHJvcHMoKTtcblx0XHR0aGlzLl9wYXNzZWRQcm9wcyA9IHt9O1xuXG5cdFx0Ly8gTG9jYWwgZGF0YVxuXHRcdHRoaXMuX2RhdGEgPSB0aGlzLmRhdGEoKTtcblx0XHQvLyBTdGF0ZWZ1bCBkYXRhXG5cdFx0dGhpcy5fc3RhdGUgPSB0aGlzLnN0YXRlKG9ic2VydmFibGUpO1xuXHRcdC8vIHNsb3RzXG5cdFx0dGhpcy5fc2xvdHMgPSB7XG5cdFx0XHRkZWZhdWx0OiBbXSxcblx0XHR9O1xuXHRcdC8vIGhvb2tzXG5cdFx0dGhpcy5faG9va3MgPSBbXTtcblxuXHRcdHRoaXMuX2NvbXB1dGVkID0gdGhpcy5jb21wdXRlZChjb21wdXRlZCk7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBbXTtcblx0XHR0aGlzLl9lbF9pbmRleCA9IDA7XG5cdFx0dGhpcy5vcHRpb25zID0gbnVsbDtcblxuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cblx0XHQvLyBEZWZhdWx0IHByb3AgdmFsdWVzIFxuXHRcdHRoaXMuaW5pdFByb3BzKCk7XG5cblx0XHQvLyB0aGlzLmluaXRUZW1wbGF0ZSgpO1xuXG5cdFx0dGhpcy5zZXRDaGlsZHJlbigpO1xuXHRcdHRoaXMuc2V0UGFyZW50KCk7XG5cblx0XHR0aGlzLmJpbmRDb250ZXh0KCk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5iaW5kQ29udGV4dCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX2NvbXB1dGVkKSB7XG5cdFx0XHR0aGlzLl9jb21wdXRlZFtrZXldID0gdGhpcy5fY29tcHV0ZWRba2V5XS5iaW5kKHRoaXMpO1xuXHRcdH1cblxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX21ldGhvZHMpIHtcblx0XHRcdGxldCBuYW1lID0gdGhpcy5fbWV0aG9kc1trZXldO1xuXHRcdFx0dGhpc1tuYW1lXSA9IHRoaXNbbmFtZV0uYmluZCh0aGlzKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIENvbmZpZ1xuXHQgKi9cblxuXHQvLyBCYXNpYy5wcm90b3R5cGUuc2V0TWV0aG9kcyA9IGZ1bmN0aW9uKG1ldGhvZHMgPSB7fSlcblx0Ly8ge1xuXHQvLyBcdHRoaXMuX21ldGhvZHMgPSBtZXRob2RzO1xuXHQvLyB9XG5cblx0LyoqXG5cdCAqIEhpZXJhcmNoeVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuc2V0Q2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZHJlbiA9IFtdKVxuXHR7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmFkZENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGQpXG5cdHtcblx0XHR0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnNldFBhcmVudCA9IGZ1bmN0aW9uKHBhcmVudCA9IG51bGwpXG5cdHtcblx0XHR0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblx0LyoqXG5cdCAqIFByb3BzXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5wcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmluaXRQcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX3Byb3BzKVxuXHRcdHtcblx0XHRcdGxldCBwcm9wID0gdGhpcy5fcHJvcHNba2V5XTtcblx0XHRcdGxldCB2YWx1ZSA9IG51bGw7XG5cdFx0XHRsZXQgdHlwZSA9IG51bGw7XG5cblx0XHRcdGlmKHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdC8vIHR5cGVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlID0gcHJvcC5kZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2RhdGFba2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NTbG90cyA9IGZ1bmN0aW9uKG5hbWUsIHNsb3RzKVxuXHR7XG5cdFx0dGhpcy5fc2xvdHNbbmFtZV0gPSBzbG90cztcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5wYXNzT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpXG5cdHtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NQcm9wcyA9IGZ1bmN0aW9uKHByb3BzKVxuXHR7XG5cdFx0Ly8gaWYodHlwZW9mIHRoaXMuX3Bhc3NlZFByb3BzW2NvbXBvbmVudC5oaWRdID09PSAndW5kZWZpbmVkJykge1xuXHRcdC8vIFx0dGhpcy5fcGFzc2VkUHJvcHNbY29tcG9uZW50LmhpZF0gPSB7fTtcblx0XHQvLyB9XG5cblx0XHRmb3IobGV0IGtleSBpbiBwcm9wcylcblx0XHR7XG5cdFx0XHRpZihwcm9wc1trZXldLl9vYnNlcnZhYmxlKSB7XG5cdFx0XHRcdHRoaXMuX2lzU3RhdGVmdWwgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9kYXRhW2tleV0gPSBwcm9wc1trZXldO1xuXHRcdFx0Ly8gaWYodHlwZW9mIHRoaXMuX2RhdGFba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdC8vIFx0dGhyb3cgbmV3IEVycm9yKGBbU2ludW91c10gQ29tcG9uZW50ICR7IHRoaXMubmFtZSB9IGFscmVhZHkgaGFzICR7IGtleSB9IHByb3BlcnR5YClcblx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHQvLyBcdHRoaXMuX2RhdGFba2V5XSA9IHByb3BzW2tleV07XG5cdFx0XHQvLyB9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIExvY2FsIGNvbXBvbmVudCBkYXRhXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuY29tcHV0ZWQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHQvKipcblx0ICogU3RhdGVmdWwgZGF0YVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuc3RhdGUgPSBmdW5jdGlvbihvKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIDEuIENyZWF0ZSBjaGlsZCBjb21wb25lbnRzIChkaWZmZXJlbnQgY29udGV4dClcblx0ICogMi4gUGFzcyBwcm9wc1xuXHQgKiAzLiBSZW5kZXJcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24oKSB7fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5jaGlsZENvbXBvbmVudHMgPSBmdW5jdGlvbigpIHt9XG5cblx0LyoqXG5cdCAqICBMaWZlIGN5Y2xlIGhvb2tzXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuaG9vayA9IGZ1bmN0aW9uKHR5cGUgPSAnbW91bnRlZCcpXG5cdHtcblx0XHRpZighdGhpcy5faG9va3MuaW5jbHVkZXModHlwZSkpIHtcblx0XHRcdHRoaXMuX2hvb2tzLnB1c2godHlwZSk7XG5cdFx0fVxuXG5cdFx0aWYodGhpc1t0eXBlXSkge1xuXHRcdFx0dGhpc1t0eXBlXS5jYWxsKHRoaXMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMuX2NoaWxkcmVuW2ldID09PSBfIHx8IHRoaXMuX2NoaWxkcmVuW2ldLl9ob29rcy5pbmNsdWRlcyh0eXBlKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoIXRoaXMuX2NoaWxkcmVuW2ldLl9mdW5jdGlvbmFsKSB7XG5cdFx0XHRcdHRoaXMuX2NoaWxkcmVuW2ldLmhvb2sodHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUubW91bnRlZCA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUudW5tb3VudGVkID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiBQcml2YXRlIEFQSSBmb3IgcmVuZGVyIGFuZCBoeWRyYXRlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHggPSBudWxsKVxuXHR7XG5cdFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdFx0XHRjdHggPSB0aGlzO1xuXHRcdH1cblxuXHRcdGguYmluZChjdHgpO1xuXG5cdFx0dGhpcy4kZWwgPSBjdHguX19yZW5kZXIoaC5iaW5kKGN0eCksIHtcblx0XHRcdGN0eCxcblx0XHRcdHN0YXRlbWVudCxcblx0XHRcdGxvb3AsXG5cdFx0XHRzbG90LFxuXHRcdFx0ZDogZHluYW1pYyxcblx0XHRcdGM6IGNvbXB1dGVkLFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuJGVsO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaHlkcmF0ZSA9IGZ1bmN0aW9uKGN0eCA9IG51bGwpXG5cdHtcblx0XHRpZihjdHggPT09IG51bGwpIHtcblx0XHRcdGN0eCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aC5iaW5kKGN0eCk7XG5cblx0XHRyZXR1cm4gY3R4Ll9faHlkcmF0ZShoKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblxuXHQvLyBCYXNpYy5wcm90b3R5cGUudGVtcGxhdGVCdWlsZGVyID0gZnVuY3Rpb24oaCwgb3B0cylcblx0Ly8ge1xuXHQvLyBcdHJldHVybiB0aGlzW2BfXyR7IG9wdHMucmVuZGVyIH1gXShoLCBvcHRzKTtcblx0Ly8gfVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmNvbXBvbmVudCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLmdldFVJRCA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0cmV0dXJuIGBoeWRyLSR7IFNpbnVvdXMuY3JlYXRlSElEKGluZGV4KSB9YDtcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKFwibmFtZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTsgfSk7XG5cblx0cmV0dXJuIEJhc2ljO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNpYztcbiIsImltcG9ydCB7IGgsIGhzLCBhcGkgfSBmcm9tICdzaW51b3VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYyhoLCB0YWcsIG9wdHMsIGNoaWxkcmVuKVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBlbCA9IHRhZygpO1xuXHRcdHJldHVybiBoKGVsLCBvcHRzLCBjaGlsZHJlbik7XG5cdH07XG5cbn0iLCJpbXBvcnQgeyBoIGFzIGhzIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcbmltcG9ydCB7IG9wdGlvbnMsICB9IGZyb20gJy4vJztcbmltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuXG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbntcblx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcblx0aWYoY2hpbGQuc2V0UGFyZW50KSB7XG5cdFx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaChlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxue1xuXHRlbCA9IGVsLnRvTG93ZXJDYXNlKCk7XG5cdC8vIGVsID0gY29tcHV0ZWQoKCkgPT4gKHR5cGVvZiBlbCA9PT0gJ2Z1bmN0aW9uJyA/IGVsIDogZWwpKTtcblxuXHQvLyBjb25zb2xlLmxvZygnWyBGRiBdJywgZWwsIHRoaXMpXG5cdGxldCBkeW5hbWljQXR0cnMgPSBmYWxzZTtcblxuXHRsZXQgcmVhZHlPcHRpb25zID0gb3B0aW9ucyhvcHRzKTtcblx0Ly8gSWYgSFRNTCB0YWcgcmVuZGVyXG5cdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcblx0XHRyZXR1cm4gaHMoZWwsIHJlYWR5T3B0aW9ucywgY2hpbGRyZW4pO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0Q29tcG9uZW50KGVsKTtcblxuXHQvLyBjb25zb2xlLmxvZyh0aGlzKVxuXHRyZWdpc3RlckNoaWxkcmVuKHRoaXMsIGNvbXBvbmVudCk7XG5cblx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudC5yZW5kZXIoe1xuXHRcdFx0b3B0aW9uczogb3B0cyxcblx0XHRcdF9zbG90czogcmVhZHlPcHRpb25zLiRzbG90cyxcblx0XHR9KTtcblx0fVxuXG5cdGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG5cdH1cblxuXHRmb3IobGV0IGtleSBpbiBvcHRzLiRzbG90cykge1xuXHRcdGNvbXBvbmVudC5wYXNzU2xvdHMoa2V5LCBvcHRzLiRzbG90c1trZXldKTtcdFxuXHR9XG5cblx0Y29tcG9uZW50LnBhc3NPcHRpb25zKG9wdHMpO1xuXG5cdHJldHVybiBjb21wb25lbnQucmVuZGVyKCk7XG59IiwiaW1wb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJ0BzaW51b3VzL2xhenknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbXBvbmVudCwgbGF5b3V0LCB0aW1lQmVuY2htYXJrID0gKCkgPT4ge30sIGNhbGxiYWNrID0gbnVsbCkge1xuXG4gICAgbGF5b3V0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgbG9hZENvbXBvbmVudChjb21wb25lbnQsIChpbnN0YW5jZSkgPT4ge1xuXG4gICAgXHR0aW1lQmVuY2htYXJrKCdSZW5kZXInKTtcblxuXHRcdGxheW91dC5hcHBlbmQoaW5zdGFuY2UucmVuZGVyKCkpO1xuXHRcdGluc3RhbmNlLmhvb2soJ21vdW50ZWQnKTtcblxuXHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjayhpbnN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0dGltZUJlbmNobWFyaygnUmVuZGVyJyk7XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH0pO1xufSIsIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvb3AoY29uZGl0aW9uLCBmbilcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cblx0XHRsZXQgbG9vcF9jb25kaXRpb24gPSB0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nID8gY29uZGl0aW9uKCkgOiBjb25kaXRpb247XG5cblx0XHRmb3IobGV0IGtleSBpbiBsb29wX2NvbmRpdGlvbilcblx0XHR7XG5cdFx0XHRsZXQgaXRlbSA9IGxvb3BfY29uZGl0aW9uW2tleV07XG5cdFx0XHRyZXN1bHQucHVzaChmbihpdGVtLCBrZXkpKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXHQvLyBkLl9ub2RlID0gdHJ1ZTtcblxuXHRyZXR1cm4gZDtcbn0iLCJpbXBvcnQgeyBvYnNlcnZhYmxlIGFzIHNpbnVvdXNPYnNlcnZhYmxlLCBjb21wdXRlZCBhcyBzaW51b3VzQ29tcHV0ZWQgfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU9ic2VlcnZhYmxlKGZuKVxue1xuXHRmbi5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cdHJldHVybiBmbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkKHYsIGJpbmRpbmcgPSBmYWxzZSkge1xuXG5cdGxldCBkO1xuXHRcblx0aWYoYmluZGluZykge1xuXHRcdGQgPSBzaW51b3VzQ29tcHV0ZWQodi5iaW5kKHRoaXMpKTtcblx0fSBlbHNlIHtcblx0XHRkID0gc2ludW91c0NvbXB1dGVkKHYpO1xuXHR9XG5cblx0bWFrZU9ic2VlcnZhYmxlKGQpO1xuXG5cdHJldHVybiBkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2YWJsZSh2LCBiaW5kaW5nID0gZmFsc2UpXG57XG5cdC8vIGxldCBvYnMgPSBudWxsO1xuXHQvLyBsZXQgaW5kZXggPSAwO1xuXG5cdC8vIGxldCBkYXRhID0gKHYpID0+IHtcblx0Ly8gXHRjb25zb2xlLmxvZyhzZWVkLCB2LCBpbmRleClcblx0Ly8gXHRpZih0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0Ly8gXHRcdGlmKGluZGV4ID09PSAwKSB7XG5cdC8vIFx0XHRcdGluZGV4Kys7XG5cdC8vIFx0XHRcdHJldHVybiBzZWVkO1xuXHQvLyBcdFx0fVxuXG5cdC8vIFx0XHRyZXR1cm4gb2JzKCk7XG5cdC8vIFx0fVxuXG5cdC8vIFx0Ly8gaWYoaW5kZXggPT09IDApIHtcblx0Ly8gXHQvLyBcdGluZGV4Kys7XG5cdC8vIFx0Ly8gXHRyZXR1cm4gdjtcblx0Ly8gXHQvLyB9XG5cblx0Ly8gXHQvLyBpZihvYnMgPT09IG51bGwpIHtcblx0Ly8gXHQvLyBcdG9icyA9IHNpbnVvdXNPYnNlcnZhYmxlKHYpO1xuXHQvLyBcdC8vIH1cblx0Ly8gfVxuXG5cdGxldCBkID0gc2ludW91c09ic2VydmFibGUodik7XG5cblx0XG5cdG1ha2VPYnNlZXJ2YWJsZShkKTtcblxuXHRyZXR1cm4gZDtcbn0iLCJmdW5jdGlvbiBhcmdUb1N0cmluZygpXG57XG5cdGxldCBzdHIgPSAnJztcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCB2YWx1ZSA9IGFyZ3VtZW50c1tpXTtcblx0XHRcblx0XHRpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHZhbHVlID0gdmFsdWUoKTtcblx0XHR9XG5cblx0XHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IobGV0IGtleSBpbiB2YWx1ZSkge1xuXHRcdFx0XHRpZih2YWx1ZVtrZXldKSB7XG5cdFx0XHRcdFx0c3RyICs9IGAgJHsga2V5IH1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0ciArPSBgICR7dmFsdWV9YDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFyZ1RvT2JqZWN0KClcbntcblx0bGV0IHN0ciA9ICcnO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaV1ba2V5XTtcblx0XHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXNba2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogUGFyc2UgY2xhc3Nlc1xuICogQHBhcmFtICB7W3R5cGVdfSBzdGF0aWMgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1t0eXBlXX0gZHluYW1pYyBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiBjbGFzc2VzKHN0ciA9IG51bGwsIGR5bmFtaWMgPSBudWxsKVxue1xuXHRpZihzdHIgPT09IG51bGwgJiYgZHluYW1pYyA9PT0gbnVsbCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGlmKHN0ciA9PT0gbnVsbCkge1xuXHRcdHN0ciA9ICcnO1xuXHR9XG5cdFxuXHRpZih0eXBlb2YgZHluYW1pYyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGR5bmFtaWMgPSBkeW5hbWljKCk7XG5cdH1cblxuXHRpZighQXJyYXkuaXNBcnJheShkeW5hbWljKSkge1xuXHRcdGR5bmFtaWMgPSBbZHluYW1pY107XG5cdH1cblxuXHRzdHIgKz0gYXJnVG9TdHJpbmcuYXBwbHkodGhpcywgZHluYW1pYyk7XG5cdFxuXHQvLyBjb25zb2xlLmxvZyhzdHIpO1xuXG5cdHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogU3R5bGVzXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9iaiAgICAgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7W3R5cGVdfSBkeW5hbWljIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbmZ1bmN0aW9uIG1ha2VTdHlsZVByb3AobmFtZSlcbntcblx0cmV0dXJuIG5hbWVcblx0XHQucmVwbGFjZSgvXFwuPyhbQS1aXSspL2csIGZ1bmN0aW9uICh4LHkpIHtcblx0XHRcdHJldHVybiBcIi1cIiArIHkudG9Mb3dlckNhc2UoKVxuXHRcdH0pXG5cdFx0LnJlcGxhY2UoL14tLywgXCJcIik7XG59XG5cbmZ1bmN0aW9uIHN0eWxlcyhvYmogPSB7fSwgZHluYW1pYyA9IG51bGwpXG57XG5cdGxldCByZWFkeVN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIG9iaik7XG5cblx0aWYodHlwZW9mIGR5bmFtaWMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRkeW5hbWljID0gZHluYW1pYygpO1xuXHR9XG5cblx0aWYoIUFycmF5LmlzQXJyYXkoZHluYW1pYykpIHtcblx0XHRkeW5hbWljID0gW2R5bmFtaWNdO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkeW5hbWljLmxlbmd0aDsgaSsrKSB7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gZHluYW1pY1tpXSkge1xuXHRcdFx0bGV0IHZhbHVlID0gZHluYW1pY1tpXVtrZXldO1xuXHRcdFx0XG5cdFx0XHRpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmVhZHlTdHlsZXNbbWFrZVN0eWxlUHJvcChrZXkpXSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZWFkeVN0eWxlcztcbn1cblxubGV0IGNsb25lT3B0aW9ucyA9IFsnX3MnLCAnJHNsb3RzJ107XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ3NzKHJlYWR5T3B0aW9ucywgb3B0aW9ucylcbntcblx0aWYob3B0aW9ucy5zdGF0aWNDbGFzcyB8fCBvcHRpb25zLmNsYXNzKSB7XG5cdFx0cmVhZHlPcHRpb25zLmNsYXNzID0gY2xhc3Nlcy5iaW5kKHRoaXMsIG9wdGlvbnMuc3RhdGljQ2xhc3MgfHwgbnVsbCwgb3B0aW9ucy5jbGFzcyB8fCBudWxsKTtcblx0fVxuXG5cdGlmKG9wdGlvbnMuc3RhdGljU3R5bGUgfHwgb3B0aW9ucy5zdHlsZSkge1xuXHRcdHJlYWR5T3B0aW9ucy5zdHlsZSA9IHN0eWxlcy5iaW5kKHRoaXMsIG9wdGlvbnMuc3RhdGljU3R5bGUgfHwge30sIG9wdGlvbnMuc3R5bGUgfHwgbnVsbCk7XG5cdH1cblxuXHRyZXR1cm4gcmVhZHlPcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU9wdGlvbihvcHRpb24sIHNob3VsZENsb25lID0gdHJ1ZSlcbntcblx0bGV0IHJlYWR5T3B0aW9uID0ge307XG5cblx0aWYob3B0aW9uLm9uKSB7XG5cdFx0Zm9yKGxldCBrZXkgaW4gb3B0aW9uLm9uKSB7XG5cdFx0XHRyZWFkeU9wdGlvbltgb24ke2tleX1gXSA9IG9wdGlvbi5vbltrZXldO1xuXHRcdH1cblx0fVxuXG5cdGlmKG9wdGlvbi5rZXkpIHtcblx0XHRyZWFkeU9wdGlvblsnZGF0YS1rZXknXSA9IG9wdGlvbi5rZXk7XG5cdH1cblxuXHRtYWtlQ3NzKHJlYWR5T3B0aW9uLCBvcHRpb24pO1xuXG5cdGlmKHNob3VsZENsb25lKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBuYW1lID0gY2xvbmVPcHRpb25zW2ldO1xuXHRcdFx0aWYob3B0aW9uW25hbWVdKSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9uW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVhZHlPcHRpb247XG59XG5cbmNvbnN0IEFzc2lnbk9iamVjdE9wdGlvbnMgPSBbJ3N0YXRpY1N0eWxlJywgJ2F0dHJzJywgJ29uJ107XG5jb25zdCBBc3NpZ25WYWx1ZU9wdGlvbnMgPSBbJ3N0eWxlJywgJ2NsYXNzJ107XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU9wdGlvbnMob3B0aW9ucylcbntcblx0bGV0IHJlYWR5T3B0aW9ucyA9IHt9O1xuXHRsZXQgc2hvdWxkQmVNZXJnZWQgPSBmYWxzZTtcblxuXHRpZihBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcblx0XHRcdGlmKG9wdGlvbnNbaV0gPT09IG51bGwpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9uc1tpXSk7XG5cblx0XHRcdGlmKGtleXMubGVuZ3RoID09PSAxICYmIGtleXMuaW5jbHVkZXMoJyRzbG90cycpKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihpID4gMCkge1xuXHRcdFx0XHRzaG91bGRCZU1lcmdlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGlmKCFzaG91bGRCZU1lcmdlZCkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnNbMV07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBvcHRpb25zO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IG9wdGlvbiA9IG9wdGlvbnNbaV1cblx0XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBBc3NpZ25PYmplY3RPcHRpb25zLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRsZXQgbmFtZSA9IEFzc2lnbk9iamVjdE9wdGlvbnNbal07XG5cdFx0XHRcblx0XHRcdGlmKCFvcHRpb25bbmFtZV0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFyZWFkeU9wdGlvbnNbbmFtZV0pIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zW25hbWVdID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGZvcihsZXQgcHJvcCBpbiBvcHRpb25bbmFtZV0pIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zW25hbWVdW3Byb3BdID0gb3B0aW9uW25hbWVdW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgQXNzaWduVmFsdWVPcHRpb25zLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRsZXQgbmFtZSA9IEFzc2lnblZhbHVlT3B0aW9uc1tqXTtcblxuXHRcdFx0aWYoIW9wdGlvbltuYW1lXSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIXJlYWR5T3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV0gPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0cmVhZHlPcHRpb25zW25hbWVdID0gcmVhZHlPcHRpb25zW25hbWVdLmNvbmNhdChvcHRpb25bbmFtZV0pO1xuXHRcdH1cblxuXHRcdGlmKG9wdGlvbi5fcykge1xuXHRcdFx0cmVhZHlPcHRpb25zLl9zID0gb3B0aW9uLl9zO1xuXHRcdH1cblxuXHRcdGlmKG9wdGlvbi5rZXkpIHtcblx0XHRcdHJlYWR5T3B0aW9ucy5rZXkgPSBvcHRpb24ua2V5O1xuXHRcdH1cblxuXHRcdGlmKG9wdGlvbi5zdGF0aWNDbGFzcykge1xuXHRcdFx0aWYoIXJlYWR5T3B0aW9ucy5zdGF0aWNDbGFzcykge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnMuc3RhdGljQ2xhc3MgPSBvcHRpb24uc3RhdGljQ2xhc3M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnMuc3RhdGljQ2xhc3MgKz0gJyAnICsgb3B0aW9uLnN0YXRpY0NsYXNzO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZWFkeU9wdGlvbnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wdGlvbnMob3B0aW9ucywgc2hvdWxkQ2xvbmUgPSB0cnVlKVxue1xuXHRsZXQgcmVhZHlPcHRpb25zID0gbWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuXG5cdHJldHVybiBtYWtlT3B0aW9uKHJlYWR5T3B0aW9ucywgc2hvdWxkQ2xvbmUpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsb3QoY29udGV4dCwgaCwgbmFtZSwgdGFnLCBvcHRpb25zLCBkZWZhdWx0Q2hpbGRyZW4pXG57XG5cdC8vIGNvbnRleHQuX19zbG90c1xuXHRcblx0bGV0IGNoaWxkcmVuID0gZGVmYXVsdENoaWxkcmVuO1xuXG5cdGlmKGNvbnRleHQuX3Nsb3RzW25hbWVdKSB7XG5cdFx0Y2hpbGRyZW4gPSBjb250ZXh0Ll9zbG90c1tuYW1lXTtcblx0fVxuXHRcblx0Ly8gY29uc29sZS5sb2cobmFtZSwgdGFnLCBvcHRpb25zLCBkZWZhdWx0Q2hpbGRyZW4sIGNoaWxkcmVuLCBjb250ZXh0Ll9zbG90cylcblx0aWYodGFnID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuO1xuXHR9XG5cblx0cmV0dXJuIGgodGFnLCBvcHRpb25zLCBjaGlsZHJlbik7XG59IiwiaW1wb3J0IHsgaCB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlbWVudCgpXG57XG5cdGxldCBkID0gKCkgPT4ge1xuXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCAlIDMgIT09IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU3RhdGVtZW50IHNob3VsZCBiZSBvZGQgbnVtYmVyJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xuXHRcdGxldCBmb3VuZENvbmRpdGlvbiA9IGZhbHNlO1xuXHRcdC8vIHZhbHVlXG5cdFx0bGV0IGNoaWxkSW5kZXggPSAwO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0bGV0IHNpemUgPSBhcmd1bWVudHNbaSArIDFdO1xuXHRcdFx0bGV0IHZhbHVlID0gYXJndW1lbnRzW2kgKyAyXTtcblx0XHRcdGxldCBub2RlID0gbnVsbDtcblxuXHRcdFx0Y29uZGl0aW9uID0gdHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmRpdGlvbigpIDogY29uZGl0aW9uO1xuXG5cdFx0XHRpZihjb25kaXRpb24gJiYgIWZvdW5kQ29uZGl0aW9uKSB7XG5cdFx0XHRcdGZvdW5kQ29uZGl0aW9uID0gdHJ1ZTtcblx0XHRcdFx0bm9kZSA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb25zb2xlLndhcm4oY29uZGl0aW9uLCBzaXplLCB2YWx1ZSwgbm9kZSk7XG5cdFx0XHQvLyBQYXNzIGZhaWxlZCBzdGV0ZW1lbnQgY29uZGl0aW9uXG5cdFx0XHQvLyBOb3JtaWxpemUgaW5kZXggdGhhdCB3aWxsIGJlIHVzZWQgaW4gcmVwbGFjaW5nIHBsYWNlaG9sZGVyIChiZWxvdylcblx0XHRcdGlmKG5vZGUgPT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFub2RlLl9vYnNlcnZhYmxlKSB7XG5cdFx0XHRcdG5vZGUgPSBub2RlKGgpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gcmVwbGFjZSBwbGFjZWhvbGRlciB3aXRoIG5vZGVcblx0XHRcdC8vIEFuZCBjb3JyZWN0IGluZGV4XG5cdFx0XHRpZihzaXplID4gMSkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGVbal0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Ly8gY29uc29sZS5sb2cocmVzdWx0KTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRkLl9vYnNlcnZhYmxlID0gdHJ1ZTtcblxuXHRyZXR1cm4gZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWx1ZSh2YWx1ZSlcbntcblx0aWYodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIHZhbHVlKCk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59IiwiaW1wb3J0IHsgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnQHNpbnVvdXMvY29tcGlsZXIvc3JjL2VtcHR5JztcbmltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuaW1wb3J0IG1hcCBmcm9tICdzaW51b3VzL21hcCc7XG5pbXBvcnQgeyBvcHRpb25zIGFzIHBhcnNlT3B0aW9ucywgaCB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnQHNpbnVvdXMvbGF6eSc7XG4vLyBpbXBvcnQgc3Vic2NyaWJlIGZyb20gJy4vc3Vic2NyaWJlJztcbmltcG9ydCBoeWRyYXRlUHJvcHMgZnJvbSAnLi9wcm9wZXJ0eSc7XG5cbmxldCBPQlNFUlZFUjtcbmxldCBTVE9SQUdFID0ge307XG5cbmxldCBTVUJTQ1JJQkVSUyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRTdWJzY3JpYmVyKGZuKVxue1xuXHRjb25zb2xlLmxvZyhmbiwgU1VCU0NSSUJFUlMpXG5cdFNVQlNDUklCRVJTLnB1c2goZm4pO1xufVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlUHJvcHMoZWwsIG9wdHMpXG4vLyB7XG5cdC8vIGlmKCFvcHRzLl9zKSB7XG5cdC8vIFx0cmV0dXJuO1xuXHQvLyB9XG5cbi8vIFx0YXBpLnByb3BlcnR5KGVsLCBvcHRzLCBudWxsKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZVRhZyhwYXJlbnQsIGNoaWxkcmVuLCBjdXJyZW50SW5kZXgsIHZhbHVlKVxuLy8ge1xuLy8gXHRsZXQgZWwgPSBjaGlsZHJlbltjdXJyZW50SW5kZXhdO1xuXHRcbi8vIFx0bGV0IG5vZGVzID0gdmFsdWUoKTtcblxuLy8gXHRpZihBcnJheS5pc0FycmF5KG5vZGVzKSkge1xuXG4vLyBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuLy8gXHRcdFx0bGV0IGNoaWxkID0gbm9kZXNbaV07XG4vLyBcdFx0XHRpZih0eXBlb2YgY2hpbGQgPT09ICdmdW5jdGlvbicpIHtcbi8vIFx0XHRcdFx0Y2hpbGQgPSBjaGlsZCgpO1xuLy8gXHRcdFx0fVxuLy8gXHRcdFx0Ly8gY29uc29sZS5sb2cocGFyZW50LCAgY2hpbGQuc2l6ZSlcbi8vIFx0XHRcdC8vIGFwaS5pbnNlcnQocGFyZW50LCBjaGlsZCwgY2hpbGRyZW5bY3VycmVudEluZGV4ICsgaV0pO1xuLy8gXHRcdFx0Ly8gcGFyZW50LnJlcGxhY2VDaGlsZChjaGlsZCwgY2hpbGRyZW5bY3VycmVudEluZGV4ICsgaV0pXG4vLyBcdFx0XHQvLyBjaGlsZHJlbltjdXJyZW50SW5kZXggKyBpXS5yZXBsYWNlV2l0aChjaGlsZCk7XG4vLyBcdFx0fVxuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdGFwaS5pbnNlcnQoZWwsIG5vZGVzLCBudWxsKTtcbi8vIFx0fVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlQ2hpbGRyZW4obm9kZSwgY2hpbGRyZW4pXG4vLyB7XG4vLyBcdGxldCBiaW5kQ2hpbGRyZW4gPSBbXTtcblxuLy8gXHRpZihub2RlICE9PSBudWxsKSB7XG4vLyBcdFx0YmluZENoaWxkcmVuID0gZmlsdGVyQ2hpbGROb2Rlcyhub2RlKTtcbi8vIFx0fVxuXG4vLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbi8vIFx0XHRpZihjaGlsZHJlbltpXSA9PT0gXykge1xuLy8gXHRcdFx0Y29udGludWU7XG4vLyBcdFx0fVxuLy8gXHRcdC8vIGNvbnNvbGUuZXJyb3IoYmluZENoaWxkcmVuW2ldLCBjaGlsZHJlbltpXSk7XG4vLyBcdFx0aHlkcmF0ZVRhZyhub2RlLCBiaW5kQ2hpbGRyZW4sIGksIGNoaWxkcmVuW2ldKTtcbi8vIFx0fVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRTbG90Tm9kZShlbCwgcGF0aClcbi8vIHtcbi8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4vLyBcdFx0ZWwgPSBlbC5jaGlsZE5vZGVzW3BhdGhbaV1dO1xuLy8gXHR9XG5cbi8vIFx0cmV0dXJuIGVsO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBlbCwgb3B0cyA9IHt9LCBzbG90cylcbi8vIHtcbi8vIFx0aWYoIW9wdHNbJ2lkJ10pIHtcbi8vIFx0XHRyZXR1cm47XG4vLyBcdH1cblxuLy8gXHQvLyBpZihvcHRzWydpZCddID09PSAnaHlkci0xMycpIHtcbi8vIFx0Ly8gXHRvcHRzWydpZCddID0gJ2h5ZHItNic7XG4vLyBcdC8vIH1cblxuLy8gXHQvLyBpZihvcHRzWydpZCddID09PSAnaHlkci0zMCcpIHtcbi8vIFx0Ly8gXHRvcHRzWydpZCddID0gJ2h5ZHItMjEnO1xuLy8gXHQvLyB9XG5cbi8vIFx0bGV0IGJpbmROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7IG9wdHNbJ2lkJ10gfWApO1xuXG4vLyBcdGxldCBzbG90Tm9kZXMgPSB7fVxuXG4vLyBcdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG4vLyBcdFx0aWYoY29tcG9uZW50Ll9zbG90c1BhdGhba2V5XSkge1xuLy8gXHRcdFx0bGV0IG5vZGUgPSBnZXRTbG90Tm9kZShiaW5kTm9kZSwgY29tcG9uZW50Ll9zbG90c1BhdGhba2V5XSlcbi8vIFx0XHRcdHNsb3ROb2Rlc1trZXldID0gbm9kZTtcbi8vIFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAke2tleX0gc2xvdCBuYW1lc3BhY2UgZGVmaW5lZGApO1xuLy8gXHRcdH1cbi8vIFx0fVxuXG4vLyBcdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuLy8gXHRcdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG4vLyBcdFx0XHRsZXQgbm9kZSA9IHNsb3ROb2Rlc1trZXldO1xuLy8gXHRcdFx0bGV0IGNoaWxkcmVuU2xvdHMgPSBzbG90c1trZXldO1xuXHRcdFx0XG4vLyBcdFx0XHRpZihub2RlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4vLyBcdFx0XHRcdG5vZGUgPSBbbm9kZV07XG4vLyBcdFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0XHRub2RlID0gbm9kZS5jaGlsZE5vZGVzO1xuLy8gXHRcdFx0fVxuXG4vLyBcdFx0XHRpZihjaGlsZHJlblNsb3RzLmxlbmd0aCA+IG5vZGUubGVuZ3RoKSB7XG4vLyBcdFx0XHRcdHRocm93IG5ldyBFcnJvcignU2xvdCBoeWRyYXRpb24gbGVuZ3RoIG1pc21hdGNoJyk7XG4vLyBcdFx0XHR9XG5cbi8vIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5TbG90cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcbi8vIFx0XHRcdFx0YXBpLmluc2VydChub2RlW2ldLCBjaGlsZHJlblNsb3RzW2ldKCksIG51bGwpO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH1cbi8vIFx0fSk7XG5cdFxuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG4vLyB7XG4vLyBcdGxldCBiaW5kTm9kZTtcbi8vIFx0Y29uc29sZS5sb2codGhpcywgZWwsIG9wdHMsIGNoaWxkcmVuKVxuXG4vLyBcdC8vIGlmKHRoaXMubm9kZSkge1xuLy8gXHQvLyBcdGJpbmROb2RlID0gdGhpcy5ub2RlO1xuLy8gXHQvLyB9XG5cbi8vIFx0aWYoIW9wdHNbJ2lkJ10pIHtcbi8vIFx0XHRyZXR1cm47XG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0YmluZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHsgb3B0c1snaWQnXSB9YCk7XG4vLyBcdH1cblxuLy8gXHQvLyBjb25zb2xlLmxvZyh0aGlzKTtcbi8vIFx0Ly8gdGhpcy5jdHguX2VsX2luZGV4Kys7XG5cbi8vIFx0aWYoYmluZE5vZGUgPT09IG51bGwpIHtcbi8vIFx0XHRyZXR1cm47XG4vLyBcdH1cblx0XG5cdC8vIGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHQvLyBcdGh5ZHJhdGVQcm9wcyhiaW5kTm9kZSwgb3B0cyk7XG5cdC8vIFx0aHlkcmF0ZUNoaWxkcmVuKGJpbmROb2RlLCBjaGlsZHJlbik7XG5cdC8vIH0pO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG4vLyB7XG4vLyBcdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG4vLyBcdGlmKGNoaWxkLnNldFBhcmVudCkge1xuLy8gXHRcdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBjb21waWxlcihlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxuLy8ge1xuLy8gXHRvcHRpb25zKHRoaXMsIG9wdHMpO1xuXHRcbi8vIFx0aWYoIVNpbnVvdXMuaGFzQ29tcG9uZW50KGVsKSkge1xuLy8gXHRcdGh5ZHJhdGUuY2FsbCh0aGlzLCBlbCwgb3B0cywgY2hpbGRyZW4pO1xuLy8gXHRcdHJldHVybiBfO1xuLy8gXHR9XG5cdFx0XG4vLyBcdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldEh5ZHJhdGVDb21wb25lbnQoZWwsIG9wdHMpO1xuXG4vLyBcdC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudCwgZWwsIG9wdHMpXG4vLyBcdGlmKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuLy8gXHRcdHJldHVybiBfO1xuLy8gXHR9XG5cbi8vIFx0cmVnaXN0ZXJDaGlsZHJlbih0aGlzLmN0eCwgY29tcG9uZW50KTtcblxuLy8gXHRpZihjb21wb25lbnQuX2Z1bmN0aW9uYWwpIHtcbi8vIFx0XHQvLyBjb25zb2xlLndhcm4oJ3N0YXJ0IGh5ZHJhdGlvbicpO1xuLy8gXHRcdHJldHVybiBjb21wb25lbnQuaHlkcmF0ZSh7XG4vLyBcdFx0XHRnZXRVSUQoKSB7XG4vLyBcdFx0XHRcdHJldHVybiAtMTtcbi8vIFx0XHRcdH0sXG4vLyBcdFx0XHRfc2xvdHM6IG9wdHMuJHNsb3RzLFxuLy8gXHRcdH0sIGNvbXBpbGVyKTtcbi8vIFx0fVxuXG4vLyBcdGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuLy8gXHRcdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG4vLyBcdH1cblxuLy8gXHRpZihvcHRzLiRzbG90cykge1xuLy8gXHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIGVsLCBvcHRzLCBvcHRzLiRzbG90cyk7XG4vLyBcdH1cblxuLy8gXHRyZXR1cm4gaW5pdENvbXBvbmVudChjb21wb25lbnQpO1xuLy8gfVxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVQcm9wcyhlbCwgb3B0aW9ucylcbi8vIHtcbi8vIFx0aWYob3B0aW9ucy5fcykge1xuLy8gXHRcdC8vIGNvbnNvbGUubG9nKGVsLCAnUHJlcGFyZSBvcHRpb25zJywgb3B0aW9ucyk7XG4vLyBcdFx0Ly8gb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zLCBmYWxzZSk7XG4vLyBcdFx0Ly8gY29uc29sZS5sb2coZWwsICdQcmVwYXJlIG9wdGlvbnMgMicsIG9wdGlvbnMpO1xuLy8gXHRcdHByb3BlcnR5KGVsLCBvcHRpb25zKTtcblxuLy8gXHRcdC8vIGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuLy8gXHRcdC8vIFx0Ly8gY29uc29sZS5sb2coZWwsICdDaGFuZ2Ugb3B0aW9ucycpO1xuLy8gXHRcdC8vIFx0YXBpLnByb3BlcnR5KGVsLCBvcHRpb25zLCBudWxsKTtcbi8vIFx0XHQvLyB9KTtcbi8vIFx0fVxuLy8gfVxuXG5mdW5jdGlvbiBoeWRyYXRlSChjb250ZXh0LCBlbCwgb3B0aW9ucywgY2hpbGRyZW4pXG57XG5cdGh5ZHJhdGVQcm9wcyhjb250ZXh0LCBlbCwgb3B0aW9ucyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGh5ZHJhdGUoY29udGV4dCwgZWwuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5baV0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVTdGF0ZW1lbnQoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0bGV0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcblx0bGV0IHN0YXJ0SW5kZXggPSAwO1xuXG5cdHdoaWxlKChub2RlID0gbm9kZS5wcmV2aW91c1NpYmxpbmcpICE9IG51bGwpXG5cdFx0c3RhcnRJbmRleCsrO1xuXHRcblx0bGV0IHN0YXRlbWVudEFyZ3MgPSBhcmdzLmE7XG5cblx0ZnVuY3Rpb24gaGlkZU5vZGVzKGNoaWxkcmVuLCBzdGFydEluZGV4LCBsZW5ndGgpXG5cdHtcblx0XHRmb3IgKHZhciBqID0gc3RhcnRJbmRleDsgaiA8PSBsZW5ndGg7IGorKykge1xuXHRcdFx0bGV0IG5vZGUgPSBjaGlsZHJlbltqXTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdoaWRlJywgaiwgbm9kZSk7XG5cdFx0XHRpZihub2RlLm5vZGVUeXBlICE9PSBOb2RlLkNPTU1FTlRfTk9ERSkge1xuXHRcdFx0XHRub2RlLnJlcGxhY2VXaXRoKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcblx0XHRcdH1cblxuXHRcdFx0bm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdH1cblx0fVxuXG5cdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdGxldCBjdXJyZW50SW5kZXggPSBzdGFydEluZGV4O1xuXHRcdGxldCBmb3VuZENvbmRpdGlvbiA9IGZhbHNlO1xuXHRcdFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGVtZW50QXJncy5sZW5ndGg7IGkrPSAzKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gc3RhdGVtZW50QXJnc1tpXTtcblx0XHRcdGxldCBzaXplID0gc3RhdGVtZW50QXJnc1tpICsgMV07XG5cdFx0XHRsZXQgY29tcG9uZW50ID0gc3RhdGVtZW50QXJnc1tpICsgMl07XG5cblx0XHRcdGxldCBjdXJyZW50Tm9kZSA9IHBhcmVudC5jaGlsZE5vZGVzW2N1cnJlbnRJbmRleF07XG5cblx0XHRcdGNvbmRpdGlvbiA9IHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicgPyBjb25kaXRpb24oKSA6IGNvbmRpdGlvbjtcblxuXHRcdFx0Ly8gY29uc29sZS5sb2coY3VycmVudE5vZGUsIGNvbmRpdGlvbiAmJiAhZm91bmRDb25kaXRpb24pO1xuXHRcdFx0aWYoY29uZGl0aW9uICYmICFmb3VuZENvbmRpdGlvbikge1xuXHRcdFx0XHRmb3VuZENvbmRpdGlvbiA9IHRydWU7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdzaG93JywgcGFyZW50LmNoaWxkTm9kZXNbY3VycmVudEluZGV4XSwgc2l6ZSk7XG5cdFx0XHRcdGlmKGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkNPTU1FTlRfTk9ERSkge1xuXHRcdFx0XHRcdC8vICByZW5kZXJcblx0XHRcdFx0XHRsZXQgbmV3Tm9kZSA9IGNvbXBvbmVudC5yKGguYmluZChjb250ZXh0KSk7XG5cdFx0XHRcdFx0Y3VycmVudE5vZGUucmVwbGFjZVdpdGgobmV3Tm9kZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gaHlkcmF0ZVxuXHRcdFx0XHRcdG1hcmtBc1JlYWR5KGN1cnJlbnROb2RlKTtcblx0XHRcdFx0XHRoeWRyYXRlKGNvbnRleHQsIGN1cnJlbnROb2RlLCBjb21wb25lbnQuaCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdbaGlkZV0nLCBwYXJlbnQuY2hpbGROb2RlcywgY3VycmVudEluZGV4LCBzaXplKTtcblx0XHRcdFx0aGlkZU5vZGVzKHBhcmVudC5jaGlsZE5vZGVzLCBjdXJyZW50SW5kZXgsIHNpemUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50SW5kZXggKz0gc2l6ZTtcblx0XHRcdC8vIGNvbnNvbGUud2FybihjdXJyZW50Tm9kZSwgY3VycmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nKVxuXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhjdXJyZW50Tm9kZSwgY29uZGl0aW9uLCAnc2tpcCcpO1xuXG5cdFx0XHRcblx0XHR9XG5cdH0pO1xuXHRcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZUxvb3AoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0bGV0IGNvbmRpdGlvbiA9IGFyZ3MuYztcblx0bGV0IHN0YXJ0Tm9kZSA9IG5vZGU7XG5cdGxldCBwcmV2Tm9kZSA9IG5vZGU7XG5cdGxldCBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXG5cdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdGxldCBsb29wX2NvbmRpdGlvbiA9IHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicgPyBjb25kaXRpb24oKSA6IGNvbmRpdGlvbjtcblx0XHRsZXQgY3VycmVudE5vZGUgPSBzdGFydE5vZGU7XG5cblx0XHRmb3IobGV0IGtleSBpbiBsb29wX2NvbmRpdGlvbilcblx0XHR7XG5cdFx0XHRsZXQgaXRlbSA9IGxvb3BfY29uZGl0aW9uW2tleV07XG5cdFx0XHRsZXQgaXRlbUtleSA9IGFyZ3MuayhpdGVtLCBrZXkpO1xuXHRcdFx0bGV0IGl0ZW1BcmdzO1xuXG5cdFx0XHRsZXQgc2hvdWxkUmVuZGVyID0gY3VycmVudE5vZGUgPT09IG51bGw7XG5cblx0XHRcdGlmKGN1cnJlbnROb2RlKSB7XG5cdFx0XHRcdGxldCBub2RlS2V5ID0gY3VycmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpO1xuXHRcdFx0XHRpZihub2RlS2V5ID09PSBpdGVtS2V5KSB7XG5cdFx0XHRcdFx0c2hvdWxkUmVuZGVyID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoc2hvdWxkUmVuZGVyKSB7XG5cdFx0XHRcdC8vIGxldCBuZXdOb2RlID0gYXJncy5yKGguYmluZChjb250ZXh0KSwgaXRlbSwga2V5KTtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIG1hcmtBc1JlYWR5KG5ld05vZGUpO1xuXHRcdFx0XHQvLyBtb2RpZnkgSCB3aXRoIEluZGV4IHRvIGNyZWF0ZSBjbGFzcyArIG1vdW50L3VubW91bnRcblx0XHRcdFx0aWYoY3VycmVudE5vZGUpIHtcblx0XHRcdFx0XHQvLyByZXBsYWNlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gcHJldk5vZGUuYWZ0ZXIobmV3Tm9kZSlcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBwcmV2Tm9kZSA9IG5ld05vZGU7XG5cdFx0XHRcdC8vIGNvbnRleHQuaG9vaygnbW91bnRlZCcpO1xuXHRcdFx0fSBlbHNlIHsgLy8gaWYoIWN1cnJlbnROb2RlLl9oeWRyYXRlZCkgXG5cdFx0XHRcdGl0ZW1BcmdzID0gYXJncy5oKGl0ZW0sIGtleSk7XG5cblx0XHRcdFx0bWFya0FzUmVhZHkoY3VycmVudE5vZGUpO1xuXG5cdFx0XHRcdGh5ZHJhdGUoY29udGV4dCwgY3VycmVudE5vZGUsIGl0ZW1BcmdzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIXNob3VsZFJlbmRlcikge1xuXHRcdFx0XHRwcmV2Tm9kZSA9IGN1cnJlbnROb2RlO1xuXHRcdFx0XHRjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRFbGVtZW50U2libGluZztcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufVxuXG4vKipcbiAqIE1heWJlIG5lZWQgc2FtZSBoeWRyYXRpb24gYWxnb3JpdGhtIGFzIHdpdGggcHJvcHNcbiAqIFNraXAgZmlyc3QgdGltZSBoeWRyYXRpb24gPz8/XG4gKi9cbmZ1bmN0aW9uIGh5ZHJhdGVUZXh0KGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGlmKGFyZ3MudCA9PT0gXykge1xuXHRcdHJldHVybjtcblx0fVxuXHRcblx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0YXBpLmluc2VydChub2RlLCBhcmdzLnQoKSwgbnVsbCk7XG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIGdldFNsb3ROb2RlKGVsLCB0YWcsIHBhdGgpXG57XG5cdGxldCBub2RlID0gZWw7XG5cblx0Zm9yICh2YXIgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG5cdFx0bm9kZSA9IG5vZGUuY2hpbGROb2Rlc1twYXRoW2ldXTtcblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVNsb3RzKGNvbnRleHQsIGVsLCBvcHRzID0ge30sIHNsb3RzKVxue1xuXHQvLyByZXR1cm47XG5cdC8vIEh5ZHJhdGUgcHJvcHMgb2YgbWFpbiBOb2RlXG5cdC8vIGh5ZHJhdGVQcm9wcyhjb250ZXh0LCBlbCwgb3B0cyk7XG5cdFxuXHRsZXQgYmluZGVkTm9kZXMgPSB7fVxuXG5cdGxldCBzbG90RGF0YSA9IGNvbnRleHQuX3Nsb3RzRGF0YTtcblxuXHQvLyBGaW5kIHNsb3QgYmluZGluZyBub2Rlc1xuXHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuXHRcdGlmKHNsb3REYXRhW2tleV0pIHtcblx0XHRcdGxldCBub2RlID0gZ2V0U2xvdE5vZGUoZWwsIHNsb3REYXRhW2tleV0udGFnLCBzbG90RGF0YVtrZXldLnBhdGgpO1xuXHRcdFx0YmluZGVkTm9kZXNba2V5XSA9IG5vZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gJHtrZXl9IHNsb3QgbmFtZXNwYWNlIGRlZmluZWRgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBIeWRyYXRlIHNsb3RzIHBlciBiaW5kZWQgdGFnXG5cdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG5cdFx0bGV0IGRhdGEgPSBzbG90RGF0YVtrZXldO1xuXHRcdGxldCBub2RlID0gYmluZGVkTm9kZXNba2V5XTtcblx0XHRsZXQgY2hpbGRyZW5TbG90cyA9IHNsb3RzW2tleV07XG5cdFx0bGV0IHN0YXJ0Tm9kZUluZGV4ID0gZGF0YS5pbmRleDtcblxuXHRcdGlmKHR5cGVvZiBub2RlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y29uc29sZS53YXJuKGVsLCBvcHRzLCBzbG90RGF0YSwgZWxbMF0pO1xuXHRcdH1cblxuXHRcdGlmKGNoaWxkcmVuU2xvdHMubGVuZ3RoID4gbm9kZS5sZW5ndGgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU2xvdCBoeWRyYXRpb24gbGVuZ3RoIG1pc21hdGNoJyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0Tm9kZUluZGV4OyBpIDwgY2hpbGRyZW5TbG90cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Ly8gY29uc29sZS5sb2cobm9kZS5jaGlsZE5vZGVzW2ldLCBjaGlsZHJlblNsb3RzW2ldKVxuXHRcdFx0aHlkcmF0ZShjb250ZXh0LCBub2RlLmNoaWxkTm9kZXNbaV0sIGNoaWxkcmVuU2xvdHNbaV0pO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIENvbnRleHQgc2V0dXBcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJDaGlsZHJlbihwYXJlbnQsIGNoaWxkKVxue1xuXHRpZihjaGlsZC5fZnVuY3Rpb25hbCkge1xuXHRcdHBhcmVudC5hZGRDaGlsZHJlbihfKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwYXJlbnQuYWRkQ2hpbGRyZW4oY2hpbGQpO1xuXHRjaGlsZC5zZXRQYXJlbnQocGFyZW50KTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVRhZyhjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRsZXQgZWwgPSBhcmdzLnQsXG5cdFx0b3B0cyA9IGFyZ3Mubyxcblx0XHRjaGlsZHJlbiA9IGFyZ3MuYztcblxuXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG5cdFx0aHlkcmF0ZUgoY29udGV4dCwgbm9kZSwgb3B0cywgY2hpbGRyZW4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldEh5ZHJhdGVDb21wb25lbnQoZWwsIG9wdHMpO1xuXG5cdGlmKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBfO1xuXHR9XG5cblx0cmVnaXN0ZXJDaGlsZHJlbihjb250ZXh0LCBjb21wb25lbnQpO1xuXG5cdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuXHRcdGxldCBuZXdBcmdzID0gY29tcG9uZW50Lmh5ZHJhdGUoe1xuXHRcdFx0X3Nsb3RzOiBvcHRzLiRzbG90cyxcblx0XHR9KTtcblxuXHRcdGlmKG9wdHMuJHNsb3RzKSB7XG5cdFx0XHRoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBub2RlLCBvcHRzLCBvcHRzLiRzbG90cyk7XG5cdFx0fVxuXG5cdFx0Ly8gY29uc29sZS5sb2cob3B0cylcblx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUsIG5ld0FyZ3MpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gc2V0dXAgY29tcG9uZW50XG5cdC8vIGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuXHQvLyBcdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG5cdC8vIH1cblx0Ly8gY29uc29sZS5sb2coY29tcG9uZW50LCBvcHRzLiRzbG90cylcblx0aWYob3B0cy4kc2xvdHMpIHtcblx0XHRoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBub2RlLCBvcHRzLCBvcHRzLiRzbG90cyk7XG5cdH1cblxuXHRjb21wb25lbnQucGFzc09wdGlvbnMob3B0cyk7XG5cblx0cmV0dXJuIGh5ZHJhdGUoY29tcG9uZW50LCBub2RlLCBjb21wb25lbnQuaHlkcmF0ZShjb21wb25lbnQpKTtcbn1cblxuLyoqXG4gKiBNYWluIGh5ZHJhdGlvbiBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBoeWRyYXRlKGNvbnRleHQsIG5vZGUsIGFyZ3MgPSBudWxsKVxue1xuXHQvLyByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHtcblx0XHRoeWRyYXRlSWRsZShjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0Ly8gfSwge1xuXHQvLyBcdHRpbWVvdXQ6IDAsXG5cdC8vIFx0cmVhZDogdHJ1ZVxuXHQvLyB9KTtcbn1cblxuZnVuY3Rpb24gbWFya0FzUmVhZHkobm9kZSlcbntcblx0bm9kZS5faHlkcmF0ZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlSWRsZShjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRpZihhcmdzID09PSBudWxsIHx8IG5vZGUgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnaCcpIHtcblx0XHQvLyBhcmdzLm9bJ2RhdGEtaHlkcmF0ZWQnXSA9IHRydWU7XG5cdFx0Ly8gYXJncy5vWydfcyddID0gdHJ1ZTtcblx0XHRoeWRyYXRlVGFnKGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ3QnKSB7XG5cdFx0aHlkcmF0ZVRleHQoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnbG9vcCcpIHtcblx0XHRoeWRyYXRlTG9vcChjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXG5cdGlmKGFyZ3MuX3QgPT09ICdzdGF0ZW1lbnQnKSB7XG5cdFx0aHlkcmF0ZVN0YXRlbWVudChjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXHRcblx0cmV0dXJuIF87XG5cdFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRIeWRyYXRpb24oY29tcG9uZW50LCBoeWRyYXRpb25Sb290LCB0aW1lQmVuY2htYXJrID0gKCkgPT4ge30sIGNhbGxiYWNrID0gbnVsbClcbntcblx0bG9hZENvbXBvbmVudChjb21wb25lbnQsIChpbnN0YW5jZSkgPT4ge1xuXG5cdFx0dGltZUJlbmNobWFyaygnSHlkcmF0aW9uJyk7XG5cblx0XHRsZXQgdHJlZSA9IFtpbnN0YW5jZV07XG5cblx0XHRTaW51b3VzLmNsZWFySElEKCk7XG5cblx0XHQvLyBsZXQgY29ubmVjdGVkTm9kZSA9IGZpbHRlckNoaWxkTm9kZXMoaHlkcmF0aW9uUm9vdCk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjb21wb25lbnQgPSB0cmVlW2ldO1xuXHRcdFx0bGV0IG5vZGUgPSBoeWRyYXRpb25Sb290LmNoaWxkTm9kZXNbaV07XG5cdFx0XHRsZXQgaHlkcmF0aW9uID0gY29tcG9uZW50Lmh5ZHJhdGUoY29tcG9uZW50KTtcblx0XHRcdFxuXHRcdFx0aHlkcmF0ZShjb21wb25lbnQsIG5vZGUsIGh5ZHJhdGlvbik7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGNvbnNvbGUubG9nKGluc3RhbmNlKTtcblx0XHRpbnN0YW5jZS5ob29rKCdtb3VudGVkJyk7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHRpbWVCZW5jaG1hcmsoJ0h5ZHJhdGlvbicpO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9KTtcblxufVxuXG4vKipcbiAqIEZpbHRlciBvdXQgd2hpdGVzcGFjZSB0ZXh0IG5vZGVzIHVubGVzcyBpdCBoYXMgYSBub3NraXAgaW5kaWNhdG9yLlxuICpcbiAqIEBwYXJhbSAge05vZGV9IHBhcmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZpbHRlckNoaWxkTm9kZXMocGFyZW50KSB7XG5cdHJldHVybiBwYXJlbnQuY2hpbGROb2Rlcztcblx0Ly8gY29uc29sZS53YXJuKHBhcmVudCwgcGFyZW50LmNoaWxkTm9kZXMpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKS5maWx0ZXIoXG4gICAgICAgIGVsID0+IGVsLm5vZGVUeXBlICE9PSAzIHx8IGVsLmRhdGEudHJpbSgpIHx8IGVsLl9ub3NraXBcbiAgICApO1xufVxuIiwiaW1wb3J0IHsgbWFrZUNzcywgbWVyZ2VPcHRpb25zIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcbmltcG9ydCB7IGFwaSB9IGZyb20gJ3NpbnVvdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoeWRyYXRlUHJvcHMoY29udGV4dCwgZWwsIG9wdGlvbnMpXG57XG5cblx0b3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhvcHRpb25zKTtcblxuXHRpZighb3B0aW9ucy5fcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBzdWJzY3JpYmVycyA9IFtdO1xuXHRsZXQgc3Vic2NyaWJlcnNfZmlyc3QgPSBbXTtcblxuXHRmdW5jdGlvbiBhZGRTdWJzY3JpYmVyKHZhbHVlLCBmbiwgc2tpcCA9IHRydWUpXG5cdHtcblx0XHRzdWJzY3JpYmVycy5wdXNoKHtcblx0XHRcdHZhbHVlLFxuXHRcdFx0Zm4sXG5cdFx0fSk7XG5cblx0XHRzdWJzY3JpYmVyc19maXJzdC5wdXNoKHNraXApO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1ha2Ugc3R5bGVzIGFuZCBjbGFzc2VzXG5cdCAqL1xuXHRpZihvcHRpb25zLnN0eWxlIHx8IG9wdGlvbnMuY2xhc3MpIHtcblx0XHQvLyBjb25zb2xlLmVycm9yKGVsKTtcblx0XHRsZXQgY3NzT3B0aW9ucyA9IG1ha2VDc3Moe30sIG9wdGlvbnMpO1xuXG5cdFx0aWYoY3NzT3B0aW9ucy5zdHlsZSkge1xuXHRcdFx0YWRkU3Vic2NyaWJlcihjc3NPcHRpb25zLnN0eWxlLCAob2JqKSA9PiB7XG5cdFx0XHRcdGZvcihsZXQgbmFtZSBpbiBvYmopIHtcblx0XHRcdFx0XHRlbC5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBvYmpbbmFtZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZihjc3NPcHRpb25zLmNsYXNzKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhjc3NPcHRpb25zLmNsYXNzKCkpO1xuXHRcdFx0YWRkU3Vic2NyaWJlcihjc3NPcHRpb25zLmNsYXNzLCAodmFsdWUpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coZWwsIHZhbHVlKTtcblx0XHRcdFx0ZWwuY2xhc3NOYW1lID0gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNYWtlIGV2ZW50c1xuXHQgKi9cblx0aWYob3B0aW9ucy5vbikge1xuXHRcdGZvcihsZXQgbmFtZSBpbiBvcHRpb25zLm9uKSB7XG5cdFx0XHRoYW5kbGVFdmVudChlbCwgbmFtZSwgb3B0aW9ucy5vbltuYW1lXSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE1ha2UgYXR0cmlidXRlc1xuXHQgKi9cblx0aWYob3B0aW9ucy5hdHRycykge1xuXHRcdGZvcihsZXQgbmFtZSBpbiBvcHRpb25zLmF0dHJzKSB7XG5cdFx0XHRhZGRTdWJzY3JpYmVyKG9wdGlvbnMuYXR0cnNbbmFtZV0sICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdFx0fSlcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIFN1YnNjcmliZVxuXHQgKi9cblx0aWYoc3Vic2NyaWJlcnMubGVuZ3RoID4gMCkge1xuXHRcdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBzdWJzY3JpYmVyc1tpXS52YWx1ZSgpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoc3Vic2NyaWJlcnNfZmlyc3RbaV0pIHtcblx0XHRcdFx0XHRzdWJzY3JpYmVyc19maXJzdFtpXSA9IGZhbHNlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN1YnNjcmliZXJzW2ldLmZuKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUV2ZW50KGVsLCBuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudFByb3h5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGV2ZW50UHJveHkpO1xuICAgIH1cblxuICAgIChlbC5fbGlzdGVuZXJzIHx8IChlbC5fbGlzdGVuZXJzID0ge30pKVtuYW1lXSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIFByb3h5IGFuIGV2ZW50IHRvIGhvb2tlZCBldmVudCBoYW5kbGVycy5cbiAqIEBwYXJhbSB7RXZlbnR9IGUgLSBUaGUgZXZlbnQgb2JqZWN0IGZyb20gdGhlIGJyb3dzZXIuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gZXZlbnRQcm94eShlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVyc1tlLnR5cGVdKGUpO1xufSIsImltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJ0BzaW51b3VzL2h5ZHJhdGlvbic7XG5pbXBvcnQgcmVuZGVyIGZyb20gJ0BzaW51b3VzL3JlbmRlcic7XG5cbi8vIGltcG9ydCB7IGFwaSB9IGZyb20gJ3NpbnVvdXMnO1xuLy8gaW1wb3J0IHsgb2JzZXJ2YWJsZSB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudC9zcmMvb2JzZXJ2YWJsZSc7XG4vLyBpbXBvcnQgdGVzdCBmcm9tICcuLi9jb21wb25lbnRzL3Rlc3Quc2luJ1xuLy8gaW1wb3J0IHRlc3QyIGZyb20gJy4uL2NvbXBvbmVudHMvdGVzdDIuc2luJ1xuaW1wb3J0IGJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3NidXR0b24uc2luJ1xuLy8gaW1wb3J0IEluZGV4UGFnZSBmcm9tICcuLi9wYWdlcy9pbmRleC5zaW4nXG5pbXBvcnQgdGltZUJlbmNobWFyayBmcm9tICcuL3RpbWUnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYWdlSW5kZXhcIiAqLyAnLi4vcGFnZXMvaW5kZXguc2luJylcblxuXG52YXIgTEFZT1VUO1xudmFyIFBhZ2VJbmRleCwgUGFnZUluZGV4MjtcblxuZnVuY3Rpb24gVEVTVF9XRUJQQUNLX0JVSUxEKClcbntcblx0dGltZUJlbmNobWFyaygnU1NSLUJ1aWxkJyk7XG5cdC8vIFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQodGVzdCk7XG5cdC8vIFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQodGVzdDIpO1xuXHRTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KGJ1dHRvbik7XG5cdHRpbWVCZW5jaG1hcmsoJ1NTUi1CdWlsZCcpO1xufVxuXG4vLyBmdW5jdGlvbiBURVNUX0lOSVQoKVxuLy8ge1xuLy8gXHR0aW1lQmVuY2htYXJrKCdTU1ItSW5pdCcpO1xuLy8gXHRQYWdlSW5kZXggPSBuZXcgSW5kZXhQYWdlKCk7XG4vLyBcdFBhZ2VJbmRleDIgPSBuZXcgSW5kZXhQYWdlKCk7XG4vLyBcdHRpbWVCZW5jaG1hcmsoJ1NTUi1Jbml0Jyk7XG4vLyB9XG5cbmZ1bmN0aW9uIFRFU1RfUkVOREVSKClcbntcblx0cmVuZGVyKEluZGV4UGFnZSwgTEFZT1VULCB0aW1lQmVuY2htYXJrLCAoYykgPT4ge1xuXHRcdFBhZ2VJbmRleCA9IGM7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBDTEVBUl9IT09LUygpXG57XG5cdGxldCBodG1sID0gTEFZT1VULmlubmVySFRNTDtcblx0TEFZT1VULmlubmVySFRNTCA9IGh0bWw7XG5cdFBhZ2VJbmRleC5ob29rKCd1bm1vdW50ZWQnKTtcbn1cblxuZnVuY3Rpb24gVEVTVF9IWURSQVRFKClcbntcblx0aHlkcmF0ZShJbmRleFBhZ2UsIExBWU9VVCwgdGltZUJlbmNobWFyayk7XG59XG5cblRFU1RfV0VCUEFDS19CVUlMRCgpO1xuXG4vLyBURVNUX0lOSVQoKTtcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsb2FkKTtcbi8vIHJldHVybjtcbihmdW5jdGlvbiBsb2FkKCkge1xuXHRMQVlPVVQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cblxuXHQvLyBsZXQgZCA9IG9ic2VydmFibGUoMSk7XG5cdC8vIGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHQvLyBcdGNvbnNvbGUubG9nKCdbc2JdJywgZCgpKTtcblx0Ly8gfSlcblx0Ly8gZCgyKTtcblx0Ly8gcmV0dXJuO1xuXG5cblx0Ly8gVEVTVF9IWURSQVRFKCk7XG5cdC8vIHJldHVybjtcblxuXG5cdFRFU1RfUkVOREVSKCk7XG5cdC8vIGNvbnNvbGUubG9nKExBWU9VVC5pbm5lckhUTUwpXG5cdC8vIHJldHVyblxuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXG5cdFx0Q0xFQVJfSE9PS1MoKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0IFRFU1RfSFlEUkFURSgpO1xuXHRcdH0sIDMwMCk7XG5cdH0sIDEwMDApO1xufSkoKTtcbiIsImxldCB0aW1lcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKG5hbWUpXG57XG5cdGxldCBub3cgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRpZih0eXBlb2YgdGltZXNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGltZXNbbmFtZV0gPSBub3c7XG5cdFx0cmV0dXJuIHRpbWVzW25hbWVdO1xuXHR9XG5cblx0Y29uc29sZS5sb2coYFsgdGIgJHtuYW1lfSBdYCwgbm93IC0gdGltZXNbbmFtZV0sICdtcycpO1xuXG5cdGRlbGV0ZSB0aW1lc1tuYW1lXTtcbn0iXSwic291cmNlUm9vdCI6IiJ9