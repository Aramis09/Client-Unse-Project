import { useState } from "react";
import styles from "../../styles/login.module.scss";
import { sendCradentialsHelper } from "@/helpers/loginHelpers";
import useRedirect from "@/customHooks/useRedirect";
export interface Credentials {
  [k: string]: FormDataEntryValue;
}

export default function Login() {
  const [statusSend, setStatusSend] = useState<boolean>(false);

  useRedirect({ routeToRedirect: "/", dependenci: statusSend });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const fields = Object.fromEntries(new window.FormData(form));
    const response = await sendCradentialsHelper(fields);
    setStatusSend(!response.error);
  };
  console.log(statusSend);

  return (
    <section className={styles.container}>
      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <h4>Ingrese las credenciales requeridas</h4>
        <input
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
        {statusSend && <p className={styles.error}>incorrect credentials</p>}
      </form>
    </section>
  );
}
