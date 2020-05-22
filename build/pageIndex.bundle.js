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
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop, d, c }) {
				return h(
  "div",
  [ctx.options, {}],
  [
    statement(
      () => {
        return ctx._state.s1() % 2 === 0;
      },
      1,
      () => {
        return h("sbutton", { $slots: { default: [`Button`] } }, [`Button`]);
      },
      true,
      1,
      () => {
        return h("div", {}, [`1`]);
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
      _t: "statement",
      a: [
        () => {
          return ctx._state.s1() % 2 === 0;
        },
        1,
        {
          h: {
            _t: "h",
            t: "sbutton",
            o: {
              $slots: {
                default: [
                  {
                    _t: "t",
                    t: -1,
                  },
                ],
              },
            },
            c: [],
          },
          r: (h) => {
            return h(
              "sbutton",
              {
                $slots: {
                  default: [
                    {
                      _t: "t",
                      t: -1,
                    },
                  ],
                },
              },
              [`Button`]
            );
          },
        },
        true,
        1,
        {
          h: {
            _t: "h",
            t: "div",
            o: {},
            c: [
              {
                _t: "t",
                t: -1,
              },
            ],
          },
          r: (h) => {
            return h("div", {}, [`1`]);
          },
        },
      ],
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
  data() {
    return {
      timer: null
    };
  },

  state(o) {
    return {
      items: o(Array.from({
        length: 1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4iLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguc2luPzQzZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsRUFBd0Q7O0FBRXhELEVBQTZDOztBQUU3QztBQUNBLGNBQWM7QUFDZCxHQUFHLEVBQUUsOERBQWU7O0FBRXBCO0FBQ0EsR0FBRyx3REFBSztBQUNSOztBQUVBO0FBQ0EscUNBQXFDLHdEQUFLOztBQUUxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLHVEQUF1RDtBQUNyRztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSw2QkFBNkIsVUFBVSxzQkFBc0IsRUFBRTtBQUMvRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVc7QUFDWDtBQUNBLDhCQUE4QjtBQUM5QixXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQWlCLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNySTFCO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsImZpbGUiOiJwYWdlSW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cdFx0aW1wb3J0IGNvbXBvbmVudENvbmZpZyBmcm9tIFwiLi9pbmRleC5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2ludW91cy9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFBhZ2VzSW5kZXgoKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnUGFnZXNJbmRleCc7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSB7fTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSBPYmplY3Qua2V5cyhjb25maWcubWV0aG9kcyk7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9mdW5jdGlvbmFsID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19yZW5kZXIgPSBmdW5jdGlvbihoLCB7IGN0eCwgY29tcG9uZW50cywgcmVuZGVyLCBzdGF0ZW1lbnQsIHNsb3QsIGxvb3AsIGQsIGMgfSkge1xuXHRcdFx0XHRyZXR1cm4gaChcbiAgXCJkaXZcIixcbiAgW2N0eC5vcHRpb25zLCB7fV0sXG4gIFtcbiAgICBzdGF0ZW1lbnQoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjdHguX3N0YXRlLnMxKCkgJSAyID09PSAwO1xuICAgICAgfSxcbiAgICAgIDEsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoKFwic2J1dHRvblwiLCB7ICRzbG90czogeyBkZWZhdWx0OiBbYEJ1dHRvbmBdIH0gfSwgW2BCdXR0b25gXSk7XG4gICAgICB9LFxuICAgICAgdHJ1ZSxcbiAgICAgIDEsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoKFwiZGl2XCIsIHt9LCBbYDFgXSk7XG4gICAgICB9XG4gICAgKSxcbiAgXVxuKTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX2h5ZHJhdGUgPSBmdW5jdGlvbihoKSB7XG5cdFx0XHRcdGxldCBjdHggPSB0aGlzO1xuXHRcdFx0XHRyZXR1cm4ge1xuICBfdDogXCJoXCIsXG4gIHQ6IFwiZGl2XCIsXG4gIG86IFtjdHgub3B0aW9ucywge31dLFxuICBjOiBbXG4gICAge1xuICAgICAgX3Q6IFwic3RhdGVtZW50XCIsXG4gICAgICBhOiBbXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gY3R4Ll9zdGF0ZS5zMSgpICUgMiA9PT0gMDtcbiAgICAgICAgfSxcbiAgICAgICAgMSxcbiAgICAgICAge1xuICAgICAgICAgIGg6IHtcbiAgICAgICAgICAgIF90OiBcImhcIixcbiAgICAgICAgICAgIHQ6IFwic2J1dHRvblwiLFxuICAgICAgICAgICAgbzoge1xuICAgICAgICAgICAgICAkc2xvdHM6IHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF90OiBcInRcIixcbiAgICAgICAgICAgICAgICAgICAgdDogLTEsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYzogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByOiAoaCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGgoXG4gICAgICAgICAgICAgIFwic2J1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJHNsb3RzOiB7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdDogXCJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdDogLTEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtgQnV0dG9uYF1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgMSxcbiAgICAgICAge1xuICAgICAgICAgIGg6IHtcbiAgICAgICAgICAgIF90OiBcImhcIixcbiAgICAgICAgICAgIHQ6IFwiZGl2XCIsXG4gICAgICAgICAgICBvOiB7fSxcbiAgICAgICAgICAgIGM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF90OiBcInRcIixcbiAgICAgICAgICAgICAgICB0OiAtMSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByOiAoaCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGgoXCJkaXZcIiwge30sIFtgMWBdKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRleHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcblx0IiwiZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aW1lcjogbnVsbFxuICAgIH07XG4gIH0sXG5cbiAgc3RhdGUobykge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogbyhBcnJheS5mcm9tKHtcbiAgICAgICAgbGVuZ3RoOiAxXG4gICAgICB9LCAoXywgaSkgPT4gaSkpLFxuICAgICAgczE6IG8oMilcbiAgICB9O1xuICB9LFxuXG4gIGNvbXB1dGVkKG8pIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGxldCBkID0gW107XG4gICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xuICAgICAgLy8gXHRkLnB1c2goaSk7XG4gICAgICAvLyB9XG4gICAgICAvLyBpdGVtcyA9IGQ7XG4gICAgICB0aGlzLl9kYXRhLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0ZS5zMSh0aGlzLl9zdGF0ZS5zMSgpICsgMSk7XG4gICAgICB9LCAyMDAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0ZS5pdGVtcyhBcnJheS5mcm9tKHtcbiAgICAgICAgICBsZW5ndGg6IDJcbiAgICAgICAgfSwgKF8sIGkpID0+IGkpKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH0sXG4gICAgdW5tb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2RhdGEudGltZXIpO1xuICAgIH1cbiAgfVxufTsiXSwic291cmNlUm9vdCI6IiJ9