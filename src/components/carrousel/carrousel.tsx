import styles from "./carrousel.module.scss";
import CarrouselCard from "./carrouselCard";
import GoEdit from "../goEdit/goEdit";
import useMakeRequest from "@/customHooks/makeRequest";
import { ServiceParams } from "@/types/requestTypes";
import { CarrouselImages, ResToGetCarrousel } from "@/types/interfaces";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
interface P {
  imageEdit: string[];
  locationToEdit: string;
}

const initState: ServiceParams<null, { location: string }> = {
  url: "http://localhost:3001/carrousel/getDetail",
  body: null,
  method: "GET",
  querys: { location: "" }, //!Esto depende de donde este
};

export default function Carrousel({ imageEdit, locationToEdit }: P) {
  const router = useRouter();
  const idAd =
    router.query["idAdvertising"] === "undefined" ||
    !router.query["idAdvertising"]
      ? ""
      : router.query["idAdvertising"];

  const [imagesToRender, setImagesToRender] = useState<string[]>([]);
  const initStatePlus = {
    ...initState,
    querys: {
      location: locationToEdit || router.pathname,
      idAdvertising: idAd, //! tengo que ver de mandar null cuando se requira
    },
  };
  const { data: images } = useMakeRequest<
    null,
    { location: string },
    ResToGetCarrousel
  >(initStatePlus);

  useEffect(() => setImagesToRender(imageEdit), [imageEdit]);
  return (
    <>
      {!!images && !!images.data ? (
        <div className={styles.container}>
          <GoEdit
            whereRedirect="/editCarrouselImage"
            location={router.pathname}
            action="edit"
          />
          {!imagesToRender.length && images ? (
            <RenderImagesCarrousel
              imagesRender={images.data.CarrouselContent}
            />
          ) : (
            <RenderImagesCarrousel imagesRender={imagesToRender} />
          )}
        </div>
      ) : (
        <section className={styles.containerCreate}>
          <GoEdit
            whereRedirect="/editCarrouselImage"
            location={router.pathname}
            action="create"
          />
        </section>
      )}
    </>
  );
}

const RenderImagesCarrousel = ({
  imagesRender,
}: {
  imagesRender: string[] | CarrouselImages[];
}) => {
  return (
    <>
      {imagesRender &&
        imagesRender.map((image, index) => (
          <CarrouselCard
            image={typeof image === "string" ? image : image.url}
            index={index}
            length={imagesRender.length}
            key={Math.random() * Math.random()}
          />
        ))}
    </>
  );
};
