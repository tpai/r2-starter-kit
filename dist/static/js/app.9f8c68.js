(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{"29Z3":function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return i}));var n=r("i7Pf");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=Object(n.b)("ui/state/SET_LOADING",(function(e){return{payload:e}})),i=Object(n.c)({isLoading:!1},a({},u,(function(e,t){var r=t.payload;return o(o({},e),{},{isLoading:r})})))},"843/":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var n=r("ho2p"),c=function(e){return e.response.repos||{}},o=function(e){return c(e).data||[]},a=function(e){var t=function(e){return c(e).total||0}(e),r=function(e){return c(e).current||0}(e);if(!(r>=Math.ceil(t/n.a)))return r+1}},GWjx:function(e,t,r){e.exports={default:"Loading-default-168c48"}},TISp:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}));var n=function(e){return function(e){return e.response.user||{}}(e).data||{}},c=function(e){return n(e).login||""}},YwmI:function(e,t,r){e.exports={default:"NotFound-default-812cce"}},ho2p:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=15},"lR2/":function(e,t,r){"use strict";r.d(t,"a",(function(){return E})),r.d(t,"b",(function(){return S})),r.d(t,"c",(function(){return D}));var n=r("5rFJ"),c=r("i7Pf"),o=r("u4tm"),a=r("AU/w");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,c,o=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){a=!0,c=e},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw c}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t,r,n,c,o,a){try{var u=e[o](a),i=u.value}catch(e){return void r(e)}u.done?t(i):Promise.resolve(i).then(n,c)}var p=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,r){var n,c,o,a,u,s,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,r);case 2:if(!((n=e.sent).status>=500)){e.next=5;break}throw new Error(n);case 5:o=f(n.headers.entries());try{for(o.s();!(a=o.n()).done;)"x-total-count"===(u=a.value)[0]&&(c=Number(u[1]))}catch(e){o.e(e)}finally{o.f()}return e.next=9,n.json();case 9:return s=e.sent,l=i({body:s,status:n.status,statusText:n.statusText},c?{total:c}:{}),e.abrupt("return",n.status>=400?{error:l}:{success:l});case 12:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,c){var o=e.apply(t,r);function a(e){b(o,n,c,a,u,"next",e)}function u(e){b(o,n,c,a,u,"throw",e)}a(void 0)}))});return function(e,r){return t.apply(this,arguments)}}(),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(i({},e),{},{mode:"cors",headers:i({"content-type":"application/json"},e.headers),credentials:"include",method:e.method||"GET",body:JSON.stringify(e.body)})},O=function(e,t){return p(e,d(t))},j=function(e){return O("/api/users/".concat(e))},m=function(e,t){var r=t.page,n=void 0===r?1:r,c=t.limit,o=void 0===c?10:c;return O("/api/users/".concat(e,"/repos?_page=").concat(n,"&_limit=").concat(o))},y=r("ho2p"),v=r("mKeD"),g=r("whpo"),h=r("29Z3"),w=r("843/"),x=r("TISp"),P=function(e){return function(e){return e.ui.state||{}}(e).isLoading||!1},E=Object(c.b)("repos/DID_MOUNT"),S=Object(c.b)("repos/LOAD_MORE"),A={didMount:regeneratorRuntime.mark((function(){var e,t,r,c,u,i,s,f,l;return regeneratorRuntime.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,e=Object(o.c)({path:"/:user"}),b.next=4,Object(n.d)(e);case 4:return t=b.sent,r=(t||{}).params,c=(void 0===r?{}:r).user,u=void 0===c?"tpai":c,b.next=9,Object(n.c)(Object(h.b)(!0));case 9:return b.next=11,Object(n.b)(j,u);case 11:if(!(null==(i=b.sent)?void 0:i.success)){b.next=17;break}if("Not Found"!==(null==i||null===(s=i.success)||void 0===s||null===(f=s.body)||void 0===f?void 0:f.message)){b.next=15;break}throw new Error("User not found");case 15:return b.next=17,Object(n.c)(Object(g.b)(i.success.body));case 17:return b.next=19,Object(n.b)(m,u,{page:1,limit:y.a});case 19:if(!(null==(l=b.sent)?void 0:l.success)){b.next=27;break}return b.next=23,Object(n.c)(Object(v.d)(l.success.body));case 23:return b.next=25,Object(n.c)(Object(v.e)(l.success.total));case 25:return b.next=27,Object(n.c)(Object(v.c)(1));case 27:b.next=34;break;case 29:return b.prev=29,b.t0=b.catch(0),console.log(b.t0),b.next=34,Object(n.c)(Object(a.d)("/not-found"));case 34:return b.prev=34,b.next=37,Object(n.c)(Object(h.b)(!1));case 37:return b.finish(34);case 38:case"end":return b.stop()}}),E,null,[[0,29,34,38]])})),loadMore:regeneratorRuntime.mark((function(){var e,t,r,c,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(n.d)(P);case 2:return e=a.sent,a.next=5,Object(n.d)(w.b);case 5:if(t=a.sent,!e&&t){a.next=8;break}return a.abrupt("return");case 8:return a.prev=8,a.next=11,Object(n.c)(Object(h.b)(!0));case 11:return a.next=13,Object(n.d)(x.b);case 13:return r=a.sent,a.next=16,Object(n.b)(m,r,{page:t,limit:y.a});case 16:if(c=a.sent,!(o=c.success)){a.next=25;break}return a.next=21,Object(n.c)(Object(v.a)(o.body));case 21:return a.next=23,Object(n.c)(Object(v.e)(o.total));case 23:return a.next=25,Object(n.c)(Object(v.c)(t));case 25:a.next=30;break;case 27:a.prev=27,a.t0=a.catch(8),console.log(a.t0);case 30:return a.prev=30,a.next=33,Object(n.c)(Object(h.b)(!1));case 33:return a.finish(30);case 34:case"end":return a.stop()}}),S,null,[[8,27,30,34]])}))},D={didMount:regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(n.e)(E.toString(),A.didMount);case 2:case"end":return e.stop()}}),e)})),loadMore:regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(n.e)(S.toString(),A.loadMore);case 2:case"end":return e.stop()}}),e)}))}},mKeD:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return f})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return b}));var n,c=r("i7Pf");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=Object(c.b)("response/repos/ADD_DATA",(function(e){return{payload:e}})),s=Object(c.b)("response/repos/SET_DATA",(function(e){return{payload:e}})),f=Object(c.b)("response/repos/SET_TOTAL",(function(e){return{payload:e}})),l=Object(c.b)("response/repos/SET_CURRENT",(function(e){return{payload:e}})),b=Object(c.c)({data:[],total:0,current:0},(u(n={},i,(function(e,t){var r=t.payload;return a(a({},e),{},{data:[].concat(e.data,r)})})),u(n,s,(function(e,t){var r=t.payload;return a(a({},e),{},{data:r})})),u(n,f,(function(e,t){var r=t.payload;return a(a({},e),{},{total:r})})),u(n,l,(function(e,t){var r=t.payload;return a(a({},e),{},{current:r})})),n))},tjUo:function(e,t,r){"use strict";r.r(t);r("Zvmr"),r("ls82");var n=r("q1tI"),c=r.n(n),o=r("i8i4"),a=r.n(o),u=r("/MKj"),i=r("Ty5D"),s=r("u4tm"),f=r("17x9"),l=r.n(f),b=r("L3fG"),p=r("GWjx"),d=r.n(p);function O(e){var t=e.isLoading,r=Object(n.useRef)(document.createElement("div")),o=document.getElementById("overlay");return Object(n.useEffect)((function(){return o.appendChild(r.current),function(){o.removeChild(r.current)}}),[]),Object(n.useEffect)((function(){return t?Object(b.b)(r):Object(b.c)(r),function(){Object(b.a)()}}),[t]),a.a.createPortal(t?c.a.createElement("div",{"data-testid":"loader",className:d.a.default},c.a.createElement("div",{className:"ts active inverted dimmer"},c.a.createElement("div",{className:"ts loader"}))):null,r.current)}function j(){var e={isLoading:Object(u.e)((function(e){return e.ui.state.isLoading}))};return c.a.createElement(O,e)}O.propTypes={isLoading:l.a.bool},O.defaultProps={isLoading:!1};var m=r("YwmI"),y=r.n(m);function v(){return c.a.createElement("div",{className:y.a.default},c.a.createElement("div",{className:"ts container very narrow segment"},c.a.createElement("img",{src:"https://placekitten.com/500/300",className:"ts fluid rounded image",alt:"kitty"})),c.a.createElement("div",{className:"ts big header"},"Nya Found"))}var g=r("rRWa"),h=r("i7Pf"),w=r("1mXj"),x=r("tRgb"),P=r("ANjH"),E=r("mKeD"),S=r("whpo"),A=Object(P.c)({repos:E.b,user:S.a}),D=r("29Z3"),k=Object(P.c)({state:D.a}),T=r("LhCv"),R=Object(T.a)(),I=r("5rFJ"),N=r("lR2/");function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var M,_,U=(_=N.c,function(e){if(Array.isArray(e))return L(e)}(M=Object.keys(_).map((function(e){return _[e]()})))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(M)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(e,t):void 0}}(M)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),C=regeneratorRuntime.mark(J);function F(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function J(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)(F(U));case 2:case"end":return e.stop()}}),C)}var K,Z=Object(g.a)(),W=(Object(w.createLogger)({diff:!0}),[Z,Object(x.a)(R)]),$=Object(h.a)({reducer:(K=R,Object(P.c)({router:Object(s.b)(K),response:A,ui:k})),middleware:W});Z.run(J);var B=$,Y=Object(n.lazy)((function(){return Promise.all([r.e("vendor"),r.e("styles"),r.e("repos")]).then(r.bind(null,"SOfp"))}));a.a.render(c.a.createElement(u.a,{store:B},c.a.createElement(s.a,{history:R},c.a.createElement(n.Suspense,{fallback:null},c.a.createElement(j,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:Y}),c.a.createElement(i.a,{exact:!0,path:"/not-found",render:function(){return c.a.createElement(v,null)}}),c.a.createElement(i.a,{path:"/:user",component:Y}))))),document.getElementById("react"))},whpo:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return i}));var n=r("i7Pf");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=Object(n.b)("response/user/SET_DATA",(function(e){return{payload:e}})),i=Object(n.c)({data:{}},a({},u,(function(e,t){var r=t.payload;return o(o({},e),{},{data:r})})))}},[["tjUo","runtime","vendor"]]]);