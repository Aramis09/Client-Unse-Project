import { useStylesClick } from "@/customHooks/useStylesClick";
import Link from "next/link";
interface P {
  styles: {
    readonly [key: string]: string;
  };
}

export default function OptionMenuGoServices({ styles }: P) {
  const { style, changeStyles } = useStylesClick({
    styles: styles,
    first: "listHiden",
    second: "listShow",
  });
  return (
    <div className={styles.containerList}>
      <h4 onClick={changeStyles}>Servicios vigentes</h4>
      <MenuService style={style} />
    </div>
  );
}

export const MenuService = ({ style }: { style: string }) => (
  <ul className={style}>
    <Link href="/serviceDetail/institutions">
      <li>Servicio para insituciones</li>
    </Link>
    <Link href="/serviceDetail/teachers">
      <li>Servicio para docentes</li>
    </Link>
    <Link href="/serviceDetail/students">
      <li>Servicio para alumnos</li>
    </Link>
  </ul>
);
