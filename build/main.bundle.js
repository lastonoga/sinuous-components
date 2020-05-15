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
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sinuous_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sbutton_sin_type_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sbutton.sin?type=script */ "./components/sbutton.sin?type=script");

		
		
		
		let config = Object.assign({
			methods: {},
		}, _sbutton_sin_type_script__WEBPACK_IMPORTED_MODULE_1__["default"]);

		let instance = function Sbutton() {
			_sinuous_component__WEBPACK_IMPORTED_MODULE_0__["Basic"].call(this);
		};
		
		// inherit Basic
		instance.prototype = Object.create(_sinuous_component__WEBPACK_IMPORTED_MODULE_0__["Basic"].prototype);

		// correct the constructor pointer because it points to Basic
		instance.prototype.constructor = instance;
		
		instance.prototype._methods = {};
		
		instance.prototype._componentName = 'Sbutton';
		instance.prototype._shouldHydarate = false;
		instance.prototype.__slots = {"default":[0,0]};

		for(let key in config) {
			if(typeof config[key] === 'function') {
				instance.prototype[key] = config[key];
			}
		}
		
		for(let key in config.methods) {
			instance.prototype[key] = config.methods[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h("div", { staticClass: "button" }, [slot(ctx, h, "default", null, {}, [])]);
;
			}
		
			instance.prototype.__hydrate = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return -1;
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

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
				return h("div", { onclick: ctx.reactive_click, id: ctx.getUID(21) }, [
  () => {
    return `test ${ctx._state.visible()}`;
  },
]);
;
			}
		
			instance.prototype.__hydrate = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h("div", { onclick: ctx.reactive_click, id: ctx.getUID(21), _s: true }, [
  () => {
    return `test ${ctx._state.visible()}`;
  },
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
    id: ctx.getUID(2),
  },
  [
    () => {
      return `test ${ctx._state.s2()}`;
    },
    h("br", {}, []),
    statement(
      ctx._state.s1,
      2,
      (h) => {
        return [
          h("div", { id: ctx.getUID(5) }, [
            h("span", {}, [`static 1`]),
            () => {
              return `[visible] show ${ctx._data.ddd} - ${ctx._state.s3()}`;
            },
            h("span", {}, [`static 2`]),
          ]),
          statement(ctx._data.visible, 2, (h) => {
            return [
              h("span", {}, [`[s1] test`]),
              h(
                "strong",
                { $slots: { default: [`[s1] test 2`] }, id: ctx.getUID(10) },
                []
              ),
            ];
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
    id: ctx.getUID(2),
    _s: true,
  },
  [
    () => {
      return `test ${ctx._state.s2()}`;
    },
    -1,
    statement(
      ctx._state.s1,
      2,
      (h) => {
        return [
          h("div", { id: ctx.getUID(5) }, [
            h("span", {}, [`static 1`]),
            () => {
              return `[visible] show ${ctx._data.ddd} - ${ctx._state.s3()}`;
            },
            h("span", {}, [`static 2`]),
          ]),
          statement(ctx._data.visible, 2, (h) => {
            return [
              h("span", {}, [`[s1] test`]),
              h(
                "strong",
                { $slots: { default: [`[s1] test 2`] }, id: ctx.getUID(10) },
                []
              ),
            ];
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
      // console.log(this, 'mount')
      this.makeIf();
      this._data.timer1 = setInterval(() => {
        this.makeIf();
      }, 5000);
      this._data.timer2 = setInterval(() => {
        // console.log(this.hid, s2)
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
  var nodes = value();

  if (Array.isArray(nodes)) {
    for (var i = 0; i < nodes.length; i++) {
      var child = nodes[i];

      if (typeof child === 'function') {
        child = child();
      } // console.log(parent,  child.size)
      // api.insert(parent, child, children[currentIndex + i]);
      // parent.replaceChild(child, children[currentIndex + i])
      // children[currentIndex + i].replaceWith(child);

    }
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
				return h("div", { id: ctx.getUID(53) }, [
  loop(ctx._state.items, (item, key) => {
    return h(
      "sbutton",
      {
        $slots: {
          default: [
            () => {
              return `Button ${item}`;
            },
          ],
        },
        id: ctx.getUID(54),
      },
      []
    );
  }),
]);
;
			}
		
			instance.prototype.__hydrate = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h("div", { id: ctx.getUID(53) }, [
  loop(ctx._state.items, (item, key) => {
    return h("sbutton", { id: ctx.getUID(54) }, []);
  }),
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },

  state(o) {
    return {
      items: o([])
    };
  },

  computed(o) {
    return {};
  },

  methods: {
    mounted: function () {
      let d = [];

      for (var i = 0; i < 10000; i++) {
        d.push(i);
      }

      this._state.items(d); // console.log(items)
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


var _i = _interopRequireDefault(__webpack_require__(/*! @sinuous/i */ "./packages/i/dist/index.js"));

var _hydration = __webpack_require__(/*! @sinuous/hydration */ "./packages/hydration/dist/index.js");

var _render = _interopRequireDefault(__webpack_require__(/*! @sinuous/render */ "./packages/render/dist/index.js"));

var _test = _interopRequireDefault(__webpack_require__(/*! ../components/test.sin */ "./components/test.sin"));

var _test2 = _interopRequireDefault(__webpack_require__(/*! ../components/test2.sin */ "./components/test2.sin"));

var _sbutton = _interopRequireDefault(__webpack_require__(/*! ../components/sbutton.sin */ "./components/sbutton.sin"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zYnV0dG9uLnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NidXR0b24uc2luP2NlNzkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXN0LnNpbiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rlc3Quc2luPzQzODMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXN0Mi5zaW4iLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXN0Mi5zaW4/YjIwOSIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9jb21waWxlci9zcmMvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Jhc2ljLmpzIiwid2VicGFjazovLy8uLi9zcmMvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2guanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xvb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uLi9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ZhbHVlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaHlkcmF0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnNpbiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4/NDNmZSIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyLXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3QtaW1wb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy90aW1lLmpzIl0sIm5hbWVzIjpbIl8iLCJ5Iiwic2VsZiIsImNsYXNzZXMiLCJvYmoiLCJzdGF0aWNDbGFzc2VzIiwiZHluYW1pYyIsImkiLCJhcmd1bWVudHMiLCJhcmciLCJBcnJheSIsImoiLCJoYW5kbGVDbGFzc09iamVjdCIsImEiLCJ2YWwiLCJzdHlsZXMiLCJjYW1lbFRvUHJvcCIsImhhbmRsZVN0eWxlc09iamVjdCIsIkhJRCIsIkJhc2ljIiwib2JzZXJ2YWJsZSIsImRlZmF1bHQiLCJjb21wdXRlZCIsImNoaWxkcmVuIiwicGFyZW50IiwicHJvcCIsInZhbHVlIiwidHlwZSIsInByb3BzIiwic3RhdGVmdWwiLCJPYmplY3QiLCJjdHgiLCJoIiwic3RhdGVtZW50IiwibG9vcCIsInNsb3QiLCJkIiwiYyIsImNvbXBpbGVyIiwiaFN0YXRlbWVudCIsImhTbG90IiwiaExvb3AiLCJTaW51b3VzIiwiZWwiLCJ0YWciLCJIVE1MVGFncyIsImNoaWxkIiwib3B0cyIsImR5bmFtaWNBdHRycyIsImNvbXBvbmVudCIsInJlZ2lzdGVyQ2hpbGRyZW4iLCJyZXN1bHQiLCJsb29wX2NvbmRpdGlvbiIsImNvbmRpdGlvbiIsIml0ZW0iLCJmbiIsImJpbmRpbmciLCJ2IiwibWFrZU9ic2VlcnZhYmxlIiwic2hvdWxkSGFuZGxlIiwid2luZG93IiwibmFtZSIsImNvbnRleHQiLCJjaGlsZEluZGV4Iiwic2l6ZSIsIm5vZGUiLCJkb2N1bWVudCIsIlNUT1JBR0UiLCJhcGkiLCJub2RlcyIsImJpbmRDaGlsZHJlbiIsImZpbHRlckNoaWxkTm9kZXMiLCJoeWRyYXRlVGFnIiwiYmluZE5vZGUiLCJoeWRyYXRlUHJvcHMiLCJoeWRyYXRlQ2hpbGRyZW4iLCJoeWRyYXRlIiwiaW5pdENvbXBvbmVudCIsImVudHJpZXMiLCJpZCIsImVudHJ5IiwidGltZUJlbmNobWFyayIsImNhbGxiYWNrIiwidHJlZSIsImNvbm5lY3RlZE5vZGUiLCJpbnN0YW5jZSIsInN0YXRlbWVudFNpemUiLCJTaW51b3VzQ29tcG9uZW50cyIsImNyZWF0ZUhJRCIsImNsZWFySElEIiwicmVnaXN0ZXJDb21wb25lbnQiLCJoYXNDb21wb25lbnQiLCJnZXRIeWRyYXRlQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwibW9kdWxlIiwibGF5b3V0IiwiTEFZT1VUIiwiUGFnZUluZGV4IiwiUGFnZUluZGV4MiIsIlRFU1RfV0VCUEFDS19CVUlMRCIsInRlc3QiLCJ0ZXN0MiIsImJ1dHRvbiIsIlRFU1RfUkVOREVSIiwiSW5kZXhQYWdlIiwiQ0xFQVJfSE9PS1MiLCJodG1sIiwiaW5uZXJIVE1MIiwiaG9vayIsIlRFU1RfSFlEUkFURSIsImxvYWQiLCJnZXRFbGVtZW50QnlJZCIsInNldFRpbWVvdXQiLCJ0aW1lcyIsInRpbWUiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQs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QUFTQyxZQUFULEdBQ0E7QUFDQywwQkFBUUwsY0FBUixFQUFtQlIsTUFBbkIsRUFBMkJmLGFBQTNCO0FBQ0E7O0FBRURrQixrQkFBa0IsRyxDQUVsQjtBQUVBOztBQUNBLENBQUMsU0FBU1csSUFBVCxHQUFnQjtBQUNoQmQsUUFBTSxHQUFHOUIsUUFBUSxDQUFDNkMsY0FBVCxDQUF3QixRQUF4QixDQUFULENBRGdCLENBSWhCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBUixhQUFXLEdBYkssQ0FjaEI7QUFDQTs7QUFFQVMsWUFBVSxDQUFDLFlBQU07QUFFaEJQLGVBQVc7QUFFWE8sY0FBVSxDQUFDLFlBQU07QUFDZkgsa0JBQVk7QUFDYixLQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0EsR0FQUyxFQU9QLElBUE8sQ0FBVjtBQVFBLENBekJELEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFETyxJQUFNekUsQ0FBQyxHQUFHLENBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUCxJQUFJNkUsS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBU0MsSUFBVCxDQUFjckQsSUFBZCxFQUNmO0FBQ0MsTUFBSXNELEdBQUcsR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0osS0FBSyxDQUFDcEQsSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDb0QsU0FBSyxDQUFDcEQsSUFBRCxDQUFMLEdBQWNzRCxHQUFkO0FBQ0EsV0FBT0YsS0FBSyxDQUFDcEQsSUFBRCxDQUFaO0FBQ0E7O0FBRUR5RCxTQUFPLENBQUNDLEdBQVIsV0FBb0IxRCxJQUFwQixTQUE4QnNELEdBQUcsR0FBR0YsS0FBSyxDQUFDcEQsSUFBRCxDQUF6QyxFQUFpRCxJQUFqRDtBQUVBLFNBQU9vRCxLQUFLLENBQUNwRCxJQUFELENBQVo7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXHRcdGltcG9ydCBjb21wb25lbnRDb25maWcgZnJvbSBcIi4vc2J1dHRvbi5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XHRcblx0XHRsZXQgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRtZXRob2RzOiB7fSxcblx0XHR9LCBjb21wb25lbnRDb25maWcpO1xuXG5cdFx0bGV0IGluc3RhbmNlID0gZnVuY3Rpb24gU2J1dHRvbigpIHtcblx0XHRcdEJhc2ljLmNhbGwodGhpcyk7XG5cdFx0fTtcblx0XHRcblx0XHQvLyBpbmhlcml0IEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNpYy5wcm90b3R5cGUpO1xuXG5cdFx0Ly8gY29ycmVjdCB0aGUgY29uc3RydWN0b3IgcG9pbnRlciBiZWNhdXNlIGl0IHBvaW50cyB0byBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGluc3RhbmNlO1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kcyA9IHt9O1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fY29tcG9uZW50TmFtZSA9ICdTYnV0dG9uJztcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX3Nob3VsZEh5ZGFyYXRlID0gZmFsc2U7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fc2xvdHMgPSB7XCJkZWZhdWx0XCI6WzAsMF19O1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19yZW5kZXIgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiIH0sIFtzbG90KGN0eCwgaCwgXCJkZWZhdWx0XCIsIG51bGwsIHt9LCBbXSldKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHt9IiwiXG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXHRcdGltcG9ydCBjb21wb25lbnRDb25maWcgZnJvbSBcIi4vdGVzdC5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XHRcblx0XHRsZXQgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRtZXRob2RzOiB7fSxcblx0XHR9LCBjb21wb25lbnRDb25maWcpO1xuXG5cdFx0bGV0IGluc3RhbmNlID0gZnVuY3Rpb24gVGVzdCgpIHtcblx0XHRcdEJhc2ljLmNhbGwodGhpcyk7XG5cdFx0fTtcblx0XHRcblx0XHQvLyBpbmhlcml0IEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNpYy5wcm90b3R5cGUpO1xuXG5cdFx0Ly8gY29ycmVjdCB0aGUgY29uc3RydWN0b3IgcG9pbnRlciBiZWNhdXNlIGl0IHBvaW50cyB0byBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGluc3RhbmNlO1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kcyA9IHt9O1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fY29tcG9uZW50TmFtZSA9ICdUZXN0Jztcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX3Nob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19zbG90cyA9IHt9O1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19yZW5kZXIgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcImRpdlwiLCB7IG9uY2xpY2s6IGN0eC5yZWFjdGl2ZV9jbGljaywgaWQ6IGN0eC5nZXRVSUQoMjEpIH0sIFtcbiAgKCkgPT4ge1xuICAgIHJldHVybiBgdGVzdCAke2N0eC5fc3RhdGUudmlzaWJsZSgpfWA7XG4gIH0sXG5dKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcImRpdlwiLCB7IG9uY2xpY2s6IGN0eC5yZWFjdGl2ZV9jbGljaywgaWQ6IGN0eC5nZXRVSUQoMjEpLCBfczogdHJ1ZSB9LCBbXG4gICgpID0+IHtcbiAgICByZXR1cm4gYHRlc3QgJHtjdHguX3N0YXRlLnZpc2libGUoKX1gO1xuICB9LFxuXSk7XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImltcG9ydCB7IGQgfSBmcm9tICcuLi9zcmMvdGVzdC1pbXBvcnQuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGlja3M6IDFcbiAgICB9O1xuICB9LFxuXG4gIHN0YXRlKG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmlzaWJsZTogbyhkKSxcbiAgICAgIGNsaWNrczI6IG8oe1xuICAgICAgICBhOiAyXG4gICAgICB9KVxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQobykge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wdXRlZDI6IG8oKCkgPT4ge1xuICAgICAgICBsZXQgayA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGQgaW4gWzEsIDIsIDNdKSB7XG4gICAgICAgICAgay5wdXNoKHRoaXMuX3N0YXRlLnZpc2libGUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGUudmlzaWJsZSgpICogMiAqIDU7XG4gICAgICB9KVxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHRoaXMuX2RhdGEuY2xpY2tzKys7IC8vIGFsZXJ0KGNsaWNrcylcbiAgICB9LFxuICAgIHJlYWN0aXZlX2NsaWNrOiBmdW5jdGlvbiAoZXZlbnQyKSB7XG4gICAgICB0aGlzLl9zdGF0ZS52aXNpYmxlKHRoaXMuX3N0YXRlLnZpc2libGUoKSArIDEpO1xuICAgIH1cbiAgfVxufTsiLCJcblx0XHRpbXBvcnQgeyBCYXNpYyB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5cdFx0aW1wb3J0IGNvbXBvbmVudENvbmZpZyBmcm9tIFwiLi90ZXN0Mi5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XHRcblx0XHRsZXQgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRtZXRob2RzOiB7fSxcblx0XHR9LCBjb21wb25lbnRDb25maWcpO1xuXG5cdFx0bGV0IGluc3RhbmNlID0gZnVuY3Rpb24gVGVzdDIoKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnVGVzdDInO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3Nsb3RzID0ge1wiZGVmYXVsdFwiOlswLDVdLFwiZm9vdGVyXCI6WzAsN119O1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19yZW5kZXIgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcbiAgXCJkaXZcIixcbiAge1xuICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgIHJldHVybiBhbGVydCgxKTtcbiAgICB9LFxuICAgIGR5bmFtaWNTdHlsZTogeyBwYWRkaW5nVG9wOiBjdHguX3N0YXRlLnMyIH0sXG4gICAgaWQ6IGN0eC5nZXRVSUQoMiksXG4gIH0sXG4gIFtcbiAgICAoKSA9PiB7XG4gICAgICByZXR1cm4gYHRlc3QgJHtjdHguX3N0YXRlLnMyKCl9YDtcbiAgICB9LFxuICAgIGgoXCJiclwiLCB7fSwgW10pLFxuICAgIHN0YXRlbWVudChcbiAgICAgIGN0eC5fc3RhdGUuczEsXG4gICAgICAyLFxuICAgICAgKGgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBoKFwiZGl2XCIsIHsgaWQ6IGN0eC5nZXRVSUQoNSkgfSwgW1xuICAgICAgICAgICAgaChcInNwYW5cIiwge30sIFtgc3RhdGljIDFgXSksXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBgW3Zpc2libGVdIHNob3cgJHtjdHguX2RhdGEuZGRkfSAtICR7Y3R4Ll9zdGF0ZS5zMygpfWA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaChcInNwYW5cIiwge30sIFtgc3RhdGljIDJgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgc3RhdGVtZW50KGN0eC5fZGF0YS52aXNpYmxlLCAyLCAoaCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgaChcInNwYW5cIiwge30sIFtgW3MxXSB0ZXN0YF0pLFxuICAgICAgICAgICAgICBoKFxuICAgICAgICAgICAgICAgIFwic3Ryb25nXCIsXG4gICAgICAgICAgICAgICAgeyAkc2xvdHM6IHsgZGVmYXVsdDogW2BbczFdIHRlc3QgMmBdIH0sIGlkOiBjdHguZ2V0VUlEKDEwKSB9LFxuICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICBdO1xuICAgICAgfSxcbiAgICAgIGN0eC5fc3RhdGUuczMsXG4gICAgICAxLFxuICAgICAgKGgpID0+IHtcbiAgICAgICAgcmV0dXJuIGgoXCJkaXZcIiwge30sIFtgW3MzXSB0ZXN0YF0pO1xuICAgICAgfVxuICAgICksXG4gICAgW2goXCJkaXZcIiwge30sIFtgW25vbmVdIGhpZGVgXSldLFxuICAgIHNsb3QoY3R4LCBoLCBcImRlZmF1bHRcIiwgbnVsbCwge30sIFtgZGVmYXVsdCBzbG90IHZhbHVlYF0pLFxuICAgIGgoXCJkaXZcIiwge30sIFtgYWZ0ZXItb25jZS1pZmBdKSxcbiAgICBzbG90KFxuICAgICAgY3R4LFxuICAgICAgaCxcbiAgICAgIFwiZm9vdGVyXCIsXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBjbGFzczogXCJmb290ZXJcIiwgc3R5bGU6IFwiYmFja2dyb3VuZDogI2VmZWZlZjtcIiB9LFxuICAgICAgW2Bmb290ZXIgc2xvdCB2YWx1ZWBdXG4gICAgKSxcbiAgXVxuKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcbiAgXCJkaXZcIixcbiAge1xuICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgIHJldHVybiBhbGVydCgxKTtcbiAgICB9LFxuICAgIGR5bmFtaWNTdHlsZTogeyBwYWRkaW5nVG9wOiBjdHguX3N0YXRlLnMyIH0sXG4gICAgaWQ6IGN0eC5nZXRVSUQoMiksXG4gICAgX3M6IHRydWUsXG4gIH0sXG4gIFtcbiAgICAoKSA9PiB7XG4gICAgICByZXR1cm4gYHRlc3QgJHtjdHguX3N0YXRlLnMyKCl9YDtcbiAgICB9LFxuICAgIC0xLFxuICAgIHN0YXRlbWVudChcbiAgICAgIGN0eC5fc3RhdGUuczEsXG4gICAgICAyLFxuICAgICAgKGgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBoKFwiZGl2XCIsIHsgaWQ6IGN0eC5nZXRVSUQoNSkgfSwgW1xuICAgICAgICAgICAgaChcInNwYW5cIiwge30sIFtgc3RhdGljIDFgXSksXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBgW3Zpc2libGVdIHNob3cgJHtjdHguX2RhdGEuZGRkfSAtICR7Y3R4Ll9zdGF0ZS5zMygpfWA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaChcInNwYW5cIiwge30sIFtgc3RhdGljIDJgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgc3RhdGVtZW50KGN0eC5fZGF0YS52aXNpYmxlLCAyLCAoaCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgaChcInNwYW5cIiwge30sIFtgW3MxXSB0ZXN0YF0pLFxuICAgICAgICAgICAgICBoKFxuICAgICAgICAgICAgICAgIFwic3Ryb25nXCIsXG4gICAgICAgICAgICAgICAgeyAkc2xvdHM6IHsgZGVmYXVsdDogW2BbczFdIHRlc3QgMmBdIH0sIGlkOiBjdHguZ2V0VUlEKDEwKSB9LFxuICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICBdO1xuICAgICAgfSxcbiAgICAgIGN0eC5fc3RhdGUuczMsXG4gICAgICAxLFxuICAgICAgKGgpID0+IHtcbiAgICAgICAgcmV0dXJuIGgoXCJkaXZcIiwge30sIFtgW3MzXSB0ZXN0YF0pO1xuICAgICAgfVxuICAgICksXG4gICAgLTEsXG4gICAgLTEsXG4gICAgLTEsXG4gICAgLTEsXG4gIF1cbik7XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGRkOiAnW3Rlc3QgdmFyaWFibGUgZGRkXScsXG4gICAgICB0aW1lcjE6IG51bGwsXG4gICAgICB0aW1lcjI6IG51bGwsXG4gICAgICB2aXNpYmxlOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICBzdGF0ZShvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHMxOiBvKHRydWUpLFxuICAgICAgczI6IG8oMTApLFxuICAgICAgczM6IG8oZmFsc2UpXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZChvKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBtYWtlSWY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdNYWtlJyk7XG4gICAgICB0aGlzLl9zdGF0ZS5zMSh0cnVlKTtcbiAgICAgIHRoaXMuX3N0YXRlLnMzKHRydWUpOyAvLyBjb25zb2xlLmxvZyhzMSwgczMpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fc3RhdGUuczEoZmFsc2UpO1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMyh0cnVlKTsgLy8gY29uc29sZS5sb2coczEsIHMzKTtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3N0YXRlLnMxKGZhbHNlKTtcbiAgICAgICAgdGhpcy5fc3RhdGUuczMoZmFsc2UpOyAvLyBjb25zb2xlLmxvZyhzMSwgczMpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fc3RhdGUuczEodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3N0YXRlLnMzKGZhbHNlKTsgLy8gY29uc29sZS5sb2coczEsIHMzKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcywgJ21vdW50JylcbiAgICAgIHRoaXMubWFrZUlmKCk7XG4gICAgICB0aGlzLl9kYXRhLnRpbWVyMSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5tYWtlSWYoKTtcbiAgICAgIH0sIDUwMDApO1xuICAgICAgdGhpcy5fZGF0YS50aW1lcjIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaGlkLCBzMilcbiAgICAgICAgdGhpcy5fc3RhdGUuczIodGhpcy5fc3RhdGUuczIoKSArIDIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9LFxuICAgIHVubW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5lcnJvcignY2xlYXInLCB0aW1lcjEsIHRpbWVyMilcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fZGF0YS50aW1lcjEpO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9kYXRhLnRpbWVyMik7XG4gICAgfVxuICB9XG59OyIsImV4cG9ydCBjb25zdCBfID0gLTE7XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5cblxuZnVuY3Rpb24gY2FtZWxUb1Byb3Aocylcbntcblx0cmV0dXJuIHNcblx0XHQucmVwbGFjZSgvXFwuPyhbQS1aXSspL2csICh4LCB5KSA9PiBgLSR7eS50b0xvd2VyQ2FzZSgpfWApXG5cdFx0LnJlcGxhY2UoL14tLywgJycpO1xufVxuXG5mdW5jdGlvbiBvbmx5VW5pcXVlKHZhbHVlLCBpbmRleCwgc2VsZikgeyBcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDbGFzc09iamVjdChvYmopXG57XG5cdGxldCBjbGFzc2VzID0gW107XG5cblx0Zm9yIChsZXQga2V5IGluIG9iaikge1xuXHRcdGlmKHZhbHVlKG9ialtrZXldKSkge1xuXHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNsYXNzZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2VzKHN0YXRpY0NsYXNzZXMgPSBbXSwgZHluYW1pYyA9IHt9KVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdFxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYXJnLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKHZhbHVlKGFyZ1tqXSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYodHlwZW9mIGFyZyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KFxuXHRcdFx0XHRcdGhhbmRsZUNsYXNzT2JqZWN0KGFyZylcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSBpZih0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdChcblx0XHRcdFx0XHRoYW5kbGVDbGFzc09iamVjdCh2YWx1ZShhcmcpKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y2xhc3NlcyA9IGNsYXNzZXMuZmlsdGVyKCh2LCBpLCBhKSA9PiBhLmluZGV4T2YodikgPT09IGkpO1xuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTdHlsZXNPYmplY3Qoc3R5bGVzLCBvYmopXG57XG5cdGZvciAobGV0IGtleSBpbiBvYmopIHtcblx0XHRsZXQgdmFsID0gdmFsdWUob2JqW2tleV0pO1xuXHRcdGlmKHZhbCAhPT0gbnVsbCkge1xuXHRcdFx0c3R5bGVzW2NhbWVsVG9Qcm9wKGtleSldID0gdmFsO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXMoKVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSB7fTtcblx0XHRcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgYXJndW1lbnRzW2ldKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlU3R5bGVzT2JqZWN0KHN0eWxlcywgdmFsdWUoYXJndW1lbnRzW2ldKSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc3R5bGVzO1xuXHR9XG59IiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5cblxuaW1wb3J0IHsgaHlkcmF0ZSwgZGh0bWwgfSBmcm9tICdzaW51b3VzL2h5ZHJhdGUnO1xuXG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCB9IGZyb20gJy4vb2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IGxvb3AgYXMgaExvb3AsIHNsb3QgYXMgaFNsb3QsIHN0YXRlbWVudCBhcyBoU3RhdGVtZW50IH0gZnJvbSAnQHNpbnVvdXMvaHlkcmF0aW9uJztcbmltcG9ydCB7IHN0eWxlcywgY2xhc3Nlcywgc3RhdGVtZW50LCBkeW5hbWljLCBsb29wLCBzbG90IH0gZnJvbSAnLi9pbmRleCc7XG5cbmltcG9ydCB7IGggfSBmcm9tICcuLyc7XG5cbi8vIGltcG9ydCB7IHJlbmRlciwgaHlkcmF0ZSB9IGZyb20gJy4vdGVtcGxhdGUnO1xubGV0IEhJRCA9IDA7XG5cblxudmFyIEJhc2ljID0gZnVuY3Rpb24gKCkge1xuXG5cdGZ1bmN0aW9uIEJhc2ljKClcblx0e1xuXHRcdHRoaXMuX2lzQ29tcG9uZW50ID0gdHJ1ZTtcblx0XHR0aGlzLmhpZCA9ICsrSElEO1xuXG5cdFx0dGhpcy5fcHJvcHMgPSB0aGlzLnByb3BzKCk7XG5cdFx0dGhpcy5fcGFzc2VkUHJvcHMgPSB7fTtcblxuXHRcdC8vIExvY2FsIGRhdGFcblx0XHR0aGlzLl9kYXRhID0gdGhpcy5kYXRhKCk7XG5cdFx0Ly8gU3RhdGVmdWwgZGF0YVxuXHRcdHRoaXMuX3N0YXRlID0gdGhpcy5zdGF0ZShvYnNlcnZhYmxlKTtcblxuXHRcdHRoaXMuX3Nsb3RzID0ge1xuXHRcdFx0ZGVmYXVsdDogW10sXG5cdFx0fTtcblxuXHRcdHRoaXMuX2NvbXB1dGVkID0gdGhpcy5jb21wdXRlZChjb21wdXRlZCk7XG5cdFx0dGhpcy5fY2hpbGRyZW4gPSBbXTtcblxuXG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblx0XHQvLyB0aGlzLl9zdGF0ZSA9IFtdO1xuXHRcdC8vIHRoaXMuX3N0YXRlID0gW107XG5cdFx0Ly8gdGhpcy5fc3RhdGUgPSBbXTtcblxuXHRcdC8vIERlZmF1bHQgcHJvcCB2YWx1ZXMgXG5cdFx0dGhpcy5pbml0UHJvcHMoKTtcblxuXHRcdC8vIHRoaXMuaW5pdFRlbXBsYXRlKCk7XG5cblx0XHR0aGlzLnNldENoaWxkcmVuKCk7XG5cdFx0dGhpcy5zZXRQYXJlbnQoKTtcblxuXHRcdHRoaXMuYmluZENvbnRleHQoKTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmJpbmRDb250ZXh0ID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fY29tcHV0ZWQpIHtcblx0XHRcdHRoaXMuX2NvbXB1dGVkW2tleV0gPSB0aGlzLl9jb21wdXRlZFtrZXldLmJpbmQodGhpcyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBDb25maWdcblx0ICovXG5cblx0Ly8gQmFzaWMucHJvdG90eXBlLnNldE1ldGhvZHMgPSBmdW5jdGlvbihtZXRob2RzID0ge30pXG5cdC8vIHtcblx0Ly8gXHR0aGlzLl9tZXRob2RzID0gbWV0aG9kcztcblx0Ly8gfVxuXG5cdC8qKlxuXHQgKiBIaWVyYXJjaHlcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLnNldENoaWxkcmVuID0gZnVuY3Rpb24oY2hpbGRyZW4gPSBbXSlcblx0e1xuXHRcdHRoaXMuX2NoaWxkcmVuID0gY2hpbGRyZW47XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5hZGRDaGlsZHJlbiA9IGZ1bmN0aW9uKGNoaWxkKVxuXHR7XG5cdFx0dGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5zZXRQYXJlbnQgPSBmdW5jdGlvbihwYXJlbnQgPSBudWxsKVxuXHR7XG5cdFx0dGhpcy5fcGFyZW50ID0gcGFyZW50O1xuXHR9XG5cdC8qKlxuXHQgKiBQcm9wc1xuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUucHJvcHMgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5pbml0UHJvcHMgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLl9wcm9wcylcblx0XHR7XG5cdFx0XHRsZXQgcHJvcCA9IHRoaXMuX3Byb3BzW2tleV07XG5cdFx0XHRsZXQgdmFsdWUgPSBudWxsO1xuXHRcdFx0bGV0IHR5cGUgPSBudWxsO1xuXG5cdFx0XHRpZih0eXBlb2YgcHJvcCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHQvLyB0eXBlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWx1ZSA9IHByb3AuZGVmYXVsdCgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9kYXRhW2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5wYXNzU2xvdHMgPSBmdW5jdGlvbihuYW1lLCBzbG90cylcblx0e1xuXHRcdHRoaXMuX3Nsb3RzW25hbWVdID0gc2xvdHM7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5wYXNzUHJvcHMgPSBmdW5jdGlvbihwcm9wcylcblx0e1xuXHRcdC8vIGlmKHR5cGVvZiB0aGlzLl9wYXNzZWRQcm9wc1tjb21wb25lbnQuaGlkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHQvLyBcdHRoaXMuX3Bhc3NlZFByb3BzW2NvbXBvbmVudC5oaWRdID0ge307XG5cdFx0Ly8gfVxuXG5cdFx0Zm9yKGxldCBrZXkgaW4gcHJvcHMpXG5cdFx0e1xuXHRcdFx0aWYocHJvcHNba2V5XS5fb2JzZXJ2YWJsZSkge1xuXHRcdFx0XHR0aGlzLl9pc1N0YXRlZnVsID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fZGF0YVtrZXldID0gcHJvcHNba2V5XTtcblx0XHRcdC8vIGlmKHR5cGVvZiB0aGlzLl9kYXRhW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHQvLyBcdHRocm93IG5ldyBFcnJvcihgW1NpbnVvdXNdIENvbXBvbmVudCAkeyB0aGlzLm5hbWUgfSBhbHJlYWR5IGhhcyAkeyBrZXkgfSBwcm9wZXJ0eWApXG5cdFx0XHQvLyB9IGVsc2Uge1xuXHRcdFx0Ly8gXHR0aGlzLl9kYXRhW2tleV0gPSBwcm9wc1trZXldO1xuXHRcdFx0Ly8gfVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDbGllbnQgc2lkZSBoYW5kbGVyIGFmdGVyIFNTUiAoaHlkcmF0aW9uKVxuXHQgKi9cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5oYXNTdGF0ZWZ1bGxEYXRhID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0bGV0IHN0YXRlZnVsID0gZmFsc2U7XG5cblx0XHRmb3IobGV0IGhpZCBpbiB0aGlzLl9wYXNzZWRQcm9wcykge1xuXHRcdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fcGFzc2VkUHJvcHNbaGlkXSkge1xuXHRcdFx0XHRpZih0aGlzLl9wYXNzZWRQcm9wc1toaWRdW2tleV0pIHtcblx0XHRcdFx0XHRzdGF0ZWZ1bCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoc3RhdGVmdWwpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN0YXRlZnVsICYmIHRoaXMuX2lzU3RhdGVmdWw7XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5oYXNTdGF0ZWxlc3NEYXRhID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2RhdGEpLmxlbmd0aCA+IDA7XG5cdH1cblxuXHQvKipcblx0ICogTG9jYWwgY29tcG9uZW50IGRhdGFcblx0ICovXG5cblx0QmFzaWMucHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXG5cdEJhc2ljLnByb3RvdHlwZS5jb21wdXRlZCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGF0ZWZ1bCBkYXRhXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5zdGF0ZSA9IGZ1bmN0aW9uKG8pXG5cdHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHQvKipcblx0ICogMS4gQ3JlYXRlIGNoaWxkIGNvbXBvbmVudHMgKGRpZmZlcmVudCBjb250ZXh0KVxuXHQgKiAyLiBQYXNzIHByb3BzXG5cdCAqIDMuIFJlbmRlclxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUudGVtcGxhdGUgPSBmdW5jdGlvbigpIHt9XG5cblx0QmFzaWMucHJvdG90eXBlLmNoaWxkQ29tcG9uZW50cyA9IGZ1bmN0aW9uKCkge31cblxuXHQvKipcblx0ICogIExpZmUgY3ljbGUgaG9va3Ncblx0ICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXG5cdEJhc2ljLnByb3RvdHlwZS5ob29rID0gZnVuY3Rpb24odHlwZSA9ICdtb3VudGVkJylcblx0e1xuXHRcdGlmKHRoaXNbdHlwZV0pIHtcblx0XHRcdHRoaXNbdHlwZV0uY2FsbCh0aGlzKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLl9jaGlsZHJlbltpXS5ob29rKHR5cGUpO1xuXHRcdH1cblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLm1vdW50ZWQgPSBmdW5jdGlvbigpIHt9XG5cblx0QmFzaWMucHJvdG90eXBlLnVubW91bnRlZCA9IGZ1bmN0aW9uKCkge31cblxuXHQvKipcblx0ICogUHJpdmF0ZSBBUEkgZm9yIHJlbmRlciBhbmQgaHlkcmF0ZVxuXHQgKiBAdHlwZSB7W3R5cGVdfVxuXHQgKi9cblxuXHRCYXNpYy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oY3R4ID0gbnVsbClcblx0e1xuXHRcdGlmKGN0eCA9PT0gbnVsbCkge1xuXHRcdFx0Y3R4ID0gdGhpcztcblx0XHR9XG5cblx0XHRoLmJpbmQoY3R4KTtcblxuXHRcdHJldHVybiBjdHguX19yZW5kZXIoaC5iaW5kKGN0eCksIHtcblx0XHRcdGN0eCxcblx0XHRcdHN0YXRlbWVudCxcblx0XHRcdGxvb3AsXG5cdFx0XHRzbG90LFxuXHRcdFx0ZDogZHluYW1pYyxcblx0XHRcdGM6IGNvbXB1dGVkLFxuXHRcdH0pO1xuXHR9XG5cblxuXHRCYXNpYy5wcm90b3R5cGUuaHlkcmF0ZSA9IGZ1bmN0aW9uKGN0eCA9IG51bGwsIGNvbXBpbGVyID0gbnVsbClcblx0e1xuXHRcdGlmKGN0eCA9PT0gbnVsbCkge1xuXHRcdFx0Y3R4ID0gdGhpcztcblx0XHR9XG5cblx0XHRyZXR1cm4gY3R4Ll9faHlkcmF0ZShjb21waWxlciwge1xuXHRcdFx0Y3R4LFxuXHRcdFx0c3RhdGVtZW50OiBoU3RhdGVtZW50LFxuXHRcdFx0c2xvdDogaFNsb3QsXG5cdFx0XHRsb29wOiBoTG9vcCxcblx0XHRcdGQ6IGR5bmFtaWMsXG5cdFx0XHRjOiBjb21wdXRlZCxcblx0XHR9KTtcblx0fVxuXG5cblx0QmFzaWMucHJvdG90eXBlLnRlbXBsYXRlID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblxuXHQvLyBCYXNpYy5wcm90b3R5cGUudGVtcGxhdGVCdWlsZGVyID0gZnVuY3Rpb24oaCwgb3B0cylcblx0Ly8ge1xuXHQvLyBcdHJldHVybiB0aGlzW2BfXyR7IG9wdHMucmVuZGVyIH1gXShoLCBvcHRzKTtcblx0Ly8gfVxuXG5cblx0QmFzaWMucHJvdG90eXBlLmNvbXBvbmVudCA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0QmFzaWMucHJvdG90eXBlLmdldFVJRCA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0cmV0dXJuIGBoeWRyLSR7IFNpbnVvdXMuY3JlYXRlSElEKGluZGV4KSB9YDtcblx0fVxuXG5cdEJhc2ljLnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKFwibmFtZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTsgfSk7XG5cblx0cmV0dXJuIEJhc2ljO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNpYztcbiIsImltcG9ydCB7IGgsIGhzLCBhcGkgfSBmcm9tICdzaW51b3VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYyhoLCB0YWcsIG9wdHMsIGNoaWxkcmVuKVxue1xuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdGxldCBlbCA9IHRhZygpO1xuXHRcdHJldHVybiBoKGVsLCBvcHRzLCBjaGlsZHJlbik7XG5cdH07XG5cbn0iLCJpbXBvcnQgeyBoIGFzIGhzIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcbmltcG9ydCB7IHN0eWxlcywgY2xhc3Nlcywgb3B0aW9ucywgIH0gZnJvbSAnLi8nO1xuaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5cbmxldCBIVE1MVGFncyA9IFtcblx0J2knLCAnZGl2JywgJ3NwYW4nLCAnaHInLCAnYnInLCAnc3Ryb25nJywgJ3ByZSdcbl07XG5cblxuZnVuY3Rpb24gcmVnaXN0ZXJDaGlsZHJlbihwYXJlbnQsIGNoaWxkKVxue1xuXHRwYXJlbnQuYWRkQ2hpbGRyZW4oY2hpbGQpO1xuXHRjaGlsZC5zZXRQYXJlbnQocGFyZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaChlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxue1xuXHRlbCA9IGVsLnRvTG93ZXJDYXNlKCk7XG5cdC8vIGVsID0gY29tcHV0ZWQoKCkgPT4gKHR5cGVvZiBlbCA9PT0gJ2Z1bmN0aW9uJyA/IGVsIDogZWwpKTtcblxuXHQvLyBjb25zb2xlLmxvZygnWyBGRiBdJywgZWwsIHRoaXMpXG5cdGxldCBkeW5hbWljQXR0cnMgPSBmYWxzZTtcblxuXHRvcHRpb25zKHRoaXMsIG9wdHMpO1xuXG5cdC8vIElmIEhUTUwgdGFnIHJlbmRlclxuXHRpZihIVE1MVGFncy5pbmNsdWRlcyhlbCkpIHtcblx0XHRyZXR1cm4gaHMoZWwsIG9wdHMsIGNoaWxkcmVuKTtcblx0fVxuXG5cdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldENvbXBvbmVudChlbCk7XG5cblx0Ly8gY29uc29sZS5sb2coY29tcG9uZW50KVxuXHRcblx0aWYodHlwZW9mIG9wdHMucHJvcHMgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0Y29tcG9uZW50LnBhc3NQcm9wcyhvcHRzLnByb3BzKTtcblx0fVxuXG5cdGZvcihsZXQga2V5IGluIG9wdHMuJHNsb3RzKSB7XG5cdFx0Y29tcG9uZW50LnBhc3NTbG90cyhrZXksIG9wdHMuJHNsb3RzW2tleV0pO1x0XG5cdH1cblxuXHRyZWdpc3RlckNoaWxkcmVuKHRoaXMsIGNvbXBvbmVudCk7XG5cblx0cmV0dXJuIGNvbXBvbmVudC5yZW5kZXIoKTtcbn0iLCJpbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnQHNpbnVvdXMvbGF6eSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29tcG9uZW50LCBsYXlvdXQsIHRpbWVCZW5jaG1hcmsgPSAoKSA9PiB7fSwgY2FsbGJhY2sgPSBudWxsKSB7XG5cbiAgICBsYXlvdXQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgKGluc3RhbmNlKSA9PiB7XG5cbiAgICBcdHRpbWVCZW5jaG1hcmsoJ1JlbmRlcicpO1xuXG5cdFx0bGF5b3V0LmFwcGVuZChpbnN0YW5jZS5yZW5kZXIoKSk7XG5cdFx0aW5zdGFuY2UuaG9vaygnbW91bnRlZCcpO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHR0aW1lQmVuY2htYXJrKCdSZW5kZXInKTtcblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fSk7XG59IiwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9vcChjb25kaXRpb24sIGZuKVxue1xuXHRsZXQgZCA9ICgpID0+IHtcblxuXHRcdGxldCByZXN1bHQgPSBbXTtcblxuXHRcdGxldCBsb29wX2NvbmRpdGlvbiA9IHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicgPyBjb25kaXRpb24oKSA6IGNvbmRpdGlvbjtcblxuXHRcdGZvcihsZXQga2V5IGluIGxvb3BfY29uZGl0aW9uKVxuXHRcdHtcblx0XHRcdGxldCBpdGVtID0gbG9vcF9jb25kaXRpb25ba2V5XTtcblx0XHRcdHJlc3VsdC5wdXNoKGZuKGl0ZW0sIGtleSkpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZC5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cdC8vIGQuX25vZGUgPSB0cnVlO1xuXG5cdHJldHVybiBkO1xufSIsImltcG9ydCB7IG9ic2VydmFibGUgYXMgc2ludW91c09ic2VydmFibGUsIGNvbXB1dGVkIGFzIHNpbnVvdXNDb21wdXRlZCB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlT2JzZWVydmFibGUoZm4pXG57XG5cdGZuLl9vYnNlcnZhYmxlID0gdHJ1ZTtcblx0cmV0dXJuIGZuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQodiwgYmluZGluZyA9IGZhbHNlKSB7XG5cblx0bGV0IGQ7XG5cdFxuXHRpZihiaW5kaW5nKSB7XG5cdFx0ZCA9IHNpbnVvdXNDb21wdXRlZCh2LmJpbmQodGhpcykpO1xuXHR9IGVsc2Uge1xuXHRcdGQgPSBzaW51b3VzQ29tcHV0ZWQodik7XG5cdH1cblxuXHRtYWtlT2JzZWVydmFibGUoZCk7XG5cblx0cmV0dXJuIGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZhYmxlKHYsIGJpbmRpbmcgPSBmYWxzZSlcbntcblx0bGV0IGQgPSBzaW51b3VzT2JzZXJ2YWJsZSh2KTtcblxuXHRcblx0bWFrZU9ic2VlcnZhYmxlKGQpO1xuXG5cdHJldHVybiBkO1xufSIsImltcG9ydCB7IHN0eWxlcywgY2xhc3NlcywgIH0gZnJvbSAnLi8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcHRpb25zKGNvbnRleHQsIG9wdHMpXG57XG5cdGxldCBzaG91bGRIYW5kbGUgPSB7XG5cdFx0c3R5bGVzOiBmYWxzZSxcblx0fTtcblxuXHRpZighb3B0cy5zdGF0aWNTdHlsZSkge1xuXHRcdG9wdHMuc3RhdGljU3R5bGUgPSB7fTtcblx0fSBlbHNlIHtcblx0XHRzaG91bGRIYW5kbGUuc3R5bGVzID0gdHJ1ZTtcblx0fVxuXG5cdGlmKCFvcHRzLmR5bmFtaWNTdHlsZSkge1xuXHRcdG9wdHMuZHluYW1pY1N0eWxlID0gW107XG5cdH0gZWxzZSB7XG5cdFx0c2hvdWxkSGFuZGxlLnN0eWxlcyA9IHRydWU7XG5cdH1cblxuXHRpZihzaG91bGRIYW5kbGUuc3R5bGVzKSB7XG5cdFx0b3B0cy5zdHlsZSA9IHN0eWxlcy5hcHBseShjb250ZXh0LCBbb3B0cy5zdGF0aWNTdHlsZV0uY29uY2F0KG9wdHMuZHluYW1pY1N0eWxlKSlcblx0fVxuXG5cdC8vIGNvbnNvbGUud2Fybihjb250ZXh0LCBvcHRzKVxuXHQvKipcblx0ICogQ2xlYXJcblx0ICovXG5cdGlmKCFzaG91bGRIYW5kbGUuc3R5bGVzKSB7XG5cdFx0ZGVsZXRlIG9wdHMuc3RhdGljU3R5bGU7XG5cdFx0ZGVsZXRlIG9wdHMuZHluYW1pY1N0eWxlO1xuXHR9XG5cblx0cmV0dXJuIG9wdHM7XG59Iiwid2luZG93Ll9TaW51b3VzQ29tcG9uZW50cyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlcihuYW1lLCBjb21wb25lbnQgPSBudWxsKVxue1xuXHRpZihjb21wb25lbnQgPT0gbnVsbCkge1xuXHRcdGNvbXBvbmVudCA9IG5hbWU7XG5cdFx0bmFtZSA9IG5hbWUubmFtZTtcblx0fVxuXG5cdG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0d2luZG93Ll9TaW51b3VzQ29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbG90KClcbntcblx0XG59IiwiaW1wb3J0IHsgaCB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlbWVudCgpXG57XG5cdGxldCBkID0gKCkgPT4ge1xuXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCAlIDMgIT09IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU3RhdGVtZW50IHNob3VsZCBiZSBvZGQgbnVtYmVyJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xuXG5cdFx0Ly8gdmFsdWVcblx0XHRsZXQgc3RhdGVtZW50U2l6ZSA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRsZXQgc2l6ZSA9IGFyZ3VtZW50c1tpICsgMV07XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaSArIDJdO1xuXHRcdFx0bGV0IG5vZGUgPSBudWxsO1xuXG5cdFx0XHRzdGF0ZW1lbnRTaXplICs9IHNpemU7XG5cblx0XHRcdGlmKHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aWYoY29uZGl0aW9uKCkpIHtcblx0XHRcdFx0XHRub2RlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKGNvbmRpdGlvbikge1xuXHRcdFx0XHRcdG5vZGUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb25zb2xlLndhcm4oaSwgc2l6ZSwgbm9kZSk7XG5cdFx0XHQvLyBQYXNzIGZhaWxlZCBzdGV0ZW1lbnQgY29uZGl0aW9uXG5cdFx0XHQvLyBOb3JtaWxpemUgaW5kZXggdGhhdCB3aWxsIGJlIHVzZWQgaW4gcmVwbGFjaW5nIHBsYWNlaG9sZGVyIChiZWxvdylcblx0XHRcdGlmKG5vZGUgPT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFub2RlLl9vYnNlcnZhYmxlKSB7XG5cdFx0XHRcdG5vZGUgPSBub2RlKGgpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gcmVwbGFjZSBwbGFjZWhvbGRlciB3aXRoIG5vZGVcblx0XHRcdC8vIEFuZCBjb3JyZWN0IGluZGV4XG5cdFx0XHRpZihzaXplID4gMSkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdC8vIGlmKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGVbal0pO1xuXHRcdFx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gXHRyZXN1bHQucHVzaChqID09IDAgPyBub2RlIDogLTEpO1xuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcblx0XHRyZXR1cm4ge1xuXHRcdFx0bm9kZXM6IHJlc3VsdCxcblx0XHRcdHNpemU6IHN0YXRlbWVudFNpemUsXG5cdFx0fTtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXG5cdHJldHVybiBkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbHVlKHZhbHVlKVxue1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gdmFsdWUoKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn0iLCJpbXBvcnQgeyBoLCBocywgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnQHNpbnVvdXMvY29tcGlsZXIvc3JjL2VtcHR5JztcbmltcG9ydCBTaW51b3VzIGZyb20gJ0BzaW51b3VzL2knO1xuaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnQHNpbnVvdXMvbGF6eSc7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3NpbnVvdXMvb2JzZXJ2YWJsZSc7XG5cbmxldCBPQlNFUlZFUjtcbmxldCBTVE9SQUdFID0ge307XG5cbmZ1bmN0aW9uIGh5ZHJhdGVQcm9wcyhlbCwgb3B0cylcbntcblx0aWYoIW9wdHMuX3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhcGkucHJvcGVydHkoZWwsIG9wdHMsIG51bGwpO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlVGFnKHBhcmVudCwgY2hpbGRyZW4sIGN1cnJlbnRJbmRleCwgdmFsdWUpXG57XG5cdGxldCBlbCA9IGNoaWxkcmVuW2N1cnJlbnRJbmRleF07XG5cdFxuXHRsZXQgbm9kZXMgPSB2YWx1ZSgpO1xuXG5cdGlmKEFycmF5LmlzQXJyYXkobm9kZXMpKSB7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY2hpbGQgPSBub2Rlc1tpXTtcblx0XHRcdGlmKHR5cGVvZiBjaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjaGlsZCA9IGNoaWxkKCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhwYXJlbnQsICBjaGlsZC5zaXplKVxuXHRcdFx0Ly8gYXBpLmluc2VydChwYXJlbnQsIGNoaWxkLCBjaGlsZHJlbltjdXJyZW50SW5kZXggKyBpXSk7XG5cdFx0XHQvLyBwYXJlbnQucmVwbGFjZUNoaWxkKGNoaWxkLCBjaGlsZHJlbltjdXJyZW50SW5kZXggKyBpXSlcblx0XHRcdC8vIGNoaWxkcmVuW2N1cnJlbnRJbmRleCArIGldLnJlcGxhY2VXaXRoKGNoaWxkKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0YXBpLmluc2VydChlbCwgbm9kZXMsIG51bGwpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVDaGlsZHJlbihub2RlLCBjaGlsZHJlbilcbntcblx0bGV0IGJpbmRDaGlsZHJlbiA9IFtdO1xuXG5cdGlmKG5vZGUgIT09IG51bGwpIHtcblx0XHRiaW5kQ2hpbGRyZW4gPSBmaWx0ZXJDaGlsZE5vZGVzKG5vZGUpO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGlmKGNoaWxkcmVuW2ldID09PSBfKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5lcnJvcihiaW5kQ2hpbGRyZW5baV0sIGNoaWxkcmVuW2ldKTtcblx0XHRoeWRyYXRlVGFnKG5vZGUsIGJpbmRDaGlsZHJlbiwgaSwgY2hpbGRyZW5baV0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGUoZWwsIG9wdHMgPSB7fSwgY2hpbGRyZW4gPSBbXSlcbntcblx0aWYoIW9wdHNbJ2lkJ10pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgYmluZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHsgb3B0c1snaWQnXSB9YCk7XG5cblx0Ly8gY29uc29sZS5sb2coZWwsIG9wdHMsIGNoaWxkcmVuKVxuXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRoeWRyYXRlUHJvcHMoYmluZE5vZGUsIG9wdHMpO1xuXHRcdGh5ZHJhdGVDaGlsZHJlbihiaW5kTm9kZSwgY2hpbGRyZW4pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJDaGlsZHJlbihwYXJlbnQsIGNoaWxkKVxue1xuXHRwYXJlbnQuYWRkQ2hpbGRyZW4oY2hpbGQpO1xuXHRjaGlsZC5zZXRQYXJlbnQocGFyZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVyKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG57XG5cdG9wdGlvbnModGhpcywgb3B0cyk7XG5cdFx0XHRcdFxuXHRpZighU2ludW91cy5oYXNDb21wb25lbnQoZWwpKSB7XG5cdFx0aHlkcmF0ZS5jYWxsKHRoaXMsIGVsLCBvcHRzLCBjaGlsZHJlbik7XG5cdFx0cmV0dXJuIF87XG5cdH1cblx0XHRcblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0SHlkcmF0ZUNvbXBvbmVudChlbCk7XG5cblx0aWYoY29tcG9uZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIF87XG5cdH1cblx0Ly8gY29uc29sZS5sb2coJ1sgQ09NUE9ORU5UIF0nLCBlbCk7XG5cdGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG5cdH1cblxuXHRjb21wb25lbnQucGFzc1Nsb3RzKCdkZWZhdWx0JywgY2hpbGRyZW4pO1xuXG5cdHJlZ2lzdGVyQ2hpbGRyZW4odGhpcywgY29tcG9uZW50KTtcblxuXHRyZXR1cm4gaW5pdENvbXBvbmVudChjb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBpbml0Q29tcG9uZW50KGNvbXBvbmVudClcbntcblx0Y29tcG9uZW50Lmh5ZHJhdGUoY29tcG9uZW50LCBjb21waWxlci5iaW5kKGNvbXBvbmVudCkpO1xuXG5cdHJldHVybiBfO1xufVxuXG5mdW5jdGlvbiBJbnRlcnNlY3Rpb25PYnNlcnZlckNhbGxiYWNrIChlbnRyaWVzLCBvYnNlcnZlcilcbntcblx0ZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcblx0XHRsZXQgaWQgPSBlbnRyeS50YXJnZXQuaWRcblx0XHQvLyBjb25zb2xlLmxvZyhpZCk7XG5cdFx0YXBpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRoeWRyYXRlUHJvcHMoZW50cnkudGFyZ2V0LCBTVE9SQUdFW2lkXS5vcHRzKTtcblx0XHRcdGh5ZHJhdGVDaGlsZHJlbihlbnRyeS50YXJnZXQsIFNUT1JBR0VbaWRdLmNoaWxkcmVuKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRIeWRyYXRpb24oY29tcG9uZW50LCBoeWRyYXRpb25Sb290LCB0aW1lQmVuY2htYXJrID0gKCkgPT4ge30sIGNhbGxiYWNrID0gbnVsbClcbntcblx0Ly8gT0JTRVJWRVIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoSW50ZXJzZWN0aW9uT2JzZXJ2ZXJDYWxsYmFjaywge1xuXHQvLyBcdHJvb3Q6IGh5ZHJhdGlvblJvb3QsXG5cdC8vIFx0cm9vdE1hcmdpbjogJzBweCcsXG5cdC8vIFx0dGhyZXNob2xkOiAxLjBcblx0Ly8gfSk7XG5cblxuXG5cdC8vIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuXHQvLyBcdE9CU0VSVkVSLm9ic2VydmUoYmluZE5vZGUpO1xuXG5cdC8vIFx0U1RPUkFHRVtvcHRzWydpZCddXSA9IHtcblx0Ly8gXHRcdG9wdHMsXG5cdC8vIFx0XHRjaGlsZHJlbixcblx0Ly8gXHR9XG5cdC8vIH0pO1xuXHRsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgKGluc3RhbmNlKSA9PiB7XG5cblx0XHR0aW1lQmVuY2htYXJrKCdIeWRyYXRpb24nKTtcblxuXHRcdGxldCB0cmVlID0gW2luc3RhbmNlXTtcblxuXHRcdFNpbnVvdXMuY2xlYXJISUQoKTtcblxuXHRcdGxldCBjb25uZWN0ZWROb2RlID0gZmlsdGVyQ2hpbGROb2RlcyhoeWRyYXRpb25Sb290KTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aW5pdENvbXBvbmVudCh0cmVlW2ldLCBjb25uZWN0ZWROb2RlW2ldKTtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLmxvZyhpbnN0YW5jZSk7XG5cdFx0aW5zdGFuY2UuaG9vaygnbW91bnRlZCcpO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHR0aW1lQmVuY2htYXJrKCdIeWRyYXRpb24nKTtcblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fSk7XG5cbn1cblxuLyoqXG4gKiBGaWx0ZXIgb3V0IHdoaXRlc3BhY2UgdGV4dCBub2RlcyB1bmxlc3MgaXQgaGFzIGEgbm9za2lwIGluZGljYXRvci5cbiAqXG4gKiBAcGFyYW0gIHtOb2RlfSBwYXJlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBmaWx0ZXJDaGlsZE5vZGVzKHBhcmVudCkge1xuXHRyZXR1cm4gcGFyZW50LmNoaWxkTm9kZXM7XG5cdC8vIGNvbnNvbGUud2FybihwYXJlbnQsIHBhcmVudC5jaGlsZE5vZGVzKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGROb2RlcykuZmlsdGVyKFxuICAgICAgICBlbCA9PiBlbC5ub2RlVHlwZSAhPT0gMyB8fCBlbC5kYXRhLnRyaW0oKSB8fCBlbC5fbm9za2lwXG4gICAgKTtcbn1cbiIsIlxuXHRcdGltcG9ydCB7IEJhc2ljIH0gZnJvbSAnQHNpbnVvdXMvY29tcG9uZW50Jztcblx0XHRpbXBvcnQgY29tcG9uZW50Q29uZmlnIGZyb20gXCIuL2luZGV4LnNpbj90eXBlPXNjcmlwdFwiO1xuXHRcdFxuXHRcdGxldCBjb25maWcgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdG1ldGhvZHM6IHt9LFxuXHRcdH0sIGNvbXBvbmVudENvbmZpZyk7XG5cblx0XHRsZXQgaW5zdGFuY2UgPSBmdW5jdGlvbiBQYWdlc0luZGV4KCkge1xuXHRcdFx0QmFzaWMuY2FsbCh0aGlzKTtcblx0XHR9O1xuXHRcdFxuXHRcdC8vIGluaGVyaXQgQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2ljLnByb3RvdHlwZSk7XG5cblx0XHQvLyBjb3JyZWN0IHRoZSBjb25zdHJ1Y3RvciBwb2ludGVyIGJlY2F1c2UgaXQgcG9pbnRzIHRvIEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gaW5zdGFuY2U7XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzID0ge307XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9jb21wb25lbnROYW1lID0gJ1BhZ2VzSW5kZXgnO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3Nsb3RzID0ge307XG5cblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcpIHtcblx0XHRcdGlmKHR5cGVvZiBjb25maWdba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcubWV0aG9kcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWcubWV0aG9kc1trZXldXG5cdFx0fVxuXHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3JlbmRlciA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCwgZCwgYyB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFwiZGl2XCIsIHsgaWQ6IGN0eC5nZXRVSUQoNTMpIH0sIFtcbiAgbG9vcChjdHguX3N0YXRlLml0ZW1zLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgcmV0dXJuIGgoXG4gICAgICBcInNidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgJHNsb3RzOiB7XG4gICAgICAgICAgZGVmYXVsdDogW1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYEJ1dHRvbiAke2l0ZW19YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgaWQ6IGN0eC5nZXRVSUQoNTQpLFxuICAgICAgfSxcbiAgICAgIFtdXG4gICAgKTtcbiAgfSksXG5dKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcImRpdlwiLCB7IGlkOiBjdHguZ2V0VUlEKDUzKSB9LCBbXG4gIGxvb3AoY3R4Ll9zdGF0ZS5pdGVtcywgKGl0ZW0sIGtleSkgPT4ge1xuICAgIHJldHVybiBoKFwic2J1dHRvblwiLCB7IGlkOiBjdHguZ2V0VUlEKDU0KSB9LCBbXSk7XG4gIH0pLFxuXSk7XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgc3RhdGUobykge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogbyhbXSlcbiAgICB9O1xuICB9LFxuXG4gIGNvbXB1dGVkKG8pIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDA7IGkrKykge1xuICAgICAgICBkLnB1c2goaSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0YXRlLml0ZW1zKGQpOyAvLyBjb25zb2xlLmxvZyhpdGVtcylcbiAgICB9XG4gIH1cbn07IiwiaW1wb3J0IFNpbnVvdXMgZnJvbSAnQHNpbnVvdXMvaSc7XG5pbXBvcnQgeyBoeWRyYXRlIH0gZnJvbSAnQHNpbnVvdXMvaHlkcmF0aW9uJztcbmltcG9ydCByZW5kZXIgZnJvbSAnQHNpbnVvdXMvcmVuZGVyJztcbmltcG9ydCB0ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdGVzdC5zaW4nXG5pbXBvcnQgdGVzdDIgZnJvbSAnLi4vY29tcG9uZW50cy90ZXN0Mi5zaW4nXG5pbXBvcnQgYnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2J1dHRvbi5zaW4nXG5pbXBvcnQgSW5kZXhQYWdlIGZyb20gJy4uL3BhZ2VzL2luZGV4LnNpbidcbmltcG9ydCB0aW1lQmVuY2htYXJrIGZyb20gJy4vdGltZSc7XG5cblxuLy8gY29uc3QgSW5kZXhQYWdlID0gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFnZUluZGV4XCIgKi8gJy4uL3BhZ2VzL2luZGV4LnNpbicpXG5cblxudmFyIExBWU9VVDtcbnZhciBQYWdlSW5kZXgsIFBhZ2VJbmRleDI7XG5cbmZ1bmN0aW9uIFRFU1RfV0VCUEFDS19CVUlMRCgpXG57XG5cdHRpbWVCZW5jaG1hcmsoJ1NTUi1CdWlsZCcpO1xuXHRTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KHRlc3QpO1xuXHRTaW51b3VzLnJlZ2lzdGVyQ29tcG9uZW50KHRlc3QyKTtcblx0U2ludW91cy5yZWdpc3RlckNvbXBvbmVudChidXR0b24pO1xuXHR0aW1lQmVuY2htYXJrKCdTU1ItQnVpbGQnKTtcbn1cblxuLy8gZnVuY3Rpb24gVEVTVF9JTklUKClcbi8vIHtcbi8vIFx0dGltZUJlbmNobWFyaygnU1NSLUluaXQnKTtcbi8vIFx0UGFnZUluZGV4ID0gbmV3IEluZGV4UGFnZSgpO1xuLy8gXHRQYWdlSW5kZXgyID0gbmV3IEluZGV4UGFnZSgpO1xuLy8gXHR0aW1lQmVuY2htYXJrKCdTU1ItSW5pdCcpO1xuLy8gfVxuXG5mdW5jdGlvbiBURVNUX1JFTkRFUigpXG57XG5cdHJlbmRlcihJbmRleFBhZ2UsIExBWU9VVCwgdGltZUJlbmNobWFyaywgKGMpID0+IHtcblx0XHRQYWdlSW5kZXggPSBjO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gQ0xFQVJfSE9PS1MoKVxue1xuXHRcblx0bGV0IGh0bWwgPSBMQVlPVVQuaW5uZXJIVE1MO1xuXHRMQVlPVVQuaW5uZXJIVE1MID0gaHRtbDtcblx0UGFnZUluZGV4Lmhvb2soJ3VubW91bnRlZCcpO1xufVxuXG5mdW5jdGlvbiBURVNUX0hZRFJBVEUoKVxue1xuXHRoeWRyYXRlKEluZGV4UGFnZSwgTEFZT1VULCB0aW1lQmVuY2htYXJrKTtcbn1cblxuVEVTVF9XRUJQQUNLX0JVSUxEKCk7XG5cbi8vIFRFU1RfSU5JVCgpO1xuXG4vLyByZXR1cm47XG4oZnVuY3Rpb24gbG9hZCgpIHtcblx0TEFZT1VUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXG5cblx0Ly8gTEFZT1VULmlubmVySFRNTCA9ICcnO1xuXHQvLyByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHtcblx0Ly8gVEVTVF9IWURSQVRFKCk7XG5cdC8vIHJldHVybjtcblxuXHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcblx0Ly8gXHRURVNUX1JFTkRFUigpO1xuXHQvLyB9LCAyMDAwKVxuXG5cdFRFU1RfUkVOREVSKCk7XG5cdC8vIGNvbnNvbGUubG9nKExBWU9VVC5pbm5lckhUTUwpXG5cdC8vIHJldHVyblxuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXG5cdFx0Q0xFQVJfSE9PS1MoKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0IFRFU1RfSFlEUkFURSgpO1xuXHRcdH0sIDMwMCk7XG5cdH0sIDEwMDApO1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBkID0gMjsiLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==