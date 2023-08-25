import React from "react";
import ChooseInput from "../chooseInputs/chooseInput";
import CheckBox from "@/components/checkBox/checkBox";
import UploadWidget from "@/components/uploadWidget/uploadWidget";
import ShowImage from "@/components/showImage/showImage";
import { AllData } from "@/customHooks/useSelectStateForm";
interface P {
  styles: {
    readonly [key: string]: string;
  };
  fieldNames: ("image" | "title" | "orientation" | "sections")[];
  fieldName: "image" | "title" | "orientation" | "sections";
  formData: AllData;
  handleImageUrl: (imageData: string) => void;
  handleOrientationUpdate: (data: string) => void;
  handleInputChange: (
    evt:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function ChooseForm({
  styles,
  fieldNames,
  fieldName,
  formData,
  handleImageUrl,
  handleOrientationUpdate,
  handleInputChange,
}: P) {
  return (
    <div>
      {fieldNames.includes("image") ? (
        formData.image ? (
          <div className={styles.imgContainer}>
            <ShowImage idImage={formData.image} type="thumbnail" />
          </div>
        ) : (
          <>
            <label>{fieldName}</label>
            <UploadWidget handleImageUrl={handleImageUrl} />
          </>
        )
      ) : fieldName.includes("orientation") ? (
        <>
          <label htmlFor={fieldName}>{fieldName}</label>
          <CheckBox
            handleCheck={handleOrientationUpdate}
            fieldName={fieldName}
          />
        </>
      ) : (
        <ChooseInput
          fieldName={fieldName}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  );
}
