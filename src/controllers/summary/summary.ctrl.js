import config from '../../config'
import Pattern from '../../models/pattern'
import PatternSVG from '../../utils/patternSVG'
import dom from '../../utils/dom'

require('./summary.scss');

/**
 * Summary Controller
 * End of game screen. The one that tell
 * if the game was a success or not.
 * It provide different actions and social
 * button to promote the game.
 */
class SummaryCtrl {

  /**
   * Set up the template and init event.
   * The constructor take one parameter, the callback
   * for the following step.
   * @param  {function} onAction Action callback
   */
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
      let btn = dom.create('button', {
        class: 'summary-action-button',
        rel: config.GAME.ACTIONS[action]
      }, [
        dom.icon(action.toLowerCase()),
        dom.create('span', {}, action)
      ])
      this.actionButtons[action] = btn
    }

    // Social links
    this.socialButtons = []
    for (let platform in config.SOCIAL.PLATFORMS) {
      let btn = dom.create('a', {
        class: 'summary-share-link',
        rel: 'noopener noreferrer',
        target: '_blank',
        platform
      }, [dom.icon(config.SOCIAL.PLATFORMS[platform].ICON)])
      this.socialButtons.push(btn)
    }

    this.titleEl   = dom.quickNode('h1', 'summary-title')
    this.detailsEl = dom.quickNode('p',  'summary-details')
    this.actionsEl = dom.create('div', {class: 'summary-actions bloc'}, Object.values(this.actionButtons))
    this.socialEl  = dom.create('div', {class: 'summary-share bloc'},   this.socialButtons)

    this.el = dom.create('div', {class: 'summary view'}, [
      dom.create('div', {class: 'view-bloc'}, [this.titleEl, this.detailsEl]),
      dom.create('div', {class: 'view-bloc'}, [this.actionsEl, this.socialEl])
    ])

    return this.el
  }

  /**
   * Set up listeners
   */
  init () {
    for (let i in this.actionButtons) {
      this.actionButtons[i].addEventListener('click', this.triggerAction.bind(this))
    }
  }

  /**
   * Set new content.
   * This is independent from the constructor,
   * because an instance must be reused.
   * @param {Boolean} isSuccess      Was the game a success?
   * @param {String}  msg            Message to display
   * @param {Boolean} canContinue    Check if the player can continue to play
   * @param {Pattern} pattern        Winning pattern
   */
  setContent (isSuccess, msg, canContinue, pattern) {
    if (isSuccess) {
      this.titleEl.textContent = 'Success!'
      this.titleEl.classList.add('success')
    }
    else {
      this.titleEl.textContent = 'Fail!'
      this.titleEl.classList.add('success')
    }

    this.detailsEl.textContent = msg
    this.actionButtons.CONTINUE.style.display = canContinue ? 'inherit' : 'none';

    this.updateSocialLinks()
    this.toggle(true)
  }

  /**
   * Show/hide the controller
   * @param  {Boolean} force Force to show or hide if provided
   */
  toggle (force) {
    force = (force != undefined) ? force : this.el.style.display === 'none'
    this.el.style.display = force ? 'inherit' : 'none'
  }

  /**
   * Click listener for action buttons
   * @param  {Event} event Click event from action button
   */
  triggerAction (event) {
    let actionId = parseInt(event.currentTarget.getAttribute('rel') || 0, 10)
    this.onAction(actionId)
  }

  /**
   * Update social links from the current content set
   */
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
