// import { Fragment, useState } from "react";
// import styles from "./Form.module.scss";
// import { getFilteredFieldNames } from "./initialData";
// import UploadWidget from "@/components/uploadWidget/uploadWidget";
// import { DataInForm, optionsForm, errorForm } from "@/types/interfaces";
// import { ServiceParams } from "@/types/requestTypes";
// import { generateRequest } from "@/utils/generateRequest";
// import SectionForm from "@/components/SectionForm/SectionForm";
// import useSelectStateForm from "@/customHooks/useSelectStateForm";
// import ShowImage from "../showImage/showImage";
// import validation from "./validate";
// import CheckBox from "../checkBox/checkBox";

// const initialHook: ServiceParams<null, null> = {
//   url: "https://servidor-unse.onrender.com",
//   body: null,
//   querys: null,
//   method: "POST",
// };

// function Forms({ type }: optionsForm) {
//   const { formData, setFormData, url, initialData } = useSelectStateForm(type);
//   const [errors, setErrors] = useState<errorForm>({
//     message: "",
//     type: "",
//   });
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     formData &&
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//       });
//     setErrors(validation(formData, type));
//   };

//   const handleSectionSave = (sectionData: DataInForm) => {
//     formData &&
//       setFormData({
//         ...formData,
//         sections: [...formData.sections, sectionData],
//       });
//   };

//   const handleOrientationUpdate = (data: string) => {
//     setFormData(
//       (prevFormData) =>
//         prevFormData && {
//           ...prevFormData,
//           orientation: data,
//         }
//     );
//   };

//   const handleImageUrl = (imageData: string) => {
//     setFormData(
//       (prevFormData) =>
//         prevFormData && {
//           ...prevFormData,
//           image: imageData,
//         }
//     );
//     setErrors(validation(formData, type));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(errors);

//     if (!errors.message) {
//       const initialHookPost = {
//         ...initialHook,
//         body: formData,
//         url: url,
//       };
//       generateRequest(initialHookPost);
//       setFormData(initialData);
//     }
//   };

//   const fieldNames = formData && getFilteredFieldNames(formData);
//   return (
//     <>
//       <form onSubmit={handleSubmit} className={styles.container}>
//         <div className="errorMessage">
//           {errors.message ? <p>{errors.message}</p> : null}
//         </div>
//         {formData &&
//           fieldNames &&
//           fieldNames.map((fieldName) =>
//             fieldName.includes("image") ? (
//               formData.image ? (
//                 <div className={styles.imgContainer}>
//                   <ShowImage idImage={formData.image} type="thumbnail" />
//                 </div>
//               ) : (
//                 <>
//                   <label>{fieldName}</label>
//                   <UploadWidget handleImageUrl={handleImageUrl} />
//                 </>
//               )
//             ) : fieldName.includes("orientation") ? (
//               <>
//                 <label htmlFor={fieldName}>{fieldName}</label>
//                 <CheckBox
//                   handleCheck={handleOrientationUpdate}
//                   fieldName={fieldName}
//                 />
//               </>
//             ) : (
//               <div key={fieldName} className={styles.containerFirstsInputs}>
//                 {/* <label htmlFor={fieldName}>{fieldName}</label> */}
//                 <input
//                   type="text"
//                   name={fieldName}
//                   placeholder={fieldName}
//                   value={String(formData[fieldName])}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             )
//           )}
//         <button type="submit">Publicar</button>
//       </form>
//       {formData && (
//         <SectionForm
//           sections={formData.sections}
//           handleSave={handleSectionSave}
//         />
//       )}
//     </>
//   );
// }
