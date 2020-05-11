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

  if (key[0] === '@') {
    statefull = true;
    isExpression = true;
  }

  if (key[0] === '_') {
    value = '`' + value.replace(/{{(.*)}}/g, '${$1}') + '`';
    isExpression = true;
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

  code = String(code); // console.warn(code);

  var ast = parser.parse(code);
  var observable = false;
  var changed = false;
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
        changed = true;
      }
    },
    Identifier: {
      enter: function enter(path) {
        (0, _helpers.checkFunctionArgumentDeclaration)(context.data, path);

        if ((0, _helpers.setIdentifierContext)('this', context.data, path)) {
          observable = true;
        }

        changed = true;
      }
    }
  });

  if (changed) {
    code = (0, _generator.default)(ast, {
      retainLines: false,
      compact: false,
      minified: false,
      concise: false,
      quotes: "double"
    }, code).code; // clean append

    code = code.replace(/(;|,)$/g, '');

    if (isExpression) {
      code = "() => { return " + code + "; }";
    }
  } // console.log(code);
  // console.log('--------');


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
exports.parseHTML = parseHTML;
exports.isPlainTextElement = void 0;

var _utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev, Evan You and Vue.js community
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */
// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = (0, _utils.makeMap)('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track'); // Regular Expressions for parsing tags and attributes

var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/; // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset

var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp("^<" + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
var doctype = /^<!DOCTYPE [^>]+>/i; // #7298: escape - to avoid being pased as HTML comment when inlined in page

var comment = /^<!\--/;
var conditionalComment = /^<!\[/;
var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
}); // Special Elements (can contain anything)

var isPlainTextElement = (0, _utils.makeMap)('script,style,textarea', true);
exports.isPlainTextElement = isPlainTextElement;
var reCache = {};
var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g; // #5992

var isIgnoreNewlineTag = (0, _utils.makeMap)('pre,textarea', true);

var shouldIgnoreFirstNewline = function shouldIgnoreFirstNewline(tag, html) {
  return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
};

function decodeAttr(value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) {
    return decodingMap[match];
  });
}

function parseHTML(html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag = options.isUnaryTag || _utils.no;
  var canBeLeftOpenTag = options.canBeLeftOpenTag || _utils.no;
  var index = 0;
  var last, lastTag;

  while (html) {
    last = html; // Make sure we're not in a plaintext content element like script/style

    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');

      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }

            advance(commentEnd + 3);
            continue;
          }
        } // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment


        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue;
          }
        } // Doctype:


        var doctypeMatch = html.match(doctype);

        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue;
        } // End tag:


        var endTagMatch = html.match(endTag);

        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue;
        } // Start tag:


        var startTagMatch = parseStartTag();

        if (startTagMatch) {
          handleStartTag(startTagMatch);

          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }

          continue;
        }
      }

      var text = void 0,
          rest = void 0,
          next = void 0;

      if (textEnd >= 0) {
        rest = html.slice(textEnd);

        while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) break;
          textEnd += next;
          rest = html.slice(textEnd);
        }

        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      (function () {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;

          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text.replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }

          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }

          if (options.chars) {
            options.chars(text);
          }

          return '';
        });
        index += html.length - rest.length;
        html = rest;
        parseEndTag(stackedTag, index - endTagLength, index);
      })();
    }

    if (html === last) {
      options.chars && options.chars(html);

      if ( true && !stack.length && options.warn) {
        options.warn("Mal-formatted tag at end of template: \"" + html + "\"");
      }

      break;
    }
  } // Clean up any remaining tags


  parseEndTag();

  function advance(n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag() {
    var start = html.match(startTagOpen);

    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;

      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }

      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match;
      }
    }
  }

  function handleStartTag(match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }

      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag(tagName) || !!unarySlash;
    var l = match.attrs.length;
    var attrs = new Array(l);

    for (var i = 0; i < l; i++) {
      var args = match.attrs[i]; // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778

      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') {
          delete args[3];
        }

        if (args[4] === '') {
          delete args[4];
        }

        if (args[5] === '') {
          delete args[5];
        }
      }

      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({
        tag: tagName,
        lowerCasedTag: tagName.toLowerCase(),
        attrs: attrs
      });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag(tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) start = index;
    if (end == null) end = index;

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    } // Find the closest opened tag of the same type


    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break;
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ( true && (i > pos || !tagName) && options.warn) {
          options.warn("tag <" + stack[i].tag + "> has no matching end tag.");
        }

        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      } // Remove the open elements from the stack


      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }

      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
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

var _html = __webpack_require__(/*! @sinuous/compiler/src/template/html */ "./packages/compiler/src/template/html.js");

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

