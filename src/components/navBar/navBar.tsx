import { useStylesClick } from "@/customHooks/useStylesClick";
import styles from "./navBar.module.scss";
import Link from "next/link";
import IsLogedIn from "../isLogedIn/isLogedIn";
import dynamic from "next/dynamic";
import { LOGO } from "@/utils/consts";

function NavBar() {
  const { style, changeStyles } = useStylesClick({
    styles: styles,
    first: "listHiden",
    second: "listShow",
  });
  //!esto tengo que mejorar

  return (
    <div className={styles.container}>
      <Link href="/">
        <img src={LOGO} alt="icon" />
      </Link>
      <div className={styles.menu}>
        <IsLogedIn />
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
export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
