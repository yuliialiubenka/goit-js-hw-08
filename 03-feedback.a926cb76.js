!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,f=setTimeout(h,t),s?b(e):u}function T(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=p();if(T(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function O(e){return f=void 0,v&&r?b(e):(r=o=void 0,u)}function w(){var e=p(),n=T(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(h,t),b(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?u:O(p())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var S,T=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form input"),O=document.querySelector(".feedback-form textarea"),w="feedback-form-state";(S=JSON.parse(localStorage.getItem(w)))&&(h.value=S.email,O.value=S.message),T.addEventListener("input",e(t)((function(){var e=T.elements,t=e.email.value,n=e.message.value,r={email:t,message:n};localStorage.setItem(w,JSON.stringify(r))}),500)),T.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message;""!==n.value&&""!==r.value||alert("Please fill in all the fields!");console.log({email:n.value,message:r.value}),e.currentTarget.reset(),localStorage.removeItem(w)}))}();
//# sourceMappingURL=03-feedback.a926cb76.js.map
