"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = functional;

function bindMethodsToContext(methods) {
  var code = '';

  for (var name in methods) {
    code += "ctx." + name + " = this." + name + ";\n";
  }

  return code;
}

function functional(options, block) {
  var context = block.source.context;
  var imports = ["import { styles, classes, dynamic } from '@siph/component';"];
  var code = '';
  var main = "\n\t\tlet config = Object.assign({\n\t\t\tmethods: {},\n\t\t}, componentConfig);\n\n\t\tlet instance = function " + options.name + "(parent, ctx) {\n\t\t\t\n\t\t};\n\n\t\tinstance._functional = true;\n\t\tinstance.prototype._componentName = '" + options.name + "';\n\t\tinstance._slotsData = " + JSON.stringify(block.source.slots) + ";\n\n\t\tfor(let key in config.methods) {\n\t\t\tinstance[key] = config.methods[key]\n\t\t}\n\t";

  if (options.isSSR) {
    imports.push("import { statement, loop, slot, h } from '@siph/component';");
    code += "\n\t\t\tinstance.render = function(ctx) {\n\t\t\t\treturn " + block.source.render + ";\n\t\t\t}\n\t\t";
  }

  if (options.isRuntime) {
    // imports.push(`import { statement as hStatement, loop as hLoop, slot as hSlot } from '@siph/hydration';`);
    code += "\n\t\t\tinstance.hydrate = function(ctx, h) {\n\t\t\t\t" + bindMethodsToContext(context.data.methods) + "\n\t\t\t\treturn " + block.source.hydrate + ";\n\t\t\t}\n\t\t";
  }

  return "\n\t\t" + imports.join('\n') + "\n\n\t\t" + main + "\n\n\t\t" + code + "\n\n\t\texport default instance;\n\t";
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mdW5jdGlvbmFsLmpzIl0sIm5hbWVzIjpbImJpbmRNZXRob2RzVG9Db250ZXh0IiwibWV0aG9kcyIsImNvZGUiLCJuYW1lIiwiZnVuY3Rpb25hbCIsIm9wdGlvbnMiLCJibG9jayIsImNvbnRleHQiLCJzb3VyY2UiLCJpbXBvcnRzIiwibWFpbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzbG90cyIsImlzU1NSIiwicHVzaCIsInJlbmRlciIsImlzUnVudGltZSIsImRhdGEiLCJoeWRyYXRlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFNBQVNBLG9CQUFULENBQThCQyxPQUE5QixFQUNBO0FBQ0MsTUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBRUEsT0FBSSxJQUFJQyxJQUFSLElBQWdCRixPQUFoQixFQUF5QjtBQUN4QkMsSUFBQUEsSUFBSSxhQUFXQyxJQUFYLGdCQUEwQkEsSUFBMUIsUUFBSjtBQUNBOztBQUVELFNBQU9ELElBQVA7QUFDQTs7QUFHYyxTQUFTRSxVQUFULENBQW9CQyxPQUFwQixFQUE2QkMsS0FBN0IsRUFDZjtBQUNDLE1BQUlDLE9BQU8sR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFELE9BQTNCO0FBRUEsTUFBSUUsT0FBTyxHQUFHLCtEQUFkO0FBSUEsTUFBSVAsSUFBSSxHQUFHLEVBQVg7QUFDQSxNQUFJUSxJQUFJLHdIQUtvQkwsT0FBTyxDQUFDRixJQUw1QixzSEFVaUNFLE9BQU8sQ0FBQ0YsSUFWekMsc0NBV2tCUSxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sS0FBSyxDQUFDRSxNQUFOLENBQWFLLEtBQTVCLENBWGxCLG9HQUFSOztBQWtCQSxNQUFHUixPQUFPLENBQUNTLEtBQVgsRUFBa0I7QUFDakJMLElBQUFBLE9BQU8sQ0FBQ00sSUFBUjtBQUVBYixJQUFBQSxJQUFJLG1FQUVRSSxLQUFLLENBQUNFLE1BQU4sQ0FBYVEsTUFGckIscUJBQUo7QUFLQTs7QUFFRCxNQUFHWCxPQUFPLENBQUNZLFNBQVgsRUFBc0I7QUFDckI7QUFFQWYsSUFBQUEsSUFBSSxnRUFFQ0Ysb0JBQW9CLENBQUNPLE9BQU8sQ0FBQ1csSUFBUixDQUFhakIsT0FBZCxDQUZyQix5QkFHUUssS0FBSyxDQUFDRSxNQUFOLENBQWFXLE9BSHJCLHFCQUFKO0FBTUE7O0FBRUQsb0JBQ0lWLE9BQU8sQ0FBQ1csSUFBUixDQUFhLElBQWIsQ0FESixnQkFHSVYsSUFISixnQkFLSVIsSUFMSjtBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYmluZE1ldGhvZHNUb0NvbnRleHQobWV0aG9kcylcbntcblx0bGV0IGNvZGUgPSAnJztcblx0XG5cdGZvcihsZXQgbmFtZSBpbiBtZXRob2RzKSB7XG5cdFx0Y29kZSArPSBgY3R4LiR7bmFtZX0gPSB0aGlzLiR7bmFtZX07XFxuYDtcblx0fVxuXG5cdHJldHVybiBjb2RlO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZ1bmN0aW9uYWwob3B0aW9ucywgYmxvY2spXG57XG5cdGxldCBjb250ZXh0ID0gYmxvY2suc291cmNlLmNvbnRleHQ7XG5cblx0bGV0IGltcG9ydHMgPSBbXG5cdFx0YGltcG9ydCB7IHN0eWxlcywgY2xhc3NlcywgZHluYW1pYyB9IGZyb20gJ0BzaXBoL2NvbXBvbmVudCc7YCxcblx0XTtcblxuXHRsZXQgY29kZSA9ICcnO1xuXHRsZXQgbWFpbiA9IGBcblx0XHRsZXQgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRtZXRob2RzOiB7fSxcblx0XHR9LCBjb21wb25lbnRDb25maWcpO1xuXG5cdFx0bGV0IGluc3RhbmNlID0gZnVuY3Rpb24gJHsgb3B0aW9ucy5uYW1lIH0ocGFyZW50LCBjdHgpIHtcblx0XHRcdFxuXHRcdH07XG5cblx0XHRpbnN0YW5jZS5fZnVuY3Rpb25hbCA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9jb21wb25lbnROYW1lID0gJyR7IG9wdGlvbnMubmFtZSB9Jztcblx0XHRpbnN0YW5jZS5fc2xvdHNEYXRhID0gJHsgSlNPTi5zdHJpbmdpZnkoYmxvY2suc291cmNlLnNsb3RzKSB9O1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlW2tleV0gPSBjb25maWcubWV0aG9kc1trZXldXG5cdFx0fVxuXHRgXHRcblx0XG5cdGlmKG9wdGlvbnMuaXNTU1IpIHtcblx0XHRpbXBvcnRzLnB1c2goYGltcG9ydCB7IHN0YXRlbWVudCwgbG9vcCwgc2xvdCwgaCB9IGZyb20gJ0BzaXBoL2NvbXBvbmVudCc7YCk7XG5cblx0XHRjb2RlICs9IGBcblx0XHRcdGluc3RhbmNlLnJlbmRlciA9IGZ1bmN0aW9uKGN0eCkge1xuXHRcdFx0XHRyZXR1cm4gJHsgYmxvY2suc291cmNlLnJlbmRlciB9O1xuXHRcdFx0fVxuXHRcdGA7XG5cdH1cblx0XG5cdGlmKG9wdGlvbnMuaXNSdW50aW1lKSB7XG5cdFx0Ly8gaW1wb3J0cy5wdXNoKGBpbXBvcnQgeyBzdGF0ZW1lbnQgYXMgaFN0YXRlbWVudCwgbG9vcCBhcyBoTG9vcCwgc2xvdCBhcyBoU2xvdCB9IGZyb20gJ0BzaXBoL2h5ZHJhdGlvbic7YCk7XG5cblx0XHRjb2RlICs9IGBcblx0XHRcdGluc3RhbmNlLmh5ZHJhdGUgPSBmdW5jdGlvbihjdHgsIGgpIHtcblx0XHRcdFx0JHsgYmluZE1ldGhvZHNUb0NvbnRleHQoY29udGV4dC5kYXRhLm1ldGhvZHMpIH1cblx0XHRcdFx0cmV0dXJuICR7IGJsb2NrLnNvdXJjZS5oeWRyYXRlIH07XG5cdFx0XHR9XG5cdFx0YDtcblx0fVxuXG5cdHJldHVybiAgYFxuXHRcdCR7IGltcG9ydHMuam9pbignXFxuJykgfVxuXG5cdFx0JHsgbWFpbiB9XG5cblx0XHQkeyBjb2RlIH1cblxuXHRcdGV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuXHRgO1xuXG59XG4iXX0=