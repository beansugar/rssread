<template>
    <div class="sub-show">
        <router-link to="/sub/follower">关注{{ count }}</router-link>
    </div>
</template>
<style lang="css" scpoed>
.sub-show{
    display:flex;
    flex-direction:column;

}
</style>
<script lang="ts" setup>
import { GetSubCount } from '../sub';
import {ref,onMounted} from 'vue'
const count =ref<number>(0)
async function init(){
   count.value=await GetSubCount()
}
onMounted(()=>{
    init()
})
</script>