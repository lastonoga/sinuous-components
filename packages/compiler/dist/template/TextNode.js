"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _attrs = require("./attrs");

var _helpers = require("../helpers");

var TextNode = /*#__PURE__*/function () {
  function TextNode(text) {
    this.text = text;
  }

  var _proto = TextNode.prototype;

  _proto.toAST = function toAST(context, hydrate, isCallExpression) {
    if (context === void 0) {
      context = null;
    }

    if (hydrate === void 0) {
      hydrate = false;
    }

    if (isCallExpression === void 0) {
      isCallExpression = false;
    }

    var _parseOptionValue = (0, _attrs.parseOptionValue)(context, '_t', this.text),
        value = _parseOptionValue.value,
        statefull = _parseOptionValue.statefull; // console.log(`t(${this.text})`, value, statefull)
    // console.log(value, value.substring(0, 2))


    if (hydrate && !statefull && !isCallExpression) {
      value = _helpers._;
    }

    if (hydrate) {
      value = "{\n\t\t\t\t_t: 't',\n\t\t\t\tt: " + value + "\n\t\t\t}";
    }

    return {
      value: value,
      statefull: statefull
    };
  };

  return TextNode;
}();

exports.default = TextNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9UZXh0Tm9kZS5qcyJdLCJuYW1lcyI6WyJUZXh0Tm9kZSIsInRleHQiLCJ0b0FTVCIsImNvbnRleHQiLCJoeWRyYXRlIiwiaXNDYWxsRXhwcmVzc2lvbiIsInZhbHVlIiwic3RhdGVmdWxsIiwiXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztJQUVxQkEsUTtBQUVwQixvQkFBWUMsSUFBWixFQUNBO0FBQ0MsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0E7Ozs7U0FFREMsSyxHQUFBLGVBQU1DLE9BQU4sRUFBc0JDLE9BQXRCLEVBQXVDQyxnQkFBdkMsRUFDQTtBQUFBLFFBRE1GLE9BQ047QUFETUEsTUFBQUEsT0FDTixHQURnQixJQUNoQjtBQUFBOztBQUFBLFFBRHNCQyxPQUN0QjtBQURzQkEsTUFBQUEsT0FDdEIsR0FEZ0MsS0FDaEM7QUFBQTs7QUFBQSxRQUR1Q0MsZ0JBQ3ZDO0FBRHVDQSxNQUFBQSxnQkFDdkMsR0FEMEQsS0FDMUQ7QUFBQTs7QUFBQSw0QkFDNEIsNkJBQWlCRixPQUFqQixFQUEwQixJQUExQixFQUFnQyxLQUFLRixJQUFyQyxDQUQ1QjtBQUFBLFFBQ09LLEtBRFAscUJBQ09BLEtBRFA7QUFBQSxRQUNjQyxTQURkLHFCQUNjQSxTQURkLEVBRUM7QUFFQTs7O0FBR0EsUUFBR0gsT0FBTyxJQUFJLENBQUNHLFNBQVosSUFBeUIsQ0FBQ0YsZ0JBQTdCLEVBQStDO0FBQzlDQyxNQUFBQSxLQUFLLEdBQUdFLFVBQVI7QUFDQTs7QUFFRCxRQUFHSixPQUFILEVBQVk7QUFDWEUsTUFBQUEsS0FBSyx3Q0FFRUEsS0FGRixjQUFMO0FBSUE7O0FBRUQsV0FBTztBQUNOQSxNQUFBQSxLQUFLLEVBQUxBLEtBRE07QUFFTkMsTUFBQUEsU0FBUyxFQUFUQTtBQUZNLEtBQVA7QUFJQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VPcHRpb25WYWx1ZSB9IGZyb20gJy4vYXR0cnMnO1xuaW1wb3J0IHsgXyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0Tm9kZVxue1xuXHRjb25zdHJ1Y3Rvcih0ZXh0KVxuXHR7XG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcblx0fVxuXG5cdHRvQVNUKGNvbnRleHQgPSBudWxsLCBoeWRyYXRlID0gZmFsc2UsIGlzQ2FsbEV4cHJlc3Npb24gPSBmYWxzZSlcblx0e1xuXHRcdGxldCB7IHZhbHVlLCBzdGF0ZWZ1bGwgfSA9IHBhcnNlT3B0aW9uVmFsdWUoY29udGV4dCwgJ190JywgdGhpcy50ZXh0KTtcblx0XHQvLyBjb25zb2xlLmxvZyhgdCgke3RoaXMudGV4dH0pYCwgdmFsdWUsIHN0YXRlZnVsbClcblxuXHRcdC8vIGNvbnNvbGUubG9nKHZhbHVlLCB2YWx1ZS5zdWJzdHJpbmcoMCwgMikpXG5cdFx0XG5cblx0XHRpZihoeWRyYXRlICYmICFzdGF0ZWZ1bGwgJiYgIWlzQ2FsbEV4cHJlc3Npb24pIHtcblx0XHRcdHZhbHVlID0gXztcblx0XHR9XG5cblx0XHRpZihoeWRyYXRlKSB7XG5cdFx0XHR2YWx1ZSA9IGB7XG5cdFx0XHRcdF90OiAndCcsXG5cdFx0XHRcdHQ6ICR7IHZhbHVlIH1cblx0XHRcdH1gXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlLFxuXHRcdFx0c3RhdGVmdWxsLFxuXHRcdH1cblx0fVxufVxuIl19