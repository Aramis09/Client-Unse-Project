import Link from "next/link";
import styles from "./network.module.scss";

const Network = ({
  title,
  name,
  linkedin,
  linkIn,
  email,
}: {
  title: string;
  name: string;
  linkedin?: string;
  linkIn?: string;
  email?: string;
}) => {
  const handleClicEmail = (email: string | undefined) => {
    email && navigator.clipboard.writeText(email);
    alert("Email copiado al portapapeles");
  };
  return (
    <div className={styles.container}>
      <h5>{title}</h5>
      <h6>{name}</h6>
      {(email && <p onClick={() => handleClicEmail(email)}>{email}</p>) || (
        <></>
      )}
      <a href={linkIn} target="_blank">
        {linkedin}
      </a>
    </div>
  );
};

export default Network;
