"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hydrateProps;

var _component = require("@siph/component");

var _sinuous = require("sinuous");

function hydrateProps(context, el, options) {
  options = (0, _component.mergeOptions)(options);

  if (!options._s) {
    return;
  }

  var subscribers = [];
  var subscribers_first = [];

  function addSubscriber(value, fn, skip) {
    if (skip === void 0) {
      skip = true;
    }

    subscribers.push({
      value: value,
      fn: fn
    });
    subscribers_first.push(skip);
  }
  /**
   * Make styles and classes
   */


  if (options.style || options.class) {
    // console.error(el);
    var cssOptions = (0, _component.makeCss)({}, options);

    if (cssOptions.style) {
      addSubscriber(cssOptions.style, function (obj) {
        for (var name in obj) {
          el.style.setProperty(name, obj[name]);
        }
      });
    }

    if (cssOptions.class) {
      // console.log(cssOptions.class());
      addSubscriber(cssOptions.class, function (value) {
        // console.log(el, value);
        el.className = value;
      });
    }
  }
  /**
   * Make events
   */


  if (options.on) {
    for (var name in options.on) {
      handleEvent(el, name, options.on[name]);
    }
  }
  /**
   * Make attributes
   */


  if (options.attrs) {
    var _loop = function _loop(_name) {
      addSubscriber(options.attrs[_name], function (value) {
        el.setAttribute(_name, value);
      });
    };

    for (var _name in options.attrs) {
      _loop(_name);
    }
  }
  /**
   * Subscribe
   */


  if (subscribers.length > 0) {
    _sinuous.api.subscribe(function () {
      for (var i = 0; i < subscribers.length; i++) {
        var value = subscribers[i].value();

        if (subscribers_first[i]) {
          subscribers_first[i] = false;
          return;
        }

        subscribers[i].fn(value);
      }
    });
  }
}

function handleEvent(el, name, value) {
  name = name.toLowerCase();

  if (value) {
    el.addEventListener(name, eventProxy);
  } else {
    el.removeEventListener(name, eventProxy);
  }

  (el._listeners || (el._listeners = {}))[name] = value;
}
/**
 * Proxy an event to hooked event handlers.
 * @param {Event} e - The event object from the browser.
 * @return {Function}
 */


