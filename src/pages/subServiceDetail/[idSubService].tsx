import useMakeRequest from "@/customHooks/makeRequest";
import styles from "./subService.module.scss";
import { ResToGetSubService } from "@/types/interfaces";
import { ServiceParams, QueryParams } from "@/types/requestTypes";
import { useRouter } from "next/router";
import Sections from "@/components/sections/sections";
import AsideNavigation from "@/components/asideNavigation/asideNavigation";

export default function AdvertisingDetail() {
  const router = useRouter();
  const subServiceID = router.query.idSubService;

  const initialHook:ServiceParams<null, null> = {
    url: `http://localhost:3001/subServices/getSubServices/${subServiceID}`,
    body: null,
    querys: null,
    method:"GET"
  };

  const { data: service } = useMakeRequest<null, null, ResToGetSubService>(
    initialHook
  );

  return (
    <div className={styles.container}>
      {service?.data && (
        <>
          <h4 className={styles.title}>{service.data.title}</h4>
          <span>{service.data.resume}</span>
          <div>{service.data.description}</div>
          <div className={styles.data}>
            <AsideNavigation sectionsData={service.data.SectionsViewsSubServ} />
            <Sections sectionsData={service.data.SectionsViewsSubServ} />
          </div>
        </>
      )}
    </div>
  );
}
