import Carrousel from "@/components/carrousel/carrousel";
import LoadImages from "../../components/loadImage/loadImage";
import { useAuth0 } from "@auth0/auth0-react";
import UploadWidget from "@/components/uploadWidget/uploadWidget";
import GoEdit from "@/components/goEdit/goEdit";
import ShowImage from "@/components/showImage/showImage";
import Images from "./resize";

export default function index() {
  return (
    <div>
      <Carrousel />
      <LoadImages />
      {/* <UploadWidget addImageToCarrousel={[]}/> */}
      <GoEdit whereRedirect="" action="edit" location="" />
      <ShowImage
        idImage={"WhatsApp_Image_2023-07-22_at_7.31.35_PM_vdesi0"}
        type="auto"
      />
      <Images />
    </div>
  );
}
