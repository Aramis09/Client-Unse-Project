import { contactData, errorForm } from "@/types/interfaces";
import * as regex from '@/utils/regex'

export default function validation(object: contactData): errorForm {
  
  let errors: errorForm = {
    message: "",
  };

  if (!object.name) {
    errors.message = "El nombre no puede estar vacío";
  }
  if(!regex.regexInTitles.test(object.name)){
    errors.message = "No se pueden usar caracteres especiales como: -, _ o ("
  }

  if (!object.email) {
    errors.message = "El E-mail no puede estar vacío";
  }
  if(!regex.emailRegex.test(object.email)){
    errors.message = "E-mail invalido"
  }

  if (!object.phone) {
    errors.message = "El telefono no puede estar vacío";
  }
  if(!regex.phoneRegex.test(object.phone)){
    errors.message = "Telefono invalido"
  }

  if (!object.reason) {
    errors.message = "El motivo no puede estar vacío";
  }
  if(!regex.regexInTitles.test(object.reason)){
    errors.message = "No se pueden usar caracteres especiales como: -, _ o ("
  }

  return errors;
}