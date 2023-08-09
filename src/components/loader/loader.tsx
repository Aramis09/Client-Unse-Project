import styles from "./loader.module.scss";
import { MoonLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <MoonLoader color="white" size="160" />
    </div>
  );
}
