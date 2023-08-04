import { useState, Fragment } from "react";
import styles from "./Form.module.scss";
import {
  getFilteredFieldNames,
  initialDataAdvertising,
  initialDataService,
  initialDataSubService,
} from "./initialData";
import UploadWidget from "@/components/uploadWidget/uploadWidget";
import {
  DataAdvertising,
  DataService,
  DataSubService,
  DataAdvertisingInForm,
  DataServiceInForm,
  DataSubServiceInForm,
  DataInForm,
} from "@/types/interfaces";
import { ServiceParams } from "@/types/requestTypes";
import { generateRequest } from "@/utils/generateRequest";
import SectionForm from "@/components/SectionForm/SectionForm";
import useSelectStateForm from "@/customHooks/useSelectStateForm";

let baseUrl = "http://localhost:3001";

const initialHook: ServiceParams<null, null> = {
  url: baseUrl,
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
  // const getInitialFormData = (type: optionsForm["type"]) => {
  //   switch (type) {
  //     case "advertising":
  //       return initialDataAdvertising;
  //     case "service":
  //       return initialDataService;
  //     case "subservice":
  //       return initialDataSubService;
  //     default:
  //       return initialDataAdvertising;
  //   }
  // };

  switch (type) {
    case "service":
      baseUrl = baseUrl + "/services/createService";
      break;
    case "subservice":
      baseUrl = baseUrl + "/subServices/createSubService";
      break;
    case "advertising":
      baseUrl = baseUrl + "/advertising/createAdvertising";
      break;

    default:
      baseUrl = baseUrl + "/advertising/createAdvertising";
      break;
  }

  // const [formData, setFormData] = useState<
  //   DataAdvertising | DataService | DataSubService
  // >(getInitialFormData(type));
  const {formData, setFormData} = useSelectStateForm(type)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData)
  };

  const handleSectionSave = (sectionData: DataInForm) => {
    setFormData({
      ...formData,
      sections: [...formData.sections, sectionData],
    });
  };
  
  const handleImageUrl = (imageData: DataAdvertisingInForm) => {
    if(formData["image"]){
      
    }
    setFormData({
      ...formData,
      image: [...formData.image, imageData]
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(JSON.stringify(formData)); // Convert formData to string for alert
    const initialHookPost = {
      ...initialHook,
      body: formData,
      url: baseUrl
    };
    generateRequest(initialHookPost);
  };
  const fieldNames = getFilteredFieldNames(formData);
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container}>
        {formData &&
          fieldNames.map((fieldName) =>
            fieldName.includes("image") ? (
              <>
                <label htmlFor={fieldName}>{fieldName}</label>
                <UploadWidget/>
              </>
            ) : (
              <Fragment key={fieldName}>
                <label htmlFor={fieldName}>{fieldName}</label>
                <input
                  type="text"
                  name={fieldName}
                  value={String(formData[fieldName])}
                  onChange={handleInputChange}
                />
              </Fragment>
            )
          )}
        <button type="submit">Publicar</button>
      </form>
      <SectionForm
        sections={formData.sections}
        handleSave={handleSectionSave}
      />
    </>
  );
}
