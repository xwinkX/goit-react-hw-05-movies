"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[839],{6713:function(t,r,e){e.d(r,{IQ:function(){return f},Jh:function(){return p},XT:function(){return i},on:function(){return v},uz:function(){return o}});var n=e(5861),a=e(7757),u=e.n(a),c=e(4569),s=e.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"4242358c052cb34e9586769939c4f84d"}}),i=function(){var t=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/trending/movie/day");case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},7842:function(t,r,e){e.r(r);var n=e(5861),a=e(885),u=e(7757),c=e.n(u),s=e(2791),i=e(6713),o=e(6368),f=e(184);r.default=function(){var t=(0,s.useState)([]),r=(0,a.Z)(t,2),e=r[0],u=r[1],p=(0,s.useState)(!1),v=(0,a.Z)(p,2),d=v[0],h=v[1],l=(0,s.useState)(null),m=(0,a.Z)(l,2),x=m[0],w=m[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(!0),t.next=4,(0,i.XT)();case 4:r=t.sent,e=r.results,u(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),w(t.t0);case 12:return t.prev=12,h(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Trending today"}),e.length>0&&(0,f.jsx)(o.Z,{items:e}),d&&(0,f.jsx)("p",{children:"...loading"}),x&&(0,f.jsx)("p",{children:"...load failed"})]})}},6368:function(t,r,e){var n=e(6871),a=e(501),u=e(184),c=function(t){var r=t.items,e=(0,n.TH)(),c=r.map((function(t){var r=t.id,n=t.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{state:{from:e},to:"/movies/".concat(r),children:n})},r)}));return(0,u.jsx)("ul",{children:c})};r.Z=c,c.defaultProps={items:[]}}}]);
//# sourceMappingURL=839.0be77889.chunk.js.map