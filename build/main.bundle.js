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

/***/ "./components/test.sin":
/*!*****************************!*\
  !*** ./components/test.sin ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sinuous_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test_sin_type_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.sin?type=script */ "./components/test.sin?type=script");

		
		
		
		let config = Object.assign({
			methods: {},
		}, _test_sin_type_script__WEBPACK_IMPORTED_MODULE_1__["default"]);

		let instance = function Test() {
			_sinuous_component__WEBPACK_IMPORTED_MODULE_0__["Basic"].call(this);
		};
		
		// inherit Basic
		instance.prototype = Object.create(_sinuous_component__WEBPACK_IMPORTED_MODULE_0__["Basic"].prototype);

		// correct the constructor pointer because it points to Basic
		instance.prototype.constructor = instance;
		
		instance.prototype._methods = {};
		
		instance.prototype._componentName = 'Test';
		instance.prototype._shouldHydarate = true;
		instance.prototype.__slots = {};

		for(let key in config) {
			if(typeof config[key] === 'function') {
				instance.prototype[key] = config[key];
			}
		}
		
		for(let key in config.methods) {
			instance.prototype[key] = config.methods[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h("div", { onclick: ctx.reactive_click, id: ctx.getUID(2) }, [
  c(() => {
    return `test ${ctx._state.visible()}`;
  }),
]);
;
			}
		
			instance.prototype.__hydrate = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h("div", { onclick: ctx.reactive_click, id: ctx.getUID(2), _s: true }, [
  c(() => {
    return `test ${ctx._state.visible()}`;
  }),
]);
;
			}
		
		/* harmony default export */ __webpack_exports__["default"] = (instance);
	

/***/ }),

/***/ "./components/test.sin?type=script":
/*!*****************************************!*\
  !*** ./components/test.sin?type=script ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_test_import_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/test-import.js */ "./src/test-import.js");
/* harmony import */ var _src_test_import_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_test_import_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      clicks: 1
    };
  },

  state(o) {
    return {
      visible: o(_src_test_import_js__WEBPACK_IMPORTED_MODULE_0__["d"]),
      clicks2: o({
        a: 2
      })
    };
  },

  computed(o) {
    return {
      computed2: o(() => {
        let k = [];

        for (let d in [1, 2, 3]) {
          k.push(this._state.visible());
        }

        return this._state.visible() * 2 * 5;
      })
    };
  },

  methods: {
    click: function (event) {
      this._data.clicks++; // alert(clicks)
    },
    reactive_click: function (event2) {
      this._state.visible(this._state.visible() + 1);
    }
  }
});

/***/ }),

/***/ "./components/test2.sin":
/*!******************************!*\
  !*** ./components/test2.sin ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sinuous_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test2_sin_type_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test2.sin?type=script */ "./components/test2.sin?type=script");

		
		
		
		let config = Object.assign({
			methods: {},
		}, _test2_sin_type_script__WEBPACK_IMPORTED_MODULE_1__["default"]);

		let instance = function Test2() {
			_sinuous_component__WEBPACK_IMPORTED_MODULE_0__["Basic"].call(this);
		};
		
		// inherit Basic
		instance.prototype = Object.create(_sinuous_component__WEBPACK_IMPORTED_MODULE_0__["Basic"].prototype);

		// correct the constructor pointer because it points to Basic
		instance.prototype.constructor = instance;
		
		instance.prototype._methods = {};
		
		instance.prototype._componentName = 'Test2';
		instance.prototype._shouldHydarate = true;
		instance.prototype.__slots = {"default":[0,5],"footer":[0,7]};

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
  {
    onclick: () => {
      return alert(1);
    },
    dynamicStyle: { paddingTop: ctx._state.s2 },
    id: ctx.getUID(10),
  },
  [
    c(() => {
      return `test ${ctx._state.s2()}`;
    }),
    h("br", {}, []),
    statement(
      ctx._state.s1,
      2,
      (h) => {
        return [
          h("div", { id: ctx.getUID(13) }, [
            h("span", {}, [`static 1`]),
            c(() => {
              return `[visible] show ${ctx._data.ddd} - ${ctx._state.s3()}`;
            }),
            h("span", {}, [`static 2`]),
          ]),
          statement(ctx._data.visible, 1, (h) => {
            return h("span", {}, [`[s1] test`]);
          }),
        ];
      },
      ctx._state.s3,
      1,
      (h) => {
        return h("div", {}, [`[s3] test`]);
      }
    ),
    [h("div", {}, [`[none] hide`])],
    slot(ctx, h, "default", null, {}, [`default slot value`]),
    h("div", {}, [`after-once-if`]),
    slot(
      ctx,
      h,
      "footer",
      "div",
      { class: "footer", style: "background: #efefef;" },
      [`footer slot value`]
    ),
  ]
);
;
			}
		
			instance.prototype.__hydrate = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h(
  "div",
  {
    onclick: () => {
      return alert(1);
    },
    dynamicStyle: { paddingTop: ctx._state.s2 },
    id: ctx.getUID(10),
    _s: true,
  },
  [
    c(() => {
      return `test ${ctx._state.s2()}`;
    }),
    -1,
    statement(
      ctx._state.s1,
      2,
      (h) => {
        return [
          h("div", { id: ctx.getUID(13) }, [
            h("span", {}, [`static 1`]),
            c(() => {
              return `[visible] show ${ctx._data.ddd} - ${ctx._state.s3()}`;
            }),
            h("span", {}, [`static 2`]),
          ]),
          statement(ctx._data.visible, 1, (h) => {
            return h("span", {}, [`[s1] test`]);
          }),
        ];
      },
      ctx._state.s3,
      1,
      (h) => {
        return h("div", {}, [`[s3] test`]);
      }
    ),
    -1,
    -1,
    -1,
    -1,
  ]
);
;
			}
		
		/* harmony default export */ __webpack_exports__["default"] = (instance);
	

/***/ }),

/***/ "./components/test2.sin?type=script":
/*!******************************************!*\
  !*** ./components/test2.sin?type=script ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      ddd: '[test variable ddd]',
      timer1: null,
      timer2: null,
      visible: true
    };
  },

  state(o) {
    return {
      s1: o(true),
      s2: o(10),
      s3: o(false)
    };
  },

  computed(o) {
    return {};
  },

  methods: {
    makeIf: function () {
      // console.log('Make');
      this._state.s1(true);
      this._state.s3(true); // console.log(s1, s3);

      setTimeout(() => {
        this._state.s1(false);
        this._state.s3(true); // console.log(s1, s3);
      }, 1000);
      setTimeout(() => {
        this._state.s1(false);
        this._state.s3(false); // console.log(s1, s3);
      }, 2000);
      setTimeout(() => {
        this._state.s1(true);
        this._state.s3(false); // console.log(s1, s3);
      }, 3000);
    },
    mounted: function () {
      console.log(this, 'mount');
      this.makeIf();
      this._data.timer1 = setInterval(() => {
        this.makeIf();
      }, 5000);
      this._data.timer2 = setInterval(() => {
        console.log(this.hid, this._state.s2());
        this._state.s2(this._state.s2() + 2);
      }, 500);
    },
    unmounted: function () {
      // console.error('clear', timer1, timer2)
      clearInterval(this._data.timer1);
      clearInterval(this._data.timer2);
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
    console.log('create state', this.hid, this.name);
    this._slots = {
      default: []
    };
    this._computed = this.computed(_observable.computed);
    this._children = []; // this._state = [];
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
    console.error(this); // for(let key in this._methods) {
    // 	this._methods[key] = this._methods[key].bind(this);
    // }

    for (var key in this._computed) {
      this._computed[key] = this._computed[key].bind(this);
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
      this._children[i].hook(type);
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
  child.setParent(parent);
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

  var component = _i.default.getComponent(el); // console.log(component)


  if (typeof opts.props !== 'undefined') {
    component.passProps(opts.props);
  }

  for (var key in opts.$slots) {
    component.passSlots(key, opts.$slots[key]);
  }

  registerChildren(this, component);
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
  }

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
exports.compiler = compiler;
exports.default = initHydration;

var _sinuous = __webpack_require__(/*! sinuous */ "./node_modules/sinuous/module/sinuous.js");

var _empty = __webpack_require__(/*! @sinuous/compiler/src/empty */ "./packages/compiler/src/empty.js");

var _i = _interopRequireDefault(__webpack_require__(/*! @sinuous/i */ "./packages/i/dist/index.js"));

var _component = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");

var _lazy = __webpack_require__(/*! @sinuous/lazy */ "./packages/lazy/dist/index.js");

