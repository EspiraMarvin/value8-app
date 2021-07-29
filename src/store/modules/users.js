
const state = () => ({
  isAuthenticated: false,
  user: {}
})

const getters = {
  GET_AUTH: state => state.isAuthenticated,
  GET_USER: state => state.user
}

const mutations = {
  SET_AUTH(state, data){
    state.isAuthenticated = data
  },
  SET_USER(state, data){
    state.user = data
    console.log('state user', state.user)
  },

}

const actions = {
  LOGIN_USER(context, payload) {
    context.commit('SET_USER', payload)
  },
  LOGOUT_USER(context) {
    context.commit('SET_USER', {})
    context.commit('SET_AUTH', false)
  }

}

export default  {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
