<script setup lang="ts">
 import { ref,onMounted } from 'vue';
import { getFeedInfoApi } from '../api';
import type{ feedinfo } from '../type';
 const info =ref<feedinfo>()
const props=defineProps<{
    id:number,
}>()
onMounted(()=>{
    getinfo()
})
  async function getinfo(){
    info.value=await getFeedInfoApi(props.id)
 }
</script>

<template>
    <div class="info-all">
    <h1>{{ info?.name }}</h1>
    <h3>{{ info?.author }}</h3>
    <p>{{ info?.type }}</p>
    </div>
</template>
<style scoped lang="css">
.info-all{
    height:100%;
}
</style>