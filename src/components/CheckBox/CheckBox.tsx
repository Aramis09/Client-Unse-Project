import { useState } from "react";

interface CheckProps {
  fieldName: string;
  handleCheck: (data: any) => void;
}

export default function CheckBox({ handleCheck, fieldName }: CheckProps) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.currentTarget.value);
    handleCheck(selectedOption);
  };

  return (
    <>
      <input
        type="radio"
        name={fieldName}
        value="students"
        checked={selectedOption === "students"}
        onChange={handleSelect}
      />
      <label htmlFor={fieldName}>Servicio para Estudiantes</label>
      <input
        type="radio"
        name={fieldName}
        value="teachers"
        checked={selectedOption === "teachers"}
        onChange={handleSelect}
      />
      <label htmlFor={fieldName}>Servicio para Docentes</label>
      <input
        type="radio"
        name={fieldName}
        value="institutions"
        checked={selectedOption === "institutions"}
        onChange={handleSelect}
      />
      <label htmlFor={fieldName}>Servicio para Instituciones</label>
    </>
  );
}
