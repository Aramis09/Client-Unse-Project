import { ServiceParams } from "@/types/requestTypes"
import { URL_CREATE_CARROUSEL, URL_EDIT_CARROUSEL } from "@/utils/consts"
import { generateRequest } from "@/utils/generateRequest"

interface P {
  images:string[]
  location:string
  idAdvertising:string | null
  action: "create" | "edit"
}

export const sendEditCarrouselHelper = async ({images,location,idAdvertising,action}:P) => {
  const condition = action === "edit"
  const urlToSend = condition ?  URL_EDIT_CARROUSEL : URL_CREATE_CARROUSEL
  const method = condition ? "PUT": "POST"
  
  const params:ServiceParams<any,null> = {
    url:urlToSend,
    body:{images,location,idAdvertising},
    querys:null, 
    method,
  }
  try {    
    
    if(images.length === 0) throw new Error("please send a image")
    await generateRequest(params)    
    return {
      
    }
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