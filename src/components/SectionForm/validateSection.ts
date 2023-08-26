import { DataInForm, errorForm } from "@/types/interfaces";
import * as allRegex from '@/utils/regex'

export default function validateSection(object: DataInForm): errorForm {
  // Crear un objeto de error inicial
  let errorsInSection: errorForm = {
    message: "",
  };

  // Validar el campo del título
  if (!object.title) {
    errorsInSection.message = "El título no puede estar vacío";
  }
  if (!allRegex.regexInTitles.test(object.title)) {
    errorsInSection.message = "No se pueden usar caracteres especiales como: -, _ o (";
  } else {
    // Si no hay errores, el mensaje de error y el campo se dejan en blanco
    errorsInSection.message = "";
  }

  return errorsInSection; // Devolver el objeto de error actualizado
}
