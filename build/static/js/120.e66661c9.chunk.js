(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[120,169],{141:function(a,t,e){"use strict";var s=e(63),i=e(12),r=e(58),n=e(3);t.a=function(a){var t=Object(i.f)(),e=t.pathname.split("/")[1],l=t.pathname.split("/")[2];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:a.heading}),Object(n.jsxs)(s.c,{children:[Object(n.jsx)(s.d,{to:"/",tag:r.b,className:"text-decoration-none",children:"Home"}),e?Object(n.jsx)(s.d,{active:!0,children:e}):"",l?Object(n.jsx)(s.d,{active:!0,children:l}):""]})]})}},148:function(a,t,e){"use strict";e.r(t);var s=e(63),i=(e(1),e(3));function r(a){var t=a.details,e=void 0===t?null:t,r=a.title;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(s.o,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:Object(i.jsxs)(s.eb,{children:[Object(i.jsx)(s.s,{children:r}),e&&Object(i.jsxs)(s.s,{children:[Object(i.jsx)(s.eb,{children:Object(i.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Creation: ",e&&e.created_by," ",e&&e.creation_date]})}),Object(i.jsx)(s.eb,{className:"d-flex",children:Object(i.jsxs)("span",{style:{fontSize:"0.7em"},children:[" Modified: ",e&&e.modified_by," ",e&&e.modification_date]})})]})]})})})}t.default=function(a){var t=a.children,e=a.title,n=a.subtitle,l=a.creationModificationDate;return Object(i.jsxs)(s.i,{className:"shadow-none",children:[Object(i.jsx)(r,{details:l,title:e}),Object(i.jsxs)(s.j,{className:"p-4",children:[Object(i.jsx)(s.m,{className:"text-muted mb-3",children:n||""}),Object(i.jsx)("div",{children:t})]})]})}},1487:function(a,t,e){"use strict";e.r(t);e(1);var s=e(657),i=e(63),r=function(){return Math.round(100*Math.random())},n={doughnutData:{data:[400,50,100,80,150]},pieData:{data:[300,50,100]},barData:{data:{a:[r(),r(),r(),r(),r(),r(),r()],b:[r(),r(),r(),r(),r(),r(),r()]}},lineData:{data:{a:[r(),r(),r(),r(),r(),r(),r()],b:[r(),r(),r(),r(),r(),r(),r()]}},radarData:{data:{a:[65,59,90,81,56,55,40],b:[28,48,40,19,96,27,100]}},polarData:{data:[11,16,7,3]}},l=e(141),o=e(148),d=e(3),c={labels:["Red","Blue","Yellow","Green","Orange"],datasets:[{data:n.doughnutData.data,backgroundColor:["#dc3545","#2962ff","#fb6340","#2dce89","#4fc3f7"],hoverBackgroundColor:["#dc3545","#2962ff","#fb6340","#2dce89","#4fc3f7"]}]},b={labels:["Green","Yellow","Blue"],datasets:[{data:n.pieData.data,backgroundColor:["#2dce89","#5e72e4","#23b7e5"],hoverBackgroundColor:["#2dce89","#5e72e4","#23b7e5"]}]},j={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Apple",backgroundColor:"#2962ff",borderColor:"#2962ff",data:n.barData.data.a},{label:"Google",backgroundColor:"#4fc3f7",borderColor:"#4fc3f7",data:n.barData.data.b}]},h={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Income",backgroundColor:"rgb(79, 195, 247)",borderColor:"rgb(79, 195, 247)",pointBorderColor:"#fff",data:n.lineData.data.a},{label:"Outcome",backgroundColor:"rgb(246, 249, 252)",borderColor:"rgb(246, 249, 252)",pointBorderColor:"#fff",data:n.lineData.data.b}]},f={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"Apple",backgroundColor:"rgba(246, 45, 81,0.2)",borderColor:"rgba(246, 45, 81,1)",data:n.radarData.data.a},{label:"Google",backgroundColor:"rgba(45, 206, 137,0.2)",borderColor:"rgba(45, 206, 137,1)",data:n.radarData.data.b}]},u={datasets:[{data:n.polarData.data,backgroundColor:["#dc3545","#2962ff","#fb6340","#2dce89"],label:"My dataset"}],labels:["Label 1","Label 2","Label 3","Label 4"]};t.default=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(l.a,{}),Object(d.jsxs)(i.eb,{children:[Object(d.jsx)(i.s,{md:"6",children:Object(d.jsx)(o.default,{title:"Pie Chart",children:Object(d.jsx)("div",{className:"chart-wrapper",style:{width:"100%",margin:"0 auto",height:350},children:Object(d.jsx)(s.Pie,{data:b,options:{maintainAspectRatio:!1,legend:{display:!0,labels:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}}})})})}),Object(d.jsx)(i.s,{md:"6",children:Object(d.jsx)(o.default,{title:"Bar Chart",children:Object(d.jsx)("div",{className:"chart-wrapper",style:{width:"100%",margin:"0 auto",height:350},children:Object(d.jsx)(s.Bar,{data:j,options:{maintainAspectRatio:!1,legend:{display:!0,labels:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}},scales:{yAxes:[{gridLines:{display:!1},ticks:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}],xAxes:[{gridLines:{display:!1},ticks:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}]}}})})})}),Object(d.jsx)(i.s,{md:"6",children:Object(d.jsx)(o.default,{title:"Doughnut Chart",children:Object(d.jsx)("div",{className:"chart-wrapper",style:{width:"100%",margin:"0 auto",height:350},children:Object(d.jsx)(s.Doughnut,{data:c,options:{maintainAspectRatio:!1,legend:{display:!0,labels:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}}})})})}),Object(d.jsx)(i.s,{md:"6",children:Object(d.jsx)(o.default,{title:"Line Chart",children:Object(d.jsx)("div",{className:"chart-wrapper",style:{width:"100%",margin:"0 auto",height:350},children:Object(d.jsx)(s.Line,{data:h,options:{maintainAspectRatio:!1,legend:{display:!0,labels:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}},scales:{yAxes:[{gridLines:{display:!1},ticks:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}],xAxes:[{gridLines:{display:!1},ticks:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}]}}})})})}),Object(d.jsx)(i.s,{md:"6",children:Object(d.jsx)(o.default,{title:"Polar Chart",children:Object(d.jsx)("div",{className:"chart-wrapper",style:{width:"100%",margin:"0 auto",height:350},children:Object(d.jsx)(s.Polar,{data:u,options:{maintainAspectRatio:!1,legend:{display:!0,labels:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}}})})})}),Object(d.jsx)(i.s,{md:"6",children:Object(d.jsx)(o.default,{title:"Radar Chart",children:Object(d.jsx)("div",{className:"chart-wrapper",style:{width:"100%",margin:"0 auto",height:350},children:Object(d.jsx)(s.Radar,{data:f,options:{maintainAspectRatio:!1,legend:{display:!0,labels:{fontFamily:"Nunito Sans, sans-sarif",fontColor:"#8898aa"}}}})})})})]})]})}}}]);
//# sourceMappingURL=120.e66661c9.chunk.js.map