import { useEffect, useRef } from "react";
export default function UploadWidget() {
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
