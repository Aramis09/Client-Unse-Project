import {useState} from 'react'
import SectionForm from "@/components/SectionForm/SectionForm";
import { TypeForm } from '@/types/interfaces';


function SubServiceForm() {
  const [formData, setFormData] = useState({
    title: "",
    resume: "",
    description: ""
  })
  const [typeForm, setTypeForm] = useState("top")

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(formData)
  }

  const handleForm = (e:TypeForm) => {
    setTypeForm(e)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title"></label>
      <input type="text" onChange={handleInputChange}/>
      <label htmlFor="resume"></label>
      <input type="text" onChange={handleInputChange}/>
      <label htmlFor="description"></label>
      <input type="text" onChange={handleInputChange}/>
      {/*Secciones tambien para ir agregando*/}
      <button onClick={()=>handleForm("top")}>Imagen Superior</button>
      <button onClick={()=>handleForm("middle")}>Imagen Media</button>
      <button onClick={()=>handleForm("below")}>Imagen Inferior</button>
      <SectionForm Type={typeForm}/>
      <button type='submit'>Guardar</button>
    </form>
  )
}

export default SubServiceForm