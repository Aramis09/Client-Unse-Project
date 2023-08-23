import Link from "next/link";
import editStyles from "./goEdit.module.scss";
import dynamic from "next/dynamic";
import { verificationToken } from "@/helpers/verifyToken";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ICON_CREATE, ICON_EDIT } from "@/utils/consts";
import createSteles from "./goCreate.module.scss";
import useChangeStyles from "@/customHooks/useChangeStyles";
import useVerifyToken from "@/customHooks/useVerifyAdmin";
interface P {
  whereRedirect: string;
  location: string;
  action: "create" | "edit";
}
export function GoEdit({ whereRedirect, location, action }: P) {
  const { statusToken, router } = useVerifyToken();
  // const router = useRouter(); //!por las dudas esto no lo borro del todo porque puede ser que no funcione bien
  const conditionToRender = router.pathname !== "/editCarrouselImage";

  const condition = action === "edit";
  const { stylesChosen } = useChangeStyles({
    condition,
    trueStyle: editStyles,
    falseStyle: createSteles,
  });

  return (
    <>
      {statusToken && conditionToRender ? (
        <Link
          href={`${whereRedirect}?location=${location}&idAdvertising=${
            router.query["idAdvertising"]
          }&action=${condition ? "edit" : "create"}`}
          className={stylesChosen.container}
        >
          <img src={condition ? ICON_EDIT : ICON_CREATE} alt="iconToAction" />
        </Link>
      ) : (
        <></>
      )}
    </>
  );
}

export default dynamic(() => Promise.resolve(GoEdit), { ssr: false });
