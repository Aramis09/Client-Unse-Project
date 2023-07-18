import { useStylesClick } from "@/customHooks/useStylesClick";
import styles from "./navBar.module.scss";
import Link from "next/link";

//className={styles.}
export default function NavBar() {
  const { style, changeStyles } = useStylesClick({
    styles: styles,
    first: "listShow",
    second: "listHiden",
  });
  //!esto tengo que mejorar
  return (
    <div className={styles.container}>
      <Link href="/">
        <img
          src="https://res.cloudinary.com/dynnwv7md/image/upload/v1688860703/removal.ai__tmp-64a0c01292f03_jhjbha.png"
          alt="icon"
        />
      </Link>
      <div className={styles.menu}>
        <div className={styles.containerList}>
          <h4 onClick={changeStyles}>Services</h4>
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
        </div>
        <h4>About</h4>
      </div>
    </div>
  );
}
