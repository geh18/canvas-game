
class Canvas {
  public canvasElm: HTMLCanvasElement;
  public canvas: CanvasRenderingContext2D;

  constructor() {
    this.canvasElm = document.querySelector('canvas')
    this.canvas = this.canvasElm.getContext('2d')

    this.canvasElm.width = innerWidth
    this.canvasElm.height = innerHeight
  }

  clearCanvas() {
    this.canvas.clearRect(0, 0, this.canvasElm.width, this.canvasElm.height)
  }
}

export default Canvas;
