import { ServiceParams } from "@/types/requestTypes"
import { URL_TO_CREATE_ABOUT } from "@/utils/consts"
import { generateRequest } from "@/utils/generateRequest"


export const sendDataToCreateAbout = async (bodyData:any) => {
  const paramsToRequest:ServiceParams<any,null> = {
    url:URL_TO_CREATE_ABOUT,
    body:bodyData,
    querys:null,
    method:"POST"
  }
   await generateRequest(paramsToRequest);
}