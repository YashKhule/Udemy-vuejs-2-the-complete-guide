docReady(function () {
  console.log('[app] running')
  new Vue({
    el: '#app',
    data: {
      defaultTitle: 'olá gente',
      title: 'olá gente',
      raw: { link: '<a href="//google.com">g</a>' }
    },
    methods: {
      update: function (event) {
        this.title = event.target.value.length > 0 ? event.target.value : this.defaultTitle
      }
    }
  })
})