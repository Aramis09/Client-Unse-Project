import Link from "next/link";
import styles from "./network.module.scss";

const Network = ({
  title,
  name,
  linkedin,
  linkIn,
}: {
  title: string;
  name: string;
  linkedin: string;
  linkIn: string;
}) => (
  <Link href={linkIn} target="_blank">
    <div className={styles.container}>
      <h5>{title}</h5>
      <h6>{name}</h6>
      <a href={linkIn} target="_blank">
        {linkedin}
      </a>
    </div>
  </Link>
);

export default Network;
