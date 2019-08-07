import * as _ from 'lodash';

export class RectangleBuilder {

    public static Create() {
        return new RectangleBuilder('', 0, 0, false);
    }

    get X() {
        return this.x;
    }

    get Y() {
        return this.y;
    }

    get Text() {
        return this.text;
    }

    get Enabled() {
        return this.enabled;
    }

    private constructor(private text: string, private x: number, private y: number, private enabled?: boolean) {
    }

    public draw(ctx: CanvasRenderingContext2D) {
        const {canvas: {height, width}} = ctx;
        ctx.lineWidth = 1.5;
        switch (this.enabled) {
            case true:
                ctx.strokeStyle = 'green';
                break;
            case undefined:
                ctx.strokeStyle = 'orange';
                break;
            case false:
                ctx.strokeStyle = 'red';
        }


        const elementX = this.x * (width / 100);
        const elementY = this.y * (height / 100);
        ctx.fillText(this.text, elementX + 30, elementY + 25);
        ctx.strokeRect(elementX, elementY, 100, 50);
    }

    public SetX(x: number) {
        if (x > 100 || x < 0) {
            throw new Error(`X:${x} not supported`);
        }

        const clone = _.clone(this);
        clone.x = x;
        return clone;
    }

    public SetText(text: string) {
        if (text.length > 100) {
            throw new Error(`text of length:${text.length} not supported`);
        }

        const clone = _.clone(this);
        clone.text = text;
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

    public SetEnabled(enabled?: boolean) {
        const clone = _.clone(this);
        clone.enabled = enabled;
        return clone;
    }
}
