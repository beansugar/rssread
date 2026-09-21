export interface base {
    name:string,
    password:string,
}
export interface UserInfo{
    name:string,
    id:number,
}
export interface Register extends base{
    
}

export interface LoginResp{
    access:string,
    refresh:string,
    userinfo:{
    name:string,
    id:number,
    }
    
}
