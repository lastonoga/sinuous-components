"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isNonPhrasingTag = exports.HID = void 0;

var _attrs = require("./attrs");

var _helpers = require("../helpers");

var _parseFunctions = require("./parseFunctions");

var _expression = require("./expression");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HID = 0;
exports.HID = HID;
var isNonPhrasingTag = ['address', 'article', 'aside', 'base', 'blockquote', 'body', 'caption', 'col', 'colgroup', 'dd', 'details', 'dialog', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'legend', 'li', 'menuitem', 'meta', 'optgroup', 'option', 'param', 'rp', 'rt', 'source', 'style', 'summary', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'template', 'br', 'span', 'p', 'ParserBody', 'slot'];
exports.isNonPhrasingTag = isNonPhrasingTag;
var IF_STATEMENT_STARTED = false;
/**
 * @return Interface {
 *   Code
 *   Length
 * }
 */

function makeLoop(node, context, Loop, condition, returnObject, _ref) {
  var el = _ref.el,
      options = _ref.options,
      children = _ref.children,
      renderOptions = _ref.renderOptions,
      renderChildren = _ref.renderChildren;
  var args = Loop.args;
  var componentRenderTag = getComponentCode(el, renderOptions, renderChildren, false);
  var componentHydrateTag = getComponentCode(el, options, children, true);
  var key = Loop.rawArgs[1];

  if (!node.attrs[':key']) {
    console.warn('Key attribute is required for loop statement');
  } else {
    key = (0, _attrs.handleAttrsValue)(context, node.attrs[':key'], false).value;
  }

  if (returnObject) {
    return "{\n\t\t\t_t: 'loop',\n\t\t\tc: " + condition + ",\n\t\t\tk: (" + args + ") => { return " + key + "; },\n\t\t\th: (" + args + ") => { return " + componentHydrateTag + "; },\n\t\t\tr: (h, " + args + ") => { return " + componentRenderTag + "; },\n\t\t}";
  }

  return "loop(ctx, " + condition + ", (" + args + ") => { return " + key + "; }, (" + args + ") => { return " + componentRenderTag + "; })";
}

function makeStatement(context, Statement, condition, returnObject, _ref2) {
  var el = _ref2.el,
      options = _ref2.options,
      children = _ref2.children,
      renderOptions = _ref2.renderOptions,
      renderChildren = _ref2.renderChildren;
  var length = getComponentSize(el, options, children);
  var componentRenderTag = getComponentCode(el, renderOptions, renderChildren, false);
  var componentHydrateTag = getComponentCode(el, options, children, true);
  var code = '';

  if (Statement.start) {
    if (returnObject) {
      code += "{ _t: 'statement', a: [";
    } else {
      code += "statement(";
    }
  }

  if (returnObject) {
    code += "\n\t\t" + condition.value + ",\n\t\t" + length + ", {\n\t\t\th: " + componentHydrateTag + ",\n\t\t\tr: (h) => { return " + componentRenderTag + "; }\n\t\t}";
  } else {
    code += " " + condition.value + ", " + length + ", () => { return " + componentRenderTag + " }";
  }

  if (Statement.end) {
    if (returnObject) {
      code += "]}";
    } else {
      code += ")";
    }
  }

  return code;
}

function getComponentCode(tag, options, children, returnObject, isComponent) {
  if (children === void 0) {
    children = [];
  }

  if (returnObject === void 0) {
    returnObject = false;
  }

  if (isComponent === void 0) {
    isComponent = false;
  }

  if (tag === 'template') {
    return "[" + children.join(',') + "]";
  }

  if (returnObject) {
    return "{\n\t\t\t_t: 'h',\n\t\t\tt: '" + tag + "',\n\t\t\to: " + options + ",\n\t\t\tc: [" + children.join(',') + "],\n\t\t}";
  }

  return "h('" + tag + "', " + options + ", [" + children.join(',') + "])";
}

function getComponentSize(tag, options, children) {
  if (children === void 0) {
    children = [];
  }

  if (tag === 'template') {
    return children.length;
  }

  return 1;
}
/**
 * @return Interface {
 *   value
 *   stateful
 * }
 */


function handleTag(tag, options, children, returnObject) {
  if (children === void 0) {
    children = [];
  }

  return getComponentCode(tag, options, children, returnObject);
}

function parseSlotAttrs(node) {
  var name = 'default';
  var tag = null;

  if (node.tag === 'slot') {
    name = node.attrs['name'] || 'default';
    tag = node.attrs['tag'] || 'span';
  }

  if (tag !== null) {
    tag = "'" + tag + "'";
  }

  return {
    name: name,
    tag: tag
  };
}

