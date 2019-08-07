import {Simulation} from '../domain/simulation';
import {LineBuilder} from './lineBuilder';
import {DrawCanvasVisitorBase} from './DrawCanvasVisitorBase';

export class DrawLineVisitor extends DrawCanvasVisitorBase {
    constructor(private ctx: CanvasRenderingContext2D) {
        super();
    }

    /** Draws lines for specified configuration
    * */
    public VisitCircuitConfiguration({Gates}: Simulation): void {
        const nodeLocationsMap = this.LocationsMapForGates(Gates);
        Gates.Entries().forEach(([sourceGate, destinationGates]) => {

            const newVar = nodeLocationsMap.get(sourceGate.node.GetName()!);
            if (!newVar) {
                return;
            }
            const {X, Y} = newVar;
            const lineBuilder = LineBuilder.Create()
                .SetX(X)
                .SetY(Y);
            destinationGates.forEach((destinationGate) => {
                const destinationLocation = nodeLocationsMap.get(destinationGate.node.GetName()!);
                if (!destinationLocation) {
                    return;
                }
                const {Y, X} = destinationLocation;

                lineBuilder
                    .SetEndY(Y)
                    .SetEndX(X)
                    .draw(this.ctx);
            });
        });
    }
}
