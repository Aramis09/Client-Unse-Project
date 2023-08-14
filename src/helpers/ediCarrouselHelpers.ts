import { ServiceParams } from "@/types/requestTypes"
import { generateRequest } from "@/utils/generateRequest"
export const urlToEditCarrousel = "http://localhost:3001/carrousel/edit"
export const urlToCreateCarrousel = "http://localhost:3001/carrousel/create"

interface P {
  images:string[]
  location:string
  idAdvertising:string | null
  action: "create" | "edit"
}

export const sendEditCarrouselHelper = async ({images,location,idAdvertising,action}:P) => {
  const condition = action === "edit"
  const urlToSend = condition ?  urlToEditCarrousel : urlToCreateCarrousel
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