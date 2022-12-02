import React from "react";
import styles from "../../styles/Header.module.scss";
import { ImMenu } from "react-icons/im";
import { FaDiscord } from "react-icons/fa";
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
const Header = () => {
  return (
    <>
      <div className={styles.navbarbg}>
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img src="assets/space logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <ImMenu size={30} color="#fff" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={styles.navItem}>BlockChain</li>
              <li className={styles.navItem}>Mechanics</li>
              <li className={styles.navItem}>Partners</li>
              <li className={styles.navItem}>Events</li>
            </ul>
            <div className="mr-auto">
              <button className={styles.navBtn}>Explore Somnium Map</button>
              <button className={styles.navBtn2}>Marketplace</button>
            </div>
          </div>
        </nav>
        {/* <nav>
          <div className={styles.navIcons}>
            <FaDiscord size={20} />
            <BsFacebook size={20} />
          </div>
        </nav> */}
      </div>
    </>
  );
};

export default Header;
