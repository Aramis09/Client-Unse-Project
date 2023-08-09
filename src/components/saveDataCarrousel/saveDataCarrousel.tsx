import { sendEditCarrouselHelper } from "@/helpers/ediCarrouselHelpers";
import styles from "./saveDataCarrousel.module.scss";
import { useState } from "react";
import { StatusSend, messajes } from "@/utils/consts";
interface P {
  images: string[];
  location: string;
  idAdvertising: string | null;
}

const SaveDataCarrousel = ({ images, location, idAdvertising }: P) => {
  const [statusSend, setStatusSend] = useState<StatusSend>(messajes.noSend);
  const url =
    "https://res.cloudinary.com/dynnwv7md/image/upload/v1691506691/save_nvyiex.png";
  const hanlderSendData = async () => {
    const process = await sendEditCarrouselHelper({
      images,
      location,
      idAdvertising,
    });
    if (process.error) return setStatusSend(messajes.SendFail);
    setStatusSend(messajes.SendSuccessful);
  };
  return (
    <>
      <img
        src={url}
        alt="iconSave"
        onClick={() => hanlderSendData()}
        className={styles.iconSave}
      />
      <p style={statusSend}>{statusSend.messaje}</p>
    </>
  );
};

export default SaveDataCarrousel;
