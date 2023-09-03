import UploadWidget from "@/components/uploadWidget/uploadWidget";
import styles from "./alumno.module.scss";
import { useState } from "react";
import ShowImage from "@/components/showImage/showImage";

export default function Alumno() {
  const [urlImg, setUrlImg] = useState<string>("");
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  let stylesCamera = {
    position: "absolute", //este se va para el grid
    top: top,
    left: left,
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };
  return (
    <section className={styles.container}>
      <div className={styles.celularMarco}>
        <img className={styles.imagesUpload} src={urlImg} alt="image" />
        <img
          style={{
            position: "absolute",
            top: top,
            left: left,
          }}
          src="https://res.cloudinary.com/dzqxa7jfj/image/upload/v1693423366/removal.ai__4b81496f-4f4e-4f3b-84ce-8926c9071a13-imssage_f1vulg.png"
          alt="camera"
        />
      </div>
      <UploadWidget handleImageUrl={setUrlImg} hidenImageUploaded={true} />
      <button onClick={() => setTop(top + 5)}>bajar imagen</button>
      <button onClick={() => setLeft(left + 5)}>Mover para derecha</button>
    </section>
  );
}

{
  /* <img src={urlImg} alt="image" /> */
}
{
  /* <ShowImage idImage={urlImg} type="auto" /> */
}
// style={{
//   position: "absolute",
//   top: top,
//   left: left,
// }}
