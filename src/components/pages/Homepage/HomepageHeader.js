import React from "react";
import "./../../../styles/homepage.css";
import { motion, Variants } from "framer-motion";
import TextAnimation from "./TextAnimation";
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
      <script>AOS.init();</script>
      <div className="home-hero">
        <div className="hero-container">
          <div className="row">
            <div className="col">
              <motion.div
                initial={"offset"}
                whileInView={"animated"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 1 }}
                className="hero-text-wrapper"
              >
                <motion.h1 variants={textAnimation} className="heading">
                  Accelerate your <TextAnimation /> results!
                </motion.h1>

                <motion.p variants={textAnimation} className="subtitle">
                  At Anakle, we are agile, strategic, innovative and passionate.
                  Using data driven marketing solutions, we help our clients
                  make faster and more meaningful connections with their target
                  audience.
                </motion.p>
                <motion.button
                  variants={textAnimation}
                  className="nav-button home-button"
                  onClick={onClick}
                >
                  {" "}
                  Contact Us
                </motion.button>
              </motion.div>
            </div>

            <div className="col">
              <motion.div
                initial={"offset"}
                whileInView={"animated"}
                viewport={{ once: false, amount: 1 }}
                transition={{ staggerChildren: 0.5 }}
                className="hero-image-wrapper"
              >
                <motion.img
                  variants={imageAnimation}
                  src="./heroimage.png"
                  alt="Car"
                  className="hero-image"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageHero;
