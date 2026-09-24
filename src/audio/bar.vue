

<template>
     <div class="bar">
	<button class="control" @click="store.isplay ?store.pause() :store.play()">
		<img v-if="!store.isplay" :src="playicon" class="playicon">
		<img v-else :src="pauseicon"class="pauseicon">
	</button>
	
	<button @click="set">src</button>
    <h3>{{store.currenttime}}</h3>
	<h3>{{store.endtime}}</h3>
	</div>
</template>
<script setup  lang="ts">
import { useAudioStore } from '@/store/store';
import playicon from '@/assets/play.svg';
import pauseicon from '@/assets/pause.svg';
 const store=useAudioStore()
 const set= () =>{
   let url="https://pdrl.fm/f3efd0/dts.podtrac.com/redirect.mp3/arttrk.com/p/ST44R/claritaspod.com/measure/stitcher.simplecastaudio.com/c945bd13-c7f3-4f22-95b5-4bf98e12b21f/episodes/907c54f7-3cd8-4a9c-912a-f3a0ba6167c4/audio/128/default.mp3?aid=rss_feed&awCollectionId=c945bd13-c7f3-4f22-95b5-4bf98e12b21f&awEpisodeId=907c54f7-3cd8-4a9c-912a-f3a0ba6167c4&feed=dHoohVNH"
   store.set(url)
   alert(store.isplay)
 }
</script>
<style lang="css" scoped>
.bar{
	width:100%;
	height:100%;
}
.control{
	width:60px;
	height:30px;
}
.playicon,.pauseicon{
	width:60%;
	height:100%;
}
</style>
