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

/***/ "./packages/compiler/dist/block.js":
/*!*****************************************!*\
  !*** ./packages/compiler/dist/block.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _script = __webpack_require__(/*! ./script */ "./packages/compiler/dist/script/index.js");

var _template = __webpack_require__(/*! ./template */ "./packages/compiler/dist/template/index.js");

function compiler(context, _ref) {
  var blocks = _ref.blocks,
      source = _ref.source,
      type = _ref.type;

  var exec = function exec() {
    return source;
  };

  if (type === 'script') {
    var s = (0, _script.compileScript)(context, source);
    source = s.code == '' ? null : s.code;
  }

  if (type === 'template') {
    source = (0, _template.compileTemplate)(context, source, blocks);
  }

  return {
    source: source,
    type: type,
    exec: exec
  };
}

function _default(context, _ref2) {
  var type = _ref2.type,
      source = _ref2.source;
  return {
    type: type,
    source: source,
    exec: function exec(blocks) {
      if (blocks === void 0) {
        blocks = [];
      }

      return compiler(context, {
        blocks: blocks,
        source: this.source,
        type: this.type
      });
    }
  };
}

;

/***/ }),

/***/ "./packages/compiler/dist/compiler.js":
/*!********************************************!*\
  !*** ./packages/compiler/dist/compiler.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compiler = compiler;

var _nodeHtmlParser = __webpack_require__(/*! node-html-parser */ "./node_modules/node-html-parser/dist/index.js");

var _block = _interopRequireDefault(__webpack_require__(/*! ./block.js */ "./packages/compiler/dist/block.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function compiler(_ref) {
  var context = _ref.context,
      type = _ref.type,
      source = _ref.source;
  var root = (0, _nodeHtmlParser.parse)(source, {
    lowerCaseTagName: true,
    script: true
  });
  var nodes = root.childNodes;
  var blocks = {};

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].tagName) {
      blocks[nodes[i].tagName] = (0, _block.default)(context, {
        type: nodes[i].tagName,
        source: nodes[i].innerHTML
      });
    }
  }

  if (blocks[type]) {
    return blocks[type].exec(blocks);
  }

  return (0, _block.default)(context, {
    type: type,
    source: null
  });
}

/***/ }),

/***/ "./packages/compiler/dist/empty.js":
/*!*****************************************!*\
  !*** ./packages/compiler/dist/empty.js ***!
  \*****************************************/
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

/***/ "./packages/compiler/dist/helpers.js":
/*!*******************************************!*\
  !*** ./packages/compiler/dist/helpers.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIdentifierReactive = isIdentifierReactive;
exports.getIdentifierName = getIdentifierName;
exports.checkFunctionArgumentDeclaration = checkFunctionArgumentDeclaration;
exports.setIdentifierContext = setIdentifierContext;
exports.matchIdentifier = matchIdentifier;
exports.ReactiveNamespaces = void 0;
var ReactiveNamespaces = ['state', 'computed'];
exports.ReactiveNamespaces = ReactiveNamespaces;

function isIdentifierReactive(data, id) {
  var name = id.name;

  if (name.match(/^\$/g)) {
    return true;
  }

  return data.state[name];
}

function getIdentifierName(id) {
  if (!id) {
    return null;
  }

  var name = id.name;

  if (name.match(/^\$/g)) {
    return name.substring(1);
  }

  return name;
}

function checkFunctionArgumentDeclaration(data, path) {
  if (path.parent.type !== 'FunctionDeclaration') {
    return;
  }

  var id = path.node;
  var name = getIdentifierName(id);
  var match = matchIdentifier(data, id);

  if (match.namespace && path.listKey === 'params') {
    throw new Error("Variable " + name + " has already defined in " + match.namespace);
  }
}

function setIdentifierContext(ctx, data, path, observableCall) {
  if (observableCall === void 0) {
    observableCall = true;
  }

  if (['FunctionDeclaration', 'VariableDeclarator', 'LabeledStatement'].includes(path.parent.type) || ['property'].includes(path.key)) {
    return false;
  }

  var id = path.node;
  var name = getIdentifierName(id);
  var match = matchIdentifier(data, id);

  if (match.namespace === false) {
    return false;
  }

  name = ctx + "._" + match.namespace + "." + name; // console.log(name, observableCall)

  if (match.observable && path.container.type !== 'CallExpression' && observableCall) {
    name += '()';
  }

  id.name = name;
  return match.observable;
}

function matchIdentifier(context, id) {
  var name = getIdentifierName(id);
  var namespace = false;

  for (var key in context) {
    if (Object.keys(context[key]).includes(name)) {
      namespace = key;
    }
  }

  return {
    namespace: namespace,
    observable: ReactiveNamespaces.includes(namespace)
  };
}

/***/ }),

/***/ "./packages/compiler/dist/index.js":
/*!*****************************************!*\
  !*** ./packages/compiler/dist/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "_", {
  enumerable: true,
  get: function get() {
    return _empty._;
  }
});
Object.defineProperty(exports, "compiler", {
  enumerable: true,
  get: function get() {
    return _compiler.compiler;
  }
});

var _empty = __webpack_require__(/*! ./empty.js */ "./packages/compiler/dist/empty.js");

var _compiler = __webpack_require__(/*! ./compiler.js */ "./packages/compiler/dist/compiler.js");

/***/ }),

/***/ "./packages/compiler/dist/script/AstGenerator.js":
/*!*******************************************************!*\
  !*** ./packages/compiler/dist/script/AstGenerator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./packages/compiler/dist/script/helpers.js");

function _default(data) {
  var imports = [];

  for (var prop in data.imports) {
    imports.push(data.imports[prop]);
  }

  ;
  var properties = [];
  Object.keys(data).forEach(function (prop, key) {
    var object = null;

    if (_helpers.FunctionReturnExpression.includes(prop)) {
      object = generateFunctionReturnExpression(data, prop);
    } else if (_helpers.ObjectReturnExpression.includes(prop)) {
      object = generateObjectReturnExpression(data, prop);
    }

    if (!object) {
      return;
    }

    properties.push(object);
  });
  var exportedObject = (0, _types.ObjectExpression)(properties);
  var exportedDefault = [(0, _types.ExportDefaultDeclaration)(exportedObject)];
  var body = [].concat(imports).concat(exportedDefault);
  return (0, _types.program)(body, [], 'module');
}

function generateFunctionReturnExpression(data, returnProp) {
  var values = data[returnProp];
  var properties = [];

  for (var prop in values) {
    var val = values[prop];

    if (val.type === 'BlockStatement') {
      val = (0, _types.ArrowFunctionExpression)([], val);
    }

    if (_helpers.Reactity[returnProp]) {
      val = (0, _types.CallExpression)((0, _types.identifier)(_helpers.Reactity[returnProp]), [val]);
    }

    properties.push((0, _types.ObjectProperty)((0, _types.identifier)(prop), val));
  }

  var FunctionReturn = (0, _types.ReturnStatement)((0, _types.ObjectExpression)(properties));
  var body = (0, _types.BlockStatement)([FunctionReturn]);
  var object = (0, _types.ObjectMethod)('method', (0, _types.identifier)(returnProp), _helpers.Reactity[returnProp] ? [(0, _types.identifier)(_helpers.Reactity[returnProp])] : [], body);
  return object;
}

function generateObjectReturnExpression(data, prop) {
  var values = data[prop];
  var properties = [];

  for (var _prop in values) {
    var val = values[_prop];

    if (val.type === 'FunctionDeclaration') {
      val = (0, _types.FunctionExpression)(null, val.params, val.body);
    }

    properties.push((0, _types.ObjectProperty)((0, _types.identifier)(_prop), val));
  }

  var object = (0, _types.ObjectProperty)((0, _types.identifier)(prop), (0, _types.ObjectExpression)(properties));
  return object;
}

/***/ }),

/***/ "./packages/compiler/dist/script/data.js":
/*!***********************************************!*\
  !*** ./packages/compiler/dist/script/data.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createData = createData;
exports.data = void 0;

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

var data = {
  imports: [],
  props: {},
  data: {},
  state: {},
  computed: {},
  methods: {}
};
exports.data = data;

function createData(context) {
  return _extends({}, data, {}, context);
}

/***/ }),

/***/ "./packages/compiler/dist/script/helpers.js":
/*!**************************************************!*\
  !*** ./packages/compiler/dist/script/helpers.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeContextable = makeContextable;
exports.isIdentifierReactive = isIdentifierReactive;
exports.getIdentifierName = getIdentifierName;
exports.makeObservableGetter = makeObservableGetter;
exports.AiiExpression = exports.ObjectReturnExpression = exports.FunctionReturnExpression = exports.Reactity = void 0; // import data from "./data";

/**
 * Consts
 */

var Reactity = {
  'state': 'o',
  'computed': 'o'
};
exports.Reactity = Reactity;
var FunctionReturnExpression = ['data', 'state', 'computed'];
exports.FunctionReturnExpression = FunctionReturnExpression;
var ObjectReturnExpression = ['methods']; // As it is expressions

exports.ObjectReturnExpression = ObjectReturnExpression;
var AiiExpression = ['imports']; // export const RETURN_FUNCTION_TYPE = 1;
// export const OBJECT_FUNCTION_TYPE = 2;

/**
 * Functions
 */

exports.AiiExpression = AiiExpression;

function makeContextable(data, id) {
  var name = id.name;
  var isFunction = name.match(/\(\)$/g);
  name = name.replace(/(\(|\))/g, '');

  if (!name.match(/^this\./gi)) {
    var append = ['this'];

    if (Object.keys(data.state).includes(name)) {
      append.push('_state');
    } else if (Object.keys(data.computed).includes(name)) {
      append.push('_computed');
    } else if (Object.keys(data.data).includes(name)) {
      append.push('_data');
    } else if (Object.keys(data.methods).includes(name)) {
      append.push('_methods');
    } else {
      // throw new Error(`There is no variable ${name}`);
      return;
    }

    append.push(name);
    name = append.join('.');
  }

  if (isFunction) {
    name = name + "()";
  }

  id.name = name;
}

function isIdentifierReactive(data, id) {
  var name = id.name;

  if (name.match(/^\$/g)) {
    return true;
  }

  return data.state[name];
}

function getIdentifierName(id) {
  if (!id) {
    return null;
  }

  var name = id.name;

  if (name.match(/^\$/g)) {
    return name.substring(1);
  }

  return name;
}

function makeObservableGetter(data, id) {
  if (!isIdentifierReactive(data, id)) {
    return id;
  }

  var name = getIdentifierName(id);
  id.name = name + "()";
  return id;
}

/***/ }),

/***/ "./packages/compiler/dist/script/index.js":
/*!************************************************!*\
  !*** ./packages/compiler/dist/script/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReactiveVariables = getReactiveVariables;
exports.compileScript = compileScript;

var parser = _interopRequireWildcard(__webpack_require__(/*! @babel/parser */ "./node_modules/@babel/parser/lib/index.js"));

var _generator = _interopRequireDefault(__webpack_require__(/*! @babel/generator */ "./node_modules/@babel/generator/lib/index.js"));

var _data = __webpack_require__(/*! ./data */ "./packages/compiler/dist/script/data.js");

var _parseContext = _interopRequireDefault(__webpack_require__(/*! ./parseContext */ "./packages/compiler/dist/script/parseContext.js"));

var _parseExpression = _interopRequireDefault(__webpack_require__(/*! ./parseExpression */ "./packages/compiler/dist/script/parseExpression.js"));

var _parseMethods = _interopRequireDefault(__webpack_require__(/*! ./parseMethods */ "./packages/compiler/dist/script/parseMethods.js"));

var _AstGenerator = _interopRequireDefault(__webpack_require__(/*! ./AstGenerator */ "./packages/compiler/dist/script/AstGenerator.js"));

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
/**
 * Compiler
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */


function getReactiveVariables(context, source) {
  var data = (0, _data.createData)(context);
  var ast = parser.parse(source, {
    sourceType: "unambiguous",
    strictMode: false
  });
  (0, _parseContext.default)(data, ast);
  var reactive_variables = [];
  reactive_variables = reactive_variables.concat(Object.keys(data.state)).concat(Object.keys(data.computed));
  return {
    reactive_variables: reactive_variables,
    data: data
  };
}

function compileScript(context, source) {
  var data = (0, _data.createData)(); // console.log(data);

  var ast = parser.parse(source, {
    sourceType: "unambiguous",
    strictMode: false
  });
  (0, _parseContext.default)(data, ast);
  (0, _parseExpression.default)(data, ast); // console.log(data);

  return (0, _generator.default)((0, _AstGenerator.default)(data), {
    retainLines: false,
    compact: false,
    minified: false,
    concise: false,
    quotes: "double"
  }, source);
}

/***/ }),

/***/ "./packages/compiler/dist/script/parseContext.js":
/*!*******************************************************!*\
  !*** ./packages/compiler/dist/script/parseContext.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collectVariables = collectVariables;
exports.default = _default;

var _data = _interopRequireDefault(__webpack_require__(/*! ./data */ "./packages/compiler/dist/script/data.js"));

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./packages/compiler/dist/script/helpers.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // Get all data
// Mark data as reactive or stateless


var isFunctionDeclaration = false;

function collectVariables(data) {
  return {
    VariableDeclarator: {
      enter: function enter(path) {
        var id = path.node.id;
        var value = path.node.init;

        if (isFunctionDeclaration || value === null) {
          return;
        }

        var name = (0, _helpers.getIdentifierName)(id);
        var type = null;

        if (['ArrowFunctionExpression', 'FunctionExpression'].includes(value.type)) {
          type = 'computed';
        } else if ((0, _helpers.isIdentifierReactive)(data, id)) {
          type = 'state';
        } else {
          type = 'data';
        }

        data[type][name] = value;
      }
    },
    ArrowFunctionExpression: {
      enter: function enter(path) {
        isFunctionDeclaration = true;
      },
      exit: function exit(path) {
        isFunctionDeclaration = false;
      }
    },
    FunctionDeclaration: {
      enter: function enter(path) {
        isFunctionDeclaration = true;
        var id = path.node.id;
        var name = (0, _helpers.getIdentifierName)(id);
        data.methods[name] = (0, _types.FunctionExpression)(id, path.node.params, path.node.body);
      },
      exit: function exit(path) {
        isFunctionDeclaration = false;
      }
    }
  };
}

function _default(data, ast) {
  (0, _traverse.default)(ast, collectVariables(data));
}

/***/ }),

/***/ "./packages/compiler/dist/script/parseExpression.js":
/*!**********************************************************!*\
  !*** ./packages/compiler/dist/script/parseExpression.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseExpression;

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./packages/compiler/dist/helpers.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function parseExpression(data, ast) {
  var observable = false;
  var changed = false;
  var FunctionDeclaration = false;
  (0, _traverse.default)(ast, {
    ImportDeclaration: {
      enter: function enter(path) {
        data.imports[path.node.source.value] = path.node;
      }
    },
    FunctionDeclaration: {
      enter: function enter(path) {
        FunctionDeclaration = true;
      },
      exit: function exit(path) {
        FunctionDeclaration = false;
      }
    },
    // make reactive variable assignment as function
    AssignmentExpression: {
      enter: function enter(path) {
        if (!(0, _helpers.isIdentifierReactive)(data, path.node.left)) {
          return;
        }

        var args = [path.node.right];

        if (path.node.operator.length > 1) {
          args = [(0, _types.BinaryExpression)(path.node.operator[0], path.node.left, path.node.right)];
        }

        var name = (0, _helpers.getIdentifierName)(path.node.left);
        path.replaceWith((0, _types.CallExpression)((0, _types.identifier)(name), args));
        observable = true;
        changed = true;
      }
    },
    Identifier: {
      enter: function enter(path) {
        (0, _helpers.checkFunctionArgumentDeclaration)(data, path);

        if ((0, _helpers.setIdentifierContext)('this', data, path)) {
          observable = true;
        }

        changed = true;
      }
    }
  });
  return {
    ast: ast,
    observable: observable,
    changed: changed
  };
}

/***/ }),

/***/ "./packages/compiler/dist/script/parseMethods.js":
/*!*******************************************************!*\
  !*** ./packages/compiler/dist/script/parseMethods.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collectMethods = collectMethods;
exports.default = _default;

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./packages/compiler/dist/script/helpers.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var functionBlockHandling = false;
var assignmentHandling = false;
var variableDeclarationHandling = false;
var shouldAssignmentHandle = false;
var hasFunctionReactive = false;
var memberHandling = false;

function collectMethods(data) {
  return {
    // save imports
    ImportDeclaration: {
      enter: function enter(path) {
        data.imports[path.node.source.value] = path.node;
      }
    },

    /**
     * Translate usual variables to reactive
     * @type {Object}
     */
    Identifier: {
      enter: function enter(path) {
        var id = path.node;

        if (functionBlockHandling) {
          var name = (0, _helpers.getIdentifierName)(id);

          if (data.state[name] && !assignmentHandling && !['CallExpression'].includes(path.container.type)) {
            hasFunctionReactive = true;
          }

          if (!['AssignmentExpression', 'CallExpression'].includes(path.container.type) && !variableDeclarationHandling) {
            (0, _helpers.makeObservableGetter)(data, id);
          }

          if (!variableDeclarationHandling && !memberHandling) {
            (0, _helpers.makeContextable)(data, id);
          }
        }
      },
      exit: function exit(path) {// console.log("Identifier exit called", path.node.name);
      }
    },
    CallExpression: {
      enter: function enter(path) {
        memberHandling = true;
      },
      exit: function exit(path) {
        memberHandling = false;
      }
    },
    MemberExpression: {
      enter: function enter(path) {
        memberHandling = true;
      },
      exit: function exit(path) {
        memberHandling = false;
      }
    },
    VariableDeclarator: {
      enter: function enter(path) {
        variableDeclarationHandling = true;
      },
      exit: function exit(path) {
        variableDeclarationHandling = false;
      }
    },

    /**
     * Make 
     v = v + 1
     To
     v(v() + 1)
     * @type {Object}
     */
    ExpressionStatement: {
      exit: function exit(path) {
        if (path.node.expression.type === 'AssignmentExpression') {
          var expression = path.node.expression;
          var name = (0, _helpers.getIdentifierName)(expression.left);
          path.replaceWith((0, _types.CallExpression)((0, _types.identifier)(name), [expression.right]));
        }
      }
    },
    AssignmentExpression: {
      enter: function enter(path) {
        assignmentHandling = true;

        if ((0, _helpers.isIdentifierReactive)(data, path.node.left)) {
          shouldAssignmentHandle = true;
        }
      },
      exit: function exit(path) {
        assignmentHandling = false;
        shouldAssignmentHandle = false;
      }
    },

    /**
     * Handle function
     * Add them to methods and computed props
     * @type {Object}
     */
    BlockStatement: {
      enter: function enter(path) {
        if (path.parent.type === 'FunctionDeclaration') {
          functionBlockHandling = true;
        }
      },
      exit: function exit(path) {
        if (!functionBlockHandling || path.parent.type !== 'FunctionDeclaration') {
          return;
        }

        var name = (0, _helpers.getIdentifierName)(path.container.id);

        if (hasFunctionReactive) {
          data.computed[name] = path.node;
        } else {
          data.methods[name] = path.container;
        }

        hasFunctionReactive = false;
        functionBlockHandling = false;
      }
    }
  };
}

function _default(data, ast) {
  (0, _traverse.default)(ast, collectMethods(data));
}

/***/ }),

/***/ "./packages/compiler/dist/template/Node.js":
/*!*************************************************!*\
  !*** ./packages/compiler/dist/template/Node.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isNonPhrasingTag = exports.HID = void 0;

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/compiler/dist/template/attrs.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./packages/compiler/dist/template/helpers.js");

var _parseFunctions = __webpack_require__(/*! ./parseFunctions */ "./packages/compiler/dist/template/parseFunctions.js");

var _expression = __webpack_require__(/*! ./expression */ "./packages/compiler/dist/template/expression.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var HID = 0;
exports.HID = HID;
var isNonPhrasingTag = ['address', 'article', 'aside', 'base', 'blockquote', 'body', 'caption', 'col', 'colgroup', 'dd', 'details', 'dialog', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'legend', 'li', 'menuitem', 'meta', 'optgroup', 'option', 'param', 'rp', 'rt', 'source', 'style', 'summary', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track'];
exports.isNonPhrasingTag = isNonPhrasingTag;
var IF_STATEMENT_STARTED = false;

function getComponentCode(tag, options, children) {
  if (children === void 0) {
    children = [];
  }

  if (tag === 'template') {
    return "[" + children.join(',') + "]";
  }

  return "h('" + tag + "', " + options + ", [" + children.join(',') + "])";
}

var Node = /*#__PURE__*/function () {
  function Node(_ref) {
    var _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? null : _ref$tag,
        _ref$attrs = _ref.attrs,
        attrs = _ref$attrs === void 0 ? null : _ref$attrs,
        _ref$children = _ref.children,
        children = _ref$children === void 0 ? [] : _ref$children;
    this.hid = exports.HID = HID = +HID + 1;
    this.tag = tag;
    this.attrs = attrs;
    this.options = (0, _attrs.parseOptions)(attrs);
    this.children = children;
    this.prevSibling = null;
    this.nextSibling = null; // if

    this.if_statement = false;
  } // getContext(currentContext)
  // {
  // 	let ctx = null;
  // 	try {
  // 		ctx = Sinuous.getComponent(this.tag);
  // 	} catch(err) {}
  // 	if(ctx === null) {
  // 		ctx = currentContext;
  // 	}
  // 	return ctx;
  // }


  var _proto = Node.prototype;

  _proto.setSiblings = function setSiblings() {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i + 1]) {
        this.children[i].nextSibling = this.children[i + 1];
        this.children[i + 1].prevSibling = this.children[i];
      }

      if (this.children[i] instanceof Node) {
        this.children[i].setSiblings();
      }
    }
  };

  _proto.toAST = function toAST(context, hydrate) {
    if (context === void 0) {
      context = null;
    }

    if (hydrate === void 0) {
      hydrate = false;
    }

    var code = '';
    var children = [];
    var shouldHydarate = false;
    var shouldOptionsHydrate = false; // context = this.getContext(context);
    // console.warn('[1]', context.name, shouldHydarate);

    /**
     * Translate children to hyperscript
     * @param  {[type]} var i             [description]
     * @return {[type]}     [description]
     */

    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];

      var _child$toAST = child.toAST(context, hydrate),
          value = _child$toAST.value,
          statefull = _child$toAST.statefull; // console.log('[child]', child, statefull);


      if (statefull) {
        shouldHydarate = true;
      }

      children.push(value);
    }

    var options = ''; // console.warn('[2]', context.name, shouldHydarate);

    for (var key in this.options) {
      var _parseOptionValue = (0, _attrs.parseOptionValue)(context, key, this.options[key]),
          _value = _parseOptionValue.value,
          _statefull = _parseOptionValue.statefull;

      if (_statefull) {
        shouldHydarate = true;
      }

      if (_statefull || !hydrate || key === 'data-hid') {
        options += (0, _attrs.parseOptionKey)(key) + ": " + _value + ",";
      }

      if (_statefull && hydrate) {
        shouldOptionsHydrate = true;
      }
    }

    shouldHydarate = this.isComponent || shouldHydarate;

    if (shouldHydarate) {
      options += "id: ctx.getUID(" + this.hid + "),";
    }

    if (shouldOptionsHydrate) {
      options += "_s: true,";
    } // console.warn(hydrate, context.name, this.tag, shouldHydarate ? options : '');


    options = "{" + options + "}";
    var fn_generated = false;
    var statement = (0, _parseFunctions.parseStatement)(this);

    if (statement.is) {
      var condition = (0, _expression.expression)(context, statement.condition, false);

      if (statement.start) {
        // console.log(this)
        code += "statement(";
      }

      code += " " + condition.value + ", " + getComponentCode(this.tag, options, children);

      if (statement.end) {
        code += ")";
      }
    } else {
      code += getComponentCode(this.tag, options, children);
    } // console.log(this.attrs, this.if_statement, statement)
    // if(IF_STATEMENT_STARTED && !this.attrs['v-if']) {
    // 	fn_generated = true;
    // 	code += `)`;
    // }
    // if(IF_STATEMENT_STARTED) {
    // 	let condition = this.attrs['v-if'] || this.attrs['v-else-if'] || this.attrs['v-else'];
    // 	let res = [];
    // 	if(!this.attrs['v-else']) {
    // 		res.push(condition)
    // 	}
    // 	res.push(getComponentCode(this.tag, options, children));
    // 	if(!this.attrs['v-else']) {
    // 		res.push('')
    // 	}
    // 	code += res.join(',');
    // 	console.log(this.attrs, code)
    // } 
    // if(!fn_generated) {
    // }
    // console.warn('[3]', context.name, shouldHydarate);
    // console.log('[main]', this.tag, shouldHydarate);


    if (hydrate && !shouldHydarate) {
      return {
        value: _helpers._,
        statefull: false
      };
    }

    return {
      value: code,
      statefull: shouldHydarate
    };
  };

  _createClass(Node, [{
    key: "isComponent",
    get: function get() {
      return !isNonPhrasingTag.includes(this.tag);
    }
  }]);

  return Node;
}();

