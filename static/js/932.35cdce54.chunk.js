"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[932],{932:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,o,i,c,s,u,p,l,d=t(165),f=t(861),x=t(439),h=t(791),v=t(689),g=t(87),Z=t(323),m=t(585),b=t(168),w=t(112),j=w.Z.span(r||(r=(0,b.Z)(["\n  a {\n    position: relative;\n    padding-left: 12px;\n  }\n\n  a::before {\n    content: '';\n    display: block;\n\n    border-color: #ffc700;\n    border-style: solid;\n    border-width: 0 0 2px 2px;\n    height: 6px;\n    left: 0;\n    position: absolute;\n    width: 6px;\n    margin-top: -4px;\n    top: 50%;\n\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n  }\n\n  span {\n    color: #ffc700;\n  }\n\n  :hover,\n  :focus {\n    color: #ffc700;\n    a::before {\n      border-color: white;\n    }\n    span {\n      color: white;\n    }\n  }\n"]))),k=w.Z.div(a||(a=(0,b.Z)(["\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n  margin-bottom: 12px;\n"]))),y=w.Z.img(o||(o=(0,b.Z)(["\n  max-width: 182px;\n  background: #424242;\n  border-radius: 15px;\n"]))),_=w.Z.h2(i||(i=(0,b.Z)(["\n  font-size: 26px;\n  margin-bottom: 12px;\n"]))),U=w.Z.h3(c||(c=(0,b.Z)(["\n  font-size: 16px;\n  margin-bottom: 6px;\n"]))),S=w.Z.p(s||(s=(0,b.Z)(["\n  font-size: 16px;\n  color: #888888;\n  margin-bottom: 12px;\n"]))),z=w.Z.ul(u||(u=(0,b.Z)(["\n  font-size: 16px;\n  display: flex;\n  gap: 18px;\n  padding: 0;\n\n  border-radius: 20px;\n  color: #888888;\n  margin-bottom: 12px;\n"]))),L=w.Z.ul(p||(p=(0,b.Z)(["\n  display: flex;\n  gap: 18px;\n  padding: 14px;\n\n  border-radius: 20px;\n"]))),O=w.Z.li(l||(l=(0,b.Z)(["\n  span {\n    color: #ffc700;\n  }\n\n  a:hover,\n  a:focus,\n  a:active {\n    color: #ffc700;\n    span {\n      color: white;\n    }\n  }\n"]))),C=t(184),P=function(){var n,e,t,r=(0,v.UO)().movieId,a=(0,h.useState)(""),o=(0,x.Z)(a,2),i=o[0],c=o[1],s=(0,v.TH)(),u=null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,h.useEffect)((function(){var n=function(){var n=(0,f.Z)((0,d.Z)().mark((function n(){var e;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,Z.Pg)(r);case 3:e=n.sent,c(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(j,{children:(0,C.jsx)(g.rU,{to:u,children:"Go back"})}),(0,C.jsxs)(k,{children:[(0,C.jsx)(y,{src:"".concat(i.poster_path?m.f+i.poster_path:m.l+"?text="+i.original_title),alt:"get"}),(0,C.jsxs)("div",{children:[(0,C.jsx)(_,{children:i.original_title}),(0,C.jsxs)(U,{children:["Rating: ",Math.round(i.vote_average)]}),(0,C.jsx)(U,{children:"Overview"}),(0,C.jsx)(S,{children:i.overview}),(0,C.jsx)(U,{children:"Genres"}),(0,C.jsx)(z,{children:null===(t=i.genres)||void 0===t?void 0:t.map((function(n){return(0,C.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)("h2",{children:"Additional information"}),(0,C.jsxs)(L,{children:[(0,C.jsx)(O,{children:(0,C.jsx)(g.OL,{to:"cast",state:s.state,children:"Cast"})}),(0,C.jsx)(O,{children:(0,C.jsx)(g.OL,{to:"reviews",state:s.state,children:"Reviews"})})]}),(0,C.jsx)(h.Suspense,{fallback:(0,C.jsx)("div",{children:"Loading subpage..."}),children:(0,C.jsx)(v.j3,{})})]})]})}},323:function(n,e,t){t.d(e,{Df:function(){return c},Eb:function(){return p},Hu:function(){return l},Pg:function(){return u},Ph:function(){return s}});var r=t(165),a=t(861),o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="a893401ae5c9e40d8bce55c26c072953",c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/week?api_key=".concat(i));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},585:function(n,e,t){t.d(e,{f:function(){return r},l:function(){return a}});var r="https://image.tmdb.org/t/p/w500/",a="https://via.placeholder.com/182x273"}}]);
//# sourceMappingURL=932.35cdce54.chunk.js.map