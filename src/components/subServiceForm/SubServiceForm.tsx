import { useState } from "react";
import SectionForm from "@/components/SectionForm/SectionForm";
import { TypeForm } from "@/types/interfaces";
import styles from "./createSubService.module.scss";

function SubServiceForm() {
  const [formData, setFormData] = useState({
    title: "",
    resume: "",
    description: "",
  });
  const [typeForm, setTypeForm] = useState<TypeForm>("top");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(formData);
  };

  const handleForm = (e: TypeForm) => {
    setTypeForm(e);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container} >
        <label htmlFor="title">Titulo</label>
        <input type="text" onChange={handleInputChange} name="title" />
        <label htmlFor="resume">Resumen</label>
        <input type="text" onChange={handleInputChange}  name="resume"/>
        <label htmlFor="description">Descripcion</label>
        <input type="text" onChange={handleInputChange} name="description"/>
        {/*Secciones tambien para ir agregando*/}
        <button type="submit">Guardar</button>
      </form>
      <button onClick={() => handleForm("top")}>Imagen Superior</button>
      <button onClick={() => handleForm("middle")}>Imagen Media</button>
      <button onClick={() => handleForm("below")}>Imagen Inferior</button>
      <SectionForm Type={typeForm} />
    </>
  );
}

export default SubServiceForm;
