import {useState } from "react";

function SectionForm() {
  const [typeForm, setTypeForm] = useState("")
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