var _observable = __webpack_require__(/*! sinuous/observable */ "./node_modules/sinuous/module/observable.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var OBSERVER;
var STORAGE = {};

function hydrateProps(el, opts) {
  if (!opts._s) {
    return;
  }

  _sinuous.api.property(el, opts, null);
}

function hydrateTag(parent, children, currentIndex, value) {
  var el = children[currentIndex];
  var nodes = value(); // api.subscribe(() => console.log(value()));
  // console.warn(children, currentIndex, value, nodes)
  // let nodes = computed(() => value(h))();
  // let nodes = co
  // console.error(nodes)

  if (Array.isArray(nodes)) {// for (var i = 0; i < nodes.length; i++) {
    // 	let child = nodes[i];
    // 	if(typeof child === 'function') {
    // 		child = child()[0];
    // 	}
    // 	console.log(parent, children[currentIndex + i], child)
    // 	// api.insert(parent, child, children[currentIndex + i]);
    // 	parent.replaceChild(child, children[currentIndex + i])
    // }
  } else {
    _sinuous.api.insert(el, nodes, null);
  }
}

function hydrateChildren(node, children) {
  var bindChildren = [];

  if (node !== null) {
    bindChildren = filterChildNodes(node);
  }

  for (var i = 0; i < children.length; i++) {
    if (children[i] === _empty._) {
      continue;
    } // console.error(bindChildren[i], children[i]);


    hydrateTag(node, bindChildren, i, children[i]);
  }
}

function hydrate(el, opts, children) {
  if (opts === void 0) {
    opts = {};
  }

  if (children === void 0) {
    children = [];
  }

  if (!opts['id']) {
    return;
  }

  var bindNode = document.getElementById("" + opts['id']); // console.log(el, opts, children)

  _sinuous.api.subscribe(function () {
    hydrateProps(bindNode, opts);
    hydrateChildren(bindNode, children);
  });
}

function registerChildren(parent, child) {
  parent.addChildren(child);
  child.setParent(parent);
}

function compiler(el, opts, children) {
  if (opts === void 0) {
    opts = {};
  }

  if (children === void 0) {
    children = [];
  }

  (0, _component.options)(this, opts);

  if (!_i.default.hasComponent(el)) {
    hydrate.call(this, el, opts, children);
    return _empty._;
  }

  var component = _i.default.getHydrateComponent(el);

  if (component === null) {
    return _empty._;
  } // console.log('[ COMPONENT ]', el);


  if (typeof opts.props !== 'undefined') {
    component.passProps(opts.props);
  }

  component.passSlots('default', children);
  registerChildren(this, component);
  return initComponent(component);
}

function initComponent(component) {
  component.hydrate(component, compiler.bind(component));
  return _empty._;
}

function IntersectionObserverCallback(entries, observer) {
  entries.forEach(function (entry) {
    var id = entry.target.id; // console.log(id);

    _sinuous.api.subscribe(function () {
      hydrateProps(entry.target, STORAGE[id].opts);
      hydrateChildren(entry.target, STORAGE[id].children);
    });
  });
}

function initHydration(component, hydrationRoot, timeBenchmark, callback) {
  if (timeBenchmark === void 0) {
    timeBenchmark = function timeBenchmark() {};
  }

  if (callback === void 0) {
    callback = null;
  } // OBSERVER = new IntersectionObserver(IntersectionObserverCallback, {
  // 	root: hydrationRoot,
  // 	rootMargin: '0px',
  // 	threshold: 1.0
  // });
  // requestIdleCallback(() => {
  // 	OBSERVER.observe(bindNode);
  // 	STORAGE[opts['id']] = {
  // 		opts,
  // 		children,
  // 	}
  // });


  (0, _lazy.loadComponent)(component, function (instance) {
    timeBenchmark('Hydration');
    var tree = [instance];

    _i.default.clearHID();

    var connectedNode = filterChildNodes(hydrationRoot);

    for (var i = 0; i < tree.length; i++) {
      initComponent(tree[i], connectedNode[i]);
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

function loop() {}

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

  _proto.getHydrateComponent = function getHydrateComponent(component) {
    if (!this.hasComponent(component)) {
      throw new Error("There is no " + component + " component registered");
    }

    if (this.components[component].prototype._shouldHydarate) {
      return new this.components[component]();
    } else {
      return null;
    }
  };

  _proto.getComponent = function getComponent(component) {
    if (!this.hasComponent(component)) {
      throw new Error("There is no " + component + " component registered");
    }

    return new this.components[component]();
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
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sinuous_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_sin_type_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.sin?type=script */ "./pages/index.sin?type=script");

		
		
		
		let config = Object.assign({
			methods: {},
		}, _index_sin_type_script__WEBPACK_IMPORTED_MODULE_1__["default"]);

		let instance = function PagesIndex() {
			_sinuous_component__WEBPACK_IMPORTED_MODULE_0__["Basic"].call(this);
		};
		
		// inherit Basic
		instance.prototype = Object.create(_sinuous_component__WEBPACK_IMPORTED_MODULE_0__["Basic"].prototype);

		// correct the constructor pointer because it points to Basic
		instance.prototype.constructor = instance;
		
		instance.prototype._methods = {};
		
		instance.prototype._componentName = 'PagesIndex';
		instance.prototype._shouldHydarate = true;
		instance.prototype.__slots = {};

		for(let key in config) {
			if(typeof config[key] === 'function') {
				instance.prototype[key] = config[key];
			}
		}
		
		for(let key in config.methods) {
			instance.prototype[key] = config.methods[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h("div", { id: ctx.getUID(4) }, [
  h(
    "test2",
    {
      $slots: {
        default: [`passed text`, `in default slot`],
        footer: [
          h("div", { id: ctx.getUID(7) }, [
            `some test of`,
            h(
              "strong",
              { $slots: { default: [`child`] }, id: ctx.getUID(8) },
              []
            ),
            `slot`,
          ]),
        ],
      },
      id: ctx.getUID(5),
    },
    []
  ),
]);
;
			}
		
			instance.prototype.__hydrate = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h("div", { id: ctx.getUID(4) }, [
  h(
    "test2",
    {
      $slots: {
        default: [-1, -1],
        footer: [
          h("div", { id: ctx.getUID(7) }, [
            -1,
            h("strong", { id: ctx.getUID(8) }, []),
            -1,
          ]),
        ],
      },
      id: ctx.getUID(5),
    },
    []
  ),
]);
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
/* harmony default export */ __webpack_exports__["default"] = ({});

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

var _test = _interopRequireDefault(__webpack_require__(/*! ../components/test.sin */ "./components/test.sin"));

var _test2 = _interopRequireDefault(__webpack_require__(/*! ../components/test2.sin */ "./components/test2.sin"));

var _index = _interopRequireDefault(__webpack_require__(/*! ../pages/index.sin */ "./pages/index.sin"));

var _time = _interopRequireDefault(__webpack_require__(/*! ./time */ "./src/time.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const IndexPage = import(/* webpackChunkName: "pageIndex" */ '../pages/index.sin')
var LAYOUT;
var PageIndex, PageIndex2;

function TEST_WEBPACK_BUILD() {
  (0, _time.default)('SSR-Build');

  _i.default.registerComponent(_test.default);

  _i.default.registerComponent(_test2.default);

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
  // TEST_HYDRATE();
  // return;
  // setTimeout(() => {
  // 	TEST_RENDER();
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

/***/ "./src/test-import.js":
/*!****************************!*\
  !*** ./src/test-import.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.d = void 0;
var d = 2;
exports.d = d;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXN0LnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rlc3Quc2luPzQzODMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXN0Mi5zaW4iLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXN0Mi5zaW4/YjIwOSIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9jb21waWxlci9zcmMvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jhc2ljLmpzIiwid2VicGFjazovLy8uLi9zcmMvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2guanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xvb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uLi9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZhbHVlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaHlkcmF0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnNpbiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4/NDNmZSIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyLXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3QtaW1wb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy90aW1lLmpzIl0sIm5hbWVzIjpbIl8iLCJ5Iiwic2VsZiIsImNsYXNzZXMiLCJvYmoiLCJzdGF0aWNDbGFzc2VzIiwiZHluYW1pYyIsImkiLCJhcmd1bWVudHMiLCJhcmciLCJBcnJheSIsImoiLCJoYW5kbGVDbGFzc09iamVjdCIsImEiLCJ2YWwiLCJzdHlsZXMiLCJjYW1lbFRvUHJvcCIsImhhbmRsZVN0eWxlc09iamVjdCIsIkhJRCIsIkJhc2ljIiwib2JzZXJ2YWJsZSIsImNvbnNvbGUiLCJkZWZhdWx0IiwiY29tcHV0ZWQiLCJjaGlsZHJlbiIsInBhcmVudCIsInByb3AiLCJ2YWx1ZSIsInR5cGUiLCJwcm9wcyIsInN0YXRlZnVsIiwiT2JqZWN0IiwiY3R4IiwiaCIsInN0YXRlbWVudCIsImxvb3AiLCJzbG90IiwiZCIsImMiLCJjb21waWxlciIsImhTdGF0ZW1lbnQiLCJoU2xvdCIsImhMb29wIiwiU2ludW91cyIsImVsIiwidGFnIiwiSFRNTFRhZ3MiLCJjaGlsZCIsIm9wdHMiLCJkeW5hbWljQXR0cnMiLCJjb21wb25lbnQiLCJyZWdpc3RlckNoaWxkcmVuIiwicmVzdWx0IiwibG9vcF9jb25kaXRpb24iLCJjb25kaXRpb24iLCJpdGVtIiwiZm4iLCJiaW5kaW5nIiwidiIsIm1ha2VPYnNlZXJ2YWJsZSIsInNob3VsZEhhbmRsZSIsIndpbmRvdyIsIm5hbWUiLCJjb250ZXh0IiwiY2hpbGRJbmRleCIsInNpemUiLCJub2RlIiwiZG9jdW1lbnQiLCJTVE9SQUdFIiwiYXBpIiwibm9kZXMiLCJiaW5kQ2hpbGRyZW4iLCJmaWx0ZXJDaGlsZE5vZGVzIiwiaHlkcmF0ZVRhZyIsImJpbmROb2RlIiwiaHlkcmF0ZVByb3BzIiwiaHlkcmF0ZUNoaWxkcmVuIiwiaHlkcmF0ZSIsImluaXRDb21wb25lbnQiLCJlbnRyaWVzIiwiaWQiLCJlbnRyeSIsInRpbWVCZW5jaG1hcmsiLCJjYWxsYmFjayIsInRyZWUiLCJjb25uZWN0ZWROb2RlIiwiaW5zdGFuY2UiLCJTaW51b3VzQ29tcG9uZW50cyIsImNyZWF0ZUhJRCIsImNsZWFySElEIiwicmVnaXN0ZXJDb21wb25lbnQiLCJoYXNDb21wb25lbnQiLCJnZXRIeWRyYXRlQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwibW9kdWxlIiwibGF5b3V0IiwiTEFZT1VUIiwiUGFnZUluZGV4IiwiUGFnZUluZGV4MiIsIlRFU1RfV0VCUEFDS19CVUlMRCIsInRlc3QiLCJ0ZXN0MiIsIlRFU1RfUkVOREVSIiwiSW5kZXhQYWdlIiwiQ0xFQVJfSE9PS1MiLCJodG1sIiwiaW5uZXJIVE1MIiwiaG9vayIsIlRFU1RfSFlEUkFURSIsImxvYWQiLCJnZXRFbGVtZW50QnlJZCIsInNldFRpbWVvdXQiLCJ0aW1lcyIsInRpbWUiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIs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TSxHQUFHN0IsUUFBUSxDQUFDMkMsY0FBVCxDQUF3QixRQUF4QixDQUFULENBRGdCLENBSWhCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBUixhQUFXLEdBYkssQ0FjaEI7QUFDQTs7QUFFQVMsWUFBVSxDQUFDLFlBQU07QUFFaEJQLGVBQVc7QUFFWE8sY0FBVSxDQUFDLFlBQU07QUFDZkgsa0JBQVk7QUFDYixLQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0EsR0FQUyxFQU9QLElBUE8sQ0FBVjtBQVFBLENBekJELEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hETyxJQUFNdkUsQ0FBQyxHQUFHLENBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUCxJQUFJMkUsS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBU0MsSUFBVCxDQUFjbkQsSUFBZCxFQUNmO0FBQ0MsTUFBSW9ELEdBQUcsR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0osS0FBSyxDQUFDbEQsSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDa0QsU0FBSyxDQUFDbEQsSUFBRCxDQUFMLEdBQWNvRCxHQUFkO0FBQ0EsV0FBT0YsS0FBSyxDQUFDbEQsSUFBRCxDQUFaO0FBQ0E7O0FBRUR6QyxTQUFPLENBQUNnRyxHQUFSLFdBQW9CdkQsSUFBcEIsU0FBOEJvRCxHQUFHLEdBQUdGLEtBQUssQ0FBQ2xELElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPa0QsS0FBSyxDQUFDbEQsSUFBRCxDQUFaO0FBQ0EsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXHRcdGltcG9ydCB7IEJhc2ljIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50Jztcblx0XHRpbXBvcnQgY29tcG9uZW50Q29uZmlnIGZyb20gXCIuL3Rlc3Quc2luP3R5cGU9c2NyaXB0XCI7XG5cdFx0XG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFRlc3QoKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnVGVzdCc7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fc2xvdHMgPSB7fTtcblxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZykge1xuXHRcdFx0aWYodHlwZW9mIGNvbmZpZ1trZXldID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5tZXRob2RzKSB7XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZy5tZXRob2RzW2tleV1cblx0XHR9XG5cdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcmVuZGVyID0gZnVuY3Rpb24oaCwgeyBjdHgsIGNvbXBvbmVudHMsIHJlbmRlciwgc3RhdGVtZW50LCBzbG90LCBsb29wLCBkLCBjIH0pIHtcblx0XHRcdFx0cmV0dXJuIGgoXCJkaXZcIiwgeyBvbmNsaWNrOiBjdHgucmVhY3RpdmVfY2xpY2ssIGlkOiBjdHguZ2V0VUlEKDIpIH0sIFtcbiAgYygoKSA9PiB7XG4gICAgcmV0dXJuIGB0ZXN0ICR7Y3R4Ll9zdGF0ZS52aXNpYmxlKCl9YDtcbiAgfSksXG5dKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcImRpdlwiLCB7IG9uY2xpY2s6IGN0eC5yZWFjdGl2ZV9jbGljaywgaWQ6IGN0eC5nZXRVSUQoMiksIF9zOiB0cnVlIH0sIFtcbiAgYygoKSA9PiB7XG4gICAgcmV0dXJuIGB0ZXN0ICR7Y3R4Ll9zdGF0ZS52aXNpYmxlKCl9YDtcbiAgfSksXG5dKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRleHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcblx0IiwiaW1wb3J0IHsgZCB9IGZyb20gJy4uL3NyYy90ZXN0LWltcG9ydC5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsaWNrczogMVxuICAgIH07XG4gIH0sXG5cbiAgc3RhdGUobykge1xuICAgIHJldHVybiB7XG4gICAgICB2aXNpYmxlOiBvKGQpLFxuICAgICAgY2xpY2tzMjogbyh7XG4gICAgICAgIGE6IDJcbiAgICAgIH0pXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZChvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbXB1dGVkMjogbygoKSA9PiB7XG4gICAgICAgIGxldCBrID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgZCBpbiBbMSwgMiwgM10pIHtcbiAgICAgICAgICBrLnB1c2godGhpcy5fc3RhdGUudmlzaWJsZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZS52aXNpYmxlKCkgKiAyICogNTtcbiAgICAgIH0pXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdGhpcy5fZGF0YS5jbGlja3MrKzsgLy8gYWxlcnQoY2xpY2tzKVxuICAgIH0sXG4gICAgcmVhY3RpdmVfY2xpY2s6IGZ1bmN0aW9uIChldmVudDIpIHtcbiAgICAgIHRoaXMuX3N0YXRlLnZpc2libGUodGhpcy5fc3RhdGUudmlzaWJsZSgpICsgMSk7XG4gICAgfVxuICB9XG59OyIsIlxuXHRcdGltcG9ydCB7IEJhc2ljIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50Jztcblx0XHRpbXBvcnQgY29tcG9uZW50Q29uZmlnIGZyb20gXCIuL3Rlc3QyLnNpbj90eXBlPXNjcmlwdFwiO1xuXHRcdFxuXHRcdGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdG1ldGhvZHM6IHt9LFxuXHRcdH0sIGNvbXBvbmVudENvbmZpZyk7XG5cblx0XHRsZXQgaW5zdGFuY2UgPSBmdW5jdGlvbiBUZXN0MigpIHtcblx0XHRcdEJhc2ljLmNhbGwodGhpcyk7XG5cdFx0fTtcblx0XHRcblx0XHQvLyBpbmhlcml0IEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNpYy5wcm90b3R5cGUpO1xuXG5cdFx0Ly8gY29ycmVjdCB0aGUgY29uc3RydWN0b3IgcG9pbnRlciBiZWNhdXNlIGl0IHBvaW50cyB0byBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGluc3RhbmNlO1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kcyA9IHt9O1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fY29tcG9uZW50TmFtZSA9ICdUZXN0Mic7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fc2xvdHMgPSB7XCJkZWZhdWx0XCI6WzAsNV0sXCJmb290ZXJcIjpbMCw3XX07XG5cblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcpIHtcblx0XHRcdGlmKHR5cGVvZiBjb25maWdba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcubWV0aG9kcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWcubWV0aG9kc1trZXldXG5cdFx0fVxuXHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3JlbmRlciA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCwgZCwgYyB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFxuICBcImRpdlwiLFxuICB7XG4gICAgb25jbGljazogKCkgPT4ge1xuICAgICAgcmV0dXJuIGFsZXJ0KDEpO1xuICAgIH0sXG4gICAgZHluYW1pY1N0eWxlOiB7IHBhZGRpbmdUb3A6IGN0eC5fc3RhdGUuczIgfSxcbiAgICBpZDogY3R4LmdldFVJRCgxMCksXG4gIH0sXG4gIFtcbiAgICBjKCgpID0+IHtcbiAgICAgIHJldHVybiBgdGVzdCAke2N0eC5fc3RhdGUuczIoKX1gO1xuICAgIH0pLFxuICAgIGgoXCJiclwiLCB7fSwgW10pLFxuICAgIHN0YXRlbWVudChcbiAgICAgIGN0eC5fc3RhdGUuczEsXG4gICAgICAyLFxuICAgICAgKGgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBoKFwiZGl2XCIsIHsgaWQ6IGN0eC5nZXRVSUQoMTMpIH0sIFtcbiAgICAgICAgICAgIGgoXCJzcGFuXCIsIHt9LCBbYHN0YXRpYyAxYF0pLFxuICAgICAgICAgICAgYygoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBgW3Zpc2libGVdIHNob3cgJHtjdHguX2RhdGEuZGRkfSAtICR7Y3R4Ll9zdGF0ZS5zMygpfWA7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGgoXCJzcGFuXCIsIHt9LCBbYHN0YXRpYyAyYF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIHN0YXRlbWVudChjdHguX2RhdGEudmlzaWJsZSwgMSwgKGgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBoKFwic3BhblwiLCB7fSwgW2BbczFdIHRlc3RgXSk7XG4gICAgICAgICAgfSksXG4gICAgICAgIF07XG4gICAgICB9LFxuICAgICAgY3R4Ll9zdGF0ZS5zMyxcbiAgICAgIDEsXG4gICAgICAoaCkgPT4ge1xuICAgICAgICByZXR1cm4gaChcImRpdlwiLCB7fSwgW2BbczNdIHRlc3RgXSk7XG4gICAgICB9XG4gICAgKSxcbiAgICBbaChcImRpdlwiLCB7fSwgW2Bbbm9uZV0gaGlkZWBdKV0sXG4gICAgc2xvdChjdHgsIGgsIFwiZGVmYXVsdFwiLCBudWxsLCB7fSwgW2BkZWZhdWx0IHNsb3QgdmFsdWVgXSksXG4gICAgaChcImRpdlwiLCB7fSwgW2BhZnRlci1vbmNlLWlmYF0pLFxuICAgIHNsb3QoXG4gICAgICBjdHgsXG4gICAgICBoLFxuICAgICAgXCJmb290ZXJcIixcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IGNsYXNzOiBcImZvb3RlclwiLCBzdHlsZTogXCJiYWNrZ3JvdW5kOiAjZWZlZmVmO1wiIH0sXG4gICAgICBbYGZvb3RlciBzbG90IHZhbHVlYF1cbiAgICApLFxuICBdXG4pO1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9faHlkcmF0ZSA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCwgZCwgYyB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFxuICBcImRpdlwiLFxuICB7XG4gICAgb25jbGljazogKCkgPT4ge1xuICAgICAgcmV0dXJuIGFsZXJ0KDEpO1xuICAgIH0sXG4gICAgZHluYW1pY1N0eWxlOiB7IHBhZGRpbmdUb3A6IGN0eC5fc3RhdGUuczIgfSxcbiAgICBpZDogY3R4LmdldFVJRCgxMCksXG4gICAgX3M6IHRydWUsXG4gIH0sXG4gIFtcbiAgICBjKCgpID0+IHtcbiAgICAgIHJldHVybiBgdGVzdCAke2N0eC5fc3RhdGUuczIoKX1gO1xuICAgIH0pLFxuICAgIC0xLFxuICAgIHN0YXRlbWVudChcbiAgICAgIGN0eC5fc3RhdGUuczEsXG4gICAgICAyLFxuICAgICAgKGgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBoKFwiZGl2XCIsIHsgaWQ6IGN0eC5nZXRVSUQoMTMpIH0sIFtcbiAgICAgICAgICAgIGgoXCJzcGFuXCIsIHt9LCBbYHN0YXRpYyAxYF0pLFxuICAgICAgICAgICAgYygoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBgW3Zpc2libGVdIHNob3cgJHtjdHguX2RhdGEuZGRkfSAtICR7Y3R4Ll9zdGF0ZS5zMygpfWA7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGgoXCJzcGFuXCIsIHt9LCBbYHN0YXRpYyAyYF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIHN0YXRlbWVudChjdHguX2RhdGEudmlzaWJsZSwgMSwgKGgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBoKFwic3BhblwiLCB7fSwgW2BbczFdIHRlc3RgXSk7XG4gICAgICAgICAgfSksXG4gICAgICAgIF07XG4gICAgICB9LFxuICAgICAgY3R4Ll9zdGF0ZS5zMyxcbiAgICAgIDEsXG4gICAgICAoaCkgPT4ge1xuICAgICAgICByZXR1cm4gaChcImRpdlwiLCB7fSwgW2BbczNdIHRlc3RgXSk7XG4gICAgICB9XG4gICAgKSxcbiAgICAtMSxcbiAgICAtMSxcbiAgICAtMSxcbiAgICAtMSxcbiAgXVxuKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRleHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcblx0IiwiZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZGQ6ICdbdGVzdCB2YXJpYWJsZSBkZGRdJyxcbiAgICAgIHRpbWVyMTogbnVsbCxcbiAgICAgIHRpbWVyMjogbnVsbCxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIHN0YXRlKG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgczE6IG8odHJ1ZSksXG4gICAgICBzMjogbygxMCksXG4gICAgICBzMzogbyhmYWxzZSlcbiAgICB9O1xuICB9LFxuXG4gIGNvbXB1dGVkKG8pIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG1ha2VJZjogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ01ha2UnKTtcbiAgICAgIHRoaXMuX3N0YXRlLnMxKHRydWUpO1xuICAgICAgdGhpcy5fc3RhdGUuczModHJ1ZSk7IC8vIGNvbnNvbGUubG9nKHMxLCBzMyk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMShmYWxzZSk7XG4gICAgICAgIHRoaXMuX3N0YXRlLnMzKHRydWUpOyAvLyBjb25zb2xlLmxvZyhzMSwgczMpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fc3RhdGUuczEoZmFsc2UpO1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMyhmYWxzZSk7IC8vIGNvbnNvbGUubG9nKHMxLCBzMyk7XG4gICAgICB9LCAyMDAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMSh0cnVlKTtcbiAgICAgICAgdGhpcy5fc3RhdGUuczMoZmFsc2UpOyAvLyBjb25zb2xlLmxvZyhzMSwgczMpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLCAnbW91bnQnKTtcbiAgICAgIHRoaXMubWFrZUlmKCk7XG4gICAgICB0aGlzLl9kYXRhLnRpbWVyMSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5tYWtlSWYoKTtcbiAgICAgIH0sIDUwMDApO1xuICAgICAgdGhpcy5fZGF0YS50aW1lcjIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGlkLCB0aGlzLl9zdGF0ZS5zMigpKTtcbiAgICAgICAgdGhpcy5fc3RhdGUuczIodGhpcy5fc3RhdGUuczIoKSArIDIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9LFxuICAgIHVubW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5lcnJvcignY2xlYXInLCB0aW1lcjEsIHRpbWVyMilcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fZGF0YS50aW1lcjEpO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9kYXRhLnRpbWVyMik7XG4gICAgfVxuICB9XG59OyIsImV4cG9ydCBjb25zdCBfID0gLTE7XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5cblxuZnVuY3Rpb24gY2FtZWxUb1Byb3Aocylcbntcblx0cmV0dXJuIHNcblx0XHQucmVwbGFjZSgvXFwuPyhbQS1aXSspL2csICh4LCB5KSA9PiBgLSR7eS50b0xvd2VyQ2FzZSgpfWApXG5cdFx0LnJlcGxhY2UoL14tLywgJycpO1xufVxuXG5mdW5jdGlvbiBvbmx5VW5pcXVlKHZhbHVlLCBpbmRleCwgc2VsZikgeyBcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDbGFzc09iamVjdChvYmopXG57XG5cdGxldCBjbGFzc2VzID0gW107XG5cblx0Zm9yIChsZXQga2V5IGluIG9iaikge1xuXHRcdGlmKHZhbHVlKG9ialtrZXldKSkge1xuXHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2VzKHN0YXRpY0NsYXNzZXMgPSBbXSwgZHluYW1pYyA9IHt9KVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdFxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYXJnLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKHZhbHVlKGFyZ1tqXSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KFxuXHRcdFx0XHRcdGhhbmRsZUNsYXNzT2JqZWN0KGFyZylcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdChcblx0XHRcdFx0XHRoYW5kbGVDbGFzc09iamVjdCh2YWx1ZShhcmcpKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKCh2LCBpLCBhKSA9PiBhLmluZGV4T2YodikgPT09IGkpO1xuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCBvYmopXG57XG5cdGZvciAobGV0IGtleSBpbiBvYmopIHtcblx0XHRsZXQgdmFsID0gdmFsdWUob2JqW2tleV0pO1xuXHRcdGlmKHZhbCAhPT0gbnVsbCkge1xuXHRcdFx0c3R5bGVzW2NhbWVsVG9Qcm9wKGtleSldID0gdmFsO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSB7fTtcblx0XHRcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgYXJndW1lbnRzW2ldKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgdmFsdWUoYXJndW1lbnRzW2ldKSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3R5bGVzO1xuXHR9XG59IiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5cblxuaW1wb3J0IHsgaHlkcmF0ZSwgZGh0bWwgfSBmcm9tICdzaW51b3VzL2h5ZHJhdGUnO1xuXG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCB9IGZyb20gJy4vb2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IGxvb3AgYXMgaExvb3AsIHNsb3QgYXMgaFNsb3QsIHN0YXRlbWVudCBhcyBoU3RhdGVtZW50IH0gZnJvbSAnQHNpbnVvdXMvaHlkcmF0aW9uJztcbmltcG9ydCB7IHN0eWxlcywgY2xhc3Nlcywgc3RhdGVtZW50LCBkeW5hbWljLCBsb29wLCBzbG90IH0gZnJvbSAnLi9pbmRleCc7XG5cbmltcG9ydCB7IGggfSBmcm9tICcuLyc7XG5cbi8vIGltcG9ydCB7IHJlbmRlciwgaHlkcmF0ZSB9IGZyb20gJy4vdGVtcGxhdGUnO1xubGV0IEhJRCA9IDA7XG5cblxudmFyIEJhc2ljID0gZnVuY3Rpb24gKCkge1xuXG5cdGZ1bmN0aW9uIEJhc2ljKClcblx0e1xuXHRcdHRoaXMuX2lzQ29tcG9uZW50ID0gdHJ1ZTtcblx0XHR0aGlzLmhpZCA9ICsrSElEO1xuXG5cdFx0dGhpcy5fcHJvcHMgPSB0aGlzLnByb3BzKCk7XG5cdFx0dGhpcy5fcGFzc2VkUHJvcHMgPSB7fTtcblxuXHRcdC8vIExvY2FsIGRhdGFcblx0XHR0aGlzLl9kYXRhID0gdGhpcy5kYXRhKCk7XG5cdFx0Ly8gU3RhdGVmdWwgZGF0YVxuXHRcdHRoaXMuX3N0YXRlID0gdGhpcy5zdGF0ZShvYnNlcnZhYmxlKTtcblxuXHRcdGNvbnNvbGUubG9nKCdjcmVhdGUgc3RhdGUnLCB0aGlzLmhpZCwgdGhpcy5uYW1lKTtcblxuXHRcdHRoaXMuX3Nsb3RzID0ge1xuXHRcdFx0ZGVmYXVsdDogW10sXG5cdFx0fTtcblxuXHRcdHRoaXMuX2NvbXB1dGVkID0gdGhpcy5jb21wdXRlZChjb21wdXRlZCk7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBbXTtcblxuXG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblxuXHRcdC8vIERlZmF1bHQgcHJvcCB2YWx1ZXMgXG5cdFx0dGhpcy5pbml0UHJvcHMoKTtcblxuXHRcdC8vIHRoaXMuaW5pdFRlbXBsYXRlKCk7XG5cblx0XHR0aGlzLnNldENoaWxkcmVuKCk7XG5cdFx0dGhpcy5zZXRQYXJlbnQoKTtcblxuXHRcdHRoaXMuYmluZENvbnRleHQoKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmJpbmRDb250ZXh0ID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Y29uc29sZS5lcnJvcih0aGlzKTtcblx0XHQvLyBmb3IobGV0IGtleSBpbiB0aGlzLl9tZXRob2RzKSB7XG5cdFx0Ly8gXHR0aGlzLl9tZXRob2RzW2tleV0gPSB0aGlzLl9tZXRob2RzW2tleV0uYmluZCh0aGlzKTtcblx0XHQvLyB9XG5cblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9jb21wdXRlZCkge1xuXHRcdFx0dGhpcy5fY29tcHV0ZWRba2V5XSA9IHRoaXMuX2NvbXB1dGVkW2tleV0uYmluZCh0aGlzKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIENvbmZpZ1xuXHQgKi9cblxuXHQvLyBCYXNpYy5wcm90b3R5cGUuc2V0TWV0aG9kcyA9IGZ1bmN0aW9uKG1ldGhvZHMgPSB7fSlcblx0Ly8ge1xuXHQvLyBcdHRoaXMuX21ldGhvZHMgPSBtZXRob2RzO1xuXHQvLyB9XG5cblx0LyoqXG5cdCAqIEhpZXJhcmNoeVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuc2V0Q2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZHJlbiA9IFtdKVxuXHR7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmFkZENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGQpXG5cdHtcblx0XHR0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnNldFBhcmVudCA9IGZ1bmN0aW9uKHBhcmVudCA9IG51bGwpXG5cdHtcblx0XHR0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblx0LyoqXG5cdCAqIFByb3BzXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5wcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmluaXRQcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX3Byb3BzKVxuXHRcdHtcblx0XHRcdGxldCBwcm9wID0gdGhpcy5fcHJvcHNba2V5XTtcblx0XHRcdGxldCB2YWx1ZSA9IG51bGw7XG5cdFx0XHRsZXQgdHlwZSA9IG51bGw7XG5cblx0XHRcdGlmKHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdC8vIHR5cGVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlID0gcHJvcC5kZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2RhdGFba2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NTbG90cyA9IGZ1bmN0aW9uKG5hbWUsIHNsb3RzKVxuXHR7XG5cdFx0dGhpcy5fc2xvdHNbbmFtZV0gPSBzbG90cztcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NQcm9wcyA9IGZ1bmN0aW9uKHByb3BzKVxuXHR7XG5cdFx0Ly8gaWYodHlwZW9mIHRoaXMuX3Bhc3NlZFByb3BzW2NvbXBvbmVudC5oaWRdID09PSAndW5kZWZpbmVkJykge1xuXHRcdC8vIFx0dGhpcy5fcGFzc2VkUHJvcHNbY29tcG9uZW50LmhpZF0gPSB7fTtcblx0XHQvLyB9XG5cblx0XHRmb3IobGV0IGtleSBpbiBwcm9wcylcblx0XHR7XG5cdFx0XHRpZihwcm9wc1trZXldLl9vYnNlcnZhYmxlKSB7XG5cdFx0XHRcdHRoaXMuX2lzU3RhdGVmdWwgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9kYXRhW2tleV0gPSBwcm9wc1trZXldO1xuXHRcdFx0Ly8gaWYodHlwZW9mIHRoaXMuX2RhdGFba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdC8vIFx0dGhyb3cgbmV3IEVycm9yKGBbU2ludW91c10gQ29tcG9uZW50ICR7IHRoaXMubmFtZSB9IGFscmVhZHkgaGFzICR7IGtleSB9IHByb3BlcnR5YClcblx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHQvLyBcdHRoaXMuX2RhdGFba2V5XSA9IHByb3BzW2tleV07XG5cdFx0XHQvLyB9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsaWVudCBzaWRlIGhhbmRsZXIgYWZ0ZXIgU1NSIChoeWRyYXRpb24pXG5cdCAqL1xuXG5cblx0QmFzaWMucHJvdG90eXBlLmhhc1N0YXRlZnVsbERhdGEgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRsZXQgc3RhdGVmdWwgPSBmYWxzZTtcblxuXHRcdGZvcihsZXQgaGlkIGluIHRoaXMuX3Bhc3NlZFByb3BzKSB7XG5cdFx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9wYXNzZWRQcm9wc1toaWRdKSB7XG5cdFx0XHRcdGlmKHRoaXMuX3Bhc3NlZFByb3BzW2hpZF1ba2V5XSkge1xuXHRcdFx0XHRcdHN0YXRlZnVsID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihzdGF0ZWZ1bCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGVmdWwgJiYgdGhpcy5faXNTdGF0ZWZ1bDtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmhhc1N0YXRlbGVzc0RhdGEgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZGF0YSkubGVuZ3RoID4gMDtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2NhbCBjb21wb25lbnQgZGF0YVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmNvbXB1dGVkID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXRlZnVsIGRhdGFcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnN0YXRlID0gZnVuY3Rpb24obylcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiAxLiBDcmVhdGUgY2hpbGQgY29tcG9uZW50cyAoZGlmZmVyZW50IGNvbnRleHQpXG5cdCAqIDIuIFBhc3MgcHJvcHNcblx0ICogMy4gUmVuZGVyXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUuY2hpbGRDb21wb25lbnRzID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiAgTGlmZSBjeWNsZSBob29rc1xuXHQgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLmhvb2sgPSBmdW5jdGlvbih0eXBlID0gJ21vdW50ZWQnKVxuXHR7XG5cdFx0aWYodGhpc1t0eXBlXSkge1xuXHRcdFx0dGhpc1t0eXBlXS5jYWxsKHRoaXMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMuX2NoaWxkcmVuW2ldLmhvb2sodHlwZSk7XG5cdFx0fVxuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUubW91bnRlZCA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUudW5tb3VudGVkID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiBQcml2YXRlIEFQSSBmb3IgcmVuZGVyIGFuZCBoeWRyYXRlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHggPSBudWxsKVxuXHR7XG5cdFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdFx0XHRjdHggPSB0aGlzO1xuXHRcdH1cblxuXHRcdGguYmluZChjdHgpO1xuXG5cdFx0cmV0dXJuIGN0eC5fX3JlbmRlcihoLmJpbmQoY3R4KSwge1xuXHRcdFx0Y3R4LFxuXHRcdFx0c3RhdGVtZW50LFxuXHRcdFx0bG9vcCxcblx0XHRcdHNsb3QsXG5cdFx0XHRkOiBkeW5hbWljLFxuXHRcdFx0YzogY29tcHV0ZWQsXG5cdFx0fSk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5oeWRyYXRlID0gZnVuY3Rpb24oY3R4ID0gbnVsbCwgY29tcGlsZXIgPSBudWxsKVxuXHR7XG5cdFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdFx0XHRjdHggPSB0aGlzO1xuXHRcdH1cblxuXHRcdHJldHVybiBjdHguX19oeWRyYXRlKGNvbXBpbGVyLCB7XG5cdFx0XHRjdHgsXG5cdFx0XHRzdGF0ZW1lbnQ6IGhTdGF0ZW1lbnQsXG5cdFx0XHRzbG90OiBoU2xvdCxcblx0XHRcdGxvb3A6IGhMb29wLFxuXHRcdFx0ZDogZHluYW1pYyxcblx0XHRcdGM6IGNvbXB1dGVkLFxuXHRcdH0pO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUudGVtcGxhdGUgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXG5cdC8vIEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZUJ1aWxkZXIgPSBmdW5jdGlvbihoLCBvcHRzKVxuXHQvLyB7XG5cdC8vIFx0cmV0dXJuIHRoaXNbYF9fJHsgb3B0cy5yZW5kZXIgfWBdKGgsIG9wdHMpO1xuXHQvLyB9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuY29tcG9uZW50ID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUuZ2V0VUlEID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRyZXR1cm4gYGh5ZHItJHsgU2ludW91cy5jcmVhdGVISUQoaW5kZXgpIH1gO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oXCJuYW1lXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lOyB9KTtcblxuXHRyZXR1cm4gQmFzaWM7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xuIiwiaW1wb3J0IHsgaCwgaHMsIGFwaSB9IGZyb20gJ3NpbnVvdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljKGgsIHRhZywgb3B0cywgY2hpbGRyZW4pXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IGVsID0gdGFnKCk7XG5cdFx0cmV0dXJuIGgoZWwsIG9wdHMsIGNoaWxkcmVuKTtcblx0fTtcblxufSIsImltcG9ydCB7IGggYXMgaHMgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBzdWJzY3JpYmUgfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuaW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCBvcHRpb25zLCAgfSBmcm9tICcuLyc7XG5pbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcblxubGV0IEhUTUxUYWdzID0gW1xuXHQnaScsICdkaXYnLCAnc3BhbicsICdocicsICdicicsICdzdHJvbmcnLCAncHJlJ1xuXTtcblxuXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG57XG5cdGVsID0gZWwudG9Mb3dlckNhc2UoKTtcblx0Ly8gZWwgPSBjb21wdXRlZCgoKSA9PiAodHlwZW9mIGVsID09PSAnZnVuY3Rpb24nID8gZWwgOiBlbCkpO1xuXG5cdC8vIGNvbnNvbGUubG9nKCdbIEZGIF0nLCBlbCwgdGhpcylcblx0bGV0IGR5bmFtaWNBdHRycyA9IGZhbHNlO1xuXG5cdG9wdGlvbnModGhpcywgb3B0cyk7XG5cblx0Ly8gSWYgSFRNTCB0YWcgcmVuZGVyXG5cdGlmKEhUTUxUYWdzLmluY2x1ZGVzKGVsKSkge1xuXHRcdHJldHVybiBocyhlbCwgb3B0cywgY2hpbGRyZW4pO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0Q29tcG9uZW50KGVsKTtcblxuXHQvLyBjb25zb2xlLmxvZyhjb21wb25lbnQpXG5cdFxuXHRpZih0eXBlb2Ygb3B0cy5wcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHR9XG5cblx0Zm9yKGxldCBrZXkgaW4gb3B0cy4kc2xvdHMpIHtcblx0XHRjb21wb25lbnQucGFzc1Nsb3RzKGtleSwgb3B0cy4kc2xvdHNba2V5XSk7XHRcblx0fVxuXG5cdHJlZ2lzdGVyQ2hpbGRyZW4odGhpcywgY29tcG9uZW50KTtcblxuXHRyZXR1cm4gY29tcG9uZW50LnJlbmRlcigpO1xufSIsImltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICdAc2ludW91cy9sYXp5JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb21wb25lbnQsIGxheW91dCwgdGltZUJlbmNobWFyayA9ICgpID0+IHt9LCBjYWxsYmFjayA9IG51bGwpIHtcblxuICAgIGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuICAgIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCAoaW5zdGFuY2UpID0+IHtcblxuICAgIFx0dGltZUJlbmNobWFyaygnUmVuZGVyJyk7XG5cblx0XHRsYXlvdXQuYXBwZW5kKGluc3RhbmNlLnJlbmRlcigpKTtcblx0XHRpbnN0YW5jZS5ob29rKCdtb3VudGVkJyk7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHRpbWVCZW5jaG1hcmsoJ1JlbmRlcicpO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb29wKClcbntcblx0XG59IiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBzaW51b3VzT2JzZXJ2YWJsZSwgY29tcHV0ZWQgYXMgc2ludW91c0NvbXB1dGVkIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VPYnNlZXJ2YWJsZShmbilcbntcblx0Zm4uX29ic2VydmFibGUgPSB0cnVlO1xuXHRyZXR1cm4gZm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZCh2LCBiaW5kaW5nID0gZmFsc2UpIHtcblxuXHRsZXQgZDtcblx0XG5cdGlmKGJpbmRpbmcpIHtcblx0XHRkID0gc2ludW91c0NvbXB1dGVkKHYuYmluZCh0aGlzKSk7XG5cdH0gZWxzZSB7XG5cdFx0ZCA9IHNpbnVvdXNDb21wdXRlZCh2KTtcblx0fVxuXG5cdG1ha2VPYnNlZXJ2YWJsZShkKTtcblxuXHRyZXR1cm4gZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmFibGUodiwgYmluZGluZyA9IGZhbHNlKVxue1xuXHRsZXQgZCA9IHNpbnVvdXNPYnNlcnZhYmxlKHYpO1xuXG5cdFxuXHRtYWtlT2JzZWVydmFibGUoZCk7XG5cblx0cmV0dXJuIGQ7XG59IiwiaW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCAgfSBmcm9tICcuLyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wdGlvbnMoY29udGV4dCwgb3B0cylcbntcblx0bGV0IHNob3VsZEhhbmRsZSA9IHtcblx0XHRzdHlsZXM6IGZhbHNlLFxuXHR9O1xuXG5cdGlmKCFvcHRzLnN0YXRpY1N0eWxlKSB7XG5cdFx0b3B0cy5zdGF0aWNTdHlsZSA9IHt9O1xuXHR9IGVsc2Uge1xuXHRcdHNob3VsZEhhbmRsZS5zdHlsZXMgPSB0cnVlO1xuXHR9XG5cblx0aWYoIW9wdHMuZHluYW1pY1N0eWxlKSB7XG5cdFx0b3B0cy5keW5hbWljU3R5bGUgPSBbXTtcblx0fSBlbHNlIHtcblx0XHRzaG91bGRIYW5kbGUuc3R5bGVzID0gdHJ1ZTtcblx0fVxuXG5cdGlmKHNob3VsZEhhbmRsZS5zdHlsZXMpIHtcblx0XHRvcHRzLnN0eWxlID0gc3R5bGVzLmFwcGx5KGNvbnRleHQsIFtvcHRzLnN0YXRpY1N0eWxlXS5jb25jYXQob3B0cy5keW5hbWljU3R5bGUpKVxuXHR9XG5cblx0Ly8gY29uc29sZS53YXJuKGNvbnRleHQsIG9wdHMpXG5cdC8qKlxuXHQgKiBDbGVhclxuXHQgKi9cblx0aWYoIXNob3VsZEhhbmRsZS5zdHlsZXMpIHtcblx0XHRkZWxldGUgb3B0cy5zdGF0aWNTdHlsZTtcblx0XHRkZWxldGUgb3B0cy5keW5hbWljU3R5bGU7XG5cdH1cblxuXHRyZXR1cm4gb3B0cztcbn0iLCJ3aW5kb3cuX1NpbnVvdXNDb21wb25lbnRzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyKG5hbWUsIGNvbXBvbmVudCA9IG51bGwpXG57XG5cdGlmKGNvbXBvbmVudCA9PSBudWxsKSB7XG5cdFx0Y29tcG9uZW50ID0gbmFtZTtcblx0XHRuYW1lID0gbmFtZS5uYW1lO1xuXHR9XG5cblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHR3aW5kb3cuX1NpbnVvdXNDb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsb3QoKVxue1xuXHRcbn0iLCJpbXBvcnQgeyBoIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KClcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICUgMyAhPT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdGF0ZW1lbnQgc2hvdWxkIGJlIG9kZCBudW1iZXInKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cblx0XHQvLyB2YWx1ZVxuXHRcdGxldCBjaGlsZEluZGV4ID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGxldCBzaXplID0gYXJndW1lbnRzW2kgKyAxXTtcblx0XHRcdGxldCB2YWx1ZSA9IGFyZ3VtZW50c1tpICsgMl07XG5cdFx0XHRsZXQgbm9kZSA9IG51bGw7XG5cblx0XHRcdGlmKHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aWYoY29uZGl0aW9uKCkpIHtcblx0XHRcdFx0XHRub2RlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKGNvbmRpdGlvbikge1xuXHRcdFx0XHRcdG5vZGUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb25zb2xlLndhcm4oaSwgc2l6ZSwgbm9kZSk7XG5cdFx0XHQvLyBQYXNzIGZhaWxlZCBzdGV0ZW1lbnQgY29uZGl0aW9uXG5cdFx0XHQvLyBOb3JtaWxpemUgaW5kZXggdGhhdCB3aWxsIGJlIHVzZWQgaW4gcmVwbGFjaW5nIHBsYWNlaG9sZGVyIChiZWxvdylcblx0XHRcdGlmKG5vZGUgPT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFub2RlLl9vYnNlcnZhYmxlKSB7XG5cdFx0XHRcdG5vZGUgPSBub2RlKGgpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gcmVwbGFjZSBwbGFjZWhvbGRlciB3aXRoIG5vZGVcblx0XHRcdC8vIEFuZCBjb3JyZWN0IGluZGV4XG5cdFx0XHRpZihzaXplID4gMSkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdC8vIGlmKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGVbal0pO1xuXHRcdFx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gXHRyZXN1bHQucHVzaChqID09IDAgPyBub2RlIDogLTEpO1xuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZC5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cblx0cmV0dXJuIGQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsdWUodmFsdWUpXG57XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiB2YWx1ZSgpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufSIsImltcG9ydCB7IGgsIGhzLCBhcGkgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlci9zcmMvZW1wdHknO1xuaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50JztcbmltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICdAc2ludW91cy9sYXp5JztcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcblxubGV0IE9CU0VSVkVSO1xubGV0IFNUT1JBR0UgPSB7fTtcblxuZnVuY3Rpb24gaHlkcmF0ZVByb3BzKGVsLCBvcHRzKVxue1xuXHRpZighb3B0cy5fcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFwaS5wcm9wZXJ0eShlbCwgb3B0cywgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVUYWcocGFyZW50LCBjaGlsZHJlbiwgY3VycmVudEluZGV4LCB2YWx1ZSlcbntcblx0bGV0IGVsID0gY2hpbGRyZW5bY3VycmVudEluZGV4XTtcblx0XG5cdGxldCBub2RlcyA9IHZhbHVlKCk7XG5cblx0Ly8gYXBpLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyh2YWx1ZSgpKSk7XG5cblx0Ly8gY29uc29sZS53YXJuKGNoaWxkcmVuLCBjdXJyZW50SW5kZXgsIHZhbHVlLCBub2Rlcylcblx0Ly8gbGV0IG5vZGVzID0gY29tcHV0ZWQoKCkgPT4gdmFsdWUoaCkpKCk7XG5cdC8vIGxldCBub2RlcyA9IGNvXG5cdC8vIGNvbnNvbGUuZXJyb3Iobm9kZXMpXG5cdFxuXG5cdGlmKEFycmF5LmlzQXJyYXkobm9kZXMpKSB7XG5cblxuXG5cblx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gXHRsZXQgY2hpbGQgPSBub2Rlc1tpXTtcblx0XHQvLyBcdGlmKHR5cGVvZiBjaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIFx0XHRjaGlsZCA9IGNoaWxkKClbMF07XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhwYXJlbnQsIGNoaWxkcmVuW2N1cnJlbnRJbmRleCArIGldLCBjaGlsZClcblx0XHQvLyBcdC8vIGFwaS5pbnNlcnQocGFyZW50LCBjaGlsZCwgY2hpbGRyZW5bY3VycmVudEluZGV4ICsgaV0pO1xuXHRcdC8vIFx0cGFyZW50LnJlcGxhY2VDaGlsZChjaGlsZCwgY2hpbGRyZW5bY3VycmVudEluZGV4ICsgaV0pXG5cdFx0Ly8gfVxuXHR9IGVsc2Uge1xuXHRcdGFwaS5pbnNlcnQoZWwsIG5vZGVzLCBudWxsKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoeWRyYXRlQ2hpbGRyZW4obm9kZSwgY2hpbGRyZW4pXG57XG5cdGxldCBiaW5kQ2hpbGRyZW4gPSBbXTtcblxuXHRpZihub2RlICE9PSBudWxsKSB7XG5cdFx0YmluZENoaWxkcmVuID0gZmlsdGVyQ2hpbGROb2Rlcyhub2RlKTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRpZihjaGlsZHJlbltpXSA9PT0gXykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUuZXJyb3IoYmluZENoaWxkcmVuW2ldLCBjaGlsZHJlbltpXSk7XG5cdFx0aHlkcmF0ZVRhZyhub2RlLCBiaW5kQ2hpbGRyZW4sIGksIGNoaWxkcmVuW2ldKTtcblx0fVxufVxuXG5mdW5jdGlvbiBoeWRyYXRlKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG57XG5cdGlmKCFvcHRzWydpZCddKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGJpbmROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7IG9wdHNbJ2lkJ10gfWApO1xuXG5cdC8vIGNvbnNvbGUubG9nKGVsLCBvcHRzLCBjaGlsZHJlbilcblx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0aHlkcmF0ZVByb3BzKGJpbmROb2RlLCBvcHRzKTtcblx0XHRoeWRyYXRlQ2hpbGRyZW4oYmluZE5vZGUsIGNoaWxkcmVuKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbntcblx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcblx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlcihlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxue1xuXHRvcHRpb25zKHRoaXMsIG9wdHMpO1xuXHRcdFx0XHRcblx0aWYoIVNpbnVvdXMuaGFzQ29tcG9uZW50KGVsKSkge1xuXHRcdGh5ZHJhdGUuY2FsbCh0aGlzLCBlbCwgb3B0cywgY2hpbGRyZW4pO1xuXHRcdHJldHVybiBfO1xuXHR9XG5cdFx0XG5cdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldEh5ZHJhdGVDb21wb25lbnQoZWwpO1xuXG5cdGlmKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBfO1xuXHR9XG5cdC8vIGNvbnNvbGUubG9nKCdbIENPTVBPTkVOVCBdJywgZWwpO1xuXHRpZih0eXBlb2Ygb3B0cy5wcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHR9XG5cblx0Y29tcG9uZW50LnBhc3NTbG90cygnZGVmYXVsdCcsIGNoaWxkcmVuKTtcblxuXHRyZWdpc3RlckNoaWxkcmVuKHRoaXMsIGNvbXBvbmVudCk7XG5cblx0cmV0dXJuIGluaXRDb21wb25lbnQoY29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gaW5pdENvbXBvbmVudChjb21wb25lbnQpXG57XG5cdGNvbXBvbmVudC5oeWRyYXRlKGNvbXBvbmVudCwgY29tcGlsZXIuYmluZChjb21wb25lbnQpKTtcblxuXHRyZXR1cm4gXztcbn1cblxuZnVuY3Rpb24gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJDYWxsYmFjayAoZW50cmllcywgb2JzZXJ2ZXIpXG57XG5cdGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG5cdFx0bGV0IGlkID0gZW50cnkudGFyZ2V0LmlkXG5cdFx0Ly8gY29uc29sZS5sb2coaWQpO1xuXHRcdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0aHlkcmF0ZVByb3BzKGVudHJ5LnRhcmdldCwgU1RPUkFHRVtpZF0ub3B0cyk7XG5cdFx0XHRoeWRyYXRlQ2hpbGRyZW4oZW50cnkudGFyZ2V0LCBTVE9SQUdFW2lkXS5jaGlsZHJlbik7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0SHlkcmF0aW9uKGNvbXBvbmVudCwgaHlkcmF0aW9uUm9vdCwgdGltZUJlbmNobWFyayA9ICgpID0+IHt9LCBjYWxsYmFjayA9IG51bGwpXG57XG5cdC8vIE9CU0VSVkVSID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKEludGVyc2VjdGlvbk9ic2VydmVyQ2FsbGJhY2ssIHtcblx0Ly8gXHRyb290OiBoeWRyYXRpb25Sb290LFxuXHQvLyBcdHJvb3RNYXJnaW46ICcwcHgnLFxuXHQvLyBcdHRocmVzaG9sZDogMS4wXG5cdC8vIH0pO1xuXG5cblxuXHQvLyByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHtcblx0Ly8gXHRPQlNFUlZFUi5vYnNlcnZlKGJpbmROb2RlKTtcblxuXHQvLyBcdFNUT1JBR0Vbb3B0c1snaWQnXV0gPSB7XG5cdC8vIFx0XHRvcHRzLFxuXHQvLyBcdFx0Y2hpbGRyZW4sXG5cdC8vIFx0fVxuXHQvLyB9KTtcblx0bG9hZENvbXBvbmVudChjb21wb25lbnQsIChpbnN0YW5jZSkgPT4ge1xuXG5cdFx0dGltZUJlbmNobWFyaygnSHlkcmF0aW9uJyk7XG5cblx0XHRsZXQgdHJlZSA9IFtpbnN0YW5jZV07XG5cblx0XHRTaW51b3VzLmNsZWFySElEKCk7XG5cblx0XHRsZXQgY29ubmVjdGVkTm9kZSA9IGZpbHRlckNoaWxkTm9kZXMoaHlkcmF0aW9uUm9vdCk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGluaXRDb21wb25lbnQodHJlZVtpXSwgY29ubmVjdGVkTm9kZVtpXSk7XG5cdFx0fVxuXG5cdFx0Ly8gY29uc29sZS5sb2coaW5zdGFuY2UpO1xuXHRcdGluc3RhbmNlLmhvb2soJ21vdW50ZWQnKTtcblxuXHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRjYWxsYmFjayhpbnN0YW5jZSk7XG5cdFx0fVxuXG5cdFx0dGltZUJlbmNobWFyaygnSHlkcmF0aW9uJyk7XG5cblx0XHRyZXR1cm4gaW5zdGFuY2U7XG5cdH0pO1xuXG59XG5cbi8qKlxuICogRmlsdGVyIG91dCB3aGl0ZXNwYWNlIHRleHQgbm9kZXMgdW5sZXNzIGl0IGhhcyBhIG5vc2tpcCBpbmRpY2F0b3IuXG4gKlxuICogQHBhcmFtICB7Tm9kZX0gcGFyZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZmlsdGVyQ2hpbGROb2RlcyhwYXJlbnQpIHtcblx0cmV0dXJuIHBhcmVudC5jaGlsZE5vZGVzO1xuXHQvLyBjb25zb2xlLndhcm4ocGFyZW50LCBwYXJlbnQuY2hpbGROb2Rlcyk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LmNoaWxkTm9kZXMpLmZpbHRlcihcbiAgICAgICAgZWwgPT4gZWwubm9kZVR5cGUgIT09IDMgfHwgZWwuZGF0YS50cmltKCkgfHwgZWwuX25vc2tpcFxuICAgICk7XG59XG4iLCJcblx0XHRpbXBvcnQgeyBCYXNpYyB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5cdFx0aW1wb3J0IGNvbXBvbmVudENvbmZpZyBmcm9tIFwiLi9pbmRleC5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XHRcblx0XHRsZXQgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRtZXRob2RzOiB7fSxcblx0XHR9LCBjb21wb25lbnRDb25maWcpO1xuXG5cdFx0bGV0IGluc3RhbmNlID0gZnVuY3Rpb24gUGFnZXNJbmRleCgpIHtcblx0XHRcdEJhc2ljLmNhbGwodGhpcyk7XG5cdFx0fTtcblx0XHRcblx0XHQvLyBpbmhlcml0IEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNpYy5wcm90b3R5cGUpO1xuXG5cdFx0Ly8gY29ycmVjdCB0aGUgY29uc3RydWN0b3IgcG9pbnRlciBiZWNhdXNlIGl0IHBvaW50cyB0byBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGluc3RhbmNlO1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kcyA9IHt9O1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fY29tcG9uZW50TmFtZSA9ICdQYWdlc0luZGV4Jztcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX3Nob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19zbG90cyA9IHt9O1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19yZW5kZXIgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcImRpdlwiLCB7IGlkOiBjdHguZ2V0VUlEKDQpIH0sIFtcbiAgaChcbiAgICBcInRlc3QyXCIsXG4gICAge1xuICAgICAgJHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IFtgcGFzc2VkIHRleHRgLCBgaW4gZGVmYXVsdCBzbG90YF0sXG4gICAgICAgIGZvb3RlcjogW1xuICAgICAgICAgIGgoXCJkaXZcIiwgeyBpZDogY3R4LmdldFVJRCg3KSB9LCBbXG4gICAgICAgICAgICBgc29tZSB0ZXN0IG9mYCxcbiAgICAgICAgICAgIGgoXG4gICAgICAgICAgICAgIFwic3Ryb25nXCIsXG4gICAgICAgICAgICAgIHsgJHNsb3RzOiB7IGRlZmF1bHQ6IFtgY2hpbGRgXSB9LCBpZDogY3R4LmdldFVJRCg4KSB9LFxuICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGBzbG90YCxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBpZDogY3R4LmdldFVJRCg1KSxcbiAgICB9LFxuICAgIFtdXG4gICksXG5dKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcImRpdlwiLCB7IGlkOiBjdHguZ2V0VUlEKDQpIH0sIFtcbiAgaChcbiAgICBcInRlc3QyXCIsXG4gICAge1xuICAgICAgJHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IFstMSwgLTFdLFxuICAgICAgICBmb290ZXI6IFtcbiAgICAgICAgICBoKFwiZGl2XCIsIHsgaWQ6IGN0eC5nZXRVSUQoNykgfSwgW1xuICAgICAgICAgICAgLTEsXG4gICAgICAgICAgICBoKFwic3Ryb25nXCIsIHsgaWQ6IGN0eC5nZXRVSUQoOCkgfSwgW10pLFxuICAgICAgICAgICAgLTEsXG4gICAgICAgICAgXSksXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgaWQ6IGN0eC5nZXRVSUQoNSksXG4gICAgfSxcbiAgICBbXVxuICApLFxuXSk7XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHt9IiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBoeWRyYXRlIH0gZnJvbSAnQHNpbnVvdXMvaHlkcmF0aW9uJztcbmltcG9ydCByZW5kZXIgZnJvbSAnQHNpbnVvdXMvcmVuZGVyJztcbmltcG9ydCB0ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdGVzdC5zaW4nXG5pbXBvcnQgdGVzdDIgZnJvbSAnLi4vY29tcG9uZW50cy90ZXN0Mi5zaW4nXG5pbXBvcnQgSW5kZXhQYWdlIGZyb20gJy4uL3BhZ2VzL2luZGV4LnNpbidcbmltcG9ydCB0aW1lQmVuY2htYXJrIGZyb20gJy4vdGltZSc7XG5cblxuLy8gY29uc3QgSW5kZXhQYWdlID0gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFnZUluZGV4XCIgKi8gJy4uL3BhZ2VzL2luZGV4LnNpbicpXG5cblxudmFyIExBWU9VVDtcbnZhciBQYWdlSW5kZXgsIFBhZ2VJbmRleDI7XG5cbmZ1bmN0aW9uIFRFU1RfV0VCUEFDS19CVUlMRCgpXG57XG5cdHRpbWVCZW5jaG1hcmsoJ1NTUi1CdWlsZCcpO1xuXHRTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KHRlc3QpO1xuXHRTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KHRlc3QyKTtcblx0dGltZUJlbmNobWFyaygnU1NSLUJ1aWxkJyk7XG59XG5cbi8vIGZ1bmN0aW9uIFRFU1RfSU5JVCgpXG4vLyB7XG4vLyBcdHRpbWVCZW5jaG1hcmsoJ1NTUi1Jbml0Jyk7XG4vLyBcdFBhZ2VJbmRleCA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0UGFnZUluZGV4MiA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0dGltZUJlbmNobWFyaygnU1NSLUluaXQnKTtcbi8vIH1cblxuZnVuY3Rpb24gVEVTVF9SRU5ERVIoKVxue1xuXHRyZW5kZXIoSW5kZXhQYWdlLCBMQVlPVVQsIHRpbWVCZW5jaG1hcmssIChjKSA9PiB7XG5cdFx0UGFnZUluZGV4ID0gYztcblx0fSk7XG59XG5cbmZ1bmN0aW9uIENMRUFSX0hPT0tTKClcbntcblx0XG5cdGxldCBodG1sID0gTEFZT1VULmlubmVySFRNTDtcblx0TEFZT1VULmlubmVySFRNTCA9IGh0bWw7XG5cdFBhZ2VJbmRleC5ob29rKCd1bm1vdW50ZWQnKTtcbn1cblxuZnVuY3Rpb24gVEVTVF9IWURSQVRFKClcbntcblx0aHlkcmF0ZShJbmRleFBhZ2UsIExBWU9VVCwgdGltZUJlbmNobWFyayk7XG59XG5cblRFU1RfV0VCUEFDS19CVUlMRCgpO1xuXG4vLyBURVNUX0lOSVQoKTtcblxuLy8gcmV0dXJuO1xuKGZ1bmN0aW9uIGxvYWQoKSB7XG5cdExBWU9VVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXlvdXQnKTtcblxuXG5cdC8vIExBWU9VVC5pbm5lckhUTUwgPSAnJztcblx0Ly8gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG5cdC8vIFRFU1RfSFlEUkFURSgpO1xuXHQvLyByZXR1cm47XG5cblx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG5cdC8vIFx0VEVTVF9SRU5ERVIoKTtcblx0Ly8gfSwgMjAwMClcblxuXHRURVNUX1JFTkRFUigpO1xuXHQvLyBjb25zb2xlLmxvZyhMQVlPVVQuaW5uZXJIVE1MKVxuXHQvLyByZXR1cm5cblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblxuXHRcdENMRUFSX0hPT0tTKCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCBURVNUX0hZRFJBVEUoKTtcblx0XHR9LCAzMDApO1xuXHR9LCAxMDAwKTtcbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgZCA9IDI7IiwibGV0IHRpbWVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUobmFtZSlcbntcblx0bGV0IG5vdyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdGlmKHR5cGVvZiB0aW1lc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aW1lc1tuYW1lXSA9IG5vdztcblx0XHRyZXR1cm4gdGltZXNbbmFtZV07XG5cdH1cblxuXHRjb25zb2xlLmxvZyhgWyB0YiAke25hbWV9IF1gLCBub3cgLSB0aW1lc1tuYW1lXSwgJ21zJyk7XG5cblx0ZGVsZXRlIHRpbWVzW25hbWVdO1xufSJdLCJzb3VyY2VSb290IjoiIn0=