import { audioControl } from "@/audio/audio";
import { ref } from "vue";
import { defineStore } from "pinia";
export const useAudioStore=defineStore("audio",() =>{
	const audio=new audioControl()
   const showtitle =ref("")
	const isplay=ref(false)
   const id =ref<number>(0)
	const currenttime=ref(0)
	const endtime=ref(0)
   async function play(){
      isplay.value=true
	   await audio.play() 
   }
   function set(url:string,title:string,only:number){
	   audio.setSource(url)
      audio.play()
      showtitle.value=title
      isplay.value=true
      id.value=only
   }
   function pause(){
      isplay.value=false
	   audio.pause()
   }
   audio.Timeupdate((time)=>{
      currenttime.value=time
   })
   audio.endTimeUpdate((time)=>{
      endtime.value=time
   })
   return {
	   isplay,showtitle,id, set,play,pause,currenttime,endtime,
   }
})
