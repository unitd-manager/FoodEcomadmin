(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[66,169],{141:function(e,t,c){"use strict";var s=c(63),n=c(12),i=c(58),r=c(3);t.a=function(e){var t=Object(n.f)(),c=t.pathname.split("/")[1],j=t.pathname.split("/")[2];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:e.heading}),Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.d,{to:"/",tag:i.b,className:"text-decoration-none",children:"Home"}),c?Object(r.jsx)(s.d,{active:!0,children:c}):"",j?Object(r.jsx)(s.d,{active:!0,children:j}):""]})]})}},144:function(e,t,c){"use strict";var s=c(161);c(186);t.a=function(e,t){return"success"===t?s.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?s.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?s.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?s.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(s.b)(e)}},1461:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(9),i=c(27),r=c(1),j=c(63),d=c(12),a=(c(280),c(272),c(141)),l=c(148),b=c(144),o=c(7),h=c(3);function O(e){var t=e.financeDetails;return Object(h.jsx)(j.A,{children:Object(h.jsx)(j.C,{children:Object(h.jsxs)(j.eb,{children:[Object(h.jsx)(j.s,{md:"4",sm:"12",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:"Customer Name"}),Object(h.jsx)("br",{}),t&&t.cust_first_name]})}),Object(h.jsx)(j.s,{md:"4",sm:"12",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:" Address 1 "}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:t&&t.cust_address1})]})}),Object(h.jsx)(j.s,{md:"4",sm:"12",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:" Address 2 "}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:t&&t.cust_address2})]})}),Object(h.jsx)(j.s,{md:"4",sm:"12",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:" Country "}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:t&&t.cust_address_country})]})}),Object(h.jsx)(j.s,{md:"4",sm:"12",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:" Postal Code"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:t&&t.cust_address_po_code})]})})]})})})}var x=c(273);function u(e){var t=e.backToList,c=e.editFinanceData,s=e.navigate;return Object(h.jsx)(j.A,{children:Object(h.jsx)(j.C,{children:Object(h.jsx)(x.a,{children:Object(h.jsxs)(j.eb,{children:[Object(h.jsx)(j.s,{children:Object(h.jsx)(j.e,{className:"shadow-none",color:"primary",onClick:function(){c(),setTimeout((function(){s("/Orders")}),1100)},children:"Save"})}),Object(h.jsx)(j.s,{children:Object(h.jsx)(j.e,{className:"shadow-none",color:"primary",onClick:function(){c()},children:"Apply"})}),Object(h.jsx)(j.s,{children:Object(h.jsx)(j.e,{className:"shadow-none",color:"dark",onClick:function(){t(),s("/Orders")},children:"Back to List"})})]})})})})}var m=c(185),p=c.n(m);function f(e){var t=e.financeDetails,c=e.handleInputs;return Object(h.jsx)(j.A,{children:Object(h.jsx)(j.C,{children:Object(h.jsxs)(j.eb,{children:[Object(h.jsx)(j.s,{md:"3",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:" Shipping Name "}),Object(h.jsx)(j.E,{type:"text",onChange:c,value:t&&t.shipping_first_name,name:"shipping_first_name"})]})}),Object(h.jsx)(j.s,{md:"3",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:" Address 1 "}),Object(h.jsx)(j.E,{type:"text",onChange:c,value:t&&t.shipping_address1,name:"shipping_address1"})]})}),Object(h.jsx)(j.s,{md:"3",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:" Address 2 "}),Object(h.jsx)(j.E,{type:"text",onChange:c,value:t&&t.shipping_address2,name:"shipping_address2"})]})}),Object(h.jsx)(j.s,{md:"3",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:" Country "}),Object(h.jsx)(j.E,{type:"text",onChange:c,value:t&&t.shipping_address_country,name:"shipping_address_country"})]})}),Object(h.jsx)(j.s,{md:"3",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:" Postal Code "}),Object(h.jsx)(j.E,{type:"text",onChange:c,value:t&&t.shipping_address_po_code,name:"shipping_address_po_code"})]})}),Object(h.jsx)(j.s,{md:"3",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:" Delivery Date"}),Object(h.jsx)(j.E,{type:"date",onChange:c,value:t&&p()(t.delivery_date&&t.delivery_date).format("YYYY-MM-DD"),name:"delivery_date"})]})})]})})})}function g(e){var t=e.financeDetails,c=e.handleInputs;return Object(h.jsx)(j.A,{children:Object(h.jsx)(j.C,{children:Object(h.jsx)(l.default,{title:"Main Details",children:Object(h.jsxs)(j.eb,{children:[Object(h.jsx)(j.s,{md:"3",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:"Order Id "}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:[t&&t.order_id," "]})]})}),Object(h.jsx)(j.s,{md:"3",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:"Payment Method "}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:[t&&t.payment_method," "]})]})}),Object(h.jsx)(j.s,{md:"3",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:"Order Date"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:t&&t.order_date})]})}),Object(h.jsx)(j.s,{md:"3",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:"Delivery Date"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:t&&t.delivery_date})]})}),Object(h.jsx)(j.s,{md:"3",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:"Amount"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:t&&t.amount})]})}),Object(h.jsx)(j.s,{md:"3",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:"Status"}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:t&&t.order_status})]})}),Object(h.jsx)(j.s,{md:"3",children:Object(h.jsxs)(j.C,{children:[Object(h.jsx)(j.H,{children:"Published"}),Object(h.jsx)("br",{}),Object(h.jsx)(j.H,{children:"Yes"}),Object(h.jsx)(j.E,{name:"published",value:"1",type:"radio",defaultChecked:t&&1===t.published&&!0,onChange:c}),Object(h.jsx)(j.H,{children:"No"}),Object(h.jsx)(j.E,{name:"published",value:"0",type:"radio",defaultChecked:t&&0===t.published&&!0,onChange:c})]})})]})})})})}var v=c(206);function C(e){var t=e.historyDetails;return Object(h.jsx)(j.A,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(j.ib,{id:"example",children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:[{name:"Order Item"},{name:"Product Name"},{name:"Quantity"},{name:"Cost Price"},{name:"Delivery Date"}].map((function(e){return Object(h.jsx)("td",{children:e.name},e.name)}))})}),Object(h.jsx)("tbody",{children:t&&t.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.order_item_id}),Object(h.jsx)("td",{children:e.item_title}),Object(h.jsx)("td",{children:e.qty}),Object(h.jsx)("td",{children:e.unit_price}),Object(h.jsx)("td",{children:e.delivery_date}),Object(h.jsx)("td",{})]},e.order_item_id)}))})]})})})}t.default=function(){var e=Object(r.useState)("1"),t=Object(i.a)(e,2),c=t[0],x=t[1],m=Object(r.useState)(),p=Object(i.a)(m,2),_=p[0],y=p[1],D=Object(r.useState)(),H=Object(i.a)(D,2),N=H[0],k=H[1],A=Object(d.h)().id,P=Object(d.g)(),w=function(e){y(Object(n.a)(Object(n.a)({},_),{},Object(s.a)({},e.target.name,e.target.value)))},F=function(e){c!==e&&x(e)},I=function(){o.a.post("/orders/getFinancesById",{order_id:A}).then((function(e){y(e.data.data)})).catch((function(){Object(b.a)("Order Data Not Found","info")}))};return Object(r.useEffect)((function(){I(),o.a.post("/orders/getOrderHistoryById",{order_id:A}).then((function(e){k(e.data.data)})).catch((function(){Object(b.a)("Fianance Data Not Found","info")}))}),[A]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(a.a,{heading:_&&_.order_id}),Object(h.jsxs)(j.gb,{className:"p-4",activeTab:c,children:[Object(h.jsx)(u,{navigate:P,editFinanceData:function(){_.modification_date=v.a,o.a.post("/orders/editFinances",_).then((function(){Object(b.a)("Record editted successfully","success"),I()})).catch((function(){Object(b.a)("Unable to edit record.","error")}))},applyChanges:function(){},backToList:function(){P("/Orders")}}),Object(h.jsx)(g,{financeDetails:_,creationModificationDate:_,handleInputs:w}),Object(h.jsx)(j.eb,{children:Object(h.jsxs)(j.R,{tabs:!0,children:[Object(h.jsx)(j.S,{children:Object(h.jsx)(j.T,{className:"1"===c?"active":"",onClick:function(){F("1")},children:"Delivery Address"})}),Object(h.jsx)(j.S,{children:Object(h.jsx)(j.T,{className:"2"===c?"active":"",onClick:function(){F("2")},children:"Customer Details"})}),Object(h.jsx)(j.S,{children:Object(h.jsx)(j.T,{className:"3"===c?"active":"",onClick:function(){F("3")},children:"Product Details"})})]})}),Object(h.jsx)(j.hb,{tabId:"1",children:Object(h.jsx)(l.default,{title:"Delivery Address",children:Object(h.jsx)(f,{financeDetails:_,handleInputs:w})})}),Object(h.jsx)(j.hb,{tabId:"2",children:Object(h.jsx)(l.default,{title:"Finance Details",children:Object(h.jsx)(O,{financeDetails:_})})}),Object(h.jsx)(j.hb,{tabId:"3",children:Object(h.jsx)(l.default,{title:"Product Details",children:Object(h.jsx)(C,{historyDetails:N})})})]})]})}},148:function(e,t,c){"use strict";c.r(t);var s=c(63),n=(c(1),c(3));function i(e){var t=e.details,c=void 0===t?null:t,i=e.title;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(n.jsxs)(s.eb,{children:[Object(n.jsx)(s.s,{children:i}),c&&Object(n.jsxs)(s.s,{children:[Object(n.jsx)(s.eb,{children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",c&&c.created_by," ",c&&c.creation_date]})}),Object(n.jsx)(s.eb,{className:"d-flex",children:Object(n.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",c&&c.modified_by," ",c&&c.modification_date]})})]})]})})})}t.default=function(e){var t=e.children,c=e.title,r=e.subtitle,j=e.creationModificationDate;return Object(n.jsxs)(s.i,{className:"shadow-none",children:[Object(n.jsx)(i,{details:j,title:c}),Object(n.jsxs)(s.j,{className:"p-4",children:[Object(n.jsx)(s.m,{className:"text-muted mb-3",children:r||""}),Object(n.jsx)("div",{children:t})]})]})}},206:function(e,t,c){"use strict";var s=c(185),n=c.n(s)()().format("DD-MM-YYYY h:mm:ss a");t.a=n},272:function(e,t,c){},273:function(e,t,c){"use strict";var s=c(63),n=c(3),i={textAlign:"right",marginRight:"10px"},r={outline:"none",border:"none"};t.a=function(e){var t=e.children;return Object(n.jsx)(s.i,{className:"shadow-none",children:Object(n.jsx)(s.j,{style:i,children:Object(n.jsx)("div",{className:"btn btn-space text-nowrap shadow-none outline-none",style:r,children:t})})})}},280:function(e,t,c){}}]);
//# sourceMappingURL=66.7fb35c85.chunk.js.map