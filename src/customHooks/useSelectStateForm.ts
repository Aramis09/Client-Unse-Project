import {
  initialDataAdvertising,
  initialDataService,
  initialDataSubService,
} from "@/components/Forms/initialData";
import {
  DataAdvertising,
  DataService,
  DataSubService,
} from "@/types/interfaces";
import { useState } from "react";
export interface optionsForm {
  type: "service" | "subservice" | "advertising";
}

const getInitialFormData = (typeForm: optionsForm["type"]) => {
  switch (typeForm) {
    case "advertising":
      return initialDataAdvertising;
    case "service":
      return initialDataService;
    case "subservice":
      return initialDataSubService;
  }
};

export default function useSelectStateForm(linkForm: string) {

  if (linkForm === "service") {
    var typeForm = getInitialFormData(linkForm)
  }
  if (linkForm === "subservice") {
    var typeForm = getInitialFormData(linkForm)
  }
  if (linkForm === "advertising") {
    var typeForm = getInitialFormData(linkForm)
  } else {
    var typeForm = getInitialFormData("advertising")
  }

  const [formData, setFormData] = useState(typeForm);
  return {formData, setFormData}
}
