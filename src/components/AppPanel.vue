<template>
<div class="panel">
  <app-card v-for="item of panelData" v-bind:cardData="item"></app-card>
</div>
</template>
<script>
/* eslint-disable */
import AppCard from "./AppCard.vue";
export default {
  props: ["panelData"],
  components: {
    AppCard
  }
};
</script>