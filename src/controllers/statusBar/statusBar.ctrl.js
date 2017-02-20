import CountdownCtrl from '../countdown/countdown.ctrl'
import leftPadNum from '../../utils/leftPadNum'
import dom from '../../utils/dom'

require('./statusBar.scss');

/**
 * Status Bar Controller
 * Status bar of the current game in progress.
 * It allows to display 2 different modes:
 * - counter:
 *   showing only an integer that can be
 *   incremented or decremented
 * - countdown:
 *   showing a progress bar as a timer
 * The class used for the parent element
 * is .status-bar
 */
class StatusBarCtrl {

  /**
   * Constructor
   * The only callback provided is for cancelling
   * event from the user.
   * @param  {function} onCancel Cancel callback
   */
  constructor (onCancel) {
    this.cancelCallback = onCancel
    this.counterVal = null
    this.setupTemplate()
  }

  /**
   * Build template of the controller
   * @return {DOMElement}
   */
  setupTemplate () {
    this.cancelBtnEl = dom.create('button', 'status-bar-cancel', 'ABORT')
    this.counterEl = dom.create('span', 'status-bar-info')

    this.countdown = new CountdownCtrl()
    this.countdownEl = this.countdown.el
    this.countdownEl.setAttribute('class', 'status-bar-info')

    this.el = dom.create('div', 'status-bar', [
      this.cancelBtnEl,
      this.counterEl,
      this.countdownEl
    ])
    return this.el
  }

  /**
   * Set up listeners
   */
  init () {
    this.cancelBtnEl.addEventListener('click', () => {
      this.cancelCallback(0)
    })
  }

  /* Counter mode ******************************/

  /**
   * Set the counter mode to the status bar.
   * The count is the value displayed on the
   * counter.
   * @param {int} attemptCount Counter value to display
   */
  setCounter (count) {
    this.counterEl.style.display = 'inherit'
    this.countdownEl.style.display = 'none'
    this.counterVal = count
    this.updateCounter()
  }

  /**
   * Update the counter DOM to the value
   * set in the instance
   * @return {int} The new value of the counter
   */
  updateCounter () {
    this.counterEl.textContent = leftPadNum(this.counterVal, 3)
    return this.counterVal
  }

  /**
   * Decrement the counter
   * @return {int} The new value of the counter
   */
  decrementCounter () {
    this.counterVal--
    return this.updateCounter()
  }

  /**
   * Increment the counter
   * @return {int} The new value of the counter
   */
  incrementCounter () {
    this.counterVal++
    return this.updateCounter()
  }

  /* Countdown mode ****************************/

  /**
   * Set the countdown mode to the status bar
   * @param {int} duration Duration in seconds
   */
  setCountdown (duration) {
    this.counterEl.style.display = 'none'
    this.countdownEl.style.display = 'inherit'
    this.countdown.setTimer(duration, () => {
      this.cancelCallback(1)
    })
    this.countdown.start()
  }

  /**
   * Stops the countdown
   *
   */
  stopCountdown () {
    this.countdown.stop()
  }
}

export default StatusBarCtrl
