import { TypeForm } from "@/types/interfaces";
import { useState } from "react";
import styles from "./sectionForm.module.scss";

interface ST {
  Type: TypeForm;
}

function SectionForm({ Type }: ST) {

  if (Type === "below") {
    return (
      <form className={styles.container}>
        <label htmlFor="">Titulo</label>
        <input type="text" />
        <label htmlFor="">Parte uno</label>
        <input type="text" />
        <label htmlFor="">Parte dos</label>
        <input type="text" />
        <label htmlFor="">Imagen</label>
        <input type="text" />
      </form>
    );
  }
  if (Type === "middle") {
    return (
      <form className={styles.container}>
        <label htmlFor="">Titulo</label>
        <input type="text" />
        <label htmlFor="">Parte uno</label>
        <input type="text" />
        <label htmlFor="">Imagen</label>
        <input type="text" />
        <label htmlFor="">Parte dos</label>
        <input type="text" />
      </form>
    );
  }
  if (Type === "top") {
    return (
      <form className={styles.container}>
        <label htmlFor="">Imagen</label>
        <input type="text" />
        <label htmlFor="">Titulo</label>
        <input type="text" />
        <label htmlFor="">Parte uno</label>
        <input type="text" />
        <label htmlFor="">Parte dos</label>
        <input type="text" />
      </form>
    );
  }
  return null;
}

export default SectionForm;
