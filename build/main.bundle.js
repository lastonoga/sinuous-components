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
		instance.prototype._slotsData = {"default":{"path":[0,1],"tag":"span","index":0}};
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
    () => {
      return `${ctx._props.prop1}`;
    },
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
  c: [
    {
      _t: "t",
      t: -1,
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
    }
  },

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
    this._props = {};
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
  } // if(typeof opts.props !== 'undefined') {


  component.passProps(opts.props); // }

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
  }

  component.passProps(opts.props);
  component.passOptions(opts);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uLnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NidXR0b24uc2luP2NlNzkiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb29wLmpzIiwid2VicGFjazovLy8uLi9zcmMvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zbG90LmpzIiwid2VicGFjazovLy8uLi9zcmMvc3RhdGVtZW50LmpzIiwid2VicGFjazovLy8uLi9zcmMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oeWRyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyLXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWUuanMiXSwibmFtZXMiOlsiXyIsInkiLCJzZWxmIiwiY2xhc3NlcyIsIm9iaiIsInN0YXRpY0NsYXNzZXMiLCJkeW5hbWljIiwiaSIsImFyZ3VtZW50cyIsImFyZyIsIkFycmF5IiwiaiIsImhhbmRsZUNsYXNzT2JqZWN0IiwiYSIsInZhbCIsInN0eWxlcyIsImNhbWVsVG9Qcm9wIiwiaGFuZGxlU3R5bGVzT2JqZWN0IiwiSElEIiwiQmFzaWMiLCJvYnNlcnZhYmxlIiwiZGVmYXVsdCIsImNvbXB1dGVkIiwibmFtZSIsImNoaWxkcmVuIiwicGFyZW50IiwicHJvcCIsInZhbHVlIiwidHlwZSIsInByb3BzIiwiY3R4IiwiaCIsInN0YXRlbWVudCIsImxvb3AiLCJzbG90IiwiZCIsImMiLCJTaW51b3VzIiwiZWwiLCJ0YWciLCJjaGlsZCIsIm9wdHMiLCJkeW5hbWljQXR0cnMiLCJyZWFkeU9wdGlvbnMiLCJjb21wb25lbnQiLCJyZWdpc3RlckNoaWxkcmVuIiwib3B0aW9ucyIsIl9zbG90cyIsIiRzbG90cyIsInJlc3VsdCIsImxvb3BfY29uZGl0aW9uIiwiY29uZGl0aW9uIiwiaXRlbSIsImZuIiwiYmluZGluZyIsInYiLCJtYWtlT2JzZWVydmFibGUiLCJzdHIiLCJhcmdUb1N0cmluZyIsInJlYWR5U3R5bGVzIiwibWFrZVN0eWxlUHJvcCIsImNsb25lT3B0aW9ucyIsInNob3VsZENsb25lIiwicmVhZHlPcHRpb24iLCJvcHRpb24iLCJtYWtlQ3NzIiwiQXNzaWduT2JqZWN0T3B0aW9ucyIsIkFzc2lnblZhbHVlT3B0aW9ucyIsInNob3VsZEJlTWVyZ2VkIiwia2V5cyIsIk9iamVjdCIsIm1lcmdlT3B0aW9ucyIsIm1ha2VPcHRpb24iLCJjb250ZXh0IiwiZm91bmRDb25kaXRpb24iLCJjaGlsZEluZGV4Iiwic2l6ZSIsIm5vZGUiLCJkb2N1bWVudCIsIlNUT1JBR0UiLCJTVUJTQ1JJQkVSUyIsImNvbnNvbGUiLCJoeWRyYXRlIiwic3RhcnRJbmRleCIsInN0YXRlbWVudEFyZ3MiLCJhcmdzIiwiTm9kZSIsImFwaSIsImN1cnJlbnRJbmRleCIsImN1cnJlbnROb2RlIiwibmV3Tm9kZSIsIm1hcmtBc1JlYWR5IiwiaGlkZU5vZGVzIiwic3RhcnROb2RlIiwicHJldk5vZGUiLCJwYXJlbnROb2RlIiwiaXRlbUtleSIsIml0ZW1BcmdzIiwic2hvdWxkUmVuZGVyIiwibm9kZUtleSIsInBhdGgiLCJiaW5kZWROb2RlcyIsInNsb3REYXRhIiwiZ2V0U2xvdE5vZGUiLCJkYXRhIiwiY2hpbGRyZW5TbG90cyIsInNsb3RzIiwic3RhcnROb2RlSW5kZXgiLCJoeWRyYXRlSCIsIm5ld0FyZ3MiLCJoeWRyYXRlU2xvdHMiLCJoeWRyYXRlSWRsZSIsImh5ZHJhdGVUYWciLCJoeWRyYXRlVGV4dCIsImh5ZHJhdGVMb29wIiwiaHlkcmF0ZVN0YXRlbWVudCIsInRpbWVCZW5jaG1hcmsiLCJjYWxsYmFjayIsInRyZWUiLCJoeWRyYXRpb25Sb290IiwiaHlkcmF0aW9uIiwiaW5zdGFuY2UiLCJzdWJzY3JpYmVycyIsInN1YnNjcmliZXJzX2ZpcnN0Iiwic2tpcCIsImNzc09wdGlvbnMiLCJhZGRTdWJzY3JpYmVyIiwiaGFuZGxlRXZlbnQiLCJlIiwiU2ludW91c0NvbXBvbmVudHMiLCJjcmVhdGVISUQiLCJjbGVhckhJRCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiaGFzQ29tcG9uZW50IiwiZ2V0SHlkcmF0ZUNvbXBvbmVudCIsImdldENvbXBvbmVudEluc3RhbmNlIiwiZ2V0Q29tcG9uZW50IiwibW9kdWxlIiwibGF5b3V0IiwiSW5kZXhQYWdlIiwiTEFZT1VUIiwiUGFnZUluZGV4IiwiUGFnZUluZGV4MiIsIlRFU1RfV0VCUEFDS19CVUlMRCIsImJ1dHRvbiIsIlRFU1RfUkVOREVSIiwiQ0xFQVJfSE9PS1MiLCJodG1sIiwiaW5uZXJIVE1MIiwiaG9vayIsIlRFU1RfSFlEUkFURSIsImxvYWQiLCJnZXRFbGVtZW50QnlJZCIsInNldFRpbWVvdXQiLCJ0aW1lcyIsInRpbWUiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUFDQTtBQUNDO0FBQ0E7QUFDQTtBQUVEO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQztBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsa0RBQ0E7QUFDQzs7QUFFQSxPQUFLLElBQUl6RSxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR2lCLFFBQVEsQ0FBNUIsUUFBcUNqQixDQUFyQyxJQUEwQztBQUN6QzJFLFdBQU8sVUFBVTVD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QVBPLENBQVY7QUFRQSxDQTVCRCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREEsSUFBSUksS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBU0MsSUFBVCxDQUFjcEksSUFBZCxFQUNmO0FBQ0MsTUFBSXFJLEdBQUcsR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0osS0FBSyxDQUFDbkksSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDbUksU0FBSyxDQUFDbkksSUFBRCxDQUFMLEdBQWNxSSxHQUFkO0FBQ0EsV0FBT0YsS0FBSyxDQUFDbkksSUFBRCxDQUFaO0FBQ0E7O0FBRUQwRCxTQUFPLENBQUM4RSxHQUFSLFdBQW9CeEksSUFBcEIsU0FBOEJxSSxHQUFHLEdBQUdGLEtBQUssQ0FBQ25JLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPbUksS0FBSyxDQUFDbkksSUFBRCxDQUFaO0FBQ0EsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wicGFnZUluZGV4XCI6XCJwYWdlSW5kZXhcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuYnVuZGxlLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXHRcdGltcG9ydCBjb21wb25lbnRDb25maWcgZnJvbSBcIi4vc2J1dHRvbi5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFNidXR0b24oKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnU2J1dHRvbic7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSB7XCJkZWZhdWx0XCI6e1wicGF0aFwiOlswLDFdLFwidGFnXCI6XCJzcGFuXCIsXCJpbmRleFwiOjB9fTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSBPYmplY3Qua2V5cyhjb25maWcubWV0aG9kcyk7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9mdW5jdGlvbmFsID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19wcm9wcyA9IHt9O1xuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5wcm9wcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcHJvcHNba2V5XSA9IGNvbmZpZy5wcm9wc1trZXldXG5cdFx0fVxuXHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3JlbmRlciA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCwgZCwgYyB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFxuICBcImRpdlwiLFxuICBbXG4gICAgY3R4Lm9wdGlvbnMsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIxNXB4XCIsXG4gICAgICB9LFxuICAgICAgY2xhc3M6IFwibmV3LWJ1dHRvblwiLFxuICAgICAgc3R5bGU6IFt7IGNvbG9yOiBjdHguX2NvbXB1dGVkLnRlc3RDb2xvciB9XSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBjdHguY2xpY2ssXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICAoKSA9PiB7XG4gICAgICByZXR1cm4gYCR7Y3R4Ll9wcm9wcy5wcm9wMX1gO1xuICAgIH0sXG4gICAgc2xvdChjdHgsIGgsIFwiZGVmYXVsdFwiLCBcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzXCIgfSwgW1xuICAgICAgYERlZmF1bHQgYnV0dG9uIHRleHRgLFxuICAgIF0pLFxuICBdXG4pO1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9faHlkcmF0ZSA9IGZ1bmN0aW9uKGgpIHtcblx0XHRcdFx0bGV0IGN0eCA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiB7XG4gIF90OiBcImhcIixcbiAgdDogXCJkaXZcIixcbiAgbzogW1xuICAgIGN0eC5vcHRpb25zLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgY2xhc3M6IFwibmV3LWJ1dHRvblwiLFxuICAgICAgc3R5bGU6IFt7IGNvbG9yOiBjdHguX2NvbXB1dGVkLnRlc3RDb2xvciB9XSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBjdHguY2xpY2ssXG4gICAgICB9LFxuICAgICAgX3M6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgYzogW1xuICAgIHtcbiAgICAgIF90OiBcInRcIixcbiAgICAgIHQ6IC0xLFxuICAgIH0sXG4gICAgLTEsXG4gIF0sXG59O1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdGV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuXHQiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgcHJvcDE6IHtcbiAgICAgIHR5cGU6IFwiTnVtYmVyXCIsXG4gICAgICBkZWZhdWx0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiA5O1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aW1lcjogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgc3RhdGUobykge1xuICAgIHJldHVybiB7XG4gICAgICBzMTogbyg5KVxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQobykge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXN0Q29sb3I6IG8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGUuczEoKSAlIDIgPT09IDAgPyAncmVkJyA6ICdncmVlbic7XG4gICAgICB9KSxcbiAgICAgIHRlc3RDbGFzczogbygoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVkOiB0aGlzLl9zdGF0ZS5zMSgpICUgMiA9PT0gMFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgYWxlcnQoMSk7XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGlyZWN0aW9uID0gMTsgLy8gY29uc29sZS5sb2coJ21vdW50ZWQnLCB0aGlzLmhpZCk7XG5cbiAgICAgIHRoaXMuX2RhdGEudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbnRlcnZhbCcsIHRoaXMuaGlkKTtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlLnMxKCkgPiA0MCkge1xuICAgICAgICAgIGRpcmVjdGlvbiA9IC01O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlLnMxKCkgPCAxMCkge1xuICAgICAgICAgIGRpcmVjdGlvbiA9IDU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdGF0ZS5zMSh0aGlzLl9zdGF0ZS5zMSgpICsgZGlyZWN0aW9uKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0sXG4gICAgdW5tb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygndW5tb3VudGVkJywgdGhpcy5oaWQpO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9kYXRhLnRpbWVyKTtcbiAgICB9XG4gIH1cbn07IiwiZXhwb3J0IGNvbnN0IF8gPSAtMTtcbiIsImltcG9ydCB2YWx1ZSBmcm9tICcuL3ZhbHVlJztcblxuXG5mdW5jdGlvbiBjYW1lbFRvUHJvcChzKVxue1xuXHRyZXR1cm4gc1xuXHRcdC5yZXBsYWNlKC9cXC4/KFtBLVpdKykvZywgKHgsIHkpID0+IGAtJHt5LnRvTG93ZXJDYXNlKCl9YClcblx0XHQucmVwbGFjZSgvXi0vLCAnJyk7XG59XG5cbmZ1bmN0aW9uIG9ubHlVbmlxdWUodmFsdWUsIGluZGV4LCBzZWxmKSB7IFxuICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNsYXNzT2JqZWN0KG9iailcbntcblx0bGV0IGNsYXNzZXMgPSBbXTtcblxuXHRmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG5cdFx0aWYodmFsdWUob2JqW2tleV0pKSB7XG5cdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzZXMoc3RhdGljQ2xhc3NlcyA9IFtdLCBkeW5hbWljID0ge30pXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0XG5cdFx0XHRpZihBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBhcmcubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2godmFsdWUoYXJnW2pdKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgYXJnID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQoXG5cdFx0XHRcdFx0aGFuZGxlQ2xhc3NPYmplY3QoYXJnKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KFxuXHRcdFx0XHRcdGhhbmRsZUNsYXNzT2JqZWN0KHZhbHVlKGFyZykpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzc2VzID0gY2xhc3Nlcy5maWx0ZXIoKHYsIGksIGEpID0+IGEuaW5kZXhPZih2KSA9PT0gaSk7XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVN0eWxlc09iamVjdChzdHlsZXMsIG9iailcbntcblx0Zm9yIChsZXQga2V5IGluIG9iaikge1xuXHRcdGxldCB2YWwgPSB2YWx1ZShvYmpba2V5XSk7XG5cdFx0aWYodmFsICE9PSBudWxsKSB7XG5cdFx0XHRzdHlsZXNbY2FtZWxUb1Byb3Aoa2V5KV0gPSB2YWw7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlcygpXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IHN0eWxlcyA9IHt9O1xuXHRcdFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCBhcmd1bWVudHNbaV0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCB2YWx1ZShhcmd1bWVudHNbaV0pKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzdHlsZXM7XG5cdH1cbn0iLCJpbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcbmltcG9ydCB7IF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlci9zcmMvZW1wdHknO1xuXG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCB9IGZyb20gJy4vb2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IHN0eWxlcywgY2xhc3Nlcywgc3RhdGVtZW50LCBkeW5hbWljLCBsb29wLCBzbG90IH0gZnJvbSAnLi9pbmRleCc7XG5cbmltcG9ydCB7IGggfSBmcm9tICcuLyc7XG5cbi8vIGltcG9ydCB7IHJlbmRlciwgaHlkcmF0ZSB9IGZyb20gJy4vdGVtcGxhdGUnO1xubGV0IEhJRCA9IDA7XG5cblxudmFyIEJhc2ljID0gZnVuY3Rpb24gKCkge1xuXG5cdGZ1bmN0aW9uIEJhc2ljKClcblx0e1xuXHRcdHRoaXMuX2lzQ29tcG9uZW50ID0gdHJ1ZTtcblx0XHR0aGlzLmhpZCA9ICsrSElEO1xuXHRcdHRoaXMuJGVsID0gbnVsbDtcblxuXHRcdHRoaXMuX3Byb3BzID0ge307XG5cdFx0dGhpcy5fcGFzc2VkUHJvcHMgPSB7fTtcblxuXHRcdC8vIExvY2FsIGRhdGFcblx0XHR0aGlzLl9kYXRhID0gdGhpcy5kYXRhKCk7XG5cdFx0Ly8gU3RhdGVmdWwgZGF0YVxuXHRcdHRoaXMuX3N0YXRlID0gdGhpcy5zdGF0ZShvYnNlcnZhYmxlKTtcblx0XHQvLyBzbG90c1xuXHRcdHRoaXMuX3Nsb3RzID0ge1xuXHRcdFx0ZGVmYXVsdDogW10sXG5cdFx0fTtcblx0XHQvLyBob29rc1xuXHRcdHRoaXMuX2hvb2tzID0gW107XG5cblx0XHR0aGlzLl9jb21wdXRlZCA9IHRoaXMuY29tcHV0ZWQoY29tcHV0ZWQpO1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gW107XG5cdFx0dGhpcy5fZWxfaW5kZXggPSAwO1xuXHRcdHRoaXMub3B0aW9ucyA9IG51bGw7XG5cblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXG5cdFx0Ly8gRGVmYXVsdCBwcm9wIHZhbHVlcyBcblx0XHQvLyB0aGlzLmluaXRQcm9wcygpO1xuXG5cdFx0Ly8gdGhpcy5pbml0VGVtcGxhdGUoKTtcblxuXHRcdHRoaXMuc2V0Q2hpbGRyZW4oKTtcblx0XHR0aGlzLnNldFBhcmVudCgpO1xuXG5cdFx0dGhpcy5iaW5kQ29udGV4dCgpO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuYmluZENvbnRleHQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9jb21wdXRlZCkge1xuXHRcdFx0dGhpcy5fY29tcHV0ZWRba2V5XSA9IHRoaXMuX2NvbXB1dGVkW2tleV0uYmluZCh0aGlzKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9tZXRob2RzKSB7XG5cdFx0XHRsZXQgbmFtZSA9IHRoaXMuX21ldGhvZHNba2V5XTtcblx0XHRcdHRoaXNbbmFtZV0gPSB0aGlzW25hbWVdLmJpbmQodGhpcyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBDb25maWdcblx0ICovXG5cblx0Ly8gQmFzaWMucHJvdG90eXBlLnNldE1ldGhvZHMgPSBmdW5jdGlvbihtZXRob2RzID0ge30pXG5cdC8vIHtcblx0Ly8gXHR0aGlzLl9tZXRob2RzID0gbWV0aG9kcztcblx0Ly8gfVxuXG5cdC8qKlxuXHQgKiBIaWVyYXJjaHlcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnNldENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGRyZW4gPSBbXSlcblx0e1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5hZGRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkKVxuXHR7XG5cdFx0dGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5zZXRQYXJlbnQgPSBmdW5jdGlvbihwYXJlbnQgPSBudWxsKVxuXHR7XG5cdFx0dGhpcy5fcGFyZW50ID0gcGFyZW50O1xuXHR9XG5cdC8qKlxuXHQgKiBQcm9wc1xuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUucHJvcHMgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5pbml0UHJvcHMgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9wcm9wcylcblx0XHR7XG5cdFx0XHRsZXQgcHJvcCA9IHRoaXMuX3Byb3BzW2tleV07XG5cdFx0XHRsZXQgdmFsdWUgPSBudWxsO1xuXHRcdFx0bGV0IHR5cGUgPSBudWxsO1xuXG5cdFx0XHRpZih0eXBlb2YgcHJvcCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHQvLyB0eXBlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWx1ZSA9IHByb3AuZGVmYXVsdCgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9kYXRhW2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5wYXNzU2xvdHMgPSBmdW5jdGlvbihuYW1lLCBzbG90cylcblx0e1xuXHRcdHRoaXMuX3Nsb3RzW25hbWVdID0gc2xvdHM7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc09wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKVxuXHR7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5wYXNzUHJvcHMgPSBmdW5jdGlvbihwcm9wcylcblx0e1xuXHRcdGlmKCFwcm9wcykge1xuXHRcdFx0cHJvcHMgPSB7fTtcblx0XHR9XG5cblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9fcHJvcHMpXG5cdFx0e1xuXHRcdFx0bGV0IHZhbHVlID0gdGhpcy5fX3Byb3BzW2tleV0uZGVmYXVsdCgpO1xuXHRcdFx0aWYocHJvcHNba2V5XSkge1xuXHRcdFx0XHR2YWx1ZSA9IHByb3BzW2tleV07XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3Byb3BzW2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBMb2NhbCBjb21wb25lbnQgZGF0YVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmNvbXB1dGVkID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXRlZnVsIGRhdGFcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnN0YXRlID0gZnVuY3Rpb24obylcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiAxLiBDcmVhdGUgY2hpbGQgY29tcG9uZW50cyAoZGlmZmVyZW50IGNvbnRleHQpXG5cdCAqIDIuIFBhc3MgcHJvcHNcblx0ICogMy4gUmVuZGVyXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUuY2hpbGRDb21wb25lbnRzID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiAgTGlmZSBjeWNsZSBob29rc1xuXHQgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLmhvb2sgPSBmdW5jdGlvbih0eXBlID0gJ21vdW50ZWQnKVxuXHR7XG5cdFx0aWYoIXRoaXMuX2hvb2tzLmluY2x1ZGVzKHR5cGUpKSB7XG5cdFx0XHR0aGlzLl9ob29rcy5wdXNoKHR5cGUpO1xuXHRcdH1cblxuXHRcdGlmKHRoaXNbdHlwZV0pIHtcblx0XHRcdHRoaXNbdHlwZV0uY2FsbCh0aGlzKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0aGlzLl9jaGlsZHJlbltpXSA9PT0gXyB8fCB0aGlzLl9jaGlsZHJlbltpXS5faG9va3MuaW5jbHVkZXModHlwZSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKCF0aGlzLl9jaGlsZHJlbltpXS5fZnVuY3Rpb25hbCkge1xuXHRcdFx0XHR0aGlzLl9jaGlsZHJlbltpXS5ob29rKHR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLm1vdW50ZWQgPSBmdW5jdGlvbigpIHt9XG5cblx0QmFzaWMucHJvdG90eXBlLnVubW91bnRlZCA9IGZ1bmN0aW9uKCkge31cblxuXHQvKipcblx0ICogUHJpdmF0ZSBBUEkgZm9yIHJlbmRlciBhbmQgaHlkcmF0ZVxuXHQgKiBAdHlwZSB7W3R5cGVdfVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oY3R4ID0gbnVsbClcblx0e1xuXHRcdGlmKGN0eCA9PT0gbnVsbCkge1xuXHRcdFx0Y3R4ID0gdGhpcztcblx0XHR9XG5cblx0XHRoLmJpbmQoY3R4KTtcblxuXHRcdHRoaXMuJGVsID0gY3R4Ll9fcmVuZGVyKGguYmluZChjdHgpLCB7XG5cdFx0XHRjdHgsXG5cdFx0XHRzdGF0ZW1lbnQsXG5cdFx0XHRsb29wLFxuXHRcdFx0c2xvdCxcblx0XHRcdGQ6IGR5bmFtaWMsXG5cdFx0XHRjOiBjb21wdXRlZCxcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLiRlbDtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmh5ZHJhdGUgPSBmdW5jdGlvbihjdHggPSBudWxsKVxuXHR7XG5cdFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdFx0XHRjdHggPSB0aGlzO1xuXHRcdH1cblxuXHRcdGguYmluZChjdHgpO1xuXG5cdFx0cmV0dXJuIGN0eC5fX2h5ZHJhdGUoaCk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cblx0Ly8gQmFzaWMucHJvdG90eXBlLnRlbXBsYXRlQnVpbGRlciA9IGZ1bmN0aW9uKGgsIG9wdHMpXG5cdC8vIHtcblx0Ly8gXHRyZXR1cm4gdGhpc1tgX18keyBvcHRzLnJlbmRlciB9YF0oaCwgb3B0cyk7XG5cdC8vIH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5jb21wb25lbnQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5nZXRVSUQgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdHJldHVybiBgaHlkci0keyBTaW51b3VzLmNyZWF0ZUhJRChpbmRleCkgfWA7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXyhcIm5hbWVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7IH0pO1xuXG5cdHJldHVybiBCYXNpYztcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzaWM7XG4iLCJpbXBvcnQgeyBoLCBocywgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWMoaCwgdGFnLCBvcHRzLCBjaGlsZHJlbilcbntcblx0cmV0dXJuICgpID0+IHtcblx0XHRsZXQgZWwgPSB0YWcoKTtcblx0XHRyZXR1cm4gaChlbCwgb3B0cywgY2hpbGRyZW4pO1xuXHR9O1xuXG59IiwiaW1wb3J0IHsgaCBhcyBocyB9IGZyb20gJ3NpbnVvdXMnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBvcHRpb25zLCAgfSBmcm9tICcuLyc7XG5pbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcblxuXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGlmKGNoaWxkLnNldFBhcmVudCkge1xuXHRcdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGgoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbntcblx0ZWwgPSBlbC50b0xvd2VyQ2FzZSgpO1xuXHQvLyBlbCA9IGNvbXB1dGVkKCgpID0+ICh0eXBlb2YgZWwgPT09ICdmdW5jdGlvbicgPyBlbCA6IGVsKSk7XG5cblx0Ly8gY29uc29sZS5sb2coJ1sgRkYgXScsIGVsLCB0aGlzKVxuXHRsZXQgZHluYW1pY0F0dHJzID0gZmFsc2U7XG5cblx0bGV0IHJlYWR5T3B0aW9ucyA9IG9wdGlvbnMob3B0cyk7XG5cdC8vIElmIEhUTUwgdGFnIHJlbmRlclxuXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG5cdFx0cmV0dXJuIGhzKGVsLCByZWFkeU9wdGlvbnMsIGNoaWxkcmVuKTtcblx0fVxuXG5cdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldENvbXBvbmVudChlbCk7XG5cblx0Ly8gY29uc29sZS5sb2codGhpcylcblx0cmVnaXN0ZXJDaGlsZHJlbih0aGlzLCBjb21wb25lbnQpO1xuXG5cdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuXHRcdHJldHVybiBjb21wb25lbnQucmVuZGVyKHtcblx0XHRcdG9wdGlvbnM6IG9wdHMsXG5cdFx0XHRfc2xvdHM6IHJlYWR5T3B0aW9ucy4kc2xvdHMsXG5cdFx0fSk7XG5cdH1cblxuXHQvLyBpZih0eXBlb2Ygb3B0cy5wcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Y29tcG9uZW50LnBhc3NQcm9wcyhvcHRzLnByb3BzKTtcblx0Ly8gfVxuXG5cdGZvcihsZXQga2V5IGluIG9wdHMuJHNsb3RzKSB7XG5cdFx0Y29tcG9uZW50LnBhc3NTbG90cyhrZXksIG9wdHMuJHNsb3RzW2tleV0pO1x0XG5cdH1cblxuXHRjb21wb25lbnQucGFzc09wdGlvbnMob3B0cyk7XG5cblx0cmV0dXJuIGNvbXBvbmVudC5yZW5kZXIoKTtcbn0iLCJpbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnQHNpbnVvdXMvbGF6eSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29tcG9uZW50LCBsYXlvdXQsIHRpbWVCZW5jaG1hcmsgPSAoKSA9PiB7fSwgY2FsbGJhY2sgPSBudWxsKSB7XG5cbiAgICBsYXlvdXQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgKGluc3RhbmNlKSA9PiB7XG5cbiAgICBcdHRpbWVCZW5jaG1hcmsoJ1JlbmRlcicpO1xuXG5cdFx0bGF5b3V0LmFwcGVuZChpbnN0YW5jZS5yZW5kZXIoKSk7XG5cdFx0aW5zdGFuY2UuaG9vaygnbW91bnRlZCcpO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHR0aW1lQmVuY2htYXJrKCdSZW5kZXInKTtcblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fSk7XG59IiwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9vcChjb25kaXRpb24sIGZuKVxue1xuXHRsZXQgZCA9ICgpID0+IHtcblxuXHRcdGxldCByZXN1bHQgPSBbXTtcblxuXHRcdGxldCBsb29wX2NvbmRpdGlvbiA9IHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicgPyBjb25kaXRpb24oKSA6IGNvbmRpdGlvbjtcblxuXHRcdGZvcihsZXQga2V5IGluIGxvb3BfY29uZGl0aW9uKVxuXHRcdHtcblx0XHRcdGxldCBpdGVtID0gbG9vcF9jb25kaXRpb25ba2V5XTtcblx0XHRcdHJlc3VsdC5wdXNoKGZuKGl0ZW0sIGtleSkpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZC5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cdC8vIGQuX25vZGUgPSB0cnVlO1xuXG5cdHJldHVybiBkO1xufSIsImltcG9ydCB7IG9ic2VydmFibGUgYXMgc2ludW91c09ic2VydmFibGUsIGNvbXB1dGVkIGFzIHNpbnVvdXNDb21wdXRlZCB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlT2JzZWVydmFibGUoZm4pXG57XG5cdGZuLl9vYnNlcnZhYmxlID0gdHJ1ZTtcblx0cmV0dXJuIGZuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQodiwgYmluZGluZyA9IGZhbHNlKSB7XG5cblx0bGV0IGQ7XG5cdFxuXHRpZihiaW5kaW5nKSB7XG5cdFx0ZCA9IHNpbnVvdXNDb21wdXRlZCh2LmJpbmQodGhpcykpO1xuXHR9IGVsc2Uge1xuXHRcdGQgPSBzaW51b3VzQ29tcHV0ZWQodik7XG5cdH1cblxuXHRtYWtlT2JzZWVydmFibGUoZCk7XG5cblx0cmV0dXJuIGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZhYmxlKHYsIGJpbmRpbmcgPSBmYWxzZSlcbntcblx0Ly8gbGV0IG9icyA9IG51bGw7XG5cdC8vIGxldCBpbmRleCA9IDA7XG5cblx0Ly8gbGV0IGRhdGEgPSAodikgPT4ge1xuXHQvLyBcdGNvbnNvbGUubG9nKHNlZWQsIHYsIGluZGV4KVxuXHQvLyBcdGlmKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJykge1xuXHQvLyBcdFx0aWYoaW5kZXggPT09IDApIHtcblx0Ly8gXHRcdFx0aW5kZXgrKztcblx0Ly8gXHRcdFx0cmV0dXJuIHNlZWQ7XG5cdC8vIFx0XHR9XG5cblx0Ly8gXHRcdHJldHVybiBvYnMoKTtcblx0Ly8gXHR9XG5cblx0Ly8gXHQvLyBpZihpbmRleCA9PT0gMCkge1xuXHQvLyBcdC8vIFx0aW5kZXgrKztcblx0Ly8gXHQvLyBcdHJldHVybiB2O1xuXHQvLyBcdC8vIH1cblxuXHQvLyBcdC8vIGlmKG9icyA9PT0gbnVsbCkge1xuXHQvLyBcdC8vIFx0b2JzID0gc2ludW91c09ic2VydmFibGUodik7XG5cdC8vIFx0Ly8gfVxuXHQvLyB9XG5cblx0bGV0IGQgPSBzaW51b3VzT2JzZXJ2YWJsZSh2KTtcblxuXHRcblx0bWFrZU9ic2VlcnZhYmxlKGQpO1xuXG5cdHJldHVybiBkO1xufSIsImZ1bmN0aW9uIGFyZ1RvU3RyaW5nKClcbntcblx0bGV0IHN0ciA9ICcnO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHZhbHVlID0gYXJndW1lbnRzW2ldO1xuXHRcdFxuXHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dmFsdWUgPSB2YWx1ZSgpO1xuXHRcdH1cblxuXHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvcihsZXQga2V5IGluIHZhbHVlKSB7XG5cdFx0XHRcdGlmKHZhbHVlW2tleV0pIHtcblx0XHRcdFx0XHRzdHIgKz0gYCAkeyBrZXkgfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RyICs9IGAgJHt2YWx1ZX1gO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJnVG9PYmplY3QoKVxue1xuXHRsZXQgc3RyID0gJyc7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBhcmd1bWVudHNbaV0pIHtcblx0XHRcdGxldCB2YWx1ZSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuXHRcdFx0aWYodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1trZXldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBQYXJzZSBjbGFzc2VzXG4gKiBAcGFyYW0gIHtbdHlwZV19IHN0YXRpYyAgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7W3R5cGVdfSBkeW5hbWljIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbmZ1bmN0aW9uIGNsYXNzZXMoc3RyID0gbnVsbCwgZHluYW1pYyA9IG51bGwpXG57XG5cdGlmKHN0ciA9PT0gbnVsbCAmJiBkeW5hbWljID09PSBudWxsKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0aWYoc3RyID09PSBudWxsKSB7XG5cdFx0c3RyID0gJyc7XG5cdH1cblx0XG5cdGlmKHR5cGVvZiBkeW5hbWljID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0ZHluYW1pYyA9IGR5bmFtaWMoKTtcblx0fVxuXG5cdGlmKCFBcnJheS5pc0FycmF5KGR5bmFtaWMpKSB7XG5cdFx0ZHluYW1pYyA9IFtkeW5hbWljXTtcblx0fVxuXG5cdHN0ciArPSBhcmdUb1N0cmluZy5hcHBseSh0aGlzLCBkeW5hbWljKTtcblx0XG5cdC8vIGNvbnNvbGUubG9nKHN0cik7XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBTdHlsZXNcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqICAgICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IGR5bmFtaWMgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZnVuY3Rpb24gbWFrZVN0eWxlUHJvcChuYW1lKVxue1xuXHRyZXR1cm4gbmFtZVxuXHRcdC5yZXBsYWNlKC9cXC4/KFtBLVpdKykvZywgZnVuY3Rpb24gKHgseSkge1xuXHRcdFx0cmV0dXJuIFwiLVwiICsgeS50b0xvd2VyQ2FzZSgpXG5cdFx0fSlcblx0XHQucmVwbGFjZSgvXi0vLCBcIlwiKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVzKG9iaiA9IHt9LCBkeW5hbWljID0gbnVsbClcbntcblx0bGV0IHJlYWR5U3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKTtcblxuXHRpZih0eXBlb2YgZHluYW1pYyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGR5bmFtaWMgPSBkeW5hbWljKCk7XG5cdH1cblxuXHRpZighQXJyYXkuaXNBcnJheShkeW5hbWljKSkge1xuXHRcdGR5bmFtaWMgPSBbZHluYW1pY107XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGR5bmFtaWMubGVuZ3RoOyBpKyspIHtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBkeW5hbWljW2ldKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSBkeW5hbWljW2ldW2tleV07XG5cdFx0XHRcblx0XHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlKCk7XG5cdFx0XHR9XG5cdFx0XHRyZWFkeVN0eWxlc1ttYWtlU3R5bGVQcm9wKGtleSldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlYWR5U3R5bGVzO1xufVxuXG5sZXQgY2xvbmVPcHRpb25zID0gWydfcycsICckc2xvdHMnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDc3MocmVhZHlPcHRpb25zLCBvcHRpb25zKVxue1xuXHRpZihvcHRpb25zLnN0YXRpY0NsYXNzIHx8IG9wdGlvbnMuY2xhc3MpIHtcblx0XHRyZWFkeU9wdGlvbnMuY2xhc3MgPSBjbGFzc2VzLmJpbmQodGhpcywgb3B0aW9ucy5zdGF0aWNDbGFzcyB8fCBudWxsLCBvcHRpb25zLmNsYXNzIHx8IG51bGwpO1xuXHR9XG5cblx0aWYob3B0aW9ucy5zdGF0aWNTdHlsZSB8fCBvcHRpb25zLnN0eWxlKSB7XG5cdFx0cmVhZHlPcHRpb25zLnN0eWxlID0gc3R5bGVzLmJpbmQodGhpcywgb3B0aW9ucy5zdGF0aWNTdHlsZSB8fCB7fSwgb3B0aW9ucy5zdHlsZSB8fCBudWxsKTtcblx0fVxuXG5cdHJldHVybiByZWFkeU9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlT3B0aW9uKG9wdGlvbiwgc2hvdWxkQ2xvbmUgPSB0cnVlKVxue1xuXHRsZXQgcmVhZHlPcHRpb24gPSB7fTtcblxuXHRpZihvcHRpb24ub24pIHtcblx0XHRmb3IobGV0IGtleSBpbiBvcHRpb24ub24pIHtcblx0XHRcdHJlYWR5T3B0aW9uW2BvbiR7a2V5fWBdID0gb3B0aW9uLm9uW2tleV07XG5cdFx0fVxuXHR9XG5cblx0aWYob3B0aW9uLmtleSkge1xuXHRcdHJlYWR5T3B0aW9uWydkYXRhLWtleSddID0gb3B0aW9uLmtleTtcblx0fVxuXG5cdG1ha2VDc3MocmVhZHlPcHRpb24sIG9wdGlvbik7XG5cblx0aWYoc2hvdWxkQ2xvbmUpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNsb25lT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IG5hbWUgPSBjbG9uZU9wdGlvbnNbaV07XG5cdFx0XHRpZihvcHRpb25bbmFtZV0pIHtcblx0XHRcdFx0cmVhZHlPcHRpb25bbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZWFkeU9wdGlvbjtcbn1cblxuY29uc3QgQXNzaWduT2JqZWN0T3B0aW9ucyA9IFsnc3RhdGljU3R5bGUnLCAnYXR0cnMnLCAnb24nXTtcbmNvbnN0IEFzc2lnblZhbHVlT3B0aW9ucyA9IFsnc3R5bGUnLCAnY2xhc3MnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhvcHRpb25zKVxue1xuXHRsZXQgcmVhZHlPcHRpb25zID0ge307XG5cdGxldCBzaG91bGRCZU1lcmdlZCA9IGZhbHNlO1xuXG5cdGlmKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFxuXHRcdFx0aWYob3B0aW9uc1tpXSA9PT0gbnVsbCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0bGV0IGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zW2ldKTtcblxuXHRcdFx0aWYoa2V5cy5sZW5ndGggPT09IDEgJiYga2V5cy5pbmNsdWRlcygnJHNsb3RzJykpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGkgPiAwKSB7XG5cdFx0XHRcdHNob3VsZEJlTWVyZ2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0aWYoIXNob3VsZEJlTWVyZ2VkKSB7XG5cdFx0XHRyZXR1cm4gb3B0aW9uc1sxXTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG9wdGlvbnM7XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgb3B0aW9uID0gb3B0aW9uc1tpXVxuXHRcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IEFzc2lnbk9iamVjdE9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGxldCBuYW1lID0gQXNzaWduT2JqZWN0T3B0aW9uc1tqXTtcblx0XHRcdFxuXHRcdFx0aWYoIW9wdGlvbltuYW1lXSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIXJlYWR5T3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV0gPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGxldCBwcm9wIGluIG9wdGlvbltuYW1lXSkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV1bcHJvcF0gPSBvcHRpb25bbmFtZV1bcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBBc3NpZ25WYWx1ZU9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGxldCBuYW1lID0gQXNzaWduVmFsdWVPcHRpb25zW2pdO1xuXG5cdFx0XHRpZighb3B0aW9uW25hbWVdKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighcmVhZHlPcHRpb25zW25hbWVdKSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9uc1tuYW1lXSA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV0gPSByZWFkeU9wdGlvbnNbbmFtZV0uY29uY2F0KG9wdGlvbltuYW1lXSk7XG5cdFx0fVxuXG5cdFx0aWYob3B0aW9uLl9zKSB7XG5cdFx0XHRyZWFkeU9wdGlvbnMuX3MgPSBvcHRpb24uX3M7XG5cdFx0fVxuXG5cdFx0aWYob3B0aW9uLmtleSkge1xuXHRcdFx0cmVhZHlPcHRpb25zLmtleSA9IG9wdGlvbi5rZXk7XG5cdFx0fVxuXG5cdFx0aWYob3B0aW9uLnN0YXRpY0NsYXNzKSB7XG5cdFx0XHRpZighcmVhZHlPcHRpb25zLnN0YXRpY0NsYXNzKSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9ucy5zdGF0aWNDbGFzcyA9IG9wdGlvbi5zdGF0aWNDbGFzcztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9ucy5zdGF0aWNDbGFzcyArPSAnICcgKyBvcHRpb24uc3RhdGljQ2xhc3M7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlYWR5T3B0aW9ucztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3B0aW9ucyhvcHRpb25zLCBzaG91bGRDbG9uZSA9IHRydWUpXG57XG5cdGxldCByZWFkeU9wdGlvbnMgPSBtZXJnZU9wdGlvbnMob3B0aW9ucyk7XG5cblx0cmV0dXJuIG1ha2VPcHRpb24ocmVhZHlPcHRpb25zLCBzaG91bGRDbG9uZSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xvdChjb250ZXh0LCBoLCBuYW1lLCB0YWcsIG9wdGlvbnMsIGRlZmF1bHRDaGlsZHJlbilcbntcblx0Ly8gY29udGV4dC5fX3Nsb3RzXG5cdFxuXHRsZXQgY2hpbGRyZW4gPSBkZWZhdWx0Q2hpbGRyZW47XG5cblx0aWYoY29udGV4dC5fc2xvdHNbbmFtZV0pIHtcblx0XHRjaGlsZHJlbiA9IGNvbnRleHQuX3Nsb3RzW25hbWVdO1xuXHR9XG5cdFxuXHQvLyBjb25zb2xlLmxvZyhuYW1lLCB0YWcsIG9wdGlvbnMsIGRlZmF1bHRDaGlsZHJlbiwgY2hpbGRyZW4sIGNvbnRleHQuX3Nsb3RzKVxuXHRpZih0YWcgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gY2hpbGRyZW47XG5cdH1cblxuXHRyZXR1cm4gaCh0YWcsIG9wdGlvbnMsIGNoaWxkcmVuKTtcbn0iLCJpbXBvcnQgeyBoIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KClcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICUgMyAhPT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdGF0ZW1lbnQgc2hvdWxkIGJlIG9kZCBudW1iZXInKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cdFx0bGV0IGZvdW5kQ29uZGl0aW9uID0gZmFsc2U7XG5cdFx0Ly8gdmFsdWVcblx0XHRsZXQgY2hpbGRJbmRleCA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRsZXQgc2l6ZSA9IGFyZ3VtZW50c1tpICsgMV07XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaSArIDJdO1xuXHRcdFx0bGV0IG5vZGUgPSBudWxsO1xuXG5cdFx0XHRjb25kaXRpb24gPSB0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nID8gY29uZGl0aW9uKCkgOiBjb25kaXRpb247XG5cblx0XHRcdGlmKGNvbmRpdGlvbiAmJiAhZm91bmRDb25kaXRpb24pIHtcblx0XHRcdFx0Zm91bmRDb25kaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRub2RlID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnNvbGUud2Fybihjb25kaXRpb24sIHNpemUsIHZhbHVlLCBub2RlKTtcblx0XHRcdC8vIFBhc3MgZmFpbGVkIHN0ZXRlbWVudCBjb25kaXRpb25cblx0XHRcdC8vIE5vcm1pbGl6ZSBpbmRleCB0aGF0IHdpbGwgYmUgdXNlZCBpbiByZXBsYWNpbmcgcGxhY2Vob2xkZXIgKGJlbG93KVxuXHRcdFx0aWYobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIW5vZGUuX29ic2VydmFibGUpIHtcblx0XHRcdFx0bm9kZSA9IG5vZGUoaCk7XG5cdFx0XHR9XG5cdFx0XHQvLyByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggbm9kZVxuXHRcdFx0Ly8gQW5kIGNvcnJlY3QgaW5kZXhcblx0XHRcdGlmKHNpemUgPiAxKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZVtqXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXG5cdHJldHVybiBkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbHVlKHZhbHVlKVxue1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gdmFsdWUoKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn0iLCJpbXBvcnQgeyBhcGkgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlci9zcmMvZW1wdHknO1xuaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgbWFwIGZyb20gJ3NpbnVvdXMvbWFwJztcbmltcG9ydCB7IG9wdGlvbnMgYXMgcGFyc2VPcHRpb25zLCBoIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcbmltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICdAc2ludW91cy9sYXp5Jztcbi8vIGltcG9ydCBzdWJzY3JpYmUgZnJvbSAnLi9zdWJzY3JpYmUnO1xuaW1wb3J0IGh5ZHJhdGVQcm9wcyBmcm9tICcuL3Byb3BlcnR5JztcblxubGV0IE9CU0VSVkVSO1xubGV0IFNUT1JBR0UgPSB7fTtcblxubGV0IFNVQlNDUklCRVJTID0gW107XG5cbmZ1bmN0aW9uIGFkZFN1YnNjcmliZXIoZm4pXG57XG5cdGNvbnNvbGUubG9nKGZuLCBTVUJTQ1JJQkVSUylcblx0U1VCU0NSSUJFUlMucHVzaChmbik7XG59XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVQcm9wcyhlbCwgb3B0cylcbi8vIHtcblx0Ly8gaWYoIW9wdHMuX3MpIHtcblx0Ly8gXHRyZXR1cm47XG5cdC8vIH1cblxuLy8gXHRhcGkucHJvcGVydHkoZWwsIG9wdHMsIG51bGwpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlVGFnKHBhcmVudCwgY2hpbGRyZW4sIGN1cnJlbnRJbmRleCwgdmFsdWUpXG4vLyB7XG4vLyBcdGxldCBlbCA9IGNoaWxkcmVuW2N1cnJlbnRJbmRleF07XG5cdFxuLy8gXHRsZXQgbm9kZXMgPSB2YWx1ZSgpO1xuXG4vLyBcdGlmKEFycmF5LmlzQXJyYXkobm9kZXMpKSB7XG5cbi8vIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4vLyBcdFx0XHRsZXQgY2hpbGQgPSBub2Rlc1tpXTtcbi8vIFx0XHRcdGlmKHR5cGVvZiBjaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuLy8gXHRcdFx0XHRjaGlsZCA9IGNoaWxkKCk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0XHQvLyBjb25zb2xlLmxvZyhwYXJlbnQsICBjaGlsZC5zaXplKVxuLy8gXHRcdFx0Ly8gYXBpLmluc2VydChwYXJlbnQsIGNoaWxkLCBjaGlsZHJlbltjdXJyZW50SW5kZXggKyBpXSk7XG4vLyBcdFx0XHQvLyBwYXJlbnQucmVwbGFjZUNoaWxkKGNoaWxkLCBjaGlsZHJlbltjdXJyZW50SW5kZXggKyBpXSlcbi8vIFx0XHRcdC8vIGNoaWxkcmVuW2N1cnJlbnRJbmRleCArIGldLnJlcGxhY2VXaXRoKGNoaWxkKTtcbi8vIFx0XHR9XG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0YXBpLmluc2VydChlbCwgbm9kZXMsIG51bGwpO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVDaGlsZHJlbihub2RlLCBjaGlsZHJlbilcbi8vIHtcbi8vIFx0bGV0IGJpbmRDaGlsZHJlbiA9IFtdO1xuXG4vLyBcdGlmKG5vZGUgIT09IG51bGwpIHtcbi8vIFx0XHRiaW5kQ2hpbGRyZW4gPSBmaWx0ZXJDaGlsZE5vZGVzKG5vZGUpO1xuLy8gXHR9XG5cbi8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuLy8gXHRcdGlmKGNoaWxkcmVuW2ldID09PSBfKSB7XG4vLyBcdFx0XHRjb250aW51ZTtcbi8vIFx0XHR9XG4vLyBcdFx0Ly8gY29uc29sZS5lcnJvcihiaW5kQ2hpbGRyZW5baV0sIGNoaWxkcmVuW2ldKTtcbi8vIFx0XHRoeWRyYXRlVGFnKG5vZGUsIGJpbmRDaGlsZHJlbiwgaSwgY2hpbGRyZW5baV0pO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldFNsb3ROb2RlKGVsLCBwYXRoKVxuLy8ge1xuLy8gXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbi8vIFx0XHRlbCA9IGVsLmNoaWxkTm9kZXNbcGF0aFtpXV07XG4vLyBcdH1cblxuLy8gXHRyZXR1cm4gZWw7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIGVsLCBvcHRzID0ge30sIHNsb3RzKVxuLy8ge1xuLy8gXHRpZighb3B0c1snaWQnXSkge1xuLy8gXHRcdHJldHVybjtcbi8vIFx0fVxuXG4vLyBcdC8vIGlmKG9wdHNbJ2lkJ10gPT09ICdoeWRyLTEzJykge1xuLy8gXHQvLyBcdG9wdHNbJ2lkJ10gPSAnaHlkci02Jztcbi8vIFx0Ly8gfVxuXG4vLyBcdC8vIGlmKG9wdHNbJ2lkJ10gPT09ICdoeWRyLTMwJykge1xuLy8gXHQvLyBcdG9wdHNbJ2lkJ10gPSAnaHlkci0yMSc7XG4vLyBcdC8vIH1cblxuLy8gXHRsZXQgYmluZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHsgb3B0c1snaWQnXSB9YCk7XG5cbi8vIFx0bGV0IHNsb3ROb2RlcyA9IHt9XG5cbi8vIFx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcbi8vIFx0XHRpZihjb21wb25lbnQuX3Nsb3RzUGF0aFtrZXldKSB7XG4vLyBcdFx0XHRsZXQgbm9kZSA9IGdldFNsb3ROb2RlKGJpbmROb2RlLCBjb21wb25lbnQuX3Nsb3RzUGF0aFtrZXldKVxuLy8gXHRcdFx0c2xvdE5vZGVzW2tleV0gPSBub2RlO1xuLy8gXHRcdH0gZWxzZSB7XG4vLyBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vICR7a2V5fSBzbG90IG5hbWVzcGFjZSBkZWZpbmVkYCk7XG4vLyBcdFx0fVxuLy8gXHR9XG5cbi8vIFx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG4vLyBcdFx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcbi8vIFx0XHRcdGxldCBub2RlID0gc2xvdE5vZGVzW2tleV07XG4vLyBcdFx0XHRsZXQgY2hpbGRyZW5TbG90cyA9IHNsb3RzW2tleV07XG5cdFx0XHRcbi8vIFx0XHRcdGlmKG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbi8vIFx0XHRcdFx0bm9kZSA9IFtub2RlXTtcbi8vIFx0XHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRcdG5vZGUgPSBub2RlLmNoaWxkTm9kZXM7XG4vLyBcdFx0XHR9XG5cbi8vIFx0XHRcdGlmKGNoaWxkcmVuU2xvdHMubGVuZ3RoID4gbm9kZS5sZW5ndGgpIHtcbi8vIFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTbG90IGh5ZHJhdGlvbiBsZW5ndGggbWlzbWF0Y2gnKTtcbi8vIFx0XHRcdH1cblxuLy8gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlblNsb3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFxuLy8gXHRcdFx0XHRhcGkuaW5zZXJ0KG5vZGVbaV0sIGNoaWxkcmVuU2xvdHNbaV0oKSwgbnVsbCk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0fVxuLy8gXHR9KTtcblx0XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGUoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbi8vIHtcbi8vIFx0bGV0IGJpbmROb2RlO1xuLy8gXHRjb25zb2xlLmxvZyh0aGlzLCBlbCwgb3B0cywgY2hpbGRyZW4pXG5cbi8vIFx0Ly8gaWYodGhpcy5ub2RlKSB7XG4vLyBcdC8vIFx0YmluZE5vZGUgPSB0aGlzLm5vZGU7XG4vLyBcdC8vIH1cblxuLy8gXHRpZighb3B0c1snaWQnXSkge1xuLy8gXHRcdHJldHVybjtcbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRiaW5kTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAkeyBvcHRzWydpZCddIH1gKTtcbi8vIFx0fVxuXG4vLyBcdC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuLy8gXHQvLyB0aGlzLmN0eC5fZWxfaW5kZXgrKztcblxuLy8gXHRpZihiaW5kTm9kZSA9PT0gbnVsbCkge1xuLy8gXHRcdHJldHVybjtcbi8vIFx0fVxuXHRcblx0Ly8gYXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdC8vIFx0aHlkcmF0ZVByb3BzKGJpbmROb2RlLCBvcHRzKTtcblx0Ly8gXHRoeWRyYXRlQ2hpbGRyZW4oYmluZE5vZGUsIGNoaWxkcmVuKTtcblx0Ly8gfSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbi8vIHtcbi8vIFx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcbi8vIFx0aWYoY2hpbGQuc2V0UGFyZW50KSB7XG4vLyBcdFx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG4vLyBcdH1cbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVyKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG4vLyB7XG4vLyBcdG9wdGlvbnModGhpcywgb3B0cyk7XG5cdFxuLy8gXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG4vLyBcdFx0aHlkcmF0ZS5jYWxsKHRoaXMsIGVsLCBvcHRzLCBjaGlsZHJlbik7XG4vLyBcdFx0cmV0dXJuIF87XG4vLyBcdH1cblx0XHRcbi8vIFx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0SHlkcmF0ZUNvbXBvbmVudChlbCwgb3B0cyk7XG5cbi8vIFx0Ly8gY29uc29sZS5sb2coY29tcG9uZW50LCBlbCwgb3B0cylcbi8vIFx0aWYoY29tcG9uZW50ID09PSBudWxsKSB7XG4vLyBcdFx0cmV0dXJuIF87XG4vLyBcdH1cblxuLy8gXHRyZWdpc3RlckNoaWxkcmVuKHRoaXMuY3R4LCBjb21wb25lbnQpO1xuXG4vLyBcdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuLy8gXHRcdC8vIGNvbnNvbGUud2Fybignc3RhcnQgaHlkcmF0aW9uJyk7XG4vLyBcdFx0cmV0dXJuIGNvbXBvbmVudC5oeWRyYXRlKHtcbi8vIFx0XHRcdGdldFVJRCgpIHtcbi8vIFx0XHRcdFx0cmV0dXJuIC0xO1xuLy8gXHRcdFx0fSxcbi8vIFx0XHRcdF9zbG90czogb3B0cy4kc2xvdHMsXG4vLyBcdFx0fSwgY29tcGlsZXIpO1xuLy8gXHR9XG5cbi8vIFx0aWYodHlwZW9mIG9wdHMucHJvcHMgIT09ICd1bmRlZmluZWQnKSB7XG4vLyBcdFx0Y29tcG9uZW50LnBhc3NQcm9wcyhvcHRzLnByb3BzKTtcbi8vIFx0fVxuXG4vLyBcdGlmKG9wdHMuJHNsb3RzKSB7XG4vLyBcdFx0aHlkcmF0ZVNsb3RzKGNvbXBvbmVudCwgZWwsIG9wdHMsIG9wdHMuJHNsb3RzKTtcbi8vIFx0fVxuXG4vLyBcdHJldHVybiBpbml0Q29tcG9uZW50KGNvbXBvbmVudCk7XG4vLyB9XG5cblxuXG5cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZVByb3BzKGVsLCBvcHRpb25zKVxuLy8ge1xuLy8gXHRpZihvcHRpb25zLl9zKSB7XG4vLyBcdFx0Ly8gY29uc29sZS5sb2coZWwsICdQcmVwYXJlIG9wdGlvbnMnLCBvcHRpb25zKTtcbi8vIFx0XHQvLyBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMsIGZhbHNlKTtcbi8vIFx0XHQvLyBjb25zb2xlLmxvZyhlbCwgJ1ByZXBhcmUgb3B0aW9ucyAyJywgb3B0aW9ucyk7XG4vLyBcdFx0cHJvcGVydHkoZWwsIG9wdGlvbnMpO1xuXG4vLyBcdFx0Ly8gYXBpLnN1YnNjcmliZSgoKSA9PiB7XG4vLyBcdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhlbCwgJ0NoYW5nZSBvcHRpb25zJyk7XG4vLyBcdFx0Ly8gXHRhcGkucHJvcGVydHkoZWwsIG9wdGlvbnMsIG51bGwpO1xuLy8gXHRcdC8vIH0pO1xuLy8gXHR9XG4vLyB9XG5cbmZ1bmN0aW9uIGh5ZHJhdGVIKGNvbnRleHQsIGVsLCBvcHRpb25zLCBjaGlsZHJlbilcbntcblx0aHlkcmF0ZVByb3BzKGNvbnRleHQsIGVsLCBvcHRpb25zKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0aHlkcmF0ZShjb250ZXh0LCBlbC5jaGlsZE5vZGVzW2ldLCBjaGlsZHJlbltpXSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVN0YXRlbWVudChjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRsZXQgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXHRsZXQgc3RhcnRJbmRleCA9IDA7XG5cblx0d2hpbGUoKG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZykgIT0gbnVsbClcblx0XHRzdGFydEluZGV4Kys7XG5cdFxuXHRsZXQgc3RhdGVtZW50QXJncyA9IGFyZ3MuYTtcblxuXHRmdW5jdGlvbiBoaWRlTm9kZXMoY2hpbGRyZW4sIHN0YXJ0SW5kZXgsIGxlbmd0aClcblx0e1xuXHRcdGZvciAodmFyIGogPSBzdGFydEluZGV4OyBqIDw9IGxlbmd0aDsgaisrKSB7XG5cdFx0XHRsZXQgbm9kZSA9IGNoaWxkcmVuW2pdO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2hpZGUnLCBqLCBub2RlKTtcblx0XHRcdGlmKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuQ09NTUVOVF9OT0RFKSB7XG5cdFx0XHRcdG5vZGUucmVwbGFjZVdpdGgoZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJykpO1xuXHRcdFx0fVxuXG5cdFx0XHRub2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0fVxuXHR9XG5cblx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0bGV0IGN1cnJlbnRJbmRleCA9IHN0YXJ0SW5kZXg7XG5cdFx0bGV0IGZvdW5kQ29uZGl0aW9uID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdGF0ZW1lbnRBcmdzLmxlbmd0aDsgaSs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBzdGF0ZW1lbnRBcmdzW2ldO1xuXHRcdFx0bGV0IHNpemUgPSBzdGF0ZW1lbnRBcmdzW2kgKyAxXTtcblx0XHRcdGxldCBjb21wb25lbnQgPSBzdGF0ZW1lbnRBcmdzW2kgKyAyXTtcblxuXHRcdFx0bGV0IGN1cnJlbnROb2RlID0gcGFyZW50LmNoaWxkTm9kZXNbY3VycmVudEluZGV4XTtcblxuXHRcdFx0Y29uZGl0aW9uID0gdHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmRpdGlvbigpIDogY29uZGl0aW9uO1xuXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhjdXJyZW50Tm9kZSwgY29uZGl0aW9uICYmICFmb3VuZENvbmRpdGlvbik7XG5cdFx0XHRpZihjb25kaXRpb24gJiYgIWZvdW5kQ29uZGl0aW9uKSB7XG5cdFx0XHRcdGZvdW5kQ29uZGl0aW9uID0gdHJ1ZTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3Nob3cnLCBwYXJlbnQuY2hpbGROb2Rlc1tjdXJyZW50SW5kZXhdLCBzaXplKTtcblx0XHRcdFx0aWYoY3VycmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuQ09NTUVOVF9OT0RFKSB7XG5cdFx0XHRcdFx0Ly8gIHJlbmRlclxuXHRcdFx0XHRcdGxldCBuZXdOb2RlID0gY29tcG9uZW50LnIoaC5iaW5kKGNvbnRleHQpKTtcblx0XHRcdFx0XHRjdXJyZW50Tm9kZS5yZXBsYWNlV2l0aChuZXdOb2RlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBoeWRyYXRlXG5cdFx0XHRcdFx0bWFya0FzUmVhZHkoY3VycmVudE5vZGUpO1xuXHRcdFx0XHRcdGh5ZHJhdGUoY29udGV4dCwgY3VycmVudE5vZGUsIGNvbXBvbmVudC5oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1toaWRlXScsIHBhcmVudC5jaGlsZE5vZGVzLCBjdXJyZW50SW5kZXgsIHNpemUpO1xuXHRcdFx0XHRoaWRlTm9kZXMocGFyZW50LmNoaWxkTm9kZXMsIGN1cnJlbnRJbmRleCwgc2l6ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRJbmRleCArPSBzaXplO1xuXHRcdFx0Ly8gY29uc29sZS53YXJuKGN1cnJlbnROb2RlLCBjdXJyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcpXG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKGN1cnJlbnROb2RlLCBjb25kaXRpb24sICdza2lwJyk7XG5cblx0XHRcdFxuXHRcdH1cblx0fSk7XG5cdFxufVxuXG5mdW5jdGlvbiBoeWRyYXRlTG9vcChjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRsZXQgY29uZGl0aW9uID0gYXJncy5jO1xuXHRsZXQgc3RhcnROb2RlID0gbm9kZTtcblx0bGV0IHByZXZOb2RlID0gbm9kZTtcblx0bGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cblx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0bGV0IGxvb3BfY29uZGl0aW9uID0gdHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmRpdGlvbigpIDogY29uZGl0aW9uO1xuXHRcdGxldCBjdXJyZW50Tm9kZSA9IHN0YXJ0Tm9kZTtcblxuXHRcdGZvcihsZXQga2V5IGluIGxvb3BfY29uZGl0aW9uKVxuXHRcdHtcblx0XHRcdGxldCBpdGVtID0gbG9vcF9jb25kaXRpb25ba2V5XTtcblx0XHRcdGxldCBpdGVtS2V5ID0gYXJncy5rKGl0ZW0sIGtleSk7XG5cdFx0XHRsZXQgaXRlbUFyZ3M7XG5cblx0XHRcdGxldCBzaG91bGRSZW5kZXIgPSBjdXJyZW50Tm9kZSA9PT0gbnVsbDtcblxuXHRcdFx0aWYoY3VycmVudE5vZGUpIHtcblx0XHRcdFx0bGV0IG5vZGVLZXkgPSBjdXJyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5Jyk7XG5cdFx0XHRcdGlmKG5vZGVLZXkgPT09IGl0ZW1LZXkpIHtcblx0XHRcdFx0XHRzaG91bGRSZW5kZXIgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihzaG91bGRSZW5kZXIpIHtcblx0XHRcdFx0Ly8gbGV0IG5ld05vZGUgPSBhcmdzLnIoaC5iaW5kKGNvbnRleHQpLCBpdGVtLCBrZXkpO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8gbWFya0FzUmVhZHkobmV3Tm9kZSk7XG5cdFx0XHRcdC8vIG1vZGlmeSBIIHdpdGggSW5kZXggdG8gY3JlYXRlIGNsYXNzICsgbW91bnQvdW5tb3VudFxuXHRcdFx0XHRpZihjdXJyZW50Tm9kZSkge1xuXHRcdFx0XHRcdC8vIHJlcGxhY2Vcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBwcmV2Tm9kZS5hZnRlcihuZXdOb2RlKVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHByZXZOb2RlID0gbmV3Tm9kZTtcblx0XHRcdFx0Ly8gY29udGV4dC5ob29rKCdtb3VudGVkJyk7XG5cdFx0XHR9IGVsc2UgeyAvLyBpZighY3VycmVudE5vZGUuX2h5ZHJhdGVkKSBcblx0XHRcdFx0aXRlbUFyZ3MgPSBhcmdzLmgoaXRlbSwga2V5KTtcblxuXHRcdFx0XHRtYXJrQXNSZWFkeShjdXJyZW50Tm9kZSk7XG5cblx0XHRcdFx0aHlkcmF0ZShjb250ZXh0LCBjdXJyZW50Tm9kZSwgaXRlbUFyZ3MpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighc2hvdWxkUmVuZGVyKSB7XG5cdFx0XHRcdHByZXZOb2RlID0gY3VycmVudE5vZGU7XG5cdFx0XHRcdGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59XG5cbi8qKlxuICogTWF5YmUgbmVlZCBzYW1lIGh5ZHJhdGlvbiBhbGdvcml0aG0gYXMgd2l0aCBwcm9wc1xuICogU2tpcCBmaXJzdCB0aW1lIGh5ZHJhdGlvbiA/Pz9cbiAqL1xuZnVuY3Rpb24gaHlkcmF0ZVRleHQoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0aWYoYXJncy50ID09PSBfKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdFxuXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRhcGkuaW5zZXJ0KG5vZGUsIGFyZ3MudCgpLCBudWxsKTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gZ2V0U2xvdE5vZGUoZWwsIHRhZywgcGF0aClcbntcblx0bGV0IG5vZGUgPSBlbDtcblxuXHRmb3IgKHZhciBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcblx0XHRub2RlID0gbm9kZS5jaGlsZE5vZGVzW3BhdGhbaV1dO1xuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlU2xvdHMoY29udGV4dCwgZWwsIG9wdHMgPSB7fSwgc2xvdHMpXG57XG5cdC8vIHJldHVybjtcblx0Ly8gSHlkcmF0ZSBwcm9wcyBvZiBtYWluIE5vZGVcblx0Ly8gaHlkcmF0ZVByb3BzKGNvbnRleHQsIGVsLCBvcHRzKTtcblx0XG5cdGxldCBiaW5kZWROb2RlcyA9IHt9XG5cblx0bGV0IHNsb3REYXRhID0gY29udGV4dC5fc2xvdHNEYXRhO1xuXG5cdC8vIEZpbmQgc2xvdCBiaW5kaW5nIG5vZGVzXG5cdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG5cdFx0aWYoc2xvdERhdGFba2V5XSkge1xuXHRcdFx0bGV0IG5vZGUgPSBnZXRTbG90Tm9kZShlbCwgc2xvdERhdGFba2V5XS50YWcsIHNsb3REYXRhW2tleV0ucGF0aCk7XG5cdFx0XHRiaW5kZWROb2Rlc1trZXldID0gbm9kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAke2tleX0gc2xvdCBuYW1lc3BhY2UgZGVmaW5lZGApO1xuXHRcdH1cblx0fVxuXG5cdC8vIEh5ZHJhdGUgc2xvdHMgcGVyIGJpbmRlZCB0YWdcblx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcblx0XHRsZXQgZGF0YSA9IHNsb3REYXRhW2tleV07XG5cdFx0bGV0IG5vZGUgPSBiaW5kZWROb2Rlc1trZXldO1xuXHRcdGxldCBjaGlsZHJlblNsb3RzID0gc2xvdHNba2V5XTtcblx0XHRsZXQgc3RhcnROb2RlSW5kZXggPSBkYXRhLmluZGV4O1xuXG5cdFx0aWYodHlwZW9mIG5vZGUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oZWwsIG9wdHMsIHNsb3REYXRhLCBlbFswXSk7XG5cdFx0fVxuXG5cdFx0aWYoY2hpbGRyZW5TbG90cy5sZW5ndGggPiBub2RlLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTbG90IGh5ZHJhdGlvbiBsZW5ndGggbWlzbWF0Y2gnKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gc3RhcnROb2RlSW5kZXg7IGkgPCBjaGlsZHJlblNsb3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhub2RlLmNoaWxkTm9kZXNbaV0sIGNoaWxkcmVuU2xvdHNbaV0pXG5cdFx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5TbG90c1tpXSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQ29udGV4dCBzZXR1cFxuICovXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdGlmKGNoaWxkLl9mdW5jdGlvbmFsKSB7XG5cdFx0cGFyZW50LmFkZENoaWxkcmVuKF8pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlVGFnKGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGxldCBlbCA9IGFyZ3MudCxcblx0XHRvcHRzID0gYXJncy5vLFxuXHRcdGNoaWxkcmVuID0gYXJncy5jO1xuXG5cdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcblx0XHRoeWRyYXRlSChjb250ZXh0LCBub2RlLCBvcHRzLCBjaGlsZHJlbik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0SHlkcmF0ZUNvbXBvbmVudChlbCwgb3B0cyk7XG5cblx0aWYoY29tcG9uZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHRyZWdpc3RlckNoaWxkcmVuKGNvbnRleHQsIGNvbXBvbmVudCk7XG5cblx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG5cdFx0bGV0IG5ld0FyZ3MgPSBjb21wb25lbnQuaHlkcmF0ZSh7XG5cdFx0XHRfc2xvdHM6IG9wdHMuJHNsb3RzLFxuXHRcdH0pO1xuXG5cdFx0aWYob3B0cy4kc2xvdHMpIHtcblx0XHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIG5vZGUsIG9wdHMsIG9wdHMuJHNsb3RzKTtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLmxvZyhvcHRzKVxuXHRcdGh5ZHJhdGUoY29udGV4dCwgbm9kZSwgbmV3QXJncyk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHRjb21wb25lbnQucGFzc09wdGlvbnMob3B0cyk7XG5cdFxuXHRpZihvcHRzLiRzbG90cykge1xuXHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIG5vZGUsIG9wdHMsIG9wdHMuJHNsb3RzKTtcblx0fVxuXG5cdHJldHVybiBoeWRyYXRlKGNvbXBvbmVudCwgbm9kZSwgY29tcG9uZW50Lmh5ZHJhdGUoY29tcG9uZW50KSk7XG59XG5cbi8qKlxuICogTWFpbiBoeWRyYXRpb24gZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gaHlkcmF0ZShjb250ZXh0LCBub2RlLCBhcmdzID0gbnVsbClcbntcblx0Ly8gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG5cdFx0aHlkcmF0ZUlkbGUoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdC8vIH0sIHtcblx0Ly8gXHR0aW1lb3V0OiAwLFxuXHQvLyBcdHJlYWQ6IHRydWVcblx0Ly8gfSk7XG59XG5cbmZ1bmN0aW9uIG1hcmtBc1JlYWR5KG5vZGUpXG57XG5cdG5vZGUuX2h5ZHJhdGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZUlkbGUoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0aWYoYXJncyA9PT0gbnVsbCB8fCBub2RlID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ2gnKSB7XG5cdFx0Ly8gYXJncy5vWydkYXRhLWh5ZHJhdGVkJ10gPSB0cnVlO1xuXHRcdC8vIGFyZ3Mub1snX3MnXSA9IHRydWU7XG5cdFx0aHlkcmF0ZVRhZyhjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXG5cdGlmKGFyZ3MuX3QgPT09ICd0Jykge1xuXHRcdGh5ZHJhdGVUZXh0KGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ2xvb3AnKSB7XG5cdFx0aHlkcmF0ZUxvb3AoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnc3RhdGVtZW50Jykge1xuXHRcdGh5ZHJhdGVTdGF0ZW1lbnQoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblx0XG5cdHJldHVybiBfO1xuXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SHlkcmF0aW9uKGNvbXBvbmVudCwgaHlkcmF0aW9uUm9vdCwgdGltZUJlbmNobWFyayA9ICgpID0+IHt9LCBjYWxsYmFjayA9IG51bGwpXG57XG5cdGxvYWRDb21wb25lbnQoY29tcG9uZW50LCAoaW5zdGFuY2UpID0+IHtcblxuXHRcdHRpbWVCZW5jaG1hcmsoJ0h5ZHJhdGlvbicpO1xuXG5cdFx0bGV0IHRyZWUgPSBbaW5zdGFuY2VdO1xuXG5cdFx0U2ludW91cy5jbGVhckhJRCgpO1xuXG5cdFx0Ly8gbGV0IGNvbm5lY3RlZE5vZGUgPSBmaWx0ZXJDaGlsZE5vZGVzKGh5ZHJhdGlvblJvb3QpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY29tcG9uZW50ID0gdHJlZVtpXTtcblx0XHRcdGxldCBub2RlID0gaHlkcmF0aW9uUm9vdC5jaGlsZE5vZGVzW2ldO1xuXHRcdFx0bGV0IGh5ZHJhdGlvbiA9IGNvbXBvbmVudC5oeWRyYXRlKGNvbXBvbmVudCk7XG5cdFx0XHRcblx0XHRcdGh5ZHJhdGUoY29tcG9uZW50LCBub2RlLCBoeWRyYXRpb24pO1xuXHRcdH1cblx0XHRcblx0XHQvLyBjb25zb2xlLmxvZyhpbnN0YW5jZSk7XG5cdFx0aW5zdGFuY2UuaG9vaygnbW91bnRlZCcpO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHR0aW1lQmVuY2htYXJrKCdIeWRyYXRpb24nKTtcblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fSk7XG5cbn1cblxuLyoqXG4gKiBGaWx0ZXIgb3V0IHdoaXRlc3BhY2UgdGV4dCBub2RlcyB1bmxlc3MgaXQgaGFzIGEgbm9za2lwIGluZGljYXRvci5cbiAqXG4gKiBAcGFyYW0gIHtOb2RlfSBwYXJlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBmaWx0ZXJDaGlsZE5vZGVzKHBhcmVudCkge1xuXHRyZXR1cm4gcGFyZW50LmNoaWxkTm9kZXM7XG5cdC8vIGNvbnNvbGUud2FybihwYXJlbnQsIHBhcmVudC5jaGlsZE5vZGVzKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGROb2RlcykuZmlsdGVyKFxuICAgICAgICBlbCA9PiBlbC5ub2RlVHlwZSAhPT0gMyB8fCBlbC5kYXRhLnRyaW0oKSB8fCBlbC5fbm9za2lwXG4gICAgKTtcbn1cbiIsImltcG9ydCB7IG1ha2VDc3MsIG1lcmdlT3B0aW9ucyB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICdzaW51b3VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHlkcmF0ZVByb3BzKGNvbnRleHQsIGVsLCBvcHRpb25zKVxue1xuXG5cdG9wdGlvbnMgPSBtZXJnZU9wdGlvbnMob3B0aW9ucyk7XG5cblx0aWYoIW9wdGlvbnMuX3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgc3Vic2NyaWJlcnMgPSBbXTtcblx0bGV0IHN1YnNjcmliZXJzX2ZpcnN0ID0gW107XG5cblx0ZnVuY3Rpb24gYWRkU3Vic2NyaWJlcih2YWx1ZSwgZm4sIHNraXAgPSB0cnVlKVxuXHR7XG5cdFx0c3Vic2NyaWJlcnMucHVzaCh7XG5cdFx0XHR2YWx1ZSxcblx0XHRcdGZuLFxuXHRcdH0pO1xuXG5cdFx0c3Vic2NyaWJlcnNfZmlyc3QucHVzaChza2lwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlIHN0eWxlcyBhbmQgY2xhc3Nlc1xuXHQgKi9cblx0aWYob3B0aW9ucy5zdHlsZSB8fCBvcHRpb25zLmNsYXNzKSB7XG5cdFx0Ly8gY29uc29sZS5lcnJvcihlbCk7XG5cdFx0bGV0IGNzc09wdGlvbnMgPSBtYWtlQ3NzKHt9LCBvcHRpb25zKTtcblxuXHRcdGlmKGNzc09wdGlvbnMuc3R5bGUpIHtcblx0XHRcdGFkZFN1YnNjcmliZXIoY3NzT3B0aW9ucy5zdHlsZSwgKG9iaikgPT4ge1xuXHRcdFx0XHRmb3IobGV0IG5hbWUgaW4gb2JqKSB7XG5cdFx0XHRcdFx0ZWwuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgb2JqW25hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYoY3NzT3B0aW9ucy5jbGFzcykge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coY3NzT3B0aW9ucy5jbGFzcygpKTtcblx0XHRcdGFkZFN1YnNjcmliZXIoY3NzT3B0aW9ucy5jbGFzcywgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGVsLCB2YWx1ZSk7XG5cdFx0XHRcdGVsLmNsYXNzTmFtZSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogTWFrZSBldmVudHNcblx0ICovXG5cdGlmKG9wdGlvbnMub24pIHtcblx0XHRmb3IobGV0IG5hbWUgaW4gb3B0aW9ucy5vbikge1xuXHRcdFx0aGFuZGxlRXZlbnQoZWwsIG5hbWUsIG9wdGlvbnMub25bbmFtZV0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlIGF0dHJpYnV0ZXNcblx0ICovXG5cdGlmKG9wdGlvbnMuYXR0cnMpIHtcblx0XHRmb3IobGV0IG5hbWUgaW4gb3B0aW9ucy5hdHRycykge1xuXHRcdFx0YWRkU3Vic2NyaWJlcihvcHRpb25zLmF0dHJzW25hbWVdLCAodmFsdWUpID0+IHtcblx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBTdWJzY3JpYmVcblx0ICovXG5cdGlmKHN1YnNjcmliZXJzLmxlbmd0aCA+IDApIHtcblx0XHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IHZhbHVlID0gc3Vic2NyaWJlcnNbaV0udmFsdWUoKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHN1YnNjcmliZXJzX2ZpcnN0W2ldKSB7XG5cdFx0XHRcdFx0c3Vic2NyaWJlcnNfZmlyc3RbaV0gPSBmYWxzZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJzY3JpYmVyc1tpXS5mbih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxufVxuXG5mdW5jdGlvbiBoYW5kbGVFdmVudChlbCwgbmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnRQcm94eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudFByb3h5KTtcbiAgICB9XG5cbiAgICAoZWwuX2xpc3RlbmVycyB8fCAoZWwuX2xpc3RlbmVycyA9IHt9KSlbbmFtZV0gPSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBQcm94eSBhbiBldmVudCB0byBob29rZWQgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0ge0V2ZW50fSBlIC0gVGhlIGV2ZW50IG9iamVjdCBmcm9tIHRoZSBicm93c2VyLlxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGV2ZW50UHJveHkoZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHJldHVybiB0aGlzLl9saXN0ZW5lcnNbZS50eXBlXShlKTtcbn0iLCJpbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcbmltcG9ydCB7IGh5ZHJhdGUgfSBmcm9tICdAc2ludW91cy9oeWRyYXRpb24nO1xuaW1wb3J0IHJlbmRlciBmcm9tICdAc2ludW91cy9yZW5kZXInO1xuXG4vLyBpbXBvcnQgeyBhcGkgfSBmcm9tICdzaW51b3VzJztcbi8vIGltcG9ydCB7IG9ic2VydmFibGUgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQvc3JjL29ic2VydmFibGUnO1xuLy8gaW1wb3J0IHRlc3QgZnJvbSAnLi4vY29tcG9uZW50cy90ZXN0LnNpbidcbi8vIGltcG9ydCB0ZXN0MiBmcm9tICcuLi9jb21wb25lbnRzL3Rlc3QyLnNpbidcbmltcG9ydCBidXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9zYnV0dG9uLnNpbidcbi8vIGltcG9ydCBJbmRleFBhZ2UgZnJvbSAnLi4vcGFnZXMvaW5kZXguc2luJ1xuaW1wb3J0IHRpbWVCZW5jaG1hcmsgZnJvbSAnLi90aW1lJztcblxuY29uc3QgSW5kZXhQYWdlID0gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFnZUluZGV4XCIgKi8gJy4uL3BhZ2VzL2luZGV4LnNpbicpXG5cblxudmFyIExBWU9VVDtcbnZhciBQYWdlSW5kZXgsIFBhZ2VJbmRleDI7XG5cbmZ1bmN0aW9uIFRFU1RfV0VCUEFDS19CVUlMRCgpXG57XG5cdHRpbWVCZW5jaG1hcmsoJ1NTUi1CdWlsZCcpO1xuXHQvLyBTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KHRlc3QpO1xuXHQvLyBTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KHRlc3QyKTtcblx0U2ludW91cy5yZWdpc3RlckNvbXBvbmVudChidXR0b24pO1xuXHR0aW1lQmVuY2htYXJrKCdTU1ItQnVpbGQnKTtcbn1cblxuLy8gZnVuY3Rpb24gVEVTVF9JTklUKClcbi8vIHtcbi8vIFx0dGltZUJlbmNobWFyaygnU1NSLUluaXQnKTtcbi8vIFx0UGFnZUluZGV4ID0gbmV3IEluZGV4UGFnZSgpO1xuLy8gXHRQYWdlSW5kZXgyID0gbmV3IEluZGV4UGFnZSgpO1xuLy8gXHR0aW1lQmVuY2htYXJrKCdTU1ItSW5pdCcpO1xuLy8gfVxuXG5mdW5jdGlvbiBURVNUX1JFTkRFUigpXG57XG5cdHJlbmRlcihJbmRleFBhZ2UsIExBWU9VVCwgdGltZUJlbmNobWFyaywgKGMpID0+IHtcblx0XHRQYWdlSW5kZXggPSBjO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gQ0xFQVJfSE9PS1MoKVxue1xuXHRsZXQgaHRtbCA9IExBWU9VVC5pbm5lckhUTUw7XG5cdExBWU9VVC5pbm5lckhUTUwgPSBodG1sO1xuXHRQYWdlSW5kZXguaG9vaygndW5tb3VudGVkJyk7XG59XG5cbmZ1bmN0aW9uIFRFU1RfSFlEUkFURSgpXG57XG5cdGh5ZHJhdGUoSW5kZXhQYWdlLCBMQVlPVVQsIHRpbWVCZW5jaG1hcmspO1xufVxuXG5URVNUX1dFQlBBQ0tfQlVJTEQoKTtcblxuLy8gVEVTVF9JTklUKCk7XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbG9hZCk7XG4vLyByZXR1cm47XG4oZnVuY3Rpb24gbG9hZCgpIHtcblx0TEFZT1VUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXG5cblx0Ly8gbGV0IGQgPSBvYnNlcnZhYmxlKDEpO1xuXHQvLyBhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0Ly8gXHRjb25zb2xlLmxvZygnW3NiXScsIGQoKSk7XG5cdC8vIH0pXG5cdC8vIGQoMik7XG5cdC8vIHJldHVybjtcblxuXG5cdC8vIFRFU1RfSFlEUkFURSgpO1xuXHQvLyByZXR1cm47XG5cblxuXHRURVNUX1JFTkRFUigpO1xuXHQvLyBjb25zb2xlLmxvZyhMQVlPVVQuaW5uZXJIVE1MKVxuXHQvLyByZXR1cm5cblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblxuXHRcdENMRUFSX0hPT0tTKCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCBURVNUX0hZRFJBVEUoKTtcblx0XHR9LCAzMDApO1xuXHR9LCAxMDAwKTtcbn0pKCk7XG4iLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==