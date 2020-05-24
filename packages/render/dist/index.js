"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function get() {
    return _map.map;
  }
});

var _lazy = require("@siph/lazy");

var _map = require("./map");

function render(component, layout, timeBenchmark, callback) {
  if (timeBenchmark === void 0) {
    timeBenchmark = function timeBenchmark() {};
  }

  if (callback === void 0) {
    callback = null;
  }

  layout.innerHTML = '';
  (0, _lazy.loadComponent)(component, function (instance) {
    timeBenchmark('Render');
    layout.append(instance.render());
    instance.hook('mounted');

    if (callback) {
      callback(instance);
    }

    timeBenchmark('Render');
    return instance;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJjb21wb25lbnQiLCJsYXlvdXQiLCJ0aW1lQmVuY2htYXJrIiwiY2FsbGJhY2siLCJpbm5lckhUTUwiLCJpbnN0YW5jZSIsImFwcGVuZCIsImhvb2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxTQUFoQixFQUEyQkMsTUFBM0IsRUFBbUNDLGFBQW5DLEVBQTZEQyxRQUE3RCxFQUE4RTtBQUFBLE1BQTNDRCxhQUEyQztBQUEzQ0EsSUFBQUEsYUFBMkMsR0FBM0IseUJBQU0sQ0FBRSxDQUFtQjtBQUFBOztBQUFBLE1BQWpCQyxRQUFpQjtBQUFqQkEsSUFBQUEsUUFBaUIsR0FBTixJQUFNO0FBQUE7O0FBRTFFRixFQUFBQSxNQUFNLENBQUNHLFNBQVAsR0FBbUIsRUFBbkI7QUFFQSwyQkFBY0osU0FBZCxFQUF5QixVQUFDSyxRQUFELEVBQWM7QUFFdENILElBQUFBLGFBQWEsQ0FBQyxRQUFELENBQWI7QUFFSEQsSUFBQUEsTUFBTSxDQUFDSyxNQUFQLENBQWNELFFBQVEsQ0FBQ04sTUFBVCxFQUFkO0FBQ0FNLElBQUFBLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLFNBQWQ7O0FBRUEsUUFBR0osUUFBSCxFQUFhO0FBQ1pBLE1BQUFBLFFBQVEsQ0FBQ0UsUUFBRCxDQUFSO0FBQ0E7O0FBRURILElBQUFBLGFBQWEsQ0FBQyxRQUFELENBQWI7QUFFQSxXQUFPRyxRQUFQO0FBQ0EsR0FkRTtBQWVIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJ0BzaXBoL2xhenknO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9tYXAnO1xuXG5mdW5jdGlvbiByZW5kZXIoY29tcG9uZW50LCBsYXlvdXQsIHRpbWVCZW5jaG1hcmsgPSAoKSA9PiB7fSwgY2FsbGJhY2sgPSBudWxsKSB7XG5cbiAgICBsYXlvdXQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgKGluc3RhbmNlKSA9PiB7XG5cbiAgICBcdHRpbWVCZW5jaG1hcmsoJ1JlbmRlcicpO1xuXG5cdFx0bGF5b3V0LmFwcGVuZChpbnN0YW5jZS5yZW5kZXIoKSk7XG5cdFx0aW5zdGFuY2UuaG9vaygnbW91bnRlZCcpO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdGNhbGxiYWNrKGluc3RhbmNlKTtcblx0XHR9XG5cblx0XHR0aW1lQmVuY2htYXJrKCdSZW5kZXInKTtcblxuXHRcdHJldHVybiBpbnN0YW5jZTtcblx0fSk7XG59XG5cbmV4cG9ydCB7IHJlbmRlciwgbWFwIH07XG4iXX0=