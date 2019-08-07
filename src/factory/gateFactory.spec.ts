import { GateFactory } from './gateFactory';
import { AndGate } from '../domain/andGate';

describe('GateFactory', () => {
    beforeEach(() => {
        // @ts-ignore
        delete GateFactory.instance;
    })

    it('Same instances', () => {
        expect(GateFactory.GetInstance()).toStrictEqual(GateFactory.GetInstance());
    });

    it('register type', () => {
        const factory = GateFactory.GetInstance();
        factory.Register('test', new AndGate());
        expect(factory.Types).toEqual(['test']);
    });

    it('create type', () => {
        const factory = GateFactory.GetInstance();
        expect(factory.Types).toEqual([]);
        expect(factory.notHasNodeType('test')).toBeTruthy();
        expect(() => { factory.Create('test', 'test'); }).toThrow(Error);
        factory.Register('test', new AndGate());
        expect(factory.Create('test', 'test')).toBeInstanceOf(AndGate);
        expect(factory.Types).toEqual(['test']);
        expect(factory.notHasNodeType('test')).toBeFalsy();
    });

    it('create multiple', () => {
        const factory = GateFactory.GetInstance();
        factory.Register('test', new AndGate());
        expect(factory.CreateBulk(['test', 'test'], ['test', 'test'], ['a', 'b'])).toEqual([new AndGate('test'), new AndGate('test')])
    });
})
