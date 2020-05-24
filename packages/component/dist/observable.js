"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeObseervable = makeObseervable;
exports.computed = computed;
exports.observable = observable;

var _observable = require("sinuous/observable");

function makeObseervable(fn) {
  fn._observable = true;
  return fn;
}

function computed(v, binding) {
  if (binding === void 0) {
    binding = false;
  }

  var d;

  if (binding) {
    d = (0, _observable.computed)(v.bind(this));
  } else {
    d = (0, _observable.computed)(v);
  }

  makeObseervable(d);
  return d;
}

function observable(v, binding) {
  if (binding === void 0) {
    binding = false;
  }

  // let obs = null;
  // let index = 0;
  // let data = (v) => {
  // 	console.log(seed, v, index)
  // 	if(typeof v === 'undefined') {
  // 		if(index === 0) {
  // 			index++;
  // 			return seed;
  // 		}
  // 		return obs();
  // 	}
  // 	// if(index === 0) {
  // 	// 	index++;
  // 	// 	return v;
  // 	// }
  // 	// if(obs === null) {
  // 	// 	obs = sinuousObservable(v);
  // 	// }
  // }
  var d = (0, _observable.observable)(v);
  makeObseervable(d);
  return d;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9vYnNlcnZhYmxlLmpzIl0sIm5hbWVzIjpbIm1ha2VPYnNlZXJ2YWJsZSIsImZuIiwiX29ic2VydmFibGUiLCJjb21wdXRlZCIsInYiLCJiaW5kaW5nIiwiZCIsImJpbmQiLCJvYnNlcnZhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFTyxTQUFTQSxlQUFULENBQXlCQyxFQUF6QixFQUNQO0FBQ0NBLEVBQUFBLEVBQUUsQ0FBQ0MsV0FBSCxHQUFpQixJQUFqQjtBQUNBLFNBQU9ELEVBQVA7QUFDQTs7QUFFTSxTQUFTRSxRQUFULENBQWtCQyxDQUFsQixFQUFxQkMsT0FBckIsRUFBc0M7QUFBQSxNQUFqQkEsT0FBaUI7QUFBakJBLElBQUFBLE9BQWlCLEdBQVAsS0FBTztBQUFBOztBQUU1QyxNQUFJQyxDQUFKOztBQUVBLE1BQUdELE9BQUgsRUFBWTtBQUNYQyxJQUFBQSxDQUFDLEdBQUcsMEJBQWdCRixDQUFDLENBQUNHLElBQUYsQ0FBTyxJQUFQLENBQWhCLENBQUo7QUFDQSxHQUZELE1BRU87QUFDTkQsSUFBQUEsQ0FBQyxHQUFHLDBCQUFnQkYsQ0FBaEIsQ0FBSjtBQUNBOztBQUVESixFQUFBQSxlQUFlLENBQUNNLENBQUQsQ0FBZjtBQUVBLFNBQU9BLENBQVA7QUFDQTs7QUFFTSxTQUFTRSxVQUFULENBQW9CSixDQUFwQixFQUF1QkMsT0FBdkIsRUFDUDtBQUFBLE1BRDhCQSxPQUM5QjtBQUQ4QkEsSUFBQUEsT0FDOUIsR0FEd0MsS0FDeEM7QUFBQTs7QUFDQztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQUlDLENBQUMsR0FBRyw0QkFBa0JGLENBQWxCLENBQVI7QUFHQUosRUFBQUEsZUFBZSxDQUFDTSxDQUFELENBQWY7QUFFQSxTQUFPQSxDQUFQO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYnNlcnZhYmxlIGFzIHNpbnVvdXNPYnNlcnZhYmxlLCBjb21wdXRlZCBhcyBzaW51b3VzQ29tcHV0ZWQgfSBmcm9tICdzaW51b3VzL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU9ic2VlcnZhYmxlKGZuKVxue1xuXHRmbi5fb2JzZXJ2YWJsZSA9IHRydWU7XG5cdHJldHVybiBmbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVkKHYsIGJpbmRpbmcgPSBmYWxzZSkge1xuXG5cdGxldCBkO1xuXHRcblx0aWYoYmluZGluZykge1xuXHRcdGQgPSBzaW51b3VzQ29tcHV0ZWQodi5iaW5kKHRoaXMpKTtcblx0fSBlbHNlIHtcblx0XHRkID0gc2ludW91c0NvbXB1dGVkKHYpO1xuXHR9XG5cblx0bWFrZU9ic2VlcnZhYmxlKGQpO1xuXG5cdHJldHVybiBkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2YWJsZSh2LCBiaW5kaW5nID0gZmFsc2UpXG57XG5cdC8vIGxldCBvYnMgPSBudWxsO1xuXHQvLyBsZXQgaW5kZXggPSAwO1xuXG5cdC8vIGxldCBkYXRhID0gKHYpID0+IHtcblx0Ly8gXHRjb25zb2xlLmxvZyhzZWVkLCB2LCBpbmRleClcblx0Ly8gXHRpZih0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0Ly8gXHRcdGlmKGluZGV4ID09PSAwKSB7XG5cdC8vIFx0XHRcdGluZGV4Kys7XG5cdC8vIFx0XHRcdHJldHVybiBzZWVkO1xuXHQvLyBcdFx0fVxuXG5cdC8vIFx0XHRyZXR1cm4gb2JzKCk7XG5cdC8vIFx0fVxuXG5cdC8vIFx0Ly8gaWYoaW5kZXggPT09IDApIHtcblx0Ly8gXHQvLyBcdGluZGV4Kys7XG5cdC8vIFx0Ly8gXHRyZXR1cm4gdjtcblx0Ly8gXHQvLyB9XG5cblx0Ly8gXHQvLyBpZihvYnMgPT09IG51bGwpIHtcblx0Ly8gXHQvLyBcdG9icyA9IHNpbnVvdXNPYnNlcnZhYmxlKHYpO1xuXHQvLyBcdC8vIH1cblx0Ly8gfVxuXG5cdGxldCBkID0gc2ludW91c09ic2VydmFibGUodik7XG5cblx0XG5cdG1ha2VPYnNlZXJ2YWJsZShkKTtcblxuXHRyZXR1cm4gZDtcbn1cbiJdfQ==