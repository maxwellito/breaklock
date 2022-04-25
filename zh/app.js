(()=>{var t={999:()=>{},502:()=>{},174:()=>{},966:()=>{},832:()=>{},242:()=>{},314:()=>{},407:()=>{},523:()=>{},558:()=>{},91:()=>{},763:()=>{}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,n),a.exports}(()=>{"use strict";const t=function(t,e){for(var n=Math.abs(t)+"",i=t<0,s=e-n.length;s>0;s--)n="0"+n;return(i?"-":"")+n};var e={create:function(t){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(n=-1===e.SVG_ELEMENTS.indexOf(t)?document.createElement(t):document.createElementNS(e.SVG_NAMESPACE,t),i.constructor===String)n.setAttribute("class",i);else for(var a in i)n.setAttribute(a,i[a]);if(s instanceof Array)for(var r=0;r<s.length;r++)n.appendChild(s[r]);else n.textContent=s;return n},icon:function(t){var n=e.create("use");return n.setAttributeNS(e.XLINK_NAMESPACE,"href","#icon-"+t),e.create("svg",{class:"icon"},[n])},clear:function(t){for(var e=t.childNodes.length-1;e>=0;e--)t.childNodes[e].remove()},SVG_NAMESPACE:"http://www.w3.org/2000/svg",XLINK_NAMESPACE:"http://www.w3.org/1999/xlink",SVG_ELEMENTS:["svg","g","circle","line","path","use","rect"]};const i=e;function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(999);var a=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.setupTemplate()}var n,a;return n=e,a=[{key:"setupTemplate",value:function(){this.counterEl=i.create("span","countdown-counter"),this.barEl=i.create("span","countdown-content");var t=i.create("span","countdown-container",[this.barEl]);return this.el=i.create("div","countdown",[this.counterEl,t]),this.el}},{key:"setTimer",value:function(t,e){this.duration=t,this.remaining=t,this.endCallback=e,this.render()}},{key:"start",value:function(){this.interval||(this.interval=window.setInterval(this.decrement.bind(this),1e3))}},{key:"stop",value:function(){window.clearInterval(this.interval),this.interval=null}},{key:"decrement",value:function(){this.remaining--,this.render()}},{key:"render",value:function(){this.remaining=this.remaining>0?this.remaining:0,this.el.classList[this.remaining>10?"remove":"add"]("alert"),this.counterEl.textContent=t(this.remaining,3),this.barEl.style.width=this.remaining/this.duration*100+"%",0==this.remaining&&(this.stop(),this.endCallback&&this.endCallback())}}],a&&s(n.prototype,a),e}();const r=a;function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(558);const l=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.cancelCallback=t,this.counterVal=null,this.setupTemplate()}var n,s;return n=e,(s=[{key:"setupTemplate",value:function(){return this.cancelBtnEl=i.create("button","status-bar-cancel","放弃"),this.counterEl=i.create("span","status-bar-info"),this.countdown=new r,this.countdownEl=this.countdown.el,this.countdownEl.setAttribute("class","status-bar-info"),this.el=i.create("div","status-bar ui-row",[this.cancelBtnEl,this.counterEl,this.countdownEl]),this.el}},{key:"init",value:function(){var t=this;this.cancelBtnEl.addEventListener("click",(function(){t.cancelCallback(0)}))}},{key:"setCounter",value:function(t){this.counterEl.style.display="inherit",this.countdownEl.style.display="none",this.counterVal=t,this.updateCounter()}},{key:"updateCounter",value:function(){return this.counterEl.textContent=t(this.counterVal,3),this.counterVal}},{key:"decrementCounter",value:function(){return this.counterVal--,this.updateCounter()}},{key:"incrementCounter",value:function(){return this.counterVal++,this.updateCounter()}},{key:"setCountdown",value:function(t){var e=this;this.counterEl.style.display="none",this.countdownEl.style.display="inherit",this.countdown.setTimer(t,(function(){e.cancelCallback(1)})),this.countdown.start()}},{key:"stopCountdown",value:function(){this.countdown.stop()}}])&&o(n.prototype,s),e}();function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(966);var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.lastPattern=null,this.setupTemplate()}var e,n;return e=t,n=[{key:"setupTemplate",value:function(){return this.containerEl=i.create("div","history-container",""),this.el=i.create("div","history scrollbarlesque",[this.containerEl]),this.el}},{key:"stackPattern",value:function(t){this.lastPattern?this.containerEl.insertBefore(t,this.lastPattern):this.containerEl.appendChild(t),this.lastPattern=t,this.scrollToStart()}},{key:"scrollToStart",value:function(){var t=this.el.scrollLeft;this.el.scrollLeft=(Math.max(t/4,4),0),this.el.scrollLeft>0&&window.requestAnimationFrame(this.scrollToStart.bind(this))}},{key:"clear",value:function(t){this.lastPattern=null,this.containerEl.remove(),this.containerEl=i.create("div",{class:"history-container","data-helper":t}),this.el.appendChild(this.containerEl)}}],n&&c(e.prototype,n),t}();const h=u;function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dotLength=e,this.suite=[]}var e,n;return e=t,n=[{key:"fillRandomly",value:function(){for(;!this.isComplete();)this.addDot(Math.floor(9*Math.random()))}},{key:"addDot",value:function(t){if(this.isComplete()||~this.suite.indexOf(t))return[];var e=this.suite[this.suite.length-1],n=(e+t)/2;if(null!=e&&n>>0===n&&e%3-n%3==n%3-t%3&&Math.floor(e/3)-Math.floor(n/3)==Math.floor(n/3)-Math.floor(t/3)){var i=this.addDot(n);return this.isComplete()||(this.suite.push(t),i.push(t)),i}return this.suite.push(t),[t]}},{key:"isComplete",value:function(){return this.suite.length>=this.dotLength}},{key:"gotDot",value:function(t){return~this.suite.indexOf(t)}},{key:"compare",value:function(t){for(var e=0,n=0,i=0;i<this.dotLength;i++){this.suite[i]===t.suite[i]&&e++;for(var s=0;s<this.dotLength;s++)this.suite[s]===t.suite[i]&&n++}return[e,n-e,this.dotLength-n]}},{key:"reset",value:function(){this.suite=[]}}],n&&d(e.prototype,n),t}();const p=f;function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var m=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=i.create("svg",{viewBox:"0 0 "+this.SVG_WIDTH+" "+this.SVG_WIDTH})}var e,n;return e=t,n=[{key:"addBackgroundLayer",value:function(){var t=i.create("rect",{fill:"#fff","fill-opacity":"0",width:this.SVG_WIDTH,height:this.SVG_WIDTH});return this.el.appendChild(t),t}},{key:"addPattern",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#fff",s=[];n=n instanceof Array?n:[n];for(var a=1;a<t.suite.length;a++)s.push(i.create("line",{x1:t.suite[a-1]%3*this.GRID_GUTTER+this.SVG_MARGIN,y1:Math.floor(t.suite[a-1]/3)*this.GRID_GUTTER+this.SVG_MARGIN,x2:t.suite[a]%3*this.GRID_GUTTER+this.SVG_MARGIN,y2:Math.floor(t.suite[a]/3)*this.GRID_GUTTER+this.SVG_MARGIN,stroke:n[Math.min(n.length,a)-1]}));var r=t.suite[t.suite.length-1];return s.push(i.create("circle",{cx:r%3*this.GRID_GUTTER+this.SVG_MARGIN,cy:Math.floor(r/3)*this.GRID_GUTTER+this.SVG_MARGIN,fill:n[0],r:e/4})),this.addGroup({"stroke-width":e,"stroke-linecap":"round"},s)}},{key:"addDots",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];e.fill=e.fill||"#fff";for(var s=0;s<9;s++)n.push(i.create("circle",{cx:s%3*this.GRID_GUTTER+this.SVG_MARGIN,cy:Math.floor(s/3)*this.GRID_GUTTER+this.SVG_MARGIN,rel:s,r:t}));return this.addGroup(e,n)}},{key:"addGroup",value:function(t,e){var n=i.create("g",t,e);return this.el.appendChild(n),n}},{key:"addCombinaison",value:function(t,e,n){var s=t+e+n,a=Math.min(Math.floor(this.SVG_WIDTH/s),this.SVG_COMB_EXP),r=Math.floor(.75*a),o=r+Math.floor(.25*a),l=Math.floor((this.SVG_WIDTH-(s-1)*o)/2),c=this.SVG_WIDTH+Math.floor(this.SVG_COMB_EXP/2);this.el.setAttribute("viewBox","0 0 "+this.SVG_WIDTH+" "+(this.SVG_WIDTH+this.SVG_COMB_EXP));for(var u=[],h=0;h<s;h++)u.push(i.create("circle",{cx:l+h*o,cy:c,r:(r-this.DOT_BORDER)/2,"stroke-width":this.DOT_BORDER,fill:h<t?"#fff":"#000",stroke:h<t+e?"#fff":"#000","fill-opacity":h<t?"1":".25","stroke-opacity":h<t+e?"1":".25"}));return this.addGroup({},u)}},{key:"getSVG",value:function(){return this.el}}],n&&v(e.prototype,n),t}();m.prototype.SVG_NAMESPACE="http://www.w3.org/2000/svg",m.prototype.SVG_WIDTH=100,m.prototype.SVG_COMB_EXP=20,m.prototype.SVG_MARGIN=15,m.prototype.GRID_GUTTER=35,m.prototype.DOT_BORDER=2,m.prototype.DOT_MAGNET=6;const y=m,E={GAME:{DIFFICULTY:{EASY:4,MEDIUM:5,HARD:6},TYPE:{PRACTICE:1,CHALLENGE:2,COUNTDOWN:3},ACTIONS:{CONTINUE:1,NEW_GAME:2,BACK_HOME:3}},SOCIAL:{PLATFORMS:{FB:{NAME:"Facebook",ICON:"facebook",URL:function(t){return"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURI(t))}},TWITTER:{NAME:"Twitter",ICON:"twitter",URL:function(t,e,n){return"http://twitter.com/"+(t?"share?":"intent/tweet?")+(e?"text=".concat(encodeURI(e),"&"):"")+(t?"url=".concat(encodeURI(t),"&"):"")+(n?"hashtags=".concat(encodeURI(n.join(","))):"")}}},MESSAGE:"I wasted my time on BreakLock, it's pointless, don't try it.",TAGS:["breaklock"]},URL:"https://maxwellito.github.io/breaklock/",COLORS:{BRIGHT:"#ffffff",DARK:"#14171b",SUCCESS:"#116699",ERROR:"#ff0000"},PATTERN:{HEX_COLOR_START:"66",HEX_COLOR_END:"FF"}};function b(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(242);const g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentLine=null,this.onNewPattern=e,this.setupTemplate()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){var t=new y;return t.addBackgroundLayer(),this.el=t.getSVG(),this.el.setAttribute("class","lock"),this.patternEl=t.addGroup({"stroke-width":"2",stroke:E.COLORS.BRIGHT,"stroke-linecap":"round"}),this.bigDotsEl=t.addDots(9,{class:"lock-flashdots"}),t.addDots(2),this.el}},{key:"init",value:function(){this.el.addEventListener("touchstart",this.touchStart.bind(this)),this.el.addEventListener("touchmove",this.touchUpdate.bind(this)),this.el.addEventListener("touchend",this.touchEnd.bind(this)),this.el.addEventListener("mousedown",this.mouseStart.bind(this))}},{key:"setDotLength",value:function(t){this.dotLength=t,this.pattern=new p(this.dotLength)}},{key:"mouseStart",value:function(t){this.reset(),this.mouseUpdateBind=this.mouseUpdate.bind(this),this.mouseEndBind=this.mouseEnd.bind(this),this.el.addEventListener("mousemove",this.mouseUpdateBind),window.addEventListener("mouseleave",this.mouseEndBind),window.addEventListener("mouseup",this.mouseEndBind),this.mouseUpdate(t)}},{key:"mouseUpdate",value:function(t){t.preventDefault(),t.stopPropagation();var e=t.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(y.prototype.SVG_WIDTH,Math.round(y.prototype.SVG_WIDTH/e.width*(t.pageX-e.left)))),i=Math.max(0,Math.min(y.prototype.SVG_WIDTH,Math.round(y.prototype.SVG_WIDTH/e.height*(t.pageY-e.top))));this.updatePoint(n,i)}},{key:"mouseEnd",value:function(t){this.isPendingReset||this.reset(),this.el.removeEventListener("mousemove",this.mouseUpdateBind),window.removeEventListener("mouseout",this.mouseEndBind),window.removeEventListener("mouseup",this.mouseEndBind)}},{key:"touchStart",value:function(t){this.reset(),this.touchUpdate(t)}},{key:"touchUpdate",value:function(t){t.preventDefault(),t.stopPropagation();var e=t.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(y.prototype.SVG_WIDTH,Math.round(y.prototype.SVG_WIDTH/e.width*(t.targetTouches[0].pageX-e.left)))),i=Math.max(0,Math.min(y.prototype.SVG_WIDTH,Math.round(y.prototype.SVG_WIDTH/e.height*(t.targetTouches[0].pageY-e.top))));this.updatePoint(n,i)}},{key:"touchEnd",value:function(){this.isPendingReset||this.reset()}},{key:"updatePoint",value:function(t,e){if(!this.isPendingReset){for(var n,i,s,a=0;a<3;a++){var r=y.prototype.GRID_GUTTER*a+y.prototype.SVG_MARGIN-y.prototype.DOT_MAGNET,o=y.prototype.GRID_GUTTER*a+y.prototype.SVG_MARGIN+y.prototype.DOT_MAGNET;n=r<=t&&o>=t?a:n,i=r<=e&&o>=e?a:i}if(void 0!==n&&null!=i){var l=3*i+n;s=this.triggerDot(l)}return s||this.updateLine(t,e),!0}}},{key:"triggerDot",value:function(t){var e=this;if(!this.pattern.gotDot(t)){var n=this.pattern.addDot(t);navigator.vibrate&&navigator.vibrate(20),n.forEach((function(t,i){var s=y.prototype.GRID_GUTTER*(t%3)+y.prototype.SVG_MARGIN,a=y.prototype.GRID_GUTTER*Math.floor(t/3)+y.prototype.SVG_MARGIN;if(e.closeLine(s,a),e.bigDotsEl.childNodes[t].classList.add("active"),i+1===n.length&&e.pattern.isComplete())return e.checkPattern();e.startLine(s,a)}))}}},{key:"reset",value:function(){clearTimeout(this.isPendingReset),this.isPendingReset=null,this.pattern.reset(),this.currentLine=null;for(var t=0;t<9;t++)this.bigDotsEl.childNodes[t].classList.remove("active");for(var e=this.patternEl.childNodes.length-1;e>=0;e--)this.patternEl.childNodes[e].remove();this.patternEl.setAttribute("stroke",E.COLORS.BRIGHT)}},{key:"checkPattern",value:function(){var t=this.onNewPattern(this.pattern);return this.isPendingReset=setTimeout(this.reset.bind(this),1e3),this.patternEl.setAttribute("stroke",t?E.COLORS.SUCCESS:E.COLORS.ERROR),t}},{key:"startLine",value:function(t,e){this.currentLine=i.create("line",{x1:t,y1:e}),this.patternEl.appendChild(this.currentLine)}},{key:"updateLine",value:function(t,e){this.currentLine&&(this.currentLine.setAttribute("x2",t),this.currentLine.setAttribute("y2",e))}},{key:"closeLine",value:function(t,e){this.updateLine(t,e),this.currentLine=null}}])&&b(e.prototype,n),t}();var T=[{min:1,max:3,text:"纯粹运气，别做梦了。"},{min:2,max:4,text:"你很幸运，没有熬夜。"},{min:1,max:2,text:"没有价值，绝对没有。"},{min:2,max:5,text:"那是用金盘子装着的。"},{min:1,max:4,text:"刚那局游戏绝对没经过大脑。"},{min:2,max:5,text:"甚至不敢公布你的成绩。"},{min:8,max:10,text:"卧槽！差一点。"},{min:4,max:8,text:"似乎不错，有点运气。"},{min:7,max:10,text:"很好！"},{min:9,max:10,text:"但是你成功了！"},{min:11,max:50,text:"乱画不是一种策略…"},{min:11,max:50,text:"太慢了！"},{min:11,max:50,text:"至少你成功了。"},{min:11,max:50,text:"你现在一定很讨厌这个游戏。"},{min:11,max:50,text:"希望你没有作弊。"},{min:41,max:403,text:"你的付出令人感动。"},{min:404,max:404,text:"找不到逻辑。"},{min:405,max:999,text:"无话可说。"}],k=["我相信还有一些工作要做。","你懂这个游戏吗？别当真，我很难解释。","总有一天你会成功的…","这对你来说并不好笑，但对我来说却是如此 ;)","别紧张，你会成功的。","如果你想避免战斗，那就远离草地吧！","即使你在战斗中失败了，如果你超越了从前，你也战胜了自己。","投币重试"];var w=[];function C(t){for(var e=w.length-1;e>=0;e--)if(w[e].el===t)return w.splice(e,1)[0]}function _(t){if(t.counter-=1,t.counter<=0)return t.el.textContent=t.originalText,void C(t.el);var e=Math.floor(t.originalLength-t.counter/3);t.el.textContent=t.originalText.substr(0,e)+function(t){var e="",n="abcdefghijklmnopqrstuvwxyz0123456789 _*%!?#/\\|@";if(t<=0)return e;for(var i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}(Math.min(t.originalLength-e,3)),function(t){var e;t.nextFrame=(e=function(){_(t)},window.setTimeout(e,60))}(t)}const L=function(t,e){var n,i=C(t);i&&(n=i.nextFrame,window.clearTimeout(n));var s={el:t,counter:3*e.length,originalLength:e.length,originalText:e,nextFrame:null};_(s),w.push(s)};function G(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(91);const S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onAction=e,this.setupTemplate(),this.init()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){for(var t in this.actionButtons=[],E.GAME.ACTIONS){var e=i.create("button",{class:"summary-action-button",rel:E.GAME.ACTIONS[t]},[i.icon(t.toLowerCase()),i.create("span",{},t)]);this.actionButtons.push(e)}for(var n in this.socialButtons=[],E.SOCIAL.PLATFORMS){var s=i.create("a",{class:"summary-share-link",rel:"noopener noreferrer",target:"_blank",platform:n},[i.icon(E.SOCIAL.PLATFORMS[n].ICON)]);this.socialButtons.push(s)}var a=i.create("div","summary-feedback bloc",[i.create("p",{},[i.create("span",{},"反馈 "),i.create("a",{href:E.SOCIAL.PLATFORMS.TWITTER.URL("","@mxwllt",["breaklock"])},"@mxwllt")])]);return this.titleEl=i.create("h1","summary-title highlight"),this.detailsEl=i.create("p","summary-details"),this.revealEl=i.create("p","summary-reveal","点击右侧 CONTINUE 继续尝试"),this.actionsEl=i.create("div","summary-actions bloc",this.actionButtons),this.socialEl=i.create("div","summary-share bloc",this.socialButtons),this.el=i.create("div","summary view",[i.create("div","view-bloc",[this.titleEl,this.detailsEl,this.revealEl]),i.create("div","view-bloc",[this.actionsEl,this.socialEl,a])]),this.el}},{key:"init",value:function(){var t=this;this.actionButtons.forEach((function(e){return e.addEventListener("click",t.triggerAction.bind(t))}))}},{key:"setContent",value:function(t,e){this.titleEl.classList.remove("fail"),this.titleEl.classList.remove("success"),this.titleEl.classList.add(t?"success":"fail"),L(this.titleEl,t?"成功！":"失败！"),this.detailsEl.textContent=function(t,e){var n,i;return t?(n="成功解锁！ ".concat(e," 次尝试。 "),i=T.filter((function(t){return t.min<=e&&t.max>=e})).map((function(t){return t.text}))):(n="很遗憾，你失败了。 ",i=k),n+i[Math.floor(i.length*Math.random())]}(t,e),this.revealEl.classList[t?"add":"remove"]("hide"),this.updateSocialLinks(),this.toggle(!0)}},{key:"toggle",value:function(t){t=null!=t?t:!this.el.classList.contains("active"),this.el.classList[t?"add":"remove"]("active")}},{key:"triggerAction",value:function(t){var e=parseInt(t.currentTarget.getAttribute("rel")||0,10);this.onAction(e)}},{key:"updateSocialLinks",value:function(){this.socialButtons.forEach((function(t){var e=t.getAttribute("platform"),n=E.SOCIAL.PLATFORMS[e];t.setAttribute("href",n.URL(E.URL,E.SOCIAL.MESSAGE,E.SOCIAL.TAGS))}))}}])&&G(e.prototype,n),t}(),A=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;t="string"==typeof t?parseInt(t,16):t,e="string"==typeof e?parseInt(e,16):e,t=Math.min(255,Math.max(0,t));for(var i=[],s=((e=Math.min(255,Math.max(0,e)))-t)/++n,a=0;a<=n;a++){var r=Math.round(t+a*s),o=r.toString(16);i.push("#"+o+o+o)}return i};function I(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(174);const x=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.statusBar=new l(this.abort.bind(this)),this.history=new h,this.lock=new g(this.newAttempt.bind(this)),this.summary=new S(this.action.bind(this)),this.pattern=null,this.type=null,this.isEnded=!1,this.onEnd=e,this.statusBar.init(),this.lock.init(),this.setupTemplate()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){return this.el=i.create("div","game-layout view",[i.create("div","view-bloc game-layout-dashboard",[this.statusBar.el,i.create("div","history-wrap",[this.history.el])]),i.create("div","view-bloc game-layout-lock",[this.lock.el]),this.summary.el]),this.el}},{key:"start",value:function(t,e){switch(this.type=t,this.difficulty=e,this.lock.setDotLength(e),this.pattern=new p(e),this.pattern.fillRandomly(),this.history.clear("连接 "+e+" 个点"),this.count=0,this.isEnded=!1,t){case E.GAME.TYPE.PRACTICE:return this.statusBar.setCounter(0);case E.GAME.TYPE.CHALLENGE:return this.statusBar.setCounter(10);case E.GAME.TYPE.COUNTDOWN:return this.statusBar.setCountdown(60)}}},{key:"newAttempt",value:function(t){var e=this.pattern.compare(t),n=this.buildPatternSVG(t,e),i=e[0]===this.pattern.dotLength;if(this.count++,this.isEnded)this.statusBar.incrementCounter();else if(i)this.type===E.GAME.TYPE.COUNTDOWN&&this.statusBar.stopCountdown(),this.isEnded=n,this.summary.setContent(!0,this.count);else switch(this.type){case E.GAME.TYPE.PRACTICE:this.statusBar.incrementCounter();break;case E.GAME.TYPE.CHALLENGE:0===this.statusBar.decrementCounter()&&(this.isEnded=!0,this.summary.setContent(!1,this.count))}return this.history.stackPattern(n),i}},{key:"abort",value:function(t){t?(this.isEnded=!0,this.statusBar.stopCountdown(),this.summary.setContent(!1,this.count)):this.onEnd()}},{key:"action",value:function(t){switch(t){case E.GAME.ACTIONS.NEW_GAME:this.start(this.type,this.difficulty);break;case E.GAME.ACTIONS.BACK_HOME:this.abort();break;case E.GAME.ACTIONS.CONTINUE:if(!0===this.isEnded){var e=this.pattern.compare(this.pattern),n=this.buildPatternSVG(this.pattern,e);this.history.stackPattern(n)}this.statusBar.setCounter(this.count)}this.summary.toggle()}},{key:"buildPatternSVG",value:function(t,e){var n=new y;n.addDots(1),n.addPattern(t,14,A(E.PATTERN.HEX_COLOR_START,E.PATTERN.HEX_COLOR_END,t.dotLength-3)),e&&y.prototype.addCombinaison.apply(n,e);var i=n.getSVG();return e[0]===t.dotLength&&i.classList.add("success"),i}}])&&I(e.prototype,n),t}();function R(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(502);const M=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.title=e,this.content=n,this.isExpanded=i,this.setupTemplate()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){var t=this.content instanceof String?this.content:[this.content];return this.buttonEl=i.create("button","extender-button",this.title),this.contentEl=i.create("div","extender-content",t),this.el=i.create("div","extender small-only",[this.buttonEl,this.contentEl]),this.render(),this.el}},{key:"init",value:function(){this.buttonEl.addEventListener("click",this.toggle.bind(this))}},{key:"toggle",value:function(t){this.isExpanded=t instanceof Boolean?t:!this.isExpanded,this.render()}},{key:"render",value:function(){this.el.classList[this.isExpanded?"add":"remove"]("active")}}])&&R(e.prototype,n),t}();function O(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(407);const D=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setupTemplate(),this.setChoices(e)}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){return this.el=i.create("div","selectbox"),this.el}},{key:"setChoices",value:function(t){var e=this,n=this.selectListener.bind(this);t.forEach((function(t,s){var a=i.create("span",{class:"selectbox-item",rel:t.value},t.label);return a.addEventListener("click",n),a.addEventListener("touchstart",n),e.el.appendChild(a),t.default&&e.selectFromTag(a),a})),this.el.classList.add("selectbox-"+t.length)}},{key:"selectListener",value:function(t){t.preventDefault(),t.stopPropagation(),this.selectFromTag(t.currentTarget)}},{key:"selectFromTag",value:function(t){this.selectedTag&&this.selectedTag.classList.remove("active"),this.selectedTag=t,this.selectedTag.classList.add("active"),this.selectedValue=window.parseInt(t.getAttribute("rel"),10)}},{key:"getValue",value:function(){return this.selectedValue}}])&&O(e.prototype,n),t}();function P(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(523);const N=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.selectionIndex=0,this.setupTemplate(),this.setChoices(e)}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){return this.btnLeft=i.create("span","selectbox-item active selector-left","<"),this.btnRight=i.create("span","selectbox-item active selector-right",">"),this.labelEl=i.create("span","selectbox-item selector-label"),this.el=i.create("div","selector selectbox",[this.btnLeft,this.btnRight,this.labelEl]),this.el}},{key:"init",value:function(){this.btnLeft.addEventListener("click",this.previous.bind(this)),this.btnLeft.addEventListener("touchstart",this.previous.bind(this)),this.btnRight.addEventListener("click",this.next.bind(this)),this.btnRight.addEventListener("touchstart",this.next.bind(this))}},{key:"setChoices",value:function(t){this.choices=t;for(var e=this.choices.length-1;e>=0;e--)this.selectionIndex=this.choices[e].default?e:this.selectionIndex;this.selectionIndex=this.selectionIndex||0,this.updateLabel()}},{key:"updateLabel",value:function(){this.selectionIndex=(this.selectionIndex+this.choices.length)%this.choices.length;var t=this.choices[this.selectionIndex];return this.labelEl.textContent=t.label,this.selectCallback&&this.selectCallback(this.choices[this.selectionIndex]),this.selectionIndex}},{key:"next",value:function(t){return t.preventDefault(),t.stopPropagation(),this.selectionIndex++,this.updateLabel()}},{key:"previous",value:function(t){return t.preventDefault(),t.stopPropagation(),this.selectionIndex--,this.updateLabel()}},{key:"onSelect",value:function(t){this.selectCallback=t,this.updateLabel()}},{key:"getValue",value:function(){var t=this.choices[this.selectionIndex];return t&&t.value}}])&&P(e.prototype,n),t}();function B(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(832);const V=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setupTemplate(),this.setChoices([{value:"en",label:"English"},{value:"fa",label:"فارسی"},{value:"zh",label:"简体中文"}])}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){var t=this;return this.el=i.create("div","lang-selector disabled"),this.el.onclick=function(){return t.el.classList.toggle("disabled")},this.el}},{key:"setChoices",value:function(t){var e=i.create("div");t.forEach((function(t){var n=i.create("a",{href:t.value},t.label);e.appendChild(n),e.appendChild(i.create("br"))})),this.el.appendChild(e)}}])&&B(e.prototype,n),t}();function U(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(314);const H=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onStart=e,this.setupTemplate()}var e,n;return e=t,(n=[{key:"setupTemplate",value:function(){var t=i.create("h1","-wrap highlight unselectable","BreakLock"),e=i.create("p","menu-intro","一款结合头脑风暴和安卓图案锁的游戏，一款让你爱恨交加的游戏。");this.title=t,this.typeHelpEl=i.create("p",{},"Future info about the challenge"),this.btnStarlEl=i.create("button","action-btn","开始_"),L(t,"BreakLock");var n=new M("说明",document.getElementById("instructions-template"));n.init(),this.difficultyOption=new D([{value:E.GAME.DIFFICULTY.EASY,label:"简单",default:!0},{value:E.GAME.DIFFICULTY.MEDIUM,label:"中等"},{value:E.GAME.DIFFICULTY.HARD,label:"困难"}]),this.typeSelector=new N([{value:E.GAME.TYPE.PRACTICE,label:"练习模式",description:"无限制的练习",default:!0},{value:E.GAME.TYPE.CHALLENGE,label:"挑战模式",description:"挑战模式只有十次尝试机会"},{value:E.GAME.TYPE.COUNTDOWN,label:"计时模式",description:"不限尝试次数一分钟内解锁"}]);var s=function(){for(var t=window.location.pathname.split("/");;){var e=t.pop();if(void 0===e)return"EN";if(2===e.length)return e.toUpperCase()}}(),a=i.create("button","lang-button",s),r=new V;return a.onclick=function(){r.el.classList.toggle("disabled")},this.el=i.create("div","menu-layout view",[i.create("div","view-bloc menu-layout-instructions",[i.create("div","ui-row",[t,a]),e,r.el,n.el]),i.create("div","view-bloc menu-layout-form",[this.difficultyOption.el,this.typeSelector.el,this.typeHelpEl,this.btnStarlEl])]),this.el}},{key:"init",value:function(){this.typeSelector.init(),this.typeSelector.onSelect(this.typeChange.bind(this)),this.btnStarlEl.addEventListener("click",this.start.bind(this)),this.title.addEventListener("dblclick",this.triggerEasterEgg.bind(this))}},{key:"start",value:function(){this.onStart(this.typeSelector.getValue(),this.difficultyOption.getValue())}},{key:"typeChange",value:function(t){this.typeHelpEl.textContent=t.description}},{key:"triggerEasterEgg",value:function(){localStorage.getItem("isDeepBlack")?(localStorage.setItem("isDeepBlack",""),document.body.classList.remove("deepblack")):(localStorage.setItem("isDeepBlack","on"),document.body.classList.add("deepblack"))}}])&&U(e.prototype,n),t}();n(763);var q=document.getElementById("app-intro");q&&q.remove();var W=document.body,F=new x((function(){Y.el.style.display="",F.el.style.display="none"}));W.appendChild(F.el);var Y=new H((function(t,e){F.start(t,e),Y.el.style.display="none",F.el.style.display=""}));Y.init(),W.appendChild(Y.el),F.el.style.display="none",window.scrollTo(0,0)})()})();