import { file4 } from './../constants';
import {App} from './App';
import {GateFactoryConfig} from '../configuration/gateconfig';

describe('simulation builder', () => {

    it('test circuit 1', () =>{
        GateFactoryConfig.configureInitial();
        const app = new App();
        app.GetCircuitConfig(file4);
        expect(app.Errors).toEqual([]);
    });
});
