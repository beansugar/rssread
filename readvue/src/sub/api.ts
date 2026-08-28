import service from '@/api/service'
import {type SubDetail, type SubInfo} from '@/sub/type'
export function GetSubApi (){
    return service.get<SubInfo>('/sub/count')as unknown as Promise<SubInfo>
}
export function SubFeed(page:number,size:number){
    return service.get<SubDetail>('sub/detail',{params:{
        page:page,
        size:size,
    }
})as unknown as Promise<SubDetail>
}