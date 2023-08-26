import { AdvertisingType } from "@/types/interfaces";
import styles from "./advertising.module.scss";
import falseStyle from "./advertisingInsideDetail.module.scss";
import Link from "next/link";
import ShowImage from "../showImage/showImage";
import { useRouter } from "next/router";
import useChangeStyles from "@/customHooks/useChangeStyles";
import IconEdit, { PropToEdit } from "../iconEdit/iconEdit";

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
    <article key={id} className={stylesChosen && stylesChosen.containerCard}>
      <Link href={`/advertisingDetail/${id}`}>
        <span className={stylesChosen && stylesChosen.coverImage}></span>
      </Link>
      <h4>{title}</h4>
      <ShowImage idImage={image} type="thumbnail" />
      <IconEdit
        id={id}
        property="image"
        styles={(stylesChosen && stylesChosen.iconEdit) || ""}
        typeEdit="image"
        entitie="advertising"
        oldValue={String(image)}
      />
      <p className={stylesChosen && stylesChosen.date}>{date}</p>
      <section className={stylesChosen && stylesChosen.containerSummary}>
        <IconEdit
          id={id}
          property="summary"
          styles={(stylesChosen && stylesChosen["iconEdit"]) || ""}
          typeEdit="text"
          entitie="advertising"
          oldValue={String(summary)}
        />
        <Link href={`/advertisingDetail/${id}`}>
          {" "}
          <p>{summary}</p>
        </Link>
      </section>
    </article>
  );
}
