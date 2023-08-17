import styles from "./loader.module.scss";
import { MoonLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <MoonLoader color="rgb(0, 0, 0)" size="200px" />
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
