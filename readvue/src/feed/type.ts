 interface feedinfo {
    name:string
    author:string
    type:number
    count:number
}
interface feeditems{
   items:item[]
}
interface  item {
   title:string
   link:string
}
export  type{ feedinfo,feeditems}