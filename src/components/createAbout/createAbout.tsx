import { useState } from "react";
import styles from "./createAbout.module.scss";
import useVerifyToken from "@/customHooks/useVerifyAdmin";
import UploadWidget from "../uploadWidget/uploadWidget";
import { sendDataToCreateAbout } from "@/helpers/about";
const initForm = {
  id: 1,
  title: "",
  image: "",
  textPartOne: "",
  textPartTwo: "",
};

const CreateAbout = () => {
  const { statusToken } = useVerifyToken();
  const [valuesForm, setValuesForm] = useState(initForm);
  const handleChangeValue = (property: string, value: string) => {
    return setValuesForm((prevState) => {
      const newState = {
        ...prevState,
        [property]: value,
      };
      return newState;
    });
  };

  const hanldeAddIamge = (url: string) => {
    handleChangeValue("image", url);
  };

  return (
    <>
      {statusToken ? (
        <form
          className={styles.containerForm}
          onSubmit={() => sendDataToCreateAbout(valuesForm)}
        >
          <input
            type="text"
            value={valuesForm.title}
            onChange={(value) => handleChangeValue("title", value.target.value)}
            placeholder="Titulo"
          />
          <textarea
            value={valuesForm.textPartOne}
            onChange={(value) =>
              handleChangeValue("textPartOne", value.target.value)
            }
            placeholder="Escriba la informacion que requiera..."
          />
          <UploadWidget
            showImageToUpload={true}
            handleImageUrl={hanldeAddIamge}
          />
          <textarea
            value={valuesForm.textPartTwo}
            onChange={(value) =>
              handleChangeValue("textPartTwo", value.target.value)
            }
            placeholder="Escriba la informacion que requiera..."
          />
          <button className={styles.saveData} type="submit">
            Guardar
          </button>
        </form>
      ) : (
        <section className={styles.noAdminMessage}>
          <p>No hay informacion...</p>
        </section>
      )}
    </>
  );
};

export default CreateAbout;
