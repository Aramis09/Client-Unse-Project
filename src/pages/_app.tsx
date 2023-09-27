import NavBar from "@/components/navBar/navBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/footer";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import variantsFramerMotion from "@/framerMotion/transitionsVars";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          variants={variantsFramerMotion}
          initial={variantsFramerMotion.initial}
          animate={variantsFramerMotion.animate}
          transition={{ ease: "linear", duration: 0.2, x: { duration: 0.2 } }}
          exit={variantsFramerMotion.extit}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default dynamic(() => Promise.resolve(App), { ssr: false });
