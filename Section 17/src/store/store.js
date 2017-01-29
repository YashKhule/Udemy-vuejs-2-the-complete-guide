import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter'
import value from './modules/value'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {},
   modules: {value, counter}
 })

/*export const store = new Vuex.Store({
  state: { // this is a vuex keyword
    counter: 0,
    value: 0,
  },
  getters: {
    getValue: state => state.value,
    getCounter: state => state.counter,
    doubleCounter: state => state.counter * 2,
    stringCounter: state => {
      console.log('computing', state.counter);
      return state.counter + ' clicks'
    }
  },
  mutations: { // must be synchronous, no ajax in here
// ????    setCounter: (state, v) => state.counter = v,
    increment: (state, incr=2) => state.counter+=incr,
    decrement: state => state.counter--,
    setValue: (state, txr) => state.value=txr
  },
  actions: { // place to handle asynchronous calls before commiting transactions
    increment: (context, txr) => context.commit('increment', txr),
    decrement: context => context.commit('decrement'),
    asyncIncrement: (context, txr) => 
      setTimeout(() => context.commit('increment', txr.incr), txr.delay),
    setValue: ({commit}, txr) => commit('setValue', txr)
  }
})*/