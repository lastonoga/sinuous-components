"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseExpression;

var _traverse = _interopRequireDefault(require("@babel/traverse"));

var _types = require("@babel/types");

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHQvcGFyc2VFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbInBhcnNlRXhwcmVzc2lvbiIsImRhdGEiLCJhc3QiLCJjdHgiLCJkaXNhYmxlRXhlY3V0aW9uIiwib2JzZXJ2YWJsZSIsImNoYW5nZWQiLCJGdW5jdGlvbkRlY2xhcmF0aW9uIiwiSW1wb3J0RGVjbGFyYXRpb24iLCJlbnRlciIsInBhdGgiLCJpbXBvcnRzIiwibm9kZSIsInNvdXJjZSIsInZhbHVlIiwiZXhpdCIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwibGVmdCIsImFyZ3MiLCJyaWdodCIsIm9wZXJhdG9yIiwibGVuZ3RoIiwibmFtZSIsInJlcGxhY2VXaXRoIiwiSWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBTUE7Ozs7QUFPZSxTQUFTQSxlQUFULENBQXlCQyxJQUF6QixFQUErQkMsR0FBL0IsRUFBb0NDLEdBQXBDLEVBQWtEQyxnQkFBbEQsRUFDZjtBQUFBLE1BRG1ERCxHQUNuRDtBQURtREEsSUFBQUEsR0FDbkQsR0FEeUQsTUFDekQ7QUFBQTs7QUFBQSxNQURpRUMsZ0JBQ2pFO0FBRGlFQSxJQUFBQSxnQkFDakUsR0FEb0YsS0FDcEY7QUFBQTs7QUFDQyxNQUFJQyxVQUFVLEdBQUcsS0FBakI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsS0FBZDtBQUVBLE1BQUlDLG1CQUFtQixHQUFHLEtBQTFCO0FBQ0EseUJBQVNMLEdBQVQsRUFBYztBQUNiTSxJQUFBQSxpQkFBaUIsRUFBRTtBQUNsQkMsTUFBQUEsS0FEa0IsaUJBQ1pDLElBRFksRUFFbEI7QUFDQ1QsUUFBQUEsSUFBSSxDQUFDVSxPQUFMLENBQWFELElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxLQUE5QixJQUF1Q0osSUFBSSxDQUFDRSxJQUE1QztBQUNBO0FBSmlCLEtBRE47QUFPYkwsSUFBQUEsbUJBQW1CLEVBQUU7QUFDcEJFLE1BQUFBLEtBRG9CLGlCQUNkQyxJQURjLEVBQ1I7QUFDWEgsUUFBQUEsbUJBQW1CLEdBQUcsSUFBdEI7QUFDRyxPQUhnQjtBQUlqQlEsTUFBQUEsSUFKaUIsZ0JBSVpMLElBSlksRUFJTjtBQUNWSCxRQUFBQSxtQkFBbUIsR0FBRyxLQUF0QjtBQUNBO0FBTmdCLEtBUFI7QUFlYjtBQUNBUyxJQUFBQSxvQkFBb0IsRUFBRTtBQUNyQlAsTUFBQUEsS0FEcUIsaUJBQ2ZDLElBRGUsRUFDVDtBQUVYLFlBQUcsQ0FBQyxtQ0FBcUJULElBQXJCLEVBQTJCUyxJQUFJLENBQUNFLElBQUwsQ0FBVUssSUFBckMsQ0FBSixFQUFnRDtBQUMvQztBQUNBOztBQUVELFlBQUlDLElBQUksR0FBRyxDQUFDUixJQUFJLENBQUNFLElBQUwsQ0FBVU8sS0FBWCxDQUFYOztBQUVBLFlBQUdULElBQUksQ0FBQ0UsSUFBTCxDQUFVUSxRQUFWLENBQW1CQyxNQUFuQixHQUE0QixDQUEvQixFQUFrQztBQUNqQ0gsVUFBQUEsSUFBSSxHQUFHLENBQ04sNkJBQWlCUixJQUFJLENBQUNFLElBQUwsQ0FBVVEsUUFBVixDQUFtQixDQUFuQixDQUFqQixFQUF3Q1YsSUFBSSxDQUFDRSxJQUFMLENBQVVLLElBQWxELEVBQXdEUCxJQUFJLENBQUNFLElBQUwsQ0FBVU8sS0FBbEUsQ0FETSxDQUFQO0FBR0E7O0FBRUQsWUFBSUcsSUFBSSxHQUFHLGdDQUFrQlosSUFBSSxDQUFDRSxJQUFMLENBQVVLLElBQTVCLENBQVg7QUFDQVAsUUFBQUEsSUFBSSxDQUFDYSxXQUFMLENBQ0MsMkJBQWUsdUJBQVdELElBQVgsQ0FBZixFQUFpQ0osSUFBakMsQ0FERDtBQUlBYixRQUFBQSxVQUFVLEdBQUcsSUFBYjtBQUNBQyxRQUFBQSxPQUFPLEdBQUcsSUFBVjtBQUNBO0FBdEJvQixLQWhCVDtBQXdDYmtCLElBQUFBLFVBQVUsRUFBRTtBQUNYZixNQUFBQSxLQURXLGlCQUNMQyxJQURLLEVBQ0M7QUFDWCx1REFBaUNULElBQWpDLEVBQXVDUyxJQUF2QztBQUVBLFlBQUllLFVBQVUsR0FBRywrQkFBaUJ0QixHQUFqQixFQUFzQkYsSUFBdEIsRUFBNEJTLElBQTVCLENBQWpCOztBQUNBLFlBQUcsQ0FBQ2UsVUFBSixFQUFnQjtBQUNmO0FBQ0E7O0FBRURwQixRQUFBQSxVQUFVLEdBQUdvQixVQUFVLENBQUNwQixVQUFYLEdBQXdCLElBQXhCLEdBQStCQSxVQUE1QztBQUVBb0IsUUFBQUEsVUFBVSxDQUFDQyxPQUFYLENBQW1CdEIsZ0JBQW5CO0FBRUFFLFFBQUFBLE9BQU8sR0FBRyxJQUFWO0FBQ0E7QUFkVTtBQXhDQyxHQUFkO0FBMERBLFNBQU87QUFDTkosSUFBQUEsR0FBRyxFQUFIQSxHQURNO0FBRU5HLElBQUFBLFVBQVUsRUFBVkEsVUFGTTtBQUdOQyxJQUFBQSxPQUFPLEVBQVBBO0FBSE0sR0FBUDtBQUtBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuaW1wb3J0IHtcblx0aWRlbnRpZmllcixcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEJpbmFyeUV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHtcblx0Z2V0SWRlbnRpZmllck5hbWUsXG5cdGhhbmRsZUlkZW50aWZpZXIsXG5cdGlzSWRlbnRpZmllclJlYWN0aXZlLFxuXHRjaGVja0Z1bmN0aW9uQXJndW1lbnREZWNsYXJhdGlvblxufSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKGRhdGEsIGFzdCwgY3R4ID0gJ3RoaXMnLCBkaXNhYmxlRXhlY3V0aW9uID0gZmFsc2UpXG57XG5cdGxldCBvYnNlcnZhYmxlID0gZmFsc2U7XG5cdGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cdFxuXHRsZXQgRnVuY3Rpb25EZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJbXBvcnREZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0ZGF0YS5pbXBvcnRzW3BhdGgubm9kZS5zb3VyY2UudmFsdWVdID0gcGF0aC5ub2RlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uID0gdHJ1ZTtcblx0XHQgICAgfSxcblx0XHQgICAgZXhpdChwYXRoKSB7XG5cdFx0ICAgIFx0RnVuY3Rpb25EZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHRcdCAgICB9XG5cdFx0fSxcblx0XHQvLyBtYWtlIHJlYWN0aXZlIHZhcmlhYmxlIGFzc2lnbm1lbnQgYXMgZnVuY3Rpb25cblx0XHRBc3NpZ25tZW50RXhwcmVzc2lvbjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoIWlzSWRlbnRpZmllclJlYWN0aXZlKGRhdGEsIHBhdGgubm9kZS5sZWZ0KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBhcmdzID0gW3BhdGgubm9kZS5yaWdodF07XG5cblx0XHRcdFx0aWYocGF0aC5ub2RlLm9wZXJhdG9yLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRhcmdzID0gW1xuXHRcdFx0XHRcdFx0QmluYXJ5RXhwcmVzc2lvbihwYXRoLm5vZGUub3BlcmF0b3JbMF0sIHBhdGgubm9kZS5sZWZ0LCBwYXRoLm5vZGUucmlnaHQpXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShwYXRoLm5vZGUubGVmdCk7XG5cdFx0XHRcdHBhdGgucmVwbGFjZVdpdGgoXG5cdFx0XHRcdFx0Q2FsbEV4cHJlc3Npb24oaWRlbnRpZmllcihuYW1lKSwgYXJncylcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRvYnNlcnZhYmxlID0gdHJ1ZTtcblx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRjaGVja0Z1bmN0aW9uQXJndW1lbnREZWNsYXJhdGlvbihkYXRhLCBwYXRoKTtcblxuXHRcdFx0XHRsZXQgaWRlbnRpZmllciA9IGhhbmRsZUlkZW50aWZpZXIoY3R4LCBkYXRhLCBwYXRoKTtcblx0XHRcdFx0aWYoIWlkZW50aWZpZXIpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRvYnNlcnZhYmxlID0gaWRlbnRpZmllci5vYnNlcnZhYmxlID8gdHJ1ZSA6IG9ic2VydmFibGU7XG5cblx0XHRcdFx0aWRlbnRpZmllci5yZXBsYWNlKGRpc2FibGVFeGVjdXRpb24pO1xuXG5cdFx0XHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRhc3QsXG5cdFx0b2JzZXJ2YWJsZSxcblx0XHRjaGFuZ2VkLFxuXHR9XG59XG4iXX0=