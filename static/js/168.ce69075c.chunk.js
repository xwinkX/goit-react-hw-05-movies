"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{6713:function(r,n,t){t.d(n,{IQ:function(){return p},Jh:function(){return f},XT:function(){return i},on:function(){return v},uz:function(){return o}});var e=t(5861),a=t(7757),u=t.n(a),c=t(4569),s=t.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"4242358c052cb34e9586769939c4f84d"}}),i=function(){var r=(0,e.Z)(u().mark((function r(){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/trending/movie/day");case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(n));case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(n,"/credits"));case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(n,"/reviews"));case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/search/movie",{params:{query:n}});case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()},2168:function(r,n,t){t.r(n),t.d(n,{default:function(){return v}});var e=t(5861),a=t(885),u=t(7757),c=t.n(u),s=t(2791),i=t(6713),o=t(6871),p={},f=t(184),v=function(){var r=(0,o.UO)().movieId,n=(0,s.useState)([]),t=(0,a.Z)(n,2),u=t[0],v=t[1],d=(0,s.useState)(!1),h=(0,a.Z)(d,2),l=h[0],x=h[1],m=(0,s.useState)(null),w=(0,a.Z)(m,2),k=w[0],b=w[1];(0,s.useEffect)((function(){var n=function(){var n=(0,e.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,(0,i.Jh)(r);case 4:t=n.sent,e=t.results,v(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),b(n.t0);case 12:return n.prev=12,x(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]);var g=u.map((function(r){var n=r.author,t=r.content,e=r.id;return(0,f.jsxs)("li",{className:p.li,children:[(0,f.jsxs)("p",{children:[" ",n]}),(0,f.jsxs)("p",{children:[" ",t]})]},e)}));return(0,f.jsxs)("div",{children:[l&&(0,f.jsx)("p",{children:"... Loading"}),(0,f.jsx)("ul",{children:g}),k&&(0,f.jsx)("p",{children:"...Movies load failed"})]})}}}]);
//# sourceMappingURL=168.ce69075c.chunk.js.map