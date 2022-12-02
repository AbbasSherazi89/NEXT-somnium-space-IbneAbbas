import React from "react";
import Header from "./Header";
import styles from "../../styles/Header.module.scss";
import { AiFillWindows } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className={styles.navbarMain}>
      <div>
        <Header />
      </div>
      <div className={styles.cornerDiv}>
        <div className={styles.cornerbtn1}>
          <p>
            Download VR Client{" "}
            <AiFillWindows className={styles.windowIcons} size={25} />{" "}
          </p>
        </div>
        <div className={styles.cornerbtn2}>
          <p>
            Join SOMNIUM <span>WEB</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
