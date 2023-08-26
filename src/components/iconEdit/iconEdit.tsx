import useVerifyToken from "@/customHooks/useVerifyAdmin";
import { ICON_EDIT_ENTITIES } from "@/utils/consts";
import Link from "next/link";

export interface PropToEdit {
  styles: string;
  id: number;
  typeEdit: "text" | "image";
  property: string;
  entitie: "advertising" | "service" | "subService" | "section";
  oldValue?: string;
}
export default function IconEdit({
  id,
  typeEdit,
  property,
  styles,
  entitie,
  oldValue,
}: PropToEdit) {
  const { statusToken, router } = useVerifyToken();
  return statusToken ? (
    <Link
      href={`/edit?typeEdit=${typeEdit}&property=${property}&id=${id}&entitie=${entitie}&oldValue=${oldValue}`}
    >
      <img src={ICON_EDIT_ENTITIES} alt="iconEdit" className={styles} />
    </Link>
  ) : (
    <></>
  );
}
