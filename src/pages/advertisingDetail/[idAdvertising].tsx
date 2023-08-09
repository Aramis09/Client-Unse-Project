import useMakeRequest from "@/customHooks/makeRequest";
import styles from "./advertising.module.scss";
import { ResToGetDetailAdversit } from "@/types/interfaces";
import { GetWithPage } from "@/types/requestTypes";
import { useRouter } from "next/router";
import ShowImage from "@/components/showImage/showImage";
import Sections from "@/components/sections/sections";
import AsideNavigation from "@/components/asideNavigation/asideNavigation";
import Carrousel from "@/components/carrousel/carrousel";
import Loader from "@/components/loader/loader";
import { useEffect } from "react";
const initialHook = {
  url: "http://localhost:3001/advertising/getAdversiting/",
  body: null,
  querys: { page: 1, size: 6 },
};
export default function AdvertisingDetail() {
  const router = useRouter();
  const id = Number(router.query.idAdvertising);
  const initialHookDetail = { ...initialHook, url: initialHook.url + id };

  const { data: advertising, reload } = useMakeRequest<
    null,
    GetWithPage,
    ResToGetDetailAdversit
  >(initialHookDetail);
  useEffect(() => reload, [id, advertising]);

  return (
    <div className={styles.container}>
      <Carrousel imageEdit={[]} locationToEdit="" />
      {(advertising?.data && (
        <>
          {/* <ShowImage idImage={advertising.data.image} type="cover" /> */}
          <h4 className={styles.title}>{advertising?.data.title}</h4>
          <div className={styles.data}>
            <AsideNavigation sectionsData={advertising.data.SectionsViews} />
            <Sections sectionsData={advertising.data.SectionsViews} />
            <p className={styles.aside}>{advertising?.data.aside}</p>
          </div>
          <p className={styles.footer}>{advertising?.data.footer}</p>
        </>
      )) || <Loader />}
    </div>
  );
}
