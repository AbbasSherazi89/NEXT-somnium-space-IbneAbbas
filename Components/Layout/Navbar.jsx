import React from "react";
import Header from "./Header";
import { AiFillWindows } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbarMain">
      <div>
        <Header />
      </div>
      <div className="cornerDiv">
        <div className="cornerbtn1">
          <p>
            Download VR Client{" "}
            <AiFillWindows className="windowIcons" size={25} />{" "}
          </p>
        </div>
        <div className="cornerbtn2">
          <p>
            Join SOMNIUM <span>WEB</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
