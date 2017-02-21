import dom from '../../utils/dom'

require('./selector.scss');

/**
 * Selector Controller
 * Component to build a one line selector
 * between different options via arrows
 * The class used for the parent element
 * is .selector, all childs are .selector-item
 */
class SelectorCtrl {

  /**
   * Setup the template and different options
   * See `setChoices` method to understand the
   * format of the following parameters
   * @param {Array} choiceList List of key/values to display
   */
  constructor (choiceList, defaultChoice) {
    this.selectionIndex = 0
    this.setupTemplate()
    this.setChoices(choiceList)
  }

  /**
   * Build template of the controller
   * @return {DOMElement}
   */
  setupTemplate () {
    this.btnLeft  = dom.create('span', 'selectbox-item active selector-left',  '<')
    this.btnRight = dom.create('span', 'selectbox-item active selector-right', '>')
    this.labelEl  = dom.create('span', 'selectbox-item selector-label')

    this.el = dom.create('div', 'selector selectbox', [
      this.btnLeft,
      this.btnRight,
      this.labelEl
    ])
    return this.el
  }

  /**
   * Set up listeners
   */
  init () {
    this.btnLeft.addEventListener('click', this.previous.bind(this))
    this.btnLeft.addEventListener('touchstart', this.previous.bind(this))
    this.btnRight.addEventListener('click', this.next.bind(this))
    this.btnRight.addEventListener('touchstart', this.next.bind(this))
  }

  /**
   * Set up the different available choices
   * Choice list format:
   * [
   *   { value: <int>, label: <string>, default: <boolean> },
   *   { value: 2, label: 'Easy'},
   *   { value: 3, label: 'Medium', default: true},
   *   { value: 4, label: 'Hard'},
   * ]
   * @param {Array} choiceList List of options to display
   */
  setChoices (choiceList) {
    this.choices = choiceList
    for (let i = this.choices.length - 1; i >= 0; i--) {
      this.selectionIndex = this.choices[i].default ? i : this.selectionIndex
    }
    this.selectionIndex = this.selectionIndex || 0
    this.updateLabel()
  }

  /**
   * Update the counter DOM to the value
   * set in the instance
   * @return {int} The new value of the counter
   */
  updateLabel () {
    this.selectionIndex = (this.selectionIndex + this.choices.length) % this.choices.length
    let choice = this.choices[this.selectionIndex]
    this.labelEl.textContent = choice.label
    if (this.selectCallback)
      this.selectCallback(this.choices[this.selectionIndex])
    return this.selectionIndex
  }

  /**
   * Decrement the counter
   * @return {int} The new value of the counter
   */
  next (e) {
    e.preventDefault()
    e.stopPropagation()
    this.selectionIndex++
    return this.updateLabel()
  }

  /**
   * Increment the counter
   * @return {int} The new value of the counter
   */
  previous (e) {
    e.preventDefault()
    e.stopPropagation()
    this.selectionIndex--
    return this.updateLabel()
  }

  /**
   * Listener for when a new item is selected
   * The listener will be called with only one
   * parameter: the new selected value
   * @param  {function} listener Select listener to set
   */
  onSelect (listener) {
    this.selectCallback = listener
    this.updateLabel()
  }

  /**
   * Return the current choice selected
   * @return {int}
   */
  getValue () {
    let choice = this.choices[this.selectionIndex]
    return choice && choice.value
  }
}

export default SelectorCtrl
