import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import BootstrapVue from 'bootstrap-vue'
import './assets/scss/style.scss'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueCookies)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
