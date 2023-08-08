import { deleteCookie, getCookie } from "@/utils/actionCookie";
import styles from "./isLofedIn.module.scss";
import Link from "next/link";
import React, { useState } from "react";

export default function IsLogedIn() {
  return (
    <div className={styles.container}>
      {getCookie({
        nameCookie: "messiEntroAJugar",
      }).foundCookie ? (
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
