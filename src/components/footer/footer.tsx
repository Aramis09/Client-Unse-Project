import Link from "next/link";
import styles from "./footer.module.scss";
import { ICON_FACULTY, ICON_INSTAGRAM, ICON_UNIVERSITY } from "@/utils/consts";

export default function Footer() {
  return (
    <section className={styles.container}>
      <section className={styles.miniAbout}>
        <Link href="/about">
          <h4 className={styles.titles}>Acerca de nosotros</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            ratione, voluptas, deserunt, quae nemo laudantium nostrum sapiente
            et delectus possimus molestias maiores aut! Perferendis ut
            voluptatibus modi! Omnis, quidem hic.
          </p>
        </Link>
      </section>
      <section>
        <h4 className={styles.titles}>Seguinos</h4>
        <ul className={styles.networks}>
          <li className={styles.liContact}>
            <img src={ICON_INSTAGRAM} alt="instagram" />
            <a href="">Instagram</a>
          </li>
          <li className={styles.liContact}>
            <img src={ICON_UNIVERSITY} alt="unse" />
            <a href="">Universidad</a>
          </li>
          <li className={styles.liContact}>
            <img src={ICON_FACULTY} alt="fceyt" />
            <a href="">Facultad</a>
          </li>
        </ul>
      </section>
    </section>
  );
}
