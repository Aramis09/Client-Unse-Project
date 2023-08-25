import UploadWidget from "@/components/uploadWidget/uploadWidget";
import styles from "./alumno.module.scss";
import { useState } from "react";
import ShowImage from "@/components/showImage/showImage";

export default function Alumno() {
  const [urlImg, setUrlImg] = useState<string>("");
  return (
    <section className={styles.container}>
      <div className={styles.celularMarco}>
        <img src={urlImg} alt="image" />
        {/* <img src={urlImg} alt="image" /> */}
      </div>
      <UploadWidget handleImageUrl={setUrlImg} hidenImageUploaded={true} />
    </section>
  );
}
