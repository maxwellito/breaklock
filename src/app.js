import GameCtrl from './controllers/game/game.ctrl'
import MenuCtrl from './controllers/menu/menu.ctrl'

require('./style.scss');

var introDom = document.getElementById('app-intro')
if (introDom) {
	introDom.remove()
}

var container = document.body

var myGame = new GameCtrl(() => {
  myMenu.el.style.display = ''
  myGame.el.style.display = 'none'
})
container.appendChild(myGame.el)

var myMenu = new MenuCtrl((type, difficulty) => {
  myGame.start(type, difficulty)

  myMenu.el.style.display = 'none'
  myGame.el.style.display = ''
})
myMenu.init()
container.appendChild(myMenu.el)

myGame.el.style.display = 'none'


window.scrollTo(0, 0)
