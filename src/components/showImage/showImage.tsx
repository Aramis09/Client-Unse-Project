import { imageFromCloud } from "../../utils/formatImages";
interface P {
  idImage: string;
  type: "cover" | "thumbnail";
}
export default function ShowImage({ idImage, type }: P) {
  const imageLQ = imageFromCloud(idImage, type);

  return <img src={imageLQ} />;
}
