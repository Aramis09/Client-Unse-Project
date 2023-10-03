import NavBar from "@/components/navBar/navBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer/footer";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import variantsFramerMotion from "@/framerMotion/transitionsVars";
import { ReactNode } from "react";
import { Router } from "next/router";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <NavBar />

      <Transition router={router} children={<Component {...pageProps} />} />

      <Footer />
    </>
  );
}

export default dynamic(() => Promise.resolve(App), { ssr: false });
interface Props {
  children: ReactNode;
  router: Router;
}
const Transition: React.FC<Props> = ({ children, router }) => (
  <AnimatePresence mode="wait">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={router.asPath}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        type: "tween",
      }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
