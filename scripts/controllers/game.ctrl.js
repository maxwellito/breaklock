import StatusBarCtrl from './statusBar.ctrl'
import HistoryCtrl from './history.ctrl'
import LockCtrl from './lock.ctrl'
import Pattern from '../models/pattern'
import PatternSVG from '../utils/patternSVG'

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
    this.lock      = new LockCtrl(4, this.newAttempt.bind(this)); //# TO_DO move the dot length to dynamic
    this.pattern   = null

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
   * @return {[type]} [description]
   */
  start () {
    this.pattern = new Pattern(4)
    this.pattern.fillRandomly()
    this.history.clear()
    // this.statusBar.setCounter(10)
    this.statusBar.setCountdown(60)
  }

  newAttempt (pattern) {
    // Generate a SVG from the pattern provided
    let attemptSVG = new PatternSVG()
    attemptSVG.addDots(1)
    attemptSVG.addPattern(pattern, 14, ['#999','#ccc','#fff']) //# TO_DO: Need consts

    let match = this.pattern.compare(pattern)
    if (match[0] === this.pattern.dotLength) {
      // Success case
      alert('UNLOCKED! ;)')
      return true
    }
    else {
      // Fail case
      PatternSVG.prototype.addCombinaison.apply(attemptSVG, match)
      this.history.stackPattern(attemptSVG.getSVG())
      if (this.statusBar.decrementCounter() === 0) {
      //  alert('ACCESS DENIED!')
      }
      return false
    }
  }
}

export default GameCtrl
