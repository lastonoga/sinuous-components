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

		for(let key in config) {
			if(typeof config[key] === 'function') {
				instance.prototype[key] = config[key];
			}
		}
		
		for(let key in config.methods) {
			instance.prototype._methods[key] = config.methods[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h('div', {onclick: ctx._methods.reactive_click,id: ctx.getUID(15),}, [() => { return `test ${ctx._state.visible()}`; }]);
			}
		
			instance.prototype.__hydrate = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h('div', {onclick: ctx._methods.reactive_click,id: ctx.getUID(15),_s: true,}, [() => { return `test ${ctx._state.visible()}`; }]);
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

		for(let key in config) {
			if(typeof config[key] === 'function') {
				instance.prototype[key] = config[key];
			}
		}
		
		for(let key in config.methods) {
			instance.prototype._methods[key] = config.methods[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h('div', {onclick: () => { return alert(1); },dynamicStyle: {paddingTop:ctx._state.s2},id: ctx.getUID(2),}, [() => { return `test ${ctx._state.s2()}`; },h('br', {id: ctx.getUID(3),}, []),statement( ctx._data.visible, loop([1,2,3], (item,key) => { return [h('div', {}, [() => { return `[visible] show ${ctx._data.ddd}`; }]),statement( ctx._state.s1, h('span', {id: ctx.getUID(6),}, [`[s1] test`]))];}), ctx._state.s3, h('div', {}, [`[s3] test`])),[h('div', {}, [`[none] hide`])],h('div', {}, [`after-once-if`])]);
			}
		
			instance.prototype.__hydrate = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h('div', {onclick: () => { return alert(1); },dynamicStyle: {paddingTop:ctx._state.s2},id: ctx.getUID(2),_s: true,}, [() => { return `test ${ctx._state.s2()}`; },h('br', {id: ctx.getUID(3),}, []),statement( ctx._data.visible, loop([1,2,3], (item,key) => { return [h('div', {}, [() => { return `[visible] show ${ctx._data.ddd}`; }]),statement( ctx._state.s1, h('span', {id: ctx.getUID(6),}, [`[s1] test`]))];}), ctx._state.s3, h('div', {}, [`[s3] test`])),[],]);
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
      console.log('Make');
      this._state.s1(true);
      this._state.s3(true);
      console.log(this._state.s1(), this._state.s3());
      setTimeout(() => {
        this._state.s1(false);
        this._state.s3(true);
        console.log(this._state.s1(), this._state.s3());
      }, 1000);
      setTimeout(() => {
        this._state.s1(false);
        this._state.s3(false);
        console.log(this._state.s1(), this._state.s3());
      }, 2000);
      setTimeout(() => {
        this._state.s1(true);
        this._state.s3(false);
        console.log(this._state.s1(), this._state.s3());
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

  component.passSlots('default', children);
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

function slot(context, h, options, defaultValue) {
  if (options === void 0) {
    options = {};
  }

  var name = options.name || 'default';
  var tag = options.tag || 'div';
  var value = defaultValue;

  if (context._slots[name]) {
    value = context._slots[name];
  }

  return h(tag, {}, value);
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

    for (var i = 0; i < _arguments.length; i += 2) {
      var _condition = _arguments[i];
      var value = _arguments[i + 1];

      if (typeof _condition === 'function') {
        if (_condition()) {
          return value;
        }
      } else {
        if (_condition) {
          return value;
        }
      }
    }

    return [document.createComment('statement comment')];
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

		for(let key in config) {
			if(typeof config[key] === 'function') {
				instance.prototype[key] = config[key];
			}
		}
		
		for(let key in config.methods) {
			instance.prototype._methods[key] = config.methods[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h('div', {id: ctx.getUID(12),}, [h('test2', {id: ctx.getUID(13),}, [])]);
			}
		
			instance.prototype.__hydrate = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h('div', {id: ctx.getUID(12),}, [h('test2', {id: ctx.getUID(13),}, [])]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXN0LnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rlc3Quc2luPzQzODMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXN0Mi5zaW4iLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXN0Mi5zaW4/YjIwOSIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9jb21waWxlci9zcmMvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jhc2ljLmpzIiwid2VicGFjazovLy8uLi9zcmMvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2guanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xvb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uLi9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZhbHVlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnNpbiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4/NDNmZSIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyLXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3QtaW1wb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy90aW1lLmpzIl0sIm5hbWVzIjpbIl8iLCJ5Iiwic2VsZiIsImNsYXNzZXMiLCJvYmoiLCJzdGF0aWNDbGFzc2VzIiwiZHluYW1pYyIsImkiLCJhcmd1bWVudHMiLCJhcmciLCJBcnJheSIsImoiLCJoYW5kbGVDbGFzc09iamVjdCIsImEiLCJ2YWwiLCJzdHlsZXMiLCJjYW1lbFRvUHJvcCIsImhhbmRsZVN0eWxlc09iamVjdCIsIkhJRCIsIkJhc2ljIiwib2JzZXJ2YWJsZSIsImRlZmF1bHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJjaGlsZHJlbiIsInBhcmVudCIsInByb3AiLCJ2YWx1ZSIsInR5cGUiLCJwcm9wcyIsInN0YXRlZnVsIiwiT2JqZWN0IiwiY3R4IiwiaCIsInN0YXRlbWVudCIsImxvb3AiLCJzbG90IiwiZCIsImMiLCJjb21waWxlciIsIlNpbnVvdXMiLCJlbCIsInRhZyIsIkhUTUxUYWdzIiwiY2hpbGQiLCJvcHRzIiwiZHluYW1pY0F0dHJzIiwiY29tcG9uZW50IiwicmVnaXN0ZXJDaGlsZHJlbiIsInJlc3VsdCIsImxvb3BfY29uZGl0aW9uIiwiY29uZGl0aW9uIiwiaXRlbSIsImZuIiwiYmluZGluZyIsInYiLCJtYWtlT2JzZWVydmFibGUiLCJzaG91bGRIYW5kbGUiLCJ3aW5kb3ciLCJuYW1lIiwib3B0aW9ucyIsImNvbnRleHQiLCJDb25kaXRpb24iLCJzZXRGaXJzdFJlc3VsdCIsInNldFNlY29uZFJlc3VsdCIsImNoZWNrIiwiZG9jdW1lbnQiLCJTVE9SQUdFIiwiYXBpIiwiYmluZENoaWxkcmVuIiwiZmlsdGVyQ2hpbGROb2RlcyIsImh5ZHJhdGVUYWciLCJiaW5kTm9kZSIsImh5ZHJhdGVQcm9wcyIsImh5ZHJhdGVDaGlsZHJlbiIsImh5ZHJhdGUiLCJpbml0Q29tcG9uZW50IiwiZW50cmllcyIsImlkIiwiZW50cnkiLCJ0aW1lQmVuY2htYXJrIiwiY2FsbGJhY2siLCJ0cmVlIiwiY29ubmVjdGVkTm9kZSIsImluc3RhbmNlIiwiU2ludW91c0NvbXBvbmVudHMiLCJjcmVhdGVISUQiLCJjbGVhckhJRCIsInJlZ2lzdGVyQ29tcG9uZW50IiwiaGFzQ29tcG9uZW50IiwiZ2V0SHlkcmF0ZUNvbXBvbmVudCIsImdldENvbXBvbmVudCIsIm1vZHVsZSIsImxheW91dCIsIkxBWU9VVCIsIlBhZ2VJbmRleCIsIlBhZ2VJbmRleDIiLCJURVNUX1dFQlBBQ0tfQlVJTEQiLCJ0ZXN0IiwidGVzdDIiLCJURVNUX1JFTkRFUiIsIkluZGV4UGFnZSIsIkNMRUFSX0hPT0tTIiwiaHRtbCIsImlubmVySFRNTCIsIlRFU1RfSFlEUkFURSIsImhvb2siLCJsb2FkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRUaW1lb3V0IiwidGltZXMiLCJ0aW1lIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7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LENBRGdCLENBSWhCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBUixhQUFXLEdBYkssQ0FjaEI7O0FBQ0E7QUFFQVMsWUFBVSxDQUFDLFlBQU07QUFFaEJQLGVBQVc7QUFFWE8sY0FBVSxDQUFDLFlBQU07QUFDZkosa0JBQVk7QUFDYixLQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0EsR0FQUyxFQU9QLElBUE8sQ0FBVjtBQVFBLENBekJELEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZETyxJQUFNcEUsQ0FBQyxHQUFHLENBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUCxJQUFJeUUsS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBU0MsSUFBVCxDQUFjcEQsSUFBZCxFQUNmO0FBQ0MsTUFBSXFELEdBQUcsR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0osS0FBSyxDQUFDbkQsSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDbUQsU0FBSyxDQUFDbkQsSUFBRCxDQUFMLEdBQWNxRCxHQUFkO0FBQ0EsV0FBT0YsS0FBSyxDQUFDbkQsSUFBRCxDQUFaO0FBQ0E7O0FBRUR3RCxTQUFPLENBQUNDLEdBQVIsV0FBb0J6RCxJQUFwQixTQUE4QnFELEdBQUcsR0FBR0YsS0FBSyxDQUFDbkQsSUFBRCxDQUF6QyxFQUFpRCxJQUFqRDtBQUVBLFNBQU9tRCxLQUFLLENBQUNuRCxJQUFELENBQVo7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXHRcdGltcG9ydCBjb21wb25lbnRDb25maWcgZnJvbSBcIi4vdGVzdC5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XHRcblx0XHRsZXQgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRtZXRob2RzOiB7fSxcblx0XHR9LCBjb21wb25lbnRDb25maWcpO1xuXG5cdFx0bGV0IGluc3RhbmNlID0gZnVuY3Rpb24gVGVzdCgpIHtcblx0XHRcdEJhc2ljLmNhbGwodGhpcyk7XG5cdFx0fTtcblx0XHRcblx0XHQvLyBpbmhlcml0IEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNpYy5wcm90b3R5cGUpO1xuXG5cdFx0Ly8gY29ycmVjdCB0aGUgY29uc3RydWN0b3IgcG9pbnRlciBiZWNhdXNlIGl0IHBvaW50cyB0byBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGluc3RhbmNlO1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kcyA9IHt9O1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fY29tcG9uZW50TmFtZSA9ICdUZXN0Jztcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX3Nob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZykge1xuXHRcdFx0aWYodHlwZW9mIGNvbmZpZ1trZXldID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5tZXRob2RzKSB7XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHNba2V5XSA9IGNvbmZpZy5tZXRob2RzW2tleV1cblx0XHR9XG5cdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcmVuZGVyID0gZnVuY3Rpb24oaCwgeyBjdHgsIGNvbXBvbmVudHMsIHJlbmRlciwgc3RhdGVtZW50LCBzbG90LCBsb29wLCBkLCBjIH0pIHtcblx0XHRcdFx0cmV0dXJuIGgoJ2RpdicsIHtvbmNsaWNrOiBjdHguX21ldGhvZHMucmVhY3RpdmVfY2xpY2ssaWQ6IGN0eC5nZXRVSUQoMTUpLH0sIFsoKSA9PiB7IHJldHVybiBgdGVzdCAke2N0eC5fc3RhdGUudmlzaWJsZSgpfWA7IH1dKTtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaCgnZGl2Jywge29uY2xpY2s6IGN0eC5fbWV0aG9kcy5yZWFjdGl2ZV9jbGljayxpZDogY3R4LmdldFVJRCgxNSksX3M6IHRydWUsfSwgWygpID0+IHsgcmV0dXJuIGB0ZXN0ICR7Y3R4Ll9zdGF0ZS52aXNpYmxlKCl9YDsgfV0pO1xuXHRcdFx0fVxuXHRcdFxuXHRcdGV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuXHQiLCJpbXBvcnQgeyBkIH0gZnJvbSAnLi4vc3JjL3Rlc3QtaW1wb3J0LmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xpY2tzOiAxXG4gICAgfTtcbiAgfSxcblxuICBzdGF0ZShvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc2libGU6IG8oZCksXG4gICAgICBjbGlja3MyOiBvKHtcbiAgICAgICAgYTogMlxuICAgICAgfSlcbiAgICB9O1xuICB9LFxuXG4gIGNvbXB1dGVkKG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcHV0ZWQyOiBvKCgpID0+IHtcbiAgICAgICAgbGV0IGsgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBkIGluIFsxLCAyLCAzXSkge1xuICAgICAgICAgIGsucHVzaCh0aGlzLl9zdGF0ZS52aXNpYmxlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlLnZpc2libGUoKSAqIDIgKiA1O1xuICAgICAgfSlcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjbGljazogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB0aGlzLl9kYXRhLmNsaWNrcysrOyAvLyBhbGVydChjbGlja3MpXG4gICAgfSxcbiAgICByZWFjdGl2ZV9jbGljazogZnVuY3Rpb24gKGV2ZW50Mikge1xuICAgICAgdGhpcy5fc3RhdGUudmlzaWJsZSh0aGlzLl9zdGF0ZS52aXNpYmxlKCkgKyAxKTtcbiAgICB9XG4gIH1cbn07IiwiXG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXHRcdGltcG9ydCBjb21wb25lbnRDb25maWcgZnJvbSBcIi4vdGVzdDIuc2luP3R5cGU9c2NyaXB0XCI7XG5cdFx0XG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFRlc3QyKCkge1xuXHRcdFx0QmFzaWMuY2FsbCh0aGlzKTtcblx0XHR9O1xuXHRcdFxuXHRcdC8vIGluaGVyaXQgQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2ljLnByb3RvdHlwZSk7XG5cblx0XHQvLyBjb3JyZWN0IHRoZSBjb25zdHJ1Y3RvciBwb2ludGVyIGJlY2F1c2UgaXQgcG9pbnRzIHRvIEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gaW5zdGFuY2U7XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzID0ge307XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9jb21wb25lbnROYW1lID0gJ1Rlc3QyJztcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX3Nob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZykge1xuXHRcdFx0aWYodHlwZW9mIGNvbmZpZ1trZXldID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5tZXRob2RzKSB7XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHNba2V5XSA9IGNvbmZpZy5tZXRob2RzW2tleV1cblx0XHR9XG5cdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcmVuZGVyID0gZnVuY3Rpb24oaCwgeyBjdHgsIGNvbXBvbmVudHMsIHJlbmRlciwgc3RhdGVtZW50LCBzbG90LCBsb29wLCBkLCBjIH0pIHtcblx0XHRcdFx0cmV0dXJuIGgoJ2RpdicsIHtvbmNsaWNrOiAoKSA9PiB7IHJldHVybiBhbGVydCgxKTsgfSxkeW5hbWljU3R5bGU6IHtwYWRkaW5nVG9wOmN0eC5fc3RhdGUuczJ9LGlkOiBjdHguZ2V0VUlEKDIpLH0sIFsoKSA9PiB7IHJldHVybiBgdGVzdCAke2N0eC5fc3RhdGUuczIoKX1gOyB9LGgoJ2JyJywge2lkOiBjdHguZ2V0VUlEKDMpLH0sIFtdKSxzdGF0ZW1lbnQoIGN0eC5fZGF0YS52aXNpYmxlLCBsb29wKFsxLDIsM10sIChpdGVtLGtleSkgPT4geyByZXR1cm4gW2goJ2RpdicsIHt9LCBbKCkgPT4geyByZXR1cm4gYFt2aXNpYmxlXSBzaG93ICR7Y3R4Ll9kYXRhLmRkZH1gOyB9XSksc3RhdGVtZW50KCBjdHguX3N0YXRlLnMxLCBoKCdzcGFuJywge2lkOiBjdHguZ2V0VUlEKDYpLH0sIFtgW3MxXSB0ZXN0YF0pKV07fSksIGN0eC5fc3RhdGUuczMsIGgoJ2RpdicsIHt9LCBbYFtzM10gdGVzdGBdKSksW2goJ2RpdicsIHt9LCBbYFtub25lXSBoaWRlYF0pXSxoKCdkaXYnLCB7fSwgW2BhZnRlci1vbmNlLWlmYF0pXSk7XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19oeWRyYXRlID0gZnVuY3Rpb24oaCwgeyBjdHgsIGNvbXBvbmVudHMsIHJlbmRlciwgc3RhdGVtZW50LCBzbG90LCBsb29wLCBkLCBjIH0pIHtcblx0XHRcdFx0cmV0dXJuIGgoJ2RpdicsIHtvbmNsaWNrOiAoKSA9PiB7IHJldHVybiBhbGVydCgxKTsgfSxkeW5hbWljU3R5bGU6IHtwYWRkaW5nVG9wOmN0eC5fc3RhdGUuczJ9LGlkOiBjdHguZ2V0VUlEKDIpLF9zOiB0cnVlLH0sIFsoKSA9PiB7IHJldHVybiBgdGVzdCAke2N0eC5fc3RhdGUuczIoKX1gOyB9LGgoJ2JyJywge2lkOiBjdHguZ2V0VUlEKDMpLH0sIFtdKSxzdGF0ZW1lbnQoIGN0eC5fZGF0YS52aXNpYmxlLCBsb29wKFsxLDIsM10sIChpdGVtLGtleSkgPT4geyByZXR1cm4gW2goJ2RpdicsIHt9LCBbKCkgPT4geyByZXR1cm4gYFt2aXNpYmxlXSBzaG93ICR7Y3R4Ll9kYXRhLmRkZH1gOyB9XSksc3RhdGVtZW50KCBjdHguX3N0YXRlLnMxLCBoKCdzcGFuJywge2lkOiBjdHguZ2V0VUlEKDYpLH0sIFtgW3MxXSB0ZXN0YF0pKV07fSksIGN0eC5fc3RhdGUuczMsIGgoJ2RpdicsIHt9LCBbYFtzM10gdGVzdGBdKSksW10sXSk7XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGRkOiAnW3Rlc3QgdmFyaWFibGUgZGRkXScsXG4gICAgICB0aW1lcjE6IG51bGwsXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICBzdGF0ZShvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHMxOiBvKHRydWUpLFxuICAgICAgczI6IG8oMTApLFxuICAgICAgczM6IG8oZmFsc2UpXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZChvKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBtYWtlSWY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdNYWtlJyk7XG4gICAgICB0aGlzLl9zdGF0ZS5zMSh0cnVlKTtcbiAgICAgIHRoaXMuX3N0YXRlLnMzKHRydWUpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5fc3RhdGUuczEoKSwgdGhpcy5fc3RhdGUuczMoKSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fc3RhdGUuczEoZmFsc2UpO1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMyh0cnVlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RhdGUuczEoKSwgdGhpcy5fc3RhdGUuczMoKSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMShmYWxzZSk7XG4gICAgICAgIHRoaXMuX3N0YXRlLnMzKGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RhdGUuczEoKSwgdGhpcy5fc3RhdGUuczMoKSk7XG4gICAgICB9LCAyMDAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMSh0cnVlKTtcbiAgICAgICAgdGhpcy5fc3RhdGUuczMoZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGF0ZS5zMSgpLCB0aGlzLl9zdGF0ZS5zMygpKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fbWV0aG9kcy5tYWtlSWYoKTtcbiAgICAgIHRoaXMuX2RhdGEudGltZXIxID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLl9tZXRob2RzLm1ha2VJZigpO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfSxcbiAgICB1bm1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fZGF0YS50aW1lcjEpO1xuICAgIH1cbiAgfVxufTsiLCJleHBvcnQgY29uc3QgXyA9IC0xO1xuIiwiaW1wb3J0IHZhbHVlIGZyb20gJy4vdmFsdWUnO1xuXG5cbmZ1bmN0aW9uIGNhbWVsVG9Qcm9wKHMpXG57XG5cdHJldHVybiBzXG5cdFx0LnJlcGxhY2UoL1xcLj8oW0EtWl0rKS9nLCAoeCwgeSkgPT4gYC0ke3kudG9Mb3dlckNhc2UoKX1gKVxuXHRcdC5yZXBsYWNlKC9eLS8sICcnKTtcbn1cblxuZnVuY3Rpb24gb25seVVuaXF1ZSh2YWx1ZSwgaW5kZXgsIHNlbGYpIHsgXG4gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2xhc3NPYmplY3Qob2JqKVxue1xuXHRsZXQgY2xhc3NlcyA9IFtdO1xuXG5cdGZvciAobGV0IGtleSBpbiBvYmopIHtcblx0XHRpZih2YWx1ZShvYmpba2V5XSkpIHtcblx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjbGFzc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NlcyhzdGF0aWNDbGFzc2VzID0gW10sIGR5bmFtaWMgPSB7fSlcbntcblx0cmV0dXJuICgpID0+IHtcblx0XHRsZXQgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRcblx0XHRcdGlmKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGFyZy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaCh2YWx1ZShhcmdbal0pKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBhcmcgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdChcblx0XHRcdFx0XHRoYW5kbGVDbGFzc09iamVjdChhcmcpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQoXG5cdFx0XHRcdFx0aGFuZGxlQ2xhc3NPYmplY3QodmFsdWUoYXJnKSlcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNsYXNzZXMgPSBjbGFzc2VzLmZpbHRlcigodiwgaSwgYSkgPT4gYS5pbmRleE9mKHYpID09PSBpKTtcblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgb2JqKVxue1xuXHRmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG5cdFx0bGV0IHZhbCA9IHZhbHVlKG9ialtrZXldKTtcblx0XHRpZih2YWwgIT09IG51bGwpIHtcblx0XHRcdHN0eWxlc1tjYW1lbFRvUHJvcChrZXkpXSA9IHZhbDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzKClcbntcblx0cmV0dXJuICgpID0+IHtcblx0XHRsZXQgc3R5bGVzID0ge307XG5cdFx0XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHR5cGVvZiBhcmd1bWVudHNbaV0gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGhhbmRsZVN0eWxlc09iamVjdChzdHlsZXMsIGFyZ3VtZW50c1tpXSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhhbmRsZVN0eWxlc09iamVjdChzdHlsZXMsIHZhbHVlKGFyZ3VtZW50c1tpXSkpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0eWxlcztcblx0fVxufSIsImltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuXG5cbmltcG9ydCB7IGh5ZHJhdGUsIGRodG1sIH0gZnJvbSAnc2ludW91cy9oeWRyYXRlJztcbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkIH0gZnJvbSAnLi9vYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCBzdGF0ZW1lbnQsIGR5bmFtaWMsIGxvb3AsIHNsb3QgfSBmcm9tICcuL2luZGV4JztcblxuaW1wb3J0IHsgaCB9IGZyb20gJy4vJztcblxuLy8gaW1wb3J0IHsgcmVuZGVyLCBoeWRyYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5sZXQgSElEID0gMDtcblxuXG52YXIgQmFzaWMgPSBmdW5jdGlvbiAoKSB7XG5cblx0ZnVuY3Rpb24gQmFzaWMoKVxuXHR7XG5cdFx0dGhpcy5faXNDb21wb25lbnQgPSB0cnVlO1xuXHRcdHRoaXMuaGlkID0gbnVsbDtcblxuXHRcdHRoaXMuX3Byb3BzID0gdGhpcy5wcm9wcygpO1xuXHRcdHRoaXMuX3Bhc3NlZFByb3BzID0ge307XG5cblx0XHQvLyBMb2NhbCBkYXRhXG5cdFx0dGhpcy5fZGF0YSA9IHRoaXMuZGF0YSgpO1xuXHRcdC8vIFN0YXRlZnVsIGRhdGFcblx0XHR0aGlzLl9zdGF0ZSA9IHRoaXMuc3RhdGUob2JzZXJ2YWJsZSk7XG5cblx0XHR0aGlzLl9zbG90cyA9IHtcblx0XHRcdGRlZmF1bHQ6IFtdLFxuXHRcdH07XG5cblx0XHR0aGlzLl9jb21wdXRlZCA9IHRoaXMuY29tcHV0ZWQoY29tcHV0ZWQpO1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gW107XG5cblxuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cblx0XHQvLyBEZWZhdWx0IHByb3AgdmFsdWVzIFxuXHRcdHRoaXMuaW5pdFByb3BzKCk7XG5cblx0XHQvLyB0aGlzLmluaXRUZW1wbGF0ZSgpO1xuXG5cdFx0dGhpcy5zZXRDaGlsZHJlbigpO1xuXHRcdHRoaXMuc2V0UGFyZW50KCk7XG5cblx0XHR0aGlzLmJpbmRDb250ZXh0KCk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5iaW5kQ29udGV4dCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX21ldGhvZHMpIHtcblx0XHRcdHRoaXMuX21ldGhvZHNba2V5XSA9IHRoaXMuX21ldGhvZHNba2V5XS5iaW5kKHRoaXMpO1xuXHRcdH1cblxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX2NvbXB1dGVkKSB7XG5cdFx0XHR0aGlzLl9jb21wdXRlZFtrZXldID0gdGhpcy5fY29tcHV0ZWRba2V5XS5iaW5kKHRoaXMpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQ29uZmlnXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5zZXRNZXRob2RzID0gZnVuY3Rpb24obWV0aG9kcyA9IHt9KVxuXHR7XG5cdFx0dGhpcy5fbWV0aG9kcyA9IG1ldGhvZHM7XG5cdH1cblxuXHQvKipcblx0ICogSGllcmFyY2h5XG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5zZXRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkcmVuID0gW10pXG5cdHtcblx0XHR0aGlzLl9jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuYWRkQ2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZClcblx0e1xuXHRcdHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuc2V0UGFyZW50ID0gZnVuY3Rpb24ocGFyZW50ID0gbnVsbClcblx0e1xuXHRcdHRoaXMuX3BhcmVudCA9IHBhcmVudDtcblx0fVxuXHQvKipcblx0ICogUHJvcHNcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnByb3BzID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaW5pdFByb3BzID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fcHJvcHMpXG5cdFx0e1xuXHRcdFx0bGV0IHByb3AgPSB0aGlzLl9wcm9wc1trZXldO1xuXHRcdFx0bGV0IHZhbHVlID0gbnVsbDtcblx0XHRcdGxldCB0eXBlID0gbnVsbDtcblxuXHRcdFx0aWYodHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Ly8gdHlwZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWUgPSBwcm9wLmRlZmF1bHQoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fZGF0YVtrZXldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc1Nsb3RzID0gZnVuY3Rpb24obmFtZSwgc2xvdHMpXG5cdHtcblx0XHR0aGlzLl9zbG90c1tuYW1lXSA9IHNsb3RzO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUucGFzc1Byb3BzID0gZnVuY3Rpb24ocHJvcHMpXG5cdHtcblx0XHQvLyBpZih0eXBlb2YgdGhpcy5fcGFzc2VkUHJvcHNbY29tcG9uZW50LmhpZF0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0Ly8gXHR0aGlzLl9wYXNzZWRQcm9wc1tjb21wb25lbnQuaGlkXSA9IHt9O1xuXHRcdC8vIH1cblxuXHRcdGZvcihsZXQga2V5IGluIHByb3BzKVxuXHRcdHtcblx0XHRcdGlmKHByb3BzW2tleV0uX29ic2VydmFibGUpIHtcblx0XHRcdFx0dGhpcy5faXNTdGF0ZWZ1bCA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2RhdGFba2V5XSA9IHByb3BzW2tleV07XG5cdFx0XHQvLyBpZih0eXBlb2YgdGhpcy5fZGF0YVtrZXldICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Ly8gXHR0aHJvdyBuZXcgRXJyb3IoYFtTaW51b3VzXSBDb21wb25lbnQgJHsgdGhpcy5uYW1lIH0gYWxyZWFkeSBoYXMgJHsga2V5IH0gcHJvcGVydHlgKVxuXHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdC8vIFx0dGhpcy5fZGF0YVtrZXldID0gcHJvcHNba2V5XTtcblx0XHRcdC8vIH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xpZW50IHNpZGUgaGFuZGxlciBhZnRlciBTU1IgKGh5ZHJhdGlvbilcblx0ICovXG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaGFzU3RhdGVmdWxsRGF0YSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGxldCBzdGF0ZWZ1bCA9IGZhbHNlO1xuXG5cdFx0Zm9yKGxldCBoaWQgaW4gdGhpcy5fcGFzc2VkUHJvcHMpIHtcblx0XHRcdGZvcihsZXQga2V5IGluIHRoaXMuX3Bhc3NlZFByb3BzW2hpZF0pIHtcblx0XHRcdFx0aWYodGhpcy5fcGFzc2VkUHJvcHNbaGlkXVtrZXldKSB7XG5cdFx0XHRcdFx0c3RhdGVmdWwgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKHN0YXRlZnVsKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzdGF0ZWZ1bCAmJiB0aGlzLl9pc1N0YXRlZnVsO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaGFzU3RhdGVsZXNzRGF0YSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9kYXRhKS5sZW5ndGggPiAwO1xuXHR9XG5cblx0LyoqXG5cdCAqIExvY2FsIGNvbXBvbmVudCBkYXRhXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuY29tcHV0ZWQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHQvKipcblx0ICogU3RhdGVmdWwgZGF0YVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuc3RhdGUgPSBmdW5jdGlvbihvKVxuXHR7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIDEuIENyZWF0ZSBjaGlsZCBjb21wb25lbnRzIChkaWZmZXJlbnQgY29udGV4dClcblx0ICogMi4gUGFzcyBwcm9wc1xuXHQgKiAzLiBSZW5kZXJcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24oKSB7fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5jaGlsZENvbXBvbmVudHMgPSBmdW5jdGlvbigpIHt9XG5cblx0LyoqXG5cdCAqICBMaWZlIGN5Y2xlIGhvb2tzXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUuaG9vayA9IGZ1bmN0aW9uKHR5cGUgPSAnbW91bnRlZCcpXG5cdHtcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzKTtcblx0XHRpZih0aGlzLl9tZXRob2RzW3R5cGVdKSB7XG5cdFx0XHR0aGlzLl9tZXRob2RzW3R5cGVdLmNhbGwodGhpcyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy5fY2hpbGRyZW5baV0uaG9vayh0eXBlKTtcblx0XHR9XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5tb3VudGVkID0gZnVuY3Rpb24oKSB7fVxuXG5cdEJhc2ljLnByb3RvdHlwZS51bm1vdW50ZWQgPSBmdW5jdGlvbigpIHt9XG5cblx0LyoqXG5cdCAqIFByaXZhdGUgQVBJIGZvciByZW5kZXIgYW5kIGh5ZHJhdGVcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGN0eCA9IG51bGwpXG5cdHtcblx0XHRpZihjdHggPT09IG51bGwpIHtcblx0XHRcdGN0eCA9IHRoaXM7XG5cdFx0fVxuXG5cdFx0aC5iaW5kKGN0eCk7XG5cblx0XHRyZXR1cm4gY3R4Ll9fcmVuZGVyKGguYmluZChjdHgpLCB7XG5cdFx0XHRjdHgsXG5cdFx0XHQvLyByZW5kZXI6ICdyZW5kZXInLFxuXHRcdFx0Ly8gY29tcG9uZW50czogKGkpID0+IGN0eC5jaGlsZENvbXBvbmVudHMoKVtpXSxcblx0XHRcdHN0YXRlbWVudCxcblx0XHRcdGxvb3AsXG5cdFx0XHRzbG90LFxuXHRcdFx0ZDogZHluYW1pYyxcblx0XHRcdGM6IGNvbXB1dGVkLFxuXHRcdH0pO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaHlkcmF0ZSA9IGZ1bmN0aW9uKGN0eCA9IG51bGwsIGNvbXBpbGVyID0gbnVsbClcblx0e1xuXHRcdGlmKGN0eCA9PT0gbnVsbCkge1xuXHRcdFx0Y3R4ID0gdGhpcztcblx0XHR9XG5cblx0XHRyZXR1cm4gY3R4Ll9faHlkcmF0ZShjb21waWxlciwge1xuXHRcdFx0Y3R4LFxuXHRcdFx0Ly8gcmVuZGVyOiAnaHlkcmF0ZScsXG5cdFx0XHQvLyBjb21wb25lbnRzOiAoaSkgPT4gY3R4LmNoaWxkQ29tcG9uZW50cygpW2ldLFxuXHRcdFx0c3RhdGVtZW50LFxuXHRcdFx0c2xvdCxcblx0XHRcdGxvb3AsXG5cdFx0XHRkOiBkeW5hbWljLFxuXHRcdFx0YzogY29tcHV0ZWQsXG5cdFx0fSk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cblx0Ly8gQmFzaWMucHJvdG90eXBlLnRlbXBsYXRlQnVpbGRlciA9IGZ1bmN0aW9uKGgsIG9wdHMpXG5cdC8vIHtcblx0Ly8gXHRyZXR1cm4gdGhpc1tgX18keyBvcHRzLnJlbmRlciB9YF0oaCwgb3B0cyk7XG5cdC8vIH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5jb21wb25lbnQgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5nZXRVSUQgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdHJldHVybiBgaHlkci0keyBTaW51b3VzLmNyZWF0ZUhJRChpbmRleCkgfWA7XG5cdH1cblxuXHRCYXNpYy5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfXyhcIm5hbWVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7IH0pO1xuXG5cdHJldHVybiBCYXNpYztcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzaWM7XG4iLCJpbXBvcnQgeyBoLCBocywgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWMoaCwgdGFnLCBvcHRzLCBjaGlsZHJlbilcbntcblx0cmV0dXJuICgpID0+IHtcblx0XHRsZXQgZWwgPSB0YWcoKTtcblx0XHRyZXR1cm4gaChlbCwgb3B0cywgY2hpbGRyZW4pO1xuXHR9O1xuXG59IiwiaW1wb3J0IHsgaCBhcyBocyB9IGZyb20gJ3NpbnVvdXMnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzdHlsZXMsIGNsYXNzZXMsIG9wdGlvbnMsICB9IGZyb20gJy4vJztcbmltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuXG5sZXQgSFRNTFRhZ3MgPSBbXG5cdCdpJywgJ2RpdicsICdzcGFuJywgJ2hyJywgJ2JyJywgJ3N0cm9uZycsICdwcmUnXG5dO1xuXG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbntcblx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcblx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGgoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbntcblx0ZWwgPSBlbC50b0xvd2VyQ2FzZSgpO1xuXHQvLyBlbCA9IGNvbXB1dGVkKCgpID0+ICh0eXBlb2YgZWwgPT09ICdmdW5jdGlvbicgPyBlbCA6IGVsKSk7XG5cblx0Ly8gY29uc29sZS5sb2coJ1sgRkYgXScsIGVsLCB0aGlzKVxuXHRsZXQgZHluYW1pY0F0dHJzID0gZmFsc2U7XG5cblx0b3B0aW9ucyh0aGlzLCBvcHRzKTtcblxuXHQvLyBJZiBIVE1MIHRhZyByZW5kZXJcblx0aWYoSFRNTFRhZ3MuaW5jbHVkZXMoZWwpKSB7XG5cdFx0cmV0dXJuIGhzKGVsLCBvcHRzLCBjaGlsZHJlbik7XG5cdH1cblxuXHRsZXQgY29tcG9uZW50ID0gU2ludW91cy5nZXRDb21wb25lbnQoZWwpO1xuXG5cdC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudClcblx0XG5cdGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG5cdH1cblxuXHRjb21wb25lbnQucGFzc1Nsb3RzKCdkZWZhdWx0JywgY2hpbGRyZW4pO1xuXG5cdHJlZ2lzdGVyQ2hpbGRyZW4odGhpcywgY29tcG9uZW50KTtcblxuXHRyZXR1cm4gY29tcG9uZW50LnJlbmRlcigpO1xufSIsImltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICdAc2ludW91cy9sYXp5JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb21wb25lbnQsIGxheW91dCwgdGltZUJlbmNobWFyayA9ICgpID0+IHt9LCBjYWxsYmFjayA9IG51bGwpIHtcblxuICAgIGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuICAgIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCAoaW5zdGFuY2UpID0+IHtcblxuICAgIFx0dGltZUJlbmNobWFyaygnUmVuZGVyJyk7XG5cblx0XHRsYXlvdXQuYXBwZW5kKGluc3RhbmNlLnJlbmRlcigpKTtcblx0XHRpbnN0YW5jZS5ob29rKCdtb3VudGVkJyk7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHRpbWVCZW5jaG1hcmsoJ1JlbmRlcicpO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9KTtcbn0iLCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb29wKGNvbmRpdGlvbiwgZm4pXG57XG5cdGxldCBkID0gKCkgPT4ge1xuXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xuXG5cdFx0bGV0IGxvb3BfY29uZGl0aW9uID0gdHlwZW9mIGNvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmRpdGlvbigpIDogY29uZGl0aW9uO1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gbG9vcF9jb25kaXRpb24pXG5cdFx0e1xuXHRcdFx0bGV0IGl0ZW0gPSBsb29wX2NvbmRpdGlvbltrZXldO1xuXHRcdFx0cmVzdWx0LnB1c2goZm4oaXRlbSwga2V5KSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRkLl9vYnNlcnZhYmxlID0gdHJ1ZTtcblx0Ly8gZC5fbm9kZSA9IHRydWU7XG5cblx0cmV0dXJuIGQ7XG59IiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBzaW51b3VzT2JzZXJ2YWJsZSwgY29tcHV0ZWQgYXMgc2ludW91c0NvbXB1dGVkIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VPYnNlZXJ2YWJsZShmbilcbntcblx0Zm4uX29ic2VydmFibGUgPSB0cnVlO1xuXHRyZXR1cm4gZm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZCh2LCBiaW5kaW5nID0gZmFsc2UpIHtcblxuXHRsZXQgZDtcblx0XG5cdGlmKGJpbmRpbmcpIHtcblx0XHRkID0gc2ludW91c0NvbXB1dGVkKHYuYmluZCh0aGlzKSk7XG5cdH0gZWxzZSB7XG5cdFx0ZCA9IHNpbnVvdXNDb21wdXRlZCh2KTtcblx0fVxuXG5cdG1ha2VPYnNlZXJ2YWJsZShkKTtcblxuXHRyZXR1cm4gZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmFibGUodiwgYmluZGluZyA9IGZhbHNlKVxue1xuXHRsZXQgZCA9IHNpbnVvdXNPYnNlcnZhYmxlKHYpO1xuXG5cdFxuXHRtYWtlT2JzZWVydmFibGUoZCk7XG5cblx0cmV0dXJuIGQ7XG59IiwiaW1wb3J0IHsgc3R5bGVzLCBjbGFzc2VzLCAgfSBmcm9tICcuLyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wdGlvbnMoY29udGV4dCwgb3B0cylcbntcblx0bGV0IHNob3VsZEhhbmRsZSA9IHtcblx0XHRzdHlsZXM6IGZhbHNlLFxuXHR9O1xuXG5cdGlmKCFvcHRzLnN0YXRpY1N0eWxlKSB7XG5cdFx0b3B0cy5zdGF0aWNTdHlsZSA9IHt9O1xuXHR9IGVsc2Uge1xuXHRcdHNob3VsZEhhbmRsZS5zdHlsZXMgPSB0cnVlO1xuXHR9XG5cblx0aWYoIW9wdHMuZHluYW1pY1N0eWxlKSB7XG5cdFx0b3B0cy5keW5hbWljU3R5bGUgPSBbXTtcblx0fSBlbHNlIHtcblx0XHRzaG91bGRIYW5kbGUuc3R5bGVzID0gdHJ1ZTtcblx0fVxuXG5cdGlmKHNob3VsZEhhbmRsZS5zdHlsZXMpIHtcblx0XHRvcHRzLnN0eWxlID0gc3R5bGVzLmFwcGx5KGNvbnRleHQsIFtvcHRzLnN0YXRpY1N0eWxlXS5jb25jYXQob3B0cy5keW5hbWljU3R5bGUpKVxuXHR9XG5cblx0Ly8gY29uc29sZS53YXJuKGNvbnRleHQsIG9wdHMpXG5cdC8qKlxuXHQgKiBDbGVhclxuXHQgKi9cblx0aWYoIXNob3VsZEhhbmRsZS5zdHlsZXMpIHtcblx0XHRkZWxldGUgb3B0cy5zdGF0aWNTdHlsZTtcblx0XHRkZWxldGUgb3B0cy5keW5hbWljU3R5bGU7XG5cdH1cblxuXHRyZXR1cm4gb3B0cztcbn0iLCJ3aW5kb3cuX1NpbnVvdXNDb21wb25lbnRzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyKG5hbWUsIGNvbXBvbmVudCA9IG51bGwpXG57XG5cdGlmKGNvbXBvbmVudCA9PSBudWxsKSB7XG5cdFx0Y29tcG9uZW50ID0gbmFtZTtcblx0XHRuYW1lID0gbmFtZS5uYW1lO1xuXHR9XG5cblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHR3aW5kb3cuX1NpbnVvdXNDb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsb3QoY29udGV4dCwgaCwgb3B0aW9ucyA9IHt9LCBkZWZhdWx0VmFsdWUpXG57XG5cdGxldCBuYW1lID0gb3B0aW9ucy5uYW1lIHx8ICdkZWZhdWx0Jztcblx0bGV0IHRhZyA9IG9wdGlvbnMudGFnIHx8ICdkaXYnO1xuXHRsZXQgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cblx0aWYoY29udGV4dC5fc2xvdHNbbmFtZV0pIHtcblx0XHR2YWx1ZSA9IGNvbnRleHQuX3Nsb3RzW25hbWVdO1xuXHR9XG5cblx0cmV0dXJuIGgodGFnLCB7fSwgdmFsdWUpO1xufSIsImV4cG9ydCBjbGFzcyBDb25kaXRpb25cbntcblxuXHRjb25zdHJ1Y3Rvcihjb25kaXRpb24pXG5cdHtcblx0XHR0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcblx0XHR0aGlzLnJlc3VsdF8xID0gbnVsbDtcblx0XHR0aGlzLnJlc3VsdF8yID0gbnVsbDtcblx0fVxuXG5cdHNldEZpcnN0UmVzdWx0KGEpXG5cdHtcblx0XHR0aGlzLnJlc3VsdF8xID0gYTtcblx0fVxuXG5cdHNldFNlY29uZFJlc3VsdChhKVxuXHR7XG5cdFx0dGhpcy5yZXN1bHRfMiA9IGE7XG5cdH1cblxuXHRjaGVjaygpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5jb25kaXRpb24oKVxuXHR9XG5cblx0cmVzdWx0KClcblx0e1xuXHRcdHJldHVybiB0aGlzLmNvbmRpdGlvbigpID8gdGhpcy5yZXN1bHRfMSA6IHRoaXMucmVzdWx0XzI7XG5cdH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlbWVudChjb25kaXRpb24pXG57XG5cdGxldCBkID0gKCkgPT4ge1xuXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCAlIDIgIT09IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU3RhdGVtZW50IHNob3VsZCBiZSBvZGQgbnVtYmVyJyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaSArIDFdO1xuXG5cdFx0XHRpZih0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGlmKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZihjb25kaXRpb24pIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIFtcblx0XHRcdGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXRlbWVudCBjb21tZW50Jylcblx0XHRdO1xuXHR9XG5cblx0ZC5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cblx0cmV0dXJuIGQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsdWUodmFsdWUpXG57XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiB2YWx1ZSgpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufSIsIlxuXHRcdGltcG9ydCB7IEJhc2ljIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50Jztcblx0XHRpbXBvcnQgY29tcG9uZW50Q29uZmlnIGZyb20gXCIuL2luZGV4LnNpbj90eXBlPXNjcmlwdFwiO1xuXHRcdFxuXHRcdGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdG1ldGhvZHM6IHt9LFxuXHRcdH0sIGNvbXBvbmVudENvbmZpZyk7XG5cblx0XHRsZXQgaW5zdGFuY2UgPSBmdW5jdGlvbiBQYWdlc0luZGV4KCkge1xuXHRcdFx0QmFzaWMuY2FsbCh0aGlzKTtcblx0XHR9O1xuXHRcdFxuXHRcdC8vIGluaGVyaXQgQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2ljLnByb3RvdHlwZSk7XG5cblx0XHQvLyBjb3JyZWN0IHRoZSBjb25zdHJ1Y3RvciBwb2ludGVyIGJlY2F1c2UgaXQgcG9pbnRzIHRvIEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gaW5zdGFuY2U7XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzID0ge307XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9jb21wb25lbnROYW1lID0gJ1BhZ2VzSW5kZXgnO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kc1trZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19yZW5kZXIgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaCgnZGl2Jywge2lkOiBjdHguZ2V0VUlEKDEyKSx9LCBbaCgndGVzdDInLCB7aWQ6IGN0eC5nZXRVSUQoMTMpLH0sIFtdKV0pO1xuXHRcdFx0fVxuXHRcdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9faHlkcmF0ZSA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCwgZCwgYyB9KSB7XG5cdFx0XHRcdHJldHVybiBoKCdkaXYnLCB7aWQ6IGN0eC5nZXRVSUQoMTIpLH0sIFtoKCd0ZXN0MicsIHtpZDogY3R4LmdldFVJRCgxMyksfSwgW10pXSk7XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHt9IiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgaHlkcmF0aW9uIGZyb20gJ0BzaW51b3VzL2h5ZHJhdGlvbic7XG5pbXBvcnQgcmVuZGVyIGZyb20gJ0BzaW51b3VzL3JlbmRlcic7XG5pbXBvcnQgdGVzdCBmcm9tICcuLi9jb21wb25lbnRzL3Rlc3Quc2luJ1xuaW1wb3J0IHRlc3QyIGZyb20gJy4uL2NvbXBvbmVudHMvdGVzdDIuc2luJ1xuaW1wb3J0IEluZGV4UGFnZSBmcm9tICcuLi9wYWdlcy9pbmRleC5zaW4nXG5pbXBvcnQgdGltZUJlbmNobWFyayBmcm9tICcuL3RpbWUnO1xuXG5cbi8vIGNvbnN0IEluZGV4UGFnZSA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VJbmRleFwiICovICcuLi9wYWdlcy9pbmRleC5zaW4nKVxuXG5cbnZhciBMQVlPVVQ7XG52YXIgUGFnZUluZGV4LCBQYWdlSW5kZXgyO1xuXG5mdW5jdGlvbiBURVNUX1dFQlBBQ0tfQlVJTEQoKVxue1xuXHR0aW1lQmVuY2htYXJrKCdTU1ItQnVpbGQnKTtcblx0U2ludW91cy5yZWdpc3RlckNvbXBvbmVudCh0ZXN0KTtcblx0U2ludW91cy5yZWdpc3RlckNvbXBvbmVudCh0ZXN0Mik7XG5cdHRpbWVCZW5jaG1hcmsoJ1NTUi1CdWlsZCcpO1xufVxuXG4vLyBmdW5jdGlvbiBURVNUX0lOSVQoKVxuLy8ge1xuLy8gXHR0aW1lQmVuY2htYXJrKCdTU1ItSW5pdCcpO1xuLy8gXHRQYWdlSW5kZXggPSBuZXcgSW5kZXhQYWdlKCk7XG4vLyBcdFBhZ2VJbmRleDIgPSBuZXcgSW5kZXhQYWdlKCk7XG4vLyBcdHRpbWVCZW5jaG1hcmsoJ1NTUi1Jbml0Jyk7XG4vLyB9XG5cbmZ1bmN0aW9uIFRFU1RfUkVOREVSKClcbntcblx0cmVuZGVyKEluZGV4UGFnZSwgTEFZT1VULCB0aW1lQmVuY2htYXJrKTtcbn1cblxuZnVuY3Rpb24gQ0xFQVJfSE9PS1MoKVxue1xuXHRcblx0bGV0IGh0bWwgPSBMQVlPVVQuaW5uZXJIVE1MO1xuXHRMQVlPVVQuaW5uZXJIVE1MID0gaHRtbDtcbn1cblxuZnVuY3Rpb24gVEVTVF9IWURSQVRFKClcbntcblx0aHlkcmF0aW9uKEluZGV4UGFnZSwgTEFZT1VULCB0aW1lQmVuY2htYXJrLCAoYykgPT4ge1xuXHRcdGMuaG9vaygnbW91bnRlZCcpO1xuXHR9KTtcbn1cblxuVEVTVF9XRUJQQUNLX0JVSUxEKCk7XG5cbi8vIFRFU1RfSU5JVCgpO1xuXG4vLyByZXR1cm47XG4oZnVuY3Rpb24gbG9hZCgpIHtcblx0TEFZT1VUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXG5cblx0Ly8gTEFZT1VULmlubmVySFRNTCA9ICcnO1xuXHQvLyByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHtcblx0Ly8gVEVTVF9IWURSQVRFKCk7XG5cdC8vIHJldHVybjtcblxuXHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcblx0Ly8gXHRURVNUX1JFTkRFUigpO1xuXHQvLyB9LCAyMDAwKVxuXG5cdFRFU1RfUkVOREVSKCk7XG5cdC8vIGNvbnNvbGUubG9nKExBWU9VVC5pbm5lckhUTUwpXG5cdHJldHVyblxuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXG5cdFx0Q0xFQVJfSE9PS1MoKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0IFRFU1RfSFlEUkFURSgpO1xuXHRcdH0sIDMwMCk7XG5cdH0sIDEwMDApO1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBkID0gMjsiLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==