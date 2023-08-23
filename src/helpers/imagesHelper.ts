import { ServiceParams } from "@/types/requestTypes"
import { generateRequest } from "@/utils/generateRequest"

interface P {
  publicId:string
}
export const deleteImage = async ({publicId}:P) => {
  const initParams:ServiceParams<null,any> = {
    url:"http://localhost:3001/imageManager/delete",
    body:null,
    querys:{
      publicId:publicId
    },
    method:"DELETE"
  }

  await generateRequest(initParams).catch(
    (err) => console.error(err)
  )

}