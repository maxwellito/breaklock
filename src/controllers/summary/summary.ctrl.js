import config from '../../config'
import Pattern from '../../models/pattern'
import PatternSVG from '../../utils/patternSVG'
import dom from '../../utils/dom'

require('./summary.scss');

class SummaryCtrl {

  constructor () {
    this.setupTemplate()
    this.init()
  }

  /**
   * Build template of the controller
   * @return {DOMElement}
   */
  setupTemplate () {
    this.titleEl   = dom.quickNode('h1',  'summary-title')
    this.detailsEl = dom.quickNode('p',   'summary-details')
    this.actionsEl = dom.quickNode('div', 'summary-actions')
    this.socialEl  = dom.quickNode('div', 'summary-share')

    // Action buttons
    this.actionButtons = {}
    for (let action in config.GAME.ACTIONS) {
      let btn = dom.create('button', {rel: config.GAME.ACTIONS[action]}, action)
      this.actionsEl.appendChild(btn)
      this.actionButtons[action] = btn
    }

    // Social links
    this.socialButtons = {}
    for (let platform in config.SOCIAL.PLATFORMS) {
      let btn = dom.create('button', {rel: config.SOCIAL.PLATFORMS[platform]}, platform)
      this.socialEl.appendChild(btn)
      this.socialButtons[platform] = btn
    }

    this.el = dom.create('div', {class: 'summary'}, [
      this.titleEl,
      this.detailsEl,
      this.actionsEl,
      this.socialEl
    ])

    return this.el
  }

  init () {
    for (let i in this.actionButtons) {
      this.actionButtons[i].addEventListener('click', this.triggerAction.bind(this))
    }
    for (let i in this.socialButtons) {
      this.socialButtons[i].addEventListener('click', this.triggerSocial.bind(this))
    }
  }

  setContent (isSuccess, msg, allowedActions, pattern) {
    if (isSuccess) {
      this.titleEl.textContent = 'Success!'
      this.titleEl.classList.add('success')
    }
    else {
      this.titleEl.textContent = 'Fail!'
      this.titleEl.classList.add('success')
    }

    this.detailsEl.textContent = msg



    for (let i in allowedActions) {
      // Display actions
    }

    this.el.style.display = 'inherit'
  }

  hide () {
    this.el.style.display = 'none'
  }

  triggerAction (event) {
    let actionId = parseInt(event.currentTarget.getAttribute('rel') || 0, 10)
  }

  triggerSocial (event) {
    let actionId = parseInt(event.currentTarget.getAttribute('rel') || 0, 10)
  }
}


export default SummaryCtrl
