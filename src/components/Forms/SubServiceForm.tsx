import { useState } from "react";
import SectionForm from "@/components/SectionForm/SectionForm";
import { DataInForm, DataSubService } from "@/types/interfaces";
import { initialDataSubService } from "./initialData";
import styles from "./Form.module.scss";

export default function SubServiceForm() {
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
    alert(JSON.stringify(formData)); // Convert formData to string for alert
  };

  const [formData, setFormData] = useState<DataSubService>(
    initialDataSubService
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
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />    
        <label htmlFor="resume">Resumen</label>
        <input
          type="text"
          name="resumen"
          value={formData.resume}
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
