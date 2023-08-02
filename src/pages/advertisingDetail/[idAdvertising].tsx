import useMakeRequest from "@/customHooks/makeRequest";
import styles from "./advertising.module.scss";
import { ResToGetDetailAdversit } from "@/types/interfaces";
import { GetWithPage } from "@/types/requestTypes";
import { useRouter } from "next/router";
import ShowImage from "@/components/showImage/showImage";
import Sections from "@/components/sections/sections";
import AsideNavigation from "@/components/asideNavigation/asideNavigation";
const initialHook = {
  url: "http://localhost:3001/advertising/getAdversiting/",
  body: null,
  querys: { page: 1,
  size: 6 },
};
export default function AdvertisingDetail() {
  const router = useRouter();
  const id = Number(router.query.idAdvertising);
  const initialHookDetail = { ...initialHook, url: initialHook.url + id };

  const { data: advertising } = useMakeRequest<
    null,
    GetWithPage,
    ResToGetDetailAdversit
  >(initialHookDetail);
  return (
    <div className={styles.container}>
      {advertising && (
        <>
          <ShowImage idImage={advertising.data.image} type="cover" />
          <h4 className={styles.title}>{advertising?.data.title}</h4>
          <div className={styles.data}>
            <AsideNavigation sectionsData={advertising.data.SectionsViews} />
            <Sections sectionsData={advertising.data.SectionsViews} />
            <p className={styles.aside}>{advertising?.data.aside}</p>
          </div>
          <p className={styles.footer}>{advertising?.data.footer}</p>
        </>
      )}
    </div>
  );
}
