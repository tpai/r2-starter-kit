(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var r=n(25),o=n(59),a=n(81),i=n(2),u=n.n(i),c=n(0),l=n.n(c),f=n(39),s=n(260);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,m(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,i["PureComponent"]),n=t,(r=[{key:"render",value:function(){var e=this.props.data;return u.a.createElement("div",{className:"ts divided items"},e.map(function(e,t){return u.a.createElement("div",{key:"item".concat(t),className:"item"},u.a.createElement("div",{className:"image"},u.a.createElement(s.a,{url:e.imgUrl,placeholder:e.imgPlaceholder})),u.a.createElement("div",{className:"content"},u.a.createElement(f.Link,{to:e.link,className:"header"},e.title),u.a.createElement("div",{className:"description"},e.desc)))}))}}])&&y(n.prototype,r),o&&y(n,o),t}();h(v,"propTypes",{data:l.a.arrayOf(l.a.shape({title:l.a.string,link:l.a.string,desc:l.a.string,imgUrl:l.a.string,imgPlaceholder:l.a.string}))}),h(v,"defaultProps",{data:[]});var g=n(256);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,P(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,i["PureComponent"]),n=t,(r=[{key:"componentDidMount",value:function(){this.props.getList()}},{key:"render",value:function(){var e=this.props,t=e.list,n=e.state;return u.a.createElement("div",null,"loading"===n&&u.a.createElement(g.a,null),"idle"===n&&u.a.createElement("div",{className:"ts text container"},u.a.createElement(v,{data:t})))}}])&&w(n.prototype,r),o&&w(n,o),t}();_(S,"propTypes",{list:l.a.arrayOf(l.a.object),state:l.a.oneOf(["loading","idle","failure"]),getList:l.a.func}),_(S,"defaultProps",{list:[],state:"idle",getList:function(){}});var k=S;t.default=Object(o.connect)(function(e){return{list:e.list,state:e.state}},function(e){return Object(r.bindActionCreators)({getList:a.b},e)})(k)},256:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(2),o=n.n(r);function a(){return o.a.createElement("div",{className:"ts active inverted dimmer"},o.a.createElement("div",{className:"ts text loader"},"Loading..."))}},258:function(e,t,n){e.exports={placeholder:"elements-placeholder-23ee2b",noBlur:"elements-noBlur-46c462"}},259:function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}void 0!==e&&e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},260:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(2),o=n.n(r),a=n(0),i=n.n(a),u=n(259),c=n.n(u),l=n(258),f=n.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=y(t).call(this),d(m(m(n=!o||"object"!==s(o)&&"function"!=typeof o?m(r):o)),"handleImageOnload",function(e){n.setState({url:e,noBlur:!0})}),n.state={url:e.placeholder,noBlur:!1},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["PureComponent"]),n=t,(a=[{key:"render",value:function(){var e,t=this,n=this.state,r=n.url,a=n.noBlur,i=this.props.url;return o.a.createElement("div",null,o.a.createElement("img",{ref:function(e){return t.component=e},style:{backgroundImage:"url('".concat(r,"')")},className:c()((e={},d(e,f.a.placeholder,!0),d(e,f.a.noBlur,a),e))}),o.a.createElement("img",{src:i,onLoad:function(){return setTimeout(function(){return t.handleImageOnload(i)},500)},style:{display:"none"}}))}}])&&p(n.prototype,a),i&&p(n,i),t}();d(h,"propTypes",{url:i.a.string.isRequired,placeholder:i.a.string.isRequired}),d(h,"defaultProps",{url:"",placeholder:""})}}]);