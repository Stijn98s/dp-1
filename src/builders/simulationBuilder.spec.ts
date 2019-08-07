import {SimulationBuilder} from './simulationBuilder';
import {CircuitConfiguration} from '../parser/CircuitConfiguration';
import {MissingNodeTypesValidatorStrategy} from '../parser/validation/MissingNodeTypesValidatorStrategy';
import {CircuitDefinitionPOJO} from '../pojo/circuitDefinitionPOJO';
import {GateFactory} from '../factory/gateFactory';
import {AndGate} from '../domain/andGate';
import {GateFactoryConfig} from '../configuration/gateconfig';
import {ConfigurationValidator} from '@/parser/ConfigurationValidator';


describe('simulation builder', () => {

    let simulationBuilder!: SimulationBuilder;
    let configuration!: CircuitConfiguration;
    let missingNodeStrategy: MissingNodeTypesValidatorStrategy;
    beforeEach(() => {
        missingNodeStrategy = new MissingNodeTypesValidatorStrategy();
        const gateLinkMap: Array<[[string, string], Array<[string, string]>]> = [
            [['A', 'l'], [['and', 'r']]],
            [['B', 'r'], [['and', 'l']]],
            [['and', 'l'], [['p1', 'r']]],
        ];

        const gateTypeMap: Array<[string, string]> = [
            ['A', 'INPUT_HIGH'],
            ['B', 'INPUT_HIGH'],
            ['and', 'AND'],
            ['p1', 'PROBE']];
        const circuitPojo: CircuitDefinitionPOJO = {
            gateLinkMap: new Map(gateLinkMap),
            gateTypeMap: new Map(gateTypeMap),
        };
        //@ts-ignore
        delete GateFactory.instance;

        GateFactory.GetInstance();
        GateFactoryConfig.configureInitial();
        simulationBuilder = new SimulationBuilder({GetErrors(config: CircuitConfiguration) {
            return [];
            }} as any as ConfigurationValidator);
        configuration = new CircuitConfiguration(circuitPojo);
    });

    it('builds simulation by config', () => {

        const simulation = simulationBuilder.SetConfig(configuration).BuildSimulator((error) => {
            expect(error).toEqual([]);
        });

        expect(simulation!.Gates.collection.length).toEqual(3);
    });
});
