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

    var result = [];
    var foundCondition = false; // value

    var childIndex = 0;

    for (var i = 0; i < _arguments.length; i += 3) {
      var condition = _arguments[i];
      var size = _arguments[i + 1];
      var value = _arguments[i + 2];
      var node = null;
      condition = typeof condition === 'function' ? condition() : condition;

      if (condition && !foundCondition) {
        foundCondition = true;
        node = value;
      } // console.warn(condition, size, value, node);
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
          result.push(node[j]);
        }
      } else {
        result.push(node);
      }
    } // console.log(result);


    return result;
  };

  d._observable = true;
  return d;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsic3RhdGVtZW50IiwiZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsIkVycm9yIiwicmVzdWx0IiwiZm91bmRDb25kaXRpb24iLCJjaGlsZEluZGV4IiwiaSIsImNvbmRpdGlvbiIsInNpemUiLCJ2YWx1ZSIsIm5vZGUiLCJqIiwicHVzaCIsImRvY3VtZW50IiwiY3JlYXRlQ29tbWVudCIsIl9vYnNlcnZhYmxlIiwiaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVlLFNBQVNBLFNBQVQsR0FDZjtBQUFBOztBQUNDLE1BQUlDLENBQUMsR0FBRyxTQUFKQSxDQUFJLEdBQU07QUFFYixRQUFHQyxVQUFTLENBQUNDLE1BQVYsR0FBbUIsQ0FBbkIsS0FBeUIsQ0FBNUIsRUFBK0I7QUFDOUIsWUFBTSxJQUFJQyxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNBOztBQUVELFFBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsUUFBSUMsY0FBYyxHQUFHLEtBQXJCLENBUGEsQ0FRYjs7QUFDQSxRQUFJQyxVQUFVLEdBQUcsQ0FBakI7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixVQUFTLENBQUNDLE1BQTlCLEVBQXNDSyxDQUFDLElBQUksQ0FBM0MsRUFBOEM7QUFDN0MsVUFBSUMsU0FBUyxHQUFHUCxVQUFTLENBQUNNLENBQUQsQ0FBekI7QUFDQSxVQUFJRSxJQUFJLEdBQUdSLFVBQVMsQ0FBQ00sQ0FBQyxHQUFHLENBQUwsQ0FBcEI7QUFDQSxVQUFJRyxLQUFLLEdBQUdULFVBQVMsQ0FBQ00sQ0FBQyxHQUFHLENBQUwsQ0FBckI7QUFDQSxVQUFJSSxJQUFJLEdBQUcsSUFBWDtBQUVBSCxNQUFBQSxTQUFTLEdBQUcsT0FBT0EsU0FBUCxLQUFxQixVQUFyQixHQUFrQ0EsU0FBUyxFQUEzQyxHQUFnREEsU0FBNUQ7O0FBRUEsVUFBR0EsU0FBUyxJQUFJLENBQUNILGNBQWpCLEVBQWlDO0FBQ2hDQSxRQUFBQSxjQUFjLEdBQUcsSUFBakI7QUFDQU0sUUFBQUEsSUFBSSxHQUFHRCxLQUFQO0FBQ0EsT0FYNEMsQ0FhN0M7QUFDQTtBQUNBOzs7QUFDQSxVQUFHQyxJQUFJLEtBQUssSUFBWixFQUFrQjtBQUNqQixhQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILElBQXBCLEVBQTBCRyxDQUFDLEVBQTNCLEVBQStCO0FBQzlCUixVQUFBQSxNQUFNLENBQUNTLElBQVAsQ0FBWUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEVBQXZCLENBQVo7QUFDQTs7QUFDRDtBQUNBOztBQUVELFVBQUcsQ0FBQ0osSUFBSSxDQUFDSyxXQUFULEVBQXNCO0FBQ3JCTCxRQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ00sWUFBRCxDQUFYO0FBQ0EsT0F6QjRDLENBMEI3QztBQUNBOzs7QUFDQSxVQUFHUixJQUFJLEdBQUcsQ0FBVixFQUFhO0FBQ1osYUFBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxJQUFwQixFQUEwQkcsQ0FBQyxFQUEzQixFQUErQjtBQUM5QlIsVUFBQUEsTUFBTSxDQUFDUyxJQUFQLENBQVlGLElBQUksQ0FBQ0MsQ0FBRCxDQUFoQjtBQUNBO0FBQ0QsT0FKRCxNQUlPO0FBQ05SLFFBQUFBLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZRixJQUFaO0FBQ0E7QUFDRCxLQTdDWSxDQStDYjs7O0FBRUEsV0FBT1AsTUFBUDtBQUNBLEdBbEREOztBQW9EQUosRUFBQUEsQ0FBQyxDQUFDZ0IsV0FBRixHQUFnQixJQUFoQjtBQUVBLFNBQU9oQixDQUFQO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoIH0gZnJvbSAnQHNpcGgvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KClcbntcblx0bGV0IGQgPSAoKSA9PiB7XG5cblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICUgMyAhPT0gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTdGF0ZW1lbnQgc2hvdWxkIGJlIG9kZCBudW1iZXInKTtcblx0XHR9XG5cblx0XHRsZXQgcmVzdWx0ID0gW107XG5cdFx0bGV0IGZvdW5kQ29uZGl0aW9uID0gZmFsc2U7XG5cdFx0Ly8gdmFsdWVcblx0XHRsZXQgY2hpbGRJbmRleCA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRsZXQgc2l6ZSA9IGFyZ3VtZW50c1tpICsgMV07XG5cdFx0XHRsZXQgdmFsdWUgPSBhcmd1bWVudHNbaSArIDJdO1xuXHRcdFx0bGV0IG5vZGUgPSBudWxsO1xuXG5cdFx0XHRjb25kaXRpb24gPSB0eXBlb2YgY29uZGl0aW9uID09PSAnZnVuY3Rpb24nID8gY29uZGl0aW9uKCkgOiBjb25kaXRpb247XG5cblx0XHRcdGlmKGNvbmRpdGlvbiAmJiAhZm91bmRDb25kaXRpb24pIHtcblx0XHRcdFx0Zm91bmRDb25kaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRub2RlID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnNvbGUud2Fybihjb25kaXRpb24sIHNpemUsIHZhbHVlLCBub2RlKTtcblx0XHRcdC8vIFBhc3MgZmFpbGVkIHN0ZXRlbWVudCBjb25kaXRpb25cblx0XHRcdC8vIE5vcm1pbGl6ZSBpbmRleCB0aGF0IHdpbGwgYmUgdXNlZCBpbiByZXBsYWNpbmcgcGxhY2Vob2xkZXIgKGJlbG93KVxuXHRcdFx0aWYobm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIW5vZGUuX29ic2VydmFibGUpIHtcblx0XHRcdFx0bm9kZSA9IG5vZGUoaCk7XG5cdFx0XHR9XG5cdFx0XHQvLyByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggbm9kZVxuXHRcdFx0Ly8gQW5kIGNvcnJlY3QgaW5kZXhcblx0XHRcdGlmKHNpemUgPiAxKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnB1c2gobm9kZVtqXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKG5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGQuX29ic2VydmFibGUgPSB0cnVlO1xuXG5cdHJldHVybiBkO1xufVxuIl19