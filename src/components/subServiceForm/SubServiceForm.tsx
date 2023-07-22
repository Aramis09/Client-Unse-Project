import {useState} from 'react'

function SubServiceForm() {
  const [formData, setFormData] = useState({
    title: "",
    resume: "",
    description: ""
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
      <input type="text" onChange={handleInputChange}/>
      <label htmlFor="resume"></label>
      <input type="text" onChange={handleInputChange}/>
      <label htmlFor="description"></label>
      <input type="text" onChange={handleInputChange}/>
      {/*Secciones tambien para ir agregando*/}
      <button type='submit'>Guardar</button>
    </form>
  )
}

export default SubServiceForm