import { DataInForm } from "@/types/interfaces";
import ShowImage from "@/components/showImage/showImage";
import styles from "./sectionPreview.module.scss";

interface sectionsToDisplay {
  sections: DataInForm[] | null;
}

function SectionPreview({ sections }: sectionsToDisplay) {
  return (
    <>
      {sections &&
        sections?.map((section) => (
          <ul key={section.title} className={styles.noListBullets}>
            {section.topImage ? (
              <ShowImage idImage={section.topImage} type="thumbnail" />
            ) : null}

            <li>{section.title}</li>

            <li>{section.partOne}</li>

            {section.middleImage ? (
              <ShowImage idImage={section.middleImage} type="thumbnail" />
            ) : null}

            <li>{section.partTwo}</li>

            {section.belowImage ? (
              <ShowImage idImage={section.belowImage} type="thumbnail" />
            ) : null}
          </ul>
        ))}
    </>
  );
}

export default SectionPreview;
