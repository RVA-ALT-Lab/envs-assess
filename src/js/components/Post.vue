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
        <p>Total Words: {{post.frequencyCounts.tokens.words.count}}</p>
        <a :href="`#wordsCollapse${post.id}`" data-toggle="collapse" class="btn btn-primary">View all 'word' tokens</a>
        <div class="collapse" :id="`wordsCollapse${post.id}`">
          <table class="table">
            <tr v-for="(value, word) in post.frequencyCounts.tokens.words.frequency" :key="`${word}:${value}`">
              <td>{{word}}</td>
              <td>{{value}}</td>
            </tr>
          </table>
        </div>
        <p>Total URLs: {{post.frequencyCounts.tokens.urls.count}}</p>
        <a :href="`#urlCollapse${post.id}`" data-toggle="collapse" class="btn btn-primary">View all 'url' tokens</a>
        <div class="collapse" :id="`urlCollapse${post.id}`">
          <table class="table">
            <tr v-for="(url, index) in post.frequencyCounts.tokens.urls.tokens" :key="`${url}:${index}`">
              <td>{{url}}</td>
            </tr>
          </table>
        </div>
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
