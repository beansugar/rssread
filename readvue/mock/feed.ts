
const feedmock:MockMethod = {
 
    url:'/api/feed/:id',
    method:'get', 
  response:()=>{
    return{
 
    code:200,
    body:{
        name:"wiwi.blog",
        author:"wiwi",
        type:2,
        count:500,
    }
  }
}
}
export default [feedmock] as MockMethod[]