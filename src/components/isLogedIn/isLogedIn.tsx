import { deleteCookie, getCookie } from "@/utils/actionCookie";
import styles from "./isLofedIn.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { verificationToken } from "@/helpers/verifyToken";
import { useRouter } from "next/router";
import useVerifyToken from "@/customHooks/useVerifyAdmin";

export default function IsLogedIn() {
  const { statusToken } = useVerifyToken();

  return (
    <div className={styles.container}>
      {statusToken ? (
        <h4
          onClick={() => {
            deleteCookie({ nameCookie: "messiEntroAJugar" });
            window.location.reload();
          }}
        >
          Cerrar sesion
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
