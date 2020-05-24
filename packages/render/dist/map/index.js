"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _sinuous = require("sinuous");

var _diff = require("./diff.js");

/**
 * Map over a list of unique items that create DOM nodes.
 *
 * No duplicates in the list of items is a hard requirement, the diffing
 * algorithm will not work with duplicate values. See `./unique.js`.
 *
 * @param  {Function} items - Function or observable that creates a list.
 * @param  {Function} expr
 * @param {boolean} [cleaning]
 * @return {DocumentFragment}
 */
function map(context, items, keyExpr, expr, beforeInit, parent) {
  if (beforeInit === void 0) {
    beforeInit = null;
  }

  if (parent === void 0) {
    parent = null;
  }

  var root = _sinuous.api.root,
      subscribe = _sinuous.api.subscribe,
      sample = _sinuous.api.sample,
      cleanup = _sinuous.api.cleanup; // Disable cleaning for templates by default.

  var cleaning = true; //!expr.$t;

  if (parent === null) {
    parent = _sinuous.api.h([]);
  }

  var endMark = _sinuous.api.add(parent, '');

  var disposers = new Map();
  var nodes = new Map();
  var toRemove = new Set();
  var defaultA = [];

  if (beforeInit) {
    beforeInit(function (item, key, n) {
      defaultA[key] = item;
      node(item, key, 1, n);
    });
  }

  var unsubscribe = subscribe(function (a) {
    var b = items();
    return sample(function () {
      toRemove.clear(); // Array.from to make a copy of the current list.

      var content = Array.from((0, _diff.diff)(endMark.parentNode, a || defaultA, b, keyExpr, node, endMark)); // for (var i = 0; i < context._children.length; i++) {
      // 	console.log(i, context._children[i].hid, context._children[i]._state.s1(), context._children[i]._props.pt)
      // }

      toRemove.forEach(dispose);
      return content;
    });
  });
  cleanup(unsubscribe);
  cleanup(disposeAll);

  function node(item, key, i, el) {
    if (el === void 0) {
      el = null;
    }

    if (item == null) return;
    var nodeKey = keyExpr(item, key);
    var n = nodes.get(nodeKey);

    if (i === 1) {
      toRemove.delete(item);

      if (!n) {
        n = cleaning ? root(function (dispose) {
          disposers.set(nodeKey, dispose);
          return el ? el : expr(item, key);
        }) : el ? el : expr(item, key);
        if (n.nodeType === 11) n = n.firstChild;
        nodes.set(nodeKey, n); // console.warn(`[create (${nodeKey})]`, n);

        if (n.$s) {
          n.$s.hook('mounted');
        } // context._children[key].hook('mounted');

      }
    } else if (i === -1) {
      // console.warn(`[remove (${nodeKey})]`, n, n.parentNode);
      if (n.$s) {
        n.$s.hook('unmounted');
      }

      toRemove.add(nodeKey); // context.removeChild(key);
    }

    return n;
  }

  function disposeAll() {
    disposers.forEach(function (d) {
      return d();
    });
    disposers.clear();
    nodes.clear();
    toRemove.clear();
  }

  function dispose(item) {
    var disposer = disposers.get(item);

    if (disposer) {
      disposer();
      disposers.delete(item);
    }

    nodes.delete(item);
  }

  return parent;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvaW5kZXguanMiXSwibmFtZXMiOlsibWFwIiwiY29udGV4dCIsIml0ZW1zIiwia2V5RXhwciIsImV4cHIiLCJiZWZvcmVJbml0IiwicGFyZW50Iiwicm9vdCIsImFwaSIsInN1YnNjcmliZSIsInNhbXBsZSIsImNsZWFudXAiLCJjbGVhbmluZyIsImgiLCJlbmRNYXJrIiwiYWRkIiwiZGlzcG9zZXJzIiwiTWFwIiwibm9kZXMiLCJ0b1JlbW92ZSIsIlNldCIsImRlZmF1bHRBIiwiaXRlbSIsImtleSIsIm4iLCJub2RlIiwidW5zdWJzY3JpYmUiLCJhIiwiYiIsImNsZWFyIiwiY29udGVudCIsIkFycmF5IiwiZnJvbSIsInBhcmVudE5vZGUiLCJmb3JFYWNoIiwiZGlzcG9zZSIsImRpc3Bvc2VBbGwiLCJpIiwiZWwiLCJub2RlS2V5IiwiZ2V0IiwiZGVsZXRlIiwic2V0Iiwibm9kZVR5cGUiLCJmaXJzdENoaWxkIiwiJHMiLCJob29rIiwiZCIsImRpc3Bvc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FBV08sU0FBU0EsR0FBVCxDQUFhQyxPQUFiLEVBQXNCQyxLQUF0QixFQUE2QkMsT0FBN0IsRUFBc0NDLElBQXRDLEVBQTRDQyxVQUE1QyxFQUErREMsTUFBL0QsRUFBOEU7QUFBQSxNQUFsQ0QsVUFBa0M7QUFBbENBLElBQUFBLFVBQWtDLEdBQXJCLElBQXFCO0FBQUE7O0FBQUEsTUFBZkMsTUFBZTtBQUFmQSxJQUFBQSxNQUFlLEdBQU4sSUFBTTtBQUFBOztBQUFBLE1BQzVFQyxJQUQ0RSxHQUN2Q0MsWUFEdUMsQ0FDNUVELElBRDRFO0FBQUEsTUFDdEVFLFNBRHNFLEdBQ3ZDRCxZQUR1QyxDQUN0RUMsU0FEc0U7QUFBQSxNQUMzREMsTUFEMkQsR0FDdkNGLFlBRHVDLENBQzNERSxNQUQyRDtBQUFBLE1BQ25EQyxPQURtRCxHQUN2Q0gsWUFEdUMsQ0FDbkRHLE9BRG1ELEVBR3BGOztB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QW5CLEVBVk8sQ0FZUDs7QUFDQSxZQUFHQSxDQUFDLENBQUNxQixFQUFMLEVBQVM7QUFDUnJCLFVBQUFBLENBQUMsQ0FBQ3FCLEVBQUYsQ0FBS0MsSUFBTCxDQUFVLFNBQVY7QUFDQSxTQWZNLENBZ0JQOztBQUNBO0FBQ0QsS0FyQkQsTUFxQk8sSUFBSVQsQ0FBQyxLQUFLLENBQUMsQ0FBWCxFQUFjO0FBQ3BCO0FBQ0EsVUFBR2IsQ0FBQyxDQUFDcUIsRUFBTCxFQUFTO0FBQ1JyQixRQUFBQSxDQUFDLENBQUNxQixFQUFGLENBQUtDLElBQUwsQ0FBVSxXQUFWO0FBQ0E7O0FBRUQzQixNQUFBQSxRQUFRLENBQUNKLEdBQVQsQ0FBYXdCLE9BQWIsRUFOb0IsQ0FPcEI7QUFDQTs7QUFFRCxXQUFPZixDQUFQO0FBQ0E7O0FBRUQsV0FBU1ksVUFBVCxHQUFzQjtBQUNyQnBCLElBQUFBLFNBQVMsQ0FBQ2tCLE9BQVYsQ0FBa0IsVUFBQWEsQ0FBQztBQUFBLGFBQUlBLENBQUMsRUFBTDtBQUFBLEtBQW5CO0FBQ0EvQixJQUFBQSxTQUFTLENBQUNhLEtBQVY7QUFDQVgsSUFBQUEsS0FBSyxDQUFDVyxLQUFOO0FBQ0FWLElBQUFBLFFBQVEsQ0FBQ1UsS0FBVDtBQUNBOztBQUVELFdBQVNNLE9BQVQsQ0FBaUJiLElBQWpCLEVBQXVCO0FBQ3RCLFFBQUkwQixRQUFRLEdBQUdoQyxTQUFTLENBQUN3QixHQUFWLENBQWNsQixJQUFkLENBQWY7O0FBQ0EsUUFBSTBCLFFBQUosRUFBYztBQUNiQSxNQUFBQSxRQUFRO0FBQ1JoQyxNQUFBQSxTQUFTLENBQUN5QixNQUFWLENBQWlCbkIsSUFBakI7QUFDQTs7QUFDREosSUFBQUEsS0FBSyxDQUFDdUIsTUFBTixDQUFhbkIsSUFBYjtBQUNBOztBQUVELFNBQU9oQixNQUFQO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcGkgfSBmcm9tICdzaW51b3VzJztcbmltcG9ydCB7IGRpZmYgfSBmcm9tICcuL2RpZmYuanMnO1xuXG4vKipcbiAqIE1hcCBvdmVyIGEgbGlzdCBvZiB1bmlxdWUgaXRlbXMgdGhhdCBjcmVhdGUgRE9NIG5vZGVzLlxuICpcbiAqIE5vIGR1cGxpY2F0ZXMgaW4gdGhlIGxpc3Qgb2YgaXRlbXMgaXMgYSBoYXJkIHJlcXVpcmVtZW50LCB0aGUgZGlmZmluZ1xuICogYWxnb3JpdGhtIHdpbGwgbm90IHdvcmsgd2l0aCBkdXBsaWNhdGUgdmFsdWVzLiBTZWUgYC4vdW5pcXVlLmpzYC5cbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gaXRlbXMgLSBGdW5jdGlvbiBvciBvYnNlcnZhYmxlIHRoYXQgY3JlYXRlcyBhIGxpc3QuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZXhwclxuICogQHBhcmFtIHtib29sZWFufSBbY2xlYW5pbmddXG4gKiBAcmV0dXJuIHtEb2N1bWVudEZyYWdtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwKGNvbnRleHQsIGl0ZW1zLCBrZXlFeHByLCBleHByLCBiZWZvcmVJbml0ID0gbnVsbCwgcGFyZW50ID0gbnVsbCkge1xuXHRjb25zdCB7IHJvb3QsIHN1YnNjcmliZSwgc2FtcGxlLCBjbGVhbnVwIH0gPSBhcGk7XG5cblx0Ly8gRGlzYWJsZSBjbGVhbmluZyBmb3IgdGVtcGxhdGVzIGJ5IGRlZmF1bHQuXG5cdGxldCBjbGVhbmluZyA9IHRydWU7Ly8hZXhwci4kdDtcblxuXHRpZihwYXJlbnQgPT09IG51bGwpIHtcblx0XHRwYXJlbnQgPSBhcGkuaChbXSk7XG5cdH1cblx0XG5cdGNvbnN0IGVuZE1hcmsgPSBhcGkuYWRkKHBhcmVudCwgJycpO1xuXG5cdGNvbnN0IGRpc3Bvc2VycyA9IG5ldyBNYXAoKTtcblx0Y29uc3Qgbm9kZXMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHRvUmVtb3ZlID0gbmV3IFNldCgpO1xuXHRjb25zdCBkZWZhdWx0QSA9IFtdO1xuXG5cdGlmKGJlZm9yZUluaXQpIHtcblx0XHRiZWZvcmVJbml0KChpdGVtLCBrZXksIG4pID0+IHtcblx0XHRcdGRlZmF1bHRBW2tleV0gPSBpdGVtO1xuXHRcdFx0bm9kZShpdGVtLCBrZXksIDEsIG4pO1xuXHRcdH0pXG5cdH1cblxuXHRjb25zdCB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShhID0+IHtcblx0XHRjb25zdCBiID0gaXRlbXMoKTtcblx0XHRyZXR1cm4gc2FtcGxlKCgpID0+IHtcblx0XHRcdHRvUmVtb3ZlLmNsZWFyKCk7XG5cblx0XHRcdC8vIEFycmF5LmZyb20gdG8gbWFrZSBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgbGlzdC5cblx0XHRcdGNvbnN0IGNvbnRlbnQgPSBBcnJheS5mcm9tKFxuXHRcdFx0XHRkaWZmKGVuZE1hcmsucGFyZW50Tm9kZSwgYSB8fCBkZWZhdWx0QSwgYiwga2V5RXhwciwgbm9kZSwgZW5kTWFyaylcblx0XHRcdCk7XG5cblx0XHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGV4dC5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coaSwgY29udGV4dC5fY2hpbGRyZW5baV0uaGlkLCBjb250ZXh0Ll9jaGlsZHJlbltpXS5fc3RhdGUuczEoKSwgY29udGV4dC5fY2hpbGRyZW5baV0uX3Byb3BzLnB0KVxuXHRcdFx0Ly8gfVxuXHRcdFx0dG9SZW1vdmUuZm9yRWFjaChkaXNwb3NlKTtcblx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdH0pO1xuXHR9KTtcblxuXHRjbGVhbnVwKHVuc3Vic2NyaWJlKTtcblx0Y2xlYW51cChkaXNwb3NlQWxsKTtcblxuXHRmdW5jdGlvbiBub2RlKGl0ZW0sIGtleSwgaSwgZWwgPSBudWxsKSB7XG5cdFx0aWYgKGl0ZW0gPT0gbnVsbCkgcmV0dXJuO1xuXG5cdFx0bGV0IG5vZGVLZXkgPSBrZXlFeHByKGl0ZW0sIGtleSk7XG5cblx0XHRsZXQgbiA9IG5vZGVzLmdldChub2RlS2V5KTtcblx0XHRpZiAoaSA9PT0gMSkge1xuXHRcdFx0dG9SZW1vdmUuZGVsZXRlKGl0ZW0pO1xuXG5cdFx0XHRpZiAoIW4pIHtcblx0XHRcdFx0biA9IGNsZWFuaW5nID9cblx0XHRcdFx0XHRyb290KGRpc3Bvc2UgPT4ge1xuXHRcdFx0XHRcdFx0ZGlzcG9zZXJzLnNldChub2RlS2V5LCBkaXNwb3NlKTtcblx0XHRcdFx0XHRcdHJldHVybiBlbCA/IGVsIDogZXhwcihpdGVtLCBrZXkpO1xuXHRcdFx0XHRcdH0pIDpcblx0XHRcdFx0XHQoZWwgPyBlbCA6IGV4cHIoaXRlbSwga2V5KSk7XG5cblx0XHRcdFx0aWYgKG4ubm9kZVR5cGUgPT09IDExKSBuID0gbi5maXJzdENoaWxkO1xuXG5cdFx0XHRcdG5vZGVzLnNldChub2RlS2V5LCBuKTtcblxuXHRcdFx0XHQvLyBjb25zb2xlLndhcm4oYFtjcmVhdGUgKCR7bm9kZUtleX0pXWAsIG4pO1xuXHRcdFx0XHRpZihuLiRzKSB7XG5cdFx0XHRcdFx0bi4kcy5ob29rKCdtb3VudGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gY29udGV4dC5fY2hpbGRyZW5ba2V5XS5ob29rKCdtb3VudGVkJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpID09PSAtMSkge1xuXHRcdFx0Ly8gY29uc29sZS53YXJuKGBbcmVtb3ZlICgke25vZGVLZXl9KV1gLCBuLCBuLnBhcmVudE5vZGUpO1xuXHRcdFx0aWYobi4kcykge1xuXHRcdFx0XHRuLiRzLmhvb2soJ3VubW91bnRlZCcpO1xuXHRcdFx0fVxuXG5cdFx0XHR0b1JlbW92ZS5hZGQobm9kZUtleSk7XG5cdFx0XHQvLyBjb250ZXh0LnJlbW92ZUNoaWxkKGtleSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG47XG5cdH1cblxuXHRmdW5jdGlvbiBkaXNwb3NlQWxsKCkge1xuXHRcdGRpc3Bvc2Vycy5mb3JFYWNoKGQgPT4gZCgpKTtcblx0XHRkaXNwb3NlcnMuY2xlYXIoKTtcblx0XHRub2Rlcy5jbGVhcigpO1xuXHRcdHRvUmVtb3ZlLmNsZWFyKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBkaXNwb3NlKGl0ZW0pIHtcblx0XHRsZXQgZGlzcG9zZXIgPSBkaXNwb3NlcnMuZ2V0KGl0ZW0pO1xuXHRcdGlmIChkaXNwb3Nlcikge1xuXHRcdFx0ZGlzcG9zZXIoKTtcblx0XHRcdGRpc3Bvc2Vycy5kZWxldGUoaXRlbSk7XG5cdFx0fVxuXHRcdG5vZGVzLmRlbGV0ZShpdGVtKTtcblx0fVxuXG5cdHJldHVybiBwYXJlbnQ7XG59XG4iXX0=