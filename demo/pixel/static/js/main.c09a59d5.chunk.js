(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,r){t.exports=r(36)},29:function(t,e,r){},35:function(t,e,r){},36:function(t,e,r){"use strict";r.r(e);var n=r(17),o=r.n(n),a=r(1),i=r.n(a),c=(r(29),r(2)),l=r(3),s=r(5),u=r(0),h=r(4),f=r(23),p=(r(35),r(19)),v=r(22),d=r(16);function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new j(o||[]);return n(i,"_invoke",{value:b(t,r,c)}),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var h={};function f(){}function p(){}function v(){}var d={};l(d,a,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(O([])));g&&g!==e&&r.call(g,a)&&(d=g);var w=v.prototype=f.prototype=Object.create(d);function x(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function k(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function b(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=u(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(k.prototype),l(k.prototype,i,function(){return this}),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(w),l(w,c,"Generator"),l(w,a,function(){return this}),l(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var m={display:"block",boxShadow:"0px 0px 3px black"};function g(t){return new Promise(function(e){var r=new Blob([t],{type:"image/jpeg"}),n=new Image,o=URL.createObjectURL(r);n.onload=function(){e(n)},n.src=o})}function w(t){var e=t.layerX,r=t.layerY,n=t.target.style.transform.match(/scale\((.*?)\)/)[1];return[Math.floor(e/n),Math.floor(r/n)]}var x=function(t){function e(t){var r;return Object(c.a)(this,e),(r=Object(s.a)(this,Object(u.a)(e).call(this,t))).socket=void 0,r.canvas=void 0,r.canvasWrapper=void 0,r.ctx=void 0,r.handleDotClick=function(t){var e=t.layerX,n=t.layerY,o=Math.floor(n/r.state.zoomLevel),a=Math.floor(e/r.state.zoomLevel);r.socket.emit("draw-dot",{row:o,col:a,color:r.props.currentColor})},r.setUpZoomHandler=function(){r.canvas&&r.canvas.addEventListener("mousewheel",function(t){var e,n=t.layerX,o=t.layerY,a=r.state.zoomLevel,i=e=t.deltaY<0?r.state.zoomLevel+1:r.state.zoomLevel-1,c=n,l=o;if(r.canvasWrapper){var s=parseFloat(r.canvasWrapper.style.left)-(i/a-1)*c,u=parseFloat(r.canvasWrapper.style.top)-(i/a-1)*l;e<1&&(e=1,s=0,u=0),r.canvasWrapper.style.left=s+"px",r.canvasWrapper.style.top=u+"px",r.setState({zoomLevel:e}),t.preventDefault()}})},r.setUpDragHandler=function(){var t,e,n,o,a,i,c=!1;r.canvasWrapper&&r.canvas&&(r.canvasWrapper.addEventListener("mousedown",function(a){r.canvasWrapper&&(t=parseFloat(r.canvasWrapper.style.left),e=parseFloat(r.canvasWrapper.style.top),n=a.clientX,o=a.clientY,c=!0)}),r.canvas.addEventListener("mousemove",function(t){var e=0;t&&t.layerX&&(e=Math.floor(t.layerX/r.state.zoomLevel));var n=Math.floor(t.layerY/r.state.zoomLevel);r.setState({dotHoveX:e,dotHoveY:n})}),window.addEventListener("mousemove",function(l){if(c){var s=l.clientX,u=l.clientY,h=t+(a=s-n),f=e+(i=u-o);r.canvasWrapper&&(r.canvasWrapper.style.left=h+"px",r.canvasWrapper.style.top=f+"px")}}),window.addEventListener("mouseup",function(t){c=!1}),r.canvasWrapper.addEventListener("mouseup",function(t){c=!1;var e=Math.sqrt(Math.pow(a,2)+Math.pow(i,2));console.log(e),e<3&&!r.state.isPickingColor&&(r.handleDotClick(t),console.log("click","pick state",r.state.isPickingColor)),a=0,i=0}))},r.setUpPickColorHandler=function(){r.canvas&&r.canvas.addEventListener("mousemove",function(t){if(r.state.isPickingColor&&r.ctx){var e=w(t),n=Object(d.a)(e,2),o=n[0],a=n[1],i=function(t){var e=document.createElement("canvas"),r=e.getContext("2d");return e.width=41,e.height=41,r&&(r.beginPath(),r.lineWidth=2,r.strokeStyle="#000000",r.moveTo(0,6),r.lineTo(12,6),r.moveTo(6,0),r.lineTo(6,12),r.stroke(),r.beginPath(),r.arc(25,25,14,0,2*Math.PI,!1),r.lineWidth=2,r.strokeStyle="#000000",r.stroke(),r.beginPath(),r.arc(25,25,13.4,0,2*Math.PI,!1),r.fillStyle=t,r.fill()),e.toDataURL()}("rgba("+Array.from(r.ctx.getImageData(o,a,1,1).data)+")");r.canvas&&(r.canvas.style.cursor="url(".concat(i,") 6 6, crosshair"))}}),r.canvas&&r.canvas.addEventListener("click",function(t){if(r.state.isPickingColor&&r.ctx){var e=w(t),n=Object(d.a)(e,2),o=n[0],a=n[1],i="#"+Array.from(r.ctx.getImageData(o,a,1,1).data).slice(0,3).map(function(t){return t.toString(16).padStart(2,"0")}).join("");r.props.onPickColor(i),r.setState({isPickingColor:!1}),r.canvas&&(r.canvas.style.cursor="")}})},r.setPickColor=function(){r.setState({isPickingColor:!0})},r.draw=function(t,e,n){r.ctx&&(r.ctx.fillStyle=n,r.ctx.fillRect(t,e,1,1))},r.state={zoomLevel:1,dotHoveX:-1,dotHoveY:-1,isPickingColor:!1,width:0,height:0},r.socket=r.props.socket,r.canvas=null,r.canvasWrapper=null,r.ctx=null,r}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.setUpZoomHandler(),this.setUpDragHandler(),this.setUpPickColorHandler(),this.canvas&&(this.canvas.style.imageRendering="pixelated",this.ctx=this.canvas.getContext("2d")),this.socket.on("initial-pixel-data",function(){var e=Object(v.a)(y().mark(function e(r){var n;return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(r);case 2:n=e.sent,t.canvas&&(t.canvas.width=n.width,t.canvas.height=n.height),t.setState({width:n.width,height:n.height}),t.ctx&&(t.ctx.drawImage(n,0,0),t.forceUpdate());case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),this.socket.on("update-dot",function(e){var r=e.row,n=e.col,o=e.color;t.draw(n,r,o)})}},{key:"renderPickColorBtn",value:function(){var t=document.getElementById("color-pick-placeholder");return t?o.a.createPortal(i.a.createElement("button",{style:{marginLeft:"20px"},onClick:this.setPickColor},this.state.isPickingColor?"\u6b63\u5728\u53d6\u8272":"\u53d6\u8272"),t):null}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{style:{width:this.state.width,height:this.state.height,overflow:"hidden",margin:"20px",display:"inline-block",border:"1px solid",position:"relative"}},this.renderPickColorBtn(),i.a.createElement("div",{ref:function(e){return t.canvasWrapper=e},className:"canvas-wrapper",style:{position:"absolute",left:0,top:0}},i.a.createElement("span",{className:"dot-hover-box",style:{boxShadow:"0 0 1px black",width:this.state.zoomLevel+"px",height:this.state.zoomLevel+"px",position:"absolute",left:this.state.dotHoveX*this.state.zoomLevel,top:this.state.dotHoveY*this.state.zoomLevel,zIndex:8,pointerEvents:"none"}}),i.a.createElement("canvas",{style:Object(p.a)({},m,{transform:"scale("+this.state.zoomLevel+")",transformOrigin:"top left"}),ref:function(e){return t.canvas=e}})))}}]),e}(a.Component),k=["#ffffff","#000000","#ff0000","#ffa500","#ffff00","#00ff00","#00ffff","#0000ff","#800080"],b={margin:0,padding:0,marginLeft:"20px",marginRight:"20px",float:"left"},L={float:"left",listStyle:"none"},E={width:"1em",height:"1em"};var C=function(t){return i.a.createElement("div",null,i.a.createElement("input",{type:"color",value:t.color,onChange:function(e){return t.onChange(e.target.value)}}),i.a.createElement("ul",{style:b},k.map(function(e){return i.a.createElement("li",{style:L,key:e},i.a.createElement("button",{onClick:function(){return t.onChange(e)},style:Object(p.a)({},E,{backgroundColor:e})}))})))};var j=function(t){var e=function(t){var e=Object(a.useState)(0),r=Object(d.a)(e,2),n=r[0],o=r[1];return t.on("online-count",o),n}(t.socket);return i.a.createElement("div",{style:{margin:"20px"}},"\u5728\u7ebf\u4eba\u6570: ",e)},O=function(t){function e(){var t,r;Object(c.a)(this,e);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={pixelData:[],currentColor:"#ff0000"},r.socket=Object(f.a)("http://localhost:3001"),r.handlePixelClick=function(t,e){},r.changeCurrentColor=function(t){r.setState({currentColor:t})},r}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(x,{onPickColor:this.changeCurrentColor,width:200,height:200,currentColor:this.state.currentColor,onPixelClick:this.handlePixelClick,socket:this.socket}),i.a.createElement(C,{onChange:this.changeCurrentColor,color:this.state.currentColor}),i.a.createElement(j,{socket:this.socket}),i.a.createElement("span",{id:"color-pick-placeholder"}))}}]),e}(a.Component);o.a.render(i.a.createElement(O),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c09a59d5.chunk.js.map