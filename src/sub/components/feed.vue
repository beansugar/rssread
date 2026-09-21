<template>
  <div class="feed-all">
  <van-list v-model="loading" :finished="finished" finished-text="到底了" @load="Init">
    <ol v-for="data in list" :key="data.id">
      <li>
        <div class="single" @click="gotofeed(data.id)">
        <p class="name">{{ data.name }}</p>
        <button class="control">
          <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="inherit"></rect> <circle cx="12" cy="7" r="0.5" transform="rotate(90 12 7)" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></circle> <circle cx="12" cy="12" r="0.5" transform="rotate(90 12 12)" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></circle> <circle cx="12" cy="17" r="0.5" transform="rotate(90 12 17)" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></circle> </g></svg>
        </button>
        </div>
      </li>
    </ol>
  </van-list>
  </div>
</template>
<style lang="css" scoped>
li,ol{
  list-style: none;
  margin:0;
  padding:0;
}
.feed-all{
  width:100%;
  height:100%;

}
.single {
  display:flex;
  flex-direction:row;
  width:80%;
  margin:0 auto;
  height:40px;
  align-items: center;
  border:1px solid black;
  border-radius:5px;
  padding:5px;
  margin-bottom:5px;
}
.name{
  font-size:large;
  margin-left:10px;
}
.control{
  width:30px;
  height:30px;
  padding:0;
  border:none;
  background-color:var(--button-bg);
  margin-left:auto;
  margin-right:10px;
}
svg{
  background:inherit;
}
</style>
<script lang="ts" setup>
import {ref} from 'vue'
import {SubFeed} from '@/sub/api'
import {type subfeed} from '@/sub/type'
import router from '@/router'


const loading=ref<boolean>(false)
const finished=ref<boolean>(false)
const size =ref<number>(50)
const page =ref<number>(1)
const list=ref<subfeed[]>([])
async function Init (){
  try{
    loading.value=true;
   const result= await SubFeed(page.value,size.value)
   list.value=[...list.value,...result.Feed]
   page.value++
   }catch(error){
      console.log(error)
   }finally{
    loading.value=false;
   }
}
const gotofeed=(id:number)=>{
   router.push({name:'feed',params:{id:id}})
}
</script>