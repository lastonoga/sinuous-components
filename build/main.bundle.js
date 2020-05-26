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

  var first = hydrate; // Skip first hydration

  (0, _observable.subscribe)(function () {
    var v = prop();

    if (first) {
      first = false;
      return;
    } // console.log('do', v);


    fn(v);
  });
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

  var node = getNode(_button$, hydrate);
  var defaultSlot = node.firstChild;
  valueSubscribe(hydrate, slots.default, function (v) {
    defaultSlot.innerHTML = v;
  });

  node.onclick = function () {
    alert(1);
  };

  return node;
};
/**
 * Page
 */


var _page$ = document.createElement("template");

_page$.innerHTML = "<div><span>v-for-loading</span></div>";

var pageView = function pageView(context, hydrate) {
  if (hydrate === void 0) {
    hydrate = false;
  }

  var _parseContext2 = parseContext(context),
      props = _parseContext2.props,
      slots = _parseContext2.slots;

  var node = getNode(_page$, hydrate);
  var items = (0, _observable.observable)(Array.from({
    length: 10000
  }, function (_, i) {
    return i;
  }));
  var s1 = (0, _observable.observable)(1); // setInterval(() => {
  // 	s1(s1() + 1);
  // }, 500)
  // test simple loop

  var loopBinding = node.firstChild;
  (0, _observable.subscribe)(function () {
    var buttons = document.createDocumentFragment();
    var arr = items(); // Loop render function

    if (hydrate === false) {
      for (var key in arr) {
        var _button_tmp = buttonView({
          slots: {
            default: "Button " + arr[key] // default2: () => `Button ${ arr[key] } - ${ s1() }`

          }
        });

        buttons.appendChild(_button_tmp);
      }

      loopBinding.replaceWith(buttons);
    } else {
      // Loop hydration function
      var startNode = loopBinding;

      for (var _key in arr) {
        if (startNode === null) {
          break;
        }

        var _button_tmp2 = buttonView({
          slots: {
            default: "Button " + arr[_key] // default2: () => `Button ${ arr[key] } - ${ s1() }`

          }
        }, startNode);

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
// LAYOUT.innerHTML = '';

(0, _time.default)('render');
LAYOUT.appendChild(pageView());
(0, _time.default)('render');
/**
 * Hydrate
 */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlLXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWUuanMiXSwibmFtZXMiOlsicGFyc2VDb250ZXh0IiwiY29udGV4dCIsInVuZGVmaW5lZCIsInByb3BzIiwic2xvdHMiLCJnZXROb2RlIiwidGVtcGxhdGUiLCJub2RlIiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJjbG9uZU5vZGUiLCJpc09ic2VydmFibGUiLCJwcm9wIiwiJG8iLCJ2YWx1ZVN1YnNjcmliZSIsImh5ZHJhdGUiLCJmbiIsImZpcnN0IiwidiIsIl9idXR0b24kIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYnV0dG9uVmlldyIsImRlZmF1bHRTbG90IiwiZGVmYXVsdCIsIm9uY2xpY2siLCJhbGVydCIsIl9wYWdlJCIsInBhZ2VWaWV3IiwiaXRlbXMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaSIsInMxIiwibG9vcEJpbmRpbmciLCJidXR0b25zIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImFyciIsImtleSIsIl9idXR0b25fdG1wIiwiYXBwZW5kQ2hpbGQiLCJyZXBsYWNlV2l0aCIsInN0YXJ0Tm9kZSIsIm5leHRFbGVtZW50U2libGluZyIsIkxBWU9VVCIsImdldEVsZW1lbnRCeUlkIiwic2V0VGltZW91dCIsInRpbWVzIiwidGltZSIsIm5hbWUiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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QkFBdEI7QUFDQTtBQUNEO0FBQ0QsR0FyQ0Q7QUF1Q0EsU0FBT3ZDLElBQVA7QUFDQSxDQXJERDs7QUF5REEsSUFBSXdDLE1BQU0sR0FBRzNCLFFBQVEsQ0FBQzRCLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUVBOzs7QUFJQTs7QUFFQSxtQkFBYyxRQUFkO0FBQ0FELE1BQU0sQ0FBQ0osV0FBUCxDQUFtQmQsUUFBUSxFQUEzQjtBQUNBLG1CQUFjLFFBQWQ7QUFFQTs7OztBQUdBb0IsVUFBVSxDQUFDLFlBQU07QUFDaEIscUJBQWMsU0FBZDtBQUNBcEIsVUFBUSxDQUFDLElBQUQsRUFBT2tCLE1BQU0sQ0FBQ3RDLFVBQWQsQ0FBUjtBQUNBLHFCQUFjLFNBQWQ7QUFDQSxDQUpTLEVBSVAsSUFKTyxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdLQSxJQUFJeUMsS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBU0MsSUFBVCxDQUFjQyxJQUFkLEVBQ2Y7QUFDQyxNQUFJQyxHQUFHLEdBQUksSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsRUFBVjs7QUFFQSxNQUFHLE9BQU9MLEtBQUssQ0FBQ0UsSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDRixTQUFLLENBQUNFLElBQUQsQ0FBTCxHQUFjQyxHQUFkO0FBQ0EsV0FBT0gsS0FBSyxDQUFDRSxJQUFELENBQVo7QUFDQTs7QUFFREksU0FBTyxDQUFDQyxHQUFSLFdBQW9CTCxJQUFwQixTQUE4QkMsR0FBRyxHQUFHSCxLQUFLLENBQUNFLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPRixLQUFLLENBQUNFLElBQUQsQ0FBWjtBQUNBLEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcbmltcG9ydCB0aW1lQmVuY2htYXJrIGZyb20gJy4vdGltZSc7XG5cbi8qKlxuICogTWFpbiBmdW5jdGlvbnNcbiAqL1xuZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpXG57XG5cdGlmKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0Y29udGV4dCA9IHt9O1xuXHR9XG5cblx0bGV0IHByb3BzID0gY29udGV4dC5wcm9wcyB8fCB7fTtcblx0bGV0IHNsb3RzID0gY29udGV4dC5zbG90cyB8fCB7fTtcblxuXHRyZXR1cm4ge1xuXHRcdHByb3BzLFxuXHRcdHNsb3RzLFxuXHR9XG59XG5cbi8vIEdldCBub2RlIGZvciBoeWRyYXRpb24gYW5kIHJlbmRlclxuZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSlcbntcblx0aWYobm9kZSA9PT0gZmFsc2UpIHtcblx0XHRub2RlID0gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkLmNsb25lTm9kZSh0cnVlKTtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG4vLyBJcyBwcm9wZXJ0eSBvYnNlcnZhYmxlIFxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlKHByb3ApXG57XG5cdHJldHVybiBwcm9wLiRvICE9PSB1bmRlZmluZWQgfHwgdHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogU3Vic2NyaWJlIGFjdGlvbiB0byBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiB2YWx1ZVN1YnNjcmliZShoeWRyYXRlLCBwcm9wLCBmbilcbntcblx0aHlkcmF0ZSA9IGh5ZHJhdGUgIT09IGZhbHNlO1xuXG5cdGlmKCFpc09ic2VydmFibGUocHJvcCkpIHtcblx0XHRpZighaHlkcmF0ZSkge1xuXHRcdFx0Zm4ocHJvcCk7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBmaXJzdCA9IGh5ZHJhdGU7XG5cblx0Ly8gU2tpcCBmaXJzdCBoeWRyYXRpb25cblx0c3Vic2NyaWJlKCgpID0+IHtcblx0XHRsZXQgdiA9IHByb3AoKTtcblxuXHRcdGlmKGZpcnN0KSB7XG5cdFx0XHRmaXJzdCA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUubG9nKCdkbycsIHYpO1xuXG5cdFx0Zm4odik7XG5cdH0pO1xufVxuXG5cbi8qKlxuICogQnV0dG9uXG4gKi9cbmNvbnN0IF9idXR0b24kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX2J1dHRvbiQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJidXR0b25cIj48c3Bhbj5EZWZhdWx0IHRleHQ8L3NwYW4+PC9kaXY+YDtcblxuY29uc3QgYnV0dG9uVmlldyA9IChjb250ZXh0LCBoeWRyYXRlID0gZmFsc2UpID0+IHtcblxuXHRsZXQgeyBwcm9wcywgc2xvdHMgfSA9IHBhcnNlQ29udGV4dChjb250ZXh0KTtcblxuXHRsZXQgbm9kZSA9IGdldE5vZGUoX2J1dHRvbiQsIGh5ZHJhdGUpO1xuXG5cdGxldCBkZWZhdWx0U2xvdCA9IG5vZGUuZmlyc3RDaGlsZDtcblxuXHR2YWx1ZVN1YnNjcmliZShoeWRyYXRlLCBzbG90cy5kZWZhdWx0LCAodikgPT4ge1xuXHRcdGRlZmF1bHRTbG90LmlubmVySFRNTCA9IHY7XG5cdH0pXG5cblx0bm9kZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0YWxlcnQoMSk7XG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn07XG5cbi8qKlxuICogUGFnZVxuICovXG5cbmNvbnN0IF9wYWdlJCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl9wYWdlJC5pbm5lckhUTUwgPSBgPGRpdj48c3Bhbj52LWZvci1sb2FkaW5nPC9zcGFuPjwvZGl2PmA7XG5cbmNvbnN0IHBhZ2VWaWV3ID0gKGNvbnRleHQsIGh5ZHJhdGUgPSBmYWxzZSkgPT4ge1xuXHRcblx0bGV0IHsgcHJvcHMsIHNsb3RzIH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cblx0bGV0IG5vZGUgPSBnZXROb2RlKF9wYWdlJCwgaHlkcmF0ZSk7XG5cdGxldCBpdGVtcyA9IG9ic2VydmFibGUoQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAwMDAgfSwgKF8sIGkpID0+IGkpKTtcblx0bGV0IHMxID0gb2JzZXJ2YWJsZSgxKTtcblxuXHQvLyBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdC8vIFx0czEoczEoKSArIDEpO1xuXHQvLyB9LCA1MDApXG5cdC8vIHRlc3Qgc2ltcGxlIGxvb3Bcblx0bGV0IGxvb3BCaW5kaW5nID0gbm9kZS5maXJzdENoaWxkO1xuXHRzdWJzY3JpYmUoKCkgPT4ge1xuXHRcdGxldCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdGxldCBhcnIgPSBpdGVtcygpO1xuXG5cdFx0Ly8gTG9vcCByZW5kZXIgZnVuY3Rpb25cblx0XHRpZihoeWRyYXRlID09PSBmYWxzZSkge1xuXHRcdFx0Zm9yKGxldCBrZXkgaW4gYXJyKSB7XG5cdFx0XHRcdGxldCBfYnV0dG9uX3RtcCA9IGJ1dHRvblZpZXcoe1xuXHRcdFx0XHRcdHNsb3RzOiB7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OiBgQnV0dG9uICR7IGFycltrZXldIH1gLFxuXHRcdFx0XHRcdFx0Ly8gZGVmYXVsdDI6ICgpID0+IGBCdXR0b24gJHsgYXJyW2tleV0gfSAtICR7IHMxKCkgfWBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFxuXHRcdFx0XHRidXR0b25zLmFwcGVuZENoaWxkKF9idXR0b25fdG1wKTtcblx0XHRcdH1cblxuXHRcdFx0bG9vcEJpbmRpbmcucmVwbGFjZVdpdGgoYnV0dG9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIExvb3AgaHlkcmF0aW9uIGZ1bmN0aW9uXG5cdFx0XHRsZXQgc3RhcnROb2RlID0gbG9vcEJpbmRpbmc7XG5cdFx0XHRmb3IobGV0IGtleSBpbiBhcnIpIHtcblx0XHRcdFx0aWYoc3RhcnROb2RlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgX2J1dHRvbl90bXAgPSBidXR0b25WaWV3KHtcblx0XHRcdFx0XHRzbG90czoge1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDogYEJ1dHRvbiAkeyBhcnJba2V5XSB9YCxcblx0XHRcdFx0XHRcdC8vIGRlZmF1bHQyOiAoKSA9PiBgQnV0dG9uICR7IGFycltrZXldIH0gLSAkeyBzMSgpIH1gXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCBzdGFydE5vZGUpO1xuXG5cdFx0XHRcdHN0YXJ0Tm9kZSA9IHN0YXJ0Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuXG5cbmxldCBMQVlPVVQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cbi8qKlxuICogUmVuZGVyXG4gKi9cblxuLy8gTEFZT1VULmlubmVySFRNTCA9ICcnO1xuXG50aW1lQmVuY2htYXJrKCdyZW5kZXInKTtcbkxBWU9VVC5hcHBlbmRDaGlsZChwYWdlVmlldygpKTtcbnRpbWVCZW5jaG1hcmsoJ3JlbmRlcicpO1xuXG4vKipcbiAqIEh5ZHJhdGVcbiAqL1xuc2V0VGltZW91dCgoKSA9PiB7XG5cdHRpbWVCZW5jaG1hcmsoJ2h5ZHJhdGUnKTtcblx0cGFnZVZpZXcobnVsbCwgTEFZT1VULmZpcnN0Q2hpbGQpO1xuXHR0aW1lQmVuY2htYXJrKCdoeWRyYXRlJyk7XG59LCAyMDAwKTsiLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9