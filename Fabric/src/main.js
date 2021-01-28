import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'
import fabric from "fabric"
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.prototype.$moment = moment
Vue.prototype.$fabric = fabric

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')