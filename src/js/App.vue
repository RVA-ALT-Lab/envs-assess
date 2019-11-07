<template>
  <div id="aws-workbench-app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'App',
  data () {
    return {
      appData: 'This is some app data'
    }
  }
}
</script>

<style lang="css">
</style>
