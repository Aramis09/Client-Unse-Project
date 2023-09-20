import ShowImage from "@/components/showImage/showImage";
import styles from "./about.module.scss";
import Link from "next/link";
import { URL_TO_GET_ABOUT } from "@/utils/consts";
import { ServiceParams } from "@/types/requestTypes";
import useMakeRequest from "@/customHooks/makeRequest";
import useVerifyToken from "@/customHooks/useVerifyAdmin";
import { ResponseGetAbout } from "@/types/interfaces";
import CreateAbout from "@/components/createAbout/createAbout";
import ShowAboutData from "@/components/showAbout/showAbout";
const initHook: ServiceParams<null, null> = {
  url: URL_TO_GET_ABOUT,
  body: null,
  querys: null,
  method: "GET",
};
export default function About() {
  const { data: aboutData } = useMakeRequest<null, null, ResponseGetAbout>(
    initHook
  );
  return (
    <>
      {aboutData && aboutData.data ? (
        <ShowAboutData aboutData={aboutData} />
      ) : (
        <CreateAbout />
      )}
    </>
  );
}
