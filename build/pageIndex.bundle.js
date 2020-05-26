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
/* harmony import */ var _siph_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @siph/component */ "./packages/component/dist/index.js");
/* harmony import */ var _siph_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_siph_component__WEBPACK_IMPORTED_MODULE_1__);

		
	
		

		let config = Object.assign({
			methods: {},
		}, _index_sin_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

		let instance = function PagesIndex() {
			_siph_component__WEBPACK_IMPORTED_MODULE_1__["Basic"].call(this);
		};
		
		// inherit Basic
		instance.prototype = Object.create(_siph_component__WEBPACK_IMPORTED_MODULE_1__["Basic"].prototype);

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
	
			instance.prototype.__render = function(h, { ctx, components, render, statement, slot, loop }) {
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
          "sbutton2",
          {
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
          t: "sbutton2",
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
        };
      },
      r: (h, item, key) => {
        return h(
          "sbutton2",
          {
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
        length: 10000
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5zaW4iLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguc2luPzQzZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsRUFBd0Q7O0FBRXhELEVBQTBDOztBQUUxQztBQUNBLGNBQWM7QUFDZCxHQUFHLEVBQUUsOERBQWU7O0FBRXBCO0FBQ0EsR0FBRyxxREFBSztBQUNSOztBQUVBO0FBQ0EscUNBQXFDLHFEQUFLOztBQUUxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLGlEQUFpRDtBQUMvRjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEtBQUs7QUFDeEMsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQyxhQUFhO0FBQ2I7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBaUIsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3hJMUI7QUFBZTtBQUNmLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sUUFBUTtBQUNmO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsImZpbGUiOiJwYWdlSW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cdFx0aW1wb3J0IGNvbXBvbmVudENvbmZpZyBmcm9tIFwiLi9pbmRleC5zaW4/dHlwZT1zY3JpcHRcIjtcblx0XG5cdFx0aW1wb3J0IHsgQmFzaWMgfSBmcm9tICdAc2lwaC9jb21wb25lbnQnO1xuXG5cdFx0bGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdFx0bWV0aG9kczoge30sXG5cdFx0fSwgY29tcG9uZW50Q29uZmlnKTtcblxuXHRcdGxldCBpbnN0YW5jZSA9IGZ1bmN0aW9uIFBhZ2VzSW5kZXgoKSB7XG5cdFx0XHRCYXNpYy5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gaW5oZXJpdCBCYXNpY1xuXHRcdGluc3RhbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzaWMucHJvdG90eXBlKTtcblxuXHRcdC8vIGNvcnJlY3QgdGhlIGNvbnN0cnVjdG9yIHBvaW50ZXIgYmVjYXVzZSBpdCBwb2ludHMgdG8gQmFzaWNcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBpbnN0YW5jZTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSB7fTtcblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX2NvbXBvbmVudE5hbWUgPSAnUGFnZXNJbmRleCc7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zaG91bGRIeWRhcmF0ZSA9IHRydWU7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9zbG90c0RhdGEgPSB7fTtcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX21ldGhvZHMgPSBPYmplY3Qua2V5cyhjb25maWcubWV0aG9kcyk7XG5cdFx0aW5zdGFuY2UucHJvdG90eXBlLl9mdW5jdGlvbmFsID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XG5cdFx0XHRpZih0eXBlb2YgY29uZmlnW2tleV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2UucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gY29uZmlnLm1ldGhvZHMpIHtcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZVtrZXldID0gY29uZmlnLm1ldGhvZHNba2V5XVxuXHRcdH1cblx0XHRcblx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19wcm9wcyA9IHt9O1xuXHRcdGZvcihsZXQga2V5IGluIGNvbmZpZy5wcm9wcykge1xuXHRcdFx0aW5zdGFuY2UucHJvdG90eXBlLl9fcHJvcHNba2V5XSA9IGNvbmZpZy5wcm9wc1trZXldXG5cdFx0fVxuXHRcblx0XHRcdGluc3RhbmNlLnByb3RvdHlwZS5fX3JlbmRlciA9IGZ1bmN0aW9uKGgsIHsgY3R4LCBjb21wb25lbnRzLCByZW5kZXIsIHN0YXRlbWVudCwgc2xvdCwgbG9vcCB9KSB7XG5cdFx0XHRcdHJldHVybiBoKFxuICBcImRpdlwiLFxuICBbY3R4Lm9wdGlvbnMsIHt9XSxcbiAgW1xuICAgIGxvb3AoXG4gICAgICBjdHgsXG4gICAgICBjdHguX3N0YXRlLml0ZW1zLFxuICAgICAgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0sXG4gICAgICAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBoKFxuICAgICAgICAgIFwic2J1dHRvbjJcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGl0ZW0sXG4gICAgICAgICAgICAkc2xvdHM6IHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogW1xuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBgQnV0dG9uICR7aXRlbX1gO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYEJ1dHRvbiAke2l0ZW19YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICApO1xuICAgICAgfVxuICAgICksXG4gIF1cbik7XG47XG5cdFx0XHR9XG5cdFx0XG5cdFx0XHRpbnN0YW5jZS5wcm90b3R5cGUuX19oeWRyYXRlID0gZnVuY3Rpb24oaCkge1xuXHRcdFx0XHRsZXQgY3R4ID0gdGhpcztcblx0XHRcdFx0cmV0dXJuIHtcbiAgX3Q6IFwiaFwiLFxuICB0OiBcImRpdlwiLFxuICBvOiBbY3R4Lm9wdGlvbnMsIHt9XSxcbiAgYzogW1xuICAgIHtcbiAgICAgIF90OiBcImxvb3BcIixcbiAgICAgIGM6IGN0eC5fc3RhdGUuaXRlbXMsXG4gICAgICBrOiAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSxcbiAgICAgIGg6IChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBfdDogXCJoXCIsXG4gICAgICAgICAgdDogXCJzYnV0dG9uMlwiLFxuICAgICAgICAgIG86IHtcbiAgICAgICAgICAgICRzbG90czoge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgX3Q6IFwidFwiLFxuICAgICAgICAgICAgICAgICAgdDogLTEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjOiBbXSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICByOiAoaCwgaXRlbSwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBoKFxuICAgICAgICAgIFwic2J1dHRvbjJcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGl0ZW0sXG4gICAgICAgICAgICAkc2xvdHM6IHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF90OiBcInRcIixcbiAgICAgICAgICAgICAgICAgIHQ6IC0xLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYEJ1dHRvbiAke2l0ZW19YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXVxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcbjtcblx0XHRcdH1cblx0XHRcblx0XHRleHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcblx0IiwiZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge30sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGltZXI6IG51bGxcbiAgICB9O1xuICB9LFxuXG4gIHN0YXRlKG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IG8oQXJyYXkuZnJvbSh7XG4gICAgICAgIGxlbmd0aDogMTAwMDBcbiAgICAgIH0sIChfLCBpKSA9PiBpKSksXG4gICAgICBpdGVtczI6IG8oWydhXycsICdiXyddKSxcbiAgICAgIHMxOiBvKDIpXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZChvKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBsZXQgZCA9IFtdO1xuICAgICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcbiAgICAgIC8vIFx0ZC5wdXNoKGkpO1xuICAgICAgLy8gfVxuICAgICAgLy8gaXRlbXMgPSBkO1xuICAgICAgdGhpcy5fZGF0YS50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5fc3RhdGUuczEodGhpcy5fc3RhdGUuczEoKSArIDEpO1xuICAgICAgfSwgMjAwMCk7IC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gXHRjb25zb2xlLmxvZygnY2hhbmdlJylcbiAgICAgIC8vIFx0aXRlbXMgPSBbJ2EnLCAnYycsICdkJ11cbiAgICAgIC8vIH0sIDEwMDApXG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIFx0Y29uc29sZS5sb2coJ2NoYW5nZScpXG4gICAgICAvLyBcdGl0ZW1zID0gWydhJywgJ2UnLCAnZCcsICdiJywgJ2MnXVxuICAgICAgLy8gfSwgMzAwMClcbiAgICB9LFxuICAgIHVubW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9kYXRhLnRpbWVyKTtcbiAgICB9XG4gIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==