"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReactiveVariables = getReactiveVariables;
exports.compileScript = compileScript;

var parser = _interopRequireWildcard(require("@babel/parser"));

var _generator = _interopRequireDefault(require("@babel/generator"));

var _data = require("./data");

var _parseContext = _interopRequireDefault(require("./parseContext"));

var _parseExpression = _interopRequireDefault(require("./parseExpression"));

var _AstGenerator = _interopRequireDefault(require("./AstGenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHQvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0UmVhY3RpdmVWYXJpYWJsZXMiLCJjb250ZXh0Iiwic291cmNlIiwiZGF0YSIsImFzdCIsInBhcnNlciIsInBhcnNlIiwic291cmNlVHlwZSIsInN0cmljdE1vZGUiLCJyZWFjdGl2ZV92YXJpYWJsZXMiLCJjb25jYXQiLCJPYmplY3QiLCJrZXlzIiwic3RhdGUiLCJjb21wdXRlZCIsImNvbXBpbGVTY3JpcHQiLCJyZXRhaW5MaW5lcyIsImNvbXBhY3QiLCJtaW5pZmllZCIsImNvbmNpc2UiLCJxdW90ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBR0E7Ozs7O0FBS08sU0FBU0Esb0JBQVQsQ0FBOEJDLE9BQTlCLEVBQXVDQyxNQUF2QyxFQUNQO0FBQ0MsTUFBSUMsSUFBSSxHQUFHLHNCQUFXRixPQUFYLENBQVg7QUFFQSxNQUFNRyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhSixNQUFiLEVBQXFCO0FBQ2hDSyxJQUFBQSxVQUFVLEVBQUUsYUFEb0I7QUFFaENDLElBQUFBLFVBQVUsRUFBRTtBQUZvQixHQUFyQixDQUFaO0FBS0EsNkJBQWFMLElBQWIsRUFBbUJDLEdBQW5CO0FBRUEsTUFBSUssa0JBQWtCLEdBQUcsRUFBekI7QUFFQUEsRUFBQUEsa0JBQWtCLEdBQUdBLGtCQUFrQixDQUNyQ0MsTUFEbUIsQ0FDWkMsTUFBTSxDQUFDQyxJQUFQLENBQVlULElBQUksQ0FBQ1UsS0FBakIsQ0FEWSxFQUVuQkgsTUFGbUIsQ0FFWkMsTUFBTSxDQUFDQyxJQUFQLENBQVlULElBQUksQ0FBQ1csUUFBakIsQ0FGWSxDQUFyQjtBQUlBLFNBQU87QUFDTkwsSUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFETTtBQUVOTixJQUFBQSxJQUFJLEVBQUpBO0FBRk0sR0FBUDtBQUlBOztBQUVNLFNBQVNZLGFBQVQsQ0FBdUJkLE9BQXZCLEVBQWdDQyxNQUFoQyxFQUNQO0FBQ0MsTUFBSUMsSUFBSSxHQUFHLHVCQUFYO0FBRUEsTUFBTUMsR0FBRyxHQUFHQyxNQUFNLENBQUNDLEtBQVAsQ0FBYUosTUFBYixFQUFxQjtBQUNoQ0ssSUFBQUEsVUFBVSxFQUFFLGFBRG9CO0FBRWhDQyxJQUFBQSxVQUFVLEVBQUU7QUFGb0IsR0FBckIsQ0FBWjtBQUtBLDZCQUFhTCxJQUFiLEVBQW1CQyxHQUFuQjtBQUNBLGdDQUFnQkQsSUFBaEIsRUFBc0JDLEdBQXRCO0FBRUEsU0FBTyx3QkFBUywyQkFBYUQsSUFBYixDQUFULEVBQTZCO0FBQ25DYSxJQUFBQSxXQUFXLEVBQUUsS0FEc0I7QUFFbkNDLElBQUFBLE9BQU8sRUFBRSxLQUYwQjtBQUduQ0MsSUFBQUEsUUFBUSxFQUFFLEtBSHlCO0FBSW5DQyxJQUFBQSxPQUFPLEVBQUUsS0FKMEI7QUFLbkNDLElBQUFBLE1BQU0sRUFBRTtBQUwyQixHQUE3QixFQU1KbEIsTUFOSSxDQUFQO0FBT0EiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCJAYmFiZWwvcGFyc2VyXCI7XG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSBcIkBiYWJlbC9nZW5lcmF0b3JcIjtcblxuaW1wb3J0IHsgY3JlYXRlRGF0YSB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCBwYXJzZUNvbnRleHQgZnJvbSBcIi4vcGFyc2VDb250ZXh0XCI7XG5pbXBvcnQgcGFyc2VFeHByZXNzaW9uIGZyb20gXCIuL3BhcnNlRXhwcmVzc2lvblwiO1xuaW1wb3J0IEFzdEdlbmVyYXRvciBmcm9tIFwiLi9Bc3RHZW5lcmF0b3JcIjtcblxuXG4vKipcbiAqIENvbXBpbGVyXG4gKiBAcGFyYW0gIHtbdHlwZV19IHNvdXJjZSBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWFjdGl2ZVZhcmlhYmxlcyhjb250ZXh0LCBzb3VyY2UpXG57XG5cdGxldCBkYXRhID0gY3JlYXRlRGF0YShjb250ZXh0KTtcblxuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2Uoc291cmNlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRwYXJzZUNvbnRleHQoZGF0YSwgYXN0KTtcblxuXHRsZXQgcmVhY3RpdmVfdmFyaWFibGVzID0gW107XG5cblx0cmVhY3RpdmVfdmFyaWFibGVzID0gcmVhY3RpdmVfdmFyaWFibGVzXG5cdFx0LmNvbmNhdChPYmplY3Qua2V5cyhkYXRhLnN0YXRlKSlcblx0XHQuY29uY2F0KE9iamVjdC5rZXlzKGRhdGEuY29tcHV0ZWQpKTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlYWN0aXZlX3ZhcmlhYmxlcyxcblx0XHRkYXRhLFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVNjcmlwdChjb250ZXh0LCBzb3VyY2UpXG57XG5cdGxldCBkYXRhID0gY3JlYXRlRGF0YSgpO1xuXHRcdFxuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2Uoc291cmNlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRwYXJzZUNvbnRleHQoZGF0YSwgYXN0KTtcblx0cGFyc2VFeHByZXNzaW9uKGRhdGEsIGFzdCk7XG5cblx0cmV0dXJuIGdlbmVyYXRlKEFzdEdlbmVyYXRvcihkYXRhKSwge1xuXHRcdHJldGFpbkxpbmVzOiBmYWxzZSxcblx0XHRjb21wYWN0OiBmYWxzZSxcblx0XHRtaW5pZmllZDogZmFsc2UsXG5cdFx0Y29uY2lzZTogZmFsc2UsXG5cdFx0cXVvdGVzOiBcImRvdWJsZVwiLFxuXHR9LCBzb3VyY2UpO1xufVxuIl19