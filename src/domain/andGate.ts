import { Gate } from './gate';

export class AndGate extends Gate {
  get Type(): string {
    return '&';
  }

  public Signal(input?: boolean, origin?: Gate): void {
    this.findOrigin(origin).signal = input;
    if (this.shouldSend(input)) {
      this.OnSignal(input!);
    }
  }

  private shouldSend(input?: boolean) {
    //length >1 is neccecary for additional requirement of loose node detection | input LOW short circuits
    return !input || (this.sources.length > 1 && this.sources.every((value) => !!value.signal));
  }
}
