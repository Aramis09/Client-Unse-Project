import RenderAdvertising from "@/components/renderThumbnails/renderThumbnail";
import Head from "next/head";
import styes from "../styles/index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styes.container}>
        <div className={styes.conatinerImage}>
          <img
            src="https://res.cloudinary.com/dynnwv7md/image/upload/v1689013864/WhatsApp_Image_2023-06-16_at_10.57.29_PM_avnxpe.jpg"
            alt="carrousel"
          />
        </div>
        <RenderAdvertising />
      </main>
    </>
  );
}
