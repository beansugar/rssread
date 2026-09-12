 interface feedinfo {
    name:string
    author:string
    type:number
    count:number
}

interface  item {
   id:number
   title:string
   PublishTime : number
   link:string
   audiolink:string
}
export  type{ feedinfo,item}