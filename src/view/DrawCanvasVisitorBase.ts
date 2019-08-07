import {GateVisitor} from './GateVisitor';
import {NodeMap} from '../domain/nodeMap';
import {NodeTargetDto} from '../builders/nodeTargetDto';
import {InputGate} from '../domain/inputGate';

export abstract class DrawCanvasVisitorBase extends GateVisitor {


    /*translates a gatemap to a map of x/y positions on a grid based on the nodemap size*/
    public LocationsMapForGates(gates: NodeMap) {
        const layers = this.findOptimalLayers(gates);
        const layerWidth = 100 / layers.length;
        const nodeLocations: Array<[string, { X: number, Y: number }]> = layers.flatMap((layer, indexOuter) => {
            const rowHeight = 100 / layer.length;
            return layer.map((gate, indexInner) =>
                [gate.node.GetName()!, {Y: rowHeight * indexInner, X: layerWidth * indexOuter}],
            );
        });
        return new Map(nodeLocations);
    }


    /** recurive function to unwrap the gate links to create horizonal layers
     * */
    private extractLayers(
        currentLayer: NodeTargetDto[],
        gateMap: NodeMap,
        allGates: NodeTargetDto[],
    ): NodeTargetDto[][] {
        const gates = currentLayer
            .flatMap((value) => gateMap.get(value.node) || [])
            .filter((value, index, array) => array.indexOf(value) === index)
            // common array operation to remove duplicates in array
            .filter((value) => allGates.indexOf(value) > -1);
        allGates = allGates.filter((value) => gates.indexOf(value) === -1);

        if (gates.length === 0) {
            return [];
        }

        const extractLayers = this.extractLayers(gates, gateMap, allGates);
        return [gates, ...(extractLayers || [])];

    }

    /* calls recursive function starting with first layer all InputGates
    * */
    private findOptimalLayers(gateMap: NodeMap) {
        const firstLayer = gateMap.Keys().filter(
            (value) => value.node instanceof InputGate,
        );
        return [
            firstLayer,
            ...this.extractLayers(firstLayer, gateMap, gateMap.Gates()),
        ];
    }

}
