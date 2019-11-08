import Vue from 'vue'
import VueRouter from 'vue-router'

import PostsPage from '../pages/PostsPage'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    component: PostsPage
  }
]


const router = new VueRouter({
  routes
})

export default router
