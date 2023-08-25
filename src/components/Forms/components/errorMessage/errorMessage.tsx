import { errorForm } from "@/types/interfaces";
import styles from "./errorMessage.module.scss";
interface P {
  errors: errorForm;
}
export default function ErrorMessage({ errors }: P) {
  return (
    <div className={errors.message ? styles.errorMessage : styles.hiden}>
      <p>Advertencia</p>
      <br />
      {errors.message ? (
        <>
          <p>{errors.message}</p>
        </>
      ) : null}
    </div>
  );
}
