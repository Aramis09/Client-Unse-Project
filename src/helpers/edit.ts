import { ServiceParams } from "@/types/requestTypes";
import { generateRequest } from "@/utils/generateRequest";
import { deleteImage } from "./imagesHelper";
import { URL_EDIT_ADVERTISING, URL_EDIT_SECTION, URL_EDIT_SERVICE, URL_EDIT_SUB_SERVICE, URL_TO_EDIT_ABOUT } from "@/utils/consts";

interface P {
  id:number
  typeUrl: "section" | "advertising" | "service" | "subService" | "defaul" | "about"
  property:string
  newValue:string
  typeEdit:string
  oldValue:string
}
export const sendEdit = async ({id,typeUrl,property,newValue,typeEdit,oldValue}:P) => {
  console.log(oldValue);
  
  if(typeUrl === "defaul") return false
  if(typeEdit === "image") await deleteImage({publicId:oldValue})
  const urlSelected = urlsToEdit[typeUrl]

  const paramsRequest: ServiceParams<any, null> = {
    url: urlSelected,
    body: {
      id:id,
	    property,
	    newValue
    },
    querys: null,
    method: "PUT",
  };

  
  await generateRequest(paramsRequest)
  return true
}
const urlsToEdit = {
  section:URL_EDIT_SECTION,
  advertising:URL_EDIT_ADVERTISING,
  service:URL_EDIT_SERVICE,
  subService:URL_EDIT_SUB_SERVICE,
  about: URL_TO_EDIT_ABOUT
}