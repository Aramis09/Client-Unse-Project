import {
  DataAdvertisingInForm,
  DataServiceInForm,
  DataSubServiceInForm,
  errorForm,
} from "@/types/interfaces";
import * as allRegex from "@/utils/regex";

type options = "service" | "subservice" | "advertising";

let errors: errorForm = {
  message: "",
  type: "",
};

function validateAdvertise(object: DataAdvertisingInForm) {
  errors.type = "advertising";

  //validaciones titulo
  if (!object.title) return (errors.message = "El titulo no puede estar vacio");
  if (!allRegex.regexInTitles.test(object.title))
    return (errors.message =
      "No se pueden usar caracteres especiales como: -, _ o (");

  // validaciones aside
  if (!object.aside)
    return (errors.message = "El lateral no puede estar vacio");
  if (!allRegex.regexInTitles.test(object.title))
    return (errors.message =
      "No se pueden usar caracteres especiales como: -, _ o (");

  // validaciones footer
  if (!object.footer)
    return (errors.message = "El pie de pagina no puede estar vacio");
  if (!allRegex.regexInTitles.test(object.title))
    return (errors.message =
      "No se pueden usar caracteres especiales como: -, _ o (");

  // validaciones imagen
  if (!object.image) return (errors.message = "Imagen requerida");

  // validaciones summary
  if (!object.summary)
    return (errors.message = "El resumen no puede estar vacio");
  if (!(object.summary.length < 230))
    return (errors.message = "El resumen no puede tener mas de 230 caracteres");

  if (!allRegex.regexInTitles.test(object.title))
    return (errors.message =
      "No se pueden usar caracteres especiales como: -, _ o (");
  else errors.message = "";
}

function validateService(object: DataServiceInForm) {
  errors.type = "service";

  if (!object.title) return (errors.message = "El titulo no puede estar vacio");
  if (!allRegex.regexInTitles.test(object.title))
    return (errors.message =
      "No se pueden usar caracteres especiales como: -, _ o (");
  if (!object.orientation)
    return (errors.message = "Se requiere una orientacion");

  return (errors.message = "");
}

function validateSubService(object: DataSubServiceInForm) {
  errors.type = "subservice";
  // resumen max 230
  if (!object.title) return (errors.message = "El titulo no puede estar vacio");
  if (!allRegex.regexInTitles.test(object.title))
    return (errors.message =
      "No se pueden usar caracteres especiales como: -, _ o (");
  if (!object.description)
    return (errors.message = "La descripcion no puede estar vacia");
  if (!object.resume)
    return (errors.message = "El resumen no puede estar vacio");
  if (!allRegex.regextInTextFields.test(object.resume))
    return (errors.message =
      "No se pueden usar caracteres especiales como: -, _ o (");
  if (!(object.resume.length < 230))
    return (errors.message = "El resumen no puede tener mas de 230 caracteres");
  else errors.message = "";
}

export default function validation(object: any, type: options): errorForm {
  switch (type) {
    case "advertising":
      validateAdvertise(object);
      return errors;

    case "service":
      validateService(object);
      return errors;

    case "subservice":
      validateSubService(object);
      return errors;

    default:
      return errors;
  }
}
