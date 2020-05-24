"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = statement;

var _component = require("@siph/component");

function statement() {
  var _arguments = arguments;

  var d = function d() {
    if (_arguments.length % 3 !== 0) {
      throw new Error('Statement should be odd number');
    }

    var result = []; // value

    var statementSize = 0;

    for (var i = 0; i < _arguments.length; i += 3) {
      var condition = _arguments[i];
      var size = _arguments[i + 1];
      var value = _arguments[i + 2];
      var node = null;
      statementSize += size;

      if (typeof condition === 'function') {
        if (condition()) {
          node = value;
        }
      } else {
        if (condition) {
          node = value;
        }
      } // console.warn(i, size, node);
      // Pass failed stetement condition
      // Normilize index that will be used in replacing placeholder (below)


      if (node === null) {
        for (var j = 0; j < size; j++) {
          result.push(document.createComment(''));
        }

        continue;
      }

      if (!node._observable) {
        node = node(_component.h);
      } // replace placeholder with node
      // And correct index


      if (size > 1) {
        for (var j = 0; j < size; j++) {
          // if(Array.isArray(node)) {
          result.push(node[j]); // } else {
          // 	result.push(j == 0 ? node : -1);
          // }
        }
      } else {
        result.push(node);
      }
    } // console.log(result);


    return result;
    return {
      nodes: result,
      size: statementSize
    };
  };

  d._observable = true;
  return d;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsic3RhdGVtZW50IiwiZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsIkVycm9yIiwicmVzdWx0Iiwic3RhdGVtZW50U2l6ZSIsImkiLCJjb25kaXRpb24iLCJzaXplIiwidmFsdWUiLCJub2RlIiwiaiIsInB1c2giLCJkb2N1bWVudCIsImNyZWF0ZUNvbW1lbnQiLCJfb2JzZXJ2YWJsZSIsImgiLCJub2RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVlLFNBQVNBLFNBQVQsR0FDZjtBQUFBOztBQUNDLE1BQUlDLENBQUMsR0FBRyxTQUFKQSxDQUFJLEdBQU07QUFFYixRQUFHQyxVQUFTLENBQUNDLE1BQVYsR0FBbUIsQ0FBbkIsS0FBeUIsQ0FBNUIsRUFBK0I7QUFDOUIsWUFBTSxJQUFJQyxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNBOztBQUVELFFBQUlDLE1BQU0sR0FBRyxFQUFiLENBTmEsQ0FRYjs7QUFDQSxRQUFJQyxhQUFhLEdBQUcsQ0FBcEI7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxVQUFTLENBQUNDLE1BQTlCLEVBQXNDSSxDQUFDLElBQUksQ0FBM0MsRUFBOEM7QUFDN0MsVUFBSUMsU0FBUyxHQUFHTixVQUFTLENBQUNLLENBQUQsQ0FBekI7QUFDQSxVQUFJRSxJQUFJLEdBQUdQLFVBQVMsQ0FBQ0ssQ0FBQyxHQUFHLENBQUwsQ0FBcEI7QUFDQSxVQUFJRyxLQUFLLEdBQUdSLFVBQVMsQ0FBQ0ssQ0FBQyxHQUFHLENBQUwsQ0FBckI7QUFDQSxVQUFJSSxJQUFJLEdBQUcsSUFBWDtBQUVBTCxNQUFBQSxhQUFhLElBQUlHLElBQWpCOztBQUVBLFVBQUcsT0FBT0QsU0FBUCxLQUFxQixVQUF4QixFQUFvQztBQUNuQyxZQUFHQSxTQUFTLEVBQVosRUFBZ0I7QUFDZkcsVUFBQUEsSUFBSSxHQUFHRCxLQUFQO0FBQ0E7QUFDRCxPQUpELE1BSU87QUFDTixZQUFHRixTQUFILEVBQWM7QUFDYkcsVUFBQUEsSUFBSSxHQUFHRCxLQUFQO0FBQ0E7QUFDRCxPQWhCNEMsQ0FrQjdDO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBR0MsSUFBSSxLQUFLLElBQVosRUFBa0I7QUFDakIsYUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxJQUFwQixFQUEwQkcsQ0FBQyxFQUEzQixFQUErQjtBQUM5QlAsVUFBQUEsTUFBTSxDQUFDUSxJQUFQLENBQVlDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixFQUF2QixDQUFaO0FBQ0E7O0FBQ0Q7QUFDQTs7QUFFRCxVQUFHLENBQUNKLElBQUksQ0FBQ0ssV0FBVCxFQUFzQjtBQUNyQkwsUUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNNLFlBQUQsQ0FBWDtBQUNBLE9BOUI0QyxDQStCN0M7QUFDQTs7O0FBQ0EsVUFBR1IsSUFBSSxHQUFHLENBQVYsRUFBYTtBQUNaLGFBQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsSUFBcEIsRUFBMEJHLENBQUMsRUFBM0IsRUFBK0I7QUFDOUI7QUFDQ1AsVUFBQUEsTUFBTSxDQUFDUSxJQUFQLENBQVlGLElBQUksQ0FBQ0MsQ0FBRCxDQUFoQixFQUY2QixDQUc5QjtBQUNBO0FBQ0E7QUFDQTtBQUNELE9BUkQsTUFRTztBQUNOUCxRQUFBQSxNQUFNLENBQUNRLElBQVAsQ0FBWUYsSUFBWjtBQUNBO0FBQ0QsS0F0RFksQ0F3RGI7OztBQUNBLFdBQU9OLE1BQVA7QUFFQSxXQUFPO0FBQ05hLE1BQUFBLEtBQUssRUFBRWIsTUFERDtBQUVOSSxNQUFBQSxJQUFJLEVBQUVIO0FBRkEsS0FBUDtBQUlBLEdBL0REOztBQWlFQUwsRUFBQUEsQ0FBQyxDQUFDZSxXQUFGLEdBQWdCLElBQWhCO0FBRUEsU0FBT2YsQ0FBUDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCB9IGZyb20gJ0BzaXBoL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlbWVudCgpXG57XG5cdGxldCBkID0gKCkgPT4ge1xuXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCAlIDMgIT09IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignU3RhdGVtZW50IHNob3VsZCBiZSBvZGQgbnVtYmVyJyk7XG5cdFx0fVxuXG5cdFx0bGV0IHJlc3VsdCA9IFtdO1xuXG5cdFx0Ly8gdmFsdWVcblx0XHRsZXQgc3RhdGVtZW50U2l6ZSA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRsZXQgc2l6ZSA9IGFyZ3VtZW50c1tpICsgMV07XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaSArIDJdO1xuXHRcdFx0bGV0IG5vZGUgPSBudWxsO1xuXG5cdFx0XHRzdGF0ZW1lbnRTaXplICs9IHNpemU7XG5cblx0XHRcdGlmKHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aWYoY29uZGl0aW9uKCkpIHtcblx0XHRcdFx0XHRub2RlID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKGNvbmRpdGlvbikge1xuXHRcdFx0XHRcdG5vZGUgPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb25zb2xlLndhcm4oaSwgc2l6ZSwgbm9kZSk7XG5cdFx0XHQvLyBQYXNzIGZhaWxlZCBzdGV0ZW1lbnQgY29uZGl0aW9uXG5cdFx0XHQvLyBOb3JtaWxpemUgaW5kZXggdGhhdCB3aWxsIGJlIHVzZWQgaW4gcmVwbGFjaW5nIHBsYWNlaG9sZGVyIChiZWxvdylcblx0XHRcdGlmKG5vZGUgPT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCFub2RlLl9vYnNlcnZhYmxlKSB7XG5cdFx0XHRcdG5vZGUgPSBub2RlKGgpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gcmVwbGFjZSBwbGFjZWhvbGRlciB3aXRoIG5vZGVcblx0XHRcdC8vIEFuZCBjb3JyZWN0IGluZGV4XG5cdFx0XHRpZihzaXplID4gMSkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdC8vIGlmKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGVbal0pO1xuXHRcdFx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gXHRyZXN1bHQucHVzaChqID09IDAgPyBub2RlIDogLTEpO1xuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcblx0XHRyZXR1cm4ge1xuXHRcdFx0bm9kZXM6IHJlc3VsdCxcblx0XHRcdHNpemU6IHN0YXRlbWVudFNpemUsXG5cdFx0fTtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXG5cdHJldHVybiBkO1xufVxuIl19