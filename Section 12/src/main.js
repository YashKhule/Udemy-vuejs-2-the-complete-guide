import Vue from 'vue'
import App from './App.vue'

Vue.directive('example', {
  bind: function (el, binding, vnode) { },
  inserted: function (el, binding, vnode) { },
  update: function (el, binding, vnode, oldvnode) {}, // children of this node not yet updated
  componentUpdated: function (el, binding, vnode, oldvnode) {}, //once children are updated
  unbind: function (el, binding, vnode) {}
})

Vue.directive('highlight', {
  bind: function (e, b, n) {
  // e.style.backgroundColor = b.value
 /*   if (b.arg == 'background') {
      e.style.backgroundColor= b.value
    } else {
      e.style.color= b.value
    }
  } */
    if ('delayed' in b.modifiers)
      setTimeout(function () {
        /*never misuse setTO/setI*/
        e.style.color = b.value
      }, 3000)  
})

new Vue({
  el: '#app',
  render: h => h(App)
})
