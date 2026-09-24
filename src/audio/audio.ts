export class audioControl {
   audio:HTMLAudioElement
   constructor(){
     this.audio=new Audio()
   }
   setSource(url:string){
	   this.audio.src=url
}
  async play(){
    await this.audio.play()
   }
   pause(){
    this.audio.pause()
  }
  havesrc():boolean{
    if (this.audio.src){
      return true 
    }
    return false 
  }
 Timeupdate(callback :(time :number)=>void){
  this.audio.addEventListener("timeupdate",()=>{
     callback(this.audio.currentTime)
  })
 }
 endTimeUpdate(callback:(time:number)=>void){
  this.audio.addEventListener("loadedmetadata",()=>{
    callback(this.audio.duration)
  })
 }
}

