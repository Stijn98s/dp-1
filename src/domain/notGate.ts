import { Gate } from './gate';

export class NotGate extends Gate {
  get Type(): string {
    return '!';
  }

  public Signal(input?: boolean, origin?: Gate): void {
    this.OnSignal(!input!);
  }
}
