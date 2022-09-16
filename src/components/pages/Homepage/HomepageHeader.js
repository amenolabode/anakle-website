import React from "react";
import "./../../../styles/homepage.css";
import { Container } from "react-bootstrap";
// import {  Variants } from "framer-;
// import TextAnimation from "./TextAnimation";
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />;


const textAnimation = {
  offset: { y: 200, opacity: 0 },
  animated: { y: 0, opacity: 1, rotate: [0, 10, 0] },
};

const imageAnimation = {
  offset: { x: 5000, opacity: 0 },
  animated: { x: 0, opacity: 1 },
};

const HomePageHero = () => {
  function onClick() {
    console.log("click");
  }

  return (
    <>
      <div className="home-hero">
        <div className="hero-container container">
          <div className="row">
            <div className="col">
              <div className="hero-text-wrapper">
                <h1 className="heading">Accelerate your growth results!</h1>

                <p className="subtitle">
                  At Anakle, we are agile, strategic, innovative and passionate.
                  Using data driven marketing solutions, we help our clients
                  make faster and more meaningful connections with their target
                  audience.
                </p>
                <button className="nav-button home-button" onClick={onClick}>
                  {" "}
                  Contact Us
                </button>
              </div>
            </div>

            {/* <div className="col">
              <div className="video-wrapper">
                <Container>
                  <div className="hero-image">
                    <iframe
                      src="https://embed.lottiefiles.com/animation/118197?autoplay=1&mute=1&playlist=118197&loop=1&controls=0"
                      title="YouTube video"
                      width="1280px"
                      height="720px"
                    ></iframe>
                    
                  </div>
                </Container>
              </div>
            </div> */}

            
            <div className="col">
              <div
                initial={"offset"}
                whileInView={"animated"}
                viewport={{ once: false, amount: 1 }}
                transition={{ staggerChildren: 0.5 }}
                className="hero-image-wrapper"
              >
                <img
                  variants={imageAnimation}
                  src="./heroimage.png"
                  alt="Car"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageHero;
