<template>
  <div id="app">
    <router-view v-bind:canvas="store.canvasData.canvas"> </router-view>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "app",
  created () {
    this.API.fetchConsoleData()
  }
}
</script>