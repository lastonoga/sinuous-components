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

/***/ "./components/sbutton2.sin":
/*!*********************************!*\
  !*** ./components/sbutton2.sin ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sbutton2_sin_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sbutton2.sin?type=script */ "./components/sbutton2.sin?type=script");
/* harmony import */ var _siph_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @siph/render */ "./packages/render/dist/index.js");
/* harmony import */ var _siph_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_siph_render__WEBPACK_IMPORTED_MODULE_1__);

		
	
		

		
		let config = Object.assign({
			methods: {},
		}, _sbutton2_sin_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

		let instance = function Sbutton2(parent, ctx) {
			
		};

		instance._functional = true;
		instance.prototype._componentName = 'Sbutton2';
		instance._slotsData = {"default":{"path":[0,0],"tag":"span","index":0}};

		for(let key in config.methods) {
			instance[key] = config.methods[key]
		}
	

		
			instance.render = function(ctx) {
				return Object(_siph_render__WEBPACK_IMPORTED_MODULE_1__["h"])(
  "div",
  [ctx.options, { staticClass: "button" }],
  [Object(_siph_render__WEBPACK_IMPORTED_MODULE_1__["slot"])(ctx, _siph_render__WEBPACK_IMPORTED_MODULE_1__["h"], "default", "span", {}, [`Default button text`])]
);
;
			}
		
			instance.hydrate = function(ctx, h) {
				ctx.click = this.click;

				return -1;
;
			}
		

		/* harmony default export */ __webpack_exports__["default"] = (instance);
	

/***/ }),

/***/ "./components/sbutton2.sin?type=script":
/*!*********************************************!*\
  !*** ./components/sbutton2.sin?type=script ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {},

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
      alert(s1);
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
    var $slots = Array.isArray(opts) ? opts[1].$slots : opts.$slots;
    return component.render({
      options: opts,
      _slots: $slots
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
  // console.log(context, h, name, tag)
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

var _sbutton = _interopRequireDefault(__webpack_require__(/*! ../components/sbutton2.sin */ "./components/sbutton2.sin"));

