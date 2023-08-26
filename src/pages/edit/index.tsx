import { sendEdit } from "@/helpers/edit";
import styles from "./edit.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import useVerifyToken from "@/customHooks/useVerifyAdmin";
import Loader from "@/components/loader/loader";
import UploadWidget from "@/components/uploadWidget/uploadWidget";
import { EditText } from "@/components/editText/editText";
import { EditImage } from "@/components/editImage/editImage";

export default function Edit() {
  const { id, typeEdit, property, entitie, oldValue } = useRouter().query;
  const [newValue, setNewValue] = useState(oldValue);
  const { statusToken } = useVerifyToken();

  const [sendStatus, setSendStatus] = useState(false);
  const condition =
    entitie === "section" ||
    entitie === "advertising" ||
    entitie === "service" ||
    entitie === "subService";
  const handleSendEdit = async () => {
    const status = await sendEdit({
      id: Number(id),
      newValue: String(newValue),
      property: String(property),
      typeUrl: condition ? entitie : "defaul",
      typeEdit: String(typeEdit),
      oldValue: String(oldValue),
    });
    setSendStatus(status);
  };
  return statusToken ? (
    <div className={styles.container}>
      {typeEdit === "text" ? (
        <EditText newValue={String(newValue)} setNewValue={setNewValue} />
      ) : (
        <EditImage setNewValue={setNewValue} />
      )}
      {sendStatus && (
        <p className={styles.messageSuccesfuly}>
          Los cambios fueron enviados correctamente
        </p>
      )}
      <button className={styles.buttonSend} onClick={handleSendEdit}>
        Guardar
      </button>
    </div>
  ) : (
    <Loader />
  );
}
