<template>
  <div id="container" class="outer container">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
            <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
          </ul>
          <strong class="nav navbar-text navbar-right">Funds: {{funds | currency}}</strong>
          <ul class="nav navbar-nav navbar-right">
            <li class="button" v-on:click="endDay"><a href="#">End day</a></li>
            <li class="dropdown" v-bind:class="isDroppedDown? 'open':''" v-on:click="toggleDropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#" v-on:click="save">Save</a></li>
                <li><a href="#" v-on:click="load">Load</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        isDroppedDown: false
      }
    },
    computed: {
      funds() { return this.$store.getters.funds}
    },
    methods: {
      ...mapActions(['randomizeStocks', 'loadData', 'saveData']),
      endDay() {
        this.randomizeStocks()
      },
      toggleDropdown() {
        this.isDroppedDown = !this.isDroppedDown
      },
      save() {
        this.saveData()
      },
      load() {
        this.loadData()
      }
    }
  }
</script>

<style></style>