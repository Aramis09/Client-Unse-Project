import { useState } from "react";
import styles from "./contactForm.module.scss";
import { contactData, errorForm } from "@/types/interfaces";
import validation from "./validate";
import { sendMail } from "./emailSender";

interface props {
  subservice: string;
}

export default function ContactForm({ subservice }: props) {
  const initialData: contactData = {
    name: "",
    subservice: subservice,
    email: "",
    reason: "",
    phone: "",
  };
  const [formData, setFormData] = useState<contactData>(initialData);
  const [errors, setErrors] = useState<errorForm>({
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(validation(formData));
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errors.message) {
      alert("Datos incorrectos");
    } else {
      alert("Se enviaron los datos correctamente");
      sendMail(formData)
      setFormData(initialData);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container}>
        <h3>Servicio a consultar</h3>
        <span>{formData.subservice}</span>
        <div className={styles.errorMessage}>
          {errors.message ? <p>{errors.message}</p>: null}
        </div>

        <label htmlFor="name">Nombre *</label>
        <input
          type="text"
          name="name"
          placeholder="Ingresa tu nombre"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="email">E-mail *</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Ej: juanperez@mail.com"
        />

        <label htmlFor="phone">Numero de Telefono *</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Ingresa tu telefono"
        />

        <label htmlFor="reason">Motivo *</label>
        <input
          type="text"
          name="reason"
          value={formData.reason}
          onChange={handleInputChange}
          placeholder="Ej: Disponibilidad horaria"
        />

        <button type="submit">Enviar</button>
        <span>* Campos obligatorios</span>
      </form>
    </>
  );
}
