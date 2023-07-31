import { SectionsView } from "@/types/interfaces";
import ShowImage from "../showImage/showImage";
import styles from "./section.module.scss";
interface P {
  sectionsData: SectionsView;
  idSection: number;
}
export default function Section({ sectionsData, idSection }: P) {
  const { title, topImage, middleImage, belowImage, textPartOne, textPartTwo } =
    sectionsData;
  return (
    <div id={String(idSection)} className={styles.container}>
      <h4>{title}</h4>
      {topImage && <ShowImage idImage={topImage} type="cover" />}
      <p>{textPartOne}</p>
      {middleImage && <ShowImage idImage={middleImage} type="cover" />}
      <p>{textPartTwo}</p>
      {belowImage && <ShowImage idImage={belowImage} type="cover" />}
    </div>
  );
}
