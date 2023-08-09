import { useEffect, useRef, useState } from "react";

interface ImageProps {
  handleImageUrl: (data: string) => void; //modificado Aramis
  // valueEvent:any //modificado Aramis
}

export default function UploadWidget({ handleImageUrl }: ImageProps) {
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
        // setLatestResult(result); // Update the latest result
        if (result.event === "success") {
          handleImageUrl(result.info.public_id);
        }
      }
    );
  }, []);

  return <button onClick={() => widgetRef.current.open()}>aqui</button>;
}
