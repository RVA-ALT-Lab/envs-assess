<template>
  <div>
   <div class="card">
     <div class="card-header">
       {{post.id}}
     </div>
      <div class="card-body">
        <h5 class="card-title">{{post.title.rendered}}</h5>
        <p class="card-text"><span v-html="post.excerpt.rendered"></span></p>
        <a href="#" class="btn btn-primary">Read More</a>
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
