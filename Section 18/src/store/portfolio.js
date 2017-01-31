const state = {
  funds: 10000,
  stocks: []
} 

const getters = {
  getPortfolioStocks: (state) => state.stocks,
  stockPortfolio (state, getters) {
    return state.stocks.map(ownedstock => {
      const record = getters.getStocks.find(stock => stock.id === ownedstock.id)
      return Object.assign({quantity: ownedstock.quantity}, record)
    })
  },
  funds: (state) => state.funds
}

const mutations = {
  setPortfolio: (state, portfolio) => state.stocks = portfolio,
  setFunds: (state, funds) => state.funds = funds,
  buyStocks: (state, order) => {
    const record = state.stocks.find(stock => stock.id === order.id)
    if (record) {
      record.quantity += order.quantity
    } else {
      const stock = Object.assign({}, order)
      delete stock.price
      state.stocks.push(stock)
    }
    console.dir(order)
    state.funds = ((100 * state.funds) - (100 * order.price * order.quantity))/100
  },
  sellStocks: (state, order) => {
    const record = state.stocks.find(stock => stock.id === order.id)
    if (record) {
      let quantity = order.quantity
      if (record.quantity > order.quantity) {
        record.quantity -= order.quantity
      } else {
        if (record.quantity > order.quantity) {
          console.log(order, record)
          console.warn('[StockFinder] store>portfolio>sellStocks - more stocks to sell than owned. selling all for some bizzare reason.')
        }
        quantity = record.quantity
        state.stocks.splice(state.stocks.indexOf(record), 1)
      }
      state.funds += order.price * quantity
   } else {
      console.err('[Stockfinder] store>portfolio>sellStocks - no such stock')
    }    
  }
}

const actions = {
  sellStocks: ({commit}, order) => commit('sellStocks', order) // todo - get price
}

export default { state, getters, mutations, actions}