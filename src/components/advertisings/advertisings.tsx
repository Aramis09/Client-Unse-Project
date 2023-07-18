import useMakeRequest from "@/customHooks/makeRequest";
import { ResToGetAdversit } from "@/types/interfaces";
import { GetWithPage } from "@/types/requestTypes";
import styles from "./advertisings.module.scss";
import Advertising from "../advertising/advertising";

const initialHook = {
  url: "http://localhost:3001/advertising/getAdversiting",
  body: null,
  querys: { page: 1 },
};

export default function Advertisings() {
  const { data: adversitList } = useMakeRequest<
    null,
    GetWithPage,
    ResToGetAdversit
  >(initialHook);
  return (
    <div className={styles.container}>
      {adversitList?.data.map((advertising) => (
        <Advertising
          key={advertising.id}
          advertising={advertising}
        />
      ))}
    </div>
  );
}