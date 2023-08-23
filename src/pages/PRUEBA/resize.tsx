import { CloudinaryContext, Image, Transformation } from "cloudinary-react";

export default function Images() {
  return (
    <div>
      <CloudinaryContext cloudName="demo">
        <Image publicId="basketball_in_net.jpg">
          <Transformation width="200" height="200" crop="limit" />
        </Image>
        <br />
        <Image publicId="nolyhwmclpbiyvbwcdhv">
          <Transformation width="200" height="200" crop="fill" />
        </Image>
        <Image publicId="butterfly.jpg">
          <Transformation gravity="face" width="200" height="200" crop="fill" />
        </Image>
      </CloudinaryContext>
    </div>
  );
}
