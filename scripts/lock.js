/**
 * Lock class
 * Component of the lock itself
 * It will listen for user input, update the view
 * and trigger the other instances when required.
 */
class Lock {
  constructor (dotLength) {
    this.dotLength = dotLength
    this.currentLine = null

    let myPattern = new Pattern(dotLength)
    this.el = myPattern.generateSVG()
    this.patternEl = document.createElementNS('http://www.w3.org/2000/svg','g')
    this.patternEl.setAttribute('stroke-width', '1')
    this.patternEl.setAttribute('stroke', '#fff')
    this.patternEl.setAttribute('stroke-linecap', 'round')
    this.el.appendChild(this.patternEl)
  }

  init () {
    // start listening for events (fingers)
    this.el.addEventListener("touchstart", this.updateFinger.bind(this))
    this.el.addEventListener("touchmove", this.updateFinger.bind(this))
    this.el.addEventListener("touchend", this.reset.bind(this))
  }

  updateFinger (t) {
    t.preventDefault()

    let iX, iY,
        e = t.currentTarget.getBoundingClientRect(),
        x = Math.max(0, Math.min(Pattern.prototype.SVG_WIDTH, Math.round(Pattern.prototype.SVG_WIDTH / e.width * (t.targetTouches[0].pageX - e.left)))),
        y = Math.max(0, Math.min(Pattern.prototype.SVG_WIDTH, Math.round(Pattern.prototype.SVG_WIDTH / e.height * (t.targetTouches[0].pageY - e.top))))

    for (let i = 0; i < 3; i++) {
      let rangeStart = Pattern.prototype.DOT_GAP * i + Pattern.prototype.SVG_MARGIN - Pattern.prototype.DOT_MAGNET,
          rangeEnd   = Pattern.prototype.DOT_GAP * i + Pattern.prototype.SVG_MARGIN + Pattern.prototype.DOT_MAGNET
      iX = (rangeStart <= x && rangeEnd >= x) ? i : iX
      iY = (rangeStart <= y && rangeEnd >= y) ? i : iY
    }

    if (iX !== undefined && iY != undefined) {
      let dotIndex = iY * 3 + iX
      this.addDot(dotIndex)
    }

    this.updateLine(x, y)
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
    console.log(newDots)
    navigator.vibrate(20);
    newDots.forEach(dot => {
      let dotX = Pattern.prototype.DOT_GAP * (dotIndex % 3) + Pattern.prototype.SVG_MARGIN,
          dotY = Pattern.prototype.DOT_GAP * Math.floor(dotIndex / 3) + Pattern.prototype.SVG_MARGIN

      // Close current line
      this.updateLine(dotX, dotY)
      this.currentLine = null

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
    for (let i = this.patternEl.childNodes.length - 1; i >= 0; i--)
      this.patternEl.childNodes[i].remove()
  }

  checkPattern() {
    setTimeout(this.reset.bind(this), 1000)
  }

  onNewPoint () {

  }
}