function eventProxy(e) {
  // eslint-disable-next-line
  return this._listeners[e.type](e);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJoeWRyYXRlUHJvcHMiLCJjb250ZXh0IiwiZWwiLCJvcHRpb25zIiwiX3MiLCJzdWJzY3JpYmVycyIsInN1YnNjcmliZXJzX2ZpcnN0IiwiYWRkU3Vic2NyaWJlciIsInZhbHVlIiwiZm4iLCJza2lwIiwicHVzaCIsInN0eWxlIiwiY2xhc3MiLCJjc3NPcHRpb25zIiwib2JqIiwibmFtZSIsInNldFByb3BlcnR5IiwiY2xhc3NOYW1lIiwib24iLCJoYW5kbGVFdmVudCIsImF0dHJzIiwic2V0QXR0cmlidXRlIiwibGVuZ3RoIiwiYXBpIiwic3Vic2NyaWJlIiwiaSIsInRvTG93ZXJDYXNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50UHJveHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2xpc3RlbmVycyIsImUiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRWUsU0FBU0EsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0JDLEVBQS9CLEVBQW1DQyxPQUFuQyxFQUNmO0FBRUNBLEVBQUFBLE9BQU8sR0FBRyw2QkFBYUEsT0FBYixDQUFWOztBQUVBLE1BQUcsQ0FBQ0EsT0FBTyxDQUFDQyxFQUFaLEVBQWdCO0FBQ2Y7QUFDQTs7QUFFRCxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQyxpQkFBaUIsR0FBRyxFQUF4Qjs7QUFFQSxXQUFTQyxhQUFULENBQXVCQyxLQUF2QixFQUE4QkMsRUFBOUIsRUFBa0NDLElBQWxDLEVBQ0E7QUFBQSxRQURrQ0EsSUFDbEM7QUFEa0NBLE1BQUFBLElBQ2xDLEdBRHlDLElBQ3pDO0FBQUE7O0FBQ0NMLElBQUFBLFdBQVcsQ0FBQ00sSUFBWixDQUFpQjtBQUNoQkgsTUFBQUEsS0FBSyxFQUFMQSxLQURnQjtBQUVoQkMsTUFBQUEsRUFBRSxFQUFGQTtBQUZnQixLQUFqQjtBQUtBSCxJQUFBQSxpQkFBaUIsQ0FBQ0ssSUFBbEIsQ0FBdUJE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QUQsRUFBd0NmLElBQXhDLElBQWdEUixLQUFoRDtBQUNIO0FBRUQ7Ozs7Ozs7QUFLQSxTQUFTcUIsVUFBVCxDQUFvQkcsQ0FBcEIsRUFBdUI7QUFDbkI7QUFDQSxTQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLENBQUMsQ0FBQ0MsSUFBbEIsRUFBd0JELENBQXhCLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VDc3MsIG1lcmdlT3B0aW9ucyB9IGZyb20gJ0BzaXBoL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICdzaW51b3VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHlkcmF0ZVByb3BzKGNvbnRleHQsIGVsLCBvcHRpb25zKVxue1xuXG5cdG9wdGlvbnMgPSBtZXJnZU9wdGlvbnMob3B0aW9ucyk7XG5cblx0aWYoIW9wdGlvbnMuX3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgc3Vic2NyaWJlcnMgPSBbXTtcblx0bGV0IHN1YnNjcmliZXJzX2ZpcnN0ID0gW107XG5cblx0ZnVuY3Rpb24gYWRkU3Vic2NyaWJlcih2YWx1ZSwgZm4sIHNraXAgPSB0cnVlKVxuXHR7XG5cdFx0c3Vic2NyaWJlcnMucHVzaCh7XG5cdFx0XHR2YWx1ZSxcblx0XHRcdGZuLFxuXHRcdH0pO1xuXG5cdFx0c3Vic2NyaWJlcnNfZmlyc3QucHVzaChza2lwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlIHN0eWxlcyBhbmQgY2xhc3Nlc1xuXHQgKi9cblx0aWYob3B0aW9ucy5zdHlsZSB8fCBvcHRpb25zLmNsYXNzKSB7XG5cdFx0Ly8gY29uc29sZS5lcnJvcihlbCk7XG5cdFx0bGV0IGNzc09wdGlvbnMgPSBtYWtlQ3NzKHt9LCBvcHRpb25zKTtcblxuXHRcdGlmKGNzc09wdGlvbnMuc3R5bGUpIHtcblx0XHRcdGFkZFN1YnNjcmliZXIoY3NzT3B0aW9ucy5zdHlsZSwgKG9iaikgPT4ge1xuXHRcdFx0XHRmb3IobGV0IG5hbWUgaW4gb2JqKSB7XG5cdFx0XHRcdFx0ZWwuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgb2JqW25hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYoY3NzT3B0aW9ucy5jbGFzcykge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coY3NzT3B0aW9ucy5jbGFzcygpKTtcblx0XHRcdGFkZFN1YnNjcmliZXIoY3NzT3B0aW9ucy5jbGFzcywgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGVsLCB2YWx1ZSk7XG5cdFx0XHRcdGVsLmNsYXNzTmFtZSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdFxuXHQvKipcblx0ICogTWFrZSBldmVudHNcblx0ICovXG5cdGlmKG9wdGlvbnMub24pIHtcblx0XHRmb3IobGV0IG5hbWUgaW4gb3B0aW9ucy5vbikge1xuXHRcdFx0aGFuZGxlRXZlbnQoZWwsIG5hbWUsIG9wdGlvbnMub25bbmFtZV0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlIGF0dHJpYnV0ZXNcblx0ICovXG5cdGlmKG9wdGlvbnMuYXR0cnMpIHtcblx0XHRmb3IobGV0IG5hbWUgaW4gb3B0aW9ucy5hdHRycykge1xuXHRcdFx0YWRkU3Vic2NyaWJlcihvcHRpb25zLmF0dHJzW25hbWVdLCAodmFsdWUpID0+IHtcblx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBTdWJzY3JpYmVcblx0ICovXG5cdGlmKHN1YnNjcmliZXJzLmxlbmd0aCA+IDApIHtcblx0XHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IHZhbHVlID0gc3Vic2NyaWJlcnNbaV0udmFsdWUoKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHN1YnNjcmliZXJzX2ZpcnN0W2ldKSB7XG5cdFx0XHRcdFx0c3Vic2NyaWJlcnNfZmlyc3RbaV0gPSBmYWxzZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJzY3JpYmVyc1tpXS5mbih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxufVxuXG5mdW5jdGlvbiBoYW5kbGVFdmVudChlbCwgbmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnRQcm94eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudFByb3h5KTtcbiAgICB9XG5cbiAgICAoZWwuX2xpc3RlbmVycyB8fCAoZWwuX2xpc3RlbmVycyA9IHt9KSlbbmFtZV0gPSB2YWx1ZTtcbn1cblxuLyoqXG4gKiBQcm94eSBhbiBldmVudCB0byBob29rZWQgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0ge0V2ZW50fSBlIC0gVGhlIGV2ZW50IG9iamVjdCBmcm9tIHRoZSBicm93c2VyLlxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGV2ZW50UHJveHkoZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHJldHVybiB0aGlzLl9saXN0ZW5lcnNbZS50eXBlXShlKTtcbn1cbiJdfQ==