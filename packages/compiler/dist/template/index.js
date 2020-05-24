"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compileTemplate = compileTemplate;

var _script = require("../script");

var _generate = _interopRequireDefault(require("./generate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compileTemplate(context, html, blocks) {
  var script = blocks.script || {
    source: ''
  };
  context = (0, _script.getReactiveVariables)(context, script.source);
  return (0, _generate.default)(context, html);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb21waWxlVGVtcGxhdGUiLCJjb250ZXh0IiwiaHRtbCIsImJsb2NrcyIsInNjcmlwdCIsInNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRU8sU0FBU0EsZUFBVCxDQUF5QkMsT0FBekIsRUFBa0NDLElBQWxDLEVBQXdDQyxNQUF4QyxFQUNQO0FBQ0MsTUFBSUMsTUFBTSxHQUFHRCxNQUFNLENBQUNDLE1BQVAsSUFBaUI7QUFBRUMsSUFBQUEsTUFBTSxFQUFFO0FBQVYsR0FBOUI7QUFFQUosRUFBQUEsT0FBTyxHQUFHLGtDQUFxQkEsT0FBckIsRUFBOEJHLE1BQU0sQ0FBQ0MsTUFBckMsQ0FBVjtBQUVBLFNBQU8sdUJBQVNKLE9BQVQsRUFBa0JDLElBQWxCLENBQVA7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFJlYWN0aXZlVmFyaWFibGVzIH0gZnJvbSBcIi4uL3NjcmlwdFwiO1xuaW1wb3J0IGdlbmVyYXRlIGZyb20gJy4vZ2VuZXJhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVRlbXBsYXRlKGNvbnRleHQsIGh0bWwsIGJsb2Nrcylcbntcblx0bGV0IHNjcmlwdCA9IGJsb2Nrcy5zY3JpcHQgfHwgeyBzb3VyY2U6ICcnIH07XG5cblx0Y29udGV4dCA9IGdldFJlYWN0aXZlVmFyaWFibGVzKGNvbnRleHQsIHNjcmlwdC5zb3VyY2UpO1xuXHRcblx0cmV0dXJuIGdlbmVyYXRlKGNvbnRleHQsIGh0bWwpO1xufVxuIl19