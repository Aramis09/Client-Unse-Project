import useMakeRequest from "@/customHooks/makeRequest";
import { ResToGetAdversit } from "@/types/interfaces";
import { GetWithPage, ServiceParams } from "@/types/requestTypes";
import stylesFalse from "./advertisingsInsideDetail.module.scss";
import styles from "./advertisings.module.scss";
import Advertising from "../advertising/advertising";
import Loader from "../loader/loader";
import useChangeStyles from "@/customHooks/useChangeStyles";
import { useRouter } from "next/router";

const initialHook: ServiceParams<null, GetWithPage> = {
  url: "http://localhost:3001/advertising/getAdversiting",
  body: null,
  querys: { page: 1, size: null },
  method: "GET",
};

export default function Advertisings() {
  const router = useRouter();
  const { data: adversitList } = useMakeRequest<
    null,
    GetWithPage,
    ResToGetAdversit
  >(initialHook);
  const condition = router.pathname !== "/advertisingDetail/[idAdvertising]";
  const { stylesChosen } = useChangeStyles({
    condition,
    depedence: router,
    falseStyle: stylesFalse,
    trueStyle: styles,
  });

  return (
    <>
      {(adversitList?.data && (
        <div className={stylesChosen && stylesChosen.container}>
          {adversitList?.data.map((advertising) => (
            <Advertising key={advertising.id} advertising={advertising} />
          ))}
        </div>
      )) || <Loader />}
    </>
  );
}
