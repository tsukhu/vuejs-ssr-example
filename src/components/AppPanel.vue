<template>
<div class="panel">
  <app-card v-for="item in panelData.cards" v-bind:key="item.id" v-bind:cardData="item"></app-card>
</div>
</template>
<script>
/* eslint-disable */
import AppCard from './AppCard.vue';
 export default {
     props: ['panelData'],
  components: {
    AppCard
  }
 }
</script>