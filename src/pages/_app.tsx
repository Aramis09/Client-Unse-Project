import NavBar from "@/components/navBar/navBar";
import "@/styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import getConfig from "../utils/config";
import Footer from "@/components/footer/footer";
const config = getConfig();
const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  authorizationParams: {
    redirect_uri: "http://localhost:3000/",
  },
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Auth0Provider {...providerConfig}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </Auth0Provider>
    </>
  );
}
