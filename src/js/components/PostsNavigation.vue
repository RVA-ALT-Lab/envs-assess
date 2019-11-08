<template>
  <div>
   <div>Showing {{posts.length}} of {{totalPosts}} posts.</div>
   <div>Showing page {{currentPage}} of {{totalPages}} pages.</div>
   <button type="button" v-if="currentPage > 1" @click="decrementPostPage">Previous Page</button>
   <button type="button" v-if="currentPage < totalPages" @click="incrementPostPage">Next Page</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PostsNavigation',
  data () {
    return {
      appData: 'This is portfolio stuff'
    }
  },
  computed: {
    ...mapGetters([
      'currentPage',
      'totalPages',
      'totalPosts',
      'posts'
    ])
  },
  methods: {
    ...mapActions([
      'incrementPostPage',
      'decrementPostPage'
    ])
  }
}
</script>

<style lang="css">
</style>
