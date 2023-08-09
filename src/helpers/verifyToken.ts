import { ServiceParams } from "@/types/requestTypes"
import { generateRequest } from "@/utils/generateRequest"
interface Res {
  error:string,
  acces:boolean
}
export const verificationToken = async ():Promise<Res> =>{
  const params:ServiceParams<null,null> = {
    url:"http://localhost:3001/verificationToken",
    body:null,
    querys:null,
    method:"POST"
  }

 const res:Res = await generateRequest(params)
 return res
}