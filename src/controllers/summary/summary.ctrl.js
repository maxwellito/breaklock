import summaryFeedback from './summaryFeedback'
import config from '../../config'
import Pattern from '../../models/pattern'
import PatternSVG from '../../utils/patternSVG'
import dom from '../../utils/dom'
import airportText from '../../utils/airportText'

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
    this.actionButtons = []
    for (let action in config.GAME.ACTIONS) {
      let btn = dom.create('button', {
        class: 'summary-action-button',
        rel: config.GAME.ACTIONS[action]
      }, [
        dom.icon(action.toLowerCase()),
        dom.create('span', {}, action)
      ])
      this.actionButtons.push(btn)
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

    // Feedback stuff
    let feedbackEl = dom.create('div', 'summary-feedback bloc', [
      dom.create('p', {}, [
        dom.create('span', {}, 'Tweet me your feedback at '),
        dom.create('a', {href: config.SOCIAL.PLATFORMS.TWITTER.URL('', '@mxwllt', ['breaklock'])}, '@mxwllt')
      ])
    ])

    this.titleEl   = dom.create('h1',  'summary-title highlight')
    this.detailsEl = dom.create('p',   'summary-details')
    this.revealEl  = dom.create('p',   'summary-reveal', 'Continue to see the solution.')
    this.actionsEl = dom.create('div', 'summary-actions bloc', this.actionButtons)
    this.socialEl  = dom.create('div', 'summary-share bloc',   this.socialButtons)

    this.el = dom.create('div', 'summary view', [
      dom.create('div', 'view-bloc', [this.titleEl, this.detailsEl, this.revealEl]),
      dom.create('div', 'view-bloc', [this.actionsEl, this.socialEl, feedbackEl])
    ])

    return this.el
  }

  /**
   * Set up listeners
   */
  init () {
    this.actionButtons.forEach(btn => btn.addEventListener('click', this.triggerAction.bind(this)))
  }

  /**
   * Set new content.
   * This is independent from the constructor,
   * because an instance must be reused.
   * @param {Boolean}       isSuccess      Was the game a success?
   * @param {Number}        attemptsCount  Message to display
   */
  setContent (isSuccess, attemptsCount) {
    this.titleEl.classList.remove('fail')
    this.titleEl.classList.remove('success')
    this.titleEl.classList.add(isSuccess ? 'success' : 'fail')
    airportText(this.titleEl, isSuccess ? 'Success!' : 'Fail!')

    this.detailsEl.textContent = summaryFeedback(isSuccess, attemptsCount)
    this.revealEl.classList[isSuccess ? 'add' : 'remove']('hide')

    this.updateSocialLinks()
    this.toggle(true)
  }

  /**
   * Show/hide the controller
   * @param  {Boolean} force Force to show or hide if provided
   */
  toggle (force) {
    force = (force != undefined) ? force : !this.el.classList.contains('active')
    this.el.classList[force ? 'add' : 'remove']('active')
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
    this.socialButtons.forEach(item => {
      let socialId = item.getAttribute('platform'),
          socialObj = config.SOCIAL.PLATFORMS[socialId]

      item.setAttribute('href', socialObj.URL(config.URL, config.SOCIAL.MESSAGE, config.SOCIAL.TAGS))
    })
  }
}

export default SummaryCtrl
