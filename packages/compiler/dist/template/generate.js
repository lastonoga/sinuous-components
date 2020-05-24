"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generate;

var _html = require("./html");

var _attrs = require("./attrs");

var _parseFunctions = _interopRequireDefault(require("./parseFunctions"));

var _standalone = _interopRequireDefault(require("prettier/standalone"));

var _parser = _interopRequireWildcard(require("@babel/parser"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generate(context, html) {
  var tree = (0, _html.parseHTML)(html);
  tree.setSiblings();
  var slots = tree.getSlots();
  tree = tree.children;
  var ast = {
    render: [],
    hydrate: []
  };
  var result = {
    render: '',
    hydrate: '',
    shouldHydarate: false,
    isStatefull: false
  };

  for (var i = 0; i < tree.length; i++) {
    var renderAST = tree[i].toAST(context, false, true);
    var hydrationAST = tree[i].toAST(context, true, true);

    if (hydrationAST.statefull) {
      result.shouldHydarate = true;
    }

    ast.render.push(renderAST.value);
    ast.hydrate.push(hydrationAST.value);
  }

  if (ast.render.length === 1) {
    result.render = ast.render[0];
    result.hydrate = ast.hydrate[0];
  } else {
    result.render = "[" + ast.render.join(',') + "]";
    result.hydrate = "[" + ast.hydrate.join(',') + "]";
  }

  var prettierConfig = {
    parser: function parser(text, _ref) {
      var babel = _ref.babel;
      return _parser.parse(text);
    }
  };

  try {
    result.render = _standalone.default.format(result.render, prettierConfig);
    result.hydrate = _standalone.default.format('let _tmp = ' + result.hydrate, prettierConfig).substring('let _tmp = '.length);
  } catch (err) {
    console.error(err);
  }

  result.slots = slots;
  result.isStatefull = context.reactive_variables.length > 0;
  result.context = context; // console.log();
  // result.functional = false;

  return result;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9nZW5lcmF0ZS5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZSIsImNvbnRleHQiLCJodG1sIiwidHJlZSIsInNldFNpYmxpbmdzIiwic2xvdHMiLCJnZXRTbG90cyIsImNoaWxkcmVuIiwiYXN0IiwicmVuZGVyIiwiaHlkcmF0ZSIsInJlc3VsdCIsInNob3VsZEh5ZGFyYXRlIiwiaXNTdGF0ZWZ1bGwiLCJpIiwibGVuZ3RoIiwicmVuZGVyQVNUIiwidG9BU1QiLCJoeWRyYXRpb25BU1QiLCJzdGF0ZWZ1bGwiLCJwdXNoIiwidmFsdWUiLCJqb2luIiwicHJldHRpZXJDb25maWciLCJwYXJzZXIiLCJ0ZXh0IiwiYmFiZWwiLCJwYXJzZSIsInByZXR0aWVyIiwiZm9ybWF0Iiwic3Vic3RyaW5nIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVhY3RpdmVfdmFyaWFibGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsT0FBbEIsRUFBMkJDLElBQTNCLEVBQ2Y7QUFDQyxNQUFJQyxJQUFJLEdBQUcscUJBQVVELElBQVYsQ0FBWDtBQUVBQyxFQUFBQSxJQUFJLENBQUNDLFdBQUw7QUFFQSxNQUFJQyxLQUFLLEdBQUdGLElBQUksQ0FBQ0csUUFBTCxFQUFaO0FBRUFILEVBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDSSxRQUFaO0FBRUEsTUFBSUMsR0FBRyxHQUFHO0FBQ1RDLElBQUFBLE1BQU0sRUFBRSxFQURDO0FBRVRDLElBQUFBLE9BQU8sRUFBRTtBQUZBLEdBQVY7QUFLQSxNQUFJQyxNQUFNLEdBQUc7QUFDWkYsSUFBQUEsTUFBTSxFQUFFLEVBREk7QUFFWkMsSUFBQUEsT0FBTyxFQUFFLEVBRkc7QUFHWkUsSUFBQUEsY0FBYyxFQUFFLEtBSEo7QUFJWkMsSUFBQUEsV0FBVyxFQUFFO0FBSkQsR0FBYjs7QUFPQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdYLElBQUksQ0FBQ1ksTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDckMsUUFBSUUsU0FBUyxHQUFHYixJQUFJLENBQUNXLENBQUQsQ0FBSixDQUFRRyxLQUFSLENBQWNoQixPQUFkLEVBQXVCLEtBQXZCLEVBQThCLElBQTlCLENBQWhCO0FBQ0EsUUFBSWlCLFlBQVksR0FBR2YsSUFBSSxDQUFDVyxDQUFELENBQUosQ0FBUUcsS0FBUixDQUFjaEIsT0FBZCxFQUF1QixJQUF2QixFQUE2QixJQUE3QixDQUFuQjs7QUFFQSxRQUFHaUIsWUFBWSxDQUFDQyxTQUFoQixFQUEyQjtBQUMxQlIsTUFBQUEsTUFBTSxDQUFDQyxjQUFQLEdBQXdCLElBQXhCO0FBQ0E7O0FBRURKLElBQUFBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXVyxJQUFYLENBQWdCSixTQUFTLENBQUNLLEtBQTFCO0FBQ0FiLElBQUFBLEdBQUcsQ0FBQ0UsT0FBSixDQUFZVSxJQUFaLENBQWlCRixZQUFZLENBQUNHLEtBQTlCO0FBQ0E7O0FBRUQsTUFBR2IsR0FBRyxDQUFDQyxNQUFKLENBQVdNLE1BQVgsS0FBc0IsQ0FBekIsRUFBNEI7QUFDM0JKLElBQUFBLE1BQU0sQ0FBQ0YsTUFBUCxHQUFnQkQsR0FBRyxDQUFDQyxNQUFKLENBQVcsQ0FBWCxDQUFoQjtBQUNBRSxJQUFBQSxNQUFNLENBQUNELE9BQVAsR0FBaUJGLEdBQUcsQ0FBQ0UsT0FBSixDQUFZLENBQVosQ0FBakI7QUFDQSxHQUhELE1BR087QUFDTkMsSUFBQUEsTUFBTSxDQUFDRixNQUFQLFNBQXNCRCxHQUFHLENBQUNDLE1BQUosQ0FBV2EsSUFBWCxDQUFnQixHQUFoQixDQUF0QjtBQUNBWCxJQUFBQSxNQUFNLENBQUNELE9BQVAsU0FBdUJGLEdBQUcsQ0FBQ0UsT0FBSixDQUFZWSxJQUFaLENBQWlCLEdBQWpCLENBQXZCO0FBQ0E7O0FBRUQsTUFBSUMsY0FBYyxHQUFHO0FBQ3BCQyxJQUFBQSxNQURvQixrQkFDYkMsSUFEYSxRQUNJO0FBQUEsVUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3ZCLGFBQU9GLE9BQU0sQ0FBQ0csS0FBUCxDQUFhRixJQUFiLENBQVA7QUFDQTtBQUhtQixHQUFyQjs7QUFNQSxNQUFJO0FBQ0hkLElBQUFBLE1BQU0sQ0FBQ0YsTUFBUCxHQUFnQm1CLG9CQUFTQyxNQUFULENBQWdCbEIsTUFBTSxDQUFDRixNQUF2QixFQUErQmMsY0FBL0IsQ0FBaEI7QUFDQVosSUFBQUEsTUFBTSxDQUFDRCxPQUFQLEdBQWlCa0Isb0JBQVNDLE1BQVQsQ0FBZ0IsZ0JBQWdCbEIsTUFBTSxDQUFDRCxPQUF2QyxFQUFnRGEsY0FBaEQsRUFBZ0VPLFNBQWhFLENBQTBFLGNBQWNmLE1BQXhGLENBQWpCO0FBQ0EsR0FIRCxDQUdFLE9BQU1nQixHQUFOLEVBQVc7QUFDWkMsSUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDQTs7QUFFRHBCLEVBQUFBLE1BQU0sQ0FBQ04sS0FBUCxHQUFlQSxLQUFmO0FBQ0FNLEVBQUFBLE1BQU0sQ0FBQ0UsV0FBUCxHQUFxQlosT0FBTyxDQUFDaUMsa0JBQVIsQ0FBMkJuQixNQUEzQixHQUFvQyxDQUF6RDtBQUNBSixFQUFBQSxNQUFNLENBQUNWLE9BQVAsR0FBaUJBLE9BQWpCLENBeERELENBeURDO0FBQ0E7O0FBRUEsU0FBT1UsTUFBUDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VIVE1MIH0gZnJvbSAnLi9odG1sJztcbmltcG9ydCB7IHBhcnNlQXR0cnMgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCBwYXJzZUZ1bmN0aW9ucyBmcm9tICcuL3BhcnNlRnVuY3Rpb25zJztcblxuaW1wb3J0IHByZXR0aWVyIGZyb20gJ3ByZXR0aWVyL3N0YW5kYWxvbmUnO1xuaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCJAYmFiZWwvcGFyc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlKGNvbnRleHQsIGh0bWwpXG57XG5cdGxldCB0cmVlID0gcGFyc2VIVE1MKGh0bWwpO1xuXG5cdHRyZWUuc2V0U2libGluZ3MoKTtcblxuXHRsZXQgc2xvdHMgPSB0cmVlLmdldFNsb3RzKCk7XG5cblx0dHJlZSA9IHRyZWUuY2hpbGRyZW47XG5cblx0bGV0IGFzdCA9IHtcblx0XHRyZW5kZXI6IFtdLFxuXHRcdGh5ZHJhdGU6IFtdLFxuXHR9XG5cblx0bGV0IHJlc3VsdCA9IHtcblx0XHRyZW5kZXI6ICcnLFxuXHRcdGh5ZHJhdGU6ICcnLFxuXHRcdHNob3VsZEh5ZGFyYXRlOiBmYWxzZSxcblx0XHRpc1N0YXRlZnVsbDogZmFsc2UsXG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgcmVuZGVyQVNUID0gdHJlZVtpXS50b0FTVChjb250ZXh0LCBmYWxzZSwgdHJ1ZSk7XG5cdFx0bGV0IGh5ZHJhdGlvbkFTVCA9IHRyZWVbaV0udG9BU1QoY29udGV4dCwgdHJ1ZSwgdHJ1ZSk7XG5cblx0XHRpZihoeWRyYXRpb25BU1Quc3RhdGVmdWxsKSB7XG5cdFx0XHRyZXN1bHQuc2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGFzdC5yZW5kZXIucHVzaChyZW5kZXJBU1QudmFsdWUpO1xuXHRcdGFzdC5oeWRyYXRlLnB1c2goaHlkcmF0aW9uQVNULnZhbHVlKTtcblx0fVxuXG5cdGlmKGFzdC5yZW5kZXIubGVuZ3RoID09PSAxKSB7XG5cdFx0cmVzdWx0LnJlbmRlciA9IGFzdC5yZW5kZXJbMF07XG5cdFx0cmVzdWx0Lmh5ZHJhdGUgPSBhc3QuaHlkcmF0ZVswXTtcblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucmVuZGVyID0gYFskeyAgYXN0LnJlbmRlci5qb2luKCcsJykgfV1gO1xuXHRcdHJlc3VsdC5oeWRyYXRlID0gYFskeyAgYXN0Lmh5ZHJhdGUuam9pbignLCcpIH1dYDtcblx0fVxuXG5cdGxldCBwcmV0dGllckNvbmZpZyA9IHtcblx0XHRwYXJzZXIodGV4dCwgeyBiYWJlbCB9KSB7XG5cdFx0XHRyZXR1cm4gcGFyc2VyLnBhcnNlKHRleHQpO1xuXHRcdH1cblx0fTtcblxuXHR0cnkge1xuXHRcdHJlc3VsdC5yZW5kZXIgPSBwcmV0dGllci5mb3JtYXQocmVzdWx0LnJlbmRlciwgcHJldHRpZXJDb25maWcpO1xuXHRcdHJlc3VsdC5oeWRyYXRlID0gcHJldHRpZXIuZm9ybWF0KCdsZXQgX3RtcCA9ICcgKyByZXN1bHQuaHlkcmF0ZSwgcHJldHRpZXJDb25maWcpLnN1YnN0cmluZygnbGV0IF90bXAgPSAnLmxlbmd0aCk7XG5cdH0gY2F0Y2goZXJyKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHR9XG5cblx0cmVzdWx0LnNsb3RzID0gc2xvdHM7XG5cdHJlc3VsdC5pc1N0YXRlZnVsbCA9IGNvbnRleHQucmVhY3RpdmVfdmFyaWFibGVzLmxlbmd0aCA+IDA7XG5cdHJlc3VsdC5jb250ZXh0ID0gY29udGV4dDtcblx0Ly8gY29uc29sZS5sb2coKTtcblx0Ly8gcmVzdWx0LmZ1bmN0aW9uYWwgPSBmYWxzZTtcblx0XG5cdHJldHVybiByZXN1bHQ7XG59XG4iXX0=