import { DataInForm } from "@/types/interfaces";
import { ServiceParams } from "@/types/requestTypes";
import { NEXT_PUBLIC_DOMAIN_API_REST, URL_CREATE_NEW_SECTION } from "@/utils/consts";
import { generateRequest } from "@/utils/generateRequest";

export interface DeleteType {
  idOwner: number;
  typeOwner: string;
  dataSection:DataInForm
}
interface BodyData  {
  idOwner:number
  typeOwner:string
  dataSection:DataInForm
}
export const createNewSection = async ({ idOwner, typeOwner,dataSection }: DeleteType) => {
  
  
  const body:BodyData = {
    idOwner,
    typeOwner,
    dataSection
  }
  const params: ServiceParams<BodyData, null> = {
    url: URL_CREATE_NEW_SECTION,
    body: body,
    querys: null,
    method: "POST",
  };
  await generateRequest(params);
};

