<template>
<div>
    <div v-for="item of consoleData" >        
        <app-panel v-bind:panelData="item.panel"></app-panel> 
    </div>
</div>

</template>
<script>
/* eslint-disable */
import AppPanel from './AppPanel.vue';
export default {
  props: ["consoleData"],
  components: {
    AppPanel
  }
};
</script>