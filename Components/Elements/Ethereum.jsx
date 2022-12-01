import React from "react";
import styles from "../../styles/Ethereum.module.scss";
const Ethereum = () => {
  return (
    <>
      <section className={styles.main1}>
        <div className={styles.container1}>
          <div className={styles.row1}>
            <h3>True Ownership of In-Game Assets on</h3>
            <h2>ETHEREUM & SOLANA BLOCKCHAIN</h2>
          </div>
          <div className={styles.row2}>
            <div className="col-md-8 d-flex align-item-center justify-content-center">
              <div>
                <img src="assets/polygon.png" alt="" width={280} />
              </div>
              <div className="mx-5">
                <p>in Partnership with</p>
              </div>
              <div>
                <img src="assets/holaplex.png" alt="" width={280} />
              </div>
            </div>
          </div>
          <div className={styles.row3}>
            <div className="col-md-6 d-flex align-item-center justify-content-center">
              <div>
                <img src="assets/opensea.png" alt="" width={280} />
              </div>
              <div>
                <img src="assets/ftx.png" alt="" width={280} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.shoesdiv}>
          <img className={styles.shoes} src="assets/shoes.png" alt="" />
          <img
            className={styles.shoesshadow}
            src="assets/shoes-shadow.png"
            alt=""
            
          />
        </div>
        <div className={styles.contactdiv}>
          <img className={styles.contact} src="assets/contact.png" alt="" />
          <img
            className={styles.contactshadow}
            src="assets/contact-shadow.png"
            alt=""
          />
        </div>
        <div className={styles.locationdiv}>
          <img className={styles.location} src="assets/map-symbol.png" alt="" />
          <img
            className={styles.locationshadow}
            src="assets/map-symbolshadow.png"
            alt=""
          />
        </div>
        <div className={styles.watchdiv}>
          <img className={styles.watch} src="assets/watch.png" alt="" />
          <img
            className={styles.watchshadow}
            src="assets/watch-shadow.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Ethereum;
