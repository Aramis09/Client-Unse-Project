import { sendEditCarrouselHelper } from "@/helpers/ediCarrouselHelpers";
import styles from "./saveDataCarrousel.module.scss";
import { useState } from "react";
import { StatusSend, ICON_SAVE_DATA_CARROUSEL, messajes } from "@/utils/consts";
interface P {
  images: string[];
  location: string;
  idAdvertising: string | null;
  action: string;
}

const SaveDataCarrousel = ({ images, location, idAdvertising, action }: P) => {
  const [statusSend, setStatusSend] = useState<StatusSend>(messajes.noSend);
  const condition = action === "edit";
  const actionSend = condition ? "edit" : "create";
  const hanlderSendData = async () => {
    const process = await sendEditCarrouselHelper({
      images,
      location,
      idAdvertising,
      action: actionSend,
    });
    if (process.error) return setStatusSend(messajes.SendFail);
    setStatusSend(messajes.SendSuccessful);
  };
  return (
    <>
      <img
        src={ICON_SAVE_DATA_CARROUSEL}
        alt="iconSave"
        onClick={() => hanlderSendData()}
        className={styles.iconSave}
      />
      <p style={statusSend}>{statusSend.messaje}</p>
    </>
  );
};

export default SaveDataCarrousel;
