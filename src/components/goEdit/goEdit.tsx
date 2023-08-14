import Link from "next/link";
import editStyles from "./goEdit.module.scss";
import dynamic from "next/dynamic";
import { verificationToken } from "@/helpers/verifyToken";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { iconCreate, iconEdit } from "@/utils/consts";
import createSteles from "./goCreate.module.scss";
import useChangeStyles from "@/customHooks/useChangeStyles";
interface P {
  whereRedirect: string;
  location: string;
  action: "create" | "edit";
}
export function GoEdit({ whereRedirect, location, action }: P) {
  const router = useRouter();

  const [statusToken, setStatusToken] = useState<boolean>(false);
  const condition = action === "edit";
  const { stylesChosen } = useChangeStyles({
    condition,
    trueStyle: editStyles,
    falseStyle: createSteles,
  });

  useEffect(() => {
    verificationToken().then((res) => setStatusToken(res.acces));
  }, []);
  return (
    <>
      {statusToken ? (
        <Link
          href={`${whereRedirect}?location=${location}&idAdvertising=${
            router.query["idAdvertising"]
          }&action=${condition ? "edit" : "create"}`}
          className={stylesChosen.container}
        >
          <img src={condition ? iconEdit : iconCreate} alt="iconToAction" />
        </Link>
      ) : (
        <></>
      )}
    </>
  );
}

export default dynamic(() => Promise.resolve(GoEdit), { ssr: false });
