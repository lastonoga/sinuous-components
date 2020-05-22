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
    loop(ctx._state.items, (item, key) => {
      return h(
        "sbutton",
        {
          staticStyle: {
            "font-weight": "bold",
          },
          class: ctx._state.s1,
          style: { fontStyle: "italic" },
          props: {
            prop1: "test--",
          },
          key: key,
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
    }),
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
        return key;
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
              prop1: "test--",
            },
            key: key,
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
      }, 2000);
      setTimeout(() => {
        this._state.items(Array.from({
          length: 2
        }, (_, i) => i));
      }, 5000);
    },
    unmounted: function () {
      clearInterval(this._data.timer);
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4iLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguc2luPzQzZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsRUFBd0Q7O0FBRXhELEVBQTZDOztBQUU3QztBQUNBLGNBQWM7QUFDZCxHQUFHLEVBQUUsOERBQWU7O0FBRXBCO0FBQ0EsR0FBRyx3REFBSztBQUNSOztBQUVBO0FBQ0EscUNBQXFDLHdEQUFLOztBQUUxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLHVEQUF1RDtBQUNyRztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLEtBQUs7QUFDdEMsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNkJBQTZCLEtBQUs7QUFDbEMsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDLGFBQWE7QUFDYjtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFpQix1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDcEoxQjtBQUFlO0FBQ2YsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsImZpbGUiOiJwYWdlSW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cdFx0aW1wb3J0IGNvbXBvbmVudENvbmZpZyBmcm9tIFwiLi9pbmRleC5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFBhZ2VzSW5kZXgoKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnUGFnZXNJbmRleCc7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSB7fTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSBPYmplY3Qua2V5cyhjb25maWcubWV0aG9kcyk7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9mdW5jdGlvbmFsID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19wcm9wcyA9IHt9O1xuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5wcm9wcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcHJvcHNba2V5XSA9IGNvbmZpZy5wcm9wc1trZXldXG5cdFx0fVxuXHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3JlbmRlciA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCwgZCwgYyB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFxuICBcImRpdlwiLFxuICBbY3R4Lm9wdGlvbnMsIHt9XSxcbiAgW1xuICAgIGxvb3AoY3R4Ll9zdGF0ZS5pdGVtcywgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIGgoXG4gICAgICAgIFwic2J1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCJib2xkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzczogY3R4Ll9zdGF0ZS5zMSxcbiAgICAgICAgICBzdHlsZTogeyBmb250U3R5bGU6IFwiaXRhbGljXCIgfSxcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcHJvcDE6IFwidGVzdC0tXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAkc2xvdHM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtcbiAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgQnV0dG9uICR7aXRlbX1gO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBCdXR0b24gJHtpdGVtfWA7XG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgKTtcbiAgICB9KSxcbiAgXVxuKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoKSB7XG5cdFx0XHRcdGxldCBjdHggPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4ge1xuICBfdDogXCJoXCIsXG4gIHQ6IFwiZGl2XCIsXG4gIG86IFtjdHgub3B0aW9ucywge31dLFxuICBjOiBbXG4gICAge1xuICAgICAgX3Q6IFwibG9vcFwiLFxuICAgICAgYzogY3R4Ll9zdGF0ZS5pdGVtcyxcbiAgICAgIGs6IChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgIH0sXG4gICAgICBoOiAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgX3Q6IFwiaFwiLFxuICAgICAgICAgIHQ6IFwic2J1dHRvblwiLFxuICAgICAgICAgIG86IHtcbiAgICAgICAgICAgIGNsYXNzOiBjdHguX3N0YXRlLnMxLFxuICAgICAgICAgICAgc3R5bGU6IHsgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXG4gICAgICAgICAgICAkc2xvdHM6IHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF90OiBcInRcIixcbiAgICAgICAgICAgICAgICAgIHQ6IC0xLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3M6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjOiBbXSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICByOiAoaCwgaXRlbSwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBoKFxuICAgICAgICAgIFwic2J1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCJib2xkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3M6IGN0eC5fc3RhdGUuczEsXG4gICAgICAgICAgICBzdHlsZTogeyBmb250U3R5bGU6IFwiaXRhbGljXCIgfSxcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHByb3AxOiBcInRlc3QtLVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgJHNsb3RzOiB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBfdDogXCJ0XCIsXG4gICAgICAgICAgICAgICAgICB0OiAtMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGBCdXR0b24gJHtpdGVtfWA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn07XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0ZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG5cdCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHt9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpbWVyOiBudWxsXG4gICAgfTtcbiAgfSxcblxuICBzdGF0ZShvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBvKEFycmF5LmZyb20oe1xuICAgICAgICBsZW5ndGg6IDEwMDBcbiAgICAgIH0sIChfLCBpKSA9PiBpKSksXG4gICAgICBzMTogbygyKVxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQobykge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gbGV0IGQgPSBbXTtcbiAgICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XG4gICAgICAvLyBcdGQucHVzaChpKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGl0ZW1zID0gZDtcbiAgICAgIHRoaXMuX2RhdGEudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3N0YXRlLnMxKHRoaXMuX3N0YXRlLnMxKCkgKyAxKTtcbiAgICAgIH0sIDIwMDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3N0YXRlLml0ZW1zKEFycmF5LmZyb20oe1xuICAgICAgICAgIGxlbmd0aDogMlxuICAgICAgICB9LCAoXywgaSkgPT4gaSkpO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfSxcbiAgICB1bm1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fZGF0YS50aW1lcik7XG4gICAgfVxuICB9XG59OyJdLCJzb3VyY2VSb290IjoiIn0=