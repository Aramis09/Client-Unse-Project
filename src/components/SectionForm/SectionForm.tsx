import { TypeForm } from "@/types/interfaces";
import {useState } from "react";

interface ST {
  Type: TypeForm
}

function SectionForm({Type}:ST) {
  const [typeForm] = useState(Type )
  if(typeForm === "below"){
    return (
      <form action="">
        <label htmlFor="">Titulo</label>
        <input type="text" />
        <label htmlFor="">Parte uno</label>
        <input type="text" />
        <label htmlFor="">Parte dos</label>
        <input type="text" />
        <label htmlFor="">Imagen</label>
        <input type="text" />
      </form>
    )
  }
  if(typeForm === "middle"){
    return (
      <form action="">
      <label htmlFor="">Titulo</label>
      <input type="text" />
      <label htmlFor="">Parte uno</label>
      <input type="text" />
      <label htmlFor="">Imagen</label>
      <input type="text" />
      <label htmlFor="">Parte dos</label>
      <input type="text" />
    </form>
    )
  }
  if(typeForm === "top"){
    return (
      <form action="">
      <label htmlFor="">Imagen</label>
      <input type="text" />
      <label htmlFor="">Titulo</label>
      <input type="text" />
      <label htmlFor="">Parte uno</label>
      <input type="text" />
      <label htmlFor="">Parte dos</label>
      <input type="text" />
    </form>
    )
  }
}

export default SectionForm