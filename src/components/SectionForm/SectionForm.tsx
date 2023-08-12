import { memo, useState } from "react";
import { DataInForm } from "@/types/interfaces";
import styles from "./sectionForm.module.scss";
import UploadWidget from "@/components/uploadWidget/uploadWidget";

interface sectionProps {
  sections: DataInForm[] | null;
  handleSave: (data: DataInForm) => void;
}

const initialData: DataInForm = {
  topImage: "",
  middleImage: "",
  belowImage: "",
  title: "",
  partOne: "",
  partTwo: "",
};

function SectionForm({ sections, handleSave }: sectionProps) {
  const [formData, setFormData] = useState<DataInForm>(initialData);
  const [imageUrls, setImageUrls] = useState<{
    [fieldName: string]: string | null;
  }>({
    topImage: null,
    middleImage: null,
    belowImage: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("ando aca");
    handleSave({
      ...formData,
      topImage: imageUrls.topImage,
      middleImage: imageUrls.middleImage,
      belowImage: imageUrls.belowImage,
    });
    setFormData(initialData);
  };

  const handleImageTop = (imageData: string) => {
    setImageUrls((prevFormData) => ({
      ...prevFormData,
      topImage: imageData,
    }));
  }

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
      <div className={styles.container}>
        {sections?.map((section) => (
          <ul key={section.title}>
            <li>{section.topImage ? section.topImage : null}</li>
            <li>{section.title}</li>
            <li>{section.partOne}</li>
            <li>{section.middleImage ? section.middleImage : null}</li>
            <li>{section.partTwo}</li>
            <li>{section.belowImage ? section.belowImage : null}</li>
          </ul>
        ))}
      </div>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h5>Secciones</h5>
        <label htmlFor="topImage">Imagen</label>
        <UploadWidget
          imageUrl={handleImageTop}
        />

        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          name="title"
          value={handleNullToString(formData.title)}
          onChange={handleInputChange}
        />
        <label htmlFor="partOne">Parte uno</label>
        <input
          type="text"
          name="partOne"
          value={handleNullToString(formData.partOne)}
          onChange={handleInputChange}
        />
        <label htmlFor="middleImage">Imagen</label>
        <UploadWidget
          imageUrl={(imageData) =>
            handleImageUpload("middleImage", imageData)
          }
        />

        <label htmlFor="partTwo">Parte dos</label>
        <input
          type="text"
          name="partTwo"
          value={handleNullToString(formData.partTwo)}
          onChange={handleInputChange}
        />
        <label htmlFor="belowImage">Imagen</label>
        <UploadWidget
          imageUrl={(imageData) =>
            handleImageUpload("belowImage", imageData)
          }
        />

        <button type="submit">Guardar Borrador</button>
      </form>
    </>
  );
}

export default memo(SectionForm) ;
