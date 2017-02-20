import leftPadNum from '../../utils/leftPadNum'
import dom from '../../utils/dom'

require('./countdown.scss');

/**
 * Countdown Controller
 * Basic component representing a small countdown
 * bar to be used in the status bar.
 */
class CountdownCtrl {

  /**
   * Not much here... just buildin the template
   */
  constructor () {
    this.setupTemplate()
  }

  /**
   * Build template of the controller
   * @return {DOMElement}
   */
  setupTemplate () {
    this.counterEl = dom.create('span', 'countdown-counter')
    this.barEl     = dom.create('span', 'countdown-content')

    let container = dom.create('span', 'countdown-container', [
      this.barEl
    ])

    this.el = dom.create('div', 'countdown', [
      this.counterEl,
      container
    ])
    return this.el
  }

  /**
   * Set the countdown.
   * @param {int}      duration Duration in seconds
   * @param {function} callback Callback to call on end
   */
  setTimer (duration, callback) {
    this.duration    = duration
    this.remaining   = duration
    this.endCallback = callback
    this.render()
  }

  /**
   * Starts the countdown
   *
   */
  start () {
    if (this.interval)
      return
    this.interval = window.setInterval(this.decrement.bind(this), 1000)
  }

  /**
   * Stops the countdown
   *
   */
  stop () {
    window.clearInterval(this.interval)
    this.interval = null
  }

  /**
   * Decrement the counter by one second
   *
   */
  decrement () {
    this.remaining--
    this.render()
  }

  /**
   * Render the component by using the values of
   * the instance. If the countdown is negative or
   * null, the end callback will be triggered
   */
  render () {
    this.remaining = this.remaining > 0 ? this.remaining : 0

    this.el.classList[this.remaining > 10 ? 'remove' : 'add']('alert')
    this.counterEl.textContent = leftPadNum(this.remaining, 3)
    this.barEl.style.width = (this.remaining / this.duration * 100) + '%'

    if (this.remaining == 0) {
      this.stop()
      this.endCallback && this.endCallback()
    }
  }
}

export default CountdownCtrl
