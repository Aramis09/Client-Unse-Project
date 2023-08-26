import Link from "next/link";
import editStyles from "./goEdit.module.scss";
import dynamic from "next/dynamic";
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
          className={stylesChosen && stylesChosen.container}
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
