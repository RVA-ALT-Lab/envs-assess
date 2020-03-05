<template>
  <div>
   <div class="card">
      <div class="card-body">
        <h5 class="card-title">Categories</h5>
        {{categories}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  name: 'CategoryFilter',
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'categories'
    ])
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
