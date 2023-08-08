import { useEffect, useRef, useState } from "react";

interface ImageProps {
  handleImageUrl: (data: string) => void;
}

export default function UploadWidget({ handleImageUrl }: ImageProps) {
  const cloudinaryRef: any = useRef();
  const widgetRef: any = useRef();
  const [latestResult, setLatestResult] = useState<any>(null);

  useEffect(() => {
    // @ts-ignore
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dynnwv7md",
        uploadPreset: "tyz13h75",
      },
      function (err: any, result: any) {
        setLatestResult(result); // Update the latest result
      }
    );
  }, []);

  // useEffect(() => {
  //   // Check if there is a latest result and if it is "success"
  //   if (latestResult && latestResult.event === "success") {
  //     handleImageUrl(latestResult.info.public_id);
  //   }
  // }, []);

  return <button onClick={() => widgetRef.current.open()}>aqui</button>;
}
