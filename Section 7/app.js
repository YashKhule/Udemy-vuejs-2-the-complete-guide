/* new Vue({ el: '#app' })

Vue.component('my-component', {
  data: function () {
    return {
      status: 'Weird to have to nest this'
    }
  },
  template: '<p>{{status}}</p>'
}) */


const myComponent = {
  data: function () {
    return {
      status: 'Weird to have to nest this'
    }
  },
  template: '<p>{{status}}</p>'
}

new Vue({
  el: '#app',
  components: {
    'my-component': myComponent
  }
})