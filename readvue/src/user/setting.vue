<template>
    <h3>setting</h3>
    <button @click="tolayout">退出</button>
</template>
<script setup lang="ts">
import router from '@/router';
import { userStore } from './userstore';
 const tolayout=()=>{
 const store=userStore()
 store.layout()
 router.push('/login')
 }
</script>