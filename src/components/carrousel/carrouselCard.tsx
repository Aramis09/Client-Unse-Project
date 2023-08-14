import { CarrouselImages } from "@/types/interfaces";
import SwitchComponent from "../switchComponent/switchComponent";
import styles from "./carrouselCard.module.scss";
import ShowImage from "../showImage/showImage";
const arrowL =
  "https://res.cloudinary.com/dynnwv7md/image/upload/v1690897372/arrowL_ihe1hv.png";
const arrowR =
  "https://res.cloudinary.com/dynnwv7md/image/upload/v1690897366/arrowR_mpxuso.png";

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
              <img src={arrowL} alt="arrowL" />
            </a>,
            <a href={`#carrouselCard-${length - 1}`}>
              <img src={arrowL} alt="arrowL" />
            </a>
          )}
        </div>
        <div className={styles.arrow}>
          {SwitchComponent(
            index !== length - 1,
            <a href={`#carrouselCard-${index + 1}`}>
              <img src={arrowR} alt="arrowR" />
            </a>,
            <a href={`#carrouselCard-0`}>
              <img src={arrowR} alt="arrowR" />
            </a>
          )}
        </div>
      </div>

      <img className={styles.imageItem} src={image} alt="carrouselImage" />
    </div>
  );
}
