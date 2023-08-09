import {
  initialDataAdvertising,
  initialDataService,
  initialDataSubService,
} from "@/components/Forms/initialData";
import { DataAdvertising, DataService, DataSubService } from "@/types/interfaces";
import { useState, useEffect } from "react";


export type AllData = DataAdvertising | DataService | DataSubService

export default function useSelectStateForm(linkForm: string) {
  const [formData, setFormData] = useState<AllData>();
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

    typeForm && setFormData(typeForm);
    setUrl(baseUrl);
  }, [linkForm]);

  return { formData, setFormData, url };
}


