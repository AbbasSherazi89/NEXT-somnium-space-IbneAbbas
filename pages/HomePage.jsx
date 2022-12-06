import React from "react";
import Hero from "Components/Elements/Hero";
import AndroidPt from "Components/Elements/AndroidPt";
import Ethereum from "Components/Elements/Ethereum";
import Available from "Components/Elements/Available";
import VirtualReality from "Components/Elements/VirtualReality";
import InGame from "Components/Elements/InGame";
import Partners from "Components/Elements/Partners";
import FooterTop from "Components/Elements/FooterTop";
import Events from "Components/Elements/Events";
import Community from "Components/Elements/Community";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <AndroidPt />
      <Ethereum />
      <Available />
      <VirtualReality />
      <Available />
      <InGame />
      <Available />
      <Partners />
      <Available />
      <Events />
      <Community />
      <FooterTop />
    </div>
  );
};

export default HomePage;
