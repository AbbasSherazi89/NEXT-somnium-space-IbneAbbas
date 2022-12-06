import React from "react";
const Ethereum = () => {
  return (
    <>
      <section className="ethereum">
        <div className="container1">
          <div className="row1">
            <h3>True Ownership of In-Game Assets on</h3>
            <h2>ETHEREUM & SOLANA BLOCKCHAIN</h2>
          </div>
          <div className="row2">
            <div className="col-md-8 d-flex align-item-center justify-content-center">
              <div>
                <img className="etherum-topimages" src="assets/polygon.png" alt="" />
              </div>
              <div className="mx-5">
                <p>in Partnership with</p>
              </div>
              <div>
                <img className="etherum-topimages" src="assets/holaplex.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row3">
            <div className="col-md-6 d-flex align-item-center justify-content-center">
              <div>
                <img className="etherum-topimages" src="assets/opensea.png" alt="" />
              </div>
              <div>
                <img className="etherum-topimages" src="assets/ftx.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="shoesdiv">
          <img className="shoes" src="assets/shoes.png" alt="" />
          <img
            className="shoesshadow"
            src="assets/shoes-shadow.png"
            alt=""
            
          />
        </div>
        <div className="contactdiv">
          <img className="contact" src="assets/contact.png" alt="" />
          <img
            className="contactshadow"
            src="assets/contact-shadow.png"
            alt=""
          />
        </div>
        <div className="locationdiv">
          <img className="location" src="assets/map-symbol.png" alt="" />
          <img
            className="locationshadow"
            src="assets/map-symbolshadow.png"
            alt=""
          />
        </div>
        <div className="watchdiv">
          <img className="watch" src="assets/watch.png" alt="" />
          <img
            className="watchshadow"
            src="assets/watch-shadow.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Ethereum;
