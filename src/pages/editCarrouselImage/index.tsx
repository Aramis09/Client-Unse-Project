import Carrousel from "@/components/carrousel/carrousel";
import styles from "./editCarrouselImage.module.scss";
import { useState, useRef } from "react";
import SaveDataCarrousel from "@/components/saveDataCarrousel/saveDataCarrousel";
import RenderUploadsCarrousel from "@/components/renderUploadCarrousel/renderUploadCarrousel";
import { useRouter } from "next/router";

export default function EditCarrouselImage() {
  const [numberImage, setNumberImage] = useState(3);
  const [imagesToCarrousel, setimagesToCarrousel] = useState<string[]>([]);
  const router = useRouter();
  const idAdvertising =
    router.query["idAdvertising"] === "undefined" ||
    !router.query["idAdvertising"] ||
    typeof router.query["idAdvertising"] !== "string"
      ? null
      : router.query["idAdvertising"];

  const handleArrayImage = (urlNewImage: string) => {
    setimagesToCarrousel((prevImages) => [...prevImages, urlNewImage]);
  };

  return (
    <section className={styles.container}>
      <Carrousel
        imageEdit={imagesToCarrousel}
        locationToEdit={String(router.query["location"])}
      />
      <SaveDataCarrousel
        images={imagesToCarrousel}
        location={String(router.query["location"])}
        idAdvertising={idAdvertising} //! tengo que ver de mandar null cuando se requira
      />
      <div className={styles.numberUploads}>
        <label htmlFor="numberImage">Cuantas imagenes quiere subir?</label>
        <input
          type="number"
          pattern="[0-9]|10"
          max={10}
          onChange={(evt) =>
            setNumberImage(Math.min(10, Number(evt.target.value)))
          }
        />
      </div>
      <RenderUploadsCarrousel
        numberImage={numberImage}
        handleArrayImage={handleArrayImage}
      />
    </section>
  );
}
