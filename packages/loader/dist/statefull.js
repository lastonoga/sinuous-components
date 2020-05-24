"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = statefull;

function statefull(options, block) {
  var code = "\n\t\timport { Basic } from '@siph/component';\n\n\t\tlet config = Object.assign({\n\t\t\tmethods: {},\n\t\t}, componentConfig);\n\n\t\tlet instance = function " + options.name + "() {\n\t\t\tBasic.call(this);\n\t\t};\n\t\t\n\t\t// inherit Basic\n\t\tinstance.prototype = Object.create(Basic.prototype);\n\n\t\t// correct the constructor pointer because it points to Basic\n\t\tinstance.prototype.constructor = instance;\n\t\t\n\t\tinstance.prototype._methods = {};\n\t\t\n\t\tinstance.prototype._componentName = '" + options.name + "';\n\t\tinstance.prototype._shouldHydarate = " + block.source.shouldHydarate + ";\n\t\tinstance.prototype._slotsData = " + JSON.stringify(block.source.slots) + ";\n\t\tinstance.prototype._methods = Object.keys(config.methods);\n\t\tinstance.prototype._functional = false;\n\t\t\n\t\tfor(let key in config) {\n\t\t\tif(typeof config[key] === 'function') {\n\t\t\t\tinstance.prototype[key] = config[key];\n\t\t\t}\n\t\t}\n\t\t\n\t\tfor(let key in config.methods) {\n\t\t\tinstance.prototype[key] = config.methods[key]\n\t\t}\n\t\t\n\t\tinstance.prototype.__props = {};\n\t\tfor(let key in config.props) {\n\t\t\tinstance.prototype.__props[key] = config.props[key]\n\t\t}\n\t";

  if (options.isSSR) {
    code += "\n\t\t\tinstance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {\n\t\t\t\treturn " + block.source.render + ";\n\t\t\t}\n\t\t";
  }

  if (options.isRuntime) {
    code += "\n\t\t\tinstance.prototype.__hydrate = function(h) {\n\t\t\t\tlet ctx = this;\n\t\t\t\treturn " + block.source.hydrate + ";\n\t\t\t}\n\t\t";
  }

  code += "\n\t\texport default instance;\n\t";
  return code;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZWZ1bGwuanMiXSwibmFtZXMiOlsic3RhdGVmdWxsIiwib3B0aW9ucyIsImJsb2NrIiwiY29kZSIsIm5hbWUiLCJzb3VyY2UiLCJzaG91bGRIeWRhcmF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzbG90cyIsImlzU1NSIiwicmVuZGVyIiwiaXNSdW50aW1lIiwiaHlkcmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLFNBQVQsQ0FBbUJDLE9BQW5CLEVBQTRCQyxLQUE1QixFQUNmO0FBQ0MsTUFBSUMsSUFBSSx3S0FPb0JGLE9BQU8sQ0FBQ0csSUFQNUIsc1ZBbUJpQ0gsT0FBTyxDQUFDRyxJQW5CekMscURBb0JpQ0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLGNBcEI5QywrQ0FxQjRCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sS0FBSyxDQUFDRyxNQUFOLENBQWFJLEtBQTVCLENBckI1QixvZ0JBQVI7O0FBeUNBLE1BQUdSLE9BQU8sQ0FBQ1MsS0FBWCxFQUFrQjtBQUNqQlAsSUFBQUEsSUFBSSx1SUFFUUQsS0FBSyxDQUFDRyxNQUFOLENBQWFNLE1BRnJCLHFCQUFKO0FBS0E7O0FBRUQsTUFBR1YsT0FBTyxDQUFDVyxTQUFYLEVBQXNCO0FBQ3JCVCxJQUFBQSxJQUFJLHVHQUdRRCxLQUFLLENBQUNHLE1BQU4sQ0FBYVEsT0FIckIscUJBQUo7QUFNQTs7QUFFRFYsRUFBQUEsSUFBSSx3Q0FBSjtBQUlBLFNBQU9BLElBQVA7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlZnVsbChvcHRpb25zLCBibG9jaylcbntcblx0bGV0IGNvZGUgPSBgXG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2lwaC9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uICR7IG9wdGlvbnMubmFtZSB9KCkge1xuXHRcdFx0QmFzaWMuY2FsbCh0aGlzKTtcblx0XHR9O1xuXHRcdFxuXHRcdC8vIGluaGVyaXQgQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2ljLnByb3RvdHlwZSk7XG5cblx0XHQvLyBjb3JyZWN0IHRoZSBjb25zdHJ1Y3RvciBwb2ludGVyIGJlY2F1c2UgaXQgcG9pbnRzIHRvIEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gaW5zdGFuY2U7XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzID0ge307XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9jb21wb25lbnROYW1lID0gJyR7IG9wdGlvbnMubmFtZSB9Jztcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX3Nob3VsZEh5ZGFyYXRlID0gJHsgYmxvY2suc291cmNlLnNob3VsZEh5ZGFyYXRlIH07XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSAkeyBKU09OLnN0cmluZ2lmeShibG9jay5zb3VyY2Uuc2xvdHMpIH07XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9tZXRob2RzID0gT2JqZWN0LmtleXMoY29uZmlnLm1ldGhvZHMpO1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fZnVuY3Rpb25hbCA9IGZhbHNlO1xuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZykge1xuXHRcdFx0aWYodHlwZW9mIGNvbmZpZ1trZXldID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5tZXRob2RzKSB7XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZy5tZXRob2RzW2tleV1cblx0XHR9XG5cdFx0XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcHJvcHMgPSB7fTtcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcucHJvcHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3Byb3BzW2tleV0gPSBjb25maWcucHJvcHNba2V5XVxuXHRcdH1cblx0YFx0XG5cdFxuXHRpZihvcHRpb25zLmlzU1NSKSB7XG5cdFx0Y29kZSArPSBgXG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19yZW5kZXIgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gJHsgYmxvY2suc291cmNlLnJlbmRlciB9O1xuXHRcdFx0fVxuXHRcdGA7XG5cdH1cblxuXHRpZihvcHRpb25zLmlzUnVudGltZSkge1xuXHRcdGNvZGUgKz0gYFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9faHlkcmF0ZSA9IGZ1bmN0aW9uKGgpIHtcblx0XHRcdFx0bGV0IGN0eCA9IHRoaXM7XG5cdFx0XHRcdHJldHVybiAkeyBibG9jay5zb3VyY2UuaHlkcmF0ZSB9O1xuXHRcdFx0fVxuXHRcdGA7XG5cdH1cblxuXHRjb2RlICs9IGBcblx0XHRleHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcblx0YDtcblxuXHRyZXR1cm4gY29kZTtcbn1cbiJdfQ==