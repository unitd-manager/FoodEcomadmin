(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[56,169],{141:function(e,t,n){"use strict";var c=n(63),o=n(12),i=n(58),a=n(3);t.a=function(e){var t=Object(o.f)(),n=t.pathname.split("/")[1],s=t.pathname.split("/")[2];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:e.heading}),Object(a.jsxs)(c.c,{children:[Object(a.jsx)(c.d,{to:"/",tag:i.b,className:"text-decoration-none",children:"Home"}),n?Object(a.jsx)(c.d,{active:!0,children:n}):"",s?Object(a.jsx)(c.d,{active:!0,children:s}):""]})]})}},144:function(e,t,n){"use strict";var c=n(161);n(186);t.a=function(e,t){return"success"===t?c.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?c.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?c.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?c.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(c.b)(e)}},1475:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n(9),i=n(27),a=n(1),s=n(63),r=n(12),l=n(161),d=n(746),j=n(141),u=n(148),b=n(327),h=n(326),O=n(144),m=(n(280),n(272),n(7)),p=n(273),x=n(380),f=n(3);function g(e){var t=e.editSectionData,n=e.navigate,c=e.applyChanges,o=e.backToList,i=e.id;return Object(f.jsx)(s.A,{children:Object(f.jsx)(s.C,{children:Object(f.jsx)(p.a,{children:Object(f.jsxs)(s.eb,{children:[Object(f.jsx)(s.s,{children:Object(f.jsx)(s.e,{className:"shadow-none",color:"primary",onClick:function(){t(),setTimeout((function(){n("/Section")}),1100)},children:"Save"})}),Object(f.jsx)(s.s,{children:Object(f.jsx)(s.e,{className:"shadow-none",color:"primary",onClick:function(){t(),c()},children:"Apply"})}),Object(f.jsx)(s.s,{children:Object(f.jsx)(s.e,{className:"shadow-none",color:"dark",onClick:function(){window.confirm("Are you sure you want to cancel  \n  \n You will lose any changes made")?n("/Section"):c()},children:" Cancel"})}),Object(f.jsx)(s.s,{children:Object(f.jsx)(x.a,{pictureroom:"SectionPic",ifpiture:!0,id:i,columnname:"section_id",tablename:"section"})}),Object(f.jsx)(s.s,{children:Object(f.jsx)(s.e,{className:"shadow-none",color:"dark",onClick:function(){o()},children:"Back to List"})})]})})})})}var v=n(206);function y(e){var t=e.section,n=e.valuelist,c=e.handleInputs;return Object(f.jsxs)(s.eb,{children:[Object(f.jsx)(s.s,{md:"3",children:Object(f.jsxs)(s.C,{children:[Object(f.jsxs)(s.H,{children:["Title",Object(f.jsx)("span",{className:"required",children:" *"})]}),Object(f.jsx)(s.E,{type:"text",onChange:c,value:t&&t.section_title,name:"section_title"})]})}),Object(f.jsx)(s.s,{md:"4",children:Object(f.jsxs)(s.C,{children:[Object(f.jsx)(s.H,{children:"Section Type"}),Object(f.jsxs)(s.E,{type:"select",onChange:c,value:t&&t.section_type,name:"section_type",children:[Object(f.jsx)("option",{defaultValue:"selected",children:"Please Select"}),n&&n.map((function(e){return Object(f.jsx)("option",{value:e.value,children:e.value},e.value)}))]})]})}),Object(f.jsxs)(s.s,{md:"4",children:[Object(f.jsx)(s.H,{children:"Button Position"}),Object(f.jsxs)(s.E,{type:"select",onChange:c,value:t&&t.button_position,name:"button_position",children:[Object(f.jsx)("option",{defaultValue:"selected",children:"Please Select"}),Object(f.jsx)("option",{value:"Top",children:"Top"}),Object(f.jsx)("option",{value:"Admin",children:"Admin"}),Object(f.jsx)("option",{value:"Reports",children:"Reports"})]})]}),Object(f.jsxs)(s.s,{md:"3",children:[Object(f.jsx)(s.H,{children:"Groups"}),Object(f.jsxs)(s.E,{type:"select",onChange:c,value:t&&t.groups,name:"groups",children:[Object(f.jsx)("option",{defaultValue:"selected",children:"Please Select"}),Object(f.jsx)("option",{value:"Reports",children:"Reports"}),Object(f.jsx)("option",{value:"Home",children:"Home"}),Object(f.jsx)("option",{value:"Admin",children:"Admin"}),Object(f.jsx)("option",{value:"Main",children:"Main"})]})]}),Object(f.jsx)(s.s,{md:"4",children:Object(f.jsxs)(s.C,{children:[Object(f.jsx)(s.H,{children:"Routes"}),Object(f.jsx)(s.E,{type:"text",onChange:c,value:t&&t.routes,name:"routes"})]})}),Object(f.jsx)(s.s,{md:"4",children:Object(f.jsxs)(s.C,{children:[Object(f.jsx)(s.H,{children:"Number Of Rows"}),Object(f.jsx)(s.E,{type:"text",onChange:c,value:t&&t.number_of_rows,name:"number_of_rows"})]})}),Object(f.jsxs)(s.s,{md:"3",children:[Object(f.jsx)(s.H,{children:"Published"}),Object(f.jsxs)(s.C,{children:[Object(f.jsx)(s.E,{type:"radio",name:"published",value:"1",onChange:c,defaultChecked:t&&1===t.published&&!0}),Object(f.jsx)(s.H,{children:"Yes"}),Object(f.jsx)(s.E,{type:"radio",name:"published",value:"0",onChange:c,defaultChecked:t&&0===t.published&&!0}),Object(f.jsx)(s.H,{children:"No"})]})]})]})}var w=n(64);t.default=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],p=t[1],x=Object(a.useState)("1"),C=Object(i.a)(x,2),N=C[0],S=C[1],_=Object(a.useState)(!1),k=Object(i.a)(_,2),T=k[0],P=k[1],B=Object(a.useState)(""),D=Object(i.a)(B,2),A=D[0],M=D[1],I=Object(a.useState)(""),E=Object(i.a)(I,2),H=E[0],F=E[1],R=Object(a.useState)(),U=Object(i.a)(R,2),Y=U[0],G=U[1],L=Object(a.useState)({modelType:""}),z=Object(i.a)(L,2),J=z[0],V=z[1],q=Object(r.h)().id,Q=Object(r.g)(),W=function(e){N!==e&&S(e)},K=Object(a.useContext)(w.b).loggedInuser,X=function(){V({modelType:"picture"})},Z=function(){m.a.post("/section/getSectionById",{section_id:q}).then((function(e){p(e.data.data[0])})).catch((function(){Object(O.a)("Section Data Not Found","info")}))};return Object(a.useEffect)((function(){Z(),m.a.get("/section/getValueList").then((function(e){G(e.data.data)})).catch((function(){Object(O.a)("valuelist not found","info")}))}),[q]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{heading:n&&n.section_title}),Object(f.jsx)(g,{editSectionData:function(){""!==n.section_title?(n.modification_date=v.a,n.modified_by=K.first_name,m.a.post("/section/editSection",n).then((function(){Object(O.a)("Record editted successfully","success"),Z()})).catch((function(){Object(O.a)("Unable to edit record.","error")}))):Object(O.a)("Please fill all required fields","warning")},navigate:Q,applyChanges:function(){},DeleteSection:function(){m.a.post("/section/deleteSection",{section_id:q}).then((function(){Object(O.a)("Record editted successfully","success")})).catch((function(){Object(O.a)("Unable to edit record.","error")}))},backToList:function(){Q("/Section")},id:q}),Object(f.jsx)(s.A,{children:Object(f.jsx)(s.C,{children:Object(f.jsx)(u.default,{title:"Section Details",creationModificationDate:n,children:Object(f.jsx)(y,{handleInputs:function(e){p(Object(o.a)(Object(o.a)({},n),{},Object(c.a)({},e.target.name,e.target.value)))},section:n,valuelist:Y})})})}),Object(f.jsxs)(u.default,{children:[Object(f.jsx)(l.a,{}),Object(f.jsxs)(s.R,{tabs:!0,children:[Object(f.jsx)(s.S,{children:Object(f.jsx)(s.T,{className:"1"===N?"active":"",onClick:function(){W("1")},children:"Picture"})}),Object(f.jsx)(s.S,{children:Object(f.jsx)(s.T,{className:"2"===N?"active":"",onClick:function(){W("2")},children:"Banner"})})]}),Object(f.jsxs)(s.gb,{className:"p-4",activeTab:N,children:[Object(f.jsx)(s.hb,{tabId:"1",children:Object(f.jsx)(s.A,{children:Object(f.jsxs)(s.C,{children:[Object(f.jsx)(s.eb,{children:Object(f.jsx)(s.s,{xs:"12",md:"3",className:"mb-3",children:Object(f.jsx)(s.e,{className:"shadow-none",color:"primary",onClick:function(){M("SectionPic"),F(["JPG","PNG","GIF"]),X(),P(!0)},children:Object(f.jsx)(d.a,{className:"rounded-circle",width:"20"})})})}),Object(f.jsx)(h.a,{moduleId:q,attachmentModal:T,setAttachmentModal:P,roomName:A,fileTypes:H,altTagData:"Section Data",desc:"Section Data",recordType:"Picture",mediaType:J.modelType}),Object(f.jsx)(b.a,{moduleId:q,roomName:"SectionPic",recordType:"Picture"})]})})}),Object(f.jsx)(s.hb,{tabId:"2",children:Object(f.jsx)(s.A,{children:Object(f.jsxs)(s.C,{children:[Object(f.jsx)(s.eb,{children:Object(f.jsx)(s.s,{xs:"12",md:"3",className:"mb-3",children:Object(f.jsx)(s.e,{className:"shadow-none",color:"primary",onClick:function(){M("menu"),F(["JPG","PNG","GIF"]),X(),P(!0)},children:Object(f.jsx)(d.a,{className:"rounded-circle",width:"20"})})})}),Object(f.jsx)(h.a,{moduleId:q,attachmentModal:T,setAttachmentModal:P,roomName:A,fileTypes:H,altTagData:"Banner Data",desc:"Banner Data",recordType:"Picture",mediaType:J.modelType}),Object(f.jsx)(b.a,{moduleId:q,roomName:"menu",recordType:"Picture"})]})})})]})]})]})}},148:function(e,t,n){"use strict";n.r(t);var c=n(63),o=(n(1),n(3));function i(e){var t=e.details,n=void 0===t?null:t,i=e.title;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(c.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(o.jsxs)(c.eb,{children:[Object(o.jsx)(c.s,{children:i}),n&&Object(o.jsxs)(c.s,{children:[Object(o.jsx)(c.eb,{children:Object(o.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",n&&n.created_by," ",n&&n.creation_date]})}),Object(o.jsx)(c.eb,{className:"d-flex",children:Object(o.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",n&&n.modified_by," ",n&&n.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,n=e.title,a=e.subtitle,s=e.creationModificationDate;return Object(o.jsxs)(c.i,{className:"shadow-none",children:[Object(o.jsx)(i,{details:s,title:n}),Object(o.jsxs)(c.j,{className:"p-4",children:[Object(o.jsx)(c.m,{className:"text-muted mb-3",children:a||""}),Object(o.jsx)("div",{children:t})]})]})}},206:function(e,t,n){"use strict";var c=n(185),o=n.n(c)()().format("DD-MM-YYYY h:mm:ss a");t.a=o},272:function(e,t,n){},273:function(e,t,n){"use strict";var c=n(63),o=n(3),i={textAlign:"right",marginRight:"10px"},a={outline:"none",border:"none"};t.a=function(e){var t=e.children;return Object(o.jsx)(c.i,{className:"shadow-none",children:Object(o.jsx)(c.j,{style:i,children:Object(o.jsx)("div",{className:"btn btn-space text-nowrap shadow-none outline-none",style:a,children:t})})})}},326:function(e,t,n){"use strict";var c=n(27),o=n(1),i=n(63),a=n(498),s=n(7),r=n(144),l=n(3);t.a=function(e){var t=e.attachmentModal,n=e.setAttachmentModal,d=e.moduleId,j=e.roomName,u=e.fileTypes,b=e.altTagData,h=e.desc,O=Object(o.useState)([]),m=Object(c.a)(O,2),p=m[0],x=m[1],f=Object(o.useState)(),g=Object(c.a)(f,2),v=g[0],y=g[1],w=Object(o.useState)(null),C=Object(c.a)(w,2),N=C[0],S=C[1];return Object(l.jsx)("div",{children:Object(l.jsxs)(i.N,{isOpen:t,children:[Object(l.jsx)(i.Q,{children:"Upload Media"}),Object(l.jsxs)(i.O,{children:[Object(l.jsxs)(i.C,{children:[Object(l.jsx)(a.a,{multiple:!0,handleChange:function(e){var t=Object.entries(e).map((function(e){return e[1]}));x(e),y(t),console.log(e)},name:"file",types:u}),v?v.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:[" Name: ",e.name," "]})})})):Object(l.jsx)("span",{children:"No file selected"})]}),N&&Object(l.jsx)("div",{className:"progress mt-2",children:Object(l.jsx)("div",{className:"progress-bar h-4",role:"progressbar","aria-valuenow":N,"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(N,"%")},children:"".concat(N,"% uploaded")})})]}),Object(l.jsxs)(i.P,{children:[Object(l.jsx)(i.e,{color:"primary",className:"shadow-none",onClick:function(){!function(){if(p){var e=new FormData;Object.entries(p).map((function(e){return e[1]})).forEach((function(t){e.append("files",t)})),e.append("record_id",d),e.append("room_name",j),e.append("alt_tag_data",b),e.append("description",h),s.a.post("/file/uploadFiles",e,{onUploadProgress:function(e){console.log(Math.round(e.loaded/e.total*100)),S(Math.round(e.loaded/e.total*100))}}).then((function(){Object(r.a)("Files Uploaded Successfully","success"),setTimeout((function(){window.location.reload()}),400)})).catch((function(){n(!1),Object(r.a)("Unable to upload File","error")}))}else Object(r.a)("No files selected","info")}()},children:"Upload"}),Object(l.jsx)(i.e,{color:"secondary",className:"shadow-none",onClick:function(){window.location.reload(),n(!1)},children:"Cancel"})]})]})})}},327:function(e,t,n){"use strict";var c=n(27),o=n(1),i=n(316),a=n.n(i),s=n(527),r=n(144),l=n(7),d=n(3);t.a=function(e){var t=e.moduleId,n=e.roomName,i={},j=Object(o.useState)(null),u=Object(c.a)(j,2),b=u[0],h=u[1];return Object(o.useEffect)((function(){l.a.post("/file/getListOfFiles",{record_id:t,room_name:n}).then((function(e){h(e.data)}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("table",{style:i,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{style:i,children:[Object(d.jsx)("th",{style:i,children:"File Name"}),Object(d.jsx)("th",{width:"5%"})]})}),Object(d.jsx)("tbody",{children:b?b.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{style:i,children:Object(d.jsx)("a",{href:"http://43.228.126.245/united-ecomm-api/storage/uploads/".concat(e.name),target:"_blank",rel:"noreferrer",children:e.name})}),Object(d.jsx)("td",{style:i,children:Object(d.jsxs)("button",{type:"button",className:"btn shadow-none",onClick:function(){var t;t=e.media_id,a.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&l.a.post("/file/deleteFile",{media_id:t}).then((function(e){console.log(e),a.a.fire("Deleted!","Media has been deleted.","success"),window.location.reload()})).catch((function(){Object(r.a)("Unable to Delete Media","info")}))}))},children:[Object(d.jsx)(s.a,{})," "]})})]},e.media_id)})):Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("p",{children:"no files uploaded yet"})})})})]})})}},380:function(e,t,n){"use strict";n(1);var c=n(12),o=n(63),i=n(316),a=n.n(i),s=n(527),r=n(7),l=n(144),d=n(3);t.a=function(e){var t=e.id,n=e.columnname,i=e.tablename,j=e.ifpiture,u=void 0!==j&&j,b=e.ifAttachment,h=void 0!==b&&b,O=e.pictureroom,m=e.attachmentroom,p=Object(c.g)(),x=function(e,t){r.a.post("/file/deleteFileByRoomNameAndId",{room_name:t,record_id:e}).then((function(e){200===e.status?(Object(l.a)("Media and Records files deleted.","error"),p(-1)):Object(l.a)("Unable to delete record.","error")})).catch((function(){Object(l.a)("Network connection error.")}))},f=function(){a.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&r.a.post("/commonApi/deleteRecord",{idvalue:t,columnname:n,tablename:i}).then((function(e){200===e.status?u?x(t,O):h?x(t,m):(Object(l.a)("Record deleted successfully."),p(-1)):Object(l.a)("Unable to delete record.","error")})).catch((function(){Object(l.a)("Network connection error.")}))}))};return Object(d.jsxs)(o.e,{color:"danger",onClick:function(){f()},children:["Delete ",Object(d.jsx)(s.a,{size:20})]})}},746:function(e,t,n){"use strict";var c=n(1),o=n.n(c),i=n(0),a=n.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},s.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,c,o=function(e,t){if(null==e)return{};var n,c,o={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=Object(c.forwardRef)((function(e,t){var n=e.color,c=void 0===n?"currentColor":n,i=e.size,a=void 0===i?24:i,l=r(e,["color","size"]);return o.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),o.a.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),o.a.createElement("polyline",{points:"21 15 16 10 5 21"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},l.displayName="Image",t.a=l}}]);
//# sourceMappingURL=56.362e2ac6.chunk.js.map