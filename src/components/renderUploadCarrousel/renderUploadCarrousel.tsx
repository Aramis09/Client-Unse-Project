import UploadWidget from "../uploadWidget/uploadWidget";
import styles from "./renderUploadCarrousel.module.scss";
const RenderUploadsCarrousel = ({
  numberImage,
  handleArrayImage,
}: {
  numberImage: number;
  handleArrayImage: (newImg: string) => void;
}) => (
  <section className={styles.containerUploads}>
    {Array.from({ length: numberImage }, (_, index) => (
      <UploadWidget key={index} addImageToCarrousel={handleArrayImage} />
    ))}
  </section>
);

export default RenderUploadsCarrousel;
