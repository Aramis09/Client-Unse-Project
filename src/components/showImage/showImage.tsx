import { imageFromCloud } from "../../utils/formatImages";
import styles from "./showimage.module.scss";
interface P {
  idImage: string;
  type: "cover" | "thumbnail";
}
export default function ShowImage({ idImage, type }: P) {
  const imageLQ = imageFromCloud(idImage, type);

  return <img src={imageLQ} className={styles.image} />;
}
