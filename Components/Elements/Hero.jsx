import React from "react";
// import {BGvideo} from '../../public/assets/bgvideo.mp4'
import styles from "../../styles/Hero.module.scss";
import Carousel from "react-bootstrap/Carousel";
const Hero = () => {
  return (
    <>
      <div className={styles.carousel}>
        <Carousel>
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
          <img src="assets/caption1-img.png" alt="" style={{marginLeft:'10%'}} />
          <img src="assets/caption2-img.png" alt="" style={{marginLeft:'30%', marginTop:'-36%'}}/>
          <img src="assets/caption3-img.png" alt="" style={{marginLeft:'40%', marginTop:'-27%'}}/>
          <img src="assets/caption4-img.png" alt="" style={{marginLeft:'40%', marginTop:'-27%'}}/>
          {/* <span className="fw-bold " style={{color:'#fff',marginLeft:'46%', marginTop:'20%' }}>Download</span> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
