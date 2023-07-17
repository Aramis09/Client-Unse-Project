import { cld } from "../components/showImage/cloudinaryConfig";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { TypeImage } from "../types/interfaces";
const modifications = {
  default: {
    quality: "auto:low",
    format: "auto",
  },
  cover: {
    width: 1700,
    height: 600,
  },
  //!Hay que cambiar
  thumbnail: {
    width: 700,
    height: 900,
  },
};
export const imageFromCloud = (
  publicId: string,
  typeImage: TypeImage
): string => {
  const config = modifications[typeImage];
  const imageUrl = cld
    .image(`${publicId}`)
    .quality(`${modifications.default.quality}`)
    .format(`${modifications.default.format}`)
    .resize(thumbnail().width(config.width).height(config.height)) // Crop the image.
    .toURL();
  return imageUrl;
};
