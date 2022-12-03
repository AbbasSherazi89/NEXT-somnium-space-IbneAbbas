import React from "react";
// import {BGvideo} from '../../public/assets/bgvideo.mp4'
import styles from "../../styles/Hero.module.scss";
import Carousel from "react-bootstrap/Carousel";
const Hero = () => {
  return (
    <>
      <div className={styles.carousel}>
        <Carousel interval={null}>
          <Carousel.Item>
            <video
              className="d-block w-100 embed-responsive 
              embed-responsive-21by9  "
              src="https://somniumspace.com/images/AvatarsAnimation.mp4"
              autoPlay
              muted
              loop
            />
          </Carousel.Item>
          <Carousel.Item>
            <video
              className="d-block w-100 embed-responsive 
              embed-responsive-21by9"
              src="https://somniumspace.com/images/video22.mp4"
              alt="Second slide"
              autoPlay
              muted
              loop
            />
          </Carousel.Item>
          <Carousel.Item>
            <video
              className="d-block w-100 embed-responsive 
              embed-responsive-21by9"
              src="https://somniumspace.com/images/video33.mp4"
              alt="Third slide"
              autoPlay
              muted
              loop
            />
          </Carousel.Item>
          <Carousel.Item>
            <video
              className="d-block w-100 embed-responsive 
              embed-responsive-21by9"
              src="https://somniumspace.com/images/video33.mp4"
              alt="Third slide"
              autoPlay
              muted
              loop
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.carouselCaption}>
        <div className={styles.caption1}>
          <img
            src="assets/caption1-img.png"
            alt=""
            style={{ marginLeft: "30%" }}
          />
          <img
            src="assets/caption2-img.png"
            alt=""
            style={{ marginLeft: "3%", marginTop: "-4%" }}
          />
          <img
            src="assets/caption3-img.png"
            alt=""
            style={{ marginLeft: "47%", marginTop: "-18%" }}
          />
          <img
            src="assets/caption4-img.png"
            alt=""
            style={{ marginLeft: "-40%", marginTop: "05%" }}
          />
          <p
            className="fw-bold "
            style={{ color: "#fff", marginLeft: "50%", marginTop: "-17%" }}
          >
            Download
          </p>
          <div
            className={styles.accessCube}
            style={{ color: "#fff", marginLeft: "32%", marginTop: "5%" }}
          >
            Access CUBEs
          </div>
          <img
            src="assets/greenBackgroundbtn.png"
            alt=""
            style={{ marginLeft: "22%", marginTop: "5%" }}
            width={150}
          />
          <img
            src="assets/greenBackgroundbtntop.png"
            alt=""
            style={{ marginLeft: "-17%", marginTop: "5%" }}
            width={120}
          />
          <img
            src="assets/violetBackground.png"
            alt=""
            style={{ marginLeft: "5%", marginTop: "5%" }}
            width={150}
          />
          <img
            src="assets/violetBackgroundtop.png"
            alt=""
            style={{ marginLeft: "-17%", marginTop: "5%" }}
            width={120}
          />
          <img
            src="assets/greenBackgroundbtn.png"
            alt=""
            style={{ marginLeft: "5%", marginTop: "5%" }}
            width={150}
          />
          <img
            src="assets/greenBackgroundtop3.png"
            alt=""
            style={{ marginLeft: "-17%", marginTop: "5%" }}
            width={120}
          />
        </div>
      </div>
      <div className={styles.captionImages}>
        <img
          className="position-absolute"
          src="assets/unity.png"
          alt=""
          style={{ marginLeft: "80%", marginTop: "-55%" }}
          width={250}
        />
          <img
          className="position-absolute"
          src="assets/vr-icon.png"
          alt=""
          style={{ marginLeft: "80%", marginTop: "-45%" }}
          width={250}
        />
        <img
          className="position-absolute"
          src="assets/builder.png"
          alt=""
          style={{ marginLeft: "80%", marginTop: "-30%" }}
          width={250}
        />
         <img
          className="position-absolute"
          src="assets/marketplace-icon.png"
          alt=""
          style={{ marginLeft: "80%", marginTop: "-17%" }}
          width={250}
        />
      </div>
    </>
  );
};

export default Hero;
