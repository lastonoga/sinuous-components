(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pageIndex"],{

/***/ "./pages/index.sin":
/*!*************************!*\
  !*** ./pages/index.sin ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_sin_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.sin?type=script */ "./pages/index.sin?type=script");
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sinuous/component */ "./packages/component/dist/index.js");
/* harmony import */ var _sinuous_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sinuous_component__WEBPACK_IMPORTED_MODULE_1__);

		
	
		

		let config = Object.assign({
			methods: {},
		}, _index_sin_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

		let instance = function PagesIndex() {
			_sinuous_component__WEBPACK_IMPORTED_MODULE_1__["Basic"].call(this);
		};
		
		// inherit Basic
		instance.prototype = Object.create(_sinuous_component__WEBPACK_IMPORTED_MODULE_1__["Basic"].prototype);

		// correct the constructor pointer because it points to Basic
		instance.prototype.constructor = instance;
		
		instance.prototype._methods = {};
		
		instance.prototype._componentName = 'PagesIndex';
		instance.prototype._shouldHydarate = true;
		instance.prototype._slotsData = {};
		instance.prototype._methods = Object.keys(config.methods);
		instance.prototype._functional = false;
		
		for(let key in config) {
			if(typeof config[key] === 'function') {
				instance.prototype[key] = config[key];
			}
		}
		
		for(let key in config.methods) {
			instance.prototype[key] = config.methods[key]
		}
		
		instance.prototype.__props = {};
		for(let key in config.props) {
			instance.prototype.__props[key] = config.props[key]
		}
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h(
  "div",
  [ctx.options, {}],
  [
    loop(
      ctx,
      ctx._state.items,
      (item, key) => {
        return item;
      },
      (item, key) => {
        return h(
          "sbutton",
          {
            staticStyle: {
              "font-weight": "bold",
            },
            class: ctx._state.s1,
            style: { fontStyle: "italic" },
            props: {
              pt: item,
              prop1: "test--",
            },
            key: item,
            $slots: {
              default: [
                () => {
                  return `Button ${item}`;
                },
              ],
            },
          },
          [
            () => {
              return `Button ${item}`;
            },
          ]
        );
      }
    ),
  ]
);
;
			}
		
			instance.prototype.__hydrate = function(h) {
				let ctx = this;
				return {
  _t: "h",
  t: "div",
  o: [ctx.options, {}],
  c: [
    {
      _t: "loop",
      c: ctx._state.items,
      k: (item, key) => {
        return item;
      },
      h: (item, key) => {
        return {
          _t: "h",
          t: "sbutton",
          o: {
            class: ctx._state.s1,
            style: { fontStyle: "italic" },
            $slots: {
              default: [
                {
                  _t: "t",
                  t: -1,
                },
              ],
            },
            _s: true,
          },
          c: [],
        };
      },
      r: (h, item, key) => {
        return h(
          "sbutton",
          {
            staticStyle: {
              "font-weight": "bold",
            },
            class: ctx._state.s1,
            style: { fontStyle: "italic" },
            props: {
              pt: item,
              prop1: "test--",
            },
            key: item,
            $slots: {
              default: [
                {
                  _t: "t",
                  t: -1,
                },
              ],
            },
          },
          [
            () => {
              return `Button ${item}`;
            },
          ]
        );
      },
    },
  ],
};
;
			}
		
		/* harmony default export */ __webpack_exports__["default"] = (instance);
	

/***/ }),

