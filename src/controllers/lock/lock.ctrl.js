import Pattern from '../../models/pattern'
import PatternSVG from '../../utils/patternSVG'
import dom from '../../utils/dom'

require('./lock.scss');

/**
 * Lock class
 * Component of the lock itself
 * It will listen for user input, update the view
 * and trigger the other instances when required.
 */
class LockCtrl {

  /**
   * Make it ready
   * @param  {Function} callback  Callback to call on new pattern
   */
  constructor (callback) {
    this.currentLine = null
    this.onNewPattern = callback

    this.setupTemplate()
  }

  /**
   * Build template of the controller
   * @return {SVGDOMElement}
   */
  setupTemplate () {
    let myPatternSVG = new PatternSVG()
    myPatternSVG.addDots(2)

    this.el = myPatternSVG.getSVG()
    this.el.setAttribute('class', 'lock')
    this.bigDotsEl = myPatternSVG.addDots(6, {class: 'lock-flashdots'})
    this.patternEl = myPatternSVG.addGroup({
      'stroke-width': '1',
      'stroke': '#fff',
      'stroke-linecap': 'round'
    })
    return this.el
  }

  /**
   * Start listening to user input
   */
  init () {
    // start listening for events (fingers)
    this.el.addEventListener("touchstart", this.updateFinger.bind(this))
    this.el.addEventListener("touchmove",  this.updateFinger.bind(this))
    this.el.addEventListener("touchend",   this.reset.bind(this))
  }

  /**
   * Set the pattern length
   * @param {int} dotLength Number of dots in the pattern
   */
  setDotLength (dotLength) {
    this.dotLength = dotLength
    this.pattern = new Pattern(this.dotLength)
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

  /**
   * Update the line of the current move
   * @param  {int} x Position X on the finger on the SVG scale
   * @param  {int} y Position Y on the finger on the SVG scale
   */
  updateLine (x, y) {
    if (!this.currentLine)
      return

    this.currentLine.setAttribute('x2', x)
    this.currentLine.setAttribute('y2', y)
  }

  /**
   * Add a dot on the current pattern
   * This will trigger the effect be
   * @param {[type]} dotIndex [description]
   */
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
      this.currentLine = dom.create('line', {
        x1: dotX,
        y1: dotY
      })
      this.patternEl.appendChild(this.currentLine)
    })
  }

  /**
   * Reset the lock
   */
  reset () {
    this.pattern.reset()
    this.currentLine = null
    for (let i = 0; i < 9; i++)
      this.bigDotsEl.childNodes[i].classList.remove('active')
    for (let i = this.patternEl.childNodes.length - 1; i >= 0; i--)
      this.patternEl.childNodes[i].remove()
  }

  /**
   * Procedure for new new patterns
   */
  checkPattern() {
    this.onNewPattern(this.pattern)
    setTimeout(this.reset.bind(this), 1000)
  }
}

export default LockCtrl
