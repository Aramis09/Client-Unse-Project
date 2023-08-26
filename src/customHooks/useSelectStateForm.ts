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
import { useState, useEffect } from "react";

export type AllData = DataAdvertising | DataService | DataSubService;

export default function useSelectStateForm(linkForm: string) {
  const [formData, setFormData] = useState<AllData>();
  const [url, setUrl] = useState<string>("");
  const [initialData, setInitialData] = useState<AllData>();

  useEffect(() => {
    let typeForm = null;
    let baseUrl = "https://servidor-unse.onrender.com"; // Initialize baseUrl here

    switch (linkForm) {
      case "service":
        typeForm = initialDataService;
        baseUrl += "/services/createService";
        setInitialData(initialDataService);
        break;
      case "subservice":
        typeForm = initialDataSubService;
        baseUrl += "/subServices/createSubService";
        setInitialData(initialDataSubService);
        break;
      case "advertising":
        typeForm = initialDataAdvertising;
        baseUrl += "/advertising/createAdvertising";
        setInitialData(initialDataAdvertising);
        break;
      default:
        typeForm = initialDataAdvertising;
        baseUrl += "/advertising/createAdvertising";
        setInitialData(initialDataAdvertising);
        break;
    }

    typeForm && setFormData(typeForm);
    setUrl(baseUrl);
  }, [linkForm]);

  return { formData, setFormData, url, initialData};
}
