import Vue from 'vue'
import VueRouter from 'vue-router'

import PortfolioEntriesPage from '../pages/PortfolioEntriesPage'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    component: PortfolioEntriesPage
  }
]


const router = new VueRouter({
  routes
})

export default router
