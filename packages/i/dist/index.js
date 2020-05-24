"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// import { register } from './components';
var SinuousComponents = {};

function getComponentInstance(component) {
  if (component._functional) {
    return component;
  }

  return new component();
}

var Sinuous = /*#__PURE__*/function () {
  function Sinuous() {
    this.components = [];
    this.last_hid = 0;
  }
  /**
   * HID
   */


  var _proto = Sinuous.prototype;

  _proto.createHID = function createHID(index) {
    this.last_hid = this.last_hid + 1 + index;
    return this.last_hid;
  };

  _proto.clearHID = function clearHID() {
    this.last_hid = 0;
  }
  /**
   * Components
   * @type {[type]}
   */
  ;

  _proto.registerComponent = function registerComponent(name, component) {
    if (component === void 0) {
      component = null;
    }

    if (component == null) {
      component = name;
    }

    name = component.prototype._componentName.toLowerCase();
    this.components[name] = component;
  };

  _proto.hasComponent = function hasComponent(component) {
    return !(typeof this.components[component] === 'undefined');
  };

  _proto.getHydrateComponent = function getHydrateComponent(component, opts) {
    if (!this.hasComponent(component)) {
      throw new Error("There is no " + component + " component registered");
    } // console.log(this.components[component].prototype)


    if (this.components[component].prototype._shouldHydarate || opts.$slots) {
      return getComponentInstance(this.components[component]);
    } else {
      return null;
    }
  };

  _proto.getComponent = function getComponent(component) {
    if (!this.hasComponent(component)) {
      throw new Error("There is no " + component + " component registered");
    }

    return getComponentInstance(this.components[component]);
  };

  return Sinuous;
}();

