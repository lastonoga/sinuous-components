/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/obs.js":
/*!********************!*\
  !*** ./src/obs.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observable = observable;
exports.computed = computed;
exports.subscribe = subscribe;

function _createForOfIteratorHelperLoose(o) { var i = 0; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } i = o[Symbol.iterator](); return i.next.bind(i); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function observable(value) {
  function data(nextValue) {
    if (arguments.length === 0) {
      return value;
    }

    value = nextValue;

    data._observers.forEach(function (observer) {
      observer._fresh = false;
    });

    data._observers.forEach(function (observer) {
      return observer();
    });

    return value;
  }

  data._observers = new Set();
  data.$o = true;
  return data;
}

function computed(obs, value) {
  obs = [].concat(obs);

  for (var _iterator = _createForOfIteratorHelperLoose(obs), _step; !(_step = _iterator()).done;) {
    var ob = _step.value;

    ob._observers.add(update);
  }

  function data() {
    if (!update._fresh) {
      update();
    }

    return value();
  }

  function update() {
    update._fresh = true;

    data._observers.forEach(function (observer) {
      return observer();
    });

    return value;
  }

  data._observers = new Set();
  data.$o = true;
  update();
  return data;
}

function subscribe(obs, value, skip) {
  if (skip === void 0) {
    skip = false;
  }

  obs = [].concat(obs);

  for (var _iterator2 = _createForOfIteratorHelperLoose(obs), _step2; !(_step2 = _iterator2()).done;) {
    var ob = _step2.value;

    if (ob._observers) {
      ob._observers.add(value);
    }

    if (ob._deps) {
      for (var _iterator3 = _createForOfIteratorHelperLoose(ob._deps), _step3; !(_step3 = _iterator3()).done;) {
        var dep = _step3.value;
        dep.add(value);
      }
    }
  }

  if (!skip) {
    value();
  }
}

/***/ }),

/***/ "./src/template-test.js":
/*!******************************!*\
  !*** ./src/template-test.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _obs = __webpack_require__(/*! ./obs */ "./src/obs.js");

