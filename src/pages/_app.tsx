import NavBar from "@/components/navBar/navBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/footer";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import variantsFramerMotion from "@/framerMotion/transitionsVars";
import { ReactNode } from "react";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <NavBar />

      <Transition children={<Component {...pageProps} />} />

      <Footer />
    </>
  );
}

export default dynamic(() => Promise.resolve(App), { ssr: false });
interface Props {
  children: ReactNode;
}
const Transition: React.FC<Props> = ({ children }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={location.pathname}
      variants={variantsFramerMotion}
      initial={variantsFramerMotion.initial}
      animate={variantsFramerMotion.animate}
      transition={{
        ease: "linear",
        duration: 0.2,
        x: { duration: 0.1, type: "spring" },
      }}
      exit={variantsFramerMotion.extit}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
