import { Simulation } from './simulation';
import {NodeMap} from './../domain/nodeMap';
import { AndGate } from './andGate';
import { ProbeGate } from './probeGate';

describe('Simulation', () => {
  it('Correct defaults', () => {
    const gate = new Simulation(new NodeMap(), []);
    expect(gate.Type).toBe('Simulation');
    expect(gate.Outputs).toMatchObject([]);
    expect(gate.Gates).toMatchObject(new Map());

    gate.StartInput();

  });

  it('Correct defaults', () => {
    const map = new NodeMap();
    const node = new AndGate('A');
    map.set({node}, []);
    const gate = new Simulation(map, [{node, name: 'A'}]);
    expect(gate.Type).toBe('Simulation');
    expect(gate.Gates).toMatchObject(map);

    gate.StartInput();
    gate.addSource(node, 'A');
    gate.SignalMediator(new AndGate('B'), true, 'A');
    gate.Signal(true, new AndGate('B'));
  });

  it('Correct defaults', () => {
    const map = new NodeMap();
    const node = new ProbeGate('A');
    map.set({node}, []);
    const gate = new Simulation(map, [{node, name: 'A'}]);

    gate.StartInput();
    gate.addSource(node, 'A');
    gate.SignalMediator(new ProbeGate('B'), true, 'A');
  });
});
