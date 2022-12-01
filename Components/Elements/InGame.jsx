import React from "react";
import styles from "../../styles/InGame.module.scss";

const InGame = () => {
  return (
    <>
      <section className={styles.main}>
        <div className="container">
          <div className={styles.row1}>
            <h3>SOMNIUM SPACE</h3>
            <h1>INGAME MECHANICS</h1>
          </div>
          <div className="row py-5">
            <div className="col-md-4 text-right">
                <h3>Cross Platform</h3>
                <p>Available on all major VR headsets.</p>
            </div>
            <div className="col-md-2 text-center">
                <img src="assets/cross-platform.png" alt="" />
            </div>
            <div className="col-md-2 text-center">
                <img src="assets/social.png" alt="" />
            </div>
            <div className="col-md-4">
                <h3>Persistent Social VR World</h3>
                <p>Unlimited scalable world built by users within one instance.</p>
            </div>
          </div>
          
          <div className="row pb-5">
            <div className="col-md-4 text-right">
                <h3>Customizable PC Client</h3>
                <p>Create and adjust your own layout setup for fast in-game interaction.</p>
            </div>
            <div className="col-md-2 text-center">
                <img src="assets/client.png" alt="" />
            </div>
            <div className="col-md-2 text-center">
                <img src="assets/home.png" alt="" />
            </div>
            <div className="col-md-4">
                <h3>Virtual Land Ownership</h3>
                <p>Buy and customize your own land. Build anything you envision.</p>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-4 text-right">
                <h3 style={{color:'red'}}>Live Forever</h3>
                <p>Automatic recording mode of yourself on your own property for future AI analysis to bring your avatar to life.</p>
            </div>
            <div className="col-md-2 text-center">
                <img src="assets/heart.png" alt="" />
            </div>
            <div className="col-md-2 text-center">
                <img src="assets/script.png" alt="" />
            </div>
            <div className="col-md-4">
                <h3>Scriptable World</h3>
                <p>Program your own experience and monetize through the asset store or on your property.</p>
            </div>
          </div>

          <div className="row py-4">
            <div className="col-md-4 text-right">
                <h3>Blockchain</h3>
                <p>Integration of blockchain allows true ownership of digital goods, avatars, items and virtual land. We are creating a long lasting Economy which will allow instant monetization for our in-world creators.</p>
            </div>
            <div className="col-md-2 text-center">
                <img src="assets/blockchain.png" alt="" />
            </div>
            <div className="col-md-2 text-center">
                <img src="assets/touch.png" alt="" />
            </div>
            <div className="col-md-4">
                <h3>Monetize Your Space</h3>
                <p>Take advantage of fully programmatic VR advertisement plugin. Capture and analyze gaze tracking, engagement and conversion rates.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default InGame;
