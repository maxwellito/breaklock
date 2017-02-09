import StatusBarCtrl from './statusBar.ctrl'
import HistoryCtrl from './history.ctrl'
import LockCtrl from './lock.ctrl'
import Pattern from '../models/pattern'
import PatternSVG from '../utils/patternSVG'
import config from '../config'

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
    this.statusBar = new StatusBarCtrl(onEnd)
    this.history   = new HistoryCtrl()
    this.lock      = new LockCtrl(this.newAttempt.bind(this)); //# TO_DO move the dot length to dynamic
    this.pattern   = null
    this.type      = null

    //# QUESTION: Does it really make sense?
    this.statusBar.init()
    this.lock.init()

    this.setupTemplate()
  }

  /**
   * Build template of the controller
   * @return {SVGDOMElement}
   */
  setupTemplate () {
    this.el = document.createElement('div')
    this.el.setAttribute('class', 'game-layout')

    // Add components
    this.el.appendChild(this.statusBar.el)
    this.el.appendChild(this.history.el)
    this.el.appendChild(this.lock.el)

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
    this.lock.setDotLength(difficulty)
    this.pattern = new Pattern(difficulty)
    this.pattern.fillRandomly()
    this.history.clear()

    switch (type) {
      case config.GAME.TYPE.PRACTICE:
        return this.statusBar.setCounter(0)
      case config.GAME.TYPE.CHALLENGE:
        return this.statusBar.setCounter(10)
      case config.GAME.TYPE.COUNTDOWN:
        return this.statusBar.setCountdown(60)
    }
  }

  newAttempt (pattern) {
    // Generate a SVG from the pattern provided
    let attemptSVG = new PatternSVG()
    attemptSVG.addDots(1)
    attemptSVG.addPattern(pattern, 14, ['#999','#ccc','#fff']) //# TO_DO: Need consts

    let match = this.pattern.compare(pattern)
    PatternSVG.prototype.addCombinaison.apply(attemptSVG, match)

    if (match[0] === this.pattern.dotLength) {
      // Success case
      alert('UNLOCKED! ;)')
      return true
    }
    else {
      // Fail case
      this.history.stackPattern(attemptSVG.getSVG())
      switch (this.type) {
        case config.GAME.TYPE.PRACTICE:
          return this.statusBar.incrementCounter()
        case config.GAME.TYPE.CHALLENGE:
          if (this.statusBar.decrementCounter() === 0) {
            alert('ACCESS DENIED!')
          }
          break;
      }
      return false
    }
  }
}

export default GameCtrl
