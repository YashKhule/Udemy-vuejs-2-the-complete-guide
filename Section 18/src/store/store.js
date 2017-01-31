import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './stocks'
import portfolio from './portfolio'

import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {stocks, portfolio}
})