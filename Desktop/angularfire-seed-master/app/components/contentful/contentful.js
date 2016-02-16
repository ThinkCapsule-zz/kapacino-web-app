!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.contentful=e()}}(function(){var e;return function t(e,n,r){function o(s,u){if(!n[s]){if(!e[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[s]={exports:{}};e[s][0].call(f.exports,function(t){var n=e[s][1][t];return o(n?n:t)},f,f.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return new b(e||{})}function s(e){return e&&e.sys&&e.sys.type in C}function u(e){var t=C[e.sys.type];return t.parse(e)}function a(e){f(e,s,u);var t=m["default"](e);return Object.defineProperties(t,{limit:{value:e.limit,enumerable:!1},skip:{value:e.skip,enumerable:!1},total:{value:e.total,enumerable:!1}}),t}function c(e){return keys(e).reduce(function(t,n){var r=e[n];return t[n]=Array.isArray(r)?r.join(","):r,t},{})}function f(e,t,n){if(t(e))return n(e);if(e&&"object"==typeof e)for(var r in e)e[r]=f(e[r],t,n);return e}function l(e,t){return t?e.then(function(e){return t(null,e),e})["catch"](function(e){throw t(e),e}):e}Object.defineProperty(n,"__esModule",{value:!0});var p=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{!r&&u["return"]&&u["return"]()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n.createClient=i;var d=e("axios"),y=r(d),v=e("contentful-resolve-response"),m=r(v),w=e("querystring"),g=r(w),b=function(){function e(t){var n=t.accessToken,r=t.space,i=t.secure,s=t.host;if(o(this,e),!n)throw new TypeError("Expected property accessToken");if(!r)throw new TypeError("Expected property space");var u=i===!1,a=s&&s.split(":")||[],c=p(a,2),f=c[0],l=c[1];f=f||"cdn.contentful.com",l=l||(u?80:443),this.options={baseUrl:(u?"http":"https")+"://"+f+":"+l+"/spaces/"+r,accessToken:n}}return h(e,[{key:"_request",value:function(e,t){t||(t={}),t.access_token=this.options.accessToken;var n={headers:{},method:"get",url:""+this.options.baseUrl+e+"?"+g["default"].stringify(t)};return n.headers["Content-Type"]="application/vnd.contentful.delivery.v1+json",y["default"](n).then(function(e){return e.data})["catch"](function(e){throw e.data})}},{key:"asset",value:function(e,t){return l(this._request("/assets/"+e).then(u),t)}},{key:"assets",value:function(e,t){var n=new j(e),r=this._request("/assets",n).then(a);return l(r,t)}},{key:"contentType",value:function(e,t){var n=this._request("/content_types/"+e).then(A.parse);return l(n,t)}},{key:"contentTypes",value:function(e,t){var n=new j(e),r=this._request("/content_types",n).then(a);return l(r,t)}},{key:"entry",value:function(e,t){var n=this._request("/entries/"+e).then(x.parse);return l(n,t)}},{key:"entries",value:function(e,t){var n=new j(e),r=this._request("/entries",n).then(a);return l(r,t)}},{key:"space",value:function(e){return l(this._request(""),e)}},{key:"_pagedSync",value:function(e){var t=this;return this._request("/sync",e.query).then(function(n){return e.append(n),e.done?{items:e.items,nextSyncToken:e.nextSyncToken}:t._pagedSync(e)})}},{key:"sync",value:function(e,t){if(!e||!e.initial&&!e.nextSyncToken)throw new Error("Please provide either the initial flag or a nextSyncToken for syncing");var n=new j(e),r=this._pagedSync(new O(n)).then(function(e){return e.items=a(e),e});return l(r,t)}}]),e}(),_=function(){function e(t){var n=t.sys,r=t.fields;o(this,e),this.sys=new E(n),this.fields=r}return h(e,null,[{key:"parse",value:function(t){return new e(t)}}]),e}(),x=function(){function e(t){var n=t.sys,r=t.fields;o(this,e),this.sys=new E(n),this.fields=r}return h(e,null,[{key:"parse",value:function(t){return new e(t)}}]),e}(),A=function(){function e(t){var n=t.sys,r=t.fields,i=t.name,s=t.displayField;o(this,e),this.sys=new E(n),this.name=i,this.displayField=s,this.fields=r&&r.map(k.parse)}return h(e,null,[{key:"parse",value:function(t){return new e(t)}}]),e}(),k=function(){function e(t){o(this,e);for(var n in t)this[n]=t[n]}return h(e,null,[{key:"parse",value:function(t){return new e(t)}}]),e}(),j=function(){function e(t){o(this,e);for(var n in t)this[n]=t[n]}return h(e,[{key:"toQueryString",value:function(){return g["default"].stringify(this)}}],[{key:"parse",value:function(t){return new e(c(t))}}]),e}(),T=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];o(this,e);for(var n in t)this[n]=t[n]}return h(e,null,[{key:"parse",value:function(t){return new e(t)}}]),e}(),E=function(){function e(t){var n=t.id,r=t.revision,i=t.type,s=t.locale,u=t.contentType,a=t.createdAt,c=(t.linkType,t.updatedAt),f=t.space;o(this,e),this.id=n,this.revision=r,this.type=i,this.locale=s,this.space=f&&S.parse(f),this.contentType=u&&new S(u),this.createdAt=a&&new Date(a),this.updatedAt=c&&new Date(c)}return h(e,null,[{key:"parse",value:function(t){return new e(t)}}]),e}(),S=function(){function e(t){var n=t.sys;o(this,e),this.sys=new E(n)}return h(e,null,[{key:"parse",value:function(t){return new e(t)}}]),e}(),O=function(){function e(t){o(this,e),this.query=t,this.items=[],this.done=!1}return h(e,[{key:"append",value:function(e){var t=this;if(this.items=this.items.concat(e.items),e.nextPageUrl){var n=e.nextPageUrl.split("?");this.query=Object.keys(this.query).reduce(function(e,n){return"initial"!==n&&"type"!==n&&"sync_token"!==n&&(e[n]=t.query[n]),e},{}),this.query.sync_token=g["default"].parse(n[1]).sync_token}else if(e.nextSyncUrl){var r=e.nextSyncUrl.split("?");this.nextSyncToken=g["default"].parse(r[1]).sync_token,this.done=!0}}}]),e}(),C={Asset:_,ContentType:A,Entry:x,Space:T}},{axios:2,"contentful-resolve-response":21,querystring:20}],2:[function(e,t){t.exports=e("./lib/axios")},{"./lib/axios":4}],3:[function(e,t){"use strict";var n=e("./../defaults"),r=e("./../utils"),o=e("./../helpers/buildUrl"),i=e("./../helpers/cookies"),s=e("./../helpers/parseHeaders"),u=e("./../helpers/transformData"),a=e("./../helpers/urlIsSameOrigin");t.exports=function(e,t,c){var f=u(c.data,c.headers,c.transformRequest),l=r.merge(n.headers.common,n.headers[c.method]||{},c.headers||{});r.isFormData(f)&&delete l["Content-Type"];var p=new(XMLHttpRequest||ActiveXObject)("Microsoft.XMLHTTP");p.open(c.method.toUpperCase(),o(c.url,c.params),!0),p.onreadystatechange=function(){if(p&&4===p.readyState){var n=s(p.getAllResponseHeaders()),r=-1!==["text",""].indexOf(c.responseType||"")?p.responseText:p.response,o={data:u(r,n,c.transformResponse),status:p.status,statusText:p.statusText,headers:n,config:c};(p.status>=200&&p.status<300?e:t)(o),p=null}};var h=a(c.url)?i.read(c.xsrfCookieName||n.xsrfCookieName):void 0;if(h&&(l[c.xsrfHeaderName||n.xsrfHeaderName]=h),r.forEach(l,function(e,t){f||"content-type"!==t.toLowerCase()?p.setRequestHeader(t,e):delete l[t]}),c.withCredentials&&(p.withCredentials=!0),c.responseType)try{p.responseType=c.responseType}catch(d){if("json"!==p.responseType)throw d}r.isArrayBuffer(f)&&(f=new DataView(f)),p.send(f)}},{"./../defaults":7,"./../helpers/buildUrl":8,"./../helpers/cookies":9,"./../helpers/parseHeaders":11,"./../helpers/transformData":13,"./../helpers/urlIsSameOrigin":14,"./../utils":15}],4:[function(e,t){"use strict";var n=e("./defaults"),r=e("./utils"),o=e("./helpers/deprecatedMethod"),i=e("./core/dispatchRequest"),s=e("./core/InterceptorManager");!function(){var t=e("es6-promise");t&&"function"==typeof t.polyfill&&t.polyfill()}();var u=t.exports=function a(e){e=r.merge({method:"get",headers:{},transformRequest:n.transformRequest,transformResponse:n.transformResponse},e),e.withCredentials=e.withCredentials||n.withCredentials;var t=[i,void 0],s=Promise.resolve(e);for(a.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),a.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)s=s.then(t.shift(),t.shift());return s.success=function(e){return o("success","then","https://github.com/mzabriskie/axios/blob/master/README.md#response-api"),s.then(function(t){e(t.data,t.status,t.headers,t.config)}),s},s.error=function(e){return o("error","catch","https://github.com/mzabriskie/axios/blob/master/README.md#response-api"),s.then(null,function(t){e(t.data,t.status,t.headers,t.config)}),s},s};u.defaults=n,u.all=function(e){return Promise.all(e)},u.spread=e("./helpers/spread"),u.interceptors={request:new s,response:new s},function(){function e(){r.forEach(arguments,function(e){u[e]=function(t,n){return u(r.merge(n||{},{method:e,url:t}))}})}function t(){r.forEach(arguments,function(e){u[e]=function(t,n,o){return u(r.merge(o||{},{method:e,url:t,data:n}))}})}e("delete","get","head"),t("post","put","patch")}()},{"./core/InterceptorManager":5,"./core/dispatchRequest":6,"./defaults":7,"./helpers/deprecatedMethod":10,"./helpers/spread":12,"./utils":15,"es6-promise":16}],5:[function(e,t){"use strict";function n(){this.handlers=[]}var r=e("./../utils");n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},t.exports=n},{"./../utils":15}],6:[function(e,t){(function(n){"use strict";t.exports=function(t){return new Promise(function(r,o){try{"undefined"!=typeof window?e("../adapters/xhr")(r,o,t):"undefined"!=typeof n&&e("../adapters/http")(r,o,t)}catch(i){o(i)}})}}).call(this,e("_process"))},{"../adapters/http":3,"../adapters/xhr":3,_process:17}],7:[function(e,t){"use strict";var n=e("./utils"),r=/^\)\]\}',?\n/,o={"Content-Type":"application/x-www-form-urlencoded"};t.exports={transformRequest:[function(e,t){return n.isFormData(e)?e:n.isArrayBuffer(e)?e:n.isArrayBufferView(e)?e.buffer:!n.isObject(e)||n.isFile(e)||n.isBlob(e)?e:(!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]="application/json;charset=utf-8"),JSON.stringify(e))}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(r,"");try{e=JSON.parse(e)}catch(t){}}return e}],headers:{common:{Accept:"application/json, text/plain, */*"},patch:n.merge(o),post:n.merge(o),put:n.merge(o)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"}},{"./utils":15}],8:[function(e,t){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}var r=e("./../utils");t.exports=function(e,t){if(!t)return e;var o=[];return r.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(r.isArray(e)||(e=[e]),r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(n(t)+"="+n(e))}))}),o.length>0&&(e+=(-1===e.indexOf("?")?"?":"&")+o.join("&")),e}},{"./../utils":15}],9:[function(e,t){"use strict";var n=e("./../utils");t.exports={write:function(e,t,r,o,i,s){var u=[];u.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),n.isString(o)&&u.push("path="+o),n.isString(i)&&u.push("domain="+i),s===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}},{"./../utils":15}],10:[function(e,t){"use strict";t.exports=function(e,t,n){try{console.warn("DEPRECATED method `"+e+"`."+(t?" Use `"+t+"` instead.":"")+" This method will be removed in a future release."),n&&console.warn("For more information about usage see "+n)}catch(r){}}},{}],11:[function(e,t){"use strict";var n=e("./../utils");t.exports=function(e){var t,r,o,i={};return e?(n.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+r:r)}),i):i}},{"./../utils":15}],12:[function(e,t){"use strict";t.exports=function(e){return function(t){e.apply(null,t)}}},{}],13:[function(e,t){"use strict";var n=e("./../utils");t.exports=function(e,t,r){return n.forEach(r,function(n){e=n(e,t)}),e}},{"./../utils":15}],14:[function(e,t){"use strict";function n(e){var t=e;return i&&(s.setAttribute("href",t),t=s.href),s.setAttribute("href",t),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:"/"===s.pathname.charAt(0)?s.pathname:"/"+s.pathname}}var r,o=e("./../utils"),i=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a");r=n(window.location.href),t.exports=function(e){var t=o.isString(e)?n(e):e;return t.protocol===r.protocol&&t.host===r.host}},{"./../utils":15}],15:[function(e,t){"use strict";function n(e){return"[object Array]"===v.call(e)}function r(e){return"[object ArrayBuffer]"===v.call(e)}function o(e){return"[object FormData]"===v.call(e)}function i(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function u(e){return"number"==typeof e}function a(e){return"undefined"==typeof e}function c(e){return null!==e&&"object"==typeof e}function f(e){return"[object Date]"===v.call(e)}function l(e){return"[object File]"===v.call(e)}function p(e){return"[object Blob]"===v.call(e)}function h(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function d(e,t){if(null!==e&&"undefined"!=typeof e){var r=n(e)||"object"==typeof e&&!isNaN(e.length);if("object"==typeof e||r||(e=[e]),r)for(var o=0,i=e.length;i>o;o++)t.call(null,e[o],o,e);else for(var s in e)e.hasOwnProperty(s)&&t.call(null,e[s],s,e)}}function y(){var e={};return d(arguments,function(t){d(t,function(t,n){e[n]=t})}),e}var v=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:r,isFormData:o,isArrayBufferView:i,isString:s,isNumber:u,isObject:c,isUndefined:a,isDate:f,isFile:l,isBlob:p,forEach:d,merge:y,trim:h}},{}],16:[function(t,n){(function(r,o){(function(){"use strict";function i(e){return"function"==typeof e||"object"==typeof e&&null!==e}function s(e){return"function"==typeof e}function u(e){return"object"==typeof e&&null!==e}function a(e){$=e}function c(e){G=e}function f(){var e=r.nextTick,t=r.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);return Array.isArray(t)&&"0"===t[1]&&"10"===t[2]&&(e=setImmediate),function(){e(y)}}function l(){return function(){V(y)}}function p(){var e=0,t=new Z(y),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function h(){var e=new MessageChannel;return e.port1.onmessage=y,function(){e.port2.postMessage(0)}}function d(){return function(){setTimeout(y,1)}}function y(){for(var e=0;z>e;e+=2){var t=nt[e],n=nt[e+1];t(n),nt[e]=void 0,nt[e+1]=void 0}z=0}function v(){try{var e=t,n=e("vertx");return V=n.runOnLoop||n.runOnContext,l()}catch(r){return d()}}function m(){}function w(){return new TypeError("You cannot resolve a promise with itself")}function g(){return new TypeError("A promises callback cannot return that same promise.")}function b(e){try{return e.then}catch(t){return st.error=t,st}}function _(e,t,n,r){try{e.call(t,n,r)}catch(o){return o}}function x(e,t,n){G(function(e){var r=!1,o=_(n,t,function(n){r||(r=!0,t!==n?j(e,n):E(e,n))},function(t){r||(r=!0,S(e,t))},"Settle: "+(e._label||" unknown promise"));!r&&o&&(r=!0,S(e,o))},e)}function A(e,t){t._state===ot?E(e,t._result):t._state===it?S(e,t._result):O(t,void 0,function(t){j(e,t)},function(t){S(e,t)})}function k(e,t){if(t.constructor===e.constructor)A(e,t);else{var n=b(t);n===st?S(e,st.error):void 0===n?E(e,t):s(n)?x(e,t,n):E(e,t)}}function j(e,t){e===t?S(e,w()):i(t)?k(e,t):E(e,t)}function T(e){e._onerror&&e._onerror(e._result),C(e)}function E(e,t){e._state===rt&&(e._result=t,e._state=ot,0!==e._subscribers.length&&G(C,e))}function S(e,t){e._state===rt&&(e._state=it,e._result=t,G(T,e))}function O(e,t,n,r){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=t,o[i+ot]=n,o[i+it]=r,0===i&&e._state&&G(C,e)}function C(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r,o,i=e._result,s=0;s<t.length;s+=3)r=t[s],o=t[s+n],r?U(n,r,o,i):o(i);e._subscribers.length=0}}function q(){this.error=null}function R(e,t){try{return e(t)}catch(n){return ut.error=n,ut}}function U(e,t,n,r){var o,i,u,a,c=s(n);if(c){if(o=R(n,r),o===ut?(a=!0,i=o.error,o=null):u=!0,t===o)return void S(t,g())}else o=r,u=!0;t._state!==rt||(c&&u?j(t,o):a?S(t,i):e===ot?E(t,o):e===it&&S(t,o))}function P(e,t){try{t(function(t){j(e,t)},function(t){S(e,t)})}catch(n){S(e,n)}}function D(e,t){var n=this;n._instanceConstructor=e,n.promise=new e(m),n._validateInput(t)?(n._input=t,n.length=t.length,n._remaining=t.length,n._init(),0===n.length?E(n.promise,n._result):(n.length=n.length||0,n._enumerate(),0===n._remaining&&E(n.promise,n._result))):S(n.promise,n._validationError())}function I(e){return new at(this,e).promise}function M(e){function t(e){j(o,e)}function n(e){S(o,e)}var r=this,o=new r(m);if(!Y(e))return S(o,new TypeError("You must pass an array to race.")),o;for(var i=e.length,s=0;o._state===rt&&i>s;s++)O(r.resolve(e[s]),void 0,t,n);return o}function N(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(m);return j(n,e),n}function F(e){var t=this,n=new t(m);return S(n,e),n}function B(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function L(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function H(e){this._id=ht++,this._state=void 0,this._result=void 0,this._subscribers=[],m!==e&&(s(e)||B(),this instanceof H||L(),P(this,e))}function X(){var e;if("undefined"!=typeof o)e=o;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=e.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(e.Promise=dt)}var K;K=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var V,$,J,Y=K,z=0,G=({}.toString,function(e,t){nt[z]=e,nt[z+1]=t,z+=2,2===z&&($?$(y):J())}),Q="undefined"!=typeof window?window:void 0,W=Q||{},Z=W.MutationObserver||W.WebKitMutationObserver,et="undefined"!=typeof r&&"[object process]"==={}.toString.call(r),tt="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,nt=new Array(1e3);J=et?f():Z?p():tt?h():void 0===Q&&"function"==typeof t?v():d();var rt=void 0,ot=1,it=2,st=new q,ut=new q;D.prototype._validateInput=function(e){return Y(e)},D.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},D.prototype._init=function(){this._result=new Array(this.length)};var at=D;D.prototype._enumerate=function(){for(var e=this,t=e.length,n=e.promise,r=e._input,o=0;n._state===rt&&t>o;o++)e._eachEntry(r[o],o)},D.prototype._eachEntry=function(e,t){var n=this,r=n._instanceConstructor;u(e)?e.constructor===r&&e._state!==rt?(e._onerror=null,n._settledAt(e._state,t,e._result)):n._willSettleAt(r.resolve(e),t):(n._remaining--,n._result[t]=e)},D.prototype._settledAt=function(e,t,n){var r=this,o=r.promise;o._state===rt&&(r._remaining--,e===it?S(o,n):r._result[t]=n),0===r._remaining&&E(o,r._result)},D.prototype._willSettleAt=function(e,t){var n=this;O(e,void 0,function(e){n._settledAt(ot,t,e)},function(e){n._settledAt(it,t,e)})};var ct=I,ft=M,lt=N,pt=F,ht=0,dt=H;H.all=ct,H.race=ft,H.resolve=lt,H.reject=pt,H._setScheduler=a,H._setAsap=c,H._asap=G,H.prototype={constructor:H,then:function(e,t){var n=this,r=n._state;if(r===ot&&!e||r===it&&!t)return this;var o=new this.constructor(m),i=n._result;if(r){var s=arguments[r-1];G(function(){U(r,o,s,i)})}else O(n,o,e,t);return o},"catch":function(e){return this.then(null,e)}};var yt=X,vt={Promise:dt,polyfill:yt};"function"==typeof e&&e.amd?e(function(){return vt}):"undefined"!=typeof n&&n.exports?n.exports=vt:"undefined"!=typeof this&&(this.ES6Promise=vt),yt()}).call(this)}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:17}],17:[function(e,t){function n(){if(!s){s=!0;for(var e,t=i.length;t;){e=i,i=[];for(var n=-1;++n<t;)e[n]();t=i.length}s=!1}}function r(){}var o=t.exports={},i=[],s=!1;o.nextTick=function(e){i.push(e),s||setTimeout(n,0)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=r,o.addListener=r,o.once=r,o.off=r,o.removeListener=r,o.removeAllListeners=r,o.emit=r,o.binding=function(){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],18:[function(e,t){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e,t,o,i){t=t||"&",o=o||"=";var s={};if("string"!=typeof e||0===e.length)return s;var u=/\+/g;e=e.split(t);var a=1e3;i&&"number"==typeof i.maxKeys&&(a=i.maxKeys);var c=e.length;a>0&&c>a&&(c=a);for(var f=0;c>f;++f){var l,p,h,d,y=e[f].replace(u,"%20"),v=y.indexOf(o);v>=0?(l=y.substr(0,v),p=y.substr(v+1)):(l=y,p=""),h=decodeURIComponent(l),d=decodeURIComponent(p),n(s,h)?r(s[h])?s[h].push(d):s[h]=[s[h],d]:s[h]=d}return s};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],19:[function(e,t){"use strict";function n(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,s,u){return t=t||"&",s=s||"=",null===e&&(e=void 0),"object"==typeof e?n(i(e),function(i){var u=encodeURIComponent(r(i))+s;return o(e[i])?n(e[i],function(e){return u+encodeURIComponent(r(e))}).join(t):u+encodeURIComponent(r(e[i]))}).join(t):u?encodeURIComponent(r(u))+s+encodeURIComponent(r(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},{}],20:[function(e,t,n){"use strict";n.decode=n.parse=e("./decode"),n.encode=n.stringify=e("./encode")},{"./decode":18,"./encode":19}],21:[function(e,t){"use strict";function n(e){return i(e,r,function(t){return o(e,t)||t}),e.items||[]}function r(e){return e&&e.sys&&"Link"===e.sys.type}function o(e,t){var n=t.sys.linkType,r=t.sys.id,o=function(e){return e.sys.type===n&&e.sys.id===r};return s(e.items,o)||e.includes&&s(e.includes[n],o)}function i(e,t,n){if(t(e))return n(e);if(e&&"object"==typeof e){for(var r in e)e.hasOwnProperty(r)&&(e[r]=i(e[r],t,n));return e}return e}function s(e,t){if(e)for(var n=0,r=e.length;r>n;n++)if(t(e[n]))return e[n]}t.exports=n},{}]},{},[1])(1)});