var source = "\n<template>\n\t<div @click=\"alert(1)\" :style=\"{ adc: s1 }\">\n\t\ttest\n\t\t{{ s2 }}\n\t\t<template v-if=\"s23 = 2\">\n\t\tshow {{ ddd }}\n\t\t</template>\n\t\t<div v-else-if=\"some2\">\n\t\t\ttest\n\t\t</div>\n\t\t<template v-else>\n\t\thide\n\t\t</template>\n\t\t<span data-stop>stop</span>\n\t\t<div v-if=\"once\">if-once</div>\n\t\t<div>after-once-if</div>\n\t</div>\n</template>\n";
console.log((0, _html.parseHTML)(source));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvbXBpbGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvQXN0R2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2NyaXB0L2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3NjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3NjcmlwdC9wYXJzZU1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvcGFyc2VWYXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90ZW1wbGF0ZS9Ob2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdGVtcGxhdGUvVGV4dE5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90ZW1wbGF0ZS9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90ZW1wbGF0ZS9nZW5lcmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90ZW1wbGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL3BhcnNlRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zY3JpcHQvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9jb21waWxlci9zcmMvdGVtcGxhdGUvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVzdC5qcyJdLCJuYW1lcyI6WyJibG9ja3MiLCJzb3VyY2UiLCJ0eXBlIiwiZXhlYyIsInMiLCJjb21waWxlciIsImNvbnRleHQiLCJyb290IiwibG93ZXJDYXNlVGFnTmFtZSIsInNjcmlwdCIsIm5vZGVzIiwiaSIsImlubmVySFRNTCIsIl8iLCJSZWFjdGl2ZU5hbWVzcGFjZXMiLCJuYW1lIiwiaWQiLCJkYXRhIiwicGF0aCIsImdldElkZW50aWZpZXJOYW1lIiwibWF0Y2giLCJtYXRjaElkZW50aWZpZXIiLCJjdHgiLCJuYW1lc3BhY2UiLCJPYmplY3QiLCJvYnNlcnZhYmxlIiwiaW1wb3J0cyIsInByb3BlcnRpZXMiLCJvYmplY3QiLCJGdW5jdGlvblJldHVybkV4cHJlc3Npb24iLCJnZW5lcmF0ZUZ1bmN0aW9uUmV0dXJuRXhwcmVzc2lvbiIsIk9iamVjdFJldHVybkV4cHJlc3Npb24iLCJnZW5lcmF0ZU9iamVjdFJldHVybkV4cHJlc3Npb24iLCJleHBvcnRlZE9iamVjdCIsImV4cG9ydGVkRGVmYXVsdCIsImJvZHkiLCJ2YWx1ZXMiLCJ2YWwiLCJSZWFjdGl0eSIsIkZ1bmN0aW9uUmV0dXJuIiwicHJvcHMiLCJzdGF0ZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsIkFpaUV4cHJlc3Npb24iLCJpc0Z1bmN0aW9uIiwiYXBwZW5kIiwiaXNJZGVudGlmaWVyUmVhY3RpdmUiLCJhc3QiLCJzb3VyY2VUeXBlIiwic3RyaWN0TW9kZSIsInJlYWN0aXZlX3ZhcmlhYmxlcyIsInJldGFpbkxpbmVzIiwiY29tcGFjdCIsIm1pbmlmaWVkIiwiY29uY2lzZSIsInF1b3RlcyIsImZ1bmN0aW9uQmxvY2tIYW5kbGluZyIsImFzc2lnbm1lbnRIYW5kbGluZyIsInZhcmlhYmxlRGVjbGFyYXRpb25IYW5kbGluZyIsInNob3VsZEFzc2lnbm1lbnRIYW5kbGUiLCJoYXNGdW5jdGlvblJlYWN0aXZlIiwibWVtYmVySGFuZGxpbmciLCJJbXBvcnREZWNsYXJhdGlvbiIsImVudGVyIiwiSWRlbnRpZmllciIsImV4aXQiLCJDYWxsRXhwcmVzc2lvbiIsIk1lbWJlckV4cHJlc3Npb24iLCJWYXJpYWJsZURlY2xhcmF0b3IiLCJFeHByZXNzaW9uU3RhdGVtZW50IiwiZXhwcmVzc2lvbiIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiQmxvY2tTdGF0ZW1lbnQiLCJjb2xsZWN0TWV0aG9kcyIsImZ1bmN0aW9uSGFuZGxpbmciLCJ2YWx1ZSIsIkZ1bmN0aW9uRGVjbGFyYXRpb24iLCJjb2xsZWN0VmFyaWFibGVzIiwiSElEIiwiaXNOb25QaHJhc2luZ1RhZyIsIklGX1NUQVRFTUVOVF9TVEFSVEVEIiwiY2hpbGRyZW4iLCJ0YWciLCJOb2RlIiwiYXR0cnMiLCJzZXRTaWJsaW5ncyIsInRvQVNUIiwiaHlkcmF0ZSIsImNvZGUiLCJzaG91bGRIeWRhcmF0ZSIsInNob3VsZE9wdGlvbnNIeWRyYXRlIiwiY2hpbGQiLCJzdGF0ZWZ1bGwiLCJvcHRpb25zIiwia2V5IiwiZm5fZ2VuZXJhdGVkIiwic3RhdGVtZW50IiwiY29uZGl0aW9uIiwiZ2V0Q29tcG9uZW50Q29kZSIsIlRleHROb2RlIiwiQXR0cnNNYXAiLCJIVE1MQXR0cmlidXRlcyIsImlzRXhwcmVzc2lvbiIsImV4cCIsInN0eWxlcyIsInBhaXJzIiwic3RyaW5nIiwidG1wIiwidmFyaWFibGUiLCJvcHRpb25fa2V5IiwicHJlcGFyZU9wdGlvbktleSIsInBhcnNlU3R5bGVzIiwiU3RyaW5nIiwicGFyc2VyIiwiY2hhbmdlZCIsImFyZ3MiLCJpc1Jvb3QiLCJub2RlIiwiZ2VuZXJhdGVUcmVlIiwidHJlZSIsInJlbmRlciIsInJlc3VsdCIsInJlbmRlckFTVCIsImh5ZHJhdGlvbkFTVCIsInZhcl9wYXJ0cyIsIklGX0FUVFJTIiwic3RhcnQiLCJlbmQiLCJpcyIsImNvbnNvbGUiLCJjcmVhdGVEYXRhIiwiYXR0cmlidXRlIiwibmNuYW1lIiwicW5hbWVDYXB0dXJlIiwic3RhcnRUYWdPcGVuIiwiUmVnRXhwIiwic3RhcnRUYWdDbG9zZSIsImVuZFRhZyIsImRvY3R5cGUiLCJjb21tZW50IiwiY29uZGl0aW9uYWxDb21tZW50IiwiSVNfUkVHRVhfQ0FQVFVSSU5HX0JST0tFTiIsInJlcGxhY2UiLCJtIiwiZyIsImlzUGxhaW5UZXh0RWxlbWVudCIsInJlQ2FjaGUiLCJkZWNvZGluZ01hcCIsImVuY29kZWRBdHRyIiwiZW5jb2RlZEF0dHJXaXRoTmV3TGluZXMiLCJpc0lnbm9yZU5ld2xpbmVUYWciLCJzaG91bGRJZ25vcmVGaXJzdE5ld2xpbmUiLCJodG1sIiwiZGVjb2RlQXR0ciIsInNob3VsZERlY29kZU5ld2xpbmVzIiwicmUiLCJwYXJzZUhUTUwiLCJzdGFjayIsImV4cGVjdEhUTUwiLCJpc1VuYXJ5VGFnIiwibm8iLCJjYW5CZUxlZnRPcGVuVGFnIiwiaW5kZXgiLCJsYXN0IiwibGFzdFRhZyIsInRleHRFbmQiLCJpbmRleE9mIiwidGVzdCIsImNvbW1lbnRFbmQiLCJzaG91bGRLZWVwQ29tbWVudCIsInN1YnN0cmluZyIsImFkdmFuY2UiLCJjb25kaXRpb25hbEVuZCIsImRvY3R5cGVNYXRjaCIsImxlbmd0aCIsImVuZFRhZ01hdGNoIiwiY3VySW5kZXgiLCJwYXJzZUVuZFRhZyIsInN0YXJ0VGFnTWF0Y2giLCJwYXJzZVN0YXJ0VGFnIiwiaGFuZGxlU3RhcnRUYWciLCJ0ZXh0IiwicmVzdCIsIm5leHQiLCJzbGljZSIsImNoYXJzIiwiZW5kVGFnTGVuZ3RoIiwic3RhY2tlZFRhZyIsInRvTG93ZXJDYXNlIiwicmVTdGFja2VkVGFnIiwiYWxsIiwicHJvY2VzcyIsIndhcm4iLCJuIiwidGFnTmFtZSIsImF0dHIiLCJwdXNoIiwidW5hcnlTbGFzaCIsInVuYXJ5IiwibCIsIkFycmF5Iiwic2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmIiwibG93ZXJDYXNlZFRhZyIsInBvcyIsImxvd2VyQ2FzZWRUYWdOYW1lIiwiZDEiLCJkMiIsInMxIiwiczIiLCJjMSIsImMyIiwibTEiLCJtMiIsImxvZyIsImJsb2Nr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LE1BQU4sQ0FBYXdILE1BQXpCLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBjb21waWxlU2NyaXB0IH0gZnJvbSBcIi4vc2NyaXB0XCI7XG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUgfSBmcm9tIFwiLi90ZW1wbGF0ZVwiO1xuXG5mdW5jdGlvbiBjb21waWxlcihjb250ZXh0LCB7IGJsb2Nrcywgc291cmNlLCB0eXBlIH0pXG57XG5cdGxldCBleGVjID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzb3VyY2U7XG5cdH1cblxuXHRpZih0eXBlID09PSAnc2NyaXB0Jykge1xuXHRcdGxldCBzID0gY29tcGlsZVNjcmlwdChjb250ZXh0LCBzb3VyY2UpO1xuXHRcdHNvdXJjZSA9IHMuY29kZSA9PSAnJyA/IG51bGwgOiBzLmNvZGU7XG5cdH1cblxuXHRpZih0eXBlID09PSAndGVtcGxhdGUnKSB7XG5cdFx0c291cmNlID0gY29tcGlsZVRlbXBsYXRlKGNvbnRleHQsIHNvdXJjZSwgYmxvY2tzKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c291cmNlLFxuXHRcdHR5cGUsXG5cdFx0ZXhlYyxcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCB7IHR5cGUsIHNvdXJjZSB9KVxue1xuXHRyZXR1cm4ge1xuXHRcdHR5cGUsXG5cdFx0c291cmNlLFxuXHRcdGV4ZWMoYmxvY2tzID0gW10pIHtcblx0XHRcdHJldHVybiBjb21waWxlcihjb250ZXh0LCB7XG5cdFx0XHRcdGJsb2Nrcyxcblx0XHRcdFx0c291cmNlOiB0aGlzLnNvdXJjZSxcblx0XHRcdFx0dHlwZTogdGhpcy50eXBlLFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbn07IiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdub2RlLWh0bWwtcGFyc2VyJztcbmltcG9ydCBibG9jayBmcm9tICcuL2Jsb2NrLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVyKHsgY29udGV4dCwgdHlwZSwgc291cmNlIH0pIHtcblxuXHRsZXQgcm9vdCA9IHBhcnNlKHNvdXJjZSwge1xuXHRcdGxvd2VyQ2FzZVRhZ05hbWU6IHRydWUsXG5cdFx0c2NyaXB0OiB0cnVlLFxuXHR9KTtcblxuXHRsZXQgbm9kZXMgPSByb290LmNoaWxkTm9kZXM7XG5cdGxldCBibG9ja3MgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYobm9kZXNbaV0udGFnTmFtZSkge1xuXHRcdFx0YmxvY2tzW25vZGVzW2ldLnRhZ05hbWVdID0gYmxvY2soY29udGV4dCwge1xuXHRcdFx0XHR0eXBlOiBub2Rlc1tpXS50YWdOYW1lLFxuXHRcdFx0XHRzb3VyY2U6IG5vZGVzW2ldLmlubmVySFRNTCxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVx0XG5cblx0aWYoYmxvY2tzW3R5cGVdKSB7XG5cdFx0cmV0dXJuIGJsb2Nrc1t0eXBlXS5leGVjKGJsb2Nrcyk7XG5cdH1cblxuXHRyZXR1cm4gYmxvY2soY29udGV4dCwge1xuXHRcdHR5cGU6IHR5cGUsXG5cdFx0c291cmNlOiBudWxsLFxuXHR9KTtcbn0iLCJleHBvcnQgY29uc3QgXyA9IC0xO1xuIiwiZXhwb3J0IGNvbnN0IFJlYWN0aXZlTmFtZXNwYWNlcyA9IFsnc3RhdGUnLCAnY29tcHV0ZWQnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIGlkKVxue1xuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cdFxuXHRpZihuYW1lLm1hdGNoKC9eXFwkL2cpKVx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGRhdGEuc3RhdGVbbmFtZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJZGVudGlmaWVyTmFtZShpZClcbntcblx0aWYoIWlkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cblx0aWYobmFtZS5tYXRjaCgvXlxcJC9nKSlcdHtcblx0XHRyZXR1cm4gbmFtZS5zdWJzdHJpbmcoMSlcblx0fVxuXG5cdHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb24oZGF0YSwgcGF0aClcbntcblx0aWYocGF0aC5wYXJlbnQudHlwZSAhPT0gJ0Z1bmN0aW9uRGVjbGFyYXRpb24nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblx0bGV0IG1hdGNoID0gbWF0Y2hJZGVudGlmaWVyKGRhdGEsIGlkKTtcblxuXHRpZihtYXRjaC5uYW1lc3BhY2UgJiYgcGF0aC5saXN0S2V5ID09PSAncGFyYW1zJykge1xuXHRcdHRocm93IG5ldyBFcnJvcihgVmFyaWFibGUgJHsgbmFtZSB9IGhhcyBhbHJlYWR5IGRlZmluZWQgaW4gJHsgbWF0Y2gubmFtZXNwYWNlIH1gKVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJZGVudGlmaWVyQ29udGV4dChjdHgsIGRhdGEsIHBhdGgpXG57XG5cdGlmKFsnRnVuY3Rpb25EZWNsYXJhdGlvbicsICdWYXJpYWJsZURlY2xhcmF0b3InLCAnTGFiZWxlZFN0YXRlbWVudCddLmluY2x1ZGVzKHBhdGgucGFyZW50LnR5cGUpIHx8IFsncHJvcGVydHknXS5pbmNsdWRlcyhwYXRoLmtleSkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXHRsZXQgbWF0Y2ggPSBtYXRjaElkZW50aWZpZXIoZGF0YSwgaWQpO1xuXHRcblx0aWYobWF0Y2gubmFtZXNwYWNlID09PSBmYWxzZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdG5hbWUgPSBgJHtjdHh9Ll8ke21hdGNoLm5hbWVzcGFjZX0uJHtuYW1lfWA7XG5cblx0aWYobWF0Y2gub2JzZXJ2YWJsZSAmJiBwYXRoLmNvbnRhaW5lci50eXBlICE9PSAnQ2FsbEV4cHJlc3Npb24nKSB7XG5cdFx0bmFtZSArPSAnKCknO1xuXHR9XG5cblx0aWQubmFtZSA9IG5hbWU7XG5cblx0cmV0dXJuIG1hdGNoLm9ic2VydmFibGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaElkZW50aWZpZXIoY29udGV4dCwgaWQpXG57XG5cdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXHRsZXQgbmFtZXNwYWNlID0gZmFsc2U7XG5cblx0Zm9yKGxldCBrZXkgaW4gY29udGV4dCkge1xuXHRcdGlmKE9iamVjdC5rZXlzKGNvbnRleHRba2V5XSkuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdG5hbWVzcGFjZSA9IGtleTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdG5hbWVzcGFjZSxcblx0XHRvYnNlcnZhYmxlOiBSZWFjdGl2ZU5hbWVzcGFjZXMuaW5jbHVkZXMobmFtZXNwYWNlKVxuXHR9O1xufSIsImltcG9ydCB7IF8gfSBmcm9tICcuL2VtcHR5LmpzJztcbmltcG9ydCB7IGNvbXBpbGVyIH0gZnJvbSAnLi9jb21waWxlci5qcyc7XG5cbmV4cG9ydCB7IF8sIGNvbXBpbGVyIH0iLCJpbXBvcnQge1xuXHRFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24sXG5cdE9iamVjdEV4cHJlc3Npb24sXG5cdE9iamVjdFByb3BlcnR5LFxuXHRPYmplY3RNZXRob2QsXG5cdENhbGxFeHByZXNzaW9uLFxuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRCbG9ja1N0YXRlbWVudCxcblx0UmV0dXJuU3RhdGVtZW50LFxuXHRpZGVudGlmaWVyLFxuXHRwcm9ncmFtLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7XG5cdC8vIENvbnN0c1xuXHRSZWFjdGl0eSxcblx0RnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uLFxuXHRPYmplY3RSZXR1cm5FeHByZXNzaW9uLFxuXHRBaWlFeHByZXNzaW9uLFxufSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRhdGEpXG57XG5cdGxldCBpbXBvcnRzID0gW107XG5cblx0Zm9yKGxldCBwcm9wIGluIGRhdGEuaW1wb3J0cykge1xuXHRcdGltcG9ydHMucHVzaChkYXRhLmltcG9ydHNbcHJvcF0pXG5cdH07XG5cblx0bGV0IHByb3BlcnRpZXMgPSBbXTtcblxuXHRPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChwcm9wLCBrZXkpID0+IHtcblxuXHRcdGxldCBvYmplY3QgPSBudWxsO1xuXG5cdFx0aWYoRnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uLmluY2x1ZGVzKHByb3ApKSB7XG5cdFx0XHRvYmplY3QgPSBnZW5lcmF0ZUZ1bmN0aW9uUmV0dXJuRXhwcmVzc2lvbihkYXRhLCBwcm9wKTtcblx0XHR9IGVsc2UgaWYoT2JqZWN0UmV0dXJuRXhwcmVzc2lvbi5pbmNsdWRlcyhwcm9wKSkge1xuXHRcdFx0b2JqZWN0ID0gZ2VuZXJhdGVPYmplY3RSZXR1cm5FeHByZXNzaW9uKGRhdGEsIHByb3ApO1xuXHRcdH1cblxuXHRcdGlmKCFvYmplY3QpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0cHJvcGVydGllcy5wdXNoKG9iamVjdCk7XG5cdH0pXG5cblx0bGV0IGV4cG9ydGVkT2JqZWN0ID0gT2JqZWN0RXhwcmVzc2lvbihwcm9wZXJ0aWVzKTtcblx0bGV0IGV4cG9ydGVkRGVmYXVsdCA9IFtcblx0XHRFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24oZXhwb3J0ZWRPYmplY3QpXG5cdF07XG5cblx0bGV0IGJvZHkgPSBbXVxuXHRcdC5jb25jYXQoaW1wb3J0cylcblx0XHQuY29uY2F0KGV4cG9ydGVkRGVmYXVsdClcblxuXHRyZXR1cm4gcHJvZ3JhbShcblx0XHRib2R5LCBcblx0XHRbXSxcblx0XHQnbW9kdWxlJ1xuXHQpO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlRnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uKGRhdGEsIHJldHVyblByb3ApXG57XG5cdGxldCB2YWx1ZXMgPSBkYXRhW3JldHVyblByb3BdO1xuXHRsZXQgcHJvcGVydGllcyA9IFtdO1xuXG5cdGZvcihsZXQgcHJvcCBpbiB2YWx1ZXMpIHtcblx0XHRsZXQgdmFsID0gdmFsdWVzW3Byb3BdO1xuXG5cdFx0aWYodmFsLnR5cGUgPT09ICdCbG9ja1N0YXRlbWVudCcpIHtcblx0XHRcdHZhbCA9IEFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtdLCB2YWwpO1xuXHRcdH1cblxuXHRcdGlmKFJlYWN0aXR5W3JldHVyblByb3BdKSB7XG5cdFx0XHR2YWwgPSBDYWxsRXhwcmVzc2lvbihpZGVudGlmaWVyKFJlYWN0aXR5W3JldHVyblByb3BdKSwgW3ZhbF0pO1xuXHRcdH1cblxuXHRcdHByb3BlcnRpZXMucHVzaChcblx0XHRcdE9iamVjdFByb3BlcnR5KGlkZW50aWZpZXIocHJvcCksIHZhbClcblx0XHQpXG5cdH1cblxuXHRsZXQgRnVuY3Rpb25SZXR1cm4gPSBSZXR1cm5TdGF0ZW1lbnQoXG5cdFx0T2JqZWN0RXhwcmVzc2lvbihcblx0XHRcdHByb3BlcnRpZXNcblx0XHQpXG5cdClcblxuXHRsZXQgYm9keSA9IEJsb2NrU3RhdGVtZW50KFtGdW5jdGlvblJldHVybl0pXG5cblx0bGV0IG9iamVjdCA9IE9iamVjdE1ldGhvZCgnbWV0aG9kJywgaWRlbnRpZmllcihyZXR1cm5Qcm9wKSxcblx0XHRSZWFjdGl0eVtyZXR1cm5Qcm9wXSA/IFtpZGVudGlmaWVyKFJlYWN0aXR5W3JldHVyblByb3BdKV0gOiBbXVxuXHQsIGJvZHkpO1xuXG5cdHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlT2JqZWN0UmV0dXJuRXhwcmVzc2lvbihkYXRhLCBwcm9wKVxue1xuXHRsZXQgdmFsdWVzID0gZGF0YVtwcm9wXTtcblx0bGV0IHByb3BlcnRpZXMgPSBbXTtcblxuXHRmb3IobGV0IHByb3AgaW4gdmFsdWVzKSB7XG5cdFx0bGV0IHZhbCA9IHZhbHVlc1twcm9wXTtcblxuXHRcdGlmKHZhbC50eXBlID09PSAnRnVuY3Rpb25EZWNsYXJhdGlvbicpIHtcblx0XHRcdHZhbCA9IEZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCB2YWwucGFyYW1zLCB2YWwuYm9keSk7XG5cdFx0fVxuXG5cdFx0cHJvcGVydGllcy5wdXNoKFxuXHRcdFx0T2JqZWN0UHJvcGVydHkoaWRlbnRpZmllcihwcm9wKSwgdmFsKVxuXHRcdClcblx0fVxuXG5cdGxldCBvYmplY3QgPSBPYmplY3RQcm9wZXJ0eShcblx0XHRpZGVudGlmaWVyKHByb3ApLFxuXHRcdE9iamVjdEV4cHJlc3Npb24ocHJvcGVydGllcylcblx0KTtcblxuXHRyZXR1cm4gb2JqZWN0O1xufSIsImV4cG9ydCBjb25zdCBkYXRhID0ge1xuXHRpbXBvcnRzOiBbXSxcblx0cHJvcHM6IHt9LFxuXHRkYXRhOiB7fSxcblx0c3RhdGU6IHt9LFxuXHRjb21wdXRlZDoge30sXG5cdG1ldGhvZHM6IHt9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0YShjb250ZXh0KSB7XG5cdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7fSwgY29udGV4dCk7XG59IiwiLy8gaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xuXG4vKipcbiAqIENvbnN0c1xuICovXG5cbmV4cG9ydCBjb25zdCBSZWFjdGl0eSA9IHtcblx0J3N0YXRlJzogJ28nLFxuXHQnY29tcHV0ZWQnOiAnbycsXG59O1xuXG5leHBvcnQgY29uc3QgRnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uID0gW1xuXHQnZGF0YScsICdzdGF0ZScsICdjb21wdXRlZCcsXG5dO1xuXG5leHBvcnQgY29uc3QgT2JqZWN0UmV0dXJuRXhwcmVzc2lvbiA9IFtcblx0J21ldGhvZHMnLCBcbl07XG5cbi8vIEFzIGl0IGlzIGV4cHJlc3Npb25zXG5leHBvcnQgY29uc3QgQWlpRXhwcmVzc2lvbiA9IFtcblx0J2ltcG9ydHMnLFxuXTtcblxuLy8gZXhwb3J0IGNvbnN0IFJFVFVSTl9GVU5DVElPTl9UWVBFID0gMTtcbi8vIGV4cG9ydCBjb25zdCBPQkpFQ1RfRlVOQ1RJT05fVFlQRSA9IDI7XG5cbi8qKlxuICogRnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29udGV4dGFibGUoZGF0YSwgaWQpXG57XG5cdGxldCBuYW1lID0gaWQubmFtZTtcblx0bGV0IGlzRnVuY3Rpb24gPSBuYW1lLm1hdGNoKC9cXChcXCkkL2cpO1xuXG5cdG5hbWUgPSBuYW1lLnJlcGxhY2UoLyhcXCh8XFwpKS9nLCAnJyk7XG5cblx0aWYoIW5hbWUubWF0Y2goL150aGlzXFwuL2dpKSkge1xuXHRcdGxldCBhcHBlbmQgPSBbJ3RoaXMnXTtcblx0XHRcblx0XHRpZihPYmplY3Qua2V5cyhkYXRhLnN0YXRlKS5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdFx0YXBwZW5kLnB1c2goJ19zdGF0ZScpO1xuXHRcdH0gZWxzZSBpZihPYmplY3Qua2V5cyhkYXRhLmNvbXB1dGVkKS5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdFx0YXBwZW5kLnB1c2goJ19jb21wdXRlZCcpO1xuXHRcdH0gZWxzZSBpZihPYmplY3Qua2V5cyhkYXRhLmRhdGEpLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRhcHBlbmQucHVzaCgnX2RhdGEnKTtcblx0XHR9IGVsc2UgaWYoT2JqZWN0LmtleXMoZGF0YS5tZXRob2RzKS5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdFx0YXBwZW5kLnB1c2goJ19tZXRob2RzJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gdmFyaWFibGUgJHtuYW1lfWApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGFwcGVuZC5wdXNoKG5hbWUpO1xuXG5cdFx0bmFtZSA9IGFwcGVuZC5qb2luKCcuJyk7XG5cdH1cblxuXHRpZihpc0Z1bmN0aW9uKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9KClgO1xuXHR9XG5cblx0aWQubmFtZSA9IG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lkZW50aWZpZXJSZWFjdGl2ZShkYXRhLCBpZClcbntcblx0bGV0IG5hbWUgPSBpZC5uYW1lO1xuXHRcblx0aWYobmFtZS5tYXRjaCgvXlxcJC9nKSlcdHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBkYXRhLnN0YXRlW25hbWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWRlbnRpZmllck5hbWUoaWQpXG57XG5cdGlmKCFpZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bGV0IG5hbWUgPSBpZC5uYW1lO1xuXG5cdGlmKG5hbWUubWF0Y2goL15cXCQvZykpXHR7XG5cdFx0cmV0dXJuIG5hbWUuc3Vic3RyaW5nKDEpXG5cdH1cblxuXHRyZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VPYnNlcnZhYmxlR2V0dGVyKGRhdGEsIGlkKVxue1xuXHRpZighaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgaWQpKSB7XG5cdFx0cmV0dXJuIGlkO1xuXHR9XG5cdFxuXHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblx0aWQubmFtZSA9IGAkeyBuYW1lIH0oKWA7XG5cblx0cmV0dXJuIGlkO1xufSIsIlxuXG5pbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcbmltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiQGJhYmVsL2dlbmVyYXRvclwiO1xuXG5pbXBvcnQgeyBjcmVhdGVEYXRhIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHBhcnNlVmFyaWFibGVzIGZyb20gXCIuL3BhcnNlVmFyaWFibGVzXCI7XG5pbXBvcnQgcGFyc2VNZXRob2RzIGZyb20gXCIuL3BhcnNlTWV0aG9kc1wiO1xuaW1wb3J0IEFzdEdlbmVyYXRvciBmcm9tIFwiLi9Bc3RHZW5lcmF0b3JcIjtcblxuXG4vKipcbiAqIENvbXBpbGVyXG4gKiBAcGFyYW0gIHtbdHlwZV19IHNvdXJjZSBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWFjdGl2ZVZhcmlhYmxlcyhjb250ZXh0LCBzb3VyY2UpXG57XG5cdGxldCBkYXRhID0gY3JlYXRlRGF0YShjb250ZXh0KTtcblxuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2Uoc291cmNlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRwYXJzZVZhcmlhYmxlcyhkYXRhLCBhc3QpO1xuXHRwYXJzZU1ldGhvZHMoZGF0YSwgYXN0KTtcblxuXHRsZXQgcmVhY3RpdmVfdmFyaWFibGVzID0gW107XG5cblx0cmVhY3RpdmVfdmFyaWFibGVzID0gcmVhY3RpdmVfdmFyaWFibGVzXG5cdFx0LmNvbmNhdChPYmplY3Qua2V5cyhkYXRhLnN0YXRlKSlcblx0XHQuY29uY2F0KE9iamVjdC5rZXlzKGRhdGEuY29tcHV0ZWQpKTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlYWN0aXZlX3ZhcmlhYmxlcyxcblx0XHRkYXRhLFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVNjcmlwdChjb250ZXh0LCBzb3VyY2UpXG57XG5cdGxldCBkYXRhID0gY3JlYXRlRGF0YSgpO1xuXHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2Uoc291cmNlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRwYXJzZVZhcmlhYmxlcyhkYXRhLCBhc3QpO1xuXHRwYXJzZU1ldGhvZHMoZGF0YSwgYXN0KTtcblxuXHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcblxuXHRyZXR1cm4gZ2VuZXJhdGUoQXN0R2VuZXJhdG9yKGRhdGEpLCB7XG5cdFx0cmV0YWluTGluZXM6IGZhbHNlLFxuXHRcdGNvbXBhY3Q6IGZhbHNlLFxuXHRcdG1pbmlmaWVkOiBmYWxzZSxcblx0XHRjb25jaXNlOiBmYWxzZSxcblx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG5cdH0sIHNvdXJjZSk7XG59XG4iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5pbXBvcnQge1xuXHRpZGVudGlmaWVyLFxuXHRDYWxsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQge1xuXHRnZXRJZGVudGlmaWVyTmFtZSxcblx0aXNJZGVudGlmaWVyUmVhY3RpdmUsXG5cdG1ha2VPYnNlcnZhYmxlR2V0dGVyLFxuXHRtYWtlQ29udGV4dGFibGUsXG59IGZyb20gXCIuL2hlbHBlcnNcIjtcblxubGV0IGZ1bmN0aW9uQmxvY2tIYW5kbGluZyA9IGZhbHNlO1xubGV0IGFzc2lnbm1lbnRIYW5kbGluZyA9IGZhbHNlO1xubGV0IHZhcmlhYmxlRGVjbGFyYXRpb25IYW5kbGluZyA9IGZhbHNlO1xubGV0IHNob3VsZEFzc2lnbm1lbnRIYW5kbGUgPSBmYWxzZTtcbmxldCBoYXNGdW5jdGlvblJlYWN0aXZlID0gZmFsc2U7XG5sZXQgbWVtYmVySGFuZGxpbmcgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3RNZXRob2RzIChkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0Ly8gc2F2ZSBpbXBvcnRzXG5cdFx0SW1wb3J0RGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0ZGF0YS5pbXBvcnRzW3BhdGgubm9kZS5zb3VyY2UudmFsdWVdID0gcGF0aC5ub2RlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogVHJhbnNsYXRlIHVzdWFsIHZhcmlhYmxlcyB0byByZWFjdGl2ZVxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cdFx0ICAgICAgICBpZihmdW5jdGlvbkJsb2NrSGFuZGxpbmcpIHtcblx0XHQgICAgICAgIFx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShpZCk7XG5cblx0XHQgICAgICAgIFx0aWYoZGF0YS5zdGF0ZVtuYW1lXSAmJiAhYXNzaWdubWVudEhhbmRsaW5nICYmICFbJ0NhbGxFeHByZXNzaW9uJ10uaW5jbHVkZXMocGF0aC5jb250YWluZXIudHlwZSkpIHtcblx0XHQgICAgICAgIFx0XHRoYXNGdW5jdGlvblJlYWN0aXZlID0gdHJ1ZTtcblx0XHQgICAgICAgIFx0fVxuXG5cdFx0ICAgICAgICBcdGlmKCFbJ0Fzc2lnbm1lbnRFeHByZXNzaW9uJywgJ0NhbGxFeHByZXNzaW9uJ10uaW5jbHVkZXMocGF0aC5jb250YWluZXIudHlwZSkgJiYgIXZhcmlhYmxlRGVjbGFyYXRpb25IYW5kbGluZykge1xuXHRcdCAgICAgICAgXHRcdG1ha2VPYnNlcnZhYmxlR2V0dGVyKGRhdGEsIGlkKTtcblx0XHRcdCAgICAgICAgfVxuXG5cdFx0XHQgICAgICAgIGlmKCF2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcgJiYgIW1lbWJlckhhbmRsaW5nKSB7XG5cdFx0XHQgICAgICAgIFx0bWFrZUNvbnRleHRhYmxlKGRhdGEsIGlkKTtcblx0XHRcdCAgICAgICAgfVxuXG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aCkge1xuXHRcdCAgICAgICAgLy8gY29uc29sZS5sb2coXCJJZGVudGlmaWVyIGV4aXQgY2FsbGVkXCIsIHBhdGgubm9kZS5uYW1lKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0XG5cdFx0Q2FsbEV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0bWVtYmVySGFuZGxpbmcgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXHRcdFx0XHRtZW1iZXJIYW5kbGluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0TWVtYmVyRXhwcmVzc2lvbjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRtZW1iZXJIYW5kbGluZyA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cdFx0XHRcdG1lbWJlckhhbmRsaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHR2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXHRcdFx0XHR2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIE1ha2UgXG5cdFx0IHYgPSB2ICsgMVxuXHRcdCBUb1xuXHRcdCB2KHYoKSArIDEpXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHRFeHByZXNzaW9uU3RhdGVtZW50OiB7XG5cdFx0XHRleGl0KHBhdGgpIHtcblx0XHRcdFx0aWYocGF0aC5ub2RlLmV4cHJlc3Npb24udHlwZSA9PT0gJ0Fzc2lnbm1lbnRFeHByZXNzaW9uJykge1xuXHRcdFx0XHRcdGxldCBleHByZXNzaW9uID0gcGF0aC5ub2RlLmV4cHJlc3Npb247XG5cdFx0XHRcdFx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShleHByZXNzaW9uLmxlZnQpO1xuXHRcdFx0XHRcdHBhdGgucmVwbGFjZVdpdGgoXG5cdFx0XHRcdFx0XHRDYWxsRXhwcmVzc2lvbihpZGVudGlmaWVyKG5hbWUpLCBbZXhwcmVzc2lvbi5yaWdodF0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0QXNzaWdubWVudEV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0YXNzaWdubWVudEhhbmRsaW5nID0gdHJ1ZTtcblx0XHRcdFx0aWYoaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgcGF0aC5ub2RlLmxlZnQpKSB7XG5cdFx0XHRcdFx0c2hvdWxkQXNzaWdubWVudEhhbmRsZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRleGl0KHBhdGgpIHtcblx0XHRcdFx0YXNzaWdubWVudEhhbmRsaW5nID0gZmFsc2U7XG5cdFx0XHRcdHNob3VsZEFzc2lnbm1lbnRIYW5kbGUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZSBmdW5jdGlvblxuXHRcdCAqIEFkZCB0aGVtIHRvIG1ldGhvZHMgYW5kIGNvbXB1dGVkIHByb3BzXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHRCbG9ja1N0YXRlbWVudDoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRpZihwYXRoLnBhcmVudC50eXBlID09PSAnRnVuY3Rpb25EZWNsYXJhdGlvbicpIHtcblx0XHQgICAgXHRcdGZ1bmN0aW9uQmxvY2tIYW5kbGluZyA9IHRydWU7XG5cdFx0ICAgIFx0fVxuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpIHtcblx0XHQgICAgXHRpZighZnVuY3Rpb25CbG9ja0hhbmRsaW5nIHx8IHBhdGgucGFyZW50LnR5cGUgIT09ICdGdW5jdGlvbkRlY2xhcmF0aW9uJykge1xuXHRcdCAgICBcdFx0cmV0dXJuO1xuXHRcdCAgICBcdH1cblxuXHRcdCAgICBcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUocGF0aC5jb250YWluZXIuaWQpO1xuXHRcdCAgICBcdGlmKGhhc0Z1bmN0aW9uUmVhY3RpdmUpIHtcblx0XHQgICAgXHRcdGRhdGEuY29tcHV0ZWRbbmFtZV0gPSBwYXRoLm5vZGU7XG5cdFx0ICAgIFx0fSBlbHNlIHtcblx0XHQgICAgXHRcdGRhdGEubWV0aG9kc1tuYW1lXSA9IHBhdGguY29udGFpbmVyO1xuXHRcdCAgICBcdH1cblxuXHRcdCAgICBcdGhhc0Z1bmN0aW9uUmVhY3RpdmUgPSBmYWxzZTtcblx0XHQgICAgXHRmdW5jdGlvbkJsb2NrSGFuZGxpbmcgPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkYXRhLCBhc3QpXG57XG5cblx0dHJhdmVyc2UoYXN0LCBjb2xsZWN0TWV0aG9kcyhkYXRhKSk7XG59IiwiaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuaW1wb3J0IHtcblx0Z2V0SWRlbnRpZmllck5hbWUsXG5cdGlzSWRlbnRpZmllclJlYWN0aXZlLFxuXHRtYWtlT2JzZXJ2YWJsZUdldHRlcixcbn0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG4vLyBHZXQgYWxsIGRhdGFcbi8vIE1hcmsgZGF0YSBhcyByZWFjdGl2ZSBvciBzdGF0ZWxlc3NcbmxldCBmdW5jdGlvbkhhbmRsaW5nID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsZWN0VmFyaWFibGVzIChkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZihmdW5jdGlvbkhhbmRsaW5nKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlLmlkO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBwYXRoLm5vZGUuaW5pdDtcblxuXHRcdFx0XHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblx0XHRcdFx0aWYoaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgaWQpKSB7XG5cdFx0XHRcdFx0ZGF0YS5zdGF0ZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRhdGEuZGF0YVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0ICAgIH0sXG5cdFx0fSxcblx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdGZ1bmN0aW9uSGFuZGxpbmcgPSB0cnVlO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpIHtcblx0XHQgICAgXHRmdW5jdGlvbkhhbmRsaW5nID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRhdGEsIGFzdClcbntcblx0dHJhdmVyc2UoYXN0LCBjb2xsZWN0VmFyaWFibGVzKGRhdGEpKTtcbn0iLCJpbXBvcnQgeyBwYXJzZU9wdGlvbnMsIHBhcnNlT3B0aW9uS2V5LCBwYXJzZU9wdGlvblZhbHVlIH0gZnJvbSAnLi9hdHRycyc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHBhcnNlU3RhdGVtZW50IH0gZnJvbSAnLi9wYXJzZUZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBwYXJzZUV4cHJlc3Npb24gfSBmcm9tICcuL2V4cHJlc3Npb24nO1xuXG5leHBvcnQgdmFyIEhJRCA9IDA7XG5cbmV4cG9ydCBjb25zdCBpc05vblBocmFzaW5nVGFnID0gW1xuXHQnYWRkcmVzcycsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2Jhc2UnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2NhcHRpb24nLCAnY29sJywgJ2NvbGdyb3VwJyxcblx0J2RkJywgJ2RldGFpbHMnLCAnZGlhbG9nJywgJ2RpdicsICdkbCcsICdkdCcsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb290ZXInLFxuXHQnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdsZWdlbmQnLFxuXHQnbGknLCAnbWVudWl0ZW0nLCAnbWV0YScsICdvcHRncm91cCcsICdvcHRpb24nLCAncGFyYW0nLCAncnAnLCAncnQnLCAnc291cmNlJywgJ3N0eWxlJywgJ3N1bW1hcnknLFxuXHQndGJvZHknLCAndGQnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGl0bGUnLCAndHInLCAndHJhY2snXG5dO1xuXG52YXIgSUZfU1RBVEVNRU5UX1NUQVJURUQgPSBmYWxzZTtcblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50Q29kZSh0YWcsIG9wdGlvbnMsIGNoaWxkcmVuID0gW10pXG57XG5cdGlmKHRhZyA9PT0gJ3RlbXBsYXRlJykge1xuXHRcdHJldHVybiBgWyR7IGNoaWxkcmVuLmpvaW4oJywnKSB9XWA7XG5cdH1cblx0XG5cdHJldHVybiBgaCgnJHsgdGFnIH0nLCAkeyBvcHRpb25zIH0sIFskeyBjaGlsZHJlbi5qb2luKCcsJykgfV0pYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVxue1xuXHRjb25zdHJ1Y3Rvcih7IHRhZyA9IG51bGwsIGF0dHJzID0gbnVsbCwgY2hpbGRyZW4gPSBbXSB9KVxuXHR7XG5cdFx0dGhpcy5oaWQgPSArK0hJRDtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLmF0dHJzID0gYXR0cnM7XG5cdFx0dGhpcy5vcHRpb25zID0gcGFyc2VPcHRpb25zKGF0dHJzKTtcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cdFx0XG5cdFx0dGhpcy5wcmV2U2libGluZyA9IG51bGw7XG5cdFx0dGhpcy5uZXh0U2libGluZyA9IG51bGw7XG5cdFx0Ly8gaWZcblx0XHR0aGlzLmlmX3N0YXRlbWVudCA9IGZhbHNlO1xuXHR9XG5cblx0Ly8gZ2V0Q29udGV4dChjdXJyZW50Q29udGV4dClcblx0Ly8ge1xuXHQvLyBcdGxldCBjdHggPSBudWxsO1xuXG5cdC8vIFx0dHJ5IHtcblx0Ly8gXHRcdGN0eCA9IFNpbnVvdXMuZ2V0Q29tcG9uZW50KHRoaXMudGFnKTtcblx0Ly8gXHR9IGNhdGNoKGVycikge31cblxuXHQvLyBcdGlmKGN0eCA9PT0gbnVsbCkge1xuXHQvLyBcdFx0Y3R4ID0gY3VycmVudENvbnRleHQ7XG5cdC8vIFx0fVxuXG5cdC8vIFx0cmV0dXJuIGN0eDtcblx0Ly8gfVxuXHRzZXRTaWJsaW5ncygpXG5cdHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmKHRoaXMuY2hpbGRyZW5baSArIDFdKSB7XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW5baV0ubmV4dFNpYmxpbmcgPSB0aGlzLmNoaWxkcmVuW2kgKyAxXTtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbltpICsgMV0ucHJldlNpYmxpbmcgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXHRcdFx0fVxuXG5cdFx0XHRpZih0aGlzLmNoaWxkcmVuW2ldIGluc3RhbmNlb2YgTm9kZSkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuW2ldLnNldFNpYmxpbmdzKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGlzQ29tcG9uZW50KClcblx0e1xuXHRcdHJldHVybiAhaXNOb25QaHJhc2luZ1RhZy5pbmNsdWRlcyh0aGlzLnRhZyk7XG5cdH1cblxuXHR0b0FTVChjb250ZXh0ID0gbnVsbCwgaHlkcmF0ZSA9IGZhbHNlKVxuXHR7XG5cdFx0bGV0IGNvZGUgPSAnJztcblx0XHRsZXQgY2hpbGRyZW4gPSBbXTtcblx0XHRsZXQgc2hvdWxkSHlkYXJhdGUgPSBmYWxzZTtcblx0XHRsZXQgc2hvdWxkT3B0aW9uc0h5ZHJhdGUgPSBmYWxzZTtcblx0XHQvLyBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpO1xuXG5cdFx0Ly8gY29uc29sZS53YXJuKCdbMV0nLCBjb250ZXh0Lm5hbWUsIHNob3VsZEh5ZGFyYXRlKTtcblx0XHQvKipcblx0XHQgKiBUcmFuc2xhdGUgY2hpbGRyZW4gdG8gaHlwZXJzY3JpcHRcblx0XHQgKiBAcGFyYW0gIHtbdHlwZV19IHZhciBpICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cblx0XHQgKiBAcmV0dXJuIHtbdHlwZV19ICAgICBbZGVzY3JpcHRpb25dXG5cdFx0ICovXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXHRcdFx0bGV0IHsgdmFsdWUsIHN0YXRlZnVsbCB9ID0gY2hpbGQudG9BU1QoY29udGV4dCwgaHlkcmF0ZSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnW2NoaWxkXScsIGNoaWxkLCBzdGF0ZWZ1bGwpO1xuXHRcdFx0aWYoc3RhdGVmdWxsKSB7XG5cdFx0XHRcdHNob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y2hpbGRyZW4ucHVzaCh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0bGV0IG9wdGlvbnMgPSAnJztcblxuXHRcdC8vIGNvbnNvbGUud2FybignWzJdJywgY29udGV4dC5uYW1lLCBzaG91bGRIeWRhcmF0ZSk7XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5vcHRpb25zKSB7XG5cdFx0XHRsZXQgeyB2YWx1ZSwgc3RhdGVmdWxsIH0gPSBwYXJzZU9wdGlvblZhbHVlKGNvbnRleHQsIGtleSwgdGhpcy5vcHRpb25zW2tleV0pO1xuXHRcdFx0XG5cdFx0XHRpZihzdGF0ZWZ1bGwpIHtcblx0XHRcdFx0c2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihzdGF0ZWZ1bGwgfHwgIWh5ZHJhdGUgfHwga2V5ID09PSAnZGF0YS1oaWQnKSB7XG5cdFx0XHRcdG9wdGlvbnMgKz0gYCR7IHBhcnNlT3B0aW9uS2V5KGtleSkgfTogJHsgdmFsdWUgfSxgO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihzdGF0ZWZ1bGwgJiYgaHlkcmF0ZSkge1xuXHRcdFx0XHRzaG91bGRPcHRpb25zSHlkcmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cblx0XHRzaG91bGRIeWRhcmF0ZSA9IHRoaXMuaXNDb21wb25lbnQgfHwgc2hvdWxkSHlkYXJhdGU7XG5cblxuXHRcdGlmKHNob3VsZEh5ZGFyYXRlKSB7XG5cdFx0XHRvcHRpb25zICs9IGBpZDogY3R4LmdldFVJRCgkeyB0aGlzLmhpZCB9KSxgO1xuXHRcdH1cblxuXHRcdGlmKHNob3VsZE9wdGlvbnNIeWRyYXRlKSB7XG5cdFx0XHRvcHRpb25zICs9IGBfczogdHJ1ZSxgO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUud2FybihoeWRyYXRlLCBjb250ZXh0Lm5hbWUsIHRoaXMudGFnLCBzaG91bGRIeWRhcmF0ZSA/IG9wdGlvbnMgOiAnJyk7XG5cblx0XHRvcHRpb25zID0gYHske29wdGlvbnN9fWA7XG5cdFx0XG5cdFx0bGV0IGZuX2dlbmVyYXRlZCA9IGZhbHNlO1xuXG5cdFx0bGV0IHN0YXRlbWVudCA9IHBhcnNlU3RhdGVtZW50KHRoaXMpO1xuXG5cdFx0aWYoc3RhdGVtZW50LmlzKSB7XG5cdFx0XHRcblx0XHRcdGxldCBjb25kaXRpb24gPSBwYXJzZUV4cHJlc3Npb24oY29udGV4dCwgc3RhdGVtZW50LmNvbmRpdGlvbiwgZmFsc2UpXG5cblx0XHRcdGlmKHN0YXRlbWVudC5zdGFydCkge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzKVxuXHRcdFx0XHRjb2RlICs9IGBzdGF0ZW1lbnQoYDtcblx0XHRcdH1cblxuXHRcdFx0Y29kZSArPSBgICR7IGNvbmRpdGlvbi52YWx1ZSB9LCAkeyBnZXRDb21wb25lbnRDb2RlKHRoaXMudGFnLCBvcHRpb25zLCBjaGlsZHJlbikgfWA7XG5cblx0XHRcdGlmKHN0YXRlbWVudC5lbmQpIHtcblx0XHRcdFx0Y29kZSArPSBgKWA7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvZGUgKz0gZ2V0Q29tcG9uZW50Q29kZSh0aGlzLnRhZywgb3B0aW9ucywgY2hpbGRyZW4pO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuYXR0cnMsIHRoaXMuaWZfc3RhdGVtZW50LCBzdGF0ZW1lbnQpXG5cblx0XHQvLyBpZihJRl9TVEFURU1FTlRfU1RBUlRFRCAmJiAhdGhpcy5hdHRyc1sndi1pZiddKSB7XG5cdFx0Ly8gXHRmbl9nZW5lcmF0ZWQgPSB0cnVlO1xuXHRcdC8vIFx0Y29kZSArPSBgKWA7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gaWYoSUZfU1RBVEVNRU5UX1NUQVJURUQpIHtcblx0XHQvLyBcdGxldCBjb25kaXRpb24gPSB0aGlzLmF0dHJzWyd2LWlmJ10gfHwgdGhpcy5hdHRyc1sndi1lbHNlLWlmJ10gfHwgdGhpcy5hdHRyc1sndi1lbHNlJ107XG5cdFx0Ly8gXHRsZXQgcmVzID0gW107XG5cdFx0Ly8gXHRpZighdGhpcy5hdHRyc1sndi1lbHNlJ10pIHtcblx0XHQvLyBcdFx0cmVzLnB1c2goY29uZGl0aW9uKVxuXHRcdC8vIFx0fVxuXG5cdFx0Ly8gXHRyZXMucHVzaChnZXRDb21wb25lbnRDb2RlKHRoaXMudGFnLCBvcHRpb25zLCBjaGlsZHJlbikpO1xuXG5cdFx0Ly8gXHRpZighdGhpcy5hdHRyc1sndi1lbHNlJ10pIHtcblx0XHQvLyBcdFx0cmVzLnB1c2goJycpXG5cdFx0Ly8gXHR9XG5cdFx0XHRcblx0XHQvLyBcdGNvZGUgKz0gcmVzLmpvaW4oJywnKTtcblxuXHRcdC8vIFx0Y29uc29sZS5sb2codGhpcy5hdHRycywgY29kZSlcblx0XHQvLyB9IFxuXG5cdFx0Ly8gaWYoIWZuX2dlbmVyYXRlZCkge1xuXHRcdFx0XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gY29uc29sZS53YXJuKCdbM10nLCBjb250ZXh0Lm5hbWUsIHNob3VsZEh5ZGFyYXRlKTtcblx0XHQvLyBjb25zb2xlLmxvZygnW21haW5dJywgdGhpcy50YWcsIHNob3VsZEh5ZGFyYXRlKTtcblxuXHRcdGlmKGh5ZHJhdGUgJiYgIXNob3VsZEh5ZGFyYXRlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2YWx1ZTogXyxcblx0XHRcdFx0c3RhdGVmdWxsOiBmYWxzZSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiBjb2RlLFxuXHRcdFx0c3RhdGVmdWxsOiBzaG91bGRIeWRhcmF0ZSxcblx0XHR9O1xuXHR9XG59IiwiaW1wb3J0IHsgcGFyc2VPcHRpb25WYWx1ZSB9IGZyb20gJy4vYXR0cnMnO1xuaW1wb3J0IHsgXyB9IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHROb2RlXG57XG5cdGNvbnN0cnVjdG9yKHRleHQpXG5cdHtcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHR9XG5cblx0dG9BU1QoY29udGV4dCA9IG51bGwsIGh5ZHJhdGUgPSBmYWxzZSlcblx0e1xuXHRcdGxldCB7IHZhbHVlLCBzdGF0ZWZ1bGwgfSA9IHBhcnNlT3B0aW9uVmFsdWUoY29udGV4dCwgJ190JywgdGhpcy50ZXh0KTtcblx0XHQvLyBjb25zb2xlLmxvZyhgdCgke3RoaXMudGV4dH0pYCwgdmFsdWUsIHN0YXRlZnVsbClcblxuXHRcdGlmKGh5ZHJhdGUgJiYgIXN0YXRlZnVsbCkge1xuXHRcdFx0dmFsdWUgPSBfO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZSxcblx0XHRcdHN0YXRlZnVsbCxcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgeyBwYXJzZUV4cHJlc3Npb24gfSBmcm9tICcuL2V4cHJlc3Npb24nO1xuXG5jb25zdCBBdHRyc01hcCA9IHtcblx0J3N0eWxlJzogJ3N0YXRpY1N0eWxlJyxcblx0J2NsYXNzJzogJ3N0YXRpY0NsYXNzJyxcblx0JzpzdHlsZSc6ICdkeW5hbWljU3R5bGUnLFxuXHQnOmNsYXNzJzogJ2R5bmFtaWNDbGFzcycsXG59O1xuXG5jb25zdCBIVE1MQXR0cmlidXRlcyA9IFsnaWQnLCAnbmFtZScsICd2YWx1ZScsICdwbGFjZWhvbGRlciddO1xuXG5mdW5jdGlvbiBwYXJzZU9wdGlvblZhbHVlKGNvbnRleHQsIGtleSwgdmFsdWUpXG57XG5cdGxldCBzdGF0ZWZ1bGwgPSBmYWxzZTtcblx0bGV0IGlzRXhwcmVzc2lvbiA9IGZhbHNlO1xuXG5cdGlmKGtleVswXSA9PT0gJ0AnKSB7XG5cdFx0c3RhdGVmdWxsID0gdHJ1ZTtcblx0XHRpc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG5cblx0aWYoa2V5WzBdID09PSAnXycpIHtcblx0XHR2YWx1ZSA9ICdgJyArIHZhbHVlLnJlcGxhY2UoL3t7KC4qKX19L2csICckeyQxfScpICsgJ2AnO1xuXHRcdGlzRXhwcmVzc2lvbiA9IHRydWU7XG5cdH1cblxuXHRsZXQgZXhwID0gcGFyc2VFeHByZXNzaW9uKGNvbnRleHQsIHZhbHVlLCBpc0V4cHJlc3Npb24pO1xuXHRcblx0dmFsdWUgPSBleHAudmFsdWU7XG5cblx0aWYoIXN0YXRlZnVsbCAmJiBleHAuc3RhdGVmdWxsKSB7XG5cdFx0c3RhdGVmdWxsID0gdHJ1ZTtcblx0fVxuXG5cdFxuXG5cdC8vIGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0Ly8gXHR2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0Ly8gfSBlbHNlIHtcblx0Ly8gXHR2YWx1ZSA9IGBcIiR7dmFsdWV9XCJgO1xuXHQvLyB9XG5cblx0XG5cblx0cmV0dXJuIHtcblx0XHR2YWx1ZSxcblx0XHRzdGF0ZWZ1bGwsXG5cdH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlT3B0aW9uS2V5KGtleSwgdmFsdWUpXG57XG5cdGlmKEF0dHJzTWFwW2tleV0pIHtcblx0XHRyZXR1cm4gQXR0cnNNYXBba2V5XTtcblx0fSBlbHNlIGlmKGtleVswXSA9PT0gJ0AnKSB7XG5cdFx0cmV0dXJuIGtleS5yZXBsYWNlKC9AL2csICdvbicpO1xuXHR9XG5cblx0cmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gcGFyc2VTdHlsZXMoc3RyaW5nKVxue1xuXHRsZXQgc3R5bGVzID0ge307XG5cdGxldCBwYWlycyA9IHN0cmluZy5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCc7Jyk7XG5cdFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRtcCA9IHBhaXJzW2ldLnNwbGl0KCc6Jyk7XG5cdFx0aWYodG1wLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0c3R5bGVzW3RtcFswXV0gPSB0bXBbMV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVPcHRpb25LZXkodmFyaWFibGUpXG57XG5cdGlmKHZhcmlhYmxlLm1hdGNoKC9cXC0vZykpIHtcblx0XHR2YXJpYWJsZSA9IGAnJHt2YXJpYWJsZX0nYDtcblx0fVxuXG5cdHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gcGFyc2VPcHRpb25zKGF0dHJzKVxue1xuXHRsZXQgb3B0aW9ucyA9IHt9O1xuXG5cdGZvcihsZXQga2V5IGluIGF0dHJzKVxuXHR7XG5cdFx0bGV0IHZhbHVlID0gYXR0cnNba2V5XTtcblx0XHRsZXQgb3B0aW9uX2tleSA9IHByZXBhcmVPcHRpb25LZXkoa2V5KTtcblxuXHRcdGlmKGtleS5tYXRjaCgvXnZcXC0vZykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHQvLyBJcyBodG1sIGF0dHJcblx0XHRpZihIVE1MQXR0cmlidXRlcy5pbmNsdWRlcyhrZXkpIHx8IE9iamVjdC5rZXlzKEF0dHJzTWFwKS5pbmNsdWRlcyhrZXkpIHx8IGtleS5tYXRjaCgvZGF0YVxcLS9nKSB8fCBrZXkubWF0Y2goL0AvZykpIHtcblx0XHRcdGlmKGtleSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlU3R5bGVzKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0b3B0aW9uc1tvcHRpb25fa2V5XSA9IHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZighb3B0aW9ucy5wcm9wcykge1xuXHRcdFx0XHRvcHRpb25zLnByb3BzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdG9wdGlvbnMucHJvcHNbb3B0aW9uX2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gcGFyc2VBdHRycyhzdHJpbmcpXG57XG5cdGlmKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnIHx8IHN0cmluZyA9PSAnJykge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHNcXHMrL2csICcgJykudHJpbSgpO1xuXG5cdGxldCBwYWlycyA9IHN0cmluZy5tYXRjaCgvKFteXFxzXSopPVtcIiddKC4qPylbXCInXXwoW1xcd1xcLV0rKS9nKVxuXHRsZXQgYXR0cnMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRtcCA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0bGV0IG5hbWUgPSB0bXBbMF07XG5cdFx0bGV0IHZhbHVlID0gdG1wWzFdID8gdG1wWzFdLnN1YnN0cmluZygxLCB0bXBbMV0ubGVuZ3RoIC0gMSkgOiB0cnVlO1xuXHRcdGF0dHJzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCB7IHBhcnNlQXR0cnMsIHBhcnNlT3B0aW9ucywgcGFyc2VPcHRpb25LZXksIHBhcnNlT3B0aW9uVmFsdWUgfTsiLCJpbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcbmltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSBcIkBiYWJlbC9nZW5lcmF0b3JcIjtcblxuaW1wb3J0IHtcblx0aWRlbnRpZmllcixcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEJpbmFyeUV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Z2V0SWRlbnRpZmllck5hbWUsXG5cdHNldElkZW50aWZpZXJDb250ZXh0LFxuXHRpc0lkZW50aWZpZXJSZWFjdGl2ZSxcblx0Y2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb25cbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cblxuaW1wb3J0IHsgcHJlcGFyZU9wdGlvbktleSB9IGZyb20gJy4vYXR0cnMnO1xuXG5pbXBvcnQgeyBoYXNTdGF0ZSwgZ2V0VmFyaWFibGUgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKGNvbnRleHQsIGNvZGUsIGlzRXhwcmVzc2lvbiA9IGZhbHNlKVxue1xuXHRjb2RlID0gU3RyaW5nKGNvZGUpO1xuXG5cdC8vIGNvbnNvbGUud2Fybihjb2RlKTtcblxuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2UoY29kZSk7XG5cblx0dmFyIG9ic2VydmFibGUgPSBmYWxzZTtcblx0dmFyIGNoYW5nZWQgPSBmYWxzZTtcblxuXHRsZXQgRnVuY3Rpb25EZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdEZ1bmN0aW9uRGVjbGFyYXRpb24gPSB0cnVlO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpIHtcblx0XHQgICAgXHRGdW5jdGlvbkRlY2xhcmF0aW9uID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdC8vIG1ha2UgcmVhY3RpdmUgdmFyaWFibGUgYXNzaWdubWVudCBhcyBmdW5jdGlvblxuXHRcdEFzc2lnbm1lbnRFeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighaXNJZGVudGlmaWVyUmVhY3RpdmUoY29udGV4dC5kYXRhLCBwYXRoLm5vZGUubGVmdCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgYXJncyA9IFtwYXRoLm5vZGUucmlnaHRdO1xuXG5cdFx0XHRcdGlmKHBhdGgubm9kZS5vcGVyYXRvci5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0YXJncyA9IFtcblx0XHRcdFx0XHRcdEJpbmFyeUV4cHJlc3Npb24ocGF0aC5ub2RlLm9wZXJhdG9yWzBdLCBwYXRoLm5vZGUubGVmdCwgcGF0aC5ub2RlLnJpZ2h0KVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUocGF0aC5ub2RlLmxlZnQpO1xuXHRcdFx0XHRwYXRoLnJlcGxhY2VXaXRoKFxuXHRcdFx0XHRcdENhbGxFeHByZXNzaW9uKGlkZW50aWZpZXIobmFtZSksIGFyZ3MpXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0b2JzZXJ2YWJsZSA9IHRydWU7XG5cdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0Y2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb24oY29udGV4dC5kYXRhLCBwYXRoKTtcblx0XHRcdFx0aWYoc2V0SWRlbnRpZmllckNvbnRleHQoJ3RoaXMnLCBjb250ZXh0LmRhdGEsIHBhdGgpKSB7XG5cdFx0XHRcdFx0b2JzZXJ2YWJsZSA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdGlmKGNoYW5nZWQpIHtcblx0XHRjb2RlID0gZ2VuZXJhdGUoYXN0LCB7XG5cdFx0XHRyZXRhaW5MaW5lczogZmFsc2UsXG5cdFx0XHRjb21wYWN0OiBmYWxzZSxcblx0XHRcdG1pbmlmaWVkOiBmYWxzZSxcblx0XHRcdGNvbmNpc2U6IGZhbHNlLFxuXHRcdFx0cXVvdGVzOiBcImRvdWJsZVwiLFxuXHRcdH0sIGNvZGUpLmNvZGU7XG5cblx0XHRcblx0XHQvLyBjbGVhbiBhcHBlbmRcblx0XHRjb2RlID0gY29kZS5yZXBsYWNlKC8oO3wsKSQvZywgJycpO1xuXG5cdFx0aWYoaXNFeHByZXNzaW9uKSB7XG5cdFx0XHRjb2RlID0gYCgpID0+IHsgcmV0dXJuICR7Y29kZX07IH1gO1xuXHRcdH1cblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGNvZGUpO1xuXHQvLyBjb25zb2xlLmxvZygnLS0tLS0tLS0nKTtcblxuXHRyZXR1cm4ge1xuXHRcdHN0YXRlZnVsbDogb2JzZXJ2YWJsZSxcblx0XHR2YWx1ZTogY29kZVxuXHR9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cHJlc3Npb24oY29udGV4dCwgY29kZSwgZXhlY3V0ZSA9IGZhbHNlKVxuLy8ge1xuLy8gXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2UoY29kZSk7XG5cbi8vIFx0dmFyIGNoYW5nZWQgPSBmYWxzZTtcbi8vIFx0dmFyIHN0YXRlZnVsbCA9IGZhbHNlO1xuXG4vLyBcdHRyYXZlcnNlKGFzdCwge1xuLy8gXHRcdGVudGVyKHBhdGgpXG4vLyBcdFx0e1xuLy8gXHRcdFx0aWYocGF0aC5ub2RlLnR5cGUgPT09ICdJZGVudGlmaWVyJylcbi8vIFx0XHRcdHtcbi8vIFx0XHRcdFx0aWYoIVsna2V5JywgJ2xhYmVsJ10uaW5jbHVkZXMocGF0aC5rZXkpKSB7XG4vLyBcdFx0XHRcdFx0bGV0IG5hbWVCdWlsZGVyID0gW107XG5cbi8vIFx0XHRcdFx0XHRsZXQgdmFyaWFibGUgPSBwYXRoLm5vZGUubmFtZTtcbi8vIFx0XHRcdFx0XHRsZXQgdmFyaWFibGVXaXRoQ29udGV4dCA9IGdldFZhcmlhYmxlKGNvbnRleHQuZGF0YSwgdmFyaWFibGUpXG5cbi8vIFx0XHRcdFx0XHRpZihwYXRoLmNvbnRhaW5lci50eXBlID09PSAnQ2FsbEV4cHJlc3Npb24nKSB7XG4vLyBcdFx0XHRcdFx0XHR2YXJpYWJsZVdpdGhDb250ZXh0ID0gZmFsc2U7XG4vLyBcdFx0XHRcdFx0fVxuXG4vLyBcdFx0XHRcdFx0aWYodmFyaWFibGVXaXRoQ29udGV4dCkge1xuLy8gXHRcdFx0XHRcdFx0bmFtZUJ1aWxkZXIucHVzaCgnY3R4Jylcbi8vIFx0XHRcdFx0XHRcdG5hbWVCdWlsZGVyLnB1c2godmFyaWFibGVXaXRoQ29udGV4dCk7XG4vLyBcdFx0XHRcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdFx0XHRcdG5hbWVCdWlsZGVyLnB1c2godmFyaWFibGUpO1xuLy8gXHRcdFx0XHRcdH1cblxuLy8gXHRcdFx0XHRcdGlmKCF2YXJpYWJsZSkge1xuLy8gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAkeyB2YXJpYWJsZSB9IGluIGNvbnRleHQgJHsgY29udGV4dCB9YCk7XG4vLyBcdFx0XHRcdFx0fVxuXG4vLyBcdFx0XHRcdFx0aWYoY29udGV4dC5yZWFjdGl2ZV92YXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpKSB7XG4vLyBcdFx0XHRcdFx0XHRzdGF0ZWZ1bGwgPSB0cnVlO1xuLy8gXHRcdFx0XHRcdH1cblxuLy8gXHRcdFx0XHRcdHBhdGgubm9kZS5uYW1lID0gbmFtZUJ1aWxkZXIuam9pbignLicpICsgKGV4ZWN1dGUgPyAnKCknIDogJycpO1xuXG4vLyBcdFx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG4vLyBcdFx0XHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRcdFx0cGF0aC5ub2RlLm5hbWUgPSBwcmVwYXJlT3B0aW9uS2V5KHBhdGgubm9kZS5uYW1lKTtcbi8vIFx0XHRcdFx0fVxuLy8gXHRcdFx0fVxuLy8gXHRcdH1cbi8vIFx0fSk7XG5cbi8vIFx0Y29kZSA9IGdlbmVyYXRlKGFzdCwge1xuLy8gXHRcdHJldGFpbkxpbmVzOiB0cnVlLFxuLy8gXHRcdGNvbXBhY3Q6IHRydWUsXG4vLyBcdFx0bWluaWZpZWQ6IHRydWUsXG4vLyBcdFx0Y29uY2lzZTogdHJ1ZSxcbi8vIFx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG4vLyBcdH0sIGNvZGUpLmNvZGU7XG5cbi8vIFx0Ly8gY2xlYW4gYXBwZW5kXG4vLyBcdGNvZGUgPSBjb2RlLnJlcGxhY2UoLyg7fCwpJC9nLCAnJyk7XG5cbi8vIFx0aWYoY2hhbmdlZCAmJiBleGVjdXRlKSB7XG4vLyBcdFx0Y29kZSA9IGAoKSA9PiB7IHJldHVybiAke2NvZGV9OyB9YDtcbi8vIFx0fVxuXG4vLyBcdHJldHVybiB7XG4vLyBcdFx0c3RhdGVmdWxsLFxuLy8gXHRcdHZhbHVlOiBjb2RlXG4vLyBcdH1cbi8vIH0iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ25vZGUtaHRtbC1wYXJzZXInO1xuaW1wb3J0IE5vZGUsIHsgSElEIH0gZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBUZXh0Tm9kZSBmcm9tICcuL1RleHROb2RlJztcbmltcG9ydCB7IHBhcnNlQXR0cnMgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCBwYXJzZUZ1bmN0aW9ucyBmcm9tICcuL3BhcnNlRnVuY3Rpb25zJztcblxuZnVuY3Rpb24gZ2VuZXJhdGVUcmVlKG5vZGUsIGlzUm9vdCA9IGZhbHNlKVxue1xuXG5cdGxldCBjaGlsZHJlbiA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGNoaWxkID0gZ2VuZXJhdGVUcmVlKG5vZGUuY2hpbGROb2Rlc1tpXSwgZmFsc2UpO1xuXHRcdGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHR9XG5cblx0bGV0IGF0dHJzID0gcGFyc2VBdHRycyhub2RlLnJhd0F0dHJzKTtcblxuXHRpZihjaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgbm9kZS5yYXdUZXh0ICE9PSAnJykge1xuXHRcdHJldHVybiBuZXcgVGV4dE5vZGUobm9kZS5yYXdUZXh0KTtcblx0fVxuXG5cdHJldHVybiBuZXcgTm9kZSh7XG5cdFx0dGFnOiBub2RlLnRhZ05hbWUsXG5cdFx0YXR0cnM6IGF0dHJzLFxuXHRcdGNoaWxkcmVuOiBjaGlsZHJlbixcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlKGNvbnRleHQsIGNvZGUpXG57XG5cdC8vIGNvZGUgPSBwYXJzZUZ1bmN0aW9ucyhjb2RlKTtcblx0Ly8gY29uc29sZS53YXJuKFwiUEFSU0VcIiwgY29udGV4dC5uYW1lKVxuXHRjb2RlID0gY29kZS5yZXBsYWNlKC9cXHQvZywgJyAnKS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJyk7XG5cblx0Y29uc3Qgcm9vdCA9IHBhcnNlKGNvZGUpO1xuXG5cdHJvb3QucmVtb3ZlV2hpdGVzcGFjZSgpO1xuXG5cdC8vIEhJRCA9IDA7XG5cdGxldCB0cmVlID0gZ2VuZXJhdGVUcmVlKHJvb3QsIHRydWUpO1xuXG5cdHRyZWUuc2V0U2libGluZ3MoKTtcblx0XG5cdHRyZWUgPSB0cmVlLmNoaWxkcmVuO1xuXG5cdGxldCBhc3QgPSB7XG5cdFx0cmVuZGVyOiBbXSxcblx0XHRoeWRyYXRlOiBbXSxcblx0fVxuXG5cdGxldCByZXN1bHQgPSB7XG5cdFx0cmVuZGVyOiAnJyxcblx0XHRoeWRyYXRlOiAnJyxcblx0XHRzaG91bGRIeWRhcmF0ZTogZmFsc2UsXG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgcmVuZGVyQVNUID0gdHJlZVtpXS50b0FTVChjb250ZXh0LCBmYWxzZSk7XG5cdFx0bGV0IGh5ZHJhdGlvbkFTVCA9IHRyZWVbaV0udG9BU1QoY29udGV4dCwgdHJ1ZSk7XG5cblx0XHRpZihoeWRyYXRpb25BU1Quc3RhdGVmdWxsKSB7XG5cdFx0XHRyZXN1bHQuc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGFzdC5yZW5kZXIucHVzaChyZW5kZXJBU1QudmFsdWUpO1xuXHRcdGFzdC5oeWRyYXRlLnB1c2goaHlkcmF0aW9uQVNULnZhbHVlKTtcblx0fVxuXG5cdGlmKGFzdC5yZW5kZXIubGVuZ3RoID09PSAxKSB7XG5cdFx0cmVzdWx0LnJlbmRlciA9IGFzdC5yZW5kZXJbMF07XG5cdFx0cmVzdWx0Lmh5ZHJhdGUgPSBhc3QuaHlkcmF0ZVswXTtcblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucmVuZGVyID0gYFskeyAgYXN0LnJlbmRlci5qb2luKCcsJykgfV1gO1xuXHRcdHJlc3VsdC5oeWRyYXRlID0gYFskeyAgYXN0Lmh5ZHJhdGUuam9pbignLCcpIH1dYDtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgXyB9IGZyb20gJy4uL2VtcHR5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1N0YXRlKGNvbnRleHQsIHZhcmlhYmxlKVxue1xuXHQvLyBjb25zb2xlLmxvZyhjb250ZXh0LCB2YXJpYWJsZS5zcGxpdCgnLicpKTtcblx0aWYoY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bGV0IHZhbHVlID0gY29udGV4dDtcblx0bGV0IHZhcl9wYXJ0cyA9IHZhcmlhYmxlLnNwbGl0KCcuJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YXJfcGFydHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YWx1ZSA9IHZhbHVlW3Zhcl9wYXJ0c1tpXV07XG5cdFx0aWYodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGlmKHZhbHVlLl9vYnNlcnZhYmxlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhcmlhYmxlKGNvbnRleHQsIHZhcmlhYmxlKVxue1xuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LmNvbXB1dGVkKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9jb21wdXRlZC4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LnN0YXRlKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9zdGF0ZS4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LmRhdGEpLmluY2x1ZGVzKHZhcmlhYmxlKSkge1xuXHRcdHJldHVybiBgX2RhdGEuJHt2YXJpYWJsZX1gO1xuXHR9XG5cblx0aWYoT2JqZWN0LmtleXMoY29udGV4dC5tZXRob2RzKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYCR7dmFyaWFibGV9LmJpbmQoY3R4KWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0LnByb3BzKS5pbmNsdWRlcyh2YXJpYWJsZSkpIHtcblx0XHRyZXR1cm4gYF9wcm9wcy4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBnZXRSZWFjdGl2ZVZhcmlhYmxlcyB9IGZyb20gXCIuLi9zY3JpcHRcIjtcbmltcG9ydCBnZW5lcmF0ZSBmcm9tICcuL2dlbmVyYXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVUZW1wbGF0ZShjb250ZXh0LCBodG1sLCBibG9ja3MpXG57XG5cdGxldCBzY3JpcHQgPSBibG9ja3Muc2NyaXB0IHx8IHsgc291cmNlOiAnJyB9O1xuXG5cdGNvbnRleHQgPSBnZXRSZWFjdGl2ZVZhcmlhYmxlcyhjb250ZXh0LCBzY3JpcHQuc291cmNlKTtcblx0XG5cdHJldHVybiBnZW5lcmF0ZShjb250ZXh0LCBodG1sKTtcbn0iLCJleHBvcnQgY29uc3QgSUZfQVRUUlMgPSBbJ3YtaWYnLCAndi1lbHNlLWlmJywgJ3YtZWxzZSddO1xuXG5leHBvcnQgIGZ1bmN0aW9uIHBhcnNlU3RhdGVtZW50KG5vZGUpXG57XG5cdGxldCBzdGFydCA9IGZhbHNlO1xuXHRsZXQgZW5kID0gdHJ1ZTtcblx0bGV0IHN0YXRlbWVudCA9IGZhbHNlO1xuXHRsZXQgY29uZGl0aW9uID0gbm9kZS5hdHRyc1sndi1pZiddIHx8IG5vZGUuYXR0cnNbJ3YtZWxzZS1pZiddIHx8ICd0cnVlJztcblxuXHRpZihub2RlLmF0dHJzWyd2LWlmJ10pIHtcblx0XHRzdGFydCA9IHRydWU7XG5cdH1cblxuXHRpZihub2RlLmF0dHJzWyd2LWlmJ10gfHwgbm9kZS5hdHRyc1sndi1lbHNlLWlmJ10gfHwgbm9kZS5hdHRyc1sndi1lbHNlJ10pIHtcblx0XHRub2RlLmlmX3N0YXRlbWVudCA9IHRydWU7XG5cdFx0c3RhdGVtZW50ID0gdHJ1ZTtcblx0fVxuXG5cblx0aWYobm9kZS5uZXh0U2libGluZykge1xuXHRcdGlmKG5vZGUubmV4dFNpYmxpbmcuYXR0cnNbJ3YtZWxzZS1pZiddIHx8IG5vZGUubmV4dFNpYmxpbmcuYXR0cnNbJ3YtZWxzZSddKSB7XG5cdFx0XHRlbmQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvLyBpZihub2RlLnByZXZTaWJsaW5nKSB7XG5cdC8vIFx0aWYobm9kZS5wcmV2U2libGluZy5pZl9zdGF0ZW1lbnQpIHtcblx0Ly8gXHRcdHN0YXRlbWVudCA9IHRydWU7XG5cdC8vIFx0fVxuXHQvLyB9XG5cblx0Ly8gY29uc29sZS53YXJuKG5vZGUuYXR0cnMsIHN0YXRlbWVudCwgc3RhcnQsIGVuZCk7XG5cblx0cmV0dXJuIHtcblx0XHRjb25kaXRpb24sXG5cdFx0aXM6IHN0YXRlbWVudCxcblx0XHRzdGFydCxcblx0XHRlbmQsXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VGdW5jdGlvbnMoY29kZSlcbntcblx0Y29kZSA9IGNvZGVcblx0XHQucmVwbGFjZSgvXFxAaWZcXCgoLiopXFwpL2csICc8aWYgY29uZGl0aW9uPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9cXEBlbHNlaWZcXCgoLiopXFwpL2csICc8ZWxzZS1pZiBjb25kaXRpb249XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL1xcQGVsc2UvZywgJzxlbHNlPicpXG5cdFx0LnJlcGxhY2UoL1xcQGVuZGlmL2csICc8ZW5kaWY+JylcblxuXG5cdGNvbnNvbGUubG9nKGNvZGUpO1xuXG5cdHJldHVybiBjb2RlO1xufSIsImV4cG9ydCBjb25zdCBkYXRhID0ge1xuXHRpbXBvcnRzOiBbXSxcblx0cHJvcHM6IHt9LFxuXHRkYXRhOiB7fSxcblx0c3RhdGU6IHt9LFxuXHRjb21wdXRlZDoge30sXG5cdG1ldGhvZHM6IHt9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0YShjb250ZXh0KSB7XG5cdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7fSwgY29udGV4dCk7XG59IiwiLyohXG4gKiBIVE1MIFBhcnNlciBCeSBKb2huIFJlc2lnIChlam9obi5vcmcpXG4gKiBNb2RpZmllZCBieSBKdXJpeSBcImthbmdheFwiIFpheXRzZXYsIEV2YW4gWW91IGFuZCBWdWUuanMgY29tbXVuaXR5XG4gKiBPcmlnaW5hbCBjb2RlIGJ5IEVyaWsgQXJ2aWRzc29uLCBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlXG4gKiBodHRwOi8vZXJpay5lYWUubmV0L3NpbXBsZWh0bWxwYXJzZXIvc2ltcGxlaHRtbHBhcnNlci5qc1xuICovXG5cbmltcG9ydCB7IG1ha2VNYXAsIG5vIH0gZnJvbSAnLi91dGlscydcblxuLy8gSFRNTDUgdGFncyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmRpY2VzLmh0bWwjZWxlbWVudHMtM1xuLy8gUGhyYXNpbmcgQ29udGVudCBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9kb20uaHRtbCNwaHJhc2luZy1jb250ZW50XG5jb25zdCBpc05vblBocmFzaW5nVGFnID0gbWFrZU1hcChcbiAgICAnYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGJhc2UsYmxvY2txdW90ZSxib2R5LGNhcHRpb24sY29sLGNvbGdyb3VwLGRkLCcgK1xuICAgICdkZXRhaWxzLGRpYWxvZyxkaXYsZGwsZHQsZmllbGRzZXQsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGZvcm0sJyArXG4gICAgJ2gxLGgyLGgzLGg0LGg1LGg2LGhlYWQsaGVhZGVyLGhncm91cCxocixodG1sLGxlZ2VuZCxsaSxtZW51aXRlbSxtZXRhLCcgK1xuICAgICdvcHRncm91cCxvcHRpb24scGFyYW0scnAscnQsc291cmNlLHN0eWxlLHN1bW1hcnksdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsJyArXG4gICAgJ3RpdGxlLHRyLHRyYWNrJ1xuKVxuXG4vLyBSZWd1bGFyIEV4cHJlc3Npb25zIGZvciBwYXJzaW5nIHRhZ3MgYW5kIGF0dHJpYnV0ZXNcbmNvbnN0IGF0dHJpYnV0ZSA9IC9eXFxzKihbXlxcc1wiJzw+XFwvPV0rKSg/OlxccyooPSlcXHMqKD86XCIoW15cIl0qKVwiK3wnKFteJ10qKScrfChbXlxcc1wiJz08PmBdKykpKT8vXG4vLyBjb3VsZCB1c2UgaHR0cHM6Ly93d3cudzMub3JnL1RSLzE5OTkvUkVDLXhtbC1uYW1lcy0xOTk5MDExNC8jTlQtUU5hbWVcbi8vIGJ1dCBmb3IgVnVlIHRlbXBsYXRlcyB3ZSBjYW4gZW5mb3JjZSBhIHNpbXBsZSBjaGFyc2V0XG5jb25zdCBuY25hbWUgPSAnW2EtekEtWl9dW1xcXFx3XFxcXC1cXFxcLl0qJ1xuY29uc3QgcW5hbWVDYXB0dXJlID0gYCgoPzoke25jbmFtZX1cXFxcOik/JHtuY25hbWV9KWBcbmNvbnN0IHN0YXJ0VGFnT3BlbiA9IG5ldyBSZWdFeHAoYF48JHtxbmFtZUNhcHR1cmV9YClcbmNvbnN0IHN0YXJ0VGFnQ2xvc2UgPSAvXlxccyooXFwvPyk+L1xuY29uc3QgZW5kVGFnID0gbmV3IFJlZ0V4cChgXjxcXFxcLyR7cW5hbWVDYXB0dXJlfVtePl0qPmApXG5jb25zdCBkb2N0eXBlID0gL148IURPQ1RZUEUgW14+XSs+L2lcbi8vICM3Mjk4OiBlc2NhcGUgLSB0byBhdm9pZCBiZWluZyBwYXNlZCBhcyBIVE1MIGNvbW1lbnQgd2hlbiBpbmxpbmVkIGluIHBhZ2VcbmNvbnN0IGNvbW1lbnQgPSAvXjwhXFwtLS9cbmNvbnN0IGNvbmRpdGlvbmFsQ29tbWVudCA9IC9ePCFcXFsvXG5cbmxldCBJU19SRUdFWF9DQVBUVVJJTkdfQlJPS0VOID0gZmFsc2U7XG4neCcucmVwbGFjZSgveCguKT8vZywgZnVuY3Rpb24obSwgZykge1xuICAgIElTX1JFR0VYX0NBUFRVUklOR19CUk9LRU4gPSBnID09PSAnJ1xufSlcblxuLy8gU3BlY2lhbCBFbGVtZW50cyAoY2FuIGNvbnRhaW4gYW55dGhpbmcpXG5leHBvcnQgY29uc3QgaXNQbGFpblRleHRFbGVtZW50ID0gbWFrZU1hcCgnc2NyaXB0LHN0eWxlLHRleHRhcmVhJywgdHJ1ZSlcbmNvbnN0IHJlQ2FjaGUgPSB7fVxuXG5jb25zdCBkZWNvZGluZ01hcCA9IHtcbiAgICAnJmx0Oyc6ICc8JyxcbiAgICAnJmd0Oyc6ICc+JyxcbiAgICAnJnF1b3Q7JzogJ1wiJyxcbiAgICAnJmFtcDsnOiAnJicsXG4gICAgJyYjMTA7JzogJ1xcbicsXG4gICAgJyYjOTsnOiAnXFx0J1xufVxuY29uc3QgZW5jb2RlZEF0dHIgPSAvJig/Omx0fGd0fHF1b3R8YW1wKTsvZ1xuY29uc3QgZW5jb2RlZEF0dHJXaXRoTmV3TGluZXMgPSAvJig/Omx0fGd0fHF1b3R8YW1wfCMxMHwjOSk7L2dcblxuLy8gIzU5OTJcbmNvbnN0IGlzSWdub3JlTmV3bGluZVRhZyA9IG1ha2VNYXAoJ3ByZSx0ZXh0YXJlYScsIHRydWUpXG5jb25zdCBzaG91bGRJZ25vcmVGaXJzdE5ld2xpbmUgPSAodGFnLCBodG1sKSA9PiB0YWcgJiYgaXNJZ25vcmVOZXdsaW5lVGFnKHRhZykgJiYgaHRtbFswXSA9PT0gJ1xcbidcblxuZnVuY3Rpb24gZGVjb2RlQXR0cih2YWx1ZSwgc2hvdWxkRGVjb2RlTmV3bGluZXMpIHtcbiAgICBjb25zdCByZSA9IHNob3VsZERlY29kZU5ld2xpbmVzID8gZW5jb2RlZEF0dHJXaXRoTmV3TGluZXMgOiBlbmNvZGVkQXR0clxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHJlLCBtYXRjaCA9PiBkZWNvZGluZ01hcFttYXRjaF0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUhUTUwoaHRtbCwgb3B0aW9ucykge1xuICAgIGNvbnN0IHN0YWNrID0gW11cbiAgICBjb25zdCBleHBlY3RIVE1MID0gb3B0aW9ucy5leHBlY3RIVE1MXG4gICAgY29uc3QgaXNVbmFyeVRhZyA9IG9wdGlvbnMuaXNVbmFyeVRhZyB8fCBub1xuICAgIGNvbnN0IGNhbkJlTGVmdE9wZW5UYWcgPSBvcHRpb25zLmNhbkJlTGVmdE9wZW5UYWcgfHwgbm9cbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGxhc3QsIGxhc3RUYWdcbiAgICB3aGlsZSAoaHRtbCkge1xuICAgICAgICBsYXN0ID0gaHRtbFxuICAgICAgICAvLyBNYWtlIHN1cmUgd2UncmUgbm90IGluIGEgcGxhaW50ZXh0IGNvbnRlbnQgZWxlbWVudCBsaWtlIHNjcmlwdC9zdHlsZVxuICAgICAgICBpZiAoIWxhc3RUYWcgfHwgIWlzUGxhaW5UZXh0RWxlbWVudChsYXN0VGFnKSkge1xuICAgICAgICAgICAgbGV0IHRleHRFbmQgPSBodG1sLmluZGV4T2YoJzwnKVxuICAgICAgICAgICAgaWYgKHRleHRFbmQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBDb21tZW50OlxuICAgICAgICAgICAgICAgIGlmIChjb21tZW50LnRlc3QoaHRtbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tbWVudEVuZCA9IGh0bWwuaW5kZXhPZignLS0+JylcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWVudEVuZCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zaG91bGRLZWVwQ29tbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuY29tbWVudChodG1sLnN1YnN0cmluZyg0LCBjb21tZW50RW5kKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UoY29tbWVudEVuZCArIDMpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db25kaXRpb25hbF9jb21tZW50I0Rvd25sZXZlbC1yZXZlYWxlZF9jb25kaXRpb25hbF9jb21tZW50XG4gICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbmFsQ29tbWVudC50ZXN0KGh0bWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbmFsRW5kID0gaHRtbC5pbmRleE9mKCddPicpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbmFsRW5kID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UoY29uZGl0aW9uYWxFbmQgKyAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIERvY3R5cGU6XG4gICAgICAgICAgICAgICAgY29uc3QgZG9jdHlwZU1hdGNoID0gaHRtbC5tYXRjaChkb2N0eXBlKVxuICAgICAgICAgICAgICAgIGlmIChkb2N0eXBlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgYWR2YW5jZShkb2N0eXBlTWF0Y2hbMF0ubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEVuZCB0YWc6XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kVGFnTWF0Y2ggPSBodG1sLm1hdGNoKGVuZFRhZylcbiAgICAgICAgICAgICAgICBpZiAoZW5kVGFnTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VySW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICAgICAgICBhZHZhbmNlKGVuZFRhZ01hdGNoWzBdLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VFbmRUYWcoZW5kVGFnTWF0Y2hbMV0sIGN1ckluZGV4LCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTdGFydCB0YWc6XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUYWdNYXRjaCA9IHBhcnNlU3RhcnRUYWcoKVxuICAgICAgICAgICAgICAgIGlmIChzdGFydFRhZ01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN0YXJ0VGFnKHN0YXJ0VGFnTWF0Y2gpXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRJZ25vcmVGaXJzdE5ld2xpbmUobGFzdFRhZywgaHRtbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkdmFuY2UoMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRleHQsIHJlc3QsIG5leHRcbiAgICAgICAgICAgIGlmICh0ZXh0RW5kID49IDApIHtcbiAgICAgICAgICAgICAgICByZXN0ID0gaHRtbC5zbGljZSh0ZXh0RW5kKVxuICAgICAgICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgICAgICAgICAgIWVuZFRhZy50ZXN0KHJlc3QpICYmXG4gICAgICAgICAgICAgICAgICAgICFzdGFydFRhZ09wZW4udGVzdChyZXN0KSAmJlxuICAgICAgICAgICAgICAgICAgICAhY29tbWVudC50ZXN0KHJlc3QpICYmXG4gICAgICAgICAgICAgICAgICAgICFjb25kaXRpb25hbENvbW1lbnQudGVzdChyZXN0KVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAvLyA8IGluIHBsYWluIHRleHQsIGJlIGZvcmdpdmluZyBhbmQgdHJlYXQgaXQgYXMgdGV4dFxuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gcmVzdC5pbmRleE9mKCc8JywgMSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQgPCAwKSBicmVha1xuICAgICAgICAgICAgICAgICAgICB0ZXh0RW5kICs9IG5leHRcbiAgICAgICAgICAgICAgICAgICAgcmVzdCA9IGh0bWwuc2xpY2UodGV4dEVuZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGV4dCA9IGh0bWwuc3Vic3RyaW5nKDAsIHRleHRFbmQpXG4gICAgICAgICAgICAgICAgYWR2YW5jZSh0ZXh0RW5kKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGV4dEVuZCA8IDApIHtcbiAgICAgICAgICAgICAgICB0ZXh0ID0gaHRtbFxuICAgICAgICAgICAgICAgIGh0bWwgPSAnJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5jaGFycyAmJiB0ZXh0KSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jaGFycyh0ZXh0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVuZFRhZ0xlbmd0aCA9IDBcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrZWRUYWcgPSBsYXN0VGFnLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIGNvbnN0IHJlU3RhY2tlZFRhZyA9IHJlQ2FjaGVbc3RhY2tlZFRhZ10gfHwgKHJlQ2FjaGVbc3RhY2tlZFRhZ10gPSBuZXcgUmVnRXhwKCcoW1xcXFxzXFxcXFNdKj8pKDwvJyArIHN0YWNrZWRUYWcgKyAnW14+XSo+KScsICdpJykpXG4gICAgICAgICAgICBjb25zdCByZXN0ID0gaHRtbC5yZXBsYWNlKHJlU3RhY2tlZFRhZywgZnVuY3Rpb24oYWxsLCB0ZXh0LCBlbmRUYWcpIHtcbiAgICAgICAgICAgICAgICBlbmRUYWdMZW5ndGggPSBlbmRUYWcubGVuZ3RoXG4gICAgICAgICAgICAgICAgaWYgKCFpc1BsYWluVGV4dEVsZW1lbnQoc3RhY2tlZFRhZykgJiYgc3RhY2tlZFRhZyAhPT0gJ25vc2NyaXB0Jykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzwhXFwtLShbXFxzXFxTXSo/KS0tPi9nLCAnJDEnKSAvLyAjNzI5OFxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzwhXFxbQ0RBVEFcXFsoW1xcc1xcU10qPyldXT4vZywgJyQxJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZElnbm9yZUZpcnN0TmV3bGluZShzdGFja2VkVGFnLCB0ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5zbGljZSgxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5jaGFycykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmNoYXJzKHRleHQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGluZGV4ICs9IGh0bWwubGVuZ3RoIC0gcmVzdC5sZW5ndGhcbiAgICAgICAgICAgIGh0bWwgPSByZXN0XG4gICAgICAgICAgICBwYXJzZUVuZFRhZyhzdGFja2VkVGFnLCBpbmRleCAtIGVuZFRhZ0xlbmd0aCwgaW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaHRtbCA9PT0gbGFzdCkge1xuICAgICAgICAgICAgb3B0aW9ucy5jaGFycyAmJiBvcHRpb25zLmNoYXJzKGh0bWwpXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc3RhY2subGVuZ3RoICYmIG9wdGlvbnMud2Fybikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMud2FybihgTWFsLWZvcm1hdHRlZCB0YWcgYXQgZW5kIG9mIHRlbXBsYXRlOiBcIiR7aHRtbH1cImApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xlYW4gdXAgYW55IHJlbWFpbmluZyB0YWdzXG4gICAgcGFyc2VFbmRUYWcoKVxuXG4gICAgZnVuY3Rpb24gYWR2YW5jZShuKSB7XG4gICAgICAgIGluZGV4ICs9IG5cbiAgICAgICAgaHRtbCA9IGh0bWwuc3Vic3RyaW5nKG4pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VTdGFydFRhZygpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBodG1sLm1hdGNoKHN0YXJ0VGFnT3BlbilcbiAgICAgICAgaWYgKHN0YXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHtcbiAgICAgICAgICAgICAgICB0YWdOYW1lOiBzdGFydFsxXSxcbiAgICAgICAgICAgICAgICBhdHRyczogW10sXG4gICAgICAgICAgICAgICAgc3RhcnQ6IGluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZHZhbmNlKHN0YXJ0WzBdLmxlbmd0aClcbiAgICAgICAgICAgIGxldCBlbmQsIGF0dHJcbiAgICAgICAgICAgIHdoaWxlICghKGVuZCA9IGh0bWwubWF0Y2goc3RhcnRUYWdDbG9zZSkpICYmIChhdHRyID0gaHRtbC5tYXRjaChhdHRyaWJ1dGUpKSkge1xuICAgICAgICAgICAgICAgIGFkdmFuY2UoYXR0clswXS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgbWF0Y2guYXR0cnMucHVzaChhdHRyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZCkge1xuICAgICAgICAgICAgICAgIG1hdGNoLnVuYXJ5U2xhc2ggPSBlbmRbMV1cbiAgICAgICAgICAgICAgICBhZHZhbmNlKGVuZFswXS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgbWF0Y2guZW5kID0gaW5kZXhcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0YXJ0VGFnKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBtYXRjaC50YWdOYW1lXG4gICAgICAgIGNvbnN0IHVuYXJ5U2xhc2ggPSBtYXRjaC51bmFyeVNsYXNoXG5cbiAgICAgICAgaWYgKGV4cGVjdEhUTUwpIHtcbiAgICAgICAgICAgIGlmIChsYXN0VGFnID09PSAncCcgJiYgaXNOb25QaHJhc2luZ1RhZyh0YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlRW5kVGFnKGxhc3RUYWcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuQmVMZWZ0T3BlblRhZyh0YWdOYW1lKSAmJiBsYXN0VGFnID09PSB0YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VFbmRUYWcodGFnTmFtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVuYXJ5ID0gaXNVbmFyeVRhZyh0YWdOYW1lKSB8fCAhIXVuYXJ5U2xhc2hcblxuICAgICAgICBjb25zdCBsID0gbWF0Y2guYXR0cnMubGVuZ3RoXG4gICAgICAgIGNvbnN0IGF0dHJzID0gbmV3IEFycmF5KGwpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gbWF0Y2guYXR0cnNbaV1cbiAgICAgICAgICAgIC8vIGhhY2tpc2ggd29yayBhcm91bmQgRkYgYnVnIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTM2OTc3OFxuICAgICAgICAgICAgaWYgKElTX1JFR0VYX0NBUFRVUklOR19CUk9LRU4gJiYgYXJnc1swXS5pbmRleE9mKCdcIlwiJykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3NbM10gPT09ICcnKSB7IGRlbGV0ZSBhcmdzWzNdIH1cbiAgICAgICAgICAgICAgICBpZiAoYXJnc1s0XSA9PT0gJycpIHsgZGVsZXRlIGFyZ3NbNF0gfVxuICAgICAgICAgICAgICAgIGlmIChhcmdzWzVdID09PSAnJykgeyBkZWxldGUgYXJnc1s1XSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGFyZ3NbM10gfHwgYXJnc1s0XSB8fCBhcmdzWzVdIHx8ICcnXG4gICAgICAgICAgICBjb25zdCBzaG91bGREZWNvZGVOZXdsaW5lcyA9IHRhZ05hbWUgPT09ICdhJyAmJiBhcmdzWzFdID09PSAnaHJlZicgP1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmIDpcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNob3VsZERlY29kZU5ld2xpbmVzXG4gICAgICAgICAgICBhdHRyc1tpXSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBhcmdzWzFdLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBkZWNvZGVBdHRyKHZhbHVlLCBzaG91bGREZWNvZGVOZXdsaW5lcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdW5hcnkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2goeyB0YWc6IHRhZ05hbWUsIGxvd2VyQ2FzZWRUYWc6IHRhZ05hbWUudG9Mb3dlckNhc2UoKSwgYXR0cnM6IGF0dHJzIH0pXG4gICAgICAgICAgICBsYXN0VGFnID0gdGFnTmFtZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhcnQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc3RhcnQodGFnTmFtZSwgYXR0cnMsIHVuYXJ5LCBtYXRjaC5zdGFydCwgbWF0Y2guZW5kKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VFbmRUYWcodGFnTmFtZSwgc3RhcnQsIGVuZCkge1xuICAgICAgICBsZXQgcG9zLCBsb3dlckNhc2VkVGFnTmFtZVxuICAgICAgICBpZiAoc3RhcnQgPT0gbnVsbCkgc3RhcnQgPSBpbmRleFxuICAgICAgICBpZiAoZW5kID09IG51bGwpIGVuZCA9IGluZGV4XG5cbiAgICAgICAgaWYgKHRhZ05hbWUpIHtcbiAgICAgICAgICAgIGxvd2VyQ2FzZWRUYWdOYW1lID0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IG9wZW5lZCB0YWcgb2YgdGhlIHNhbWUgdHlwZVxuICAgICAgICBpZiAodGFnTmFtZSkge1xuICAgICAgICAgICAgZm9yIChwb3MgPSBzdGFjay5sZW5ndGggLSAxOyBwb3MgPj0gMDsgcG9zLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhY2tbcG9zXS5sb3dlckNhc2VkVGFnID09PSBsb3dlckNhc2VkVGFnTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIG5vIHRhZyBuYW1lIGlzIHByb3ZpZGVkLCBjbGVhbiBzaG9wXG4gICAgICAgICAgICBwb3MgPSAwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zID49IDApIHtcbiAgICAgICAgICAgIC8vIENsb3NlIGFsbCB0aGUgb3BlbiBlbGVtZW50cywgdXAgdGhlIHN0YWNrXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhY2subGVuZ3RoIC0gMTsgaSA+PSBwb3M7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgICAgICAgICAgICAgIChpID4gcG9zIHx8ICF0YWdOYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLndhcm5cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgYHRhZyA8JHtzdGFja1tpXS50YWd9PiBoYXMgbm8gbWF0Y2hpbmcgZW5kIHRhZy5gXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZW5kKHN0YWNrW2ldLnRhZywgc3RhcnQsIGVuZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgb3BlbiBlbGVtZW50cyBmcm9tIHRoZSBzdGFja1xuICAgICAgICAgICAgc3RhY2subGVuZ3RoID0gcG9zXG4gICAgICAgICAgICBsYXN0VGFnID0gcG9zICYmIHN0YWNrW3BvcyAtIDFdLnRhZ1xuICAgICAgICB9IGVsc2UgaWYgKGxvd2VyQ2FzZWRUYWdOYW1lID09PSAnYnInKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zdGFydCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuc3RhcnQodGFnTmFtZSwgW10sIHRydWUsIHN0YXJ0LCBlbmQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobG93ZXJDYXNlZFRhZ05hbWUgPT09ICdwJykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RhcnQpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnN0YXJ0KHRhZ05hbWUsIFtdLCBmYWxzZSwgc3RhcnQsIGVuZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmVuZCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZW5kKHRhZ05hbWUsIHN0YXJ0LCBlbmQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgY29tcGlsZXIsIF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlcic7XG5cbi8vIGltcG9ydCB7IHBhcnNlRXhwcmVzc2lvbiB9IGZyb20gJ0BzaW51b3VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9leHByZXNzaW9uJztcbmltcG9ydCB7IGNyZWF0ZURhdGEgfSBmcm9tIFwiQHNpbnVvdXMvY29tcGlsZXIvc3JjL3NjcmlwdC9kYXRhXCI7XG5pbXBvcnQgeyBwYXJzZUhUTUwgfSBmcm9tICdAc2ludW91cy9jb21waWxlci9zcmMvdGVtcGxhdGUvaHRtbCc7XG5cblxubGV0IGRhdGEgPSBjcmVhdGVEYXRhKCk7XG5cbmRhdGEuZGF0YSA9IHtcblx0ZDE6IDEsXG5cdGQyOiAxLFxufVxuXG5kYXRhLnN0YXRlID0ge1xuXHRzMTogMSxcblx0czI6IDEsXG59XG5cbmRhdGEuY29tcHV0ZWQgPSB7XG5cdGMxOiAxLFxuXHRjMjogMSxcbn1cblxuZGF0YS5tZXRob2RzID0ge1xuXHRtMTogMSxcblx0bTI6IDEsXG59XG5cbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCBgXG4vLyBsZXQgZCA9IGZ1bmN0aW9uKCkge31cbi8vIGxldCBkMiA9ICgpID0+IHt9XG4vLyBmdW5jdGlvbiBjMShzMykge1xuLy8gXHRsZXQgZCA9IFtdO1xuLy8gXHRmb3IobGV0IGkgPSAwOyBpIDwgczEubGVuZ3RoOyBpKyspIHtcbi8vIFx0XHRkLnB1c2goczFbaV0pO1xuLy8gXHR9XG4vLyB9XG4vLyBgKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICd7IHMxOiAoKSA9PiBzMSB9Jylcbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCAnYWxlcnQoKTsnLCB0cnVlKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdtMShldmVudCknKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdzMSArPSA2Jylcbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCAnZDEgPSBkMSArIDYnKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdkMSAvPSA2Jylcbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCAnZC5wdXNoKHMxKScpXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ2QgPSAoKSA9PiB7IHJldHVybiBzMSB9JylcblxuXG5sZXQgc291cmNlID0gYFxuPHRlbXBsYXRlPlxuXHQ8ZGl2IEBjbGljaz1cImFsZXJ0KDEpXCIgOnN0eWxlPVwieyBhZGM6IHMxIH1cIj5cblx0XHR0ZXN0XG5cdFx0e3sgczIgfX1cblx0XHQ8dGVtcGxhdGUgdi1pZj1cInMyMyA9IDJcIj5cblx0XHRzaG93IHt7IGRkZCB9fVxuXHRcdDwvdGVtcGxhdGU+XG5cdFx0PGRpdiB2LWVsc2UtaWY9XCJzb21lMlwiPlxuXHRcdFx0dGVzdFxuXHRcdDwvZGl2PlxuXHRcdDx0ZW1wbGF0ZSB2LWVsc2U+XG5cdFx0aGlkZVxuXHRcdDwvdGVtcGxhdGU+XG5cdFx0PHNwYW4gZGF0YS1zdG9wPnN0b3A8L3NwYW4+XG5cdFx0PGRpdiB2LWlmPVwib25jZVwiPmlmLW9uY2U8L2Rpdj5cblx0XHQ8ZGl2PmFmdGVyLW9uY2UtaWY8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuYDtcblxuY29uc29sZS5sb2cocGFyc2VIVE1MKHNvdXJjZSkpO1xuXG5cbmxldCBibG9jayA9IGNvbXBpbGVyKHtcblx0Y29udGV4dDogZGF0YSxcblx0dHlwZTogJ3RlbXBsYXRlJyxcblx0c291cmNlOiBzb3VyY2UsXG59KTtcblxuY29uc29sZS5sb2coYmxvY2suc291cmNlLnJlbmRlcikiXSwic291cmNlUm9vdCI6IiJ9