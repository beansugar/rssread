import { userStore } from '@/user/userstore'
import {type  ApiResponse } from './apitype'
import axios from'axios'
const service =axios.create({
    baseURL:'/api',
    timeout:5000,
 })
 //响应拦截器
 service.interceptors.response.use(
 (response:any)=>{
  const resp=response.data as ApiResponse
   switch (resp.code ){
   case 200:
   const result=resp.body
   return result
   case 401:
    
   }
 },
 )
 //请求拦截器 
 service.interceptors.request.use(
  (config =>{
   const user=userStore()
   const token =user.getAccessToken()
   if (token){
    config.headers.Authorization=`Bearer ${token}`
   }
   return config
  })
 )
 export default  service
 function ReplaceToken(){
  const user=userStore()
  const refresh=user.getRefreshToken()
   
 }