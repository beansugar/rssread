
import { type base,type LoginResp, type Register} from './type'
import service from '@/api/service'

 export  function LoginApi(input :base):Promise<LoginResp>{
   return service.post('/login',input).then(resp=>{
    return resp
   })as Promise<LoginResp>
}
export function RegisterApi(input:Register){
  return service.post('/register',input)as Promise<LoginResp>
}