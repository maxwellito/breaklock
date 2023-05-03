(()=>{var t={999:()=>{},502:()=>{},174:()=>{},966:()=>{},832:()=>{},242:()=>{},314:()=>{},407:()=>{},523:()=>{},558:()=>{},91:()=>{},763:()=>{}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}(()=>{"use strict";const t=function(t,e){for(var n=Math.abs(t)+"",i=t<0,a=e-n.length;a>0;a--)n="0"+n;return(i?"-":"")+n};var e={create:function(t){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(n=-1===e.SVG_ELEMENTS.indexOf(t)?document.createElement(t):document.createElementNS(e.SVG_NAMESPACE,t),i.constructor===String)n.setAttribute("class",i);else for(var r in i)n.setAttribute(r,i[r]);if(a instanceof Array)for(var s=0;s<a.length;s++)n.appendChild(a[s]);else n.textContent=a;return n},icon:function(t){var n=e.create("use");return n.setAttributeNS(e.XLINK_NAMESPACE,"href","#icon-"+t),e.create("svg",{class:"icon"},[n])},clear:function(t){for(var e=t.childNodes.length-1;e>=0;e--)t.childNodes[e].remove()},SVG_NAMESPACE:"http://www.w3.org/2000/svg",XLINK_NAMESPACE:"http://www.w3.org/1999/xlink",SVG_ELEMENTS:["svg","g","circle","line","path","use","rect"]};const i=e;function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(999);var r=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.setupTemplate()}var n,r;return n=e,r=[{key:"setupTemplate",value:function(){this.counterEl=i.create("span","countdown-counter"),this.barEl=i.create("span","countdown-content");var t=i.create("span","countdown-container",[this.barEl]);return this.el=i.create("div","countdown",[this.counterEl,t]),this.el}},{key:"setTimer",value:function(t,e){this.duration=t,this.remaining=t,this.endCallback=e,this.render()}},{key:"start",value:function(){this.interval||(this.interval=window.setInterval(this.decrement.bind(this),1e3))}},{key:"stop",value:function(){window.clearInterval(this.interval),this.interval=null}},{key:"decrement",value:function(){this.remaining--,this.render()}},{key:"render",value:function(){this.remaining=this.remaining>0?this.remaining:0,this.el.classList[this.remaining>10?"remove":"add"]("alert"),this.counterEl.textContent=t(this.remaining,3),this.barEl.style.width=this.remaining/this.duration*100+"%",0==this.remaining&&(this.stop(),this.endCallback&&this.endCallback())}}],r&&a(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();const s=r;function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(558);const l=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.cancelCallback=t,this.counterVal=null,this.setupTemplate()}var n,a;return n=e,(a=[{key:"setupTemplate",value:function(){return this.cancelBtnEl=i.create("button","status-bar-cancel","放弃"),this.counterEl=i.create("span","status-bar-info"),this.countdown=new s,this.countdownEl=this.countdown.el,this.countdownEl.setAttribute("class","status-bar-info"),this.el=i.create("div","status-bar ui-row",[this.cancelBtnEl,this.counterEl,this.countdownEl]),this.el}},{key:"init",value:function(){var t=this;this.cancelBtnEl.addEventListener("click",(function(){t.cancelCallback(0)}))}},{key:"setCounter",value:function(t){this.counterEl.style.display="inherit",this.countdownEl.style.display="none",this.counterVal=t,this.updateCounter()}},{key:"updateCounter",value:function(){return this.counterEl.textContent=t(this.counterVal,3),this.counterVal}},{key:"decrementCounter",value:function(){return this.counterVal--,this.updateCounter()}},{key:"incrementCounter",value:function(){return this.counterVal++,this.updateCounter()}},{key:"setCountdown",value:function(t){var e=this;this.counterEl.style.display="none",this.countdownEl.style.display="inherit",this.countdown.setTimer(t,(function(){e.cancelCallback(1)})),this.countdown.start()}},{key:"stopCountdown",value:function(){this.countdown.stop()}}])&&o(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),e}();function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(966);var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.lastPattern=null,this.setupTemplate()}var e,n;return e=t,n=[{key:"setupTemplate",value:function(){return this.containerEl=i.create("div","history-container",""),this.el=i.create("div","history scrollbarlesque",[this.containerEl]),this.el}},{key:"stackPattern",value:function(t){this.lastPattern?this.containerEl.insertBefore(t,this.lastPattern):this.containerEl.appendChild(t),this.lastPattern=t,this.scrollToStart()}},{key:"scrollToStart",value:function(){var t=this.el.scrollLeft;this.el.scrollLeft=(Math.max(t/4,4),0),this.el.scrollLeft>0&&window.requestAnimationFrame(this.scrollToStart.bind(this))}},{key:"clear",value:function(t){this.lastPattern=null,this.containerEl.remove(),this.containerEl=i.create("div",{class:"history-container","data-helper":t}),this.el.appendChild(this.containerEl)}}],n&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const h=u;function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dotLength=e,this.suite=[]}var e,n;return e=t,n=[{key:"fillRandomly",value:function(){for(;!this.isComplete();)this.addDot(Math.floor(9*Math.random()))}},{key:"addDot",value:function(t){if(this.isComplete()||~this.suite.indexOf(t))return[];var e=this.suite[this.suite.length-1],n=(e+t)/2;if(null!=e&&n>>0===n&&e%3-n%3==n%3-t%3&&Math.floor(e/3)-Math.floor(n/3)==Math.floor(n/3)-Math.floor(t/3)){var i=this.addDot(n);return this.isComplete()||(this.suite.push(t),i.push(t)),i}return this.suite.push(t),[t]}},{key:"isComplete",value:function(){return this.suite.length>=this.dotLength}},{key:"gotDot",value:function(t){return~this.suite.indexOf(t)}},{key:"compare",value:function(t){for(var e=0,n=0,i=0;i<this.dotLength;i++){this.suite[i]===t.suite[i]&&e++;for(var a=0;a<this.dotLength;a++)this.suite[a]===t.suite[i]&&n++}return[e,n-e,this.dotLength-n]}},{key:"reset",value:function(){this.suite=[]}}],n&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const p=f;function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=i.create("svg",{viewBox:"0 0 "+this.SVG_WIDTH+" "+this.SVG_WIDTH})}var e,n;return e=t,n=[{key:"addBackgroundLayer",value:function(){var t=i.create("rect",{fill:"#fff","fill-opacity":"0",width:this.SVG_WIDTH,height:this.SVG_WIDTH});return this.el.appendChild(t),t}},{key:"addPattern",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#fff",a=[];n=n instanceof Array?n:[n];for(var r=1;r<t.suite.length;r++)a.push(i.create("line",{x1:t.suite[r-1]%3*this.GRID_GUTTER+this.SVG_MARGIN,y1:Math.floor(t.suite[r-1]/3)*this.GRID_GUTTER+this.SVG_MARGIN,x2:t.suite[r]%3*this.GRID_GUTTER+this.SVG_MARGIN,y2:Math.floor(t.suite[r]/3)*this.GRID_GUTTER+this.SVG_MARGIN,stroke:n[Math.min(n.length,r)-1]}));var s=t.suite[t.suite.length-1];return a.push(i.create("circle",{cx:s%3*this.GRID_GUTTER+this.SVG_MARGIN,cy:Math.floor(s/3)*this.GRID_GUTTER+this.SVG_MARGIN,fill:n[0],r:e/4})),this.addGroup({"stroke-width":e,"stroke-linecap":"round"},a)}},{key:"addDots",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];e.fill=e.fill||"#fff";for(var a=0;a<9;a++)n.push(i.create("circle",{cx:a%3*this.GRID_GUTTER+this.SVG_MARGIN,cy:Math.floor(a/3)*this.GRID_GUTTER+this.SVG_MARGIN,rel:a,r:t}));return this.addGroup(e,n)}},{key:"addGroup",value:function(t,e){var n=i.create("g",t,e);return this.el.appendChild(n),n}},{key:"addCombinaison",value:function(t,e,n){var a=t+e+n,r=Math.min(Math.floor(this.SVG_WIDTH/a),this.SVG_COMB_EXP),s=Math.floor(.75*r),o=s+Math.floor(.25*r),l=Math.floor((this.SVG_WIDTH-(a-1)*o)/2),c=this.SVG_WIDTH+Math.floor(this.SVG_COMB_EXP/2);this.el.setAttribute("viewBox","0 0 "+this.SVG_WIDTH+" "+(this.SVG_WIDTH+this.SVG_COMB_EXP));for(var u=[],h=0;h<a;h++)u.push(i.create("circle",{cx:l+h*o,cy:c,r:(s-this.DOT_BORDER)/2,"stroke-width":this.DOT_BORDER,fill:h<t?"#fff":"#000",stroke:h<t+e?"#fff":"#000","fill-opacity":h<t?"1":".25","stroke-opacity":h<t+e?"1":".25"}));return this.addGroup({},u)}},{key:"getSVG",value:function(){return this.el}}],n&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();y.prototype.SVG_NAMESPACE="http://www.w3.org/2000/svg",y.prototype.SVG_WIDTH=100,y.prototype.SVG_COMB_EXP=20,y.prototype.SVG_MARGIN=15,y.prototype.GRID_GUTTER=35,y.prototype.DOT_BORDER=2,y.prototype.DOT_MAGNET=6;const b=y,m={GAME:{DIFFICULTY:{EASY:4,MEDIUM:5,HARD:6},TYPE:{PRACTICE:1,CHALLENGE:2,COUNTDOWN:3},ACTIONS:{SOLUTION:1,NEW_GAME:2,BACK_HOME:3}},SOCIAL:{PLATFORMS:{FB:{NAME:"Facebook",ICON:"facebook",URL:function(t){return"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURI(t))}},TWITTER:{NAME:"Twitter",ICON:"twitter",URL:function(t,e,n){return"http://twitter.com/"+(t?"share?":"intent/tweet?")+(e?"text=".concat(encodeURI(e),"&"):"")+(t?"url=".concat(encodeURI(t),"&"):"")+(n?"hashtags=".concat(encodeURI(n.join(","))):"")}}},MESSAGE:"I wasted my time on BreakLock, it's pointless, don't try it.",TAGS:["breaklock"]},URL:"https://maxwellito.github.io/breaklock/",COLORS:{BRIGHT:"#ffffff",DARK:"#14171b",SUCCESS:"#116699",ERROR:"#ff0000"},PATTERN:{HEX_COLOR_START:"66",HEX_COLOR_END:"FF"}};function E(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(242);const g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentLine=null,this.onNewPattern=e,this.setupTemplate()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){var t=new b;return t.addBackgroundLayer(),this.el=t.getSVG(),this.el.setAttribute("class","lock"),this.patternEl=t.addGroup({"stroke-width":"2",stroke:m.COLORS.BRIGHT,"stroke-linecap":"round"}),this.bigDotsEl=t.addDots(9,{class:"lock-flashdots"}),t.addDots(2),this.el}},{key:"init",value:function(){this.el.addEventListener("touchstart",this.touchStart.bind(this)),this.el.addEventListener("touchmove",this.touchUpdate.bind(this)),this.el.addEventListener("touchend",this.touchEnd.bind(this)),this.el.addEventListener("mousedown",this.mouseStart.bind(this))}},{key:"setDotLength",value:function(t){this.dotLength=t,this.pattern=new p(this.dotLength)}},{key:"mouseStart",value:function(t){this.reset(),this.mouseUpdateBind=this.mouseUpdate.bind(this),this.mouseEndBind=this.mouseEnd.bind(this),this.el.addEventListener("mousemove",this.mouseUpdateBind),window.addEventListener("mouseleave",this.mouseEndBind),window.addEventListener("mouseup",this.mouseEndBind),this.mouseUpdate(t)}},{key:"mouseUpdate",value:function(t){t.preventDefault(),t.stopPropagation();var e=t.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(b.prototype.SVG_WIDTH,Math.round(b.prototype.SVG_WIDTH/e.width*(t.pageX-e.left)))),i=Math.max(0,Math.min(b.prototype.SVG_WIDTH,Math.round(b.prototype.SVG_WIDTH/e.height*(t.pageY-e.top))));this.updatePoint(n,i)}},{key:"mouseEnd",value:function(t){this.isPendingReset||this.reset(),this.el.removeEventListener("mousemove",this.mouseUpdateBind),window.removeEventListener("mouseout",this.mouseEndBind),window.removeEventListener("mouseup",this.mouseEndBind)}},{key:"touchStart",value:function(t){this.reset(),this.touchUpdate(t)}},{key:"touchUpdate",value:function(t){t.preventDefault(),t.stopPropagation();var e=t.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(b.prototype.SVG_WIDTH,Math.round(b.prototype.SVG_WIDTH/e.width*(t.targetTouches[0].pageX-e.left)))),i=Math.max(0,Math.min(b.prototype.SVG_WIDTH,Math.round(b.prototype.SVG_WIDTH/e.height*(t.targetTouches[0].pageY-e.top))));this.updatePoint(n,i)}},{key:"touchEnd",value:function(){this.isPendingReset||this.reset()}},{key:"updatePoint",value:function(t,e){if(!this.isPendingReset){for(var n,i,a,r=0;r<3;r++){var s=b.prototype.GRID_GUTTER*r+b.prototype.SVG_MARGIN-b.prototype.DOT_MAGNET,o=b.prototype.GRID_GUTTER*r+b.prototype.SVG_MARGIN+b.prototype.DOT_MAGNET;n=s<=t&&o>=t?r:n,i=s<=e&&o>=e?r:i}if(void 0!==n&&null!=i){var l=3*i+n;a=this.triggerDot(l)}return a||this.updateLine(t,e),!0}}},{key:"triggerDot",value:function(t){var e=this;if(!this.pattern.gotDot(t)){var n=this.pattern.addDot(t);navigator.vibrate&&navigator.vibrate(20),n.forEach((function(t,i){var a=b.prototype.GRID_GUTTER*(t%3)+b.prototype.SVG_MARGIN,r=b.prototype.GRID_GUTTER*Math.floor(t/3)+b.prototype.SVG_MARGIN;if(e.closeLine(a,r),e.bigDotsEl.childNodes[t].classList.add("active"),i+1===n.length&&e.pattern.isComplete())return e.checkPattern();e.startLine(a,r)}))}}},{key:"reset",value:function(){clearTimeout(this.isPendingReset),this.isPendingReset=null,this.pattern.reset(),this.currentLine=null;for(var t=0;t<9;t++)this.bigDotsEl.childNodes[t].classList.remove("active");for(var e=this.patternEl.childNodes.length-1;e>=0;e--)this.patternEl.childNodes[e].remove();this.patternEl.setAttribute("stroke",m.COLORS.BRIGHT)}},{key:"checkPattern",value:function(){var t=this.onNewPattern(this.pattern);return this.isPendingReset=setTimeout(this.reset.bind(this),1e3),this.patternEl.setAttribute("stroke",t?m.COLORS.SUCCESS:m.COLORS.ERROR),t}},{key:"startLine",value:function(t,e){this.currentLine=i.create("line",{x1:t,y1:e}),this.patternEl.appendChild(this.currentLine)}},{key:"updateLine",value:function(t,e){this.currentLine&&(this.currentLine.setAttribute("x2",t),this.currentLine.setAttribute("y2",e))}},{key:"closeLine",value:function(t,e){this.updateLine(t,e),this.currentLine=null}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();var w={ru:function(t,e){if(0===t)return 0;var n=t>10&&t<20;return n||t%10!=1?!n&&t%10>=2&&t%10<=4||e<4?2:3:1}},T=function(t,e){var n=t.split(" | "),i=document.documentElement.lang;return 1!==n.length&&w[i]&&n[w[i](e,n.length)]||t},k=[{min:1,max:3,text:"纯粹运气，别做梦了。"},{min:2,max:4,text:"你很幸运，没有熬夜。"},{min:1,max:2,text:"没有价值，绝对没有。"},{min:2,max:5,text:"那是用金盘子装着的。"},{min:1,max:4,text:"刚那局游戏绝对没经过大脑。"},{min:2,max:5,text:"甚至不敢公布你的成绩。"},{min:8,max:10,text:"卧槽！差一点。"},{min:4,max:8,text:"似乎不错，有点运气。"},{min:7,max:10,text:"很好！"},{min:9,max:10,text:"但是你成功了！"},{min:11,max:50,text:"乱画不是一种策略…"},{min:11,max:50,text:"太慢了！"},{min:11,max:50,text:"至少你成功了。"},{min:11,max:50,text:"你现在一定很讨厌这个游戏。"},{min:11,max:50,text:"希望你没有作弊。"},{min:41,max:403,text:"你的付出令人感动。"},{min:404,max:404,text:"找不到逻辑。"},{min:405,max:999,text:"无话可说。"}],_=["我相信还有一些工作要做。","你懂这个游戏吗？别当真，我很难解释。","总有一天你会成功的…","这对你来说并不好笑，但对我来说却是如此 ;)","别紧张，你会成功的。","如果你想避免战斗，那就远离草地吧！","即使你在战斗中失败了，如果你超越了从前，你也战胜了自己。","投币重试"];var C=[];function L(t){for(var e=C.length-1;e>=0;e--)if(C[e].el===t)return C.splice(e,1)[0]}function G(t){if(t.counter-=1,t.counter<=0)return t.el.textContent=t.originalText,void L(t.el);var e=Math.floor(t.originalLength-t.counter/3);t.el.textContent=t.originalText.substr(0,e)+function(t){var e="",n="abcdefghijklmnopqrstuvwxyz0123456789 _*%!?#/\\|@";if(t<=0)return e;for(var i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}(Math.min(t.originalLength-e,3)),function(t){var e;t.nextFrame=(e=function(){G(t)},window.setTimeout(e,60))}(t)}const S=function(t,e){var n,i=L(t);i&&(n=i.nextFrame,window.clearTimeout(n));var a={el:t,counter:3*e.length,originalLength:e.length,originalText:e,nextFrame:null};G(a),C.push(a)};function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){A(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function I(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(91);const M=function(){function t(e){var n,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i={NEW_GAME:"新游戏",SOLUTION:"解决方案",BACK_HOME:"返回"},(n="actionLabels")in this?Object.defineProperty(this,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[n]=i,this.onAction=e,this.setupTemplate(),this.init()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){for(var t in this.actionButtons=[],m.GAME.ACTIONS){var e=i.create("button",{class:"summary-action-button",rel:m.GAME.ACTIONS[t]},[i.icon(t.toLowerCase()),i.create("span",{},this.actionLabels[t])]);this.actionButtons.push(e)}this.shareBtn=i.create("button",{class:"summary-action-button"},[i.create("p",{},"分享")]);var n=i.create("div","summary-feedback bloc",[i.create("p",{},[i.create("span",{},"反馈 "),i.create("a",{href:m.SOCIAL.PLATFORMS.TWITTER.URL("","@mxwllt",["breaklock"])},"@mxwllt")])]);return this.titleEl=i.create("h1","summary-title highlight"),this.detailsEl=i.create("p","summary-details"),this.revealEl=i.create("p","summary-reveal","请选择一个选项。"),this.actionsEl=i.create("div","summary-actions bloc",this.actionButtons),this.socialEl=i.create("div","summary-share bloc",[this.shareBtn]),this.el=i.create("div","summary view",[i.create("div","view-bloc",[this.titleEl,this.detailsEl,this.revealEl]),i.create("div","view-bloc",[this.actionsEl,this.socialEl,n])]),this.el}},{key:"init",value:function(){var t=this;this.actionButtons.forEach((function(e){return e.addEventListener("click",t.triggerAction.bind(t))})),this.shareBtn.addEventListener("click",(function(){return t=m.SOCIAL.MESSAGE,n=x(x({},e={url:m.URL,title:t}),{},{files:[undefined]}),void(navigator.canShare?navigator.canShare(n)?navigator.share(n):navigator.canShare(e)?navigator.share(e):window.alert("The sharing feature isn't available in your browser"):window.alert("The sharing feature isn't available in your browser"));var t,e,n}))}},{key:"setContent",value:function(t,e){this.titleEl.classList.remove("fail"),this.titleEl.classList.remove("success"),this.titleEl.classList.add(t?"success":"fail"),S(this.titleEl,t?"成功！":"失败！"),this.detailsEl.textContent=function(t,e){var n,i;return t?(n="成功解锁！ ".concat(e," ").concat(T("次尝试。",e)),i=k.filter((function(t){return t.min<=e&&t.max>=e})).map((function(t){return t.text}))):(n="很遗憾，你失败了。",i=_),n+" "+i[Math.floor(i.length*Math.random())]}(t,e),this.revealEl.classList[t?"add":"remove"]("hide"),this.toggle(!0)}},{key:"toggle",value:function(t){t=null!=t?t:!this.el.classList.contains("active"),this.el.classList[t?"add":"remove"]("active")}},{key:"triggerAction",value:function(t){var e=parseInt(t.currentTarget.getAttribute("rel")||0,10);this.onAction(e)}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),R=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;t="string"==typeof t?parseInt(t,16):t,e="string"==typeof e?parseInt(e,16):e,t=Math.min(255,Math.max(0,t));for(var i=[],a=((e=Math.min(255,Math.max(0,e)))-t)/++n,r=0;r<=n;r++){var s=Math.round(t+r*a),o=s.toString(16);i.push("#"+o+o+o)}return i};function P(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(174);const D=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.statusBar=new l(this.abort.bind(this)),this.history=new h,this.lock=new g(this.newAttempt.bind(this)),this.summary=new M(this.action.bind(this)),this.pattern=null,this.type=null,this.isEnded=!1,this.onEnd=e,this.statusBar.init(),this.lock.init(),this.setupTemplate()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){return this.el=i.create("div","game-layout view",[i.create("div","view-bloc game-layout-dashboard",[this.statusBar.el,i.create("div","history-wrap",[this.history.el])]),i.create("div","view-bloc game-layout-lock",[this.lock.el]),this.summary.el]),this.el}},{key:"start",value:function(t,e){switch(this.type=t,this.difficulty=e,this.lock.setDotLength(e),this.pattern=new p(e),this.pattern.fillRandomly(),this.history.clear("连接 "+e+" "+T("个点",e)),this.count=0,this.isEnded=!1,t){case m.GAME.TYPE.PRACTICE:return this.statusBar.setCounter(0);case m.GAME.TYPE.CHALLENGE:return this.statusBar.setCounter(10);case m.GAME.TYPE.COUNTDOWN:return this.statusBar.setCountdown(60)}}},{key:"newAttempt",value:function(t){var e=this.pattern.compare(t),n=this.buildPatternSVG(t,e),i=e[0]===this.pattern.dotLength;if(this.count++,this.isEnded)this.statusBar.incrementCounter();else if(i)this.type===m.GAME.TYPE.COUNTDOWN&&this.statusBar.stopCountdown(),this.isEnded=n,this.summary.setContent(!0,this.count);else switch(this.type){case m.GAME.TYPE.PRACTICE:this.statusBar.incrementCounter();break;case m.GAME.TYPE.CHALLENGE:0===this.statusBar.decrementCounter()&&(this.isEnded=!0,this.summary.setContent(!1,this.count))}return this.history.stackPattern(n),i}},{key:"abort",value:function(t){t?(this.isEnded=!0,this.statusBar.stopCountdown(),this.summary.setContent(!1,this.count)):this.onEnd()}},{key:"action",value:function(t){switch(t){case m.GAME.ACTIONS.NEW_GAME:this.start(this.type,this.difficulty);break;case m.GAME.ACTIONS.BACK_HOME:this.abort();break;case m.GAME.ACTIONS.SOLUTION:if(!0===this.isEnded){var e=this.pattern.compare(this.pattern),n=this.buildPatternSVG(this.pattern,e);this.history.stackPattern(n)}this.statusBar.setCounter(this.count)}this.summary.toggle()}},{key:"buildPatternSVG",value:function(t,e){var n=new b;n.addDots(1),n.addPattern(t,14,R(m.PATTERN.HEX_COLOR_START,m.PATTERN.HEX_COLOR_END,t.dotLength-3)),e&&b.prototype.addCombinaison.apply(n,e);var i=n.getSVG();return e[0]===t.dotLength&&i.classList.add("success"),i}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(502);const V=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.title=e,this.content=n,this.isExpanded=i,this.setupTemplate()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){var t=this.content instanceof String?this.content:[this.content];return this.buttonEl=i.create("button","extender-button",this.title),this.contentEl=i.create("div","extender-content",t),this.el=i.create("div","extender small-only",[this.buttonEl,this.contentEl]),this.render(),this.el}},{key:"init",value:function(){this.buttonEl.addEventListener("click",this.toggle.bind(this))}},{key:"toggle",value:function(t){this.isExpanded=t instanceof Boolean?t:!this.isExpanded,this.render()}},{key:"render",value:function(){this.el.classList[this.isExpanded?"add":"remove"]("active")}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(407);const U=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setupTemplate(),this.setChoices(e)}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){return this.el=i.create("div","selectbox"),this.el}},{key:"setChoices",value:function(t){var e=this,n=this.selectListener.bind(this);t.forEach((function(t,a){var r=i.create("span",{class:"selectbox-item",rel:t.value},t.label);return r.addEventListener("click",n),r.addEventListener("touchstart",n),e.el.appendChild(r),t.default&&e.selectFromTag(r),r})),this.el.classList.add("selectbox-"+t.length)}},{key:"selectListener",value:function(t){t.preventDefault(),t.stopPropagation(),this.selectFromTag(t.currentTarget)}},{key:"selectFromTag",value:function(t){this.selectedTag&&this.selectedTag.classList.remove("active"),this.selectedTag=t,this.selectedTag.classList.add("active"),this.selectedValue=window.parseInt(t.getAttribute("rel"),10)}},{key:"getValue",value:function(){return this.selectedValue}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(523);const H=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.selectionIndex=0,this.setupTemplate(),this.setChoices(e)}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){return this.btnLeft=i.create("span","selectbox-item active selector-left","<"),this.btnRight=i.create("span","selectbox-item active selector-right",">"),this.labelEl=i.create("span","selectbox-item selector-label"),this.el=i.create("div","selector selectbox",[this.btnLeft,this.btnRight,this.labelEl]),this.el}},{key:"init",value:function(){this.btnLeft.addEventListener("click",this.previous.bind(this)),this.btnLeft.addEventListener("touchstart",this.previous.bind(this)),this.btnRight.addEventListener("click",this.next.bind(this)),this.btnRight.addEventListener("touchstart",this.next.bind(this))}},{key:"setChoices",value:function(t){this.choices=t;for(var e=this.choices.length-1;e>=0;e--)this.selectionIndex=this.choices[e].default?e:this.selectionIndex;this.selectionIndex=this.selectionIndex||0,this.updateLabel()}},{key:"updateLabel",value:function(){this.selectionIndex=(this.selectionIndex+this.choices.length)%this.choices.length;var t=this.choices[this.selectionIndex];return this.labelEl.textContent=t.label,this.selectCallback&&this.selectCallback(this.choices[this.selectionIndex]),this.selectionIndex}},{key:"next",value:function(t){return t.preventDefault(),t.stopPropagation(),this.selectionIndex++,this.updateLabel()}},{key:"previous",value:function(t){return t.preventDefault(),t.stopPropagation(),this.selectionIndex--,this.updateLabel()}},{key:"onSelect",value:function(t){this.selectCallback=t,this.updateLabel()}},{key:"getValue",value:function(){var t=this.choices[this.selectionIndex];return t&&t.value}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(832);const W=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setupTemplate(),this.setChoices([{value:"en",label:"English"},{value:"fa",label:"فارسی"},{value:"zh",label:"简体中文"},{value:"ru",label:"Русский"},{value:"fr",label:"Français"}])}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){var t=this;return this.el=i.create("div","lang-selector disabled"),this.el.onclick=function(){return t.el.classList.toggle("disabled")},this.el}},{key:"setChoices",value:function(t){var e=i.create("div");t.forEach((function(t){var n=i.create("a",{href:t.value},t.label);e.appendChild(n),e.appendChild(i.create("br"))})),this.el.appendChild(e)}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(314);const Y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onStart=e,this.setupTemplate()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){var t=i.create("h1","-wrap highlight unselectable","BreakLock"),e=i.create("p","menu-intro","一款结合头脑风暴和安卓图案锁的游戏，一款让你爱恨交加的游戏。");this.title=t,this.typeHelpEl=i.create("p",{},"Future info about the challenge"),this.btnStarlEl=i.create("button","action-btn","开始_"),S(t,"BreakLock");var n=new V("说明",document.getElementById("instructions-template"));n.init(),this.difficultyOption=new U([{value:m.GAME.DIFFICULTY.EASY,label:"简单",default:!0},{value:m.GAME.DIFFICULTY.MEDIUM,label:"中等"},{value:m.GAME.DIFFICULTY.HARD,label:"困难"}]),this.typeSelector=new H([{value:m.GAME.TYPE.PRACTICE,label:"练习模式",description:"无限制的练习",default:!0},{value:m.GAME.TYPE.CHALLENGE,label:"挑战模式",description:"挑战模式只有十次尝试机会"},{value:m.GAME.TYPE.COUNTDOWN,label:"计时模式",description:"不限尝试次数一分钟内解锁"}]),function(){for(var t=window.location.pathname.split("/");;){var e=t.pop();if(void 0===e)return"EN";if(2===e.length)return e.toUpperCase()}}();var a=i.create("button","lang-button",[i.icon("lang")]),r=new W;return a.onclick=function(){r.el.classList.toggle("disabled")},this.el=i.create("div","menu-layout view",[i.create("div","view-bloc menu-layout-instructions",[i.create("div","ui-row",[t,a]),e,r.el,n.el]),i.create("div","view-bloc menu-layout-form",[this.difficultyOption.el,this.typeSelector.el,this.typeHelpEl,this.btnStarlEl])]),this.el}},{key:"init",value:function(){this.typeSelector.init(),this.typeSelector.onSelect(this.typeChange.bind(this)),this.btnStarlEl.addEventListener("click",this.start.bind(this))}},{key:"start",value:function(){this.onStart(this.typeSelector.getValue(),this.difficultyOption.getValue())}},{key:"typeChange",value:function(t){this.typeHelpEl.textContent=t.description}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();n(763);var X=document.getElementById("app-intro");X&&X.remove();var K=document.body,z=new D((function(){J.el.style.display="",z.el.style.display="none"}));K.appendChild(z.el);var J=new Y((function(t,e){z.start(t,e),J.el.style.display="none",z.el.style.display=""}));J.init(),K.appendChild(J.el),z.el.style.display="none",window.scrollTo(0,0)})()})();