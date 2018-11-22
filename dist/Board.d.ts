import Canvas from './canvas';
interface RectangleI {
    (x: number, y: number, width: number, height: number): void;
}
declare class Board2 extends Canvas {
    constructor();
    drawRectangle: RectangleI;
}
export default Board2;
