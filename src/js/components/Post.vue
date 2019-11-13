<template>
  <div>
   <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{post.title.rendered}} ({{post.id}})</h5>
        <span class="badge badge-pill badge-primary" v-for="category in post.categories" :key="category">{{category}}</span>
        <p class="card-text"><span v-html="post.excerpt.rendered"></span></p>
        <p>Grade: {{post.fleschKincaid.grade}}</p>
        <p>Rate: {{post.fleschKincaid.rate}}</p>
        <p>Sentences: {{post.frequencyCounts.sentences.length}}</p>
        <p>tokens.word: {{post.frequencyCounts.tokens.word}}</p>
        <p>tokens.number: {{post.frequencyCounts.tokens.number}}</p>
        <p>tokens.emoticon: {{post.frequencyCounts.tokens.emoticon}}</p>
        <p>tokens.url: {{post.frequencyCounts.tokens.url}}</p>
        <p>tokens.symbol: {{post.frequencyCounts.tokens.symbol}}</p>
        <p>tokens.punctuation: {{post.frequencyCounts.tokens.punctuation}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
