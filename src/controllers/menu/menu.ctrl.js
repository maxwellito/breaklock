import ExtenderCtrl from '../extender/extender.ctrl'
import OptionCtrl from '../option/option.ctrl'
import SelectorCtrl from '../selector/selector.ctrl'
import config from '../../config'
import dom from '../../utils/dom'
import airportText from '../../utils/airportText'

require('./menu.scss');

/**
 * Menu Controller
 * Where all the magic starts!
 * The welcoming screen with all the different settings
 * to know what game to sart.
 */
class MenuCtrl {

  /**
   * ¯\_(ツ)_/¯
   */
  constructor (onStart) {
    this.onStart = onStart
    this.setupTemplate()
  }

  /**
   * Build template of the controller
   * @return {DOMElement}
   */
  setupTemplate () {
    let title = dom.create('h1', 'menu-title highlight unselectable', 'BreakLock'),
        intro = dom.create('p',  'menu-intro', 'A hybrid of Mastermind and the Android pattern lock. A game you gonna love to hate.')
    this.title = title;
    this.typeHelpEl = dom.create('p', {}, 'Future info about the challenge')
    this.btnStarlEl = dom.create('button', 'action-btn', 'START_')

    airportText(title, 'BreakLock')

    let instructions = new ExtenderCtrl('INSTRUCTIONS', document.getElementById('instructions-template'))
    instructions.init()

    // Options
    this.difficultyOption = new OptionCtrl([
      { value: config.GAME.DIFFICULTY.EASY,   label: 'Easy', default: true},
      { value: config.GAME.DIFFICULTY.MEDIUM, label: 'Medium'},
      { value: config.GAME.DIFFICULTY.HARD,   label: 'Hard'}
    ])

    this.typeSelector = new SelectorCtrl([
      {
        value: config.GAME.TYPE.PRACTICE,
        label: 'Practice',
        description: 'No pressure, just discover and practice your game',
        default: true
      },
      {
        value: config.GAME.TYPE.CHALLENGE,
        label: 'Challenge',
        description: 'Challenge mode give you 10 attempts only to win'
      },
      {
        value: config.GAME.TYPE.COUNTDOWN,
        label: 'Countdown',
        description: 'Solve the game in one minute, without limit of attempts'
      }
    ])

    this.el = dom.create('div', 'menu-layout view', [
      dom.create('div', 'view-bloc menu-layout-instructions', [
        title,
        intro,
        instructions.el
      ]),
      dom.create('div', 'view-bloc menu-layout-form', [
        this.difficultyOption.el,
        this.typeSelector.el,
        this.typeHelpEl,
        this.btnStarlEl
      ])
    ])
    return this.el
  }

  /**
   * Set up listeners
   */
  init () {
    this.typeSelector.init()
    this.typeSelector.onSelect(this.typeChange.bind(this))
    this.btnStarlEl.addEventListener('click', this.start.bind(this))
    this.title.addEventListener('dblclick', this.triggerEasterEgg.bind(this))
  }

  /**
   * Start a new game by calling the callback
   * provided in the controller.
   */
  start () {
    this.onStart(this.typeSelector.getValue(), this.difficultyOption.getValue())
  }

  /**
   * Selector for new type
   * @param  {object} type New selected type
   */
  typeChange (type) {
    this.typeHelpEl.textContent = type.description
  }

  /**
   * Double click listener to trigger the OLED
   * screen mode for a deep black design.
   */
  triggerEasterEgg () {
    if (localStorage.getItem('isDeepBlack')) {
      localStorage.setItem('isDeepBlack', '')
      document.body.classList.remove('deepblack')
    }
    else {
      localStorage.setItem('isDeepBlack', 'on')
      document.body.classList.add('deepblack')
    }
  }
}

export default MenuCtrl
