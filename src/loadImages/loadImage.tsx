import { useState } from "react";
import styles from "./loadImage.module.scss";
export default function LoadImage() {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleDrop = (event: any) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.match("image.*")) {
      const reader = new FileReader();

      reader.onload = () => {
        reader.result &&
          typeof reader.result == "string" &&
          setSelectedImage(reader.result);
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
      {!!selectedImage ? (
        <img src={selectedImage} alt="Imagen seleccionada" />
      ) : (
        "Arrastra y suelta una imagen aquí"
      )}
    </div>
  );
}
