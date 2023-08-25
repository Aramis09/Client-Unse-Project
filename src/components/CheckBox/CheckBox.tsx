import { useState } from "react";
import styles from "./checkbox.module.scss";
import useMakeRequest from "@/customHooks/makeRequest";
import { ServiceParams } from "@/types/requestTypes";
interface CheckProps {
  fieldName: string;
  handleCheck: (data: any) => void;
}
const initialHook: ServiceParams<null, null> = {
  body: null,
  querys: null,
  method: "GET",
  url: "",
};
export default function CheckBox({ handleCheck, fieldName }: CheckProps) {
  const [selectedOption, setSelectedOption] = useState("");
  // const {} = useMakeRequest<null, null>(initialHook);
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    setSelectedOption(e.target.value);
    handleCheck(e.target.value);
  };

  return (
    <section className={styles.container}>
      <label htmlFor={fieldName} className={styles.message}>
        Por favor elija la orientacion del servicio
      </label>

      <div className={styles.containerInputs}>
        <label htmlFor={fieldName}>Servicio para Estudiantes</label>
        <input
          type="radio"
          name={fieldName}
          value="students"
          checked={selectedOption === "students"}
          onChange={handleSelect}
        />
      </div>
      <div className={styles.containerInputs}>
        <label htmlFor={fieldName}>Servicio para Docentes</label>
        <input
          type="radio"
          name={fieldName}
          value="teachers"
          checked={selectedOption === "teachers"}
          onChange={handleSelect}
        />
      </div>
      <div className={styles.containerInputs}>
        <label htmlFor={fieldName}>Servicio para Instituciones</label>
        <input
          type="radio"
          name={fieldName}
          value="institutions"
          checked={selectedOption === "institutions"}
          onChange={handleSelect}
        />
      </div>
    </section>
  );
}
