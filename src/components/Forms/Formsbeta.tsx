import { useState, Fragment } from "react";
import SectionForm from "@/components/SectionForm/SectionForm";
import {
  DataInForm,
  DataAdvertising,
  DataAdvertisingInForm,
  DataService,
  DataSubService,
  DataServiceInForm,
  DataSubServiceInForm,
} from "@/types/interfaces";
import {
  initialDataAdvertising,
  getFilteredFieldNames,
  initialDataService,
  initialDataSubService,
} from "./initialData";
import styles from "./Form.module.scss";
import { ServiceParams } from "@/types/requestTypes";
import { generateRequest } from "@/utils/generateRequest";
import { useRouter } from "next/router";

const initialHook: ServiceParams<null, null> = {
  url: "http://localhost:3001/advertising/createAdvertising/",
  body: null,
  querys: null,
  method: "POST",
};

export default function Form() {
  const router = useRouter();
  const { type } = router.query;

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

  const [formData, setFormData] = useState<DataAdvertising>(initialDataAdvertising);
  

  const filteredFieldNames = getFilteredFieldNames(formData);
  if (type === "service") {
    return (
      <form onSubmit={handleSubmit} className={styles.container}>
        <>
          {filteredFieldNames.map((fieldName: string) => {
            {
              return (
                <Fragment key={fieldName}>
                  <label htmlFor={fieldName}>{fieldName}</label>
                  <input
                    type="text"
                    name={fieldName}
                    value={formDataService[fieldName as keyof DataServiceInForm]}
                    onChange={handleInputChange}
                  />
                </Fragment>
              );
            }
          })}
        </>
      </form>
    );
  }

  if (type === "subservice") {
    return (
      <form onSubmit={handleSubmit} className={styles.container}>
        <>
          {filteredFieldNames.map((fieldName: string) => {
            {
              return (
                <Fragment key={fieldName}>
                  <label htmlFor={fieldName}>{fieldName}</label>
                  <input
                    type="text"
                    name={fieldName}
                    value={formDataSubService[fieldName as keyof DataSubServiceInForm]}
                    onChange={handleInputChange}
                  />
                </Fragment>
              );
            }
          })}
        </>
      </form>
    );
  }

  if (type === "advertising") {
    return (
      <form onSubmit={handleSubmit} className={styles.container}>
        <>
          {filteredFieldNames.map((fieldName: string) => {
            {
              return (
                <Fragment key={fieldName}>
                  <label htmlFor={fieldName}>{fieldName}</label>
                  <input
                    type="text"
                    name={fieldName}
                    value={formDataAdvertising[fieldName as keyof DataAdvertisingInForm]}
                    onChange={handleInputChange}
                  />
                </Fragment>
              );
            }
          })}
        </>
      </form>
    );
  }
}