exports.default = Node;

/***/ }),

/***/ "./packages/compiler/dist/template/TextNode.js":
/*!*****************************************************!*\
  !*** ./packages/compiler/dist/template/TextNode.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/compiler/dist/template/attrs.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./packages/compiler/dist/template/helpers.js");

var TextNode = /*#__PURE__*/function () {
  function TextNode(text) {
    this.text = text;
  }

  var _proto = TextNode.prototype;

  _proto.toAST = function toAST(context, hydrate) {
    if (context === void 0) {
      context = null;
    }

    if (hydrate === void 0) {
      hydrate = false;
    }

    var _parseOptionValue = (0, _attrs.parseOptionValue)(context, '_t', this.text),
        value = _parseOptionValue.value,
        statefull = _parseOptionValue.statefull; // console.log(`t(${this.text})`, value, statefull)


    if (hydrate && !statefull) {
      value = _helpers._;
    }

    return {
      value: value,
      statefull: statefull
    };
  };

  return TextNode;
}();

exports.default = TextNode;

/***/ }),

/***/ "./packages/compiler/dist/template/attrs.js":
/*!**************************************************!*\
  !*** ./packages/compiler/dist/template/attrs.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareOptionKey = prepareOptionKey;
exports.parseAttrs = parseAttrs;
exports.parseOptions = parseOptions;
exports.parseOptionKey = parseOptionKey;
exports.parseOptionValue = parseOptionValue;

var _expression = __webpack_require__(/*! ./expression */ "./packages/compiler/dist/template/expression.js");

var AttrsMap = {
  'style': 'staticStyle',
  'class': 'staticClass',
  ':style': 'dynamicStyle',
  ':class': 'dynamicClass'
};
var HTMLAttributes = ['id', 'name', 'value', 'placeholder'];

function parseOptionValue(context, key, value) {
  var statefull = false;
  var isExpression = false;
  var observableCall = true;

  if (key[0] === '@') {
    statefull = true;
    isExpression = true;
  }

  if (typeof value === 'object') {
    observableCall = false;
  }

  if (key[0] === '_') {
    value = '`' + value.replace(/{{(.*)}}/g, '${$1}') + '`';
    isExpression = true;
  }

  var exp = (0, _expression.expression)(context, value, isExpression, observableCall);
  value = exp.value;

  if (!statefull && exp.statefull) {
    statefull = true;
  } // if(typeof value === 'object') {
  // 	value = JSON.stringify(value);
  // } else {
  // 	value = `"${value}"`;
  // }


  return {
    value: value,
    statefull: statefull
  };
}

function parseOptionKey(key, value) {
  if (AttrsMap[key]) {
    return AttrsMap[key];
  } else if (key[0] === '@') {
    return key.replace(/@/g, 'on');
  }

  return key;
}

function parseStyles(string) {
  var styles = {};
  var pairs = string.replace(/\s/g, '').split(';');

  for (var i = 0; i < pairs.length; i++) {
    var tmp = pairs[i].split(':');

    if (tmp.length === 2) {
      styles[tmp[0]] = tmp[1];
    }
  }

  return styles;
}

function prepareOptionKey(variable) {
  if (variable.match(/\-/g)) {
    variable = "'" + variable + "'";
  }

  return variable;
}

function parseOptions(attrs) {
  var options = {};

  for (var key in attrs) {
    var value = attrs[key];
    var option_key = prepareOptionKey(key);

    if (key.match(/^v\-/g)) {
      continue;
    } // Is html attr


    if (HTMLAttributes.includes(key) || Object.keys(AttrsMap).includes(key) || key.match(/data\-/g) || key.match(/@/g)) {
      if (key === 'style') {
        value = parseStyles(value);
      }

      options[option_key] = value;
    } else {
      if (!options.props) {
        options.props = {};
      }

      options.props[option_key] = value;
    }
  }

  return options;
}

function parseAttrs(string) {
  if (typeof string !== 'string' || string == '') {
    return {};
  }

  string = string.replace(/\s\s+/g, ' ').trim();
  var pairs = string.match(/([^\s]*)=["'](.*?)["']|([\w\-]+)/g);
  var attrs = {};

  for (var i = 0; i < pairs.length; i++) {
    var tmp = pairs[i].split('=');
    var name = tmp[0];
    var value = tmp[1] ? tmp[1].substring(1, tmp[1].length - 1) : true;
    attrs[name] = value;
  }

  return attrs;
}

/***/ }),

/***/ "./packages/compiler/dist/template/expression.js":
/*!*******************************************************!*\
  !*** ./packages/compiler/dist/template/expression.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expression = expression;

var parser = _interopRequireWildcard(__webpack_require__(/*! @babel/parser */ "./node_modules/@babel/parser/lib/index.js"));

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

var _generator = _interopRequireDefault(__webpack_require__(/*! @babel/generator */ "./node_modules/@babel/generator/lib/index.js"));

var _parseExpression2 = _interopRequireDefault(__webpack_require__(/*! ../script/parseExpression */ "./packages/compiler/dist/script/parseExpression.js"));

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./packages/compiler/dist/helpers.js");

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/compiler/dist/template/attrs.js");

var _helpers2 = __webpack_require__(/*! ./helpers */ "./packages/compiler/dist/template/helpers.js");

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

function expression(context, code, isExpression, observableCall) {
  if (isExpression === void 0) {
    isExpression = false;
  }

  if (observableCall === void 0) {
    observableCall = true;
  }

  if (typeof code === 'object') {
    return {
      statefull: false,
      value: JSON.stringify(code)
    };
  }

  code = String(code);
  console.warn(code);
  var ast = parser.parse(code);

  var _parseExpression = (0, _parseExpression2.default)(context.data, ast),
      changed = _parseExpression.changed,
      observable = _parseExpression.observable;

  if (changed) {
    code = (0, _generator.default)(ast, {
      retainLines: true,
      compact: true,
      minified: true,
      concise: true,
      quotes: "double"
    }, code).code; // clean append

    code = code.replace(/(;|,)$/g, '');

    if (isExpression) {
      code = "() => { return " + code + "; }";
    }
  }

  console.log(code);
  console.log('--------');
  return {
    statefull: observable,
    value: code
  };
} // export default function expression(context, code, execute = false)
// {
// 	const ast = parser.parse(code);
// 	var changed = false;
// 	var statefull = false;
// 	traverse(ast, {
// 		enter(path)
// 		{
// 			if(path.node.type === 'Identifier')
// 			{
// 				if(!['key', 'label'].includes(path.key)) {
// 					let nameBuilder = [];
// 					let variable = path.node.name;
// 					let variableWithContext = getVariable(context.data, variable)
// 					if(path.container.type === 'CallExpression') {
// 						variableWithContext = false;
// 					}
// 					if(variableWithContext) {
// 						nameBuilder.push('ctx')
// 						nameBuilder.push(variableWithContext);
// 					} else {
// 						nameBuilder.push(variable);
// 					}
// 					if(!variable) {
// 						throw new Error(`There is no ${ variable } in context ${ context }`);
// 					}
// 					if(context.reactive_variables.includes(variable)) {
// 						statefull = true;
// 					}
// 					path.node.name = nameBuilder.join('.') + (execute ? '()' : '');
// 					changed = true;
// 				} else {
// 					path.node.name = prepareOptionKey(path.node.name);
// 				}
// 			}
// 		}
// 	});
// 	code = generate(ast, {
// 		retainLines: true,
// 		compact: true,
// 		minified: true,
// 		concise: true,
// 		quotes: "double",
// 	}, code).code;
// 	// clean append
// 	code = code.replace(/(;|,)$/g, '');
// 	if(changed && execute) {
// 		code = `() => { return ${code}; }`;
// 	}
// 	return {
// 		statefull,
// 		value: code
// 	}
// }

/***/ }),

/***/ "./packages/compiler/dist/template/generate.js":
/*!*****************************************************!*\
  !*** ./packages/compiler/dist/template/generate.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generate;

var _nodeHtmlParser = __webpack_require__(/*! node-html-parser */ "./node_modules/node-html-parser/dist/index.js");

var _Node = _interopRequireWildcard(__webpack_require__(/*! ./Node */ "./packages/compiler/dist/template/Node.js"));

var _TextNode = _interopRequireDefault(__webpack_require__(/*! ./TextNode */ "./packages/compiler/dist/template/TextNode.js"));

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/compiler/dist/template/attrs.js");

var _parseFunctions = _interopRequireDefault(__webpack_require__(/*! ./parseFunctions */ "./packages/compiler/dist/template/parseFunctions.js"));

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

function generateTree(node, isRoot) {
  if (isRoot === void 0) {
    isRoot = false;
  }

  var children = [];

  for (var i = 0; i < node.childNodes.length; i++) {
    var child = generateTree(node.childNodes[i], false);
    children.push(child);
  }

  var attrs = (0, _attrs.parseAttrs)(node.rawAttrs);

  if (children.length === 0 && node.rawText !== '') {
    return new _TextNode.default(node.rawText);
  }

  return new _Node.default({
    tag: node.tagName,
    attrs: attrs,
    children: children
  });
}

function generate(context, code) {
  // code = parseFunctions(code);
  // console.warn("PARSE", context.name)
  code = code.replace(/\t/g, ' ').replace(/\s\s+/g, ' ');
  var root = (0, _nodeHtmlParser.parse)(code);
  root.removeWhitespace(); // HID = 0;

  var tree = generateTree(root, true);
  tree.setSiblings();
  tree = tree.children;
  var ast = {
    render: [],
    hydrate: []
  };
  var result = {
    render: '',
    hydrate: '',
    shouldHydarate: false
  };

  for (var i = 0; i < tree.length; i++) {
    var renderAST = tree[i].toAST(context, false);
    var hydrationAST = tree[i].toAST(context, true);

    if (hydrationAST.statefull) {
      result.shouldHydarate = true;
    }

    ast.render.push(renderAST.value);
    ast.hydrate.push(hydrationAST.value);
  }

  if (ast.render.length === 1) {
    result.render = ast.render[0];
    result.hydrate = ast.hydrate[0];
  } else {
    result.render = "[" + ast.render.join(',') + "]";
    result.hydrate = "[" + ast.hydrate.join(',') + "]";
  }

  return result;
}

/***/ }),

/***/ "./packages/compiler/dist/template/helpers.js":
/*!****************************************************!*\
  !*** ./packages/compiler/dist/template/helpers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasState = hasState;
exports.getVariable = getVariable;

var _empty = __webpack_require__(/*! ../empty */ "./packages/compiler/dist/empty.js");

function hasState(context, variable) {
  // console.log(context, variable.split('.'));
  if (context === null) {
    return null;
  }

  var value = context;
  var var_parts = variable.split('.');

  for (var i = 0; i < var_parts.length; i++) {
    value = value[var_parts[i]];

    if (typeof value === 'undefined') {
      return false;
    }
  }

  if (value._observable) {
    return true;
  }

  return false;
}

function getVariable(context, variable) {
  if (Object.keys(context.computed).includes(variable)) {
    return "_computed." + variable;
  }

  if (Object.keys(context.state).includes(variable)) {
    return "_state." + variable;
  }

  if (Object.keys(context.data).includes(variable)) {
    return "_data." + variable;
  }

  if (Object.keys(context.methods).includes(variable)) {
    return variable + ".bind(ctx)";
  }

  if (Object.keys(context.props).includes(variable)) {
    return "_props." + variable;
  }

  return false;
}

/***/ }),

/***/ "./packages/compiler/dist/template/index.js":
/*!**************************************************!*\
  !*** ./packages/compiler/dist/template/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compileTemplate = compileTemplate;

var _script = __webpack_require__(/*! ../script */ "./packages/compiler/dist/script/index.js");

var _generate = _interopRequireDefault(__webpack_require__(/*! ./generate */ "./packages/compiler/dist/template/generate.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function compileTemplate(context, html, blocks) {
  var script = blocks.script || {
    source: ''
  };
  context = (0, _script.getReactiveVariables)(context, script.source);
  return (0, _generate.default)(context, html);
}

/***/ }),

/***/ "./packages/compiler/dist/template/parseFunctions.js":
/*!***********************************************************!*\
  !*** ./packages/compiler/dist/template/parseFunctions.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseStatement = parseStatement;
exports.default = parseFunctions;
exports.IF_ATTRS = void 0;
var IF_ATTRS = ['v-if', 'v-else-if', 'v-else'];
exports.IF_ATTRS = IF_ATTRS;

function parseStatement(node) {
  var start = false;
  var end = true;
  var statement = false;
  var condition = node.attrs['v-if'] || node.attrs['v-else-if'] || 'true';

  if (node.attrs['v-if']) {
    start = true;
  }

  if (node.attrs['v-if'] || node.attrs['v-else-if'] || node.attrs['v-else']) {
    node.if_statement = true;
    statement = true;
  }

  if (node.nextSibling) {
    if (node.nextSibling.attrs['v-else-if'] || node.nextSibling.attrs['v-else']) {
      end = false;
    }
  } // if(node.prevSibling) {
  // 	if(node.prevSibling.if_statement) {
  // 		statement = true;
  // 	}
  // }
  // console.warn(node.attrs, statement, start, end);


  return {
    condition: condition,
    is: statement,
    start: start,
    end: end
  };
}

function parseFunctions(code) {
  code = code.replace(/\@if\((.*)\)/g, '<if condition="$1">').replace(/\@elseif\((.*)\)/g, '<else-if condition="$1">').replace(/\@else/g, '<else>').replace(/\@endif/g, '<endif>');
  console.log(code);
  return code;
}

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

/***/ "./packages/compiler/src/helpers.js":
/*!******************************************!*\
  !*** ./packages/compiler/src/helpers.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIdentifierReactive = isIdentifierReactive;
exports.getIdentifierName = getIdentifierName;
exports.checkFunctionArgumentDeclaration = checkFunctionArgumentDeclaration;
exports.setIdentifierContext = setIdentifierContext;
exports.matchIdentifier = matchIdentifier;
exports.ReactiveNamespaces = void 0;
var ReactiveNamespaces = ['state', 'computed'];
exports.ReactiveNamespaces = ReactiveNamespaces;

function isIdentifierReactive(data, id) {
  var name = id.name;

  if (name.match(/^\$/g)) {
    return true;
  }

  return data.state[name];
}

function getIdentifierName(id) {
  if (!id) {
    return null;
  }

  var name = id.name;

  if (name.match(/^\$/g)) {
    return name.substring(1);
  }

  return name;
}

function checkFunctionArgumentDeclaration(data, path) {
  if (path.parent.type !== 'FunctionDeclaration') {
    return;
  }

  var id = path.node;
  var name = getIdentifierName(id);
  var match = matchIdentifier(data, id);

  if (match.namespace && path.listKey === 'params') {
    throw new Error("Variable " + name + " has already defined in " + match.namespace);
  }
}

function setIdentifierContext(ctx, data, path, observableCall) {
  if (observableCall === void 0) {
    observableCall = true;
  }

  if (['FunctionDeclaration', 'VariableDeclarator', 'LabeledStatement'].includes(path.parent.type) || ['property'].includes(path.key)) {
    return false;
  }

  var id = path.node;
  var name = getIdentifierName(id);
  var match = matchIdentifier(data, id);

  if (match.namespace === false) {
    return false;
  }

  name = ctx + "._" + match.namespace + "." + name; // console.log(name, observableCall)

  if (match.observable && path.container.type !== 'CallExpression' && observableCall) {
    name += '()';
  }

  id.name = name;
  return match.observable;
}

function matchIdentifier(context, id) {
  var name = getIdentifierName(id);
  var namespace = false;

  for (var key in context) {
    if (Object.keys(context[key]).includes(name)) {
      namespace = key;
    }
  }

  return {
    namespace: namespace,
    observable: ReactiveNamespaces.includes(namespace)
  };
}

/***/ }),

/***/ "./packages/compiler/src/script/data.js":
/*!**********************************************!*\
  !*** ./packages/compiler/src/script/data.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createData = createData;
exports.data = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var data = {
  imports: [],
  props: {},
  data: {},
  state: {},
  computed: {},
  methods: {}
};
exports.data = data;

function createData(context) {
  return _extends({}, data, {}, context);
}

/***/ }),

/***/ "./packages/compiler/src/script/parseExpression.js":
/*!*********************************************************!*\
  !*** ./packages/compiler/src/script/parseExpression.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseExpression;

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./packages/compiler/src/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseExpression(data, ast) {
  var observable = false;
  var changed = false;
  var FunctionDeclaration = false;
  (0, _traverse.default)(ast, {
    ImportDeclaration: {
      enter: function enter(path) {
        data.imports[path.node.source.value] = path.node;
      }
    },
    FunctionDeclaration: {
      enter: function enter(path) {
        FunctionDeclaration = true;
      },
      exit: function exit(path) {
        FunctionDeclaration = false;
      }
    },
    // make reactive variable assignment as function
    AssignmentExpression: {
      enter: function enter(path) {
        if (!(0, _helpers.isIdentifierReactive)(data, path.node.left)) {
          return;
        }

        var args = [path.node.right];

        if (path.node.operator.length > 1) {
          args = [(0, _types.BinaryExpression)(path.node.operator[0], path.node.left, path.node.right)];
        }

        var name = (0, _helpers.getIdentifierName)(path.node.left);
        path.replaceWith((0, _types.CallExpression)((0, _types.identifier)(name), args));
        observable = true;
        changed = true;
      }
    },
    Identifier: {
      enter: function enter(path) {
        (0, _helpers.checkFunctionArgumentDeclaration)(data, path);

        if ((0, _helpers.setIdentifierContext)('this', data, path)) {
          observable = true;
        }

        changed = true;
      }
    }
  });
  return {
    ast: ast,
    observable: observable,
    changed: changed
  };
}

/***/ }),

/***/ "./packages/compiler/src/template/Node.js":
/*!************************************************!*\
  !*** ./packages/compiler/src/template/Node.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isNonPhrasingTag = exports.HID = void 0;

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/compiler/src/template/attrs.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./packages/compiler/src/template/helpers.js");

var _parseFunctions = __webpack_require__(/*! ./parseFunctions */ "./packages/compiler/src/template/parseFunctions.js");

var _expression = __webpack_require__(/*! ./expression */ "./packages/compiler/src/template/expression.js");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HID = 0;
exports.HID = HID;
var isNonPhrasingTag = ['address', 'article', 'aside', 'base', 'blockquote', 'body', 'caption', 'col', 'colgroup', 'dd', 'details', 'dialog', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'legend', 'li', 'menuitem', 'meta', 'optgroup', 'option', 'param', 'rp', 'rt', 'source', 'style', 'summary', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track'];
exports.isNonPhrasingTag = isNonPhrasingTag;
var IF_STATEMENT_STARTED = false;

function getComponentCode(tag, options, children) {
  if (children === void 0) {
    children = [];
  }

  if (tag === 'template') {
    return "[" + children.join(',') + "]";
  }

  return "h('" + tag + "', " + options + ", [" + children.join(',') + "])";
}

var Node = /*#__PURE__*/function () {
  function Node(_ref) {
    var _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? null : _ref$tag,
        _ref$attrs = _ref.attrs,
        attrs = _ref$attrs === void 0 ? null : _ref$attrs,
        _ref$children = _ref.children,
        children = _ref$children === void 0 ? [] : _ref$children;
    this.hid = exports.HID = HID = +HID + 1;
    this.tag = tag;
    this.attrs = attrs;
    this.options = (0, _attrs.parseOptions)(attrs);
    this.children = children;
    this.prevSibling = null;
    this.nextSibling = null; // if

    this.if_statement = false;
  } // getContext(currentContext)
  // {
  // 	let ctx = null;
  // 	try {
  // 		ctx = Sinuous.getComponent(this.tag);
  // 	} catch(err) {}
  // 	if(ctx === null) {
  // 		ctx = currentContext;
  // 	}
  // 	return ctx;
  // }


  var _proto = Node.prototype;

  _proto.setSiblings = function setSiblings() {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i + 1]) {
        this.children[i].nextSibling = this.children[i + 1];
        this.children[i + 1].prevSibling = this.children[i];
      }

      if (this.children[i] instanceof Node) {
        this.children[i].setSiblings();
      }
    }
  };

  _proto.toAST = function toAST(context, hydrate) {
    if (context === void 0) {
      context = null;
    }

    if (hydrate === void 0) {
      hydrate = false;
    }

    var code = '';
    var children = [];
    var shouldHydarate = false;
    var shouldOptionsHydrate = false; // context = this.getContext(context);
    // console.warn('[1]', context.name, shouldHydarate);

    /**
     * Translate children to hyperscript
     * @param  {[type]} var i             [description]
     * @return {[type]}     [description]
     */

    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];

      var _child$toAST = child.toAST(context, hydrate),
          value = _child$toAST.value,
          statefull = _child$toAST.statefull; // console.log('[child]', child, statefull);


      if (statefull) {
        shouldHydarate = true;
      }

      children.push(value);
    }

    var options = ''; // console.warn('[2]', context.name, shouldHydarate);

    for (var key in this.options) {
      var _parseOptionValue = (0, _attrs.parseOptionValue)(context, key, this.options[key]),
          _value = _parseOptionValue.value,
          _statefull = _parseOptionValue.statefull;

      if (_statefull) {
        shouldHydarate = true;
      }

      if (_statefull || !hydrate || key === 'data-hid') {
        options += (0, _attrs.parseOptionKey)(key) + ": " + _value + ",";
      }

      if (_statefull && hydrate) {
        shouldOptionsHydrate = true;
      }
    }

    shouldHydarate = this.isComponent || shouldHydarate;

    if (shouldHydarate) {
      options += "id: ctx.getUID(" + this.hid + "),";
    }

    if (shouldOptionsHydrate) {
      options += "_s: true,";
    } // console.warn(hydrate, context.name, this.tag, shouldHydarate ? options : '');


    options = "{" + options + "}";
    var fn_generated = false;
    var statement = (0, _parseFunctions.parseStatement)(this);

    if (statement.is) {
      var condition = (0, _expression.expression)(context, statement.condition, false);

      if (statement.start) {
        // console.log(this)
        code += "statement(";
      }

      code += " " + condition.value + ", " + getComponentCode(this.tag, options, children);

      if (statement.end) {
        code += ")";
      }
    } else {
      code += getComponentCode(this.tag, options, children);
    } // console.log(this.attrs, this.if_statement, statement)
    // if(IF_STATEMENT_STARTED && !this.attrs['v-if']) {
    // 	fn_generated = true;
    // 	code += `)`;
    // }
    // if(IF_STATEMENT_STARTED) {
    // 	let condition = this.attrs['v-if'] || this.attrs['v-else-if'] || this.attrs['v-else'];
    // 	let res = [];
    // 	if(!this.attrs['v-else']) {
    // 		res.push(condition)
    // 	}
    // 	res.push(getComponentCode(this.tag, options, children));
    // 	if(!this.attrs['v-else']) {
    // 		res.push('')
    // 	}
    // 	code += res.join(',');
    // 	console.log(this.attrs, code)
    // } 
    // if(!fn_generated) {
    // }
    // console.warn('[3]', context.name, shouldHydarate);
    // console.log('[main]', this.tag, shouldHydarate);


    if (hydrate && !shouldHydarate) {
      return {
        value: _helpers._,
        statefull: false
      };
    }

    return {
      value: code,
      statefull: shouldHydarate
    };
  };

  _createClass(Node, [{
    key: "isComponent",
    get: function get() {
      return !isNonPhrasingTag.includes(this.tag);
    }
  }]);

  return Node;
}();

