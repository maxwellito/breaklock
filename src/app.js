import GameCtrl from './controllers/game/game.ctrl'
import MenuCtrl from './controllers/menu.ctrl'

require('./style.scss');

var myGame = new GameCtrl(() => {
  myMenu.el.style.display = 'inherit'
  myGame.el.style.display = 'none'
})
document.body.appendChild(myGame.el)

var myMenu = new MenuCtrl((type, difficulty) => {
  myGame.start(type, difficulty)

  myMenu.el.style.display = 'none'
  myGame.el.style.display = 'inherit'
})
myMenu.init()
document.body.appendChild(myMenu.el)

myGame.el.style.display = 'none'
