(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[91,169],{141:function(e,t,c){"use strict";var s=c(63),n=c(12),r=c(58),i=c(3);t.a=function(e){var t=Object(n.f)(),c=t.pathname.split("/")[1],a=t.pathname.split("/")[2];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:e.heading}),Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.d,{to:"/",tag:r.b,className:"text-decoration-none",children:"Home"}),c?Object(i.jsx)(s.d,{active:!0,children:c}):"",a?Object(i.jsx)(s.d,{active:!0,children:a}):""]})]})}},1415:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(9),r=c(27),i=c(1),a=c(63),o=c(12),l=c(185),d=c.n(l),j=c(161),b=c(141),u=c(148),h=c(144),O=c(7),m=c(206),x=c(64),f=c(3);t.default=function(){var e=Object(i.useState)(),t=Object(r.a)(e,2),c=t[0],l=t[1],g=Object(o.g)(),p=Object(i.useState)({title:"",creation_date:d()(),content_date:d()(),content_type:""}),v=Object(r.a)(p,2),C=v[0],_=v[1],y=Object(i.useContext)(x.b).loggedInuser;return Object(i.useEffect)((function(){O.a.get("/contact/getContact").then((function(e){l(e.data.data),console.log(c)}))}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)(b.a,{}),Object(f.jsx)(j.a,{}),Object(f.jsx)(a.eb,{children:Object(f.jsx)(a.s,{md:"6",children:Object(f.jsx)(u.default,{title:"Key Details",children:Object(f.jsxs)(a.A,{children:[Object(f.jsx)(a.C,{children:Object(f.jsx)(a.eb,{children:Object(f.jsxs)(a.s,{md:"12",children:[Object(f.jsx)(a.H,{children:"Name"}),Object(f.jsx)(a.E,{type:"text",onChange:function(e){_(Object(n.a)(Object(n.a)({},C),{},Object(s.a)({},e.target.name,e.target.value)))},value:C&&C.first_name,name:"first_name"})]})})}),Object(f.jsx)(a.C,{children:Object(f.jsx)(a.eb,{children:Object(f.jsxs)("div",{className:"pt-3 mt-3 d-flex align-items-center gap-2",children:[Object(f.jsx)(a.e,{className:"shadow-none",color:"primary",onClick:function(){""!==C.first_name?(C.created_by=y.first_name,C.creation_date=m.a,O.a.post("/contact/insertContact",C).then((function(e){var t=e.data.data.insertId;Object(h.a)("Customer inserted successfully.","success"),setTimeout((function(){g("/CustomerEdit/".concat(t))}),300)})).catch((function(){Object(h.a)("Network connection error.","error")}))):Object(h.a)("Please fill all required fields.","error"),setTimeout((function(){g("/CustomerEdit")}),800)},children:"Save"}),Object(f.jsx)(a.e,{onClick:function(){g(-1)},type:"button",className:"btn btn-dark shadow-none",children:"Cancel"})]})})})]})})})})]})}},144:function(e,t,c){"use strict";var s=c(161);c(186);t.a=function(e,t){return"success"===t?s.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?s.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?s.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?s.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(s.b)(e)}},148:function(e,t,c){"use strict";c.r(t);var s=c(63),n=(c(1),c(3));function r(e){var t=e.details,c=void 0===t?null:t,r=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(n.jsxs)(s.eb,{children:[Object(n.jsx)(s.s,{children:r}),c&&Object(n.jsxs)(s.s,{children:[Object(n.jsx)(s.eb,{children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(n.jsx)(s.eb,{className:"d-flex",children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,i=e.subtitle,a=e.creationModificationDate;return Object(n.jsxs)(s.i,{className:"shadow-none",children:[Object(n.jsx)(r,{details:a,title:c}),Object(n.jsxs)(s.j,{className:"p-4",children:[Object(n.jsx)(s.m,{className:"text-muted mb-3",children:i||""}),Object(n.jsx)("div",{children:t})]})]})}},206:function(e,t,c){"use strict";var s=c(185),n=c.n(s)()().format("DD-MM-YYYY h:mm:ss a");t.a=n}}]);
//# sourceMappingURL=91.6fc0cf4f.chunk.js.map