exports.default = Node;

/***/ }),

/***/ "./packages/compiler/src/template/TextNode.js":
/*!****************************************************!*\
  !*** ./packages/compiler/src/template/TextNode.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/compiler/src/template/attrs.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./packages/compiler/src/template/helpers.js");

var TextNode = /*#__PURE__*/function () {
  function TextNode(text) {
    this.text = text;
  }

  var _proto = TextNode.prototype;

  _proto.toAST = function toAST(context, hydrate) {
    if (context === void 0) {
      context = null;
    }

    if (hydrate === void 0) {
      hydrate = false;
    }

    var _parseOptionValue = (0, _attrs.parseOptionValue)(context, '_t', this.text),
        value = _parseOptionValue.value,
        statefull = _parseOptionValue.statefull; // console.log(`t(${this.text})`, value, statefull)


    if (hydrate && !statefull) {
      value = _helpers._;
    }

    return {
      value: value,
      statefull: statefull
    };
  };

  return TextNode;
}();

exports.default = TextNode;

/***/ }),

/***/ "./packages/compiler/src/template/attrs.js":
/*!*************************************************!*\
  !*** ./packages/compiler/src/template/attrs.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareOptionKey = prepareOptionKey;
exports.parseAttrs = parseAttrs;
exports.parseOptions = parseOptions;
exports.parseOptionKey = parseOptionKey;
exports.parseOptionValue = parseOptionValue;

var _expression = __webpack_require__(/*! ./expression */ "./packages/compiler/src/template/expression.js");

var AttrsMap = {
  'style': 'staticStyle',
  'class': 'staticClass',
  ':style': 'dynamicStyle',
  ':class': 'dynamicClass'
};
var HTMLAttributes = ['id', 'name', 'value', 'placeholder'];

function parseOptionValue(context, key, value) {
  var statefull = false;
  var isExpression = false;
  var observableCall = true;

  if (key[0] === '@') {
    statefull = true;
    isExpression = true;
  }

  if (typeof value === 'object') {
    observableCall = false;
  }

  if (key[0] === '_') {
    value = '`' + value.replace(/{{(.*)}}/g, '${$1}') + '`';
    isExpression = true;
  }

  var exp = (0, _expression.expression)(context, value, isExpression, observableCall);
  value = exp.value;

  if (!statefull && exp.statefull) {
    statefull = true;
  } // if(typeof value === 'object') {
  // 	value = JSON.stringify(value);
  // } else {
  // 	value = `"${value}"`;
  // }


  return {
    value: value,
    statefull: statefull
  };
}

function parseOptionKey(key, value) {
  if (AttrsMap[key]) {
    return AttrsMap[key];
  } else if (key[0] === '@') {
    return key.replace(/@/g, 'on');
  }

  return key;
}

function parseStyles(string) {
  var styles = {};
  var pairs = string.replace(/\s/g, '').split(';');

  for (var i = 0; i < pairs.length; i++) {
    var tmp = pairs[i].split(':');

    if (tmp.length === 2) {
      styles[tmp[0]] = tmp[1];
    }
  }

  return styles;
}

function prepareOptionKey(variable) {
  if (variable.match(/\-/g)) {
    variable = "'" + variable + "'";
  }

  return variable;
}

function parseOptions(attrs) {
  var options = {};

  for (var key in attrs) {
    var value = attrs[key];
    var option_key = prepareOptionKey(key);

    if (key.match(/^v\-/g)) {
      continue;
    } // Is html attr


    if (HTMLAttributes.includes(key) || Object.keys(AttrsMap).includes(key) || key.match(/data\-/g) || key.match(/@/g)) {
      if (key === 'style') {
        value = parseStyles(value);
      }

      options[option_key] = value;
    } else {
      if (!options.props) {
        options.props = {};
      }

      options.props[option_key] = value;
    }
  }

  return options;
}

function parseAttrs(string) {
  if (typeof string !== 'string' || string == '') {
    return {};
  }

  string = string.replace(/\s\s+/g, ' ').trim();
  var pairs = string.match(/([^\s]*)=["'](.*?)["']|([\w\-]+)/g);
  var attrs = {};

  for (var i = 0; i < pairs.length; i++) {
    var tmp = pairs[i].split('=');
    var name = tmp[0];
    var value = tmp[1] ? tmp[1].substring(1, tmp[1].length - 1) : true;
    attrs[name] = value;
  }

  return attrs;
}

/***/ }),

/***/ "./packages/compiler/src/template/expression.js":
/*!******************************************************!*\
  !*** ./packages/compiler/src/template/expression.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expression = expression;

var parser = _interopRequireWildcard(__webpack_require__(/*! @babel/parser */ "./node_modules/@babel/parser/lib/index.js"));

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

var _generator = _interopRequireDefault(__webpack_require__(/*! @babel/generator */ "./node_modules/@babel/generator/lib/index.js"));

var _parseExpression2 = _interopRequireDefault(__webpack_require__(/*! ../script/parseExpression */ "./packages/compiler/src/script/parseExpression.js"));

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./packages/compiler/src/helpers.js");

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/compiler/src/template/attrs.js");

var _helpers2 = __webpack_require__(/*! ./helpers */ "./packages/compiler/src/template/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function expression(context, code, isExpression, observableCall) {
  if (isExpression === void 0) {
    isExpression = false;
  }

  if (observableCall === void 0) {
    observableCall = true;
  }

  if (typeof code === 'object') {
    return {
      statefull: false,
      value: JSON.stringify(code)
    };
  }

  code = String(code);
  console.warn(code);
  var ast = parser.parse(code);

  var _parseExpression = (0, _parseExpression2.default)(context.data, ast),
      changed = _parseExpression.changed,
      observable = _parseExpression.observable;

  if (changed) {
    code = (0, _generator.default)(ast, {
      retainLines: true,
      compact: true,
      minified: true,
      concise: true,
      quotes: "double"
    }, code).code; // clean append

    code = code.replace(/(;|,)$/g, '');

    if (isExpression) {
      code = "() => { return " + code + "; }";
    }
  }

  console.log(code);
  console.log('--------');
  return {
    statefull: observable,
    value: code
  };
} // export default function expression(context, code, execute = false)
// {
// 	const ast = parser.parse(code);
// 	var changed = false;
// 	var statefull = false;
// 	traverse(ast, {
// 		enter(path)
// 		{
// 			if(path.node.type === 'Identifier')
// 			{
// 				if(!['key', 'label'].includes(path.key)) {
// 					let nameBuilder = [];
// 					let variable = path.node.name;
// 					let variableWithContext = getVariable(context.data, variable)
// 					if(path.container.type === 'CallExpression') {
// 						variableWithContext = false;
// 					}
// 					if(variableWithContext) {
// 						nameBuilder.push('ctx')
// 						nameBuilder.push(variableWithContext);
// 					} else {
// 						nameBuilder.push(variable);
// 					}
// 					if(!variable) {
// 						throw new Error(`There is no ${ variable } in context ${ context }`);
// 					}
// 					if(context.reactive_variables.includes(variable)) {
// 						statefull = true;
// 					}
// 					path.node.name = nameBuilder.join('.') + (execute ? '()' : '');
// 					changed = true;
// 				} else {
// 					path.node.name = prepareOptionKey(path.node.name);
// 				}
// 			}
// 		}
// 	});
// 	code = generate(ast, {
// 		retainLines: true,
// 		compact: true,
// 		minified: true,
// 		concise: true,
// 		quotes: "double",
// 	}, code).code;
// 	// clean append
// 	code = code.replace(/(;|,)$/g, '');
// 	if(changed && execute) {
// 		code = `() => { return ${code}; }`;
// 	}
// 	return {
// 		statefull,
// 		value: code
// 	}
// }

/***/ }),

/***/ "./packages/compiler/src/template/helpers.js":
/*!***************************************************!*\
  !*** ./packages/compiler/src/template/helpers.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasState = hasState;
exports.getVariable = getVariable;

var _empty = __webpack_require__(/*! ../empty */ "./packages/compiler/src/empty.js");

function hasState(context, variable) {
  // console.log(context, variable.split('.'));
  if (context === null) {
    return null;
  }

  var value = context;
  var var_parts = variable.split('.');

  for (var i = 0; i < var_parts.length; i++) {
    value = value[var_parts[i]];

    if (typeof value === 'undefined') {
      return false;
    }
  }

  if (value._observable) {
    return true;
  }

  return false;
}

function getVariable(context, variable) {
  if (Object.keys(context.computed).includes(variable)) {
    return "_computed." + variable;
  }

  if (Object.keys(context.state).includes(variable)) {
    return "_state." + variable;
  }

  if (Object.keys(context.data).includes(variable)) {
    return "_data." + variable;
  }

  if (Object.keys(context.methods).includes(variable)) {
    return variable + ".bind(ctx)";
  }

  if (Object.keys(context.props).includes(variable)) {
    return "_props." + variable;
  }

  return false;
}

/***/ }),

/***/ "./packages/compiler/src/template/html.js":
/*!************************************************!*\
  !*** ./packages/compiler/src/template/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parse;

var _htmljsParser = __webpack_require__(/*! htmljs-parser */ "./node_modules/htmljs-parser/index.js");

var _Node = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./packages/compiler/src/template/Node.js"));

var _TextNode = _interopRequireDefault(__webpack_require__(/*! ./TextNode */ "./packages/compiler/src/template/TextNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleTag(event) {
  var tag = event.tagName;
  var attributes = {};

  if (event.attributes) {
    for (var i = 0; i < event.attributes.length; i++) {
      var attr = event.attributes[i];
      attributes[attr.name] = attr.value || true;
    }
  }

  return {
    tag: tag,
    attributes: attributes
  };
}

function close(event) {
  var _handleTag = handleTag(event),
      tag = _handleTag.tag,
      attributes = _handleTag.attributes;

  console.log('end', tag);
}

function parse(html) {
  var stack = [];
  html = html.replace(/\t/g, ' ').replace(/\s\s+/g, ' ');
  (0, _htmljsParser.createParser)({
    onOpenTag: function onOpenTag(event) {
      var _handleTag2 = handleTag(event),
          tag = _handleTag2.tag,
          attributes = _handleTag2.attributes;

      console.log('create Node', tag, attributes);
    },
    onText: function onText(event) {
      var value = event.value.trim();

      if (value !== '') {
        console.warn(value);
      }
    },
    onString: function onString(event) {// console.warn(event)
    },
    onCloseTag: close
  }, {
    reflectiveAttributes: true
  }).parse(html);
}

/***/ }),

/***/ "./packages/compiler/src/template/parseFunctions.js":
/*!**********************************************************!*\
  !*** ./packages/compiler/src/template/parseFunctions.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseStatement = parseStatement;
exports.default = parseFunctions;
exports.IF_ATTRS = void 0;
var IF_ATTRS = ['v-if', 'v-else-if', 'v-else'];
exports.IF_ATTRS = IF_ATTRS;

function parseStatement(node) {
  var start = false;
  var end = true;
  var statement = false;
  var condition = node.attrs['v-if'] || node.attrs['v-else-if'] || 'true';

  if (node.attrs['v-if']) {
    start = true;
  }

  if (node.attrs['v-if'] || node.attrs['v-else-if'] || node.attrs['v-else']) {
    node.if_statement = true;
    statement = true;
  }

  if (node.nextSibling) {
    if (node.nextSibling.attrs['v-else-if'] || node.nextSibling.attrs['v-else']) {
      end = false;
    }
  } // if(node.prevSibling) {
  // 	if(node.prevSibling.if_statement) {
  // 		statement = true;
  // 	}
  // }
  // console.warn(node.attrs, statement, start, end);


  return {
    condition: condition,
    is: statement,
    start: start,
    end: end
  };
}

function parseFunctions(code) {
  code = code.replace(/\@if\((.*)\)/g, '<if condition="$1">').replace(/\@elseif\((.*)\)/g, '<else-if condition="$1">').replace(/\@else/g, '<else>').replace(/\@endif/g, '<endif>');
  console.log(code);
  return code;
}

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _compiler = __webpack_require__(/*! @sinuous/compiler */ "./packages/compiler/dist/index.js");

var _data = __webpack_require__(/*! @sinuous/compiler/src/script/data */ "./packages/compiler/src/script/data.js");

