import {Gate} from './gate';


export class InputGate extends Gate {
    constructor(signal: boolean, name?: string) {
        super(name);
        this.signal = signal;
    }

    get Type(): string {
        return `I: ${this.signal}`;
    }

    public Signal(input?: boolean, origin?: Gate): void {
        this.OnSignal(input !== undefined ? input : this.signal!);
    }

    SwitchSignal() {
        this.signal = !this.signal;
    }
}