var Node = /*#__PURE__*/function () {
  function Node(_ref3) {
    var _ref3$tag = _ref3.tag,
        tag = _ref3$tag === void 0 ? null : _ref3$tag,
        _ref3$attrs = _ref3.attrs,
        attrs = _ref3$attrs === void 0 ? null : _ref3$attrs,
        _ref3$children = _ref3.children,
        children = _ref3$children === void 0 ? [] : _ref3$children;
    // let { dynamicOptions, staticOptions } = parseOptions(attrs);
    this.hid = exports.HID = HID = +HID + 1;
    this.tag = tag;
    this.attrs = attrs;
    this.children = children;
    this.prevSibling = null;
    this.nextSibling = null;
    this.parent = null; // if

    this.if_statement = false;
    this.index = 0;
  }

  var _proto = Node.prototype;

  _proto.appendChild = function appendChild(node) {
    node.index = this.children.length;
    node.parent = this;
    this.children.push(node);
  };

  _proto.getIndexPath = function getIndexPath() {
    var indexes = [];
    var node = this;
    var i = 0;

    while (node) {
      i++;
      indexes.push(node.index);
      node = node.parent;

      if (i > 10) {
        throw new Error('Loop problem');
      }
    }

    indexes.reverse();
    return indexes;
  };

  _proto.setSiblings = function setSiblings() {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i + 1]) {
        this.children[i].nextSibling = this.children[i + 1];
        this.children[i + 1].prevSibling = this.children[i];
      }

      if (this.children[i] instanceof Node) {
        this.children[i].setSiblings();
      }
    }
  };

  _proto.getSlots = function getSlots(indexes, isUnderComponent) {
    if (indexes === void 0) {
      indexes = [];
    }

    if (isUnderComponent === void 0) {
      isUnderComponent = false;
    }

    var slots = {};

    if (this.isComponent) {
      isUnderComponent = true;
    }

    for (var i = 0; i < this.children.length; i++) {
      var node = this.children[i];
      var nodeIndexes = indexes.concat([i]);

      if (node instanceof Node) {
        slots = _extends(slots, node.getSlots(nodeIndexes, isUnderComponent));

        if (node.isSlot && !isUnderComponent) {
          var name = node.attrs['name'] || 'default';
          var tag = node.attrs['tag'] || 'span';
          var startIndex = 0;

          if (tag === null) {
            startIndex = i;
            nodeIndexes.pop();
          } // console.log('TAAAAAG', nodeIndexes, node.attrs['tag'])


          slots[name] = {
            path: nodeIndexes,
            tag: tag,
            index: startIndex
          };
        }
      }
    }

    return slots;
  };

  _proto.getOptions = function getOptions(context, slots, shouldSlotsHydrate, hydrate, root) {
    if (context === void 0) {
      context = null;
    }

    if (hydrate === void 0) {
      hydrate = false;
    }

    if (root === void 0) {
      root = false;
    }

    var _parseAttrs = (0, _attrs.parseAttrs)(context, this.attrs, hydrate),
        options = _parseAttrs.options,
        shouldOptionsHydrate = _parseAttrs.shouldOptionsHydrate; // Handle slots for Component children


    if (this.isComponent && Object.keys(slots).length > 0) {
      var value = '';

      for (var key in slots) {
        value += "'" + key + "': [" + slots[key].join(',') + "],";
      }

      if (hydrate && shouldSlotsHydrate || !hydrate) {
        options += "$slots: { " + value + " },";
      }
    } // Is component stateful


    if (hydrate && shouldOptionsHydrate) {
      options += "_s: true,";
    }

    options = "{" + options + "}";

    if (root) {
      options = "[ctx.options, " + options + "]";
    }

    return {
      options: options,
      shouldOptionsHydrate: shouldOptionsHydrate
    };
  };

  _proto.toAST = function toAST(context, hydrate, root) {
    if (context === void 0) {
      context = null;
    }

    if (hydrate === void 0) {
      hydrate = false;
    }

    if (root === void 0) {
      root = false;
    }

    var code = '';
    var children = [];
    var renderChildren = [];
    var shouldHydarate = false;
    var shouldSlotsHydrate = false;
    var render = !hydrate; // let isCallExpression = false;

    var Statement = (0, _parseFunctions.parseStatement)(this);
    var Slot = (0, _parseFunctions.parseSlot)(this);
    var Loop = (0, _parseFunctions.parseLoop)(this); // if(Statement.is) {
    // 	isCallExpression = true;
    // }

    var slots = {};
    /**
     * Translate children to hyperscript
     * @param  {[type]} var i             [description]
     * @return {[type]}     [description]
     */

    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i]; // For loops and statements | Where hydration and render needs

      renderChildren.push(child.toAST(context, false, false).value);

      var _child$toAST = child.toAST(context, hydrate),
          value = _child$toAST.value,
          statefull = _child$toAST.statefull; // console.log('[child]', child, statefull);


      if (statefull) {
        shouldHydarate = true;
      } // Parse slots if component


      if (this.isComponent) {
        var _parseSlotAttrs = parseSlotAttrs(child),
            name = _parseSlotAttrs.name;

        if (!slots[name]) {
          slots[name] = [];
        } // console.log(name, i,statefull)


        slots[name].push(value);

        if (value !== _helpers._) {
          shouldSlotsHydrate = true;
        }
      } else {
        // If not append child
        children.push(value);
      }
    }

    var _this$getOptions = this.getOptions(context, slots, shouldSlotsHydrate, hydrate, root),
        options = _this$getOptions.options,
        shouldOptionsHydrate = _this$getOptions.shouldOptionsHydrate;

    var renderOptions = this.getOptions(context, slots, shouldSlotsHydrate, false, root).options;

    if (shouldOptionsHydrate) {
      shouldHydarate = true;
    }

    shouldHydarate = this.isComponent || shouldHydarate;
    var componentTag = getComponentCode(this.tag, options, children, hydrate, this.isComponent); // Make loop from component

    if (Loop.is) {
      var condition = (0, _expression.expression)(context, Loop.condition, false);

      if (condition.statefull) {
        shouldHydarate = true;
      }

      componentTag = makeLoop(this, context, Loop, condition.value, hydrate, {
        el: this.tag,
        options: options,
        children: children,
        renderOptions: renderOptions,
        renderChildren: renderChildren
      });
    } // Statement render


    if (Statement.is) {
      // console.log(renderChildren);
      var _condition = (0, _expression.expression)(context, Statement.condition, false);

      code += makeStatement(context, Statement, _condition, hydrate, {
        el: this.tag,
        options: options,
        children: children,
        renderOptions: renderOptions,
        renderChildren: renderChildren
      });
      shouldHydarate = true; // Slot render
    } else if (Slot.is) {
      var _parseSlotAttrs2 = parseSlotAttrs(this),
          _name = _parseSlotAttrs2.name,
          tag = _parseSlotAttrs2.tag;

      if (Slot.callExpression) {
        var attrs = _extends({}, this.attrs);

        delete attrs.name;
        delete attrs.tag;
        code += "slot(ctx, h, '" + _name + "', " + tag + ", " + options + ", [" + children.join(',') + "])";
      } else {
        code += "" + children.join(',');
      }
    } else {
      code += componentTag;
    } // console.log(hydrate, shouldHydarate, isCallExpression, code)


    if (hydrate && !shouldHydarate) {
      return {
        value: _helpers._,
        statefull: false
      };
    }

    return {
      value: code,
      statefull: shouldHydarate
    };
  };

  _createClass(Node, [{
    key: "isComponent",
    get: function get() {
      return !isNonPhrasingTag.includes(this.tag);
    }
  }, {
    key: "isInsideComponent",
    get: function get() {
      var node = this;
      var i = 0;
      var isInsideComponent = false;

      while (node) {
        i++;

        if (node.isComponent) {
          isInsideComponent = true;
          break;
        }

        node = node.parent;

        if (i > 100) {
          throw new Error('Loop problem');
        }
      }

      return isInsideComponent;
    }
  }, {
    key: "isSlot",
    get: function get() {
      return this.tag === 'slot';
    }
  }]);

  return Node;
}();