var _time = _interopRequireDefault(__webpack_require__(/*! ./time */ "./src/time.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Main functions
 */
function parseContext(context) {
  if (context === undefined || context === null) {
    context = {};
  }

  var props = context.props || {};
  var slots = context.slots || {};
  return {
    props: props,
    slots: slots
  };
} // Get node for hydration and render


function getNode(template, node) {
  if (node === false) {
    if (template.content.children.length === 1) {
      node = template.content.firstChild.cloneNode(true);
    } else {
      node = template.content.cloneNode(true);
    }
  }

  return node;
} // Is property observable 


function isObservable(prop) {
  return prop.$o !== undefined || typeof prop === 'function';
}
/**
 * Subscribe action to property
 */


function valueSubscribe(hydrate, prop, fn) {
  hydrate = hydrate !== false;

  if (!isObservable(prop)) {
    if (!hydrate) {
      fn(prop);
    }

    return;
  }

  (0, _obs.subscribe)(prop, function () {
    fn(prop());
  }, hydrate);
} // attr binding and hydration


function makeAttrs(node, hydrate, arg1, arg2) {
  if (arg1 !== null) {
    var _loop = function _loop(key) {
      // cleanup same keys
      if (arg2[key] !== undefined) {
        delete arg1[key];
      } else {
        // Set Main Node component attributes
        valueSubscribe(hydrate, arg1[key], function (v) {
          node.setAttribute(key, v);
        });
      }
    };

    for (var key in arg1) {
      _loop(key);
    }
  } // Set passed component attributes


  var _loop2 = function _loop2(_key) {
    valueSubscribe(hydrate, arg2[_key], function (v) {
      node.setAttribute(_key, v);
    });
  };

  for (var _key in arg2) {
    _loop2(_key);
  }
} // event binding


function makeEvents(node) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  for (var i = 0; i < args.length; i++) {
    var _loop3 = function _loop3(key) {
      var value = args[i][key];
      node.addEventListener(key, function (event) {
        return value(event);
      });
    };

    for (var key in args[i]) {
      _loop3(key);
    }
  }
}
/**
 * Multiple if test
 */


var _iftmp$ = document.createElement("template");

_iftmp$.innerHTML = "<div>Div 1</div><div>Div 2</div>";

var ifView = function ifView(context, hydrate) {
  if (hydrate === void 0) {
    hydrate = false;
  }

  var _parseContext = parseContext(context),
      props = _parseContext.props,
      slots = _parseContext.slots;

  var node = getNode(_iftmp$, hydrate);
  var returnNode = node;

  var _el1$ = hydrate ? node : node.firstChild;

  var _el2$ = _el1$.nextSibling;
  valueSubscribe(hydrate, props.hydrated, function (v) {
    _el2$.innerHTML = v;
  });
  returnNode = _el2$;
  return hydrate ? returnNode : node;
};
/**
 * Button
 */


var _button$ = document.createElement("template");

_button$.innerHTML = "<div class=\"button\"><span>Default text</span></div><!-- a --><hr/>";

var buttonView = function buttonView(context, hydrate) {
  if (hydrate === void 0) {
    hydrate = false;
  }

  var _parseContext2 = parseContext(context),
      props = _parseContext2.props,
      slots = _parseContext2.slots;

  var node = getNode(_button$, hydrate);
  var returnNode = node;

  var _el1$ = hydrate ? node : node.firstChild; // console.warn(node)
  // let d = observable(1);
  // setInterval(() => { d(d() + 1); }, 100);

  /**
   * Prop Inheritance
   */


  makeAttrs(node, hydrate, {// 'data-test': () => { return d(); }
  }, context.attrs || {});
  makeEvents(node, {// click: () => { console.log('test'); }
  }, context.on || {});
  /**
   * Main
   */

  var defaultSlot = _el1$.firstChild; // Render and hydration text node

  valueSubscribe(hydrate, slots.default, function (v) {
    defaultSlot.innerHTML = v;
  });
  /**
   * If
   */

  var _el2$ = _el1$.nextSibling; // ifView({}, _el1$)

  if (true) {
    var tagif = ifView({
      props: {
        hydrated: (0, _obs.computed)([], function () {
          return hydrate !== false;
        })
      }
    }, hydrate ? _el2$ : false);

    if (hydrate) {
      _el2$ = tagif;
    } else {
      _el2$.replaceWith(tagif);
    }
  } // valueSubscribe(hydrate, true, (v) => {
  // });
  // clear last child of that component


  returnNode = _el2$.nextSibling;
  return hydrate ? returnNode : node;
};
/**
 * Page
 */


var timer = null;

var _page$ = document.createElement("template");

_page$.innerHTML = "<div><!----></div>";

var pageView = function pageView(context, hydrate) {
  if (hydrate === void 0) {
    hydrate = false;
  }

  var _parseContext3 = parseContext(context),
      props = _parseContext3.props,
      slots = _parseContext3.slots;

  var node = getNode(_page$, hydrate);
  var items = (0, _obs.observable)(Array.from({
    length: 1000
  }, function (_, i) {
    return i;
  }));
  var s1 = (0, _obs.observable)(1);
  var refs = {}; // clearInterval(timer);
  // timer = setInterval(() => {
  // 	s1(s1() + 1);
  // }, 1000)
  // test simple loop

  var loopBinding = node.firstChild;
  (0, _obs.subscribe)(items, function () {
    var buttons = document.createDocumentFragment();
    var arr = items(); // create components

    var _button_tmp = function _button_tmp(item, key, node) {
      if (node === void 0) {
        node = false;
      }

      return buttonView({
        // on: {
        // 	click: () => { alert(key); }
        // },
        slots: {
          default: "Button " + item // default: computed(s1, () => `Button ${ arr[key] } - ${ s1() }`)

        }
      }, node);
    }; // Loop render function


    if (hydrate === false) {
      for (var key in arr) {
        buttons.appendChild(_button_tmp(arr[key], key));
      }

      loopBinding.replaceWith(buttons);
    } else {
      // Loop hydration function
      var startNode = loopBinding;

      for (var _key3 in arr) {
        if (startNode === null) {
          break;
        } // continue;
        // console.log(startNode);


        startNode = _button_tmp(arr[_key3], _key3, startNode); // console.log(startNode);

        startNode = startNode.nextElementSibling;
      }
    }
  });
  return node;
};

var LAYOUT = document.getElementById('layout');
/**
 * Render
 */

LAYOUT.innerHTML = '';
(0, _time.default)('render');
LAYOUT.appendChild(pageView());
(0, _time.default)('render');
/**
 * Hydrate
 */

clearInterval(timer);
var __tmp = LAYOUT.innerHTML;
LAYOUT.innerHTML = __tmp;
setTimeout(function () {
  (0, _time.default)('hydrate');
  pageView(null, LAYOUT.firstChild);
  (0, _time.default)('hydrate');
}, 2000);

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
/*!************************************!*\
  !*** multi ./src/template-test.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/template-test.js */"./src/template-test.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL29icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUtdGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZS5qcyJdLCJuYW1lcyI6WyJvYnNlcnZhYmxlIiwidmFsdWUiLCJkYXRhIiwibmV4dFZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiX29ic2VydmVycyIsImZvckVhY2giLCJvYnNlcnZlciIsIl9mcmVzaCIsIlNldCIsIiRvIiwiY29tcHV0ZWQiLCJvYnMiLCJjb25jYXQiLCJvYiIsImFkZCIsInVwZGF0ZSIsInN1YnNjcmliZSIsInNraXAiLCJfZGVwcyIsImRlcCIsInBhcnNlQ29udGV4dCIsImNvbnRleHQiLCJ1bmRlZmluZWQiLCJwcm9wcyIsInNsb3RzIiwiZ2V0Tm9kZSIsInRlbXBsYXRlIiwibm9kZSIsImNvbnRlbnQiLCJjaGlsZHJlbiIsImZpcnN0Q2hpbGQiLCJjbG9uZU5vZGUiLCJpc09ic2VydmFibGUiLCJwcm9wIiwidmFsdWVTdWJzY3JpYmUiLCJoeWRyYXRlIiwiZm4iLCJtYWtlQXR0cnMiLCJhcmcxIiwiYXJnMiIsImtleSIsInYiLCJzZXRBdHRyaWJ1dGUiLCJtYWtlRXZlbnRzIiwiYXJncyIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJfaWZ0bXAkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiaWZWaWV3IiwicmV0dXJuTm9kZSIsIl9lbDEkIiwiX2VsMiQiLCJuZXh0U2libGluZyIsImh5ZHJhdGVkIiwiX2J1dHRvbiQiLCJidXR0b25WaWV3IiwiYXR0cnMiLCJvbiIsImRlZmF1bHRTbG90IiwiZGVmYXVsdCIsInRhZ2lmIiwicmVwbGFjZVdpdGgiLCJ0aW1lciIsIl9wYWdlJCIsInBhZ2VWaWV3IiwiaXRlbXMiLCJBcnJheSIsImZyb20iLCJfIiwiczEiLCJyZWZzIiwibG9vcEJpbmRpbmciLCJidXR0b25zIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImFyciIsIl9idXR0b25fdG1wIiwiaXRlbSIsImFwcGVuZENoaWxkIiwic3RhcnROb2RlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiTEFZT1VUIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGVhckludGVydmFsIiwiX190bXAiLCJzZXRUaW1lb3V0IiwidGltZXMiLCJ0aW1lIiwibmFtZSIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUNQO0FBQ0MsV0FBU0MsSUFBVCxDQUFjQyxTQUFkLEVBQ0E7QUFDQyxRQUFJQyxTQUFTLENBQUNDLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDM0IsYUFBT0osS0FBUDtBQUNBOztBQUVEQSxT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RDs7QUErREEsSUFBSXlELE1BQU0sR0FBR25DLFFBQVEsQ0FBQ29DLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUVBOzs7O0FBSUFELE1BQU0sQ0FBQ2pDLFNBQVAsR0FBbUIsRUFBbkI7QUFFQSxtQkFBYyxRQUFkO0FBQ0FpQyxNQUFNLENBQUNILFdBQVAsQ0FBbUJiLFFBQVEsRUFBM0I7QUFDQSxtQkFBYyxRQUFkO0FBRUE7Ozs7QUFJQWtCLGFBQWEsQ0FBQ3BCLEtBQUQsQ0FBYjtBQUNBLElBQUlxQixLQUFLLEdBQUdILE1BQU0sQ0FBQ2pDLFNBQW5CO0FBQ0FpQyxNQUFNLENBQUNqQyxTQUFQLEdBQW1Cb0MsS0FBbkI7QUFFQUMsVUFBVSxDQUFDLFlBQU07QUFDaEIscUJBQWMsU0FBZDtBQUNBcEIsVUFBUSxDQUFDLElBQUQsRUFBT2dCLE1BQU0sQ0FBQ3RELFVBQWQsQ0FBUjtBQUNBLHFCQUFjLFNBQWQ7QUFDQSxDQUpTLEVBSVAsSUFKTyxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNSQSxJQUFJMkQsS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBU0MsSUFBVCxDQUFjQyxJQUFkLEVBQ2Y7QUFDQyxNQUFJQyxHQUFHLEdBQUksSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsRUFBVjs7QUFFQSxNQUFHLE9BQU9MLEtBQUssQ0FBQ0UsSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDRixTQUFLLENBQUNFLElBQUQsQ0FBTCxHQUFjQyxHQUFkO0FBQ0EsV0FBT0gsS0FBSyxDQUFDRSxJQUFELENBQVo7QUFDQTs7QUFFREksU0FBTyxDQUFDQyxHQUFSLFdBQW9CTCxJQUFwQixTQUE4QkMsR0FBRyxHQUFHSCxLQUFLLENBQUNFLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPRixLQUFLLENBQUNFLElBQUQsQ0FBWjtBQUNBLEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmFibGUodmFsdWUpXG57XG5cdGZ1bmN0aW9uIGRhdGEobmV4dFZhbHVlKVxuXHR7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHR2YWx1ZSA9IG5leHRWYWx1ZTtcblxuXHRcdGRhdGEuX29ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHsgb2JzZXJ2ZXIuX2ZyZXNoID0gZmFsc2U7IH0pO1xuXHRcdGRhdGEuX29ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IG9ic2VydmVyKCkpO1xuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0ZGF0YS5fb2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuXHRkYXRhLiRvID0gdHJ1ZTtcblxuXHRyZXR1cm4gZGF0YTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQob2JzLCB2YWx1ZSlcbntcblx0b2JzID0gW10uY29uY2F0KG9icyk7XG5cblx0Zm9yKGxldCBvYiBvZiBvYnMpIHtcblx0XHRvYi5fb2JzZXJ2ZXJzLmFkZCh1cGRhdGUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGF0YSgpXG5cdHtcblx0XHRpZighdXBkYXRlLl9mcmVzaCkge1xuXHRcdFx0dXBkYXRlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlKCk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGUoKVxuXHR7XG5cdFx0dXBkYXRlLl9mcmVzaCA9IHRydWU7XG5cblx0XHRkYXRhLl9vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiBvYnNlcnZlcigpKTtcblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGRhdGEuX29ic2VydmVycyA9IG5ldyBTZXQoKTtcblx0ZGF0YS4kbyA9IHRydWU7XG5cblx0dXBkYXRlKCk7XG5cblx0cmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmUob2JzLCB2YWx1ZSwgc2tpcCA9IGZhbHNlKVxue1xuXHRvYnMgPSBbXS5jb25jYXQob2JzKTtcblxuXHRmb3IobGV0IG9iIG9mIG9icykge1xuXHRcdGlmKG9iLl9vYnNlcnZlcnMpIHtcblx0XHRcdG9iLl9vYnNlcnZlcnMuYWRkKHZhbHVlKTtcblx0XHR9XG5cblx0XHRpZihvYi5fZGVwcykge1xuXHRcdFx0Zm9yKGxldCBkZXAgb2Ygb2IuX2RlcHMpIHtcblx0XHRcdFx0ZGVwLmFkZCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYoIXNraXApIHtcblx0XHR2YWx1ZSgpO1xuXHR9XG59IiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSwgb24gfSBmcm9tICcuL29icyc7XG5pbXBvcnQgdGltZUJlbmNobWFyayBmcm9tICcuL3RpbWUnO1xuXG4vKipcbiAqIE1haW4gZnVuY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIHBhcnNlQ29udGV4dChjb250ZXh0KVxue1xuXHRpZihjb250ZXh0ID09PSB1bmRlZmluZWQgfHwgY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdGNvbnRleHQgPSB7fTtcblx0fVxuXG5cdGxldCBwcm9wcyA9IGNvbnRleHQucHJvcHMgfHwge307XG5cdGxldCBzbG90cyA9IGNvbnRleHQuc2xvdHMgfHwge307XG5cblx0cmV0dXJuIHtcblx0XHRwcm9wcyxcblx0XHRzbG90cyxcblx0fVxufVxuXG4vLyBHZXQgbm9kZSBmb3IgaHlkcmF0aW9uIGFuZCByZW5kZXJcbmZ1bmN0aW9uIGdldE5vZGUodGVtcGxhdGUsIG5vZGUpXG57XG5cdGlmKG5vZGUgPT09IGZhbHNlKSB7XG5cdFx0aWYodGVtcGxhdGUuY29udGVudC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcblx0XHRcdG5vZGUgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub2RlID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuLy8gSXMgcHJvcGVydHkgb2JzZXJ2YWJsZSBcbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZShwcm9wKVxue1xuXHRyZXR1cm4gcHJvcC4kbyAhPT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKipcbiAqIFN1YnNjcmliZSBhY3Rpb24gdG8gcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gdmFsdWVTdWJzY3JpYmUoaHlkcmF0ZSwgcHJvcCwgZm4pXG57XG5cdGh5ZHJhdGUgPSBoeWRyYXRlICE9PSBmYWxzZTtcblxuXHRpZighaXNPYnNlcnZhYmxlKHByb3ApKSB7XG5cdFx0aWYoIWh5ZHJhdGUpIHtcblx0XHRcdGZuKHByb3ApO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblxuXG5cdHN1YnNjcmliZShwcm9wLCAoKSA9PiB7XG5cdFx0Zm4ocHJvcCgpKTtcblx0fSwgaHlkcmF0ZSk7XG5cblx0XG59XG5cbi8vIGF0dHIgYmluZGluZyBhbmQgaHlkcmF0aW9uXG5mdW5jdGlvbiBtYWtlQXR0cnMobm9kZSwgaHlkcmF0ZSwgYXJnMSwgYXJnMilcbntcblx0aWYoYXJnMSAhPT0gbnVsbCkge1xuXHRcdGZvcihsZXQga2V5IGluIGFyZzEpIHtcblx0XHRcdC8vIGNsZWFudXAgc2FtZSBrZXlzXG5cdFx0XHRpZihhcmcyW2tleV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRkZWxldGUgYXJnMVtrZXldO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gU2V0IE1haW4gTm9kZSBjb21wb25lbnQgYXR0cmlidXRlc1xuXHRcdFx0XHR2YWx1ZVN1YnNjcmliZShoeWRyYXRlLCBhcmcxW2tleV0sICh2KSA9PiB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCB2KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHBhc3NlZCBjb21wb25lbnQgYXR0cmlidXRlc1xuXHRmb3IobGV0IGtleSBpbiBhcmcyKSB7XG5cdFx0dmFsdWVTdWJzY3JpYmUoaHlkcmF0ZSwgYXJnMltrZXldLCAodikgPT4ge1xuXHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCB2KTtcblx0XHR9KVxuXHR9XG59XG5cbi8vIGV2ZW50IGJpbmRpbmdcbmZ1bmN0aW9uIG1ha2VFdmVudHMobm9kZSwgLi4uYXJncylcbntcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Zm9yKGxldCBrZXkgaW4gYXJnc1tpXSkge1xuXHRcdFx0bGV0IHZhbHVlID0gYXJnc1tpXVtrZXldO1xuXHRcdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGtleSwgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlKGV2ZW50KTtcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogTXVsdGlwbGUgaWYgdGVzdFxuICovXG5jb25zdCBfaWZ0bXAkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX2lmdG1wJC5pbm5lckhUTUwgPSBgPGRpdj5EaXYgMTwvZGl2PjxkaXY+RGl2IDI8L2Rpdj5gO1xuXG5jb25zdCBpZlZpZXcgPSAoY29udGV4dCwgaHlkcmF0ZSA9IGZhbHNlKSA9PiB7XG5cdGxldCB7IHByb3BzLCBzbG90cyB9ID0gcGFyc2VDb250ZXh0KGNvbnRleHQpO1xuXG5cdGxldCBub2RlID0gZ2V0Tm9kZShfaWZ0bXAkLCBoeWRyYXRlKTtcblx0bGV0IHJldHVybk5vZGUgPSBub2RlO1xuXG5cdGxldCBfZWwxJCA9IGh5ZHJhdGUgPyBub2RlIDogbm9kZS5maXJzdENoaWxkO1xuXHRsZXQgX2VsMiQgPSBfZWwxJC5uZXh0U2libGluZztcblxuXHR2YWx1ZVN1YnNjcmliZShoeWRyYXRlLCBwcm9wcy5oeWRyYXRlZCwgKHYpID0+IHtcblx0XHRfZWwyJC5pbm5lckhUTUwgPSB2O1xuXHR9KTtcblxuXHRyZXR1cm5Ob2RlID0gX2VsMiQ7XG5cblx0cmV0dXJuIGh5ZHJhdGUgPyByZXR1cm5Ob2RlIDogbm9kZTsgXG59XG4vKipcbiAqIEJ1dHRvblxuICovXG5jb25zdCBfYnV0dG9uJCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl9idXR0b24kLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiYnV0dG9uXCI+PHNwYW4+RGVmYXVsdCB0ZXh0PC9zcGFuPjwvZGl2PjwhLS0gYSAtLT48aHIvPmA7XG5cbmNvbnN0IGJ1dHRvblZpZXcgPSAoY29udGV4dCwgaHlkcmF0ZSA9IGZhbHNlKSA9PiB7XG5cblx0bGV0IHsgcHJvcHMsIHNsb3RzIH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cblx0bGV0IG5vZGUgPSBnZXROb2RlKF9idXR0b24kLCBoeWRyYXRlKTtcblx0bGV0IHJldHVybk5vZGUgPSBub2RlO1xuXG5cdGxldCBfZWwxJCA9IGh5ZHJhdGUgPyBub2RlIDogbm9kZS5maXJzdENoaWxkO1xuXG5cdC8vIGNvbnNvbGUud2Fybihub2RlKVxuXHQvLyBsZXQgZCA9IG9ic2VydmFibGUoMSk7XG5cdC8vIHNldEludGVydmFsKCgpID0+IHsgZChkKCkgKyAxKTsgfSwgMTAwKTtcblxuXHQvKipcblx0ICogUHJvcCBJbmhlcml0YW5jZVxuXHQgKi9cblx0bWFrZUF0dHJzKG5vZGUsIGh5ZHJhdGUsIHtcblx0XHQvLyAnZGF0YS10ZXN0JzogKCkgPT4geyByZXR1cm4gZCgpOyB9XG5cdH0sIGNvbnRleHQuYXR0cnMgfHwge30pO1xuXG5cdG1ha2VFdmVudHMobm9kZSwge1xuXHRcdC8vIGNsaWNrOiAoKSA9PiB7IGNvbnNvbGUubG9nKCd0ZXN0Jyk7IH1cblx0fSwgY29udGV4dC5vbiB8fCB7fSk7XG5cblx0LyoqXG5cdCAqIE1haW5cblx0ICovXG5cdGxldCBkZWZhdWx0U2xvdCA9IF9lbDEkLmZpcnN0Q2hpbGQ7XG5cdC8vIFJlbmRlciBhbmQgaHlkcmF0aW9uIHRleHQgbm9kZVxuXHR2YWx1ZVN1YnNjcmliZShoeWRyYXRlLCBzbG90cy5kZWZhdWx0LCAodikgPT4ge1xuXHRcdGRlZmF1bHRTbG90LmlubmVySFRNTCA9IHY7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBJZlxuXHQgKi9cblx0bGV0IF9lbDIkID0gX2VsMSQubmV4dFNpYmxpbmc7XG5cblx0XHQvLyBpZlZpZXcoe30sIF9lbDEkKVxuXHRpZih0cnVlKSB7XG5cdFx0bGV0IHRhZ2lmID0gaWZWaWV3KHtcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdGh5ZHJhdGVkOiBjb21wdXRlZChbXSwgKCkgPT4geyByZXR1cm4gaHlkcmF0ZSAhPT0gZmFsc2UgfSlcblx0XHRcdH1cblx0XHR9LCBoeWRyYXRlID8gX2VsMiQgOiBmYWxzZSk7XG5cblx0XHRpZihoeWRyYXRlKSB7XG5cdFx0XHRfZWwyJCA9IHRhZ2lmO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZWwyJC5yZXBsYWNlV2l0aCh0YWdpZik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gdmFsdWVTdWJzY3JpYmUoaHlkcmF0ZSwgdHJ1ZSwgKHYpID0+IHtcblx0XHRcblx0Ly8gfSk7XG5cdFxuXHQvLyBjbGVhciBsYXN0IGNoaWxkIG9mIHRoYXQgY29tcG9uZW50XG5cdHJldHVybk5vZGUgPSBfZWwyJC5uZXh0U2libGluZztcblxuXHRyZXR1cm4gaHlkcmF0ZSA/IHJldHVybk5vZGUgOiBub2RlO1xufTtcblxuLyoqXG4gKiBQYWdlXG4gKi9cbmxldCB0aW1lciA9IG51bGw7XG5jb25zdCBfcGFnZSQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fcGFnZSQuaW5uZXJIVE1MID0gYDxkaXY+PCEtLS0tPjwvZGl2PmA7XG5cbmNvbnN0IHBhZ2VWaWV3ID0gKGNvbnRleHQsIGh5ZHJhdGUgPSBmYWxzZSkgPT4ge1xuXHRcblx0bGV0IHsgcHJvcHMsIHNsb3RzIH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cblx0bGV0IG5vZGUgPSBnZXROb2RlKF9wYWdlJCwgaHlkcmF0ZSk7XG5cblx0bGV0IGl0ZW1zID0gb2JzZXJ2YWJsZShBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMDAwIH0sIChfLCBpKSA9PiBpKSk7XG5cdGxldCBzMSA9IG9ic2VydmFibGUoMSk7XG5cblx0bGV0IHJlZnMgPSB7fTtcblxuXHQvLyBjbGVhckludGVydmFsKHRpbWVyKTtcblx0Ly8gdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdC8vIFx0czEoczEoKSArIDEpO1xuXHQvLyB9LCAxMDAwKVxuXHQvLyB0ZXN0IHNpbXBsZSBsb29wXG5cdGxldCBsb29wQmluZGluZyA9IG5vZGUuZmlyc3RDaGlsZDtcblx0c3Vic2NyaWJlKGl0ZW1zLCAoKSA9PiB7XG5cdFx0bGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0bGV0IGFyciA9IGl0ZW1zKCk7XG5cblx0XHQvLyBjcmVhdGUgY29tcG9uZW50c1xuXHRcdGxldCBfYnV0dG9uX3RtcCA9IChpdGVtLCBrZXksIG5vZGUgPSBmYWxzZSkgPT4ge1xuXHRcdFx0cmV0dXJuIGJ1dHRvblZpZXcoe1xuXHRcdFx0XHQvLyBvbjoge1xuXHRcdFx0XHQvLyBcdGNsaWNrOiAoKSA9PiB7IGFsZXJ0KGtleSk7IH1cblx0XHRcdFx0Ly8gfSxcblx0XHRcdFx0c2xvdHM6IHtcblx0XHRcdFx0XHRkZWZhdWx0OiBgQnV0dG9uICR7IGl0ZW0gfWAsXG5cdFx0XHRcdFx0Ly8gZGVmYXVsdDogY29tcHV0ZWQoczEsICgpID0+IGBCdXR0b24gJHsgYXJyW2tleV0gfSAtICR7IHMxKCkgfWApXG5cdFx0XHRcdH1cblx0XHRcdH0sIG5vZGUpO1xuXHRcdH1cblxuXHRcdC8vIExvb3AgcmVuZGVyIGZ1bmN0aW9uXG5cdFx0aWYoaHlkcmF0ZSA9PT0gZmFsc2UpIHtcblx0XHRcdGZvcihsZXQga2V5IGluIGFycikge1xuXHRcdFx0XHRidXR0b25zLmFwcGVuZENoaWxkKF9idXR0b25fdG1wKGFycltrZXldLCBrZXkpKTtcblx0XHRcdH1cblxuXHRcdFx0bG9vcEJpbmRpbmcucmVwbGFjZVdpdGgoYnV0dG9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIExvb3AgaHlkcmF0aW9uIGZ1bmN0aW9uXG5cdFx0XHRsZXQgc3RhcnROb2RlID0gbG9vcEJpbmRpbmc7XG5cdFx0XHRmb3IobGV0IGtleSBpbiBhcnIpIHtcblx0XHRcdFx0aWYoc3RhcnROb2RlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gY29udGludWU7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHN0YXJ0Tm9kZSk7XG5cdFx0XHRcdHN0YXJ0Tm9kZSA9IF9idXR0b25fdG1wKGFycltrZXldLCBrZXksIHN0YXJ0Tm9kZSk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHN0YXJ0Tm9kZSk7XG5cblx0XHRcdFx0c3RhcnROb2RlID0gc3RhcnROb2RlLm5leHRFbGVtZW50U2libGluZztcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5cblxubGV0IExBWU9VVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXlvdXQnKTtcblxuLyoqXG4gKiBSZW5kZXJcbiAqL1xuXG5MQVlPVVQuaW5uZXJIVE1MID0gJyc7XG5cbnRpbWVCZW5jaG1hcmsoJ3JlbmRlcicpO1xuTEFZT1VULmFwcGVuZENoaWxkKHBhZ2VWaWV3KCkpO1xudGltZUJlbmNobWFyaygncmVuZGVyJyk7XG5cbi8qKlxuICogSHlkcmF0ZVxuICovXG4gXG5jbGVhckludGVydmFsKHRpbWVyKTtcbmxldCBfX3RtcCA9IExBWU9VVC5pbm5lckhUTUw7XG5MQVlPVVQuaW5uZXJIVE1MID0gX190bXA7XG5cbnNldFRpbWVvdXQoKCkgPT4ge1xuXHR0aW1lQmVuY2htYXJrKCdoeWRyYXRlJyk7XG5cdHBhZ2VWaWV3KG51bGwsIExBWU9VVC5maXJzdENoaWxkKTtcblx0dGltZUJlbmNobWFyaygnaHlkcmF0ZScpO1xufSwgMjAwMCk7IiwibGV0IHRpbWVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUobmFtZSlcbntcblx0bGV0IG5vdyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdGlmKHR5cGVvZiB0aW1lc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aW1lc1tuYW1lXSA9IG5vdztcblx0XHRyZXR1cm4gdGltZXNbbmFtZV07XG5cdH1cblxuXHRjb25zb2xlLmxvZyhgWyB0YiAke25hbWV9IF1gLCBub3cgLSB0aW1lc1tuYW1lXSwgJ21zJyk7XG5cblx0ZGVsZXRlIHRpbWVzW25hbWVdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==