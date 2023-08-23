import useMakeRequest from "@/customHooks/makeRequest";
import { ResToGetSubServices } from "@/types/interfaces";
import { GetWithPage, ServiceParams } from "@/types/requestTypes";
import { GetWithPage, ServiceParams } from "@/types/requestTypes";
import styles from "./subServices.module.scss";
import stylesOnView from "./viewPageSubServices.module.scss";
import SubService from "../subService/subService";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../loader/loader";
import useChangeStyles from "@/customHooks/useChangeStyles";

interface P {
  pageSize?: number;
  orientationFromInPageService?: string;
  pageNumber?: number;
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

export default function SubServices({
  pageSize,
  orientationFromInPageService,
  pageNumber,
}: P) {
  const router = useRouter();
  const orientation =
    orientationFromInPageService || String(router.query["typesSubServices"]);
  initialHook.querys.orientation = orientation;

  if (pageSize) {
    initialHook.querys.size = pageSize;
  } else {
    initialHook.querys.size = 6;
  }
  initialHook.querys.page = pageNumber;

  const { stylesChosen } = useChangeStyles({
    condition: router.route === "/allSubServices/[typesSubServices]",
    depedence: router,
    falseStyle: styles,
    trueStyle: stylesOnView,
  });
  console.log();

  const { data: subServiceList, reload } = useMakeRequest<
    null,
    GetWithPage,
    ResToGetSubServices
  >(initialHook);

  useEffect(() => reload(), [router, pageNumber]);
  return (
    <>
      {(subServiceList?.data && (
        <div className={stylesChosen.container}>
          {subServiceList?.data.map((subservice) => (
            <SubService
              key={subservice.id * Math.random()}
              subServiceProps={subservice}
            />
          ))}
        </div>
      )) || <Loader />}
    </>
  );
}
