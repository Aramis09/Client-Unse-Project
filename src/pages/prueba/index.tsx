import Carrousel from "@/components/carrousel/carrousel";
import LoadImages from "../../components/loadImage/loadImage";
import { useAuth0 } from "@auth0/auth0-react";
import UploadWidget from "@/components/uploadWidget/uploadWidget";
import { Image } from "@cloudinary/react";

export default function index() {
  const { loginWithPopup } = useAuth0();
  return (
    <div>
      <button onClick={() => loginWithPopup()}>Inicio session</button>
      <LoadImages />
      <UploadWidget />
    </div>
  );
}

const ImageComponent = () => {
  const handleDelete = async (publicId: string) => {
    try {
      const response = await fetch(`/api/delete-image?public_id=${publicId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Imagen eliminada con éxito.");
        // Actualizar el estado de tu componente o hacer cualquier otra acción necesaria.
      } else {
        console.error("Error al eliminar la imagen.");
      }
    } catch (error) {
      console.error("Error al eliminar la imagen:", error);
    }
  };

  return (
    <div>
      {/* Aquí muestra la imagen */}
      <Image
        cloudName="TU_CLOUD_NAME"
        publicId="PUBLIC_ID_DE_LA_IMAGEN"
        width="200"
        height="200"
        crop="fill"
      />
      <button onClick={() => handleDelete("PUBLIC_ID_DE_LA_IMAGEN")}>
        Eliminar imagen
      </button>
    </div>
  );
};
