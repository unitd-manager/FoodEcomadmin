(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[71,168],{141:function(e,t,c){"use strict";var n=c(63),r=c(12),o=c(58),i=c(3);t.a=function(e){var t=Object(r.f)(),c=t.pathname.split("/")[1],s=t.pathname.split("/")[2];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:e.heading}),Object(i.jsxs)(n.c,{children:[Object(i.jsx)(n.d,{to:"/",tag:o.b,className:"text-decoration-none",children:"Home"}),c?Object(i.jsx)(n.d,{active:!0,children:c}):"",s?Object(i.jsx)(n.d,{active:!0,children:s}):""]})]})}},143:function(e,t,c){"use strict";var n=c(160);c(184);t.a=function(e,t){return"success"===t?n.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?n.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?n.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?n.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(n.b)(e)}},147:function(e,t,c){"use strict";c.r(t);var n=c(63),r=(c(1),c(3));function o(e){var t=e.details,c=void 0===t?null:t,o=e.title;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(n.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(r.jsxs)(n.eb,{children:[Object(r.jsx)(n.s,{children:o}),c&&Object(r.jsxs)(n.s,{children:[Object(r.jsx)(n.eb,{children:Object(r.jsxs)("small",{children:["Modification Date: ",c&&c.modification_date]})}),Object(r.jsx)(n.eb,{className:"d-flex",children:Object(r.jsxs)("small",{children:["Creation Date: ",c&&c.creation_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,i=e.subtitle,s=e.creationModificationDate;return Object(r.jsxs)(n.i,{className:"shadow-none",children:[Object(r.jsx)(o,{details:s,title:c}),Object(r.jsxs)(n.j,{className:"p-4",children:[Object(r.jsx)(n.m,{className:"text-muted mb-3",children:i||""}),Object(r.jsx)("div",{children:t})]})]})}},1487:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(9),o=c(27),i=c(1),s=c.n(i),a=c(63),l=c(158),d=c(12),u=c(160),j=c(75),h=c(147),b=c(141),p=c(7),O=c(219),x=c(143),m=c(273),f=c(384),g=c(3);var v=function(e){var t=e.id,c=e.applyChanges,n=e.backToList,r=e.editUserGroupData,o=e.editRoomUserGroup,i=e.navigate;return Object(g.jsx)("div",{children:Object(g.jsx)(a.A,{children:Object(g.jsx)(a.C,{children:Object(g.jsx)(m.a,{children:Object(g.jsxs)(a.eb,{children:[Object(g.jsx)(a.s,{children:Object(g.jsx)(a.e,{className:"shadow-none",color:"primary",onClick:function(){r(),o(),setTimeout((function(){i("/UserGroup")}),300)},children:"Save"})}),Object(g.jsx)(a.s,{children:Object(g.jsx)(a.e,{className:"shadow-none",color:"primary",onClick:function(){r(),o(),c()},children:"Apply"})}),Object(g.jsx)(a.s,{children:Object(g.jsx)(a.e,{className:"shadow-none",color:"dark",onClick:function(){window.confirm("Are you sure you want to cancel  \n  \n You will lose any changes made")?i("/UserGroup"):c()},children:"Cancel"})}),Object(g.jsx)(a.s,{children:Object(g.jsx)(f.a,{id:t,columnname:"user_group_id",tablename:"user_group"})}),Object(g.jsx)(a.s,{children:Object(g.jsx)(a.e,{className:"shadow-none",color:"dark",onClick:function(){n()},children:"Back to List"})})]})})})})})},y=c(77),C=void 0;t.default=function(){var e=Object(i.useState)({}),t=Object(o.a)(e,2),c=t[0],m=t[1],f=Object(i.useState)([]),k=Object(o.a)(f,2),_=k[0],w=k[1],E=s.a.useContext(y.b).loggedInuser,N=Object(j.usePermify)().setUser,U=Object(d.h)().id,A=Object(d.g)(),R=function(e){m(Object(r.a)(Object(r.a)({},c),{},Object(n.a)({},e.target.name,e.target.value)))},B=function(){p.a.post("/usergroup/getroomusergroupById",{user_group_id:U}).then((function(e){if(w(e.data.data),U===E.user_group_id){var t=e.data.data,c=[];t.forEach((function(e){e.edit&&c.push("".concat(e.section_title,"-edit")),e.detail&&c.push("".concat(e.section_title,"-detail")),e.duplicate&&c.push("".concat(e.section_title,"-duplicate")),e.export&&c.push("".concat(e.section_title,"-export")),e.import&&c.push("".concat(e.section_title,"-import")),e.list&&c.push("".concat(e.section_title,"-list")),e.new&&c.push("".concat(e.section_title,"-new")),e.print&&c.push("".concat(e.section_title,"-print")),e.publish&&c.push("".concat(e.section_title,"-publish")),e.remove&&c.push("".concat(e.section_title,"-remove"))})),N({id:"1",roles:["admin"],permissions:c})}})).catch((function(){Object(x.a)("Unable to get room user record.","error")}))},D=function(e){p.a.post("/usergroup/edit-roomusergroup",e).then((function(){Object(x.a)("Record edited successfully","success"),B()})).catch((function(){Object(x.a)("Unable to edit record.","error")}))},G=function(e,t){t=Object(r.a)(Object(r.a)({},t),{},{modification_date:O.a}),t=Object(r.a)(Object(r.a)({},t),{},Object(n.a)({},e.target.name,!0===e.target.checked?1:0)),console.log(t),t.room_user_group_id?D(t):function(e){p.a.post("/usergroup/insertRoomUserGroup",e).then((function(){Object(x.a)("Record edited successfully","success"),B()})).catch((function(){Object(x.a)("Unable to edit record.","error")}))}(t=Object(r.a)(Object(r.a)({},t),{},{user_group_id:U}))};return Object(i.useEffect)((function(){p.a.post("/usergroup/getusergroupById",{user_group_id:U}).then((function(e){m(e.data.data[0])})).catch((function(){Object(x.a)("userGroupDetails Data Not Found","info")})),B()}),[U]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"MainDiv",children:Object(g.jsxs)("div",{className:"",children:[Object(g.jsx)(u.a,{}),Object(g.jsxs)(a.eb,{children:[Object(g.jsx)(b.a,{heading:c&&c.title}),Object(g.jsx)(v,{id:U,applyChanges:function(){},backToList:function(){A("/UserGroup")},deleteUserGroupData:function(){p.a.post("/usergroup/deleteUserGroup",{user_group_id:U}).then((function(){Object(x.a)("Record deleted successfully","success")})).catch((function(){Object(x.a)("Unable to delete record.","error")}))},editUserGroupData:function(){p.a.post("/usergroup/edit-usergroup",c).then((function(){Object(x.a)("Record edited successfully","success")})).catch((function(){Object(x.a)("Unable to edit record.","error")}))},editRoomUserGroup:function(){var e=[];l("#example tbody tr").each((function(){var t={};l(C).find("input").each((function(){var e=l(C).attr("name");t.user_group_id=U,t[e]=l(C).val()})),e.push(t)})),console.log(e),e.forEach((function(e){D(e)}))},navigate:A}),Object(g.jsx)(a.A,{children:Object(g.jsx)(a.C,{children:Object(g.jsx)(h.default,{title:"UserGroup Details",children:Object(g.jsxs)(a.eb,{children:[Object(g.jsx)(a.s,{md:"6",children:Object(g.jsxs)(a.C,{children:[Object(g.jsx)(a.H,{children:"Title"}),Object(g.jsx)(a.E,{type:"text",value:c&&c.section_title,onChange:R,name:"title"})]})}),Object(g.jsx)(a.s,{md:"6",children:Object(g.jsxs)(a.C,{children:[Object(g.jsx)(a.H,{children:"UserGroup Type"}),Object(g.jsxs)(a.E,{type:"select",value:c&&c.user_group_type,onChange:R,name:"user_group_type",children:[Object(g.jsx)("option",{value:"Super Administrator",defaultValue:"selected",children:"Super Administrator"}),Object(g.jsx)("option",{value:"Administrator",children:"Administrator"}),Object(g.jsx)("option",{value:"User",children:"User"})]})]})})]})})})})]}),Object(g.jsx)(h.default,{title:"Actions",children:Object(g.jsxs)(a.ib,{id:"example",className:"display border border-secondary rounded",children:[Object(g.jsx)("thead",{children:Object(g.jsx)("tr",{children:[{name:"room name"},{name:"list"},{name:"detail"},{name:"new"},{name:"edit"},{name:"delete"},{name:"publish"},{name:"un-publish"},{name:"print"},{name:"import"},{name:"export"}].map((function(e){return Object(g.jsx)("td",{children:e.name},e.name)}))})}),Object(g.jsx)("tbody",{children:Object(g.jsx)("tr",{className:"w-100 bg-primary text-white",children:Object(g.jsx)("td",{children:"Modules"})})}),Object(g.jsx)("tbody",{children:_&&_.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:Object(g.jsx)(a.E,{type:"text",name:"section_title",value:e.section_title,disabled:!0})}),Object(g.jsx)("td",{children:Object(g.jsx)(a.C,{check:!0,children:Object(g.jsx)(a.E,{type:"checkbox",value:"1",name:"list",onChange:function(t){G(t,e)},defaultChecked:e.list})})}),Object(g.jsx)("td",{children:Object(g.jsx)(a.C,{check:!0,children:Object(g.jsx)(a.E,{type:"checkbox",value:"1",name:"detail",onChange:function(t){G(t,e)},defaultChecked:e.detail})})}),Object(g.jsx)("td",{children:Object(g.jsx)(a.C,{check:!0,children:Object(g.jsx)(a.E,{type:"checkbox",value:"1",name:"new",onChange:function(t){G(t,e)},defaultChecked:e.new})})}),Object(g.jsx)("td",{children:Object(g.jsx)(a.C,{check:!0,children:Object(g.jsx)(a.E,{type:"checkbox",value:"1",name:"edit",onChange:function(t){G(t,e)},defaultChecked:e.edit})})}),Object(g.jsx)("td",{children:Object(g.jsx)(a.C,{check:!0,children:Object(g.jsx)(a.E,{type:"checkbox",value:"1",name:"remove",onChange:function(t){G(t,e)},defaultChecked:e.remove})})}),Object(g.jsx)("td",{children:Object(g.jsx)(a.C,{check:!0,children:Object(g.jsx)(a.E,{type:"checkbox",value:"1",name:"publish",onChange:function(t){G(t,e)},defaultChecked:e.publish})})}),Object(g.jsx)("td",{children:Object(g.jsx)(a.C,{check:!0,children:Object(g.jsx)(a.E,{type:"checkbox",value:"1",name:"unpublish",onChange:function(t){G(t,e)},defaultChecked:e.unpublish})})}),Object(g.jsx)("td",{children:Object(g.jsx)(a.C,{check:!0,children:Object(g.jsx)(a.E,{type:"checkbox",value:"1",name:"print",onChange:function(t){G(t,e)},defaultChecked:e.print})})}),Object(g.jsx)("td",{children:Object(g.jsx)(a.C,{check:!0,children:Object(g.jsx)(a.E,{type:"checkbox",value:"1",name:"import",onChange:function(t){G(t,e)},defaultChecked:e.import})})}),Object(g.jsx)("td",{children:Object(g.jsx)(a.C,{check:!0,children:Object(g.jsx)(a.E,{type:"checkbox",value:"1",name:"export",onChange:function(t){G(t,e)},defaultChecked:e.export})})})]},e.section_id)}))}),Object(g.jsx)("tbody",{children:Object(g.jsx)("tr",{className:"bg-primary text-white w-100",children:Object(g.jsx)("td",{children:"Reports / Widgets"})})})]})})]})})})}},219:function(e,t,c){"use strict";var n=c(189),r=c.n(n)()().format("DD-MM-YYYY h:mm:ss a");t.a=r},273:function(e,t,c){"use strict";var n=c(63),r=c(3),o={textAlign:"right",marginRight:"10px"},i={outline:"none",border:"none"};t.a=function(e){var t=e.children;return Object(r.jsx)(n.i,{className:"shadow-none",children:Object(r.jsx)(n.j,{style:o,children:Object(r.jsx)("div",{className:"btn btn-space text-nowrap shadow-none outline-none",style:i,children:t})})})}},384:function(e,t,c){"use strict";c(1);var n=c(12),r=c(63),o=c(316),i=c.n(o),s=c(527),a=c(7),l=c(143),d=c(3);t.a=function(e){var t=e.id,c=e.columnname,o=e.tablename,u=e.ifpiture,j=void 0!==u&&u,h=e.ifAttachment,b=void 0!==h&&h,p=e.pictureroom,O=e.attachmentroom,x=Object(n.g)(),m=function(e,t){a.a.post("/file/deleteFileByRoomNameAndId",{room_name:t,record_id:e}).then((function(e){200===e.status?(Object(l.a)("Media and Records files deleted.","error"),x(-1)):Object(l.a)("Unable to delete record.","error")})).catch((function(){Object(l.a)("Network connection error.")}))},f=function(){i.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&a.a.post("/commonApi/deleteRecord",{idvalue:t,columnname:c,tablename:o}).then((function(e){200===e.status?j?m(t,p):b?m(t,O):(Object(l.a)("Record deleted successfully."),x(-1)):Object(l.a)("Unable to delete record.","error")})).catch((function(){Object(l.a)("Network connection error.")}))}))};return Object(d.jsxs)(r.e,{color:"danger",onClick:function(){f()},children:["Delete ",Object(d.jsx)(s.a,{size:20})]})}},527:function(e,t,c){"use strict";var n=c(1),r=c.n(n),o=c(0),i=c.n(o);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},s.apply(this,arguments)}function a(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)c=o[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)c=o[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}var l=Object(n.forwardRef)((function(e,t){var c=e.color,n=void 0===c?"currentColor":c,o=e.size,i=void 0===o?24:o,l=a(e,["color","size"]);return r.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"3 6 5 6 21 6"}),r.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),r.a.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),r.a.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="Trash2",t.a=l}}]);
//# sourceMappingURL=71.9eaede9d.chunk.js.map