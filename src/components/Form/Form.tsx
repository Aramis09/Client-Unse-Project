// ServiceForm.tsx
import { useState } from "react";
import SectionForm from "@/components/SectionForm/SectionForm";
import { DataInForm } from "@/types/interfaces";
import styles from "./Form.module.scss"

interface dataFromForm {
  title: string;
  description: string;
  orientation: string;
  sections: DataInForm[];
}

export default function ServiceForm() {
  const [formData, setFormData] = useState<dataFromForm>({
    title: "",
    description: "",
    orientation: "",
    sections: [],
  });

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
