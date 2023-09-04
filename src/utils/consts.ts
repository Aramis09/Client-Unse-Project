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

export const ICON_UPLOAD_IMAGE =
  "https://res.cloudinary.com/dzqxa7jfj/image/upload/v1693011952/samples/assets%20for%20web%20FCEYT/image_fwpzve.png";
export const ICON_EDIT_ENTITIES =
  "https://res.cloudinary.com/dzqxa7jfj/image/upload/v1693011952/samples/assets%20for%20web%20FCEYT/edit_sbjnxr.png";
export const ICON_SAVE_DATA_CARROUSEL =
  "https://res.cloudinary.com/dynnwv7md/image/upload/v1691506691/save_nvyiex.png";
export const ICON_EDIT =
  "https://res.cloudinary.com/dynnwv7md/image/upload/v1691505197/edit-image_wxxstt.png";
export const ICON_CREATE =
  "https://res.cloudinary.com/dynnwv7md/image/upload/v1691970445/2524748_add_add_photo_plus_upload_icon_oi2lt1.png";

export const ICON_INSTAGRAM =
  "https://res.cloudinary.com/dynnwv7md/image/upload/v1692022920/instagram_criaqa.png";
export const ICON_FACULTY =
  "https://res.cloudinary.com/dynnwv7md/image/upload/v1692023407/iconoFacultad_lhba8n.png";
export const ICON_UNIVERSITY =
  "https://res.cloudinary.com/dzqxa7jfj/image/upload/v1692026296/samples/assets%20for%20web%20FCEYT/iconoUnse_zqgpwq.png";
export const ICON_ARROW_LEFT =
  "https://res.cloudinary.com/dzqxa7jfj/image/upload/v1692026296/samples/assets%20for%20web%20FCEYT/arrowL_c96iax.png";
export const ICON_ARROW_RIGHT =
  "https://res.cloudinary.com/dzqxa7jfj/image/upload/v1692026296/samples/assets%20for%20web%20FCEYT/arrowR_jv5sxe.png";

export const LOGO =
  "https://res.cloudinary.com/dzqxa7jfj/image/upload/v1692026899/samples/assets%20for%20web%20FCEYT/nvfsrfic2merg0fjxli7.png";
export const ARROW_PAGINATE_L =
  "https://res.cloudinary.com/dynnwv7md/image/upload/v1691869581/icons8-back-to-96_gxejsr.png";
export const ARROW_PAGINATE_R =
  "https://res.cloudinary.com/dynnwv7md/image/upload/v1691869581/icons8-next-page-96_vsud1m.png";


// export const NEXT_PUBLIC_DOMAIN_API_REST = "https://servidor-unse.onrender.com"  
export const NEXT_PUBLIC_DOMAIN_API_REST = "http://localhost:3001"   
// export const NEXT_PUBLIC_DOMAIN_API_REST = "http://192.168.0.26:3001"   


export const URL_GET_ADVERTISING = `${NEXT_PUBLIC_DOMAIN_API_REST}/advertising/getAdversiting/`;
export const URL_GET_CARROUSEL_DETAIL = `${NEXT_PUBLIC_DOMAIN_API_REST}/carrousel/getDetail`;

export const URL_GET_ORIENTATIONS = `${NEXT_PUBLIC_DOMAIN_API_REST}/orientation/getOrientations`;

export const URL_GET_SUB_SERVICE = `${NEXT_PUBLIC_DOMAIN_API_REST}/subServices/getSubservices`;

export const URL_EDIT_CARROUSEL = `${NEXT_PUBLIC_DOMAIN_API_REST}/carrousel/edit`;
export const URL_CREATE_CARROUSEL = `${NEXT_PUBLIC_DOMAIN_API_REST}/carrousel/create`;

export const URL_EDIT_SECTION = `${NEXT_PUBLIC_DOMAIN_API_REST}/sections/editSection`;

export const URL_EDIT_ADVERTISING = `${NEXT_PUBLIC_DOMAIN_API_REST}/advertising/editAdvertising`;

export const URL_EDIT_SERVICE = `${NEXT_PUBLIC_DOMAIN_API_REST}/services/editService`;
export const URL_EDIT_SUB_SERVICE = `${NEXT_PUBLIC_DOMAIN_API_REST}/subServices/editSubService`;
export const URL_DELETE_IMAGE = `${NEXT_PUBLIC_DOMAIN_API_REST}/imageManager/delete`;
export const URL_VERIFY_TOKEN = `${NEXT_PUBLIC_DOMAIN_API_REST}/verificationToken`;
export const URL_LOGIN = `${NEXT_PUBLIC_DOMAIN_API_REST}/login`;

export const URL_GET_DETAIL_SERVICE = `${NEXT_PUBLIC_DOMAIN_API_REST}/services/getServices/detail`;
