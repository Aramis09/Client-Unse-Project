import { deleteCookie } from "@/utils/actionCookie";
import styles from "./isLofedIn.module.scss";
import Link from "next/link";
import useVerifyToken from "@/customHooks/useVerifyAdmin";

export default function IsLogedIn({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { statusToken } = useVerifyToken();

  return (
    <div className={styles.container}>
      {statusToken ? (
        <>
          <h4
            onClick={() => {
              deleteCookie({ nameCookie: "messiEntroAJugar" });
              window.location.reload();
            }}
          >
            Cerrar sesion
          </h4>
          {children}
        </>
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
