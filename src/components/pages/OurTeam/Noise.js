import React from "react";
import "./../../../styles/team.css";

const Noise = () => {
  return (
    <>
      <div className="noise-container">
        <div className="noise-wrapper">
          <div className="noise-col">
            {/* <p className="noise-overline">Studio</p> */}
            <h1 className="noise-text">We like making <span className="italic" >noise</span></h1>
            <img className="noise-bottom-img" src="./blogimage.jpg" alt="" />
            <img className="noise-center-img" src="./blogimage.jpg" alt="" />
            <img className="noise-right-img" src="./blogimage.jpg" alt="" />
            <img className="noise-off-img" src="./blogimage.jpg" alt="" />
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Noise;
