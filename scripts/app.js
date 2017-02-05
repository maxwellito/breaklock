// var myPattern = new Pattern(4)
// myPattern.fillRandomly()
//
// var stack = function (pattern) {
//   var pp = new PatternSVG()
//   pp.addDots(1)
//   pp.addPattern(pattern, 14,  ['#999','#ccc','#fff'])
//
//   var comp = myPattern.compare(pattern)
//   if (comp[0] === myPattern.dotLength) {
//     // Success case
//     alert('UNLOCKED! ;)')
//     return true
//   }
//   else {
//     // Fail case
//     PatternSVG.prototype.addCombinaison.apply(pp, comp)
//     yy.stackPattern(pp.getSVG())
//     if (statusBar.decrementCounter() === 0) {
//       alert('ACCESS DENIED!')
//     }
//     return false
//   }
//
// }
//
//
//
// var statusBar = new StatusBarCtrl(() => {
//   resset()
// })
// statusBar.init()
// statusBar.setCounter(12)
// document.body.appendChild(statusBar.el)
//
// var yy = new HistoryCtrl()
// document.body.appendChild(yy.el)
//
//
// var xx = new Lock(4, stack);
// document.body.appendChild(xx.el)
// xx.init()
//
//
// function resset() {
//   myPattern = new Pattern(4)
//   myPattern.fillRandomly()
//   yy.clear()
//   statusBar.setCounter(12)
// }
//
// // stack(myPattern)



var myGame = new GameCtrl()
myGame.start()
document.body.appendChild(myGame.el)


var myMenu = new MenuCtrl()
myMenu.init()
document.body.appendChild(myMenu.el)
