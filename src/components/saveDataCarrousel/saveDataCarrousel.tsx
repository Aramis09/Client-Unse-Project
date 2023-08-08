import styles from "./saveDataCarrousel.module.scss";
interface P {
  newImages: string[];
  location: string;
}
const SaveDataCarrousel = ({ newImages }: P) => {
  const url =
    "https://res.cloudinary.com/dynnwv7md/image/upload/v1691506691/save_nvyiex.png";

  return (
    <img
      src={url}
      alt="iconSave"
      onClick={() => {}}
      className={styles.iconSave}
    />
  );
};

export default SaveDataCarrousel;
