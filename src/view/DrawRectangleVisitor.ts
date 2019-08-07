import {Simulation} from './../domain/simulation';
import {RectangleBuilder} from './rectangleBuilder';
import {DrawCanvasVisitorBase} from './DrawCanvasVisitorBase';

export class DrawRectangleVisitor extends DrawCanvasVisitorBase {
    constructor(private ctx: CanvasRenderingContext2D) {
        super();
    }


    /*draws rectangles for specified configuration*/
    public VisitCircuitConfiguration({Gates}: Simulation): void {
        const nodeLocationsMap = this.LocationsMapForGates(Gates);

        Gates.Gates().forEach((node) => {

            const newVar = nodeLocationsMap.get(node.node.GetName()!);
            if (newVar) {
                const {X, Y} = newVar;
                RectangleBuilder.Create()
                    .SetX(X)
                    .SetY(Y)
                    .SetText(node.node.toString())
                    .SetEnabled(node.node.GetSignal())
                    .draw(this.ctx);
            }
        });
    }


}
