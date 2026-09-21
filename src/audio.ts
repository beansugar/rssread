export class audioControl {
   url:string
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
}

function localhistory(){
}
