import Canvas from './canvas';

interface RectangleI {
  (x: number, y: number, width: number, height: number): void;
}

class Board2 extends Canvas {
  constructor() {
    super();
  }

  drawRectangle: RectangleI = (x, y, width, height) => {
    super.clearCanvas();
    this.canvas.beginPath();
    this.canvas.rect(x, y, width, height);
    this.canvas.fill();
  }
}


export default Board2;
