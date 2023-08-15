import useMakeRequest from "@/customHooks/makeRequest";
import { ResToGetAdversit } from "@/types/interfaces";
import { GetWithPage, ServiceParams, QueryParams } from "@/types/requestTypes";
import styles from "./advertisings.module.scss";
import Advertising from "../advertising/advertising";
import Loader from "../loader/loader";

const initialHook:ServiceParams<null, QueryParams> = {
  url: "http://localhost:3001/advertising/getAdversiting",
  body: null,
  querys: { page: 1, size: null },
  method: "GET",
};

export default function Advertisings() {
  const { data: adversitList } = useMakeRequest<
    null,
    GetWithPage,
    ResToGetAdversit
  >(initialHook);
  return (
    <>
      {(adversitList?.data && (
        <div className={styles.container}>
          {adversitList?.data.map((advertising) => (
            <Advertising key={advertising.id} advertising={advertising} />
          ))}
        </div>
      )) || <Loader />}
    </>
  );
}
