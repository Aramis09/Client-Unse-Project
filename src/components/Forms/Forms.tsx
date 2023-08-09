import { Fragment } from "react";
import styles from "./Form.module.scss";
import { getFilteredFieldNames } from "./initialData";
import UploadWidget from "@/components/uploadWidget/uploadWidget";
import { DataInForm, optionsForm } from "@/types/interfaces";
import { ServiceParams } from "@/types/requestTypes";
import { generateRequest } from "@/utils/generateRequest";
import SectionForm from "@/components/SectionForm/SectionForm";
import useSelectStateForm from "@/customHooks/useSelectStateForm";
import ShowImage from "../showImage/showImage";


const initialHook: ServiceParams<null, null> = {
  url: "http://localhost:3001",
  body: null,
  querys: null,
  method: "POST",
};

export default function Forms({ type }: optionsForm) {
  const { formData, setFormData, url } = useSelectStateForm(type);

  // switch (type) {
  //   case "service":
  //     baseUrl = baseUrl + "/services/createService";
  //     break;
  //   case "subservice":
  //     baseUrl = baseUrl + "/subServices/createSubService";
  //     break;
  //   case "advertising":
  //     baseUrl = baseUrl + "/advertising/createAdvertising";
  //     break;

  //   default:
  //     baseUrl = baseUrl + "/advertising/createAdvertising";
  //     break;
  // }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formData &&
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
  };

  const handleSectionSave = (sectionData: DataInForm) => {
    formData &&
      setFormData({
        ...formData,
        sections: [...formData.sections, sectionData],
      });
  };

  const handleImageUrl = (imageData: string) => {
    formData &&
      setFormData({
        ...formData,
        image: imageData,
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(url)
    e.preventDefault();
    // alert(JSON.stringify(formData)); // Convert formData to string for alert
    const initialHookPost = {
      ...initialHook,
      body: formData,
      url: url,
    };
    generateRequest(initialHookPost);
  };
  const fieldNames = formData && getFilteredFieldNames(formData);
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container}>
        {formData &&
          fieldNames &&
          fieldNames.map((fieldName) =>
            fieldName.includes("image") ? (
              formData.image ? (
                // If formData.image has data, use the LoadImage component
                <div className={styles.imgContainer}>
                  <ShowImage idImage={formData.image} type="thumbnail" />
                </div>
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
      {formData && (
        <SectionForm
          sections={formData.sections}
          handleSave={handleSectionSave}
        />
      )}
    </>
  );
}
