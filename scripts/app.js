var myPattern = new Pattern(4)
myPattern.fillRandomly()

var stack = function (pattern) {
  var pp = new PatternSVG()
  pp.addDots(1)
  pp.addPattern(pattern, 14,  ['#999','#ccc','#fff'])

  console.log(myPattern.compare(pattern))
  PatternSVG.prototype.addCombinaison.apply(pp, myPattern.compare(pattern))
  yy.stackPattern(pp.getSVG())
}




  var yy = new HistoryCtrl()
  document.body.appendChild(yy.el)


  var xx = new Lock(4, stack);
  document.body.appendChild(xx.el)
  xx.init()
  xx.start()





// stack(myPattern)
