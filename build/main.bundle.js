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
      var shouldRender = true;

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
  } // Hydrate props of main Node
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
  // LAYOUT.innerHTML = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uLnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NidXR0b24uc2luP2NlNzkiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb29wLmpzIiwid2VicGFjazovLy8uLi9zcmMvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvc3Vic2NyaWJlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXItdGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZS5qcyJdLCJuYW1lcyI6WyJfIiwieSIsInNlbGYiLCJjbGFzc2VzIiwib2JqIiwic3RhdGljQ2xhc3NlcyIsImR5bmFtaWMiLCJpIiwiYXJndW1lbnRzIiwiYXJnIiwiQXJyYXkiLCJqIiwiaGFuZGxlQ2xhc3NPYmplY3QiLCJhIiwidmFsIiwic3R5bGVzIiwiY2FtZWxUb1Byb3AiLCJoYW5kbGVTdHlsZXNPYmplY3QiLCJISUQiLCJCYXNpYyIsIm9ic2VydmFibGUiLCJkZWZhdWx0IiwiY29tcHV0ZWQiLCJuYW1lIiwiY2hpbGRyZW4iLCJwYXJlbnQiLCJwcm9wIiwidmFsdWUiLCJ0eXBlIiwicHJvcHMiLCJjdHgiLCJoIiwic3RhdGVtZW50IiwibG9vcCIsInNsb3QiLCJkIiwiYyIsImNvbXBpbGVyIiwiU2ludW91cyIsImVsIiwidGFnIiwiY2hpbGQiLCJvcHRzIiwiZHluYW1pY0F0dHJzIiwicmVhZHlPcHRpb25zIiwiY29tcG9uZW50IiwicmVnaXN0ZXJDaGlsZHJlbiIsIm9wdGlvbnMiLCJfc2xvdHMiLCIkc2xvdHMiLCJyZXN1bHQiLCJsb29wX2NvbmRpdGlvbiIsImNvbmRpdGlvbiIsIml0ZW0iLCJmbiIsImJpbmRpbmciLCJ2IiwibWFrZU9ic2VlcnZhYmxlIiwic3RyIiwiYXJnVG9TdHJpbmciLCJyZWFkeVN0eWxlcyIsIm1ha2VTdHlsZVByb3AiLCJjbG9uZU9wdGlvbnMiLCJzaG91bGRDbG9uZSIsInJlYWR5T3B0aW9uIiwib3B0aW9uIiwibWFrZUNzcyIsIkFzc2lnbk9iamVjdE9wdGlvbnMiLCJBc3NpZ25WYWx1ZU9wdGlvbnMiLCJzaG91bGRCZU1lcmdlZCIsIm1lcmdlT3B0aW9ucyIsIm1ha2VPcHRpb24iLCJ3aW5kb3ciLCJjb250ZXh0IiwiY2hpbGRJbmRleCIsInNpemUiLCJub2RlIiwiZG9jdW1lbnQiLCJTVE9SQUdFIiwiU1VCU0NSSUJFUlMiLCJjb25zb2xlIiwiaHlkcmF0ZSIsImFyZ3MiLCJzdGFydE5vZGUiLCJhcGkiLCJjdXJyZW50Tm9kZSIsIml0ZW1LZXkiLCJpdGVtQXJncyIsInNob3VsZFJlbmRlciIsIm5vZGVLZXkiLCJwYXRoIiwiYmluZGVkTm9kZXMiLCJzbG90RGF0YSIsImdldFNsb3ROb2RlIiwiZGF0YSIsImNoaWxkcmVuU2xvdHMiLCJzbG90cyIsInN0YXJ0Tm9kZUluZGV4IiwiaHlkcmF0ZUgiLCJuZXdBcmdzIiwiaHlkcmF0ZVNsb3RzIiwiaHlkcmF0ZUlkbGUiLCJoeWRyYXRlVGFnIiwiaHlkcmF0ZVRleHQiLCJoeWRyYXRlTG9vcCIsInRpbWVCZW5jaG1hcmsiLCJjYWxsYmFjayIsInRyZWUiLCJoeWRyYXRpb25Sb290IiwiaHlkcmF0aW9uIiwiaW5zdGFuY2UiLCJzdWJzY3JpYmVycyIsInN1YnNjcmliZXJzX2ZpcnN0Iiwic2tpcCIsImNzc09wdGlvbnMiLCJhZGRTdWJzY3JpYmVyIiwiaGFuZGxlRXZlbnQiLCJlIiwic3RhdGVtZW50U2l6ZSIsIm5vZGVzIiwic2tpcEZpcnN0IiwiU2ludW91c0NvbXBvbmVudHMiLCJjcmVhdGVISUQiLCJjbGVhckhJRCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiaGFzQ29tcG9uZW50IiwiZ2V0SHlkcmF0ZUNvbXBvbmVudCIsImdldENvbXBvbmVudEluc3RhbmNlIiwiZ2V0Q29tcG9uZW50IiwibW9kdWxlIiwibGF5b3V0IiwiSW5kZXhQYWdlIiwiTEFZT1VUIiwiUGFnZUluZGV4IiwiUGFnZUluZGV4MiIsIlRFU1RfV0VCUEFDS19CVUlMRCIsImJ1dHRvbiIsIlRFU1RfUkVOREVSIiwiQ0xFQVJfSE9PS1MiLCJodG1sIiwiaW5uZXJIVE1MIiwiaG9vayIsIlRFU1RfSFlEUkFURSIsImxvYWQiLCJnZXRFbGVtZW50QnlJZCIsInNldFRpbWVvdXQiLCJ0aW1lcyIsInRpbWUiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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QUFRLENBQUNtRSxjQUFULENBQXdCLFFBQXhCLENBQVQsQ0FEZ0IsQ0FJaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNDO0FBQ0Q7O0FBRUFQLGFBQVcsR0F0QkssQ0F1QmhCO0FBQ0E7O0FBRUFRLFlBQVUsQ0FBQyxZQUFNO0FBRWhCUCxlQUFXO0FBRVhPLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZILGtCQUFZO0FBQ2IsS0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdBLEdBUFMsRUFPUCxJQVBPLENBQVY7QUFRQSxDQWxDRCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREEsSUFBSUksS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBU0MsSUFBVCxDQUFjNUgsSUFBZCxFQUNmO0FBQ0MsTUFBSTZILEdBQUcsR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0osS0FBSyxDQUFDM0gsSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDMkgsU0FBSyxDQUFDM0gsSUFBRCxDQUFMLEdBQWM2SCxHQUFkO0FBQ0EsV0FBT0YsS0FBSyxDQUFDM0gsSUFBRCxDQUFaO0FBQ0E7O0FBRUR5RCxTQUFPLENBQUN1RSxHQUFSLFdBQW9CaEksSUFBcEIsU0FBOEI2SCxHQUFHLEdBQUdGLEtBQUssQ0FBQzNILElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPMkgsS0FBSyxDQUFDM0gsSUFBRCxDQUFaO0FBQ0EsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wicGFnZUluZGV4XCI6XCJwYWdlSW5kZXhcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuYnVuZGxlLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXHRcdGltcG9ydCBjb21wb25lbnRDb25maWcgZnJvbSBcIi4vc2J1dHRvbi5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFNidXR0b24oKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnU2J1dHRvbic7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSB7XCJkZWZhdWx0XCI6e1wicGF0aFwiOlswLDBdLFwidGFnXCI6XCJzcGFuXCIsXCJpbmRleFwiOjB9fTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSBPYmplY3Qua2V5cyhjb25maWcubWV0aG9kcyk7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9mdW5jdGlvbmFsID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19yZW5kZXIgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcbiAgXCJkaXZcIixcbiAgW1xuICAgIGN0eC5vcHRpb25zLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiMTVweFwiLFxuICAgICAgfSxcbiAgICAgIGNsYXNzOiBcIm5ldy1idXR0b25cIixcbiAgICAgIHN0eWxlOiBbeyBjb2xvcjogY3R4Ll9jb21wdXRlZC50ZXN0Q29sb3IgfV0sXG4gICAgICBhdHRyczoge1xuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogY3R4LmNsaWNrLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBbXG4gICAgc2xvdChjdHgsIGgsIFwiZGVmYXVsdFwiLCBcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzXCIgfSwgW1xuICAgICAgYERlZmF1bHQgYnV0dG9uIHRleHRgLFxuICAgIF0pLFxuICBdXG4pO1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9faHlkcmF0ZSA9IGZ1bmN0aW9uKGgpIHtcblx0XHRcdFx0bGV0IGN0eCA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiB7XG4gIF90OiBcImhcIixcbiAgdDogXCJkaXZcIixcbiAgbzogW1xuICAgIGN0eC5vcHRpb25zLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgY2xhc3M6IFwibmV3LWJ1dHRvblwiLFxuICAgICAgc3R5bGU6IFt7IGNvbG9yOiBjdHguX2NvbXB1dGVkLnRlc3RDb2xvciB9XSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBjdHguY2xpY2ssXG4gICAgICB9LFxuICAgICAgX3M6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgYzogWy0xXSxcbn07XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGltZXI6IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIHN0YXRlKG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgczE6IG8oOSlcbiAgICB9O1xuICB9LFxuXG4gIGNvbXB1dGVkKG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGVzdENvbG9yOiBvKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlLnMxKCkgJSAyID09PSAwID8gJ3JlZCcgOiAnZ3JlZW4nO1xuICAgICAgfSksXG4gICAgICB0ZXN0Q2xhc3M6IG8oKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlZDogdGhpcy5fc3RhdGUuczEoKSAlIDIgPT09IDBcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFsZXJ0KDEpO1xuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRpcmVjdGlvbiA9IDE7IC8vIHMxICs9IDEwXG5cbiAgICAgIHRoaXMuX2RhdGEudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZS5zMSgpID4gNDApIHtcbiAgICAgICAgICBkaXJlY3Rpb24gPSAtNTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZS5zMSgpIDwgMTApIHtcbiAgICAgICAgICBkaXJlY3Rpb24gPSA1O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3RhdGUuczEodGhpcy5fc3RhdGUuczEoKSArIGRpcmVjdGlvbik7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH1cbn07IiwiZXhwb3J0IGNvbnN0IF8gPSAtMTtcbiIsImltcG9ydCB2YWx1ZSBmcm9tICcuL3ZhbHVlJztcblxuXG5mdW5jdGlvbiBjYW1lbFRvUHJvcChzKVxue1xuXHRyZXR1cm4gc1xuXHRcdC5yZXBsYWNlKC9cXC4/KFtBLVpdKykvZywgKHgsIHkpID0+IGAtJHt5LnRvTG93ZXJDYXNlKCl9YClcblx0XHQucmVwbGFjZSgvXi0vLCAnJyk7XG59XG5cbmZ1bmN0aW9uIG9ubHlVbmlxdWUodmFsdWUsIGluZGV4LCBzZWxmKSB7IFxuICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNsYXNzT2JqZWN0KG9iailcbntcblx0bGV0IGNsYXNzZXMgPSBbXTtcblxuXHRmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG5cdFx0aWYodmFsdWUob2JqW2tleV0pKSB7XG5cdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzZXMoc3RhdGljQ2xhc3NlcyA9IFtdLCBkeW5hbWljID0ge30pXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0XG5cdFx0XHRpZihBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBhcmcubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2godmFsdWUoYXJnW2pdKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgYXJnID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQoXG5cdFx0XHRcdFx0aGFuZGxlQ2xhc3NPYmplY3QoYXJnKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KFxuXHRcdFx0XHRcdGhhbmRsZUNsYXNzT2JqZWN0KHZhbHVlKGFyZykpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzc2VzID0gY2xhc3Nlcy5maWx0ZXIoKHYsIGksIGEpID0+IGEuaW5kZXhPZih2KSA9PT0gaSk7XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVN0eWxlc09iamVjdChzdHlsZXMsIG9iailcbntcblx0Zm9yIChsZXQga2V5IGluIG9iaikge1xuXHRcdGxldCB2YWwgPSB2YWx1ZShvYmpba2V5XSk7XG5cdFx0aWYodmFsICE9PSBudWxsKSB7XG5cdFx0XHRzdHlsZXNbY2FtZWxUb1Byb3Aoa2V5KV0gPSB2YWw7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlcygpXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IHN0eWxlcyA9IHt9O1xuXHRcdFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCBhcmd1bWVudHNbaV0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCB2YWx1ZShhcmd1bWVudHNbaV0pKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzdHlsZXM7XG5cdH1cbn0iLCJpbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcbmltcG9ydCB7IF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlci9zcmMvZW1wdHknO1xuXG5cbmltcG9ydCB7IGh5ZHJhdGUsIGRodG1sIH0gZnJvbSAnc2ludW91cy9oeWRyYXRlJztcblxuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQgfSBmcm9tICcuL29ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBsb29wIGFzIGhMb29wLCBzbG90IGFzIGhTbG90LCBzdGF0ZW1lbnQgYXMgaFN0YXRlbWVudCB9IGZyb20gJ0BzaW51b3VzL2h5ZHJhdGlvbic7XG5pbXBvcnQgeyBzdHlsZXMsIGNsYXNzZXMsIHN0YXRlbWVudCwgZHluYW1pYywgbG9vcCwgc2xvdCB9IGZyb20gJy4vaW5kZXgnO1xuXG5pbXBvcnQgeyBoIH0gZnJvbSAnLi8nO1xuXG4vLyBpbXBvcnQgeyByZW5kZXIsIGh5ZHJhdGUgfSBmcm9tICcuL3RlbXBsYXRlJztcbmxldCBISUQgPSAwO1xuXG5cbnZhciBCYXNpYyA9IGZ1bmN0aW9uICgpIHtcblxuXHRmdW5jdGlvbiBCYXNpYygpXG5cdHtcblx0XHR0aGlzLl9pc0NvbXBvbmVudCA9IHRydWU7XG5cdFx0dGhpcy5oaWQgPSArK0hJRDtcblxuXHRcdHRoaXMuX3Byb3BzID0gdGhpcy5wcm9wcygpO1xuXHRcdHRoaXMuX3Bhc3NlZFByb3BzID0ge307XG5cblx0XHQvLyBMb2NhbCBkYXRhXG5cdFx0dGhpcy5fZGF0YSA9IHRoaXMuZGF0YSgpO1xuXHRcdC8vIFN0YXRlZnVsIGRhdGFcblx0XHR0aGlzLl9zdGF0ZSA9IHRoaXMuc3RhdGUob2JzZXJ2YWJsZSk7XG5cblx0XHR0aGlzLl9zbG90cyA9IHtcblx0XHRcdGRlZmF1bHQ6IFtdLFxuXHRcdH07XG5cblx0XHR0aGlzLl9jb21wdXRlZCA9IHRoaXMuY29tcHV0ZWQoY29tcHV0ZWQpO1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gW107XG5cdFx0dGhpcy5fZWxfaW5kZXggPSAwO1xuXHRcdHRoaXMub3B0aW9ucyA9IG51bGw7XG5cblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXG5cdFx0Ly8gRGVmYXVsdCBwcm9wIHZhbHVlcyBcblx0XHR0aGlzLmluaXRQcm9wcygpO1xuXG5cdFx0Ly8gdGhpcy5pbml0VGVtcGxhdGUoKTtcblxuXHRcdHRoaXMuc2V0Q2hpbGRyZW4oKTtcblx0XHR0aGlzLnNldFBhcmVudCgpO1xuXG5cdFx0dGhpcy5iaW5kQ29udGV4dCgpO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuYmluZENvbnRleHQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9jb21wdXRlZCkge1xuXHRcdFx0dGhpcy5fY29tcHV0ZWRba2V5XSA9IHRoaXMuX2NvbXB1dGVkW2tleV0uYmluZCh0aGlzKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9tZXRob2RzKSB7XG5cdFx0XHRsZXQgbmFtZSA9IHRoaXMuX21ldGhvZHNba2V5XTtcblx0XHRcdHRoaXNbbmFtZV0gPSB0aGlzW25hbWVdLmJpbmQodGhpcyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBDb25maWdcblx0ICovXG5cblx0Ly8gQmFzaWMucHJvdG90eXBlLnNldE1ldGhvZHMgPSBmdW5jdGlvbihtZXRob2RzID0ge30pXG5cdC8vIHtcblx0Ly8gXHR0aGlzLl9tZXRob2RzID0gbWV0aG9kcztcblx0Ly8gfVxuXG5cdC8qKlxuXHQgKiBIaWVyYXJjaHlcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnNldENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGRyZW4gPSBbXSlcblx0e1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5hZGRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkKVxuXHR7XG5cdFx0dGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5zZXRQYXJlbnQgPSBmdW5jdGlvbihwYXJlbnQgPSBudWxsKVxuXHR7XG5cdFx0dGhpcy5fcGFyZW50ID0gcGFyZW50O1xuXHR9XG5cdC8qKlxuXHQgKiBQcm9wc1xuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUucHJvcHMgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5pbml0UHJvcHMgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9wcm9wcylcblx0XHR7XG5cdFx0XHRsZXQgcHJvcCA9IHRoaXMuX3Byb3BzW2tleV07XG5cdFx0XHRsZXQgdmFsdWUgPSBudWxsO1xuXHRcdFx0bGV0IHR5cGUgPSBudWxsO1xuXG5cdFx0XHRpZih0eXBlb2YgcHJvcCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHQvLyB0eXBlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWx1ZSA9IHByb3AuZGVmYXVsdCgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9kYXRhW2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5wYXNzU2xvdHMgPSBmdW5jdGlvbihuYW1lLCBzbG90cylcblx0e1xuXHRcdHRoaXMuX3Nsb3RzW25hbWVdID0gc2xvdHM7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc09wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKVxuXHR7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5wYXNzUHJvcHMgPSBmdW5jdGlvbihwcm9wcylcblx0e1xuXHRcdC8vIGlmKHR5cGVvZiB0aGlzLl9wYXNzZWRQcm9wc1tjb21wb25lbnQuaGlkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHQvLyBcdHRoaXMuX3Bhc3NlZFByb3BzW2NvbXBvbmVudC5oaWRdID0ge307XG5cdFx0Ly8gfVxuXG5cdFx0Zm9yKGxldCBrZXkgaW4gcHJvcHMpXG5cdFx0e1xuXHRcdFx0aWYocHJvcHNba2V5XS5fb2JzZXJ2YWJsZSkge1xuXHRcdFx0XHR0aGlzLl9pc1N0YXRlZnVsID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fZGF0YVtrZXldID0gcHJvcHNba2V5XTtcblx0XHRcdC8vIGlmKHR5cGVvZiB0aGlzLl9kYXRhW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHQvLyBcdHRocm93IG5ldyBFcnJvcihgW1NpbnVvdXNdIENvbXBvbmVudCAkeyB0aGlzLm5hbWUgfSBhbHJlYWR5IGhhcyAkeyBrZXkgfSBwcm9wZXJ0eWApXG5cdFx0XHQvLyB9IGVsc2Uge1xuXHRcdFx0Ly8gXHR0aGlzLl9kYXRhW2tleV0gPSBwcm9wc1trZXldO1xuXHRcdFx0Ly8gfVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBMb2NhbCBjb21wb25lbnQgZGF0YVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmNvbXB1dGVkID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXRlZnVsIGRhdGFcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnN0YXRlID0gZnVuY3Rpb24obylcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiAxLiBDcmVhdGUgY2hpbGQgY29tcG9uZW50cyAoZGlmZmVyZW50IGNvbnRleHQpXG5cdCAqIDIuIFBhc3MgcHJvcHNcblx0ICogMy4gUmVuZGVyXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUuY2hpbGRDb21wb25lbnRzID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiAgTGlmZSBjeWNsZSBob29rc1xuXHQgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLmhvb2sgPSBmdW5jdGlvbih0eXBlID0gJ21vdW50ZWQnKVxuXHR7XG5cdFx0aWYodGhpc1t0eXBlXSkge1xuXHRcdFx0dGhpc1t0eXBlXS5jYWxsKHRoaXMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMuX2NoaWxkcmVuW2ldID09PSBfKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZighdGhpcy5fY2hpbGRyZW5baV0uX2Z1bmN0aW9uYWwpIHtcblx0XHRcdFx0dGhpcy5fY2hpbGRyZW5baV0uaG9vayh0eXBlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5tb3VudGVkID0gZnVuY3Rpb24oKSB7fVxuXG5cdEJhc2ljLnByb3RvdHlwZS51bm1vdW50ZWQgPSBmdW5jdGlvbigpIHt9XG5cblx0LyoqXG5cdCAqIFByaXZhdGUgQVBJIGZvciByZW5kZXIgYW5kIGh5ZHJhdGVcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGN0eCA9IG51bGwpXG5cdHtcblx0XHRpZihjdHggPT09IG51bGwpIHtcblx0XHRcdGN0eCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aC5iaW5kKGN0eCk7XG5cblx0XHRyZXR1cm4gY3R4Ll9fcmVuZGVyKGguYmluZChjdHgpLCB7XG5cdFx0XHRjdHgsXG5cdFx0XHRzdGF0ZW1lbnQsXG5cdFx0XHRsb29wLFxuXHRcdFx0c2xvdCxcblx0XHRcdGQ6IGR5bmFtaWMsXG5cdFx0XHRjOiBjb21wdXRlZCxcblx0XHR9KTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmh5ZHJhdGUgPSBmdW5jdGlvbihjdHggPSBudWxsLCBjb21waWxlciA9IG51bGwpXG5cdHtcblx0XHRpZihjdHggPT09IG51bGwpIHtcblx0XHRcdGN0eCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aC5iaW5kKGN0eCk7XG5cblx0XHRyZXR1cm4gY3R4Ll9faHlkcmF0ZShoKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblxuXHQvLyBCYXNpYy5wcm90b3R5cGUudGVtcGxhdGVCdWlsZGVyID0gZnVuY3Rpb24oaCwgb3B0cylcblx0Ly8ge1xuXHQvLyBcdHJldHVybiB0aGlzW2BfXyR7IG9wdHMucmVuZGVyIH1gXShoLCBvcHRzKTtcblx0Ly8gfVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmNvbXBvbmVudCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLmdldFVJRCA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0cmV0dXJuIGBoeWRyLSR7IFNpbnVvdXMuY3JlYXRlSElEKGluZGV4KSB9YDtcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKFwibmFtZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTsgfSk7XG5cblx0cmV0dXJuIEJhc2ljO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNpYztcbiIsImltcG9ydCB7IGgsIGhzLCBhcGkgfSBmcm9tICdzaW51b3VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYyhoLCB0YWcsIG9wdHMsIGNoaWxkcmVuKVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBlbCA9IHRhZygpO1xuXHRcdHJldHVybiBoKGVsLCBvcHRzLCBjaGlsZHJlbik7XG5cdH07XG5cbn0iLCJpbXBvcnQgeyBoIGFzIGhzIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcbmltcG9ydCB7IG9wdGlvbnMsICB9IGZyb20gJy4vJztcbmltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuXG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbntcblx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcblx0aWYoY2hpbGQuc2V0UGFyZW50KSB7XG5cdFx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaChlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxue1xuXHRlbCA9IGVsLnRvTG93ZXJDYXNlKCk7XG5cdC8vIGVsID0gY29tcHV0ZWQoKCkgPT4gKHR5cGVvZiBlbCA9PT0gJ2Z1bmN0aW9uJyA/IGVsIDogZWwpKTtcblxuXHQvLyBjb25zb2xlLmxvZygnWyBGRiBdJywgZWwsIHRoaXMpXG5cdGxldCBkeW5hbWljQXR0cnMgPSBmYWxzZTtcblxuXHRsZXQgcmVhZHlPcHRpb25zID0gb3B0aW9ucyhvcHRzKTtcblx0Ly8gSWYgSFRNTCB0YWcgcmVuZGVyXG5cdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcblx0XHRyZXR1cm4gaHMoZWwsIHJlYWR5T3B0aW9ucywgY2hpbGRyZW4pO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0Q29tcG9uZW50KGVsKTtcblxuXHRyZWdpc3RlckNoaWxkcmVuKHRoaXMsIGNvbXBvbmVudCk7XG5cblx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudC5yZW5kZXIoe1xuXHRcdFx0b3B0aW9uczogb3B0cyxcblx0XHRcdF9zbG90czogcmVhZHlPcHRpb25zLiRzbG90cyxcblx0XHR9KTtcblx0fVxuXG5cdGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG5cdH1cblxuXHRmb3IobGV0IGtleSBpbiBvcHRzLiRzbG90cykge1xuXHRcdGNvbXBvbmVudC5wYXNzU2xvdHMoa2V5LCBvcHRzLiRzbG90c1trZXldKTtcdFxuXHR9XG5cblx0Y29tcG9uZW50LnBhc3NPcHRpb25zKG9wdHMpO1xuXG5cdHJldHVybiBjb21wb25lbnQucmVuZGVyKCk7XG59IiwiaW1wb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJ0BzaW51b3VzL2xhenknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbXBvbmVudCwgbGF5b3V0LCB0aW1lQmVuY2htYXJrID0gKCkgPT4ge30sIGNhbGxiYWNrID0gbnVsbCkge1xuXG4gICAgbGF5b3V0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgbG9hZENvbXBvbmVudChjb21wb25lbnQsIChpbnN0YW5jZSkgPT4ge1xuXG4gICAgXHR0aW1lQmVuY2htYXJrKCdSZW5kZXInKTtcblxuXHRcdGxheW91dC5hcHBlbmQoaW5zdGFuY2UucmVuZGVyKCkpO1xuXHRcdGluc3RhbmNlLmhvb2soJ21vdW50ZWQnKTtcblxuXHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjayhpbnN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0dGltZUJlbmNobWFyaygnUmVuZGVyJyk7XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH0pO1xufSIsIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvb3AoY29uZGl0aW9uLCBmbilcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cblx0XHRsZXQgbG9vcF9jb25kaXRpb24gPSB0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nID8gY29uZGl0aW9uKCkgOiBjb25kaXRpb247XG5cblx0XHRmb3IobGV0IGtleSBpbiBsb29wX2NvbmRpdGlvbilcblx0XHR7XG5cdFx0XHRsZXQgaXRlbSA9IGxvb3BfY29uZGl0aW9uW2tleV07XG5cdFx0XHRyZXN1bHQucHVzaChmbihpdGVtLCBrZXkpKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXHQvLyBkLl9ub2RlID0gdHJ1ZTtcblxuXHRyZXR1cm4gZDtcbn0iLCJpbXBvcnQgeyBvYnNlcnZhYmxlIGFzIHNpbnVvdXNPYnNlcnZhYmxlLCBjb21wdXRlZCBhcyBzaW51b3VzQ29tcHV0ZWQgfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU9ic2VlcnZhYmxlKGZuKVxue1xuXHRmbi5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cdHJldHVybiBmbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkKHYsIGJpbmRpbmcgPSBmYWxzZSkge1xuXG5cdGxldCBkO1xuXHRcblx0aWYoYmluZGluZykge1xuXHRcdGQgPSBzaW51b3VzQ29tcHV0ZWQodi5iaW5kKHRoaXMpKTtcblx0fSBlbHNlIHtcblx0XHRkID0gc2ludW91c0NvbXB1dGVkKHYpO1xuXHR9XG5cblx0bWFrZU9ic2VlcnZhYmxlKGQpO1xuXG5cdHJldHVybiBkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2YWJsZSh2LCBiaW5kaW5nID0gZmFsc2UpXG57XG5cdC8vIGxldCBvYnMgPSBudWxsO1xuXHQvLyBsZXQgaW5kZXggPSAwO1xuXG5cdC8vIGxldCBkYXRhID0gKHYpID0+IHtcblx0Ly8gXHRjb25zb2xlLmxvZyhzZWVkLCB2LCBpbmRleClcblx0Ly8gXHRpZih0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0Ly8gXHRcdGlmKGluZGV4ID09PSAwKSB7XG5cdC8vIFx0XHRcdGluZGV4Kys7XG5cdC8vIFx0XHRcdHJldHVybiBzZWVkO1xuXHQvLyBcdFx0fVxuXG5cdC8vIFx0XHRyZXR1cm4gb2JzKCk7XG5cdC8vIFx0fVxuXG5cdC8vIFx0Ly8gaWYoaW5kZXggPT09IDApIHtcblx0Ly8gXHQvLyBcdGluZGV4Kys7XG5cdC8vIFx0Ly8gXHRyZXR1cm4gdjtcblx0Ly8gXHQvLyB9XG5cblx0Ly8gXHQvLyBpZihvYnMgPT09IG51bGwpIHtcblx0Ly8gXHQvLyBcdG9icyA9IHNpbnVvdXNPYnNlcnZhYmxlKHYpO1xuXHQvLyBcdC8vIH1cblx0Ly8gfVxuXG5cdGxldCBkID0gc2ludW91c09ic2VydmFibGUodik7XG5cblx0XG5cdG1ha2VPYnNlZXJ2YWJsZShkKTtcblxuXHRyZXR1cm4gZDtcbn0iLCJmdW5jdGlvbiBhcmdUb1N0cmluZygpXG57XG5cdGxldCBzdHIgPSAnJztcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCB2YWx1ZSA9IGFyZ3VtZW50c1tpXTtcblx0XHRcblx0XHRpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHZhbHVlID0gdmFsdWUoKTtcblx0XHR9XG5cblx0XHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IobGV0IGtleSBpbiB2YWx1ZSkge1xuXHRcdFx0XHRpZih2YWx1ZVtrZXldKSB7XG5cdFx0XHRcdFx0c3RyICs9IGAgJHsga2V5IH1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0ciArPSBgICR7dmFsdWV9YDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFyZ1RvT2JqZWN0KClcbntcblx0bGV0IHN0ciA9ICcnO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaV1ba2V5XTtcblx0XHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXNba2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogUGFyc2UgY2xhc3Nlc1xuICogQHBhcmFtICB7W3R5cGVdfSBzdGF0aWMgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1t0eXBlXX0gZHluYW1pYyBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiBjbGFzc2VzKHN0ciA9IG51bGwsIGR5bmFtaWMgPSBudWxsKVxue1xuXHRpZihzdHIgPT09IG51bGwgJiYgZHluYW1pYyA9PT0gbnVsbCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGlmKHN0ciA9PT0gbnVsbCkge1xuXHRcdHN0ciA9ICcnO1xuXHR9XG5cdFxuXHRpZih0eXBlb2YgZHluYW1pYyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGR5bmFtaWMgPSBkeW5hbWljKCk7XG5cdH1cblxuXHRpZighQXJyYXkuaXNBcnJheShkeW5hbWljKSkge1xuXHRcdGR5bmFtaWMgPSBbZHluYW1pY107XG5cdH1cblxuXHRzdHIgKz0gYXJnVG9TdHJpbmcuYXBwbHkodGhpcywgZHluYW1pYyk7XG5cdFxuXHQvLyBjb25zb2xlLmxvZyhzdHIpO1xuXHRcblx0cmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBTdHlsZXNcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqICAgICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IGR5bmFtaWMgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZnVuY3Rpb24gbWFrZVN0eWxlUHJvcChuYW1lKVxue1xuXHRyZXR1cm4gbmFtZVxuXHRcdC5yZXBsYWNlKC9cXC4/KFtBLVpdKykvZywgZnVuY3Rpb24gKHgseSkge1xuXHRcdFx0cmV0dXJuIFwiLVwiICsgeS50b0xvd2VyQ2FzZSgpXG5cdFx0fSlcblx0XHQucmVwbGFjZSgvXi0vLCBcIlwiKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVzKG9iaiA9IHt9LCBkeW5hbWljID0gbnVsbClcbntcblx0bGV0IHJlYWR5U3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKTtcblxuXHRpZih0eXBlb2YgZHluYW1pYyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGR5bmFtaWMgPSBkeW5hbWljKCk7XG5cdH1cblxuXHRpZighQXJyYXkuaXNBcnJheShkeW5hbWljKSkge1xuXHRcdGR5bmFtaWMgPSBbZHluYW1pY107XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGR5bmFtaWMubGVuZ3RoOyBpKyspIHtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBkeW5hbWljW2ldKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSBkeW5hbWljW2ldW2tleV07XG5cdFx0XHRcblx0XHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlKCk7XG5cdFx0XHR9XG5cdFx0XHRyZWFkeVN0eWxlc1ttYWtlU3R5bGVQcm9wKGtleSldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlYWR5U3R5bGVzO1xufVxuXG5sZXQgY2xvbmVPcHRpb25zID0gWydfcycsICckc2xvdHMnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDc3MocmVhZHlPcHRpb25zLCBvcHRpb25zKVxue1xuXHRpZihvcHRpb25zLnN0YXRpY0NsYXNzIHx8IG9wdGlvbnMuY2xhc3MpIHtcblx0XHRyZWFkeU9wdGlvbnMuY2xhc3MgPSBjbGFzc2VzLmJpbmQodGhpcywgb3B0aW9ucy5zdGF0aWNDbGFzcyB8fCBudWxsLCBvcHRpb25zLmNsYXNzIHx8IG51bGwpO1xuXHR9XG5cblx0aWYob3B0aW9ucy5zdGF0aWNTdHlsZSB8fCBvcHRpb25zLnN0eWxlKSB7XG5cdFx0cmVhZHlPcHRpb25zLnN0eWxlID0gc3R5bGVzLmJpbmQodGhpcywgb3B0aW9ucy5zdGF0aWNTdHlsZSB8fCB7fSwgb3B0aW9ucy5zdHlsZSB8fCBudWxsKTtcblx0fVxuXG5cdHJldHVybiByZWFkeU9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlT3B0aW9uKG9wdGlvbiwgc2hvdWxkQ2xvbmUgPSB0cnVlKVxue1xuXHRsZXQgcmVhZHlPcHRpb24gPSB7fTtcblxuXHRpZihvcHRpb24ub24pIHtcblx0XHRmb3IobGV0IGtleSBpbiBvcHRpb24ub24pIHtcblx0XHRcdHJlYWR5T3B0aW9uW2BvbiR7a2V5fWBdID0gb3B0aW9uLm9uW2tleV07XG5cdFx0fVxuXHR9XG5cblx0aWYob3B0aW9uLmtleSkge1xuXHRcdHJlYWR5T3B0aW9uWydkYXRhLWtleSddID0gb3B0aW9uLmtleTtcblx0fVxuXG5cdG1ha2VDc3MocmVhZHlPcHRpb24sIG9wdGlvbik7XG5cblx0aWYoc2hvdWxkQ2xvbmUpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNsb25lT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IG5hbWUgPSBjbG9uZU9wdGlvbnNbaV07XG5cdFx0XHRpZihvcHRpb25bbmFtZV0pIHtcblx0XHRcdFx0cmVhZHlPcHRpb25bbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZWFkeU9wdGlvbjtcbn1cblxuY29uc3QgQXNzaWduT2JqZWN0T3B0aW9ucyA9IFsnc3RhdGljU3R5bGUnLCAnYXR0cnMnLCAnb24nXTtcbmNvbnN0IEFzc2lnblZhbHVlT3B0aW9ucyA9IFsnc3R5bGUnLCAnY2xhc3MnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhvcHRpb25zKVxue1xuXHRsZXQgcmVhZHlPcHRpb25zID0ge307XG5cdGxldCBzaG91bGRCZU1lcmdlZCA9IGZhbHNlO1xuXG5cdGlmKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKG9wdGlvbnNbaV0gPT09IG51bGwpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGkgPiAwKSB7XG5cdFx0XHRcdHNob3VsZEJlTWVyZ2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0aWYoIXNob3VsZEJlTWVyZ2VkKSB7XG5cdFx0XHRyZXR1cm4gb3B0aW9uc1sxXTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG9wdGlvbnM7XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgb3B0aW9uID0gb3B0aW9uc1tpXVxuXHRcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IEFzc2lnbk9iamVjdE9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGxldCBuYW1lID0gQXNzaWduT2JqZWN0T3B0aW9uc1tqXTtcblx0XHRcdFxuXHRcdFx0aWYoIW9wdGlvbltuYW1lXSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIXJlYWR5T3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV0gPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGxldCBwcm9wIGluIG9wdGlvbltuYW1lXSkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV1bcHJvcF0gPSBvcHRpb25bbmFtZV1bcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBBc3NpZ25WYWx1ZU9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGxldCBuYW1lID0gQXNzaWduVmFsdWVPcHRpb25zW2pdO1xuXG5cdFx0XHRpZighb3B0aW9uW25hbWVdKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighcmVhZHlPcHRpb25zW25hbWVdKSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9uc1tuYW1lXSA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV0gPSByZWFkeU9wdGlvbnNbbmFtZV0uY29uY2F0KG9wdGlvbltuYW1lXSk7XG5cdFx0fVxuXG5cdFx0aWYob3B0aW9uLl9zKSB7XG5cdFx0XHRyZWFkeU9wdGlvbnMuX3MgPSBvcHRpb24uX3M7XG5cdFx0fVxuXG5cdFx0aWYob3B0aW9uLmtleSkge1xuXHRcdFx0cmVhZHlPcHRpb25zLmtleSA9IG9wdGlvbi5rZXk7XG5cdFx0fVxuXG5cdFx0aWYob3B0aW9uLnN0YXRpY0NsYXNzKSB7XG5cdFx0XHRpZighcmVhZHlPcHRpb25zLnN0YXRpY0NsYXNzKSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9ucy5zdGF0aWNDbGFzcyA9IG9wdGlvbi5zdGF0aWNDbGFzcztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9ucy5zdGF0aWNDbGFzcyArPSAnICcgKyBvcHRpb24uc3RhdGljQ2xhc3M7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlYWR5T3B0aW9ucztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3B0aW9ucyhvcHRpb25zLCBzaG91bGRDbG9uZSA9IHRydWUpXG57XG5cdGxldCByZWFkeU9wdGlvbnMgPSBtZXJnZU9wdGlvbnMob3B0aW9ucyk7XG5cblx0cmV0dXJuIG1ha2VPcHRpb24ocmVhZHlPcHRpb25zLCBzaG91bGRDbG9uZSk7XG59Iiwid2luZG93Ll9TaW51b3VzQ29tcG9uZW50cyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlcihuYW1lLCBjb21wb25lbnQgPSBudWxsKVxue1xuXHRpZihjb21wb25lbnQgPT0gbnVsbCkge1xuXHRcdGNvbXBvbmVudCA9IG5hbWU7XG5cdFx0bmFtZSA9IG5hbWUubmFtZTtcblx0fVxuXG5cdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0d2luZG93Ll9TaW51b3VzQ29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbG90KClcbntcblx0XG59IiwiaW1wb3J0IHsgaCB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlbWVudCgpXG57XG5cdGxldCBkID0gKCkgPT4ge1xuXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCAlIDMgIT09IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU3RhdGVtZW50IHNob3VsZCBiZSBvZGQgbnVtYmVyJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xuXG5cdFx0Ly8gdmFsdWVcblx0XHRsZXQgc3RhdGVtZW50U2l6ZSA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRsZXQgc2l6ZSA9IGFyZ3VtZW50c1tpICsgMV07XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaSArIDJdO1xuXHRcdFx0bGV0IG5vZGUgPSBudWxsO1xuXG5cdFx0XHRzdGF0ZW1lbnRTaXplICs9IHNpemU7XG5cblx0XHRcdGlmKHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aWYoY29uZGl0aW9uKCkpIHtcblx0XHRcdFx0XHRub2RlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKGNvbmRpdGlvbikge1xuXHRcdFx0XHRcdG5vZGUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb25zb2xlLndhcm4oaSwgc2l6ZSwgbm9kZSk7XG5cdFx0XHQvLyBQYXNzIGZhaWxlZCBzdGV0ZW1lbnQgY29uZGl0aW9uXG5cdFx0XHQvLyBOb3JtaWxpemUgaW5kZXggdGhhdCB3aWxsIGJlIHVzZWQgaW4gcmVwbGFjaW5nIHBsYWNlaG9sZGVyIChiZWxvdylcblx0XHRcdGlmKG5vZGUgPT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFub2RlLl9vYnNlcnZhYmxlKSB7XG5cdFx0XHRcdG5vZGUgPSBub2RlKGgpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gcmVwbGFjZSBwbGFjZWhvbGRlciB3aXRoIG5vZGVcblx0XHRcdC8vIEFuZCBjb3JyZWN0IGluZGV4XG5cdFx0XHRpZihzaXplID4gMSkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdC8vIGlmKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGVbal0pO1xuXHRcdFx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gXHRyZXN1bHQucHVzaChqID09IDAgPyBub2RlIDogLTEpO1xuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcblx0XHRyZXR1cm4ge1xuXHRcdFx0bm9kZXM6IHJlc3VsdCxcblx0XHRcdHNpemU6IHN0YXRlbWVudFNpemUsXG5cdFx0fTtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXG5cdHJldHVybiBkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbHVlKHZhbHVlKVxue1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gdmFsdWUoKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn0iLCJpbXBvcnQgeyBoLCBocywgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnQHNpbnVvdXMvY29tcGlsZXIvc3JjL2VtcHR5JztcbmltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuaW1wb3J0IHsgb3B0aW9ucyBhcyBwYXJzZU9wdGlvbnMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuaW1wb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJ0BzaW51b3VzL2xhenknO1xuLy8gaW1wb3J0IHN1YnNjcmliZSBmcm9tICcuL3N1YnNjcmliZSc7XG5pbXBvcnQgaHlkcmF0ZVByb3BzIGZyb20gJy4vcHJvcGVydHknO1xuXG5sZXQgT0JTRVJWRVI7XG5sZXQgU1RPUkFHRSA9IHt9O1xuXG5sZXQgU1VCU0NSSUJFUlMgPSBbXTtcblxuZnVuY3Rpb24gYWRkU3Vic2NyaWJlcihmbilcbntcblx0Y29uc29sZS5sb2coZm4sIFNVQlNDUklCRVJTKVxuXHRTVUJTQ1JJQkVSUy5wdXNoKGZuKTtcbn1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZVByb3BzKGVsLCBvcHRzKVxuLy8ge1xuXHQvLyBpZighb3B0cy5fcykge1xuXHQvLyBcdHJldHVybjtcblx0Ly8gfVxuXG4vLyBcdGFwaS5wcm9wZXJ0eShlbCwgb3B0cywgbnVsbCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVUYWcocGFyZW50LCBjaGlsZHJlbiwgY3VycmVudEluZGV4LCB2YWx1ZSlcbi8vIHtcbi8vIFx0bGV0IGVsID0gY2hpbGRyZW5bY3VycmVudEluZGV4XTtcblx0XG4vLyBcdGxldCBub2RlcyA9IHZhbHVlKCk7XG5cbi8vIFx0aWYoQXJyYXkuaXNBcnJheShub2RlcykpIHtcblxuLy8gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbi8vIFx0XHRcdGxldCBjaGlsZCA9IG5vZGVzW2ldO1xuLy8gXHRcdFx0aWYodHlwZW9mIGNoaWxkID09PSAnZnVuY3Rpb24nKSB7XG4vLyBcdFx0XHRcdGNoaWxkID0gY2hpbGQoKTtcbi8vIFx0XHRcdH1cbi8vIFx0XHRcdC8vIGNvbnNvbGUubG9nKHBhcmVudCwgIGNoaWxkLnNpemUpXG4vLyBcdFx0XHQvLyBhcGkuaW5zZXJ0KHBhcmVudCwgY2hpbGQsIGNoaWxkcmVuW2N1cnJlbnRJbmRleCArIGldKTtcbi8vIFx0XHRcdC8vIHBhcmVudC5yZXBsYWNlQ2hpbGQoY2hpbGQsIGNoaWxkcmVuW2N1cnJlbnRJbmRleCArIGldKVxuLy8gXHRcdFx0Ly8gY2hpbGRyZW5bY3VycmVudEluZGV4ICsgaV0ucmVwbGFjZVdpdGgoY2hpbGQpO1xuLy8gXHRcdH1cbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRhcGkuaW5zZXJ0KGVsLCBub2RlcywgbnVsbCk7XG4vLyBcdH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZUNoaWxkcmVuKG5vZGUsIGNoaWxkcmVuKVxuLy8ge1xuLy8gXHRsZXQgYmluZENoaWxkcmVuID0gW107XG5cbi8vIFx0aWYobm9kZSAhPT0gbnVsbCkge1xuLy8gXHRcdGJpbmRDaGlsZHJlbiA9IGZpbHRlckNoaWxkTm9kZXMobm9kZSk7XG4vLyBcdH1cblxuLy8gXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4vLyBcdFx0aWYoY2hpbGRyZW5baV0gPT09IF8pIHtcbi8vIFx0XHRcdGNvbnRpbnVlO1xuLy8gXHRcdH1cbi8vIFx0XHQvLyBjb25zb2xlLmVycm9yKGJpbmRDaGlsZHJlbltpXSwgY2hpbGRyZW5baV0pO1xuLy8gXHRcdGh5ZHJhdGVUYWcobm9kZSwgYmluZENoaWxkcmVuLCBpLCBjaGlsZHJlbltpXSk7XG4vLyBcdH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0U2xvdE5vZGUoZWwsIHBhdGgpXG4vLyB7XG4vLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuLy8gXHRcdGVsID0gZWwuY2hpbGROb2Rlc1twYXRoW2ldXTtcbi8vIFx0fVxuXG4vLyBcdHJldHVybiBlbDtcbi8vIH1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZVNsb3RzKGNvbXBvbmVudCwgZWwsIG9wdHMgPSB7fSwgc2xvdHMpXG4vLyB7XG4vLyBcdGlmKCFvcHRzWydpZCddKSB7XG4vLyBcdFx0cmV0dXJuO1xuLy8gXHR9XG5cbi8vIFx0Ly8gaWYob3B0c1snaWQnXSA9PT0gJ2h5ZHItMTMnKSB7XG4vLyBcdC8vIFx0b3B0c1snaWQnXSA9ICdoeWRyLTYnO1xuLy8gXHQvLyB9XG5cbi8vIFx0Ly8gaWYob3B0c1snaWQnXSA9PT0gJ2h5ZHItMzAnKSB7XG4vLyBcdC8vIFx0b3B0c1snaWQnXSA9ICdoeWRyLTIxJztcbi8vIFx0Ly8gfVxuXG4vLyBcdGxldCBiaW5kTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAkeyBvcHRzWydpZCddIH1gKTtcblxuLy8gXHRsZXQgc2xvdE5vZGVzID0ge31cblxuLy8gXHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuLy8gXHRcdGlmKGNvbXBvbmVudC5fc2xvdHNQYXRoW2tleV0pIHtcbi8vIFx0XHRcdGxldCBub2RlID0gZ2V0U2xvdE5vZGUoYmluZE5vZGUsIGNvbXBvbmVudC5fc2xvdHNQYXRoW2tleV0pXG4vLyBcdFx0XHRzbG90Tm9kZXNba2V5XSA9IG5vZGU7XG4vLyBcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gJHtrZXl9IHNsb3QgbmFtZXNwYWNlIGRlZmluZWRgKTtcbi8vIFx0XHR9XG4vLyBcdH1cblxuLy8gXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcbi8vIFx0XHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuLy8gXHRcdFx0bGV0IG5vZGUgPSBzbG90Tm9kZXNba2V5XTtcbi8vIFx0XHRcdGxldCBjaGlsZHJlblNsb3RzID0gc2xvdHNba2V5XTtcblx0XHRcdFxuLy8gXHRcdFx0aWYobm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuLy8gXHRcdFx0XHRub2RlID0gW25vZGVdO1xuLy8gXHRcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdFx0bm9kZSA9IG5vZGUuY2hpbGROb2Rlcztcbi8vIFx0XHRcdH1cblxuLy8gXHRcdFx0aWYoY2hpbGRyZW5TbG90cy5sZW5ndGggPiBub2RlLmxlbmd0aCkge1xuLy8gXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Nsb3QgaHlkcmF0aW9uIGxlbmd0aCBtaXNtYXRjaCcpO1xuLy8gXHRcdFx0fVxuXG4vLyBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuU2xvdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XG4vLyBcdFx0XHRcdGFwaS5pbnNlcnQobm9kZVtpXSwgY2hpbGRyZW5TbG90c1tpXSgpLCBudWxsKTtcbi8vIFx0XHRcdH1cbi8vIFx0XHR9XG4vLyBcdH0pO1xuXHRcbi8vIH1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZShlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxuLy8ge1xuLy8gXHRsZXQgYmluZE5vZGU7XG4vLyBcdGNvbnNvbGUubG9nKHRoaXMsIGVsLCBvcHRzLCBjaGlsZHJlbilcblxuLy8gXHQvLyBpZih0aGlzLm5vZGUpIHtcbi8vIFx0Ly8gXHRiaW5kTm9kZSA9IHRoaXMubm9kZTtcbi8vIFx0Ly8gfVxuXG4vLyBcdGlmKCFvcHRzWydpZCddKSB7XG4vLyBcdFx0cmV0dXJuO1xuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdGJpbmROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7IG9wdHNbJ2lkJ10gfWApO1xuLy8gXHR9XG5cbi8vIFx0Ly8gY29uc29sZS5sb2codGhpcyk7XG4vLyBcdC8vIHRoaXMuY3R4Ll9lbF9pbmRleCsrO1xuXG4vLyBcdGlmKGJpbmROb2RlID09PSBudWxsKSB7XG4vLyBcdFx0cmV0dXJuO1xuLy8gXHR9XG5cdFxuXHQvLyBhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0Ly8gXHRoeWRyYXRlUHJvcHMoYmluZE5vZGUsIG9wdHMpO1xuXHQvLyBcdGh5ZHJhdGVDaGlsZHJlbihiaW5kTm9kZSwgY2hpbGRyZW4pO1xuXHQvLyB9KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gcmVnaXN0ZXJDaGlsZHJlbihwYXJlbnQsIGNoaWxkKVxuLy8ge1xuLy8gXHRwYXJlbnQuYWRkQ2hpbGRyZW4oY2hpbGQpO1xuLy8gXHRpZihjaGlsZC5zZXRQYXJlbnQpIHtcbi8vIFx0XHRjaGlsZC5zZXRQYXJlbnQocGFyZW50KTtcbi8vIFx0fVxuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gY29tcGlsZXIoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbi8vIHtcbi8vIFx0b3B0aW9ucyh0aGlzLCBvcHRzKTtcblx0XG4vLyBcdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcbi8vIFx0XHRoeWRyYXRlLmNhbGwodGhpcywgZWwsIG9wdHMsIGNoaWxkcmVuKTtcbi8vIFx0XHRyZXR1cm4gXztcbi8vIFx0fVxuXHRcdFxuLy8gXHRsZXQgY29tcG9uZW50ID0gU2ludW91cy5nZXRIeWRyYXRlQ29tcG9uZW50KGVsLCBvcHRzKTtcblxuLy8gXHQvLyBjb25zb2xlLmxvZyhjb21wb25lbnQsIGVsLCBvcHRzKVxuLy8gXHRpZihjb21wb25lbnQgPT09IG51bGwpIHtcbi8vIFx0XHRyZXR1cm4gXztcbi8vIFx0fVxuXG4vLyBcdHJlZ2lzdGVyQ2hpbGRyZW4odGhpcy5jdHgsIGNvbXBvbmVudCk7XG5cbi8vIFx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG4vLyBcdFx0Ly8gY29uc29sZS53YXJuKCdzdGFydCBoeWRyYXRpb24nKTtcbi8vIFx0XHRyZXR1cm4gY29tcG9uZW50Lmh5ZHJhdGUoe1xuLy8gXHRcdFx0Z2V0VUlEKCkge1xuLy8gXHRcdFx0XHRyZXR1cm4gLTE7XG4vLyBcdFx0XHR9LFxuLy8gXHRcdFx0X3Nsb3RzOiBvcHRzLiRzbG90cyxcbi8vIFx0XHR9LCBjb21waWxlcik7XG4vLyBcdH1cblxuLy8gXHRpZih0eXBlb2Ygb3B0cy5wcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbi8vIFx0XHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuLy8gXHR9XG5cbi8vIFx0aWYob3B0cy4kc2xvdHMpIHtcbi8vIFx0XHRoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBlbCwgb3B0cywgb3B0cy4kc2xvdHMpO1xuLy8gXHR9XG5cbi8vIFx0cmV0dXJuIGluaXRDb21wb25lbnQoY29tcG9uZW50KTtcbi8vIH1cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlUHJvcHMoZWwsIG9wdGlvbnMpXG4vLyB7XG4vLyBcdGlmKG9wdGlvbnMuX3MpIHtcbi8vIFx0XHQvLyBjb25zb2xlLmxvZyhlbCwgJ1ByZXBhcmUgb3B0aW9ucycsIG9wdGlvbnMpO1xuLy8gXHRcdC8vIG9wdGlvbnMgPSBwYXJzZU9wdGlvbnMob3B0aW9ucywgZmFsc2UpO1xuLy8gXHRcdC8vIGNvbnNvbGUubG9nKGVsLCAnUHJlcGFyZSBvcHRpb25zIDInLCBvcHRpb25zKTtcbi8vIFx0XHRwcm9wZXJ0eShlbCwgb3B0aW9ucyk7XG5cbi8vIFx0XHQvLyBhcGkuc3Vic2NyaWJlKCgpID0+IHtcbi8vIFx0XHQvLyBcdC8vIGNvbnNvbGUubG9nKGVsLCAnQ2hhbmdlIG9wdGlvbnMnKTtcbi8vIFx0XHQvLyBcdGFwaS5wcm9wZXJ0eShlbCwgb3B0aW9ucywgbnVsbCk7XG4vLyBcdFx0Ly8gfSk7XG4vLyBcdH1cbi8vIH1cblxuZnVuY3Rpb24gaHlkcmF0ZUgoY29udGV4dCwgZWwsIG9wdGlvbnMsIGNoaWxkcmVuKVxue1xuXHRoeWRyYXRlUHJvcHMoY29udGV4dCwgZWwsIG9wdGlvbnMpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRoeWRyYXRlKGNvbnRleHQsIGVsLmNoaWxkTm9kZXNbaV0sIGNoaWxkcmVuW2ldKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoeWRyYXRlTG9vcChjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRsZXQgY29uZGl0aW9uID0gYXJncy5jO1xuXHRsZXQgc3RhcnROb2RlID0gbm9kZTtcblxuXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRsZXQgbG9vcF9jb25kaXRpb24gPSB0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nID8gY29uZGl0aW9uKCkgOiBjb25kaXRpb247XG5cdFx0Ly8gY29uc29sZS5sb2cobG9vcF9jb25kaXRpb24pXG5cdFx0bGV0IGN1cnJlbnROb2RlID0gc3RhcnROb2RlO1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gbG9vcF9jb25kaXRpb24pXG5cdFx0e1xuXHRcdFx0bGV0IGl0ZW0gPSBsb29wX2NvbmRpdGlvbltrZXldO1xuXHRcdFx0bGV0IGl0ZW1LZXkgPSBhcmdzLmsoaXRlbSwga2V5KTtcblx0XHRcdGxldCBpdGVtQXJncztcblxuXHRcdFx0bGV0IHNob3VsZFJlbmRlciA9IHRydWU7XG5cdFx0XHRpZihjdXJyZW50Tm9kZSkge1xuXHRcdFx0XHRsZXQgbm9kZUtleSA9IGN1cnJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKTtcblx0XHRcdFx0aWYobm9kZUtleSA9PT0gaXRlbUtleSkge1xuXHRcdFx0XHRcdHNob3VsZFJlbmRlciA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKHNob3VsZFJlbmRlcikge1xuXHRcdFx0XHRpdGVtQXJncyA9IGFyZ3MucihpdGVtLCBrZXkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aXRlbUFyZ3MgPSBhcmdzLmgoaXRlbSwga2V5KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY29uc29sZS5sb2coY3VycmVudE5vZGUsIHNob3VsZFJlbmRlciwgYXJncyk7XG5cdFx0XHQvLyByZXR1cm47XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnW2h5ZHJhdGUgbG9vcF0nLCBjdXJyZW50Tm9kZSwgaXRlbUFyZ3MpXG5cdFx0XHRoeWRyYXRlKGNvbnRleHQsIGN1cnJlbnROb2RlLCBpdGVtQXJncyk7XG5cblx0XHRcdGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdH1cblx0fSk7XG59XG5cbi8qKlxuICogTWF5YmUgbmVlZCBzYW1lIGh5ZHJhdGlvbiBhbGdvcml0aG0gYXMgd2l0aCBwcm9wc1xuICogU2tpcCBmaXJzdCB0aW1lIGh5ZHJhdGlvbiA/Pz9cbiAqL1xuZnVuY3Rpb24gaHlkcmF0ZVRleHQoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0aWYoYXJncy50ID09PSBfKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdFxuXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRhcGkuaW5zZXJ0KG5vZGUsIGFyZ3MudCgpLCBudWxsKTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gZ2V0U2xvdE5vZGUoZWwsIHRhZywgcGF0aClcbntcblx0bGV0IG5vZGUgPSBlbDtcblxuXHRmb3IgKHZhciBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcblx0XHRub2RlID0gbm9kZS5jaGlsZE5vZGVzW3BhdGhbaV1dO1xuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlU2xvdHMoY29udGV4dCwgZWwsIG9wdHMgPSB7fSwgc2xvdHMpXG57XG5cdC8vIEh5ZHJhdGUgcHJvcHMgb2YgbWFpbiBOb2RlXG5cdC8vIGh5ZHJhdGVQcm9wcyhjb250ZXh0LCBlbCwgb3B0cyk7XG5cdFxuXHRsZXQgYmluZGVkTm9kZXMgPSB7fVxuXG5cdGxldCBzbG90RGF0YSA9IGNvbnRleHQuX3Nsb3RzRGF0YTtcblxuXHQvLyBGaW5kIHNsb3QgYmluZGluZyBub2Rlc1xuXHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuXHRcdGlmKHNsb3REYXRhW2tleV0pIHtcblx0XHRcdGxldCBub2RlID0gZ2V0U2xvdE5vZGUoZWwsIHNsb3REYXRhW2tleV0udGFnLCBzbG90RGF0YVtrZXldLnBhdGgpO1xuXHRcdFx0YmluZGVkTm9kZXNba2V5XSA9IG5vZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gJHtrZXl9IHNsb3QgbmFtZXNwYWNlIGRlZmluZWRgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBIeWRyYXRlIHNsb3RzIHBlciBiaW5kZWQgdGFnXG5cdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG5cdFx0bGV0IGRhdGEgPSBzbG90RGF0YVtrZXldO1xuXHRcdGxldCBub2RlID0gYmluZGVkTm9kZXNba2V5XTtcblx0XHRsZXQgY2hpbGRyZW5TbG90cyA9IHNsb3RzW2tleV07XG5cdFx0bGV0IHN0YXJ0Tm9kZUluZGV4ID0gZGF0YS5pbmRleDtcblxuXHRcdGlmKHR5cGVvZiBub2RlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y29uc29sZS53YXJuKGVsLCBvcHRzLCBzbG90RGF0YSwgZWxbMF0pO1xuXHRcdH1cblxuXHRcdGlmKGNoaWxkcmVuU2xvdHMubGVuZ3RoID4gbm9kZS5sZW5ndGgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU2xvdCBoeWRyYXRpb24gbGVuZ3RoIG1pc21hdGNoJyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0Tm9kZUluZGV4OyBpIDwgY2hpbGRyZW5TbG90cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Ly8gY29uc29sZS5sb2cobm9kZS5jaGlsZE5vZGVzW2ldLCBjaGlsZHJlblNsb3RzW2ldKVxuXHRcdFx0aHlkcmF0ZShjb250ZXh0LCBub2RlLmNoaWxkTm9kZXNbaV0sIGNoaWxkcmVuU2xvdHNbaV0pO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIENvbnRleHQgc2V0dXBcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJDaGlsZHJlbihwYXJlbnQsIGNoaWxkKVxue1xuXHRpZihjaGlsZC5fZnVuY3Rpb25hbCkge1xuXHRcdHBhcmVudC5hZGRDaGlsZHJlbihfKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwYXJlbnQuYWRkQ2hpbGRyZW4oY2hpbGQpO1xuXHRjaGlsZC5zZXRQYXJlbnQocGFyZW50KTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVRhZyhjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRsZXQgZWwgPSBhcmdzLnQsXG5cdFx0b3B0cyA9IGFyZ3Mubyxcblx0XHRjaGlsZHJlbiA9IGFyZ3MuYztcblxuXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG5cdFx0aHlkcmF0ZUgoY29udGV4dCwgbm9kZSwgb3B0cywgY2hpbGRyZW4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldEh5ZHJhdGVDb21wb25lbnQoZWwsIG9wdHMpO1xuXG5cdGlmKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBfO1xuXHR9XG5cblx0cmVnaXN0ZXJDaGlsZHJlbihjb250ZXh0LCBjb21wb25lbnQpO1xuXG5cdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuXHRcdGxldCBuZXdBcmdzID0gY29tcG9uZW50Lmh5ZHJhdGUoe1xuXHRcdFx0X3Nsb3RzOiBvcHRzLiRzbG90cyxcblx0XHR9KTtcblxuXHRcdGlmKG9wdHMuJHNsb3RzKSB7XG5cdFx0XHRoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBub2RlLCBvcHRzLCBvcHRzLiRzbG90cyk7XG5cdFx0fVxuXG5cdFx0Ly8gY29uc29sZS5sb2cob3B0cylcblx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUsIG5ld0FyZ3MpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gc2V0dXAgY29tcG9uZW50XG5cdC8vIGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuXHQvLyBcdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG5cdC8vIH1cblx0Ly8gY29uc29sZS5sb2coY29tcG9uZW50LCBvcHRzLiRzbG90cylcblx0aWYob3B0cy4kc2xvdHMpIHtcblx0XHRoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBub2RlLCBvcHRzLCBvcHRzLiRzbG90cyk7XG5cdH1cblxuXHRjb21wb25lbnQucGFzc09wdGlvbnMob3B0cyk7XG5cblx0cmV0dXJuIGh5ZHJhdGUoY29tcG9uZW50LCBub2RlLCBjb21wb25lbnQuaHlkcmF0ZShjb21wb25lbnQpKTtcbn1cblxuLyoqXG4gKiBNYWluIGh5ZHJhdGlvbiBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBoeWRyYXRlKGNvbnRleHQsIG5vZGUsIGFyZ3MgPSBudWxsKVxue1xuXHQvLyByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHtcblx0XHRoeWRyYXRlSWRsZShjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0Ly8gfSwge1xuXHQvLyBcdHRpbWVvdXQ6IDAsXG5cdC8vIFx0cmVhZDogdHJ1ZVxuXHQvLyB9KTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZUlkbGUoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0aWYoYXJncyA9PT0gbnVsbCB8fCBub2RlID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ2gnKSB7XG5cdFx0Ly8gYXJncy5vWydkYXRhLWh5ZHJhdGVkJ10gPSB0cnVlO1xuXHRcdC8vIGFyZ3Mub1snX3MnXSA9IHRydWU7XG5cdFx0aHlkcmF0ZVRhZyhjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXG5cdGlmKGFyZ3MuX3QgPT09ICd0Jykge1xuXHRcdGh5ZHJhdGVUZXh0KGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ2xvb3AnKSB7XG5cdFx0aHlkcmF0ZUxvb3AoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblxuXHRyZXR1cm4gXztcblx0XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEh5ZHJhdGlvbihjb21wb25lbnQsIGh5ZHJhdGlvblJvb3QsIHRpbWVCZW5jaG1hcmsgPSAoKSA9PiB7fSwgY2FsbGJhY2sgPSBudWxsKVxue1xuXHRsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgKGluc3RhbmNlKSA9PiB7XG5cblx0XHR0aW1lQmVuY2htYXJrKCdIeWRyYXRpb24nKTtcblxuXHRcdGxldCB0cmVlID0gW2luc3RhbmNlXTtcblxuXHRcdFNpbnVvdXMuY2xlYXJISUQoKTtcblxuXHRcdC8vIGxldCBjb25uZWN0ZWROb2RlID0gZmlsdGVyQ2hpbGROb2RlcyhoeWRyYXRpb25Sb290KTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNvbXBvbmVudCA9IHRyZWVbaV07XG5cdFx0XHRsZXQgbm9kZSA9IGh5ZHJhdGlvblJvb3QuY2hpbGROb2Rlc1tpXTtcblx0XHRcdGxldCBoeWRyYXRpb24gPSBjb21wb25lbnQuaHlkcmF0ZShjb21wb25lbnQpO1xuXHRcdFx0XG5cdFx0XHRoeWRyYXRlKGNvbXBvbmVudCwgbm9kZSwgaHlkcmF0aW9uKTtcblx0XHR9XG5cdFx0XG5cdFx0Ly8gY29uc29sZS5sb2coaW5zdGFuY2UpO1xuXHRcdGluc3RhbmNlLmhvb2soJ21vdW50ZWQnKTtcblxuXHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjayhpbnN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0dGltZUJlbmNobWFyaygnSHlkcmF0aW9uJyk7XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH0pO1xuXG59XG5cbi8qKlxuICogRmlsdGVyIG91dCB3aGl0ZXNwYWNlIHRleHQgbm9kZXMgdW5sZXNzIGl0IGhhcyBhIG5vc2tpcCBpbmRpY2F0b3IuXG4gKlxuICogQHBhcmFtICB7Tm9kZX0gcGFyZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZmlsdGVyQ2hpbGROb2RlcyhwYXJlbnQpIHtcblx0cmV0dXJuIHBhcmVudC5jaGlsZE5vZGVzO1xuXHQvLyBjb25zb2xlLndhcm4ocGFyZW50LCBwYXJlbnQuY2hpbGROb2Rlcyk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LmNoaWxkTm9kZXMpLmZpbHRlcihcbiAgICAgICAgZWwgPT4gZWwubm9kZVR5cGUgIT09IDMgfHwgZWwuZGF0YS50cmltKCkgfHwgZWwuX25vc2tpcFxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tICcuL3N1YnNjcmliZSc7XG5pbXBvcnQgeyBtYWtlQ3NzLCBtZXJnZU9wdGlvbnMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5cbi8vIGxldCBzdWJzY3JpYmVycyA9IFtdO1xuLy8gbGV0IHN1YnNjcmliZXJzX2ZpcnN0ID0gW107XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoeWRyYXRlUHJvcHMoY29udGV4dCwgZWwsIG9wdGlvbnMpXG57XG5cdC8vIGNvbnNvbGUubG9nKGVsKTtcblx0Ly8gY29uc29sZS5sb2cob3B0aW9ucyk7XG5cdG9wdGlvbnMgPSBtZXJnZU9wdGlvbnMob3B0aW9ucylcblx0Ly8gY29uc29sZS53YXJuKG9wdGlvbnMpO1xuXHQvLyByZXR1cm47XG5cdFxuXHRpZighb3B0aW9ucy5fcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cblx0bGV0IHN1YnNjcmliZXJzID0gW107XG5cdGxldCBzdWJzY3JpYmVyc19maXJzdCA9IFtdO1xuXG5cblx0ZnVuY3Rpb24gYWRkU3Vic2NyaWJlcih2YWx1ZSwgZm4sIHNraXAgPSB0cnVlKVxuXHR7XG5cdFx0c3Vic2NyaWJlcnMucHVzaCh7XG5cdFx0XHR2YWx1ZSxcblx0XHRcdGZuLFxuXHRcdH0pO1xuXG5cdFx0c3Vic2NyaWJlcnNfZmlyc3QucHVzaChza2lwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlIHN0eWxlcyBhbmQgY2xhc3Nlc1xuXHQgKi9cblx0aWYob3B0aW9ucy5zdHlsZSB8fCBvcHRpb25zLmNsYXNzKSB7XG5cdFx0Ly8gY29uc29sZS5lcnJvcihlbCk7XG5cdFx0bGV0IGNzc09wdGlvbnMgPSBtYWtlQ3NzKHt9LCBvcHRpb25zKTtcblxuXHRcdGlmKGNzc09wdGlvbnMuc3R5bGUpIHtcblx0XHRcdGFkZFN1YnNjcmliZXIoY3NzT3B0aW9ucy5zdHlsZSwgKG9iaikgPT4ge1xuXHRcdFx0XHRmb3IobGV0IG5hbWUgaW4gb2JqKSB7XG5cdFx0XHRcdFx0ZWwuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgb2JqW25hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYoY3NzT3B0aW9ucy5jbGFzcykge1xuXHRcdFx0YWRkU3Vic2NyaWJlcihjc3NPcHRpb25zLmNsYXNzLCAodmFsdWUpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coZWwsIHZhbHVlKVxuXHRcdFx0XHRlbC5jbGFzc05hbWUgPSB2YWx1ZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIE1ha2UgZXZlbnRzXG5cdCAqL1xuXHRpZihvcHRpb25zLm9uKSB7XG5cdFx0Zm9yKGxldCBuYW1lIGluIG9wdGlvbnMub24pIHtcblx0XHRcdGhhbmRsZUV2ZW50KGVsLCBuYW1lLCBvcHRpb25zLm9uW25hbWVdKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhdHRyaWJ1dGVzXG5cdCAqL1xuXHRpZihvcHRpb25zLmF0dHJzKSB7XG5cdFx0Zm9yKGxldCBuYW1lIGluIG9wdGlvbnMuYXR0cnMpIHtcblx0XHRcdGFkZFN1YnNjcmliZXIob3B0aW9ucy5hdHRyc1tuYW1lXSwgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXHQvKipcblx0ICogU3Vic2NyaWJlXG5cdCAqL1xuXHRpZihzdWJzY3JpYmVycy5sZW5ndGggPiAwKSB7XG5cdFx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHN1YnNjcmliZXJzW2ldLnZhbHVlKCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihzdWJzY3JpYmVyc19maXJzdFtpXSkge1xuXHRcdFx0XHRcdHN1YnNjcmliZXJzX2ZpcnN0W2ldID0gZmFsc2U7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Vic2NyaWJlcnNbaV0uZm4odmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbn1cblxuZnVuY3Rpb24gaGFuZGxlRXZlbnQoZWwsIG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGV2ZW50UHJveHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnRQcm94eSk7XG4gICAgfVxuXG4gICAgKGVsLl9saXN0ZW5lcnMgfHwgKGVsLl9saXN0ZW5lcnMgPSB7fSkpW25hbWVdID0gdmFsdWU7XG59XG5cbi8qKlxuICogUHJveHkgYW4gZXZlbnQgdG8gaG9va2VkIGV2ZW50IGhhbmRsZXJzLlxuICogQHBhcmFtIHtFdmVudH0gZSAtIFRoZSBldmVudCBvYmplY3QgZnJvbSB0aGUgYnJvd3Nlci5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBldmVudFByb3h5KGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2UudHlwZV0oZSk7XG59IiwiaW1wb3J0IHsgc3Vic2NyaWJlIGFzIHNpbnVvdXNTdWJzY3JpYmUgfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlKHZhbHVlLCBmbiwgc2tpcEZpcnN0ID0gdHJ1ZSlcbntcblx0aWYodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGZuKHZhbHVlKTtcblx0fVxuXG5cdHNpbnVvdXNTdWJzY3JpYmUoKCkgPT4ge1xuXHRcdGxldCB2ID0gdmFsdWUoKTtcblxuXHRcdC8vIGNvbnNvbGUubG9nKHNraXBGaXJzdCwgdiwgZm4pXG5cblx0XHRpZihza2lwRmlyc3QpIHtcblx0XHRcdHNraXBGaXJzdCA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXG5cblx0XHRmbih2KTtcblx0fSk7XG59IiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBoeWRyYXRlIH0gZnJvbSAnQHNpbnVvdXMvaHlkcmF0aW9uJztcbmltcG9ydCByZW5kZXIgZnJvbSAnQHNpbnVvdXMvcmVuZGVyJztcblxuLy8gaW1wb3J0IHsgYXBpIH0gZnJvbSAnc2ludW91cyc7XG4vLyBpbXBvcnQgeyBvYnNlcnZhYmxlIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50L3NyYy9vYnNlcnZhYmxlJztcbi8vIGltcG9ydCB0ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdGVzdC5zaW4nXG4vLyBpbXBvcnQgdGVzdDIgZnJvbSAnLi4vY29tcG9uZW50cy90ZXN0Mi5zaW4nXG5pbXBvcnQgYnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2J1dHRvbi5zaW4nXG4vLyBpbXBvcnQgSW5kZXhQYWdlIGZyb20gJy4uL3BhZ2VzL2luZGV4LnNpbidcbmltcG9ydCB0aW1lQmVuY2htYXJrIGZyb20gJy4vdGltZSc7XG5cbmNvbnN0IEluZGV4UGFnZSA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VJbmRleFwiICovICcuLi9wYWdlcy9pbmRleC5zaW4nKVxuXG5cbnZhciBMQVlPVVQ7XG52YXIgUGFnZUluZGV4LCBQYWdlSW5kZXgyO1xuXG5mdW5jdGlvbiBURVNUX1dFQlBBQ0tfQlVJTEQoKVxue1xuXHR0aW1lQmVuY2htYXJrKCdTU1ItQnVpbGQnKTtcblx0Ly8gU2ludW91cy5yZWdpc3RlckNvbXBvbmVudCh0ZXN0KTtcblx0Ly8gU2ludW91cy5yZWdpc3RlckNvbXBvbmVudCh0ZXN0Mik7XG5cdFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQoYnV0dG9uKTtcblx0dGltZUJlbmNobWFyaygnU1NSLUJ1aWxkJyk7XG59XG5cbi8vIGZ1bmN0aW9uIFRFU1RfSU5JVCgpXG4vLyB7XG4vLyBcdHRpbWVCZW5jaG1hcmsoJ1NTUi1Jbml0Jyk7XG4vLyBcdFBhZ2VJbmRleCA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0UGFnZUluZGV4MiA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0dGltZUJlbmNobWFyaygnU1NSLUluaXQnKTtcbi8vIH1cblxuZnVuY3Rpb24gVEVTVF9SRU5ERVIoKVxue1xuXHRyZW5kZXIoSW5kZXhQYWdlLCBMQVlPVVQsIHRpbWVCZW5jaG1hcmssIChjKSA9PiB7XG5cdFx0UGFnZUluZGV4ID0gYztcblx0fSk7XG59XG5cbmZ1bmN0aW9uIENMRUFSX0hPT0tTKClcbntcblx0bGV0IGh0bWwgPSBMQVlPVVQuaW5uZXJIVE1MO1xuXHRMQVlPVVQuaW5uZXJIVE1MID0gaHRtbDtcblx0UGFnZUluZGV4Lmhvb2soJ3VubW91bnRlZCcpO1xufVxuXG5mdW5jdGlvbiBURVNUX0hZRFJBVEUoKVxue1xuXHRoeWRyYXRlKEluZGV4UGFnZSwgTEFZT1VULCB0aW1lQmVuY2htYXJrKTtcbn1cblxuVEVTVF9XRUJQQUNLX0JVSUxEKCk7XG5cbi8vIFRFU1RfSU5JVCgpO1xuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxvYWQpO1xuLy8gcmV0dXJuO1xuKGZ1bmN0aW9uIGxvYWQoKSB7XG5cdExBWU9VVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXlvdXQnKTtcblxuXG5cdC8vIGxldCBkID0gb2JzZXJ2YWJsZSgxKTtcblx0Ly8gYXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdC8vIFx0Y29uc29sZS5sb2coJ1tzYl0nLCBkKCkpO1xuXHQvLyB9KVxuXHQvLyBkKDIpO1xuXHQvLyByZXR1cm47XG5cblxuXG5cdC8vIExBWU9VVC5pbm5lckhUTUwgPSAnJztcblx0Ly8gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG5cdC8vIFRFU1RfSFlEUkFURSgpO1xuXHQvLyByZXR1cm47XG5cblx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0Ly8gVEVTVF9SRU5ERVIoKTtcblx0Ly8gfSwgMjAwMClcblxuXHRURVNUX1JFTkRFUigpO1xuXHQvLyBjb25zb2xlLmxvZyhMQVlPVVQuaW5uZXJIVE1MKVxuXHQvLyByZXR1cm5cblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblxuXHRcdENMRUFSX0hPT0tTKCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCBURVNUX0hZRFJBVEUoKTtcblx0XHR9LCAzMDApO1xuXHR9LCAxMDAwKTtcbn0pKCk7XG4iLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==