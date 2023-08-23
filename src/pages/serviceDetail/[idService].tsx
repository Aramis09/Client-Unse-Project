import useMakeRequest from "@/customHooks/makeRequest";
import styles from "./service.module.scss";
import { ResToGetDetailServices } from "@/types/interfaces";
import { GetServiceWithOrientation, QueryParams, ServiceParams } from "@/types/requestTypes";
import { useRouter } from "next/router";
import Link from "next/link";
import Sections from "@/components/sections/sections";
import AsideNavigation from "@/components/asideNavigation/asideNavigation";
import SubServices from "@/components/subServices/subServices";
import { useEffect, useRef, useState } from "react";
import Loader from "@/components/loader/loader";

const initialHook:ServiceParams<null, QueryParams> = {
  url: "http://localhost:3001/services/getServices/detail",
  body: null,
  querys: {},
  method: 'GET'
};

//!Solucionar eerro de que esto cuando lo recargo no carga
export default function ServiceDetail() {
  const router = useRouter();
  const orientation = String(router.query.idService);

  const initialHookDetail = {
    ...initialHook,
    querys: {
      orientation,
    },
  };
  console.log(initialHookDetail);

  const { data: service, reload } = useMakeRequest<
    null,
    GetServiceWithOrientation,
    ResToGetDetailServices
  >(initialHookDetail);
  // !NO TOCAR LA LINEA DE ABAJO
  useEffect(() => reload, [orientation, service]); //!No importa lo que suceda en la vida, NO TOCAR
  // !NO TOCAR LA LINEA DE ARRIBA
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
