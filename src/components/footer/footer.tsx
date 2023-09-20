import Link from "next/link";
import styles from "./footer.module.scss";
import {
  ICON_EMAIL,
  ICON_FACULTY,
  ICON_INSTAGRAM,
  ICON_UNIVERSITY,
  URL_TO_GET_ABOUT,
} from "@/utils/consts";
import useMakeRequest from "@/customHooks/makeRequest";
import { ResponseGetAbout } from "@/types/interfaces";
import { ServiceParams } from "@/types/requestTypes";
const initHook: ServiceParams<null, null> = {
  url: URL_TO_GET_ABOUT,
  body: null,
  querys: null,
  method: "GET",
};

export default function Footer() {
  const { data: aboutData } = useMakeRequest<null, null, ResponseGetAbout>(
    initHook
  );
  return (
    <section className={styles.container}>
      <section className={styles.miniAbout}>
        <Link href="/about">
          <h4 className={styles.titles}>Acerca de nosotros</h4>
          <p>
            {aboutData &&
              aboutData.data &&
              aboutData.data.textPartOne.slice(0, 221)}
            ...
          </p>
        </Link>
      </section>

      <section>
        <h4 className={styles.titles}>Redes oficiales</h4>
        <ul className={styles.networks}>
          <li className={styles.liContact}>
            <img src={ICON_EMAIL} alt="contactos" />
            <Link href="/contacts" target="_blank">
              Contactos
            </Link>
          </li>
          <li className={styles.liContact}>
            <img src={ICON_UNIVERSITY} alt="unse" />
            <a href="https://www.unse.edu.ar" target="_blank">
              Universidad
            </a>
          </li>
          <li className={styles.liContact}>
            <img src={ICON_FACULTY} alt="fceyt" />
            <a href="https://fce.unse.edu.ar" target="_blank">
              Facultad
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}
