import { ICON_ADD_SECTION } from "@/utils/consts";
import Link from "next/link";
import React from "react";
interface P {
  styles: string;
  idOwner: number;
  typeOwner: string;
}
export default function ButtonAddSection({ styles, idOwner, typeOwner }: P) {
  return (
    <Link
      className={styles}
      href={`/createOnlySection?idOwner=${idOwner}&typeOwner=${typeOwner}`}
    >
      <img src={ICON_ADD_SECTION} alt="iconAdd" />
    </Link>
  );
}
