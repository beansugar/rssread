import { GetSubApi } from "./api";

export async function GetSubCount():Promise<number>{
    const resp=await GetSubApi()
     return resp.Count
}