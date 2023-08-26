import { Fragment, useState } from "react";
import styles from "./Form.module.scss";
import { getFilteredFieldNames } from "./initialData";
import UploadWidget from "@/components/uploadWidget/uploadWidget";
import { DataInForm, optionsForm, errorForm } from "@/types/interfaces";
import { ServiceParams } from "@/types/requestTypes";
import { generateRequest } from "@/utils/generateRequest";
import SectionForm from "@/components/SectionForm/SectionForm";
import useSelectStateForm from "@/customHooks/useSelectStateForm";
import validation from "./validate";
import ChooseInput from "./components/chooseInputs/chooseInput";
import ErrorMessage from "./components/errorMessage/errorMessage";
import AsideNavigation from "../asideNavigation/asideNavigation";
import generateKeys from "@/utils/generateKeys";
import otherStleToAside from "../asideNavigation/asideNavigationOnCreateNew.module.scss";
import CheckBoxs from "@/components/checkBox/checkBox";

const initialHook: ServiceParams<null, null> = {
  url: "https://servidor-unse.onrender.com",
  body: null,
  querys: null,
  method: "POST",
};

export default function Forms({ type }: optionsForm) {
  const { formData, setFormData, url, initialData } = useSelectStateForm(type);
  const [errors, setErrors] = useState<errorForm>({
    message: "",
    type: "",
  });
  const handleInputChange = (
    evt:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prevFormData) => {
      const newState = prevFormData && {
        ...prevFormData,
        [evt.target.name]: evt.target.value,
      };
      setErrors(validation(newState, type));
      return newState;
    });
  };

  const handleSectionSave = (sectionData: DataInForm) => {
    formData &&
      setFormData({
        ...formData,
        sections: [...formData.sections, sectionData],
      });
  };

  const handleOrientationUpdate = (data: string) => {
    console.log("entre al metodo 1");

    setFormData((prevFormData) => {
      const newState = prevFormData && {
        ...prevFormData,
        orientation: data,
      };
      setErrors(validation(newState, type));
      return newState;
    });
  };

  const handleImageUrl = (imageData: string) => {
    setFormData((prevFormData) => {
      const newState = prevFormData && {
        ...prevFormData,
        image: imageData,
      };
      setErrors(validation(newState, type));

      return newState;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!errors.message) {
      const initialHookPost = {
        ...initialHook,
        body: formData,
        url: url,
      };
      generateRequest(initialHookPost);
      setFormData(initialData);
    }
  };

  const fieldNames = formData && getFilteredFieldNames(formData);
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container}>
        <ErrorMessage errors={errors} />
        {formData &&
          fieldNames &&
          fieldNames.map((fieldName, index) =>
            fieldName.includes("image") ? (
              <div className={styles.containerUploadImage}>
                <label>Suba la imagen de portada de la publicidad</label>
                <UploadWidget
                  handleImageUrl={handleImageUrl}
                  showImageToUpload={true}
                  typeShowImage="auto"
                />
              </div>
            ) : (
              <ChooseInput
                fieldName={fieldName}
                formData={formData}
                handleInputChange={handleInputChange}
                handleOrientationUpdate={handleOrientationUpdate}
                type={type}
                index={index}
              />
            )
          )}
        {type === "subservice" ? (
          <CheckBoxs
            handleCheck={handleOrientationUpdate}
            fieldName={"orientation"}
          />
        ) : (
          <></>
        )}
        <button type="submit" className={styles.buttonSendPost}>
          Publicar en la web
        </button>
      </form>
      {formData && (
        <SectionForm
          sections={formData.sections}
          handleSave={handleSectionSave}
        />
      )}
      <AsideNavigation
        sectionsData={formData && formData.sections}
        key={generateKeys()}
        otherStyle={otherStleToAside}
      />
    </>
  );
}
