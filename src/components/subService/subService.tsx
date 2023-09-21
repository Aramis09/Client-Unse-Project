import { SubServiceTypes } from "@/types/interfaces";
import Link from "next/link";
import styles from "./subService.module.scss";
import IconEdit from "../iconEdit/iconEdit";

interface P {
  subServiceProps: SubServiceTypes;
}

export default function SubService({ subServiceProps }: P) {
  const { id, title, resume } = subServiceProps;

  return (
    <Link href={`/subServiceDetail/${id}`} className={styles.container}>
      <span className={styles.title}>{title}</span>

      <IconEdit
        id={subServiceProps.id}
        property="resume"
        styles={styles.iconEdit}
        typeEdit="text"
        entitie="subService"
        oldValue={String(resume)}
      />
      <span className={styles.resume}>{resume}</span>
    </Link>
  );
}
