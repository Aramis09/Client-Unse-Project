import Carrousel from "@/components/carrousel/carrousel";
import styles from "./editCarrouselImage.module.scss";
import { useState, useRef } from "react";
import SaveDataCarrousel from "@/components/saveDataCarrousel/saveDataCarrousel";
import RenderUploadsCarrousel from "@/components/renderUploadCarrousel/renderUploadCarrousel";
import { useRouter } from "next/router";
import UploadWidget from "../../components/uploadWidget/uploadWidget";
import ShowImage from "@/components/showImage/showImage";

export default function EditCarrouselImage() {
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
  console.log(router.query["action"], "<-------------");

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
        action={String(router.query["action"])}
      />

      <section className={styles.uploadWidget}>
        <UploadWidget addImageToCarrousel={handleArrayImage} />
      </section>
      <p>
        Por favor, haga click abajo y selecciones todas las imagenes que desea
        agreagar al carrusel
      </p>
      {/* {imagesToCarrousel.map((image) => {
        return <ShowImage idImage={image} type="thumbnail" />;
      })} */}
    </section>
  );
}

{
  /* Esto se puede ir, al final te deja subir varias imagenes */
}
{
  /* <div className={styles.numberUploads}>
        <label htmlFor="numberImage">Cuantas imagenes quiere subir?</label>
        <input
          type="number"
          pattern="[0-9]|10"
          max={10}
          onChange={(evt) =>
            setNumberImage(Math.min(10, Number(evt.target.value)))
          }
        />
      </div> */
}
{
  /* Esto se puede ir, al final te deja subir varias imagenes */
}
{
  /* <RenderUploadsCarrousel
        numberImage={numberImage}
        handleArrayImage={handleArrayImage}
      /> */
}
