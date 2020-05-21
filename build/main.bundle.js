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
      let direction = 1; // s1 += 10

      this._data.timer = setInterval(() => {
        if (this._state.s1() > 40) {
          direction = -5;
        } else if (this._state.s1() < 10) {
          direction = 5;
        }

        this._state.s1(this._state.s1() + direction);
      }, 1000);
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

  var component = _i.default.getComponent(el);

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

var _options = _interopRequireWildcard(__webpack_require__(/*! ./options */ "./packages/component/dist/options.js"));

var _register = _interopRequireDefault(__webpack_require__(/*! ./register */ "./packages/component/dist/register.js"));

var _statement = _interopRequireDefault(__webpack_require__(/*! ./statement */ "./packages/component/dist/statement.js"));

var _slot = _interopRequireDefault(__webpack_require__(/*! ./slot */ "./packages/component/dist/slot.js"));

var _loop = _interopRequireDefault(__webpack_require__(/*! ./loop */ "./packages/component/dist/loop.js"));

var _dynamic = _interopRequireDefault(__webpack_require__(/*! ./dynamic */ "./packages/component/dist/dynamic.js"));

var _h = _interopRequireDefault(__webpack_require__(/*! ./h */ "./packages/component/dist/h.js"));

var _basic = _interopRequireDefault(__webpack_require__(/*! ./basic */ "./packages/component/dist/basic.js"));

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

