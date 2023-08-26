import { ServiceParams } from "@/types/requestTypes"
import { URL_DELETE_IMAGE } from "@/utils/consts"
import { generateRequest } from "@/utils/generateRequest"

interface P {
  publicId:string
}
export const deleteImage = async ({publicId}:P) => {
  const initParams:ServiceParams<null,any> = {
    url:URL_DELETE_IMAGE,
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