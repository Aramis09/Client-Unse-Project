import { imageFromCloud } from "../../utils/formatImages";
import styles from "./showimage.module.scss";
interface P {
  idImage: string;
  type: "cover" | "thumbnail" | "auto";
  externalStyle?: string;
}

// {
//   readonly [key: string]: string;
// }
export default function ShowImage({ idImage, type, externalStyle }: P) {
  const imageLQ = imageFromCloud(idImage, type);
  return (
    <img
      src={imageLQ}
      className={externalStyle ? externalStyle : styles.image}
    />
  );
}
