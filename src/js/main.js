import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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
  created () {
    //dispatch action here to load portfolio base url
    this.$store.dispatch('setPortfolioBaseURL', window.PORTFOLIO_ASSESSMENT.URL)
    //dispatch action here to load the first set of portfolio entries
    console.log('This is getting created')
  }
})

