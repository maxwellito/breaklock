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
    myPatternSVG.addBackgroundLayer()
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
    this.el.addEventListener('touchstart', this.updateFinger.bind(this))
    this.el.addEventListener('touchmove',  this.updateFinger.bind(this))
    this.el.addEventListener('touchend',   this.reset.bind(this))

    // start listening for mouse
    this.el.addEventListener('mousedown', this.startMouseTrack.bind(this))
  }

  /**
   * Set the pattern length
   * @param {int} dotLength Number of dots in the pattern
   */
  setDotLength (dotLength) {
    this.dotLength = dotLength
    this.pattern = new Pattern(this.dotLength)
  }

  /**
   * Listeners
   */

  /* Mouse listeners *************************************/

  /**
   * Listener for mouse down on the lock.
   * It will start listening to mouse move and stop.
   * @param  {MouseEvent} t Mouse down event
   */
  startMouseTrack (t) {
    this.mouseMoveListener = this.updateCursor.bind(this)
    this.mouseUpListener   = this.stopMouseTrack.bind(this)
    this.el.addEventListener('mousemove', this.mouseMoveListener)
    window.addEventListener('mouseleave',  this.mouseUpListener)
    window.addEventListener('mouseup',   this.mouseUpListener)
    this.updateCursor(t)
  }

  /**
   * Listener for mouse move while drowing a pattern
   * with the mouse.
   * @param  {MouseEvent} t Mouse move event
   */
  updateCursor (t) {
    t.preventDefault()
    t.stopPropagation()

    let e = t.currentTarget.getBoundingClientRect(),
        x = Math.max(0, Math.min(PatternSVG.prototype.SVG_WIDTH, Math.round(t.offsetX * PatternSVG.prototype.SVG_WIDTH / e.width ))),
        y = Math.max(0, Math.min(PatternSVG.prototype.SVG_WIDTH, Math.round(t.offsetY * PatternSVG.prototype.SVG_WIDTH / e.height)))
    this.updatePoint(x, y)
  }

  /**
   * Method to end drawing with mouse.
   * It will remove useless listeners and reset
   * the current pattern.
   * @param  {MouseEvent} t Mouse event
   */
  stopMouseTrack (t) {
    this.el.removeEventListener('mousemove', this.mouseMoveListener)
    window.removeEventListener('mouseout',  this.mouseUpListener)
    window.removeEventListener('mouseup',   this.mouseUpListener)
    this.reset()
  }

  /**
   * Listener for touch events
   * The method will calculate the position of the finger
   * on the lock to update the line and add dots to the
   * current pattern.
   * @param  {Event} t Touch event
   */
  updateFinger (t) {
    t.preventDefault()
    t.stopPropagation()

    let e = t.currentTarget.getBoundingClientRect(),
        x = Math.max(0, Math.min(PatternSVG.prototype.SVG_WIDTH, Math.round(PatternSVG.prototype.SVG_WIDTH / e.width * (t.targetTouches[0].pageX - e.left)))),
        y = Math.max(0, Math.min(PatternSVG.prototype.SVG_WIDTH, Math.round(PatternSVG.prototype.SVG_WIDTH / e.height * (t.targetTouches[0].pageY - e.top))))
    this.updatePoint(x, y)
  }

  /**
   * Update the current pattern by providing
   * the position of the new cursor/finger
   * in ordinates scaled to SVG size.
   * @param  {Number} x Position X of pointer/finger
   * @param  {Number} y Position X of pointer/finger
   */
  updatePoint (x, y) {
    let iX, iY
    for (let i = 0; i < 3; i++) {
      let rangeStart = PatternSVG.prototype.GRID_GUTTER * i + PatternSVG.prototype.SVG_MARGIN - PatternSVG.prototype.DOT_MAGNET,
          rangeEnd   = PatternSVG.prototype.GRID_GUTTER * i + PatternSVG.prototype.SVG_MARGIN + PatternSVG.prototype.DOT_MAGNET
      iX = (rangeStart <= x && rangeEnd >= x) ? i : iX
      iY = (rangeStart <= y && rangeEnd >= y) ? i : iY
    }

    let isEndOfPattern
    if (iX !== undefined && iY != undefined) {
      let dotIndex = iY * 3 + iX
      isEndOfPattern = this.addDot(dotIndex)
    }
    if (!isEndOfPattern)
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
   * @param {number} dotIndex [description]
   */
  addDot (dotIndex) {
    if (this.pattern.gotDot(dotIndex))
      return

    var newDots = this.pattern.addDot(dotIndex)

    if (navigator.vibrate)
      navigator.vibrate(20);

    for (let i = 0; i < newDots.length; i++) {
      let dot  = newDots[i],
          dotX = PatternSVG.prototype.GRID_GUTTER * (dotIndex % 3) + PatternSVG.prototype.SVG_MARGIN,
          dotY = PatternSVG.prototype.GRID_GUTTER * Math.floor(dotIndex / 3) + PatternSVG.prototype.SVG_MARGIN

      // Close current line
      this.updateLine(dotX, dotY)
      this.currentLine = null

      this.bigDotsEl.childNodes[dot].classList.add('active')

      // Check if finished
      if (this.pattern.isComplete())
        return this.checkPattern() && true

      // Start new one
      this.currentLine = dom.create('line', {
        x1: dotX,
        y1: dotY
      })
      this.patternEl.appendChild(this.currentLine)
    }
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
