<template>
  <div id="container" class="outer container">
    <h1>Portfolio</h1>
    <app-stock v-for="stock in stocks" v-bind:stock="stock"></app-stock>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Stock from './Stock.vue'

  export default {
    components: {
      appStock: Stock
    },
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    }
  }
</script>