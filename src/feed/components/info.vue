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
    <h1 class="info-name">{{ info?.name }}</h1>
    <div class="info-detail">
    <h3>{{ info?.author }}</h3>
    <p>{{ info?.type }}</p>
   </div>
    </div>
</template>
<style scoped lang="css">
.info-all{
    height:100%;
    margin-top:0;
    width:100%;
}
.info-name{
    margin:0 auto;
}
h3,p {
    padding:0;
    margin:0;
}
.info-detail{
    display:flex;
    flex-direction:row;
    margin-top:5%;
}
</style>