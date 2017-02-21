import dom from '../../utils/dom'

require('./option.scss');

/**
 * Option Controller
 * Component to build a one line selector
 * between different options
 * The class used for the parent element
 * is .option, all childs are .option-item
 */
class OptionCtrl {

  /**
   * Setup the template and different options
   * See `setChoices` method to understand the
   * format of the following parameters
   * @param {Array} choiceList List of key/values to display
   */
  constructor (choiceList, defaultChoice) {
    this.setupTemplate()
    this.setChoices(choiceList)
  }

  /**
   * Build template of the controller
   * @return {DOMElement}
   */
  setupTemplate () {
    this.el = dom.create('div', 'selectbox')
    return this.el
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
    let listener = this.selectListener.bind(this)
    choiceList.forEach((choice, index) => {
      let option = dom.create('span', {
        class: 'selectbox-item',
        rel: choice.value
      }, choice.label)
      option.addEventListener('click', listener)
      option.addEventListener('touchstart', listener)
      this.el.appendChild(option)

      if (choice.default)
        this.selectFromTag(option)

      return option
    })
    this.el.classList.add('selectbox-' + choiceList.length)
  }

  /**
   * Listener for click on items
   * @param  {Event} event Event catched
   */
  selectListener (e) {
    e.preventDefault()
    e.stopPropagation()
    this.selectFromTag(e.currentTarget)
  }

  /**
   * Update the selected value from the tag (:item)
   * provided in parameter. The call will apply the
   * class selected to the new tag (and remove it to
   * the previous one), then also update the selected
   * value of the instance.
   * @param  {DOMElement} tag Element tag selected
   */
  selectFromTag (tag) {
    if (this.selectedTag)
      this.selectedTag.classList.remove('active')

    this.selectedTag = tag
    this.selectedTag.classList.add('active')
    this.selectedValue = window.parseInt(tag.getAttribute('rel'), 10)
  }

  /**
   * Return the current choice selected
   * @return {int}
   */
  getValue () {
    return this.selectedValue
  }
}

export default OptionCtrl
