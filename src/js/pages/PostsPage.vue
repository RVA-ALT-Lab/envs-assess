<template>
  <div>
    <posts-navigation></posts-navigation>
   <div v-for="post in posts" :key="post.id">{{post}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostsNavigation from '../components/PostsNavigation'

export default {
  name: 'PostsPage',
  data () {
    return {
      appData: 'This is portfolio stuff'
    }
  },
  components: {
    PostsNavigation
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
