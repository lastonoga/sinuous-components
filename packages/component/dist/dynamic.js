"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dynamic;

var _sinuous = require("sinuous");

function dynamic(h, tag, opts, children) {
  return function () {
    var el = tag();
    return h(el, opts, children);
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9keW5hbWljLmpzIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJoIiwidGFnIiwib3B0cyIsImNoaWxkcmVuIiwiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxDQUFqQixFQUFvQkMsR0FBcEIsRUFBeUJDLElBQXpCLEVBQStCQyxRQUEvQixFQUNmO0FBQ0MsU0FBTyxZQUFNO0FBQ1osUUFBSUMsRUFBRSxHQUFHSCxHQUFHLEVBQVo7QUFDQSxXQUFPRCxDQUFDLENBQUNJLEVBQUQsRUFBS0YsSUFBTCxFQUFXQyxRQUFYLENBQVI7QUFDQSxHQUhEO0FBS0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBocywgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWMoaCwgdGFnLCBvcHRzLCBjaGlsZHJlbilcbntcblx0cmV0dXJuICgpID0+IHtcblx0XHRsZXQgZWwgPSB0YWcoKTtcblx0XHRyZXR1cm4gaChlbCwgb3B0cywgY2hpbGRyZW4pO1xuXHR9O1xuXG59XG4iXX0=