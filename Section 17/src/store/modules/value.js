const state = {
  value: 0
}
const getters =  {
  getValue: state => state.value,
}
const mutations = { // must be synchronous, no ajax in here
  setValue: (state, txr) => state.value=txr
}
const actions = { // place to handle asynchronous calls before commiting transactions
  setValue: ({commit}, txr) => commit('setValue', txr)
}

export default { /*namespaced: true,*/
  state, getters, mutations, actions }