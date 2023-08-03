import { useState, Fragment } from "react";
import styles from "./Form.module.scss";
import {
  getFilteredFieldNames,
  initialDataAdvertising,
  initialDataService,
  initialDataSubService,
} from "./initialData";
import {
  DataAdvertising,
  DataService,
  DataSubService,
  DataAdvertisingInForm,
  DataServiceInForm,
  DataSubServiceInForm,
  DataInForm
} from "@/types/interfaces";
import { ServiceParams } from "@/types/requestTypes";
import { generateRequest } from "@/utils/generateRequest";
import SectionForm from "@/components/SectionForm/SectionForm";

const initialHook: ServiceParams<null, null> = {
  url: "http://localhost:3001/advertising/createAdvertising/",
  body: null,
  querys: null,
  method: "POST",
};

interface optionsForm {
  type: "service" | "subservice" | "advertising";
}

type DataToMap =
  | DataAdvertisingInForm
  | DataServiceInForm
  | DataSubServiceInForm;

export default function Forms({ type }: optionsForm) {
  const getInitialFormData = (type: optionsForm["type"]) => {
    switch (type) {
      case "advertising":
        return initialDataAdvertising;
      case "service":
        return initialDataService;
      case "subservice":
        return initialDataSubService;
      default:
        return initialDataAdvertising;
    }
  };

  const [formData, setFormData] = useState<
    DataAdvertising | DataService | DataSubService
  >(getInitialFormData(type));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSectionSave = (sectionData: DataInForm) => {
    setFormData({
      ...formData,
      sections: [...formData.sections, sectionData],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(JSON.stringify(formData)); // Convert formData to string for alert
    const initialHookPost = {
      ...initialHook,
      body: formData,
    };
    generateRequest(initialHookPost);
  };
  const fieldNames = getFilteredFieldNames(formData);
  return (
    <>
    <form onSubmit={handleSubmit} className={styles.container}>
      {formData &&
        fieldNames.map((fieldName) => (
          <Fragment key={fieldName}>
            <label htmlFor={fieldName}>{fieldName}</label>
            <input
              type="text"
              name={fieldName}
              value={formData[fieldName as keyof DataToMap]}
              onChange={handleInputChange}
            />
          </Fragment>
        ))}
    </form>
    <SectionForm sections={formData.sections} handleSave={handleSectionSave} />
    </>
  );
}
