import Vue from 'vue'
import App from './App.vue'

Vue.filter('to_star', (v) => v.replace(/./g, '*'))

new Vue({
  el: '#app',
  render: h => h(App)
})
