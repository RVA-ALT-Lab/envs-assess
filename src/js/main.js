import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WordPressService from './services/WordPressService'

Vue.config.devtools = true;


const app = new Vue({
  el: '#assessment-app',
  data (){
    return {
      test: 'test string'
    }
  },
  store,
  router,
  components: { App },
  template: '<App/>',
  async created () {
    await this.$store.dispatch('setPortfolioBaseURL', window.PORTFOLIO_ASSESSMENT.URL)
    await this.$store.dispatch('setInitialStoreData', window.PORTFOLIO_ASSESSMENT.URL)
  }
})

