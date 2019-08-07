import {DrawLineVisitor} from './DrawLineVisitor';
import {Simulation} from '../domain/simulation';
import {NodeMap} from '../domain/nodeMap';
import {GateVisitor} from './GateVisitor';
import {AndGate} from '../domain/andGate';
import {InputGate} from '../domain/inputGate';
import {RectangleBuilder} from './rectangleBuilder';
import {DrawRectangleVisitor} from './DrawRectangleVisitor';


describe('drawRectangleVisitor', () => {
    const gates = [new InputGate(true), new AndGate('two'), new AndGate('three'), new AndGate('four')];
    let rectangleBuilder: RectangleBuilder;

    beforeEach(() => {
        rectangleBuilder = {
            SetY: jest.fn(() => {
                return rectangleBuilder;
            }),
            SetX: jest.fn((val) => {
                return rectangleBuilder;
            }),
            draw: jest.fn(()=> {
            }),
            SetText: jest.fn(() => rectangleBuilder),
            SetEnabled: jest.fn(() => rectangleBuilder)
        } as any as RectangleBuilder;
        RectangleBuilder.Create = () => {
            return rectangleBuilder;
        };
    });


    it('should draw Rectangles on canvas', () => {
        const canvasMock = {
        } as CanvasRenderingContext2D;

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

        const drawLineVisitor = new DrawRectangleVisitor(canvasMock);
        drawLineVisitor.VisitCircuitConfiguration(simulation);
        expect(rectangleBuilder.draw).toBeCalledTimes(3);
        expect(rectangleBuilder.SetX).toBeCalledWith(0);
        expect(rectangleBuilder.SetY).toBeCalledWith(0);

    });

});
