import { deleteCookie, getCookie } from "@/utils/actionCookie";
import styles from "./isLofedIn.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { verificationToken } from "@/helpers/verifyToken";
import { useRouter } from "next/router";

export default function IsLogedIn() {
  const router = useRouter();
  const [statusToken, setStatusToken] = useState<boolean>(false);

  useEffect(() => {
    verificationToken().then((res) => {
      setStatusToken(res.acces);
    });
  }, [router]);

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
