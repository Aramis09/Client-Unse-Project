import useMakeRequest from "@/customHooks/makeRequest";
import { ResToGetSubServices } from "@/types/interfaces";
import { GetWithPage, ServiceParams } from "@/types/requestTypes";
import styles from "./subServices.module.scss";
import SubService from "../subService/subService";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../loader/loader";

interface P {
  pageSize: number | null;
}

type QueryParams = {
  page: number;
  size: number;
  orientation: string;
};

const initialHook: ServiceParams<null, QueryParams> = {
  url: "http://localhost:3001/subServices/getSubservices",
  body: null,
  querys: { page: 1, size: 6, orientation: "" },
  method: "GET",
};

export default function SubServices({ pageSize }: P) {
  const route = String(useRouter().query.idService);

  if (initialHook.querys) {
    initialHook.querys.orientation = route;

    if (pageSize) {
      initialHook.querys.size = pageSize;
    }
  }

  
  const { data: subServiceList, reload } = useMakeRequest<
    null,
    GetWithPage,
    ResToGetSubServices
  >(initialHook);
  useEffect(() => reload(), [route]);
  return (
    <>
      {(subServiceList && (
        <div className={styles.container}>
          {subServiceList?.data.map((subservice) => (
            <SubService key={subservice.id} subServiceProps={subservice} />
          ))}
        </div>
      )) || <Loader />}
    </>
  );
}
