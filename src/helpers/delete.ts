import { ServiceParams } from "@/types/requestTypes";
import { NEXT_PUBLIC_DOMAIN_API_REST } from "@/utils/consts";
import { generateRequest } from "@/utils/generateRequest";

export interface DeleteType {
  id: number;
  typeDelete: "advertising" | "service" | "subService";
}
export const sendDeleted = async ({ id, typeDelete }: DeleteType) => {
  const urlSelected = `${ulrs[typeDelete]}/${id}`;
  const params: ServiceParams<null, null> = {
    url: urlSelected,
    body: null,
    querys: null,
    method: "DELETE",
  };
  await generateRequest(params);
};

let ulrs = {
  advertising: `${NEXT_PUBLIC_DOMAIN_API_REST}/advertising/delete`,
  service: `${NEXT_PUBLIC_DOMAIN_API_REST}/services/delete`,
  subService: `${NEXT_PUBLIC_DOMAIN_API_REST}/subServices/delete`,
};
