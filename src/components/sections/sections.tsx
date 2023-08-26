import { SectionsView } from "@/types/interfaces";
import Section from "../section/section";
import generateKeys from "@/utils/generateKeys";
import styles from "./sections.module.scss";
interface P {
  sectionsData: SectionsView[];
}
export default function Sections({ sectionsData }: P) {
  return (
    <div className={styles.container}>
      {sectionsData.map((sectionData) => (
        <Section
          key={generateKeys()}
          sectionsData={sectionData}
          idSection={sectionData.id}
        />
      ))}
    </div>
  );
}
