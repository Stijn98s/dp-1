import {CircuitConfiguration} from '../CircuitConfiguration';

export interface ValidatorStrategy {
    Validate(config: CircuitConfiguration): string[];
}
