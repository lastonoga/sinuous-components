!function(t){function e(e){for(var r,i,s=e[0],a=e[1],l=e[2],c=0,d=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(f&&f(e);d.length;)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={0:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(t){return i.p+""+({1:"pageIndex"}[t]||t)+".bundle.js"}(t);var a=new Error;u=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+u+")",a.name="ChunkLoadError",a.type=r,a.request=u,n[1](a)}o[t]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=a;u.push([9,2]),n()}([,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"styles",{enumerable:!0,get:function(){return r.styles}}),Object.defineProperty(e,"classes",{enumerable:!0,get:function(){return r.classes}}),Object.defineProperty(e,"value",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"options",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"makeCss",{enumerable:!0,get:function(){return u.makeCss}}),Object.defineProperty(e,"register",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"statement",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"slot",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"loop",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"dynamic",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"h",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"Basic",{enumerable:!0,get:function(){return d.default}});var r=n(12),o=h(n(7)),u=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=p();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var u=r?Object.getOwnPropertyDescriptor(t,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n(13)),i=h(n(14)),s=h(n(15)),a=h(n(16)),l=h(n(17)),f=h(n(18)),c=h(n(19)),d=h(n(20));function p(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return p=function(){return t},t}function h(t){return t&&t.__esModule?t:{default:t}}},,function(t,e,n){"use strict";function r(t){return t._functional?t:new t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=new(function(){function t(){this.components=[],this.last_hid=0}var e=t.prototype;return e.createHID=function(t){return this.last_hid=this.last_hid+1+t,this.last_hid},e.clearHID=function(){this.last_hid=0},e.registerComponent=function(t,e){void 0===e&&(e=null),null==e&&(e=t),t=e.prototype._componentName.toLowerCase(),this.components[t]=e},e.hasComponent=function(t){return!(void 0===this.components[t])},e.getHydrateComponent=function(t,e){if(!this.hasComponent(t))throw new Error("There is no "+t+" component registered");return this.components[t].prototype._shouldHydarate||e.$slots?r(this.components[t]):null},e.getComponent=function(t){if(!this.hasComponent(t))throw new Error("There is no "+t+" component registered");return r(this.components[t])},t}());e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"hydrate",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"statement",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"loop",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"slot",{enumerable:!0,get:function(){return i.default}});var r=s(n(11)),o=s(n(25)),u=s(n(26)),i=s(n(27));function s(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e._=void 0;e._=-1},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("function"==typeof t)return t();return t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.loadComponent=function(t,e){t instanceof Promise?t.then((function(t){e(new t.default)})):e(new t)}},function(t,e,n){t.exports=n(10)},function(t,e,n){"use strict";var r=s(n(4)),o=n(5),u=(s(n(28)),s(n(30))),i=s(n(29));function s(t){return t&&t.__esModule?t:{default:t}}var a,l=n.e(1).then(n.bind(null,31));function f(){(0,o.hydrate)(l,a,i.default)}(0,i.default)("SSR-Build"),r.default.registerComponent(u.default),(0,i.default)("SSR-Build"),a=document.getElementById("layout"),f()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,r){void 0===n&&(n=function(){});void 0===r&&(r=null);(0,i.loadComponent)(t,(function(t){n("Hydration");var o=[t];u.default.clearHID();for(var i=e.childNodes,s=0;s<o.length;s++){var a=o[s],l=i[s],f=a.hydrate(a);d(a,l,f)}return t.hook("mounted"),r&&r(t),n("Hydration"),t}))};var r=n(1),o=n(6),u=a(n(4)),i=(n(2),n(8)),s=a(n(23));function a(t){return t&&t.__esModule?t:{default:t}}function l(t,e,n){for(var r=t,o=1;o<n.length;o++)r=r.childNodes[n[o]];return t}function f(t,e,n,r){void 0===n&&(n={}),(0,s.default)(t,e,n);var o={},u=t._slotsData;for(var i in r){if(!u[i])throw new Error("There is no "+i+" slot namespace defined");var a=l(e,u[i].tag,u[i].path);o[i]=a}for(var f in r){var c=u[f],p=o[f],h=r[f],v=c.index;if(void 0===p&&console.warn(e,n,u,e[0]),h.length>p.length)throw new Error("Slot hydration length mismatch");for(var y=v;y<h.length;y++)d(t,p.childNodes[y],h[y])}}function c(t,e,n){var r=n.t,i=n.o,a=n.c;if(u.default.hasComponent(r)){var l,c,p=u.default.getHydrateComponent(r,i);if(null===p)return o._;if(l=t,(c=p)._functional?l.addChildren(o._):(l.addChildren(c),c.setParent(l)),p._functional){var h=p.hydrate({getUID:function(){return-1},_slots:i.$slots});return i.$slots&&f(p,e,i,i.$slots),void d(t,e,h)}return i.$slots&&f(p,e,i,i.$slots),d(p,e,p.hydrate(p))}!function(t,e,n,r){(0,s.default)(t,e,n);for(var o=0;o<r.length;o++)d(t,e.childNodes[o],r[o])}(t,e,i,a)}function d(t,e,n){void 0===n&&(n=null),function(t,e,n){if(null===n||null===e)return;"h"===n._t&&c(t,e,n);"t"===n._t&&function(t,e,n){n.t!==o._&&r.api.subscribe((function(){r.api.insert(e,n.t(),null)}))}(0,e,n);"loop"===n._t&&function(t,e,n){var o=n.c,u=e;r.api.subscribe((function(){var e="function"==typeof o?o():o,r=u;for(var i in e){var s=e[i],a=n.fn(s,i);d(t,r,a),r=r.nextElementSibling}}))}(t,e,n);o._}(t,e,n)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.handleClassObject=u,e.classes=function(t,e){var n=arguments;void 0===t&&(t=[]);void 0===e&&(e={});return function(){for(var t=[],e=0;e<n.length;e++){var r=n[e];if(Array.isArray(r))for(var i=0;i<r.length;i++)t.push((0,o.default)(r[i]));else"object"==typeof r?t=t.concat(u(r)):"function"==typeof r?t=t.concat(u((0,o.default)(r))):t.push(r)}return(t=t.filter((function(t,e,n){return n.indexOf(t)===e}))).join(" ")}},e.handleStylesObject=i,e.styles=function(){var t=arguments;return function(){for(var e={},n=0;n<t.length;n++)"object"==typeof t[n]?i(e,t[n]):i(e,(0,o.default)(t[n]));return e}};var r,o=(r=n(7))&&r.__esModule?r:{default:r};function u(t){var e=[];for(var n in t)(0,o.default)(t[n])&&e.push(n);return e}function i(t,e){for(var n in e){var r=(0,o.default)(e[n]);null!==r&&(t[(u=n,u.replace(/\.?([A-Z]+)/g,(function(t,e){return"-"+e.toLowerCase()})).replace(/^-/,""))]=r)}var u;return t}},function(t,e,n){"use strict";function r(){for(var t="",e=0;e<arguments.length;e++)if("object"==typeof arguments[e])for(var n in arguments[e])arguments[e][n]&&(t+=" "+n);else t+=" "+arguments[e];return t}function o(t,e){return void 0===t&&(t=null),void 0===e&&(e=null),null===t&&null===e?"":(null===t&&(t=""),"function"==typeof e&&(e=e()),t+=r.apply(this,e))}function u(t,e){void 0===t&&(t={}),void 0===e&&(e=null),"function"==typeof e&&(e=e()),Array.isArray(e)||(e=[e]);for(var n=0;n<e.length;n++)for(var r in e[n]){var o=e[n][r];"function"==typeof o&&(o=o()),t[(u=r,u.replace(/\.?([A-Z]+)/g,(function(t,e){return"-"+e.toLowerCase()})).replace(/^-/,""))]=o}var u;return t}Object.defineProperty(e,"__esModule",{value:!0}),e.makeCss=s,e.default=function(t,e){void 0===e&&(e=!0);var n={};if(t.on)for(var r in t.on)n["on"+r]=t.on[r];if(s(n,t),e)for(var o=0;o<i.length;o++){var u=i[o];t[u]&&(n[u]=t[u])}return n};var i=["_s","$slots"];function s(t,e){return(e.staticClass||e.class)&&(t.class=o.bind(this,e.staticClass||null,e.class||null)),(e.staticStyle||e.style)&&(t.style=u.bind(this,e.staticStyle||{},e.style||null)),t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){void 0===e&&(e=null);null==e&&(e=t,t=t.name);t=t.toLowerCase(),window._SinuousComponents[t]=e},window._SinuousComponents={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments,e=function(){if(t.length%3!=0)throw new Error("Statement should be odd number");for(var e=[],n=0;n<t.length;n+=3){var o=t[n],u=t[n+1],i=t[n+2],s=null;if("function"==typeof o?o()&&(s=i):o&&(s=i),null!==s)if(s._observable||(s=s(r.h)),u>1)for(a=0;a<u;a++)e.push(s[a]);else e.push(s);else for(var a=0;a<u;a++)e.push(document.createComment(""))}return e};return e._observable=!0,e};var r=n(2)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,r,o,u){var i=u;t._slots[n]&&(i=t._slots[n]);if(null===r)return i;return e(r,o,i)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=function(){var n=[],r="function"==typeof t?t():t;for(var o in r){var u=r[o];n.push(e(u,o))}return n};return n._observable=!0,n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,r){return function(){var o=e();return t(o,n,r)}};n(1)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){void 0===e&&(e={});void 0===n&&(n=[]);t=t.toLowerCase();if(e=(0,u.options)(e),!i.default.hasComponent(t))return(0,o.h)(t,e,n);var r=i.default.getComponent(t);if(function(t,e){t.addChildren(e),e.setParent&&e.setParent(t)}(this,r),r._functional)return r.render({getUID:function(){return-1},_slots:e.$slots});void 0!==e.props&&r.passProps(e.props);for(var s in e.$slots)r.passSlots(s,e.$slots[s]);return r.render()};var r,o=n(1),u=(n(0),n(2)),i=(r=n(4))&&r.__esModule?r:{default:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=(r=n(4))&&r.__esModule?r:{default:r},u=n(6),i=(n(21),n(22)),s=n(5),a=n(2),l=n(2);var f=0,c=function(){function t(){this._isComponent=!0,this.hid=++f,this._props=this.props(),this._passedProps={},this._data=this.data(),this._state=this.state(i.observable),this._slots={default:[]},this._computed=this.computed(i.computed),this._children=[],this._el_index=0,this.initProps(),this.setChildren(),this.setParent(),this.bindContext()}return t.prototype.bindContext=function(){for(var t in this._computed)this._computed[t]=this._computed[t].bind(this);for(var e in this._methods){var n=this._methods[e];this[n]=this[n].bind(this)}},t.prototype.setChildren=function(t){void 0===t&&(t=[]),this._children=t},t.prototype.addChildren=function(t){this._children.push(t)},t.prototype.setParent=function(t){void 0===t&&(t=null),this._parent=t},t.prototype.props=function(){return{}},t.prototype.initProps=function(){for(var t in this._props){var e=this._props[t],n=null;"function"==typeof e||(n=e.default()),this._data[t]=n}},t.prototype.passSlots=function(t,e){this._slots[t]=e},t.prototype.passProps=function(t){for(var e in t)t[e]._observable&&(this._isStateful=!0),this._data[e]=t[e]},t.prototype.data=function(){return{}},t.prototype.computed=function(){return{}},t.prototype.state=function(t){return{}},t.prototype.template=function(){},t.prototype.childComponents=function(){},t.prototype.hook=function(t){void 0===t&&(t="mounted"),this[t]&&this[t].call(this);for(var e=0;e<this._children.length;e++)this._children[e]!==u._&&(this._children[e]._functional||this._children[e].hook(t))},t.prototype.mounted=function(){},t.prototype.unmounted=function(){},t.prototype.render=function(t){return void 0===t&&(t=null),null===t&&(t=this),l.h.bind(t),t.__render(l.h.bind(t),{ctx:t,statement:a.statement,loop:a.loop,slot:a.slot,d:a.dynamic,c:i.computed})},t.prototype.hydrate=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=null),null===t&&(t=this),t.__hydrate(e,{ctx:t,statement:s.statement,slot:s.slot,loop:s.loop,d:a.dynamic,c:i.computed})},t.prototype.template=function(){return""},t.prototype.component=function(){return this},t.prototype.getUID=function(t){return"hydr-"+o.default.createHID(t)},t.prototype.__defineGetter__("name",(function(){return this.constructor.name})),t}();e.default=c},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.makeObseervable=o,e.computed=function(t,e){void 0===e&&(e=!1);var n;n=e?(0,r.computed)(t.bind(this)):(0,r.computed)(t);return o(n),n},e.observable=function(t,e){void 0===e&&(e=!1);var n=(0,r.observable)(t);return o(n),n};var r=n(0);function o(t){return t._observable=!0,t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){if(!n._s)return;var i=[],s=[];function a(t,e,n){void 0===n&&(n=!0),i.push({value:t,fn:e}),s.push(n)}if(n.style||n.class){var l=(0,r.makeCss)({},n);l.style&&a(l.style,(function(t){for(var n in t)e.style.setProperty(n,t[n])})),l.class&&a(l.class,(function(t){e.className=t}))}if(n.on)for(var f in n.on)u(e,f,n.on[f]);if(n.attrs){var c=function(t){a(n.attrs[t],(function(n){e.setAttribute(t,n)}))};for(var d in n.attrs)c(d)}i.length>0&&o.api.subscribe((function(){for(var t=0;t<i.length;t++){var e=i[t].value();if(s[t])return void(s[t]=!1);i[t].fn(e)}}))};n(24);var r=n(2),o=n(1);function u(t,e,n){e=e.toLowerCase(),n?t.addEventListener(e,i):t.removeEventListener(e,i),(t._listeners||(t._listeners={}))[e]=n}function i(t){return this._listeners[t.type](t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.subscribe=function(t,e,n){void 0===n&&(n=!0);if("function"!=typeof t)return e(t);(0,r.subscribe)((function(){var r=t();if(n)return n=!1,!1;e(r)}))};var r=n(0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments,e=function(){if(t.length%3!=0)throw new Error("Statement should be odd number");for(var e=[],n=0;n<t.length;n+=3){var o=t[n],u=t[n+1],i=t[n+2],s=null;if(u,"function"==typeof o?o()&&(s=i):o&&(s=i),null!==s)if(s._observable||(s=s(r.h)),u>1)for(a=0;a<u;a++)e.push(s[a]);else e.push(s);else for(var a=0;a<u;a++)e.push(document.createComment(""))}return e};return e._observable=!0,e};var r=n(2)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=function(){var n=[],r="function"==typeof t?t():t;for(var o in r){var u=r[o];n.push(e(u,o))}return n};return n._observable=!0,n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,o){void 0===n&&(n=function(){});void 0===o&&(o=null);e.innerHTML="",(0,r.loadComponent)(t,(function(t){return n("Render"),e.append(t.render()),t.hook("mounted"),o&&o(t),n("Render"),t}))};var r=n(8)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=(new Date).getTime();if(void 0===r[t])return r[t]=e,r[t];console.log("[ tb "+t+" ]",e-r[t],"ms"),delete r[t]};var r={}},function(t,e,n){"use strict";n.r(e);var r={data:()=>({}),state:t=>({s1:t(9)}),computed:t=>({}),methods:{click:function(){alert(1)}}},o=n(2);let u=Object.assign({methods:{}},r),i=function(){o.Basic.call(this)};(i.prototype=Object.create(o.Basic.prototype)).constructor=i,i.prototype._methods={},i.prototype._componentName="Sbutton",i.prototype._shouldHydarate=!0,i.prototype._slotsData={default:{path:[0,0],tag:"span",index:0}},i.prototype._methods=Object.keys(u.methods),i.prototype._functional=!1;for(let t in u)"function"==typeof u[t]&&(i.prototype[t]=u[t]);for(let t in u.methods)i.prototype[t]=u.methods[t];i.prototype.__render=function(t,{ctx:e,components:n,render:r,statement:o,slot:u,loop:i,d:s,c:a}){return t("div",{staticClass:"button",attrs:{disabled:!0},on:{click:e.click}},[u(e,t,"default","span",{},["Default button text"])])},i.prototype.__hydrate=function(){return{_t:"h",t:"div",o:{staticClass:"button",on:{click:this.click},_s:!0},c:[-1]}};e.default=i}]);