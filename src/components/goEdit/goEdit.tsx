import { getCookie } from "@/utils/actionCookie";
import Link from "next/link";
import styles from "./goEdit.module.scss";
import dynamic from "next/dynamic";
import { verificationToken } from "@/helpers/verifyToken";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
interface P {
  whereRedirect: string;
  location: string;
}
export function GoEdit({ whereRedirect, location }: P) {
  const router = useRouter();

  const [statusToken, setStatusToken] = useState<boolean>(false);
  const iconEdit =
    "https://res.cloudinary.com/dynnwv7md/image/upload/v1691505197/edit-image_wxxstt.png";

  useEffect(() => {
    verificationToken().then((res) => setStatusToken(res.acces));
  }, []);
  return (
    <>
      {statusToken ? (
        <Link
          href={`${whereRedirect}?location=${location}&idAdvertising=${router.query["idAdvertising"]}`}
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

export default dynamic(() => Promise.resolve(GoEdit), { ssr: false });
