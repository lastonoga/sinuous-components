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
			instance.prototype._methods[key] = config.methods[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h("div", { onclick: ctx._methods.reactive_click, id: ctx.getUID(2) }, [
  () => {
    return `test ${ctx._state.visible()}`;
  },
]);
;
			}
		
			instance.prototype.__hydrate = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h(
  "div",
  { onclick: ctx._methods.reactive_click, id: ctx.getUID(2), _s: true },
  [
    () => {
      return `test ${ctx._state.visible()}`;
    },
  ]
);
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
			instance.prototype._methods[key] = config.methods[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h(
  "div",
  {
    onclick: () => {
      return alert(1);
    },
    dynamicStyle: { paddingTop: ctx._state.s2 },
    id: ctx.getUID(4),
  },
  [
    () => {
      return `test ${ctx._state.s2()}`;
    },
    h("br", {}, []),
    statement(
      ctx._data.visible,
      [
        h("div", { id: ctx.getUID(7) }, [
          () => {
            return `[visible] show ${ctx._data.ddd} - ${ctx._state.s1()}`;
          },
        ]),
        statement(ctx._state.s1, h("span", {}, [`[s1] test`])),
      ],
      ctx._state.s3,
      h("div", {}, [`[s3] test`])
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
    id: ctx.getUID(4),
    _s: true,
  },
  [
    () => {
      return `test ${ctx._state.s2()}`;
    },
    ,
    statement(
      ctx._data.visible,
      [
        h("div", { id: ctx.getUID(7) }, [
          () => {
            return `[visible] show ${ctx._data.ddd} - ${ctx._state.s1()}`;
          },
        ]),
        statement(ctx._state.s1, h("span", {}, [`[s1] test`])),
      ],
      ctx._state.s3,
      h("div", {}, [`[s3] test`])
    ),
    ,
    ,
    ,
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
      this._methods.makeIf();
      this._data.timer1 = setInterval(() => {
        this._methods.makeIf();
      }, 5000);
    },
    unmounted: function () {
      clearInterval(this._data.timer1);
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
    this.hid = null;
    this._props = this.props();
    this._passedProps = {}; // Local data

    this._data = this.data(); // Stateful data

    this._state = this.state(_observable.observable);
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
    for (var key in this._methods) {
      this._methods[key] = this._methods[key].bind(this);
    }

    for (var _key in this._computed) {
      this._computed[_key] = this._computed[_key].bind(this);
    }
  };
  /**
   * Config
   */


  Basic.prototype.setMethods = function (methods) {
    if (methods === void 0) {
      methods = {};
    }

    this._methods = methods;
  };
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
    } // console.log(this);


    if (this._methods[type]) {
      this._methods[type].call(this);
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
      // render: 'render',
      // components: (i) => ctx.childComponents()[i],
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
      // render: 'hydrate',
      // components: (i) => ctx.childComponents()[i],
      statement: _index.statement,
      slot: _index.slot,
      loop: _index.loop,
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
exports.Condition = void 0;

var Condition = /*#__PURE__*/function () {
  function Condition(condition) {
    this.condition = condition;
    this.result_1 = null;
    this.result_2 = null;
  }

  var _proto = Condition.prototype;

  _proto.setFirstResult = function setFirstResult(a) {
    this.result_1 = a;
  };

  _proto.setSecondResult = function setSecondResult(a) {
    this.result_2 = a;
  };

  _proto.check = function check() {
    return this.condition();
  };

  _proto.result = function result() {
    return this.condition() ? this.result_1 : this.result_2;
  };

  return Condition;
}();

exports.Condition = Condition;

function statement(condition) {
  var _arguments = arguments;

  var d = function d() {
    if (_arguments.length % 2 !== 0) {
      throw new Error('Statement should be odd number');
    }

    var result = [];

    for (var i = 0; i < _arguments.length; i += 2) {
      var _condition = _arguments[i];
      var value = _arguments[i + 1];
      var node = document.createComment("statement comment \u2013 " + i);

      if (typeof _condition === 'function') {
        if (_condition()) {
          node = value;
        }
      } else {
        if (_condition) {
          node = value;
        }
      }

      result.push(node);
    } // console.log(result)


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
exports.compiler = compiler;
exports.default = initHydration;

var _sinuous = __webpack_require__(/*! sinuous */ "./node_modules/sinuous/module/sinuous.js");

var _empty = __webpack_require__(/*! @sinuous/compiler/src/empty */ "./packages/compiler/src/empty.js");

var _i = _interopRequireDefault(__webpack_require__(/*! @sinuous/i */ "./packages/i/dist/index.js"));

var _component = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");

var _lazy = __webpack_require__(/*! @sinuous/lazy */ "./packages/lazy/dist/index.js");

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

function hydrateTag(el, value) {
  _sinuous.api.insert(el, value(), null);
}

function hydrateChildren(node, children) {
  // console.log(node.childNodes);
  var bindChildren = filterChildNodes(node);

  for (var i = 0; i < children.length; i++) {
    if (children[i] === _empty._) {
      continue;
    }

    hydrateTag(bindChildren[i], children[i]);
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

  var bindNode = document.getElementById("" + opts['id']);

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
    }

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
			instance.prototype._methods[key] = config.methods[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h("div", { id: ctx.getUID(16) }, [
  h(
    "test2",
    {
      $slots: {
        default: [`passed text`, `in default slot`],
        footer: [
          h("div", { id: ctx.getUID(19) }, [
            `some test of`,
            h(
              "strong",
              { $slots: { default: [`child`] }, id: ctx.getUID(20) },
              []
            ),
            `slot`,
          ]),
        ],
      },
      id: ctx.getUID(17),
    },
    []
  ),
]);
;
			}
		
			instance.prototype.__hydrate = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h("div", { id: ctx.getUID(16) }, [
  h(
    "test2",
    {
      $slots: {
        default: [,],
        footer: [
          h("div", { id: ctx.getUID(19) }, [
            ,
            h("strong", { $slots: { default: [] }, id: ctx.getUID(20) }, []),
          ]),
        ],
      },
      id: ctx.getUID(17),
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

var _hydration = _interopRequireDefault(__webpack_require__(/*! @sinuous/hydration */ "./packages/hydration/dist/index.js"));

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
  (0, _render.default)(_index.default, LAYOUT, _time.default);
}

function CLEAR_HOOKS() {
  var html = LAYOUT.innerHTML;
  LAYOUT.innerHTML = html;
}

function TEST_HYDRATE() {
  (0, _hydration.default)(_index.default, LAYOUT, _time.default, function (c) {
    c.hook('mounted');
  });
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

  return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXN0LnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rlc3Quc2luPzQzODMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXN0Mi5zaW4iLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXN0Mi5zaW4/YjIwOSIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9jb21waWxlci9zcmMvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jhc2ljLmpzIiwid2VicGFjazovLy8uLi9zcmMvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2guanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xvb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uLi9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZhbHVlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnNpbiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4/NDNmZSIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyLXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3QtaW1wb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy90aW1lLmpzIl0sIm5hbWVzIjpbIl8iLCJ5Iiwic2VsZiIsImNsYXNzZXMiLCJvYmoiLCJzdGF0aWNDbGFzc2VzIiwiZHluYW1pYyIsImkiLCJhcmd1bWVudHMiLCJhcmciLCJBcnJheSIsImoiLCJoYW5kbGVDbGFzc09iamVjdCIsImEiLCJ2YWwiLCJzdHlsZXMiLCJjYW1lbFRvUHJvcCIsImhhbmRsZVN0eWxlc09iamVjdCIsIkhJRCIsIkJhc2ljIiwib2JzZXJ2YWJsZSIsImRlZmF1bHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJjaGlsZHJlbiIsInBhcmVudCIsInByb3AiLCJ2YWx1ZSIsInR5cGUiLCJwcm9wcyIsInN0YXRlZnVsIiwiT2JqZWN0IiwiY3R4IiwiaCIsInN0YXRlbWVudCIsImxvb3AiLCJzbG90IiwiZCIsImMiLCJjb21waWxlciIsIlNpbnVvdXMiLCJlbCIsInRhZyIsIkhUTUxUYWdzIiwiY2hpbGQiLCJvcHRzIiwiZHluYW1pY0F0dHJzIiwiY29tcG9uZW50IiwicmVnaXN0ZXJDaGlsZHJlbiIsInJlc3VsdCIsImxvb3BfY29uZGl0aW9uIiwiY29uZGl0aW9uIiwiaXRlbSIsImZuIiwiYmluZGluZyIsInYiLCJtYWtlT2JzZWVydmFibGUiLCJzaG91bGRIYW5kbGUiLCJ3aW5kb3ciLCJuYW1lIiwiY29udGV4dCIsIkNvbmRpdGlvbiIsInNldEZpcnN0UmVzdWx0Iiwic2V0U2Vjb25kUmVzdWx0IiwiY2hlY2siLCJub2RlIiwiZG9jdW1lbnQiLCJTVE9SQUdFIiwiYXBpIiwiYmluZENoaWxkcmVuIiwiZmlsdGVyQ2hpbGROb2RlcyIsImh5ZHJhdGVUYWciLCJiaW5kTm9kZSIsImh5ZHJhdGVQcm9wcyIsImh5ZHJhdGVDaGlsZHJlbiIsImh5ZHJhdGUiLCJpbml0Q29tcG9uZW50IiwiZW50cmllcyIsImlkIiwiZW50cnkiLCJ0aW1lQmVuY2htYXJrIiwiY2FsbGJhY2siLCJ0cmVlIiwiY29ubmVjdGVkTm9kZSIsImluc3RhbmNlIiwiU2ludW91c0NvbXBvbmVudHMiLCJjcmVhdGVISUQiLCJjbGVhckhJRCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiaGFzQ29tcG9uZW50IiwiZ2V0SHlkcmF0ZUNvbXBvbmVudCIsImdldENvbXBvbmVudCIsIm1vZHVsZSIsImxheW91dCIsIkxBWU9VVCIsIlBhZ2VJbmRleCIsIlBhZ2VJbmRleDIiLCJURVNUX1dFQlBBQ0tfQlVJTEQiLCJ0ZXN0IiwidGVzdDIiLCJURVNUX1JFTkRFUiIsIkluZGV4UGFnZSIsIkNMRUFSX0hPT0tTIiwiaHRtbCIsImlubmVySFRNTCIsIlRFU1RfSFlEUkFURSIsImhvb2siLCJsb2FkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRUaW1lb3V0IiwidGltZXMiLCJ0aW1lIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEpBLEVBQTZDO0FBQzdDLEVBQXVEOztBQUV2RDtBQUNBLGNBQWM7QUFDZCxHQUFHLEVBQUUsNkRBQWU7O0FBRXBCO0FBQ0EsR0FBRyx3REFBSztBQUNSOztBQUVBO0FBQ0EscUNBQXFDLHdEQUFLOztBQUUxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsdURBQXVEO0FBQ3JHLHFCQUFxQiwwREFBMEQ7QUFDL0U7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDLHVEQUF1RDtBQUN0RztBQUNBO0FBQ0EsR0FBRyxvRUFBb0U7QUFDdkU7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQWlCLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN4RDFCO0FBQUE7QUFBQTtBQUEwQztBQUMzQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsaUJBQWlCLHFEQUFDO0FBQ2xCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENELEVBQTZDO0FBQzdDLEVBQXdEOztBQUV4RDtBQUNBLGNBQWM7QUFDZCxHQUFHLEVBQUUsOERBQWU7O0FBRXBCO0FBQ0EsR0FBRyx3REFBSztBQUNSOztBQUVBO0FBQ0EscUNBQXFDLHdEQUFLOztBQUUxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhDQUE4Qyx1REFBdUQ7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBLHFDQUFxQyxjQUFjLEtBQUssZ0JBQWdCO0FBQ3hFLFdBQVc7QUFDWDtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsZ0JBQWdCO0FBQ2hCLG9DQUFvQztBQUNwQyxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sOENBQThDLEdBQUc7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUErQyx1REFBdUQ7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBLHFDQUFxQyxjQUFjLEtBQUssZ0JBQWdCO0FBQ3hFLFdBQVc7QUFDWDtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBaUIsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQ25IMUI7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixPQUFPO0FBQ1A7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixPQUFPO0FBQ1A7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xETSxJQUFNQSxDQUFDLEdBQUcsQ0FBQyxDQUFYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDs7Ozs7Ozs7QUFHQSx3QkFDQTtBQUNDLFNBQU8sQ0FBQyxDQUFELHdCQUNtQjtBQUFBLGlCQUFjQyxDQUFDLENBQWYsV0FBY0EsRUFBZDtBQURuQixtQkFBUCxFQUFPLENBQVA7QUFHQTs7QUFFRCx3Q0FBd0M7QUFDcEMsU0FBT0MsSUFBSSxDQUFKQSxtQkFBUDtBQUNIOztBQUVNLGdDQUNQO0FBQ0MsTUFBSUMsT0FBTyxHQUFYOztBQUVBLE9BQUssSUFBTCxZQUFxQjtBQUNwQixRQUFHLG9CQUFNQyxHQUFHLENBQVosR0FBWSxDQUFULENBQUgsRUFBb0I7QUFDbkJELGFBQU8sQ0FBUEE7QUFDQTtBQUNEOztBQUVEO0FBQ0E7O0FBRU0seUNBQ1A7QUFBQTs7QUFBQSxNQUR3QkUsYUFDeEI7QUFEd0JBLGlCQUN4QixHQUR3QyxFQUFoQkE7QUFDeEI7O0FBQUEsTUFENENDLE9BQzVDO0FBRDRDQSxXQUM1QyxHQURzRCxFQUFWQTtBQUM1Qzs7QUFDQyxTQUFPLFlBQU07QUFDWixRQUFJSCxPQUFPLEdBQVg7O0FBRUEsU0FBSyxJQUFJSSxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR0MsVUFBUyxDQUE3QixRQUFzQ0QsQ0FBdEMsSUFBMkM7QUFDMUMsVUFBSUUsR0FBRyxHQUFHRCxVQUFTLENBQW5CLENBQW1CLENBQW5COztBQUVBLFVBQUdFLEtBQUssQ0FBTEEsUUFBSCxHQUFHQSxDQUFILEVBQXVCO0FBQ3RCLGFBQUssSUFBSUMsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUdGLEdBQUcsQ0FBdkIsUUFBZ0NFLENBQWhDLElBQXFDO0FBQ3BDUixpQkFBTyxDQUFQQSxLQUFhLG9CQUFNTSxHQUFHLENBQXRCTixDQUFzQixDQUFULENBQWJBO0FBQ0E7QUFIRixhQUlPLElBQUcsZUFBSCxVQUE0QjtBQUNsQ0EsZUFBTyxHQUFHQSxPQUFPLENBQVBBLE9BQ1RTLGlCQUFpQixDQURsQlQsR0FDa0IsQ0FEUkEsQ0FBVkE7QUFETSxhQUlBLElBQUcsZUFBSCxZQUE4QjtBQUNwQ0EsZUFBTyxHQUFHQSxPQUFPLENBQVBBLE9BQ1RTLGlCQUFpQixDQUFDLG9CQURuQlQsR0FDbUIsQ0FBRCxDQURSQSxDQUFWQTtBQURNLGFBSUE7QUFDTkEsZUFBTyxDQUFQQTtBQUNBO0FBQ0Q7O0FBRURBLFdBQU8sR0FBRyxPQUFPLENBQVAsT0FBZTtBQUFBLGFBQWFVLENBQUMsQ0FBREEsZUFBYjtBQUF6QlYsS0FBVSxDQUFWQTtBQUVBLFdBQU9BLE9BQU8sQ0FBUEEsS0FBUCxHQUFPQSxDQUFQO0FBekJEO0FBMkJBOztBQUVNLHlDQUNQO0FBQ0MsT0FBSyxJQUFMLFlBQXFCO0FBQ3BCLFFBQUlXLEdBQUcsR0FBRyxvQkFBTVYsR0FBRyxDQUFuQixHQUFtQixDQUFULENBQVY7O0FBQ0EsUUFBR1UsR0FBRyxLQUFOLE1BQWlCO0FBQ2hCQyxZQUFNLENBQUNDLFdBQVcsQ0FBbEJELEdBQWtCLENBQVosQ0FBTkE7QUFDQTtBQUNEOztBQUVEO0FBQ0E7O0FBRU0sa0JBQ1A7QUFBQTtBQUNDLFNBQU8sWUFBTTtBQUNaLFFBQUlBLE1BQU0sR0FBVjs7QUFFQSxTQUFLLElBQUlSLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHQyxXQUFTLENBQTdCLFFBQXNDRCxDQUF0QyxJQUEyQztBQUMxQyxVQUFHLE9BQU9DLFdBQVMsQ0FBaEIsQ0FBZ0IsQ0FBaEIsS0FBSCxVQUFxQztBQUNwQ1MsMEJBQWtCLFNBQVNULFdBQVMsQ0FBcENTLENBQW9DLENBQWxCLENBQWxCQTtBQURELGFBRU87QUFDTkEsMEJBQWtCLFNBQVMsb0JBQU1ULFdBQVMsQ0FBMUNTLENBQTBDLENBQWYsQ0FBVCxDQUFsQkE7QUFDQTtBQUNEOztBQUVEO0FBWEQ7QUFhQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZEOztBQUdBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7RUFFQTs7O0FBQ0EsSUFBSUMsR0FBRyxHQUFQOztBQUdBLElBQUlDLEtBQUssR0FBRyxZQUFZO0FBRXZCLG1CQUNBO0FBQ0M7QUFDQTtBQUVBLGtCQUFjLEtBQWQsS0FBYyxFQUFkO0FBQ0Esd0JBTEQsRUFLQyxDQUxELENBT0M7O0FBQ0EsaUJBQWEsS0FSZCxJQVFjLEVBQWIsQ0FSRCxDQVNDOztBQUNBLGtCQUFjLFdBQVdDLFlBQXpCLFVBQWMsQ0FBZDtBQUVBLGtCQUFjO0FBQ2JDLGFBQU8sRUFBRTtBQURJLEtBQWQ7QUFJQSxxQkFBaUIsY0FBY0MsWUFBL0IsUUFBaUIsQ0FBakI7QUFDQSxxQkFqQkQsRUFpQkMsQ0FqQkQsQ0FvQkM7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxTQTFCRCxTQTBCQyxHQTFCRCxDQTRCQzs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFHREgsT0FBSyxDQUFMQSx3QkFBOEIsWUFDOUI7QUFDQyxTQUFJLElBQUosT0FBZSxLQUFmLFVBQThCO0FBQzdCLDJCQUFxQix3QkFBckIsSUFBcUIsQ0FBckI7QUFDQTs7QUFFRCxTQUFJLElBQUosUUFBZSxLQUFmLFdBQStCO0FBQzlCLDZCQUFzQiwwQkFBdEIsSUFBc0IsQ0FBdEI7QUFDQTtBQVJGQTtBQVVBOzs7OztBQUlBQSxPQUFLLENBQUxBLHVCQUE2QixtQkFDN0I7QUFBQSxRQURzQ0ksT0FDdEM7QUFEc0NBLGFBQ3RDLEdBRGdELEVBQVZBO0FBQ3RDOztBQUNDO0FBRkRKO0FBS0E7Ozs7O0FBSUFBLE9BQUssQ0FBTEEsd0JBQThCLG9CQUM5QjtBQUFBLFFBRHVDSyxRQUN2QztBQUR1Q0EsY0FDdkMsR0FEa0QsRUFBWEE7QUFDdkM7O0FBQ0M7QUFGREw7O0FBTUFBLE9BQUssQ0FBTEEsd0JBQThCLGlCQUM5QjtBQUNDO0FBRkRBOztBQU1BQSxPQUFLLENBQUxBLHNCQUE0QixrQkFDNUI7QUFBQSxRQURxQ00sTUFDckM7QUFEcUNBLFlBQ3JDLEdBRDhDLElBQVRBO0FBQ3JDOztBQUNDO0FBRkROO0FBSUE7Ozs7O0FBSUFBLE9BQUssQ0FBTEEsa0JBQXdCLFlBQ3hCO0FBQ0M7QUFGREE7O0FBTUFBLE9BQUssQ0FBTEEsc0JBQTRCLFlBQzVCO0FBQ0MsU0FBSSxJQUFKLE9BQWUsS0FBZixRQUNBO0FBQ0MsVUFBSU8sSUFBSSxHQUFHLFlBQVgsR0FBVyxDQUFYO0FBQ0EsVUFBSUMsS0FBSyxHQUFUO0FBQ0EsVUFBSUMsSUFBSSxHQUFSOztBQUVBLFVBQUcsZ0JBQUgsWUFBK0IsQ0FDOUI7QUFERCxhQUVPO0FBQ05ELGFBQUssR0FBR0QsSUFBSSxDQUFaQyxPQUFRRCxFQUFSQztBQUNBOztBQUVEO0FBQ0E7QUFmRlI7O0FBbUJBQSxPQUFLLENBQUxBLHNCQUE0Qix1QkFDNUI7QUFDQztBQUZEQTs7QUFNQUEsT0FBSyxDQUFMQSxzQkFBNEIsaUJBQzVCO0FBQ0M7QUFDQTtBQUNBO0FBRUEsU0FBSSxJQUFKLGNBQ0E7QUFDQyxVQUFHVSxLQUFLLENBQUxBLEdBQUssQ0FBTEEsQ0FBSCxhQUEyQjtBQUMxQjtBQUNBOztBQUVELHdCQUFrQkEsS0FBSyxDQUx4QixHQUt3QixDQUF2QixDQUxELENBTUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJGVjtBQXFCQTs7Ozs7QUFLQUEsT0FBSyxDQUFMQSw2QkFBbUMsWUFDbkM7QUFDQyxRQUFJVyxRQUFRLEdBQVo7O0FBRUEsU0FBSSxJQUFKLE9BQWUsS0FBZixjQUFrQztBQUNqQyxXQUFJLElBQUosT0FBZSxrQkFBZixHQUFlLENBQWYsRUFBdUM7QUFDdEMsWUFBRyx1QkFBSCxHQUFHLENBQUgsRUFBZ0M7QUFDL0JBLGtCQUFRLEdBQVJBO0FBQ0E7QUFDQTtBQUNEOztBQUVELG9CQUFhO0FBQ1o7QUFDQTtBQUNEOztBQUVELFdBQU9BLFFBQVEsSUFBSSxLQUFuQjtBQWpCRFg7O0FBcUJBQSxPQUFLLENBQUxBLDZCQUFtQyxZQUNuQztBQUNDLFdBQU9ZLE1BQU0sQ0FBTkEsS0FBWSxLQUFaQSxnQkFBUDtBQUZEWjtBQUtBOzs7OztBQUlBQSxPQUFLLENBQUxBLGlCQUF1QixZQUN2QjtBQUNDO0FBRkRBOztBQU1BQSxPQUFLLENBQUxBLHFCQUEyQixZQUMzQjtBQUNDO0FBRkRBO0FBS0E7Ozs7O0FBSUFBLE9BQUssQ0FBTEEsa0JBQXdCLGFBQ3hCO0FBQ0M7QUFGREE7QUFLQTs7Ozs7OztBQU1BQSxPQUFLLENBQUxBLHFCQUEyQixZQUFXLENBQXRDQTs7QUFFQUEsT0FBSyxDQUFMQSw0QkFBa0MsWUFBVyxDQUE3Q0E7QUFFQTs7Ozs7O0FBS0FBLE9BQUssQ0FBTEEsaUJBQXVCLGdCQUN2QjtBQUFBLFFBRGdDUyxJQUNoQztBQURnQ0EsVUFDaEMsR0FEdUMsU0FBUEE7QUFDaEMsTUFDQzs7O0FBQ0EsUUFBRyxjQUFILElBQUcsQ0FBSCxFQUF3QjtBQUN2QjtBQUNBOztBQUVELFNBQUssSUFBSXJCLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHLGVBQXBCLFFBQTJDQSxDQUEzQyxJQUFnRDtBQUMvQztBQUNBO0FBVEZZOztBQWFBQSxPQUFLLENBQUxBLG9CQUEwQixZQUFXLENBQXJDQTs7QUFFQUEsT0FBSyxDQUFMQSxzQkFBNEIsWUFBVyxDQUF2Q0E7QUFFQTs7Ozs7O0FBS0FBLE9BQUssQ0FBTEEsbUJBQXlCLGVBQ3pCO0FBQUEsUUFEa0NhLEdBQ2xDO0FBRGtDQSxTQUNsQyxHQUR3QyxJQUFOQTtBQUNsQzs7QUFDQyxRQUFHQSxHQUFHLEtBQU4sTUFBaUI7QUFDaEJBLFNBQUcsR0FBSEE7QUFDQTs7QUFFREM7O0FBRUEsV0FBTyxHQUFHLENBQUgsU0FBYUEsU0FBYixHQUFhQSxDQUFiLEVBQTBCO0FBQ2hDRCxTQUFHLEVBRDZCO0FBRWhDO0FBQ0E7QUFDQUUsZUFBUyxFQUFUQSxPQUpnQztBQUtoQ0MsVUFBSSxFQUFKQSxPQUxnQztBQU1oQ0MsVUFBSSxFQUFKQSxPQU5nQztBQU9oQ0MsT0FBQyxFQUFFL0IsT0FQNkI7QUFRaENnQyxPQUFDLEVBQUVoQjtBQVI2QixLQUExQixDQUFQO0FBUkRIOztBQXFCQUEsT0FBSyxDQUFMQSxvQkFBMEIseUJBQzFCO0FBQUEsUUFEbUNhLEdBQ25DO0FBRG1DQSxTQUNuQyxHQUR5QyxJQUFOQTtBQUNuQzs7QUFBQSxRQUQrQ08sUUFDL0M7QUFEK0NBLGNBQy9DLEdBRDBELElBQVhBO0FBQy9DOztBQUNDLFFBQUdQLEdBQUcsS0FBTixNQUFpQjtBQUNoQkEsU0FBRyxHQUFIQTtBQUNBOztBQUVELFdBQU8sR0FBRyxDQUFILG9CQUF3QjtBQUM5QkEsU0FBRyxFQUQyQjtBQUU5QjtBQUNBO0FBQ0FFLGVBQVMsRUFBVEEsT0FKOEI7QUFLOUJFLFVBQUksRUFBSkEsT0FMOEI7QUFNOUJELFVBQUksRUFBSkEsT0FOOEI7QUFPOUJFLE9BQUMsRUFBRS9CLE9BUDJCO0FBUTlCZ0MsT0FBQyxFQUFFaEI7QUFSMkIsS0FBeEIsQ0FBUDtBQU5ESDs7QUFtQkFBLE9BQUssQ0FBTEEscUJBQTJCLFlBQzNCO0FBQ0M7QUE3UXNCLEdBMlF2QkEsQ0EzUXVCLENBaVJ2QjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0FBLE9BQUssQ0FBTEEsc0JBQTRCLFlBQzVCO0FBQ0M7QUFGREE7O0FBS0FBLE9BQUssQ0FBTEEsbUJBQXlCLGlCQUFnQjtBQUN4QyxxQkFBZ0JxQixxQkFBaEIsS0FBZ0JBLENBQWhCO0FBRERyQjs7QUFJQUEsT0FBSyxDQUFMQSxtQ0FBeUMsWUFBVztBQUFFLFdBQU8saUJBQVA7QUFBdERBOztBQUVBO0FBbFNELENBQVksRUFBWjs7ZUFxU2VBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblRmOztBQUVlLHlDQUNmO0FBQ0MsU0FBTyxZQUFNO0FBQ1osUUFBSXNCLEVBQUUsR0FBR0MsR0FBVDtBQUNBLFdBQU9ULENBQUMsV0FBUixRQUFRLENBQVI7QUFGRDtBQUtBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNURDs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJVSxRQUFRLEdBQUcsMkNBQWYsS0FBZSxDQUFmOztBQUtBLHlDQUNBO0FBQ0NsQixRQUFNLENBQU5BO0FBQ0FtQixPQUFLLENBQUxBO0FBQ0E7O0FBRWMsK0JBQ2Y7QUFBQSxNQUQ4QkMsSUFDOUI7QUFEOEJBLFFBQzlCLEdBRHFDLEVBQVBBO0FBQzlCOztBQUFBLE1BRHlDckIsUUFDekM7QUFEeUNBLFlBQ3pDLEdBRG9ELEVBQVhBO0FBQ3pDOztBQUNDaUIsSUFBRSxHQUFHQSxFQUFFLENBRFIsV0FDTUEsRUFBTEEsQ0FERCxDQUVDO0FBRUE7O0FBQ0EsTUFBSUssWUFBWSxHQUFoQjtBQUVBLHVCQVBELElBT0MsRUFQRCxDQVNDOztBQUNBLE1BQUdILFFBQVEsQ0FBUkEsU0FBSCxFQUFHQSxDQUFILEVBQTBCO0FBQ3pCLFdBQU8sMEJBQVAsUUFBTyxDQUFQO0FBQ0E7O0FBRUQsTUFBSUksU0FBUyxHQUFHUCx3QkFkakIsRUFjaUJBLENBQWhCLENBZEQsQ0FnQkM7OztBQUVBLE1BQUcsT0FBT0ssSUFBSSxDQUFYLFVBQUgsYUFBc0M7QUFDckNFLGFBQVMsQ0FBVEEsVUFBb0JGLElBQUksQ0FBeEJFO0FBQ0E7O0FBRUQsT0FBSSxJQUFKLE9BQWVGLElBQUksQ0FBbkIsUUFBNEI7QUFDM0JFLGFBQVMsQ0FBVEEsZUFBeUJGLElBQUksQ0FBSkEsT0FBekJFLEdBQXlCRixDQUF6QkU7QUFDQTs7QUFFREMsa0JBQWdCLE9BQWhCQSxTQUFnQixDQUFoQkE7QUFFQSxTQUFPRCxTQUFTLENBQWhCLE1BQU9BLEVBQVA7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0Q7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZSw2QkFDZjtBQUNDLE1BQUlWLENBQUMsR0FBRyxTQUFKQSxDQUFJLEdBQU07QUFFYixRQUFJWSxNQUFNLEdBQVY7QUFFQSxRQUFJQyxjQUFjLEdBQUcsa0NBQWtDQyxTQUFsQyxLQUFyQjs7QUFFQSxTQUFJLElBQUosdUJBQ0E7QUFDQyxVQUFJQyxJQUFJLEdBQUdGLGNBQWMsQ0FBekIsR0FBeUIsQ0FBekI7QUFDQUQsWUFBTSxDQUFOQSxLQUFZSSxFQUFFLE9BQWRKLEdBQWMsQ0FBZEE7QUFDQTs7QUFFRDtBQVpEOztBQWVBWixHQUFDLENBQURBLGNBaEJELElBZ0JDQSxDQWhCRCxDQWlCQzs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCRDs7QUFFTyw2QkFDUDtBQUNDZ0IsSUFBRSxDQUFGQTtBQUNBO0FBQ0E7O0FBRU0sOEJBQXNDO0FBQUEsTUFBakJDLE9BQWlCO0FBQWpCQSxXQUFpQixHQUFQLEtBQVZBO0FBQWlCOztBQUU1Qzs7QUFFQSxlQUFZO0FBQ1hqQixLQUFDLEdBQUcsMEJBQWdCa0IsQ0FBQyxDQUFEQSxLQUFwQmxCLElBQW9Ca0IsQ0FBaEIsQ0FBSmxCO0FBREQsU0FFTztBQUNOQSxLQUFDLEdBQUcsMEJBQUpBLENBQUksQ0FBSkE7QUFDQTs7QUFFRG1CLGlCQUFlLENBQWZBLENBQWUsQ0FBZkE7QUFFQTtBQUNBOztBQUVNLGdDQUNQO0FBQUEsTUFEOEJGLE9BQzlCO0FBRDhCQSxXQUM5QixHQUR3QyxLQUFWQTtBQUM5Qjs7QUFDQyxNQUFJakIsQ0FBQyxHQUFHLDRCQUFSLENBQVEsQ0FBUjtBQUdBbUIsaUJBQWUsQ0FBZkEsQ0FBZSxDQUFmQTtBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CRDs7QUFFZSxnQ0FDZjtBQUNDLE1BQUlDLFlBQVksR0FBRztBQUNsQjFDLFVBQU0sRUFBRTtBQURVLEdBQW5COztBQUlBLE1BQUcsQ0FBQzhCLElBQUksQ0FBUixhQUFzQjtBQUNyQkEsUUFBSSxDQUFKQTtBQURELFNBRU87QUFDTlksZ0JBQVksQ0FBWkE7QUFDQTs7QUFFRCxNQUFHLENBQUNaLElBQUksQ0FBUixjQUF1QjtBQUN0QkEsUUFBSSxDQUFKQTtBQURELFNBRU87QUFDTlksZ0JBQVksQ0FBWkE7QUFDQTs7QUFFRCxNQUFHQSxZQUFZLENBQWYsUUFBd0I7QUFDdkJaLFFBQUksQ0FBSkEsUUFBYTlCLHdCQUFzQixDQUFDOEIsSUFBSSxDQUFMLG9CQUEwQkEsSUFBSSxDQUFqRUEsWUFBbUMsQ0FBdEI5QixDQUFiOEI7QUFsQkYsSUFxQkM7O0FBQ0E7Ozs7O0FBR0EsTUFBRyxDQUFDWSxZQUFZLENBQWhCLFFBQXlCO0FBQ3hCLFdBQU9aLElBQUksQ0FBWDtBQUNBLFdBQU9BLElBQUksQ0FBWDtBQUNBOztBQUVEO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENEYSxNQUFNLENBQU5BOztBQUVlLG1DQUNmO0FBQUEsTUFEdUNYLFNBQ3ZDO0FBRHVDQSxhQUN2QyxHQURtRCxJQUFaQTtBQUN2Qzs7QUFDQyxNQUFHQSxTQUFTLElBQVosTUFBc0I7QUFDckJBLGFBQVMsR0FBVEE7QUFDQVksUUFBSSxHQUFHQSxJQUFJLENBQVhBO0FBQ0E7O0FBRURBLE1BQUksR0FBR0EsSUFBSSxDQUFYQSxXQUFPQSxFQUFQQTtBQUVBRCxRQUFNLENBQU5BO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pjLCtEQUNmO0FBQ0M7QUFFQSxNQUFJbEMsUUFBUSxHQUFaOztBQUVBLE1BQUdvQyxPQUFPLENBQVBBLE9BQUgsSUFBR0EsQ0FBSCxFQUF5QjtBQUN4QnBDLFlBQVEsR0FBR29DLE9BQU8sQ0FBUEEsT0FBWHBDLElBQVdvQyxDQUFYcEM7QUFDQTs7QUFFRCxNQUFHa0IsR0FBRyxLQUFOLE1BQWlCO0FBQ2hCO0FBQ0E7O0FBRUQsU0FBT1QsQ0FBQyxlQUFSLFFBQVEsQ0FBUjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDZlk0QixTO0FBR1osZ0NBQ0E7QUFDQztBQUNBO0FBQ0E7QUFDQTs7OztTQUVEQyxjLEdBQUFBLDJCQUNBO0FBQ0M7OztTQUdEQyxlLEdBQUFBLDRCQUNBO0FBQ0M7OztTQUdEQyxLLEdBQUFBLGlCQUNBO0FBQ0MsV0FBTyxLQUFQLFNBQU8sRUFBUDs7O1NBR0RmLE0sR0FBQUEsa0JBQ0E7QUFDQyxXQUFPLG1CQUFtQixLQUFuQixXQUFtQyxLQUExQzs7Ozs7Ozs7QUFNYSw4QkFDZjtBQUFBOztBQUNDLE1BQUlaLENBQUMsR0FBRyxTQUFKQSxDQUFJLEdBQU07QUFFYixRQUFHN0IsVUFBUyxDQUFUQSxlQUFILEdBQStCO0FBQzlCLFlBQU0sVUFBTixnQ0FBTSxDQUFOO0FBQ0E7O0FBRUQsUUFBSXlDLE1BQU0sR0FBVjs7QUFFQSxTQUFLLElBQUkxQyxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR0MsVUFBUyxDQUE3QixRQUFzQ0QsQ0FBQyxJQUF2QyxHQUE4QztBQUM3QyxVQUFJNEMsVUFBUyxHQUFHM0MsVUFBUyxDQUF6QixDQUF5QixDQUF6QjtBQUNBLFVBQUltQixLQUFLLEdBQUduQixVQUFTLENBQUNELENBQUMsR0FBdkIsQ0FBcUIsQ0FBckI7QUFDQSxVQUFJMEQsSUFBSSxHQUFHQyxRQUFRLENBQVJBLDRDQUFYLENBQVdBLENBQVg7O0FBRUEsVUFBRyxzQkFBSCxZQUFvQztBQUNuQyxZQUFHZixVQUFILElBQWdCO0FBQ2ZjLGNBQUksR0FBSkE7QUFDQTtBQUhGLGFBSU87QUFDTix3QkFBYztBQUNiQSxjQUFJLEdBQUpBO0FBQ0E7QUFDRDs7QUFFRGhCLFlBQU0sQ0FBTkE7QUF2QlksTUEwQmI7OztBQUVBO0FBNUJEOztBQStCQVosR0FBQyxDQUFEQTtBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFYyxzQkFDZjtBQUNDLE1BQUcsaUJBQUgsWUFBZ0M7QUFDL0IsV0FBT1YsS0FBUDtBQUNBOztBQUVEO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QVBQRDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBLElBQUl3QyxPQUFPLEdBQVg7O0FBRUEsZ0NBQ0E7QUFDQyxNQUFHLENBQUN0QixJQUFJLENBQVIsSUFBYTtBQUNaO0FBQ0E7O0FBRUR1QjtBQUNBOztBQUVELCtCQUNBO0FBQ0NBLDBCQUFlekMsS0FBZnlDO0FBQ0E7O0FBRUQseUNBQ0E7QUFDQztBQUNBLE1BQUlDLFlBQVksR0FBR0MsZ0JBQWdCLENBQW5DLElBQW1DLENBQW5DOztBQUVBLE9BQUssSUFBSS9ELENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHaUIsUUFBUSxDQUE1QixRQUFxQ2pCLENBQXJDLElBQTBDO0FBQ3pDLFFBQUdpQixRQUFRLENBQVJBLENBQVEsQ0FBUkEsS0FBZ0J4QixPQUFuQixHQUFzQjtBQUNyQjtBQUNBOztBQUVEdUUsY0FBVSxDQUFDRixZQUFZLENBQWIsQ0FBYSxDQUFiLEVBQWtCN0MsUUFBUSxDQUFwQytDLENBQW9DLENBQTFCLENBQVZBO0FBQ0E7QUFDRDs7QUFFRCxxQ0FDQTtBQUFBLE1BRHFCMUIsSUFDckI7QUFEcUJBLFFBQ3JCLEdBRDRCLEVBQVBBO0FBQ3JCOztBQUFBLE1BRGdDckIsUUFDaEM7QUFEZ0NBLFlBQ2hDLEdBRDJDLEVBQVhBO0FBQ2hDOztBQUNDLE1BQUcsQ0FBQ3FCLElBQUksQ0FBUixJQUFRLENBQVIsRUFBZ0I7QUFDZjtBQUNBOztBQUVELE1BQUkyQixRQUFRLEdBQUdOLFFBQVEsQ0FBUkEsb0JBQTRCckIsSUFBSSxDQUEvQyxJQUErQyxDQUFoQ3FCLENBQWY7O0FBRUFFLHlCQUFjLFlBQU07QUFDbkJLLGdCQUFZLFdBQVpBLElBQVksQ0FBWkE7QUFDQUMsbUJBQWUsV0FBZkEsUUFBZSxDQUFmQTtBQUZETjtBQUlBOztBQUVELHlDQUNBO0FBQ0MzQyxRQUFNLENBQU5BO0FBQ0FtQixPQUFLLENBQUxBO0FBQ0E7O0FBRU0sc0NBQ1A7QUFBQSxNQUQ2QkMsSUFDN0I7QUFENkJBLFFBQzdCLEdBRG9DLEVBQVBBO0FBQzdCOztBQUFBLE1BRHdDckIsUUFDeEM7QUFEd0NBLFlBQ3hDLEdBRG1ELEVBQVhBO0FBQ3hDOztBQUNDOztBQUVBLE1BQUcsQ0FBQ2dCLHdCQUFKLEVBQUlBLENBQUosRUFBOEI7QUFDN0JtQyxXQUFPLENBQVBBO0FBQ0EsV0FBTzNFLE9BQVA7QUFDQTs7QUFFRCxNQUFJK0MsU0FBUyxHQUFHUCwrQkFBaEIsRUFBZ0JBLENBQWhCOztBQUVBLE1BQUdPLFNBQVMsS0FBWixNQUF1QjtBQUN0QixXQUFPL0MsT0FBUDtBQVhGLElBYUM7OztBQUNBLE1BQUcsT0FBTzZDLElBQUksQ0FBWCxVQUFILGFBQXNDO0FBQ3JDRSxhQUFTLENBQVRBLFVBQW9CRixJQUFJLENBQXhCRTtBQUNBOztBQUVEQSxXQUFTLENBQVRBO0FBRUFDLGtCQUFnQixPQUFoQkEsU0FBZ0IsQ0FBaEJBO0FBRUEsU0FBTzRCLGFBQWEsQ0FBcEIsU0FBb0IsQ0FBcEI7QUFDQTs7QUFFRCxrQ0FDQTtBQUNDN0IsV0FBUyxDQUFUQSxtQkFBNkJSLFFBQVEsQ0FBUkEsS0FBN0JRLFNBQTZCUixDQUE3QlE7QUFFQSxTQUFPL0MsT0FBUDtBQUNBOztBQUVELHlEQUNBO0FBQ0M2RSxTQUFPLENBQVBBLFFBQWdCLGlCQUFTO0FBQ3hCLFFBQUlDLEVBQUUsR0FBR0MsS0FBSyxDQUFMQSxPQURlLEVBQ3hCLENBRHdCLENBRXhCOztBQUNBWCwyQkFBYyxZQUFNO0FBQ25CSyxrQkFBWSxDQUFDTSxLQUFLLENBQU4sUUFBZVosT0FBTyxDQUFQQSxFQUFPLENBQVBBLENBQTNCTSxJQUFZLENBQVpBO0FBQ0FDLHFCQUFlLENBQUNLLEtBQUssQ0FBTixRQUFlWixPQUFPLENBQVBBLEVBQU8sQ0FBUEEsQ0FBOUJPLFFBQWUsQ0FBZkE7QUFGRE47QUFIRFM7QUFRQTs7QUFFYywwRUFDZjtBQUFBLE1BRGdFRyxhQUNoRTtBQURnRUEsaUJBQ2hFLEdBRGdGLHlCQUFNLENBQ3RGLENBRGdFQTtBQUNoRTs7QUFBQSxNQUQwRkMsUUFDMUY7QUFEMEZBLFlBQzFGLEdBRHFHLElBQVhBO0FBQzFGLElBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxzQ0FBeUIsb0JBQWM7QUFFdENELGlCQUFhLENBQWJBLFdBQWEsQ0FBYkE7QUFFQSxRQUFJRSxJQUFJLEdBQUcsQ0FBWCxRQUFXLENBQVg7O0FBRUExQzs7QUFFQSxRQUFJMkMsYUFBYSxHQUFHYixnQkFBZ0IsQ0FBcEMsYUFBb0MsQ0FBcEM7O0FBRUEsU0FBSyxJQUFJL0QsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUcyRSxJQUFJLENBQXhCLFFBQWlDM0UsQ0FBakMsSUFBc0M7QUFDckNxRSxtQkFBYSxDQUFDTSxJQUFJLENBQUwsQ0FBSyxDQUFMLEVBQVVDLGFBQWEsQ0FBcENQLENBQW9DLENBQXZCLENBQWJBO0FBQ0E7O0FBRURRLFlBQVEsQ0FBUkE7O0FBRUEsa0JBQWE7QUFDWkgsY0FBUSxDQUFSQSxRQUFRLENBQVJBO0FBQ0E7O0FBRURELGlCQUFhLENBQWJBLFdBQWEsQ0FBYkE7QUFFQTtBQXRCRDtBQXlCQTtBQUVEOzs7Ozs7OztBQU1BLGtDQUFrQztBQUNqQyxTQUFPdkQsTUFBTSxDQURvQixVQUNqQyxDQURpQyxDQUVqQzs7QUFDRyxTQUFPLEtBQUssQ0FBTCxLQUFXQSxNQUFNLENBQWpCLG1CQUNILGNBQUU7QUFBQSxXQUFJZ0IsRUFBRSxDQUFGQSxrQkFBcUJBLEVBQUUsQ0FBRkEsS0FBckJBLElBQXFCQSxFQUFyQkEsSUFBdUNBLEVBQUUsQ0FBN0M7QUFETixHQUFPLENBQVA7QUFHSCxDOzs7Ozs7Ozs7Ozs7Ozs7OzswQkEvSkQ7O0FBQ0EsSUFBSTRDLGlCQUFpQixHQUFyQjs7SUFFTTdDLE87QUFHTCxxQkFDQTtBQUNDO0FBQ0E7QUFDQTtBQUVEOzs7Ozs7O1NBR0E4QyxTLEdBQUFBLDBCQUNBO0FBQ0Msb0JBQWdCLG9CQUFoQjtBQUNBLFdBQU8sS0FBUDs7O1NBR0RDLFEsR0FBQUEsb0JBQ0E7QUFDQztBQUNBO0FBQ0Q7Ozs7OztTQUlBQyxpQixHQUFBQSw0Q0FDQTtBQUFBLFFBRHdCekMsU0FDeEI7QUFEd0JBLGVBQ3hCLEdBRG9DLElBQVpBO0FBQ3hCOztBQUNDLFFBQUdBLFNBQVMsSUFBWixNQUFzQjtBQUNyQkEsZUFBUyxHQUFUQTtBQUNBOztBQUVEWSxRQUFJLEdBQUdaLFNBQVMsQ0FBVEEseUJBQVBZLFdBQU9aLEVBQVBZO0FBRUE7OztTQUdEOEIsWSxHQUFBQSxpQ0FDQTtBQUNDLFdBQU8sRUFBRSxPQUFPLGdCQUFQLFNBQU8sQ0FBUCxLQUFULFdBQU8sQ0FBUDs7O1NBR0RDLG1CLEdBQUFBLHdDQUNBO0FBQ0MsUUFBRyxDQUFDLGtCQUFKLFNBQUksQ0FBSixFQUFrQztBQUNqQyxZQUFNLHVDQUFOLHVCQUFNLENBQU47QUFDQTs7QUFFRCxRQUFHLHFDQUFILGlCQUF5RDtBQUN4RCxhQUFPLElBQUksZ0JBQVgsU0FBVyxDQUFKLEVBQVA7QUFERCxXQUVPO0FBQ047QUFDQTs7O1NBR0ZDLFksR0FBQUEsaUNBQ0E7QUFDQyxRQUFHLENBQUMsa0JBQUosU0FBSSxDQUFKLEVBQWtDO0FBQ2pDLFlBQU0sdUNBQU4sdUJBQU0sQ0FBTjtBQUNBOztBQUVELFdBQU8sSUFBSSxnQkFBWCxTQUFXLENBQUosRUFBUDs7Ozs7O2VBS2EsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBckVSLDRDQUNQO0FBQ0MsTUFBRzVDLFNBQVMsWUFBWixTQUFpQztBQUNoQ0EsYUFBUyxDQUFUQSxLQUFlLGtCQUFZO0FBQzFCa0MsY0FBUSxDQUFDLElBQUlXLE1BQU0sQ0FBbkJYLE9BQVMsRUFBRCxDQUFSQTtBQUREbEM7QUFERCxTQUlPO0FBQ05rQyxZQUFRLENBQUMsSUFBVEEsU0FBUyxFQUFELENBQVJBO0FBQ0E7QUFFRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVkQ7O0FBR2UsOERBQXVFO0FBQUEsTUFBM0NELGFBQTJDO0FBQTNDQSxpQkFBMkMsR0FBM0IseUJBQU0sQ0FBcUIsQ0FBM0NBO0FBQTJDOztBQUFBLE1BQWpCQyxRQUFpQjtBQUFqQkEsWUFBaUIsR0FBTixJQUFYQTtBQUFpQjs7QUFFbEZZLFFBQU0sQ0FBTkE7QUFFQSxzQ0FBeUIsb0JBQWM7QUFFdENiLGlCQUFhLENBQWJBLFFBQWEsQ0FBYkE7QUFFSGEsVUFBTSxDQUFOQSxPQUFjVCxRQUFRLENBQXRCUyxNQUFjVCxFQUFkUztBQUNBVCxZQUFRLENBQVJBOztBQUVBLGtCQUFhO0FBQ1pILGNBQVEsQ0FBUkEsUUFBUSxDQUFSQTtBQUNBOztBQUVERCxpQkFBYSxDQUFiQSxRQUFhLENBQWJBO0FBRUE7QUFiRTtBQWVILEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FRckJELEVBQTZDO0FBQzdDLEVBQXdEOztBQUV4RDtBQUNBLGNBQWM7QUFDZCxHQUFHLEVBQUUsOERBQWU7O0FBRXBCO0FBQ0EsR0FBRyx3REFBSztBQUNSOztBQUVBO0FBQ0EscUNBQXFDLHdEQUFLOztBQUUxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsdURBQXVEO0FBQ3JHLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVUscUJBQXFCLHNCQUFzQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDLHVEQUF1RDtBQUN0RyxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQSx5QkFBeUIsVUFBVSxjQUFjLHNCQUFzQjtBQUN2RTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBaUIsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQ25GMUI7QUFBZSxpRTs7Ozs7Ozs7Ozs7Ozs7QUNBZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUdBO0FBR0EsSUFBSWMsTUFBSjtBQUNBLElBQUlDLFNBQUosRUFBZUMsVUFBZjs7QUFFQSxTQUFTQyxrQkFBVCxHQUNBO0FBQ0MscUJBQWMsV0FBZDs7QUFDQXpELGFBQVFnRCxpQkFBUixDQUEwQlUsYUFBMUI7O0FBQ0ExRCxhQUFRZ0QsaUJBQVIsQ0FBMEJXLGNBQTFCOztBQUNBLHFCQUFjLFdBQWQ7QUFDQSxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNDLFdBQVQsR0FDQTtBQUNDLHVCQUFPQyxjQUFQLEVBQWtCUCxNQUFsQixFQUEwQmQsYUFBMUI7QUFDQTs7QUFFRCxTQUFTc0IsV0FBVCxHQUNBO0FBRUMsTUFBSUMsSUFBSSxHQUFHVCxNQUFNLENBQUNVLFNBQWxCO0FBQ0FWLFFBQU0sQ0FBQ1UsU0FBUCxHQUFtQkQsSUFBbkI7QUFDQTs7QUFFRCxTQUFTRSxZQUFULEdBQ0E7QUFDQywwQkFBVUosY0FBVixFQUFxQlAsTUFBckIsRUFBNkJkLGFBQTdCLEVBQTRDLFVBQUMxQyxDQUFELEVBQU87QUFDbERBLEtBQUMsQ0FBQ29FLElBQUYsQ0FBTyxTQUFQO0FBQ0EsR0FGRDtBQUdBOztBQUVEVCxrQkFBa0IsRyxDQUVsQjtBQUVBOztBQUNBLENBQUMsU0FBU1UsSUFBVCxHQUFnQjtBQUNoQmIsUUFBTSxHQUFHNUIsUUFBUSxDQUFDMEMsY0FBVCxDQUF3QixRQUF4QixDQUFULENBRGdCLENBSWhCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBUixhQUFXLEdBYkssQ0FjaEI7O0FBQ0E7QUFFQVMsWUFBVSxDQUFDLFlBQU07QUFFaEJQLGVBQVc7QUFFWE8sY0FBVSxDQUFDLFlBQU07QUFDZkosa0JBQVk7QUFDYixLQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0EsR0FQUyxFQU9QLElBUE8sQ0FBVjtBQVFBLENBekJELEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZETyxJQUFNcEUsQ0FBQyxHQUFHLENBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUCxJQUFJeUUsS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBU0MsSUFBVCxDQUFjcEQsSUFBZCxFQUNmO0FBQ0MsTUFBSXFELEdBQUcsR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0osS0FBSyxDQUFDbkQsSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDbUQsU0FBSyxDQUFDbkQsSUFBRCxDQUFMLEdBQWNxRCxHQUFkO0FBQ0EsV0FBT0YsS0FBSyxDQUFDbkQsSUFBRCxDQUFaO0FBQ0E7O0FBRUR3RCxTQUFPLENBQUNDLEdBQVIsV0FBb0J6RCxJQUFwQixTQUE4QnFELEdBQUcsR0FBR0YsS0FBSyxDQUFDbkQsSUFBRCxDQUF6QyxFQUFpRCxJQUFqRDtBQUVBLFNBQU9tRCxLQUFLLENBQUNuRCxJQUFELENBQVo7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXHRcdGltcG9ydCBjb21wb25lbnRDb25maWcgZnJvbSBcIi4vdGVzdC5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XHRcblx0XHRsZXQgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRtZXRob2RzOiB7fSxcblx0XHR9LCBjb21wb25lbnRDb25maWcpO1xuXG5cdFx0bGV0IGluc3RhbmNlID0gZnVuY3Rpb24gVGVzdCgpIHtcblx0XHRcdEJhc2ljLmNhbGwodGhpcyk7XG5cdFx0fTtcblx0XHRcblx0XHQvLyBpbmhlcml0IEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNpYy5wcm90b3R5cGUpO1xuXG5cdFx0Ly8gY29ycmVjdCB0aGUgY29uc3RydWN0b3IgcG9pbnRlciBiZWNhdXNlIGl0IHBvaW50cyB0byBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGluc3RhbmNlO1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kcyA9IHt9O1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fY29tcG9uZW50TmFtZSA9ICdUZXN0Jztcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX3Nob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19zbG90cyA9IHt9O1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kc1trZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19yZW5kZXIgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcImRpdlwiLCB7IG9uY2xpY2s6IGN0eC5fbWV0aG9kcy5yZWFjdGl2ZV9jbGljaywgaWQ6IGN0eC5nZXRVSUQoMikgfSwgW1xuICAoKSA9PiB7XG4gICAgcmV0dXJuIGB0ZXN0ICR7Y3R4Ll9zdGF0ZS52aXNpYmxlKCl9YDtcbiAgfSxcbl0pO1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9faHlkcmF0ZSA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCwgZCwgYyB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFxuICBcImRpdlwiLFxuICB7IG9uY2xpY2s6IGN0eC5fbWV0aG9kcy5yZWFjdGl2ZV9jbGljaywgaWQ6IGN0eC5nZXRVSUQoMiksIF9zOiB0cnVlIH0sXG4gIFtcbiAgICAoKSA9PiB7XG4gICAgICByZXR1cm4gYHRlc3QgJHtjdHguX3N0YXRlLnZpc2libGUoKX1gO1xuICAgIH0sXG4gIF1cbik7XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImltcG9ydCB7IGQgfSBmcm9tICcuLi9zcmMvdGVzdC1pbXBvcnQuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGlja3M6IDFcbiAgICB9O1xuICB9LFxuXG4gIHN0YXRlKG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmlzaWJsZTogbyhkKSxcbiAgICAgIGNsaWNrczI6IG8oe1xuICAgICAgICBhOiAyXG4gICAgICB9KVxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQobykge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wdXRlZDI6IG8oKCkgPT4ge1xuICAgICAgICBsZXQgayA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGQgaW4gWzEsIDIsIDNdKSB7XG4gICAgICAgICAgay5wdXNoKHRoaXMuX3N0YXRlLnZpc2libGUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGUudmlzaWJsZSgpICogMiAqIDU7XG4gICAgICB9KVxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHRoaXMuX2RhdGEuY2xpY2tzKys7IC8vIGFsZXJ0KGNsaWNrcylcbiAgICB9LFxuICAgIHJlYWN0aXZlX2NsaWNrOiBmdW5jdGlvbiAoZXZlbnQyKSB7XG4gICAgICB0aGlzLl9zdGF0ZS52aXNpYmxlKHRoaXMuX3N0YXRlLnZpc2libGUoKSArIDEpO1xuICAgIH1cbiAgfVxufTsiLCJcblx0XHRpbXBvcnQgeyBCYXNpYyB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5cdFx0aW1wb3J0IGNvbXBvbmVudENvbmZpZyBmcm9tIFwiLi90ZXN0Mi5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XHRcblx0XHRsZXQgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRtZXRob2RzOiB7fSxcblx0XHR9LCBjb21wb25lbnRDb25maWcpO1xuXG5cdFx0bGV0IGluc3RhbmNlID0gZnVuY3Rpb24gVGVzdDIoKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnVGVzdDInO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3Nsb3RzID0ge1wiZGVmYXVsdFwiOlswLDVdLFwiZm9vdGVyXCI6WzAsN119O1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kc1trZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19yZW5kZXIgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcbiAgXCJkaXZcIixcbiAge1xuICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgIHJldHVybiBhbGVydCgxKTtcbiAgICB9LFxuICAgIGR5bmFtaWNTdHlsZTogeyBwYWRkaW5nVG9wOiBjdHguX3N0YXRlLnMyIH0sXG4gICAgaWQ6IGN0eC5nZXRVSUQoNCksXG4gIH0sXG4gIFtcbiAgICAoKSA9PiB7XG4gICAgICByZXR1cm4gYHRlc3QgJHtjdHguX3N0YXRlLnMyKCl9YDtcbiAgICB9LFxuICAgIGgoXCJiclwiLCB7fSwgW10pLFxuICAgIHN0YXRlbWVudChcbiAgICAgIGN0eC5fZGF0YS52aXNpYmxlLFxuICAgICAgW1xuICAgICAgICBoKFwiZGl2XCIsIHsgaWQ6IGN0eC5nZXRVSUQoNykgfSwgW1xuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgW3Zpc2libGVdIHNob3cgJHtjdHguX2RhdGEuZGRkfSAtICR7Y3R4Ll9zdGF0ZS5zMSgpfWA7XG4gICAgICAgICAgfSxcbiAgICAgICAgXSksXG4gICAgICAgIHN0YXRlbWVudChjdHguX3N0YXRlLnMxLCBoKFwic3BhblwiLCB7fSwgW2BbczFdIHRlc3RgXSkpLFxuICAgICAgXSxcbiAgICAgIGN0eC5fc3RhdGUuczMsXG4gICAgICBoKFwiZGl2XCIsIHt9LCBbYFtzM10gdGVzdGBdKVxuICAgICksXG4gICAgW2goXCJkaXZcIiwge30sIFtgW25vbmVdIGhpZGVgXSldLFxuICAgIHNsb3QoY3R4LCBoLCBcImRlZmF1bHRcIiwgbnVsbCwge30sIFtgZGVmYXVsdCBzbG90IHZhbHVlYF0pLFxuICAgIGgoXCJkaXZcIiwge30sIFtgYWZ0ZXItb25jZS1pZmBdKSxcbiAgICBzbG90KFxuICAgICAgY3R4LFxuICAgICAgaCxcbiAgICAgIFwiZm9vdGVyXCIsXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBjbGFzczogXCJmb290ZXJcIiwgc3R5bGU6IFwiYmFja2dyb3VuZDogI2VmZWZlZjtcIiB9LFxuICAgICAgW2Bmb290ZXIgc2xvdCB2YWx1ZWBdXG4gICAgKSxcbiAgXVxuKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcbiAgXCJkaXZcIixcbiAge1xuICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgIHJldHVybiBhbGVydCgxKTtcbiAgICB9LFxuICAgIGR5bmFtaWNTdHlsZTogeyBwYWRkaW5nVG9wOiBjdHguX3N0YXRlLnMyIH0sXG4gICAgaWQ6IGN0eC5nZXRVSUQoNCksXG4gICAgX3M6IHRydWUsXG4gIH0sXG4gIFtcbiAgICAoKSA9PiB7XG4gICAgICByZXR1cm4gYHRlc3QgJHtjdHguX3N0YXRlLnMyKCl9YDtcbiAgICB9LFxuICAgICxcbiAgICBzdGF0ZW1lbnQoXG4gICAgICBjdHguX2RhdGEudmlzaWJsZSxcbiAgICAgIFtcbiAgICAgICAgaChcImRpdlwiLCB7IGlkOiBjdHguZ2V0VUlEKDcpIH0sIFtcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYFt2aXNpYmxlXSBzaG93ICR7Y3R4Ll9kYXRhLmRkZH0gLSAke2N0eC5fc3RhdGUuczEoKX1gO1xuICAgICAgICAgIH0sXG4gICAgICAgIF0pLFxuICAgICAgICBzdGF0ZW1lbnQoY3R4Ll9zdGF0ZS5zMSwgaChcInNwYW5cIiwge30sIFtgW3MxXSB0ZXN0YF0pKSxcbiAgICAgIF0sXG4gICAgICBjdHguX3N0YXRlLnMzLFxuICAgICAgaChcImRpdlwiLCB7fSwgW2BbczNdIHRlc3RgXSlcbiAgICApLFxuICAgICxcbiAgICAsXG4gICAgLFxuICBdXG4pO1xuO1xuXHRcdFx0fVxuXHRcdFxuXHRcdGV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuXHQiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRkZDogJ1t0ZXN0IHZhcmlhYmxlIGRkZF0nLFxuICAgICAgdGltZXIxOiBudWxsLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH07XG4gIH0sXG5cbiAgc3RhdGUobykge1xuICAgIHJldHVybiB7XG4gICAgICBzMTogbyh0cnVlKSxcbiAgICAgIHMyOiBvKDEwKSxcbiAgICAgIHMzOiBvKGZhbHNlKVxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQobykge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgbWFrZUlmOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnTWFrZScpO1xuICAgICAgdGhpcy5fc3RhdGUuczEodHJ1ZSk7XG4gICAgICB0aGlzLl9zdGF0ZS5zMyh0cnVlKTsgLy8gY29uc29sZS5sb2coczEsIHMzKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3N0YXRlLnMxKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fc3RhdGUuczModHJ1ZSk7IC8vIGNvbnNvbGUubG9nKHMxLCBzMyk7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMShmYWxzZSk7XG4gICAgICAgIHRoaXMuX3N0YXRlLnMzKGZhbHNlKTsgLy8gY29uc29sZS5sb2coczEsIHMzKTtcbiAgICAgIH0sIDIwMDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3N0YXRlLnMxKHRydWUpO1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMyhmYWxzZSk7IC8vIGNvbnNvbGUubG9nKHMxLCBzMyk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX21ldGhvZHMubWFrZUlmKCk7XG4gICAgICB0aGlzLl9kYXRhLnRpbWVyMSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5fbWV0aG9kcy5tYWtlSWYoKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH0sXG4gICAgdW5tb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2RhdGEudGltZXIxKTtcbiAgICB9XG4gIH1cbn07IiwiZXhwb3J0IGNvbnN0IF8gPSAtMTtcbiIsImltcG9ydCB2YWx1ZSBmcm9tICcuL3ZhbHVlJztcblxuXG5mdW5jdGlvbiBjYW1lbFRvUHJvcChzKVxue1xuXHRyZXR1cm4gc1xuXHRcdC5yZXBsYWNlKC9cXC4/KFtBLVpdKykvZywgKHgsIHkpID0+IGAtJHt5LnRvTG93ZXJDYXNlKCl9YClcblx0XHQucmVwbGFjZSgvXi0vLCAnJyk7XG59XG5cbmZ1bmN0aW9uIG9ubHlVbmlxdWUodmFsdWUsIGluZGV4LCBzZWxmKSB7IFxuICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNsYXNzT2JqZWN0KG9iailcbntcblx0bGV0IGNsYXNzZXMgPSBbXTtcblxuXHRmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG5cdFx0aWYodmFsdWUob2JqW2tleV0pKSB7XG5cdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY2xhc3Nlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzZXMoc3RhdGljQ2xhc3NlcyA9IFtdLCBkeW5hbWljID0ge30pXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0XG5cdFx0XHRpZihBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBhcmcubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2godmFsdWUoYXJnW2pdKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgYXJnID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQoXG5cdFx0XHRcdFx0aGFuZGxlQ2xhc3NPYmplY3QoYXJnKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KFxuXHRcdFx0XHRcdGhhbmRsZUNsYXNzT2JqZWN0KHZhbHVlKGFyZykpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjbGFzc2VzID0gY2xhc3Nlcy5maWx0ZXIoKHYsIGksIGEpID0+IGEuaW5kZXhPZih2KSA9PT0gaSk7XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVN0eWxlc09iamVjdChzdHlsZXMsIG9iailcbntcblx0Zm9yIChsZXQga2V5IGluIG9iaikge1xuXHRcdGxldCB2YWwgPSB2YWx1ZShvYmpba2V5XSk7XG5cdFx0aWYodmFsICE9PSBudWxsKSB7XG5cdFx0XHRzdHlsZXNbY2FtZWxUb1Byb3Aoa2V5KV0gPSB2YWw7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlcygpXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IHN0eWxlcyA9IHt9O1xuXHRcdFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCBhcmd1bWVudHNbaV0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCB2YWx1ZShhcmd1bWVudHNbaV0pKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzdHlsZXM7XG5cdH1cbn0iLCJpbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcblxuXG5pbXBvcnQgeyBoeWRyYXRlLCBkaHRtbCB9IGZyb20gJ3NpbnVvdXMvaHlkcmF0ZSc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCB9IGZyb20gJy4vb2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IHN0eWxlcywgY2xhc3Nlcywgc3RhdGVtZW50LCBkeW5hbWljLCBsb29wLCBzbG90IH0gZnJvbSAnLi9pbmRleCc7XG5cbmltcG9ydCB7IGggfSBmcm9tICcuLyc7XG5cbi8vIGltcG9ydCB7IHJlbmRlciwgaHlkcmF0ZSB9IGZyb20gJy4vdGVtcGxhdGUnO1xubGV0IEhJRCA9IDA7XG5cblxudmFyIEJhc2ljID0gZnVuY3Rpb24gKCkge1xuXG5cdGZ1bmN0aW9uIEJhc2ljKClcblx0e1xuXHRcdHRoaXMuX2lzQ29tcG9uZW50ID0gdHJ1ZTtcblx0XHR0aGlzLmhpZCA9IG51bGw7XG5cblx0XHR0aGlzLl9wcm9wcyA9IHRoaXMucHJvcHMoKTtcblx0XHR0aGlzLl9wYXNzZWRQcm9wcyA9IHt9O1xuXG5cdFx0Ly8gTG9jYWwgZGF0YVxuXHRcdHRoaXMuX2RhdGEgPSB0aGlzLmRhdGEoKTtcblx0XHQvLyBTdGF0ZWZ1bCBkYXRhXG5cdFx0dGhpcy5fc3RhdGUgPSB0aGlzLnN0YXRlKG9ic2VydmFibGUpO1xuXG5cdFx0dGhpcy5fc2xvdHMgPSB7XG5cdFx0XHRkZWZhdWx0OiBbXSxcblx0XHR9O1xuXG5cdFx0dGhpcy5fY29tcHV0ZWQgPSB0aGlzLmNvbXB1dGVkKGNvbXB1dGVkKTtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXG5cblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXG5cdFx0Ly8gRGVmYXVsdCBwcm9wIHZhbHVlcyBcblx0XHR0aGlzLmluaXRQcm9wcygpO1xuXG5cdFx0Ly8gdGhpcy5pbml0VGVtcGxhdGUoKTtcblxuXHRcdHRoaXMuc2V0Q2hpbGRyZW4oKTtcblx0XHR0aGlzLnNldFBhcmVudCgpO1xuXG5cdFx0dGhpcy5iaW5kQ29udGV4dCgpO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuYmluZENvbnRleHQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9tZXRob2RzKSB7XG5cdFx0XHR0aGlzLl9tZXRob2RzW2tleV0gPSB0aGlzLl9tZXRob2RzW2tleV0uYmluZCh0aGlzKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9jb21wdXRlZCkge1xuXHRcdFx0dGhpcy5fY29tcHV0ZWRba2V5XSA9IHRoaXMuX2NvbXB1dGVkW2tleV0uYmluZCh0aGlzKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIENvbmZpZ1xuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuc2V0TWV0aG9kcyA9IGZ1bmN0aW9uKG1ldGhvZHMgPSB7fSlcblx0e1xuXHRcdHRoaXMuX21ldGhvZHMgPSBtZXRob2RzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhpZXJhcmNoeVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuc2V0Q2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZHJlbiA9IFtdKVxuXHR7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmFkZENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGQpXG5cdHtcblx0XHR0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnNldFBhcmVudCA9IGZ1bmN0aW9uKHBhcmVudCA9IG51bGwpXG5cdHtcblx0XHR0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblx0LyoqXG5cdCAqIFByb3BzXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5wcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmluaXRQcm9wcyA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX3Byb3BzKVxuXHRcdHtcblx0XHRcdGxldCBwcm9wID0gdGhpcy5fcHJvcHNba2V5XTtcblx0XHRcdGxldCB2YWx1ZSA9IG51bGw7XG5cdFx0XHRsZXQgdHlwZSA9IG51bGw7XG5cblx0XHRcdGlmKHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdC8vIHR5cGVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlID0gcHJvcC5kZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2RhdGFba2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NTbG90cyA9IGZ1bmN0aW9uKG5hbWUsIHNsb3RzKVxuXHR7XG5cdFx0dGhpcy5fc2xvdHNbbmFtZV0gPSBzbG90cztcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnBhc3NQcm9wcyA9IGZ1bmN0aW9uKHByb3BzKVxuXHR7XG5cdFx0Ly8gaWYodHlwZW9mIHRoaXMuX3Bhc3NlZFByb3BzW2NvbXBvbmVudC5oaWRdID09PSAndW5kZWZpbmVkJykge1xuXHRcdC8vIFx0dGhpcy5fcGFzc2VkUHJvcHNbY29tcG9uZW50LmhpZF0gPSB7fTtcblx0XHQvLyB9XG5cblx0XHRmb3IobGV0IGtleSBpbiBwcm9wcylcblx0XHR7XG5cdFx0XHRpZihwcm9wc1trZXldLl9vYnNlcnZhYmxlKSB7XG5cdFx0XHRcdHRoaXMuX2lzU3RhdGVmdWwgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9kYXRhW2tleV0gPSBwcm9wc1trZXldO1xuXHRcdFx0Ly8gaWYodHlwZW9mIHRoaXMuX2RhdGFba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdC8vIFx0dGhyb3cgbmV3IEVycm9yKGBbU2ludW91c10gQ29tcG9uZW50ICR7IHRoaXMubmFtZSB9IGFscmVhZHkgaGFzICR7IGtleSB9IHByb3BlcnR5YClcblx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHQvLyBcdHRoaXMuX2RhdGFba2V5XSA9IHByb3BzW2tleV07XG5cdFx0XHQvLyB9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsaWVudCBzaWRlIGhhbmRsZXIgYWZ0ZXIgU1NSIChoeWRyYXRpb24pXG5cdCAqL1xuXG5cblx0QmFzaWMucHJvdG90eXBlLmhhc1N0YXRlZnVsbERhdGEgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRsZXQgc3RhdGVmdWwgPSBmYWxzZTtcblxuXHRcdGZvcihsZXQgaGlkIGluIHRoaXMuX3Bhc3NlZFByb3BzKSB7XG5cdFx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9wYXNzZWRQcm9wc1toaWRdKSB7XG5cdFx0XHRcdGlmKHRoaXMuX3Bhc3NlZFByb3BzW2hpZF1ba2V5XSkge1xuXHRcdFx0XHRcdHN0YXRlZnVsID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihzdGF0ZWZ1bCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3RhdGVmdWwgJiYgdGhpcy5faXNTdGF0ZWZ1bDtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmhhc1N0YXRlbGVzc0RhdGEgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZGF0YSkubGVuZ3RoID4gMDtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2NhbCBjb21wb25lbnQgZGF0YVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmNvbXB1dGVkID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXRlZnVsIGRhdGFcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnN0YXRlID0gZnVuY3Rpb24obylcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiAxLiBDcmVhdGUgY2hpbGQgY29tcG9uZW50cyAoZGlmZmVyZW50IGNvbnRleHQpXG5cdCAqIDIuIFBhc3MgcHJvcHNcblx0ICogMy4gUmVuZGVyXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUuY2hpbGRDb21wb25lbnRzID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiAgTGlmZSBjeWNsZSBob29rc1xuXHQgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLmhvb2sgPSBmdW5jdGlvbih0eXBlID0gJ21vdW50ZWQnKVxuXHR7XG5cdFx0Ly8gY29uc29sZS5sb2codGhpcyk7XG5cdFx0aWYodGhpcy5fbWV0aG9kc1t0eXBlXSkge1xuXHRcdFx0dGhpcy5fbWV0aG9kc1t0eXBlXS5jYWxsKHRoaXMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMuX2NoaWxkcmVuW2ldLmhvb2sodHlwZSk7XG5cdFx0fVxuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUubW91bnRlZCA9IGZ1bmN0aW9uKCkge31cblxuXHRCYXNpYy5wcm90b3R5cGUudW5tb3VudGVkID0gZnVuY3Rpb24oKSB7fVxuXG5cdC8qKlxuXHQgKiBQcml2YXRlIEFQSSBmb3IgcmVuZGVyIGFuZCBoeWRyYXRlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHggPSBudWxsKVxuXHR7XG5cdFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdFx0XHRjdHggPSB0aGlzO1xuXHRcdH1cblxuXHRcdGguYmluZChjdHgpO1xuXG5cdFx0cmV0dXJuIGN0eC5fX3JlbmRlcihoLmJpbmQoY3R4KSwge1xuXHRcdFx0Y3R4LFxuXHRcdFx0Ly8gcmVuZGVyOiAncmVuZGVyJyxcblx0XHRcdC8vIGNvbXBvbmVudHM6IChpKSA9PiBjdHguY2hpbGRDb21wb25lbnRzKClbaV0sXG5cdFx0XHRzdGF0ZW1lbnQsXG5cdFx0XHRsb29wLFxuXHRcdFx0c2xvdCxcblx0XHRcdGQ6IGR5bmFtaWMsXG5cdFx0XHRjOiBjb21wdXRlZCxcblx0XHR9KTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmh5ZHJhdGUgPSBmdW5jdGlvbihjdHggPSBudWxsLCBjb21waWxlciA9IG51bGwpXG5cdHtcblx0XHRpZihjdHggPT09IG51bGwpIHtcblx0XHRcdGN0eCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGN0eC5fX2h5ZHJhdGUoY29tcGlsZXIsIHtcblx0XHRcdGN0eCxcblx0XHRcdC8vIHJlbmRlcjogJ2h5ZHJhdGUnLFxuXHRcdFx0Ly8gY29tcG9uZW50czogKGkpID0+IGN0eC5jaGlsZENvbXBvbmVudHMoKVtpXSxcblx0XHRcdHN0YXRlbWVudCxcblx0XHRcdHNsb3QsXG5cdFx0XHRsb29wLFxuXHRcdFx0ZDogZHluYW1pYyxcblx0XHRcdGM6IGNvbXB1dGVkLFxuXHRcdH0pO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUudGVtcGxhdGUgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXG5cdC8vIEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZUJ1aWxkZXIgPSBmdW5jdGlvbihoLCBvcHRzKVxuXHQvLyB7XG5cdC8vIFx0cmV0dXJuIHRoaXNbYF9fJHsgb3B0cy5yZW5kZXIgfWBdKGgsIG9wdHMpO1xuXHQvLyB9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuY29tcG9uZW50ID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUuZ2V0VUlEID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRyZXR1cm4gYGh5ZHItJHsgU2ludW91cy5jcmVhdGVISUQoaW5kZXgpIH1gO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oXCJuYW1lXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lOyB9KTtcblxuXHRyZXR1cm4gQmFzaWM7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xuIiwiaW1wb3J0IHsgaCwgaHMsIGFwaSB9IGZyb20gJ3NpbnVvdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljKGgsIHRhZywgb3B0cywgY2hpbGRyZW4pXG57XG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bGV0IGVsID0gdGFnKCk7XG5cdFx0cmV0dXJuIGgoZWwsIG9wdHMsIGNoaWxkcmVuKTtcblx0fTtcblxufSIsImltcG9ydCB7IGggYXMgaHMgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBzdWJzY3JpYmUgfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuaW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCBvcHRpb25zLCAgfSBmcm9tICcuLyc7XG5pbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcblxubGV0IEhUTUxUYWdzID0gW1xuXHQnaScsICdkaXYnLCAnc3BhbicsICdocicsICdicicsICdzdHJvbmcnLCAncHJlJ1xuXTtcblxuXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG57XG5cdGVsID0gZWwudG9Mb3dlckNhc2UoKTtcblx0Ly8gZWwgPSBjb21wdXRlZCgoKSA9PiAodHlwZW9mIGVsID09PSAnZnVuY3Rpb24nID8gZWwgOiBlbCkpO1xuXG5cdC8vIGNvbnNvbGUubG9nKCdbIEZGIF0nLCBlbCwgdGhpcylcblx0bGV0IGR5bmFtaWNBdHRycyA9IGZhbHNlO1xuXG5cdG9wdGlvbnModGhpcywgb3B0cyk7XG5cblx0Ly8gSWYgSFRNTCB0YWcgcmVuZGVyXG5cdGlmKEhUTUxUYWdzLmluY2x1ZGVzKGVsKSkge1xuXHRcdHJldHVybiBocyhlbCwgb3B0cywgY2hpbGRyZW4pO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0Q29tcG9uZW50KGVsKTtcblxuXHQvLyBjb25zb2xlLmxvZyhjb21wb25lbnQpXG5cdFxuXHRpZih0eXBlb2Ygb3B0cy5wcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHR9XG5cblx0Zm9yKGxldCBrZXkgaW4gb3B0cy4kc2xvdHMpIHtcblx0XHRjb21wb25lbnQucGFzc1Nsb3RzKGtleSwgb3B0cy4kc2xvdHNba2V5XSk7XHRcblx0fVxuXG5cdHJlZ2lzdGVyQ2hpbGRyZW4odGhpcywgY29tcG9uZW50KTtcblxuXHRyZXR1cm4gY29tcG9uZW50LnJlbmRlcigpO1xufSIsImltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICdAc2ludW91cy9sYXp5JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb21wb25lbnQsIGxheW91dCwgdGltZUJlbmNobWFyayA9ICgpID0+IHt9LCBjYWxsYmFjayA9IG51bGwpIHtcblxuICAgIGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuICAgIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCAoaW5zdGFuY2UpID0+IHtcblxuICAgIFx0dGltZUJlbmNobWFyaygnUmVuZGVyJyk7XG5cblx0XHRsYXlvdXQuYXBwZW5kKGluc3RhbmNlLnJlbmRlcigpKTtcblx0XHRpbnN0YW5jZS5ob29rKCdtb3VudGVkJyk7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHRpbWVCZW5jaG1hcmsoJ1JlbmRlcicpO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9KTtcbn0iLCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb29wKGNvbmRpdGlvbiwgZm4pXG57XG5cdGxldCBkID0gKCkgPT4ge1xuXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xuXG5cdFx0bGV0IGxvb3BfY29uZGl0aW9uID0gdHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmRpdGlvbigpIDogY29uZGl0aW9uO1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gbG9vcF9jb25kaXRpb24pXG5cdFx0e1xuXHRcdFx0bGV0IGl0ZW0gPSBsb29wX2NvbmRpdGlvbltrZXldO1xuXHRcdFx0cmVzdWx0LnB1c2goZm4oaXRlbSwga2V5KSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRkLl9vYnNlcnZhYmxlID0gdHJ1ZTtcblx0Ly8gZC5fbm9kZSA9IHRydWU7XG5cblx0cmV0dXJuIGQ7XG59IiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBzaW51b3VzT2JzZXJ2YWJsZSwgY29tcHV0ZWQgYXMgc2ludW91c0NvbXB1dGVkIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VPYnNlZXJ2YWJsZShmbilcbntcblx0Zm4uX29ic2VydmFibGUgPSB0cnVlO1xuXHRyZXR1cm4gZm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZCh2LCBiaW5kaW5nID0gZmFsc2UpIHtcblxuXHRsZXQgZDtcblx0XG5cdGlmKGJpbmRpbmcpIHtcblx0XHRkID0gc2ludW91c0NvbXB1dGVkKHYuYmluZCh0aGlzKSk7XG5cdH0gZWxzZSB7XG5cdFx0ZCA9IHNpbnVvdXNDb21wdXRlZCh2KTtcblx0fVxuXG5cdG1ha2VPYnNlZXJ2YWJsZShkKTtcblxuXHRyZXR1cm4gZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmFibGUodiwgYmluZGluZyA9IGZhbHNlKVxue1xuXHRsZXQgZCA9IHNpbnVvdXNPYnNlcnZhYmxlKHYpO1xuXG5cdFxuXHRtYWtlT2JzZWVydmFibGUoZCk7XG5cblx0cmV0dXJuIGQ7XG59IiwiaW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCAgfSBmcm9tICcuLyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wdGlvbnMoY29udGV4dCwgb3B0cylcbntcblx0bGV0IHNob3VsZEhhbmRsZSA9IHtcblx0XHRzdHlsZXM6IGZhbHNlLFxuXHR9O1xuXG5cdGlmKCFvcHRzLnN0YXRpY1N0eWxlKSB7XG5cdFx0b3B0cy5zdGF0aWNTdHlsZSA9IHt9O1xuXHR9IGVsc2Uge1xuXHRcdHNob3VsZEhhbmRsZS5zdHlsZXMgPSB0cnVlO1xuXHR9XG5cblx0aWYoIW9wdHMuZHluYW1pY1N0eWxlKSB7XG5cdFx0b3B0cy5keW5hbWljU3R5bGUgPSBbXTtcblx0fSBlbHNlIHtcblx0XHRzaG91bGRIYW5kbGUuc3R5bGVzID0gdHJ1ZTtcblx0fVxuXG5cdGlmKHNob3VsZEhhbmRsZS5zdHlsZXMpIHtcblx0XHRvcHRzLnN0eWxlID0gc3R5bGVzLmFwcGx5KGNvbnRleHQsIFtvcHRzLnN0YXRpY1N0eWxlXS5jb25jYXQob3B0cy5keW5hbWljU3R5bGUpKVxuXHR9XG5cblx0Ly8gY29uc29sZS53YXJuKGNvbnRleHQsIG9wdHMpXG5cdC8qKlxuXHQgKiBDbGVhclxuXHQgKi9cblx0aWYoIXNob3VsZEhhbmRsZS5zdHlsZXMpIHtcblx0XHRkZWxldGUgb3B0cy5zdGF0aWNTdHlsZTtcblx0XHRkZWxldGUgb3B0cy5keW5hbWljU3R5bGU7XG5cdH1cblxuXHRyZXR1cm4gb3B0cztcbn0iLCJ3aW5kb3cuX1NpbnVvdXNDb21wb25lbnRzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyKG5hbWUsIGNvbXBvbmVudCA9IG51bGwpXG57XG5cdGlmKGNvbXBvbmVudCA9PSBudWxsKSB7XG5cdFx0Y29tcG9uZW50ID0gbmFtZTtcblx0XHRuYW1lID0gbmFtZS5uYW1lO1xuXHR9XG5cblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHR3aW5kb3cuX1NpbnVvdXNDb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsb3QoY29udGV4dCwgaCwgbmFtZSwgdGFnLCBvcHRpb25zLCBkZWZhdWx0Q2hpbGRyZW4pXG57XG5cdC8vIGNvbnRleHQuX19zbG90c1xuXHRcblx0bGV0IGNoaWxkcmVuID0gZGVmYXVsdENoaWxkcmVuO1xuXG5cdGlmKGNvbnRleHQuX3Nsb3RzW25hbWVdKSB7XG5cdFx0Y2hpbGRyZW4gPSBjb250ZXh0Ll9zbG90c1tuYW1lXTtcblx0fVxuXHRcblx0aWYodGFnID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuO1xuXHR9XG5cblx0cmV0dXJuIGgodGFnLCBvcHRpb25zLCBjaGlsZHJlbik7XG59IiwiZXhwb3J0IGNsYXNzIENvbmRpdGlvblxue1xuXG5cdGNvbnN0cnVjdG9yKGNvbmRpdGlvbilcblx0e1xuXHRcdHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuXHRcdHRoaXMucmVzdWx0XzEgPSBudWxsO1xuXHRcdHRoaXMucmVzdWx0XzIgPSBudWxsO1xuXHR9XG5cblx0c2V0Rmlyc3RSZXN1bHQoYSlcblx0e1xuXHRcdHRoaXMucmVzdWx0XzEgPSBhO1xuXHR9XG5cblx0c2V0U2Vjb25kUmVzdWx0KGEpXG5cdHtcblx0XHR0aGlzLnJlc3VsdF8yID0gYTtcblx0fVxuXG5cdGNoZWNrKClcblx0e1xuXHRcdHJldHVybiB0aGlzLmNvbmRpdGlvbigpXG5cdH1cblxuXHRyZXN1bHQoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuY29uZGl0aW9uKCkgPyB0aGlzLnJlc3VsdF8xIDogdGhpcy5yZXN1bHRfMjtcblx0fVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KGNvbmRpdGlvbilcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICUgMiAhPT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdGF0ZW1lbnQgc2hvdWxkIGJlIG9kZCBudW1iZXInKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGxldCB2YWx1ZSA9IGFyZ3VtZW50c1tpICsgMV07XG5cdFx0XHRsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoYHN0YXRlbWVudCBjb21tZW50IOKAkyAkeyBpIH1gKTtcblxuXHRcdFx0aWYodHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpZihjb25kaXRpb24oKSkge1xuXHRcdFx0XHRcdG5vZGUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYoY29uZGl0aW9uKSB7XG5cdFx0XHRcdFx0bm9kZSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJlc3VsdC5wdXNoKG5vZGUpO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUubG9nKHJlc3VsdClcblx0XHRcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZC5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cblx0cmV0dXJuIGQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsdWUodmFsdWUpXG57XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiB2YWx1ZSgpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufSIsIlxuXHRcdGltcG9ydCB7IEJhc2ljIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50Jztcblx0XHRpbXBvcnQgY29tcG9uZW50Q29uZmlnIGZyb20gXCIuL2luZGV4LnNpbj90eXBlPXNjcmlwdFwiO1xuXHRcdFxuXHRcdGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdG1ldGhvZHM6IHt9LFxuXHRcdH0sIGNvbXBvbmVudENvbmZpZyk7XG5cblx0XHRsZXQgaW5zdGFuY2UgPSBmdW5jdGlvbiBQYWdlc0luZGV4KCkge1xuXHRcdFx0QmFzaWMuY2FsbCh0aGlzKTtcblx0XHR9O1xuXHRcdFxuXHRcdC8vIGluaGVyaXQgQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2ljLnByb3RvdHlwZSk7XG5cblx0XHQvLyBjb3JyZWN0IHRoZSBjb25zdHJ1Y3RvciBwb2ludGVyIGJlY2F1c2UgaXQgcG9pbnRzIHRvIEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gaW5zdGFuY2U7XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzID0ge307XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9jb21wb25lbnROYW1lID0gJ1BhZ2VzSW5kZXgnO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3Nsb3RzID0ge307XG5cblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcpIHtcblx0XHRcdGlmKHR5cGVvZiBjb25maWdba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcubWV0aG9kcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzW2tleV0gPSBjb25maWcubWV0aG9kc1trZXldXG5cdFx0fVxuXHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3JlbmRlciA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCwgZCwgYyB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFwiZGl2XCIsIHsgaWQ6IGN0eC5nZXRVSUQoMTYpIH0sIFtcbiAgaChcbiAgICBcInRlc3QyXCIsXG4gICAge1xuICAgICAgJHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IFtgcGFzc2VkIHRleHRgLCBgaW4gZGVmYXVsdCBzbG90YF0sXG4gICAgICAgIGZvb3RlcjogW1xuICAgICAgICAgIGgoXCJkaXZcIiwgeyBpZDogY3R4LmdldFVJRCgxOSkgfSwgW1xuICAgICAgICAgICAgYHNvbWUgdGVzdCBvZmAsXG4gICAgICAgICAgICBoKFxuICAgICAgICAgICAgICBcInN0cm9uZ1wiLFxuICAgICAgICAgICAgICB7ICRzbG90czogeyBkZWZhdWx0OiBbYGNoaWxkYF0gfSwgaWQ6IGN0eC5nZXRVSUQoMjApIH0sXG4gICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgYHNsb3RgLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIGlkOiBjdHguZ2V0VUlEKDE3KSxcbiAgICB9LFxuICAgIFtdXG4gICksXG5dKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcImRpdlwiLCB7IGlkOiBjdHguZ2V0VUlEKDE2KSB9LCBbXG4gIGgoXG4gICAgXCJ0ZXN0MlwiLFxuICAgIHtcbiAgICAgICRzbG90czoge1xuICAgICAgICBkZWZhdWx0OiBbLF0sXG4gICAgICAgIGZvb3RlcjogW1xuICAgICAgICAgIGgoXCJkaXZcIiwgeyBpZDogY3R4LmdldFVJRCgxOSkgfSwgW1xuICAgICAgICAgICAgLFxuICAgICAgICAgICAgaChcInN0cm9uZ1wiLCB7ICRzbG90czogeyBkZWZhdWx0OiBbXSB9LCBpZDogY3R4LmdldFVJRCgyMCkgfSwgW10pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIGlkOiBjdHguZ2V0VUlEKDE3KSxcbiAgICB9LFxuICAgIFtdXG4gICksXG5dKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRleHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcblx0IiwiZXhwb3J0IGRlZmF1bHQge30iLCJpbXBvcnQgU2ludW91cyBmcm9tICdAc2ludW91cy9pJztcbmltcG9ydCBoeWRyYXRpb24gZnJvbSAnQHNpbnVvdXMvaHlkcmF0aW9uJztcbmltcG9ydCByZW5kZXIgZnJvbSAnQHNpbnVvdXMvcmVuZGVyJztcbmltcG9ydCB0ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdGVzdC5zaW4nXG5pbXBvcnQgdGVzdDIgZnJvbSAnLi4vY29tcG9uZW50cy90ZXN0Mi5zaW4nXG5pbXBvcnQgSW5kZXhQYWdlIGZyb20gJy4uL3BhZ2VzL2luZGV4LnNpbidcbmltcG9ydCB0aW1lQmVuY2htYXJrIGZyb20gJy4vdGltZSc7XG5cblxuLy8gY29uc3QgSW5kZXhQYWdlID0gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFnZUluZGV4XCIgKi8gJy4uL3BhZ2VzL2luZGV4LnNpbicpXG5cblxudmFyIExBWU9VVDtcbnZhciBQYWdlSW5kZXgsIFBhZ2VJbmRleDI7XG5cbmZ1bmN0aW9uIFRFU1RfV0VCUEFDS19CVUlMRCgpXG57XG5cdHRpbWVCZW5jaG1hcmsoJ1NTUi1CdWlsZCcpO1xuXHRTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KHRlc3QpO1xuXHRTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KHRlc3QyKTtcblx0dGltZUJlbmNobWFyaygnU1NSLUJ1aWxkJyk7XG59XG5cbi8vIGZ1bmN0aW9uIFRFU1RfSU5JVCgpXG4vLyB7XG4vLyBcdHRpbWVCZW5jaG1hcmsoJ1NTUi1Jbml0Jyk7XG4vLyBcdFBhZ2VJbmRleCA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0UGFnZUluZGV4MiA9IG5ldyBJbmRleFBhZ2UoKTtcbi8vIFx0dGltZUJlbmNobWFyaygnU1NSLUluaXQnKTtcbi8vIH1cblxuZnVuY3Rpb24gVEVTVF9SRU5ERVIoKVxue1xuXHRyZW5kZXIoSW5kZXhQYWdlLCBMQVlPVVQsIHRpbWVCZW5jaG1hcmspO1xufVxuXG5mdW5jdGlvbiBDTEVBUl9IT09LUygpXG57XG5cdFxuXHRsZXQgaHRtbCA9IExBWU9VVC5pbm5lckhUTUw7XG5cdExBWU9VVC5pbm5lckhUTUwgPSBodG1sO1xufVxuXG5mdW5jdGlvbiBURVNUX0hZRFJBVEUoKVxue1xuXHRoeWRyYXRpb24oSW5kZXhQYWdlLCBMQVlPVVQsIHRpbWVCZW5jaG1hcmssIChjKSA9PiB7XG5cdFx0Yy5ob29rKCdtb3VudGVkJyk7XG5cdH0pO1xufVxuXG5URVNUX1dFQlBBQ0tfQlVJTEQoKTtcblxuLy8gVEVTVF9JTklUKCk7XG5cbi8vIHJldHVybjtcbihmdW5jdGlvbiBsb2FkKCkge1xuXHRMQVlPVVQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cblxuXHQvLyBMQVlPVVQuaW5uZXJIVE1MID0gJyc7XG5cdC8vIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuXHQvLyBURVNUX0hZRFJBVEUoKTtcblx0Ly8gcmV0dXJuO1xuXG5cdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXHQvLyBcdFRFU1RfUkVOREVSKCk7XG5cdC8vIH0sIDIwMDApXG5cblx0VEVTVF9SRU5ERVIoKTtcblx0Ly8gY29uc29sZS5sb2coTEFZT1VULmlubmVySFRNTClcblx0cmV0dXJuXG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cblx0XHRDTEVBUl9IT09LUygpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHQgVEVTVF9IWURSQVRFKCk7XG5cdFx0fSwgMzAwKTtcblx0fSwgMTAwMCk7XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IGQgPSAyOyIsImxldCB0aW1lcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKG5hbWUpXG57XG5cdGxldCBub3cgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRpZih0eXBlb2YgdGltZXNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGltZXNbbmFtZV0gPSBub3c7XG5cdFx0cmV0dXJuIHRpbWVzW25hbWVdO1xuXHR9XG5cblx0Y29uc29sZS5sb2coYFsgdGIgJHtuYW1lfSBdYCwgbm93IC0gdGltZXNbbmFtZV0sICdtcycpO1xuXG5cdGRlbGV0ZSB0aW1lc1tuYW1lXTtcbn0iXSwic291cmNlUm9vdCI6IiJ9