var _html = _interopRequireDefault(__webpack_require__(/*! @sinuous/compiler/src/template/html */ "./packages/compiler/src/template/html.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { parseExpression } from '@sinuous/compiler/src/template/expression';
var data = (0, _data.createData)();
data.data = {
  d1: 1,
  d2: 1
};
data.state = {
  s1: 1,
  s2: 1
};
data.computed = {
  c1: 1,
  c2: 1
};
data.methods = {
  m1: 1,
  m2: 1
}; // parseExpression(data, `
// let d = function() {}
// let d2 = () => {}
// function c1(s3) {
// 	let d = [];
// 	for(let i = 0; i < s1.length; i++) {
// 		d.push(s1[i]);
// 	}
// }
// `)
// parseExpression(data, '{ s1: () => s1 }')
// parseExpression(data, 'alert();', true)
// parseExpression(data, 'm1(event)')
// parseExpression(data, 's1 += 6')
// parseExpression(data, 'd1 = d1 + 6')
// parseExpression(data, 'd1 /= 6')
// parseExpression(data, 'd.push(s1)')
// parseExpression(data, 'd = () => { return s1 }')

var source = "\n<template>\n\t<div @click=\"reactive_click\">\n\t\ttest {{ visible }}\n\t</div>\n</template>\n\n<script>\nimport { d } from '../src/test-import.js'\n\n/**\n * State\n * @type {Number}\n */\nlet $visible = d;\nlet $clicks2 = {\n\ta: 2\n};\nlet clicks = 1;\n/**\n * Computed\n * @return {[type]} [description]\n */\nlet computed1 = function() {\n\treturn 1;\n}\n\nlet computed2 = () => {\n\tlet k = [];\n\t\n\tfor(let d in [1,2,3]) {\n\t\tk.push(visible);\n\t}\n\n\treturn visible * 2 * 5;\n}\n\n/**\n * Methods\n */\nfunction click(event) {\n\tclicks++;\n\talert(this._data.clicks)\n}\n\nfunction reactive_click(event2) {\n\tvisible += 1;\n}\n\n// function mounted() {\n\n// }\n</script>\n"; // parseHTML(source);

var block = (0, _compiler.compiler)({
  context: data,
  type: 'template',
  source: source
});
console.log(block.source.render);

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/test.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/test.js */"./src/test.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvbXBpbGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvQXN0R2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2NyaXB0L2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3NjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3NjcmlwdC9wYXJzZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvcGFyc2VFeHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2NyaXB0L3BhcnNlTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90ZW1wbGF0ZS9UZXh0Tm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2F0dHJzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdGVtcGxhdGUvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2dlbmVyYXRlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdGVtcGxhdGUvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdGVtcGxhdGUvcGFyc2VGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zY3JpcHQvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2NyaXB0L3BhcnNlRXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9jb21waWxlci9zcmMvdGVtcGxhdGUvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9jb21waWxlci9zcmMvdGVtcGxhdGUvVGV4dE5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3RlbXBsYXRlL2F0dHJzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9odG1sLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9wYXJzZUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVzdC5qcyJdLCJuYW1lcyI6WyJibG9ja3MiLCJzb3VyY2UiLCJ0eXBlIiwiZXhlYyIsInMiLCJjb21waWxlciIsImNvbnRleHQiLCJyb290IiwibG93ZXJDYXNlVGFnTmFtZSIsInNjcmlwdCIsIm5vZGVzIiwiaSIsImlubmVySFRNTCIsIl8iLCJSZWFjdGl2ZU5hbWVzcGFjZXMiLCJuYW1lIiwiaWQiLCJkYXRhIiwicGF0aCIsImdldElkZW50aWZpZXJOYW1lIiwibWF0Y2giLCJtYXRjaElkZW50aWZpZXIiLCJvYnNlcnZhYmxlQ2FsbCIsImN0eCIsIm5hbWVzcGFjZSIsIk9iamVjdCIsIm9ic2VydmFibGUiLCJpbXBvcnRzIiwicHJvcGVydGllcyIsIm9iamVjdCIsIkZ1bmN0aW9uUmV0dXJuRXhwcmVzc2lvbiIsImdlbmVyYXRlRnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uIiwiT2JqZWN0UmV0dXJuRXhwcmVzc2lvbiIsImdlbmVyYXRlT2JqZWN0UmV0dXJuRXhwcmVzc2lvbiIsImV4cG9ydGVkT2JqZWN0IiwiZXhwb3J0ZWREZWZhdWx0IiwiYm9keSIsInZhbHVlcyIsInZhbCIsIlJlYWN0aXR5IiwiRnVuY3Rpb25SZXR1cm4iLCJwcm9wcyIsInN0YXRlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiQWlpRXhwcmVzc2lvbiIsImlzRnVuY3Rpb24iLCJhcHBlbmQiLCJpc0lkZW50aWZpZXJSZWFjdGl2ZSIsImFzdCIsInNvdXJjZVR5cGUiLCJzdHJpY3RNb2RlIiwicmVhY3RpdmVfdmFyaWFibGVzIiwicmV0YWluTGluZXMiLCJjb21wYWN0IiwibWluaWZpZWQiLCJjb25jaXNlIiwicXVvdGVzIiwiaXNGdW5jdGlvbkRlY2xhcmF0aW9uIiwiVmFyaWFibGVEZWNsYXJhdG9yIiwiZW50ZXIiLCJ2YWx1ZSIsIkFycm93RnVuY3Rpb25FeHByZXNzaW9uIiwiZXhpdCIsIkZ1bmN0aW9uRGVjbGFyYXRpb24iLCJjb2xsZWN0VmFyaWFibGVzIiwiY2hhbmdlZCIsIkltcG9ydERlY2xhcmF0aW9uIiwiQXNzaWdubWVudEV4cHJlc3Npb24iLCJhcmdzIiwiSWRlbnRpZmllciIsImZ1bmN0aW9uQmxvY2tIYW5kbGluZyIsImFzc2lnbm1lbnRIYW5kbGluZyIsInZhcmlhYmxlRGVjbGFyYXRpb25IYW5kbGluZyIsInNob3VsZEFzc2lnbm1lbnRIYW5kbGUiLCJoYXNGdW5jdGlvblJlYWN0aXZlIiwibWVtYmVySGFuZGxpbmciLCJDYWxsRXhwcmVzc2lvbiIsIk1lbWJlckV4cHJlc3Npb24iLCJFeHByZXNzaW9uU3RhdGVtZW50IiwiZXhwcmVzc2lvbiIsIkJsb2NrU3RhdGVtZW50IiwiY29sbGVjdE1ldGhvZHMiLCJISUQiLCJpc05vblBocmFzaW5nVGFnIiwiSUZfU1RBVEVNRU5UX1NUQVJURUQiLCJjaGlsZHJlbiIsInRhZyIsIk5vZGUiLCJhdHRycyIsInNldFNpYmxpbmdzIiwidG9BU1QiLCJoeWRyYXRlIiwiY29kZSIsInNob3VsZEh5ZGFyYXRlIiwic2hvdWxkT3B0aW9uc0h5ZHJhdGUiLCJjaGlsZCIsInN0YXRlZnVsbCIsIm9wdGlvbnMiLCJrZXkiLCJmbl9nZW5lcmF0ZWQiLCJzdGF0ZW1lbnQiLCJjb25kaXRpb24iLCJnZXRDb21wb25lbnRDb2RlIiwiVGV4dE5vZGUiLCJBdHRyc01hcCIsIkhUTUxBdHRyaWJ1dGVzIiwiaXNFeHByZXNzaW9uIiwiZXhwIiwic3R5bGVzIiwicGFpcnMiLCJzdHJpbmciLCJ0bXAiLCJ2YXJpYWJsZSIsIm9wdGlvbl9rZXkiLCJwcmVwYXJlT3B0aW9uS2V5IiwicGFyc2VTdHlsZXMiLCJKU09OIiwiU3RyaW5nIiwiY29uc29sZSIsInBhcnNlciIsImlzUm9vdCIsIm5vZGUiLCJnZW5lcmF0ZVRyZWUiLCJ0cmVlIiwicmVuZGVyIiwicmVzdWx0IiwicmVuZGVyQVNUIiwiaHlkcmF0aW9uQVNUIiwidmFyX3BhcnRzIiwiSUZfQVRUUlMiLCJzdGFydCIsImVuZCIsImlzIiwic3Vic3RyaW5nIiwiY2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb24iLCJwYXJlbnQiLCJsaXN0S2V5IiwiRXJyb3IiLCJzZXRJZGVudGlmaWVyQ29udGV4dCIsImluY2x1ZGVzIiwiY29udGFpbmVyIiwia2V5cyIsImNyZWF0ZURhdGEiLCJwYXJzZUV4cHJlc3Npb24iLCJsZWZ0IiwicmlnaHQiLCJvcGVyYXRvciIsImxlbmd0aCIsInJlcGxhY2VXaXRoIiwiam9pbiIsImhpZCIsInByZXZTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJpZl9zdGF0ZW1lbnQiLCJwdXNoIiwiaXNDb21wb25lbnQiLCJ0ZXh0IiwicGFyc2VPcHRpb25WYWx1ZSIsInJlcGxhY2UiLCJwYXJzZU9wdGlvbktleSIsInNwbGl0IiwicGFyc2VPcHRpb25zIiwicGFyc2VBdHRycyIsInRyaW0iLCJzdHJpbmdpZnkiLCJ3YXJuIiwicGFyc2UiLCJsb2ciLCJoYXNTdGF0ZSIsIl9vYnNlcnZhYmxlIiwiZ2V0VmFyaWFibGUiLCJoYW5kbGVUYWciLCJldmVudCIsInRhZ05hbWUiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsImNsb3NlIiwiaHRtbCIsInN0YWNrIiwib25PcGVuVGFnIiwib25UZXh0Iiwib25TdHJpbmciLCJvbkNsb3NlVGFnIiwicmVmbGVjdGl2ZUF0dHJpYnV0ZXMiLCJwYXJzZVN0YXRlbWVudCIsInBhcnNlRnVuY3Rpb25zIiwiZDEiLCJkMiIsInMxIiwiczIiLCJjMSIsImMyIiwibTEiLCJtMiIsImJsb2NrIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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U0FISCxFQUdjLFFBSGQsRUFJTEEsT0FKSyxDQUlHLFVBSkgsRUFJZSxTQUpmLENBQVA7QUFPQXhDLFNBQU8sQ0FBQ2lELEdBQVIsQ0FBWTNFLElBQVo7QUFFQSxTQUFPQSxJQUFQO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNyREQ7O0FBR0E7O0FBQ0E7Ozs7QUFGQTtBQUtBLElBQUk1RSxJQUFJLEdBQUcsdUJBQVg7QUFFQUEsSUFBSSxDQUFDQSxJQUFMLEdBQVk7QUFDWDBLLElBQUUsRUFBRSxDQURPO0FBRVhDLElBQUUsRUFBRTtBQUZPLENBQVo7QUFLQTNLLElBQUksQ0FBQ3lCLEtBQUwsR0FBYTtBQUNabUosSUFBRSxFQUFFLENBRFE7QUFFWkMsSUFBRSxFQUFFO0FBRlEsQ0FBYjtBQUtBN0ssSUFBSSxDQUFDMEIsUUFBTCxHQUFnQjtBQUNmb0osSUFBRSxFQUFFLENBRFc7QUFFZkMsSUFBRSxFQUFFO0FBRlcsQ0FBaEI7QUFLQS9LLElBQUksQ0FBQzJCLE9BQUwsR0FBZTtBQUNkcUosSUFBRSxFQUFFLENBRFU7QUFFZEMsSUFBRSxFQUFFO0FBRlUsQ0FBZixDLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQUlqTSxNQUFNLHVyQkFBVixDLENBdURBOztBQUdBLElBQUlrTSxLQUFLLEdBQUcsd0JBQVM7QUFDcEI3TCxTQUFPLEVBQUVXLElBRFc7QUFFcEJmLE1BQUksRUFBRSxVQUZjO0FBR3BCRCxRQUFNLEVBQUVBO0FBSFksQ0FBVCxDQUFaO0FBTUFzSCxPQUFPLENBQUNpRCxHQUFSLENBQVkyQixLQUFLLENBQUNsTSxNQUFOLENBQWE0SCxNQUF6QixFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgY29tcGlsZVNjcmlwdCB9IGZyb20gXCIuL3NjcmlwdFwiO1xuaW1wb3J0IHsgY29tcGlsZVRlbXBsYXRlIH0gZnJvbSBcIi4vdGVtcGxhdGVcIjtcblxuZnVuY3Rpb24gY29tcGlsZXIoY29udGV4dCwgeyBibG9ja3MsIHNvdXJjZSwgdHlwZSB9KVxue1xuXHRsZXQgZXhlYyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc291cmNlO1xuXHR9XG5cblx0aWYodHlwZSA9PT0gJ3NjcmlwdCcpIHtcblx0XHRsZXQgcyA9IGNvbXBpbGVTY3JpcHQoY29udGV4dCwgc291cmNlKTtcblx0XHRzb3VyY2UgPSBzLmNvZGUgPT0gJycgPyBudWxsIDogcy5jb2RlO1xuXHR9XG5cblx0aWYodHlwZSA9PT0gJ3RlbXBsYXRlJykge1xuXHRcdHNvdXJjZSA9IGNvbXBpbGVUZW1wbGF0ZShjb250ZXh0LCBzb3VyY2UsIGJsb2Nrcyk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHNvdXJjZSxcblx0XHR0eXBlLFxuXHRcdGV4ZWMsXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCwgeyB0eXBlLCBzb3VyY2UgfSlcbntcblx0cmV0dXJuIHtcblx0XHR0eXBlLFxuXHRcdHNvdXJjZSxcblx0XHRleGVjKGJsb2NrcyA9IFtdKSB7XG5cdFx0XHRyZXR1cm4gY29tcGlsZXIoY29udGV4dCwge1xuXHRcdFx0XHRibG9ja3MsXG5cdFx0XHRcdHNvdXJjZTogdGhpcy5zb3VyY2UsXG5cdFx0XHRcdHR5cGU6IHRoaXMudHlwZSxcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG59OyIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnbm9kZS1odG1sLXBhcnNlcic7XG5pbXBvcnQgYmxvY2sgZnJvbSAnLi9ibG9jay5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlcih7IGNvbnRleHQsIHR5cGUsIHNvdXJjZSB9KSB7XG5cblx0bGV0IHJvb3QgPSBwYXJzZShzb3VyY2UsIHtcblx0XHRsb3dlckNhc2VUYWdOYW1lOiB0cnVlLFxuXHRcdHNjcmlwdDogdHJ1ZSxcblx0fSk7XG5cblx0bGV0IG5vZGVzID0gcm9vdC5jaGlsZE5vZGVzO1xuXHRsZXQgYmxvY2tzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdGlmKG5vZGVzW2ldLnRhZ05hbWUpIHtcblx0XHRcdGJsb2Nrc1tub2Rlc1tpXS50YWdOYW1lXSA9IGJsb2NrKGNvbnRleHQsIHtcblx0XHRcdFx0dHlwZTogbm9kZXNbaV0udGFnTmFtZSxcblx0XHRcdFx0c291cmNlOiBub2Rlc1tpXS5pbm5lckhUTUwsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cdFxuXG5cdGlmKGJsb2Nrc1t0eXBlXSkge1xuXHRcdHJldHVybiBibG9ja3NbdHlwZV0uZXhlYyhibG9ja3MpO1xuXHR9XG5cblx0cmV0dXJuIGJsb2NrKGNvbnRleHQsIHtcblx0XHR0eXBlOiB0eXBlLFxuXHRcdHNvdXJjZTogbnVsbCxcblx0fSk7XG59IiwiZXhwb3J0IGNvbnN0IF8gPSAtMTtcbiIsImV4cG9ydCBjb25zdCBSZWFjdGl2ZU5hbWVzcGFjZXMgPSBbJ3N0YXRlJywgJ2NvbXB1dGVkJ107XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lkZW50aWZpZXJSZWFjdGl2ZShkYXRhLCBpZClcbntcblx0bGV0IG5hbWUgPSBpZC5uYW1lO1xuXHRcblx0aWYobmFtZS5tYXRjaCgvXlxcJC9nKSlcdHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBkYXRhLnN0YXRlW25hbWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWRlbnRpZmllck5hbWUoaWQpXG57XG5cdGlmKCFpZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bGV0IG5hbWUgPSBpZC5uYW1lO1xuXG5cdGlmKG5hbWUubWF0Y2goL15cXCQvZykpXHR7XG5cdFx0cmV0dXJuIG5hbWUuc3Vic3RyaW5nKDEpXG5cdH1cblxuXHRyZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRnVuY3Rpb25Bcmd1bWVudERlY2xhcmF0aW9uKGRhdGEsIHBhdGgpXG57XG5cdGlmKHBhdGgucGFyZW50LnR5cGUgIT09ICdGdW5jdGlvbkRlY2xhcmF0aW9uJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBpZCA9IHBhdGgubm9kZTtcblx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShpZCk7XG5cdGxldCBtYXRjaCA9IG1hdGNoSWRlbnRpZmllcihkYXRhLCBpZCk7XG5cblx0aWYobWF0Y2gubmFtZXNwYWNlICYmIHBhdGgubGlzdEtleSA9PT0gJ3BhcmFtcycpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYFZhcmlhYmxlICR7IG5hbWUgfSBoYXMgYWxyZWFkeSBkZWZpbmVkIGluICR7IG1hdGNoLm5hbWVzcGFjZSB9YClcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SWRlbnRpZmllckNvbnRleHQoY3R4LCBkYXRhLCBwYXRoLCBvYnNlcnZhYmxlQ2FsbCA9IHRydWUpXG57XG5cdGlmKFsnRnVuY3Rpb25EZWNsYXJhdGlvbicsICdWYXJpYWJsZURlY2xhcmF0b3InLCAnTGFiZWxlZFN0YXRlbWVudCddLmluY2x1ZGVzKHBhdGgucGFyZW50LnR5cGUpIHx8IFsncHJvcGVydHknXS5pbmNsdWRlcyhwYXRoLmtleSkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXHRsZXQgbWF0Y2ggPSBtYXRjaElkZW50aWZpZXIoZGF0YSwgaWQpO1xuXHRcblx0aWYobWF0Y2gubmFtZXNwYWNlID09PSBmYWxzZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdG5hbWUgPSBgJHtjdHh9Ll8ke21hdGNoLm5hbWVzcGFjZX0uJHtuYW1lfWA7XG5cdC8vIGNvbnNvbGUubG9nKG5hbWUsIG9ic2VydmFibGVDYWxsKVxuXHRpZihtYXRjaC5vYnNlcnZhYmxlICYmIHBhdGguY29udGFpbmVyLnR5cGUgIT09ICdDYWxsRXhwcmVzc2lvbicgJiYgb2JzZXJ2YWJsZUNhbGwpIHtcblx0XHRuYW1lICs9ICcoKSc7XG5cdH1cblxuXHRpZC5uYW1lID0gbmFtZTtcblxuXHRyZXR1cm4gbWF0Y2gub2JzZXJ2YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoSWRlbnRpZmllcihjb250ZXh0LCBpZClcbntcblx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShpZCk7XG5cdGxldCBuYW1lc3BhY2UgPSBmYWxzZTtcblxuXHRmb3IobGV0IGtleSBpbiBjb250ZXh0KSB7XG5cdFx0aWYoT2JqZWN0LmtleXMoY29udGV4dFtrZXldKS5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdFx0bmFtZXNwYWNlID0ga2V5O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bmFtZXNwYWNlLFxuXHRcdG9ic2VydmFibGU6IFJlYWN0aXZlTmFtZXNwYWNlcy5pbmNsdWRlcyhuYW1lc3BhY2UpXG5cdH07XG59IiwiaW1wb3J0IHsgXyB9IGZyb20gJy4vZW1wdHkuanMnO1xuaW1wb3J0IHsgY29tcGlsZXIgfSBmcm9tICcuL2NvbXBpbGVyLmpzJztcblxuZXhwb3J0IHsgXywgY29tcGlsZXIgfSIsImltcG9ydCB7XG5cdEV4cG9ydERlZmF1bHREZWNsYXJhdGlvbixcblx0T2JqZWN0RXhwcmVzc2lvbixcblx0T2JqZWN0UHJvcGVydHksXG5cdE9iamVjdE1ldGhvZCxcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEZ1bmN0aW9uRXhwcmVzc2lvbixcblx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEJsb2NrU3RhdGVtZW50LFxuXHRSZXR1cm5TdGF0ZW1lbnQsXG5cdGlkZW50aWZpZXIsXG5cdHByb2dyYW0sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Ly8gQ29uc3RzXG5cdFJlYWN0aXR5LFxuXHRGdW5jdGlvblJldHVybkV4cHJlc3Npb24sXG5cdE9iamVjdFJldHVybkV4cHJlc3Npb24sXG5cdEFpaUV4cHJlc3Npb24sXG59IGZyb20gXCIuL2hlbHBlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGF0YSlcbntcblx0bGV0IGltcG9ydHMgPSBbXTtcblxuXHRmb3IobGV0IHByb3AgaW4gZGF0YS5pbXBvcnRzKSB7XG5cdFx0aW1wb3J0cy5wdXNoKGRhdGEuaW1wb3J0c1twcm9wXSlcblx0fTtcblxuXHRsZXQgcHJvcGVydGllcyA9IFtdO1xuXG5cdE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKHByb3AsIGtleSkgPT4ge1xuXG5cdFx0bGV0IG9iamVjdCA9IG51bGw7XG5cblx0XHRpZihGdW5jdGlvblJldHVybkV4cHJlc3Npb24uaW5jbHVkZXMocHJvcCkpIHtcblx0XHRcdG9iamVjdCA9IGdlbmVyYXRlRnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uKGRhdGEsIHByb3ApO1xuXHRcdH0gZWxzZSBpZihPYmplY3RSZXR1cm5FeHByZXNzaW9uLmluY2x1ZGVzKHByb3ApKSB7XG5cdFx0XHRvYmplY3QgPSBnZW5lcmF0ZU9iamVjdFJldHVybkV4cHJlc3Npb24oZGF0YSwgcHJvcCk7XG5cdFx0fVxuXG5cdFx0aWYoIW9iamVjdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRwcm9wZXJ0aWVzLnB1c2gob2JqZWN0KTtcblx0fSlcblxuXHRsZXQgZXhwb3J0ZWRPYmplY3QgPSBPYmplY3RFeHByZXNzaW9uKHByb3BlcnRpZXMpO1xuXHRsZXQgZXhwb3J0ZWREZWZhdWx0ID0gW1xuXHRcdEV4cG9ydERlZmF1bHREZWNsYXJhdGlvbihleHBvcnRlZE9iamVjdClcblx0XTtcblxuXHRsZXQgYm9keSA9IFtdXG5cdFx0LmNvbmNhdChpbXBvcnRzKVxuXHRcdC5jb25jYXQoZXhwb3J0ZWREZWZhdWx0KVxuXG5cdHJldHVybiBwcm9ncmFtKFxuXHRcdGJvZHksIFxuXHRcdFtdLFxuXHRcdCdtb2R1bGUnXG5cdCk7XG59XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVGdW5jdGlvblJldHVybkV4cHJlc3Npb24oZGF0YSwgcmV0dXJuUHJvcClcbntcblx0bGV0IHZhbHVlcyA9IGRhdGFbcmV0dXJuUHJvcF07XG5cdGxldCBwcm9wZXJ0aWVzID0gW107XG5cblx0Zm9yKGxldCBwcm9wIGluIHZhbHVlcykge1xuXHRcdGxldCB2YWwgPSB2YWx1ZXNbcHJvcF07XG5cblx0XHRpZih2YWwudHlwZSA9PT0gJ0Jsb2NrU3RhdGVtZW50Jykge1xuXHRcdFx0dmFsID0gQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW10sIHZhbCk7XG5cdFx0fVxuXG5cdFx0aWYoUmVhY3RpdHlbcmV0dXJuUHJvcF0pIHtcblx0XHRcdHZhbCA9IENhbGxFeHByZXNzaW9uKGlkZW50aWZpZXIoUmVhY3RpdHlbcmV0dXJuUHJvcF0pLCBbdmFsXSk7XG5cdFx0fVxuXG5cdFx0cHJvcGVydGllcy5wdXNoKFxuXHRcdFx0T2JqZWN0UHJvcGVydHkoaWRlbnRpZmllcihwcm9wKSwgdmFsKVxuXHRcdClcblx0fVxuXG5cdGxldCBGdW5jdGlvblJldHVybiA9IFJldHVyblN0YXRlbWVudChcblx0XHRPYmplY3RFeHByZXNzaW9uKFxuXHRcdFx0cHJvcGVydGllc1xuXHRcdClcblx0KVxuXG5cdGxldCBib2R5ID0gQmxvY2tTdGF0ZW1lbnQoW0Z1bmN0aW9uUmV0dXJuXSlcblxuXHRsZXQgb2JqZWN0ID0gT2JqZWN0TWV0aG9kKCdtZXRob2QnLCBpZGVudGlmaWVyKHJldHVyblByb3ApLFxuXHRcdFJlYWN0aXR5W3JldHVyblByb3BdID8gW2lkZW50aWZpZXIoUmVhY3RpdHlbcmV0dXJuUHJvcF0pXSA6IFtdXG5cdCwgYm9keSk7XG5cblx0cmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVPYmplY3RSZXR1cm5FeHByZXNzaW9uKGRhdGEsIHByb3ApXG57XG5cdGxldCB2YWx1ZXMgPSBkYXRhW3Byb3BdO1xuXHRsZXQgcHJvcGVydGllcyA9IFtdO1xuXG5cdGZvcihsZXQgcHJvcCBpbiB2YWx1ZXMpIHtcblx0XHRsZXQgdmFsID0gdmFsdWVzW3Byb3BdO1xuXG5cdFx0aWYodmFsLnR5cGUgPT09ICdGdW5jdGlvbkRlY2xhcmF0aW9uJykge1xuXHRcdFx0dmFsID0gRnVuY3Rpb25FeHByZXNzaW9uKG51bGwsIHZhbC5wYXJhbXMsIHZhbC5ib2R5KTtcblx0XHR9XG5cblx0XHRwcm9wZXJ0aWVzLnB1c2goXG5cdFx0XHRPYmplY3RQcm9wZXJ0eShpZGVudGlmaWVyKHByb3ApLCB2YWwpXG5cdFx0KVxuXHR9XG5cblx0bGV0IG9iamVjdCA9IE9iamVjdFByb3BlcnR5KFxuXHRcdGlkZW50aWZpZXIocHJvcCksXG5cdFx0T2JqZWN0RXhwcmVzc2lvbihwcm9wZXJ0aWVzKVxuXHQpO1xuXG5cdHJldHVybiBvYmplY3Q7XG59IiwiZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG5cdGltcG9ydHM6IFtdLFxuXHRwcm9wczoge30sXG5cdGRhdGE6IHt9LFxuXHRzdGF0ZToge30sXG5cdGNvbXB1dGVkOiB7fSxcblx0bWV0aG9kczoge30sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYXRhKGNvbnRleHQpIHtcblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHt9LCBjb250ZXh0KTtcbn0iLCIvLyBpbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCI7XG5cbi8qKlxuICogQ29uc3RzXG4gKi9cblxuZXhwb3J0IGNvbnN0IFJlYWN0aXR5ID0ge1xuXHQnc3RhdGUnOiAnbycsXG5cdCdjb21wdXRlZCc6ICdvJyxcbn07XG5cbmV4cG9ydCBjb25zdCBGdW5jdGlvblJldHVybkV4cHJlc3Npb24gPSBbXG5cdCdkYXRhJywgJ3N0YXRlJywgJ2NvbXB1dGVkJyxcbl07XG5cbmV4cG9ydCBjb25zdCBPYmplY3RSZXR1cm5FeHByZXNzaW9uID0gW1xuXHQnbWV0aG9kcycsIFxuXTtcblxuLy8gQXMgaXQgaXMgZXhwcmVzc2lvbnNcbmV4cG9ydCBjb25zdCBBaWlFeHByZXNzaW9uID0gW1xuXHQnaW1wb3J0cycsXG5dO1xuXG4vLyBleHBvcnQgY29uc3QgUkVUVVJOX0ZVTkNUSU9OX1RZUEUgPSAxO1xuLy8gZXhwb3J0IGNvbnN0IE9CSkVDVF9GVU5DVElPTl9UWVBFID0gMjtcblxuLyoqXG4gKiBGdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb250ZXh0YWJsZShkYXRhLCBpZClcbntcblx0bGV0IG5hbWUgPSBpZC5uYW1lO1xuXHRsZXQgaXNGdW5jdGlvbiA9IG5hbWUubWF0Y2goL1xcKFxcKSQvZyk7XG5cblx0bmFtZSA9IG5hbWUucmVwbGFjZSgvKFxcKHxcXCkpL2csICcnKTtcblxuXHRpZighbmFtZS5tYXRjaCgvXnRoaXNcXC4vZ2kpKSB7XG5cdFx0bGV0IGFwcGVuZCA9IFsndGhpcyddO1xuXHRcdFxuXHRcdGlmKE9iamVjdC5rZXlzKGRhdGEuc3RhdGUpLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRhcHBlbmQucHVzaCgnX3N0YXRlJyk7XG5cdFx0fSBlbHNlIGlmKE9iamVjdC5rZXlzKGRhdGEuY29tcHV0ZWQpLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRhcHBlbmQucHVzaCgnX2NvbXB1dGVkJyk7XG5cdFx0fSBlbHNlIGlmKE9iamVjdC5rZXlzKGRhdGEuZGF0YSkuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdGFwcGVuZC5wdXNoKCdfZGF0YScpO1xuXHRcdH0gZWxzZSBpZihPYmplY3Qua2V5cyhkYXRhLm1ldGhvZHMpLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRhcHBlbmQucHVzaCgnX21ldGhvZHMnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyB2YXJpYWJsZSAke25hbWV9YCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0YXBwZW5kLnB1c2gobmFtZSk7XG5cblx0XHRuYW1lID0gYXBwZW5kLmpvaW4oJy4nKTtcblx0fVxuXG5cdGlmKGlzRnVuY3Rpb24pIHtcblx0XHRuYW1lID0gYCR7bmFtZX0oKWA7XG5cdH1cblxuXHRpZC5uYW1lID0gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIGlkKVxue1xuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cdFxuXHRpZihuYW1lLm1hdGNoKC9eXFwkL2cpKVx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGRhdGEuc3RhdGVbbmFtZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJZGVudGlmaWVyTmFtZShpZClcbntcblx0aWYoIWlkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cblx0aWYobmFtZS5tYXRjaCgvXlxcJC9nKSlcdHtcblx0XHRyZXR1cm4gbmFtZS5zdWJzdHJpbmcoMSlcblx0fVxuXG5cdHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU9ic2VydmFibGVHZXR0ZXIoZGF0YSwgaWQpXG57XG5cdGlmKCFpc0lkZW50aWZpZXJSZWFjdGl2ZShkYXRhLCBpZCkpIHtcblx0XHRyZXR1cm4gaWQ7XG5cdH1cblx0XG5cdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXHRpZC5uYW1lID0gYCR7IG5hbWUgfSgpYDtcblxuXHRyZXR1cm4gaWQ7XG59IiwiXG5cbmltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiQGJhYmVsL3BhcnNlclwiO1xuaW1wb3J0IGdlbmVyYXRlIGZyb20gXCJAYmFiZWwvZ2VuZXJhdG9yXCI7XG5cbmltcG9ydCB7IGNyZWF0ZURhdGEgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgcGFyc2VDb250ZXh0IGZyb20gXCIuL3BhcnNlQ29udGV4dFwiO1xuaW1wb3J0IHBhcnNlRXhwcmVzc2lvbiBmcm9tIFwiLi9wYXJzZUV4cHJlc3Npb25cIjtcbmltcG9ydCBwYXJzZU1ldGhvZHMgZnJvbSBcIi4vcGFyc2VNZXRob2RzXCI7XG5pbXBvcnQgQXN0R2VuZXJhdG9yIGZyb20gXCIuL0FzdEdlbmVyYXRvclwiO1xuXG5cbi8qKlxuICogQ29tcGlsZXJcbiAqIEBwYXJhbSAge1t0eXBlXX0gc291cmNlIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJlYWN0aXZlVmFyaWFibGVzKGNvbnRleHQsIHNvdXJjZSlcbntcblx0bGV0IGRhdGEgPSBjcmVhdGVEYXRhKGNvbnRleHQpO1xuXG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShzb3VyY2UsIHtcblx0XHRzb3VyY2VUeXBlOiBcInVuYW1iaWd1b3VzXCIsXG5cdFx0c3RyaWN0TW9kZTogZmFsc2UsXG5cdH0pO1xuXG5cdHBhcnNlQ29udGV4dChkYXRhLCBhc3QpO1xuXG5cdGxldCByZWFjdGl2ZV92YXJpYWJsZXMgPSBbXTtcblxuXHRyZWFjdGl2ZV92YXJpYWJsZXMgPSByZWFjdGl2ZV92YXJpYWJsZXNcblx0XHQuY29uY2F0KE9iamVjdC5rZXlzKGRhdGEuc3RhdGUpKVxuXHRcdC5jb25jYXQoT2JqZWN0LmtleXMoZGF0YS5jb21wdXRlZCkpO1xuXG5cdHJldHVybiB7XG5cdFx0cmVhY3RpdmVfdmFyaWFibGVzLFxuXHRcdGRhdGEsXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlU2NyaXB0KGNvbnRleHQsIHNvdXJjZSlcbntcblx0bGV0IGRhdGEgPSBjcmVhdGVEYXRhKCk7XG5cdFx0Ly8gY29uc29sZS5sb2coZGF0YSk7XG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShzb3VyY2UsIHtcblx0XHRzb3VyY2VUeXBlOiBcInVuYW1iaWd1b3VzXCIsXG5cdFx0c3RyaWN0TW9kZTogZmFsc2UsXG5cdH0pO1xuXG5cdHBhcnNlQ29udGV4dChkYXRhLCBhc3QpO1xuXHRwYXJzZUV4cHJlc3Npb24oZGF0YSwgYXN0KTtcblxuXHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcblxuXHRyZXR1cm4gZ2VuZXJhdGUoQXN0R2VuZXJhdG9yKGRhdGEpLCB7XG5cdFx0cmV0YWluTGluZXM6IGZhbHNlLFxuXHRcdGNvbXBhY3Q6IGZhbHNlLFxuXHRcdG1pbmlmaWVkOiBmYWxzZSxcblx0XHRjb25jaXNlOiBmYWxzZSxcblx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG5cdH0sIHNvdXJjZSk7XG59XG4iLCJpbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5pbXBvcnQge1xuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Z2V0SWRlbnRpZmllck5hbWUsXG5cdGlzSWRlbnRpZmllclJlYWN0aXZlLFxuXHRtYWtlT2JzZXJ2YWJsZUdldHRlcixcbn0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG4vLyBHZXQgYWxsIGRhdGFcbi8vIE1hcmsgZGF0YSBhcyByZWFjdGl2ZSBvciBzdGF0ZWxlc3NcbmxldCBpc0Z1bmN0aW9uRGVjbGFyYXRpb24gPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3RWYXJpYWJsZXMgKGRhdGEpIHtcblx0cmV0dXJuIHtcblx0XHRWYXJpYWJsZURlY2xhcmF0b3I6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IHZhbHVlID0gcGF0aC5ub2RlLmluaXQ7XG5cblx0XHRcdFx0aWYoaXNGdW5jdGlvbkRlY2xhcmF0aW9uIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblxuXHRcdFx0XHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblxuXHRcdFx0XHRsZXQgdHlwZSA9IG51bGw7XG5cdFx0XHRcdGlmKFsnQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24nLCAnRnVuY3Rpb25FeHByZXNzaW9uJ10uaW5jbHVkZXModmFsdWUudHlwZSkpIHtcblx0XHRcdFx0XHR0eXBlID0gJ2NvbXB1dGVkJztcblx0XHRcdFx0fSBlbHNlIGlmKGlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIGlkKSkge1xuXHRcdFx0XHRcdHR5cGUgPSAnc3RhdGUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHR5cGUgPSAnZGF0YSc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkYXRhW3R5cGVdW25hbWVdID0gdmFsdWU7XG5cdFx0ICAgIH0sXG5cdFx0fSxcblx0XHRBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aXNGdW5jdGlvbkRlY2xhcmF0aW9uID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGlzRnVuY3Rpb25EZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHRcdCAgICB9XG5cdFx0fSxcblx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpc0Z1bmN0aW9uRGVjbGFyYXRpb24gPSB0cnVlO1xuXG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShpZCk7XG5cblx0XHRcdFx0ZGF0YS5tZXRob2RzW25hbWVdID0gRnVuY3Rpb25FeHByZXNzaW9uKGlkLCBwYXRoLm5vZGUucGFyYW1zLCBwYXRoLm5vZGUuYm9keSk7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGlzRnVuY3Rpb25EZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHRcdCAgICB9XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkYXRhLCBhc3QpXG57XG5cdHRyYXZlcnNlKGFzdCwgY29sbGVjdFZhcmlhYmxlcyhkYXRhKSk7XG59IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuaW1wb3J0IHtcblx0aWRlbnRpZmllcixcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEJpbmFyeUV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Z2V0SWRlbnRpZmllck5hbWUsXG5cdHNldElkZW50aWZpZXJDb250ZXh0LFxuXHRpc0lkZW50aWZpZXJSZWFjdGl2ZSxcblx0Y2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb25cbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihkYXRhLCBhc3QpXG57XG5cdHZhciBvYnNlcnZhYmxlID0gZmFsc2U7XG5cdHZhciBjaGFuZ2VkID0gZmFsc2U7XG5cblx0bGV0IEZ1bmN0aW9uRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0SW1wb3J0RGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGEuaW1wb3J0c1twYXRoLm5vZGUuc291cmNlLnZhbHVlXSA9IHBhdGgubm9kZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdEZ1bmN0aW9uRGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0RnVuY3Rpb25EZWNsYXJhdGlvbiA9IHRydWU7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aCkge1xuXHRcdCAgICBcdEZ1bmN0aW9uRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0Ly8gbWFrZSByZWFjdGl2ZSB2YXJpYWJsZSBhc3NpZ25tZW50IGFzIGZ1bmN0aW9uXG5cdFx0QXNzaWdubWVudEV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKCFpc0lkZW50aWZpZXJSZWFjdGl2ZShkYXRhLCBwYXRoLm5vZGUubGVmdCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgYXJncyA9IFtwYXRoLm5vZGUucmlnaHRdO1xuXG5cdFx0XHRcdGlmKHBhdGgubm9kZS5vcGVyYXRvci5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0YXJncyA9IFtcblx0XHRcdFx0XHRcdEJpbmFyeUV4cHJlc3Npb24ocGF0aC5ub2RlLm9wZXJhdG9yWzBdLCBwYXRoLm5vZGUubGVmdCwgcGF0aC5ub2RlLnJpZ2h0KVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUocGF0aC5ub2RlLmxlZnQpO1xuXHRcdFx0XHRwYXRoLnJlcGxhY2VXaXRoKFxuXHRcdFx0XHRcdENhbGxFeHByZXNzaW9uKGlkZW50aWZpZXIobmFtZSksIGFyZ3MpXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0b2JzZXJ2YWJsZSA9IHRydWU7XG5cdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0Y2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb24oZGF0YSwgcGF0aCk7XG5cdFx0XHRcdGlmKHNldElkZW50aWZpZXJDb250ZXh0KCd0aGlzJywgZGF0YSwgcGF0aCkpIHtcblx0XHRcdFx0XHRvYnNlcnZhYmxlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRhc3QsXG5cdFx0b2JzZXJ2YWJsZSxcblx0XHRjaGFuZ2VkLFxuXHR9XG59IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuaW1wb3J0IHtcblx0aWRlbnRpZmllcixcblx0Q2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Z2V0SWRlbnRpZmllck5hbWUsXG5cdGlzSWRlbnRpZmllclJlYWN0aXZlLFxuXHRtYWtlT2JzZXJ2YWJsZUdldHRlcixcblx0bWFrZUNvbnRleHRhYmxlLFxufSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmxldCBmdW5jdGlvbkJsb2NrSGFuZGxpbmcgPSBmYWxzZTtcbmxldCBhc3NpZ25tZW50SGFuZGxpbmcgPSBmYWxzZTtcbmxldCB2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcgPSBmYWxzZTtcbmxldCBzaG91bGRBc3NpZ25tZW50SGFuZGxlID0gZmFsc2U7XG5sZXQgaGFzRnVuY3Rpb25SZWFjdGl2ZSA9IGZhbHNlO1xubGV0IG1lbWJlckhhbmRsaW5nID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsZWN0TWV0aG9kcyAoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdC8vIHNhdmUgaW1wb3J0c1xuXHRcdEltcG9ydERlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdGRhdGEuaW1wb3J0c1twYXRoLm5vZGUuc291cmNlLnZhbHVlXSA9IHBhdGgubm9kZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFRyYW5zbGF0ZSB1c3VhbCB2YXJpYWJsZXMgdG8gcmVhY3RpdmVcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXHRcdCAgICAgICAgaWYoZnVuY3Rpb25CbG9ja0hhbmRsaW5nKSB7XG5cdFx0ICAgICAgICBcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXG5cdFx0ICAgICAgICBcdGlmKGRhdGEuc3RhdGVbbmFtZV0gJiYgIWFzc2lnbm1lbnRIYW5kbGluZyAmJiAhWydDYWxsRXhwcmVzc2lvbiddLmluY2x1ZGVzKHBhdGguY29udGFpbmVyLnR5cGUpKSB7XG5cdFx0ICAgICAgICBcdFx0aGFzRnVuY3Rpb25SZWFjdGl2ZSA9IHRydWU7XG5cdFx0ICAgICAgICBcdH1cblxuXHRcdCAgICAgICAgXHRpZighWydBc3NpZ25tZW50RXhwcmVzc2lvbicsICdDYWxsRXhwcmVzc2lvbiddLmluY2x1ZGVzKHBhdGguY29udGFpbmVyLnR5cGUpICYmICF2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcpIHtcblx0XHQgICAgICAgIFx0XHRtYWtlT2JzZXJ2YWJsZUdldHRlcihkYXRhLCBpZCk7XG5cdFx0XHQgICAgICAgIH1cblxuXHRcdFx0ICAgICAgICBpZighdmFyaWFibGVEZWNsYXJhdGlvbkhhbmRsaW5nICYmICFtZW1iZXJIYW5kbGluZykge1xuXHRcdFx0ICAgICAgICBcdG1ha2VDb250ZXh0YWJsZShkYXRhLCBpZCk7XG5cdFx0XHQgICAgICAgIH1cblxuXHRcdCAgICAgICAgfVxuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpIHtcblx0XHQgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSWRlbnRpZmllciBleGl0IGNhbGxlZFwiLCBwYXRoLm5vZGUubmFtZSk7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdFxuXHRcdENhbGxFeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdG1lbWJlckhhbmRsaW5nID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRleGl0KHBhdGgpIHtcblx0XHRcdFx0bWVtYmVySGFuZGxpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdE1lbWJlckV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0bWVtYmVySGFuZGxpbmcgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXHRcdFx0XHRtZW1iZXJIYW5kbGluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRWYXJpYWJsZURlY2xhcmF0b3I6IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0dmFyaWFibGVEZWNsYXJhdGlvbkhhbmRsaW5nID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRleGl0KHBhdGgpIHtcblx0XHRcdFx0dmFyaWFibGVEZWNsYXJhdGlvbkhhbmRsaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBNYWtlIFxuXHRcdCB2ID0gdiArIDFcblx0XHQgVG9cblx0XHQgdih2KCkgKyAxKVxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0RXhwcmVzc2lvblN0YXRlbWVudDoge1xuXHRcdFx0ZXhpdChwYXRoKSB7XG5cdFx0XHRcdGlmKHBhdGgubm9kZS5leHByZXNzaW9uLnR5cGUgPT09ICdBc3NpZ25tZW50RXhwcmVzc2lvbicpIHtcblx0XHRcdFx0XHRsZXQgZXhwcmVzc2lvbiA9IHBhdGgubm9kZS5leHByZXNzaW9uO1xuXHRcdFx0XHRcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoZXhwcmVzc2lvbi5sZWZ0KTtcblx0XHRcdFx0XHRwYXRoLnJlcGxhY2VXaXRoKFxuXHRcdFx0XHRcdFx0Q2FsbEV4cHJlc3Npb24oaWRlbnRpZmllcihuYW1lKSwgW2V4cHJlc3Npb24ucmlnaHRdKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdEFzc2lnbm1lbnRFeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdGFzc2lnbm1lbnRIYW5kbGluZyA9IHRydWU7XG5cdFx0XHRcdGlmKGlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIHBhdGgubm9kZS5sZWZ0KSkge1xuXHRcdFx0XHRcdHNob3VsZEFzc2lnbm1lbnRIYW5kbGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cdFx0XHRcdGFzc2lnbm1lbnRIYW5kbGluZyA9IGZhbHNlO1xuXHRcdFx0XHRzaG91bGRBc3NpZ25tZW50SGFuZGxlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBIYW5kbGUgZnVuY3Rpb25cblx0XHQgKiBBZGQgdGhlbSB0byBtZXRob2RzIGFuZCBjb21wdXRlZCBwcm9wc1xuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0QmxvY2tTdGF0ZW1lbnQ6IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0aWYocGF0aC5wYXJlbnQudHlwZSA9PT0gJ0Z1bmN0aW9uRGVjbGFyYXRpb24nKSB7XG5cdFx0ICAgIFx0XHRmdW5jdGlvbkJsb2NrSGFuZGxpbmcgPSB0cnVlO1xuXHRcdCAgICBcdH1cblx0XHQgICAgfSxcblx0XHQgICAgZXhpdChwYXRoKSB7XG5cdFx0ICAgIFx0aWYoIWZ1bmN0aW9uQmxvY2tIYW5kbGluZyB8fCBwYXRoLnBhcmVudC50eXBlICE9PSAnRnVuY3Rpb25EZWNsYXJhdGlvbicpIHtcblx0XHQgICAgXHRcdHJldHVybjtcblx0XHQgICAgXHR9XG5cblx0XHQgICAgXHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKHBhdGguY29udGFpbmVyLmlkKTtcblx0XHQgICAgXHRpZihoYXNGdW5jdGlvblJlYWN0aXZlKSB7XG5cdFx0ICAgIFx0XHRkYXRhLmNvbXB1dGVkW25hbWVdID0gcGF0aC5ub2RlO1xuXHRcdCAgICBcdH0gZWxzZSB7XG5cdFx0ICAgIFx0XHRkYXRhLm1ldGhvZHNbbmFtZV0gPSBwYXRoLmNvbnRhaW5lcjtcblx0XHQgICAgXHR9XG5cblx0XHQgICAgXHRoYXNGdW5jdGlvblJlYWN0aXZlID0gZmFsc2U7XG5cdFx0ICAgIFx0ZnVuY3Rpb25CbG9ja0hhbmRsaW5nID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGF0YSwgYXN0KVxue1xuXG5cdHRyYXZlcnNlKGFzdCwgY29sbGVjdE1ldGhvZHMoZGF0YSkpO1xufSIsImltcG9ydCB7IHBhcnNlT3B0aW9ucywgcGFyc2VPcHRpb25LZXksIHBhcnNlT3B0aW9uVmFsdWUgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCB7IF8gfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgcGFyc2VTdGF0ZW1lbnQgfSBmcm9tICcuL3BhcnNlRnVuY3Rpb25zJztcbmltcG9ydCB7IGV4cHJlc3Npb24gfSBmcm9tICcuL2V4cHJlc3Npb24nO1xuXG5leHBvcnQgdmFyIEhJRCA9IDA7XG5cbmV4cG9ydCBjb25zdCBpc05vblBocmFzaW5nVGFnID0gW1xuXHQnYWRkcmVzcycsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2Jhc2UnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2NhcHRpb24nLCAnY29sJywgJ2NvbGdyb3VwJyxcblx0J2RkJywgJ2RldGFpbHMnLCAnZGlhbG9nJywgJ2RpdicsICdkbCcsICdkdCcsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb290ZXInLFxuXHQnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdsZWdlbmQnLFxuXHQnbGknLCAnbWVudWl0ZW0nLCAnbWV0YScsICdvcHRncm91cCcsICdvcHRpb24nLCAncGFyYW0nLCAncnAnLCAncnQnLCAnc291cmNlJywgJ3N0eWxlJywgJ3N1bW1hcnknLFxuXHQndGJvZHknLCAndGQnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGl0bGUnLCAndHInLCAndHJhY2snXG5dO1xuXG52YXIgSUZfU1RBVEVNRU5UX1NUQVJURUQgPSBmYWxzZTtcblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50Q29kZSh0YWcsIG9wdGlvbnMsIGNoaWxkcmVuID0gW10pXG57XG5cdGlmKHRhZyA9PT0gJ3RlbXBsYXRlJykge1xuXHRcdHJldHVybiBgWyR7IGNoaWxkcmVuLmpvaW4oJywnKSB9XWA7XG5cdH1cblx0XG5cdHJldHVybiBgaCgnJHsgdGFnIH0nLCAkeyBvcHRpb25zIH0sIFskeyBjaGlsZHJlbi5qb2luKCcsJykgfV0pYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVxue1xuXHRjb25zdHJ1Y3Rvcih7IHRhZyA9IG51bGwsIGF0dHJzID0gbnVsbCwgY2hpbGRyZW4gPSBbXSB9KVxuXHR7XG5cdFx0dGhpcy5oaWQgPSArK0hJRDtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLmF0dHJzID0gYXR0cnM7XG5cdFx0dGhpcy5vcHRpb25zID0gcGFyc2VPcHRpb25zKGF0dHJzKTtcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdFx0XG5cdFx0dGhpcy5wcmV2U2libGluZyA9IG51bGw7XG5cdFx0dGhpcy5uZXh0U2libGluZyA9IG51bGw7XG5cdFx0Ly8gaWZcblx0XHR0aGlzLmlmX3N0YXRlbWVudCA9IGZhbHNlO1xuXHR9XG5cblx0Ly8gZ2V0Q29udGV4dChjdXJyZW50Q29udGV4dClcblx0Ly8ge1xuXHQvLyBcdGxldCBjdHggPSBudWxsO1xuXG5cdC8vIFx0dHJ5IHtcblx0Ly8gXHRcdGN0eCA9IFNpbnVvdXMuZ2V0Q29tcG9uZW50KHRoaXMudGFnKTtcblx0Ly8gXHR9IGNhdGNoKGVycikge31cblxuXHQvLyBcdGlmKGN0eCA9PT0gbnVsbCkge1xuXHQvLyBcdFx0Y3R4ID0gY3VycmVudENvbnRleHQ7XG5cdC8vIFx0fVxuXG5cdC8vIFx0cmV0dXJuIGN0eDtcblx0Ly8gfVxuXHRzZXRTaWJsaW5ncygpXG5cdHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMuY2hpbGRyZW5baSArIDFdKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW5baV0ubmV4dFNpYmxpbmcgPSB0aGlzLmNoaWxkcmVuW2kgKyAxXTtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbltpICsgMV0ucHJldlNpYmxpbmcgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXHRcdFx0fVxuXG5cdFx0XHRpZih0aGlzLmNoaWxkcmVuW2ldIGluc3RhbmNlb2YgTm9kZSkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuW2ldLnNldFNpYmxpbmdzKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGlzQ29tcG9uZW50KClcblx0e1xuXHRcdHJldHVybiAhaXNOb25QaHJhc2luZ1RhZy5pbmNsdWRlcyh0aGlzLnRhZyk7XG5cdH1cblxuXHR0b0FTVChjb250ZXh0ID0gbnVsbCwgaHlkcmF0ZSA9IGZhbHNlKVxuXHR7XG5cdFx0bGV0IGNvZGUgPSAnJztcblx0XHRsZXQgY2hpbGRyZW4gPSBbXTtcblx0XHRsZXQgc2hvdWxkSHlkYXJhdGUgPSBmYWxzZTtcblx0XHRsZXQgc2hvdWxkT3B0aW9uc0h5ZHJhdGUgPSBmYWxzZTtcblx0XHQvLyBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpO1xuXG5cdFx0Ly8gY29uc29sZS53YXJuKCdbMV0nLCBjb250ZXh0Lm5hbWUsIHNob3VsZEh5ZGFyYXRlKTtcblx0XHQvKipcblx0XHQgKiBUcmFuc2xhdGUgY2hpbGRyZW4gdG8gaHlwZXJzY3JpcHRcblx0XHQgKiBAcGFyYW0gIHtbdHlwZV19IHZhciBpICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cblx0XHQgKiBAcmV0dXJuIHtbdHlwZV19ICAgICBbZGVzY3JpcHRpb25dXG5cdFx0ICovXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXHRcdFx0bGV0IHsgdmFsdWUsIHN0YXRlZnVsbCB9ID0gY2hpbGQudG9BU1QoY29udGV4dCwgaHlkcmF0ZSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnW2NoaWxkXScsIGNoaWxkLCBzdGF0ZWZ1bGwpO1xuXHRcdFx0aWYoc3RhdGVmdWxsKSB7XG5cdFx0XHRcdHNob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y2hpbGRyZW4ucHVzaCh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0bGV0IG9wdGlvbnMgPSAnJztcblxuXHRcdC8vIGNvbnNvbGUud2FybignWzJdJywgY29udGV4dC5uYW1lLCBzaG91bGRIeWRhcmF0ZSk7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5vcHRpb25zKSB7XG5cdFx0XHRsZXQgeyB2YWx1ZSwgc3RhdGVmdWxsIH0gPSBwYXJzZU9wdGlvblZhbHVlKGNvbnRleHQsIGtleSwgdGhpcy5vcHRpb25zW2tleV0pO1xuXHRcdFx0XG5cdFx0XHRpZihzdGF0ZWZ1bGwpIHtcblx0XHRcdFx0c2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihzdGF0ZWZ1bGwgfHwgIWh5ZHJhdGUgfHwga2V5ID09PSAnZGF0YS1oaWQnKSB7XG5cdFx0XHRcdG9wdGlvbnMgKz0gYCR7IHBhcnNlT3B0aW9uS2V5KGtleSkgfTogJHsgdmFsdWUgfSxgO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihzdGF0ZWZ1bGwgJiYgaHlkcmF0ZSkge1xuXHRcdFx0XHRzaG91bGRPcHRpb25zSHlkcmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cblx0XHRzaG91bGRIeWRhcmF0ZSA9IHRoaXMuaXNDb21wb25lbnQgfHwgc2hvdWxkSHlkYXJhdGU7XG5cblxuXHRcdGlmKHNob3VsZEh5ZGFyYXRlKSB7XG5cdFx0XHRvcHRpb25zICs9IGBpZDogY3R4LmdldFVJRCgkeyB0aGlzLmhpZCB9KSxgO1xuXHRcdH1cblxuXHRcdGlmKHNob3VsZE9wdGlvbnNIeWRyYXRlKSB7XG5cdFx0XHRvcHRpb25zICs9IGBfczogdHJ1ZSxgO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUud2FybihoeWRyYXRlLCBjb250ZXh0Lm5hbWUsIHRoaXMudGFnLCBzaG91bGRIeWRhcmF0ZSA/IG9wdGlvbnMgOiAnJyk7XG5cblx0XHRvcHRpb25zID0gYHske29wdGlvbnN9fWA7XG5cdFx0XG5cdFx0bGV0IGZuX2dlbmVyYXRlZCA9IGZhbHNlO1xuXG5cdFx0bGV0IHN0YXRlbWVudCA9IHBhcnNlU3RhdGVtZW50KHRoaXMpO1xuXG5cdFx0aWYoc3RhdGVtZW50LmlzKSB7XG5cdFx0XHRcblx0XHRcdGxldCBjb25kaXRpb24gPSBleHByZXNzaW9uKGNvbnRleHQsIHN0YXRlbWVudC5jb25kaXRpb24sIGZhbHNlKVxuXG5cdFx0XHRpZihzdGF0ZW1lbnQuc3RhcnQpIHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcylcblx0XHRcdFx0Y29kZSArPSBgc3RhdGVtZW50KGA7XG5cdFx0XHR9XG5cblx0XHRcdGNvZGUgKz0gYCAkeyBjb25kaXRpb24udmFsdWUgfSwgJHsgZ2V0Q29tcG9uZW50Q29kZSh0aGlzLnRhZywgb3B0aW9ucywgY2hpbGRyZW4pIH1gO1xuXG5cdFx0XHRpZihzdGF0ZW1lbnQuZW5kKSB7XG5cdFx0XHRcdGNvZGUgKz0gYClgO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2RlICs9IGdldENvbXBvbmVudENvZGUodGhpcy50YWcsIG9wdGlvbnMsIGNoaWxkcmVuKTtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmF0dHJzLCB0aGlzLmlmX3N0YXRlbWVudCwgc3RhdGVtZW50KVxuXG5cdFx0Ly8gaWYoSUZfU1RBVEVNRU5UX1NUQVJURUQgJiYgIXRoaXMuYXR0cnNbJ3YtaWYnXSkge1xuXHRcdC8vIFx0Zm5fZ2VuZXJhdGVkID0gdHJ1ZTtcblx0XHQvLyBcdGNvZGUgKz0gYClgO1xuXHRcdC8vIH1cblxuXHRcdC8vIGlmKElGX1NUQVRFTUVOVF9TVEFSVEVEKSB7XG5cdFx0Ly8gXHRsZXQgY29uZGl0aW9uID0gdGhpcy5hdHRyc1sndi1pZiddIHx8IHRoaXMuYXR0cnNbJ3YtZWxzZS1pZiddIHx8IHRoaXMuYXR0cnNbJ3YtZWxzZSddO1xuXHRcdC8vIFx0bGV0IHJlcyA9IFtdO1xuXHRcdC8vIFx0aWYoIXRoaXMuYXR0cnNbJ3YtZWxzZSddKSB7XG5cdFx0Ly8gXHRcdHJlcy5wdXNoKGNvbmRpdGlvbilcblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0cmVzLnB1c2goZ2V0Q29tcG9uZW50Q29kZSh0aGlzLnRhZywgb3B0aW9ucywgY2hpbGRyZW4pKTtcblxuXHRcdC8vIFx0aWYoIXRoaXMuYXR0cnNbJ3YtZWxzZSddKSB7XG5cdFx0Ly8gXHRcdHJlcy5wdXNoKCcnKVxuXHRcdC8vIFx0fVxuXHRcdFx0XG5cdFx0Ly8gXHRjb2RlICs9IHJlcy5qb2luKCcsJyk7XG5cblx0XHQvLyBcdGNvbnNvbGUubG9nKHRoaXMuYXR0cnMsIGNvZGUpXG5cdFx0Ly8gfSBcblxuXHRcdC8vIGlmKCFmbl9nZW5lcmF0ZWQpIHtcblx0XHRcdFxuXHRcdC8vIH1cblxuXHRcdC8vIGNvbnNvbGUud2FybignWzNdJywgY29udGV4dC5uYW1lLCBzaG91bGRIeWRhcmF0ZSk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1ttYWluXScsIHRoaXMudGFnLCBzaG91bGRIeWRhcmF0ZSk7XG5cblx0XHRpZihoeWRyYXRlICYmICFzaG91bGRIeWRhcmF0ZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmFsdWU6IF8sXG5cdFx0XHRcdHN0YXRlZnVsbDogZmFsc2UsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogY29kZSxcblx0XHRcdHN0YXRlZnVsbDogc2hvdWxkSHlkYXJhdGUsXG5cdFx0fTtcblx0fVxufSIsImltcG9ydCB7IHBhcnNlT3B0aW9uVmFsdWUgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCB7IF8gfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Tm9kZVxue1xuXHRjb25zdHJ1Y3Rvcih0ZXh0KVxuXHR7XG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcblx0fVxuXG5cdHRvQVNUKGNvbnRleHQgPSBudWxsLCBoeWRyYXRlID0gZmFsc2UpXG5cdHtcblx0XHRsZXQgeyB2YWx1ZSwgc3RhdGVmdWxsIH0gPSBwYXJzZU9wdGlvblZhbHVlKGNvbnRleHQsICdfdCcsIHRoaXMudGV4dCk7XG5cdFx0Ly8gY29uc29sZS5sb2coYHQoJHt0aGlzLnRleHR9KWAsIHZhbHVlLCBzdGF0ZWZ1bGwpXG5cblx0XHRpZihoeWRyYXRlICYmICFzdGF0ZWZ1bGwpIHtcblx0XHRcdHZhbHVlID0gXztcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWUsXG5cdFx0XHRzdGF0ZWZ1bGwsXG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IHsgZXhwcmVzc2lvbiB9IGZyb20gJy4vZXhwcmVzc2lvbic7XG5cbmNvbnN0IEF0dHJzTWFwID0ge1xuXHQnc3R5bGUnOiAnc3RhdGljU3R5bGUnLFxuXHQnY2xhc3MnOiAnc3RhdGljQ2xhc3MnLFxuXHQnOnN0eWxlJzogJ2R5bmFtaWNTdHlsZScsXG5cdCc6Y2xhc3MnOiAnZHluYW1pY0NsYXNzJyxcbn07XG5cbmNvbnN0IEhUTUxBdHRyaWJ1dGVzID0gWydpZCcsICduYW1lJywgJ3ZhbHVlJywgJ3BsYWNlaG9sZGVyJ107XG5cbmZ1bmN0aW9uIHBhcnNlT3B0aW9uVmFsdWUoY29udGV4dCwga2V5LCB2YWx1ZSlcbntcblx0bGV0IHN0YXRlZnVsbCA9IGZhbHNlO1xuXHRsZXQgaXNFeHByZXNzaW9uID0gZmFsc2U7XG5cdGxldCBvYnNlcnZhYmxlQ2FsbCA9IHRydWU7XG5cblx0aWYoa2V5WzBdID09PSAnQCcpIHtcblx0XHRzdGF0ZWZ1bGwgPSB0cnVlO1xuXHRcdGlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cblxuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0b2JzZXJ2YWJsZUNhbGwgPSBmYWxzZTtcblx0fVxuXG5cdGlmKGtleVswXSA9PT0gJ18nKSB7XG5cdFx0dmFsdWUgPSAnYCcgKyB2YWx1ZS5yZXBsYWNlKC97eyguKil9fS9nLCAnJHskMX0nKSArICdgJztcblx0XHRpc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG5cblx0bGV0IGV4cCA9IGV4cHJlc3Npb24oY29udGV4dCwgdmFsdWUsIGlzRXhwcmVzc2lvbiwgb2JzZXJ2YWJsZUNhbGwpO1xuXHRcblx0dmFsdWUgPSBleHAudmFsdWU7XG5cblx0aWYoIXN0YXRlZnVsbCAmJiBleHAuc3RhdGVmdWxsKSB7XG5cdFx0c3RhdGVmdWxsID0gdHJ1ZTtcblx0fVxuXG5cdFxuXG5cdC8vIGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0Ly8gXHR2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0Ly8gfSBlbHNlIHtcblx0Ly8gXHR2YWx1ZSA9IGBcIiR7dmFsdWV9XCJgO1xuXHQvLyB9XG5cblx0XG5cblx0cmV0dXJuIHtcblx0XHR2YWx1ZSxcblx0XHRzdGF0ZWZ1bGwsXG5cdH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlT3B0aW9uS2V5KGtleSwgdmFsdWUpXG57XG5cdGlmKEF0dHJzTWFwW2tleV0pIHtcblx0XHRyZXR1cm4gQXR0cnNNYXBba2V5XTtcblx0fSBlbHNlIGlmKGtleVswXSA9PT0gJ0AnKSB7XG5cdFx0cmV0dXJuIGtleS5yZXBsYWNlKC9AL2csICdvbicpO1xuXHR9XG5cblx0cmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gcGFyc2VTdHlsZXMoc3RyaW5nKVxue1xuXHRsZXQgc3R5bGVzID0ge307XG5cdGxldCBwYWlycyA9IHN0cmluZy5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCc7Jyk7XG5cdFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRtcCA9IHBhaXJzW2ldLnNwbGl0KCc6Jyk7XG5cdFx0aWYodG1wLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0c3R5bGVzW3RtcFswXV0gPSB0bXBbMV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVPcHRpb25LZXkodmFyaWFibGUpXG57XG5cdGlmKHZhcmlhYmxlLm1hdGNoKC9cXC0vZykpIHtcblx0XHR2YXJpYWJsZSA9IGAnJHt2YXJpYWJsZX0nYDtcblx0fVxuXG5cdHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gcGFyc2VPcHRpb25zKGF0dHJzKVxue1xuXHRsZXQgb3B0aW9ucyA9IHt9O1xuXG5cdGZvcihsZXQga2V5IGluIGF0dHJzKVxuXHR7XG5cdFx0bGV0IHZhbHVlID0gYXR0cnNba2V5XTtcblx0XHRsZXQgb3B0aW9uX2tleSA9IHByZXBhcmVPcHRpb25LZXkoa2V5KTtcblxuXHRcdGlmKGtleS5tYXRjaCgvXnZcXC0vZykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHQvLyBJcyBodG1sIGF0dHJcblx0XHRpZihIVE1MQXR0cmlidXRlcy5pbmNsdWRlcyhrZXkpIHx8IE9iamVjdC5rZXlzKEF0dHJzTWFwKS5pbmNsdWRlcyhrZXkpIHx8IGtleS5tYXRjaCgvZGF0YVxcLS9nKSB8fCBrZXkubWF0Y2goL0AvZykpIHtcblx0XHRcdGlmKGtleSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlU3R5bGVzKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0b3B0aW9uc1tvcHRpb25fa2V5XSA9IHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZighb3B0aW9ucy5wcm9wcykge1xuXHRcdFx0XHRvcHRpb25zLnByb3BzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdG9wdGlvbnMucHJvcHNbb3B0aW9uX2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gcGFyc2VBdHRycyhzdHJpbmcpXG57XG5cdGlmKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnIHx8IHN0cmluZyA9PSAnJykge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHNcXHMrL2csICcgJykudHJpbSgpO1xuXG5cdGxldCBwYWlycyA9IHN0cmluZy5tYXRjaCgvKFteXFxzXSopPVtcIiddKC4qPylbXCInXXwoW1xcd1xcLV0rKS9nKVxuXHRsZXQgYXR0cnMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRtcCA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0bGV0IG5hbWUgPSB0bXBbMF07XG5cdFx0bGV0IHZhbHVlID0gdG1wWzFdID8gdG1wWzFdLnN1YnN0cmluZygxLCB0bXBbMV0ubGVuZ3RoIC0gMSkgOiB0cnVlO1xuXHRcdGF0dHJzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCB7IHBhcnNlQXR0cnMsIHBhcnNlT3B0aW9ucywgcGFyc2VPcHRpb25LZXksIHBhcnNlT3B0aW9uVmFsdWUgfTsiLCJpbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcbmltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSBcIkBiYWJlbC9nZW5lcmF0b3JcIjtcbmltcG9ydCBwYXJzZUV4cHJlc3Npb24gZnJvbSBcIi4uL3NjcmlwdC9wYXJzZUV4cHJlc3Npb25cIjtcblxuaW1wb3J0IHtcblx0aWRlbnRpZmllcixcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEJpbmFyeUV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Z2V0SWRlbnRpZmllck5hbWUsXG5cdHNldElkZW50aWZpZXJDb250ZXh0LFxuXHRpc0lkZW50aWZpZXJSZWFjdGl2ZSxcblx0Y2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb25cbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cblxuaW1wb3J0IHsgcHJlcGFyZU9wdGlvbktleSB9IGZyb20gJy4vYXR0cnMnO1xuXG5pbXBvcnQgeyBoYXNTdGF0ZSwgZ2V0VmFyaWFibGUgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbihjb250ZXh0LCBjb2RlLCBpc0V4cHJlc3Npb24gPSBmYWxzZSwgb2JzZXJ2YWJsZUNhbGwgPSB0cnVlKVxue1xuXHRpZih0eXBlb2YgY29kZSA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdGVmdWxsOiBmYWxzZSxcblx0XHRcdHZhbHVlOiBKU09OLnN0cmluZ2lmeShjb2RlKVxuXHRcdH07XG5cdH1cblxuXHRjb2RlID0gU3RyaW5nKGNvZGUpO1xuXG5cdGNvbnNvbGUud2Fybihjb2RlKTtcblxuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2UoY29kZSk7XG5cblx0bGV0IHsgY2hhbmdlZCwgb2JzZXJ2YWJsZSB9ID0gcGFyc2VFeHByZXNzaW9uKGNvbnRleHQuZGF0YSwgYXN0KTtcblxuXHRpZihjaGFuZ2VkKSB7XG5cdFx0Y29kZSA9IGdlbmVyYXRlKGFzdCwge1xuXHRcdFx0cmV0YWluTGluZXM6IHRydWUsXG5cdFx0XHRjb21wYWN0OiB0cnVlLFxuXHRcdFx0bWluaWZpZWQ6IHRydWUsXG5cdFx0XHRjb25jaXNlOiB0cnVlLFxuXHRcdFx0cXVvdGVzOiBcImRvdWJsZVwiLFxuXHRcdH0sIGNvZGUpLmNvZGU7XG5cblx0XHRcblx0XHQvLyBjbGVhbiBhcHBlbmRcblx0XHRjb2RlID0gY29kZS5yZXBsYWNlKC8oO3wsKSQvZywgJycpO1xuXG5cdFx0aWYoaXNFeHByZXNzaW9uKSB7XG5cdFx0XHRjb2RlID0gYCgpID0+IHsgcmV0dXJuICR7Y29kZX07IH1gO1xuXHRcdH1cblx0fVxuXG5cdGNvbnNvbGUubG9nKGNvZGUpO1xuXHRjb25zb2xlLmxvZygnLS0tLS0tLS0nKTtcblxuXHRyZXR1cm4ge1xuXHRcdHN0YXRlZnVsbDogb2JzZXJ2YWJsZSxcblx0XHR2YWx1ZTogY29kZVxuXHR9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cHJlc3Npb24oY29udGV4dCwgY29kZSwgZXhlY3V0ZSA9IGZhbHNlKVxuLy8ge1xuLy8gXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2UoY29kZSk7XG5cbi8vIFx0dmFyIGNoYW5nZWQgPSBmYWxzZTtcbi8vIFx0dmFyIHN0YXRlZnVsbCA9IGZhbHNlO1xuXG4vLyBcdHRyYXZlcnNlKGFzdCwge1xuLy8gXHRcdGVudGVyKHBhdGgpXG4vLyBcdFx0e1xuLy8gXHRcdFx0aWYocGF0aC5ub2RlLnR5cGUgPT09ICdJZGVudGlmaWVyJylcbi8vIFx0XHRcdHtcbi8vIFx0XHRcdFx0aWYoIVsna2V5JywgJ2xhYmVsJ10uaW5jbHVkZXMocGF0aC5rZXkpKSB7XG4vLyBcdFx0XHRcdFx0bGV0IG5hbWVCdWlsZGVyID0gW107XG5cbi8vIFx0XHRcdFx0XHRsZXQgdmFyaWFibGUgPSBwYXRoLm5vZGUubmFtZTtcbi8vIFx0XHRcdFx0XHRsZXQgdmFyaWFibGVXaXRoQ29udGV4dCA9IGdldFZhcmlhYmxlKGNvbnRleHQuZGF0YSwgdmFyaWFibGUpXG5cbi8vIFx0XHRcdFx0XHRpZihwYXRoLmNvbnRhaW5lci50eXBlID09PSAnQ2FsbEV4cHJlc3Npb24nKSB7XG4vLyBcdFx0XHRcdFx0XHR2YXJpYWJsZVdpdGhDb250ZXh0ID0gZmFsc2U7XG4vLyBcdFx0XHRcdFx0fVxuXG4vLyBcdFx0XHRcdFx0aWYodmFyaWFibGVXaXRoQ29udGV4dCkge1xuLy8gXHRcdFx0XHRcdFx0bmFtZUJ1aWxkZXIucHVzaCgnY3R4Jylcbi8vIFx0XHRcdFx0XHRcdG5hbWVCdWlsZGVyLnB1c2godmFyaWFibGVXaXRoQ29udGV4dCk7XG4vLyBcdFx0XHRcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdFx0XHRcdG5hbWVCdWlsZGVyLnB1c2godmFyaWFibGUpO1xuLy8gXHRcdFx0XHRcdH1cblxuLy8gXHRcdFx0XHRcdGlmKCF2YXJpYWJsZSkge1xuLy8gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAkeyB2YXJpYWJsZSB9IGluIGNvbnRleHQgJHsgY29udGV4dCB9YCk7XG4vLyBcdFx0XHRcdFx0fVxuXG4vLyBcdFx0XHRcdFx0aWYoY29udGV4dC5yZWFjdGl2ZV92YXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpKSB7XG4vLyBcdFx0XHRcdFx0XHRzdGF0ZWZ1bGwgPSB0cnVlO1xuLy8gXHRcdFx0XHRcdH1cblxuLy8gXHRcdFx0XHRcdHBhdGgubm9kZS5uYW1lID0gbmFtZUJ1aWxkZXIuam9pbignLicpICsgKGV4ZWN1dGUgPyAnKCknIDogJycpO1xuXG4vLyBcdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG4vLyBcdFx0XHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRcdFx0cGF0aC5ub2RlLm5hbWUgPSBwcmVwYXJlT3B0aW9uS2V5KHBhdGgubm9kZS5uYW1lKTtcbi8vIFx0XHRcdFx0fVxuLy8gXHRcdFx0fVxuLy8gXHRcdH1cbi8vIFx0fSk7XG5cbi8vIFx0Y29kZSA9IGdlbmVyYXRlKGFzdCwge1xuLy8gXHRcdHJldGFpbkxpbmVzOiB0cnVlLFxuLy8gXHRcdGNvbXBhY3Q6IHRydWUsXG4vLyBcdFx0bWluaWZpZWQ6IHRydWUsXG4vLyBcdFx0Y29uY2lzZTogdHJ1ZSxcbi8vIFx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG4vLyBcdH0sIGNvZGUpLmNvZGU7XG5cbi8vIFx0Ly8gY2xlYW4gYXBwZW5kXG4vLyBcdGNvZGUgPSBjb2RlLnJlcGxhY2UoLyg7fCwpJC9nLCAnJyk7XG5cbi8vIFx0aWYoY2hhbmdlZCAmJiBleGVjdXRlKSB7XG4vLyBcdFx0Y29kZSA9IGAoKSA9PiB7IHJldHVybiAke2NvZGV9OyB9YDtcbi8vIFx0fVxuXG4vLyBcdHJldHVybiB7XG4vLyBcdFx0c3RhdGVmdWxsLFxuLy8gXHRcdHZhbHVlOiBjb2RlXG4vLyBcdH1cbi8vIH0iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ25vZGUtaHRtbC1wYXJzZXInO1xuaW1wb3J0IE5vZGUsIHsgSElEIH0gZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBUZXh0Tm9kZSBmcm9tICcuL1RleHROb2RlJztcbmltcG9ydCB7IHBhcnNlQXR0cnMgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCBwYXJzZUZ1bmN0aW9ucyBmcm9tICcuL3BhcnNlRnVuY3Rpb25zJztcblxuZnVuY3Rpb24gZ2VuZXJhdGVUcmVlKG5vZGUsIGlzUm9vdCA9IGZhbHNlKVxue1xuXG5cdGxldCBjaGlsZHJlbiA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGNoaWxkID0gZ2VuZXJhdGVUcmVlKG5vZGUuY2hpbGROb2Rlc1tpXSwgZmFsc2UpO1xuXHRcdGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHR9XG5cblx0bGV0IGF0dHJzID0gcGFyc2VBdHRycyhub2RlLnJhd0F0dHJzKTtcblxuXHRpZihjaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgbm9kZS5yYXdUZXh0ICE9PSAnJykge1xuXHRcdHJldHVybiBuZXcgVGV4dE5vZGUobm9kZS5yYXdUZXh0KTtcblx0fVxuXG5cdHJldHVybiBuZXcgTm9kZSh7XG5cdFx0dGFnOiBub2RlLnRhZ05hbWUsXG5cdFx0YXR0cnM6IGF0dHJzLFxuXHRcdGNoaWxkcmVuOiBjaGlsZHJlbixcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlKGNvbnRleHQsIGNvZGUpXG57XG5cdC8vIGNvZGUgPSBwYXJzZUZ1bmN0aW9ucyhjb2RlKTtcblx0Ly8gY29uc29sZS53YXJuKFwiUEFSU0VcIiwgY29udGV4dC5uYW1lKVxuXHRjb2RlID0gY29kZS5yZXBsYWNlKC9cXHQvZywgJyAnKS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJyk7XG5cblx0Y29uc3Qgcm9vdCA9IHBhcnNlKGNvZGUpO1xuXG5cdHJvb3QucmVtb3ZlV2hpdGVzcGFjZSgpO1xuXG5cdC8vIEhJRCA9IDA7XG5cdGxldCB0cmVlID0gZ2VuZXJhdGVUcmVlKHJvb3QsIHRydWUpO1xuXG5cdHRyZWUuc2V0U2libGluZ3MoKTtcblx0XG5cdHRyZWUgPSB0cmVlLmNoaWxkcmVuO1xuXG5cdGxldCBhc3QgPSB7XG5cdFx0cmVuZGVyOiBbXSxcblx0XHRoeWRyYXRlOiBbXSxcblx0fVxuXG5cdGxldCByZXN1bHQgPSB7XG5cdFx0cmVuZGVyOiAnJyxcblx0XHRoeWRyYXRlOiAnJyxcblx0XHRzaG91bGRIeWRhcmF0ZTogZmFsc2UsXG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgcmVuZGVyQVNUID0gdHJlZVtpXS50b0FTVChjb250ZXh0LCBmYWxzZSk7XG5cdFx0bGV0IGh5ZHJhdGlvbkFTVCA9IHRyZWVbaV0udG9BU1QoY29udGV4dCwgdHJ1ZSk7XG5cblx0XHRpZihoeWRyYXRpb25BU1Quc3RhdGVmdWxsKSB7XG5cdFx0XHRyZXN1bHQuc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGFzdC5yZW5kZXIucHVzaChyZW5kZXJBU1QudmFsdWUpO1xuXHRcdGFzdC5oeWRyYXRlLnB1c2goaHlkcmF0aW9uQVNULnZhbHVlKTtcblx0fVxuXG5cdGlmKGFzdC5yZW5kZXIubGVuZ3RoID09PSAxKSB7XG5cdFx0cmVzdWx0LnJlbmRlciA9IGFzdC5yZW5kZXJbMF07XG5cdFx0cmVzdWx0Lmh5ZHJhdGUgPSBhc3QuaHlkcmF0ZVswXTtcblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucmVuZGVyID0gYFskeyAgYXN0LnJlbmRlci5qb2luKCcsJykgfV1gO1xuXHRcdHJlc3VsdC5oeWRyYXRlID0gYFskeyAgYXN0Lmh5ZHJhdGUuam9pbignLCcpIH1dYDtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgXyB9IGZyb20gJy4uL2VtcHR5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1N0YXRlKGNvbnRleHQsIHZhcmlhYmxlKVxue1xuXHQvLyBjb25zb2xlLmxvZyhjb250ZXh0LCB2YXJpYWJsZS5zcGxpdCgnLicpKTtcblx0aWYoY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bGV0IHZhbHVlID0gY29udGV4dDtcblx0bGV0IHZhcl9wYXJ0cyA9IHZhcmlhYmxlLnNwbGl0KCcuJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YXJfcGFydHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YWx1ZSA9IHZhbHVlW3Zhcl9wYXJ0c1tpXV07XG5cdFx0aWYodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGlmKHZhbHVlLl9vYnNlcnZhYmxlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhcmlhYmxlKGNvbnRleHQsIHZhcmlhYmxlKVxue1xuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LmNvbXB1dGVkKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9jb21wdXRlZC4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LnN0YXRlKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9zdGF0ZS4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LmRhdGEpLmluY2x1ZGVzKHZhcmlhYmxlKSkge1xuXHRcdHJldHVybiBgX2RhdGEuJHt2YXJpYWJsZX1gO1xuXHR9XG5cblx0aWYoT2JqZWN0LmtleXMoY29udGV4dC5tZXRob2RzKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYCR7dmFyaWFibGV9LmJpbmQoY3R4KWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LnByb3BzKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9wcm9wcy4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBnZXRSZWFjdGl2ZVZhcmlhYmxlcyB9IGZyb20gXCIuLi9zY3JpcHRcIjtcbmltcG9ydCBnZW5lcmF0ZSBmcm9tICcuL2dlbmVyYXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVUZW1wbGF0ZShjb250ZXh0LCBodG1sLCBibG9ja3MpXG57XG5cdGxldCBzY3JpcHQgPSBibG9ja3Muc2NyaXB0IHx8IHsgc291cmNlOiAnJyB9O1xuXG5cdGNvbnRleHQgPSBnZXRSZWFjdGl2ZVZhcmlhYmxlcyhjb250ZXh0LCBzY3JpcHQuc291cmNlKTtcblx0XG5cdHJldHVybiBnZW5lcmF0ZShjb250ZXh0LCBodG1sKTtcbn0iLCJleHBvcnQgY29uc3QgSUZfQVRUUlMgPSBbJ3YtaWYnLCAndi1lbHNlLWlmJywgJ3YtZWxzZSddO1xuXG5leHBvcnQgIGZ1bmN0aW9uIHBhcnNlU3RhdGVtZW50KG5vZGUpXG57XG5cdGxldCBzdGFydCA9IGZhbHNlO1xuXHRsZXQgZW5kID0gdHJ1ZTtcblx0bGV0IHN0YXRlbWVudCA9IGZhbHNlO1xuXHRsZXQgY29uZGl0aW9uID0gbm9kZS5hdHRyc1sndi1pZiddIHx8IG5vZGUuYXR0cnNbJ3YtZWxzZS1pZiddIHx8ICd0cnVlJztcblxuXHRpZihub2RlLmF0dHJzWyd2LWlmJ10pIHtcblx0XHRzdGFydCA9IHRydWU7XG5cdH1cblxuXHRpZihub2RlLmF0dHJzWyd2LWlmJ10gfHwgbm9kZS5hdHRyc1sndi1lbHNlLWlmJ10gfHwgbm9kZS5hdHRyc1sndi1lbHNlJ10pIHtcblx0XHRub2RlLmlmX3N0YXRlbWVudCA9IHRydWU7XG5cdFx0c3RhdGVtZW50ID0gdHJ1ZTtcblx0fVxuXG5cblx0aWYobm9kZS5uZXh0U2libGluZykge1xuXHRcdGlmKG5vZGUubmV4dFNpYmxpbmcuYXR0cnNbJ3YtZWxzZS1pZiddIHx8IG5vZGUubmV4dFNpYmxpbmcuYXR0cnNbJ3YtZWxzZSddKSB7XG5cdFx0XHRlbmQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvLyBpZihub2RlLnByZXZTaWJsaW5nKSB7XG5cdC8vIFx0aWYobm9kZS5wcmV2U2libGluZy5pZl9zdGF0ZW1lbnQpIHtcblx0Ly8gXHRcdHN0YXRlbWVudCA9IHRydWU7XG5cdC8vIFx0fVxuXHQvLyB9XG5cblx0Ly8gY29uc29sZS53YXJuKG5vZGUuYXR0cnMsIHN0YXRlbWVudCwgc3RhcnQsIGVuZCk7XG5cblx0cmV0dXJuIHtcblx0XHRjb25kaXRpb24sXG5cdFx0aXM6IHN0YXRlbWVudCxcblx0XHRzdGFydCxcblx0XHRlbmQsXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VGdW5jdGlvbnMoY29kZSlcbntcblx0Y29kZSA9IGNvZGVcblx0XHQucmVwbGFjZSgvXFxAaWZcXCgoLiopXFwpL2csICc8aWYgY29uZGl0aW9uPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9cXEBlbHNlaWZcXCgoLiopXFwpL2csICc8ZWxzZS1pZiBjb25kaXRpb249XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL1xcQGVsc2UvZywgJzxlbHNlPicpXG5cdFx0LnJlcGxhY2UoL1xcQGVuZGlmL2csICc8ZW5kaWY+JylcblxuXG5cdGNvbnNvbGUubG9nKGNvZGUpO1xuXG5cdHJldHVybiBjb2RlO1xufSIsImV4cG9ydCBjb25zdCBfID0gLTE7XG4iLCJleHBvcnQgY29uc3QgUmVhY3RpdmVOYW1lc3BhY2VzID0gWydzdGF0ZScsICdjb21wdXRlZCddO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgaWQpXG57XG5cdGxldCBuYW1lID0gaWQubmFtZTtcblx0XG5cdGlmKG5hbWUubWF0Y2goL15cXCQvZykpXHR7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZGF0YS5zdGF0ZVtuYW1lXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElkZW50aWZpZXJOYW1lKGlkKVxue1xuXHRpZighaWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGxldCBuYW1lID0gaWQubmFtZTtcblxuXHRpZihuYW1lLm1hdGNoKC9eXFwkL2cpKVx0e1xuXHRcdHJldHVybiBuYW1lLnN1YnN0cmluZygxKVxuXHR9XG5cblx0cmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Z1bmN0aW9uQXJndW1lbnREZWNsYXJhdGlvbihkYXRhLCBwYXRoKVxue1xuXHRpZihwYXRoLnBhcmVudC50eXBlICE9PSAnRnVuY3Rpb25EZWNsYXJhdGlvbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXHRsZXQgbWF0Y2ggPSBtYXRjaElkZW50aWZpZXIoZGF0YSwgaWQpO1xuXG5cdGlmKG1hdGNoLm5hbWVzcGFjZSAmJiBwYXRoLmxpc3RLZXkgPT09ICdwYXJhbXMnKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBWYXJpYWJsZSAkeyBuYW1lIH0gaGFzIGFscmVhZHkgZGVmaW5lZCBpbiAkeyBtYXRjaC5uYW1lc3BhY2UgfWApXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldElkZW50aWZpZXJDb250ZXh0KGN0eCwgZGF0YSwgcGF0aCwgb2JzZXJ2YWJsZUNhbGwgPSB0cnVlKVxue1xuXHRpZihbJ0Z1bmN0aW9uRGVjbGFyYXRpb24nLCAnVmFyaWFibGVEZWNsYXJhdG9yJywgJ0xhYmVsZWRTdGF0ZW1lbnQnXS5pbmNsdWRlcyhwYXRoLnBhcmVudC50eXBlKSB8fCBbJ3Byb3BlcnR5J10uaW5jbHVkZXMocGF0aC5rZXkpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblx0bGV0IG1hdGNoID0gbWF0Y2hJZGVudGlmaWVyKGRhdGEsIGlkKTtcblx0XG5cdGlmKG1hdGNoLm5hbWVzcGFjZSA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRuYW1lID0gYCR7Y3R4fS5fJHttYXRjaC5uYW1lc3BhY2V9LiR7bmFtZX1gO1xuXHQvLyBjb25zb2xlLmxvZyhuYW1lLCBvYnNlcnZhYmxlQ2FsbClcblx0aWYobWF0Y2gub2JzZXJ2YWJsZSAmJiBwYXRoLmNvbnRhaW5lci50eXBlICE9PSAnQ2FsbEV4cHJlc3Npb24nICYmIG9ic2VydmFibGVDYWxsKSB7XG5cdFx0bmFtZSArPSAnKCknO1xuXHR9XG5cblx0aWQubmFtZSA9IG5hbWU7XG5cblx0cmV0dXJuIG1hdGNoLm9ic2VydmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaElkZW50aWZpZXIoY29udGV4dCwgaWQpXG57XG5cdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXHRsZXQgbmFtZXNwYWNlID0gZmFsc2U7XG5cblx0Zm9yKGxldCBrZXkgaW4gY29udGV4dCkge1xuXHRcdGlmKE9iamVjdC5rZXlzKGNvbnRleHRba2V5XSkuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdG5hbWVzcGFjZSA9IGtleTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdG5hbWVzcGFjZSxcblx0XHRvYnNlcnZhYmxlOiBSZWFjdGl2ZU5hbWVzcGFjZXMuaW5jbHVkZXMobmFtZXNwYWNlKVxuXHR9O1xufSIsImV4cG9ydCBjb25zdCBkYXRhID0ge1xuXHRpbXBvcnRzOiBbXSxcblx0cHJvcHM6IHt9LFxuXHRkYXRhOiB7fSxcblx0c3RhdGU6IHt9LFxuXHRjb21wdXRlZDoge30sXG5cdG1ldGhvZHM6IHt9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0YShjb250ZXh0KSB7XG5cdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7fSwgY29udGV4dCk7XG59IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuaW1wb3J0IHtcblx0aWRlbnRpZmllcixcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEJpbmFyeUV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Z2V0SWRlbnRpZmllck5hbWUsXG5cdHNldElkZW50aWZpZXJDb250ZXh0LFxuXHRpc0lkZW50aWZpZXJSZWFjdGl2ZSxcblx0Y2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb25cbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihkYXRhLCBhc3QpXG57XG5cdHZhciBvYnNlcnZhYmxlID0gZmFsc2U7XG5cdHZhciBjaGFuZ2VkID0gZmFsc2U7XG5cblx0bGV0IEZ1bmN0aW9uRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0SW1wb3J0RGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGEuaW1wb3J0c1twYXRoLm5vZGUuc291cmNlLnZhbHVlXSA9IHBhdGgubm9kZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdEZ1bmN0aW9uRGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0RnVuY3Rpb25EZWNsYXJhdGlvbiA9IHRydWU7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aCkge1xuXHRcdCAgICBcdEZ1bmN0aW9uRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0Ly8gbWFrZSByZWFjdGl2ZSB2YXJpYWJsZSBhc3NpZ25tZW50IGFzIGZ1bmN0aW9uXG5cdFx0QXNzaWdubWVudEV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKCFpc0lkZW50aWZpZXJSZWFjdGl2ZShkYXRhLCBwYXRoLm5vZGUubGVmdCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgYXJncyA9IFtwYXRoLm5vZGUucmlnaHRdO1xuXG5cdFx0XHRcdGlmKHBhdGgubm9kZS5vcGVyYXRvci5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0YXJncyA9IFtcblx0XHRcdFx0XHRcdEJpbmFyeUV4cHJlc3Npb24ocGF0aC5ub2RlLm9wZXJhdG9yWzBdLCBwYXRoLm5vZGUubGVmdCwgcGF0aC5ub2RlLnJpZ2h0KVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUocGF0aC5ub2RlLmxlZnQpO1xuXHRcdFx0XHRwYXRoLnJlcGxhY2VXaXRoKFxuXHRcdFx0XHRcdENhbGxFeHByZXNzaW9uKGlkZW50aWZpZXIobmFtZSksIGFyZ3MpXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0b2JzZXJ2YWJsZSA9IHRydWU7XG5cdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0Y2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb24oZGF0YSwgcGF0aCk7XG5cdFx0XHRcdGlmKHNldElkZW50aWZpZXJDb250ZXh0KCd0aGlzJywgZGF0YSwgcGF0aCkpIHtcblx0XHRcdFx0XHRvYnNlcnZhYmxlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRhc3QsXG5cdFx0b2JzZXJ2YWJsZSxcblx0XHRjaGFuZ2VkLFxuXHR9XG59IiwiaW1wb3J0IHsgcGFyc2VPcHRpb25zLCBwYXJzZU9wdGlvbktleSwgcGFyc2VPcHRpb25WYWx1ZSB9IGZyb20gJy4vYXR0cnMnO1xuaW1wb3J0IHsgXyB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBwYXJzZVN0YXRlbWVudCB9IGZyb20gJy4vcGFyc2VGdW5jdGlvbnMnO1xuaW1wb3J0IHsgZXhwcmVzc2lvbiB9IGZyb20gJy4vZXhwcmVzc2lvbic7XG5cbmV4cG9ydCB2YXIgSElEID0gMDtcblxuZXhwb3J0IGNvbnN0IGlzTm9uUGhyYXNpbmdUYWcgPSBbXG5cdCdhZGRyZXNzJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYmFzZScsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnY2FwdGlvbicsICdjb2wnLCAnY29sZ3JvdXAnLFxuXHQnZGQnLCAnZGV0YWlscycsICdkaWFsb2cnLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2Zvb3RlcicsXG5cdCdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2xlZ2VuZCcsXG5cdCdsaScsICdtZW51aXRlbScsICdtZXRhJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdwYXJhbScsICdycCcsICdydCcsICdzb3VyY2UnLCAnc3R5bGUnLCAnc3VtbWFyeScsXG5cdCd0Ym9keScsICd0ZCcsICd0Zm9vdCcsICd0aCcsICd0aGVhZCcsICd0aXRsZScsICd0cicsICd0cmFjaydcbl07XG5cbnZhciBJRl9TVEFURU1FTlRfU1RBUlRFRCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRDb2RlKHRhZywgb3B0aW9ucywgY2hpbGRyZW4gPSBbXSlcbntcblx0aWYodGFnID09PSAndGVtcGxhdGUnKSB7XG5cdFx0cmV0dXJuIGBbJHsgY2hpbGRyZW4uam9pbignLCcpIH1dYDtcblx0fVxuXHRcblx0cmV0dXJuIGBoKCckeyB0YWcgfScsICR7IG9wdGlvbnMgfSwgWyR7IGNoaWxkcmVuLmpvaW4oJywnKSB9XSlgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlXG57XG5cdGNvbnN0cnVjdG9yKHsgdGFnID0gbnVsbCwgYXR0cnMgPSBudWxsLCBjaGlsZHJlbiA9IFtdIH0pXG5cdHtcblx0XHR0aGlzLmhpZCA9ICsrSElEO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMuYXR0cnMgPSBhdHRycztcblx0XHR0aGlzLm9wdGlvbnMgPSBwYXJzZU9wdGlvbnMoYXR0cnMpO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0XHRcblx0XHR0aGlzLnByZXZTaWJsaW5nID0gbnVsbDtcblx0XHR0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcblx0XHQvLyBpZlxuXHRcdHRoaXMuaWZfc3RhdGVtZW50ID0gZmFsc2U7XG5cdH1cblxuXHQvLyBnZXRDb250ZXh0KGN1cnJlbnRDb250ZXh0KVxuXHQvLyB7XG5cdC8vIFx0bGV0IGN0eCA9IG51bGw7XG5cblx0Ly8gXHR0cnkge1xuXHQvLyBcdFx0Y3R4ID0gU2ludW91cy5nZXRDb21wb25lbnQodGhpcy50YWcpO1xuXHQvLyBcdH0gY2F0Y2goZXJyKSB7fVxuXG5cdC8vIFx0aWYoY3R4ID09PSBudWxsKSB7XG5cdC8vIFx0XHRjdHggPSBjdXJyZW50Q29udGV4dDtcblx0Ly8gXHR9XG5cblx0Ly8gXHRyZXR1cm4gY3R4O1xuXHQvLyB9XG5cdHNldFNpYmxpbmdzKClcblx0e1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYodGhpcy5jaGlsZHJlbltpICsgMV0pIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbltpXS5uZXh0U2libGluZyA9IHRoaXMuY2hpbGRyZW5baSArIDFdO1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuW2kgKyAxXS5wcmV2U2libGluZyA9IHRoaXMuY2hpbGRyZW5baV07XG5cdFx0XHR9XG5cblx0XHRcdGlmKHRoaXMuY2hpbGRyZW5baV0gaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW5baV0uc2V0U2libGluZ3MoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRnZXQgaXNDb21wb25lbnQoKVxuXHR7XG5cdFx0cmV0dXJuICFpc05vblBocmFzaW5nVGFnLmluY2x1ZGVzKHRoaXMudGFnKTtcblx0fVxuXG5cdHRvQVNUKGNvbnRleHQgPSBudWxsLCBoeWRyYXRlID0gZmFsc2UpXG5cdHtcblx0XHRsZXQgY29kZSA9ICcnO1xuXHRcdGxldCBjaGlsZHJlbiA9IFtdO1xuXHRcdGxldCBzaG91bGRIeWRhcmF0ZSA9IGZhbHNlO1xuXHRcdGxldCBzaG91bGRPcHRpb25zSHlkcmF0ZSA9IGZhbHNlO1xuXHRcdC8vIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoY29udGV4dCk7XG5cblx0XHQvLyBjb25zb2xlLndhcm4oJ1sxXScsIGNvbnRleHQubmFtZSwgc2hvdWxkSHlkYXJhdGUpO1xuXHRcdC8qKlxuXHRcdCAqIFRyYW5zbGF0ZSBjaGlsZHJlbiB0byBoeXBlcnNjcmlwdFxuXHRcdCAqIEBwYXJhbSAge1t0eXBlXX0gdmFyIGkgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuXHRcdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgIFtkZXNjcmlwdGlvbl1cblx0XHQgKi9cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG5cdFx0XHRsZXQgeyB2YWx1ZSwgc3RhdGVmdWxsIH0gPSBjaGlsZC50b0FTVChjb250ZXh0LCBoeWRyYXRlKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdbY2hpbGRdJywgY2hpbGQsIHN0YXRlZnVsbCk7XG5cdFx0XHRpZihzdGF0ZWZ1bGwpIHtcblx0XHRcdFx0c2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjaGlsZHJlbi5wdXNoKHZhbHVlKTtcblx0XHR9XG5cblx0XHRsZXQgb3B0aW9ucyA9ICcnO1xuXG5cdFx0Ly8gY29uc29sZS53YXJuKCdbMl0nLCBjb250ZXh0Lm5hbWUsIHNob3VsZEh5ZGFyYXRlKTtcblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLm9wdGlvbnMpIHtcblx0XHRcdGxldCB7IHZhbHVlLCBzdGF0ZWZ1bGwgfSA9IHBhcnNlT3B0aW9uVmFsdWUoY29udGV4dCwga2V5LCB0aGlzLm9wdGlvbnNba2V5XSk7XG5cdFx0XHRcblx0XHRcdGlmKHN0YXRlZnVsbCkge1xuXHRcdFx0XHRzaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHN0YXRlZnVsbCB8fCAhaHlkcmF0ZSB8fCBrZXkgPT09ICdkYXRhLWhpZCcpIHtcblx0XHRcdFx0b3B0aW9ucyArPSBgJHsgcGFyc2VPcHRpb25LZXkoa2V5KSB9OiAkeyB2YWx1ZSB9LGA7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHN0YXRlZnVsbCAmJiBoeWRyYXRlKSB7XG5cdFx0XHRcdHNob3VsZE9wdGlvbnNIeWRyYXRlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblxuXHRcdHNob3VsZEh5ZGFyYXRlID0gdGhpcy5pc0NvbXBvbmVudCB8fCBzaG91bGRIeWRhcmF0ZTtcblxuXG5cdFx0aWYoc2hvdWxkSHlkYXJhdGUpIHtcblx0XHRcdG9wdGlvbnMgKz0gYGlkOiBjdHguZ2V0VUlEKCR7IHRoaXMuaGlkIH0pLGA7XG5cdFx0fVxuXG5cdFx0aWYoc2hvdWxkT3B0aW9uc0h5ZHJhdGUpIHtcblx0XHRcdG9wdGlvbnMgKz0gYF9zOiB0cnVlLGA7XG5cdFx0fVxuXG5cdFx0Ly8gY29uc29sZS53YXJuKGh5ZHJhdGUsIGNvbnRleHQubmFtZSwgdGhpcy50YWcsIHNob3VsZEh5ZGFyYXRlID8gb3B0aW9ucyA6ICcnKTtcblxuXHRcdG9wdGlvbnMgPSBgeyR7b3B0aW9uc319YDtcblx0XHRcblx0XHRsZXQgZm5fZ2VuZXJhdGVkID0gZmFsc2U7XG5cblx0XHRsZXQgc3RhdGVtZW50ID0gcGFyc2VTdGF0ZW1lbnQodGhpcyk7XG5cblx0XHRpZihzdGF0ZW1lbnQuaXMpIHtcblx0XHRcdFxuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGV4cHJlc3Npb24oY29udGV4dCwgc3RhdGVtZW50LmNvbmRpdGlvbiwgZmFsc2UpXG5cblx0XHRcdGlmKHN0YXRlbWVudC5zdGFydCkge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzKVxuXHRcdFx0XHRjb2RlICs9IGBzdGF0ZW1lbnQoYDtcblx0XHRcdH1cblxuXHRcdFx0Y29kZSArPSBgICR7IGNvbmRpdGlvbi52YWx1ZSB9LCAkeyBnZXRDb21wb25lbnRDb2RlKHRoaXMudGFnLCBvcHRpb25zLCBjaGlsZHJlbikgfWA7XG5cblx0XHRcdGlmKHN0YXRlbWVudC5lbmQpIHtcblx0XHRcdFx0Y29kZSArPSBgKWA7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvZGUgKz0gZ2V0Q29tcG9uZW50Q29kZSh0aGlzLnRhZywgb3B0aW9ucywgY2hpbGRyZW4pO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuYXR0cnMsIHRoaXMuaWZfc3RhdGVtZW50LCBzdGF0ZW1lbnQpXG5cblx0XHQvLyBpZihJRl9TVEFURU1FTlRfU1RBUlRFRCAmJiAhdGhpcy5hdHRyc1sndi1pZiddKSB7XG5cdFx0Ly8gXHRmbl9nZW5lcmF0ZWQgPSB0cnVlO1xuXHRcdC8vIFx0Y29kZSArPSBgKWA7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gaWYoSUZfU1RBVEVNRU5UX1NUQVJURUQpIHtcblx0XHQvLyBcdGxldCBjb25kaXRpb24gPSB0aGlzLmF0dHJzWyd2LWlmJ10gfHwgdGhpcy5hdHRyc1sndi1lbHNlLWlmJ10gfHwgdGhpcy5hdHRyc1sndi1lbHNlJ107XG5cdFx0Ly8gXHRsZXQgcmVzID0gW107XG5cdFx0Ly8gXHRpZighdGhpcy5hdHRyc1sndi1lbHNlJ10pIHtcblx0XHQvLyBcdFx0cmVzLnB1c2goY29uZGl0aW9uKVxuXHRcdC8vIFx0fVxuXG5cdFx0Ly8gXHRyZXMucHVzaChnZXRDb21wb25lbnRDb2RlKHRoaXMudGFnLCBvcHRpb25zLCBjaGlsZHJlbikpO1xuXG5cdFx0Ly8gXHRpZighdGhpcy5hdHRyc1sndi1lbHNlJ10pIHtcblx0XHQvLyBcdFx0cmVzLnB1c2goJycpXG5cdFx0Ly8gXHR9XG5cdFx0XHRcblx0XHQvLyBcdGNvZGUgKz0gcmVzLmpvaW4oJywnKTtcblxuXHRcdC8vIFx0Y29uc29sZS5sb2codGhpcy5hdHRycywgY29kZSlcblx0XHQvLyB9IFxuXG5cdFx0Ly8gaWYoIWZuX2dlbmVyYXRlZCkge1xuXHRcdFx0XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gY29uc29sZS53YXJuKCdbM10nLCBjb250ZXh0Lm5hbWUsIHNob3VsZEh5ZGFyYXRlKTtcblx0XHQvLyBjb25zb2xlLmxvZygnW21haW5dJywgdGhpcy50YWcsIHNob3VsZEh5ZGFyYXRlKTtcblxuXHRcdGlmKGh5ZHJhdGUgJiYgIXNob3VsZEh5ZGFyYXRlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2YWx1ZTogXyxcblx0XHRcdFx0c3RhdGVmdWxsOiBmYWxzZSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiBjb2RlLFxuXHRcdFx0c3RhdGVmdWxsOiBzaG91bGRIeWRhcmF0ZSxcblx0XHR9O1xuXHR9XG59IiwiaW1wb3J0IHsgcGFyc2VPcHRpb25WYWx1ZSB9IGZyb20gJy4vYXR0cnMnO1xuaW1wb3J0IHsgXyB9IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHROb2RlXG57XG5cdGNvbnN0cnVjdG9yKHRleHQpXG5cdHtcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHR9XG5cblx0dG9BU1QoY29udGV4dCA9IG51bGwsIGh5ZHJhdGUgPSBmYWxzZSlcblx0e1xuXHRcdGxldCB7IHZhbHVlLCBzdGF0ZWZ1bGwgfSA9IHBhcnNlT3B0aW9uVmFsdWUoY29udGV4dCwgJ190JywgdGhpcy50ZXh0KTtcblx0XHQvLyBjb25zb2xlLmxvZyhgdCgke3RoaXMudGV4dH0pYCwgdmFsdWUsIHN0YXRlZnVsbClcblxuXHRcdGlmKGh5ZHJhdGUgJiYgIXN0YXRlZnVsbCkge1xuXHRcdFx0dmFsdWUgPSBfO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZSxcblx0XHRcdHN0YXRlZnVsbCxcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgeyBleHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcblxuY29uc3QgQXR0cnNNYXAgPSB7XG5cdCdzdHlsZSc6ICdzdGF0aWNTdHlsZScsXG5cdCdjbGFzcyc6ICdzdGF0aWNDbGFzcycsXG5cdCc6c3R5bGUnOiAnZHluYW1pY1N0eWxlJyxcblx0JzpjbGFzcyc6ICdkeW5hbWljQ2xhc3MnLFxufTtcblxuY29uc3QgSFRNTEF0dHJpYnV0ZXMgPSBbJ2lkJywgJ25hbWUnLCAndmFsdWUnLCAncGxhY2Vob2xkZXInXTtcblxuZnVuY3Rpb24gcGFyc2VPcHRpb25WYWx1ZShjb250ZXh0LCBrZXksIHZhbHVlKVxue1xuXHRsZXQgc3RhdGVmdWxsID0gZmFsc2U7XG5cdGxldCBpc0V4cHJlc3Npb24gPSBmYWxzZTtcblx0bGV0IG9ic2VydmFibGVDYWxsID0gdHJ1ZTtcblxuXHRpZihrZXlbMF0gPT09ICdAJykge1xuXHRcdHN0YXRlZnVsbCA9IHRydWU7XG5cdFx0aXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxuXG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRvYnNlcnZhYmxlQ2FsbCA9IGZhbHNlO1xuXHR9XG5cblx0aWYoa2V5WzBdID09PSAnXycpIHtcblx0XHR2YWx1ZSA9ICdgJyArIHZhbHVlLnJlcGxhY2UoL3t7KC4qKX19L2csICckeyQxfScpICsgJ2AnO1xuXHRcdGlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cblxuXHRsZXQgZXhwID0gZXhwcmVzc2lvbihjb250ZXh0LCB2YWx1ZSwgaXNFeHByZXNzaW9uLCBvYnNlcnZhYmxlQ2FsbCk7XG5cdFxuXHR2YWx1ZSA9IGV4cC52YWx1ZTtcblxuXHRpZighc3RhdGVmdWxsICYmIGV4cC5zdGF0ZWZ1bGwpIHtcblx0XHRzdGF0ZWZ1bGwgPSB0cnVlO1xuXHR9XG5cblx0XG5cblx0Ly8gaWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHQvLyBcdHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXHQvLyB9IGVsc2Uge1xuXHQvLyBcdHZhbHVlID0gYFwiJHt2YWx1ZX1cImA7XG5cdC8vIH1cblxuXHRcblxuXHRyZXR1cm4ge1xuXHRcdHZhbHVlLFxuXHRcdHN0YXRlZnVsbCxcblx0fTtcbn1cblxuZnVuY3Rpb24gcGFyc2VPcHRpb25LZXkoa2V5LCB2YWx1ZSlcbntcblx0aWYoQXR0cnNNYXBba2V5XSkge1xuXHRcdHJldHVybiBBdHRyc01hcFtrZXldO1xuXHR9IGVsc2UgaWYoa2V5WzBdID09PSAnQCcpIHtcblx0XHRyZXR1cm4ga2V5LnJlcGxhY2UoL0AvZywgJ29uJyk7XG5cdH1cblxuXHRyZXR1cm4ga2V5O1xufVxuXG5mdW5jdGlvbiBwYXJzZVN0eWxlcyhzdHJpbmcpXG57XG5cdGxldCBzdHlsZXMgPSB7fTtcblx0bGV0IHBhaXJzID0gc3RyaW5nLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJzsnKTtcblx0XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgdG1wID0gcGFpcnNbaV0uc3BsaXQoJzonKTtcblx0XHRpZih0bXAubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRzdHlsZXNbdG1wWzBdXSA9IHRtcFsxXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZU9wdGlvbktleSh2YXJpYWJsZSlcbntcblx0aWYodmFyaWFibGUubWF0Y2goL1xcLS9nKSkge1xuXHRcdHZhcmlhYmxlID0gYCcke3ZhcmlhYmxlfSdgO1xuXHR9XG5cblx0cmV0dXJuIHZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBwYXJzZU9wdGlvbnMoYXR0cnMpXG57XG5cdGxldCBvcHRpb25zID0ge307XG5cblx0Zm9yKGxldCBrZXkgaW4gYXR0cnMpXG5cdHtcblx0XHRsZXQgdmFsdWUgPSBhdHRyc1trZXldO1xuXHRcdGxldCBvcHRpb25fa2V5ID0gcHJlcGFyZU9wdGlvbktleShrZXkpO1xuXG5cdFx0aWYoa2V5Lm1hdGNoKC9edlxcLS9nKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8vIElzIGh0bWwgYXR0clxuXHRcdGlmKEhUTUxBdHRyaWJ1dGVzLmluY2x1ZGVzKGtleSkgfHwgT2JqZWN0LmtleXMoQXR0cnNNYXApLmluY2x1ZGVzKGtleSkgfHwga2V5Lm1hdGNoKC9kYXRhXFwtL2cpIHx8IGtleS5tYXRjaCgvQC9nKSkge1xuXHRcdFx0aWYoa2V5ID09PSAnc3R5bGUnKSB7XG5cdFx0XHRcdHZhbHVlID0gcGFyc2VTdHlsZXModmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRvcHRpb25zW29wdGlvbl9rZXldID0gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKCFvcHRpb25zLnByb3BzKSB7XG5cdFx0XHRcdG9wdGlvbnMucHJvcHMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0b3B0aW9ucy5wcm9wc1tvcHRpb25fa2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBwYXJzZUF0dHJzKHN0cmluZylcbntcblx0aWYodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycgfHwgc3RyaW5nID09ICcnKSB7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKS50cmltKCk7XG5cblx0bGV0IHBhaXJzID0gc3RyaW5nLm1hdGNoKC8oW15cXHNdKik9W1wiJ10oLio/KVtcIiddfChbXFx3XFwtXSspL2cpXG5cdGxldCBhdHRycyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgdG1wID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcblx0XHRsZXQgbmFtZSA9IHRtcFswXTtcblx0XHRsZXQgdmFsdWUgPSB0bXBbMV0gPyB0bXBbMV0uc3Vic3RyaW5nKDEsIHRtcFsxXS5sZW5ndGggLSAxKSA6IHRydWU7XG5cdFx0YXR0cnNbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG5cdHJldHVybiBhdHRycztcbn1cblxuZXhwb3J0IHsgcGFyc2VBdHRycywgcGFyc2VPcHRpb25zLCBwYXJzZU9wdGlvbktleSwgcGFyc2VPcHRpb25WYWx1ZSB9OyIsImltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiQGJhYmVsL3BhcnNlclwiO1xuaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcbmltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiQGJhYmVsL2dlbmVyYXRvclwiO1xuaW1wb3J0IHBhcnNlRXhwcmVzc2lvbiBmcm9tIFwiLi4vc2NyaXB0L3BhcnNlRXhwcmVzc2lvblwiO1xuXG5pbXBvcnQge1xuXHRpZGVudGlmaWVyLFxuXHRDYWxsRXhwcmVzc2lvbixcblx0QmluYXJ5RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQge1xuXHRnZXRJZGVudGlmaWVyTmFtZSxcblx0c2V0SWRlbnRpZmllckNvbnRleHQsXG5cdGlzSWRlbnRpZmllclJlYWN0aXZlLFxuXHRjaGVja0Z1bmN0aW9uQXJndW1lbnREZWNsYXJhdGlvblxufSBmcm9tICcuLi9oZWxwZXJzJztcblxuXG5pbXBvcnQgeyBwcmVwYXJlT3B0aW9uS2V5IH0gZnJvbSAnLi9hdHRycyc7XG5cbmltcG9ydCB7IGhhc1N0YXRlLCBnZXRWYXJpYWJsZSB9IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uKGNvbnRleHQsIGNvZGUsIGlzRXhwcmVzc2lvbiA9IGZhbHNlLCBvYnNlcnZhYmxlQ2FsbCA9IHRydWUpXG57XG5cdGlmKHR5cGVvZiBjb2RlID09PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdGF0ZWZ1bGw6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IEpTT04uc3RyaW5naWZ5KGNvZGUpXG5cdFx0fTtcblx0fVxuXG5cdGNvZGUgPSBTdHJpbmcoY29kZSk7XG5cblx0Y29uc29sZS53YXJuKGNvZGUpO1xuXG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShjb2RlKTtcblxuXHRsZXQgeyBjaGFuZ2VkLCBvYnNlcnZhYmxlIH0gPSBwYXJzZUV4cHJlc3Npb24oY29udGV4dC5kYXRhLCBhc3QpO1xuXG5cdGlmKGNoYW5nZWQpIHtcblx0XHRjb2RlID0gZ2VuZXJhdGUoYXN0LCB7XG5cdFx0XHRyZXRhaW5MaW5lczogdHJ1ZSxcblx0XHRcdGNvbXBhY3Q6IHRydWUsXG5cdFx0XHRtaW5pZmllZDogdHJ1ZSxcblx0XHRcdGNvbmNpc2U6IHRydWUsXG5cdFx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG5cdFx0fSwgY29kZSkuY29kZTtcblxuXHRcdFxuXHRcdC8vIGNsZWFuIGFwcGVuZFxuXHRcdGNvZGUgPSBjb2RlLnJlcGxhY2UoLyg7fCwpJC9nLCAnJyk7XG5cblx0XHRpZihpc0V4cHJlc3Npb24pIHtcblx0XHRcdGNvZGUgPSBgKCkgPT4geyByZXR1cm4gJHtjb2RlfTsgfWA7XG5cdFx0fVxuXHR9XG5cblx0Y29uc29sZS5sb2coY29kZSk7XG5cdGNvbnNvbGUubG9nKCctLS0tLS0tLScpO1xuXG5cdHJldHVybiB7XG5cdFx0c3RhdGVmdWxsOiBvYnNlcnZhYmxlLFxuXHRcdHZhbHVlOiBjb2RlXG5cdH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwcmVzc2lvbihjb250ZXh0LCBjb2RlLCBleGVjdXRlID0gZmFsc2UpXG4vLyB7XG4vLyBcdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShjb2RlKTtcblxuLy8gXHR2YXIgY2hhbmdlZCA9IGZhbHNlO1xuLy8gXHR2YXIgc3RhdGVmdWxsID0gZmFsc2U7XG5cbi8vIFx0dHJhdmVyc2UoYXN0LCB7XG4vLyBcdFx0ZW50ZXIocGF0aClcbi8vIFx0XHR7XG4vLyBcdFx0XHRpZihwYXRoLm5vZGUudHlwZSA9PT0gJ0lkZW50aWZpZXInKVxuLy8gXHRcdFx0e1xuLy8gXHRcdFx0XHRpZighWydrZXknLCAnbGFiZWwnXS5pbmNsdWRlcyhwYXRoLmtleSkpIHtcbi8vIFx0XHRcdFx0XHRsZXQgbmFtZUJ1aWxkZXIgPSBbXTtcblxuLy8gXHRcdFx0XHRcdGxldCB2YXJpYWJsZSA9IHBhdGgubm9kZS5uYW1lO1xuLy8gXHRcdFx0XHRcdGxldCB2YXJpYWJsZVdpdGhDb250ZXh0ID0gZ2V0VmFyaWFibGUoY29udGV4dC5kYXRhLCB2YXJpYWJsZSlcblxuLy8gXHRcdFx0XHRcdGlmKHBhdGguY29udGFpbmVyLnR5cGUgPT09ICdDYWxsRXhwcmVzc2lvbicpIHtcbi8vIFx0XHRcdFx0XHRcdHZhcmlhYmxlV2l0aENvbnRleHQgPSBmYWxzZTtcbi8vIFx0XHRcdFx0XHR9XG5cbi8vIFx0XHRcdFx0XHRpZih2YXJpYWJsZVdpdGhDb250ZXh0KSB7XG4vLyBcdFx0XHRcdFx0XHRuYW1lQnVpbGRlci5wdXNoKCdjdHgnKVxuLy8gXHRcdFx0XHRcdFx0bmFtZUJ1aWxkZXIucHVzaCh2YXJpYWJsZVdpdGhDb250ZXh0KTtcbi8vIFx0XHRcdFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0XHRcdFx0bmFtZUJ1aWxkZXIucHVzaCh2YXJpYWJsZSk7XG4vLyBcdFx0XHRcdFx0fVxuXG4vLyBcdFx0XHRcdFx0aWYoIXZhcmlhYmxlKSB7XG4vLyBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vICR7IHZhcmlhYmxlIH0gaW4gY29udGV4dCAkeyBjb250ZXh0IH1gKTtcbi8vIFx0XHRcdFx0XHR9XG5cbi8vIFx0XHRcdFx0XHRpZihjb250ZXh0LnJlYWN0aXZlX3ZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcbi8vIFx0XHRcdFx0XHRcdHN0YXRlZnVsbCA9IHRydWU7XG4vLyBcdFx0XHRcdFx0fVxuXG4vLyBcdFx0XHRcdFx0cGF0aC5ub2RlLm5hbWUgPSBuYW1lQnVpbGRlci5qb2luKCcuJykgKyAoZXhlY3V0ZSA/ICcoKScgOiAnJyk7XG5cbi8vIFx0XHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcbi8vIFx0XHRcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdFx0XHRwYXRoLm5vZGUubmFtZSA9IHByZXBhcmVPcHRpb25LZXkocGF0aC5ub2RlLm5hbWUpO1xuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHR9XG4vLyBcdFx0fVxuLy8gXHR9KTtcblxuLy8gXHRjb2RlID0gZ2VuZXJhdGUoYXN0LCB7XG4vLyBcdFx0cmV0YWluTGluZXM6IHRydWUsXG4vLyBcdFx0Y29tcGFjdDogdHJ1ZSxcbi8vIFx0XHRtaW5pZmllZDogdHJ1ZSxcbi8vIFx0XHRjb25jaXNlOiB0cnVlLFxuLy8gXHRcdHF1b3RlczogXCJkb3VibGVcIixcbi8vIFx0fSwgY29kZSkuY29kZTtcblxuLy8gXHQvLyBjbGVhbiBhcHBlbmRcbi8vIFx0Y29kZSA9IGNvZGUucmVwbGFjZSgvKDt8LCkkL2csICcnKTtcblxuLy8gXHRpZihjaGFuZ2VkICYmIGV4ZWN1dGUpIHtcbi8vIFx0XHRjb2RlID0gYCgpID0+IHsgcmV0dXJuICR7Y29kZX07IH1gO1xuLy8gXHR9XG5cbi8vIFx0cmV0dXJuIHtcbi8vIFx0XHRzdGF0ZWZ1bGwsXG4vLyBcdFx0dmFsdWU6IGNvZGVcbi8vIFx0fVxuLy8gfSIsImltcG9ydCB7IF8gfSBmcm9tICcuLi9lbXB0eSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNTdGF0ZShjb250ZXh0LCB2YXJpYWJsZSlcbntcblx0Ly8gY29uc29sZS5sb2coY29udGV4dCwgdmFyaWFibGUuc3BsaXQoJy4nKSk7XG5cdGlmKGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGxldCB2YWx1ZSA9IGNvbnRleHQ7XG5cdGxldCB2YXJfcGFydHMgPSB2YXJpYWJsZS5zcGxpdCgnLicpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdmFyX3BhcnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsdWUgPSB2YWx1ZVt2YXJfcGFydHNbaV1dO1xuXHRcdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRpZih2YWx1ZS5fb2JzZXJ2YWJsZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1x0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYXJpYWJsZShjb250ZXh0LCB2YXJpYWJsZSlcbntcblx0aWYoT2JqZWN0LmtleXMoY29udGV4dC5jb21wdXRlZCkuaW5jbHVkZXModmFyaWFibGUpKSB7XG5cdFx0cmV0dXJuIGBfY29tcHV0ZWQuJHt2YXJpYWJsZX1gO1xuXHR9XG5cblx0aWYoT2JqZWN0LmtleXMoY29udGV4dC5zdGF0ZSkuaW5jbHVkZXModmFyaWFibGUpKSB7XG5cdFx0cmV0dXJuIGBfc3RhdGUuJHt2YXJpYWJsZX1gO1xuXHR9XG5cblx0aWYoT2JqZWN0LmtleXMoY29udGV4dC5kYXRhKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9kYXRhLiR7dmFyaWFibGV9YDtcblx0fVxuXG5cdGlmKE9iamVjdC5rZXlzKGNvbnRleHQubWV0aG9kcykuaW5jbHVkZXModmFyaWFibGUpKSB7XG5cdFx0cmV0dXJuIGAke3ZhcmlhYmxlfS5iaW5kKGN0eClgO1xuXHR9XG5cblx0aWYoT2JqZWN0LmtleXMoY29udGV4dC5wcm9wcykuaW5jbHVkZXModmFyaWFibGUpKSB7XG5cdFx0cmV0dXJuIGBfcHJvcHMuJHt2YXJpYWJsZX1gO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlUGFyc2VyIH0gZnJvbSAnaHRtbGpzLXBhcnNlcic7XG5pbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IFRleHROb2RlIGZyb20gJy4vVGV4dE5vZGUnO1xuXG5mdW5jdGlvbiBoYW5kbGVUYWcoZXZlbnQpXG57XG5cdGxldCB0YWcgPSBldmVudC50YWdOYW1lO1xuXHRsZXQgYXR0cmlidXRlcyA9IHt9O1xuXG5cdGlmKGV2ZW50LmF0dHJpYnV0ZXMpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBhdHRyID0gZXZlbnQuYXR0cmlidXRlc1tpXTtcblx0XHRcdGF0dHJpYnV0ZXNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWUgfHwgdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHRhZyxcblx0XHRhdHRyaWJ1dGVzXG5cdH1cbn1cblxuZnVuY3Rpb24gY2xvc2UoZXZlbnQpXG57XG5cdGxldCB7IHRhZywgYXR0cmlidXRlcyB9ID0gaGFuZGxlVGFnKGV2ZW50KTtcblxuXHRjb25zb2xlLmxvZygnZW5kJywgdGFnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZShodG1sKVxue1xuXHRsZXQgc3RhY2sgPSBbXTtcblxuXHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXHQvZywgJyAnKS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJyk7XG5cblx0Y3JlYXRlUGFyc2VyKHtcblx0XHRcblx0XHRvbk9wZW5UYWcoZXZlbnQpXG5cdFx0e1xuXHRcdFx0bGV0IHsgdGFnLCBhdHRyaWJ1dGVzIH0gPSBoYW5kbGVUYWcoZXZlbnQpO1xuXHRcdFx0XG5cdFx0XHRjb25zb2xlLmxvZygnY3JlYXRlIE5vZGUnLCB0YWcsIGF0dHJpYnV0ZXMpXG5cdFx0fSxcblxuXHRcdG9uVGV4dChldmVudClcblx0XHR7XG5cdFx0XHRsZXQgdmFsdWUgPSBldmVudC52YWx1ZS50cmltKCk7XG5cdFx0XHRcblx0XHRcdGlmKHZhbHVlICE9PSAnJykge1xuXHQgICAgICAgIFx0Y29uc29sZS53YXJuKHZhbHVlKVxuXHQgICAgXHR9XG5cdCAgICB9LFxuXG5cdFx0b25TdHJpbmcoZXZlbnQpXG5cdFx0e1xuXHQgICAgICAgIC8vIGNvbnNvbGUud2FybihldmVudClcblx0ICAgIH0sXG5cblx0XHRvbkNsb3NlVGFnOiBjbG9zZVxuXG5cdH0sIHtcblx0XHRyZWZsZWN0aXZlQXR0cmlidXRlczogdHJ1ZVxuXHR9KVxuXHQucGFyc2UoaHRtbCk7XG59XG4iLCJleHBvcnQgY29uc3QgSUZfQVRUUlMgPSBbJ3YtaWYnLCAndi1lbHNlLWlmJywgJ3YtZWxzZSddO1xuXG5leHBvcnQgIGZ1bmN0aW9uIHBhcnNlU3RhdGVtZW50KG5vZGUpXG57XG5cdGxldCBzdGFydCA9IGZhbHNlO1xuXHRsZXQgZW5kID0gdHJ1ZTtcblx0bGV0IHN0YXRlbWVudCA9IGZhbHNlO1xuXHRsZXQgY29uZGl0aW9uID0gbm9kZS5hdHRyc1sndi1pZiddIHx8IG5vZGUuYXR0cnNbJ3YtZWxzZS1pZiddIHx8ICd0cnVlJztcblxuXHRpZihub2RlLmF0dHJzWyd2LWlmJ10pIHtcblx0XHRzdGFydCA9IHRydWU7XG5cdH1cblxuXHRpZihub2RlLmF0dHJzWyd2LWlmJ10gfHwgbm9kZS5hdHRyc1sndi1lbHNlLWlmJ10gfHwgbm9kZS5hdHRyc1sndi1lbHNlJ10pIHtcblx0XHRub2RlLmlmX3N0YXRlbWVudCA9IHRydWU7XG5cdFx0c3RhdGVtZW50ID0gdHJ1ZTtcblx0fVxuXG5cblx0aWYobm9kZS5uZXh0U2libGluZykge1xuXHRcdGlmKG5vZGUubmV4dFNpYmxpbmcuYXR0cnNbJ3YtZWxzZS1pZiddIHx8IG5vZGUubmV4dFNpYmxpbmcuYXR0cnNbJ3YtZWxzZSddKSB7XG5cdFx0XHRlbmQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvLyBpZihub2RlLnByZXZTaWJsaW5nKSB7XG5cdC8vIFx0aWYobm9kZS5wcmV2U2libGluZy5pZl9zdGF0ZW1lbnQpIHtcblx0Ly8gXHRcdHN0YXRlbWVudCA9IHRydWU7XG5cdC8vIFx0fVxuXHQvLyB9XG5cblx0Ly8gY29uc29sZS53YXJuKG5vZGUuYXR0cnMsIHN0YXRlbWVudCwgc3RhcnQsIGVuZCk7XG5cblx0cmV0dXJuIHtcblx0XHRjb25kaXRpb24sXG5cdFx0aXM6IHN0YXRlbWVudCxcblx0XHRzdGFydCxcblx0XHRlbmQsXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VGdW5jdGlvbnMoY29kZSlcbntcblx0Y29kZSA9IGNvZGVcblx0XHQucmVwbGFjZSgvXFxAaWZcXCgoLiopXFwpL2csICc8aWYgY29uZGl0aW9uPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9cXEBlbHNlaWZcXCgoLiopXFwpL2csICc8ZWxzZS1pZiBjb25kaXRpb249XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL1xcQGVsc2UvZywgJzxlbHNlPicpXG5cdFx0LnJlcGxhY2UoL1xcQGVuZGlmL2csICc8ZW5kaWY+JylcblxuXG5cdGNvbnNvbGUubG9nKGNvZGUpO1xuXG5cdHJldHVybiBjb2RlO1xufSIsImltcG9ydCB7IGNvbXBpbGVyLCBfIH0gZnJvbSAnQHNpbnVvdXMvY29tcGlsZXInO1xuXG4vLyBpbXBvcnQgeyBwYXJzZUV4cHJlc3Npb24gfSBmcm9tICdAc2ludW91cy9jb21waWxlci9zcmMvdGVtcGxhdGUvZXhwcmVzc2lvbic7XG5pbXBvcnQgeyBjcmVhdGVEYXRhIH0gZnJvbSBcIkBzaW51b3VzL2NvbXBpbGVyL3NyYy9zY3JpcHQvZGF0YVwiO1xuaW1wb3J0IHBhcnNlSFRNTCBmcm9tICdAc2ludW91cy9jb21waWxlci9zcmMvdGVtcGxhdGUvaHRtbCc7XG5cblxubGV0IGRhdGEgPSBjcmVhdGVEYXRhKCk7XG5cbmRhdGEuZGF0YSA9IHtcblx0ZDE6IDEsXG5cdGQyOiAxLFxufVxuXG5kYXRhLnN0YXRlID0ge1xuXHRzMTogMSxcblx0czI6IDEsXG59XG5cbmRhdGEuY29tcHV0ZWQgPSB7XG5cdGMxOiAxLFxuXHRjMjogMSxcbn1cblxuZGF0YS5tZXRob2RzID0ge1xuXHRtMTogMSxcblx0bTI6IDEsXG59XG5cbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCBgXG4vLyBsZXQgZCA9IGZ1bmN0aW9uKCkge31cbi8vIGxldCBkMiA9ICgpID0+IHt9XG4vLyBmdW5jdGlvbiBjMShzMykge1xuLy8gXHRsZXQgZCA9IFtdO1xuLy8gXHRmb3IobGV0IGkgPSAwOyBpIDwgczEubGVuZ3RoOyBpKyspIHtcbi8vIFx0XHRkLnB1c2goczFbaV0pO1xuLy8gXHR9XG4vLyB9XG4vLyBgKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICd7IHMxOiAoKSA9PiBzMSB9Jylcbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCAnYWxlcnQoKTsnLCB0cnVlKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdtMShldmVudCknKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdzMSArPSA2Jylcbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCAnZDEgPSBkMSArIDYnKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdkMSAvPSA2Jylcbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCAnZC5wdXNoKHMxKScpXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ2QgPSAoKSA9PiB7IHJldHVybiBzMSB9JylcblxuXG5sZXQgc291cmNlID0gYFxuPHRlbXBsYXRlPlxuXHQ8ZGl2IEBjbGljaz1cInJlYWN0aXZlX2NsaWNrXCI+XG5cdFx0dGVzdCB7eyB2aXNpYmxlIH19XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGQgfSBmcm9tICcuLi9zcmMvdGVzdC1pbXBvcnQuanMnXG5cbi8qKlxuICogU3RhdGVcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbmxldCAkdmlzaWJsZSA9IGQ7XG5sZXQgJGNsaWNrczIgPSB7XG5cdGE6IDJcbn07XG5sZXQgY2xpY2tzID0gMTtcbi8qKlxuICogQ29tcHV0ZWRcbiAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICovXG5sZXQgY29tcHV0ZWQxID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAxO1xufVxuXG5sZXQgY29tcHV0ZWQyID0gKCkgPT4ge1xuXHRsZXQgayA9IFtdO1xuXHRcblx0Zm9yKGxldCBkIGluIFsxLDIsM10pIHtcblx0XHRrLnB1c2godmlzaWJsZSk7XG5cdH1cblxuXHRyZXR1cm4gdmlzaWJsZSAqIDIgKiA1O1xufVxuXG4vKipcbiAqIE1ldGhvZHNcbiAqL1xuZnVuY3Rpb24gY2xpY2soZXZlbnQpIHtcblx0Y2xpY2tzKys7XG5cdGFsZXJ0KHRoaXMuX2RhdGEuY2xpY2tzKVxufVxuXG5mdW5jdGlvbiByZWFjdGl2ZV9jbGljayhldmVudDIpIHtcblx0dmlzaWJsZSArPSAxO1xufVxuXG4vLyBmdW5jdGlvbiBtb3VudGVkKCkge1xuXG4vLyB9XG48L3NjcmlwdD5cbmA7XG5cbi8vIHBhcnNlSFRNTChzb3VyY2UpO1xuXG5cbmxldCBibG9jayA9IGNvbXBpbGVyKHtcblx0Y29udGV4dDogZGF0YSxcblx0dHlwZTogJ3RlbXBsYXRlJyxcblx0c291cmNlOiBzb3VyY2UsXG59KTtcblxuY29uc29sZS5sb2coYmxvY2suc291cmNlLnJlbmRlcikiXSwic291cmNlUm9vdCI6IiJ9