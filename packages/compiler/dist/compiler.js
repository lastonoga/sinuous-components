"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compiler = compiler;

var _nodeHtmlParser = require("node-html-parser");

var _block = _interopRequireDefault(require("./block.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21waWxlci5qcyJdLCJuYW1lcyI6WyJjb21waWxlciIsImNvbnRleHQiLCJ0eXBlIiwic291cmNlIiwicm9vdCIsImxvd2VyQ2FzZVRhZ05hbWUiLCJzY3JpcHQiLCJub2RlcyIsImNoaWxkTm9kZXMiLCJibG9ja3MiLCJpIiwibGVuZ3RoIiwidGFnTmFtZSIsImlubmVySFRNTCIsImV4ZWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVPLFNBQVNBLFFBQVQsT0FBNkM7QUFBQSxNQUF6QkMsT0FBeUIsUUFBekJBLE9BQXlCO0FBQUEsTUFBaEJDLElBQWdCLFFBQWhCQSxJQUFnQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUVuRCxNQUFJQyxJQUFJLEdBQUcsMkJBQU1ELE1BQU4sRUFBYztBQUN4QkUsSUFBQUEsZ0JBQWdCLEVBQUUsSUFETTtBQUV4QkMsSUFBQUEsTUFBTSxFQUFFO0FBRmdCLEdBQWQsQ0FBWDtBQUtBLE1BQUlDLEtBQUssR0FBR0gsSUFBSSxDQUFDSSxVQUFqQjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxFQUFiOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsS0FBSyxDQUFDSSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUN0QyxRQUFHSCxLQUFLLENBQUNHLENBQUQsQ0FBTCxDQUFTRSxPQUFaLEVBQXFCO0FBQ3BCSCxNQUFBQSxNQUFNLENBQUNGLEtBQUssQ0FBQ0csQ0FBRCxDQUFMLENBQVNFLE9BQVYsQ0FBTixHQUEyQixvQkFBTVgsT0FBTixFQUFlO0FBQ3pDQyxRQUFBQSxJQUFJLEVBQUVLLEtBQUssQ0FBQ0csQ0FBRCxDQUFMLENBQVNFLE9BRDBCO0FBRXpDVCxRQUFBQSxNQUFNLEVBQUVJLEtBQUssQ0FBQ0csQ0FBRCxDQUFMLENBQVNHO0FBRndCLE9BQWYsQ0FBM0I7QUFJQTtBQUNEOztBQUVELE1BQUdKLE1BQU0sQ0FBQ1AsSUFBRCxDQUFULEVBQWlCO0FBQ2hCLFdBQU9PLE1BQU0sQ0FBQ1AsSUFBRCxDQUFOLENBQWFZLElBQWIsQ0FBa0JMLE1BQWxCLENBQVA7QUFDQTs7QUFFRCxTQUFPLG9CQUFNUixPQUFOLEVBQWU7QUFDckJDLElBQUFBLElBQUksRUFBRUEsSUFEZTtBQUVyQkMsSUFBQUEsTUFBTSxFQUFFO0FBRmEsR0FBZixDQUFQO0FBSUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ25vZGUtaHRtbC1wYXJzZXInO1xuaW1wb3J0IGJsb2NrIGZyb20gJy4vYmxvY2suanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZXIoeyBjb250ZXh0LCB0eXBlLCBzb3VyY2UgfSkge1xuXG5cdGxldCByb290ID0gcGFyc2Uoc291cmNlLCB7XG5cdFx0bG93ZXJDYXNlVGFnTmFtZTogdHJ1ZSxcblx0XHRzY3JpcHQ6IHRydWUsXG5cdH0pO1xuXG5cdGxldCBub2RlcyA9IHJvb3QuY2hpbGROb2Rlcztcblx0bGV0IGJsb2NrcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRpZihub2Rlc1tpXS50YWdOYW1lKSB7XG5cdFx0XHRibG9ja3Nbbm9kZXNbaV0udGFnTmFtZV0gPSBibG9jayhjb250ZXh0LCB7XG5cdFx0XHRcdHR5cGU6IG5vZGVzW2ldLnRhZ05hbWUsXG5cdFx0XHRcdHNvdXJjZTogbm9kZXNbaV0uaW5uZXJIVE1MLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XHRcblxuXHRpZihibG9ja3NbdHlwZV0pIHtcblx0XHRyZXR1cm4gYmxvY2tzW3R5cGVdLmV4ZWMoYmxvY2tzKTtcblx0fVxuXG5cdHJldHVybiBibG9jayhjb250ZXh0LCB7XG5cdFx0dHlwZTogdHlwZSxcblx0XHRzb3VyY2U6IG51bGwsXG5cdH0pO1xufVxuIl19