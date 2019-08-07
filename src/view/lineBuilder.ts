import _ from 'lodash';

export class LineBuilder {

    public static Create() {
        return new LineBuilder(0, 0, 0, 0, false);
    }

    get X() {
        return this.x;
    }

    get Y() {
        return this.y;
    }

    get EndX() {
        return this.endX;
    }

    get EndY() {
        return this.endY;
    }

    get Enabled() {
        return this.enabled;
    }

    private constructor(
        private x: number,
        private y: number,
        private endY: number,
        private endX: number,
        private enabled: boolean,
    ) {
    }

    public draw(ctx: CanvasRenderingContext2D) {
        const {canvas: {height, width}} = ctx;
        const elementX = this.x * (width / 100);
        const elementY = this.y * (height / 100);
        const elementEndX = this.endX * (width / 100);
        const elementEndY = this.endY * (height / 100);

        ctx.moveTo(elementX + 100, elementY + 25);
        ctx.lineTo(elementEndX, elementEndY + 25);

        ctx.strokeStyle = 'black';


        ctx.stroke();
    }

    public SetX(x: number) {
        if (x > 100 || x < 0) {
            throw new Error(`X:${x} not supported`);
        }
        const clone = _.clone(this);
        clone.x = x;
        return clone;
    }

    public SetY(y: number) {
        if (y > 100 || y < 0) {
            throw new Error(`Y:${y} not supported`);
        }
        const clone = _.clone(this);
        clone.y = y;
        return clone;
    }

    public SetEndX(x: number) {
        if (x > 100 || x < 0) {
            throw new Error(`X:${x} not supported`);
        }
        const clone = _.clone(this);
        clone.endX = x;
        return clone;
    }

    public SetEndY(y: number) {
        if (y > 100 || y < 0) {
            throw new Error(`Y:${y} not supported`);
        }
        const clone = _.clone(this);
        clone.endY = y;
        return clone;
    }

    public SetEnabled(enabled: boolean) {
        const clone = _.clone(this);
        clone.enabled = enabled;
        return clone;
    }
}
