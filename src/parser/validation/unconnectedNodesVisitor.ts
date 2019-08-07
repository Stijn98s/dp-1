import {GateVisitor} from '../../view/GateVisitor';
import {Simulation} from '../../domain/simulation';
import {ProbeGate} from '../../domain/probeGate';

export class UnconnectedNodesVisitor extends GateVisitor {

    public static Create() {
        return new UnconnectedNodesVisitor();
    }

    /*validates no noded are not hit by running and then checking if probes are hit*/
    public VisitCircuitConfiguration(circuit: Simulation): void {
        circuit.StartInput();
        const everyProbeHit = circuit.Gates.Gates()
            .filter(({node}) => node instanceof ProbeGate)
            .filter(({node}) =>
                node.GetSignal() === undefined,
            );

        if (everyProbeHit.length > 0) {
            const probes = everyProbeHit.map((value) => value.node.GetName()).join(', ');
            throw new Error(`probes not reached: ${probes}`);
        }
    }
}
