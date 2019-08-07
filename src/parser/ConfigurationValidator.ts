import {CircuitConfiguration} from './CircuitConfiguration';
import {ValidatorStrategy} from './validation/ValidatorStrategy';
import {InfiniteLoopsValidatorStrategy} from './validation/InfiniteLoopsValidatorStrategy';
import {MissingNodeTypesValidatorStrategy} from './validation/MissingNodeTypesValidatorStrategy';

export class ConfigurationValidator {

    public static GetInstance() {
        if (this.instance == null) {
            this.instance = new ConfigurationValidator();
        }

        return this.instance;
    }

    private static instance: ConfigurationValidator;

    private validatorStrategies = [
        { name: 'InfiniteLoopsValidatorStrategy', validator: new InfiniteLoopsValidatorStrategy() },
        { name: 'MissingNodeTypesValidatorStrategy', validator: new MissingNodeTypesValidatorStrategy() },
    ];

    private validators = this.validatorStrategies;

    public GetErrors(config: CircuitConfiguration) {
        return this.validators.map(({validator}) => validator.Validate(config)).flat();
    }

    public GetNames() {
        return this.validatorStrategies.map((value: any) => value.name);
    }

    public SetValidators(validators: any[]) {
        this.validators = this.validatorStrategies.map((value: any) => {
            return validators.includes(value.name) ? value : null;
        }).filter((value: any) => !!value);
    }

    public GetValidators() {
        return this.validators.map((value: any) => value.name);
    }
}
