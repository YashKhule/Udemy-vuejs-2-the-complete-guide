docReady(function () {
  new Vue({
    el: '#exercise',
    data: {
      animationQueue: {},
      decorator: '',
      width: '',
      states: {
        effect: {
          index: 0,
          classes: ['', 'highlight', 'shrink'],
        },
        progress: {
          index: 0,
          width: [...Array(101)].map((e,i)=> `width: ${i}%; transition: 50ms`)
        }
      },
      yin: 'yin',
      yang: 'yang',
      input: {
        style: '',
        class: ''
      },
      userdata: {
        customclass: '',
        truthy: ''
      }
    },
    computed: {
      questionfour: function () {
        let state = {
          usertrue: this.userdata.truthy==='true'
        }
        if(/\S/.test(this.userdata.customclass))
          state[this.userdata.customclass] = true
        return state
      }
    },
    methods: {
      animate: function (key, cycle, decorator = 'decorator', timeout = 1500) {
        if (this.animationQueue[key] === undefined) {
          console.log('adding animation to queue')
          let vue = this
          this.animationQueue[key] = setInterval(
            function () {
              let index = ++vue.states[key].index
              let numStates = vue.states[key][cycle].length
              vue[decorator] = vue.states[key][cycle][index % numStates]
              if (index === numStates) {
                let self = vue.animationQueue[key]
                clearInterval(self)
                vue.states[key].index = 0
                vue.animationQueue[key] = undefined
                vue[decorator] = ''
              }
            }, timeout)
        }
      },
      startEffect: function () { this.animate('effect', 'classes') },
      startProgress: function () { this.animate('progress', 'width', 'width', 50) } 
    }
  });
})