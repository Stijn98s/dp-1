import {ValidatorStrategy} from './ValidatorStrategy';
import { CircuitConfiguration } from '../CircuitConfiguration';
import {GateFactory} from '../../factory/gateFactory';

export class MissingNodeTypesValidatorStrategy implements ValidatorStrategy {

    public Validate(config: CircuitConfiguration): string[] {
        const factory = GateFactory.GetInstance();
        return config.nodeTypes.filter((nodeType) => factory.notHasNodeType(nodeType));
    }
}
