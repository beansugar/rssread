<template>
  <div class="show-all">
  <div class="userinfo">
  <h4>{{ user.userinfo?.name }}</h4>
  <h6>ID:{{ user.userinfo?.id }}</h6>
  </div>
 <router-link to="/user/setting" >设置</router-link> 

  </div>
</template>
<script setup lang="ts">
import {userStore} from '@/user/userstore'
const user=userStore()
</script>
<style scoped>
.show-all{
    width:90%;
    height:100%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
}
.userinfo{
  display:flex;
  flex-direction:row;
  gap:30px;
}

</style>