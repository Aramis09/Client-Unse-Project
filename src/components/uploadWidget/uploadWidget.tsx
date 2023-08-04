import { useEffect, useRef } from "react";
import { DataAdvertisingInForm } from "@/types/interfaces";
interface imageProps {
  handleImageUrl: (data: DataAdvertisingInForm ) => void
}
export default function UploadWidget() {
// imageState: imageProps

  const cloudinaryRef: any = useRef();
  const widgetRef: any = useRef();
  useEffect(() => {
    // @ts-ignore
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dynnwv7md",
        uploadPreset: "tyz13h75",
      },
      function (err: any, result: any) {
        console.log(result);
      }
    );
  }, []);

  return <button onClick={() => widgetRef.current.open()}>aqui</button>;
}
