import Pattern from '../../models/pattern'
import PatternSVG from '../../utils/patternSVG'
import dom from '../../utils/dom'
import config from '../../config'

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

    this.el = myPatternSVG.getSVG()
    this.el.setAttribute('class', 'lock')
    this.patternEl = myPatternSVG.addGroup({
      'stroke-width': '2',
      'stroke': config.COLORS.BRIGHT,
      'stroke-linecap': 'round'
    })
    this.bigDotsEl = myPatternSVG.addDots(9, {class: 'lock-flashdots'})

    myPatternSVG.addDots(2)
    return this.el
  }

  /**
   * Start listening to user input
   */
  init () {
    // start listening for events (fingers)
    this.el.addEventListener('touchstart', this.touchStart.bind(this))
    this.el.addEventListener('touchmove',  this.touchUpdate.bind(this))
    this.el.addEventListener('touchend',   this.touchEnd.bind(this))

    // start listening for mouse
    this.el.addEventListener('mousedown', this.mouseStart.bind(this))
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
  mouseStart (t) {
    this.reset()

    this.mouseUpdateBind = this.mouseUpdate.bind(this)
    this.mouseEndBind   = this.mouseEnd.bind(this)
    this.el.addEventListener('mousemove', this.mouseUpdateBind)
    window.addEventListener('mouseleave', this.mouseEndBind)
    window.addEventListener('mouseup',    this.mouseEndBind)
    this.mouseUpdate(t)
  }

  /**
   * Listener for mouse move while drowing a pattern
   * with the mouse.
   * @param  {MouseEvent} t Mouse move event
   */
  mouseUpdate (t) {
    t.preventDefault()
    t.stopPropagation()

    let e = t.currentTarget.getBoundingClientRect(),
        x = Math.max(0, Math.min(PatternSVG.prototype.SVG_WIDTH, Math.round(PatternSVG.prototype.SVG_WIDTH / e.width  * (t.pageX - e.left)))),
        y = Math.max(0, Math.min(PatternSVG.prototype.SVG_WIDTH, Math.round(PatternSVG.prototype.SVG_WIDTH / e.height * (t.pageY - e.top ))))
    
    this.updatePoint(x, y)
  }

  /**
   * Method to end drawing with mouse.
   * It will remove useless listeners and reset
   * the current pattern.
   * @param  {MouseEvent} t Mouse event
   */
  mouseEnd (t) {
    if (!this.isPendingReset)
      this.reset()
    this.el.removeEventListener('mousemove', this.mouseUpdateBind)
    window.removeEventListener('mouseout',   this.mouseEndBind)
    window.removeEventListener('mouseup',    this.mouseEndBind)
  }

  /* Touch listeners *************************************/

  /**
   * Listener for startring drwaing a pattern
   * with touch events.
   * This will only reset the current pattern
   * and start drawing the new one.
   * @param  {Event} t Touch Start event
   */
  touchStart (t) {
    this.reset()
    this.touchUpdate(t)
  }

  /**
   * Listener for touch events
   * The method will calculate the position of the finger
   * on the lock to update the line and add dots to the
   * current pattern.
   * @param  {Event} t Touch event
   */
  touchUpdate (t) {
    t.preventDefault()
    t.stopPropagation()

    let e = t.currentTarget.getBoundingClientRect(),
        x = Math.max(0, Math.min(PatternSVG.prototype.SVG_WIDTH, Math.round(PatternSVG.prototype.SVG_WIDTH / e.width * (t.targetTouches[0].pageX - e.left)))),
        y = Math.max(0, Math.min(PatternSVG.prototype.SVG_WIDTH, Math.round(PatternSVG.prototype.SVG_WIDTH / e.height * (t.targetTouches[0].pageY - e.top))))
    this.updatePoint(x, y)
  }

  /**
   * Listener for end of pattern drawing
   * with touch events.
   */
  touchEnd () {
    if (!this.isPendingReset)
      this.reset()
  }

  /*
   * Drawing logic
   */

  /**
   * Update the current pattern by providing
   * the position of the new cursor/finger
   * in ordinates scaled to SVG size.
   * @param  {Number} x Position X of pointer/finger
   * @param  {Number} y Position X of pointer/finger
   */
  updatePoint (x, y) {
    // Cancel if the current pattern is finished
    if (this.isPendingReset)
      return

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
      isEndOfPattern = this.triggerDot(dotIndex)
    }
    if (!isEndOfPattern)
      this.updateLine(x, y)

    return true
  }

  /**
   * Add a dot on the current pattern and the
   * intermediate ones if there's any.
   * @param {number} dotIndex Dot triggered index
   */
  triggerDot (dotIndex) {
    // Check if the current pattern got the dot
    if (this.pattern.gotDot(dotIndex))
      return

    // Get the list new dots from the one triggered.
    // This method return a list because adding a
    // dot might add some intermediate others.
    var newDots = this.pattern.addDot(dotIndex)

    if (navigator.vibrate)
      navigator.vibrate(20)

    newDots.forEach((dot, index) => {
      let dotX = PatternSVG.prototype.GRID_GUTTER * (dot % 3) + PatternSVG.prototype.SVG_MARGIN,
          dotY = PatternSVG.prototype.GRID_GUTTER * Math.floor(dot / 3) + PatternSVG.prototype.SVG_MARGIN

      // Close current line
      this.closeLine(dotX, dotY)
      this.bigDotsEl.childNodes[dot].classList.add('active')

      // Check if finished
      if ((index + 1) === newDots.length && this.pattern.isComplete())
        // The drawing here
        return this.checkPattern()
      else
        // Start new one
        this.startLine(dotX, dotY)
    })
  }

  /**
   * Reset the lock
   */
  reset () {
    // Clear timeout
    clearTimeout(this.isPendingReset)
    this.isPendingReset = null

    // Reset pattern
    this.pattern.reset()

    // Clear existing pattern
    this.currentLine = null
    for (let i = 0; i < 9; i++)
      this.bigDotsEl.childNodes[i].classList.remove('active')
    for (let i = this.patternEl.childNodes.length - 1; i >= 0; i--)
      this.patternEl.childNodes[i].remove()
    this.patternEl.setAttribute('stroke', config.COLORS.BRIGHT)
  }

  /**
   * Procedure for new patterns
   * @return {Boolean} True if the pattern tested is correct
   */
  checkPattern () {
    let itsAmatch = this.onNewPattern(this.pattern)

    this.isPendingReset = setTimeout(this.reset.bind(this), 1000)

    // for (let i = this.patternEl.childNodes.length - 1; i >= 0; i--)
    this.patternEl.setAttribute('stroke', itsAmatch ? config.COLORS.SUCCESS : config.COLORS.ERROR)

    return itsAmatch
  }

  /*
   * Drawn pattern
   */

  /**
   * Start a new 'current line'.
   * The current line is the one in progress of being
   * manipulated.
   * @param  {int} x Position X of the line starting point
   * @param  {int} y Position Y of the line starting point
   */
  startLine (x, y) {
    this.currentLine = dom.create('line', {
      x1: x,
      y1: y
    })
    this.patternEl.appendChild(this.currentLine)
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
   * Update and close the line of the current move
   * @param  {int} x Position X of the line ending point
   * @param  {int} y Position Y of the line ending point
   */
  closeLine (x, y) {
    this.updateLine(x, y)
    this.currentLine = null
  }
}

export default LockCtrl
