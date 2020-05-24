"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIdentifierReactive = isIdentifierReactive;
exports.getIdentifierName = getIdentifierName;
exports.checkFunctionArgumentDeclaration = checkFunctionArgumentDeclaration;
exports.handleIdentifier = handleIdentifier;
exports.matchIdentifier = matchIdentifier;
exports.IdentifierExpression = exports.AiiExpression = exports.ObjectReturnExpression = exports.FunctionReturnExpression = exports.Reactity = exports._ = exports.ReactiveNamespaces = void 0;
var ReactiveNamespaces = ['state', 'computed'];
/**
 * Consts
 */

exports.ReactiveNamespaces = ReactiveNamespaces;

var _ = -1;

exports._ = _;
var Reactity = {
  'state': 'o',
  'computed': 'o'
};
exports.Reactity = Reactity;
var FunctionReturnExpression = ['data', 'state', 'computed'];
exports.FunctionReturnExpression = FunctionReturnExpression;
var ObjectReturnExpression = ['methods', 'props']; // As it is expressions

exports.ObjectReturnExpression = ObjectReturnExpression;
var AiiExpression = ['imports']; // export const RETURN_FUNCTION_TYPE = 1;
// export const OBJECT_FUNCTION_TYPE = 2;
// 
// 
// 

exports.AiiExpression = AiiExpression;

function isIdentifierReactive(data, id) {
  var name = id.name;

  if (name.match(/^\$/g)) {
    return true;
  }

  return data.state[name];
}

function getIdentifierName(id) {
  if (!id) {
    return null;
  }

  var name = id.name;

  if (name.match(/^\$/g)) {
    return name.substring(1);
  }

  return name;
}

function checkFunctionArgumentDeclaration(data, path) {
  if (path.parent.type !== 'FunctionDeclaration') {
    return;
  }

  var id = path.node;
  var name = getIdentifierName(id);
  var match = matchIdentifier(data, id);

  if (match.namespace && path.listKey === 'params') {
    throw new Error("Variable " + name + " has already defined in " + match.namespace);
  }
}

var IdentifierExpression = /*#__PURE__*/function () {
  function IdentifierExpression(id, _ref) {
    if (id === void 0) {
      id = null;
    }

    var _ref$context = _ref.context,
        context = _ref$context === void 0 ? null : _ref$context,
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === void 0 ? null : _ref$namespace,
        _ref$observable = _ref.observable,
        observable = _ref$observable === void 0 ? null : _ref$observable,
        _ref$callable = _ref.callable,
        callable = _ref$callable === void 0 ? null : _ref$callable;
    this.id = id;
    this.namespace = namespace;
    this.observable = observable;
    this.callable = callable;
    this.context = context;
  }

  var _proto = IdentifierExpression.prototype;

  _proto.replace = function replace(disableExecution) {
    if (this.namespace === false || this.id === null) {
      return;
    }

    var name = getIdentifierName(this.id);

    var _name = this.context + ".";

    if (this.namespace !== 'methods') {
      _name += "_" + this.namespace + ".";
    }

    _name += "" + name;

    if (!disableExecution && this.callable) {
      _name += '()';
    }

    this.id.name = _name;
  };

  return IdentifierExpression;
}();

exports.IdentifierExpression = IdentifierExpression;

function handleIdentifier(context, data, path) {
  if (['FunctionDeclaration', 'VariableDeclarator', 'LabeledStatement'].includes(path.parent.type) || ['property'].includes(path.key)) {
    return false;
  }

  var id = path.node;

  var _matchIdentifier = matchIdentifier(data, id),
      namespace = _matchIdentifier.namespace,
      observable = _matchIdentifier.observable;

  var callable = false; // console.log(name, keepObservation)

  if (observable && path.container.type !== 'CallExpression') {
    callable = true;
  }

  return new IdentifierExpression(id, {
    context: context,
    namespace: namespace,
    observable: observable,
    callable: callable
  });
}

