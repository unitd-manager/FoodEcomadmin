(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[151],{1474:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n(27),l=n(1),r=n.n(l),i=n(63),o=n(1058),s=n(189),u=n.n(s),j=new Date,b=j.getFullYear(),d=j.getMonth(),f=j.getDate(),O=[{title:"Twice event For two Days",allDay:!0,start:new Date(b,d,3),end:new Date(b,d,5),color:"primary"},{title:"Learn ReactJs",start:new Date(b,d,f+3,10,30),end:new Date(b,d,f+3,11,30),allDay:!1,color:"success"},{title:"Launching MaterialArt Angular",start:new Date(b,d,f+7,12,0),end:new Date(b,d,f+7,14,0),allDay:!1,color:"danger"},{title:"Lunch with Mr.Raw",start:new Date(b,d,f-2),end:new Date(b,d,f-2),allDay:!0,color:"info"},{title:"Going For Party of Sahs",start:new Date(b,d,f+1,19,0),end:new Date(b,d,f+1,22,30),allDay:!1,color:"info"},{title:"Learn Ionic",start:new Date(b,d,23),end:new Date(b,d,25),color:"warning"},{title:"Research of making own Browser",start:new Date(b,d,19),end:new Date(b,d,22),color:"primary"}],h=(n(935),n(936),n(3));u.a.locale("en-GB");var v=Object(o.b)(u.a);t.default=function(){var e=Object(l.useState)(O),t=Object(c.a)(e,2),n=t[0],s=t[1],u=r.a.useState(!1),j=Object(c.a)(u,2),b=j[0],d=j[1],f=Object(l.useState)(""),w=Object(c.a)(f,2),D=w[0],p=w[1],g=Object(l.useState)(),m=Object(c.a)(g,2),x=m[0],y=m[1],S=Object(l.useState)("default"),C=Object(c.a)(S,2),E=C[0],k=C[1],N=Object(l.useState)(),T=Object(c.a)(N,2),A=T[0],F=T[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(i.i,{children:Object(h.jsxs)(i.j,{children:[Object(h.jsx)(o.a,{selectable:!0,events:n,defaultView:"month",scrollToTime:new Date(1970,1,1,6),defaultDate:new Date,localizer:v,style:{height:"calc(100vh - 350px"},onSelectEvent:function(e){return function(e){d(!0);var t=n.find((function(t){return t.title===e.title}));k(e.color),p(t.title),k(t.color),F(e)}(e)},onSelectSlot:function(e){return function(e){d(!0),y(e)}(e)},eventPropGetter:function(e){return function(e){return e.color?{className:"event-".concat(e.color)}:{className:"event-default"}}(e)}}),Object(h.jsxs)(i.N,{isOpen:b,children:[Object(h.jsx)(i.Q,{toggle:function(){d(!1),p(""),F(null)},children:A?"Update Event":"Add Event"}),Object(h.jsxs)(i.A,{onSubmit:A?function(e){e.preventDefault(),s(n.map((function(e){return e.title===A.title?Object(a.a)(Object(a.a)({},e),{},{title:D,color:E}):e}))),d(!1),p(""),k(""),F(null)}:function(e){e.preventDefault();var t=n;t.push({title:D,start:x.start,end:x.end,color:E}),d(!1),e.target.reset(),s(t),p("")},children:[Object(h.jsxs)(i.O,{children:[Object(h.jsx)("h6",{children:"Event Title"}),Object(h.jsx)(i.E,{id:"Event Title",placeholder:"Enter Event Title",value:D,onChange:function(e){return p(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("h6",{children:"Select Event Color"}),Object(h.jsx)("div",{className:"button-group",children:[{id:1,eColor:"#1a97f5",value:"primary"},{id:2,eColor:"#00ab55",value:"success"},{id:3,eColor:"#fc4b6c",value:"danger"},{id:4,eColor:"#1e4db7",value:"info"},{id:5,eColor:"#fdd43f",value:"warning"}].map((function(e){return Object(h.jsx)(i.e,{color:e.value,size:"sm",onClick:function(){return t=e.value,k(t);var t},children:e.value===E?Object(h.jsx)("i",{className:"bi bi-check"}):Object(h.jsx)("i",{className:"bi bi-circle"})},e.eColor)}))})]}),Object(h.jsxs)(i.P,{children:[A?Object(h.jsx)(i.e,{type:"submit",color:"danger",outline:!0,onClick:function(){return function(e){var t=n.filter((function(t){return t.title!==e.title}));s(t)}(A)},children:"Delete"}):"",Object(h.jsx)(i.e,{type:"submit",color:"success",disabled:!D,children:A?"Update":"Add"})]})]})]})]})})})}},936:function(e,t,n){}}]);
//# sourceMappingURL=151.a3d12a5b.chunk.js.map