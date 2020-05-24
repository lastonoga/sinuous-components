"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expression = expression;

var parser = _interopRequireWildcard(require("@babel/parser"));

var _generator = _interopRequireDefault(require("@babel/generator"));

var _traverse = _interopRequireDefault(require("@babel/traverse"));

var _parseExpression2 = _interopRequireDefault(require("../script/parseExpression"));

var _types = require("@babel/types");

var _helpers = require("../helpers");

var _attrs = require("./attrs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function expression(context, code, shouldBeCallable) {
  if (shouldBeCallable === void 0) {
    shouldBeCallable = true;
  }

  if (typeof code === 'object') {
    return {
      statefull: false,
      value: JSON.stringify(code)
    };
  }

  code = String(code);
  var identifierOnly = true; // let shouldBeCallable = keepObservation;

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

    if (changed && !identifierOnly && shouldBeCallable) {
      code = "() => { return " + code + "; }";
    }
  } // console.log(code);
  // console.log('--------');


  return {
    statefull: observable,
    value: code
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9leHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbImV4cHJlc3Npb24iLCJjb250ZXh0IiwiY29kZSIsInNob3VsZEJlQ2FsbGFibGUiLCJzdGF0ZWZ1bGwiLCJ2YWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJTdHJpbmciLCJpZGVudGlmaWVyT25seSIsImFzdCIsInBhcnNlciIsInBhcnNlIiwiZW50ZXIiLCJwYXRoIiwiaW5jbHVkZXMiLCJub2RlIiwidHlwZSIsImRhdGEiLCJjaGFuZ2VkIiwib2JzZXJ2YWJsZSIsInJldGFpbkxpbmVzIiwiY29tcGFjdCIsIm1pbmlmaWVkIiwiY29uY2lzZSIsInF1b3RlcyIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFNQTs7QUFJQTs7Ozs7Ozs7QUFFTyxTQUFTQSxVQUFULENBQW9CQyxPQUFwQixFQUE2QkMsSUFBN0IsRUFBbUNDLGdCQUFuQyxFQUNQO0FBQUEsTUFEMENBLGdCQUMxQztBQUQwQ0EsSUFBQUEsZ0JBQzFDLEdBRDZELElBQzdEO0FBQUE7O0FBQ0MsTUFBRyxPQUFPRCxJQUFQLEtBQWdCLFFBQW5CLEVBQTZCO0FBQzVCLFdBQU87QUFDTkUsTUFBQUEsU0FBUyxFQUFFLEtBREw7QUFFTkMsTUFBQUEsS0FBSyxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsSUFBZjtBQUZELEtBQVA7QUFJQTs7QUFFREEsRUFBQUEsSUFBSSxHQUFHTSxNQUFNLENBQUNOLElBQUQsQ0FBYjtBQUVBLE1BQUlPLGNBQWMsR0FBRyxJQUFyQixDQVZELENBV0M7O0FBRUEsTUFBTUMsR0FBRyxHQUFHQyxNQUFNLENBQUNDLEtBQVAsQ0FBYVYsSUFBYixDQUFaO0FBRUEseUJBQVNRLEdBQVQsRUFBYztBQUNiRyxJQUFBQSxLQURhLGlCQUNQQyxJQURPLEVBQ0Q7QUFDWCxVQUFHLENBQUMsQ0FBQyxTQUFELEVBQVkscUJBQVosRUFBbUMsWUFBbkMsRUFBaUQsZ0JBQWpELEVBQW1FLGtCQUFuRSxFQUF1RixpQkFBdkYsRUFBMEcsa0JBQTFHLEVBQThILGdCQUE5SCxFQUFnSkMsUUFBaEosQ0FBeUpELElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxJQUFuSyxDQUFKLEVBQThLO0FBQzdLUixRQUFBQSxjQUFjLEdBQUcsS0FBakI7QUFDQTtBQUNEO0FBTFksR0FBZDs7QUFmRCx5QkF1QitCLCtCQUFnQlIsT0FBTyxDQUFDaUIsSUFBeEIsRUFBOEJSLEdBQTlCLEVBQW1DLEtBQW5DLEVBQTBDRCxjQUExQyxDQXZCL0I7QUFBQSxNQXVCT1UsT0F2QlAsb0JBdUJPQSxPQXZCUDtBQUFBLE1BdUJnQkMsVUF2QmhCLG9CQXVCZ0JBLFVBdkJoQjs7QUF5QkMsTUFBR0QsT0FBSCxFQUFZO0FBQ1hqQixJQUFBQSxJQUFJLEdBQUcsd0JBQVNRLEdBQVQsRUFBYztBQUNwQlcsTUFBQUEsV0FBVyxFQUFFLElBRE87QUFFcEJDLE1BQUFBLE9BQU8sRUFBRSxJQUZXO0FBR3BCQyxNQUFBQSxRQUFRLEVBQUUsSUFIVTtBQUlwQkMsTUFBQUEsT0FBTyxFQUFFLElBSlc7QUFLcEJDLE1BQUFBLE1BQU0sRUFBRTtBQUxZLEtBQWQsRUFNSnZCLElBTkksRUFNRUEsSUFOVCxDQURXLENBVVg7O0FBQ0FBLElBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDd0IsT0FBTCxDQUFhLFNBQWIsRUFBd0IsRUFBeEIsQ0FBUDs7QUFFQSxRQUFHUCxPQUFPLElBQUksQ0FBQ1YsY0FBWixJQUE4Qk4sZ0JBQWpDLEVBQW1EO0FBQ2xERCxNQUFBQSxJQUFJLHVCQUFxQkEsSUFBckIsUUFBSjtBQUNBO0FBQ0QsR0F6Q0YsQ0EyQ0M7QUFDQTs7O0FBRUEsU0FBTztBQUNORSxJQUFBQSxTQUFTLEVBQUVnQixVQURMO0FBRU5mLElBQUFBLEtBQUssRUFBRUg7QUFGRCxHQUFQO0FBSUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcbmltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiQGJhYmVsL2dlbmVyYXRvclwiO1xuaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcbmltcG9ydCBwYXJzZUV4cHJlc3Npb24gZnJvbSBcIi4uL3NjcmlwdC9wYXJzZUV4cHJlc3Npb25cIjtcblxuaW1wb3J0IHtcblx0aWRlbnRpZmllcixcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEJpbmFyeUV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0aGFuZGxlSWRlbnRpZmllcixcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmltcG9ydCB7IHByZXBhcmVPcHRpb25LZXkgfSBmcm9tICcuL2F0dHJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb24oY29udGV4dCwgY29kZSwgc2hvdWxkQmVDYWxsYWJsZSA9IHRydWUpXG57XG5cdGlmKHR5cGVvZiBjb2RlID09PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdGF0ZWZ1bGw6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IEpTT04uc3RyaW5naWZ5KGNvZGUpXG5cdFx0fTtcblx0fVxuXG5cdGNvZGUgPSBTdHJpbmcoY29kZSk7XG5cblx0bGV0IGlkZW50aWZpZXJPbmx5ID0gdHJ1ZTtcblx0Ly8gbGV0IHNob3VsZEJlQ2FsbGFibGUgPSBrZWVwT2JzZXJ2YXRpb247XG5cblx0Y29uc3QgYXN0ID0gcGFyc2VyLnBhcnNlKGNvZGUpO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdGVudGVyKHBhdGgpIHtcblx0XHRcdGlmKCFbJ1Byb2dyYW0nLCAnRXhwcmVzc2lvblN0YXRlbWVudCcsICdJZGVudGlmaWVyJywgJ0Jsb2NrU3RhdGVtZW50JywgJ0xhYmVsZWRTdGF0ZW1lbnQnLCAnQXJyYXlFeHByZXNzaW9uJywgJ09iamVjdEV4cHJlc3Npb24nLCAnT2JqZWN0UHJvcGVydHknXS5pbmNsdWRlcyhwYXRoLm5vZGUudHlwZSkpIHtcblx0XHRcdFx0aWRlbnRpZmllck9ubHkgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdGxldCB7IGNoYW5nZWQsIG9ic2VydmFibGUgfSA9IHBhcnNlRXhwcmVzc2lvbihjb250ZXh0LmRhdGEsIGFzdCwgJ2N0eCcsIGlkZW50aWZpZXJPbmx5KTtcblxuXHRpZihjaGFuZ2VkKSB7XG5cdFx0Y29kZSA9IGdlbmVyYXRlKGFzdCwge1xuXHRcdFx0cmV0YWluTGluZXM6IHRydWUsXG5cdFx0XHRjb21wYWN0OiB0cnVlLFxuXHRcdFx0bWluaWZpZWQ6IHRydWUsXG5cdFx0XHRjb25jaXNlOiB0cnVlLFxuXHRcdFx0cXVvdGVzOiBcImRvdWJsZVwiLFxuXHRcdH0sIGNvZGUpLmNvZGU7XG5cblx0XHRcblx0XHQvLyBjbGVhbiBhcHBlbmRcblx0XHRjb2RlID0gY29kZS5yZXBsYWNlKC8oO3wsKSQvZywgJycpO1xuXG5cdFx0aWYoY2hhbmdlZCAmJiAhaWRlbnRpZmllck9ubHkgJiYgc2hvdWxkQmVDYWxsYWJsZSkge1xuXHRcdFx0Y29kZSA9IGAoKSA9PiB7IHJldHVybiAke2NvZGV9OyB9YDtcblx0XHR9XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhjb2RlKTtcblx0Ly8gY29uc29sZS5sb2coJy0tLS0tLS0tJyk7XG5cblx0cmV0dXJuIHtcblx0XHRzdGF0ZWZ1bGw6IG9ic2VydmFibGUsXG5cdFx0dmFsdWU6IGNvZGVcblx0fVxufVxuIl19