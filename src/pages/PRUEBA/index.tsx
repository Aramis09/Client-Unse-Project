import LoadImages from "../../components/loadImage/loadImage";
import { useAuth0 } from "@auth0/auth0-react";
import UploadWidget from "@/components/uploadWidget/uploadWidget";
import GoEdit from "@/components/goEdit/goEdit";

export default function index() {
  const { loginWithPopup } = useAuth0();
  return (
    <div>
      <button onClick={() => loginWithPopup()}>Inicio session</button>
      <LoadImages />
      {/* <UploadWidget addImageToCarrousel={[]}/> */}
      <GoEdit whereRedirect="" />
    </div>
  );
}
