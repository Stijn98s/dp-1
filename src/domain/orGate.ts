import {Gate} from './gate';

export class OrGate extends Gate {
    get Type(): string {
        return '>=';
    }

    public Signal(input?: boolean, origin?: Gate): void {
        const find = this.findOrigin(origin);
        find.signal = input;
        if (input) {
            super.OnSignal(input!);
            return;
        }
        if (this.sources
            .every((value) => value.signal !== undefined) && this.sources.every((value) => !value!.signal)) {
            this.OnSignal(input!);
        }
    }
}
