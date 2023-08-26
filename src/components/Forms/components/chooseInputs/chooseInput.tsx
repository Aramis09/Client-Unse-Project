import { AllData } from "@/customHooks/useSelectStateForm";
import styles from "./chooseInputs.module.scss";
interface Pr extends P {
  placeholder?: string;
}
interface P {
  fieldName: "title" | "image" | "sections" | "orientation";
  formData: AllData;
  handleOrientationUpdate?: (orientation: string) => void;
  handleInputChange?: (
    evt:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
  type?: "service" | "subservice" | "advertising";
  index?: number;
}
export default function ChooseInput({
  fieldName,
  formData,
  handleInputChange,
  handleOrientationUpdate,
  type,
  index,
}: P) {
  return (
    <div key={fieldName} className={styles.container}>
      {fieldName === "title" ? (
        <InputText
          fieldName={fieldName}
          formData={formData}
          handleInputChange={handleInputChange}
          placeholder="Título principal"
        />
      ) : fieldName === "orientation" ? (
        <></>
      ) : (
        <textarea
          className={selectedStyles(fieldName, styles)}
          name={fieldName}
          placeholder={traslateNames(fieldName)}
          value={String(formData && formData[fieldName])}
          onChange={handleInputChange}
          required={selectedRequired(fieldName)}
        />
      )}
      {type === "service" && fieldName === "orientation" ? (
        <InputText
          fieldName={fieldName}
          formData={formData}
          handleOrientationUpdate={handleOrientationUpdate}
          placeholder="Nombre de la orientacion de los servicios"
        />
      ) : (
        <></>
      )}
    </div>
  );
}

const InputText = ({
  fieldName,
  formData,
  handleInputChange,
  handleOrientationUpdate,
  placeholder,
}: Pr) => {
  return (
    <input
      type="text"
      name={fieldName}
      placeholder={placeholder}
      value={String(formData[fieldName])}
      onChange={(evt) => {
        handleInputChange
          ? handleInputChange(evt)
          : handleOrientationUpdate &&
            handleOrientationUpdate(evt.target.value);
      }}
      required={true}
      pattern="^[A-Za-z0-9ÁÉÍÓÚáéíóú\s]*$"
    />
  );
};
//!logic
const traslateNames = (name: string) => {
  switch (name) {
    case "summary":
      return "Resumen";
    case "resume":
      return "Resumen";
    case "aside":
      return "Lateral";
    case "footer":
      return "Pie de pagina";
    case "description":
      return "Descripcion";
    case "orientation":
      return "Orientacion";
  }
};

const selectedStyles = (
  fieldName: string,
  styles: {
    readonly [key: string]: string;
  }
) => {
  switch (fieldName) {
    case "summary":
      return styles.summary;
    case "resume":
      return styles.summary;
    case "aside":
      return styles.none;
    case "footer":
      return styles.none;
  }
};

const selectedRequired = (fieldName: string) => {
  switch (fieldName) {
    case "summary":
      return true;
    case "resume":
      return true;
    case "aside":
      return false;
    case "footer":
      return false;
  }
};
