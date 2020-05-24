"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _data = _interopRequireDefault(require("./data"));

var _traverse = _interopRequireDefault(require("@babel/traverse"));

var _types = require("@babel/types");

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

        if (value.type === 'BinaryExpression') {
          type = 'props';
          value = {
            type: value.left.name,
            defaultValue: value.right
          };
        } else if (['ArrowFunctionExpression', 'FunctionExpression'].includes(value.type)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHQvcGFyc2VDb250ZXh0LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJhc3QiLCJpc0Z1bmN0aW9uRGVjbGFyYXRpb24iLCJWYXJpYWJsZURlY2xhcmF0b3IiLCJlbnRlciIsInBhdGgiLCJpZCIsIm5vZGUiLCJ2YWx1ZSIsImluaXQiLCJuYW1lIiwidHlwZSIsImxlZnQiLCJkZWZhdWx0VmFsdWUiLCJyaWdodCIsImluY2x1ZGVzIiwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJleGl0IiwiRnVuY3Rpb25EZWNsYXJhdGlvbiIsIm1ldGhvZHMiLCJwYXJhbXMiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBSUE7Ozs7QUFPZSxrQkFBU0EsSUFBVCxFQUFlQyxHQUFmLEVBQ2Y7QUFDQyxNQUFJQyxxQkFBcUIsR0FBRyxLQUE1QjtBQUVBLHlCQUFTRCxHQUFULEVBQWM7QUFDYkUsSUFBQUEsa0JBQWtCLEVBQUU7QUFDbkJDLE1BQUFBLEtBRG1CLGlCQUNiQyxJQURhLEVBRW5CO0FBQ0MsWUFBSUMsRUFBRSxHQUFHRCxJQUFJLENBQUNFLElBQUwsQ0FBVUQsRUFBbkI7QUFDQSxZQUFJRSxLQUFLLEdBQUdILElBQUksQ0FBQ0UsSUFBTCxDQUFVRSxJQUF0Qjs7QUFFQSxZQUFHUCxxQkFBcUIsSUFBSU0sS0FBSyxLQUFLLElBQXRDLEVBQTRDO0FBQzNDO0FBQ0E7O0FBRUQsWUFBSUUsSUFBSSxHQUFHLGdDQUFrQkosRUFBbEIsQ0FBWDtBQUVBLFlBQUlLLElBQUksR0FBRyxJQUFYOztBQUNBLFlBQUdILEtBQUssQ0FBQ0csSUFBTixLQUFlLGtCQUFsQixFQUFzQztBQUNyQ0EsVUFBQUEsSUFBSSxHQUFHLE9BQVA7QUFDQUgsVUFBQUEsS0FBSyxHQUFHO0FBQ1BHLFlBQUFBLElBQUksRUFBRUgsS0FBSyxDQUFDSSxJQUFOLENBQVdGLElBRFY7QUFFUEcsWUFBQUEsWUFBWSxFQUFFTCxLQUFLLENBQUNNO0FBRmIsV0FBUjtBQUlBLFNBTkQsTUFNTyxJQUFHLENBQUMseUJBQUQsRUFBNEIsb0JBQTVCLEVBQWtEQyxRQUFsRCxDQUEyRFAsS0FBSyxDQUFDRyxJQUFqRSxDQUFILEVBQTJFO0FBQ2pGQSxVQUFBQSxJQUFJLEdBQUcsVUFBUDtBQUNBLFNBRk0sTUFFQSxJQUFHLG1DQUFxQlgsSUFBckIsRUFBMkJNLEVBQTNCLENBQUgsRUFBbUM7QUFDekNLLFVBQUFBLElBQUksR0FBRyxPQUFQO0FBQ0EsU0FGTSxNQUVBO0FBQ05BLFVBQUFBLElBQUksR0FBRyxNQUFQO0FBQ0EsU0F2QkYsQ0F5QkM7OztBQUNBWCxRQUFBQSxJQUFJLENBQUNXLElBQUQsQ0FBSixDQUFXRCxJQUFYLElBQW1CRixLQUFuQjtBQUNHO0FBN0JlLEtBRFA7QUFnQ2JRLElBQUFBLHVCQUF1QixFQUFFO0FBQ3hCWixNQUFBQSxLQUR3QixpQkFDbEJDLElBRGtCLEVBRXhCO0FBQ0NILFFBQUFBLHFCQUFxQixHQUFHLElBQXhCO0FBQ0EsT0FKdUI7QUFLckJlLE1BQUFBLElBTHFCLGdCQUtoQlosSUFMZ0IsRUFNckI7QUFDQ0gsUUFBQUEscUJBQXFCLEdBQUcsS0FBeEI7QUFDQTtBQVJvQixLQWhDWjtBQTBDYmdCLElBQUFBLG1CQUFtQixFQUFFO0FBQ3BCZCxNQUFBQSxLQURvQixpQkFDZEMsSUFEYyxFQUVwQjtBQUNDSCxRQUFBQSxxQkFBcUIsR0FBRyxJQUF4QjtBQUVBLFlBQUlJLEVBQUUsR0FBR0QsSUFBSSxDQUFDRSxJQUFMLENBQVVELEVBQW5CO0FBQ0EsWUFBSUksSUFBSSxHQUFHLGdDQUFrQkosRUFBbEIsQ0FBWDtBQUVBTixRQUFBQSxJQUFJLENBQUNtQixPQUFMLENBQWFULElBQWIsSUFBcUIsK0JBQW1CLElBQW5CLEVBQXlCTCxJQUFJLENBQUNFLElBQUwsQ0FBVWEsTUFBbkMsRUFBMkNmLElBQUksQ0FBQ0UsSUFBTCxDQUFVYyxJQUFyRCxDQUFyQjtBQUNHLE9BVGdCO0FBVWpCSixNQUFBQSxJQVZpQixnQkFVWlosSUFWWSxFQVdqQjtBQUNDSCxRQUFBQSxxQkFBcUIsR0FBRyxLQUF4QjtBQUNBO0FBYmdCO0FBMUNSLEdBQWQ7QUEwREEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5pbXBvcnQge1xuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Z2V0SWRlbnRpZmllck5hbWUsXG5cdGlzSWRlbnRpZmllclJlYWN0aXZlLFxuXHRtYWtlT2JzZXJ2YWJsZUdldHRlcixcbn0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkYXRhLCBhc3QpXG57XG5cdGxldCBpc0Z1bmN0aW9uRGVjbGFyYXRpb24gPSBmYWxzZTtcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRWYXJpYWJsZURlY2xhcmF0b3I6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IHZhbHVlID0gcGF0aC5ub2RlLmluaXQ7XG5cblx0XHRcdFx0aWYoaXNGdW5jdGlvbkRlY2xhcmF0aW9uIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShpZCk7XG5cblx0XHRcdFx0bGV0IHR5cGUgPSBudWxsO1xuXHRcdFx0XHRpZih2YWx1ZS50eXBlID09PSAnQmluYXJ5RXhwcmVzc2lvbicpIHtcblx0XHRcdFx0XHR0eXBlID0gJ3Byb3BzJztcblx0XHRcdFx0XHR2YWx1ZSA9IHtcblx0XHRcdFx0XHRcdHR5cGU6IHZhbHVlLmxlZnQubmFtZSxcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZTogdmFsdWUucmlnaHQsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYoWydBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbicsICdGdW5jdGlvbkV4cHJlc3Npb24nXS5pbmNsdWRlcyh2YWx1ZS50eXBlKSkge1xuXHRcdFx0XHRcdHR5cGUgPSAnY29tcHV0ZWQnO1xuXHRcdFx0XHR9IGVsc2UgaWYoaXNJZGVudGlmaWVyUmVhY3RpdmUoZGF0YSwgaWQpKSB7XG5cdFx0XHRcdFx0dHlwZSA9ICdzdGF0ZSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHlwZSA9ICdkYXRhJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGBTRVQgUFJPUCAke25hbWV9IHRvICR7dHlwZX1gLCBkYXRhKVxuXHRcdFx0XHRkYXRhW3R5cGVdW25hbWVdID0gdmFsdWU7XG5cdFx0ICAgIH0sXG5cdFx0fSxcblx0XHRBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aXNGdW5jdGlvbkRlY2xhcmF0aW9uID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGlzRnVuY3Rpb25EZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHRcdCAgICB9XG5cdFx0fSxcblx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpc0Z1bmN0aW9uRGVjbGFyYXRpb24gPSB0cnVlO1xuXG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShpZCk7XG5cblx0XHRcdFx0ZGF0YS5tZXRob2RzW25hbWVdID0gRnVuY3Rpb25FeHByZXNzaW9uKG51bGwsIHBhdGgubm9kZS5wYXJhbXMsIHBhdGgubm9kZS5ib2R5KTtcblx0XHQgICAgfSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0aXNGdW5jdGlvbkRlY2xhcmF0aW9uID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9XG5cdH0pO1xufVxuIl19