!function(t){function e(e){for(var o,i,u=e[0],a=e[1],l=e[2],d=0,f=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);for(c&&c(e);f.length;)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,u=1;u<n.length;u++){var a=n[u];0!==r[a]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={0:0},s=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=a;s.push([9,1]),n()}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"styles",{enumerable:!0,get:function(){return o.styles}}),Object.defineProperty(e,"classes",{enumerable:!0,get:function(){return o.classes}}),Object.defineProperty(e,"value",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"options",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"register",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"statement",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"slot",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"loop",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"dynamic",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"h",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"Basic",{enumerable:!0,get:function(){return f.default}});var o=n(13),r=p(n(6)),s=p(n(14)),i=p(n(15)),u=p(n(16)),a=p(n(17)),l=p(n(18)),c=p(n(19)),d=p(n(20)),f=p(n(21));function p(t){return t&&t.__esModule?t:{default:t}}},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=new(function(){function t(){this.components=[],this.last_hid=0}var e=t.prototype;return e.createHID=function(t){return this.last_hid=this.last_hid+1+t,this.last_hid},e.clearHID=function(){this.last_hid=0},e.registerComponent=function(t,e){void 0===e&&(e=null),null==e&&(e=t),t=e.prototype._componentName.toLowerCase(),this.components[t]=e},e.hasComponent=function(t){return!(void 0===this.components[t])},e.getHydrateComponent=function(t){if(!this.hasComponent(t))throw new Error("There is no "+t+" component registered");return this.components[t].prototype._shouldHydarate?new this.components[t]:null},e.getComponent=function(t){if(!this.hasComponent(t))throw new Error("There is no "+t+" component registered");return new this.components[t]},t}());e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"hydrate",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"statement",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"loop",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"slot",{enumerable:!0,get:function(){return i.default}});var o=u(n(11)),r=u(n(24)),s=u(n(25)),i=u(n(26));function u(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("function"==typeof t)return t();return t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.loadComponent=function(t,e){t instanceof Promise?t.then((function(t){e(new t.default)})):e(new t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.d=void 0;e.d=2},function(t,e,n){t.exports=n(10)},function(t,e,n){"use strict";var o,r=d(n(4)),s=n(5),i=(d(n(27)),d(n(29))),u=d(n(30)),a=d(n(31)),l=d(n(32)),c=d(n(28));function d(t){return t&&t.__esModule?t:{default:t}}function f(){(0,s.hydrate)(l.default,o,c.default)}(0,c.default)("SSR-Build"),r.default.registerComponent(i.default),r.default.registerComponent(u.default),r.default.registerComponent(a.default),(0,c.default)("SSR-Build"),o=document.getElementById("layout"),f()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.compiler=p,e.default=function(t,e,n,o){void 0===n&&(n=function(){});void 0===o&&(o=null);(0,a.loadComponent)(t,(function(t){n("Hydration");var r=[t];i.default.clearHID();for(var s=_(e),u=0;u<r.length;u++)h(r[u],s[u]);return t.hook("mounted"),o&&o(t),n("Hydration"),t}))};var o,r=n(2),s=n(12),i=(o=n(4))&&o.__esModule?o:{default:o},u=n(0),a=n(7);n(1);function l(t,e){e._s&&r.api.property(t,e,null)}function c(t,e,n,o){var s=e[n],i=o();if(Array.isArray(i))for(var u=0;u<i.length;u++){var a=i[u];"function"==typeof a&&(a=a())}else r.api.insert(s,i,null)}function d(t,e){var n=[];null!==t&&(n=_(t));for(var o=0;o<e.length;o++)e[o]!==s._&&c(0,n,o,e[o])}function f(t,e,n){if(void 0===e&&(e={}),void 0===n&&(n=[]),e.id){var o=document.getElementById(""+e.id);r.api.subscribe((function(){l(o,e),d(o,n)}))}}function p(t,e,n){if(void 0===e&&(e={}),void 0===n&&(n=[]),(0,u.options)(this,e),!i.default.hasComponent(t))return f.call(this,t,e,n),s._;var o,r,a=i.default.getHydrateComponent(t);return null===a?s._:(void 0!==e.props&&a.passProps(e.props),a.passSlots("default",n),r=a,(o=this).addChildren(r),r.setParent(o),h(a))}function h(t){return t.hydrate(t,p.bind(t)),s._}function _(t){return t.childNodes}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e._=void 0;e._=-1},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.handleClassObject=s,e.classes=function(t,e){var n=arguments;void 0===t&&(t=[]);void 0===e&&(e={});return function(){for(var t=[],e=0;e<n.length;e++){var o=n[e];if(Array.isArray(o))for(var i=0;i<o.length;i++)t.push((0,r.default)(o[i]));else"object"==typeof o?t=t.concat(s(o)):"function"==typeof o?t=t.concat(s((0,r.default)(o))):t.push(o)}return(t=t.filter((function(t,e,n){return n.indexOf(t)===e}))).join(" ")}},e.handleStylesObject=i,e.styles=function(){var t=arguments;return function(){for(var e={},n=0;n<t.length;n++)"object"==typeof t[n]?i(e,t[n]):i(e,(0,r.default)(t[n]));return e}};var o,r=(o=n(6))&&o.__esModule?o:{default:o};function s(t){var e=[];for(var n in t)(0,r.default)(t[n])&&e.push(n);return e}function i(t,e){for(var n in e){var o=(0,r.default)(e[n]);null!==o&&(t[(s=n,s.replace(/\.?([A-Z]+)/g,(function(t,e){return"-"+e.toLowerCase()})).replace(/^-/,""))]=o)}var s;return t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n={styles:!1};e.staticStyle?n.styles=!0:e.staticStyle={};e.dynamicStyle?n.styles=!0:e.dynamicStyle=[];n.styles&&(e.style=o.styles.apply(t,[e.staticStyle].concat(e.dynamicStyle)));n.styles||(delete e.staticStyle,delete e.dynamicStyle);return e};var o=n(0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){void 0===e&&(e=null);null==e&&(e=t,t=t.name);t=t.toLowerCase(),window._SinuousComponents[t]=e},window._SinuousComponents={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments,e=function(){if(t.length%3!=0)throw new Error("Statement should be odd number");for(var e=[],n=0;n<t.length;n+=3){var r=t[n],s=t[n+1],i=t[n+2],u=null;if("function"==typeof r?r()&&(u=i):r&&(u=i),null!==u)if(u._observable||(u=u(o.h)),s>1)for(a=0;a<s;a++)e.push(u[a]);else e.push(u);else for(var a=0;a<s;a++)e.push(document.createComment(""))}return e};return e._observable=!0,e};var o=n(0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,o,r,s){var i=s;t._slots[n]&&(i=t._slots[n]);if(null===o)return i;return e(o,r,i)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=function(){var n=[],o="function"==typeof t?t():t;for(var r in o){var s=o[r];n.push(e(s,r))}return n};return n._observable=!0,n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,o){return function(){var r=e();return t(r,n,o)}};n(2)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){void 0===e&&(e={});void 0===n&&(n=[]);t=t.toLowerCase();if((0,s.options)(this,e),u.includes(t))return(0,r.h)(t,e,n);var o=i.default.getComponent(t);void 0!==e.props&&o.passProps(e.props);for(var a in e.$slots)o.passSlots(a,e.$slots[a]);return function(t,e){t.addChildren(e),e.setParent(t)}(this,o),o.render()};var o,r=n(2),s=(n(1),n(0)),i=(o=n(4))&&o.__esModule?o:{default:o};var u=["i","div","span","hr","br","strong","pre"]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,r=(o=n(4))&&o.__esModule?o:{default:o},s=(n(22),n(23)),i=n(5),u=n(0),a=n(0);var l=0,c=function(){function t(){this._isComponent=!0,this.hid=++l,this._props=this.props(),this._passedProps={},this._data=this.data(),this._state=this.state(s.observable),this._slots={default:[]},this._computed=this.computed(s.computed),this._children=[],this.initProps(),this.setChildren(),this.setParent(),this.bindContext()}return t.prototype.bindContext=function(){for(var t in this._computed)this._computed[t]=this._computed[t].bind(this)},t.prototype.setChildren=function(t){void 0===t&&(t=[]),this._children=t},t.prototype.addChildren=function(t){this._children.push(t)},t.prototype.setParent=function(t){void 0===t&&(t=null),this._parent=t},t.prototype.props=function(){return{}},t.prototype.initProps=function(){for(var t in this._props){var e=this._props[t],n=null;"function"==typeof e||(n=e.default()),this._data[t]=n}},t.prototype.passSlots=function(t,e){this._slots[t]=e},t.prototype.passProps=function(t){for(var e in t)t[e]._observable&&(this._isStateful=!0),this._data[e]=t[e]},t.prototype.hasStatefullData=function(){var t=!1;for(var e in this._passedProps){for(var n in this._passedProps[e])if(this._passedProps[e][n]){t=!0;break}if(t)break}return t&&this._isStateful},t.prototype.hasStatelessData=function(){return Object.keys(this._data).length>0},t.prototype.data=function(){return{}},t.prototype.computed=function(){return{}},t.prototype.state=function(t){return{}},t.prototype.template=function(){},t.prototype.childComponents=function(){},t.prototype.hook=function(t){void 0===t&&(t="mounted"),this[t]&&this[t].call(this);for(var e=0;e<this._children.length;e++)this._children[e].hook(t)},t.prototype.mounted=function(){},t.prototype.unmounted=function(){},t.prototype.render=function(t){return void 0===t&&(t=null),null===t&&(t=this),a.h.bind(t),t.__render(a.h.bind(t),{ctx:t,statement:u.statement,loop:u.loop,slot:u.slot,d:u.dynamic,c:s.computed})},t.prototype.hydrate=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=null),null===t&&(t=this),t.__hydrate(e,{ctx:t,statement:i.statement,slot:i.slot,loop:i.loop,d:u.dynamic,c:s.computed})},t.prototype.template=function(){return""},t.prototype.component=function(){return this},t.prototype.getUID=function(t){return"hydr-"+r.default.createHID(t)},t.prototype.__defineGetter__("name",(function(){return this.constructor.name})),t}();e.default=c},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.makeObseervable=r,e.computed=function(t,e){void 0===e&&(e=!1);var n;n=e?(0,o.computed)(t.bind(this)):(0,o.computed)(t);return r(n),n},e.observable=function(t,e){void 0===e&&(e=!1);var n=(0,o.observable)(t);return r(n),n};var o=n(1);function r(t){return t._observable=!0,t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments,e=function(){if(t.length%3!=0)throw new Error("Statement should be odd number");for(var e=[],n=0;n<t.length;n+=3){var r=t[n],s=t[n+1],i=t[n+2],u=null;if(s,"function"==typeof r?r()&&(u=i):r&&(u=i),null!==u)if(u._observable||(u=u(o.h)),s>1)for(a=0;a<s;a++)e.push(u[a]);else e.push(u);else for(var a=0;a<s;a++)e.push(document.createComment(""))}return e};return e._observable=!0,e};var o=n(0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=function(){var n=[],o="function"==typeof t?t():t;for(var r in o){var s=o[r];n.push(e(s,r))}return n};return n._observable=!0,n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,r){void 0===n&&(n=function(){});void 0===r&&(r=null);e.innerHTML="",(0,o.loadComponent)(t,(function(t){return n("Render"),e.append(t.render()),t.hook("mounted"),r&&r(t),n("Render"),t}))};var o=n(7)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=(new Date).getTime();if(void 0===o[t])return o[t]=e,o[t];console.log("[ tb "+t+" ]",e-o[t],"ms"),delete o[t]};var o={}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(8),s={data:()=>({clicks:1}),state:t=>({visible:t(r.d),clicks2:t({a:2})}),computed(t){return{computed2:t(()=>{let t=[];for(let e in[1,2,3])t.push(this._state.visible());return 2*this._state.visible()*5})}},methods:{click:function(t){this._data.clicks++},reactive_click:function(t){this._state.visible(this._state.visible()+1)}}};let i=Object.assign({methods:{}},s),u=function(){o.Basic.call(this)};(u.prototype=Object.create(o.Basic.prototype)).constructor=u,u.prototype._methods={},u.prototype._componentName="Test",u.prototype._shouldHydarate=!0,u.prototype.__slots={};for(let t in i)"function"==typeof i[t]&&(u.prototype[t]=i[t]);for(let t in i.methods)u.prototype[t]=i.methods[t];u.prototype.__render=function(t,{ctx:e,components:n,render:o,statement:r,slot:s,loop:i,d:u,c:a}){return t("div",{onclick:e.reactive_click,id:e.getUID(2)},[()=>"test "+e._state.visible()])},u.prototype.__hydrate=function(t,{ctx:e,components:n,render:o,statement:r,slot:s,loop:i,d:u,c:a}){return t("div",{onclick:e.reactive_click,id:e.getUID(2),_s:!0},[()=>"test "+e._state.visible()])};e.default=u},function(t,e,n){"use strict";n.r(e);var o=n(0),r={data:()=>({ddd:"[test variable ddd]",timer1:null,timer2:null,visible:!0}),state:t=>({s1:t(!0),s2:t(10),s3:t(!1)}),computed:t=>({}),methods:{makeIf:function(){this._state.s1(!0),this._state.s3(!0),setTimeout(()=>{this._state.s1(!1),this._state.s3(!0)},1e3),setTimeout(()=>{this._state.s1(!1),this._state.s3(!1)},2e3),setTimeout(()=>{this._state.s1(!0),this._state.s3(!1)},3e3)},mounted:function(){this.makeIf(),this._data.timer1=setInterval(()=>{this.makeIf()},5e3),this._data.timer2=setInterval(()=>{this._state.s2(this._state.s2()+2)},500)},unmounted:function(){clearInterval(this._data.timer1),clearInterval(this._data.timer2)}}};let s=Object.assign({methods:{}},r),i=function(){o.Basic.call(this)};(i.prototype=Object.create(o.Basic.prototype)).constructor=i,i.prototype._methods={},i.prototype._componentName="Test2",i.prototype._shouldHydarate=!0,i.prototype.__slots={default:[0,5],footer:[0,7]};for(let t in s)"function"==typeof s[t]&&(i.prototype[t]=s[t]);for(let t in s.methods)i.prototype[t]=s.methods[t];i.prototype.__render=function(t,{ctx:e,components:n,render:o,statement:r,slot:s,loop:i,d:u,c:a}){return t("div",{onclick:()=>alert(1),dynamicStyle:{paddingTop:e._state.s2},id:e.getUID(4)},[()=>"test "+e._state.s2(),t("br",{},[]),r(e._state.s1,2,t=>[t("div",{id:e.getUID(7)},[t("span",{},["static 1"]),()=>`[visible] show ${e._data.ddd} - ${e._state.s3()}`,t("span",{},["static 2"])]),r(e._data.visible,2,t=>[t("span",{},["[s1] test"]),t("strong",{$slots:{default:["[s1] test 2"]},id:e.getUID(12)},[])])],e._state.s3,1,t=>t("div",{},["[s3] test"])),[t("div",{},["[none] hide"])],s(e,t,"default",null,{},["default slot value"]),t("div",{},["after-once-if"]),s(e,t,"footer","div",{class:"footer",style:"background: #efefef;"},["footer slot value"])])},i.prototype.__hydrate=function(t,{ctx:e,components:n,render:o,statement:r,slot:s,loop:i,d:u,c:a}){return t("div",{onclick:()=>alert(1),dynamicStyle:{paddingTop:e._state.s2},id:e.getUID(4),_s:!0},[()=>"test "+e._state.s2(),-1,r(e._state.s1,2,t=>[t("div",{id:e.getUID(7)},[t("span",{},["static 1"]),()=>`[visible] show ${e._data.ddd} - ${e._state.s3()}`,t("span",{},["static 2"])]),r(e._data.visible,2,t=>[t("span",{},["[s1] test"]),t("strong",{$slots:{default:["[s1] test 2"]},id:e.getUID(12)},[])])],e._state.s3,1,t=>t("div",{},["[s3] test"])),-1,-1,-1,-1])};e.default=i},function(t,e,n){"use strict";n.r(e);var o=n(0);let r=Object.assign({methods:{}},{}),s=function(){o.Basic.call(this)};(s.prototype=Object.create(o.Basic.prototype)).constructor=s,s.prototype._methods={},s.prototype._componentName="Sbutton",s.prototype._shouldHydarate=!1,s.prototype.__slots={default:[0,0]};for(let t in r)"function"==typeof r[t]&&(s.prototype[t]=r[t]);for(let t in r.methods)s.prototype[t]=r.methods[t];s.prototype.__render=function(t,{ctx:e,components:n,render:o,statement:r,slot:s,loop:i,d:u,c:a}){return t("div",{staticClass:"button"},[s(e,t,"default",null,{},[])])},s.prototype.__hydrate=function(t,{ctx:e,components:n,render:o,statement:r,slot:s,loop:i,d:u,c:a}){return-1};e.default=s},function(t,e,n){"use strict";n.r(e);var o=n(0),r={data:()=>({}),state:t=>({items:t([])}),computed:t=>({}),methods:{mounted:function(){let t=[];for(var e=0;e<1e4;e++)t.push(e);this._state.items(t)}}};let s=Object.assign({methods:{}},r),i=function(){o.Basic.call(this)};(i.prototype=Object.create(o.Basic.prototype)).constructor=i,i.prototype._methods={},i.prototype._componentName="PagesIndex",i.prototype._shouldHydarate=!0,i.prototype.__slots={};for(let t in s)"function"==typeof s[t]&&(i.prototype[t]=s[t]);for(let t in s.methods)i.prototype[t]=s.methods[t];i.prototype.__render=function(t,{ctx:e,components:n,render:o,statement:r,slot:s,loop:i,d:u,c:a}){return t("div",{id:e.getUID(23)},[i(e._state.items,(n,o)=>t("sbutton",{$slots:{default:[()=>"Button "+n]},id:e.getUID(24)},[]))])},i.prototype.__hydrate=function(t,{ctx:e,components:n,render:o,statement:r,slot:s,loop:i,d:u,c:a}){return t("div",{id:e.getUID(23)},[i(e._state.items,(n,o)=>t("sbutton",{id:e.getUID(24)},[]))])};e.default=i}]);