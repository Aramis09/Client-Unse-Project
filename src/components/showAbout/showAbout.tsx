import Link from "next/link";
import styles from "./showAbout.module.scss";
import { ResponseGetAbout } from "@/types/interfaces";
import ShowImage from "../showImage/showImage";
import IconEdit from "../iconEdit/iconEdit";
const ShowAboutData = ({ aboutData }: { aboutData: ResponseGetAbout }) => {
  return (
    <section className={styles.container}>
      <h4>Quienes somos ?</h4>
      <Link href="/contacts">
        <button className={styles.buttonContact}> Contactenos </button>
      </Link>
      <div className={styles.conatinerText}>
        <IconEdit
          entitie="about"
          id={1}
          property="textPartOne"
          typeEdit="text"
          oldValue={aboutData.data.textPartOne}
          styles={styles.iconEdit}
        />
        <p>{aboutData.data.textPartOne}</p>
      </div>
      <div className={styles.conatinerText}>
        <ShowImage
          type="auto"
          idImage={aboutData.data.image}
          externalStyle={styles.image}
        />
        <IconEdit
          entitie="about"
          id={1}
          property="image"
          typeEdit="image"
          styles={styles.iconEdit}
        />
      </div>
      <div className={styles.conatinerText}>
        <IconEdit
          entitie="about"
          id={1}
          property="textPartTwo"
          typeEdit="text"
          oldValue={aboutData.data.textPartTwo}
          styles={styles.iconEdit}
        />

        <p>{aboutData.data.textPartTwo}</p>
      </div>
    </section>
  );
};

export default ShowAboutData;
