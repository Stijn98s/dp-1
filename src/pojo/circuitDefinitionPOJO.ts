export interface CircuitDefinitionPOJO {
    gateLinkMap: Map<[string, string], Array<[string, string]>>;

    gateTypeMap: Map<string, string>;
}
