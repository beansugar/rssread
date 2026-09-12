import { formateTime, formateTimeago } from "./formatetime"


let input= 1788154912
   const result = formateTime(input,8)
   console.log("测试结果",result)

   let time=87400
   const test=formateTimeago(time)
   console.log("测试2",test)