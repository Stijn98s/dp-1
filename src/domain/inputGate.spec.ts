import { InputGate } from './inputGate';
import { Simulation } from './simulation';

describe('InputGate', () => {
  it('Correct defaults', () => {
    const gate = new InputGate(false);
    expect(gate.Type).toBe('I: false');
    expect(gate.GetSignal()).toBe(false);
    expect(gate.GetName()).toBe(undefined);
  });

  it('Correct defaults', () => {
    const gate = new InputGate(true);
    expect(gate.Type).toBe('I: true');
    expect(gate.GetSignal()).toBe(true);
    expect(gate.GetName()).toBe(undefined);
  });

  it('Correct signal true', () => {
    const mediator = ({
      SignalMediator: jest.fn(),
    } as any) as Simulation;
    const gate = new InputGate(true);
    gate.SetMediator(mediator);
    gate.Signal(true);
    expect(gate.GetSignal()).toBe(true);
  });

  it('Correct signal false', () => {
    const mediator = ({
      SignalMediator: jest.fn(),
    } as any) as Simulation;
    const gate = new InputGate(false);
    gate.SetMediator(mediator);
    gate.Signal(false);
    expect(gate.GetSignal()).toBe(false);
  });

  it('Correct signal false', () => {
    const gate = new InputGate(false);
    gate.Signal(false);
    expect(gate.GetSignal()).toBe(false);
  });
});
