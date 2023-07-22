import { useState } from "react";

export default function ServiceForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    orientation: ""
  })

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(formData)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title"></label>
      <input type="text" name="title" onChange={handleInputChange}/>
      <label htmlFor="description"></label>
      <input type="text" name="description" onChange={handleInputChange}/>
      <label htmlFor="orientation" ></label>
      <input type="text" name="orientation" onChange={handleInputChange}/>
      {/* secciones aca abajo*/}
      <button type="submit">Guardar</button>
    </form>
  )
}

