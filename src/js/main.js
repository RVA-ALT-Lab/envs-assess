import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.devtools = true;


const app = new Vue({
  el: '#assessment-app',
  data (){
    return {
      test: 'test string'
    }
  },
  router,
  components: { App },
  template: '<App/>'
})

