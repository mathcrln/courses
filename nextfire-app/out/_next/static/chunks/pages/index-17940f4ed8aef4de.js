(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4186)}])},4866:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var r=t(5893);function s(n){return n.show?(0,r.jsx)("div",{className:"loader"}):null}},4165:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(5893),s=t(1664),c=t.n(s);function i(n){var e=n.posts,t=n.admin;return(0,r.jsx)(r.Fragment,{children:e?e.map((function(n){return(0,r.jsx)(a,{post:n,admin:t},n.slug)})):null})}function a(n){var e=n.post,t=n.admin,s=void 0!==t&&t,i=null===e||void 0===e?void 0:e.content.trim().split(/\s+/g).length,a=(i/100+1).toFixed(0);return(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)(c(),{href:"/".concat(e.username),children:(0,r.jsx)("a",{children:(0,r.jsxs)("strong",{children:["By @",e.username]})})}),(0,r.jsx)(c(),{href:"/".concat(e.username,"/").concat(e.slug),children:(0,r.jsx)("h2",{children:(0,r.jsx)("a",{children:e.title})})}),(0,r.jsxs)("footer",{children:[(0,r.jsxs)("span",{children:[i," words. ",a," min read"]}),(0,r.jsxs)("span",{className:"push-left",children:["\ud83d\udc97 ",e.heartCount||0," Hearts"]})]}),s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c(),{href:"/admin/".concat(e.slug),children:(0,r.jsx)("h3",{children:(0,r.jsx)("button",{className:"btn-blue",children:"Edit"})})}),e.published?(0,r.jsx)("p",{className:"text-success",children:"Live"}):(0,r.jsx)("p",{className:"text-danger",children:"Unpublished"})]})]})}},4186:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSP:function(){return l},default:function(){return h}});var r=t(4051),s=t.n(r),c=t(5893),i=t(4165),a=t(4866),u=t(6482),o=t(7294);function d(n,e,t,r,s,c,i){try{var a=n[c](i),u=a.value}catch(o){return void t(o)}a.done?e(u):Promise.resolve(u).then(r,s)}var l=!0;function h(n){var e=(0,o.useState)(n.posts),t=e[0],r=e[1],l=(0,o.useState)(!1),h=l[0],f=l[1],p=(0,o.useState)(!1),x=p[0],v=p[1],m=function(){var n,e=(n=s().mark((function n(){var e,c,i,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),e=t[t.length-1],c="number"===typeof(null===e||void 0===e?void 0:e.createdAt)?(0,u.Lg)(e.createdAt):e.createdAt,i=u.RZ.collectionGroup("posts").where("published","==",!0).orderBy("createdAt","desc").startAfter(c).limit(1),n.next=6,i.get();case 6:a=n.sent.docs.map((function(n){return n.data()})),r(t.concat(a)),f(!1),a.length<1&&v(!0);case 10:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,s){var c=n.apply(e,t);function i(n){d(c,r,s,i,a,"next",n)}function a(n){d(c,r,s,i,a,"throw",n)}i(void 0)}))});return function(){return e.apply(this,arguments)}}();return(0,c.jsxs)("main",{children:[(0,c.jsx)(i.Z,{posts:t}),!h&&!x&&(0,c.jsx)("button",{onClick:m,children:"Load more"}),(0,c.jsx)(a.Z,{show:h}),x&&"You have reached the end!"]})}}},function(n){n.O(0,[774,888,179],(function(){return e=8312,n(n.s=e);var e}));var e=n.O();_N_E=e}]);