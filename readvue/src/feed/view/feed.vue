<script setup lang="ts">
import {useRoute} from 'vue-router'
import info from '../components/info.vue';
 const route=useRoute()
 const id =Number(route.params.id)
</script>

<template>
  <div class="info">
  <info :id="id"></info>
</div>
</template>
<style lang="css" scoped>
.info{
  width:80%;
  margin:0 auto;
  height:100px;
}
</style>