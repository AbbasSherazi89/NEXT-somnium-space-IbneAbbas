import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footerMain">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <img src="assets/space logo.png" alt="" />
            <p>
              by Somnium Space LTD. Somnium Space and Somnium Space Logo are
              trademarks of Somnium Space LTD. All other trademarks are the
              property of their respective owners. All rights reserved.
            </p>
          </div>
          <div className="col-md-2">
            <h3>
              <a href="/">Get Somnium</a>
            </h3>
            <h3>
              <a href="/">Events</a>
            </h3>
          </div>
          <div className="col-md-2">
            <h3>
              <a href="/">Partners</a>
            </h3>
            <h3>
              <a href="/">Support</a>
            </h3>
          </div>
          <div className="col-md-2">
            <h3>
              <a href="/">Terms of Service</a>
            </h3>
            <h3>
              <a href="/">Privacy Policy</a>
            </h3>
          </div>
          <div className="col-md-2">
            <h3>
              <a href="/">FAQ</a>
            </h3>
            <h3>
              <a href="/">Contact</a>
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
