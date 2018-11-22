import Board from './Board'

var X: number = 100
var Y: number = 525
var width: number = 200
var height: number = 10

const board = new Board();


document.onkeydown = function(e) {
  let speed = 100

  if(e.keyCode == 39) {
    X = X + speed
    board.drawRectangle(X, Y, width, height)
  }
  if(e.keyCode == 37) {
    X = X - speed
    board.drawRectangle(X, Y, width, height)
  }
}


const initGame: any = () => {
  board.drawRectangle(X, Y, width, height)
}


initGame()
