import useMakeRequest from "@/customHooks/makeRequest";
import styles from "./advertising.module.scss";
import { DetailAdvertising } from "@/types/interfaces";
import { GetWithPage } from "@/types/requestTypes";
import { useRouter } from "next/router";
const initialHook = {
  url: "http://localhost:3001/advertising/getAdversiting/",
  body: null,
  querys: { page: 1 },
};
export default function AdvertisingDetail() {
  const router = useRouter();
  const id = Number(router.query.idAdvertising);
  const initialHookDetail = { ...initialHook, url: initialHook.url + id };

  const { data: adversitList } = useMakeRequest<
    null,
    GetWithPage,
    DetailAdvertising
  >(initialHookDetail);

  return (
    <div className={styles.container}>
      {adversitList && (
        <>
          <h4 className={styles.title}>{adversitList?.data.title}</h4>
          <p className={styles.description}>{adversitList?.data.description}</p>
          <p className={styles.aside}>{adversitList?.data.aside}</p>
          <p className={styles.footer}>{adversitList?.data.footer}</p>
        </>
      )}
    </div>
  );
}
