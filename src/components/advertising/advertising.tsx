import { AdvertisingType } from "@/types/interfaces";
import styles from "./advertising.module.scss";
import Link from "next/link";

interface P {
  advertising: AdvertisingType;
}

export default function Advertising({ advertising }: P) {
  const { id, title, ThumbnailImage } = advertising;
  return (
    <div key={id} className={styles.containerCard}>
      <Link href={`/advertisingDetail/${id}`}>
        <span className={styles.coverImage}></span>
      </Link>
      <img src={ThumbnailImage[0].url} alt="ThumbnailImage" />
      <h4>{title}</h4>
    </div>
  );
}
