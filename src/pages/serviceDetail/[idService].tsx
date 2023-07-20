import useMakeRequest from "@/customHooks/makeRequest";
import styles from "./service.module.scss";
import { ResToGetDetailServices } from "@/types/interfaces";
import { GetServiceWithOrientation, GetWithPage } from "@/types/requestTypes";
import { useRouter } from "next/router";
import Sections from "@/components/sections/sections";
import AsideNavigation from "@/components/asideNavigation/asideNavigation";
import SubServices from "@/components/subServices/subServices"

const initialHook = {
  url: "http://localhost:3001/services/getServices/detail",
  body: null,
  querys: {},
};
export default function AdvertisingDetail() {
  const router = useRouter();
  const orientation = router.query.idService;
  // console.log(orientation, "a verrrrrrrrrrr");

  const initialHookDetail = {
    ...initialHook,
    querys: {
      orientation,
    },
  };

  const { data: service } = useMakeRequest<
    null,
    GetServiceWithOrientation,
    ResToGetDetailServices
  >(initialHookDetail);
  // console.log(service);

  return (
    <div className={styles.container}>
      <SubServices />
      {service?.data && (
        <>
          <h4 className={styles.title}>{service?.data.title}</h4>
          <div className={styles.data}>
            <AsideNavigation sectionsData={service.data.SectionsViewsService} />
            <Sections sectionsData={service.data.SectionsViewsService} />
          </div>
        </>
      )}
    </div>
  );
}
