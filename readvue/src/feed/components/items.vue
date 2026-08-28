<script setup lang="ts">
 import { ref } from 'vue';
import { getFeedItemsApi } from '../api';
import type{ feeditems } from '../type';
const items =ref<feeditems>()
const page =ref<number>(1)
const size=ref<number>(30)
const loading=ref<boolean>(false)
const finished =ref<boolean>(false)
const props=defineProps<{
    id:number,
}>()
  async function getitems(){
    items.value=await getFeedItemsApi(props.id,page.value,size.value)
 }
</script>

<template>
</template>