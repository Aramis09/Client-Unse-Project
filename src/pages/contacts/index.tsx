import styles from "./contacts.module.scss";
import Network from "./dev/network";

export default function Contacts() {
  return (
    <section className={styles.container}>
      <article className={styles.article}>
        <h4>Medios para solicitar servicio</h4>
        <ul>
          <li> www.google.com</li>
          <li> www.google.com</li>
          <li> www.google.com</li>
          <li> www.google.com</li>
        </ul>
      </article>
      <article className={styles.article}>
        <h4>Redes de docentes que participan</h4>
        <ul>
          <li>
            {" "}
            <Network
              title={"Docente de fisica"}
              name="Claudia Anriquez"
              linkedin="instagram/claudiabanriquez"
              linkIn="https://www.instagram.com/claudiabanriquez/"
            />
          </li>
        </ul>
      </article>
      <article className={styles.article}>
        <h4>Desarrolladores de la pagina</h4>
        <ul>
          <li>
            <Network
              title={"Desarrollador a cargo"}
              name="Aramis Jaime"
              linkedin="in/AramisDev"
              linkIn="https://www.linkedin.com/in/AramisDev/"
            />
          </li>
          <li>
            <Network
              title={"Desarrollador ayudante"}
              name="Gabriel Rouco"
              linkedin="in/GabrielRouco"
              linkIn="https://www.linkedin.com/in/ricardo-gabriel-rouco/"
            />
          </li>
        </ul>
      </article>
    </section>
  );
}
