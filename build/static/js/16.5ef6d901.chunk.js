(this["webpackJsonpmain-bt5"]=this["webpackJsonpmain-bt5"]||[]).push([[16],{141:function(e,t,r){"use strict";var n=r(63),a=r(12),i=r(58),o=r(3);t.a=function(e){var t=Object(a.f)(),r=t.pathname.split("/")[1],s=t.pathname.split("/")[2];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h4",{children:e.heading}),Object(o.jsxs)(n.c,{children:[Object(o.jsx)(n.d,{to:"/",tag:i.b,className:"text-decoration-none",children:"Home"}),r?Object(o.jsx)(n.d,{active:!0,children:r}):"",s?Object(o.jsx)(n.d,{active:!0,children:s}):""]})]})}},144:function(e,t,r){"use strict";var n=r(161);r(186);t.a=function(e,t){return"success"===t?n.b.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"error"===t?n.b.error(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"info"===t?n.b.info(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):"warning"===t?n.b.warning(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}):Object(n.b)(e)}},325:function(e,t,r){var n;e.exports=(n=r(1),function(){var e={703:function(e,t,r){"use strict";var n=r(414);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,i,o){if(o!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},697:function(e,t,r){e.exports=r(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:function(e){"use strict";e.exports=n}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){"use strict";r.r(a),r.d(a,{default:function(){return C}});var e=r(98),t=r.n(e),n=r(697),i=r.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}var s=function(e){var r=e.pageClassName,n=e.pageLinkClassName,a=e.page,i=e.selected,s=e.activeClassName,c=e.activeLinkClassName,l=e.getEventListener,u=e.pageSelectedHandler,d=e.href,p=e.extraAriaContext,b=e.pageLabelBuilder,g=e.rel,f=e.ariaLabel||"Page "+a+(p?" "+p:""),h=null;return i&&(h="page",f=e.ariaLabel||"Page "+a+" is your current page",r=void 0!==r?r+" "+s:s,void 0!==n?void 0!==c&&(n=n+" "+c):n=c),t().createElement("li",{className:r},t().createElement("a",o({rel:g,role:d?void 0:"button",className:n,href:d,tabIndex:i?"-1":"0","aria-label":f,"aria-current":h,onKeyPress:u},l(u)),b(a)))};s.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var c=s;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}var u=function(e){var r=e.breakLabel,n=e.breakClassName,a=e.breakLinkClassName,i=e.breakHandler,o=e.getEventListener,s=n||"break";return t().createElement("li",{className:s},t().createElement("a",l({className:a,role:"button",tabIndex:"0",onKeyPress:i},o(i)),r))};u.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var d=u;function p(e){return null!=e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(this,arguments)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function v(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(s,e);var r,n,a,i,o=(a=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(a);if(i){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return v(this,e)});function s(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),x(m(r=o.call(this,e)),"handlePreviousPage",(function(e){var t=r.state.selected;r.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})})),x(m(r),"handleNextPage",(function(e){var t=r.state.selected,n=r.props.pageCount;r.handleClick(e,null,t<n-1?t+1:void 0,{isNext:!0})})),x(m(r),"handlePageSelected",(function(e,t){if(r.state.selected===e)return r.callActiveCallback(e),void r.handleClick(t,null,void 0,{isActive:!0});r.handleClick(t,null,e)})),x(m(r),"handlePageChange",(function(e){r.state.selected!==e&&(r.setState({selected:e}),r.callCallback(e))})),x(m(r),"getEventListener",(function(e){return x({},r.props.eventListener,e)})),x(m(r),"handleClick",(function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=a.isPrevious,o=void 0!==i&&i,s=a.isNext,c=void 0!==s&&s,l=a.isBreak,u=void 0!==l&&l,d=a.isActive,p=void 0!==d&&d;e.preventDefault?e.preventDefault():e.returnValue=!1;var b=r.state.selected,g=r.props.onClick,f=n;if(g){var h=g({index:t,selected:b,nextSelectedPage:n,event:e,isPrevious:o,isNext:c,isBreak:u,isActive:p});if(!1===h)return;Number.isInteger(h)&&(f=h)}void 0!==f&&r.handlePageChange(f)})),x(m(r),"handleBreakClick",(function(e,t){var n=r.state.selected;r.handleClick(t,e,n<e?r.getForwardJump():r.getBackwardJump(),{isBreak:!0})})),x(m(r),"callCallback",(function(e){void 0!==r.props.onPageChange&&"function"==typeof r.props.onPageChange&&r.props.onPageChange({selected:e})})),x(m(r),"callActiveCallback",(function(e){void 0!==r.props.onPageActive&&"function"==typeof r.props.onPageActive&&r.props.onPageActive({selected:e})})),x(m(r),"getElementPageRel",(function(e){var t=r.state.selected,n=r.props,a=n.nextPageRel,i=n.prevPageRel,o=n.selectedPageRel;return t-1===e?i:t===e?o:t+1===e?a:void 0})),x(m(r),"pagination",(function(){var e=[],n=r.props,a=n.pageRangeDisplayed,i=n.pageCount,o=n.marginPagesDisplayed,s=n.breakLabel,c=n.breakClassName,l=n.breakLinkClassName,u=r.state.selected;if(i<=a)for(var p=0;p<i;p++)e.push(r.getPageElement(p));else{var b=a/2,g=a-b;u>i-a/2?b=a-(g=i-u):u<a/2&&(g=a-(b=u));var f,h,v=function(e){return r.getPageElement(e)},m=[];for(f=0;f<i;f++){var j=f+1;j<=o||j>i-o||f>=u-b&&f<=u+(0===u&&a>1?g-1:g)?m.push({type:"page",index:f,display:v(f)}):s&&m.length>0&&m[m.length-1].display!==h&&(a>0||o>0)&&(h=t().createElement(d,{key:f,breakLabel:s,breakClassName:c,breakLinkClassName:l,breakHandler:r.handleBreakClick.bind(null,f),getEventListener:r.getEventListener}),m.push({type:"break",index:f,display:h}))}m.forEach((function(t,r){var n=t;"break"===t.type&&m[r-1]&&"page"===m[r-1].type&&m[r+1]&&"page"===m[r+1].type&&m[r+1].index-m[r-1].index<=2&&(n={type:"page",index:t.index,display:v(t.index)}),e.push(n.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,r.state={selected:n},r}return r=s,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,r=e.disableInitialCallback,n=e.extraAriaContext,a=e.pageCount,i=e.forcePage;void 0===t||r||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(a)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(a,"). Did you forget a Math.ceil()?")),void 0!==t&&t>a-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(a-1,").")),void 0!==i&&i>a-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(a-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,r=t.pageCount,n=e+t.pageRangeDisplayed;return n>=r?r-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,r=t.hrefBuilder,n=t.pageCount,a=t.hrefAllControls;if(r)return a||e>=0&&e<n?r(e+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var r=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(r=r+" "+this.props.extraAriaContext),r}}},{key:"getPageElement",value:function(e){var r=this.state.selected,n=this.props,a=n.pageClassName,i=n.pageLinkClassName,o=n.activeClassName,s=n.activeLinkClassName,l=n.extraAriaContext,u=n.pageLabelBuilder;return t().createElement(c,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:r===e,rel:this.getElementPageRel(e),pageClassName:a,pageLinkClassName:i,activeClassName:o,activeLinkClassName:s,extraAriaContext:l,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var r=this.props,n=r.disabledClassName,a=r.disabledLinkClassName,i=r.pageCount,o=r.className,s=r.containerClassName,c=r.previousLabel,l=r.previousClassName,u=r.previousLinkClassName,d=r.previousAriaLabel,b=r.prevRel,f=r.nextLabel,h=r.nextClassName,v=r.nextLinkClassName,m=r.nextAriaLabel,j=r.nextRel,x=this.state.selected,O=0===x,C=x===i-1,y="".concat(p(l)).concat(O?" ".concat(p(n)):""),k="".concat(p(h)).concat(C?" ".concat(p(n)):""),P="".concat(p(u)).concat(O?" ".concat(p(a)):""),L="".concat(p(v)).concat(C?" ".concat(p(a)):""),w=O?"true":"false",N=C?"true":"false";return t().createElement("ul",{className:o||s,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:y},t().createElement("a",g({className:P,href:this.getElementHref(x-1),tabIndex:O?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":w,"aria-label":d,rel:b},this.getEventListener(this.handlePreviousPage)),c)),this.pagination(),t().createElement("li",{className:k},t().createElement("a",g({className:L,href:this.getElementHref(x+1),tabIndex:C?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":N,"aria-label":m,rel:j},this.getEventListener(this.handleNextPage)),f)))}}])&&f(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),s}(e.Component);x(O,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),x(O,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});var C=O}(),a}())},368:function(e,t,r){"use strict";var n=r(27),a=r(1),i=r(63),o=r(7),s=r(144),c=r(3);t.a=function(e){var t=e.value,r=e.tablename,l=e.idColumn,u=e.idValue,d=Object(a.useState)(t),p=Object(n.a)(d,2),b=p[0],g=p[1];return Object(c.jsx)("div",{children:Object(c.jsx)(i.eb,{children:Object(c.jsx)(i.s,{md:"4",className:"mx-0 px-0",children:Object(c.jsx)(i.E,{onBlur:function(e){return function(e){e.preventDefault();var t=e.target.value;""===t?Object(s.a)("Enter valid sort order","warning"):o.a.post("/commonApi/updateSortOrder",{tablename:r,idColumn:l,idValue:u,value:t}).then((function(e){200===e.status?(g(t),window.location.reload()):Object(s.a)("Unable to edit record.","error")})).catch((function(){Object(s.a)("Network connection error.")}))}(e)},style:{minWidth:70},type:"number",name:"sort_order",defaultValue:b?b.toString():"0",onChange:function(e){return g(e.target.value)}})})})})}},551:function(e,t,r){"use strict";var n=r(1),a=r.n(n),i=r(0),o=r.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,o=void 0===i?24:i,l=c(e,["color","size"]);return a.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("path",{d:"M12 20h9"}),a.a.createElement("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="Edit3",t.a=l},857:function(e,t,r){"use strict";var n=r(27),a=r(1),i=r(551),o=r(40),s=r(58),c=r(63),l=r(325),u=r.n(l),d=r(69),p=r(368),b=r(3);t.a=function(){var e=Object(o.b)(),t=Object(a.useState)(),r=Object(n.a)(t,2),l=r[0],g=r[1];Object(a.useEffect)((function(){e(Object(d.d)())}),[e]);var f=["title","staff_name","section_title","record_type"],h=Object(o.c)((function(e){return function(e,t,r){switch(t){case"total_tickets":return e.filter((function(e){return!e.deleted&&"completed"!==e.value&&"cancelled"!==e.value&&f.some((function(t){return e[t]&&e[t].toLocaleLowerCase().includes(r.toLocaleLowerCase())}))}));case"new":return e.filter((function(e){return!e.deleted&&"new"===e.value&&f.some((function(t){return e[t]&&e[t].toLocaleLowerCase().includes(r.toLocaleLowerCase())}))}));case"hold":return e.filter((function(e){return!e.deleted&&"hold"===e.value&&f.some((function(t){return e[t]&&e[t].toLocaleLowerCase().includes(r.toLocaleLowerCase())}))}));case"in progress":return e.filter((function(e){return!e.deleted&&"in progress"===e.value&&f.some((function(t){return e[t]&&e[t].toLocaleLowerCase().includes(r.toLocaleLowerCase())}))}));case"completed":return e.filter((function(e){return!e.deleted&&"completed"===e.value&&f.some((function(t){return e[t]&&e[t].toLocaleLowerCase().includes(r.toLocaleLowerCase())}))}));case"re-open":return e.filter((function(e){return!e.deleted&&"re-open"===e.value&&f.some((function(t){return e[t]&&e[t].toLocaleLowerCase().includes(r.toLocaleLowerCase())}))}));case"cancelled":return e.filter((function(e){return!e.deleted&&"cancelled"===e.value&&f.some((function(t){return e[t]&&e[t].toLocaleLowerCase().includes(r.toLocaleLowerCase())}))}));default:throw new Error("Unknown filter: ".concat(t))}}(e.ticketReducer.tickets,e.ticketReducer.currentFilter,e.ticketReducer.ticketSearch)})),v=Object(a.useState)(0),m=Object(n.a)(v,2),j=m[0],x=m[1],O=20*j,C=h.slice(O,O+20),y=Math.ceil(h.length/20),k=[{name:"id",selector:"",grow:0,wrap:!0,width:"4%"},{name:"Edit",selector:"edit",cell:function(){return Object(b.jsx)(s.b,{to:"/",children:Object(b.jsx)(i.a,{})})},grow:0,width:"auto",button:!0,sortable:!1},{name:"Title",selector:"title",sortable:!0,grow:0,wrap:!0},{name:"Date",selector:"date",sortable:!0,grow:0,wrap:!0},{name:"Due Date",selector:"due_date",sortable:!0,grow:0,wrap:!0},{name:"Status",selector:"value",sortable:!0,grow:0,wrap:!0},{name:"Type",selector:"record_type",sortable:!0,grow:0,wrap:!0},{name:"Module Name",selector:"section_title",sortable:!0,grow:0,wrap:!0},{name:"Staff Assigned",selector:"staff_name",sortable:!0,width:"auto",grow:3},{name:"ID",selector:"support_id",sortable:!0,width:"auto",grow:3},{name:"Order",selector:"sort_order",sortable:!0,grow:3,wrap:!0}];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"col-lg-3 mb-4",children:Object(b.jsx)(c.E,{type:"text",onChange:function(t){return e(Object(d.b)(t.target.value))},placeholder:l&&l?"Search Ticket...":g(e(Object(d.b)("")))})}),Object(b.jsxs)(c.ib,{className:"align-middle",children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:k.map((function(e){return Object(b.jsx)("td",{children:e.name},e.name)}))})}),Object(b.jsx)("tbody",{children:C&&C.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t+1}),Object(b.jsxs)("td",{children:[Object(b.jsx)(s.b,{to:"/SupportEdit/".concat(e.support_id),children:Object(b.jsx)("i",{className:"bi bi-pen cursor-pointer",id:"TooltipExample"})}),Object(b.jsx)(c.qb,{placement:"left",target:"TooltipExample",children:"Edit"})]}),Object(b.jsxs)("td",{children:[Object(b.jsxs)("h5",{className:"mb-0 mt-2",children:[" ",e.title," "]}),Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:"<small\n                    className=\"text-muted d-block text-truncate mb-2\"\n                    style={{ width: '300px' }}\n                  >\n                    ".concat(e.description&&e.description.substring(0,50),"\n                  </small>")}})]}),Object(b.jsx)("td",{children:e.date}),Object(b.jsx)("td",{children:e.due_date}),Object(b.jsx)("td",{children:"new"===e.value?Object(b.jsx)(c.b,{color:"primary",children:e.value}):"in progress"===e.value?Object(b.jsx)(c.b,{color:"warning",children:e.value}):"hold"===e.value?Object(b.jsx)(c.b,{color:"",style:{background:"#807fe2"},children:e.value}):"completed"===e.value?Object(b.jsx)(c.b,{color:"success",children:e.value}):"re-open"===e.value?Object(b.jsx)(c.b,{color:"",style:{background:"#ec6724"},children:e.value}):"cancelled"===e.value?Object(b.jsx)(c.b,{color:"danger",children:e.value}):""}),Object(b.jsx)("td",{children:e.record_type}),Object(b.jsx)("td",{children:e.section_title}),Object(b.jsx)("td",{children:e.staff_name}),Object(b.jsx)("td",{children:e.support_id}),Object(b.jsx)("td",{children:Object(b.jsx)(p.a,{idValue:e.support_id,idColumn:"support_id",tablename:"support",value:e.sort_order})})]},e.support_id)}))}),Object(b.jsx)("tfoot",{children:Object(b.jsx)("tr",{children:k.map((function(e){return Object(b.jsx)("td",{children:e.name},e.name)}))})})]}),Object(b.jsx)(u.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:y,onPageChange:function(e){var t=e.selected;x(t)},containerClassName:"navigationButtons",previousLinkClassName:"previousButton",nextLinkClassName:"nextButton",disabledClassName:"navigationDisabled",activeClassName:"navigationActive"})]})}},858:function(e,t,r){"use strict";var n=r(63),a=r(40),i=r(69),o=r(3);t.a=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.ticketReducer.tickets})),r=t.filter((function(e){return"new"===e.value})).length,s=t.filter((function(e){return"hold"===e.value})).length,c=t.filter((function(e){return"in progress"===e.value})).length,l=t.filter((function(e){return"completed"===e.value})).length,u=t.filter((function(e){return"re-open"===e.value})).length,d=t.filter((function(e){return"cancelled"===e.value})).length;return Object(o.jsxs)(n.eb,{children:[Object(o.jsx)(n.s,{children:Object(o.jsx)(n.i,{color:"secondary",className:"text-white text-center cursor-pointer",onClick:function(){return e(Object(i.e)("total_tickets"))},children:Object(o.jsxs)(n.j,{children:[Object(o.jsx)("h3",{children:t.length}),Object(o.jsx)("h5",{children:"Total"})]})})}),Object(o.jsx)(n.s,{children:Object(o.jsx)(n.i,{color:"primary",className:"text-white text-center cursor-pointer",onClick:function(){return e(Object(i.e)("new"))},children:Object(o.jsxs)(n.j,{children:[Object(o.jsx)("h3",{children:r}),Object(o.jsx)("h5",{children:"New "})]})})}),Object(o.jsx)(n.s,{children:Object(o.jsx)(n.i,{color:"warning",className:"text-white text-center cursor-pointer",onClick:function(){return e(Object(i.e)("in progress"))},children:Object(o.jsxs)(n.j,{children:[Object(o.jsx)("h3",{children:c}),Object(o.jsx)("h5",{children:"In Progress"})]})})}),Object(o.jsx)(n.s,{children:Object(o.jsx)(n.i,{style:{background:"#807fe2"},className:"text-white text-center cursor-pointer",onClick:function(){return e(Object(i.e)("hold"))},children:Object(o.jsxs)(n.j,{children:[Object(o.jsx)("h3",{children:s}),Object(o.jsx)("h5",{children:"Hold"})]})})}),Object(o.jsx)(n.s,{children:Object(o.jsx)(n.i,{color:"success",className:"text-white text-center cursor-pointer",onClick:function(){return e(Object(i.e)("completed"))},children:Object(o.jsxs)(n.j,{children:[Object(o.jsx)("h3",{children:l}),Object(o.jsx)("h5",{children:"Completed"})]})})}),Object(o.jsx)(n.s,{children:Object(o.jsx)(n.i,{style:{background:"#ec6724"},className:"text-white text-center cursor-pointer",onClick:function(){return e(Object(i.e)("re-open"))},children:Object(o.jsxs)(n.j,{children:[Object(o.jsx)("h3",{children:u}),Object(o.jsx)("h5",{children:"Re-open"})]})})}),Object(o.jsx)(n.s,{children:Object(o.jsx)(n.i,{color:"danger",className:"text-white text-center cursor-pointer",onClick:function(){return e(Object(i.e)("cancelled"))},children:Object(o.jsxs)(n.j,{children:[Object(o.jsx)("h3",{children:d}),Object(o.jsx)("h5",{children:"Cancelled"})]})})})]})}}}]);
//# sourceMappingURL=16.5ef6d901.chunk.js.map