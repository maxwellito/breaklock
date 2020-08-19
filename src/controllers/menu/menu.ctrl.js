import ExtenderCtrl from '../extender/extender.ctrl';
import OptionCtrl from '../option/option.ctrl';
import SelectorCtrl from '../selector/selector.ctrl';
import LangSelectorCtrl from '../langselector/langselector.ctrl';
import config from '../../config';
import dom from '../../utils/dom';
import airportText from '../../utils/airportText';

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
  constructor(onStart) {
    this.onStart = onStart;
    this.setupTemplate();
  }

  /**
   * Build template of the controller
   * @return {DOMElement}
   */
  setupTemplate() {
    let title = dom.create(
        'h1',
        'menu-title highlight unselectable',
        '#@name_app'
      ),
      intro = dom.create(
        'p',
        'menu-intro',
        '#@description'
      );
    this.title = title;
    this.typeHelpEl = dom.create('p', {}, 'Future info about the challenge');
    this.btnStarlEl = dom.create('button', 'action-btn', '#@button_start');

    airportText(title, '#@name_app');

    let instructions = new ExtenderCtrl(
      '#@button_instructions',
      document.getElementById('instructions-template')
    );
    instructions.init();

    // Options
    this.difficultyOption = new OptionCtrl([
      { value: config.GAME.DIFFICULTY.EASY, label: '#@button_easy', default: true },
      { value: config.GAME.DIFFICULTY.MEDIUM, label: '#@button_medium' },
      { value: config.GAME.DIFFICULTY.HARD, label: '#@button_hard' }
    ]);

    this.typeSelector = new SelectorCtrl([
      {
        value: config.GAME.TYPE.PRACTICE,
        label: '#@mode_practice',
        description: '#@mode_practice_description',
        default: true
      },
      {
        value: config.GAME.TYPE.CHALLENGE,
        label: '#@mode_challenge',
        description: '#@mode_challenge_description'
      },
      {
        value: config.GAME.TYPE.COUNTDOWN,
        label: '#@mode_countdown',
        description: '#@mode_countdown_description'
      }
    ]);
    const lang = (()=>{
      const x = window.location.pathname.split('/');
      while (true) {
        const y = x.pop();
        if (y === undefined) return 'EN';
        if (y.length === 2) return y.toUpperCase();
      }
    })();
    const langButton = dom.create('button', 'lang-button', lang);
    const langSelector = new LangSelectorCtrl();
    langButton.onclick = () => {
      langSelector.el.classList.toggle('disabled');
    };
    this.el = dom.create('div', 'menu-layout view', [
      dom.create('div', 'view-bloc menu-layout-instructions', [
        dom.create('div', '', [
          title,
          langButton,
        ]),
        intro,
        langSelector.el,
        instructions.el
      ]),
      dom.create('div', 'view-bloc menu-layout-form', [
        this.difficultyOption.el,
        this.typeSelector.el,
        this.typeHelpEl,
        this.btnStarlEl
      ])
    ]);
    return this.el;
  }

  /**
   * Set up listeners
   */
  init() {
    this.typeSelector.init();
    this.typeSelector.onSelect(this.typeChange.bind(this));
    this.btnStarlEl.addEventListener('click', this.start.bind(this));
    this.title.addEventListener('dblclick', this.triggerEasterEgg.bind(this));
  }

  /**
   * Start a new game by calling the callback
   * provided in the controller.
   */
  start() {
    this.onStart(
      this.typeSelector.getValue(),
      this.difficultyOption.getValue()
    );
  }

  /**
   * Selector for new type
   * @param  {object} type New selected type
   */
  typeChange(type) {
    this.typeHelpEl.textContent = type.description;
  }

  /**
   * Double click listener to trigger the OLED
   * screen mode for a deep black design.
   */
  triggerEasterEgg() {
    if (localStorage.getItem('isDeepBlack')) {
      localStorage.setItem('isDeepBlack', '');
      document.body.classList.remove('deepblack');
    } else {
      localStorage.setItem('isDeepBlack', 'on');
      document.body.classList.add('deepblack');
    }
  }
}

export default MenuCtrl;
