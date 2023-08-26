import { ServiceParams } from "@/types/requestTypes"
import { URL_VERIFY_TOKEN } from "@/utils/consts"
import { generateRequest } from "@/utils/generateRequest"
interface Res {
  error:string,
  acces:boolean
}
export const verificationToken = async ():Promise<Res> =>{
  const params:ServiceParams<null,null> = {
    url:URL_VERIFY_TOKEN,
    body:null,
    querys:null,
    method:"POST"
  }

 const res:Res = await generateRequest(params)
 return res
}