import {Gate} from './../domain/gate';
import {Simulation} from './../domain/simulation';

export abstract class GateVisitor {

    public Visit(circuit: Gate) {
        if (circuit instanceof Simulation) {
            this.VisitCircuitConfiguration(circuit);
        }
    }

    public abstract VisitCircuitConfiguration(circuit: Simulation): void;

}
