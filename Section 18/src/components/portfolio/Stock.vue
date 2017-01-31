<template>
  <div class="inner container col-sm-6 col-md-4">
    <div class="panel" v-bind:class="insufficientQuantity? 'panel-warning has-error':'panel-primary'">
      <div class="panel-heading">
        <h3 class="panel-title">{{stock.name}} <small>(PRICE: {{stock.price | currency}} | QUANTITY: <strong class="warning" v-if="insufficientQuantity">{{stock.quantity}}</strong><span v-else>{{stock.quantity}}</span>)</small></h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" placeholder="Quantity" class="form-control" v-model="quantity" v-mask="9999999" />
        </div>
        <div class="pull-right">
          <button class="btn" v-bind:class="insufficientQuantity? 'btn-warning':'btn-primary'" v-on:click="sell" v-bind:disabled="quantity < 1 || insufficientQuantity">Sell</button>
        </div>
      </div>
      <div v-if="insufficientQuantity" class="list-group-item-warning warning-box"><span class="warning warning-color">Insufficient quantity</span></div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity() { return this.quantity > this.stock.quantity }
    },
    methods: {
      ...mapActions(['sellStocks']),
      sell() {
        if (this.quantity < 1 || !Number.isInteger(this.quantity)) {
          console.log('StockTrader [Portfolio>Stock.sell] invalid quantity')
          return
        }
        const order = Object.assign({}, this.stock)
        order.quantity = this.quantity
        this.sellStocks(order)
        this.quantity = 0
      }
    }
  }
</script>

<style>
.warning {
  font-style: italic;
}  
.warning-color {
    color: darkred
}
.warning-box {
  margin: 1em;
  padding: 1em;
}
</style>