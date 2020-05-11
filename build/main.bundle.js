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
  (0, _parseExpression.default)(data, ast);
  console.log(data);
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
        data.methods[name] = (0, _types.FunctionExpression)(null, path.node.params, path.node.body);
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

function parseExpression(data, ast, ctx) {
  if (ctx === void 0) {
    ctx = 'this';
  }

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

        if ((0, _helpers.setIdentifierContext)(ctx, data, path)) {
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
      var condition = (0, _expression.expression)(context, statement.condition, true);

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

  var _parseExpression = (0, _parseExpression2.default)(context.data, ast, 'ctx'),
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

function parseExpression(data, ast, ctx) {
  if (ctx === void 0) {
    ctx = 'this';
  }

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

        if ((0, _helpers.setIdentifierContext)(ctx, data, path)) {
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
      var condition = (0, _expression.expression)(context, statement.condition, true);

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

  var _parseExpression = (0, _parseExpression2.default)(context.data, ast, 'ctx'),
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

var source = "\n<template>\n\t<div @click=\"alert(1)\">\n\t\ttest\n\t\t{{ s2 }}\n\t\t<br>\n\t\t<template v-if=\"s1\">\n\t\t\t<div>\n\t\t\t\tshow {{ ddd }}\n\t\t\t</div>\n\t\t\t<span>\n\t\t\t\ttest\n\t\t\t</span>\n\t\t</template>\n\t\t<div v-else-if=\"s3\">\n\t\t\ttest\n\t\t</div>\n\t\t<template v-else>\n\t\thide\n\t\t</template>\n\t\t<div>after-once-if</div>\n\t</div>\n</template>\n\n<script>\nlet $s1 = true;\nlet $s2 = 10;\nlet $s3 = false;\nlet ddd = 1\n\nfunction mounted() {\n\talert(1);\n}\n</script>\n\n"; // parseHTML(source);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvbXBpbGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvQXN0R2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2NyaXB0L2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3NjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3NjcmlwdC9wYXJzZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvcGFyc2VFeHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2NyaXB0L3BhcnNlTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90ZW1wbGF0ZS9UZXh0Tm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2F0dHJzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdGVtcGxhdGUvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2dlbmVyYXRlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdGVtcGxhdGUvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdGVtcGxhdGUvcGFyc2VGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2VtcHR5LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zY3JpcHQvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2NyaXB0L3BhcnNlRXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9jb21waWxlci9zcmMvdGVtcGxhdGUvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9jb21waWxlci9zcmMvdGVtcGxhdGUvVGV4dE5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3RlbXBsYXRlL2F0dHJzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9odG1sLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9wYXJzZUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVzdC5qcyJdLCJuYW1lcyI6WyJibG9ja3MiLCJzb3VyY2UiLCJ0eXBlIiwiZXhlYyIsInMiLCJjb21waWxlciIsImNvbnRleHQiLCJyb290IiwibG93ZXJDYXNlVGFnTmFtZSIsInNjcmlwdCIsIm5vZGVzIiwiaSIsImlubmVySFRNTCIsIl8iLCJSZWFjdGl2ZU5hbWVzcGFjZXMiLCJuYW1lIiwiaWQiLCJkYXRhIiwicGF0aCIsImdldElkZW50aWZpZXJOYW1lIiwibWF0Y2giLCJtYXRjaElkZW50aWZpZXIiLCJvYnNlcnZhYmxlQ2FsbCIsImN0eCIsIm5hbWVzcGFjZSIsIk9iamVjdCIsIm9ic2VydmFibGUiLCJpbXBvcnRzIiwicHJvcGVydGllcyIsIm9iamVjdCIsIkZ1bmN0aW9uUmV0dXJuRXhwcmVzc2lvbiIsImdlbmVyYXRlRnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uIiwiT2JqZWN0UmV0dXJuRXhwcmVzc2lvbiIsImdlbmVyYXRlT2JqZWN0UmV0dXJuRXhwcmVzc2lvbiIsImV4cG9ydGVkT2JqZWN0IiwiZXhwb3J0ZWREZWZhdWx0IiwiYm9keSIsInZhbHVlcyIsInZhbCIsIlJlYWN0aXR5IiwiRnVuY3Rpb25SZXR1cm4iLCJwcm9wcyIsInN0YXRlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiQWlpRXhwcmVzc2lvbiIsImlzRnVuY3Rpb24iLCJhcHBlbmQiLCJpc0lkZW50aWZpZXJSZWFjdGl2ZSIsImFzdCIsInNvdXJjZVR5cGUiLCJzdHJpY3RNb2RlIiwicmVhY3RpdmVfdmFyaWFibGVzIiwiY29uc29sZSIsInJldGFpbkxpbmVzIiwiY29tcGFjdCIsIm1pbmlmaWVkIiwiY29uY2lzZSIsInF1b3RlcyIsImlzRnVuY3Rpb25EZWNsYXJhdGlvbiIsIlZhcmlhYmxlRGVjbGFyYXRvciIsImVudGVyIiwidmFsdWUiLCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbiIsImV4aXQiLCJGdW5jdGlvbkRlY2xhcmF0aW9uIiwiY29sbGVjdFZhcmlhYmxlcyIsImNoYW5nZWQiLCJJbXBvcnREZWNsYXJhdGlvbiIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiYXJncyIsIklkZW50aWZpZXIiLCJmdW5jdGlvbkJsb2NrSGFuZGxpbmciLCJhc3NpZ25tZW50SGFuZGxpbmciLCJ2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmciLCJzaG91bGRBc3NpZ25tZW50SGFuZGxlIiwiaGFzRnVuY3Rpb25SZWFjdGl2ZSIsIm1lbWJlckhhbmRsaW5nIiwiQ2FsbEV4cHJlc3Npb24iLCJNZW1iZXJFeHByZXNzaW9uIiwiRXhwcmVzc2lvblN0YXRlbWVudCIsImV4cHJlc3Npb24iLCJCbG9ja1N0YXRlbWVudCIsImNvbGxlY3RNZXRob2RzIiwiSElEIiwiaXNOb25QaHJhc2luZ1RhZyIsIklGX1NUQVRFTUVOVF9TVEFSVEVEIiwiY2hpbGRyZW4iLCJ0YWciLCJOb2RlIiwiYXR0cnMiLCJzZXRTaWJsaW5ncyIsInRvQVNUIiwiaHlkcmF0ZSIsImNvZGUiLCJzaG91bGRIeWRhcmF0ZSIsInNob3VsZE9wdGlvbnNIeWRyYXRlIiwiY2hpbGQiLCJzdGF0ZWZ1bGwiLCJvcHRpb25zIiwia2V5IiwiZm5fZ2VuZXJhdGVkIiwic3RhdGVtZW50IiwiY29uZGl0aW9uIiwiZ2V0Q29tcG9uZW50Q29kZSIsIlRleHROb2RlIiwiQXR0cnNNYXAiLCJIVE1MQXR0cmlidXRlcyIsImlzRXhwcmVzc2lvbiIsImV4cCIsInN0eWxlcyIsInBhaXJzIiwic3RyaW5nIiwidG1wIiwidmFyaWFibGUiLCJvcHRpb25fa2V5IiwicHJlcGFyZU9wdGlvbktleSIsInBhcnNlU3R5bGVzIiwiSlNPTiIsIlN0cmluZyIsInBhcnNlciIsImlzUm9vdCIsIm5vZGUiLCJnZW5lcmF0ZVRyZWUiLCJ0cmVlIiwicmVuZGVyIiwicmVzdWx0IiwicmVuZGVyQVNUIiwiaHlkcmF0aW9uQVNUIiwidmFyX3BhcnRzIiwiSUZfQVRUUlMiLCJzdGFydCIsImVuZCIsImlzIiwic3Vic3RyaW5nIiwiY2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb24iLCJwYXJlbnQiLCJsaXN0S2V5IiwiRXJyb3IiLCJzZXRJZGVudGlmaWVyQ29udGV4dCIsImluY2x1ZGVzIiwiY29udGFpbmVyIiwia2V5cyIsImNyZWF0ZURhdGEiLCJwYXJzZUV4cHJlc3Npb24iLCJsZWZ0IiwicmlnaHQiLCJvcGVyYXRvciIsImxlbmd0aCIsInJlcGxhY2VXaXRoIiwiam9pbiIsImhpZCIsInByZXZTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJpZl9zdGF0ZW1lbnQiLCJwdXNoIiwiaXNDb21wb25lbnQiLCJ0ZXh0IiwicGFyc2VPcHRpb25WYWx1ZSIsInJlcGxhY2UiLCJwYXJzZU9wdGlvbktleSIsInNwbGl0IiwicGFyc2VPcHRpb25zIiwicGFyc2VBdHRycyIsInRyaW0iLCJzdHJpbmdpZnkiLCJ3YXJuIiwicGFyc2UiLCJsb2ciLCJoYXNTdGF0ZSIsIl9vYnNlcnZhYmxlIiwiZ2V0VmFyaWFibGUiLCJoYW5kbGVUYWciLCJldmVudCIsInRhZ05hbWUiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsImNsb3NlIiwiaHRtbCIsInN0YWNrIiwib25PcGVuVGFnIiwib25UZXh0Iiwib25TdHJpbmciLCJvbkNsb3NlVGFnIiwicmVmbGVjdGl2ZUF0dHJpYnV0ZXMiLCJwYXJzZVN0YXRlbWVudCIsInBhcnNlRnVuY3Rpb25zIiwiZDEiLCJkMiIsInMxIiwiczIiLCJjMSIsImMyIiwibTEiLCJtMiIsImJsb2NrIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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dW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBjb21waWxlU2NyaXB0IH0gZnJvbSBcIi4vc2NyaXB0XCI7XG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUgfSBmcm9tIFwiLi90ZW1wbGF0ZVwiO1xuXG5mdW5jdGlvbiBjb21waWxlcihjb250ZXh0LCB7IGJsb2Nrcywgc291cmNlLCB0eXBlIH0pXG57XG5cdGxldCBleGVjID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzb3VyY2U7XG5cdH1cblxuXHRpZih0eXBlID09PSAnc2NyaXB0Jykge1xuXHRcdGxldCBzID0gY29tcGlsZVNjcmlwdChjb250ZXh0LCBzb3VyY2UpO1xuXHRcdHNvdXJjZSA9IHMuY29kZSA9PSAnJyA/IG51bGwgOiBzLmNvZGU7XG5cdH1cblxuXHRpZih0eXBlID09PSAndGVtcGxhdGUnKSB7XG5cdFx0c291cmNlID0gY29tcGlsZVRlbXBsYXRlKGNvbnRleHQsIHNvdXJjZSwgYmxvY2tzKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c291cmNlLFxuXHRcdHR5cGUsXG5cdFx0ZXhlYyxcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCB7IHR5cGUsIHNvdXJjZSB9KVxue1xuXHRyZXR1cm4ge1xuXHRcdHR5cGUsXG5cdFx0c291cmNlLFxuXHRcdGV4ZWMoYmxvY2tzID0gW10pIHtcblx0XHRcdHJldHVybiBjb21waWxlcihjb250ZXh0LCB7XG5cdFx0XHRcdGJsb2Nrcyxcblx0XHRcdFx0c291cmNlOiB0aGlzLnNvdXJjZSxcblx0XHRcdFx0dHlwZTogdGhpcy50eXBlLFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbn07IiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdub2RlLWh0bWwtcGFyc2VyJztcbmltcG9ydCBibG9jayBmcm9tICcuL2Jsb2NrLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVyKHsgY29udGV4dCwgdHlwZSwgc291cmNlIH0pIHtcblxuXHRsZXQgcm9vdCA9IHBhcnNlKHNvdXJjZSwge1xuXHRcdGxvd2VyQ2FzZVRhZ05hbWU6IHRydWUsXG5cdFx0c2NyaXB0OiB0cnVlLFxuXHR9KTtcblxuXHRsZXQgbm9kZXMgPSByb290LmNoaWxkTm9kZXM7XG5cdGxldCBibG9ja3MgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYobm9kZXNbaV0udGFnTmFtZSkge1xuXHRcdFx0YmxvY2tzW25vZGVzW2ldLnRhZ05hbWVdID0gYmxvY2soY29udGV4dCwge1xuXHRcdFx0XHR0eXBlOiBub2Rlc1tpXS50YWdOYW1lLFxuXHRcdFx0XHRzb3VyY2U6IG5vZGVzW2ldLmlubmVySFRNTCxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVx0XG5cblx0aWYoYmxvY2tzW3R5cGVdKSB7XG5cdFx0cmV0dXJuIGJsb2Nrc1t0eXBlXS5leGVjKGJsb2Nrcyk7XG5cdH1cblxuXHRyZXR1cm4gYmxvY2soY29udGV4dCwge1xuXHRcdHR5cGU6IHR5cGUsXG5cdFx0c291cmNlOiBudWxsLFxuXHR9KTtcbn0iLCJleHBvcnQgY29uc3QgXyA9IC0xO1xuIiwiZXhwb3J0IGNvbnN0IFJlYWN0aXZlTmFtZXNwYWNlcyA9IFsnc3RhdGUnLCAnY29tcHV0ZWQnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIGlkKVxue1xuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cdFxuXHRpZihuYW1lLm1hdGNoKC9eXFwkL2cpKVx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGRhdGEuc3RhdGVbbmFtZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJZGVudGlmaWVyTmFtZShpZClcbntcblx0aWYoIWlkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cblx0aWYobmFtZS5tYXRjaCgvXlxcJC9nKSlcdHtcblx0XHRyZXR1cm4gbmFtZS5zdWJzdHJpbmcoMSlcblx0fVxuXG5cdHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb24oZGF0YSwgcGF0aClcbntcblx0aWYocGF0aC5wYXJlbnQudHlwZSAhPT0gJ0Z1bmN0aW9uRGVjbGFyYXRpb24nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblx0bGV0IG1hdGNoID0gbWF0Y2hJZGVudGlmaWVyKGRhdGEsIGlkKTtcblxuXHRpZihtYXRjaC5uYW1lc3BhY2UgJiYgcGF0aC5saXN0S2V5ID09PSAncGFyYW1zJykge1xuXHRcdHRocm93IG5ldyBFcnJvcihgVmFyaWFibGUgJHsgbmFtZSB9IGhhcyBhbHJlYWR5IGRlZmluZWQgaW4gJHsgbWF0Y2gubmFtZXNwYWNlIH1gKVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJZGVudGlmaWVyQ29udGV4dChjdHgsIGRhdGEsIHBhdGgsIG9ic2VydmFibGVDYWxsID0gdHJ1ZSlcbntcblx0aWYoWydGdW5jdGlvbkRlY2xhcmF0aW9uJywgJ1ZhcmlhYmxlRGVjbGFyYXRvcicsICdMYWJlbGVkU3RhdGVtZW50J10uaW5jbHVkZXMocGF0aC5wYXJlbnQudHlwZSkgfHwgWydwcm9wZXJ0eSddLmluY2x1ZGVzKHBhdGgua2V5KSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGxldCBpZCA9IHBhdGgubm9kZTtcblx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShpZCk7XG5cdGxldCBtYXRjaCA9IG1hdGNoSWRlbnRpZmllcihkYXRhLCBpZCk7XG5cdFxuXHRpZihtYXRjaC5uYW1lc3BhY2UgPT09IGZhbHNlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0bmFtZSA9IGAke2N0eH0uXyR7bWF0Y2gubmFtZXNwYWNlfS4ke25hbWV9YDtcblx0Ly8gY29uc29sZS5sb2cobmFtZSwgb2JzZXJ2YWJsZUNhbGwpXG5cdGlmKG1hdGNoLm9ic2VydmFibGUgJiYgcGF0aC5jb250YWluZXIudHlwZSAhPT0gJ0NhbGxFeHByZXNzaW9uJyAmJiBvYnNlcnZhYmxlQ2FsbCkge1xuXHRcdG5hbWUgKz0gJygpJztcblx0fVxuXG5cdGlkLm5hbWUgPSBuYW1lO1xuXG5cdHJldHVybiBtYXRjaC5vYnNlcnZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hJZGVudGlmaWVyKGNvbnRleHQsIGlkKVxue1xuXHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblx0bGV0IG5hbWVzcGFjZSA9IGZhbHNlO1xuXG5cdGZvcihsZXQga2V5IGluIGNvbnRleHQpIHtcblx0XHRpZihPYmplY3Qua2V5cyhjb250ZXh0W2tleV0pLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRuYW1lc3BhY2UgPSBrZXk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRuYW1lc3BhY2UsXG5cdFx0b2JzZXJ2YWJsZTogUmVhY3RpdmVOYW1lc3BhY2VzLmluY2x1ZGVzKG5hbWVzcGFjZSlcblx0fTtcbn0iLCJpbXBvcnQgeyBfIH0gZnJvbSAnLi9lbXB0eS5qcyc7XG5pbXBvcnQgeyBjb21waWxlciB9IGZyb20gJy4vY29tcGlsZXIuanMnO1xuXG5leHBvcnQgeyBfLCBjb21waWxlciB9IiwiaW1wb3J0IHtcblx0RXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uLFxuXHRPYmplY3RFeHByZXNzaW9uLFxuXHRPYmplY3RQcm9wZXJ0eSxcblx0T2JqZWN0TWV0aG9kLFxuXHRDYWxsRXhwcmVzc2lvbixcblx0RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0QmxvY2tTdGF0ZW1lbnQsXG5cdFJldHVyblN0YXRlbWVudCxcblx0aWRlbnRpZmllcixcblx0cHJvZ3JhbSxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQge1xuXHQvLyBDb25zdHNcblx0UmVhY3RpdHksXG5cdEZ1bmN0aW9uUmV0dXJuRXhwcmVzc2lvbixcblx0T2JqZWN0UmV0dXJuRXhwcmVzc2lvbixcblx0QWlpRXhwcmVzc2lvbixcbn0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkYXRhKVxue1xuXHRsZXQgaW1wb3J0cyA9IFtdO1xuXG5cdGZvcihsZXQgcHJvcCBpbiBkYXRhLmltcG9ydHMpIHtcblx0XHRpbXBvcnRzLnB1c2goZGF0YS5pbXBvcnRzW3Byb3BdKVxuXHR9O1xuXG5cdGxldCBwcm9wZXJ0aWVzID0gW107XG5cblx0T2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocHJvcCwga2V5KSA9PiB7XG5cblx0XHRsZXQgb2JqZWN0ID0gbnVsbDtcblxuXHRcdGlmKEZ1bmN0aW9uUmV0dXJuRXhwcmVzc2lvbi5pbmNsdWRlcyhwcm9wKSkge1xuXHRcdFx0b2JqZWN0ID0gZ2VuZXJhdGVGdW5jdGlvblJldHVybkV4cHJlc3Npb24oZGF0YSwgcHJvcCk7XG5cdFx0fSBlbHNlIGlmKE9iamVjdFJldHVybkV4cHJlc3Npb24uaW5jbHVkZXMocHJvcCkpIHtcblx0XHRcdG9iamVjdCA9IGdlbmVyYXRlT2JqZWN0UmV0dXJuRXhwcmVzc2lvbihkYXRhLCBwcm9wKTtcblx0XHR9XG5cblx0XHRpZighb2JqZWN0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdHByb3BlcnRpZXMucHVzaChvYmplY3QpO1xuXHR9KVxuXG5cdGxldCBleHBvcnRlZE9iamVjdCA9IE9iamVjdEV4cHJlc3Npb24ocHJvcGVydGllcyk7XG5cdGxldCBleHBvcnRlZERlZmF1bHQgPSBbXG5cdFx0RXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uKGV4cG9ydGVkT2JqZWN0KVxuXHRdO1xuXG5cdGxldCBib2R5ID0gW11cblx0XHQuY29uY2F0KGltcG9ydHMpXG5cdFx0LmNvbmNhdChleHBvcnRlZERlZmF1bHQpXG5cblx0cmV0dXJuIHByb2dyYW0oXG5cdFx0Ym9keSwgXG5cdFx0W10sXG5cdFx0J21vZHVsZSdcblx0KTtcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZ1bmN0aW9uUmV0dXJuRXhwcmVzc2lvbihkYXRhLCByZXR1cm5Qcm9wKVxue1xuXHRsZXQgdmFsdWVzID0gZGF0YVtyZXR1cm5Qcm9wXTtcblx0bGV0IHByb3BlcnRpZXMgPSBbXTtcblxuXHRmb3IobGV0IHByb3AgaW4gdmFsdWVzKSB7XG5cdFx0bGV0IHZhbCA9IHZhbHVlc1twcm9wXTtcblxuXHRcdGlmKHZhbC50eXBlID09PSAnQmxvY2tTdGF0ZW1lbnQnKSB7XG5cdFx0XHR2YWwgPSBBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSwgdmFsKTtcblx0XHR9XG5cblx0XHRpZihSZWFjdGl0eVtyZXR1cm5Qcm9wXSkge1xuXHRcdFx0dmFsID0gQ2FsbEV4cHJlc3Npb24oaWRlbnRpZmllcihSZWFjdGl0eVtyZXR1cm5Qcm9wXSksIFt2YWxdKTtcblx0XHR9XG5cblx0XHRwcm9wZXJ0aWVzLnB1c2goXG5cdFx0XHRPYmplY3RQcm9wZXJ0eShpZGVudGlmaWVyKHByb3ApLCB2YWwpXG5cdFx0KVxuXHR9XG5cblx0bGV0IEZ1bmN0aW9uUmV0dXJuID0gUmV0dXJuU3RhdGVtZW50KFxuXHRcdE9iamVjdEV4cHJlc3Npb24oXG5cdFx0XHRwcm9wZXJ0aWVzXG5cdFx0KVxuXHQpXG5cblx0bGV0IGJvZHkgPSBCbG9ja1N0YXRlbWVudChbRnVuY3Rpb25SZXR1cm5dKVxuXG5cdGxldCBvYmplY3QgPSBPYmplY3RNZXRob2QoJ21ldGhvZCcsIGlkZW50aWZpZXIocmV0dXJuUHJvcCksXG5cdFx0UmVhY3RpdHlbcmV0dXJuUHJvcF0gPyBbaWRlbnRpZmllcihSZWFjdGl0eVtyZXR1cm5Qcm9wXSldIDogW11cblx0LCBib2R5KTtcblxuXHRyZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU9iamVjdFJldHVybkV4cHJlc3Npb24oZGF0YSwgcHJvcClcbntcblx0bGV0IHZhbHVlcyA9IGRhdGFbcHJvcF07XG5cdGxldCBwcm9wZXJ0aWVzID0gW107XG5cblx0Zm9yKGxldCBwcm9wIGluIHZhbHVlcykge1xuXHRcdGxldCB2YWwgPSB2YWx1ZXNbcHJvcF07XG5cblx0XHRpZih2YWwudHlwZSA9PT0gJ0Z1bmN0aW9uRGVjbGFyYXRpb24nKSB7XG5cdFx0XHR2YWwgPSBGdW5jdGlvbkV4cHJlc3Npb24obnVsbCwgdmFsLnBhcmFtcywgdmFsLmJvZHkpO1xuXHRcdH1cblxuXHRcdHByb3BlcnRpZXMucHVzaChcblx0XHRcdE9iamVjdFByb3BlcnR5KGlkZW50aWZpZXIocHJvcCksIHZhbClcblx0XHQpXG5cdH1cblxuXHRsZXQgb2JqZWN0ID0gT2JqZWN0UHJvcGVydHkoXG5cdFx0aWRlbnRpZmllcihwcm9wKSxcblx0XHRPYmplY3RFeHByZXNzaW9uKHByb3BlcnRpZXMpXG5cdCk7XG5cblx0cmV0dXJuIG9iamVjdDtcbn0iLCJleHBvcnQgY29uc3QgZGF0YSA9IHtcblx0aW1wb3J0czogW10sXG5cdHByb3BzOiB7fSxcblx0ZGF0YToge30sXG5cdHN0YXRlOiB7fSxcblx0Y29tcHV0ZWQ6IHt9LFxuXHRtZXRob2RzOiB7fSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhdGEoY29udGV4dCkge1xuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge30sIGNvbnRleHQpO1xufSIsIi8vIGltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGFcIjtcblxuLyoqXG4gKiBDb25zdHNcbiAqL1xuXG5leHBvcnQgY29uc3QgUmVhY3RpdHkgPSB7XG5cdCdzdGF0ZSc6ICdvJyxcblx0J2NvbXB1dGVkJzogJ28nLFxufTtcblxuZXhwb3J0IGNvbnN0IEZ1bmN0aW9uUmV0dXJuRXhwcmVzc2lvbiA9IFtcblx0J2RhdGEnLCAnc3RhdGUnLCAnY29tcHV0ZWQnLFxuXTtcblxuZXhwb3J0IGNvbnN0IE9iamVjdFJldHVybkV4cHJlc3Npb24gPSBbXG5cdCdtZXRob2RzJywgXG5dO1xuXG4vLyBBcyBpdCBpcyBleHByZXNzaW9uc1xuZXhwb3J0IGNvbnN0IEFpaUV4cHJlc3Npb24gPSBbXG5cdCdpbXBvcnRzJyxcbl07XG5cbi8vIGV4cG9ydCBjb25zdCBSRVRVUk5fRlVOQ1RJT05fVFlQRSA9IDE7XG4vLyBleHBvcnQgY29uc3QgT0JKRUNUX0ZVTkNUSU9OX1RZUEUgPSAyO1xuXG4vKipcbiAqIEZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNvbnRleHRhYmxlKGRhdGEsIGlkKVxue1xuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cdGxldCBpc0Z1bmN0aW9uID0gbmFtZS5tYXRjaCgvXFwoXFwpJC9nKTtcblxuXHRuYW1lID0gbmFtZS5yZXBsYWNlKC8oXFwofFxcKSkvZywgJycpO1xuXG5cdGlmKCFuYW1lLm1hdGNoKC9edGhpc1xcLi9naSkpIHtcblx0XHRsZXQgYXBwZW5kID0gWyd0aGlzJ107XG5cdFx0XG5cdFx0aWYoT2JqZWN0LmtleXMoZGF0YS5zdGF0ZSkuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdGFwcGVuZC5wdXNoKCdfc3RhdGUnKTtcblx0XHR9IGVsc2UgaWYoT2JqZWN0LmtleXMoZGF0YS5jb21wdXRlZCkuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdGFwcGVuZC5wdXNoKCdfY29tcHV0ZWQnKTtcblx0XHR9IGVsc2UgaWYoT2JqZWN0LmtleXMoZGF0YS5kYXRhKS5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdFx0YXBwZW5kLnB1c2goJ19kYXRhJyk7XG5cdFx0fSBlbHNlIGlmKE9iamVjdC5rZXlzKGRhdGEubWV0aG9kcykuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdGFwcGVuZC5wdXNoKCdfbWV0aG9kcycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vIHZhcmlhYmxlICR7bmFtZX1gKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRhcHBlbmQucHVzaChuYW1lKTtcblxuXHRcdG5hbWUgPSBhcHBlbmQuam9pbignLicpO1xuXHR9XG5cblx0aWYoaXNGdW5jdGlvbikge1xuXHRcdG5hbWUgPSBgJHtuYW1lfSgpYDtcblx0fVxuXG5cdGlkLm5hbWUgPSBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgaWQpXG57XG5cdGxldCBuYW1lID0gaWQubmFtZTtcblx0XG5cdGlmKG5hbWUubWF0Y2goL15cXCQvZykpXHR7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZGF0YS5zdGF0ZVtuYW1lXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElkZW50aWZpZXJOYW1lKGlkKVxue1xuXHRpZighaWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGxldCBuYW1lID0gaWQubmFtZTtcblxuXHRpZihuYW1lLm1hdGNoKC9eXFwkL2cpKVx0e1xuXHRcdHJldHVybiBuYW1lLnN1YnN0cmluZygxKVxuXHR9XG5cblx0cmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlT2JzZXJ2YWJsZUdldHRlcihkYXRhLCBpZClcbntcblx0aWYoIWlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIGlkKSkge1xuXHRcdHJldHVybiBpZDtcblx0fVxuXHRcblx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShpZCk7XG5cdGlkLm5hbWUgPSBgJHsgbmFtZSB9KClgO1xuXG5cdHJldHVybiBpZDtcbn0iLCJcblxuaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCJAYmFiZWwvcGFyc2VyXCI7XG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSBcIkBiYWJlbC9nZW5lcmF0b3JcIjtcblxuaW1wb3J0IHsgY3JlYXRlRGF0YSB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCBwYXJzZUNvbnRleHQgZnJvbSBcIi4vcGFyc2VDb250ZXh0XCI7XG5pbXBvcnQgcGFyc2VFeHByZXNzaW9uIGZyb20gXCIuL3BhcnNlRXhwcmVzc2lvblwiO1xuaW1wb3J0IHBhcnNlTWV0aG9kcyBmcm9tIFwiLi9wYXJzZU1ldGhvZHNcIjtcbmltcG9ydCBBc3RHZW5lcmF0b3IgZnJvbSBcIi4vQXN0R2VuZXJhdG9yXCI7XG5cblxuLyoqXG4gKiBDb21waWxlclxuICogQHBhcmFtICB7W3R5cGVdfSBzb3VyY2UgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVhY3RpdmVWYXJpYWJsZXMoY29udGV4dCwgc291cmNlKVxue1xuXHRsZXQgZGF0YSA9IGNyZWF0ZURhdGEoY29udGV4dCk7XG5cblx0Y29uc3QgYXN0ID0gcGFyc2VyLnBhcnNlKHNvdXJjZSwge1xuXHRcdHNvdXJjZVR5cGU6IFwidW5hbWJpZ3VvdXNcIixcblx0XHRzdHJpY3RNb2RlOiBmYWxzZSxcblx0fSk7XG5cblx0cGFyc2VDb250ZXh0KGRhdGEsIGFzdCk7XG5cblx0bGV0IHJlYWN0aXZlX3ZhcmlhYmxlcyA9IFtdO1xuXG5cdHJlYWN0aXZlX3ZhcmlhYmxlcyA9IHJlYWN0aXZlX3ZhcmlhYmxlc1xuXHRcdC5jb25jYXQoT2JqZWN0LmtleXMoZGF0YS5zdGF0ZSkpXG5cdFx0LmNvbmNhdChPYmplY3Qua2V5cyhkYXRhLmNvbXB1dGVkKSk7XG5cblx0cmV0dXJuIHtcblx0XHRyZWFjdGl2ZV92YXJpYWJsZXMsXG5cdFx0ZGF0YSxcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVTY3JpcHQoY29udGV4dCwgc291cmNlKVxue1xuXHRsZXQgZGF0YSA9IGNyZWF0ZURhdGEoKTtcblx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcblx0Y29uc3QgYXN0ID0gcGFyc2VyLnBhcnNlKHNvdXJjZSwge1xuXHRcdHNvdXJjZVR5cGU6IFwidW5hbWJpZ3VvdXNcIixcblx0XHRzdHJpY3RNb2RlOiBmYWxzZSxcblx0fSk7XG5cblx0cGFyc2VDb250ZXh0KGRhdGEsIGFzdCk7XG5cdHBhcnNlRXhwcmVzc2lvbihkYXRhLCBhc3QpO1xuXG5cdGNvbnNvbGUubG9nKGRhdGEpO1xuXG5cdHJldHVybiBnZW5lcmF0ZShBc3RHZW5lcmF0b3IoZGF0YSksIHtcblx0XHRyZXRhaW5MaW5lczogZmFsc2UsXG5cdFx0Y29tcGFjdDogZmFsc2UsXG5cdFx0bWluaWZpZWQ6IGZhbHNlLFxuXHRcdGNvbmNpc2U6IGZhbHNlLFxuXHRcdHF1b3RlczogXCJkb3VibGVcIixcblx0fSwgc291cmNlKTtcbn1cbiIsImltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmltcG9ydCB7XG5cdEZ1bmN0aW9uRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQge1xuXHRnZXRJZGVudGlmaWVyTmFtZSxcblx0aXNJZGVudGlmaWVyUmVhY3RpdmUsXG5cdG1ha2VPYnNlcnZhYmxlR2V0dGVyLFxufSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbi8vIEdldCBhbGwgZGF0YVxuLy8gTWFyayBkYXRhIGFzIHJlYWN0aXZlIG9yIHN0YXRlbGVzc1xubGV0IGlzRnVuY3Rpb25EZWNsYXJhdGlvbiA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdFZhcmlhYmxlcyAoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlLmlkO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBwYXRoLm5vZGUuaW5pdDtcblxuXHRcdFx0XHRpZihpc0Z1bmN0aW9uRGVjbGFyYXRpb24gfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXG5cdFx0XHRcdGxldCB0eXBlID0gbnVsbDtcblx0XHRcdFx0aWYoWydBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbicsICdGdW5jdGlvbkV4cHJlc3Npb24nXS5pbmNsdWRlcyh2YWx1ZS50eXBlKSkge1xuXHRcdFx0XHRcdHR5cGUgPSAnY29tcHV0ZWQnO1xuXHRcdFx0XHR9IGVsc2UgaWYoaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgaWQpKSB7XG5cdFx0XHRcdFx0dHlwZSA9ICdzdGF0ZSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHlwZSA9ICdkYXRhJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRhdGFbdHlwZV1bbmFtZV0gPSB2YWx1ZTtcblx0XHQgICAgfSxcblx0XHR9LFxuXHRcdEFycm93RnVuY3Rpb25FeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpc0Z1bmN0aW9uRGVjbGFyYXRpb24gPSB0cnVlO1xuXHRcdFx0fSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0aXNGdW5jdGlvbkRlY2xhcmF0aW9uID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEZ1bmN0aW9uRGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlzRnVuY3Rpb25EZWNsYXJhdGlvbiA9IHRydWU7XG5cblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlLmlkO1xuXHRcdFx0XHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblxuXHRcdFx0XHRkYXRhLm1ldGhvZHNbbmFtZV0gPSBGdW5jdGlvbkV4cHJlc3Npb24obnVsbCwgcGF0aC5ub2RlLnBhcmFtcywgcGF0aC5ub2RlLmJvZHkpO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRpc0Z1bmN0aW9uRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGF0YSwgYXN0KVxue1xuXHR0cmF2ZXJzZShhc3QsIGNvbGxlY3RWYXJpYWJsZXMoZGF0YSkpO1xufSIsImltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmltcG9ydCB7XG5cdGlkZW50aWZpZXIsXG5cdENhbGxFeHByZXNzaW9uLFxuXHRCaW5hcnlFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7XG5cdGdldElkZW50aWZpZXJOYW1lLFxuXHRzZXRJZGVudGlmaWVyQ29udGV4dCxcblx0aXNJZGVudGlmaWVyUmVhY3RpdmUsXG5cdGNoZWNrRnVuY3Rpb25Bcmd1bWVudERlY2xhcmF0aW9uXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24oZGF0YSwgYXN0LCBjdHggPSAndGhpcycpXG57XG5cdHZhciBvYnNlcnZhYmxlID0gZmFsc2U7XG5cdHZhciBjaGFuZ2VkID0gZmFsc2U7XG5cblx0bGV0IEZ1bmN0aW9uRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0SW1wb3J0RGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGEuaW1wb3J0c1twYXRoLm5vZGUuc291cmNlLnZhbHVlXSA9IHBhdGgubm9kZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdEZ1bmN0aW9uRGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0RnVuY3Rpb25EZWNsYXJhdGlvbiA9IHRydWU7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aCkge1xuXHRcdCAgICBcdEZ1bmN0aW9uRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0Ly8gbWFrZSByZWFjdGl2ZSB2YXJpYWJsZSBhc3NpZ25tZW50IGFzIGZ1bmN0aW9uXG5cdFx0QXNzaWdubWVudEV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKCFpc0lkZW50aWZpZXJSZWFjdGl2ZShkYXRhLCBwYXRoLm5vZGUubGVmdCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgYXJncyA9IFtwYXRoLm5vZGUucmlnaHRdO1xuXG5cdFx0XHRcdGlmKHBhdGgubm9kZS5vcGVyYXRvci5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0YXJncyA9IFtcblx0XHRcdFx0XHRcdEJpbmFyeUV4cHJlc3Npb24ocGF0aC5ub2RlLm9wZXJhdG9yWzBdLCBwYXRoLm5vZGUubGVmdCwgcGF0aC5ub2RlLnJpZ2h0KVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUocGF0aC5ub2RlLmxlZnQpO1xuXHRcdFx0XHRwYXRoLnJlcGxhY2VXaXRoKFxuXHRcdFx0XHRcdENhbGxFeHByZXNzaW9uKGlkZW50aWZpZXIobmFtZSksIGFyZ3MpXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0b2JzZXJ2YWJsZSA9IHRydWU7XG5cdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0Y2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb24oZGF0YSwgcGF0aCk7XG5cdFx0XHRcdGlmKHNldElkZW50aWZpZXJDb250ZXh0KGN0eCwgZGF0YSwgcGF0aCkpIHtcblx0XHRcdFx0XHRvYnNlcnZhYmxlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRhc3QsXG5cdFx0b2JzZXJ2YWJsZSxcblx0XHRjaGFuZ2VkLFxuXHR9XG59IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuaW1wb3J0IHtcblx0aWRlbnRpZmllcixcblx0Q2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Z2V0SWRlbnRpZmllck5hbWUsXG5cdGlzSWRlbnRpZmllclJlYWN0aXZlLFxuXHRtYWtlT2JzZXJ2YWJsZUdldHRlcixcblx0bWFrZUNvbnRleHRhYmxlLFxufSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmxldCBmdW5jdGlvbkJsb2NrSGFuZGxpbmcgPSBmYWxzZTtcbmxldCBhc3NpZ25tZW50SGFuZGxpbmcgPSBmYWxzZTtcbmxldCB2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcgPSBmYWxzZTtcbmxldCBzaG91bGRBc3NpZ25tZW50SGFuZGxlID0gZmFsc2U7XG5sZXQgaGFzRnVuY3Rpb25SZWFjdGl2ZSA9IGZhbHNlO1xubGV0IG1lbWJlckhhbmRsaW5nID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsZWN0TWV0aG9kcyAoZGF0YSkge1xuXHRyZXR1cm4ge1xuXHRcdC8vIHNhdmUgaW1wb3J0c1xuXHRcdEltcG9ydERlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdGRhdGEuaW1wb3J0c1twYXRoLm5vZGUuc291cmNlLnZhbHVlXSA9IHBhdGgubm9kZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFRyYW5zbGF0ZSB1c3VhbCB2YXJpYWJsZXMgdG8gcmVhY3RpdmVcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXHRcdCAgICAgICAgaWYoZnVuY3Rpb25CbG9ja0hhbmRsaW5nKSB7XG5cdFx0ICAgICAgICBcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXG5cdFx0ICAgICAgICBcdGlmKGRhdGEuc3RhdGVbbmFtZV0gJiYgIWFzc2lnbm1lbnRIYW5kbGluZyAmJiAhWydDYWxsRXhwcmVzc2lvbiddLmluY2x1ZGVzKHBhdGguY29udGFpbmVyLnR5cGUpKSB7XG5cdFx0ICAgICAgICBcdFx0aGFzRnVuY3Rpb25SZWFjdGl2ZSA9IHRydWU7XG5cdFx0ICAgICAgICBcdH1cblxuXHRcdCAgICAgICAgXHRpZighWydBc3NpZ25tZW50RXhwcmVzc2lvbicsICdDYWxsRXhwcmVzc2lvbiddLmluY2x1ZGVzKHBhdGguY29udGFpbmVyLnR5cGUpICYmICF2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcpIHtcblx0XHQgICAgICAgIFx0XHRtYWtlT2JzZXJ2YWJsZUdldHRlcihkYXRhLCBpZCk7XG5cdFx0XHQgICAgICAgIH1cblxuXHRcdFx0ICAgICAgICBpZighdmFyaWFibGVEZWNsYXJhdGlvbkhhbmRsaW5nICYmICFtZW1iZXJIYW5kbGluZykge1xuXHRcdFx0ICAgICAgICBcdG1ha2VDb250ZXh0YWJsZShkYXRhLCBpZCk7XG5cdFx0XHQgICAgICAgIH1cblxuXHRcdCAgICAgICAgfVxuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpIHtcblx0XHQgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiSWRlbnRpZmllciBleGl0IGNhbGxlZFwiLCBwYXRoLm5vZGUubmFtZSk7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdFxuXHRcdENhbGxFeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdG1lbWJlckhhbmRsaW5nID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRleGl0KHBhdGgpIHtcblx0XHRcdFx0bWVtYmVySGFuZGxpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdE1lbWJlckV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0bWVtYmVySGFuZGxpbmcgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXHRcdFx0XHRtZW1iZXJIYW5kbGluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRWYXJpYWJsZURlY2xhcmF0b3I6IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0dmFyaWFibGVEZWNsYXJhdGlvbkhhbmRsaW5nID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRleGl0KHBhdGgpIHtcblx0XHRcdFx0dmFyaWFibGVEZWNsYXJhdGlvbkhhbmRsaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBNYWtlIFxuXHRcdCB2ID0gdiArIDFcblx0XHQgVG9cblx0XHQgdih2KCkgKyAxKVxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0RXhwcmVzc2lvblN0YXRlbWVudDoge1xuXHRcdFx0ZXhpdChwYXRoKSB7XG5cdFx0XHRcdGlmKHBhdGgubm9kZS5leHByZXNzaW9uLnR5cGUgPT09ICdBc3NpZ25tZW50RXhwcmVzc2lvbicpIHtcblx0XHRcdFx0XHRsZXQgZXhwcmVzc2lvbiA9IHBhdGgubm9kZS5leHByZXNzaW9uO1xuXHRcdFx0XHRcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoZXhwcmVzc2lvbi5sZWZ0KTtcblx0XHRcdFx0XHRwYXRoLnJlcGxhY2VXaXRoKFxuXHRcdFx0XHRcdFx0Q2FsbEV4cHJlc3Npb24oaWRlbnRpZmllcihuYW1lKSwgW2V4cHJlc3Npb24ucmlnaHRdKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdEFzc2lnbm1lbnRFeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdGFzc2lnbm1lbnRIYW5kbGluZyA9IHRydWU7XG5cdFx0XHRcdGlmKGlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIHBhdGgubm9kZS5sZWZ0KSkge1xuXHRcdFx0XHRcdHNob3VsZEFzc2lnbm1lbnRIYW5kbGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cdFx0XHRcdGFzc2lnbm1lbnRIYW5kbGluZyA9IGZhbHNlO1xuXHRcdFx0XHRzaG91bGRBc3NpZ25tZW50SGFuZGxlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBIYW5kbGUgZnVuY3Rpb25cblx0XHQgKiBBZGQgdGhlbSB0byBtZXRob2RzIGFuZCBjb21wdXRlZCBwcm9wc1xuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0QmxvY2tTdGF0ZW1lbnQ6IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0aWYocGF0aC5wYXJlbnQudHlwZSA9PT0gJ0Z1bmN0aW9uRGVjbGFyYXRpb24nKSB7XG5cdFx0ICAgIFx0XHRmdW5jdGlvbkJsb2NrSGFuZGxpbmcgPSB0cnVlO1xuXHRcdCAgICBcdH1cblx0XHQgICAgfSxcblx0XHQgICAgZXhpdChwYXRoKSB7XG5cdFx0ICAgIFx0aWYoIWZ1bmN0aW9uQmxvY2tIYW5kbGluZyB8fCBwYXRoLnBhcmVudC50eXBlICE9PSAnRnVuY3Rpb25EZWNsYXJhdGlvbicpIHtcblx0XHQgICAgXHRcdHJldHVybjtcblx0XHQgICAgXHR9XG5cblx0XHQgICAgXHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKHBhdGguY29udGFpbmVyLmlkKTtcblx0XHQgICAgXHRpZihoYXNGdW5jdGlvblJlYWN0aXZlKSB7XG5cdFx0ICAgIFx0XHRkYXRhLmNvbXB1dGVkW25hbWVdID0gcGF0aC5ub2RlO1xuXHRcdCAgICBcdH0gZWxzZSB7XG5cdFx0ICAgIFx0XHRkYXRhLm1ldGhvZHNbbmFtZV0gPSBwYXRoLmNvbnRhaW5lcjtcblx0XHQgICAgXHR9XG5cblx0XHQgICAgXHRoYXNGdW5jdGlvblJlYWN0aXZlID0gZmFsc2U7XG5cdFx0ICAgIFx0ZnVuY3Rpb25CbG9ja0hhbmRsaW5nID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGF0YSwgYXN0KVxue1xuXG5cdHRyYXZlcnNlKGFzdCwgY29sbGVjdE1ldGhvZHMoZGF0YSkpO1xufSIsImltcG9ydCB7IHBhcnNlT3B0aW9ucywgcGFyc2VPcHRpb25LZXksIHBhcnNlT3B0aW9uVmFsdWUgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCB7IF8gfSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgcGFyc2VTdGF0ZW1lbnQgfSBmcm9tICcuL3BhcnNlRnVuY3Rpb25zJztcbmltcG9ydCB7IGV4cHJlc3Npb24gfSBmcm9tICcuL2V4cHJlc3Npb24nO1xuXG5leHBvcnQgdmFyIEhJRCA9IDA7XG5cbmV4cG9ydCBjb25zdCBpc05vblBocmFzaW5nVGFnID0gW1xuXHQnYWRkcmVzcycsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2Jhc2UnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2NhcHRpb24nLCAnY29sJywgJ2NvbGdyb3VwJyxcblx0J2RkJywgJ2RldGFpbHMnLCAnZGlhbG9nJywgJ2RpdicsICdkbCcsICdkdCcsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb290ZXInLFxuXHQnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdsZWdlbmQnLFxuXHQnbGknLCAnbWVudWl0ZW0nLCAnbWV0YScsICdvcHRncm91cCcsICdvcHRpb24nLCAncGFyYW0nLCAncnAnLCAncnQnLCAnc291cmNlJywgJ3N0eWxlJywgJ3N1bW1hcnknLFxuXHQndGJvZHknLCAndGQnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGl0bGUnLCAndHInLCAndHJhY2snXG5dO1xuXG52YXIgSUZfU1RBVEVNRU5UX1NUQVJURUQgPSBmYWxzZTtcblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50Q29kZSh0YWcsIG9wdGlvbnMsIGNoaWxkcmVuID0gW10pXG57XG5cdGlmKHRhZyA9PT0gJ3RlbXBsYXRlJykge1xuXHRcdHJldHVybiBgWyR7IGNoaWxkcmVuLmpvaW4oJywnKSB9XWA7XG5cdH1cblx0XG5cdHJldHVybiBgaCgnJHsgdGFnIH0nLCAkeyBvcHRpb25zIH0sIFskeyBjaGlsZHJlbi5qb2luKCcsJykgfV0pYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVxue1xuXHRjb25zdHJ1Y3Rvcih7IHRhZyA9IG51bGwsIGF0dHJzID0gbnVsbCwgY2hpbGRyZW4gPSBbXSB9KVxuXHR7XG5cdFx0dGhpcy5oaWQgPSArK0hJRDtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLmF0dHJzID0gYXR0cnM7XG5cdFx0dGhpcy5vcHRpb25zID0gcGFyc2VPcHRpb25zKGF0dHJzKTtcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdFx0XG5cdFx0dGhpcy5wcmV2U2libGluZyA9IG51bGw7XG5cdFx0dGhpcy5uZXh0U2libGluZyA9IG51bGw7XG5cdFx0Ly8gaWZcblx0XHR0aGlzLmlmX3N0YXRlbWVudCA9IGZhbHNlO1xuXHR9XG5cblx0Ly8gZ2V0Q29udGV4dChjdXJyZW50Q29udGV4dClcblx0Ly8ge1xuXHQvLyBcdGxldCBjdHggPSBudWxsO1xuXG5cdC8vIFx0dHJ5IHtcblx0Ly8gXHRcdGN0eCA9IFNpbnVvdXMuZ2V0Q29tcG9uZW50KHRoaXMudGFnKTtcblx0Ly8gXHR9IGNhdGNoKGVycikge31cblxuXHQvLyBcdGlmKGN0eCA9PT0gbnVsbCkge1xuXHQvLyBcdFx0Y3R4ID0gY3VycmVudENvbnRleHQ7XG5cdC8vIFx0fVxuXG5cdC8vIFx0cmV0dXJuIGN0eDtcblx0Ly8gfVxuXHRzZXRTaWJsaW5ncygpXG5cdHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMuY2hpbGRyZW5baSArIDFdKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW5baV0ubmV4dFNpYmxpbmcgPSB0aGlzLmNoaWxkcmVuW2kgKyAxXTtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbltpICsgMV0ucHJldlNpYmxpbmcgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXHRcdFx0fVxuXG5cdFx0XHRpZih0aGlzLmNoaWxkcmVuW2ldIGluc3RhbmNlb2YgTm9kZSkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuW2ldLnNldFNpYmxpbmdzKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGlzQ29tcG9uZW50KClcblx0e1xuXHRcdHJldHVybiAhaXNOb25QaHJhc2luZ1RhZy5pbmNsdWRlcyh0aGlzLnRhZyk7XG5cdH1cblxuXHR0b0FTVChjb250ZXh0ID0gbnVsbCwgaHlkcmF0ZSA9IGZhbHNlKVxuXHR7XG5cdFx0bGV0IGNvZGUgPSAnJztcblx0XHRsZXQgY2hpbGRyZW4gPSBbXTtcblx0XHRsZXQgc2hvdWxkSHlkYXJhdGUgPSBmYWxzZTtcblx0XHRsZXQgc2hvdWxkT3B0aW9uc0h5ZHJhdGUgPSBmYWxzZTtcblx0XHQvLyBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpO1xuXG5cdFx0Ly8gY29uc29sZS53YXJuKCdbMV0nLCBjb250ZXh0Lm5hbWUsIHNob3VsZEh5ZGFyYXRlKTtcblx0XHQvKipcblx0XHQgKiBUcmFuc2xhdGUgY2hpbGRyZW4gdG8gaHlwZXJzY3JpcHRcblx0XHQgKiBAcGFyYW0gIHtbdHlwZV19IHZhciBpICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cblx0XHQgKiBAcmV0dXJuIHtbdHlwZV19ICAgICBbZGVzY3JpcHRpb25dXG5cdFx0ICovXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXHRcdFx0bGV0IHsgdmFsdWUsIHN0YXRlZnVsbCB9ID0gY2hpbGQudG9BU1QoY29udGV4dCwgaHlkcmF0ZSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnW2NoaWxkXScsIGNoaWxkLCBzdGF0ZWZ1bGwpO1xuXHRcdFx0aWYoc3RhdGVmdWxsKSB7XG5cdFx0XHRcdHNob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y2hpbGRyZW4ucHVzaCh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0bGV0IG9wdGlvbnMgPSAnJztcblxuXHRcdC8vIGNvbnNvbGUud2FybignWzJdJywgY29udGV4dC5uYW1lLCBzaG91bGRIeWRhcmF0ZSk7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5vcHRpb25zKSB7XG5cdFx0XHRsZXQgeyB2YWx1ZSwgc3RhdGVmdWxsIH0gPSBwYXJzZU9wdGlvblZhbHVlKGNvbnRleHQsIGtleSwgdGhpcy5vcHRpb25zW2tleV0pO1xuXHRcdFx0XG5cdFx0XHRpZihzdGF0ZWZ1bGwpIHtcblx0XHRcdFx0c2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihzdGF0ZWZ1bGwgfHwgIWh5ZHJhdGUgfHwga2V5ID09PSAnZGF0YS1oaWQnKSB7XG5cdFx0XHRcdG9wdGlvbnMgKz0gYCR7IHBhcnNlT3B0aW9uS2V5KGtleSkgfTogJHsgdmFsdWUgfSxgO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihzdGF0ZWZ1bGwgJiYgaHlkcmF0ZSkge1xuXHRcdFx0XHRzaG91bGRPcHRpb25zSHlkcmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cblx0XHRzaG91bGRIeWRhcmF0ZSA9IHRoaXMuaXNDb21wb25lbnQgfHwgc2hvdWxkSHlkYXJhdGU7XG5cblxuXHRcdGlmKHNob3VsZEh5ZGFyYXRlKSB7XG5cdFx0XHRvcHRpb25zICs9IGBpZDogY3R4LmdldFVJRCgkeyB0aGlzLmhpZCB9KSxgO1xuXHRcdH1cblxuXHRcdGlmKHNob3VsZE9wdGlvbnNIeWRyYXRlKSB7XG5cdFx0XHRvcHRpb25zICs9IGBfczogdHJ1ZSxgO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUud2FybihoeWRyYXRlLCBjb250ZXh0Lm5hbWUsIHRoaXMudGFnLCBzaG91bGRIeWRhcmF0ZSA/IG9wdGlvbnMgOiAnJyk7XG5cblx0XHRvcHRpb25zID0gYHske29wdGlvbnN9fWA7XG5cdFx0XG5cdFx0bGV0IGZuX2dlbmVyYXRlZCA9IGZhbHNlO1xuXG5cdFx0bGV0IHN0YXRlbWVudCA9IHBhcnNlU3RhdGVtZW50KHRoaXMpO1xuXG5cdFx0aWYoc3RhdGVtZW50LmlzKSB7XG5cdFx0XHRcblx0XHRcdGxldCBjb25kaXRpb24gPSBleHByZXNzaW9uKGNvbnRleHQsIHN0YXRlbWVudC5jb25kaXRpb24sIHRydWUpXG5cblx0XHRcdGlmKHN0YXRlbWVudC5zdGFydCkge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzKVxuXHRcdFx0XHRjb2RlICs9IGBzdGF0ZW1lbnQoYDtcblx0XHRcdH1cblxuXHRcdFx0Y29kZSArPSBgICR7IGNvbmRpdGlvbi52YWx1ZSB9LCAkeyBnZXRDb21wb25lbnRDb2RlKHRoaXMudGFnLCBvcHRpb25zLCBjaGlsZHJlbikgfWA7XG5cblx0XHRcdGlmKHN0YXRlbWVudC5lbmQpIHtcblx0XHRcdFx0Y29kZSArPSBgKWA7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvZGUgKz0gZ2V0Q29tcG9uZW50Q29kZSh0aGlzLnRhZywgb3B0aW9ucywgY2hpbGRyZW4pO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuYXR0cnMsIHRoaXMuaWZfc3RhdGVtZW50LCBzdGF0ZW1lbnQpXG5cblx0XHQvLyBpZihJRl9TVEFURU1FTlRfU1RBUlRFRCAmJiAhdGhpcy5hdHRyc1sndi1pZiddKSB7XG5cdFx0Ly8gXHRmbl9nZW5lcmF0ZWQgPSB0cnVlO1xuXHRcdC8vIFx0Y29kZSArPSBgKWA7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gaWYoSUZfU1RBVEVNRU5UX1NUQVJURUQpIHtcblx0XHQvLyBcdGxldCBjb25kaXRpb24gPSB0aGlzLmF0dHJzWyd2LWlmJ10gfHwgdGhpcy5hdHRyc1sndi1lbHNlLWlmJ10gfHwgdGhpcy5hdHRyc1sndi1lbHNlJ107XG5cdFx0Ly8gXHRsZXQgcmVzID0gW107XG5cdFx0Ly8gXHRpZighdGhpcy5hdHRyc1sndi1lbHNlJ10pIHtcblx0XHQvLyBcdFx0cmVzLnB1c2goY29uZGl0aW9uKVxuXHRcdC8vIFx0fVxuXG5cdFx0Ly8gXHRyZXMucHVzaChnZXRDb21wb25lbnRDb2RlKHRoaXMudGFnLCBvcHRpb25zLCBjaGlsZHJlbikpO1xuXG5cdFx0Ly8gXHRpZighdGhpcy5hdHRyc1sndi1lbHNlJ10pIHtcblx0XHQvLyBcdFx0cmVzLnB1c2goJycpXG5cdFx0Ly8gXHR9XG5cdFx0XHRcblx0XHQvLyBcdGNvZGUgKz0gcmVzLmpvaW4oJywnKTtcblxuXHRcdC8vIFx0Y29uc29sZS5sb2codGhpcy5hdHRycywgY29kZSlcblx0XHQvLyB9IFxuXG5cdFx0Ly8gaWYoIWZuX2dlbmVyYXRlZCkge1xuXHRcdFx0XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gY29uc29sZS53YXJuKCdbM10nLCBjb250ZXh0Lm5hbWUsIHNob3VsZEh5ZGFyYXRlKTtcblx0XHQvLyBjb25zb2xlLmxvZygnW21haW5dJywgdGhpcy50YWcsIHNob3VsZEh5ZGFyYXRlKTtcblxuXHRcdGlmKGh5ZHJhdGUgJiYgIXNob3VsZEh5ZGFyYXRlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2YWx1ZTogXyxcblx0XHRcdFx0c3RhdGVmdWxsOiBmYWxzZSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiBjb2RlLFxuXHRcdFx0c3RhdGVmdWxsOiBzaG91bGRIeWRhcmF0ZSxcblx0XHR9O1xuXHR9XG59IiwiaW1wb3J0IHsgcGFyc2VPcHRpb25WYWx1ZSB9IGZyb20gJy4vYXR0cnMnO1xuaW1wb3J0IHsgXyB9IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHROb2RlXG57XG5cdGNvbnN0cnVjdG9yKHRleHQpXG5cdHtcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHR9XG5cblx0dG9BU1QoY29udGV4dCA9IG51bGwsIGh5ZHJhdGUgPSBmYWxzZSlcblx0e1xuXHRcdGxldCB7IHZhbHVlLCBzdGF0ZWZ1bGwgfSA9IHBhcnNlT3B0aW9uVmFsdWUoY29udGV4dCwgJ190JywgdGhpcy50ZXh0KTtcblx0XHQvLyBjb25zb2xlLmxvZyhgdCgke3RoaXMudGV4dH0pYCwgdmFsdWUsIHN0YXRlZnVsbClcblxuXHRcdGlmKGh5ZHJhdGUgJiYgIXN0YXRlZnVsbCkge1xuXHRcdFx0dmFsdWUgPSBfO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZSxcblx0XHRcdHN0YXRlZnVsbCxcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgeyBleHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcblxuY29uc3QgQXR0cnNNYXAgPSB7XG5cdCdzdHlsZSc6ICdzdGF0aWNTdHlsZScsXG5cdCdjbGFzcyc6ICdzdGF0aWNDbGFzcycsXG5cdCc6c3R5bGUnOiAnZHluYW1pY1N0eWxlJyxcblx0JzpjbGFzcyc6ICdkeW5hbWljQ2xhc3MnLFxufTtcblxuY29uc3QgSFRNTEF0dHJpYnV0ZXMgPSBbJ2lkJywgJ25hbWUnLCAndmFsdWUnLCAncGxhY2Vob2xkZXInXTtcblxuZnVuY3Rpb24gcGFyc2VPcHRpb25WYWx1ZShjb250ZXh0LCBrZXksIHZhbHVlKVxue1xuXHRsZXQgc3RhdGVmdWxsID0gZmFsc2U7XG5cdGxldCBpc0V4cHJlc3Npb24gPSBmYWxzZTtcblx0bGV0IG9ic2VydmFibGVDYWxsID0gdHJ1ZTtcblxuXHRpZihrZXlbMF0gPT09ICdAJykge1xuXHRcdHN0YXRlZnVsbCA9IHRydWU7XG5cdFx0aXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxuXG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRvYnNlcnZhYmxlQ2FsbCA9IGZhbHNlO1xuXHR9XG5cblx0aWYoa2V5WzBdID09PSAnXycpIHtcblx0XHR2YWx1ZSA9ICdgJyArIHZhbHVlLnJlcGxhY2UoL3t7KC4qKX19L2csICckeyQxfScpICsgJ2AnO1xuXHRcdGlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cblxuXHRsZXQgZXhwID0gZXhwcmVzc2lvbihjb250ZXh0LCB2YWx1ZSwgaXNFeHByZXNzaW9uLCBvYnNlcnZhYmxlQ2FsbCk7XG5cdFxuXHR2YWx1ZSA9IGV4cC52YWx1ZTtcblxuXHRpZighc3RhdGVmdWxsICYmIGV4cC5zdGF0ZWZ1bGwpIHtcblx0XHRzdGF0ZWZ1bGwgPSB0cnVlO1xuXHR9XG5cblx0XG5cblx0Ly8gaWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHQvLyBcdHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXHQvLyB9IGVsc2Uge1xuXHQvLyBcdHZhbHVlID0gYFwiJHt2YWx1ZX1cImA7XG5cdC8vIH1cblxuXHRcblxuXHRyZXR1cm4ge1xuXHRcdHZhbHVlLFxuXHRcdHN0YXRlZnVsbCxcblx0fTtcbn1cblxuZnVuY3Rpb24gcGFyc2VPcHRpb25LZXkoa2V5LCB2YWx1ZSlcbntcblx0aWYoQXR0cnNNYXBba2V5XSkge1xuXHRcdHJldHVybiBBdHRyc01hcFtrZXldO1xuXHR9IGVsc2UgaWYoa2V5WzBdID09PSAnQCcpIHtcblx0XHRyZXR1cm4ga2V5LnJlcGxhY2UoL0AvZywgJ29uJyk7XG5cdH1cblxuXHRyZXR1cm4ga2V5O1xufVxuXG5mdW5jdGlvbiBwYXJzZVN0eWxlcyhzdHJpbmcpXG57XG5cdGxldCBzdHlsZXMgPSB7fTtcblx0bGV0IHBhaXJzID0gc3RyaW5nLnJlcGxhY2UoL1xccy9nLCAnJykuc3BsaXQoJzsnKTtcblx0XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgdG1wID0gcGFpcnNbaV0uc3BsaXQoJzonKTtcblx0XHRpZih0bXAubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRzdHlsZXNbdG1wWzBdXSA9IHRtcFsxXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZU9wdGlvbktleSh2YXJpYWJsZSlcbntcblx0aWYodmFyaWFibGUubWF0Y2goL1xcLS9nKSkge1xuXHRcdHZhcmlhYmxlID0gYCcke3ZhcmlhYmxlfSdgO1xuXHR9XG5cblx0cmV0dXJuIHZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBwYXJzZU9wdGlvbnMoYXR0cnMpXG57XG5cdGxldCBvcHRpb25zID0ge307XG5cblx0Zm9yKGxldCBrZXkgaW4gYXR0cnMpXG5cdHtcblx0XHRsZXQgdmFsdWUgPSBhdHRyc1trZXldO1xuXHRcdGxldCBvcHRpb25fa2V5ID0gcHJlcGFyZU9wdGlvbktleShrZXkpO1xuXG5cdFx0aWYoa2V5Lm1hdGNoKC9edlxcLS9nKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8vIElzIGh0bWwgYXR0clxuXHRcdGlmKEhUTUxBdHRyaWJ1dGVzLmluY2x1ZGVzKGtleSkgfHwgT2JqZWN0LmtleXMoQXR0cnNNYXApLmluY2x1ZGVzKGtleSkgfHwga2V5Lm1hdGNoKC9kYXRhXFwtL2cpIHx8IGtleS5tYXRjaCgvQC9nKSkge1xuXHRcdFx0aWYoa2V5ID09PSAnc3R5bGUnKSB7XG5cdFx0XHRcdHZhbHVlID0gcGFyc2VTdHlsZXModmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHRvcHRpb25zW29wdGlvbl9rZXldID0gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKCFvcHRpb25zLnByb3BzKSB7XG5cdFx0XHRcdG9wdGlvbnMucHJvcHMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0b3B0aW9ucy5wcm9wc1tvcHRpb25fa2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBwYXJzZUF0dHJzKHN0cmluZylcbntcblx0aWYodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycgfHwgc3RyaW5nID09ICcnKSB7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKS50cmltKCk7XG5cblx0bGV0IHBhaXJzID0gc3RyaW5nLm1hdGNoKC8oW15cXHNdKik9W1wiJ10oLio/KVtcIiddfChbXFx3XFwtXSspL2cpXG5cdGxldCBhdHRycyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgdG1wID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcblx0XHRsZXQgbmFtZSA9IHRtcFswXTtcblx0XHRsZXQgdmFsdWUgPSB0bXBbMV0gPyB0bXBbMV0uc3Vic3RyaW5nKDEsIHRtcFsxXS5sZW5ndGggLSAxKSA6IHRydWU7XG5cdFx0YXR0cnNbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG5cdHJldHVybiBhdHRycztcbn1cblxuZXhwb3J0IHsgcGFyc2VBdHRycywgcGFyc2VPcHRpb25zLCBwYXJzZU9wdGlvbktleSwgcGFyc2VPcHRpb25WYWx1ZSB9OyIsImltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiQGJhYmVsL3BhcnNlclwiO1xuaW1wb3J0IGdlbmVyYXRlIGZyb20gXCJAYmFiZWwvZ2VuZXJhdG9yXCI7XG5pbXBvcnQgcGFyc2VFeHByZXNzaW9uIGZyb20gXCIuLi9zY3JpcHQvcGFyc2VFeHByZXNzaW9uXCI7XG5cbmltcG9ydCB7XG5cdGlkZW50aWZpZXIsXG5cdENhbGxFeHByZXNzaW9uLFxuXHRCaW5hcnlFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7XG5cdGdldElkZW50aWZpZXJOYW1lLFxuXHRzZXRJZGVudGlmaWVyQ29udGV4dCxcblx0aXNJZGVudGlmaWVyUmVhY3RpdmUsXG5cdGNoZWNrRnVuY3Rpb25Bcmd1bWVudERlY2xhcmF0aW9uXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5pbXBvcnQgeyBwcmVwYXJlT3B0aW9uS2V5IH0gZnJvbSAnLi9hdHRycyc7XG5cbmltcG9ydCB7IGhhc1N0YXRlLCBnZXRWYXJpYWJsZSB9IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uKGNvbnRleHQsIGNvZGUsIGlzRXhwcmVzc2lvbiA9IGZhbHNlLCBvYnNlcnZhYmxlQ2FsbCA9IHRydWUpXG57XG5cdGlmKHR5cGVvZiBjb2RlID09PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdGF0ZWZ1bGw6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IEpTT04uc3RyaW5naWZ5KGNvZGUpXG5cdFx0fTtcblx0fVxuXG5cdGNvZGUgPSBTdHJpbmcoY29kZSk7XG5cblx0Y29uc29sZS53YXJuKGNvZGUpO1xuXG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShjb2RlKTtcblxuXHRsZXQgeyBjaGFuZ2VkLCBvYnNlcnZhYmxlIH0gPSBwYXJzZUV4cHJlc3Npb24oY29udGV4dC5kYXRhLCBhc3QsICdjdHgnKTtcblxuXHRpZihjaGFuZ2VkKSB7XG5cdFx0Y29kZSA9IGdlbmVyYXRlKGFzdCwge1xuXHRcdFx0cmV0YWluTGluZXM6IHRydWUsXG5cdFx0XHRjb21wYWN0OiB0cnVlLFxuXHRcdFx0bWluaWZpZWQ6IHRydWUsXG5cdFx0XHRjb25jaXNlOiB0cnVlLFxuXHRcdFx0cXVvdGVzOiBcImRvdWJsZVwiLFxuXHRcdH0sIGNvZGUpLmNvZGU7XG5cblx0XHRcblx0XHQvLyBjbGVhbiBhcHBlbmRcblx0XHRjb2RlID0gY29kZS5yZXBsYWNlKC8oO3wsKSQvZywgJycpO1xuXG5cdFx0aWYoaXNFeHByZXNzaW9uKSB7XG5cdFx0XHRjb2RlID0gYCgpID0+IHsgcmV0dXJuICR7Y29kZX07IH1gO1xuXHRcdH1cblx0fVxuXG5cdGNvbnNvbGUubG9nKGNvZGUpO1xuXHRjb25zb2xlLmxvZygnLS0tLS0tLS0nKTtcblxuXHRyZXR1cm4ge1xuXHRcdHN0YXRlZnVsbDogb2JzZXJ2YWJsZSxcblx0XHR2YWx1ZTogY29kZVxuXHR9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cHJlc3Npb24oY29udGV4dCwgY29kZSwgZXhlY3V0ZSA9IGZhbHNlKVxuLy8ge1xuLy8gXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2UoY29kZSk7XG5cbi8vIFx0dmFyIGNoYW5nZWQgPSBmYWxzZTtcbi8vIFx0dmFyIHN0YXRlZnVsbCA9IGZhbHNlO1xuXG4vLyBcdHRyYXZlcnNlKGFzdCwge1xuLy8gXHRcdGVudGVyKHBhdGgpXG4vLyBcdFx0e1xuLy8gXHRcdFx0aWYocGF0aC5ub2RlLnR5cGUgPT09ICdJZGVudGlmaWVyJylcbi8vIFx0XHRcdHtcbi8vIFx0XHRcdFx0aWYoIVsna2V5JywgJ2xhYmVsJ10uaW5jbHVkZXMocGF0aC5rZXkpKSB7XG4vLyBcdFx0XHRcdFx0bGV0IG5hbWVCdWlsZGVyID0gW107XG5cbi8vIFx0XHRcdFx0XHRsZXQgdmFyaWFibGUgPSBwYXRoLm5vZGUubmFtZTtcbi8vIFx0XHRcdFx0XHRsZXQgdmFyaWFibGVXaXRoQ29udGV4dCA9IGdldFZhcmlhYmxlKGNvbnRleHQuZGF0YSwgdmFyaWFibGUpXG5cbi8vIFx0XHRcdFx0XHRpZihwYXRoLmNvbnRhaW5lci50eXBlID09PSAnQ2FsbEV4cHJlc3Npb24nKSB7XG4vLyBcdFx0XHRcdFx0XHR2YXJpYWJsZVdpdGhDb250ZXh0ID0gZmFsc2U7XG4vLyBcdFx0XHRcdFx0fVxuXG4vLyBcdFx0XHRcdFx0aWYodmFyaWFibGVXaXRoQ29udGV4dCkge1xuLy8gXHRcdFx0XHRcdFx0bmFtZUJ1aWxkZXIucHVzaCgnY3R4Jylcbi8vIFx0XHRcdFx0XHRcdG5hbWVCdWlsZGVyLnB1c2godmFyaWFibGVXaXRoQ29udGV4dCk7XG4vLyBcdFx0XHRcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdFx0XHRcdG5hbWVCdWlsZGVyLnB1c2godmFyaWFibGUpO1xuLy8gXHRcdFx0XHRcdH1cblxuLy8gXHRcdFx0XHRcdGlmKCF2YXJpYWJsZSkge1xuLy8gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAkeyB2YXJpYWJsZSB9IGluIGNvbnRleHQgJHsgY29udGV4dCB9YCk7XG4vLyBcdFx0XHRcdFx0fVxuXG4vLyBcdFx0XHRcdFx0aWYoY29udGV4dC5yZWFjdGl2ZV92YXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpKSB7XG4vLyBcdFx0XHRcdFx0XHRzdGF0ZWZ1bGwgPSB0cnVlO1xuLy8gXHRcdFx0XHRcdH1cblxuLy8gXHRcdFx0XHRcdHBhdGgubm9kZS5uYW1lID0gbmFtZUJ1aWxkZXIuam9pbignLicpICsgKGV4ZWN1dGUgPyAnKCknIDogJycpO1xuXG4vLyBcdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG4vLyBcdFx0XHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRcdFx0cGF0aC5ub2RlLm5hbWUgPSBwcmVwYXJlT3B0aW9uS2V5KHBhdGgubm9kZS5uYW1lKTtcbi8vIFx0XHRcdFx0fVxuLy8gXHRcdFx0fVxuLy8gXHRcdH1cbi8vIFx0fSk7XG5cbi8vIFx0Y29kZSA9IGdlbmVyYXRlKGFzdCwge1xuLy8gXHRcdHJldGFpbkxpbmVzOiB0cnVlLFxuLy8gXHRcdGNvbXBhY3Q6IHRydWUsXG4vLyBcdFx0bWluaWZpZWQ6IHRydWUsXG4vLyBcdFx0Y29uY2lzZTogdHJ1ZSxcbi8vIFx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG4vLyBcdH0sIGNvZGUpLmNvZGU7XG5cbi8vIFx0Ly8gY2xlYW4gYXBwZW5kXG4vLyBcdGNvZGUgPSBjb2RlLnJlcGxhY2UoLyg7fCwpJC9nLCAnJyk7XG5cbi8vIFx0aWYoY2hhbmdlZCAmJiBleGVjdXRlKSB7XG4vLyBcdFx0Y29kZSA9IGAoKSA9PiB7IHJldHVybiAke2NvZGV9OyB9YDtcbi8vIFx0fVxuXG4vLyBcdHJldHVybiB7XG4vLyBcdFx0c3RhdGVmdWxsLFxuLy8gXHRcdHZhbHVlOiBjb2RlXG4vLyBcdH1cbi8vIH0iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ25vZGUtaHRtbC1wYXJzZXInO1xuaW1wb3J0IE5vZGUsIHsgSElEIH0gZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBUZXh0Tm9kZSBmcm9tICcuL1RleHROb2RlJztcbmltcG9ydCB7IHBhcnNlQXR0cnMgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCBwYXJzZUZ1bmN0aW9ucyBmcm9tICcuL3BhcnNlRnVuY3Rpb25zJztcblxuZnVuY3Rpb24gZ2VuZXJhdGVUcmVlKG5vZGUsIGlzUm9vdCA9IGZhbHNlKVxue1xuXG5cdGxldCBjaGlsZHJlbiA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGNoaWxkID0gZ2VuZXJhdGVUcmVlKG5vZGUuY2hpbGROb2Rlc1tpXSwgZmFsc2UpO1xuXHRcdGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHR9XG5cblx0bGV0IGF0dHJzID0gcGFyc2VBdHRycyhub2RlLnJhd0F0dHJzKTtcblxuXHRpZihjaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgbm9kZS5yYXdUZXh0ICE9PSAnJykge1xuXHRcdHJldHVybiBuZXcgVGV4dE5vZGUobm9kZS5yYXdUZXh0KTtcblx0fVxuXG5cdHJldHVybiBuZXcgTm9kZSh7XG5cdFx0dGFnOiBub2RlLnRhZ05hbWUsXG5cdFx0YXR0cnM6IGF0dHJzLFxuXHRcdGNoaWxkcmVuOiBjaGlsZHJlbixcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlKGNvbnRleHQsIGNvZGUpXG57XG5cdC8vIGNvZGUgPSBwYXJzZUZ1bmN0aW9ucyhjb2RlKTtcblx0Ly8gY29uc29sZS53YXJuKFwiUEFSU0VcIiwgY29udGV4dC5uYW1lKVxuXHRjb2RlID0gY29kZS5yZXBsYWNlKC9cXHQvZywgJyAnKS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJyk7XG5cblx0Y29uc3Qgcm9vdCA9IHBhcnNlKGNvZGUpO1xuXG5cdHJvb3QucmVtb3ZlV2hpdGVzcGFjZSgpO1xuXG5cdC8vIEhJRCA9IDA7XG5cdGxldCB0cmVlID0gZ2VuZXJhdGVUcmVlKHJvb3QsIHRydWUpO1xuXG5cdHRyZWUuc2V0U2libGluZ3MoKTtcblx0XG5cdHRyZWUgPSB0cmVlLmNoaWxkcmVuO1xuXG5cdGxldCBhc3QgPSB7XG5cdFx0cmVuZGVyOiBbXSxcblx0XHRoeWRyYXRlOiBbXSxcblx0fVxuXG5cdGxldCByZXN1bHQgPSB7XG5cdFx0cmVuZGVyOiAnJyxcblx0XHRoeWRyYXRlOiAnJyxcblx0XHRzaG91bGRIeWRhcmF0ZTogZmFsc2UsXG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgcmVuZGVyQVNUID0gdHJlZVtpXS50b0FTVChjb250ZXh0LCBmYWxzZSk7XG5cdFx0bGV0IGh5ZHJhdGlvbkFTVCA9IHRyZWVbaV0udG9BU1QoY29udGV4dCwgdHJ1ZSk7XG5cblx0XHRpZihoeWRyYXRpb25BU1Quc3RhdGVmdWxsKSB7XG5cdFx0XHRyZXN1bHQuc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGFzdC5yZW5kZXIucHVzaChyZW5kZXJBU1QudmFsdWUpO1xuXHRcdGFzdC5oeWRyYXRlLnB1c2goaHlkcmF0aW9uQVNULnZhbHVlKTtcblx0fVxuXG5cdGlmKGFzdC5yZW5kZXIubGVuZ3RoID09PSAxKSB7XG5cdFx0cmVzdWx0LnJlbmRlciA9IGFzdC5yZW5kZXJbMF07XG5cdFx0cmVzdWx0Lmh5ZHJhdGUgPSBhc3QuaHlkcmF0ZVswXTtcblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucmVuZGVyID0gYFskeyAgYXN0LnJlbmRlci5qb2luKCcsJykgfV1gO1xuXHRcdHJlc3VsdC5oeWRyYXRlID0gYFskeyAgYXN0Lmh5ZHJhdGUuam9pbignLCcpIH1dYDtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgXyB9IGZyb20gJy4uL2VtcHR5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1N0YXRlKGNvbnRleHQsIHZhcmlhYmxlKVxue1xuXHQvLyBjb25zb2xlLmxvZyhjb250ZXh0LCB2YXJpYWJsZS5zcGxpdCgnLicpKTtcblx0aWYoY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bGV0IHZhbHVlID0gY29udGV4dDtcblx0bGV0IHZhcl9wYXJ0cyA9IHZhcmlhYmxlLnNwbGl0KCcuJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YXJfcGFydHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YWx1ZSA9IHZhbHVlW3Zhcl9wYXJ0c1tpXV07XG5cdFx0aWYodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGlmKHZhbHVlLl9vYnNlcnZhYmxlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhcmlhYmxlKGNvbnRleHQsIHZhcmlhYmxlKVxue1xuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LmNvbXB1dGVkKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9jb21wdXRlZC4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LnN0YXRlKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9zdGF0ZS4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LmRhdGEpLmluY2x1ZGVzKHZhcmlhYmxlKSkge1xuXHRcdHJldHVybiBgX2RhdGEuJHt2YXJpYWJsZX1gO1xuXHR9XG5cblx0aWYoT2JqZWN0LmtleXMoY29udGV4dC5tZXRob2RzKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYCR7dmFyaWFibGV9LmJpbmQoY3R4KWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LnByb3BzKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9wcm9wcy4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBnZXRSZWFjdGl2ZVZhcmlhYmxlcyB9IGZyb20gXCIuLi9zY3JpcHRcIjtcbmltcG9ydCBnZW5lcmF0ZSBmcm9tICcuL2dlbmVyYXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVUZW1wbGF0ZShjb250ZXh0LCBodG1sLCBibG9ja3MpXG57XG5cdGxldCBzY3JpcHQgPSBibG9ja3Muc2NyaXB0IHx8IHsgc291cmNlOiAnJyB9O1xuXG5cdGNvbnRleHQgPSBnZXRSZWFjdGl2ZVZhcmlhYmxlcyhjb250ZXh0LCBzY3JpcHQuc291cmNlKTtcblx0XG5cdHJldHVybiBnZW5lcmF0ZShjb250ZXh0LCBodG1sKTtcbn0iLCJleHBvcnQgY29uc3QgSUZfQVRUUlMgPSBbJ3YtaWYnLCAndi1lbHNlLWlmJywgJ3YtZWxzZSddO1xuXG5leHBvcnQgIGZ1bmN0aW9uIHBhcnNlU3RhdGVtZW50KG5vZGUpXG57XG5cdGxldCBzdGFydCA9IGZhbHNlO1xuXHRsZXQgZW5kID0gdHJ1ZTtcblx0bGV0IHN0YXRlbWVudCA9IGZhbHNlO1xuXHRsZXQgY29uZGl0aW9uID0gbm9kZS5hdHRyc1sndi1pZiddIHx8IG5vZGUuYXR0cnNbJ3YtZWxzZS1pZiddIHx8ICd0cnVlJztcblxuXHRpZihub2RlLmF0dHJzWyd2LWlmJ10pIHtcblx0XHRzdGFydCA9IHRydWU7XG5cdH1cblxuXHRpZihub2RlLmF0dHJzWyd2LWlmJ10gfHwgbm9kZS5hdHRyc1sndi1lbHNlLWlmJ10gfHwgbm9kZS5hdHRyc1sndi1lbHNlJ10pIHtcblx0XHRub2RlLmlmX3N0YXRlbWVudCA9IHRydWU7XG5cdFx0c3RhdGVtZW50ID0gdHJ1ZTtcblx0fVxuXG5cblx0aWYobm9kZS5uZXh0U2libGluZykge1xuXHRcdGlmKG5vZGUubmV4dFNpYmxpbmcuYXR0cnNbJ3YtZWxzZS1pZiddIHx8IG5vZGUubmV4dFNpYmxpbmcuYXR0cnNbJ3YtZWxzZSddKSB7XG5cdFx0XHRlbmQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvLyBpZihub2RlLnByZXZTaWJsaW5nKSB7XG5cdC8vIFx0aWYobm9kZS5wcmV2U2libGluZy5pZl9zdGF0ZW1lbnQpIHtcblx0Ly8gXHRcdHN0YXRlbWVudCA9IHRydWU7XG5cdC8vIFx0fVxuXHQvLyB9XG5cblx0Ly8gY29uc29sZS53YXJuKG5vZGUuYXR0cnMsIHN0YXRlbWVudCwgc3RhcnQsIGVuZCk7XG5cblx0cmV0dXJuIHtcblx0XHRjb25kaXRpb24sXG5cdFx0aXM6IHN0YXRlbWVudCxcblx0XHRzdGFydCxcblx0XHRlbmQsXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VGdW5jdGlvbnMoY29kZSlcbntcblx0Y29kZSA9IGNvZGVcblx0XHQucmVwbGFjZSgvXFxAaWZcXCgoLiopXFwpL2csICc8aWYgY29uZGl0aW9uPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9cXEBlbHNlaWZcXCgoLiopXFwpL2csICc8ZWxzZS1pZiBjb25kaXRpb249XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL1xcQGVsc2UvZywgJzxlbHNlPicpXG5cdFx0LnJlcGxhY2UoL1xcQGVuZGlmL2csICc8ZW5kaWY+JylcblxuXG5cdGNvbnNvbGUubG9nKGNvZGUpO1xuXG5cdHJldHVybiBjb2RlO1xufSIsImV4cG9ydCBjb25zdCBfID0gLTE7XG4iLCJleHBvcnQgY29uc3QgUmVhY3RpdmVOYW1lc3BhY2VzID0gWydzdGF0ZScsICdjb21wdXRlZCddO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgaWQpXG57XG5cdGxldCBuYW1lID0gaWQubmFtZTtcblx0XG5cdGlmKG5hbWUubWF0Y2goL15cXCQvZykpXHR7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZGF0YS5zdGF0ZVtuYW1lXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElkZW50aWZpZXJOYW1lKGlkKVxue1xuXHRpZighaWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGxldCBuYW1lID0gaWQubmFtZTtcblxuXHRpZihuYW1lLm1hdGNoKC9eXFwkL2cpKVx0e1xuXHRcdHJldHVybiBuYW1lLnN1YnN0cmluZygxKVxuXHR9XG5cblx0cmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0Z1bmN0aW9uQXJndW1lbnREZWNsYXJhdGlvbihkYXRhLCBwYXRoKVxue1xuXHRpZihwYXRoLnBhcmVudC50eXBlICE9PSAnRnVuY3Rpb25EZWNsYXJhdGlvbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXHRsZXQgbWF0Y2ggPSBtYXRjaElkZW50aWZpZXIoZGF0YSwgaWQpO1xuXG5cdGlmKG1hdGNoLm5hbWVzcGFjZSAmJiBwYXRoLmxpc3RLZXkgPT09ICdwYXJhbXMnKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBWYXJpYWJsZSAkeyBuYW1lIH0gaGFzIGFscmVhZHkgZGVmaW5lZCBpbiAkeyBtYXRjaC5uYW1lc3BhY2UgfWApXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldElkZW50aWZpZXJDb250ZXh0KGN0eCwgZGF0YSwgcGF0aCwgb2JzZXJ2YWJsZUNhbGwgPSB0cnVlKVxue1xuXHRpZihbJ0Z1bmN0aW9uRGVjbGFyYXRpb24nLCAnVmFyaWFibGVEZWNsYXJhdG9yJywgJ0xhYmVsZWRTdGF0ZW1lbnQnXS5pbmNsdWRlcyhwYXRoLnBhcmVudC50eXBlKSB8fCBbJ3Byb3BlcnR5J10uaW5jbHVkZXMocGF0aC5rZXkpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblx0bGV0IG1hdGNoID0gbWF0Y2hJZGVudGlmaWVyKGRhdGEsIGlkKTtcblx0XG5cdGlmKG1hdGNoLm5hbWVzcGFjZSA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRuYW1lID0gYCR7Y3R4fS5fJHttYXRjaC5uYW1lc3BhY2V9LiR7bmFtZX1gO1xuXHQvLyBjb25zb2xlLmxvZyhuYW1lLCBvYnNlcnZhYmxlQ2FsbClcblx0aWYobWF0Y2gub2JzZXJ2YWJsZSAmJiBwYXRoLmNvbnRhaW5lci50eXBlICE9PSAnQ2FsbEV4cHJlc3Npb24nICYmIG9ic2VydmFibGVDYWxsKSB7XG5cdFx0bmFtZSArPSAnKCknO1xuXHR9XG5cblx0aWQubmFtZSA9IG5hbWU7XG5cblx0cmV0dXJuIG1hdGNoLm9ic2VydmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaElkZW50aWZpZXIoY29udGV4dCwgaWQpXG57XG5cdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXHRsZXQgbmFtZXNwYWNlID0gZmFsc2U7XG5cblx0Zm9yKGxldCBrZXkgaW4gY29udGV4dCkge1xuXHRcdGlmKE9iamVjdC5rZXlzKGNvbnRleHRba2V5XSkuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdG5hbWVzcGFjZSA9IGtleTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdG5hbWVzcGFjZSxcblx0XHRvYnNlcnZhYmxlOiBSZWFjdGl2ZU5hbWVzcGFjZXMuaW5jbHVkZXMobmFtZXNwYWNlKVxuXHR9O1xufSIsImV4cG9ydCBjb25zdCBkYXRhID0ge1xuXHRpbXBvcnRzOiBbXSxcblx0cHJvcHM6IHt9LFxuXHRkYXRhOiB7fSxcblx0c3RhdGU6IHt9LFxuXHRjb21wdXRlZDoge30sXG5cdG1ldGhvZHM6IHt9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0YShjb250ZXh0KSB7XG5cdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7fSwgY29udGV4dCk7XG59IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuaW1wb3J0IHtcblx0aWRlbnRpZmllcixcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEJpbmFyeUV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Z2V0SWRlbnRpZmllck5hbWUsXG5cdHNldElkZW50aWZpZXJDb250ZXh0LFxuXHRpc0lkZW50aWZpZXJSZWFjdGl2ZSxcblx0Y2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb25cbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihkYXRhLCBhc3QsIGN0eCA9ICd0aGlzJylcbntcblx0dmFyIG9ic2VydmFibGUgPSBmYWxzZTtcblx0dmFyIGNoYW5nZWQgPSBmYWxzZTtcblxuXHRsZXQgRnVuY3Rpb25EZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJbXBvcnREZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0ZGF0YS5pbXBvcnRzW3BhdGgubm9kZS5zb3VyY2UudmFsdWVdID0gcGF0aC5ub2RlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uID0gdHJ1ZTtcblx0XHQgICAgfSxcblx0XHQgICAgZXhpdChwYXRoKSB7XG5cdFx0ICAgIFx0RnVuY3Rpb25EZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHRcdCAgICB9XG5cdFx0fSxcblx0XHQvLyBtYWtlIHJlYWN0aXZlIHZhcmlhYmxlIGFzc2lnbm1lbnQgYXMgZnVuY3Rpb25cblx0XHRBc3NpZ25tZW50RXhwcmVzc2lvbjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoIWlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIHBhdGgubm9kZS5sZWZ0KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBhcmdzID0gW3BhdGgubm9kZS5yaWdodF07XG5cblx0XHRcdFx0aWYocGF0aC5ub2RlLm9wZXJhdG9yLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRhcmdzID0gW1xuXHRcdFx0XHRcdFx0QmluYXJ5RXhwcmVzc2lvbihwYXRoLm5vZGUub3BlcmF0b3JbMF0sIHBhdGgubm9kZS5sZWZ0LCBwYXRoLm5vZGUucmlnaHQpXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShwYXRoLm5vZGUubGVmdCk7XG5cdFx0XHRcdHBhdGgucmVwbGFjZVdpdGgoXG5cdFx0XHRcdFx0Q2FsbEV4cHJlc3Npb24oaWRlbnRpZmllcihuYW1lKSwgYXJncylcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRvYnNlcnZhYmxlID0gdHJ1ZTtcblx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRjaGVja0Z1bmN0aW9uQXJndW1lbnREZWNsYXJhdGlvbihkYXRhLCBwYXRoKTtcblx0XHRcdFx0aWYoc2V0SWRlbnRpZmllckNvbnRleHQoY3R4LCBkYXRhLCBwYXRoKSkge1xuXHRcdFx0XHRcdG9ic2VydmFibGUgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdGFzdCxcblx0XHRvYnNlcnZhYmxlLFxuXHRcdGNoYW5nZWQsXG5cdH1cbn0iLCJpbXBvcnQgeyBwYXJzZU9wdGlvbnMsIHBhcnNlT3B0aW9uS2V5LCBwYXJzZU9wdGlvblZhbHVlIH0gZnJvbSAnLi9hdHRycyc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHBhcnNlU3RhdGVtZW50IH0gZnJvbSAnLi9wYXJzZUZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBleHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcblxuZXhwb3J0IHZhciBISUQgPSAwO1xuXG5leHBvcnQgY29uc3QgaXNOb25QaHJhc2luZ1RhZyA9IFtcblx0J2FkZHJlc3MnLCAnYXJ0aWNsZScsICdhc2lkZScsICdiYXNlJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdjYXB0aW9uJywgJ2NvbCcsICdjb2xncm91cCcsXG5cdCdkZCcsICdkZXRhaWxzJywgJ2RpYWxvZycsICdkaXYnLCAnZGwnLCAnZHQnLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9vdGVyJyxcblx0J2Zvcm0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZCcsICdoZWFkZXInLCAnaGdyb3VwJywgJ2hyJywgJ2h0bWwnLCAnbGVnZW5kJyxcblx0J2xpJywgJ21lbnVpdGVtJywgJ21ldGEnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ3BhcmFtJywgJ3JwJywgJ3J0JywgJ3NvdXJjZScsICdzdHlsZScsICdzdW1tYXJ5Jyxcblx0J3Rib2R5JywgJ3RkJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpdGxlJywgJ3RyJywgJ3RyYWNrJ1xuXTtcblxudmFyIElGX1NUQVRFTUVOVF9TVEFSVEVEID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudENvZGUodGFnLCBvcHRpb25zLCBjaGlsZHJlbiA9IFtdKVxue1xuXHRpZih0YWcgPT09ICd0ZW1wbGF0ZScpIHtcblx0XHRyZXR1cm4gYFskeyBjaGlsZHJlbi5qb2luKCcsJykgfV1gO1xuXHR9XG5cdFxuXHRyZXR1cm4gYGgoJyR7IHRhZyB9JywgJHsgb3B0aW9ucyB9LCBbJHsgY2hpbGRyZW4uam9pbignLCcpIH1dKWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVcbntcblx0Y29uc3RydWN0b3IoeyB0YWcgPSBudWxsLCBhdHRycyA9IG51bGwsIGNoaWxkcmVuID0gW10gfSlcblx0e1xuXHRcdHRoaXMuaGlkID0gKytISUQ7XG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy5hdHRycyA9IGF0dHJzO1xuXHRcdHRoaXMub3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhhdHRycyk7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHRcdFxuXHRcdHRoaXMucHJldlNpYmxpbmcgPSBudWxsO1xuXHRcdHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuXHRcdC8vIGlmXG5cdFx0dGhpcy5pZl9zdGF0ZW1lbnQgPSBmYWxzZTtcblx0fVxuXG5cdC8vIGdldENvbnRleHQoY3VycmVudENvbnRleHQpXG5cdC8vIHtcblx0Ly8gXHRsZXQgY3R4ID0gbnVsbDtcblxuXHQvLyBcdHRyeSB7XG5cdC8vIFx0XHRjdHggPSBTaW51b3VzLmdldENvbXBvbmVudCh0aGlzLnRhZyk7XG5cdC8vIFx0fSBjYXRjaChlcnIpIHt9XG5cblx0Ly8gXHRpZihjdHggPT09IG51bGwpIHtcblx0Ly8gXHRcdGN0eCA9IGN1cnJlbnRDb250ZXh0O1xuXHQvLyBcdH1cblxuXHQvLyBcdHJldHVybiBjdHg7XG5cdC8vIH1cblx0c2V0U2libGluZ3MoKVxuXHR7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0aGlzLmNoaWxkcmVuW2kgKyAxXSkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuW2ldLm5leHRTaWJsaW5nID0gdGhpcy5jaGlsZHJlbltpICsgMV07XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW5baSArIDFdLnByZXZTaWJsaW5nID0gdGhpcy5jaGlsZHJlbltpXTtcblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy5jaGlsZHJlbltpXSBpbnN0YW5jZW9mIE5vZGUpIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbltpXS5zZXRTaWJsaW5ncygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldCBpc0NvbXBvbmVudCgpXG5cdHtcblx0XHRyZXR1cm4gIWlzTm9uUGhyYXNpbmdUYWcuaW5jbHVkZXModGhpcy50YWcpO1xuXHR9XG5cblx0dG9BU1QoY29udGV4dCA9IG51bGwsIGh5ZHJhdGUgPSBmYWxzZSlcblx0e1xuXHRcdGxldCBjb2RlID0gJyc7XG5cdFx0bGV0IGNoaWxkcmVuID0gW107XG5cdFx0bGV0IHNob3VsZEh5ZGFyYXRlID0gZmFsc2U7XG5cdFx0bGV0IHNob3VsZE9wdGlvbnNIeWRyYXRlID0gZmFsc2U7XG5cdFx0Ly8gY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dChjb250ZXh0KTtcblxuXHRcdC8vIGNvbnNvbGUud2FybignWzFdJywgY29udGV4dC5uYW1lLCBzaG91bGRIeWRhcmF0ZSk7XG5cdFx0LyoqXG5cdFx0ICogVHJhbnNsYXRlIGNoaWxkcmVuIHRvIGh5cGVyc2NyaXB0XG5cdFx0ICogQHBhcmFtICB7W3R5cGVdfSB2YXIgaSAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG5cdFx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgW2Rlc2NyaXB0aW9uXVxuXHRcdCAqL1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcblx0XHRcdGxldCB7IHZhbHVlLCBzdGF0ZWZ1bGwgfSA9IGNoaWxkLnRvQVNUKGNvbnRleHQsIGh5ZHJhdGUpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1tjaGlsZF0nLCBjaGlsZCwgc3RhdGVmdWxsKTtcblx0XHRcdGlmKHN0YXRlZnVsbCkge1xuXHRcdFx0XHRzaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGNoaWxkcmVuLnB1c2godmFsdWUpO1xuXHRcdH1cblxuXHRcdGxldCBvcHRpb25zID0gJyc7XG5cblx0XHQvLyBjb25zb2xlLndhcm4oJ1syXScsIGNvbnRleHQubmFtZSwgc2hvdWxkSHlkYXJhdGUpO1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMub3B0aW9ucykge1xuXHRcdFx0bGV0IHsgdmFsdWUsIHN0YXRlZnVsbCB9ID0gcGFyc2VPcHRpb25WYWx1ZShjb250ZXh0LCBrZXksIHRoaXMub3B0aW9uc1trZXldKTtcblx0XHRcdFxuXHRcdFx0aWYoc3RhdGVmdWxsKSB7XG5cdFx0XHRcdHNob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoc3RhdGVmdWxsIHx8ICFoeWRyYXRlIHx8IGtleSA9PT0gJ2RhdGEtaGlkJykge1xuXHRcdFx0XHRvcHRpb25zICs9IGAkeyBwYXJzZU9wdGlvbktleShrZXkpIH06ICR7IHZhbHVlIH0sYDtcblx0XHRcdH1cblxuXHRcdFx0aWYoc3RhdGVmdWxsICYmIGh5ZHJhdGUpIHtcblx0XHRcdFx0c2hvdWxkT3B0aW9uc0h5ZHJhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXG5cdFx0c2hvdWxkSHlkYXJhdGUgPSB0aGlzLmlzQ29tcG9uZW50IHx8IHNob3VsZEh5ZGFyYXRlO1xuXG5cblx0XHRpZihzaG91bGRIeWRhcmF0ZSkge1xuXHRcdFx0b3B0aW9ucyArPSBgaWQ6IGN0eC5nZXRVSUQoJHsgdGhpcy5oaWQgfSksYDtcblx0XHR9XG5cblx0XHRpZihzaG91bGRPcHRpb25zSHlkcmF0ZSkge1xuXHRcdFx0b3B0aW9ucyArPSBgX3M6IHRydWUsYDtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLndhcm4oaHlkcmF0ZSwgY29udGV4dC5uYW1lLCB0aGlzLnRhZywgc2hvdWxkSHlkYXJhdGUgPyBvcHRpb25zIDogJycpO1xuXG5cdFx0b3B0aW9ucyA9IGB7JHtvcHRpb25zfX1gO1xuXHRcdFxuXHRcdGxldCBmbl9nZW5lcmF0ZWQgPSBmYWxzZTtcblxuXHRcdGxldCBzdGF0ZW1lbnQgPSBwYXJzZVN0YXRlbWVudCh0aGlzKTtcblxuXHRcdGlmKHN0YXRlbWVudC5pcykge1xuXHRcdFx0XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gZXhwcmVzc2lvbihjb250ZXh0LCBzdGF0ZW1lbnQuY29uZGl0aW9uLCB0cnVlKVxuXG5cdFx0XHRpZihzdGF0ZW1lbnQuc3RhcnQpIHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcylcblx0XHRcdFx0Y29kZSArPSBgc3RhdGVtZW50KGA7XG5cdFx0XHR9XG5cblx0XHRcdGNvZGUgKz0gYCAkeyBjb25kaXRpb24udmFsdWUgfSwgJHsgZ2V0Q29tcG9uZW50Q29kZSh0aGlzLnRhZywgb3B0aW9ucywgY2hpbGRyZW4pIH1gO1xuXG5cdFx0XHRpZihzdGF0ZW1lbnQuZW5kKSB7XG5cdFx0XHRcdGNvZGUgKz0gYClgO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2RlICs9IGdldENvbXBvbmVudENvZGUodGhpcy50YWcsIG9wdGlvbnMsIGNoaWxkcmVuKTtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmF0dHJzLCB0aGlzLmlmX3N0YXRlbWVudCwgc3RhdGVtZW50KVxuXG5cdFx0Ly8gaWYoSUZfU1RBVEVNRU5UX1NUQVJURUQgJiYgIXRoaXMuYXR0cnNbJ3YtaWYnXSkge1xuXHRcdC8vIFx0Zm5fZ2VuZXJhdGVkID0gdHJ1ZTtcblx0XHQvLyBcdGNvZGUgKz0gYClgO1xuXHRcdC8vIH1cblxuXHRcdC8vIGlmKElGX1NUQVRFTUVOVF9TVEFSVEVEKSB7XG5cdFx0Ly8gXHRsZXQgY29uZGl0aW9uID0gdGhpcy5hdHRyc1sndi1pZiddIHx8IHRoaXMuYXR0cnNbJ3YtZWxzZS1pZiddIHx8IHRoaXMuYXR0cnNbJ3YtZWxzZSddO1xuXHRcdC8vIFx0bGV0IHJlcyA9IFtdO1xuXHRcdC8vIFx0aWYoIXRoaXMuYXR0cnNbJ3YtZWxzZSddKSB7XG5cdFx0Ly8gXHRcdHJlcy5wdXNoKGNvbmRpdGlvbilcblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0cmVzLnB1c2goZ2V0Q29tcG9uZW50Q29kZSh0aGlzLnRhZywgb3B0aW9ucywgY2hpbGRyZW4pKTtcblxuXHRcdC8vIFx0aWYoIXRoaXMuYXR0cnNbJ3YtZWxzZSddKSB7XG5cdFx0Ly8gXHRcdHJlcy5wdXNoKCcnKVxuXHRcdC8vIFx0fVxuXHRcdFx0XG5cdFx0Ly8gXHRjb2RlICs9IHJlcy5qb2luKCcsJyk7XG5cblx0XHQvLyBcdGNvbnNvbGUubG9nKHRoaXMuYXR0cnMsIGNvZGUpXG5cdFx0Ly8gfSBcblxuXHRcdC8vIGlmKCFmbl9nZW5lcmF0ZWQpIHtcblx0XHRcdFxuXHRcdC8vIH1cblxuXHRcdC8vIGNvbnNvbGUud2FybignWzNdJywgY29udGV4dC5uYW1lLCBzaG91bGRIeWRhcmF0ZSk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1ttYWluXScsIHRoaXMudGFnLCBzaG91bGRIeWRhcmF0ZSk7XG5cblx0XHRpZihoeWRyYXRlICYmICFzaG91bGRIeWRhcmF0ZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmFsdWU6IF8sXG5cdFx0XHRcdHN0YXRlZnVsbDogZmFsc2UsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogY29kZSxcblx0XHRcdHN0YXRlZnVsbDogc2hvdWxkSHlkYXJhdGUsXG5cdFx0fTtcblx0fVxufSIsImltcG9ydCB7IHBhcnNlT3B0aW9uVmFsdWUgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCB7IF8gfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Tm9kZVxue1xuXHRjb25zdHJ1Y3Rvcih0ZXh0KVxuXHR7XG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcblx0fVxuXG5cdHRvQVNUKGNvbnRleHQgPSBudWxsLCBoeWRyYXRlID0gZmFsc2UpXG5cdHtcblx0XHRsZXQgeyB2YWx1ZSwgc3RhdGVmdWxsIH0gPSBwYXJzZU9wdGlvblZhbHVlKGNvbnRleHQsICdfdCcsIHRoaXMudGV4dCk7XG5cdFx0Ly8gY29uc29sZS5sb2coYHQoJHt0aGlzLnRleHR9KWAsIHZhbHVlLCBzdGF0ZWZ1bGwpXG5cblx0XHRpZihoeWRyYXRlICYmICFzdGF0ZWZ1bGwpIHtcblx0XHRcdHZhbHVlID0gXztcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWUsXG5cdFx0XHRzdGF0ZWZ1bGwsXG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IHsgZXhwcmVzc2lvbiB9IGZyb20gJy4vZXhwcmVzc2lvbic7XG5cbmNvbnN0IEF0dHJzTWFwID0ge1xuXHQnc3R5bGUnOiAnc3RhdGljU3R5bGUnLFxuXHQnY2xhc3MnOiAnc3RhdGljQ2xhc3MnLFxuXHQnOnN0eWxlJzogJ2R5bmFtaWNTdHlsZScsXG5cdCc6Y2xhc3MnOiAnZHluYW1pY0NsYXNzJyxcbn07XG5cbmNvbnN0IEhUTUxBdHRyaWJ1dGVzID0gWydpZCcsICduYW1lJywgJ3ZhbHVlJywgJ3BsYWNlaG9sZGVyJ107XG5cbmZ1bmN0aW9uIHBhcnNlT3B0aW9uVmFsdWUoY29udGV4dCwga2V5LCB2YWx1ZSlcbntcblx0bGV0IHN0YXRlZnVsbCA9IGZhbHNlO1xuXHRsZXQgaXNFeHByZXNzaW9uID0gZmFsc2U7XG5cdGxldCBvYnNlcnZhYmxlQ2FsbCA9IHRydWU7XG5cblx0aWYoa2V5WzBdID09PSAnQCcpIHtcblx0XHRzdGF0ZWZ1bGwgPSB0cnVlO1xuXHRcdGlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cblxuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0b2JzZXJ2YWJsZUNhbGwgPSBmYWxzZTtcblx0fVxuXG5cdGlmKGtleVswXSA9PT0gJ18nKSB7XG5cdFx0dmFsdWUgPSAnYCcgKyB2YWx1ZS5yZXBsYWNlKC97eyguKil9fS9nLCAnJHskMX0nKSArICdgJztcblx0XHRpc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG5cblx0bGV0IGV4cCA9IGV4cHJlc3Npb24oY29udGV4dCwgdmFsdWUsIGlzRXhwcmVzc2lvbiwgb2JzZXJ2YWJsZUNhbGwpO1xuXHRcblx0dmFsdWUgPSBleHAudmFsdWU7XG5cblx0aWYoIXN0YXRlZnVsbCAmJiBleHAuc3RhdGVmdWxsKSB7XG5cdFx0c3RhdGVmdWxsID0gdHJ1ZTtcblx0fVxuXG5cdFxuXG5cdC8vIGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0Ly8gXHR2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0Ly8gfSBlbHNlIHtcblx0Ly8gXHR2YWx1ZSA9IGBcIiR7dmFsdWV9XCJgO1xuXHQvLyB9XG5cblx0XG5cblx0cmV0dXJuIHtcblx0XHR2YWx1ZSxcblx0XHRzdGF0ZWZ1bGwsXG5cdH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlT3B0aW9uS2V5KGtleSwgdmFsdWUpXG57XG5cdGlmKEF0dHJzTWFwW2tleV0pIHtcblx0XHRyZXR1cm4gQXR0cnNNYXBba2V5XTtcblx0fSBlbHNlIGlmKGtleVswXSA9PT0gJ0AnKSB7XG5cdFx0cmV0dXJuIGtleS5yZXBsYWNlKC9AL2csICdvbicpO1xuXHR9XG5cblx0cmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gcGFyc2VTdHlsZXMoc3RyaW5nKVxue1xuXHRsZXQgc3R5bGVzID0ge307XG5cdGxldCBwYWlycyA9IHN0cmluZy5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCc7Jyk7XG5cdFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRtcCA9IHBhaXJzW2ldLnNwbGl0KCc6Jyk7XG5cdFx0aWYodG1wLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0c3R5bGVzW3RtcFswXV0gPSB0bXBbMV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVPcHRpb25LZXkodmFyaWFibGUpXG57XG5cdGlmKHZhcmlhYmxlLm1hdGNoKC9cXC0vZykpIHtcblx0XHR2YXJpYWJsZSA9IGAnJHt2YXJpYWJsZX0nYDtcblx0fVxuXG5cdHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gcGFyc2VPcHRpb25zKGF0dHJzKVxue1xuXHRsZXQgb3B0aW9ucyA9IHt9O1xuXG5cdGZvcihsZXQga2V5IGluIGF0dHJzKVxuXHR7XG5cdFx0bGV0IHZhbHVlID0gYXR0cnNba2V5XTtcblx0XHRsZXQgb3B0aW9uX2tleSA9IHByZXBhcmVPcHRpb25LZXkoa2V5KTtcblxuXHRcdGlmKGtleS5tYXRjaCgvXnZcXC0vZykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHQvLyBJcyBodG1sIGF0dHJcblx0XHRpZihIVE1MQXR0cmlidXRlcy5pbmNsdWRlcyhrZXkpIHx8IE9iamVjdC5rZXlzKEF0dHJzTWFwKS5pbmNsdWRlcyhrZXkpIHx8IGtleS5tYXRjaCgvZGF0YVxcLS9nKSB8fCBrZXkubWF0Y2goL0AvZykpIHtcblx0XHRcdGlmKGtleSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlU3R5bGVzKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0b3B0aW9uc1tvcHRpb25fa2V5XSA9IHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZighb3B0aW9ucy5wcm9wcykge1xuXHRcdFx0XHRvcHRpb25zLnByb3BzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdG9wdGlvbnMucHJvcHNbb3B0aW9uX2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gcGFyc2VBdHRycyhzdHJpbmcpXG57XG5cdGlmKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnIHx8IHN0cmluZyA9PSAnJykge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHNcXHMrL2csICcgJykudHJpbSgpO1xuXG5cdGxldCBwYWlycyA9IHN0cmluZy5tYXRjaCgvKFteXFxzXSopPVtcIiddKC4qPylbXCInXXwoW1xcd1xcLV0rKS9nKVxuXHRsZXQgYXR0cnMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRtcCA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0bGV0IG5hbWUgPSB0bXBbMF07XG5cdFx0bGV0IHZhbHVlID0gdG1wWzFdID8gdG1wWzFdLnN1YnN0cmluZygxLCB0bXBbMV0ubGVuZ3RoIC0gMSkgOiB0cnVlO1xuXHRcdGF0dHJzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCB7IHBhcnNlQXR0cnMsIHBhcnNlT3B0aW9ucywgcGFyc2VPcHRpb25LZXksIHBhcnNlT3B0aW9uVmFsdWUgfTsiLCJpbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcbmltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiQGJhYmVsL2dlbmVyYXRvclwiO1xuaW1wb3J0IHBhcnNlRXhwcmVzc2lvbiBmcm9tIFwiLi4vc2NyaXB0L3BhcnNlRXhwcmVzc2lvblwiO1xuXG5pbXBvcnQge1xuXHRpZGVudGlmaWVyLFxuXHRDYWxsRXhwcmVzc2lvbixcblx0QmluYXJ5RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQge1xuXHRnZXRJZGVudGlmaWVyTmFtZSxcblx0c2V0SWRlbnRpZmllckNvbnRleHQsXG5cdGlzSWRlbnRpZmllclJlYWN0aXZlLFxuXHRjaGVja0Z1bmN0aW9uQXJndW1lbnREZWNsYXJhdGlvblxufSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IHsgcHJlcGFyZU9wdGlvbktleSB9IGZyb20gJy4vYXR0cnMnO1xuXG5pbXBvcnQgeyBoYXNTdGF0ZSwgZ2V0VmFyaWFibGUgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbihjb250ZXh0LCBjb2RlLCBpc0V4cHJlc3Npb24gPSBmYWxzZSwgb2JzZXJ2YWJsZUNhbGwgPSB0cnVlKVxue1xuXHRpZih0eXBlb2YgY29kZSA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdGVmdWxsOiBmYWxzZSxcblx0XHRcdHZhbHVlOiBKU09OLnN0cmluZ2lmeShjb2RlKVxuXHRcdH07XG5cdH1cblxuXHRjb2RlID0gU3RyaW5nKGNvZGUpO1xuXG5cdGNvbnNvbGUud2Fybihjb2RlKTtcblxuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2UoY29kZSk7XG5cblx0bGV0IHsgY2hhbmdlZCwgb2JzZXJ2YWJsZSB9ID0gcGFyc2VFeHByZXNzaW9uKGNvbnRleHQuZGF0YSwgYXN0LCAnY3R4Jyk7XG5cblx0aWYoY2hhbmdlZCkge1xuXHRcdGNvZGUgPSBnZW5lcmF0ZShhc3QsIHtcblx0XHRcdHJldGFpbkxpbmVzOiB0cnVlLFxuXHRcdFx0Y29tcGFjdDogdHJ1ZSxcblx0XHRcdG1pbmlmaWVkOiB0cnVlLFxuXHRcdFx0Y29uY2lzZTogdHJ1ZSxcblx0XHRcdHF1b3RlczogXCJkb3VibGVcIixcblx0XHR9LCBjb2RlKS5jb2RlO1xuXG5cdFx0XG5cdFx0Ly8gY2xlYW4gYXBwZW5kXG5cdFx0Y29kZSA9IGNvZGUucmVwbGFjZSgvKDt8LCkkL2csICcnKTtcblxuXHRcdGlmKGlzRXhwcmVzc2lvbikge1xuXHRcdFx0Y29kZSA9IGAoKSA9PiB7IHJldHVybiAke2NvZGV9OyB9YDtcblx0XHR9XG5cdH1cblxuXHRjb25zb2xlLmxvZyhjb2RlKTtcblx0Y29uc29sZS5sb2coJy0tLS0tLS0tJyk7XG5cblx0cmV0dXJuIHtcblx0XHRzdGF0ZWZ1bGw6IG9ic2VydmFibGUsXG5cdFx0dmFsdWU6IGNvZGVcblx0fVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHByZXNzaW9uKGNvbnRleHQsIGNvZGUsIGV4ZWN1dGUgPSBmYWxzZSlcbi8vIHtcbi8vIFx0Y29uc3QgYXN0ID0gcGFyc2VyLnBhcnNlKGNvZGUpO1xuXG4vLyBcdHZhciBjaGFuZ2VkID0gZmFsc2U7XG4vLyBcdHZhciBzdGF0ZWZ1bGwgPSBmYWxzZTtcblxuLy8gXHR0cmF2ZXJzZShhc3QsIHtcbi8vIFx0XHRlbnRlcihwYXRoKVxuLy8gXHRcdHtcbi8vIFx0XHRcdGlmKHBhdGgubm9kZS50eXBlID09PSAnSWRlbnRpZmllcicpXG4vLyBcdFx0XHR7XG4vLyBcdFx0XHRcdGlmKCFbJ2tleScsICdsYWJlbCddLmluY2x1ZGVzKHBhdGgua2V5KSkge1xuLy8gXHRcdFx0XHRcdGxldCBuYW1lQnVpbGRlciA9IFtdO1xuXG4vLyBcdFx0XHRcdFx0bGV0IHZhcmlhYmxlID0gcGF0aC5ub2RlLm5hbWU7XG4vLyBcdFx0XHRcdFx0bGV0IHZhcmlhYmxlV2l0aENvbnRleHQgPSBnZXRWYXJpYWJsZShjb250ZXh0LmRhdGEsIHZhcmlhYmxlKVxuXG4vLyBcdFx0XHRcdFx0aWYocGF0aC5jb250YWluZXIudHlwZSA9PT0gJ0NhbGxFeHByZXNzaW9uJykge1xuLy8gXHRcdFx0XHRcdFx0dmFyaWFibGVXaXRoQ29udGV4dCA9IGZhbHNlO1xuLy8gXHRcdFx0XHRcdH1cblxuLy8gXHRcdFx0XHRcdGlmKHZhcmlhYmxlV2l0aENvbnRleHQpIHtcbi8vIFx0XHRcdFx0XHRcdG5hbWVCdWlsZGVyLnB1c2goJ2N0eCcpXG4vLyBcdFx0XHRcdFx0XHRuYW1lQnVpbGRlci5wdXNoKHZhcmlhYmxlV2l0aENvbnRleHQpO1xuLy8gXHRcdFx0XHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRcdFx0XHRuYW1lQnVpbGRlci5wdXNoKHZhcmlhYmxlKTtcbi8vIFx0XHRcdFx0XHR9XG5cbi8vIFx0XHRcdFx0XHRpZighdmFyaWFibGUpIHtcbi8vIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gJHsgdmFyaWFibGUgfSBpbiBjb250ZXh0ICR7IGNvbnRleHQgfWApO1xuLy8gXHRcdFx0XHRcdH1cblxuLy8gXHRcdFx0XHRcdGlmKGNvbnRleHQucmVhY3RpdmVfdmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKSkge1xuLy8gXHRcdFx0XHRcdFx0c3RhdGVmdWxsID0gdHJ1ZTtcbi8vIFx0XHRcdFx0XHR9XG5cbi8vIFx0XHRcdFx0XHRwYXRoLm5vZGUubmFtZSA9IG5hbWVCdWlsZGVyLmpvaW4oJy4nKSArIChleGVjdXRlID8gJygpJyA6ICcnKTtcblxuLy8gXHRcdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuLy8gXHRcdFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0XHRcdHBhdGgubm9kZS5uYW1lID0gcHJlcGFyZU9wdGlvbktleShwYXRoLm5vZGUubmFtZSk7XG4vLyBcdFx0XHRcdH1cbi8vIFx0XHRcdH1cbi8vIFx0XHR9XG4vLyBcdH0pO1xuXG4vLyBcdGNvZGUgPSBnZW5lcmF0ZShhc3QsIHtcbi8vIFx0XHRyZXRhaW5MaW5lczogdHJ1ZSxcbi8vIFx0XHRjb21wYWN0OiB0cnVlLFxuLy8gXHRcdG1pbmlmaWVkOiB0cnVlLFxuLy8gXHRcdGNvbmNpc2U6IHRydWUsXG4vLyBcdFx0cXVvdGVzOiBcImRvdWJsZVwiLFxuLy8gXHR9LCBjb2RlKS5jb2RlO1xuXG4vLyBcdC8vIGNsZWFuIGFwcGVuZFxuLy8gXHRjb2RlID0gY29kZS5yZXBsYWNlKC8oO3wsKSQvZywgJycpO1xuXG4vLyBcdGlmKGNoYW5nZWQgJiYgZXhlY3V0ZSkge1xuLy8gXHRcdGNvZGUgPSBgKCkgPT4geyByZXR1cm4gJHtjb2RlfTsgfWA7XG4vLyBcdH1cblxuLy8gXHRyZXR1cm4ge1xuLy8gXHRcdHN0YXRlZnVsbCxcbi8vIFx0XHR2YWx1ZTogY29kZVxuLy8gXHR9XG4vLyB9IiwiaW1wb3J0IHsgXyB9IGZyb20gJy4uL2VtcHR5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1N0YXRlKGNvbnRleHQsIHZhcmlhYmxlKVxue1xuXHQvLyBjb25zb2xlLmxvZyhjb250ZXh0LCB2YXJpYWJsZS5zcGxpdCgnLicpKTtcblx0aWYoY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bGV0IHZhbHVlID0gY29udGV4dDtcblx0bGV0IHZhcl9wYXJ0cyA9IHZhcmlhYmxlLnNwbGl0KCcuJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YXJfcGFydHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YWx1ZSA9IHZhbHVlW3Zhcl9wYXJ0c1tpXV07XG5cdFx0aWYodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGlmKHZhbHVlLl9vYnNlcnZhYmxlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhcmlhYmxlKGNvbnRleHQsIHZhcmlhYmxlKVxue1xuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LmNvbXB1dGVkKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9jb21wdXRlZC4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LnN0YXRlKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9zdGF0ZS4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LmRhdGEpLmluY2x1ZGVzKHZhcmlhYmxlKSkge1xuXHRcdHJldHVybiBgX2RhdGEuJHt2YXJpYWJsZX1gO1xuXHR9XG5cblx0aWYoT2JqZWN0LmtleXMoY29udGV4dC5tZXRob2RzKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYCR7dmFyaWFibGV9LmJpbmQoY3R4KWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LnByb3BzKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9wcm9wcy4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVQYXJzZXIgfSBmcm9tICdodG1sanMtcGFyc2VyJztcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgVGV4dE5vZGUgZnJvbSAnLi9UZXh0Tm9kZSc7XG5cbmZ1bmN0aW9uIGhhbmRsZVRhZyhldmVudClcbntcblx0bGV0IHRhZyA9IGV2ZW50LnRhZ05hbWU7XG5cdGxldCBhdHRyaWJ1dGVzID0ge307XG5cblx0aWYoZXZlbnQuYXR0cmlidXRlcykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGF0dHIgPSBldmVudC5hdHRyaWJ1dGVzW2ldO1xuXHRcdFx0YXR0cmlidXRlc1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZSB8fCB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dGFnLFxuXHRcdGF0dHJpYnV0ZXNcblx0fVxufVxuXG5mdW5jdGlvbiBjbG9zZShldmVudClcbntcblx0bGV0IHsgdGFnLCBhdHRyaWJ1dGVzIH0gPSBoYW5kbGVUYWcoZXZlbnQpO1xuXG5cdGNvbnNvbGUubG9nKCdlbmQnLCB0YWcpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlKGh0bWwpXG57XG5cdGxldCBzdGFjayA9IFtdO1xuXG5cdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcdC9nLCAnICcpLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKTtcblxuXHRjcmVhdGVQYXJzZXIoe1xuXHRcdFxuXHRcdG9uT3BlblRhZyhldmVudClcblx0XHR7XG5cdFx0XHRsZXQgeyB0YWcsIGF0dHJpYnV0ZXMgfSA9IGhhbmRsZVRhZyhldmVudCk7XG5cdFx0XHRcblx0XHRcdGNvbnNvbGUubG9nKCdjcmVhdGUgTm9kZScsIHRhZywgYXR0cmlidXRlcylcblx0XHR9LFxuXG5cdFx0b25UZXh0KGV2ZW50KVxuXHRcdHtcblx0XHRcdGxldCB2YWx1ZSA9IGV2ZW50LnZhbHVlLnRyaW0oKTtcblx0XHRcdFxuXHRcdFx0aWYodmFsdWUgIT09ICcnKSB7XG5cdCAgICAgICAgXHRjb25zb2xlLndhcm4odmFsdWUpXG5cdCAgICBcdH1cblx0ICAgIH0sXG5cblx0XHRvblN0cmluZyhldmVudClcblx0XHR7XG5cdCAgICAgICAgLy8gY29uc29sZS53YXJuKGV2ZW50KVxuXHQgICAgfSxcblxuXHRcdG9uQ2xvc2VUYWc6IGNsb3NlXG5cblx0fSwge1xuXHRcdHJlZmxlY3RpdmVBdHRyaWJ1dGVzOiB0cnVlXG5cdH0pXG5cdC5wYXJzZShodG1sKTtcbn1cbiIsImV4cG9ydCBjb25zdCBJRl9BVFRSUyA9IFsndi1pZicsICd2LWVsc2UtaWYnLCAndi1lbHNlJ107XG5cbmV4cG9ydCAgZnVuY3Rpb24gcGFyc2VTdGF0ZW1lbnQobm9kZSlcbntcblx0bGV0IHN0YXJ0ID0gZmFsc2U7XG5cdGxldCBlbmQgPSB0cnVlO1xuXHRsZXQgc3RhdGVtZW50ID0gZmFsc2U7XG5cdGxldCBjb25kaXRpb24gPSBub2RlLmF0dHJzWyd2LWlmJ10gfHwgbm9kZS5hdHRyc1sndi1lbHNlLWlmJ10gfHwgJ3RydWUnO1xuXG5cdGlmKG5vZGUuYXR0cnNbJ3YtaWYnXSkge1xuXHRcdHN0YXJ0ID0gdHJ1ZTtcblx0fVxuXG5cdGlmKG5vZGUuYXR0cnNbJ3YtaWYnXSB8fCBub2RlLmF0dHJzWyd2LWVsc2UtaWYnXSB8fCBub2RlLmF0dHJzWyd2LWVsc2UnXSkge1xuXHRcdG5vZGUuaWZfc3RhdGVtZW50ID0gdHJ1ZTtcblx0XHRzdGF0ZW1lbnQgPSB0cnVlO1xuXHR9XG5cblxuXHRpZihub2RlLm5leHRTaWJsaW5nKSB7XG5cdFx0aWYobm9kZS5uZXh0U2libGluZy5hdHRyc1sndi1lbHNlLWlmJ10gfHwgbm9kZS5uZXh0U2libGluZy5hdHRyc1sndi1lbHNlJ10pIHtcblx0XHRcdGVuZCA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8vIGlmKG5vZGUucHJldlNpYmxpbmcpIHtcblx0Ly8gXHRpZihub2RlLnByZXZTaWJsaW5nLmlmX3N0YXRlbWVudCkge1xuXHQvLyBcdFx0c3RhdGVtZW50ID0gdHJ1ZTtcblx0Ly8gXHR9XG5cdC8vIH1cblxuXHQvLyBjb25zb2xlLndhcm4obm9kZS5hdHRycywgc3RhdGVtZW50LCBzdGFydCwgZW5kKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNvbmRpdGlvbixcblx0XHRpczogc3RhdGVtZW50LFxuXHRcdHN0YXJ0LFxuXHRcdGVuZCxcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUZ1bmN0aW9ucyhjb2RlKVxue1xuXHRjb2RlID0gY29kZVxuXHRcdC5yZXBsYWNlKC9cXEBpZlxcKCguKilcXCkvZywgJzxpZiBjb25kaXRpb249XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL1xcQGVsc2VpZlxcKCguKilcXCkvZywgJzxlbHNlLWlmIGNvbmRpdGlvbj1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvXFxAZWxzZS9nLCAnPGVsc2U+Jylcblx0XHQucmVwbGFjZSgvXFxAZW5kaWYvZywgJzxlbmRpZj4nKVxuXG5cblx0Y29uc29sZS5sb2coY29kZSk7XG5cblx0cmV0dXJuIGNvZGU7XG59IiwiaW1wb3J0IHsgY29tcGlsZXIsIF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlcic7XG5cbi8vIGltcG9ydCB7IHBhcnNlRXhwcmVzc2lvbiB9IGZyb20gJ0BzaW51b3VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9leHByZXNzaW9uJztcbmltcG9ydCB7IGNyZWF0ZURhdGEgfSBmcm9tIFwiQHNpbnVvdXMvY29tcGlsZXIvc3JjL3NjcmlwdC9kYXRhXCI7XG5pbXBvcnQgcGFyc2VIVE1MIGZyb20gJ0BzaW51b3VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9odG1sJztcblxuXG5sZXQgZGF0YSA9IGNyZWF0ZURhdGEoKTtcblxuZGF0YS5kYXRhID0ge1xuXHRkMTogMSxcblx0ZDI6IDEsXG59XG5cbmRhdGEuc3RhdGUgPSB7XG5cdHMxOiAxLFxuXHRzMjogMSxcbn1cblxuZGF0YS5jb21wdXRlZCA9IHtcblx0YzE6IDEsXG5cdGMyOiAxLFxufVxuXG5kYXRhLm1ldGhvZHMgPSB7XG5cdG0xOiAxLFxuXHRtMjogMSxcbn1cblxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsIGBcbi8vIGxldCBkID0gZnVuY3Rpb24oKSB7fVxuLy8gbGV0IGQyID0gKCkgPT4ge31cbi8vIGZ1bmN0aW9uIGMxKHMzKSB7XG4vLyBcdGxldCBkID0gW107XG4vLyBcdGZvcihsZXQgaSA9IDA7IGkgPCBzMS5sZW5ndGg7IGkrKykge1xuLy8gXHRcdGQucHVzaChzMVtpXSk7XG4vLyBcdH1cbi8vIH1cbi8vIGApXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ3sgczE6ICgpID0+IHMxIH0nKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdhbGVydCgpOycsIHRydWUpXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ20xKGV2ZW50KScpXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ3MxICs9IDYnKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdkMSA9IGQxICsgNicpXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ2QxIC89IDYnKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdkLnB1c2goczEpJylcbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCAnZCA9ICgpID0+IHsgcmV0dXJuIHMxIH0nKVxuXG5cbmxldCBzb3VyY2UgPSBgXG48dGVtcGxhdGU+XG5cdDxkaXYgQGNsaWNrPVwiYWxlcnQoMSlcIj5cblx0XHR0ZXN0XG5cdFx0e3sgczIgfX1cblx0XHQ8YnI+XG5cdFx0PHRlbXBsYXRlIHYtaWY9XCJzMVwiPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0c2hvdyB7eyBkZGQgfX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdHRlc3Rcblx0XHRcdDwvc3Bhbj5cblx0XHQ8L3RlbXBsYXRlPlxuXHRcdDxkaXYgdi1lbHNlLWlmPVwiczNcIj5cblx0XHRcdHRlc3Rcblx0XHQ8L2Rpdj5cblx0XHQ8dGVtcGxhdGUgdi1lbHNlPlxuXHRcdGhpZGVcblx0XHQ8L3RlbXBsYXRlPlxuXHRcdDxkaXY+YWZ0ZXItb25jZS1pZjwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5sZXQgJHMxID0gdHJ1ZTtcbmxldCAkczIgPSAxMDtcbmxldCAkczMgPSBmYWxzZTtcbmxldCBkZGQgPSAxXG5cbmZ1bmN0aW9uIG1vdW50ZWQoKSB7XG5cdGFsZXJ0KDEpO1xufVxuPC9zY3JpcHQ+XG5cbmA7XG5cbi8vIHBhcnNlSFRNTChzb3VyY2UpO1xuXG5cbmxldCBibG9jayA9IGNvbXBpbGVyKHtcblx0Y29udGV4dDogZGF0YSxcblx0dHlwZTogJ3RlbXBsYXRlJyxcblx0c291cmNlOiBzb3VyY2UsXG59KTtcblxuY29uc29sZS5sb2coYmxvY2suc291cmNlLnJlbmRlcikiXSwic291cmNlUm9vdCI6IiJ9