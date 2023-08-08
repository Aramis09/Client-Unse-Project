import {
  initialDataAdvertising,
  initialDataService,
  initialDataSubService,
} from "@/components/Forms/initialData";
import { useState } from "react";
export interface optionsForm {
  type: "service" | "subservice" | "advertising";
}

const getInitialFormData = (typeForm: optionsForm["type"]) => {
  console.log("tipo de formulario", typeForm)
  switch (typeForm) {
    case "advertising":
      console.log("soy una publicidad")
      return initialDataAdvertising;
    case "service":
      console.log("soy un servicio")
      return initialDataService;
    case "subservice":
      console.log("soy un subservicio")

      return initialDataSubService;
  }
};

export default function useSelectStateForm(linkForm: string) {
  var typeForm = null

  if (linkForm === "service") {
    typeForm = getInitialFormData(linkForm)
  } else if (linkForm === "subservice") {
    typeForm = getInitialFormData(linkForm)
  } else if (linkForm === "advertising") {
    typeForm = getInitialFormData(linkForm)
  } else {
    typeForm = getInitialFormData("advertising")
  }
  const [formData, setFormData] = useState(typeForm);
  return {formData, setFormData}
}
 