import { Credentials } from "@/pages/login";
import { ServiceParams } from "@/types/requestTypes";
import { URL_LOGIN } from "@/utils/consts";
import { generateRequest } from "@/utils/generateRequest";
export interface ResLogin {
  user: string,
	validPassword: boolean,
	token: string,
  error:boolean
}
export const sendCradentialsHelper = async (credentials:Credentials):Promise<ResLogin> => {
  
  const params:ServiceParams<Credentials,null> = {
    url:URL_LOGIN,
    body:credentials,
    querys:null, 
    method: "POST",
  }
  
  try {    
    const response:ResLogin = await generateRequest(params)
    return response
  } 
  catch (error) {
    return {
      user: "string",
      validPassword: false,
      token: "string",
      error:true
    };
    
  }
  
}