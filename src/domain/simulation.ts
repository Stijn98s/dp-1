import {Gate} from './gate';

import {InputGate} from './inputGate';
import {NodeTargetDto} from './../builders/nodeTargetDto';
import {ProbeGate} from './../domain/probeGate';
import {NodeMap} from './../domain/nodeMap';


export class Simulation extends Gate {

    public get Type(): string {
        return this.type;
    }

    get Outputs() {
        return this.outputs;
    }

    get Gates() {
        return this.sourceDestinationMap;
    }

    private type: string = 'Simulation';

    constructor(
        private readonly sourceDestinationMap: NodeMap,
        private outputs: NodeTargetDto[],
    ) {
        super();
        sourceDestinationMap.Entries().forEach(([source, destinations]) =>
            destinations.forEach(({node, name}) => {
                node.addSource(source.node, name);
            }));
        sourceDestinationMap.Gates().forEach(({node}) => {
            node.SetMediator(this);
        });
    }

    public SetType(name: string) {
        this.type = name;
    }

    public StartInput() {
        this.sourceDestinationMap
            .Keys()
            .filter(({node}) => node instanceof InputGate)
            .forEach((gate) => gate.node.Signal());
    }

    public addSource(source: Gate, target: string) {
        const targetGate = this.sourceDestinationMap
            .Keys()
            .find(({node}) => node.GetName() === target);
        if (!targetGate) {
            throw new Error(`target ${target} not found on simulation ${this.toString()}!`);
        }
        this.sourceDestinationMap.set({node: source}, [targetGate]);
    }

    public SignalMediator(origin: Gate, value: boolean, target?: string) {
        if (origin instanceof ProbeGate && this.mediator) {
            this.mediator.SignalMediator(this, value, origin.GetName());
            return;
        }
        if (!target) {
            this.sourceDestinationMap.get(origin)
                .forEach(({node}) => {
                    node.Signal(value, origin);
                });
        } else {
            const targets = this.sourceDestinationMap.GetByNodeAndTarget(origin, target);
            if (targets) {
                targets.forEach(({node}) => {
                    node.Signal(value, origin);
                });
            }
        }

    }

    public Signal(input?: boolean, origin?: Gate): void {
        this.SignalMediator(origin!, input!);
    }

    public toString(): string {
        return super.toString();
    }
}
