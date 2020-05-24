"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = slot;

function slot(context, h, name, tag, options, defaultChildren) {
  // context.__slots
  var children = defaultChildren;

  if (context._slots[name]) {
    children = context._slots[name];
  }

  if (tag === null) {
    return children;
  } // h.bind(null)


  var render = h(tag, options, children); // for (var i = 0; i < render.childNodes.length; i++) {
  // 	console.log(render.childNodes[i], render.childNodes[i].$s);
  // }

  return render;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zbG90LmpzIl0sIm5hbWVzIjpbInNsb3QiLCJjb250ZXh0IiwiaCIsIm5hbWUiLCJ0YWciLCJvcHRpb25zIiwiZGVmYXVsdENoaWxkcmVuIiwiY2hpbGRyZW4iLCJfc2xvdHMiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTQSxJQUFULENBQWNDLE9BQWQsRUFBdUJDLENBQXZCLEVBQTBCQyxJQUExQixFQUFnQ0MsR0FBaEMsRUFBcUNDLE9BQXJDLEVBQThDQyxlQUE5QyxFQUNmO0FBQ0M7QUFFQSxNQUFJQyxRQUFRLEdBQUdELGVBQWY7O0FBRUEsTUFBR0wsT0FBTyxDQUFDTyxNQUFSLENBQWVMLElBQWYsQ0FBSCxFQUF5QjtBQUN4QkksSUFBQUEsUUFBUSxHQUFHTixPQUFPLENBQUNPLE1BQVIsQ0FBZUwsSUFBZixDQUFYO0FBQ0E7O0FBRUQsTUFBR0MsR0FBRyxLQUFLLElBQVgsRUFBaUI7QUFDaEIsV0FBT0csUUFBUDtBQUNBLEdBWEYsQ0FhQzs7O0FBRUEsTUFBSUUsTUFBTSxHQUFHUCxDQUFDLENBQUNFLEdBQUQsRUFBTUMsT0FBTixFQUFlRSxRQUFmLENBQWQsQ0FmRCxDQWlCQztBQUNBO0FBQ0E7O0FBR0EsU0FBT0UsTUFBUDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xvdChjb250ZXh0LCBoLCBuYW1lLCB0YWcsIG9wdGlvbnMsIGRlZmF1bHRDaGlsZHJlbilcbntcblx0Ly8gY29udGV4dC5fX3Nsb3RzXG5cdFxuXHRsZXQgY2hpbGRyZW4gPSBkZWZhdWx0Q2hpbGRyZW47XG5cblx0aWYoY29udGV4dC5fc2xvdHNbbmFtZV0pIHtcblx0XHRjaGlsZHJlbiA9IGNvbnRleHQuX3Nsb3RzW25hbWVdO1xuXHR9XG5cdFxuXHRpZih0YWcgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gY2hpbGRyZW47XG5cdH1cblxuXHQvLyBoLmJpbmQobnVsbClcblxuXHRsZXQgcmVuZGVyID0gaCh0YWcsIG9wdGlvbnMsIGNoaWxkcmVuKTtcblxuXHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IHJlbmRlci5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdC8vIFx0Y29uc29sZS5sb2cocmVuZGVyLmNoaWxkTm9kZXNbaV0sIHJlbmRlci5jaGlsZE5vZGVzW2ldLiRzKTtcblx0Ly8gfVxuXHRcblxuXHRyZXR1cm4gcmVuZGVyO1xufVxuIl19