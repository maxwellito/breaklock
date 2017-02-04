/**
 * History Controller
 * Simple controller stacking the previous pattern
 * tested by the user. This is a simple dummy container
 * stacking all the SVGs
 * The class used is .history, for optimisation all
 * SVGs will use `will-change` or `transformZ` properties
 * to improve performance.
 */
class HistoryCtrl {
  constructor () {
    this.lastPattern = null
    this.setupTemplate()
  }

  /**
   * Build template of the controller
   * @return {SVGDOMElement}
   */
  setupTemplate () {
    this.el = document.createElement('div')
    this.el.setAttribute('class', 'history')

    this.container = document.createElement('div')
    this.container.setAttribute('class', 'history-container')
    this.el.appendChild(this.container)

    return this.el
  }

  /**
   * Add a new pattern in the container
   * @param {SVGDOM} pattern The try to stack
   */
  stackPattern (pattern) {
    if (this.lastPattern)
      this.container.insertBefore(pattern, this.lastPattern)
    else
      this.container.appendChild(pattern)
    this.lastPattern = pattern
  }

  /**
   * Clean the history
   */
  clear () {
    this.lastPattern = null

    // Clean the container
    this.container.remove()
    this.container = document.createElement('div')
    this.container.setAttribute('class', 'history-container')
    this.el.appendChild(this.container)
  }
}
