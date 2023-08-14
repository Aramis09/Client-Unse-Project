import styles from "./loader.module.scss";
import { MoonLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <MoonLoader color="black" size="160" />
      <section>
        <p>Puede que este cargando...</p>
        <br />
        <p>Puede que no hay mas productos...</p>
        <br />
        <p>Puede que haya caido el servidor...</p>
      </section>
    </div>
  );
}
