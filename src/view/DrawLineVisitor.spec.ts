import {DrawLineVisitor} from './DrawLineVisitor';
import {Simulation} from '../domain/simulation';
import {NodeMap} from '../domain/nodeMap';
import {GateVisitor} from './GateVisitor';
import {AndGate} from '../domain/andGate';
import {LineBuilder} from './lineBuilder';
import {InputGate} from '../domain/inputGate';


describe('drawLineVisitor', () => {
    const gates = [new InputGate(true), new AndGate('two'), new AndGate('three'), new AndGate('four')];
    let mockLineBuilder: LineBuilder;

    beforeEach(() => {
        mockLineBuilder = {
            SetEndX: jest.fn((val) => {
                return mockLineBuilder;
            }),
            SetEndY: jest.fn(() => {
                return mockLineBuilder;
            }),
            SetY: jest.fn(() => {
                return mockLineBuilder;
            }),
            SetX: jest.fn((val) => {
                return mockLineBuilder;
            }),
            draw: jest.fn(()=> {
            }),
        } as any as LineBuilder;
        LineBuilder.Create = () => mockLineBuilder;
    });


    it('should drawLines on canvas', () => {
        const canvasMock = {} as CanvasRenderingContext2D;

        const simulation: Simulation = ({
            get Gates(): NodeMap {
                const item = new NodeMap();
                item.collection = [
                    [{node: gates[0], name: 'A'}, [...gates.slice(1, 3).map((value) => ({node: value, name: undefined}))]],
                    [{node: gates[1], name: 'B'}, [{node: gates[2], name: 'B'}]],
                ];
                return item;
            },
            Accept(gateVisitor: GateVisitor) {
                gateVisitor.Visit(this);
            },
        } as any) as Simulation;

        const drawLineVisitor = new DrawLineVisitor(canvasMock);
        drawLineVisitor.VisitCircuitConfiguration(simulation);
        expect(mockLineBuilder.draw).toBeCalledTimes(3);
        expect(mockLineBuilder.SetEndX).lastCalledWith(50);
        expect(mockLineBuilder.SetX).toBeCalledWith(0);
        expect(mockLineBuilder.SetY).toBeCalledWith(0);
        expect(mockLineBuilder.SetEndY).toBeCalledWith(50);

    });

});
