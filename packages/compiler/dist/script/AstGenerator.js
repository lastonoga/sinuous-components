"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _types = require("@babel/types");

var _helpers = require("../helpers");

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

function generateObjectReturnExpression(data, type) {
  var values = data[type];
  var properties = [];

  for (var prop in values) {
    var val = values[prop];

    if (type === 'props') {
      var propType = val.type;
      var propValue = val.defaultValue;
      val = (0, _types.ObjectExpression)([(0, _types.ObjectProperty)((0, _types.identifier)('type'), (0, _types.StringLiteral)(propType)), (0, _types.ObjectProperty)((0, _types.identifier)('default'), (0, _types.ArrowFunctionExpression)([], (0, _types.BlockStatement)([(0, _types.ReturnStatement)(propValue)])))]); // console.log(prop, propType, propValue);
    }

    if (val.type === 'FunctionDeclaration') {
      val = (0, _types.FunctionExpression)(null, val.params, val.body);
    }

    properties.push((0, _types.ObjectProperty)((0, _types.identifier)(prop), val));
  }

  var object = (0, _types.ObjectProperty)((0, _types.identifier)(type), (0, _types.ObjectExpression)(properties));
  return object;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHQvQXN0R2VuZXJhdG9yLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpbXBvcnRzIiwicHJvcCIsInB1c2giLCJwcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJvYmplY3QiLCJGdW5jdGlvblJldHVybkV4cHJlc3Npb24iLCJpbmNsdWRlcyIsImdlbmVyYXRlRnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uIiwiT2JqZWN0UmV0dXJuRXhwcmVzc2lvbiIsImdlbmVyYXRlT2JqZWN0UmV0dXJuRXhwcmVzc2lvbiIsImV4cG9ydGVkT2JqZWN0IiwiZXhwb3J0ZWREZWZhdWx0IiwiYm9keSIsImNvbmNhdCIsInJldHVyblByb3AiLCJ2YWx1ZXMiLCJ2YWwiLCJ0eXBlIiwiUmVhY3RpdHkiLCJGdW5jdGlvblJldHVybiIsInByb3BUeXBlIiwicHJvcFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBZ0JBOztBQVFlLGtCQUFTQSxJQUFULEVBQ2Y7QUFDQyxNQUFJQyxPQUFPLEdBQUcsRUFBZDs7QUFFQSxPQUFJLElBQUlDLElBQVIsSUFBZ0JGLElBQUksQ0FBQ0MsT0FBckIsRUFBOEI7QUFDN0JBLElBQUFBLE9BQU8sQ0FBQ0UsSUFBUixDQUFhSCxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsSUFBYixDQUFiO0FBQ0E7O0FBQUE7QUFFRCxNQUFJRSxVQUFVLEdBQUcsRUFBakI7QUFFQUMsRUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlOLElBQVosRUFBa0JPLE9BQWxCLENBQTBCLFVBQUNMLElBQUQsRUFBT00sR0FBUCxFQUFlO0FBRXhDLFFBQUlDLE1BQU0sR0FBRyxJQUFiOztBQUVBLFFBQUdDLGtDQUF5QkMsUUFBekIsQ0FBa0NULElBQWxDLENBQUgsRUFBNEM7QUFDM0NPLE1BQUFBLE1BQU0sR0FBR0csZ0NBQWdDLENBQUNaLElBQUQsRUFBT0UsSUFBUCxD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SixLQUFhLHFCQUFoQixFQUF1QztBQUN0Q0QsTUFBQUEsR0FBRyxHQUFHLCtCQUFtQixJQUFuQixFQUF5QkEsR0FBRyxDQUFDTyxNQUE3QixFQUFxQ1AsR0FBRyxDQUFDSixJQUF6QyxDQUFOO0FBQ0E7O0FBRURiLElBQUFBLFVBQVUsQ0FBQ0QsSUFBWCxDQUNDLDJCQUFlLHVCQUFXRCxJQUFYLENBQWYsRUFBaUNtQixHQUFqQyxDQUREO0FBR0E7O0FBRUQsTUFBSVosTUFBTSxHQUFHLDJCQUNaLHVCQUFXYSxJQUFYLENBRFksRUFFWiw2QkFBaUJsQixVQUFqQixDQUZZLENBQWI7QUFLQSxTQUFPSyxNQUFQO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24sXG5cdE9iamVjdEV4cHJlc3Npb24sXG5cdE9iamVjdFByb3BlcnR5LFxuXHRPYmplY3RNZXRob2QsXG5cdENhbGxFeHByZXNzaW9uLFxuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRCbG9ja1N0YXRlbWVudCxcblx0TGFiZWxlZFN0YXRlbWVudCxcblx0UmV0dXJuU3RhdGVtZW50LFxuXHRTdHJpbmdMaXRlcmFsLFxuXHRpZGVudGlmaWVyLFxuXHRwcm9ncmFtLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7XG5cdC8vIENvbnN0c1xuXHRSZWFjdGl0eSxcblx0RnVuY3Rpb25SZXR1cm5FeHByZXNzaW9uLFxuXHRPYmplY3RSZXR1cm5FeHByZXNzaW9uLFxuXHRBaWlFeHByZXNzaW9uLFxufSBmcm9tIFwiLi4vaGVscGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkYXRhKVxue1xuXHRsZXQgaW1wb3J0cyA9IFtdO1xuXG5cdGZvcihsZXQgcHJvcCBpbiBkYXRhLmltcG9ydHMpIHtcblx0XHRpbXBvcnRzLnB1c2goZGF0YS5pbXBvcnRzW3Byb3BdKVxuXHR9O1xuXG5cdGxldCBwcm9wZXJ0aWVzID0gW107XG5cblx0T2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocHJvcCwga2V5KSA9PiB7XG5cblx0XHRsZXQgb2JqZWN0ID0gbnVsbDtcblxuXHRcdGlmKEZ1bmN0aW9uUmV0dXJuRXhwcmVzc2lvbi5pbmNsdWRlcyhwcm9wKSkge1xuXHRcdFx0b2JqZWN0ID0gZ2VuZXJhdGVGdW5jdGlvblJldHVybkV4cHJlc3Npb24oZGF0YSwgcHJvcCk7XG5cdFx0fSBlbHNlIGlmKE9iamVjdFJldHVybkV4cHJlc3Npb24uaW5jbHVkZXMocHJvcCkpIHtcblx0XHRcdG9iamVjdCA9IGdlbmVyYXRlT2JqZWN0UmV0dXJuRXhwcmVzc2lvbihkYXRhLCBwcm9wKTtcblx0XHR9XG5cblx0XHRpZighb2JqZWN0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdHByb3BlcnRpZXMucHVzaChvYmplY3QpO1xuXHR9KVxuXG5cdGxldCBleHBvcnRlZE9iamVjdCA9IE9iamVjdEV4cHJlc3Npb24ocHJvcGVydGllcyk7XG5cdGxldCBleHBvcnRlZERlZmF1bHQgPSBbXG5cdFx0RXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uKGV4cG9ydGVkT2JqZWN0KVxuXHRdO1xuXG5cdGxldCBib2R5ID0gW11cblx0XHQuY29uY2F0KGltcG9ydHMpXG5cdFx0LmNvbmNhdChleHBvcnRlZERlZmF1bHQpXG5cblx0cmV0dXJuIHByb2dyYW0oXG5cdFx0Ym9keSwgXG5cdFx0W10sXG5cdFx0J21vZHVsZSdcblx0KTtcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZ1bmN0aW9uUmV0dXJuRXhwcmVzc2lvbihkYXRhLCByZXR1cm5Qcm9wKVxue1xuXHRsZXQgdmFsdWVzID0gZGF0YVtyZXR1cm5Qcm9wXTtcblx0bGV0IHByb3BlcnRpZXMgPSBbXTtcblxuXHRmb3IobGV0IHByb3AgaW4gdmFsdWVzKSB7XG5cdFx0bGV0IHZhbCA9IHZhbHVlc1twcm9wXTtcblxuXHRcdGlmKHZhbC50eXBlID09PSAnQmxvY2tTdGF0ZW1lbnQnKSB7XG5cdFx0XHR2YWwgPSBBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSwgdmFsKTtcblx0XHR9XG5cblx0XHRpZihSZWFjdGl0eVtyZXR1cm5Qcm9wXSkge1xuXHRcdFx0dmFsID0gQ2FsbEV4cHJlc3Npb24oaWRlbnRpZmllcihSZWFjdGl0eVtyZXR1cm5Qcm9wXSksIFt2YWxdKTtcblx0XHR9XG5cblx0XHRwcm9wZXJ0aWVzLnB1c2goXG5cdFx0XHRPYmplY3RQcm9wZXJ0eShpZGVudGlmaWVyKHByb3ApLCB2YWwpXG5cdFx0KVxuXHR9XG5cblx0bGV0IEZ1bmN0aW9uUmV0dXJuID0gUmV0dXJuU3RhdGVtZW50KFxuXHRcdE9iamVjdEV4cHJlc3Npb24oXG5cdFx0XHRwcm9wZXJ0aWVzXG5cdFx0KVxuXHQpXG5cblx0bGV0IGJvZHkgPSBCbG9ja1N0YXRlbWVudChbRnVuY3Rpb25SZXR1cm5dKVxuXG5cdGxldCBvYmplY3QgPSBPYmplY3RNZXRob2QoJ21ldGhvZCcsIGlkZW50aWZpZXIocmV0dXJuUHJvcCksXG5cdFx0UmVhY3RpdHlbcmV0dXJuUHJvcF0gPyBbaWRlbnRpZmllcihSZWFjdGl0eVtyZXR1cm5Qcm9wXSldIDogW11cblx0LCBib2R5KTtcblxuXHRyZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU9iamVjdFJldHVybkV4cHJlc3Npb24oZGF0YSwgdHlwZSlcbntcblx0bGV0IHZhbHVlcyA9IGRhdGFbdHlwZV07XG5cdGxldCBwcm9wZXJ0aWVzID0gW107XG5cblx0Zm9yKGxldCBwcm9wIGluIHZhbHVlcykge1xuXHRcdGxldCB2YWwgPSB2YWx1ZXNbcHJvcF07XG5cblx0XHRpZih0eXBlID09PSAncHJvcHMnKSB7XG5cdFx0XHRsZXQgcHJvcFR5cGUgPSB2YWwudHlwZTtcblx0XHRcdGxldCBwcm9wVmFsdWUgPSB2YWwuZGVmYXVsdFZhbHVlO1xuXG5cdFx0XHR2YWwgPSBPYmplY3RFeHByZXNzaW9uKFtcblx0XHRcdFx0T2JqZWN0UHJvcGVydHkoaWRlbnRpZmllcigndHlwZScpLCBTdHJpbmdMaXRlcmFsKHByb3BUeXBlKSksXG5cdFx0XHRcdE9iamVjdFByb3BlcnR5KGlkZW50aWZpZXIoJ2RlZmF1bHQnKSxcblx0XHRcdFx0XHRBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSxcblx0XHRcdFx0XHRcdEJsb2NrU3RhdGVtZW50KFtcblx0XHRcdFx0XHRcdFx0UmV0dXJuU3RhdGVtZW50KHByb3BWYWx1ZSlcblx0XHRcdFx0XHRcdF0pXG5cdFx0XHRcdFx0KSksXG5cdFx0XHRdKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHByb3AsIHByb3BUeXBlLCBwcm9wVmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmKHZhbC50eXBlID09PSAnRnVuY3Rpb25EZWNsYXJhdGlvbicpIHtcblx0XHRcdHZhbCA9IEZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCB2YWwucGFyYW1zLCB2YWwuYm9keSk7XG5cdFx0fVxuXG5cdFx0cHJvcGVydGllcy5wdXNoKFxuXHRcdFx0T2JqZWN0UHJvcGVydHkoaWRlbnRpZmllcihwcm9wKSwgdmFsKVxuXHRcdClcblx0fVxuXG5cdGxldCBvYmplY3QgPSBPYmplY3RQcm9wZXJ0eShcblx0XHRpZGVudGlmaWVyKHR5cGUpLFxuXHRcdE9iamVjdEV4cHJlc3Npb24ocHJvcGVydGllcylcblx0KTtcblxuXHRyZXR1cm4gb2JqZWN0O1xufVxuIl19