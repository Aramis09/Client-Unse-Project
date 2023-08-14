import {
  DataAdvertisingInForm,
  DataServiceInForm,
  DataSubServiceInForm,
  DataInForm,
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
    return (errors.message = "La orientacion no puede estar vacia");
  if (!allRegex.regexInTitles.test(object.title))
    return (errors.message =
      "No se pueden usar caracteres especiales como: -, _ o (");
  else errors.message = "";
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

let errorsInSection: errorForm = {
  message: "",
};

export function validateSection(object: DataInForm) {
  if (!object.title)
    return (errorsInSection.message = "El titulo no puede estar vacio");
  if (!allRegex.regexInTitles.test(object.title))
    return (errorsInSection.message =
      "No se pueden usar caracteres especiales como: -, _ o (");
  else return errors;
}