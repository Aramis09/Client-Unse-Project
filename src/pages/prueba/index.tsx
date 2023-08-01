import Carrousel from "@/components/carrousel/carrousel";
import LoadImages from "../../components/loadImage/loadImage";
import { useAuth0 } from "@auth0/auth0-react";

export default function index() {
  const { loginWithPopup } = useAuth0();
  return (
    <div>
      <Carrousel />
      <button onClick={() => loginWithPopup()}>Inicio session</button>
      <LoadImages />
    </div>
  );
}
