import {
  initialDataAdvertising,
  initialDataService,
  initialDataSubService,
} from "@/components/Forms/initialData";
import { DataAdvertising, DataService, DataSubService, optionsForm } from "@/types/interfaces";
import { useState, useEffect } from "react";


type AllData = DataAdvertising | DataService | DataSubService

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

// const createUrl = (typeForm: optionsForm["type"]) => {
//   switch (typeForm) {
//     case "service":
//       baseUrl = baseUrl + "/services/createService";
//       break;
//     case "subservice":
//       baseUrl = baseUrl + "/subServices/createSubService";
//       break;
//     case "advertising":
//       baseUrl = baseUrl + "/advertising/createAdvertising";
//       break;

//     default:
//       baseUrl = baseUrl + "/advertising/createAdvertising";
//       break;
//   }
// };

export default function useSelectStateForm(linkForm: string) {
  const [formData, setFormData] = useState<any>(null);
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    let typeForm = null;
    let baseUrl = "http://localhost:3001"; // Initialize baseUrl here

    switch (linkForm) {
      case "service":
        typeForm = initialDataService;
        baseUrl += "/services/createService";
        break;
      case "subservice":
        typeForm = initialDataSubService;
        baseUrl += "/subServices/createSubService";
        break;
      case "advertising":
        typeForm = initialDataAdvertising;
        baseUrl += "/advertising/createAdvertising";
        break;
      default:
        typeForm = initialDataAdvertising;
        baseUrl += "/advertising/createAdvertising";
        break;
    }

    setFormData(typeForm);
    setUrl(baseUrl);
  }, [linkForm]);

  return { formData, setFormData, url };
}
