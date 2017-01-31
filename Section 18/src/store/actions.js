import Vue from 'vue'
export const loadData = ({commit}) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if(data) {
        if(data.stocks){
          commit('setStocks', data.stocks)
        }
        if(data.funds){
          commit('setFunds', data.funds)
        }
        if(data.stockPortfolio){
          commit('setPortfolio', data.stockPortfolio)
        }
      }
    })

}

export const saveData = (store) => {
  const data = {
    funds: store.state.portfolio.funds,
    stockPortfolio: store.state.portfolio.stocks,
    stocks: store.state.stocks.stocks
  }
  Vue.http.put('data.json', data)
}