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

var _observable = __webpack_require__(/*! sinuous/observable */ "./node_modules/sinuous/module/observable.js");

var _render = __webpack_require__(/*! @sinuous/render */ "./packages/render/dist/index.js");

function loop(context, condition, getKey, getItem) {
  return (0, _render.map)(context, condition, getKey, getItem);
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

var _component2 = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");

var _lazy = __webpack_require__(/*! @sinuous/lazy */ "./packages/lazy/dist/index.js");

var _render = __webpack_require__(/*! @sinuous/render */ "./packages/render/dist/index.js");

var _property = _interopRequireDefault(__webpack_require__(/*! ./property */ "./packages/hydration/dist/property.js"));

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
  var parentNode = node.parentNode;
  var parentChildren = parentNode.childNodes;
  (0, _render.map)(context, args.c, args.k, function (item, key) {
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
exports.render = render;
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function get() {
    return _map.map;
  }
});

var _lazy = __webpack_require__(/*! @sinuous/lazy */ "./packages/lazy/dist/index.js");

var _map = __webpack_require__(/*! ./map */ "./packages/render/dist/map/index.js");

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

var _sinuous = __webpack_require__(/*! sinuous */ "./node_modules/sinuous/module/sinuous.js");

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

/***/ "./src/render-test.js":
/*!****************************!*\
  !*** ./src/render-test.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _i = _interopRequireDefault(__webpack_require__(/*! @sinuous/i */ "./packages/i/dist/index.js"));

var _hydration = __webpack_require__(/*! @sinuous/hydration */ "./packages/hydration/dist/index.js");

