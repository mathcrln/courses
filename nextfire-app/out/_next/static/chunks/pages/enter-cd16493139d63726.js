(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[926],{1296:function(n,e,t){var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g,c="object"==typeof self&&self&&self.Object===Object&&self,f=a||c||Function("return this")(),l=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return f.Date.now()};function h(n){var e=typeof n;return!!n&&("object"==e||"function"==e)}function m(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==l.call(n)}(n))return NaN;if(h(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=h(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var t=o.test(n);return t||u.test(n)?s(n.slice(2),t?2:8):i.test(n)?NaN:+n}n.exports=function(n,e,t){var r,i,o,u,s,a,c=0,f=!1,l=!1,x=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function g(e){var t=r,o=i;return r=i=void 0,c=e,u=n.apply(o,t)}function j(n){return c=n,s=setTimeout(y,e),f?g(n):u}function b(n){var t=n-a;return void 0===a||t>=e||t<0||l&&n-c>=o}function y(){var n=v();if(b(n))return w(n);s=setTimeout(y,function(n){var t=e-(n-a);return l?p(t,o-(n-c)):t}(n))}function w(n){return s=void 0,x&&r?g(n):(r=i=void 0,u)}function _(){var n=v(),t=b(n);if(r=arguments,i=this,a=n,t){if(void 0===s)return j(a);if(l)return s=setTimeout(y,e),g(a)}return void 0===s&&(s=setTimeout(y,e)),u}return e=m(e)||0,h(t)&&(f=!!t.leading,o=(l="maxWait"in t)?d(m(t.maxWait)||0,e):o,x="trailing"in t?!!t.trailing:x),_.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=a=i=s=void 0},_.flush=function(){return void 0===s?u:w(v())},_}},3513:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/enter",function(){return t(6785)}])},6785:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return p}});var r=t(4051),i=t.n(r),o=t(5893),u=t(8218),s=t(7294),a=t(6482),c=t(1296),f=t.n(c);function l(n,e,t,r,i,o,u){try{var s=n[o](u),a=s.value}catch(c){return void t(c)}s.done?e(a):Promise.resolve(a).then(r,i)}function d(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function u(n){l(o,r,i,u,s,"next",n)}function s(n){l(o,r,i,u,s,"throw",n)}u(void 0)}))}}function p(){var n=(0,s.useContext)(u.S),e=n.user,t=n.username;return(0,o.jsx)("main",{children:e?t?(0,o.jsx)(h,{}):(0,o.jsx)(m,{}):(0,o.jsx)(v,{})})}function v(){var n=function(){var n=d(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.I8.signInWithPopup(a.qV);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,o.jsxs)("button",{className:"btn-google",onClick:n,children:[(0,o.jsx)("img",{src:"/google.png",alt:"Sign in with Google",height:30,width:30})," ",(0,o.jsx)("span",{style:{margin:"0px 10px"},children:"Sign in with Google"})]})}function h(){return(0,o.jsx)("button",{onClick:function(){return a.I8.signOut()},children:"Sign Out"})}function m(){var n=(0,s.useState)(""),e=n[0],t=n[1],r=(0,s.useState)(!1),c=r[0],l=r[1],p=(0,s.useState)(!1),v=p[0],h=p[1],m=(0,s.useContext)(u.S),g=m.user,j=m.username,b=function(){var n=d(i().mark((function n(t){var r,o,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),r=a.RZ.doc("users/".concat(g?g.uid:"")),o=a.RZ.doc("usernames/".concat(e)),(u=a.RZ.batch()).set(r,{username:e,photoURL:null===g||void 0===g?void 0:g.photoURL,displayName:null===g||void 0===g?void 0:g.displayName}),u.set(o,{uid:null===g||void 0===g?void 0:g.uid}),n.next=8,u.commit();case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),y=f()(function(){var n=d(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e.length>=3)){n.next=8;break}return t=a.RZ.doc("usernames/".concat(e)),n.next=4,t.get();case 4:r=n.sent.exists,console.log("Firestore read executed!"),l(!r),h(!1);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),500);return(0,s.useEffect)((function(){y(e)}),[e,y]),j?null:(0,o.jsxs)("section",{children:[(0,o.jsx)("h3",{children:"Choose Username"}),(0,o.jsxs)("form",{onSubmit:b,children:[(0,o.jsx)("input",{name:"username",placeholder:"myname",value:e,onChange:function(n){var e,r=null===(e=n.target.value)||void 0===e?void 0:e.toLowerCase();r.length<3&&(t(r),h(!1),l(!1)),/^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(r)&&(t(r),h(!0),l(!1))}}),(0,o.jsx)(x,{username:e,isValid:c,loading:v}),(0,o.jsx)("button",{type:"submit",className:"btn-green",disabled:!c,children:"Choose"}),(0,o.jsx)("h3",{children:"Debug State"}),(0,o.jsxs)("div",{children:["Username: ",e,(0,o.jsx)("br",{}),"Loading: ",v.toString(),(0,o.jsx)("br",{}),"Username Valid: ",c.toString()]})]})]})}function x(n){var e=n.username,t=n.isValid;return n.loading?(0,o.jsx)("p",{children:"Checking..."}):t?(0,o.jsxs)("p",{className:"text-success",children:[e," is available!"]}):e&&!t?(0,o.jsx)("p",{className:"text-danger",children:"That username is taken!"}):(0,o.jsx)("p",{})}}},function(n){n.O(0,[774,888,179],(function(){return e=3513,n(n.s=e);var e}));var e=n.O();_N_E=e}]);