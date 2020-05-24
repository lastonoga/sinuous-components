"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _script = require("./script");

var _template = require("./template");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ibG9jay5qcyJdLCJuYW1lcyI6WyJjb21waWxlciIsImNvbnRleHQiLCJibG9ja3MiLCJzb3VyY2UiLCJ0eXBlIiwiZXhlYyIsInMiLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsT0FBbEIsUUFDQTtBQUFBLE1BRDZCQyxNQUM3QixRQUQ2QkEsTUFDN0I7QUFBQSxNQURxQ0MsTUFDckMsUUFEcUNBLE1BQ3JDO0FBQUEsTUFENkNDLElBQzdDLFFBRDZDQSxJQUM3Qzs7QUFDQyxNQUFJQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFZO0FBQ3RCLFdBQU9GLE1BQVA7QUFDQSxHQUZEOztBQUlBLE1BQUdDLElBQUksS0FBSyxRQUFaLEVBQXNCO0FBQ3JCLFFBQUlFLENBQUMsR0FBRywyQkFBY0wsT0FBZCxFQUF1QkUsTUFBdkIsQ0FBUjtBQUNBQSxJQUFBQSxNQUFNLEdBQUdHLENBQUMsQ0FBQ0MsSUFBRixJQUFVLEVBQVYsR0FBZSxJQUFmLEdBQXNCRCxDQUFDLENBQUNDLElBQWpDO0FBQ0E7O0FBRUQsTUFBR0gsSUFBSSxLQUFLLFVBQVosRUFBd0I7QUFDdkJELElBQUFBLE1BQU0sR0FBRywrQkFBZ0JGLE9BQWhCLEVBQXlCRSxNQUF6QixFQUFpQ0QsTUFBakMsQ0FBVDtBQUNBOztBQUVELFNBQU87QUFDTkMsSUFBQUEsTUFBTSxFQUFOQSxNQURNO0FBRU5DLElBQUFBLElBQUksRUFBSkEsSUFGTTtBQUdOQyxJQUFBQSxJQUFJLEVBQUpBO0FBSE0sR0FBUDtBQUtBOztBQUVjLGtCQUFTSixPQUFULFNBQ2Y7QUFBQSxNQURtQ0csSUFDbkMsU0FEbUNBLElBQ25DO0FBQUEsTUFEeUNELE1BQ3pDLFNBRHlDQSxNQUN6QztBQUNDLFNBQU87QUFDTkMsSUFBQUEsSUFBSSxFQUFKQSxJQURNO0FBRU5ELElBQUFBLE1BQU0sRUFBTkEsTUFGTTtBQUdORSxJQUFBQSxJQUhNLGdCQUdESCxNQUhDLEVBR1k7QUFBQSxVQUFiQSxNQUFhO0FBQWJBLFFBQUFBLE1BQWEsR0FBSixFQUFJO0FBQUE7O0FBQ2pCLGFBQU9GLFFBQVEsQ0FBQ0MsT0FBRCxFQUFVO0FBQ3hCQyxRQUFBQSxNQUFNLEVBQU5BLE1BRHdCO0FBRXhCQyxRQUFBQSxNQUFNLEVBQUUsS0FBS0EsTUFGVztBQUd4QkMsUUFBQUEsSUFBSSxFQUFFLEtBQUtBO0FBSGEsT0FBVixDQUFmO0FBS0E7QUFUSyxHQUFQO0FBV0E7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21waWxlU2NyaXB0IH0gZnJvbSBcIi4vc2NyaXB0XCI7XG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUgfSBmcm9tIFwiLi90ZW1wbGF0ZVwiO1xuXG5mdW5jdGlvbiBjb21waWxlcihjb250ZXh0LCB7IGJsb2Nrcywgc291cmNlLCB0eXBlIH0pXG57XG5cdGxldCBleGVjID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzb3VyY2U7XG5cdH1cblxuXHRpZih0eXBlID09PSAnc2NyaXB0Jykge1xuXHRcdGxldCBzID0gY29tcGlsZVNjcmlwdChjb250ZXh0LCBzb3VyY2UpO1xuXHRcdHNvdXJjZSA9IHMuY29kZSA9PSAnJyA/IG51bGwgOiBzLmNvZGU7XG5cdH1cblxuXHRpZih0eXBlID09PSAndGVtcGxhdGUnKSB7XG5cdFx0c291cmNlID0gY29tcGlsZVRlbXBsYXRlKGNvbnRleHQsIHNvdXJjZSwgYmxvY2tzKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c291cmNlLFxuXHRcdHR5cGUsXG5cdFx0ZXhlYyxcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCB7IHR5cGUsIHNvdXJjZSB9KVxue1xuXHRyZXR1cm4ge1xuXHRcdHR5cGUsXG5cdFx0c291cmNlLFxuXHRcdGV4ZWMoYmxvY2tzID0gW10pIHtcblx0XHRcdHJldHVybiBjb21waWxlcihjb250ZXh0LCB7XG5cdFx0XHRcdGJsb2Nrcyxcblx0XHRcdFx0c291cmNlOiB0aGlzLnNvdXJjZSxcblx0XHRcdFx0dHlwZTogdGhpcy50eXBlLFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbn07XG4iXX0=