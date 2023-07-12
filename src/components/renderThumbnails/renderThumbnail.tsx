import useMakeRequest from "@/customHooks/makeRequest";
import { ResToGetSubAdversit } from "@/types/interfaces";
import { GetWithPage } from "@/types/requestTypes";
import styles from "./renderThumbnail.module.scss";
import Advertising from "../advertising/advertising";

const initialHook = {
  url: "http://localhost:3001/advertising/getAdversiting",
  body: null,
  querys: { page: 1 },
};

export default function RenderThumbnails() {
  const { data: adversitList } = useMakeRequest<
    null,
    GetWithPage,
    ResToGetSubAdversit
  >(initialHook);
  return (
    <div className={styles.container}>
      {adversitList?.data.map((advertising) => (
        <Advertising advertising={advertising} />
      ))}
    </div>
  );
}
