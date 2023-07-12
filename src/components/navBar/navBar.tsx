import { useStylesClick } from "@/customHooks/useStylesClick";
import styles from "./navBar.module.scss";

//className={styles.}
export default function NavBar() {
  const { style, changeStyles } = useStylesClick({
    styles: styles,
    first: "listShow",
    second: "listHiden",
  });
  return (
    <div className={styles.container}>
      <img
        src="https://res.cloudinary.com/dynnwv7md/image/upload/v1688860703/removal.ai__tmp-64a0c01292f03_jhjbha.png"
        alt="icon"
      />
      <div className={styles.menu}>
        <div className={styles.containerList}>
          <h4 onClick={changeStyles}>Services</h4>
          <ul className={style}>
            <li>Servicio para insiticiones</li>
            <li>Servicio para docentes</li>
            <li>Servicio para alumnos</li>
          </ul>
        </div>
        <h4>About</h4>
      </div>
    </div>
  );
}
