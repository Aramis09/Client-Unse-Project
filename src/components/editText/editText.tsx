import styles from "./editText.module.scss";
interface P {
  newValue: string;
  setNewValue: (e: string) => void;
}
export const EditText = ({ newValue, setNewValue }: P) => (
  <section className={styles.containerTextArea}>
    <textarea
      placeholder="Escriba su nuevo texto"
      name="newText"
      value={newValue}
      onChange={(evt) => setNewValue(evt.target.value)}
    />
  </section>
);