var _render = __webpack_require__(/*! @sinuous/render */ "./packages/render/dist/index.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uLnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NidXR0b24uc2luP2NlNzkiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9iYXNpYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb29wLmpzIiwid2VicGFjazovLy8uLi9zcmMvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zbG90LmpzIiwid2VicGFjazovLy8uLi9zcmMvc3RhdGVtZW50LmpzIiwid2VicGFjazovLy8uLi9zcmMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oeWRyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21hcC9kaWZmLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXItdGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZS5qcyJdLCJuYW1lcyI6WyJfIiwieSIsInNlbGYiLCJjbGFzc2VzIiwib2JqIiwic3RhdGljQ2xhc3NlcyIsImR5bmFtaWMiLCJpIiwiYXJndW1lbnRzIiwiYXJnIiwiQXJyYXkiLCJqIiwiaGFuZGxlQ2xhc3NPYmplY3QiLCJhIiwidmFsIiwic3R5bGVzIiwiY2FtZWxUb1Byb3AiLCJoYW5kbGVTdHlsZXNPYmplY3QiLCJISUQiLCJCYXNpYyIsIm9ic2VydmFibGUiLCJkZWZhdWx0IiwiY29tcHV0ZWQiLCJuYW1lIiwiY2hpbGRyZW4iLCJjaGlsZCIsInBhcmVudCIsInByb3AiLCJ2YWx1ZSIsInR5cGUiLCJwcm9wcyIsImN0eCIsImgiLCJzdGF0ZW1lbnQiLCJsb29wIiwic2xvdCIsImQiLCJjIiwiU2ludW91cyIsImVsIiwidGFnIiwib3B0cyIsImR5bmFtaWNBdHRycyIsInJlYWR5T3B0aW9ucyIsImNvbXBvbmVudCIsIm9wdGlvbnMiLCJfc2xvdHMiLCIkc2xvdHMiLCJub2RlIiwiZm4iLCJiaW5kaW5nIiwidiIsIm1ha2VPYnNlZXJ2YWJsZSIsInN0ciIsImFyZ1RvU3RyaW5nIiwicmVhZHlTdHlsZXMiLCJtYWtlU3R5bGVQcm9wIiwiY2xvbmVPcHRpb25zIiwic2hvdWxkQ2xvbmUiLCJyZWFkeU9wdGlvbiIsIm9wdGlvbiIsIm1ha2VDc3MiLCJBc3NpZ25PYmplY3RPcHRpb25zIiwiQXNzaWduVmFsdWVPcHRpb25zIiwic2hvdWxkQmVNZXJnZWQiLCJrZXlzIiwiT2JqZWN0IiwibWVyZ2VPcHRpb25zIiwibWFrZU9wdGlvbiIsImNvbnRleHQiLCJyZW5kZXIiLCJyZXN1bHQiLCJmb3VuZENvbmRpdGlvbiIsImNoaWxkSW5kZXgiLCJjb25kaXRpb24iLCJzaXplIiwiZG9jdW1lbnQiLCJTVE9SQUdFIiwiU1VCU0NSSUJFUlMiLCJjb25zb2xlIiwiaHlkcmF0ZSIsInN0YXJ0SW5kZXgiLCJzdGF0ZW1lbnRBcmdzIiwiYXJncyIsIk5vZGUiLCJhcGkiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50Tm9kZSIsIm5ld05vZGUiLCJtYXJrQXNSZWFkeSIsImhpZGVOb2RlcyIsInBhcmVudE5vZGUiLCJwYXJlbnRDaGlsZHJlbiIsIml0ZW1zIiwiaXRlbSIsIml0ZW1LZXkiLCJyZWdpc3Rlckh5ZHJhdGlvbiIsInBhdGgiLCJiaW5kZWROb2RlcyIsInNsb3REYXRhIiwiZ2V0U2xvdE5vZGUiLCJkYXRhIiwiY2hpbGRyZW5TbG90cyIsInNsb3RzIiwic3RhcnROb2RlSW5kZXgiLCJoeWRyYXRlSCIsIm5ld0FyZ3MiLCJoeWRyYXRlU2xvdHMiLCJoeWRyYXRlSWRsZSIsImh5ZHJhdGVUYWciLCJoeWRyYXRlVGV4dCIsImh5ZHJhdGVMb29wIiwiaHlkcmF0ZVN0YXRlbWVudCIsInRpbWVCZW5jaG1hcmsiLCJjYWxsYmFjayIsInRyZWUiLCJoeWRyYXRpb25Sb290IiwiaHlkcmF0aW9uIiwiaW5zdGFuY2UiLCJzdWJzY3JpYmVycyIsInN1YnNjcmliZXJzX2ZpcnN0Iiwic2tpcCIsImNzc09wdGlvbnMiLCJhZGRTdWJzY3JpYmVyIiwiaGFuZGxlRXZlbnQiLCJlIiwiU2ludW91c0NvbXBvbmVudHMiLCJjcmVhdGVISUQiLCJjbGVhckhJRCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiaGFzQ29tcG9uZW50IiwiZ2V0SHlkcmF0ZUNvbXBvbmVudCIsImdldENvbXBvbmVudEluc3RhbmNlIiwiZ2V0Q29tcG9uZW50IiwibW9kdWxlIiwibGF5b3V0IiwiYUlkeCIsImJJZHgiLCJrZXkiLCJrZXlFeHByIiwiYiIsImFFbG0iLCJiRWxtIiwiZ2V0IiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsImJlZm9yZUluaXQiLCJyb290Iiwic3Vic2NyaWJlIiwic2FtcGxlIiwiY2xlYW51cCIsImNsZWFuaW5nIiwiZW5kTWFyayIsImRpc3Bvc2VycyIsIm5vZGVzIiwidG9SZW1vdmUiLCJkZWZhdWx0QSIsInVuc3Vic2NyaWJlIiwiY29udGVudCIsIm5vZGVLZXkiLCJuIiwiZXhwciIsImRpc3Bvc2VyIiwiSW5kZXhQYWdlIiwiTEFZT1VUIiwiUGFnZUluZGV4IiwiUGFnZUluZGV4MiIsIlRFU1RfV0VCUEFDS19CVUlMRCIsImJ1dHRvbiIsIlRFU1RfUkVOREVSIiwiQ0xFQVJfSE9PS1MiLCJodG1sIiwiaW5uZXJIVE1MIiwiaG9vayIsIlRFU1RfSFlEUkFURSIsImxvYWQiLCJnZXRFbGVtZW50QnlJZCIsInNldFRpbWVvdXQiLCJ0aW1lcyIsInRpbWUiLCJub3ciLCJEYXRl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R0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0osS0FBSyxDQUFDM0osSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDMkosU0FBSyxDQUFDM0osSUFBRCxDQUFMLEdBQWM2SixHQUFkO0FBQ0EsV0FBT0YsS0FBSyxDQUFDM0osSUFBRCxDQUFaO0FBQ0E7O0FBRUR3RCxTQUFPLENBQUN3RyxHQUFSLFdBQW9CaEssSUFBcEIsU0FBOEI2SixHQUFHLEdBQUdGLEtBQUssQ0FBQzNKLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPMkosS0FBSyxDQUFDM0osSUFBRCxDQUFaO0FBQ0EsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wicGFnZUluZGV4XCI6XCJwYWdlSW5kZXhcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuYnVuZGxlLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXHRcdGltcG9ydCBjb21wb25lbnRDb25maWcgZnJvbSBcIi4vc2J1dHRvbi5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFNidXR0b24oKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnU2J1dHRvbic7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSB7XCJkZWZhdWx0XCI6e1wicGF0aFwiOlswLDFdLFwidGFnXCI6XCJkaXZcIixcImluZGV4XCI6MH19O1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kcyA9IE9iamVjdC5rZXlzKGNvbmZpZy5tZXRob2RzKTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2Z1bmN0aW9uYWwgPSBmYWxzZTtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcpIHtcblx0XHRcdGlmKHR5cGVvZiBjb25maWdba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcubWV0aG9kcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWcubWV0aG9kc1trZXldXG5cdFx0fVxuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3Byb3BzID0ge307XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLnByb3BzKSB7XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19wcm9wc1trZXldID0gY29uZmlnLnByb3BzW2tleV1cblx0XHR9XG5cdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcmVuZGVyID0gZnVuY3Rpb24oaCwgeyBjdHgsIGNvbXBvbmVudHMsIHJlbmRlciwgc3RhdGVtZW50LCBzbG90LCBsb29wLCBkLCBjIH0pIHtcblx0XHRcdFx0cmV0dXJuIGgoXG4gIFwiZGl2XCIsXG4gIFtcbiAgICBjdHgub3B0aW9ucyxcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjE1cHhcIixcbiAgICAgIH0sXG4gICAgICBjbGFzczogXCJuZXctYnV0dG9uXCIsXG4gICAgICBzdHlsZTogW3sgY29sb3I6IGN0eC5fY29tcHV0ZWQudGVzdENvbG9yIH1dLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGN0eC5jbGljayxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgICgpID0+IHtcbiAgICAgIHJldHVybiBgJHtjdHguX3N0YXRlLnMxKCl9YDtcbiAgICB9LFxuICAgIHNsb3QoXG4gICAgICBjdHgsXG4gICAgICBoLFxuICAgICAgXCJkZWZhdWx0XCIsXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJzXCIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtgRGVmYXVsdCBidXR0b24gdGV4dGBdXG4gICAgKSxcbiAgXVxuKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoKSB7XG5cdFx0XHRcdGxldCBjdHggPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4ge1xuICBfdDogXCJoXCIsXG4gIHQ6IFwiZGl2XCIsXG4gIG86IFtcbiAgICBjdHgub3B0aW9ucyxcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgIGNsYXNzOiBcIm5ldy1idXR0b25cIixcbiAgICAgIHN0eWxlOiBbeyBjb2xvcjogY3R4Ll9jb21wdXRlZC50ZXN0Q29sb3IgfV0sXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogY3R4LmNsaWNrLFxuICAgICAgfSxcbiAgICAgIF9zOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGM6IFtcbiAgICB7XG4gICAgICBfdDogXCJ0XCIsXG4gICAgICB0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtjdHguX3N0YXRlLnMxKCl9YDtcbiAgICAgIH0sXG4gICAgfSxcbiAgICAtMSxcbiAgXSxcbn07XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBwcm9wMToge1xuICAgICAgdHlwZTogXCJOdW1iZXJcIixcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDk7XG4gICAgICB9XG4gICAgfSxcbiAgICBwdDoge1xuICAgICAgdHlwZTogXCJOdW1iZXJcIixcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWVyOiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBzdGF0ZShvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHMxOiBvKHRoaXMucmFuZG9tKDEsIDEwMCkpXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZChvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlc3RDb2xvcjogbygoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZS5zMSgpICUgMiA9PT0gMCA/ICdyZWQnIDogJ2dyZWVuJztcbiAgICAgIH0pLFxuICAgICAgdGVzdENsYXNzOiBvKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZWQ6IHRoaXMuX3N0YXRlLnMxKCkgJSAyID09PSAwXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHJhbmRvbTogZnVuY3Rpb24gKHMsIGUpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlKSArIHM7XG4gICAgfSxcbiAgICBjbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgYWxlcnQodGhpcy5fc3RhdGUuczEoKSk7XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGlyZWN0aW9uID0gMTsgLy8gY29uc29sZS5sb2coJ2NyZWF0ZWQnLCB0aGlzLmhpZCwgJ3dpdGggczEgPScsIHMxKTtcblxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMSh0aGlzLl9zdGF0ZS5zMSgpICsgMSk7IC8vTWF0aC5yYW5kb20oMCwgMTAwKVxuICAgICAgfSwgMjAwMCk7IC8vIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgLy8gXHQvLyBjb25zb2xlLmxvZygnaW50ZXJ2YWwnLCB0aGlzLmhpZCk7XG4gICAgICAvLyBcdGlmKHMxID4gNDApIHtcbiAgICAgIC8vIFx0XHRkaXJlY3Rpb24gPSAtNTtcbiAgICAgIC8vIFx0fSBlbHNlIGlmKHMxIDwgMTApIHtcbiAgICAgIC8vIFx0XHRkaXJlY3Rpb24gPSA1O1xuICAgICAgLy8gXHR9XG4gICAgICAvLyBcdHMxICs9IGRpcmVjdGlvblxuICAgICAgLy8gfSwgMTAwMClcbiAgICB9LFxuICAgIHVubW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3VubW91bnRlZCcsIHRoaXMuaGlkKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fZGF0YS50aW1lcik7XG4gICAgfVxuICB9XG59OyIsImV4cG9ydCBjb25zdCBfID0gLTE7XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5cblxuZnVuY3Rpb24gY2FtZWxUb1Byb3Aocylcbntcblx0cmV0dXJuIHNcblx0XHQucmVwbGFjZSgvXFwuPyhbQS1aXSspL2csICh4LCB5KSA9PiBgLSR7eS50b0xvd2VyQ2FzZSgpfWApXG5cdFx0LnJlcGxhY2UoL14tLywgJycpO1xufVxuXG5mdW5jdGlvbiBvbmx5VW5pcXVlKHZhbHVlLCBpbmRleCwgc2VsZikgeyBcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDbGFzc09iamVjdChvYmopXG57XG5cdGxldCBjbGFzc2VzID0gW107XG5cblx0Zm9yIChsZXQga2V5IGluIG9iaikge1xuXHRcdGlmKHZhbHVlKG9ialtrZXldKSkge1xuXHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2VzKHN0YXRpY0NsYXNzZXMgPSBbXSwgZHluYW1pYyA9IHt9KVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdFxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYXJnLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKHZhbHVlKGFyZ1tqXSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KFxuXHRcdFx0XHRcdGhhbmRsZUNsYXNzT2JqZWN0KGFyZylcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdChcblx0XHRcdFx0XHRoYW5kbGVDbGFzc09iamVjdCh2YWx1ZShhcmcpKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKCh2LCBpLCBhKSA9PiBhLmluZGV4T2YodikgPT09IGkpO1xuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCBvYmopXG57XG5cdGZvciAobGV0IGtleSBpbiBvYmopIHtcblx0XHRsZXQgdmFsID0gdmFsdWUob2JqW2tleV0pO1xuXHRcdGlmKHZhbCAhPT0gbnVsbCkge1xuXHRcdFx0c3R5bGVzW2NhbWVsVG9Qcm9wKGtleSldID0gdmFsO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSB7fTtcblx0XHRcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgYXJndW1lbnRzW2ldKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgdmFsdWUoYXJndW1lbnRzW2ldKSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3R5bGVzO1xuXHR9XG59IiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnQHNpbnVvdXMvY29tcGlsZXIvc3JjL2VtcHR5JztcblxuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQgfSBmcm9tICcuL29ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBzdHlsZXMsIGNsYXNzZXMsIHN0YXRlbWVudCwgZHluYW1pYywgbG9vcCwgc2xvdCB9IGZyb20gJy4vaW5kZXgnO1xuXG5pbXBvcnQgeyBoIH0gZnJvbSAnLi8nO1xuXG4vLyBpbXBvcnQgeyByZW5kZXIsIGh5ZHJhdGUgfSBmcm9tICcuL3RlbXBsYXRlJztcbmxldCBISUQgPSAwO1xuXG5cbnZhciBCYXNpYyA9IGZ1bmN0aW9uICgpIHtcblxuXHRmdW5jdGlvbiBCYXNpYygpXG5cdHtcblx0XHR0aGlzLl9pc0NvbXBvbmVudCA9IHRydWU7XG5cdFx0dGhpcy5oaWQgPSArK0hJRDtcblx0XHR0aGlzLiRlbCA9IG51bGw7XG5cblx0XHR0aGlzLl9wcm9wcyA9IHt9O1xuXHRcdHRoaXMuX3Bhc3NlZFByb3BzID0ge307XG5cblx0XHQvLyBMb2NhbCBkYXRhXG5cdFx0dGhpcy5fZGF0YSA9IHRoaXMuZGF0YSgpO1xuXHRcdC8vIFN0YXRlZnVsIGRhdGFcblx0XHR0aGlzLl9zdGF0ZSA9IHRoaXMuc3RhdGUob2JzZXJ2YWJsZSk7XG5cdFx0Ly8gc2xvdHNcblx0XHR0aGlzLl9zbG90cyA9IHtcblx0XHRcdGRlZmF1bHQ6IFtdLFxuXHRcdH07XG5cdFx0Ly8gaG9va3Ncblx0XHR0aGlzLl9ob29rcyA9IFtdO1xuXG5cdFx0dGhpcy5fY29tcHV0ZWQgPSB0aGlzLmNvbXB1dGVkKGNvbXB1dGVkKTtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXHRcdHRoaXMuX2VsX2luZGV4ID0gMDtcblx0XHR0aGlzLm9wdGlvbnMgPSBudWxsO1xuXG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblxuXHRcdC8vIERlZmF1bHQgcHJvcCB2YWx1ZXMgXG5cdFx0Ly8gdGhpcy5pbml0UHJvcHMoKTtcblxuXHRcdC8vIHRoaXMuaW5pdFRlbXBsYXRlKCk7XG5cblx0XHR0aGlzLnNldENoaWxkcmVuKCk7XG5cdFx0dGhpcy5zZXRQYXJlbnQoKTtcblxuXHRcdHRoaXMuYmluZENvbnRleHQoKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmJpbmRDb250ZXh0ID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fY29tcHV0ZWQpIHtcblx0XHRcdHRoaXMuX2NvbXB1dGVkW2tleV0gPSB0aGlzLl9jb21wdXRlZFtrZXldLmJpbmQodGhpcyk7XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fbWV0aG9kcykge1xuXHRcdFx0bGV0IG5hbWUgPSB0aGlzLl9tZXRob2RzW2tleV07XG5cdFx0XHR0aGlzW25hbWVdID0gdGhpc1tuYW1lXS5iaW5kKHRoaXMpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQ29uZmlnXG5cdCAqL1xuXG5cdC8vIEJhc2ljLnByb3RvdHlwZS5zZXRNZXRob2RzID0gZnVuY3Rpb24obWV0aG9kcyA9IHt9KVxuXHQvLyB7XG5cdC8vIFx0dGhpcy5fbWV0aG9kcyA9IG1ldGhvZHM7XG5cdC8vIH1cblxuXHQvKipcblx0ICogSGllcmFyY2h5XG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5zZXRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkcmVuID0gW10pXG5cdHtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuYWRkQ2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZClcblx0e1xuXHRcdGlmKGNoaWxkLl9mdW5jdGlvbmFsKSB7XG5cdFx0XHRjaGlsZCA9IF87XG5cdFx0fVxuXG5cdFx0dGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cblx0XHRpZihjaGlsZC5zZXRQYXJlbnQpIHtcblx0XHRcdGNoaWxkLnNldFBhcmVudCh0aGlzKTtcblx0XHR9XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbihpbmRleClcblx0e1xuXHRcdHRoaXMuX2NoaWxkcmVuW2luZGV4XS5ob29rKCd1bm1vdW50ZWQnKTtcblx0XHR0aGlzLl9jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLnNldFBhcmVudCA9IGZ1bmN0aW9uKHBhcmVudCA9IG51bGwpXG5cdHtcblx0XHR0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblx0LyoqXG5cdCAqIFByb3BzXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5wcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmluaXRQcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX3Byb3BzKVxuXHRcdHtcblx0XHRcdGxldCBwcm9wID0gdGhpcy5fcHJvcHNba2V5XTtcblx0XHRcdGxldCB2YWx1ZSA9IG51bGw7XG5cdFx0XHRsZXQgdHlwZSA9IG51bGw7XG5cblx0XHRcdGlmKHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdC8vIHR5cGVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlID0gcHJvcC5kZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2RhdGFba2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NTbG90cyA9IGZ1bmN0aW9uKG5hbWUsIHNsb3RzKVxuXHR7XG5cdFx0dGhpcy5fc2xvdHNbbmFtZV0gPSBzbG90cztcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5wYXNzT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpXG5cdHtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NQcm9wcyA9IGZ1bmN0aW9uKHByb3BzKVxuXHR7XG5cdFx0aWYoIXByb3BzKSB7XG5cdFx0XHRwcm9wcyA9IHt9O1xuXHRcdH1cblxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX19wcm9wcylcblx0XHR7XG5cdFx0XHRsZXQgdmFsdWUgPSB0aGlzLl9fcHJvcHNba2V5XS5kZWZhdWx0KCk7XG5cdFx0XHRpZihwcm9wc1trZXldKSB7XG5cdFx0XHRcdHZhbHVlID0gcHJvcHNba2V5XTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fcHJvcHNba2V5XSA9IHZhbHVlO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIExvY2FsIGNvbXBvbmVudCBkYXRhXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuY29tcHV0ZWQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHQvKipcblx0ICogU3RhdGVmdWwgZGF0YVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuc3RhdGUgPSBmdW5jdGlvbihvKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIDEuIENyZWF0ZSBjaGlsZCBjb21wb25lbnRzIChkaWZmZXJlbnQgY29udGV4dClcblx0ICogMi4gUGFzcyBwcm9wc1xuXHQgKiAzLiBSZW5kZXJcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24oKSB7fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5jaGlsZENvbXBvbmVudHMgPSBmdW5jdGlvbigpIHt9XG5cblx0LyoqXG5cdCAqICBMaWZlIGN5Y2xlIGhvb2tzXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuaG9vayA9IGZ1bmN0aW9uKHR5cGUgPSAnbW91bnRlZCcpXG5cdHtcblx0XHRpZighdGhpcy5faG9va3MuaW5jbHVkZXModHlwZSkpIHtcblx0XHRcdHRoaXMuX2hvb2tzLnB1c2godHlwZSk7XG5cdFx0fVxuXG5cdFx0aWYodGhpc1t0eXBlXSkge1xuXHRcdFx0dGhpc1t0eXBlXS5jYWxsKHRoaXMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMuX2NoaWxkcmVuW2ldID09PSBfIHx8IHRoaXMuX2NoaWxkcmVuW2ldLl9ob29rcy5pbmNsdWRlcyh0eXBlKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoIXRoaXMuX2NoaWxkcmVuW2ldLl9mdW5jdGlvbmFsKSB7XG5cdFx0XHRcdHRoaXMuX2NoaWxkcmVuW2ldLmhvb2sodHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUubW91bnRlZCA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUudW5tb3VudGVkID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiBQcml2YXRlIEFQSSBmb3IgcmVuZGVyIGFuZCBoeWRyYXRlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHggPSBudWxsKVxuXHR7XG5cdFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdFx0XHRjdHggPSB0aGlzO1xuXHRcdH1cblxuXHRcdGguYmluZChjdHgpO1xuXG5cdFx0dGhpcy4kZWwgPSBjdHguX19yZW5kZXIoaC5iaW5kKGN0eCksIHtcblx0XHRcdGN0eCxcblx0XHRcdHN0YXRlbWVudCxcblx0XHRcdGxvb3AsXG5cdFx0XHRzbG90LFxuXHRcdFx0ZDogZHluYW1pYyxcblx0XHRcdGM6IGNvbXB1dGVkLFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuJGVsO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaHlkcmF0ZSA9IGZ1bmN0aW9uKGN0eCA9IG51bGwpXG5cdHtcblx0XHRpZihjdHggPT09IG51bGwpIHtcblx0XHRcdGN0eCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aC5iaW5kKGN0eCk7XG5cblx0XHRyZXR1cm4gY3R4Ll9faHlkcmF0ZShoKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblxuXHQvLyBCYXNpYy5wcm90b3R5cGUudGVtcGxhdGVCdWlsZGVyID0gZnVuY3Rpb24oaCwgb3B0cylcblx0Ly8ge1xuXHQvLyBcdHJldHVybiB0aGlzW2BfXyR7IG9wdHMucmVuZGVyIH1gXShoLCBvcHRzKTtcblx0Ly8gfVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmNvbXBvbmVudCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLmdldFVJRCA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0cmV0dXJuIGBoeWRyLSR7IFNpbnVvdXMuY3JlYXRlSElEKGluZGV4KSB9YDtcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKFwibmFtZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTsgfSk7XG5cblx0cmV0dXJuIEJhc2ljO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNpYztcbiIsImltcG9ydCB7IGgsIGhzLCBhcGkgfSBmcm9tICdzaW51b3VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYyhoLCB0YWcsIG9wdHMsIGNoaWxkcmVuKVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBlbCA9IHRhZygpO1xuXHRcdHJldHVybiBoKGVsLCBvcHRzLCBjaGlsZHJlbik7XG5cdH07XG5cbn0iLCJpbXBvcnQgeyBoIGFzIGhzIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcbmltcG9ydCB7IG9wdGlvbnMsICB9IGZyb20gJy4vJztcbmltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuXG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbntcblx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcblx0aWYoY2hpbGQuc2V0UGFyZW50KSB7XG5cdFx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaChlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxue1xuXHRlbCA9IGVsLnRvTG93ZXJDYXNlKCk7XG5cdC8vIGVsID0gY29tcHV0ZWQoKCkgPT4gKHR5cGVvZiBlbCA9PT0gJ2Z1bmN0aW9uJyA/IGVsIDogZWwpKTtcblxuXHQvLyBjb25zb2xlLmxvZygnWyBGRiBdJywgZWwsIHRoaXMpXG5cdGxldCBkeW5hbWljQXR0cnMgPSBmYWxzZTtcblxuXHRsZXQgcmVhZHlPcHRpb25zID0gb3B0aW9ucyhvcHRzKTtcblx0Ly8gSWYgSFRNTCB0YWcgcmVuZGVyXG5cdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcblx0XHRyZXR1cm4gaHMoZWwsIHJlYWR5T3B0aW9ucywgY2hpbGRyZW4pO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0Q29tcG9uZW50KGVsKTtcblxuXHQvLyBjb25zb2xlLmxvZyh0aGlzKVxuXHRpZih0aGlzKSB7XG5cdFx0dGhpcy5hZGRDaGlsZHJlbihjb21wb25lbnQpO1xuXHR9XG5cblx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudC5yZW5kZXIoe1xuXHRcdFx0b3B0aW9uczogb3B0cyxcblx0XHRcdF9zbG90czogcmVhZHlPcHRpb25zLiRzbG90cyxcblx0XHR9KTtcblx0fVxuXG5cdC8vIGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuXHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHQvLyB9XG5cblx0Zm9yKGxldCBrZXkgaW4gb3B0cy4kc2xvdHMpIHtcblx0XHRjb21wb25lbnQucGFzc1Nsb3RzKGtleSwgb3B0cy4kc2xvdHNba2V5XSk7XHRcblx0fVxuXG5cdGNvbXBvbmVudC5wYXNzT3B0aW9ucyhvcHRzKTtcblxuXHRsZXQgbm9kZSA9IGNvbXBvbmVudC5yZW5kZXIoKTtcblxuXHRub2RlLiRzID0gY29tcG9uZW50O1xuXG5cdHJldHVybiBub2RlO1xufSIsImltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICdAc2ludW91cy9sYXp5JztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4vbWFwJztcblxuZnVuY3Rpb24gcmVuZGVyKGNvbXBvbmVudCwgbGF5b3V0LCB0aW1lQmVuY2htYXJrID0gKCkgPT4ge30sIGNhbGxiYWNrID0gbnVsbCkge1xuXG4gICAgbGF5b3V0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgbG9hZENvbXBvbmVudChjb21wb25lbnQsIChpbnN0YW5jZSkgPT4ge1xuXG4gICAgXHR0aW1lQmVuY2htYXJrKCdSZW5kZXInKTtcblxuXHRcdGxheW91dC5hcHBlbmQoaW5zdGFuY2UucmVuZGVyKCkpO1xuXHRcdGluc3RhbmNlLmhvb2soJ21vdW50ZWQnKTtcblxuXHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjayhpbnN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0dGltZUJlbmNobWFyaygnUmVuZGVyJyk7XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH0pO1xufVxuXG5leHBvcnQgeyByZW5kZXIsIG1hcCB9OyIsImltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ0BzaW51b3VzL3JlbmRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvb3AoY29udGV4dCwgY29uZGl0aW9uLCBnZXRLZXksIGdldEl0ZW0pXG57XG5cdHJldHVybiBtYXAoY29udGV4dCwgY29uZGl0aW9uLCBnZXRLZXksIGdldEl0ZW0pO1xufSIsImltcG9ydCB7IG9ic2VydmFibGUgYXMgc2ludW91c09ic2VydmFibGUsIGNvbXB1dGVkIGFzIHNpbnVvdXNDb21wdXRlZCB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlT2JzZWVydmFibGUoZm4pXG57XG5cdGZuLl9vYnNlcnZhYmxlID0gdHJ1ZTtcblx0cmV0dXJuIGZuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQodiwgYmluZGluZyA9IGZhbHNlKSB7XG5cblx0bGV0IGQ7XG5cdFxuXHRpZihiaW5kaW5nKSB7XG5cdFx0ZCA9IHNpbnVvdXNDb21wdXRlZCh2LmJpbmQodGhpcykpO1xuXHR9IGVsc2Uge1xuXHRcdGQgPSBzaW51b3VzQ29tcHV0ZWQodik7XG5cdH1cblxuXHRtYWtlT2JzZWVydmFibGUoZCk7XG5cblx0cmV0dXJuIGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZhYmxlKHYsIGJpbmRpbmcgPSBmYWxzZSlcbntcblx0Ly8gbGV0IG9icyA9IG51bGw7XG5cdC8vIGxldCBpbmRleCA9IDA7XG5cblx0Ly8gbGV0IGRhdGEgPSAodikgPT4ge1xuXHQvLyBcdGNvbnNvbGUubG9nKHNlZWQsIHYsIGluZGV4KVxuXHQvLyBcdGlmKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJykge1xuXHQvLyBcdFx0aWYoaW5kZXggPT09IDApIHtcblx0Ly8gXHRcdFx0aW5kZXgrKztcblx0Ly8gXHRcdFx0cmV0dXJuIHNlZWQ7XG5cdC8vIFx0XHR9XG5cblx0Ly8gXHRcdHJldHVybiBvYnMoKTtcblx0Ly8gXHR9XG5cblx0Ly8gXHQvLyBpZihpbmRleCA9PT0gMCkge1xuXHQvLyBcdC8vIFx0aW5kZXgrKztcblx0Ly8gXHQvLyBcdHJldHVybiB2O1xuXHQvLyBcdC8vIH1cblxuXHQvLyBcdC8vIGlmKG9icyA9PT0gbnVsbCkge1xuXHQvLyBcdC8vIFx0b2JzID0gc2ludW91c09ic2VydmFibGUodik7XG5cdC8vIFx0Ly8gfVxuXHQvLyB9XG5cblx0bGV0IGQgPSBzaW51b3VzT2JzZXJ2YWJsZSh2KTtcblxuXHRcblx0bWFrZU9ic2VlcnZhYmxlKGQpO1xuXG5cdHJldHVybiBkO1xufSIsImZ1bmN0aW9uIGFyZ1RvU3RyaW5nKClcbntcblx0bGV0IHN0ciA9ICcnO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHZhbHVlID0gYXJndW1lbnRzW2ldO1xuXHRcdFxuXHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dmFsdWUgPSB2YWx1ZSgpO1xuXHRcdH1cblxuXHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvcihsZXQga2V5IGluIHZhbHVlKSB7XG5cdFx0XHRcdGlmKHZhbHVlW2tleV0pIHtcblx0XHRcdFx0XHRzdHIgKz0gYCAkeyBrZXkgfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RyICs9IGAgJHt2YWx1ZX1gO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJnVG9PYmplY3QoKVxue1xuXHRsZXQgc3RyID0gJyc7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBhcmd1bWVudHNbaV0pIHtcblx0XHRcdGxldCB2YWx1ZSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuXHRcdFx0aWYodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1trZXldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBQYXJzZSBjbGFzc2VzXG4gKiBAcGFyYW0gIHtbdHlwZV19IHN0YXRpYyAgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7W3R5cGVdfSBkeW5hbWljIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbmZ1bmN0aW9uIGNsYXNzZXMoc3RyID0gbnVsbCwgZHluYW1pYyA9IG51bGwpXG57XG5cdGlmKHN0ciA9PT0gbnVsbCAmJiBkeW5hbWljID09PSBudWxsKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0aWYoc3RyID09PSBudWxsKSB7XG5cdFx0c3RyID0gJyc7XG5cdH1cblx0XG5cdGlmKHR5cGVvZiBkeW5hbWljID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0ZHluYW1pYyA9IGR5bmFtaWMoKTtcblx0fVxuXG5cdGlmKCFBcnJheS5pc0FycmF5KGR5bmFtaWMpKSB7XG5cdFx0ZHluYW1pYyA9IFtkeW5hbWljXTtcblx0fVxuXG5cdHN0ciArPSBhcmdUb1N0cmluZy5hcHBseSh0aGlzLCBkeW5hbWljKTtcblx0XG5cdC8vIGNvbnNvbGUubG9nKHN0cik7XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBTdHlsZXNcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqICAgICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IGR5bmFtaWMgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZnVuY3Rpb24gbWFrZVN0eWxlUHJvcChuYW1lKVxue1xuXHRyZXR1cm4gbmFtZVxuXHRcdC5yZXBsYWNlKC9cXC4/KFtBLVpdKykvZywgZnVuY3Rpb24gKHgseSkge1xuXHRcdFx0cmV0dXJuIFwiLVwiICsgeS50b0xvd2VyQ2FzZSgpXG5cdFx0fSlcblx0XHQucmVwbGFjZSgvXi0vLCBcIlwiKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVzKG9iaiA9IHt9LCBkeW5hbWljID0gbnVsbClcbntcblx0bGV0IHJlYWR5U3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKTtcblxuXHRpZih0eXBlb2YgZHluYW1pYyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGR5bmFtaWMgPSBkeW5hbWljKCk7XG5cdH1cblxuXHRpZighQXJyYXkuaXNBcnJheShkeW5hbWljKSkge1xuXHRcdGR5bmFtaWMgPSBbZHluYW1pY107XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGR5bmFtaWMubGVuZ3RoOyBpKyspIHtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBkeW5hbWljW2ldKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSBkeW5hbWljW2ldW2tleV07XG5cdFx0XHRcblx0XHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlKCk7XG5cdFx0XHR9XG5cdFx0XHRyZWFkeVN0eWxlc1ttYWtlU3R5bGVQcm9wKGtleSldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlYWR5U3R5bGVzO1xufVxuXG5sZXQgY2xvbmVPcHRpb25zID0gWydfcycsICckc2xvdHMnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDc3MocmVhZHlPcHRpb25zLCBvcHRpb25zKVxue1xuXHRpZihvcHRpb25zLnN0YXRpY0NsYXNzIHx8IG9wdGlvbnMuY2xhc3MpIHtcblx0XHRyZWFkeU9wdGlvbnMuY2xhc3MgPSBjbGFzc2VzLmJpbmQodGhpcywgb3B0aW9ucy5zdGF0aWNDbGFzcyB8fCBudWxsLCBvcHRpb25zLmNsYXNzIHx8IG51bGwpO1xuXHR9XG5cblx0aWYob3B0aW9ucy5zdGF0aWNTdHlsZSB8fCBvcHRpb25zLnN0eWxlKSB7XG5cdFx0cmVhZHlPcHRpb25zLnN0eWxlID0gc3R5bGVzLmJpbmQodGhpcywgb3B0aW9ucy5zdGF0aWNTdHlsZSB8fCB7fSwgb3B0aW9ucy5zdHlsZSB8fCBudWxsKTtcblx0fVxuXG5cdHJldHVybiByZWFkeU9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlT3B0aW9uKG9wdGlvbiwgc2hvdWxkQ2xvbmUgPSB0cnVlKVxue1xuXHRsZXQgcmVhZHlPcHRpb24gPSB7fTtcblxuXHRpZihvcHRpb24ub24gIT09IHVuZGVmaW5lZCkge1xuXHRcdGZvcihsZXQga2V5IGluIG9wdGlvbi5vbikge1xuXHRcdFx0cmVhZHlPcHRpb25bYG9uJHtrZXl9YF0gPSBvcHRpb24ub25ba2V5XTtcblx0XHR9XG5cdH1cblxuXHRpZihvcHRpb24ua2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZWFkeU9wdGlvblsnZGF0YS1rZXknXSA9IG9wdGlvbi5rZXk7XG5cdH1cblxuXHRtYWtlQ3NzKHJlYWR5T3B0aW9uLCBvcHRpb24pO1xuXG5cdGlmKHNob3VsZENsb25lKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBuYW1lID0gY2xvbmVPcHRpb25zW2ldO1xuXHRcdFx0aWYob3B0aW9uW25hbWVdKSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9uW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVhZHlPcHRpb247XG59XG5cbmNvbnN0IEFzc2lnbk9iamVjdE9wdGlvbnMgPSBbJ3N0YXRpY1N0eWxlJywgJ2F0dHJzJywgJ29uJ107XG5jb25zdCBBc3NpZ25WYWx1ZU9wdGlvbnMgPSBbJ3N0eWxlJywgJ2NsYXNzJ107XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU9wdGlvbnMob3B0aW9ucylcbntcblx0bGV0IHJlYWR5T3B0aW9ucyA9IHt9O1xuXHRsZXQgc2hvdWxkQmVNZXJnZWQgPSBmYWxzZTtcblxuXHRpZihBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcblx0XHRcdGlmKG9wdGlvbnNbaV0gPT09IG51bGwpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9uc1tpXSk7XG5cblx0XHRcdGlmKGtleXMubGVuZ3RoID09PSAxICYmIGtleXMuaW5jbHVkZXMoJyRzbG90cycpKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihpID4gMCkge1xuXHRcdFx0XHRzaG91bGRCZU1lcmdlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGlmKCFzaG91bGRCZU1lcmdlZCkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnNbMV07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBvcHRpb25zO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IG9wdGlvbiA9IG9wdGlvbnNbaV1cblx0XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBBc3NpZ25PYmplY3RPcHRpb25zLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRsZXQgbmFtZSA9IEFzc2lnbk9iamVjdE9wdGlvbnNbal07XG5cdFx0XHRcblx0XHRcdGlmKCFvcHRpb25bbmFtZV0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFyZWFkeU9wdGlvbnNbbmFtZV0pIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zW25hbWVdID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGZvcihsZXQgcHJvcCBpbiBvcHRpb25bbmFtZV0pIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zW25hbWVdW3Byb3BdID0gb3B0aW9uW25hbWVdW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgQXNzaWduVmFsdWVPcHRpb25zLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRsZXQgbmFtZSA9IEFzc2lnblZhbHVlT3B0aW9uc1tqXTtcblxuXHRcdFx0aWYoIW9wdGlvbltuYW1lXSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIXJlYWR5T3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV0gPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0cmVhZHlPcHRpb25zW25hbWVdID0gcmVhZHlPcHRpb25zW25hbWVdLmNvbmNhdChvcHRpb25bbmFtZV0pO1xuXHRcdH1cblxuXHRcdGlmKG9wdGlvbi5fcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZWFkeU9wdGlvbnMuX3MgPSBvcHRpb24uX3M7XG5cdFx0fVxuXG5cdFx0aWYob3B0aW9uLmtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZWFkeU9wdGlvbnMua2V5ID0gb3B0aW9uLmtleTtcblx0XHR9XG5cblx0XHRpZihvcHRpb24uc3RhdGljQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYocmVhZHlPcHRpb25zLnN0YXRpY0NsYXNzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zLnN0YXRpY0NsYXNzID0gb3B0aW9uLnN0YXRpY0NsYXNzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zLnN0YXRpY0NsYXNzICs9ICcgJyArIG9wdGlvbi5zdGF0aWNDbGFzcztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBjb25zb2xlLndhcm4ocmVhZHlPcHRpb25zKVxuXG5cdHJldHVybiByZWFkeU9wdGlvbnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wdGlvbnMob3B0aW9ucywgc2hvdWxkQ2xvbmUgPSB0cnVlKVxue1xuXHRsZXQgcmVhZHlPcHRpb25zID0gbWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuXG5cdHJldHVybiBtYWtlT3B0aW9uKHJlYWR5T3B0aW9ucywgc2hvdWxkQ2xvbmUpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsb3QoY29udGV4dCwgaCwgbmFtZSwgdGFnLCBvcHRpb25zLCBkZWZhdWx0Q2hpbGRyZW4pXG57XG5cdC8vIGNvbnRleHQuX19zbG90c1xuXHRcblx0bGV0IGNoaWxkcmVuID0gZGVmYXVsdENoaWxkcmVuO1xuXG5cdGlmKGNvbnRleHQuX3Nsb3RzW25hbWVdKSB7XG5cdFx0Y2hpbGRyZW4gPSBjb250ZXh0Ll9zbG90c1tuYW1lXTtcblx0fVxuXHRcblx0aWYodGFnID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuO1xuXHR9XG5cblx0Ly8gaC5iaW5kKG51bGwpXG5cblx0bGV0IHJlbmRlciA9IGgodGFnLCBvcHRpb25zLCBjaGlsZHJlbik7XG5cblx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCByZW5kZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuXHQvLyBcdGNvbnNvbGUubG9nKHJlbmRlci5jaGlsZE5vZGVzW2ldLCByZW5kZXIuY2hpbGROb2Rlc1tpXS4kcyk7XG5cdC8vIH1cblx0XG5cblx0cmV0dXJuIHJlbmRlcjtcbn0iLCJpbXBvcnQgeyBoIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KClcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICUgMyAhPT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdGF0ZW1lbnQgc2hvdWxkIGJlIG9kZCBudW1iZXInKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cdFx0bGV0IGZvdW5kQ29uZGl0aW9uID0gZmFsc2U7XG5cdFx0Ly8gdmFsdWVcblx0XHRsZXQgY2hpbGRJbmRleCA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRsZXQgc2l6ZSA9IGFyZ3VtZW50c1tpICsgMV07XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaSArIDJdO1xuXHRcdFx0bGV0IG5vZGUgPSBudWxsO1xuXG5cdFx0XHRjb25kaXRpb24gPSB0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nID8gY29uZGl0aW9uKCkgOiBjb25kaXRpb247XG5cblx0XHRcdGlmKGNvbmRpdGlvbiAmJiAhZm91bmRDb25kaXRpb24pIHtcblx0XHRcdFx0Zm91bmRDb25kaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRub2RlID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnNvbGUud2Fybihjb25kaXRpb24sIHNpemUsIHZhbHVlLCBub2RlKTtcblx0XHRcdC8vIFBhc3MgZmFpbGVkIHN0ZXRlbWVudCBjb25kaXRpb25cblx0XHRcdC8vIE5vcm1pbGl6ZSBpbmRleCB0aGF0IHdpbGwgYmUgdXNlZCBpbiByZXBsYWNpbmcgcGxhY2Vob2xkZXIgKGJlbG93KVxuXHRcdFx0aWYobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIW5vZGUuX29ic2VydmFibGUpIHtcblx0XHRcdFx0bm9kZSA9IG5vZGUoaCk7XG5cdFx0XHR9XG5cdFx0XHQvLyByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggbm9kZVxuXHRcdFx0Ly8gQW5kIGNvcnJlY3QgaW5kZXhcblx0XHRcdGlmKHNpemUgPiAxKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZVtqXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXG5cdHJldHVybiBkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbHVlKHZhbHVlKVxue1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gdmFsdWUoKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn0iLCJpbXBvcnQgeyBhcGkgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlci9zcmMvZW1wdHknO1xuaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBvcHRpb25zIGFzIHBhcnNlT3B0aW9ucywgaCB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnQHNpbnVvdXMvbGF6eSc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdAc2ludW91cy9yZW5kZXInO1xuaW1wb3J0IGh5ZHJhdGVQcm9wcyBmcm9tICcuL3Byb3BlcnR5JztcblxubGV0IE9CU0VSVkVSO1xubGV0IFNUT1JBR0UgPSB7fTtcblxubGV0IFNVQlNDUklCRVJTID0gW107XG5cbmZ1bmN0aW9uIGFkZFN1YnNjcmliZXIoZm4pXG57XG5cdGNvbnNvbGUubG9nKGZuLCBTVUJTQ1JJQkVSUylcblx0U1VCU0NSSUJFUlMucHVzaChmbik7XG59XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVQcm9wcyhlbCwgb3B0cylcbi8vIHtcblx0Ly8gaWYoIW9wdHMuX3MpIHtcblx0Ly8gXHRyZXR1cm47XG5cdC8vIH1cblxuLy8gXHRhcGkucHJvcGVydHkoZWwsIG9wdHMsIG51bGwpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlVGFnKHBhcmVudCwgY2hpbGRyZW4sIGN1cnJlbnRJbmRleCwgdmFsdWUpXG4vLyB7XG4vLyBcdGxldCBlbCA9IGNoaWxkcmVuW2N1cnJlbnRJbmRleF07XG5cdFxuLy8gXHRsZXQgbm9kZXMgPSB2YWx1ZSgpO1xuXG4vLyBcdGlmKEFycmF5LmlzQXJyYXkobm9kZXMpKSB7XG5cbi8vIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4vLyBcdFx0XHRsZXQgY2hpbGQgPSBub2Rlc1tpXTtcbi8vIFx0XHRcdGlmKHR5cGVvZiBjaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuLy8gXHRcdFx0XHRjaGlsZCA9IGNoaWxkKCk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0XHQvLyBjb25zb2xlLmxvZyhwYXJlbnQsICBjaGlsZC5zaXplKVxuLy8gXHRcdFx0Ly8gYXBpLmluc2VydChwYXJlbnQsIGNoaWxkLCBjaGlsZHJlbltjdXJyZW50SW5kZXggKyBpXSk7XG4vLyBcdFx0XHQvLyBwYXJlbnQucmVwbGFjZUNoaWxkKGNoaWxkLCBjaGlsZHJlbltjdXJyZW50SW5kZXggKyBpXSlcbi8vIFx0XHRcdC8vIGNoaWxkcmVuW2N1cnJlbnRJbmRleCArIGldLnJlcGxhY2VXaXRoKGNoaWxkKTtcbi8vIFx0XHR9XG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0YXBpLmluc2VydChlbCwgbm9kZXMsIG51bGwpO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVDaGlsZHJlbihub2RlLCBjaGlsZHJlbilcbi8vIHtcbi8vIFx0bGV0IGJpbmRDaGlsZHJlbiA9IFtdO1xuXG4vLyBcdGlmKG5vZGUgIT09IG51bGwpIHtcbi8vIFx0XHRiaW5kQ2hpbGRyZW4gPSBmaWx0ZXJDaGlsZE5vZGVzKG5vZGUpO1xuLy8gXHR9XG5cbi8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuLy8gXHRcdGlmKGNoaWxkcmVuW2ldID09PSBfKSB7XG4vLyBcdFx0XHRjb250aW51ZTtcbi8vIFx0XHR9XG4vLyBcdFx0Ly8gY29uc29sZS5lcnJvcihiaW5kQ2hpbGRyZW5baV0sIGNoaWxkcmVuW2ldKTtcbi8vIFx0XHRoeWRyYXRlVGFnKG5vZGUsIGJpbmRDaGlsZHJlbiwgaSwgY2hpbGRyZW5baV0pO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldFNsb3ROb2RlKGVsLCBwYXRoKVxuLy8ge1xuLy8gXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbi8vIFx0XHRlbCA9IGVsLmNoaWxkTm9kZXNbcGF0aFtpXV07XG4vLyBcdH1cblxuLy8gXHRyZXR1cm4gZWw7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIGVsLCBvcHRzID0ge30sIHNsb3RzKVxuLy8ge1xuLy8gXHRpZighb3B0c1snaWQnXSkge1xuLy8gXHRcdHJldHVybjtcbi8vIFx0fVxuXG4vLyBcdC8vIGlmKG9wdHNbJ2lkJ10gPT09ICdoeWRyLTEzJykge1xuLy8gXHQvLyBcdG9wdHNbJ2lkJ10gPSAnaHlkci02Jztcbi8vIFx0Ly8gfVxuXG4vLyBcdC8vIGlmKG9wdHNbJ2lkJ10gPT09ICdoeWRyLTMwJykge1xuLy8gXHQvLyBcdG9wdHNbJ2lkJ10gPSAnaHlkci0yMSc7XG4vLyBcdC8vIH1cblxuLy8gXHRsZXQgYmluZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHsgb3B0c1snaWQnXSB9YCk7XG5cbi8vIFx0bGV0IHNsb3ROb2RlcyA9IHt9XG5cbi8vIFx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcbi8vIFx0XHRpZihjb21wb25lbnQuX3Nsb3RzUGF0aFtrZXldKSB7XG4vLyBcdFx0XHRsZXQgbm9kZSA9IGdldFNsb3ROb2RlKGJpbmROb2RlLCBjb21wb25lbnQuX3Nsb3RzUGF0aFtrZXldKVxuLy8gXHRcdFx0c2xvdE5vZGVzW2tleV0gPSBub2RlO1xuLy8gXHRcdH0gZWxzZSB7XG4vLyBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vICR7a2V5fSBzbG90IG5hbWVzcGFjZSBkZWZpbmVkYCk7XG4vLyBcdFx0fVxuLy8gXHR9XG5cbi8vIFx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG4vLyBcdFx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcbi8vIFx0XHRcdGxldCBub2RlID0gc2xvdE5vZGVzW2tleV07XG4vLyBcdFx0XHRsZXQgY2hpbGRyZW5TbG90cyA9IHNsb3RzW2tleV07XG5cdFx0XHRcbi8vIFx0XHRcdGlmKG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbi8vIFx0XHRcdFx0bm9kZSA9IFtub2RlXTtcbi8vIFx0XHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRcdG5vZGUgPSBub2RlLmNoaWxkTm9kZXM7XG4vLyBcdFx0XHR9XG5cbi8vIFx0XHRcdGlmKGNoaWxkcmVuU2xvdHMubGVuZ3RoID4gbm9kZS5sZW5ndGgpIHtcbi8vIFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTbG90IGh5ZHJhdGlvbiBsZW5ndGggbWlzbWF0Y2gnKTtcbi8vIFx0XHRcdH1cblxuLy8gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlblNsb3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFxuLy8gXHRcdFx0XHRhcGkuaW5zZXJ0KG5vZGVbaV0sIGNoaWxkcmVuU2xvdHNbaV0oKSwgbnVsbCk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0fVxuLy8gXHR9KTtcblx0XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGUoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbi8vIHtcbi8vIFx0bGV0IGJpbmROb2RlO1xuLy8gXHRjb25zb2xlLmxvZyh0aGlzLCBlbCwgb3B0cywgY2hpbGRyZW4pXG5cbi8vIFx0Ly8gaWYodGhpcy5ub2RlKSB7XG4vLyBcdC8vIFx0YmluZE5vZGUgPSB0aGlzLm5vZGU7XG4vLyBcdC8vIH1cblxuLy8gXHRpZighb3B0c1snaWQnXSkge1xuLy8gXHRcdHJldHVybjtcbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRiaW5kTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAkeyBvcHRzWydpZCddIH1gKTtcbi8vIFx0fVxuXG4vLyBcdC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuLy8gXHQvLyB0aGlzLmN0eC5fZWxfaW5kZXgrKztcblxuLy8gXHRpZihiaW5kTm9kZSA9PT0gbnVsbCkge1xuLy8gXHRcdHJldHVybjtcbi8vIFx0fVxuXHRcblx0Ly8gYXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdC8vIFx0aHlkcmF0ZVByb3BzKGJpbmROb2RlLCBvcHRzKTtcblx0Ly8gXHRoeWRyYXRlQ2hpbGRyZW4oYmluZE5vZGUsIGNoaWxkcmVuKTtcblx0Ly8gfSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbi8vIHtcbi8vIFx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcbi8vIFx0aWYoY2hpbGQuc2V0UGFyZW50KSB7XG4vLyBcdFx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG4vLyBcdH1cbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVyKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG4vLyB7XG4vLyBcdG9wdGlvbnModGhpcywgb3B0cyk7XG5cdFxuLy8gXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG4vLyBcdFx0aHlkcmF0ZS5jYWxsKHRoaXMsIGVsLCBvcHRzLCBjaGlsZHJlbik7XG4vLyBcdFx0cmV0dXJuIF87XG4vLyBcdH1cblx0XHRcbi8vIFx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0SHlkcmF0ZUNvbXBvbmVudChlbCwgb3B0cyk7XG5cbi8vIFx0Ly8gY29uc29sZS5sb2coY29tcG9uZW50LCBlbCwgb3B0cylcbi8vIFx0aWYoY29tcG9uZW50ID09PSBudWxsKSB7XG4vLyBcdFx0cmV0dXJuIF87XG4vLyBcdH1cblxuLy8gXHRyZWdpc3RlckNoaWxkcmVuKHRoaXMuY3R4LCBjb21wb25lbnQpO1xuXG4vLyBcdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuLy8gXHRcdC8vIGNvbnNvbGUud2Fybignc3RhcnQgaHlkcmF0aW9uJyk7XG4vLyBcdFx0cmV0dXJuIGNvbXBvbmVudC5oeWRyYXRlKHtcbi8vIFx0XHRcdGdldFVJRCgpIHtcbi8vIFx0XHRcdFx0cmV0dXJuIC0xO1xuLy8gXHRcdFx0fSxcbi8vIFx0XHRcdF9zbG90czogb3B0cy4kc2xvdHMsXG4vLyBcdFx0fSwgY29tcGlsZXIpO1xuLy8gXHR9XG5cbi8vIFx0aWYodHlwZW9mIG9wdHMucHJvcHMgIT09ICd1bmRlZmluZWQnKSB7XG4vLyBcdFx0Y29tcG9uZW50LnBhc3NQcm9wcyhvcHRzLnByb3BzKTtcbi8vIFx0fVxuXG4vLyBcdGlmKG9wdHMuJHNsb3RzKSB7XG4vLyBcdFx0aHlkcmF0ZVNsb3RzKGNvbXBvbmVudCwgZWwsIG9wdHMsIG9wdHMuJHNsb3RzKTtcbi8vIFx0fVxuXG4vLyBcdHJldHVybiBpbml0Q29tcG9uZW50KGNvbXBvbmVudCk7XG4vLyB9XG5cblxuXG5cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZVByb3BzKGVsLCBvcHRpb25zKVxuLy8ge1xuLy8gXHRpZihvcHRpb25zLl9zKSB7XG4vLyBcdFx0Ly8gY29uc29sZS5sb2coZWwsICdQcmVwYXJlIG9wdGlvbnMnLCBvcHRpb25zKTtcbi8vIFx0XHQvLyBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMsIGZhbHNlKTtcbi8vIFx0XHQvLyBjb25zb2xlLmxvZyhlbCwgJ1ByZXBhcmUgb3B0aW9ucyAyJywgb3B0aW9ucyk7XG4vLyBcdFx0cHJvcGVydHkoZWwsIG9wdGlvbnMpO1xuXG4vLyBcdFx0Ly8gYXBpLnN1YnNjcmliZSgoKSA9PiB7XG4vLyBcdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhlbCwgJ0NoYW5nZSBvcHRpb25zJyk7XG4vLyBcdFx0Ly8gXHRhcGkucHJvcGVydHkoZWwsIG9wdGlvbnMsIG51bGwpO1xuLy8gXHRcdC8vIH0pO1xuLy8gXHR9XG4vLyB9XG5cbmZ1bmN0aW9uIGh5ZHJhdGVIKGNvbnRleHQsIGVsLCBvcHRpb25zLCBjaGlsZHJlbilcbntcblx0aHlkcmF0ZVByb3BzKGNvbnRleHQsIGVsLCBvcHRpb25zKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0aHlkcmF0ZShjb250ZXh0LCBlbC5jaGlsZE5vZGVzW2ldLCBjaGlsZHJlbltpXSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVN0YXRlbWVudChjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRsZXQgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXHRsZXQgc3RhcnRJbmRleCA9IDA7XG5cblx0d2hpbGUoKG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZykgIT0gbnVsbClcblx0XHRzdGFydEluZGV4Kys7XG5cdFxuXHRsZXQgc3RhdGVtZW50QXJncyA9IGFyZ3MuYTtcblxuXHRmdW5jdGlvbiBoaWRlTm9kZXMoY2hpbGRyZW4sIHN0YXJ0SW5kZXgsIGxlbmd0aClcblx0e1xuXHRcdGZvciAodmFyIGogPSBzdGFydEluZGV4OyBqIDw9IGxlbmd0aDsgaisrKSB7XG5cdFx0XHRsZXQgbm9kZSA9IGNoaWxkcmVuW2pdO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2hpZGUnLCBqLCBub2RlKTtcblx0XHRcdGlmKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuQ09NTUVOVF9OT0RFKSB7XG5cdFx0XHRcdG5vZGUucmVwbGFjZVdpdGgoZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJykpO1xuXHRcdFx0fVxuXG5cdFx0XHRub2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0fVxuXHR9XG5cblx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0bGV0IGN1cnJlbnRJbmRleCA9IHN0YXJ0SW5kZXg7XG5cdFx0bGV0IGZvdW5kQ29uZGl0aW9uID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdGF0ZW1lbnRBcmdzLmxlbmd0aDsgaSs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBzdGF0ZW1lbnRBcmdzW2ldO1xuXHRcdFx0bGV0IHNpemUgPSBzdGF0ZW1lbnRBcmdzW2kgKyAxXTtcblx0XHRcdGxldCBjb21wb25lbnQgPSBzdGF0ZW1lbnRBcmdzW2kgKyAyXTtcblxuXHRcdFx0bGV0IGN1cnJlbnROb2RlID0gcGFyZW50LmNoaWxkTm9kZXNbY3VycmVudEluZGV4XTtcblxuXHRcdFx0Y29uZGl0aW9uID0gdHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmRpdGlvbigpIDogY29uZGl0aW9uO1xuXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhjdXJyZW50Tm9kZSwgY29uZGl0aW9uICYmICFmb3VuZENvbmRpdGlvbik7XG5cdFx0XHRpZihjb25kaXRpb24gJiYgIWZvdW5kQ29uZGl0aW9uKSB7XG5cdFx0XHRcdGZvdW5kQ29uZGl0aW9uID0gdHJ1ZTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3Nob3cnLCBwYXJlbnQuY2hpbGROb2Rlc1tjdXJyZW50SW5kZXhdLCBzaXplKTtcblx0XHRcdFx0aWYoY3VycmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuQ09NTUVOVF9OT0RFKSB7XG5cdFx0XHRcdFx0Ly8gIHJlbmRlclxuXHRcdFx0XHRcdGxldCBuZXdOb2RlID0gY29tcG9uZW50LnIoaC5iaW5kKGNvbnRleHQpKTtcblx0XHRcdFx0XHRjdXJyZW50Tm9kZS5yZXBsYWNlV2l0aChuZXdOb2RlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBoeWRyYXRlXG5cdFx0XHRcdFx0bWFya0FzUmVhZHkoY3VycmVudE5vZGUpO1xuXHRcdFx0XHRcdGh5ZHJhdGUoY29udGV4dCwgY3VycmVudE5vZGUsIGNvbXBvbmVudC5oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1toaWRlXScsIHBhcmVudC5jaGlsZE5vZGVzLCBjdXJyZW50SW5kZXgsIHNpemUpO1xuXHRcdFx0XHRoaWRlTm9kZXMocGFyZW50LmNoaWxkTm9kZXMsIGN1cnJlbnRJbmRleCwgc2l6ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRJbmRleCArPSBzaXplO1xuXHRcdFx0Ly8gY29uc29sZS53YXJuKGN1cnJlbnROb2RlLCBjdXJyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcpXG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKGN1cnJlbnROb2RlLCBjb25kaXRpb24sICdza2lwJyk7XG5cblx0XHRcdFxuXHRcdH1cblx0fSk7XG5cdFxufVxuXG5mdW5jdGlvbiBoeWRyYXRlTG9vcChjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRsZXQgY29uZGl0aW9uID0gYXJncy5jO1xuXHRsZXQgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0bGV0IHBhcmVudENoaWxkcmVuID0gcGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xuXG5cdG1hcChjb250ZXh0LCBhcmdzLmMsIGFyZ3MuaywgKGl0ZW0sIGtleSkgPT4ge1xuXHRcdFxuXHRcdGxldCBub2RlID0gYXJncy5yKGguYmluZChjb250ZXh0KSwgaXRlbSwga2V5KTtcblxuXHRcdHJldHVybiBub2RlO1x0XG5cdH0sIChyZWdpc3Rlckh5ZHJhdGlvbikgPT4ge1xuXHRcdGxldCBpdGVtcyA9IGFyZ3MuYygpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IG5vZGUgPSBwYXJlbnRDaGlsZHJlbltpXTtcblx0XHRcdGxldCBpdGVtID0gaXRlbXNbaV07XG5cdFx0XHRsZXQgaXRlbUtleSA9IGFyZ3MuayhpdGVtLCBpKTtcblxuXHRcdFx0aWYobm9kZSkge1xuXHRcdFx0XHRpZihub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSA9PSBpdGVtS2V5KSB7XG5cdFx0XHRcdFx0bWFya0FzUmVhZHkobm9kZSk7XG5cdFx0XHRcdFx0aHlkcmF0ZShjb250ZXh0LCBub2RlLCBhcmdzLmgoaXRlbSwgaSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJlZ2lzdGVySHlkcmF0aW9uKGl0ZW0sIGksIG5vZGUpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2cocmVnLCBpdGVtLCBpLCBub2RlKTtcblx0XHR9XG5cdH0sIG5vZGUucGFyZW50Tm9kZSk7XG5cbn1cblxuLyoqXG4gKiBNYXliZSBuZWVkIHNhbWUgaHlkcmF0aW9uIGFsZ29yaXRobSBhcyB3aXRoIHByb3BzXG4gKiBTa2lwIGZpcnN0IHRpbWUgaHlkcmF0aW9uID8/P1xuICovXG5mdW5jdGlvbiBoeWRyYXRlVGV4dChjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRpZihhcmdzLnQgPT09IF8pIHtcblx0XHRyZXR1cm47XG5cdH1cblx0XG5cdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdGFwaS5pbnNlcnQobm9kZSwgYXJncy50KCksIG51bGwpO1xuXHR9KTtcbn1cblxuXG5mdW5jdGlvbiBnZXRTbG90Tm9kZShlbCwgdGFnLCBwYXRoKVxue1xuXHRsZXQgbm9kZSA9IGVsO1xuXG5cdGZvciAodmFyIGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuXHRcdG5vZGUgPSBub2RlLmNoaWxkTm9kZXNbcGF0aFtpXV07XG5cdH1cblxuXHRyZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVTbG90cyhjb250ZXh0LCBlbCwgb3B0cyA9IHt9LCBzbG90cylcbntcblx0Ly8gcmV0dXJuO1xuXHQvLyBIeWRyYXRlIHByb3BzIG9mIG1haW4gTm9kZVxuXHQvLyBoeWRyYXRlUHJvcHMoY29udGV4dCwgZWwsIG9wdHMpO1xuXHRcblx0bGV0IGJpbmRlZE5vZGVzID0ge31cblxuXHRsZXQgc2xvdERhdGEgPSBjb250ZXh0Ll9zbG90c0RhdGE7XG5cblx0Ly8gRmluZCBzbG90IGJpbmRpbmcgbm9kZXNcblx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcblx0XHRpZihzbG90RGF0YVtrZXldKSB7XG5cdFx0XHRsZXQgbm9kZSA9IGdldFNsb3ROb2RlKGVsLCBzbG90RGF0YVtrZXldLnRhZywgc2xvdERhdGFba2V5XS5wYXRoKTtcblx0XHRcdGJpbmRlZE5vZGVzW2tleV0gPSBub2RlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vICR7a2V5fSBzbG90IG5hbWVzcGFjZSBkZWZpbmVkYCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gSHlkcmF0ZSBzbG90cyBwZXIgYmluZGVkIHRhZ1xuXHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuXHRcdGxldCBkYXRhID0gc2xvdERhdGFba2V5XTtcblx0XHRsZXQgbm9kZSA9IGJpbmRlZE5vZGVzW2tleV07XG5cdFx0bGV0IGNoaWxkcmVuU2xvdHMgPSBzbG90c1trZXldO1xuXHRcdGxldCBzdGFydE5vZGVJbmRleCA9IGRhdGEuaW5kZXg7XG5cblx0XHRpZih0eXBlb2Ygbm9kZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnNvbGUud2FybihlbCwgb3B0cywgc2xvdERhdGEsIGVsWzBdKTtcblx0XHR9XG5cblx0XHRpZihjaGlsZHJlblNsb3RzLmxlbmd0aCA+IG5vZGUubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Nsb3QgaHlkcmF0aW9uIGxlbmd0aCBtaXNtYXRjaCcpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSBzdGFydE5vZGVJbmRleDsgaSA8IGNoaWxkcmVuU2xvdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKG5vZGUuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5TbG90c1tpXSlcblx0XHRcdGh5ZHJhdGUoY29udGV4dCwgbm9kZS5jaGlsZE5vZGVzW2ldLCBjaGlsZHJlblNsb3RzW2ldKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBDb250ZXh0IHNldHVwXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbntcblx0aWYoY2hpbGQuX2Z1bmN0aW9uYWwpIHtcblx0XHRwYXJlbnQuYWRkQ2hpbGRyZW4oXyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcblx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVUYWcoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0bGV0IGVsID0gYXJncy50LFxuXHRcdG9wdHMgPSBhcmdzLm8sXG5cdFx0Y2hpbGRyZW4gPSBhcmdzLmM7XG5cblx0aWYoIVNpbnVvdXMuaGFzQ29tcG9uZW50KGVsKSkge1xuXHRcdGh5ZHJhdGVIKGNvbnRleHQsIG5vZGUsIG9wdHMsIGNoaWxkcmVuKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgY29tcG9uZW50ID0gU2ludW91cy5nZXRIeWRyYXRlQ29tcG9uZW50KGVsLCBvcHRzKTtcblxuXHRpZihjb21wb25lbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gXztcblx0fVxuXG5cdGNvbnRleHQuYWRkQ2hpbGRyZW4oY29tcG9uZW50KTtcblxuXHRpZihjb21wb25lbnQuX2Z1bmN0aW9uYWwpIHtcblx0XHRsZXQgbmV3QXJncyA9IGNvbXBvbmVudC5oeWRyYXRlKHtcblx0XHRcdF9zbG90czogb3B0cy4kc2xvdHMsXG5cdFx0fSk7XG5cblx0XHRpZihvcHRzLiRzbG90cykge1xuXHRcdFx0aHlkcmF0ZVNsb3RzKGNvbXBvbmVudCwgbm9kZSwgb3B0cywgb3B0cy4kc2xvdHMpO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUubG9nKG9wdHMpXG5cdFx0aHlkcmF0ZShjb250ZXh0LCBub2RlLCBuZXdBcmdzKTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG5cdGNvbXBvbmVudC5wYXNzT3B0aW9ucyhvcHRzKTtcblxuXHRpZihvcHRzLiRzbG90cykge1xuXHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIG5vZGUsIG9wdHMsIG9wdHMuJHNsb3RzKTtcblx0fVxuXG5cdG5vZGUuJHMgPSBjb21wb25lbnQ7XG5cdC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudCwgbm9kZSlcblxuXHRyZXR1cm4gaHlkcmF0ZShjb21wb25lbnQsIG5vZGUsIGNvbXBvbmVudC5oeWRyYXRlKGNvbXBvbmVudCkpO1xufVxuXG4vKipcbiAqIE1haW4gaHlkcmF0aW9uIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIGh5ZHJhdGUoY29udGV4dCwgbm9kZSwgYXJncyA9IG51bGwpXG57XG5cdC8vIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdGh5ZHJhdGVJZGxlKGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHQvLyB9LCB7XG5cdC8vIFx0dGltZW91dDogMCxcblx0Ly8gXHRyZWFkOiB0cnVlXG5cdC8vIH0pO1xufVxuXG5mdW5jdGlvbiBtYXJrQXNSZWFkeShub2RlKVxue1xuXHRub2RlLl9oeWRyYXRlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVJZGxlKGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGlmKGFyZ3MgPT09IG51bGwgfHwgbm9kZSA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmKGFyZ3MuX3QgPT09ICdoJykge1xuXHRcdC8vIGFyZ3Mub1snZGF0YS1oeWRyYXRlZCddID0gdHJ1ZTtcblx0XHQvLyBhcmdzLm9bJ19zJ10gPSB0cnVlO1xuXHRcdGh5ZHJhdGVUYWcoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAndCcpIHtcblx0XHRoeWRyYXRlVGV4dChjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXG5cdGlmKGFyZ3MuX3QgPT09ICdsb29wJykge1xuXHRcdGh5ZHJhdGVMb29wKGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ3N0YXRlbWVudCcpIHtcblx0XHRoeWRyYXRlU3RhdGVtZW50KGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cdFxuXHRyZXR1cm4gXztcblx0XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEh5ZHJhdGlvbihjb21wb25lbnQsIGh5ZHJhdGlvblJvb3QsIHRpbWVCZW5jaG1hcmsgPSAoKSA9PiB7fSwgY2FsbGJhY2sgPSBudWxsKVxue1xuXHRsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgKGluc3RhbmNlKSA9PiB7XG5cblx0XHR0aW1lQmVuY2htYXJrKCdIeWRyYXRpb24nKTtcblxuXHRcdGxldCB0cmVlID0gW2luc3RhbmNlXTtcblxuXHRcdFNpbnVvdXMuY2xlYXJISUQoKTtcblxuXHRcdC8vIGxldCBjb25uZWN0ZWROb2RlID0gZmlsdGVyQ2hpbGROb2RlcyhoeWRyYXRpb25Sb290KTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNvbXBvbmVudCA9IHRyZWVbaV07XG5cdFx0XHRsZXQgbm9kZSA9IGh5ZHJhdGlvblJvb3QuY2hpbGROb2Rlc1tpXTtcblx0XHRcdGxldCBoeWRyYXRpb24gPSBjb21wb25lbnQuaHlkcmF0ZShjb21wb25lbnQpO1xuXHRcdFx0XG5cdFx0XHRoeWRyYXRlKGNvbXBvbmVudCwgbm9kZSwgaHlkcmF0aW9uKTtcblx0XHR9XG5cdFx0XG5cdFx0Ly8gY29uc29sZS5sb2coaW5zdGFuY2UpO1xuXHRcdGluc3RhbmNlLmhvb2soJ21vdW50ZWQnKTtcblxuXHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjayhpbnN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0dGltZUJlbmNobWFyaygnSHlkcmF0aW9uJyk7XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH0pO1xuXG59XG5cbi8qKlxuICogRmlsdGVyIG91dCB3aGl0ZXNwYWNlIHRleHQgbm9kZXMgdW5sZXNzIGl0IGhhcyBhIG5vc2tpcCBpbmRpY2F0b3IuXG4gKlxuICogQHBhcmFtICB7Tm9kZX0gcGFyZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZmlsdGVyQ2hpbGROb2RlcyhwYXJlbnQpIHtcblx0cmV0dXJuIHBhcmVudC5jaGlsZE5vZGVzO1xuXHQvLyBjb25zb2xlLndhcm4ocGFyZW50LCBwYXJlbnQuY2hpbGROb2Rlcyk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LmNoaWxkTm9kZXMpLmZpbHRlcihcbiAgICAgICAgZWwgPT4gZWwubm9kZVR5cGUgIT09IDMgfHwgZWwuZGF0YS50cmltKCkgfHwgZWwuX25vc2tpcFxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBtYWtlQ3NzLCBtZXJnZU9wdGlvbnMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGh5ZHJhdGVQcm9wcyhjb250ZXh0LCBlbCwgb3B0aW9ucylcbntcblxuXHRvcHRpb25zID0gbWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuXG5cdGlmKCFvcHRpb25zLl9zKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHN1YnNjcmliZXJzID0gW107XG5cdGxldCBzdWJzY3JpYmVyc19maXJzdCA9IFtdO1xuXG5cdGZ1bmN0aW9uIGFkZFN1YnNjcmliZXIodmFsdWUsIGZuLCBza2lwID0gdHJ1ZSlcblx0e1xuXHRcdHN1YnNjcmliZXJzLnB1c2goe1xuXHRcdFx0dmFsdWUsXG5cdFx0XHRmbixcblx0XHR9KTtcblxuXHRcdHN1YnNjcmliZXJzX2ZpcnN0LnB1c2goc2tpcCk7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBzdHlsZXMgYW5kIGNsYXNzZXNcblx0ICovXG5cdGlmKG9wdGlvbnMuc3R5bGUgfHwgb3B0aW9ucy5jbGFzcykge1xuXHRcdC8vIGNvbnNvbGUuZXJyb3IoZWwpO1xuXHRcdGxldCBjc3NPcHRpb25zID0gbWFrZUNzcyh7fSwgb3B0aW9ucyk7XG5cblx0XHRpZihjc3NPcHRpb25zLnN0eWxlKSB7XG5cdFx0XHRhZGRTdWJzY3JpYmVyKGNzc09wdGlvbnMuc3R5bGUsIChvYmopID0+IHtcblx0XHRcdFx0Zm9yKGxldCBuYW1lIGluIG9iaikge1xuXHRcdFx0XHRcdGVsLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIG9ialtuYW1lXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmKGNzc09wdGlvbnMuY2xhc3MpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGNzc09wdGlvbnMuY2xhc3MoKSk7XG5cdFx0XHRhZGRTdWJzY3JpYmVyKGNzc09wdGlvbnMuY2xhc3MsICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhlbCwgdmFsdWUpO1xuXHRcdFx0XHRlbC5jbGFzc05hbWUgPSB2YWx1ZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRcblx0LyoqXG5cdCAqIE1ha2UgZXZlbnRzXG5cdCAqL1xuXHRpZihvcHRpb25zLm9uKSB7XG5cdFx0Zm9yKGxldCBuYW1lIGluIG9wdGlvbnMub24pIHtcblx0XHRcdGhhbmRsZUV2ZW50KGVsLCBuYW1lLCBvcHRpb25zLm9uW25hbWVdKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhdHRyaWJ1dGVzXG5cdCAqL1xuXHRpZihvcHRpb25zLmF0dHJzKSB7XG5cdFx0Zm9yKGxldCBuYW1lIGluIG9wdGlvbnMuYXR0cnMpIHtcblx0XHRcdGFkZFN1YnNjcmliZXIob3B0aW9ucy5hdHRyc1tuYW1lXSwgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXHQvKipcblx0ICogU3Vic2NyaWJlXG5cdCAqL1xuXHRpZihzdWJzY3JpYmVycy5sZW5ndGggPiAwKSB7XG5cdFx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHN1YnNjcmliZXJzW2ldLnZhbHVlKCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihzdWJzY3JpYmVyc19maXJzdFtpXSkge1xuXHRcdFx0XHRcdHN1YnNjcmliZXJzX2ZpcnN0W2ldID0gZmFsc2U7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Vic2NyaWJlcnNbaV0uZm4odmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbn1cblxuZnVuY3Rpb24gaGFuZGxlRXZlbnQoZWwsIG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGV2ZW50UHJveHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnRQcm94eSk7XG4gICAgfVxuXG4gICAgKGVsLl9saXN0ZW5lcnMgfHwgKGVsLl9saXN0ZW5lcnMgPSB7fSkpW25hbWVdID0gdmFsdWU7XG59XG5cbi8qKlxuICogUHJveHkgYW4gZXZlbnQgdG8gaG9va2VkIGV2ZW50IGhhbmRsZXJzLlxuICogQHBhcmFtIHtFdmVudH0gZSAtIFRoZSBldmVudCBvYmplY3QgZnJvbSB0aGUgYnJvd3Nlci5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBldmVudFByb3h5KGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2UudHlwZV0oZSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGRpZmYocGFyZW50LCBhLCBiLCBrZXlFeHByLCBnZXQsIGJlZm9yZSlcbntcblx0Y29uc3QgYUlkeCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgYklkeCA9IG5ldyBNYXAoKTtcblx0bGV0IGk7XG5cdGxldCBqO1xuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGFbaV0sIGkpO1xuXHRcdGFJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihiW2ldLCBpKTtcblx0XHRiSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gY29uc29sZS53YXJuKGFJZHgsIGJJZHgpO1xuXG5cdGZvciAoaSA9IGogPSAwOyBpICE9PSBhLmxlbmd0aCB8fCBqICE9PSBiLmxlbmd0aDspIHtcblx0XHR2YXIgYUVsbSA9IGFbaV0sXG5cdFx0XHRiRWxtID0gYltqXTtcblx0XHRpZiAoYUVsbSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBtb3ZlZCB0byBlYXJsaWVyIGluIHRoZSBsaXN0XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChiLmxlbmd0aCA8PSBqKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG5ldywgdGhpcyBpcyBhIGRlbGV0ZVxuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGdldChhW2ldLCBpLCAtMSkpO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYS5sZW5ndGggPD0gaSkge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBvbGQsIHRoaXMgaXMgYW4gYWRkaXRpb25cblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZ2V0KGJFbG0sIGosIDEpLCBnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlKTtcblx0XHRcdGorKztcblx0XHR9IGVsc2UgaWYgKGFFbG0gPT09IGJFbG0pIHtcblx0XHRcdC8vIE5vIGRpZmZlcmVuY2UsIHdlIG1vdmUgb25cblx0XHRcdGkrKztcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIGN1cnJlbnQgZWxlbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoaXMgZWxlbWVudCBzaG91bGQgYmVcblx0XHRcdHZhciBjdXJFbG1Jbk5ldyA9IGJJZHguZ2V0KGFFbG0pO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIHRoZSB3YW50ZWQgZWxtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhlIHdhbnRlZCBlbGVtZW50IGlzIG5vd1xuXHRcdFx0dmFyIHdhbnRlZEVsbUluT2xkID0gYUlkeC5nZXQoYkVsbSk7XG5cdFx0XHRpZiAoY3VyRWxtSW5OZXcgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBDdXJyZW50IGVsZW1lbnQgaXMgbm90IGluIG5ldyBsaXN0LCBpdCBoYXMgYmVlbiByZW1vdmVkXG5cdFx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChnZXQoYVtpXSwgaSwgLTEpKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fSBlbHNlIGlmICh3YW50ZWRFbG1Jbk9sZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIE5ldyBlbGVtZW50IGlzIG5vdCBpbiBvbGQgbGlzdCwgaXQgaGFzIGJlZW4gYWRkZWRcblx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShcblx0XHRcdFx0XHRnZXQoYkVsbSwgaiwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGluIGJvdGggbGlzdHMsIGl0IGhhcyBiZWVuIG1vdmVkXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdtb3ZlJywgYVtpXSwgJ2Zyb20nLCB3YW50ZWRFbG1Jbk9sZCwgJ3RvJywgaSlcblx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShcblx0XHRcdFx0XHRnZXQoYVt3YW50ZWRFbG1Jbk9sZF0sIHdhbnRlZEVsbUluT2xkLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGFbd2FudGVkRWxtSW5PbGRdID0gbnVsbDtcblx0XHRcdFx0aWYgKHdhbnRlZEVsbUluT2xkID4gaSArIDEpIGkrKztcblx0XHRcdFx0aisrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBiO1xufVxuIiwiaW1wb3J0IHsgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi9kaWZmLmpzJztcblxuLyoqXG4gKiBNYXAgb3ZlciBhIGxpc3Qgb2YgdW5pcXVlIGl0ZW1zIHRoYXQgY3JlYXRlIERPTSBub2Rlcy5cbiAqXG4gKiBObyBkdXBsaWNhdGVzIGluIHRoZSBsaXN0IG9mIGl0ZW1zIGlzIGEgaGFyZCByZXF1aXJlbWVudCwgdGhlIGRpZmZpbmdcbiAqIGFsZ29yaXRobSB3aWxsIG5vdCB3b3JrIHdpdGggZHVwbGljYXRlIHZhbHVlcy4gU2VlIGAuL3VuaXF1ZS5qc2AuXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGl0ZW1zIC0gRnVuY3Rpb24gb3Igb2JzZXJ2YWJsZSB0aGF0IGNyZWF0ZXMgYSBsaXN0LlxuICogQHBhcmFtICB7RnVuY3Rpb259IGV4cHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NsZWFuaW5nXVxuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcChjb250ZXh0LCBpdGVtcywga2V5RXhwciwgZXhwciwgYmVmb3JlSW5pdCA9IG51bGwsIHBhcmVudCA9IG51bGwpIHtcblx0Y29uc3QgeyByb290LCBzdWJzY3JpYmUsIHNhbXBsZSwgY2xlYW51cCB9ID0gYXBpO1xuXG5cdC8vIERpc2FibGUgY2xlYW5pbmcgZm9yIHRlbXBsYXRlcyBieSBkZWZhdWx0LlxuXHRsZXQgY2xlYW5pbmcgPSB0cnVlOy8vIWV4cHIuJHQ7XG5cblx0aWYocGFyZW50ID09PSBudWxsKSB7XG5cdFx0cGFyZW50ID0gYXBpLmgoW10pO1xuXHR9XG5cdFxuXHRjb25zdCBlbmRNYXJrID0gYXBpLmFkZChwYXJlbnQsICcnKTtcblxuXHRjb25zdCBkaXNwb3NlcnMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IG5vZGVzID0gbmV3IE1hcCgpO1xuXHRjb25zdCB0b1JlbW92ZSA9IG5ldyBTZXQoKTtcblx0Y29uc3QgZGVmYXVsdEEgPSBbXTtcblxuXHRpZihiZWZvcmVJbml0KSB7XG5cdFx0YmVmb3JlSW5pdCgoaXRlbSwga2V5LCBuKSA9PiB7XG5cdFx0XHRkZWZhdWx0QVtrZXldID0gaXRlbTtcblx0XHRcdG5vZGUoaXRlbSwga2V5LCAxLCBuKTtcblx0XHR9KVxuXHR9XG5cblx0Y29uc3QgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoYSA9PiB7XG5cdFx0Y29uc3QgYiA9IGl0ZW1zKCk7XG5cdFx0cmV0dXJuIHNhbXBsZSgoKSA9PiB7XG5cdFx0XHR0b1JlbW92ZS5jbGVhcigpO1xuXG5cdFx0XHQvLyBBcnJheS5mcm9tIHRvIG1ha2UgYSBjb3B5IG9mIHRoZSBjdXJyZW50IGxpc3QuXG5cdFx0XHRjb25zdCBjb250ZW50ID0gQXJyYXkuZnJvbShcblx0XHRcdFx0ZGlmZihlbmRNYXJrLnBhcmVudE5vZGUsIGEgfHwgZGVmYXVsdEEsIGIsIGtleUV4cHIsIG5vZGUsIGVuZE1hcmspXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRleHQuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKGksIGNvbnRleHQuX2NoaWxkcmVuW2ldLmhpZCwgY29udGV4dC5fY2hpbGRyZW5baV0uX3N0YXRlLnMxKCksIGNvbnRleHQuX2NoaWxkcmVuW2ldLl9wcm9wcy5wdClcblx0XHRcdC8vIH1cblx0XHRcdHRvUmVtb3ZlLmZvckVhY2goZGlzcG9zZSk7XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9KTtcblx0fSk7XG5cblx0Y2xlYW51cCh1bnN1YnNjcmliZSk7XG5cdGNsZWFudXAoZGlzcG9zZUFsbCk7XG5cblx0ZnVuY3Rpb24gbm9kZShpdGVtLCBrZXksIGksIGVsID0gbnVsbCkge1xuXHRcdGlmIChpdGVtID09IG51bGwpIHJldHVybjtcblxuXHRcdGxldCBub2RlS2V5ID0ga2V5RXhwcihpdGVtLCBrZXkpO1xuXG5cdFx0bGV0IG4gPSBub2Rlcy5nZXQobm9kZUtleSk7XG5cdFx0aWYgKGkgPT09IDEpIHtcblx0XHRcdHRvUmVtb3ZlLmRlbGV0ZShpdGVtKTtcblxuXHRcdFx0aWYgKCFuKSB7XG5cdFx0XHRcdG4gPSBjbGVhbmluZyA/XG5cdFx0XHRcdFx0cm9vdChkaXNwb3NlID0+IHtcblx0XHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQobm9kZUtleSwgZGlzcG9zZSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWwgPyBlbCA6IGV4cHIoaXRlbSwga2V5KTtcblx0XHRcdFx0XHR9KSA6XG5cdFx0XHRcdFx0KGVsID8gZWwgOiBleHByKGl0ZW0sIGtleSkpO1xuXG5cdFx0XHRcdGlmIChuLm5vZGVUeXBlID09PSAxMSkgbiA9IG4uZmlyc3RDaGlsZDtcblxuXHRcdFx0XHRub2Rlcy5zZXQobm9kZUtleSwgbik7XG5cblx0XHRcdFx0Ly8gY29uc29sZS53YXJuKGBbY3JlYXRlICgke25vZGVLZXl9KV1gLCBuKTtcblx0XHRcdFx0aWYobi4kcykge1xuXHRcdFx0XHRcdG4uJHMuaG9vaygnbW91bnRlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGNvbnRleHQuX2NoaWxkcmVuW2tleV0uaG9vaygnbW91bnRlZCcpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoaSA9PT0gLTEpIHtcblx0XHRcdC8vIGNvbnNvbGUud2FybihgW3JlbW92ZSAoJHtub2RlS2V5fSldYCwgbiwgbi5wYXJlbnROb2RlKTtcblx0XHRcdGlmKG4uJHMpIHtcblx0XHRcdFx0bi4kcy5ob29rKCd1bm1vdW50ZWQnKTtcblx0XHRcdH1cblxuXHRcdFx0dG9SZW1vdmUuYWRkKG5vZGVLZXkpO1xuXHRcdFx0Ly8gY29udGV4dC5yZW1vdmVDaGlsZChrZXkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGlzcG9zZUFsbCgpIHtcblx0XHRkaXNwb3NlcnMuZm9yRWFjaChkID0+IGQoKSk7XG5cdFx0ZGlzcG9zZXJzLmNsZWFyKCk7XG5cdFx0bm9kZXMuY2xlYXIoKTtcblx0XHR0b1JlbW92ZS5jbGVhcigpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGlzcG9zZShpdGVtKSB7XG5cdFx0bGV0IGRpc3Bvc2VyID0gZGlzcG9zZXJzLmdldChpdGVtKTtcblx0XHRpZiAoZGlzcG9zZXIpIHtcblx0XHRcdGRpc3Bvc2VyKCk7XG5cdFx0XHRkaXNwb3NlcnMuZGVsZXRlKGl0ZW0pO1xuXHRcdH1cblx0XHRub2Rlcy5kZWxldGUoaXRlbSk7XG5cdH1cblxuXHRyZXR1cm4gcGFyZW50O1xufVxuIiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBoeWRyYXRlIH0gZnJvbSAnQHNpbnVvdXMvaHlkcmF0aW9uJztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ0BzaW51b3VzL3JlbmRlcic7XG5cbi8vIGltcG9ydCB7IGFwaSB9IGZyb20gJ3NpbnVvdXMnO1xuLy8gaW1wb3J0IHsgb2JzZXJ2YWJsZSB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudC9zcmMvb2JzZXJ2YWJsZSc7XG4vLyBpbXBvcnQgdGVzdCBmcm9tICcuLi9jb21wb25lbnRzL3Rlc3Quc2luJ1xuLy8gaW1wb3J0IHRlc3QyIGZyb20gJy4uL2NvbXBvbmVudHMvdGVzdDIuc2luJ1xuaW1wb3J0IGJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3NidXR0b24uc2luJ1xuLy8gaW1wb3J0IEluZGV4UGFnZSBmcm9tICcuLi9wYWdlcy9pbmRleC5zaW4nXG5pbXBvcnQgdGltZUJlbmNobWFyayBmcm9tICcuL3RpbWUnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYWdlSW5kZXhcIiAqLyAnLi4vcGFnZXMvaW5kZXguc2luJylcblxuXG52YXIgTEFZT1VUO1xudmFyIFBhZ2VJbmRleCwgUGFnZUluZGV4MjtcblxuZnVuY3Rpb24gVEVTVF9XRUJQQUNLX0JVSUxEKClcbntcblx0dGltZUJlbmNobWFyaygnU1NSLUJ1aWxkJyk7XG5cdC8vIFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQodGVzdCk7XG5cdC8vIFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQodGVzdDIpO1xuXHRTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KGJ1dHRvbik7XG5cdHRpbWVCZW5jaG1hcmsoJ1NTUi1CdWlsZCcpO1xufVxuXG4vLyBmdW5jdGlvbiBURVNUX0lOSVQoKVxuLy8ge1xuLy8gXHR0aW1lQmVuY2htYXJrKCdTU1ItSW5pdCcpO1xuLy8gXHRQYWdlSW5kZXggPSBuZXcgSW5kZXhQYWdlKCk7XG4vLyBcdFBhZ2VJbmRleDIgPSBuZXcgSW5kZXhQYWdlKCk7XG4vLyBcdHRpbWVCZW5jaG1hcmsoJ1NTUi1Jbml0Jyk7XG4vLyB9XG5cbmZ1bmN0aW9uIFRFU1RfUkVOREVSKClcbntcblx0cmVuZGVyKEluZGV4UGFnZSwgTEFZT1VULCB0aW1lQmVuY2htYXJrLCAoYykgPT4ge1xuXHRcdFBhZ2VJbmRleCA9IGM7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBDTEVBUl9IT09LUygpXG57XG5cdGxldCBodG1sID0gTEFZT1VULmlubmVySFRNTDtcblx0TEFZT1VULmlubmVySFRNTCA9IGh0bWw7XG5cdFBhZ2VJbmRleC5ob29rKCd1bm1vdW50ZWQnKTtcbn1cblxuZnVuY3Rpb24gVEVTVF9IWURSQVRFKClcbntcblx0aHlkcmF0ZShJbmRleFBhZ2UsIExBWU9VVCwgdGltZUJlbmNobWFyayk7XG59XG5cblRFU1RfV0VCUEFDS19CVUlMRCgpO1xuXG4vLyBURVNUX0lOSVQoKTtcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsb2FkKTtcbi8vIHJldHVybjtcbihmdW5jdGlvbiBsb2FkKCkge1xuXHRMQVlPVVQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cblxuXHQvLyBsZXQgZCA9IG9ic2VydmFibGUoMSk7XG5cdC8vIGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHQvLyBcdGNvbnNvbGUubG9nKCdbc2JdJywgZCgpKTtcblx0Ly8gfSlcblx0Ly8gZCgyKTtcblx0Ly8gcmV0dXJuO1xuXG5cblx0Ly8gVEVTVF9IWURSQVRFKCk7XG5cdC8vIHJldHVybjtcblxuXG5cdFRFU1RfUkVOREVSKCk7XG5cdC8vIGNvbnNvbGUubG9nKExBWU9VVC5pbm5lckhUTUwpXG5cdC8vIHJldHVyblxuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXG5cdFx0Q0xFQVJfSE9PS1MoKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0IFRFU1RfSFlEUkFURSgpO1xuXHRcdH0sIDMwMCk7XG5cdH0sIDEwMDApO1xufSkoKTtcbiIsImxldCB0aW1lcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKG5hbWUpXG57XG5cdGxldCBub3cgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRpZih0eXBlb2YgdGltZXNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGltZXNbbmFtZV0gPSBub3c7XG5cdFx0cmV0dXJuIHRpbWVzW25hbWVdO1xuXHR9XG5cblx0Y29uc29sZS5sb2coYFsgdGIgJHtuYW1lfSBdYCwgbm93IC0gdGltZXNbbmFtZV0sICdtcycpO1xuXG5cdGRlbGV0ZSB0aW1lc1tuYW1lXTtcbn0iXSwic291cmNlUm9vdCI6IiJ9