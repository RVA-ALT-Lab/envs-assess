import Vue from 'vue'
import Vuex from 'vuex'
import WordPressService from '../services/WordPressService'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    _isLoading: false,
    _portfolioBaseURL: null,
    _posts: [],
    _totalPosts: null,
    _totalPages: null,
    _currentPage: 1
  },
  getters: {
    isLoading: state => state._isLoading,
    portfolioBaseURL: state => state._portfolioBaseURL,
    posts: state => state._posts,
    totalPosts: state => state._totalPosts,
    totalPages: state => state._totalPages,
    currentPage: state => state._currentPage
  },
  mutations: {
    toggleLoadingStatus (state) {
      state._isLoading = !state._isLoading
    },
    setPortfolioBaseURL (state, url) {
      state._portfolioBaseURL = url
    },
    setPosts (state, posts) {
      state._posts = posts
    },
    setTotalPages (state, totalPages) {
      state._totalPages = totalPages
    },
    setTotalPosts (state, totalPosts) {
      state._totalPosts = totalPosts
    },
    incrementCurrentPage (state) {
      state._currentPage++
    },
    decrementCurrentPage (state) {
      state._currentPage--
    }
  },
  actions: {
    async setPortfolioBaseURL (context, url) {
      context.commit('setPortfolioBaseURL', url)
    },
    async setInitialPostData (context, url) {
      context.commit('toggleLoadingStatus')
      console.log(url)
      const wordpressResponse = await WordPressService.getPostsByPage(url)
      const posts = wordpressResponse.data
      context.commit('setPosts', posts)

      const totalPosts = wordpressResponse.headers['x-wp-total']
      context.commit('setTotalPosts', totalPosts)

      const totalPages = wordpressResponse.headers['x-wp-totalpages']
      context.commit('setTotalPages', totalPages)
      context.commit('toggleLoadingStatus')
    },
    async incrementPostPage (context, url) {
      context.commit('toggleLoadingStatus')
      context.commit('incrementCurrentPage')
      const wordpressResponse = await WordPressService.getPostsByPage(this.getters.portfolioBaseURL, this.getters.currentPage)
      const posts = wordpressResponse.data
      context.commit('setPosts', posts)
      context.commit('toggleLoadingStatus')
    },
    async decrementPostPage (context, url) {
      context.commit('toggleLoadingStatus')
      context.commit('decrementCurrentPage')
      const wordpressResponse = await WordPressService.getPostsByPage(this.getters.portfolioBaseURL, this.getters.currentPage)
      const posts = wordpressResponse.data
      context.commit('setPosts', posts)
      context.commit('toggleLoadingStatus')
    }
  }
})

export default store