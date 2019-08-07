import {CircuitConfiguration} from './CircuitConfiguration';
import {Try} from '../util/try';
import {CircuitDefinitionPOJO} from '../pojo/circuitDefinitionPOJO';
import {ApplictionCircuitConfiguration} from './ApplictionCircuitConfiguration';
import {ParsePojo} from '../pojo/parsePojo';

/**
 * Responsible for parsing/splitting text into a format that is readable for this app
 * */
export class TextParser {


    public tryParseTextToConfig(text: string, output: Try<ApplictionCircuitConfiguration>) {
        try {
            const {circuit, circuitDefinitions} = this.parseText(text);
            const definitions = [...circuitDefinitions.entries()]
                .map(([name, value]) => [name, new CircuitConfiguration(value)] as [string, CircuitConfiguration]);
            output.value = new ApplictionCircuitConfiguration(circuit, definitions);
            return true;
        } catch (e) {
            return false;
        }
    }

    /* parse text into application simulation and additional simulation definitions
    * */
    public parseText(text: string) {
        const defMatch = text.match(/DEF:.+?;.*?FED;/gms);
        let circuitDefinitions: Map<string, CircuitDefinitionPOJO> = new Map();
        if (defMatch) {
            const circuitArr = defMatch
                .map((value) => this.getCircuitDefinitions(value)!)
                .filter((value) => !!value);
            circuitDefinitions = new Map(circuitArr);
        }
        return {circuit: this.getCircuitTypesAndLinksMap(text), circuitDefinitions};
    }

    /*
    *   reads types and links from seperated text file
    * */
    private getCircuitTypesAndLinksMap(text: string): CircuitDefinitionPOJO {
        const [first, second] = text.split(/\n\n/).map((value) =>
            value
                .split(/[\n^]/)
                .map((value1) => value1.replace(';', ''))
                .filter((value2) => !value2.match(/(^#|^$)/)),
        );

        const gateTypeMap = new Map(this.extractKeyValues(first));
        const splitGateLinks = this.extractKeyValues(second)
            .map(this.splitTargetGates) as ParsePojo;
        const gateLinkMap = new Map(splitGateLinks);
        return {gateLinkMap, gateTypeMap};
    }

    /* split second source and target, e.g. ['node1|one','nodetwo|two,nodetrhee|three'] => [['node1', "one"],['nodeTwo','two']]
    * */
    private splitTargetGates([key, value]: [string, string]) {
        return [key.split('|'), value
            .split(',')
            .map((targets) => targets.split('|'))];
    }

    /* split second source and target, e.g. node1:nodetwo => ['node1',['nodeTwo']]
   * */
    private extractKeyValues(arr: string[]): Array<[string, string]> {
        return arr
            .map((value) => value.split(':'))
            .map(([name, gateType]) => [name, gateType.trim()]);
    }


    /*applies circuit definition extraction to all sub definitions*/
    private getCircuitDefinitions(circuit: string): [string, CircuitDefinitionPOJO] | undefined {
        const match = circuit.match(/(?<=DEF:).*(?=;)/);
        if (match) {
            const name = match[0];
            const strippedCircuit = circuit.replace(/^.*|.*$/g, '');
            return [name, this.parseText(strippedCircuit).circuit];
        }
    }
}
