import { CarrouselImages } from "@/types/interfaces";
import SwitchComponent from "../switchComponent/switchComponent";
import styles from "./carrouselCard.module.scss";
import ShowImage from "../showImage/showImage";
import { ICON_ARROW_LEFT, ICON_ARROW_RIGHT } from "@/utils/consts";

interface P {
  image: string;
  index: number;
  length: number;
}
export default function CarrouselCard({ image, index, length }: P) {
  return (
    <div className={styles.container}>
      <div className={styles.containerButtons} id={`carrouselCard-${index}`}>
        <div className={styles.arrow}>
          {SwitchComponent(
            !!index,
            <a href={`#carrouselCard-${index - 1}`}>
              <img src={ICON_ARROW_LEFT} alt="ICON_ARROW_LEFT" />
            </a>,
            <a href={`#carrouselCard-${length - 1}`}>
              <img src={ICON_ARROW_LEFT} alt="ICON_ARROW_LEFT" />
            </a>
          )}
        </div>
        <div className={styles.arrow}>
          {SwitchComponent(
            index !== length - 1,
            <a href={`#carrouselCard-${index + 1}`}>
              <img src={ICON_ARROW_RIGHT} alt="ICON_ARROW_RIGHT" />
            </a>,
            <a href={`#carrouselCard-0`}>
              <img src={ICON_ARROW_RIGHT} alt="ICON_ARROW_RIGHT" />
            </a>
          )}
        </div>
      </div>

      {/* <img className={styles.imageItem} src={image} alt="carrouselImage" /> */}
      <ShowImage idImage={image} type="auto" externalStyle={styles.imageItem} />
    </div>
  );
}
