import React from "react";
import "./../../../styles/homepage.css";
// import { motion } from "framer-motion";
import ANAKLE from "./images/ANAKLE.svg"

const textAnimation = {
  offset: { y: -100, opacity: 0 },
  animated: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4 },
    delay: 0,
    duration: 0.01,
  },
};

const imageAnimation = {
  offset: { x: 200, opacity: 0 },
  animated: {
    x: 0,
    opacity: 1,

    delay: 0,
    duration: 0.01,
  },
};

const SubsidiariesComponent = ({
  topline,
  subsidiarylogo,
  underline,
  text,
}) => {
  return (
    <>
      <div className="sub-container ">
        <div className="sub-col container">
          <div className="sub-img-wrapper">
            <img src="./blogimage.jpg" alt="" className="sub-img" />
          </div>

          <div
            // variants={textAnimation}
            className="sub-content-container"
          >
            <div className="sub-content-wrapper">
              <p className="sub-content-topline">{topline}</p>
              <img src={subsidiarylogo} alt="" className="sub-logo" />
              <p className="sub-content-underline">{underline}</p>
              <p className="sub-content-text">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubsidiariesComponent;
