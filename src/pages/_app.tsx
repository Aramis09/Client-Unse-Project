import NavBar from "@/components/navBar/navBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
