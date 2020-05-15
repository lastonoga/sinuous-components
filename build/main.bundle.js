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

    var _name = this.context + "._" + this.namespace + "." + name;

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

function getComponentCode(tag, options, children) {
  if (children === void 0) {
    children = [];
  }

  if (tag === 'template') {
    return "[" + children.join(',') + "]";
  }

  return "h('" + tag + "', " + options + ", [" + children.join(',') + "])";
}

function handleTag(node, context, options, children) {
  if (children === void 0) {
    children = [];
  }

  var Loop = (0, _parseFunctions.parseLoop)(node);
  var code = '';

  if (Loop.is) {
    var condition = (0, _expression.expression)(context, Loop.condition, false);
    code += "loop(" + condition.value + ", (" + Loop.args + ") => { return ";
  }

  code += getComponentCode(node.tag, options, children);

  if (Loop.is) {
    code += ";})";
  }

  code += '';
  return code;
}

function parseSlotAttrs(node) {
  var name = 'default';
  var tag = null;

  if (node.tag === 'slot') {
    name = node.attrs['name'] || 'default';
    tag = node.attrs['tag'] || null;
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
        children = _ref$children === void 0 ? [] : _ref$children;
    this.hid = exports.HID = HID = +HID + 1;
    this.tag = tag;
    this.attrs = attrs;
    this.options = (0, _attrs.parseOptions)(attrs);
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
          slots[name] = nodeIndexes;
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
    var shouldOptionsHydrate = false;
    var shouldSlotsHydrate = false;
    var render = !hydrate; // let isCallExpression = false;

    var Statement = (0, _parseFunctions.parseStatement)(this);
    var Slot = (0, _parseFunctions.parseSlot)(this);

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

    var options = ''; // Handle slots for Component children

    if (this.isComponent && Object.keys(slots).length > 0) {
      var _value = '';

      for (var key in slots) {
        _value += "'" + key + "': [" + slots[key].join(',') + "],";
      }

      if (hydrate && shouldSlotsHydrate || render) {
        options += "$slots: { " + _value + " },";
      }
    } // Handle options


    for (var _key in this.options) {
      var _parseOptionValue = (0, _attrs.parseOptionValue)(context, _key, this.options[_key]),
          _value2 = _parseOptionValue.value,
          _statefull = _parseOptionValue.statefull;

      if (_statefull) {
        shouldHydarate = true;
      }

      if (_statefull || !hydrate || _key === 'data-hid') {
        options += (0, _attrs.parseOptionKey)(_key) + ": " + _value2 + ",";
      }

      if (_statefull && hydrate) {
        shouldOptionsHydrate = true;
      }
    }

    shouldHydarate = this.isComponent || shouldHydarate; // Add hydrate ID 

    if (shouldHydarate) {
      options += "id: ctx.getUID(" + this.hid + "),";
    } // Is component stateful


    if (shouldOptionsHydrate) {
      options += "_s: true,";
    }

    options = "{" + options + "}";

    if (Statement.is) {
      var condition = (0, _expression.expression)(context, Statement.condition, false);

      if (Statement.start) {
        code += "statement(";
      }

      code += " " + condition.value + ", " + handleTag(this, context, options, children);

      if (Statement.end) {
        code += ")";
      }
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
      code += handleTag(this, context, options, children);
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


    if (hydrate && !statefull && !isCallExpression) {
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

  if (key[0] === '$') {
    return {
      value: value,
      statefull: statefull
    };
  }

  if (key[0] === '@') {
    statefull = true;
  }

  if (typeof value === 'object') {
    keepObservation = true;
  }

  if (key[0] === '_') {
    value = '`' + value.replace(/{{((?:(?!(}})).)+)}}/g, '${$1}') + '`';
    keepObservation = false;
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

  code = String(code); // console.warn(code);

  var identifierOnly = true;
  var shouldExecute = keepObservation;
  var ast = parser.parse(code);
  (0, _traverse.default)(ast, {
    enter: function enter(path) {
      // console.log(path.node.type, path.node)
      if (!['Program', 'ExpressionStatement', 'Identifier', 'BlockStatement', 'LabeledStatement'].includes(path.node.type)) {
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

  var prettierConfig = {
    parser: function parser(text, _ref) {
      var babel = _ref.babel;
      return _parser.parse(text);
    }
  };
  result.render = _standalone.default.format(result.render, prettierConfig);
  result.hydrate = _standalone.default.format(result.hydrate, prettierConfig);
  result.slots = slots;
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
var source = "\n<template>\n\t<div @click=\"alert(1)\" :style=\"{ paddingTop: s2 }\">\n\t\ttest\n\t\t{{ s2 }}\n\t\t<br>\n\t\t<template v-if=\"visible\">\n\t\t\t<div>\n\t\t\t\t[visible] show {{ ddd }} {{ s1 }} ({{ item }})\n\t\t\t</div>\n\t\t\ttest\n\t\t\t<span v-if=\"s1\">\n\t\t\t\t[s1] test\n\t\t\t</span>\n\t\t</template>\n\t\t<div v-else-if=\"s3\">\n\t\t\t[s3] test\n\t\t</div>\n\t\t<template>\n\t\t\t<div>\n\t\t\t\t<slot name=\"header\" tag=\"h1\">\n\t\t\t\t\tdefault slot text \n\t\t\t\t</slot>\n\t\t\t\t[none] hide\n\t\t\t</div>\n\t\t</template>\n\t\t<div>after-once-if</div>\n\t\t<child>\n\t\t\tdefault slot\n\t\t\ttest 1\n\t\t\t<slot name=\"footer\">footer-slot-test</slot>\n\t\t\ttest 2\n\t\t</child>\n\t</div>\n</template>\n\n<script>\nlet $s1 = true;\nlet $s2 = 10;\nlet $s3 = false;\n\nlet ddd = '[test variable ddd]'\nlet timer1 = null;\nlet visible = true;\n\nfunction makeIf()\n{\n\tconsole.log('Make');\n\n\ts1 = true;\n\ts3 = true;\n\n\tconsole.log(s1, s3);\n\tsetTimeout(() => {\n\t\ts1 = false;\n\t\ts3 = true;\n\t\tconsole.log(s1, s3);\n\t}, 1000)\n\n\tsetTimeout(() => {\n\t\ts1 = false;\n\t\ts3 = false;\n\t\tconsole.log(s1, s3);\n\t}, 2000)\n\n\tsetTimeout(() => {\n\t\ts1 = true;\n\t\ts3 = false;\n\t\tconsole.log(s1, s3);\n\t}, 3000)\n}\n\nfunction mounted()\n{\n\tmakeIf();\n\ttimer1 = setInterval(() => {\n\t\tmakeIf();\n\t}, 5000)\n}\n\nfunction unmounted()\n{\n\tclearInterval(timer1);\n}\n</script>\n"; // console.log(parseHTML(source));

var block = (0, _compiler.compiler)({
  context: {},
  type: 'template',
  source: source
});
console.log(block.source.hydrate);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvbXBpbGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvQXN0R2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2NyaXB0L2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3NjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3NjcmlwdC9wYXJzZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvcGFyc2VFeHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2NyaXB0L3BhcnNlTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90ZW1wbGF0ZS9UZXh0Tm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2F0dHJzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdGVtcGxhdGUvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2dlbmVyYXRlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdGVtcGxhdGUvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90ZW1wbGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3RlbXBsYXRlL3BhcnNlRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXN0LmpzIiwid2VicGFjazovLy8uL1dyaXRhYmxlU3RyZWFtIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJibG9ja3MiLCJzb3VyY2UiLCJ0eXBlIiwiZXhlYyIsInMiLCJjb21waWxlciIsImNvbnRleHQiLCJyb290IiwibG93ZXJDYXNlVGFnTmFtZSIsInNjcmlwdCIsIm5vZGVzIiwiaSIsImlubmVySFRNTCIsIl8iLCJSZWFjdGl2ZU5hbWVzcGFjZXMiLCJuYW1lIiwiaWQiLCJkYXRhIiwicGF0aCIsImdldElkZW50aWZpZXJOYW1lIiwibWF0Y2giLCJtYXRjaElkZW50aWZpZXIiLCJJZGVudGlmaWVyRXhwcmVzc2lvbiIsIm5hbWVzcGFjZSIsIm9ic2VydmFibGUiLCJjYWxsYWJsZSIsInJlcGxhY2UiLCJfbmFtZSIsIk9iamVjdCIsImltcG9ydHMiLCJwcm9wZXJ0aWVzIiwib2JqZWN0IiwiRnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uIiwiZ2VuZXJhdGVGdW5jdGlvblJldHVybkV4cHJlc3Npb24iLCJPYmplY3RSZXR1cm5FeHByZXNzaW9uIiwiZ2VuZXJhdGVPYmplY3RSZXR1cm5FeHByZXNzaW9uIiwiZXhwb3J0ZWRPYmplY3QiLCJleHBvcnRlZERlZmF1bHQiLCJib2R5IiwidmFsdWVzIiwidmFsIiwiUmVhY3RpdHkiLCJGdW5jdGlvblJldHVybiIsInByb3BzIiwic3RhdGUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJBaWlFeHByZXNzaW9uIiwiaXNGdW5jdGlvbiIsImFwcGVuZCIsImlzSWRlbnRpZmllclJlYWN0aXZlIiwiYXN0Iiwic291cmNlVHlwZSIsInN0cmljdE1vZGUiLCJyZWFjdGl2ZV92YXJpYWJsZXMiLCJyZXRhaW5MaW5lcyIsImNvbXBhY3QiLCJtaW5pZmllZCIsImNvbmNpc2UiLCJxdW90ZXMiLCJpc0Z1bmN0aW9uRGVjbGFyYXRpb24iLCJWYXJpYWJsZURlY2xhcmF0b3IiLCJlbnRlciIsInZhbHVlIiwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJleGl0IiwiRnVuY3Rpb25EZWNsYXJhdGlvbiIsImN0eCIsImRpc2FibGVFeGVjdXRpb24iLCJjaGFuZ2VkIiwiSW1wb3J0RGVjbGFyYXRpb24iLCJBc3NpZ25tZW50RXhwcmVzc2lvbiIsImFyZ3MiLCJJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsImZ1bmN0aW9uQmxvY2tIYW5kbGluZyIsImFzc2lnbm1lbnRIYW5kbGluZyIsInZhcmlhYmxlRGVjbGFyYXRpb25IYW5kbGluZyIsInNob3VsZEFzc2lnbm1lbnRIYW5kbGUiLCJoYXNGdW5jdGlvblJlYWN0aXZlIiwibWVtYmVySGFuZGxpbmciLCJDYWxsRXhwcmVzc2lvbiIsIk1lbWJlckV4cHJlc3Npb24iLCJFeHByZXNzaW9uU3RhdGVtZW50IiwiZXhwcmVzc2lvbiIsIkJsb2NrU3RhdGVtZW50IiwiY29sbGVjdE1ldGhvZHMiLCJISUQiLCJpc05vblBocmFzaW5nVGFnIiwiSUZfU1RBVEVNRU5UX1NUQVJURUQiLCJjaGlsZHJlbiIsInRhZyIsIkxvb3AiLCJjb2RlIiwiY29uZGl0aW9uIiwiZ2V0Q29tcG9uZW50Q29kZSIsIm5vZGUiLCJOb2RlIiwiYXR0cnMiLCJhcHBlbmRDaGlsZCIsImdldEluZGV4UGF0aCIsImluZGV4ZXMiLCJzZXRTaWJsaW5ncyIsImdldFNsb3RzIiwiaXNVbmRlckNvbXBvbmVudCIsInNsb3RzIiwibm9kZUluZGV4ZXMiLCJ0b0FTVCIsImh5ZHJhdGUiLCJpc0NhbGxFeHByZXNzaW9uIiwic2hvdWxkSHlkYXJhdGUiLCJzaG91bGRPcHRpb25zSHlkcmF0ZSIsInNob3VsZFNsb3RzSHlkcmF0ZSIsInJlbmRlciIsIlN0YXRlbWVudCIsIlNsb3QiLCJjaGlsZCIsInN0YXRlZnVsbCIsInBhcnNlU2xvdEF0dHJzIiwib3B0aW9ucyIsImtleSIsImhhbmRsZVRhZyIsIkpTT04iLCJpc0luc2lkZUNvbXBvbmVudCIsIlRleHROb2RlIiwiQXR0cnNNYXAiLCJIVE1MQXR0cmlidXRlcyIsImtlZXBPYnNlcnZhdGlvbiIsImV4cCIsInN0eWxlcyIsInBhaXJzIiwic3RyaW5nIiwidG1wIiwidmFyaWFibGUiLCJvcHRpb25fa2V5IiwicHJlcGFyZU9wdGlvbktleSIsInBhcnNlU3R5bGVzIiwiU3RyaW5nIiwiaWRlbnRpZmllck9ubHkiLCJzaG91bGRFeGVjdXRlIiwicGFyc2VyIiwidHJlZSIsInJlc3VsdCIsInJlbmRlckFTVCIsImh5ZHJhdGlvbkFTVCIsInByZXR0aWVyQ29uZmlnIiwiYmFiZWwiLCJwcmV0dGllciIsInZhcl9wYXJ0cyIsImh0bWwiLCJzdGFjayIsInByZXBhcmVIVE1MIiwiaW5pdFN0YWNrIiwicGFyc2UiLCJQYXJzZXIiLCJvbm9wZW50YWciLCJwYXJlbnQiLCJjdXJyZW50U3RhY2tOb2RlIiwib250ZXh0IiwidGV4dCIsIm9uY2xvc2V0YWciLCJkZWNvZGVFbnRpdGllcyIsIklGX0FUVFJTIiwiaXMiLCJjYWxsRXhwcmVzc2lvbiIsInN0YXRlbWVudCIsInN0YXJ0IiwiZW5kIiwiY29uc29sZSIsImJsb2NrIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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cUUsTUFBRSxFQUZJO0FBR05HLFNBQUssRUFIQztBQUlOQyxPQUFHLEVBQUhBO0FBSk0sR0FBUDtBQU1BOztBQUVjLDhCQUNmO0FBQ0MxRSxNQUFJLEdBQUdBLElBQUksQ0FBSkEsMEpBQVBBLFNBQU9BLENBQVBBO0FBT0EyRSxTQUFPLENBQVBBO0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ3JHRDs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBSXZLLE1BQU0sODRDQUFWLEMsQ0F5RkE7O0FBR0EsSUFBSXdLLEtBQUssR0FBRyx3QkFBUztBQUNwQm5LLFNBQU8sRUFBRSxFQURXO0FBRXBCSixNQUFJLEVBQUUsVUFGYztBQUdwQkQsUUFBTSxFQUFFQTtBQUhZLENBQVQsQ0FBWjtBQU1BdUssT0FBTyxDQUFDRSxHQUFSLENBQVlELEtBQUssQ0FBQ3hLLE1BQU4sQ0FBYTJHLE9BQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hBLGUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBjb21waWxlU2NyaXB0IH0gZnJvbSBcIi4vc2NyaXB0XCI7XG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUgfSBmcm9tIFwiLi90ZW1wbGF0ZVwiO1xuXG5mdW5jdGlvbiBjb21waWxlcihjb250ZXh0LCB7IGJsb2Nrcywgc291cmNlLCB0eXBlIH0pXG57XG5cdGxldCBleGVjID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzb3VyY2U7XG5cdH1cblxuXHRpZih0eXBlID09PSAnc2NyaXB0Jykge1xuXHRcdGxldCBzID0gY29tcGlsZVNjcmlwdChjb250ZXh0LCBzb3VyY2UpO1xuXHRcdHNvdXJjZSA9IHMuY29kZSA9PSAnJyA/IG51bGwgOiBzLmNvZGU7XG5cdH1cblxuXHRpZih0eXBlID09PSAndGVtcGxhdGUnKSB7XG5cdFx0c291cmNlID0gY29tcGlsZVRlbXBsYXRlKGNvbnRleHQsIHNvdXJjZSwgYmxvY2tzKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c291cmNlLFxuXHRcdHR5cGUsXG5cdFx0ZXhlYyxcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCB7IHR5cGUsIHNvdXJjZSB9KVxue1xuXHRyZXR1cm4ge1xuXHRcdHR5cGUsXG5cdFx0c291cmNlLFxuXHRcdGV4ZWMoYmxvY2tzID0gW10pIHtcblx0XHRcdHJldHVybiBjb21waWxlcihjb250ZXh0LCB7XG5cdFx0XHRcdGJsb2Nrcyxcblx0XHRcdFx0c291cmNlOiB0aGlzLnNvdXJjZSxcblx0XHRcdFx0dHlwZTogdGhpcy50eXBlLFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbn07IiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdub2RlLWh0bWwtcGFyc2VyJztcbmltcG9ydCBibG9jayBmcm9tICcuL2Jsb2NrLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVyKHsgY29udGV4dCwgdHlwZSwgc291cmNlIH0pIHtcblxuXHRsZXQgcm9vdCA9IHBhcnNlKHNvdXJjZSwge1xuXHRcdGxvd2VyQ2FzZVRhZ05hbWU6IHRydWUsXG5cdFx0c2NyaXB0OiB0cnVlLFxuXHR9KTtcblxuXHRsZXQgbm9kZXMgPSByb290LmNoaWxkTm9kZXM7XG5cdGxldCBibG9ja3MgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYobm9kZXNbaV0udGFnTmFtZSkge1xuXHRcdFx0YmxvY2tzW25vZGVzW2ldLnRhZ05hbWVdID0gYmxvY2soY29udGV4dCwge1xuXHRcdFx0XHR0eXBlOiBub2Rlc1tpXS50YWdOYW1lLFxuXHRcdFx0XHRzb3VyY2U6IG5vZGVzW2ldLmlubmVySFRNTCxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVx0XG5cblx0aWYoYmxvY2tzW3R5cGVdKSB7XG5cdFx0cmV0dXJuIGJsb2Nrc1t0eXBlXS5leGVjKGJsb2Nrcyk7XG5cdH1cblxuXHRyZXR1cm4gYmxvY2soY29udGV4dCwge1xuXHRcdHR5cGU6IHR5cGUsXG5cdFx0c291cmNlOiBudWxsLFxuXHR9KTtcbn0iLCJleHBvcnQgY29uc3QgXyA9IC0xO1xuIiwiZXhwb3J0IGNvbnN0IFJlYWN0aXZlTmFtZXNwYWNlcyA9IFsnc3RhdGUnLCAnY29tcHV0ZWQnXTtcblxuZXhwb3J0IGNvbnN0IF8gPSAtMTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIGlkKVxue1xuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cdFxuXHRpZihuYW1lLm1hdGNoKC9eXFwkL2cpKVx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGRhdGEuc3RhdGVbbmFtZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJZGVudGlmaWVyTmFtZShpZClcbntcblx0aWYoIWlkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cblx0aWYobmFtZS5tYXRjaCgvXlxcJC9nKSlcdHtcblx0XHRyZXR1cm4gbmFtZS5zdWJzdHJpbmcoMSlcblx0fVxuXG5cdHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb24oZGF0YSwgcGF0aClcbntcblx0aWYocGF0aC5wYXJlbnQudHlwZSAhPT0gJ0Z1bmN0aW9uRGVjbGFyYXRpb24nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblx0bGV0IG1hdGNoID0gbWF0Y2hJZGVudGlmaWVyKGRhdGEsIGlkKTtcblxuXHRpZihtYXRjaC5uYW1lc3BhY2UgJiYgcGF0aC5saXN0S2V5ID09PSAncGFyYW1zJykge1xuXHRcdHRocm93IG5ldyBFcnJvcihgVmFyaWFibGUgJHsgbmFtZSB9IGhhcyBhbHJlYWR5IGRlZmluZWQgaW4gJHsgbWF0Y2gubmFtZXNwYWNlIH1gKVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyRXhwcmVzc2lvblxue1xuXHRjb25zdHJ1Y3RvcihpZCA9IG51bGwsIHsgY29udGV4dCA9IG51bGwsIG5hbWVzcGFjZSA9IG51bGwsIG9ic2VydmFibGUgPSBudWxsLCBjYWxsYWJsZSA9IG51bGwgfSlcblx0e1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblx0XHR0aGlzLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlO1xuXHRcdHRoaXMuY2FsbGFibGUgPSBjYWxsYWJsZTtcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR9XG5cblx0cmVwbGFjZShkaXNhYmxlRXhlY3V0aW9uKVxuXHR7XG5cdFx0aWYodGhpcy5uYW1lc3BhY2UgPT09IGZhbHNlIHx8IHRoaXMuaWQgPT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKHRoaXMuaWQpO1xuXG5cdFx0bGV0IF9uYW1lID0gYCR7IHRoaXMuY29udGV4dCB9Ll8keyB0aGlzLm5hbWVzcGFjZSB9LiR7bmFtZX1gO1xuXG5cdFx0aWYoIWRpc2FibGVFeGVjdXRpb24gJiYgdGhpcy5jYWxsYWJsZSkge1xuXHRcdFx0X25hbWUgKz0gJygpJztcblx0XHR9XG5cblx0XHR0aGlzLmlkLm5hbWUgPSBfbmFtZTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlSWRlbnRpZmllcihjb250ZXh0LCBkYXRhLCBwYXRoKVxue1xuXHRpZihbJ0Z1bmN0aW9uRGVjbGFyYXRpb24nLCAnVmFyaWFibGVEZWNsYXJhdG9yJywgJ0xhYmVsZWRTdGF0ZW1lbnQnXS5pbmNsdWRlcyhwYXRoLnBhcmVudC50eXBlKSB8fCBbJ3Byb3BlcnR5J10uaW5jbHVkZXMocGF0aC5rZXkpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXHRsZXQgeyBuYW1lc3BhY2UsIG9ic2VydmFibGUgfSA9IG1hdGNoSWRlbnRpZmllcihkYXRhLCBpZCk7XG5cdGxldCBjYWxsYWJsZSA9IGZhbHNlO1xuXG5cdC8vIGNvbnNvbGUubG9nKG5hbWUsIGtlZXBPYnNlcnZhdGlvbilcblx0aWYob2JzZXJ2YWJsZSAmJiBwYXRoLmNvbnRhaW5lci50eXBlICE9PSAnQ2FsbEV4cHJlc3Npb24nKSB7XG5cdFx0Y2FsbGFibGUgPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBJZGVudGlmaWVyRXhwcmVzc2lvbihpZCwge1xuXHRcdGNvbnRleHQsXG5cdFx0bmFtZXNwYWNlLFxuXHRcdG9ic2VydmFibGUsXG5cdFx0Y2FsbGFibGUsXG5cdH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hJZGVudGlmaWVyKGNvbnRleHQsIGlkKVxue1xuXHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblx0bGV0IG5hbWVzcGFjZSA9IGZhbHNlO1xuXHRsZXQgb2JzZXJ2YWJsZSA9IGZhbHNlO1xuXG5cdGZvcihsZXQga2V5IGluIGNvbnRleHQpIHtcblx0XHRpZihPYmplY3Qua2V5cyhjb250ZXh0W2tleV0pLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRuYW1lc3BhY2UgPSBrZXk7XG5cdFx0fVxuXHR9XG5cblx0aWYobmFtZXNwYWNlICE9PSBmYWxzZSkge1xuXHRcdG9ic2VydmFibGUgPSBSZWFjdGl2ZU5hbWVzcGFjZXMuaW5jbHVkZXMobmFtZXNwYWNlKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bmFtZXNwYWNlLFxuXHRcdG9ic2VydmFibGUsXG5cdH07XG59IiwiaW1wb3J0IHsgXyB9IGZyb20gJy4vZW1wdHkuanMnO1xuaW1wb3J0IHsgY29tcGlsZXIgfSBmcm9tICcuL2NvbXBpbGVyLmpzJztcblxuZXhwb3J0IHsgXywgY29tcGlsZXIgfSIsImltcG9ydCB7XG5cdEV4cG9ydERlZmF1bHREZWNsYXJhdGlvbixcblx0T2JqZWN0RXhwcmVzc2lvbixcblx0T2JqZWN0UHJvcGVydHksXG5cdE9iamVjdE1ldGhvZCxcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEZ1bmN0aW9uRXhwcmVzc2lvbixcblx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEJsb2NrU3RhdGVtZW50LFxuXHRSZXR1cm5TdGF0ZW1lbnQsXG5cdGlkZW50aWZpZXIsXG5cdHByb2dyYW0sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Ly8gQ29uc3RzXG5cdFJlYWN0aXR5LFxuXHRGdW5jdGlvblJldHVybkV4cHJlc3Npb24sXG5cdE9iamVjdFJldHVybkV4cHJlc3Npb24sXG5cdEFpaUV4cHJlc3Npb24sXG59IGZyb20gXCIuL2hlbHBlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGF0YSlcbntcblx0bGV0IGltcG9ydHMgPSBbXTtcblxuXHRmb3IobGV0IHByb3AgaW4gZGF0YS5pbXBvcnRzKSB7XG5cdFx0aW1wb3J0cy5wdXNoKGRhdGEuaW1wb3J0c1twcm9wXSlcblx0fTtcblxuXHRsZXQgcHJvcGVydGllcyA9IFtdO1xuXG5cdE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKHByb3AsIGtleSkgPT4ge1xuXG5cdFx0bGV0IG9iamVjdCA9IG51bGw7XG5cblx0XHRpZihGdW5jdGlvblJldHVybkV4cHJlc3Npb24uaW5jbHVkZXMocHJvcCkpIHtcblx0XHRcdG9iamVjdCA9IGdlbmVyYXRlRnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uKGRhdGEsIHByb3ApO1xuXHRcdH0gZWxzZSBpZihPYmplY3RSZXR1cm5FeHByZXNzaW9uLmluY2x1ZGVzKHByb3ApKSB7XG5cdFx0XHRvYmplY3QgPSBnZW5lcmF0ZU9iamVjdFJldHVybkV4cHJlc3Npb24oZGF0YSwgcHJvcCk7XG5cdFx0fVxuXG5cdFx0aWYoIW9iamVjdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRwcm9wZXJ0aWVzLnB1c2gob2JqZWN0KTtcblx0fSlcblxuXHRsZXQgZXhwb3J0ZWRPYmplY3QgPSBPYmplY3RFeHByZXNzaW9uKHByb3BlcnRpZXMpO1xuXHRsZXQgZXhwb3J0ZWREZWZhdWx0ID0gW1xuXHRcdEV4cG9ydERlZmF1bHREZWNsYXJhdGlvbihleHBvcnRlZE9iamVjdClcblx0XTtcblxuXHRsZXQgYm9keSA9IFtdXG5cdFx0LmNvbmNhdChpbXBvcnRzKVxuXHRcdC5jb25jYXQoZXhwb3J0ZWREZWZhdWx0KVxuXG5cdHJldHVybiBwcm9ncmFtKFxuXHRcdGJvZHksIFxuXHRcdFtdLFxuXHRcdCdtb2R1bGUnXG5cdCk7XG59XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVGdW5jdGlvblJldHVybkV4cHJlc3Npb24oZGF0YSwgcmV0dXJuUHJvcClcbntcblx0bGV0IHZhbHVlcyA9IGRhdGFbcmV0dXJuUHJvcF07XG5cdGxldCBwcm9wZXJ0aWVzID0gW107XG5cblx0Zm9yKGxldCBwcm9wIGluIHZhbHVlcykge1xuXHRcdGxldCB2YWwgPSB2YWx1ZXNbcHJvcF07XG5cblx0XHRpZih2YWwudHlwZSA9PT0gJ0Jsb2NrU3RhdGVtZW50Jykge1xuXHRcdFx0dmFsID0gQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW10sIHZhbCk7XG5cdFx0fVxuXG5cdFx0aWYoUmVhY3RpdHlbcmV0dXJuUHJvcF0pIHtcblx0XHRcdHZhbCA9IENhbGxFeHByZXNzaW9uKGlkZW50aWZpZXIoUmVhY3RpdHlbcmV0dXJuUHJvcF0pLCBbdmFsXSk7XG5cdFx0fVxuXG5cdFx0cHJvcGVydGllcy5wdXNoKFxuXHRcdFx0T2JqZWN0UHJvcGVydHkoaWRlbnRpZmllcihwcm9wKSwgdmFsKVxuXHRcdClcblx0fVxuXG5cdGxldCBGdW5jdGlvblJldHVybiA9IFJldHVyblN0YXRlbWVudChcblx0XHRPYmplY3RFeHByZXNzaW9uKFxuXHRcdFx0cHJvcGVydGllc1xuXHRcdClcblx0KVxuXG5cdGxldCBib2R5ID0gQmxvY2tTdGF0ZW1lbnQoW0Z1bmN0aW9uUmV0dXJuXSlcblxuXHRsZXQgb2JqZWN0ID0gT2JqZWN0TWV0aG9kKCdtZXRob2QnLCBpZGVudGlmaWVyKHJldHVyblByb3ApLFxuXHRcdFJlYWN0aXR5W3JldHVyblByb3BdID8gW2lkZW50aWZpZXIoUmVhY3RpdHlbcmV0dXJuUHJvcF0pXSA6IFtdXG5cdCwgYm9keSk7XG5cblx0cmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVPYmplY3RSZXR1cm5FeHByZXNzaW9uKGRhdGEsIHByb3ApXG57XG5cdGxldCB2YWx1ZXMgPSBkYXRhW3Byb3BdO1xuXHRsZXQgcHJvcGVydGllcyA9IFtdO1xuXG5cdGZvcihsZXQgcHJvcCBpbiB2YWx1ZXMpIHtcblx0XHRsZXQgdmFsID0gdmFsdWVzW3Byb3BdO1xuXG5cdFx0aWYodmFsLnR5cGUgPT09ICdGdW5jdGlvbkRlY2xhcmF0aW9uJykge1xuXHRcdFx0dmFsID0gRnVuY3Rpb25FeHByZXNzaW9uKG51bGwsIHZhbC5wYXJhbXMsIHZhbC5ib2R5KTtcblx0XHR9XG5cblx0XHRwcm9wZXJ0aWVzLnB1c2goXG5cdFx0XHRPYmplY3RQcm9wZXJ0eShpZGVudGlmaWVyKHByb3ApLCB2YWwpXG5cdFx0KVxuXHR9XG5cblx0bGV0IG9iamVjdCA9IE9iamVjdFByb3BlcnR5KFxuXHRcdGlkZW50aWZpZXIocHJvcCksXG5cdFx0T2JqZWN0RXhwcmVzc2lvbihwcm9wZXJ0aWVzKVxuXHQpO1xuXG5cdHJldHVybiBvYmplY3Q7XG59IiwiZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG5cdGltcG9ydHM6IFtdLFxuXHRwcm9wczoge30sXG5cdGRhdGE6IHt9LFxuXHRzdGF0ZToge30sXG5cdGNvbXB1dGVkOiB7fSxcblx0bWV0aG9kczoge30sXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYXRhKGNvbnRleHQpIHtcblx0cmV0dXJuIHtcblx0XHRpbXBvcnRzOiBbXSxcblx0XHRwcm9wczoge30sXG5cdFx0ZGF0YToge30sXG5cdFx0c3RhdGU6IHt9LFxuXHRcdGNvbXB1dGVkOiB7fSxcblx0XHRtZXRob2RzOiB7fSxcblx0fTtcbn0iLCIvLyBpbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCI7XG5cbi8qKlxuICogQ29uc3RzXG4gKi9cblxuZXhwb3J0IGNvbnN0IFJlYWN0aXR5ID0ge1xuXHQnc3RhdGUnOiAnbycsXG5cdCdjb21wdXRlZCc6ICdvJyxcbn07XG5cbmV4cG9ydCBjb25zdCBGdW5jdGlvblJldHVybkV4cHJlc3Npb24gPSBbXG5cdCdkYXRhJywgJ3N0YXRlJywgJ2NvbXB1dGVkJyxcbl07XG5cbmV4cG9ydCBjb25zdCBPYmplY3RSZXR1cm5FeHByZXNzaW9uID0gW1xuXHQnbWV0aG9kcycsIFxuXTtcblxuLy8gQXMgaXQgaXMgZXhwcmVzc2lvbnNcbmV4cG9ydCBjb25zdCBBaWlFeHByZXNzaW9uID0gW1xuXHQnaW1wb3J0cycsXG5dO1xuXG4vLyBleHBvcnQgY29uc3QgUkVUVVJOX0ZVTkNUSU9OX1RZUEUgPSAxO1xuLy8gZXhwb3J0IGNvbnN0IE9CSkVDVF9GVU5DVElPTl9UWVBFID0gMjtcblxuLyoqXG4gKiBGdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb250ZXh0YWJsZShkYXRhLCBpZClcbntcblx0bGV0IG5hbWUgPSBpZC5uYW1lO1xuXHRsZXQgaXNGdW5jdGlvbiA9IG5hbWUubWF0Y2goL1xcKFxcKSQvZyk7XG5cblx0bmFtZSA9IG5hbWUucmVwbGFjZSgvKFxcKHxcXCkpL2csICcnKTtcblxuXHRpZighbmFtZS5tYXRjaCgvXnRoaXNcXC4vZ2kpKSB7XG5cdFx0bGV0IGFwcGVuZCA9IFsndGhpcyddO1xuXHRcdFxuXHRcdGlmKE9iamVjdC5rZXlzKGRhdGEuc3RhdGUpLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRhcHBlbmQucHVzaCgnX3N0YXRlJyk7XG5cdFx0fSBlbHNlIGlmKE9iamVjdC5rZXlzKGRhdGEuY29tcHV0ZWQpLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRhcHBlbmQucHVzaCgnX2NvbXB1dGVkJyk7XG5cdFx0fSBlbHNlIGlmKE9iamVjdC5rZXlzKGRhdGEuZGF0YSkuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdGFwcGVuZC5wdXNoKCdfZGF0YScpO1xuXHRcdH0gZWxzZSBpZihPYmplY3Qua2V5cyhkYXRhLm1ldGhvZHMpLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRhcHBlbmQucHVzaCgnX21ldGhvZHMnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyB2YXJpYWJsZSAke25hbWV9YCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0YXBwZW5kLnB1c2gobmFtZSk7XG5cblx0XHRuYW1lID0gYXBwZW5kLmpvaW4oJy4nKTtcblx0fVxuXG5cdGlmKGlzRnVuY3Rpb24pIHtcblx0XHRuYW1lID0gYCR7bmFtZX0oKWA7XG5cdH1cblxuXHRpZC5uYW1lID0gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIGlkKVxue1xuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cdFxuXHRpZihuYW1lLm1hdGNoKC9eXFwkL2cpKVx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGRhdGEuc3RhdGVbbmFtZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJZGVudGlmaWVyTmFtZShpZClcbntcblx0aWYoIWlkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgbmFtZSA9IGlkLm5hbWU7XG5cblx0aWYobmFtZS5tYXRjaCgvXlxcJC9nKSlcdHtcblx0XHRyZXR1cm4gbmFtZS5zdWJzdHJpbmcoMSlcblx0fVxuXG5cdHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU9ic2VydmFibGVHZXR0ZXIoZGF0YSwgaWQpXG57XG5cdGlmKCFpc0lkZW50aWZpZXJSZWFjdGl2ZShkYXRhLCBpZCkpIHtcblx0XHRyZXR1cm4gaWQ7XG5cdH1cblx0XG5cdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXHRpZC5uYW1lID0gYCR7IG5hbWUgfSgpYDtcblxuXHRyZXR1cm4gaWQ7XG59IiwiXG5cbmltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiQGJhYmVsL3BhcnNlclwiO1xuaW1wb3J0IGdlbmVyYXRlIGZyb20gXCJAYmFiZWwvZ2VuZXJhdG9yXCI7XG5cbmltcG9ydCB7IGNyZWF0ZURhdGEgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgcGFyc2VDb250ZXh0IGZyb20gXCIuL3BhcnNlQ29udGV4dFwiO1xuaW1wb3J0IHBhcnNlRXhwcmVzc2lvbiBmcm9tIFwiLi9wYXJzZUV4cHJlc3Npb25cIjtcbmltcG9ydCBwYXJzZU1ldGhvZHMgZnJvbSBcIi4vcGFyc2VNZXRob2RzXCI7XG5pbXBvcnQgQXN0R2VuZXJhdG9yIGZyb20gXCIuL0FzdEdlbmVyYXRvclwiO1xuXG5cbi8qKlxuICogQ29tcGlsZXJcbiAqIEBwYXJhbSAge1t0eXBlXX0gc291cmNlIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJlYWN0aXZlVmFyaWFibGVzKGNvbnRleHQsIHNvdXJjZSlcbntcblx0bGV0IGRhdGEgPSBjcmVhdGVEYXRhKGNvbnRleHQpO1xuXG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShzb3VyY2UsIHtcblx0XHRzb3VyY2VUeXBlOiBcInVuYW1iaWd1b3VzXCIsXG5cdFx0c3RyaWN0TW9kZTogZmFsc2UsXG5cdH0pO1xuXG5cdHBhcnNlQ29udGV4dChkYXRhLCBhc3QpO1xuXG5cdGxldCByZWFjdGl2ZV92YXJpYWJsZXMgPSBbXTtcblxuXHRyZWFjdGl2ZV92YXJpYWJsZXMgPSByZWFjdGl2ZV92YXJpYWJsZXNcblx0XHQuY29uY2F0KE9iamVjdC5rZXlzKGRhdGEuc3RhdGUpKVxuXHRcdC5jb25jYXQoT2JqZWN0LmtleXMoZGF0YS5jb21wdXRlZCkpO1xuXG5cdHJldHVybiB7XG5cdFx0cmVhY3RpdmVfdmFyaWFibGVzLFxuXHRcdGRhdGEsXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlU2NyaXB0KGNvbnRleHQsIHNvdXJjZSlcbntcblx0bGV0IGRhdGEgPSBjcmVhdGVEYXRhKCk7XG5cdFx0XG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShzb3VyY2UsIHtcblx0XHRzb3VyY2VUeXBlOiBcInVuYW1iaWd1b3VzXCIsXG5cdFx0c3RyaWN0TW9kZTogZmFsc2UsXG5cdH0pO1xuXG5cdHBhcnNlQ29udGV4dChkYXRhLCBhc3QpO1xuXHRwYXJzZUV4cHJlc3Npb24oZGF0YSwgYXN0KTtcblxuXHRyZXR1cm4gZ2VuZXJhdGUoQXN0R2VuZXJhdG9yKGRhdGEpLCB7XG5cdFx0cmV0YWluTGluZXM6IGZhbHNlLFxuXHRcdGNvbXBhY3Q6IGZhbHNlLFxuXHRcdG1pbmlmaWVkOiBmYWxzZSxcblx0XHRjb25jaXNlOiBmYWxzZSxcblx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG5cdH0sIHNvdXJjZSk7XG59XG4iLCJpbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5pbXBvcnQge1xuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Z2V0SWRlbnRpZmllck5hbWUsXG5cdGlzSWRlbnRpZmllclJlYWN0aXZlLFxuXHRtYWtlT2JzZXJ2YWJsZUdldHRlcixcbn0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRhdGEsIGFzdClcbntcblx0bGV0IGlzRnVuY3Rpb25EZWNsYXJhdGlvbiA9IGZhbHNlO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlLmlkO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBwYXRoLm5vZGUuaW5pdDtcblxuXHRcdFx0XHRpZihpc0Z1bmN0aW9uRGVjbGFyYXRpb24gfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKGlkKTtcblxuXHRcdFx0XHRsZXQgdHlwZSA9IG51bGw7XG5cdFx0XHRcdGlmKFsnQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24nLCAnRnVuY3Rpb25FeHByZXNzaW9uJ10uaW5jbHVkZXModmFsdWUudHlwZSkpIHtcblx0XHRcdFx0XHR0eXBlID0gJ2NvbXB1dGVkJztcblx0XHRcdFx0fSBlbHNlIGlmKGlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIGlkKSkge1xuXHRcdFx0XHRcdHR5cGUgPSAnc3RhdGUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHR5cGUgPSAnZGF0YSc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhgU0VUIFBST1AgJHtuYW1lfSB0byAke3R5cGV9YCwgZGF0YSlcblx0XHRcdFx0ZGF0YVt0eXBlXVtuYW1lXSA9IHZhbHVlO1xuXHRcdCAgICB9LFxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlzRnVuY3Rpb25EZWNsYXJhdGlvbiA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRpc0Z1bmN0aW9uRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aXNGdW5jdGlvbkRlY2xhcmF0aW9uID0gdHJ1ZTtcblxuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGUuaWQ7XG5cdFx0XHRcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUoaWQpO1xuXG5cdFx0XHRcdGRhdGEubWV0aG9kc1tuYW1lXSA9IEZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBwYXRoLm5vZGUucGFyYW1zLCBwYXRoLm5vZGUuYm9keSk7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGlzRnVuY3Rpb25EZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHRcdCAgICB9XG5cdFx0fVxuXHR9KTtcbn0iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5pbXBvcnQge1xuXHRpZGVudGlmaWVyLFxuXHRDYWxsRXhwcmVzc2lvbixcblx0QmluYXJ5RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQge1xuXHRnZXRJZGVudGlmaWVyTmFtZSxcblx0aGFuZGxlSWRlbnRpZmllcixcblx0aXNJZGVudGlmaWVyUmVhY3RpdmUsXG5cdGNoZWNrRnVuY3Rpb25Bcmd1bWVudERlY2xhcmF0aW9uXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUV4cHJlc3Npb24oZGF0YSwgYXN0LCBjdHggPSAndGhpcycsIGRpc2FibGVFeGVjdXRpb24gPSBmYWxzZSlcbntcblx0bGV0IG9ic2VydmFibGUgPSBmYWxzZTtcblx0bGV0IGNoYW5nZWQgPSBmYWxzZTtcblx0XG5cdGxldCBGdW5jdGlvbkRlY2xhcmF0aW9uID0gZmFsc2U7XG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdEltcG9ydERlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRkYXRhLmltcG9ydHNbcGF0aC5ub2RlLnNvdXJjZS52YWx1ZV0gPSBwYXRoLm5vZGU7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdEZ1bmN0aW9uRGVjbGFyYXRpb24gPSB0cnVlO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpIHtcblx0XHQgICAgXHRGdW5jdGlvbkRlY2xhcmF0aW9uID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdC8vIG1ha2UgcmVhY3RpdmUgdmFyaWFibGUgYXNzaWdubWVudCBhcyBmdW5jdGlvblxuXHRcdEFzc2lnbm1lbnRFeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgcGF0aC5ub2RlLmxlZnQpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IGFyZ3MgPSBbcGF0aC5ub2RlLnJpZ2h0XTtcblxuXHRcdFx0XHRpZihwYXRoLm5vZGUub3BlcmF0b3IubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdGFyZ3MgPSBbXG5cdFx0XHRcdFx0XHRCaW5hcnlFeHByZXNzaW9uKHBhdGgubm9kZS5vcGVyYXRvclswXSwgcGF0aC5ub2RlLmxlZnQsIHBhdGgubm9kZS5yaWdodClcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgbmFtZSA9IGdldElkZW50aWZpZXJOYW1lKHBhdGgubm9kZS5sZWZ0KTtcblx0XHRcdFx0cGF0aC5yZXBsYWNlV2l0aChcblx0XHRcdFx0XHRDYWxsRXhwcmVzc2lvbihpZGVudGlmaWVyKG5hbWUpLCBhcmdzKVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdG9ic2VydmFibGUgPSB0cnVlO1xuXHRcdFx0XHRjaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKSB7XG5cdFx0XHRcdGNoZWNrRnVuY3Rpb25Bcmd1bWVudERlY2xhcmF0aW9uKGRhdGEsIHBhdGgpO1xuXG5cdFx0XHRcdGxldCBpZGVudGlmaWVyID0gaGFuZGxlSWRlbnRpZmllcihjdHgsIGRhdGEsIHBhdGgpO1xuXHRcdFx0XHRpZighaWRlbnRpZmllcikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG9ic2VydmFibGUgPSBpZGVudGlmaWVyLm9ic2VydmFibGUgPyB0cnVlIDogb2JzZXJ2YWJsZTtcblxuXHRcdFx0XHRpZGVudGlmaWVyLnJlcGxhY2UoZGlzYWJsZUV4ZWN1dGlvbik7XG5cblx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdGFzdCxcblx0XHRvYnNlcnZhYmxlLFxuXHRcdGNoYW5nZWQsXG5cdH1cbn0iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5pbXBvcnQge1xuXHRpZGVudGlmaWVyLFxuXHRDYWxsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQge1xuXHRnZXRJZGVudGlmaWVyTmFtZSxcblx0aXNJZGVudGlmaWVyUmVhY3RpdmUsXG5cdG1ha2VPYnNlcnZhYmxlR2V0dGVyLFxuXHRtYWtlQ29udGV4dGFibGUsXG59IGZyb20gXCIuL2hlbHBlcnNcIjtcblxubGV0IGZ1bmN0aW9uQmxvY2tIYW5kbGluZyA9IGZhbHNlO1xubGV0IGFzc2lnbm1lbnRIYW5kbGluZyA9IGZhbHNlO1xubGV0IHZhcmlhYmxlRGVjbGFyYXRpb25IYW5kbGluZyA9IGZhbHNlO1xubGV0IHNob3VsZEFzc2lnbm1lbnRIYW5kbGUgPSBmYWxzZTtcbmxldCBoYXNGdW5jdGlvblJlYWN0aXZlID0gZmFsc2U7XG5sZXQgbWVtYmVySGFuZGxpbmcgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3RNZXRob2RzIChkYXRhKSB7XG5cdHJldHVybiB7XG5cdFx0Ly8gc2F2ZSBpbXBvcnRzXG5cdFx0SW1wb3J0RGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0ZGF0YS5pbXBvcnRzW3BhdGgubm9kZS5zb3VyY2UudmFsdWVdID0gcGF0aC5ub2RlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogVHJhbnNsYXRlIHVzdWFsIHZhcmlhYmxlcyB0byByZWFjdGl2ZVxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cdFx0ICAgICAgICBpZihmdW5jdGlvbkJsb2NrSGFuZGxpbmcpIHtcblx0XHQgICAgICAgIFx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShpZCk7XG5cblx0XHQgICAgICAgIFx0aWYoZGF0YS5zdGF0ZVtuYW1lXSAmJiAhYXNzaWdubWVudEhhbmRsaW5nICYmICFbJ0NhbGxFeHByZXNzaW9uJ10uaW5jbHVkZXMocGF0aC5jb250YWluZXIudHlwZSkpIHtcblx0XHQgICAgICAgIFx0XHRoYXNGdW5jdGlvblJlYWN0aXZlID0gdHJ1ZTtcblx0XHQgICAgICAgIFx0fVxuXG5cdFx0ICAgICAgICBcdGlmKCFbJ0Fzc2lnbm1lbnRFeHByZXNzaW9uJywgJ0NhbGxFeHByZXNzaW9uJ10uaW5jbHVkZXMocGF0aC5jb250YWluZXIudHlwZSkgJiYgIXZhcmlhYmxlRGVjbGFyYXRpb25IYW5kbGluZykge1xuXHRcdCAgICAgICAgXHRcdG1ha2VPYnNlcnZhYmxlR2V0dGVyKGRhdGEsIGlkKTtcblx0XHRcdCAgICAgICAgfVxuXG5cdFx0XHQgICAgICAgIGlmKCF2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcgJiYgIW1lbWJlckhhbmRsaW5nKSB7XG5cdFx0XHQgICAgICAgIFx0bWFrZUNvbnRleHRhYmxlKGRhdGEsIGlkKTtcblx0XHRcdCAgICAgICAgfVxuXG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aCkge1xuXHRcdCAgICAgICAgLy8gY29uc29sZS5sb2coXCJJZGVudGlmaWVyIGV4aXQgY2FsbGVkXCIsIHBhdGgubm9kZS5uYW1lKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0XG5cdFx0Q2FsbEV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0bWVtYmVySGFuZGxpbmcgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXHRcdFx0XHRtZW1iZXJIYW5kbGluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0TWVtYmVyRXhwcmVzc2lvbjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRtZW1iZXJIYW5kbGluZyA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cdFx0XHRcdG1lbWJlckhhbmRsaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHR2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcgPSB0cnVlO1xuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXHRcdFx0XHR2YXJpYWJsZURlY2xhcmF0aW9uSGFuZGxpbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIE1ha2UgXG5cdFx0IHYgPSB2ICsgMVxuXHRcdCBUb1xuXHRcdCB2KHYoKSArIDEpXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHRFeHByZXNzaW9uU3RhdGVtZW50OiB7XG5cdFx0XHRleGl0KHBhdGgpIHtcblx0XHRcdFx0aWYocGF0aC5ub2RlLmV4cHJlc3Npb24udHlwZSA9PT0gJ0Fzc2lnbm1lbnRFeHByZXNzaW9uJykge1xuXHRcdFx0XHRcdGxldCBleHByZXNzaW9uID0gcGF0aC5ub2RlLmV4cHJlc3Npb247XG5cdFx0XHRcdFx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShleHByZXNzaW9uLmxlZnQpO1xuXHRcdFx0XHRcdHBhdGgucmVwbGFjZVdpdGgoXG5cdFx0XHRcdFx0XHRDYWxsRXhwcmVzc2lvbihpZGVudGlmaWVyKG5hbWUpLCBbZXhwcmVzc2lvbi5yaWdodF0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0QXNzaWdubWVudEV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdFx0YXNzaWdubWVudEhhbmRsaW5nID0gdHJ1ZTtcblx0XHRcdFx0aWYoaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgcGF0aC5ub2RlLmxlZnQpKSB7XG5cdFx0XHRcdFx0c2hvdWxkQXNzaWdubWVudEhhbmRsZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRleGl0KHBhdGgpIHtcblx0XHRcdFx0YXNzaWdubWVudEhhbmRsaW5nID0gZmFsc2U7XG5cdFx0XHRcdHNob3VsZEFzc2lnbm1lbnRIYW5kbGUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZSBmdW5jdGlvblxuXHRcdCAqIEFkZCB0aGVtIHRvIG1ldGhvZHMgYW5kIGNvbXB1dGVkIHByb3BzXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHRCbG9ja1N0YXRlbWVudDoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRpZihwYXRoLnBhcmVudC50eXBlID09PSAnRnVuY3Rpb25EZWNsYXJhdGlvbicpIHtcblx0XHQgICAgXHRcdGZ1bmN0aW9uQmxvY2tIYW5kbGluZyA9IHRydWU7XG5cdFx0ICAgIFx0fVxuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpIHtcblx0XHQgICAgXHRpZighZnVuY3Rpb25CbG9ja0hhbmRsaW5nIHx8IHBhdGgucGFyZW50LnR5cGUgIT09ICdGdW5jdGlvbkRlY2xhcmF0aW9uJykge1xuXHRcdCAgICBcdFx0cmV0dXJuO1xuXHRcdCAgICBcdH1cblxuXHRcdCAgICBcdGxldCBuYW1lID0gZ2V0SWRlbnRpZmllck5hbWUocGF0aC5jb250YWluZXIuaWQpO1xuXHRcdCAgICBcdGlmKGhhc0Z1bmN0aW9uUmVhY3RpdmUpIHtcblx0XHQgICAgXHRcdGRhdGEuY29tcHV0ZWRbbmFtZV0gPSBwYXRoLm5vZGU7XG5cdFx0ICAgIFx0fSBlbHNlIHtcblx0XHQgICAgXHRcdGRhdGEubWV0aG9kc1tuYW1lXSA9IHBhdGguY29udGFpbmVyO1xuXHRcdCAgICBcdH1cblxuXHRcdCAgICBcdGhhc0Z1bmN0aW9uUmVhY3RpdmUgPSBmYWxzZTtcblx0XHQgICAgXHRmdW5jdGlvbkJsb2NrSGFuZGxpbmcgPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkYXRhLCBhc3QpXG57XG5cblx0dHJhdmVyc2UoYXN0LCBjb2xsZWN0TWV0aG9kcyhkYXRhKSk7XG59IiwiaW1wb3J0IHsgcGFyc2VPcHRpb25zLCBwYXJzZU9wdGlvbktleSwgcGFyc2VPcHRpb25WYWx1ZSB9IGZyb20gJy4vYXR0cnMnO1xuaW1wb3J0IHsgXyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgcGFyc2VTdGF0ZW1lbnQsIHBhcnNlTG9vcCwgcGFyc2VTbG90IH0gZnJvbSAnLi9wYXJzZUZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBleHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcblxuZXhwb3J0IHZhciBISUQgPSAwO1xuXG5leHBvcnQgY29uc3QgaXNOb25QaHJhc2luZ1RhZyA9IFtcblx0J2FkZHJlc3MnLCAnYXJ0aWNsZScsICdhc2lkZScsICdiYXNlJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdjYXB0aW9uJywgJ2NvbCcsICdjb2xncm91cCcsXG5cdCdkZCcsICdkZXRhaWxzJywgJ2RpYWxvZycsICdkaXYnLCAnZGwnLCAnZHQnLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9vdGVyJyxcblx0J2Zvcm0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZCcsICdoZWFkZXInLCAnaGdyb3VwJywgJ2hyJywgJ2h0bWwnLCAnbGVnZW5kJyxcblx0J2xpJywgJ21lbnVpdGVtJywgJ21ldGEnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ3BhcmFtJywgJ3JwJywgJ3J0JywgJ3NvdXJjZScsICdzdHlsZScsICdzdW1tYXJ5Jyxcblx0J3Rib2R5JywgJ3RkJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpdGxlJywgJ3RyJywgJ3RyYWNrJywgJ3RlbXBsYXRlJywgJ2JyJywgJ3NwYW4nLCAncCcsICdQYXJzZXJCb2R5JywgJ3Nsb3QnXG5dO1xuXG52YXIgSUZfU1RBVEVNRU5UX1NUQVJURUQgPSBmYWxzZTtcblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50Q29kZSh0YWcsIG9wdGlvbnMsIGNoaWxkcmVuID0gW10pXG57XG5cdGlmKHRhZyA9PT0gJ3RlbXBsYXRlJykge1xuXHRcdHJldHVybiBgWyR7IGNoaWxkcmVuLmpvaW4oJywnKSB9XWA7XG5cdH1cblx0XG5cdHJldHVybiBgaCgnJHsgdGFnIH0nLCAkeyBvcHRpb25zIH0sIFskeyBjaGlsZHJlbi5qb2luKCcsJykgfV0pYDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVGFnKG5vZGUsIGNvbnRleHQsIG9wdGlvbnMsIGNoaWxkcmVuID0gW10pXG57XG5cdGxldCBMb29wID0gcGFyc2VMb29wKG5vZGUpO1xuXG5cdGxldCBjb2RlID0gJyc7XG5cblx0aWYoTG9vcC5pcykge1xuXHRcdGxldCBjb25kaXRpb24gPSBleHByZXNzaW9uKGNvbnRleHQsIExvb3AuY29uZGl0aW9uLCBmYWxzZSk7XG5cdFx0Y29kZSArPSBgbG9vcCgkeyBjb25kaXRpb24udmFsdWUgfSwgKCR7IExvb3AuYXJncyB9KSA9PiB7IHJldHVybiBgXG5cdH1cblxuXHRjb2RlICs9IGdldENvbXBvbmVudENvZGUobm9kZS50YWcsIG9wdGlvbnMsIGNoaWxkcmVuKTtcblxuXHRpZihMb29wLmlzKSB7XG5cdFx0Y29kZSArPSBgO30pYDtcblx0fVxuXG5cdGNvZGUgKz0gJyc7XG5cblx0cmV0dXJuIGNvZGU7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU2xvdEF0dHJzKG5vZGUpXG57XG5cdGxldCBuYW1lID0gJ2RlZmF1bHQnO1xuXHRsZXQgdGFnID0gbnVsbDtcblxuXHRpZihub2RlLnRhZyA9PT0gJ3Nsb3QnKSB7XG5cdFx0bmFtZSA9IG5vZGUuYXR0cnNbJ25hbWUnXSB8fCAnZGVmYXVsdCc7XG5cdFx0dGFnID0gbm9kZS5hdHRyc1sndGFnJ10gfHwgbnVsbDtcblx0fVxuXG5cdGlmKHRhZyAhPT0gbnVsbCkge1xuXHRcdHRhZyA9IGAnJHt0YWd9J2A7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdG5hbWUsXG5cdFx0dGFnLFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlXG57XG5cdGNvbnN0cnVjdG9yKHsgdGFnID0gbnVsbCwgYXR0cnMgPSBudWxsLCBjaGlsZHJlbiA9IFtdIH0pXG5cdHtcblx0XHR0aGlzLmhpZCA9ICsrSElEO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMuYXR0cnMgPSBhdHRycztcblx0XHR0aGlzLm9wdGlvbnMgPSBwYXJzZU9wdGlvbnMoYXR0cnMpO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0XHRcblx0XHR0aGlzLnByZXZTaWJsaW5nID0gbnVsbDtcblx0XHR0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdFx0Ly8gaWZcblx0XHR0aGlzLmlmX3N0YXRlbWVudCA9IGZhbHNlO1xuXHRcdHRoaXMuaW5kZXggPSAwO1xuXHR9XG5cblx0Z2V0IGlzQ29tcG9uZW50KClcblx0e1xuXHRcdHJldHVybiAhaXNOb25QaHJhc2luZ1RhZy5pbmNsdWRlcyh0aGlzLnRhZyk7XG5cdH1cblxuXHRnZXQgaXNJbnNpZGVDb21wb25lbnQoKVxuXHR7XG5cdFx0bGV0IG5vZGUgPSB0aGlzO1xuXHRcdGxldCBpID0gMDtcblx0XHRsZXQgaXNJbnNpZGVDb21wb25lbnQgPSBmYWxzZTtcblxuXHRcdHdoaWxlKG5vZGUpIHtcblx0XHRcdGkrKztcblxuXHRcdFx0aWYobm9kZS5pc0NvbXBvbmVudCkge1xuXHRcdFx0XHRpc0luc2lkZUNvbXBvbmVudCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQ7XG5cblx0XHRcdGlmKGkgPiAxMDApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdMb29wIHByb2JsZW0nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaXNJbnNpZGVDb21wb25lbnQ7XG5cdH1cblxuXHRnZXQgaXNTbG90KClcblx0e1xuXHRcdHJldHVybiB0aGlzLnRhZyA9PT0gJ3Nsb3QnO1xuXHR9XG5cblx0YXBwZW5kQ2hpbGQobm9kZSlcblx0e1xuXHRcdG5vZGUuaW5kZXggPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcblx0XHRub2RlLnBhcmVudCA9IHRoaXM7XG5cdFx0dGhpcy5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuXHR9XG5cblx0Z2V0SW5kZXhQYXRoKClcblx0e1xuXHRcdGxldCBpbmRleGVzID0gW107XG5cdFx0bGV0IG5vZGUgPSB0aGlzO1xuXHRcdGxldCBpID0gMDtcblxuXHRcdHdoaWxlKG5vZGUpIHtcblx0XHRcdGkrKztcblxuXHRcdFx0aW5kZXhlcy5wdXNoKG5vZGUuaW5kZXgpO1xuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50O1xuXG5cdFx0XHRpZihpID4gMTApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdMb29wIHByb2JsZW0nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpbmRleGVzLnJldmVyc2UoKTtcblxuXHRcdHJldHVybiBpbmRleGVzO1xuXHR9XG5cblx0c2V0U2libGluZ3MoKVxuXHR7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0aGlzLmNoaWxkcmVuW2kgKyAxXSkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuW2ldLm5leHRTaWJsaW5nID0gdGhpcy5jaGlsZHJlbltpICsgMV07XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW5baSArIDFdLnByZXZTaWJsaW5nID0gdGhpcy5jaGlsZHJlbltpXTtcblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy5jaGlsZHJlbltpXSBpbnN0YW5jZW9mIE5vZGUpIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbltpXS5zZXRTaWJsaW5ncygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldFNsb3RzKGluZGV4ZXMgPSBbXSwgaXNVbmRlckNvbXBvbmVudCA9IGZhbHNlKVxuXHR7XG5cdFx0bGV0IHNsb3RzID0ge307XG5cblx0XHRpZih0aGlzLmlzQ29tcG9uZW50KSB7XG5cdFx0XHRpc1VuZGVyQ29tcG9uZW50ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBub2RlID0gdGhpcy5jaGlsZHJlbltpXTtcblx0XHRcdGxldCBub2RlSW5kZXhlcyA9IGluZGV4ZXMuY29uY2F0KFtpXSk7XG5cblx0XHRcdGlmKG5vZGUgaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRcdHNsb3RzID0gT2JqZWN0LmFzc2lnbihzbG90cywgbm9kZS5nZXRTbG90cyhub2RlSW5kZXhlcywgaXNVbmRlckNvbXBvbmVudCkpO1xuXG5cdFx0XHRcdGlmKG5vZGUuaXNTbG90ICYmICFpc1VuZGVyQ29tcG9uZW50KSB7XG5cdFx0XHRcdFx0bGV0IG5hbWUgPSBub2RlLmF0dHJzWyduYW1lJ10gfHwgJ2RlZmF1bHQnO1xuXHRcdFx0XHRcdHNsb3RzW25hbWVdID0gbm9kZUluZGV4ZXM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gc2xvdHM7XG5cdH1cblxuXHR0b0FTVChjb250ZXh0ID0gbnVsbCwgaHlkcmF0ZSA9IGZhbHNlLCBpc0NhbGxFeHByZXNzaW9uID0gZmFsc2UpXG5cdHtcblx0XHRsZXQgY29kZSA9ICcnO1xuXHRcdGxldCBjaGlsZHJlbiA9IFtdO1xuXHRcdGxldCBzaG91bGRIeWRhcmF0ZSA9IGZhbHNlO1xuXHRcdGxldCBzaG91bGRPcHRpb25zSHlkcmF0ZSA9IGZhbHNlO1xuXHRcdGxldCBzaG91bGRTbG90c0h5ZHJhdGUgPSBmYWxzZTtcblx0XHRsZXQgcmVuZGVyID0gIWh5ZHJhdGU7XG5cdFx0Ly8gbGV0IGlzQ2FsbEV4cHJlc3Npb24gPSBmYWxzZTtcblxuXHRcdGxldCBTdGF0ZW1lbnQgPSBwYXJzZVN0YXRlbWVudCh0aGlzKTtcblx0XHRsZXQgU2xvdCA9IHBhcnNlU2xvdCh0aGlzKTtcblxuXHRcdGlmKFN0YXRlbWVudC5pcykge1xuXHRcdFx0aXNDYWxsRXhwcmVzc2lvbiA9IHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IHNsb3RzID0ge307XG5cblx0XHQvKipcblx0XHQgKiBUcmFuc2xhdGUgY2hpbGRyZW4gdG8gaHlwZXJzY3JpcHRcblx0XHQgKiBAcGFyYW0gIHtbdHlwZV19IHZhciBpICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cblx0XHQgKiBAcmV0dXJuIHtbdHlwZV19ICAgICBbZGVzY3JpcHRpb25dXG5cdFx0ICovXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXG5cdFx0XHRsZXQgeyB2YWx1ZSwgc3RhdGVmdWxsIH0gPSBjaGlsZC50b0FTVChjb250ZXh0LCBoeWRyYXRlLCBpc0NhbGxFeHByZXNzaW9uKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdbY2hpbGRdJywgY2hpbGQsIHN0YXRlZnVsbCk7XG5cdFx0XHRpZihzdGF0ZWZ1bGwpIHtcblx0XHRcdFx0c2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQYXJzZSBzbG90cyBpZiBjb21wb25lbnRcblx0XHRcdGlmKHRoaXMuaXNDb21wb25lbnQpIHtcblx0XHRcdFx0bGV0IHsgbmFtZSB9ID0gcGFyc2VTbG90QXR0cnMoY2hpbGQpO1xuXG5cdFx0XHRcdGlmKCFzbG90c1tuYW1lXSkge1xuXHRcdFx0XHRcdHNsb3RzW25hbWVdID0gW107XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzbG90c1tuYW1lXS5wdXNoKHZhbHVlKTtcblxuXHRcdFx0XHRpZih2YWx1ZSAhPT0gXykge1xuXHRcdFx0XHRcdHNob3VsZFNsb3RzSHlkcmF0ZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIElmIG5vdCBhcHBlbmQgY2hpbGRcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cblx0XHRsZXQgb3B0aW9ucyA9ICcnO1xuXG5cdFx0Ly8gSGFuZGxlIHNsb3RzIGZvciBDb21wb25lbnQgY2hpbGRyZW5cblx0XHRpZih0aGlzLmlzQ29tcG9uZW50ICYmIE9iamVjdC5rZXlzKHNsb3RzKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSAnJztcblxuXHRcdFx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcblx0XHRcdFx0dmFsdWUgKz0gYCcke2tleX0nOiBbJHsgc2xvdHNba2V5XS5qb2luKCcsJykgfV0sYFxuXHRcdFx0fVxuXG5cdFx0XHRpZigoaHlkcmF0ZSAmJiBzaG91bGRTbG90c0h5ZHJhdGUpIHx8IHJlbmRlcikge1xuXHRcdFx0XHRvcHRpb25zICs9IGAkc2xvdHM6IHsgJHsgdmFsdWUgfSB9LGA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxlIG9wdGlvbnNcblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLm9wdGlvbnMpIHtcblx0XHRcdGxldCB7IHZhbHVlLCBzdGF0ZWZ1bGwgfSA9IHBhcnNlT3B0aW9uVmFsdWUoY29udGV4dCwga2V5LCB0aGlzLm9wdGlvbnNba2V5XSk7XG5cdFx0XHRcblx0XHRcdGlmKHN0YXRlZnVsbCkge1xuXHRcdFx0XHRzaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHN0YXRlZnVsbCB8fCAhaHlkcmF0ZSB8fCBrZXkgPT09ICdkYXRhLWhpZCcpIHtcblx0XHRcdFx0b3B0aW9ucyArPSBgJHsgcGFyc2VPcHRpb25LZXkoa2V5KSB9OiAkeyB2YWx1ZSB9LGA7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHN0YXRlZnVsbCAmJiBoeWRyYXRlKSB7XG5cdFx0XHRcdHNob3VsZE9wdGlvbnNIeWRyYXRlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblxuXHRcdHNob3VsZEh5ZGFyYXRlID0gdGhpcy5pc0NvbXBvbmVudCB8fCBzaG91bGRIeWRhcmF0ZTtcblxuXHRcdC8vIEFkZCBoeWRyYXRlIElEIFxuXHRcdGlmKHNob3VsZEh5ZGFyYXRlKSB7XG5cdFx0XHRvcHRpb25zICs9IGBpZDogY3R4LmdldFVJRCgkeyB0aGlzLmhpZCB9KSxgO1xuXHRcdH1cblxuXHRcdC8vIElzIGNvbXBvbmVudCBzdGF0ZWZ1bFxuXHRcdGlmKHNob3VsZE9wdGlvbnNIeWRyYXRlKSB7XG5cdFx0XHRvcHRpb25zICs9IGBfczogdHJ1ZSxgO1xuXHRcdH1cblxuXHRcdG9wdGlvbnMgPSBgeyR7b3B0aW9uc319YDtcblxuXHRcdGlmKFN0YXRlbWVudC5pcykge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGV4cHJlc3Npb24oY29udGV4dCwgU3RhdGVtZW50LmNvbmRpdGlvbiwgZmFsc2UpO1xuXG5cdFx0XHRpZihTdGF0ZW1lbnQuc3RhcnQpIHtcblx0XHRcdFx0Y29kZSArPSBgc3RhdGVtZW50KGA7XG5cdFx0XHR9XG5cblx0XHRcdGNvZGUgKz0gYCAkeyBjb25kaXRpb24udmFsdWUgfSwgJHsgaGFuZGxlVGFnKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMsIGNoaWxkcmVuKSB9YDtcblxuXHRcdFx0aWYoU3RhdGVtZW50LmVuZCkge1xuXHRcdFx0XHRjb2RlICs9IGApYDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYoU2xvdC5pcykge1xuXHRcdFx0bGV0IHsgbmFtZSwgdGFnIH0gPSBwYXJzZVNsb3RBdHRycyh0aGlzKTtcblxuXHRcdFx0aWYoU2xvdC5jYWxsRXhwcmVzc2lvbikge1xuXHRcdFx0XHRsZXQgYXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmF0dHJzKTtcblx0XHRcdFx0XG5cdFx0XHRcdGRlbGV0ZSBhdHRycy5uYW1lO1xuXHRcdFx0XHRkZWxldGUgYXR0cnMudGFnO1xuXG5cdFx0XHRcdGNvZGUgKz0gYHNsb3QoY3R4LCBoLCAnJHsgbmFtZSB9JywgJHsgdGFnIH0sICR7IEpTT04uc3RyaW5naWZ5KGF0dHJzKSB9LCBbJHsgY2hpbGRyZW4uam9pbignLCcpIH1dKWA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb2RlICs9IGAkeyBjaGlsZHJlbi5qb2luKCcsJykgfWA7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvZGUgKz0gaGFuZGxlVGFnKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMsIGNoaWxkcmVuKTtcblx0XHR9XG5cblx0XG5cdFx0Ly8gY29uc29sZS5sb2coaHlkcmF0ZSwgc2hvdWxkSHlkYXJhdGUsIGlzQ2FsbEV4cHJlc3Npb24sIGNvZGUpXG5cdFx0aWYoaHlkcmF0ZSAmJiAhc2hvdWxkSHlkYXJhdGUgJiYgIWlzQ2FsbEV4cHJlc3Npb24pIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHZhbHVlOiBfLFxuXHRcdFx0XHRzdGF0ZWZ1bGw6IGZhbHNlLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IGNvZGUsXG5cdFx0XHRzdGF0ZWZ1bGw6IHNob3VsZEh5ZGFyYXRlLFxuXHRcdH07XG5cdH1cbn0iLCJpbXBvcnQgeyBwYXJzZU9wdGlvblZhbHVlIH0gZnJvbSAnLi9hdHRycyc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHROb2RlXG57XG5cdGNvbnN0cnVjdG9yKHRleHQpXG5cdHtcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHR9XG5cblx0dG9BU1QoY29udGV4dCA9IG51bGwsIGh5ZHJhdGUgPSBmYWxzZSwgaXNDYWxsRXhwcmVzc2lvbiA9IGZhbHNlKVxuXHR7XG5cdFx0bGV0IHsgdmFsdWUsIHN0YXRlZnVsbCB9ID0gcGFyc2VPcHRpb25WYWx1ZShjb250ZXh0LCAnX3QnLCB0aGlzLnRleHQpO1xuXHRcdC8vIGNvbnNvbGUubG9nKGB0KCR7dGhpcy50ZXh0fSlgLCB2YWx1ZSwgc3RhdGVmdWxsKVxuXG5cdFx0aWYoaHlkcmF0ZSAmJiAhc3RhdGVmdWxsICYmICFpc0NhbGxFeHByZXNzaW9uKSB7XG5cdFx0XHR2YWx1ZSA9IF87XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlLFxuXHRcdFx0c3RhdGVmdWxsLFxuXHRcdH1cblx0fVxufSIsImltcG9ydCB7IGV4cHJlc3Npb24gfSBmcm9tICcuL2V4cHJlc3Npb24nO1xuXG5jb25zdCBBdHRyc01hcCA9IHtcblx0J3N0eWxlJzogJ3N0YXRpY1N0eWxlJyxcblx0J2NsYXNzJzogJ3N0YXRpY0NsYXNzJyxcblx0JzpzdHlsZSc6ICdkeW5hbWljU3R5bGUnLFxuXHQnOmNsYXNzJzogJ2R5bmFtaWNDbGFzcycsXG59O1xuXG5jb25zdCBIVE1MQXR0cmlidXRlcyA9IFsnaWQnLCAnbmFtZScsICd2YWx1ZScsICdwbGFjZWhvbGRlciddO1xuXG4vKipcbiAqIFRoZXJlIGFyZSBzb21lIHR5cGUgb2YgZXhwcmVzc2lvbnMgKGphdmFzY3JpcHQgY29kZSlcbiAqIDEuIEBjbGljaz1cImV4cHJcIiAtPiBfbWV0aG9kcy5zdWJtaXRGb3JtKCk7XG4gKiAyLiA6c3R5bGU9XCJleHByXCIgLT4gWyd0ZXN0JywgX3N0YXRlLnNvbWUsIF9jb21wdXRlZC5zb21lXSAgfHwgIFsndGVzdCcsIF9kYXRhLnBhZGRpbmdUb3BdXG4gKiAzLiA6Y2xhc3M9XCJleHByXCIgLT4geyBpcy1sb2FkaW5nOiBfc3RhdGUubG9hZGluZyB9ICB8fCAgeyBpcy1yZWQ6IF9kYXRhLnJlZCB9XG4gKiA0LiB2LWlmPVwiZXhwclwiIC0+IF9kYXRhLnR5cGUgPT09ICd0eXBlJyAgfHwgIF9zdGF0ZS52aXNpYmxlID09PSB0cnVlXG4gKlxuICogSW4gcmVuZGVyIGZ1bmN0aW9uIHNob3VsZCBiZSBcbiAqIDEuIF9tZXRob2RzLnN1Ym1pdEZvcm0oKTtcbiAqIDIuIHN0eWxlKFsndGVzdCcsIF9zdGF0ZS5zb21lKCksIF9jb21wdXRlZC5zb21lKCkgXSkgIHx8ICBbJ3Rlc3QnLCBfZGF0YS5wYWRkaW5nVG9wXSAgU0hPVUxEIE5PVCBCRSBDQUxMRUQgQkVDQVVTRSBSRUFDVElWRVxuICogMy4gXG4gKiA0LiAgX2RhdGEudHlwZSAgfHwgICgpID0+IHsgcmV0dXJuIF9zdGF0ZS52aXNpYmxlKCkgfSBPUiBfc3RhdGUudmlzaWJsZVxuICogXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiBwYXJzZU9wdGlvblZhbHVlKGNvbnRleHQsIGtleSwgdmFsdWUpXG57XG5cdGxldCBzdGF0ZWZ1bGwgPSBmYWxzZTtcblx0bGV0IGtlZXBPYnNlcnZhdGlvbiA9IGZhbHNlO1xuXG5cdGlmKGtleVswXSA9PT0gJyQnKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlLFxuXHRcdFx0c3RhdGVmdWxsLFxuXHRcdH1cblx0fVxuXG5cdGlmKGtleVswXSA9PT0gJ0AnKSB7XG5cdFx0c3RhdGVmdWxsID0gdHJ1ZTtcblx0fVxuXG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRrZWVwT2JzZXJ2YXRpb24gPSB0cnVlO1xuXHR9XG5cblx0aWYoa2V5WzBdID09PSAnXycpIHtcblx0XHR2YWx1ZSA9ICdgJyArIHZhbHVlLnJlcGxhY2UoL3t7KCg/Oig/ISh9fSkpLikrKX19L2csICckeyQxfScpICsgJ2AnO1xuXHRcdGtlZXBPYnNlcnZhdGlvbiA9IGZhbHNlO1xuXHR9XG5cblx0bGV0IGV4cCA9IGV4cHJlc3Npb24oY29udGV4dCwgdmFsdWUsIGtlZXBPYnNlcnZhdGlvbik7XG5cdFxuXHR2YWx1ZSA9IGV4cC52YWx1ZTtcblxuXHRpZighc3RhdGVmdWxsICYmIGV4cC5zdGF0ZWZ1bGwpIHtcblx0XHRzdGF0ZWZ1bGwgPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR2YWx1ZSxcblx0XHRzdGF0ZWZ1bGwsXG5cdH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlT3B0aW9uS2V5KGtleSwgdmFsdWUpXG57XG5cdGlmKEF0dHJzTWFwW2tleV0pIHtcblx0XHRyZXR1cm4gQXR0cnNNYXBba2V5XTtcblx0fSBlbHNlIGlmKGtleVswXSA9PT0gJ0AnKSB7XG5cdFx0cmV0dXJuIGtleS5yZXBsYWNlKC9AL2csICdvbicpO1xuXHR9XG5cblx0cmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gcGFyc2VTdHlsZXMoc3RyaW5nKVxue1xuXHRsZXQgc3R5bGVzID0ge307XG5cdGxldCBwYWlycyA9IHN0cmluZy5yZXBsYWNlKC9cXHMvZywgJycpLnNwbGl0KCc7Jyk7XG5cdFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRtcCA9IHBhaXJzW2ldLnNwbGl0KCc6Jyk7XG5cdFx0aWYodG1wLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0c3R5bGVzW3RtcFswXV0gPSB0bXBbMV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVPcHRpb25LZXkodmFyaWFibGUpXG57XG5cdGlmKHZhcmlhYmxlLm1hdGNoKC9cXC0vZykpIHtcblx0XHR2YXJpYWJsZSA9IGAnJHt2YXJpYWJsZX0nYDtcblx0fVxuXG5cdHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gcGFyc2VPcHRpb25zKGF0dHJzKVxue1xuXHRsZXQgb3B0aW9ucyA9IHt9O1xuXG5cdGZvcihsZXQga2V5IGluIGF0dHJzKVxuXHR7XG5cdFx0bGV0IHZhbHVlID0gYXR0cnNba2V5XTtcblx0XHRsZXQgb3B0aW9uX2tleSA9IHByZXBhcmVPcHRpb25LZXkoa2V5KTtcblxuXHRcdGlmKGtleS5tYXRjaCgvXnZcXC0vZykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHQvLyBJcyBodG1sIGF0dHJcblx0XHRpZihIVE1MQXR0cmlidXRlcy5pbmNsdWRlcyhrZXkpIHx8IE9iamVjdC5rZXlzKEF0dHJzTWFwKS5pbmNsdWRlcyhrZXkpIHx8IGtleS5tYXRjaCgvZGF0YVxcLS9nKSB8fCBrZXkubWF0Y2goL0AvZykpIHtcblx0XHRcdGlmKGtleSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlU3R5bGVzKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0b3B0aW9uc1tvcHRpb25fa2V5XSA9IHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZighb3B0aW9ucy5wcm9wcykge1xuXHRcdFx0XHRvcHRpb25zLnByb3BzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdG9wdGlvbnMucHJvcHNbb3B0aW9uX2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gcGFyc2VBdHRycyhzdHJpbmcpXG57XG5cdGlmKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnIHx8IHN0cmluZyA9PSAnJykge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHNcXHMrL2csICcgJykudHJpbSgpO1xuXG5cdGxldCBwYWlycyA9IHN0cmluZy5tYXRjaCgvKFteXFxzXSopPVtcIiddKC4qPylbXCInXXwoW1xcd1xcLV0rKS9nKVxuXHRsZXQgYXR0cnMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRtcCA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0bGV0IG5hbWUgPSB0bXBbMF07XG5cdFx0bGV0IHZhbHVlID0gdG1wWzFdID8gdG1wWzFdLnN1YnN0cmluZygxLCB0bXBbMV0ubGVuZ3RoIC0gMSkgOiB0cnVlO1xuXHRcdGF0dHJzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCB7IHBhcnNlQXR0cnMsIHBhcnNlT3B0aW9ucywgcGFyc2VPcHRpb25LZXksIHBhcnNlT3B0aW9uVmFsdWUgfTsiLCJpbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcbmltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiQGJhYmVsL2dlbmVyYXRvclwiO1xuaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcbmltcG9ydCBwYXJzZUV4cHJlc3Npb24gZnJvbSBcIi4uL3NjcmlwdC9wYXJzZUV4cHJlc3Npb25cIjtcblxuaW1wb3J0IHtcblx0aWRlbnRpZmllcixcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEJpbmFyeUV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0aGFuZGxlSWRlbnRpZmllcixcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmltcG9ydCB7IHByZXBhcmVPcHRpb25LZXkgfSBmcm9tICcuL2F0dHJzJztcblxuaW1wb3J0IHsgaGFzU3RhdGUsIGdldFZhcmlhYmxlIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb24oY29udGV4dCwgY29kZSwga2VlcE9ic2VydmF0aW9uID0gdHJ1ZSlcbntcblx0aWYodHlwZW9mIGNvZGUgPT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXRlZnVsbDogZmFsc2UsXG5cdFx0XHR2YWx1ZTogSlNPTi5zdHJpbmdpZnkoY29kZSlcblx0XHR9O1xuXHR9XG5cblx0Y29kZSA9IFN0cmluZyhjb2RlKTtcblxuXHQvLyBjb25zb2xlLndhcm4oY29kZSk7XG5cblx0bGV0IGlkZW50aWZpZXJPbmx5ID0gdHJ1ZTtcblx0bGV0IHNob3VsZEV4ZWN1dGUgPSBrZWVwT2JzZXJ2YXRpb247XG5cblx0Y29uc3QgYXN0ID0gcGFyc2VyLnBhcnNlKGNvZGUpO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHBhdGgubm9kZS50eXBlLCBwYXRoLm5vZGUpXG5cdFx0XHRpZighWydQcm9ncmFtJywgJ0V4cHJlc3Npb25TdGF0ZW1lbnQnLCAnSWRlbnRpZmllcicsICdCbG9ja1N0YXRlbWVudCcsICdMYWJlbGVkU3RhdGVtZW50J10uaW5jbHVkZXMocGF0aC5ub2RlLnR5cGUpKSB7XG5cdFx0XHRcdGlkZW50aWZpZXJPbmx5ID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgeyBjaGFuZ2VkLCBvYnNlcnZhYmxlIH0gPSBwYXJzZUV4cHJlc3Npb24oY29udGV4dC5kYXRhLCBhc3QsICdjdHgnLCBpZGVudGlmaWVyT25seSk7XG5cblx0aWYoY2hhbmdlZCkge1xuXHRcdGNvZGUgPSBnZW5lcmF0ZShhc3QsIHtcblx0XHRcdHJldGFpbkxpbmVzOiB0cnVlLFxuXHRcdFx0Y29tcGFjdDogdHJ1ZSxcblx0XHRcdG1pbmlmaWVkOiB0cnVlLFxuXHRcdFx0Y29uY2lzZTogdHJ1ZSxcblx0XHRcdHF1b3RlczogXCJkb3VibGVcIixcblx0XHR9LCBjb2RlKS5jb2RlO1xuXG5cdFx0XG5cdFx0Ly8gY2xlYW4gYXBwZW5kXG5cdFx0Y29kZSA9IGNvZGUucmVwbGFjZSgvKDt8LCkkL2csICcnKTtcblxuXHRcdGlmKGNoYW5nZWQgJiYgIWlkZW50aWZpZXJPbmx5KSB7XG5cdFx0XHRjb2RlID0gYCgpID0+IHsgcmV0dXJuICR7Y29kZX07IH1gO1xuXHRcdH1cblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGNvZGUpO1xuXHQvLyBjb25zb2xlLmxvZygnLS0tLS0tLS0nKTtcblxuXHRyZXR1cm4ge1xuXHRcdHN0YXRlZnVsbDogb2JzZXJ2YWJsZSxcblx0XHR2YWx1ZTogY29kZVxuXHR9XG59XG4iLCJpbXBvcnQgeyBwYXJzZUhUTUwgfSBmcm9tICcuL2h0bWwnO1xuaW1wb3J0IHsgcGFyc2VBdHRycyB9IGZyb20gJy4vYXR0cnMnO1xuaW1wb3J0IHBhcnNlRnVuY3Rpb25zIGZyb20gJy4vcGFyc2VGdW5jdGlvbnMnO1xuXG5pbXBvcnQgcHJldHRpZXIgZnJvbSAncHJldHRpZXIvc3RhbmRhbG9uZSc7XG5pbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGUoY29udGV4dCwgaHRtbClcbntcblx0bGV0IHRyZWUgPSBwYXJzZUhUTUwoaHRtbCk7XG5cblx0dHJlZS5zZXRTaWJsaW5ncygpO1xuXG5cdGxldCBzbG90cyA9IHRyZWUuZ2V0U2xvdHMoKTtcblxuXHR0cmVlID0gdHJlZS5jaGlsZHJlbjtcblxuXHRsZXQgYXN0ID0ge1xuXHRcdHJlbmRlcjogW10sXG5cdFx0aHlkcmF0ZTogW10sXG5cdH1cblxuXHRsZXQgcmVzdWx0ID0ge1xuXHRcdHJlbmRlcjogJycsXG5cdFx0aHlkcmF0ZTogJycsXG5cdFx0c2hvdWxkSHlkYXJhdGU6IGZhbHNlLFxuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHJlbmRlckFTVCA9IHRyZWVbaV0udG9BU1QoY29udGV4dCwgZmFsc2UpO1xuXHRcdGxldCBoeWRyYXRpb25BU1QgPSB0cmVlW2ldLnRvQVNUKGNvbnRleHQsIHRydWUpO1xuXG5cdFx0aWYoaHlkcmF0aW9uQVNULnN0YXRlZnVsbCkge1xuXHRcdFx0cmVzdWx0LnNob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRhc3QucmVuZGVyLnB1c2gocmVuZGVyQVNULnZhbHVlKTtcblx0XHRhc3QuaHlkcmF0ZS5wdXNoKGh5ZHJhdGlvbkFTVC52YWx1ZSk7XG5cdH1cblxuXHRpZihhc3QucmVuZGVyLmxlbmd0aCA9PT0gMSkge1xuXHRcdHJlc3VsdC5yZW5kZXIgPSBhc3QucmVuZGVyWzBdO1xuXHRcdHJlc3VsdC5oeWRyYXRlID0gYXN0Lmh5ZHJhdGVbMF07XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0LnJlbmRlciA9IGBbJHsgIGFzdC5yZW5kZXIuam9pbignLCcpIH1dYDtcblx0XHRyZXN1bHQuaHlkcmF0ZSA9IGBbJHsgIGFzdC5oeWRyYXRlLmpvaW4oJywnKSB9XWA7XG5cdH1cblxuXHRsZXQgcHJldHRpZXJDb25maWcgPSB7XG5cdFx0cGFyc2VyKHRleHQsIHsgYmFiZWwgfSkge1xuXHRcdFx0cmV0dXJuIHBhcnNlci5wYXJzZSh0ZXh0KTtcblx0XHR9XG5cdH07XG5cblx0cmVzdWx0LnJlbmRlciA9IHByZXR0aWVyLmZvcm1hdChyZXN1bHQucmVuZGVyLCBwcmV0dGllckNvbmZpZyk7XG5cdHJlc3VsdC5oeWRyYXRlID0gcHJldHRpZXIuZm9ybWF0KHJlc3VsdC5oeWRyYXRlLCBwcmV0dGllckNvbmZpZyk7XG5cdHJlc3VsdC5zbG90cyA9IHNsb3RzO1xuXHRcblx0cmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgeyBfIH0gZnJvbSAnLi4vZW1wdHknO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzU3RhdGUoY29udGV4dCwgdmFyaWFibGUpXG57XG5cdC8vIGNvbnNvbGUubG9nKGNvbnRleHQsIHZhcmlhYmxlLnNwbGl0KCcuJykpO1xuXHRpZihjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgdmFsdWUgPSBjb250ZXh0O1xuXHRsZXQgdmFyX3BhcnRzID0gdmFyaWFibGUuc3BsaXQoJy4nKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHZhcl9wYXJ0cy5sZW5ndGg7IGkrKykge1xuXHRcdHZhbHVlID0gdmFsdWVbdmFyX3BhcnRzW2ldXTtcblx0XHRpZih0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0aWYodmFsdWUuX29ic2VydmFibGUpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFyaWFibGUoY29udGV4dCwgdmFyaWFibGUpXG57XG5cdGlmKE9iamVjdC5rZXlzKGNvbnRleHQuY29tcHV0ZWQpLmluY2x1ZGVzKHZhcmlhYmxlKSkge1xuXHRcdHJldHVybiBgX2NvbXB1dGVkLiR7dmFyaWFibGV9YDtcblx0fVxuXG5cdGlmKE9iamVjdC5rZXlzKGNvbnRleHQuc3RhdGUpLmluY2x1ZGVzKHZhcmlhYmxlKSkge1xuXHRcdHJldHVybiBgX3N0YXRlLiR7dmFyaWFibGV9YDtcblx0fVxuXG5cdGlmKE9iamVjdC5rZXlzKGNvbnRleHQuZGF0YSkuaW5jbHVkZXModmFyaWFibGUpKSB7XG5cdFx0cmV0dXJuIGBfZGF0YS4ke3ZhcmlhYmxlfWA7XG5cdH1cblxuXHRpZihPYmplY3Qua2V5cyhjb250ZXh0Lm1ldGhvZHMpLmluY2x1ZGVzKHZhcmlhYmxlKSkge1xuXHRcdHJldHVybiBgJHt2YXJpYWJsZX0uYmluZChjdHgpYDtcblx0fVxuXG5cdGlmKE9iamVjdC5rZXlzKGNvbnRleHQucHJvcHMpLmluY2x1ZGVzKHZhcmlhYmxlKSkge1xuXHRcdHJldHVybiBgX3Byb3BzLiR7dmFyaWFibGV9YDtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWxwYXJzZXIyJztcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgVGV4dE5vZGUgZnJvbSAnLi9UZXh0Tm9kZSc7XG5cblxuZnVuY3Rpb24gcHJlcGFyZUhUTUwoaHRtbClcbntcblx0cmV0dXJuIGh0bWwucmVwbGFjZSgvXFx0L2csICcgJykucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gaW5pdFN0YWNrKClcbntcblx0cmV0dXJuIFtcblx0XHRuZXcgTm9kZSh7XG5cdFx0XHR0YWc6ICdQYXJzZXJCb2R5Jyxcblx0XHRcdGNoaWxkcmVuOiBbXSxcblx0XHR9KVxuXHRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIVE1MKGh0bWwpXG57XG5cdGZ1bmN0aW9uIGN1cnJlbnRTdGFja05vZGUoKVxuXHR7XG5cdFx0cmV0dXJuIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0aHRtbCA9IHByZXBhcmVIVE1MKGh0bWwpO1xuXG5cdGxldCBzdGFjayA9IGluaXRTdGFjaygpO1xuXG5cdGNvbnN0IHBhcnNlID0gbmV3IFBhcnNlcih7XG5cdFx0XG5cdFx0b25vcGVudGFnKG5hbWUsIGF0dHJzKVxuXHRcdHtcblx0XHRcdGxldCBwYXJlbnQgPSBjdXJyZW50U3RhY2tOb2RlKCk7XG5cblx0XHRcdGxldCBub2RlID0gbmV3IE5vZGUoe1xuXHRcdFx0XHR0YWc6IG5hbWUsXG5cdFx0XHRcdGF0dHJzOiBhdHRycyxcblx0XHRcdFx0Y2hpbGRyZW46IFtdLFxuXHRcdFx0fSk7XG5cblx0XHRcdGlmKHBhcmVudCkge1xuXHRcdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0YWNrLnB1c2gobm9kZSk7XG5cdFx0fSxcblxuXHRcdG9udGV4dCh0ZXh0KVxuXHRcdHtcblx0XHRcdGxldCBwYXJlbnQgPSBjdXJyZW50U3RhY2tOb2RlKCk7XG5cblx0XHRcdHRleHQgPSB0ZXh0LnRyaW0oKTtcblxuXHRcdFx0aWYodGV4dCAhPT0gJycgJiYgcGFyZW50KSB7XG5cdFx0XHRcdGxldCBub2RlID0gbmV3IFRleHROb2RlKHRleHQpO1xuXHRcdFx0XHRpZihwYXJlbnQpIHtcblx0XHRcdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG5cdFx0XHRcdH1cblx0ICAgIFx0fVxuXHQgICAgfSxcblxuXHRcdG9uY2xvc2V0YWcobmFtZSlcblx0XHR7XG5cdFx0XHRzdGFjay5wb3AoKTtcblx0ICAgIH1cblxuXHR9LCB7IGRlY29kZUVudGl0aWVzOiB0cnVlIH0pXG5cdFxuXHRwYXJzZS53cml0ZShodG1sKTtcblx0cGFyc2UuZW5kKCk7XG5cblx0cmV0dXJuIHN0YWNrWzBdO1xufVxuIiwiaW1wb3J0IHsgZ2V0UmVhY3RpdmVWYXJpYWJsZXMgfSBmcm9tIFwiLi4vc2NyaXB0XCI7XG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSAnLi9nZW5lcmF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlVGVtcGxhdGUoY29udGV4dCwgaHRtbCwgYmxvY2tzKVxue1xuXHRsZXQgc2NyaXB0ID0gYmxvY2tzLnNjcmlwdCB8fCB7IHNvdXJjZTogJycgfTtcblxuXHRjb250ZXh0ID0gZ2V0UmVhY3RpdmVWYXJpYWJsZXMoY29udGV4dCwgc2NyaXB0LnNvdXJjZSk7XG5cdFxuXHRyZXR1cm4gZ2VuZXJhdGUoY29udGV4dCwgaHRtbCk7XG59IiwiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBUZXh0Tm9kZSBmcm9tICcuL1RleHROb2RlJztcblxuZXhwb3J0IGNvbnN0IElGX0FUVFJTID0gWyd2LWlmJywgJ3YtZWxzZS1pZicsICd2LWVsc2UnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2xvdChub2RlKVxue1xuXHRpZighbm9kZS5pc1Nsb3QpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aXM6IGZhbHNlLFxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aXM6IHRydWUsXG5cdFx0Y2FsbEV4cHJlc3Npb246ICFub2RlLmlzSW5zaWRlQ29tcG9uZW50LFxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxvb3Aobm9kZSlcbntcblx0aWYoIW5vZGUuYXR0cnNbJ3YtZm9yJ10pIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aXM6IGZhbHNlLFxuXHRcdH1cblx0fVxuXG5cdGxldCBzdGF0ZW1lbnQgPSBub2RlLmF0dHJzWyd2LWZvciddLm1hdGNoQWxsKC9cXCgoPzxpdGVtPltBLXowLTldKylcXHM/KFxcLFxccz8oPzxrZXk+W0EtejAtOV0rKVxccz8pP1xcKVxccz9pblxccyg/PGNvbmRpdGlvbj4uKikvZyk7XG5cblx0bGV0IGNvbmRpdGlvbiA9IG51bGw7XG5cdGxldCBhcmdzID0gW107XG5cblx0Zm9yKGxldCBtYXRjaCBvZiBzdGF0ZW1lbnQpIHtcblxuXHRcdGlmKG1hdGNoLmdyb3Vwcy5pdGVtKSB7XG5cdFx0XHRhcmdzLnB1c2gobWF0Y2guZ3JvdXBzLml0ZW0pO1xuXHRcdH1cblxuXHRcdGlmKG1hdGNoLmdyb3Vwcy5rZXkpIHtcblx0XHRcdGFyZ3MucHVzaChtYXRjaC5ncm91cHMua2V5KTtcblx0XHR9XG5cblx0XHRjb25kaXRpb24gPSBtYXRjaC5ncm91cHMuY29uZGl0aW9uO1xuXHR9XG5cblx0aWYoIWNvbmRpdGlvbikge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpczogZmFsc2UsXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpczogdHJ1ZSxcblx0XHRjb25kaXRpb246IGNvbmRpdGlvbixcblx0XHRhcmdzOiBhcmdzLmpvaW4oJywnKSxcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdGF0ZW1lbnQobm9kZSlcbntcblx0bGV0IHN0YXJ0ID0gZmFsc2U7XG5cdGxldCBlbmQgPSB0cnVlO1xuXHRsZXQgc3RhdGVtZW50ID0gZmFsc2U7XG5cdGxldCBjb25kaXRpb24gPSBub2RlLmF0dHJzWyd2LWlmJ10gfHwgbm9kZS5hdHRyc1sndi1lbHNlLWlmJ10gfHwgJ3RydWUnO1xuXG5cdGlmKG5vZGUuYXR0cnNbJ3YtaWYnXSkge1xuXHRcdHN0YXJ0ID0gdHJ1ZTtcblx0fVxuXG5cdGlmKG5vZGUuYXR0cnNbJ3YtaWYnXSB8fCBub2RlLmF0dHJzWyd2LWVsc2UtaWYnXSB8fCBub2RlLmF0dHJzWyd2LWVsc2UnXSkge1xuXHRcdG5vZGUuaWZfc3RhdGVtZW50ID0gdHJ1ZTtcblx0XHRzdGF0ZW1lbnQgPSB0cnVlO1xuXHR9XG5cblxuXHRpZihub2RlLm5leHRTaWJsaW5nIGluc3RhbmNlb2YgTm9kZSkge1xuXHRcdGlmKG5vZGUubmV4dFNpYmxpbmcuYXR0cnNbJ3YtZWxzZS1pZiddIHx8IG5vZGUubmV4dFNpYmxpbmcuYXR0cnNbJ3YtZWxzZSddKSB7XG5cdFx0XHRlbmQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNvbmRpdGlvbixcblx0XHRpczogc3RhdGVtZW50LFxuXHRcdHN0YXJ0LFxuXHRcdGVuZCxcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUZ1bmN0aW9ucyhjb2RlKVxue1xuXHRjb2RlID0gY29kZVxuXHRcdC5yZXBsYWNlKC9cXEBpZlxcKCguKilcXCkvZywgJzxpZiBjb25kaXRpb249XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL1xcQGVsc2VpZlxcKCguKilcXCkvZywgJzxlbHNlLWlmIGNvbmRpdGlvbj1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvXFxAZWxzZS9nLCAnPGVsc2U+Jylcblx0XHQucmVwbGFjZSgvXFxAZW5kaWYvZywgJzxlbmRpZj4nKVxuXG5cblx0Y29uc29sZS5sb2coY29kZSk7XG5cblx0cmV0dXJuIGNvZGU7XG59IiwiaW1wb3J0IHsgY29tcGlsZXIsIF8gfSBmcm9tICdAc2ludW91cy9jb21waWxlcic7XG5cbi8vIGltcG9ydCB7IHBhcnNlRXhwcmVzc2lvbiB9IGZyb20gJ0BzaW51b3VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9leHByZXNzaW9uJztcbi8vIGltcG9ydCB7IHBhcnNlSFRNTCB9IGZyb20gJ0BzaW51b3VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9odG1sJztcblxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsIGBcbi8vIGxldCBkID0gZnVuY3Rpb24oKSB7fVxuLy8gbGV0IGQyID0gKCkgPT4ge31cbi8vIGZ1bmN0aW9uIGMxKHMzKSB7XG4vLyBcdGxldCBkID0gW107XG4vLyBcdGZvcihsZXQgaSA9IDA7IGkgPCBzMS5sZW5ndGg7IGkrKykge1xuLy8gXHRcdGQucHVzaChzMVtpXSk7XG4vLyBcdH1cbi8vIH1cbi8vIGApXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ3sgczE6ICgpID0+IHMxIH0nKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdhbGVydCgpOycsIHRydWUpXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ20xKGV2ZW50KScpXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ3MxICs9IDYnKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdkMSA9IGQxICsgNicpXG4vLyBwYXJzZUV4cHJlc3Npb24oZGF0YSwgJ2QxIC89IDYnKVxuLy8gcGFyc2VFeHByZXNzaW9uKGRhdGEsICdkLnB1c2goczEpJylcbi8vIHBhcnNlRXhwcmVzc2lvbihkYXRhLCAnZCA9ICgpID0+IHsgcmV0dXJuIHMxIH0nKVxuXG5cbmxldCBzb3VyY2UgPSBgXG48dGVtcGxhdGU+XG5cdDxkaXYgQGNsaWNrPVwiYWxlcnQoMSlcIiA6c3R5bGU9XCJ7IHBhZGRpbmdUb3A6IHMyIH1cIj5cblx0XHR0ZXN0XG5cdFx0e3sgczIgfX1cblx0XHQ8YnI+XG5cdFx0PHRlbXBsYXRlIHYtaWY9XCJ2aXNpYmxlXCI+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHRbdmlzaWJsZV0gc2hvdyB7eyBkZGQgfX0ge3sgczEgfX0gKHt7IGl0ZW0gfX0pXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHRlc3Rcblx0XHRcdDxzcGFuIHYtaWY9XCJzMVwiPlxuXHRcdFx0XHRbczFdIHRlc3Rcblx0XHRcdDwvc3Bhbj5cblx0XHQ8L3RlbXBsYXRlPlxuXHRcdDxkaXYgdi1lbHNlLWlmPVwiczNcIj5cblx0XHRcdFtzM10gdGVzdFxuXHRcdDwvZGl2PlxuXHRcdDx0ZW1wbGF0ZT5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxzbG90IG5hbWU9XCJoZWFkZXJcIiB0YWc9XCJoMVwiPlxuXHRcdFx0XHRcdGRlZmF1bHQgc2xvdCB0ZXh0IFxuXHRcdFx0XHQ8L3Nsb3Q+XG5cdFx0XHRcdFtub25lXSBoaWRlXG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3RlbXBsYXRlPlxuXHRcdDxkaXY+YWZ0ZXItb25jZS1pZjwvZGl2PlxuXHRcdDxjaGlsZD5cblx0XHRcdGRlZmF1bHQgc2xvdFxuXHRcdFx0dGVzdCAxXG5cdFx0XHQ8c2xvdCBuYW1lPVwiZm9vdGVyXCI+Zm9vdGVyLXNsb3QtdGVzdDwvc2xvdD5cblx0XHRcdHRlc3QgMlxuXHRcdDwvY2hpbGQ+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmxldCAkczEgPSB0cnVlO1xubGV0ICRzMiA9IDEwO1xubGV0ICRzMyA9IGZhbHNlO1xuXG5sZXQgZGRkID0gJ1t0ZXN0IHZhcmlhYmxlIGRkZF0nXG5sZXQgdGltZXIxID0gbnVsbDtcbmxldCB2aXNpYmxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gbWFrZUlmKClcbntcblx0Y29uc29sZS5sb2coJ01ha2UnKTtcblxuXHRzMSA9IHRydWU7XG5cdHMzID0gdHJ1ZTtcblxuXHRjb25zb2xlLmxvZyhzMSwgczMpO1xuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRzMSA9IGZhbHNlO1xuXHRcdHMzID0gdHJ1ZTtcblx0XHRjb25zb2xlLmxvZyhzMSwgczMpO1xuXHR9LCAxMDAwKVxuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHMxID0gZmFsc2U7XG5cdFx0czMgPSBmYWxzZTtcblx0XHRjb25zb2xlLmxvZyhzMSwgczMpO1xuXHR9LCAyMDAwKVxuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHMxID0gdHJ1ZTtcblx0XHRzMyA9IGZhbHNlO1xuXHRcdGNvbnNvbGUubG9nKHMxLCBzMyk7XG5cdH0sIDMwMDApXG59XG5cbmZ1bmN0aW9uIG1vdW50ZWQoKVxue1xuXHRtYWtlSWYoKTtcblx0dGltZXIxID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdG1ha2VJZigpO1xuXHR9LCA1MDAwKVxufVxuXG5mdW5jdGlvbiB1bm1vdW50ZWQoKVxue1xuXHRjbGVhckludGVydmFsKHRpbWVyMSk7XG59XG48L3NjcmlwdD5cbmA7XG5cblxuXG4vLyBjb25zb2xlLmxvZyhwYXJzZUhUTUwoc291cmNlKSk7XG5cblxubGV0IGJsb2NrID0gY29tcGlsZXIoe1xuXHRjb250ZXh0OiB7fSxcblx0dHlwZTogJ3RlbXBsYXRlJyxcblx0c291cmNlOiBzb3VyY2UsXG59KTtcblxuY29uc29sZS5sb2coYmxvY2suc291cmNlLmh5ZHJhdGUpIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==