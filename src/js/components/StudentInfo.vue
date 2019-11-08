<template>
  <div>
    {{student.name}}

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StudentInfo',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'student'
    ])
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
