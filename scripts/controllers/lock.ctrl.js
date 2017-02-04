/**
 * Lock class
 * Component of the lock itself
 * It will listen for user input, update the view
 * and trigger the other instances when required.
 */
class Lock {
  constructor (dotLength, callback) {
    this.dotLength = dotLength
    this.currentLine = null
    this.onNewPattern = callback

    let myPatternSVG = new PatternSVG()
    myPatternSVG.addDots(2)

    this.el = myPatternSVG.getSVG()
    this.bigDotsEl = myPatternSVG.addDots(6, {class: 'lock-bigdots'})
    this.patternEl = myPatternSVG.addGroup({
      'stroke-width': '1',
      'stroke': '#fff',
      'stroke-linecap': 'round'
    })
  }

  init () {
    // start listening for events (fingers)
    this.el.addEventListener("touchstart", this.updateFinger.bind(this))
    this.el.addEventListener("touchmove", this.updateFinger.bind(this))
    this.el.addEventListener("touchend", this.reset.bind(this))
  }

  updateFinger (t) {
    t.preventDefault()
    t.stopPropagation();


    let iX, iY,
        e = t.currentTarget.getBoundingClientRect(),
        x = Math.max(0, Math.min(PatternSVG.prototype.SVG_WIDTH, Math.round(PatternSVG.prototype.SVG_WIDTH / e.width * (t.targetTouches[0].pageX - e.left)))),
        y = Math.max(0, Math.min(PatternSVG.prototype.SVG_WIDTH, Math.round(PatternSVG.prototype.SVG_WIDTH / e.height * (t.targetTouches[0].pageY - e.top))))

    for (let i = 0; i < 3; i++) {
      let rangeStart = PatternSVG.prototype.GRID_GUTTER * i + PatternSVG.prototype.SVG_MARGIN - PatternSVG.prototype.DOT_MAGNET,
          rangeEnd   = PatternSVG.prototype.GRID_GUTTER * i + PatternSVG.prototype.SVG_MARGIN + PatternSVG.prototype.DOT_MAGNET
      iX = (rangeStart <= x && rangeEnd >= x) ? i : iX
      iY = (rangeStart <= y && rangeEnd >= y) ? i : iY
    }

    if (iX !== undefined && iY != undefined) {
      let dotIndex = iY * 3 + iX
      this.addDot(dotIndex)
    }

    this.updateLine(x, y)
    return true
  }

  updateLine (x, y) {

    if (!this.currentLine)
      return

    this.currentLine.setAttribute('x2', x)
    this.currentLine.setAttribute('y2', y)
  }

  addDot (dotIndex) {

    if (this.pattern.gotDot(dotIndex))
      return

    var newDots = this.pattern.addDot(dotIndex)
    navigator.vibrate(20);
    newDots.forEach(dot => {
      let dotX = PatternSVG.prototype.GRID_GUTTER * (dotIndex % 3) + PatternSVG.prototype.SVG_MARGIN,
          dotY = PatternSVG.prototype.GRID_GUTTER * Math.floor(dotIndex / 3) + PatternSVG.prototype.SVG_MARGIN

      // Close current line
      this.updateLine(dotX, dotY)
      this.currentLine = null

      this.bigDotsEl.childNodes[dot].classList.add('active')

      // Check if finished
      if (this.pattern.isComplete())
        return this.checkPattern()

      // Start new one
      this.currentLine = document.createElementNS('http://www.w3.org/2000/svg','line')
      this.currentLine.setAttribute('x1', dotX)
      this.currentLine.setAttribute('y1', dotY)
      this.patternEl.appendChild(this.currentLine)
    })
  }

  start () {
    this.pattern = new Pattern(this.dotLength)
  }

  reset () {
    this.pattern.reset()
    this.currentLine = null
    for (let i = 0; i < 9; i++)
      this.bigDotsEl.childNodes[i].classList.remove('active')
    for (let i = this.patternEl.childNodes.length - 1; i >= 0; i--)
      this.patternEl.childNodes[i].remove()
  }

  checkPattern() {
    this.onNewPattern(this.pattern)
    setTimeout(this.reset.bind(this), 1000)
  }

  onNewPoint () {

  }
}
