
import {userStore} from "@/user/userstore"
import type { NavigationGuard } from "vue-router"
export const requireAuth:NavigationGuard=(to,form,next)=>{
    const store=userStore()
    console.log("denglu",store.islogin)
    if (store.islogin){
        next()
    }else{
        next('/login')
    }
}