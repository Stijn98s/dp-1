import {Simulation} from '../domain/simulation';
import {DrawRectangleVisitor} from './DrawRectangleVisitor';
import {DrawLineVisitor} from './DrawLineVisitor';

/** Responsible for drawing simulation to canvas
 * */
export class CanvasDrawer {

    constructor(private gateMap: Simulation) {
    }

    public draw(canvas: HTMLCanvasElement): void {
        const ctx = canvas.getContext('2d')!;
        canvas.width = 1000;
        canvas.height = 400;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const rectangleVisitor = new DrawRectangleVisitor(ctx);
        this.gateMap.Accept(rectangleVisitor);

        const lineVisitor = new DrawLineVisitor(ctx);
        this.gateMap.Accept(lineVisitor);

    }

}
