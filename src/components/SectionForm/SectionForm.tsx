import { memo, useState } from "react";
import { DataInForm, errorForm } from "@/types/interfaces";
import styles from "./sectionForm.module.scss";
import UploadWidget from "@/components/uploadWidget/uploadWidget";
import validateSection from "./validateSection";
import SectionPreview from "@/components/sectionPreview/SectionPreview";

interface sectionProps {
  sections: DataInForm[] | null;
  handleSave: (data: DataInForm) => void;
}

const initialData: DataInForm = {
  id: 0,
  topImage: "",
  middleImage: "",
  belowImage: "",
  title: "",
  textPartOne: "",
  textPartTwo: "",
};

function SectionForm({ sections, handleSave }: sectionProps) {
  const [formData, setFormData] = useState<DataInForm>(initialData);
  const [errors, setErrors] = useState<errorForm>({
    message: "",
  });
  const [imageUrls, setImageUrls] = useState<{
    [fieldName: string]: string | null;
  }>({
    topImage: null,
    middleImage: null,
    belowImage: null,
  });
  const [deletePreviewImage, setDeletePreviwImage] = useState(false);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors(validateSection(formData));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!errors.message) {
      handleSave({
        ...formData,
        id: sections && sections?.length + 1,
        topImage: imageUrls.topImage,
        middleImage: imageUrls.middleImage,
        belowImage: imageUrls.belowImage,
      });
      setDeletePreviwImage(!deletePreviewImage);
    }
    setFormData(initialData);
  };

  const handleImageTop = (imageData: string) => {
    setImageUrls((prevFormData) => ({
      ...prevFormData,
      topImage: imageData,
    }));
  };

  const handleImageUpload = (
    fieldName: keyof typeof imageUrls,
    imageUrl: string
  ) => {
    setImageUrls((prevImageUrls) => ({
      ...prevImageUrls,
      [fieldName]: imageUrl,
    }));
  };
  const handleNullToString = (value: string | null): string => {
    return value === null ? "" : value;
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <p className={styles.text}>
          En la parte de abajo usted va a poder agregar una seccion que va a
          pertenecer a la publicacion, notara que abajo hay un boton que dice
          "Guardar informacion de seccion", esto lo que hace guardar la seccion
          para que usted pueda agregar otra nueva. La seccion guardada se
          mostrara arriba de la nueva.
        </p>
        <div className={styles.errorMessage}>
          {errors.message ? <p>{errors.message}</p> : null}
        </div>
        <fieldset className={styles.containerFieldsSet}>
          <input
            type="text"
            name="title"
            placeholder="Titulo secundario"
            value={handleNullToString(formData.title)}
            onChange={handleInputChange}
          />
          <UploadWidget
            imageUrl={handleImageTop}
            showImageToUpload={true}
            typeShowImage="auto"
            switchToDeletePreviwImage={deletePreviewImage}
          />
        </fieldset>
        <fieldset className={styles.containerFieldsSet}>
          <textarea
            name="textPartOne"
            placeholder={placeHolderPartOne}
            value={handleNullToString(formData.textPartOne)}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset className={styles.containerFieldsSet}>
          <UploadWidget
            imageUrl={(imageData) =>
              handleImageUpload("middleImage", imageData)
            }
            showImageToUpload={true}
            typeShowImage="auto"
            switchToDeletePreviwImage={deletePreviewImage}
          />
        </fieldset>
        <fieldset className={styles.containerFieldsSet}>
          <textarea
            name="textPartTwo"
            placeholder={placeHolderPartTwo}
            value={handleNullToString(formData.textPartTwo)}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset className={styles.containerFieldsSet}>
          <UploadWidget
            imageUrl={(imageData) => handleImageUpload("belowImage", imageData)}
            showImageToUpload={true}
            typeShowImage="auto"
            switchToDeletePreviwImage={deletePreviewImage}
          />
          <button type="submit" className={styles.buttonConfirm}>
            Guardar informacion de seccion
          </button>
        </fieldset>
      </form>
      <div className={styles.container}>
        <SectionPreview sections={sections} />
      </div>
    </>
  );
}

const placeHolderPartOne =
  "Aqui usted puede escribir el desarrollo de la seccion, tenga en cuenta que puede agregar imagenes apretando en el icono azul celestino";
const placeHolderPartTwo =
  "Usted puede seguir aqui el desarrollo de la informacion, tenga en cuenta que si agrego la imagen de arriba lo que escriba se vera abajo";

export default memo(SectionForm);
