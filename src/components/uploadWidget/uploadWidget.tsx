import { useEffect, useRef, useState } from "react";
import styles from "./uploadWidget.module.scss";
import { ImageData } from "@/types/interfaces";
import ShowImage from "../showImage/showImage";
import { ICON_UPLOAD_IMAGE } from "@/utils/consts";
interface P {
  addImageToCarrousel?: (urlNewImage: string) => void;
  handleImageUrl?: (data: string) => void;
  imageUrl?: (data: string) => void;
  hidenImageUploaded?: boolean;
  showImageToUpload?: boolean;
  typeShowImage?: "thumbnail" | "cover" | "auto";
  switchToDeletePreviwImage?: boolean;
}

export default function UploadWidget({
  addImageToCarrousel,
  handleImageUrl,
  imageUrl,
  hidenImageUploaded,
  showImageToUpload,
  typeShowImage,
  switchToDeletePreviwImage,
}: P) {
  const [imageData, setImageData] = useState<ImageData>();
  const cloudinaryRef: any = useRef();
  const widgetRef: any = useRef();

  useEffect(() => {
    setImageData(undefined);
  }, [switchToDeletePreviwImage]);
  useEffect(() => {
    // @ts-ignore
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_UPLOAD_PRESET,
      },
      function (err: any, result: any) {
        const info: ImageData = result.info;
        if (result.event === "success") {
          setImageData(info);
          addImageToCarrousel && addImageToCarrousel(info.public_id);
          handleImageUrl && handleImageUrl(info.public_id); //!volver a public_id
          imageUrl && imageUrl(info.public_id);
        }
      }
    );
  }, []);

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={() => widgetRef.current.open()}
        className={showImageToUpload ? styles.hidenButton : ""}
      >
        Subir imagen
      </button>
      <img
        src={ICON_UPLOAD_IMAGE}
        alt="uploadImage"
        onClick={() => widgetRef.current.open()}
        className={
          showImageToUpload
            ? styles.showImageToUpload
            : styles.hidenImageToUpload
        }
      />
      {/* {imageData && <img src={imageData.url} alt="imageLoad" />}  */}
      <div className={hidenImageUploaded ? styles.hiden : styles.show}>
        {imageData && (
          <ShowImage
            idImage={imageData.public_id}
            type={typeShowImage || "thumbnail"}
          />
        )}
      </div>
    </div>
  );
}
