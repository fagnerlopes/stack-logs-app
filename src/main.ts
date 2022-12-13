import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueMask from 'v-mask'
import axios from "axios"
import VueApexCharts from 'vue-apexcharts'

axios.defaults.baseURL = `http://${process.env.VUE_APP_BASEURL}:${process.env.VUE_APP_BASEPORT}/erros/`;

Vue.config.productionTip = false;
Vue.use(VueMask);
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
