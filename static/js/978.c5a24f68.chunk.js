"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[978],{157:function(e,n,t){t.d(n,{E1:function(){return p},Up:function(){return s},cv:function(){return i},ff:function(){return f},gm:function(){return l}});var r=t(861),a=t(757),u=t.n(a),c=t(912),o="e5f14f5416082ca34e1b831443110cc8",i=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:o}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(){var n,t,r=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"cat",e.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:o,query:"".concat(n)}});case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(){var n,t,r=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:255,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(o,"&page=1"));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},978:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r,a,u,c=t(861),o=t(439),i=t(757),s=t.n(i),p=t(87),l=t(689),f=t(184),h=function(e){var n=e.searhGallery,t=(0,l.TH)();return console.log(n),(0,f.jsx)(f.Fragment,{children:n.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(p.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title})},e.id)}))})},d=t(168),v=t(444),x=v.ZP.form(r||(r=(0,d.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),m=v.ZP.input(a||(a=(0,d.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),g=v.ZP.button(u||(u=(0,d.Z)(["\n  padding: 9px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: #3651ce;\n  }\n"]))),b=function(){var e=(0,p.lr)(),n=(0,o.Z)(e,2)[1];return(0,f.jsxs)(x,{onSubmit:function(e){e.preventDefault(),0!==e.target[0].value.trim().length?n({query:e.target[0].value}):alert("Please, enter another value")},children:[(0,f.jsx)(m,{type:"text"}),(0,f.jsx)(g,{type:"submit",children:"Search"})]})},k=t(791),y=t(157),Z=function(){var e,n=(0,p.lr)(),t=null!==(e=(0,o.Z)(n,1)[0].get("query"))&&void 0!==e?e:"",r=(0,k.useState)(),a=(0,o.Z)(r,2),u=a[0],i=a[1],l=(0,k.useState)(null),d=(0,o.Z)(l,2),v=d[0],x=d[1];return(0,k.useEffect)((function(){function e(){return(e=(0,c.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,x(null),t){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,(0,y.Up)(t);case 6:n=e.sent,x(null),0===n.results.length&&x("Nothing found \ud83d\ude12. Please enter another value "),console.log(t),i(n.results),console.log(n.results),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),x("Error \ud83d\ude12. Please reload page \ud83d\udc4d");case 17:return e.prev=17,e.finish(17);case 19:case"end":return e.stop()}}),e,null,[[0,14,17,19]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(t)}),[t]),console.log(u),(0,f.jsxs)("main",{children:[(0,f.jsx)(b,{}),v&&(0,f.jsx)("p",{children:v}),(0,f.jsx)("ul",{children:t&&u&&(0,f.jsx)(h,{searhGallery:u})})]})}}}]);
//# sourceMappingURL=978.c5a24f68.chunk.js.map