/***/ "./pages/index.sin?type=script":
/*!*************************************!*\
  !*** ./pages/index.sin?type=script ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {},

  data() {
    return {
      timer: null
    };
  },

  state(o) {
    return {
      items: o(Array.from({
        length: 1000
      }, (_, i) => i)),
      items2: o(['a_', 'b_']),
      s1: o(2)
    };
  },

  computed(o) {
    return {};
  },

  methods: {
    mounted: function () {
      // let d = [];
      // for (var i = 0; i < 1000; i++) {
      // 	d.push(i);
      // }
      // items = d;
      this._data.timer = setInterval(() => {
        this._state.s1(this._state.s1() + 1);
      }, 2000); // setTimeout(() => {
      // 	console.log('change')
      // 	items = ['a', 'c', 'd']
      // }, 1000)
      // setTimeout(() => {
      // 	console.log('change')
      // 	items = ['a', 'e', 'd', 'b', 'c']
      // }, 3000)
    },
    unmounted: function () {
      clearInterval(this._data.timer);
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4iLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguc2luPzQzZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsRUFBd0Q7O0FBRXhELEVBQTZDOztBQUU3QztBQUNBLGNBQWM7QUFDZCxHQUFHLEVBQUUsOERBQWU7O0FBRXBCO0FBQ0EsR0FBRyx3REFBSztBQUNSOztBQUVBO0FBQ0EscUNBQXFDLHdEQUFLOztBQUUxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLHVEQUF1RDtBQUNyRztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxLQUFLO0FBQ3hDLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDLGFBQWE7QUFDYjtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFpQix1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDN0oxQjtBQUFlO0FBQ2YsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxRQUFRO0FBQ2Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6InBhZ2VJbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblx0XHRpbXBvcnQgY29tcG9uZW50Q29uZmlnIGZyb20gXCIuL2luZGV4LnNpbj90eXBlPXNjcmlwdFwiO1xuXHRcblx0XHRpbXBvcnQgeyBCYXNpYyB9IGZyb20gJ0BzaW51b3VzL2NvbXBvbmVudCc7XG5cblx0XHRsZXQgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0XHRtZXRob2RzOiB7fSxcblx0XHR9LCBjb21wb25lbnRDb25maWcpO1xuXG5cdFx0bGV0IGluc3RhbmNlID0gZnVuY3Rpb24gUGFnZXNJbmRleCgpIHtcblx0XHRcdEJhc2ljLmNhbGwodGhpcyk7XG5cdFx0fTtcblx0XHRcblx0XHQvLyBpbmhlcml0IEJhc2ljXG5cdFx0aW5zdGFuY2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNpYy5wcm90b3R5cGUpO1xuXG5cdFx0Ly8gY29ycmVjdCB0aGUgY29uc3RydWN0b3IgcG9pbnRlciBiZWNhdXNlIGl0IHBvaW50cyB0byBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGluc3RhbmNlO1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kcyA9IHt9O1xuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fY29tcG9uZW50TmFtZSA9ICdQYWdlc0luZGV4Jztcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX3Nob3VsZEh5ZGFyYXRlID0gdHJ1ZTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX3Nsb3RzRGF0YSA9IHt9O1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fbWV0aG9kcyA9IE9iamVjdC5rZXlzKGNvbmZpZy5tZXRob2RzKTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2Z1bmN0aW9uYWwgPSBmYWxzZTtcblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcpIHtcblx0XHRcdGlmKHR5cGVvZiBjb25maWdba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpbnN0YW5jZS5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRmb3IobGV0IGtleSBpbiBjb25maWcubWV0aG9kcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWcubWV0aG9kc1trZXldXG5cdFx0fVxuXHRcdFxuXHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3Byb3BzID0ge307XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLnByb3BzKSB7XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19wcm9wc1trZXldID0gY29uZmlnLnByb3BzW2tleV1cblx0XHR9XG5cdFxuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcmVuZGVyID0gZnVuY3Rpb24oaCwgeyBjdHgsIGNvbXBvbmVudHMsIHJlbmRlciwgc3RhdGVtZW50LCBzbG90LCBsb29wLCBkLCBjIH0pIHtcblx0XHRcdFx0cmV0dXJuIGgoXG4gIFwiZGl2XCIsXG4gIFtjdHgub3B0aW9ucywge31dLFxuICBbXG4gICAgbG9vcChcbiAgICAgIGN0eCxcbiAgICAgIGN0eC5fc3RhdGUuaXRlbXMsXG4gICAgICAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSxcbiAgICAgIChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGgoXG4gICAgICAgICAgXCJzYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcImJvbGRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzczogY3R4Ll9zdGF0ZS5zMSxcbiAgICAgICAgICAgIHN0eWxlOiB7IGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9LFxuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgcHQ6IGl0ZW0sXG4gICAgICAgICAgICAgIHByb3AxOiBcInRlc3QtLVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleTogaXRlbSxcbiAgICAgICAgICAgICRzbG90czoge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBbXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGBCdXR0b24gJHtpdGVtfWA7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBgQnV0dG9uICR7aXRlbX1gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKSxcbiAgXVxuKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoKSB7XG5cdFx0XHRcdGxldCBjdHggPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4ge1xuICBfdDogXCJoXCIsXG4gIHQ6IFwiZGl2XCIsXG4gIG86IFtjdHgub3B0aW9ucywge31dLFxuICBjOiBbXG4gICAge1xuICAgICAgX3Q6IFwibG9vcFwiLFxuICAgICAgYzogY3R4Ll9zdGF0ZS5pdGVtcyxcbiAgICAgIGs6IChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9LFxuICAgICAgaDogKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIF90OiBcImhcIixcbiAgICAgICAgICB0OiBcInNidXR0b25cIixcbiAgICAgICAgICBvOiB7XG4gICAgICAgICAgICBjbGFzczogY3R4Ll9zdGF0ZS5zMSxcbiAgICAgICAgICAgIHN0eWxlOiB7IGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9LFxuICAgICAgICAgICAgJHNsb3RzOiB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBfdDogXCJ0XCIsXG4gICAgICAgICAgICAgICAgICB0OiAtMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9zOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYzogW10sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgcjogKGgsIGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gaChcbiAgICAgICAgICBcInNidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzOiBjdHguX3N0YXRlLnMxLFxuICAgICAgICAgICAgc3R5bGU6IHsgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICBwdDogaXRlbSxcbiAgICAgICAgICAgICAgcHJvcDE6IFwidGVzdC0tXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5OiBpdGVtLFxuICAgICAgICAgICAgJHNsb3RzOiB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBfdDogXCJ0XCIsXG4gICAgICAgICAgICAgICAgICB0OiAtMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGBCdXR0b24gJHtpdGVtfWA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn07XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHt9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWVyOiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBzdGF0ZShvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBvKEFycmF5LmZyb20oe1xuICAgICAgICBsZW5ndGg6IDEwMDBcbiAgICAgIH0sIChfLCBpKSA9PiBpKSksXG4gICAgICBpdGVtczI6IG8oWydhXycsICdiXyddKSxcbiAgICAgIHMxOiBvKDIpXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZChvKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBsZXQgZCA9IFtdO1xuICAgICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcbiAgICAgIC8vIFx0ZC5wdXNoKGkpO1xuICAgICAgLy8gfVxuICAgICAgLy8gaXRlbXMgPSBkO1xuICAgICAgdGhpcy5fZGF0YS50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5fc3RhdGUuczEodGhpcy5fc3RhdGUuczEoKSArIDEpO1xuICAgICAgfSwgMjAwMCk7IC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gXHRjb25zb2xlLmxvZygnY2hhbmdlJylcbiAgICAgIC8vIFx0aXRlbXMgPSBbJ2EnLCAnYycsICdkJ11cbiAgICAgIC8vIH0sIDEwMDApXG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIFx0Y29uc29sZS5sb2coJ2NoYW5nZScpXG4gICAgICAvLyBcdGl0ZW1zID0gWydhJywgJ2UnLCAnZCcsICdiJywgJ2MnXVxuICAgICAgLy8gfSwgMzAwMClcbiAgICB9LFxuICAgIHVubW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9kYXRhLnRpbWVyKTtcbiAgICB9XG4gIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==