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
exports.handleIdentifier = handleIdentifier;
exports.matchIdentifier = matchIdentifier;
exports.IdentifierExpression = exports._ = exports.ReactiveNamespaces = void 0;
var ReactiveNamespaces = ['state', 'computed'];
exports.ReactiveNamespaces = ReactiveNamespaces;

var _ = -1;

exports._ = _;

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

var IdentifierExpression = /*#__PURE__*/function () {
  function IdentifierExpression(id, _ref) {
    if (id === void 0) {
      id = null;
    }

    var _ref$context = _ref.context,
        context = _ref$context === void 0 ? null : _ref$context,
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === void 0 ? null : _ref$namespace,
        _ref$observable = _ref.observable,
        observable = _ref$observable === void 0 ? null : _ref$observable,
        _ref$callable = _ref.callable,
        callable = _ref$callable === void 0 ? null : _ref$callable;
    this.id = id;
    this.namespace = namespace;
    this.observable = observable;
    this.callable = callable;
    this.context = context;
  }

  var _proto = IdentifierExpression.prototype;

  _proto.replace = function replace(disableExecution) {
    if (this.namespace === false || this.id === null) {
      return;
    }

    var name = getIdentifierName(this.id);

    var _name = this.context + ".";

    if (this.namespace !== 'methods') {
      _name += "_" + this.namespace + ".";
    }

    _name += "" + name;

    if (!disableExecution && this.callable) {
      _name += '()';
    }

    this.id.name = _name;
  };

  return IdentifierExpression;
}();

exports.IdentifierExpression = IdentifierExpression;

function handleIdentifier(context, data, path) {
  if (['FunctionDeclaration', 'VariableDeclarator', 'LabeledStatement'].includes(path.parent.type) || ['property'].includes(path.key)) {
    return false;
  }

  var id = path.node;

  var _matchIdentifier = matchIdentifier(data, id),
      namespace = _matchIdentifier.namespace,
      observable = _matchIdentifier.observable;

  var callable = false; // console.log(name, keepObservation)

  if (observable && path.container.type !== 'CallExpression') {
    callable = true;
  }

  return new IdentifierExpression(id, {
    context: context,
    namespace: namespace,
    observable: observable,
    callable: callable
  });
}

