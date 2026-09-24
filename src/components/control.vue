<template>
    <button class="control" @click="states ?store.pause() :store.play()">
        		<img v-if="states" :src="playicon" class="playicon">
                <img v-else :src="pauseicon"class="pauseicon">
     </button>
</template>
<script setup lang="ts">
import { useAudioStore } from '@/store/store';
import playicon from '@/assets/play.svg';
import pauseicon from '@/assets/pause.svg';
const store=useAudioStore()
const states=defineProps({stare:Boolean,})
</script>
<style scoped lang="css">
.control{
    width:60px;
    height:30px;
    background:inherit;
}
.playicon,.pauseicon{
    width:60%;
    height:100%;
}
</style>