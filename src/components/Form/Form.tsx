// ServiceForm.tsx
import { useState } from "react";
import SectionForm from "@/components/SectionForm/SectionForm";
import { DataInForm } from "@/types/interfaces";
import styles from "./Form.module.scss";
import { useRouter } from "next/router";

interface dataFromForm {
  title: string;
  description: string;
  orientation: string;
  sections: DataInForm[];
}

export default function ServiceForm() {
  const router = useRouter();
  const location = router.pathname;
  const segment = location.split("/");
  const lastSegment = segment[segment.length - 1];

  // opciones lastSegment = "service", "subService", "advertising"

  const [formData, setFormData] = useState<dataFromForm>({
    title: "",
    description: "",
    orientation: "",
    sections: [],
  });

  // funciones que quedan y no se tocan
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
    setFormData({
      ...formData,
      title: "",
      description: "",
      orientation: "",
      sections: [],
    });
  };
  // llegan hasta aca

  if (lastSegment === "service") {
    const [formData, setFormData] = useState<DataService>(initialDataService);
    return (
      <form>
        {Object.keys(formData).map((fieldName) => {
          const value = formData[fieldName as keyof DataService];

          // Manejar el caso de un arreglo (DataInForm[])
          if (Array.isArray(value)) {
            // Aquí puedes decidir cómo deseas renderizar los elementos del arreglo
            return (
              <>
                <label>{fieldName}</label>
                <input type="text" value={}/>
              </>
            );
          }

          // Manejar el caso de otros tipos (string, number, etc.)
          return (
            <div key={fieldName}>
              <label>{fieldName}</label>
              <input type="text" value={value} />
            </div>
          );
        })}
      </form>
    );

    return (
      <>
        <form onSubmit={handleSubmit} className={styles.container}>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <label htmlFor="description">Descripcion</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          {/* Secciones a continuación */}
          <button type="submit">Publicar</button>
        </form>
        <SectionForm
          sections={formData.sections}
          handleSave={handleSectionSave} // Convertir la función a una función anónima
        />
      </>
    );
  }
}
