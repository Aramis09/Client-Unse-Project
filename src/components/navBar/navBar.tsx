import { useStylesClick } from "@/customHooks/useStylesClick";
import styles from "./navBar.module.scss";
import Link from "next/link";
import IsLogedIn from "../isLogedIn/isLogedIn";
import dynamic from "next/dynamic";
import { LOGO } from "@/utils/consts";
import OptionMenuCreateNew from "./components/optionMenuCreateNew/optionMenuCreateNew";
import OptionMenuGoServices from "./components/optionMenuGoServices/optionMenuGoServices";
import About from "../../pages/about/index";

function NavBar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <img src={LOGO} alt="icon" />
      </Link>
      <div className={styles.menu}>
        {/* !protected options menu */}
        <IsLogedIn>
          <OptionMenuCreateNew styles={styles} />
        </IsLogedIn>
        <OptionMenuGoServices styles={styles} />
        <Link href="/about">
          <h4 className={styles.about}>Quienes somos?</h4>
        </Link>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
