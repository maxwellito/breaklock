import OptionCtrl from '../option/option.ctrl'
import SelectorCtrl from '../selector/selector.ctrl'
import config from '../../config'
import dom from '../../utils/dom'

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
    let title       = dom.create('h1', {}, 'BreakLock_'),
        description = dom.create('p', {}, 'Link the dots to find the pattern lock hidden. It\'s a modern version of mastermind combined with the Android lock. After every attempts the game will provide you indications. A plain circle is for correct dot in right order in the pattern. An empty bordered one is for correct dot in the wrong order. Good luck!')
    this.typeHelpEl = dom.create('p', {}, 'Future info about the challenge')
    this.btnStarlEl = dom.create('button', {}, 'GO_')

    // Options
    //# TO_DO: Move the option to config
    this.difficultyOption = new OptionCtrl([
      { value: 4, label: 'Easy'},
      { value: 5, label: 'Medium', default: true},
      { value: 6, label: 'Hard'}
    ])

    this.typeSelector = new SelectorCtrl([
      {
        value: config.GAME.TYPE.PRACTICE,
        label: 'Practice',
        description: 'No pressure, just discover and practice your game'
      },
      {
        value: config.GAME.TYPE.CHALLENGE,
        label: 'Challenge',
        description: 'Challenge mode give you 10 attempts only to win',
        default: true
      },
      {
        value: config.GAME.TYPE.COUNTDOWN,
        label: 'Countdown',
        description: 'Solve the game in one minute, without limit of attempts'
      }
    ])

    this.el = dom.create('div', {class: 'menu'} , [
      title,
      description,
      this.difficultyOption.el,
      this.typeSelector.el,
      this.typeHelpEl,
      this.btnStarlEl
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
  }

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
}

export default MenuCtrl
