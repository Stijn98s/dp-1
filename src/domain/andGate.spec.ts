import { AndGate } from './andGate';
import { Simulation } from './simulation';
import { GateVisitor } from './../view/GateVisitor';

describe('AndGate', () => {
  it('Correct defaults', () => {
    const gate = new AndGate();
    expect(gate.Type).toBe('&');
    expect(gate.GetSignal()).toBe(undefined);
    expect(gate.GetName()).toBe(undefined);
  });

  it('Correct signal false', () => {
    const mediator = ({
      SignalMediator: jest.fn(),
    } as any) as Simulation;
    const gate = new AndGate();
    gate.SetMediator(mediator);
    const source = new AndGate();
    source.SetMediator(mediator);
    gate.addSource(source);
    gate.Signal(false, source);
    expect(gate.GetSignal()).toBe(false);
  });

  it('find origin no source', () => {
    const mediator = ({
      SignalMediator: jest.fn(),
    } as any) as Simulation;
    const gate = new AndGate();
    gate.SetMediator(mediator);
    expect(() => { gate.Signal(false); }).toThrow(Error);
  });

  it('Clone', () => {
    const mediator = ({
      SignalMediator: jest.fn(),
    } as any) as Simulation;
    const gate = new AndGate();
    gate.SetMediator(mediator);
    expect(gate).toEqual(gate.clone());
  });

  it('Accepts visitor', () => {
    const mediator = ({
      SignalMediator: jest.fn(),
    } as any) as Simulation;
    const visitor = ({
      Visit: jest.fn(),
    } as any) as GateVisitor;
    const gate = new AndGate();
    gate.SetMediator(mediator);
    gate.Accept(visitor);
  });
});
