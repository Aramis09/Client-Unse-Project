import { useStylesClick } from "@/customHooks/useStylesClick";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
interface P {
  styles: {
    readonly [key: string]: string;
  };
}

export default function OptionMenuCreateNew({ styles }: P) {
  const { style: styleCreate, changeStyles: changeStylesCreated } =
    useStylesClick({
      styles: styles,
      first: "listHiden",
      second: "listShow",
    });

  return (
    <div className={styles.containerList}>
      <h4 onClick={changeStylesCreated}>Subir algo nuevo</h4>
      <div onClick={changeStylesCreated}>
        <MenuCreate style={styleCreate} />
      </div>
    </div>
  );
}

const MenuCreate = ({ style }: { style: string }) => (
  <ul className={style}>
    <Link href="/addNew/service">
      <li>Subir nuevo servicio</li>
    </Link>
    <Link href="/addNew/subservice">
      <li>Subir nueva actividad de un servicio</li>
    </Link>
    <Link href="/addNew/advertising">
      <li>Subir nueva publicidad</li>
    </Link>
  </ul>
);
