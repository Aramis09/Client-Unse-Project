import SwitchComponent from "../switchComponent/switchComponent";
import styles from "./carrouselCard.module.scss";
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
  console.log(index);

  return (
    <div className={styles.container}>
      <div className={styles.containerButtons} id={`carrouselCard-${index}`}>
        {SwitchComponent(
          !!index,
          <a href={`#carrouselCard-${index - 1}`}>
            <img src={arrowL} alt="arrowL" />
          </a>,
          <a href={`#carrouselCard-${length - 1}`}>
            <img src={arrowL} alt="arrowL" />
          </a>
        )}
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
      <img className={styles.imageItem} src={image} alt="carrouselImage" />
    </div>
  );
}