var _time = _interopRequireDefault(__webpack_require__(/*! ./time */ "./src/time.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { api } from 'sinuous';
// import { observable } from '@siph/component/src/observable';
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
  (0, _render.render)(IndexPage, LAYOUT, _time.default, function (c) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uMi5zaW4iLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uMi5zaW4/M2Q2NSIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9jb21waWxlci9zcmMvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL29ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9vcHRpb25zLmpzIiwid2VicGFjazovLy8uLi9zcmMvaHlkcmF0aW9uLmpzIiwid2VicGFjazovLy8uLi9zcmMvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWFwL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zbG90LmpzIiwid2VicGFjazovLy8uLi9zcmMvc3RhdGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXItdGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZS5qcyJdLCJuYW1lcyI6WyJfIiwiSElEIiwiQmFzaWMiLCJvYnNlcnZhYmxlIiwiZGVmYXVsdCIsImNvbXB1dGVkIiwibmFtZSIsImNoaWxkcmVuIiwiY2hpbGQiLCJwYXJlbnQiLCJwcm9wcyIsInZhbHVlIiwidHlwZSIsImkiLCJjdHgiLCJoIiwic3RhdGVtZW50IiwibG9vcCIsInNsb3QiLCJTaW51b3VzIiwiZWwiLCJ0YWciLCJmbiIsImJpbmRpbmciLCJkIiwidiIsIm1ha2VPYnNlZXJ2YWJsZSIsInN0ciIsImFyZ3VtZW50cyIsImR5bmFtaWMiLCJBcnJheSIsImFyZ1RvU3RyaW5nIiwieSIsIm9iaiIsInJlYWR5U3R5bGVzIiwibWFrZVN0eWxlUHJvcCIsImNsb25lT3B0aW9ucyIsIm9wdGlvbnMiLCJyZWFkeU9wdGlvbnMiLCJjbGFzc2VzIiwic3R5bGVzIiwic2hvdWxkQ2xvbmUiLCJyZWFkeU9wdGlvbiIsIm9wdGlvbiIsIm1ha2VDc3MiLCJBc3NpZ25PYmplY3RPcHRpb25zIiwiQXNzaWduVmFsdWVPcHRpb25zIiwic2hvdWxkQmVNZXJnZWQiLCJrZXlzIiwiT2JqZWN0IiwiaiIsIm1lcmdlT3B0aW9ucyIsIm1ha2VPcHRpb24iLCJTVE9SQUdFIiwiaHlkcmF0ZSIsIm5vZGUiLCJzdGFydEluZGV4Iiwic3RhdGVtZW50QXJncyIsImFyZ3MiLCJOb2RlIiwiZG9jdW1lbnQiLCJhcGkiLCJjdXJyZW50SW5kZXgiLCJmb3VuZENvbmRpdGlvbiIsImNvbmRpdGlvbiIsInNpemUiLCJjb21wb25lbnQiLCJjdXJyZW50Tm9kZSIsIm5ld05vZGUiLCJtYXJrQXNSZWFkeSIsImhpZGVOb2RlcyIsInBhcmVudE5vZGUiLCJwYXJlbnRDaGlsZHJlbiIsIml0ZW1zIiwiaXRlbSIsIml0ZW1LZXkiLCJyZWdpc3Rlckh5ZHJhdGlvbiIsInBhdGgiLCJvcHRzIiwiYmluZGVkTm9kZXMiLCJzbG90RGF0YSIsImNvbnRleHQiLCJnZXRTbG90Tm9kZSIsImRhdGEiLCJjaGlsZHJlblNsb3RzIiwic2xvdHMiLCJzdGFydE5vZGVJbmRleCIsImNvbnNvbGUiLCJoeWRyYXRlSCIsIm5ld0FyZ3MiLCJfc2xvdHMiLCIkc2xvdHMiLCJoeWRyYXRlU2xvdHMiLCJoeWRyYXRlSWRsZSIsImh5ZHJhdGVUYWciLCJoeWRyYXRlVGV4dCIsImh5ZHJhdGVMb29wIiwiaHlkcmF0ZVN0YXRlbWVudCIsInRpbWVCZW5jaG1hcmsiLCJjYWxsYmFjayIsInRyZWUiLCJoeWRyYXRpb25Sb290IiwiaHlkcmF0aW9uIiwiaW5zdGFuY2UiLCJzdWJzY3JpYmVycyIsInN1YnNjcmliZXJzX2ZpcnN0Iiwic2tpcCIsImNzc09wdGlvbnMiLCJhZGRTdWJzY3JpYmVyIiwiaGFuZGxlRXZlbnQiLCJlIiwiU2ludW91c0NvbXBvbmVudHMiLCJjcmVhdGVISUQiLCJjbGVhckhJRCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiaGFzQ29tcG9uZW50IiwiZ2V0SHlkcmF0ZUNvbXBvbmVudCIsImdldENvbXBvbmVudEluc3RhbmNlIiwiZ2V0Q29tcG9uZW50IiwiZ2V0SW5zdGFuY2UiLCJtb2R1bGUiLCJkeW5hbWljQXR0cnMiLCJsYXlvdXQiLCJhSWR4IiwiYklkeCIsImEiLCJrZXkiLCJrZXlFeHByIiwiYiIsImFFbG0iLCJiRWxtIiwiZ2V0IiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsImJlZm9yZUluaXQiLCJyb290Iiwic3Vic2NyaWJlIiwic2FtcGxlIiwiY2xlYW51cCIsImNsZWFuaW5nIiwiZW5kTWFyayIsImRpc3Bvc2VycyIsIm5vZGVzIiwidG9SZW1vdmUiLCJkZWZhdWx0QSIsInVuc3Vic2NyaWJlIiwiY29udGVudCIsIm5vZGVLZXkiLCJuIiwiZXhwciIsImRpc3Bvc2VyIiwicmVuZGVyIiwicmVzdWx0IiwiY2hpbGRJbmRleCIsIkluZGV4UGFnZSIsIkxBWU9VVCIsIlBhZ2VJbmRleCIsIlBhZ2VJbmRleDIiLCJURVNUX1dFQlBBQ0tfQlVJTEQiLCJidXR0b24iLCJURVNUX1JFTkRFUiIsImMiLCJDTEVBUl9IT09LUyIsImh0bWwiLCJpbm5lckhUTUwiLCJob29rIiwiVEVTVF9IWURSQVRFIiwibG9hZCIsImdldEVsZW1lbnRCeUlkIiwic2V0VGltZW91dCIsInRpbWVzIiwidGltZSIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FB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RixLQUFLLENBQUNwSyxJQUFELENBQVo7QUFDQTs7QUFFRGlGLFNBQU8sQ0FBQ3dGLEdBQVIsV0FBb0J6SyxJQUFwQixTQUE4QnNLLEdBQUcsR0FBR0YsS0FBSyxDQUFDcEssSUFBRCxDQUF6QyxFQUFpRCxJQUFqRDtBQUVBLFNBQU9vSyxLQUFLLENBQUNwSyxJQUFELENBQVo7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7XCJwYWdlSW5kZXhcIjpcInBhZ2VJbmRleFwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5idW5kbGUuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXG5cdFx0aW1wb3J0IGNvbXBvbmVudENvbmZpZyBmcm9tIFwiLi9zYnV0dG9uMi5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgc3RhdGVtZW50LCBsb29wLCBzbG90LCBoIH0gZnJvbSAnQHNpcGgvcmVuZGVyJztcblxuXHRcdFxuXHRcdGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdG1ldGhvZHM6IHt9LFxuXHRcdH0sIGNvbXBvbmVudENvbmZpZyk7XG5cblx0XHRsZXQgaW5zdGFuY2UgPSBmdW5jdGlvbiBTYnV0dG9uMihwYXJlbnQsIGN0eCkge1xuXHRcdFx0XG5cdFx0fTtcblxuXHRcdGluc3RhbmNlLl9mdW5jdGlvbmFsID0gdHJ1ZTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnU2J1dHRvbjInO1xuXHRcdGluc3RhbmNlLl9zbG90c0RhdGEgPSB7XCJkZWZhdWx0XCI6e1wicGF0aFwiOlswLDBdLFwidGFnXCI6XCJzcGFuXCIsXCJpbmRleFwiOjB9fTtcblxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5tZXRob2RzKSB7XG5cdFx0XHRpbnN0YW5jZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XG5cblx0XHRcblx0XHRcdGluc3RhbmNlLnJlbmRlciA9IGZ1bmN0aW9uKGN0eCkge1xuXHRcdFx0XHRyZXR1cm4gaChcbiAgXCJkaXZcIixcbiAgW2N0eC5vcHRpb25zLCB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiIH1dLFxuICBbc2xvdChjdHgsIGgsIFwiZGVmYXVsdFwiLCBcInNwYW5cIiwge30sIFtgRGVmYXVsdCBidXR0b24gdGV4dGBdKV1cbik7XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHRpbnN0YW5jZS5oeWRyYXRlID0gZnVuY3Rpb24oY3R4LCBoKSB7XG5cdFx0XHRcdGN0eC5jbGljayA9IHRoaXMuY2xpY2s7XG5cblx0XHRcdFx0cmV0dXJuIC0xO1xuO1xuXHRcdFx0fVxuXHRcdFxuXG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHt9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHN0YXRlKG8pIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgY29tcHV0ZWQobykge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFsZXJ0KHMxKTtcbiAgICB9XG4gIH1cbn07IiwiZXhwb3J0IGNvbnN0IF8gPSAtMTtcbiIsImltcG9ydCBTaW51b3VzIGZyb20gJ0BzaXBoL2knO1xuaW1wb3J0IHsgXyB9IGZyb20gJ0BzaXBoL2NvbXBpbGVyL3NyYy9lbXB0eSc7XG5cbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkIH0gZnJvbSAnLi9vYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgc3RhdGVtZW50LCBsb29wLCBzbG90LCBoIH0gZnJvbSAnQHNpcGgvcmVuZGVyJztcblxuLy8gaW1wb3J0IHsgcmVuZGVyLCBoeWRyYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5sZXQgSElEID0gMDtcblxuXG52YXIgQmFzaWMgPSBmdW5jdGlvbiAoKSB7XG5cblx0ZnVuY3Rpb24gQmFzaWMoKVxuXHR7XG5cdFx0dGhpcy5faXNDb21wb25lbnQgPSB0cnVlO1xuXHRcdHRoaXMuaGlkID0gKytISUQ7XG5cdFx0dGhpcy4kZWwgPSBudWxsO1xuXG5cdFx0dGhpcy5fcHJvcHMgPSB7fTtcblxuXHRcdC8vIExvY2FsIGRhdGFcblx0XHR0aGlzLl9kYXRhID0gdGhpcy5kYXRhKCk7XG5cdFx0Ly8gU3RhdGVmdWwgZGF0YVxuXHRcdHRoaXMuX3N0YXRlID0gdGhpcy5zdGF0ZShvYnNlcnZhYmxlKTtcblx0XHQvLyBzbG90c1xuXHRcdHRoaXMuX3Nsb3RzID0ge1xuXHRcdFx0ZGVmYXVsdDogW10sXG5cdFx0fTtcblx0XHQvLyBob29rc1xuXHRcdHRoaXMuX2hvb2tzID0gW107XG5cblx0XHR0aGlzLl9jb21wdXRlZCA9IHRoaXMuY29tcHV0ZWQoY29tcHV0ZWQpO1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gW107XG5cdFx0dGhpcy5fZWxfaW5kZXggPSAwO1xuXHRcdHRoaXMub3B0aW9ucyA9IG51bGw7XG5cblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXG5cdFx0Ly8gRGVmYXVsdCBwcm9wIHZhbHVlcyBcblx0XHQvLyB0aGlzLmluaXRQcm9wcygpO1xuXG5cdFx0Ly8gdGhpcy5pbml0VGVtcGxhdGUoKTtcblxuXHRcdHRoaXMuc2V0Q2hpbGRyZW4oKTtcblx0XHR0aGlzLnNldFBhcmVudCgpO1xuXG5cdFx0dGhpcy5iaW5kQ29udGV4dCgpO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuYmluZENvbnRleHQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9jb21wdXRlZCkge1xuXHRcdFx0dGhpcy5fY29tcHV0ZWRba2V5XSA9IHRoaXMuX2NvbXB1dGVkW2tleV0uYmluZCh0aGlzKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9tZXRob2RzKSB7XG5cdFx0XHRsZXQgbmFtZSA9IHRoaXMuX21ldGhvZHNba2V5XTtcblx0XHRcdHRoaXNbbmFtZV0gPSB0aGlzW25hbWVdLmJpbmQodGhpcyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBDb25maWdcblx0ICovXG5cblx0Ly8gQmFzaWMucHJvdG90eXBlLnNldE1ldGhvZHMgPSBmdW5jdGlvbihtZXRob2RzID0ge30pXG5cdC8vIHtcblx0Ly8gXHR0aGlzLl9tZXRob2RzID0gbWV0aG9kcztcblx0Ly8gfVxuXG5cdC8qKlxuXHQgKiBIaWVyYXJjaHlcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnNldENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGRyZW4gPSBbXSlcblx0e1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5hZGRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkKVxuXHR7XG5cdFx0aWYoY2hpbGQuX2Z1bmN0aW9uYWwpIHtcblx0XHRcdGNoaWxkID0gXztcblx0XHR9XG5cblx0XHR0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblxuXHRcdGlmKGNoaWxkLnNldFBhcmVudCkge1xuXHRcdFx0Y2hpbGQuc2V0UGFyZW50KHRoaXMpO1xuXHRcdH1cblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uKGluZGV4KVxuXHR7XG5cdFx0dGhpcy5fY2hpbGRyZW5baW5kZXhdLmhvb2soJ3VubW91bnRlZCcpO1xuXHRcdHRoaXMuX2NoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUuc2V0UGFyZW50ID0gZnVuY3Rpb24ocGFyZW50ID0gbnVsbClcblx0e1xuXHRcdHRoaXMuX3BhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm9wc1xuXHQgKi9cblx0QmFzaWMucHJvdG90eXBlLnByb3BzID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblxuXHQvLyBCYXNpYy5wcm90b3R5cGUuaW5pdFByb3BzID0gZnVuY3Rpb24oKVxuXHQvLyB7XG5cdC8vIFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fcHJvcHMpXG5cdC8vIFx0e1xuXHQvLyBcdFx0bGV0IHByb3AgPSB0aGlzLl9wcm9wc1trZXldO1xuXHQvLyBcdFx0bGV0IHZhbHVlID0gbnVsbDtcblx0Ly8gXHRcdGxldCB0eXBlID0gbnVsbDtcblxuXHQvLyBcdFx0aWYodHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbicpIHtcblx0Ly8gXHRcdFx0Ly8gdHlwZVxuXHQvLyBcdFx0fSBlbHNlIHtcblx0Ly8gXHRcdFx0dmFsdWUgPSBwcm9wLmRlZmF1bHQoKTtcblx0Ly8gXHRcdH1cblxuXHQvLyBcdFx0dGhpcy5fZGF0YVtrZXldID0gdmFsdWU7XG5cdC8vIFx0fVxuXHQvLyB9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc1Nsb3RzID0gZnVuY3Rpb24obmFtZSwgc2xvdHMpXG5cdHtcblx0XHR0aGlzLl9zbG90c1tuYW1lXSA9IHNsb3RzO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucylcblx0e1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc1Byb3BzID0gZnVuY3Rpb24ocHJvcHMpXG5cdHtcblx0XHRpZighcHJvcHMpIHtcblx0XHRcdHByb3BzID0ge307XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fX3Byb3BzKVxuXHRcdHtcblx0XHRcdGxldCB2YWx1ZSA9IHRoaXMuX19wcm9wc1trZXldLmRlZmF1bHQoKTtcblx0XHRcdGlmKHByb3BzW2tleV0pIHtcblx0XHRcdFx0dmFsdWUgPSBwcm9wc1trZXldO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9wcm9wc1trZXldID0gdmFsdWU7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogTG9jYWwgY29tcG9uZW50IGRhdGFcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5jb21wdXRlZCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGF0ZWZ1bCBkYXRhXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5zdGF0ZSA9IGZ1bmN0aW9uKG8pXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHQvKipcblx0ICogMS4gQ3JlYXRlIGNoaWxkIGNvbXBvbmVudHMgKGRpZmZlcmVudCBjb250ZXh0KVxuXHQgKiAyLiBQYXNzIHByb3BzXG5cdCAqIDMuIFJlbmRlclxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUudGVtcGxhdGUgPSBmdW5jdGlvbigpIHt9XG5cblx0QmFzaWMucHJvdG90eXBlLmNoaWxkQ29tcG9uZW50cyA9IGZ1bmN0aW9uKCkge31cblxuXHQvKipcblx0ICogIExpZmUgY3ljbGUgaG9va3Ncblx0ICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5ob29rID0gZnVuY3Rpb24odHlwZSA9ICdtb3VudGVkJylcblx0e1xuXHRcdGlmKCF0aGlzLl9ob29rcy5pbmNsdWRlcyh0eXBlKSkge1xuXHRcdFx0dGhpcy5faG9va3MucHVzaCh0eXBlKTtcblx0XHR9XG5cblx0XHRpZih0aGlzW3R5cGVdKSB7XG5cdFx0XHR0aGlzW3R5cGVdLmNhbGwodGhpcyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodGhpcy5fY2hpbGRyZW5baV0gPT09IF8gfHwgdGhpcy5fY2hpbGRyZW5baV0uX2hvb2tzLmluY2x1ZGVzKHR5cGUpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZighdGhpcy5fY2hpbGRyZW5baV0uX2Z1bmN0aW9uYWwpIHtcblx0XHRcdFx0dGhpcy5fY2hpbGRyZW5baV0uaG9vayh0eXBlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5tb3VudGVkID0gZnVuY3Rpb24oKSB7fVxuXG5cdEJhc2ljLnByb3RvdHlwZS51bm1vdW50ZWQgPSBmdW5jdGlvbigpIHt9XG5cblx0LyoqXG5cdCAqIFByaXZhdGUgQVBJIGZvciByZW5kZXIgYW5kIGh5ZHJhdGVcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGN0eCA9IG51bGwpXG5cdHtcblx0XHRpZihjdHggPT09IG51bGwpIHtcblx0XHRcdGN0eCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aC5iaW5kKGN0eCk7XG5cblx0XHR0aGlzLiRlbCA9IGN0eC5fX3JlbmRlcihoLmJpbmQoY3R4KSwge1xuXHRcdFx0Y3R4LFxuXHRcdFx0c3RhdGVtZW50LFxuXHRcdFx0bG9vcCxcblx0XHRcdHNsb3QsXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy4kZWw7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5oeWRyYXRlID0gZnVuY3Rpb24oY3R4ID0gbnVsbClcblx0e1xuXHRcdGlmKGN0eCA9PT0gbnVsbCkge1xuXHRcdFx0Y3R4ID0gdGhpcztcblx0XHR9XG5cblx0XHRoLmJpbmQoY3R4KTtcblxuXHRcdHJldHVybiBjdHguX19oeWRyYXRlKGgpO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUudGVtcGxhdGUgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXG5cdC8vIEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZUJ1aWxkZXIgPSBmdW5jdGlvbihoLCBvcHRzKVxuXHQvLyB7XG5cdC8vIFx0cmV0dXJuIHRoaXNbYF9fJHsgb3B0cy5yZW5kZXIgfWBdKGgsIG9wdHMpO1xuXHQvLyB9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuY29tcG9uZW50ID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUuZ2V0VUlEID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRyZXR1cm4gYGh5ZHItJHsgU2ludW91cy5jcmVhdGVISUQoaW5kZXgpIH1gO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oXCJuYW1lXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lOyB9KTtcblxuXHRyZXR1cm4gQmFzaWM7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xuIiwiaW1wb3J0IHsgaCwgaHMsIGFwaSB9IGZyb20gJ3NpbnVvdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljKGgsIHRhZywgb3B0cywgY2hpbGRyZW4pXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IGVsID0gdGFnKCk7XG5cdFx0cmV0dXJuIGgoZWwsIG9wdHMsIGNoaWxkcmVuKTtcblx0fTtcblxufVxuIiwiaW1wb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJ0BzaXBoL2xhenknO1xuaW1wb3J0IHsgbWFwIGFzIGxvb3AgfSBmcm9tICcuL21hcCc7XG5pbXBvcnQgeyBzbG90IH0gZnJvbSAnLi9zbG90JztcbmltcG9ydCB7IHN0YXRlbWVudCB9IGZyb20gJy4vc3RhdGVtZW50JztcbmltcG9ydCB7IGggfSBmcm9tICcuL2gnO1xuXG5mdW5jdGlvbiByZW5kZXIoY29tcG9uZW50LCBsYXlvdXQsIHRpbWVCZW5jaG1hcmsgPSAoKSA9PiB7fSwgY2FsbGJhY2sgPSBudWxsKSB7XG5cbiAgICBsYXlvdXQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgKGluc3RhbmNlKSA9PiB7XG5cbiAgICBcdHRpbWVCZW5jaG1hcmsoJ1JlbmRlcicpO1xuXG5cdFx0bGF5b3V0LmFwcGVuZChpbnN0YW5jZS5yZW5kZXIoKSk7XG5cdFx0aW5zdGFuY2UuaG9vaygnbW91bnRlZCcpO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHR0aW1lQmVuY2htYXJrKCdSZW5kZXInKTtcblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fSk7XG59XG5cbmV4cG9ydCB7IHJlbmRlciwgbG9vcCwgc3RhdGVtZW50LCBzbG90LCBoIH07XG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlIGFzIHNpbnVvdXNPYnNlcnZhYmxlLCBjb21wdXRlZCBhcyBzaW51b3VzQ29tcHV0ZWQgfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU9ic2VlcnZhYmxlKGZuKVxue1xuXHRmbi5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cdHJldHVybiBmbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkKHYsIGJpbmRpbmcgPSBmYWxzZSkge1xuXG5cdGxldCBkO1xuXHRcblx0aWYoYmluZGluZykge1xuXHRcdGQgPSBzaW51b3VzQ29tcHV0ZWQodi5iaW5kKHRoaXMpKTtcblx0fSBlbHNlIHtcblx0XHRkID0gc2ludW91c0NvbXB1dGVkKHYpO1xuXHR9XG5cblx0bWFrZU9ic2VlcnZhYmxlKGQpO1xuXG5cdHJldHVybiBkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2YWJsZSh2LCBiaW5kaW5nID0gZmFsc2UpXG57XG5cdC8vIGxldCBvYnMgPSBudWxsO1xuXHQvLyBsZXQgaW5kZXggPSAwO1xuXG5cdC8vIGxldCBkYXRhID0gKHYpID0+IHtcblx0Ly8gXHRjb25zb2xlLmxvZyhzZWVkLCB2LCBpbmRleClcblx0Ly8gXHRpZih0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0Ly8gXHRcdGlmKGluZGV4ID09PSAwKSB7XG5cdC8vIFx0XHRcdGluZGV4Kys7XG5cdC8vIFx0XHRcdHJldHVybiBzZWVkO1xuXHQvLyBcdFx0fVxuXG5cdC8vIFx0XHRyZXR1cm4gb2JzKCk7XG5cdC8vIFx0fVxuXG5cdC8vIFx0Ly8gaWYoaW5kZXggPT09IDApIHtcblx0Ly8gXHQvLyBcdGluZGV4Kys7XG5cdC8vIFx0Ly8gXHRyZXR1cm4gdjtcblx0Ly8gXHQvLyB9XG5cblx0Ly8gXHQvLyBpZihvYnMgPT09IG51bGwpIHtcblx0Ly8gXHQvLyBcdG9icyA9IHNpbnVvdXNPYnNlcnZhYmxlKHYpO1xuXHQvLyBcdC8vIH1cblx0Ly8gfVxuXG5cdGxldCBkID0gc2ludW91c09ic2VydmFibGUodik7XG5cblx0XG5cdG1ha2VPYnNlZXJ2YWJsZShkKTtcblxuXHRyZXR1cm4gZDtcbn1cbiIsImZ1bmN0aW9uIGFyZ1RvU3RyaW5nKClcbntcblx0bGV0IHN0ciA9ICcnO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHZhbHVlID0gYXJndW1lbnRzW2ldO1xuXHRcdFxuXHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dmFsdWUgPSB2YWx1ZSgpO1xuXHRcdH1cblxuXHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvcihsZXQga2V5IGluIHZhbHVlKSB7XG5cdFx0XHRcdGlmKHZhbHVlW2tleV0pIHtcblx0XHRcdFx0XHRzdHIgKz0gYCAkeyBrZXkgfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RyICs9IGAgJHt2YWx1ZX1gO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJnVG9PYmplY3QoKVxue1xuXHRsZXQgc3RyID0gJyc7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBhcmd1bWVudHNbaV0pIHtcblx0XHRcdGxldCB2YWx1ZSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuXHRcdFx0aWYodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1trZXldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBQYXJzZSBjbGFzc2VzXG4gKiBAcGFyYW0gIHtbdHlwZV19IHN0YXRpYyAgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7W3R5cGVdfSBkeW5hbWljIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbmZ1bmN0aW9uIGNsYXNzZXMoc3RyID0gbnVsbCwgZHluYW1pYyA9IG51bGwpXG57XG5cdGlmKHN0ciA9PT0gbnVsbCAmJiBkeW5hbWljID09PSBudWxsKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0aWYoc3RyID09PSBudWxsKSB7XG5cdFx0c3RyID0gJyc7XG5cdH1cblx0XG5cdGlmKHR5cGVvZiBkeW5hbWljID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0ZHluYW1pYyA9IGR5bmFtaWMoKTtcblx0fVxuXG5cdGlmKCFBcnJheS5pc0FycmF5KGR5bmFtaWMpKSB7XG5cdFx0ZHluYW1pYyA9IFtkeW5hbWljXTtcblx0fVxuXG5cdHN0ciArPSBhcmdUb1N0cmluZy5hcHBseSh0aGlzLCBkeW5hbWljKTtcblx0XG5cdC8vIGNvbnNvbGUubG9nKHN0cik7XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBTdHlsZXNcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqICAgICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IGR5bmFtaWMgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZnVuY3Rpb24gbWFrZVN0eWxlUHJvcChuYW1lKVxue1xuXHRyZXR1cm4gbmFtZVxuXHRcdC5yZXBsYWNlKC9cXC4/KFtBLVpdKykvZywgZnVuY3Rpb24gKHgseSkge1xuXHRcdFx0cmV0dXJuIFwiLVwiICsgeS50b0xvd2VyQ2FzZSgpXG5cdFx0fSlcblx0XHQucmVwbGFjZSgvXi0vLCBcIlwiKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVzKG9iaiA9IHt9LCBkeW5hbWljID0gbnVsbClcbntcblx0bGV0IHJlYWR5U3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKTtcblxuXHRpZih0eXBlb2YgZHluYW1pYyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGR5bmFtaWMgPSBkeW5hbWljKCk7XG5cdH1cblxuXHRpZighQXJyYXkuaXNBcnJheShkeW5hbWljKSkge1xuXHRcdGR5bmFtaWMgPSBbZHluYW1pY107XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGR5bmFtaWMubGVuZ3RoOyBpKyspIHtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBkeW5hbWljW2ldKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSBkeW5hbWljW2ldW2tleV07XG5cdFx0XHRcblx0XHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlKCk7XG5cdFx0XHR9XG5cdFx0XHRyZWFkeVN0eWxlc1ttYWtlU3R5bGVQcm9wKGtleSldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlYWR5U3R5bGVzO1xufVxuXG5sZXQgY2xvbmVPcHRpb25zID0gWydfcycsICckc2xvdHMnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDc3MocmVhZHlPcHRpb25zLCBvcHRpb25zKVxue1xuXHRpZihvcHRpb25zLnN0YXRpY0NsYXNzIHx8IG9wdGlvbnMuY2xhc3MpIHtcblx0XHRyZWFkeU9wdGlvbnMuY2xhc3MgPSBjbGFzc2VzLmJpbmQodGhpcywgb3B0aW9ucy5zdGF0aWNDbGFzcyB8fCBudWxsLCBvcHRpb25zLmNsYXNzIHx8IG51bGwpO1xuXHR9XG5cblx0aWYob3B0aW9ucy5zdGF0aWNTdHlsZSB8fCBvcHRpb25zLnN0eWxlKSB7XG5cdFx0cmVhZHlPcHRpb25zLnN0eWxlID0gc3R5bGVzLmJpbmQodGhpcywgb3B0aW9ucy5zdGF0aWNTdHlsZSB8fCB7fSwgb3B0aW9ucy5zdHlsZSB8fCBudWxsKTtcblx0fVxuXG5cdHJldHVybiByZWFkeU9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlT3B0aW9uKG9wdGlvbiwgc2hvdWxkQ2xvbmUgPSB0cnVlKVxue1xuXHRsZXQgcmVhZHlPcHRpb24gPSB7fTtcblxuXHRpZihvcHRpb24ub24gIT09IHVuZGVmaW5lZCkge1xuXHRcdGZvcihsZXQga2V5IGluIG9wdGlvbi5vbikge1xuXHRcdFx0cmVhZHlPcHRpb25bYG9uJHtrZXl9YF0gPSBvcHRpb24ub25ba2V5XTtcblx0XHR9XG5cdH1cblxuXHRpZihvcHRpb24ua2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZWFkeU9wdGlvblsnZGF0YS1rZXknXSA9IG9wdGlvbi5rZXk7XG5cdH1cblxuXHRtYWtlQ3NzKHJlYWR5T3B0aW9uLCBvcHRpb24pO1xuXG5cdGlmKHNob3VsZENsb25lKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBuYW1lID0gY2xvbmVPcHRpb25zW2ldO1xuXHRcdFx0aWYob3B0aW9uW25hbWVdKSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9uW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVhZHlPcHRpb247XG59XG5cbmNvbnN0IEFzc2lnbk9iamVjdE9wdGlvbnMgPSBbJ3N0YXRpY1N0eWxlJywgJ2F0dHJzJywgJ29uJ107XG5jb25zdCBBc3NpZ25WYWx1ZU9wdGlvbnMgPSBbJ3N0eWxlJywgJ2NsYXNzJ107XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU9wdGlvbnMob3B0aW9ucylcbntcblx0bGV0IHJlYWR5T3B0aW9ucyA9IHt9O1xuXHRsZXQgc2hvdWxkQmVNZXJnZWQgPSBmYWxzZTtcblxuXHRpZihBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcblx0XHRcdGlmKG9wdGlvbnNbaV0gPT09IG51bGwpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9uc1tpXSk7XG5cblx0XHRcdGlmKGtleXMubGVuZ3RoID09PSAxICYmIGtleXMuaW5jbHVkZXMoJyRzbG90cycpKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihpID4gMCkge1xuXHRcdFx0XHRzaG91bGRCZU1lcmdlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGlmKCFzaG91bGRCZU1lcmdlZCkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnNbMV07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBvcHRpb25zO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IG9wdGlvbiA9IG9wdGlvbnNbaV1cblx0XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBBc3NpZ25PYmplY3RPcHRpb25zLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRsZXQgbmFtZSA9IEFzc2lnbk9iamVjdE9wdGlvbnNbal07XG5cdFx0XHRcblx0XHRcdGlmKCFvcHRpb25bbmFtZV0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFyZWFkeU9wdGlvbnNbbmFtZV0pIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zW25hbWVdID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGZvcihsZXQgcHJvcCBpbiBvcHRpb25bbmFtZV0pIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zW25hbWVdW3Byb3BdID0gb3B0aW9uW25hbWVdW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgQXNzaWduVmFsdWVPcHRpb25zLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRsZXQgbmFtZSA9IEFzc2lnblZhbHVlT3B0aW9uc1tqXTtcblxuXHRcdFx0aWYoIW9wdGlvbltuYW1lXSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIXJlYWR5T3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV0gPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0cmVhZHlPcHRpb25zW25hbWVdID0gcmVhZHlPcHRpb25zW25hbWVdLmNvbmNhdChvcHRpb25bbmFtZV0pO1xuXHRcdH1cblxuXHRcdGlmKG9wdGlvbi5fcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZWFkeU9wdGlvbnMuX3MgPSBvcHRpb24uX3M7XG5cdFx0fVxuXG5cdFx0aWYob3B0aW9uLmtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZWFkeU9wdGlvbnMua2V5ID0gb3B0aW9uLmtleTtcblx0XHR9XG5cblx0XHRpZihvcHRpb24uc3RhdGljQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYocmVhZHlPcHRpb25zLnN0YXRpY0NsYXNzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zLnN0YXRpY0NsYXNzID0gb3B0aW9uLnN0YXRpY0NsYXNzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zLnN0YXRpY0NsYXNzICs9ICcgJyArIG9wdGlvbi5zdGF0aWNDbGFzcztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBjb25zb2xlLndhcm4ocmVhZHlPcHRpb25zKVxuXG5cdHJldHVybiByZWFkeU9wdGlvbnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wdGlvbnMob3B0aW9ucywgc2hvdWxkQ2xvbmUgPSB0cnVlKVxue1xuXHRsZXQgcmVhZHlPcHRpb25zID0gbWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuXG5cdHJldHVybiBtYWtlT3B0aW9uKHJlYWR5T3B0aW9ucywgc2hvdWxkQ2xvbmUpO1xufVxuIiwiaW1wb3J0IHsgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnQHNpcGgvY29tcGlsZXIvc3JjL2VtcHR5JztcbmltcG9ydCBTaW51b3VzIGZyb20gJ0BzaXBoL2knO1xuaW1wb3J0IHsgb3B0aW9ucyBhcyBwYXJzZU9wdGlvbnMsIGggfSBmcm9tICdAc2lwaC9jb21wb25lbnQnO1xuaW1wb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJ0BzaXBoL2xhenknO1xuaW1wb3J0IHsgbG9vcCB9IGZyb20gJ0BzaXBoL3JlbmRlcic7XG5pbXBvcnQgaHlkcmF0ZVByb3BzIGZyb20gJy4vcHJvcGVydHknO1xuXG5sZXQgT0JTRVJWRVI7XG5sZXQgU1RPUkFHRSA9IHt9O1xuXG5mdW5jdGlvbiBoeWRyYXRlSChjb250ZXh0LCBlbCwgb3B0aW9ucywgY2hpbGRyZW4pXG57XG5cdGh5ZHJhdGVQcm9wcyhjb250ZXh0LCBlbCwgb3B0aW9ucyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGh5ZHJhdGUoY29udGV4dCwgZWwuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5baV0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVTdGF0ZW1lbnQoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0bGV0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcblx0bGV0IHN0YXJ0SW5kZXggPSAwO1xuXG5cdHdoaWxlKChub2RlID0gbm9kZS5wcmV2aW91c1NpYmxpbmcpICE9IG51bGwpXG5cdFx0c3RhcnRJbmRleCsrO1xuXHRcblx0bGV0IHN0YXRlbWVudEFyZ3MgPSBhcmdzLmE7XG5cblx0ZnVuY3Rpb24gaGlkZU5vZGVzKGNoaWxkcmVuLCBzdGFydEluZGV4LCBsZW5ndGgpXG5cdHtcblx0XHRmb3IgKHZhciBqID0gc3RhcnRJbmRleDsgaiA8PSBsZW5ndGg7IGorKykge1xuXHRcdFx0bGV0IG5vZGUgPSBjaGlsZHJlbltqXTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdoaWRlJywgaiwgbm9kZSk7XG5cdFx0XHRpZihub2RlLm5vZGVUeXBlICE9PSBOb2RlLkNPTU1FTlRfTk9ERSkge1xuXHRcdFx0XHRub2RlLnJlcGxhY2VXaXRoKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcblx0XHRcdH1cblxuXHRcdFx0bm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdH1cblx0fVxuXG5cdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdGxldCBjdXJyZW50SW5kZXggPSBzdGFydEluZGV4O1xuXHRcdGxldCBmb3VuZENvbmRpdGlvbiA9IGZhbHNlO1xuXHRcdFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGVtZW50QXJncy5sZW5ndGg7IGkrPSAzKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gc3RhdGVtZW50QXJnc1tpXTtcblx0XHRcdGxldCBzaXplID0gc3RhdGVtZW50QXJnc1tpICsgMV07XG5cdFx0XHRsZXQgY29tcG9uZW50ID0gc3RhdGVtZW50QXJnc1tpICsgMl07XG5cblx0XHRcdGxldCBjdXJyZW50Tm9kZSA9IHBhcmVudC5jaGlsZE5vZGVzW2N1cnJlbnRJbmRleF07XG5cblx0XHRcdGNvbmRpdGlvbiA9IHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicgPyBjb25kaXRpb24oKSA6IGNvbmRpdGlvbjtcblxuXHRcdFx0Ly8gY29uc29sZS5sb2coY3VycmVudE5vZGUsIGNvbmRpdGlvbiAmJiAhZm91bmRDb25kaXRpb24pO1xuXHRcdFx0aWYoY29uZGl0aW9uICYmICFmb3VuZENvbmRpdGlvbikge1xuXHRcdFx0XHRmb3VuZENvbmRpdGlvbiA9IHRydWU7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdzaG93JywgcGFyZW50LmNoaWxkTm9kZXNbY3VycmVudEluZGV4XSwgc2l6ZSk7XG5cdFx0XHRcdGlmKGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkNPTU1FTlRfTk9ERSkge1xuXHRcdFx0XHRcdC8vICByZW5kZXJcblx0XHRcdFx0XHRsZXQgbmV3Tm9kZSA9IGNvbXBvbmVudC5yKGguYmluZChjb250ZXh0KSk7XG5cdFx0XHRcdFx0Y3VycmVudE5vZGUucmVwbGFjZVdpdGgobmV3Tm9kZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gaHlkcmF0ZVxuXHRcdFx0XHRcdG1hcmtBc1JlYWR5KGN1cnJlbnROb2RlKTtcblx0XHRcdFx0XHRoeWRyYXRlKGNvbnRleHQsIGN1cnJlbnROb2RlLCBjb21wb25lbnQuaCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdbaGlkZV0nLCBwYXJlbnQuY2hpbGROb2RlcywgY3VycmVudEluZGV4LCBzaXplKTtcblx0XHRcdFx0aGlkZU5vZGVzKHBhcmVudC5jaGlsZE5vZGVzLCBjdXJyZW50SW5kZXgsIHNpemUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50SW5kZXggKz0gc2l6ZTtcblx0XHRcdC8vIGNvbnNvbGUud2FybihjdXJyZW50Tm9kZSwgY3VycmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nKVxuXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhjdXJyZW50Tm9kZSwgY29uZGl0aW9uLCAnc2tpcCcpO1xuXG5cdFx0XHRcblx0XHR9XG5cdH0pO1xuXHRcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZUxvb3AoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0bGV0IGNvbmRpdGlvbiA9IGFyZ3MuYztcblx0bGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdGxldCBwYXJlbnRDaGlsZHJlbiA9IHBhcmVudE5vZGUuY2hpbGROb2RlcztcblxuXHRsb29wKGNvbnRleHQsIGFyZ3MuYywgYXJncy5rLCAoaXRlbSwga2V5KSA9PiB7XG5cdFx0XG5cdFx0bGV0IG5vZGUgPSBhcmdzLnIoaC5iaW5kKGNvbnRleHQpLCBpdGVtLCBrZXkpO1xuXG5cdFx0cmV0dXJuIG5vZGU7XHRcblx0fSwgKHJlZ2lzdGVySHlkcmF0aW9uKSA9PiB7XG5cdFx0bGV0IGl0ZW1zID0gYXJncy5jKCk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbm9kZSA9IHBhcmVudENoaWxkcmVuW2ldO1xuXHRcdFx0bGV0IGl0ZW0gPSBpdGVtc1tpXTtcblx0XHRcdGxldCBpdGVtS2V5ID0gYXJncy5rKGl0ZW0sIGkpO1xuXG5cdFx0XHRpZihub2RlKSB7XG5cdFx0XHRcdGlmKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpID09IGl0ZW1LZXkpIHtcblx0XHRcdFx0XHRtYXJrQXNSZWFkeShub2RlKTtcblx0XHRcdFx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUsIGFyZ3MuaChpdGVtLCBpKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmVnaXN0ZXJIeWRyYXRpb24oaXRlbSwgaSwgbm9kZSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZWcsIGl0ZW0sIGksIG5vZGUpO1xuXHRcdH1cblx0fSwgbm9kZS5wYXJlbnROb2RlKTtcblxufVxuXG4vKipcbiAqIE1heWJlIG5lZWQgc2FtZSBoeWRyYXRpb24gYWxnb3JpdGhtIGFzIHdpdGggcHJvcHNcbiAqIFNraXAgZmlyc3QgdGltZSBoeWRyYXRpb24gPz8/XG4gKi9cbmZ1bmN0aW9uIGh5ZHJhdGVUZXh0KGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGlmKGFyZ3MudCA9PT0gXykge1xuXHRcdHJldHVybjtcblx0fVxuXHRcblx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0YXBpLmluc2VydChub2RlLCBhcmdzLnQoKSwgbnVsbCk7XG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIGdldFNsb3ROb2RlKGVsLCB0YWcsIHBhdGgpXG57XG5cdGxldCBub2RlID0gZWw7XG5cblx0Zm9yICh2YXIgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG5cdFx0bm9kZSA9IG5vZGUuY2hpbGROb2Rlc1twYXRoW2ldXTtcblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVNsb3RzKGNvbnRleHQsIGVsLCBvcHRzID0ge30sIHNsb3RzKVxue1xuXHQvLyByZXR1cm47XG5cdC8vIEh5ZHJhdGUgcHJvcHMgb2YgbWFpbiBOb2RlXG5cdC8vIGh5ZHJhdGVQcm9wcyhjb250ZXh0LCBlbCwgb3B0cyk7XG5cdFxuXHRsZXQgYmluZGVkTm9kZXMgPSB7fVxuXG5cdGxldCBzbG90RGF0YSA9IGNvbnRleHQuX3Nsb3RzRGF0YTtcblxuXHQvLyBGaW5kIHNsb3QgYmluZGluZyBub2Rlc1xuXHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuXHRcdGlmKHNsb3REYXRhW2tleV0pIHtcblx0XHRcdGxldCBub2RlID0gZ2V0U2xvdE5vZGUoZWwsIHNsb3REYXRhW2tleV0udGFnLCBzbG90RGF0YVtrZXldLnBhdGgpO1xuXHRcdFx0YmluZGVkTm9kZXNba2V5XSA9IG5vZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gJHtrZXl9IHNsb3QgbmFtZXNwYWNlIGRlZmluZWRgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBIeWRyYXRlIHNsb3RzIHBlciBiaW5kZWQgdGFnXG5cdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG5cdFx0bGV0IGRhdGEgPSBzbG90RGF0YVtrZXldO1xuXHRcdGxldCBub2RlID0gYmluZGVkTm9kZXNba2V5XTtcblx0XHRsZXQgY2hpbGRyZW5TbG90cyA9IHNsb3RzW2tleV07XG5cdFx0bGV0IHN0YXJ0Tm9kZUluZGV4ID0gZGF0YS5pbmRleDtcblxuXHRcdGlmKHR5cGVvZiBub2RlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y29uc29sZS53YXJuKGVsLCBvcHRzLCBzbG90RGF0YSwgZWxbMF0pO1xuXHRcdH1cblxuXHRcdGlmKGNoaWxkcmVuU2xvdHMubGVuZ3RoID4gbm9kZS5sZW5ndGgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU2xvdCBoeWRyYXRpb24gbGVuZ3RoIG1pc21hdGNoJyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0Tm9kZUluZGV4OyBpIDwgY2hpbGRyZW5TbG90cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Ly8gY29uc29sZS5sb2cobm9kZS5jaGlsZE5vZGVzW2ldLCBjaGlsZHJlblNsb3RzW2ldKVxuXHRcdFx0aHlkcmF0ZShjb250ZXh0LCBub2RlLmNoaWxkTm9kZXNbaV0sIGNoaWxkcmVuU2xvdHNbaV0pO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIENvbnRleHQgc2V0dXBcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJDaGlsZHJlbihwYXJlbnQsIGNoaWxkKVxue1xuXHRpZihjaGlsZC5fZnVuY3Rpb25hbCkge1xuXHRcdHBhcmVudC5hZGRDaGlsZHJlbihfKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwYXJlbnQuYWRkQ2hpbGRyZW4oY2hpbGQpO1xuXHRjaGlsZC5zZXRQYXJlbnQocGFyZW50KTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVRhZyhjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRsZXQgZWwgPSBhcmdzLnQsXG5cdFx0b3B0cyA9IGFyZ3Mubyxcblx0XHRjaGlsZHJlbiA9IGFyZ3MuYztcblxuXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG5cdFx0aHlkcmF0ZUgoY29udGV4dCwgbm9kZSwgb3B0cywgY2hpbGRyZW4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldEh5ZHJhdGVDb21wb25lbnQoZWwsIG9wdHMpO1xuXG5cdGlmKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBfO1xuXHR9XG5cblx0Y29udGV4dC5hZGRDaGlsZHJlbihjb21wb25lbnQpO1xuXG5cdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuXHRcdGxldCBuZXdBcmdzID0gY29tcG9uZW50Lmh5ZHJhdGUoe1xuXHRcdFx0X3Nsb3RzOiBvcHRzLiRzbG90cyxcblx0XHR9KTtcblxuXHRcdGlmKG9wdHMuJHNsb3RzKSB7XG5cdFx0XHRoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBub2RlLCBvcHRzLCBvcHRzLiRzbG90cyk7XG5cdFx0fVxuXG5cdFx0Ly8gY29uc29sZS5sb2cob3B0cylcblx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUsIG5ld0FyZ3MpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29tcG9uZW50LnBhc3NQcm9wcyhvcHRzLnByb3BzKTtcblx0Y29tcG9uZW50LnBhc3NPcHRpb25zKG9wdHMpO1xuXG5cdGlmKG9wdHMuJHNsb3RzKSB7XG5cdFx0aHlkcmF0ZVNsb3RzKGNvbXBvbmVudCwgbm9kZSwgb3B0cywgb3B0cy4kc2xvdHMpO1xuXHR9XG5cblx0bm9kZS4kcyA9IGNvbXBvbmVudDtcblx0Ly8gY29uc29sZS5sb2coY29tcG9uZW50LCBub2RlKVxuXG5cdHJldHVybiBoeWRyYXRlKGNvbXBvbmVudCwgbm9kZSwgY29tcG9uZW50Lmh5ZHJhdGUoY29tcG9uZW50KSk7XG59XG5cbi8qKlxuICogTWFpbiBoeWRyYXRpb24gZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gaHlkcmF0ZShjb250ZXh0LCBub2RlLCBhcmdzID0gbnVsbClcbntcblx0Ly8gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG5cdFx0aHlkcmF0ZUlkbGUoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdC8vIH0sIHtcblx0Ly8gXHR0aW1lb3V0OiAwLFxuXHQvLyBcdHJlYWQ6IHRydWVcblx0Ly8gfSk7XG59XG5cbmZ1bmN0aW9uIG1hcmtBc1JlYWR5KG5vZGUpXG57XG5cdG5vZGUuX2h5ZHJhdGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZUlkbGUoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0aWYoYXJncyA9PT0gbnVsbCB8fCBub2RlID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ2gnKSB7XG5cdFx0Ly8gYXJncy5vWydkYXRhLWh5ZHJhdGVkJ10gPSB0cnVlO1xuXHRcdC8vIGFyZ3Mub1snX3MnXSA9IHRydWU7XG5cdFx0aHlkcmF0ZVRhZyhjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXG5cdGlmKGFyZ3MuX3QgPT09ICd0Jykge1xuXHRcdGh5ZHJhdGVUZXh0KGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ2xvb3AnKSB7XG5cdFx0aHlkcmF0ZUxvb3AoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnc3RhdGVtZW50Jykge1xuXHRcdGh5ZHJhdGVTdGF0ZW1lbnQoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblx0XG5cdHJldHVybiBfO1xuXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SHlkcmF0aW9uKGNvbXBvbmVudCwgaHlkcmF0aW9uUm9vdCwgdGltZUJlbmNobWFyayA9ICgpID0+IHt9LCBjYWxsYmFjayA9IG51bGwpXG57XG5cdGxvYWRDb21wb25lbnQoY29tcG9uZW50LCAoaW5zdGFuY2UpID0+IHtcblxuXHRcdHRpbWVCZW5jaG1hcmsoJ0h5ZHJhdGlvbicpO1xuXG5cdFx0bGV0IHRyZWUgPSBbaW5zdGFuY2VdO1xuXG5cdFx0U2ludW91cy5jbGVhckhJRCgpO1xuXG5cdFx0Ly8gbGV0IGNvbm5lY3RlZE5vZGUgPSBmaWx0ZXJDaGlsZE5vZGVzKGh5ZHJhdGlvblJvb3QpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY29tcG9uZW50ID0gdHJlZVtpXTtcblx0XHRcdGxldCBub2RlID0gaHlkcmF0aW9uUm9vdC5jaGlsZE5vZGVzW2ldO1xuXHRcdFx0bGV0IGh5ZHJhdGlvbiA9IGNvbXBvbmVudC5oeWRyYXRlKGNvbXBvbmVudCk7XG5cdFx0XHRcblx0XHRcdGh5ZHJhdGUoY29tcG9uZW50LCBub2RlLCBoeWRyYXRpb24pO1xuXHRcdH1cblx0XHRcblx0XHQvLyBjb25zb2xlLmxvZyhpbnN0YW5jZSk7XG5cdFx0aW5zdGFuY2UuaG9vaygnbW91bnRlZCcpO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHR0aW1lQmVuY2htYXJrKCdIeWRyYXRpb24nKTtcblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fSk7XG5cbn1cblxuLyoqXG4gKiBGaWx0ZXIgb3V0IHdoaXRlc3BhY2UgdGV4dCBub2RlcyB1bmxlc3MgaXQgaGFzIGEgbm9za2lwIGluZGljYXRvci5cbiAqXG4gKiBAcGFyYW0gIHtOb2RlfSBwYXJlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBmaWx0ZXJDaGlsZE5vZGVzKHBhcmVudCkge1xuXHRyZXR1cm4gcGFyZW50LmNoaWxkTm9kZXM7XG5cdC8vIGNvbnNvbGUud2FybihwYXJlbnQsIHBhcmVudC5jaGlsZE5vZGVzKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGROb2RlcykuZmlsdGVyKFxuICAgICAgICBlbCA9PiBlbC5ub2RlVHlwZSAhPT0gMyB8fCBlbC5kYXRhLnRyaW0oKSB8fCBlbC5fbm9za2lwXG4gICAgKTtcbn1cbiIsImltcG9ydCB7IG1ha2VDc3MsIG1lcmdlT3B0aW9ucyB9IGZyb20gJ0BzaXBoL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICdzaW51b3VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHlkcmF0ZVByb3BzKGNvbnRleHQsIGVsLCBvcHRpb25zKVxue1xuXG5cdG9wdGlvbnMgPSBtZXJnZU9wdGlvbnMob3B0aW9ucyk7XG5cblx0aWYoIW9wdGlvbnMuX3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgc3Vic2NyaWJlcnMgPSBbXTtcblx0bGV0IHN1YnNjcmliZXJzX2ZpcnN0ID0gW107XG5cblx0ZnVuY3Rpb24gYWRkU3Vic2NyaWJlcih2YWx1ZSwgZm4sIHNraXAgPSB0cnVlKVxuXHR7XG5cdFx0c3Vic2NyaWJlcnMucHVzaCh7XG5cdFx0XHR2YWx1ZSxcblx0XHRcdGZuLFxuXHRcdH0pO1xuXG5cdFx0c3Vic2NyaWJlcnNfZmlyc3QucHVzaChza2lwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlIHN0eWxlcyBhbmQgY2xhc3Nlc1xuXHQgKi9cblx0aWYob3B0aW9ucy5zdHlsZSB8fCBvcHRpb25zLmNsYXNzKSB7XG5cdFx0Ly8gY29uc29sZS5lcnJvcihlbCk7XG5cdFx0bGV0IGNzc09wdGlvbnMgPSBtYWtlQ3NzKHt9LCBvcHRpb25zKTtcblxuXHRcdGlmKGNzc09wdGlvbnMuc3R5bGUpIHtcblx0XHRcdGFkZFN1YnNjcmliZXIoY3NzT3B0aW9ucy5zdHlsZSwgKG9iaikgPT4ge1xuXHRcdFx0XHRmb3IobGV0IG5hbWUgaW4gb2JqKSB7XG5cdFx0XHRcdFx0ZWwuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgb2JqW25hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYoY3NzT3B0aW9ucy5jbGFzcykge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coY3NzT3B0aW9ucy5jbGFzcygpKTtcblx0XHRcdGFkZFN1YnNjcmliZXIoY3NzT3B0aW9ucy5jbGFzcywgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGVsLCB2YWx1ZSk7XG5cdFx0XHRcdGVsLmNsYXNzTmFtZSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogTWFrZSBldmVudHNcblx0ICovXG5cdGlmKG9wdGlvbnMub24pIHtcblx0XHRmb3IobGV0IG5hbWUgaW4gb3B0aW9ucy5vbikge1xuXHRcdFx0aGFuZGxlRXZlbnQoZWwsIG5hbWUsIG9wdGlvbnMub25bbmFtZV0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlIGF0dHJpYnV0ZXNcblx0ICovXG5cdGlmKG9wdGlvbnMuYXR0cnMpIHtcblx0XHRmb3IobGV0IG5hbWUgaW4gb3B0aW9ucy5hdHRycykge1xuXHRcdFx0YWRkU3Vic2NyaWJlcihvcHRpb25zLmF0dHJzW25hbWVdLCAodmFsdWUpID0+IHtcblx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBTdWJzY3JpYmVcblx0ICovXG5cdGlmKHN1YnNjcmliZXJzLmxlbmd0aCA+IDApIHtcblx0XHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IHZhbHVlID0gc3Vic2NyaWJlcnNbaV0udmFsdWUoKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHN1YnNjcmliZXJzX2ZpcnN0W2ldKSB7XG5cdFx0XHRcdFx0c3Vic2NyaWJlcnNfZmlyc3RbaV0gPSBmYWxzZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJzY3JpYmVyc1tpXS5mbih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxufVxuXG5mdW5jdGlvbiBoYW5kbGVFdmVudChlbCwgbmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnRQcm94eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudFByb3h5KTtcbiAgICB9XG5cbiAgICAoZWwuX2xpc3RlbmVycyB8fCAoZWwuX2xpc3RlbmVycyA9IHt9KSlbbmFtZV0gPSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBQcm94eSBhbiBldmVudCB0byBob29rZWQgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0ge0V2ZW50fSBlIC0gVGhlIGV2ZW50IG9iamVjdCBmcm9tIHRoZSBicm93c2VyLlxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGV2ZW50UHJveHkoZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHJldHVybiB0aGlzLl9saXN0ZW5lcnNbZS50eXBlXShlKTtcbn1cbiIsImltcG9ydCB7IGggYXMgaHMgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IG9wdGlvbnMgfSBmcm9tICdAc2lwaC9jb21wb25lbnQnO1xuaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpcGgvaSc7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbntcblx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcblx0aWYoY2hpbGQuc2V0UGFyZW50KSB7XG5cdFx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGgoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbntcblx0ZWwgPSBlbC50b0xvd2VyQ2FzZSgpO1xuXHQvLyBlbCA9IGNvbXB1dGVkKCgpID0+ICh0eXBlb2YgZWwgPT09ICdmdW5jdGlvbicgPyBlbCA6IGVsKSk7XG5cblx0Ly8gY29uc29sZS5sb2coJ1sgRkYgXScsIGVsLCB0aGlzKVxuXHRsZXQgZHluYW1pY0F0dHJzID0gZmFsc2U7XG5cblx0bGV0IHJlYWR5T3B0aW9ucyA9IG9wdGlvbnMob3B0cyk7XG5cdC8vIElmIEhUTUwgdGFnIHJlbmRlclxuXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG5cdFx0cmV0dXJuIGhzKGVsLCByZWFkeU9wdGlvbnMsIGNoaWxkcmVuKTtcblx0fVxuXG5cdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldENvbXBvbmVudChlbCk7XG5cblx0Ly8gY29uc29sZS5sb2codGhpcylcblx0aWYodGhpcykge1xuXHRcdHRoaXMuYWRkQ2hpbGRyZW4oY29tcG9uZW50KTtcblx0fVxuXG5cdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuXHRcdGxldCAkc2xvdHMgPSBBcnJheS5pc0FycmF5KG9wdHMpID8gb3B0c1sxXS4kc2xvdHMgOiBvcHRzLiRzbG90cztcblx0XHRyZXR1cm4gY29tcG9uZW50LnJlbmRlcih7XG5cdFx0XHRvcHRpb25zOiBvcHRzLFxuXHRcdFx0X3Nsb3RzOiAkc2xvdHMsXG5cdFx0fSk7XG5cdH1cblxuXHQvLyBpZih0eXBlb2Ygb3B0cy5wcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Y29tcG9uZW50LnBhc3NQcm9wcyhvcHRzLnByb3BzKTtcblx0Ly8gfVxuXG5cdGZvcihsZXQga2V5IGluIG9wdHMuJHNsb3RzKSB7XG5cdFx0Y29tcG9uZW50LnBhc3NTbG90cyhrZXksIG9wdHMuJHNsb3RzW2tleV0pO1x0XG5cdH1cblxuXHRjb21wb25lbnQucGFzc09wdGlvbnMob3B0cyk7XG5cblx0bGV0IG5vZGUgPSBjb21wb25lbnQucmVuZGVyKCk7XG5cblx0bm9kZS4kcyA9IGNvbXBvbmVudDtcblxuXHRyZXR1cm4gbm9kZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkaWZmKHBhcmVudCwgYSwgYiwga2V5RXhwciwgZ2V0LCBiZWZvcmUpXG57XG5cdGNvbnN0IGFJZHggPSBuZXcgTWFwKCk7XG5cdGNvbnN0IGJJZHggPSBuZXcgTWFwKCk7XG5cdGxldCBpO1xuXHRsZXQgajtcblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgb2xkIGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihhW2ldLCBpKTtcblx0XHRhSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYltpXSwgaSk7XG5cdFx0YklkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUud2FybihhSWR4LCBiSWR4KTtcblxuXHRmb3IgKGkgPSBqID0gMDsgaSAhPT0gYS5sZW5ndGggfHwgaiAhPT0gYi5sZW5ndGg7KSB7XG5cdFx0dmFyIGFFbG0gPSBhW2ldLFxuXHRcdFx0YkVsbSA9IGJbal07XG5cdFx0aWYgKGFFbG0gPT09IG51bGwpIHtcblx0XHRcdC8vIFRoaXMgaXMgYSBlbGVtZW50IHRoYXQgaGFzIGJlZW4gbW92ZWQgdG8gZWFybGllciBpbiB0aGUgbGlzdFxuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYi5sZW5ndGggPD0gaikge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBuZXcsIHRoaXMgaXMgYSBkZWxldGVcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChnZXQoYVtpXSwgaSwgLTEpKTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGEubGVuZ3RoIDw9IGkpIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gb2xkLCB0aGlzIGlzIGFuIGFkZGl0aW9uXG5cdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGdldChiRWxtLCBqLCAxKSwgZ2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZSk7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIGlmIChhRWxtID09PSBiRWxtKSB7XG5cdFx0XHQvLyBObyBkaWZmZXJlbmNlLCB3ZSBtb3ZlIG9uXG5cdFx0XHRpKys7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSBjdXJyZW50IGVsZW1lbnQgYXQgdGhpcyBsb2NhdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0XHRcdC8vIFRoaXMgZ2l2ZXMgdXMgdGhlIGlkeCBvZiB3aGVyZSB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlXG5cdFx0XHR2YXIgY3VyRWxtSW5OZXcgPSBiSWR4LmdldChhRWxtKTtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSB0aGUgd2FudGVkIGVsbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoZSB3YW50ZWQgZWxlbWVudCBpcyBub3dcblx0XHRcdHZhciB3YW50ZWRFbG1Jbk9sZCA9IGFJZHguZ2V0KGJFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZ2V0KGFbaV0sIGksIC0xKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSBpZiAod2FudGVkRWxtSW5PbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBOZXcgZWxlbWVudCBpcyBub3QgaW4gb2xkIGxpc3QsIGl0IGhhcyBiZWVuIGFkZGVkXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGJFbG0sIGosIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0aisrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBpbiBib3RoIGxpc3RzLCBpdCBoYXMgYmVlbiBtb3ZlZFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbW92ZScsIGFbaV0sICdmcm9tJywgd2FudGVkRWxtSW5PbGQsICd0bycsIGkpXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGFbd2FudGVkRWxtSW5PbGRdLCB3YW50ZWRFbG1Jbk9sZCwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRhW3dhbnRlZEVsbUluT2xkXSA9IG51bGw7XG5cdFx0XHRcdGlmICh3YW50ZWRFbG1Jbk9sZCA+IGkgKyAxKSBpKys7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYjtcbn1cbiIsImltcG9ydCB7IGFwaSB9IGZyb20gJ3NpbnVvdXMnO1xuaW1wb3J0IHsgZGlmZiB9IGZyb20gJy4vZGlmZi5qcyc7XG5cbi8qKlxuICogTWFwIG92ZXIgYSBsaXN0IG9mIHVuaXF1ZSBpdGVtcyB0aGF0IGNyZWF0ZSBET00gbm9kZXMuXG4gKlxuICogTm8gZHVwbGljYXRlcyBpbiB0aGUgbGlzdCBvZiBpdGVtcyBpcyBhIGhhcmQgcmVxdWlyZW1lbnQsIHRoZSBkaWZmaW5nXG4gKiBhbGdvcml0aG0gd2lsbCBub3Qgd29yayB3aXRoIGR1cGxpY2F0ZSB2YWx1ZXMuIFNlZSBgLi91bmlxdWUuanNgLlxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBpdGVtcyAtIEZ1bmN0aW9uIG9yIG9ic2VydmFibGUgdGhhdCBjcmVhdGVzIGEgbGlzdC5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBleHByXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjbGVhbmluZ11cbiAqIEByZXR1cm4ge0RvY3VtZW50RnJhZ21lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXAoY29udGV4dCwgaXRlbXMsIGtleUV4cHIsIGV4cHIsIGJlZm9yZUluaXQgPSBudWxsLCBwYXJlbnQgPSBudWxsKSB7XG5cdGNvbnN0IHsgcm9vdCwgc3Vic2NyaWJlLCBzYW1wbGUsIGNsZWFudXAgfSA9IGFwaTtcblxuXHQvLyBEaXNhYmxlIGNsZWFuaW5nIGZvciB0ZW1wbGF0ZXMgYnkgZGVmYXVsdC5cblx0bGV0IGNsZWFuaW5nID0gdHJ1ZTsvLyFleHByLiR0O1xuXG5cdGlmKHBhcmVudCA9PT0gbnVsbCkge1xuXHRcdHBhcmVudCA9IGFwaS5oKFtdKTtcblx0fVxuXHRcblx0Y29uc3QgZW5kTWFyayA9IGFwaS5hZGQocGFyZW50LCAnJyk7XG5cblx0Y29uc3QgZGlzcG9zZXJzID0gbmV3IE1hcCgpO1xuXHRjb25zdCBub2RlcyA9IG5ldyBNYXAoKTtcblx0Y29uc3QgdG9SZW1vdmUgPSBuZXcgU2V0KCk7XG5cdGNvbnN0IGRlZmF1bHRBID0gW107XG5cblx0aWYoYmVmb3JlSW5pdCkge1xuXHRcdGJlZm9yZUluaXQoKGl0ZW0sIGtleSwgbikgPT4ge1xuXHRcdFx0ZGVmYXVsdEFba2V5XSA9IGl0ZW07XG5cdFx0XHRub2RlKGl0ZW0sIGtleSwgMSwgbik7XG5cdFx0fSlcblx0fVxuXG5cdGNvbnN0IHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGEgPT4ge1xuXHRcdGNvbnN0IGIgPSBpdGVtcygpO1xuXHRcdHJldHVybiBzYW1wbGUoKCkgPT4ge1xuXHRcdFx0dG9SZW1vdmUuY2xlYXIoKTtcblxuXHRcdFx0Ly8gQXJyYXkuZnJvbSB0byBtYWtlIGEgY29weSBvZiB0aGUgY3VycmVudCBsaXN0LlxuXHRcdFx0Y29uc3QgY29udGVudCA9IEFycmF5LmZyb20oXG5cdFx0XHRcdGRpZmYoZW5kTWFyay5wYXJlbnROb2RlLCBhIHx8IGRlZmF1bHRBLCBiLCBrZXlFeHByLCBub2RlLCBlbmRNYXJrKVxuXHRcdFx0KTtcblxuXHRcdFx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCBjb250ZXh0Ll9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhpLCBjb250ZXh0Ll9jaGlsZHJlbltpXS5oaWQsIGNvbnRleHQuX2NoaWxkcmVuW2ldLl9zdGF0ZS5zMSgpLCBjb250ZXh0Ll9jaGlsZHJlbltpXS5fcHJvcHMucHQpXG5cdFx0XHQvLyB9XG5cdFx0XHR0b1JlbW92ZS5mb3JFYWNoKGRpc3Bvc2UpO1xuXHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGNsZWFudXAodW5zdWJzY3JpYmUpO1xuXHRjbGVhbnVwKGRpc3Bvc2VBbGwpO1xuXG5cdGZ1bmN0aW9uIG5vZGUoaXRlbSwga2V5LCBpLCBlbCA9IG51bGwpIHtcblx0XHRpZiAoaXRlbSA9PSBudWxsKSByZXR1cm47XG5cblx0XHRsZXQgbm9kZUtleSA9IGtleUV4cHIoaXRlbSwga2V5KTtcblxuXHRcdGxldCBuID0gbm9kZXMuZ2V0KG5vZGVLZXkpO1xuXHRcdGlmIChpID09PSAxKSB7XG5cdFx0XHR0b1JlbW92ZS5kZWxldGUoaXRlbSk7XG5cblx0XHRcdGlmICghbikge1xuXHRcdFx0XHRuID0gY2xlYW5pbmcgP1xuXHRcdFx0XHRcdHJvb3QoZGlzcG9zZSA9PiB7XG5cdFx0XHRcdFx0XHRkaXNwb3NlcnMuc2V0KG5vZGVLZXksIGRpc3Bvc2UpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsID8gZWwgOiBleHByKGl0ZW0sIGtleSk7XG5cdFx0XHRcdFx0fSkgOlxuXHRcdFx0XHRcdChlbCA/IGVsIDogZXhwcihpdGVtLCBrZXkpKTtcblxuXHRcdFx0XHRpZiAobi5ub2RlVHlwZSA9PT0gMTEpIG4gPSBuLmZpcnN0Q2hpbGQ7XG5cblx0XHRcdFx0bm9kZXMuc2V0KG5vZGVLZXksIG4pO1xuXG5cdFx0XHRcdC8vIGNvbnNvbGUud2FybihgW2NyZWF0ZSAoJHtub2RlS2V5fSldYCwgbik7XG5cdFx0XHRcdGlmKG4uJHMpIHtcblx0XHRcdFx0XHRuLiRzLmhvb2soJ21vdW50ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBjb250ZXh0Ll9jaGlsZHJlbltrZXldLmhvb2soJ21vdW50ZWQnKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGkgPT09IC0xKSB7XG5cdFx0XHQvLyBjb25zb2xlLndhcm4oYFtyZW1vdmUgKCR7bm9kZUtleX0pXWAsIG4sIG4ucGFyZW50Tm9kZSk7XG5cdFx0XHRpZihuLiRzKSB7XG5cdFx0XHRcdG4uJHMuaG9vaygndW5tb3VudGVkJyk7XG5cdFx0XHR9XG5cblx0XHRcdHRvUmVtb3ZlLmFkZChub2RlS2V5KTtcblx0XHRcdC8vIGNvbnRleHQucmVtb3ZlQ2hpbGQoa2V5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbjtcblx0fVxuXG5cdGZ1bmN0aW9uIGRpc3Bvc2VBbGwoKSB7XG5cdFx0ZGlzcG9zZXJzLmZvckVhY2goZCA9PiBkKCkpO1xuXHRcdGRpc3Bvc2Vycy5jbGVhcigpO1xuXHRcdG5vZGVzLmNsZWFyKCk7XG5cdFx0dG9SZW1vdmUuY2xlYXIoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRpc3Bvc2UoaXRlbSkge1xuXHRcdGxldCBkaXNwb3NlciA9IGRpc3Bvc2Vycy5nZXQoaXRlbSk7XG5cdFx0aWYgKGRpc3Bvc2VyKSB7XG5cdFx0XHRkaXNwb3NlcigpO1xuXHRcdFx0ZGlzcG9zZXJzLmRlbGV0ZShpdGVtKTtcblx0XHR9XG5cdFx0bm9kZXMuZGVsZXRlKGl0ZW0pO1xuXHR9XG5cblx0cmV0dXJuIHBhcmVudDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzbG90KGNvbnRleHQsIGgsIG5hbWUsIHRhZywgb3B0aW9ucywgZGVmYXVsdENoaWxkcmVuKVxue1xuXHQvLyBjb25zb2xlLmxvZyhjb250ZXh0LCBoLCBuYW1lLCB0YWcpXG5cdC8vIGNvbnRleHQuX19zbG90c1xuXHRcblx0bGV0IGNoaWxkcmVuID0gZGVmYXVsdENoaWxkcmVuO1xuXG5cdGlmKGNvbnRleHQuX3Nsb3RzW25hbWVdKSB7XG5cdFx0Y2hpbGRyZW4gPSBjb250ZXh0Ll9zbG90c1tuYW1lXTtcblx0fVxuXHRcblx0aWYodGFnID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuO1xuXHR9XG5cblx0Ly8gaC5iaW5kKG51bGwpXG5cblx0bGV0IHJlbmRlciA9IGgodGFnLCBvcHRpb25zLCBjaGlsZHJlbik7XG5cblx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCByZW5kZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuXHQvLyBcdGNvbnNvbGUubG9nKHJlbmRlci5jaGlsZE5vZGVzW2ldLCByZW5kZXIuY2hpbGROb2Rlc1tpXS4kcyk7XG5cdC8vIH1cblx0XG5cblx0cmV0dXJuIHJlbmRlcjtcbn1cbiIsImltcG9ydCB7IGggfSBmcm9tICdAc2lwaC9jb21wb25lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50KClcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICUgMyAhPT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdGF0ZW1lbnQgc2hvdWxkIGJlIG9kZCBudW1iZXInKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cdFx0bGV0IGZvdW5kQ29uZGl0aW9uID0gZmFsc2U7XG5cdFx0Ly8gdmFsdWVcblx0XHRsZXQgY2hpbGRJbmRleCA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRsZXQgc2l6ZSA9IGFyZ3VtZW50c1tpICsgMV07XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaSArIDJdO1xuXHRcdFx0bGV0IG5vZGUgPSBudWxsO1xuXG5cdFx0XHRjb25kaXRpb24gPSB0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nID8gY29uZGl0aW9uKCkgOiBjb25kaXRpb247XG5cblx0XHRcdGlmKGNvbmRpdGlvbiAmJiAhZm91bmRDb25kaXRpb24pIHtcblx0XHRcdFx0Zm91bmRDb25kaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRub2RlID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnNvbGUud2Fybihjb25kaXRpb24sIHNpemUsIHZhbHVlLCBub2RlKTtcblx0XHRcdC8vIFBhc3MgZmFpbGVkIHN0ZXRlbWVudCBjb25kaXRpb25cblx0XHRcdC8vIE5vcm1pbGl6ZSBpbmRleCB0aGF0IHdpbGwgYmUgdXNlZCBpbiByZXBsYWNpbmcgcGxhY2Vob2xkZXIgKGJlbG93KVxuXHRcdFx0aWYobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIW5vZGUuX29ic2VydmFibGUpIHtcblx0XHRcdFx0bm9kZSA9IG5vZGUoaCk7XG5cdFx0XHR9XG5cdFx0XHQvLyByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggbm9kZVxuXHRcdFx0Ly8gQW5kIGNvcnJlY3QgaW5kZXhcblx0XHRcdGlmKHNpemUgPiAxKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZVtqXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXG5cdHJldHVybiBkO1xufVxuIiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpcGgvaSc7XG5pbXBvcnQgeyBoeWRyYXRlIH0gZnJvbSAnQHNpcGgvaHlkcmF0aW9uJztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ0BzaXBoL3JlbmRlcic7XG5cblxuLy8gaW1wb3J0IHsgYXBpIH0gZnJvbSAnc2ludW91cyc7XG4vLyBpbXBvcnQgeyBvYnNlcnZhYmxlIH0gZnJvbSAnQHNpcGgvY29tcG9uZW50L3NyYy9vYnNlcnZhYmxlJztcbi8vIGltcG9ydCB0ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdGVzdC5zaW4nXG4vLyBpbXBvcnQgdGVzdDIgZnJvbSAnLi4vY29tcG9uZW50cy90ZXN0Mi5zaW4nXG5pbXBvcnQgYnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2J1dHRvbjIuc2luJ1xuLy8gaW1wb3J0IEluZGV4UGFnZSBmcm9tICcuLi9wYWdlcy9pbmRleC5zaW4nXG5pbXBvcnQgdGltZUJlbmNobWFyayBmcm9tICcuL3RpbWUnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYWdlSW5kZXhcIiAqLyAnLi4vcGFnZXMvaW5kZXguc2luJylcblxuXG52YXIgTEFZT1VUO1xudmFyIFBhZ2VJbmRleCwgUGFnZUluZGV4MjtcblxuZnVuY3Rpb24gVEVTVF9XRUJQQUNLX0JVSUxEKClcbntcblx0dGltZUJlbmNobWFyaygnU1NSLUJ1aWxkJyk7XG5cdC8vIFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQodGVzdCk7XG5cdC8vIFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQodGVzdDIpO1xuXHRTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KGJ1dHRvbik7XG5cdHRpbWVCZW5jaG1hcmsoJ1NTUi1CdWlsZCcpO1xufVxuXG4vLyBmdW5jdGlvbiBURVNUX0lOSVQoKVxuLy8ge1xuLy8gXHR0aW1lQmVuY2htYXJrKCdTU1ItSW5pdCcpO1xuLy8gXHRQYWdlSW5kZXggPSBuZXcgSW5kZXhQYWdlKCk7XG4vLyBcdFBhZ2VJbmRleDIgPSBuZXcgSW5kZXhQYWdlKCk7XG4vLyBcdHRpbWVCZW5jaG1hcmsoJ1NTUi1Jbml0Jyk7XG4vLyB9XG5cbmZ1bmN0aW9uIFRFU1RfUkVOREVSKClcbntcblx0cmVuZGVyKEluZGV4UGFnZSwgTEFZT1VULCB0aW1lQmVuY2htYXJrLCAoYykgPT4ge1xuXHRcdFBhZ2VJbmRleCA9IGM7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBDTEVBUl9IT09LUygpXG57XG5cdGxldCBodG1sID0gTEFZT1VULmlubmVySFRNTDtcblx0TEFZT1VULmlubmVySFRNTCA9IGh0bWw7XG5cdFBhZ2VJbmRleC5ob29rKCd1bm1vdW50ZWQnKTtcbn1cblxuZnVuY3Rpb24gVEVTVF9IWURSQVRFKClcbntcblx0aHlkcmF0ZShJbmRleFBhZ2UsIExBWU9VVCwgdGltZUJlbmNobWFyayk7XG59XG5cblRFU1RfV0VCUEFDS19CVUlMRCgpO1xuXG4vLyBURVNUX0lOSVQoKTtcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsb2FkKTtcbi8vIHJldHVybjtcbihmdW5jdGlvbiBsb2FkKCkge1xuXHRMQVlPVVQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cblxuXHQvLyBsZXQgZCA9IG9ic2VydmFibGUoMSk7XG5cdC8vIGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHQvLyBcdGNvbnNvbGUubG9nKCdbc2JdJywgZCgpKTtcblx0Ly8gfSlcblx0Ly8gZCgyKTtcblx0Ly8gcmV0dXJuO1xuXG5cblx0Ly8gVEVTVF9IWURSQVRFKCk7XG5cdC8vIHJldHVybjtcblxuXG5cdFRFU1RfUkVOREVSKCk7XG5cdC8vIGNvbnNvbGUubG9nKExBWU9VVC5pbm5lckhUTUwpXG5cdC8vIHJldHVyblxuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXG5cdFx0Q0xFQVJfSE9PS1MoKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0IFRFU1RfSFlEUkFURSgpO1xuXHRcdH0sIDMwMCk7XG5cdH0sIDEwMDApO1xufSkoKTtcbiIsImxldCB0aW1lcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKG5hbWUpXG57XG5cdGxldCBub3cgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRpZih0eXBlb2YgdGltZXNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGltZXNbbmFtZV0gPSBub3c7XG5cdFx0cmV0dXJuIHRpbWVzW25hbWVdO1xuXHR9XG5cblx0Y29uc29sZS5sb2coYFsgdGIgJHtuYW1lfSBdYCwgbm93IC0gdGltZXNbbmFtZV0sICdtcycpO1xuXG5cdGRlbGV0ZSB0aW1lc1tuYW1lXTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=