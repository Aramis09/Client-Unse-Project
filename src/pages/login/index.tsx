import { useCallback, useState } from "react";
import styles from "../../styles/login.module.scss";

export default function Login() {
  const [credentials, setCredentials] = useState({});
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const fields = Object.fromEntries(new window.FormData(form));
  };

  return (
    <section className={styles.container}>
      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <h4>Ingrese las credenciales requeridas</h4>
        <input
          type="password"
          name="user"
          placeholder="User"
          required
          data-testid="email-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          data-testid="email-input"
        />
        <button type="submit" name="login">
          Send
        </button>
      </form>
    </section>
  );
}

// const handleInputs = (evt: React.ChangeEvent<HTMLInputElement>) => {
//   const value = evt.target.value;
//   Object.entries()
// };
export function SingUp() {
  const [creadential, setCreadential] = useState({});

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const fields = Object.fromEntries(new window.FormData(form));
      console.log(fields);
    },
    []
  );

  return (
    <section className={styles.container}>
      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <h4>Ingrese las credenciales requeridas</h4>
        <input type="password" onChange={(evt) => {}} />
        <input type="password" />
        <button type="submit" name="login">
          send
        </button>
      </form>
    </section>
  );
}
