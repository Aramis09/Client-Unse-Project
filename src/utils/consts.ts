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





export const ICON_SAVE_DATA_CARROUSEL = "https://res.cloudinary.com/dynnwv7md/image/upload/v1691506691/save_nvyiex.png"
export const ICON_EDIT =
    "https://res.cloudinary.com/dynnwv7md/image/upload/v1691505197/edit-image_wxxstt.png";
export const ICON_CREATE =
    "https://res.cloudinary.com/dynnwv7md/image/upload/v1691970445/2524748_add_add_photo_plus_upload_icon_oi2lt1.png";

export const ICON_INSTAGRAM =
  "https://res.cloudinary.com/dynnwv7md/image/upload/v1692022920/instagram_criaqa.png";
export const ICON_FACULTY  = "https://res.cloudinary.com/dynnwv7md/image/upload/v1692023407/iconoFacultad_lhba8n.png"
export const ICON_UNIVERSITY = "https://res.cloudinary.com/dzqxa7jfj/image/upload/v1692026296/samples/assets%20for%20web%20FCEYT/iconoUnse_zqgpwq.png"
export const ICON_ARROW_LEFT =
  "https://res.cloudinary.com/dzqxa7jfj/image/upload/v1692026296/samples/assets%20for%20web%20FCEYT/arrowL_c96iax.png";
export const ICON_ARROW_RIGHT = "https://res.cloudinary.com/dzqxa7jfj/image/upload/v1692026296/samples/assets%20for%20web%20FCEYT/arrowR_jv5sxe.png";

export const LOGO = "https://res.cloudinary.com/dzqxa7jfj/image/upload/v1692026899/samples/assets%20for%20web%20FCEYT/nvfsrfic2merg0fjxli7.png"
export const ARROW_PAGINATE_L =
  "https://res.cloudinary.com/dynnwv7md/image/upload/v1691869581/icons8-back-to-96_gxejsr.png";
export const ARROW_PAGINATE_R =
  "https://res.cloudinary.com/dynnwv7md/image/upload/v1691869581/icons8-next-page-96_vsud1m.png";