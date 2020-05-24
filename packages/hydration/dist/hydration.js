"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initHydration;

var _sinuous = require("sinuous");

var _empty = require("@siph/compiler/src/empty");

var _i = _interopRequireDefault(require("@siph/i"));

var _component2 = require("@siph/component");

var _lazy = require("@siph/lazy");

var _render = require("@siph/render");

var _property = _interopRequireDefault(require("./property"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OBSERVER;
var STORAGE = {};
var SUBSCRIBERS = [];

function addSubscriber(fn) {
  console.log(fn, SUBSCRIBERS);
  SUBSCRIBERS.push(fn);
} // function hydrateProps(el, opts)
// {
// if(!opts._s) {
// 	return;
// }
// 	api.property(el, opts, null);
// }
// function hydrateTag(parent, children, currentIndex, value)
// {
// 	let el = children[currentIndex];
// 	let nodes = value();
// 	if(Array.isArray(nodes)) {
// 		for (var i = 0; i < nodes.length; i++) {
// 			let child = nodes[i];
// 			if(typeof child === 'function') {
// 				child = child();
// 			}
// 			// console.log(parent,  child.size)
// 			// api.insert(parent, child, children[currentIndex + i]);
// 			// parent.replaceChild(child, children[currentIndex + i])
// 			// children[currentIndex + i].replaceWith(child);
// 		}
// 	} else {
// 		api.insert(el, nodes, null);
// 	}
// }
// function hydrateChildren(node, children)
// {
// 	let bindChildren = [];
// 	if(node !== null) {
// 		bindChildren = filterChildNodes(node);
// 	}
// 	for (var i = 0; i < children.length; i++) {
// 		if(children[i] === _) {
// 			continue;
// 		}
// 		// console.error(bindChildren[i], children[i]);
// 		hydrateTag(node, bindChildren, i, children[i]);
// 	}
// }
// function getSlotNode(el, path)
// {
// 	for (var i = 0; i < path.length; i++) {
// 		el = el.childNodes[path[i]];
// 	}
// 	return el;
// }
// function hydrateSlots(component, el, opts = {}, slots)
// {
// 	if(!opts['id']) {
// 		return;
// 	}
// 	// if(opts['id'] === 'hydr-13') {
// 	// 	opts['id'] = 'hydr-6';
// 	// }
// 	// if(opts['id'] === 'hydr-30') {
// 	// 	opts['id'] = 'hydr-21';
// 	// }
// 	let bindNode = document.getElementById(`${ opts['id'] }`);
// 	let slotNodes = {}
// 	for(let key in slots) {
// 		if(component._slotsPath[key]) {
// 			let node = getSlotNode(bindNode, component._slotsPath[key])
// 			slotNodes[key] = node;
// 		} else {
// 			throw new Error(`There is no ${key} slot namespace defined`);
// 		}
// 	}
// 	api.subscribe(() => {
// 		for(let key in slots) {
// 			let node = slotNodes[key];
// 			let childrenSlots = slots[key];
// 			if(node.childNodes.length === 0) {
// 				node = [node];
// 			} else {
// 				node = node.childNodes;
// 			}
// 			if(childrenSlots.length > node.length) {
// 				throw new Error('Slot hydration length mismatch');
// 			}
// 			for (var i = 0; i < childrenSlots.length; i++) {
// 				api.insert(node[i], childrenSlots[i](), null);
// 			}
// 		}
// 	});
// }
// function hydrate(el, opts = {}, children = [])
// {
// 	let bindNode;
// 	console.log(this, el, opts, children)
// 	// if(this.node) {
// 	// 	bindNode = this.node;
// 	// }
// 	if(!opts['id']) {
// 		return;
// 	} else {
// 		bindNode = document.getElementById(`${ opts['id'] }`);
// 	}
// 	// console.log(this);
// 	// this.ctx._el_index++;
// 	if(bindNode === null) {
// 		return;
// 	}
// api.subscribe(() => {
// 	hydrateProps(bindNode, opts);
// 	hydrateChildren(bindNode, children);
// });
// }
// function registerChildren(parent, child)
// {
// 	parent.addChildren(child);
// 	if(child.setParent) {
// 		child.setParent(parent);
// 	}
// }
// export function compiler(el, opts = {}, children = [])
// {
// 	options(this, opts);
// 	if(!Sinuous.hasComponent(el)) {
// 		hydrate.call(this, el, opts, children);
// 		return _;
// 	}
// 	let component = Sinuous.getHydrateComponent(el, opts);
// 	// console.log(component, el, opts)
// 	if(component === null) {
// 		return _;
// 	}
// 	registerChildren(this.ctx, component);
// 	if(component._functional) {
// 		// console.warn('start hydration');
// 		return component.hydrate({
// 			getUID() {
// 				return -1;
// 			},
// 			_slots: opts.$slots,
// 		}, compiler);
// 	}
// 	if(typeof opts.props !== 'undefined') {
// 		component.passProps(opts.props);
// 	}
// 	if(opts.$slots) {
// 		hydrateSlots(component, el, opts, opts.$slots);
// 	}
// 	return initComponent(component);
// }
// function hydrateProps(el, options)
// {
// 	if(options._s) {
// 		// console.log(el, 'Prepare options', options);
// 		// options = parseOptions(options, false);
// 		// console.log(el, 'Prepare options 2', options);
// 		property(el, options);
// 		// api.subscribe(() => {
// 		// 	// console.log(el, 'Change options');
// 		// 	api.property(el, options, null);
// 		// });
// 	}
// }


function hydrateH(context, el, options, children) {
  (0, _property.default)(context, el, options);

  for (var i = 0; i < children.length; i++) {
    hydrate(context, el.childNodes[i], children[i]);
  }
}

function hydrateStatement(context, node, args) {
  var parent = node.parentNode;
  var startIndex = 0;

  while ((node = node.previousSibling) != null) {
    startIndex++;
  }

  var statementArgs = args.a;

  function hideNodes(children, startIndex, length) {
    for (var j = startIndex; j <= length; j++) {
      var _node = children[j]; // console.log('hide', j, node);

      if (_node.nodeType !== Node.COMMENT_NODE) {
        _node.replaceWith(document.createComment(''));
      }

      _node = _node.nextElementSibling;
    }
  }

  _sinuous.api.subscribe(function () {
    var currentIndex = startIndex;
    var foundCondition = false;

    for (var i = 0; i < statementArgs.length; i += 3) {
      var condition = statementArgs[i];
      var size = statementArgs[i + 1];
      var component = statementArgs[i + 2];
      var currentNode = parent.childNodes[currentIndex];
      condition = typeof condition === 'function' ? condition() : condition; // console.log(currentNode, condition && !foundCondition);

      if (condition && !foundCondition) {
        foundCondition = true; // console.log('show', parent.childNodes[currentIndex], size);

        if (currentNode.nodeType === Node.COMMENT_NODE) {
          //  render
          var newNode = component.r(_component2.h.bind(context));
          currentNode.replaceWith(newNode);
        } else {
          // hydrate
          markAsReady(currentNode);
          hydrate(context, currentNode, component.h);
        }
      } else {
        // console.log('[hide]', parent.childNodes, currentIndex, size);
        hideNodes(parent.childNodes, currentIndex, size);
      }

      currentIndex += size; // console.warn(currentNode, currentNode.nextElementSibling)
      // console.log(currentNode, condition, 'skip');
    }
  });
}

function hydrateLoop(context, node, args) {
  var condition = args.c;
  var parentNode = node.parentNode;
  var parentChildren = parentNode.childNodes;
  (0, _render.map)(context, args.c, args.k, function (item, key) {
    var node = args.r(_component2.h.bind(context), item, key);
    return node;
  }, function (registerHydration) {
    var items = args.c();

    for (var i = 0; i < items.length; i++) {
      var _node2 = parentChildren[i];
      var item = items[i];
      var itemKey = args.k(item, i);

      if (_node2) {
        if (_node2.getAttribute('data-key') == itemKey) {
          markAsReady(_node2);
          hydrate(context, _node2, args.h(item, i));
        }
      }

      registerHydration(item, i, _node2); // console.log(reg, item, i, node);
    }
  }, node.parentNode);
}
/**
 * Maybe need same hydration algorithm as with props
 * Skip first time hydration ???
 */


function hydrateText(context, node, args) {
  if (args.t === _empty._) {
    return;
  }

  _sinuous.api.subscribe(function () {
    _sinuous.api.insert(node, args.t(), null);
  });
}

function getSlotNode(el, tag, path) {
  var node = el;

  for (var i = 1; i < path.length; i++) {
    node = node.childNodes[path[i]];
  }

  return el;
}

function hydrateSlots(context, el, opts, slots) {
  if (opts === void 0) {
    opts = {};
  }

  // return;
  // Hydrate props of main Node
  // hydrateProps(context, el, opts);
  var bindedNodes = {};
  var slotData = context._slotsData; // Find slot binding nodes

  for (var key in slots) {
    if (slotData[key]) {
      var node = getSlotNode(el, slotData[key].tag, slotData[key].path);
      bindedNodes[key] = node;
    } else {
      throw new Error("There is no " + key + " slot namespace defined");
    }
  } // Hydrate slots per binded tag


  for (var _key in slots) {
    var data = slotData[_key];
    var _node3 = bindedNodes[_key];
    var childrenSlots = slots[_key];
    var startNodeIndex = data.index;

    if (typeof _node3 === 'undefined') {
      console.warn(el, opts, slotData, el[0]);
    }

    if (childrenSlots.length > _node3.length) {
      throw new Error('Slot hydration length mismatch');
    }

    for (var i = startNodeIndex; i < childrenSlots.length; i++) {
      // console.log(node.childNodes[i], childrenSlots[i])
      hydrate(context, _node3.childNodes[i], childrenSlots[i]);
    }
  }
}
/**
 * Context setup
 */


function registerChildren(parent, child) {
  if (child._functional) {
    parent.addChildren(_empty._);
    return;
  }

  parent.addChildren(child);
  child.setParent(parent);
}

function hydrateTag(context, node, args) {
  var el = args.t,
      opts = args.o,
      children = args.c;

  if (!_i.default.hasComponent(el)) {
    hydrateH(context, node, opts, children);
    return;
  }

  var component = _i.default.getHydrateComponent(el, opts);

  if (component === null) {
    return _empty._;
  }

  context.addChildren(component);

  if (component._functional) {
    var newArgs = component.hydrate({
      _slots: opts.$slots
    });

    if (opts.$slots) {
      hydrateSlots(component, node, opts, opts.$slots);
    } // console.log(opts)


    hydrate(context, node, newArgs);
    return;
  }

  component.passProps(opts.props);
  component.passOptions(opts);

  if (opts.$slots) {
    hydrateSlots(component, node, opts, opts.$slots);
  }

  node.$s = component; // console.log(component, node)

  return hydrate(component, node, component.hydrate(component));
}
/**
 * Main hydration function
 */


function hydrate(context, node, args) {
  if (args === void 0) {
    args = null;
  }

  // requestIdleCallback(() => {
  hydrateIdle(context, node, args); // }, {
  // 	timeout: 0,
  // 	read: true
  // });
}

function markAsReady(node) {
  node._hydrated = true;
}

function hydrateIdle(context, node, args) {
  if (args === null || node === null) {
    return;
  }

  if (args._t === 'h') {
    // args.o['data-hydrated'] = true;
    // args.o['_s'] = true;
    hydrateTag(context, node, args);
  }

  if (args._t === 't') {
    hydrateText(context, node, args);
  }

  if (args._t === 'loop') {
    hydrateLoop(context, node, args);
  }

  if (args._t === 'statement') {
    hydrateStatement(context, node, args);
  }

  return _empty._;
}

function initHydration(component, hydrationRoot, timeBenchmark, callback) {
  if (timeBenchmark === void 0) {
    timeBenchmark = function timeBenchmark() {};
  }

  if (callback === void 0) {
    callback = null;
  }

  (0, _lazy.loadComponent)(component, function (instance) {
    timeBenchmark('Hydration');
    var tree = [instance];

    _i.default.clearHID(); // let connectedNode = filterChildNodes(hydrationRoot);


    for (var i = 0; i < tree.length; i++) {
      var _component = tree[i];
      var node = hydrationRoot.childNodes[i];

      var hydration = _component.hydrate(_component);

      hydrate(_component, node, hydration);
    } // console.log(instance);


    instance.hook('mounted');

    if (callback) {
      callback(instance);
    }

    timeBenchmark('Hydration');
    return instance;
  });
}
/**
 * Filter out whitespace text nodes unless it has a noskip indicator.
 *
 * @param  {Node} parent
 * @return {Array}
 */


function filterChildNodes(parent) {
  return parent.childNodes; // console.warn(parent, parent.childNodes);

  return Array.from(parent.childNodes).filter(function (el) {
    return el.nodeType !== 3 || el.data.trim() || el._noskip;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oeWRyYXRpb24uanMiXSwibmFtZXMiOlsiT0JTRVJWRVIiLCJTVE9SQUdFIiwiU1VCU0NSSUJFUlMiLCJhZGRTdWJzY3JpYmVyIiwiZm4iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImh5ZHJhdGVIIiwiY29udGV4dCIsImVsIiwib3B0aW9ucyIsImNoaWxkcmVuIiwiaSIsImxlbmd0aCIsImh5ZHJhdGUiLCJjaGlsZE5vZGVzIiwiaHlkcmF0ZVN0YXRlbWVudCIsIm5vZGUiLCJhcmdzIiwicGFyZW50IiwicGFyZW50Tm9kZSIsInN0YXJ0SW5kZXgiLCJwcmV2aW91c1NpYmxpbmciLCJzdGF0ZW1lbnRBcmdzIiwiYSIsImhpZGVOb2RlcyIsImoiLCJub2RlVHlwZSIsIk5vZGUiLCJDT01NRU5UX05PREUiLCJyZXBsYWNlV2l0aCIsImRvY3VtZW50IiwiY3JlYXRlQ29tbWVudCIsIm5leHRFbGVtZW50U2libGluZyIsImFwaSIsInN1YnNjcmliZSIsImN1cnJlbnRJbmRleCIsImZvdW5kQ29uZGl0aW9uIiwiY29uZGl0aW9uIiwic2l6ZSIsImNvbXBvbmVudCIsImN1cnJlbnROb2RlIiwibmV3Tm9kZSIsInIiLCJoIiwiYmluZCIsIm1hcmtBc1JlYWR5IiwiaHlkcmF0ZUxvb3AiLCJjIiwicGFyZW50Q2hpbGRyZW4iLCJrIiwiaXRlbSIsImtleSIsInJlZ2lzdGVySHlkcmF0aW9uIiwiaXRlbXMiLCJpdGVtS2V5IiwiZ2V0QXR0cmlidXRlIiwiaHlkcmF0ZVRleHQiLCJ0IiwiXyIsImluc2VydCIsImdldFNsb3ROb2RlIiwidGFnIiwicGF0aCIsImh5ZHJhdGVTbG90cyIsIm9wdHMiLCJzbG90cyIsImJpbmRlZE5vZGVzIiwic2xvdERhdGEiLCJfc2xvdHNEYXRhIiwiRXJyb3IiLCJkYXRhIiwiY2hpbGRyZW5TbG90cyIsInN0YXJ0Tm9kZUluZGV4IiwiaW5kZXgiLCJ3YXJuIiwicmVnaXN0ZXJDaGlsZHJlbiIsImNoaWxkIiwiX2Z1bmN0aW9uYWwiLCJhZGRDaGlsZHJlbiIsInNldFBhcmVudCIsImh5ZHJhdGVUYWciLCJvIiwiU2ludW91cyIsImhhc0NvbXBvbmVudCIsImdldEh5ZHJhdGVDb21wb25lbnQiLCJuZXdBcmdzIiwiX3Nsb3RzIiwiJHNsb3RzIiwicGFzc1Byb3BzIiwicHJvcHMiLCJwYXNzT3B0aW9ucyIsIiRzIiwiaHlkcmF0ZUlkbGUiLCJfaHlkcmF0ZWQiLCJfdCIsImluaXRIeWRyYXRpb24iLCJoeWRyYXRpb25Sb290IiwidGltZUJlbmNobWFyayIsImNhbGxiYWNrIiwiaW5zdGFuY2UiLCJ0cmVlIiwiY2xlYXJISUQiLCJoeWRyYXRpb24iLCJob29rIiwiZmlsdGVyQ2hpbGROb2RlcyIsIkFycmF5IiwiZnJvbSIsImZpbHRlciIsInRyaW0iLCJfbm9za2lwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFJQSxRQUFKO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFFQSxJQUFJQyxXQUFXLEdBQUcsRUFBbEI7O0FBRUEsU0FBU0MsYUFBVCxDQUF1QkMsRUFBdkIsRUFDQTtBQUNDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsRUFBWixFQUFnQkYsV0FBaEI7QUFDQUEsRUFBQUEsV0FBVyxDQUFDSyxJQUFaLENBQWlCSCxFQUFqQjtBQUNBLEMsQ0FFRDtBQUNBO0FBQ0M7QUFDQTtBQUNBO0FBRUQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFD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QUFJMUYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lGLElBQUksQ0FBQ3hGLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ3JDLFVBQUk0QixVQUFTLEdBQUc2RCxJQUFJLENBQUN6RixDQUFELENBQXBCO0FBQ0EsVUFBSUssSUFBSSxHQUFHZ0YsYUFBYSxDQUFDbEYsVUFBZCxDQUF5QkgsQ0FBekIsQ0FBWDs7QUFDQSxVQUFJMkYsU0FBUyxHQUFHL0QsVUFBUyxDQUFDMUIsT0FBVixDQUFrQjBCLFVBQWxCLENBQWhCOztBQUVBMUIsTUFBQUEsT0FBTyxDQUFDMEIsVUFBRCxFQUFZdkIsSUFBWixFQUFrQnNGLFNBQWxCLENBQVA7QUFDQSxLQWhCcUMsQ0FrQnRDOzs7QUFDQUgsSUFBQUEsUUFBUSxDQUFDSSxJQUFULENBQWMsU0FBZDs7QUFFQSxRQUFHTCxRQUFILEVBQWE7QUFDWkEsTUFBQUEsUUFBUSxDQUFDQyxRQUFELENBQVI7QUFDQTs7QUFFREYsSUFBQUEsYUFBYSxDQUFDLFdBQUQsQ0FBYjtBQUVBLFdBQU9FLFFBQVA7QUFDQSxHQTVCRDtBQThCQTtBQUVEOzs7Ozs7OztBQU1BLFNBQVNLLGdCQUFULENBQTBCdEYsTUFBMUIsRUFBa0M7QUFDakMsU0FBT0EsTUFBTSxDQUFDSixVQUFkLENBRGlDLENBRWpDOztBQUNHLFNBQU8yRixLQUFLLENBQUNDLElBQU4sQ0FBV3hGLE1BQU0sQ0FBQ0osVUFBbEIsRUFBOEI2RixNQUE5QixDQUNILFVBQUFuRyxFQUFFO0FBQUEsV0FBSUEsRUFBRSxDQUFDa0IsUUFBSCxLQUFnQixDQUFoQixJQUFxQmxCLEVBQUUsQ0FBQzhELElBQUgsQ0FBUXNDLElBQVIsRUFBckIsSUFBdUNwRyxFQUFFLENBQUNxRyxPQUE5QztBQUFBLEdBREMsQ0FBUDtBQUdIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpIH0gZnJvbSAnc2ludW91cyc7XG5pbXBvcnQgeyBfIH0gZnJvbSAnQHNpcGgvY29tcGlsZXIvc3JjL2VtcHR5JztcbmltcG9ydCBTaW51b3VzIGZyb20gJ0BzaXBoL2knO1xuaW1wb3J0IHsgb3B0aW9ucyBhcyBwYXJzZU9wdGlvbnMsIGggfSBmcm9tICdAc2lwaC9jb21wb25lbnQnO1xuaW1wb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJ0BzaXBoL2xhenknO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnQHNpcGgvcmVuZGVyJztcbmltcG9ydCBoeWRyYXRlUHJvcHMgZnJvbSAnLi9wcm9wZXJ0eSc7XG5cbmxldCBPQlNFUlZFUjtcbmxldCBTVE9SQUdFID0ge307XG5cbmxldCBTVUJTQ1JJQkVSUyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRTdWJzY3JpYmVyKGZuKVxue1xuXHRjb25zb2xlLmxvZyhmbiwgU1VCU0NSSUJFUlMpXG5cdFNVQlNDUklCRVJTLnB1c2goZm4pO1xufVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlUHJvcHMoZWwsIG9wdHMpXG4vLyB7XG5cdC8vIGlmKCFvcHRzLl9zKSB7XG5cdC8vIFx0cmV0dXJuO1xuXHQvLyB9XG5cbi8vIFx0YXBpLnByb3BlcnR5KGVsLCBvcHRzLCBudWxsKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gaHlkcmF0ZVRhZyhwYXJlbnQsIGNoaWxkcmVuLCBjdXJyZW50SW5kZXgsIHZhbHVlKVxuLy8ge1xuLy8gXHRsZXQgZWwgPSBjaGlsZHJlbltjdXJyZW50SW5kZXhdO1xuXHRcbi8vIFx0bGV0IG5vZGVzID0gdmFsdWUoKTtcblxuLy8gXHRpZihBcnJheS5pc0FycmF5KG5vZGVzKSkge1xuXG4vLyBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuLy8gXHRcdFx0bGV0IGNoaWxkID0gbm9kZXNbaV07XG4vLyBcdFx0XHRpZih0eXBlb2YgY2hpbGQgPT09ICdmdW5jdGlvbicpIHtcbi8vIFx0XHRcdFx0Y2hpbGQgPSBjaGlsZCgpO1xuLy8gXHRcdFx0fVxuLy8gXHRcdFx0Ly8gY29uc29sZS5sb2cocGFyZW50LCAgY2hpbGQuc2l6ZSlcbi8vIFx0XHRcdC8vIGFwaS5pbnNlcnQocGFyZW50LCBjaGlsZCwgY2hpbGRyZW5bY3VycmVudEluZGV4ICsgaV0pO1xuLy8gXHRcdFx0Ly8gcGFyZW50LnJlcGxhY2VDaGlsZChjaGlsZCwgY2hpbGRyZW5bY3VycmVudEluZGV4ICsgaV0pXG4vLyBcdFx0XHQvLyBjaGlsZHJlbltjdXJyZW50SW5kZXggKyBpXS5yZXBsYWNlV2l0aChjaGlsZCk7XG4vLyBcdFx0fVxuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdGFwaS5pbnNlcnQoZWwsIG5vZGVzLCBudWxsKTtcbi8vIFx0fVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlQ2hpbGRyZW4obm9kZSwgY2hpbGRyZW4pXG4vLyB7XG4vLyBcdGxldCBiaW5kQ2hpbGRyZW4gPSBbXTtcblxuLy8gXHRpZihub2RlICE9PSBudWxsKSB7XG4vLyBcdFx0YmluZENoaWxkcmVuID0gZmlsdGVyQ2hpbGROb2Rlcyhub2RlKTtcbi8vIFx0fVxuXG4vLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbi8vIFx0XHRpZihjaGlsZHJlbltpXSA9PT0gXykge1xuLy8gXHRcdFx0Y29udGludWU7XG4vLyBcdFx0fVxuLy8gXHRcdC8vIGNvbnNvbGUuZXJyb3IoYmluZENoaWxkcmVuW2ldLCBjaGlsZHJlbltpXSk7XG4vLyBcdFx0aHlkcmF0ZVRhZyhub2RlLCBiaW5kQ2hpbGRyZW4sIGksIGNoaWxkcmVuW2ldKTtcbi8vIFx0fVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRTbG90Tm9kZShlbCwgcGF0aClcbi8vIHtcbi8vIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4vLyBcdFx0ZWwgPSBlbC5jaGlsZE5vZGVzW3BhdGhbaV1dO1xuLy8gXHR9XG5cbi8vIFx0cmV0dXJuIGVsO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBlbCwgb3B0cyA9IHt9LCBzbG90cylcbi8vIHtcbi8vIFx0aWYoIW9wdHNbJ2lkJ10pIHtcbi8vIFx0XHRyZXR1cm47XG4vLyBcdH1cblxuLy8gXHQvLyBpZihvcHRzWydpZCddID09PSAnaHlkci0xMycpIHtcbi8vIFx0Ly8gXHRvcHRzWydpZCddID0gJ2h5ZHItNic7XG4vLyBcdC8vIH1cblxuLy8gXHQvLyBpZihvcHRzWydpZCddID09PSAnaHlkci0zMCcpIHtcbi8vIFx0Ly8gXHRvcHRzWydpZCddID0gJ2h5ZHItMjEnO1xuLy8gXHQvLyB9XG5cbi8vIFx0bGV0IGJpbmROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7IG9wdHNbJ2lkJ10gfWApO1xuXG4vLyBcdGxldCBzbG90Tm9kZXMgPSB7fVxuXG4vLyBcdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG4vLyBcdFx0aWYoY29tcG9uZW50Ll9zbG90c1BhdGhba2V5XSkge1xuLy8gXHRcdFx0bGV0IG5vZGUgPSBnZXRTbG90Tm9kZShiaW5kTm9kZSwgY29tcG9uZW50Ll9zbG90c1BhdGhba2V5XSlcbi8vIFx0XHRcdHNsb3ROb2Rlc1trZXldID0gbm9kZTtcbi8vIFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAke2tleX0gc2xvdCBuYW1lc3BhY2UgZGVmaW5lZGApO1xuLy8gXHRcdH1cbi8vIFx0fVxuXG4vLyBcdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuLy8gXHRcdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG4vLyBcdFx0XHRsZXQgbm9kZSA9IHNsb3ROb2Rlc1trZXldO1xuLy8gXHRcdFx0bGV0IGNoaWxkcmVuU2xvdHMgPSBzbG90c1trZXldO1xuXHRcdFx0XG4vLyBcdFx0XHRpZihub2RlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4vLyBcdFx0XHRcdG5vZGUgPSBbbm9kZV07XG4vLyBcdFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0XHRub2RlID0gbm9kZS5jaGlsZE5vZGVzO1xuLy8gXHRcdFx0fVxuXG4vLyBcdFx0XHRpZihjaGlsZHJlblNsb3RzLmxlbmd0aCA+IG5vZGUubGVuZ3RoKSB7XG4vLyBcdFx0XHRcdHRocm93IG5ldyBFcnJvcignU2xvdCBoeWRyYXRpb24gbGVuZ3RoIG1pc21hdGNoJyk7XG4vLyBcdFx0XHR9XG5cbi8vIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5TbG90cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcbi8vIFx0XHRcdFx0YXBpLmluc2VydChub2RlW2ldLCBjaGlsZHJlblNsb3RzW2ldKCksIG51bGwpO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH1cbi8vIFx0fSk7XG5cdFxuLy8gfVxuXG4vLyBmdW5jdGlvbiBoeWRyYXRlKGVsLCBvcHRzID0ge30sIGNoaWxkcmVuID0gW10pXG4vLyB7XG4vLyBcdGxldCBiaW5kTm9kZTtcbi8vIFx0Y29uc29sZS5sb2codGhpcywgZWwsIG9wdHMsIGNoaWxkcmVuKVxuXG4vLyBcdC8vIGlmKHRoaXMubm9kZSkge1xuLy8gXHQvLyBcdGJpbmROb2RlID0gdGhpcy5ub2RlO1xuLy8gXHQvLyB9XG5cbi8vIFx0aWYoIW9wdHNbJ2lkJ10pIHtcbi8vIFx0XHRyZXR1cm47XG4vLyBcdH0gZWxzZSB7XG4vLyBcdFx0YmluZE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHsgb3B0c1snaWQnXSB9YCk7XG4vLyBcdH1cblxuLy8gXHQvLyBjb25zb2xlLmxvZyh0aGlzKTtcbi8vIFx0Ly8gdGhpcy5jdHguX2VsX2luZGV4Kys7XG5cbi8vIFx0aWYoYmluZE5vZGUgPT09IG51bGwpIHtcbi8vIFx0XHRyZXR1cm47XG4vLyBcdH1cblx0XG5cdC8vIGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHQvLyBcdGh5ZHJhdGVQcm9wcyhiaW5kTm9kZSwgb3B0cyk7XG5cdC8vIFx0aHlkcmF0ZUNoaWxkcmVuKGJpbmROb2RlLCBjaGlsZHJlbik7XG5cdC8vIH0pO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG4vLyB7XG4vLyBcdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG4vLyBcdGlmKGNoaWxkLnNldFBhcmVudCkge1xuLy8gXHRcdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBjb21waWxlcihlbCwgb3B0cyA9IHt9LCBjaGlsZHJlbiA9IFtdKVxuLy8ge1xuLy8gXHRvcHRpb25zKHRoaXMsIG9wdHMpO1xuXHRcbi8vIFx0aWYoIVNpbnVvdXMuaGFzQ29tcG9uZW50KGVsKSkge1xuLy8gXHRcdGh5ZHJhdGUuY2FsbCh0aGlzLCBlbCwgb3B0cywgY2hpbGRyZW4pO1xuLy8gXHRcdHJldHVybiBfO1xuLy8gXHR9XG5cdFx0XG4vLyBcdGxldCBjb21wb25lbnQgPSBTaW51b3VzLmdldEh5ZHJhdGVDb21wb25lbnQoZWwsIG9wdHMpO1xuXG4vLyBcdC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudCwgZWwsIG9wdHMpXG4vLyBcdGlmKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuLy8gXHRcdHJldHVybiBfO1xuLy8gXHR9XG5cbi8vIFx0cmVnaXN0ZXJDaGlsZHJlbih0aGlzLmN0eCwgY29tcG9uZW50KTtcblxuLy8gXHRpZihjb21wb25lbnQuX2Z1bmN0aW9uYWwpIHtcbi8vIFx0XHQvLyBjb25zb2xlLndhcm4oJ3N0YXJ0IGh5ZHJhdGlvbicpO1xuLy8gXHRcdHJldHVybiBjb21wb25lbnQuaHlkcmF0ZSh7XG4vLyBcdFx0XHRnZXRVSUQoKSB7XG4vLyBcdFx0XHRcdHJldHVybiAtMTtcbi8vIFx0XHRcdH0sXG4vLyBcdFx0XHRfc2xvdHM6IG9wdHMuJHNsb3RzLFxuLy8gXHRcdH0sIGNvbXBpbGVyKTtcbi8vIFx0fVxuXG4vLyBcdGlmKHR5cGVvZiBvcHRzLnByb3BzICE9PSAndW5kZWZpbmVkJykge1xuLy8gXHRcdGNvbXBvbmVudC5wYXNzUHJvcHMob3B0cy5wcm9wcyk7XG4vLyBcdH1cblxuLy8gXHRpZihvcHRzLiRzbG90cykge1xuLy8gXHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIGVsLCBvcHRzLCBvcHRzLiRzbG90cyk7XG4vLyBcdH1cblxuLy8gXHRyZXR1cm4gaW5pdENvbXBvbmVudChjb21wb25lbnQpO1xuLy8gfVxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGh5ZHJhdGVQcm9wcyhlbCwgb3B0aW9ucylcbi8vIHtcbi8vIFx0aWYob3B0aW9ucy5fcykge1xuLy8gXHRcdC8vIGNvbnNvbGUubG9nKGVsLCAnUHJlcGFyZSBvcHRpb25zJywgb3B0aW9ucyk7XG4vLyBcdFx0Ly8gb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zLCBmYWxzZSk7XG4vLyBcdFx0Ly8gY29uc29sZS5sb2coZWwsICdQcmVwYXJlIG9wdGlvbnMgMicsIG9wdGlvbnMpO1xuLy8gXHRcdHByb3BlcnR5KGVsLCBvcHRpb25zKTtcblxuLy8gXHRcdC8vIGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuLy8gXHRcdC8vIFx0Ly8gY29uc29sZS5sb2coZWwsICdDaGFuZ2Ugb3B0aW9ucycpO1xuLy8gXHRcdC8vIFx0YXBpLnByb3BlcnR5KGVsLCBvcHRpb25zLCBudWxsKTtcbi8vIFx0XHQvLyB9KTtcbi8vIFx0fVxuLy8gfVxuXG5mdW5jdGlvbiBoeWRyYXRlSChjb250ZXh0LCBlbCwgb3B0aW9ucywgY2hpbGRyZW4pXG57XG5cdGh5ZHJhdGVQcm9wcyhjb250ZXh0LCBlbCwgb3B0aW9ucyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGh5ZHJhdGUoY29udGV4dCwgZWwuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5baV0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVTdGF0ZW1lbnQoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0bGV0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcblx0bGV0IHN0YXJ0SW5kZXggPSAwO1xuXG5cdHdoaWxlKChub2RlID0gbm9kZS5wcmV2aW91c1NpYmxpbmcpICE9IG51bGwpXG5cdFx0c3RhcnRJbmRleCsrO1xuXHRcblx0bGV0IHN0YXRlbWVudEFyZ3MgPSBhcmdzLmE7XG5cblx0ZnVuY3Rpb24gaGlkZU5vZGVzKGNoaWxkcmVuLCBzdGFydEluZGV4LCBsZW5ndGgpXG5cdHtcblx0XHRmb3IgKHZhciBqID0gc3RhcnRJbmRleDsgaiA8PSBsZW5ndGg7IGorKykge1xuXHRcdFx0bGV0IG5vZGUgPSBjaGlsZHJlbltqXTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdoaWRlJywgaiwgbm9kZSk7XG5cdFx0XHRpZihub2RlLm5vZGVUeXBlICE9PSBOb2RlLkNPTU1FTlRfTk9ERSkge1xuXHRcdFx0XHRub2RlLnJlcGxhY2VXaXRoKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcblx0XHRcdH1cblxuXHRcdFx0bm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdH1cblx0fVxuXG5cdGFwaS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdGxldCBjdXJyZW50SW5kZXggPSBzdGFydEluZGV4O1xuXHRcdGxldCBmb3VuZENvbmRpdGlvbiA9IGZhbHNlO1xuXHRcdFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGVtZW50QXJncy5sZW5ndGg7IGkrPSAzKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gc3RhdGVtZW50QXJnc1tpXTtcblx0XHRcdGxldCBzaXplID0gc3RhdGVtZW50QXJnc1tpICsgMV07XG5cdFx0XHRsZXQgY29tcG9uZW50ID0gc3RhdGVtZW50QXJnc1tpICsgMl07XG5cblx0XHRcdGxldCBjdXJyZW50Tm9kZSA9IHBhcmVudC5jaGlsZE5vZGVzW2N1cnJlbnRJbmRleF07XG5cblx0XHRcdGNvbmRpdGlvbiA9IHR5cGVvZiBjb25kaXRpb24gPT09ICdmdW5jdGlvbicgPyBjb25kaXRpb24oKSA6IGNvbmRpdGlvbjtcblxuXHRcdFx0Ly8gY29uc29sZS5sb2coY3VycmVudE5vZGUsIGNvbmRpdGlvbiAmJiAhZm91bmRDb25kaXRpb24pO1xuXHRcdFx0aWYoY29uZGl0aW9uICYmICFmb3VuZENvbmRpdGlvbikge1xuXHRcdFx0XHRmb3VuZENvbmRpdGlvbiA9IHRydWU7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdzaG93JywgcGFyZW50LmNoaWxkTm9kZXNbY3VycmVudEluZGV4XSwgc2l6ZSk7XG5cdFx0XHRcdGlmKGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkNPTU1FTlRfTk9ERSkge1xuXHRcdFx0XHRcdC8vICByZW5kZXJcblx0XHRcdFx0XHRsZXQgbmV3Tm9kZSA9IGNvbXBvbmVudC5yKGguYmluZChjb250ZXh0KSk7XG5cdFx0XHRcdFx0Y3VycmVudE5vZGUucmVwbGFjZVdpdGgobmV3Tm9kZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gaHlkcmF0ZVxuXHRcdFx0XHRcdG1hcmtBc1JlYWR5KGN1cnJlbnROb2RlKTtcblx0XHRcdFx0XHRoeWRyYXRlKGNvbnRleHQsIGN1cnJlbnROb2RlLCBjb21wb25lbnQuaCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdbaGlkZV0nLCBwYXJlbnQuY2hpbGROb2RlcywgY3VycmVudEluZGV4LCBzaXplKTtcblx0XHRcdFx0aGlkZU5vZGVzKHBhcmVudC5jaGlsZE5vZGVzLCBjdXJyZW50SW5kZXgsIHNpemUpO1xuXHRcdFx0fVxuXG5cdFx0XHRjdXJyZW50SW5kZXggKz0gc2l6ZTtcblx0XHRcdC8vIGNvbnNvbGUud2FybihjdXJyZW50Tm9kZSwgY3VycmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nKVxuXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhjdXJyZW50Tm9kZSwgY29uZGl0aW9uLCAnc2tpcCcpO1xuXG5cdFx0XHRcblx0XHR9XG5cdH0pO1xuXHRcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZUxvb3AoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0bGV0IGNvbmRpdGlvbiA9IGFyZ3MuYztcblx0bGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdGxldCBwYXJlbnRDaGlsZHJlbiA9IHBhcmVudE5vZGUuY2hpbGROb2RlcztcblxuXHRtYXAoY29udGV4dCwgYXJncy5jLCBhcmdzLmssIChpdGVtLCBrZXkpID0+IHtcblx0XHRcblx0XHRsZXQgbm9kZSA9IGFyZ3MucihoLmJpbmQoY29udGV4dCksIGl0ZW0sIGtleSk7XG5cblx0XHRyZXR1cm4gbm9kZTtcdFxuXHR9LCAocmVnaXN0ZXJIeWRyYXRpb24pID0+IHtcblx0XHRsZXQgaXRlbXMgPSBhcmdzLmMoKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBub2RlID0gcGFyZW50Q2hpbGRyZW5baV07XG5cdFx0XHRsZXQgaXRlbSA9IGl0ZW1zW2ldO1xuXHRcdFx0bGV0IGl0ZW1LZXkgPSBhcmdzLmsoaXRlbSwgaSk7XG5cblx0XHRcdGlmKG5vZGUpIHtcblx0XHRcdFx0aWYobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JykgPT0gaXRlbUtleSkge1xuXHRcdFx0XHRcdG1hcmtBc1JlYWR5KG5vZGUpO1xuXHRcdFx0XHRcdGh5ZHJhdGUoY29udGV4dCwgbm9kZSwgYXJncy5oKGl0ZW0sIGkpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZWdpc3Rlckh5ZHJhdGlvbihpdGVtLCBpLCBub2RlKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHJlZywgaXRlbSwgaSwgbm9kZSk7XG5cdFx0fVxuXHR9LCBub2RlLnBhcmVudE5vZGUpO1xuXG59XG5cbi8qKlxuICogTWF5YmUgbmVlZCBzYW1lIGh5ZHJhdGlvbiBhbGdvcml0aG0gYXMgd2l0aCBwcm9wc1xuICogU2tpcCBmaXJzdCB0aW1lIGh5ZHJhdGlvbiA/Pz9cbiAqL1xuZnVuY3Rpb24gaHlkcmF0ZVRleHQoY29udGV4dCwgbm9kZSwgYXJncylcbntcblx0aWYoYXJncy50ID09PSBfKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdFxuXHRhcGkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRhcGkuaW5zZXJ0KG5vZGUsIGFyZ3MudCgpLCBudWxsKTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gZ2V0U2xvdE5vZGUoZWwsIHRhZywgcGF0aClcbntcblx0bGV0IG5vZGUgPSBlbDtcblxuXHRmb3IgKHZhciBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcblx0XHRub2RlID0gbm9kZS5jaGlsZE5vZGVzW3BhdGhbaV1dO1xuXHR9XG5cblx0cmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlU2xvdHMoY29udGV4dCwgZWwsIG9wdHMgPSB7fSwgc2xvdHMpXG57XG5cdC8vIHJldHVybjtcblx0Ly8gSHlkcmF0ZSBwcm9wcyBvZiBtYWluIE5vZGVcblx0Ly8gaHlkcmF0ZVByb3BzKGNvbnRleHQsIGVsLCBvcHRzKTtcblx0XG5cdGxldCBiaW5kZWROb2RlcyA9IHt9XG5cblx0bGV0IHNsb3REYXRhID0gY29udGV4dC5fc2xvdHNEYXRhO1xuXG5cdC8vIEZpbmQgc2xvdCBiaW5kaW5nIG5vZGVzXG5cdGZvcihsZXQga2V5IGluIHNsb3RzKSB7XG5cdFx0aWYoc2xvdERhdGFba2V5XSkge1xuXHRcdFx0bGV0IG5vZGUgPSBnZXRTbG90Tm9kZShlbCwgc2xvdERhdGFba2V5XS50YWcsIHNsb3REYXRhW2tleV0ucGF0aCk7XG5cdFx0XHRiaW5kZWROb2Rlc1trZXldID0gbm9kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyAke2tleX0gc2xvdCBuYW1lc3BhY2UgZGVmaW5lZGApO1xuXHRcdH1cblx0fVxuXG5cdC8vIEh5ZHJhdGUgc2xvdHMgcGVyIGJpbmRlZCB0YWdcblx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcblx0XHRsZXQgZGF0YSA9IHNsb3REYXRhW2tleV07XG5cdFx0bGV0IG5vZGUgPSBiaW5kZWROb2Rlc1trZXldO1xuXHRcdGxldCBjaGlsZHJlblNsb3RzID0gc2xvdHNba2V5XTtcblx0XHRsZXQgc3RhcnROb2RlSW5kZXggPSBkYXRhLmluZGV4O1xuXG5cdFx0aWYodHlwZW9mIG5vZGUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oZWwsIG9wdHMsIHNsb3REYXRhLCBlbFswXSk7XG5cdFx0fVxuXG5cdFx0aWYoY2hpbGRyZW5TbG90cy5sZW5ndGggPiBub2RlLmxlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdTbG90IGh5ZHJhdGlvbiBsZW5ndGggbWlzbWF0Y2gnKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gc3RhcnROb2RlSW5kZXg7IGkgPCBjaGlsZHJlblNsb3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhub2RlLmNoaWxkTm9kZXNbaV0sIGNoaWxkcmVuU2xvdHNbaV0pXG5cdFx0XHRoeWRyYXRlKGNvbnRleHQsIG5vZGUuY2hpbGROb2Rlc1tpXSwgY2hpbGRyZW5TbG90c1tpXSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQ29udGV4dCBzZXR1cFxuICovXG5mdW5jdGlvbiByZWdpc3RlckNoaWxkcmVuKHBhcmVudCwgY2hpbGQpXG57XG5cdGlmKGNoaWxkLl9mdW5jdGlvbmFsKSB7XG5cdFx0cGFyZW50LmFkZENoaWxkcmVuKF8pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBhcmVudC5hZGRDaGlsZHJlbihjaGlsZCk7XG5cdGNoaWxkLnNldFBhcmVudChwYXJlbnQpO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlVGFnKGNvbnRleHQsIG5vZGUsIGFyZ3MpXG57XG5cdGxldCBlbCA9IGFyZ3MudCxcblx0XHRvcHRzID0gYXJncy5vLFxuXHRcdGNoaWxkcmVuID0gYXJncy5jO1xuXG5cdGlmKCFTaW51b3VzLmhhc0NvbXBvbmVudChlbCkpIHtcblx0XHRoeWRyYXRlSChjb250ZXh0LCBub2RlLCBvcHRzLCBjaGlsZHJlbik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGNvbXBvbmVudCA9IFNpbnVvdXMuZ2V0SHlkcmF0ZUNvbXBvbmVudChlbCwgb3B0cyk7XG5cblx0aWYoY29tcG9uZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHRjb250ZXh0LmFkZENoaWxkcmVuKGNvbXBvbmVudCk7XG5cblx0aWYoY29tcG9uZW50Ll9mdW5jdGlvbmFsKSB7XG5cdFx0bGV0IG5ld0FyZ3MgPSBjb21wb25lbnQuaHlkcmF0ZSh7XG5cdFx0XHRfc2xvdHM6IG9wdHMuJHNsb3RzLFxuXHRcdH0pO1xuXG5cdFx0aWYob3B0cy4kc2xvdHMpIHtcblx0XHRcdGh5ZHJhdGVTbG90cyhjb21wb25lbnQsIG5vZGUsIG9wdHMsIG9wdHMuJHNsb3RzKTtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLmxvZyhvcHRzKVxuXHRcdGh5ZHJhdGUoY29udGV4dCwgbm9kZSwgbmV3QXJncyk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb21wb25lbnQucGFzc1Byb3BzKG9wdHMucHJvcHMpO1xuXHRjb21wb25lbnQucGFzc09wdGlvbnMob3B0cyk7XG5cblx0aWYob3B0cy4kc2xvdHMpIHtcblx0XHRoeWRyYXRlU2xvdHMoY29tcG9uZW50LCBub2RlLCBvcHRzLCBvcHRzLiRzbG90cyk7XG5cdH1cblxuXHRub2RlLiRzID0gY29tcG9uZW50O1xuXHQvLyBjb25zb2xlLmxvZyhjb21wb25lbnQsIG5vZGUpXG5cblx0cmV0dXJuIGh5ZHJhdGUoY29tcG9uZW50LCBub2RlLCBjb21wb25lbnQuaHlkcmF0ZShjb21wb25lbnQpKTtcbn1cblxuLyoqXG4gKiBNYWluIGh5ZHJhdGlvbiBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBoeWRyYXRlKGNvbnRleHQsIG5vZGUsIGFyZ3MgPSBudWxsKVxue1xuXHQvLyByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHtcblx0XHRoeWRyYXRlSWRsZShjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0Ly8gfSwge1xuXHQvLyBcdHRpbWVvdXQ6IDAsXG5cdC8vIFx0cmVhZDogdHJ1ZVxuXHQvLyB9KTtcbn1cblxuZnVuY3Rpb24gbWFya0FzUmVhZHkobm9kZSlcbntcblx0bm9kZS5faHlkcmF0ZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBoeWRyYXRlSWRsZShjb250ZXh0LCBub2RlLCBhcmdzKVxue1xuXHRpZihhcmdzID09PSBudWxsIHx8IG5vZGUgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnaCcpIHtcblx0XHQvLyBhcmdzLm9bJ2RhdGEtaHlkcmF0ZWQnXSA9IHRydWU7XG5cdFx0Ly8gYXJncy5vWydfcyddID0gdHJ1ZTtcblx0XHRoeWRyYXRlVGFnKGNvbnRleHQsIG5vZGUsIGFyZ3MpO1xuXHR9XG5cblx0aWYoYXJncy5fdCA9PT0gJ3QnKSB7XG5cdFx0aHlkcmF0ZVRleHQoY29udGV4dCwgbm9kZSwgYXJncyk7XG5cdH1cblxuXHRpZihhcmdzLl90ID09PSAnbG9vcCcpIHtcblx0XHRoeWRyYXRlTG9vcChjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXG5cdGlmKGFyZ3MuX3QgPT09ICdzdGF0ZW1lbnQnKSB7XG5cdFx0aHlkcmF0ZVN0YXRlbWVudChjb250ZXh0LCBub2RlLCBhcmdzKTtcblx0fVxuXHRcblx0cmV0dXJuIF87XG5cdFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRIeWRyYXRpb24oY29tcG9uZW50LCBoeWRyYXRpb25Sb290LCB0aW1lQmVuY2htYXJrID0gKCkgPT4ge30sIGNhbGxiYWNrID0gbnVsbClcbntcblx0bG9hZENvbXBvbmVudChjb21wb25lbnQsIChpbnN0YW5jZSkgPT4ge1xuXG5cdFx0dGltZUJlbmNobWFyaygnSHlkcmF0aW9uJyk7XG5cblx0XHRsZXQgdHJlZSA9IFtpbnN0YW5jZV07XG5cblx0XHRTaW51b3VzLmNsZWFySElEKCk7XG5cblx0XHQvLyBsZXQgY29ubmVjdGVkTm9kZSA9IGZpbHRlckNoaWxkTm9kZXMoaHlkcmF0aW9uUm9vdCk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjb21wb25lbnQgPSB0cmVlW2ldO1xuXHRcdFx0bGV0IG5vZGUgPSBoeWRyYXRpb25Sb290LmNoaWxkTm9kZXNbaV07XG5cdFx0XHRsZXQgaHlkcmF0aW9uID0gY29tcG9uZW50Lmh5ZHJhdGUoY29tcG9uZW50KTtcblx0XHRcdFxuXHRcdFx0aHlkcmF0ZShjb21wb25lbnQsIG5vZGUsIGh5ZHJhdGlvbik7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGNvbnNvbGUubG9nKGluc3RhbmNlKTtcblx0XHRpbnN0YW5jZS5ob29rKCdtb3VudGVkJyk7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soaW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHRpbWVCZW5jaG1hcmsoJ0h5ZHJhdGlvbicpO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9KTtcblxufVxuXG4vKipcbiAqIEZpbHRlciBvdXQgd2hpdGVzcGFjZSB0ZXh0IG5vZGVzIHVubGVzcyBpdCBoYXMgYSBub3NraXAgaW5kaWNhdG9yLlxuICpcbiAqIEBwYXJhbSAge05vZGV9IHBhcmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZpbHRlckNoaWxkTm9kZXMocGFyZW50KSB7XG5cdHJldHVybiBwYXJlbnQuY2hpbGROb2Rlcztcblx0Ly8gY29uc29sZS53YXJuKHBhcmVudCwgcGFyZW50LmNoaWxkTm9kZXMpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKS5maWx0ZXIoXG4gICAgICAgIGVsID0+IGVsLm5vZGVUeXBlICE9PSAzIHx8IGVsLmRhdGEudHJpbSgpIHx8IGVsLl9ub3NraXBcbiAgICApO1xufVxuIl19