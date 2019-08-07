import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {GateFactoryConfig} from './configuration/gateconfig';
Vue.config.productionTip = false;

GateFactoryConfig.configureInitial();
Vue.directive('draw', (canvasElement, binding) => {
  binding.value.draw(canvasElement as HTMLCanvasElement);
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
