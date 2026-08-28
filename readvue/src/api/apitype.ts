export interface ApiResponse <T=any>{
    message:string
    code:number
    body: T
}
