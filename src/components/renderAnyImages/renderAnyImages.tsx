import { deleteImage } from "@/helpers/imagesHelper";
import ShowImage from "../showImage/showImage";
import styles from "./renderAnyImages.module.scss";
import { useStylesClick } from "@/customHooks/useStylesClick";

const RenderAnyImage = ({ arrayImages }: { arrayImages: string[] }) => {
  return (
    <section className={styles.containerRender}>
      {arrayImages.map((imageUrl) => {
        // return <img src={imageUrl} alt="image" />;
        return <RenderImageCard imageUrl={imageUrl} />;
      })}
    </section>
  );
};
//!psace
const RenderImageCard = ({ imageUrl }: { imageUrl: string }) => {
  const { style, changeStyles } = useStylesClick({
    styles,
    first: "containerCard",
    second: "containerCardHiden",
  });
  const handleDeleteImage = () => {
    changeStyles();
    deleteImage({ publicId: imageUrl });
  };
  return (
    <div className={style}>
      <button onClick={handleDeleteImage}>Delete</button>
      <ShowImage idImage={imageUrl} type="auto" />
    </div>
  );
};

export default RenderAnyImage;
