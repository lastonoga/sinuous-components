"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseName = parseName;

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces

    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

function parseName(resourcePath, options) {
  var fn = options.parseName || function () {
    return '';
  };

  return fn(resourcePath);
} // let componentPath = resourcePath
//        .split(componentsPath)
//        .join('')
//        .replace(/\.vue/, '')
//        .replace(/(\s|\/)/, '');
//    return camelize(componentPath);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9uYW1lLmpzIl0sIm5hbWVzIjpbImNhbWVsaXplIiwic3RyIiwicmVwbGFjZSIsIm1hdGNoIiwiaW5kZXgiLCJ0b0xvd2VyQ2FzZSIsInRvVXBwZXJDYXNlIiwicGFyc2VOYW1lIiwicmVzb3VyY2VQYXRoIiwib3B0aW9ucyIsImZuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsU0FBU0EsUUFBVCxDQUFrQkMsR0FBbEIsRUFDQTtBQUNJLFNBQU9BLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLHlCQUFaLEVBQXVDLFVBQVNDLEtBQVQsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQ2pFLFFBQUksQ0FBQ0QsS0FBRCxLQUFXLENBQWYsRUFBa0IsT0FBTyxFQUFQLENBRCtDLENBQ3BDOztBQUM3QixXQUFPQyxLQUFLLEtBQUssQ0FBVixHQUFjRCxLQUFLLENBQUNFLFdBQU4sRUFBZCxHQUFvQ0YsS0FBSyxDQUFDRyxXQUFOLEVBQTNDO0FBQ0gsR0FITSxDQUFQO0FBSUg7O0FBRU0sU0FBU0MsU0FBVCxDQUFtQkMsWUFBbkIsRUFBaUNDLE9BQWpDLEVBQ1A7QUFDQyxNQUFJQyxFQUFFLEdBQUdELE9BQU8sQ0FBQ0YsU0FBUixJQUFxQixZQUFXO0FBQUUsV0FBTyxFQUFQO0FBQVcsR0FBdEQ7O0FBRUcsU0FBT0csRUFBRSxDQUFDRixZQUFELENBQVQ7QUFDSCxDLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2FtZWxpemUoc3RyKVxue1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKD86Xlxcd3xbQS1aXXxcXGJcXHd8XFxzKykvZywgZnVuY3Rpb24obWF0Y2gsIGluZGV4KSB7XG4gICAgICAgIGlmICgrbWF0Y2ggPT09IDApIHJldHVybiBcIlwiOyAvLyBvciBpZiAoL1xccysvLnRlc3QobWF0Y2gpKSBmb3Igd2hpdGUgc3BhY2VzXG4gICAgICAgIHJldHVybiBpbmRleCA9PT0gMCA/IG1hdGNoLnRvTG93ZXJDYXNlKCkgOiBtYXRjaC50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOYW1lKHJlc291cmNlUGF0aCwgb3B0aW9ucylcbntcblx0bGV0IGZuID0gb3B0aW9ucy5wYXJzZU5hbWUgfHwgZnVuY3Rpb24oKSB7IHJldHVybiAnJyB9O1xuXG4gICAgcmV0dXJuIGZuKHJlc291cmNlUGF0aCk7XG59XG5cblxuIC8vIGxldCBjb21wb25lbnRQYXRoID0gcmVzb3VyY2VQYXRoXG4gLy8gICAgICAgIC5zcGxpdChjb21wb25lbnRzUGF0aClcbiAvLyAgICAgICAgLmpvaW4oJycpXG4gLy8gICAgICAgIC5yZXBsYWNlKC9cXC52dWUvLCAnJylcbiAvLyAgICAgICAgLnJlcGxhY2UoLyhcXHN8XFwvKS8sICcnKTtcblxuIC8vICAgIHJldHVybiBjYW1lbGl6ZShjb21wb25lbnRQYXRoKTtcbiJdfQ==