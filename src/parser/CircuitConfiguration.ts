import {CircuitDefinitionPOJO} from '../pojo/circuitDefinitionPOJO';

export class CircuitConfiguration implements CircuitDefinitionPOJO {
    get gateTypeMap() {
        return this.definitionPOJO.gateTypeMap;
    }

    get gateLinkMap() {
        return this.definitionPOJO.gateLinkMap;
    }

    constructor(private definitionPOJO: CircuitDefinitionPOJO) {
    }


    get nodeTypes() {
        return [...new Set(this.gateTypeMap.values())];
    }

    get nonKeyGateMap() {
        return new Map([...this.gateLinkMap.entries()]
            .map(([[key, name], arr]) => ([key, arr.map(([key, name]) => (key))])));
    }
}

