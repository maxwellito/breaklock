import StatusBarCtrl from '../statusBar/statusBar.ctrl'
import HistoryCtrl   from '../history/history.ctrl'
import LockCtrl      from '../lock/lock.ctrl'
import SummaryCtrl   from '../summary/summary.ctrl'
import Pattern       from '../../models/pattern'
import PatternSVG    from '../../utils/patternSVG'
import config        from '../../config'
import dom           from '../../utils/dom'
import color         from '../../utils/color'

require('./game.scss');

/**
 * Game Controller
 * The playground, the arena
 * It combines a status bar, a pattern history
 * and a lock.
 */
class GameCtrl {

  /**
   * Setup the controller
   * The callback provided will be called with
   * different parameter depending on the type
   * of end (abort, success, fail)
   * @param  {function} onEnd Callback for end of game
   * @return {[type]}       [description]
   */
  constructor (onEnd) {
    // Lets leave it empty for now
    // just init the shite to help V8
    this.statusBar = new StatusBarCtrl(this.abort.bind(this))
    this.history   = new HistoryCtrl()
    this.lock      = new LockCtrl(this.newAttempt.bind(this))
    this.summary   = new SummaryCtrl(this.action.bind(this))
    this.pattern   = null
    this.type      = null
    this.isEnded   = false
    this.onEnd     = onEnd

    this.statusBar.init()
    this.lock.init()

    this.setupTemplate()
  }

  /**
   * Build template of the controller
   * @return {SVGDOMElement}
   */
  setupTemplate () {
    this.el = dom.create('div', 'game-layout view', [
      dom.create('div', 'view-bloc game-layout-dashboard', [
        this.statusBar.el,
        dom.create('div', 'history-wrap', [this.history.el])
      ]),
      dom.create('div', 'view-bloc game-layout-lock', [this.lock.el]),
      this.summary.el
    ])
    return this.el
  }


  /* Controls **********************************/

  /**
   * Start a new game
   * @param  {int} type       Type ID
   * @param  {int} difficulty Number of dots
   */
  start (type, difficulty) {
    this.type = type
    this.difficulty = difficulty
    this.lock.setDotLength(difficulty)
    this.pattern = new Pattern(difficulty)
    this.pattern.fillRandomly()
    this.history.clear('Connect ' + difficulty + ' dots')
    this.count = 0
    this.isEnded = false

    switch (type) {
      case config.GAME.TYPE.PRACTICE:
        return this.statusBar.setCounter(0)
      case config.GAME.TYPE.CHALLENGE:
        return this.statusBar.setCounter(10)
      case config.GAME.TYPE.COUNTDOWN:
        return this.statusBar.setCountdown(60)
    }
  }

  /**
   * Listener for new pattern drawn by the user
   * and provided via the the Lock controller.
   * @param  {Pattern} pattern Pattern to test
   * @return {Boolean}         True if the pattern is correct
   */
  newAttempt (pattern) {
    // Generate a SVG from the pattern provided
    let match      = this.pattern.compare(pattern),
        svgPattern = this.buildPatternSVG(pattern, match),
        isUnlocked = (match[0] === this.pattern.dotLength)

    this.count++

    if (this.isEnded) {
      this.statusBar.incrementCounter()
    }
    else if (isUnlocked) {
      // Success case
      if (this.type === config.GAME.TYPE.COUNTDOWN)
        this.statusBar.stopCountdown()

      this.isEnded = svgPattern
      this.summary.setContent(true, this.count)
    }
    else {
      // Fail case
      switch (this.type) {
        case config.GAME.TYPE.PRACTICE:
          this.statusBar.incrementCounter()
          break
        case config.GAME.TYPE.CHALLENGE:
          if (this.statusBar.decrementCounter() === 0) {
            this.isEnded = true
            this.summary.setContent(false, this.count)
          }
          break
      }
    }
    this.history.stackPattern(svgPattern)
    return isUnlocked
  }

  /**
   * Cancel listener for the status bar
   * @param  {Number} exitCode Exit code from the status bar
   */
  abort (exitCode) {
    if (exitCode) {
      // Exit from countdown
      this.isEnded = true
      this.statusBar.stopCountdown()
      this.summary.setContent(false, this.count)
    }
    else {
      // Abort from the user
      this.onEnd()
    }
  }

  /**
   * Action listener for the action of the summary
   * controller. To continue, try again or go back
   * to the home menu.
   * @param  {Number} actionId Action code to apply
   */
  action (actionId) {
    switch (actionId) {
    case config.GAME.ACTIONS.NEW_GAME:
      this.start(this.type, this.difficulty)
      break;
    case config.GAME.ACTIONS.BACK_HOME:
      this.abort()
      break;
    case config.GAME.ACTIONS.CONTINUE:
      // Nothing for now
      debugger
      if (this.isEnded === true) {
        let match      = this.pattern.compare(this.pattern)
        let svgPattern = this.buildPatternSVG(this.pattern, match)
        this.history.stackPattern(svgPattern)
      }
      this.statusBar.setCounter(this.count)
      break;
    }
    this.summary.toggle()
  }

  /**
   * Generate the pattern SVG from a pattern object
   * 
   * @param  {Pattern} pattern Pattern object to use to generate the SVG
   * @param  {Array}   match   Pattern match array
   * @return {SVGDOMElement}
   */
  buildPatternSVG (pattern, match) {
    // Generate a SVG from the pattern provided
    let attemptSVG = new PatternSVG()
    attemptSVG.addDots(1)
    attemptSVG.addPattern(pattern, 14, color.greydient(
      config.PATTERN.HEX_COLOR_START,
      config.PATTERN.HEX_COLOR_END,
      pattern.dotLength - 3
    ))

    // Add the feedback on the SVG
    if (match)
      PatternSVG.prototype.addCombinaison.apply(attemptSVG, match)

    let svgPattern = attemptSVG.getSVG()

    // Add the success class to the SVG
    if ((match[0] === pattern.dotLength))
      svgPattern.classList.add('success')

    return svgPattern
  }
}

export default GameCtrl
