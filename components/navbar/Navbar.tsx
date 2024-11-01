import React from "react";
import styles from "./navbar.module.css";
import Logo from "../logo";
const navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <Logo />
      </a>
      <div className={styles.linkContainer}>
        <a href="/">Home</a>
        <a href="/">Pricing</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  );
};

export default navbar;
