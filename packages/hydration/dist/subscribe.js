"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = subscribe;

var _observable = require("sinuous/observable");

function subscribe(value, fn, skipFirst) {
  if (skipFirst === void 0) {
    skipFirst = true;
  }

  if (typeof value !== 'function') {
    return fn(value);
  }

  (0, _observable.subscribe)(function () {
    var v = value(); // console.log(skipFirst, v, fn)

    if (skipFirst) {
      skipFirst = false;
      return false;
    }

    fn(v);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzY3JpYmUuanMiXSwibmFtZXMiOlsic3Vic2NyaWJlIiwidmFsdWUiLCJmbiIsInNraXBGaXJzdCIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFTyxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQkMsRUFBMUIsRUFBOEJDLFNBQTlCLEVBQ1A7QUFBQSxNQURxQ0EsU0FDckM7QUFEcUNBLElBQUFBLFNBQ3JDLEdBRGlELElBQ2pEO0FBQUE7O0FBQ0MsTUFBRyxPQUFPRixLQUFQLEtBQWlCLFVBQXBCLEVBQWdDO0FBQy9CLFdBQU9DLEVBQUUsQ0FBQ0QsS0FBRCxDQUFUO0FBQ0E7O0FBRUQsNkJBQWlCLFlBQU07QUFDdEIsUUFBSUcsQ0FBQyxHQUFHSCxLQUFLLEVBQWIsQ0FEc0IsQ0FHdEI7O0FBRUEsUUFBR0UsU0FBSCxFQUFjO0FBQ2JBLE1BQUFBLFNBQVMsR0FBRyxLQUFaO0FBQ0EsYUFBTyxLQUFQO0FBQ0E7O0FBSURELElBQUFBLEVBQUUsQ0FBQ0UsQ0FBRCxDQUFGO0FBQ0EsR0FiRDtBQWNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3Vic2NyaWJlIGFzIHNpbnVvdXNTdWJzY3JpYmUgfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlKHZhbHVlLCBmbiwgc2tpcEZpcnN0ID0gdHJ1ZSlcbntcblx0aWYodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGZuKHZhbHVlKTtcblx0fVxuXG5cdHNpbnVvdXNTdWJzY3JpYmUoKCkgPT4ge1xuXHRcdGxldCB2ID0gdmFsdWUoKTtcblxuXHRcdC8vIGNvbnNvbGUubG9nKHNraXBGaXJzdCwgdiwgZm4pXG5cblx0XHRpZihza2lwRmlyc3QpIHtcblx0XHRcdHNraXBGaXJzdCA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXG5cblx0XHRmbih2KTtcblx0fSk7XG59XG4iXX0=