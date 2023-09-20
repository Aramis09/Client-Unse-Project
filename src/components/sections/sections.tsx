import { SectionsView } from "@/types/interfaces";
import Section from "../section/section";
import generateKeys from "@/utils/generateKeys";
import styles from "./sections.module.scss";
import ButtonAddSection from "../buttonAddSection/buttonAddSection";
interface P {
  sectionsData: SectionsView[];
  idOwner: number;
  typeOwner: string;
}
export default function Sections({ sectionsData, idOwner, typeOwner }: P) {
  return (
    <div className={styles.container}>
      {sectionsData.map((sectionData) => (
        <Section
          key={generateKeys()}
          sectionsData={sectionData}
          idSection={sectionData.id}
        />
      ))}
      <ButtonAddSection
        styles={styles.iconAddSection}
        idOwner={idOwner}
        typeOwner={typeOwner}
      />
    </div>
  );
}
