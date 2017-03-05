import dom from '../../utils/dom'

require('./extender.scss');

/**
 * Extender class
 * Simple controller to show/hide long content
 * with a button.
 */
class ExtenderCtrl {

  /**
   * Every instance require a title which is the dropdown
   * button text, the content that can be a string or
   * a DOM element to display, and the initial state
   * of the extender.
   * @param  {String}  title      Button title
   * @param  {String}  content    Content text of DOM element to display
   * @param  {Boolean} isExpanded Initial state of the controller
   */
  constructor (title, content, isExpanded) {
    this.title      = title
    this.content    = content
    this.isExpanded = isExpanded

    this.setupTemplate()
  }

  /**
   * Build template of the controller
   * @return {DOMElement}
   */
  setupTemplate () {
    let content = this.content instanceof String ? this.content : [this.content]
    this.buttonEl  = dom.create('button', 'extender-button',  this.title)
    this.contentEl = dom.create('div',    'extender-content', content)

    this.el = dom.create('div', 'extender small-only', [
      this.buttonEl,
      this.contentEl
    ])

    this.render()
    return this.el
  }

  /**
   * Set up listeners
   */
  init () {
    this.buttonEl.addEventListener('click', this.toggle.bind(this))
  }

  /**
   * Show/hide the content
   * @param  {Boolean} force Force to show or hide if provided
   */
  toggle (force) {
    this.isExpanded = (force instanceof Boolean) ? force : !this.isExpanded
    this.render()
  }

  /**
   * Render the DOM from the state of the controller
   *
   */
  render () {
    this.el.classList[this.isExpanded ? 'add' : 'remove']('active')
  }
}

export default ExtenderCtrl
