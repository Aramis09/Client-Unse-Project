import { useEffect, useRef, useState, memo } from "react";
import styles from "./uploadWidget.module.scss";
import { ImageData } from "@/types/interfaces";
import ShowImage from "../showImage/showImage";
interface P {
  addImageToCarrousel?: (urlNewImage: string) => void;
  handleImageUrl?: (data: string) => void;
  imageUrl?: (data: string) => void;
  hidenImageUploaded?: boolean;
}

function UploadWidget({
  addImageToCarrousel, handleImageUrl, imageUrl,
  hidenImageUploaded,
}: P) {
  const [imageData, setImageData] = useState<ImageData>();
  const cloudinaryRef: any = useRef();
  const widgetRef: any = useRef();

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
          setImageData(result.info);
          addImageToCarrousel && addImageToCarrousel(result.info.url);
          handleImageUrl && handleImageUrl(result.info.public_id);
          imageUrl && imageUrl(result.info.public_id);
        }
      }
    );
  }, []);

  return (
    <div className={styles.container}>
      <button type="button" onClick={() => widgetRef.current.open()}>Subir imagen</button>
      {/* {imageData && <img src={imageData.url} alt="imageLoad" />}  */}
      <div className={hidenImageUploaded ? styles.hiden : ""}>
        {imageData && (
          <ShowImage idImage={imageData.public_id} type="thumbnail" />
        )}
      </div>
    </div>
  );
}


