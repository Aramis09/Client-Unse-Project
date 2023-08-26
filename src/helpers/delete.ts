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
  advertising:"https://servidor-unse.onrender.com/advertising/delete",
  service:"https://servidor-unse.onrender.com/services/delete",
  subService:"https://servidor-unse.onrender.com/subServices/delete"
}