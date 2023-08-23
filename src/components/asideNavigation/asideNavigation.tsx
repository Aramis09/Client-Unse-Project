import { SectionsView } from "@/types/interfaces";
import styles from "./asideNavigation.module.scss";
import generateKeys from "@/utils/generateKeys";
interface P {
  sectionsData: SectionsView[]; //!Este componente se puede reutilizar ampliando los tipos
}
export default function AsideNavigation({ sectionsData }: P) {
  return (
    <div className={styles.container}>
      {sectionsData.map((section) => (
        <a key={generateKeys()} href={`#${String(section.id)}`}>
          {section.title}
        </a>
      ))}
    </div>
  );
}
