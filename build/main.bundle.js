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

/***/ "./src/template-test.js":
/*!******************************!*\
  !*** ./src/template-test.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _observable = __webpack_require__(/*! sinuous/observable */ "./node_modules/sinuous/module/observable.js");

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

  var first = hydrate; // return;
  // Skip first hydration

  (0, _observable.subscribe)(function () {
    var v = prop();

    if (first) {
      first = false;
      return;
    }

    fn(v);
  });
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

  var defaultSlot = node.firstChild; // Render and hydration text node

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
  var items = (0, _observable.observable)(Array.from({
    length: 1000
  }, function (_, i) {
    return i;
  }));
  var s1 = (0, _observable.observable)(1); // clearInterval(timer);
  // timer = setInterval(() => {
  // 	s1(s1() + 1);
  // }, 1000)
  // test simple loop

  var loopBinding = node.firstChild;
  (0, _observable.subscribe)(function () {
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
          default: "Button " + item // default2: () => `Button ${ arr[key] } - ${ s1() }`

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlLXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWUuanMiXSwibmFtZXMiOlsicGFyc2VDb250ZXh0IiwiY29udGV4dCIsInVuZGVmaW5lZCIsInByb3BzIiwic2xvdHMiLCJnZXROb2RlIiwidGVtcGxhdGUiLCJub2RlIiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJjbG9uZU5vZGUiLCJpc09ic2VydmFibGUiLCJwcm9wIiwiJG8iLCJ2YWx1ZVN1YnNjcmliZSIsImh5ZHJhdGUiLCJmbiIsImZpcnN0IiwidiIsIm1ha2VBdHRycyIsImFyZzEiLCJhcmcyIiwia2V5Iiwic2V0QXR0cmlidXRlIiwibWFrZUV2ZW50cyIsImFyZ3MiLCJpIiwibGVuZ3RoIiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJfYnV0dG9uJCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImJ1dHRvblZpZXciLCJhdHRycyIsIm9uIiwiZGVmYXVsdFNsb3QiLCJkZWZhdWx0IiwidGltZXIiLCJfcGFnZSQiLCJwYWdlVmlldyIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiXyIsInMxIiwibG9vcEJpbmRpbmciLCJidXR0b25zIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImFyciIsIl9idXR0b25fdG1wIiwiaXRlbSIsImFwcGVuZENoaWxkIiwicmVwbGFjZVdpdGgiLCJzdGFydE5vZGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJMQVlPVVQiLCJnZXRFbGVtZW50QnlJZCIsImNsZWFySW50ZXJ2YWwiLCJfX3RtcCIsInNldFRpbWVvdXQiLCJ0aW1lcyIsInRpbWUiLCJuYW1lIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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SixXQUFQLENBQW1CWixRQUFRLEVBQTNCO0FBQ0EsbUJBQWMsUUFBZDtBQUVBOzs7O0FBSUFrQixhQUFhLENBQUNwQixLQUFELENBQWI7QUFDQSxJQUFJcUIsS0FBSyxHQUFHSCxNQUFNLENBQUN4QixTQUFuQjtBQUNBd0IsTUFBTSxDQUFDeEIsU0FBUCxHQUFtQjJCLEtBQW5CO0FBRUFDLFVBQVUsQ0FBQyxZQUFNO0FBQ2hCLHFCQUFjLFNBQWQ7QUFDQXBCLFVBQVEsQ0FBQyxJQUFELEVBQU9nQixNQUFNLENBQUNqRCxVQUFkLENBQVI7QUFDQSxxQkFBYyxTQUFkO0FBQ0EsQ0FKUyxFQUlQLElBSk8sQ0FBVixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyT0EsSUFBSXNELEtBQUssR0FBRyxFQUFaOztBQUVlLFNBQVNDLElBQVQsQ0FBY0MsSUFBZCxFQUNmO0FBQ0MsTUFBSUMsR0FBRyxHQUFJLElBQUlDLElBQUosRUFBRCxDQUFXQyxPQUFYLEVBQVY7O0FBRUEsTUFBRyxPQUFPTCxLQUFLLENBQUNFLElBQUQsQ0FBWixLQUF1QixXQUExQixFQUF1QztBQUN0Q0YsU0FBSyxDQUFDRSxJQUFELENBQUwsR0FBY0MsR0FBZDtBQUNBLFdBQU9ILEtBQUssQ0FBQ0UsSUFBRCxDQUFaO0FBQ0E7O0FBRURJLFNBQU8sQ0FBQ0MsR0FBUixXQUFvQkwsSUFBcEIsU0FBOEJDLEdBQUcsR0FBR0gsS0FBSyxDQUFDRSxJQUFELENBQXpDLEVBQWlELElBQWpEO0FBRUEsU0FBT0YsS0FBSyxDQUFDRSxJQUFELENBQVo7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSwgb24gfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuaW1wb3J0IHRpbWVCZW5jaG1hcmsgZnJvbSAnLi90aW1lJztcblxuLyoqXG4gKiBNYWluIGZ1bmN0aW9uc1xuICovXG5mdW5jdGlvbiBwYXJzZUNvbnRleHQoY29udGV4dClcbntcblx0aWYoY29udGV4dCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRjb250ZXh0ID0ge307XG5cdH1cblxuXHRsZXQgcHJvcHMgPSBjb250ZXh0LnByb3BzIHx8IHt9O1xuXHRsZXQgc2xvdHMgPSBjb250ZXh0LnNsb3RzIHx8IHt9O1xuXG5cdHJldHVybiB7XG5cdFx0cHJvcHMsXG5cdFx0c2xvdHMsXG5cdH1cbn1cblxuLy8gR2V0IG5vZGUgZm9yIGh5ZHJhdGlvbiBhbmQgcmVuZGVyXG5mdW5jdGlvbiBnZXROb2RlKHRlbXBsYXRlLCBub2RlKVxue1xuXHRpZihub2RlID09PSBmYWxzZSkge1xuXHRcdG5vZGUgPSB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQuY2xvbmVOb2RlKHRydWUpO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbi8vIElzIHByb3BlcnR5IG9ic2VydmFibGUgXG5mdW5jdGlvbiBpc09ic2VydmFibGUocHJvcClcbntcblx0cmV0dXJuIHByb3AuJG8gIT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgcHJvcCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBTdWJzY3JpYmUgYWN0aW9uIHRvIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIHZhbHVlU3Vic2NyaWJlKGh5ZHJhdGUsIHByb3AsIGZuKVxue1xuXHRoeWRyYXRlID0gaHlkcmF0ZSAhPT0gZmFsc2U7XG5cblx0aWYoIWlzT2JzZXJ2YWJsZShwcm9wKSkge1xuXHRcdGlmKCFoeWRyYXRlKSB7XG5cdFx0XHRmbihwcm9wKTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGZpcnN0ID0gaHlkcmF0ZTtcblxuXHQvLyByZXR1cm47XG5cdC8vIFNraXAgZmlyc3QgaHlkcmF0aW9uXG5cblx0c3Vic2NyaWJlKCgpID0+IHtcblx0XHRsZXQgdiA9IHByb3AoKTtcblxuXHRcdGlmKGZpcnN0KSB7XG5cdFx0XHRmaXJzdCA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZuKHYpO1xuXHR9KTtcbn1cblxuLy8gYXR0ciBiaW5kaW5nIGFuZCBoeWRyYXRpb25cbmZ1bmN0aW9uIG1ha2VBdHRycyhub2RlLCBoeWRyYXRlLCBhcmcxLCBhcmcyKVxue1xuXHRpZihhcmcxICE9PSBudWxsKSB7XG5cdFx0Zm9yKGxldCBrZXkgaW4gYXJnMSkge1xuXHRcdFx0Ly8gY2xlYW51cCBzYW1lIGtleXNcblx0XHRcdGlmKGFyZzJba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGRlbGV0ZSBhcmcxW2tleV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBTZXQgTWFpbiBOb2RlIGNvbXBvbmVudCBhdHRyaWJ1dGVzXG5cdFx0XHRcdHZhbHVlU3Vic2NyaWJlKGh5ZHJhdGUsIGFyZzFba2V5XSwgKHYpID0+IHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZShrZXksIHYpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgcGFzc2VkIGNvbXBvbmVudCBhdHRyaWJ1dGVzXG5cdGZvcihsZXQga2V5IGluIGFyZzIpIHtcblx0XHR2YWx1ZVN1YnNjcmliZShoeWRyYXRlLCBhcmcyW2tleV0sICh2KSA9PiB7XG5cdFx0XHRub2RlLnNldEF0dHJpYnV0ZShrZXksIHYpO1xuXHRcdH0pXG5cdH1cbn1cblxuLy8gZXZlbnQgYmluZGluZ1xuZnVuY3Rpb24gbWFrZUV2ZW50cyhub2RlLCAuLi5hcmdzKVxue1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRmb3IobGV0IGtleSBpbiBhcmdzW2ldKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmdzW2ldW2tleV07XG5cdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUoZXZlbnQpO1xuXHRcdFx0fSlcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBCdXR0b25cbiAqL1xuY29uc3QgX2J1dHRvbiQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fYnV0dG9uJC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImJ1dHRvblwiPjxzcGFuPkRlZmF1bHQgdGV4dDwvc3Bhbj48L2Rpdj5gO1xuXG5jb25zdCBidXR0b25WaWV3ID0gKGNvbnRleHQsIGh5ZHJhdGUgPSBmYWxzZSkgPT4ge1xuXG5cdGxldCB7IHByb3BzLCBzbG90cyB9ID0gcGFyc2VDb250ZXh0KGNvbnRleHQpO1xuXG5cdGxldCBub2RlID0gZ2V0Tm9kZShfYnV0dG9uJCwgaHlkcmF0ZSk7XG5cdC8vIGxldCBkID0gb2JzZXJ2YWJsZSgxKTtcblxuXHQvLyBzZXRJbnRlcnZhbCgoKSA9PiB7IGQoZCgpICsgMSk7IH0sIDEwMCk7XG5cdC8qKlxuXHQgKiBQcm9wIEluaGVyaXRhbmNlXG5cdCAqL1xuXHRtYWtlQXR0cnMobm9kZSwgaHlkcmF0ZSwge1xuXHRcdC8vICdkYXRhLXRlc3QnOiAoKSA9PiB7IHJldHVybiBkKCk7IH1cblx0fSwgY29udGV4dC5hdHRycyB8fCB7fSk7XG5cblx0bWFrZUV2ZW50cyhub2RlLCB7XG5cdFx0Ly8gY2xpY2s6ICgpID0+IHsgY29uc29sZS5sb2coJ3Rlc3QnKTsgfVxuXHR9LCBjb250ZXh0Lm9uIHx8IHt9KTtcblxuXHQvKipcblx0ICogTWFpblxuXHQgKi9cblx0bGV0IGRlZmF1bHRTbG90ID0gbm9kZS5maXJzdENoaWxkO1xuXG5cdC8vIFJlbmRlciBhbmQgaHlkcmF0aW9uIHRleHQgbm9kZVxuXHR2YWx1ZVN1YnNjcmliZShoeWRyYXRlLCBzbG90cy5kZWZhdWx0LCAodikgPT4ge1xuXHRcdGRlZmF1bHRTbG90LmlubmVySFRNTCA9IHY7XG5cdH0pXG5cblx0cmV0dXJuIG5vZGU7XG59O1xuXG4vKipcbiAqIFBhZ2VcbiAqL1xubGV0IHRpbWVyID0gbnVsbDtcbmNvbnN0IF9wYWdlJCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl9wYWdlJC5pbm5lckhUTUwgPSBgPGRpdj48IS0tLS0+PC9kaXY+YDtcblxuY29uc3QgcGFnZVZpZXcgPSAoY29udGV4dCwgaHlkcmF0ZSA9IGZhbHNlKSA9PiB7XG5cdFxuXHRsZXQgeyBwcm9wcywgc2xvdHMgfSA9IHBhcnNlQ29udGV4dChjb250ZXh0KTtcblxuXHRsZXQgbm9kZSA9IGdldE5vZGUoX3BhZ2UkLCBoeWRyYXRlKTtcblx0bGV0IGl0ZW1zID0gb2JzZXJ2YWJsZShBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMDAwIH0sIChfLCBpKSA9PiBpKSk7XG5cdGxldCBzMSA9IG9ic2VydmFibGUoMSk7XG5cblx0Ly8gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG5cdC8vIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHQvLyBcdHMxKHMxKCkgKyAxKTtcblx0Ly8gfSwgMTAwMClcblx0Ly8gdGVzdCBzaW1wbGUgbG9vcFxuXHRsZXQgbG9vcEJpbmRpbmcgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdHN1YnNjcmliZSgoKSA9PiB7XG5cdFx0bGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0bGV0IGFyciA9IGl0ZW1zKCk7XG5cblx0XHQvLyBjcmVhdGUgY29tcG9uZW50c1xuXHRcdGxldCBfYnV0dG9uX3RtcCA9IChpdGVtLCBrZXksIG5vZGUgPSBmYWxzZSkgPT4ge1xuXHRcdFx0cmV0dXJuIGJ1dHRvblZpZXcoe1xuXHRcdFx0XHQvLyBvbjoge1xuXHRcdFx0XHQvLyBcdGNsaWNrOiAoKSA9PiB7IGFsZXJ0KGtleSk7IH1cblx0XHRcdFx0Ly8gfSxcblx0XHRcdFx0c2xvdHM6IHtcblx0XHRcdFx0XHRkZWZhdWx0OiBgQnV0dG9uICR7IGl0ZW0gfWAsXG5cdFx0XHRcdFx0Ly8gZGVmYXVsdDI6ICgpID0+IGBCdXR0b24gJHsgYXJyW2tleV0gfSAtICR7IHMxKCkgfWBcblx0XHRcdFx0fVxuXHRcdFx0fSwgbm9kZSk7XG5cdFx0fVxuXG5cdFx0Ly8gTG9vcCByZW5kZXIgZnVuY3Rpb25cblx0XHRpZihoeWRyYXRlID09PSBmYWxzZSkge1xuXHRcdFx0Zm9yKGxldCBrZXkgaW4gYXJyKSB7XG5cdFx0XHRcdGJ1dHRvbnMuYXBwZW5kQ2hpbGQoX2J1dHRvbl90bXAoYXJyW2tleV0sIGtleSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRsb29wQmluZGluZy5yZXBsYWNlV2l0aChidXR0b25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gTG9vcCBoeWRyYXRpb24gZnVuY3Rpb25cblx0XHRcdGxldCBzdGFydE5vZGUgPSBsb29wQmluZGluZztcblx0XHRcdGZvcihsZXQga2V5IGluIGFycikge1xuXHRcdFx0XHRpZihzdGFydE5vZGUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBjb250aW51ZTtcblx0XHRcdFx0X2J1dHRvbl90bXAoYXJyW2tleV0sIGtleSwgc3RhcnROb2RlKTtcblxuXHRcdFx0XHRzdGFydE5vZGUgPSBzdGFydE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cblxuXG5sZXQgTEFZT1VUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXG4vKipcbiAqIFJlbmRlclxuICovXG5cbkxBWU9VVC5pbm5lckhUTUwgPSAnJztcblxudGltZUJlbmNobWFyaygncmVuZGVyJyk7XG5MQVlPVVQuYXBwZW5kQ2hpbGQocGFnZVZpZXcoKSk7XG50aW1lQmVuY2htYXJrKCdyZW5kZXInKTtcblxuLyoqXG4gKiBIeWRyYXRlXG4gKi9cbiBcbmNsZWFySW50ZXJ2YWwodGltZXIpO1xubGV0IF9fdG1wID0gTEFZT1VULmlubmVySFRNTDtcbkxBWU9VVC5pbm5lckhUTUwgPSBfX3RtcDtcblxuc2V0VGltZW91dCgoKSA9PiB7XG5cdHRpbWVCZW5jaG1hcmsoJ2h5ZHJhdGUnKTtcblx0cGFnZVZpZXcobnVsbCwgTEFZT1VULmZpcnN0Q2hpbGQpO1xuXHR0aW1lQmVuY2htYXJrKCdoeWRyYXRlJyk7XG59LCAyMDAwKTsiLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9