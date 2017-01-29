<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p> 
    <p>Number of clicks: {{ stringCounter }}</p>   
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
      //  props: ['counter']
      /*computed: {
          counter() {
              return this.$store.state.counter * 2
          },
          clicks() {
            return this.$store.getters.stringCounter
          } 
      }*/
      // computed: mapGetters(['doubleCounter','stringCounter'])
      computed: {
        ...mapGetters([
          'doubleCounter',
          'stringCounter'
       ]),
       custom() {
        let customValue = 0
        return customValue
       }
      }
    }
</script>