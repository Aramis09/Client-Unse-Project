import NavBar from "@/components/navBar/navBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/footer";
import dynamic from "next/dynamic";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default dynamic(() => Promise.resolve(App), { ssr: false });
