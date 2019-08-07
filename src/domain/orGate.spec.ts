import { OrGate } from './orGate';
import { Simulation } from './simulation';

describe('OrGate', () => {
  it('Correct defaults', () => {
    const gate = new OrGate();
    expect(gate.Type).toBe('>=');
    expect(gate.GetSignal()).toBe(undefined);
    expect(gate.GetName()).toBe(undefined);
  });

  it('Correct signal true', () => {
    const mediator = ({
      SignalMediator: jest.fn(),
    } as any) as Simulation;
    const gate = new OrGate();
    gate.SetMediator(mediator);
    const source = new OrGate();
    source.SetMediator(mediator);
    gate.addSource(source);
    gate.Signal(true, source);
    expect(gate.GetSignal()).toBe(true);
  });

  it('Correct signal false', () => {
    const mediator = ({
      SignalMediator: jest.fn(),
    } as any) as Simulation;
    const gate = new OrGate();
    gate.SetMediator(mediator);
    const source = new OrGate();
    source.SetMediator(mediator);
    gate.addSource(source);
    gate.Signal(false, source);
    expect(gate.GetSignal()).toBe(false);
  });
});
