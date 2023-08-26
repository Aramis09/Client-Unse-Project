import { DataInForm, SectionsView } from "@/types/interfaces";
import styles from "./asideNavigation.module.scss";
import generateKeys from "@/utils/generateKeys";
import useChangeStyles from "@/customHooks/useChangeStyles";
interface P {
  sectionsData?: SectionsView[] | DataInForm[]; //!Este componente se puede reutilizar ampliando los tipos
  otherStyle?: {
    readonly [key: string]: string;
  };
}
export default function AsideNavigation({ sectionsData, otherStyle }: P) {
  const { stylesChosen } = useChangeStyles({
    condition: !!otherStyle,
    falseStyle: styles,
    trueStyle: otherStyle,
    depedence: otherStyle,
  });

  return (
    <>
      {sectionsData && sectionsData.length ? (
        <div className={stylesChosen && stylesChosen.container}>
          {sectionsData.map((section) => (
            <a key={generateKeys()} href={`#${String(section.id)}`}>
              ➼ {section.title}
            </a>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
{
  /* <div className={stylesChosen && stylesChosen.container}>
      {sectionsData ? (
        sectionsData.map((section) => (
          <a key={generateKeys()} href={`#${String(section.id)}`}>
            ➼ {section.title}
          </a>
        ))
      ) : (
        <></>
      )}
    </div> */
}
