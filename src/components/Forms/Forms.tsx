import { useState, Fragment } from "react";
import styles from "./Form.module.scss";
import { getFilteredFieldNames } from "./initialData";
import UploadWidget from "@/components/uploadWidget/uploadWidget";
import {
  DataInForm,
} from "@/types/interfaces";
import { ServiceParams } from "@/types/requestTypes";
import { generateRequest } from "@/utils/generateRequest";
import SectionForm from "@/components/SectionForm/SectionForm";
import useSelectStateForm from "@/customHooks/useSelectStateForm";
import ShowImage from "../showImage/showImage";

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

export default function Forms({ type }: optionsForm) {
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

  const { formData, setFormData } = useSelectStateForm(type);

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

  const handleImageUrl = (imageData: string) => {
    if (formData["image"]) {
      setFormData({
        ...formData,
        image: imageData,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(JSON.stringify(formData)); // Convert formData to string for alert
    const initialHookPost = {
      ...initialHook,
      body: formData,
      url: baseUrl,
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
              formData.image ? (
                // If formData.image has data, use the LoadImage component
                <ShowImage idImage={formData.image} type="thumbnail" />
              ) : (
                // If formData.image is empty, use the UploadWidget component
                <>
                  <label>{fieldName}</label>
                  <UploadWidget handleImageUrl={handleImageUrl} />
                </>
              )
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
