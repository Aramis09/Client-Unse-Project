import styles from "./editImage.module.scss";
import UploadWidget from "../uploadWidget/uploadWidget";

export const EditImage = ({
  setNewValue,
}: {
  setNewValue: (v: string) => void;
}) => {
  return (
    <div className={styles.container}>
      <p>Subi la nueva imagen... Elegi solo una</p>
      <UploadWidget showImageToUpload={true} handleImageUrl={setNewValue} />
    </div>
  );
};
