import useMakeRequest from "@/customHooks/makeRequest";
import styles from "./service.module.scss";
import { ResToGetDetailServices } from "@/types/interfaces";
import { GetServiceWithOrientation, ServiceParams } from "@/types/requestTypes";
import { useRouter } from "next/router";
import Link from "next/link";
import Sections from "@/components/sections/sections";
import AsideNavigation from "@/components/asideNavigation/asideNavigation";
import SubServices from "@/components/subServices/subServices";
import { useEffect, useRef, useState } from "react";
import Loader from "@/components/loader/loader";

const initialHook: ServiceParams<null, any> = {
  url: "http://localhost:3001/services/getServices/detail",
  body: null,
  querys: {},
  method: "GET",
};

//!Solucionar eerro de que esto cuando lo recargo no carga
export default function ServiceDetail() {
  const router = useRouter();
  const orientation = String(router.query.idService);

  const initialHookDetail = {
    ...initialHook,
    querys: {
      orientation: orientation,
    },
  };

  const { data: service, reload } = useMakeRequest<
    null,
    GetServiceWithOrientation,
    ResToGetDetailServices
  >(initialHookDetail);
  console.log("renders Service");

  useEffect(() => {
    if (service && !service["data"]) {
      reload();
    }
  }, [orientation, service]); //!Esta es la forma que mas se entiende y anda
  // useEffect(() => reload, [orientation, service]); //!esta es la forma magica, no sabemos porque anda pero anda

  return (
    <>
      {service && service.data ? (
        <>
          {service && service?.data && (
            <div className={styles.container}>
              <SubServices
                orientationFromInPageService={orientation}
                pageNumber={1}
              />
              <Link
                href={`/allSubServices/${orientation}`}
                className={styles.viewAll}
              >
                <span>Ver todos</span>
              </Link>
              {(service?.data && (
                <>
                  <h4 className={styles.title}>{service?.data.title}</h4>
                  <div className={styles.data}>
                    <AsideNavigation
                      sectionsData={service.data.SectionsViewsService}
                    />
                    <Sections
                      sectionsData={service.data.SectionsViewsService}
                    />
                  </div>
                </>
              )) || <Loader />}
            </div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
