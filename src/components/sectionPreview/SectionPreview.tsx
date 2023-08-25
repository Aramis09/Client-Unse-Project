import { DataInForm } from "@/types/interfaces";
import ShowImage from "@/components/showImage/showImage";
import styles from "./sectionPreview.module.scss";
import generateKeys from "@/utils/generateKeys";

interface sectionsToDisplay {
  sections: DataInForm[] | null;
}

function SectionPreview({ sections }: sectionsToDisplay) {
  return (
    <>
      {sections &&
        sections?.map((section, index) => (
          <section
            key={generateKeys()}
            className={styles.container}
            id={`${String(section.id)}`}
          >
            {/* <section key={section.title} className={styles.noListBullets}> */}
            <h4>{section.title}</h4>

            {section.topImage ? (
              <ShowImage idImage={section.topImage} type="auto" />
            ) : null}

            <p>{section.textPartOne}</p>

            {section.middleImage ? (
              <ShowImage idImage={section.middleImage} type="auto" />
            ) : null}

            <p>{section.textPartTwo}</p>

            {section.belowImage ? (
              <ShowImage idImage={section.belowImage} type="auto" />
            ) : null}
            <hr />
          </section>
        ))}
    </>
  );
}

export default SectionPreview;
