import { SectionsView } from "@/types/interfaces";
import ShowImage from "../showImage/showImage";
import styles from "./section.module.scss";
import IconEdit from "../iconEdit/iconEdit";
import { verificationToken } from "@/helpers/verifyToken";
import { useState } from "react";
interface P {
  sectionsData: SectionsView;
  idSection: number;
}
export default function Section({ sectionsData, idSection }: P) {
  const {
    id,
    title,
    topImage,
    middleImage,
    belowImage,
    textPartOne,
    textPartTwo,
  } = sectionsData;

  return (
    <div id={String(idSection)} className={styles.container}>
      <div className={styles.containerProperty}>
        <IconEdit
          id={id}
          property="title"
          styles={styles.iconEdit}
          typeEdit="text"
          entitie="section"
          oldValue={String(title)}
        />
        <h4>{title}</h4>
      </div>
      <div className={styles.containerProperty}>
        {topImage ? (
          <>
            <IconEdit
              id={id}
              property="topImage"
              styles={styles.iconEdit}
              typeEdit="image"
              entitie="section"
              oldValue={topImage}
            />
            <ShowImage idImage={topImage} type="auto" />
          </>
        ) : (
          <>
            {textToAddInfo("imagen")}
            <IconEdit
              id={id}
              property="topImage"
              styles={styles.iconEdit}
              typeEdit="image"
              entitie="section"
              oldValue={""}
            />
          </>
        )}
      </div>
      <div className={styles.containerProperty}>
        {textPartOne ? (
          <>
            <IconEdit
              id={id}
              property="textPartOne"
              styles={styles.iconEdit}
              typeEdit="text"
              entitie="section"
              oldValue={String(textPartOne)}
            />
            <p>{textPartOne}</p>
          </>
        ) : (
          <>
            {textToAddInfo("texto")}
            <IconEdit
              id={id}
              property="textPartOne"
              styles={styles.iconEdit}
              typeEdit="text"
              entitie="section"
              oldValue={String(textPartOne)}
            />
          </>
        )}
      </div>
      <div className={styles.containerProperty}>
        {middleImage ? (
          <>
            <IconEdit
              id={id}
              property="middleImage"
              styles={styles.iconEdit}
              typeEdit="image"
              entitie="section"
              oldValue={middleImage}
            />
            <ShowImage idImage={middleImage} type="auto" />
          </>
        ) : (
          <>
            {textToAddInfo("imagen")}
            <IconEdit
              id={id}
              property="middleImage"
              styles={styles.iconEdit}
              typeEdit="text"
              entitie="section"
              oldValue={String(textPartOne)}
            />
          </>
        )}
      </div>
      <div className={styles.containerProperty}>
        {textPartTwo ? (
          <>
            <IconEdit
              id={id}
              property="textPartTwo"
              styles={styles.iconEdit}
              typeEdit="text"
              entitie="section"
              oldValue={String(textPartTwo)}
            />
            <p>{textPartTwo}</p>
          </>
        ) : (
          <>
            {textToAddInfo("texto")}
            <IconEdit
              id={id}
              property="textPartTwo"
              styles={styles.iconEdit}
              typeEdit="text"
              entitie="section"
              oldValue={String(textPartOne)}
            />
          </>
        )}
      </div>
      <div className={styles.containerProperty}>
        {belowImage ? (
          <>
            <IconEdit
              id={id}
              property="belowImage"
              styles={styles.iconEdit}
              typeEdit="image"
              entitie="section"
              oldValue={belowImage}
            />
            <ShowImage idImage={belowImage} type="auto" />
          </>
        ) : (
          <>
            {textToAddInfo("imagen")}
            <IconEdit
              id={id}
              property="textPartOne"
              styles={styles.iconEdit}
              typeEdit="text"
              entitie="section"
              oldValue={String(textPartOne)}
            />
          </>
        )}
      </div>
    </div>
  );
}

const textToAddInfo = (typeForAdd: "imagen" | "texto") => {
  const [statusAdmin, setStatusAdmin] = useState<boolean>(false);
  verificationToken().then((res) => setStatusAdmin(res.acces));
  return statusAdmin ? (
    <p style={{ color: "#E5345E" }}>
      Puede agregar pulsando el boton de la derecha una {typeForAdd}{" "}
      complementaria
    </p>
  ) : (
    <></>
  );
};
