import leftPadNum from '../../utils/leftPadNum'

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
    this.el = document.createElement('div')
    this.el.setAttribute('class', 'countdown')

    // Counter
    this.counterEl = document.createElement('span')
    this.counterEl.setAttribute('class', 'countdown-counter')
    this.el.appendChild(this.counterEl)

    // Countdown
    let container = document.createElement('span')
    container.setAttribute('class', 'countdown-container')
    this.el.appendChild(container)

    this.barEl = document.createElement('span')
    this.barEl.setAttribute('class', 'countdown-content')
    container.appendChild(this.barEl)

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
