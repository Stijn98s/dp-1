import {ApplictionCircuitConfiguration} from './../parser/ApplictionCircuitConfiguration';
import {Try} from '../util/try';
import {TextParser} from './../parser/textParser';
import {Simulation} from './../domain/simulation';
import {ApplicationCircuitBuilder} from './ApplicationCircuitBuilder';

export class App {

    private textParser = new TextParser();
    private simBuilder = new ApplicationCircuitBuilder();
    private errors: string[] = [];

    /** Attempt to convert string text conf into simulation
    * */
    public GetCircuitConfig(text: string): Simulation | undefined {
        this.errors = [];
        const out: Try<ApplictionCircuitConfiguration> = {};
        if (this.textParser.tryParseTextToConfig(text, out)) {
            return this.simBuilder.buildApp(out.value!);
        }
        this.errors = out.errors!;
    }



    /* Returns errors produced by last simulation generation
    * */
    get Errors() {
        return [...(this.errors || []), ...(this.simBuilder.Errors || [])];
    }
}
