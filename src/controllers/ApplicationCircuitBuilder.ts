import {ApplictionCircuitConfiguration} from '../parser/ApplictionCircuitConfiguration';
import {SimulationBuilder} from '../builders/simulationBuilder';
import {CircuitConfiguration} from '../parser/CircuitConfiguration';
import {GateFactory} from '../factory/gateFactory';

export class ApplicationCircuitBuilder {
    private errors: string[] = [];

    get Errors() {
        return this.errors;
    }

    public buildApp(out: ApplictionCircuitConfiguration) {
        this.defineAdditionalCircuits(out.definitions);
        this.errors = [];
        return SimulationBuilder.Create()
            .SetConfig(out)
            .BuildSimulator((errors) => this.errors = errors);
    }


    /**
     * Registers circuit definitions in Gatefactory
     * */
    private defineAdditionalCircuits(definitions: Array<[string, CircuitConfiguration]>) {
        definitions.forEach(([name, configuration]) => {
            const gate = SimulationBuilder.Create()
                .SetConfig(configuration)
                .BuildSimulator((err) => {
                    this.errors = err;
                });
            if (!gate) {
                return;
            }
            gate.SetType(name);
            GateFactory.GetInstance().Register(name, gate);
        });
    }
}
