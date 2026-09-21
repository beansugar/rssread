

function formateTime(input:number,offset:number):string{
    const date=new Date(input*1000+offset*3600*1000)
    const year=date.getFullYear()
    const month=date.getMonth()+1
    const day=date.getDate()
    const hours=date.getHours()
    const minutes=date.getMinutes()
    const result= `${year}-${month}-${day}  ${hours}:${minutes}`
    return  result
}

function offset(time :number):number{
  return  Date.now()/1000-time
}
function formateTimeago(time :number):string{
    if (time<60){
    return  `${time}秒前`
    }
    if (time<3600){
     return   `${Math.floor(time/60)}分钟前`
    }    
    if (time <=86400){
        return `${Math.floor(time/3600)}小时前`
    }
    const day= Math.floor(time/86400)
    return `${day}天前`
}
function smartTime(time:number,offset:number){
   
}
export {formateTime,formateTimeago}