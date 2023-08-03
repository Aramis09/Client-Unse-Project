import { DataAdvertising } from "@/types/interfaces";

export const initialDataService = {
  title: "",
  description: "",
  orientation: "",
  sections: []
}
export const initialDataSubService = {
  title:"",
  resume:"",
  description:"",
  sections: []
}
export const initialDataAdvertising = {
  title:"",
  summary:"",
  aside:"",
  footer:"",
  image:"",
  sections: []
}

export const getFilteredFieldNames = <T extends object>(formData: T) => {
  const formFieldNames = Object.keys(formData) as (keyof T)[];
  const filteredFieldNames = formFieldNames.filter(
    (fieldName) => fieldName !== "sections"
  );
  return filteredFieldNames;
};