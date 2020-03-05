<template>
  <div>
    <div>There are {{totalPosts}} total posts. You are on page {{currentPage}}</div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#" v-if="currentPage > 1" @click="decrementPostPage">Previous</a></li>
        <li class="page-item" v-for="pageNumber in totalPagesArray" :key="pageNumber"><a class="page-link" href="#" @click="setPostPage(pageNumber + 1)">{{pageNumber + 1}}</a></li>
        <li class="page-item"><a class="page-link" href="#" v-if="currentPage < totalPages" @click="incrementPostPage">Next</a></li>
      </ul>
    </nav>
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
    ]),
    totalPagesArray () {
      if (this.totalPages) {
        return Array(parseInt(this.totalPages)).fill().map((_, i) => i)
      } else {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'incrementPostPage',
      'decrementPostPage',
      'setPostPage'
    ])
  }
}
</script>

<style lang="css">
</style>
