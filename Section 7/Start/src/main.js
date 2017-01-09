import Vue from 'vue'
import App from './App.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Status from './Status.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.component('headerTemplate', Header)
Vue.component('footerTemplate', Footer)
Vue.component('statusTemplate', Status)