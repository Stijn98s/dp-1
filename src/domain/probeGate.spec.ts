import { ProbeGate } from './probeGate';
import { Simulation } from './simulation';

describe('ProbeGate', () => {
  it('Correct defaults', () => {
    const gate = new ProbeGate();
    expect(gate.Type).toBe('|');
    expect(gate.GetSignal()).toBe(undefined);
    expect(gate.GetName()).toBe(undefined);
  });

  it('Correct signal true', () => {
    const mediator = ({
      SignalMediator: jest.fn(),
    } as any) as Simulation;
    const gate = new ProbeGate();
    gate.SetMediator(mediator);
    const source = new ProbeGate();
    source.SetMediator(mediator);
    gate.addSource(source);
    gate.Signal(true, source);
    expect(gate.GetSignal()).toBe(true);
  });

  it('Correct signal false', () => {
    const mediator = ({
      SignalMediator: jest.fn(),
    } as any) as Simulation;
    const gate = new ProbeGate();
    gate.SetMediator(mediator);
    const source = new ProbeGate();
    source.SetMediator(mediator);
    gate.addSource(source);
    gate.Signal(false, source);
    expect(gate.GetSignal()).toBe(false);
  });

  it('Correct toString', () => {
    const mediator = ({
      SignalMediator: jest.fn(),
    } as any) as Simulation;
    const gate = new ProbeGate();
    gate.SetMediator(mediator);
    gate.SetName('C');
    expect(gate.toString()).toBe('C:| ');
  });

  it('Correct toString', () => {
    const mediator = ({
      SignalMediator: jest.fn(),
    } as any) as Simulation;
    const gate = new ProbeGate();
    gate.SetMediator(mediator);
    gate.SetName('C');
    gate.Signal(true);
    expect(gate.toString()).toBe('C:| true');
  });
});
