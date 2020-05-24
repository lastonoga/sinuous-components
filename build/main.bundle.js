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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uLnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NidXR0b24uc2luP2NlNzkiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYmFzaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9keW5hbWljLmpzIiwid2VicGFjazovLy8uLi9zcmMvaC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL29ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9vcHRpb25zLmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWFwL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci10ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aW1lLmpzIl0sIm5hbWVzIjpbIl8iLCJISUQiLCJCYXNpYyIsIm9ic2VydmFibGUiLCJkZWZhdWx0IiwiY29tcHV0ZWQiLCJuYW1lIiwiY2hpbGRyZW4iLCJjaGlsZCIsInBhcmVudCIsInByb3AiLCJ2YWx1ZSIsInR5cGUiLCJwcm9wcyIsImkiLCJjdHgiLCJoIiwic3RhdGVtZW50IiwibG9vcCIsInNsb3QiLCJkIiwiZHluYW1pYyIsImMiLCJTaW51b3VzIiwiZWwiLCJ0YWciLCJvcHRzIiwiZHluYW1pY0F0dHJzIiwicmVhZHlPcHRpb25zIiwiY29tcG9uZW50Iiwib3B0aW9ucyIsIl9zbG90cyIsIiRzbG90cyIsIm5vZGUiLCJmbiIsImJpbmRpbmciLCJ2IiwibWFrZU9ic2VlcnZhYmxlIiwic3RyIiwiYXJndW1lbnRzIiwiQXJyYXkiLCJhcmdUb1N0cmluZyIsInkiLCJvYmoiLCJyZWFkeVN0eWxlcyIsIm1ha2VTdHlsZVByb3AiLCJjbG9uZU9wdGlvbnMiLCJjbGFzc2VzIiwic3R5bGVzIiwic2hvdWxkQ2xvbmUiLCJyZWFkeU9wdGlvbiIsIm9wdGlvbiIsIm1ha2VDc3MiLCJBc3NpZ25PYmplY3RPcHRpb25zIiwiQXNzaWduVmFsdWVPcHRpb25zIiwic2hvdWxkQmVNZXJnZWQiLCJrZXlzIiwiT2JqZWN0IiwiaiIsIm1lcmdlT3B0aW9ucyIsIm1ha2VPcHRpb24iLCJjb250ZXh0IiwicmVuZGVyIiwicmVzdWx0IiwiZm91bmRDb25kaXRpb24iLCJjaGlsZEluZGV4IiwiY29uZGl0aW9uIiwic2l6ZSIsImRvY3VtZW50IiwiU1RPUkFHRSIsIlNVQlNDUklCRVJTIiwiY29uc29sZSIsImh5ZHJhdGUiLCJzdGFydEluZGV4Iiwic3RhdGVtZW50QXJncyIsImFyZ3MiLCJOb2RlIiwiYXBpIiwiY3VycmVudEluZGV4IiwiY3VycmVudE5vZGUiLCJuZXdOb2RlIiwibWFya0FzUmVhZHkiLCJoaWRlTm9kZXMiLCJwYXJlbnROb2RlIiwicGFyZW50Q2hpbGRyZW4iLCJpdGVtcyIsIml0ZW0iLCJpdGVtS2V5IiwicmVnaXN0ZXJIeWRyYXRpb24iLCJwYXRoIiwiYmluZGVkTm9kZXMiLCJzbG90RGF0YSIsImdldFNsb3ROb2RlIiwiZGF0YSIsImNoaWxkcmVuU2xvdHMiLCJzbG90cyIsInN0YXJ0Tm9kZUluZGV4IiwiaHlkcmF0ZUgiLCJuZXdBcmdzIiwiaHlkcmF0ZVNsb3RzIiwiaHlkcmF0ZUlkbGUiLCJoeWRyYXRlVGFnIiwiaHlkcmF0ZVRleHQiLCJoeWRyYXRlTG9vcCIsImh5ZHJhdGVTdGF0ZW1lbnQiLCJ0aW1lQmVuY2htYXJrIiwiY2FsbGJhY2siLCJ0cmVlIiwiaHlkcmF0aW9uUm9vdCIsImh5ZHJhdGlvbiIsImluc3RhbmNlIiwic3Vic2NyaWJlcnMiLCJzdWJzY3JpYmVyc19maXJzdCIsInNraXAiLCJjc3NPcHRpb25zIiwiYWRkU3Vic2NyaWJlciIsImhhbmRsZUV2ZW50IiwiZSIsIlNpbnVvdXNDb21wb25lbnRzIiwiY3JlYXRlSElEIiwiY2xlYXJISUQiLCJyZWdpc3RlckNvbXBvbmVudCIsImhhc0NvbXBvbmVudCIsImdldEh5ZHJhdGVDb21wb25lbnQiLCJnZXRDb21wb25lbnRJbnN0YW5jZSIsImdldENvbXBvbmVudCIsIm1vZHVsZSIsImxheW91dCIsImFJZHgiLCJiSWR4IiwiYSIsImtleSIsImtleUV4cHIiLCJiIiwiYUVsbSIsImJFbG0iLCJnZXQiLCJjdXJFbG1Jbk5ldyIsIndhbnRlZEVsbUluT2xkIiwiYmVmb3JlSW5pdCIsInJvb3QiLCJzdWJzY3JpYmUiLCJzYW1wbGUiLCJjbGVhbnVwIiwiY2xlYW5pbmciLCJlbmRNYXJrIiwiZGlzcG9zZXJzIiwibm9kZXMiLCJ0b1JlbW92ZSIsImRlZmF1bHRBIiwidW5zdWJzY3JpYmUiLCJjb250ZW50Iiwibm9kZUtleSIsIm4iLCJleHByIiwiZGlzcG9zZXIiLCJJbmRleFBhZ2UiLCJMQVlPVVQiLCJQYWdlSW5kZXgiLCJQYWdlSW5kZXgyIiwiVEVTVF9XRUJQQUNLX0JVSUxEIiwiYnV0dG9uIiwiVEVTVF9SRU5ERVIiLCJDTEVBUl9IT09LUyIsImh0bWwiLCJpbm5lckhUTUwiLCJob29rIiwiVEVTVF9IWURSQVRFIiwibG9hZCIsImdldEVsZW1lbnRCeUlkIiwic2V0VGltZW91dCIsInRpbWVzIiwidGltZSIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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SyxDQUFDckssSUFBRCxDQUFMLEdBQWN1SyxHQUFkO0FBQ0EsV0FBT0YsS0FBSyxDQUFDckssSUFBRCxDQUFaO0FBQ0E7O0FBRURpRSxTQUFPLENBQUN5RyxHQUFSLFdBQW9CMUssSUFBcEIsU0FBOEJ1SyxHQUFHLEdBQUdGLEtBQUssQ0FBQ3JLLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPcUssS0FBSyxDQUFDckssSUFBRCxDQUFaO0FBQ0EsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wicGFnZUluZGV4XCI6XCJwYWdlSW5kZXhcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuYnVuZGxlLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXHRcdGltcG9ydCBjb21wb25lbnRDb25maWcgZnJvbSBcIi4vc2J1dHRvbi5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFNidXR0b24oKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnU2J1dHRvbic7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSB7XCJkZWZhdWx0XCI6e1wicGF0aFwiOlswLDFdLFwidGFnXCI6XCJkaXZcIixcImluZGV4XCI6MH19O1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kcyA9IE9iamVjdC5rZXlzKGNvbmZpZy5tZXRob2RzKTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2Z1bmN0aW9uYWwgPSBmYWxzZTtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcpIHtcblx0XHRcdGlmKHR5cGVvZiBjb25maWdba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcubWV0aG9kcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWcubWV0aG9kc1trZXldXG5cdFx0fVxuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3Byb3BzID0ge307XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLnByb3BzKSB7XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19wcm9wc1trZXldID0gY29uZmlnLnByb3BzW2tleV1cblx0XHR9XG5cdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcmVuZGVyID0gZnVuY3Rpb24oaCwgeyBjdHgsIGNvbXBvbmVudHMsIHJlbmRlciwgc3RhdGVtZW50LCBzbG90LCBsb29wLCBkLCBjIH0pIHtcblx0XHRcdFx0cmV0dXJuIGgoXG4gIFwiZGl2XCIsXG4gIFtcbiAgICBjdHgub3B0aW9ucyxcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjE1cHhcIixcbiAgICAgIH0sXG4gICAgICBjbGFzczogXCJuZXctYnV0dG9uXCIsXG4gICAgICBzdHlsZTogW3sgY29sb3I6IGN0eC5fY29tcHV0ZWQudGVzdENvbG9yIH1dLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGN0eC5jbGljayxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgICgpID0+IHtcbiAgICAgIHJldHVybiBgJHtjdHguX3N0YXRlLnMxKCl9YDtcbiAgICB9LFxuICAgIHNsb3QoXG4gICAgICBjdHgsXG4gICAgICBoLFxuICAgICAgXCJkZWZhdWx0XCIsXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJzXCIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtgRGVmYXVsdCBidXR0b24gdGV4dGBdXG4gICAgKSxcbiAgXVxuKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoKSB7XG5cdFx0XHRcdGxldCBjdHggPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4ge1xuICBfdDogXCJoXCIsXG4gIHQ6IFwiZGl2XCIsXG4gIG86IFtcbiAgICBjdHgub3B0aW9ucyxcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgIGNsYXNzOiBcIm5ldy1idXR0b25cIixcbiAgICAgIHN0eWxlOiBbeyBjb2xvcjogY3R4Ll9jb21wdXRlZC50ZXN0Q29sb3IgfV0sXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogY3R4LmNsaWNrLFxuICAgICAgfSxcbiAgICAgIF9zOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGM6IFtcbiAgICB7XG4gICAgICBfdDogXCJ0XCIsXG4gICAgICB0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtjdHguX3N0YXRlLnMxKCl9YDtcbiAgICAgIH0sXG4gICAgfSxcbiAgICAtMSxcbiAgXSxcbn07XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBwcm9wMToge1xuICAgICAgdHlwZTogXCJOdW1iZXJcIixcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDk7XG4gICAgICB9XG4gICAgfSxcbiAgICBwdDoge1xuICAgICAgdHlwZTogXCJOdW1iZXJcIixcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWVyOiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBzdGF0ZShvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHMxOiBvKHRoaXMucmFuZG9tKDEsIDEwMCkpXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZChvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlc3RDb2xvcjogbygoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZS5zMSgpICUgMiA9PT0gMCA/ICdyZWQnIDogJ2dyZWVuJztcbiAgICAgIH0pLFxuICAgICAgdGVzdENsYXNzOiBvKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZWQ6IHRoaXMuX3N0YXRlLnMxKCkgJSAyID09PSAwXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHJhbmRvbTogZnVuY3Rpb24gKHMsIGUpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlKSArIHM7XG4gICAgfSxcbiAgICBjbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgYWxlcnQodGhpcy5fc3RhdGUuczEoKSk7XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGlyZWN0aW9uID0gMTsgLy8gY29uc29sZS5sb2coJ2NyZWF0ZWQnLCB0aGlzLmhpZCwgJ3dpdGggczEgPScsIHMxKTtcblxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMSh0aGlzLl9zdGF0ZS5zMSgpICsgMSk7IC8vTWF0aC5yYW5kb20oMCwgMTAwKVxuICAgICAgfSwgMjAwMCk7IC8vIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgLy8gXHQvLyBjb25zb2xlLmxvZygnaW50ZXJ2YWwnLCB0aGlzLmhpZCk7XG4gICAgICAvLyBcdGlmKHMxID4gNDApIHtcbiAgICAgIC8vIFx0XHRkaXJlY3Rpb24gPSAtNTtcbiAgICAgIC8vIFx0fSBlbHNlIGlmKHMxIDwgMTApIHtcbiAgICAgIC8vIFx0XHRkaXJlY3Rpb24gPSA1O1xuICAgICAgLy8gXHR9XG4gICAgICAvLyBcdHMxICs9IGRpcmVjdGlvblxuICAgICAgLy8gfSwgMTAwMClcbiAgICB9LFxuICAgIHVubW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3VubW91bnRlZCcsIHRoaXMuaGlkKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fZGF0YS50aW1lcik7XG4gICAgfVxuICB9XG59OyIsImV4cG9ydCBjb25zdCBfID0gLTE7XG4iLCJpbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcbmltcG9ydCB7IF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlci9zcmMvZW1wdHknO1xuXG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCB9IGZyb20gJy4vb2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IHN0YXRlbWVudCwgZHluYW1pYywgbG9vcCwgc2xvdCB9IGZyb20gJy4vaW5kZXgnO1xuXG5pbXBvcnQgeyBoIH0gZnJvbSAnLi8nO1xuXG4vLyBpbXBvcnQgeyByZW5kZXIsIGh5ZHJhdGUgfSBmcm9tICcuL3RlbXBsYXRlJztcbmxldCBISUQgPSAwO1xuXG5cbnZhciBCYXNpYyA9IGZ1bmN0aW9uICgpIHtcblxuXHRmdW5jdGlvbiBCYXNpYygpXG5cdHtcblx0XHR0aGlzLl9pc0NvbXBvbmVudCA9IHRydWU7XG5cdFx0dGhpcy5oaWQgPSArK0hJRDtcblx0XHR0aGlzLiRlbCA9IG51bGw7XG5cblx0XHR0aGlzLl9wcm9wcyA9IHt9O1xuXHRcdHRoaXMuX3Bhc3NlZFByb3BzID0ge307XG5cblx0XHQvLyBMb2NhbCBkYXRhXG5cdFx0dGhpcy5fZGF0YSA9IHRoaXMuZGF0YSgpO1xuXHRcdC8vIFN0YXRlZnVsIGRhdGFcblx0XHR0aGlzLl9zdGF0ZSA9IHRoaXMuc3RhdGUob2JzZXJ2YWJsZSk7XG5cdFx0Ly8gc2xvdHNcblx0XHR0aGlzLl9zbG90cyA9IHtcblx0XHRcdGRlZmF1bHQ6IFtdLFxuXHRcdH07XG5cdFx0Ly8gaG9va3Ncblx0XHR0aGlzLl9ob29rcyA9IFtdO1xuXG5cdFx0dGhpcy5fY29tcHV0ZWQgPSB0aGlzLmNvbXB1dGVkKGNvbXB1dGVkKTtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXHRcdHRoaXMuX2VsX2luZGV4ID0gMDtcblx0XHR0aGlzLm9wdGlvbnMgPSBudWxsO1xuXG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblxuXHRcdC8vIERlZmF1bHQgcHJvcCB2YWx1ZXMgXG5cdFx0Ly8gdGhpcy5pbml0UHJvcHMoKTtcblxuXHRcdC8vIHRoaXMuaW5pdFRlbXBsYXRlKCk7XG5cblx0XHR0aGlzLnNldENoaWxkcmVuKCk7XG5cdFx0dGhpcy5zZXRQYXJlbnQoKTtcblxuXHRcdHRoaXMuYmluZENvbnRleHQoKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmJpbmRDb250ZXh0ID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fY29tcHV0ZWQpIHtcblx0XHRcdHRoaXMuX2NvbXB1dGVkW2tleV0gPSB0aGlzLl9jb21wdXRlZFtrZXldLmJpbmQodGhpcyk7XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fbWV0aG9kcykge1xuXHRcdFx0bGV0IG5hbWUgPSB0aGlzLl9tZXRob2RzW2tleV07XG5cdFx0XHR0aGlzW25hbWVdID0gdGhpc1tuYW1lXS5iaW5kKHRoaXMpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQ29uZmlnXG5cdCAqL1xuXG5cdC8vIEJhc2ljLnByb3RvdHlwZS5zZXRNZXRob2RzID0gZnVuY3Rpb24obWV0aG9kcyA9IHt9KVxuXHQvLyB7XG5cdC8vIFx0dGhpcy5fbWV0aG9kcyA9IG1ldGhvZHM7XG5cdC8vIH1cblxuXHQvKipcblx0ICogSGllcmFyY2h5XG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5zZXRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkcmVuID0gW10pXG5cdHtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuYWRkQ2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZClcblx0e1xuXHRcdGlmKGNoaWxkLl9mdW5jdGlvbmFsKSB7XG5cdFx0XHRjaGlsZCA9IF87XG5cdFx0fVxuXG5cdFx0dGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cblx0XHRpZihjaGlsZC5zZXRQYXJlbnQpIHtcblx0XHRcdGNoaWxkLnNldFBhcmVudCh0aGlzKTtcblx0XHR9XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUucmVtb3ZlQ2hpbGQgPSBmdW5jdGlvbihpbmRleClcblx0e1xuXHRcdHRoaXMuX2NoaWxkcmVuW2luZGV4XS5ob29rKCd1bm1vdW50ZWQnKTtcblx0XHR0aGlzLl9jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLnNldFBhcmVudCA9IGZ1bmN0aW9uKHBhcmVudCA9IG51bGwpXG5cdHtcblx0XHR0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblx0LyoqXG5cdCAqIFByb3BzXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5wcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmluaXRQcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX3Byb3BzKVxuXHRcdHtcblx0XHRcdGxldCBwcm9wID0gdGhpcy5fcHJvcHNba2V5XTtcblx0XHRcdGxldCB2YWx1ZSA9IG51bGw7XG5cdFx0XHRsZXQgdHlwZSA9IG51bGw7XG5cblx0XHRcdGlmKHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdC8vIHR5cGVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlID0gcHJvcC5kZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2RhdGFba2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NTbG90cyA9IGZ1bmN0aW9uKG5hbWUsIHNsb3RzKVxuXHR7XG5cdFx0dGhpcy5fc2xvdHNbbmFtZV0gPSBzbG90cztcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5wYXNzT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpXG5cdHtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NQcm9wcyA9IGZ1bmN0aW9uKHByb3BzKVxuXHR7XG5cdFx0aWYoIXByb3BzKSB7XG5cdFx0XHRwcm9wcyA9IHt9O1xuXHRcdH1cblxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX19wcm9wcylcblx0XHR7XG5cdFx0XHRsZXQgdmFsdWUgPSB0aGlzLl9fcHJvcHNba2V5XS5kZWZhdWx0KCk7XG5cdFx0XHRpZihwcm9wc1trZXldKSB7XG5cdFx0XHRcdHZhbHVlID0gcHJvcHNba2V5XTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fcHJvcHNba2V5XSA9IHZhbHVlO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIExvY2FsIGNvbXBvbmVudCBkYXRhXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuY29tcHV0ZWQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHQvKipcblx0ICogU3RhdGVmdWwgZGF0YVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuc3RhdGUgPSBmdW5jdGlvbihvKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIDEuIENyZWF0ZSBjaGlsZCBjb21wb25lbnRzIChkaWZmZXJlbnQgY29udGV4dClcblx0ICogMi4gUGFzcyBwcm9wc1xuXHQgKiAzLiBSZW5kZXJcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24oKSB7fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5jaGlsZENvbXBvbmVudHMgPSBmdW5jdGlvbigpIHt9XG5cblx0LyoqXG5cdCAqICBMaWZlIGN5Y2xlIGhvb2tzXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuaG9vayA9IGZ1bmN0aW9uKHR5cGUgPSAnbW91bnRlZCcpXG5cdHtcblx0XHRpZighdGhpcy5faG9va3MuaW5jbHVkZXModHlwZSkpIHtcblx0XHRcdHRoaXMuX2hvb2tzLnB1c2godHlwZSk7XG5cdFx0fVxuXG5cdFx0aWYodGhpc1t0eXBlXSkge1xuXHRcdFx0dGhpc1t0eXBlXS5jYWxsKHRoaXMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMuX2NoaWxkcmVuW2ldID09PSBfIHx8IHRoaXMuX2NoaWxkcmVuW2ldLl9ob29rcy5pbmNsdWRlcyh0eXBlKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYoIXRoaXMuX2NoaWxkcmVuW2ldLl9mdW5jdGlvbmFsKSB7XG5cdFx0XHRcdHRoaXMuX2NoaWxkcmVuW2ldLmhvb2sodHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUubW91bnRlZCA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUudW5tb3VudGVkID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiBQcml2YXRlIEFQSSBmb3IgcmVuZGVyIGFuZCBoeWRyYXRlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHggPSBudWxsKVxuXHR7XG5cdFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdFx0XHRjdHggPSB0aGlzO1xuXHRcdH1cblxuXHRcdGguYmluZChjdHgpO1xuXG5cdFx0dGhpcy4kZWwgPSBjdHguX19yZW5kZXIoaC5iaW5kKGN0eCksIHtcblx0XHRcdGN0eCxcblx0XHRcdHN0YXRlbWVudCxcblx0XHRcdGxvb3AsXG5cdFx0XHRzbG90LFxuXHRcdFx0ZDogZHluYW1pYyxcblx0XHRcdGM6IGNvbXB1dGVkLFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuJGVsO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaHlkcmF0ZSA9IGZ1bmN0aW9uKGN0eCA9IG51bGwpXG5cdHtcblx0XHRpZihjdHggPT09IG51bGwpIHtcblx0XHRcdGN0eCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aC5iaW5kKGN0eCk7XG5cblx0XHRyZXR1cm4gY3R4Ll9faHlkcmF0ZShoKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblxuXHQvLyBCYXNpYy5wcm90b3R5cGUudGVtcGxhdGVCdWlsZGVyID0gZnVuY3Rpb24oaCwgb3B0cylcblx0Ly8ge1xuXHQvLyBcdHJldHVybiB0aGlzW2BfXyR7IG9wdHMucmVuZGVyIH1gXShoLCBvcHRzKTtcblx0Ly8gfVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmNvbXBvbmVudCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLmdldFVJRCA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0cmV0dXJuIGBoeWRyLSR7IFNpbnVvdXMuY3JlYXRlSElEKGluZGV4KSB9YDtcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKFwibmFtZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTsgfSk7XG5cblx0cmV0dXJuIEJhc2ljO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNpYztcbiIsImltcG9ydCB7IGgsIGhzLCBhcGkgfSBmcm9tICdzaW51b3VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYyhoLCB0YWcsIG9wdHMsIGNoaWxkcmVuKVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBlbCA9IHRhZygpO1xuXHRcdHJldHVybiBoKGVsLCBvcHRzLCBjaGlsZHJlbik7XG5cdH07XG5cbn0iLCJpbXBvcnQgeyBoIGFzIGhzIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcbmltcG9ydCB7IG9wdGlvbnMsICB9IGZyb20gJy4vJztcbmltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuXG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbntcblx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcblx0aWYoY2hpbGQuc2V0UGFyZW50KSB7XG5cdFx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaChlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxue1xuXHRlbCA9IGVsLnRvTG93ZXJDYXNlKCk7XG5cdC8vIGVsID0gY29tcHV0ZWQoKCkgPT4gKHR5cGVvZiBlbCA9PT0gJ2Z1bmN0aW9uJyA/IGVsIDogZWwpKTtcblxuXHQvLyBjb25zb2xlLmxvZygnWyBGRiBdJywgZWwsIHRoaXMpXG5cdGxldCBkeW5hbWljQXR0cnMgPSBmYWxzZTtcblxuXHRsZXQgcmVhZHlPcHRpb25zID0gb3B0aW9ucyhvcHRzKTtcblx0Ly8gSWYgSFRNTCB0YWcgcmVuZGVyXG5cdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcblx0XHRyZXR1cm4gaHMoZWwsIHJlYWR5T3B0aW9ucywgY2hpbGRyZW4pO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0Q29tcG9uZW50KGVsKTtcblxuXHQvLyBjb25zb2xlLmxvZyh0aGlzKVxuXHRpZih0aGlzKSB7XG5cdFx0dGhpcy5hZGRDaGlsZHJlbihjb21wb25lbnQpO1xuXHR9XG5cblx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudC5yZW5kZXIoe1xuXHRcdFx0b3B0aW9uczogb3B0cyxcblx0XHRcdF9zbG90czogcmVhZHlPcHRpb25zLiRzbG90cyxcblx0XHR9KTtcblx0fVxuXG5cdC8vIGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuXHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHQvLyB9XG5cblx0Zm9yKGxldCBrZXkgaW4gb3B0cy4kc2xvdHMpIHtcblx0XHRjb21wb25lbnQucGFzc1Nsb3RzKGtleSwgb3B0cy4kc2xvdHNba2V5XSk7XHRcblx0fVxuXG5cdGNvbXBvbmVudC5wYXNzT3B0aW9ucyhvcHRzKTtcblxuXHRsZXQgbm9kZSA9IGNvbXBvbmVudC5yZW5kZXIoKTtcblxuXHRub2RlLiRzID0gY29tcG9uZW50O1xuXG5cdHJldHVybiBub2RlO1xufSIsImltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICdAc2ludW91cy9sYXp5JztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4vbWFwJztcblxuZnVuY3Rpb24gcmVuZGVyKGNvbXBvbmVudCwgbGF5b3V0LCB0aW1lQmVuY2htYXJrID0gKCkgPT4ge30sIGNhbGxiYWNrID0gbnVsbCkge1xuXG4gICAgbGF5b3V0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgbG9hZENvbXBvbmVudChjb21wb25lbnQsIChpbnN0YW5jZSkgPT4ge1xuXG4gICAgXHR0aW1lQmVuY2htYXJrKCdSZW5kZXInKTtcblxuXHRcdGxheW91dC5hcHBlbmQoaW5zdGFuY2UucmVuZGVyKCkpO1xuXHRcdGluc3RhbmNlLmhvb2soJ21vdW50ZWQnKTtcblxuXHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjayhpbnN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0dGltZUJlbmNobWFyaygnUmVuZGVyJyk7XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH0pO1xufVxuXG5leHBvcnQgeyByZW5kZXIsIG1hcCB9OyIsImltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ0BzaW51b3VzL3JlbmRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvb3AoY29udGV4dCwgY29uZGl0aW9uLCBnZXRLZXksIGdldEl0ZW0pXG57XG5cdHJldHVybiBtYXAoY29udGV4dCwgY29uZGl0aW9uLCBnZXRLZXksIGdldEl0ZW0pO1xufSIsImltcG9ydCB7IG9ic2VydmFibGUgYXMgc2ludW91c09ic2VydmFibGUsIGNvbXB1dGVkIGFzIHNpbnVvdXNDb21wdXRlZCB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlT2JzZWVydmFibGUoZm4pXG57XG5cdGZuLl9vYnNlcnZhYmxlID0gdHJ1ZTtcblx0cmV0dXJuIGZuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQodiwgYmluZGluZyA9IGZhbHNlKSB7XG5cblx0bGV0IGQ7XG5cdFxuXHRpZihiaW5kaW5nKSB7XG5cdFx0ZCA9IHNpbnVvdXNDb21wdXRlZCh2LmJpbmQodGhpcykpO1xuXHR9IGVsc2Uge1xuXHRcdGQgPSBzaW51b3VzQ29tcHV0ZWQodik7XG5cdH1cblxuXHRtYWtlT2JzZWVydmFibGUoZCk7XG5cblx0cmV0dXJuIGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZhYmxlKHYsIGJpbmRpbmcgPSBmYWxzZSlcbntcblx0Ly8gbGV0IG9icyA9IG51bGw7XG5cdC8vIGxldCBpbmRleCA9IDA7XG5cblx0Ly8gbGV0IGRhdGEgPSAodikgPT4ge1xuXHQvLyBcdGNvbnNvbGUubG9nKHNlZWQsIHYsIGluZGV4KVxuXHQvLyBcdGlmKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJykge1xuXHQvLyBcdFx0aWYoaW5kZXggPT09IDApIHtcblx0Ly8gXHRcdFx0aW5kZXgrKztcblx0Ly8gXHRcdFx0cmV0dXJuIHNlZWQ7XG5cdC8vIFx0XHR9XG5cblx0Ly8gXHRcdHJldHVybiBvYnMoKTtcblx0Ly8gXHR9XG5cblx0Ly8gXHQvLyBpZihpbmRleCA9PT0gMCkge1xuXHQvLyBcdC8vIFx0aW5kZXgrKztcblx0Ly8gXHQvLyBcdHJldHVybiB2O1xuXHQvLyBcdC8vIH1cblxuXHQvLyBcdC8vIGlmKG9icyA9PT0gbnVsbCkge1xuXHQvLyBcdC8vIFx0b2JzID0gc2ludW91c09ic2VydmFibGUodik7XG5cdC8vIFx0Ly8gfVxuXHQvLyB9XG5cblx0bGV0IGQgPSBzaW51b3VzT2JzZXJ2YWJsZSh2KTtcblxuXHRcblx0bWFrZU9ic2VlcnZhYmxlKGQpO1xuXG5cdHJldHVybiBkO1xufSIsImZ1bmN0aW9uIGFyZ1RvU3RyaW5nKClcbntcblx0bGV0IHN0ciA9ICcnO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHZhbHVlID0gYXJndW1lbnRzW2ldO1xuXHRcdFxuXHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dmFsdWUgPSB2YWx1ZSgpO1xuXHRcdH1cblxuXHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvcihsZXQga2V5IGluIHZhbHVlKSB7XG5cdFx0XHRcdGlmKHZhbHVlW2tleV0pIHtcblx0XHRcdFx0XHRzdHIgKz0gYCAkeyBrZXkgfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RyICs9IGAgJHt2YWx1ZX1gO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJnVG9PYmplY3QoKVxue1xuXHRsZXQgc3RyID0gJyc7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBhcmd1bWVudHNbaV0pIHtcblx0XHRcdGxldCB2YWx1ZSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuXHRcdFx0aWYodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1trZXldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBQYXJzZSBjbGFzc2VzXG4gKiBAcGFyYW0gIHtbdHlwZV19IHN0YXRpYyAgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7W3R5cGVdfSBkeW5hbWljIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbmZ1bmN0aW9uIGNsYXNzZXMoc3RyID0gbnVsbCwgZHluYW1pYyA9IG51bGwpXG57XG5cdGlmKHN0ciA9PT0gbnVsbCAmJiBkeW5hbWljID09PSBudWxsKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0aWYoc3RyID09PSBudWxsKSB7XG5cdFx0c3RyID0gJyc7XG5cdH1cblx0XG5cdGlmKHR5cGVvZiBkeW5hbWljID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0ZHluYW1pYyA9IGR5bmFtaWMoKTtcblx0fVxuXG5cdGlmKCFBcnJheS5pc0FycmF5KGR5bmFtaWMpKSB7XG5cdFx0ZHluYW1pYyA9IFtkeW5hbWljXTtcblx0fVxuXG5cdHN0ciArPSBhcmdUb1N0cmluZy5hcHBseSh0aGlzLCBkeW5hbWljKTtcblx0XG5cdC8vIGNvbnNvbGUubG9nKHN0cik7XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBTdHlsZXNcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqICAgICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IGR5bmFtaWMgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZnVuY3Rpb24gbWFrZVN0eWxlUHJvcChuYW1lKVxue1xuXHRyZXR1cm4gbmFtZVxuXHRcdC5yZXBsYWNlKC9cXC4/KFtBLVpdKykvZywgZnVuY3Rpb24gKHgseSkge1xuXHRcdFx0cmV0dXJuIFwiLVwiICsgeS50b0xvd2VyQ2FzZSgpXG5cdFx0fSlcblx0XHQucmVwbGFjZSgvXi0vLCBcIlwiKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVzKG9iaiA9IHt9LCBkeW5hbWljID0gbnVsbClcbntcblx0bGV0IHJlYWR5U3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKTtcblxuXHRpZih0eXBlb2YgZHluYW1pYyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGR5bmFtaWMgPSBkeW5hbWljKCk7XG5cdH1cblxuXHRpZighQXJyYXkuaXNBcnJheShkeW5hbWljKSkge1xuXHRcdGR5bmFtaWMgPSBbZHluYW1pY107XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGR5bmFtaWMubGVuZ3RoOyBpKyspIHtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBkeW5hbWljW2ldKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSBkeW5hbWljW2ldW2tleV07XG5cdFx0XHRcblx0XHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlKCk7XG5cdFx0XHR9XG5cdFx0XHRyZWFkeVN0eWxlc1ttYWtlU3R5bGVQcm9wKGtleSldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlYWR5U3R5bGVzO1xufVxuXG5sZXQgY2xvbmVPcHRpb25zID0gWydfcycsICckc2xvdHMnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDc3MocmVhZHlPcHRpb25zLCBvcHRpb25zKVxue1xuXHRpZihvcHRpb25zLnN0YXRpY0NsYXNzIHx8IG9wdGlvbnMuY2xhc3MpIHtcblx0XHRyZWFkeU9wdGlvbnMuY2xhc3MgPSBjbGFzc2VzLmJpbmQodGhpcywgb3B0aW9ucy5zdGF0aWNDbGFzcyB8fCBudWxsLCBvcHRpb25zLmNsYXNzIHx8IG51bGwpO1xuXHR9XG5cblx0aWYob3B0aW9ucy5zdGF0aWNTdHlsZSB8fCBvcHRpb25zLnN0eWxlKSB7XG5cdFx0cmVhZHlPcHRpb25zLnN0eWxlID0gc3R5bGVzLmJpbmQodGhpcywgb3B0aW9ucy5zdGF0aWNTdHlsZSB8fCB7fSwgb3B0aW9ucy5zdHlsZSB8fCBudWxsKTtcblx0fVxuXG5cdHJldHVybiByZWFkeU9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlT3B0aW9uKG9wdGlvbiwgc2hvdWxkQ2xvbmUgPSB0cnVlKVxue1xuXHRsZXQgcmVhZHlPcHRpb24gPSB7fTtcblxuXHRpZihvcHRpb24ub24gIT09IHVuZGVmaW5lZCkge1xuXHRcdGZvcihsZXQga2V5IGluIG9wdGlvbi5vbikge1xuXHRcdFx0cmVhZHlPcHRpb25bYG9uJHtrZXl9YF0gPSBvcHRpb24ub25ba2V5XTtcblx0XHR9XG5cdH1cblxuXHRpZihvcHRpb24ua2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZWFkeU9wdGlvblsnZGF0YS1rZXknXSA9IG9wdGlvbi5rZXk7XG5cdH1cblxuXHRtYWtlQ3NzKHJlYWR5T3B0aW9uLCBvcHRpb24pO1xuXG5cdGlmKHNob3VsZENsb25lKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBuYW1lID0gY2xvbmVPcHRpb25zW2ldO1xuXHRcdFx0aWYob3B0aW9uW25hbWVdKSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9uW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVhZHlPcHRpb247XG59XG5cbmNvbnN0IEFzc2lnbk9iamVjdE9wdGlvbnMgPSBbJ3N0YXRpY1N0eWxlJywgJ2F0dHJzJywgJ29uJ107XG5jb25zdCBBc3NpZ25WYWx1ZU9wdGlvbnMgPSBbJ3N0eWxlJywgJ2NsYXNzJ107XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU9wdGlvbnMob3B0aW9ucylcbntcblx0bGV0IHJlYWR5T3B0aW9ucyA9IHt9O1xuXHRsZXQgc2hvdWxkQmVNZXJnZWQgPSBmYWxzZTtcblxuXHRpZihBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcblx0XHRcdGlmKG9wdGlvbnNbaV0gPT09IG51bGwpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9uc1tpXSk7XG5cblx0XHRcdGlmKGtleXMubGVuZ3RoID09PSAxICYmIGtleXMuaW5jbHVkZXMoJyRzbG90cycpKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZihpID4gMCkge1xuXHRcdFx0XHRzaG91bGRCZU1lcmdlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGlmKCFzaG91bGRCZU1lcmdlZCkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnNbMV07XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBvcHRpb25zO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IG9wdGlvbiA9IG9wdGlvbnNbaV1cblx0XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBBc3NpZ25PYmplY3RPcHRpb25zLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRsZXQgbmFtZSA9IEFzc2lnbk9iamVjdE9wdGlvbnNbal07XG5cdFx0XHRcblx0XHRcdGlmKCFvcHRpb25bbmFtZV0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFyZWFkeU9wdGlvbnNbbmFtZV0pIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zW25hbWVdID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGZvcihsZXQgcHJvcCBpbiBvcHRpb25bbmFtZV0pIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zW25hbWVdW3Byb3BdID0gb3B0aW9uW25hbWVdW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgQXNzaWduVmFsdWVPcHRpb25zLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRsZXQgbmFtZSA9IEFzc2lnblZhbHVlT3B0aW9uc1tqXTtcblxuXHRcdFx0aWYoIW9wdGlvbltuYW1lXSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIXJlYWR5T3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV0gPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0cmVhZHlPcHRpb25zW25hbWVdID0gcmVhZHlPcHRpb25zW25hbWVdLmNvbmNhdChvcHRpb25bbmFtZV0pO1xuXHRcdH1cblxuXHRcdGlmKG9wdGlvbi5fcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZWFkeU9wdGlvbnMuX3MgPSBvcHRpb24uX3M7XG5cdFx0fVxuXG5cdFx0aWYob3B0aW9uLmtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZWFkeU9wdGlvbnMua2V5ID0gb3B0aW9uLmtleTtcblx0XHR9XG5cblx0XHRpZihvcHRpb24uc3RhdGljQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYocmVhZHlPcHRpb25zLnN0YXRpY0NsYXNzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zLnN0YXRpY0NsYXNzID0gb3B0aW9uLnN0YXRpY0NsYXNzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVhZHlPcHRpb25zLnN0YXRpY0NsYXNzICs9ICcgJyArIG9wdGlvbi5zdGF0aWNDbGFzcztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBjb25zb2xlLndhcm4ocmVhZHlPcHRpb25zKVxuXG5cdHJldHVybiByZWFkeU9wdGlvbnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wdGlvbnMob3B0aW9ucywgc2hvdWxkQ2xvbmUgPSB0cnVlKVxue1xuXHRsZXQgcmVhZHlPcHRpb25zID0gbWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuXG5cdHJldHVybiBtYWtlT3B0aW9uKHJlYWR5T3B0aW9ucywgc2hvdWxkQ2xvbmUpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsb3QoY29udGV4dCwgaCwgbmFtZSwgdGFnLCBvcHRpb25zLCBkZWZhdWx0Q2hpbGRyZW4pXG57XG5cdC8vIGNvbnRleHQuX19zbG90c1xuXHRcblx0bGV0IGNoaWxkcmVuID0gZGVmYXVsdENoaWxkcmVuO1xuXG5cdGlmKGNvbnRleHQuX3Nsb3RzW25hbWVdKSB7XG5cdFx0Y2hpbGRyZW4gPSBjb250ZXh0Ll9zbG90c1tuYW1lXTtcblx0fVxuXHRcblx0aWYodGFnID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuO1xuXHR9XG5cblx0Ly8gaC5iaW5kKG51bGwpXG5cblx0bGV0IHJlbmRlciA9IGgodGFnLCBvcHRpb25zLCBjaGlsZHJlbik7XG5cblx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCByZW5kZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuXHQvLyBcdGNvbnNvbGUubG9nKHJlbmRlci5jaGlsZE5vZGVzW2ldLCByZW5kZXIuY2hpbGROb2Rlc1tpXS4kcyk7XG5cdC8vIH1cblx0XG5cblx0cmV0dXJuIHJlbmRlcjtcbn0iLCJpbXBvcnQgeyBoIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KClcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICUgMyAhPT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdGF0ZW1lbnQgc2hvdWxkIGJlIG9kZCBudW1iZXInKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cdFx0bGV0IGZvdW5kQ29uZGl0aW9uID0gZmFsc2U7XG5cdFx0Ly8gdmFsdWVcblx0XHRsZXQgY2hpbGRJbmRleCA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRsZXQgc2l6ZSA9IGFyZ3VtZW50c1tpICsgMV07XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaSArIDJdO1xuXHRcdFx0bGV0IG5vZGUgPSBudWxsO1xuXG5cdFx0XHRjb25kaXRpb24gPSB0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nID8gY29uZGl0aW9uKCkgOiBjb25kaXRpb247XG5cblx0XHRcdGlmKGNvbmRpdGlvbiAmJiAhZm91bmRDb25kaXRpb24pIHtcblx0XHRcdFx0Zm91bmRDb25kaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRub2RlID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnNvbGUud2Fybihjb25kaXRpb24sIHNpemUsIHZhbHVlLCBub2RlKTtcblx0XHRcdC8vIFBhc3MgZmFpbGVkIHN0ZXRlbWVudCBjb25kaXRpb25cblx0XHRcdC8vIE5vcm1pbGl6ZSBpbmRleCB0aGF0IHdpbGwgYmUgdXNlZCBpbiByZXBsYWNpbmcgcGxhY2Vob2xkZXIgKGJlbG93KVxuXHRcdFx0aWYobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIW5vZGUuX29ic2VydmFibGUpIHtcblx0XHRcdFx0bm9kZSA9IG5vZGUoaCk7XG5cdFx0XHR9XG5cdFx0XHQvLyByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggbm9kZVxuXHRcdFx0Ly8gQW5kIGNvcnJlY3QgaW5kZXhcblx0XHRcdGlmKHNpemUgPiAxKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZVtqXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXG5cdHJldHVybiBkO1xufSIsImltcG9ydCB7IGFwaSB9IGZyb20gJ3NpbnVvdXMnO1xuaW1wb3J0IHsgXyB9IGZyb20gJ0BzaW51b3VzL2NvbXBpbGVyL3NyYy9lbXB0eSc7XG5pbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcbmltcG9ydCB7IG9wdGlvbnMgYXMgcGFyc2VPcHRpb25zLCBoIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcbmltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICdAc2ludW91cy9sYXp5JztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ0BzaW51b3VzL3JlbmRlcic7XG5pbXBvcnQgaHlkcmF0ZVByb3BzIGZyb20gJy4vcHJvcGVydHknO1xuXG5sZXQgT0JTRVJWRVI7XG5sZXQgU1RPUkFHRSA9IHt9O1xuXG5sZXQgU1VCU0NSSUJFUlMgPSBbXTtcblxuZnVuY3Rpb24gYWRkU3Vic2NyaWJlcihmbilcbntcblx0Y29uc29sZS5sb2coZm4sIFNVQlNDUklCRVJTKVxuXHRTVUJTQ1JJQkVSUy5wdXNoKGZuKTtcbn1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZVByb3BzKGVsLCBvcHRzKVxuLy8ge1xuXHQvLyBpZighb3B0cy5fcykge1xuXHQvLyBcdHJldHVybjtcblx0Ly8gfVxuXG4vLyBcdGFwaS5wcm9wZXJ0eShlbCwgb3B0cywgbnVsbCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVUYWcocGFyZW50LCBjaGlsZHJlbiwgY3VycmVudEluZGV4LCB2YWx1ZSlcbi8vIHtcbi8vIFx0bGV0IGVsID0gY2hpbGRyZW5bY3VycmVudEluZGV4XTtcblx0XG4vLyBcdGxldCBub2RlcyA9IHZhbHVlKCk7XG5cbi8vIFx0aWYoQXJyYXkuaXNBcnJheShub2RlcykpIHtcblxuLy8gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbi8vIFx0XHRcdGxldCBjaGlsZCA9IG5vZGVzW2ldO1xuLy8gXHRcdFx0aWYodHlwZW9mIGNoaWxkID09PSAnZnVuY3Rpb24nKSB7XG4vLyBcdFx0XHRcdGNoaWxkID0gY2hpbGQoKTtcbi8vIFx0XHRcdH1cbi8vIFx0XHRcdC8vIGNvbnNvbGUubG9nKHBhcmVudCwgIGNoaWxkLnNpemUpXG4vLyBcdFx0XHQvLyBhcGkuaW5zZXJ0KHBhcmVudCwgY2hpbGQsIGNoaWxkcmVuW2N1cnJlbnRJbmRleCArIGldKTtcbi8vIFx0XHRcdC8vIHBhcmVudC5yZXBsYWNlQ2hpbGQoY2hpbGQsIGNoaWxkcmVuW2N1cnJlbnRJbmRleCArIGldKVxuLy8gXHRcdFx0Ly8gY2hpbGRyZW5bY3VycmVudEluZGV4ICsgaV0ucmVwbGFjZVdpdGgoY2hpbGQpO1xuLy8gXHRcdH1cbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHRhcGkuaW5zZXJ0KGVsLCBub2RlcywgbnVsbCk7XG4vLyBcdH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZUNoaWxkcmVuKG5vZGUsIGNoaWxkcmVuKVxuLy8ge1xuLy8gXHRsZXQgYmluZENoaWxkcmVuID0gW107XG5cbi8vIFx0aWYobm9kZSAhPT0gbnVsbCkge1xuLy8gXHRcdGJpbmRDaGlsZHJlbiA9IGZpbHRlckNoaWxkTm9kZXMobm9kZSk7XG4vLyBcdH1cblxuLy8gXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4vLyBcdFx0aWYoY2hpbGRyZW5baV0gPT09IF8pIHtcbi8vIFx0XHRcdGNvbnRpbnVlO1xuLy8gXHRcdH1cbi8vIFx0XHQvLyBjb25zb2xlLmVycm9yKGJpbmRDaGlsZHJlbltpXSwgY2hpbGRyZW5baV0pO1xuLy8gXHRcdGh5ZHJhdGVUYWcobm9kZSwgYmluZENoaWxkcmVuLCBpLCBjaGlsZHJlbltpXSk7XG4vLyBcdH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0U2xvdE5vZGUoZWwsIHBhdGgpXG4vLyB7XG4vLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuLy8gXHRcdGVsID0gZWwuY2hpbGROb2Rlc1twYXRoW2ldXTtcbi8vIFx0fVxuXG4vLyBcdHJldHVybiBlbDtcbi8vIH1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZVNsb3RzKGNvbXBvbmVudCwgZWwsIG9wdHMgPSB7fSwgc2xvdHMpXG4vLyB7XG4vLyBcdGlmKCFvcHRzWydpZCddKSB7XG4vLyBcdFx0cmV0dXJuO1xuLy8gXHR9XG5cbi8vIFx0Ly8gaWYob3B0c1snaWQnXSA9PT0gJ2h5ZHItMTMnKSB7XG4vLyBcdC8vIFx0b3B0c1snaWQnXSA9ICdoeWRyLTYnO1xuLy8gXHQvLyB9XG5cbi8vIFx0Ly8gaWYob3B0c1snaWQnXSA9PT0gJ2h5ZHItMzAnKSB7XG4vLyBcdC8vIFx0b3B0c1snaWQnXSA9ICdoeWRyLTIxJztcbi8vIFx0Ly8gfVxuXG4vLyBcdGxldCBiaW5kTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAkeyBvcHRzWydpZCddIH1gKTtcblxuLy8gXHRsZXQgc2xvdE5vZGVzID0ge31cblxuLy8gXHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuLy8gXHRcdGlmKGNvbXBvbmVudC5fc2xvdHNQYXRoW2tleV0pIHtcbi8vIFx0XHRcdGxldCBub2RlID0gZ2V0U2xvdE5vZGUoYmluZE5vZGUsIGNvbXBvbmVudC5fc2xvdHNQYXRoW2tleV0pXG4vLyBcdFx0XHRzbG90Tm9kZXNba2V5XSA9IG5vZGU7XG4vLyBcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gJHtrZXl9IHNsb3QgbmFtZXNwYWNlIGRlZmluZWRgKTtcbi8vIFx0XHR9XG4vLyBcdH1cblxuLy8gXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcbi8vIFx0XHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuLy8gXHRcdFx0bGV0IG5vZGUgPSBzbG90Tm9kZXNba2V5XTtcbi8vIFx0XHRcdGxldCBjaGlsZHJlblNsb3RzID0gc2xvdHNba2V5XTtcblx0XHRcdFxuLy8gXHRcdFx0aWYobm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuLy8gXHRcdFx0XHRub2RlID0gW25vZGVdO1xuLy8gXHRcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdFx0bm9kZSA9IG5vZGUuY2hpbGROb2Rlcztcbi8vIFx0XHRcdH1cblxuLy8gXHRcdFx0aWYoY2hpbGRyZW5TbG90cy5sZW5ndGggPiBub2RlLmxlbmd0aCkge1xuLy8gXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Nsb3QgaHlkcmF0aW9uIGxlbmd0aCBtaXNtYXRjaCcpO1xuLy8gXHRcdFx0fVxuXG4vLyBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuU2xvdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XG4vLyBcdFx0XHRcdGFwaS5pbnNlcnQobm9kZVtpXSwgY2hpbGRyZW5TbG90c1tpXSgpLCBudWxsKTtcbi8vIFx0XHRcdH1cbi8vIFx0XHR9XG4vLyBcdH0pO1xuXHRcbi8vIH1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZShlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxuLy8ge1xuLy8gXHRsZXQgYmluZE5vZGU7XG4vLyBcdGNvbnNvbGUubG9nKHRoaXMsIGVsLCBvcHRzLCBjaGlsZHJlbilcblxuLy8gXHQvLyBpZih0aGlzLm5vZGUpIHtcbi8vIFx0Ly8gXHRiaW5kTm9kZSA9IHRoaXMubm9kZTtcbi8vIFx0Ly8gfVxuXG4vLyBcdGlmKCFvcHRzWydpZCddKSB7XG4vLyBcdFx0cmV0dXJuO1xuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdGJpbmROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7IG9wdHNbJ2lkJ10gfWApO1xuLy8gXHR9XG5cbi8vIFx0Ly8gY29uc29sZS5sb2codGhpcyk7XG4vLyBcdC8vIHRoaXMuY3R4Ll9lbF9pbmRleCsrO1xuXG4vLyBcdGlmKGJpbmROb2RlID09PSBudWxsKSB7XG4vLyBcdFx0cmV0dXJuO1xuLy8gXHR9XG5cdFxuXHQvLyBhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0Ly8gXHRoeWRyYXRlUHJvcHMoYmluZE5vZGUsIG9wdHMpO1xuXHQvLyBcdGh5ZHJhdGVDaGlsZHJlbihiaW5kTm9kZSwgY2hpbGRyZW4pO1xuXHQvLyB9KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gcmVnaXN0ZXJDaGlsZHJlbihwYXJlbnQsIGNoaWxkKVxuLy8ge1xuLy8gXHRwYXJlbnQuYWRkQ2hpbGRyZW4oY2hpbGQpO1xuLy8gXHRpZihjaGlsZC5zZXRQYXJlbnQpIHtcbi8vIFx0XHRjaGlsZC5zZXRQYXJlbnQocGFyZW50KTtcbi8vIFx0fVxuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gY29tcGlsZXIoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbi8vIHtcbi8vIFx0b3B0aW9ucyh0aGlzLCBvcHRzKTtcblx0XG4vLyBcdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcbi8vIFx0XHRoeWRyYXRlLmNhbGwodGhpcywgZWwsIG9wdHMsIGNoaWxkcmVuKTtcbi8vIFx0XHRyZXR1cm4gXztcbi8vIFx0fVxuXHRcdFxuLy8gXHRsZXQgY29tcG9uZW50ID0gU2ludW91cy5nZXRIeWRyYXRlQ29tcG9uZW50KGVsLCBvcHRzKTtcblxuLy8gXHQvLyBjb25zb2xlLmxvZyhjb21wb25lbnQsIGVsLCBvcHRzKVxuLy8gXHRpZihjb21wb25lbnQgPT09IG51bGwpIHtcbi8vIFx0XHRyZXR1cm4gXztcbi8vIFx0fVxuXG4vLyBcdHJlZ2lzdGVyQ2hpbGRyZW4odGhpcy5jdHgsIGNvbXBvbmVudCk7XG5cbi8vIFx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG4vLyBcdFx0Ly8gY29uc29sZS53YXJuKCdzdGFydCBoeWRyYXRpb24nKTtcbi8vIFx0XHRyZXR1cm4gY29tcG9uZW50Lmh5ZHJhdGUoe1xuLy8gXHRcdFx0Z2V0VUlEKCkge1xuLy8gXHRcdFx0XHRyZXR1cm4gLTE7XG4vLyBcdFx0XHR9LFxuLy8gXHRcdFx0X3Nsb3RzOiBvcHRzLiRzbG90cyxcbi8vIFx0XHR9LCBjb21waWxlcik7XG4vLyBcdH1cblxuLy8gXHRpZih0eXBlb2Ygb3B0cy5wcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbi8vIFx0XHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuLy8gXHR9XG5cbi8vIFx0aWYob3B0cy4kc2xvdHMpIHtcbi8vIFx0XHRoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBlbCwgb3B0cywgb3B0cy4kc2xvdHMpO1xuLy8gXHR9XG5cbi8vIFx0cmV0dXJuIGluaXRDb21wb25lbnQoY29tcG9uZW50KTtcbi8vIH1cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlUHJvcHMoZWwsIG9wdGlvbnMpXG4vLyB7XG4vLyBcdGlmKG9wdGlvbnMuX3MpIHtcbi8vIFx0XHQvLyBjb25zb2xlLmxvZyhlbCwgJ1ByZXBhcmUgb3B0aW9ucycsIG9wdGlvbnMpO1xuLy8gXHRcdC8vIG9wdGlvbnMgPSBwYXJzZU9wdGlvbnMob3B0aW9ucywgZmFsc2UpO1xuLy8gXHRcdC8vIGNvbnNvbGUubG9nKGVsLCAnUHJlcGFyZSBvcHRpb25zIDInLCBvcHRpb25zKTtcbi8vIFx0XHRwcm9wZXJ0eShlbCwgb3B0aW9ucyk7XG5cbi8vIFx0XHQvLyBhcGkuc3Vic2NyaWJlKCgpID0+IHtcbi8vIFx0XHQvLyBcdC8vIGNvbnNvbGUubG9nKGVsLCAnQ2hhbmdlIG9wdGlvbnMnKTtcbi8vIFx0XHQvLyBcdGFwaS5wcm9wZXJ0eShlbCwgb3B0aW9ucywgbnVsbCk7XG4vLyBcdFx0Ly8gfSk7XG4vLyBcdH1cbi8vIH1cblxuZnVuY3Rpb24gaHlkcmF0ZUgoY29udGV4dCwgZWwsIG9wdGlvbnMsIGNoaWxkcmVuKVxue1xuXHRoeWRyYXRlUHJvcHMoY29udGV4dCwgZWwsIG9wdGlvbnMpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRoeWRyYXRlKGNvbnRleHQsIGVsLmNoaWxkTm9kZXNbaV0sIGNoaWxkcmVuW2ldKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoeWRyYXRlU3RhdGVtZW50KGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGxldCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG5cdGxldCBzdGFydEluZGV4ID0gMDtcblxuXHR3aGlsZSgobm9kZSA9IG5vZGUucHJldmlvdXNTaWJsaW5nKSAhPSBudWxsKVxuXHRcdHN0YXJ0SW5kZXgrKztcblx0XG5cdGxldCBzdGF0ZW1lbnRBcmdzID0gYXJncy5hO1xuXG5cdGZ1bmN0aW9uIGhpZGVOb2RlcyhjaGlsZHJlbiwgc3RhcnRJbmRleCwgbGVuZ3RoKVxuXHR7XG5cdFx0Zm9yICh2YXIgaiA9IHN0YXJ0SW5kZXg7IGogPD0gbGVuZ3RoOyBqKyspIHtcblx0XHRcdGxldCBub2RlID0gY2hpbGRyZW5bal07XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnaGlkZScsIGosIG5vZGUpO1xuXHRcdFx0aWYobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5DT01NRU5UX05PREUpIHtcblx0XHRcdFx0bm9kZS5yZXBsYWNlV2l0aChkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKSk7XG5cdFx0XHR9XG5cblx0XHRcdG5vZGUgPSBub2RlLm5leHRFbGVtZW50U2libGluZztcblx0XHR9XG5cdH1cblxuXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRsZXQgY3VycmVudEluZGV4ID0gc3RhcnRJbmRleDtcblx0XHRsZXQgZm91bmRDb25kaXRpb24gPSBmYWxzZTtcblx0XHRcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0YXRlbWVudEFyZ3MubGVuZ3RoOyBpKz0gMykge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IHN0YXRlbWVudEFyZ3NbaV07XG5cdFx0XHRsZXQgc2l6ZSA9IHN0YXRlbWVudEFyZ3NbaSArIDFdO1xuXHRcdFx0bGV0IGNvbXBvbmVudCA9IHN0YXRlbWVudEFyZ3NbaSArIDJdO1xuXG5cdFx0XHRsZXQgY3VycmVudE5vZGUgPSBwYXJlbnQuY2hpbGROb2Rlc1tjdXJyZW50SW5kZXhdO1xuXG5cdFx0XHRjb25kaXRpb24gPSB0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nID8gY29uZGl0aW9uKCkgOiBjb25kaXRpb247XG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKGN1cnJlbnROb2RlLCBjb25kaXRpb24gJiYgIWZvdW5kQ29uZGl0aW9uKTtcblx0XHRcdGlmKGNvbmRpdGlvbiAmJiAhZm91bmRDb25kaXRpb24pIHtcblx0XHRcdFx0Zm91bmRDb25kaXRpb24gPSB0cnVlO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnc2hvdycsIHBhcmVudC5jaGlsZE5vZGVzW2N1cnJlbnRJbmRleF0sIHNpemUpO1xuXHRcdFx0XHRpZihjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5DT01NRU5UX05PREUpIHtcblx0XHRcdFx0XHQvLyAgcmVuZGVyXG5cdFx0XHRcdFx0bGV0IG5ld05vZGUgPSBjb21wb25lbnQucihoLmJpbmQoY29udGV4dCkpO1xuXHRcdFx0XHRcdGN1cnJlbnROb2RlLnJlcGxhY2VXaXRoKG5ld05vZGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIGh5ZHJhdGVcblx0XHRcdFx0XHRtYXJrQXNSZWFkeShjdXJyZW50Tm9kZSk7XG5cdFx0XHRcdFx0aHlkcmF0ZShjb250ZXh0LCBjdXJyZW50Tm9kZSwgY29tcG9uZW50LmgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnW2hpZGVdJywgcGFyZW50LmNoaWxkTm9kZXMsIGN1cnJlbnRJbmRleCwgc2l6ZSk7XG5cdFx0XHRcdGhpZGVOb2RlcyhwYXJlbnQuY2hpbGROb2RlcywgY3VycmVudEluZGV4LCBzaXplKTtcblx0XHRcdH1cblxuXHRcdFx0Y3VycmVudEluZGV4ICs9IHNpemU7XG5cdFx0XHQvLyBjb25zb2xlLndhcm4oY3VycmVudE5vZGUsIGN1cnJlbnROb2RlLm5leHRFbGVtZW50U2libGluZylcblxuXHRcdFx0Ly8gY29uc29sZS5sb2coY3VycmVudE5vZGUsIGNvbmRpdGlvbiwgJ3NraXAnKTtcblxuXHRcdFx0XG5cdFx0fVxuXHR9KTtcblx0XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVMb29wKGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGxldCBjb25kaXRpb24gPSBhcmdzLmM7XG5cdGxldCBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRsZXQgcGFyZW50Q2hpbGRyZW4gPSBwYXJlbnROb2RlLmNoaWxkTm9kZXM7XG5cblx0bWFwKGNvbnRleHQsIGFyZ3MuYywgYXJncy5rLCAoaXRlbSwga2V5KSA9PiB7XG5cdFx0XG5cdFx0bGV0IG5vZGUgPSBhcmdzLnIoaC5iaW5kKGNvbnRleHQpLCBpdGVtLCBrZXkpO1xuXG5cdFx0cmV0dXJuIG5vZGU7XHRcblx0fSwgKHJlZ2lzdGVySHlkcmF0aW9uKSA9PiB7XG5cdFx0bGV0IGl0ZW1zID0gYXJncy5jKCk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbm9kZSA9IHBhcmVudENoaWxkcmVuW2ldO1xuXHRcdFx0bGV0IGl0ZW0gPSBpdGVtc1tpXTtcblx0XHRcdGxldCBpdGVtS2V5ID0gYXJncy5rKGl0ZW0sIGkpO1xuXG5cdFx0XHRpZihub2RlKSB7XG5cdFx0XHRcdGlmKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpID09IGl0ZW1LZXkpIHtcblx0XHRcdFx0XHRtYXJrQXNSZWFkeShub2RlKTtcblx0XHRcdFx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUsIGFyZ3MuaChpdGVtLCBpKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmVnaXN0ZXJIeWRyYXRpb24oaXRlbSwgaSwgbm9kZSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZWcsIGl0ZW0sIGksIG5vZGUpO1xuXHRcdH1cblx0fSwgbm9kZS5wYXJlbnROb2RlKTtcblxufVxuXG4vKipcbiAqIE1heWJlIG5lZWQgc2FtZSBoeWRyYXRpb24gYWxnb3JpdGhtIGFzIHdpdGggcHJvcHNcbiAqIFNraXAgZmlyc3QgdGltZSBoeWRyYXRpb24gPz8/XG4gKi9cbmZ1bmN0aW9uIGh5ZHJhdGVUZXh0KGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGlmKGFyZ3MudCA9PT0gXykge1xuXHRcdHJldHVybjtcblx0fVxuXHRcblx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0YXBpLmluc2VydChub2RlLCBhcmdzLnQoKSwgbnVsbCk7XG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIGdldFNsb3ROb2RlKGVsLCB0YWcsIHBhdGgpXG57XG5cdGxldCBub2RlID0gZWw7XG5cblx0Zm9yICh2YXIgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG5cdFx0bm9kZSA9IG5vZGUuY2hpbGROb2Rlc1twYXRoW2ldXTtcblx0fVxuXG5cdHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVNsb3RzKGNvbnRleHQsIGVsLCBvcHRzID0ge30sIHNsb3RzKVxue1xuXHQvLyByZXR1cm47XG5cdC8vIEh5ZHJhdGUgcHJvcHMgb2YgbWFpbiBOb2RlXG5cdC8vIGh5ZHJhdGVQcm9wcyhjb250ZXh0LCBlbCwgb3B0cyk7XG5cdFxuXHRsZXQgYmluZGVkTm9kZXMgPSB7fVxuXG5cdGxldCBzbG90RGF0YSA9IGNvbnRleHQuX3Nsb3RzRGF0YTtcblxuXHQvLyBGaW5kIHNsb3QgYmluZGluZyBub2Rlc1xuXHRmb3IobGV0IGtleSBpbiBzbG90cykge1xuXHRcdGlmKHNsb3REYXRhW2tleV0pIHtcblx0XHRcdGxldCBub2RlID0gZ2V0U2xvdE5vZGUoZWwsIHNsb3REYXRhW2tleV0udGFnLCBzbG90RGF0YVtrZXldLnBhdGgpO1xuXHRcdFx0YmluZGVkTm9kZXNba2V5XSA9IG5vZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gJHtrZXl9IHNsb3QgbmFtZXNwYWNlIGRlZmluZWRgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBIeWRyYXRlIHNsb3RzIHBlciBiaW5kZWQgdGFnXG5cdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG5cdFx0bGV0IGRhdGEgPSBzbG90RGF0YVtrZXldO1xuXHRcdGxldCBub2RlID0gYmluZGVkTm9kZXNba2V5XTtcblx0XHRsZXQgY2hpbGRyZW5TbG90cyA9IHNsb3RzW2tleV07XG5cdFx0bGV0IHN0YXJ0Tm9kZUluZGV4ID0gZGF0YS5pbmRleDtcblxuXHRcdGlmKHR5cGVvZiBub2RlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y29uc29sZS53YXJuKGVsLCBvcHRzLCBzbG90RGF0YSwgZWxbMF0pO1xuXHRcdH1cblxuXHRcdGlmKGNoaWxkcmVuU2xvdHMubGVuZ3RoID4gbm9kZS5sZW5ndGgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU2xvdCBoeWRyYXRpb24gbGVuZ3RoIG1pc21hdGNoJyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0Tm9kZUluZGV4OyBpIDwgY2hpbGRyZW5TbG90cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Ly8gY29uc29sZS5sb2cobm9kZS5jaGlsZE5vZGVzW2ldLCBjaGlsZHJlblNsb3RzW2ldKVxuXHRcdFx0aHlkcmF0ZShjb250ZXh0LCBub2RlLmNoaWxkTm9kZXNbaV0sIGNoaWxkcmVuU2xvdHNbaV0pO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIENvbnRleHQgc2V0dXBcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJDaGlsZHJlbihwYXJlbnQsIGNoaWxkKVxue1xuXHRpZihjaGlsZC5fZnVuY3Rpb25hbCkge1xuXHRcdHBhcmVudC5hZGRDaGlsZHJlbihfKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwYXJlbnQuYWRkQ2hpbGRyZW4oY2hpbGQpO1xuXHRjaGlsZC5zZXRQYXJlbnQocGFyZW50KTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVRhZyhjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRsZXQgZWwgPSBhcmdzLnQsXG5cdFx0b3B0cyA9IGFyZ3Mubyxcblx0XHRjaGlsZHJlbiA9IGFyZ3MuYztcblxuXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG5cdFx0aHlkcmF0ZUgoY29udGV4dCwgbm9kZSwgb3B0cywgY2hpbGRyZW4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldEh5ZHJhdGVDb21wb25lbnQoZWwsIG9wdHMpO1xuXG5cdGlmKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBfO1xuXHR9XG5cblx0Y29udGV4dC5hZGRDaGlsZHJlbihjb21wb25lbnQpO1xuXG5cdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuXHRcdGxldCBuZXdBcmdzID0gY29tcG9uZW50Lmh5ZHJhdGUoe1xuXHRcdFx0X3Nsb3RzOiBvcHRzLiRzbG90cyxcblx0XHR9KTtcblxuXHRcdGlmKG9wdHMuJHNsb3RzKSB7XG5cdFx0XHRoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBub2RlLCBvcHRzLCBvcHRzLiRzbG90cyk7XG5cdFx0fVxuXG5cdFx0Ly8gY29uc29sZS5sb2cob3B0cylcblx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUsIG5ld0FyZ3MpO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29tcG9uZW50LnBhc3NQcm9wcyhvcHRzLnByb3BzKTtcblx0Y29tcG9uZW50LnBhc3NPcHRpb25zKG9wdHMpO1xuXG5cdGlmKG9wdHMuJHNsb3RzKSB7XG5cdFx0aHlkcmF0ZVNsb3RzKGNvbXBvbmVudCwgbm9kZSwgb3B0cywgb3B0cy4kc2xvdHMpO1xuXHR9XG5cblx0bm9kZS4kcyA9IGNvbXBvbmVudDtcblx0Ly8gY29uc29sZS5sb2coY29tcG9uZW50LCBub2RlKVxuXG5cdHJldHVybiBoeWRyYXRlKGNvbXBvbmVudCwgbm9kZSwgY29tcG9uZW50Lmh5ZHJhdGUoY29tcG9uZW50KSk7XG59XG5cbi8qKlxuICogTWFpbiBoeWRyYXRpb24gZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gaHlkcmF0ZShjb250ZXh0LCBub2RlLCBhcmdzID0gbnVsbClcbntcblx0Ly8gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG5cdFx0aHlkcmF0ZUlkbGUoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdC8vIH0sIHtcblx0Ly8gXHR0aW1lb3V0OiAwLFxuXHQvLyBcdHJlYWQ6IHRydWVcblx0Ly8gfSk7XG59XG5cbmZ1bmN0aW9uIG1hcmtBc1JlYWR5KG5vZGUpXG57XG5cdG5vZGUuX2h5ZHJhdGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZUlkbGUoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0aWYoYXJncyA9PT0gbnVsbCB8fCBub2RlID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ2gnKSB7XG5cdFx0Ly8gYXJncy5vWydkYXRhLWh5ZHJhdGVkJ10gPSB0cnVlO1xuXHRcdC8vIGFyZ3Mub1snX3MnXSA9IHRydWU7XG5cdFx0aHlkcmF0ZVRhZyhjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXG5cdGlmKGFyZ3MuX3QgPT09ICd0Jykge1xuXHRcdGh5ZHJhdGVUZXh0KGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ2xvb3AnKSB7XG5cdFx0aHlkcmF0ZUxvb3AoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnc3RhdGVtZW50Jykge1xuXHRcdGh5ZHJhdGVTdGF0ZW1lbnQoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblx0XG5cdHJldHVybiBfO1xuXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SHlkcmF0aW9uKGNvbXBvbmVudCwgaHlkcmF0aW9uUm9vdCwgdGltZUJlbmNobWFyayA9ICgpID0+IHt9LCBjYWxsYmFjayA9IG51bGwpXG57XG5cdGxvYWRDb21wb25lbnQoY29tcG9uZW50LCAoaW5zdGFuY2UpID0+IHtcblxuXHRcdHRpbWVCZW5jaG1hcmsoJ0h5ZHJhdGlvbicpO1xuXG5cdFx0bGV0IHRyZWUgPSBbaW5zdGFuY2VdO1xuXG5cdFx0U2ludW91cy5jbGVhckhJRCgpO1xuXG5cdFx0Ly8gbGV0IGNvbm5lY3RlZE5vZGUgPSBmaWx0ZXJDaGlsZE5vZGVzKGh5ZHJhdGlvblJvb3QpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY29tcG9uZW50ID0gdHJlZVtpXTtcblx0XHRcdGxldCBub2RlID0gaHlkcmF0aW9uUm9vdC5jaGlsZE5vZGVzW2ldO1xuXHRcdFx0bGV0IGh5ZHJhdGlvbiA9IGNvbXBvbmVudC5oeWRyYXRlKGNvbXBvbmVudCk7XG5cdFx0XHRcblx0XHRcdGh5ZHJhdGUoY29tcG9uZW50LCBub2RlLCBoeWRyYXRpb24pO1xuXHRcdH1cblx0XHRcblx0XHQvLyBjb25zb2xlLmxvZyhpbnN0YW5jZSk7XG5cdFx0aW5zdGFuY2UuaG9vaygnbW91bnRlZCcpO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHR0aW1lQmVuY2htYXJrKCdIeWRyYXRpb24nKTtcblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fSk7XG5cbn1cblxuLyoqXG4gKiBGaWx0ZXIgb3V0IHdoaXRlc3BhY2UgdGV4dCBub2RlcyB1bmxlc3MgaXQgaGFzIGEgbm9za2lwIGluZGljYXRvci5cbiAqXG4gKiBAcGFyYW0gIHtOb2RlfSBwYXJlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBmaWx0ZXJDaGlsZE5vZGVzKHBhcmVudCkge1xuXHRyZXR1cm4gcGFyZW50LmNoaWxkTm9kZXM7XG5cdC8vIGNvbnNvbGUud2FybihwYXJlbnQsIHBhcmVudC5jaGlsZE5vZGVzKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGROb2RlcykuZmlsdGVyKFxuICAgICAgICBlbCA9PiBlbC5ub2RlVHlwZSAhPT0gMyB8fCBlbC5kYXRhLnRyaW0oKSB8fCBlbC5fbm9za2lwXG4gICAgKTtcbn1cbiIsImltcG9ydCB7IG1ha2VDc3MsIG1lcmdlT3B0aW9ucyB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICdzaW51b3VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHlkcmF0ZVByb3BzKGNvbnRleHQsIGVsLCBvcHRpb25zKVxue1xuXG5cdG9wdGlvbnMgPSBtZXJnZU9wdGlvbnMob3B0aW9ucyk7XG5cblx0aWYoIW9wdGlvbnMuX3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgc3Vic2NyaWJlcnMgPSBbXTtcblx0bGV0IHN1YnNjcmliZXJzX2ZpcnN0ID0gW107XG5cblx0ZnVuY3Rpb24gYWRkU3Vic2NyaWJlcih2YWx1ZSwgZm4sIHNraXAgPSB0cnVlKVxuXHR7XG5cdFx0c3Vic2NyaWJlcnMucHVzaCh7XG5cdFx0XHR2YWx1ZSxcblx0XHRcdGZuLFxuXHRcdH0pO1xuXG5cdFx0c3Vic2NyaWJlcnNfZmlyc3QucHVzaChza2lwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlIHN0eWxlcyBhbmQgY2xhc3Nlc1xuXHQgKi9cblx0aWYob3B0aW9ucy5zdHlsZSB8fCBvcHRpb25zLmNsYXNzKSB7XG5cdFx0Ly8gY29uc29sZS5lcnJvcihlbCk7XG5cdFx0bGV0IGNzc09wdGlvbnMgPSBtYWtlQ3NzKHt9LCBvcHRpb25zKTtcblxuXHRcdGlmKGNzc09wdGlvbnMuc3R5bGUpIHtcblx0XHRcdGFkZFN1YnNjcmliZXIoY3NzT3B0aW9ucy5zdHlsZSwgKG9iaikgPT4ge1xuXHRcdFx0XHRmb3IobGV0IG5hbWUgaW4gb2JqKSB7XG5cdFx0XHRcdFx0ZWwuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgb2JqW25hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYoY3NzT3B0aW9ucy5jbGFzcykge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coY3NzT3B0aW9ucy5jbGFzcygpKTtcblx0XHRcdGFkZFN1YnNjcmliZXIoY3NzT3B0aW9ucy5jbGFzcywgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGVsLCB2YWx1ZSk7XG5cdFx0XHRcdGVsLmNsYXNzTmFtZSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogTWFrZSBldmVudHNcblx0ICovXG5cdGlmKG9wdGlvbnMub24pIHtcblx0XHRmb3IobGV0IG5hbWUgaW4gb3B0aW9ucy5vbikge1xuXHRcdFx0aGFuZGxlRXZlbnQoZWwsIG5hbWUsIG9wdGlvbnMub25bbmFtZV0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlIGF0dHJpYnV0ZXNcblx0ICovXG5cdGlmKG9wdGlvbnMuYXR0cnMpIHtcblx0XHRmb3IobGV0IG5hbWUgaW4gb3B0aW9ucy5hdHRycykge1xuXHRcdFx0YWRkU3Vic2NyaWJlcihvcHRpb25zLmF0dHJzW25hbWVdLCAodmFsdWUpID0+IHtcblx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBTdWJzY3JpYmVcblx0ICovXG5cdGlmKHN1YnNjcmliZXJzLmxlbmd0aCA+IDApIHtcblx0XHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IHZhbHVlID0gc3Vic2NyaWJlcnNbaV0udmFsdWUoKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHN1YnNjcmliZXJzX2ZpcnN0W2ldKSB7XG5cdFx0XHRcdFx0c3Vic2NyaWJlcnNfZmlyc3RbaV0gPSBmYWxzZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJzY3JpYmVyc1tpXS5mbih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxufVxuXG5mdW5jdGlvbiBoYW5kbGVFdmVudChlbCwgbmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnRQcm94eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudFByb3h5KTtcbiAgICB9XG5cbiAgICAoZWwuX2xpc3RlbmVycyB8fCAoZWwuX2xpc3RlbmVycyA9IHt9KSlbbmFtZV0gPSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBQcm94eSBhbiBldmVudCB0byBob29rZWQgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0ge0V2ZW50fSBlIC0gVGhlIGV2ZW50IG9iamVjdCBmcm9tIHRoZSBicm93c2VyLlxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGV2ZW50UHJveHkoZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHJldHVybiB0aGlzLl9saXN0ZW5lcnNbZS50eXBlXShlKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZGlmZihwYXJlbnQsIGEsIGIsIGtleUV4cHIsIGdldCwgYmVmb3JlKVxue1xuXHRjb25zdCBhSWR4ID0gbmV3IE1hcCgpO1xuXHRjb25zdCBiSWR4ID0gbmV3IE1hcCgpO1xuXHRsZXQgaTtcblx0bGV0IGo7XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYVtpXSwgaSk7XG5cdFx0YUlkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGJbaV0sIGkpO1xuXHRcdGJJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLndhcm4oYUlkeCwgYklkeCk7XG5cblx0Zm9yIChpID0gaiA9IDA7IGkgIT09IGEubGVuZ3RoIHx8IGogIT09IGIubGVuZ3RoOykge1xuXHRcdHZhciBhRWxtID0gYVtpXSxcblx0XHRcdGJFbG0gPSBiW2pdO1xuXHRcdGlmIChhRWxtID09PSBudWxsKSB7XG5cdFx0XHQvLyBUaGlzIGlzIGEgZWxlbWVudCB0aGF0IGhhcyBiZWVuIG1vdmVkIHRvIGVhcmxpZXIgaW4gdGhlIGxpc3Rcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGIubGVuZ3RoIDw9IGopIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gbmV3LCB0aGlzIGlzIGEgZGVsZXRlXG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZ2V0KGFbaV0sIGksIC0xKSk7XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChhLmxlbmd0aCA8PSBpKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG9sZCwgdGhpcyBpcyBhbiBhZGRpdGlvblxuXHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShnZXQoYkVsbSwgaiwgMSksIGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmUpO1xuXHRcdFx0aisrO1xuXHRcdH0gZWxzZSBpZiAoYUVsbSA9PT0gYkVsbSkge1xuXHRcdFx0Ly8gTm8gZGlmZmVyZW5jZSwgd2UgbW92ZSBvblxuXHRcdFx0aSsrO1xuXHRcdFx0aisrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgY3VycmVudCBlbGVtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhpcyBlbGVtZW50IHNob3VsZCBiZVxuXHRcdFx0dmFyIGN1ckVsbUluTmV3ID0gYklkeC5nZXQoYUVsbSk7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgdGhlIHdhbnRlZCBlbG1lbnQgYXQgdGhpcyBsb2NhdGlvbiBpbiB0aGUgb2xkIGxpc3Rcblx0XHRcdC8vIFRoaXMgZ2l2ZXMgdXMgdGhlIGlkeCBvZiB3aGVyZSB0aGUgd2FudGVkIGVsZW1lbnQgaXMgbm93XG5cdFx0XHR2YXIgd2FudGVkRWxtSW5PbGQgPSBhSWR4LmdldChiRWxtKTtcblx0XHRcdGlmIChjdXJFbG1Jbk5ldyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIEN1cnJlbnQgZWxlbWVudCBpcyBub3QgaW4gbmV3IGxpc3QsIGl0IGhhcyBiZWVuIHJlbW92ZWRcblx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGdldChhW2ldLCBpLCAtMSkpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2UgaWYgKHdhbnRlZEVsbUluT2xkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gTmV3IGVsZW1lbnQgaXMgbm90IGluIG9sZCBsaXN0LCBpdCBoYXMgYmVlbiBhZGRlZFxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChiRWxtLCBqLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGorKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgaW4gYm90aCBsaXN0cywgaXQgaGFzIGJlZW4gbW92ZWRcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21vdmUnLCBhW2ldLCAnZnJvbScsIHdhbnRlZEVsbUluT2xkLCAndG8nLCBpKVxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChhW3dhbnRlZEVsbUluT2xkXSwgd2FudGVkRWxtSW5PbGQsIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0YVt3YW50ZWRFbG1Jbk9sZF0gPSBudWxsO1xuXHRcdFx0XHRpZiAod2FudGVkRWxtSW5PbGQgPiBpICsgMSkgaSsrO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGI7XG59XG4iLCJpbXBvcnQgeyBhcGkgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IGRpZmYgfSBmcm9tICcuL2RpZmYuanMnO1xuXG4vKipcbiAqIE1hcCBvdmVyIGEgbGlzdCBvZiB1bmlxdWUgaXRlbXMgdGhhdCBjcmVhdGUgRE9NIG5vZGVzLlxuICpcbiAqIE5vIGR1cGxpY2F0ZXMgaW4gdGhlIGxpc3Qgb2YgaXRlbXMgaXMgYSBoYXJkIHJlcXVpcmVtZW50LCB0aGUgZGlmZmluZ1xuICogYWxnb3JpdGhtIHdpbGwgbm90IHdvcmsgd2l0aCBkdXBsaWNhdGUgdmFsdWVzLiBTZWUgYC4vdW5pcXVlLmpzYC5cbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gaXRlbXMgLSBGdW5jdGlvbiBvciBvYnNlcnZhYmxlIHRoYXQgY3JlYXRlcyBhIGxpc3QuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZXhwclxuICogQHBhcmFtIHtib29sZWFufSBbY2xlYW5pbmddXG4gKiBAcmV0dXJuIHtEb2N1bWVudEZyYWdtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwKGNvbnRleHQsIGl0ZW1zLCBrZXlFeHByLCBleHByLCBiZWZvcmVJbml0ID0gbnVsbCwgcGFyZW50ID0gbnVsbCkge1xuXHRjb25zdCB7IHJvb3QsIHN1YnNjcmliZSwgc2FtcGxlLCBjbGVhbnVwIH0gPSBhcGk7XG5cblx0Ly8gRGlzYWJsZSBjbGVhbmluZyBmb3IgdGVtcGxhdGVzIGJ5IGRlZmF1bHQuXG5cdGxldCBjbGVhbmluZyA9IHRydWU7Ly8hZXhwci4kdDtcblxuXHRpZihwYXJlbnQgPT09IG51bGwpIHtcblx0XHRwYXJlbnQgPSBhcGkuaChbXSk7XG5cdH1cblx0XG5cdGNvbnN0IGVuZE1hcmsgPSBhcGkuYWRkKHBhcmVudCwgJycpO1xuXG5cdGNvbnN0IGRpc3Bvc2VycyA9IG5ldyBNYXAoKTtcblx0Y29uc3Qgbm9kZXMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHRvUmVtb3ZlID0gbmV3IFNldCgpO1xuXHRjb25zdCBkZWZhdWx0QSA9IFtdO1xuXG5cdGlmKGJlZm9yZUluaXQpIHtcblx0XHRiZWZvcmVJbml0KChpdGVtLCBrZXksIG4pID0+IHtcblx0XHRcdGRlZmF1bHRBW2tleV0gPSBpdGVtO1xuXHRcdFx0bm9kZShpdGVtLCBrZXksIDEsIG4pO1xuXHRcdH0pXG5cdH1cblxuXHRjb25zdCB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShhID0+IHtcblx0XHRjb25zdCBiID0gaXRlbXMoKTtcblx0XHRyZXR1cm4gc2FtcGxlKCgpID0+IHtcblx0XHRcdHRvUmVtb3ZlLmNsZWFyKCk7XG5cblx0XHRcdC8vIEFycmF5LmZyb20gdG8gbWFrZSBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgbGlzdC5cblx0XHRcdGNvbnN0IGNvbnRlbnQgPSBBcnJheS5mcm9tKFxuXHRcdFx0XHRkaWZmKGVuZE1hcmsucGFyZW50Tm9kZSwgYSB8fCBkZWZhdWx0QSwgYiwga2V5RXhwciwgbm9kZSwgZW5kTWFyaylcblx0XHRcdCk7XG5cblx0XHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGV4dC5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coaSwgY29udGV4dC5fY2hpbGRyZW5baV0uaGlkLCBjb250ZXh0Ll9jaGlsZHJlbltpXS5fc3RhdGUuczEoKSwgY29udGV4dC5fY2hpbGRyZW5baV0uX3Byb3BzLnB0KVxuXHRcdFx0Ly8gfVxuXHRcdFx0dG9SZW1vdmUuZm9yRWFjaChkaXNwb3NlKTtcblx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdH0pO1xuXHR9KTtcblxuXHRjbGVhbnVwKHVuc3Vic2NyaWJlKTtcblx0Y2xlYW51cChkaXNwb3NlQWxsKTtcblxuXHRmdW5jdGlvbiBub2RlKGl0ZW0sIGtleSwgaSwgZWwgPSBudWxsKSB7XG5cdFx0aWYgKGl0ZW0gPT0gbnVsbCkgcmV0dXJuO1xuXG5cdFx0bGV0IG5vZGVLZXkgPSBrZXlFeHByKGl0ZW0sIGtleSk7XG5cblx0XHRsZXQgbiA9IG5vZGVzLmdldChub2RlS2V5KTtcblx0XHRpZiAoaSA9PT0gMSkge1xuXHRcdFx0dG9SZW1vdmUuZGVsZXRlKGl0ZW0pO1xuXG5cdFx0XHRpZiAoIW4pIHtcblx0XHRcdFx0biA9IGNsZWFuaW5nID9cblx0XHRcdFx0XHRyb290KGRpc3Bvc2UgPT4ge1xuXHRcdFx0XHRcdFx0ZGlzcG9zZXJzLnNldChub2RlS2V5LCBkaXNwb3NlKTtcblx0XHRcdFx0XHRcdHJldHVybiBlbCA/IGVsIDogZXhwcihpdGVtLCBrZXkpO1xuXHRcdFx0XHRcdH0pIDpcblx0XHRcdFx0XHQoZWwgPyBlbCA6IGV4cHIoaXRlbSwga2V5KSk7XG5cblx0XHRcdFx0aWYgKG4ubm9kZVR5cGUgPT09IDExKSBuID0gbi5maXJzdENoaWxkO1xuXG5cdFx0XHRcdG5vZGVzLnNldChub2RlS2V5LCBuKTtcblxuXHRcdFx0XHQvLyBjb25zb2xlLndhcm4oYFtjcmVhdGUgKCR7bm9kZUtleX0pXWAsIG4pO1xuXHRcdFx0XHRpZihuLiRzKSB7XG5cdFx0XHRcdFx0bi4kcy5ob29rKCdtb3VudGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gY29udGV4dC5fY2hpbGRyZW5ba2V5XS5ob29rKCdtb3VudGVkJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpID09PSAtMSkge1xuXHRcdFx0Ly8gY29uc29sZS53YXJuKGBbcmVtb3ZlICgke25vZGVLZXl9KV1gLCBuLCBuLnBhcmVudE5vZGUpO1xuXHRcdFx0aWYobi4kcykge1xuXHRcdFx0XHRuLiRzLmhvb2soJ3VubW91bnRlZCcpO1xuXHRcdFx0fVxuXG5cdFx0XHR0b1JlbW92ZS5hZGQobm9kZUtleSk7XG5cdFx0XHQvLyBjb250ZXh0LnJlbW92ZUNoaWxkKGtleSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG47XG5cdH1cblxuXHRmdW5jdGlvbiBkaXNwb3NlQWxsKCkge1xuXHRcdGRpc3Bvc2Vycy5mb3JFYWNoKGQgPT4gZCgpKTtcblx0XHRkaXNwb3NlcnMuY2xlYXIoKTtcblx0XHRub2Rlcy5jbGVhcigpO1xuXHRcdHRvUmVtb3ZlLmNsZWFyKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBkaXNwb3NlKGl0ZW0pIHtcblx0XHRsZXQgZGlzcG9zZXIgPSBkaXNwb3NlcnMuZ2V0KGl0ZW0pO1xuXHRcdGlmIChkaXNwb3Nlcikge1xuXHRcdFx0ZGlzcG9zZXIoKTtcblx0XHRcdGRpc3Bvc2Vycy5kZWxldGUoaXRlbSk7XG5cdFx0fVxuXHRcdG5vZGVzLmRlbGV0ZShpdGVtKTtcblx0fVxuXG5cdHJldHVybiBwYXJlbnQ7XG59XG4iLCJpbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcbmltcG9ydCB7IGh5ZHJhdGUgfSBmcm9tICdAc2ludW91cy9oeWRyYXRpb24nO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnQHNpbnVvdXMvcmVuZGVyJztcblxuLy8gaW1wb3J0IHsgYXBpIH0gZnJvbSAnc2ludW91cyc7XG4vLyBpbXBvcnQgeyBvYnNlcnZhYmxlIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50L3NyYy9vYnNlcnZhYmxlJztcbi8vIGltcG9ydCB0ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdGVzdC5zaW4nXG4vLyBpbXBvcnQgdGVzdDIgZnJvbSAnLi4vY29tcG9uZW50cy90ZXN0Mi5zaW4nXG5pbXBvcnQgYnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2J1dHRvbi5zaW4nXG4vLyBpbXBvcnQgSW5kZXhQYWdlIGZyb20gJy4uL3BhZ2VzL2luZGV4LnNpbidcbmltcG9ydCB0aW1lQmVuY2htYXJrIGZyb20gJy4vdGltZSc7XG5cbmNvbnN0IEluZGV4UGFnZSA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VJbmRleFwiICovICcuLi9wYWdlcy9pbmRleC5zaW4nKVxuXG5cbnZhciBMQVlPVVQ7XG52YXIgUGFnZUluZGV4LCBQYWdlSW5kZXgyO1xuXG5mdW5jdGlvbiBURVNUX1dFQlBBQ0tfQlVJTEQoKVxue1xuXHR0aW1lQmVuY2htYXJrKCdTU1ItQnVpbGQnKTtcblx0Ly8gU2ludW91cy5yZWdpc3RlckNvbXBvbmVudCh0ZXN0KTtcblx0Ly8gU2ludW91cy5yZWdpc3RlckNvbXBvbmVudCh0ZXN0Mik7XG5cdFNpbnVvdXMucmVnaXN0ZXJDb21wb25lbnQoYnV0dG9uKTtcblx0dGltZUJlbmNobWFyaygnU1NSLUJ1aWxkJyk7XG59XG5cbi8vIGZ1bmN0aW9uIFRFU1RfSU5JVCgpXG4vLyB7XG4vLyBcdHRpbWVCZW5jaG1hcmsoJ1NTUi1Jbml0Jyk7XG4vLyBcdFBhZ2VJbmRleCA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0UGFnZUluZGV4MiA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0dGltZUJlbmNobWFyaygnU1NSLUluaXQnKTtcbi8vIH1cblxuZnVuY3Rpb24gVEVTVF9SRU5ERVIoKVxue1xuXHRyZW5kZXIoSW5kZXhQYWdlLCBMQVlPVVQsIHRpbWVCZW5jaG1hcmssIChjKSA9PiB7XG5cdFx0UGFnZUluZGV4ID0gYztcblx0fSk7XG59XG5cbmZ1bmN0aW9uIENMRUFSX0hPT0tTKClcbntcblx0bGV0IGh0bWwgPSBMQVlPVVQuaW5uZXJIVE1MO1xuXHRMQVlPVVQuaW5uZXJIVE1MID0gaHRtbDtcblx0UGFnZUluZGV4Lmhvb2soJ3VubW91bnRlZCcpO1xufVxuXG5mdW5jdGlvbiBURVNUX0hZRFJBVEUoKVxue1xuXHRoeWRyYXRlKEluZGV4UGFnZSwgTEFZT1VULCB0aW1lQmVuY2htYXJrKTtcbn1cblxuVEVTVF9XRUJQQUNLX0JVSUxEKCk7XG5cbi8vIFRFU1RfSU5JVCgpO1xuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxvYWQpO1xuLy8gcmV0dXJuO1xuKGZ1bmN0aW9uIGxvYWQoKSB7XG5cdExBWU9VVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXlvdXQnKTtcblxuXG5cdC8vIGxldCBkID0gb2JzZXJ2YWJsZSgxKTtcblx0Ly8gYXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdC8vIFx0Y29uc29sZS5sb2coJ1tzYl0nLCBkKCkpO1xuXHQvLyB9KVxuXHQvLyBkKDIpO1xuXHQvLyByZXR1cm47XG5cblxuXHQvLyBURVNUX0hZRFJBVEUoKTtcblx0Ly8gcmV0dXJuO1xuXG5cblx0VEVTVF9SRU5ERVIoKTtcblx0Ly8gY29uc29sZS5sb2coTEFZT1VULmlubmVySFRNTClcblx0Ly8gcmV0dXJuXG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cblx0XHRDTEVBUl9IT09LUygpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHQgVEVTVF9IWURSQVRFKCk7XG5cdFx0fSwgMzAwKTtcblx0fSwgMTAwMCk7XG59KSgpO1xuIiwibGV0IHRpbWVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUobmFtZSlcbntcblx0bGV0IG5vdyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdGlmKHR5cGVvZiB0aW1lc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aW1lc1tuYW1lXSA9IG5vdztcblx0XHRyZXR1cm4gdGltZXNbbmFtZV07XG5cdH1cblxuXHRjb25zb2xlLmxvZyhgWyB0YiAke25hbWV9IF1gLCBub3cgLSB0aW1lc1tuYW1lXSwgJ21zJyk7XG5cblx0ZGVsZXRlIHRpbWVzW25hbWVdO1xufSJdLCJzb3VyY2VSb290IjoiIn0=