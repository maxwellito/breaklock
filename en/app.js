(()=>{"use strict";var t={999:(t,e,n)=>{n.r(e)},502:(t,e,n)=>{n.r(e)},174:(t,e,n)=>{n.r(e)},966:(t,e,n)=>{n.r(e)},832:(t,e,n)=>{n.r(e)},242:(t,e,n)=>{n.r(e)},314:(t,e,n)=>{n.r(e)},407:(t,e,n)=>{n.r(e)},523:(t,e,n)=>{n.r(e)},558:(t,e,n)=>{n.r(e)},91:(t,e,n)=>{n.r(e)},763:(t,e,n)=>{n.r(e)}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,n),a.exports}n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const t=function(t,e){for(var n=Math.abs(t)+"",i=t<0,r=e-n.length;r>0;r--)n="0"+n;return(i?"-":"")+n};var e={create:function(t){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(n=-1===e.SVG_ELEMENTS.indexOf(t)?document.createElement(t):document.createElementNS(e.SVG_NAMESPACE,t),i.constructor===String)n.setAttribute("class",i);else for(var a in i)n.setAttribute(a,i[a]);if(r instanceof Array)for(var s=0;s<r.length;s++)n.appendChild(r[s]);else n.textContent=r;return n},icon:function(t){var n=e.create("use");return n.setAttributeNS(e.XLINK_NAMESPACE,"href","#icon-"+t),e.create("svg",{class:"icon"},[n])},clear:function(t){for(var e=t.childNodes.length-1;e>=0;e--)t.childNodes[e].remove()},SVG_NAMESPACE:"http://www.w3.org/2000/svg",XLINK_NAMESPACE:"http://www.w3.org/1999/xlink",SVG_ELEMENTS:["svg","g","circle","line","path","use","rect"]};const i=e;function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(999);var a=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.setupTemplate()}var n,a;return n=e,a=[{key:"setupTemplate",value:function(){this.counterEl=i.create("span","countdown-counter"),this.barEl=i.create("span","countdown-content");var t=i.create("span","countdown-container",[this.barEl]);return this.el=i.create("div","countdown",[this.counterEl,t]),this.el}},{key:"setTimer",value:function(t,e){this.duration=t,this.remaining=t,this.endCallback=e,this.render()}},{key:"start",value:function(){this.interval||(this.interval=window.setInterval(this.decrement.bind(this),1e3))}},{key:"stop",value:function(){window.clearInterval(this.interval),this.interval=null}},{key:"decrement",value:function(){this.remaining--,this.render()}},{key:"render",value:function(){this.remaining=this.remaining>0?this.remaining:0,this.el.classList[this.remaining>10?"remove":"add"]("alert"),this.counterEl.textContent=t(this.remaining,3),this.barEl.style.width=this.remaining/this.duration*100+"%",0==this.remaining&&(this.stop(),this.endCallback&&this.endCallback())}}],a&&r(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),e}();const s=a;function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(558);const l=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.cancelCallback=t,this.counterVal=null,this.setupTemplate()}var n,r;return n=e,(r=[{key:"setupTemplate",value:function(){return this.cancelBtnEl=i.create("button","status-bar-cancel","ABORT"),this.counterEl=i.create("span","status-bar-info"),this.countdown=new s,this.countdownEl=this.countdown.el,this.countdownEl.setAttribute("class","status-bar-info"),this.el=i.create("div","status-bar ui-row",[this.cancelBtnEl,this.counterEl,this.countdownEl]),this.el}},{key:"init",value:function(){var t=this;this.cancelBtnEl.addEventListener("click",(function(){t.cancelCallback(0)}))}},{key:"setCounter",value:function(t){this.counterEl.style.display="inherit",this.countdownEl.style.display="none",this.counterVal=t,this.updateCounter()}},{key:"updateCounter",value:function(){return this.counterEl.textContent=t(this.counterVal,3),this.counterVal}},{key:"decrementCounter",value:function(){return this.counterVal--,this.updateCounter()}},{key:"incrementCounter",value:function(){return this.counterVal++,this.updateCounter()}},{key:"setCountdown",value:function(t){var e=this;this.counterEl.style.display="none",this.countdownEl.style.display="inherit",this.countdown.setTimer(t,(function(){e.cancelCallback(1)})),this.countdown.start()}},{key:"stopCountdown",value:function(){this.countdown.stop()}}])&&o(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(966);var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.lastPattern=null,this.setupTemplate()}var e,n;return e=t,n=[{key:"setupTemplate",value:function(){return this.containerEl=i.create("div","history-container",""),this.el=i.create("div","history scrollbarlesque",[this.containerEl]),this.el}},{key:"stackPattern",value:function(t){this.lastPattern?this.containerEl.insertBefore(t,this.lastPattern):this.containerEl.appendChild(t),this.lastPattern=t,this.scrollToStart()}},{key:"scrollToStart",value:function(){var t=this.el.scrollLeft;this.el.scrollLeft=(Math.max(t/4,4),0),this.el.scrollLeft>0&&window.requestAnimationFrame(this.scrollToStart.bind(this))}},{key:"clear",value:function(t){this.lastPattern=null,this.containerEl.remove(),this.containerEl=i.create("div",{class:"history-container","data-helper":t}),this.el.appendChild(this.containerEl)}}],n&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const h=u;function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dotLength=e,this.suite=[]}var e,n;return e=t,n=[{key:"fillRandomly",value:function(){for(;!this.isComplete();)this.addDot(Math.floor(9*Math.random()))}},{key:"addDot",value:function(t){if(this.isComplete()||~this.suite.indexOf(t))return[];var e=this.suite[this.suite.length-1],n=(e+t)/2;if(null!=e&&n>>0===n&&e%3-n%3==n%3-t%3&&Math.floor(e/3)-Math.floor(n/3)==Math.floor(n/3)-Math.floor(t/3)){var i=this.addDot(n);return this.isComplete()||(this.suite.push(t),i.push(t)),i}return this.suite.push(t),[t]}},{key:"isComplete",value:function(){return this.suite.length>=this.dotLength}},{key:"gotDot",value:function(t){return~this.suite.indexOf(t)}},{key:"compare",value:function(t){for(var e=0,n=0,i=0;i<this.dotLength;i++){this.suite[i]===t.suite[i]&&e++;for(var r=0;r<this.dotLength;r++)this.suite[r]===t.suite[i]&&n++}return[e,n-e,this.dotLength-n]}},{key:"reset",value:function(){this.suite=[]}}],n&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const p=f;function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=i.create("svg",{viewBox:"0 0 "+this.SVG_WIDTH+" "+this.SVG_WIDTH})}var e,n;return e=t,n=[{key:"addBackgroundLayer",value:function(){var t=i.create("rect",{fill:"#fff","fill-opacity":"0",width:this.SVG_WIDTH,height:this.SVG_WIDTH});return this.el.appendChild(t),t}},{key:"addPattern",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#fff",r=[];n=n instanceof Array?n:[n];for(var a=1;a<t.suite.length;a++)r.push(i.create("line",{x1:t.suite[a-1]%3*this.GRID_GUTTER+this.SVG_MARGIN,y1:Math.floor(t.suite[a-1]/3)*this.GRID_GUTTER+this.SVG_MARGIN,x2:t.suite[a]%3*this.GRID_GUTTER+this.SVG_MARGIN,y2:Math.floor(t.suite[a]/3)*this.GRID_GUTTER+this.SVG_MARGIN,stroke:n[Math.min(n.length,a)-1]}));var s=t.suite[t.suite.length-1];return r.push(i.create("circle",{cx:s%3*this.GRID_GUTTER+this.SVG_MARGIN,cy:Math.floor(s/3)*this.GRID_GUTTER+this.SVG_MARGIN,fill:n[0],r:e/4})),this.addGroup({"stroke-width":e,"stroke-linecap":"round"},r)}},{key:"addDots",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];e.fill=e.fill||"#fff";for(var r=0;r<9;r++)n.push(i.create("circle",{cx:r%3*this.GRID_GUTTER+this.SVG_MARGIN,cy:Math.floor(r/3)*this.GRID_GUTTER+this.SVG_MARGIN,rel:r,r:t}));return this.addGroup(e,n)}},{key:"addGroup",value:function(t,e){var n=i.create("g",t,e);return this.el.appendChild(n),n}},{key:"addCombinaison",value:function(t,e,n){var r=t+e+n,a=Math.min(Math.floor(this.SVG_WIDTH/r),this.SVG_COMB_EXP),s=Math.floor(.75*a),o=s+Math.floor(.25*a),l=Math.floor((this.SVG_WIDTH-(r-1)*o)/2),c=this.SVG_WIDTH+Math.floor(this.SVG_COMB_EXP/2);this.el.setAttribute("viewBox","0 0 "+this.SVG_WIDTH+" "+(this.SVG_WIDTH+this.SVG_COMB_EXP));for(var u=[],h=0;h<r;h++)u.push(i.create("circle",{cx:l+h*o,cy:c,r:(s-this.DOT_BORDER)/2,"stroke-width":this.DOT_BORDER,fill:h<t?"#fff":"#000",stroke:h<t+e?"#fff":"#000","fill-opacity":h<t?"1":".25","stroke-opacity":h<t+e?"1":".25"}));return this.addGroup({},u)}},{key:"getSVG",value:function(){return this.el}}],n&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();y.prototype.SVG_NAMESPACE="http://www.w3.org/2000/svg",y.prototype.SVG_WIDTH=100,y.prototype.SVG_COMB_EXP=20,y.prototype.SVG_MARGIN=15,y.prototype.GRID_GUTTER=35,y.prototype.DOT_BORDER=2,y.prototype.DOT_MAGNET=6;const b=y,m={GAME:{DIFFICULTY:{EASY:4,MEDIUM:5,HARD:6},TYPE:{PRACTICE:1,CHALLENGE:2,COUNTDOWN:3},ACTIONS:{SOLUTION:1,NEW_GAME:2,BACK_HOME:3}},SOCIAL:{PLATFORMS:{FB:{NAME:"Facebook",ICON:"facebook",URL:function(t){return"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURI(t))}},TWITTER:{NAME:"Twitter",ICON:"twitter",URL:function(t,e,n){return"http://twitter.com/"+(t?"share?":"intent/tweet?")+(e?"text=".concat(encodeURI(e),"&"):"")+(t?"url=".concat(encodeURI(t),"&"):"")+(n?"hashtags=".concat(encodeURI(n.join(","))):"")}}},MESSAGE:"I wasted my time on BreakLock, it's pointless, don't try it.",TAGS:["breaklock"]},URL:"https://maxwellito.github.io/breaklock/",COLORS:{BRIGHT:"#ffffff",DARK:"#14171b",SUCCESS:"#116699",ERROR:"#ff0000"},PATTERN:{HEX_COLOR_START:"66",HEX_COLOR_END:"FF"}};function E(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(242);const g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentLine=null,this.onNewPattern=e,this.setupTemplate()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){var t=new b;return t.addBackgroundLayer(),this.el=t.getSVG(),this.el.setAttribute("class","lock"),this.patternEl=t.addGroup({"stroke-width":"2",stroke:m.COLORS.BRIGHT,"stroke-linecap":"round"}),this.bigDotsEl=t.addDots(9,{class:"lock-flashdots"}),t.addDots(2),this.el}},{key:"init",value:function(){this.el.addEventListener("touchstart",this.touchStart.bind(this)),this.el.addEventListener("touchmove",this.touchUpdate.bind(this)),this.el.addEventListener("touchend",this.touchEnd.bind(this)),this.el.addEventListener("mousedown",this.mouseStart.bind(this))}},{key:"setDotLength",value:function(t){this.dotLength=t,this.pattern=new p(this.dotLength)}},{key:"mouseStart",value:function(t){this.reset(),this.mouseUpdateBind=this.mouseUpdate.bind(this),this.mouseEndBind=this.mouseEnd.bind(this),this.el.addEventListener("mousemove",this.mouseUpdateBind),window.addEventListener("mouseleave",this.mouseEndBind),window.addEventListener("mouseup",this.mouseEndBind),this.mouseUpdate(t)}},{key:"mouseUpdate",value:function(t){t.preventDefault(),t.stopPropagation();var e=t.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(b.prototype.SVG_WIDTH,Math.round(b.prototype.SVG_WIDTH/e.width*(t.pageX-e.left)))),i=Math.max(0,Math.min(b.prototype.SVG_WIDTH,Math.round(b.prototype.SVG_WIDTH/e.height*(t.pageY-e.top))));this.updatePoint(n,i)}},{key:"mouseEnd",value:function(t){this.isPendingReset||this.reset(),this.el.removeEventListener("mousemove",this.mouseUpdateBind),window.removeEventListener("mouseout",this.mouseEndBind),window.removeEventListener("mouseup",this.mouseEndBind)}},{key:"touchStart",value:function(t){this.reset(),this.touchUpdate(t)}},{key:"touchUpdate",value:function(t){t.preventDefault(),t.stopPropagation();var e=t.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(b.prototype.SVG_WIDTH,Math.round(b.prototype.SVG_WIDTH/e.width*(t.targetTouches[0].pageX-e.left)))),i=Math.max(0,Math.min(b.prototype.SVG_WIDTH,Math.round(b.prototype.SVG_WIDTH/e.height*(t.targetTouches[0].pageY-e.top))));this.updatePoint(n,i)}},{key:"touchEnd",value:function(){this.isPendingReset||this.reset()}},{key:"updatePoint",value:function(t,e){if(!this.isPendingReset){for(var n,i,r,a=0;a<3;a++){var s=b.prototype.GRID_GUTTER*a+b.prototype.SVG_MARGIN-b.prototype.DOT_MAGNET,o=b.prototype.GRID_GUTTER*a+b.prototype.SVG_MARGIN+b.prototype.DOT_MAGNET;n=s<=t&&o>=t?a:n,i=s<=e&&o>=e?a:i}if(void 0!==n&&null!=i){var l=3*i+n;r=this.triggerDot(l)}return r||this.updateLine(t,e),!0}}},{key:"triggerDot",value:function(t){var e=this;if(!this.pattern.gotDot(t)){var n=this.pattern.addDot(t);navigator.vibrate&&navigator.vibrate(20),n.forEach((function(t,i){var r=b.prototype.GRID_GUTTER*(t%3)+b.prototype.SVG_MARGIN,a=b.prototype.GRID_GUTTER*Math.floor(t/3)+b.prototype.SVG_MARGIN;if(e.closeLine(r,a),e.bigDotsEl.childNodes[t].classList.add("active"),i+1===n.length&&e.pattern.isComplete())return e.checkPattern();e.startLine(r,a)}))}}},{key:"reset",value:function(){clearTimeout(this.isPendingReset),this.isPendingReset=null,this.pattern.reset(),this.currentLine=null;for(var t=0;t<9;t++)this.bigDotsEl.childNodes[t].classList.remove("active");for(var e=this.patternEl.childNodes.length-1;e>=0;e--)this.patternEl.childNodes[e].remove();this.patternEl.setAttribute("stroke",m.COLORS.BRIGHT)}},{key:"checkPattern",value:function(){var t=this.onNewPattern(this.pattern);return this.isPendingReset=setTimeout(this.reset.bind(this),1e3),this.patternEl.setAttribute("stroke",t?m.COLORS.SUCCESS:m.COLORS.ERROR),t}},{key:"startLine",value:function(t,e){this.currentLine=i.create("line",{x1:t,y1:e}),this.patternEl.appendChild(this.currentLine)}},{key:"updateLine",value:function(t,e){this.currentLine&&(this.currentLine.setAttribute("x2",t),this.currentLine.setAttribute("y2",e))}},{key:"closeLine",value:function(t,e){this.updateLine(t,e),this.currentLine=null}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();var w={ru:function(t,e){if(0===t)return 0;var n=t>10&&t<20;return n||t%10!=1?!n&&t%10>=2&&t%10<=4||e<4?2:3:1}},T=function(t,e){var n=t.split(" | "),i=document.documentElement.lang;return 1!==n.length&&w[i]&&n[w[i](e,n.length)]||t},k=[{min:1,max:3,text:"That was pure luck, nothing else. Stop dreamin."},{min:2,max:4,text:"You got lucky, without staying up all night."},{min:1,max:2,text:"No merit. Absolutely none."},{min:2,max:5,text:"That was given on a golden plate."},{min:1,max:4,text:"Absolutely no synapse got used during that game."},{min:2,max:5,text:"Don\'t even dare to tweet your score."},{min:8,max:10,text:"Saperlipopette!! That was close."},{min:4,max:8,text:"Seems legit, with a bit of luck."},{min:7,max:10,text:"Pretty good!"},{min:9,max:10,text:"But you made it!"},{min:11,max:50,text:"Trying random patterns is not a strategy..."},{min:11,max:50,text:"That was looooooooong."},{min:11,max:50,text:"At least you made it."},{min:11,max:50,text:"You must hate this game by now."},{min:11,max:50,text:"I hope you didn\'t cheat."},{min:41,max:403,text:"Your dedication is impressive."},{min:404,max:404,text:"Logic not found."},{min:405,max:999,text:"No comment."}],_=["I believe there\'s some work to do.","Do you understand the game? Don\'t take it personnaly, I struggle to explain it.","One day you will make it...","It\'s not funny for you, but it is for me ;)","Don\'t stress, you will make it.","If you want to avoid battles, stay out of the grassy areas!","Even if you loose in battle, if you surpass what you\'ve done before, you have bested yourself.","TILT! Insert coin and try again."];var C=[];function L(t){for(var e=C.length-1;e>=0;e--)if(C[e].el===t)return C.splice(e,1)[0]}function G(t){if(t.counter-=1,t.counter<=0)return t.el.textContent=t.originalText,void L(t.el);var e=Math.floor(t.originalLength-t.counter/3);t.el.textContent=t.originalText.substr(0,e)+function(t){var e="",n="abcdefghijklmnopqrstuvwxyz0123456789 _*%!?#/\\|@";if(t<=0)return e;for(var i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}(Math.min(t.originalLength-e,3)),function(t){var e;t.nextFrame=(e=function(){G(t)},window.setTimeout(e,60))}(t)}const S=function(t,e){var n,i=L(t);i&&(n=i.nextFrame,window.clearTimeout(n));var r={el:t,counter:3*e.length,originalLength:e.length,originalText:e,nextFrame:null};G(r),C.push(r)};function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){A(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(91);const I=function(){function t(e){var n,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i={NEW_GAME:"NEW_GAME",SOLUTION:"SOLUTION",BACK_HOME:"BACK_HOME"},(n="actionLabels")in this?Object.defineProperty(this,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[n]=i,this.onAction=e,this.setupTemplate(),this.init()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){for(var t in this.actionButtons=[],m.GAME.ACTIONS){var e=i.create("button",{class:"summary-action-button",rel:m.GAME.ACTIONS[t]},[i.icon(t.toLowerCase()),i.create("span",{},this.actionLabels[t])]);this.actionButtons.push(e)}this.shareBtn=i.create("button",{class:"summary-action-button"},[i.create("p",{},"Share")]);var n=i.create("div","summary-feedback bloc",[i.create("p",{},[i.create("span",{},"Tweet me your feedback at "),i.create("a",{href:m.SOCIAL.PLATFORMS.TWITTER.URL("","@mxwllt",["breaklock"])},"@mxwllt")])]);return this.titleEl=i.create("h1","summary-title highlight"),this.detailsEl=i.create("p","summary-details"),this.revealEl=i.create("p","summary-reveal","Please select an option."),this.actionsEl=i.create("div","summary-actions bloc",this.actionButtons),this.socialEl=i.create("div","summary-share bloc",[this.shareBtn]),this.el=i.create("div","summary view",[i.create("div","view-bloc",[this.titleEl,this.detailsEl,this.revealEl]),i.create("div","view-bloc",[this.actionsEl,this.socialEl,n])]),this.el}},{key:"init",value:function(){var t=this;this.actionButtons.forEach((function(e){return e.addEventListener("click",t.triggerAction.bind(t))})),this.shareBtn.addEventListener("click",(function(){return t=m.SOCIAL.MESSAGE,n=x(x({},e={url:m.URL,title:t}),{},{files:[undefined]}),void(navigator.canShare?navigator.canShare(n)?navigator.share(n):navigator.canShare(e)?navigator.share(e):window.alert("The sharing feature isn't available in your browser"):window.alert("The sharing feature isn't available in your browser"));var t,e,n}))}},{key:"setContent",value:function(t,e){this.titleEl.classList.remove("fail"),this.titleEl.classList.remove("success"),this.titleEl.classList.add(t?"success":"fail"),S(this.titleEl,t?"Success!":"Fail!"),this.detailsEl.textContent=function(t,e){var n,i;return t?(n="Lock found in ".concat(e," ").concat(T("attempts.",e)),i=k.filter((function(t){return t.min<=e&&t.max>=e})).map((function(t){return t.text}))):(n="Sorry, you didn\'t make it this time.",i=_),n+" "+i[Math.floor(i.length*Math.random())]}(t,e),this.revealEl.classList[t?"add":"remove"]("hide"),this.toggle(!0)}},{key:"toggle",value:function(t){t=null!=t?t:!this.el.classList.contains("active"),this.el.classList[t?"add":"remove"]("active")}},{key:"triggerAction",value:function(t){var e=parseInt(t.currentTarget.getAttribute("rel")||0,10);this.onAction(e)}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),R=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;t="string"==typeof t?parseInt(t,16):t,e="string"==typeof e?parseInt(e,16):e,t=Math.min(255,Math.max(0,t));for(var i=[],r=((e=Math.min(255,Math.max(0,e)))-t)/++n,a=0;a<=n;a++){var s=Math.round(t+a*r),o=s.toString(16);i.push("#"+o+o+o)}return i};function P(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(174);const D=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.statusBar=new l(this.abort.bind(this)),this.history=new h,this.lock=new g(this.newAttempt.bind(this)),this.summary=new I(this.action.bind(this)),this.pattern=null,this.type=null,this.isEnded=!1,this.onEnd=e,this.statusBar.init(),this.lock.init(),this.setupTemplate()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){return this.el=i.create("div","game-layout view",[i.create("div","view-bloc game-layout-dashboard",[this.statusBar.el,i.create("div","history-wrap",[this.history.el])]),i.create("div","view-bloc game-layout-lock",[this.lock.el]),this.summary.el]),this.el}},{key:"start",value:function(t,e){switch(this.type=t,this.difficulty=e,this.lock.setDotLength(e),this.pattern=new p(e),this.pattern.fillRandomly(),this.history.clear("Connect "+e+" "+T("dots",e)),this.count=0,this.isEnded=!1,t){case m.GAME.TYPE.PRACTICE:return this.statusBar.setCounter(0);case m.GAME.TYPE.CHALLENGE:return this.statusBar.setCounter(10);case m.GAME.TYPE.COUNTDOWN:return this.statusBar.setCountdown(60)}}},{key:"newAttempt",value:function(t){var e=this.pattern.compare(t),n=this.buildPatternSVG(t,e),i=e[0]===this.pattern.dotLength;if(this.count++,this.isEnded)this.statusBar.incrementCounter();else if(i)this.type===m.GAME.TYPE.COUNTDOWN&&this.statusBar.stopCountdown(),this.isEnded=n,this.summary.setContent(!0,this.count);else switch(this.type){case m.GAME.TYPE.PRACTICE:this.statusBar.incrementCounter();break;case m.GAME.TYPE.CHALLENGE:0===this.statusBar.decrementCounter()&&(this.isEnded=!0,this.summary.setContent(!1,this.count))}return this.history.stackPattern(n),i}},{key:"abort",value:function(t){t?(this.isEnded=!0,this.statusBar.stopCountdown(),this.summary.setContent(!1,this.count)):this.onEnd()}},{key:"action",value:function(t){switch(t){case m.GAME.ACTIONS.NEW_GAME:this.start(this.type,this.difficulty);break;case m.GAME.ACTIONS.BACK_HOME:this.abort();break;case m.GAME.ACTIONS.SOLUTION:if(!0===this.isEnded){var e=this.pattern.compare(this.pattern),n=this.buildPatternSVG(this.pattern,e);this.history.stackPattern(n)}this.statusBar.setCounter(this.count)}this.summary.toggle()}},{key:"buildPatternSVG",value:function(t,e){var n=new b;n.addDots(1),n.addPattern(t,14,R(m.PATTERN.HEX_COLOR_START,m.PATTERN.HEX_COLOR_END,t.dotLength-3)),e&&b.prototype.addCombinaison.apply(n,e);var i=n.getSVG();return e[0]===t.dotLength&&i.classList.add("success"),i}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(502);const V=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.title=e,this.content=n,this.isExpanded=i,this.setupTemplate()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){var t=this.content instanceof String?this.content:[this.content];return this.buttonEl=i.create("button","extender-button",this.title),this.contentEl=i.create("div","extender-content",t),this.el=i.create("div","extender small-only",[this.buttonEl,this.contentEl]),this.render(),this.el}},{key:"init",value:function(){this.buttonEl.addEventListener("click",this.toggle.bind(this))}},{key:"toggle",value:function(t){this.isExpanded=t instanceof Boolean?t:!this.isExpanded,this.render()}},{key:"render",value:function(){this.el.classList[this.isExpanded?"add":"remove"]("active")}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(407);const U=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setupTemplate(),this.setChoices(e)}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){return this.el=i.create("div","selectbox"),this.el}},{key:"setChoices",value:function(t){var e=this,n=this.selectListener.bind(this);t.forEach((function(t,r){var a=i.create("span",{class:"selectbox-item",rel:t.value},t.label);return a.addEventListener("click",n),a.addEventListener("touchstart",n),e.el.appendChild(a),t.default&&e.selectFromTag(a),a})),this.el.classList.add("selectbox-"+t.length)}},{key:"selectListener",value:function(t){t.preventDefault(),t.stopPropagation(),this.selectFromTag(t.currentTarget)}},{key:"selectFromTag",value:function(t){this.selectedTag&&this.selectedTag.classList.remove("active"),this.selectedTag=t,this.selectedTag.classList.add("active"),this.selectedValue=window.parseInt(t.getAttribute("rel"),10)}},{key:"getValue",value:function(){return this.selectedValue}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(523);const H=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.selectionIndex=0,this.setupTemplate(),this.setChoices(e)}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){return this.btnLeft=i.create("span","selectbox-item active selector-left","<"),this.btnRight=i.create("span","selectbox-item active selector-right",">"),this.labelEl=i.create("span","selectbox-item selector-label"),this.el=i.create("div","selector selectbox",[this.btnLeft,this.btnRight,this.labelEl]),this.el}},{key:"init",value:function(){this.btnLeft.addEventListener("click",this.previous.bind(this)),this.btnLeft.addEventListener("touchstart",this.previous.bind(this)),this.btnRight.addEventListener("click",this.next.bind(this)),this.btnRight.addEventListener("touchstart",this.next.bind(this))}},{key:"setChoices",value:function(t){this.choices=t;for(var e=this.choices.length-1;e>=0;e--)this.selectionIndex=this.choices[e].default?e:this.selectionIndex;this.selectionIndex=this.selectionIndex||0,this.updateLabel()}},{key:"updateLabel",value:function(){this.selectionIndex=(this.selectionIndex+this.choices.length)%this.choices.length;var t=this.choices[this.selectionIndex];return this.labelEl.textContent=t.label,this.selectCallback&&this.selectCallback(this.choices[this.selectionIndex]),this.selectionIndex}},{key:"next",value:function(t){return t.preventDefault(),t.stopPropagation(),this.selectionIndex++,this.updateLabel()}},{key:"previous",value:function(t){return t.preventDefault(),t.stopPropagation(),this.selectionIndex--,this.updateLabel()}},{key:"onSelect",value:function(t){this.selectCallback=t,this.updateLabel()}},{key:"getValue",value:function(){var t=this.choices[this.selectionIndex];return t&&t.value}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(832);const W=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setupTemplate(),this.setChoices([{value:"en",label:"English"},{value:"fa",label:"فارسی"},{value:"zh",label:"简体中文"},{value:"ru",label:"Русский"},{value:"fr",label:"Français"}])}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){var t=this;return this.el=i.create("div","lang-selector disabled"),this.el.onclick=function(){return t.el.classList.toggle("disabled")},this.el}},{key:"setChoices",value:function(t){var e=i.create("div");t.forEach((function(t){var n=i.create("a",{href:t.value},t.label);e.appendChild(n),e.appendChild(i.create("br"))})),this.el.appendChild(e)}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(314);const Y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onStart=e,this.setupTemplate()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){var t=i.create("h1","-wrap highlight unselectable","BreakLock"),e=i.create("p","menu-intro","A hybrid of Mastermind and the Android pattern lock. A game you gonna love to hate.");this.title=t,this.typeHelpEl=i.create("p",{},"Future info about the challenge"),this.btnStarlEl=i.create("button","action-btn","START_"),S(t,"BreakLock");var n=new V("INSTRUCTIONS",document.getElementById("instructions-template"));n.init(),this.difficultyOption=new U([{value:m.GAME.DIFFICULTY.EASY,label:"Easy",default:!0},{value:m.GAME.DIFFICULTY.MEDIUM,label:"Medium"},{value:m.GAME.DIFFICULTY.HARD,label:"Hard"}]),this.typeSelector=new H([{value:m.GAME.TYPE.PRACTICE,label:"Practice",description:"No pressure, just discover and practice your game",default:!0},{value:m.GAME.TYPE.CHALLENGE,label:"Challenge",description:"Challenge mode give you 10 attempts only to win"},{value:m.GAME.TYPE.COUNTDOWN,label:"Countdown",description:"Solve the game in one minute, without limit of attempts"}]),function(){for(var t=window.location.pathname.split("/");;){var e=t.pop();if(void 0===e)return"EN";if(2===e.length)return e.toUpperCase()}}();var r=i.create("button","lang-button",[i.icon("lang")]),a=new W;return r.onclick=function(){a.el.classList.toggle("disabled")},this.el=i.create("div","menu-layout view",[i.create("div","view-bloc menu-layout-instructions",[i.create("div","ui-row",[t,r]),e,a.el,n.el]),i.create("div","view-bloc menu-layout-form",[this.difficultyOption.el,this.typeSelector.el,this.typeHelpEl,this.btnStarlEl])]),this.el}},{key:"init",value:function(){this.typeSelector.init(),this.typeSelector.onSelect(this.typeChange.bind(this)),this.btnStarlEl.addEventListener("click",this.start.bind(this))}},{key:"start",value:function(){this.onStart(this.typeSelector.getValue(),this.difficultyOption.getValue())}},{key:"typeChange",value:function(t){this.typeHelpEl.textContent=t.description}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();n(763);var X=document.getElementById("app-intro");X&&X.remove();var K=document.body,z=new D((function(){J.el.style.display="",z.el.style.display="none"}));K.appendChild(z.el);var J=new Y((function(t,e){z.start(t,e),J.el.style.display="none",z.el.style.display=""}));J.init(),K.appendChild(J.el),z.el.style.display="none",window.scrollTo(0,0)})()})();