(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[58,168],{141:function(e,t,n){"use strict";var c=n(63),r=n(12),i=n(58),a=n(3);t.a=function(e){var t=Object(r.f)(),n=t.pathname.split("/")[1],s=t.pathname.split("/")[2];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:e.heading}),Object(a.jsxs)(c.c,{children:[Object(a.jsx)(c.d,{to:"/",tag:i.b,className:"text-decoration-none",children:"Home"}),n?Object(a.jsx)(c.d,{active:!0,children:n}):"",s?Object(a.jsx)(c.d,{active:!0,children:s}):""]})]})}},1429:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(9),i=n(27),a=n(1),s=n(63),o=n(160),l=n(12),j=(n(281),n(272),n(141)),d=n(147),b=n(273),u=n(143),h=n(7),O=n(219),x=n(384),m=n(3);t.default=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],f=t[1],p=Object(a.useState)(),v=Object(i.a)(p,2),g=v[0],y=v[1],C=Object(l.h)().id,w=Object(l.g)(),k=function(e){f(Object(r.a)(Object(r.a)({},n),{},Object(c.a)({},e.target.name,e.target.value)))},N=function(){n.modification_date=O.a,""!==n.key_text?h.a.post("/setting/editSetting",n).then((function(){Object(u.a)("Record editted successfully","success")})).catch((function(){Object(u.a)("Unable to edit record.","error")})):Object(u.a)("Please fill all required fields.","error")};return Object(a.useEffect)((function(){h.a.post("/setting/getSettings",{setting_id:C}).then((function(e){f(e.data.data[0]),y(e.data.data[0].value_type)})).catch((function(){Object(u.a)("setting Data Not Found","info")}))}),[C]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j.a,{}),Object(m.jsx)(s.A,{children:Object(m.jsxs)(s.C,{children:[Object(m.jsx)(o.a,{}),Object(m.jsx)(b.a,{children:Object(m.jsxs)(s.eb,{children:[Object(m.jsx)(s.s,{children:Object(m.jsx)(s.e,{className:"shadow-none",color:"primary",onClick:function(){N(),setTimeout((function(){w("/Setting")}),1100)},children:"Save"})}),Object(m.jsx)(s.s,{children:Object(m.jsx)(s.e,{className:"shadow-none",color:"primary",onClick:function(){N()},children:"Apply"})}),Object(m.jsx)(s.s,{children:Object(m.jsx)(s.e,{type:"submit",className:"btn btn-dark shadow-none",onClick:function(e){window.confirm("Are you sure you want to cancel? ")?w("/Setting"):e.preventDefault()},children:"Cancel"})}),Object(m.jsx)(s.s,{children:Object(m.jsx)(x.a,{id:C,columnname:"setting_id",tablename:"setting"})}),Object(m.jsx)(s.s,{children:Object(m.jsx)(s.e,{className:"shadow-none",color:"dark",onClick:function(){w("/Setting")},children:"Back to List"})})]})})]})}),Object(m.jsx)(s.A,{children:Object(m.jsx)(s.C,{children:Object(m.jsxs)(d.default,{title:"Setting Details",creationModificationDate:n,children:[" ",Object(m.jsx)(o.a,{}),Object(m.jsxs)(s.eb,{children:[Object(m.jsx)(s.s,{md:"4",children:Object(m.jsxs)(s.C,{children:[Object(m.jsx)(s.H,{children:"Key Text"}),Object(m.jsx)(s.E,{type:"text",onChange:k,value:n&&n.key_text,name:"key_text"})]})}),Object(m.jsx)(s.s,{md:"4",children:Object(m.jsxs)(s.C,{children:[Object(m.jsx)(s.H,{children:"Description"}),Object(m.jsx)(s.E,{type:"textarea",onChange:k,value:n&&n.description,name:"description"})]})}),g&&"Text Area"===g&&Object(m.jsx)(s.s,{md:"4",children:Object(m.jsxs)(s.C,{children:[Object(m.jsx)(s.H,{children:"Value"}),Object(m.jsx)(s.E,{type:"textarea",onChange:k,value:n&&n.value,name:"value"})]})}),g&&"Yes No"===g&&Object(m.jsx)(s.s,{md:"4",children:Object(m.jsxs)(s.C,{children:[Object(m.jsx)(s.H,{children:" Value"}),Object(m.jsx)("br",{}),Object(m.jsx)(s.H,{children:" Yes "}),Object(m.jsx)(s.E,{name:"value",value:"1",type:"radio",defaultChecked:n&&"1"===n.value&&!0,onChange:k}),Object(m.jsx)(s.H,{children:" No "}),Object(m.jsx)(s.E,{name:"value",value:"0",type:"radio",defaultChecked:n&&"0"===n.value&&!0,onChange:k})]})}),g&&"Text field"===g&&Object(m.jsx)(s.s,{md:"4",children:Object(m.jsxs)(s.C,{children:[Object(m.jsx)(s.H,{children:"Value"}),Object(m.jsx)(s.E,{type:"text",onChange:k,value:n&&n.value,name:"value"})]})}),g&&""===g&&Object(m.jsx)(s.s,{md:"4",children:Object(m.jsxs)(s.C,{children:[Object(m.jsx)(s.H,{children:"Value"}),Object(m.jsx)(s.E,{type:"textarea",onChange:k,value:n&&n.value,name:"value"})]})}),g&&"Number Field"===g&&Object(m.jsx)(s.s,{md:"4",children:Object(m.jsxs)(s.C,{children:[Object(m.jsx)(s.H,{children:"Value"}),Object(m.jsx)(s.E,{type:"numbers",onChange:k,value:n&&n.value,name:"value"})]})}),Object(m.jsx)(s.s,{md:"4",children:Object(m.jsxs)(s.C,{children:[Object(m.jsx)(s.H,{children:"Value Text"}),Object(m.jsxs)(s.E,{type:"select",value:n&&n.value_type,name:"value_type",onChange:k,children:[Object(m.jsx)("option",{defaultValue:"selected",children:"Please Select"}),Object(m.jsx)("option",{value:"Yes No",children:"Yes No"}),Object(m.jsx)("option",{value:"Text field",children:"Text field"}),Object(m.jsx)("option",{value:"Text Area",children:"Text Area"}),Object(m.jsx)("option",{value:"Number Field",children:"Number Field"})]})]})}),Object(m.jsx)(s.s,{md:"4",children:Object(m.jsxs)(s.C,{children:[Object(m.jsx)(s.H,{children:"Published"}),Object(m.jsx)("br",{}),Object(m.jsx)(s.H,{children:"Yes"}),Object(m.jsx)(s.E,{name:"published",value:"1",type:"radio",defaultChecked:n&&1===n.published&&!0,onChange:k}),Object(m.jsx)(s.H,{children:"No"}),Object(m.jsx)(s.E,{name:"published",value:"0",type:"radio",defaultChecked:n&&0===n.published&&!0,onChange:k})]})})]})]})})})]})}},143:function(e,t,n){"use strict";var c=n(160);n(184);t.a=function(e,t){return"success"===t?c.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?c.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?c.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?c.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(c.b)(e)}},147:function(e,t,n){"use strict";n.r(t);var c=n(63),r=(n(1),n(3));function i(e){var t=e.details,n=void 0===t?null:t,i=e.title;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(c.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(r.jsxs)(c.eb,{children:[Object(r.jsx)(c.s,{children:i}),n&&Object(r.jsxs)(c.s,{children:[Object(r.jsx)(c.eb,{children:Object(r.jsxs)("small",{children:["Modification Date: ",n&&n.modification_date]})}),Object(r.jsx)(c.eb,{className:"d-flex",children:Object(r.jsxs)("small",{children:["Creation Date: ",n&&n.creation_date]})})]})]})})})}t.default=function(e){var t=e.children,n=e.title,a=e.subtitle,s=e.creationModificationDate;return Object(r.jsxs)(c.i,{className:"shadow-none",children:[Object(r.jsx)(i,{details:s,title:n}),Object(r.jsxs)(c.j,{className:"p-4",children:[Object(r.jsx)(c.m,{className:"text-muted mb-3",children:a||""}),Object(r.jsx)("div",{children:t})]})]})}},219:function(e,t,n){"use strict";var c=n(189),r=n.n(c)()().format("DD-MM-YYYY h:mm:ss a");t.a=r},272:function(e,t,n){},273:function(e,t,n){"use strict";var c=n(63),r=n(3),i={textAlign:"right",marginRight:"10px"},a={outline:"none",border:"none"};t.a=function(e){var t=e.children;return Object(r.jsx)(c.i,{className:"shadow-none",children:Object(r.jsx)(c.j,{style:i,children:Object(r.jsx)("div",{className:"btn btn-space text-nowrap shadow-none outline-none",style:a,children:t})})})}},281:function(e,t,n){},384:function(e,t,n){"use strict";n(1);var c=n(12),r=n(63),i=n(316),a=n.n(i),s=n(527),o=n(7),l=n(143),j=n(3);t.a=function(e){var t=e.id,n=e.columnname,i=e.tablename,d=e.ifpiture,b=void 0!==d&&d,u=e.ifAttachment,h=void 0!==u&&u,O=e.pictureroom,x=e.attachmentroom,m=Object(c.g)(),f=function(e,t){o.a.post("/file/deleteFileByRoomNameAndId",{room_name:t,record_id:e}).then((function(e){200===e.status?(Object(l.a)("Media and Records files deleted.","error"),m(-1)):Object(l.a)("Unable to delete record.","error")})).catch((function(){Object(l.a)("Network connection error.")}))},p=function(){a.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&o.a.post("/commonApi/deleteRecord",{idvalue:t,columnname:n,tablename:i}).then((function(e){200===e.status?b?f(t,O):h?f(t,x):(Object(l.a)("Record deleted successfully."),m(-1)):Object(l.a)("Unable to delete record.","error")})).catch((function(){Object(l.a)("Network connection error.")}))}))};return Object(j.jsxs)(r.e,{color:"danger",onClick:function(){p()},children:["Delete ",Object(j.jsx)(s.a,{size:20})]})}},527:function(e,t,n){"use strict";var c=n(1),r=n.n(c),i=n(0),a=n.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(c.forwardRef)((function(e,t){var n=e.color,c=void 0===n?"currentColor":n,i=e.size,a=void 0===i?24:i,l=o(e,["color","size"]);return r.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"3 6 5 6 21 6"}),r.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),r.a.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),r.a.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="Trash2",t.a=l}}]);
//# sourceMappingURL=58.2b214e45.chunk.js.map