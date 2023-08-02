import { useState } from "react";
import SectionForm from "@/components/SectionForm/SectionForm";
import { DataInForm, DataAdvertising } from "@/types/interfaces";
import { initialDataAdvertising } from "./initialData";
import styles from "./Form.module.scss";
import { ServiceParams } from "@/types/requestTypes";
import { generateRequest } from "@/utils/generateRequest";
const initialHook:ServiceParams<null, null> = {
  url: "http://localhost:3001/advertising/createAdvertising/",
  body: null,
  querys: null,
  method: "POST"
};

export default function AdvertisingForm() {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSectionSave = (sectionData: DataInForm) => {
    setFormData({
      ...formData,
      sections: [...formData.sections, sectionData],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(JSON.stringify(formData)); // Convert formData to string for alert
    const initialHookPost = {
      ...initialHook,
      body: formData,
    };
    generateRequest(initialHookPost)
  };

  const [formData, setFormData] = useState<DataAdvertising>(
    initialDataAdvertising
  );

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <label htmlFor="summary">Resumen</label>
        <input
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleInputChange}
        />
        <label htmlFor="aside">Lateral</label>
        <input
          type="text"
          name="aside"
          value={formData.aside}
          onChange={handleInputChange}
        />
        <label htmlFor="footer">Pie de pagina</label>
        <input
          type="text"
          name="footer"
          value={formData.footer}
          onChange={handleInputChange}
        />
        <label htmlFor="image">Imagen</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
        />
        {/* Secciones a continuación */}
        <button type="submit">Guardar</button>
      </form>
      <SectionForm
        sections={formData.sections}
        handleSave={handleSectionSave} // Convertir la función a una función anónima
      />
    </>
  );
}
