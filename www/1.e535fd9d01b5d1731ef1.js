webpackJsonp([1],{165:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{post:e.post,state:e.state}}function u(e){return{actions:Object(b.bindActionCreators)(s(O),e)}}function s(e){return v()(e,function(e,t,n){return"function"==typeof t?Object.assign({},e,r({},n,t)):e},{})}Object.defineProperty(t,"__esModule",{value:!0}),t.filterActions=s;var l=n(9),f=n.n(l),p=n(12),y=n.n(p),b=n(72),m=n(447),d=n(109),h=n(448),v=n.n(h),g=n(454),j=n(455),O=n(172),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),w=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),E(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.actions,n=e.match;(0,t.getPost)(n.params.id)}},{key:"render",value:function(){var e=this.props,t=e.post,n=e.state;return f.a.createElement("div",{className:"ts",style:{height:720}},"loading"===n&&f.a.createElement("div",{className:"ts active inverted dimmer"},f.a.createElement("div",{className:"ts text loader"},"Loading...")),f.a.createElement(g.a,{data:[{text:"Post List",link:"/"},{text:t.title}]}),f.a.createElement("div",{className:"ts divider"}),"idle"===n&&f.a.createElement(j.a,t))}}]),t}(l.Component);w.propTypes={actions:y.a.shape(),match:y.a.shape({params:y.a.shape({id:y.a.string})}),post:y.a.shape(),state:y.a.string},t.default=Object(d.connect)(c,u)(Object(m.a)(w))},447:function(e,t,n){"use strict";var r=(n(166),n(167),n(168),n(110),n(73),n(169),n(170),n(74),n(171));n.d(t,"a",function(){return r.a})},448:function(e,t,n){"use strict";/*!
 * object.reduce <https://github.com/jonschlinkert/object.reduce>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var r=n(449),a=n(452);e.exports=function(e,t,n,o){var i=arguments.length>2;if(e&&!Object.keys(e).length&&!i)return null;var c=r(t,o);return a(e,function(e,t,r){i?n=c(n,e,t,r):(n=e,i=!0)}),n}},449:function(e,t,n){"use strict";function r(e,t){for(var n=e.length,r=-1;++r<n;)if(i(e[r],t))return!0;return!1}function a(e,t){for(var n=t.length,a=-1;++a<n;)if(!r(e,t[a]))return!1;return!0}function o(e,t){for(var n in t)if(t.hasOwnProperty(n)&&!1===i(e[n],t[n]))return!1;return!0}function i(e,t){return"object"===s(e)?Array.isArray(e)&&Array.isArray(t)?a(e,t):o(e,t):e===t}function c(e){return function(t){return t[e]}}function u(e){return e}/*!
 * make-iterator <https://github.com/jonschlinkert/make-iterator>
 *
 * Copyright (c) 2014, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var s=n(450);e.exports=function(e,t){switch(s(e)){case"undefined":case"null":return u;case"function":return void 0!==t?function(n,r,a){return e.call(t,n,r,a)}:e;case"object":return function(t){return i(t,e)};case"regexp":return function(t){return e.test(t)};case"string":case"number":default:return c(e)}}},450:function(e,t,n){var r=n(451),a=Object.prototype.toString;e.exports=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if(!0===e||!1===e||e instanceof Boolean)return"boolean";if("string"==typeof e||e instanceof String)return"string";if("number"==typeof e||e instanceof Number)return"number";if("function"==typeof e||e instanceof Function)return"function";if(void 0!==Array.isArray&&Array.isArray(e))return"array";if(e instanceof RegExp)return"regexp";if(e instanceof Date)return"date";var t=a.call(e);return"[object RegExp]"===t?"regexp":"[object Date]"===t?"date":"[object Arguments]"===t?"arguments":"[object Error]"===t?"error":r(e)?"buffer":"[object Set]"===t?"set":"[object WeakSet]"===t?"weakset":"[object Map]"===t?"map":"[object WeakMap]"===t?"weakmap":"[object Symbol]"===t?"symbol":"[object Int8Array]"===t?"int8array":"[object Uint8Array]"===t?"uint8array":"[object Uint8ClampedArray]"===t?"uint8clampedarray":"[object Int16Array]"===t?"int16array":"[object Uint16Array]"===t?"uint16array":"[object Int32Array]"===t?"int32array":"[object Uint32Array]"===t?"uint32array":"[object Float32Array]"===t?"float32array":"[object Float64Array]"===t?"float64array":"object"}},451:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},452:function(e,t,n){"use strict";/*!
 * for-own <https://github.com/jonschlinkert/for-own>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var r=n(453),a=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){r(e,function(r,o){if(a.call(e,o))return t.call(n,e[o],o,e)})}},453:function(e,t,n){"use strict";/*!
 * for-in <https://github.com/jonschlinkert/for-in>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
e.exports=function(e,t,n){for(var r in e)if(!1===t.call(n,e[r],r,e))break}},454:function(e,t,n){"use strict";function r(e){var t=e.data;return o.a.createElement("div",{className:"ts breadcrumb"},t.map(function(e,n){var r=n===t.length-1;return o.a.createElement("div",{key:"crumb"+n,className:(r?"active":"")+" section"},e.link?o.a.createElement(u.b,{to:e.link},e.text):e.text,!r&&o.a.createElement("i",{className:"right angle icon divider"}))}))}var a=n(9),o=n.n(a),i=n(12),c=n.n(i),u=n(164);r.defaultProps={data:[{text:"Post List",link:"/"},{text:"Content"}]},r.propTypes={data:c.a.arrayOf(c.a.shape({link:c.a.string,text:c.a.string}))},t.a=r},455:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(9),c=n.n(i),u=n(12),s=n.n(u),l=n(456),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.title,r=e.author,a=void 0===r?{name:"",email:""}:r,o=e.body;return c.a.createElement("div",null,t&&c.a.createElement("div",{className:"ts card text container"},c.a.createElement("div",{className:"image"},c.a.createElement(l.a,{url:"https://picsum.photos/1200/720?image="+t,placeholderUrl:"https://picsum.photos/60/36?image="+t})),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},n),c.a.createElement("div",{className:"bulleted meta"},a.name+" ("+a.email+")"),c.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:o}}))))}}]),t}(i.Component);p.propTypes={id:s.a.number,title:s.a.string,author:s.a.shape({name:s.a.string,email:s.a.string}),body:s.a.string},t.a=p},456:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(9),c=n.n(i),u=n(12),s=n.n(u),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.handleImageOnload=function(e){n.setState({url:e}),n.component.style.filter="blur(0)"},n.state={url:e.placeholderUrl},n}return o(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({url:e.placeholderUrl})}},{key:"render",value:function(){var e=this,t=this.state.url,n=this.props.url;return c.a.createElement("div",null,c.a.createElement("img",{ref:function(t){return e.component=t},src:t,style:{filter:"blur(5px)"}}),c.a.createElement("img",{id:"preload_image",src:n,onLoad:function(){return setTimeout(function(){return e.handleImageOnload(n)},500)},style:{display:"none"}}))}}]),t}(i.Component);f.propTypes={url:s.a.string,placeholderUrl:s.a.string},t.a=f}});