<template>
    <div>
        <app-console v-if="canvas" v-bind:consoleData="canvas.console"></app-console>
    </div>
</template>
<script>
/* eslint-disable */
import AppConsole from './AppConsole.vue';
export default {
  name: 'AppCanvas',
  props: ['canvas'],
  created () {
     // console.log("CONSOLE DATA:"+ this.canvas);
  },
  components: {
    AppConsole
  }
}
</script>