function matchIdentifier(context, id) {
  var name = getIdentifierName(id);
  var namespace = false;
  var observable = false;

  for (var key in context) {
    if (Object.keys(context[key]).includes(name)) {
      namespace = key;
    }
  }

  if (namespace !== false) {
    observable = ReactiveNamespaces.includes(namespace);
  }

  return {
    namespace: namespace,
    observable: observable
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbIlJlYWN0aXZlTmFtZXNwYWNlcyIsIl8iLCJSZWFjdGl0eSIsIkZ1bmN0aW9uUmV0dXJuRXhwcmVzc2lvbiIsIk9iamVjdFJldHVybkV4cHJlc3Npb24iLCJBaWlFeHByZXNzaW9uIiwiaXNJZGVudGlmaWVyUmVhY3RpdmUiLCJkYXRhIiwiaWQiLCJuYW1lIiwibWF0Y2giLCJzdGF0ZSIsImdldElkZW50aWZpZXJOYW1lIiwic3Vic3RyaW5nIiwiY2hlY2tGdW5jdGlvbkFyZ3VtZW50RGVjbGFyYXRpb24iLCJwYXRoIiwicGFyZW50IiwidHlwZSIsIm5vZGUiLCJtYXRjaElkZW50aWZpZXIiLCJuYW1lc3BhY2UiLCJsaXN0S2V5IiwiRXJyb3IiLCJJZGVudGlmaWVyRXhwcmVzc2lvbiIsImNvbnRleHQiLCJvYnNlcnZhYmxlIiwiY2FsbGFibGUiLCJyZXBsYWNlIiwiZGlzYWJsZUV4ZWN1dGlvbiIsIl9uYW1lIiwiaGFuZGxlSWRlbnRpZmllciIsImluY2x1ZGVzIiwia2V5IiwiY29udGFpbmVyIiwiT2JqZWN0Iiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxrQkFBa0IsR0FBRyxDQUFDLE9BQUQsRUFBVSxVQUFWLENBQTNCO0FBR1A7Ozs7OztBQUdPLElBQU1DLENBQUMsR0FBRyxDQUFDLENBQVg7OztBQUVBLElBQU1DLFFBQVEsR0FBRztBQUN0QixXQUFTLEdBRGE7QUFFdEIsY0FBWTtBQUZVLENBQWpCOztBQUtBLElBQU1DLHdCQUF3QixHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsVUFBbEIsQ0FBakM7O0FBQ0EsSUFBTUMsc0JBQXNCLEdBQUcsQ0FBQyxTQUFELEVBQVksT0FBWixDQUEvQixDLENBQXFEOzs7QUFFckQsSUFBTUMsYUFBYSxHQUFHLENBQUMsU0FBRCxDQUF0QixDLENBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLFNBQVNDLG9CQUFU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LEVBQTZDO0FBQzVDVyxNQUFBQSxTQUFTLEdBQUdZLEdBQVo7QUFDQTtBQUNEOztBQUVELE1BQUdaLFNBQVMsS0FBSyxLQUFqQixFQUF3QjtBQUN2QkssSUFBQUEsVUFBVSxHQUFHekIsa0JBQWtCLENBQUMrQixRQUFuQixDQUE0QlgsU0FBNUIsQ0FBYjtBQUNBOztBQUVELFNBQU87QUFDTkEsSUFBQUEsU0FBUyxFQUFUQSxTQURNO0FBRU5LLElBQUFBLFVBQVUsRUFBVkE7QUFGTSxHQUFQO0FBSUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgUmVhY3RpdmVOYW1lc3BhY2VzID0gWydzdGF0ZScsICdjb21wdXRlZCddO1xuXG5cbi8qKlxuICogQ29uc3RzXG4gKi9cbmV4cG9ydCBjb25zdCBfID0gLTE7XG5cbmV4cG9ydCBjb25zdCBSZWFjdGl0eSA9IHtcbiAgJ3N0YXRlJzogJ28nLFxuICAnY29tcHV0ZWQnOiAnbydcbn07XG5cbmV4cG9ydCBjb25zdCBGdW5jdGlvblJldHVybkV4cHJlc3Npb24gPSBbJ2RhdGEnLCAnc3RhdGUnLCAnY29tcHV0ZWQnXTtcbmV4cG9ydCBjb25zdCBPYmplY3RSZXR1cm5FeHByZXNzaW9uID0gWydtZXRob2RzJywgJ3Byb3BzJ107IC8vIEFzIGl0IGlzIGV4cHJlc3Npb25zXG5cbmV4cG9ydCBjb25zdCBBaWlFeHByZXNzaW9uID0gWydpbXBvcnRzJ107XG4vLyBleHBvcnQgY29uc3QgUkVUVVJOX0ZVTkNUSU9OX1RZUEUgPSAxO1xuLy8gZXhwb3J0IGNvbnN0IE9CSkVDVF9GVU5DVElPTl9UWVBFID0gMjtcbi8vIFxuLy8gXG4vLyBcbmV4cG9ydCBmdW5jdGlvbiBpc0lkZW50aWZpZXJSZWFjdGl2ZShkYXRhLCBpZClcbntcblx0bGV0IG5hbWUgPSBpZC5uYW1lO1xuXHRcblx0aWYobmFtZS5tYXRjaCgvXlxcJC9nKSlcdHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBkYXRhLnN0YXRlW25hbWVdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWRlbnRpZmllck5hbWUoaWQpXG57XG5cdGlmKCFpZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bGV0IG5hbWUgPSBpZC5uYW1lO1xuXG5cdGlmKG5hbWUubWF0Y2goL15cXCQvZykpXHR7XG5cdFx0cmV0dXJuIG5hbWUuc3Vic3RyaW5nKDEpXG5cdH1cblxuXHRyZXR1cm4gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRnVuY3Rpb25Bcmd1bWVudERlY2xhcmF0aW9uKGRhdGEsIHBhdGgpXG57XG5cdGlmKHBhdGgucGFyZW50LnR5cGUgIT09ICdGdW5jdGlvbkRlY2xhcmF0aW9uJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBpZCA9IHBhdGgubm9kZTtcblx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShpZCk7XG5cdGxldCBtYXRjaCA9IG1hdGNoSWRlbnRpZmllcihkYXRhLCBpZCk7XG5cblx0aWYobWF0Y2gubmFtZXNwYWNlICYmIHBhdGgubGlzdEtleSA9PT0gJ3BhcmFtcycpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYFZhcmlhYmxlICR7IG5hbWUgfSBoYXMgYWxyZWFkeSBkZWZpbmVkIGluICR7IG1hdGNoLm5hbWVzcGFjZSB9YClcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllckV4cHJlc3Npb25cbntcblx0Y29uc3RydWN0b3IoaWQgPSBudWxsLCB7IGNvbnRleHQgPSBudWxsLCBuYW1lc3BhY2UgPSBudWxsLCBvYnNlcnZhYmxlID0gbnVsbCwgY2FsbGFibGUgPSBudWxsIH0pXG5cdHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0dGhpcy5vYnNlcnZhYmxlID0gb2JzZXJ2YWJsZTtcblx0XHR0aGlzLmNhbGxhYmxlID0gY2FsbGFibGU7XG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0fVxuXG5cdHJlcGxhY2UoZGlzYWJsZUV4ZWN1dGlvbilcblx0e1xuXHRcdGlmKHRoaXMubmFtZXNwYWNlID09PSBmYWxzZSB8fCB0aGlzLmlkID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZSh0aGlzLmlkKTtcblx0XHRsZXQgX25hbWUgPSBgJHsgdGhpcy5jb250ZXh0IH0uYDtcblxuXHRcdGlmKHRoaXMubmFtZXNwYWNlICE9PSAnbWV0aG9kcycpIHtcblx0XHRcdF9uYW1lICs9IGBfJHsgdGhpcy5uYW1lc3BhY2UgfS5gO1xuXHRcdH1cblxuXHRcdF9uYW1lICs9IGAke25hbWV9YDtcblxuXHRcdGlmKCFkaXNhYmxlRXhlY3V0aW9uICYmIHRoaXMuY2FsbGFibGUpIHtcblx0XHRcdF9uYW1lICs9ICcoKSc7XG5cdFx0fVxuXG5cdFx0dGhpcy5pZC5uYW1lID0gX25hbWU7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUlkZW50aWZpZXIoY29udGV4dCwgZGF0YSwgcGF0aClcbntcblx0aWYoWydGdW5jdGlvbkRlY2xhcmF0aW9uJywgJ1ZhcmlhYmxlRGVjbGFyYXRvcicsICdMYWJlbGVkU3RhdGVtZW50J10uaW5jbHVkZXMocGF0aC5wYXJlbnQudHlwZSkgfHwgWydwcm9wZXJ0eSddLmluY2x1ZGVzKHBhdGgua2V5KSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGxldCBpZCA9IHBhdGgubm9kZTtcblx0bGV0IHsgbmFtZXNwYWNlLCBvYnNlcnZhYmxlIH0gPSBtYXRjaElkZW50aWZpZXIoZGF0YSwgaWQpO1xuXHRsZXQgY2FsbGFibGUgPSBmYWxzZTtcblxuXHQvLyBjb25zb2xlLmxvZyhuYW1lLCBrZWVwT2JzZXJ2YXRpb24pXG5cdGlmKG9ic2VydmFibGUgJiYgcGF0aC5jb250YWluZXIudHlwZSAhPT0gJ0NhbGxFeHByZXNzaW9uJykge1xuXHRcdGNhbGxhYmxlID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBuZXcgSWRlbnRpZmllckV4cHJlc3Npb24oaWQsIHtcblx0XHRjb250ZXh0LFxuXHRcdG5hbWVzcGFjZSxcblx0XHRvYnNlcnZhYmxlLFxuXHRcdGNhbGxhYmxlLFxuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoSWRlbnRpZmllcihjb250ZXh0LCBpZClcbntcblx0bGV0IG5hbWUgPSBnZXRJZGVudGlmaWVyTmFtZShpZCk7XG5cdGxldCBuYW1lc3BhY2UgPSBmYWxzZTtcblx0bGV0IG9ic2VydmFibGUgPSBmYWxzZTtcblxuXHRmb3IobGV0IGtleSBpbiBjb250ZXh0KSB7XG5cdFx0aWYoT2JqZWN0LmtleXMoY29udGV4dFtrZXldKS5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdFx0bmFtZXNwYWNlID0ga2V5O1xuXHRcdH1cblx0fVxuXG5cdGlmKG5hbWVzcGFjZSAhPT0gZmFsc2UpIHtcblx0XHRvYnNlcnZhYmxlID0gUmVhY3RpdmVOYW1lc3BhY2VzLmluY2x1ZGVzKG5hbWVzcGFjZSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdG5hbWVzcGFjZSxcblx0XHRvYnNlcnZhYmxlLFxuXHR9O1xufVxuIl19