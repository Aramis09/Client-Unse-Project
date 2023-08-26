import { DeleteType, sendDeleted } from "@/helpers/delete";
import styles from "./buttonDelete.module.scss";
import { useState } from "react";
import useVerifyToken from "@/customHooks/useVerifyAdmin";
import { useRouter } from "next/router";

export default function ButtonDelete({ id, typeDelete }: DeleteType) {
  const { statusToken } = useVerifyToken();
  const router = useRouter();
  const [counter, setCounter] = useState(0);
  const handleDelete = async () => {
    setCounter(counter + 1);
    if (counter === 2) {
      sendDeleted({ id, typeDelete });
      router.push("/");
    }
  };
  return statusToken ? (
    <div className={styles.container}>
      <button onClick={handleDelete} className={styles.button}>
        Eliminar publicacion
      </button>
      <p>
        Tenga cuidado, esto borrara toda la publicacion y lo relacionado con
        ello.
        <br />
        Haga 3 click para borrar: {`${counter}`}
      </p>
    </div>
  ) : (
    <></>
  );
}
