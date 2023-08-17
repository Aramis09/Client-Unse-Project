import { ResRequest, ServiceParams } from "@/types/requestTypes";
import { generateRequest } from "@/utils/generateRequest";
import { useEffect, useState } from "react";

export default function useMakeRequest<B, C, D extends ResRequest>(
  serviceParams: ServiceParams<B, C>
) {
  
  const [data, setData] = useState<D>();
  const [reloadRequest, setReloadRequest] = useState<boolean>(false);
  useEffect(() => {
    serviceParams &&
      generateRequest(serviceParams).then((data: any) => {
        setData(data);
      });
  }, [reloadRequest]);

  function changePaginate<B, C>(serviceParams: ServiceParams<B, C>) {
    serviceParams &&
      generateRequest(serviceParams)
        .then((res) => res)
        .then((data: any) => {
          setData(data);
        });
  }
  const reload = () => setReloadRequest(!reloadRequest);



  return { data, setData, changePaginate, reload };
}
