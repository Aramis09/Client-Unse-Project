import { SectionsView } from "@/types/interfaces";
import Section from "../section/section";
import generateKeys from "@/utils/generateKeys";
interface P {
  sectionsData: SectionsView[];
}
export default function Sections({ sectionsData }: P) {
  return (
    <div>
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
