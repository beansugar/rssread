import { audioControl } from "@/audio";
import { ref } from "vue";
import { defineStore } from "pinia";
export const useAudioStore=defineStore("audio",() =>{
	const audio=new audioControl()
	const isplay=ref(false)
	const currenttime=ref(0)
	const endtime=ref(0)
   async function play(){
	   await audio.play()
   }
   function set(url:string){
	   audio.setSource(url)
   }
   function pause(){
	   audio.pause()
   }
   return {
	   isplay, set,play,pause
   }
})
