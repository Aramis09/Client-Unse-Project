import { SectionsView } from "@/types/interfaces";
import ShowImage from "../showImage/showImage";
import styles from "./section.module.scss";
import IconEdit from "../iconEdit/iconEdit";
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
  console.log(sectionsData);

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
          <></>
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
          <></>
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
          <></>
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
          <></>
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
          <></>
        )}
      </div>
    </div>
  );
}
