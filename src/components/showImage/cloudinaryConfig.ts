import {Cloudinary} from "@cloudinary/url-gen";

export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME
  }
});