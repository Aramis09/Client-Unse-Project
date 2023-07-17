import { AdvertisingType } from "@/types/interfaces";
import styles from "./advertising.module.scss";
import Link from "next/link";
import ShowImage from "../showImage/showImage";

interface P {
  advertising: AdvertisingType;
}

export default function Advertising({ advertising }: P) {
  const { id, title, image } = advertising;
  return (
    <div key={id} className={styles.containerCard}>
      <Link href={`/advertisingDetail/${id}`}>
        <span className={styles.coverImage}></span>
      </Link>
      <ShowImage idImage={image} type="thumbnail" />
      <h4>{title}</h4>
    </div>
  );
}
