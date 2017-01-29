import * as types from '../types'

const state = {
  counter: 0
}
const getters = {
  getCounter: state => state.counter,
  doubleCounter: state => state.counter * 2,
  stringCounter: state => {
    console.log('computing', state.counter);
    return state.counter + ' clicks'
  }
}
const mutations = { // must be synchronous, no ajax in here
// ????    setCounter: (state, v) => state.counter = v,
  increment: (state, incr=2) => state.counter+=incr,
  decrement: state => state.counter--,
}
const actions = { // place to handle asynchronous calls before commiting transactions
  increment: (context, txr) => context.commit('increment', txr),
  decrement: context => context.commit('decrement'),
  asyncIncrement: (context, txr) => 
    setTimeout(() => context.commit('increment', txr.incr), txr.delay),
}

export default { /*namespaced: true,*/
  state, getters, mutations, actions }