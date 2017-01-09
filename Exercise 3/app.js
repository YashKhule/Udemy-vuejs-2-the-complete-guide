/* original, and working just fine, solution, posted on:
    https://fiddle.jshell.net/apdceqqt/
 */
new Vue({
  el: '#exercise',
  data: {
    value: 0,
    defaultResult: 'not there yet',
    result37: 'done',
    result: 'not there yet'
  },
  watch: {
    value: function(n) {
      this.result = (n === 37) ? this.result37 : this.defaultResult
    },
    result: function(r) {
      let self = this
      if (r === this.result37)
        setTimeout(function() {
          self.value = 0
        }, 5000)
    }
  }
});

/* revised solution: */
new Vue({
        el: '#exercise',
        data: {
            value: 0,
            defaultResult: 'not there yet',
            result37: 'done',
            result: 'not there yet'
        },
        computed: {
            result: function () {
                return this.result = (this.value === 37) ? this.result37 : this.defaultResult
            },
        },
        watch: {
            result: function () {
              let self = this
              setTimeout(function () { self.value=0 }, 5000)
            }
        }
    });