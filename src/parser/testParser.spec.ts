import { TextParser } from './textParser';
import {file3, FILEONETEXT, FILETWOTEXT} from '../constants';
import { GateFactoryConfig } from '../configuration/gateconfig';
import {CircuitConfiguration} from './CircuitConfiguration';
import {Try} from '@/util/try';


describe('textparser', () => {

    let textparser: TextParser;

    beforeEach(() => {
        textparser = new TextParser();
    });

    it('produces gate text map', () => {
        GateFactoryConfig.configureInitial();
        const output = {};
        textparser.tryParseTextToConfig(FILEONETEXT, output);
    });

    it('produces definition', () => {
        GateFactoryConfig.configureInitial();
        const out: Try<CircuitConfiguration> = {};
        let textConfiguration = textparser.tryParseTextToConfig(file3, out);
        let value = out.value;

    })
})
