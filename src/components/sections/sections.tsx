import { SectionsView } from "@/types/interfaces";
import Section from "../section/section";
interface P {
  sectionsData: SectionsView[];
}
export default function Sections({ sectionsData }: P) {
  return (
    <div>
      {sectionsData.map((sectionData) => (
        <>
          <Section
            key={Math.random()}
            sectionsData={sectionData}
            idSection={sectionData.id}
          />
        </>
      ))}
    </div>
  );
}
