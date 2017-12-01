<template>
    <div>
        <app-console v-for="item in canvas" v-bind:consoleData="item.console"></app-console>
    </div>
</template>
<script>
/* eslint-disable */
import AppConsole from './AppConsole.vue';
export default {
  name: 'AppCanvas',
  props: ['canvas'],
  created () {
    //  console.log(this.canvas);
  },
  components: {
    AppConsole
  }
}
</script>