<template>
    <div class="reg">
    <input type="text" placeholder="请输入用户名" v-model="data.name">
     <input type="password" placeholder="请输入密码" v-model="data.password">
     <button @click="reg(data)">注册</button>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import {type Register} from '@/user/type'
import {ToRegister} from '@/user/user'
import router from '@/router'
 const data:Register=reactive({
  name:'',
  password:'',
 });
 const reg=(data:Register)=>{
     ToRegister(data)
     router.push('/sub')
 }
</script>
<style scoped>
.reg{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
input{
    width:70%;
    margin-top:5dvh;
    border-radius:5px;
    border:1px solid grey;
    height:30px;
}
</style>
