import { deleteCookie, getCookie } from "@/utils/actionCookie";
import styles from "./isLofedIn.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { verificationToken } from "@/helpers/verifyToken";

export default function IsLogedIn() {
  const [statusToken, setStatusToken] = useState<boolean>(false);

  useEffect(() => {
    verificationToken().then((res) => setStatusToken(res.acces));
  }, []);

  return (
    <div className={styles.container}>
      {statusToken ? (
        <h4
          onClick={() => {
            deleteCookie({ nameCookie: "messiEntroAJugar" });
            window.location.reload();
          }}
        >
          Desloguear
        </h4>
      ) : (
        <>
          <Link href="/login">
            <h4 style={{ cursor: "pointer" }}>Login</h4>
          </Link>
        </>
      )}
    </div>
  );
}
