import {Gate} from '../domain/gate';

export class GateFactory {
    public static GetInstance() {
        if (!GateFactory.instance) {
            this.instance = new GateFactory();
        }
        return this.instance;
    }

    private static instance: GateFactory;

    private types = new Map<string, Gate>();

    public Register(key: string, gate: Gate) {
        this.types.set(key, gate);
    }

    public Create(gateType: string, name: string) {
        const gate = this.types.get(gateType);
        if (gate) {
            gate.SetName(name);
            return gate.clone();
        }
        throw Error(`${gateType} is not registered`);
    }

    get Types() {
        return [...this.types.keys()];
    }

    public CreateBulk(...gates: Array<[string, string]>) {
        return gates.map(([name, type]) => {
            try {
                return this.Create(type, name);
            } catch (e) {
                return null;
            }
        }).filter((value) => !!value)
            .map((value) => value as Gate);
    }

    public notHasNodeType(type: string) {
        return !this.types.has(type);
    }
}

