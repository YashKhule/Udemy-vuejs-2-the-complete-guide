import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';

import App from './App.vue'
import {routes} from './routes'
import store from './store/store'

const $ = require('jquery');
require('jqmaskedinput')

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-stocktrader-31bc0.firebaseio.com/'

Vue.directive('mask', function (el) {$(el).mask(el.value)} );
Vue.filter('currency', value => {
  let addZero = false
  let v = value
  if (v !== parseInt(v) &&  (''+v).split(".")[1].length === 1)
    addZero = true
  let rv = value.toLocaleString()
  if(addZero)
    rv += '0'
  return '$' + rv
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

//var provider = new firebase.auth.GoogleAuthProvider();
