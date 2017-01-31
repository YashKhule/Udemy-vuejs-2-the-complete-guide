import stocks from '../dummy_data'

const state = {
  stocks
}

const getters = {
  getStocks: state => state.stocks
}

const mutations = {
  setStocks: (state, stocks) => state.stocks = stocks,
  randomizeStocks: (state) => state.stocks.forEach( stock => stock.price = parseInt(
    100*(
      stock.price * (Math.random()+0.5)
    )
  )/100 )
}

const actions = {
  buyStock: ({commit}, order) => commit('buyStocks', order),
  initStocks: ({commit}) => {
    commit('setStocks', stocks)
  },
  randomizeStocks: ({commit}) => {
    commit('randomizeStocks')
  }
}

export default {state, getters, mutations, actions}