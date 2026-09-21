<template>
    <div class="login">
     <input type="test" v-model="data.name" />
     <input type="password" v-model="data.password"/>
    <button @click="handler(data)">登录</button>
    <router-link to="/reg" >注册</router-link>
</div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { ToLogin } from './user';
import type {base} from'@/user/type'
import { userStore } from './userstore';
import router from '@/router';
const data:base=reactive({
    name:'',
    password:'',
})

const  handler =async(data:base)=>{
    
    await  ToLogin(data)
    const user=userStore()
    alert(user.userinfo?.name)
    router.push('/sub')
}
</script>
<style scpoed >
.login{
    width:100%;
    height:100%;
}

</style>