function matchIdentifier(context, id) {
  var name = getIdentifierName(id);
  var namespace = false;
  var observable = false;

  for (var key in context) {
    if (Object.keys(context[key]).includes(name)) {
      namespace = key;
    }
  }

  if (namespace !== false) {
    observable = ReactiveNamespaces.includes(namespace);
  }

  return {
    namespace: namespace,
    observable: observable
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
  return {
    imports: [],
    props: {},
    data: {},
    state: {},
    computed: {},
    methods: {}
  };
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
  var data = (0, _data.createData)();
  var ast = parser.parse(source, {
    sourceType: "unambiguous",
    strictMode: false
  });
  (0, _parseContext.default)(data, ast);
  (0, _parseExpression.default)(data, ast);
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
exports.default = _default;

var _data = _interopRequireDefault(__webpack_require__(/*! ./data */ "./packages/compiler/dist/script/data.js"));

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./packages/compiler/dist/script/helpers.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _default(data, ast) {
  var isFunctionDeclaration = false;
  (0, _traverse.default)(ast, {
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
        } // console.log(`SET PROP ${name} to ${type}`, data)


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
  });
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

function parseExpression(data, ast, ctx, disableExecution) {
  if (ctx === void 0) {
    ctx = 'this';
  }

  if (disableExecution === void 0) {
    disableExecution = false;
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
        var identifier = (0, _helpers.handleIdentifier)(ctx, data, path);

        if (!identifier) {
          return;
        }

        observable = identifier.observable ? true : observable;
        identifier.replace(disableExecution);
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

var _helpers = __webpack_require__(/*! ../helpers */ "./packages/compiler/dist/helpers.js");

var _parseFunctions = __webpack_require__(/*! ./parseFunctions */ "./packages/compiler/dist/template/parseFunctions.js");

var _expression = __webpack_require__(/*! ./expression */ "./packages/compiler/dist/template/expression.js");

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
var isNonPhrasingTag = ['address', 'article', 'aside', 'base', 'blockquote', 'body', 'caption', 'col', 'colgroup', 'dd', 'details', 'dialog', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'legend', 'li', 'menuitem', 'meta', 'optgroup', 'option', 'param', 'rp', 'rt', 'source', 'style', 'summary', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'template', 'br', 'span', 'p', 'ParserBody', 'slot'];
exports.isNonPhrasingTag = isNonPhrasingTag;
var IF_STATEMENT_STARTED = false;
/**
 * @return Interface {
 *   Code
 *   Length
 * }
 */

function makeLoop(condition, args, componentTag, returnObject) {
  if (returnObject) {
    return "{\n\t\t\t_t: 'loop',\n\t\t\tc: " + condition + ",\n\t\t\tfn: (" + args + ") => { return " + componentTag + "; },\n\t\t}";
  }

  return "loop(" + condition + ", (" + args + ") => { return " + componentTag + "; })";
}

function getComponentCode(tag, options, children, returnObject) {
  if (children === void 0) {
    children = [];
  }

  if (returnObject === void 0) {
    returnObject = false;
  }

  if (tag === 'template') {
    return "[" + children.join(',') + "]";
  }

  if (returnObject) {
    return "{\n\t\t\t_t: 'h',\n\t\t\tt: '" + tag + "',\n\t\t\to: " + options + ",\n\t\t\tc: [" + children.join(',') + "],\n\t\t}";
  }

  return "h('" + tag + "', " + options + ", [" + children.join(',') + "])";
}

function getComponentSize(tag, options, children) {
  if (children === void 0) {
    children = [];
  }

  if (tag === 'template') {
    return children.length;
  }

  return 1;
}
/**
 * @return Interface {
 *   value
 *   stateful
 * }
 */


function handleTag(tag, options, children, returnObject) {
  if (children === void 0) {
    children = [];
  }

  return getComponentCode(tag, options, children, returnObject);
}

function parseSlotAttrs(node) {
  var name = 'default';
  var tag = null;

  if (node.tag === 'slot') {
    name = node.attrs['name'] || 'default';
    tag = node.attrs['tag'] || 'span';
  }

  if (tag !== null) {
    tag = "'" + tag + "'";
  }

  return {
    name: name,
    tag: tag
  };
}

var Node = /*#__PURE__*/function () {
  function Node(_ref) {
    var _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? null : _ref$tag,
        _ref$attrs = _ref.attrs,
        attrs = _ref$attrs === void 0 ? null : _ref$attrs,
        _ref$children = _ref.children,
        children = _ref$children === void 0 ? [] : _ref$children; // let { dynamicOptions, staticOptions } = parseOptions(attrs);

    this.hid = exports.HID = HID = +HID + 1;
    this.tag = tag;
    this.attrs = attrs;
    this.children = children;
    this.prevSibling = null;
    this.nextSibling = null;
    this.parent = null; // if

    this.if_statement = false;
    this.index = 0;
  }

  var _proto = Node.prototype;

  _proto.appendChild = function appendChild(node) {
    node.index = this.children.length;
    node.parent = this;
    this.children.push(node);
  };

  _proto.getIndexPath = function getIndexPath() {
    var indexes = [];
    var node = this;
    var i = 0;

    while (node) {
      i++;
      indexes.push(node.index);
      node = node.parent;

      if (i > 10) {
        throw new Error('Loop problem');
      }
    }

    indexes.reverse();
    return indexes;
  };

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

  _proto.getSlots = function getSlots(indexes, isUnderComponent) {
    if (indexes === void 0) {
      indexes = [];
    }

    if (isUnderComponent === void 0) {
      isUnderComponent = false;
    }

    var slots = {};

    if (this.isComponent) {
      isUnderComponent = true;
    }

    for (var i = 0; i < this.children.length; i++) {
      var node = this.children[i];
      var nodeIndexes = indexes.concat([i]);

      if (node instanceof Node) {
        slots = _extends(slots, node.getSlots(nodeIndexes, isUnderComponent));

        if (node.isSlot && !isUnderComponent) {
          var name = node.attrs['name'] || 'default';
          var tag = node.attrs['tag'] || 'span';
          var startIndex = 0;

          if (tag === null) {
            startIndex = i;
            nodeIndexes.pop();
          } // console.log('TAAAAAG', nodeIndexes, node.attrs['tag'])


          slots[name] = {
            path: nodeIndexes,
            tag: tag,
            index: startIndex
          };
        }
      }
    }

    return slots;
  };

  _proto.toAST = function toAST(context, hydrate, isCallExpression) {
    if (context === void 0) {
      context = null;
    }

    if (hydrate === void 0) {
      hydrate = false;
    }

    if (isCallExpression === void 0) {
      isCallExpression = false;
    }

    var code = '';
    var children = [];
    var shouldHydarate = false;
    var shouldSlotsHydrate = false;
    var render = !hydrate; // let isCallExpression = false;

    var Statement = (0, _parseFunctions.parseStatement)(this);
    var Slot = (0, _parseFunctions.parseSlot)(this);
    var Loop = (0, _parseFunctions.parseLoop)(this);

    if (Statement.is) {
      isCallExpression = true;
    }

    var slots = {};
    /**
     * Translate children to hyperscript
     * @param  {[type]} var i             [description]
     * @return {[type]}     [description]
     */

    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];

      var _child$toAST = child.toAST(context, hydrate, isCallExpression),
          value = _child$toAST.value,
          statefull = _child$toAST.statefull; // console.log('[child]', child, statefull);


      if (statefull) {
        shouldHydarate = true;
      } // Parse slots if component


      if (this.isComponent) {
        var _parseSlotAttrs = parseSlotAttrs(child),
            name = _parseSlotAttrs.name;

        if (!slots[name]) {
          slots[name] = [];
        }

        slots[name].push(value);

        if (value !== _helpers._) {
          shouldSlotsHydrate = true;
        }
      } else {
        // If not append child
        children.push(value);
      }
    }

    var _parseAttrs = (0, _attrs.parseAttrs)(context, this.attrs, hydrate),
        options = _parseAttrs.options,
        shouldOptionsHydrate = _parseAttrs.shouldOptionsHydrate;

    if (shouldOptionsHydrate) {
      shouldHydarate = true;
    } // Handle slots for Component children


    if (this.isComponent && Object.keys(slots).length > 0) {
      var _value = '';

      for (var key in slots) {
        _value += "'" + key + "': [" + slots[key].join(',') + "],";
      }

      if (hydrate && shouldSlotsHydrate || render) {
        options += "$slots: { " + _value + " },";
      }
    }

    shouldHydarate = this.isComponent || shouldHydarate; // Is component stateful

    if (hydrate && shouldOptionsHydrate) {
      options += "_s: true,";
    }

    options = "{" + options + "}";
    var componentTag = getComponentCode(this.tag, options, children, hydrate); // Make loop from component

    if (Loop.is) {
      var condition = (0, _expression.expression)(context, Loop.condition, false);

      if (condition.statefull) {
        shouldHydarate = true;
      }

      componentTag = makeLoop(condition.value, Loop.args, componentTag, hydrate);
    } // Statement render


    if (Statement.is) {
      var _condition = (0, _expression.expression)(context, Statement.condition, false);

      if (Statement.start) {
        code += "statement(";
      }

      var length = getComponentSize(this.tag, options, children);
      code += " " + _condition.value + ", " + length + ", (h) => { return " + componentTag + " }";

      if (Statement.end) {
        code += ")";
      } // Slot render

    } else if (Slot.is) {
      var _parseSlotAttrs2 = parseSlotAttrs(this),
          _name = _parseSlotAttrs2.name,
          tag = _parseSlotAttrs2.tag;

      if (Slot.callExpression) {
        var attrs = _extends({}, this.attrs);

        delete attrs.name;
        delete attrs.tag;
        code += "slot(ctx, h, '" + _name + "', " + tag + ", " + JSON.stringify(attrs) + ", [" + children.join(',') + "])";
      } else {
        code += "" + children.join(',');
      }
    } else {
      code += componentTag;
    } // console.log(hydrate, shouldHydarate, isCallExpression, code)


    if (hydrate && !shouldHydarate && !isCallExpression) {
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
  }, {
    key: "isInsideComponent",
    get: function get() {
      var node = this;
      var i = 0;
      var isInsideComponent = false;

      while (node) {
        i++;

        if (node.isComponent) {
          isInsideComponent = true;
          break;
        }

        node = node.parent;

        if (i > 100) {
          throw new Error('Loop problem');
        }
      }

      return isInsideComponent;
    }
  }, {
    key: "isSlot",
    get: function get() {
      return this.tag === 'slot';
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

var _helpers = __webpack_require__(/*! ../helpers */ "./packages/compiler/dist/helpers.js");

var TextNode = /*#__PURE__*/function () {
  function TextNode(text) {
    this.text = text;
  }

  var _proto = TextNode.prototype;

  _proto.toAST = function toAST(context, hydrate, isCallExpression) {
    if (context === void 0) {
      context = null;
    }

    if (hydrate === void 0) {
      hydrate = false;
    }

    if (isCallExpression === void 0) {
      isCallExpression = false;
    }

    var _parseOptionValue = (0, _attrs.parseOptionValue)(context, '_t', this.text),
        value = _parseOptionValue.value,
        statefull = _parseOptionValue.statefull; // console.log(`t(${this.text})`, value, statefull)
    // console.log(value, value.substring(0, 2))


    if (hydrate && !statefull && !isCallExpression) {
      value = _helpers._;
    }

    if (hydrate) {
      value = "{\n\t\t\t\t_t: 't',\n\t\t\t\tt: " + value + "\n\t\t\t}";
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
/**
 * There are some type of expressions (javascript code)
 * 1. @click="expr" -> _methods.submitForm();
 * 2. :style="expr" -> ['test', _state.some, _computed.some]  ||  ['test', _data.paddingTop]
 * 3. :class="expr" -> { is-loading: _state.loading }  ||  { is-red: _data.red }
 * 4. v-if="expr" -> _data.type === 'type'  ||  _state.visible === true
 *
 * In render function should be 
 * 1. _methods.submitForm();
 * 2. style(['test', _state.some(), _computed.some() ])  ||  ['test', _data.paddingTop]  SHOULD NOT BE CALLED BECAUSE REACTIVE
 * 3. 
 * 4.  _data.type  ||  () => { return _state.visible() } OR _state.visible
 * 
 * @return {[type]}         [description]
 */

function parseOptionValue(context, key, value) {
  var statefull = false;
  var keepObservation = false;
  var isExpression = false;

  if (key[0] === '$') {
    return {
      value: value,
      statefull: statefull
    };
  }

  if (key[0] === '@') {
    isExpression = true;
    statefull = true;
  }

  if (key[0] === ':') {
    isExpression = true;
  }

  if (typeof value === 'object') {
    keepObservation = true;
  }

  if (key[0] === '_') {
    value = '`' + value.replace(/{{((?:(?!(}})).)+)}}/g, '${$1}') + '`';
    keepObservation = false;
    isExpression = true;
  }

  if (!isExpression) {
    return {
      value: "'" + value + "'",
      statefull: false
    };
  }

  var exp = (0, _expression.expression)(context, value, keepObservation);
  value = exp.value;

  if (!statefull && exp.statefull) {
    statefull = true;
  }

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
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */


function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * [dynamicArgAttribute description]
 * @type {RegExp}
 */


var dynamicArgAttribute = /^(\@|\:)/g;
var eventArgAttribute = /^\@/g;
var staticArgsMap = {
  class: 'staticClass',
  style: 'staticStyle'
};
var isAttr = makeMap('accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' + 'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' + 'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' + 'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' + 'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' + 'form,formaction,headers,height,hidden,high,href,hreflang,http-equiv,' + 'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' + 'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' + 'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' + 'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' + 'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' + 'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' + 'target,title,type,usemap,value,width,wrap');

var isEventAttr = function isEventAttr(name) {
  return name.match(eventArgAttribute);
};

var isCSSAttr = function isCSSAttr(name) {
  return name.match(/^\:?(style|class)$/g);
};

var isRenderableAttr = function isRenderableAttr(name) {
  return isAttr(name) || name.indexOf('data-') === 0 || name.indexOf('aria-') === 0;
};

var isArgNotHydratable = function isArgNotHydratable(type, arg) {
  if (type === null) {
    type = arg;
  }

  console.log(type, art);
  return !['staticClass', 'staticClass', 'props', 'on'].includes(type);
};

var normalizeValue = function normalizeValue(value) {
  if (value === '') {
    value = true;
  }

  if (typeof value !== 'boolean') {
    value = "\"" + value + "\"";
  }

  return value;
};

function handleAttrsValue(context, value) {
  var statefull = false;
  var exp = (0, _expression.expression)(context, value, false);
  value = exp.value;

  if (!statefull && exp.statefull) {
    statefull = true;
  }

  return {
    value: value,
    statefull: statefull
  };
}

function genOptions(options) {
  var result = '';

  for (var key in options) {
    var value = options[key];

    if (typeof options[key] === 'object') {
      value = genOptions(value);

      if (value === null) {
        continue;
      }

      result += "'" + key + "': { \n " + value + " \n},\n";
    } else {
      if (value == '') {
        continue;
      }

      result += "'" + key + "': " + value + ",\n";
    }
  }

  if (result == '') {
    return null;
  }

  return result;
}

function parseAttrs(context, attrs, hydrate) {
  if (hydrate === void 0) {
    hydrate = false;
  }

  console.warn(1);
  var shouldOptionsHydrate = false;
  var options = {
    staticClass: '',
    staticStyle: {},
    class: [],
    style: [],
    attrs: {},
    on: {},
    domProps: {},
    props: {}
  }; // console.log(type, art)

  for (var key in attrs) {
    var arg = key.replace(dynamicArgAttribute, '');
    var attrValue = attrs[key];

    if (arg.match(/^v\-/g)) {
      continue;
    }

    if (key.match(dynamicArgAttribute)) {
      var _handleAttrsValue = handleAttrsValue(context, attrValue),
          value = _handleAttrsValue.value,
          statefull = _handleAttrsValue.statefull;

      if (statefull) {
        shouldOptionsHydrate = true;
      }

      var type = false;

      if (isEventAttr(key)) {
        type = 'on';
      } else {
        if (isCSSAttr(key)) {
          type = null;
        } else if (isRenderableAttr(arg)) {
          type = 'attrs';
        } else {
          type = 'props';
        }
      }

      if (type === false) {
        continue;
      }

      if (hydrate && !statefull && isArgNotHydratable(type, arg)) {
        continue;
      }

      if (type === null) {
        options[arg] = value;
      } else {
        options[type][arg] = value;
      }
    } else {
      var _value = attrValue;
      var normalizedValue = null;
      var _type = false;

      if (arg === 'class') {
        arg = 'staticClass';
        _type = null;
        normalizedValue = normalizeValue(_value);
      } else if (arg === 'style') {
        arg = 'staticStyle';
        _type = null;
        normalizedValue = {};
        _value = _value.split(';');

        for (var i = 0; i < _value.length; i++) {
          var tmp = _value[i].split(':').map(function (item) {
            return item.trim();
          });

          if (tmp.length === 2) {
            normalizedValue[tmp[0]] = normalizeValue(tmp[1]);
          }
        }
      } else if (isRenderableAttr(arg)) {
        _type = 'attrs';
        normalizedValue = normalizeValue(_value);
      } else {
        _type = 'props';
        normalizedValue = normalizeValue(_value);
      }

      if (_type === false) {
        continue;
      }

      if (hydrate && isArgNotHydratable(_type, arg)) {
        continue;
      }

      if (_type === null) {
        options[arg] = normalizedValue;
      } else {
        options[_type][arg] = normalizedValue;
      }
    } // Is expression inside

  } // console.log(options);
  // console.log(genOptions(options));
  // console.log(shouldOptionsHydrate);


  options = genOptions(options);
  return {
    options: options === null ? '' : options,
    shouldOptionsHydrate: shouldOptionsHydrate
  };
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

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

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

function expression(context, code, keepObservation) {
  if (keepObservation === void 0) {
    keepObservation = true;
  }

  if (typeof code === 'object') {
    return {
      statefull: false,
      value: JSON.stringify(code)
    };
  }

  code = String(code);
  var identifierOnly = true;
  var shouldExecute = keepObservation;
  var ast = parser.parse(code);
  (0, _traverse.default)(ast, {
    enter: function enter(path) {
      if (!['Program', 'ExpressionStatement', 'Identifier', 'BlockStatement', 'LabeledStatement', 'ArrayExpression', 'ObjectExpression', 'ObjectProperty'].includes(path.node.type)) {
        identifierOnly = false;
      }
    }
  });

  var _parseExpression = (0, _parseExpression2.default)(context.data, ast, 'ctx', identifierOnly),
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

    if (changed && !identifierOnly) {
      code = "() => { return " + code + "; }";
    }
  } // console.log(code);
  // console.log('--------');


  return {
    statefull: observable,
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

var _html = __webpack_require__(/*! ./html */ "./packages/compiler/dist/template/html.js");

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/compiler/dist/template/attrs.js");

var _parseFunctions = _interopRequireDefault(__webpack_require__(/*! ./parseFunctions */ "./packages/compiler/dist/template/parseFunctions.js"));

var _standalone = _interopRequireDefault(__webpack_require__(/*! prettier/standalone */ "./node_modules/prettier/standalone.js"));

var _parser = _interopRequireWildcard(__webpack_require__(/*! @babel/parser */ "./node_modules/@babel/parser/lib/index.js"));

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function generate(context, html) {
  var tree = (0, _html.parseHTML)(html);
  tree.setSiblings();
  var slots = tree.getSlots();
  tree = tree.children;
  var ast = {
    render: [],
    hydrate: []
  };
  var result = {
    render: '',
    hydrate: '',
    shouldHydarate: false,
    isStatefull: false
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

  var prettierConfig = {
    parser: function parser(text, _ref) {
      var babel = _ref.babel;
      return _parser.parse(text);
    }
  };

  try {
    result.render = _standalone.default.format(result.render, prettierConfig);
    result.hydrate = _standalone.default.format('let _tmp = ' + result.hydrate, prettierConfig).substring('let _tmp = '.length);
  } catch (err) {
    console.error(err);
  }

  result.slots = slots;
  result.isStatefull = context.reactive_variables.length > 0;
  result.context = context; // console.log();
  // result.functional = false;

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

/***/ "./packages/compiler/dist/template/html.js":
/*!*************************************************!*\
  !*** ./packages/compiler/dist/template/html.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHTML = parseHTML;

var _htmlparser = __webpack_require__(/*! htmlparser2 */ "./packages/compiler/node_modules/htmlparser2/lib/index.js");

var _Node = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./packages/compiler/dist/template/Node.js"));

var _TextNode = _interopRequireDefault(__webpack_require__(/*! ./TextNode */ "./packages/compiler/dist/template/TextNode.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function prepareHTML(html) {
  return html.replace(/\t/g, ' ').replace(/\s\s+/g, ' ').trim();
}

function initStack() {
  return [new _Node.default({
    tag: 'ParserBody',
    children: []
  })];
}

function parseHTML(html) {
  function currentStackNode() {
    return stack[stack.length - 1];
  }

  html = prepareHTML(html);
  var stack = initStack();
  var parse = new _htmlparser.Parser({
    onopentag: function onopentag(name, attrs) {
      var parent = currentStackNode();
      var node = new _Node.default({
        tag: name,
        attrs: attrs,
        children: []
      });

      if (parent) {
        parent.appendChild(node);
      }

      stack.push(node);
    },
    ontext: function ontext(text) {
      var parent = currentStackNode();
      text = text.trim();

      if (text !== '' && parent) {
        var node = new _TextNode.default(text);

        if (parent) {
          parent.appendChild(node);
        }
      }
    },
    onclosetag: function onclosetag(name) {
      stack.pop();
    }
  }, {
    decodeEntities: true
  });
  parse.write(html);
  parse.end();
  return stack[0];
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
exports.parseSlot = parseSlot;
exports.parseLoop = parseLoop;
exports.parseStatement = parseStatement;
exports.default = parseFunctions;
exports.IF_ATTRS = void 0;

var _Node = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./packages/compiler/dist/template/Node.js"));

var _TextNode = _interopRequireDefault(__webpack_require__(/*! ./TextNode */ "./packages/compiler/dist/template/TextNode.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _createForOfIteratorHelperLoose(o) {
  var i = 0;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  i = o[Symbol.iterator]();
  return i.next.bind(i);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _wrapRegExp(re, groups) {
  _wrapRegExp = function _wrapRegExp(re, groups) {
    return new BabelRegExp(re, undefined, groups);
  };

  var _RegExp = _wrapNativeSuper(RegExp);

  var _super = RegExp.prototype;

  var _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = _RegExp.call(this, re, flags);

    _groups.set(_this, groups || _groups.get(re));

    return _this;
  }

  _inherits(BabelRegExp, _RegExp);

  BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    if (result) result.groups = buildGroups(result, this);
    return result;
  };

  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if (typeof substitution === "string") {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    } else if (typeof substitution === "function") {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = [];
        args.push.apply(args, arguments);

        if (typeof args[args.length - 1] !== "object") {
          args.push(buildGroups(args, _this));
        }

        return substitution.apply(this, args);
      });
    } else {
      return _super[Symbol.replace].call(this, str, substitution);
    }
  };

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      groups[name] = result[g[name]];
      return groups;
    }, Object.create(null));
  }

  return _wrapRegExp.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var IF_ATTRS = ['v-if', 'v-else-if', 'v-else'];
exports.IF_ATTRS = IF_ATTRS;

function parseSlot(node) {
  if (!node.isSlot) {
    return {
      is: false
    };
  }

  return {
    is: true,
    callExpression: !node.isInsideComponent
  };
}

function parseLoop(node) {
  if (!node.attrs['v-for']) {
    return {
      is: false
    };
  }

  var statement = node.attrs['v-for'].matchAll( /*#__PURE__*/_wrapRegExp(/\(([0-9A-z]+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?(,[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?([0-9A-z]+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?)?\)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?in[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF](.*)/g, {
    item: 1,
    key: 3,
    condition: 4
  }));
  var condition = null;
  var args = [];

  for (var _iterator = _createForOfIteratorHelperLoose(statement), _step; !(_step = _iterator()).done;) {
    var match = _step.value;

    if (match.groups.item) {
      args.push(match.groups.item);
    }

    if (match.groups.key) {
      args.push(match.groups.key);
    }

    condition = match.groups.condition;
  }

  if (!condition) {
    return {
      is: false
    };
  }

  return {
    is: true,
    condition: condition,
    args: args.join(',')
  };
}

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

  if (node.nextSibling instanceof _Node.default) {
    if (node.nextSibling.attrs['v-else-if'] || node.nextSibling.attrs['v-else']) {
      end = false;
    }
  }

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

// import { parseExpression } from '@sinuous/compiler/src/template/expression';
// import { parseHTML } from '@sinuous/compiler/src/template/html';
// parseExpression(data, `
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
var source = "\n<template>\n\t<div @click=\"alert(1)\" :style=\"{ paddingTop: s2 }\">\n\t\ttest\n\t\t{{ s2 }}\n\t\t<br>\n\t\t<template v-if=\"visible\">\n\t\t\t<div>\n\t\t\t\t[visible] show {{ ddd }} {{ s1 }} ({{ item }})\n\t\t\t</div>\n\t\t\ttest\n\t\t\t<span v-if=\"s1\">\n\t\t\t\t[s1] test\n\t\t\t</span>\n\t\t</template>\n\t\t<div v-else-if=\"s3\">\n\t\t\t[s3] test\n\t\t</div>\n\t\t<div class=\"loop\" v-for=\"(item, key) in s1\" :key=\"key\">\n\t\t\t{{ item }}\n\t\t</div>\n\t\t<template>\n\t\t\t<div>\n\t\t\t\t<slot name=\"header\" tag=\"h1\">\n\t\t\t\t\tdefault slot text \n\t\t\t\t</slot>\n\t\t\t\t[none] hide\n\t\t\t</div>\n\t\t</template>\n\t\t<div>after-once-if</div>\n\t\t<child>\n\t\t\tdefault slot\n\t\t\ttest 1\n\t\t\t<slot name=\"footer\">footer-slot-test</slot>\n\t\t\ttest 2\n\t\t</child>\n\t</div>\n</template>\n\n<script>\nlet $s1 = true;\nlet $s2 = 10;\nlet $s3 = false;\n\nlet ddd = '[test variable ddd]'\nlet timer1 = null;\nlet visible = true;\n\nfunction makeIf()\n{\n\tconsole.log('Make');\n\n\ts1 = true;\n\ts3 = true;\n\n\tconsole.log(s1, s3);\n\tsetTimeout(() => {\n\t\ts1 = false;\n\t\ts3 = true;\n\t\tconsole.log(s1, s3);\n\t}, 1000)\n\n\tsetTimeout(() => {\n\t\ts1 = false;\n\t\ts3 = false;\n\t\tconsole.log(s1, s3);\n\t}, 2000)\n\n\tsetTimeout(() => {\n\t\ts1 = true;\n\t\ts3 = false;\n\t\tconsole.log(s1, s3);\n\t}, 3000)\n}\n\nfunction mounted()\n{\n\tmakeIf();\n\ttimer1 = setInterval(() => {\n\t\tmakeIf();\n\t}, 5000)\n}\n\nfunction unmounted()\n{\n\tclearInterval(timer1);\n}\n</script>\n";
source = "\n<template>\n\t<div id=\"test\" class=\"button\" :class=\"[testClass]\" style=\"border-radius: 5px;\" :style=\"[{ fontSize: s1 }]\" @click=\"click\" disabled some-prop=\"red\" :other-prop=\"1\">\n\t\t<!-- {{ s1 }} -->\n\t\t<slot>\n\t\t\tDefault button text  2\n\t\t</slot>\n\t</div>\n</template>\n\n<script>\nlet $s1 = 1;//Math.random(1, 100);\nlet timer = null;\n\nlet testClass = () => {\n\treturn {\n\t\tred: s1 % 2 === 0\n\t}\n}\n\nfunction click()\n{\n\talert(1)\n}\n\nfunction mounted()\n{\n\t// console.log('mounted');\n\ttimer = setInterval(() => {\n\t\ts1 += 1\n\t}, 1000)\n}\n\nfunction unmoutned()\n{\n\tclearInterval(timer);\n}\n</script>\n\n"; // console.log(parseHTML(source));

var block = (0, _compiler.compiler)({
  context: {},
  type: 'template',
  source: source
});
console.log(block.source.render);
console.log('----------');
console.log(block.source.hydrate); // console.log(block.source)

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/test.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/test.js */"./src/test.js");


/***/ }),

/***/ 1:
/*!**********************************!*\
  !*** ./WritableStream (ignored) ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvbXBpbGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvQXN0R2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2NyaXB0L2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3NjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3NjcmlwdC9wYXJzZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvcGFyc2VFeHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2NyaXB0L3BhcnNlTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90ZW1wbGF0ZS9UZXh0Tm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2F0dHJzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdGVtcGxhdGUvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2dlbmVyYXRlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdGVtcGxhdGUvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90ZW1wbGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL3BhcnNlRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXN0LmpzIiwid2VicGFjazovLy8uL1dyaXRhYmxlU3RyZWFtIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJibG9ja3MiLCJzb3VyY2UiLCJ0eXBlIiwiZXhlYyIsInMiLCJjb21waWxlciIsImNvbnRleHQiLCJyb290IiwibG93ZXJDYXNlVGFnTmFtZSIsInNjcmlwdCIsIm5vZGVzIiwiaSIsImlubmVySFRNTCIsIl8iLCJSZWFjdGl2ZU5hbWVzcGFjZXMiLCJuYW1lIiwiaWQiLCJkYXRhIiwicGF0aCIsImdldElkZW50aWZpZXJOYW1lIiwibWF0Y2giLCJtYXRjaElkZW50aWZpZXIiLCJJZGVudGlmaWVyRXhwcmVzc2lvbiIsIm5hbWVzcGFjZSIsIm9ic2VydmFibGUiLCJjYWxsYWJsZSIsInJlcGxhY2UiLCJfbmFtZSIsIk9iamVjdCIsImltcG9ydHMiLCJwcm9wZXJ0aWVzIiwib2JqZWN0IiwiRnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uIiwiZ2VuZXJhdGVGdW5jdGlvblJldHVybkV4cHJlc3Npb24iLCJPYmplY3RSZXR1cm5FeHByZXNzaW9uIiwiZ2VuZXJhdGVPYmplY3RSZXR1cm5FeHByZXNzaW9uIiwiZXhwb3J0ZWRPYmplY3QiLCJleHBvcnRlZERlZmF1bHQiLCJib2R5IiwidmFsdWVzIiwidmFsIiwiUmVhY3RpdHkiLCJGdW5jdGlvblJldHVybiIsInByb3BzIiwic3RhdGUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJBaWlFeHByZXNzaW9uIiwiaXNGdW5jdGlvbiIsImFwcGVuZCIsImlzSWRlbnRpZmllclJlYWN0aXZlIiwiYXN0Iiwic291cmNlVHlwZSIsInN0cmljdE1vZGUiLCJyZWFjdGl2ZV92YXJpYWJsZXMiLCJyZXRhaW5MaW5lcyIsImNvbXBhY3QiLCJtaW5pZmllZCIsImNvbmNpc2UiLCJxdW90ZXMiLCJpc0Z1bmN0aW9uRGVjbGFyYXRpb24iLCJWYXJpYWJsZURlY2xhcmF0b3IiLCJlbnRlciIsInZhbHVlIiwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJleGl0IiwiRnVuY3Rpb25EZWNsYXJhdGlvbiIsImN0eCIsImRpc2FibGVFeGVjdXRpb24iLCJjaGFuZ2VkIiwiSW1wb3J0RGVjbGFyYXRpb24iLCJBc3NpZ25tZW50RXhwcmVzc2lvbiIsImFyZ3MiLCJJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsImZ1bmN0aW9uQmxvY2tIYW5kbGluZyIsImFzc2lnbm1lbnRIYW5kbGluZyIsInZhcmlhYmxlRGVjbGFyYXRpb25IYW5kbGluZyIsInNob3VsZEFzc2lnbm1lbnRIYW5kbGUiLCJoYXNGdW5jdGlvblJlYWN0aXZlIiwibWVtYmVySGFuZGxpbmciLCJDYWxsRXhwcmVzc2lvbiIsIk1lbWJlckV4cHJlc3Npb24iLCJFeHByZXNzaW9uU3RhdGVtZW50IiwiZXhwcmVzc2lvbiIsIkJsb2NrU3RhdGVtZW50IiwiY29sbGVjdE1ldGhvZHMiLCJISUQiLCJpc05vblBocmFzaW5nVGFnIiwiSUZfU1RBVEVNRU5UX1NUQVJURUQiLCJjaGlsZHJlbiIsInJldHVybk9iamVjdCIsInRhZyIsImdldENvbXBvbmVudENvZGUiLCJub2RlIiwiTm9kZSIsImF0dHJzIiwiYXBwZW5kQ2hpbGQiLCJnZXRJbmRleFBhdGgiLCJpbmRleGVzIiwic2V0U2libGluZ3MiLCJnZXRTbG90cyIsImlzVW5kZXJDb21wb25lbnQiLCJzbG90cyIsIm5vZGVJbmRleGVzIiwic3RhcnRJbmRleCIsImluZGV4IiwidG9BU1QiLCJoeWRyYXRlIiwiaXNDYWxsRXhwcmVzc2lvbiIsImNvZGUiLCJzaG91bGRIeWRhcmF0ZSIsInNob3VsZFNsb3RzSHlkcmF0ZSIsInJlbmRlciIsIlN0YXRlbWVudCIsIlNsb3QiLCJMb29wIiwiY2hpbGQiLCJzdGF0ZWZ1bGwiLCJwYXJzZVNsb3RBdHRycyIsIm9wdGlvbnMiLCJzaG91bGRPcHRpb25zSHlkcmF0ZSIsImNvbXBvbmVudFRhZyIsImNvbmRpdGlvbiIsIm1ha2VMb29wIiwibGVuZ3RoIiwiZ2V0Q29tcG9uZW50U2l6ZSIsIkpTT04iLCJpc0luc2lkZUNvbXBvbmVudCIsIlRleHROb2RlIiwiQXR0cnNNYXAiLCJIVE1MQXR0cmlidXRlcyIsImtlZXBPYnNlcnZhdGlvbiIsImlzRXhwcmVzc2lvbiIsImtleSIsImV4cCIsInN0eWxlcyIsInBhaXJzIiwic3RyaW5nIiwidG1wIiwidmFyaWFibGUiLCJtYXAiLCJsaXN0Iiwic3RyIiwiZXhwZWN0c0xvd2VyQ2FzZSIsImR5bmFtaWNBcmdBdHRyaWJ1dGUiLCJldmVudEFyZ0F0dHJpYnV0ZSIsInN0YXRpY0FyZ3NNYXAiLCJjbGFzcyIsInN0eWxlIiwiaXNBdHRyIiwibWFrZU1hcCIsImlzRXZlbnRBdHRyIiwiaXNDU1NBdHRyIiwiaXNSZW5kZXJhYmxlQXR0ciIsImlzQXJnTm90SHlkcmF0YWJsZSIsImNvbnNvbGUiLCJub3JtYWxpemVWYWx1ZSIsInJlc3VsdCIsImdlbk9wdGlvbnMiLCJzdGF0aWNDbGFzcyIsInN0YXRpY1N0eWxlIiwib24iLCJkb21Qcm9wcyIsImFyZyIsImF0dHJWYWx1ZSIsImhhbmRsZUF0dHJzVmFsdWUiLCJub3JtYWxpemVkVmFsdWUiLCJpdGVtIiwiU3RyaW5nIiwiaWRlbnRpZmllck9ubHkiLCJzaG91bGRFeGVjdXRlIiwicGFyc2VyIiwidHJlZSIsImlzU3RhdGVmdWxsIiwicmVuZGVyQVNUIiwiaHlkcmF0aW9uQVNUIiwicHJldHRpZXJDb25maWciLCJiYWJlbCIsInByZXR0aWVyIiwidmFyX3BhcnRzIiwiaHRtbCIsInN0YWNrIiwicHJlcGFyZUhUTUwiLCJpbml0U3RhY2siLCJwYXJzZSIsIlBhcnNlciIsIm9ub3BlbnRhZyIsInBhcmVudCIsImN1cnJlbnRTdGFja05vZGUiLCJvbnRleHQiLCJ0ZXh0Iiwib25jbG9zZXRhZyIsImRlY29kZUVudGl0aWVzIiwiSUZfQVRUUlMiLCJpcyIsImNhbGxFeHByZXNzaW9uIiwic3RhdGVtZW50Iiwic3RhcnQiLCJlbmQiLCJibG9jayIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FB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QUFPLENBQUM2QyxHQUFSLENBQVlELEtBQUssQ0FBQ3ZNLE1BQU4sQ0FBYWdILE1BQXpCO0FBQ0EyQyxPQUFPLENBQUM2QyxHQUFSLENBQVksWUFBWjtBQUNBN0MsT0FBTyxDQUFDNkMsR0FBUixDQUFZRCxLQUFLLENBQUN2TSxNQUFOLENBQWEyRyxPQUF6QixFLENBQ0EsNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEtBLGUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBjb21waWxlU2NyaXB0IH0gZnJvbSBcIi4vc2NyaXB0XCI7XG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUgfSBmcm9tIFwiLi90ZW1wbGF0ZVwiO1xuXG5mdW5jdGlvbiBjb21waWxlcihjb250ZXh0LCB7IGJsb2Nrcywgc291cmNlLCB0eXBlIH0pXG57XG5cdGxldCBleGVjID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzb3VyY2U7XG5cdH1cblxuXHRpZih0eXBlID09PSAnc2NyaXB0Jykge1xuXHRcdGxldCBzID0gY29tcGlsZVNjcmlwdChjb250ZXh0LCBzb3VyY2UpO1xuXHRcdHNvdXJjZSA9IHMuY29kZSA9PSAnJyA/IG51bGwgOiBzLmNvZGU7XG5cdH1cblxuXHRpZih0eXBlID09PSAndGVtcGxhdGUnKSB7XG5cdFx0c291cmNlID0gY29tcGlsZVRlbXBsYXRlKGNvbnRleHQsIHNvdXJjZSwgYmxvY2tzKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c291cmNlLFxuXHRcdHR5cGUsXG5cdFx0ZXhlYyxcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCB7IHR5cGUsIHNvdXJjZSB9KVxue1xuXHRyZXR1cm4ge1xuXHRcdHR5cGUsXG5cdFx0c291cmNlLFxuXHRcdGV4ZWMoYmxvY2tzID0gW10pIHtcblx0XHRcdHJldHVybiBjb21waWxlcihjb250ZXh0LCB7XG5cdFx0XHRcdGJsb2Nrcyxcblx0XHRcdFx0c291cmNlOiB0aGlzLnNvdXJjZSxcblx0XHRcdFx0dHlwZTogdGhpcy50eXBlLFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbn07IiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdub2RlLWh0bWwtcGFyc2VyJztcbmltcG9ydCBibG9jayBmcm9tICcuL2Jsb2NrLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVyKHsgY29udGV4dCwgdHlwZSwgc291cmNlIH0pIHtcblxuXHRsZXQgcm9vdCA9IHBhcnNlKHNvdXJjZSwge1xuXHRcdGxvd2VyQ2FzZVRhZ05hbWU6IHRydWUsXG5cdFx0c2NyaXB0OiB0cnVlLFxuXHR9KTtcblxuXHRsZXQgbm9kZXMgPSByb290LmNoaWxkTm9kZXM7XG5cdGxldCBibG9ja3MgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYobm9kZXNbaV0udGFnTmFtZSkge1xuXHRcdFx0YmxvY2tzW25vZGVzW2ldLnRhZ05hbWVdID0gYmxvY2soY29udGV4dCwge1xuXHRcdFx0XHR0eXBlOiBub2Rlc1tpXS50YWdOYW1lLFxuXHRcdFx0XHRzb3VyY2U6IG5vZGVzW2ldLmlubmVySFRNTCxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVx0XG5cblx0aWYoYmxvY2tzW3R5cGVdKSB7XG5cdFx0cmV0dXJuIGJsb2Nrc1t0eXBlXS5leGVjKGJsb2Nrcyk7XG5cdH1cblxuXHRyZXR1cm4gYmxvY2soY29udGV4dCwge1xuXHRcdHR5cGU6IHR5cGUsXG5cdFx0c291cmNlOiBudWxsLFxuXHR9KTtcbn0iLCJleHBvcnQgY29uc3QgXyA9IC0xO1xuIiwiZXhwb3J0IGNvbnN0IFJlYWN0aXZlTmFtZXNwYWNlcyA9IFsnc3RhdGUnLCAnY29tcHV0ZWQnXTtcblxuZXhwb3J0IGNvbnN0IF8gPSAtMTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIGlkKVxue1xuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cdFxuXHRpZihuYW1lLm1hdGNoKC9eXFwkL2cpKVx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGRhdGEuc3RhdGVbbmFtZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJZGVudGlmaWVyTmFtZShpZClcbntcblx0aWYoIWlkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cblx0aWYobmFtZS5tYXRjaCgvXlxcJC9nKSlcdHtcblx0XHRyZXR1cm4gbmFtZS5zdWJzdHJpbmcoMSlcblx0fVxuXG5cdHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb24oZGF0YSwgcGF0aClcbntcblx0aWYocGF0aC5wYXJlbnQudHlwZSAhPT0gJ0Z1bmN0aW9uRGVjbGFyYXRpb24nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblx0bGV0IG1hdGNoID0gbWF0Y2hJZGVudGlmaWVyKGRhdGEsIGlkKTtcblxuXHRpZihtYXRjaC5uYW1lc3BhY2UgJiYgcGF0aC5saXN0S2V5ID09PSAncGFyYW1zJykge1xuXHRcdHRocm93IG5ldyBFcnJvcihgVmFyaWFibGUgJHsgbmFtZSB9IGhhcyBhbHJlYWR5IGRlZmluZWQgaW4gJHsgbWF0Y2gubmFtZXNwYWNlIH1gKVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyRXhwcmVzc2lvblxue1xuXHRjb25zdHJ1Y3RvcihpZCA9IG51bGwsIHsgY29udGV4dCA9IG51bGwsIG5hbWVzcGFjZSA9IG51bGwsIG9ic2VydmFibGUgPSBudWxsLCBjYWxsYWJsZSA9IG51bGwgfSlcblx0e1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblx0XHR0aGlzLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlO1xuXHRcdHRoaXMuY2FsbGFibGUgPSBjYWxsYWJsZTtcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR9XG5cblx0cmVwbGFjZShkaXNhYmxlRXhlY3V0aW9uKVxuXHR7XG5cdFx0aWYodGhpcy5uYW1lc3BhY2UgPT09IGZhbHNlIHx8IHRoaXMuaWQgPT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKHRoaXMuaWQpO1xuXHRcdGxldCBfbmFtZSA9IGAkeyB0aGlzLmNvbnRleHQgfS5gO1xuXG5cdFx0aWYodGhpcy5uYW1lc3BhY2UgIT09ICdtZXRob2RzJykge1xuXHRcdFx0X25hbWUgKz0gYF8keyB0aGlzLm5hbWVzcGFjZSB9LmA7XG5cdFx0fVxuXG5cdFx0X25hbWUgKz0gYCR7bmFtZX1gO1xuXG5cdFx0aWYoIWRpc2FibGVFeGVjdXRpb24gJiYgdGhpcy5jYWxsYWJsZSkge1xuXHRcdFx0X25hbWUgKz0gJygpJztcblx0XHR9XG5cblx0XHR0aGlzLmlkLm5hbWUgPSBfbmFtZTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlSWRlbnRpZmllcihjb250ZXh0LCBkYXRhLCBwYXRoKVxue1xuXHRpZihbJ0Z1bmN0aW9uRGVjbGFyYXRpb24nLCAnVmFyaWFibGVEZWNsYXJhdG9yJywgJ0xhYmVsZWRTdGF0ZW1lbnQnXS5pbmNsdWRlcyhwYXRoLnBhcmVudC50eXBlKSB8fCBbJ3Byb3BlcnR5J10uaW5jbHVkZXMocGF0aC5rZXkpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXHRsZXQgeyBuYW1lc3BhY2UsIG9ic2VydmFibGUgfSA9IG1hdGNoSWRlbnRpZmllcihkYXRhLCBpZCk7XG5cdGxldCBjYWxsYWJsZSA9IGZhbHNlO1xuXG5cdC8vIGNvbnNvbGUubG9nKG5hbWUsIGtlZXBPYnNlcnZhdGlvbilcblx0aWYob2JzZXJ2YWJsZSAmJiBwYXRoLmNvbnRhaW5lci50eXBlICE9PSAnQ2FsbEV4cHJlc3Npb24nKSB7XG5cdFx0Y2FsbGFibGUgPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBJZGVudGlmaWVyRXhwcmVzc2lvbihpZCwge1xuXHRcdGNvbnRleHQsXG5cdFx0bmFtZXNwYWNlLFxuXHRcdG9ic2VydmFibGUsXG5cdFx0Y2FsbGFibGUsXG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hJZGVudGlmaWVyKGNvbnRleHQsIGlkKVxue1xuXHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblx0bGV0IG5hbWVzcGFjZSA9IGZhbHNlO1xuXHRsZXQgb2JzZXJ2YWJsZSA9IGZhbHNlO1xuXG5cdGZvcihsZXQga2V5IGluIGNvbnRleHQpIHtcblx0XHRpZihPYmplY3Qua2V5cyhjb250ZXh0W2tleV0pLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRuYW1lc3BhY2UgPSBrZXk7XG5cdFx0fVxuXHR9XG5cblx0aWYobmFtZXNwYWNlICE9PSBmYWxzZSkge1xuXHRcdG9ic2VydmFibGUgPSBSZWFjdGl2ZU5hbWVzcGFjZXMuaW5jbHVkZXMobmFtZXNwYWNlKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bmFtZXNwYWNlLFxuXHRcdG9ic2VydmFibGUsXG5cdH07XG59IiwiaW1wb3J0IHsgXyB9IGZyb20gJy4vZW1wdHkuanMnO1xuaW1wb3J0IHsgY29tcGlsZXIgfSBmcm9tICcuL2NvbXBpbGVyLmpzJztcblxuZXhwb3J0IHsgXywgY29tcGlsZXIgfSIsImltcG9ydCB7XG5cdEV4cG9ydERlZmF1bHREZWNsYXJhdGlvbixcblx0T2JqZWN0RXhwcmVzc2lvbixcblx0T2JqZWN0UHJvcGVydHksXG5cdE9iamVjdE1ldGhvZCxcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEZ1bmN0aW9uRXhwcmVzc2lvbixcblx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEJsb2NrU3RhdGVtZW50LFxuXHRSZXR1cm5TdGF0ZW1lbnQsXG5cdGlkZW50aWZpZXIsXG5cdHByb2dyYW0sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Ly8gQ29uc3RzXG5cdFJlYWN0aXR5LFxuXHRGdW5jdGlvblJldHVybkV4cHJlc3Npb24sXG5cdE9iamVjdFJldHVybkV4cHJlc3Npb24sXG5cdEFpaUV4cHJlc3Npb24sXG59IGZyb20gXCIuL2hlbHBlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGF0YSlcbntcblx0bGV0IGltcG9ydHMgPSBbXTtcblxuXHRmb3IobGV0IHByb3AgaW4gZGF0YS5pbXBvcnRzKSB7XG5cdFx0aW1wb3J0cy5wdXNoKGRhdGEuaW1wb3J0c1twcm9wXSlcblx0fTtcblxuXHRsZXQgcHJvcGVydGllcyA9IFtdO1xuXG5cdE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKHByb3AsIGtleSkgPT4ge1xuXG5cdFx0bGV0IG9iamVjdCA9IG51bGw7XG5cblx0XHRpZihGdW5jdGlvblJldHVybkV4cHJlc3Npb24uaW5jbHVkZXMocHJvcCkpIHtcblx0XHRcdG9iamVjdCA9IGdlbmVyYXRlRnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uKGRhdGEsIHByb3ApO1xuXHRcdH0gZWxzZSBpZihPYmplY3RSZXR1cm5FeHByZXNzaW9uLmluY2x1ZGVzKHByb3ApKSB7XG5cdFx0XHRvYmplY3QgPSBnZW5lcmF0ZU9iamVjdFJldHVybkV4cHJlc3Npb24oZGF0YSwgcHJvcCk7XG5cdFx0fVxuXG5cdFx0aWYoIW9iamVjdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRwcm9wZXJ0aWVzLnB1c2gob2JqZWN0KTtcblx0fSlcblxuXHRsZXQgZXhwb3J0ZWRPYmplY3QgPSBPYmplY3RFeHByZXNzaW9uKHByb3BlcnRpZXMpO1xuXHRsZXQgZXhwb3J0ZWREZWZhdWx0ID0gW1xuXHRcdEV4cG9ydERlZmF1bHREZWNsYXJhdGlvbihleHBvcnRlZE9iamVjdClcblx0XTtcblxuXHRsZXQgYm9keSA9IFtdXG5cdFx0LmNvbmNhdChpbXBvcnRzKVxuXHRcdC5jb25jYXQoZXhwb3J0ZWREZWZhdWx0KVxuXG5cdHJldHVybiBwcm9ncmFtKFxuXHRcdGJvZHksIFxuXHRcdFtdLFxuXHRcdCdtb2R1bGUnXG5cdCk7XG59XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVGdW5jdGlvblJldHVybkV4cHJlc3Npb24oZGF0YSwgcmV0dXJuUHJvcClcbntcblx0bGV0IHZhbHVlcyA9IGRhdGFbcmV0dXJuUHJvcF07XG5cdGxldCBwcm9wZXJ0aWVzID0gW107XG5cblx0Zm9yKGxldCBwcm9wIGluIHZhbHVlcykge1xuXHRcdGxldCB2YWwgPSB2YWx1ZXNbcHJvcF07XG5cblx0XHRpZih2YWwudHlwZSA9PT0gJ0Jsb2NrU3RhdGVtZW50Jykge1xuXHRcdFx0dmFsID0gQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW10sIHZhbCk7XG5cdFx0fVxuXG5cdFx0aWYoUmVhY3RpdHlbcmV0dXJuUHJvcF0pIHtcblx0XHRcdHZhbCA9IENhbGxFeHByZXNzaW9uKGlkZW50aWZpZXIoUmVhY3RpdHlbcmV0dXJuUHJvcF0pLCBbdmFsXSk7XG5cdFx0fVxuXG5cdFx0cHJvcGVydGllcy5wdXNoKFxuXHRcdFx0T2JqZWN0UHJvcGVydHkoaWRlbnRpZmllcihwcm9wKSwgdmFsKVxuXHRcdClcblx0fVxuXG5cdGxldCBGdW5jdGlvblJldHVybiA9IFJldHVyblN0YXRlbWVudChcblx0XHRPYmplY3RFeHByZXNzaW9uKFxuXHRcdFx0cHJvcGVydGllc1xuXHRcdClcblx0KVxuXG5cdGxldCBib2R5ID0gQmxvY2tTdGF0ZW1lbnQoW0Z1bmN0aW9uUmV0dXJuXSlcblxuXHRsZXQgb2JqZWN0ID0gT2JqZWN0TWV0aG9kKCdtZXRob2QnLCBpZGVudGlmaWVyKHJldHVyblByb3ApLFxuXHRcdFJlYWN0aXR5W3JldHVyblByb3BdID8gW2lkZW50aWZpZXIoUmVhY3RpdHlbcmV0dXJuUHJvcF0pXSA6IFtdXG5cdCwgYm9keSk7XG5cblx0cmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVPYmplY3RSZXR1cm5FeHByZXNzaW9uKGRhdGEsIHByb3ApXG57XG5cdGxldCB2YWx1ZXMgPSBkYXRhW3Byb3BdO1xuXHRsZXQgcHJvcGVydGllcyA9IFtdO1xuXG5cdGZvcihsZXQgcHJvcCBpbiB2YWx1ZXMpIHtcblx0XHRsZXQgdmFsID0gdmFsdWVzW3Byb3BdO1xuXG5cdFx0aWYodmFsLnR5cGUgPT09ICdGdW5jdGlvbkRlY2xhcmF0aW9uJykge1xuXHRcdFx0dmFsID0gRnVuY3Rpb25FeHByZXNzaW9uKG51bGwsIHZhbC5wYXJhbXMsIHZhbC5ib2R5KTtcblx0XHR9XG5cblx0XHRwcm9wZXJ0aWVzLnB1c2goXG5cdFx0XHRPYmplY3RQcm9wZXJ0eShpZGVudGlmaWVyKHByb3ApLCB2YWwpXG5cdFx0KVxuXHR9XG5cblx0bGV0IG9iamVjdCA9IE9iamVjdFByb3BlcnR5KFxuXHRcdGlkZW50aWZpZXIocHJvcCksXG5cdFx0T2JqZWN0RXhwcmVzc2lvbihwcm9wZXJ0aWVzKVxuXHQpO1xuXG5cdHJldHVybiBvYmplY3Q7XG59IiwiZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG5cdGltcG9ydHM6IFtdLFxuXHRwcm9wczoge30sXG5cdGRhdGE6IHt9LFxuXHRzdGF0ZToge30sXG5cdGNvbXB1dGVkOiB7fSxcblx0bWV0aG9kczoge30sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYXRhKGNvbnRleHQpIHtcblx0cmV0dXJuIHtcblx0XHRpbXBvcnRzOiBbXSxcblx0XHRwcm9wczoge30sXG5cdFx0ZGF0YToge30sXG5cdFx0c3RhdGU6IHt9LFxuXHRcdGNvbXB1dGVkOiB7fSxcblx0XHRtZXRob2RzOiB7fSxcblx0fTtcbn0iLCIvLyBpbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCI7XG5cbi8qKlxuICogQ29uc3RzXG4gKi9cblxuZXhwb3J0IGNvbnN0IFJlYWN0aXR5ID0ge1xuXHQnc3RhdGUnOiAnbycsXG5cdCdjb21wdXRlZCc6ICdvJyxcbn07XG5cbmV4cG9ydCBjb25zdCBGdW5jdGlvblJldHVybkV4cHJlc3Npb24gPSBbXG5cdCdkYXRhJywgJ3N0YXRlJywgJ2NvbXB1dGVkJyxcbl07XG5cbmV4cG9ydCBjb25zdCBPYmplY3RSZXR1cm5FeHByZXNzaW9uID0gW1xuXHQnbWV0aG9kcycsIFxuXTtcblxuLy8gQXMgaXQgaXMgZXhwcmVzc2lvbnNcbmV4cG9ydCBjb25zdCBBaWlFeHByZXNzaW9uID0gW1xuXHQnaW1wb3J0cycsXG5dO1xuXG4vLyBleHBvcnQgY29uc3QgUkVUVVJOX0ZVTkNUSU9OX1RZUEUgPSAxO1xuLy8gZXhwb3J0IGNvbnN0IE9CSkVDVF9GVU5DVElPTl9UWVBFID0gMjtcblxuLyoqXG4gKiBGdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb250ZXh0YWJsZShkYXRhLCBpZClcbntcblx0bGV0IG5hbWUgPSBpZC5uYW1lO1xuXHRsZXQgaXNGdW5jdGlvbiA9IG5hbWUubWF0Y2goL1xcKFxcKSQvZyk7XG5cblx0bmFtZSA9IG5hbWUucmVwbGFjZSgvKFxcKHxcXCkpL2csICcnKTtcblxuXHRpZighbmFtZS5tYXRjaCgvXnRoaXNcXC4vZ2kpKSB7XG5cdFx0bGV0IGFwcGVuZCA9IFsndGhpcyddO1xuXHRcdFxuXHRcdGlmKE9iamVjdC5rZXlzKGRhdGEuc3RhdGUpLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRhcHBlbmQucHVzaCgnX3N0YXRlJyk7XG5cdFx0fSBlbHNlIGlmKE9iamVjdC5rZXlzKGRhdGEuY29tcHV0ZWQpLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRhcHBlbmQucHVzaCgnX2NvbXB1dGVkJyk7XG5cdFx0fSBlbHNlIGlmKE9iamVjdC5rZXlzKGRhdGEuZGF0YSkuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdGFwcGVuZC5wdXNoKCdfZGF0YScpO1xuXHRcdH0gZWxzZSBpZihPYmplY3Qua2V5cyhkYXRhLm1ldGhvZHMpLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRhcHBlbmQucHVzaCgnX21ldGhvZHMnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyB2YXJpYWJsZSAke25hbWV9YCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0YXBwZW5kLnB1c2gobmFtZSk7XG5cblx0XHRuYW1lID0gYXBwZW5kLmpvaW4oJy4nKTtcblx0fVxuXG5cdGlmKGlzRnVuY3Rpb24pIHtcblx0XHRuYW1lID0gYCR7bmFtZX0oKWA7XG5cdH1cblxuXHRpZC5uYW1lID0gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIGlkKVxue1xuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cdFxuXHRpZihuYW1lLm1hdGNoKC9eXFwkL2cpKVx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGRhdGEuc3RhdGVbbmFtZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJZGVudGlmaWVyTmFtZShpZClcbntcblx0aWYoIWlkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cblx0aWYobmFtZS5tYXRjaCgvXlxcJC9nKSlcdHtcblx0XHRyZXR1cm4gbmFtZS5zdWJzdHJpbmcoMSlcblx0fVxuXG5cdHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU9ic2VydmFibGVHZXR0ZXIoZGF0YSwgaWQpXG57XG5cdGlmKCFpc0lkZW50aWZpZXJSZWFjdGl2ZShkYXRhLCBpZCkpIHtcblx0XHRyZXR1cm4gaWQ7XG5cdH1cblx0XG5cdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXHRpZC5uYW1lID0gYCR7IG5hbWUgfSgpYDtcblxuXHRyZXR1cm4gaWQ7XG59IiwiXG5cbmltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiQGJhYmVsL3BhcnNlclwiO1xuaW1wb3J0IGdlbmVyYXRlIGZyb20gXCJAYmFiZWwvZ2VuZXJhdG9yXCI7XG5cbmltcG9ydCB7IGNyZWF0ZURhdGEgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgcGFyc2VDb250ZXh0IGZyb20gXCIuL3BhcnNlQ29udGV4dFwiO1xuaW1wb3J0IHBhcnNlRXhwcmVzc2lvbiBmcm9tIFwiLi9wYXJzZUV4cHJlc3Npb25cIjtcbmltcG9ydCBwYXJzZU1ldGhvZHMgZnJvbSBcIi4vcGFyc2VNZXRob2RzXCI7XG5pbXBvcnQgQXN0R2VuZXJhdG9yIGZyb20gXCIuL0FzdEdlbmVyYXRvclwiO1xuXG5cbi8qKlxuICogQ29tcGlsZXJcbiAqIEBwYXJhbSAge1t0eXBlXX0gc291cmNlIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJlYWN0aXZlVmFyaWFibGVzKGNvbnRleHQsIHNvdXJjZSlcbntcblx0bGV0IGRhdGEgPSBjcmVhdGVEYXRhKGNvbnRleHQpO1xuXG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShzb3VyY2UsIHtcblx0XHRzb3VyY2VUeXBlOiBcInVuYW1iaWd1b3VzXCIsXG5cdFx0c3RyaWN0TW9kZTogZmFsc2UsXG5cdH0pO1xuXG5cdHBhcnNlQ29udGV4dChkYXRhLCBhc3QpO1xuXG5cdGxldCByZWFjdGl2ZV92YXJpYWJsZXMgPSBbXTtcblxuXHRyZWFjdGl2ZV92YXJpYWJsZXMgPSByZWFjdGl2ZV92YXJpYWJsZXNcblx0XHQuY29uY2F0KE9iamVjdC5rZXlzKGRhdGEuc3RhdGUpKVxuXHRcdC5jb25jYXQoT2JqZWN0LmtleXMoZGF0YS5jb21wdXRlZCkpO1xuXG5cdHJldHVybiB7XG5cdFx0cmVhY3RpdmVfdmFyaWFibGVzLFxuXHRcdGRhdGEsXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlU2NyaXB0KGNvbnRleHQsIHNvdXJjZSlcbntcblx0bGV0IGRhdGEgPSBjcmVhdGVEYXRhKCk7XG5cdFx0XG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShzb3VyY2UsIHtcblx0XHRzb3VyY2VUeXBlOiBcInVuYW1iaWd1b3VzXCIsXG5cdFx0c3RyaWN0TW9kZTogZmFsc2UsXG5cdH0pO1xuXG5cdHBhcnNlQ29udGV4dChkYXRhLCBhc3QpO1xuXHRwYXJzZUV4cHJlc3Npb24oZGF0YSwgYXN0KTtcblxuXHRyZXR1cm4gZ2VuZXJhdGUoQXN0R2VuZXJhdG9yKGRhdGEpLCB7XG5cdFx0cmV0YWluTGluZXM6IGZhbHNlLFxuXHRcdGNvbXBhY3Q6IGZhbHNlLFxuXHRcdG1pbmlmaWVkOiBmYWxzZSxcblx0XHRjb25jaXNlOiBmYWxzZSxcblx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG5cdH0sIHNvdXJjZSk7XG59XG4iLCJpbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5pbXBvcnQge1xuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Z2V0SWRlbnRpZmllck5hbWUsXG5cdGlzSWRlbnRpZmllclJlYWN0aXZlLFxuXHRtYWtlT2JzZXJ2YWJsZUdldHRlcixcbn0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRhdGEsIGFzdClcbntcblx0bGV0IGlzRnVuY3Rpb25EZWNsYXJhdGlvbiA9IGZhbHNlO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlLmlkO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBwYXRoLm5vZGUuaW5pdDtcblxuXHRcdFx0XHRpZihpc0Z1bmN0aW9uRGVjbGFyYXRpb24gfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblxuXHRcdFx0XHRsZXQgdHlwZSA9IG51bGw7XG5cdFx0XHRcdGlmKFsnQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24nLCAnRnVuY3Rpb25FeHByZXNzaW9uJ10uaW5jbHVkZXModmFsdWUudHlwZSkpIHtcblx0XHRcdFx0XHR0eXBlID0gJ2NvbXB1dGVkJztcblx0XHRcdFx0fSBlbHNlIGlmKGlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIGlkKSkge1xuXHRcdFx0XHRcdHR5cGUgPSAnc3RhdGUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHR5cGUgPSAnZGF0YSc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhgU0VUIFBST1AgJHtuYW1lfSB0byAke3R5cGV9YCwgZGF0YSlcblx0XHRcdFx0ZGF0YVt0eXBlXVtuYW1lXSA9IHZhbHVlO1xuXHRcdCAgICB9LFxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlzRnVuY3Rpb25EZWNsYXJhdGlvbiA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRpc0Z1bmN0aW9uRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aXNGdW5jdGlvbkRlY2xhcmF0aW9uID0gdHJ1ZTtcblxuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGUuaWQ7XG5cdFx0XHRcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXG5cdFx0XHRcdGRhdGEubWV0aG9kc1tuYW1lXSA9IEZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBwYXRoLm5vZGUucGFyYW1zLCBwYXRoLm5vZGUuYm9keSk7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGlzRnVuY3Rpb25EZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHRcdCAgICB9XG5cdFx0fVxuXHR9KTtcbn0iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5pbXBvcnQge1xuXHRpZGVudGlmaWVyLFxuXHRDYWxsRXhwcmVzc2lvbixcblx0QmluYXJ5RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQge1xuXHRnZXRJZGVudGlmaWVyTmFtZSxcblx0aGFuZGxlSWRlbnRpZmllcixcblx0aXNJZGVudGlmaWVyUmVhY3RpdmUsXG5cdGNoZWNrRnVuY3Rpb25Bcmd1bWVudERlY2xhcmF0aW9uXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24oZGF0YSwgYXN0LCBjdHggPSAndGhpcycsIGRpc2FibGVFeGVjdXRpb24gPSBmYWxzZSlcbntcblx0bGV0IG9ic2VydmFibGUgPSBmYWxzZTtcblx0bGV0IGNoYW5nZWQgPSBmYWxzZTtcblx0XG5cdGxldCBGdW5jdGlvbkRlY2xhcmF0aW9uID0gZmFsc2U7XG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdEltcG9ydERlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRkYXRhLmltcG9ydHNbcGF0aC5ub2RlLnNvdXJjZS52YWx1ZV0gPSBwYXRoLm5vZGU7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdEZ1bmN0aW9uRGVjbGFyYXRpb24gPSB0cnVlO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpIHtcblx0XHQgICAgXHRGdW5jdGlvbkRlY2xhcmF0aW9uID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdC8vIG1ha2UgcmVhY3RpdmUgdmFyaWFibGUgYXNzaWdubWVudCBhcyBmdW5jdGlvblxuXHRcdEFzc2lnbm1lbnRFeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgcGF0aC5ub2RlLmxlZnQpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IGFyZ3MgPSBbcGF0aC5ub2RlLnJpZ2h0XTtcblxuXHRcdFx0XHRpZihwYXRoLm5vZGUub3BlcmF0b3IubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdGFyZ3MgPSBbXG5cdFx0XHRcdFx0XHRCaW5hcnlFeHByZXNzaW9uKHBhdGgubm9kZS5vcGVyYXRvclswXSwgcGF0aC5ub2RlLmxlZnQsIHBhdGgubm9kZS5yaWdodClcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKHBhdGgubm9kZS5sZWZ0KTtcblx0XHRcdFx0cGF0aC5yZXBsYWNlV2l0aChcblx0XHRcdFx0XHRDYWxsRXhwcmVzc2lvbihpZGVudGlmaWVyKG5hbWUpLCBhcmdzKVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdG9ic2VydmFibGUgPSB0cnVlO1xuXHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdGNoZWNrRnVuY3Rpb25Bcmd1bWVudERlY2xhcmF0aW9uKGRhdGEsIHBhdGgpO1xuXG5cdFx0XHRcdGxldCBpZGVudGlmaWVyID0gaGFuZGxlSWRlbnRpZmllcihjdHgsIGRhdGEsIHBhdGgpO1xuXHRcdFx0XHRpZighaWRlbnRpZmllcikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG9ic2VydmFibGUgPSBpZGVudGlmaWVyLm9ic2VydmFibGUgPyB0cnVlIDogb2JzZXJ2YWJsZTtcblxuXHRcdFx0XHRpZGVudGlmaWVyLnJlcGxhY2UoZGlzYWJsZUV4ZWN1dGlvbik7XG5cblx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdGFzdCxcblx0XHRvYnNlcnZhYmxlLFxuXHRcdGNoYW5nZWQsXG5cdH1cbn0iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5pbXBvcnQge1xuXHRpZGVudGlmaWVyLFxuXHRDYWxsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQge1xuXHRnZXRJZGVudGlmaWVyTmFtZSxcblx0aXNJZGVudGlmaWVyUmVhY3RpdmUsXG5cdG1ha2VPYnNlcnZhYmxlR2V0dGVyLFxuXHRtYWtlQ29udGV4dGFibGUsXG59IGZyb20gXCIuL2hlbHBlcnNcIjtcblxubGV0IGZ1bmN0aW9uQmxvY2tIYW5kbGluZyA9IGZhbHNlO1xubGV0IGFzc2lnbm1lbnRIYW5kbGluZyA9IGZhbHNlO1xubGV0IHZhcmlhYmxlRGVjbGFyYXRpb25IYW5kbGluZyA9IGZhbHNlO1xubGV0IHNob3VsZEFzc2lnbm1lbnRIYW5kbGUgPSBmYWxzZTtcbmxldCBoYXNGdW5jdGlvblJlYWN0aXZlID0gZmFsc2U7XG5sZXQgbWVtYmVySGFuZGxpbmcgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3RNZXRob2RzIChkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0Ly8gc2F2ZSBpbXBvcnRzXG5cdFx0SW1wb3J0RGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0ZGF0YS5pbXBvcnRzW3BhdGgubm9kZS5zb3VyY2UudmFsdWVdID0gcGF0aC5ub2RlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogVHJhbnNsYXRlIHVzdWFsIHZhcmlhYmxlcyB0byByZWFjdGl2ZVxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cdFx0ICAgICAgICBpZihmdW5jdGlvbkJsb2NrSGFuZGxpbmcpIHtcblx0XHQgICAgICAgIFx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShpZCk7XG5cblx0XHQgICAgICAgIFx0aWYoZGF0YS5zdGF0ZVtuYW1lXSAmJiAhYXNzaWdubWVudEhhbmRsaW5nICYmICFbJ0NhbGxFeHByZXNzaW9uJ10uaW5jbHVkZXMocGF0aC5jb250YWluZXIudHlwZSkpIHtcblx0XHQgICAgICAgIFx0XHRoYXNGdW5jdGlvblJlYWN0aXZlID0gdHJ1ZTtcblx0XHQgICAgICAgIFx0fVxuXG5cdFx0ICAgICAgICBcdGlmKCFbJ0Fzc2lnbm1lbnRFeHByZXNzaW9uJywgJ0NhbGxFeHByZXNzaW9uJ10uaW5jbHVkZXMocGF0aC5jb250YWluZXIudHlwZSkgJiYgIXZhcmlhYmxlRGVjbGFyYXRpb25IYW5kbGluZykge1xuXHRcdCAgICAgICAgXHRcdG1ha2VPYnNlcnZhYmxlR2V0dGVyKGRhdGEsIGlkKTtcblx0XHRcdCAgICAgICAgfVxuXG5cdFx0XHQgICAgICAgIGlmKCF2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcgJiYgIW1lbWJlckhhbmRsaW5nKSB7XG5cdFx0XHQgICAgICAgIFx0bWFrZUNvbnRleHRhYmxlKGRhdGEsIGlkKTtcblx0XHRcdCAgICAgICAgfVxuXG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aCkge1xuXHRcdCAgICAgICAgLy8gY29uc29sZS5sb2coXCJJZGVudGlmaWVyIGV4aXQgY2FsbGVkXCIsIHBhdGgubm9kZS5uYW1lKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0XG5cdFx0Q2FsbEV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0bWVtYmVySGFuZGxpbmcgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXHRcdFx0XHRtZW1iZXJIYW5kbGluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0TWVtYmVyRXhwcmVzc2lvbjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRtZW1iZXJIYW5kbGluZyA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cdFx0XHRcdG1lbWJlckhhbmRsaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHR2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXHRcdFx0XHR2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIE1ha2UgXG5cdFx0IHYgPSB2ICsgMVxuXHRcdCBUb1xuXHRcdCB2KHYoKSArIDEpXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHRFeHByZXNzaW9uU3RhdGVtZW50OiB7XG5cdFx0XHRleGl0KHBhdGgpIHtcblx0XHRcdFx0aWYocGF0aC5ub2RlLmV4cHJlc3Npb24udHlwZSA9PT0gJ0Fzc2lnbm1lbnRFeHByZXNzaW9uJykge1xuXHRcdFx0XHRcdGxldCBleHByZXNzaW9uID0gcGF0aC5ub2RlLmV4cHJlc3Npb247XG5cdFx0XHRcdFx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShleHByZXNzaW9uLmxlZnQpO1xuXHRcdFx0XHRcdHBhdGgucmVwbGFjZVdpdGgoXG5cdFx0XHRcdFx0XHRDYWxsRXhwcmVzc2lvbihpZGVudGlmaWVyKG5hbWUpLCBbZXhwcmVzc2lvbi5yaWdodF0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0QXNzaWdubWVudEV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0YXNzaWdubWVudEhhbmRsaW5nID0gdHJ1ZTtcblx0XHRcdFx0aWYoaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgcGF0aC5ub2RlLmxlZnQpKSB7XG5cdFx0XHRcdFx0c2hvdWxkQXNzaWdubWVudEhhbmRsZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRleGl0KHBhdGgpIHtcblx0XHRcdFx0YXNzaWdubWVudEhhbmRsaW5nID0gZmFsc2U7XG5cdFx0XHRcdHNob3VsZEFzc2lnbm1lbnRIYW5kbGUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZSBmdW5jdGlvblxuXHRcdCAqIEFkZCB0aGVtIHRvIG1ldGhvZHMgYW5kIGNvbXB1dGVkIHByb3BzXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHRCbG9ja1N0YXRlbWVudDoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRpZihwYXRoLnBhcmVudC50eXBlID09PSAnRnVuY3Rpb25EZWNsYXJhdGlvbicpIHtcblx0XHQgICAgXHRcdGZ1bmN0aW9uQmxvY2tIYW5kbGluZyA9IHRydWU7XG5cdFx0ICAgIFx0fVxuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpIHtcblx0XHQgICAgXHRpZighZnVuY3Rpb25CbG9ja0hhbmRsaW5nIHx8IHBhdGgucGFyZW50LnR5cGUgIT09ICdGdW5jdGlvbkRlY2xhcmF0aW9uJykge1xuXHRcdCAgICBcdFx0cmV0dXJuO1xuXHRcdCAgICBcdH1cblxuXHRcdCAgICBcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUocGF0aC5jb250YWluZXIuaWQpO1xuXHRcdCAgICBcdGlmKGhhc0Z1bmN0aW9uUmVhY3RpdmUpIHtcblx0XHQgICAgXHRcdGRhdGEuY29tcHV0ZWRbbmFtZV0gPSBwYXRoLm5vZGU7XG5cdFx0ICAgIFx0fSBlbHNlIHtcblx0XHQgICAgXHRcdGRhdGEubWV0aG9kc1tuYW1lXSA9IHBhdGguY29udGFpbmVyO1xuXHRcdCAgICBcdH1cblxuXHRcdCAgICBcdGhhc0Z1bmN0aW9uUmVhY3RpdmUgPSBmYWxzZTtcblx0XHQgICAgXHRmdW5jdGlvbkJsb2NrSGFuZGxpbmcgPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkYXRhLCBhc3QpXG57XG5cblx0dHJhdmVyc2UoYXN0LCBjb2xsZWN0TWV0aG9kcyhkYXRhKSk7XG59IiwiaW1wb3J0IHsgcGFyc2VBdHRycyB9IGZyb20gJy4vYXR0cnMnO1xuaW1wb3J0IHsgXyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgcGFyc2VTdGF0ZW1lbnQsIHBhcnNlTG9vcCwgcGFyc2VTbG90IH0gZnJvbSAnLi9wYXJzZUZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBleHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcblxuZXhwb3J0IHZhciBISUQgPSAwO1xuXG5leHBvcnQgY29uc3QgaXNOb25QaHJhc2luZ1RhZyA9IFtcblx0J2FkZHJlc3MnLCAnYXJ0aWNsZScsICdhc2lkZScsICdiYXNlJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdjYXB0aW9uJywgJ2NvbCcsICdjb2xncm91cCcsXG5cdCdkZCcsICdkZXRhaWxzJywgJ2RpYWxvZycsICdkaXYnLCAnZGwnLCAnZHQnLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9vdGVyJyxcblx0J2Zvcm0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZCcsICdoZWFkZXInLCAnaGdyb3VwJywgJ2hyJywgJ2h0bWwnLCAnbGVnZW5kJyxcblx0J2xpJywgJ21lbnVpdGVtJywgJ21ldGEnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ3BhcmFtJywgJ3JwJywgJ3J0JywgJ3NvdXJjZScsICdzdHlsZScsICdzdW1tYXJ5Jyxcblx0J3Rib2R5JywgJ3RkJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpdGxlJywgJ3RyJywgJ3RyYWNrJywgJ3RlbXBsYXRlJywgJ2JyJywgJ3NwYW4nLCAncCcsICdQYXJzZXJCb2R5JywgJ3Nsb3QnXG5dO1xuXG52YXIgSUZfU1RBVEVNRU5UX1NUQVJURUQgPSBmYWxzZTtcblxuLyoqXG4gKiBAcmV0dXJuIEludGVyZmFjZSB7XG4gKiAgIENvZGVcbiAqICAgTGVuZ3RoXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIG1ha2VMb29wKGNvbmRpdGlvbiwgYXJncywgY29tcG9uZW50VGFnLCByZXR1cm5PYmplY3QpXG57XG5cdGlmKHJldHVybk9iamVjdCkge1xuXHRcdHJldHVybiBge1xuXHRcdFx0X3Q6ICdsb29wJyxcblx0XHRcdGM6ICR7IGNvbmRpdGlvbiB9LFxuXHRcdFx0Zm46ICgkeyBhcmdzIH0pID0+IHsgcmV0dXJuICR7IGNvbXBvbmVudFRhZyB9OyB9LFxuXHRcdH1gXG5cdH1cblxuXHRyZXR1cm4gYGxvb3AoJHsgY29uZGl0aW9uIH0sICgkeyBhcmdzIH0pID0+IHsgcmV0dXJuICR7IGNvbXBvbmVudFRhZyB9OyB9KWBcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50Q29kZSh0YWcsIG9wdGlvbnMsIGNoaWxkcmVuID0gW10sIHJldHVybk9iamVjdCA9IGZhbHNlKVxue1xuXHRpZih0YWcgPT09ICd0ZW1wbGF0ZScpIHtcblx0XHRyZXR1cm4gYFskeyBjaGlsZHJlbi5qb2luKCcsJykgfV1gO1xuXHR9XG5cblx0aWYocmV0dXJuT2JqZWN0KSB7XG5cdFx0cmV0dXJuIGB7XG5cdFx0XHRfdDogJ2gnLFxuXHRcdFx0dDogJyR7IHRhZyB9Jyxcblx0XHRcdG86ICR7IG9wdGlvbnMgfSxcblx0XHRcdGM6IFskeyBjaGlsZHJlbi5qb2luKCcsJykgfV0sXG5cdFx0fWBcblx0fVxuXHRcblx0cmV0dXJuIGBoKCckeyB0YWcgfScsICR7IG9wdGlvbnMgfSwgWyR7IGNoaWxkcmVuLmpvaW4oJywnKSB9XSlgO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRTaXplKHRhZywgb3B0aW9ucywgY2hpbGRyZW4gPSBbXSlcbntcblx0aWYodGFnID09PSAndGVtcGxhdGUnKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuLmxlbmd0aDtcblx0fVxuXG5cdHJldHVybiAxO1xufVxuXG4vKipcbiAqIEByZXR1cm4gSW50ZXJmYWNlIHtcbiAqICAgdmFsdWVcbiAqICAgc3RhdGVmdWxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaGFuZGxlVGFnKHRhZywgb3B0aW9ucywgY2hpbGRyZW4gPSBbXSwgcmV0dXJuT2JqZWN0KVxue1xuXHRyZXR1cm4gZ2V0Q29tcG9uZW50Q29kZSh0YWcsIG9wdGlvbnMsIGNoaWxkcmVuLCByZXR1cm5PYmplY3QpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVNsb3RBdHRycyhub2RlKVxue1xuXHRsZXQgbmFtZSA9ICdkZWZhdWx0Jztcblx0bGV0IHRhZyA9IG51bGw7XG5cblx0aWYobm9kZS50YWcgPT09ICdzbG90Jykge1xuXHRcdG5hbWUgPSBub2RlLmF0dHJzWyduYW1lJ10gfHwgJ2RlZmF1bHQnO1xuXHRcdHRhZyA9IG5vZGUuYXR0cnNbJ3RhZyddIHx8ICdzcGFuJztcblx0fVxuXG5cdGlmKHRhZyAhPT0gbnVsbCkge1xuXHRcdHRhZyA9IGAnJHt0YWd9J2A7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdG5hbWUsXG5cdFx0dGFnLFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlXG57XG5cdGNvbnN0cnVjdG9yKHsgdGFnID0gbnVsbCwgYXR0cnMgPSBudWxsLCBjaGlsZHJlbiA9IFtdIH0pXG5cdHtcblx0XHQvLyBsZXQgeyBkeW5hbWljT3B0aW9ucywgc3RhdGljT3B0aW9ucyB9ID0gcGFyc2VPcHRpb25zKGF0dHJzKTtcblxuXHRcdHRoaXMuaGlkID0gKytISUQ7XG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy5hdHRycyA9IGF0dHJzO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0XHRcblx0XHR0aGlzLnByZXZTaWJsaW5nID0gbnVsbDtcblx0XHR0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdFx0Ly8gaWZcblx0XHR0aGlzLmlmX3N0YXRlbWVudCA9IGZhbHNlO1xuXHRcdHRoaXMuaW5kZXggPSAwO1xuXHR9XG5cblx0Z2V0IGlzQ29tcG9uZW50KClcblx0e1xuXHRcdHJldHVybiAhaXNOb25QaHJhc2luZ1RhZy5pbmNsdWRlcyh0aGlzLnRhZyk7XG5cdH1cblxuXHRnZXQgaXNJbnNpZGVDb21wb25lbnQoKVxuXHR7XG5cdFx0bGV0IG5vZGUgPSB0aGlzO1xuXHRcdGxldCBpID0gMDtcblx0XHRsZXQgaXNJbnNpZGVDb21wb25lbnQgPSBmYWxzZTtcblxuXHRcdHdoaWxlKG5vZGUpIHtcblx0XHRcdGkrKztcblxuXHRcdFx0aWYobm9kZS5pc0NvbXBvbmVudCkge1xuXHRcdFx0XHRpc0luc2lkZUNvbXBvbmVudCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQ7XG5cblx0XHRcdGlmKGkgPiAxMDApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdMb29wIHByb2JsZW0nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaXNJbnNpZGVDb21wb25lbnQ7XG5cdH1cblxuXHRnZXQgaXNTbG90KClcblx0e1xuXHRcdHJldHVybiB0aGlzLnRhZyA9PT0gJ3Nsb3QnO1xuXHR9XG5cblx0YXBwZW5kQ2hpbGQobm9kZSlcblx0e1xuXHRcdG5vZGUuaW5kZXggPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcblx0XHRub2RlLnBhcmVudCA9IHRoaXM7XG5cdFx0dGhpcy5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuXHR9XG5cblx0Z2V0SW5kZXhQYXRoKClcblx0e1xuXHRcdGxldCBpbmRleGVzID0gW107XG5cdFx0bGV0IG5vZGUgPSB0aGlzO1xuXHRcdGxldCBpID0gMDtcblxuXHRcdHdoaWxlKG5vZGUpIHtcblx0XHRcdGkrKztcblxuXHRcdFx0aW5kZXhlcy5wdXNoKG5vZGUuaW5kZXgpO1xuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50O1xuXG5cdFx0XHRpZihpID4gMTApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdMb29wIHByb2JsZW0nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpbmRleGVzLnJldmVyc2UoKTtcblxuXHRcdHJldHVybiBpbmRleGVzO1xuXHR9XG5cblx0c2V0U2libGluZ3MoKVxuXHR7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0aGlzLmNoaWxkcmVuW2kgKyAxXSkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuW2ldLm5leHRTaWJsaW5nID0gdGhpcy5jaGlsZHJlbltpICsgMV07XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW5baSArIDFdLnByZXZTaWJsaW5nID0gdGhpcy5jaGlsZHJlbltpXTtcblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy5jaGlsZHJlbltpXSBpbnN0YW5jZW9mIE5vZGUpIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbltpXS5zZXRTaWJsaW5ncygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldFNsb3RzKGluZGV4ZXMgPSBbXSwgaXNVbmRlckNvbXBvbmVudCA9IGZhbHNlKVxuXHR7XG5cdFx0bGV0IHNsb3RzID0ge307XG5cblx0XHRpZih0aGlzLmlzQ29tcG9uZW50KSB7XG5cdFx0XHRpc1VuZGVyQ29tcG9uZW50ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBub2RlID0gdGhpcy5jaGlsZHJlbltpXTtcblx0XHRcdGxldCBub2RlSW5kZXhlcyA9IGluZGV4ZXMuY29uY2F0KFtpXSk7XG5cblx0XHRcdGlmKG5vZGUgaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRcdHNsb3RzID0gT2JqZWN0LmFzc2lnbihzbG90cywgbm9kZS5nZXRTbG90cyhub2RlSW5kZXhlcywgaXNVbmRlckNvbXBvbmVudCkpO1xuXG5cdFx0XHRcdGlmKG5vZGUuaXNTbG90ICYmICFpc1VuZGVyQ29tcG9uZW50KSB7XG5cdFx0XHRcdFx0bGV0IG5hbWUgPSBub2RlLmF0dHJzWyduYW1lJ10gfHwgJ2RlZmF1bHQnO1xuXHRcdFx0XHRcdGxldCB0YWcgPSBub2RlLmF0dHJzWyd0YWcnXSB8fCAnc3Bhbic7XG5cdFx0XHRcdFx0bGV0IHN0YXJ0SW5kZXggPSAwO1xuXG5cdFx0XHRcdFx0aWYodGFnID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRzdGFydEluZGV4ID0gaTtcblx0XHRcdFx0XHRcdG5vZGVJbmRleGVzLnBvcCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnVEFBQUFBRycsIG5vZGVJbmRleGVzLCBub2RlLmF0dHJzWyd0YWcnXSlcblx0XHRcdFx0XHRzbG90c1tuYW1lXSA9IHtcblx0XHRcdFx0XHRcdHBhdGg6IG5vZGVJbmRleGVzLFxuXHRcdFx0XHRcdFx0dGFnLFxuXHRcdFx0XHRcdFx0aW5kZXg6IHN0YXJ0SW5kZXgsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzbG90cztcblx0fVxuXG5cdHRvQVNUKGNvbnRleHQgPSBudWxsLCBoeWRyYXRlID0gZmFsc2UsIGlzQ2FsbEV4cHJlc3Npb24gPSBmYWxzZSlcblx0e1xuXHRcdGxldCBjb2RlID0gJyc7XG5cdFx0bGV0IGNoaWxkcmVuID0gW107XG5cdFx0bGV0IHNob3VsZEh5ZGFyYXRlID0gZmFsc2U7XG5cdFx0bGV0IHNob3VsZFNsb3RzSHlkcmF0ZSA9IGZhbHNlO1xuXHRcdGxldCByZW5kZXIgPSAhaHlkcmF0ZTtcblx0XHQvLyBsZXQgaXNDYWxsRXhwcmVzc2lvbiA9IGZhbHNlO1xuXG5cdFx0bGV0IFN0YXRlbWVudCA9IHBhcnNlU3RhdGVtZW50KHRoaXMpO1xuXHRcdGxldCBTbG90ID0gcGFyc2VTbG90KHRoaXMpO1xuXHRcdGxldCBMb29wID0gcGFyc2VMb29wKHRoaXMpO1xuXG5cdFx0aWYoU3RhdGVtZW50LmlzKSB7XG5cdFx0XHRpc0NhbGxFeHByZXNzaW9uID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRsZXQgc2xvdHMgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIFRyYW5zbGF0ZSBjaGlsZHJlbiB0byBoeXBlcnNjcmlwdFxuXHRcdCAqIEBwYXJhbSAge1t0eXBlXX0gdmFyIGkgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuXHRcdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgIFtkZXNjcmlwdGlvbl1cblx0XHQgKi9cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG5cblx0XHRcdGxldCB7IHZhbHVlLCBzdGF0ZWZ1bGwgfSA9IGNoaWxkLnRvQVNUKGNvbnRleHQsIGh5ZHJhdGUsIGlzQ2FsbEV4cHJlc3Npb24pO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1tjaGlsZF0nLCBjaGlsZCwgc3RhdGVmdWxsKTtcblx0XHRcdGlmKHN0YXRlZnVsbCkge1xuXHRcdFx0XHRzaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFBhcnNlIHNsb3RzIGlmIGNvbXBvbmVudFxuXHRcdFx0aWYodGhpcy5pc0NvbXBvbmVudCkge1xuXHRcdFx0XHRsZXQgeyBuYW1lIH0gPSBwYXJzZVNsb3RBdHRycyhjaGlsZCk7XG5cblx0XHRcdFx0aWYoIXNsb3RzW25hbWVdKSB7XG5cdFx0XHRcdFx0c2xvdHNbbmFtZV0gPSBbXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNsb3RzW25hbWVdLnB1c2godmFsdWUpO1xuXG5cdFx0XHRcdGlmKHZhbHVlICE9PSBfKSB7XG5cdFx0XHRcdFx0c2hvdWxkU2xvdHNIeWRyYXRlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSWYgbm90IGFwcGVuZCBjaGlsZFxuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblxuXHRcdGxldCB7IG9wdGlvbnMsIHNob3VsZE9wdGlvbnNIeWRyYXRlIH0gPSBwYXJzZUF0dHJzKGNvbnRleHQsIHRoaXMuYXR0cnMsIGh5ZHJhdGUpO1xuXHRcdFxuXHRcdGlmKHNob3VsZE9wdGlvbnNIeWRyYXRlKSB7XG5cdFx0XHRzaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxlIHNsb3RzIGZvciBDb21wb25lbnQgY2hpbGRyZW5cblx0XHRpZih0aGlzLmlzQ29tcG9uZW50ICYmIE9iamVjdC5rZXlzKHNsb3RzKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSAnJztcblxuXHRcdFx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcblx0XHRcdFx0dmFsdWUgKz0gYCcke2tleX0nOiBbJHsgc2xvdHNba2V5XS5qb2luKCcsJykgfV0sYFxuXHRcdFx0fVxuXG5cdFx0XHRpZigoaHlkcmF0ZSAmJiBzaG91bGRTbG90c0h5ZHJhdGUpIHx8IHJlbmRlcikge1xuXHRcdFx0XHRvcHRpb25zICs9IGAkc2xvdHM6IHsgJHsgdmFsdWUgfSB9LGA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0c2hvdWxkSHlkYXJhdGUgPSB0aGlzLmlzQ29tcG9uZW50IHx8IHNob3VsZEh5ZGFyYXRlO1xuXG5cdFx0Ly8gSXMgY29tcG9uZW50IHN0YXRlZnVsXG5cdFx0aWYoaHlkcmF0ZSAmJiBzaG91bGRPcHRpb25zSHlkcmF0ZSkge1xuXHRcdFx0b3B0aW9ucyArPSBgX3M6IHRydWUsYDtcblx0XHR9XG5cblx0XHRvcHRpb25zID0gYHske29wdGlvbnN9fWA7XG5cblx0XHRsZXQgY29tcG9uZW50VGFnID0gZ2V0Q29tcG9uZW50Q29kZSh0aGlzLnRhZywgb3B0aW9ucywgY2hpbGRyZW4sIGh5ZHJhdGUpO1xuXG5cdFx0Ly8gTWFrZSBsb29wIGZyb20gY29tcG9uZW50XG5cdFx0aWYoTG9vcC5pcykge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGV4cHJlc3Npb24oY29udGV4dCwgTG9vcC5jb25kaXRpb24sIGZhbHNlKTtcblx0XHRcdFxuXHRcdFx0aWYoY29uZGl0aW9uLnN0YXRlZnVsbCkge1xuXHRcdFx0XHRzaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbXBvbmVudFRhZyA9IG1ha2VMb29wKGNvbmRpdGlvbi52YWx1ZSwgTG9vcC5hcmdzLCBjb21wb25lbnRUYWcsIGh5ZHJhdGUpXG5cdFx0fVxuXHRcdC8vIFN0YXRlbWVudCByZW5kZXJcblx0XHRpZihTdGF0ZW1lbnQuaXMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBleHByZXNzaW9uKGNvbnRleHQsIFN0YXRlbWVudC5jb25kaXRpb24sIGZhbHNlKTtcblxuXHRcdFx0aWYoU3RhdGVtZW50LnN0YXJ0KSB7XG5cdFx0XHRcdGNvZGUgKz0gYHN0YXRlbWVudChgO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgbGVuZ3RoID0gZ2V0Q29tcG9uZW50U2l6ZSh0aGlzLnRhZywgb3B0aW9ucywgY2hpbGRyZW4pO1xuXG5cdFx0XHRjb2RlICs9IGAgJHsgY29uZGl0aW9uLnZhbHVlIH0sICR7IGxlbmd0aCB9LCAoaCkgPT4geyByZXR1cm4gJHsgY29tcG9uZW50VGFnIH0gfWA7XG5cblx0XHRcdGlmKFN0YXRlbWVudC5lbmQpIHtcblx0XHRcdFx0Y29kZSArPSBgKWA7XG5cdFx0XHR9XG5cdFx0Ly8gU2xvdCByZW5kZXJcblx0XHR9IGVsc2UgaWYoU2xvdC5pcykge1xuXHRcdFx0bGV0IHsgbmFtZSwgdGFnIH0gPSBwYXJzZVNsb3RBdHRycyh0aGlzKTtcblxuXHRcdFx0aWYoU2xvdC5jYWxsRXhwcmVzc2lvbikge1xuXHRcdFx0XHRsZXQgYXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmF0dHJzKTtcblx0XHRcdFx0XG5cdFx0XHRcdGRlbGV0ZSBhdHRycy5uYW1lO1xuXHRcdFx0XHRkZWxldGUgYXR0cnMudGFnO1xuXG5cdFx0XHRcdGNvZGUgKz0gYHNsb3QoY3R4LCBoLCAnJHsgbmFtZSB9JywgJHsgdGFnIH0sICR7IEpTT04uc3RyaW5naWZ5KGF0dHJzKSB9LCBbJHsgY2hpbGRyZW4uam9pbignLCcpIH1dKWA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb2RlICs9IGAkeyBjaGlsZHJlbi5qb2luKCcsJykgfWA7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvZGUgKz0gY29tcG9uZW50VGFnO1xuXHRcdH1cblxuXHRcblx0XHQvLyBjb25zb2xlLmxvZyhoeWRyYXRlLCBzaG91bGRIeWRhcmF0ZSwgaXNDYWxsRXhwcmVzc2lvbiwgY29kZSlcblx0XHRpZihoeWRyYXRlICYmICFzaG91bGRIeWRhcmF0ZSAmJiAhaXNDYWxsRXhwcmVzc2lvbikge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmFsdWU6IF8sXG5cdFx0XHRcdHN0YXRlZnVsbDogZmFsc2UsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogY29kZSxcblx0XHRcdHN0YXRlZnVsbDogc2hvdWxkSHlkYXJhdGUsXG5cdFx0fTtcblx0fVxufSIsImltcG9ydCB7IHBhcnNlT3B0aW9uVmFsdWUgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCB7IF8gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dE5vZGVcbntcblx0Y29uc3RydWN0b3IodGV4dClcblx0e1xuXHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdH1cblxuXHR0b0FTVChjb250ZXh0ID0gbnVsbCwgaHlkcmF0ZSA9IGZhbHNlLCBpc0NhbGxFeHByZXNzaW9uID0gZmFsc2UpXG5cdHtcblx0XHRsZXQgeyB2YWx1ZSwgc3RhdGVmdWxsIH0gPSBwYXJzZU9wdGlvblZhbHVlKGNvbnRleHQsICdfdCcsIHRoaXMudGV4dCk7XG5cdFx0Ly8gY29uc29sZS5sb2coYHQoJHt0aGlzLnRleHR9KWAsIHZhbHVlLCBzdGF0ZWZ1bGwpXG5cblx0XHQvLyBjb25zb2xlLmxvZyh2YWx1ZSwgdmFsdWUuc3Vic3RyaW5nKDAsIDIpKVxuXHRcdFxuXG5cdFx0aWYoaHlkcmF0ZSAmJiAhc3RhdGVmdWxsICYmICFpc0NhbGxFeHByZXNzaW9uKSB7XG5cdFx0XHR2YWx1ZSA9IF87XG5cdFx0fVxuXG5cdFx0aWYoaHlkcmF0ZSkge1xuXHRcdFx0dmFsdWUgPSBge1xuXHRcdFx0XHRfdDogJ3QnLFxuXHRcdFx0XHR0OiAkeyB2YWx1ZSB9XG5cdFx0XHR9YFxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZSxcblx0XHRcdHN0YXRlZnVsbCxcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgeyBleHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcblxuY29uc3QgQXR0cnNNYXAgPSB7XG5cdCdzdHlsZSc6ICdzdGF0aWNTdHlsZScsXG5cdCdjbGFzcyc6ICdzdGF0aWNDbGFzcycsXG5cdCc6c3R5bGUnOiAnZHluYW1pY1N0eWxlJyxcblx0JzpjbGFzcyc6ICdkeW5hbWljQ2xhc3MnLFxufTtcblxuY29uc3QgSFRNTEF0dHJpYnV0ZXMgPSBbJ2lkJywgJ25hbWUnLCAndmFsdWUnLCAncGxhY2Vob2xkZXInXTtcblxuLyoqXG4gKiBUaGVyZSBhcmUgc29tZSB0eXBlIG9mIGV4cHJlc3Npb25zIChqYXZhc2NyaXB0IGNvZGUpXG4gKiAxLiBAY2xpY2s9XCJleHByXCIgLT4gX21ldGhvZHMuc3VibWl0Rm9ybSgpO1xuICogMi4gOnN0eWxlPVwiZXhwclwiIC0+IFsndGVzdCcsIF9zdGF0ZS5zb21lLCBfY29tcHV0ZWQuc29tZV0gIHx8ICBbJ3Rlc3QnLCBfZGF0YS5wYWRkaW5nVG9wXVxuICogMy4gOmNsYXNzPVwiZXhwclwiIC0+IHsgaXMtbG9hZGluZzogX3N0YXRlLmxvYWRpbmcgfSAgfHwgIHsgaXMtcmVkOiBfZGF0YS5yZWQgfVxuICogNC4gdi1pZj1cImV4cHJcIiAtPiBfZGF0YS50eXBlID09PSAndHlwZScgIHx8ICBfc3RhdGUudmlzaWJsZSA9PT0gdHJ1ZVxuICpcbiAqIEluIHJlbmRlciBmdW5jdGlvbiBzaG91bGQgYmUgXG4gKiAxLiBfbWV0aG9kcy5zdWJtaXRGb3JtKCk7XG4gKiAyLiBzdHlsZShbJ3Rlc3QnLCBfc3RhdGUuc29tZSgpLCBfY29tcHV0ZWQuc29tZSgpIF0pICB8fCAgWyd0ZXN0JywgX2RhdGEucGFkZGluZ1RvcF0gIFNIT1VMRCBOT1QgQkUgQ0FMTEVEIEJFQ0FVU0UgUkVBQ1RJVkVcbiAqIDMuIFxuICogNC4gIF9kYXRhLnR5cGUgIHx8ICAoKSA9PiB7IHJldHVybiBfc3RhdGUudmlzaWJsZSgpIH0gT1IgX3N0YXRlLnZpc2libGVcbiAqIFxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZnVuY3Rpb24gcGFyc2VPcHRpb25WYWx1ZShjb250ZXh0LCBrZXksIHZhbHVlKVxue1xuXHRsZXQgc3RhdGVmdWxsID0gZmFsc2U7XG5cdGxldCBrZWVwT2JzZXJ2YXRpb24gPSBmYWxzZTtcblx0bGV0IGlzRXhwcmVzc2lvbiA9IGZhbHNlO1xuXG5cdGlmKGtleVswXSA9PT0gJyQnKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlLFxuXHRcdFx0c3RhdGVmdWxsLFxuXHRcdH1cblx0fVxuXG5cdGlmKGtleVswXSA9PT0gJ0AnKSB7XG5cdFx0aXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0XHRzdGF0ZWZ1bGwgPSB0cnVlO1xuXHR9XG5cblx0aWYoa2V5WzBdID09PSAnOicpIHtcblx0XHRpc0V4cHJlc3Npb24gPSB0cnVlO1xuXHR9XG5cblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdGtlZXBPYnNlcnZhdGlvbiA9IHRydWU7XG5cdH1cblxuXHRpZihrZXlbMF0gPT09ICdfJykge1xuXHRcdHZhbHVlID0gJ2AnICsgdmFsdWUucmVwbGFjZSgve3soKD86KD8hKH19KSkuKSspfX0vZywgJyR7JDF9JykgKyAnYCc7XG5cdFx0a2VlcE9ic2VydmF0aW9uID0gZmFsc2U7XG5cdFx0aXNFeHByZXNzaW9uID0gdHJ1ZTtcblx0fVxuXG5cdGlmKCFpc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IGAnJHt2YWx1ZX0nYCxcblx0XHRcdHN0YXRlZnVsbDogZmFsc2UsXG5cdFx0fVxuXHR9XG5cblx0bGV0IGV4cCA9IGV4cHJlc3Npb24oY29udGV4dCwgdmFsdWUsIGtlZXBPYnNlcnZhdGlvbik7XG5cdFxuXHR2YWx1ZSA9IGV4cC52YWx1ZTtcblxuXHRpZighc3RhdGVmdWxsICYmIGV4cC5zdGF0ZWZ1bGwpIHtcblx0XHRzdGF0ZWZ1bGwgPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR2YWx1ZSxcblx0XHRzdGF0ZWZ1bGwsXG5cdH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlT3B0aW9uS2V5KGtleSwgdmFsdWUpXG57XG5cdGlmKEF0dHJzTWFwW2tleV0pIHtcblx0XHRyZXR1cm4gQXR0cnNNYXBba2V5XTtcblx0fSBlbHNlIGlmKGtleVswXSA9PT0gJ0AnKSB7XG5cdFx0cmV0dXJuIGtleS5yZXBsYWNlKC9AL2csICdvbicpO1xuXHR9XG5cblx0cmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gcGFyc2VTdHlsZXMoc3RyaW5nKVxue1xuXHRsZXQgc3R5bGVzID0ge307XG5cdGxldCBwYWlycyA9IHN0cmluZy5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCc7Jyk7XG5cdFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRtcCA9IHBhaXJzW2ldLnNwbGl0KCc6Jyk7XG5cdFx0aWYodG1wLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0c3R5bGVzW3RtcFswXV0gPSB0bXBbMV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVPcHRpb25LZXkodmFyaWFibGUpXG57XG5cdGlmKHZhcmlhYmxlLm1hdGNoKC9cXC0vZykpIHtcblx0XHR2YXJpYWJsZSA9IGAnJHt2YXJpYWJsZX0nYDtcblx0fVxuXG5cdHJldHVybiB2YXJpYWJsZTtcbn1cblxuXG4vKipcbiAqIE1ha2UgYSBtYXAgYW5kIHJldHVybiBhIGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhIGtleVxuICogaXMgaW4gdGhhdCBtYXAuXG4gKi9cbmZ1bmN0aW9uIG1ha2VNYXAgKFxuICBzdHIsXG4gIGV4cGVjdHNMb3dlckNhc2Vcbikge1xuICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGxpc3QgPSBzdHIuc3BsaXQoJywnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZVxuICAgID8gZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXTsgfVxuICAgIDogZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbn1cblxuLyoqXG4gKiBbZHluYW1pY0FyZ0F0dHJpYnV0ZSBkZXNjcmlwdGlvbl1cbiAqIEB0eXBlIHtSZWdFeHB9XG4gKi9cbnZhciBkeW5hbWljQXJnQXR0cmlidXRlID0gL14oXFxAfFxcOikvZztcbnZhciBldmVudEFyZ0F0dHJpYnV0ZSA9IC9eXFxAL2c7XG5cbnZhciBzdGF0aWNBcmdzTWFwID0ge1xuXHRjbGFzczogJ3N0YXRpY0NsYXNzJyxcblx0c3R5bGU6ICdzdGF0aWNTdHlsZScsXG59XG5cbnZhciBpc0F0dHIgPSBtYWtlTWFwKFxuXHQnYWNjZXB0LGFjY2VwdC1jaGFyc2V0LGFjY2Vzc2tleSxhY3Rpb24sYWxpZ24sYWx0LGFzeW5jLGF1dG9jb21wbGV0ZSwnICtcblx0J2F1dG9mb2N1cyxhdXRvcGxheSxhdXRvc2F2ZSxiZ2NvbG9yLGJvcmRlcixidWZmZXJlZCxjaGFsbGVuZ2UsY2hhcnNldCwnICtcblx0J2NoZWNrZWQsY2l0ZSxjbGFzcyxjb2RlLGNvZGViYXNlLGNvbG9yLGNvbHMsY29sc3Bhbixjb250ZW50LGh0dHAtZXF1aXYsJyArXG5cdCduYW1lLGNvbnRlbnRlZGl0YWJsZSxjb250ZXh0bWVudSxjb250cm9scyxjb29yZHMsZGF0YSxkYXRldGltZSxkZWZhdWx0LCcgK1xuXHQnZGVmZXIsZGlyLGRpcm5hbWUsZGlzYWJsZWQsZG93bmxvYWQsZHJhZ2dhYmxlLGRyb3B6b25lLGVuY3R5cGUsbWV0aG9kLGZvciwnICtcblx0J2Zvcm0sZm9ybWFjdGlvbixoZWFkZXJzLGhlaWdodCxoaWRkZW4saGlnaCxocmVmLGhyZWZsYW5nLGh0dHAtZXF1aXYsJyArXG5cdCdpY29uLGlkLGlzbWFwLGl0ZW1wcm9wLGtleXR5cGUsa2luZCxsYWJlbCxsYW5nLGxhbmd1YWdlLGxpc3QsbG9vcCxsb3csJyArXG5cdCdtYW5pZmVzdCxtYXgsbWF4bGVuZ3RoLG1lZGlhLG1ldGhvZCxHRVQsUE9TVCxtaW4sbXVsdGlwbGUsZW1haWwsZmlsZSwnICtcblx0J211dGVkLG5hbWUsbm92YWxpZGF0ZSxvcGVuLG9wdGltdW0scGF0dGVybixwaW5nLHBsYWNlaG9sZGVyLHBvc3RlciwnICtcblx0J3ByZWxvYWQscmFkaW9ncm91cCxyZWFkb25seSxyZWwscmVxdWlyZWQscmV2ZXJzZWQscm93cyxyb3dzcGFuLHNhbmRib3gsJyArXG5cdCdzY29wZSxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc2hhcGUsc2l6ZSx0eXBlLHRleHQscGFzc3dvcmQsc2l6ZXMsc3BhbiwnICtcblx0J3NwZWxsY2hlY2ssc3JjLHNyY2RvYyxzcmNsYW5nLHNyY3NldCxzdGFydCxzdGVwLHN0eWxlLHN1bW1hcnksdGFiaW5kZXgsJyArXG5cdCd0YXJnZXQsdGl0bGUsdHlwZSx1c2VtYXAsdmFsdWUsd2lkdGgsd3JhcCdcbik7XG5cbnZhciBpc0V2ZW50QXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdHJldHVybiAoXG5cdFx0bmFtZS5tYXRjaChldmVudEFyZ0F0dHJpYnV0ZSlcblx0KTtcbn1cblxudmFyIGlzQ1NTQXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdHJldHVybiAoXG5cdFx0bmFtZS5tYXRjaCgvXlxcOj8oc3R5bGV8Y2xhc3MpJC9nKVxuXHQpO1xufVxuXG52YXIgaXNSZW5kZXJhYmxlQXR0ciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdHJldHVybiAoXG5cdGlzQXR0cihuYW1lKSB8fFxuXHRcdG5hbWUuaW5kZXhPZignZGF0YS0nKSA9PT0gMCB8fFxuXHRcdG5hbWUuaW5kZXhPZignYXJpYS0nKSA9PT0gMFxuXHQpXG59O1xuXG52YXIgaXNBcmdOb3RIeWRyYXRhYmxlID0gZnVuY3Rpb24gKHR5cGUsIGFyZykge1xuXHRpZih0eXBlID09PSBudWxsKSB7XG5cdFx0dHlwZSA9IGFyZztcblx0fVxuXHRjb25zb2xlLmxvZyh0eXBlLCBhcnQpXG5cblx0cmV0dXJuICEoXG5cdFx0WydzdGF0aWNDbGFzcycsICdzdGF0aWNDbGFzcycsICdwcm9wcycsICdvbiddLmluY2x1ZGVzKHR5cGUpXG5cdClcbn07XG5cbnZhciBub3JtYWxpemVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSlcbntcblx0aWYodmFsdWUgPT09ICcnKSB7XG5cdFx0dmFsdWUgPSB0cnVlO1xuXHR9XG5cblx0aWYodHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicpIHtcblx0XHR2YWx1ZSA9IGBcIiR7dmFsdWV9XCJgO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5cbmZ1bmN0aW9uIGhhbmRsZUF0dHJzVmFsdWUoY29udGV4dCwgdmFsdWUpXG57XG5cdGxldCBzdGF0ZWZ1bGwgPSBmYWxzZTtcblxuXHRsZXQgZXhwID0gZXhwcmVzc2lvbihjb250ZXh0LCB2YWx1ZSwgZmFsc2UpO1xuXHRcblx0dmFsdWUgPSBleHAudmFsdWU7XG5cblx0aWYoIXN0YXRlZnVsbCAmJiBleHAuc3RhdGVmdWxsKSB7XG5cdFx0c3RhdGVmdWxsID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dmFsdWUsXG5cdFx0c3RhdGVmdWxsLFxuXHR9O1xufVxuXG5mdW5jdGlvbiBnZW5PcHRpb25zKG9wdGlvbnMpXG57XG5cdGxldCByZXN1bHQgPSAnJztcblxuXHRmb3IobGV0IGtleSBpbiBvcHRpb25zKSB7XG5cdFx0bGV0IHZhbHVlID0gb3B0aW9uc1trZXldO1xuXG5cdFx0aWYodHlwZW9mIG9wdGlvbnNba2V5XSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdHZhbHVlID0gZ2VuT3B0aW9ucyh2YWx1ZSk7XG5cdFx0XHRpZih2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ICs9IGAnJHtrZXl9JzogeyBcXG4gJHsgdmFsdWUgfSBcXG59LFxcbmA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKHZhbHVlID09ICcnKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXN1bHQgKz0gYCcke2tleX0nOiAkeyB2YWx1ZSB9LFxcbmA7XG5cdFx0fVxuXHR9XG5cblx0aWYocmVzdWx0ID09ICcnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBwYXJzZUF0dHJzKGNvbnRleHQsIGF0dHJzLCBoeWRyYXRlID0gZmFsc2UpXG57XG5cdGNvbnNvbGUud2FybigxKVxuXHRsZXQgc2hvdWxkT3B0aW9uc0h5ZHJhdGUgPSBmYWxzZTtcblxuXHRsZXQgb3B0aW9ucyA9IHtcblx0XHRzdGF0aWNDbGFzczogJycsXG5cdFx0c3RhdGljU3R5bGU6IHt9LFxuXHRcdGNsYXNzOiBbXSxcblx0XHRzdHlsZTogW10sXG5cdFx0YXR0cnM6IHt9LFxuXHRcdG9uOiB7fSxcblx0XHRkb21Qcm9wczoge30sXG5cdFx0cHJvcHM6IHt9LFxuXHR9O1xuXHQvLyBjb25zb2xlLmxvZyh0eXBlLCBhcnQpXG5cdGZvcihsZXQga2V5IGluIGF0dHJzKVxuXHR7XG5cdFx0bGV0IGFyZyA9IGtleS5yZXBsYWNlKGR5bmFtaWNBcmdBdHRyaWJ1dGUsICcnKTtcblx0XHRsZXQgYXR0clZhbHVlID0gYXR0cnNba2V5XTtcblxuXHRcdGlmKGFyZy5tYXRjaCgvXnZcXC0vZykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRcblx0XHRpZihrZXkubWF0Y2goZHluYW1pY0FyZ0F0dHJpYnV0ZSkpIHtcblx0XHRcdGxldCB7IHZhbHVlLCBzdGF0ZWZ1bGwgfSA9IGhhbmRsZUF0dHJzVmFsdWUoY29udGV4dCwgYXR0clZhbHVlKTtcblxuXHRcdFx0aWYoc3RhdGVmdWxsKSB7XG5cdFx0XHRcdHNob3VsZE9wdGlvbnNIeWRyYXRlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHR5cGUgPSBmYWxzZTtcblxuXHRcdFx0aWYoaXNFdmVudEF0dHIoa2V5KSkge1xuXHRcdFx0XHR0eXBlID0gJ29uJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKGlzQ1NTQXR0cihrZXkpKSB7XG5cdFx0XHRcdFx0dHlwZSA9IG51bGw7XG5cdFx0XHRcdH0gZWxzZSBpZihpc1JlbmRlcmFibGVBdHRyKGFyZykpIHtcblx0XHRcdFx0XHR0eXBlID0gJ2F0dHJzJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0eXBlID0gJ3Byb3BzJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZih0eXBlID09PSBmYWxzZSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoaHlkcmF0ZSAmJiAhc3RhdGVmdWxsICYmIGlzQXJnTm90SHlkcmF0YWJsZSh0eXBlLCBhcmcpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZih0eXBlID09PSBudWxsKSB7XG5cdFx0XHRcdG9wdGlvbnNbYXJnXSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3B0aW9uc1t0eXBlXVthcmddID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCB2YWx1ZSA9IGF0dHJWYWx1ZTtcblx0XHRcdGxldCBub3JtYWxpemVkVmFsdWUgPSBudWxsO1xuXHRcdFx0bGV0IHR5cGUgPSBmYWxzZTtcblxuXHRcdFx0aWYoYXJnID09PSAnY2xhc3MnKSB7XG5cdFx0XHRcdGFyZyA9ICdzdGF0aWNDbGFzcyc7XG5cdFx0XHRcdHR5cGUgPSBudWxsO1xuXHRcdFx0XHRub3JtYWxpemVkVmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG5cdFx0XHR9IGVsc2UgaWYoYXJnID09PSAnc3R5bGUnKSB7XG5cdFx0XHRcdGFyZyA9ICdzdGF0aWNTdHlsZSc7XG5cdFx0XHRcdHR5cGUgPSBudWxsO1xuXHRcdFx0XHRub3JtYWxpemVkVmFsdWUgPSB7fVxuXG5cdFx0XHRcdHZhbHVlID0gdmFsdWUuc3BsaXQoJzsnKTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxldCB0bXAgPSB2YWx1ZVtpXS5zcGxpdCgnOicpLm1hcCgoaXRlbSkgPT4gaXRlbS50cmltKCkpO1xuXHRcdFx0XHRcdGlmKHRtcC5sZW5ndGggPT09IDIpIHtcblx0XHRcdFx0XHRcdG5vcm1hbGl6ZWRWYWx1ZVt0bXBbMF1dID0gbm9ybWFsaXplVmFsdWUodG1wWzFdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihpc1JlbmRlcmFibGVBdHRyKGFyZykpIHtcblx0XHRcdFx0dHlwZSA9ICdhdHRycyc7XG5cdFx0XHRcdG5vcm1hbGl6ZWRWYWx1ZSA9ICBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0eXBlID0gJ3Byb3BzJztcblx0XHRcdFx0bm9ybWFsaXplZFZhbHVlID0gIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYodHlwZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKGh5ZHJhdGUgJiYgaXNBcmdOb3RIeWRyYXRhYmxlKHR5cGUsIGFyZykpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHR5cGUgPT09IG51bGwpIHtcblx0XHRcdFx0b3B0aW9uc1thcmddID0gbm9ybWFsaXplZFZhbHVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3B0aW9uc1t0eXBlXVthcmddID0gbm9ybWFsaXplZFZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBJcyBleHByZXNzaW9uIGluc2lkZVxuXHRcdFxuXHR9XG5cblx0Ly8gY29uc29sZS5sb2cob3B0aW9ucyk7XG5cdC8vIGNvbnNvbGUubG9nKGdlbk9wdGlvbnMob3B0aW9ucykpO1xuXHQvLyBjb25zb2xlLmxvZyhzaG91bGRPcHRpb25zSHlkcmF0ZSk7XG5cdG9wdGlvbnMgPSBnZW5PcHRpb25zKG9wdGlvbnMpO1xuXG5cdHJldHVybiB7XG5cdFx0b3B0aW9uczogb3B0aW9ucyA9PT0gbnVsbCA/ICcnIDogb3B0aW9ucyxcblx0XHRzaG91bGRPcHRpb25zSHlkcmF0ZSxcblx0fVxufVxuXG5leHBvcnQgeyBwYXJzZUF0dHJzLCBwYXJzZU9wdGlvbktleSwgcGFyc2VPcHRpb25WYWx1ZSB9OyIsImltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiQGJhYmVsL3BhcnNlclwiO1xuaW1wb3J0IGdlbmVyYXRlIGZyb20gXCJAYmFiZWwvZ2VuZXJhdG9yXCI7XG5pbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuaW1wb3J0IHBhcnNlRXhwcmVzc2lvbiBmcm9tIFwiLi4vc2NyaXB0L3BhcnNlRXhwcmVzc2lvblwiO1xuXG5pbXBvcnQge1xuXHRpZGVudGlmaWVyLFxuXHRDYWxsRXhwcmVzc2lvbixcblx0QmluYXJ5RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQge1xuXHRoYW5kbGVJZGVudGlmaWVyLFxufSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IHsgcHJlcGFyZU9wdGlvbktleSB9IGZyb20gJy4vYXR0cnMnO1xuXG5pbXBvcnQgeyBoYXNTdGF0ZSwgZ2V0VmFyaWFibGUgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbihjb250ZXh0LCBjb2RlLCBrZWVwT2JzZXJ2YXRpb24gPSB0cnVlKVxue1xuXHRpZih0eXBlb2YgY29kZSA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdGVmdWxsOiBmYWxzZSxcblx0XHRcdHZhbHVlOiBKU09OLnN0cmluZ2lmeShjb2RlKVxuXHRcdH07XG5cdH1cblxuXHRjb2RlID0gU3RyaW5nKGNvZGUpO1xuXG5cdGxldCBpZGVudGlmaWVyT25seSA9IHRydWU7XG5cdGxldCBzaG91bGRFeGVjdXRlID0ga2VlcE9ic2VydmF0aW9uO1xuXG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShjb2RlKTtcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRpZighWydQcm9ncmFtJywgJ0V4cHJlc3Npb25TdGF0ZW1lbnQnLCAnSWRlbnRpZmllcicsICdCbG9ja1N0YXRlbWVudCcsICdMYWJlbGVkU3RhdGVtZW50JywgJ0FycmF5RXhwcmVzc2lvbicsICdPYmplY3RFeHByZXNzaW9uJywgJ09iamVjdFByb3BlcnR5J10uaW5jbHVkZXMocGF0aC5ub2RlLnR5cGUpKSB7XG5cdFx0XHRcdGlkZW50aWZpZXJPbmx5ID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgeyBjaGFuZ2VkLCBvYnNlcnZhYmxlIH0gPSBwYXJzZUV4cHJlc3Npb24oY29udGV4dC5kYXRhLCBhc3QsICdjdHgnLCBpZGVudGlmaWVyT25seSk7XG5cblx0aWYoY2hhbmdlZCkge1xuXHRcdGNvZGUgPSBnZW5lcmF0ZShhc3QsIHtcblx0XHRcdHJldGFpbkxpbmVzOiB0cnVlLFxuXHRcdFx0Y29tcGFjdDogdHJ1ZSxcblx0XHRcdG1pbmlmaWVkOiB0cnVlLFxuXHRcdFx0Y29uY2lzZTogdHJ1ZSxcblx0XHRcdHF1b3RlczogXCJkb3VibGVcIixcblx0XHR9LCBjb2RlKS5jb2RlO1xuXG5cdFx0XG5cdFx0Ly8gY2xlYW4gYXBwZW5kXG5cdFx0Y29kZSA9IGNvZGUucmVwbGFjZSgvKDt8LCkkL2csICcnKTtcblxuXHRcdGlmKGNoYW5nZWQgJiYgIWlkZW50aWZpZXJPbmx5KSB7XG5cdFx0XHRjb2RlID0gYCgpID0+IHsgcmV0dXJuICR7Y29kZX07IH1gO1xuXHRcdH1cblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGNvZGUpO1xuXHQvLyBjb25zb2xlLmxvZygnLS0tLS0tLS0nKTtcblxuXHRyZXR1cm4ge1xuXHRcdHN0YXRlZnVsbDogb2JzZXJ2YWJsZSxcblx0XHR2YWx1ZTogY29kZVxuXHR9XG59XG4iLCJpbXBvcnQgeyBwYXJzZUhUTUwgfSBmcm9tICcuL2h0bWwnO1xuaW1wb3J0IHsgcGFyc2VBdHRycyB9IGZyb20gJy4vYXR0cnMnO1xuaW1wb3J0IHBhcnNlRnVuY3Rpb25zIGZyb20gJy4vcGFyc2VGdW5jdGlvbnMnO1xuXG5pbXBvcnQgcHJldHRpZXIgZnJvbSAncHJldHRpZXIvc3RhbmRhbG9uZSc7XG5pbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGUoY29udGV4dCwgaHRtbClcbntcblx0bGV0IHRyZWUgPSBwYXJzZUhUTUwoaHRtbCk7XG5cblx0dHJlZS5zZXRTaWJsaW5ncygpO1xuXG5cdGxldCBzbG90cyA9IHRyZWUuZ2V0U2xvdHMoKTtcblxuXHR0cmVlID0gdHJlZS5jaGlsZHJlbjtcblxuXHRsZXQgYXN0ID0ge1xuXHRcdHJlbmRlcjogW10sXG5cdFx0aHlkcmF0ZTogW10sXG5cdH1cblxuXHRsZXQgcmVzdWx0ID0ge1xuXHRcdHJlbmRlcjogJycsXG5cdFx0aHlkcmF0ZTogJycsXG5cdFx0c2hvdWxkSHlkYXJhdGU6IGZhbHNlLFxuXHRcdGlzU3RhdGVmdWxsOiBmYWxzZSxcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCByZW5kZXJBU1QgPSB0cmVlW2ldLnRvQVNUKGNvbnRleHQsIGZhbHNlKTtcblx0XHRsZXQgaHlkcmF0aW9uQVNUID0gdHJlZVtpXS50b0FTVChjb250ZXh0LCB0cnVlKTtcblxuXHRcdGlmKGh5ZHJhdGlvbkFTVC5zdGF0ZWZ1bGwpIHtcblx0XHRcdHJlc3VsdC5zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0YXN0LnJlbmRlci5wdXNoKHJlbmRlckFTVC52YWx1ZSk7XG5cdFx0YXN0Lmh5ZHJhdGUucHVzaChoeWRyYXRpb25BU1QudmFsdWUpO1xuXHR9XG5cblx0aWYoYXN0LnJlbmRlci5sZW5ndGggPT09IDEpIHtcblx0XHRyZXN1bHQucmVuZGVyID0gYXN0LnJlbmRlclswXTtcblx0XHRyZXN1bHQuaHlkcmF0ZSA9IGFzdC5oeWRyYXRlWzBdO1xuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdC5yZW5kZXIgPSBgWyR7ICBhc3QucmVuZGVyLmpvaW4oJywnKSB9XWA7XG5cdFx0cmVzdWx0Lmh5ZHJhdGUgPSBgWyR7ICBhc3QuaHlkcmF0ZS5qb2luKCcsJykgfV1gO1xuXHR9XG5cblx0bGV0IHByZXR0aWVyQ29uZmlnID0ge1xuXHRcdHBhcnNlcih0ZXh0LCB7IGJhYmVsIH0pIHtcblx0XHRcdHJldHVybiBwYXJzZXIucGFyc2UodGV4dCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRyeSB7XG5cdFx0cmVzdWx0LnJlbmRlciA9IHByZXR0aWVyLmZvcm1hdChyZXN1bHQucmVuZGVyLCBwcmV0dGllckNvbmZpZyk7XG5cdFx0cmVzdWx0Lmh5ZHJhdGUgPSBwcmV0dGllci5mb3JtYXQoJ2xldCBfdG1wID0gJyArIHJlc3VsdC5oeWRyYXRlLCBwcmV0dGllckNvbmZpZykuc3Vic3RyaW5nKCdsZXQgX3RtcCA9ICcubGVuZ3RoKTtcblx0fSBjYXRjaChlcnIpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdH1cblxuXHRyZXN1bHQuc2xvdHMgPSBzbG90cztcblx0cmVzdWx0LmlzU3RhdGVmdWxsID0gY29udGV4dC5yZWFjdGl2ZV92YXJpYWJsZXMubGVuZ3RoID4gMDtcblx0cmVzdWx0LmNvbnRleHQgPSBjb250ZXh0O1xuXHQvLyBjb25zb2xlLmxvZygpO1xuXHQvLyByZXN1bHQuZnVuY3Rpb25hbCA9IGZhbHNlO1xuXHRcblx0cmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgeyBfIH0gZnJvbSAnLi4vZW1wdHknO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzU3RhdGUoY29udGV4dCwgdmFyaWFibGUpXG57XG5cdC8vIGNvbnNvbGUubG9nKGNvbnRleHQsIHZhcmlhYmxlLnNwbGl0KCcuJykpO1xuXHRpZihjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgdmFsdWUgPSBjb250ZXh0O1xuXHRsZXQgdmFyX3BhcnRzID0gdmFyaWFibGUuc3BsaXQoJy4nKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHZhcl9wYXJ0cy5sZW5ndGg7IGkrKykge1xuXHRcdHZhbHVlID0gdmFsdWVbdmFyX3BhcnRzW2ldXTtcblx0XHRpZih0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0aWYodmFsdWUuX29ic2VydmFibGUpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFyaWFibGUoY29udGV4dCwgdmFyaWFibGUpXG57XG5cdGlmKE9iamVjdC5rZXlzKGNvbnRleHQuY29tcHV0ZWQpLmluY2x1ZGVzKHZhcmlhYmxlKSkge1xuXHRcdHJldHVybiBgX2NvbXB1dGVkLiR7dmFyaWFibGV9YDtcblx0fVxuXG5cdGlmKE9iamVjdC5rZXlzKGNvbnRleHQuc3RhdGUpLmluY2x1ZGVzKHZhcmlhYmxlKSkge1xuXHRcdHJldHVybiBgX3N0YXRlLiR7dmFyaWFibGV9YDtcblx0fVxuXG5cdGlmKE9iamVjdC5rZXlzKGNvbnRleHQuZGF0YSkuaW5jbHVkZXModmFyaWFibGUpKSB7XG5cdFx0cmV0dXJuIGBfZGF0YS4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0Lm1ldGhvZHMpLmluY2x1ZGVzKHZhcmlhYmxlKSkge1xuXHRcdHJldHVybiBgJHt2YXJpYWJsZX0uYmluZChjdHgpYDtcblx0fVxuXG5cdGlmKE9iamVjdC5rZXlzKGNvbnRleHQucHJvcHMpLmluY2x1ZGVzKHZhcmlhYmxlKSkge1xuXHRcdHJldHVybiBgX3Byb3BzLiR7dmFyaWFibGV9YDtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWxwYXJzZXIyJztcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgVGV4dE5vZGUgZnJvbSAnLi9UZXh0Tm9kZSc7XG5cblxuZnVuY3Rpb24gcHJlcGFyZUhUTUwoaHRtbClcbntcblx0cmV0dXJuIGh0bWwucmVwbGFjZSgvXFx0L2csICcgJykucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gaW5pdFN0YWNrKClcbntcblx0cmV0dXJuIFtcblx0XHRuZXcgTm9kZSh7XG5cdFx0XHR0YWc6ICdQYXJzZXJCb2R5Jyxcblx0XHRcdGNoaWxkcmVuOiBbXSxcblx0XHR9KVxuXHRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIVE1MKGh0bWwpXG57XG5cdGZ1bmN0aW9uIGN1cnJlbnRTdGFja05vZGUoKVxuXHR7XG5cdFx0cmV0dXJuIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0aHRtbCA9IHByZXBhcmVIVE1MKGh0bWwpO1xuXG5cdGxldCBzdGFjayA9IGluaXRTdGFjaygpO1xuXG5cdGNvbnN0IHBhcnNlID0gbmV3IFBhcnNlcih7XG5cdFx0XG5cdFx0b25vcGVudGFnKG5hbWUsIGF0dHJzKVxuXHRcdHtcblx0XHRcdGxldCBwYXJlbnQgPSBjdXJyZW50U3RhY2tOb2RlKCk7XG5cblx0XHRcdGxldCBub2RlID0gbmV3IE5vZGUoe1xuXHRcdFx0XHR0YWc6IG5hbWUsXG5cdFx0XHRcdGF0dHJzOiBhdHRycyxcblx0XHRcdFx0Y2hpbGRyZW46IFtdLFxuXHRcdFx0fSk7XG5cblx0XHRcdGlmKHBhcmVudCkge1xuXHRcdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0YWNrLnB1c2gobm9kZSk7XG5cdFx0fSxcblxuXHRcdG9udGV4dCh0ZXh0KVxuXHRcdHtcblx0XHRcdGxldCBwYXJlbnQgPSBjdXJyZW50U3RhY2tOb2RlKCk7XG5cblx0XHRcdHRleHQgPSB0ZXh0LnRyaW0oKTtcblxuXHRcdFx0aWYodGV4dCAhPT0gJycgJiYgcGFyZW50KSB7XG5cdFx0XHRcdGxldCBub2RlID0gbmV3IFRleHROb2RlKHRleHQpO1xuXHRcdFx0XHRpZihwYXJlbnQpIHtcblx0XHRcdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG5cdFx0XHRcdH1cblx0ICAgIFx0fVxuXHQgICAgfSxcblxuXHRcdG9uY2xvc2V0YWcobmFtZSlcblx0XHR7XG5cdFx0XHRzdGFjay5wb3AoKTtcblx0ICAgIH1cblxuXHR9LCB7IGRlY29kZUVudGl0aWVzOiB0cnVlIH0pXG5cdFxuXHRwYXJzZS53cml0ZShodG1sKTtcblx0cGFyc2UuZW5kKCk7XG5cblx0cmV0dXJuIHN0YWNrWzBdO1xufVxuIiwiaW1wb3J0IHsgZ2V0UmVhY3RpdmVWYXJpYWJsZXMgfSBmcm9tIFwiLi4vc2NyaXB0XCI7XG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSAnLi9nZW5lcmF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlVGVtcGxhdGUoY29udGV4dCwgaHRtbCwgYmxvY2tzKVxue1xuXHRsZXQgc2NyaXB0ID0gYmxvY2tzLnNjcmlwdCB8fCB7IHNvdXJjZTogJycgfTtcblxuXHRjb250ZXh0ID0gZ2V0UmVhY3RpdmVWYXJpYWJsZXMoY29udGV4dCwgc2NyaXB0LnNvdXJjZSk7XG5cdFxuXHRyZXR1cm4gZ2VuZXJhdGUoY29udGV4dCwgaHRtbCk7XG59IiwiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBUZXh0Tm9kZSBmcm9tICcuL1RleHROb2RlJztcblxuZXhwb3J0IGNvbnN0IElGX0FUVFJTID0gWyd2LWlmJywgJ3YtZWxzZS1pZicsICd2LWVsc2UnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2xvdChub2RlKVxue1xuXHRpZighbm9kZS5pc1Nsb3QpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aXM6IGZhbHNlLFxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aXM6IHRydWUsXG5cdFx0Y2FsbEV4cHJlc3Npb246ICFub2RlLmlzSW5zaWRlQ29tcG9uZW50LFxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxvb3Aobm9kZSlcbntcblx0aWYoIW5vZGUuYXR0cnNbJ3YtZm9yJ10pIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aXM6IGZhbHNlLFxuXHRcdH1cblx0fVxuXG5cdGxldCBzdGF0ZW1lbnQgPSBub2RlLmF0dHJzWyd2LWZvciddLm1hdGNoQWxsKC9cXCgoPzxpdGVtPltBLXowLTldKylcXHM/KFxcLFxccz8oPzxrZXk+W0EtejAtOV0rKVxccz8pP1xcKVxccz9pblxccyg/PGNvbmRpdGlvbj4uKikvZyk7XG5cblx0bGV0IGNvbmRpdGlvbiA9IG51bGw7XG5cdGxldCBhcmdzID0gW107XG5cblx0Zm9yKGxldCBtYXRjaCBvZiBzdGF0ZW1lbnQpIHtcblxuXHRcdGlmKG1hdGNoLmdyb3Vwcy5pdGVtKSB7XG5cdFx0XHRhcmdzLnB1c2gobWF0Y2guZ3JvdXBzLml0ZW0pO1xuXHRcdH1cblxuXHRcdGlmKG1hdGNoLmdyb3Vwcy5rZXkpIHtcblx0XHRcdGFyZ3MucHVzaChtYXRjaC5ncm91cHMua2V5KTtcblx0XHR9XG5cblx0XHRjb25kaXRpb24gPSBtYXRjaC5ncm91cHMuY29uZGl0aW9uO1xuXHR9XG5cblx0aWYoIWNvbmRpdGlvbikge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpczogZmFsc2UsXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpczogdHJ1ZSxcblx0XHRjb25kaXRpb246IGNvbmRpdGlvbixcblx0XHRhcmdzOiBhcmdzLmpvaW4oJywnKSxcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdGF0ZW1lbnQobm9kZSlcbntcblx0bGV0IHN0YXJ0ID0gZmFsc2U7XG5cdGxldCBlbmQgPSB0cnVlO1xuXHRsZXQgc3RhdGVtZW50ID0gZmFsc2U7XG5cdGxldCBjb25kaXRpb24gPSBub2RlLmF0dHJzWyd2LWlmJ10gfHwgbm9kZS5hdHRyc1sndi1lbHNlLWlmJ10gfHwgJ3RydWUnO1xuXG5cdGlmKG5vZGUuYXR0cnNbJ3YtaWYnXSkge1xuXHRcdHN0YXJ0ID0gdHJ1ZTtcblx0fVxuXG5cdGlmKG5vZGUuYXR0cnNbJ3YtaWYnXSB8fCBub2RlLmF0dHJzWyd2LWVsc2UtaWYnXSB8fCBub2RlLmF0dHJzWyd2LWVsc2UnXSkge1xuXHRcdG5vZGUuaWZfc3RhdGVtZW50ID0gdHJ1ZTtcblx0XHRzdGF0ZW1lbnQgPSB0cnVlO1xuXHR9XG5cblxuXHRpZihub2RlLm5leHRTaWJsaW5nIGluc3RhbmNlb2YgTm9kZSkge1xuXHRcdGlmKG5vZGUubmV4dFNpYmxpbmcuYXR0cnNbJ3YtZWxzZS1pZiddIHx8IG5vZGUubmV4dFNpYmxpbmcuYXR0cnNbJ3YtZWxzZSddKSB7XG5cdFx0XHRlbmQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNvbmRpdGlvbixcblx0XHRpczogc3RhdGVtZW50LFxuXHRcdHN0YXJ0LFxuXHRcdGVuZCxcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUZ1bmN0aW9ucyhjb2RlKVxue1xuXHRjb2RlID0gY29kZVxuXHRcdC5yZXBsYWNlKC9cXEBpZlxcKCguKilcXCkvZywgJzxpZiBjb25kaXRpb249XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL1xcQGVsc2VpZlxcKCguKilcXCkvZywgJzxlbHNlLWlmIGNvbmRpdGlvbj1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvXFxAZWxzZS9nLCAnPGVsc2U+Jylcblx0XHQucmVwbGFjZSgvXFxAZW5kaWYvZywgJzxlbmRpZj4nKVxuXG5cblx0Y29uc29sZS5sb2coY29kZSk7XG5cblx0cmV0dXJuIGNvZGU7XG59IiwiaW1wb3J0IHsgY29tcGlsZXIsIF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlcic7XG5cbi8vIGltcG9ydCB7IHBhcnNlRXhwcmVzc2lvbiB9IGZyb20gJ0BzaW51b3VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9leHByZXNzaW9uJztcbi8vIGltcG9ydCB7IHBhcnNlSFRNTCB9IGZyb20gJ0BzaW51b3VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9odG1sJztcblxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsIGBcbi8vIGxldCBkID0gZnVuY3Rpb24oKSB7fVxuLy8gbGV0IGQyID0gKCkgPT4ge31cbi8vIGZ1bmN0aW9uIGMxKHMzKSB7XG4vLyBcdGxldCBkID0gW107XG4vLyBcdGZvcihsZXQgaSA9IDA7IGkgPCBzMS5sZW5ndGg7IGkrKykge1xuLy8gXHRcdGQucHVzaChzMVtpXSk7XG4vLyBcdH1cbi8vIH1cbi8vIGApXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ3sgczE6ICgpID0+IHMxIH0nKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdhbGVydCgpOycsIHRydWUpXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ20xKGV2ZW50KScpXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ3MxICs9IDYnKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdkMSA9IGQxICsgNicpXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ2QxIC89IDYnKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdkLnB1c2goczEpJylcbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCAnZCA9ICgpID0+IHsgcmV0dXJuIHMxIH0nKVxuXG5cbmxldCBzb3VyY2UgPSBgXG48dGVtcGxhdGU+XG5cdDxkaXYgQGNsaWNrPVwiYWxlcnQoMSlcIiA6c3R5bGU9XCJ7IHBhZGRpbmdUb3A6IHMyIH1cIj5cblx0XHR0ZXN0XG5cdFx0e3sgczIgfX1cblx0XHQ8YnI+XG5cdFx0PHRlbXBsYXRlIHYtaWY9XCJ2aXNpYmxlXCI+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHRbdmlzaWJsZV0gc2hvdyB7eyBkZGQgfX0ge3sgczEgfX0gKHt7IGl0ZW0gfX0pXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHRlc3Rcblx0XHRcdDxzcGFuIHYtaWY9XCJzMVwiPlxuXHRcdFx0XHRbczFdIHRlc3Rcblx0XHRcdDwvc3Bhbj5cblx0XHQ8L3RlbXBsYXRlPlxuXHRcdDxkaXYgdi1lbHNlLWlmPVwiczNcIj5cblx0XHRcdFtzM10gdGVzdFxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJsb29wXCIgdi1mb3I9XCIoaXRlbSwga2V5KSBpbiBzMVwiIDprZXk9XCJrZXlcIj5cblx0XHRcdHt7IGl0ZW0gfX1cblx0XHQ8L2Rpdj5cblx0XHQ8dGVtcGxhdGU+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8c2xvdCBuYW1lPVwiaGVhZGVyXCIgdGFnPVwiaDFcIj5cblx0XHRcdFx0XHRkZWZhdWx0IHNsb3QgdGV4dCBcblx0XHRcdFx0PC9zbG90PlxuXHRcdFx0XHRbbm9uZV0gaGlkZVxuXHRcdFx0PC9kaXY+XG5cdFx0PC90ZW1wbGF0ZT5cblx0XHQ8ZGl2PmFmdGVyLW9uY2UtaWY8L2Rpdj5cblx0XHQ8Y2hpbGQ+XG5cdFx0XHRkZWZhdWx0IHNsb3Rcblx0XHRcdHRlc3QgMVxuXHRcdFx0PHNsb3QgbmFtZT1cImZvb3RlclwiPmZvb3Rlci1zbG90LXRlc3Q8L3Nsb3Q+XG5cdFx0XHR0ZXN0IDJcblx0XHQ8L2NoaWxkPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5sZXQgJHMxID0gdHJ1ZTtcbmxldCAkczIgPSAxMDtcbmxldCAkczMgPSBmYWxzZTtcblxubGV0IGRkZCA9ICdbdGVzdCB2YXJpYWJsZSBkZGRdJ1xubGV0IHRpbWVyMSA9IG51bGw7XG5sZXQgdmlzaWJsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIG1ha2VJZigpXG57XG5cdGNvbnNvbGUubG9nKCdNYWtlJyk7XG5cblx0czEgPSB0cnVlO1xuXHRzMyA9IHRydWU7XG5cblx0Y29uc29sZS5sb2coczEsIHMzKTtcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0czEgPSBmYWxzZTtcblx0XHRzMyA9IHRydWU7XG5cdFx0Y29uc29sZS5sb2coczEsIHMzKTtcblx0fSwgMTAwMClcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRzMSA9IGZhbHNlO1xuXHRcdHMzID0gZmFsc2U7XG5cdFx0Y29uc29sZS5sb2coczEsIHMzKTtcblx0fSwgMjAwMClcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRzMSA9IHRydWU7XG5cdFx0czMgPSBmYWxzZTtcblx0XHRjb25zb2xlLmxvZyhzMSwgczMpO1xuXHR9LCAzMDAwKVxufVxuXG5mdW5jdGlvbiBtb3VudGVkKClcbntcblx0bWFrZUlmKCk7XG5cdHRpbWVyMSA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRtYWtlSWYoKTtcblx0fSwgNTAwMClcbn1cblxuZnVuY3Rpb24gdW5tb3VudGVkKClcbntcblx0Y2xlYXJJbnRlcnZhbCh0aW1lcjEpO1xufVxuPC9zY3JpcHQ+XG5gO1xuXG5cbnNvdXJjZSA9IGBcbjx0ZW1wbGF0ZT5cblx0PGRpdiBpZD1cInRlc3RcIiBjbGFzcz1cImJ1dHRvblwiIDpjbGFzcz1cIlt0ZXN0Q2xhc3NdXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiA1cHg7XCIgOnN0eWxlPVwiW3sgZm9udFNpemU6IHMxIH1dXCIgQGNsaWNrPVwiY2xpY2tcIiBkaXNhYmxlZCBzb21lLXByb3A9XCJyZWRcIiA6b3RoZXItcHJvcD1cIjFcIj5cblx0XHQ8IS0tIHt7IHMxIH19IC0tPlxuXHRcdDxzbG90PlxuXHRcdFx0RGVmYXVsdCBidXR0b24gdGV4dCAgMlxuXHRcdDwvc2xvdD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxubGV0ICRzMSA9IDE7Ly9NYXRoLnJhbmRvbSgxLCAxMDApO1xubGV0IHRpbWVyID0gbnVsbDtcblxubGV0IHRlc3RDbGFzcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRyZWQ6IHMxICUgMiA9PT0gMFxuXHR9XG59XG5cbmZ1bmN0aW9uIGNsaWNrKClcbntcblx0YWxlcnQoMSlcbn1cblxuZnVuY3Rpb24gbW91bnRlZCgpXG57XG5cdC8vIGNvbnNvbGUubG9nKCdtb3VudGVkJyk7XG5cdHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdHMxICs9IDFcblx0fSwgMTAwMClcbn1cblxuZnVuY3Rpb24gdW5tb3V0bmVkKClcbntcblx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XG59XG48L3NjcmlwdD5cblxuYFxuLy8gY29uc29sZS5sb2cocGFyc2VIVE1MKHNvdXJjZSkpO1xuXG5cbmxldCBibG9jayA9IGNvbXBpbGVyKHtcblx0Y29udGV4dDoge30sXG5cdHR5cGU6ICd0ZW1wbGF0ZScsXG5cdHNvdXJjZTogc291cmNlLFxufSk7XG5cbmNvbnNvbGUubG9nKGJsb2NrLnNvdXJjZS5yZW5kZXIpXG5jb25zb2xlLmxvZygnLS0tLS0tLS0tLScpXG5jb25zb2xlLmxvZyhibG9jay5zb3VyY2UuaHlkcmF0ZSlcbi8vIGNvbnNvbGUubG9nKGJsb2NrLnNvdXJjZSkiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9