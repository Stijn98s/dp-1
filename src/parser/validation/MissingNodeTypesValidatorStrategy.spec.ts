import {MissingNodeTypesValidatorStrategy} from './MissingNodeTypesValidatorStrategy';
import {CircuitConfiguration} from '../CircuitConfiguration';
import {GateFactory} from '../../factory/gateFactory';
import {AndGate} from '../../domain/andGate';
import {CircuitDefinitionPOJO} from '../../pojo/circuitDefinitionPOJO';


describe('loop validation strategy', () => {

    let missingNodeStrategy!: MissingNodeTypesValidatorStrategy;
    let configuration!: CircuitConfiguration;
    beforeEach(() => {
        missingNodeStrategy = new MissingNodeTypesValidatorStrategy();
        const gateLinkMap: Array<[[string, string], Array<[string, string]>]> = [
            [['one', 'l'], [['two', 'r']]],
            [['two', 'r'], [['three', 'l']]],
            [['three', 'l'], [['four', 'r']]],
            [['four', 'l'], [['one', 'r']]],
        ];
        const circuitPojo: CircuitDefinitionPOJO = {
            gateLinkMap: new Map(gateLinkMap),
            gateTypeMap: new Map([['one', 'someGate'], ['two', 'twoGate']])
        };
        //@ts-ignore
        delete GateFactory.instance;

        GateFactory.GetInstance();

        configuration = new CircuitConfiguration(circuitPojo);
    });

    it('', () => {
        GateFactory.GetInstance().Register('someGate', new AndGate());
        const errors = missingNodeStrategy.Validate(configuration);
        expect(errors).toEqual(['twoGate']);
    });
});
