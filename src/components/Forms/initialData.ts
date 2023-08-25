import { DataAdvertising, DataService, DataSubService } from "@/types/interfaces";

export const initialDataService: DataService = {
  title: "",
  orientation: "",
  sections: [],
}
export const initialDataSubService: DataSubService= {
  title:"",
  resume:"",
  description:"",
  sections: [],
}
export const initialDataAdvertising: DataAdvertising= {
  title:"",
  summary:"",
  aside:"",
  footer:"",
  image: "",
  sections: []
}

export const getFilteredFieldNames = <T extends object>(formData: T) => {
  const formFieldNames = Object.keys(formData) as (keyof T)[];
  let filteredFieldNames = formFieldNames.filter(
    (fieldName) => fieldName !== "sections"
  );
  filteredFieldNames.filter(fieldName => {
    fieldName !== "description"
  })
  return filteredFieldNames;
};
