import { useState } from "react";
import Menu from "../Menu";
import styles from "./Header.module.scss";
import Logo from "./logo.svg";

export default function Header() {
  const [isActive, setActive] = useState(false);

  const toggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className={styles.nav}>
      <img
        className={styles.imageLogo}
        src={Logo}
        alt="LogoTipo"
      />
      <button
        className={styles.menuBurger}
        onClick={ toggle }
      >
        &#9776;
      </button>
      <div
        className={`
        ${styles.menu} ${isActive ? styles.active : ""} 
        `}>
        <Menu />
      </div>
    </nav>
  );
}