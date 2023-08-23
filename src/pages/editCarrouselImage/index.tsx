import Carrousel from "@/components/carrousel/carrousel";
import styles from "./editCarrouselImage.module.scss";
import { useState, useRef } from "react";
import SaveDataCarrousel from "@/components/saveDataCarrousel/saveDataCarrousel";
import RenderUploadsCarrousel from "@/components/renderUploadCarrousel/renderUploadCarrousel";
import { useRouter } from "next/router";
import UploadWidget from "../../components/uploadWidget/uploadWidget";
import ShowImage from "@/components/showImage/showImage";
import useVerifyToken from "@/customHooks/useVerifyAdmin";
import Loader from "@/components/loader/loader";
import { deleteImage } from "@/helpers/imagesHelper";
import RenderAnyImage from "@/components/renderAnyImages/renderAnyImages";

export default function EditCarrouselImage() {
  const { statusToken } = useVerifyToken();
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
      {statusToken ? (
        <>
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
            <p className={styles.text}>
              Por favor, haga click abajo y selecciones todas las imagenes que
              desea agreagar al carrusel
            </p>
            <UploadWidget
              addImageToCarrousel={handleArrayImage}
              hidenImageUploaded={true}
            />
          </section>
          <RenderAnyImage arrayImages={imagesToCarrousel} />
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
}
