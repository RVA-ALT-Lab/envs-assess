<template>
  <div>
    <biography-modal></biography-modal>
    <posts-navigation></posts-navigation>
    <post v-for="post in posts" :key="post.id" :post="post"></post>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostsNavigation from '../components/PostsNavigation'
import Post from '../components/Post'
import BiographyModal from '../components/modals/BiographyModal'

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
    BiographyModal
  },
  computed: {
    ...mapGetters([
      'posts'
    ])
  }
}
</script>

<style lang="css">
</style>
