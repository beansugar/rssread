<script setup lang="ts">
 import { ref } from 'vue';
import { getFeedItemsApi } from '../api';
import type{ item} from '../type';
import { formateTime } from '@/utils/formatetime';
const items =ref<item[]>([])
const page =ref<number>(1)
const size=ref<number>(30)
const loading=ref<boolean>(false)
const finished =ref<boolean>(false)
const props=defineProps<{
    id:number,
}>()
  async function getitems(){
    try{
      loading.value=true;
      page.value++ 
    const newitems=await getFeedItemsApi(props.id,page.value,size.value)
    items.value.push(...newitems)
    }catch(error){
     console.log("item error",error)
    }finally{
      loading.value=false
    }
 }
</script>

<template>
  <van-list v-model="loading" :finished="finished" finished-text="到底了" @load="getitems">
  <div v-for="data in items" :key="data.id">
    <h3>{{data?.title}}</h3>
    <p>{{ formateTime(data.PublishTime,8) }}</p>
    <button v-if="data.audiolink"></button>
  </div>
</van-list>
</template>