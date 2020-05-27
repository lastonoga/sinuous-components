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
    node = template.content.firstChild.cloneNode(true);
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
 * Button
 */


var _button$ = document.createElement("template");

_button$.innerHTML = "<div class=\"button\"><span>Default text</span></div>";

var buttonView = function buttonView(context, hydrate) {
  if (hydrate === void 0) {
    hydrate = false;
  }

  var _parseContext = parseContext(context),
      props = _parseContext.props,
      slots = _parseContext.slots;

  var node = getNode(_button$, hydrate); // let d = observable(1);
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

  var defaultSlot = node.firstChild;
  var i = 0; // Render and hydration text node

  valueSubscribe(hydrate, slots.default, function (v) {
    defaultSlot.innerHTML = v;
  });
  return node;
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

  var _parseContext2 = parseContext(context),
      props = _parseContext2.props,
      slots = _parseContext2.slots;

  var node = getNode(_page$, hydrate);
  var items = (0, _obs.observable)(Array.from({
    length: 1000
  }, function (_, i) {
    return i;
  }));
  var s1 = (0, _obs.observable)(1); // clearInterval(timer);
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


        _button_tmp(arr[_key3], _key3, startNode);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL29icy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUtdGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZS5qcyJdLCJuYW1lcyI6WyJvYnNlcnZhYmxlIiwidmFsdWUiLCJkYXRhIiwibmV4dFZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiX29ic2VydmVycyIsImZvckVhY2giLCJvYnNlcnZlciIsIl9mcmVzaCIsIlNldCIsIiRvIiwiY29tcHV0ZWQiLCJvYnMiLCJjb25jYXQiLCJvYiIsImFkZCIsInVwZGF0ZSIsInN1YnNjcmliZSIsInNraXAiLCJfZGVwcyIsImRlcCIsInBhcnNlQ29udGV4dCIsImNvbnRleHQiLCJ1bmRlZmluZWQiLCJwcm9wcyIsInNsb3RzIiwiZ2V0Tm9kZSIsInRlbXBsYXRlIiwibm9kZSIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiY2xvbmVOb2RlIiwiaXNPYnNlcnZhYmxlIiwicHJvcCIsInZhbHVlU3Vic2NyaWJlIiwiaHlkcmF0ZSIsImZuIiwibWFrZUF0dHJzIiwiYXJnMSIsImFyZzIiLCJrZXkiLCJ2Iiwic2V0QXR0cmlidXRlIiwibWFrZUV2ZW50cyIsImFyZ3MiLCJpIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiX2J1dHRvbiQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJidXR0b25WaWV3IiwiYXR0cnMiLCJvbiIsImRlZmF1bHRTbG90IiwiZGVmYXVsdCIsInRpbWVyIiwiX3BhZ2UkIiwicGFnZVZpZXciLCJpdGVtcyIsIkFycmF5IiwiZnJvbSIsIl8iLCJzMSIsImxvb3BCaW5kaW5nIiwiYnV0dG9ucyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJhcnIiLCJfYnV0dG9uX3RtcCIsIml0ZW0iLCJhcHBlbmRDaGlsZCIsInJlcGxhY2VXaXRoIiwic3RhcnROb2RlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiTEFZT1VUIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGVhckludGVydmFsIiwiX190bXAiLCJzZXRUaW1lb3V0IiwidGltZXMiLCJ0aW1lIiwibmFtZSIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUNQO0FBQ0MsV0FBU0MsSUFBVCxDQUFjQyxTQUFkLEVBQ0E7QUFDQyxRQUFJQyxTQUFTLENBQUNDLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDM0IsYUFBT0osS0FBUDtBQUNBOztBQUVEQSxTQUFLLEdBQUdFLFNBQVI7O0FBRUFELFFBQUksQ0FBQ0ksVUFBTCxDQUFnQkMsT0FBaEIsQ0FBd0IsVUFBQUMsUUFBUSxFQUFJO0FBQUVBLGNBQVEsQ0FBQ0MsTUFBVCxHQUFr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Y0MsR0FBZDtBQUNBLFdBQU9ILEtBQUssQ0FBQ0UsSUFBRCxDQUFaO0FBQ0E7O0FBRURJLFNBQU8sQ0FBQ0MsR0FBUixXQUFvQkwsSUFBcEIsU0FBOEJDLEdBQUcsR0FBR0gsS0FBSyxDQUFDRSxJQUFELENBQXpDLEVBQWlELElBQWpEO0FBRUEsU0FBT0YsS0FBSyxDQUFDRSxJQUFELENBQVo7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBvYnNlcnZhYmxlKHZhbHVlKVxue1xuXHRmdW5jdGlvbiBkYXRhKG5leHRWYWx1ZSlcblx0e1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0dmFsdWUgPSBuZXh0VmFsdWU7XG5cblx0XHRkYXRhLl9vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7IG9ic2VydmVyLl9mcmVzaCA9IGZhbHNlOyB9KTtcblx0XHRkYXRhLl9vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiBvYnNlcnZlcigpKTtcblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGRhdGEuX29ic2VydmVycyA9IG5ldyBTZXQoKTtcblx0ZGF0YS4kbyA9IHRydWU7XG5cblx0cmV0dXJuIGRhdGE7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkKG9icywgdmFsdWUpXG57XG5cdG9icyA9IFtdLmNvbmNhdChvYnMpO1xuXG5cdGZvcihsZXQgb2Igb2Ygb2JzKSB7XG5cdFx0b2IuX29ic2VydmVycy5hZGQodXBkYXRlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRhdGEoKVxuXHR7XG5cdFx0aWYoIXVwZGF0ZS5fZnJlc2gpIHtcblx0XHRcdHVwZGF0ZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZSgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlKClcblx0e1xuXHRcdHVwZGF0ZS5fZnJlc2ggPSB0cnVlO1xuXG5cdFx0ZGF0YS5fb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4gb2JzZXJ2ZXIoKSk7XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRkYXRhLl9vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG5cdGRhdGEuJG8gPSB0cnVlO1xuXG5cdHVwZGF0ZSgpO1xuXG5cdHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlKG9icywgdmFsdWUsIHNraXAgPSBmYWxzZSlcbntcblx0b2JzID0gW10uY29uY2F0KG9icyk7XG5cblx0Zm9yKGxldCBvYiBvZiBvYnMpIHtcblx0XHRpZihvYi5fb2JzZXJ2ZXJzKSB7XG5cdFx0XHRvYi5fb2JzZXJ2ZXJzLmFkZCh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0aWYob2IuX2RlcHMpIHtcblx0XHRcdGZvcihsZXQgZGVwIG9mIG9iLl9kZXBzKSB7XG5cdFx0XHRcdGRlcC5hZGQodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmKCFza2lwKSB7XG5cdFx0dmFsdWUoKTtcblx0fVxufSIsImltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBzdWJzY3JpYmUsIG9uIH0gZnJvbSAnLi9vYnMnO1xuaW1wb3J0IHRpbWVCZW5jaG1hcmsgZnJvbSAnLi90aW1lJztcblxuLyoqXG4gKiBNYWluIGZ1bmN0aW9uc1xuICovXG5mdW5jdGlvbiBwYXJzZUNvbnRleHQoY29udGV4dClcbntcblx0aWYoY29udGV4dCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRjb250ZXh0ID0ge307XG5cdH1cblxuXHRsZXQgcHJvcHMgPSBjb250ZXh0LnByb3BzIHx8IHt9O1xuXHRsZXQgc2xvdHMgPSBjb250ZXh0LnNsb3RzIHx8IHt9O1xuXG5cdHJldHVybiB7XG5cdFx0cHJvcHMsXG5cdFx0c2xvdHMsXG5cdH1cbn1cblxuLy8gR2V0IG5vZGUgZm9yIGh5ZHJhdGlvbiBhbmQgcmVuZGVyXG5mdW5jdGlvbiBnZXROb2RlKHRlbXBsYXRlLCBub2RlKVxue1xuXHRpZihub2RlID09PSBmYWxzZSkge1xuXHRcdG5vZGUgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQuY2xvbmVOb2RlKHRydWUpO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbi8vIElzIHByb3BlcnR5IG9ic2VydmFibGUgXG5mdW5jdGlvbiBpc09ic2VydmFibGUocHJvcClcbntcblx0cmV0dXJuIHByb3AuJG8gIT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgcHJvcCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBTdWJzY3JpYmUgYWN0aW9uIHRvIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIHZhbHVlU3Vic2NyaWJlKGh5ZHJhdGUsIHByb3AsIGZuKVxue1xuXHRoeWRyYXRlID0gaHlkcmF0ZSAhPT0gZmFsc2U7XG5cblx0aWYoIWlzT2JzZXJ2YWJsZShwcm9wKSkge1xuXHRcdGlmKCFoeWRyYXRlKSB7XG5cdFx0XHRmbihwcm9wKTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cblxuXHRzdWJzY3JpYmUocHJvcCwgKCkgPT4ge1xuXHRcdGZuKHByb3AoKSk7XG5cdH0sIGh5ZHJhdGUpO1xuXG5cdFxufVxuXG4vLyBhdHRyIGJpbmRpbmcgYW5kIGh5ZHJhdGlvblxuZnVuY3Rpb24gbWFrZUF0dHJzKG5vZGUsIGh5ZHJhdGUsIGFyZzEsIGFyZzIpXG57XG5cdGlmKGFyZzEgIT09IG51bGwpIHtcblx0XHRmb3IobGV0IGtleSBpbiBhcmcxKSB7XG5cdFx0XHQvLyBjbGVhbnVwIHNhbWUga2V5c1xuXHRcdFx0aWYoYXJnMltrZXldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZGVsZXRlIGFyZzFba2V5XTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFNldCBNYWluIE5vZGUgY29tcG9uZW50IGF0dHJpYnV0ZXNcblx0XHRcdFx0dmFsdWVTdWJzY3JpYmUoaHlkcmF0ZSwgYXJnMVtrZXldLCAodikgPT4ge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKGtleSwgdik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFNldCBwYXNzZWQgY29tcG9uZW50IGF0dHJpYnV0ZXNcblx0Zm9yKGxldCBrZXkgaW4gYXJnMikge1xuXHRcdHZhbHVlU3Vic2NyaWJlKGh5ZHJhdGUsIGFyZzJba2V5XSwgKHYpID0+IHtcblx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKGtleSwgdik7XG5cdFx0fSlcblx0fVxufVxuXG4vLyBldmVudCBiaW5kaW5nXG5mdW5jdGlvbiBtYWtlRXZlbnRzKG5vZGUsIC4uLmFyZ3MpXG57XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdGZvcihsZXQga2V5IGluIGFyZ3NbaV0pIHtcblx0XHRcdGxldCB2YWx1ZSA9IGFyZ3NbaV1ba2V5XTtcblx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZShldmVudCk7XG5cdFx0XHR9KVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEJ1dHRvblxuICovXG5jb25zdCBfYnV0dG9uJCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl9idXR0b24kLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiYnV0dG9uXCI+PHNwYW4+RGVmYXVsdCB0ZXh0PC9zcGFuPjwvZGl2PmA7XG5cbmNvbnN0IGJ1dHRvblZpZXcgPSAoY29udGV4dCwgaHlkcmF0ZSA9IGZhbHNlKSA9PiB7XG5cblx0bGV0IHsgcHJvcHMsIHNsb3RzIH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cblx0bGV0IG5vZGUgPSBnZXROb2RlKF9idXR0b24kLCBoeWRyYXRlKTtcblx0Ly8gbGV0IGQgPSBvYnNlcnZhYmxlKDEpO1xuXHQvLyBzZXRJbnRlcnZhbCgoKSA9PiB7IGQoZCgpICsgMSk7IH0sIDEwMCk7XG5cblx0LyoqXG5cdCAqIFByb3AgSW5oZXJpdGFuY2Vcblx0ICovXG5cdG1ha2VBdHRycyhub2RlLCBoeWRyYXRlLCB7XG5cdFx0Ly8gJ2RhdGEtdGVzdCc6ICgpID0+IHsgcmV0dXJuIGQoKTsgfVxuXHR9LCBjb250ZXh0LmF0dHJzIHx8IHt9KTtcblxuXHRtYWtlRXZlbnRzKG5vZGUsIHtcblx0XHQvLyBjbGljazogKCkgPT4geyBjb25zb2xlLmxvZygndGVzdCcpOyB9XG5cdH0sIGNvbnRleHQub24gfHwge30pO1xuXG5cdC8qKlxuXHQgKiBNYWluXG5cdCAqL1xuXHRsZXQgZGVmYXVsdFNsb3QgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdGxldCBpID0gMDtcblx0Ly8gUmVuZGVyIGFuZCBoeWRyYXRpb24gdGV4dCBub2RlXG5cdHZhbHVlU3Vic2NyaWJlKGh5ZHJhdGUsIHNsb3RzLmRlZmF1bHQsICh2KSA9PiB7XG5cdFx0ZGVmYXVsdFNsb3QuaW5uZXJIVE1MID0gdjtcblx0fSlcblxuXHRyZXR1cm4gbm9kZTtcbn07XG5cbi8qKlxuICogUGFnZVxuICovXG5sZXQgdGltZXIgPSBudWxsO1xuY29uc3QgX3BhZ2UkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX3BhZ2UkLmlubmVySFRNTCA9IGA8ZGl2PjwhLS0tLT48L2Rpdj5gO1xuXG5jb25zdCBwYWdlVmlldyA9IChjb250ZXh0LCBoeWRyYXRlID0gZmFsc2UpID0+IHtcblx0XG5cdGxldCB7IHByb3BzLCBzbG90cyB9ID0gcGFyc2VDb250ZXh0KGNvbnRleHQpO1xuXG5cdGxldCBub2RlID0gZ2V0Tm9kZShfcGFnZSQsIGh5ZHJhdGUpO1xuXHRsZXQgaXRlbXMgPSBvYnNlcnZhYmxlKEFycmF5LmZyb20oeyBsZW5ndGg6IDEwMDAgfSwgKF8sIGkpID0+IGkpKTtcblx0bGV0IHMxID0gb2JzZXJ2YWJsZSgxKTtcblxuXHQvLyBjbGVhckludGVydmFsKHRpbWVyKTtcblx0Ly8gdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdC8vIFx0czEoczEoKSArIDEpO1xuXHQvLyB9LCAxMDAwKVxuXHQvLyB0ZXN0IHNpbXBsZSBsb29wXG5cdGxldCBsb29wQmluZGluZyA9IG5vZGUuZmlyc3RDaGlsZDtcblx0c3Vic2NyaWJlKGl0ZW1zLCAoKSA9PiB7XG5cdFx0bGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0bGV0IGFyciA9IGl0ZW1zKCk7XG5cblx0XHQvLyBjcmVhdGUgY29tcG9uZW50c1xuXHRcdGxldCBfYnV0dG9uX3RtcCA9IChpdGVtLCBrZXksIG5vZGUgPSBmYWxzZSkgPT4ge1xuXHRcdFx0cmV0dXJuIGJ1dHRvblZpZXcoe1xuXHRcdFx0XHQvLyBvbjoge1xuXHRcdFx0XHQvLyBcdGNsaWNrOiAoKSA9PiB7IGFsZXJ0KGtleSk7IH1cblx0XHRcdFx0Ly8gfSxcblx0XHRcdFx0c2xvdHM6IHtcblx0XHRcdFx0XHRkZWZhdWx0OiBgQnV0dG9uICR7IGl0ZW0gfWAsXG5cdFx0XHRcdFx0Ly8gZGVmYXVsdDogY29tcHV0ZWQoczEsICgpID0+IGBCdXR0b24gJHsgYXJyW2tleV0gfSAtICR7IHMxKCkgfWApXG5cdFx0XHRcdH1cblx0XHRcdH0sIG5vZGUpO1xuXHRcdH1cblxuXHRcdC8vIExvb3AgcmVuZGVyIGZ1bmN0aW9uXG5cdFx0aWYoaHlkcmF0ZSA9PT0gZmFsc2UpIHtcblx0XHRcdGZvcihsZXQga2V5IGluIGFycikge1xuXHRcdFx0XHRidXR0b25zLmFwcGVuZENoaWxkKF9idXR0b25fdG1wKGFycltrZXldLCBrZXkpKTtcblx0XHRcdH1cblxuXHRcdFx0bG9vcEJpbmRpbmcucmVwbGFjZVdpdGgoYnV0dG9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIExvb3AgaHlkcmF0aW9uIGZ1bmN0aW9uXG5cdFx0XHRsZXQgc3RhcnROb2RlID0gbG9vcEJpbmRpbmc7XG5cdFx0XHRmb3IobGV0IGtleSBpbiBhcnIpIHtcblx0XHRcdFx0aWYoc3RhcnROb2RlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gY29udGludWU7XG5cdFx0XHRcdF9idXR0b25fdG1wKGFycltrZXldLCBrZXksIHN0YXJ0Tm9kZSk7XG5cblx0XHRcdFx0c3RhcnROb2RlID0gc3RhcnROb2RlLm5leHRFbGVtZW50U2libGluZztcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBub2RlO1xufVxuXG5cblxubGV0IExBWU9VVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXlvdXQnKTtcblxuLyoqXG4gKiBSZW5kZXJcbiAqL1xuXG5MQVlPVVQuaW5uZXJIVE1MID0gJyc7XG5cbnRpbWVCZW5jaG1hcmsoJ3JlbmRlcicpO1xuTEFZT1VULmFwcGVuZENoaWxkKHBhZ2VWaWV3KCkpO1xudGltZUJlbmNobWFyaygncmVuZGVyJyk7XG5cbi8qKlxuICogSHlkcmF0ZVxuICovXG4gXG5jbGVhckludGVydmFsKHRpbWVyKTtcbmxldCBfX3RtcCA9IExBWU9VVC5pbm5lckhUTUw7XG5MQVlPVVQuaW5uZXJIVE1MID0gX190bXA7XG5cbnNldFRpbWVvdXQoKCkgPT4ge1xuXHR0aW1lQmVuY2htYXJrKCdoeWRyYXRlJyk7XG5cdHBhZ2VWaWV3KG51bGwsIExBWU9VVC5maXJzdENoaWxkKTtcblx0dGltZUJlbmNobWFyaygnaHlkcmF0ZScpO1xufSwgMjAwMCk7IiwibGV0IHRpbWVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUobmFtZSlcbntcblx0bGV0IG5vdyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdGlmKHR5cGVvZiB0aW1lc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aW1lc1tuYW1lXSA9IG5vdztcblx0XHRyZXR1cm4gdGltZXNbbmFtZV07XG5cdH1cblxuXHRjb25zb2xlLmxvZyhgWyB0YiAke25hbWV9IF1gLCBub3cgLSB0aW1lc1tuYW1lXSwgJ21zJyk7XG5cblx0ZGVsZXRlIHRpbWVzW25hbWVdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==