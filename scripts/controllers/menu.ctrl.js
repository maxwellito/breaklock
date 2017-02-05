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
  constructor () {
    this.setupTemplate()
  }

  /**
   * Build template of the controller
   * @return {DOMElement}
   */
  setupTemplate () {
    // Container
    this.el = document.createElement('div')
    this.el.setAttribute('class', 'menu')

    // Intro
    let title = document.createElement('h1')
    title.textContent = 'Break the code_'
    this.el.appendChild(title)

    let description = document.createElement('p')
    description.textContent = 'Link the dots to find the pattern lock hidden. It\'s a modern version of mastermind combined with the Android lock. After every attempts the game will provide you indications. A plain circle is for correct dot in right order in the pattern. An empty bordered one is for correct dot in the wrong order. Good luck!'
    this.el.appendChild(description)

    // Options
    //# TO_DO: Move the option to config
    this.difficultyOption = new OptionCtrl([
      { value: 4, label: 'Easy'},
      { value: 5, label: 'Medium', default: true},
      { value: 6, label: 'Hard'}
    ])
    this.el.appendChild(this.difficultyOption.el)

    this.typeSelector = new SelectorCtrl([
      { value: 4, label: 'Practice'},
      { value: 5, label: 'Challenge', default: true},
      { value: 6, label: 'Countdown'}
    ])
    this.el.appendChild(this.typeSelector.el)
    this.typeHelpEl = document.createElement('p')
    this.typeHelpEl.textContent = 'Future info about the challenge'
    this.el.appendChild(this.typeHelpEl)

    // Go button
    this.btnStarlEl = document.createElement('button')
    this.btnStarlEl.textContent = 'GO_'
    this.el.appendChild(this.btnStarlEl)

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
    console.log('::', this.typeSelector.getValue(), this.difficultyOption.getValue())
  }

  /**
   * Selector for new type
   * @param  {string} newType New selected type
   */
  typeChange (newType) {
    this.typeHelpEl.textContent = newType
  }
}
