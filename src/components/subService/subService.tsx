import { SubServiceTypes } from "@/types/interfaces";
import Link from "next/link";
import styles from "./subService.module.scss";
import stylesOnView from "./viewPageSubService.module.scss";
import useChangeStyles from "@/customHooks/useChangeStyles";
import { useRouter } from "next/router";

interface P {
  subServiceProps: SubServiceTypes;
}

export default function SubService({ subServiceProps }: P) {
  const router = useRouter();
  const { stylesChosen } = useChangeStyles({
    depedence: router.asPath === "/allSubServices/students",
    falseStyle: styles,
    trueStyle: stylesOnView,
  });
  const { id, title, resume } = subServiceProps;
  return (
    <div>
      <Link href={`/subServiceDetail/${id}`} className={stylesChosen.container}>
        <span className={stylesChosen.title}>{title}</span>
        <span className={stylesChosen.resume}>{resume}</span>
      </Link>
    </div>
  );
}
