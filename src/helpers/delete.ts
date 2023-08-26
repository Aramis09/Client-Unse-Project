import { ServiceParams } from "@/types/requestTypes";
import { generateRequest } from "@/utils/generateRequest";

export interface DeleteType {
  id: number;
  typeDelete: "advertising" | "service" | "subService";
}
export const sendDeleted = async ({id,typeDelete}:DeleteType) => {
  const urlSelected = `${ulrs[typeDelete]}/${id}`
  const params:ServiceParams<null,null> = {
    url:urlSelected,
    body:null,
    querys:null,
    method:"DELETE",
  }
  await generateRequest(params)
}

let ulrs = {
  advertising:"http://localhost:3001/advertising/delete",
  service:"http://localhost:3001/services/delete",
  subService:"http://localhost:3001/subServices/delete"
}