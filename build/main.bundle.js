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

function setIdentifierContext(ctx, data, path) {
  if (['FunctionDeclaration', 'VariableDeclarator', 'LabeledStatement'].includes(path.parent.type) || ['property'].includes(path.key)) {
    return false;
  }

  var id = path.node;
  var name = getIdentifierName(id);
  var match = matchIdentifier(data, id);

  if (match.namespace === false) {
    return false;
  }

  name = ctx + "._" + match.namespace + "." + name;

  if (match.observable && path.container.type !== 'CallExpression') {
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

var _parseVariables = _interopRequireDefault(__webpack_require__(/*! ./parseVariables */ "./packages/compiler/dist/script/parseVariables.js"));

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
  (0, _parseVariables.default)(data, ast);
  (0, _parseMethods.default)(data, ast);
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
  (0, _parseVariables.default)(data, ast);
  (0, _parseMethods.default)(data, ast); // console.log(data);

  return (0, _generator.default)((0, _AstGenerator.default)(data), {
    retainLines: false,
    compact: false,
    minified: false,
    concise: false,
    quotes: "double"
  }, source);
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

/***/ "./packages/compiler/dist/script/parseVariables.js":
/*!*********************************************************!*\
  !*** ./packages/compiler/dist/script/parseVariables.js ***!
  \*********************************************************/
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

var _helpers = __webpack_require__(/*! ./helpers */ "./packages/compiler/dist/script/helpers.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // Get all data
// Mark data as reactive or stateless


var functionHandling = false;

function collectVariables(data) {
  return {
    VariableDeclarator: {
      enter: function enter(path) {
        if (functionHandling) {
          return;
        }

        var id = path.node.id;
        var value = path.node.init;
        var name = (0, _helpers.getIdentifierName)(id);

        if ((0, _helpers.isIdentifierReactive)(data, id)) {
          data.state[name] = value;
        } else {
          data.data[name] = value;
        }
      }
    },
    FunctionDeclaration: {
      enter: function enter(path) {
        functionHandling = true;
      },
      exit: function exit(path) {
        functionHandling = false;
      }
    }
  };
}

function _default(data, ast) {
  (0, _traverse.default)(ast, collectVariables(data));
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
      var condition = (0, _expression.parseExpression)(context, statement.condition, false);

      if (statement.start) {
        console.log(this);
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

  if (key[0] === '@') {
    statefull = true;
    isExpression = true;
  }

  if (key[0] === '_') {
    value = '`' + value.replace(/{{(.*)}}/g, '${$1}') + '`';
  }

  var exp = (0, _expression.parseExpression)(context, value, isExpression);
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
exports.parseExpression = parseExpression;
exports.default = expression;

var parser = _interopRequireWildcard(__webpack_require__(/*! @babel/parser */ "./node_modules/@babel/parser/lib/index.js"));

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

var _generator = _interopRequireDefault(__webpack_require__(/*! @babel/generator */ "./node_modules/@babel/generator/lib/index.js"));

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

function parseExpression(context, code, isExpression) {
  if (isExpression === void 0) {
    isExpression = false;
  }

  code = String(code); // code = '`' + code.replace(/{{(.*)}}/g, '${$1}') + '`';

  console.warn(code); // if(str) {
  // 	code = `'${code}'`;
  // }

  var ast = parser.parse(code);
  var observable = false;
  var FunctionDeclaration = false;
  (0, _traverse.default)(ast, {
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
        if (!(0, _helpers.isIdentifierReactive)(context.data, path.node.left)) {
          return;
        }

        var args = [path.node.right];

        if (path.node.operator.length > 1) {
          args = [(0, _types.BinaryExpression)(path.node.operator[0], path.node.left, path.node.right)];
        }

        var name = (0, _helpers.getIdentifierName)(path.node.left);
        path.replaceWith((0, _types.CallExpression)((0, _types.identifier)(name), args));
        observable = true;
      }
    },
    Identifier: {
      enter: function enter(path) {
        (0, _helpers.checkFunctionArgumentDeclaration)(context.data, path);

        if ((0, _helpers.setIdentifierContext)('this', context.data, path)) {
          observable = true;
        }
      }
    }
  });
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

  console.log(code);
  console.log('--------');
  return {
    statefull: observable,
    value: code
  };
}

function expression(context, code, execute) {
  if (execute === void 0) {
    execute = false;
  }

  var ast = parser.parse(code);
  var changed = false;
  var statefull = false;
  (0, _traverse.default)(ast, {
    enter: function enter(path) {
      if (path.node.type === 'Identifier') {
        if (!['key', 'label'].includes(path.key)) {
          var nameBuilder = [];
          var variable = path.node.name;
          var variableWithContext = (0, _helpers2.getVariable)(context.data, variable);

          if (path.container.type === 'CallExpression') {
            variableWithContext = false;
          }

          if (variableWithContext) {
            nameBuilder.push('ctx');
            nameBuilder.push(variableWithContext);
          } else {
            nameBuilder.push(variable);
          }

          if (!variable) {
            throw new Error("There is no " + variable + " in context " + context);
          }

          if (context.reactive_variables.includes(variable)) {
            statefull = true;
          }

          path.node.name = nameBuilder.join('.') + (execute ? '()' : '');
          changed = true;
        } else {
          path.node.name = (0, _attrs.prepareOptionKey)(path.node.name);
        }
      }
    }
  });
  code = (0, _generator.default)(ast, {
    retainLines: true,
    compact: true,
    minified: true,
    concise: true,
    quotes: "double"
  }, code).code; // clean append

  code = code.replace(/(;|,)$/g, '');

  if (changed && execute) {
    code = "() => { return " + code + "; }";
  }

  return {
    statefull: statefull,
    value: code
  };
}

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

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _compiler = __webpack_require__(/*! @sinuous/compiler */ "./packages/compiler/dist/index.js");

var _data = __webpack_require__(/*! @sinuous/compiler/src/script/data */ "./packages/compiler/src/script/data.js");

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

var source = "\n<template>\n\t<div @click=\"alert(1)\" :style=\"{ adc: s1 }\">\n\t\ttest\n\t\t<template v-if=\"s23 = 2\">\n\t\tshow\n\t\t</template>\n\t\t<div v-else-if=\"some2\">\n\t\t\ttest\n\t\t</div>\n\t\t<template v-else>\n\t\thide\n\t\t</template>\n\t\t<span data-stop>stop</span>\n\t\t<div v-if=\"once\">if-once</div>\n\t\t<div>after-once-if</div>\n\t</div>\n</template>\n";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvbXBpbGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvQXN0R2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2NyaXB0L2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3NjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3NjcmlwdC9wYXJzZU1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvcGFyc2VWYXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90ZW1wbGF0ZS9Ob2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdGVtcGxhdGUvVGV4dE5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90ZW1wbGF0ZS9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90ZW1wbGF0ZS9nZW5lcmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90ZW1wbGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL3BhcnNlRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zY3JpcHQvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVzdC5qcyJdLCJuYW1lcyI6WyJibG9ja3MiLCJzb3VyY2UiLCJ0eXBlIiwiZXhlYyIsInMiLCJjb21waWxlciIsImNvbnRleHQiLCJyb290IiwibG93ZXJDYXNlVGFnTmFtZSIsInNjcmlwdCIsIm5vZGVzIiwiaSIsImlubmVySFRNTCIsIl8iLCJSZWFjdGl2ZU5hbWVzcGFjZXMiLCJuYW1lIiwiaWQiLCJkYXRhIiwicGF0aCIsImdldElkZW50aWZpZXJOYW1lIiwibWF0Y2giLCJtYXRjaElkZW50aWZpZXIiLCJjdHgiLCJuYW1lc3BhY2UiLCJPYmplY3QiLCJvYnNlcnZhYmxlIiwiaW1wb3J0cyIsInByb3BlcnRpZXMiLCJvYmplY3QiLCJGdW5jdGlvblJldHVybkV4cHJlc3Npb24iLCJnZW5lcmF0ZUZ1bmN0aW9uUmV0dXJuRXhwcmVzc2lvbiIsIk9iamVjdFJldHVybkV4cHJlc3Npb24iLCJnZW5lcmF0ZU9iamVjdFJldHVybkV4cHJlc3Npb24iLCJleHBvcnRlZE9iamVjdCIsImV4cG9ydGVkRGVmYXVsdCIsImJvZHkiLCJ2YWx1ZXMiLCJ2YWwiLCJSZWFjdGl0eSIsIkZ1bmN0aW9uUmV0dXJuIiwicHJvcHMiLCJzdGF0ZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsIkFpaUV4cHJlc3Npb24iLCJpc0Z1bmN0aW9uIiwiYXBwZW5kIiwiaXNJZGVudGlmaWVyUmVhY3RpdmUiLCJhc3QiLCJzb3VyY2VUeXBlIiwic3RyaWN0TW9kZSIsInJlYWN0aXZlX3ZhcmlhYmxlcyIsInJldGFpbkxpbmVzIiwiY29tcGFjdCIsIm1pbmlmaWVkIiwiY29uY2lzZSIsInF1b3RlcyIsImZ1bmN0aW9uQmxvY2tIYW5kbGluZyIsImFzc2lnbm1lbnRIYW5kbGluZyIsInZhcmlhYmxlRGVjbGFyYXRpb25IYW5kbGluZyIsInNob3VsZEFzc2lnbm1lbnRIYW5kbGUiLCJoYXNGdW5jdGlvblJlYWN0aXZlIiwibWVtYmVySGFuZGxpbmciLCJJbXBvcnREZWNsYXJhdGlvbiIsImVudGVyIiwiSWRlbnRpZmllciIsImV4aXQiLCJDYWxsRXhwcmVzc2lvbiIsIk1lbWJlckV4cHJlc3Npb24iLCJWYXJpYWJsZURlY2xhcmF0b3IiLCJFeHByZXNzaW9uU3RhdGVtZW50IiwiZXhwcmVzc2lvbiIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiQmxvY2tTdGF0ZW1lbnQiLCJjb2xsZWN0TWV0aG9kcyIsImZ1bmN0aW9uSGFuZGxpbmciLCJ2YWx1ZSIsIkZ1bmN0aW9uRGVjbGFyYXRpb24iLCJjb2xsZWN0VmFyaWFibGVzIiwiSElEIiwiaXNOb25QaHJhc2luZ1RhZyIsIklGX1NUQVRFTUVOVF9TVEFSVEVEIiwiY2hpbGRyZW4iLCJ0YWciLCJOb2RlIiwiYXR0cnMiLCJzZXRTaWJsaW5ncyIsInRvQVNUIiwiaHlkcmF0ZSIsImNvZGUiLCJzaG91bGRIeWRhcmF0ZSIsInNob3VsZE9wdGlvbnNIeWRyYXRlIiwiY2hpbGQiLCJzdGF0ZWZ1bGwiLCJvcHRpb25zIiwia2V5IiwiZm5fZ2VuZXJhdGVkIiwic3RhdGVtZW50IiwiY29uZGl0aW9uIiwiY29uc29sZSIsImdldENvbXBvbmVudENvZGUiLCJUZXh0Tm9kZSIsIkF0dHJzTWFwIiwiSFRNTEF0dHJpYnV0ZXMiLCJpc0V4cHJlc3Npb24iLCJleHAiLCJzdHlsZXMiLCJwYWlycyIsInN0cmluZyIsInRtcCIsInZhcmlhYmxlIiwib3B0aW9uX2tleSIsInByZXBhcmVPcHRpb25LZXkiLCJwYXJzZVN0eWxlcyIsIlN0cmluZyIsInBhcnNlciIsImFyZ3MiLCJleGVjdXRlIiwiY2hhbmdlZCIsIm5hbWVCdWlsZGVyIiwidmFyaWFibGVXaXRoQ29udGV4dCIsImlzUm9vdCIsIm5vZGUiLCJnZW5lcmF0ZVRyZWUiLCJ0cmVlIiwicmVuZGVyIiwicmVzdWx0IiwicmVuZGVyQVNUIiwiaHlkcmF0aW9uQVNUIiwidmFyX3BhcnRzIiwiSUZfQVRUUlMiLCJzdGFydCIsImVuZCIsImlzIiwiY3JlYXRlRGF0YSIsImQxIiwiZDIiLCJzMSIsInMyIiwiYzEiLCJjMiIsIm0xIiwibTIiLCJibG9jayIsImxvZyJdLCJtYXBwaW5ncyI6IjtR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UDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDWEQ7O0FBR0E7O0FBREE7QUFHQSxJQUFJVyxJQUFJLEdBQUcsdUJBQVg7QUFFQUEsSUFBSSxDQUFDQSxJQUFMLEdBQVk7QUFDWHNILElBQUUsRUFBRSxDQURPO0FBRVhDLElBQUUsRUFBRTtBQUZPLENBQVo7QUFLQXZILElBQUksQ0FBQ3dCLEtBQUwsR0FBYTtBQUNaZ0csSUFBRSxFQUFFLENBRFE7QUFFWkMsSUFBRSxFQUFFO0FBRlEsQ0FBYjtBQUtBekgsSUFBSSxDQUFDeUIsUUFBTCxHQUFnQjtBQUNmaUcsSUFBRSxFQUFFLENBRFc7QUFFZkMsSUFBRSxFQUFFO0FBRlcsQ0FBaEI7QUFLQTNILElBQUksQ0FBQzBCLE9BQUwsR0FBZTtBQUNka0csSUFBRSxFQUFFLENBRFU7QUFFZEMsSUFBRSxFQUFFO0FBRlUsQ0FBZixDLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQUk3SSxNQUFNLGtYQUFWO0FBb0JBLElBQUk4SSxLQUFLLEdBQUcsd0JBQVM7QUFDcEJ6SSxTQUFPLEVBQUVXLElBRFc7QUFFcEJmLE1BQUksRUFBRSxVQUZjO0FBR3BCRCxRQUFNLEVBQUVBO0FBSFksQ0FBVCxDQUFaO0FBTUFrRyxPQUFPLENBQUM2QyxHQUFSLENBQVlELEtBQUssQ0FBQzlJLE1BQU4sQ0FBYTRILE1BQXpCLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBjb21waWxlU2NyaXB0IH0gZnJvbSBcIi4vc2NyaXB0XCI7XG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUgfSBmcm9tIFwiLi90ZW1wbGF0ZVwiO1xuXG5mdW5jdGlvbiBjb21waWxlcihjb250ZXh0LCB7IGJsb2Nrcywgc291cmNlLCB0eXBlIH0pXG57XG5cdGxldCBleGVjID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzb3VyY2U7XG5cdH1cblxuXHRpZih0eXBlID09PSAnc2NyaXB0Jykge1xuXHRcdGxldCBzID0gY29tcGlsZVNjcmlwdChjb250ZXh0LCBzb3VyY2UpO1xuXHRcdHNvdXJjZSA9IHMuY29kZSA9PSAnJyA/IG51bGwgOiBzLmNvZGU7XG5cdH1cblxuXHRpZih0eXBlID09PSAndGVtcGxhdGUnKSB7XG5cdFx0c291cmNlID0gY29tcGlsZVRlbXBsYXRlKGNvbnRleHQsIHNvdXJjZSwgYmxvY2tzKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c291cmNlLFxuXHRcdHR5cGUsXG5cdFx0ZXhlYyxcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCB7IHR5cGUsIHNvdXJjZSB9KVxue1xuXHRyZXR1cm4ge1xuXHRcdHR5cGUsXG5cdFx0c291cmNlLFxuXHRcdGV4ZWMoYmxvY2tzID0gW10pIHtcblx0XHRcdHJldHVybiBjb21waWxlcihjb250ZXh0LCB7XG5cdFx0XHRcdGJsb2Nrcyxcblx0XHRcdFx0c291cmNlOiB0aGlzLnNvdXJjZSxcblx0XHRcdFx0dHlwZTogdGhpcy50eXBlLFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbn07IiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdub2RlLWh0bWwtcGFyc2VyJztcbmltcG9ydCBibG9jayBmcm9tICcuL2Jsb2NrLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVyKHsgY29udGV4dCwgdHlwZSwgc291cmNlIH0pIHtcblxuXHRsZXQgcm9vdCA9IHBhcnNlKHNvdXJjZSwge1xuXHRcdGxvd2VyQ2FzZVRhZ05hbWU6IHRydWUsXG5cdFx0c2NyaXB0OiB0cnVlLFxuXHR9KTtcblxuXHRsZXQgbm9kZXMgPSByb290LmNoaWxkTm9kZXM7XG5cdGxldCBibG9ja3MgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYobm9kZXNbaV0udGFnTmFtZSkge1xuXHRcdFx0YmxvY2tzW25vZGVzW2ldLnRhZ05hbWVdID0gYmxvY2soY29udGV4dCwge1xuXHRcdFx0XHR0eXBlOiBub2Rlc1tpXS50YWdOYW1lLFxuXHRcdFx0XHRzb3VyY2U6IG5vZGVzW2ldLmlubmVySFRNTCxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVx0XG5cblx0aWYoYmxvY2tzW3R5cGVdKSB7XG5cdFx0cmV0dXJuIGJsb2Nrc1t0eXBlXS5leGVjKGJsb2Nrcyk7XG5cdH1cblxuXHRyZXR1cm4gYmxvY2soY29udGV4dCwge1xuXHRcdHR5cGU6IHR5cGUsXG5cdFx0c291cmNlOiBudWxsLFxuXHR9KTtcbn0iLCJleHBvcnQgY29uc3QgXyA9IC0xO1xuIiwiZXhwb3J0IGNvbnN0IFJlYWN0aXZlTmFtZXNwYWNlcyA9IFsnc3RhdGUnLCAnY29tcHV0ZWQnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIGlkKVxue1xuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cdFxuXHRpZihuYW1lLm1hdGNoKC9eXFwkL2cpKVx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGRhdGEuc3RhdGVbbmFtZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJZGVudGlmaWVyTmFtZShpZClcbntcblx0aWYoIWlkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cblx0aWYobmFtZS5tYXRjaCgvXlxcJC9nKSlcdHtcblx0XHRyZXR1cm4gbmFtZS5zdWJzdHJpbmcoMSlcblx0fVxuXG5cdHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb24oZGF0YSwgcGF0aClcbntcblx0aWYocGF0aC5wYXJlbnQudHlwZSAhPT0gJ0Z1bmN0aW9uRGVjbGFyYXRpb24nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblx0bGV0IG1hdGNoID0gbWF0Y2hJZGVudGlmaWVyKGRhdGEsIGlkKTtcblxuXHRpZihtYXRjaC5uYW1lc3BhY2UgJiYgcGF0aC5saXN0S2V5ID09PSAncGFyYW1zJykge1xuXHRcdHRocm93IG5ldyBFcnJvcihgVmFyaWFibGUgJHsgbmFtZSB9IGhhcyBhbHJlYWR5IGRlZmluZWQgaW4gJHsgbWF0Y2gubmFtZXNwYWNlIH1gKVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJZGVudGlmaWVyQ29udGV4dChjdHgsIGRhdGEsIHBhdGgpXG57XG5cdGlmKFsnRnVuY3Rpb25EZWNsYXJhdGlvbicsICdWYXJpYWJsZURlY2xhcmF0b3InLCAnTGFiZWxlZFN0YXRlbWVudCddLmluY2x1ZGVzKHBhdGgucGFyZW50LnR5cGUpIHx8IFsncHJvcGVydHknXS5pbmNsdWRlcyhwYXRoLmtleSkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXHRsZXQgbWF0Y2ggPSBtYXRjaElkZW50aWZpZXIoZGF0YSwgaWQpO1xuXHRcblx0aWYobWF0Y2gubmFtZXNwYWNlID09PSBmYWxzZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdG5hbWUgPSBgJHtjdHh9Ll8ke21hdGNoLm5hbWVzcGFjZX0uJHtuYW1lfWA7XG5cblx0aWYobWF0Y2gub2JzZXJ2YWJsZSAmJiBwYXRoLmNvbnRhaW5lci50eXBlICE9PSAnQ2FsbEV4cHJlc3Npb24nKSB7XG5cdFx0bmFtZSArPSAnKCknO1xuXHR9XG5cblx0aWQubmFtZSA9IG5hbWU7XG5cblx0cmV0dXJuIG1hdGNoLm9ic2VydmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaElkZW50aWZpZXIoY29udGV4dCwgaWQpXG57XG5cdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXHRsZXQgbmFtZXNwYWNlID0gZmFsc2U7XG5cblx0Zm9yKGxldCBrZXkgaW4gY29udGV4dCkge1xuXHRcdGlmKE9iamVjdC5rZXlzKGNvbnRleHRba2V5XSkuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdG5hbWVzcGFjZSA9IGtleTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdG5hbWVzcGFjZSxcblx0XHRvYnNlcnZhYmxlOiBSZWFjdGl2ZU5hbWVzcGFjZXMuaW5jbHVkZXMobmFtZXNwYWNlKVxuXHR9O1xufSIsImltcG9ydCB7IF8gfSBmcm9tICcuL2VtcHR5LmpzJztcbmltcG9ydCB7IGNvbXBpbGVyIH0gZnJvbSAnLi9jb21waWxlci5qcyc7XG5cbmV4cG9ydCB7IF8sIGNvbXBpbGVyIH0iLCJpbXBvcnQge1xuXHRFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24sXG5cdE9iamVjdEV4cHJlc3Npb24sXG5cdE9iamVjdFByb3BlcnR5LFxuXHRPYmplY3RNZXRob2QsXG5cdENhbGxFeHByZXNzaW9uLFxuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRCbG9ja1N0YXRlbWVudCxcblx0UmV0dXJuU3RhdGVtZW50LFxuXHRpZGVudGlmaWVyLFxuXHRwcm9ncmFtLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7XG5cdC8vIENvbnN0c1xuXHRSZWFjdGl0eSxcblx0RnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uLFxuXHRPYmplY3RSZXR1cm5FeHByZXNzaW9uLFxuXHRBaWlFeHByZXNzaW9uLFxufSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRhdGEpXG57XG5cdGxldCBpbXBvcnRzID0gW107XG5cblx0Zm9yKGxldCBwcm9wIGluIGRhdGEuaW1wb3J0cykge1xuXHRcdGltcG9ydHMucHVzaChkYXRhLmltcG9ydHNbcHJvcF0pXG5cdH07XG5cblx0bGV0IHByb3BlcnRpZXMgPSBbXTtcblxuXHRPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChwcm9wLCBrZXkpID0+IHtcblxuXHRcdGxldCBvYmplY3QgPSBudWxsO1xuXG5cdFx0aWYoRnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uLmluY2x1ZGVzKHByb3ApKSB7XG5cdFx0XHRvYmplY3QgPSBnZW5lcmF0ZUZ1bmN0aW9uUmV0dXJuRXhwcmVzc2lvbihkYXRhLCBwcm9wKTtcblx0XHR9IGVsc2UgaWYoT2JqZWN0UmV0dXJuRXhwcmVzc2lvbi5pbmNsdWRlcyhwcm9wKSkge1xuXHRcdFx0b2JqZWN0ID0gZ2VuZXJhdGVPYmplY3RSZXR1cm5FeHByZXNzaW9uKGRhdGEsIHByb3ApO1xuXHRcdH1cblxuXHRcdGlmKCFvYmplY3QpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0cHJvcGVydGllcy5wdXNoKG9iamVjdCk7XG5cdH0pXG5cblx0bGV0IGV4cG9ydGVkT2JqZWN0ID0gT2JqZWN0RXhwcmVzc2lvbihwcm9wZXJ0aWVzKTtcblx0bGV0IGV4cG9ydGVkRGVmYXVsdCA9IFtcblx0XHRFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24oZXhwb3J0ZWRPYmplY3QpXG5cdF07XG5cblx0bGV0IGJvZHkgPSBbXVxuXHRcdC5jb25jYXQoaW1wb3J0cylcblx0XHQuY29uY2F0KGV4cG9ydGVkRGVmYXVsdClcblxuXHRyZXR1cm4gcHJvZ3JhbShcblx0XHRib2R5LCBcblx0XHRbXSxcblx0XHQnbW9kdWxlJ1xuXHQpO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlRnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uKGRhdGEsIHJldHVyblByb3ApXG57XG5cdGxldCB2YWx1ZXMgPSBkYXRhW3JldHVyblByb3BdO1xuXHRsZXQgcHJvcGVydGllcyA9IFtdO1xuXG5cdGZvcihsZXQgcHJvcCBpbiB2YWx1ZXMpIHtcblx0XHRsZXQgdmFsID0gdmFsdWVzW3Byb3BdO1xuXG5cdFx0aWYodmFsLnR5cGUgPT09ICdCbG9ja1N0YXRlbWVudCcpIHtcblx0XHRcdHZhbCA9IEFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtdLCB2YWwpO1xuXHRcdH1cblxuXHRcdGlmKFJlYWN0aXR5W3JldHVyblByb3BdKSB7XG5cdFx0XHR2YWwgPSBDYWxsRXhwcmVzc2lvbihpZGVudGlmaWVyKFJlYWN0aXR5W3JldHVyblByb3BdKSwgW3ZhbF0pO1xuXHRcdH1cblxuXHRcdHByb3BlcnRpZXMucHVzaChcblx0XHRcdE9iamVjdFByb3BlcnR5KGlkZW50aWZpZXIocHJvcCksIHZhbClcblx0XHQpXG5cdH1cblxuXHRsZXQgRnVuY3Rpb25SZXR1cm4gPSBSZXR1cm5TdGF0ZW1lbnQoXG5cdFx0T2JqZWN0RXhwcmVzc2lvbihcblx0XHRcdHByb3BlcnRpZXNcblx0XHQpXG5cdClcblxuXHRsZXQgYm9keSA9IEJsb2NrU3RhdGVtZW50KFtGdW5jdGlvblJldHVybl0pXG5cblx0bGV0IG9iamVjdCA9IE9iamVjdE1ldGhvZCgnbWV0aG9kJywgaWRlbnRpZmllcihyZXR1cm5Qcm9wKSxcblx0XHRSZWFjdGl0eVtyZXR1cm5Qcm9wXSA/IFtpZGVudGlmaWVyKFJlYWN0aXR5W3JldHVyblByb3BdKV0gOiBbXVxuXHQsIGJvZHkpO1xuXG5cdHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlT2JqZWN0UmV0dXJuRXhwcmVzc2lvbihkYXRhLCBwcm9wKVxue1xuXHRsZXQgdmFsdWVzID0gZGF0YVtwcm9wXTtcblx0bGV0IHByb3BlcnRpZXMgPSBbXTtcblxuXHRmb3IobGV0IHByb3AgaW4gdmFsdWVzKSB7XG5cdFx0bGV0IHZhbCA9IHZhbHVlc1twcm9wXTtcblxuXHRcdGlmKHZhbC50eXBlID09PSAnRnVuY3Rpb25EZWNsYXJhdGlvbicpIHtcblx0XHRcdHZhbCA9IEZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCB2YWwucGFyYW1zLCB2YWwuYm9keSk7XG5cdFx0fVxuXG5cdFx0cHJvcGVydGllcy5wdXNoKFxuXHRcdFx0T2JqZWN0UHJvcGVydHkoaWRlbnRpZmllcihwcm9wKSwgdmFsKVxuXHRcdClcblx0fVxuXG5cdGxldCBvYmplY3QgPSBPYmplY3RQcm9wZXJ0eShcblx0XHRpZGVudGlmaWVyKHByb3ApLFxuXHRcdE9iamVjdEV4cHJlc3Npb24ocHJvcGVydGllcylcblx0KTtcblxuXHRyZXR1cm4gb2JqZWN0O1xufSIsImV4cG9ydCBjb25zdCBkYXRhID0ge1xuXHRpbXBvcnRzOiBbXSxcblx0cHJvcHM6IHt9LFxuXHRkYXRhOiB7fSxcblx0c3RhdGU6IHt9LFxuXHRjb21wdXRlZDoge30sXG5cdG1ldGhvZHM6IHt9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0YShjb250ZXh0KSB7XG5cdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7fSwgY29udGV4dCk7XG59IiwiLy8gaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xuXG4vKipcbiAqIENvbnN0c1xuICovXG5cbmV4cG9ydCBjb25zdCBSZWFjdGl0eSA9IHtcblx0J3N0YXRlJzogJ28nLFxuXHQnY29tcHV0ZWQnOiAnbycsXG59O1xuXG5leHBvcnQgY29uc3QgRnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uID0gW1xuXHQnZGF0YScsICdzdGF0ZScsICdjb21wdXRlZCcsXG5dO1xuXG5leHBvcnQgY29uc3QgT2JqZWN0UmV0dXJuRXhwcmVzc2lvbiA9IFtcblx0J21ldGhvZHMnLCBcbl07XG5cbi8vIEFzIGl0IGlzIGV4cHJlc3Npb25zXG5leHBvcnQgY29uc3QgQWlpRXhwcmVzc2lvbiA9IFtcblx0J2ltcG9ydHMnLFxuXTtcblxuLy8gZXhwb3J0IGNvbnN0IFJFVFVSTl9GVU5DVElPTl9UWVBFID0gMTtcbi8vIGV4cG9ydCBjb25zdCBPQkpFQ1RfRlVOQ1RJT05fVFlQRSA9IDI7XG5cbi8qKlxuICogRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29udGV4dGFibGUoZGF0YSwgaWQpXG57XG5cdGxldCBuYW1lID0gaWQubmFtZTtcblx0bGV0IGlzRnVuY3Rpb24gPSBuYW1lLm1hdGNoKC9cXChcXCkkL2cpO1xuXG5cdG5hbWUgPSBuYW1lLnJlcGxhY2UoLyhcXCh8XFwpKS9nLCAnJyk7XG5cblx0aWYoIW5hbWUubWF0Y2goL150aGlzXFwuL2dpKSkge1xuXHRcdGxldCBhcHBlbmQgPSBbJ3RoaXMnXTtcblx0XHRcblx0XHRpZihPYmplY3Qua2V5cyhkYXRhLnN0YXRlKS5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdFx0YXBwZW5kLnB1c2goJ19zdGF0ZScpO1xuXHRcdH0gZWxzZSBpZihPYmplY3Qua2V5cyhkYXRhLmNvbXB1dGVkKS5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdFx0YXBwZW5kLnB1c2goJ19jb21wdXRlZCcpO1xuXHRcdH0gZWxzZSBpZihPYmplY3Qua2V5cyhkYXRhLmRhdGEpLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRhcHBlbmQucHVzaCgnX2RhdGEnKTtcblx0XHR9IGVsc2UgaWYoT2JqZWN0LmtleXMoZGF0YS5tZXRob2RzKS5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdFx0YXBwZW5kLnB1c2goJ19tZXRob2RzJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gdmFyaWFibGUgJHtuYW1lfWApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGFwcGVuZC5wdXNoKG5hbWUpO1xuXG5cdFx0bmFtZSA9IGFwcGVuZC5qb2luKCcuJyk7XG5cdH1cblxuXHRpZihpc0Z1bmN0aW9uKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9KClgO1xuXHR9XG5cblx0aWQubmFtZSA9IG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lkZW50aWZpZXJSZWFjdGl2ZShkYXRhLCBpZClcbntcblx0bGV0IG5hbWUgPSBpZC5uYW1lO1xuXHRcblx0aWYobmFtZS5tYXRjaCgvXlxcJC9nKSlcdHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBkYXRhLnN0YXRlW25hbWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWRlbnRpZmllck5hbWUoaWQpXG57XG5cdGlmKCFpZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bGV0IG5hbWUgPSBpZC5uYW1lO1xuXG5cdGlmKG5hbWUubWF0Y2goL15cXCQvZykpXHR7XG5cdFx0cmV0dXJuIG5hbWUuc3Vic3RyaW5nKDEpXG5cdH1cblxuXHRyZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VPYnNlcnZhYmxlR2V0dGVyKGRhdGEsIGlkKVxue1xuXHRpZighaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgaWQpKSB7XG5cdFx0cmV0dXJuIGlkO1xuXHR9XG5cdFxuXHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblx0aWQubmFtZSA9IGAkeyBuYW1lIH0oKWA7XG5cblx0cmV0dXJuIGlkO1xufSIsIlxuXG5pbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcbmltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiQGJhYmVsL2dlbmVyYXRvclwiO1xuXG5pbXBvcnQgeyBjcmVhdGVEYXRhIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHBhcnNlVmFyaWFibGVzIGZyb20gXCIuL3BhcnNlVmFyaWFibGVzXCI7XG5pbXBvcnQgcGFyc2VNZXRob2RzIGZyb20gXCIuL3BhcnNlTWV0aG9kc1wiO1xuaW1wb3J0IEFzdEdlbmVyYXRvciBmcm9tIFwiLi9Bc3RHZW5lcmF0b3JcIjtcblxuXG4vKipcbiAqIENvbXBpbGVyXG4gKiBAcGFyYW0gIHtbdHlwZV19IHNvdXJjZSBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWFjdGl2ZVZhcmlhYmxlcyhjb250ZXh0LCBzb3VyY2UpXG57XG5cdGxldCBkYXRhID0gY3JlYXRlRGF0YShjb250ZXh0KTtcblxuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2Uoc291cmNlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRwYXJzZVZhcmlhYmxlcyhkYXRhLCBhc3QpO1xuXHRwYXJzZU1ldGhvZHMoZGF0YSwgYXN0KTtcblxuXHRsZXQgcmVhY3RpdmVfdmFyaWFibGVzID0gW107XG5cblx0cmVhY3RpdmVfdmFyaWFibGVzID0gcmVhY3RpdmVfdmFyaWFibGVzXG5cdFx0LmNvbmNhdChPYmplY3Qua2V5cyhkYXRhLnN0YXRlKSlcblx0XHQuY29uY2F0KE9iamVjdC5rZXlzKGRhdGEuY29tcHV0ZWQpKTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlYWN0aXZlX3ZhcmlhYmxlcyxcblx0XHRkYXRhLFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVNjcmlwdChjb250ZXh0LCBzb3VyY2UpXG57XG5cdGxldCBkYXRhID0gY3JlYXRlRGF0YSgpO1xuXHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2Uoc291cmNlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRwYXJzZVZhcmlhYmxlcyhkYXRhLCBhc3QpO1xuXHRwYXJzZU1ldGhvZHMoZGF0YSwgYXN0KTtcblxuXHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcblxuXHRyZXR1cm4gZ2VuZXJhdGUoQXN0R2VuZXJhdG9yKGRhdGEpLCB7XG5cdFx0cmV0YWluTGluZXM6IGZhbHNlLFxuXHRcdGNvbXBhY3Q6IGZhbHNlLFxuXHRcdG1pbmlmaWVkOiBmYWxzZSxcblx0XHRjb25jaXNlOiBmYWxzZSxcblx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG5cdH0sIHNvdXJjZSk7XG59XG4iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5pbXBvcnQge1xuXHRpZGVudGlmaWVyLFxuXHRDYWxsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQge1xuXHRnZXRJZGVudGlmaWVyTmFtZSxcblx0aXNJZGVudGlmaWVyUmVhY3RpdmUsXG5cdG1ha2VPYnNlcnZhYmxlR2V0dGVyLFxuXHRtYWtlQ29udGV4dGFibGUsXG59IGZyb20gXCIuL2hlbHBlcnNcIjtcblxubGV0IGZ1bmN0aW9uQmxvY2tIYW5kbGluZyA9IGZhbHNlO1xubGV0IGFzc2lnbm1lbnRIYW5kbGluZyA9IGZhbHNlO1xubGV0IHZhcmlhYmxlRGVjbGFyYXRpb25IYW5kbGluZyA9IGZhbHNlO1xubGV0IHNob3VsZEFzc2lnbm1lbnRIYW5kbGUgPSBmYWxzZTtcbmxldCBoYXNGdW5jdGlvblJlYWN0aXZlID0gZmFsc2U7XG5sZXQgbWVtYmVySGFuZGxpbmcgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3RNZXRob2RzIChkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0Ly8gc2F2ZSBpbXBvcnRzXG5cdFx0SW1wb3J0RGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0ZGF0YS5pbXBvcnRzW3BhdGgubm9kZS5zb3VyY2UudmFsdWVdID0gcGF0aC5ub2RlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogVHJhbnNsYXRlIHVzdWFsIHZhcmlhYmxlcyB0byByZWFjdGl2ZVxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cdFx0ICAgICAgICBpZihmdW5jdGlvbkJsb2NrSGFuZGxpbmcpIHtcblx0XHQgICAgICAgIFx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShpZCk7XG5cblx0XHQgICAgICAgIFx0aWYoZGF0YS5zdGF0ZVtuYW1lXSAmJiAhYXNzaWdubWVudEhhbmRsaW5nICYmICFbJ0NhbGxFeHByZXNzaW9uJ10uaW5jbHVkZXMocGF0aC5jb250YWluZXIudHlwZSkpIHtcblx0XHQgICAgICAgIFx0XHRoYXNGdW5jdGlvblJlYWN0aXZlID0gdHJ1ZTtcblx0XHQgICAgICAgIFx0fVxuXG5cdFx0ICAgICAgICBcdGlmKCFbJ0Fzc2lnbm1lbnRFeHByZXNzaW9uJywgJ0NhbGxFeHByZXNzaW9uJ10uaW5jbHVkZXMocGF0aC5jb250YWluZXIudHlwZSkgJiYgIXZhcmlhYmxlRGVjbGFyYXRpb25IYW5kbGluZykge1xuXHRcdCAgICAgICAgXHRcdG1ha2VPYnNlcnZhYmxlR2V0dGVyKGRhdGEsIGlkKTtcblx0XHRcdCAgICAgICAgfVxuXG5cdFx0XHQgICAgICAgIGlmKCF2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcgJiYgIW1lbWJlckhhbmRsaW5nKSB7XG5cdFx0XHQgICAgICAgIFx0bWFrZUNvbnRleHRhYmxlKGRhdGEsIGlkKTtcblx0XHRcdCAgICAgICAgfVxuXG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aCkge1xuXHRcdCAgICAgICAgLy8gY29uc29sZS5sb2coXCJJZGVudGlmaWVyIGV4aXQgY2FsbGVkXCIsIHBhdGgubm9kZS5uYW1lKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0XG5cdFx0Q2FsbEV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0bWVtYmVySGFuZGxpbmcgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXHRcdFx0XHRtZW1iZXJIYW5kbGluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0TWVtYmVyRXhwcmVzc2lvbjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRtZW1iZXJIYW5kbGluZyA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cdFx0XHRcdG1lbWJlckhhbmRsaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHR2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXHRcdFx0XHR2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIE1ha2UgXG5cdFx0IHYgPSB2ICsgMVxuXHRcdCBUb1xuXHRcdCB2KHYoKSArIDEpXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHRFeHByZXNzaW9uU3RhdGVtZW50OiB7XG5cdFx0XHRleGl0KHBhdGgpIHtcblx0XHRcdFx0aWYocGF0aC5ub2RlLmV4cHJlc3Npb24udHlwZSA9PT0gJ0Fzc2lnbm1lbnRFeHByZXNzaW9uJykge1xuXHRcdFx0XHRcdGxldCBleHByZXNzaW9uID0gcGF0aC5ub2RlLmV4cHJlc3Npb247XG5cdFx0XHRcdFx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShleHByZXNzaW9uLmxlZnQpO1xuXHRcdFx0XHRcdHBhdGgucmVwbGFjZVdpdGgoXG5cdFx0XHRcdFx0XHRDYWxsRXhwcmVzc2lvbihpZGVudGlmaWVyKG5hbWUpLCBbZXhwcmVzc2lvbi5yaWdodF0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0QXNzaWdubWVudEV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0YXNzaWdubWVudEhhbmRsaW5nID0gdHJ1ZTtcblx0XHRcdFx0aWYoaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgcGF0aC5ub2RlLmxlZnQpKSB7XG5cdFx0XHRcdFx0c2hvdWxkQXNzaWdubWVudEhhbmRsZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRleGl0KHBhdGgpIHtcblx0XHRcdFx0YXNzaWdubWVudEhhbmRsaW5nID0gZmFsc2U7XG5cdFx0XHRcdHNob3VsZEFzc2lnbm1lbnRIYW5kbGUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZSBmdW5jdGlvblxuXHRcdCAqIEFkZCB0aGVtIHRvIG1ldGhvZHMgYW5kIGNvbXB1dGVkIHByb3BzXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHRCbG9ja1N0YXRlbWVudDoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRpZihwYXRoLnBhcmVudC50eXBlID09PSAnRnVuY3Rpb25EZWNsYXJhdGlvbicpIHtcblx0XHQgICAgXHRcdGZ1bmN0aW9uQmxvY2tIYW5kbGluZyA9IHRydWU7XG5cdFx0ICAgIFx0fVxuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpIHtcblx0XHQgICAgXHRpZighZnVuY3Rpb25CbG9ja0hhbmRsaW5nIHx8IHBhdGgucGFyZW50LnR5cGUgIT09ICdGdW5jdGlvbkRlY2xhcmF0aW9uJykge1xuXHRcdCAgICBcdFx0cmV0dXJuO1xuXHRcdCAgICBcdH1cblxuXHRcdCAgICBcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUocGF0aC5jb250YWluZXIuaWQpO1xuXHRcdCAgICBcdGlmKGhhc0Z1bmN0aW9uUmVhY3RpdmUpIHtcblx0XHQgICAgXHRcdGRhdGEuY29tcHV0ZWRbbmFtZV0gPSBwYXRoLm5vZGU7XG5cdFx0ICAgIFx0fSBlbHNlIHtcblx0XHQgICAgXHRcdGRhdGEubWV0aG9kc1tuYW1lXSA9IHBhdGguY29udGFpbmVyO1xuXHRcdCAgICBcdH1cblxuXHRcdCAgICBcdGhhc0Z1bmN0aW9uUmVhY3RpdmUgPSBmYWxzZTtcblx0XHQgICAgXHRmdW5jdGlvbkJsb2NrSGFuZGxpbmcgPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkYXRhLCBhc3QpXG57XG5cblx0dHJhdmVyc2UoYXN0LCBjb2xsZWN0TWV0aG9kcyhkYXRhKSk7XG59IiwiaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuaW1wb3J0IHtcblx0Z2V0SWRlbnRpZmllck5hbWUsXG5cdGlzSWRlbnRpZmllclJlYWN0aXZlLFxuXHRtYWtlT2JzZXJ2YWJsZUdldHRlcixcbn0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG4vLyBHZXQgYWxsIGRhdGFcbi8vIE1hcmsgZGF0YSBhcyByZWFjdGl2ZSBvciBzdGF0ZWxlc3NcbmxldCBmdW5jdGlvbkhhbmRsaW5nID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsZWN0VmFyaWFibGVzIChkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZihmdW5jdGlvbkhhbmRsaW5nKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlLmlkO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBwYXRoLm5vZGUuaW5pdDtcblxuXHRcdFx0XHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblx0XHRcdFx0aWYoaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgaWQpKSB7XG5cdFx0XHRcdFx0ZGF0YS5zdGF0ZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRhdGEuZGF0YVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0ICAgIH0sXG5cdFx0fSxcblx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdGZ1bmN0aW9uSGFuZGxpbmcgPSB0cnVlO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpIHtcblx0XHQgICAgXHRmdW5jdGlvbkhhbmRsaW5nID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRhdGEsIGFzdClcbntcblx0dHJhdmVyc2UoYXN0LCBjb2xsZWN0VmFyaWFibGVzKGRhdGEpKTtcbn0iLCJpbXBvcnQgeyBwYXJzZU9wdGlvbnMsIHBhcnNlT3B0aW9uS2V5LCBwYXJzZU9wdGlvblZhbHVlIH0gZnJvbSAnLi9hdHRycyc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHBhcnNlU3RhdGVtZW50IH0gZnJvbSAnLi9wYXJzZUZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBwYXJzZUV4cHJlc3Npb24gfSBmcm9tICcuL2V4cHJlc3Npb24nO1xuXG5leHBvcnQgdmFyIEhJRCA9IDA7XG5cbmV4cG9ydCBjb25zdCBpc05vblBocmFzaW5nVGFnID0gW1xuXHQnYWRkcmVzcycsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2Jhc2UnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2NhcHRpb24nLCAnY29sJywgJ2NvbGdyb3VwJyxcblx0J2RkJywgJ2RldGFpbHMnLCAnZGlhbG9nJywgJ2RpdicsICdkbCcsICdkdCcsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb290ZXInLFxuXHQnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdsZWdlbmQnLFxuXHQnbGknLCAnbWVudWl0ZW0nLCAnbWV0YScsICdvcHRncm91cCcsICdvcHRpb24nLCAncGFyYW0nLCAncnAnLCAncnQnLCAnc291cmNlJywgJ3N0eWxlJywgJ3N1bW1hcnknLFxuXHQndGJvZHknLCAndGQnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGl0bGUnLCAndHInLCAndHJhY2snXG5dO1xuXG52YXIgSUZfU1RBVEVNRU5UX1NUQVJURUQgPSBmYWxzZTtcblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50Q29kZSh0YWcsIG9wdGlvbnMsIGNoaWxkcmVuID0gW10pXG57XG5cdGlmKHRhZyA9PT0gJ3RlbXBsYXRlJykge1xuXHRcdHJldHVybiBgWyR7IGNoaWxkcmVuLmpvaW4oJywnKSB9XWA7XG5cdH1cblx0XG5cdHJldHVybiBgaCgnJHsgdGFnIH0nLCAkeyBvcHRpb25zIH0sIFskeyBjaGlsZHJlbi5qb2luKCcsJykgfV0pYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVxue1xuXHRjb25zdHJ1Y3Rvcih7IHRhZyA9IG51bGwsIGF0dHJzID0gbnVsbCwgY2hpbGRyZW4gPSBbXSB9KVxuXHR7XG5cdFx0dGhpcy5oaWQgPSArK0hJRDtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLmF0dHJzID0gYXR0cnM7XG5cdFx0dGhpcy5vcHRpb25zID0gcGFyc2VPcHRpb25zKGF0dHJzKTtcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdFx0XG5cdFx0dGhpcy5wcmV2U2libGluZyA9IG51bGw7XG5cdFx0dGhpcy5uZXh0U2libGluZyA9IG51bGw7XG5cdFx0Ly8gaWZcblx0XHR0aGlzLmlmX3N0YXRlbWVudCA9IGZhbHNlO1xuXHR9XG5cblx0Ly8gZ2V0Q29udGV4dChjdXJyZW50Q29udGV4dClcblx0Ly8ge1xuXHQvLyBcdGxldCBjdHggPSBudWxsO1xuXG5cdC8vIFx0dHJ5IHtcblx0Ly8gXHRcdGN0eCA9IFNpbnVvdXMuZ2V0Q29tcG9uZW50KHRoaXMudGFnKTtcblx0Ly8gXHR9IGNhdGNoKGVycikge31cblxuXHQvLyBcdGlmKGN0eCA9PT0gbnVsbCkge1xuXHQvLyBcdFx0Y3R4ID0gY3VycmVudENvbnRleHQ7XG5cdC8vIFx0fVxuXG5cdC8vIFx0cmV0dXJuIGN0eDtcblx0Ly8gfVxuXHRzZXRTaWJsaW5ncygpXG5cdHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMuY2hpbGRyZW5baSArIDFdKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW5baV0ubmV4dFNpYmxpbmcgPSB0aGlzLmNoaWxkcmVuW2kgKyAxXTtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbltpICsgMV0ucHJldlNpYmxpbmcgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXHRcdFx0fVxuXG5cdFx0XHRpZih0aGlzLmNoaWxkcmVuW2ldIGluc3RhbmNlb2YgTm9kZSkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuW2ldLnNldFNpYmxpbmdzKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGlzQ29tcG9uZW50KClcblx0e1xuXHRcdHJldHVybiAhaXNOb25QaHJhc2luZ1RhZy5pbmNsdWRlcyh0aGlzLnRhZyk7XG5cdH1cblxuXHR0b0FTVChjb250ZXh0ID0gbnVsbCwgaHlkcmF0ZSA9IGZhbHNlKVxuXHR7XG5cdFx0bGV0IGNvZGUgPSAnJztcblx0XHRsZXQgY2hpbGRyZW4gPSBbXTtcblx0XHRsZXQgc2hvdWxkSHlkYXJhdGUgPSBmYWxzZTtcblx0XHRsZXQgc2hvdWxkT3B0aW9uc0h5ZHJhdGUgPSBmYWxzZTtcblx0XHQvLyBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpO1xuXG5cdFx0Ly8gY29uc29sZS53YXJuKCdbMV0nLCBjb250ZXh0Lm5hbWUsIHNob3VsZEh5ZGFyYXRlKTtcblx0XHQvKipcblx0XHQgKiBUcmFuc2xhdGUgY2hpbGRyZW4gdG8gaHlwZXJzY3JpcHRcblx0XHQgKiBAcGFyYW0gIHtbdHlwZV19IHZhciBpICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cblx0XHQgKiBAcmV0dXJuIHtbdHlwZV19ICAgICBbZGVzY3JpcHRpb25dXG5cdFx0ICovXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXHRcdFx0bGV0IHsgdmFsdWUsIHN0YXRlZnVsbCB9ID0gY2hpbGQudG9BU1QoY29udGV4dCwgaHlkcmF0ZSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnW2NoaWxkXScsIGNoaWxkLCBzdGF0ZWZ1bGwpO1xuXHRcdFx0aWYoc3RhdGVmdWxsKSB7XG5cdFx0XHRcdHNob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y2hpbGRyZW4ucHVzaCh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0bGV0IG9wdGlvbnMgPSAnJztcblxuXHRcdC8vIGNvbnNvbGUud2FybignWzJdJywgY29udGV4dC5uYW1lLCBzaG91bGRIeWRhcmF0ZSk7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5vcHRpb25zKSB7XG5cdFx0XHRsZXQgeyB2YWx1ZSwgc3RhdGVmdWxsIH0gPSBwYXJzZU9wdGlvblZhbHVlKGNvbnRleHQsIGtleSwgdGhpcy5vcHRpb25zW2tleV0pO1xuXHRcdFx0XG5cdFx0XHRpZihzdGF0ZWZ1bGwpIHtcblx0XHRcdFx0c2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihzdGF0ZWZ1bGwgfHwgIWh5ZHJhdGUgfHwga2V5ID09PSAnZGF0YS1oaWQnKSB7XG5cdFx0XHRcdG9wdGlvbnMgKz0gYCR7IHBhcnNlT3B0aW9uS2V5KGtleSkgfTogJHsgdmFsdWUgfSxgO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihzdGF0ZWZ1bGwgJiYgaHlkcmF0ZSkge1xuXHRcdFx0XHRzaG91bGRPcHRpb25zSHlkcmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cblx0XHRzaG91bGRIeWRhcmF0ZSA9IHRoaXMuaXNDb21wb25lbnQgfHwgc2hvdWxkSHlkYXJhdGU7XG5cblxuXHRcdGlmKHNob3VsZEh5ZGFyYXRlKSB7XG5cdFx0XHRvcHRpb25zICs9IGBpZDogY3R4LmdldFVJRCgkeyB0aGlzLmhpZCB9KSxgO1xuXHRcdH1cblxuXHRcdGlmKHNob3VsZE9wdGlvbnNIeWRyYXRlKSB7XG5cdFx0XHRvcHRpb25zICs9IGBfczogdHJ1ZSxgO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUud2FybihoeWRyYXRlLCBjb250ZXh0Lm5hbWUsIHRoaXMudGFnLCBzaG91bGRIeWRhcmF0ZSA/IG9wdGlvbnMgOiAnJyk7XG5cblx0XHRvcHRpb25zID0gYHske29wdGlvbnN9fWA7XG5cdFx0XG5cdFx0bGV0IGZuX2dlbmVyYXRlZCA9IGZhbHNlO1xuXG5cdFx0bGV0IHN0YXRlbWVudCA9IHBhcnNlU3RhdGVtZW50KHRoaXMpO1xuXG5cdFx0aWYoc3RhdGVtZW50LmlzKSB7XG5cdFx0XHRcblx0XHRcdGxldCBjb25kaXRpb24gPSBwYXJzZUV4cHJlc3Npb24oY29udGV4dCwgc3RhdGVtZW50LmNvbmRpdGlvbiwgZmFsc2UpXG5cblx0XHRcdGlmKHN0YXRlbWVudC5zdGFydCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzKVxuXHRcdFx0XHRjb2RlICs9IGBzdGF0ZW1lbnQoYDtcblx0XHRcdH1cblxuXHRcdFx0Y29kZSArPSBgICR7IGNvbmRpdGlvbi52YWx1ZSB9LCAkeyBnZXRDb21wb25lbnRDb2RlKHRoaXMudGFnLCBvcHRpb25zLCBjaGlsZHJlbikgfWA7XG5cblx0XHRcdGlmKHN0YXRlbWVudC5lbmQpIHtcblx0XHRcdFx0Y29kZSArPSBgKWA7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvZGUgKz0gZ2V0Q29tcG9uZW50Q29kZSh0aGlzLnRhZywgb3B0aW9ucywgY2hpbGRyZW4pO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuYXR0cnMsIHRoaXMuaWZfc3RhdGVtZW50LCBzdGF0ZW1lbnQpXG5cblx0XHQvLyBpZihJRl9TVEFURU1FTlRfU1RBUlRFRCAmJiAhdGhpcy5hdHRyc1sndi1pZiddKSB7XG5cdFx0Ly8gXHRmbl9nZW5lcmF0ZWQgPSB0cnVlO1xuXHRcdC8vIFx0Y29kZSArPSBgKWA7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gaWYoSUZfU1RBVEVNRU5UX1NUQVJURUQpIHtcblx0XHQvLyBcdGxldCBjb25kaXRpb24gPSB0aGlzLmF0dHJzWyd2LWlmJ10gfHwgdGhpcy5hdHRyc1sndi1lbHNlLWlmJ10gfHwgdGhpcy5hdHRyc1sndi1lbHNlJ107XG5cdFx0Ly8gXHRsZXQgcmVzID0gW107XG5cdFx0Ly8gXHRpZighdGhpcy5hdHRyc1sndi1lbHNlJ10pIHtcblx0XHQvLyBcdFx0cmVzLnB1c2goY29uZGl0aW9uKVxuXHRcdC8vIFx0fVxuXG5cdFx0Ly8gXHRyZXMucHVzaChnZXRDb21wb25lbnRDb2RlKHRoaXMudGFnLCBvcHRpb25zLCBjaGlsZHJlbikpO1xuXG5cdFx0Ly8gXHRpZighdGhpcy5hdHRyc1sndi1lbHNlJ10pIHtcblx0XHQvLyBcdFx0cmVzLnB1c2goJycpXG5cdFx0Ly8gXHR9XG5cdFx0XHRcblx0XHQvLyBcdGNvZGUgKz0gcmVzLmpvaW4oJywnKTtcblxuXHRcdC8vIFx0Y29uc29sZS5sb2codGhpcy5hdHRycywgY29kZSlcblx0XHQvLyB9IFxuXG5cdFx0Ly8gaWYoIWZuX2dlbmVyYXRlZCkge1xuXHRcdFx0XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gY29uc29sZS53YXJuKCdbM10nLCBjb250ZXh0Lm5hbWUsIHNob3VsZEh5ZGFyYXRlKTtcblx0XHQvLyBjb25zb2xlLmxvZygnW21haW5dJywgdGhpcy50YWcsIHNob3VsZEh5ZGFyYXRlKTtcblxuXHRcdGlmKGh5ZHJhdGUgJiYgIXNob3VsZEh5ZGFyYXRlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2YWx1ZTogXyxcblx0XHRcdFx0c3RhdGVmdWxsOiBmYWxzZSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiBjb2RlLFxuXHRcdFx0c3RhdGVmdWxsOiBzaG91bGRIeWRhcmF0ZSxcblx0XHR9O1xuXHR9XG59IiwiaW1wb3J0IHsgcGFyc2VPcHRpb25WYWx1ZSB9IGZyb20gJy4vYXR0cnMnO1xuaW1wb3J0IHsgXyB9IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHROb2RlXG57XG5cdGNvbnN0cnVjdG9yKHRleHQpXG5cdHtcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHR9XG5cblx0dG9BU1QoY29udGV4dCA9IG51bGwsIGh5ZHJhdGUgPSBmYWxzZSlcblx0e1xuXHRcdGxldCB7IHZhbHVlLCBzdGF0ZWZ1bGwgfSA9IHBhcnNlT3B0aW9uVmFsdWUoY29udGV4dCwgJ190JywgdGhpcy50ZXh0KTtcblx0XHQvLyBjb25zb2xlLmxvZyhgdCgke3RoaXMudGV4dH0pYCwgdmFsdWUsIHN0YXRlZnVsbClcblxuXHRcdGlmKGh5ZHJhdGUgJiYgIXN0YXRlZnVsbCkge1xuXHRcdFx0dmFsdWUgPSBfO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZSxcblx0XHRcdHN0YXRlZnVsbCxcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgeyBwYXJzZUV4cHJlc3Npb24gfSBmcm9tICcuL2V4cHJlc3Npb24nO1xuXG5jb25zdCBBdHRyc01hcCA9IHtcblx0J3N0eWxlJzogJ3N0YXRpY1N0eWxlJyxcblx0J2NsYXNzJzogJ3N0YXRpY0NsYXNzJyxcblx0JzpzdHlsZSc6ICdkeW5hbWljU3R5bGUnLFxuXHQnOmNsYXNzJzogJ2R5bmFtaWNDbGFzcycsXG59O1xuXG5jb25zdCBIVE1MQXR0cmlidXRlcyA9IFsnaWQnLCAnbmFtZScsICd2YWx1ZScsICdwbGFjZWhvbGRlciddO1xuXG5mdW5jdGlvbiBwYXJzZU9wdGlvblZhbHVlKGNvbnRleHQsIGtleSwgdmFsdWUpXG57XG5cdGxldCBzdGF0ZWZ1bGwgPSBmYWxzZTtcblx0bGV0IGlzRXhwcmVzc2lvbiA9IGZhbHNlO1xuXG5cdGlmKGtleVswXSA9PT0gJ0AnKSB7XG5cdFx0c3RhdGVmdWxsID0gdHJ1ZTtcblx0XHRpc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG5cblx0aWYoa2V5WzBdID09PSAnXycpIHtcblx0XHR2YWx1ZSA9ICdgJyArIHZhbHVlLnJlcGxhY2UoL3t7KC4qKX19L2csICckeyQxfScpICsgJ2AnO1xuXHR9XG5cblx0bGV0IGV4cCA9IHBhcnNlRXhwcmVzc2lvbihjb250ZXh0LCB2YWx1ZSwgaXNFeHByZXNzaW9uKTtcblx0XG5cdHZhbHVlID0gZXhwLnZhbHVlO1xuXG5cdGlmKCFzdGF0ZWZ1bGwgJiYgZXhwLnN0YXRlZnVsbCkge1xuXHRcdHN0YXRlZnVsbCA9IHRydWU7XG5cdH1cblxuXHRcblxuXHQvLyBpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdC8vIFx0dmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cdC8vIH0gZWxzZSB7XG5cdC8vIFx0dmFsdWUgPSBgXCIke3ZhbHVlfVwiYDtcblx0Ly8gfVxuXG5cdFxuXG5cdHJldHVybiB7XG5cdFx0dmFsdWUsXG5cdFx0c3RhdGVmdWxsLFxuXHR9O1xufVxuXG5mdW5jdGlvbiBwYXJzZU9wdGlvbktleShrZXksIHZhbHVlKVxue1xuXHRpZihBdHRyc01hcFtrZXldKSB7XG5cdFx0cmV0dXJuIEF0dHJzTWFwW2tleV07XG5cdH0gZWxzZSBpZihrZXlbMF0gPT09ICdAJykge1xuXHRcdHJldHVybiBrZXkucmVwbGFjZSgvQC9nLCAnb24nKTtcblx0fVxuXG5cdHJldHVybiBrZXk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU3R5bGVzKHN0cmluZylcbntcblx0bGV0IHN0eWxlcyA9IHt9O1xuXHRsZXQgcGFpcnMgPSBzdHJpbmcucmVwbGFjZSgvXFxzL2csICcnKS5zcGxpdCgnOycpO1xuXHRcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCB0bXAgPSBwYWlyc1tpXS5zcGxpdCgnOicpO1xuXHRcdGlmKHRtcC5sZW5ndGggPT09IDIpIHtcblx0XHRcdHN0eWxlc1t0bXBbMF1dID0gdG1wWzFdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlT3B0aW9uS2V5KHZhcmlhYmxlKVxue1xuXHRpZih2YXJpYWJsZS5tYXRjaCgvXFwtL2cpKSB7XG5cdFx0dmFyaWFibGUgPSBgJyR7dmFyaWFibGV9J2A7XG5cdH1cblxuXHRyZXR1cm4gdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHBhcnNlT3B0aW9ucyhhdHRycylcbntcblx0bGV0IG9wdGlvbnMgPSB7fTtcblxuXHRmb3IobGV0IGtleSBpbiBhdHRycylcblx0e1xuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW2tleV07XG5cdFx0bGV0IG9wdGlvbl9rZXkgPSBwcmVwYXJlT3B0aW9uS2V5KGtleSk7XG5cblx0XHRpZihrZXkubWF0Y2goL152XFwtL2cpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gSXMgaHRtbCBhdHRyXG5cdFx0aWYoSFRNTEF0dHJpYnV0ZXMuaW5jbHVkZXMoa2V5KSB8fCBPYmplY3Qua2V5cyhBdHRyc01hcCkuaW5jbHVkZXMoa2V5KSB8fCBrZXkubWF0Y2goL2RhdGFcXC0vZykgfHwga2V5Lm1hdGNoKC9AL2cpKSB7XG5cdFx0XHRpZihrZXkgPT09ICdzdHlsZScpIHtcblx0XHRcdFx0dmFsdWUgPSBwYXJzZVN0eWxlcyh2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdG9wdGlvbnNbb3B0aW9uX2tleV0gPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYoIW9wdGlvbnMucHJvcHMpIHtcblx0XHRcdFx0b3B0aW9ucy5wcm9wcyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRvcHRpb25zLnByb3BzW29wdGlvbl9rZXldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXR0cnMoc3RyaW5nKVxue1xuXHRpZih0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJyB8fCBzdHJpbmcgPT0gJycpIHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpLnRyaW0oKTtcblxuXHRsZXQgcGFpcnMgPSBzdHJpbmcubWF0Y2goLyhbXlxcc10qKT1bXCInXSguKj8pW1wiJ118KFtcXHdcXC1dKykvZylcblx0bGV0IGF0dHJzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCB0bXAgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuXHRcdGxldCBuYW1lID0gdG1wWzBdO1xuXHRcdGxldCB2YWx1ZSA9IHRtcFsxXSA/IHRtcFsxXS5zdWJzdHJpbmcoMSwgdG1wWzFdLmxlbmd0aCAtIDEpIDogdHJ1ZTtcblx0XHRhdHRyc1tuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIGF0dHJzO1xufVxuXG5leHBvcnQgeyBwYXJzZUF0dHJzLCBwYXJzZU9wdGlvbnMsIHBhcnNlT3B0aW9uS2V5LCBwYXJzZU9wdGlvblZhbHVlIH07IiwiaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCJAYmFiZWwvcGFyc2VyXCI7XG5pbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuaW1wb3J0IGdlbmVyYXRlIGZyb20gXCJAYmFiZWwvZ2VuZXJhdG9yXCI7XG5cbmltcG9ydCB7XG5cdGlkZW50aWZpZXIsXG5cdENhbGxFeHByZXNzaW9uLFxuXHRCaW5hcnlFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7XG5cdGdldElkZW50aWZpZXJOYW1lLFxuXHRzZXRJZGVudGlmaWVyQ29udGV4dCxcblx0aXNJZGVudGlmaWVyUmVhY3RpdmUsXG5cdGNoZWNrRnVuY3Rpb25Bcmd1bWVudERlY2xhcmF0aW9uXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5cbmltcG9ydCB7IHByZXBhcmVPcHRpb25LZXkgfSBmcm9tICcuL2F0dHJzJztcblxuaW1wb3J0IHsgaGFzU3RhdGUsIGdldFZhcmlhYmxlIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRXhwcmVzc2lvbihjb250ZXh0LCBjb2RlLCBpc0V4cHJlc3Npb24gPSBmYWxzZSlcbntcblx0Y29kZSA9IFN0cmluZyhjb2RlKTtcblx0Ly8gY29kZSA9ICdgJyArIGNvZGUucmVwbGFjZSgve3soLiopfX0vZywgJyR7JDF9JykgKyAnYCc7XG5cblx0Y29uc29sZS53YXJuKGNvZGUpO1xuXHQvLyBpZihzdHIpIHtcblx0Ly8gXHRjb2RlID0gYCcke2NvZGV9J2A7XG5cdC8vIH1cblxuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2UoY29kZSk7XG5cblx0dmFyIG9ic2VydmFibGUgPSBmYWxzZTtcblxuXHRsZXQgRnVuY3Rpb25EZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdEZ1bmN0aW9uRGVjbGFyYXRpb24gPSB0cnVlO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpIHtcblx0XHQgICAgXHRGdW5jdGlvbkRlY2xhcmF0aW9uID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdC8vIG1ha2UgcmVhY3RpdmUgdmFyaWFibGUgYXNzaWdubWVudCBhcyBmdW5jdGlvblxuXHRcdEFzc2lnbm1lbnRFeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighaXNJZGVudGlmaWVyUmVhY3RpdmUoY29udGV4dC5kYXRhLCBwYXRoLm5vZGUubGVmdCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgYXJncyA9IFtwYXRoLm5vZGUucmlnaHRdO1xuXG5cdFx0XHRcdGlmKHBhdGgubm9kZS5vcGVyYXRvci5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0YXJncyA9IFtcblx0XHRcdFx0XHRcdEJpbmFyeUV4cHJlc3Npb24ocGF0aC5ub2RlLm9wZXJhdG9yWzBdLCBwYXRoLm5vZGUubGVmdCwgcGF0aC5ub2RlLnJpZ2h0KVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUocGF0aC5ub2RlLmxlZnQpO1xuXHRcdFx0XHRwYXRoLnJlcGxhY2VXaXRoKFxuXHRcdFx0XHRcdENhbGxFeHByZXNzaW9uKGlkZW50aWZpZXIobmFtZSksIGFyZ3MpXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0b2JzZXJ2YWJsZSA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRjaGVja0Z1bmN0aW9uQXJndW1lbnREZWNsYXJhdGlvbihjb250ZXh0LmRhdGEsIHBhdGgpO1xuXHRcdFx0XHRpZihzZXRJZGVudGlmaWVyQ29udGV4dCgndGhpcycsIGNvbnRleHQuZGF0YSwgcGF0aCkpIHtcblx0XHRcdFx0XHRvYnNlcnZhYmxlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0Y29kZSA9IGdlbmVyYXRlKGFzdCwge1xuXHRcdHJldGFpbkxpbmVzOiB0cnVlLFxuXHRcdGNvbXBhY3Q6IHRydWUsXG5cdFx0bWluaWZpZWQ6IHRydWUsXG5cdFx0Y29uY2lzZTogdHJ1ZSxcblx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG5cdH0sIGNvZGUpLmNvZGU7XG5cblx0XG5cdC8vIGNsZWFuIGFwcGVuZFxuXHRjb2RlID0gY29kZS5yZXBsYWNlKC8oO3wsKSQvZywgJycpO1xuXHRcblx0aWYoaXNFeHByZXNzaW9uKSB7XG5cdFx0Y29kZSA9IGAoKSA9PiB7IHJldHVybiAke2NvZGV9OyB9YDtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGNvZGUpO1xuXHRjb25zb2xlLmxvZygnLS0tLS0tLS0nKTtcblxuXHRyZXR1cm4ge1xuXHRcdHN0YXRlZnVsbDogb2JzZXJ2YWJsZSxcblx0XHR2YWx1ZTogY29kZVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cHJlc3Npb24oY29udGV4dCwgY29kZSwgZXhlY3V0ZSA9IGZhbHNlKVxue1xuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2UoY29kZSk7XG5cblx0dmFyIGNoYW5nZWQgPSBmYWxzZTtcblx0dmFyIHN0YXRlZnVsbCA9IGZhbHNlO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdGVudGVyKHBhdGgpXG5cdFx0e1xuXHRcdFx0aWYocGF0aC5ub2RlLnR5cGUgPT09ICdJZGVudGlmaWVyJylcblx0XHRcdHtcblx0XHRcdFx0aWYoIVsna2V5JywgJ2xhYmVsJ10uaW5jbHVkZXMocGF0aC5rZXkpKSB7XG5cdFx0XHRcdFx0bGV0IG5hbWVCdWlsZGVyID0gW107XG5cblx0XHRcdFx0XHRsZXQgdmFyaWFibGUgPSBwYXRoLm5vZGUubmFtZTtcblx0XHRcdFx0XHRsZXQgdmFyaWFibGVXaXRoQ29udGV4dCA9IGdldFZhcmlhYmxlKGNvbnRleHQuZGF0YSwgdmFyaWFibGUpXG5cblx0XHRcdFx0XHRpZihwYXRoLmNvbnRhaW5lci50eXBlID09PSAnQ2FsbEV4cHJlc3Npb24nKSB7XG5cdFx0XHRcdFx0XHR2YXJpYWJsZVdpdGhDb250ZXh0ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYodmFyaWFibGVXaXRoQ29udGV4dCkge1xuXHRcdFx0XHRcdFx0bmFtZUJ1aWxkZXIucHVzaCgnY3R4Jylcblx0XHRcdFx0XHRcdG5hbWVCdWlsZGVyLnB1c2godmFyaWFibGVXaXRoQ29udGV4dCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG5hbWVCdWlsZGVyLnB1c2godmFyaWFibGUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKCF2YXJpYWJsZSkge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAkeyB2YXJpYWJsZSB9IGluIGNvbnRleHQgJHsgY29udGV4dCB9YCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoY29udGV4dC5yZWFjdGl2ZV92YXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpKSB7XG5cdFx0XHRcdFx0XHRzdGF0ZWZ1bGwgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHBhdGgubm9kZS5uYW1lID0gbmFtZUJ1aWxkZXIuam9pbignLicpICsgKGV4ZWN1dGUgPyAnKCknIDogJycpO1xuXG5cdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cGF0aC5ub2RlLm5hbWUgPSBwcmVwYXJlT3B0aW9uS2V5KHBhdGgubm9kZS5uYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0Y29kZSA9IGdlbmVyYXRlKGFzdCwge1xuXHRcdHJldGFpbkxpbmVzOiB0cnVlLFxuXHRcdGNvbXBhY3Q6IHRydWUsXG5cdFx0bWluaWZpZWQ6IHRydWUsXG5cdFx0Y29uY2lzZTogdHJ1ZSxcblx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG5cdH0sIGNvZGUpLmNvZGU7XG5cblx0Ly8gY2xlYW4gYXBwZW5kXG5cdGNvZGUgPSBjb2RlLnJlcGxhY2UoLyg7fCwpJC9nLCAnJyk7XG5cblx0aWYoY2hhbmdlZCAmJiBleGVjdXRlKSB7XG5cdFx0Y29kZSA9IGAoKSA9PiB7IHJldHVybiAke2NvZGV9OyB9YDtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c3RhdGVmdWxsLFxuXHRcdHZhbHVlOiBjb2RlXG5cdH1cbn0iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ25vZGUtaHRtbC1wYXJzZXInO1xuaW1wb3J0IE5vZGUsIHsgSElEIH0gZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBUZXh0Tm9kZSBmcm9tICcuL1RleHROb2RlJztcbmltcG9ydCB7IHBhcnNlQXR0cnMgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCBwYXJzZUZ1bmN0aW9ucyBmcm9tICcuL3BhcnNlRnVuY3Rpb25zJztcblxuZnVuY3Rpb24gZ2VuZXJhdGVUcmVlKG5vZGUsIGlzUm9vdCA9IGZhbHNlKVxue1xuXG5cdGxldCBjaGlsZHJlbiA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGNoaWxkID0gZ2VuZXJhdGVUcmVlKG5vZGUuY2hpbGROb2Rlc1tpXSwgZmFsc2UpO1xuXHRcdGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHR9XG5cblx0bGV0IGF0dHJzID0gcGFyc2VBdHRycyhub2RlLnJhd0F0dHJzKTtcblxuXHRpZihjaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgbm9kZS5yYXdUZXh0ICE9PSAnJykge1xuXHRcdHJldHVybiBuZXcgVGV4dE5vZGUobm9kZS5yYXdUZXh0KTtcblx0fVxuXG5cdHJldHVybiBuZXcgTm9kZSh7XG5cdFx0dGFnOiBub2RlLnRhZ05hbWUsXG5cdFx0YXR0cnM6IGF0dHJzLFxuXHRcdGNoaWxkcmVuOiBjaGlsZHJlbixcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlKGNvbnRleHQsIGNvZGUpXG57XG5cdC8vIGNvZGUgPSBwYXJzZUZ1bmN0aW9ucyhjb2RlKTtcblx0Ly8gY29uc29sZS53YXJuKFwiUEFSU0VcIiwgY29udGV4dC5uYW1lKVxuXHRjb2RlID0gY29kZS5yZXBsYWNlKC9cXHQvZywgJyAnKS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJyk7XG5cblx0Y29uc3Qgcm9vdCA9IHBhcnNlKGNvZGUpO1xuXG5cdHJvb3QucmVtb3ZlV2hpdGVzcGFjZSgpO1xuXG5cdC8vIEhJRCA9IDA7XG5cdGxldCB0cmVlID0gZ2VuZXJhdGVUcmVlKHJvb3QsIHRydWUpO1xuXG5cdHRyZWUuc2V0U2libGluZ3MoKTtcblx0XG5cdHRyZWUgPSB0cmVlLmNoaWxkcmVuO1xuXG5cdGxldCBhc3QgPSB7XG5cdFx0cmVuZGVyOiBbXSxcblx0XHRoeWRyYXRlOiBbXSxcblx0fVxuXG5cdGxldCByZXN1bHQgPSB7XG5cdFx0cmVuZGVyOiAnJyxcblx0XHRoeWRyYXRlOiAnJyxcblx0XHRzaG91bGRIeWRhcmF0ZTogZmFsc2UsXG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgcmVuZGVyQVNUID0gdHJlZVtpXS50b0FTVChjb250ZXh0LCBmYWxzZSk7XG5cdFx0bGV0IGh5ZHJhdGlvbkFTVCA9IHRyZWVbaV0udG9BU1QoY29udGV4dCwgdHJ1ZSk7XG5cblx0XHRpZihoeWRyYXRpb25BU1Quc3RhdGVmdWxsKSB7XG5cdFx0XHRyZXN1bHQuc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGFzdC5yZW5kZXIucHVzaChyZW5kZXJBU1QudmFsdWUpO1xuXHRcdGFzdC5oeWRyYXRlLnB1c2goaHlkcmF0aW9uQVNULnZhbHVlKTtcblx0fVxuXG5cdGlmKGFzdC5yZW5kZXIubGVuZ3RoID09PSAxKSB7XG5cdFx0cmVzdWx0LnJlbmRlciA9IGFzdC5yZW5kZXJbMF07XG5cdFx0cmVzdWx0Lmh5ZHJhdGUgPSBhc3QuaHlkcmF0ZVswXTtcblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucmVuZGVyID0gYFskeyAgYXN0LnJlbmRlci5qb2luKCcsJykgfV1gO1xuXHRcdHJlc3VsdC5oeWRyYXRlID0gYFskeyAgYXN0Lmh5ZHJhdGUuam9pbignLCcpIH1dYDtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgXyB9IGZyb20gJy4uL2VtcHR5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1N0YXRlKGNvbnRleHQsIHZhcmlhYmxlKVxue1xuXHQvLyBjb25zb2xlLmxvZyhjb250ZXh0LCB2YXJpYWJsZS5zcGxpdCgnLicpKTtcblx0aWYoY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bGV0IHZhbHVlID0gY29udGV4dDtcblx0bGV0IHZhcl9wYXJ0cyA9IHZhcmlhYmxlLnNwbGl0KCcuJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YXJfcGFydHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YWx1ZSA9IHZhbHVlW3Zhcl9wYXJ0c1tpXV07XG5cdFx0aWYodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGlmKHZhbHVlLl9vYnNlcnZhYmxlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhcmlhYmxlKGNvbnRleHQsIHZhcmlhYmxlKVxue1xuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LmNvbXB1dGVkKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9jb21wdXRlZC4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LnN0YXRlKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9zdGF0ZS4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LmRhdGEpLmluY2x1ZGVzKHZhcmlhYmxlKSkge1xuXHRcdHJldHVybiBgX2RhdGEuJHt2YXJpYWJsZX1gO1xuXHR9XG5cblx0aWYoT2JqZWN0LmtleXMoY29udGV4dC5tZXRob2RzKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYCR7dmFyaWFibGV9LmJpbmQoY3R4KWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LnByb3BzKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9wcm9wcy4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBnZXRSZWFjdGl2ZVZhcmlhYmxlcyB9IGZyb20gXCIuLi9zY3JpcHRcIjtcbmltcG9ydCBnZW5lcmF0ZSBmcm9tICcuL2dlbmVyYXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVUZW1wbGF0ZShjb250ZXh0LCBodG1sLCBibG9ja3MpXG57XG5cdGxldCBzY3JpcHQgPSBibG9ja3Muc2NyaXB0IHx8IHsgc291cmNlOiAnJyB9O1xuXG5cdGNvbnRleHQgPSBnZXRSZWFjdGl2ZVZhcmlhYmxlcyhjb250ZXh0LCBzY3JpcHQuc291cmNlKTtcblx0XG5cdHJldHVybiBnZW5lcmF0ZShjb250ZXh0LCBodG1sKTtcbn0iLCJleHBvcnQgY29uc3QgSUZfQVRUUlMgPSBbJ3YtaWYnLCAndi1lbHNlLWlmJywgJ3YtZWxzZSddO1xuXG5leHBvcnQgIGZ1bmN0aW9uIHBhcnNlU3RhdGVtZW50KG5vZGUpXG57XG5cdGxldCBzdGFydCA9IGZhbHNlO1xuXHRsZXQgZW5kID0gdHJ1ZTtcblx0bGV0IHN0YXRlbWVudCA9IGZhbHNlO1xuXHRsZXQgY29uZGl0aW9uID0gbm9kZS5hdHRyc1sndi1pZiddIHx8IG5vZGUuYXR0cnNbJ3YtZWxzZS1pZiddIHx8ICd0cnVlJztcblxuXHRpZihub2RlLmF0dHJzWyd2LWlmJ10pIHtcblx0XHRzdGFydCA9IHRydWU7XG5cdH1cblxuXHRpZihub2RlLmF0dHJzWyd2LWlmJ10gfHwgbm9kZS5hdHRyc1sndi1lbHNlLWlmJ10gfHwgbm9kZS5hdHRyc1sndi1lbHNlJ10pIHtcblx0XHRub2RlLmlmX3N0YXRlbWVudCA9IHRydWU7XG5cdFx0c3RhdGVtZW50ID0gdHJ1ZTtcblx0fVxuXG5cblx0aWYobm9kZS5uZXh0U2libGluZykge1xuXHRcdGlmKG5vZGUubmV4dFNpYmxpbmcuYXR0cnNbJ3YtZWxzZS1pZiddIHx8IG5vZGUubmV4dFNpYmxpbmcuYXR0cnNbJ3YtZWxzZSddKSB7XG5cdFx0XHRlbmQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvLyBpZihub2RlLnByZXZTaWJsaW5nKSB7XG5cdC8vIFx0aWYobm9kZS5wcmV2U2libGluZy5pZl9zdGF0ZW1lbnQpIHtcblx0Ly8gXHRcdHN0YXRlbWVudCA9IHRydWU7XG5cdC8vIFx0fVxuXHQvLyB9XG5cblx0Ly8gY29uc29sZS53YXJuKG5vZGUuYXR0cnMsIHN0YXRlbWVudCwgc3RhcnQsIGVuZCk7XG5cblx0cmV0dXJuIHtcblx0XHRjb25kaXRpb24sXG5cdFx0aXM6IHN0YXRlbWVudCxcblx0XHRzdGFydCxcblx0XHRlbmQsXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VGdW5jdGlvbnMoY29kZSlcbntcblx0Y29kZSA9IGNvZGVcblx0XHQucmVwbGFjZSgvXFxAaWZcXCgoLiopXFwpL2csICc8aWYgY29uZGl0aW9uPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9cXEBlbHNlaWZcXCgoLiopXFwpL2csICc8ZWxzZS1pZiBjb25kaXRpb249XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL1xcQGVsc2UvZywgJzxlbHNlPicpXG5cdFx0LnJlcGxhY2UoL1xcQGVuZGlmL2csICc8ZW5kaWY+JylcblxuXG5cdGNvbnNvbGUubG9nKGNvZGUpO1xuXG5cdHJldHVybiBjb2RlO1xufSIsImV4cG9ydCBjb25zdCBkYXRhID0ge1xuXHRpbXBvcnRzOiBbXSxcblx0cHJvcHM6IHt9LFxuXHRkYXRhOiB7fSxcblx0c3RhdGU6IHt9LFxuXHRjb21wdXRlZDoge30sXG5cdG1ldGhvZHM6IHt9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0YShjb250ZXh0KSB7XG5cdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7fSwgY29udGV4dCk7XG59IiwiaW1wb3J0IHsgY29tcGlsZXIsIF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlcic7XG5cbi8vIGltcG9ydCB7IHBhcnNlRXhwcmVzc2lvbiB9IGZyb20gJ0BzaW51b3VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9leHByZXNzaW9uJztcbmltcG9ydCB7IGNyZWF0ZURhdGEgfSBmcm9tIFwiQHNpbnVvdXMvY29tcGlsZXIvc3JjL3NjcmlwdC9kYXRhXCI7XG5cbmxldCBkYXRhID0gY3JlYXRlRGF0YSgpO1xuXG5kYXRhLmRhdGEgPSB7XG5cdGQxOiAxLFxuXHRkMjogMSxcbn1cblxuZGF0YS5zdGF0ZSA9IHtcblx0czE6IDEsXG5cdHMyOiAxLFxufVxuXG5kYXRhLmNvbXB1dGVkID0ge1xuXHRjMTogMSxcblx0YzI6IDEsXG59XG5cbmRhdGEubWV0aG9kcyA9IHtcblx0bTE6IDEsXG5cdG0yOiAxLFxufVxuXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgYFxuLy8gbGV0IGQgPSBmdW5jdGlvbigpIHt9XG4vLyBsZXQgZDIgPSAoKSA9PiB7fVxuLy8gZnVuY3Rpb24gYzEoczMpIHtcbi8vIFx0bGV0IGQgPSBbXTtcbi8vIFx0Zm9yKGxldCBpID0gMDsgaSA8IHMxLmxlbmd0aDsgaSsrKSB7XG4vLyBcdFx0ZC5wdXNoKHMxW2ldKTtcbi8vIFx0fVxuLy8gfVxuLy8gYClcbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCAneyBzMTogKCkgPT4gczEgfScpXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ2FsZXJ0KCk7JywgdHJ1ZSlcbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCAnbTEoZXZlbnQpJylcbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCAnczEgKz0gNicpXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ2QxID0gZDEgKyA2Jylcbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCAnZDEgLz0gNicpXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ2QucHVzaChzMSknKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdkID0gKCkgPT4geyByZXR1cm4gczEgfScpXG5cblxubGV0IHNvdXJjZSA9IGBcbjx0ZW1wbGF0ZT5cblx0PGRpdiBAY2xpY2s9XCJhbGVydCgxKVwiIDpzdHlsZT1cInsgYWRjOiBzMSB9XCI+XG5cdFx0dGVzdFxuXHRcdDx0ZW1wbGF0ZSB2LWlmPVwiczIzID0gMlwiPlxuXHRcdHNob3dcblx0XHQ8L3RlbXBsYXRlPlxuXHRcdDxkaXYgdi1lbHNlLWlmPVwic29tZTJcIj5cblx0XHRcdHRlc3Rcblx0XHQ8L2Rpdj5cblx0XHQ8dGVtcGxhdGUgdi1lbHNlPlxuXHRcdGhpZGVcblx0XHQ8L3RlbXBsYXRlPlxuXHRcdDxzcGFuIGRhdGEtc3RvcD5zdG9wPC9zcGFuPlxuXHRcdDxkaXYgdi1pZj1cIm9uY2VcIj5pZi1vbmNlPC9kaXY+XG5cdFx0PGRpdj5hZnRlci1vbmNlLWlmPC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbmA7XG5cbmxldCBibG9jayA9IGNvbXBpbGVyKHtcblx0Y29udGV4dDogZGF0YSxcblx0dHlwZTogJ3RlbXBsYXRlJyxcblx0c291cmNlOiBzb3VyY2UsXG59KTtcblxuY29uc29sZS5sb2coYmxvY2suc291cmNlLnJlbmRlcikiXSwic291cmNlUm9vdCI6IiJ9