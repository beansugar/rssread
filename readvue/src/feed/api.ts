import service from "@/api/service";
import type { feeditems ,feedinfo} from "./type";


function  getFeedItemsApi (id:number,page:number,size:number){
       return service.get(`/feeditems/${id}`,{params:{page,size}})as unknown as Promise <feeditems>
}
function  getFeedInfoApi (id:number){
       return service.get(`/feed/${id}`)as unknown as Promise <feedinfo>
}
export {getFeedItemsApi,getFeedInfoApi}