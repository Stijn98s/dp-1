import {CircuitDefinitionPOJO} from '../pojo/circuitDefinitionPOJO';
import {CircuitConfiguration} from './CircuitConfiguration';

export class ApplictionCircuitConfiguration extends CircuitConfiguration {

    constructor(circuitPojo: CircuitDefinitionPOJO, public readonly definitions: Array<[string, CircuitConfiguration]>)
    {
        super(circuitPojo);
    }


}
