"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = h;

var _sinuous = require("sinuous");

var _observable = require("sinuous/observable");

var _ = require("./");

var _i = _interopRequireDefault(require("@siph/i"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerChildren(parent, child) {
  parent.addChildren(child);

  if (child.setParent) {
    child.setParent(parent);
  }
}

function h(el, opts, children) {
  if (opts === void 0) {
    opts = {};
  }

  if (children === void 0) {
    children = [];
  }

  el = el.toLowerCase(); // el = computed(() => (typeof el === 'function' ? el : el));
  // console.log('[ FF ]', el, this)

  var dynamicAttrs = false;
  var readyOptions = (0, _.options)(opts); // If HTML tag render

  if (!_i.default.hasComponent(el)) {
    return (0, _sinuous.h)(el, readyOptions, children);
  }

  var component = _i.default.getComponent(el); // console.log(this)


  if (this) {
    this.addChildren(component);
  }

  if (component._functional) {
    return component.render({
      options: opts,
      _slots: readyOptions.$slots
    });
  } // if(typeof opts.props !== 'undefined') {


  component.passProps(opts.props); // }

  for (var key in opts.$slots) {
    component.passSlots(key, opts.$slots[key]);
  }

  component.passOptions(opts);
  var node = component.render();
  node.$s = component;
  return node;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oLmpzIl0sIm5hbWVzIjpbInJlZ2lzdGVyQ2hpbGRyZW4iLCJwYXJlbnQiLCJjaGlsZCIsImFkZENoaWxkcmVuIiwic2V0UGFyZW50IiwiaCIsImVsIiwib3B0cyIsImNoaWxkcmVuIiwidG9Mb3dlckNhc2UiLCJkeW5hbWljQXR0cnMiLCJyZWFkeU9wdGlvbnMiLCJTaW51b3VzIiwiaGFzQ29tcG9uZW50IiwiY29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwiX2Z1bmN0aW9uYWwiLCJyZW5kZXIiLCJvcHRpb25zIiwiX3Nsb3RzIiwiJHNsb3RzIiwicGFzc1Byb3BzIiwicHJvcHMiLCJrZXkiLCJwYXNzU2xvdHMiLCJwYXNzT3B0aW9ucyIsIm5vZGUiLCIkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBR0EsU0FBU0EsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDQyxLQUFsQyxFQUNBO0FBQ0NELEVBQUFBLE1BQU0sQ0FBQ0UsV0FBUCxDQUFtQkQsS0FBbkI7O0FBQ0EsTUFBR0EsS0FBSyxDQUFDRSxTQUFULEVBQW9CO0FBQ25CRixJQUFBQSxLQUFLLENBQUNFLFNBQU4sQ0FBZ0JILE1BQWhCO0FBQ0E7QUFDRDs7QUFFYyxTQUFTSSxDQUFULENBQVdDLEVBQVgsRUFBZUMsSUFBZixFQUEwQkMsUUFBMUIsRUFDZjtBQUFBLE1BRDhCRCxJQUM5QjtBQUQ4QkEsSUFBQUEsSUFDOUIsR0FEcUMsRUFDckM7QUFBQTs7QUFBQSxNQUR5Q0MsUUFDekM7QUFEeUNBLElBQUFBLFFBQ3pDLEdBRG9ELEVBQ3BEO0FBQUE7O0FBQ0NGLEVBQUFBLEVBQUUsR0FBR0EsRUFBRSxDQUFDRyxXQUFILEVBQUwsQ0FERCxDQUVDO0FBRUE7O0FBQ0EsTUFBSUMsWUFBWSxHQUFHLEtBQW5CO0FBRUEsTUFBSUMsWUFBWSxHQUFHLGVBQVFKLElBQVIsQ0FBbkIsQ0FQRCxDQVFDOztBQUNBLE1BQUcsQ0FBQ0ssV0FBUUMsWUFBUixDQUFxQlAsRUFBckIsQ0FBSixFQUE4QjtBQUM3QixXQUFPLGdCQUFHQSxFQUFILEVBQU9LLFlBQVAsRUFBcUJILFFBQXJCLENBQVA7QUFDQTs7QUFFRCxNQUFJTSxTQUFTLEdBQUdGLFdBQVFHLFlBQVIsQ0FBcUJULEVBQXJCLENBQWhCLENBYkQsQ0FlQzs7O0FBQ0EsTUFBRyxJQUFILEVBQVM7QUFDUixTQUFLSCxXQUFMLENBQWlCVyxTQUFqQjtBQUNBOztBQUVELE1BQUdBLFNBQVMsQ0FBQ0UsV0FBYixFQUEwQjtBQUN6QixXQUFPRixTQUFTLENBQUNHLE1BQVYsQ0FBaUI7QUFDdkJDLE1BQUFBLE9BQU8sRUFBRVgsSUFEYztBQUV2QlksTUFBQUEsTUFBTSxFQUFFUixZQUFZLENBQUNTO0FBRkUsS0FBakIsQ0FBUDtBQUlBLEdBekJGLENBMkJDOzs7QUFDQU4sRUFBQUEsU0FBUyxDQUFDTyxTQUFWLENBQW9CZCxJQUFJLENBQUNlLEtBQXpCLEVBNUJELENBNkJDOztBQUVBLE9BQUksSUFBSUMsR0FBUixJQUFlaEIsSUFBSSxDQUFDYSxNQUFwQixFQUE0QjtBQUMzQk4sSUFBQUEsU0FBUyxDQUFDVSxTQUFWLENBQW9CRCxHQUFwQixFQUF5QmhCLElBQUksQ0FBQ2EsTUFBTCxDQUFZRyxHQUFaLENBQXpCO0FBQ0E7O0FBRURULEVBQUFBLFNBQVMsQ0FBQ1csV0FBVixDQUFzQmxCLElBQXRCO0FBRUEsTUFBSW1CLElBQUksR0FBR1osU0FBUyxDQUFDRyxNQUFWLEVBQVg7QUFFQVMsRUFBQUEsSUFBSSxDQUFDQyxFQUFMLEdBQVViLFNBQVY7QUFFQSxTQUFPWSxJQUFQO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoIGFzIGhzIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlIH0gZnJvbSAnc2ludW91cy9vYnNlcnZhYmxlJztcbmltcG9ydCB7IG9wdGlvbnMsICB9IGZyb20gJy4vJztcbmltcG9ydCBTaW51b3VzIGZyb20gJ0BzaXBoL2knO1xuXG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2hpbGRyZW4ocGFyZW50LCBjaGlsZClcbntcblx0cGFyZW50LmFkZENoaWxkcmVuKGNoaWxkKTtcblx0aWYoY2hpbGQuc2V0UGFyZW50KSB7XG5cdFx0Y2hpbGQuc2V0UGFyZW50KHBhcmVudCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaChlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxue1xuXHRlbCA9IGVsLnRvTG93ZXJDYXNlKCk7XG5cdC8vIGVsID0gY29tcHV0ZWQoKCkgPT4gKHR5cGVvZiBlbCA9PT0gJ2Z1bmN0aW9uJyA/IGVsIDogZWwpKTtcblxuXHQvLyBjb25zb2xlLmxvZygnWyBGRiBdJywgZWwsIHRoaXMpXG5cdGxldCBkeW5hbWljQXR0cnMgPSBmYWxzZTtcblxuXHRsZXQgcmVhZHlPcHRpb25zID0gb3B0aW9ucyhvcHRzKTtcblx0Ly8gSWYgSFRNTCB0YWcgcmVuZGVyXG5cdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcblx0XHRyZXR1cm4gaHMoZWwsIHJlYWR5T3B0aW9ucywgY2hpbGRyZW4pO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0Q29tcG9uZW50KGVsKTtcblxuXHQvLyBjb25zb2xlLmxvZyh0aGlzKVxuXHRpZih0aGlzKSB7XG5cdFx0dGhpcy5hZGRDaGlsZHJlbihjb21wb25lbnQpO1xuXHR9XG5cblx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudC5yZW5kZXIoe1xuXHRcdFx0b3B0aW9uczogb3B0cyxcblx0XHRcdF9zbG90czogcmVhZHlPcHRpb25zLiRzbG90cyxcblx0XHR9KTtcblx0fVxuXG5cdC8vIGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuXHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHQvLyB9XG5cblx0Zm9yKGxldCBrZXkgaW4gb3B0cy4kc2xvdHMpIHtcblx0XHRjb21wb25lbnQucGFzc1Nsb3RzKGtleSwgb3B0cy4kc2xvdHNba2V5XSk7XHRcblx0fVxuXG5cdGNvbXBvbmVudC5wYXNzT3B0aW9ucyhvcHRzKTtcblxuXHRsZXQgbm9kZSA9IGNvbXBvbmVudC5yZW5kZXIoKTtcblxuXHRub2RlLiRzID0gY29tcG9uZW50O1xuXG5cdHJldHVybiBub2RlO1xufVxuIl19