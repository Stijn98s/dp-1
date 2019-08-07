import {Simulation} from './../domain/simulation';
import {ProbeGate} from './../domain/probeGate';
import {CircuitConfiguration} from './../parser/CircuitConfiguration';
import * as _ from 'lodash';
import {ConfigurationValidator} from './../parser/ConfigurationValidator';
import {GateFactory} from '../factory/gateFactory';
import {Gate} from './../domain/gate';
import {NodeTargetDto} from './../builders/nodeTargetDto';
import {NodeMap} from './../domain/nodeMap';
import {UnconnectedNodesVisitor} from '../parser/validation/unconnectedNodesVisitor';

export class SimulationBuilder {

    public static Create() {
        return new SimulationBuilder(ConfigurationValidator.GetInstance());
    }


    private config!: CircuitConfiguration;

    constructor(private configValidator: ConfigurationValidator) {
    }

    public BuildSimulator(errorCb: (err: string[]) => any): Simulation | undefined {
        if (!this.config) {
            return errorCb(['No config Entered']);
        }
        const errors = this.configValidator.GetErrors(this.config);
        if (errors.length > 0) {
            errorCb(errors);
            return;
        }
        const gateMap = this.getGateMap();
        const outputs = gateMap.Values()
            .filter((value) => value.node instanceof ProbeGate);
        try {
            const simulation = new Simulation(gateMap, outputs);
            try {
                simulation.Accept(UnconnectedNodesVisitor.Create());
            } catch ({message}) {
                errorCb([message]);
            }
            return simulation;
        } catch (e) {
            errorCb([e.message]);
        }
    }

    public SetConfig(textConfig: CircuitConfiguration) {
        this.config = textConfig;
        return _.cloneDeep(this);
    }

    /** converts gate list of gates to map representing the links made in configuration
    * */
    private getGateMap() {
        const gates = this.getGates();
        const gate2dArray = ([...this.config.gateLinkMap].map(([[key, name], value]) => {
            const keyNode = gates.get(key);
            const valueNodes = value.map(([target, targetName]) => ({node: gates.get(target), name: targetName}));
            return [{node: keyNode, name}, valueNodes];
        })) as Array<[NodeTargetDto, NodeTargetDto[]]>;
        const nodeMap = new NodeMap();
        nodeMap.push(...gate2dArray);
        return nodeMap;
    }

    /** convert gatesconfig to instances of gates
    * */
    private getGates() {
        const gates = GateFactory.GetInstance()
            .CreateBulk(...this.config.gateTypeMap)
            .map((gate) => [gate.GetName(), gate]);
        return new Map(gates as Array<[string, Gate]>);
    }
}
