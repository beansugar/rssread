import { defineStore } from "pinia";
import {computed, ref} from 'vue'
import type {UserInfo} from'@/user/type'
export const userStore =defineStore("userStore",()=>{
    const access=localStorage.getItem("access")||''
    const refresh=localStorage.getItem("refresh")||''
    const userstr =localStorage.getItem("userinfo")
    const userinfo=ref<UserInfo|null>(userstr ? JSON.parse(userstr):null)
    const setToken=(access:string,refresh :string)=>{
        localStorage.setItem("access",access)
        localStorage.setItem("refresh",refresh)
    }
    const setUserInfo=(info:UserInfo)=>{
       localStorage.setItem("userinfo",JSON.stringify(info))
       userinfo.value=info
    }
    const getAccessToken=()=>{
        return access
    }
    const getRefreshToken=()=>{
        return refresh
    }
    const islogin=computed(()=>{
        return !!userinfo.value
    })
    const layout =()=>{
     localStorage.removeItem("access")
     localStorage.removeItem("refresh")
     localStorage.removeItem("userinfo")
     userinfo.value=null
    }
    return {setToken,setUserInfo,getAccessToken,getRefreshToken,userinfo,islogin,layout}
})