import {NodeMap} from './nodeMap';
import {AndGate} from './andGate';

describe('nodeMap', () => {
    const gates = [new AndGate('one'), new AndGate('two'), new AndGate('three'), new AndGate('four')];
    let item: NodeMap;

    it('should rertrieve items for key', () => {
        item = new NodeMap();
        item.collection = [
            [{node: gates[0], name: 'A'}, [...gates.slice(1, 3).map((value) => ({node: value, name: undefined}))]],
            [{node: gates[1], name: 'B'}, []],
        ];
        const nodeTargetDtos = item.get(gates[0]);
        const nodeTargetDtos1 = item.get(gates[1]);

        expect(nodeTargetDtos).toEqual([...gates.slice(1, 3).map((value) => ({node: value, name: undefined}))]);
        expect(nodeTargetDtos1).toEqual([]);
    });

    it('should retrieve specific targets', () => {
        item = new NodeMap();
        item.collection = [
            [{node: gates[0], name: 'A'}, [...gates.slice(1, 3).map((value) => ({node: value, name: undefined}))]],
            [{node: gates[0], name: 'B'}, []],
        ];
        const nodeTargetDtos = item.GetByNodeAndTarget(gates[0], 'A');
        const nodeTargetDtos1 = item.GetByNodeAndTarget(gates[0], 'B');

        expect(nodeTargetDtos).toEqual([...gates.slice(1, 3).map((value) => ({node: value, name: undefined}))]);
        expect(nodeTargetDtos1).toEqual([]);
    });

    it('check values', () => {
        item = new NodeMap();
        item.collection = [
            [{node: gates[0], name: 'A'}, [...gates.slice(1, 3).map((value) => ({node: value, name: undefined}))]],
            [{node: gates[0], name: 'B'}, []],
        ];

        expect(item.Values()).toEqual(
            // tslint:disable-next-line:max-line-length
            [{name: undefined, node: {name: 'two', sources: []}}, {name: undefined, node: {name: 'three', sources: []}}],
        );
    });

    it('check keys', () => {
        item = new NodeMap();
        item.collection = [
            [{node: gates[0], name: 'A'}, [...gates.slice(1, 3).map((value) => ({node: value, name: undefined}))]],
            [{node: gates[0], name: 'B'}, []],
        ];

        expect(item.Keys()).toEqual(
            // tslint:disable-next-line:max-line-length
            [{name: 'A', node: {name: 'one', sources: []}}, {name: 'B', node: {name: 'one', sources: []}}],
        );
    });

    it('add to collection', () => {
        item = new NodeMap();
        item.collection = [
            [{node: gates[0], name: 'A'}, [...gates.slice(1, 3).map((value) => ({node: value, name: undefined}))]],
            [{node: gates[0], name: 'B'}, []],
        ];

        item.set({node: gates[0]}, []);

        expect(item.collection).toEqual([
            [{node: gates[0], name: 'A'}, [...gates.slice(1, 3).map((value) => ({node: value, name: undefined}))]],
            [{node: gates[0], name: 'B'}, []],
            [{node: gates[0]}, []],
        ])
    });
});
