import { useState } from "react";
import styles from "./checkbox.module.scss";
import useMakeRequest from "@/customHooks/makeRequest";
import { ServiceParams } from "@/types/requestTypes";
import { OrientationsType } from "@/types/interfaces";
import generateKeys from "@/utils/generateKeys";
import { URL_GET_ORIENTATIONS } from "@/utils/consts";
interface CheckProps {
  fieldName: string;
  handleCheck: (data: any) => void;
}
const initialHook: ServiceParams<null, null> = {
  body: null,
  querys: null,
  method: "GET",
  url: URL_GET_ORIENTATIONS,
};

export default function CheckBox({ handleCheck, fieldName }: CheckProps) {
  const [selectedOption, setSelectedOption] = useState("");
  const { data: orientations } = useMakeRequest<null, null, OrientationsType[]>(
    initialHook
  );
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
      {orientations?.map((orientationObj) => (
        <CheckBoxCard
          key={generateKeys()}
          fieldName={fieldName}
          handleSelect={handleSelect}
          selectedOption={selectedOption}
          option={orientationObj.name}
        />
      ))}
    </section>
  );
}

interface P {
  fieldName: string;
  selectedOption: string;
  handleSelect: (value: React.ChangeEvent<HTMLInputElement>) => void;
  option: string;
}
const CheckBoxCard = ({
  fieldName,
  selectedOption,
  handleSelect,
  option,
}: P) => (
  <div className={styles.containerInputs}>
    <label htmlFor={fieldName}>Servicio para {option}</label>
    <input
      type="radio"
      name={fieldName}
      value={option}
      checked={selectedOption === option}
      onChange={handleSelect}
    />
  </div>
);
