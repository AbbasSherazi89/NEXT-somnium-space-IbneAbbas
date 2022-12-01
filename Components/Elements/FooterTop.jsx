import React from "react";
import styles from "../../styles/FooterTop.module.scss";
import {FaTelegramPlane} from 'react-icons/fa'
import {BsInstagram,BsYoutube, BsLinkedin} from 'react-icons/bs'
import {AiFillMediumSquare} from 'react-icons/ai'
const FooterTop = () => {
  return (
    <>
      <section className={styles.main}>
        <div className="container">
          <div className="row align-item-center justify-content-center">
            <div className="col-md-10 d-flex align-item-center justify-content-between">
              <FaTelegramPlane size={80}/>
              <BsInstagram size={80}/>
              <BsYoutube size={80}/>
              <AiFillMediumSquare size={80}/>
              <BsLinkedin size={80}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterTop;
