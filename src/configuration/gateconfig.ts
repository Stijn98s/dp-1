import {GateFactory} from '../factory/gateFactory';
import {ProbeGate} from '../domain/probeGate';
import {OrGate} from '../domain/orGate';
import {AndGate} from '../domain/andGate';
import {NotGate} from '../domain/notGate';
import {InputGate} from '../domain/inputGate';

export  class GateFactoryConfig {

    public static configureInitial() {
        const instance = GateFactory.GetInstance();

        instance.Register('INPUT_HIGH', new InputGate(true));
        instance.Register('INPUT_LOW', new InputGate(false));
        instance.Register('PROBE', new ProbeGate());
        instance.Register('OR', new OrGate());
        instance.Register('AND', new AndGate());
        instance.Register('NOT', new NotGate());

    }
}


