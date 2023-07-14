import {cld} from "./cloudinaryConfig";
import { AdvancedImage } from "@cloudinary/react";

function ShowImage() {
  const oneImage = cld.image('IMG_6677_u7u6jz.jpg').toURL()
  const oneImageLQ = cld.image('IMG_6677_u7u6jz.jpg').quality('auto:low').format('auto').toURL()
  console.log('orig',oneImage)
  console.log('lq',oneImageLQ)
  return (
    <div>
      {/* <AdvancedImage cldImg={oneImage}> */}
      {/* <Transformation quality="18" fetchFormat="auto" /> */}
      {/* <Transformation height="1000" quality="20" width="1000" crop="crop" /> */}
      {/* </AdvancedImage> */}
    </div>
  )
}

export default ShowImage

