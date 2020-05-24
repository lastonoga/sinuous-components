"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSlot = parseSlot;
exports.parseLoop = parseLoop;
exports.parseStatement = parseStatement;
exports.default = parseFunctions;
exports.IF_ATTRS = void 0;

var _Node = _interopRequireDefault(require("./Node"));

var _TextNode = _interopRequireDefault(require("./TextNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelperLoose(o) { var i = 0; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } i = o[Symbol.iterator](); return i.next.bind(i); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (typeof args[args.length - 1] !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
    } else {
      args.push('_item');
    }

    if (match.groups.key) {
      args.push(match.groups.key);
    } else {
      args.push('_index');
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
    rawArgs: args,
    args: args.join(',')
  };
}

function has(obj, name) {
  return obj.hasOwnProperty(name);
}

function getAttr(obj, name) {
  if (has(obj, name)) {
    return obj[name];
  }

  return false;
}

function parseStatement(node) {
  var start = false;
  var end = true;
  var statement = false;
  var condition = getAttr(node.attrs, 'v-if') || getAttr(node.attrs, 'v-else-if') || 'true';

  if (node.attrs.hasOwnProperty('v-if')) {
    start = true;
  }

  if (has(node.attrs, 'v-if') || has(node.attrs, 'v-else-if') || has(node.attrs, 'v-else')) {
    node.if_statement = true;
    statement = true;
  } // console.log(node, node.nextSibling)


  if (node.nextSibling instanceof _Node.default) {
    if (has(node.nextSibling.attrs, 'v-else-if') || has(node.nextSibling.attrs, 'v-else')) {
      end = false;
    }
  } // console.log(node, start, end)


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9wYXJzZUZ1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJJRl9BVFRSUyIsInBhcnNlU2xvdCIsIm5vZGUiLCJpc1Nsb3QiLCJpcyIsImNhbGxFeHByZXNzaW9uIiwiaXNJbnNpZGVDb21wb25lbnQiLCJwYXJzZUxvb3AiLCJhdHRycyIsInN0YXRlbWVudCIsIm1hdGNoQWxsIiwiY29uZGl0aW9uIiwiYXJncyIsIm1hdGNoIiwiZ3JvdXBzIiwiaXRlbSIsInB1c2giLCJrZXkiLCJyYXdBcmdzIiwiam9pbiIsImhhcyIsIm9iaiIsIm5hbWUiLCJoYXNPd25Qcm9wZXJ0eSIsImdldEF0dHIiLCJwYXJzZVN0YXRlbWVudCIsInN0YXJ0IiwiZW5kIiwiaWZfc3RhdGVtZW50IiwibmV4dFNpYmxpbmciLCJOb2RlIiwicGFyc2VGdW5jdGlvbnMiLCJjb2RlIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLFFBQVEsR0FBRyxDQUFDLE1BQUQsRUFBUyxXQUFULEVBQXNCLFFBQXRCLENBQWpCOzs7QUFFQSxTQUFTQyxTQUFULENBQW1CQyxJQUFuQixFQUNQO0FBQ0MsTUFBRyxDQUFDQSxJQUFJLENBQUNDLE1BQVQsRUFBaUI7QUFDaEIsV0FBTztBQUNOQyxNQUFBQSxFQUFFLEVBQUU7QUFERSxLQUFQO0FBR0E7O0FBRUQsU0FBTztBQUNOQSxJQUFBQSxFQUFFLEVBQUUsSUFERTtBQUVOQyxJQUFBQSxjQUFjLEVBQUUsQ0FBQ0gsSUFBSSxDQUFDSTtBQUZoQixHQUFQO0FBSUE7O0FBRU0sU0FBU0MsU0FBVCxDQUFtQkwsSUFBbkIsRUFDUDtBQUNDLE1BQUcsQ0FBQ0EsSUFBSSxDQUFDTSxLQUFMLENBQVcsT0FBWCxDQUFKLEVBQXlCO0FBQ3hCLFdBQU87QUFDTkosTUFBQUEsRUFBRSxFQUFFO0FBREUsS0FB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R0FBRyxDQUFDbEIsSUFBSSxDQUFDMkIsV0FBTCxDQUFpQnJCLEtBQWxCLEVBQXlCLFFBQXpCLENBQWxELEVBQXNGO0FBQ3JGbUIsTUFBQUEsR0FBRyxHQUFHLEtBQU47QUFDQTtBQUNELEdBckJGLENBdUJDOzs7QUFFQSxTQUFPO0FBQ05oQixJQUFBQSxTQUFTLEVBQVRBLFNBRE07QUFFTlAsSUFBQUEsRUFBRSxFQUFFSyxTQUZFO0FBR05pQixJQUFBQSxLQUFLLEVBQUxBLEtBSE07QUFJTkMsSUFBQUEsR0FBRyxFQUFIQTtBQUpNLEdBQVA7QUFNQTs7QUFFYyxTQUFTSSxjQUFULENBQXdCQyxJQUF4QixFQUNmO0FBQ0NBLEVBQUFBLElBQUksR0FBR0EsSUFBSSxDQUNUQyxPQURLLENBQ0csZUFESCxFQUNvQixxQkFEcEIsRUFFTEEsT0FGSyxDQUVHLG1CQUZILEVBRXdCLDBCQUZ4QixFQUdMQSxPQUhLLENBR0csU0FISCxFQUdjLFFBSGQsRUFJTEEsT0FKSyxDQUlHLFVBSkgsRUFJZSxTQUpmLENBQVA7QUFPQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFFQSxTQUFPQSxJQUFQO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IFRleHROb2RlIGZyb20gJy4vVGV4dE5vZGUnO1xuXG5leHBvcnQgY29uc3QgSUZfQVRUUlMgPSBbJ3YtaWYnLCAndi1lbHNlLWlmJywgJ3YtZWxzZSddO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTbG90KG5vZGUpXG57XG5cdGlmKCFub2RlLmlzU2xvdCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpczogZmFsc2UsXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRpczogdHJ1ZSxcblx0XHRjYWxsRXhwcmVzc2lvbjogIW5vZGUuaXNJbnNpZGVDb21wb25lbnQsXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTG9vcChub2RlKVxue1xuXHRpZighbm9kZS5hdHRyc1sndi1mb3InXSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpczogZmFsc2UsXG5cdFx0fVxuXHR9XG5cblx0bGV0IHN0YXRlbWVudCA9IG5vZGUuYXR0cnNbJ3YtZm9yJ10ubWF0Y2hBbGwoL1xcKCg/PGl0ZW0+W0EtejAtOV0rKVxccz8oXFwsXFxzPyg/PGtleT5bQS16MC05XSspXFxzPyk/XFwpXFxzP2luXFxzKD88Y29uZGl0aW9uPi4qKS9nKTtcblxuXHRsZXQgY29uZGl0aW9uID0gbnVsbDtcblx0bGV0IGFyZ3MgPSBbXTtcblxuXHRmb3IobGV0IG1hdGNoIG9mIHN0YXRlbWVudCkge1xuXG5cdFx0aWYobWF0Y2guZ3JvdXBzLml0ZW0pIHtcblx0XHRcdGFyZ3MucHVzaChtYXRjaC5ncm91cHMuaXRlbSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFyZ3MucHVzaCgnX2l0ZW0nKTtcblx0XHR9XG5cblx0XHRpZihtYXRjaC5ncm91cHMua2V5KSB7XG5cdFx0XHRhcmdzLnB1c2gobWF0Y2guZ3JvdXBzLmtleSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFyZ3MucHVzaCgnX2luZGV4Jyk7XG5cdFx0fVxuXG5cdFx0Y29uZGl0aW9uID0gbWF0Y2guZ3JvdXBzLmNvbmRpdGlvbjtcblx0fVxuXG5cdGlmKCFjb25kaXRpb24pIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aXM6IGZhbHNlLFxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aXM6IHRydWUsXG5cdFx0Y29uZGl0aW9uOiBjb25kaXRpb24sXG5cdFx0cmF3QXJnczogYXJncyxcblx0XHRhcmdzOiBhcmdzLmpvaW4oJywnKSxcblx0fVxufVxuXG5mdW5jdGlvbiBoYXMob2JqLCBuYW1lKVxue1xuXHRyZXR1cm4gb2JqLmhhc093blByb3BlcnR5KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyKG9iaiwgbmFtZSlcbntcblx0aWYoaGFzKG9iaiwgbmFtZSkpIHtcblx0XHRyZXR1cm4gb2JqW25hbWVdO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdGF0ZW1lbnQobm9kZSlcbntcblx0bGV0IHN0YXJ0ID0gZmFsc2U7XG5cdGxldCBlbmQgPSB0cnVlO1xuXHRsZXQgc3RhdGVtZW50ID0gZmFsc2U7XG5cdGxldCBjb25kaXRpb24gPSBnZXRBdHRyKG5vZGUuYXR0cnMsICd2LWlmJykgfHwgZ2V0QXR0cihub2RlLmF0dHJzLCAndi1lbHNlLWlmJykgfHwgJ3RydWUnO1xuXG5cdGlmKG5vZGUuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3YtaWYnKSkge1xuXHRcdHN0YXJ0ID0gdHJ1ZTtcblx0fVxuXG5cdGlmKGhhcyhub2RlLmF0dHJzLCAndi1pZicpIHx8IGhhcyhub2RlLmF0dHJzLCAndi1lbHNlLWlmJykgfHwgaGFzKG5vZGUuYXR0cnMsICd2LWVsc2UnKSkge1xuXHRcdG5vZGUuaWZfc3RhdGVtZW50ID0gdHJ1ZTtcblx0XHRzdGF0ZW1lbnQgPSB0cnVlO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2cobm9kZSwgbm9kZS5uZXh0U2libGluZylcblxuXHRpZihub2RlLm5leHRTaWJsaW5nIGluc3RhbmNlb2YgTm9kZSkge1xuXHRcdGlmKGhhcyhub2RlLm5leHRTaWJsaW5nLmF0dHJzLCAndi1lbHNlLWlmJykgfHwgaGFzKG5vZGUubmV4dFNpYmxpbmcuYXR0cnMsICd2LWVsc2UnKSkge1xuXHRcdFx0ZW5kID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Ly8gY29uc29sZS5sb2cobm9kZSwgc3RhcnQsIGVuZClcblxuXHRyZXR1cm4ge1xuXHRcdGNvbmRpdGlvbixcblx0XHRpczogc3RhdGVtZW50LFxuXHRcdHN0YXJ0LFxuXHRcdGVuZCxcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUZ1bmN0aW9ucyhjb2RlKVxue1xuXHRjb2RlID0gY29kZVxuXHRcdC5yZXBsYWNlKC9cXEBpZlxcKCguKilcXCkvZywgJzxpZiBjb25kaXRpb249XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL1xcQGVsc2VpZlxcKCguKilcXCkvZywgJzxlbHNlLWlmIGNvbmRpdGlvbj1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvXFxAZWxzZS9nLCAnPGVsc2U+Jylcblx0XHQucmVwbGFjZSgvXFxAZW5kaWYvZywgJzxlbmRpZj4nKVxuXG5cblx0Y29uc29sZS5sb2coY29kZSk7XG5cblx0cmV0dXJuIGNvZGU7XG59XG4iXX0=