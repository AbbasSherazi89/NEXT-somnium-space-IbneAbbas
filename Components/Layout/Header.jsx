import {React} from "react";
import {Link} from "react-router-dom"
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
      <div className="header">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img src="assets/space logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <ImMenu size={30} color="#fff" />
          </button>
          <div
            className=" header-nav-col collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="navItem">BlockChain</li>
              <li className="navItem">Mechanics</li>
              <li className="navItem">Partners</li>
              <li className="navItem">Events</li>
            </ul>
            <div className="mr-auto">
              <button className="navBtn mt-2">Explore Somnium Map</button>
              <button className="navBtn2 mt-2">Marketplace</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
