<template>
    <div>
        <label>
            <textarea id="configuration-input" v-model="Text"></textarea>
        </label>
        <div>
            <div v-for="validator in validators" :key="validator">
                <input type="checkbox" v-model="checkedValidators" :value="validator" /><label>{{ validator }}</label>
            </div>
        </div>
        <div>
            {{ Errors }}
        </div>
        <div v-if="Gates">
            <canvas id="canvas" v-draw="Gates"></canvas>
        </div>
        <h2>inputs</h2>
        <div  class="node" @click="switchInput(item)" v-for="item in Inputs" :key="item.toString()">
            {{item}}
        </div>
        <h2>nodes</h2>
        <ul v-for="item in RegisteredGates" :key="item">
            <li>{{ item }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import {GateFactory} from '../factory/gateFactory';
    import {file3, file4, FILEONETEXT, FILETWOTEXT, unconnected, loop} from '../constants';
    import {CanvasDrawer} from '../view/CanvasDrawer';
    import {App} from '../controllers/App';
    import {Simulation} from './../domain/simulation';
    import { ConfigurationValidator } from '../parser/ConfigurationValidator';
    import {InputGate} from "@/domain/inputGate";


    @Component({})
    export default class Home extends Vue {
        private Text: string = '';
        private Errors: any = {};
        private validators: any = '';
        private checkedValidators: any = [];

        private app = new App();
        private config: Simulation | undefined = {} as Simulation;

        get RegisteredGates() {
            return GateFactory.GetInstance().Types;
        }

        /*returns all inputs from simulation*/
        get Inputs() {
            if (this.config) {
                 return this.config.Gates.Gates().map(({node}) => node).filter((node) => node instanceof InputGate);
            }
        }

        get Gates() {
            if (this.config) {
                return new CanvasDrawer(this.config);
            }
        }

        switchInput(gate: InputGate){
            if(gate && this.config){
                gate.SwitchSignal();
                this.config.StartInput();
            }
        }

        @Watch('Text')
        public onTextChange() {
            this.refresh();
        }

        @Watch('checkedValidators')
        public onValidatorsCheckedChange() {
            ConfigurationValidator.GetInstance().SetValidators(this.checkedValidators);
            this.refresh();
        }

        public created() {
            this.Text = file4;
            this.validators = ConfigurationValidator.GetInstance().GetNames();
            this.checkedValidators = ConfigurationValidator.GetInstance().GetValidators();
            this.refresh();
        }

        public refresh() {
            this.config = this.app.GetCircuitConfig(this.Text);
            this.Errors = this.app.Errors;
        }
    }
</script>

<style lang="scss">
    .home {
        display: flex;
        align-content: center;
        flex-flow: wrap;
    }

    #configuration-input {
        height: 300px;
    }

    #canvas {
        width: 100%;
        background: white;
        border: solid black 1px;
        padding: 10px;
    }

    .node {
        border: 1px solid black;
        padding: 20px;
        margin: 20px;
        cursor: pointer;
    }
</style>
