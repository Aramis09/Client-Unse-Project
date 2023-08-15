import { AdvertisingType } from "@/types/interfaces";
import styles from "./advertising.module.scss";
import falseStyle from "./advertisingInsideDetail.module.scss";
import Link from "next/link";
import ShowImage from "../showImage/showImage";
import { useRouter } from "next/router";
import useChangeStyles from "@/customHooks/useChangeStyles";

interface P {
  advertising: AdvertisingType;
}

export default function Advertising({ advertising }: P) {
  const { id, title, image, summary, date } = advertising;
  const router = useRouter();
  const condition = router.pathname !== "/advertisingDetail/[idAdvertising]";

  const { stylesChosen } = useChangeStyles({
    condition,
    depedence: router,
    falseStyle,
    trueStyle: styles,
  });

  return (
    <article key={id} className={stylesChosen.containerCard}>
      <Link href={`/advertisingDetail/${id}`}>
        <span className={stylesChosen.coverImage}></span>
      </Link>
      <h4>{title}</h4>
      <ShowImage idImage={image} type="thumbnail" />
      <p className={stylesChosen.date}>{date}</p>
      <section className={stylesChosen.containerSummary}>
        <p>{summary}</p>
      </section>
    </article>
  );
}
