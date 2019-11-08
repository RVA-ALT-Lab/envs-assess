<template>
  <div class="container">
    <div class="row">
      <loading
        :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="true"
      ></loading>
      <div class="col-lg-4">
        <student-info></student-info>
        <biography-modal></biography-modal>
      </div>
      <div class="col-lg-8">
        <posts-navigation></posts-navigation>
        <post v-for="post in posts" :key="post.id" :post="post"></post>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostsNavigation from '../components/PostsNavigation'
import Post from '../components/Post'
import StudentInfo from '../components/StudentInfo'
import BiographyModal from '../components/modals/BiographyModal'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'PostsPage',
  data () {
    return {
      appData: 'This is portfolio stuff'
    }
  },
  components: {
    PostsNavigation,
    Post,
    BiographyModal,
    StudentInfo,
    Loading
  },
  computed: {
    ...mapGetters([
      'posts',
      'isLoading'
    ])
  }
}
</script>

<style lang="css">
</style>
