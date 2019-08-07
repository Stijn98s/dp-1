import { InfiniteLoopsValidatorStrategy } from "./InfiniteLoopsValidatorStrategy";
import { CircuitDefinitionPOJO } from '../../pojo/circuitDefinitionPOJO';
import { CircuitConfiguration } from '../CircuitConfiguration';

describe('loop validation strategy', ()=> {

    let loopStrategy!: InfiniteLoopsValidatorStrategy;
    let configuration!: CircuitConfiguration;
    beforeEach(() => {
        loopStrategy = new InfiniteLoopsValidatorStrategy();
        const gateLinkMap: Array<[[string, string], Array<[string, string]>]> = [
            [["one", 'l'], [['two', 'r']]],
            [['two', 'r'], [['three', 'l']]],
            [['three', 'l'], [['four', 'r']]],
            [['four', 'l'], [['one', 'r']]],
        ];
        const circuitPojo: CircuitDefinitionPOJO = {
            gateLinkMap: new Map(gateLinkMap),
            gateTypeMap: new Map([['one', 'someGate']])
        };
        configuration = new CircuitConfiguration(circuitPojo);
    })




    it('', () =>{
        const errors = loopStrategy.Validate(configuration);
        expect(errors).toEqual(['loop found: one-->two-->three-->four-->one'])
    })
});
