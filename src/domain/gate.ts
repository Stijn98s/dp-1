import {Simulation} from './simulation';
import _ from 'lodash';
import {GateVisitor} from '@/view/GateVisitor';

export abstract class Gate {

    public abstract get Type(): string;

    protected signal?: boolean;
    protected mediator?: Simulation;
    protected sources: Array<{
        source: Gate;
        signal?: boolean;
    }> = [];

    constructor(private name?: string){}


    public SetMediator(mediator: Simulation) {
        this.mediator = mediator;
    }

    public clone(): Gate {
        return _.cloneDeep(this);
    }

    public toString() {
        return `${this.name}:${this.Type} ` || '';
    }

    public SetName(name: string) {
        this.name = name;
    }

    public abstract Signal(input?: boolean, origin?: Gate): void;

    public addSource(source: Gate, target?: string) {
        this.sources.push({source});
    }

    public GetName() {
        return this.name;
    }

    public GetSignal() {
        return this.signal;
    }

    public Accept(gateVisitor: GateVisitor) {
        gateVisitor.Visit(this);
    }

    public Equals(origin: Gate) {
        return origin.GetName() === this.GetName();
    }

    protected OnSignal(input: boolean) {
        if (this.mediator) {
            this.mediator.SignalMediator(this, input);
            this.signal = input;
        }
    }

    protected findOrigin(origin?: Gate) {
        const source = this.sources.find((value) => value.source === origin);
        if (!source) {
            throw new Error(`${origin} is not defined as gate source`);
        }
        return source;
    }
}
