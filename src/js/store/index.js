import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    _portfolioBaseURL: null
  },
  getters: {
    portfolioBaseURL: state => state._portfolioBaseURL
  },
  mutations: {
    setPortfolioBaseURL (state, url) {
      state._portfolioBaseURL = url
    }
  },
  actions: {
    setPortfolioBaseURL (context, url) {
      context.commit('setPortfolioBaseURL', url)
    }
  }
})

export default store