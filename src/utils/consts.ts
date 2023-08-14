export interface StatusSend {
  display: string;
  color: string;
  messaje: string;
  fontSize: string;
  fontWeight: string;
  marginBottom: string;
}

export let messajes = {
  noSend: {
    display: "none",
    color: "",
    messaje: "",
    fontSize: "2ch",
    fontWeight: "700",
    marginBottom: "20px",
  },
  SendFail: {
    display: "block",
    color: "red",
    messaje:
      "Ocurrio un error, por favor asegurese de mandar por lo menos una imagen",
    fontSize: "2ch",
    fontWeight: "700",
    marginBottom: "20px",
  },
  SendSuccessful: {
    display: "block",
    color: "green",
    messaje: "Carrousel cambiado correctamente",
    fontSize: "2ch",
    fontWeight: "700",
    marginBottom: "20px",
  },
};





export const iconSaveDataCarrousel = "https://res.cloudinary.com/dynnwv7md/image/upload/v1691506691/save_nvyiex.png"
export const iconEdit =
    "https://res.cloudinary.com/dynnwv7md/image/upload/v1691505197/edit-image_wxxstt.png";
export const iconCreate =
    "https://res.cloudinary.com/dynnwv7md/image/upload/v1691970445/2524748_add_add_photo_plus_upload_icon_oi2lt1.png";