import { DataInForm, TypeForm } from "@/types/interfaces";
import styles from "./sectionForm.module.scss";
import { useState } from "react";

interface ST {
  Type: TypeForm;
}

const initialData = {
  title: "",
  description: "",
  resume: "",
};

function SectionForm({ Type }: ST) {
  const [formData, setFormaData] = useState<DataInForm>(initialData);
  return (
    <form className={styles.container}>
      <label htmlFor="">Titulo</label>
      <input type="text" />
      <label htmlFor="">Descripcion</label>
      <input type="text" />
      <label htmlFor="">Resumen</label>
      <input type="text" />
      {/* Advertising */}
      {Type === "advertising" ? (
        <>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
        </>
      ) : null}
      <h5>Secciones</h5>
      <label htmlFor="">Imagen</label>
      <input type="text" />
      <label htmlFor="">Titulo</label>
      <input type="text" />
      <label htmlFor="">Parte uno</label>
      <input type="text" />
      <label htmlFor="">Imagen</label>
      <input type="text" />
      <label htmlFor="">Parte dos</label>
      <input type="text" />
      <label htmlFor="">Imagen</label>
      <input type="text" />
    </form>
  );
}

export default SectionForm;
