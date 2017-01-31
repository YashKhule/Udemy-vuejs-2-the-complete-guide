<template>
  <div class="inner container col-sm-6 col-md-4">
    <div class="panel control-group" v-bind:class="insufficientFunds? 'panel-danger has-error':'panel-success'">
      <div class="panel-heading">
        <h3 class="panel-title">{{stock.name}} <small>(PRICE: {{stock.price | currency}})</small></h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" placeholder="Quantity" class="form-control" v-model="quantity" v-mask="9999999" />
        </div>
        <div class="pull-right">
          <button class="btn" v-bind:class="insufficientFunds? 'btn-danger':'btn-success'" v-on:click="buy" v-bind:disabled="quantity < 1 || insufficientFunds">Buy</button>
        </div>
      </div>
      <div class="warning-box list-group-item-warning" v-if="insufficientFunds">
        <span class="warning">insufficient funds</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientFunds() { 
        return this.quantity * this.stock.price > this.$store.getters.funds
      }
    },
    methods: {
      buy() {
        if (this.quantity < 1 || !Number.isInteger(this.quantity)) {
          console.log('StockTrader [Stocks>Stock.buy] invalid quantity')
          return
        }
        const order = Object.assign({quantity: this.quantity}, this.stock)
        this.$store.dispatch('buyStock', order)
        this.quantity = 0
      }
    }
  }
</script>

<style>
.warning {
  font-style: italic;
  color: darkred
}  
.warning-box {
  margin: 1em;
  padding: 1em;
}
</style>