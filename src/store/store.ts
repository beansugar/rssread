import { audioControl } from "@/audio/audio";
import { ref } from "vue";
import { defineStore } from "pinia";
export const useAudioStore=defineStore("audio",() =>{
	const audio=new audioControl()
	const isplay=ref(false)
	const currenttime=ref(0)
	const endtime=ref(0)
   async function play(){
      isplay.value=true
	   await audio.play() 
   }
   function set(url:string){
	   audio.setSource(url)
      audio.play()
      isplay.value=true
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
	   isplay, set,play,pause,currenttime,endtime,
   }
})
