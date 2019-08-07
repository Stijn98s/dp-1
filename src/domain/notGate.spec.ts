import { NotGate } from './notGate';
import { Simulation } from './simulation';

describe('NotGate', () => {
  it('Correct defaults', () => {
    const gate = new NotGate();
    expect(gate.Type).toBe('!');
    expect(gate.GetSignal()).toBe(undefined);
    expect(gate.GetName()).toBe(undefined);
  });

  it('Correct signal true', () => {
    const mediator = ({
      SignalMediator: jest.fn(),
    } as any) as Simulation;
    const gate = new NotGate();
    gate.SetMediator(mediator);
    const source = new NotGate();
    source.SetMediator(mediator);
    gate.addSource(source);
    gate.Signal(false, source);
    expect(gate.GetSignal()).toBe(true);
  });

  it('Correct signal false', () => {
    const mediator = ({
      SignalMediator: jest.fn(),
    } as any) as Simulation;
    const gate = new NotGate();
    gate.SetMediator(mediator);
    const source = new NotGate();
    source.SetMediator(mediator);
    gate.addSource(source);
    gate.Signal(true, source);
    expect(gate.GetSignal()).toBe(false);
  });

  it('Correct signal false', () => {
    const gate = new NotGate();
    gate.Signal(false);
    expect(gate.GetSignal()).toBe(undefined);
  });
});