function hydrateLoop(context, node, args) {
  var condition = args.c;
  var startNode = node;

  _sinuous.api.subscribe(function () {
    var loop_condition = typeof condition === 'function' ? condition() : condition; // console.log(loop_condition)

    var currentNode = startNode;

    for (var key in loop_condition) {
      var item = loop_condition[key];
      var itemKey = args.k(item, key);
      var itemArgs = void 0;
      var shouldRender = false;

      if (currentNode) {
        var nodeKey = currentNode.getAttribute('data-key');

        if (nodeKey === itemKey) {
          shouldRender = false;
        }
      }

      if (shouldRender) {
        itemArgs = args.r(item, key);
      } else {
        itemArgs = args.h(item, key);
      } // console.log(currentNode, shouldRender, args);
      // return;
      // console.log('[hydrate loop]', currentNode, itemArgs)


      hydrate(context, currentNode, itemArgs);
      currentNode = currentNode.nextElementSibling;
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

var _subscribe = __webpack_require__(/*! ./subscribe */ "./packages/hydration/dist/subscribe.js");

var _component = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");

var _sinuous = __webpack_require__(/*! sinuous */ "./node_modules/sinuous/module/sinuous.js"); // let subscribers = [];
// let subscribers_first = [];


function hydrateProps(context, el, options) {
  // return;
  // console.log(el);
  // console.log(options);
  options = (0, _component.mergeOptions)(options); // console.warn(options);
  // return;

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
      addSubscriber(cssOptions.class, function (value) {
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

/***/ "./packages/hydration/dist/subscribe.js":
/*!**********************************************!*\
  !*** ./packages/hydration/dist/subscribe.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = subscribe;

var _observable = __webpack_require__(/*! sinuous/observable */ "./node_modules/sinuous/module/observable.js");

function subscribe(value, fn, skipFirst) {
  if (skipFirst === void 0) {
    skipFirst = true;
  }

  if (typeof value !== 'function') {
    return fn(value);
  }

  (0, _observable.subscribe)(function () {
    var v = value(); // console.log(skipFirst, v, fn)

    if (skipFirst) {
      skipFirst = false;
      return false;
    }

    fn(v);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uLnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NidXR0b24uc2luP2NlNzkiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb29wLmpzIiwid2VicGFjazovLy8uLi9zcmMvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvc3Vic2NyaWJlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXItdGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZS5qcyJdLCJuYW1lcyI6WyJfIiwieSIsInNlbGYiLCJjbGFzc2VzIiwib2JqIiwic3RhdGljQ2xhc3NlcyIsImR5bmFtaWMiLCJpIiwiYXJndW1lbnRzIiwiYXJnIiwiQXJyYXkiLCJqIiwiaGFuZGxlQ2xhc3NPYmplY3QiLCJhIiwidmFsIiwic3R5bGVzIiwiY2FtZWxUb1Byb3AiLCJoYW5kbGVTdHlsZXNPYmplY3QiLCJISUQiLCJCYXNpYyIsIm9ic2VydmFibGUiLCJkZWZhdWx0IiwiY29tcHV0ZWQiLCJuYW1lIiwiY2hpbGRyZW4iLCJwYXJlbnQiLCJwcm9wIiwidmFsdWUiLCJ0eXBlIiwicHJvcHMiLCJjdHgiLCJoIiwic3RhdGVtZW50IiwibG9vcCIsInNsb3QiLCJkIiwiYyIsImNvbXBpbGVyIiwiU2ludW91cyIsImVsIiwidGFnIiwiY2hpbGQiLCJvcHRzIiwiZHluYW1pY0F0dHJzIiwicmVhZHlPcHRpb25zIiwiY29tcG9uZW50IiwicmVnaXN0ZXJDaGlsZHJlbiIsIm9wdGlvbnMiLCJfc2xvdHMiLCIkc2xvdHMiLCJyZXN1bHQiLCJsb29wX2NvbmRpdGlvbiIsImNvbmRpdGlvbiIsIml0ZW0iLCJmbiIsImJpbmRpbmciLCJ2IiwibWFrZU9ic2VlcnZhYmxlIiwic3RyIiwiYXJnVG9TdHJpbmciLCJyZWFkeVN0eWxlcyIsIm1ha2VTdHlsZVByb3AiLCJjbG9uZU9wdGlvbnMiLCJzaG91bGRDbG9uZSIsInJlYWR5T3B0aW9uIiwib3B0aW9uIiwibWFrZUNzcyIsIkFzc2lnbk9iamVjdE9wdGlvbnMiLCJBc3NpZ25WYWx1ZU9wdGlvbnMiLCJzaG91bGRCZU1lcmdlZCIsImtleXMiLCJPYmplY3QiLCJtZXJnZU9wdGlvbnMiLCJtYWtlT3B0aW9uIiwid2luZG93IiwiY29udGV4dCIsImNoaWxkSW5kZXgiLCJzaXplIiwibm9kZSIsImRvY3VtZW50IiwiU1RPUkFHRSIsIlNVQlNDUklCRVJTIiwiY29uc29sZSIsImh5ZHJhdGUiLCJhcmdzIiwic3RhcnROb2RlIiwiYXBpIiwiY3VycmVudE5vZGUiLCJpdGVtS2V5IiwiaXRlbUFyZ3MiLCJzaG91bGRSZW5kZXIiLCJub2RlS2V5IiwicGF0aCIsImJpbmRlZE5vZGVzIiwic2xvdERhdGEiLCJnZXRTbG90Tm9kZSIsImRhdGEiLCJjaGlsZHJlblNsb3RzIiwic2xvdHMiLCJzdGFydE5vZGVJbmRleCIsImh5ZHJhdGVIIiwibmV3QXJncyIsImh5ZHJhdGVTbG90cyIsImh5ZHJhdGVJZGxlIiwiaHlkcmF0ZVRhZyIsImh5ZHJhdGVUZXh0IiwiaHlkcmF0ZUxvb3AiLCJ0aW1lQmVuY2htYXJrIiwiY2FsbGJhY2siLCJ0cmVlIiwiaHlkcmF0aW9uUm9vdCIsImh5ZHJhdGlvbiIsImluc3RhbmNlIiwic3Vic2NyaWJlcnMiLCJzdWJzY3JpYmVyc19maXJzdCIsInNraXAiLCJjc3NPcHRpb25zIiwiYWRkU3Vic2NyaWJlciIsImhhbmRsZUV2ZW50IiwiZSIsInN0YXRlbWVudFNpemUiLCJub2RlcyIsInNraXBGaXJzdCIsIlNpbnVvdXNDb21wb25lbnRzIiwiY3JlYXRlSElEIiwiY2xlYXJISUQiLCJyZWdpc3RlckNvbXBvbmVudCIsImhhc0NvbXBvbmVudCIsImdldEh5ZHJhdGVDb21wb25lbnQiLCJnZXRDb21wb25lbnRJbnN0YW5jZSIsImdldENvbXBvbmVudCIsIm1vZHVsZSIsImxheW91dCIsIkluZGV4UGFnZSIsIkxBWU9VVCIsIlBhZ2VJbmRleCIsIlBhZ2VJbmRleDIiLCJURVNUX1dFQlBBQ0tfQlVJTEQiLCJidXR0b24iLCJURVNUX1JFTkRFUiIsIkNMRUFSX0hPT0tTIiwiaHRtbCIsImlubmVySFRNTCIsImhvb2siLCJURVNUX0hZRFJBVEUiLCJsb2FkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRUaW1lb3V0IiwidGltZXMiLCJ0aW1lIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTtRQUNBLHlDQUF5Qyx3QkFBd0I7UUFDakU7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBLGlDQUFpQzs7UUFFakM7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHdCQUF3QixrQ0FBa0M7UUFDMUQsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBLDBDQUEwQyxvQkFBb0IsV0FBVzs7UUFFekU7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM05BLEVBQTBEOztBQUUxRCxFQUE2Qzs7QUFFN0M7QUFDQSxjQUFjO0FBQ2QsR0FBRyxFQUFFLGdFQUFlOztBQUVwQjtBQUNBLEdBQUcsd0RBQUs7QUFDUjs7QUFFQTtBQUNBLHFDQUFxQyx3REFBSzs7QUFFMUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLFdBQVc7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsdURBQXVEO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxlQUFlLGlDQUFpQztBQUNoRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxxQ0FBcUMsbUJBQW1CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUNBQWlDO0FBQ2hEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFpQix1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDeEYxQjtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNNLElBQU1BLENBQUMsR0FBRyxDQUFDLENBQVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQOzs7Ozs7OztBQUdBLHdCQUNBO0FBQ0MsU0FBTyxDQUFDLENBQUQsd0JBQ21CO0FBQUEsaUJBQWNDLENBQUMsQ0FBZixXQUFjQSxFQUFkO0FBRG5CLG1CQUFQLEVBQU8sQ0FBUDtBQUdBOztBQUVELHdDQUF3QztBQUNwQyxTQUFPQyxJQUFJLENBQUpBLG1CQUFQO0FBQ0g7O0FBRU0sZ0NBQ1A7QUFDQyxNQUFJQyxPQUFPLEdBQVg7O0FBRUEsT0FBSyxJQUFMLFlBQXFCO0FBQ3BCLFFBQUcsb0JBQU1DLEdBQUcsQ0FBWixHQUFZLENBQVQsQ0FBSCxFQUFvQjtBQUNuQkQsYUFBTyxDQUFQQTtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQTs7QUFFTSx5Q0FDUDtBQUFBOztBQUFBLE1BRHdCRSxhQUN4QjtBQUR3QkEsaUJBQ3hCLEdBRHdDLEVBQWhCQTtBQUN4Qjs7QUFBQSxNQUQ0Q0MsT0FDNUM7QUFENENBLFdBQzVDLEdBRHNELEVBQVZBO0FBQzVDOztBQUNDLFNBQU8sWUFBTTtBQUNaLFFBQUlILE9BQU8sR0FBWDs7QUFFQSxTQUFLLElBQUlJLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHQyxVQUFTLENBQTdCLFFBQXNDRCxDQUF0QyxJQUEyQztBQUMxQyxVQUFJRSxHQUFHLEdBQUdELFVBQVMsQ0FBbkIsQ0FBbUIsQ0FBbkI7O0FBRUEsVUFBR0UsS0FBSyxDQUFMQSxRQUFILEdBQUdBLENBQUgsRUFBdUI7QUFDdEIsYUFBSyxJQUFJQyxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR0YsR0FBRyxDQUF2QixRQUFnQ0UsQ0FBaEMsSUFBcUM7QUFDcENSLGlCQUFPLENBQVBBLEtBQWEsb0JBQU1NLEdBQUcsQ0FBdEJOLENBQXNCLENBQVQsQ0FBYkE7QUFDQTtBQUhGLGFBSU8sSUFBRyxlQUFILFVBQTRCO0FBQ2xDQSxlQUFPLEdBQUdBLE9BQU8sQ0FBUEEsT0FDVFMsaUJBQWlCLENBRGxCVCxHQUNrQixDQURSQSxDQUFWQTtBQURNLGFBSUEsSUFBRyxlQUFILFlBQThCO0FBQ3BDQSxlQUFPLEdBQUdBLE9BQU8sQ0FBUEEsT0FDVFMsaUJBQWlCLENBQUMsb0JBRG5CVCxHQUNtQixDQUFELENBRFJBLENBQVZBO0FBRE0sYUFJQTtBQUNOQSxlQUFPLENBQVBBO0FBQ0E7QUFDRDs7QUFFREEsV0FBTyxHQUFHLE9BQU8sQ0FBUCxPQUFlO0FBQUEsYUFBYVUsQ0FBQyxDQUFEQSxlQUFiO0FBQXpCVixLQUFVLENBQVZBO0FBRUEsV0FBT0EsT0FBTyxDQUFQQSxLQUFQLEdBQU9BLENBQVA7QUF6QkQ7QUEyQkE7O0FBRU0seUNBQ1A7QUFDQyxPQUFLLElBQUwsWUFBcUI7QUFDcEIsUUFBSVcsR0FBRyxHQUFHLG9CQUFNVixHQUFHLENBQW5CLEdBQW1CLENBQVQsQ0FBVjs7QUFDQSxRQUFHVSxHQUFHLEtBQU4sTUFBaUI7QUFDaEJDLFlBQU0sQ0FBQ0MsV0FBVyxDQUFsQkQsR0FBa0IsQ0FBWixDQUFOQTtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQTs7QUFFTSxrQkFDUDtBQUFBO0FBQ0MsU0FBTyxZQUFNO0FBQ1osUUFBSUEsTUFBTSxHQUFWOztBQUVBLFNBQUssSUFBSVIsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUdDLFdBQVMsQ0FBN0IsUUFBc0NELENBQXRDLElBQTJDO0FBQzFDLFVBQUcsT0FBT0MsV0FBUyxDQUFoQixDQUFnQixDQUFoQixLQUFILFVBQXFDO0FBQ3BDUywwQkFBa0IsU0FBU1QsV0FBUyxDQUFwQ1MsQ0FBb0MsQ0FBbEIsQ0FBbEJBO0FBREQsYUFFTztBQUNOQSwwQkFBa0IsU0FBUyxvQkFBTVQsV0FBUyxDQUExQ1MsQ0FBMEMsQ0FBZixDQUFULENBQWxCQTtBQUNBO0FBQ0Q7O0FBRUQ7QUFYRDtBQWFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkQ7O0FBQ0E7O0FBR0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7OztFQUVBOzs7QUFDQSxJQUFJQyxHQUFHLEdBQVA7O0FBR0EsSUFBSUMsS0FBSyxHQUFHLFlBQVk7QUFFdkIsbUJBQ0E7QUFDQztBQUNBLGVBQVcsRUFBWDtBQUVBLGtCQUFjLEtBQWQsS0FBYyxFQUFkO0FBQ0Esd0JBTEQsRUFLQyxDQUxELENBT0M7O0FBQ0EsaUJBQWEsS0FSZCxJQVFjLEVBQWIsQ0FSRCxDQVNDOztBQUNBLGtCQUFjLFdBQVdDLFlBQXpCLFVBQWMsQ0FBZDtBQUVBLGtCQUFjO0FBQ2JDLGFBQU8sRUFBRTtBQURJLEtBQWQ7QUFJQSxxQkFBaUIsY0FBY0MsWUFBL0IsUUFBaUIsQ0FBakI7QUFDQTtBQUNBO0FBQ0EsbUJBbkJELElBbUJDLENBbkJELENBcUJDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsU0EzQkQsU0EyQkMsR0EzQkQsQ0E2QkM7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBR0RILE9BQUssQ0FBTEEsd0JBQThCLFlBQzlCO0FBQ0MsU0FBSSxJQUFKLE9BQWUsS0FBZixXQUErQjtBQUM5Qiw0QkFBc0IseUJBQXRCLElBQXNCLENBQXRCO0FBQ0E7O0FBRUQsU0FBSSxJQUFKLFFBQWUsS0FBZixVQUE4QjtBQUM3QixVQUFJSSxJQUFJLEdBQUcsY0FBWCxJQUFXLENBQVg7QUFDQSxtQkFBYSxnQkFBYixJQUFhLENBQWI7QUFDQTtBQVRGSjtBQVdBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFJQUEsT0FBSyxDQUFMQSx3QkFBOEIsb0JBQzlCO0FBQUEsUUFEdUNLLFFBQ3ZDO0FBRHVDQSxjQUN2QyxHQURrRCxFQUFYQTtBQUN2Qzs7QUFDQztBQUZETDs7QUFNQUEsT0FBSyxDQUFMQSx3QkFBOEIsaUJBQzlCO0FBQ0M7QUFGREE7O0FBTUFBLE9BQUssQ0FBTEEsc0JBQTRCLGtCQUM1QjtBQUFBLFFBRHFDTSxNQUNyQztBQURxQ0EsWUFDckMsR0FEOEMsSUFBVEE7QUFDckM7O0FBQ0M7QUFGRE47QUFJQTs7Ozs7QUFJQUEsT0FBSyxDQUFMQSxrQkFBd0IsWUFDeEI7QUFDQztBQUZEQTs7QUFNQUEsT0FBSyxDQUFMQSxzQkFBNEIsWUFDNUI7QUFDQyxTQUFJLElBQUosT0FBZSxLQUFmLFFBQ0E7QUFDQyxVQUFJTyxJQUFJLEdBQUcsWUFBWCxHQUFXLENBQVg7QUFDQSxVQUFJQyxLQUFLLEdBQVQ7QUFDQSxVQUFJQyxJQUFJLEdBQVI7O0FBRUEsVUFBRyxnQkFBSCxZQUErQixDQUM5QjtBQURELGFBRU87QUFDTkQsYUFBSyxHQUFHRCxJQUFJLENBQVpDLE9BQVFELEVBQVJDO0FBQ0E7O0FBRUQ7QUFDQTtBQWZGUjs7QUFtQkFBLE9BQUssQ0FBTEEsc0JBQTRCLHVCQUM1QjtBQUNDO0FBRkRBOztBQUtBQSxPQUFLLENBQUxBLHdCQUE4QixtQkFDOUI7QUFDQztBQUZEQTs7QUFLQUEsT0FBSyxDQUFMQSxzQkFBNEIsaUJBQzVCO0FBQ0M7QUFDQTtBQUNBO0FBRUEsU0FBSSxJQUFKLGNBQ0E7QUFDQyxVQUFHVSxLQUFLLENBQUxBLEdBQUssQ0FBTEEsQ0FBSCxhQUEyQjtBQUMxQjtBQUNBOztBQUVELHdCQUFrQkEsS0FBSyxDQUx4QixHQUt3QixDQUF2QixDQUxELENBTUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJGVjtBQXFCQTs7Ozs7QUFJQUEsT0FBSyxDQUFMQSxpQkFBdUIsWUFDdkI7QUFDQztBQUZEQTs7QUFNQUEsT0FBSyxDQUFMQSxxQkFBMkIsWUFDM0I7QUFDQztBQUZEQTtBQUtBOzs7OztBQUlBQSxPQUFLLENBQUxBLGtCQUF3QixhQUN4QjtBQUNDO0FBRkRBO0FBS0E7Ozs7Ozs7QUFNQUEsT0FBSyxDQUFMQSxxQkFBMkIsWUFBVyxDQUF0Q0E7O0FBRUFBLE9BQUssQ0FBTEEsNEJBQWtDLFlBQVcsQ0FBN0NBO0FBRUE7Ozs7OztBQUtBQSxPQUFLLENBQUxBLGlCQUF1QixnQkFDdkI7QUFBQSxRQURnQ1MsSUFDaEM7QUFEZ0NBLFVBQ2hDLEdBRHVDLFNBQVBBO0FBQ2hDOztBQUNDLFFBQUcsS0FBSCxJQUFHLENBQUgsRUFBZTtBQUNkO0FBQ0E7O0FBRUQsU0FBSyxJQUFJckIsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUcsZUFBcEIsUUFBMkNBLENBQTNDLElBQWdEO0FBQy9DLFVBQUcsc0JBQXNCUCxPQUF6QixHQUE0QjtBQUMzQjtBQUNBOztBQUVELFVBQUcsQ0FBQyxrQkFBSixhQUFtQztBQUNsQztBQUNBO0FBQ0Q7QUFkRm1COztBQWtCQUEsT0FBSyxDQUFMQSxvQkFBMEIsWUFBVyxDQUFyQ0E7O0FBRUFBLE9BQUssQ0FBTEEsc0JBQTRCLFlBQVcsQ0FBdkNBO0FBRUE7Ozs7OztBQUtBQSxPQUFLLENBQUxBLG1CQUF5QixlQUN6QjtBQUFBLFFBRGtDVyxHQUNsQztBQURrQ0EsU0FDbEMsR0FEd0MsSUFBTkE7QUFDbEM7O0FBQ0MsUUFBR0EsR0FBRyxLQUFOLE1BQWlCO0FBQ2hCQSxTQUFHLEdBQUhBO0FBQ0E7O0FBRURDOztBQUVBLFdBQU8sR0FBRyxDQUFILFNBQWFBLFVBQWIsR0FBYUEsQ0FBYixFQUEwQjtBQUNoQ0QsU0FBRyxFQUQ2QjtBQUVoQ0UsZUFBUyxFQUFUQSxPQUZnQztBQUdoQ0MsVUFBSSxFQUFKQSxPQUhnQztBQUloQ0MsVUFBSSxFQUFKQSxPQUpnQztBQUtoQ0MsT0FBQyxFQUFFN0IsT0FMNkI7QUFNaEM4QixPQUFDLEVBQUVkO0FBTjZCLEtBQTFCLENBQVA7QUFSREg7O0FBbUJBQSxPQUFLLENBQUxBLG9CQUEwQix5QkFDMUI7QUFBQSxRQURtQ1csR0FDbkM7QUFEbUNBLFNBQ25DLEdBRHlDLElBQU5BO0FBQ25DOztBQUFBLFFBRCtDTyxRQUMvQztBQUQrQ0EsY0FDL0MsR0FEMEQsSUFBWEE7QUFDL0M7O0FBQ0MsUUFBR1AsR0FBRyxLQUFOLE1BQWlCO0FBQ2hCQSxTQUFHLEdBQUhBO0FBQ0E7O0FBRURDOztBQUVBLFdBQU9ELEdBQUcsQ0FBSEEsVUFBY0MsR0FBckIsQ0FBT0QsQ0FBUDtBQVJEWDs7QUFZQUEsT0FBSyxDQUFMQSxxQkFBMkIsWUFDM0I7QUFDQztBQWhQc0IsR0E4T3ZCQSxDQTlPdUIsQ0FvUHZCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQUEsT0FBSyxDQUFMQSxzQkFBNEIsWUFDNUI7QUFDQztBQUZEQTs7QUFLQUEsT0FBSyxDQUFMQSxtQkFBeUIsaUJBQWdCO0FBQ3hDLHFCQUFnQm1CLHFCQUFoQixLQUFnQkEsQ0FBaEI7QUFERG5COztBQUlBQSxPQUFLLENBQUxBLG1DQUF5QyxZQUFXO0FBQUUsV0FBTyxpQkFBUDtBQUF0REE7O0FBRUE7QUFyUUQsQ0FBWSxFQUFaOztlQXdRZUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6UmY7O0FBRWUseUNBQ2Y7QUFDQyxTQUFPLFlBQU07QUFDWixRQUFJb0IsRUFBRSxHQUFHQyxHQUFUO0FBQ0EsV0FBT1QsQ0FBQyxXQUFSLFFBQVEsQ0FBUjtBQUZEO0FBS0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1REOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUdBLHlDQUNBO0FBQ0NOLFFBQU0sQ0FBTkE7O0FBQ0EsTUFBR2dCLEtBQUssQ0FBUixXQUFvQjtBQUNuQkEsU0FBSyxDQUFMQTtBQUNBO0FBQ0Q7O0FBRWMsK0JBQ2Y7QUFBQSxNQUQ4QkMsSUFDOUI7QUFEOEJBLFFBQzlCLEdBRHFDLEVBQVBBO0FBQzlCOztBQUFBLE1BRHlDbEIsUUFDekM7QUFEeUNBLFlBQ3pDLEdBRG9ELEVBQVhBO0FBQ3pDOztBQUNDZSxJQUFFLEdBQUdBLEVBQUUsQ0FEUixXQUNNQSxFQUFMQSxDQURELENBRUM7QUFFQTs7QUFDQSxNQUFJSSxZQUFZLEdBQWhCO0FBRUEsTUFBSUMsWUFBWSxHQUFHLGVBUHBCLElBT29CLENBQW5CLENBUEQsQ0FRQzs7QUFDQSxNQUFHLENBQUNOLHdCQUFKLEVBQUlBLENBQUosRUFBOEI7QUFDN0IsV0FBTyxrQ0FBUCxRQUFPLENBQVA7QUFDQTs7QUFFRCxNQUFJTyxTQUFTLEdBQUdQLHdCQUFoQixFQUFnQkEsQ0FBaEI7O0FBRUFRLGtCQUFnQixPQUFoQkEsU0FBZ0IsQ0FBaEJBOztBQUVBLE1BQUdELFNBQVMsQ0FBWixhQUEwQjtBQUN6QixXQUFPLFNBQVMsQ0FBVCxPQUFpQjtBQUN2QkUsYUFBTyxFQURnQjtBQUV2QkMsWUFBTSxFQUFFSixZQUFZLENBQUNLO0FBRkUsS0FBakIsQ0FBUDtBQUlBOztBQUVELE1BQUcsT0FBT1AsSUFBSSxDQUFYLFVBQUgsYUFBc0M7QUFDckNHLGFBQVMsQ0FBVEEsVUFBb0JILElBQUksQ0FBeEJHO0FBQ0E7O0FBRUQsT0FBSSxJQUFKLE9BQWVILElBQUksQ0FBbkIsUUFBNEI7QUFDM0JHLGFBQVMsQ0FBVEEsZUFBeUJILElBQUksQ0FBSkEsT0FBekJHLEdBQXlCSCxDQUF6Qkc7QUFDQTs7QUFFREEsV0FBUyxDQUFUQTtBQUVBLFNBQU9BLFNBQVMsQ0FBaEIsTUFBT0EsRUFBUDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xERDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZSw2QkFDZjtBQUNDLE1BQUlWLENBQUMsR0FBRyxTQUFKQSxDQUFJLEdBQU07QUFFYixRQUFJZSxNQUFNLEdBQVY7QUFFQSxRQUFJQyxjQUFjLEdBQUcsa0NBQWtDQyxTQUFsQyxLQUFyQjs7QUFFQSxTQUFJLElBQUosdUJBQ0E7QUFDQyxVQUFJQyxJQUFJLEdBQUdGLGNBQWMsQ0FBekIsR0FBeUIsQ0FBekI7QUFDQUQsWUFBTSxDQUFOQSxLQUFZSSxFQUFFLE9BQWRKLEdBQWMsQ0FBZEE7QUFDQTs7QUFFRDtBQVpEOztBQWVBZixHQUFDLENBQURBLGNBaEJELElBZ0JDQSxDQWhCRCxDQWlCQzs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCRDs7QUFFTyw2QkFDUDtBQUNDbUIsSUFBRSxDQUFGQTtBQUNBO0FBQ0E7O0FBRU0sOEJBQXNDO0FBQUEsTUFBakJDLE9BQWlCO0FBQWpCQSxXQUFpQixHQUFQLEtBQVZBO0FBQWlCOztBQUU1Qzs7QUFFQSxlQUFZO0FBQ1hwQixLQUFDLEdBQUcsMEJBQWdCcUIsQ0FBQyxDQUFEQSxLQUFwQnJCLElBQW9CcUIsQ0FBaEIsQ0FBSnJCO0FBREQsU0FFTztBQUNOQSxLQUFDLEdBQUcsMEJBQUpBLENBQUksQ0FBSkE7QUFDQTs7QUFFRHNCLGlCQUFlLENBQWZBLENBQWUsQ0FBZkE7QUFFQTtBQUNBOztBQUVNLGdDQUNQO0FBQUEsTUFEOEJGLE9BQzlCO0FBRDhCQSxXQUM5QixHQUR3QyxLQUFWQTtBQUM5QixJQUNDO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFJcEIsQ0FBQyxHQUFHLDRCQUFSLENBQVEsQ0FBUjtBQUdBc0IsaUJBQWUsQ0FBZkEsQ0FBZSxDQUFmQTtBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZERCx1QkFDQTtBQUNDLE1BQUlDLEdBQUcsR0FBUDs7QUFFQSxPQUFLLElBQUluRCxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR0MsU0FBUyxDQUE3QixRQUFzQ0QsQ0FBdEMsSUFBMkM7QUFDMUMsUUFBSW9CLEtBQUssR0FBR25CLFNBQVMsQ0FBckIsQ0FBcUIsQ0FBckI7O0FBRUEsUUFBRyxpQkFBSCxZQUFnQztBQUMvQm1CLFdBQUssR0FBR0EsS0FBUkE7QUFDQTs7QUFFRCxRQUFHLGlCQUFILFVBQThCO0FBQzdCLFdBQUksSUFBSixjQUFzQjtBQUNyQixZQUFHQSxLQUFLLENBQVIsR0FBUSxDQUFSLEVBQWU7QUFDZCtCLGFBQUcsVUFBSEE7QUFDQTtBQUNEO0FBTEYsV0FNTztBQUNOQSxTQUFHLFVBQUhBO0FBQ0E7QUFDRDs7QUFFRDtBQUNBOztBQUdELHVCQUNBO0FBQ0MsTUFBSUEsR0FBRyxHQUFQOztBQUVBLE9BQUssSUFBSW5ELENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHQyxTQUFTLENBQTdCLFFBQXNDRCxDQUF0QyxJQUEyQztBQUUxQyxTQUFJLElBQUosT0FBZUMsU0FBUyxDQUF4QixDQUF3QixDQUF4QixFQUE2QjtBQUM1QixVQUFJbUIsS0FBSyxHQUFHbkIsU0FBUyxDQUFUQSxDQUFTLENBQVRBLENBQVosR0FBWUEsQ0FBWjs7QUFDQSxVQUFHLGlCQUFILFlBQWdDO0FBQy9CbUIsYUFBSyxHQUFHQSxLQUFSQTtBQUNBOztBQUVEO0FBQ0E7QUFDRDs7QUFFRDtBQUNBO0FBRUQ7Ozs7Ozs7O0FBTUEsK0JBQ0E7QUFBQSxNQURpQitCLEdBQ2pCO0FBRGlCQSxPQUNqQixHQUR1QixJQUFOQTtBQUNqQjs7QUFBQSxNQUQ2QnBELE9BQzdCO0FBRDZCQSxXQUM3QixHQUR1QyxJQUFWQTtBQUM3Qjs7QUFDQyxNQUFHb0QsR0FBRyxLQUFIQSxRQUFnQnBELE9BQU8sS0FBMUIsTUFBcUM7QUFDcEM7QUFDQTs7QUFFRCxNQUFHb0QsR0FBRyxLQUFOLE1BQWlCO0FBQ2hCQSxPQUFHLEdBQUhBO0FBQ0E7O0FBRUQsTUFBRyxtQkFBSCxZQUFrQztBQUNqQ3BELFdBQU8sR0FBR0EsT0FBVkE7QUFDQTs7QUFFRCxNQUFHLENBQUNJLEtBQUssQ0FBTEEsUUFBSixPQUFJQSxDQUFKLEVBQTRCO0FBQzNCSixXQUFPLEdBQUcsQ0FBVkEsT0FBVSxDQUFWQTtBQUNBOztBQUVEb0QsS0FBRyxJQUFJQyxXQUFXLENBQVhBLFlBakJSLE9BaUJRQSxDQUFQRCxDQWpCRCxDQW1CQzs7QUFFQTtBQUNBO0FBRUQ7Ozs7Ozs7O0FBTUEsNkJBQ0E7QUFDQyxTQUFPLElBQUksQ0FBSix3QkFDbUIsZ0JBQWU7QUFDdkMsV0FBTyxNQUFNekQsQ0FBQyxDQUFkLFdBQWFBLEVBQWI7QUFGSyxtQkFBUCxFQUFPLENBQVA7QUFLQTs7QUFFRCw4QkFDQTtBQUFBLE1BRGdCRyxHQUNoQjtBQURnQkEsT0FDaEIsR0FEc0IsRUFBTkE7QUFDaEI7O0FBQUEsTUFEMEJFLE9BQzFCO0FBRDBCQSxXQUMxQixHQURvQyxJQUFWQTtBQUMxQjs7QUFDQyxNQUFJc0QsV0FBVyxHQUFHLGFBQWxCLEdBQWtCLENBQWxCOztBQUVBLE1BQUcsbUJBQUgsWUFBa0M7QUFDakN0RCxXQUFPLEdBQUdBLE9BQVZBO0FBQ0E7O0FBRUQsTUFBRyxDQUFDSSxLQUFLLENBQUxBLFFBQUosT0FBSUEsQ0FBSixFQUE0QjtBQUMzQkosV0FBTyxHQUFHLENBQVZBLE9BQVUsQ0FBVkE7QUFDQTs7QUFFRCxPQUFLLElBQUlDLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHRCxPQUFPLENBQTNCLFFBQW9DQyxDQUFwQyxJQUF5QztBQUV4QyxTQUFJLElBQUosT0FBZUQsT0FBTyxDQUF0QixDQUFzQixDQUF0QixFQUEyQjtBQUMxQixVQUFJcUIsS0FBSyxHQUFHckIsT0FBTyxDQUFQQSxDQUFPLENBQVBBLENBQVosR0FBWUEsQ0FBWjs7QUFFQSxVQUFHLGlCQUFILFlBQWdDO0FBQy9CcUIsYUFBSyxHQUFHQSxLQUFSQTtBQUNBOztBQUNEaUMsaUJBQVcsQ0FBQ0MsYUFBYSxDQUF6QkQsR0FBeUIsQ0FBZCxDQUFYQTtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQTs7QUFFRCxJQUFJRSxZQUFZLEdBQUcsT0FBbkIsUUFBbUIsQ0FBbkI7O0FBRU8sd0NBQ1A7QUFDQyxNQUFHZixPQUFPLENBQVBBLGVBQXVCQSxPQUFPLENBQWpDLE9BQXlDO0FBQ3hDSCxnQkFBWSxDQUFaQSxRQUFxQnpDLE9BQU8sQ0FBUEEsV0FBbUI0QyxPQUFPLENBQVBBLGVBQW5CNUMsTUFBZ0Q0QyxPQUFPLENBQVBBLFNBQXJFSCxJQUFxQnpDLENBQXJCeUM7QUFDQTs7QUFFRCxNQUFHRyxPQUFPLENBQVBBLGVBQXVCQSxPQUFPLENBQWpDLE9BQXlDO0FBQ3hDSCxnQkFBWSxDQUFaQSxRQUFxQjdCLE1BQU0sQ0FBTkEsV0FBa0JnQyxPQUFPLENBQVBBLGVBQWxCaEMsSUFBNkNnQyxPQUFPLENBQVBBLFNBQWxFSCxJQUFxQjdCLENBQXJCNkI7QUFDQTs7QUFFRDtBQUNBOztBQUVNLHlDQUNQO0FBQUEsTUFEbUNtQixXQUNuQztBQURtQ0EsZUFDbkMsR0FEaUQsSUFBZEE7QUFDbkM7O0FBQ0MsTUFBSUMsV0FBVyxHQUFmOztBQUVBLE1BQUdDLE1BQU0sQ0FBVCxJQUFjO0FBQ2IsU0FBSSxJQUFKLE9BQWVBLE1BQU0sQ0FBckIsSUFBMEI7QUFDekJELGlCQUFXLFFBQVhBLEdBQVcsQ0FBWEEsR0FBMEJDLE1BQU0sQ0FBTkEsR0FBMUJELEdBQTBCQyxDQUExQkQ7QUFDQTtBQUNEOztBQUVELE1BQUdDLE1BQU0sQ0FBVCxLQUFlO0FBQ2RELGVBQVcsQ0FBWEEsVUFBVyxDQUFYQSxHQUEwQkMsTUFBTSxDQUFoQ0Q7QUFDQTs7QUFFREUsU0FBTyxjQUFQQSxNQUFPLENBQVBBOztBQUVBLG1CQUFnQjtBQUNmLFNBQUssSUFBSTNELENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHdUQsWUFBWSxDQUFoQyxRQUF5Q3ZELENBQXpDLElBQThDO0FBQzdDLFVBQUlnQixJQUFJLEdBQUd1QyxZQUFZLENBQXZCLENBQXVCLENBQXZCOztBQUNBLFVBQUdHLE1BQU0sQ0FBVCxJQUFTLENBQVQsRUFBaUI7QUFDaEJELG1CQUFXLENBQVhBLElBQVcsQ0FBWEEsR0FBb0JqQixPQUFPLENBQTNCaUIsSUFBMkIsQ0FBM0JBO0FBQ0E7QUFDRDtBQUNEOztBQUVEO0FBQ0E7O0FBRUQsSUFBTUcsbUJBQW1CLEdBQUcseUJBQTVCLElBQTRCLENBQTVCO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsVUFBM0IsT0FBMkIsQ0FBM0I7O0FBRU8sK0JBQ1A7QUFDQyxNQUFJeEIsWUFBWSxHQUFoQjtBQUNBLE1BQUl5QixjQUFjLEdBQWxCOztBQUVBLE1BQUczRCxLQUFLLENBQUxBLFFBQUgsT0FBR0EsQ0FBSCxFQUEyQjtBQUMxQixTQUFLLElBQUlILENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHd0MsT0FBTyxDQUEzQixRQUFvQ3hDLENBQXBDLElBQXlDO0FBRXhDLFVBQUd3QyxPQUFPLENBQVBBLENBQU8sQ0FBUEEsS0FBSCxNQUF3QjtBQUN2QjtBQUNBOztBQUVELFVBQUl1QixJQUFJLEdBQUdDLE1BQU0sQ0FBTkEsS0FBWXhCLE9BQU8sQ0FBOUIsQ0FBOEIsQ0FBbkJ3QixDQUFYOztBQUVBLFVBQUdELElBQUksQ0FBSkEsZ0JBQXFCQSxJQUFJLENBQUpBLFNBQXhCLFFBQXdCQSxDQUF4QixFQUFpRDtBQUNoRDtBQUNBOztBQUVELFVBQUcvRCxDQUFDLEdBQUosR0FBVTtBQUNUOEQsc0JBQWMsR0FBZEE7QUFDQTtBQUNEOztBQUVELFFBQUcsQ0FBSCxnQkFBb0I7QUFDbkIsYUFBT3RCLE9BQU8sQ0FBZCxDQUFjLENBQWQ7QUFDQTtBQXBCRixTQXFCTztBQUNOO0FBQ0E7O0FBRUQsT0FBSyxJQUFJeEMsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUd3QyxPQUFPLENBQTNCLFFBQW9DeEMsQ0FBcEMsSUFBeUM7QUFDeEMsUUFBSTBELE1BQU0sR0FBR2xCLE9BQU8sQ0FBcEIsQ0FBb0IsQ0FBcEI7O0FBRUEsU0FBSyxJQUFJcEMsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUd3RCxtQkFBbUIsQ0FBdkMsUUFBZ0R4RCxDQUFoRCxJQUFxRDtBQUNwRCxVQUFJWSxJQUFJLEdBQUc0QyxtQkFBbUIsQ0FBOUIsQ0FBOEIsQ0FBOUI7O0FBRUEsVUFBRyxDQUFDRixNQUFNLENBQVYsSUFBVSxDQUFWLEVBQWtCO0FBQ2pCO0FBQ0E7O0FBRUQsVUFBRyxDQUFDckIsWUFBWSxDQUFoQixJQUFnQixDQUFoQixFQUF3QjtBQUN2QkEsb0JBQVksQ0FBWkEsSUFBWSxDQUFaQTtBQUNBOztBQUVELFdBQUksSUFBSixRQUFnQnFCLE1BQU0sQ0FBdEIsSUFBc0IsQ0FBdEIsRUFBOEI7QUFDN0JyQixvQkFBWSxDQUFaQSxJQUFZLENBQVpBLFNBQTJCcUIsTUFBTSxDQUFOQSxJQUFNLENBQU5BLENBQTNCckIsSUFBMkJxQixDQUEzQnJCO0FBQ0E7QUFDRDs7QUFFRCxTQUFLLElBQUlqQyxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR3lELGtCQUFrQixDQUF0QyxRQUErQ3pELENBQS9DLElBQW9EO0FBQ25ELFVBQUlZLEtBQUksR0FBRzZDLGtCQUFrQixDQUE3QixDQUE2QixDQUE3Qjs7QUFFQSxVQUFHLENBQUNILE1BQU0sQ0FBVixLQUFVLENBQVYsRUFBa0I7QUFDakI7QUFDQTs7QUFFRCxVQUFHLENBQUNyQixZQUFZLENBQWhCLEtBQWdCLENBQWhCLEVBQXdCO0FBQ3ZCQSxvQkFBWSxDQUFaQSxLQUFZLENBQVpBO0FBQ0E7O0FBRURBLGtCQUFZLENBQVpBLEtBQVksQ0FBWkEsR0FBcUJBLFlBQVksQ0FBWkEsS0FBWSxDQUFaQSxRQUEwQnFCLE1BQU0sQ0FBckRyQixLQUFxRCxDQUFoQ0EsQ0FBckJBO0FBQ0E7O0FBRUQsUUFBR3FCLE1BQU0sQ0FBVCxJQUFjO0FBQ2JyQixrQkFBWSxDQUFaQSxLQUFrQnFCLE1BQU0sQ0FBeEJyQjtBQUNBOztBQUVELFFBQUdxQixNQUFNLENBQVQsS0FBZTtBQUNkckIsa0JBQVksQ0FBWkEsTUFBbUJxQixNQUFNLENBQXpCckI7QUFDQTs7QUFFRCxRQUFHcUIsTUFBTSxDQUFULGFBQXVCO0FBQ3RCLFVBQUcsQ0FBQ3JCLFlBQVksQ0FBaEIsYUFBOEI7QUFDN0JBLG9CQUFZLENBQVpBLGNBQTJCcUIsTUFBTSxDQUFqQ3JCO0FBREQsYUFFTztBQUNOQSxvQkFBWSxDQUFaQSxlQUE0QixNQUFNcUIsTUFBTSxDQUF4Q3JCO0FBQ0E7QUFDRDtBQUNEOztBQUVEO0FBQ0E7O0FBRWMsdUNBQ2Y7QUFBQSxNQUR5Q21CLFdBQ3pDO0FBRHlDQSxlQUN6QyxHQUR1RCxJQUFkQTtBQUN6Qzs7QUFDQyxNQUFJbkIsWUFBWSxHQUFHNEIsWUFBWSxDQUEvQixPQUErQixDQUEvQjtBQUVBLFNBQU9DLFVBQVUsZUFBakIsV0FBaUIsQ0FBakI7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UERDLE1BQU0sQ0FBTkE7O0FBRWUsbUNBQ2Y7QUFBQSxNQUR1QzdCLFNBQ3ZDO0FBRHVDQSxhQUN2QyxHQURtRCxJQUFaQTtBQUN2Qzs7QUFDQyxNQUFHQSxTQUFTLElBQVosTUFBc0I7QUFDckJBLGFBQVMsR0FBVEE7QUFDQXRCLFFBQUksR0FBR0EsSUFBSSxDQUFYQTtBQUNBOztBQUVEQSxNQUFJLEdBQUdBLElBQUksQ0FBWEEsV0FBT0EsRUFBUEE7QUFFQW1ELFFBQU0sQ0FBTkE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmMsK0RBQ2Y7QUFDQztBQUVBLE1BQUlsRCxRQUFRLEdBQVo7O0FBRUEsTUFBR21ELE9BQU8sQ0FBUEEsT0FBSCxJQUFHQSxDQUFILEVBQXlCO0FBQ3hCbkQsWUFBUSxHQUFHbUQsT0FBTyxDQUFQQSxPQUFYbkQsSUFBV21ELENBQVhuRDtBQU5GLElBU0M7OztBQUNBLE1BQUdnQixHQUFHLEtBQU4sTUFBaUI7QUFDaEI7QUFDQTs7QUFFRCxTQUFPVCxDQUFDLGVBQVIsUUFBUSxDQUFSO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDs7QUFFZSxxQkFDZjtBQUFBOztBQUNDLE1BQUlJLENBQUMsR0FBRyxTQUFKQSxDQUFJLEdBQU07QUFFYixRQUFHM0IsVUFBUyxDQUFUQSxlQUFILEdBQStCO0FBQzlCLFlBQU0sVUFBTixnQ0FBTSxDQUFOO0FBQ0E7O0FBRUQsUUFBSTBDLE1BQU0sR0FORyxFQU1iLENBTmEsQ0FRYjs7QUFDQSxRQUFJMEIsVUFBVSxHQUFkOztBQUNBLFNBQUssSUFBSXJFLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHQyxVQUFTLENBQTdCLFFBQXNDRCxDQUFDLElBQXZDLEdBQThDO0FBQzdDLFVBQUk2QyxTQUFTLEdBQUc1QyxVQUFTLENBQXpCLENBQXlCLENBQXpCO0FBQ0EsVUFBSXFFLElBQUksR0FBR3JFLFVBQVMsQ0FBQ0QsQ0FBQyxHQUF0QixDQUFvQixDQUFwQjtBQUNBLFVBQUlvQixLQUFLLEdBQUduQixVQUFTLENBQUNELENBQUMsR0FBdkIsQ0FBcUIsQ0FBckI7QUFDQSxVQUFJdUUsSUFBSSxHQUFSOztBQUVBLFVBQUcscUJBQUgsWUFBb0M7QUFDbkMsWUFBRzFCLFNBQUgsSUFBZ0I7QUFDZjBCLGNBQUksR0FBSkE7QUFDQTtBQUhGLGFBSU87QUFDTix1QkFBYztBQUNiQSxjQUFJLEdBQUpBO0FBQ0E7QUFiMkMsUUFnQjdDO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBR0EsSUFBSSxLQUFQLE1BQWtCO0FBQ2pCLGFBQUssSUFBSW5FLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFqQixNQUEwQkEsQ0FBMUIsSUFBK0I7QUFDOUJ1QyxnQkFBTSxDQUFOQSxLQUFZNkIsUUFBUSxDQUFSQSxjQUFaN0IsRUFBWTZCLENBQVo3QjtBQUNBOztBQUNEO0FBQ0E7O0FBRUQsVUFBRyxDQUFDNEIsSUFBSSxDQUFSLGFBQXNCO0FBQ3JCQSxZQUFJLEdBQUdBLElBQUksQ0FBQy9DLFdBQVorQyxDQUFXLENBQVhBO0FBM0I0QyxRQTZCN0M7QUFDQTs7O0FBQ0EsVUFBR0QsSUFBSSxHQUFQLEdBQWE7QUFDWixhQUFLLElBQUlsRSxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBakIsTUFBMEJBLENBQTFCLElBQStCO0FBQzlCdUMsZ0JBQU0sQ0FBTkEsS0FBWTRCLElBQUksQ0FBaEI1QixDQUFnQixDQUFoQkE7QUFDQTtBQUhGLGFBSU87QUFDTkEsY0FBTSxDQUFOQTtBQUNBO0FBL0NXLE1Ba0RiOzs7QUFFQTtBQXBERDs7QUF1REFmLEdBQUMsQ0FBREE7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RGMsc0JBQ2Y7QUFDQyxNQUFHLGlCQUFILFlBQWdDO0FBQy9CLFdBQU9SLEtBQVA7QUFDQTs7QUFFRDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0VBREE7OztBQUdBO0FBQ0EsSUFBSXFELE9BQU8sR0FBWDtBQUVBLElBQUlDLFdBQVcsR0FBZjs7QUFFQSwyQkFDQTtBQUNDQyxTQUFPLENBQVBBO0FBQ0FELGFBQVcsQ0FBWEE7RUFHRDtBQUNBO0FBQ0M7QUFDQTtBQUNBO0FBRUQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxrREFDQTtBQUNDOztBQUVBLE9BQUssSUFBSTFFLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHaUIsUUFBUSxDQUE1QixRQUFxQ2pCLENBQXJDLElBQTBDO0FBQ3pDNEUsV0FBTyxVQUFVNUMs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QUFmO0FBQ0E7O0FBRUQsU0FBU0MsWUFBVCxHQUNBO0FBQ0MsMEJBQVFYLFNBQVIsRUFBbUJDLE1BQW5CLEVBQTJCM0IsYUFBM0I7QUFDQTs7QUFFRDhCLGtCQUFrQixHLENBRWxCO0FBQ0E7QUFDQTs7QUFDQSxDQUFDLFNBQVNRLElBQVQsR0FBZ0I7QUFDaEJYLFFBQU0sR0FBR3ZELFFBQVEsQ0FBQ21FLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBVCxDQURnQixDQUloQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOztBQUdBUCxhQUFXLEdBaEJLLENBaUJoQjtBQUNBOztBQUVBUSxZQUFVLENBQUMsWUFBTTtBQUVoQlAsZUFBVztBQUVYTyxjQUFVLENBQUMsWUFBTTtBQUNmSCxrQkFBWTtBQUNiLEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHQSxHQVBTLEVBT1AsSUFQTyxDQUFWO0FBUUEsQ0E1QkQsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBLElBQUlJLEtBQUssR0FBRyxFQUFaOztBQUVlLFNBQVNDLElBQVQsQ0FBYzlILElBQWQsRUFDZjtBQUNDLE1BQUkrSCxHQUFHLEdBQUksSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsRUFBVjs7QUFFQSxNQUFHLE9BQU9KLEtBQUssQ0FBQzdILElBQUQsQ0FBWixLQUF1QixXQUExQixFQUF1QztBQUN0QzZILFNBQUssQ0FBQzdILElBQUQsQ0FBTCxHQUFjK0gsR0FBZDtBQUNBLFdBQU9GLEtBQUssQ0FBQzdILElBQUQsQ0FBWjtBQUNBOztBQUVEMkQsU0FBTyxDQUFDdUUsR0FBUixXQUFvQmxJLElBQXBCLFNBQThCK0gsR0FBRyxHQUFHRixLQUFLLENBQUM3SCxJQUFELENBQXpDLEVBQWlELElBQWpEO0FBRUEsU0FBTzZILEtBQUssQ0FBQzdILElBQUQsQ0FBWjtBQUNBLEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHtcInBhZ2VJbmRleFwiOlwicGFnZUluZGV4XCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmJ1bmRsZS5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcblx0XHRpbXBvcnQgY29tcG9uZW50Q29uZmlnIGZyb20gXCIuL3NidXR0b24uc2luP3R5cGU9c2NyaXB0XCI7XG5cdFxuXHRcdGltcG9ydCB7IEJhc2ljIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcblxuXHRcdGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdG1ldGhvZHM6IHt9LFxuXHRcdH0sIGNvbXBvbmVudENvbmZpZyk7XG5cblx0XHRsZXQgaW5zdGFuY2UgPSBmdW5jdGlvbiBTYnV0dG9uKCkge1xuXHRcdFx0QmFzaWMuY2FsbCh0aGlzKTtcblx0XHR9O1xuXHRcdFxuXHRcdC8vIGluaGVyaXQgQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2ljLnByb3RvdHlwZSk7XG5cblx0XHQvLyBjb3JyZWN0IHRoZSBjb25zdHJ1Y3RvciBwb2ludGVyIGJlY2F1c2UgaXQgcG9pbnRzIHRvIEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gaW5zdGFuY2U7XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzID0ge307XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9jb21wb25lbnROYW1lID0gJ1NidXR0b24nO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2xvdHNEYXRhID0ge1wiZGVmYXVsdFwiOntcInBhdGhcIjpbMCwwXSxcInRhZ1wiOlwic3BhblwiLFwiaW5kZXhcIjowfX07XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzID0gT2JqZWN0LmtleXMoY29uZmlnLm1ldGhvZHMpO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fZnVuY3Rpb25hbCA9IGZhbHNlO1xuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZykge1xuXHRcdFx0aWYodHlwZW9mIGNvbmZpZ1trZXldID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5tZXRob2RzKSB7XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZy5tZXRob2RzW2tleV1cblx0XHR9XG5cdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcmVuZGVyID0gZnVuY3Rpb24oaCwgeyBjdHgsIGNvbXBvbmVudHMsIHJlbmRlciwgc3RhdGVtZW50LCBzbG90LCBsb29wLCBkLCBjIH0pIHtcblx0XHRcdFx0cmV0dXJuIGgoXG4gIFwiZGl2XCIsXG4gIFtcbiAgICBjdHgub3B0aW9ucyxcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjE1cHhcIixcbiAgICAgIH0sXG4gICAgICBjbGFzczogXCJuZXctYnV0dG9uXCIsXG4gICAgICBzdHlsZTogW3sgY29sb3I6IGN0eC5fY29tcHV0ZWQudGVzdENvbG9yIH1dLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGN0eC5jbGljayxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHNsb3QoY3R4LCBoLCBcImRlZmF1bHRcIiwgXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic1wiIH0sIFtcbiAgICAgIGBEZWZhdWx0IGJ1dHRvbiB0ZXh0YCxcbiAgICBdKSxcbiAgXVxuKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoKSB7XG5cdFx0XHRcdGxldCBjdHggPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4ge1xuICBfdDogXCJoXCIsXG4gIHQ6IFwiZGl2XCIsXG4gIG86IFtcbiAgICBjdHgub3B0aW9ucyxcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgIGNsYXNzOiBcIm5ldy1idXR0b25cIixcbiAgICAgIHN0eWxlOiBbeyBjb2xvcjogY3R4Ll9jb21wdXRlZC50ZXN0Q29sb3IgfV0sXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogY3R4LmNsaWNrLFxuICAgICAgfSxcbiAgICAgIF9zOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGM6IFstMV0sXG59O1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdGV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuXHQiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWVyOiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBzdGF0ZShvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHMxOiBvKDkpXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZChvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlc3RDb2xvcjogbygoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZS5zMSgpICUgMiA9PT0gMCA/ICdyZWQnIDogJ2dyZWVuJztcbiAgICAgIH0pLFxuICAgICAgdGVzdENsYXNzOiBvKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZWQ6IHRoaXMuX3N0YXRlLnMxKCkgJSAyID09PSAwXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhbGVydCgxKTtcbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkaXJlY3Rpb24gPSAxOyAvLyBzMSArPSAxMFxuXG4gICAgICB0aGlzLl9kYXRhLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fc3RhdGUuczEoKSA+IDQwKSB7XG4gICAgICAgICAgZGlyZWN0aW9uID0gLTU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUuczEoKSA8IDEwKSB7XG4gICAgICAgICAgZGlyZWN0aW9uID0gNTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YXRlLnMxKHRoaXMuX3N0YXRlLnMxKCkgKyBkaXJlY3Rpb24pO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG59OyIsImV4cG9ydCBjb25zdCBfID0gLTE7XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5cblxuZnVuY3Rpb24gY2FtZWxUb1Byb3Aocylcbntcblx0cmV0dXJuIHNcblx0XHQucmVwbGFjZSgvXFwuPyhbQS1aXSspL2csICh4LCB5KSA9PiBgLSR7eS50b0xvd2VyQ2FzZSgpfWApXG5cdFx0LnJlcGxhY2UoL14tLywgJycpO1xufVxuXG5mdW5jdGlvbiBvbmx5VW5pcXVlKHZhbHVlLCBpbmRleCwgc2VsZikgeyBcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDbGFzc09iamVjdChvYmopXG57XG5cdGxldCBjbGFzc2VzID0gW107XG5cblx0Zm9yIChsZXQga2V5IGluIG9iaikge1xuXHRcdGlmKHZhbHVlKG9ialtrZXldKSkge1xuXHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2VzKHN0YXRpY0NsYXNzZXMgPSBbXSwgZHluYW1pYyA9IHt9KVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdFxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYXJnLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKHZhbHVlKGFyZ1tqXSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KFxuXHRcdFx0XHRcdGhhbmRsZUNsYXNzT2JqZWN0KGFyZylcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdChcblx0XHRcdFx0XHRoYW5kbGVDbGFzc09iamVjdCh2YWx1ZShhcmcpKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKCh2LCBpLCBhKSA9PiBhLmluZGV4T2YodikgPT09IGkpO1xuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCBvYmopXG57XG5cdGZvciAobGV0IGtleSBpbiBvYmopIHtcblx0XHRsZXQgdmFsID0gdmFsdWUob2JqW2tleV0pO1xuXHRcdGlmKHZhbCAhPT0gbnVsbCkge1xuXHRcdFx0c3R5bGVzW2NhbWVsVG9Qcm9wKGtleSldID0gdmFsO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSB7fTtcblx0XHRcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgYXJndW1lbnRzW2ldKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgdmFsdWUoYXJndW1lbnRzW2ldKSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3R5bGVzO1xuXHR9XG59IiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnQHNpbnVvdXMvY29tcGlsZXIvc3JjL2VtcHR5JztcblxuXG5pbXBvcnQgeyBoeWRyYXRlLCBkaHRtbCB9IGZyb20gJ3NpbnVvdXMvaHlkcmF0ZSc7XG5cbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkIH0gZnJvbSAnLi9vYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgbG9vcCBhcyBoTG9vcCwgc2xvdCBhcyBoU2xvdCwgc3RhdGVtZW50IGFzIGhTdGF0ZW1lbnQgfSBmcm9tICdAc2ludW91cy9oeWRyYXRpb24nO1xuaW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCBzdGF0ZW1lbnQsIGR5bmFtaWMsIGxvb3AsIHNsb3QgfSBmcm9tICcuL2luZGV4JztcblxuaW1wb3J0IHsgaCB9IGZyb20gJy4vJztcblxuLy8gaW1wb3J0IHsgcmVuZGVyLCBoeWRyYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5sZXQgSElEID0gMDtcblxuXG52YXIgQmFzaWMgPSBmdW5jdGlvbiAoKSB7XG5cblx0ZnVuY3Rpb24gQmFzaWMoKVxuXHR7XG5cdFx0dGhpcy5faXNDb21wb25lbnQgPSB0cnVlO1xuXHRcdHRoaXMuaGlkID0gKytISUQ7XG5cblx0XHR0aGlzLl9wcm9wcyA9IHRoaXMucHJvcHMoKTtcblx0XHR0aGlzLl9wYXNzZWRQcm9wcyA9IHt9O1xuXG5cdFx0Ly8gTG9jYWwgZGF0YVxuXHRcdHRoaXMuX2RhdGEgPSB0aGlzLmRhdGEoKTtcblx0XHQvLyBTdGF0ZWZ1bCBkYXRhXG5cdFx0dGhpcy5fc3RhdGUgPSB0aGlzLnN0YXRlKG9ic2VydmFibGUpO1xuXG5cdFx0dGhpcy5fc2xvdHMgPSB7XG5cdFx0XHRkZWZhdWx0OiBbXSxcblx0XHR9O1xuXG5cdFx0dGhpcy5fY29tcHV0ZWQgPSB0aGlzLmNvbXB1dGVkKGNvbXB1dGVkKTtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXHRcdHRoaXMuX2VsX2luZGV4ID0gMDtcblx0XHR0aGlzLm9wdGlvbnMgPSBudWxsO1xuXG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblxuXHRcdC8vIERlZmF1bHQgcHJvcCB2YWx1ZXMgXG5cdFx0dGhpcy5pbml0UHJvcHMoKTtcblxuXHRcdC8vIHRoaXMuaW5pdFRlbXBsYXRlKCk7XG5cblx0XHR0aGlzLnNldENoaWxkcmVuKCk7XG5cdFx0dGhpcy5zZXRQYXJlbnQoKTtcblxuXHRcdHRoaXMuYmluZENvbnRleHQoKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmJpbmRDb250ZXh0ID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fY29tcHV0ZWQpIHtcblx0XHRcdHRoaXMuX2NvbXB1dGVkW2tleV0gPSB0aGlzLl9jb21wdXRlZFtrZXldLmJpbmQodGhpcyk7XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fbWV0aG9kcykge1xuXHRcdFx0bGV0IG5hbWUgPSB0aGlzLl9tZXRob2RzW2tleV07XG5cdFx0XHR0aGlzW25hbWVdID0gdGhpc1tuYW1lXS5iaW5kKHRoaXMpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQ29uZmlnXG5cdCAqL1xuXG5cdC8vIEJhc2ljLnByb3RvdHlwZS5zZXRNZXRob2RzID0gZnVuY3Rpb24obWV0aG9kcyA9IHt9KVxuXHQvLyB7XG5cdC8vIFx0dGhpcy5fbWV0aG9kcyA9IG1ldGhvZHM7XG5cdC8vIH1cblxuXHQvKipcblx0ICogSGllcmFyY2h5XG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5zZXRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkcmVuID0gW10pXG5cdHtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuYWRkQ2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZClcblx0e1xuXHRcdHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuc2V0UGFyZW50ID0gZnVuY3Rpb24ocGFyZW50ID0gbnVsbClcblx0e1xuXHRcdHRoaXMuX3BhcmVudCA9IHBhcmVudDtcblx0fVxuXHQvKipcblx0ICogUHJvcHNcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnByb3BzID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaW5pdFByb3BzID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fcHJvcHMpXG5cdFx0e1xuXHRcdFx0bGV0IHByb3AgPSB0aGlzLl9wcm9wc1trZXldO1xuXHRcdFx0bGV0IHZhbHVlID0gbnVsbDtcblx0XHRcdGxldCB0eXBlID0gbnVsbDtcblxuXHRcdFx0aWYodHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Ly8gdHlwZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWUgPSBwcm9wLmRlZmF1bHQoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fZGF0YVtrZXldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc1Nsb3RzID0gZnVuY3Rpb24obmFtZSwgc2xvdHMpXG5cdHtcblx0XHR0aGlzLl9zbG90c1tuYW1lXSA9IHNsb3RzO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucylcblx0e1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc1Byb3BzID0gZnVuY3Rpb24ocHJvcHMpXG5cdHtcblx0XHQvLyBpZih0eXBlb2YgdGhpcy5fcGFzc2VkUHJvcHNbY29tcG9uZW50LmhpZF0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0Ly8gXHR0aGlzLl9wYXNzZWRQcm9wc1tjb21wb25lbnQuaGlkXSA9IHt9O1xuXHRcdC8vIH1cblxuXHRcdGZvcihsZXQga2V5IGluIHByb3BzKVxuXHRcdHtcblx0XHRcdGlmKHByb3BzW2tleV0uX29ic2VydmFibGUpIHtcblx0XHRcdFx0dGhpcy5faXNTdGF0ZWZ1bCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2RhdGFba2V5XSA9IHByb3BzW2tleV07XG5cdFx0XHQvLyBpZih0eXBlb2YgdGhpcy5fZGF0YVtrZXldICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Ly8gXHR0aHJvdyBuZXcgRXJyb3IoYFtTaW51b3VzXSBDb21wb25lbnQgJHsgdGhpcy5uYW1lIH0gYWxyZWFkeSBoYXMgJHsga2V5IH0gcHJvcGVydHlgKVxuXHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdC8vIFx0dGhpcy5fZGF0YVtrZXldID0gcHJvcHNba2V5XTtcblx0XHRcdC8vIH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogTG9jYWwgY29tcG9uZW50IGRhdGFcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5jb21wdXRlZCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGF0ZWZ1bCBkYXRhXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5zdGF0ZSA9IGZ1bmN0aW9uKG8pXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHQvKipcblx0ICogMS4gQ3JlYXRlIGNoaWxkIGNvbXBvbmVudHMgKGRpZmZlcmVudCBjb250ZXh0KVxuXHQgKiAyLiBQYXNzIHByb3BzXG5cdCAqIDMuIFJlbmRlclxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUudGVtcGxhdGUgPSBmdW5jdGlvbigpIHt9XG5cblx0QmFzaWMucHJvdG90eXBlLmNoaWxkQ29tcG9uZW50cyA9IGZ1bmN0aW9uKCkge31cblxuXHQvKipcblx0ICogIExpZmUgY3ljbGUgaG9va3Ncblx0ICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5ob29rID0gZnVuY3Rpb24odHlwZSA9ICdtb3VudGVkJylcblx0e1xuXHRcdGlmKHRoaXNbdHlwZV0pIHtcblx0XHRcdHRoaXNbdHlwZV0uY2FsbCh0aGlzKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0aGlzLl9jaGlsZHJlbltpXSA9PT0gXykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoIXRoaXMuX2NoaWxkcmVuW2ldLl9mdW5jdGlvbmFsKSB7XG5cdFx0XHRcdHRoaXMuX2NoaWxkcmVuW2ldLmhvb2sodHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUubW91bnRlZCA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUudW5tb3VudGVkID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiBQcml2YXRlIEFQSSBmb3IgcmVuZGVyIGFuZCBoeWRyYXRlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHggPSBudWxsKVxuXHR7XG5cdFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdFx0XHRjdHggPSB0aGlzO1xuXHRcdH1cblxuXHRcdGguYmluZChjdHgpO1xuXG5cdFx0cmV0dXJuIGN0eC5fX3JlbmRlcihoLmJpbmQoY3R4KSwge1xuXHRcdFx0Y3R4LFxuXHRcdFx0c3RhdGVtZW50LFxuXHRcdFx0bG9vcCxcblx0XHRcdHNsb3QsXG5cdFx0XHRkOiBkeW5hbWljLFxuXHRcdFx0YzogY29tcHV0ZWQsXG5cdFx0fSk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5oeWRyYXRlID0gZnVuY3Rpb24oY3R4ID0gbnVsbCwgY29tcGlsZXIgPSBudWxsKVxuXHR7XG5cdFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdFx0XHRjdHggPSB0aGlzO1xuXHRcdH1cblxuXHRcdGguYmluZChjdHgpO1xuXG5cdFx0cmV0dXJuIGN0eC5fX2h5ZHJhdGUoaCk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cblx0Ly8gQmFzaWMucHJvdG90eXBlLnRlbXBsYXRlQnVpbGRlciA9IGZ1bmN0aW9uKGgsIG9wdHMpXG5cdC8vIHtcblx0Ly8gXHRyZXR1cm4gdGhpc1tgX18keyBvcHRzLnJlbmRlciB9YF0oaCwgb3B0cyk7XG5cdC8vIH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5jb21wb25lbnQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5nZXRVSUQgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdHJldHVybiBgaHlkci0keyBTaW51b3VzLmNyZWF0ZUhJRChpbmRleCkgfWA7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXyhcIm5hbWVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7IH0pO1xuXG5cdHJldHVybiBCYXNpYztcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzaWM7XG4iLCJpbXBvcnQgeyBoLCBocywgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWMoaCwgdGFnLCBvcHRzLCBjaGlsZHJlbilcbntcblx0cmV0dXJuICgpID0+IHtcblx0XHRsZXQgZWwgPSB0YWcoKTtcblx0XHRyZXR1cm4gaChlbCwgb3B0cywgY2hpbGRyZW4pO1xuXHR9O1xuXG59IiwiaW1wb3J0IHsgaCBhcyBocyB9IGZyb20gJ3NpbnVvdXMnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBvcHRpb25zLCAgfSBmcm9tICcuLyc7XG5pbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcblxuXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGlmKGNoaWxkLnNldFBhcmVudCkge1xuXHRcdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGgoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbntcblx0ZWwgPSBlbC50b0xvd2VyQ2FzZSgpO1xuXHQvLyBlbCA9IGNvbXB1dGVkKCgpID0+ICh0eXBlb2YgZWwgPT09ICdmdW5jdGlvbicgPyBlbCA6IGVsKSk7XG5cblx0Ly8gY29uc29sZS5sb2coJ1sgRkYgXScsIGVsLCB0aGlzKVxuXHRsZXQgZHluYW1pY0F0dHJzID0gZmFsc2U7XG5cblx0bGV0IHJlYWR5T3B0aW9ucyA9IG9wdGlvbnMob3B0cyk7XG5cdC8vIElmIEhUTUwgdGFnIHJlbmRlclxuXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG5cdFx0cmV0dXJuIGhzKGVsLCByZWFkeU9wdGlvbnMsIGNoaWxkcmVuKTtcblx0fVxuXG5cdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldENvbXBvbmVudChlbCk7XG5cblx0cmVnaXN0ZXJDaGlsZHJlbih0aGlzLCBjb21wb25lbnQpO1xuXG5cdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuXHRcdHJldHVybiBjb21wb25lbnQucmVuZGVyKHtcblx0XHRcdG9wdGlvbnM6IG9wdHMsXG5cdFx0XHRfc2xvdHM6IHJlYWR5T3B0aW9ucy4kc2xvdHMsXG5cdFx0fSk7XG5cdH1cblxuXHRpZih0eXBlb2Ygb3B0cy5wcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHR9XG5cblx0Zm9yKGxldCBrZXkgaW4gb3B0cy4kc2xvdHMpIHtcblx0XHRjb21wb25lbnQucGFzc1Nsb3RzKGtleSwgb3B0cy4kc2xvdHNba2V5XSk7XHRcblx0fVxuXG5cdGNvbXBvbmVudC5wYXNzT3B0aW9ucyhvcHRzKTtcblxuXHRyZXR1cm4gY29tcG9uZW50LnJlbmRlcigpO1xufSIsImltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICdAc2ludW91cy9sYXp5JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb21wb25lbnQsIGxheW91dCwgdGltZUJlbmNobWFyayA9ICgpID0+IHt9LCBjYWxsYmFjayA9IG51bGwpIHtcblxuICAgIGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuICAgIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCAoaW5zdGFuY2UpID0+IHtcblxuICAgIFx0dGltZUJlbmNobWFyaygnUmVuZGVyJyk7XG5cblx0XHRsYXlvdXQuYXBwZW5kKGluc3RhbmNlLnJlbmRlcigpKTtcblx0XHRpbnN0YW5jZS5ob29rKCdtb3VudGVkJyk7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHRpbWVCZW5jaG1hcmsoJ1JlbmRlcicpO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9KTtcbn0iLCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb29wKGNvbmRpdGlvbiwgZm4pXG57XG5cdGxldCBkID0gKCkgPT4ge1xuXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xuXG5cdFx0bGV0IGxvb3BfY29uZGl0aW9uID0gdHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmRpdGlvbigpIDogY29uZGl0aW9uO1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gbG9vcF9jb25kaXRpb24pXG5cdFx0e1xuXHRcdFx0bGV0IGl0ZW0gPSBsb29wX2NvbmRpdGlvbltrZXldO1xuXHRcdFx0cmVzdWx0LnB1c2goZm4oaXRlbSwga2V5KSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRkLl9vYnNlcnZhYmxlID0gdHJ1ZTtcblx0Ly8gZC5fbm9kZSA9IHRydWU7XG5cblx0cmV0dXJuIGQ7XG59IiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBzaW51b3VzT2JzZXJ2YWJsZSwgY29tcHV0ZWQgYXMgc2ludW91c0NvbXB1dGVkIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VPYnNlZXJ2YWJsZShmbilcbntcblx0Zm4uX29ic2VydmFibGUgPSB0cnVlO1xuXHRyZXR1cm4gZm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZCh2LCBiaW5kaW5nID0gZmFsc2UpIHtcblxuXHRsZXQgZDtcblx0XG5cdGlmKGJpbmRpbmcpIHtcblx0XHRkID0gc2ludW91c0NvbXB1dGVkKHYuYmluZCh0aGlzKSk7XG5cdH0gZWxzZSB7XG5cdFx0ZCA9IHNpbnVvdXNDb21wdXRlZCh2KTtcblx0fVxuXG5cdG1ha2VPYnNlZXJ2YWJsZShkKTtcblxuXHRyZXR1cm4gZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmFibGUodiwgYmluZGluZyA9IGZhbHNlKVxue1xuXHQvLyBsZXQgb2JzID0gbnVsbDtcblx0Ly8gbGV0IGluZGV4ID0gMDtcblxuXHQvLyBsZXQgZGF0YSA9ICh2KSA9PiB7XG5cdC8vIFx0Y29uc29sZS5sb2coc2VlZCwgdiwgaW5kZXgpXG5cdC8vIFx0aWYodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnKSB7XG5cdC8vIFx0XHRpZihpbmRleCA9PT0gMCkge1xuXHQvLyBcdFx0XHRpbmRleCsrO1xuXHQvLyBcdFx0XHRyZXR1cm4gc2VlZDtcblx0Ly8gXHRcdH1cblxuXHQvLyBcdFx0cmV0dXJuIG9icygpO1xuXHQvLyBcdH1cblxuXHQvLyBcdC8vIGlmKGluZGV4ID09PSAwKSB7XG5cdC8vIFx0Ly8gXHRpbmRleCsrO1xuXHQvLyBcdC8vIFx0cmV0dXJuIHY7XG5cdC8vIFx0Ly8gfVxuXG5cdC8vIFx0Ly8gaWYob2JzID09PSBudWxsKSB7XG5cdC8vIFx0Ly8gXHRvYnMgPSBzaW51b3VzT2JzZXJ2YWJsZSh2KTtcblx0Ly8gXHQvLyB9XG5cdC8vIH1cblxuXHRsZXQgZCA9IHNpbnVvdXNPYnNlcnZhYmxlKHYpO1xuXG5cdFxuXHRtYWtlT2JzZWVydmFibGUoZCk7XG5cblx0cmV0dXJuIGQ7XG59IiwiZnVuY3Rpb24gYXJnVG9TdHJpbmcoKVxue1xuXHRsZXQgc3RyID0gJyc7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaV07XG5cdFx0XG5cdFx0aWYodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR2YWx1ZSA9IHZhbHVlKCk7XG5cdFx0fVxuXG5cdFx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yKGxldCBrZXkgaW4gdmFsdWUpIHtcblx0XHRcdFx0aWYodmFsdWVba2V5XSkge1xuXHRcdFx0XHRcdHN0ciArPSBgICR7IGtleSB9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHIgKz0gYCAke3ZhbHVlfWA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcmdUb09iamVjdCgpXG57XG5cdGxldCBzdHIgPSAnJztcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuXHRcdFx0bGV0IHZhbHVlID0gYXJndW1lbnRzW2ldW2tleV07XG5cdFx0XHRpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzW2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIFBhcnNlIGNsYXNzZXNcbiAqIEBwYXJhbSAge1t0eXBlXX0gc3RhdGljICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IGR5bmFtaWMgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZnVuY3Rpb24gY2xhc3NlcyhzdHIgPSBudWxsLCBkeW5hbWljID0gbnVsbClcbntcblx0aWYoc3RyID09PSBudWxsICYmIGR5bmFtaWMgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRpZihzdHIgPT09IG51bGwpIHtcblx0XHRzdHIgPSAnJztcblx0fVxuXHRcblx0aWYodHlwZW9mIGR5bmFtaWMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRkeW5hbWljID0gZHluYW1pYygpO1xuXHR9XG5cblx0aWYoIUFycmF5LmlzQXJyYXkoZHluYW1pYykpIHtcblx0XHRkeW5hbWljID0gW2R5bmFtaWNdO1xuXHR9XG5cblx0c3RyICs9IGFyZ1RvU3RyaW5nLmFwcGx5KHRoaXMsIGR5bmFtaWMpO1xuXHRcblx0Ly8gY29uc29sZS5sb2coc3RyKTtcblxuXHRyZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIFN0eWxlc1xuICogQHBhcmFtICB7T2JqZWN0fSBvYmogICAgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1t0eXBlXX0gZHluYW1pYyBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiBtYWtlU3R5bGVQcm9wKG5hbWUpXG57XG5cdHJldHVybiBuYW1lXG5cdFx0LnJlcGxhY2UoL1xcLj8oW0EtWl0rKS9nLCBmdW5jdGlvbiAoeCx5KSB7XG5cdFx0XHRyZXR1cm4gXCItXCIgKyB5LnRvTG93ZXJDYXNlKClcblx0XHR9KVxuXHRcdC5yZXBsYWNlKC9eLS8sIFwiXCIpO1xufVxuXG5mdW5jdGlvbiBzdHlsZXMob2JqID0ge30sIGR5bmFtaWMgPSBudWxsKVxue1xuXHRsZXQgcmVhZHlTdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xuXG5cdGlmKHR5cGVvZiBkeW5hbWljID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0ZHluYW1pYyA9IGR5bmFtaWMoKTtcblx0fVxuXG5cdGlmKCFBcnJheS5pc0FycmF5KGR5bmFtaWMpKSB7XG5cdFx0ZHluYW1pYyA9IFtkeW5hbWljXTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZHluYW1pYy5sZW5ndGg7IGkrKykge1xuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGR5bmFtaWNbaV0pIHtcblx0XHRcdGxldCB2YWx1ZSA9IGR5bmFtaWNbaV1ba2V5XTtcblx0XHRcdFxuXHRcdFx0aWYodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUoKTtcblx0XHRcdH1cblx0XHRcdHJlYWR5U3R5bGVzW21ha2VTdHlsZVByb3Aoa2V5KV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVhZHlTdHlsZXM7XG59XG5cbmxldCBjbG9uZU9wdGlvbnMgPSBbJ19zJywgJyRzbG90cyddO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNzcyhyZWFkeU9wdGlvbnMsIG9wdGlvbnMpXG57XG5cdGlmKG9wdGlvbnMuc3RhdGljQ2xhc3MgfHwgb3B0aW9ucy5jbGFzcykge1xuXHRcdHJlYWR5T3B0aW9ucy5jbGFzcyA9IGNsYXNzZXMuYmluZCh0aGlzLCBvcHRpb25zLnN0YXRpY0NsYXNzIHx8IG51bGwsIG9wdGlvbnMuY2xhc3MgfHwgbnVsbCk7XG5cdH1cblxuXHRpZihvcHRpb25zLnN0YXRpY1N0eWxlIHx8IG9wdGlvbnMuc3R5bGUpIHtcblx0XHRyZWFkeU9wdGlvbnMuc3R5bGUgPSBzdHlsZXMuYmluZCh0aGlzLCBvcHRpb25zLnN0YXRpY1N0eWxlIHx8IHt9LCBvcHRpb25zLnN0eWxlIHx8IG51bGwpO1xuXHR9XG5cblx0cmV0dXJuIHJlYWR5T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VPcHRpb24ob3B0aW9uLCBzaG91bGRDbG9uZSA9IHRydWUpXG57XG5cdGxldCByZWFkeU9wdGlvbiA9IHt9O1xuXG5cdGlmKG9wdGlvbi5vbikge1xuXHRcdGZvcihsZXQga2V5IGluIG9wdGlvbi5vbikge1xuXHRcdFx0cmVhZHlPcHRpb25bYG9uJHtrZXl9YF0gPSBvcHRpb24ub25ba2V5XTtcblx0XHR9XG5cdH1cblxuXHRpZihvcHRpb24ua2V5KSB7XG5cdFx0cmVhZHlPcHRpb25bJ2RhdGEta2V5J10gPSBvcHRpb24ua2V5O1xuXHR9XG5cblx0bWFrZUNzcyhyZWFkeU9wdGlvbiwgb3B0aW9uKTtcblxuXHRpZihzaG91bGRDbG9uZSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2xvbmVPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbmFtZSA9IGNsb25lT3B0aW9uc1tpXTtcblx0XHRcdGlmKG9wdGlvbltuYW1lXSkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbltuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlYWR5T3B0aW9uO1xufVxuXG5jb25zdCBBc3NpZ25PYmplY3RPcHRpb25zID0gWydzdGF0aWNTdHlsZScsICdhdHRycycsICdvbiddO1xuY29uc3QgQXNzaWduVmFsdWVPcHRpb25zID0gWydzdHlsZScsICdjbGFzcyddO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VPcHRpb25zKG9wdGlvbnMpXG57XG5cdGxldCByZWFkeU9wdGlvbnMgPSB7fTtcblx0bGV0IHNob3VsZEJlTWVyZ2VkID0gZmFsc2U7XG5cblx0aWYoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XG5cdFx0XHRpZihvcHRpb25zW2ldID09PSBudWxsKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnNbaV0pO1xuXG5cdFx0XHRpZihrZXlzLmxlbmd0aCA9PT0gMSAmJiBrZXlzLmluY2x1ZGVzKCckc2xvdHMnKSkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoaSA+IDApIHtcblx0XHRcdFx0c2hvdWxkQmVNZXJnZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRpZighc2hvdWxkQmVNZXJnZWQpIHtcblx0XHRcdHJldHVybiBvcHRpb25zWzFdO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gb3B0aW9ucztcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBvcHRpb24gPSBvcHRpb25zW2ldXG5cdFxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgQXNzaWduT2JqZWN0T3B0aW9ucy5sZW5ndGg7IGorKykge1xuXHRcdFx0bGV0IG5hbWUgPSBBc3NpZ25PYmplY3RPcHRpb25zW2pdO1xuXHRcdFx0XG5cdFx0XHRpZighb3B0aW9uW25hbWVdKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighcmVhZHlPcHRpb25zW25hbWVdKSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9uc1tuYW1lXSA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IobGV0IHByb3AgaW4gb3B0aW9uW25hbWVdKSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9uc1tuYW1lXVtwcm9wXSA9IG9wdGlvbltuYW1lXVtwcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IEFzc2lnblZhbHVlT3B0aW9ucy5sZW5ndGg7IGorKykge1xuXHRcdFx0bGV0IG5hbWUgPSBBc3NpZ25WYWx1ZU9wdGlvbnNbal07XG5cblx0XHRcdGlmKCFvcHRpb25bbmFtZV0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFyZWFkeU9wdGlvbnNbbmFtZV0pIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zW25hbWVdID0gW107XG5cdFx0XHR9XG5cblx0XHRcdHJlYWR5T3B0aW9uc1tuYW1lXSA9IHJlYWR5T3B0aW9uc1tuYW1lXS5jb25jYXQob3B0aW9uW25hbWVdKTtcblx0XHR9XG5cblx0XHRpZihvcHRpb24uX3MpIHtcblx0XHRcdHJlYWR5T3B0aW9ucy5fcyA9IG9wdGlvbi5fcztcblx0XHR9XG5cblx0XHRpZihvcHRpb24ua2V5KSB7XG5cdFx0XHRyZWFkeU9wdGlvbnMua2V5ID0gb3B0aW9uLmtleTtcblx0XHR9XG5cblx0XHRpZihvcHRpb24uc3RhdGljQ2xhc3MpIHtcblx0XHRcdGlmKCFyZWFkeU9wdGlvbnMuc3RhdGljQ2xhc3MpIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zLnN0YXRpY0NsYXNzID0gb3B0aW9uLnN0YXRpY0NsYXNzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zLnN0YXRpY0NsYXNzICs9ICcgJyArIG9wdGlvbi5zdGF0aWNDbGFzcztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVhZHlPcHRpb25zO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcHRpb25zKG9wdGlvbnMsIHNob3VsZENsb25lID0gdHJ1ZSlcbntcblx0bGV0IHJlYWR5T3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhvcHRpb25zKTtcblxuXHRyZXR1cm4gbWFrZU9wdGlvbihyZWFkeU9wdGlvbnMsIHNob3VsZENsb25lKTtcbn0iLCJ3aW5kb3cuX1NpbnVvdXNDb21wb25lbnRzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyKG5hbWUsIGNvbXBvbmVudCA9IG51bGwpXG57XG5cdGlmKGNvbXBvbmVudCA9PSBudWxsKSB7XG5cdFx0Y29tcG9uZW50ID0gbmFtZTtcblx0XHRuYW1lID0gbmFtZS5uYW1lO1xuXHR9XG5cblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHR3aW5kb3cuX1NpbnVvdXNDb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsb3QoKVxue1xuXHRcbn0iLCJpbXBvcnQgeyBoIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KClcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICUgMyAhPT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdGF0ZW1lbnQgc2hvdWxkIGJlIG9kZCBudW1iZXInKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cblx0XHQvLyB2YWx1ZVxuXHRcdGxldCBzdGF0ZW1lbnRTaXplID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGxldCBzaXplID0gYXJndW1lbnRzW2kgKyAxXTtcblx0XHRcdGxldCB2YWx1ZSA9IGFyZ3VtZW50c1tpICsgMl07XG5cdFx0XHRsZXQgbm9kZSA9IG51bGw7XG5cblx0XHRcdHN0YXRlbWVudFNpemUgKz0gc2l6ZTtcblxuXHRcdFx0aWYodHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpZihjb25kaXRpb24oKSkge1xuXHRcdFx0XHRcdG5vZGUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoY29uZGl0aW9uKSB7XG5cdFx0XHRcdFx0bm9kZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnNvbGUud2FybihpLCBzaXplLCBub2RlKTtcblx0XHRcdC8vIFBhc3MgZmFpbGVkIHN0ZXRlbWVudCBjb25kaXRpb25cblx0XHRcdC8vIE5vcm1pbGl6ZSBpbmRleCB0aGF0IHdpbGwgYmUgdXNlZCBpbiByZXBsYWNpbmcgcGxhY2Vob2xkZXIgKGJlbG93KVxuXHRcdFx0aWYobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIW5vZGUuX29ic2VydmFibGUpIHtcblx0XHRcdFx0bm9kZSA9IG5vZGUoaCk7XG5cdFx0XHR9XG5cdFx0XHQvLyByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggbm9kZVxuXHRcdFx0Ly8gQW5kIGNvcnJlY3QgaW5kZXhcblx0XHRcdGlmKHNpemUgPiAxKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdFx0Ly8gaWYoQXJyYXkuaXNBcnJheShub2RlKSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZVtqXSk7XG5cdFx0XHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdFx0XHQvLyBcdHJlc3VsdC5wdXNoKGogPT0gMCA/IG5vZGUgOiAtMSk7XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQucHVzaChub2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Ly8gY29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFxuXHRcdHJldHVybiB7XG5cdFx0XHRub2RlczogcmVzdWx0LFxuXHRcdFx0c2l6ZTogc3RhdGVtZW50U2l6ZSxcblx0XHR9O1xuXHR9XG5cblx0ZC5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cblx0cmV0dXJuIGQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsdWUodmFsdWUpXG57XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiB2YWx1ZSgpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufSIsImltcG9ydCB7IGgsIGhzLCBhcGkgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlci9zcmMvZW1wdHknO1xuaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBvcHRpb25zIGFzIHBhcnNlT3B0aW9ucyB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnQHNpbnVvdXMvbGF6eSc7XG4vLyBpbXBvcnQgc3Vic2NyaWJlIGZyb20gJy4vc3Vic2NyaWJlJztcbmltcG9ydCBoeWRyYXRlUHJvcHMgZnJvbSAnLi9wcm9wZXJ0eSc7XG5cbmxldCBPQlNFUlZFUjtcbmxldCBTVE9SQUdFID0ge307XG5cbmxldCBTVUJTQ1JJQkVSUyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRTdWJzY3JpYmVyKGZuKVxue1xuXHRjb25zb2xlLmxvZyhmbiwgU1VCU0NSSUJFUlMpXG5cdFNVQlNDUklCRVJTLnB1c2goZm4pO1xufVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlUHJvcHMoZWwsIG9wdHMpXG4vLyB7XG5cdC8vIGlmKCFvcHRzLl9zKSB7XG5cdC8vIFx0cmV0dXJuO1xuXHQvLyB9XG5cbi8vIFx0YXBpLnByb3BlcnR5KGVsLCBvcHRzLCBudWxsKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZVRhZyhwYXJlbnQsIGNoaWxkcmVuLCBjdXJyZW50SW5kZXgsIHZhbHVlKVxuLy8ge1xuLy8gXHRsZXQgZWwgPSBjaGlsZHJlbltjdXJyZW50SW5kZXhdO1xuXHRcbi8vIFx0bGV0IG5vZGVzID0gdmFsdWUoKTtcblxuLy8gXHRpZihBcnJheS5pc0FycmF5KG5vZGVzKSkge1xuXG4vLyBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuLy8gXHRcdFx0bGV0IGNoaWxkID0gbm9kZXNbaV07XG4vLyBcdFx0XHRpZih0eXBlb2YgY2hpbGQgPT09ICdmdW5jdGlvbicpIHtcbi8vIFx0XHRcdFx0Y2hpbGQgPSBjaGlsZCgpO1xuLy8gXHRcdFx0fVxuLy8gXHRcdFx0Ly8gY29uc29sZS5sb2cocGFyZW50LCAgY2hpbGQuc2l6ZSlcbi8vIFx0XHRcdC8vIGFwaS5pbnNlcnQocGFyZW50LCBjaGlsZCwgY2hpbGRyZW5bY3VycmVudEluZGV4ICsgaV0pO1xuLy8gXHRcdFx0Ly8gcGFyZW50LnJlcGxhY2VDaGlsZChjaGlsZCwgY2hpbGRyZW5bY3VycmVudEluZGV4ICsgaV0pXG4vLyBcdFx0XHQvLyBjaGlsZHJlbltjdXJyZW50SW5kZXggKyBpXS5yZXBsYWNlV2l0aChjaGlsZCk7XG4vLyBcdFx0fVxuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdGFwaS5pbnNlcnQoZWwsIG5vZGVzLCBudWxsKTtcbi8vIFx0fVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlQ2hpbGRyZW4obm9kZSwgY2hpbGRyZW4pXG4vLyB7XG4vLyBcdGxldCBiaW5kQ2hpbGRyZW4gPSBbXTtcblxuLy8gXHRpZihub2RlICE9PSBudWxsKSB7XG4vLyBcdFx0YmluZENoaWxkcmVuID0gZmlsdGVyQ2hpbGROb2Rlcyhub2RlKTtcbi8vIFx0fVxuXG4vLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbi8vIFx0XHRpZihjaGlsZHJlbltpXSA9PT0gXykge1xuLy8gXHRcdFx0Y29udGludWU7XG4vLyBcdFx0fVxuLy8gXHRcdC8vIGNvbnNvbGUuZXJyb3IoYmluZENoaWxkcmVuW2ldLCBjaGlsZHJlbltpXSk7XG4vLyBcdFx0aHlkcmF0ZVRhZyhub2RlLCBiaW5kQ2hpbGRyZW4sIGksIGNoaWxkcmVuW2ldKTtcbi8vIFx0fVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRTbG90Tm9kZShlbCwgcGF0aClcbi8vIHtcbi8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4vLyBcdFx0ZWwgPSBlbC5jaGlsZE5vZGVzW3BhdGhbaV1dO1xuLy8gXHR9XG5cbi8vIFx0cmV0dXJuIGVsO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBlbCwgb3B0cyA9IHt9LCBzbG90cylcbi8vIHtcbi8vIFx0aWYoIW9wdHNbJ2lkJ10pIHtcbi8vIFx0XHRyZXR1cm47XG4vLyBcdH1cblxuLy8gXHQvLyBpZihvcHRzWydpZCddID09PSAnaHlkci0xMycpIHtcbi8vIFx0Ly8gXHRvcHRzWydpZCddID0gJ2h5ZHItNic7XG4vLyBcdC8vIH1cblxuLy8gXHQvLyBpZihvcHRzWydpZCddID09PSAnaHlkci0zMCcpIHtcbi8vIFx0Ly8gXHRvcHRzWydpZCddID0gJ2h5ZHItMjEnO1xuLy8gXHQvLyB9XG5cbi8vIFx0bGV0IGJpbmROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7IG9wdHNbJ2lkJ10gfWApO1xuXG4vLyBcdGxldCBzbG90Tm9kZXMgPSB7fVxuXG4vLyBcdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG4vLyBcdFx0aWYoY29tcG9uZW50Ll9zbG90c1BhdGhba2V5XSkge1xuLy8gXHRcdFx0bGV0IG5vZGUgPSBnZXRTbG90Tm9kZShiaW5kTm9kZSwgY29tcG9uZW50Ll9zbG90c1BhdGhba2V5XSlcbi8vIFx0XHRcdHNsb3ROb2Rlc1trZXldID0gbm9kZTtcbi8vIFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAke2tleX0gc2xvdCBuYW1lc3BhY2UgZGVmaW5lZGApO1xuLy8gXHRcdH1cbi8vIFx0fVxuXG4vLyBcdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuLy8gXHRcdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG4vLyBcdFx0XHRsZXQgbm9kZSA9IHNsb3ROb2Rlc1trZXldO1xuLy8gXHRcdFx0bGV0IGNoaWxkcmVuU2xvdHMgPSBzbG90c1trZXldO1xuXHRcdFx0XG4vLyBcdFx0XHRpZihub2RlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4vLyBcdFx0XHRcdG5vZGUgPSBbbm9kZV07XG4vLyBcdFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0XHRub2RlID0gbm9kZS5jaGlsZE5vZGVzO1xuLy8gXHRcdFx0fVxuXG4vLyBcdFx0XHRpZihjaGlsZHJlblNsb3RzLmxlbmd0aCA+IG5vZGUubGVuZ3RoKSB7XG4vLyBcdFx0XHRcdHRocm93IG5ldyBFcnJvcignU2xvdCBoeWRyYXRpb24gbGVuZ3RoIG1pc21hdGNoJyk7XG4vLyBcdFx0XHR9XG5cbi8vIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5TbG90cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcbi8vIFx0XHRcdFx0YXBpLmluc2VydChub2RlW2ldLCBjaGlsZHJlblNsb3RzW2ldKCksIG51bGwpO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH1cbi8vIFx0fSk7XG5cdFxuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG4vLyB7XG4vLyBcdGxldCBiaW5kTm9kZTtcbi8vIFx0Y29uc29sZS5sb2codGhpcywgZWwsIG9wdHMsIGNoaWxkcmVuKVxuXG4vLyBcdC8vIGlmKHRoaXMubm9kZSkge1xuLy8gXHQvLyBcdGJpbmROb2RlID0gdGhpcy5ub2RlO1xuLy8gXHQvLyB9XG5cbi8vIFx0aWYoIW9wdHNbJ2lkJ10pIHtcbi8vIFx0XHRyZXR1cm47XG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0YmluZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHsgb3B0c1snaWQnXSB9YCk7XG4vLyBcdH1cblxuLy8gXHQvLyBjb25zb2xlLmxvZyh0aGlzKTtcbi8vIFx0Ly8gdGhpcy5jdHguX2VsX2luZGV4Kys7XG5cbi8vIFx0aWYoYmluZE5vZGUgPT09IG51bGwpIHtcbi8vIFx0XHRyZXR1cm47XG4vLyBcdH1cblx0XG5cdC8vIGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHQvLyBcdGh5ZHJhdGVQcm9wcyhiaW5kTm9kZSwgb3B0cyk7XG5cdC8vIFx0aHlkcmF0ZUNoaWxkcmVuKGJpbmROb2RlLCBjaGlsZHJlbik7XG5cdC8vIH0pO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG4vLyB7XG4vLyBcdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG4vLyBcdGlmKGNoaWxkLnNldFBhcmVudCkge1xuLy8gXHRcdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBjb21waWxlcihlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxuLy8ge1xuLy8gXHRvcHRpb25zKHRoaXMsIG9wdHMpO1xuXHRcbi8vIFx0aWYoIVNpbnVvdXMuaGFzQ29tcG9uZW50KGVsKSkge1xuLy8gXHRcdGh5ZHJhdGUuY2FsbCh0aGlzLCBlbCwgb3B0cywgY2hpbGRyZW4pO1xuLy8gXHRcdHJldHVybiBfO1xuLy8gXHR9XG5cdFx0XG4vLyBcdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldEh5ZHJhdGVDb21wb25lbnQoZWwsIG9wdHMpO1xuXG4vLyBcdC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudCwgZWwsIG9wdHMpXG4vLyBcdGlmKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuLy8gXHRcdHJldHVybiBfO1xuLy8gXHR9XG5cbi8vIFx0cmVnaXN0ZXJDaGlsZHJlbih0aGlzLmN0eCwgY29tcG9uZW50KTtcblxuLy8gXHRpZihjb21wb25lbnQuX2Z1bmN0aW9uYWwpIHtcbi8vIFx0XHQvLyBjb25zb2xlLndhcm4oJ3N0YXJ0IGh5ZHJhdGlvbicpO1xuLy8gXHRcdHJldHVybiBjb21wb25lbnQuaHlkcmF0ZSh7XG4vLyBcdFx0XHRnZXRVSUQoKSB7XG4vLyBcdFx0XHRcdHJldHVybiAtMTtcbi8vIFx0XHRcdH0sXG4vLyBcdFx0XHRfc2xvdHM6IG9wdHMuJHNsb3RzLFxuLy8gXHRcdH0sIGNvbXBpbGVyKTtcbi8vIFx0fVxuXG4vLyBcdGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuLy8gXHRcdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG4vLyBcdH1cblxuLy8gXHRpZihvcHRzLiRzbG90cykge1xuLy8gXHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIGVsLCBvcHRzLCBvcHRzLiRzbG90cyk7XG4vLyBcdH1cblxuLy8gXHRyZXR1cm4gaW5pdENvbXBvbmVudChjb21wb25lbnQpO1xuLy8gfVxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVQcm9wcyhlbCwgb3B0aW9ucylcbi8vIHtcbi8vIFx0aWYob3B0aW9ucy5fcykge1xuLy8gXHRcdC8vIGNvbnNvbGUubG9nKGVsLCAnUHJlcGFyZSBvcHRpb25zJywgb3B0aW9ucyk7XG4vLyBcdFx0Ly8gb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zLCBmYWxzZSk7XG4vLyBcdFx0Ly8gY29uc29sZS5sb2coZWwsICdQcmVwYXJlIG9wdGlvbnMgMicsIG9wdGlvbnMpO1xuLy8gXHRcdHByb3BlcnR5KGVsLCBvcHRpb25zKTtcblxuLy8gXHRcdC8vIGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuLy8gXHRcdC8vIFx0Ly8gY29uc29sZS5sb2coZWwsICdDaGFuZ2Ugb3B0aW9ucycpO1xuLy8gXHRcdC8vIFx0YXBpLnByb3BlcnR5KGVsLCBvcHRpb25zLCBudWxsKTtcbi8vIFx0XHQvLyB9KTtcbi8vIFx0fVxuLy8gfVxuXG5mdW5jdGlvbiBoeWRyYXRlSChjb250ZXh0LCBlbCwgb3B0aW9ucywgY2hpbGRyZW4pXG57XG5cdGh5ZHJhdGVQcm9wcyhjb250ZXh0LCBlbCwgb3B0aW9ucyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGh5ZHJhdGUoY29udGV4dCwgZWwuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5baV0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVMb29wKGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGxldCBjb25kaXRpb24gPSBhcmdzLmM7XG5cdGxldCBzdGFydE5vZGUgPSBub2RlO1xuXG5cdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdGxldCBsb29wX2NvbmRpdGlvbiA9IHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicgPyBjb25kaXRpb24oKSA6IGNvbmRpdGlvbjtcblx0XHQvLyBjb25zb2xlLmxvZyhsb29wX2NvbmRpdGlvbilcblx0XHRsZXQgY3VycmVudE5vZGUgPSBzdGFydE5vZGU7XG5cblx0XHRmb3IobGV0IGtleSBpbiBsb29wX2NvbmRpdGlvbilcblx0XHR7XG5cdFx0XHRsZXQgaXRlbSA9IGxvb3BfY29uZGl0aW9uW2tleV07XG5cdFx0XHRsZXQgaXRlbUtleSA9IGFyZ3MuayhpdGVtLCBrZXkpO1xuXHRcdFx0bGV0IGl0ZW1BcmdzO1xuXG5cdFx0XHRsZXQgc2hvdWxkUmVuZGVyID0gZmFsc2U7XG5cdFx0XHRpZihjdXJyZW50Tm9kZSkge1xuXHRcdFx0XHRsZXQgbm9kZUtleSA9IGN1cnJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKTtcblx0XHRcdFx0aWYobm9kZUtleSA9PT0gaXRlbUtleSkge1xuXHRcdFx0XHRcdHNob3VsZFJlbmRlciA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKHNob3VsZFJlbmRlcikge1xuXHRcdFx0XHRpdGVtQXJncyA9IGFyZ3MucihpdGVtLCBrZXkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aXRlbUFyZ3MgPSBhcmdzLmgoaXRlbSwga2V5KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY29uc29sZS5sb2coY3VycmVudE5vZGUsIHNob3VsZFJlbmRlciwgYXJncyk7XG5cdFx0XHQvLyByZXR1cm47XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnW2h5ZHJhdGUgbG9vcF0nLCBjdXJyZW50Tm9kZSwgaXRlbUFyZ3MpXG5cdFx0XHRoeWRyYXRlKGNvbnRleHQsIGN1cnJlbnROb2RlLCBpdGVtQXJncyk7XG5cblx0XHRcdGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdH1cblx0fSk7XG59XG5cbi8qKlxuICogTWF5YmUgbmVlZCBzYW1lIGh5ZHJhdGlvbiBhbGdvcml0aG0gYXMgd2l0aCBwcm9wc1xuICogU2tpcCBmaXJzdCB0aW1lIGh5ZHJhdGlvbiA/Pz9cbiAqL1xuZnVuY3Rpb24gaHlkcmF0ZVRleHQoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0aWYoYXJncy50ID09PSBfKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdFxuXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRhcGkuaW5zZXJ0KG5vZGUsIGFyZ3MudCgpLCBudWxsKTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gZ2V0U2xvdE5vZGUoZWwsIHRhZywgcGF0aClcbntcblx0bGV0IG5vZGUgPSBlbDtcblxuXHRmb3IgKHZhciBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcblx0XHRub2RlID0gbm9kZS5jaGlsZE5vZGVzW3BhdGhbaV1dO1xuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlU2xvdHMoY29udGV4dCwgZWwsIG9wdHMgPSB7fSwgc2xvdHMpXG57XG5cdC8vIHJldHVybjtcblx0Ly8gSHlkcmF0ZSBwcm9wcyBvZiBtYWluIE5vZGVcblx0Ly8gaHlkcmF0ZVByb3BzKGNvbnRleHQsIGVsLCBvcHRzKTtcblx0XG5cdGxldCBiaW5kZWROb2RlcyA9IHt9XG5cblx0bGV0IHNsb3REYXRhID0gY29udGV4dC5fc2xvdHNEYXRhO1xuXG5cdC8vIEZpbmQgc2xvdCBiaW5kaW5nIG5vZGVzXG5cdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG5cdFx0aWYoc2xvdERhdGFba2V5XSkge1xuXHRcdFx0bGV0IG5vZGUgPSBnZXRTbG90Tm9kZShlbCwgc2xvdERhdGFba2V5XS50YWcsIHNsb3REYXRhW2tleV0ucGF0aCk7XG5cdFx0XHRiaW5kZWROb2Rlc1trZXldID0gbm9kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAke2tleX0gc2xvdCBuYW1lc3BhY2UgZGVmaW5lZGApO1xuXHRcdH1cblx0fVxuXG5cdC8vIEh5ZHJhdGUgc2xvdHMgcGVyIGJpbmRlZCB0YWdcblx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcblx0XHRsZXQgZGF0YSA9IHNsb3REYXRhW2tleV07XG5cdFx0bGV0IG5vZGUgPSBiaW5kZWROb2Rlc1trZXldO1xuXHRcdGxldCBjaGlsZHJlblNsb3RzID0gc2xvdHNba2V5XTtcblx0XHRsZXQgc3RhcnROb2RlSW5kZXggPSBkYXRhLmluZGV4O1xuXG5cdFx0aWYodHlwZW9mIG5vZGUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oZWwsIG9wdHMsIHNsb3REYXRhLCBlbFswXSk7XG5cdFx0fVxuXG5cdFx0aWYoY2hpbGRyZW5TbG90cy5sZW5ndGggPiBub2RlLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTbG90IGh5ZHJhdGlvbiBsZW5ndGggbWlzbWF0Y2gnKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gc3RhcnROb2RlSW5kZXg7IGkgPCBjaGlsZHJlblNsb3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhub2RlLmNoaWxkTm9kZXNbaV0sIGNoaWxkcmVuU2xvdHNbaV0pXG5cdFx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5TbG90c1tpXSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQ29udGV4dCBzZXR1cFxuICovXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdGlmKGNoaWxkLl9mdW5jdGlvbmFsKSB7XG5cdFx0cGFyZW50LmFkZENoaWxkcmVuKF8pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlVGFnKGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGxldCBlbCA9IGFyZ3MudCxcblx0XHRvcHRzID0gYXJncy5vLFxuXHRcdGNoaWxkcmVuID0gYXJncy5jO1xuXG5cdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcblx0XHRoeWRyYXRlSChjb250ZXh0LCBub2RlLCBvcHRzLCBjaGlsZHJlbik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0SHlkcmF0ZUNvbXBvbmVudChlbCwgb3B0cyk7XG5cblx0aWYoY29tcG9uZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHRyZWdpc3RlckNoaWxkcmVuKGNvbnRleHQsIGNvbXBvbmVudCk7XG5cblx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG5cdFx0bGV0IG5ld0FyZ3MgPSBjb21wb25lbnQuaHlkcmF0ZSh7XG5cdFx0XHRfc2xvdHM6IG9wdHMuJHNsb3RzLFxuXHRcdH0pO1xuXG5cdFx0aWYob3B0cy4kc2xvdHMpIHtcblx0XHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIG5vZGUsIG9wdHMsIG9wdHMuJHNsb3RzKTtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLmxvZyhvcHRzKVxuXHRcdGh5ZHJhdGUoY29udGV4dCwgbm9kZSwgbmV3QXJncyk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBzZXR1cCBjb21wb25lbnRcblx0Ly8gaWYodHlwZW9mIG9wdHMucHJvcHMgIT09ICd1bmRlZmluZWQnKSB7XG5cdC8vIFx0Y29tcG9uZW50LnBhc3NQcm9wcyhvcHRzLnByb3BzKTtcblx0Ly8gfVxuXHQvLyBjb25zb2xlLmxvZyhjb21wb25lbnQsIG9wdHMuJHNsb3RzKVxuXHRpZihvcHRzLiRzbG90cykge1xuXHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIG5vZGUsIG9wdHMsIG9wdHMuJHNsb3RzKTtcblx0fVxuXG5cdGNvbXBvbmVudC5wYXNzT3B0aW9ucyhvcHRzKTtcblxuXHRyZXR1cm4gaHlkcmF0ZShjb21wb25lbnQsIG5vZGUsIGNvbXBvbmVudC5oeWRyYXRlKGNvbXBvbmVudCkpO1xufVxuXG4vKipcbiAqIE1haW4gaHlkcmF0aW9uIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGh5ZHJhdGUoY29udGV4dCwgbm9kZSwgYXJncyA9IG51bGwpXG57XG5cdC8vIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdGh5ZHJhdGVJZGxlKGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHQvLyB9LCB7XG5cdC8vIFx0dGltZW91dDogMCxcblx0Ly8gXHRyZWFkOiB0cnVlXG5cdC8vIH0pO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlSWRsZShjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRpZihhcmdzID09PSBudWxsIHx8IG5vZGUgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnaCcpIHtcblx0XHQvLyBhcmdzLm9bJ2RhdGEtaHlkcmF0ZWQnXSA9IHRydWU7XG5cdFx0Ly8gYXJncy5vWydfcyddID0gdHJ1ZTtcblx0XHRoeWRyYXRlVGFnKGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ3QnKSB7XG5cdFx0aHlkcmF0ZVRleHQoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnbG9vcCcpIHtcblx0XHRoeWRyYXRlTG9vcChjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXG5cdHJldHVybiBfO1xuXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SHlkcmF0aW9uKGNvbXBvbmVudCwgaHlkcmF0aW9uUm9vdCwgdGltZUJlbmNobWFyayA9ICgpID0+IHt9LCBjYWxsYmFjayA9IG51bGwpXG57XG5cdGxvYWRDb21wb25lbnQoY29tcG9uZW50LCAoaW5zdGFuY2UpID0+IHtcblxuXHRcdHRpbWVCZW5jaG1hcmsoJ0h5ZHJhdGlvbicpO1xuXG5cdFx0bGV0IHRyZWUgPSBbaW5zdGFuY2VdO1xuXG5cdFx0U2ludW91cy5jbGVhckhJRCgpO1xuXG5cdFx0Ly8gbGV0IGNvbm5lY3RlZE5vZGUgPSBmaWx0ZXJDaGlsZE5vZGVzKGh5ZHJhdGlvblJvb3QpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY29tcG9uZW50ID0gdHJlZVtpXTtcblx0XHRcdGxldCBub2RlID0gaHlkcmF0aW9uUm9vdC5jaGlsZE5vZGVzW2ldO1xuXHRcdFx0bGV0IGh5ZHJhdGlvbiA9IGNvbXBvbmVudC5oeWRyYXRlKGNvbXBvbmVudCk7XG5cdFx0XHRcblx0XHRcdGh5ZHJhdGUoY29tcG9uZW50LCBub2RlLCBoeWRyYXRpb24pO1xuXHRcdH1cblx0XHRcblx0XHQvLyBjb25zb2xlLmxvZyhpbnN0YW5jZSk7XG5cdFx0aW5zdGFuY2UuaG9vaygnbW91bnRlZCcpO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHR0aW1lQmVuY2htYXJrKCdIeWRyYXRpb24nKTtcblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fSk7XG5cbn1cblxuLyoqXG4gKiBGaWx0ZXIgb3V0IHdoaXRlc3BhY2UgdGV4dCBub2RlcyB1bmxlc3MgaXQgaGFzIGEgbm9za2lwIGluZGljYXRvci5cbiAqXG4gKiBAcGFyYW0gIHtOb2RlfSBwYXJlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBmaWx0ZXJDaGlsZE5vZGVzKHBhcmVudCkge1xuXHRyZXR1cm4gcGFyZW50LmNoaWxkTm9kZXM7XG5cdC8vIGNvbnNvbGUud2FybihwYXJlbnQsIHBhcmVudC5jaGlsZE5vZGVzKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGROb2RlcykuZmlsdGVyKFxuICAgICAgICBlbCA9PiBlbC5ub2RlVHlwZSAhPT0gMyB8fCBlbC5kYXRhLnRyaW0oKSB8fCBlbC5fbm9za2lwXG4gICAgKTtcbn1cbiIsImltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gJy4vc3Vic2NyaWJlJztcbmltcG9ydCB7IG1ha2VDc3MsIG1lcmdlT3B0aW9ucyB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICdzaW51b3VzJztcblxuLy8gbGV0IHN1YnNjcmliZXJzID0gW107XG4vLyBsZXQgc3Vic2NyaWJlcnNfZmlyc3QgPSBbXTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGh5ZHJhdGVQcm9wcyhjb250ZXh0LCBlbCwgb3B0aW9ucylcbntcblx0Ly8gcmV0dXJuO1xuXHQvLyBjb25zb2xlLmxvZyhlbCk7XG5cdC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuXHRvcHRpb25zID0gbWVyZ2VPcHRpb25zKG9wdGlvbnMpXG5cdC8vIGNvbnNvbGUud2FybihvcHRpb25zKTtcblx0Ly8gcmV0dXJuO1xuXG5cdGlmKCFvcHRpb25zLl9zKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblxuXHRsZXQgc3Vic2NyaWJlcnMgPSBbXTtcblx0bGV0IHN1YnNjcmliZXJzX2ZpcnN0ID0gW107XG5cblxuXHRmdW5jdGlvbiBhZGRTdWJzY3JpYmVyKHZhbHVlLCBmbiwgc2tpcCA9IHRydWUpXG5cdHtcblx0XHRzdWJzY3JpYmVycy5wdXNoKHtcblx0XHRcdHZhbHVlLFxuXHRcdFx0Zm4sXG5cdFx0fSk7XG5cblx0XHRzdWJzY3JpYmVyc19maXJzdC5wdXNoKHNraXApO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1ha2Ugc3R5bGVzIGFuZCBjbGFzc2VzXG5cdCAqL1xuXHRpZihvcHRpb25zLnN0eWxlIHx8IG9wdGlvbnMuY2xhc3MpIHtcblx0XHQvLyBjb25zb2xlLmVycm9yKGVsKTtcblx0XHRsZXQgY3NzT3B0aW9ucyA9IG1ha2VDc3Moe30sIG9wdGlvbnMpO1xuXG5cdFx0aWYoY3NzT3B0aW9ucy5zdHlsZSkge1xuXHRcdFx0YWRkU3Vic2NyaWJlcihjc3NPcHRpb25zLnN0eWxlLCAob2JqKSA9PiB7XG5cdFx0XHRcdGZvcihsZXQgbmFtZSBpbiBvYmopIHtcblx0XHRcdFx0XHRlbC5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBvYmpbbmFtZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZihjc3NPcHRpb25zLmNsYXNzKSB7XG5cdFx0XHRhZGRTdWJzY3JpYmVyKGNzc09wdGlvbnMuY2xhc3MsICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRlbC5jbGFzc05hbWUgPSB2YWx1ZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIE1ha2UgZXZlbnRzXG5cdCAqL1xuXHRpZihvcHRpb25zLm9uKSB7XG5cdFx0Zm9yKGxldCBuYW1lIGluIG9wdGlvbnMub24pIHtcblx0XHRcdGhhbmRsZUV2ZW50KGVsLCBuYW1lLCBvcHRpb25zLm9uW25hbWVdKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhdHRyaWJ1dGVzXG5cdCAqL1xuXHRpZihvcHRpb25zLmF0dHJzKSB7XG5cdFx0Zm9yKGxldCBuYW1lIGluIG9wdGlvbnMuYXR0cnMpIHtcblx0XHRcdGFkZFN1YnNjcmliZXIob3B0aW9ucy5hdHRyc1tuYW1lXSwgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXHQvKipcblx0ICogU3Vic2NyaWJlXG5cdCAqL1xuXHRpZihzdWJzY3JpYmVycy5sZW5ndGggPiAwKSB7XG5cdFx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHN1YnNjcmliZXJzW2ldLnZhbHVlKCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihzdWJzY3JpYmVyc19maXJzdFtpXSkge1xuXHRcdFx0XHRcdHN1YnNjcmliZXJzX2ZpcnN0W2ldID0gZmFsc2U7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Vic2NyaWJlcnNbaV0uZm4odmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbn1cblxuZnVuY3Rpb24gaGFuZGxlRXZlbnQoZWwsIG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGV2ZW50UHJveHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnRQcm94eSk7XG4gICAgfVxuXG4gICAgKGVsLl9saXN0ZW5lcnMgfHwgKGVsLl9saXN0ZW5lcnMgPSB7fSkpW25hbWVdID0gdmFsdWU7XG59XG5cbi8qKlxuICogUHJveHkgYW4gZXZlbnQgdG8gaG9va2VkIGV2ZW50IGhhbmRsZXJzLlxuICogQHBhcmFtIHtFdmVudH0gZSAtIFRoZSBldmVudCBvYmplY3QgZnJvbSB0aGUgYnJvd3Nlci5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBldmVudFByb3h5KGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2UudHlwZV0oZSk7XG59IiwiaW1wb3J0IHsgc3Vic2NyaWJlIGFzIHNpbnVvdXNTdWJzY3JpYmUgfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlKHZhbHVlLCBmbiwgc2tpcEZpcnN0ID0gdHJ1ZSlcbntcblx0aWYodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGZuKHZhbHVlKTtcblx0fVxuXG5cdHNpbnVvdXNTdWJzY3JpYmUoKCkgPT4ge1xuXHRcdGxldCB2ID0gdmFsdWUoKTtcblxuXHRcdC8vIGNvbnNvbGUubG9nKHNraXBGaXJzdCwgdiwgZm4pXG5cblx0XHRpZihza2lwRmlyc3QpIHtcblx0XHRcdHNraXBGaXJzdCA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXG5cblx0XHRmbih2KTtcblx0fSk7XG59IiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBoeWRyYXRlIH0gZnJvbSAnQHNpbnVvdXMvaHlkcmF0aW9uJztcbmltcG9ydCByZW5kZXIgZnJvbSAnQHNpbnVvdXMvcmVuZGVyJztcblxuLy8gaW1wb3J0IHsgYXBpIH0gZnJvbSAnc2ludW91cyc7XG4vLyBpbXBvcnQgeyBvYnNlcnZhYmxlIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50L3NyYy9vYnNlcnZhYmxlJztcbi8vIGltcG9ydCB0ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdGVzdC5zaW4nXG4vLyBpbXBvcnQgdGVzdDIgZnJvbSAnLi4vY29tcG9uZW50cy90ZXN0Mi5zaW4nXG5pbXBvcnQgYnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2J1dHRvbi5zaW4nXG4vLyBpbXBvcnQgSW5kZXhQYWdlIGZyb20gJy4uL3BhZ2VzL2luZGV4LnNpbidcbmltcG9ydCB0aW1lQmVuY2htYXJrIGZyb20gJy4vdGltZSc7XG5cbmNvbnN0IEluZGV4UGFnZSA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VJbmRleFwiICovICcuLi9wYWdlcy9pbmRleC5zaW4nKVxuXG5cbnZhciBMQVlPVVQ7XG52YXIgUGFnZUluZGV4LCBQYWdlSW5kZXgyO1xuXG5mdW5jdGlvbiBURVNUX1dFQlBBQ0tfQlVJTEQoKVxue1xuXHR0aW1lQmVuY2htYXJrKCdTU1ItQnVpbGQnKTtcblx0Ly8gU2ludW91cy5yZWdpc3RlckNvbXBvbmVudCh0ZXN0KTtcblx0Ly8gU2ludW91cy5yZWdpc3RlckNvbXBvbmVudCh0ZXN0Mik7XG5cdFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQoYnV0dG9uKTtcblx0dGltZUJlbmNobWFyaygnU1NSLUJ1aWxkJyk7XG59XG5cbi8vIGZ1bmN0aW9uIFRFU1RfSU5JVCgpXG4vLyB7XG4vLyBcdHRpbWVCZW5jaG1hcmsoJ1NTUi1Jbml0Jyk7XG4vLyBcdFBhZ2VJbmRleCA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0UGFnZUluZGV4MiA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0dGltZUJlbmNobWFyaygnU1NSLUluaXQnKTtcbi8vIH1cblxuZnVuY3Rpb24gVEVTVF9SRU5ERVIoKVxue1xuXHRyZW5kZXIoSW5kZXhQYWdlLCBMQVlPVVQsIHRpbWVCZW5jaG1hcmssIChjKSA9PiB7XG5cdFx0UGFnZUluZGV4ID0gYztcblx0fSk7XG59XG5cbmZ1bmN0aW9uIENMRUFSX0hPT0tTKClcbntcblx0bGV0IGh0bWwgPSBMQVlPVVQuaW5uZXJIVE1MO1xuXHRMQVlPVVQuaW5uZXJIVE1MID0gaHRtbDtcblx0UGFnZUluZGV4Lmhvb2soJ3VubW91bnRlZCcpO1xufVxuXG5mdW5jdGlvbiBURVNUX0hZRFJBVEUoKVxue1xuXHRoeWRyYXRlKEluZGV4UGFnZSwgTEFZT1VULCB0aW1lQmVuY2htYXJrKTtcbn1cblxuVEVTVF9XRUJQQUNLX0JVSUxEKCk7XG5cbi8vIFRFU1RfSU5JVCgpO1xuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxvYWQpO1xuLy8gcmV0dXJuO1xuKGZ1bmN0aW9uIGxvYWQoKSB7XG5cdExBWU9VVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXlvdXQnKTtcblxuXG5cdC8vIGxldCBkID0gb2JzZXJ2YWJsZSgxKTtcblx0Ly8gYXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdC8vIFx0Y29uc29sZS5sb2coJ1tzYl0nLCBkKCkpO1xuXHQvLyB9KVxuXHQvLyBkKDIpO1xuXHQvLyByZXR1cm47XG5cblxuXHQvLyBURVNUX0hZRFJBVEUoKTtcblx0Ly8gcmV0dXJuO1xuXG5cblx0VEVTVF9SRU5ERVIoKTtcblx0Ly8gY29uc29sZS5sb2coTEFZT1VULmlubmVySFRNTClcblx0Ly8gcmV0dXJuXG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cblx0XHRDTEVBUl9IT09LUygpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHQgVEVTVF9IWURSQVRFKCk7XG5cdFx0fSwgMzAwKTtcblx0fSwgMTAwMCk7XG59KSgpO1xuIiwibGV0IHRpbWVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUobmFtZSlcbntcblx0bGV0IG5vdyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdGlmKHR5cGVvZiB0aW1lc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aW1lc1tuYW1lXSA9IG5vdztcblx0XHRyZXR1cm4gdGltZXNbbmFtZV07XG5cdH1cblxuXHRjb25zb2xlLmxvZyhgWyB0YiAke25hbWV9IF1gLCBub3cgLSB0aW1lc1tuYW1lXSwgJ21zJyk7XG5cblx0ZGVsZXRlIHRpbWVzW25hbWVdO1xufSJdLCJzb3VyY2VSb290IjoiIn0=