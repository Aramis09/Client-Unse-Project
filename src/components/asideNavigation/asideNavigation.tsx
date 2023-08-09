import { SectionsView } from "@/types/interfaces";
import styles from "./asideNavigation.module.scss";
interface P {
  sectionsData: SectionsView[]; //!Este componente se puede reutilizar ampliando los tipos
}
export default function AsideNavigation({ sectionsData }: P) {
  return (
    <div className={styles.container}>
      {sectionsData.map((section) => (
        <a href={`#${String(section.id)}`}>{section.title}</a>
      ))}
    </div>
  );
}
