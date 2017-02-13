import config from '../../config'
import Pattern from '../../models/pattern'
import PatternSVG from '../../utils/patternSVG'
import dom from '../../utils/dom'

require('./summary.scss');

class SummaryCtrl {

  constructor (onAction) {
    this.onAction = onAction
    this.setupTemplate()
    this.init()
  }

  /**
   * Build template of the controller
   * @return {DOMElement}
   */
  setupTemplate () {


    // Action buttons
    this.actionButtons = {}
    for (let action in config.GAME.ACTIONS) {
      let btn = dom.create('button', {rel: config.GAME.ACTIONS[action]}, action)
      this.actionButtons[action] = btn
    }

    // Social links
    this.socialButtons = []
    for (let platform in config.SOCIAL.PLATFORMS) {
      let btn = dom.create('a', {
        rel: 'noopener noreferrer',
        target: '_blank',
        platform
      }, config.SOCIAL.PLATFORMS[platform].NAME)
      this.socialButtons.push(btn)
    }

    this.titleEl   = dom.quickNode('h1', 'summary-title')
    this.detailsEl = dom.quickNode('p',  'summary-details')
    this.actionsEl = dom.create('div', {class: 'summary-actions'}, Object.values(this.actionButtons))
    this.socialEl  = dom.create('div', {class: 'summary-share'},   this.socialButtons)

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


    this.updateSocialLinks()

    for (let i in allowedActions) {
      // Display actions
    }

    this.toggle(true)
  }

  toggle (force) {
    force = (force != undefined) ? force : this.el.style.display === 'none'
    this.el.style.display = force ? 'inherit' : 'none'
  }

  triggerAction (event) {
    let actionId = parseInt(event.currentTarget.getAttribute('rel') || 0, 10)
    this.onAction(actionId)
  }

  updateSocialLinks () {
    //# provide a custom message
    this.socialButtons.forEach(item => {
      let socialId = item.getAttribute('platform'),
          socialObj = config.SOCIAL.PLATFORMS[socialId]

      item.setAttribute('href', socialObj.URL(config.URL, config.SOCIAL.MESSAGE, config.SOCIAL.TAGS))
    })
  }
}


export default SummaryCtrl
