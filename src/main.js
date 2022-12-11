import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { database } from './firebaseInit'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  database,
  render: h => h(App)
}).$mount('#app')
