import { useState } from "react";
import styles from "./loadImage.module.scss";
type DropHanlde = React.DragEvent<HTMLDivElement>;

export default function LoadImages() {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleDrop = (event: DropHanlde) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    console.log("SOY EL BLOB", file); //!Este es el bloooob
    if (file && file.type.match("image.*")) {
      const reader = new FileReader(); //! no nos sirve porque es el base 64

      reader.onload = () => {
        reader.result &&
          typeof reader.result == "string" &&
          setSelectedImage(reader.result);
        console.log("SOY EL BASE 64", reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("El archivo seleccionado no es una imagen.");
    }
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  return (
    <div
      className={styles.drop}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input type="file" />
      {!!selectedImage ? (
        <img src={selectedImage} alt="selectedImage" />
      ) : (
        "Arrastra y suelta una imagen aquí"
      )}
    </div>
  );
}
