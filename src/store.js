import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userAuth: false,
    uid: null,
    basket: 0
  },
  mutations: {
    addToBasket(state, payload) {
      state.basket += +payload
    }
  },
  actions: {

  },
  getters: {
    get_user(state) {
      return state.userAuth
    }
  }
})
