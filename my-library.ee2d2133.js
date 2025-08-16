function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=s),s.register("kyEFX",function(t,n){var r,i;e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}}),s.register("bUb57",function(e,t){(()=>{const e={openMenuBtn:document.querySelector(".header-mob-menu-open-btn"),closeMenuBtn:document.querySelector(".header-mob-menu-close-btn"),menu:document.querySelector(".header-mob-menu")};function t(){document.body.classList.toggle("header-menu-open"),e.menu&&e.menu.classList.toggle("visually-hidden");const t=document.getElementById("auth-header");!document.getElementsByTagName("body")[0].classList.toString().includes("header-menu-open")&&window.innerWidth<767&&t?t.removeAttribute("style"):t&&t.setAttribute("style","display: block")}e.openMenuBtn&&e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn&&e.closeMenuBtn.addEventListener("click",t)})()}),s.register("5I0Ww",function(t,n){e(t.exports,"movieObject",function(){return b}),e(t.exports,"addAllEventListenersModal",function(){return E}),e(t.exports,"removeAllEventListenersModal",function(){return S}),e(t.exports,"clickOnMovieHandler",function(){return R}),e(t.exports,"movieId",function(){return k});var r=s("gWoIc"),i=s("edYM8"),o=s("edpgF"),a=s("9IiBV"),c=s("74Aiq"),l=s("gjiCh"),u=s("7tzR7"),h=s("37v9V");const d={backdrop:document.querySelector(".movie-backdrop"),closeBtn:document.querySelector('button[data-dismiss="modal"]'),cardModal:document.querySelector('ul[data-point="galery"]'),queueBtn:document.querySelector(".to-queue"),imgRef:document.querySelector(".image-container"),contentRef:document.querySelector(".content-markup"),addToWatchedButton:document.querySelector(".to-watched")},{backdrop:f,closeBtn:p,cardModal:g,queueBtn:m,imgRef:_,contentRef:y,addToWatchedButton:v}=d;let b={};const w=document.getElementById("myBtn");function E(){p&&p.addEventListener("click",I),window.addEventListener("keydown",C),f&&f.addEventListener("click",T),m&&m.addEventListener("click",o.onBtnQueueClick),v&&v.addEventListener("click",a.onAddToWatchedBtnClick)}function I(e){e.preventDefault(),f.classList.add("movie-backdrop--is-hidden"),(0,c.scrollFunction)(),S(),document.body.classList.remove("modal-open")}function C(e){e.preventDefault(),"Escape"===e.code&&(f.classList.add("movie-backdrop--is-hidden"),(0,c.scrollFunction)(),S(),document.body.classList.remove("modal-open"))}function T(e){e.target.classList.contains("movie-backdrop")&&(f.classList.add("movie-backdrop--is-hidden"),(0,c.scrollFunction)(),S(),document.body.classList.remove("modal-open"))}function S(){p&&p.removeEventListener("click",I),window.removeEventListener("keydown",C),f&&f.removeEventListener("click",T),m&&m.removeEventListener("click",o.onBtnQueueClick),v&&v.removeEventListener("click",a.onAddToWatchedBtnClick),(0,u.startSliderAutoplay)()}let k;async function R(e){if(e.preventDefault(),e.currentTarget===u.slideGalleryRef?m&&m.parentElement&&m.parentElement.classList.add("visually-hidden"):m&&m.parentElement&&m.parentElement.classList.remove("visually-hidden"),"IMG"!==e.target.nodeName)return;(0,l.startLoader)(),k=e.target.dataset.id,f&&f.setAttribute("id",k),await async function(e){const t=`${i.ID_URL}${e}?api_key=${i.API_KEY}&language=en-US`,n=await(0,r.getMovies)(t);return function(e){!function({title:e,original_title:t,vote_average:n,vote_count:r,popularity:s,genres:o,overview:a,poster_path:c}){let l=Math.round(s),u=n.toFixed(2),h=`\n  <img \n    src="${i.BASE_IMG_URL}${c}"\n      alt="${e} movie poster}" \n      width="375" height="478" \n      class="image"\n      />`;null===c&&(h=`\n  <img \n    src="https://dummyimage.com/395x574/000/fff.jpg&text=no+poster"\n      alt="${e} movie poster}" \n      width="395" height="574" \n      class="image"\n      />`);const d=`\n  <h2 class="title">${e}</h2>\n  <div class="properties">\n      <div class="titles">\n          <p class="property">Vote / Votes</p>\n          <p class="property">Popularity</p>\n          <p class="property">Original Title</p>\n          <p class="property">Genre</p>\n          <p class="property property--trailer">Trailer</p>\n      </div>\n      <div class="values">\n          <p class="value"><span class="first-mark">${u}</span>&nbsp;/&nbsp;<span class="second-mark">${r}</span></p>\n          <p class="value">${l}</p>\n          <p class="value">${t}</p>\n          <p class="value">${P(o)}</p>\n          <p class="value"> \n           <button class="modal-film__play-btn" type="button" ></button>\n          </p>\n          \n      </div>\n  </div>\n  <div class="about">\n      <p class="title">About</p>\n      <div class="about-container">\n          <p class="text">${a}</p>          \n      </div>\n  </div>\n      `;_.innerHTML=h,y.innerHTML=d}(e)}(n),b=n,n}(k);const t=document.querySelector(".modal-film__play-btn");t&&t.addEventListener("click",h.onTreilerBtnClick),(0,l.stopLoader)(),f&&f.classList.remove("movie-backdrop--is-hidden"),document.body.classList.add("modal-open"),w&&(w.style.display="none"),(0,u.stopSliderAutoplay)(),E(),function(e){const t=localStorage.getItem("queue");if(null===t)return void(m.textContent="Add to queue");JSON.parse(t.includes(e))?m.textContent="Remove from queue":m.textContent="Add to queue"}(k),function(e){const t=localStorage.getItem("watched");if(null===t)return void(v.textContent="Add to watched");JSON.parse(t.includes(e))?v.textContent="Remove from watched":v.textContent="Add to watched"}(k),v&&"add to watched"===v.textContent.toLowerCase()?v.classList.remove("is-active"):v&&v.classList.add("is-active"),m&&"add to queue"===m.textContent.toLowerCase()?m.classList.remove("is-active"):m&&m.classList.add("is-active")}g&&g.addEventListener("click",R);const P=e=>e.map(e=>e.name).join(", ")}),s.register("gWoIc",function(t,n){e(t.exports,"getMovies",function(){return i}),s("2shzp");var r=s("bRlFp");async function i(e){try{return(await r.default.get(`${e}`)).data}catch(e){console.error(e)}}}),s.register("2shzp",function(t,n){e(t.exports,"default",function(){return s("bRlFp").default});var r=s("bRlFp");const{Axios:i,AxiosError:o,CanceledError:a,isCancel:c,CancelToken:l,VERSION:u,all:h,Cancel:d,isAxiosError:f,spread:p,toFormData:g,AxiosHeaders:m,HttpStatusCode:_,formToJSON:y,getAdapter:v,mergeConfig:b}=r.default}),s.register("bRlFp",function(t,n){e(t.exports,"default",function(){return E});var r=s("2bBga"),i=s("djt5d"),o=s("6zSb1"),a=s("d0EKm"),c=s("hqlPG"),l=s("4bmvb"),u=s("83xK9"),h=s("2sjhC"),d=s("ksuZT"),f=s("50GW0"),p=s("aewVa"),g=s("121rJ"),m=s("av9gA"),_=s("gNhGc"),y=s("gbTL1"),v=s("enpjQ"),b=s("jd7iQ");const w=function e(t){const n=new(0,o.default)(t),s=(0,i.default)(o.default.prototype.request,n);return r.default.extend(s,o.default.prototype,n,{allOwnKeys:!0}),r.default.extend(s,n,null,{allOwnKeys:!0}),s.create=function(n){return e((0,a.default)(t,n))},s}(c.default);w.Axios=o.default,w.CanceledError=u.default,w.CancelToken=h.default,w.isCancel=d.default,w.VERSION=f.VERSION,w.toFormData=p.default,w.AxiosError=g.default,w.Cancel=w.CanceledError,w.all=function(e){return Promise.all(e)},w.spread=m.default,w.isAxiosError=_.default,w.mergeConfig=a.default,w.AxiosHeaders=y.default,w.formToJSON=e=>(0,l.default)(r.default.isHTMLForm(e)?new FormData(e):e),w.getAdapter=v.default.getAdapter,w.HttpStatusCode=b.default,w.default=w;var E=w}),s.register("2bBga",function(n,r){e(n.exports,"default",function(){return Y});var i=s("djt5d"),o=s("4TNnu");const{toString:a}=Object.prototype,{getPrototypeOf:c}=Object,{iterator:l,toStringTag:u}=Symbol,h=(d=Object.create(null),e=>{const t=a.call(e);return d[t]||(d[t]=t.slice(8,-1).toLowerCase())});var d;const f=e=>(e=e.toLowerCase(),t=>h(t)===e),p=e=>t=>typeof t===e,{isArray:g}=Array,m=p("undefined");const _=f("ArrayBuffer");const y=p("string"),v=p("function"),b=p("number"),w=e=>null!==e&&"object"==typeof e,E=e=>{if("object"!==h(e))return!1;const t=c(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||u in e||l in e)},I=f("Date"),C=f("File"),T=f("Blob"),S=f("FileList"),k=f("URLSearchParams"),[R,P,A,x]=["ReadableStream","Request","Response","Headers"].map(f);function N(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),g(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function O(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,D=e=>!m(e)&&e!==L;const M=(F="undefined"!=typeof Uint8Array&&c(Uint8Array),e=>F&&e instanceof F);var F;const U=f("HTMLFormElement"),B=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),q=f("RegExp"),j=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};N(n,(n,i)=>{let s;!1!==(s=t(n,i,e))&&(r[i]=s||n)}),Object.defineProperties(e,r)};const H=f("AsyncFunction"),V=(W="function"==typeof setImmediate,z=v(L.postMessage),W?setImmediate:z?($=`axios@${Math.random()}`,K=[],L.addEventListener("message",({source:e,data:t})=>{e===L&&t===$&&K.length&&K.shift()()},!1),e=>{K.push(e),L.postMessage($,"*")}):e=>setTimeout(e));var W,z,$,K;const G="undefined"!=typeof queueMicrotask?queueMicrotask.bind(L):void 0!==o&&o.nextTick||V;var Y={isArray:g,isArrayBuffer:_,isBuffer:function(e){return null!==e&&!m(e)&&null!==e.constructor&&!m(e.constructor)&&v(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||v(e.append)&&("formdata"===(t=h(e))||"object"===t&&v(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&_(e.buffer),t},isString:y,isNumber:b,isBoolean:e=>!0===e||!1===e,isObject:w,isPlainObject:E,isReadableStream:R,isRequest:P,isResponse:A,isHeaders:x,isUndefined:m,isDate:I,isFile:C,isBlob:T,isRegExp:q,isFunction:v,isStream:e=>w(e)&&v(e.pipe),isURLSearchParams:k,isTypedArray:M,isFileList:S,forEach:N,merge:function e(){const{caseless:t}=D(this)&&this||{},n={},r=(r,i)=>{const s=t&&O(n,i)||i;E(n[s])&&E(r)?n[s]=e(n[s],r):E(r)?n[s]=e({},r):g(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&N(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(N(t,(t,r)=>{n&&v(t)?e[r]=(0,i.default)(t,n):e[r]=t},{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],r&&!r(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&c(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:h,kindOfTest:f,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(g(e))return e;let t=e.length;if(!b(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[l]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:U,hasOwnProperty:B,hasOwnProp:B,reduceDescriptors:j,freezeMethods:e=>{j(e,(t,n)=>{if(v(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];v(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))})},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach(e=>{n[e]=!0})};return g(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:O,global:L,isContextDefined:D,isSpecCompliantForm:function(e){return!!(e&&v(e.append)&&"FormData"===e[u]&&e[l])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(w(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=g(e)?[]:{};return N(e,(e,t)=>{const s=n(e,r+1);!m(s)&&(i[t]=s)}),t[r]=void 0,i}}return e};return n(e,0)},isAsyncFn:H,isThenable:e=>e&&(w(e)||v(e))&&v(e.then)&&v(e.catch),setImmediate:V,asap:G,isIterable:e=>null!=e&&v(e[l])}}),s.register("djt5d",function(t,n){function r(e,t){return function(){return e.apply(t,arguments)}}e(t.exports,"default",function(){return r})}),s.register("4TNnu",function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,l=[],u=!1,h=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&f())}function f(){if(!u){var e=a(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++h<t;)c&&c[h].run();h=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}),s.register("6zSb1",function(t,n){e(t.exports,"default",function(){return p});var r=s("2bBga"),i=s("2RNjJ"),o=s("5Dm7L"),a=s("eQ5d8"),c=s("d0EKm"),l=s("1ZTQa"),u=s("6zj0X"),h=s("gbTL1");const d=u.default.validators;class f{constructor(e){this.defaults=e||{},this.interceptors={request:new(0,o.default),response:new(0,o.default)}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=new Error;const n=t.stack?t.stack.replace(/^.+\n/,""):"";try{e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+n):e.stack=n}catch(e){}}throw e}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=(0,c.default)(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:s}=t;void 0!==n&&u.default.assertOptions(n,{silentJSONParsing:d.transitional(d.boolean),forcedJSONParsing:d.transitional(d.boolean),clarifyTimeoutError:d.transitional(d.boolean)},!1),null!=i&&(r.default.isFunction(i)?t.paramsSerializer={serialize:i}:u.default.assertOptions(i,{encode:d.function,serialize:d.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),u.default.assertOptions(t,{baseUrl:d.spelling("baseURL"),withXsrfToken:d.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=s&&r.default.merge(s.common,s[t.method]);s&&r.default.forEach(["delete","get","head","post","put","patch","common"],e=>{delete s[e]}),t.headers=h.default.concat(o,s);const l=[];let f=!0;this.interceptors.request.forEach(function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(f=f&&e.synchronous,l.unshift(e.fulfilled,e.rejected))});const p=[];let g;this.interceptors.response.forEach(function(e){p.push(e.fulfilled,e.rejected)});let m,_=0;if(!f){const e=[a.default.bind(this),void 0];for(e.unshift.apply(e,l),e.push.apply(e,p),m=e.length,g=Promise.resolve(t);_<m;)g=g.then(e[_++],e[_++]);return g}m=l.length;let y=t;for(_=0;_<m;){const e=l[_++],t=l[_++];try{y=e(y)}catch(e){t.call(this,e);break}}try{g=a.default.call(this,y)}catch(e){return Promise.reject(e)}for(_=0,m=p.length;_<m;)g=g.then(p[_++],p[_++]);return g}getUri(e){e=(0,c.default)(this.defaults,e);const t=(0,l.default)(e.baseURL,e.url,e.allowAbsoluteUrls);return(0,i.default)(t,e.params,e.paramsSerializer)}}r.default.forEach(["delete","get","head","options"],function(e){f.prototype[e]=function(t,n){return this.request((0,c.default)(n||{},{method:e,url:t,data:(n||{}).data}))}}),r.default.forEach(["post","put","patch"],function(e){function t(t){return function(n,r,i){return this.request((0,c.default)(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)});var p=f}),s.register("2RNjJ",function(t,n){e(t.exports,"default",function(){return a});var r=s("2bBga"),i=s("hz3Ym");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function a(e,t,n){if(!t)return e;const s=n&&n.encode||o;r.default.isFunction(n)&&(n={serialize:n});const a=n&&n.serialize;let c;if(c=a?a(t,n):r.default.isURLSearchParams(t)?t.toString():new(0,i.default)(t,n).toString(s),c){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+c}return e}}),s.register("hz3Ym",function(t,n){e(t.exports,"default",function(){return c});var r=s("aewVa");function i(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function o(e,t){this._pairs=[],e&&(0,r.default)(e,this,t)}const a=o.prototype;a.append=function(e,t){this._pairs.push([e,t])},a.toString=function(e){const t=e?function(t){return e.call(this,t,i)}:i;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var c=o}),s.register("aewVa",function(t,n){e(t.exports,"default",function(){return d});var r=s("2bBga"),i=s("121rJ"),o=s("1gvAv"),a=s("ihoyg").Buffer;function c(e){return r.default.isPlainObject(e)||r.default.isArray(e)}function l(e){return r.default.endsWith(e,"[]")?e.slice(0,-2):e}function u(e,t,n){return e?e.concat(t).map(function(e,t){return e=l(e),!n&&t?"["+e+"]":e}).join(n?".":""):t}const h=r.default.toFlatObject(r.default,{},null,function(e){return/^is[A-Z]/.test(e)});var d=function(e,t,n){if(!r.default.isObject(e))throw new TypeError("target must be an object");t=t||new(o.default||FormData);const s=(n=r.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!r.default.isUndefined(t[e])})).metaTokens,d=n.visitor||_,f=n.dots,p=n.indexes,g=(n.Blob||"undefined"!=typeof Blob&&Blob)&&r.default.isSpecCompliantForm(t);if(!r.default.isFunction(d))throw new TypeError("visitor must be a function");function m(e){if(null===e)return"";if(r.default.isDate(e))return e.toISOString();if(r.default.isBoolean(e))return e.toString();if(!g&&r.default.isBlob(e))throw new(0,i.default)("Blob is not supported. Use a Buffer instead.");return r.default.isArrayBuffer(e)||r.default.isTypedArray(e)?g&&"function"==typeof Blob?new Blob([e]):a.from(e):e}function _(e,n,i){let o=e;if(e&&!i&&"object"==typeof e)if(r.default.endsWith(n,"{}"))n=s?n:n.slice(0,-2),e=JSON.stringify(e);else if(r.default.isArray(e)&&function(e){return r.default.isArray(e)&&!e.some(c)}(e)||(r.default.isFileList(e)||r.default.endsWith(n,"[]"))&&(o=r.default.toArray(e)))return n=l(n),o.forEach(function(e,i){!r.default.isUndefined(e)&&null!==e&&t.append(!0===p?u([n],i,f):null===p?n:n+"[]",m(e))}),!1;return!!c(e)||(t.append(u(i,n,f),m(e)),!1)}const y=[],v=Object.assign(h,{defaultVisitor:_,convertValue:m,isVisitable:c});if(!r.default.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!r.default.isUndefined(n)){if(-1!==y.indexOf(n))throw Error("Circular reference detected in "+i.join("."));y.push(n),r.default.forEach(n,function(n,s){!0===(!(r.default.isUndefined(n)||null===n)&&d.call(t,n,r.default.isString(s)?s.trim():s,i,v))&&e(n,i?i.concat(s):[s])}),y.pop()}}(e),t}}),s.register("121rJ",function(t,n){e(t.exports,"default",function(){return c});var r=s("2bBga");function i(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}r.default.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r.default.toJSONObject(this.config),code:this.code,status:this.status}}});const o=i.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{a[e]={value:e}}),Object.defineProperties(i,a),Object.defineProperty(o,"isAxiosError",{value:!0}),i.from=(e,t,n,s,a,c)=>{const l=Object.create(o);return r.default.toFlatObject(e,l,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),i.call(l,e.message,t,n,s,a),l.cause=e,l.name=e.name,c&&Object.assign(l,c),l};var c=i}),s.register("1gvAv",function(t,n){e(t.exports,"default",function(){return r});var r=null}),s.register("ihoyg",function(t,n){var r,i;e(t.exports,"Buffer",function(){return r},function(e){return r=e}),e(t.exports,"INSPECT_MAX_BYTES",function(){return i},function(e){return i=e});var o=s("hqZtu"),a=s("5WQj6");const c="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r=h,i=50;const l=2147483647;function u(e){if(e>l)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,h.prototype),t}function h(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return d(e,t,n)}function d(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!h.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|y(e,t);let r=u(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(X(e,Uint8Array)){const t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return g(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(X(e,ArrayBuffer)||e&&X(e.buffer,ArrayBuffer))return m(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(X(e,SharedArrayBuffer)||e&&X(e.buffer,SharedArrayBuffer)))return m(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return h.from(r,t,n);const i=function(e){if(h.isBuffer(e)){const t=0|_(e.length),n=u(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?u(0):g(e);if("Buffer"===e.type&&Array.isArray(e.data))return g(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return h.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return f(e),u(e<0?0:0|_(e))}function g(e){const t=e.length<0?0:0|_(e.length),n=u(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function m(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,h.prototype),r}function _(e){if(e>=l)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+l.toString(16)+" bytes");return 0|e}function y(e,t){if(h.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||X(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return J(e).length;default:if(i)return r?-1:Y(e).length;t=(""+t).toLowerCase(),i=!0}}function v(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return O(this,t,n);case"utf8":case"utf-8":return P(this,t,n);case"ascii":return x(this,t,n);case"latin1":case"binary":return N(this,t,n);case"base64":return R(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function b(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function w(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=h.from(t,r)),h.isBuffer(t))return 0===t.length?-1:E(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):E(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function E(e,t,n,r,i){let s,o=1,a=e.length,c=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,n/=2}function l(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let r=-1;for(s=n;s<a;s++)if(l(e,s)===l(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===c)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let r=0;r<c;r++)if(l(e,s+r)!==l(t,r)){n=!1;break}if(n)return s}return-1}function I(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=t.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(t.substr(2*o,2),16);if(Z(r))return o;e[n+o]=r}return o}function C(e,t,n,r){return Q(Y(t,e.length-n),e,n,r)}function T(e,t,n,r){return Q(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function S(e,t,n,r){return Q(J(t),e,n,r)}function k(e,t,n,r){return Q(function(e,t){let n,r,i;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(t,e.length-n),e,n,r)}function R(e,t,n){return 0===t&&n===e.length?o.fromByteArray(e):o.fromByteArray(e.slice(t,n))}function P(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,a,c;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[i+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(s=c));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(c=(15&t)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(e){const t=e.length;if(t<=A)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=A));return n}(r)}h.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(e,t,n){return d(e,t,n)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(e,t,n){return function(e,t,n){return f(e),e<=0?u(e):void 0!==t?"string"==typeof n?u(e).fill(t,n):u(e).fill(t):u(e)}(e,t,n)},h.allocUnsafe=function(e){return p(e)},h.allocUnsafeSlow=function(e){return p(e)},h.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==h.prototype},h.compare=function(e,t){if(X(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),X(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return h.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=h.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(X(t,Uint8Array))i+t.length>r.length?(h.isBuffer(t)||(t=h.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!h.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},h.byteLength=y,h.prototype._isBuffer=!0,h.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},h.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},h.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},h.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?P(this,0,e):v.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===h.compare(this,e)},h.prototype.inspect=function(){let e="";const t=i;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},c&&(h.prototype[c]=h.prototype.inspect),h.prototype.compare=function(e,t,n,r,i){if(X(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),c=this.slice(r,i),l=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==l[e]){s=c[e],o=l[e];break}return s<o?-1:o<s?1:0},h.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},h.prototype.indexOf=function(e,t,n){return w(this,e,t,n,!0)},h.prototype.lastIndexOf=function(e,t,n){return w(this,e,t,n,!1)},h.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return I(this,e,t,n);case"utf8":case"utf-8":return C(this,e,t,n);case"ascii":case"latin1":case"binary":return T(this,e,t,n);case"base64":return S(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const A=4096;function x(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function N(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function O(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=ee[e[r]];return i}function L(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function D(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function M(e,t,n,r,i,s){if(!h.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function F(e,t,n,r,i){z(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function U(e,t,n,r,i){z(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function B(e,t,n,r,i,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function q(e,t,n,r,i){return t=+t,n>>>=0,i||B(e,0,n,4),a.write(e,t,n,r,23,4),n+4}function j(e,t,n,r,i){return t=+t,n>>>=0,i||B(e,0,n,8),a.write(e,t,n,r,52,8),n+8}h.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,h.prototype),r},h.prototype.readUintLE=h.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},h.prototype.readUintBE=h.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},h.prototype.readUint8=h.prototype.readUInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),this[e]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]|this[e+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]<<8|this[e+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},h.prototype.readBigUInt64LE=te(function(e){$(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))}),h.prototype.readBigUInt64BE=te(function(e){$(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)}),h.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},h.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},h.prototype.readInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},h.prototype.readInt16LE=function(e,t){e>>>=0,t||D(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function(e,t){e>>>=0,t||D(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},h.prototype.readInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},h.prototype.readBigInt64LE=te(function(e){$(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)}),h.prototype.readBigInt64BE=te(function(e){$(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)}),h.prototype.readFloatLE=function(e,t){return e>>>=0,t||D(e,4,this.length),a.read(this,e,!0,23,4)},h.prototype.readFloatBE=function(e,t){return e>>>=0,t||D(e,4,this.length),a.read(this,e,!1,23,4)},h.prototype.readDoubleLE=function(e,t){return e>>>=0,t||D(e,8,this.length),a.read(this,e,!0,52,8)},h.prototype.readDoubleBE=function(e,t){return e>>>=0,t||D(e,8,this.length),a.read(this,e,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){M(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){M(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},h.prototype.writeUint8=h.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,1,255,0),this[t]=255&e,t+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigUInt64LE=te(function(e,t=0){return F(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeBigUInt64BE=te(function(e,t=0){return U(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);M(this,e,t,n,r-1,-r)}let i=0,s=1,o=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s|0)-o&255;return t+n},h.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);M(this,e,t,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s|0)-o&255;return t+n},h.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},h.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},h.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigInt64LE=te(function(e,t=0){return F(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),h.prototype.writeBigInt64BE=te(function(e,t=0){return U(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),h.prototype.writeFloatLE=function(e,t,n){return q(this,e,t,!0,n)},h.prototype.writeFloatBE=function(e,t,n){return q(this,e,t,!1,n)},h.prototype.writeDoubleLE=function(e,t,n){return j(this,e,t,!0,n)},h.prototype.writeDoubleBE=function(e,t,n){return j(this,e,t,!1,n)},h.prototype.copy=function(e,t,n,r){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},h.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!h.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const s=h.isBuffer(e)?e:h.from(e,r),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%o]}return this};const H={};function V(e,t,n){H[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function W(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function z(e,t,n,r,i,s){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=s>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new H.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){$(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||K(t,e.length-(n+1))}(r,i,s)}function $(e,t){if("number"!=typeof e)throw new H.ERR_INVALID_ARG_TYPE(t,"number",e)}function K(e,t,n){if(Math.floor(e)!==e)throw $(e,n),new H.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new H.ERR_BUFFER_OUT_OF_BOUNDS;throw new H.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}V("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),V("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),V("ERR_OUT_OF_RANGE",function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=W(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=W(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r},RangeError);const G=/[^+/0-9A-Za-z-_]/g;function Y(e,t){let n;t=t||1/0;const r=e.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function J(e){return o.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(G,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Q(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function X(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function te(e){return"undefined"==typeof BigInt?ne:e}function ne(){throw new Error("BigInt not supported")}}),s.register("hqZtu",function(t,n){var r,i;e(t.exports,"toByteArray",function(){return r},function(e){return r=e}),e(t.exports,"fromByteArray",function(){return i},function(e){return i=e}),r=function(e){var t,n,r=u(e),i=r[0],s=r[1],c=new a(function(e,t,n){return 3*(t+n)/4-n}(0,i,s)),l=0,h=s>0?i-4:i;for(n=0;n<h;n+=4)t=o[e.charCodeAt(n)]<<18|o[e.charCodeAt(n+1)]<<12|o[e.charCodeAt(n+2)]<<6|o[e.charCodeAt(n+3)],c[l++]=t>>16&255,c[l++]=t>>8&255,c[l++]=255&t;2===s&&(t=o[e.charCodeAt(n)]<<2|o[e.charCodeAt(n+1)]>>4,c[l++]=255&t);1===s&&(t=o[e.charCodeAt(n)]<<10|o[e.charCodeAt(n+1)]<<4|o[e.charCodeAt(n+2)]>>2,c[l++]=t>>8&255,c[l++]=255&t);return c},i=function(e){for(var t,n=e.length,r=n%3,i=[],o=16383,a=0,c=n-r;a<c;a+=o)i.push(d(e,a,a+o>c?c:a+o));1===r?(t=e[n-1],i.push(s[t>>2]+s[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(s[t>>10]+s[t>>4&63]+s[t<<2&63]+"="));return i.join("")};for(var s=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0;l<64;++l)s[l]=c[l],o[c.charCodeAt(l)]=l;function u(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function h(e){return s[e>>18&63]+s[e>>12&63]+s[e>>6&63]+s[63&e]}function d(e,t,n){for(var r,i=[],s=t;s<n;s+=3)r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),i.push(h(r));return i.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63}),s.register("5WQj6",function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;e(t.exports,"read",function(){return r},function(e){return r=e}),e(t.exports,"write",function(){return i},function(e){return i=e}),r=function(e,t,n,r,i){var s,o,a=8*i-r-1,c=(1<<a)-1,l=c>>1,u=-7,h=n?i-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=r;u>0;o=256*o+e[t+h],h+=d,u-=8);if(0===s)s=1-l;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=l}return(f?-1:1)*o*Math.pow(2,s-r)},i=function(e,t,n,r,i,s){var o,a,c,l=8*s-i-1,u=(1<<l)-1,h=u>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(t*c-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,l+=i;l>0;e[n+f]=255&o,f+=p,o/=256,l-=8);e[n+f-p]|=128*g}}),s.register("5Dm7L",function(t,n){e(t.exports,"default",function(){return i});var r=s("2bBga");var i=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){r.default.forEach(this.handlers,function(t){null!==t&&e(t)})}}}),s.register("eQ5d8",function(t,n){e(t.exports,"default",function(){return h});var r=s("bhEpd"),i=s("ksuZT"),o=s("hqlPG"),a=s("83xK9"),c=s("gbTL1"),l=s("enpjQ");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new(0,a.default)(null,e)}function h(e){u(e),e.headers=c.default.from(e.headers),e.data=r.default.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return l.default.getAdapter(e.adapter||o.default.adapter)(e).then(function(t){return u(e),t.data=r.default.call(e,e.transformResponse,t),t.headers=c.default.from(t.headers),t},function(t){return(0,i.default)(t)||(u(e),t&&t.response&&(t.response.data=r.default.call(e,e.transformResponse,t.response),t.response.headers=c.default.from(t.response.headers))),Promise.reject(t)})}}),s.register("bhEpd",function(t,n){e(t.exports,"default",function(){return a});var r=s("2bBga"),i=s("hqlPG"),o=s("gbTL1");function a(e,t){const n=this||i.default,s=t||n,a=o.default.from(s.headers);let c=s.data;return r.default.forEach(e,function(e){c=e.call(n,c,a.normalize(),t?t.status:void 0)}),a.normalize(),c}}),s.register("hqlPG",function(t,n){e(t.exports,"default",function(){return d});var r=s("2bBga"),i=s("121rJ"),o=s("2wfLM"),a=s("aewVa"),c=s("5tcKT"),l=s("d5Oi9"),u=s("4bmvb");const h={transitional:o.default,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,s=r.default.isObject(e);s&&r.default.isHTMLForm(e)&&(e=new FormData(e));if(r.default.isFormData(e))return i?JSON.stringify((0,u.default)(e)):e;if(r.default.isArrayBuffer(e)||r.default.isBuffer(e)||r.default.isStream(e)||r.default.isFile(e)||r.default.isBlob(e)||r.default.isReadableStream(e))return e;if(r.default.isArrayBufferView(e))return e.buffer;if(r.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return(0,c.default)(e,this.formSerializer).toString();if((o=r.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return(0,a.default)(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return s||i?(t.setContentType("application/json",!1),function(e,t,n){if(r.default.isString(e))try{return(t||JSON.parse)(e),r.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||h.transitional,n=t&&t.forcedJSONParsing,s="json"===this.responseType;if(r.default.isResponse(e)||r.default.isReadableStream(e))return e;if(e&&r.default.isString(e)&&(n&&!this.responseType||s)){const n=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw i.default.from(e,i.default.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:l.default.classes.FormData,Blob:l.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};r.default.forEach(["delete","get","head","post","put","patch"],e=>{h.headers[e]={}});var d=h}),s.register("2wfLM",function(t,n){e(t.exports,"default",function(){return r});var r={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}}),s.register("5tcKT",function(t,n){e(t.exports,"default",function(){return a});var r=s("2bBga"),i=s("aewVa"),o=s("d5Oi9");function a(e,t){return(0,i.default)(e,new o.default.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return o.default.isNode&&r.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}}),s.register("d5Oi9",function(t,n){e(t.exports,"default",function(){return i});var r=s("hdo0R"),i={...s("fd0Wi"),...r.default}}),s.register("hdo0R",function(t,n){e(t.exports,"default",function(){return a});var r=s("9matH"),i=s("eN04z"),o=s("2J1oD"),a={isBrowser:!0,classes:{URLSearchParams:r.default,FormData:i.default,Blob:o.default},protocols:["http","https","file","blob","url","data"]}}),s.register("9matH",function(t,n){e(t.exports,"default",function(){return i});var r=s("hz3Ym"),i="undefined"!=typeof URLSearchParams?URLSearchParams:r.default}),s.register("eN04z",function(t,n){e(t.exports,"default",function(){return r});var r="undefined"!=typeof FormData?FormData:null}),s.register("2J1oD",function(t,n){e(t.exports,"default",function(){return r});var r="undefined"!=typeof Blob?Blob:null}),s.register("fd0Wi",function(t,n){e(t.exports,"hasBrowserEnv",function(){return r}),e(t.exports,"navigator",function(){return i}),e(t.exports,"hasStandardBrowserEnv",function(){return s}),e(t.exports,"hasStandardBrowserWebWorkerEnv",function(){return o}),e(t.exports,"origin",function(){return a});const r="undefined"!=typeof window&&"undefined"!=typeof document,i="object"==typeof navigator&&navigator||void 0,s=r&&(!i||["ReactNative","NativeScript","NS"].indexOf(i.product)<0),o="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,a=r&&window.location.href||"http://localhost"}),s.register("4bmvb",function(t,n){e(t.exports,"default",function(){return i});var r=s("2bBga");var i=function(e){function t(e,n,i,s){let o=e[s++];if("__proto__"===o)return!0;const a=Number.isFinite(+o),c=s>=e.length;if(o=!o&&r.default.isArray(i)?i.length:o,c)return r.default.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!a;i[o]&&r.default.isObject(i[o])||(i[o]=[]);return t(e,n,i[o],s)&&r.default.isArray(i[o])&&(i[o]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}(i[o])),!a}if(r.default.isFormData(e)&&r.default.isFunction(e.entries)){const n={};return r.default.forEachEntry(e,(e,i)=>{t(function(e){return r.default.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),i,n,0)}),n}return null}}),s.register("gbTL1",function(t,n){e(t.exports,"default",function(){return h});var r=s("2bBga"),i=s("9cPEm");const o=Symbol("internals");function a(e){return e&&String(e).trim().toLowerCase()}function c(e){return!1===e||null==e?e:r.default.isArray(e)?e.map(c):String(e)}function l(e,t,n,i,s){return r.default.isFunction(i)?i.call(this,t,n):(s&&(t=n),r.default.isString(t)?r.default.isString(i)?-1!==t.indexOf(i):r.default.isRegExp(i)?i.test(t):void 0:void 0)}class u{constructor(e){e&&this.set(e)}set(e,t,n){const s=this;function o(e,t,n){const i=a(t);if(!i)throw new Error("header name must be a non-empty string");const o=r.default.findKey(s,i);(!o||void 0===s[o]||!0===n||void 0===n&&!1!==s[o])&&(s[o||t]=c(e))}const l=(e,t)=>r.default.forEach(e,(e,n)=>o(e,n,t));if(r.default.isPlainObject(e)||e instanceof this.constructor)l(e,t);else if(r.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))l((0,i.default)(e),t);else if(r.default.isObject(e)&&r.default.isIterable(e)){let n,i,s={};for(const t of e){if(!r.default.isArray(t))throw TypeError("Object iterator must return a key-value pair");s[i=t[0]]=(n=s[i])?r.default.isArray(n)?[...n,t[1]]:[n,t[1]]:t[1]}l(s,t)}else null!=e&&o(t,e,n);return this}get(e,t){if(e=a(e)){const n=r.default.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(r.default.isFunction(t))return t.call(this,e,n);if(r.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=a(e)){const n=r.default.findKey(this,e);return!(!n||void 0===this[n]||t&&!l(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function s(e){if(e=a(e)){const s=r.default.findKey(n,e);!s||t&&!l(0,n[s],s,t)||(delete n[s],i=!0)}}return r.default.isArray(e)?e.forEach(s):s(e),i}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!l(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return r.default.forEach(this,(i,s)=>{const o=r.default.findKey(n,s);if(o)return t[o]=c(i),void delete t[s];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}(s):String(s).trim();a!==s&&delete t[s],t[a]=c(i),n[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return r.default.forEach(this,(n,i)=>{null!=n&&!1!==n&&(t[i]=e&&r.default.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){const t=(this[o]=this[o]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=a(e);t[i]||(!function(e,t){const n=r.default.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}(n,e),t[i]=!0)}return r.default.isArray(e)?e.forEach(i):i(e),this}}u.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),r.default.reduceDescriptors(u.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),r.default.freezeMethods(u);var h=u}),s.register("9cPEm",function(t,n){e(t.exports,"default",function(){return i});const r=s("2bBga").default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var i=e=>{const t={};let n,i,s;return e&&e.split("\n").forEach(function(e){s=e.indexOf(":"),n=e.substring(0,s).trim().toLowerCase(),i=e.substring(s+1).trim(),!n||t[n]&&r[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)}),t}}),s.register("ksuZT",function(t,n){function r(e){return!(!e||!e.__CANCEL__)}e(t.exports,"default",function(){return r})}),s.register("83xK9",function(t,n){e(t.exports,"default",function(){return o});var r=s("121rJ");function i(e,t,n){r.default.call(this,null==e?"canceled":e,r.default.ERR_CANCELED,t,n),this.name="CanceledError"}s("2bBga").default.inherits(i,r.default,{__CANCEL__:!0});var o=i}),s.register("enpjQ",function(t,n){e(t.exports,"default",function(){return d});var r=s("2bBga"),i=s("1gvAv"),o=s("9VVcb"),a=s("fQxmG"),c=s("121rJ");const l={http:i.default,xhr:o.default,fetch:a.default};r.default.forEach(l,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}});const u=e=>`- ${e}`,h=e=>r.default.isFunction(e)||null===e||!1===e;var d={getAdapter:e=>{e=r.default.isArray(e)?e:[e];const{length:t}=e;let n,i;const s={};for(let r=0;r<t;r++){let t;if(n=e[r],i=n,!h(n)&&(i=l[(t=String(n)).toLowerCase()],void 0===i))throw new(0,c.default)(`Unknown adapter '${t}'`);if(i)break;s[t||"#"+r]=i}if(!i){const e=Object.entries(s).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));let n=t?e.length>1?"since :\n"+e.map(u).join("\n"):" "+u(e[0]):"as no adapter specified";throw new(0,c.default)("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return i},adapters:l}}),s.register("9VVcb",function(t,n){e(t.exports,"default",function(){return p});var r=s("2bBga"),i=s("1TQad"),o=s("2wfLM"),a=s("121rJ"),c=s("83xK9"),l=s("8wMQb"),u=s("d5Oi9"),h=s("gbTL1"),d=s("QEXMn"),f=s("jksm5");var p="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise(function(t,n){const s=(0,f.default)(e);let p=s.data;const g=h.default.from(s.headers).normalize();let m,_,y,v,b,{responseType:w,onUploadProgress:E,onDownloadProgress:I}=s;function C(){v&&v(),b&&b(),s.cancelToken&&s.cancelToken.unsubscribe(m),s.signal&&s.signal.removeEventListener("abort",m)}let T=new XMLHttpRequest;function S(){if(!T)return;const r=h.default.from("getAllResponseHeaders"in T&&T.getAllResponseHeaders()),s={data:w&&"text"!==w&&"json"!==w?T.response:T.responseText,status:T.status,statusText:T.statusText,headers:r,config:e,request:T};(0,i.default)(function(e){t(e),C()},function(e){n(e),C()},s),T=null}T.open(s.method.toUpperCase(),s.url,!0),T.timeout=s.timeout,"onloadend"in T?T.onloadend=S:T.onreadystatechange=function(){T&&4===T.readyState&&(0!==T.status||T.responseURL&&0===T.responseURL.indexOf("file:"))&&setTimeout(S)},T.onabort=function(){T&&(n(new(0,a.default)("Request aborted",a.default.ECONNABORTED,e,T)),T=null)},T.onerror=function(){n(new(0,a.default)("Network Error",a.default.ERR_NETWORK,e,T)),T=null},T.ontimeout=function(){let t=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const r=s.transitional||o.default;s.timeoutErrorMessage&&(t=s.timeoutErrorMessage),n(new(0,a.default)(t,r.clarifyTimeoutError?a.default.ETIMEDOUT:a.default.ECONNABORTED,e,T)),T=null},void 0===p&&g.setContentType(null),"setRequestHeader"in T&&r.default.forEach(g.toJSON(),function(e,t){T.setRequestHeader(t,e)}),r.default.isUndefined(s.withCredentials)||(T.withCredentials=!!s.withCredentials),w&&"json"!==w&&(T.responseType=s.responseType),I&&([y,b]=(0,d.progressEventReducer)(I,!0),T.addEventListener("progress",y)),E&&T.upload&&([_,v]=(0,d.progressEventReducer)(E),T.upload.addEventListener("progress",_),T.upload.addEventListener("loadend",v)),(s.cancelToken||s.signal)&&(m=t=>{T&&(n(!t||t.type?new(0,c.default)(null,e,T):t),T.abort(),T=null)},s.cancelToken&&s.cancelToken.subscribe(m),s.signal&&(s.signal.aborted?m():s.signal.addEventListener("abort",m)));const k=(0,l.default)(s.url);k&&-1===u.default.protocols.indexOf(k)?n(new(0,a.default)("Unsupported protocol "+k+":",a.default.ERR_BAD_REQUEST,e)):T.send(p||null)})}}),s.register("1TQad",function(t,n){e(t.exports,"default",function(){return i});var r=s("121rJ");function i(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new(0,r.default)("Request failed with status code "+n.status,[r.default.ERR_BAD_REQUEST,r.default.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}}),s.register("8wMQb",function(t,n){function r(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}e(t.exports,"default",function(){return r})}),s.register("QEXMn",function(t,n){e(t.exports,"progressEventReducer",function(){return a}),e(t.exports,"progressEventDecorator",function(){return c}),e(t.exports,"asyncDecorator",function(){return l});var r=s("5OiBb"),i=s("h4Qcl"),o=s("2bBga");const a=(e,t,n=3)=>{let s=0;const o=(0,r.default)(50,250);return(0,i.default)(n=>{const r=n.loaded,i=n.lengthComputable?n.total:void 0,a=r-s,c=o(a);s=r;e({loaded:r,total:i,progress:i?r/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&r<=i?(i-r)/c:void 0,event:n,lengthComputable:null!=i,[t?"download":"upload"]:!0})},n)},c=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},l=e=>(...t)=>o.default.asap(()=>e(...t))}),s.register("5OiBb",function(t,n){e(t.exports,"default",function(){return r});var r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[o];i||(i=c),n[s]=a,r[s]=c;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const d=l&&c-l;return d?Math.round(1e3*h/d):void 0}}}),s.register("h4Qcl",function(t,n){e(t.exports,"default",function(){return r});var r=function(e,t){let n,r,i=0,s=1e3/t;const o=(t,s=Date.now())=>{i=s,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),a=t-i;a>=s?o(e,t):(n=e,r||(r=setTimeout(()=>{r=null,o(n)},s-a)))},()=>n&&o(n)]}}),s.register("jksm5",function(t,n){e(t.exports,"default",function(){return d});var r=s("d5Oi9"),i=s("2bBga"),o=s("g3yOT"),a=s("kTwUV"),c=s("1ZTQa"),l=s("d0EKm"),u=s("gbTL1"),h=s("2RNjJ"),d=e=>{const t=(0,l.default)({},e);let n,{data:s,withXSRFToken:d,xsrfHeaderName:f,xsrfCookieName:p,headers:g,auth:m}=t;if(t.headers=g=u.default.from(g),t.url=(0,h.default)((0,c.default)(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),m&&g.set("Authorization","Basic "+btoa((m.username||"")+":"+(m.password?unescape(encodeURIComponent(m.password)):""))),i.default.isFormData(s))if(r.default.hasStandardBrowserEnv||r.default.hasStandardBrowserWebWorkerEnv)g.setContentType(void 0);else if(!1!==(n=g.getContentType())){const[e,...t]=n?n.split(";").map(e=>e.trim()).filter(Boolean):[];g.setContentType([e||"multipart/form-data",...t].join("; "))}if(r.default.hasStandardBrowserEnv&&(d&&i.default.isFunction(d)&&(d=d(t)),d||!1!==d&&(0,o.default)(t.url))){const e=f&&p&&a.default.read(p);e&&g.set(f,e)}return t}}),s.register("g3yOT",function(t,n){e(t.exports,"default",function(){return a});var r,i,o=s("d5Oi9"),a=o.default.hasStandardBrowserEnv?(r=new URL(o.default.origin),i=o.default.navigator&&/(msie|trident)/i.test(o.default.navigator.userAgent),e=>(e=new URL(e,o.default.origin),r.protocol===e.protocol&&r.host===e.host&&(i||r.port===e.port))):()=>!0}),s.register("kTwUV",function(t,n){e(t.exports,"default",function(){return i});var r=s("2bBga"),i=s("d5Oi9").default.hasStandardBrowserEnv?{write(e,t,n,i,s,o){const a=[e+"="+encodeURIComponent(t)];r.default.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.default.isString(i)&&a.push("path="+i),r.default.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}}}),s.register("1ZTQa",function(t,n){e(t.exports,"default",function(){return o});var r=s("iUwU6"),i=s("91vFE");function o(e,t,n){let s=!(0,r.default)(t);return e&&(s||0==n)?(0,i.default)(e,t):t}}),s.register("iUwU6",function(t,n){function r(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}e(t.exports,"default",function(){return r})}),s.register("91vFE",function(t,n){function r(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}e(t.exports,"default",function(){return r})}),s.register("d0EKm",function(t,n){e(t.exports,"default",function(){return a});var r=s("2bBga"),i=s("gbTL1");const o=e=>e instanceof i.default?{...e}:e;function a(e,t){t=t||{};const n={};function i(e,t,n,i){return r.default.isPlainObject(e)&&r.default.isPlainObject(t)?r.default.merge.call({caseless:i},e,t):r.default.isPlainObject(t)?r.default.merge({},t):r.default.isArray(t)?t.slice():t}function s(e,t,n,s){return r.default.isUndefined(t)?r.default.isUndefined(e)?void 0:i(void 0,e,0,s):i(e,t,0,s)}function a(e,t){if(!r.default.isUndefined(t))return i(void 0,t)}function c(e,t){return r.default.isUndefined(t)?r.default.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function l(n,r,s){return s in t?i(n,r):s in e?i(void 0,n):void 0}const u={url:a,method:a,data:a,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:l,headers:(e,t,n)=>s(o(e),o(t),0,!0)};return r.default.forEach(Object.keys(Object.assign({},e,t)),function(i){const o=u[i]||s,a=o(e[i],t[i],i);r.default.isUndefined(a)&&o!==l||(n[i]=a)}),n}}),s.register("fQxmG",function(t,n){e(t.exports,"default",function(){return I});var r=s("d5Oi9"),i=s("2bBga"),o=s("121rJ"),a=s("lzwTr"),c=s("cZwGV"),l=s("gbTL1"),u=s("QEXMn"),h=s("jksm5"),d=s("1TQad");const f="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,p=f&&"function"==typeof ReadableStream,g=f&&("function"==typeof TextEncoder?(m=new TextEncoder,e=>m.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var m;const _=(e,...t)=>{try{return!!e(...t)}catch(e){return!1}},y=p&&_(()=>{let e=!1;const t=new Request(r.default.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),v=p&&_(()=>i.default.isReadableStream(new Response("").body)),b={stream:v&&(e=>e.body)};var w;f&&(w=new Response,["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!b[e]&&(b[e]=i.default.isFunction(w[e])?t=>t[e]():(t,n)=>{throw new(0,o.default)(`Response type '${e}' is not supported`,o.default.ERR_NOT_SUPPORT,n)})}));const E=async(e,t)=>{const n=i.default.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(i.default.isBlob(e))return e.size;if(i.default.isSpecCompliantForm(e)){const t=new Request(r.default.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return i.default.isArrayBufferView(e)||i.default.isArrayBuffer(e)?e.byteLength:(i.default.isURLSearchParams(e)&&(e+=""),i.default.isString(e)?(await g(e)).byteLength:void 0)})(t):n};var I=f&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:f,timeout:p,onDownloadProgress:g,onUploadProgress:m,responseType:_,headers:w,withCredentials:I="same-origin",fetchOptions:C}=(0,h.default)(e);_=_?(_+"").toLowerCase():"text";let T,S=(0,a.default)([s,f&&f.toAbortSignal()],p);const k=S&&S.unsubscribe&&(()=>{S.unsubscribe()});let R;try{if(m&&y&&"get"!==n&&"head"!==n&&0!==(R=await E(w,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(i.default.isFormData(r)&&(e=n.headers.get("content-type"))&&w.setContentType(e),n.body){const[e,t]=(0,u.progressEventDecorator)(R,(0,u.progressEventReducer)((0,u.asyncDecorator)(m)));r=(0,c.trackStream)(n.body,65536,e,t)}}i.default.isString(I)||(I=I?"include":"omit");const s="credentials"in Request.prototype;T=new Request(t,{...C,signal:S,method:n.toUpperCase(),headers:w.normalize().toJSON(),body:r,duplex:"half",credentials:s?I:void 0});let o=await fetch(T,C);const a=v&&("stream"===_||"response"===_);if(v&&(g||a&&k)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=o[t]});const t=i.default.toFiniteNumber(o.headers.get("content-length")),[n,r]=g&&(0,u.progressEventDecorator)(t,(0,u.progressEventReducer)((0,u.asyncDecorator)(g),!0))||[];o=new Response((0,c.trackStream)(o.body,65536,n,()=>{r&&r(),k&&k()}),e)}_=_||"text";let h=await b[i.default.findKey(b,_)||"text"](o,e);return!a&&k&&k(),await new Promise((t,n)=>{(0,d.default)(t,n,{data:h,headers:l.default.from(o.headers),status:o.status,statusText:o.statusText,config:e,request:T})})}catch(t){if(k&&k(),t&&"TypeError"===t.name&&/Load failed|fetch/i.test(t.message))throw Object.assign(new(0,o.default)("Network Error",o.default.ERR_NETWORK,e,T),{cause:t.cause||t});throw o.default.from(t,t&&t.code,e,T)}})}),s.register("lzwTr",function(t,n){e(t.exports,"default",function(){return a});var r=s("83xK9"),i=s("121rJ"),o=s("2bBga");var a=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,s=new AbortController;const a=function(e){if(!n){n=!0,l();const t=e instanceof Error?e:this.reason;s.abort(t instanceof i.default?t:new(0,r.default)(t instanceof Error?t.message:t))}};let c=t&&setTimeout(()=>{c=null,a(new(0,i.default)(`timeout ${t} of ms exceeded`,i.default.ETIMEDOUT))},t);const l=()=>{e&&(c&&clearTimeout(c),c=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(a):e.removeEventListener("abort",a)}),e=null)};e.forEach(e=>e.addEventListener("abort",a));const{signal:u}=s;return u.unsubscribe=()=>o.default.asap(l),u}}}),s.register("cZwGV",function(t,n){e(t.exports,"trackStream",function(){return s});const r=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,i=0;for(;i<n;)r=i+t,yield e.slice(i,r),i=r},i=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},s=(e,t,n,s)=>{const o=async function*(e,t){for await(const n of i(e))yield*r(n,t)}(e,t);let a,c=0,l=e=>{a||(a=!0,s&&s(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return l(),void e.close();let i=r.byteLength;if(n){let e=c+=i;n(e)}e.enqueue(new Uint8Array(r))}catch(e){throw l(e),e}},cancel:e=>(l(e),o.return())},{highWaterMark:2})}}),s.register("6zj0X",function(t,n){e(t.exports,"default",function(){return c});var r=s("50GW0"),i=s("121rJ");const o={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const a={};o.transitional=function(e,t,n){function s(e,t){return"[Axios v"+r.VERSION+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,o)=>{if(!1===e)throw new(0,i.default)(s(r," has been removed"+(t?" in "+t:"")),i.default.ERR_DEPRECATED);return t&&!a[r]&&(a[r]=!0,console.warn(s(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,o)}},o.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};var c={assertOptions:function(e,t,n){if("object"!=typeof e)throw new(0,i.default)("options must be an object",i.default.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],a=t[o];if(a){const t=e[o],n=void 0===t||a(t,o,e);if(!0!==n)throw new(0,i.default)("option "+o+" must be "+n,i.default.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new(0,i.default)("Unknown option "+o,i.default.ERR_BAD_OPTION)}},validators:o}}),s.register("50GW0",function(t,n){e(t.exports,"VERSION",function(){return r});const r="1.10.0"}),s.register("2sjhC",function(t,n){e(t.exports,"default",function(){return o});var r=s("83xK9");class i{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t;const r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,i,s){n.reason||(n.reason=new(0,r.default)(e,i,s),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new i(function(t){e=t}),cancel:e}}}var o=i}),s.register("av9gA",function(t,n){function r(e){return function(t){return e.apply(null,t)}}e(t.exports,"default",function(){return r})}),s.register("gNhGc",function(t,n){e(t.exports,"default",function(){return i});var r=s("2bBga");function i(e){return r.default.isObject(e)&&!0===e.isAxiosError}}),s.register("jd7iQ",function(t,n){e(t.exports,"default",function(){return i});const r={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(r).forEach(([e,t])=>{r[t]=e});var i=r}),s.register("edYM8",function(t,n){e(t.exports,"API_KEY",function(){return r}),e(t.exports,"BASE_URL",function(){return i}),e(t.exports,"TREND_DAY_URL",function(){return s}),e(t.exports,"SEARCH_URL",function(){return o}),e(t.exports,"ID_URL",function(){return a}),e(t.exports,"BASE_IMG_URL",function(){return c}),e(t.exports,"VIDEO_URL",function(){return l});const r="62088e41c23fad4633c85235ca2f4dac",i="https://api.themoviedb.org/3",s=`${i}/trending/movie/day?api_key=${r}`,o=`${i}/search/movie?api_key=${r}`,a=`${i}/movie/`,c="https://image.tmdb.org/t/p/w500",l=`/videos?api_key=${r}&language=en-US`}),s.register("edpgF",function(t,n){e(t.exports,"libraryGallery",function(){return f}),e(t.exports,"onBtnQueueClick",function(){return y}),e(t.exports,"inLocalStorage",function(){return b}),e(t.exports,"checkCurrentPageAndRewrite",function(){return T}),e(t.exports,"clearGallery",function(){return w}),e(t.exports,"getPlugVisible",function(){return E}),e(t.exports,"getPlugHidden",function(){return I}),e(t.exports,"renderMovieCardsLibrary",function(){return C}),s("eyjy7");var r=s("6aFcR"),i=s("868P8"),o=s("edYM8"),a=s("bOFJ0"),c=s("5I0Ww"),l=s("dJVYd"),u=s("gjiCh");const h=document.querySelector(".to-queue"),d=document.querySelector(".library-text"),f=document.querySelector(".library-gallery"),p=document.querySelector('button[data-action="queue"]'),g=document.querySelector('button[data-action="watched"]');let m=localStorage.getItem("queue"),_=JSON.parse(m);async function y(){null===localStorage.getItem("queue")&&localStorage.setItem("queue","[]"),b(c.movieObject,"queue")?(h.textContent="Add to queue",h.classList.remove("is-active"),a.localstorage.removeFilm("queue",c.movieObject),T(p,-1)):(h.textContent="Remove from queue",h.classList.add("is-active"),a.localstorage.setFilm("queue",c.movieObject),T(p,1));const e=(0,r.p)().currentUser;if(null!==e){const t=localStorage.getItem("queue")||[],n=localStorage.getItem("watched")||[];(0,i.createNote)(e,t,n)}}async function v(){(0,l.stopPaginationObserver)(),g&&g.classList.remove("library__item-btn--active"),p&&p.classList.add("library__item-btn--active"),m=localStorage.getItem("queue"),_=JSON.parse(m),w(),null!==m&&0!==_.length?(d&&!d.classList.contains("visually-hidden")&&I(),(0,u.startLoader)(),await C(_.slice(0,9)),(0,l.startPaginationObserver)(),setTimeout(()=>{(0,u.stopLoader)()},300)):E()}function b(e,t){const n=localStorage.getItem(t),r=JSON.parse(n).map(e=>e.id);return null===n||!!r.includes(e.id)}function w(){f&&(f.innerHTML="")}function E(){f&&(f.innerHTML=""),d&&d.classList.remove("visually-hidden")}function I(){d&&d.classList.add("visually-hidden")}function C(e){if(!e||!Array.isArray(e))return void console.warn("Invalid movies data provided to renderMovieCardsLibrary");if(!f)return void console.warn("Library gallery element not found");const t=e.map(e=>function(e){const{title:t,genres:n,release_date:r,poster_path:i,vote_average:s,id:a}=e;let c="";void 0!==r&&r.length>4&&(c=r.slice(0,4));const l=function(e){let t=e.map(e=>e.name);t.length>3&&(t=t.slice(0,2),t.push("Other"));return t.join(", ")}(n);let u=s.toFixed(2);const h=null===i?"https://dummyimage.com/395x574/000/fff.jpg&text=no+poster":`${o.BASE_IMG_URL}${i}`;return`<li>\n            <a class="gallery__link" href="#">\n              <img class="gallery__image" data-id="${a}" src="${h}" alt="${t} movie poster" loading="lazy">\n\n            <div class="info">\n              <p class="info__item">${t}</p>\n              <div class="info-detail">\n                <p class="info-detail__item">${l}</p>\n                <p class="info-detail__item">${c} <span class="points">${u}</span></p>\n              </div>\n            </div>\n            </a>\n          </li>`}(e)).join("");f.insertAdjacentHTML("beforeend",t)}function T(e,t){f&&e&&e.classList.contains("library__item-btn--active")&&function(e){if(!f)return;const t=f.querySelectorAll("li"),n=document.querySelector(".library__item-btn--active");if(!n)return;const r=JSON.parse(localStorage.getItem(n.dataset.action));if(w(),0===r.length)return void E();d.classList.contains("visually-hidden")||I();if(t.length>9)return void C(r.slice(0,t.length+e));C(r.slice(0,9))}(t)}p&&(p.addEventListener("click",v),v(),p.classList.add("library__item-btn--active")),p&&p.addEventListener("click",v)}),s.register("eyjy7",function(t,n){e(t.exports,"getAuth",function(){return s("6aFcR").p}),e(t.exports,"onAuthStateChanged",function(){return s("6aFcR").z}),e(t.exports,"createUserWithEmailAndPassword",function(){return s("6aFcR").ab}),e(t.exports,"setPersistence",function(){return s("6aFcR").t}),e(t.exports,"browserSessionPersistence",function(){return s("6aFcR").c}),e(t.exports,"signInWithEmailAndPassword",function(){return s("6aFcR").ac}),e(t.exports,"signOut",function(){return s("6aFcR").D}),s("cMxtE")}),s.register("cMxtE",function(t,n){e(t.exports,"browserSessionPersistence",function(){return s("6aFcR").c}),e(t.exports,"createUserWithEmailAndPassword",function(){return s("6aFcR").ab}),e(t.exports,"getAuth",function(){return s("6aFcR").p}),e(t.exports,"onAuthStateChanged",function(){return s("6aFcR").z}),e(t.exports,"setPersistence",function(){return s("6aFcR").t}),e(t.exports,"signInWithEmailAndPassword",function(){return s("6aFcR").ac}),e(t.exports,"signOut",function(){return s("6aFcR").D}),s("bVYHX"),s("9k0Bn"),s("6mnY8"),s("aPEEV");s("6aFcR")}),s.register("bVYHX",function(t,n){e(t.exports,"_registerComponent",function(){return W}),e(t.exports,"_getProvider",function(){return z}),e(t.exports,"_isFirebaseServerApp",function(){return $}),e(t.exports,"registerVersion",function(){return Z}),e(t.exports,"SDK_VERSION",function(){return J}),e(t.exports,"initializeApp",function(){return Q}),e(t.exports,"getApp",function(){return X});var r=s("aPEEV"),i=s("6mnY8"),o=s("9k0Bn"),a=s("cCiiD");o=s("9k0Bn");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const l="@firebase/app",u="0.14.1",h=new(0,i.Logger)("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",g="@firebase/app-check-compat",m="@firebase/app-check",_="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",b="@firebase/data-connect",w="@firebase/database-compat",E="@firebase/functions",I="@firebase/functions-compat",C="@firebase/installations",T="@firebase/installations-compat",S="@firebase/messaging",k="@firebase/messaging-compat",R="@firebase/performance",P="@firebase/performance-compat",A="@firebase/remote-config",x="@firebase/remote-config-compat",N="@firebase/storage",O="@firebase/storage-compat",L="@firebase/firestore",D="@firebase/ai",M="@firebase/firestore-compat",F="firebase",U="[DEFAULT]",B={[l]:"fire-core",[d]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[m]:"fire-app-check",[g]:"fire-app-check-compat",[_]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[b]:"fire-data-connect",[w]:"fire-rtdb-compat",[E]:"fire-fn",[I]:"fire-fn-compat",[C]:"fire-iid",[T]:"fire-iid-compat",[S]:"fire-fcm",[k]:"fire-fcm-compat",[R]:"fire-perf",[P]:"fire-perf-compat",[A]:"fire-rc",[x]:"fire-rc-compat",[N]:"fire-gcs",[O]:"fire-gcs-compat",[L]:"fire-fst",[M]:"fire-fst-compat",[D]:"fire-vertex","fire-js":"fire-js",[F]:"fire-js-all"},q=new Map,j=new Map,H=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function W(e){const t=e.name;if(H.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;H.set(t,e);for(const t of q.values())V(t,e);for(const t of j.values())V(t,e);return!0}function z(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function $(e){return null!=e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},G=new(0,o.ErrorFactory)("app","Firebase",K);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,r.Component)("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J="12.1.0";function Q(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i={name:U,automaticDataCollectionEnabled:!0,...t},s=i.name;if("string"!=typeof s||!s)throw G.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw G.create("no-options");const a=q.get(s);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(i,a.config))return a;throw G.create("duplicate-app",{appName:s})}const c=new(0,r.ComponentContainer)(s);for(const e of H.values())c.addComponent(e);const l=new Y(n,i,c);return q.set(s,l),l}function X(e=U){const t=q.get(e);if(!t&&e===U&&(0,o.getDefaultAppConfig)())return Q();if(!t)throw G.create("no-app",{appName:e});return t}function Z(e,t,n){let i=B[e]??e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}W(new(0,r.Component)(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ee="firebase-heartbeat-store";let te=null;function ne(){return te||(te=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(ee)}catch(e){console.warn(e)}}}).catch(e=>{throw G.create("idb-open",{originalErrorMessage:e.message})})),te}async function re(e,t){try{const n=(await ne()).transaction(ee,"readwrite"),r=n.objectStore(ee);await r.put(t,ie(e)),await n.done}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{const t=G.create("idb-set",{originalErrorMessage:e?.message});h.warn(t.message)}}}function ie(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ae(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=oe();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){h.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=oe(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),ce(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ce(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return h.warn(e),""}}}function oe(){return(new Date).toISOString().substring(0,10)}class ae{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await ne()).transaction(ee),n=await t.objectStore(ee).get(ie(e));return await t.done,n}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{const t=G.create("idb-get",{originalErrorMessage:e?.message});h.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return re(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return re(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function ce(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}var le;le="",W(new(0,r.Component)("platform-logger",e=>new c(e),"PRIVATE")),W(new(0,r.Component)("heartbeat",e=>new se(e),"PRIVATE")),Z(l,u,le),Z(l,u,"esm2020"),Z("fire-js","")}),s.register("aPEEV",function(t,n){e(t.exports,"Component",function(){return i}),e(t.exports,"Provider",function(){return a}),e(t.exports,"ComponentContainer",function(){return c});var r=s("9k0Bn");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,r.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===o?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}}),s.register("9k0Bn",function(n,r){e(n.exports,"assert",function(){return c}),e(n.exports,"assertionError",function(){return l}),e(n.exports,"base64",function(){return h}),e(n.exports,"base64Encode",function(){return f}),e(n.exports,"base64urlEncodeWithoutPadding",function(){return p}),e(n.exports,"base64Decode",function(){return g}),e(n.exports,"deepCopy",function(){return m}),e(n.exports,"getDefaultEmulatorHost",function(){return w}),e(n.exports,"getDefaultEmulatorHostnameAndPort",function(){return E}),e(n.exports,"getDefaultAppConfig",function(){return I}),e(n.exports,"getExperimentalSetting",function(){return C}),e(n.exports,"Deferred",function(){return T}),e(n.exports,"isCloudWorkstation",function(){return S}),e(n.exports,"pingServer",function(){return k}),e(n.exports,"createMockUserToken",function(){return R}),e(n.exports,"updateEmulatorBanner",function(){return x}),e(n.exports,"getUA",function(){return N}),e(n.exports,"isMobileCordova",function(){return O}),e(n.exports,"isBrowser",function(){return L}),e(n.exports,"isWebWorker",function(){return D}),e(n.exports,"isCloudflareWorker",function(){return M}),e(n.exports,"isBrowserExtension",function(){return F}),e(n.exports,"isReactNative",function(){return U}),e(n.exports,"isIE",function(){return B}),e(n.exports,"isNodeSdk",function(){return q}),e(n.exports,"isIndexedDBAvailable",function(){return j}),e(n.exports,"validateIndexedDBOpenable",function(){return H}),e(n.exports,"FirebaseError",function(){return V}),e(n.exports,"ErrorFactory",function(){return W}),e(n.exports,"jsonEval",function(){return $}),e(n.exports,"stringify",function(){return K}),e(n.exports,"isValidFormat",function(){return Y}),e(n.exports,"isAdmin",function(){return J}),e(n.exports,"contains",function(){return Q}),e(n.exports,"safeGet",function(){return X}),e(n.exports,"isEmpty",function(){return Z}),e(n.exports,"map",function(){return ee}),e(n.exports,"deepEqual",function(){return te}),e(n.exports,"querystring",function(){return re}),e(n.exports,"querystringDecode",function(){return ie}),e(n.exports,"extractQuerystring",function(){return se}),e(n.exports,"Sha1",function(){return oe}),e(n.exports,"createSubscribe",function(){return ae}),e(n.exports,"errorPrefix",function(){return ue}),e(n.exports,"stringToByteArray",function(){return he}),e(n.exports,"stringLength",function(){return de}),e(n.exports,"getModularInstance",function(){return fe});var i=s("6f4KJ"),o=s("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},c=function(e,t){if(!e)throw l(t)},l=function(e){return new Error("Firebase Database ("+a.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},u=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(u(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new d;const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const f=function(e){const t=u(e);return h.encodeByteArray(t,!0)},p=function(e){return f(e).replace(/\./g,"")},g=function(e){try{return h.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(e){return _(void 0,e)}function _(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&y(n)&&(e[n]=_(e[n],t[n]));return e}function y(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,b=()=>{try{return(0,i.getDefaultsFromPostinstall)()||v()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&g(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},w=e=>b()?.emulatorHosts?.[e],E=e=>{const t=w(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},I=()=>b()?.config,C=e=>b()?.[`_${e}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function k(e){return(await fetch(e,{credentials:"include"})).ok}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[p(JSON.stringify({alg:"none",type:"JWT"})),p(JSON.stringify(s)),""].join(".")}const P={};let A=!1;function x(e,t){if("undefined"==typeof window||"undefined"==typeof document||!S(window.location.host)||P[e]===t||P[e]||A)return;function n(e){return`__firebase__banner__${e}`}P[e]=t;const r="__firebase__banner",i=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(P))P[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function s(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{A=!0,function(){const e=document.getElementById(r);e&&e.remove()}()},e}function o(){const e=function(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}(r),t=n("text"),o=document.getElementById(t)||document.createElement("span"),a=n("learnmore"),c=document.getElementById(a)||document.createElement("a"),l=n("preprendIcon"),u=document.getElementById(l)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(c,a);const n=s();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(u,l),t.append(u,o,c,n),document.body.appendChild(t)}i?(o.innerText="Preview backend disconnected.",u.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(u.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function O(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())}function L(){return"undefined"!=typeof window||D()}function D(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function M(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function F(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function U(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function B(){const e=N();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function q(){return!0===a.NODE_CLIENT||!0===a.NODE_ADMIN}function j(){try{return"object"==typeof indexedDB}catch(e){return!1}}function H(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}class V extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,V.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,W.prototype.create)}}class W{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(z,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new V(r,o,n)}}const z=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return JSON.parse(e)}function K(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=$(g(s[0])||""),n=$(g(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},Y=function(e){const t=G(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},J=function(e){const t=G(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function X(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ee(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function te(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(ne(n)&&ne(s)){if(!te(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function ne(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function re(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ie(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function se(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=c^o&(a^c),i=1518500249):(r=o^a^c,i=1859775393):e<60?(r=o&a|c&(o|a),i=2400959708):(r=o^a^c,i=3395469782);const t=(s<<5|s>>>27)+r+l+i+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}}function ae(e,t){const n=new ce(e,t);return n.subscribe.bind(n)}class ce{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=le),void 0===r.error&&(r.error=le),void 0===r.complete&&(r.complete=le);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function le(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const he=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,c(r<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},de=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(e){return e&&e._delegate?e._delegate:e}}),s.register("6f4KJ",function(t,n){e(t.exports,"getDefaultsFromPostinstall",function(){return r});const r=()=>{}}),s.register("6mnY8",function(t,n){e(t.exports,"LogLevel",function(){return i}),e(t.exports,"Logger",function(){return u}),e(t.exports,"setLogLevel",function(){return h}),e(t.exports,"setUserLogHandler",function(){return d});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i,s;(s=i||(i={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,c={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=c[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function h(e){r.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(r??t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}}),s.register("cCiiD",function(t,n){e(t.exports,"openDB",function(){return i});var r=s("ekHjI");r=s("ekHjI");function i(e,t,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(e,t),c=(0,r.w)(a);return i&&a.addEventListener("upgradeneeded",e=>{i((0,r.w)(a.result),e.oldVersion,e.newVersion,(0,r.w)(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),c.then(e=>{o&&e.addEventListener("close",()=>o()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),c}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],c=new Map;function l(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(c.get(t))return c.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!o.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return c.set(t,s),s}(0,r.r)(e=>({...e,get:(t,n,r)=>l(t,n)||e.get(t,n,r),has:(t,n)=>!!l(t,n)||e.has(t,n)}))}),s.register("ekHjI",function(t,n){e(t.exports,"w",function(){return g}),e(t.exports,"r",function(){return d});const r=(e,t)=>t.some(t=>e instanceof t);let i,s;const o=new WeakMap,a=new WeakMap,c=new WeakMap,l=new WeakMap,u=new WeakMap;let h={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return a.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){h=e(h)}function f(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(m(this),t),g(o.get(this))}:function(...t){return g(e.apply(m(this),t))}:function(t,...n){const r=e.call(m(this),t,...n);return c.set(r,t.sort?t.sort():[t]),g(r)}}function p(e){return"function"==typeof e?f(e):(e instanceof IDBTransaction&&function(e){if(a.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});a.set(e,t)}(e),r(e,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,h):e)}function g(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(g(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&o.set(t,e)}).catch(()=>{}),u.set(t,e),t}(e);if(l.has(e))return l.get(e);const t=p(e);return t!==e&&(l.set(e,t),u.set(t,e)),t}const m=e=>u.get(e)}),s.register("6aFcR",function(t,n){e(t.exports,"ab",function(){return ct}),e(t.exports,"ac",function(){return lt}),e(t.exports,"t",function(){return ut}),e(t.exports,"z",function(){return ht}),e(t.exports,"D",function(){return dt}),e(t.exports,"c",function(){return Et}),e(t.exports,"p",function(){return Dn});var r=s("bVYHX"),i=s("9k0Bn"),o=s("6mnY8"),a=s("aPEEV");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new(0,i.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),h=new(0,o.Logger)("@firebase/auth");function d(e,...t){h.logLevel<=o.LogLevel.ERROR&&h.error(`Auth (${r.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw _(e,...t)}function p(e,...t){return _(e,...t)}function g(e,t,n){const r={...l(),[t]:n};return new(0,i.ErrorFactory)("auth","Firebase",r).create(t,{appName:e.name})}function m(e){return g(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function y(e,t,...n){if(!e)throw _(t,...n)}function v(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||v(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!=typeof self&&self.location?.href||""}function E(){return"http:"===I()||"https:"===I()}function I(){return"undefined"!=typeof self&&self.location?.protocol||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.isMobileCordova)()||(0,i.isReactNative)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(E()||(0,i.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},R=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],P=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function x(e,t,n,r,s={}){return N(e,s,async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.querystring)({key:e.config.apiKey,...o}).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:c,...s};return(0,i.isCloudflareWorker)()||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&(0,i.isCloudWorkstation)(e.emulatorConfig.host)&&(l.credentials="include"),S.fetch()(await L(e,e.config.apiHost,n,a),l)})}async function N(e,t,n){e._canInitEmulator=!1;const r={...k,...t};try{const t=new M(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw F(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw F(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);f(e,a)}}catch(t){if(t instanceof i.FirebaseError)throw t;f(e,"network-request-failed",{message:String(t)})}}async function O(e,t,n,r,i={}){const s=await x(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function L(e,t,n,r){const i=`${t}${n}?${r}`,s=e,o=s.config.emulator?T(e.config,i):`${e.config.apiScheme}://${i}`;if(R.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){return s._getPersistence()._getFinalTarget(o).toString()}return o}function D(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class M{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),P.get())})}}function F(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return void 0!==e&&void 0!==e.enterprise}class B{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return D(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t){return x(e,"GET","/v2/recaptchaConfig",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e,t){return x(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){return 1e3*Number(e)}function W(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.base64Decode)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(e){return d("Caught error parsing JWT payload as JSON",e?.toString()),null}}function z(e){const t=W(e);return y(t,"internal-error"),y(void 0!==t.exp,"internal-error"),y(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class K{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e?.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){const t=e.auth,n=await e.getIdToken(),r=await $(e,j(t,{idToken:n}));y(r?.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=i.providerUserInfo?.length?J(i.providerUserInfo):[],o=(a=e.providerData,c=s,[...a.filter(e=>!c.some(t=>t.providerId===e.providerId)),...c]);var a,c;const l=e.isAnonymous,u=!(e.email&&i.passwordHash||o?.length),h=!!l&&u,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new G(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(e,d)}function J(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(void 0!==e.idToken,"internal-error"),y(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){y(0!==e.length,"internal-error");const t=z(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await async function(e,t){const n=await N(e,{},async()=>{const n=(0,i.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=await L(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:n};return e.emulatorConfig&&(0,i.isCloudWorkstation)(e.emulatorConfig.host)&&(c.credentials="include"),S.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Q;return n&&(y("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(y("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(y("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Q,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t){y("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Z{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new K(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new G(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await $(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,i.getModularInstance)(e),r=await n.getIdToken(t),s=W(r);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:r,authTime:H(V(s.auth_time)),issuedAtTime:H(V(s.iat)),expirationTime:H(V(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=(0,i.getModularInstance)(e);await Y(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Z({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r._isFirebaseServerApp)(this.auth.app))return Promise.reject(m(this.auth));const e=await this.getIdToken();return await $(this,async function(e,t){return x(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,s=t.photoURL??void 0,o=t.tenantId??void 0,a=t._redirectEventId??void 0,c=t.createdAt??void 0,l=t.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:d,providerData:f,stsTokenManager:p}=t;y(u&&p,e,"internal-error");const g=Q.fromJSON(this.name,p);y("string"==typeof u,e,"internal-error"),X(n,e.name),X(r,e.name),y("boolean"==typeof h,e,"internal-error"),y("boolean"==typeof d,e,"internal-error"),X(i,e.name),X(s,e.name),X(o,e.name),X(a,e.name),X(c,e.name),X(l,e.name);const m=new Z({uid:u,auth:e,email:r,emailVerified:h,displayName:n,isAnonymous:d,photoURL:s,phoneNumber:i,tenantId:o,stsTokenManager:g,createdAt:c,lastLoginAt:l});return f&&Array.isArray(f)&&(m.providerData=f.map(e=>({...e}))),a&&(m._redirectEventId=a),m}static async _fromIdTokenResponse(e,t,n=!1){const r=new Q;r.updateFromServerResponse(t);const i=new Z({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Y(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];y(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?J(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||i?.length),o=new Q;o.updateFromIdToken(n);const a=new Z({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new G(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||i?.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new Map;function te(e){b(e instanceof Function,"Expected a class definition");let t=ee.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ee.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ne.type="NONE";const re=ne;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t,n){return`firebase:${e}:${t}:${n}`}class se{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ie(this.userKey,r.apiKey,i),this.fullPersistenceKey=ie("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await j(this.auth,{idToken:e}).catch(()=>{});return t?Z._fromGetAccountInfoResponse(this.auth,t,e):null}return Z._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new se(te(re),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||te(re);const s=ie(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){let r;if("string"==typeof t){const n=await j(e,{idToken:t}).catch(()=>{});if(!n)break;r=await Z._fromGetAccountInfoResponse(e,n,t)}else r=Z._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch{}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch{}})),new se(i,e,n)):new se(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ue(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ae(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(de(t))return"Blackberry";if(fe(t))return"Webos";if(ce(t))return"Safari";if((t.includes("chrome/")||le(t))&&!t.includes("edge/"))return"Chrome";if(he(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function ae(e=(0,i.getUA)()){return/firefox\//i.test(e)}function ce(e=(0,i.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function le(e=(0,i.getUA)()){return/crios\//i.test(e)}function ue(e=(0,i.getUA)()){return/iemobile/i.test(e)}function he(e=(0,i.getUA)()){return/android/i.test(e)}function de(e=(0,i.getUA)()){return/blackberry/i.test(e)}function fe(e=(0,i.getUA)()){return/webos/i.test(e)}function pe(e=(0,i.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ge(e=(0,i.getUA)()){return pe(e)||he(e)||fe(e)||de(e)||/windows phone/i.test(e)||ue(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e,t=[]){let n;switch(e){case"Browser":n=oe((0,i.getUA)());break;case"Worker":n=`${oe((0,i.getUA)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.SDK_VERSION}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e?.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new we(this),this.idTokenSubscription=new we(this),this.beforeStateQueue=new _e(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=te(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await se.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await j(this,{idToken:e}),n=await Z._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if((0,r._isFirebaseServerApp)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,r=n?._redirectEventId,s=await this.tryRedirectSignIn(e);t&&t!==r||!s?.user||(n=s.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Y(e)}catch(e){if("auth/network-request-failed"!==e?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r._isFirebaseServerApp)(this.app))return Promise.reject(m(this));const t=e?(0,i.getModularInstance)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,r._isFirebaseServerApp)(this.app)?Promise.reject(m(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r._isFirebaseServerApp)(this.app)?Promise.reject(m(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(te(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return x(e,"GET","/v2/passwordPolicy",A(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new ye(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new(0,i.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return x(e,"POST","/v2/accounts:revokeToken",A(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&te(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await se.create(this,[te(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=me(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if((0,r._isFirebaseServerApp)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){h.logLevel<=o.LogLevel.WARN&&h.warn(`Auth (${r.SDK_VERSION}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function be(e){return(0,i.getModularInstance)(e)}class we{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.createSubscribe)(e=>this.observer=e)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ee={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ie(e){return Ee.loadJS(e)}function Ce(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(){this.enterprise=new Se}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Se{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ke="NO_RECAPTCHA";class Re{constructor(e){this.type="recaptcha-enterprise",this.auth=be(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;U(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(ke)})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new Te).execute("siteKey",{action:"verify"})}return new Promise((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{q(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new B(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})})(this.auth).then(i=>{if(!t&&U(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=Ee.recaptchaEnterpriseScript;0!==t.length&&(t+=i),Ie(t).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function Pe(e,t,n,r=!1,i=!1){const s=new Re(e);let o;if(i)o=ke;else try{o=await s.verify(n)}catch(e){o=await s.verify(n,!0)}const a={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ae(e,t,n,r,i){if("EMAIL_PASSWORD_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Pe(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Pe(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)})}if("PHONE_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Pe(e,t,n);return r(e,i).catch(async i=>{if("AUDIT"===e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await Pe(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)})}{const i=await Pe(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+" provider is not supported.")}async function xe(e){const t=be(e),n=await q(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new B(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){new Re(t).verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e,t,n){const r=be(e);y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!n?.disableWarnings,o=Oe(t),{host:a,port:c}=function(e){const t=Oe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Le(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Le(t)}}}(t),l=null===c?"":`:${c}`,u={url:`${o}//${a}${l}/`},h=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator)return y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void y((0,i.deepEqual)(u,r.config.emulator)&&(0,i.deepEqual)(h,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,(0,i.isCloudWorkstation)(a)?((0,i.pingServer)(`${o}//${a}${l}`),(0,i.updateEmulatorBanner)("Auth",!0)):s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Oe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Le(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class De{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e,t){return x(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Fe(e,t){return O(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue extends De{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ue(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ue(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if(t?.email&&t?.password){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ae(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Fe,"EMAIL_PASSWORD_PROVIDER");case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return O(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ae(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Me,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return O(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return O(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends De{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const s=new qe(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Be(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Be(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Be(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.querystring)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(e,t){return x(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}const He={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve extends De{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ve({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ve({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return O(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await O(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw F(e,"account-exists-with-different-credential",n);return n}(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return async function(e,t){return O(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,{...t,operation:"REAUTH"}),He)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ve({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){const t=(0,i.querystringDecode)((0,i.extractQuerystring)(e)),n=t.apiKey??null,r=t.oobCode??null,s=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(t.mode??null);y(n&&r&&s,"argument-error"),this.apiKey=n,this.operation=s,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=function(e){const t=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).link,n=t?(0,i.querystringDecode)((0,i.extractQuerystring)(t)).deep_link_id:null,r=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).deep_link_id;return(r?(0,i.querystringDecode)((0,i.extractQuerystring)(r)).link:null)||r||n||t||e}(e);try{return new We(t)}catch{return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze{constructor(){this.providerId=ze.PROVIDER_ID}static credential(e,t){return Ue._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=We.parseLink(t);return y(n,"argument-error"),Ue._fromEmailAndCode(e,n.code,n.tenantId)}}ze.PROVIDER_ID="password",ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends $e{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge extends Ke{constructor(){super("facebook.com")}static credential(e){return qe._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ge.credential(e.oauthAccessToken)}catch{return null}}}Ge.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ge.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends Ke{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qe._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ye.credential(t,n)}catch{return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com",Ye.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ke{constructor(){super("github.com")}static credential(e){return qe._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch{return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com",Je.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Ke{constructor(){super("twitter.com")}static credential(e,t){return qe._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qe.credential(t,n)}catch{return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xe(e,t){return O(e,"POST","/v1/accounts:signUp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe.TWITTER_SIGN_IN_METHOD="twitter.com",Qe.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Z._fromIdTokenResponse(e,n,r),s=et(n);return new Ze({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends i.FirebaseError{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new tt(e,t,n,r)}}function nt(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t,n=!1){const r=await $(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t,n=!1){const{auth:i}=e;if((0,r._isFirebaseServerApp)(i.app))return Promise.reject(m(i));const s="reauthenticate";try{const r=await $(e,nt(i,s,t,e),n);y(r.idToken,i,"internal-error");const o=W(r.idToken);y(o,i,"internal-error");const{sub:a}=o;return y(e.uid===a,i,"user-mismatch"),Ze._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===e?.code&&f(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t,n=!1){if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(m(e));const i="signIn",s=await nt(e,i,t),o=await Ze._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(o.user),o}async function ot(e,t){return st(be(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function at(e){const t=be(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function ct(e,t,n){if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(m(e));const i=be(e),s=Ae(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xe,"EMAIL_PASSWORD_PROVIDER"),o=await s.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&at(e),t}),a=await Ze._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function lt(e,t,n){return(0,r._isFirebaseServerApp)(e.app)?Promise.reject(m(e)):ot((0,i.getModularInstance)(e),ze.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&at(e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ut(e,t){return(0,i.getModularInstance)(e).setPersistence(t)}function ht(e,t,n,r){return(0,i.getModularInstance)(e).onAuthStateChanged(t,n,r)}function dt(e){return(0,i.getModularInstance)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ft(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,t))}new WeakMap;const pt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pt,"1"),this.storage.removeItem(pt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends gt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ge(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(0,i.isIE)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mt.type="LOCAL";const _t=mt;
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e){const t=e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${t}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function vt(e){return`${"http:"===window.location.protocol?"__dev_":"__HOST-"}FIREBASE_${e.split(":")[3]}`}class bt{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return!("boolean"==typeof isSecureContext&&!isSecureContext)&&("undefined"!=typeof navigator&&"undefined"!=typeof document&&(navigator.cookieEnabled??!0))}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=vt(e);if(window.cookieStore){const e=await window.cookieStore.get(t);return e?.value}return yt(t)}async _remove(e){if(!this._isAvailable())return;if(!await this._get(e))return;const t=vt(e);document.cookie=`${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=vt(e);if(window.cookieStore){const e=e=>{const r=e.changed.find(e=>e.name===n);r&&t(r.value);e.deleted.find(e=>e.name===n)&&t(null)},r=()=>window.cookieStore.removeEventListener("change",e);return this.listenerUnsubscribes.set(t,r),window.cookieStore.addEventListener("change",e)}let r=yt(n);const i=setInterval(()=>{const e=yt(n);e!==r&&(t(e),r=e)},1e3);this.listenerUnsubscribes.set(t,()=>clearInterval(i))}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}bt.type="COOKIE";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt extends gt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wt.type="SESSION";const Et=wt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new It(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!s?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ct(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.receivers=[];class Tt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Ct("",20);r.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kt(){return void 0!==St().WorkerGlobalScope&&"function"==typeof St().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rt="firebaseLocalStorageDb",Pt="firebaseLocalStorage",At="fbase_key";class xt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Nt(e,t){return e.transaction([Pt],t?"readwrite":"readonly").objectStore(Pt)}function Ot(){const e=indexedDB.open(Rt,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Pt,{keyPath:At})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Pt)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Rt);return new xt(e).toPromise()}(),t(await Ot()))})})}async function Lt(e,t,n){const r=Nt(e,!0).put({[At]:t,value:n});return new xt(r).toPromise()}function Dt(e,t){const n=Nt(e,!0).delete(t);return new xt(n).toPromise()}class Mt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ot()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=It._getInstance(kt()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Tt(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ot();return await Lt(e,pt,"1"),await Dt(e,pt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=Nt(e,!1).get(t),r=await new xt(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Nt(e,!1).getAll();return new xt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Mt.type="LOCAL";const Ft=Mt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:start",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ce("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bt="recaptcha";async function qt(e,t,n){if(!e._getRecaptchaConfig())try{await xe(e)}catch(e){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){y("enroll"===t.type,e,"internal-error");const i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=Ae(e,i,"mfaSmsEnrollment",async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===ke){y(n?.type===Bt,e,"argument-error");return ft(e,await jt(e,t,n))}return ft(e,t)},"PHONE_PROVIDER");return(await s.catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;y(i,e,"missing-multi-factor-info");const s={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},o=Ae(e,s,"mfaSmsSignIn",async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===ke){y(n?.type===Bt,e,"argument-error");return Ut(e,await jt(e,t,n))}return Ut(e,t)},"PHONE_PROVIDER");return(await o.catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}{const t={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=Ae(e,t,"sendVerificationCode",async(e,t)=>{if(t.captchaResponse===ke){y(n?.type===Bt,e,"argument-error");return je(e,await jt(e,t,n))}return je(e,t)},"PHONE_PROVIDER");return(await i.catch(e=>Promise.reject(e))).sessionInfo}}finally{n?._reset()}}async function jt(e,t,n){y(n.type===Bt,e,"argument-error");const r=await n.verify();y("string"==typeof r,e,"argument-error");const i={...t};if("phoneEnrollmentInfo"in i){const e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:s}}),i}if("phoneSignInInfo"in i){const e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.providerId=Ht.PROVIDER_ID,this.auth=be(e)}verifyPhoneNumber(e,t){return qt(this.auth,e,(0,i.getModularInstance)(t))}static credential(e,t){return Ve._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ht.credentialFromTaggedObject(t)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ve._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vt(e,t){return t?te(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht.PROVIDER_ID="phone",Ht.PHONE_SIGN_IN_METHOD="phone";class Wt extends De{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Be(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Be(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Be(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zt(e){return st(e.auth,new Wt(e),e.bypassAuthState)}function $t(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),it(n,new Wt(e),e.bypassAuthState)}async function Kt(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),rt(n,new Wt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zt;case"linkViaPopup":case"linkViaRedirect":return Kt;case"reauthViaPopup":case"reauthViaRedirect":return $t;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new C(2e3,1e4);class Jt extends Gt{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Ct();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Yt.get())};e()}}Jt.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qt=new Map;class Xt extends Gt{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Qt.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=tn(t),r=en(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Qt.set(this.auth._key(),e)}return this.bypassAuthState||Qt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Zt(e,t){Qt.set(e._key(),t)}function en(e){return te(e._redirectPersistence)}function tn(e){return ie("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,t,n=!1){if((0,r._isFirebaseServerApp)(e.app))return Promise.reject(m(e));const i=be(e),s=Vt(i,t),o=new Xt(i,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}class rn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return on(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!on(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(p(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(sn(e))}saveEventToCache(e){this.cachedEventUids.add(sn(e)),this.lastProcessedEventTime=Date.now()}}function sn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function on({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const an=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cn=/^https?/;async function ln(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return x(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(un(e))return}catch{}f(e,"unauthorized-domain")}function un(e){const t=w(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!cn.test(n))return!1;if(an.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new C(3e4,6e4);function dn(){const e=St().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function fn(e){return new Promise((t,n)=>{function r(){dn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{dn(),n(p(e,"network-request-failed"))},timeout:hn.get()})}if(St().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!St().gapi?.load){const t=Ce("iframefcb");return St()[t]=()=>{gapi.load?r():n(p(e,"network-request-failed"))},Ie(`${Ee.gapiScript}?onload=${t}`).catch(e=>n(e))}r()}}).catch(e=>{throw pn=null,e})}let pn=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn=new C(5e3,15e3),mn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_n=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yn(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?T(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:t.apiKey,appName:e.name,v:r.SDK_VERSION},o=_n.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.querystring)(s).slice(1)}`}async function vn(e){const t=await function(e){return pn=pn||fn(e),pn}(e),n=St().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:yn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=St().setTimeout(()=>{r(i)},gn.get());function o(){St().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class wn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function En(e,t,n,r=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...bn,width:r.toString(),height:s.toString(),top:o,left:a},u=(0,i.getUA)().toLowerCase();n&&(c=le(u)?"_blank":n),ae(u)&&(t=t||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=(0,i.getUA)()){return pe(e)&&!!window.navigator?.standalone}(u)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",c),new wn(null);const d=window.open(t||"",c,h);y(d,e,"popup-blocked");try{d.focus()}catch(e){}return new wn(d)}const In="__/auth/handler",Cn="emulator/auth/handler",Tn=encodeURIComponent("fac");async function Sn(e,t,n,s,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.SDK_VERSION,eventId:o};if(t instanceof $e){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.isEmpty)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ke){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const e of Object.keys(l))void 0===l[e]&&delete l[e];const u=await e._getAppCheckToken(),h=u?`#${Tn}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?T(e,Cn):`https://${e.authDomain}/${In}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${(0,i.querystring)(l).slice(1)}${h}`}const kn="webStorageSupport";const Rn=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Et,this._completeRedirectFn=nn,this._overrideRedirectResult=Zt}async _openPopup(e,t,n,r){b(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return En(e,await Sn(e,t,n,w(),r),Ct())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){St().location.href=e}(await Sn(e,t,n,w(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await vn(e),n=new rn(e);return t.register("authEvent",t=>{y(t?.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(kn,{type:kn},n=>{const r=n?.[0]?.[WEB_STORAGE_SUPPORT_KEY];void 0!==r&&t(!!r),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ln(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ge()||ce()||pe()}};var Pn="@firebase/auth",An="1.11.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nn=(0,i.getExperimentalSetting)("authIdTokenMaxAge")||300;let On=null;const Ln=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Nn)return;const i=n?.token;On!==i&&(On=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Dn(e=(0,r.getApp)()){const t=(0,r._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,r._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.deepEqual)(r,t??{}))return e;f(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Rn,persistence:[Ft,_t,Et]}),s=(0,i.getExperimentalSetting)("authTokenSyncURL");if(s&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(s,location.origin);if(location.origin===e.origin){const t=Ln(e.toString());!function(e,t,n){(0,i.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){(0,i.getModularInstance)(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}const o=(0,i.getDefaultEmulatorHost)("auth");return o&&Ne(n,`http://${o}`),n}var Mn;Ee={loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},Mn="Browser",(0,r._registerComponent)(new(0,a.Component)("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;y(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Mn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:me(Mn)},c=new ve(n,r,i,a);return function(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(te);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),(0,r._registerComponent)(new(0,a.Component)("auth-internal",e=>{const t=be(e.getProvider("auth").getImmediate());return new xn(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.registerVersion)(Pn,An,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Mn)),(0,r.registerVersion)(Pn,An,"esm2020")}),s.register("868P8",function(t,n){e(t.exports,"connectToBD",function(){return c}),e(t.exports,"createNewUser",function(){return l}),e(t.exports,"logUser",function(){return u}),e(t.exports,"logOut",function(){return h}),e(t.exports,"createNote",function(){return d}),e(t.exports,"readNote",function(){return f}),s("gKkQl");var r=s("bVYHX");s("jAzyG");var i=s("gxMbV");s("eyjy7");var o=s("6aFcR");const a={apiKey:"AIzaSyBbimgzf3jwfOpmEGxEe2-A8GsMsobk9DI",authDomain:"filmoteka-ba48e.firebaseapp.com",projectId:"filmoteka-ba48e",storageBucket:"filmoteka-ba48e.firebasestorage.app",messagingSenderId:"36390559870",appId:"1:36390559870:web:dee6c791d47e73219e382f"};function c(){const e=(0,r.initializeApp)(a);return(0,i.getDatabase)(e)}async function l(e,t){const n=(0,o.p)();return await(0,o.ab)(n,e,t).then(e=>e.user).catch(e=>{const t=e.code;e.message;return t})}async function u(e,t){const n=(0,o.p)();return(0,o.t)(n,o.c),await(0,o.ac)(n,e,t).then(e=>e.user).catch(e=>{const t=e.code;e.message;return t})}async function h(){const e=(0,o.p)();(0,o.D)(e).then(()=>{}).catch(e=>{})}async function d(e,t,n){const r=(0,i.getDatabase)();await(0,i.set)((0,i.ref)(r,"galleries/"+e.uid),{queue:t,watched:n})}async function f(e){const t=(0,i.ref)((0,i.getDatabase)());return await(0,i.get)((0,i.child)(t,`galleries/${e.uid}`)).then(e=>{if(e.exists()){return e.val()}return e.val()}).catch(e=>{})}}),s.register("gKkQl",function(t,n){e(t.exports,"initializeApp",function(){return s("bVYHX").initializeApp}),e(t.exports,"registerVersion",function(){return s("bVYHX").registerVersion});s("bVYHX");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s("bVYHX").registerVersion)("firebase","12.1.0","app")}),s.register("jAzyG",function(t,n){e(t.exports,"getDatabase",function(){return s("gxMbV").getDatabase}),e(t.exports,"set",function(){return s("gxMbV").set}),e(t.exports,"ref",function(){return s("gxMbV").ref}),e(t.exports,"get",function(){return s("gxMbV").get}),e(t.exports,"child",function(){return s("gxMbV").child}),s("gxMbV")}),s.register("gxMbV",function(t,n){e(t.exports,"child",function(){return Ti}),e(t.exports,"ref",function(){return Ci}),e(t.exports,"set",function(){return Si}),e(t.exports,"get",function(){return ki}),e(t.exports,"getDatabase",function(){return Oi});var r=s("bVYHX"),i=s("aPEEV"),o=s("9k0Bn"),a=s("6mnY8"),c=s("4TNnu");const l="@firebase/database",u="1.1.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h="";function d(e){h=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.stringify)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.jsonEval)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.contains)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new f(t)}}catch(e){}return new p},m=g("localStorage"),_=g("sessionStorage"),y=new(0,a.Logger)("@firebase/database"),v=function(){let e=1;return function(){return e++}}(),b=function(e){const t=(0,o.stringToByteArray)(e),n=new(0,o.Sha1);n.update(t);const r=n.digest();return o.base64.encodeByteArray(r)},w=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=w.apply(null,r):t+="object"==typeof r?(0,o.stringify)(r):r,t+=" "}return t};let E=null,I=!0;const C=function(e,t){(0,o.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(y.logLevel=a.LogLevel.VERBOSE,E=y.log.bind(y),t&&_.set("logging_enabled",!0)):"function"==typeof e?E=e:(E=null,_.remove("logging_enabled"))},T=function(...e){if(!0===I&&(I=!1,null===E&&!0===_.get("logging_enabled")&&C(!0)),E){const t=w.apply(null,e);E(t)}},S=function(e){return function(...t){T(e,...t)}},k=function(...e){const t="FIREBASE INTERNAL ERROR: "+w(...e);y.error(t)},R=function(...e){const t=`FIREBASE FATAL ERROR: ${w(...e)}`;throw y.error(t),new Error(t)},P=function(...e){const t="FIREBASE WARNING: "+w(...e);y.warn(t)},A=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},x="[MIN_NAME]",N="[MAX_NAME]",O=function(e,t){if(e===t)return 0;if(e===x||t===N)return-1;if(t===x||e===N)return 1;{const n=j(e),r=j(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},L=function(e,t){return e===t?0:e<t?-1:1},D=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.stringify)(t))},M=function(e){if("object"!=typeof e||null===e)return(0,o.stringify)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=(0,o.stringify)(t[r]),n+=":",n+=M(e[t[r]]);return n+="}",n},F=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function U(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const B=function(e){(0,o.assert)(!A(e),"Invalid JSON number");const t=1023;let n,r,i,s,a;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const c=[];for(a=52;a;a-=1)c.push(i%2?1:0),i=Math.floor(i/2);for(a=11;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(n?1:0),c.reverse();const l=c.join("");let u="";for(a=0;a<64;a+=8){let e=parseInt(l.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),u+=e}return u.toLowerCase()};const q=new RegExp("^-?(0*)\\d{1,10}$"),j=function(e){if(q.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},H=function(e){try{e()}catch(e){setTimeout(()=>{const t=e.stack||"";throw P("Exception was thrown by user callback.",t),e},Math.floor(0))}},V=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,(0,r._isFirebaseServerApp)(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(e=>this.appCheck=e)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){P(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(T("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',P(e)}}class ${constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K="5",G=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Y="ac",J="websocket",Q="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(e,t,n,r,i=!1,s="",o=!1,a=!1,c=null){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=m.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&m.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Z(e,t,n){let r;if((0,o.assert)("string"==typeof t,"typeof type must == string"),(0,o.assert)("object"==typeof n,"typeof params must == object"),t===J)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Q)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return U(n,(e,t)=>{i.push(e+"="+t)}),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.deepCopy)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={},ne={};function re(e){const t=e.toString();return te[t]||(te[t]=new ee),te[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&H(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se="start";class oe{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=S(e),this.stats_=re(t),this.urlFn=e=>(this.appCheckToken&&(e[Y]=this.appCheckToken),Z(t,Q,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ie(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),function(e){if((0,o.isNodeSdk)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}}(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ae((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===se)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[se]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=K,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Y]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&G.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oe.forceAllow_=!0}static forceDisallow(){oe.forceDisallow_=!0}static isAvailable(){return!(0,o.isNodeSdk)()&&(!!oe.forceAllow_||!(oe.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.base64Encode)(t),r=F(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ae{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.isNodeSdk)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=v(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ae.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){T("frame writing exception"),e.stack&&T(e.stack),T(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||T("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(r),n()})}addTag(e,t){(0,o.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{T("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ce=null;"undefined"!=typeof MozWebSocket?ce=MozWebSocket:"undefined"!=typeof WebSocket&&(ce=WebSocket);class le{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=S(this.connId),this.stats_=re(t),this.connURL=le.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={};return s.v=K,!(0,o.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&G.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s[Y]=r),i&&(s.p=i),Z(e,J,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,m.set("previous_websocket_failure",!0);try{let e;if((0,o.isNodeSdk)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${K}/${h}/${c.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new ce(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){le.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ce&&!le.forceDisallow_}static previouslyFailed(){return m.isInMemoryStorage||!0===m.get("previous_websocket_failure")}markConnectionHealthy(){m.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.jsonEval)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}le.responsesRequiredToBeHealthy=2,le.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{static get ALL_TRANSPORTS(){return[oe,le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=le&&le.isAvailable();let n=t&&!le.previouslyFailed();if(e.webSocketOnly&&(t||P("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[le];else{const e=this.transports_=[];for(const t of ue.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);ue.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ue.globalTransportInitialized_=!1;class he{constructor(e,t,n,r,i,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=S("c:"+this.id+":"),this.transportManager_=new ue(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=V(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=D("t",e),n=D("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=D("t",e),n=D("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=D("t",e);if("d"in e){const n=e.d;if("h"===t){const e={...n};this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?k("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):k("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),K!==n&&P("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),V(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):V(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(m.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.assert)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){(0,o.assert)(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends fe{static getInstance(){return new pe}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,o.isMobileCordova)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return(0,o.assert)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function me(){return new ge("")}function _e(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ye(e){return e.pieces_.length-e.pieceNum_}function ve(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ge(e.pieces_,t)}function be(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function we(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ee(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ge(t,0)}function Ie(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ge)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ge(n,0)}function Ce(e){return e.pieceNum_>=e.pieces_.length}function Te(e,t){const n=_e(e),r=_e(t);if(null===n)return t;if(n===r)return Te(ve(e),ve(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Se(e,t){if(ye(e)!==ye(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function ke(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(ye(e)>ye(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Re{constructor(e,t){this.errorPrefix_=t,this.parts_=we(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,o.stringLength)(this.parts_[e]);Pe(this)}}function Pe(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ae(e))}function Ae(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends fe{static getInstance(){return new xe}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}getInitialEvent(e){return(0,o.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=1e3;class Oe extends de{constructor(e,t,n,r,i,s,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Oe.nextPersistentConnectionId_++,this.log_=S("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ne,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,o.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xe.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&pe.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_((0,o.stringify)(i)),(0,o.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new(0,o.Deferred),n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.assert)(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,i=>{const s=i.d,o=i.s;Oe.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,o.contains)(e,"w")){const n=(0,o.safeGet)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();P(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||(0,o.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.isValidFormat)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e.s,e.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.stringify)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):k("Unrecognized action received from server: "+(0,o.stringify)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ne,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ne,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Ne),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=Math.max(0,(new Date).getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Oe.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},l=function(e){(0,o.assert)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?T("getToken() completed but was canceled"):(T("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new he(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{P(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&P(e),c())}}}interrupt(e){T("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){T("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=Ne,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>M(e)).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new ge(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){T("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){T("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+h.replace(/\./g,"-")]=1,(0,o.isMobileCordova)()?e["framework.cordova"]=1:(0,o.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pe.getInstance().currentlyOnline();return(0,o.isEmpty)(this.interruptReasons_)&&e}}Oe.nextPersistentConnectionId_=0,Oe.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Le(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Le(x,e),r=new Le(x,t);return 0!==this.compare(n,r)}minPost(){return Le.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Me;class Fe extends De{static get __EMPTY_NODE(){return Me}static set __EMPTY_NODE(e){Me=e}compare(e,t){return O(e.name,t.name)}isDefinedOn(e){throw(0,o.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Le.MIN}maxPost(){return new Le(N,Me)}makePost(e,t){return(0,o.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new Le(e,Me)}toString(){return".key"}}const Ue=new Fe;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:qe.RED,this.left=null!=r?r:je.EMPTY_NODE,this.right=null!=i?i:je.EMPTY_NODE}copy(e,t,n,r,i){return new qe(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return je.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return je.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0,qe.BLACK=!1;class je{constructor(e,t=je.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new je(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Be(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Be(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Be(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Be(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(e,t){return O(e.name,t.name)}function Ve(e,t){return O(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let We;je.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new qe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ze=function(e){return"number"==typeof e?"number:"+B(e):"string:"+e},$e=function(e){if(e.isLeafNode()){const t=e.val();(0,o.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,o.contains)(t,".sv"),"Priority must be a string or number.")}else(0,o.assert)(e===We||e.isEmpty(),"priority of unexpected type.");(0,o.assert)(e===We||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ke,Ge,Ye;class Je{static set __childrenNodeConstructor(e){Ke=e}static get __childrenNodeConstructor(){return Ke}constructor(e,t=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),$e(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ce(e)?this:".priority"===_e(e)?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=_e(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.assert)(".priority"!==n||1===ye(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ze(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?B(this.value_):this.value_,this.lazyHash_=b(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:((0,o.assert)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Je.VALUE_TYPE_ORDER.indexOf(t),i=Je.VALUE_TYPE_ORDER.indexOf(n);return(0,o.assert)(r>=0,"Unknown leaf type: "+t),(0,o.assert)(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Qe=new class extends De{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?O(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Le.MIN}maxPost(){return new Le(N,new Je("[PRIORITY-POST]",Ye))}makePost(e,t){const n=Ge(e);return new Le(t,new Je("[PRIORITY-POST]",n))}toString(){return".priority"}},Xe=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Xe,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const et=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new qe(a,o.node,qe.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=i(t,c),u=i(c+1,r);return o=e[c],a=n?n(o):o,new qe(a,o.node,qe.BLACK,l,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const l=i(s+1,a),u=e[s],h=n?n(u):u;c(new qe(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,qe.BLACK):(a(r,qe.BLACK),a(r,qe.RED))}return s}(new Ze(e.length));return new je(r||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt;const nt={};class rt{static get Default(){return(0,o.assert)(nt&&Qe,"ChildrenNode.ts has not been loaded"),tt=tt||new rt({".priority":nt},{".priority":Qe}),tt}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=(0,o.safeGet)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof je?t:null}hasIndex(e){return(0,o.contains)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.assert)(e!==Ue,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Le.Wrap);let s,a=i.getNext();for(;a;)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?et(n,e.getCompare()):nt;const c=e.toString(),l={...this.indexSet_};l[c]=e;const u={...this.indexes_};return u[c]=s,new rt(u,l)}addToIndexes(e,t){const n=(0,o.map)(this.indexes_,(n,r)=>{const i=(0,o.safeGet)(this.indexSet_,r);if((0,o.assert)(i,"Missing index implementation for "+r),n===nt){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Le.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),et(n,i.getCompare())}return nt}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Le(e.name,r))),i.insert(e,e.node)}});return new rt(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.map)(this.indexes_,n=>{if(n===nt)return n;{const r=t.get(e.name);return r?n.remove(new Le(e.name,r)):n}});return new rt(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let it;class st{static get EMPTY_NODE(){return it||(it=new st(new je(Ve),null,rt.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&$e(this.priorityNode_),this.children_.isEmpty()&&(0,o.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||it}updatePriority(e){return this.children_.isEmpty()?this:new st(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?it:t}}getChild(e){const t=_e(e);return null===t?this:this.getImmediateChild(t).getChild(ve(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.assert)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Le(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?it:this.priorityNode_;return new st(r,s,i)}}updateChild(e,t){const n=_e(e);if(null===n)return t;{(0,o.assert)(".priority"!==_e(e)||1===ye(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ve(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Qe,(s,o)=>{t[s]=o.val(e),n++,i&&st.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1}),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ze(this.getPriority().val())+":"),this.forEachChild(Qe,(t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":b(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Le(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Le(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Le(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Le.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Le.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ot?-1:0}withIndex(e){if(e===Ue||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new st(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ue||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Qe),n=t.getIterator(Qe);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Ue?null:this.indexMap_.get(e.toString())}}st.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const ot=new class extends st{constructor(){super(new je(Ve),st.EMPTY_NODE,rt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return st.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Le,{MIN:{value:new Le(x,st.EMPTY_NODE)},MAX:{value:new Le(N,ot)}}),Fe.__EMPTY_NODE=st.EMPTY_NODE,Je.__childrenNodeConstructor=st,We=ot,function(e){Ye=e}(ot);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const at=!0;function ct(e,t=null){if(null===e)return st.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.assert)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Je(e,ct(t))}if(e instanceof Array||!at){let n=st.EMPTY_NODE;return U(e,(t,r)=>{if((0,o.contains)(e,t)&&"."!==t.substring(0,1)){const e=ct(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(ct(t))}{const n=[];let r=!1;if(U(e,(e,t)=>{if("."!==e.substring(0,1)){const i=ct(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Le(e,i)))}}),0===n.length)return st.EMPTY_NODE;const i=et(n,He,e=>e.name,Ve);if(r){const e=et(n,Qe.getCompare());return new st(i,ct(t),new rt({".priority":e},{".priority":Qe}))}return new st(i,ct(t),rt.Default)}}!function(e){Ge=e}(ct);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt extends De{constructor(e){super(),this.indexPath_=e,(0,o.assert)(!Ce(e)&&".priority"!==_e(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?O(e.name,t.name):i}makePost(e,t){const n=ct(e),r=st.EMPTY_NODE.updateChild(this.indexPath_,n);return new Le(t,r)}maxPost(){const e=st.EMPTY_NODE.updateChild(this.indexPath_,ot);return new Le(N,e)}toString(){return we(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new class extends De{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?O(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Le.MIN}maxPost(){return Le.MAX}makePost(e,t){const n=ct(e);return new Le(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){return{type:"value",snapshotNode:e}}function dt(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ft(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function pt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){(0,o.assert)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(ft(t,a)):(0,o.assert)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(dt(t,n)):s.trackChildChange(pt(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Qe,(e,r)=>{t.hasChild(e)||n.trackChildChange(ft(e,r))}),t.isLeafNode()||t.forEachChild(Qe,(t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(pt(t,r,i))}else n.trackChildChange(dt(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?st.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.indexedFilter_=new gt(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mt.getStartPost_(e),this.endPost_=mt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,s){return this.matches(new Le(t,n))||(n=st.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=st.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(st.EMPTY_NODE);const i=this;return t.forEachChild(Qe,(e,t)=>{i.matches(new Le(e,t))||(r=r.updateImmediateChild(e,st.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new mt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new Le(t,n))||(n=st.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=st.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=st.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(st.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,st.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;(0,o.assert)(a.numChildren()===this.limit_,"");const c=new Le(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=o&&(o.name===t||a.hasChild(o.name));)o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c);if(u&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(pt(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(ft(t,e));const n=a.updateImmediateChild(t,st.EMPTY_NODE);return null!=o&&this.rangedFilter_.matches(o)?(null!=i&&i.trackChildChange(dt(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:u&&s(l,c)>=0?(null!=i&&(i.trackChildChange(ft(l.name,l.node)),i.trackChildChange(dt(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,st.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Qe}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:x}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:N}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Qe}copy(){const e=new yt;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vt(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Qe?n="$priority":e.index_===ut?n="$value":e.index_===Ue?n="$key":((0,o.assert)(e.index_ instanceof lt,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=(0,o.stringify)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,o.stringify)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,o.stringify)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,o.stringify)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,o.stringify)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function bt(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Qe&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends de{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=S("p:rest:"),this.listens_={}}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=wt.getListenId_(e,n),a={};this.listens_[s]=a;const c=vt(e._queryParams);this.restRequest_(i+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),(0,o.safeGet)(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}})}unlisten(e,t){const n=wt.getListenId_(e,t);delete this.listens_[n]}get(e){const t=vt(e._queryParams),n=e._path.toString(),r=new(0,o.Deferred);return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.querystring)(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,o.jsonEval)(a.responseText)}catch(e){P("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&P("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(){this.rootNode_=st.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return{value:null,children:new Map}}function Ct(e,t,n){if(Ce(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=_e(t);e.children.has(r)||e.children.set(r,It());Ct(e.children.get(r),t=ve(t),n)}}function Tt(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,(e,r)=>{Tt(r,new ge(t.toString()+"/"+e),n)})}class St{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&U(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new St(e);const n=1e4+2e4*Math.random();V(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;U(e,(e,r)=>{r>0&&(0,o.contains)(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),V(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt,Pt;function At(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Pt=Rt||(Rt={}))[Pt.OVERWRITE=0]="OVERWRITE",Pt[Pt.MERGE=1]="MERGE",Pt[Pt.ACK_USER_WRITE=2]="ACK_USER_WRITE",Pt[Pt.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class xt{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Rt.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Ce(this.path)){if(null!=this.affectedTree.value)return(0,o.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ge(e));return new xt(me(),t,this.revert)}}return(0,o.assert)(_e(this.path)===e,"operationForChild called for unrelated child."),new xt(ve(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){this.source=e,this.path=t,this.type=Rt.LISTEN_COMPLETE}operationForChild(e){return Ce(this.path)?new Nt(this.source,me()):new Nt(this.source,ve(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Rt.OVERWRITE}operationForChild(e){return Ce(this.path)?new Ot(this.source,me(),this.snap.getImmediateChild(e)):new Ot(this.source,ve(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Rt.MERGE}operationForChild(e){if(Ce(this.path)){const t=this.children.subtree(new ge(e));return t.isEmpty()?null:t.value?new Ot(this.source,me(),t.value):new Lt(this.source,me(),t)}return(0,o.assert)(_e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Lt(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ce(e))return this.isFullyInitialized()&&!this.filtered_;const t=_e(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ft(e,t,n,r,i,s){const a=r.filter(e=>e.type===n);a.sort((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.assertionError)("Should only compare child_ events.");const r=new Le(t.childName,t.snapshotNode),i=new Le(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n)),a.forEach(n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function Ut(e,t){return{eventCache:e,serverCache:t}}function Bt(e,t,n,r){return Ut(new Dt(t,n,r),e.serverCache)}function qt(e,t,n,r){return Ut(e.eventCache,new Dt(t,n,r))}function jt(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ht(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt;class Wt{static fromObject(e){let t=new Wt(null);return U(e,(e,n)=>{t=t.set(new ge(e),n)}),t}constructor(e,t=(()=>(Vt||(Vt=new je(L)),Vt))()){this.value=e,this.children=t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:me(),value:this.value};if(Ce(e))return null;{const n=_e(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ve(e),t);if(null!=i){return{path:Ie(new ge(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ce(e))return this;{const t=_e(e),n=this.children.get(t);return null!==n?n.subtree(ve(e)):new Wt(null)}}set(e,t){if(Ce(e))return new Wt(t,this.children);{const n=_e(e),r=(this.children.get(n)||new Wt(null)).set(ve(e),t),i=this.children.insert(n,r);return new Wt(this.value,i)}}remove(e){if(Ce(e))return this.children.isEmpty()?new Wt(null):new Wt(null,this.children);{const t=_e(e),n=this.children.get(t);if(n){const r=n.remove(ve(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Wt(null):new Wt(this.value,i)}return this}}get(e){if(Ce(e))return this.value;{const t=_e(e),n=this.children.get(t);return n?n.get(ve(e)):null}}setTree(e,t){if(Ce(e))return t;{const n=_e(e),r=(this.children.get(n)||new Wt(null)).setTree(ve(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Wt(this.value,i)}}fold(e){return this.fold_(me(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(Ie(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,me(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(Ce(e))return null;{const r=_e(e),i=this.children.get(r);return i?i.findOnPath_(ve(e),Ie(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,me(),t)}foreachOnPath_(e,t,n){if(Ce(e))return this;{this.value&&n(t,this.value);const r=_e(e),i=this.children.get(r);return i?i.foreachOnPath_(ve(e),Ie(t,r),n):new Wt(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(Ie(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.writeTree_=e}static empty(){return new zt(new Wt(null))}}function $t(e,t,n){if(Ce(t))return new zt(new Wt(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=Te(i,t);return s=s.updateChild(o,n),new zt(e.writeTree_.set(i,s))}{const r=new Wt(n),i=e.writeTree_.setTree(t,r);return new zt(i)}}}function Kt(e,t,n){let r=e;return U(n,(e,n)=>{r=$t(r,Ie(t,e),n)}),r}function Gt(e,t){if(Ce(t))return zt.empty();{const n=e.writeTree_.setTree(t,new Wt(null));return new zt(n)}}function Yt(e,t){return null!=Jt(e,t)}function Jt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Te(n.path,t)):null}function Qt(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Qe,(e,n)=>{t.push(new Le(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Le(e,n.value))}),t}function Xt(e,t){if(Ce(t))return e;{const n=Jt(e,t);return new zt(null!=n?new Wt(n):e.writeTree_.subtree(t))}}function Zt(e){return e.writeTree_.isEmpty()}function en(e,t){return tn(me(),e.writeTree_,t)}function tn(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((t,i)=>{".priority"===t?((0,o.assert)(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=tn(Ie(e,t),i,n)}),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Ie(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e,t){return mn(t,e)}function rn(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);(0,o.assert)(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;for(;i&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&sn(t,r.path)?i=!1:ke(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return function(e){e.visibleWrites=an(e.allWrites,on,me()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Gt(e.visibleWrites,r.path);else{U(r.children,t=>{e.visibleWrites=Gt(e.visibleWrites,Ie(r.path,t))})}return!0}return!1}function sn(e,t){if(e.snap)return ke(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&ke(Ie(e.path,n),t))return!0;return!1}function on(e){return e.visible}function an(e,t,n){let r=zt.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)ke(n,e)?(t=Te(n,e),r=$t(r,t,s.snap)):ke(e,n)&&(t=Te(e,n),r=$t(r,me(),s.snap.getChild(t)));else{if(!s.children)throw(0,o.assertionError)("WriteRecord should have .snap or .children");if(ke(n,e))t=Te(n,e),r=Kt(r,t,s.children);else if(ke(e,n))if(t=Te(e,n),Ce(t))r=Kt(r,me(),s.children);else{const e=(0,o.safeGet)(s.children,_e(t));if(e){const n=e.getChild(ve(t));r=$t(r,me(),n)}}}}}return r}function cn(e,t,n,r,i){if(r||i){const s=Xt(e.visibleWrites,t);if(!i&&Zt(s))return n;if(i||null!=n||Yt(s,me())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(ke(e.path,t)||ke(t,e.path))};return en(an(e.allWrites,s,t),n||st.EMPTY_NODE)}return null}{const r=Jt(e.visibleWrites,t);if(null!=r)return r;{const r=Xt(e.visibleWrites,t);if(Zt(r))return n;if(null!=n||Yt(r,me())){return en(r,n||st.EMPTY_NODE)}return null}}}function ln(e,t,n,r){return cn(e.writeTree,e.treePath,t,n,r)}function un(e,t){return function(e,t,n){let r=st.EMPTY_NODE;const i=Jt(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Qe,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){const i=Xt(e.visibleWrites,t);return n.forEachChild(Qe,(e,t)=>{const n=en(Xt(i,new ge(e)),t);r=r.updateImmediateChild(e,n)}),Qt(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}return Qt(Xt(e.visibleWrites,t)).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}(e.writeTree,e.treePath,t)}function hn(e,t,n,r){return function(e,t,n,r,i){(0,o.assert)(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ie(t,n);if(Yt(e.visibleWrites,s))return null;{const t=Xt(e.visibleWrites,s);return Zt(t)?i.getChild(n):en(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function dn(e,t){return function(e,t){return Jt(e.visibleWrites,t)}(e.writeTree,Ie(e.treePath,t))}function fn(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const c=Xt(e.visibleWrites,t),l=Jt(c,me());if(null!=l)a=l;else{if(null==n)return[];a=en(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let c=n.getNext();for(;c&&e.length<i;)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function pn(e,t,n){return function(e,t,n,r){const i=Ie(t,n),s=Jt(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return en(Xt(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function gn(e,t){return mn(Ie(e.treePath,t),e.writeTree)}function mn(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.assert)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,pt(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,ft(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,dt(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw(0,o.assertionError)("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,pt(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class vn{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Dt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pn(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ht(this.viewCache_),i=fn(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,t,n,r,i){const s=new _n;let a,c;if(n.type===Rt.OVERWRITE){const l=n;l.source.fromUser?a=In(e,t,l.path,l.snap,r,i,s):((0,o.assert)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!Ce(l.path),a=En(e,t,l.path,l.snap,r,i,c,s))}else if(n.type===Rt.MERGE){const l=n;l.source.fromUser?a=function(e,t,n,r,i,s,o){let a=t;return r.foreach((r,c)=>{const l=Ie(n,r);Cn(t,_e(l))&&(a=In(e,a,l,c,i,s,o))}),r.foreach((r,c)=>{const l=Ie(n,r);Cn(t,_e(l))||(a=In(e,a,l,c,i,s,o))}),a}(e,t,l.path,l.children,r,i,s):((0,o.assert)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=Sn(e,t,l.path,l.children,r,i,c,s))}else if(n.type===Rt.ACK_USER_WRITE){const c=n;a=c.revert?function(e,t,n,r,i,s){let a;if(null!=dn(r,n))return t;{const c=new vn(r,t,i),l=t.eventCache.getNode();let u;if(Ce(n)||".priority"===_e(n)){let n;if(t.serverCache.isFullyInitialized())n=ln(r,Ht(t));else{const e=t.serverCache.getNode();(0,o.assert)(e instanceof st,"serverChildren would be complete if leaf node"),n=un(r,e)}u=e.filter.updateFullNode(l,n,s)}else{const i=_e(n);let o=pn(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=l.getImmediateChild(i)),u=null!=o?e.filter.updateChild(l,i,o,ve(n),c,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,st.EMPTY_NODE,ve(n),c,s):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=ln(r,Ht(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=dn(r,me()),Bt(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,c.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=dn(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(Ce(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return En(e,t,n,c.getNode().getChild(n),i,s,a,o);if(Ce(n)){let r=new Wt(null);return c.getNode().forEachChild(Ue,(e,t)=>{r=r.set(new ge(e),t)}),Sn(e,t,n,r,i,s,a,o)}return t}{let l=new Wt(null);return r.foreach((e,t)=>{const r=Ie(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))}),Sn(e,t,n,l,i,s,a,o)}}(e,t,c.path,c.affectedTree,r,i,s)}else{if(n.type!==Rt.LISTEN_COMPLETE)throw(0,o.assertionError)("Unknown operation type: "+n.type);a=function(e,t,n,r,i){const s=t.serverCache,o=qt(t,s.getNode(),s.isFullyInitialized()||Ce(n),s.isFiltered());return wn(e,o,n,r,yn,i)}(e,t,n.path,r,s)}const l=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=jt(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ht(jt(t)))}}(t,a,l),{viewCache:a,changes:l}}function wn(e,t,n,r,i,s){const a=t.eventCache;if(null!=dn(r,n))return t;{let c,l;if(Ce(n))if((0,o.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ht(t),i=un(r,n instanceof st?n:st.EMPTY_NODE);c=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=ln(r,Ht(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=_e(n);if(".priority"===u){(0,o.assert)(1===ye(n),"Can't have a priority with additional path components");const i=a.getNode();l=t.serverCache.getNode();const s=hn(r,n,i,l);c=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=ve(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=hn(r,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(o,e):a.getNode().getImmediateChild(u)}else h=pn(r,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,o,i,s):a.getNode()}}return Bt(t,c,a.isFullyInitialized()||Ce(n),e.filter.filtersNodes())}}function En(e,t,n,r,i,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(Ce(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=_e(n);if(!c.isCompleteForPath(n)&&ye(n)>1)return t;const i=ve(n),s=c.getNode().getImmediateChild(e).updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),e,s,i,yn,null)}const h=qt(t,l,c.isFullyInitialized()||Ce(n),u.filtersNodes());return wn(e,h,n,i,new vn(i,h,s),a)}function In(e,t,n,r,i,s,o){const a=t.eventCache;let c,l;const u=new vn(i,t,s);if(Ce(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),c=Bt(t,l,!0,e.filter.filtersNodes());else{const i=_e(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=Bt(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=ve(n),l=a.getNode().getImmediateChild(i);let h;if(Ce(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===be(s)&&e.getChild(Ee(s)).isEmpty()?e:e.updateChild(s,r):st.EMPTY_NODE}if(l.equals(h))c=t;else{c=Bt(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Cn(e,t){return e.eventCache.isCompleteForChild(t)}function Tn(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function Sn(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=Ce(n)?r:new Wt(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){const c=Tn(0,t.serverCache.getNode().getImmediateChild(n),r);l=En(e,l,new ge(n),c,i,s,o,a)}}),c.children.inorderTraversal((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!c){const c=Tn(0,t.serverCache.getNode().getImmediateChild(n),r);l=En(e,l,new ge(n),c,i,s,o,a)}}),l}class kn{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new gt(n.getIndex()),i=(s=n).loadsAllData()?new gt(s.getIndex()):s.hasLimit()?new _t(s):new mt(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,c=r.updateFullNode(st.EMPTY_NODE,o.getNode(),null),l=i.updateFullNode(st.EMPTY_NODE,a.getNode(),null),u=new Dt(c,o.isFullyInitialized(),r.filtersNodes()),h=new Dt(l,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Ut(h,u),this.eventGenerator_=new Mt(this.query_)}get query(){return this.query_}}function Rn(e,t){const n=Ht(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ce(t)&&!n.getImmediateChild(_e(t)).isEmpty())?n.getChild(t):null}function Pn(e){return 0===e.eventRegistrations_.length}function An(e,t,n){const r=[];if(n){(0,o.assert)(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function xn(e,t,n,r){t.type===Rt.MERGE&&null!==t.source.queryId&&((0,o.assert)(Ht(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.assert)(jt(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=bn(e.processor_,i,t,n,r);var a,c;return a=e.processor_,c=s.viewCache,(0,o.assert)(c.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),(0,o.assert)(c.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),(0,o.assert)(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Nn(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Nn(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach(t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))}),Ft(e,i,"child_removed",t,r,n),Ft(e,i,"child_added",t,r,n),Ft(e,i,"child_moved",s,r,n),Ft(e,i,"child_changed",t,r,n),Ft(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On,Ln;class Dn{constructor(){this.views=new Map}}function Mn(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return(0,o.assert)(null!=s,"SyncTree gave us an op for an invalid query."),xn(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(xn(s,t,n,r));return i}}function Fn(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=ln(n,i?r:null),s=!1;e?s=!0:r instanceof st?(e=un(n,r),s=!1):(e=st.EMPTY_NODE,s=!1);const o=Ut(new Dt(e,s,!1),new Dt(r,i,!1));return new kn(t,o)}return o}function Un(e,t,n,r,i,s){const o=Fn(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Qe,(e,t)=>{r.push(dt(e,t))});return n.isFullyInitialized()&&r.push(ht(n.getNode())),Nn(e,r,n.getNode(),t)}(o,n)}function Bn(e,t,n,r){const i=t._queryIdentifier,s=[];let a=[];const c=Wn(e);if("default"===i)for(const[t,i]of e.views.entries())a=a.concat(An(i,n,r)),Pn(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||s.push(i.query));else{const t=e.views.get(i);t&&(a=a.concat(An(t,n,r)),Pn(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return c&&!Wn(e)&&s.push(new((0,o.assert)(On,"Reference.ts has not been loaded"),On)(t._repo,t._path)),{removed:s,events:a}}function qn(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function jn(e,t){let n=null;for(const r of e.views.values())n=n||Rn(r,t);return n}function Hn(e,t){if(t._queryParams.loadsAllData())return zn(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Vn(e,t){return null!=Hn(e,t)}function Wn(e){return null!=zn(e)}function zn(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $n=1;class Kn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Wt(null),this.pendingWriteTree_={visibleWrites:zt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gn(e,t,n,r,i){return function(e,t,n,r,i){(0,o.assert)(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=$t(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?nr(e,new Ot({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Yn(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(rn(e.pendingWriteTree_,t)){let t=new Wt(null);return null!=r.snap?t=t.set(me(),!0):U(r.children,e=>{t=t.set(new ge(e),!0)}),nr(e,new xt(r.path,t,n))}return[]}function Jn(e,t,n){return nr(e,new Ot({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Qn(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Vn(o,t))){const c=Bn(o,t,n,r);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!i){const n=-1!==l.findIndex(e=>e._queryParams.loadsAllData()),i=e.syncPointTree_.findOnPath(s,(e,t)=>Wn(t));if(n&&!i){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold((e,t,n)=>{if(t&&Wn(t)){return[zn(t)]}{let e=[];return t&&(e=qn(t)),U(n,(t,n)=>{e=e.concat(n)}),e}})}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=sr(e,r);e.listenProvider_.startListening(hr(i),or(e,i),s.hashFn,s.onComplete)}}}if(!i&&l.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(hr(t),n)}else l.forEach(t=>{const n=e.queryToTagMap.get(ar(t));e.listenProvider_.stopListening(hr(t),n)})}!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=ar(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return a}function Xn(e,t,n,r){const i=cr(e,r);if(null!=i){const r=lr(i),s=r.path,o=r.queryId,a=Te(s,t);return ur(e,s,new Ot(At(o),a,n))}return[]}function Zn(e,t,n,r=!1){const i=t._path;let s=null,a=!1;e.syncPointTree_.foreachOnPath(i,(e,t)=>{const n=Te(e,i);s=s||jn(t,n),a=a||Wn(t)});let c,l=e.syncPointTree_.get(i);if(l?(a=a||Wn(l),s=s||jn(l,me())):(l=new Dn,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=s)c=!0;else{c=!1,s=st.EMPTY_NODE;e.syncPointTree_.subtree(i).foreachChild((e,t)=>{const n=jn(t,me());n&&(s=s.updateImmediateChild(e,n))})}const u=Vn(l,t);if(!u&&!t._queryParams.loadsAllData()){const n=ar(t);(0,o.assert)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=$n++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let h=Un(l,t,n,nn(e.pendingWriteTree_,i),s,c);if(!u&&!a&&!r){const n=Hn(l,t);h=h.concat(function(e,t,n){const r=t._path,i=or(e,t),s=sr(e,n),a=e.listenProvider_.startListening(hr(t),i,s.hashFn,s.onComplete),c=e.syncPointTree_.subtree(r);if(i)(0,o.assert)(!Wn(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!Ce(e)&&t&&Wn(t))return[zn(t).query];{let e=[];return t&&(e=e.concat(qn(t).map(e=>e.query))),U(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(hr(r),or(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return h}function er(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(e,n)=>{const r=jn(n,Te(e,t));if(r)return r});return cn(r,t,i,n,!0)}function tr(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const i=Te(e,n);r=r||jn(t,i)});let i=e.syncPointTree_.get(n);i?r=r||jn(i,me()):(i=new Dn,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=null!=r,o=s?new Dt(r,!0,!1):null;return function(e){return jt(e.viewCache_)}(Fn(i,t,nn(e.pendingWriteTree_,t._path),s?o.getNode():st.EMPTY_NODE,s))}function nr(e,t){return rr(t,e.syncPointTree_,null,nn(e.pendingWriteTree_,me()))}function rr(e,t,n,r){if(Ce(e.path))return ir(e,t,n,r);{const i=t.get(me());null==n&&null!=i&&(n=jn(i,me()));let s=[];const o=_e(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=gn(r,o);s=s.concat(rr(a,c,e,t))}return i&&(s=s.concat(Mn(i,e,r,n))),s}}function ir(e,t,n,r){const i=t.get(me());null==n&&null!=i&&(n=jn(i,me()));let s=[];return t.children.inorderTraversal((t,i)=>{const o=n?n.getImmediateChild(t):null,a=gn(r,t),c=e.operationForChild(t);c&&(s=s.concat(ir(c,i,o,a)))}),i&&(s=s.concat(Mn(i,e,r,n))),s}function sr(e,t){const n=t.query,r=or(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||st.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=cr(e,n);if(r){const n=lr(r),i=n.path,s=n.queryId,o=Te(i,t);return ur(e,i,new Nt(At(s),o))}return[]}(e,n._path,r):function(e,t){return nr(e,new Nt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Qn(e,n,null,r)}}}}function or(e,t){const n=ar(t);return e.queryToTagMap.get(n)}function ar(e){return e._path.toString()+"$"+e._queryIdentifier}function cr(e,t){return e.tagToQueryMap.get(t)}function lr(e){const t=e.indexOf("$");return(0,o.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ge(e.substr(0,t))}}function ur(e,t,n){const r=e.syncPointTree_.get(t);(0,o.assert)(r,"Missing sync point for query tag that we're tracking");return Mn(r,n,nn(e.pendingWriteTree_,t),null)}function hr(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,o.assert)(Ln,"Reference.ts has not been loaded"),Ln)(e._repo,e._path):e}class dr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new dr(t)}node(){return this.node_}}class fr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ie(this.path_,e);return new fr(this.syncTree_,t)}node(){return er(this.syncTree_,this.path_)}}const pr=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},gr=function(e,t,n){return e&&"object"==typeof e?((0,o.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?mr(e[".sv"],t,n):"object"==typeof e[".sv"]?_r(e[".sv"],t):void(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},mr=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,o.assert)(!1,"Unexpected server value: "+e)},_r=function(e,t,n){e.hasOwnProperty("increment")||(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&(0,o.assert)(!1,"Unexpected increment value: "+r);const i=t.node();if((0,o.assert)(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},yr=function(e,t,n,r){return br(t,new fr(n,e),r)},vr=function(e,t,n){return br(e,new dr(t),n)};function br(e,t,n){const r=e.getPriority().val(),i=gr(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=gr(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new Je(s,ct(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new Je(i))),r.forEachChild(Qe,(e,r)=>{const i=br(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))}),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Er(e,t){let n=t instanceof ge?t:new ge(t),r=e,i=_e(n);for(;null!==i;){const e=(0,o.safeGet)(r.node.children,i)||{children:{},childCount:0};r=new wr(i,r,e),n=ve(n),i=_e(n)}return r}function Ir(e){return e.node.value}function Cr(e,t){e.node.value=t,Pr(e)}function Tr(e){return e.node.childCount>0}function Sr(e,t){U(e.node.children,(n,r)=>{t(new wr(n,e,r))})}function kr(e,t,n,r){n&&!r&&t(e),Sr(e,e=>{kr(e,t,!0,r)}),n&&r&&t(e)}function Rr(e){return new ge(null===e.parent?e.name:Rr(e.parent)+"/"+e.name)}function Pr(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Ir(e)&&!Tr(e)}(n),i=(0,o.contains)(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Pr(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Pr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Ar=/[\[\].#$\/\u0000-\u001F\u007F]/,xr=/[\[\].#$\u0000-\u001F\u007F]/,Nr=10485760,Or=function(e){return"string"==typeof e&&0!==e.length&&!Ar.test(e)},Lr=function(e){return"string"==typeof e&&0!==e.length&&!xr.test(e)},Dr=function(e,t,n,r){r&&void 0===t||Mr((0,o.errorPrefix)(e,"value"),t,n)},Mr=function(e,t,n){const r=n instanceof ge?new Re(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ae(r));if("function"==typeof t)throw new Error(e+"contains a function "+Ae(r)+" with contents = "+t.toString());if(A(t))throw new Error(e+"contains "+t.toString()+" "+Ae(r));if("string"==typeof t&&t.length>3495253.3333333335&&(0,o.stringLength)(t)>Nr)throw new Error(e+"contains a string greater than "+Nr+" utf8 bytes "+Ae(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(U(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Or(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ae(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,c;c=t,(a=r).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(c),a.byteLength_+=(0,o.stringLength)(c),Pe(a),Mr(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=(0,o.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)}),n&&i)throw new Error(e+' contains ".value" child '+Ae(r)+" in addition to actual children.")}},Fr=function(e,t,n,r){if(!(r&&void 0===n||Lr(n)))throw new Error((0,o.errorPrefix)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ur=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Fr(e,t,n,r)},Br=function(e,t){if(".info"===_e(t))throw new Error(e+" failed = Can't modify data under /.info/")},qr=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Or(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Lr(e)}(n))throw new Error((0,o.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hr(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||Se(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Vr(e,t,n){Hr(e,n),Wr(e,e=>ke(e,t)||ke(t,e))}function Wr(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(zr(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function zr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();E&&T("event: "+n.toString()),H(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="repo_interrupt",Kr=25;class Gr{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=It(),this.transactionQueueTree_=new wr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Yr(e,t,n){if(e.stats_=re(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new wt(e.repoInfo_,(t,n,r,i)=>{Xr(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Zr(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.stringify)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Oe(e.repoInfo_,t,(t,n,r,i)=>{Xr(e,t,n,r,i)},t=>{Zr(e,t)},t=>{!function(e,t){U(t,(t,n)=>{ei(e,t,n)})}(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){const n=e.toString();return ne[n]||(ne[n]=t()),ne[n]}(e.repoInfo_,()=>new kt(e.stats_,e.server_)),e.infoData_=new Et,e.infoSyncTree_=new Kn({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Jn(e.infoSyncTree_,t._path,o),setTimeout(()=>{i("ok")},0)),s},stopListening:()=>{}}),ei(e,"connected",!1),e.serverSyncTree_=new Kn({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{const s=i(n,r);Vr(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Jr(e){const t=e.infoData_.getNode(new ge(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Qr(e){return pr({timestamp:Jr(e)})}function Xr(e,t,n,r,i){e.dataUpdateCount++;const s=new ge(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=(0,o.map)(n,e=>ct(e));a=function(e,t,n,r){const i=cr(e,r);if(i){const r=lr(i),s=r.path,o=r.queryId,a=Te(s,t),c=Wt.fromObject(n);return ur(e,s,new Lt(At(o),a,c))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=ct(n);a=Xn(e.serverSyncTree_,s,t,i)}else if(r){const t=(0,o.map)(n,e=>ct(e));a=function(e,t,n){const r=Wt.fromObject(n);return nr(e,new Lt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=ct(n);a=Jn(e.serverSyncTree_,s,t)}let c=s;a.length>0&&(c=ci(e,s)),Vr(e.eventQueue_,c,a)}function Zr(e,t){ei(e,"connected",t),!1===t&&function(e){ii(e,"onDisconnectEvents");const t=Qr(e),n=It();Tt(e.onDisconnect_,me(),(r,i)=>{const s=yr(r,i,e.serverSyncTree_,t);Ct(n,r,s)});let r=[];Tt(n,me(),(t,n)=>{r=r.concat(Jn(e.serverSyncTree_,t,n));const i=fi(e,t);ci(e,i)}),e.onDisconnect_=It(),Vr(e.eventQueue_,me(),r)}(e)}function ei(e,t,n){const r=new ge("/.info/"+t),i=ct(n);e.infoData_.updateSnapshot(r,i);const s=Jn(e.infoSyncTree_,r,i);Vr(e.eventQueue_,r,s)}function ti(e){return e.nextWriteId_++}function ni(e,t,n,r,i){ii(e,"set",{path:t.toString(),value:n,priority:r});const s=Qr(e),o=ct(n,r),a=er(e.serverSyncTree_,t),c=vr(o,a,s),l=ti(e),u=Gn(e.serverSyncTree_,t,c,l,!0);Hr(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),(n,r)=>{const s="ok"===n;s||P("set at "+t+" failed: "+n);const o=Yn(e.serverSyncTree_,l,!s);Vr(e.eventQueue_,t,o),si(e,i,n,r)});const h=fi(e,t);ci(e,h),Vr(e.eventQueue_,h,[])}function ri(e){e.persistentConnection_&&e.persistentConnection_.interrupt($r)}function ii(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),T(n,...t)}function si(e,t,n,r){t&&H(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}})}function oi(e,t,n){return er(e.serverSyncTree_,t,n)||st.EMPTY_NODE}function ai(e,t=e.transactionQueueTree_){if(t||di(e,t),Ir(t)){const n=ui(e,t);(0,o.assert)(n.length>0,"Sending zero length transaction queue");n.every(e=>0===e.status)&&function(e,t,n){const r=n.map(e=>e.currentWriteId),i=oi(e,t,r);let s=i;const a=i.hash();for(let e=0;e<n.length;e++){const r=n[e];(0,o.assert)(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=Te(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const c=s.val(!0),l=t;e.server_.put(l.toString(),c,r=>{ii(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Yn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();di(e,Er(e.transactionQueueTree_,t)),ai(e,e.transactionQueueTree_),Vr(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)H(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{P("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}ci(e,t)}},a)}(e,Rr(t),n)}else Tr(t)&&Sr(t,t=>{ai(e,t)})}function ci(e,t){const n=li(e,t),r=Rr(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter(e=>0===e.status),a=s.map(e=>e.currentWriteId);for(let s=0;s<t.length;s++){const c=t[s],l=Te(n,c.path);let u,h=!1;if((0,o.assert)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)h=!0,u=c.abortReason,i=i.concat(Yn(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=Kr)h=!0,u="maxretry",i=i.concat(Yn(e.serverSyncTree_,c.currentWriteId,!0));else{const n=oi(e,c.path,a);c.currentInputSnapshot=n;const r=t[s].update(n.val());if(void 0!==r){Mr("transaction failed: Data returned ",r,c.path);let t=ct(r);"object"==typeof r&&null!=r&&(0,o.contains)(r,".priority")||(t=t.updatePriority(n.getPriority()));const s=c.currentWriteId,l=Qr(e),u=vr(t,n,l);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=u,c.currentWriteId=ti(e),a.splice(a.indexOf(s),1),i=i.concat(Gn(e.serverSyncTree_,c.path,u,c.currentWriteId,c.applyLocally)),i=i.concat(Yn(e.serverSyncTree_,s,!0))}else h=!0,u="nodata",i=i.concat(Yn(e.serverSyncTree_,c.currentWriteId,!0))}Vr(e.eventQueue_,n,i),i=[],h&&(t[s].status=2,function(e){setTimeout(e,Math.floor(0))}(t[s].unwatcher),t[s].onComplete&&("nodata"===u?r.push(()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot)):r.push(()=>t[s].onComplete(new Error(u),!1,null))))}di(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)H(r[e]);ai(e,e.transactionQueueTree_)}(e,ui(e,n),r),r}function li(e,t){let n,r=e.transactionQueueTree_;for(n=_e(t);null!==n&&void 0===Ir(r);)r=Er(r,n),n=_e(t=ve(t));return r}function ui(e,t){const n=[];return hi(e,t,n),n.sort((e,t)=>e.order-t.order),n}function hi(e,t,n){const r=Ir(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);Sr(t,t=>{hi(e,t,n)})}function di(e,t){const n=Ir(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Cr(t,n.length>0?n:void 0)}Sr(t,t=>{di(e,t)})}function fi(e,t){const n=Rr(li(e,t)),r=Er(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,t=>{pi(e,t)}),pi(e,r),kr(r,t=>{pi(e,t)}),n}function pi(e,t){const n=Ir(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.assert)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,o.assert)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Yn(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Cr(t,void 0):n.length=s+1,Vr(e.eventQueue_,Rr(t),i);for(let e=0;e<r.length;e++)H(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=function(e,t){const n=mi(e),r=n.namespace;"firebase.com"===n.domain&&R(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||R("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&P("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new X(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ge(n.pathString)}},mi=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):P(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}},_i="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yi{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.stringify)(this.snapshot.exportVal())}}class vi{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.assert)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return Ce(this._path)?null:be(this._path)}get ref(){return new Ei(this._repo,this._path)}get _queryIdentifier(){const e=bt(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return bt(this._queryParams)}isEqual(e){if(!((e=(0,o.getModularInstance)(e))instanceof wi))return!1;const t=this._repo===e._repo,n=Se(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Ei extends wi{constructor(e,t){super(e,t,new yt,!1)}get parent(){const e=Ee(this._path);return null===e?null:new Ei(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Ii{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ge(e),n=Ti(this.ref,e);return new Ii(this._node.getChild(t),n,Qe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,(t,n)=>e(new Ii(n,Ti(this.ref,t),Qe)))}hasChild(e){const t=new ge(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ci(e,t){return(e=(0,o.getModularInstance)(e))._checkNotDeleted("ref"),void 0!==t?Ti(e._root,t):e._root}function Ti(e,t){return null===_e((e=(0,o.getModularInstance)(e))._path)?Ur("child","path",t,!1):Fr("child","path",t,!1),new Ei(e._repo,Ie(e._path,t))}function Si(e,t){e=(0,o.getModularInstance)(e),Br("set",e._path),Dr("set",t,e._path,!1);const n=new(0,o.Deferred);return ni(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function ki(e){e=(0,o.getModularInstance)(e);const t=new bi(()=>{}),n=new Ri(t);return function(e,t,n){const r=tr(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then(r=>{const i=ct(r).withIndex(t._queryParams.getIndex());let s;if(Zn(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=Jn(e.serverSyncTree_,t._path,i);else{const n=or(e.serverSyncTree_,t);s=Xn(e.serverSyncTree_,t._path,i,n)}return Vr(e.eventQueue_,t._path,s),Qn(e.serverSyncTree_,t,n,null,!0),i},n=>(ii(e,"get for query "+(0,o.stringify)(t)+" failed: "+n),Promise.reject(new Error(n))))}(e._repo,e,n).then(t=>new Ii(t,new Ei(e._repo,e._path),e._queryParams.getIndex()))}class Ri{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new yi("value",this,new Ii(e.snapshotNode,new Ei(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new vi(this,e,t):null}matches(e){return e instanceof Ri&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}!function(e){(0,o.assert)(!On,"__referenceConstructor has already been defined"),On=e}(Ei),function(e){(0,o.assert)(!Ln,"__referenceConstructor has already been defined"),Ln=e}(Ei);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pi={};let Ai=!1;function xi(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||R("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),T("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=gi(s,i),u=l.repoInfo;void 0!==c&&c.env&&(a=c.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${u.namespace}`,l=gi(s,i),u=l.repoInfo):o=!l.repoInfo.secure;const h=i&&o?new $($.OWNER):new z(e.name,e.options,t);qr("Invalid Firebase Database URL",l),Ce(l.path)||R("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,r){let i=Pi[t.name];i||(i={},Pi[t.name]=i);let s=i[e.toURLString()];s&&R("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Gr(e,Ai,n,r),i[e.toURLString()]=s,s}(u,e,h,new W(e,n));return new Ni(d,e)}class Ni{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Yr(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ei(this._repo,me())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Pi[t];n&&n[e.key]===e||R(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ri(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&R("Cannot call "+e+" on a deleted database.")}}function Oi(e=(0,r.getApp)(),t){const n=(0,r._getProvider)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,o.getDefaultEmulatorHostnameAndPort)("database");e&&function(e,t,n,r={}){e=(0,o.getModularInstance)(e),e._checkNotDeleted("useEmulator");const i=`${t}:${n}`,s=e._repoInternal;if(e._instanceStarted){if(i===e._repoInternal.repoInfo_.host&&(0,o.deepEqual)(r,s.repoInfo_.emulatorOptions))return;R("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let a;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&R('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new $($.OWNER);else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:(0,o.createMockUserToken)(r.mockUserToken,e.app.options.projectId);a=new $(t)}(0,o.isCloudWorkstation)(t)&&((0,o.pingServer)(t),(0,o.updateEmulatorBanner)("Database",!0));!function(e,t,n,r){const i=t.lastIndexOf(":"),s=t.substring(0,i),a=(0,o.isCloudWorkstation)(s);e.repoInfo_=new X(t,a,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(e.authTokenProvider_=r)}(s,i,r,a)}(n,...e)}return n}Oe.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Oe.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Li;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */d(r.SDK_VERSION),(0,r._registerComponent)(new(0,i.Component)("database",(e,{instanceIdentifier:t})=>xi(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(l,u,Li),(0,r.registerVersion)(l,u,"esm2020")}),s.register("bOFJ0",function(t,n){e(t.exports,"localstorage",function(){return r});const r={loadData(e){const t=localStorage.getItem(e);return JSON.parse(t)},saveData(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)},setFilm(e,t){const n=this.getMovies(e);n.push(t),this.saveData(e,n)},removeFilm(e,t){const n=this.getMovies(e),r=n.map(e=>e.id);r.includes(t.id)&&(n.splice(r.indexOf(t.id),1),this.saveData(e,n))},getMovies(e){const t=this.loadData(e);return t||(this.saveData(e,[]),[])}}}),s.register("dJVYd",function(t,n){e(t.exports,"startPaginationObserver",function(){return c}),e(t.exports,"stopPaginationObserver",function(){return l});var r=s("edpgF"),i=(r=s("edpgF"),s("gjiCh"));const o=document.querySelector(".scroll-guard"),a=new IntersectionObserver(function(e){e.forEach(e=>{e.isIntersecting&&async function(){const e=document.querySelector(".library__item-btn--active");if(!e||!r.libraryGallery)return;const t=r.libraryGallery.querySelectorAll("li"),n=JSON.parse(localStorage.getItem(e.dataset.action));n&&t.length<n.length&&((0,i.startLoader)(),await(0,r.renderMovieCardsLibrary)(n.slice(t.length,t.length+9)),setTimeout(()=>{(0,i.stopLoader)()},500),function(e){if(!e||!e.firstElementChild)return;const{height:t}=e.firstElementChild.getBoundingClientRect();window.scrollBy({top:1*t,behavior:"smooth"})}(r.libraryGallery));null!==n&&t.length!==n.length||l()}()})},{rootMargin:"250px",threshold:1});function c(){o&&a.observe(o)}function l(){o&&a.unobserve(o)}}),s.register("gjiCh",function(t,n){e(t.exports,"startLoader",function(){return i}),e(t.exports,"stopLoader",function(){return s});const r=document.querySelector(".backdrop-loader");function i(){r.classList.remove("backdrop-loader--is-hidden")}function s(){r.classList.add("backdrop-loader--is-hidden")}}),s.register("9IiBV",function(t,n){e(t.exports,"onAddToWatchedBtnClick",function(){return _}),s("eyjy7");var r=s("6aFcR"),i=s("868P8"),o=s("bOFJ0"),a=s("5I0Ww"),c=s("dJVYd"),l=s("edpgF"),u=s("gjiCh");const h=document.querySelector(".to-watched"),d=document.querySelector(".library-text"),f=document.querySelector('button[data-action="watched"]'),p=document.querySelector('button[data-action="queue"]');let g=localStorage.getItem("watched"),m=JSON.parse(g);function _(){null===localStorage.getItem("watched")&&localStorage.setItem("watched","[]"),(0,l.inLocalStorage)(a.movieObject,"watched")?(h.textContent="Add to watched",o.localstorage.removeFilm("watched",a.movieObject),h.classList.remove("is-active"),(0,l.checkCurrentPageAndRewrite)(f,-1)):(h.textContent="Remove from watched",o.localstorage.setFilm("watched",a.movieObject),h.classList.add("is-active"),(0,l.checkCurrentPageAndRewrite)(f,1));const e=(0,r.p)().currentUser;if(null!==e){const t=localStorage.getItem("queue")||[],n=localStorage.getItem("watched")||[];(0,i.createNote)(e,t,n)}}f&&f.addEventListener("click",async function(){(0,c.stopPaginationObserver)(),p&&p.classList.remove("library__item-btn--active");f&&f.classList.add("library__item-btn--active");if(g=localStorage.getItem("watched"),m=JSON.parse(g),(0,l.clearGallery)(),null===g)return void(0,l.getPlugVisible)();if(0===m.length)return void(0,l.getPlugVisible)();d&&!d.classList.contains("visually-hidden")&&(0,l.getPlugHidden)();(0,u.startLoader)(),await(0,l.renderMovieCardsLibrary)(m.slice(0,9)),(0,c.startPaginationObserver)(),setTimeout(()=>{(0,u.stopLoader)()},300)})}),s.register("74Aiq",function(t,n){e(t.exports,"scrollFunction",function(){return i}),e(t.exports,"topFunction",function(){return s});const r=document.getElementById("myBtn");function i(){r&&(document.body.scrollTop>20||document.documentElement.scrollTop>20?(r.style.display="block",r.addEventListener("click",s)):r.style.display="none")}function s(){window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=function(){i()}}),s.register("7tzR7",function(t,n){e(t.exports,"slideGalleryRef",function(){return u}),e(t.exports,"showSlider",function(){return p}),e(t.exports,"startSliderAutoplay",function(){return _}),e(t.exports,"hideSlider",function(){return g}),e(t.exports,"stopSliderAutoplay",function(){return m});var r=s("b2dIo"),i=s("gWoIc"),o=s("edYM8"),a=s("5I0Ww");const c=`${o.BASE_URL}/movie/upcoming?api_key=${o.API_KEY}&region=US&language=en-US&page=1`,l="https://image.tmdb.org/t/p/w200",u=document.querySelector(".glide__slides-upcoming"),h=document.querySelector(".slider"),d=document.querySelector(".upcoming-title");u&&async function(){try{const e=await(0,i.getMovies)(c);e&&e.results?(!function(e){const t=e.map(e=>function(e){const{title:t,poster_path:n,id:r,release_date:i}=e;return`<li class="glide__slide">\n              <img class="glide__slide-item"data-id="${r}" src="${null===n?"https://dummyimage.com/100x100/000/fff.jpg&text=no+poster":`${l}${n}`}" alt="${t} movie poster" loading="lazy"/>\n              <p class="glide__slide-title">${t}</p>\n              <p class="glide__slide-text">${i}</p>\n          </li>`}(e)).join("");u&&(u.innerHTML=t);u&&u.addEventListener("click",a.clickOnMovieHandler)}(e.results),f.mount()):console.warn("No upcoming movie data received from API")}catch(e){console.error("Error loading upcoming movies for slider:",e)}}();const f=new(0,r.default)(".glide",{type:"carousel",perView:8,draggable:!0,autoplay:2500,breakpoints:{1280:{perView:6},767:{perView:3}}});function p(){h.classList.remove("visually-hidden"),d.classList.remove("visually-hidden"),_()}function g(){h.classList.add("visually-hidden"),d.classList.add("visually-hidden"),m()}function m(){f.pause()}function _(){f.play()}}),s.register("b2dIo",function(t,n){
/*!
 * Glide.js v3.7.1
 * (c) 2013-2024 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */
function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return d(this,n)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},p.apply(this,arguments)}e(t.exports,"default",function(){return X});var g={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function m(e){console.error("[Glide warn]: ".concat(e))}function _(e){return parseInt(e)}function y(e){return"string"==typeof e}function v(e){var t=s(e);return"function"===t||"object"===t&&!!e}function b(e){return"function"==typeof e}function w(e){return void 0===e}function E(e){return e.constructor===Array}function I(e,t,n){Object.defineProperty(e,t,n)}function C(e,t){var n=Object.assign({},e,t);if(t.hasOwnProperty("classes")){n.classes=Object.assign({},e.classes,t.classes);["direction","type","slide","arrow","nav"].forEach(function(r){t.classes.hasOwnProperty(r)&&(n.classes[r]=i(i({},e.classes[r]),t.classes[r]))})}return t.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},e.breakpoints,t.breakpoints)),n}var T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e),this.events=t,this.hop=t.hasOwnProperty}return c(e,[{key:"on",value:function(e,t){if(!E(e)){this.hop.call(this.events,e)||(this.events[e]=[]);var n=this.events[e].push(t)-1;return{remove:function(){delete this.events[e][n]}}}for(var r=0;r<e.length;r++)this.on(e[r],t)}},{key:"emit",value:function(e,t){if(E(e))for(var n=0;n<e.length;n++)this.emit(e[n],t);else this.hop.call(this.events,e)&&this.events[e].forEach(function(e){e(t||{})})}}]),e}(),S=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e),this._c={},this._t=[],this._e=new T,this.disabled=!1,this.selector=t,this.settings=C(g,n),this.index=this.settings.startAt}return c(e,[{key:"mount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),v(e)?this._c=function(e,t,n){var r={};for(var i in t)b(t[i])?r[i]=t[i](e,r,n):m("Extension must be a function");for(var s in r)b(r[s].mount)&&r[s].mount();return r}(this,e,this._e):m("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return E(e)?this._t=e:m("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=C(this.settings,e),e.hasOwnProperty("startAt")&&(this.index=e.startAt),this._e.emit("update"),this}},{key:"go",value:function(e){return this._c.Run.make(e),this}},{key:"move",value:function(e){return this._c.Transition.disable(),this._c.Move.make(e),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e&&(this.settings.autoplay=e),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(e,t){return this._e.on(e,t),this}},{key:"isType",value:function(e){return this.settings.type===e}},{key:"settings",get:function(){return this._o},set:function(e){v(e)?this._o=e:m("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(e){this._i=_(e)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(e){this._d=!!e}}]),e}();function k(){return(new Date).getTime()}function R(e,t){var n,r,i,s,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=0,c=function(){a=!1===o.leading?0:k(),n=null,s=e.apply(r,i),n||(r=i=null)},l=function(){var l=k();a||!1!==o.leading||(a=l);var u=t-(l-a);return r=this,i=arguments,u<=0||u>t?(n&&(clearTimeout(n),n=null),a=l,s=e.apply(r,i),n||(r=i=null)):n||!1===o.trailing||(n=setTimeout(c,u)),s};return l.cancel=function(){clearTimeout(n),a=0,n=r=i=null},l}var P={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function A(e){if(e&&e.parentNode){for(var t=e.parentNode.firstChild,n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}return[]}function x(e){return Array.prototype.slice.call(e)}var N=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e),this.listeners=t}return c(e,[{key:"on",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];y(e)&&(e=[e]);for(var i=0;i<e.length;i++)this.listeners[e[i]]=n,t.addEventListener(e[i],this.listeners[e[i]],r)}},{key:"off",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];y(e)&&(e=[e]);for(var r=0;r<e.length;r++)t.removeEventListener(e[r],this.listeners[e[r]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),e}();var O=["ltr","rtl"],L={">":"<","<":">","=":"="};function D(e,t){return{modify:function(e){return t.Direction.is("rtl")?-e:e}}}function M(e,t){return{modify:function(e){var n=Math.floor(e/t.Sizes.slideWidth);return e+t.Gaps.value*n}}}function F(e,t){return{modify:function(e){return e+t.Clones.grow/2}}}function U(e,t){return{modify:function(n){if(e.settings.focusAt>=0){var r=t.Peek.value;return v(r)?n-r.before:n-r}return n}}}function B(e,t){return{modify:function(n){var r=t.Gaps.value,i=t.Sizes.width,s=e.settings.focusAt,o=t.Sizes.slideWidth;return"center"===s?n-(i/2-o/2):n-o*s-r*s}}}var q=!1;try{var j=Object.defineProperty({},"passive",{get:function(){q=!0}});window.addEventListener("testPassive",null,j),window.removeEventListener("testPassive",null,j)}catch(e){}var H=q,V=["touchstart","mousedown"],W=["touchmove","mousemove"],z=["touchend","touchcancel","mouseup","mouseleave"],$=["mousedown","mousemove","mouseup","mouseleave"];var K='[data-glide-el^="controls"]',G="".concat(K,' [data-glide-dir*="<"]'),Y="".concat(K,' [data-glide-dir*=">"]');function J(e){return v(e)?(t=e,Object.keys(t).sort().reduce(function(e,n){return e[n]=t[n],e[n],e},{})):(m("Breakpoints option must be an object"),{});var t}var Q={Html:function(e,t,n){var r={mount:function(){this.root=e.selector,this.track=this.root.querySelector('[data-glide-el="track"]'),this.collectSlides()},collectSlides:function(){this.slides=x(this.wrapper.children).filter(function(t){return!t.classList.contains(e.settings.classes.slide.clone)})}};return I(r,"root",{get:function(){return r._r},set:function(e){y(e)&&(e=document.querySelector(e)),null!==e?r._r=e:m("Root element must be a existing Html node")}}),I(r,"track",{get:function(){return r._t},set:function(e){r._t=e}}),I(r,"wrapper",{get:function(){return r.track.children[0]}}),n.on("update",function(){r.collectSlides()}),r},Translate:function(e,t,n){var r={set:function(n){var r=function(e,t,n){var r=[M,F,U,B].concat(e._t,[D]);return{mutate:function(i){for(var s=0;s<r.length;s++){var o=r[s];b(o)&&b(o().modify)?i=o(e,t,n).modify(i):m("Transformer should be a function that returns an object with `modify()` method")}return i}}}(e,t).mutate(n),i="translate3d(".concat(-1*r,"px, 0px, 0px)");t.Html.wrapper.style.mozTransform=i,t.Html.wrapper.style.webkitTransform=i,t.Html.wrapper.style.transform=i},remove:function(){t.Html.wrapper.style.transform=""},getStartIndex:function(){var n=t.Sizes.length,r=e.index,i=e.settings.perView;return t.Run.isOffset(">")||t.Run.isOffset("|>")?n+(r-i):(r+i)%n},getTravelDistance:function(){var n=t.Sizes.slideWidth*e.settings.perView;return t.Run.isOffset(">")||t.Run.isOffset("|>")?-1*n:n}};return n.on("move",function(i){if(!e.isType("carousel")||!t.Run.isOffset())return r.set(i.movement);t.Transition.after(function(){n.emit("translate.jump"),r.set(t.Sizes.slideWidth*e.index)});var s=t.Sizes.slideWidth*t.Translate.getStartIndex();return r.set(s-t.Translate.getTravelDistance())}),n.on("destroy",function(){r.remove()}),r},Transition:function(e,t,n){var r=!1,i={compose:function(t){var n=e.settings;return r?"".concat(t," 0ms ").concat(n.animationTimingFunc):"".concat(t," ").concat(this.duration,"ms ").concat(n.animationTimingFunc)},set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";t.Html.wrapper.style.transition=this.compose(e)},remove:function(){t.Html.wrapper.style.transition=""},after:function(e){setTimeout(function(){e()},this.duration)},enable:function(){r=!1,this.set()},disable:function(){r=!0,this.set()}};return I(i,"duration",{get:function(){var n=e.settings;return e.isType("slider")&&t.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",function(){i.set()}),n.on(["build.before","resize","translate.jump"],function(){i.disable()}),n.on("run",function(){i.enable()}),n.on("destroy",function(){i.remove()}),i},Direction:function(e,t,n){var r={mount:function(){this.value=e.settings.direction},resolve:function(e){var t=e.slice(0,1);return this.is("rtl")?e.split(t).join(L[t]):e},is:function(e){return this.value===e},addClass:function(){t.Html.root.classList.add(e.settings.classes.direction[this.value])},removeClass:function(){t.Html.root.classList.remove(e.settings.classes.direction[this.value])}};return I(r,"value",{get:function(){return r._v},set:function(e){O.indexOf(e)>-1?r._v=e:m("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],function(){r.removeClass()}),n.on("update",function(){r.mount()}),n.on(["build.before","update"],function(){r.addClass()}),r},Peek:function(e,t,n){var r={mount:function(){this.value=e.settings.peek}};return I(r,"value",{get:function(){return r._v},set:function(e){v(e)?(e.before=_(e.before),e.after=_(e.after)):e=_(e),r._v=e}}),I(r,"reductor",{get:function(){var t=r.value,n=e.settings.perView;return v(t)?t.before/n+t.after/n:2*t/n}}),n.on(["resize","update"],function(){r.mount()}),r},Sizes:function(e,t,n){var r={setupSlides:function(){for(var e="".concat(this.slideWidth,"px"),n=t.Html.slides,r=0;r<n.length;r++)n[r].style.width=e},setupWrapper:function(){t.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var e=t.Html.slides,n=0;n<e.length;n++)e[n].style.width="";t.Html.wrapper.style.width=""}};return I(r,"length",{get:function(){return t.Html.slides.length}}),I(r,"width",{get:function(){return t.Html.track.offsetWidth}}),I(r,"wrapperSize",{get:function(){return r.slideWidth*r.length+t.Gaps.grow+t.Clones.grow}}),I(r,"slideWidth",{get:function(){return r.width/e.settings.perView-t.Peek.reductor-t.Gaps.reductor}}),n.on(["build.before","resize","update"],function(){r.setupSlides(),r.setupWrapper()}),n.on("destroy",function(){r.remove()}),r},Gaps:function(e,t,n){var r={apply:function(e){for(var n=0,r=e.length;n<r;n++){var i=e[n].style,s=t.Direction.value;i[P[s][0]]=0!==n?"".concat(this.value/2,"px"):"",n!==e.length-1?i[P[s][1]]="".concat(this.value/2,"px"):i[P[s][1]]=""}},remove:function(e){for(var t=0,n=e.length;t<n;t++){var r=e[t].style;r.marginLeft="",r.marginRight=""}}};return I(r,"value",{get:function(){return _(e.settings.gap)}}),I(r,"grow",{get:function(){return r.value*t.Sizes.length}}),I(r,"reductor",{get:function(){var t=e.settings.perView;return r.value*(t-1)/t}}),n.on(["build.after","update"],R(function(){r.apply(t.Html.wrapper.children)},30)),n.on("destroy",function(){r.remove(t.Html.wrapper.children)}),r},Move:function(e,t,n){var r={mount:function(){this._o=0},make:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=r,n.emit("move",{movement:this.value}),t.Transition.after(function(){n.emit("move.after",{movement:e.value})})}};return I(r,"offset",{get:function(){return r._o},set:function(e){r._o=w(e)?0:_(e)}}),I(r,"translate",{get:function(){return t.Sizes.slideWidth*e.index}}),I(r,"value",{get:function(){var e=this.offset,n=this.translate;return t.Direction.is("rtl")?n+e:n-e}}),n.on(["build.before","run"],function(){r.make()}),r},Clones:function(e,t,n){var r={mount:function(){this.items=[],e.isType("carousel")&&(this.items=this.collect())},collect:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=t.Html.slides,i=e.settings,s=i.perView,o=i.classes,a=i.cloningRatio;if(r.length>0)for(var c=s+ +!!e.settings.peek+Math.round(s/2),l=r.slice(0,c).reverse(),u=r.slice(-1*c),h=0;h<Math.max(a,Math.floor(s/r.length));h++){for(var d=0;d<l.length;d++){var f=l[d].cloneNode(!0);f.classList.add(o.slide.clone),n.push(f)}for(var p=0;p<u.length;p++){var g=u[p].cloneNode(!0);g.classList.add(o.slide.clone),n.unshift(g)}}return n},append:function(){for(var e=this.items,n=t.Html,r=n.wrapper,i=n.slides,s=Math.floor(e.length/2),o=e.slice(0,s).reverse(),a=e.slice(-1*s).reverse(),c="".concat(t.Sizes.slideWidth,"px"),l=0;l<a.length;l++)r.appendChild(a[l]);for(var u=0;u<o.length;u++)r.insertBefore(o[u],i[0]);for(var h=0;h<e.length;h++)e[h].style.width=c},remove:function(){for(var e=this.items,n=0;n<e.length;n++)t.Html.wrapper.removeChild(e[n])}};return I(r,"grow",{get:function(){return(t.Sizes.slideWidth+t.Gaps.value)*r.items.length}}),n.on("update",function(){r.remove(),r.mount(),r.append()}),n.on("build.before",function(){e.isType("carousel")&&r.append()}),n.on("destroy",function(){r.remove()}),r},Resize:function(e,t,n){var r=new N,i={mount:function(){this.bind()},bind:function(){r.on("resize",window,R(function(){n.emit("resize")},e.settings.throttle))},unbind:function(){r.off("resize",window)}};return n.on("destroy",function(){i.unbind(),r.destroy()}),i},Build:function(e,t,n){var r={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){t.Html.root.classList.add(e.settings.classes.type[e.settings.type])},activeClass:function(){var n=e.settings.classes,r=t.Html.slides[e.index];r&&(r.classList.add(n.slide.active),A(r).forEach(function(e){e.classList.remove(n.slide.active)}))},removeClasses:function(){var n=e.settings.classes,r=n.type,i=n.slide;t.Html.root.classList.remove(r[e.settings.type]),t.Html.slides.forEach(function(e){e.classList.remove(i.active)})}};return n.on(["destroy","update"],function(){r.removeClasses()}),n.on(["resize","update"],function(){r.mount()}),n.on("move.after",function(){r.activeClass()}),r},Run:function(e,t,n){var r={mount:function(){this._o=!1},make:function(r){var i=this;e.disabled||(!e.settings.waitForTransition||e.disable(),this.move=r,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),t.Transition.after(function(){i.isStart()&&n.emit("run.start",i.move),i.isEnd()&&n.emit("run.end",i.move),i.isOffset()&&(i._o=!1,n.emit("run.offset",i.move)),n.emit("run.after",i.move),e.enable()}))},calculate:function(){var t=this.move,n=this.length,i=t.steps,s=t.direction,o=1;if("="===s)return e.settings.bound&&_(i)>n?void(e.index=n):void(e.index=i);if(">"!==s||">"!==i)if("<"!==s||"<"!==i){if("|"===s&&(o=e.settings.perView||1),">"===s||"|"===s&&">"===i){var a=function(t){var n=e.index;return e.isType("carousel")?n+t:n+(t-n%t)}(o);return a>n&&(this._o=!0),void(e.index=function(t,n){var i=r.length;if(t<=i)return t;if(e.isType("carousel"))return t-(i+1);if(e.settings.rewind)return r.isBound()&&!r.isEnd()?i:0;return r.isBound()?i:Math.floor(i/n)*n}(a,o))}if("<"===s||"|"===s&&"<"===i){var c=function(t){var n=e.index;if(e.isType("carousel"))return n-t;var r=Math.ceil(n/t);return(r-1)*t}(o);return c<0&&(this._o=!0),void(e.index=function(t,n){var i=r.length;if(t>=0)return t;if(e.isType("carousel"))return t+(i+1);if(e.settings.rewind)return r.isBound()&&r.isStart()?i:Math.floor(i/n)*n;return 0}(c,o))}m("Invalid direction pattern [".concat(s).concat(i,"] has been used"))}else e.index=0;else e.index=n},isStart:function(){return e.index<=0},isEnd:function(){return e.index>=this.length},isOffset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return e?!!this._o&&("|>"===e?"|"===this.move.direction&&">"===this.move.steps:"|<"===e?"|"===this.move.direction&&"<"===this.move.steps:this.move.direction===e):this._o},isBound:function(){return e.isType("slider")&&"center"!==e.settings.focusAt&&e.settings.bound}};return I(r,"move",{get:function(){return this._m},set:function(e){var t=e.substr(1);this._m={direction:e.substr(0,1),steps:t?_(t)?_(t):t:0}}}),I(r,"length",{get:function(){var n=e.settings,r=t.Html.slides.length;return this.isBound()?r-1-(_(n.perView)-1)+_(n.focusAt):r-1}}),I(r,"offset",{get:function(){return this._o}}),r},Swipe:function(e,t,n){var r=new N,i=0,s=0,o=0,a=!1,c=!!H&&{passive:!0},l={mount:function(){this.bindSwipeStart()},start:function(t){if(!a&&!e.disabled){this.disable();var r=this.touches(t);i=null,s=_(r.pageX),o=_(r.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(r){if(!e.disabled){var a=e.settings,c=a.touchAngle,l=a.touchRatio,u=a.classes,h=this.touches(r),d=_(h.pageX)-s,f=_(h.pageY)-o,p=Math.abs(d<<2),g=Math.abs(f<<2),m=Math.sqrt(p+g),y=Math.sqrt(g);if(!(180*(i=Math.asin(y/m))/Math.PI<c))return!1;r.stopPropagation(),t.Move.make(d*parseFloat(l)),t.Html.root.classList.add(u.dragging),n.emit("swipe.move")}},end:function(r){if(!e.disabled){var o=e.settings,a=o.perSwipe,c=o.touchAngle,l=o.classes,u=this.touches(r),h=this.threshold(r),d=u.pageX-s,f=180*i/Math.PI;this.enable(),d>h&&f<c?t.Run.make(t.Direction.resolve("".concat(a,"<"))):d<-h&&f<c?t.Run.make(t.Direction.resolve("".concat(a,">"))):t.Move.make(),t.Html.root.classList.remove(l.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,i=e.settings,s=i.swipeThreshold,o=i.dragThreshold;s&&r.on(V[0],t.Html.wrapper,function(e){n.start(e)},c),o&&r.on(V[1],t.Html.wrapper,function(e){n.start(e)},c)},unbindSwipeStart:function(){r.off(V[0],t.Html.wrapper,c),r.off(V[1],t.Html.wrapper,c)},bindSwipeMove:function(){var n=this;r.on(W,t.Html.wrapper,R(function(e){n.move(e)},e.settings.throttle),c)},unbindSwipeMove:function(){r.off(W,t.Html.wrapper,c)},bindSwipeEnd:function(){var e=this;r.on(z,t.Html.wrapper,function(t){e.end(t)})},unbindSwipeEnd:function(){r.off(z,t.Html.wrapper)},touches:function(e){return $.indexOf(e.type)>-1?e:e.touches[0]||e.changedTouches[0]},threshold:function(t){var n=e.settings;return $.indexOf(t.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,t.Transition.enable(),this},disable:function(){return a=!0,t.Transition.disable(),this}};return n.on("build.after",function(){t.Html.root.classList.add(e.settings.classes.swipeable)}),n.on("destroy",function(){l.unbindSwipeStart(),l.unbindSwipeMove(),l.unbindSwipeEnd(),r.destroy()}),l},Images:function(e,t,n){var r=new N,i={mount:function(){this.bind()},bind:function(){r.on("dragstart",t.Html.wrapper,this.dragstart)},unbind:function(){r.off("dragstart",t.Html.wrapper)},dragstart:function(e){e.preventDefault()}};return n.on("destroy",function(){i.unbind(),r.destroy()}),i},Anchors:function(e,t,n){var r=new N,i=!1,s=!1,o={mount:function(){this._a=t.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){r.on("click",t.Html.wrapper,this.click)},unbind:function(){r.off("click",t.Html.wrapper)},click:function(e){s&&(e.stopPropagation(),e.preventDefault())},detach:function(){if(s=!0,!i){for(var e=0;e<this.items.length;e++)this.items[e].draggable=!1;i=!0}return this},attach:function(){if(s=!1,i){for(var e=0;e<this.items.length;e++)this.items[e].draggable=!0;i=!1}return this}};return I(o,"items",{get:function(){return o._a}}),n.on("swipe.move",function(){o.detach()}),n.on("swipe.end",function(){t.Transition.after(function(){o.attach()})}),n.on("destroy",function(){o.attach(),o.unbind(),r.destroy()}),o},Controls:function(e,t,n){var r=new N,i=!!H&&{passive:!0},s={mount:function(){this._n=t.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=t.Html.root.querySelectorAll(K),this._arrowControls={previous:t.Html.root.querySelectorAll(G),next:t.Html.root.querySelectorAll(Y)},this.addBindings()},setActive:function(){for(var e=0;e<this._n.length;e++)this.addClass(this._n[e].children)},removeActive:function(){for(var e=0;e<this._n.length;e++)this.removeClass(this._n[e].children)},addClass:function(t){var n=e.settings,r=t[e.index];r&&(r.classList.add(n.classes.nav.active),A(r).forEach(function(e){e.classList.remove(n.classes.nav.active)}))},removeClass:function(t){var n=t[e.index];null==n||n.classList.remove(e.settings.classes.nav.active)},setArrowState:function(){if(!e.settings.rewind){var n=s._arrowControls.next,r=s._arrowControls.previous;this.resetArrowState(n,r),0===e.index&&this.disableArrow(r),e.index===t.Run.length&&this.disableArrow(n)}},resetArrowState:function(){for(var t=e.settings,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];r.forEach(function(e){x(e).forEach(function(e){e.classList.remove(t.classes.arrow.disabled)})})},disableArrow:function(){for(var t=e.settings,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];r.forEach(function(e){x(e).forEach(function(e){e.classList.add(t.classes.arrow.disabled)})})},addBindings:function(){for(var e=0;e<this._c.length;e++)this.bind(this._c[e].children)},removeBindings:function(){for(var e=0;e<this._c.length;e++)this.unbind(this._c[e].children)},bind:function(e){for(var t=0;t<e.length;t++)r.on("click",e[t],this.click),r.on("touchstart",e[t],this.click,i)},unbind:function(e){for(var t=0;t<e.length;t++)r.off(["click","touchstart"],e[t])},click:function(e){H||"touchstart"!==e.type||e.preventDefault();var n=e.currentTarget.getAttribute("data-glide-dir");t.Run.make(t.Direction.resolve(n))}};return I(s,"items",{get:function(){return s._c}}),n.on(["mount.after","move.after"],function(){s.setActive()}),n.on(["mount.after","run"],function(){s.setArrowState()}),n.on("destroy",function(){s.removeBindings(),s.removeActive(),r.destroy()}),s},Keyboard:function(e,t,n){var r=new N,i={mount:function(){e.settings.keyboard&&this.bind()},bind:function(){r.on("keyup",document,this.press)},unbind:function(){r.off("keyup",document)},press:function(n){var r=e.settings.perSwipe;["ArrowRight","ArrowLeft"].includes(n.code)&&t.Run.make(t.Direction.resolve("".concat(r).concat({ArrowRight:">",ArrowLeft:"<"}[n.code])))}};return n.on(["destroy","update"],function(){i.unbind()}),n.on("update",function(){i.mount()}),n.on("destroy",function(){r.destroy()}),i},Autoplay:function(e,t,n){var r=new N,i={mount:function(){this.enable(),this.start(),e.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var r=this;this._e&&(this.enable(),e.settings.autoplay&&w(this._i)&&(this._i=setInterval(function(){r.stop(),t.Run.make(">"),r.start(),n.emit("autoplay")},this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var e=this;r.on("mouseover",t.Html.root,function(){e._e&&e.stop()}),r.on("mouseout",t.Html.root,function(){e._e&&e.start()})},unbind:function(){r.off(["mouseover","mouseout"],t.Html.root)}};return I(i,"time",{get:function(){var n=t.Html.slides[e.index].getAttribute("data-glide-autoplay");return _(n||e.settings.autoplay)}}),n.on(["destroy","update"],function(){i.unbind()}),n.on(["run.before","swipe.start","update"],function(){i.stop()}),n.on(["pause","destroy"],function(){i.disable(),i.stop()}),n.on(["run.after","swipe.end"],function(){i.start()}),n.on(["play"],function(){i.enable(),i.start()}),n.on("update",function(){i.mount()}),n.on("destroy",function(){r.destroy()}),i},Breakpoints:function(e,t,n){var r=new N,i=e.settings,s=J(i.breakpoints),o=Object.assign({},i),a={match:function(e){if(void 0!==window.matchMedia)for(var t in e)if(e.hasOwnProperty(t)&&window.matchMedia("(max-width: ".concat(t,"px)")).matches)return e[t];return o}};return Object.assign(i,a.match(s)),r.on("resize",window,R(function(){e.settings=C(i,a.match(s))},e.settings.throttle)),n.on("update",function(){s=J(s),o=Object.assign({},i)}),n.on("destroy",function(){r.off("resize",window)}),a}},X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(n,e);var t=f(n);function n(){return o(this,n),t.apply(this,arguments)}return c(n,[{key:"mount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return p(u(n.prototype),"mount",this).call(this,Object.assign({},Q,e))}}]),n}(S)}),s.register("37v9V",function(t,n){e(t.exports,"onTreilerBtnClick",function(){return d});var r=s("gWoIc"),i=s("edYM8"),o=s("5I0Ww"),a=s("gjiCh");const c={modalTrailerIfraim:document.querySelector(".modal-video__trailer"),modalTrailer:document.querySelector(".backdrop-video")},{modalTrailerIfraim:l,modalTrailer:u}=c;let h;async function d(e){e.preventDefault(),(0,a.startLoader)(),l&&(l.innerHTML=""),(0,o.removeAllEventListenersModal)(),await async function(e){const t=await async function(e){const t=`${i.ID_URL}${e}${i.VIDEO_URL}`;return(await(0,r.getMovies)(t)).results}(e);if(t&&t[0]&&l){const e=t[0].key;await function(e){if(!l)return;const t=`\n    <iframe \n    width="100%" \n    height="100%"  \n   src="${f}${e}" \n   title="YouTube video player" \n   frameborder="0" \n   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" \n   allowfullscreen>\n   </iframe>\n `;l.insertAdjacentHTML("beforeend",t)}(e)}else l&&(l.innerHTML='<p class="modal-video__error">Trailer not found!</p>')}(o.movieId),u&&u.classList.remove("modal-trailer--is-hidden"),(0,a.stopLoader)(),h=document.querySelector(".modal__close-btn"),h&&h.addEventListener("click",p),u&&u.addEventListener("click",g),window.addEventListener("keydown",m)}const f="https://www.youtube.com/embed/";function p(){(0,o.addAllEventListenersModal)(),_(),u&&u.classList.add("modal-trailer--is-hidden")}function g(e){e.target.classList.contains("backdrop-video")&&((0,o.addAllEventListenersModal)(),_(),u&&u.classList.add("modal-trailer--is-hidden"))}function m(e){e.preventDefault(),"Escape"===e.code&&((0,o.addAllEventListenersModal)(),_(),u.classList.add("modal-trailer--is-hidden"))}function _(){h&&h.removeEventListener("click",p),u&&u.removeEventListener("click",g),window.removeEventListener("keydown",m)}}),s.register("kThre",function(e,t){s("eyjy7");var n=s("6aFcR"),r=s("868P8"),i=s("elBsM");(0,r.connectToBD)();const o=(0,n.p)();(0,n.z)(o,e=>{if(e){e.uid;(0,i.makeLoggedHtml)(` user logged as ${e.email} `)}else(0,i.makeLogRegHtml)()})}),s.register("elBsM",function(t,n){e(t.exports,"makeLoggedHtml",function(){return f}),e(t.exports,"makeLogRegHtml",function(){return d}),s("eyjy7");var r=s("6aFcR"),i=s("d80lF"),o=s("868P8");s("eyjy7");r=s("6aFcR");s("9k0Bn");const a=document.getElementById("auth-header"),c=document.getElementById("auth-modal");async function l(e){e.preventDefault();const t=e.target.password.value,n=e.target.email.value;if("log"===e.target.fire.value){const e=await(0,o.logUser)(n,t);if(e.uid)v("login-success"),setTimeout(async()=>{m();const t=(0,r.p)();(0,r.z)(t,e=>{if(e){e.uid}});const n=await(0,o.readNote)(e),i=n.watched,s=n.queue;i&&localStorage.setItem("watched",i),s&&localStorage.setItem("queue",s),f(e.email)},2e3);else{const t=document.getElementById("login-error");t&&(t.innerText=` ${e.replace("auth/","").replaceAll("-","  ")}, check your email and try again or signup! `)}}else{const e=await(0,o.createNewUser)(n,t);if(e.uid){const r=await(0,o.logUser)(n,t),i=localStorage.getItem("queue")||[],s=localStorage.getItem("watched")||[];await(0,o.createNote)(e,i,s),v("register-success"),setTimeout(()=>{m(),f(r.email)},2e3)}else{const t=document.getElementById("login-error");t&&(t.innerText=` ${e.replace("auth/","").replaceAll("-","  ")}, try to signin instead! `)}}}async function u(e){e.target.removeEventListener("click",u),function(){const e=document.getElementById("logout"),t=document.getElementById("logout-success");e&&t&&(e.style.display="none",t.classList.add("show"))}(),setTimeout(async()=>{await(0,o.logOut)(),d()},1500)}function h(e){m(),d()}function d(){a&&(a.innerHTML=i.logregMarkup);document.getElementById("login-status");const e=document.getElementById("tosignin"),t=document.getElementById("tosignup");e&&e.addEventListener("click",p),t&&t.addEventListener("click",p)}function f(e){a&&(a.innerHTML=i.loggedMarkup);const t=document.getElementById("logged-user");t&&(t.innerText="");const n=document.getElementById("logout");n&&n.addEventListener("click",u)}function p(e){const t=document.getElementById("tosignin"),n=document.getElementById("tosignup");if(t&&t.removeEventListener("click",p),n&&n.removeEventListener("click",p),e.target===t){c&&(c.innerHTML=i.loginMarkup,_());const{closeBackdrop:e,form:t,fbsBackdrop:n}=g();e&&e.addEventListener("click",h),n&&n.addEventListener("click",y),t&&t.addEventListener("submit",l)}else{c&&(c.innerHTML=i.registerMarkup,_());const{closeBackdrop:e,form:t,fbsBackdrop:n}=g();e&&e.addEventListener("click",h),n&&n.addEventListener("click",y),t&&t.addEventListener("submit",l)}}function g(){const e=document.getElementById("auth-modal"),t=document.querySelector(".fbs-backdrop");return{modal:e,closeBackdrop:document.getElementById("close-backdrop"),signup:document.getElementById("signup"),signin:document.getElementById("signin"),form:document.getElementById("login-form")||document.getElementById("signup-form"),fbsBackdrop:t}}function m(){const{modal:e,closeBackdrop:t,form:n,fbsBackdrop:r}=g();r&&r.removeEventListener("click",y),t&&t.removeEventListener("click",h),n&&(n.removeEventListener("submit",l),n.reset()),e&&(e.innerHTML="")}function _(){document.querySelectorAll(".fbs-success-message").forEach(e=>{e.classList.remove("show")});document.querySelectorAll(".fbs-modal-form").forEach(e=>{e.style.display="block",e.classList.remove("hidden")})}function y(e){e.target===e.currentTarget&&h()}function v(e){const t=document.querySelector(".fbs-modal-form"),n=document.getElementById(e),r=document.querySelector(".policy-text");t&&n&&(t.classList.add("hidden"),r&&(r.style.display="none"),setTimeout(()=>{t.style.display="none",n.classList.add("show")},300))}}),s.register("d80lF",function(t,r){e(t.exports,"logregMarkup",function(){return o}),e(t.exports,"loggedMarkup",function(){return a}),e(t.exports,"loginMarkup",function(){return c}),e(t.exports,"registerMarkup",function(){return l});var i=s("1rJhf");const o=`<div id="login-status" class="login-status">\n        <button id="tosignin"  type="button" class="fbs__nav-btn">log in</button>\n        <button id="tosignup"  type="button" class="fbs__nav-btn sign-up">\n                <svg class="login-status-icon" width="18" height="18">\n          <use href="${n(i)}#person-black-18dp"></use>\n        </svg>\n        sign up</button>\n      </div>`,a='<div id="login-status" class="login-status">\n        <span id="logged-user"></span>\n        <button id="logout"  type="button" class="fbs__nav-btn">logout</button>\n        \n        \x3c!-- Logout Success Message --\x3e\n        <div id="logout-success" class="fbs-success-message">\n          <div class="fbs-success-icon">👋</div>\n          <h3 class="fbs-success-text">Successfully Logged Out!</h3>\n          <p class="fbs-success-subtext">Come back soon!</p>\n        </div>\n      </div>',c=`<div id="user-login" class="backdrop fbs-backdrop">\n        <div class="fbs-modal">\n<button id="close-backdrop"  type="button" class="fbs-modal-close-btn"><svg\n            width="40"\n            height="40"\n            aria-label="close the mobile menu"\n          >\n            <use\n              class="menu-btn__icon--close"\n              href="${n(i)}#icon-close"\n            ></use>\n          </svg></button>\n\n            <p class="fbs-modal-title">Sign in with email</p>\n        \n        <form id="login-form" class="fbs-modal-form">\n        <div class="fbs-modal-content">\n          <label for="email" class="fbs-modal-label">Email: </label>\n          <span class="fbs-modal-label__field">\n            <input type="email" name="email" required \n              placeholder="email@address.com"\n              class="fbs-modal-label__block fbs-modal-label__block--input"/>\n              <svg class="fbs-modal-icon" width="18" height="18">\n                <use href="${n(i)}#email-black-18dp"></use>\n              </svg>\n          </span>\n          <label for="password" class="fbs-modal-label">Password: </label>\n          <span class="fbs-modal-label__field">\n            <input type="password" name="password" minlength="6" required \n              placeholder="(A-Z, a-z, 0-9, !@_-  min 6 symbols)"\n              class="fbs-modal-label__block fbs-modal-label__block--input"/>\n              <svg class="fbs-modal-icon" width="18" height="18">\n                <use href="${n(i)}#person-black-18dp"></use>\n              </svg>\n          </span>\n          <button type="submit" id="fire" value="log" class="btn fbs-modal-btn--submit">Login</button>\n          <p id="login-error"></p>\n          </div>\n          <a class="visually-hidden fbs-forgot" href="#">Forgot Password?</a>\n        </form>\n\n        \x3c!-- Success Message --\x3e\n        <div id="login-success" class="fbs-success-message">\n          <div class="fbs-success-icon">✓</div>\n          <h3 class="fbs-success-text">Successfully Logged In!</h3>\n          <p class="fbs-success-subtext">Welcome back! Redirecting you now...</p>\n        </div>\n\n        </div>\n      </div>`,l=`<div id="user-register" class="backdrop fbs-backdrop">\n          <div class="fbs-modal">\n<button id="close-backdrop" type="button" class="fbs-modal-close-btn"><svg\n            width="40"\n            height="40"\n            aria-label="close the mobile menu"\n          >\n            <use\n              class="menu-btn__icon--close"\n              href="${n(i)}#icon-close"\n            ></use>\n          </svg></button>\n\n        <p class="fbs-modal-title">Sign up with email</p>\n        \n        <form id="signup-form" class="fbs-modal-form">\n        <div class="fbs-modal-content">\n          <label for="email" class="fbs-modal-label">Email: </label>\n          <span class="fbs-modal-label__field">\n            <input type="email" name="email" required \n              placeholder="email@address.com"\n              class="fbs-modal-label__block fbs-modal-label__block--input"/>\n              <svg class="fbs-modal-icon" width="18" height="18">\n                <use href="${n(i)}#email-black-18dp"></use>\n              </svg>\n          </span>\n          <label for="password" class="fbs-modal-label">Password:</label>\n          <span class="fbs-modal-label__field">\n            <input type="password" name="password" minlength="6" required \n              placeholder="(A-Z, a-z, 0-9, !@_-   min 6 symbols)"\n              class="fbs-modal-label__block fbs-modal-label__block--input"/>\n              <svg class="fbs-modal-icon" width="18" height="18">\n                <use href="${n(i)}#person-black-18dp"></use>\n              </svg>\n          </span>\n          <button type="submit" id="fire" value="reg" class="btn fbs-modal-btn--submit">Sign up</button>\n          <p id="login-error"></p>\n          </div>\n                  </form>\n\n                  \x3c!-- Success Message --\x3e\n                  <div id="register-success" class="fbs-success-message">\n                    <div class="fbs-success-icon">✓</div>\n                    <h3 class="fbs-success-text">Account Created Successfully!</h3>\n                    <p class="fbs-success-subtext">Welcome to Filmoteka! Redirecting you now...</p>\n                  </div>\n\n                  <p class="policy-text">\n  By continuing, you are indicating that you accept our\n  <a\n    href="https://www.termsfeed.com/live/a4a90d1f-3dbd-4a5f-8d9b-f11bd7c44a8a"\n    target="_blank"\n    rel="noreferrer noopener nofollow"\n    aria-label="Terms"\n    class="policy-link"\n    >Terms of Service</a\n  >\n  and\n  <a\n    href="https://www.termsfeed.com/live/3410472a-4627-47f2-9940-040bfb0a9dca"\n    target="_blank"\n    rel="noreferrer noopener nofollow"\n    aria-label="Policy"\n    class="policy-link"\n    >Privacy Policy</a\n  >.\n</p>\n        </div>\n      </div>`}),s.register("1rJhf",function(e,t){e.exports=new URL(s("kyEFX").resolve("9v6fF"),import.meta.url).toString()}),s.register("lJ5oQ",function(e,t){const n={bodyEl:document.querySelector("body"),toggleEl:document.querySelector("#theme-switch-toggle"),footerDarktheme:document.querySelector("footer"),movieBackdrop:document.querySelector(".modal"),modalTeam:document.querySelector(".modal-team"),sun:document.querySelector(".sun"),moon:document.querySelector(".moon"),modalVideoContainer:document.querySelector(".modal-video__container")},{bodyEl:r,toggleEl:i,footerDarktheme:s,movieBackdrop:o,modalTeam:a,sun:c,moon:l,modalVideoContainer:u}=n;i&&i.addEventListener("change",e=>{r.classList.contains("dark-theme")?(r.classList.remove("dark-theme"),r.classList.add("light-theme"),s&&s.classList.remove("dark-theme"),a&&a.classList.remove("dark-theme"),u&&u.classList.remove("dark-theme"),o&&o.classList.remove("dark-theme")):(r.classList.remove("light-theme"),r.classList.add("dark-theme"),s&&s.classList.add("dark-theme"),a&&a.classList.add("dark-theme"),u&&u.classList.add("dark-theme"),o&&o.classList.add("dark-theme"))});const h=localStorage.getItem("theme");i&&i.addEventListener("change",e=>{localStorage.setItem("theme",r.classList)}),h&&(r.classList=h),"dark-theme"===h&&i&&i.setAttribute("checked",!0),"dark-theme"===h&&s&&s.classList.add("dark-theme"),"dark-theme"===h&&o&&o.classList.add("dark-theme"),"dark-theme"===h&&a&&a.classList.add("dark-theme"),"dark-theme"===h&&u&&u.classList.add("dark-theme")}),s("kyEFX").register(JSON.parse('{"4627Z":"my-library.ee2d2133.js","9v6fF":"symbol-defs.9148ec3d.svg"}'));
//# sourceMappingURL=my-library.ee2d2133.js.map
