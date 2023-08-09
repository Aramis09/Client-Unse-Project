import { ServiceParams } from "@/types/requestTypes"
import { generateRequest } from "@/utils/generateRequest"

interface P {
  images:string[]
  location:string
  idAdvertising:string | null
}
export const sendEditCarrouselHelper = async ({images,location,idAdvertising}:P) => {
  const params:ServiceParams<P,null> = {
    url:"http://localhost:3001/carrousel/edit",
    body:{images,location,idAdvertising},
    querys:null, 
    method: "PUT",
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