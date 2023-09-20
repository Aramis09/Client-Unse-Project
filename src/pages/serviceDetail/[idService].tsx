import useMakeRequest from "@/customHooks/makeRequest";
import styles from "./service.module.scss";
import { ResToGetDetailServices } from "@/types/interfaces";
import {
  GetServiceWithOrientation,
  QueryParams,
  ServiceParams,
} from "@/types/requestTypes";
import { useRouter } from "next/router";
import Link from "next/link";
import Sections from "@/components/sections/sections";
import AsideNavigation from "@/components/asideNavigation/asideNavigation";
import SubServices from "@/components/subServices/subServices";
import { useEffect, useRef, useState } from "react";
import Loader from "@/components/loader/loader";
import IconEdit from "@/components/iconEdit/iconEdit";
import { URL_GET_DETAIL_SERVICE } from "@/utils/consts";
import ButtonDelete from "@/components/buttonDelete/buttonDelete";

const initialHook: ServiceParams<null, QueryParams> = {
  url: URL_GET_DETAIL_SERVICE,
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
      orientation,
    },
  };

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
      {(service && service.data && (
        <ButtonDelete id={service.data.id} typeDelete="service" />
      )) || <></>}
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
                  <div className={styles.containerProperty}>
                    <IconEdit
                      id={service.data.id}
                      property="title"
                      styles={styles.iconEdit}
                      typeEdit="text"
                      entitie="service"
                    />
                    <h4 className={styles.title}>{service?.data.title}</h4>
                  </div>
                  <div className={styles.data}>
                    <AsideNavigation
                      sectionsData={service.data.SectionsViewsService}
                    />
                    <Sections
                      sectionsData={service.data.SectionsViewsService}
                      idOwner={service.data.id}
                      typeOwner="service"
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
