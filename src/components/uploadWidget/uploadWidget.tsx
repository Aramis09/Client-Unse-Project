import { useEffect, useRef, useState } from "react";
import styles from "./uploadWidget.module.scss";
import { ImageData } from "@/types/interfaces";
interface P {
  addImageToCarrousel?: (urlNewImage: string) => void;
  handleImageUrl?: (data: string) => void;
}

export default function UploadWidget({ addImageToCarrousel, handleImageUrl }: P) {
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
        // setLatestResult(result); // Update the latest result
        if (result.event === "success") {
            setImageData(result.info);
            addImageToCarrousel && addImageToCarrousel(result.info.url);
            handleImageUrl && handleImageUrl(result.info.public_id);
        }
      }
    );
  }, []);

  return (
    <div className={styles.container}>
      <button onClick={() => widgetRef.current.open()}>Subir imagen</button>
      {imageData && <img src={imageData.url} alt="imageLoad" />}
    </div>
  );
}


