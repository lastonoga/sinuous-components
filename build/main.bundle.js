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

var _sinuous = __webpack_require__(/*! sinuous */ "./packages/component/node_modules/sinuous/module/sinuous.js");

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

var _sinuous = __webpack_require__(/*! sinuous */ "./packages/component/node_modules/sinuous/module/sinuous.js");

var _observable = __webpack_require__(/*! sinuous/observable */ "./packages/component/node_modules/sinuous/module/observable.js");

var _ = __webpack_require__(/*! ./ */ "./packages/component/dist/index.js");

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

var _lazy = __webpack_require__(/*! @siph/lazy */ "./packages/lazy/dist/index.js");

var _map = __webpack_require__(/*! ./map */ "./packages/render/dist/map/index.js");

var _slot = __webpack_require__(/*! ./slot */ "./packages/render/dist/slot.js");

var _statement = __webpack_require__(/*! ./statement */ "./packages/render/dist/statement.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uLnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NidXR0b24uc2luP2NlNzkiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYmFzaWMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9keW5hbWljLmpzIiwid2VicGFjazovLy8uLi9zcmMvaC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvb2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oeWRyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21hcC9kaWZmLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4iLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguc2luPzQzZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci10ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aW1lLmpzIl0sIm5hbWVzIjpbIl8iLCJISUQiLCJCYXNpYyIsIm9ic2VydmFibGUiLCJkZWZhdWx0IiwiY29tcHV0ZWQiLCJuYW1lIiwiY2hpbGRyZW4iLCJjaGlsZCIsInBhcmVudCIsInByb3AiLCJ2YWx1ZSIsInR5cGUiLCJwcm9wcyIsImkiLCJjdHgiLCJoIiwic3RhdGVtZW50IiwibG9vcCIsInNsb3QiLCJTaW51b3VzIiwiZWwiLCJ0YWciLCJvcHRzIiwiZHluYW1pY0F0dHJzIiwicmVhZHlPcHRpb25zIiwiY29tcG9uZW50Iiwib3B0aW9ucyIsIl9zbG90cyIsIiRzbG90cyIsIm5vZGUiLCJmbiIsImJpbmRpbmciLCJkIiwidiIsIm1ha2VPYnNlZXJ2YWJsZSIsInN0ciIsImFyZ3VtZW50cyIsImR5bmFtaWMiLCJBcnJheSIsImFyZ1RvU3RyaW5nIiwieSIsIm9iaiIsInJlYWR5U3R5bGVzIiwibWFrZVN0eWxlUHJvcCIsImNsb25lT3B0aW9ucyIsImNsYXNzZXMiLCJzdHlsZXMiLCJzaG91bGRDbG9uZSIsInJlYWR5T3B0aW9uIiwib3B0aW9uIiwibWFrZUNzcyIsIkFzc2lnbk9iamVjdE9wdGlvbnMiLCJBc3NpZ25WYWx1ZU9wdGlvbnMiLCJzaG91bGRCZU1lcmdlZCIsImtleXMiLCJPYmplY3QiLCJqIiwibWVyZ2VPcHRpb25zIiwibWFrZU9wdGlvbiIsIlNUT1JBR0UiLCJoeWRyYXRlIiwic3RhcnRJbmRleCIsInN0YXRlbWVudEFyZ3MiLCJhcmdzIiwiTm9kZSIsImRvY3VtZW50IiwiYXBpIiwiY3VycmVudEluZGV4IiwiZm91bmRDb25kaXRpb24iLCJjb25kaXRpb24iLCJzaXplIiwiY3VycmVudE5vZGUiLCJuZXdOb2RlIiwibWFya0FzUmVhZHkiLCJoaWRlTm9kZXMiLCJwYXJlbnROb2RlIiwicGFyZW50Q2hpbGRyZW4iLCJpdGVtcyIsIml0ZW0iLCJpdGVtS2V5IiwicmVnaXN0ZXJIeWRyYXRpb24iLCJwYXRoIiwiYmluZGVkTm9kZXMiLCJzbG90RGF0YSIsImNvbnRleHQiLCJnZXRTbG90Tm9kZSIsImRhdGEiLCJjaGlsZHJlblNsb3RzIiwic2xvdHMiLCJzdGFydE5vZGVJbmRleCIsImNvbnNvbGUiLCJoeWRyYXRlSCIsIm5ld0FyZ3MiLCJoeWRyYXRlU2xvdHMiLCJoeWRyYXRlSWRsZSIsImh5ZHJhdGVUYWciLCJoeWRyYXRlVGV4dCIsImh5ZHJhdGVMb29wIiwiaHlkcmF0ZVN0YXRlbWVudCIsInRpbWVCZW5jaG1hcmsiLCJjYWxsYmFjayIsInRyZWUiLCJoeWRyYXRpb25Sb290IiwiaHlkcmF0aW9uIiwiaW5zdGFuY2UiLCJzdWJzY3JpYmVycyIsInN1YnNjcmliZXJzX2ZpcnN0Iiwic2tpcCIsImNzc09wdGlvbnMiLCJhZGRTdWJzY3JpYmVyIiwiaGFuZGxlRXZlbnQiLCJlIiwiU2ludW91c0NvbXBvbmVudHMiLCJjcmVhdGVISUQiLCJjbGVhckhJRCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiaGFzQ29tcG9uZW50IiwiZ2V0SHlkcmF0ZUNvbXBvbmVudCIsImdldENvbXBvbmVudEluc3RhbmNlIiwiZ2V0Q29tcG9uZW50IiwiZ2V0SW5zdGFuY2UiLCJtb2R1bGUiLCJsYXlvdXQiLCJhSWR4IiwiYklkeCIsImEiLCJrZXkiLCJrZXlFeHByIiwiYiIsImFFbG0iLCJiRWxtIiwiZ2V0IiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsImJlZm9yZUluaXQiLCJyb290Iiwic3Vic2NyaWJlIiwic2FtcGxlIiwiY2xlYW51cCIsImNsZWFuaW5nIiwiZW5kTWFyayIsImRpc3Bvc2VycyIsIm5vZGVzIiwidG9SZW1vdmUiLCJkZWZhdWx0QSIsInVuc3Vic2NyaWJlIiwiY29udGVudCIsIm5vZGVLZXkiLCJuIiwiZXhwciIsImRpc3Bvc2VyIiwicmVuZGVyIiwicmVzdWx0IiwiY2hpbGRJbmRleCIsIkxBWU9VVCIsIlBhZ2VJbmRleCIsIlBhZ2VJbmRleDIiLCJURVNUX1dFQlBBQ0tfQlVJTEQiLCJidXR0b24iLCJURVNUX1JFTkRFUiIsIkluZGV4UGFnZSIsImMiLCJDTEVBUl9IT09LUyIsImh0bWwiLCJpbm5lckhUTUwiLCJob29rIiwiVEVTVF9IWURSQVRFIiwibG9hZCIsImdldEVsZW1lbnRCeUlkIiwic2V0VGltZW91dCIsInRpbWVzIiwidGltZSIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFD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SSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0osS0FBSyxDQUFDckssSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDcUssU0FBSyxDQUFDckssSUFBRCxDQUFMLEdBQWN1SyxHQUFkO0FBQ0EsV0FBT0YsS0FBSyxDQUFDckssSUFBRCxDQUFaO0FBQ0E7O0FBRURxRixTQUFPLENBQUNxRixHQUFSLFdBQW9CMUssSUFBcEIsU0FBOEJ1SyxHQUFHLEdBQUdGLEtBQUssQ0FBQ3JLLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPcUssS0FBSyxDQUFDckssSUFBRCxDQUFaO0FBQ0EsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXHRcdGltcG9ydCBjb21wb25lbnRDb25maWcgZnJvbSBcIi4vc2J1dHRvbi5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2lwaC9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFNidXR0b24oKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnU2J1dHRvbic7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSB7XCJkZWZhdWx0XCI6e1wicGF0aFwiOlswLDFdLFwidGFnXCI6XCJkaXZcIixcImluZGV4XCI6MH19O1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kcyA9IE9iamVjdC5rZXlzKGNvbmZpZy5tZXRob2RzKTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2Z1bmN0aW9uYWwgPSBmYWxzZTtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcpIHtcblx0XHRcdGlmKHR5cGVvZiBjb25maWdba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcubWV0aG9kcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWcubWV0aG9kc1trZXldXG5cdFx0fVxuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3Byb3BzID0ge307XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLnByb3BzKSB7XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19wcm9wc1trZXldID0gY29uZmlnLnByb3BzW2tleV1cblx0XHR9XG5cdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcmVuZGVyID0gZnVuY3Rpb24oaCwgeyBjdHgsIGNvbXBvbmVudHMsIHJlbmRlciwgc3RhdGVtZW50LCBzbG90LCBsb29wIH0pIHtcblx0XHRcdFx0cmV0dXJuIGgoXG4gIFwiZGl2XCIsXG4gIFtcbiAgICBjdHgub3B0aW9ucyxcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjE1cHhcIixcbiAgICAgIH0sXG4gICAgICBjbGFzczogXCJuZXctYnV0dG9uXCIsXG4gICAgICBzdHlsZTogW3sgY29sb3I6IGN0eC5fY29tcHV0ZWQudGVzdENvbG9yIH1dLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGN0eC5jbGljayxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgICgpID0+IHtcbiAgICAgIHJldHVybiBgJHtjdHguX3N0YXRlLnMxKCl9YDtcbiAgICB9LFxuICAgIHNsb3QoXG4gICAgICBjdHgsXG4gICAgICBoLFxuICAgICAgXCJkZWZhdWx0XCIsXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJzXCIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdGFnOiBcImRpdlwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtgRGVmYXVsdCBidXR0b24gdGV4dGBdXG4gICAgKSxcbiAgXVxuKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoKSB7XG5cdFx0XHRcdGxldCBjdHggPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4ge1xuICBfdDogXCJoXCIsXG4gIHQ6IFwiZGl2XCIsXG4gIG86IFtcbiAgICBjdHgub3B0aW9ucyxcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgIGNsYXNzOiBcIm5ldy1idXR0b25cIixcbiAgICAgIHN0eWxlOiBbeyBjb2xvcjogY3R4Ll9jb21wdXRlZC50ZXN0Q29sb3IgfV0sXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogY3R4LmNsaWNrLFxuICAgICAgfSxcbiAgICAgIF9zOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGM6IFtcbiAgICB7XG4gICAgICBfdDogXCJ0XCIsXG4gICAgICB0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtjdHguX3N0YXRlLnMxKCl9YDtcbiAgICAgIH0sXG4gICAgfSxcbiAgICAtMSxcbiAgXSxcbn07XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBwcm9wMToge1xuICAgICAgdHlwZTogXCJOdW1iZXJcIixcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDk7XG4gICAgICB9XG4gICAgfSxcbiAgICBwdDoge1xuICAgICAgdHlwZTogXCJOdW1iZXJcIixcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWVyOiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBzdGF0ZShvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHMxOiBvKHRoaXMucmFuZG9tKDEsIDEwMCkpXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZChvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlc3RDb2xvcjogbygoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZS5zMSgpICUgMiA9PT0gMCA/ICdyZWQnIDogJ2dyZWVuJztcbiAgICAgIH0pLFxuICAgICAgdGVzdENsYXNzOiBvKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZWQ6IHRoaXMuX3N0YXRlLnMxKCkgJSAyID09PSAwXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHJhbmRvbTogZnVuY3Rpb24gKHMsIGUpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlKSArIHM7XG4gICAgfSxcbiAgICBjbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgYWxlcnQodGhpcy5fc3RhdGUuczEoKSk7XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGlyZWN0aW9uID0gMTsgLy8gY29uc29sZS5sb2coJ2NyZWF0ZWQnLCB0aGlzLmhpZCwgJ3dpdGggczEgPScsIHMxKTtcblxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMSh0aGlzLl9zdGF0ZS5zMSgpICsgMSk7IC8vTWF0aC5yYW5kb20oMCwgMTAwKVxuICAgICAgfSwgMjAwMCk7IC8vIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgLy8gXHQvLyBjb25zb2xlLmxvZygnaW50ZXJ2YWwnLCB0aGlzLmhpZCk7XG4gICAgICAvLyBcdGlmKHMxID4gNDApIHtcbiAgICAgIC8vIFx0XHRkaXJlY3Rpb24gPSAtNTtcbiAgICAgIC8vIFx0fSBlbHNlIGlmKHMxIDwgMTApIHtcbiAgICAgIC8vIFx0XHRkaXJlY3Rpb24gPSA1O1xuICAgICAgLy8gXHR9XG4gICAgICAvLyBcdHMxICs9IGRpcmVjdGlvblxuICAgICAgLy8gfSwgMTAwMClcbiAgICB9LFxuICAgIHVubW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3VubW91bnRlZCcsIHRoaXMuaGlkKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fZGF0YS50aW1lcik7XG4gICAgfVxuICB9XG59OyIsImV4cG9ydCBjb25zdCBfID0gLTE7XG4iLCJpbXBvcnQgU2ludW91cyBmcm9tICdAc2lwaC9pJztcbmltcG9ydCB7IF8gfSBmcm9tICdAc2lwaC9jb21waWxlci9zcmMvZW1wdHknO1xuXG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCB9IGZyb20gJy4vb2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IHN0YXRlbWVudCwgbG9vcCwgc2xvdCB9IGZyb20gJ0BzaXBoL3JlbmRlcic7XG5cbmltcG9ydCB7IGggfSBmcm9tICcuLyc7XG5cbi8vIGltcG9ydCB7IHJlbmRlciwgaHlkcmF0ZSB9IGZyb20gJy4vdGVtcGxhdGUnO1xubGV0IEhJRCA9IDA7XG5cblxudmFyIEJhc2ljID0gZnVuY3Rpb24gKCkge1xuXG5cdGZ1bmN0aW9uIEJhc2ljKClcblx0e1xuXHRcdHRoaXMuX2lzQ29tcG9uZW50ID0gdHJ1ZTtcblx0XHR0aGlzLmhpZCA9ICsrSElEO1xuXHRcdHRoaXMuJGVsID0gbnVsbDtcblxuXHRcdHRoaXMuX3Byb3BzID0ge307XG5cdFx0dGhpcy5fcGFzc2VkUHJvcHMgPSB7fTtcblxuXHRcdC8vIExvY2FsIGRhdGFcblx0XHR0aGlzLl9kYXRhID0gdGhpcy5kYXRhKCk7XG5cdFx0Ly8gU3RhdGVmdWwgZGF0YVxuXHRcdHRoaXMuX3N0YXRlID0gdGhpcy5zdGF0ZShvYnNlcnZhYmxlKTtcblx0XHQvLyBzbG90c1xuXHRcdHRoaXMuX3Nsb3RzID0ge1xuXHRcdFx0ZGVmYXVsdDogW10sXG5cdFx0fTtcblx0XHQvLyBob29rc1xuXHRcdHRoaXMuX2hvb2tzID0gW107XG5cblx0XHR0aGlzLl9jb21wdXRlZCA9IHRoaXMuY29tcHV0ZWQoY29tcHV0ZWQpO1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gW107XG5cdFx0dGhpcy5fZWxfaW5kZXggPSAwO1xuXHRcdHRoaXMub3B0aW9ucyA9IG51bGw7XG5cblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXG5cdFx0Ly8gRGVmYXVsdCBwcm9wIHZhbHVlcyBcblx0XHQvLyB0aGlzLmluaXRQcm9wcygpO1xuXG5cdFx0Ly8gdGhpcy5pbml0VGVtcGxhdGUoKTtcblxuXHRcdHRoaXMuc2V0Q2hpbGRyZW4oKTtcblx0XHR0aGlzLnNldFBhcmVudCgpO1xuXG5cdFx0dGhpcy5iaW5kQ29udGV4dCgpO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuYmluZENvbnRleHQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9jb21wdXRlZCkge1xuXHRcdFx0dGhpcy5fY29tcHV0ZWRba2V5XSA9IHRoaXMuX2NvbXB1dGVkW2tleV0uYmluZCh0aGlzKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9tZXRob2RzKSB7XG5cdFx0XHRsZXQgbmFtZSA9IHRoaXMuX21ldGhvZHNba2V5XTtcblx0XHRcdHRoaXNbbmFtZV0gPSB0aGlzW25hbWVdLmJpbmQodGhpcyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBDb25maWdcblx0ICovXG5cblx0Ly8gQmFzaWMucHJvdG90eXBlLnNldE1ldGhvZHMgPSBmdW5jdGlvbihtZXRob2RzID0ge30pXG5cdC8vIHtcblx0Ly8gXHR0aGlzLl9tZXRob2RzID0gbWV0aG9kcztcblx0Ly8gfVxuXG5cdC8qKlxuXHQgKiBIaWVyYXJjaHlcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnNldENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGRyZW4gPSBbXSlcblx0e1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5hZGRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkKVxuXHR7XG5cdFx0aWYoY2hpbGQuX2Z1bmN0aW9uYWwpIHtcblx0XHRcdGNoaWxkID0gXztcblx0XHR9XG5cblx0XHR0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblxuXHRcdGlmKGNoaWxkLnNldFBhcmVudCkge1xuXHRcdFx0Y2hpbGQuc2V0UGFyZW50KHRoaXMpO1xuXHRcdH1cblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uKGluZGV4KVxuXHR7XG5cdFx0dGhpcy5fY2hpbGRyZW5baW5kZXhdLmhvb2soJ3VubW91bnRlZCcpO1xuXHRcdHRoaXMuX2NoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUuc2V0UGFyZW50ID0gZnVuY3Rpb24ocGFyZW50ID0gbnVsbClcblx0e1xuXHRcdHRoaXMuX3BhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm9wc1xuXHQgKi9cblx0QmFzaWMucHJvdG90eXBlLnByb3BzID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaW5pdFByb3BzID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fcHJvcHMpXG5cdFx0e1xuXHRcdFx0bGV0IHByb3AgPSB0aGlzLl9wcm9wc1trZXldO1xuXHRcdFx0bGV0IHZhbHVlID0gbnVsbDtcblx0XHRcdGxldCB0eXBlID0gbnVsbDtcblxuXHRcdFx0aWYodHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Ly8gdHlwZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWUgPSBwcm9wLmRlZmF1bHQoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fZGF0YVtrZXldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc1Nsb3RzID0gZnVuY3Rpb24obmFtZSwgc2xvdHMpXG5cdHtcblx0XHR0aGlzLl9zbG90c1tuYW1lXSA9IHNsb3RzO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucylcblx0e1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc1Byb3BzID0gZnVuY3Rpb24ocHJvcHMpXG5cdHtcblx0XHRpZighcHJvcHMpIHtcblx0XHRcdHByb3BzID0ge307XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fX3Byb3BzKVxuXHRcdHtcblx0XHRcdGxldCB2YWx1ZSA9IHRoaXMuX19wcm9wc1trZXldLmRlZmF1bHQoKTtcblx0XHRcdGlmKHByb3BzW2tleV0pIHtcblx0XHRcdFx0dmFsdWUgPSBwcm9wc1trZXldO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9wcm9wc1trZXldID0gdmFsdWU7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogTG9jYWwgY29tcG9uZW50IGRhdGFcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5jb21wdXRlZCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGF0ZWZ1bCBkYXRhXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5zdGF0ZSA9IGZ1bmN0aW9uKG8pXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHQvKipcblx0ICogMS4gQ3JlYXRlIGNoaWxkIGNvbXBvbmVudHMgKGRpZmZlcmVudCBjb250ZXh0KVxuXHQgKiAyLiBQYXNzIHByb3BzXG5cdCAqIDMuIFJlbmRlclxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUudGVtcGxhdGUgPSBmdW5jdGlvbigpIHt9XG5cblx0QmFzaWMucHJvdG90eXBlLmNoaWxkQ29tcG9uZW50cyA9IGZ1bmN0aW9uKCkge31cblxuXHQvKipcblx0ICogIExpZmUgY3ljbGUgaG9va3Ncblx0ICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5ob29rID0gZnVuY3Rpb24odHlwZSA9ICdtb3VudGVkJylcblx0e1xuXHRcdGlmKCF0aGlzLl9ob29rcy5pbmNsdWRlcyh0eXBlKSkge1xuXHRcdFx0dGhpcy5faG9va3MucHVzaCh0eXBlKTtcblx0XHR9XG5cblx0XHRpZih0aGlzW3R5cGVdKSB7XG5cdFx0XHR0aGlzW3R5cGVdLmNhbGwodGhpcyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodGhpcy5fY2hpbGRyZW5baV0gPT09IF8gfHwgdGhpcy5fY2hpbGRyZW5baV0uX2hvb2tzLmluY2x1ZGVzKHR5cGUpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZighdGhpcy5fY2hpbGRyZW5baV0uX2Z1bmN0aW9uYWwpIHtcblx0XHRcdFx0dGhpcy5fY2hpbGRyZW5baV0uaG9vayh0eXBlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5tb3VudGVkID0gZnVuY3Rpb24oKSB7fVxuXG5cdEJhc2ljLnByb3RvdHlwZS51bm1vdW50ZWQgPSBmdW5jdGlvbigpIHt9XG5cblx0LyoqXG5cdCAqIFByaXZhdGUgQVBJIGZvciByZW5kZXIgYW5kIGh5ZHJhdGVcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGN0eCA9IG51bGwpXG5cdHtcblx0XHRpZihjdHggPT09IG51bGwpIHtcblx0XHRcdGN0eCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aC5iaW5kKGN0eCk7XG5cblx0XHR0aGlzLiRlbCA9IGN0eC5fX3JlbmRlcihoLmJpbmQoY3R4KSwge1xuXHRcdFx0Y3R4LFxuXHRcdFx0c3RhdGVtZW50LFxuXHRcdFx0bG9vcCxcblx0XHRcdHNsb3QsXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy4kZWw7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5oeWRyYXRlID0gZnVuY3Rpb24oY3R4ID0gbnVsbClcblx0e1xuXHRcdGlmKGN0eCA9PT0gbnVsbCkge1xuXHRcdFx0Y3R4ID0gdGhpcztcblx0XHR9XG5cblx0XHRoLmJpbmQoY3R4KTtcblxuXHRcdHJldHVybiBjdHguX19oeWRyYXRlKGgpO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUudGVtcGxhdGUgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXG5cdC8vIEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZUJ1aWxkZXIgPSBmdW5jdGlvbihoLCBvcHRzKVxuXHQvLyB7XG5cdC8vIFx0cmV0dXJuIHRoaXNbYF9fJHsgb3B0cy5yZW5kZXIgfWBdKGgsIG9wdHMpO1xuXHQvLyB9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuY29tcG9uZW50ID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUuZ2V0VUlEID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRyZXR1cm4gYGh5ZHItJHsgU2ludW91cy5jcmVhdGVISUQoaW5kZXgpIH1gO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oXCJuYW1lXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lOyB9KTtcblxuXHRyZXR1cm4gQmFzaWM7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xuIiwiaW1wb3J0IHsgaCwgaHMsIGFwaSB9IGZyb20gJ3NpbnVvdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljKGgsIHRhZywgb3B0cywgY2hpbGRyZW4pXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IGVsID0gdGFnKCk7XG5cdFx0cmV0dXJuIGgoZWwsIG9wdHMsIGNoaWxkcmVuKTtcblx0fTtcblxufVxuIiwiaW1wb3J0IHsgaCBhcyBocyB9IGZyb20gJ3NpbnVvdXMnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBvcHRpb25zLCAgfSBmcm9tICcuLyc7XG5pbXBvcnQgU2ludW91cyBmcm9tICdAc2lwaC9pJztcblxuXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGlmKGNoaWxkLnNldFBhcmVudCkge1xuXHRcdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGgoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbntcblx0ZWwgPSBlbC50b0xvd2VyQ2FzZSgpO1xuXHQvLyBlbCA9IGNvbXB1dGVkKCgpID0+ICh0eXBlb2YgZWwgPT09ICdmdW5jdGlvbicgPyBlbCA6IGVsKSk7XG5cblx0Ly8gY29uc29sZS5sb2coJ1sgRkYgXScsIGVsLCB0aGlzKVxuXHRsZXQgZHluYW1pY0F0dHJzID0gZmFsc2U7XG5cblx0bGV0IHJlYWR5T3B0aW9ucyA9IG9wdGlvbnMob3B0cyk7XG5cdC8vIElmIEhUTUwgdGFnIHJlbmRlclxuXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG5cdFx0cmV0dXJuIGhzKGVsLCByZWFkeU9wdGlvbnMsIGNoaWxkcmVuKTtcblx0fVxuXG5cdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldENvbXBvbmVudChlbCk7XG5cblx0Ly8gY29uc29sZS5sb2codGhpcylcblx0aWYodGhpcykge1xuXHRcdHRoaXMuYWRkQ2hpbGRyZW4oY29tcG9uZW50KTtcblx0fVxuXG5cdGlmKGNvbXBvbmVudC5fZnVuY3Rpb25hbCkge1xuXHRcdHJldHVybiBjb21wb25lbnQucmVuZGVyKHtcblx0XHRcdG9wdGlvbnM6IG9wdHMsXG5cdFx0XHRfc2xvdHM6IHJlYWR5T3B0aW9ucy4kc2xvdHMsXG5cdFx0fSk7XG5cdH1cblxuXHQvLyBpZih0eXBlb2Ygb3B0cy5wcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Y29tcG9uZW50LnBhc3NQcm9wcyhvcHRzLnByb3BzKTtcblx0Ly8gfVxuXG5cdGZvcihsZXQga2V5IGluIG9wdHMuJHNsb3RzKSB7XG5cdFx0Y29tcG9uZW50LnBhc3NTbG90cyhrZXksIG9wdHMuJHNsb3RzW2tleV0pO1x0XG5cdH1cblxuXHRjb21wb25lbnQucGFzc09wdGlvbnMob3B0cyk7XG5cblx0bGV0IG5vZGUgPSBjb21wb25lbnQucmVuZGVyKCk7XG5cblx0bm9kZS4kcyA9IGNvbXBvbmVudDtcblxuXHRyZXR1cm4gbm9kZTtcbn1cbiIsImltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICdAc2lwaC9sYXp5JztcbmltcG9ydCB7IG1hcCBhcyBsb29wIH0gZnJvbSAnLi9tYXAnO1xuaW1wb3J0IHsgc2xvdCB9IGZyb20gJy4vc2xvdCc7XG5pbXBvcnQgeyBzdGF0ZW1lbnQgfSBmcm9tICcuL3N0YXRlbWVudCc7XG5cbmZ1bmN0aW9uIHJlbmRlcihjb21wb25lbnQsIGxheW91dCwgdGltZUJlbmNobWFyayA9ICgpID0+IHt9LCBjYWxsYmFjayA9IG51bGwpIHtcblxuICAgIGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuICAgIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCAoaW5zdGFuY2UpID0+IHtcblxuICAgIFx0dGltZUJlbmNobWFyaygnUmVuZGVyJyk7XG5cblx0XHRsYXlvdXQuYXBwZW5kKGluc3RhbmNlLnJlbmRlcigpKTtcblx0XHRpbnN0YW5jZS5ob29rKCdtb3VudGVkJyk7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHRpbWVCZW5jaG1hcmsoJ1JlbmRlcicpO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9KTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyLCBsb29wLCBzdGF0ZW1lbnQsIHNsb3QgfTtcbiIsImltcG9ydCB7IG9ic2VydmFibGUgYXMgc2ludW91c09ic2VydmFibGUsIGNvbXB1dGVkIGFzIHNpbnVvdXNDb21wdXRlZCB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlT2JzZWVydmFibGUoZm4pXG57XG5cdGZuLl9vYnNlcnZhYmxlID0gdHJ1ZTtcblx0cmV0dXJuIGZuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQodiwgYmluZGluZyA9IGZhbHNlKSB7XG5cblx0bGV0IGQ7XG5cdFxuXHRpZihiaW5kaW5nKSB7XG5cdFx0ZCA9IHNpbnVvdXNDb21wdXRlZCh2LmJpbmQodGhpcykpO1xuXHR9IGVsc2Uge1xuXHRcdGQgPSBzaW51b3VzQ29tcHV0ZWQodik7XG5cdH1cblxuXHRtYWtlT2JzZWVydmFibGUoZCk7XG5cblx0cmV0dXJuIGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZhYmxlKHYsIGJpbmRpbmcgPSBmYWxzZSlcbntcblx0Ly8gbGV0IG9icyA9IG51bGw7XG5cdC8vIGxldCBpbmRleCA9IDA7XG5cblx0Ly8gbGV0IGRhdGEgPSAodikgPT4ge1xuXHQvLyBcdGNvbnNvbGUubG9nKHNlZWQsIHYsIGluZGV4KVxuXHQvLyBcdGlmKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJykge1xuXHQvLyBcdFx0aWYoaW5kZXggPT09IDApIHtcblx0Ly8gXHRcdFx0aW5kZXgrKztcblx0Ly8gXHRcdFx0cmV0dXJuIHNlZWQ7XG5cdC8vIFx0XHR9XG5cblx0Ly8gXHRcdHJldHVybiBvYnMoKTtcblx0Ly8gXHR9XG5cblx0Ly8gXHQvLyBpZihpbmRleCA9PT0gMCkge1xuXHQvLyBcdC8vIFx0aW5kZXgrKztcblx0Ly8gXHQvLyBcdHJldHVybiB2O1xuXHQvLyBcdC8vIH1cblxuXHQvLyBcdC8vIGlmKG9icyA9PT0gbnVsbCkge1xuXHQvLyBcdC8vIFx0b2JzID0gc2ludW91c09ic2VydmFibGUodik7XG5cdC8vIFx0Ly8gfVxuXHQvLyB9XG5cblx0bGV0IGQgPSBzaW51b3VzT2JzZXJ2YWJsZSh2KTtcblxuXHRcblx0bWFrZU9ic2VlcnZhYmxlKGQpO1xuXG5cdHJldHVybiBkO1xufVxuIiwiZnVuY3Rpb24gYXJnVG9TdHJpbmcoKVxue1xuXHRsZXQgc3RyID0gJyc7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaV07XG5cdFx0XG5cdFx0aWYodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR2YWx1ZSA9IHZhbHVlKCk7XG5cdFx0fVxuXG5cdFx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yKGxldCBrZXkgaW4gdmFsdWUpIHtcblx0XHRcdFx0aWYodmFsdWVba2V5XSkge1xuXHRcdFx0XHRcdHN0ciArPSBgICR7IGtleSB9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHIgKz0gYCAke3ZhbHVlfWA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcmdUb09iamVjdCgpXG57XG5cdGxldCBzdHIgPSAnJztcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuXHRcdFx0bGV0IHZhbHVlID0gYXJndW1lbnRzW2ldW2tleV07XG5cdFx0XHRpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzW2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIFBhcnNlIGNsYXNzZXNcbiAqIEBwYXJhbSAge1t0eXBlXX0gc3RhdGljICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IGR5bmFtaWMgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZnVuY3Rpb24gY2xhc3NlcyhzdHIgPSBudWxsLCBkeW5hbWljID0gbnVsbClcbntcblx0aWYoc3RyID09PSBudWxsICYmIGR5bmFtaWMgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRpZihzdHIgPT09IG51bGwpIHtcblx0XHRzdHIgPSAnJztcblx0fVxuXHRcblx0aWYodHlwZW9mIGR5bmFtaWMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRkeW5hbWljID0gZHluYW1pYygpO1xuXHR9XG5cblx0aWYoIUFycmF5LmlzQXJyYXkoZHluYW1pYykpIHtcblx0XHRkeW5hbWljID0gW2R5bmFtaWNdO1xuXHR9XG5cblx0c3RyICs9IGFyZ1RvU3RyaW5nLmFwcGx5KHRoaXMsIGR5bmFtaWMpO1xuXHRcblx0Ly8gY29uc29sZS5sb2coc3RyKTtcblxuXHRyZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIFN0eWxlc1xuICogQHBhcmFtICB7T2JqZWN0fSBvYmogICAgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1t0eXBlXX0gZHluYW1pYyBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiBtYWtlU3R5bGVQcm9wKG5hbWUpXG57XG5cdHJldHVybiBuYW1lXG5cdFx0LnJlcGxhY2UoL1xcLj8oW0EtWl0rKS9nLCBmdW5jdGlvbiAoeCx5KSB7XG5cdFx0XHRyZXR1cm4gXCItXCIgKyB5LnRvTG93ZXJDYXNlKClcblx0XHR9KVxuXHRcdC5yZXBsYWNlKC9eLS8sIFwiXCIpO1xufVxuXG5mdW5jdGlvbiBzdHlsZXMob2JqID0ge30sIGR5bmFtaWMgPSBudWxsKVxue1xuXHRsZXQgcmVhZHlTdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xuXG5cdGlmKHR5cGVvZiBkeW5hbWljID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0ZHluYW1pYyA9IGR5bmFtaWMoKTtcblx0fVxuXG5cdGlmKCFBcnJheS5pc0FycmF5KGR5bmFtaWMpKSB7XG5cdFx0ZHluYW1pYyA9IFtkeW5hbWljXTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZHluYW1pYy5sZW5ndGg7IGkrKykge1xuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGR5bmFtaWNbaV0pIHtcblx0XHRcdGxldCB2YWx1ZSA9IGR5bmFtaWNbaV1ba2V5XTtcblx0XHRcdFxuXHRcdFx0aWYodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUoKTtcblx0XHRcdH1cblx0XHRcdHJlYWR5U3R5bGVzW21ha2VTdHlsZVByb3Aoa2V5KV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVhZHlTdHlsZXM7XG59XG5cbmxldCBjbG9uZU9wdGlvbnMgPSBbJ19zJywgJyRzbG90cyddO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNzcyhyZWFkeU9wdGlvbnMsIG9wdGlvbnMpXG57XG5cdGlmKG9wdGlvbnMuc3RhdGljQ2xhc3MgfHwgb3B0aW9ucy5jbGFzcykge1xuXHRcdHJlYWR5T3B0aW9ucy5jbGFzcyA9IGNsYXNzZXMuYmluZCh0aGlzLCBvcHRpb25zLnN0YXRpY0NsYXNzIHx8IG51bGwsIG9wdGlvbnMuY2xhc3MgfHwgbnVsbCk7XG5cdH1cblxuXHRpZihvcHRpb25zLnN0YXRpY1N0eWxlIHx8IG9wdGlvbnMuc3R5bGUpIHtcblx0XHRyZWFkeU9wdGlvbnMuc3R5bGUgPSBzdHlsZXMuYmluZCh0aGlzLCBvcHRpb25zLnN0YXRpY1N0eWxlIHx8IHt9LCBvcHRpb25zLnN0eWxlIHx8IG51bGwpO1xuXHR9XG5cblx0cmV0dXJuIHJlYWR5T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VPcHRpb24ob3B0aW9uLCBzaG91bGRDbG9uZSA9IHRydWUpXG57XG5cdGxldCByZWFkeU9wdGlvbiA9IHt9O1xuXG5cdGlmKG9wdGlvbi5vbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Zm9yKGxldCBrZXkgaW4gb3B0aW9uLm9uKSB7XG5cdFx0XHRyZWFkeU9wdGlvbltgb24ke2tleX1gXSA9IG9wdGlvbi5vbltrZXldO1xuXHRcdH1cblx0fVxuXG5cdGlmKG9wdGlvbi5rZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJlYWR5T3B0aW9uWydkYXRhLWtleSddID0gb3B0aW9uLmtleTtcblx0fVxuXG5cdG1ha2VDc3MocmVhZHlPcHRpb24sIG9wdGlvbik7XG5cblx0aWYoc2hvdWxkQ2xvbmUpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNsb25lT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IG5hbWUgPSBjbG9uZU9wdGlvbnNbaV07XG5cdFx0XHRpZihvcHRpb25bbmFtZV0pIHtcblx0XHRcdFx0cmVhZHlPcHRpb25bbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZWFkeU9wdGlvbjtcbn1cblxuY29uc3QgQXNzaWduT2JqZWN0T3B0aW9ucyA9IFsnc3RhdGljU3R5bGUnLCAnYXR0cnMnLCAnb24nXTtcbmNvbnN0IEFzc2lnblZhbHVlT3B0aW9ucyA9IFsnc3R5bGUnLCAnY2xhc3MnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhvcHRpb25zKVxue1xuXHRsZXQgcmVhZHlPcHRpb25zID0ge307XG5cdGxldCBzaG91bGRCZU1lcmdlZCA9IGZhbHNlO1xuXG5cdGlmKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFxuXHRcdFx0aWYob3B0aW9uc1tpXSA9PT0gbnVsbCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0bGV0IGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zW2ldKTtcblxuXHRcdFx0aWYoa2V5cy5sZW5ndGggPT09IDEgJiYga2V5cy5pbmNsdWRlcygnJHNsb3RzJykpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmKGkgPiAwKSB7XG5cdFx0XHRcdHNob3VsZEJlTWVyZ2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0aWYoIXNob3VsZEJlTWVyZ2VkKSB7XG5cdFx0XHRyZXR1cm4gb3B0aW9uc1sxXTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG9wdGlvbnM7XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgb3B0aW9uID0gb3B0aW9uc1tpXVxuXHRcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IEFzc2lnbk9iamVjdE9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGxldCBuYW1lID0gQXNzaWduT2JqZWN0T3B0aW9uc1tqXTtcblx0XHRcdFxuXHRcdFx0aWYoIW9wdGlvbltuYW1lXSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIXJlYWR5T3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV0gPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGxldCBwcm9wIGluIG9wdGlvbltuYW1lXSkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV1bcHJvcF0gPSBvcHRpb25bbmFtZV1bcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBBc3NpZ25WYWx1ZU9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGxldCBuYW1lID0gQXNzaWduVmFsdWVPcHRpb25zW2pdO1xuXG5cdFx0XHRpZighb3B0aW9uW25hbWVdKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighcmVhZHlPcHRpb25zW25hbWVdKSB7XG5cdFx0XHRcdHJlYWR5T3B0aW9uc1tuYW1lXSA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWFkeU9wdGlvbnNbbmFtZV0gPSByZWFkeU9wdGlvbnNbbmFtZV0uY29uY2F0KG9wdGlvbltuYW1lXSk7XG5cdFx0fVxuXG5cdFx0aWYob3B0aW9uLl9zICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJlYWR5T3B0aW9ucy5fcyA9IG9wdGlvbi5fcztcblx0XHR9XG5cblx0XHRpZihvcHRpb24ua2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJlYWR5T3B0aW9ucy5rZXkgPSBvcHRpb24ua2V5O1xuXHRcdH1cblxuXHRcdGlmKG9wdGlvbi5zdGF0aWNDbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpZihyZWFkeU9wdGlvbnMuc3RhdGljQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnMuc3RhdGljQ2xhc3MgPSBvcHRpb24uc3RhdGljQ2xhc3M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZWFkeU9wdGlvbnMuc3RhdGljQ2xhc3MgKz0gJyAnICsgb3B0aW9uLnN0YXRpY0NsYXNzO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIGNvbnNvbGUud2FybihyZWFkeU9wdGlvbnMpXG5cblx0cmV0dXJuIHJlYWR5T3B0aW9ucztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3B0aW9ucyhvcHRpb25zLCBzaG91bGRDbG9uZSA9IHRydWUpXG57XG5cdGxldCByZWFkeU9wdGlvbnMgPSBtZXJnZU9wdGlvbnMob3B0aW9ucyk7XG5cblx0cmV0dXJuIG1ha2VPcHRpb24ocmVhZHlPcHRpb25zLCBzaG91bGRDbG9uZSk7XG59XG4iLCJpbXBvcnQgeyBhcGkgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IF8gfSBmcm9tICdAc2lwaC9jb21waWxlci9zcmMvZW1wdHknO1xuaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpcGgvaSc7XG5pbXBvcnQgeyBvcHRpb25zIGFzIHBhcnNlT3B0aW9ucywgaCB9IGZyb20gJ0BzaXBoL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnQHNpcGgvbGF6eSc7XG5pbXBvcnQgeyBsb29wIH0gZnJvbSAnQHNpcGgvcmVuZGVyJztcbmltcG9ydCBoeWRyYXRlUHJvcHMgZnJvbSAnLi9wcm9wZXJ0eSc7XG5cbmxldCBPQlNFUlZFUjtcbmxldCBTVE9SQUdFID0ge307XG5cbmZ1bmN0aW9uIGh5ZHJhdGVIKGNvbnRleHQsIGVsLCBvcHRpb25zLCBjaGlsZHJlbilcbntcblx0aHlkcmF0ZVByb3BzKGNvbnRleHQsIGVsLCBvcHRpb25zKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0aHlkcmF0ZShjb250ZXh0LCBlbC5jaGlsZE5vZGVzW2ldLCBjaGlsZHJlbltpXSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZVN0YXRlbWVudChjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRsZXQgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXHRsZXQgc3RhcnRJbmRleCA9IDA7XG5cblx0d2hpbGUoKG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZykgIT0gbnVsbClcblx0XHRzdGFydEluZGV4Kys7XG5cdFxuXHRsZXQgc3RhdGVtZW50QXJncyA9IGFyZ3MuYTtcblxuXHRmdW5jdGlvbiBoaWRlTm9kZXMoY2hpbGRyZW4sIHN0YXJ0SW5kZXgsIGxlbmd0aClcblx0e1xuXHRcdGZvciAodmFyIGogPSBzdGFydEluZGV4OyBqIDw9IGxlbmd0aDsgaisrKSB7XG5cdFx0XHRsZXQgbm9kZSA9IGNoaWxkcmVuW2pdO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2hpZGUnLCBqLCBub2RlKTtcblx0XHRcdGlmKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuQ09NTUVOVF9OT0RFKSB7XG5cdFx0XHRcdG5vZGUucmVwbGFjZVdpdGgoZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJykpO1xuXHRcdFx0fVxuXG5cdFx0XHRub2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0fVxuXHR9XG5cblx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0bGV0IGN1cnJlbnRJbmRleCA9IHN0YXJ0SW5kZXg7XG5cdFx0bGV0IGZvdW5kQ29uZGl0aW9uID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdGF0ZW1lbnRBcmdzLmxlbmd0aDsgaSs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBzdGF0ZW1lbnRBcmdzW2ldO1xuXHRcdFx0bGV0IHNpemUgPSBzdGF0ZW1lbnRBcmdzW2kgKyAxXTtcblx0XHRcdGxldCBjb21wb25lbnQgPSBzdGF0ZW1lbnRBcmdzW2kgKyAyXTtcblxuXHRcdFx0bGV0IGN1cnJlbnROb2RlID0gcGFyZW50LmNoaWxkTm9kZXNbY3VycmVudEluZGV4XTtcblxuXHRcdFx0Y29uZGl0aW9uID0gdHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmRpdGlvbigpIDogY29uZGl0aW9uO1xuXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhjdXJyZW50Tm9kZSwgY29uZGl0aW9uICYmICFmb3VuZENvbmRpdGlvbik7XG5cdFx0XHRpZihjb25kaXRpb24gJiYgIWZvdW5kQ29uZGl0aW9uKSB7XG5cdFx0XHRcdGZvdW5kQ29uZGl0aW9uID0gdHJ1ZTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3Nob3cnLCBwYXJlbnQuY2hpbGROb2Rlc1tjdXJyZW50SW5kZXhdLCBzaXplKTtcblx0XHRcdFx0aWYoY3VycmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuQ09NTUVOVF9OT0RFKSB7XG5cdFx0XHRcdFx0Ly8gIHJlbmRlclxuXHRcdFx0XHRcdGxldCBuZXdOb2RlID0gY29tcG9uZW50LnIoaC5iaW5kKGNvbnRleHQpKTtcblx0XHRcdFx0XHRjdXJyZW50Tm9kZS5yZXBsYWNlV2l0aChuZXdOb2RlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBoeWRyYXRlXG5cdFx0XHRcdFx0bWFya0FzUmVhZHkoY3VycmVudE5vZGUpO1xuXHRcdFx0XHRcdGh5ZHJhdGUoY29udGV4dCwgY3VycmVudE5vZGUsIGNvbXBvbmVudC5oKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1toaWRlXScsIHBhcmVudC5jaGlsZE5vZGVzLCBjdXJyZW50SW5kZXgsIHNpemUpO1xuXHRcdFx0XHRoaWRlTm9kZXMocGFyZW50LmNoaWxkTm9kZXMsIGN1cnJlbnRJbmRleCwgc2l6ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRJbmRleCArPSBzaXplO1xuXHRcdFx0Ly8gY29uc29sZS53YXJuKGN1cnJlbnROb2RlLCBjdXJyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcpXG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKGN1cnJlbnROb2RlLCBjb25kaXRpb24sICdza2lwJyk7XG5cblx0XHRcdFxuXHRcdH1cblx0fSk7XG5cdFxufVxuXG5mdW5jdGlvbiBoeWRyYXRlTG9vcChjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRsZXQgY29uZGl0aW9uID0gYXJncy5jO1xuXHRsZXQgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0bGV0IHBhcmVudENoaWxkcmVuID0gcGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xuXG5cdGxvb3AoY29udGV4dCwgYXJncy5jLCBhcmdzLmssIChpdGVtLCBrZXkpID0+IHtcblx0XHRcblx0XHRsZXQgbm9kZSA9IGFyZ3MucihoLmJpbmQoY29udGV4dCksIGl0ZW0sIGtleSk7XG5cblx0XHRyZXR1cm4gbm9kZTtcdFxuXHR9LCAocmVnaXN0ZXJIeWRyYXRpb24pID0+IHtcblx0XHRsZXQgaXRlbXMgPSBhcmdzLmMoKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBub2RlID0gcGFyZW50Q2hpbGRyZW5baV07XG5cdFx0XHRsZXQgaXRlbSA9IGl0ZW1zW2ldO1xuXHRcdFx0bGV0IGl0ZW1LZXkgPSBhcmdzLmsoaXRlbSwgaSk7XG5cblx0XHRcdGlmKG5vZGUpIHtcblx0XHRcdFx0aWYobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JykgPT0gaXRlbUtleSkge1xuXHRcdFx0XHRcdG1hcmtBc1JlYWR5KG5vZGUpO1xuXHRcdFx0XHRcdGh5ZHJhdGUoY29udGV4dCwgbm9kZSwgYXJncy5oKGl0ZW0sIGkpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZWdpc3Rlckh5ZHJhdGlvbihpdGVtLCBpLCBub2RlKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHJlZywgaXRlbSwgaSwgbm9kZSk7XG5cdFx0fVxuXHR9LCBub2RlLnBhcmVudE5vZGUpO1xuXG59XG5cbi8qKlxuICogTWF5YmUgbmVlZCBzYW1lIGh5ZHJhdGlvbiBhbGdvcml0aG0gYXMgd2l0aCBwcm9wc1xuICogU2tpcCBmaXJzdCB0aW1lIGh5ZHJhdGlvbiA/Pz9cbiAqL1xuZnVuY3Rpb24gaHlkcmF0ZVRleHQoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0aWYoYXJncy50ID09PSBfKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdFxuXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRhcGkuaW5zZXJ0KG5vZGUsIGFyZ3MudCgpLCBudWxsKTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gZ2V0U2xvdE5vZGUoZWwsIHRhZywgcGF0aClcbntcblx0bGV0IG5vZGUgPSBlbDtcblxuXHRmb3IgKHZhciBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcblx0XHRub2RlID0gbm9kZS5jaGlsZE5vZGVzW3BhdGhbaV1dO1xuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlU2xvdHMoY29udGV4dCwgZWwsIG9wdHMgPSB7fSwgc2xvdHMpXG57XG5cdC8vIHJldHVybjtcblx0Ly8gSHlkcmF0ZSBwcm9wcyBvZiBtYWluIE5vZGVcblx0Ly8gaHlkcmF0ZVByb3BzKGNvbnRleHQsIGVsLCBvcHRzKTtcblx0XG5cdGxldCBiaW5kZWROb2RlcyA9IHt9XG5cblx0bGV0IHNsb3REYXRhID0gY29udGV4dC5fc2xvdHNEYXRhO1xuXG5cdC8vIEZpbmQgc2xvdCBiaW5kaW5nIG5vZGVzXG5cdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG5cdFx0aWYoc2xvdERhdGFba2V5XSkge1xuXHRcdFx0bGV0IG5vZGUgPSBnZXRTbG90Tm9kZShlbCwgc2xvdERhdGFba2V5XS50YWcsIHNsb3REYXRhW2tleV0ucGF0aCk7XG5cdFx0XHRiaW5kZWROb2Rlc1trZXldID0gbm9kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAke2tleX0gc2xvdCBuYW1lc3BhY2UgZGVmaW5lZGApO1xuXHRcdH1cblx0fVxuXG5cdC8vIEh5ZHJhdGUgc2xvdHMgcGVyIGJpbmRlZCB0YWdcblx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcblx0XHRsZXQgZGF0YSA9IHNsb3REYXRhW2tleV07XG5cdFx0bGV0IG5vZGUgPSBiaW5kZWROb2Rlc1trZXldO1xuXHRcdGxldCBjaGlsZHJlblNsb3RzID0gc2xvdHNba2V5XTtcblx0XHRsZXQgc3RhcnROb2RlSW5kZXggPSBkYXRhLmluZGV4O1xuXG5cdFx0aWYodHlwZW9mIG5vZGUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oZWwsIG9wdHMsIHNsb3REYXRhLCBlbFswXSk7XG5cdFx0fVxuXG5cdFx0aWYoY2hpbGRyZW5TbG90cy5sZW5ndGggPiBub2RlLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTbG90IGh5ZHJhdGlvbiBsZW5ndGggbWlzbWF0Y2gnKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gc3RhcnROb2RlSW5kZXg7IGkgPCBjaGlsZHJlblNsb3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhub2RlLmNoaWxkTm9kZXNbaV0sIGNoaWxkcmVuU2xvdHNbaV0pXG5cdFx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5TbG90c1tpXSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQ29udGV4dCBzZXR1cFxuICovXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdGlmKGNoaWxkLl9mdW5jdGlvbmFsKSB7XG5cdFx0cGFyZW50LmFkZENoaWxkcmVuKF8pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlVGFnKGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGxldCBlbCA9IGFyZ3MudCxcblx0XHRvcHRzID0gYXJncy5vLFxuXHRcdGNoaWxkcmVuID0gYXJncy5jO1xuXG5cdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcblx0XHRoeWRyYXRlSChjb250ZXh0LCBub2RlLCBvcHRzLCBjaGlsZHJlbik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0SHlkcmF0ZUNvbXBvbmVudChlbCwgb3B0cyk7XG5cblx0aWYoY29tcG9uZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHRjb250ZXh0LmFkZENoaWxkcmVuKGNvbXBvbmVudCk7XG5cblx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG5cdFx0bGV0IG5ld0FyZ3MgPSBjb21wb25lbnQuaHlkcmF0ZSh7XG5cdFx0XHRfc2xvdHM6IG9wdHMuJHNsb3RzLFxuXHRcdH0pO1xuXG5cdFx0aWYob3B0cy4kc2xvdHMpIHtcblx0XHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIG5vZGUsIG9wdHMsIG9wdHMuJHNsb3RzKTtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLmxvZyhvcHRzKVxuXHRcdGh5ZHJhdGUoY29udGV4dCwgbm9kZSwgbmV3QXJncyk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHRjb21wb25lbnQucGFzc09wdGlvbnMob3B0cyk7XG5cblx0aWYob3B0cy4kc2xvdHMpIHtcblx0XHRoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBub2RlLCBvcHRzLCBvcHRzLiRzbG90cyk7XG5cdH1cblxuXHRub2RlLiRzID0gY29tcG9uZW50O1xuXHQvLyBjb25zb2xlLmxvZyhjb21wb25lbnQsIG5vZGUpXG5cblx0cmV0dXJuIGh5ZHJhdGUoY29tcG9uZW50LCBub2RlLCBjb21wb25lbnQuaHlkcmF0ZShjb21wb25lbnQpKTtcbn1cblxuLyoqXG4gKiBNYWluIGh5ZHJhdGlvbiBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBoeWRyYXRlKGNvbnRleHQsIG5vZGUsIGFyZ3MgPSBudWxsKVxue1xuXHQvLyByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHtcblx0XHRoeWRyYXRlSWRsZShjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0Ly8gfSwge1xuXHQvLyBcdHRpbWVvdXQ6IDAsXG5cdC8vIFx0cmVhZDogdHJ1ZVxuXHQvLyB9KTtcbn1cblxuZnVuY3Rpb24gbWFya0FzUmVhZHkobm9kZSlcbntcblx0bm9kZS5faHlkcmF0ZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlSWRsZShjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRpZihhcmdzID09PSBudWxsIHx8IG5vZGUgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnaCcpIHtcblx0XHQvLyBhcmdzLm9bJ2RhdGEtaHlkcmF0ZWQnXSA9IHRydWU7XG5cdFx0Ly8gYXJncy5vWydfcyddID0gdHJ1ZTtcblx0XHRoeWRyYXRlVGFnKGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ3QnKSB7XG5cdFx0aHlkcmF0ZVRleHQoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnbG9vcCcpIHtcblx0XHRoeWRyYXRlTG9vcChjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXG5cdGlmKGFyZ3MuX3QgPT09ICdzdGF0ZW1lbnQnKSB7XG5cdFx0aHlkcmF0ZVN0YXRlbWVudChjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXHRcblx0cmV0dXJuIF87XG5cdFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRIeWRyYXRpb24oY29tcG9uZW50LCBoeWRyYXRpb25Sb290LCB0aW1lQmVuY2htYXJrID0gKCkgPT4ge30sIGNhbGxiYWNrID0gbnVsbClcbntcblx0bG9hZENvbXBvbmVudChjb21wb25lbnQsIChpbnN0YW5jZSkgPT4ge1xuXG5cdFx0dGltZUJlbmNobWFyaygnSHlkcmF0aW9uJyk7XG5cblx0XHRsZXQgdHJlZSA9IFtpbnN0YW5jZV07XG5cblx0XHRTaW51b3VzLmNsZWFySElEKCk7XG5cblx0XHQvLyBsZXQgY29ubmVjdGVkTm9kZSA9IGZpbHRlckNoaWxkTm9kZXMoaHlkcmF0aW9uUm9vdCk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjb21wb25lbnQgPSB0cmVlW2ldO1xuXHRcdFx0bGV0IG5vZGUgPSBoeWRyYXRpb25Sb290LmNoaWxkTm9kZXNbaV07XG5cdFx0XHRsZXQgaHlkcmF0aW9uID0gY29tcG9uZW50Lmh5ZHJhdGUoY29tcG9uZW50KTtcblx0XHRcdFxuXHRcdFx0aHlkcmF0ZShjb21wb25lbnQsIG5vZGUsIGh5ZHJhdGlvbik7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGNvbnNvbGUubG9nKGluc3RhbmNlKTtcblx0XHRpbnN0YW5jZS5ob29rKCdtb3VudGVkJyk7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHRpbWVCZW5jaG1hcmsoJ0h5ZHJhdGlvbicpO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9KTtcblxufVxuXG4vKipcbiAqIEZpbHRlciBvdXQgd2hpdGVzcGFjZSB0ZXh0IG5vZGVzIHVubGVzcyBpdCBoYXMgYSBub3NraXAgaW5kaWNhdG9yLlxuICpcbiAqIEBwYXJhbSAge05vZGV9IHBhcmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZpbHRlckNoaWxkTm9kZXMocGFyZW50KSB7XG5cdHJldHVybiBwYXJlbnQuY2hpbGROb2Rlcztcblx0Ly8gY29uc29sZS53YXJuKHBhcmVudCwgcGFyZW50LmNoaWxkTm9kZXMpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKS5maWx0ZXIoXG4gICAgICAgIGVsID0+IGVsLm5vZGVUeXBlICE9PSAzIHx8IGVsLmRhdGEudHJpbSgpIHx8IGVsLl9ub3NraXBcbiAgICApO1xufVxuIiwiaW1wb3J0IHsgbWFrZUNzcywgbWVyZ2VPcHRpb25zIH0gZnJvbSAnQHNpcGgvY29tcG9uZW50JztcbmltcG9ydCB7IGFwaSB9IGZyb20gJ3NpbnVvdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoeWRyYXRlUHJvcHMoY29udGV4dCwgZWwsIG9wdGlvbnMpXG57XG5cblx0b3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhvcHRpb25zKTtcblxuXHRpZighb3B0aW9ucy5fcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBzdWJzY3JpYmVycyA9IFtdO1xuXHRsZXQgc3Vic2NyaWJlcnNfZmlyc3QgPSBbXTtcblxuXHRmdW5jdGlvbiBhZGRTdWJzY3JpYmVyKHZhbHVlLCBmbiwgc2tpcCA9IHRydWUpXG5cdHtcblx0XHRzdWJzY3JpYmVycy5wdXNoKHtcblx0XHRcdHZhbHVlLFxuXHRcdFx0Zm4sXG5cdFx0fSk7XG5cblx0XHRzdWJzY3JpYmVyc19maXJzdC5wdXNoKHNraXApO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1ha2Ugc3R5bGVzIGFuZCBjbGFzc2VzXG5cdCAqL1xuXHRpZihvcHRpb25zLnN0eWxlIHx8IG9wdGlvbnMuY2xhc3MpIHtcblx0XHQvLyBjb25zb2xlLmVycm9yKGVsKTtcblx0XHRsZXQgY3NzT3B0aW9ucyA9IG1ha2VDc3Moe30sIG9wdGlvbnMpO1xuXG5cdFx0aWYoY3NzT3B0aW9ucy5zdHlsZSkge1xuXHRcdFx0YWRkU3Vic2NyaWJlcihjc3NPcHRpb25zLnN0eWxlLCAob2JqKSA9PiB7XG5cdFx0XHRcdGZvcihsZXQgbmFtZSBpbiBvYmopIHtcblx0XHRcdFx0XHRlbC5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBvYmpbbmFtZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZihjc3NPcHRpb25zLmNsYXNzKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhjc3NPcHRpb25zLmNsYXNzKCkpO1xuXHRcdFx0YWRkU3Vic2NyaWJlcihjc3NPcHRpb25zLmNsYXNzLCAodmFsdWUpID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coZWwsIHZhbHVlKTtcblx0XHRcdFx0ZWwuY2xhc3NOYW1lID0gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBNYWtlIGV2ZW50c1xuXHQgKi9cblx0aWYob3B0aW9ucy5vbikge1xuXHRcdGZvcihsZXQgbmFtZSBpbiBvcHRpb25zLm9uKSB7XG5cdFx0XHRoYW5kbGVFdmVudChlbCwgbmFtZSwgb3B0aW9ucy5vbltuYW1lXSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE1ha2UgYXR0cmlidXRlc1xuXHQgKi9cblx0aWYob3B0aW9ucy5hdHRycykge1xuXHRcdGZvcihsZXQgbmFtZSBpbiBvcHRpb25zLmF0dHJzKSB7XG5cdFx0XHRhZGRTdWJzY3JpYmVyKG9wdGlvbnMuYXR0cnNbbmFtZV0sICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdFx0fSlcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIFN1YnNjcmliZVxuXHQgKi9cblx0aWYoc3Vic2NyaWJlcnMubGVuZ3RoID4gMCkge1xuXHRcdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBzdWJzY3JpYmVyc1tpXS52YWx1ZSgpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoc3Vic2NyaWJlcnNfZmlyc3RbaV0pIHtcblx0XHRcdFx0XHRzdWJzY3JpYmVyc19maXJzdFtpXSA9IGZhbHNlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN1YnNjcmliZXJzW2ldLmZuKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUV2ZW50KGVsLCBuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudFByb3h5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGV2ZW50UHJveHkpO1xuICAgIH1cblxuICAgIChlbC5fbGlzdGVuZXJzIHx8IChlbC5fbGlzdGVuZXJzID0ge30pKVtuYW1lXSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIFByb3h5IGFuIGV2ZW50IHRvIGhvb2tlZCBldmVudCBoYW5kbGVycy5cbiAqIEBwYXJhbSB7RXZlbnR9IGUgLSBUaGUgZXZlbnQgb2JqZWN0IGZyb20gdGhlIGJyb3dzZXIuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gZXZlbnRQcm94eShlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVyc1tlLnR5cGVdKGUpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRpZmYocGFyZW50LCBhLCBiLCBrZXlFeHByLCBnZXQsIGJlZm9yZSlcbntcblx0Y29uc3QgYUlkeCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgYklkeCA9IG5ldyBNYXAoKTtcblx0bGV0IGk7XG5cdGxldCBqO1xuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGFbaV0sIGkpO1xuXHRcdGFJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihiW2ldLCBpKTtcblx0XHRiSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gY29uc29sZS53YXJuKGFJZHgsIGJJZHgpO1xuXG5cdGZvciAoaSA9IGogPSAwOyBpICE9PSBhLmxlbmd0aCB8fCBqICE9PSBiLmxlbmd0aDspIHtcblx0XHR2YXIgYUVsbSA9IGFbaV0sXG5cdFx0XHRiRWxtID0gYltqXTtcblx0XHRpZiAoYUVsbSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBtb3ZlZCB0byBlYXJsaWVyIGluIHRoZSBsaXN0XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChiLmxlbmd0aCA8PSBqKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG5ldywgdGhpcyBpcyBhIGRlbGV0ZVxuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGdldChhW2ldLCBpLCAtMSkpO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYS5sZW5ndGggPD0gaSkge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBvbGQsIHRoaXMgaXMgYW4gYWRkaXRpb25cblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZ2V0KGJFbG0sIGosIDEpLCBnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlKTtcblx0XHRcdGorKztcblx0XHR9IGVsc2UgaWYgKGFFbG0gPT09IGJFbG0pIHtcblx0XHRcdC8vIE5vIGRpZmZlcmVuY2UsIHdlIG1vdmUgb25cblx0XHRcdGkrKztcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIGN1cnJlbnQgZWxlbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoaXMgZWxlbWVudCBzaG91bGQgYmVcblx0XHRcdHZhciBjdXJFbG1Jbk5ldyA9IGJJZHguZ2V0KGFFbG0pO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIHRoZSB3YW50ZWQgZWxtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhlIHdhbnRlZCBlbGVtZW50IGlzIG5vd1xuXHRcdFx0dmFyIHdhbnRlZEVsbUluT2xkID0gYUlkeC5nZXQoYkVsbSk7XG5cdFx0XHRpZiAoY3VyRWxtSW5OZXcgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBDdXJyZW50IGVsZW1lbnQgaXMgbm90IGluIG5ldyBsaXN0LCBpdCBoYXMgYmVlbiByZW1vdmVkXG5cdFx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChnZXQoYVtpXSwgaSwgLTEpKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fSBlbHNlIGlmICh3YW50ZWRFbG1Jbk9sZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIE5ldyBlbGVtZW50IGlzIG5vdCBpbiBvbGQgbGlzdCwgaXQgaGFzIGJlZW4gYWRkZWRcblx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShcblx0XHRcdFx0XHRnZXQoYkVsbSwgaiwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGluIGJvdGggbGlzdHMsIGl0IGhhcyBiZWVuIG1vdmVkXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdtb3ZlJywgYVtpXSwgJ2Zyb20nLCB3YW50ZWRFbG1Jbk9sZCwgJ3RvJywgaSlcblx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShcblx0XHRcdFx0XHRnZXQoYVt3YW50ZWRFbG1Jbk9sZF0sIHdhbnRlZEVsbUluT2xkLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGFbd2FudGVkRWxtSW5PbGRdID0gbnVsbDtcblx0XHRcdFx0aWYgKHdhbnRlZEVsbUluT2xkID4gaSArIDEpIGkrKztcblx0XHRcdFx0aisrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBiO1xufVxuIiwiaW1wb3J0IHsgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi9kaWZmLmpzJztcblxuLyoqXG4gKiBNYXAgb3ZlciBhIGxpc3Qgb2YgdW5pcXVlIGl0ZW1zIHRoYXQgY3JlYXRlIERPTSBub2Rlcy5cbiAqXG4gKiBObyBkdXBsaWNhdGVzIGluIHRoZSBsaXN0IG9mIGl0ZW1zIGlzIGEgaGFyZCByZXF1aXJlbWVudCwgdGhlIGRpZmZpbmdcbiAqIGFsZ29yaXRobSB3aWxsIG5vdCB3b3JrIHdpdGggZHVwbGljYXRlIHZhbHVlcy4gU2VlIGAuL3VuaXF1ZS5qc2AuXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGl0ZW1zIC0gRnVuY3Rpb24gb3Igb2JzZXJ2YWJsZSB0aGF0IGNyZWF0ZXMgYSBsaXN0LlxuICogQHBhcmFtICB7RnVuY3Rpb259IGV4cHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NsZWFuaW5nXVxuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcChjb250ZXh0LCBpdGVtcywga2V5RXhwciwgZXhwciwgYmVmb3JlSW5pdCA9IG51bGwsIHBhcmVudCA9IG51bGwpIHtcblx0Y29uc3QgeyByb290LCBzdWJzY3JpYmUsIHNhbXBsZSwgY2xlYW51cCB9ID0gYXBpO1xuXG5cdC8vIERpc2FibGUgY2xlYW5pbmcgZm9yIHRlbXBsYXRlcyBieSBkZWZhdWx0LlxuXHRsZXQgY2xlYW5pbmcgPSB0cnVlOy8vIWV4cHIuJHQ7XG5cblx0aWYocGFyZW50ID09PSBudWxsKSB7XG5cdFx0cGFyZW50ID0gYXBpLmgoW10pO1xuXHR9XG5cdFxuXHRjb25zdCBlbmRNYXJrID0gYXBpLmFkZChwYXJlbnQsICcnKTtcblxuXHRjb25zdCBkaXNwb3NlcnMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IG5vZGVzID0gbmV3IE1hcCgpO1xuXHRjb25zdCB0b1JlbW92ZSA9IG5ldyBTZXQoKTtcblx0Y29uc3QgZGVmYXVsdEEgPSBbXTtcblxuXHRpZihiZWZvcmVJbml0KSB7XG5cdFx0YmVmb3JlSW5pdCgoaXRlbSwga2V5LCBuKSA9PiB7XG5cdFx0XHRkZWZhdWx0QVtrZXldID0gaXRlbTtcblx0XHRcdG5vZGUoaXRlbSwga2V5LCAxLCBuKTtcblx0XHR9KVxuXHR9XG5cblx0Y29uc3QgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoYSA9PiB7XG5cdFx0Y29uc3QgYiA9IGl0ZW1zKCk7XG5cdFx0cmV0dXJuIHNhbXBsZSgoKSA9PiB7XG5cdFx0XHR0b1JlbW92ZS5jbGVhcigpO1xuXG5cdFx0XHQvLyBBcnJheS5mcm9tIHRvIG1ha2UgYSBjb3B5IG9mIHRoZSBjdXJyZW50IGxpc3QuXG5cdFx0XHRjb25zdCBjb250ZW50ID0gQXJyYXkuZnJvbShcblx0XHRcdFx0ZGlmZihlbmRNYXJrLnBhcmVudE5vZGUsIGEgfHwgZGVmYXVsdEEsIGIsIGtleUV4cHIsIG5vZGUsIGVuZE1hcmspXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRleHQuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBcdGNvbnNvbGUubG9nKGksIGNvbnRleHQuX2NoaWxkcmVuW2ldLmhpZCwgY29udGV4dC5fY2hpbGRyZW5baV0uX3N0YXRlLnMxKCksIGNvbnRleHQuX2NoaWxkcmVuW2ldLl9wcm9wcy5wdClcblx0XHRcdC8vIH1cblx0XHRcdHRvUmVtb3ZlLmZvckVhY2goZGlzcG9zZSk7XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9KTtcblx0fSk7XG5cblx0Y2xlYW51cCh1bnN1YnNjcmliZSk7XG5cdGNsZWFudXAoZGlzcG9zZUFsbCk7XG5cblx0ZnVuY3Rpb24gbm9kZShpdGVtLCBrZXksIGksIGVsID0gbnVsbCkge1xuXHRcdGlmIChpdGVtID09IG51bGwpIHJldHVybjtcblxuXHRcdGxldCBub2RlS2V5ID0ga2V5RXhwcihpdGVtLCBrZXkpO1xuXG5cdFx0bGV0IG4gPSBub2Rlcy5nZXQobm9kZUtleSk7XG5cdFx0aWYgKGkgPT09IDEpIHtcblx0XHRcdHRvUmVtb3ZlLmRlbGV0ZShpdGVtKTtcblxuXHRcdFx0aWYgKCFuKSB7XG5cdFx0XHRcdG4gPSBjbGVhbmluZyA/XG5cdFx0XHRcdFx0cm9vdChkaXNwb3NlID0+IHtcblx0XHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQobm9kZUtleSwgZGlzcG9zZSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWwgPyBlbCA6IGV4cHIoaXRlbSwga2V5KTtcblx0XHRcdFx0XHR9KSA6XG5cdFx0XHRcdFx0KGVsID8gZWwgOiBleHByKGl0ZW0sIGtleSkpO1xuXG5cdFx0XHRcdGlmIChuLm5vZGVUeXBlID09PSAxMSkgbiA9IG4uZmlyc3RDaGlsZDtcblxuXHRcdFx0XHRub2Rlcy5zZXQobm9kZUtleSwgbik7XG5cblx0XHRcdFx0Ly8gY29uc29sZS53YXJuKGBbY3JlYXRlICgke25vZGVLZXl9KV1gLCBuKTtcblx0XHRcdFx0aWYobi4kcykge1xuXHRcdFx0XHRcdG4uJHMuaG9vaygnbW91bnRlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGNvbnRleHQuX2NoaWxkcmVuW2tleV0uaG9vaygnbW91bnRlZCcpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoaSA9PT0gLTEpIHtcblx0XHRcdC8vIGNvbnNvbGUud2FybihgW3JlbW92ZSAoJHtub2RlS2V5fSldYCwgbiwgbi5wYXJlbnROb2RlKTtcblx0XHRcdGlmKG4uJHMpIHtcblx0XHRcdFx0bi4kcy5ob29rKCd1bm1vdW50ZWQnKTtcblx0XHRcdH1cblxuXHRcdFx0dG9SZW1vdmUuYWRkKG5vZGVLZXkpO1xuXHRcdFx0Ly8gY29udGV4dC5yZW1vdmVDaGlsZChrZXkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGlzcG9zZUFsbCgpIHtcblx0XHRkaXNwb3NlcnMuZm9yRWFjaChkID0+IGQoKSk7XG5cdFx0ZGlzcG9zZXJzLmNsZWFyKCk7XG5cdFx0bm9kZXMuY2xlYXIoKTtcblx0XHR0b1JlbW92ZS5jbGVhcigpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGlzcG9zZShpdGVtKSB7XG5cdFx0bGV0IGRpc3Bvc2VyID0gZGlzcG9zZXJzLmdldChpdGVtKTtcblx0XHRpZiAoZGlzcG9zZXIpIHtcblx0XHRcdGRpc3Bvc2VyKCk7XG5cdFx0XHRkaXNwb3NlcnMuZGVsZXRlKGl0ZW0pO1xuXHRcdH1cblx0XHRub2Rlcy5kZWxldGUoaXRlbSk7XG5cdH1cblxuXHRyZXR1cm4gcGFyZW50O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNsb3QoY29udGV4dCwgaCwgbmFtZSwgdGFnLCBvcHRpb25zLCBkZWZhdWx0Q2hpbGRyZW4pXG57XG5cdC8vIGNvbnRleHQuX19zbG90c1xuXHRcblx0bGV0IGNoaWxkcmVuID0gZGVmYXVsdENoaWxkcmVuO1xuXG5cdGlmKGNvbnRleHQuX3Nsb3RzW25hbWVdKSB7XG5cdFx0Y2hpbGRyZW4gPSBjb250ZXh0Ll9zbG90c1tuYW1lXTtcblx0fVxuXHRcblx0aWYodGFnID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuO1xuXHR9XG5cblx0Ly8gaC5iaW5kKG51bGwpXG5cblx0bGV0IHJlbmRlciA9IGgodGFnLCBvcHRpb25zLCBjaGlsZHJlbik7XG5cblx0Ly8gZm9yICh2YXIgaSA9IDA7IGkgPCByZW5kZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuXHQvLyBcdGNvbnNvbGUubG9nKHJlbmRlci5jaGlsZE5vZGVzW2ldLCByZW5kZXIuY2hpbGROb2Rlc1tpXS4kcyk7XG5cdC8vIH1cblx0XG5cblx0cmV0dXJuIHJlbmRlcjtcbn1cbiIsImltcG9ydCB7IGggfSBmcm9tICdAc2lwaC9jb21wb25lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50KClcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICUgMyAhPT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdGF0ZW1lbnQgc2hvdWxkIGJlIG9kZCBudW1iZXInKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cdFx0bGV0IGZvdW5kQ29uZGl0aW9uID0gZmFsc2U7XG5cdFx0Ly8gdmFsdWVcblx0XHRsZXQgY2hpbGRJbmRleCA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRsZXQgc2l6ZSA9IGFyZ3VtZW50c1tpICsgMV07XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaSArIDJdO1xuXHRcdFx0bGV0IG5vZGUgPSBudWxsO1xuXG5cdFx0XHRjb25kaXRpb24gPSB0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nID8gY29uZGl0aW9uKCkgOiBjb25kaXRpb247XG5cblx0XHRcdGlmKGNvbmRpdGlvbiAmJiAhZm91bmRDb25kaXRpb24pIHtcblx0XHRcdFx0Zm91bmRDb25kaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRub2RlID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnNvbGUud2Fybihjb25kaXRpb24sIHNpemUsIHZhbHVlLCBub2RlKTtcblx0XHRcdC8vIFBhc3MgZmFpbGVkIHN0ZXRlbWVudCBjb25kaXRpb25cblx0XHRcdC8vIE5vcm1pbGl6ZSBpbmRleCB0aGF0IHdpbGwgYmUgdXNlZCBpbiByZXBsYWNpbmcgcGxhY2Vob2xkZXIgKGJlbG93KVxuXHRcdFx0aWYobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIW5vZGUuX29ic2VydmFibGUpIHtcblx0XHRcdFx0bm9kZSA9IG5vZGUoaCk7XG5cdFx0XHR9XG5cdFx0XHQvLyByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggbm9kZVxuXHRcdFx0Ly8gQW5kIGNvcnJlY3QgaW5kZXhcblx0XHRcdGlmKHNpemUgPiAxKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZVtqXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXG5cdHJldHVybiBkO1xufVxuIiwiXG5cdFx0aW1wb3J0IGNvbXBvbmVudENvbmZpZyBmcm9tIFwiLi9pbmRleC5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2lwaC9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFBhZ2VzSW5kZXgoKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnUGFnZXNJbmRleCc7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSB7fTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSBPYmplY3Qua2V5cyhjb25maWcubWV0aG9kcyk7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9mdW5jdGlvbmFsID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19wcm9wcyA9IHt9O1xuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5wcm9wcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcHJvcHNba2V5XSA9IGNvbmZpZy5wcm9wc1trZXldXG5cdFx0fVxuXHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3JlbmRlciA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFxuICBcImRpdlwiLFxuICBbY3R4Lm9wdGlvbnMsIHt9XSxcbiAgW1xuICAgIGxvb3AoXG4gICAgICBjdHgsXG4gICAgICBjdHguX3N0YXRlLml0ZW1zLFxuICAgICAgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0sXG4gICAgICAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBoKFxuICAgICAgICAgIFwic2J1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCJib2xkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3M6IGN0eC5fc3RhdGUuczEsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U3R5bGU6IFwiaXRhbGljXCIgfSxcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHB0OiBpdGVtLFxuICAgICAgICAgICAgICBwcm9wMTogXCJ0ZXN0LS1cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBrZXk6IGl0ZW0sXG4gICAgICAgICAgICAkc2xvdHM6IHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogW1xuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBgQnV0dG9uICR7aXRlbX1gO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYEJ1dHRvbiAke2l0ZW19YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICApO1xuICAgICAgfVxuICAgICksXG4gIF1cbik7XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19oeWRyYXRlID0gZnVuY3Rpb24oaCkge1xuXHRcdFx0XHRsZXQgY3R4ID0gdGhpcztcblx0XHRcdFx0cmV0dXJuIHtcbiAgX3Q6IFwiaFwiLFxuICB0OiBcImRpdlwiLFxuICBvOiBbY3R4Lm9wdGlvbnMsIHt9XSxcbiAgYzogW1xuICAgIHtcbiAgICAgIF90OiBcImxvb3BcIixcbiAgICAgIGM6IGN0eC5fc3RhdGUuaXRlbXMsXG4gICAgICBrOiAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSxcbiAgICAgIGg6IChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBfdDogXCJoXCIsXG4gICAgICAgICAgdDogXCJzYnV0dG9uXCIsXG4gICAgICAgICAgbzoge1xuICAgICAgICAgICAgY2xhc3M6IGN0eC5fc3RhdGUuczEsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U3R5bGU6IFwiaXRhbGljXCIgfSxcbiAgICAgICAgICAgICRzbG90czoge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX3Q6IFwidFwiLFxuICAgICAgICAgICAgICAgICAgdDogLTEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfczogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGM6IFtdLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHI6IChoLCBpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGgoXG4gICAgICAgICAgXCJzYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcImJvbGRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzczogY3R4Ll9zdGF0ZS5zMSxcbiAgICAgICAgICAgIHN0eWxlOiB7IGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9LFxuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgcHQ6IGl0ZW0sXG4gICAgICAgICAgICAgIHByb3AxOiBcInRlc3QtLVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleTogaXRlbSxcbiAgICAgICAgICAgICRzbG90czoge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX3Q6IFwidFwiLFxuICAgICAgICAgICAgICAgICAgdDogLTEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBgQnV0dG9uICR7aXRlbX1gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdGV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuXHQiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7fSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aW1lcjogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgc3RhdGUobykge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogbyhBcnJheS5mcm9tKHtcbiAgICAgICAgbGVuZ3RoOiAxMFxuICAgICAgfSwgKF8sIGkpID0+IGkpKSxcbiAgICAgIGl0ZW1zMjogbyhbJ2FfJywgJ2JfJ10pLFxuICAgICAgczE6IG8oMilcbiAgICB9O1xuICB9LFxuXG4gIGNvbXB1dGVkKG8pIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGxldCBkID0gW107XG4gICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xuICAgICAgLy8gXHRkLnB1c2goaSk7XG4gICAgICAvLyB9XG4gICAgICAvLyBpdGVtcyA9IGQ7XG4gICAgICB0aGlzLl9kYXRhLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMSh0aGlzLl9zdGF0ZS5zMSgpICsgMSk7XG4gICAgICB9LCAyMDAwKTsgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBcdGNvbnNvbGUubG9nKCdjaGFuZ2UnKVxuICAgICAgLy8gXHRpdGVtcyA9IFsnYScsICdjJywgJ2QnXVxuICAgICAgLy8gfSwgMTAwMClcbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gXHRjb25zb2xlLmxvZygnY2hhbmdlJylcbiAgICAgIC8vIFx0aXRlbXMgPSBbJ2EnLCAnZScsICdkJywgJ2InLCAnYyddXG4gICAgICAvLyB9LCAzMDAwKVxuICAgIH0sXG4gICAgdW5tb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2RhdGEudGltZXIpO1xuICAgIH1cbiAgfVxufTsiLCJpbXBvcnQgU2ludW91cyBmcm9tICdAc2lwaC9pJztcbmltcG9ydCB7IGh5ZHJhdGUgfSBmcm9tICdAc2lwaC9oeWRyYXRpb24nO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnQHNpcGgvcmVuZGVyJztcblxuXG4vLyBpbXBvcnQgeyBhcGkgfSBmcm9tICdzaW51b3VzJztcbi8vIGltcG9ydCB7IG9ic2VydmFibGUgfSBmcm9tICdAc2lwaC9jb21wb25lbnQvc3JjL29ic2VydmFibGUnO1xuLy8gaW1wb3J0IHRlc3QgZnJvbSAnLi4vY29tcG9uZW50cy90ZXN0LnNpbidcbi8vIGltcG9ydCB0ZXN0MiBmcm9tICcuLi9jb21wb25lbnRzL3Rlc3QyLnNpbidcbmltcG9ydCBidXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9zYnV0dG9uLnNpbidcbmltcG9ydCBJbmRleFBhZ2UgZnJvbSAnLi4vcGFnZXMvaW5kZXguc2luJ1xuaW1wb3J0IHRpbWVCZW5jaG1hcmsgZnJvbSAnLi90aW1lJztcblxuLy8gY29uc3QgSW5kZXhQYWdlID0gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFnZUluZGV4XCIgKi8gJy4uL3BhZ2VzL2luZGV4LnNpbicpXG5cblxudmFyIExBWU9VVDtcbnZhciBQYWdlSW5kZXgsIFBhZ2VJbmRleDI7XG5cbmZ1bmN0aW9uIFRFU1RfV0VCUEFDS19CVUlMRCgpXG57XG5cdHRpbWVCZW5jaG1hcmsoJ1NTUi1CdWlsZCcpO1xuXHQvLyBTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KHRlc3QpO1xuXHQvLyBTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KHRlc3QyKTtcblx0U2ludW91cy5yZWdpc3RlckNvbXBvbmVudChidXR0b24pO1xuXHR0aW1lQmVuY2htYXJrKCdTU1ItQnVpbGQnKTtcbn1cblxuLy8gZnVuY3Rpb24gVEVTVF9JTklUKClcbi8vIHtcbi8vIFx0dGltZUJlbmNobWFyaygnU1NSLUluaXQnKTtcbi8vIFx0UGFnZUluZGV4ID0gbmV3IEluZGV4UGFnZSgpO1xuLy8gXHRQYWdlSW5kZXgyID0gbmV3IEluZGV4UGFnZSgpO1xuLy8gXHR0aW1lQmVuY2htYXJrKCdTU1ItSW5pdCcpO1xuLy8gfVxuXG5mdW5jdGlvbiBURVNUX1JFTkRFUigpXG57XG5cdHJlbmRlcihJbmRleFBhZ2UsIExBWU9VVCwgdGltZUJlbmNobWFyaywgKGMpID0+IHtcblx0XHRQYWdlSW5kZXggPSBjO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gQ0xFQVJfSE9PS1MoKVxue1xuXHRsZXQgaHRtbCA9IExBWU9VVC5pbm5lckhUTUw7XG5cdExBWU9VVC5pbm5lckhUTUwgPSBodG1sO1xuXHRQYWdlSW5kZXguaG9vaygndW5tb3VudGVkJyk7XG59XG5cbmZ1bmN0aW9uIFRFU1RfSFlEUkFURSgpXG57XG5cdGh5ZHJhdGUoSW5kZXhQYWdlLCBMQVlPVVQsIHRpbWVCZW5jaG1hcmspO1xufVxuXG5URVNUX1dFQlBBQ0tfQlVJTEQoKTtcblxuLy8gVEVTVF9JTklUKCk7XG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbG9hZCk7XG4vLyByZXR1cm47XG4oZnVuY3Rpb24gbG9hZCgpIHtcblx0TEFZT1VUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXG5cblx0Ly8gbGV0IGQgPSBvYnNlcnZhYmxlKDEpO1xuXHQvLyBhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0Ly8gXHRjb25zb2xlLmxvZygnW3NiXScsIGQoKSk7XG5cdC8vIH0pXG5cdC8vIGQoMik7XG5cdC8vIHJldHVybjtcblxuXG5cdC8vIFRFU1RfSFlEUkFURSgpO1xuXHQvLyByZXR1cm47XG5cblxuXHRURVNUX1JFTkRFUigpO1xuXHQvLyBjb25zb2xlLmxvZyhMQVlPVVQuaW5uZXJIVE1MKVxuXHQvLyByZXR1cm5cblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblxuXHRcdENMRUFSX0hPT0tTKCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCBURVNUX0hZRFJBVEUoKTtcblx0XHR9LCAzMDApO1xuXHR9LCAxMDAwKTtcbn0pKCk7XG4iLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9