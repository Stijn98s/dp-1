import {Gate} from './gate';

export class ProbeGate extends Gate {
    get Type(): string {
        return '|';
    }


    public Signal(input?: boolean, origin?: Gate): void {
        this.OnSignal(input!);
    }

    public toString(): string {
        let output = '';

        if (this.signal !== undefined) {
            output = this.signal ? 'true' : 'false';
        }

        return super.toString() + output;
    }
}
