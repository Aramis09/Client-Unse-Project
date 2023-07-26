import useMakeRequest from "@/customHooks/makeRequest";
import styles from "./subService.module.scss";
import {
  ResToGetSubService,
  SubServiceTypes,
  SectionsView,
} from "@/types/interfaces";
import { GetServiceWithOrientation } from "@/types/requestTypes";
import { useRouter } from "next/router";
import Sections from "@/components/sections/sections";
import AsideNavigation from "@/components/asideNavigation/asideNavigation";

export default function AdvertisingDetail() {
  const router = useRouter();
  const orientation = router.query.idSubService;

  const initialHook = {
    url: `http://localhost:3001/subServices/getSubServices/${orientation}`,
    body: null,
    querys: {},
  };

  const initialHookDetail = {
    ...initialHook,
    querys: {
      orientation,
    },
  };

  const { data: service } = useMakeRequest<
    null,
    GetServiceWithOrientation,
    ResToGetSubService
  >(initialHookDetail);

  return (
    <div className={styles.container}>
      {service?.data && (
        <>
          <h4 className={styles.title}>{service.data.title}</h4>
          <span>{service.data.resume}</span>
          <div>{service.data.description}</div>
          <div className={styles.data}>
            <Sections sectionsData={service.data.SectionsViewsSubServ} />
            <AsideNavigation sectionsData={service.data.SectionsViewsSubServ} />
          </div>
        </>
      )}
    </div>
  );
}