exports.default = Node;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9Ob2RlLmpzIl0sIm5hbWVzIjpbIkhJRCIsImlzTm9uUGhyYXNpbmdUYWciLCJJRl9TVEFURU1FTlRfU1RBUlRFRCIsIm1ha2VMb29wIiwibm9kZSIsImNvbnRleHQiLCJMb29wIiwiY29uZGl0aW9uIiwicmV0dXJuT2JqZWN0IiwiZWwiLCJvcHRpb25zIiwiY2hpbGRyZW4iLCJyZW5kZXJPcHRpb25zIiwicmVuZGVyQ2hpbGRyZW4iLCJhcmdzIiwiY29tcG9uZW50UmVuZGVyVGFnIiwiZ2V0Q29tcG9uZW50Q29kZSIsImNvbXBvbmVudEh5ZHJhdGVUYWciLCJrZXkiLCJyYXdBcmdzIiwiYXR0cnMiLCJjb25zb2xlIiwid2FybiIsInZhbHVlIiwibWFrZVN0YXRlbWVudCIsIlN0YXRlbWVudCIsImxlbmd0aCIsImdldENvbXBvbmVudFNpemUiLCJjb2RlIiwic3RhcnQiLCJlbmQiLCJ0YWciLCJpc0NvbXBvbmVudCIsImpvaW4iLCJoYW5kbGVUYWciLCJwYXJzZVNsb3RBdHRycyIsIm5hbWUiLCJOb2RlIiwiaGlkIiwicHJldlNpYmxpbmciLCJuZXh0U2libGluZyIsInBhcmVudCIsImlmX3N0YXRlbWVudCIsImluZGV4IiwiYXBwZW5kQ2hpbGQiLCJwdXNoIiwiZ2V0SW5kZXhQYXRoIiwiaW5kZXhlcyIsImkiLCJFcnJvciIsInJldmVyc2UiLCJzZXRTaWJsaW5ncyIsImdldFNsb3RzIiwiaXNVbmRlckNvbXBvbmVudCIsInNsb3RzIiwibm9kZUluZGV4ZXMiLCJjb25jYXQiLCJpc1Nsb3QiLCJzdGFydEluZGV4IiwicG9wIiwicGF0aCIsImdldE9wdGlvbnMiLCJzaG91bGRTbG90c0h5ZHJhdGUiLCJoeWRyYXRlIiwicm9vdCIsInNob3VsZE9wdGlvbnNIeWRyYXRlIiwiT2JqZWN0Iiwia2V5cyIsInRvQVNUIiwic2hvdWxkSHlkYXJhdGUiLCJyZW5kZXIiLCJTbG90IiwiY2hpbGQiLCJzdGF0ZWZ1bGwiLCJfIiwiY29t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RCxHQUFMLEtBQWEsTUFBcEI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlQXR0cnMsIGhhbmRsZUF0dHJzVmFsdWUgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCB7IF8gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHBhcnNlU3RhdGVtZW50LCBwYXJzZUxvb3AsIHBhcnNlU2xvdCB9IGZyb20gJy4vcGFyc2VGdW5jdGlvbnMnO1xuaW1wb3J0IHsgZXhwcmVzc2lvbiB9IGZyb20gJy4vZXhwcmVzc2lvbic7XG5cbmV4cG9ydCB2YXIgSElEID0gMDtcblxuZXhwb3J0IGNvbnN0IGlzTm9uUGhyYXNpbmdUYWcgPSBbXG5cdCdhZGRyZXNzJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYmFzZScsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnY2FwdGlvbicsICdjb2wnLCAnY29sZ3JvdXAnLFxuXHQnZGQnLCAnZGV0YWlscycsICdkaWFsb2cnLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2Zvb3RlcicsXG5cdCdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2xlZ2VuZCcsXG5cdCdsaScsICdtZW51aXRlbScsICdtZXRhJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdwYXJhbScsICdycCcsICdydCcsICdzb3VyY2UnLCAnc3R5bGUnLCAnc3VtbWFyeScsXG5cdCd0Ym9keScsICd0ZCcsICd0Zm9vdCcsICd0aCcsICd0aGVhZCcsICd0aXRsZScsICd0cicsICd0cmFjaycsICd0ZW1wbGF0ZScsICdicicsICdzcGFuJywgJ3AnLCAnUGFyc2VyQm9keScsICdzbG90J1xuXTtcblxudmFyIElGX1NUQVRFTUVOVF9TVEFSVEVEID0gZmFsc2U7XG5cbi8qKlxuICogQHJldHVybiBJbnRlcmZhY2Uge1xuICogICBDb2RlXG4gKiAgIExlbmd0aFxuICogfVxuICovXG5mdW5jdGlvbiBtYWtlTG9vcChub2RlLCBjb250ZXh0LCBMb29wLCBjb25kaXRpb24sIHJldHVybk9iamVjdCwgeyBlbCwgb3B0aW9ucywgY2hpbGRyZW4sIHJlbmRlck9wdGlvbnMsIHJlbmRlckNoaWxkcmVuIH0pXG57XG5cdGxldCBhcmdzID0gTG9vcC5hcmdzO1xuXG5cdGxldCBjb21wb25lbnRSZW5kZXJUYWcgPSBnZXRDb21wb25lbnRDb2RlKGVsLCByZW5kZXJPcHRpb25zLCByZW5kZXJDaGlsZHJlbiwgZmFsc2UpO1xuXHRsZXQgY29tcG9uZW50SHlkcmF0ZVRhZyA9IGdldENvbXBvbmVudENvZGUoZWwsIG9wdGlvbnMsIGNoaWxkcmVuLCB0cnVlKTtcblx0XG5cdGxldCBrZXkgPSBMb29wLnJhd0FyZ3NbMV07XG5cblx0aWYoIW5vZGUuYXR0cnNbJzprZXknXSkge1xuXHRcdGNvbnNvbGUud2FybignS2V5IGF0dHJpYnV0ZSBpcyByZXF1aXJlZCBmb3IgbG9vcCBzdGF0ZW1lbnQnKTtcblx0fSBlbHNlIHtcblx0XHRrZXkgPSBoYW5kbGVBdHRyc1ZhbHVlKGNvbnRleHQsIG5vZGUuYXR0cnNbJzprZXknXSwgZmFsc2UpLnZhbHVlO1xuXHR9XG5cblx0aWYocmV0dXJuT2JqZWN0KSB7XG5cdFx0cmV0dXJuIGB7XG5cdFx0XHRfdDogJ2xvb3AnLFxuXHRcdFx0YzogJHsgY29uZGl0aW9uIH0sXG5cdFx0XHRrOiAoJHsgYXJncyB9KSA9PiB7IHJldHVybiAkeyBrZXkgfTsgfSxcblx0XHRcdGg6ICgkeyBhcmdzIH0pID0+IHsgcmV0dXJuICR7IGNvbXBvbmVudEh5ZHJhdGVUYWcgfTsgfSxcblx0XHRcdHI6IChoLCAkeyBhcmdzIH0pID0+IHsgcmV0dXJuICR7IGNvbXBvbmVudFJlbmRlclRhZyB9OyB9LFxuXHRcdH1gXG5cdH1cblxuXHRyZXR1cm4gYGxvb3AoY3R4LCAkeyBjb25kaXRpb24gfSwgKCR7IGFyZ3MgfSkgPT4geyByZXR1cm4gJHsga2V5IH07IH0sICgkeyBhcmdzIH0pID0+IHsgcmV0dXJuICR7IGNvbXBvbmVudFJlbmRlclRhZyB9OyB9KWBcbn1cblxuZnVuY3Rpb24gbWFrZVN0YXRlbWVudChjb250ZXh0LCBTdGF0ZW1lbnQsIGNvbmRpdGlvbiwgcmV0dXJuT2JqZWN0LCB7IGVsLCBvcHRpb25zLCBjaGlsZHJlbiwgcmVuZGVyT3B0aW9ucywgcmVuZGVyQ2hpbGRyZW4gfSlcbntcblx0bGV0IGxlbmd0aCA9IGdldENvbXBvbmVudFNpemUoZWwsIG9wdGlvbnMsIGNoaWxkcmVuKTtcblx0bGV0IGNvbXBvbmVudFJlbmRlclRhZyA9IGdldENvbXBvbmVudENvZGUoZWwsIHJlbmRlck9wdGlvbnMsIHJlbmRlckNoaWxkcmVuLCBmYWxzZSk7XG5cdGxldCBjb21wb25lbnRIeWRyYXRlVGFnID0gZ2V0Q29tcG9uZW50Q29kZShlbCwgb3B0aW9ucywgY2hpbGRyZW4sIHRydWUpO1xuXG5cdGxldCBjb2RlID0gJyc7XG5cblxuXHRpZihTdGF0ZW1lbnQuc3RhcnQpIHtcblx0XHRpZihyZXR1cm5PYmplY3QpIHtcdFxuXHRcdFx0Y29kZSArPSBgeyBfdDogJ3N0YXRlbWVudCcsIGE6IFtgO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2RlICs9IGBzdGF0ZW1lbnQoYDtcblx0XHR9XG5cdH1cblxuXHRpZihyZXR1cm5PYmplY3QpIHtcdFxuXHRcdGNvZGUgKz0gYFxuXHRcdCR7IGNvbmRpdGlvbi52YWx1ZSB9LFxuXHRcdCR7IGxlbmd0aCB9LCB7XG5cdFx0XHRoOiAkeyBjb21wb25lbnRIeWRyYXRlVGFnIH0sXG5cdFx0XHRyOiAoaCkgPT4geyByZXR1cm4gJHsgY29tcG9uZW50UmVuZGVyVGFnIH07IH1cblx0XHR9YDtcblx0fSBlbHNlIHtcblx0XHRjb2RlICs9IGAgJHsgY29uZGl0aW9uLnZhbHVlIH0sICR7IGxlbmd0aCB9LCAoKSA9PiB7IHJldHVybiAkeyBjb21wb25lbnRSZW5kZXJUYWcgfSB9YDtcblx0fVxuXG5cdGlmKFN0YXRlbWVudC5lbmQpIHtcblx0XHRpZihyZXR1cm5PYmplY3QpIHtcdFxuXHRcdFx0Y29kZSArPSBgXX1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2RlICs9IGApYDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY29kZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50Q29kZSh0YWcsIG9wdGlvbnMsIGNoaWxkcmVuID0gW10sIHJldHVybk9iamVjdCA9IGZhbHNlLCBpc0NvbXBvbmVudCA9IGZhbHNlKVxue1xuXHRpZih0YWcgPT09ICd0ZW1wbGF0ZScpIHtcblx0XHRyZXR1cm4gYFskeyBjaGlsZHJlbi5qb2luKCcsJykgfV1gO1xuXHR9XG5cblx0aWYocmV0dXJuT2JqZWN0KSB7XG5cdFx0cmV0dXJuIGB7XG5cdFx0XHRfdDogJ2gnLFxuXHRcdFx0dDogJyR7IHRhZyB9Jyxcblx0XHRcdG86ICR7IG9wdGlvbnMgfSxcblx0XHRcdGM6IFskeyBjaGlsZHJlbi5qb2luKCcsJykgfV0sXG5cdFx0fWBcblx0fVxuXHRcblx0cmV0dXJuIGBoKCckeyB0YWcgfScsICR7IG9wdGlvbnMgfSwgWyR7IGNoaWxkcmVuLmpvaW4oJywnKSB9XSlgO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRTaXplKHRhZywgb3B0aW9ucywgY2hpbGRyZW4gPSBbXSlcbntcblx0aWYodGFnID09PSAndGVtcGxhdGUnKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuLmxlbmd0aDtcblx0fVxuXG5cdHJldHVybiAxO1xufVxuXG4vKipcbiAqIEByZXR1cm4gSW50ZXJmYWNlIHtcbiAqICAgdmFsdWVcbiAqICAgc3RhdGVmdWxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaGFuZGxlVGFnKHRhZywgb3B0aW9ucywgY2hpbGRyZW4gPSBbXSwgcmV0dXJuT2JqZWN0KVxue1xuXHRyZXR1cm4gZ2V0Q29tcG9uZW50Q29kZSh0YWcsIG9wdGlvbnMsIGNoaWxkcmVuLCByZXR1cm5PYmplY3QpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVNsb3RBdHRycyhub2RlKVxue1xuXHRsZXQgbmFtZSA9ICdkZWZhdWx0Jztcblx0bGV0IHRhZyA9IG51bGw7XG5cblx0aWYobm9kZS50YWcgPT09ICdzbG90Jykge1xuXHRcdG5hbWUgPSBub2RlLmF0dHJzWyduYW1lJ10gfHwgJ2RlZmF1bHQnO1xuXHRcdHRhZyA9IG5vZGUuYXR0cnNbJ3RhZyddIHx8ICdzcGFuJztcblx0fVxuXG5cdGlmKHRhZyAhPT0gbnVsbCkge1xuXHRcdHRhZyA9IGAnJHt0YWd9J2A7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdG5hbWUsXG5cdFx0dGFnLFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlXG57XG5cdGNvbnN0cnVjdG9yKHsgdGFnID0gbnVsbCwgYXR0cnMgPSBudWxsLCBjaGlsZHJlbiA9IFtdIH0pXG5cdHtcblx0XHQvLyBsZXQgeyBkeW5hbWljT3B0aW9ucywgc3RhdGljT3B0aW9ucyB9ID0gcGFyc2VPcHRpb25zKGF0dHJzKTtcblxuXHRcdHRoaXMuaGlkID0gKytISUQ7XG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy5hdHRycyA9IGF0dHJzO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0XHRcblx0XHR0aGlzLnByZXZTaWJsaW5nID0gbnVsbDtcblx0XHR0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdFx0Ly8gaWZcblx0XHR0aGlzLmlmX3N0YXRlbWVudCA9IGZhbHNlO1xuXHRcdHRoaXMuaW5kZXggPSAwO1xuXHR9XG5cblx0Z2V0IGlzQ29tcG9uZW50KClcblx0e1xuXHRcdHJldHVybiAhaXNOb25QaHJhc2luZ1RhZy5pbmNsdWRlcyh0aGlzLnRhZyk7XG5cdH1cblxuXHRnZXQgaXNJbnNpZGVDb21wb25lbnQoKVxuXHR7XG5cdFx0bGV0IG5vZGUgPSB0aGlzO1xuXHRcdGxldCBpID0gMDtcblx0XHRsZXQgaXNJbnNpZGVDb21wb25lbnQgPSBmYWxzZTtcblxuXHRcdHdoaWxlKG5vZGUpIHtcblx0XHRcdGkrKztcblxuXHRcdFx0aWYobm9kZS5pc0NvbXBvbmVudCkge1xuXHRcdFx0XHRpc0luc2lkZUNvbXBvbmVudCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQ7XG5cblx0XHRcdGlmKGkgPiAxMDApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdMb29wIHByb2JsZW0nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaXNJbnNpZGVDb21wb25lbnQ7XG5cdH1cblxuXHRnZXQgaXNTbG90KClcblx0e1xuXHRcdHJldHVybiB0aGlzLnRhZyA9PT0gJ3Nsb3QnO1xuXHR9XG5cblx0YXBwZW5kQ2hpbGQobm9kZSlcblx0e1xuXHRcdG5vZGUuaW5kZXggPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcblx0XHRub2RlLnBhcmVudCA9IHRoaXM7XG5cdFx0dGhpcy5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuXHR9XG5cblx0Z2V0SW5kZXhQYXRoKClcblx0e1xuXHRcdGxldCBpbmRleGVzID0gW107XG5cdFx0bGV0IG5vZGUgPSB0aGlzO1xuXHRcdGxldCBpID0gMDtcblxuXHRcdHdoaWxlKG5vZGUpIHtcblx0XHRcdGkrKztcblxuXHRcdFx0aW5kZXhlcy5wdXNoKG5vZGUuaW5kZXgpO1xuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50O1xuXG5cdFx0XHRpZihpID4gMTApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdMb29wIHByb2JsZW0nKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpbmRleGVzLnJldmVyc2UoKTtcblxuXHRcdHJldHVybiBpbmRleGVzO1xuXHR9XG5cblx0c2V0U2libGluZ3MoKVxuXHR7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZih0aGlzLmNoaWxkcmVuW2kgKyAxXSkge1xuXHRcdFx0XHR0aGlzLmNoaWxkcmVuW2ldLm5leHRTaWJsaW5nID0gdGhpcy5jaGlsZHJlbltpICsgMV07XG5cdFx0XHRcdHRoaXMuY2hpbGRyZW5baSArIDFdLnByZXZTaWJsaW5nID0gdGhpcy5jaGlsZHJlbltpXTtcblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy5jaGlsZHJlbltpXSBpbnN0YW5jZW9mIE5vZGUpIHtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbltpXS5zZXRTaWJsaW5ncygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldFNsb3RzKGluZGV4ZXMgPSBbXSwgaXNVbmRlckNvbXBvbmVudCA9IGZhbHNlKVxuXHR7XG5cdFx0bGV0IHNsb3RzID0ge307XG5cblx0XHRpZih0aGlzLmlzQ29tcG9uZW50KSB7XG5cdFx0XHRpc1VuZGVyQ29tcG9uZW50ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBub2RlID0gdGhpcy5jaGlsZHJlbltpXTtcblx0XHRcdGxldCBub2RlSW5kZXhlcyA9IGluZGV4ZXMuY29uY2F0KFtpXSk7XG5cblx0XHRcdGlmKG5vZGUgaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRcdHNsb3RzID0gT2JqZWN0LmFzc2lnbihzbG90cywgbm9kZS5nZXRTbG90cyhub2RlSW5kZXhlcywgaXNVbmRlckNvbXBvbmVudCkpO1xuXG5cdFx0XHRcdGlmKG5vZGUuaXNTbG90ICYmICFpc1VuZGVyQ29tcG9uZW50KSB7XG5cdFx0XHRcdFx0bGV0IG5hbWUgPSBub2RlLmF0dHJzWyduYW1lJ10gfHwgJ2RlZmF1bHQnO1xuXHRcdFx0XHRcdGxldCB0YWcgPSBub2RlLmF0dHJzWyd0YWcnXSB8fCAnc3Bhbic7XG5cdFx0XHRcdFx0bGV0IHN0YXJ0SW5kZXggPSAwO1xuXG5cdFx0XHRcdFx0aWYodGFnID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRzdGFydEluZGV4ID0gaTtcblx0XHRcdFx0XHRcdG5vZGVJbmRleGVzLnBvcCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnVEFBQUFBRycsIG5vZGVJbmRleGVzLCBub2RlLmF0dHJzWyd0YWcnXSlcblx0XHRcdFx0XHRzbG90c1tuYW1lXSA9IHtcblx0XHRcdFx0XHRcdHBhdGg6IG5vZGVJbmRleGVzLFxuXHRcdFx0XHRcdFx0dGFnLFxuXHRcdFx0XHRcdFx0aW5kZXg6IHN0YXJ0SW5kZXgsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzbG90cztcblx0fVxuXG5cdGdldE9wdGlvbnMoY29udGV4dCA9IG51bGwsIHNsb3RzLCBzaG91bGRTbG90c0h5ZHJhdGUsIGh5ZHJhdGUgPSBmYWxzZSwgcm9vdCA9IGZhbHNlKVxuXHR7XG5cdFx0bGV0IHsgb3B0aW9ucywgc2hvdWxkT3B0aW9uc0h5ZHJhdGUgfSA9IHBhcnNlQXR0cnMoY29udGV4dCwgdGhpcy5hdHRycywgaHlkcmF0ZSk7XG5cdFx0XG5cdFx0Ly8gSGFuZGxlIHNsb3RzIGZvciBDb21wb25lbnQgY2hpbGRyZW5cblx0XHRpZih0aGlzLmlzQ29tcG9uZW50ICYmIE9iamVjdC5rZXlzKHNsb3RzKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSAnJztcblxuXHRcdFx0Zm9yKGxldCBrZXkgaW4gc2xvdHMpIHtcblx0XHRcdFx0dmFsdWUgKz0gYCcke2tleX0nOiBbJHsgc2xvdHNba2V5XS5qb2luKCcsJykgfV0sYFxuXHRcdFx0fVxuXG5cdFx0XHRpZigoaHlkcmF0ZSAmJiBzaG91bGRTbG90c0h5ZHJhdGUpIHx8ICFoeWRyYXRlKSB7XG5cdFx0XHRcdG9wdGlvbnMgKz0gYCRzbG90czogeyAkeyB2YWx1ZSB9IH0sYDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJcyBjb21wb25lbnQgc3RhdGVmdWxcblx0XHRpZihoeWRyYXRlICYmIHNob3VsZE9wdGlvbnNIeWRyYXRlKSB7XG5cdFx0XHRvcHRpb25zICs9IGBfczogdHJ1ZSxgO1xuXHRcdH1cblxuXHRcdG9wdGlvbnMgPSBgeyR7b3B0aW9uc319YDtcblxuXHRcdGlmKHJvb3QpIHtcblx0XHRcdG9wdGlvbnMgPSBgW2N0eC5vcHRpb25zLCAke29wdGlvbnN9XWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdG9wdGlvbnMsXG5cdFx0XHRzaG91bGRPcHRpb25zSHlkcmF0ZSxcblx0XHR9XG5cdH1cblxuXHR0b0FTVChjb250ZXh0ID0gbnVsbCwgaHlkcmF0ZSA9IGZhbHNlLCByb290ID0gZmFsc2UpXG5cdHtcblx0XHRsZXQgY29kZSA9ICcnO1xuXHRcdGxldCBjaGlsZHJlbiA9IFtdO1xuXHRcdGxldCByZW5kZXJDaGlsZHJlbiA9IFtdO1xuXHRcdGxldCBzaG91bGRIeWRhcmF0ZSA9IGZhbHNlO1xuXHRcdGxldCBzaG91bGRTbG90c0h5ZHJhdGUgPSBmYWxzZTtcblx0XHRsZXQgcmVuZGVyID0gIWh5ZHJhdGU7XG5cdFx0Ly8gbGV0IGlzQ2FsbEV4cHJlc3Npb24gPSBmYWxzZTtcblxuXHRcdGxldCBTdGF0ZW1lbnQgPSBwYXJzZVN0YXRlbWVudCh0aGlzKTtcblx0XHRsZXQgU2xvdCA9IHBhcnNlU2xvdCh0aGlzKTtcblx0XHRsZXQgTG9vcCA9IHBhcnNlTG9vcCh0aGlzKTtcblxuXHRcdC8vIGlmKFN0YXRlbWVudC5pcykge1xuXHRcdC8vIFx0aXNDYWxsRXhwcmVzc2lvbiA9IHRydWU7XG5cdFx0Ly8gfVxuXG5cdFx0bGV0IHNsb3RzID0ge307XG5cblx0XHQvKipcblx0XHQgKiBUcmFuc2xhdGUgY2hpbGRyZW4gdG8gaHlwZXJzY3JpcHRcblx0XHQgKiBAcGFyYW0gIHtbdHlwZV19IHZhciBpICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cblx0XHQgKiBAcmV0dXJuIHtbdHlwZV19ICAgICBbZGVzY3JpcHRpb25dXG5cdFx0ICovXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXG5cdFx0XHQvLyBGb3IgbG9vcHMgYW5kIHN0YXRlbWVudHMgfCBXaGVyZSBoeWRyYXRpb24gYW5kIHJlbmRlciBuZWVkc1xuXHRcdFx0cmVuZGVyQ2hpbGRyZW4ucHVzaChjaGlsZC50b0FTVChjb250ZXh0LCBmYWxzZSwgZmFsc2UpLnZhbHVlKTtcblxuXHRcdFx0bGV0IHsgdmFsdWUsIHN0YXRlZnVsbCB9ID0gY2hpbGQudG9BU1QoY29udGV4dCwgaHlkcmF0ZSk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnW2NoaWxkXScsIGNoaWxkLCBzdGF0ZWZ1bGwpO1xuXHRcdFx0aWYoc3RhdGVmdWxsKSB7XG5cdFx0XHRcdHNob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUGFyc2Ugc2xvdHMgaWYgY29tcG9uZW50XG5cdFx0XHRpZih0aGlzLmlzQ29tcG9uZW50KSB7XG5cdFx0XHRcdGxldCB7IG5hbWUgfSA9IHBhcnNlU2xvdEF0dHJzKGNoaWxkKTtcblxuXHRcdFx0XHRpZighc2xvdHNbbmFtZV0pIHtcblx0XHRcdFx0XHRzbG90c1tuYW1lXSA9IFtdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gY29uc29sZS5sb2cobmFtZSwgaSxzdGF0ZWZ1bGwpXG5cdFx0XHRcdHNsb3RzW25hbWVdLnB1c2godmFsdWUpO1xuXG5cdFx0XHRcdGlmKHZhbHVlICE9PSBfKSB7XG5cdFx0XHRcdFx0c2hvdWxkU2xvdHNIeWRyYXRlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSWYgbm90IGFwcGVuZCBjaGlsZFxuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblxuXHRcdGxldCB7IG9wdGlvbnMsIHNob3VsZE9wdGlvbnNIeWRyYXRlIH0gPSB0aGlzLmdldE9wdGlvbnMoY29udGV4dCwgc2xvdHMsIHNob3VsZFNsb3RzSHlkcmF0ZSwgaHlkcmF0ZSwgcm9vdCk7XG5cblx0XHRsZXQgcmVuZGVyT3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyhjb250ZXh0LCBzbG90cywgc2hvdWxkU2xvdHNIeWRyYXRlLCBmYWxzZSwgcm9vdCkub3B0aW9ucztcblx0XHRcblx0XHRpZihzaG91bGRPcHRpb25zSHlkcmF0ZSkge1xuXHRcdFx0c2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHNob3VsZEh5ZGFyYXRlID0gdGhpcy5pc0NvbXBvbmVudCB8fCBzaG91bGRIeWRhcmF0ZTtcblxuXHRcdGxldCBjb21wb25lbnRUYWcgPSBnZXRDb21wb25lbnRDb2RlKHRoaXMudGFnLCBvcHRpb25zLCBjaGlsZHJlbiwgaHlkcmF0ZSwgdGhpcy5pc0NvbXBvbmVudCk7XG5cblx0XHQvLyBNYWtlIGxvb3AgZnJvbSBjb21wb25lbnRcblx0XHRpZihMb29wLmlzKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gZXhwcmVzc2lvbihjb250ZXh0LCBMb29wLmNvbmRpdGlvbiwgZmFsc2UpO1xuXHRcdFx0XG5cdFx0XHRpZihjb25kaXRpb24uc3RhdGVmdWxsKSB7XG5cdFx0XHRcdHNob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29tcG9uZW50VGFnID0gbWFrZUxvb3AodGhpcywgY29udGV4dCwgTG9vcCwgY29uZGl0aW9uLnZhbHVlLCBoeWRyYXRlLCB7XG5cdFx0XHRcdGVsOiB0aGlzLnRhZyxcblx0XHRcdFx0b3B0aW9ucyxcblx0XHRcdFx0Y2hpbGRyZW4sXG5cdFx0XHRcdHJlbmRlck9wdGlvbnMsXG5cdFx0XHRcdHJlbmRlckNoaWxkcmVuLFxuXHRcdFx0fSlcblx0XHR9XG5cdFx0Ly8gU3RhdGVtZW50IHJlbmRlclxuXHRcdGlmKFN0YXRlbWVudC5pcykge1xuXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZW5kZXJDaGlsZHJlbik7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gZXhwcmVzc2lvbihjb250ZXh0LCBTdGF0ZW1lbnQuY29uZGl0aW9uLCBmYWxzZSk7XG5cdFx0XHRjb2RlICs9IG1ha2VTdGF0ZW1lbnQoY29udGV4dCwgU3RhdGVtZW50LCBjb25kaXRpb24sIGh5ZHJhdGUsIHtcblx0XHRcdFx0ZWw6IHRoaXMudGFnLFxuXHRcdFx0XHRvcHRpb25zLFxuXHRcdFx0XHRjaGlsZHJlbixcblx0XHRcdFx0cmVuZGVyT3B0aW9ucyxcblx0XHRcdFx0cmVuZGVyQ2hpbGRyZW4sXG5cdFx0XHR9KTtcblxuXHRcdFx0c2hvdWxkSHlkYXJhdGUgPSB0cnVlO1xuXHRcdC8vIFNsb3QgcmVuZGVyXG5cdFx0fSBlbHNlIGlmKFNsb3QuaXMpIHtcblx0XHRcdGxldCB7IG5hbWUsIHRhZyB9ID0gcGFyc2VTbG90QXR0cnModGhpcyk7XG5cblx0XHRcdGlmKFNsb3QuY2FsbEV4cHJlc3Npb24pIHtcblx0XHRcdFx0bGV0IGF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hdHRycyk7XG5cdFx0XHRcdFxuXHRcdFx0XHRkZWxldGUgYXR0cnMubmFtZTtcblx0XHRcdFx0ZGVsZXRlIGF0dHJzLnRhZztcblxuXHRcdFx0XHRjb2RlICs9IGBzbG90KGN0eCwgaCwgJyR7IG5hbWUgfScsICR7IHRhZyB9LCAkeyBvcHRpb25zIH0sIFskeyBjaGlsZHJlbi5qb2luKCcsJykgfV0pYDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvZGUgKz0gYCR7IGNoaWxkcmVuLmpvaW4oJywnKSB9YDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29kZSArPSBjb21wb25lbnRUYWc7XG5cdFx0fVxuXG5cdFxuXHRcdC8vIGNvbnNvbGUubG9nKGh5ZHJhdGUsIHNob3VsZEh5ZGFyYXRlLCBpc0NhbGxFeHByZXNzaW9uLCBjb2RlKVxuXHRcdGlmKGh5ZHJhdGUgJiYgIXNob3VsZEh5ZGFyYXRlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2YWx1ZTogXyxcblx0XHRcdFx0c3RhdGVmdWxsOiBmYWxzZSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiBjb2RlLFxuXHRcdFx0c3RhdGVmdWxsOiBzaG91bGRIeWRhcmF0ZSxcblx0XHR9O1xuXHR9XG59XG4iXX0=