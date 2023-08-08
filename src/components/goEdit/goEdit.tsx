import { getCookie } from "@/utils/actionCookie";
import Link from "next/link";
import styles from "./goEdit.module.scss";
interface P {
  whereRedirect: string;
  location: string;
}
export default function GoEdit({ whereRedirect, location }: P) {
  const iconEdit =
    "https://res.cloudinary.com/dynnwv7md/image/upload/v1691505197/edit-image_wxxstt.png";
  return (
    <>
      {getCookie({
        nameCookie: "messiEntroAJugar",
      }).foundCookie ? (
        <Link
          href={`${whereRedirect}?location=${location}`}
          className={styles.container}
        >
          <img src={iconEdit} alt="iconEdit" />
        </Link>
      ) : (
        <></>
      )}
    </>
  );
}