var _default = new Sinuous();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTaW51b3VzQ29tcG9uZW50cyIsImdldENvbXBvbmVudEluc3RhbmNlIiwiY29tcG9uZW50IiwiX2Z1bmN0aW9uYWwiLCJTaW51b3VzIiwiY29tcG9uZW50cyIsImxhc3RfaGlkIiwiY3JlYXRlSElEIiwiaW5kZXgiLCJjbGVhckhJRCIsInJlZ2lzdGVyQ29tcG9uZW50IiwibmFtZSIsInByb3RvdHlwZSIsIl9jb21wb25lbnROYW1lIiwidG9Mb3dlckNhc2UiLCJoYXNDb21wb25lbnQiLCJnZXRIeWRyYXRlQ29tcG9uZW50Iiwib3B0cyIsIkVycm9yIiwiX3Nob3VsZEh5ZGFyYXRlIiwiJHNsb3RzIiwiZ2V0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLElBQUlBLGlCQUFpQixHQUFHLEVBQXhCOztBQUVBLFNBQVNDLG9CQUFULENBQThCQyxTQUE5QixFQUNBO0FBQ0MsTUFBR0EsU0FBUyxDQUFDQyxXQUFiLEVBQTBCO0FBQ3pCLFdBQU9ELFNBQVA7QUFDQTs7QUFFRCxTQUFPLElBQUlBLFNBQUosRUFBUDtBQUNBOztJQUdLRSxPO0FBR0wscUJBQ0E7QUFDQyxTQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBO0FBRUQ7Ozs7Ozs7U0FHQUMsUyxHQUFBLG1CQUFVQyxLQUFWLEVBQ0E7QUFDQyxTQUFLRixRQUFMLEdBQWdCLEtBQUtBLFFBQUwsR0FBZ0IsQ0FBaEIsR0FBb0JFLEtBQXBDO0FBQ0EsV0FBTyxLQUFLRixRQUFaO0FBQ0EsRzs7U0FFREcsUSxHQUFBLG9CQUNBO0FBQ0MsU0FBS0gsUUFBTCxHQUFnQixDQUFoQjtBQUNBO0FBQ0Q7Ozs7OztTQUlBSSxpQixHQUFBLDJCQUFrQkMsSUFBbEIsRUFBd0JULFNBQXhCLEVBQ0E7QUFBQSxRQUR3QkEsU0FDeEI7QUFEd0JBLE1BQUFBLFNBQ3hCLEdBRG9DLElBQ3BDO0FBQUE7O0FBQ0MsUUFBR0EsU0FBUyxJQUFJLElBQWhCLEVBQXNCO0FBQ3JCQSxNQUFBQSxTQUFTLEdBQUdTLElBQVo7QUFDQTs7QUFFREEsSUFBQUEsSUFBSSxHQUFHVCxTQUFTLENBQUNVLFNBQVYsQ0FBb0JDLGNBQXBCLENBQW1DQyxXQUFuQyxFQUFQO0FBRUEsU0FBS1QsVUFBTCxDQUFnQk0sSUFBaEIsSUFBd0JULFNBQXhCO0FBQ0EsRzs7U0FFRGEsWSxHQUFBLHNCQUFhYixTQUFiLEVBQ0E7QUFDQyxXQUFPLEVBQUUsT0FBTyxLQUFLRyxVQUFMLENBQWdCSCxTQUFoQixDQUFQLEtBQXNDLFdBQXhDLENBQVA7QUFDQSxHOztTQUVEYyxtQixHQUFBLDZCQUFvQmQsU0FBcEIsRUFBK0JlLElBQS9CLEVBQ0E7QUFDQyxRQUFHLENBQUMsS0FBS0YsWUFBTCxDQUFrQmIsU0FBbEIsQ0FBSixFQUFrQztBQUNqQyxZQUFNLElBQUlnQixLQUFKLGtCQUEwQmhCLFNBQTFCLDJCQUFOO0FBQ0EsS0FIRixDQUtDOzs7QUFDQSxRQUFHLEtBQUtHLFVBQUwsQ0FBZ0JILFNBQWhCLEVBQTJCVSxTQUEzQixDQUFxQ08sZUFBckMsSUFBd0RGLElBQUksQ0FBQ0csTUFBaEUsRUFBd0U7QUFDdkUsYUFBT25CLG9CQUFvQixDQUFDLEtBQUtJLFVBQUwsQ0FBZ0JILFNBQWhCLENBQUQsQ0FBM0I7QUFDQSxLQUZELE1BRU87QUFDTixhQUFPLElBQVA7QUFDQTtBQUNELEc7O1NBRURtQixZLEdBQUEsc0JBQWFuQixTQUFiLEVBQ0E7QUFDQyxRQUFHLENBQUMsS0FBS2EsWUFBTCxDQUFrQmIsU0FBbEIsQ0FBSixFQUFrQztBQUNqQyxZQUFNLElBQUlnQixLQUFKLGtCQUEwQmhCLFNBQTFCLDJCQUFOO0FBQ0E7O0FBRUQsV0FBT0Qsb0JBQW9CLENBQUMsS0FBS0ksVUFBTCxDQUFnQkgsU0FBaEIsQ0FBRCxDQUEzQjtBQUNBLEc7Ozs7O2VBTWEsSUFBSUUsT0FBSixFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xudmFyIFNpbnVvdXNDb21wb25lbnRzID0ge307XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudEluc3RhbmNlKGNvbXBvbmVudClcbntcblx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudDtcblx0fVxuXG5cdHJldHVybiBuZXcgY29tcG9uZW50O1xufVxuXG5cbmNsYXNzIFNpbnVvdXMgXG57XG5cblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0dGhpcy5jb21wb25lbnRzID0gW107XG5cdFx0dGhpcy5sYXN0X2hpZCA9IDA7XG5cdH1cblxuXHQvKipcblx0ICogSElEXG5cdCAqL1xuXHRjcmVhdGVISUQoaW5kZXgpXG5cdHtcblx0XHR0aGlzLmxhc3RfaGlkID0gdGhpcy5sYXN0X2hpZCArIDEgKyBpbmRleDtcblx0XHRyZXR1cm4gdGhpcy5sYXN0X2hpZDtcblx0fVxuXG5cdGNsZWFySElEKClcblx0e1xuXHRcdHRoaXMubGFzdF9oaWQgPSAwO1xuXHR9XG5cdC8qKlxuXHQgKiBDb21wb25lbnRzXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXHRyZWdpc3RlckNvbXBvbmVudChuYW1lLCBjb21wb25lbnQgPSBudWxsKVxuXHR7XG5cdFx0aWYoY29tcG9uZW50ID09IG51bGwpIHtcblx0XHRcdGNvbXBvbmVudCA9IG5hbWU7XG5cdFx0fVxuXG5cdFx0bmFtZSA9IGNvbXBvbmVudC5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdHRoaXMuY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcblx0fVxuXG5cdGhhc0NvbXBvbmVudChjb21wb25lbnQpXG5cdHtcblx0XHRyZXR1cm4gISh0eXBlb2YgdGhpcy5jb21wb25lbnRzW2NvbXBvbmVudF0gPT09ICd1bmRlZmluZWQnKTtcblx0fVxuXG5cdGdldEh5ZHJhdGVDb21wb25lbnQoY29tcG9uZW50LCBvcHRzKVxuXHR7XG5cdFx0aWYoIXRoaXMuaGFzQ29tcG9uZW50KGNvbXBvbmVudCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gJHsgY29tcG9uZW50IH0gY29tcG9uZW50IHJlZ2lzdGVyZWRgKTtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmNvbXBvbmVudHNbY29tcG9uZW50XS5wcm90b3R5cGUpXG5cdFx0aWYodGhpcy5jb21wb25lbnRzW2NvbXBvbmVudF0ucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSB8fCBvcHRzLiRzbG90cykge1xuXHRcdFx0cmV0dXJuIGdldENvbXBvbmVudEluc3RhbmNlKHRoaXMuY29tcG9uZW50c1tjb21wb25lbnRdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q29tcG9uZW50KGNvbXBvbmVudClcblx0e1xuXHRcdGlmKCF0aGlzLmhhc0NvbXBvbmVudChjb21wb25lbnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vICR7IGNvbXBvbmVudCB9IGNvbXBvbmVudCByZWdpc3RlcmVkYCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGdldENvbXBvbmVudEluc3RhbmNlKHRoaXMuY29tcG9uZW50c1tjb21wb25lbnRdKTtcblx0fVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2ludW91cygpO1xuIl19