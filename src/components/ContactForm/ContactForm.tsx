import styles from "./contactForm.module.scss";

interface props {
  subservice: string;
}

export default function ContactForm({ subservice }: props) {
  return (
    <>
      <div className={styles.container}>
          Si deseas recibir informacion sobre este servicio puedes enviarnos un <br />
          correo a esta direccion con el asunto: {subservice} y <br /> te contactacteremos.
      </div>
    </>
  );
}
