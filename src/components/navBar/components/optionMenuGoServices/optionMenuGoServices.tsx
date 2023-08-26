import useMakeRequest from "@/customHooks/makeRequest";
import { useStylesClick } from "@/customHooks/useStylesClick";
import { OrientationsType } from "@/types/interfaces";
import { ServiceParams } from "@/types/requestTypes";
import { URL_GET_ORIENTATIONS } from "@/utils/consts";
import generateKeys from "@/utils/generateKeys";
import { generateKey } from "crypto";
import Link from "next/link";
interface P {
  styles: {
    readonly [key: string]: string;
  };
}
const initialHook: ServiceParams<null, null> = {
  body: null,
  querys: null,
  method: "GET",
  url: URL_GET_ORIENTATIONS,
};

export default function OptionMenuGoServices({ styles }: P) {
  const { data: orientations } = useMakeRequest<null, null, OrientationsType[]>(
    initialHook
  );
  const { style, changeStyles } = useStylesClick({
    styles: styles,
    first: "listHiden",
    second: "listShow",
  });
  return (
    <div className={styles.containerList}>
      <h4 onClick={changeStyles}>Servicios vigentes</h4>
      <MenuService style={style} orientations={orientations} />
    </div>
  );
}

export const MenuService = ({
  style,
  orientations,
}: {
  style: string;
  orientations?: OrientationsType[];
}) => (
  <ul className={style}>
    {orientations?.map((orientationObj) => (
      <MenuServiceCard key={generateKeys()} orientation={orientationObj} />
    ))}
  </ul>
);

export const MenuServiceCard = ({
  orientation,
}: {
  orientation: OrientationsType;
}) => (
  <Link href={`/serviceDetail/${orientation.name}`}>
    <li>Servicio para {orientation.name}</li>
  </Link>
);
