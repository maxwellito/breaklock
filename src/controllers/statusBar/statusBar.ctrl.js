import CountdownCtrl from '../countdown/countdown.ctrl'
import leftPadNum from '../../utils/leftPadNum'

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
    this.el = document.createElement('div')
    this.el.setAttribute('class', 'status-bar')

    // Cancel button
    this.cancelBtnEl = document.createElement('button')
    this.cancelBtnEl.setAttribute('class', 'status-bar-cancel')
    this.cancelBtnEl.textContent = 'ABORT'
    this.el.appendChild(this.cancelBtnEl)

    // Counter
    this.counterEl = document.createElement('span')
    this.counterEl.setAttribute('class', 'status-bar-info')
    this.el.appendChild(this.counterEl)

    // Countdown
    this.countdown = new CountdownCtrl()
    this.countdownEl = this.countdown.el
    this.countdownEl.setAttribute('class', 'status-bar-info')
    this.el.appendChild(this.countdownEl)

    return this.el
  }

  /**
   * Set up listeners
   */
  init () {
    this.cancelBtnEl.addEventListener('click', () => {
      this.cancelCallback()
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
