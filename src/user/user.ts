
import { LoginApi, RegisterApi } from "./api";
import {type  base,type LoginResp,type Register,type UserInfo } from "./type";
import { userStore } from "./userstore";

export async function ToLogin(input:base){
   const resp=await LoginApi(input)
   console.log("test",resp)
   Do(resp)  
}
function Do(resp :LoginResp){
    const user=userStore()
    user.setToken(resp.access,resp.refresh)
    const info:UserInfo={
      id:resp.userinfo.id,
      name:resp.userinfo.name
    }
     user.setUserInfo(info)
}
export async function ToRegister (input:Register){
    const resp= await RegisterApi(input)
    Do(resp)
}